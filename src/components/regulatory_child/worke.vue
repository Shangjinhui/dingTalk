<template>
  <div class="worke">
    <div class="trend">
      <div class="pub_title flexa">
        <p class="side"></p>
        <p>工作动态</p>
      </div>
      <div class="time_line">
        <Time :list="list" />
      </div>
    </div>
    <div class="scheme list_wrap">
      <div class="flexba">
        <div class="pub_title flexa">
          <p class="side"></p>
          <p>领导小组</p>
        </div>
        <div class="flexa pr20 cor149">
          <p>查看领导小组文件</p>
          <p class="flexa"><i class="el-icon-arrow-right"></i></p>
        </div>
      </div>
      
       <div class="units">
          <div class="flexa mt20">
            <p class="f14 cor3 lineH1 w70">组 <span class="opacity0">占  </span>   长：</p>
            <p class="cor3 f16 fb lineH1">董毓民</p>
          </div>
          <div class="flexa mt20">
            <p class="f14 cor3 lineH1 w70">副 组 长：</p>
            <p class="cor3 f16 fb lineH1">陈白磊   马品芳</p>
          </div>
            <div class="flexa mt20">
            <p class="f14 cor3 lineH1 w70 shrink">成   <span class="opacity0">占  </span>   员：</p>
            <p class="cor3 f16 fb lineH1">全区各相关单位主要负责人，领导小组下设办公室（设在区数据资源局），区政府办公室方正校同志兼任领导小组办公室主任，邵建华同志兼任办公室常务副主任，骆骏（区政府办）、陈辉（区审管办）、吴涯（区数据资源局）兼任办公室副主任。</p>
          </div>
      </div>
    </div>
    <div class="plan list_wrap">
        <div class="pub_title flexa">
        <p class="side"></p>
        <p>工作计划下发</p>
      </div>
      <div class="plan_list sol_com">
          <div class="plan_item flex list_item_com" >
            <p class="cor149 mr10"><i class="el-icon-circle-check"></i></p>
            <p class="f16 cor3 fb">4月底前，相关单位完成流程再造、事项库调整，实现政务服务事项100%网上、掌上可办（省市明确不宜网办掌办事项除外） 。</p>
          </div>

           <div class="plan_item flex list_item_com" >
            <p class="cor149 mr10"><i class="el-icon-circle-check"></i></p>
            <p class="f16 cor3 fb">6月底前，相关单位完成流程再造、事项库调整，减跑动、即办率、承诺期限压缩比三项核心指标位主城区前列。 </p>
          </div>

           <div class="plan_item flex list_item_com" >
            <p class="cor149 mr10"><i class="el-icon-circle-check"></i></p>
            <p class="f16 cor3 fb">5月底前，全区各部门积极创新，谋划西湖区新增特色“一件事”，明确清单。</p>
          </div>

           <div class="plan_item flex list_item_com" >
            <p class="cor149 mr10"><i class="el-icon-circle-check"></i></p>
            <p class="f16 cor3 fb">7月底前， “一件事”牵头部门出台“一件事”联合发文。</p>
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
          time:"2021-01-11",
          title:"下发“一件事”通知",
          content:"为推进“一件事”新增迭代工作，区审管办下发《关于做好群众企业全生命周期新增和迭代“一件事”有关工作的通知》  ，要求各部门及时梳理“一件事”推进情况",
          photo:""
       },
         {
          time:"2021-01-20",
          title:"召开提升行政许可事项满意度会议",
          content:"1月20日上午，区审管办牵头召开提升行政许可事项满意度会议，对做好政府部门政务服务能力第三方评估迎考工作做具体部署",
          photo:require('@/assets/img/regulatory1.png')
       },
        {
          time:"2021-02-02",
          title:"召开政务服务事项梳理会议",
          content:"2月2日下午，区审管办牵头召开政务服务事项梳理会议，对超级帮办+智能预审事项进行确认。全区相关部门窗口负责人参加会议",
          photo:require('@/assets/img/regulatory2.png')
       },
      ]
    }
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

.list_wrap{
  margin-top: 16px;
  background-color: #fff;
 
  .sol_com{
    padding-top: 7px;
    padding-bottom: 29px;
    .list_item_com{
      margin-top: 16px;
      padding-left: 20px;
      align-items: center;
    }
  }
}
.units{
  padding-left: 24px;
  padding-bottom: 20px;
  .w70{
    width: 70px;
  }
}
</style>