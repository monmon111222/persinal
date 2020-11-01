<template>
  <div class="page_content">
    <div class="row col-12">
      <div class="col-7"/>
      <div class="title col-5">PORTFOLIO</div>
      <div class="col-6"/>
      <div class="title_line col-6"></div>
    </div>
    <div class="content">
      <h2>Customer Relationship Management Web</h2>
      <h3>2020 Sep - 2020 October</h3>
      <div class="detail" style="display:flex;">
        <div class="detail_text" style="float:left;width:50%;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer &amp; Back-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
        </div>
        <div class="detail_logo" style="float:left;width:50%;justify-content: center;display: flex;">
          <img class="content_logo" src="~@/assets/vue.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/boostrap_vue.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/java.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/css.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/html.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/mysql.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/github.png" width="50px" height="50px"/>
        </div>
      </div>
      <div>
        <b-carousel v-model="slide" :interval="4000" controls indicators background="#ababab" img-height="480"
          style="text-shadow: 1px 1px 2px #333;"  @sliding-start="onSlideStart" @sliding-end="onSlideEnd" img-width="1024" >
          <b-carousel-slide  caption="Login Page">
            <template #img>
              <img src="~@/assets/portfolioPic/yfy_login.png" style="width:inherit;height:inherit;">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="View Page">
            <template #img>
              <img src="~@/assets/portfolioPic/yfy_prod_invest.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Edit Page ">
            <template #img>
              <img src="~@/assets/portfolioPic/yfy_prod_invest_edit.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="View Detail Dialog">
            <template #img>
              <img src="~@/assets/portfolioPic/yfy_prod_invest_pop.png">
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="content">
      <h2>Enterprise Information Portal Web</h2>
      <h3>2020 July - 2020 October</h3>
      <div class="detail" style="display:flex;">
        <div class="detail_text" style="float:left;width:50%;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer &amp;  Back-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Wrote system analysis documents.<br>
            <i class="fa fa-circle content_dot"></i>Participated requirements interviews and took minutes.<br>
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
            <i class="fa fa-circle content_dot"></i>Used Activiti BPMN 2.0 to design process which assign people to approve the application.<br>
          </div>
        </div>
        <div class="detail_logo" style="float:left;width:50%;justify-content: center;display: flex;">
          <img class="content_logo" src="~@/assets/vue.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/quasar.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/java.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/css.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/html.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/oracle_sql.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/github.png" width="50px" height="50px"/>
        </div>
      </div>
      <div>
        <b-carousel v-model="slide" :interval="4000" controls indicators background="#ababab" img-height="480"
          style="text-shadow: 1px 1px 2px #333;"  @sliding-start="onSlideStart" @sliding-end="onSlideEnd" img-width="1024" >
          <b-carousel-slide  caption="Login Page">
            <template #img>
              <img src="~@/assets/portfolioPic/ykkap_login.png" style="width:inherit;height:inherit;">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Home Page">
            <template #img>
              <img src="~@/assets/portfolioPic/ykkap_eip.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Apply Page">
            <template #img>
              <img src="~@/assets/portfolioPic/change_contact_apply.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Apply Page">
            <template #img>
              <img src="~@/assets/portfolioPic/change_contact_apply2.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Process">
            <template #img>
              <img src="~@/assets/portfolioPic/change_contact_process.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Popup Combol Dialog">
            <template #img>
              <img src="~@/assets/portfolioPic/change_contact_combol.png">
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="content">
      <h2>Authority Management Web</h2>
      <h3>2020 June</h3>
      <div class="detail" style="display:flex;">
        <div class="detail_text" style="float:left;width:50%;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
        </div>
        <div class="detail_logo" style="float:left;width:50%;justify-content: center;display: flex;">
          <img class="content_logo" src="~@/assets/vue.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/quasar.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/java.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/css.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/html.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/oracle_sql.png" width="50px" height="50px"/>
          <img class="content_logo" src="~@/assets/github.png" width="50px" height="50px"/>
        </div>
      </div>
      <div>
        <b-carousel v-model="slide" :interval="4000" controls indicators background="#ababab" img-height="480"
          style="text-shadow: 1px 1px 2px #333;" img-width="1024" >
          <b-carousel-slide  caption="Login Page">
            <template #img>
              <img src="~@/assets/portfolioPic/ykkap_login.png" style="width:inherit;height:inherit;">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Home Page">
            <template #img>
              <img src="~@/assets/portfolioPic/ykkap_eip.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="System Management Page">
            <template #img>
              <img src="~@/assets/portfolioPic/auth_system_mag.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Application Management Page">
            <template #img>
              <img src="~@/assets/portfolioPic/auth_app_mag.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Menu Management Page">
            <template #img>
              <img src="~@/assets/portfolioPic/auth_menu_mag.png">
            </template>
          </b-carousel-slide>
          <b-carousel-slide  caption="Add Member Dialog">
            <template #img>
              <img src="~@/assets/portfolioPic/auth_add_member.png">
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    controlSidebar () {
      this.sidebarOpen = !this.sidebarOpen
      if (!this.sidebarOpen) {
        this.isSidebarOpen()
      }
    }
  }
}
</script>
<style lang="scss">

</style>
