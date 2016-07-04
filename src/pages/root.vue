<template>
  <i_header></i_header>
  <router-view></router-view>
  <i_footer></i_footer>
</template>
<style>

</style>
<script>
  export default  {
    components: {
      i_header: require("./header.vue"),
      i_nav: require("./nav.vue"),
      i_footer: require("./footer.vue")
    },
    data () {
      return {};
    }
  }
</script>
