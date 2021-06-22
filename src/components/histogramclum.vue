<template>
  <div class="histogram" :style="{ 'width': histogramData.width }">
  <div class="histogramBar" :id="id" :style="{'width':'100%','height': histogramData.histogramBarHeight}"></div>
  </div>
</template>

<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  props: {
    histogramData: {
      type: Object,
    },
  },
  data() {
    return {
      myHisChart: "",
    };
  },
  created() {
    _c.id++;
    this.id = "c_histogram_" + _c.id;
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
      let _this=this
      var chartDom = document.getElementById(this.id);
      if (
        this.myHisChart != null &&
        this.myHisChart != "" &&
        this.myHisChart != undefined
      ) {
        this.myHisChart.dispose(); //销毁
      }
      this.myHisChart = echarts.init(chartDom);
      // 监听页面变化图表自适应
      this.myHisChart.resize()
      var option = {
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "shadow",//鼠标悬停显示样式
            shadowStyle:{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 2
            }
          },
        },
        legend:this.histogramData.legend,//标记属性
        grid: this.histogramData.grid,//绘图区调整
        xAxis:this.histogramData.xAxis,//x轴显示数值，以及范围
        yAxis: {//Y轴显示类型
          type: this.histogramData.yAxis.type,
          data: this.histogramData.yAxis.dataList,
          axisLabel: {//坐标轴文字显示样式
            interval: 0,
            lineHeight:this.histogramData.yAxis.axisLabel.lineHeight,
            rotate:this.histogramData.yAxis.axisLabel.rotate,
            formatter:function(value){  
                var str = ""; 
                var num = _this.histogramData.yAxis.axisLabel.fontNum; //每行显示字数 
                var valLength = value.length; //该项Y轴字数  
                var rowNum = Math.ceil(valLength / num); // 行数  
                if(rowNum > 1) {
                    for(var i = 0; i < rowNum; i++) {
                        var temp = "";
                        var start = i * num;
                        var end = start + num;
                        temp = value.substring(start, end) + "\n";
                        str += temp; 
                    }
                    return str;
                } else {
                    return value;
                } 
            }
          }
        },
        series: this.histogramData.series
      };
      this.myHisChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.histogram {
  width: 100%;
  // height: 277px;
  // padding-top: 15px;
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
}
</style>