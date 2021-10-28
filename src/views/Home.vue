<template>
  <div class="page_content">
    <img class="blue_line_vertical" src="~@/assets/blueline.png" />
    <img class="yellow_line_vertical" src="~@/assets/yellowline.png" />
    <img class="pink_line_vertical" src="~@/assets/pinkline.png" />
    <div class="home_title">HI, I'M</div>
    <div class="home_title2">BONNIE</div>
    <div class="home_subtitle">FRONT-END DEVELOPER</div>
    <img class="cloud" src="~@/assets/cloud.png" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      res: {
        status: 'success',
        message: '',
        data: [
          {
            cityId: '4442',
            cityName: 'Sin',
            airports: [
              {
                airportId: 'SIN',
                airportName: 'Sinpa',
                longtitude: 103.99,
                latitude: 1.35
              },
              {
                airportId: 'XSP',
                airportName: 'Selector',
                longtitude: 103.99,
                latitude: 1.35
              }
            ]
          },
          {
            cityId: '4869',
            cityName: 'Taipei',
            airports: [
              {
                airportId: 'TPE',
                airportName: 'Taiwan',
                longtitude: 103.99,
                latitude: 1.35
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.tt(this.res)
  },
  methods: {
    tt(res) {
      res.data.forEach(element => {
        element.airports.forEach(airportInfo => {
          if (airportInfo.airportId === 'TPE') {
            console.log('cityName', element.cityName)
          }
        })
      })
    },
    async getData() {
      await getAirportsInfo()
        .then(res => {
          this.airportInfo = res.data
        })
        .catch(error => {
          console.log(error)
        })
      for (let element of this.airportInfo) {
        await getCityInfo(element.cityName)
          .then(res => {
            console.log('cityInfo', res.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>
<style></style>
