<template>
  <div class="wrap">
    <div class="sjh">
      <div class="bgfff b-rad4 mt16">
        <div class="pt16">
          <p class="fsize16 col333 b bl4-1492FF b-rad2 pl20 rel">
            <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
            >2021年杭州市各城区一般公共预算收入增幅排名
          </p>
          <p class="average cor6 fsize14 ml21 mt5">全市平均数<span class="cor37A">{{averageAdd}}</span></p>
        </div>
        <div class="wid100p h372 mt8 pb20">
          <my-chart :option="options1"></my-chart>
        </div>
      </div>

      <div class="bgfff b-rad4 mt16">
        <div class="pt16">
          <p class="fsize16 col333 b bl4-1492FF b-rad2 pl20 rel">
            <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
            >2021年杭州市各城区一般公共预算收入总量排名
          </p>
          <p class="average cor6 fsize14 ml21 mt5">全市平均数<span class="cor37A">{{averageTotal}}</span></p>
        </div>
        <div class="wid100p h372 mt8 pb20">
          <my-chart :option="options2"></my-chart>
        </div>
      </div>

      <div class="mt16 flex-sp">
        <div class="flex1 h294 b-rad4 mr16 bgfff">
          <div class="pt16">
            <p class="fsize16 col333 b bl4-1492FF b-rad2 pl20 rel">
              <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
              >2021年各镇街收入时序进度前三名百分比
            </p>
            <p class="mt8 pl20 fsize14 col666">三墩<span class="col1492FF">48.13%</span>,古荡<span class="col1492FF">45.16%</span>,留下<span class="col1492FF">30.22%</span></p>
          </div>
          <div class="wid100p h230 pb20">
            <my-chart :option="options3"></my-chart>
          </div>
          
        </div>
        <div class="flex1 h294 b-rad4 bgfff">
          <div class="pt16">
            <p class="fsize16 col333 b bl4-1492FF b-rad2 pl20 rel">
              <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
              >2021年各镇街收入时序进度后三位百分比
            </p>
            <p class="mt8 pl20 fsize14 col666">紫金港科技城<span class="colFF9314">18.3%</span>,云栖小镇<span class="colFF9314">16.76%</span>,转塘<span class="colFF9314">16.59%</span></p>
          </div>

          <div class="wid100p h230 pb20">
            <my-chart :option="options4"></my-chart>
          </div>
        </div>
      </div>
    </div>

    <div class="income_top flexa">
      <div class="income_top_left">
        <div class="pub_title lineH1 flexa">
          <p class="side"></p>
          <p class="fb">当年全区收入完成</p>
        </div>
        <div class="flexa ml20 mt10">
          <p class="cor6 f14 lineH1 flexa">
            目标任务 <span style="color: #1492ff">175</span>亿，
          </p>
          <p class="cor6 f14 lineH1 flexa">
            当前完成 <span style="color: #ffa426">49.86</span>亿。
          </p>
        </div>
        <Coumn :CoumnData="CoumnData" />
      </div>
      <div class="income_top_right ml16">
        <div class="pub_title lineH1 flexa mb16">
          <p class="side"></p>
          <p class="fb">近三年全区收入趋势</p>
        </div>
        <Graph :GraphData="GraphData" />
      </div>
    </div>
    <div class="income_mid mt16" v-if="false">
      <div class="pub_title lineH1 flexa pt15">
        <p class="side"></p>
        <p class="fb">当年各镇街、平台收入进度（万元）</p>
      </div>
      <Mixture :MixtureData="MixtureData" />
    </div>
    <!-- 水平柱状图 -->
    <div class="income_bottom mt16">
      <div class="pub_title lineH1 flexa pt15">
        <p class="side"></p>
        <p class="fb">近三年镇街、平台收入趋势（万元）</p>
      </div>
      <HistoGramLevel
        class="histogram"
        :histogramLevelData="histogramLevelData"
      />
    </div>
  </div>
</template>

