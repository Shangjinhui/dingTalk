<template>
  <!-- 区发改经信局云创产业指标体系 -->
  <div class="sjh">
    <div class="bgfff b-rad4 mt16">
      <div class="pt16">
        <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
          <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
          >数字经济核心产业增加值增速
        </p>
      </div>
      <div class="wid100p mt22">
        <!-- <div class="flex pl25">
          <i class="wid8 h8 bg-1492FF mr8"></i>
          <p class="fsize14 col666 mr18">增速目标</p>
          <i class="wid8 h8 bg-E5981D mr8"></i>
          <p class="fsize14 col666 mr18">完成进度</p>
        </div> -->
        <div class="h270">
          <my-chart :option="options"></my-chart>
        </div>
        
      </div>
    </div>

    <div class="bgfff b-rad4 mt16">
      <div class="pt16">
        <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
          <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
          >2020年全区数字经济增加值增速
        </p>
      </div>
      <div class="wid100p h240 mt22">
        <my-chart :option="options2"></my-chart>
      </div>
    </div>

    <div class="bgfff b-rad4 mt16">
      <div class="pt16">
        <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
          <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
          >2020年一季度分区县数字经济核心产业增加值增速
        </p>
      </div>
      <div class="wid100p h240 mt22">
        <Mixture :MixtureData="MixtureData" />
      </div>
    </div>
    <!-- 云创产业折线图备份 -->
    <!--<div class="bgfff b-rad4 mt16">
      <div class="pt16">
        <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
          <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
          >2020年西湖区数字经济增加值分镇街情况
        </p>
      </div>
      <div class="wid100p h300 mt22">
        <my-chart :option="options3"></my-chart>
      </div>
    </div> -->

    <div class="bgfff b-rad4 mt16">
      <div class="pt16">
        <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
          <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
          >5G基站建设完成情况表
        </p>
      </div>
      <div class="wid100p mt22">
        <!-- <div class="flex pl25">
          <i class="wid8 h8 bg-1492FF mr8"></i>
          <p class="fsize14 col666 mr18">任务数</p>
          <i class="wid8 h8 bg-E5981D mr8"></i>
          <p class="fsize14 col666 mr18">完成数</p>
        </div> -->
        <div class="h270">
          <my-chart :option="options4"></my-chart>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import myChart from "@/components/sjhChart";
