<template>
  <div id="address-container">
    <header-top addressGoback="address" addressName="address"></header-top>
    <address-search></address-search>
    <add-address></add-address>
  </div>
</template>

<script>
import headerTop from '../../components/Header/header.vue';
import addressSearch from './children/addressSearch.vue';
import addAddress from '../../page/Address/children/addAddressFooter.vue';

export default {
  components: {
    headerTop,
    addressSearch,
    addAddress
  }

}
</script>

<style scoped lang="scss">
  #address-container {
    width: 100%;
    height: 100%;
  }

</style>