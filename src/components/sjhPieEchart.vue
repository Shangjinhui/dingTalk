<template>
  <div class="wid100p h100p" ref="pie"></div>
</template>
<script>
let echarts = require("echarts");
export default {
  props: {
    option: {
      type: Object,
    },
  },
  data() {
    return {
      myEcharts: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
    window.addEventListener("resize", this.initChart,false);
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.initChart,false)
  },
  methods: {
    initChart() {
      if (this.myEcharts && this.myEcharts.dispose) this.myEcharts.dispose(); //销毁
      let dom = this.$refs["pie"];
      this.myEcharts = echarts.init(dom);
      this.myEcharts.setOption(this.option);
    },
  },
};
</script>