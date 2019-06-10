<template lang="">
    <div class="icons">
         <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(items,index) in page" :key='index'>
                <div class="icons-item" v-for="(item,index) in items" :key="item.id">
                    <img :src='item.imgUrl'>
                    <p v-html="item.title"></p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> 
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data(){
     return{
           swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
            },
     }
    },
    computed:{
        page(){
            let pages = []
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8)
                if(!pages[idx]) pages[idx] = []
                pages[idx].push(item)
            })
            return pages
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.icons{
    width: 100%;
    overflow: hidden;
    padding-bottom .1rem;
     background-color:#fff; 
}
.icons-item{
    width 25%;
    padding-bottom: 25%;
    height:0;
    float:left;
    // background #ccc;
}
.icons>>>.swiper-pagination-bullets {
    bottom: -2px;
}
.swiper-container{
    padding-bottom: 0.4rem
}
.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    padding-top: .2rem;
    margin: 0 auto;
}
.icons-item p{
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
    textOverflow()
}
</style>
