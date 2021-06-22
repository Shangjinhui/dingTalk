<template>
  <div v-wechat-title="$route.meta.title">
    <Tab @typeNum="changeType" :type="type" :tips="tips" />
    <Indicators v-if="type == 0" />
    <Worke :list="list" v-if="type == 1" />
    <my-policy v-else-if="type == 2"></my-policy>
    <my-evaluate v-else-if="type == 3"></my-evaluate>
  </div>
</template>

<script>
import { puclicE } from "@/api/api.js";
import Tab from "../components/tab";
import Worke from "../components/finance_child/worke";
import Indicators from "../components/finance_child/indicators";
import myPolicy from "../components/finance_child/policy";
import myEvaluate from "../components/finance_child/evaluate";
export default {
  components: {
    Tab,
    Worke,
    myPolicy,
    myEvaluate,
    Indicators
  },
  data() {
    return {
      type: 0,
      tips:"一般公共预算收入",
      list: [
        {
          content: "提交审批",
          person: "李小明",
          time: "2020-03-26",
        },
        {
          content: "财务审批",
          person: "张文强",
          time: "2020-03-26",
        },
        {
          content: "待调度审核",
          person: "陈璐",
          time: "2020-03-26",
        },
        {
          content: "已审核",
          person: "成雪",
          time: "2020-03-27",
        },
      ],
    };
  },
  created() {
    //console.log(puclicE);
  },
  mounted() {
    //this.getData();
  },
  methods: {
    getData() {
      puclicE.getList().then((res) => {
        console.log(res);
      });
    },

    changeType(num) {
      this.type = num;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>