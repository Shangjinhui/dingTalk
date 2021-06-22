<template>
  <div class="coumn_wap">
    <div class="coumn" id="coumnId"></div>
  </div>
</template>

<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  props: {
    CoumnData: {
      type: Object,
    },
  },
  data() {
    return {
      myHisLevelChart: "",
    };
  },
  created() {
  },
  mounted() {
    let _this = this;
    var chartDom = document.getElementById("coumnId");
    this.myHisLevelChart = echarts.init(chartDom);
    setTimeout(() => {
      this.initChart();
    }, 500);
    window.addEventListener("resize", this.initChart,false);
  },
  methods: {
    initChart() {
      let _this = this;
      this.myHisLevelChart.resize();
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", //鼠标悬停显示样式
            shadowStyle: {
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowBlur: 2,
            },
          },
        },
        legend: this.CoumnData.legend, //标记属性
        grid: this.CoumnData.grid, //绘图区调整
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
        },
        xAxis: {
          //X轴显示数值
          type: this.CoumnData.xAxis.type,
          data: this.CoumnData.xAxis.dataList,
          axisLabel: {
            //坐标轴文字显示样式
            interval: 0,
            lineHeight: this.CoumnData.xAxis.axisLabel.lineHeight,
            rotate: this.CoumnData.xAxis.axisLabel.rotate,
            formatter: function (value) {
              var str = "";
              var num = _this.CoumnData.xAxis.axisLabel.fontNum; //每行显示字数
              var valLength = value.length; //该项Y轴字数
              var rowNum = Math.ceil(valLength / num); // 行数
              if (rowNum > 1) {
                for (var i = 0; i < rowNum; i++) {
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
            },
          },
        },
        series: this.CoumnData.series,
      };
      this.myHisLevelChart.setOption(option);
    },
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.initChart,false)
  }
};
</script>

<style lang="scss" scoped>
.coumn_wap {
  width: 100%;
  .coumn {
    width: 100%;
    height: 220px;
  }
}
</style>