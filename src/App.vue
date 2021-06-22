<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body{
  overflow: hidden;
  /* background-color: #F4F5F7; */
}
#app {
/* margin: 0 16px; */
}
</style>
