<template>
  <div class="indicatorsCity">
    <div class="city-questions">
      <div class="circlePie">
        <ChartTit title="3月份各城区问题分布数" />
        <PieEchart :pieData="circleData" />
      </div>
      <div class="clumHistogram">
        <ChartTit title="市级各条线交派问题整改情况" />
        <HistoGramClum class="histogram" :histogramData="histogramData" />
      </div>
    </div>
    <div class="street-questions">
      <ChartTit title="3月份各城区问题分布数" />
      <PieEchart :pieData="pieData" />
    </div>
    <div class="questions-other">
      <ChartTit title="当月西湖区各类问题整改情况" />
      <HistoGramLevel
        class="histogram"
        :histogramLevelData="histogramLevelData"
      />
    </div>
    <div class="questions-town">
      <ChartTit title="各镇街问题类型分布" />
      <HistoGramLevel
        class="histogram"
        :histogramLevelData="histogramLevelTownData"
      />
    </div>
  </div>
</template>

<script>
import PieEchart from "@/components/pieEchart.vue";
import HistoGramLevel from "@/components/histogramlevel.vue";
import HistoGramClum from "@/components/histogramclum.vue";
export default {
  components: {
    HistoGramLevel,
    PieEchart,
    HistoGramClum,
  },
  data() {
    return {
      // 环形图
      circleData: {
        width: 100 + "%", //饼图盒子宽度
        pieHight: "34.282vw",
        lableLine: false,
        // 饼图类目
        pieLegend: {
          // 类目位置
          orient: "vertical", //类目排列显示
          top: "center", //类目位置
          left: 50 + "%", //类目位置
          icon: "circle", //类目形状，默认圆角矩形
          itemWidth: 10, //类目原型宽度
          itemHeight: 10, //类目原型高度
          textStyle: {
            rich: {//富文本格式的样式类目设置
              name: {
                  verticalAlign: 'left',
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  // color:()=>{ return '#333' },
                  width: 40
              },
              val: {
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  // color:()=>{ return '#333' },
                  width: 40

              },
              persent: {
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  // color:()=>{},
                  width: 40
              }
            }
          },
          data: [
            //类目数据
            "上城",
            "下城",
            "江干",
            "拱墅",
            "景区",
            "西湖",
            "滨江",
          ],
        },
        pieSeries: {
          pieRadius: ["30%", "50%"], //饼图大小，传数组显示环形
          pieCenter: ["25%", "48%"], //饼图位置
          pieColor: [
            //饼图颜色，渐变色
            { c1: "#2DC4FF", c2: "#1492FF" },
            { c1: "#53DEC4", c2: "#29BA91" },
            { c1: "#F77392", c2: "#EC3F59" },
            { c1: "#F8DC77", c2: "#E5981D" },
            { c1: "#CC2CB7", c2: "#FF5AE6" },
            { c1: "#1FA9B7", c2: "#62FAFF" },
            { c1: "#4E4C64", c2: "#878393" },
          ],
          // 饼图数据展示
          pieList: [
            { name: "上城", value: 3 },
            { name: "下城", value: 2.1 },
            { name: "江干", value: 2.95 },
            { name: "拱墅", value: 2.57 },
            { name: "景区", value: 2.7 },
            { name: "西湖", value: 1.2 },
            { name: "滨江", value: 3.5 },
          ],
        },
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
          left: 50 + "%", //类目位置
          icon: "circle", //类目形状，默认圆角矩形
          itemWidth: 10, //类目原型宽度
          itemHeight: 10, //类目原型高度
          textStyle: {
            rich: {//富文本格式的样式类目设置
              name: {
                  verticalAlign: 'left',
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  width: 40
              },
              val: {
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  width: 40

              },
              persent: {
                  fontSize: 14,
                  align: 'left',
                  lineHeight: 15,
                  color: "#333333",
                  width: 40
              }
            }
          },
          data: [
            //类目数据
            "北山",
            "西溪",
            "灵隐",
            "翠苑",
            "文新",
            "古荡",
            "转塘",
            "留下",
            "蒋村",
            "三墩",
            "双浦",
          ],
        },
        pieSeries: {
          pieRadius: "70%", //饼图大小，传数组显示环形
          pieCenter: ["25%", "50%"], //饼图位置
          pieColor: [
            //饼图颜色，渐变色
            { c1: "#2DC4FF", c2: "#1492FF" },
            { c1: "#53DEC4", c2: "#29BA91" },
            { c1: "#F77392", c2: "#EC3F59" },
            { c1: "#F8DC77", c2: "#E5981D" },
            { c1: "#1FA9B7", c2: "#62FAFF" },
            { c1: "#CC2CB7", c2: "#FF5AE6" },
            { c1: "#5A93F4", c2: "#3F60E5" },
            { c1: "#F1C218", c2: "#DFD400" },
            { c1: "#77AFB7", c2: "#477080" },
            { c1: "#DA782F", c2: "#DB6B46" },
            { c1: "#737F89", c2: "#666D8A" },
          ],
          // 饼图数据展示
          pieList: [
            { name: "北山", value: 86 },
            { name: "西溪", value: 109 },
            { name: "灵隐", value: 117 },
            { name: "翠苑", value: 76 },
            { name: "文新", value: 145 },
            { name: "古荡", value: 119 },
            { name: "转塘", value: 95 },
            { name: "留下", value: 102 },
            { name: "蒋村", value: 97 },
            { name: "三墩", value: 77 },
            { name: "双浦", value: 116 },
          ],
        },
      },
      // 垂直柱状图
      histogramData: {
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "34.282vw",
        legend: {
          //图例属性
          data: ["已整改", "未整改"],
          orient: "horizontal", //图例排列显示
          bottom: "8%", //图例位置
          left: "center", //图例位置
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "22%",
          containLabel: true,
        },
        xAxis: {
          //X轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          splitNumber: 1,
          min: 0,
          max: 800,
          interval: 200,
          axisLabel: {},
        },
        yAxis: {
          //Y轴显示分类
          type: "category",
          dataList: [
            "市专班下发问题",
            "市大队复查点位",
            "“回头看任务清单”",
            "“行走杭州”问题",
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
            name: "已整改",
            type: "bar",
            stack: "total",
            data: [183, 95, 125, 701],
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            label: {
              show: true,
              position: "inside", //数值显示位置
            },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "未整改",
            type: "bar",
            stack: "total",
            data: [10, 0, 0, 15],
            itemStyle: {
              color: "#FF9314",
            },
            label: {
              show: true,
              position: "insideLeft", //数值显示位置
            },
            labelLine: { show: false }, //是否显示线条
          },
        ],
      },
      // 水平柱状图
      histogramLevelData: {
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "46.782vw",
        legend: {
          //标记属性
          data: ["已整改", "未整改"],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 3 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 10,
          itemHeight: 10,
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
          max: 250,
          interval: 50,
          axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [
            "城市综合环境秩序",
            "城市道路（河道）及两侧环境",
            "园林绿化环境",
            "建设工地环境秩序",
            "住宅小区环境秩序",
            "公路铁路两侧环境",
            "道路交通秩序",
            "城市生态环境",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 20, //每行显示字数
            rotate: 45, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "已整改",
            type: "bar",
            stack: "total",
            data: [175, 84, 112, 114, 82, 92, 160, 235],
            itemStyle: {
              //柱状图样式设置
              color: "#1492FF",
            },
            label: {
              show: false,
            },
            // emphasis: {//鼠标移入是否展示当前的柱状图
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "未整改",
            type: "bar",
            stack: "total",
            data: [18, 11, 13, 14, 17, 0, 2, 0],
            itemStyle: {
              color: "#FF9314", //柱状图颜色
            },
            label: {
              show: false,
            },
            // emphasis: {//鼠标移入是否展示当前的柱状图
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
        ],
      },
      histogramLevelTownData: {
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "37.9vw",
        legend: {
          //标记属性
          data: [
            "城市综合环境秩序",
            "城市道路两侧",
            "园林绿化环境",
            "建设工地环境",
            "住宅小区环境秩序",
            "公路铁路两侧环境",
            "城市道路交通秩序",
            "城市生态环境",
          ],
          orient: "horizontal", //标记排列显示
          top: 8, //标记位置
          left: 3 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 10,
          itemHeight: 10,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "2%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          splitNumber: 1,
          min: 0,
          max: 150,
          interval: 50,
          axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [
            "北山",
            "西溪",
            "灵隐",
            "翠苑",
            "文新",
            "古荡",
            "转塘",
            "留下",
            "蒋村",
            "三墩",
            "双浦",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 20, //每行显示字数
            rotate: 0, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "城市综合环境秩序",
            type: "bar",
            stack: "total",
            data: [10, 21, 32, 10, 45, 13, 20, 10, 5, 8, 19],
            itemStyle: {
              color: "#1492FF",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "城市道路两侧",
            type: "bar",
            stack: "total",
            data: [18, 7, 8, 9, 10, 6, 7, 9, 7, 7, 7],
            itemStyle: {
              color: "#09C592",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "园林绿化环境",
            type: "bar",
            stack: "total",
            data: [8, 19, 8, 4, 15, 8, 13, 8, 16, 8, 18],
            itemStyle: {
              color: "#EC3F59",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "建设工地环境",
            type: "bar",
            stack: "total",
            data: [4, 8, 12, 13, 20, 10, 22, 10, 9, 10, 10],
            itemStyle: {
              color: "#E5981D",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "住宅小区环境秩序",
            type: "bar",
            stack: "total",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            itemStyle: {
              color: "#CC2CB7",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "公路铁路两侧环境",
            type: "bar",
            stack: "total",
            data: [8, 8, 9, 8, 12, 8, 7, 8, 8, 8, 8],
            itemStyle: {
              color: "#12BAD1",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "城市道路交通秩序",
            type: "bar",
            stack: "total",
            data: [8, 28, 18, 15, 8, 34, 8, 9, 8, 18, 8],
            itemStyle: {
              color: "#5177EB",
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
          {
            name: "城市生态环境",
            type: "bar",
            stack: "total",
            data: [20, 8, 20, 8, 25, 30, 8, 38, 34, 8, 36],
            itemStyle: {
              color: "#DD7B44", //柱状图颜色
            },
            label: {
              show: false,
            },
            // emphasis: {
            //   focus: "series",
            // },
            labelLine: { show: false }, //是否显示线条
          },
        ],
      },
    };
  },
  mounted() {
    this.$getPageHeight();
    // 图例显示百分比加数值
    let _this = this;
    this.circleData.pieLegend.formatter = function (name) {
      var data = _this.circleData.pieSeries.pieList;
      var total = 0;
      var tarValue;
      for (var i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          tarValue = data[i].value;
        }
      }
      var persent = _this.$keepTwoFloat(tarValue, total);
      let arr = ['{name|' + name + '}{val|' + tarValue + '}{persent|' +persent+ '%}'];
      return arr.join('\n')
    };
    this.pieData.pieLegend.formatter = function (name) {
      var data = _this.pieData.pieSeries.pieList;
      var total = 0;
      var tarValue;
      for (var i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          tarValue = data[i].value;
        }
      }
      var persent = _this.$keepTwoFloat(tarValue, total);
      let arr = ['{name|' + name + '}{val|' + tarValue + '}{persent|' +persent+ '%}'];
      return arr.join('\n')
    };
  },
};
</script>

<style lang="scss" scoped>
.indicatorsCity {
  width: 100%;
  margin-top: 16px;
  .city-questions {
    width: 100%;
    height: 314px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circlePie,
    .clumHistogram {
      width: 49%;
      height: 300px;
      background-color: #fff;
      border-radius: 4px;
      padding-top: 15px;
    }
  }
  .street-questions {
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    padding-top: 15px;
    margin-top: 16px;
  }
  .questions-other {
    width: 100%;
    height: 407px;
    background-color: #fff;
    border-radius: 4px;
    padding-top: 15px;
    margin-top: 16px;
  }
  .questions-town {
    width: 100%;
    height: 337px;
    background-color: #fff;
    border-radius: 4px;
    padding-top: 15px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
</style>