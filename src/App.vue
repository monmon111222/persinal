<template>
  <div id="app">
    <!-- <div id="nav" :class="{ sidebarOpen: sidebarOpen, sidebarClose: !sidebarOpen }">
      <b-button @click="controlSidebar" id="sidebarToggle"><i class="fa fa-list"></i></b-button>
    </div> -->
    <div id="content" :class="{ sidebarOpen: sidebarOpen, sidebarClose: !sidebarOpen }">
      <b-button @click="controlSidebar" id="sidebarToggle"><i class="fa fa-list"></i></b-button>
      <router-view/>
    </div>
    <b-sidebar id="sidebar" no-close-on-route-change=false v-model="sidebarOpen" z-index=50>
      <div style="padding-top:20%;">
        <div id="logo"></div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Education</router-link></li>
          <li><router-link to="/about">Portfolio</router-link></li>
          <li><router-link to="/about">Work Experience</router-link></li>
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
      sidebarOpen: true,
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/about',
          title: 'about',
          icon: 'fa fa-sort-up',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ]
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  transition: width 0.1s linear 0.1s;
  height: 100%;
  position: relative;
  #sidebarToggle {
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
    background: url('~@/assets/logo.png') center center no-repeat;
    background-size: 100px auto;
    border-radius: 50% !important;
    margin-bottom: 20%;
    margin-left: auto;
    margin-right: auto;
  }
}
.sidebarOpen {
  width: calc(100% - 320px);
  margin-left: 320px;
  background-color: #7eccc2;
}
.sidebarClose {
  width: calc(100%);
  background-color: #7eccc2;
}
.close{
  display: none;
}
</style>
