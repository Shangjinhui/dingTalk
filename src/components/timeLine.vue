<template>
  <div class="items">
    <div
      v-for="(item, index) in list"
      :key="index"
      :style="{ color: item.color }"
      class="item"
    >
      <div class="time">{{ item.time }}</div>
      <div class="point"></div>
      <div v-if="index + 1 != list.length" class="line"></div>
      <div class="item_right flexba">
        <div class="flex essay">
          <div class="mr15" v-if="item.photo">
            <img class="item_img" :src="item.photo" alt="" />
          </div>
          <div class="w">
            <div class="f16 cor3 fb mb8 text_overflowd" style="width: 80%">
              {{ item.title }}
            </div>
            <div class="content text_3">{{ item.content }}</div>
            <!-- <div class="issue" v-if="type == 1">发布时间：{{ item.time }}</div> -->
          </div>
        </div>
        <div class="see_mores">查看详情》</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    type: Number, //控制发布时间展示
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {},
  methods: {
    lineColor(color, index) {
      let i;
      this.items.forEach((item, j) => {
        if (item.color) {
          i = j;
        }
      });
      if (color && i != index) {
        return color;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  margin: 16px;
}
.item {
  font-size: 13px;
  color: #666;
  display: flex;
  align-content: center;
  position: relative;
  padding-bottom: 26px;
}
.point {
  width: 10px;
  height: 10px;
  border: 1px solid #1492ff;
  border-radius: 50%;
  flex-shrink: 0;
  //   transform:rotate(45deg);
}
.line {
  position: absolute;
  left: 85px;
  top: 11px;
  width: 2px;
  height: calc(100% - 10px);
  background: #e5e5e5;
  flex-shrink: 0;
}
.item_right {
  flex: 1;
  margin-left: 15px;
  .essay {
    width: 585px;
    overflow: hidden;
    .item_img {
      width: 109px;
      height: 82px;
      border-radius: 4px;
      margin-top: 4px;
    }
    .content {
      width: 80%;
      font-size: 14px;
      line-height: 1.2;
      margin-bottom: 8px;
    }
  }

  .see_mores {
    font-size: 14px;
    color: #1492ff;
    flex-shrink: 0;
  }
}

.time {
  width: 80px;
  color: #333;
  font-size: 12px;
  line-height: 1;
  flex-shrink: 0;
}
</style>