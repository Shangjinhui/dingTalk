<template>
  <div class="companyList-header">
    <p class="slide-line"></p>
    <span class="companyList-header--one companyList-header--name">{{title}}</span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    }
  }
}
</script>

<style>

</style>