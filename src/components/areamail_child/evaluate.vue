<template>
    <div class="sjh">
        <div class="mh100vw bgfff fsize14 mt16 b-rad4 flex-top">
            <div class="wid175 br-f4 cursor">
                <ul class="fsize14">
                    <li class="flex h50 pl20">
                        <img class="wid16 h16 mr8" src="@/assets/images/sjh-icon2.png" alt="" srcset="">
                        <p class="col333 b">年度考核首页</p>
                    </li>
                    <li v-for="(item,index) in tabList" :key="index">
                        <div class="flex h50 pl23" @click="openLevel(index)">
                            <img class="wid16 h16 mr8" :src="item.icon" alt="" srcset="">
                            <p class="col333 b wid110">{{item.name}}（{{item.count}}）</p>
                            <i class="col999" :class="item.open?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                        </div>
                        <!-- level2 -->
                        <ul v-show="item.open">
                            <li v-for="(item2,index2) in item.list" :key="index2">
                                <div class="flex h50 pl43" @click="openLevel(index,index2)">
                                    <p class="col333 wid110">{{item2.name}}（{{item2.count}}）</p>
                                    <i class="col999" :class="item2.open?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                                </div>
                                <!-- level3 -->
                                <ul class="" v-show="item2.open">
                                    <li class="col666 flex h50 pl48" :class="selected[0]==index&&selected[1]==index2&&selected[2]==index3?'bg1492FF col1492FF br4-1492FF':null" v-for="(item3,index3) in item2.list" :key="index3" @click="changeSel([index,index2,index3])">{{item3.name}}（{{item3.count}}）</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="flex1 pt16 pl20 pr20 pb20">
                <ul class="flex fsize14 col666 mb16">
                    <li>特色小镇 / 年度考核 / 小镇列表</li>
                </ul>

                <div class="flex-top fsize14 mb16">
                    <p class="col666 lh28"><span class="inblock wid60 justify">产业类别</span>：</p>
                    <ul class="flex flex1 col333 flex flex-wrap">
                        <li class="pl10 pr10 lh28 b-rad2 cursor" :class="index==type1?'bg-1492FF colfff':null" v-for="(item,index) in typeList1" :key="index" @click="changeType('type1',index)">{{item.name}}</li>
                    </ul>
                </div>
                <div class="flex-top fsize14 mb16">
                    <p class="col666 lh28"><span class="inblock wid60 justify">小镇类型</span>：</p>
                    <ul class="flex flex1 col333 flex flex-wrap">
                        <li class="pl10 pr10 lh28 b-rad2 cursor" :class="index==type2?'bg-1492FF colfff':null" v-for="(item,index) in typeList2" :key="index" @click="changeType('type2',index)">{{item.name}}</li>
                    </ul>
                </div>
                <!-- <div class="flex-top fsize14 mb16">
                    <p class="col666 lh28"><span class="inblock wid60 justify">小镇批次</span>：</p>
                    <ul class="flex flex1 col333 flex flex-wrap">
                        <li class="pl10 pr10 lh28 b-rad2 cursor" :class="index==type3?'bg-1492FF colfff':null" v-for="(item,index) in typeList3" :key="index" @click="changeType('type3',index)">{{item.name}}</li>
                    </ul>
                </div> -->

                <div class="flex-sp pb10 bb-f4">
                    <p class="fsize12 col666">共有<span class="col1492FF">5</span>个符合筛选条件的小镇</p>
                    <el-input
                        class="wid156 h32"
                        size="small"
                        placeholder="请输入搜索内容"
                        prefix-icon="el-icon-search"
                        v-model="search">
                    </el-input>
                </div>

                <ul class="flex h43 bgfa col303133 b fsize14 bb-shadow">
                    <li class="wid136 ellipsis1">小镇名称</li>
                    <li class="wid145 ellipsis1">产业类别</li>
                    <li class="wid118 ellipsis1">小镇类型</li>
                    <li class="wid110 ellipsis1">当前处理人</li>
                    <li class="center">操作</li>
                </ul>
                <ul class="flex h43 col303133 fsize14 bb-shadow" v-for="(item,index) in list" :key="index">
                    <li class="wid136 col1492FF ellipsis1">{{item.city}}</li>
                    <li class="wid145 ellipsis1">{{item.industry}}</li>
                    <li class="wid118 ellipsis1">{{item.type}}</li>
                    <li class="wid110 ellipsis1">{{item.handler}}</li>
                    <li class="center col1492FF cursor">查看</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabList:[
                {
                    name:'命名创建类',
                    count:5,
                    icon:require('@/assets/images/sjh-icon3.png'),
                    list:[
                        {
                            name:'未上报',
                            count:0,
                            list:[],
                        },
                        {
                            name:'已上报',
                            count:5,
                            list:[
                                {name:'待县审核',count:0},
                                {name:'待市审核',count:0},
                                {name:'待省检查',count:5},
                                {name:'待第三方检查',count:0},
                            ],
                        }
                    ]
                },
                {
                    name:'培育类',
                    count:1,
                    icon:require('@/assets/images/sjh-icon1.png'),
                    list:[]
                }
            ],
            selected:['','',''],

            typeList1:[
                {name:'全部'},
                {name:'高端装备制造'},
                {name:'数字经济'},
                {name:'环保'},
                {name:'健康'},
                {name:'时尚'},
                {name:'旅游'},
                {name:'金融'},
                {name:'历史经典'},
            ],
            type1:0,
            typeList2:[
                {name:'全部'},
                {name:'命名'},
                {name:'创建'},
                {name:'培育类'},
            ],
            type2:0,
            // typeList3:[
            //     {name:'全部'},
            //     {name:'第一批'},
            //     {name:'第二批'},
            //     {name:'第三批'},
            //     {name:'第四批'},
            //     {name:'第五批'},
            //     {name:'第六批'},
            // ],
            // type3:0,

            search:'',

            list:[
                {city:'西湖蚂蚁小镇',industry:'金融小镇',type:'创建',batch:'第四批',handler:'-'},
                {city:'浙大资金科创小镇',industry:'数字经济小镇',type:'创建',batch:'第五批',handler:'-'},
                {city:'西湖云栖小镇',industry:'数字经济小镇',type:'命名',batch:'第二批',handler:'-'},
                {city:'西湖龙坞茶镇',industry:'历史经典小镇',type:'命名',batch:'第三批',handler:'-'},
                {city:'西湖艺创小镇',industry:'时尚小镇',type:'命名',batch:'第三批',handler:'-'},
            ]
        }
    },
    mounted(){
        this.$getPageHeight();
    },
    methods:{
        openLevel(){
            let list = [...this.tabList],arg = arguments,len = arg.length;
            //console.log(list,arg,len,'------')
            if(len == 1){
                list[arg[0]].open = !list[arg[0]].open;
            }else if(len == 2){
                list[arg[0]].list[arg[1]].open = !list[arg[0]].list[arg[1]].open;
            }
            this.tabList = list;
        },
        changeSel(arg){
            this.selected = arg;
        },
        changeType(type,index){
            this[type] = index;
        }
    }
}
</script>