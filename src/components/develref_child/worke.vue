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
    <div class="mt16">
      <div class="flexba">
        <div class="pub_title flexa">
          <p class="side"></p>
          <p>领导小组</p>
        </div>
        <div class="flexa pr20 cor149 f14">
          <p>查看专班文件</p>
          <p class="flexa"><i class="el-icon-arrow-right"></i></p>
        </div>
      </div>
      
       <div class="units">
         <p class="f18 fb pl15 mt20">西湖区数字经济发展工作领导小组</p>
          <div class="flex mt15">
            <p class="f14 cor3 lineH1 w108 justify">办公室主任：</p>
            <p class="cor3 f16 fb lineH1">马品芳</p>
          </div>
          <div class="flex mt20">
            <p class="f14 cor3 lineH1 w108 justify">办公室副主任：</p>
            <p class="cor3 f16 fb lineH1">办公室副主任</p>
          </div>
          <p class="f14 mt16">领导小组下设经济、社会、政务、技术等4个专项工作推进小组，分别由区发改经信局、区发改经信局、区数据资源局、区科技局牵头</p>
          <div class="flex mt16">
            <p class="f14 cor3 lineH1 w108 justify">成员单位：</p>
            <p class="cor3 f16 fb lineH22 flex1">区委办，区政府办，区委组织部，区委宣传部，区数据资源局，区人社局，区财政局，区农业农村局，区发改经信局，区统计局，区应急管理局，区商务局，区投促局，区民政局，区文广旅体局，区住建局，区城管局，区卫健局，区科技局，区教育局，区市场监管局，区公安分局，区审管办，各镇街平台</p>
          </div>
      </div>
    </div>

    <div class="project mt16">
      <div class="item_list item_left">
        <div class="title">
          <div class="left f16 cor3 box_1">重点项目</div>
          <div class="right f14">点击查看进度 <i class="el-icon-arrow-right"></i></div>
        </div>
        <ul class="pl20 pb20">
          <li v-for="item in list_one" :key="item.id">
            <div class="image_1">
                 <img src="../../assets/img/icons2.png" alt="" class="wh" />
            </div>
            <p class="f14 cor3 fb">{{ item.name }}</p>
          </li>
        </ul>
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
      list:[
        {
          time:"2021-03-16",
          title:"未来工厂建设研讨会",
          content:"赴杭州数字经济联合会，与专家共同探讨未来工厂建设方案。",
          photo:require('@/assets/images/work1.png')
       },
         {
          time:"2021-03-27",
          title:"数字化改革推进动态",
          content:"根据市经信局工作要求，联系落实一家小微园区拍摄数字化改革宣传片，准备在331数字化改革大会上播出。",
          photo:require('@/assets/images/work2.png')
       },
      ],
      list_one: [
        {
          id: 1,
          name: "蚂蚁集团全球总部项目",
        },
        {
          id: 2,
          name: "中国空间技术研究院项目（“七中心一基地”）",
        },
        {
          id: 3,
          name: "中船重工海洋信息装备军民融合产业化项目",
        },
        {
          id: 4,
          name: "菜鸟云谷RFID数据采集设备研发制造项目",
        },
        {
          id: 5,
          name: "阿里云计算产业园项目",
        },
        {
          id: 6,
          name: "谷尚智能新制造业基地项目",
        },
      ],
    };
  },
  mounted(){
    this.$getPageHeight();
    this.list=this.list.reverse()
  },
  methods: {
  },
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
.bor_bottom {
  border-bottom: 1px solid #f4f4f4;
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
  .w108{
    width: 108px;
  }
  .justify{
    text-align-last: justify;
  }
  .lineH22{
    line-height:22px;
  }
}

.project{
  ul li{
    list-style: none;
    display: flex;
    align-items: center;
    margin-left:20px;
  }
  ul li p{
    padding-left: 13px;
    margin: 12px 0; 
  }
   .item_list{
     background: #fff;
     border-radius: 4px;
   }
   .title{
     display: flex;
     height: 52px;
     justify-content: space-between;
     align-items: center;
     position: relative;
     border-bottom: 1px solid #F4F4F4;
   }
   .title .left{
     padding-left: 24px;
     font-weight: 600;
   }
   .title .right{
     padding-right: 20px;
     color: #1492FF;
   }
   .box_1::after{
     content: "";
     position: absolute;
     top: 18px;
     left: 0px;
    width: 4px;
    height: 16px;
    background: #1d96ff;
    border-radius: 2px;
   }
   .image_1{
     width: 16px;
     height: 16px;
  
     position: relative;
   }
   .image_1::after{
     content: "";
     position: absolute;
     width: 1px;
     height: 15px;
     background: #ccc;
     bottom: -25px;
     left: 8px;
   }
    .item_list li:last-child .image_1::after,
    .item_left li:last-child .image_1::after
    {
      display: none;
    }
}

</style>