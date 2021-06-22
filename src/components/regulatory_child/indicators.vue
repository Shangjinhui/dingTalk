<template>
  <div class="wrap">
    <div class="total_service mt26">
      <p class="f24 cor3 mb14">政务服务总览</p>
      <div class="service_main">
        <div class="b-rad4 bgcf">
          <div class="pub_title pt20 lineH1 flexa">
            <p class="side"></p>
            <p class="fb">政务服务事项数：1646项</p>
          </div>
          <div class="loop_wrap flexa">
            <Ring :ringData="ringData" />
            <div class="headline">
              <div class="flexa">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#2dc4ff, #1492ff)"
                  ></div>
                  <div class="cor6 f12 ml10">行政许可</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">524</div>
                  <div class="f12" style="width: 50px; color: #148cf3">
                    31.83%
                  </div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#4e4c64, #878393)"
                  ></div>
                  <div class="cor6 f12 ml10">行政裁决</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">7</div>
                  <div class="f12" style="width: 50px; color: #4E4C64">0.43%</div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#1fa9b7, #62faff)"
                  ></div>
                  <div class="cor6 f12 ml10">行政奖励</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">31</div>
                  <div class="f12" style="width: 50px; color: #1FA9B7">1.88%</div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#cc2cb7, #ff5ae6)"
                  ></div>
                  <div class="cor6 f12 ml10">行政给付</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">84</div>
                  <div class="f12" style="width: 50px; color: #CC2CB7">5.10%</div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#f8dc77, #e5981d)"
                  ></div>
                  <div class="cor6 f12 ml10">行政确认</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">213</div>
                  <div class="f12" style="width: 50px; color: #F8DC77">
                    12.94%
                  </div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#f77392, #ec3f59)"
                  ></div>
                  <div class="cor6 f12 ml10">公共服务</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">284</div>
                  <div class="f12" style="width: 50px; color: #F77392">
                    17.25%
                  </div>
                </div>
              </div>
              <div class="flexa mt8">
                <div class="flexa w56 shrink pieLengd">
                  <div
                    class="circle"
                    style="background: linear-gradient(#53dec4, #29ba91)"
                  ></div>
                  <div class="cor6 f12 ml10">其他</div>
                </div>
                <div class="flexba flex1">
                  <div class="cor6 f12" style="width: 70px">503</div>
                  <div class="f12" style="width: 50px; color: #53DEC4">
                    30.56%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flexa mt16">
          <div class="manage">
            <div class="pub_title lineH1 mb8 flexa">
              <p class="side"></p>
              <p class="fb">网上办</p>
            </div>
            <div class="manage_main">
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">事项数</p>
                  <p><span class="cor148 f18">1607</span>项</p>
                </div>
                <p class="f11 cor9">省市明确不宜实现除外</p>
              </div>
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">网上办率</p>
                  <p><span class="cor148 f18">100</span>%</p>
                </div>
                <p class="f11 cor9">省市明确不宜实现除外</p>
              </div>
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">办件量</p>
                  <p><span class="cor148 f18">1964103</span>件</p>
                </div>
              </div>
            </div>
          </div>
          <div class="manage ml16 mr16">
            <div class="pub_title lineH1 mb8 flexa">
              <p class="side"></p>
              <p class="fb">掌上办</p>
            </div>
            <div class="manage_main">
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">事项数</p>
                  <p><span class="cor148 f18">1618</span>项</p>
                </div>
                <p class="f11 cor9">省市明确不宜实现除外</p>
              </div>
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">掌上办率</p>
                  <p><span class="cor148 f18">100</span>%</p>
                </div>
                <p class="f11 cor9">省市明确不宜实现除外</p>
              </div>
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">办件量</p>
                  <p><span class="cor148 f18">49450</span>件</p>
                </div>
              </div>
            </div>
          </div>
          <div class="manage">
            <div class="pub_title lineH1 mb8 flexa">
              <p class="side"></p>
              <p class="fb">一件事</p>
            </div>
            <div class="manage_main">
              <div class="item_com mt8">
                <div class="flexba mb5">
                  <p class="f14 cor3">办件量</p>
                  <p><span class="cor148 f18">42</span>件</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="f24 cor3 mb14 mt25">四端协同</p>
      <div class="synergy_wrap">
        <div class="synergy_com">
          <div class="pub_title bgcf lineH1 flexa">
            <p class="side"></p>
            <p class="fb">综合大厅运行情况</p>
          </div>
          <div class="flexa pl20 pr20 mt16">
            <div class="synergy_item mr16">
              <p class="f14 cor3">今日取号数</p>
              <p class="cor3 f14"><span class="cor148 f18">1838</span>件</p>
            </div>
            <div class="synergy_item mr16">
              <p class="f14 cor3">今日办理数</p>
              <p class="cor3 f14"><span class="cor148 f18">1838</span>件</p>
            </div>
            <div class="synergy_item mr16">
              <p class="f14 cor3">2020年度办理数</p>
              <p class="cor3 f14"><span class="cor148 f18">177.98</span>万件</p>
            </div>
            <div class="synergy_item mr16">
              <p class="f14 cor3">平均办理时间</p>
              <p class="cor3 f14"><span class="cor148 f18">7.96</span>分钟</p>
            </div>
            <div class="synergy_item">
              <p class="f14 cor3">目前等候人数</p>
              <p class="cor3 f14"><span class="cor148 f18">0</span>人</p>
            </div>
          </div>
        </div>

        <div class="mt16 flexa">
          <div class="government_com mr16">
            <div class="pub_title lineH1 mb8 flexa">
              <p class="side"></p>
              <p class="fb">政务服务网总览</p>
            </div>
            <div class="flexa pl20 pr20">
              <div class="government_item mr16">
                <p class="f14 cor3">事项数</p>
                <p class="cor3 f14"><span class="cor148 f18">1787</span>项</p>
              </div>
              <div class="government_item">
                <p class="f14 cor3">累计办件量</p>
                <p class="cor3 f14">
                  <span class="cor148 f18">2110124</span>件
                </p>
              </div>
            </div>
          </div>
          <div class="government_com">
            <div class="pub_title lineH1 mb8 flexa">
              <p class="side"></p>
              <p class="fb">浙里办总览</p>
            </div>
            <div class="flexa pl20 pr20">
              <div class="government_item mr16">
                <p class="f14 cor3">事项数</p>
                <p class="cor3 f14"><span class="cor148 f18">1618</span>项</p>
              </div>
              <div class="government_item">
                <p class="f14 cor3">累计办件量</p>
                <p class="cor3 f14"><span class="cor148 f18">49450</span>件</p>
              </div>
            </div>
          </div>
        </div>

        <div class="synergy_com mt16">
          <div class="pub_title bgcf lineH1 flexa">
            <p class="side"></p>
            <p class="fb">综合自助机总览</p>
          </div>
          <div class="flexa pl20 pr20 mt16">
            <div class="synergy_item mr16">
              <p class="f14 cor3">上线事项</p>
              <p class="cor3 f14"><span class="cor148 f18">349</span>项</p>
            </div>
            <div class="synergy_item mr16">
              <p class="f14 cor3">累计办件量</p>
              <p class="cor3 f14"><span class="cor148 f18">604648</span>件</p>
            </div>
            <div class="synergy_item mr16">
              <p class="f14 cor3">累计服务次数</p>
              <p class="cor3 f14"><span class="cor148 f18">604648</span>次</p>
            </div>
            <div class="synergy_item">
              <p class="f14 cor3">网点数量</p>
              <p class="cor3 f14"><span class="cor148 f18">71</span>个</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <p class="f24 cor3 mb14 mt25">服务满意度</p> -->
      <div class="flexba serverBox">
        <div class="saas">
          <div class="flexca">
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#148CF3"
              :trailWidth="circleData.trailWidth"
              trailColor="#F1F8FF"
              :percent="circleData.time"
              content="承诺时限压缩比"
            />
          </div>
          <div class="saas_list">
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区税务局</div>
              <div class="cor3 f14">72.5%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">西湖公安分局</div>
              <div class="cor3 f14">91.37%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">西湖规资分局</div>
              <div class="cor3 f14">97.85%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区农业农村局</div>
              <div class="cor3 f14">98.06%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区住建局</div>
              <div class="cor3 f14">99.33%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区市场监管局</div>
              <div class="cor3 f14">100%</div>
            </div>
          </div>
        </div>
        <div class="saas ml16 mr16">
          <div class="flexca">
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#FFA337"
              :trailWidth="circleData.trailWidth"
              trailColor="#FFFAF3"
              :percent="circleData.zero"
              content="平均跑动次数"
              :percentType="1"
            />
          </div>
          <div class="saas_list">
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">西湖公安分局</div>
              <div class="cor3 f14">0.1176</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区市场监管局</div>
              <div class="cor3 f14">0</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区人社局</div>
              <div class="cor3 f14">0</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区卫健局</div>
              <div class="cor3 f14">0</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区教育局</div>
              <div class="cor3 f14">0</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区民政局</div>
              <div class="cor3 f14">0</div>
            </div>
          </div>
        </div>
        <div class="saas">
          <div class="flexca">
            <CircleProcess
              :rd="circleData.rd"
              :strokeWidth="circleData.strokeWidth"
              strokeColor="#09C592"
              :trailWidth="circleData.trailWidth"
              trailColor="#F1FCF9"
              :percent="circleData.todo"
              content="即办率"
            />
          </div>
          <div class="saas_list">
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区税务局</div>
              <div class="cor3 f14">16.67%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">西湖公安分局</div>
              <div class="cor3 f14">66.67%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">西湖规资分局</div>
              <div class="cor3 f14">86.36%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区农业农村局</div>
              <div class="cor3 f14">95.65%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区住建局</div>
              <div class="cor3 f14">97.3%</div>
            </div>
            <div class="saas_item mb8 flexa">
              <div class="saas_item_circle"></div>
              <div class="saas_item_tip cor3 f14">区市场监管局</div>
              <div class="cor3 f14">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ring from "@/components/ringEcharts.vue";
