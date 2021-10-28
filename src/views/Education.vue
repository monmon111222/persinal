<template>
  <div class="page_content">
    <img class="blue_line_vertical" src="~@/assets/blueline.png" />
    <img class="yellow_line_vertical" src="~@/assets/yellowline.png" />
    <img class="pink_line_vertical" src="~@/assets/pinkline.png" />
    <div class="page_title">
      <div class="d-flex justify-content-end">
        <div class="title">EDUCATION</div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="title_line" style="width:40%;"></div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="fade-div">
        <div class="content wow bounceInUp">
          <h2>Soochow University</h2>
          <h3>Sep 2016 - June 2020</h3>
          <h4>Bachelor of Information and Computer Science</h4>
          <div class="row">
            <div class="detail col-md-8">
              <h5 style="text-align: left;">
                <i class="fa fa-check content_check"></i>School Activity -
                Leader of project team
              </h5>
              <div style="text-align: left;">
                <i class="fa fa-circle content_dot"></i>Delegated job to
                qualified members.<br />
                <i class="fa fa-circle content_dot"></i>Established a timeline
                and recorded milestones.<br />
                <i class="fa fa-circle content_dot"></i>Reported status of our
                project and outcome to professor.<br />
                <i class="fa fa-circle content_dot"></i>Motivated members and
                help them when they had difficulty.
                <h4 style="text-align: left;">
                  <i class="fa fa-file content_dot"></i>
                  <a
                    href="https://github.com/monmon111222/WinHouse_AndroidApp.git"
                    class="content_link"
                    >Project Link</a
                  >
                </h4>
              </div>
            </div>
            <div class="school_logo col-md-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    new this.$wow.WOW({
      live: false
    }).init()
  },
  methods: {}
}
</script>
<style lang="scss"></style>
