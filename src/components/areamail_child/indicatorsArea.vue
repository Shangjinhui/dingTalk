<template>
  <!-- 区发改经信局指标体系 -->
  <div class="indecators-area">
    <!-- 数据总览 -->
    <div class="data-total">
      <div class="top-data">
        <div class="logo">
          <img src="../../assets/img/area-1.png" alt="" />
        </div>
        <div class="right-info">
          <div class="middle-adres">
            <div class="title">西湖云栖小镇</div>
            <div class="bot-area">
              <span>数字经济</span>
              <span>命名小镇</span>
            </div>
          </div>
          <div class="right-area">
            <div
              class="item-catogry"
              v-for="(item, index) in townData.list"
              :key="index"
            >
              <div class="item-catogry-tit ml16">{{ item.title }}</div>
              <div class="item-catogry-val ml16">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bot-data">
        <div
          class="town-data-item"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="item-tit">{{ item.title }}</div>
          <div class="item-val">
            {{ item.value }}<span>{{ item.unit }}</span>
          </div>
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <!-- 图表 -->
    <div class="indicators">
      <div class="investment">
        <ChartTit title="投资" />
        <div class="subTit">2020年总投资<span>13.00</span>亿</div>
        <HistoGramLevel
          class="histogram"
          :histogramLevelData="histogramLevelData"
        />
      </div>
      <!-- 环形进度条 -->
      <div class="produce">
        <ChartTit title="产出" />
        <div class="subTit">2020年总产出<span>13.00</span>亿</div>
        <div class="tab-bar">
          <div
            class="tab-item"
            :class="actTab == item.id ? 'act' : ''"
            v-for="item in tabYaer"
            :key="item.id"
            @click="handleTab(item.id)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="progress-box">
          <div class="top-progress">
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#1492FF"
              :trailWidth="circleData.trailWidth"
              trailColor="#F1F8FF"
              :percent="circleData.invest"
              content="工业总投资"
            ></CircleProcess>
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#09C592"
              :trailWidth="circleData.trailWidth"
              trailColor="#F1FCF9"
              :percent="circleData.produce"
              content="工业总产出"
            ></CircleProcess>
          </div>
          <div class="bot-progress">
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#EC3F59"
              :trailWidth="circleData.trailWidth"
              trailColor="#FEF4F5"
              :percent="circleData.life"
              content="住宿和餐饮业"
            >
            </CircleProcess>
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#FFA337"
              :trailWidth="circleData.trailWidth"
              trailColor="#FFFAF3"
              :percent="circleData.serve"
              content="服务业"
            >
            </CircleProcess>
          </div>
        </div>
      </div>
    </div>
    <div class="indicators-line">
      <ChartTit title="税收" />
      <div class="subTit">2020年总投资<span>9.60</span>亿</div>
      <LineEchart class="histogram" :lineEchartsData="lineEchartsData" />
    </div>
  </div>
</template>