import CircleProcess from "@/components/circleProgress.vue"; //环形进度条
export default {
  components: {
    Ring,
    CircleProcess,
  },
  data() {
    return {
      ringData: {
        width: 100 + "%", //饼图盒子宽度
        // 饼图类目
        pieLegend: {
          // 类目位置
          orient: "vertical", //类目排列显示
          top: 22 + "%", //类目位置
          left: 40 + "%", //类目位置
          icon: "circle", //类目形状，默认圆角矩形
          itemWidth: 9, //类目原型宽度
          itemHeight: 9, //类目原型高度
          data: [],
        },
        pieSeries: {
          pieRadius: ["40%", "70%"], //饼图大小，传数组显示环形
          pieCenter: ["50%", "55%"], //饼图位置
          pieColor: [
            //饼图颜色，渐变色
            { c1: "#2DC4FF", c2: "#1492FF" },
            { c1: "#4E4C64", c2: "#878393" },
            { c1: "#1FA9B7", c2: "#62FAFF" },
            { c1: "#CC2CB7", c2: "#FF5AE6" },
            { c1: "#F8DC77", c2: "#E5981D" },
            { c1: "#F77392", c2: "#EC3F59" },
            { c1: "#53DEC4", c2: "#29BA91" },
          ],
          // 饼图数据展示
          pieList: [
            {name: "行政许可",value: 524,},
            { name: "行政裁决", value: 7 },
            { name: "行政奖励", value: 31 },
            { name: "行政给付", value: 84 },
            { name: "行政确认", value: 213 },
            { name: "公共服务", value: 284 },
            { name: "其他", value: 503 },
          ],
        },
      },
      circleData: {
        strokeWidth: 5.5,
        trailWidth: 5.5,
        todo: 93.51,
        zero: 0.0115,
        time: 97.53,
        rd: 55,
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
        this.$set(this.circleData, "rd", 55);
        this.$set(this.circleData, "strokeWidth", 5.5);
        this.$set(this.circleData, "trailWidth", 5.5);
      } else if (width >= 860 && width < 960) {
        this.$set(this.circleData, "rd", 60);
        this.$set(this.circleData, "strokeWidth", 6);
        this.$set(this.circleData, "trailWidth", 6);
      } else if (width >= 960 && width < 1100) {
        this.$set(this.circleData, "rd", 65);
        this.$set(this.circleData, "strokeWidth", 6.5);
        this.$set(this.circleData, "trailWidth", 6.5);
      } else if (width >= 1100 && width < 1500) {
        this.$set(this.circleData, "rd", 70);
        this.$set(this.circleData, "strokeWidth", 7);
        this.$set(this.circleData, "trailWidth", 7);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pub_title {
  color: #333;
  font-size: 16px;
  height: 22px;
  .side {
    width: 4px;
    height: 16px;
    line-height: 16px;
    background: #1d96ff;
    border-radius: 2px;
    margin-right: 16px;
  }
}

.headline {
  .circle {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
}

.manage {
  // width: 248px;
  width:calc(100% - 32px);
  height: 283px;
  border-radius: 4px;
  padding: 20px 0;
  background-color: #fff;
  box-sizing: border-box;
  .manage_main {
    padding: 0 17px 0 20px;
    .item_com {
      padding: 15px 17px 13px;
      background-color: #eff8ff;
    }
  }
}

.synergy_wrap {
  .synergy_com {
    padding: 22px 0;
    background-color: #fff;
    border-radius: 4px;
    .synergy_item {
      width: 134px;
      padding: 10px;
      box-sizing: border-box;
      background-color: #eff8ff;
      text-align: center;
    }
  }
}

.government_com {
  width: calc(50% - 8px);
  padding: 22px 0;
  background-color: #fff;
  border-radius: 4px;
  .government_item {
    width: 164px;
    box-sizing: border-box;
    padding: 15px 29px 10px;
    background-color: #eff8ff;
    text-align: center;
  }
}
.saas {
  // width: 248px;
  width:calc(100% - 32px);
  height: 343px;
  background: #ffffff;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;

  .saas_list {
    margin-top: 26px;
    .saas_item_circle {
      width: 4px;
      height: 4px;
      background: #d8d8d8;
      border-radius: 50%;
      margin-right: 6px;
    }
    .saas_item_tip {
      width: 108px;
    }
  }
}
.b-rad4{
  border-radius: 4px;
}
.serverBox{
  margin-top: 73Px;
}
.pieLengd{
  margin-right: 10px;
  flex-shrink: 0;
}
</style>