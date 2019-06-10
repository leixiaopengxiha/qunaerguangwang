<template>
<div class='banner'>
    <div @click="imgShow">
        <div class="banner-img" >
            <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="">
        </div>
        <div class='banner-title'>
            上海迪士尼乐园
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            imgSwiper:false,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
            },
        }
    },
    methods: {
        imgShow(){
            this.$router.push('/xinag')
        },
       
    },
    
}
</script>
<style scoped>
.banner{
    position: relative;
}
.banner-img{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    /* background: red; */
}
.banner-img img{
    width: 100%;
}
.banner-title{
    position: absolute;
    bottom: .3rem;
    left: .3rem;
    font-size: .36rem;
    color: #fff; 
}


</style>
