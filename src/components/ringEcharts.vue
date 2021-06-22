<template>
  <div class="ring_wrap">
    <div class="ring" id="ringId"></div>
  </div>
</template>
<script>
let echarts = require("echarts");
export default {
  props: {
    ringData: {
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
    this.$nextTick(() => {
      this.initChart();
    });

    // 监听浏览器变化初始化echarts
    window.addEventListener("resize", this.initChart,false);
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById("ringId");
      if (
        this.myPieChart != null &&
        this.myPieChart != "" &&
        this.myPieChart != undefined
      ) {
        this.myPieChart.dispose(); //销毁
      }
      this.myPieChart = echarts.init(chartDom);
      this.myPieChart.resize();
      let _this = this;
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: this.ringData.pieLegend,
        graphic: [
          {
            type: "text",
            left: "center",
            top: "50%",
            style: {
              text: "1646",
              textAlign: "center",
              fill: "#1492FF",
              fontSize: 18,
            },
          },
          {
            type: "text",
            left: "center",
            top: "57%",
            style: {
              text: "政务服务事项数",
              textAlign: "center",
              fill: "#666",
              fontSize: 12,
            },
          },
        ],
        series: [
          {
            type: "pie",
            radius: this.ringData.pieSeries.pieRadius, //饼图大小
            center: this.ringData.pieSeries.pieCenter, //饼图位置
            selectedMode: "single",
            avoidLabelOverlap: true,
            label: {
              show: true,
              position: "outside",
              formatter: "{c}", //饼图上展示数值
            },
            labelLine: { show: true },
            itemStyle: {
              color: function (params) {
                //饼图颜色-渐变
                var colorList = _this.ringData.pieSeries.pieColor;
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
            data: this.ringData.pieSeries.pieList, //饼图数据
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: "40",
            //     fontWeight: "bold",
            //   },
            // },
          },
        ],
      };
      this.myPieChart.setOption(option);
    },
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.initChart,false)
  }
};
</script>
<style lang="scss" scoped>
.ring_wrap {
  width: 60%;
  padding-bottom: 24px;
  .ring {
    width: 100%;
    height: 260px;
  }
}
</style>
