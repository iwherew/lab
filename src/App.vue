<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "styles/common.css";
  #app{
    min-width: 1440px;
    letter-spacing:2px;
  }
</style>
