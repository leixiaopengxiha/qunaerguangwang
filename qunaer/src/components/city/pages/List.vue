<template>
<div>
     <div ref="container" class="container">
         <div>
            <!-- hot -->
            <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotCities" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
            </div>
            <!-- sort -->
            <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-item" v-for="(val,key,index) in cities" :key="index" @click="changSort(key)">
                    {{key}}
                </li>
            </ul>
            </div>
            <!-- list -->
            <div class="list">
                <div 
                    v-for="(val,key,index) in cities" 
                    :key="index"
                    :ref="key"
                >
                    <div class="list-title">{{key}}</div>
                    <ul class="list-mag">
                        <li class="list-item" v-for="item in val" :key="item.id">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:['cities','hotCities'],
    data() {
        return {
            scroll:''
        }
    },
    mounted() {
        let doms = this.$refs.container
            // this.scroll = new BScroll(this.$refs.container)   
            // console.log(this.scroll)  
           this.scroll = new BScroll(doms,{
    scrollY: true,
    click: true
})     
        
    },
    methods: {
        changSort(SortName){
            console.log(this.$refs[SortName][0])
            this.scroll.scrollToElement(this.$refs[SortName][0])
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.container{
    position: absolute;
    top:44px;
    left:0;
    right:0;
    bottom 0;
    overflow hidden;
    // height 90%;
}
// hot
.hot-title{
    font-size: .25rem;
    color: #212121;
    padding: .2rem .3rem;
}
.hot-list{
    background: #fff;
    font-size: .28rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    color: #212121;
}
.hot-list:before{
    content: "";
    height: 100%;
    width: calc(100%/3);
    left: calc(100%/3);
    position: absolute;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.hot-item{
    width: calc(100%/3);
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    border-bottom: .02rem solid #ddd;
}
// sort
.sort-title{
    font-size: .25rem;
    color: #212121;
    padding: .2rem .3rem;
}
.sort-list{
    background: #fff;
    font-size: .28rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    color: #212121;
}
.sort-item{
    width: calc(100%/6);
    text-align: center;
    height: .9rem;
    line-height: .9rem;
}
// list
.list-title{
    font-size: .25rem;
    color: #212121;
    padding: .2rem .3rem;
}
.list-mag{
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
}
.list-mag:before{
    position: absolute;
    content:"";
    left: calc(100%/4);
    width: calc(100%/4);
    height: 100%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
    box-sizing: border-box;
}
.list-mag:after{
    position: absolute;
    content:"";
    left: calc(100%/4*3);
    width: calc(100%/4);
    height: 100%;
    border-left: .02rem solid #ddd;
    box-sizing: border-box;
}
.list-item{
     width: calc(100%/4);
     font-size: .28rem;
     text-align: center;
     line-height: .9rem;
     border-bottom: .02rem solid #ddd;
     textOverflow()
     padding .01rem;
     box-sizing:border-box;
     
     
}

</style>


