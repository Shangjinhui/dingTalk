<template>
  <div class="companyList-ctn" :style="{ 'width': pieData.width }">
    <div :id="id" :style="{'width':'100%','height': pieData.pieHight}"></div>
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
    pieData: {
      type: Object,
    },
  },
  data() {
    return {
      myPieChart:'',
    };
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
      if (this.myPieChart != null && this.myPieChart != "" && this.myPieChart != undefined) {
        this.myPieChart.dispose();//销毁
      }
      this.myPieChart = echarts.init(chartDom);
      let _this=this
      // 监听页面变化图表自适应
      this.myPieChart.resize()
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend:this.pieData.pieLegend,
        series: [
          {
            type: "pie",
            radius:this.pieData.pieSeries.pieRadius,//饼图大小
            center:this.pieData.pieSeries.pieCenter,//饼图位置
            selectedMode: "single",
            itemStyle: {
              color: function (params) {//饼图颜色-渐变
                var colorList = _this.pieData.pieSeries.pieColor;
                // 设置饼图渐变色
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: colorList[params.dataIndex].c1,
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex].c2,
                  },
                ]);
              },
            },
            label: {
              show: this.pieData.lableLine,
              formatter: "{c}",//饼图上展示数值
            },
            labelLine: { show: true },
            data: this.pieData.pieSeries.pieList,//饼图数据
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
  width: 260px;
  border-radius: 4px;
  // overflow: hidden;
  margin-bottom: 10px;
  background: white;
  // padding-top: 15px;
  .companyList-oneItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
