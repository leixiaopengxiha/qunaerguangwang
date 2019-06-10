<template>
    <div class="header">
       <div class="header-left" @click="toHome">
           <span class="iconfont">&#xe624;</span>
       </div>
       <div class="header-tille">
        城市选择 
       </div>
    </div>
</template>
<script>
export default {
    methods: {
        toHome(){
            this.$router.push('/')
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/var.styl'
    .header{
        width: 100%;
        line-height: .88rem;
        background: $bgColor;
        color: $textColor ;
        font-size: .32rem;
        position relative;
       
    }
    .header-left{
            width: .4rem;
            padding:0 0.2rem;
            text-align: center;
            font-weight: bold;
             position absolute;
        }
    .header-tille{
        text-align center;
    }
</style>