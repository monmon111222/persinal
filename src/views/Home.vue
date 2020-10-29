<template>
  <div id="home">
    <!-- <video muted autoplay  id="myVideo" webkit-playsinline playsinline>
        <source src="../assets/bg.mp4" type="video/mp4" id="myVideoSrc">
    </video> -->
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
<style>
#home {
  height: inherit;
  /* background-color: black; */
  background: url('~@/assets/bg2.png') center center no-repeat;
  /* background-size: cover; */
}
#myVideo {
  width: inherit;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
#myVideoSrc {
  src: '../assets/bg.mp4';
  /* @media only screen and (max-device-width : 640px) {
    src: '../assets/home_phone.mp4';
  } */
}
@media only screen and (max-width: 600px) {
  #myVideoSrc {
    src: '../assets/home_phone.mp4';
  }
}
</style>
