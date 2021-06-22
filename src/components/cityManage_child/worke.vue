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
        <p class="fb">工作专班</p>
      </div>
      <div class="units">
          <div class="flexa mt20">
            <p class="f14 cor3 lineH1 ">牵头单位：</p>
            <p class="cor3 f16 fb lineH1">区城管局</p>
          </div>
          <div class="flexa mt20">
            <p class="f14 cor3 lineH1">协同单位：</p>
            <p class="cor3 f16 fb lineH1">西湖生态环境分局、区农业农村局、西湖交警大队、区住建局、西湖规资分局，各镇街</p>
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
            <p class="f16 cor3 fb">3月底前,区专班组织部门联合巡查，对三墩、双浦、转塘等城郊区块和古荡、蒋村、留下开展重点检查</p>
          </div>
          <div class="plan_item flex list_item_com">
            <p class="cor149 mr10"><i class="el-icon-time"></i></p>
            <p class="f16 cor3 fb">6月底前,区专班组织对我区8个高速出入口及沿线周边市政道路14条进行全覆盖检查</p>
          </div>
           <div class="plan_item flex list_item_com">
            <p class="cor149 mr10"><i class="el-icon-time"></i></p>
            <p class="f16 cor3 fb">9月底前,区专班组织力量在11个镇街中随机抽取110个住宅小区内部环境秩序情况进行检查</p>
          </div>
           <div class="plan_item flex list_item_com">
            <p class="cor149 mr10"><i class="el-icon-time"></i></p>
            <p class="f16 cor3 fb">12月底前,区专班对83条主次道路两侧及重点市场周边店招广告不规范设置进行检查</p>
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
  data(){
    return{
      list:[
        {
          time:"2021-03-26",
          title:"西湖区召开“迎亚运”环境大整治行动暨生活垃圾治理…",
          content:"3月26日，西湖区召开“迎亚运”环境大整治行动暨生活垃圾治理工作动员部署会。西湖区人民政府常务副区长陈白磊、副区长邵小军，区城管局、西湖环境集团…、西湖清洁直运公司全体班子成员，区住建局… ",
          photo:require('@/assets/img/city1.png')
       },
         {
          time:"2021-03-03",
          title:"西湖区召开“迎亚运”市容风貌改善专项行动工作推进会",
          content:"今天下午，西湖区召开“迎亚运”市容风貌改善专项行动工作推进会，对我区市容风貌提升做出要求，并具体部署《西湖区“美丽杭州”创建暨“迎亚运”“城市环境大整治…   ",
          photo:require('@/assets/img/city2.png')
       },
        {
          time:"2021-03-01",
          title:"西湖区召开建设工地环境专项整治工作部署会",
          content:"3月1日下午，为进一步强化工程现场精细化管理，从实从细落实工地管理措施，进一步提升建设行业管理水平，持续改善工地施工环境，不断提高市民群众的获得感与满意度…，11月3日下午，西湖区召开建设工地环境专项整治工作部署会…       ",
          photo:require('@/assets/img/city3.png')
       },
      ]
    }
  },
  mounted(){
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

.list_wrap{
  margin-top: 16px;
  background-color: #fff;
  .sol_com{
    padding-top: 7px;
    padding-bottom: 29px;
    .list_item_com{
      margin-top: 16px;
      padding-left: 20px;
    }
  }
}
.units{
  padding-left: 24px;
  padding-bottom: 20px;
}
</style>