import Mixture from "./mixture";
let echarts = require("echarts");
export default {
  components: {
    myChart,
    Mixture
  },
  data() {
    return {
      options:{
        legend: {
          //标记属性
          data: [
            {
              name: "增速目标",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn2.png"),
            },
            {
              name: "完成进度",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/orange-block.png"),
            },
          ],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 1 + "%", //标记位置
          itemWidth: 24,
          itemHeight: 8,
          // itemGap: 5,
        },
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "shadow",//鼠标悬停显示样式
            shadowStyle:{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 2
            }
          },
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          axisLabel: {  
            show: true,  
            interval: 'auto',  
            formatter: '{value} %'  
          }, 
          // splitNumber: 1,
          // min: 0,
          // max: 100,
          // interval: 20,
          // axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          data: [
            "北山街道",
            "西溪街道",
            "灵隐街道",
            "翠苑街道",
            "文新街道",
            "古荡街道",
            "蒋村街道",
            "转塘街道",
            "留下街道",
            "三墩镇",
            "双浦镇",
            "云栖小镇",
            "紫荆港科技城",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 18, //每行显示字数
            rotate: 45, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "增速目标",
            type: "bar",
            data: [18, 18, 18, 20, 20, 22, 18, 20, 20, 20, 18,20,18],
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            // label: {
            //   show: false,
            //   position: "top",
            // },
            //labelLine: { show: false }, //是否显示线条
          },
          {
            name: "完成进度",
            type: "bar",
            data: [15.4, 10.5, 7.6, 9.3, 2.6, 89, 5, 46, 70, 22, 47, 32,14],
            itemStyle: {
              color: "#E5981D",
            },
            // label: {
            //   show: false,
            //   position: "top",
            // },
            //labelLine: { show: false }, //是否显示线条
          },
        ],
      },
      options2:{
        legend: {
          //标记属性
          data: [
            {
              name: "增加值",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn2.png"),
            }
          ],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 1 + "%", //标记位置
          itemWidth: 24,
          itemHeight: 8,
          // itemGap: 5,
        },
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "shadow",//鼠标悬停显示样式
            shadowStyle:{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 2
            }
          },
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          axisLabel: {  
            show: true,  
            interval: 'auto',  
            // formatter: '{value} %'  
          }, 
          // splitNumber: 1,
          // min: 0,
          // max: 100,
          // interval: 20,
          // axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          data: [
            "双浦镇",
            "古荡街道",
            "转塘街道",
            "留下街道",
            "三墩镇",
            "翠苑街道",
            "文新街道",
            "紫金港科技城",
            "灵隐街道",
            "艺创小镇",
            "北山街道",
            "西溪街道",
            "云栖小镇",
            "蒋村街道"
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 18, //每行显示字数
            rotate: 30, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "增加值",
            type: "bar",
            data: [291.5, 239.6, 96.4, 90.6, 20.1, 18.9,4.0, -2.3, -7.9, -31.0, -31.2, -31.2,-33.0,-43.5],
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            label: {
              show: true,
              position: "top",
            },
          },
        ],
      },
      MixtureData: {
        title: "近三年镇街、平台收入趋势",
        width: 100 + "%", //柱状图盒子宽度
        legend: {
          //标记属性
          data: [
            {
              name: "增加值",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn2.png"),
            },
            {
              name: "增幅",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/yc-zx.png"),
            },
          ],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 1 + "%", //标记位置
          // icon: "roundRect",
          itemWidth: 24,
          itemHeight: 8,
          // itemGap: 5,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [
            "上城区",
            "下城区",
            "江干区",
            "拱墅区",
            "西湖区",
            "滨江区",
            "钱塘新区",
            "萧山区",
            "余杭区",
            "富阳区",
            "临安区",
            "桐庐县",
            "淳安县",
            "建德市"
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 8, //每行显示字数
            rotate: 20, //文字旋转角度，0不旋转
            align: "center",
          },
        },

        series: [
          //柱状图数据
          {
            name: "增加值",
            type: "bar",
            data: [
              40,
              40,
              40,
              40,
              500,
              1300,
              200,
              200,
              1700,
              200,
              100,
              40,
              10,
              10
            ],
            label: {
              show: true,
              position: "top",
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            barWidth:28
          },
          {
            name: "增幅",
            type: "line",
            data: [
              4.2,
              0.2,
              1.4,
              17.2,
              37.5,
              16.6,
              2.1,
              20.5,
              5.6,
              2.5,
              17.5,
              14.7,
              -2.6,
              0.0
            ],
            yAxisIndex: 1, //双Y轴，选择对应某个轴
            label: {
              show: true,
              position: "top",
              formatter: "{c} %",
            },

            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#09C592",
            },
          },
        ],
      },
      options3:{
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "shadow",//鼠标悬停显示样式
            shadowStyle:{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 2
            }
          },
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: [
              '北山街道',
              "翠苑街道",
              "古荡街道",
              "蒋村街道",
              "灵隐街道",
              "留下街道",
              "三墩镇",
              "双浦街道",
              "文新街道",
              "西溪街道",
              "艺创小镇",
              "云栖小镇",
              "转塘街道",
              "紫金港科技城"
            ],
            axisLabel: {
              //坐标轴文字显示样式
              lineHeight: 18, //字体行高
              fontNum: 18, //每行显示字数
              rotate: 45, //文字旋转角度，0不旋转
            },
            axisLine: {
                onZero: false    //横坐标在最底部
            }
        },
        yAxis: {
            type: 'value',
            min: -100,
            max: 300,
            interval: 100,
        },
        series: [{
            symbol: "none",
            data: [-30, 20, 240, -40, -10, 90, 20,290,0,0,-30,-35,100,0],
            type: 'line',
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
        }]
      },
      options4:{
        legend: {
          //标记属性
          data: [
            {
              name: "任务数",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn2.png"),
            },
            {
              name: "完成数",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/orange-block.png"),
            },
          ],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 1 + "%", //标记位置
          itemWidth: 24,
          itemHeight: 8,
          // itemGap: 5,
        },
        tooltip:{
          trigger: "axis",
          axisPointer: {
            type: "shadow",//鼠标悬停显示样式
            shadowStyle:{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 2
            }
          },
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          //Y轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
          axisLabel: {  
            show: true,  
            interval: 'auto',  
            // formatter: '{value} %'  
          }, 
          // splitNumber: 1,
          min: 0,
          max: 40,
          interval: 10,
          // axisLabel: {},
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          data: [
            "北山街道",
            "西溪街道",
            "灵隐街道",
            "翠苑街道",
            "文新街道",
            "古荡街道",
            "蒋村街道",
            "转塘街道",
            "留下街道",
            "三墩镇",
            "双浦镇",
            "云栖小镇",
            "紫荆港科技城",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 18, //每行显示字数
            rotate: 45, //文字旋转角度，0不旋转
          },
        },
        series: [
          //柱状图数据
          {
            name: "任务数",
            type: "bar",
            data: [20, 20, 20, 20, 20, 25, 25, 30, 30, 30, 35,35,40],
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            // label: {
            //   show: false,
            //   position: "top",
            // },
            //labelLine: { show: false }, //是否显示线条
          },
          {
            name: "完成数",
            type: "bar",
            data: [5, 4, 1, 2, 2, 4, 6, 10, 12, 9, 15, 14,25],
            itemStyle: {
              color: "#E5981D",
            },
            // label: {
            //   show: false,
            //   position: "top",
            // },
            //labelLine: { show: false }, //是否显示线条
          },
        ],
      }
    };
  },
  mounted() {
    this.$getPageHeight();
  },
  methods: {
    
  },
};
</script>