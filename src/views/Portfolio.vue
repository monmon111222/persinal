<template>
  <div id="portfolio">
    <p style="color:#FFFFFF">this</p>
    <video muted autoplay  id="myVideo">
        <source src="../assets/portfolio.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h2>Enterprise Information Portal</h2>
      <h3>2020 Sep - 2020 October</h3>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer &amp; Back-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://github.com/monmon111222/WinHouse_AndroidApp.git" class="content_link">Project Link</a>
          </h4>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Enterprise Information Portal</h2>
      <h3>2020 July - 2020 October</h3>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
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
            <a href="https://github.com/monmon111222/WinHouse_AndroidApp.git" class="content_link">Project Link</a>
          </h4>
        </div>
        <!-- <div id="school_logo"/> -->
      </div>
    </div>
    <div class="content">
      <h2>Authority Management Website</h2>
      <h3>2020 June</h3>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Front-End Developer</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Determined the structure and design of web pages.<br>
            <i class="fa fa-circle content_dot"></i>Concatenate APIs.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://github.com/monmon111222/WinHouse_AndroidApp.git" class="content_link">Project Link</a>
          </h4>
        </div>
        <!-- <div id="school_logo"/> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      windowHeight: window.innerHeight
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
#portfolio {
  height: inherit;
  background: url('~@/assets/bg2.png') center center no-repeat;
  // background-size: cover;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.content {
  font-family: 'LeagueSpartan-Regular';
  position: relative;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 75%;
  margin: 10% auto 10%;
  padding: 10px;
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
#school_logo {
    width: 200px;
    height: 200px;
    background: url('~@/assets/Soochow_University_logo.svg.png') center center no-repeat;
    background-size: 200px auto;
    border-radius: 50% !important;
    margin: 0 100px 0 auto;
  }
</style>
