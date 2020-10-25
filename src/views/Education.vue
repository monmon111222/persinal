<template>
  <div id="education">
    <video muted autoplay  id="myVideo">
        <source src="../assets/education.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h2>Soochow University</h2>
      <h3>Sep 2016 - June 2020</h3>
      <h4>Bachelor of Information and Computer Science</h4>
      <div class="detail" style="display:flex;">
        <div style="width: 50%;margin: auto 0 auto 10px;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>School Activity - Leader of project team</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>Delegated job to qualified members.<br>
            <i class="fa fa-circle content_dot"></i>Established a timeline and recorded milestones.<br>
            <i class="fa fa-circle content_dot"></i>Reported status of our project and outcome to professor.<br>
            <i class="fa fa-circle content_dot"></i>Motivated members and help them when they had difficulty.
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://github.com/monmon111222/WinHouse_AndroidApp.git" class="content_link">Project Link</a>
          </h4>
        </div>
        <div id="school_logo"/>
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
#education {
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
