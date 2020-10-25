<template>
  <div id="home">
    <video muted autoplay  id="myVideo">
        <source src="../assets/bg.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
#home {
  height: inherit;
  // background: url('~@/assets/bg2.png') center center no-repeat;
  // background-size: cover;
}
#myVideo {
  width: inherit;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
