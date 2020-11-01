<template>
  <div class="home">
    <img class="blue_line" src="~@/assets/blueline.png" style="position: absolute;transform: rotate(-90deg);top: 200px;left: -15%;"/>
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
.home {
  overflow-y: auto;
  height: inherit;
  background: url('~@/assets/home.gif') center center no-repeat;
  background-size: 100% 100%;
  position: fixed;
  width: inherit;
}
@media only screen and (max-width: 600px) {
  .home {
    background: url('~@/assets/home_phone.gif') center center no-repeat;
    background-size: 100% 100%;
  }
}
</style>
