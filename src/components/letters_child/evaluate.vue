<template>
    <div class="sjh">
        <div class="mh100vw bgfff fsize14 mt16 pl20 pr20 pt20 pb20 b-rad4">
            <table class="eval-table wid100p center col333" border="1">
                <tr class="h56 b bgfa">
                    <td class="wid105 rel" ref="ftd">
                        <i class="line" :style="{width:ftd.w+'px',transform:`rotate(${ftd.rotate}deg)`}"></i>
                        <span class="abs r0 t0 pr5 lh28">考核得分</span><span class="abs l0 b0 pl5 lh28">评价对象</span>
                    </td>
                    <td class="">项目推进</td>
                    <td class="">新开工<br/>项目推进</td>
                    <td class="">前期项目<br/>工作进度</td>
                    <td class="">进度报送</td>
                    <td class="">组织协调</td>
                    <td class="">安全生产</td>
                    <td class="">工程质量</td>
                    <td class="">机构制度</td>
                </tr>
                <tr class="h56" :class="[{bgfa:index%2==1}]" v-for="(item,index) in list" :key="index">
                    <td class="wid105">{{item.name}}</td>
                    <td v-for="(item2,index2) in item.list" :key="index2">{{item2}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ftd:{
                rotate:0,
                w:0,
            },
            list:[
                {name:'北山街道',list:[40,2,2,2,6,1,1,1]},
                {name:'西溪街道',list:[23,3,10,10,8,2,2,2]},
                {name:'翠苑街道',list:[32,4,5,5,8,2,2,2]},
                {name:'古荡街道',list:[23,4,8,8,8,2,2,2]},
                {name:'留下街道',list:[32,1,8,8,6,1,1,1]},
                {name:'转塘街道',list:[23,4,3,3,6,2,2,2]},
                {name:'蒋村街道',list:[16,6,5,5,4,2,2,2]},
                {name:'灵隐街道',list:[26,4,7,7,4,1,1,1]},
                {name:'文新街道',list:[34,8,3,3,8,3,3,3]},
                {name:'三墩镇',list:[33,9,10,10,2,1,1,1]},
                {name:'双浦镇',list:[31,6,2,2,6,2,2,2]},
                {name:'艺创小镇',list:[28,3,8,8,6,2,2,2]},
                {name:'云栖小镇',list:[27,6,9,9,9,3,3,3]},
                {name:'紫金港科技城',list:[28,3,10,10,8,3,3,3]},
                {name:'西溪谷',list:[24,8,10,10,8,3,3,3]},
            ]
        }
    },
    mounted(){
        this.$getPageHeight();
        this.initLine();
        window.addEventListener('resize',this.initLine);
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.initLine);
    },
    methods:{
        initLine(){
            let dom = this.$refs['ftd'],w = dom.offsetWidth,h = dom.offsetHeight;
            //console.log(w,h);
            let len = Math.sqrt(w*w+h*h),rotate = this.getSinDeg(h/w);
            //console.log(len,rotate);
            this.ftd = {w:len,rotate}
        },
        getSinDeg(sin) {
            let result = Math.asin(sin) / (Math.PI / 180);
            // console.log(result)
            // result = Math.round(result);
            return result-5;
        }
    }
}
</script>