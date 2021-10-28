<template>
  <div class="page_content" @scroll="infiniteScroll">
    <img class="blue_line_vertical" src="~@/assets/blueline.png" />
    <img class="yellow_line_vertical" src="~@/assets/yellowline.png" />
    <img class="pink_line_vertical" src="~@/assets/pinkline.png" />
    <div class="page_title">
      <div class="d-flex justify-content-end">
        <div class="title">WORK</div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="title">EXPERIENCE</div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <div class="title_line" style="width:45%;"></div>
    </div>
    <div class="pb-5">
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInRight">
          <div class="content">
            <h2>ICool Corp</h2>
            <h3>May 2021 – Now</h3>
            <h4>Front-End Developer</h4>
            <div style="margin: auto 5px;">
              <ul style="text-align:left;">
                <li>Bringing mock-ups to life using HTML, CSS, JavaScript.</li>
                <li>Collaborating closely with the back-end developer.</li>
                <li>Communicating with web designer to meet customer need.</li>
                <li>
                  Building websites and apps that are responsive and usable.
                </li>
                <li>Documenting bug reports, tickets, and any code changes.</li>
                <li>
                  <router-link to="/portfolio" class="content_link"
                    >Go Portfolio</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInLeft">
          <div class="content">
            <h2>Advanced TEK International Corp</h2>
            <h3>Jun 2020 - Nov 2020</h3>
            <h4>Front-End Developer</h4>
            <div style="margin: auto 5px;">
              <ul style="text-align:left;">
                <li>Bringing mock-ups to life using HTML, CSS, JavaScript.</li>
                <li>
                  Collaborating closely with the team to support projects during
                  all phases of delivery.
                </li>
                <li>
                  Building websites and apps that are responsive and usable.
                </li>
                <li>
                  Maintaining an organized workflow using GitHub.
                </li>
                <li>
                  Testing to identify bugs and technical issues before and after
                  deploying.
                </li>
                <li>Documenting bug reports, tickets, and any code changes.</li>
                <li>
                  <router-link to="/portfolio" class="content_link"
                    >Go Portfolio</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInRight">
          <div class="content container">
            <h2>Advanced TEK International Corp</h2>
            <h3>Feb 2020 – May 2020</h3>
            <h4>Intern of Management Information System Departmen</h4>
            <div class="detail">
              <h5 class="detail_title">
                Built a website with application of session on my own.
              </h5>
              <ul style="text-align:left;">
                <li>
                  In the early part of this project, I played the role of System
                  Analyst to consult with the interviews for the needs of users
                  who played by department manager and System Designer at the
                  same time.
                </li>
                <li>
                  When most of needs were confirmed, I worked as a Programmer to
                  build the web.
                </li>
                <li>
                  <a
                    href="https://github.com/monmon111222/AdvancedTEK_Intern.git"
                    class="content_link"
                    >Project Link</a
                  >
                </li>
              </ul>
              <h5 class="detail_title">
                Learned about Vue.
              </h5>
              <ul style="text-align:left;">
                <li>Designed the user interface.</li>
                <li>Analyzed the request and response parameter.</li>
                <li>Concatenate API.</li>
                <li>Using GitHub with team member.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInLeft">
          <div class="content">
            <h2>Sinopac Securities</h2>
            <h3>May 2019 – Dec 2019</h3>
            <h4>Intern of Information Technology Department</h4>
            <div class="detail">
              <div style="margin: auto 5px;">
                <h5 class="detail_title">
                  Worked in Robot Process Automation (RPA) project team.
                  Contribute to reducing operation time and artificial error in
                  various departments’ work.
                </h5>
                <ul style="text-align:left;">
                  <li>Developed on UiPath using Visual Basic.net.</li>
                  <li>Communicated with users and realize their needs.</li>
                  <li>Debug on users’ environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInRight">
          <div class="content">
            <h2>Winwintutor online tutor</h2>
            <h3>Mar 2019 – Dec 2019</h3>
            <h4>Online Tutor</h4>
            <div class="detail">
              <div style="margin: auto 5px;">
                <ul style="text-align:left;">
                  <li>Mainly teach English to junior high school students.</li>
                  <li>
                    Analyzed various students’ learning situation to figure out
                    the best way to prove their grade.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="fade-div wow slideInLeft ">
          <div class="content">
            <h2>Chen-Li Educational Group</h2>
            <h3>Mar 2013– Jul 2013</h3>
            <h4>Administrative Assistant of Admission Division</h4>
            <div class="detail">
              <div style="margin: auto 5px;">
                <ul style="text-align:left;">
                  <li>
                    Analyzed different kinds of students’ ability and recommend
                    them which class is suitable for them.
                  </li>
                  <li>
                    Followed the students’ learning situation and informed to
                    their parents appropriately.
                  </li>
                  <li>
                    Communicated with students’ parents when they had question
                    about courses.
                  </li>
                </ul>
              </div>
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
      wow: {},
      windowHeight: window.innerHeight
    }
  },
  created() {},
  destroyed() {},
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW({
        live: false,
        mobile: true,
        scrollContainer: '.layout-fade_content'
      }).init()
    })
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
