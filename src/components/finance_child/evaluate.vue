<template>
    <div class="sjh">
        <div class="mh100vw bgfff fsize14 mt16 pl20 pr20 pt20 pb20 b-rad4">
            <table class="eval-table wid100p center col333" border="1">
                <tr class="h28 b bgfa">
                    <td class="wid80" rowspan="2">序号</td>
                    <td class="wid180" colspan="2">总量排名</td>
                    <td class="wid180" colspan="2">增幅排名</td>
                    <td class="wid180" colspan="2">完成进度排名</td>
                    <td class="wid118" rowspan="2">附：全年预算数</td>
                </tr>
                <tr class="h28 b bgfa">
                    <td class="">单位</td>
                    <td class="">金额</td>
                    <td class="">单位</td>
                    <td class="">增幅%</td>
                    <td class="">单位</td>
                    <td class="">进度%</td>
                </tr>
                <tr class="h56" :class="[{bgfa:index%2==1}]" v-for="(item,index) in list" :key="index">
                     <td class="wid80">{{index+1}}</td>
                    <td class="">{{item.a_d}}</td>
                    <td class="">{{item.a_p}}</td>
                    <td class="">{{item.z_d}}</td>
                    <td class="">{{item.z_z}}</td>
                    <td class="">{{item.w_d}}</td>
                    <td class="">{{item.w_z}}</td>
                    <td class="">{{item.a_y}}</td>
                   
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {a_d:'古荡',a_p:'154657',z_d:'古荡',z_z:'212.90',w_d:'三墩',w_z:'48.18',a_y:'100000'},
                {a_d:'留下',a_p:'61340',z_d:'留下',z_z:'89.12',w_d:'古荡',w_z:'45.16',a_y:'342500'},
                {a_d:'三墩',a_p:'48180',z_d:'古荡',z_z:'68.01',w_d:'留下',w_z:'30.22',a_y:'203000'},
                {a_d:'翠苑',a_p:'34883',z_d:'云栖小镇',z_z:'66.28',w_d:'翠苑',w_z:'27.91',a_y:'125000'},
                {a_d:'转塘',a_p:'33687',z_d:'双浦',z_z:'46.69',w_d:'文新',w_z:'26.10',a_y:'63000'},
                {a_d:'西溪',a_p:'18631',z_d:'转塘',z_z:'43.09',w_d:'双浦',w_z:'23.24',a_y:'45000'},
                {a_d:'灵隐',a_p:'18311',z_d:'翠苑',z_z:'3.96',w_d:'西溪',w_z:'21.54',a_y:'86500'},
                {a_d:'紫金港科技城',a_p:'18300',z_d:'文新',z_z:'1.22',w_d:'灵隐',w_z:'21.17',a_y:'86500'},
                {a_d:'文新',a_p:'16442',z_d:'紫金港科技城',z_z:'-5.94',w_d:'北山',w_z:'20.18',a_y:'52000'},
                {a_d:'蒋村',a_p:'16333',z_d:'西溪',z_z:'-16.49',w_d:'蒋村',w_z:'18.67',a_y:'87500'},
                {a_d:'北山',a_p:'10493',z_d:'灵隐',z_z:'-16.62',w_d:'紫金港科技城',w_z:'18.30',a_y:'100000'},
                {a_d:'双浦',a_p:'10458',z_d:'北山',z_z:'-19.15',w_d:'云栖小镇',w_z:'16.76',a_y:'50500'},
                {a_d:'云栖小镇',a_p:'8465 ',z_d:'蒋村',z_z:'-24.51',w_d:'转塘',w_z:'16.59',a_y:'203000'},
            ]
        }
    },
    mounted(){
        this.$getPageHeight();
    },
    methods:{
        
    }
}
</script>