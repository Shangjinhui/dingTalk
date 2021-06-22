<template>
  <div class="companyList-ctn">
    <header class="companyList-header">
      <p class="slide-line"></p>
      <span class="companyList-header--one companyList-header--name">
        {{ title }}
      </span>
    </header>
    <div :id="id" style="width: 100%; height: 277px"></div>
  </div>
</template>
<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  created() {
    _c.id++;
    this.id = "c_pie_" + _c.id;
  },
  props: {
    title: {
      type: String,
    },
    pieData: {
      type: Object,
    },
  },
  data() {
    return {
      myPieChart: "",
    };
  },
  mounted() {
    let _this = this;
    setTimeout(() => {
      this.initChart();
    }, 500);
    // 监听浏览器变化初始化echarts
    window.onresize = function () {
      _this.$nextTick(() => {
        _this.initChart();
      });
    };
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById(this.id);
      if (
        this.myPieChart != null &&
        this.myPieChart != "" &&
        this.myPieChart != undefined
      ) {
        this.myPieChart.dispose(); //销毁
      }
      this.myPieChart = echarts.init(chartDom);
      let _this = this;
      var option = {
        tooltip: {
          trigger: "item",
        },
           xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },yAxis: {
        type: 'value'
    },
        // legend: this.pieData.pieLegend,
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };
      this.myPieChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.companyList-ctn {
  width: 100%;
  border-radius: 4px;
  // overflow: hidden;
  margin-bottom: 10px;
  background: white;
  padding-top: 15px;
  .companyList-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 22px;
    line-height: 22px;
    .slide-line {
      display: inline-block;
      width: 4px;
      height: 16px;
      background: #1d96ff;
      border-radius: 2px;
      margin: 0;
      margin-right: 16px;
    }
    .companyList-header--one {
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
  }
  .companyList-oneItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
