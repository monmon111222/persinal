<template>
  <div id="work_experience">
    <p style="color:#FFFFFF">this</p>
    <video muted autoplay  id="myVideo">
        <source src="../assets/work_experience.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h2>Advanced TEK International Corp</h2>
      <h3>Feb 2020 – May 2020</h3>
      <h4>Intern of Management Information System Departmen</h4>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <!-- 購物網站 -->
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Built a website with application of session on my own.</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>
            In the early part of this project, I played the role of System Analyst to consult with the interviews for the needs of users who played by<br>
            <i class="fa fa-circle content_dot" style="color: transparent;"></i>department manager and System Designer at the same time.<br>
            <i class="fa fa-circle content_dot"></i>
            When most of needs were confirmed, I worked as a Programmer to build the web.<br>
          </div>
          <h4 style="text-align: left;">
            <i class="fa fa-file content_dot"></i>
            <a href="https://github.com/monmon111222/AdvancedTEK_Intern.git" class="content_link">Project Link</a>
          </h4>
          <!-- auth前置 -->
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Learned about Vue.</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>
            Designed the user interface.<br>
            <i class="fa fa-circle content_dot"></i>
            Analyzed the request and response parameter.<br>
            <i class="fa fa-circle content_dot"></i>
            Concatenate API.<br>
            <i class="fa fa-circle content_dot"></i>
            Using GitHub with team member.<br>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Sinopac Securities</h2>
      <h3>May 2019 – Dec 2019</h3>
      <h4>Intern of Information Technology Department</h4>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Worked in Robot Process Automation (RPA) project team. Contribute to reducing operation time and artificial error in various departments’ work.</h5>
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>
            Developed on UiPath using Visual Basic.net.<br>
            <i class="fa fa-circle content_dot"></i>
            Communicated with users and realize their needs.<br>
            <i class="fa fa-circle content_dot"></i>
            Debug on users’ environment.
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Winwintutor online tutor</h2>
      <h3>Mar 2019 – Dec 2019</h3>
      <h4>Online Tutor</h4>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <!-- <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Worked in Robot Process Automation (RPA) project team. Contribute to reducing operation time and artificial error in various departments’ work.</h5> -->
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>
            Mainly teach English to junior high school students.<br>
            <i class="fa fa-circle content_dot"></i>
            Analyzed various students’ learning situation to figure out the best way to prove their grade.<br>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Chen-Li Educational Group</h2>
      <h3>Mar 2013– Jul 2013</h3>
      <h4>Administrative Assistant of Admission Division</h4>
      <div class="detail" style="display:flex;">
        <div style="margin: auto 0 auto 10px;">
          <!-- <h5 style="text-align: left;"><i class="fa fa-check content_check"></i>Worked in Robot Process Automation (RPA) project team. Contribute to reducing operation time and artificial error in various departments’ work.</h5> -->
          <div style="text-align: left;">
            <i class="fa fa-circle content_dot"></i>
            Analyzed different kinds of students’ ability and recommend them which class is suitable for them.<br>
            <i class="fa fa-circle content_dot"></i>
            Followed the students’ learning situation and informed to their parents appropriately.<br>
            <i class="fa fa-circle content_dot"></i>
            Communicated with students’ parents when they had question about courses.<br>
          </div>
        </div>
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
#work_experience {
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
