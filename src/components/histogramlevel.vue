<template>
  <div class="histogram" :style="{ 'width': histogramLevelData.width }">
    <div class="histogramBar" :id="id" :style="{'width':'100%','height': histogramLevelData.histogramBarHeight}"></div>
  </div>
</template>

<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  props: {
    histogramLevelData: {
      type: Object,
    },
  },
  data() {
    return {
      myHisLevelChart: "",
    };
  },
  created() {
    _c.id++;
    this.id = "c_histogramlevel_" + _c.id;
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
        this.myHisLevelChart != null &&
        this.myHisLevelChart != "" &&
        this.myHisLevelChart != undefined
      ) {
        this.myHisLevelChart.dispose(); //销毁
      }
      this.myHisLevelChart = echarts.init(chartDom);
      // 监听页面变化图表自适应
      this.myHisLevelChart.resize()
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
        legend:this.histogramLevelData.legend,//标记属性
        grid: this.histogramLevelData.grid,//绘图区调整
        yAxis:this.histogramLevelData.yAxis,//y轴显示数值，以及范围
        xAxis: {//X轴显示类型
          type: this.histogramLevelData.xAxis.type,
          data: this.histogramLevelData.xAxis.dataList,
          axisLabel: {//坐标轴文字显示样式
            interval: 0,
            lineHeight:this.histogramLevelData.xAxis.axisLabel.lineHeight,
            rotate:this.histogramLevelData.xAxis.axisLabel.rotate,
            formatter:function(value){  
                var str = ""; 
                var num = _this.histogramLevelData.xAxis.axisLabel.fontNum; //每行显示字数 
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
        series: this.histogramLevelData.series
      };
      this.myHisLevelChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.histogram {
  width: 100%;
  // height: 277px;
  // padding-top: 15px;
}
</style>