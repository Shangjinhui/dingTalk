<template>
  <div class="sjh">
    <div class="">
      <div class="flex-sp mt16">
        <div class="bgfff b-rad4 wid375 h294">
          <div class="pt16">
            <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
              <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
              >技术交易总额（亿元）
            </p>
          </div>
          <div class="wid100p h250 mt8 pb20">
            <div class="flex pl25">
              <i class="legend_icon1"></i>
              <p class="fsize14 col666">技术交易总额亿元</p>
            </div>
            <my-chart :option="option2"></my-chart>
          </div>
        </div>
        <div class="bgfff b-rad4 wid386 h294">
          <div class="pt16">
            <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
              <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
              >揭榜挂帅张榜数量
            </p>
          </div>
          <div class="wid100p h180 mt30">
            <pie-echart :option="option"></pie-echart>
          </div>
        </div>
      </div>

      <div class="bgfff b-rad4 h458 mt16">
        <div class="pt16">
          <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
            <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
            >高校经济项目引进
          </p>
        </div>
        <div class="wid100p h420 mt8 pb20">
          <div class="flex pl25">
            <i class="legend_block bg-1492FF mr8"></i>
            <p class="fsize14 col666">
              任务数<span class="col1492FF">100</span>（剔重）
            </p>
          </div>
          <my-chart :option="option3"></my-chart>
        </div>
      </div>

      <div class="bgfff b-rad4 h372 mt16">
        <div class="pt16">
          <p class="fsize16 col333 bl4-1492FF b-rad2 pl20 rel">
            <span class="wid4 h16 bg-1492FF b-rad2 abs l0 t-center"></span
            >产学研合作项目
          </p>
        </div>
        <div class="wid100p h310 mt8 pb20">
          <div class="flex pl25">
            <i class="legend_block bg-E5981D mr8"></i>
            <p class="fsize14 col666">
              任务数<span class="colE5981D">100</span>（剔重）
            </p>
          </div>
          <my-chart :option="option4"></my-chart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pieEchart from "@/components/sjhPieEchart";
