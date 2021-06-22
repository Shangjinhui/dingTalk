<template>
<!-- 自定义标题，自定义legend -->
<!-- 普通echarts图 -->
  <div class="wid100p h100p" ref="chart"></div>
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
    this.$nextTick(()=>{
          this.initChart();
    })
    window.addEventListener("resize", this.initChart,false);
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.initChart,false)
  },
  methods: {
    initChart() {
      if (this.myEcharts && this.myEcharts.dispose) this.myEcharts.dispose(); //销毁 
      let dom = this.$refs["chart"];
      this.myEcharts = echarts.init(dom);
      this.myEcharts.setOption(this.option);
    },
  },
};
</script>