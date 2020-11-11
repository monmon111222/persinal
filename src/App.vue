<template>
  <div id="app">
    <!-- <div id="nav" :class="{ sidebarOpen: sidebarOpen, sidebarClose: !sidebarOpen }">
      <b-button @click="controlSidebar" id="sidebarToggle"><i class="fa fa-list"></i></b-button>
    </div> -->
    <div id="page_view" class="sidebarOpen">
      <div id="navbar">
        <router-link to="/"><img src="https://img.icons8.com/bubbles/50/000000/home-page.png"/>Home</router-link>
        <router-link to="/education"><img src="https://img.icons8.com/bubbles/50/000000/language.png"/>Education</router-link>
        <router-link to="/portfolio"><img src="https://img.icons8.com/bubbles/50/000000/picture-in-picture.png"/>Portfolio</router-link>
        <router-link to="/workExperience"><img src="https://img.icons8.com/bubbles/50/000000/work.png"/>Work</router-link>
        <router-link to="/resume"><img src="https://img.icons8.com/bubbles/50/000000/single-page-mode.png"/>Resume</router-link>
      </div>
      <router-view/>
    </div>
    <b-sidebar id="sidebar"  v-model="sidebarOpen" z-index=50 width="240px" :no-close-on-route-change="true">
      <div style="padding-top:20%;">
        <div id="logo"></div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/education">Education</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/workExperience">Work Experience</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      windowHeight: window.innerHeight,
      sidebarOpen: true
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
@font-face {
  font-family: 'leaguespartan-bold';
  src: url('~@/assets/fonts/leaguespartan-bold.woff') format('woff');
}
@font-face {
  font-family: 'LeagueSpartan-Regular';
  src: url('~@/assets/fonts/LeagueSpartan-Regular.woff') format('woff');
}
html,
body {
    height: 100%;
    font-family: 'leaguespartan-bold';
}
@media only screen and (max-width: 700px) {
  #sidebar {
    display: none !important;
  }
  .sidebarOpen {
  width: 100% !important;
  margin-left: 0px !important;
  }
  #navbar {
    justify-content: center;
    display: flex !important;
  }
}
#app {
  height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#page_view {
  transition: width 0.1s linear 0.1s;
  height: 100%;
  position: relative;
  #sidebarToggle {
    z-index: 100;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
#nav {
  transition: width 0.1s linear 0.1s;
  padding-top: 30px;
  height: 60px;
  position: relative;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  #sidebarToggle {
    z-index: 100;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
#sidebar {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4E7093;
    }
  }
  ul li{
    list-style-type:none;
  }
  ul {
    padding-left: 0px;
  }
  li{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  #logo {
    width: 100px;
    height: 100px;
    background: url('~@/assets/author.jpg') center center no-repeat;
    background-size: 100px auto;
    border-radius: 50% !important;
    margin-bottom: 20%;
    margin-left: auto;
    margin-right: auto;
  }
}
#navbar {
  display: none;
  background: #F9FAFB;
  a {
    font-size: small;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4E7093;
    }
  }
  img {
    width: 25px;
    height: 25px;
  }
}
.sidebarOpen {
  width: calc(100% - 15%);
  margin-left: 15%;
  background-color: #7eccc2;
}
.close{
  display: none;
}
</style>
