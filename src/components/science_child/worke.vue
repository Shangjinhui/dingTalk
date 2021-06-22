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
      <div class="pub_title pr20 flexba">
        <div class="flexa">
          <p class="side"></p>
          <p class="fb">工作专班</p>
        </div>
        <div class="cor149 f14 flexa">查看领导小组文件 <i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="units">
        <div class="lead_team">
          <p class="flexa work_pubtitle">
            <span class="circle"></span>
            <span class="cor3 f18 ml10 fb">西湖区高校经济工作领导小组</span>
          </p>
          <div class="lead_team_item pt15">
            <div class="flexa mb20">
              <p class="cor3 f14 lead_team_item_letf">组 长：</p>
              <p class="cor3 f14 fb">高国飞 董毓民</p>
            </div>
            <div class="flexa mb20">
              <p class="cor3 f14 lead_team_item_letf">副 组 长：</p>
              <p class="cor3 f14 fb">陈白磊 马品芳</p>
            </div>
            <div class="flexa mb20">
              <p class="cor3 f14 lead_team_item_letf">领导小组办公室：</p>
              <p class="cor3 f14 fb">区科技局（区高校办)</p>
            </div>
            <div class="flexa mb20">
              <p class="cor3 f14 lead_team_item_letf">专项工作组：</p>
              <p class="cor3 f14 fb">
                区委人才办、区科技局、区发改经信局、区投促局、区人社局
              </p>
            </div>
          </div>
        </div>
        <div class="lead_team mt16">
          <p class="flexa work_pubtitle">
            <span class="circle"></span>
            <span class="cor3 f18 ml10 fb"
              >西湖区政府与高校战略合作工作领导小组（按需设立)</span
            >
          </p>
        </div>
        <div class="lead_team mt28">
          <p class="flexa work_pubtitle">
            <span class="circle"></span>
            <span class="cor3 f18 ml10 fb">区领导结对联系高校机制</span>
          </p>
        </div>
      </div>
    </div>
   

    <div class="wrap">
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
            <p class="f14 cor3">{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="item_list">
        <div class="title">
          <div class="left f16 cor3 box_1">重点活动</div>
          <div class="right f14">点击查看更多 <i class="el-icon-arrow-right"></i></div>
        </div>
        <ul class="pl20 pb20">
          <li v-for="itme in list_two" :key="itme.id">
            <div class="image_1">
                <img src="../../assets/img/icons1.png" alt="" class="wh" />
            </div>
            <p class="f14 cor3">{{ itme.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Time from "../timeLine";
export default {
  data() {
    return {
      list_one: [
        {
          id: 1,
          name: "脑机智能研究中心（脑机智能产业园）",
        },
        {
          id: 2,
          name: "杭电数字经济创新科技园",
        },
        {
          id: 3,
          name: "浙财金融大数据产业园",
        },
        {
          id: 4,
          name: "天堂镓谷产业园",
        },
        {
          id: 5,
          name: "西湖大学城（产学研基地)",
        },
        {
          id: 6,
          name: "浙工大产教融合中心（暂名）",
        },
        {
          id: 7,
          name: "中国空间技术研究院杭州中心",
        },
        {
          id: 8,
          name: "中国（之江）视听创新创业基地",
        },
        {
          id: 9,
          name: "浙大-灵隐智能机器人科创基地（暂名）",
        },
      ],
      list_two: [
        {
          id: 1,
          name: "西湖区科技创新暨高校经济大会",
        },
        {
          id: 2,
          name: "脑机智能产业园开园",
        },
        {
          id: 3,
          name: "杭电数字经济创新科技园开园",
        },
        {
          id: 4,
          name: "浙大-灵隐智能机器人科创基地开园",
        },
        {
          id: 5,
          name: "蒋村街道高校校友基地开园",
        },
        {
          id: 6,
          name: "三墩产学研发展服务中心周年庆",
        },
      ],
      list: [
        {
          time: "2021-01-01",
          title: "制定下发年度十大工作要点",
          content:
            "梳理细化《2021年高校经济十大重点工作任务清单》《2021年西湖区高校经济重点载体表》《2021年西湖区高校经济重点产业项目表》《2021年西湖区高校经济重大活动安排表》……          ",
          photo: require("@/assets/img/science1.png"),
        },
        {
          time: "2021-01-20",
          title: "深化资源利用，推动“一带一区一大道”建设",
          content:
            "杭电数字经济创新科技园、浙大——灵隐智能机器人科创基地、西湖大学国家科技园开园启动;推进科技学院科技园产教大楼产学研合作、浙商大西部校区合作……                          ",
          photo: require("@/assets/img/science2.png"),
        },
        {
          time: "2021-02-02",
          title: "深化校友回归工程",
          content:
            "建立区级与高校校友联合招商工作机制，推进师生校友创业创新，全年引进高校经济项目100个。",
          photo: require("@/assets/img/science3.png"),
        },
      ],
    };
  },
  components: {
    Time,
  },
  mounted(){
    this.$getPageHeight();
    this.list=this.list.reverse()
  },
  props: {},

};
</script>

<style scoped>
  ul li{
    list-style: none;
    display: flex;
    align-items: center;
    margin-left:20px;
  }
  ul li p{
    padding-left: 13px;
    margin: 15px 0; 
  }
   .wrap{
     margin-top: 16px;
     display: flex;
     /* margin-bottom: 40px; */
   }
   .item_list{
     flex: 1;
     border: 1px solid #ccc;
     background: #fff;
     border-radius: 4px;
   }
   .item_left{
     margin-right: 16px;
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
</style>


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
    }
  }
}
.units {
  padding-left: 24px;
  padding-right: 20px;
  padding-bottom: 30px;
  margin-top: 23px;
  .circle {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #d8d8d8;
    border-radius: 50%;
  }
  .work_pubtitle {
    margin-bottom: 10px;
    margin-top: 0;
  }
  .lead_team_item {
    padding-left: 18px;
    background-color: #fafafa;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
}
</style>