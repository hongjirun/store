<template>
  <div id="address-container">
    <header-top addressGoback="address" addressName="address"></header-top>
    <address-search></address-search>
    <foot-bottom></foot-bottom>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
import addressSearch from './children/addressSearch.vue';
import footBottom from '../../components/Footer/footer.vue';
export default {
  components: {
    headerTop,
    footBottom,
    addressSearch
  }

}
</script>

<style scoped lang="scss">
  #address-container {
    width: 100%;
    height: 100%;
  }

</style>