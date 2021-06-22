<template>
  <div class="histogram" :style="{ width: lineEchartsData.width }">
    <div
      class="histogramBar"
      :id="id"
      :style="{ width: '100%', height: lineEchartsData.lineEchartsHeight }"
    ></div>
  </div>
</template>

<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  props: {
    lineEchartsData: {
      type: Object,
    },
  },
  data() {
    return {
      mylineEcharts: "",
    };
  },
  created() {
    _c.id++;
    this.id = "c_ineEchart_" + _c.id;
  },
  mounted() {
    // 初始化echarts
    this.$nextTick(()=>{
      this.initChart();
    })
    // 监听浏览器变化初始化echarts
    window.addEventListener('resize',this.initChart,false);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.initChart)
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById(this.id);
      if (
        this.mylineEcharts != null &&
        this.mylineEcharts != "" &&
        this.mylineEcharts != undefined
      ) {
        this.mylineEcharts.dispose(); //销毁
      }
      this.mylineEcharts = echarts.init(chartDom);
      // 监听页面变化图表自适应
      this.mylineEcharts.resize()
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        xAxis:this.lineEchartsData.xAxis,
        yAxis: this.lineEchartsData.yAxis,
        series:this.lineEchartsData.series
      };
      this.mylineEcharts.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>