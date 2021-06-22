<template>
  <div class="mixture_wap">
    <div class="mixture" id="mixtureId"></div>
  </div>
</template>

<script>
let _c = { id: 1 };
let echarts = require("echarts");
export default {
  props: {
    MixtureData: {
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
    var chartDom = document.getElementById("mixtureId");
    this.myHisLevelChart = echarts.init(chartDom);
    this.$nextTick(()=>{
      this.initChart();
    })
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
          formatter: "{b0}<br/>{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}%", //展示百分比  五条折线
        },
        legend: this.MixtureData.legend, //标记属性
        grid: this.MixtureData.grid, //绘图区调整
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 400000,
            interval: 100000,
          },
          {
            type: "value",
            min: 0,
            max: 125,
            interval: 25,
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        xAxis: {
          //X轴显示数值
          type: this.MixtureData.xAxis.type,
          data: this.MixtureData.xAxis.dataList,
          axisLabel: {
            //坐标轴文字显示样式
            interval: 0,
            lineHeight: this.MixtureData.xAxis.axisLabel.lineHeight,
            rotate: this.MixtureData.xAxis.axisLabel.rotate,
            formatter: function (value) {
              var str = "";
              var num = _this.MixtureData.xAxis.axisLabel.fontNum; //每行显示字数
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
        series: this.MixtureData.series,
      };
      this.myHisLevelChart.setOption(option, true);
    },
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.initChart,false)
  }
};
</script>

<style lang="scss" scoped>
.mixture_wap {
  width: 100%;
  .mixture {
    width: 100%;
    height: 220px;
  }
}
</style>