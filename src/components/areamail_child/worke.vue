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
    <div class="activity">
      <div class="flexba bor_bottom">
        <div class="pub_title flexa">
          <p class="side"></p>
          <p>活动列表</p>
        </div>
        <div class="search flexa">
          <i class="el-icon-search"></i>
          <input
            class="se_ipt"
            v-model="seVal"
            type="text"
            placeholder="请输入活动名称"
          />
        </div>
      </div>
      <div class="event_list">
        <div class="event_top flexa">
          <p class="cor6 f12">活动级别：</p>
          <div class="event_top_tight">
            <span
              :class="index == tab_num ? 'backdrop' : ''"
              v-for="(item, index) in tabList"
              :key="index"
              @click="alter(index)"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="grid">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="80" ></el-table-column>
            <el-table-column prop="name" label="活动名称" ></el-table-column>
            <el-table-column prop="unit" label="举办单位" > </el-table-column>
            <el-table-column prop="address" label="举办地址" > </el-table-column>
            <el-table-column prop="type" label="活动类别"  > </el-table-column>
            <el-table-column prop="date" label="举办时间" > </el-table-column>
            <el-table-column label="操作" >
              <template slot-scope="scope">
                <el-button @click="handleClick(scope)" type="text" size="small">
                  查看
                </el-button>
              </template>
            </el-table-column>
          </el-table>
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
      seVal: "",
      tabList: [
        "全部",
        "产业相关活动",
        "地域文化活动",
        "创业培训",
        "调研考察",
        "研学游学",
        "赛事活动",
        "其他",
      ],
      tab_num: 0,
      tableData: [
        {
          date: "2020-09-05",
          name: "西湖大学湖心讲堂公开课",
          address: "云栖小镇",
          unit: "西湖大学",
          type: "游学研学",
        },
        {
          date: "2020-08-11",
          name: "云上西湖·杭向未来——2020数字经济全球云享会",
          address: "云栖小镇",
          unit: "杭州市委组织部(人才办)",
          type: "产业相关活动",
        },
        {
          date: "2020-05-07",
          name: "杭州举行“创响青春·杭向未来”2020杭州大学生“双创日”活动",
          address: "云栖小镇",
          unit: "杭州市委组织部(人才办)",
          type: "创业培训",
        },
        {
          date: "2021-01-05",
          name: "全省城市大脑推进会",
          address: "云栖小镇",
          unit: "浙江省和信息化厅",
          type: "产业相关活动",
        },
      ],
      list:[
        {
          time:"2020-06-13",
          title:"杭州举行“创响青春·杭向未来”2020杭州大学生“双创日”活动",
          content:"近日，杭州市举行“创响青春·杭向未来”2020杭州大学生“双创日”发布活动，确定每年6月13日为杭州大学生双创日。发布现场，杭州市委人才办发布大学生“双创日”系列活动，市人力社保局发布《杭向未来·大学生创业创新三年行动计划(2020—2022年)》和“十大黄金政策点”等。 ",
          photo:""
       },
       {
          time:"2020-08-10",
          title:"云上西湖·杭向未来——2020数字经济全球云享会…",
          content:"8月10日下午，云上西湖·杭向未来——2020数字经济全球云享会在西湖区云栖小镇举行。市委常委、组织部长毛溪浩，西湖大学校长、中国科学院院士… ",
          photo:require('@/assets/img/mail2.png')
       },
        {
          time:"2020-09-05",
          title:"“跨越时空的纠缠”，西湖大学湖心讲堂开讲",
          content:"“科学是什么？科学就是用来解释大千世界、生活百科的原理。”带着这样的认识，杭州学军中学高中生何星佑走进了西湖大学湖心讲堂。9月5日，西湖大学湖心讲堂公开课…",
          photo:require('@/assets/img/mail1.png')
       },
        {
          time:"2020-12-31",
          title:"全省城市大脑推进会",
          content:"12月31日，全省城市大脑推进大会在杭州召开。副省长高兴夫出席会议并讲话，省政府副秘书长董贵波主持会议。会上，省经信厅副厅长吴君青作了题为《加快城市大脑建设推广 大力提升城市数字化治理水平》的发言，中国工程院院士王坚作了主题发言，杭州市、温州市、杭州市西湖区、华住集团分别进行了交流发言。",
          photo:""
       }
      ]
    };
  },
  mounted(){
    this.list=this.list.reverse()
    this.$getPageHeight();
  },
  methods: {
    alter(num) {
      this.tab_num = num;
    },
    handleClick(row) {
      console.log(row);
    },
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

.activity {
  width: 100%;
  padding-bottom:26px;
  background-color: #fff;
  .search {
    width: 156px;
    height: 32px;
    background: #f7f8fa;
    border-radius: 2px;
    margin-right: 20px;
    overflow: hidden;
    padding-left: 10px;
    i {
      color: #999;
      margin-right: 3px;
    }
    .se_ipt {
      flex: 1;
      height: 100%;
      background: none;
      outline: none;
      border: none;
    }
  }

  .event_top {
    padding-left: 20px;
    .event_top_tight {
      span {
        display: inline-block;
        color: #333;
        font-size: 12px;
        height: 28px;
        line-height: 28px;
        background-color: #fff;
        margin-right: 10px;
        padding: 0 10px;
      }
      .backdrop {
        color: #fff;
        background-color: #1492ff;
      }
    }
  }
}

.grid{
  padding: 0 20px;
  /deep/ .el-table thead tr th{
    color: #333;
    background-color: #FAFAFA  !important;
  }
}
</style>