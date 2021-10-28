<template>
  <div class="page_content" @scroll="infiniteScroll">
    <img class="blue_line_vertical" src="~@/assets/blueline.png" />
    <img class="yellow_line_vertical" src="~@/assets/yellowline.png" />
    <img class="pink_line_vertical" src="~@/assets/pinkline.png" />
    <div class="page_title">
      <div class="d-flex justify-content-end">
        <div class="title">PORTFOLIO</div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="title_line" style="width:40%;"></div>
      </div>
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-center">
        <div class="fade-div wow flipInX">
          <div class="content row mb-3">
            <h2 class="col-12">Trusty - Website</h2>
            <h3 class="col-12">2021 May - 2021 July</h3>
            <div class="col-12">
              <div class="row mb-2">
                <div class="col-sm-8">
                  <h5 style="text-align: left;">
                    <i class="fa fa-check content_check"></i>Front-End Developer
                  </h5>
                  <ul style="text-align:left;margin-bottom: 2%;">
                    <li>
                      Determined the front-end structure.
                    </li>
                    <li>
                      Build web pages based on design layout.
                    </li>
                    <li>
                      Concatenate APIs.
                    </li>
                    <li>
                      SEO optimization.
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://trustyec.com/"
                        class="content_link"
                        >https://trustyec.com/</a
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="col-sm-4 d-flex justify-content-start align-content-center flex-wrap"
                >
                  <img class="content_logo" src="~@/assets/vue.png" />
                  <img
                    class="content_logo"
                    src="~@/assets/tailwind.png"
                    style="border-radius: 50px;"
                  />
                  <img
                    class="content_logo"
                    src="~@/assets/nuxt.png"
                    style="border-radius: 50px;"
                  />
                  <img class="content_logo" src="~@/assets/css.png" />
                  <img class="content_logo" src="~@/assets/html.png" />
                  <img
                    class="content_logo"
                    src="~@/assets/bitbucket.png"
                    style="border-radius: 50px;"
                  />
                </div>
              </div>
            </div>
            <div>
              <b-carousel
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                img-width="1024"
              >
                <b-carousel-slide caption="Home Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/trusty_home.jpg"
                      style="width:inherit;height:inherit;"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Category Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_category.jpg" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Shop Info Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_shop_lili.jpg" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Home Page On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_home_m.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Category Page On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_category_m.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Shop Page On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_shop_m.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Product Page On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_products_m.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Product Detail Page On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_sku_m.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Reviews Page and Spinner On Mobile">
                  <template #img>
                    <img src="~@/assets/portfolioPic/trusty_reviews_m.png" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow flipInX">
          <div class="content row mb-3">
            <h2 class="col-12">Customer Relationship Management Web</h2>
            <h3 class="col-12">2020 Sep - 2020 October</h3>
            <div class="col-12">
              <div class="row mb-2">
                <div class="col-sm-8">
                  <h5 style="text-align: left;">
                    <i class="fa fa-check content_check"></i>Full-End Developer
                  </h5>
                  <ul style="text-align:left;margin-bottom: 2%;">
                    <li>
                      Determined the structure and design of web pages.
                    </li>
                    <li>
                      Build and concatenate APIs.
                    </li>
                  </ul>
                </div>
                <div
                  class="col-sm-4 d-flex justify-content-start align-content-center flex-wrap"
                >
                  <img class="content_logo" src="~@/assets/vue.png" />
                  <img class="content_logo" src="~@/assets/boostrap_vue.png" />
                  <img class="content_logo" src="~@/assets/java.png" />
                  <img class="content_logo" src="~@/assets/css.png" />
                  <img class="content_logo" src="~@/assets/html.png" />
                  <img class="content_logo" src="~@/assets/mysql.png" />
                  <img class="content_logo" src="~@/assets/github.png" />
                </div>
              </div>
            </div>
            <div>
              <b-carousel
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                img-width="1024"
              >
                <b-carousel-slide caption="Login Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/yfy_login.png"
                      style="width:inherit;height:inherit;"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="View Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/yfy_prod_invest.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Edit Page ">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/yfy_prod_invest_edit.png"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="View Detail Dialog">
                  <template #img>
                    <img src="~@/assets/portfolioPic/yfy_prod_invest_pop.png" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow flipInX">
          <div class="content row mb-3">
            <h2 class="col-12">Enterprise Information Portal Web</h2>
            <h3 class="col-12">2020 July - 2020 October</h3>
            <div class="col-12">
              <div class="row mb-2">
                <div class="col-sm-8">
                  <h5 style="text-align: left;">
                    <i class="fa fa-check content_check"></i>Front-End Developer
                    &amp; Back-End Developer
                  </h5>
                  <ul style="text-align:left;margin-bottom: 2%;">
                    <li>
                      Wrote system analysis documents.
                    </li>
                    <li>
                      Participated requirements interviews and took minutes.
                    </li>
                    <li>
                      Determined the structure and design of web pages.
                    </li>
                    <li>
                      Used Activiti BPMN 2.0 to design process which assign
                      people to approve the application.
                    </li>
                  </ul>
                </div>
                <div
                  class="col-sm-4 d-flex justify-content-start align-content-center flex-wrap"
                >
                  <img class="content_logo" src="~@/assets/vue.png" />
                  <img class="content_logo" src="~@/assets/quasar.png" />
                  <img class="content_logo" src="~@/assets/java.png" />
                  <img class="content_logo" src="~@/assets/css.png" />
                  <img class="content_logo" src="~@/assets/html.png" />
                  <img class="content_logo" src="~@/assets/oracle_sql.png" />
                  <img class="content_logo" src="~@/assets/github.png" />
                </div>
              </div>
            </div>
            <div>
              <b-carousel
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                img-width="1024"
              >
                <b-carousel-slide caption="Login Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/ykkap_login.png"
                      style="width:inherit;height:inherit;"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Home Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/ykkap_eip.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Apply Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/change_contact_apply.png"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Apply Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/change_contact_apply2.png"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Process">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/change_contact_process.png"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Popup Combol Dialog">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/change_contact_combol.png"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow flipInX">
          <div class="content row mb-3">
            <h2 class="col-12">Authority Management Web</h2>
            <h3 class="col-12">2020 June</h3>
            <div class="col-12">
              <div class="row mb-2">
                <div class="col-sm-8">
                  <h5 style="text-align: left;">
                    <i class="fa fa-check content_check"></i>Front-End Developer
                  </h5>
                  <ul style="text-align:left;margin-bottom: 2%;">
                    <li>
                      Determined the structure and design of web pages.
                    </li>
                    <li>
                      Concatenate APIs.
                    </li>
                  </ul>
                </div>
                <div
                  class="col-sm-4 d-flex justify-content-start align-content-center flex-wrap"
                >
                  <img class="content_logo" src="~@/assets/vue.png" />
                  <img class="content_logo" src="~@/assets/quasar.png" />
                  <img class="content_logo" src="~@/assets/java.png" />
                  <img class="content_logo" src="~@/assets/css.png" />
                  <img class="content_logo" src="~@/assets/html.png" />
                  <img class="content_logo" src="~@/assets/oracle_sql.png" />
                  <img class="content_logo" src="~@/assets/github.png" />
                </div>
              </div>
            </div>
            <div>
              <b-carousel
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                img-width="1024"
              >
                <b-carousel-slide caption="Login Page">
                  <template #img>
                    <img
                      src="~@/assets/portfolioPic/ykkap_login.png"
                      style="width:inherit;height:inherit;"
                    />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Home Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/ykkap_eip.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="System Management Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/auth_system_mag.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Application Management Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/auth_app_mag.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Menu Management Page">
                  <template #img>
                    <img src="~@/assets/portfolioPic/auth_menu_mag.png" />
                  </template>
                </b-carousel-slide>
                <b-carousel-slide caption="Add Member Dialog">
                  <template #img>
                    <img src="~@/assets/portfolioPic/auth_add_member.png" />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
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
    return {
      slide: 0,
      sliding: null
    }
  },
  created() {},
  mounted() {
    new this.$wow.WOW({
      live: false
    }).init()
  },
  methods: {
    controlSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      if (!this.sidebarOpen) {
        this.isSidebarOpen()
      }
    },
    infiniteScroll() {
      const fadeDiv = document.getElementsByClassName('fade-div')
      fadeDiv.forEach(element => {
        element.style.visibility = 'visible'
        element.style.removeProperty('animation-name')
        element.style.mozAnimationName = null
      })
    }
  }
}
</script>
<style lang="scss"></style>
