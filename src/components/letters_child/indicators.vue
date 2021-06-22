<template>
  <div class="indicators">
    <!-- 饼图 -->
    <div class="pie-box">
      <ChartTit title="新开工项目审批分类统计表" />
      <PieEchart :pieData="pieData" />
    </div>
    <!-- 垂直柱状图 -->
    <div class="histogram-box">
      <ChartTit title="新开工项目审批结果统计表" />
      <HistoGramClum class="histogram" :histogramData="histogramData" />
    </div>
    <!-- 水平柱状图 -->
    <div class="histogram-box-level">
      <ChartTit title="续建项目推进情况统计表" />
      <HistoGramLevel
        class="histogram"
        :histogramLevelData="histogramLevelData"
      />
    </div>
  </div>
</template>

<script>
import PieEchart from "@/components/pieEchart.vue";
import HistoGramClum from "@/components/histogramclum.vue";
import HistoGramLevel from "@/components/histogramlevel.vue";
export default {
  name: "indicators",
  components: {
    PieEchart,
    HistoGramClum,
    HistoGramLevel,
  },
  data() {
    return {
      // 垂直柱状图
      histogramData: {
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "34.282vw",
        legend: {
          //标记属性
          data: ["未批复", "已批复"],
          orient: "vertical", //标记排列显示
          top: -1, //标记位置
          right: 1 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          //X轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          splitNumber: 1,
          min: 0,
          max: 20,
          interval: 5,
          axisLabel: {},
        },
        yAxis: {
          //Y轴显示分类
          type: "category",
          dataList: [
            "建筑工程施工许可证",
            "建设工程规划许可证",
            "政府投资项目初步设计批复",
            "建设工程设计方案确认书",
            "建设用地规划许可证",
            "企业投资项目备案表/政府投资项目可行性研究报告批复",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 14, //每行显示字数
            rotate: 0, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "未批复",
            type: "bar",
            data: [1, 0, 2, 7, 16, 10],
            itemStyle: {
              color: "#FF9314", //柱状图颜色
            },
            label: {
              show: true,
              position: "right", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "已批复",
            type: "bar",
            data: [2, 2, 9, 12, 15, 14],
            itemStyle: {
              color: "#1492FF",
            },
            label: {
              show: true,
              position: "right", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
          },
        ],
      },
      // 水平柱状图
      histogramLevelData: {
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "37.005vw",
        legend: {
          //标记属性
          data: ["月度上报完成率", "问题项目督查反馈率", "年度目标完成率"],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 3 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          splitNumber: 1,
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [
            "北山街道",
            "西溪街道",
            "翠苑街道",
            "古荡街道",
            "留下街道",
            "转塘街道",
            "蒋村街道",
            "灵隐街道",
            "文新街道",
            "三墩镇",
            "双浦镇",
            "艺创小镇",
            "云栖小镇",
            "紫荆港科技城",
            "西溪谷"
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 18, //每行显示字数
            rotate: 45, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "月度上报完成率",
            type: "bar",
            data: [23, 43, 70, 22, 41, 83, 42, 81, 8, 30, 29, 4,39,62,96],
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "问题项目督查反馈率",
            type: "bar",
            data: [58, 23, 72, 18, 83, 79, 81, 89, 56, 100, 9, 37,43,40.5,73],
            itemStyle: {
              color: "#09C592",
            },
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "年度目标完成率",
            type: "bar",
            data: [100, 82, 42, 56, 82, 77, 76, 78, 14, 94, 10, 9,62,58,39],
            itemStyle: {
              color: "#FF9314",
            },
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
          },
        ],
      },
      // 饼图
      pieData: {
        width: 100 + "%", //饼图盒子宽度
        pieHight: "34.282vw",
        lableLine: true,
        // 饼图类目
        pieLegend: {
          // 类目位置
          orient: "vertical", //类目排列显示
          top: "center", //类目位置
          left: 40 + "%", //类目位置
          icon: "circle", //类目形状，默认圆角矩形
          itemWidth: 10, //类目原型宽度
          itemHeight: 10, //类目原型高度
          textStyle: {
            lineHeight: 15,
            fontSize: 14,
            color: "#333333",
          },
          data: [
            //类目数据
            "企业投资项目备案表/政府投资项目可行性研究报告批复",
            "建设用地规划许可证",
            "建设工程设计方案确认书",
            "政府投资项目初步设计批复",
            "建设工程规划许可证",
            "建筑工程施工许可证",
          ],
        },
        pieSeries: {
          pieRadius: "70%", //饼图大小，传数组显示环形
          pieCenter: ["20%", "50%"], //饼图位置
          pieColor: [
            //饼图颜色，渐变色
            { c1: " #2DC4FF", c2: "#1492FF" },
            { c1: "#53DEC4", c2: "#29BA91" },
            { c1: "#F77392", c2: "#EC3F59" },
            { c1: "#F8DC77", c2: "#E5981D" },
            { c1: "#CC2CB7", c2: "#FF5AE6" },
            { c1: "#1FA9B7", c2: "#62FAFF" },
          ],
          // 饼图数据展示
          pieList: [
            {
              name: "企业投资项目备案表/政府投资项目可行性研究报告批复",
              value: 24,
            },
            { name: "建设用地规划许可证", value: 31 },
            { name: "建设工程设计方案确认书", value: 19 },
            { name: "政府投资项目初步设计批复", value: 11 },
            { name: "建设工程规划许可证", value: 3 },
            { name: "建筑工程施工许可证", value: 2 },
          ],
        },
      },
    };
  },
  mounted() {
    this.$getPageHeight();
  },
};
</script>

<style lang="scss" scoped>
.indicators {
  width: 100%;
  margin-top: 16px;
  .pie-box {
    width: 100%;
    height: 300px;
    padding-top: 15px;
    background-color: #fff;
  }
  .histogram-box {
    width: 100%;
    height: 300px;
    margin-top: 16px;
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 20px;
  }
  .histogram-box-level {
    width: 100%;
    margin-top: 16px;
    background-color: #fff;
    height: 300px;
    padding-top: 15px;
    padding-bottom: 20px;
  }
}
</style>