<script>
import HistoGramLevel from "@/components/histogramlevel.vue";
import Coumn from "./coumn";
import Graph from "./graph";
import Mixture from "./mixture";
import myChart from "@/components/sjhChart";
export default {
  name: "wrap",
  components: {
    HistoGramLevel,
    Coumn,
    Graph,
    Mixture,
    myChart
  },
  data() {
    return {
      averageAdd:0,
      averageTotal:0,
      options1:{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
            top: '3%',
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          inverse:true,              //坐标反向
          axisTick:{ show:false },   //坐标刻度
          renderAsImage:true,
          axisLabel: {
            show: true,
            margin:80,
            textStyle: {
              align:'left',
              color: params => params=="西湖区"?"#000000":"#666666"
            },
            formatter: function (value,index) {
                //console.log(value,index)
                let arr = ['one','two','three'];
                return arr[index]?'{'+ arr[index] + '| }  {value|' + value + '}':index+1+'  '+value;
            },
            rich: {    //通过自定义样式给坐标轴添加图片
                'one': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/one.png')
                    }
                },
                'two': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/two.png')
                    }
                },
                'three': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/three.png')
                    }
                },
            }
          },
          data: [
            "江干区",
            "临安区",
            "西湖区",
            "下城区",
            "桐庐县",
            "上城区",
            "钱塘新区",
            "建德市",
            "富阳区",
            "拱墅区",
            "余杭区",
            "萧山区",
            "滨江区",
          ],
        },
        
        series: [
          {
            name: "",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position:"insideLeft"
            },
            emphasis: {
              focus: "series",
            },
            // color: "#1492FF",
            itemStyle:{
              normal:{
                color:function(params){
                  //console.log(params)
                  return params.name=="西湖区"?"#FFA337":"#1492FF";
                },
              }
            },
            data: [47.7,47.7, 40.6, 40.5, 39.0, 34.5, 33.5, 30.7, 28.8, 28.0, 24.6, 19.5, 15.3],
          },
        ],
      },
      options2:{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
            top: '3%',
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          inverse:true,              //坐标反向
          axisTick:{ show:false },   //坐标刻度
          renderAsImage:true,
          axisLabel: {
            show: true,
            margin:80,
            textStyle: {
              align:'left',
              color: params => params=="西湖区"?"#000000":"#666666"
            },
            formatter: function (value,index) {
                //console.log(value,index)
                let arr = ['one','two','three'];
                return arr[index]?'{'+ arr[index] + '| }  {value|' + value + '}':index+1+'  '+value;
            },
            rich: {    //通过自定义样式给坐标轴添加图片
                'one': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/one.png')
                    }
                },
                'two': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/two.png')
                    }
                },
                'three': {
                    height: 14,
                    align: 'center',
                    backgroundColor: {
                        image: require('@/assets/images/three.png')
                    }
                },
            }
          },
          data: [
            "余杭区",
            "萧山区",
            "西湖区",
            "滨江区",
            "江干区",
            "钱塘新区",
            "富阳区",
            "临安区",
            "下城区",
            "拱墅区",
            "上城区",
            "建德市",
            "桐庐县",
          ],
        },
        
        series: [
          {
            name: "",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position:"insideLeft"
            },
            emphasis: {
              focus: "series",
            },
            // color: "#1492FF",
            itemStyle:{
              normal:{
                color:function(params){
                  //console.log(params)
                  return params.name=="西湖区"?"#FFA337":"#1492FF";
                },
              }
            },
            data: [1923206, 1224476 , 663226 , 547097 , 442235 , 400889 , 395644, 328328, 310950, 305442, 260938 , 115076, 109250],
          },
        ],
      },
      options3:{
        grid: {
          bottom: "1%",
        },
        xAxis: {
          type: 'category',
          data: ['三墩', '古荡', '留下']
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 50,
            interval: 10, //每份的值
        },
        series: [{
            data: [48.13, 45.16, 30.22],
            type: 'bar',
            barWidth:35,
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
            label: {
              show: true,
              position:"top",
              formatter: '{c}%'
            },
        }]
      },
      options4:{
        grid: {
          bottom: "1%",
        },
        xAxis: {
          type: 'category',
          data: ['紫金港科技城', '云栖小镇', '转塘']
        },
        yAxis: {
            type: 'value',
            min: 14,
            max: 19,
            interval: 1, //每份的值
        },
        series: [{
            data: [18.3, 16.76, 16.59],
            type: 'bar',
            barWidth:35,
            itemStyle: {
              color: "#FF9314", //柱状图颜色
            },
            label: {
              show: true,
              position:"top",
              formatter: '{c}%'
            },
        }]
      },
      CoumnData: {
        legend: {
          //标记属性
          data: ["任务", "当前完成"],
          orient: "horizontal", //标记排列显示
          bottom: 0, //标记位置
          left: 35 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 50,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true,
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 8, //每行显示字数
            rotate: 20, //文字旋转角度，0不旋转
          },
        },
        series: [
          {
            name: "任务",
            type: "bar",
            data: [175],
            barWidth: 35, //柱图宽度
            barGap: "200%", //柱图间距
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
          },
          {
            name: "当前完成",
            type: "bar",
            data: [49.86],
            barWidth: 35, //柱图宽度
            barGap: "200%", //柱图间距
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#FF9314", //柱状图颜色
            },
          },
        ],
      },
      // 折线图
      GraphData: {
        legend: {
          //标记属性
          data: ["全区收入亿元"],
          orient: "horizontal", //标记排列显示
          top: 0, //标记位置
          left: 3 + "%", //标记位置
          icon: "image://" + require("../../assets/img/icon2.png"),
          itemWidth: 24,
          itemHeight: 7,
          itemGap: 50,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          dataList: ["2018", "2019", "2020"],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 8, //每行显示字数
            rotate: 20, //文字旋转角度，0不旋转
          },
          nameTextStyle: {
            align: "center",
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "全区收入亿元",
            data: [139.41, 150.64, 161.98],
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                //自定义颜色，渐变色填充折线图区域
                colorStops: [
                  {
                    offset: 0,
                    color: "#D0E9FF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#F9FCFF", // 100% 处的颜色
                  },
                ],
              },
            },
          },
        ],
      },

      // 折柱混合
      MixtureData: {
        title: "近三年镇街、平台收入趋势",
        width: 100 + "%", //柱状图盒子宽度
        legend: {
          //标记属性
          data: [
            {
              name: "任务",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn2.png"),
            },
            {
              name: "完成",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn1.png"),
            },
            {
              name: "完成进度",
              // 强制设置图形为圆。
              icon: "image://" + require("../../assets/img/icozn.png"),
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
            "北山街道",
            "西溪街道",
            "灵隐街道",
            "翠苑街道",
            "文新街道",
            "古荡街道",
            "转塘街道",
            "留下街道",
            "蒋村街道",
            "三墩镇",
            "双浦镇",
            "云栖小镇",
            "紫金港科技城",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 8, //每行显示字数
            rotate: 20, //文字旋转角度，0不旋转
            align: "right",
          },
        },

        series: [
          //柱状图数据
          {
            name: "任务",
            type: "bar",
            data: [
              52000,
              86500,
              86500,
              125000,
              63000,
              342500,
              203000,
              203000,
              87500,
              100000,
              45000,
              50500,
              100000,
            ],
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
          },
          {
            name: "完成",
            type: "bar",
            data: [
              10493,
              18631,
              18311,
              34883,
              16442,
              154657,
              33687,
              61340,
              16333,
              48180,
              10458,
              8465,
              18300,
            ],
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#09C592",
            },
          },
          {
            name: "完成进度",
            type: "line",
            data: [
              20.18,
              21.54,
              21.17,
              27.91,
              26.1,
              45.16,
              16.59,
              30.22,
              18.67,
              48.18,
              23.24,
              16.76,
              18.3,
            ],
            yAxisIndex: 1, //双Y轴，选择对应某个轴
            label: {
              show: true,
              position: "top", //数值在右边显示
              formatter: "{c} %",
            },

            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#FF9314",
            },
          },
        ],
      },
      // 水平柱状图
      histogramLevelData: {
        title: "近三年镇街、平台收入趋势",
        width: 100 + "%", //柱状图盒子宽度
        histogramBarHeight: "36.38vw",
        legend: {
          //标记属性
          data: ["2018年", "2019年", "2020年"],
          orient: "horizontal", //标记排列显示
          top: 15, //标记位置
          left: 3 + "%", //标记位置
          icon: "roundRect",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 15,
        },
        grid: {
          //绘图区调整
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        yAxis: {
          //X轴显示数值
          type: "value",
          boundaryGap: [0, 0.01], //数值精度
        },
        xAxis: {
          //X轴显示分类
          type: "category",
          dataList: [
            "北山街道",
            "西溪街道",
            "灵隐街道",
            "翠苑街道",
            "文新街道",
            "古荡街道",
            "转塘街道",
            "留下街道",
            "蒋村街道",
            "三墩镇",
            "双浦镇",
            "云栖小镇",
            "紫金港科技城",
          ],
          axisLabel: {
            //坐标轴文字显示样式
            lineHeight: 18, //字体行高
            fontNum: 8, //每行显示字数
            rotate: 20, //文字旋转角度，0不旋转
            align: "right",
          },
        },
        series: [
          //柱状图数据
          {
            name: "2018年",
            type: "bar",
            data: [
              50790,
              97974,
              82285,
              138979,
              66298,
              146068,
              140430,
              91575,
              87588,
              137310,
              43085,
              30659,
              0,
            ],
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#1492FF", //柱状图颜色
            },
          },
          {
            name: "2019年",
            type: "bar",
            data: [
              51985,
              90529,
              75057,
              144671,
              75219,
              162328,
              180044,
              121450,
              99452,
              114185,
              53805,
              37428,
              75766,
            ],
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#09C592",
            },
          },
          {
            name: "2020年",
            type: "bar",
            data: [
              44061,
              73493,
              75260,
              113212,
              48812,
              335908,
              175236,
              195210,
              79449,
              59665,
              40489,
              43709,
              76436,
            ],
            label: {
              show: false,
              position: "top", //数值在右边显示
            },
            labelLine: { show: false }, //是否显示线条
            itemStyle: {
              color: "#FF9314",
            },
          },
        ],
      },
    };
  },
  mounted(){
    let _this=this
    let options2Data=JSON.stringify(this.options2.series[0].data)
    this.$getPageHeight();
    // 数值千位转换
    this.options2.series[0].label.formatter=function(p) {
      return _this.formatNum(p.value);
    }
    // 数据模拟求平均值
    this.averageAdd=this.arrAverage(this.options1.series[0].data)
    this.averageTotal=this.arrAverage(JSON.parse(options2Data))
  },
  methods:{
    // 求平均值
    arrAverage(nums){
      return (nums.reduce((a, b) => a + b) / nums.length).toFixed(1);
    },
    // 数值千位转换
    formatNum(strNum) {
        if(strNum.length <= 3) {
            return strNum;
        }
        if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
            return strNum;
        }
        var a = RegExp.$1,
            b = RegExp.$2,
            c = RegExp.$3;
        var re = new RegExp();
        re.compile("(\\d)(\\d{3})(,|$)");
        while(re.test(b)) {
            b = b.replace(re, "$1,$2$3");
        }
        return a + "" + b + "" + c;
    }
  }
};
</script>

<style lang="scss" scoped>
.pub_title {
  color: #333;
  font-size: 16px;
  height: 22px;
  margin-top: 15px;
  .side {
    width: 4px;
    height: 16px;
    line-height: 16px;

    background: #1d96ff;
    border-radius: 2px;
    margin-right: 16px;
  }
}
.income_top {
  margin-top: 16px;
  .income_top_left,
  .income_top_right {
    width: calc(50% - 8px);
    height: 294px;
    border-radius: 4px;
    flex: (0, 0, calc(50% - 8px));
    background-color: #fff;
  }
}

.income_bottom,
.income_mid {
  background-color: #fff;
  border-radius: 4px;
}
</style>