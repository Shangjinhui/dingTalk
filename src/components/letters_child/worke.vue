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
        <p class="fb">方案批复</p>
      </div>
      <div class="scheme_list sol_com">
          <div class="scheme_item flex list_item_com" v-for="(item,index) in caseList" :key="index">
            <p class="cor149 mr10"><i class="el-icon-circle-check"></i></p>
            <p class="f16 cor3 fb">{{item.title}}</p>
          </div>
      </div>
    </div>
    <div class="plan list_wrap">
        <div class="pub_title flexa">
        <p class="side"></p>
        <p class="fb">工作计划下发</p>
      </div>
      <div class="plan_list sol_com">
          <div class="plan_item flex list_item_com" v-for="(item,index) in planList" :key="index">
            <p class="cor149 mr10"><i class="el-icon-time"></i></p>
            <p class="f16 cor3 fb">{{item.title}}</p>
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
       list: [
        {
          time: "2021-01-28",
          title:"西湖区省重点建设项目节前安全生产检查",
          content: "今天上午，高国飞书记主持召开幸福西湖民生综合体“民意小圆桌”暨“走亲连心三服务”活动，专程听取“两代表一委员”本次活动由缪凌蓉副区长主持",
          photo: require('@/assets/img/letter1.png'),
        },
        {
          time: "2021-03-03",
          title:" 2021年3月3日西湖区一季度重大项目集中开工活动  ",
          content: "今天上午，高国飞书记主持召开幸福西湖民生综合体“民意小圆桌”暨“走亲连心三服务”活动，专程听取“两代表一委员”本次活动由缪凌蓉副区长主持",
          photo: require('@/assets/img/letter2.png'),
        },
        {
          time: "2021-03-24",
          title:"3月24日下午全市重大项目建设比学赶超活动实地考察 ",
          content: "今天上午，高国飞书记主持召开幸福西湖民生综合体“民意小圆桌”暨“走亲连心三服务”活动，专程听取“两代表一委员”本次活动由缪凌蓉副区长主持",
          photo: require('@/assets/img/letter3.png'),
        },
      ],
      caseList:[
           {
          title:'关于杭政储出【2020】23号商业商务兼容社会停车场项目用地规划许可的批复'
        },
        {
          title:'关于杭政工出【2020】27号云栖智造创新中心用地规划许可证的批复'
        },
        {
          title:'关于杭政储出【2020】24号地块商业商务兼容社会停车场项目用地规划许可证的批复'
        },
        
      ],
      planList:[
        {
          title:'2021年2月底前：出台建设工作实施方案文件'
        },
        {
          title:'2021年2月底前：完成所在辖区问计问需于民'
        },
        {
          title:'2021年3月底前：确认各镇街点位位置、建设规模、建设模式、面积大小'
        },
        {
          title:'2021年3月底前：完成各点位外观实际、功能布局、logo标识等工作'
        },
        {
          title:'2021年4月底前：完成各点位方案可行性论证，需各部门配合论证'
        },
        {
          title:'2021年6月底前：完成第一批民生综合体建设，12月底前完成全年建设目标'
        },
        {
          title:'2021年12月底前：涉及民生事项的各部门完成综合体内7+X项线下功能和线上平台对接工作'
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
</style>