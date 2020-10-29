<template>
  <div class="portfolio">
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
        <div class="detail_text">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer &amp; Back-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://drive.google.com/file/d/1nEs7PaTnC_8T7M8bQngnzpw1xhL-26qt/view?usp=sharing" class="content_link">Project Introduction Link</a>
          </h4>
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
      <h2>Enterprise Information Portal</h2>
      <h3>2020 July - 2020 October</h3>
      <div class="detail" style="display:flex;">
        <div class="detail_text">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer &amp;  Back-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Wrote system analysis documents.<br>
            <i class="fa fa-circle content_dot"></i>Participated requirements interviews and took minutes.<br>
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
            <i class="fa fa-circle content_dot"></i>Used Activiti BPMN 2.0 to design process which assign people to approve the application.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://drive.google.com/file/d/1LJrovszs28JqD8n7YfRXPJnYYY9BR2gM/view" class="content_link">Project Introduction Link</a>
          </h4>
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
      <h2>Authority Management Website</h2>
      <h3>2020 June</h3>
      <div class="detail" style="display:flex;">
        <div class="detail_text">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://drive.google.com/file/d/1YOi_ezktQfzk-l60mbk2fZJ16X4CV9th/view" class="content_link">Project Introduction Link</a>
          </h4>
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
.portfolio {
  overflow-y: auto;
  height: inherit;
  background: url('~@/assets/bg.gif') center center no-repeat;
  background-size: 100% 100%;
  position: fixed;
  width: inherit;
}
@media only screen and (max-width: 600px) {
  .portfolio {
    background: url('~@/assets/portfolio_phone.gif') center center no-repeat;
    background-size: 100% 100%;
  }
}
@keyframes lineColorChange {
  from {border-top: transparent 6px dotted;}
  to {border-top: #d4c0a2 6px dotted;}
}
@keyframes fontColorChange {
  from {color: transparent;}
  to {color: #737373;}
}
.title {
  font-size: 90px;
  color: #737373;
  font-weight: 700;
  text-align: right;
  animation-name: fontColorChange;
  animation-duration: 3.5s;
}
.title_line {
  border-top: #d4c0a2 6px dotted;
  animation-name: lineColorChange;
  animation-duration: 3.5s;
}
.content {
  font-family: 'LeagueSpartan-Regular';
  position: relative;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 75%;
  margin: 5% auto 0;
  padding: 10px;
}
@media only screen and (max-width: 600px) {
  .content {
    margin: 50% auto;
    width: 90%;
  }
}
.content_dot {
  font-size: x-small;
  margin-right: 10px;
  margin-left: 10px;
}
.content_check {
  margin-right: 10px;
}
.content_link {
  color: #EBD1C1;
  font-size: medium;
}
.content_link:hover {
  color: #D4BFA1;
  font-size: medium;
}
.carousel > .carousel-inner > .carousel-item > img {
  height: inherit;
  width: inherit;
}
</style>