<script>
import HistoGramLevel from "@/components/histogramlevel.vue";
import CircleProcess from "@/components/circleProgress.vue"; //环形进度条
import LineEchart from "@/components/lineEchart.vue";
export default {
  components: {
    HistoGramLevel,
    LineEchart,
    CircleProcess,
  },
  data() {
    return {
      actTab: 2,
      tabYaer: [
        { id: 1, title: "历年" },
        { id: 2, title: "当年" },
      ],
      townData: {
        list: [
          { title: "所属地区", value: "杭州市" },
          { title: "所属区县", value: "西湖区" },
          { title: "规划面积", value: "3.5km" },
          { title: "省级主管部门", value: "省经信厅" },
        ],
      },
      dataList: [
        { title: "创建以来总投资", value: "63.22", unit: "亿元" },
        { title: "特色产业投资占比", value: "70.27", unit: "%" },
        { title: "民间投资占比", value: "39.12", unit: "%" },
        { title: "创建以来总产出", value: "1154.29", unit: "亿元" },
        { title: "创建以来总税收", value: "36.45", unit: "亿元" },
      ],
      circleData: {
        strokeWidth: 5.5,
        trailWidth: 5.5,
        invest: 2,
        produce: 0,
        life: 0,
        serve: 97,
        rd: 42,
      },
      histogramLevelData: {
        histogramBarHeight: "29.7vw",
        width: 100 + "%", //柱状图盒子宽度
        legend: {
          //标记属性
          data: ["总投资", "特色产业投资"],
          orient: "horizontal", //标记排列显示
          top: "bottom",
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          splitNumber: 1,
          min: 0,
          max: 15,
          interval: 5,
          axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: ["2015", "2016", "2017", "2018", "2019", "2020"],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 4, //每行显示字数
            rotate: 0, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "总投资",
            type: "bar",
            data: [11.74, 9.57, 14.01, 7.03, 7.87, 13],
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
            name: "特色产业投资",
            type: "bar",
            data: [1.89, 6.88, 13.88, 6.72, 7.14, 7.92],
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
      lineEchartsData: {
        width: 100 + "%", //柱状图盒子宽度
        lineEchartsHeight: "24.752vw",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2015", "2016", "2017", "2018", "2019", "2020"],
        },
        yAxis: {
          type: "value",
          splitNumber: 1,
          min: 0,
          max: 100000,
          interval: 25000,
          axisLabel: {},
        },
        series: [
          {
            data: [18921.85, 33605, 62602.47, 76669, 76734.68, 96010],
            type: "line",
            smooth: false, //折点是圆弧状的
            showSymbol: true,
            symbol: "circle", //折点设定为实心点
            symbolSize: 4, //设定实心点的大小
            itemStyle: {
              color: "#1492FF", //折点颜色
              lineStyle: {
                color: "#1492FF", //折线颜色
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1, //自定义颜色，渐变色填充折线图区域
                colorStops: [
                  {
                    offset: 0,
                    color: "#A2D0F8", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#F1F8FF", // 100% 处的颜色
                  },
                ],
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$getPageHeight();
    // 获取浏览器可视区域宽度--动态改变环形进度条
    window.addEventListener("resize", this.getWidth);
    this.getWidth();
  },
  methods: {
    // 动态设置环形图的大小
    getWidth() {
      let width = window.innerWidth;
      if (width <= 760) {
        this.$set(this.circleData, "rd", 40);
        this.$set(this.circleData, "strokeWidth", 5.5);
        this.$set(this.circleData, "trailWidth", 5.5);
      } else if (width >= 760 && width < 860) {
        this.$set(this.circleData, "rd", 45);
        this.$set(this.circleData, "strokeWidth", 5.5);
        this.$set(this.circleData, "trailWidth", 5.5);
      } else if (width >= 860 && width < 960) {
        this.$set(this.circleData, "rd", 48);
        this.$set(this.circleData, "strokeWidth", 6);
        this.$set(this.circleData, "trailWidth", 6);
      } else if (width >= 960 && width < 1100) {
        this.$set(this.circleData, "rd", 56);
        this.$set(this.circleData, "strokeWidth", 6.5);
        this.$set(this.circleData, "trailWidth", 6.5);
      } else if (width >= 1100 && width < 1500) {
        this.$set(this.circleData, "rd", 65);
        this.$set(this.circleData, "strokeWidth", 7);
        this.$set(this.circleData, "trailWidth", 7);
      }
    },
    handleTab(id) {
      this.actTab = id;
      if (id == 2) {
        this.$set(this.circleData, "invest", 2);
        this.$set(this.circleData, "produce", 0);
        this.$set(this.circleData, "life", 0);
        this.$set(this.circleData, "serve", 97);
      } else {
        this.$set(this.circleData, "invest", 0);
        this.$set(this.circleData, "produce", 0);
        this.$set(this.circleData, "life", 0);
        this.$set(this.circleData, "serve", 0);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.indecators-area {
  width: 100%;
  margin-top: 16px;
  .data-total {
    width: 100%;
    height: 166px;
    background-color: #fff;
    padding: 26px 0;
    border-radius: 4px;
    .top-data {
      width: 100%;
      height: 80px;
      background: url("../../assets/img/area-1-1.png") center center no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: flex-start;
      .logo {
        width: 73px;
        height: 73px;
        margin-right: 15px;
        margin-left: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-info {
        display: flex;
        justify-content: flex-start;
        .middle-adres {
          width: 144px;
          margin-top: 8px;
          .title {
            height: 33px;
            font-size: 24px;
            color: #000000;
            font-weight: 500;
            line-height: 33px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 5px;
          }
          .bot-area {
            display: flex;
            justify-content: flex-start;
            span {
              color: #1492ff;
              height: 20px;
              line-height: 20px;
              font-size: 14px;
            }
            span:first-child {
              margin-right: 14px;
            }
          }
        }
        .right-area {
          width: 428px;
          height: 50px;
          margin-left: 52px;
          display: flex;
          justify-content: flex-start;
          margin-top: 14px;
          .item-catogry {
            width: 107px;
            height: 50px;
            border-right: 1px solid #f0f3f9;
            .item-catogry-tit {
              color: #666666;
              font-size: 12px;
              height: 17px;
              margin-bottom: 6px;
            }
            .item-catogry-val {
              color: #333333;
              height: 25px;
              line-height: 25px;
              font-weight: 600;
              font-size: 18px;
            }
            .ml16 {
              margin-left: 16px;
            }
          }
          .item-catogry:last-child {
            border-right: 0 none;
          }
        }
      }
    }
    .bot-data {
      width: 100%;
      height: 68px;
      display: flex;
      justify-content: flex-start;
      margin-top: 16px;
      .town-data-item {
        width: 124px;
        height: 46px;
        margin-right: 9px;
        border-radius: 4px;
        padding: 11px 0 11px 16px;
        position: relative;
        .item-tit {
          color: #666666;
          font-size: 12px;
          height: 19px;
          line-height: 19px;
        }
        .item-val {
          height: 25px;
          font-size: 18px;
          color: #333333;
          font-weight: 600;
          span {
            color: #333333;
            font-size: 12px;
            font-weight: normal;
          }
        }
      }
      .town-data-item:nth-child(1) {
        background-color: rgba(20, 140, 243, 0.1);
        margin-left: 20px;
        .icon {
          width: 26px;
          height: 30px;
          background: url("../../assets/img/area-1-2.png") center center
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 8px;
          top: 31px;
        }
      }
      .town-data-item:nth-child(2) {
        background-color: rgba(9, 197, 146, 0.1);
        .icon {
          width: 30px;
          height: 32px;
          background: url("../../assets/img/area-1-4.png") center center
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 5px;
          top: 30px;
        }
      }
      .town-data-item:nth-child(3) {
        background-color: rgba(236, 63, 89, 0.1);
        .icon {
          width: 36px;
          height: 36px;
          background: url("../../assets/img/area-1-5.png") center center
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 3px;
          top: 27px;
        }
      }
      .town-data-item:nth-child(4) {
        background-color: rgba(229, 152, 29, 0.1);
        .icon {
          width: 30px;
          height: 30px;
          background: url("../../assets/img/area-1-6.png") center center
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 7px;
          top: 31px;
        }
      }
      .town-data-item:nth-child(5) {
        background-color: rgba(18, 186, 209, 0.1);
        margin-right: 20px;
        .icon {
          width: 30px;
          height: 30px;
          background: url("../../assets/img/area-1-3.png") center center
            no-repeat;
          background-size: 100% 100%;
          position: absolute;
          right: 9px;
          top: 31px;
        }
      }
    }
  }
  .indicators {
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    .investment,
    .produce {
      width: 49%;
      height: 300px;
      background-color: #fff;
      border-radius: 4px;
      padding-top: 15px;
    }
    .produce {
      position: relative;
      .tab-bar {
        width: 116px;
        height: 28px;
        position: absolute;
        top: 16px;
        right: 20px;
        background-color: #f0f3f9;
        padding: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px;
        .tab-item {
          width: 56px;
          height: 28px;
          line-height: 28px;
          background-color: #f0f3f9;
          color: #333333;
          font-size: 12px;
          text-align: center;
          border-radius: 2px;
          cursor: pointer;
        }
        .act {
          width: 56px;
          height: 28px;
          color: #1989fa;
          background-color: #fff;
          font-weight: 600;
          border-radius: 2px;
        }
      }
      .progress-box {
        width: 247px;
        height: 250px;
        margin: 15px auto 0;
        .top-progress,
        .bot-progress {
          width: 250px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bot-progress {
          margin-top: 20px;
        }
      }
    }
  }
  .indicators-line {
    width: 100%;
    height: 248px;
    background-color: #fff;
    margin-top: 16px;
    border-radius: 4px;
    padding-top: 15px;
  }
}
.demo {
  width: 100%;
  height: 248px;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 4px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>