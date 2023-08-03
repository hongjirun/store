<template>
  <div id="mine-container">
    <header-top mineName="mine"></header-top>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
import footerBottom from '../../components/Footer/footer.vue';
export default {
  components: {
    headerTop,
    footerBottom
  }
}
</script>

<style>

</style>