<template>
  <div class="page_content">
    <img class="blue_line_vertical" src="~@/assets/blueline.png"/>
    <img class="yellow_line_vertical" src="~@/assets/yellowline.png"/>
    <img class="pink_line_vertical" src="~@/assets/pinkline.png"/>
    <div class="row col-12">
      <div class="col-7"/>
      <div class="title col-5">RESUME</div>
      <div class="col-6"/>
      <div class="title_line col-6"></div>
    </div>
    <div class="content">
      <pdf src="/resume.pdf"></pdf>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    pdf
  }
}
</script>
<style lang="scss">

</style>