import myChart from "@/components/sjhChart";
let echarts = require("echarts");
export default {
  components: {
    pieEchart,
    myChart,
  },
  data() {
    return {
      //legend先这样用echarts生成的，不行的话把colorList传过去处理自己写legend
      colorList: [
        { c1: "#1492FF", c2: "#2DC4FF" },
        { c1: "#29BA91", c2: "#53DEC4" },
        { c1: "#EC3F59", c2: "#F77392" },
        { c1: "#E5981D", c2: "#F8DC77" },
        { c1: "#CC2CB7", c2: "#FF5AE6" },
        { c1: "#1FA9B7", c2: "#62FAFF" },
        { c1: "#3F60E5", c2: "#5A93F4" },
        { c1: "#09C5B2", c2: "#22E4B0" },
        { c1: "#EC5F3F", c2: "#F75B5B" },
        { c1: "#F1C218", c2: "#DFD400" },
        { c1: "#CC2C81", c2: "#E84AB9" },
        { c1: "#477080", c2: "#77AFB7" },
        { c1: "#09C554", c2: "#22E44F" },
        { c1: "#DB6B46", c2: "#DA782F" },
        { c1: "#737F89", c2: "#666D8A" },
      ],
      option: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "50%",
          top: "center",
          textStyle: {
            color: "#8c8c8c",
            fontSize: 16,
          },
          icon: "circle",
          itemHeight: 9,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "90%",
            label: {
              
                position: "inner",
                show: true,
                formatter: "{c}",
                color: "#ffffff",
              
            },
            center: ["25%", "50%"],
            data: [
              { value: 1, name: "北山街道" },
              { value: 2, name: "西溪街道" },
              { value: 2, name: "翠苑街道" },
              { value: 2, name: "古荡街道" },
              { value: 2, name: "留下街道" },
              { value: 1, name: "转塘街道" },
              { value: 2, name: "蒋村街道" },
              { value: 2, name: "灵隐街道" },
              { value: 1, name: "文新街道" },
              { value: 3, name: "三墩镇" },
              { value: 1, name: "双浦镇" },
              { value: 2, name: "艺创小镇" },
              { value: 3, name: "云栖小镇" },
              { value: 3, name: "紫金港科技城" },
              { value: 3, name: "西溪谷管委会" },
            ],
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            itemStyle: {
            
              color: function (params) {
                var colorList = [
                  { c1: "#1492FF", c2: "#2DC4FF" },
                  { c1: "#29BA91", c2: "#53DEC4" },
                  { c1: "#EC3F59", c2: "#F77392" },
                  { c1: "#E5981D", c2: "#F8DC77" },
                  { c1: "#CC2CB7", c2: "#FF5AE6" },
                  { c1: "#1FA9B7", c2: "#62FAFF" },
                  { c1: "#3F60E5", c2: "#5A93F4" },
                  { c1: "#09C5B2", c2: "#22E4B0" },
                  { c1: "#EC5F3F", c2: "#F75B5B" },
                  { c1: "#F1C218", c2: "#DFD400" },
                  { c1: "#CC2C81", c2: "#E84AB9" },
                  { c1: "#477080", c2: "#77AFB7" },
                  { c1: "#09C554", c2: "#22E44F" },
                  { c1: "#DB6B46", c2: "#DA782F" },
                  { c1: "#737F89", c2: "#666D8A" },
                ];
                return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    //颜色渐变函数 4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    offset: 0,
                    color: colorList[params.dataIndex].c1,
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex].c2,
                  },
                ]);
              },
            },
          },
        ],
      },

      option2: {
        xAxis: {
          type: "category",
          data: ["2020年", "2021年1-3月", "2021年1-9月", "2021年1-12月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "",
            type: "line",
            itemStyle: {
              color: "#1492FF",
            },
            areaStyle: {
              
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(20, 146, 255, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(20, 146, 255, .1)",
                  },
                ]),
              
            },
            data: [130, 0, 0, 0],
          },
        ],
      },
      option3: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          inverse:true,              //坐标反向
          axisTick:{ show:false },
          data: [
            "北山街道",
            "西溪街道",
            "翠苑街道",
            "古荡街道",
            "留下街道",
            "转塘街道",
            "蒋村街道",
            "灵隐街道",
            "文新街道",
            "三墩镇",
            "双浦镇",
            "艺创小镇",
            "云栖小镇",
            "紫金港科技城",
            "西溪谷管委会",
            "西湖投资集团",
            "西湖城投集团",
            "之江经营管理集团",
          ],
        },
        series: [
          //   {
          //     name: "Video Ad",
          //     type: "bar",
          //     stack: "total",
          //     label: {
          //       show: true,
          //     },
          //     emphasis: {
          //       focus: "series",
          //     },
          //     data: [150, 212, 201, 154, 190, 330, 410],
          //   },
          {
            name: "",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              // normal: {
              //   show: true,
              //   position: "right",
              // },
            },
            emphasis: {
              focus: "series",
            },
            color: "#1492FF",
            data: [2, 10, 5, 8, 8, 3, 5, 7, 3, 10, 2, 8, 9, 10, 10, 5, 0, 1],
          },
        ],
      },
      option4: {
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
        xAxis: {
          type: "category",
          axisLabel: {
            interval: 0,
            rotate: 40,
          },
          data: [
            "北山街道",
            "西溪街道",
            "翠苑街道",
            "古荡街道",
            "留下街道",
            "转塘街道",
            "蒋村街道",
            "灵隐街道",
            "文新街道",
            "三墩镇",
            "双浦镇",
            "艺创小镇",
            "云栖小镇",
            "紫金港科技城",
            "西溪谷管委会",
            "西湖投资集团",
            "西湖城投集团",
            "之江经营管理集团",
          ],
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 10,
          //splitNumber:4,
          interval: 2.5, //每份的值
        },
        series: [
          {
            data: [6,9,8,8,8,6,6,4,4,8,2,6,9,8,8,2,0,1,],
            type: "bar",
            itemStyle: {
              // color: new echarts.graphic.LinearGradient(
              //     0, 0, 0, 1,
              //     [
              //         {offset: 0, color: '#2DC4FF'},
              //         // {offset: 0.5, color: '#188df0'},
              //         {offset: 1, color: '#1492FF'}
              //     ]
              // )
              color: "#E5981D",
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$getPageHeight();
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.legend_icon1 {
  width: 24px;
  height: 1px;
  background: #1d96ff;
  margin-right: 10px;
  position: relative;
  &:after {
    content: "";
    width: 5px;
    height: 5px;
    background: #1492ff;
    border: 1px solid #ffffff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.legend_block {
  width: 8px;
  height: 8px;
}
</style>