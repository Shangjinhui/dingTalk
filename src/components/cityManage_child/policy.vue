<template>
    <div class="sjh">
        <div class="mh100vw bgfff fsize14 mt16 pl20 pr20 b-rad4">
            <div class="flex-sp-btm pt12 col666">
                <div class="flex">
                    <p>层级：</p>
                    <ul class="flex">
                        <li class="mwid74 center lh28 b-rad2 mr8 cursor" :class="selected==index?'b-1492FF col1492FF':'b-15'" v-for="(item,index) in level" :key="index" @click="changeLevel(index)">{{item.name}}</li>
                    </ul>
                </div>
                <el-input
                    class="wid156 h32"
                    size="small"
                    placeholder="请输入搜索内容"
                    prefix-icon="el-icon-search"
                    v-model="search">
                </el-input>
            </div>

            <div class="mt22 pb40">
                <!-- <div class="bgfa h56 col303133 b flex">
                    <div class="flex1 pl34 pr34">政策</div>
                    <div class="wid74 center mr50">任务状态</div>
                    <div class="wid110">操作</div>
                </div> -->
                <ul>
                    <li class="pt18 pb18 mh76 bb-shadow flex" v-for="(item,index) in list" :key="index">
                        <p class="flex1 col303133 pl34 pr34 lh20 ellipsis2 rel b" ><i class="wid6 h6 bg333 opacity4 abs l16 t18 rotate45"></i>{{item.content}}</p>
                        <div class="wid74 center lh28 bgD40000 b-D9201F b-rad2 colD9201F mr50" v-if="item.selected==1">国家政策</div>
                        <div class="wid74 center lh28 bgFF6B00 b-FF6B00 b-rad2 colFF6B00 mr50" v-else-if="item.selected==2">省级政策</div>
                        <div class="wid74 center lh28 bg41C76C b-41C76C b-rad2 col15BE50 mr50" v-else-if="item.selected==3">市级政策</div>
                        <div class="wid74 center lh28 bg1492FF b-1492FF b-rad2 col1492FF mr50" v-else>区级政策</div>
                        <div class="wid110 col1492FF flex">
                            <p class="mr18 cursor">看解读</p>
                            <p class="cursor">看政策</p>
                        </div>
                    </li>
                    
                     
                </ul>
                <el-pagination
                    class="mt22 right"
                    background
                    layout="prev, pager, next"
                    :page-size="limit"
                    :total="total"
                    @current-change="changePage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            level:[{name:'全部'},{name:'国家级'},{name:'省级'},{name:'市级'},{name:'区级'}],
            selected:0,
            search:'',
            page:1,
            limit:9,
            total:1000,
            list:[
                {
                    content:'杭州市“迎亚运”市容市貌整治工作实施方案的通知',
                    selected:3
                },
                  {
                    content:'西湖区“美丽杭州”创建暨“‘迎亚运’ 城乡环境大整治、城乡面貌大提升”长效管理工作方案（2020-2022 年）',
                    selected:4
                },
                  {
                    content:'关于开展“裸土覆绿”专项整治行动的通知',
                    selected:3
                },
                  {
                    content:'关于进一步做好“裸土覆绿”工作的通知',
                    selected:4
                },
                 
            ]
        }
    },
    mounted(){
        this.$getPageHeight();
    },
    methods:{
        changeLevel(ind){
            // 暂时隐藏
            // this.selected = ind;
            // this.list.map(item=>{
            //     item.selected=ind
            // })
        },
        changePage(page){
            this.page = page;
        }
    }
}
</script>