<template>
  <div class="worke">
    <div class="trend">
      <div class="pub_title flexa">
        <p class="side"></p>
        <p class="fb">工作动态</p>
      </div>
      <div class="time_line">
        <Time :list="list" />
      </div>
    </div>
    <div class="scheme list_wrap">
      <div class="pub_title flexa">
        <p class="side"></p>
        <p class="fb">财税联席会议工作小组</p>
      </div>
      <div class="units">
        <div class="flexa mt20">
          <p class="f14 cor3 lineH1">牵头单位：</p>
          <p class="cor3 f16 fb lineH1">区财政局</p>
        </div>
        <div class="flexa mt20">
          <p class="f14 cor3 lineH1">协同单位：</p>
          <p class="cor3 f16 fb lineH1">
            区税务局，各镇街、平台，区企业发展服务中心
          </p>
        </div>
      </div>
    </div>
    <div class="plan list_wrap">
      <div class="pub_title flexa">
        <p class="side"></p>
        <p class="fb">工作计划下发</p>
      </div>
      <div class="plan_list sol_com">
        <div class="plan_item flex list_item_com">
          <p class="cor149 mr10"><i class="el-icon-time"></i></p>
          <p class="f16 cor3 fb">3月底前各镇街收入任务分解</p>
        </div>
        <div class="plan_item flex list_item_com">
          <p class="cor149 mr10"><i class="el-icon-time"></i></p>
          <p class="f16 cor3 fb">4月开始每月通报各镇街收入时序进度</p>
        </div>
        <div class="plan_item flex list_item_com">
          <p class="cor149 mr10"><i class="el-icon-time"></i></p>
          <p class="f16 cor3 fb">
            年底完成全区一般公共预算收入增长8%（175亿）的收入目标任务
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../timeLine";
export default {
  components: {
    Time,
  },
  props: {},
  data() {
    return {
      list: [
        {
          time: "2021-01-21",
          title:"召开财税联席会议。各镇街、平台围绕2021年收入形势和目标预测作交流分析",
          content: "",
          photo: "",
        },
        {
          time: "2021-02-01",
          title:"开展大量基础性排摸工作。开始走访农夫山泉等重点企业，排摸梳理重点大额税源、房地产及一次性税源等三张税源清单，并对各镇街、平台近三年来房地产收入和经常性收入占比和增长情况进行测算，力争为镇街、平台的任务分解夯实基础  ",
          content: "",
          photo: "",
        },
        {
          time: "2021-03-05",
          title:"报区政府镇街任务分解初稿。根据前期走访、研判所掌握的镇街、平台情况，将镇街、平台任务分为财力平衡型、实际增长型和力争增长型三类，任务分解力求“下达有沟通、分解有依据、数据有支撑”，于3月5日将任务分解初稿发区政府 ",
          content: "",
          photo: "",
        },
      ],
    };
  },
  mounted(){
    this.list=this.list.reverse()
    this.$getPageHeight();
  }
};
</script>

<style lang="scss" scoped>
.worke {
  margin-top: 16px;
  .trend {
    border-radius: 4px;
    background-color: #fff;
  }
}

.pub_title {
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #f4f4f4;
  color: #333;
  font-size: 16px;
  .side {
    width: 4px;
    height: 16px;
    background: #1d96ff;
    border-radius: 2px;
    margin-right: 16px;
  }
}

.list_wrap {
  margin-top: 16px;
  background-color: #fff;
  .sol_com {
    padding-top: 7px;
    padding-bottom: 29px;
    .list_item_com {
      margin-top: 16px;
      padding-left: 20px;
      align-items: center;
    }
  }
}
.units {
  padding-left: 24px;
  padding-bottom: 10px;
}
</style>