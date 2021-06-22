<template>
  <div class="head">
    <p class="cor3 fb tips">{{tips}}</p>
    <div class="tab_nav">
      <div class="common" :class="type == 0 ? 'bgc' : ''" @click="change(0)">
        指标体系
      </div>
      <div class="common" :class="type == 1 ? 'bgc' : ''" @click="change(1)">
        工作体系
      </div>
      <div class="common" :class="type == 2 ? 'bgc' : ''" @click="change(2)">
        政策体系
      </div>
      <div class="common" :class="type == 3 ? 'bgc' : ''" @click="change(3)">
        评价体系
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: Number,
    tips:String
  },
  methods: {
    change(num) {
      this.$emit("typeNum", num);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab_nav {
  padding: 13px 30px;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  .common {
    width: 145Px;
    height: 58Px;
    text-align: center;
    line-height: 58Px;
    color: #333;
    background-image: url(../assets/img/tab_img.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #e5e5e5;
    border-radius: 6Px;
    font-size: 16Px;
    cursor: pointer;
  }
  .bgc {
    color: #fff;
    background-color: #1492ff;
    background-image: url(../assets/img/tab_img_act.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.tips{
  height: 57Px;
  line-height: 57Px;
  border-radius: 4Px 4Px 0 0;
  text-align: center;
  background-color: #E7F4FF;
  font-size: 24Px;
}
</style>