<template>
  <div id="about">
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
#about {
  height: 625px;
  background: url('~@/assets/bg.png') center center no-repeat;
}
</style>
