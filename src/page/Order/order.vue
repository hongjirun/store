<template>
  <div id="order-container">
    <header-top search="order" orderName="order"></header-top>
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

<style scoped lang="scss">

</style>