<template>
    <div class="xianbox">
        <!-- 头部 -->
        <!-- 详情列表 -->
        <div class="ulcon">
            <ul>
                <li v-for="(item,index) in xiangList" 
                 :key="item.id"
                 @click="showSwiper(index)">
                    <img :src="item.imgUrl" alt="">
                </li>
            </ul>
        </div>
        <!-- 轮播 -->
        <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
            <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide v-for ='item in xiangList' :key="item.id" >
                        <img :src="item.imgUrl">
                    </swiper-slide>
                    <!-- Optional controls -->
                </swiper>
            <div class="swiper-pagination"  slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'xinag',
    data() {
        return {
            imgSwiper:false,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
            },
            xiangList:[
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_350x240_76c3e0af.jpg'
                },
                {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/ff/ff0ba07998df4d1a3.water.jpg_350x240_239b2a47.jpg'
                },
                 {
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/84/8463ffd938924b69a3.water.jpg_350x240_027991f0.jpg'
                },
                {
                    id: '05',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/a8/a86cbcef8dfd35c6a3.water.jpg_350x240_cc9d4693.jpg'
                },
                {
                    id: '06',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/f3/f372e80c97620403a3.water.jpg_350x240_93db9393.jpg'
                },
                {
                    id: '07',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/18/188075bba8b3a675a3.water.jpg_350x240_9bdfa4ed.jpg'
                },
                {
                    id: '08',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/8e/8ee4791d5154fd46a3.water.jpg_350x240_8dbd0437.jpg'
                },
                {
                    id: '09',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e8/e8462b1d196ea6f4a3.water.jpg_350x240_e710b4a5.jpg'
                },
                {
                    id: '10',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/9a/9aaf0b48afeb205da3.water.jpg_350x240_b57674a7.jpg'
                },
                {
                    id: '11',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e8/e8462b1d196ea6f4a3.water.jpg_350x240_e710b4a5.jpg'
                },
                {
                    id: '12',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/9a/9aaf0b48afeb205da3.water.jpg_350x240_b57674a7.jpg'
                }
            ]
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
        showSwiper(idx){
             this.imgSwiper=true
             this.swiper.slideTo(idx,0)
        },
        hideSwiper(){
             this.imgSwiper=false
        }
    },
}
</script>
<style scoped>
.xianbox{
    position: relative;
}
.ulcon{
    width: 100%;
}
.ulcon ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.ulcon ul li{
     width: calc(100%/2);
     padding: .15rem;
     box-sizing: border-box;
}
.ulcon ul li img{
    width: 100%;
    display: block;
}
.img-swiper{
    background: #000;
   position: fixed;
    top: 0;
    bottom: 0;  
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-swiper img{
    width: 100%;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    color: #fff;
    font-size: .32rem;
    bottom: .6rem;
}
</style>
