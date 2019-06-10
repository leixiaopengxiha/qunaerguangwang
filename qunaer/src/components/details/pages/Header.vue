<template>
  <div class="header" >
    <div class="header-return" v-show="showHeader">
      <span class="return"></span>
      <span class="iconfont return-item"  @click="toHome">&#xe624;</span>
    </div>
    <div class="header-top" v-show="!showHeader" :style='styleOpacity'>
     
        <div class="header-left">
          <span class="iconfont" @click="toHome">&#xe624;</span>
        </div>
        干哈还是 
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            showHeader:true,
            styleOpacity:{
                opacity:0,
            }
        }
    },
    methods: {
        toHome(){
            this.$router.push('/')
        },
        scrolls(){
            let top =document.documentElement.scrollTop
            // console.log(top)
           if(top > 45){
              let opacity = top/130;
              opacity = opacity>1?1:opacity
              this.styleOpacity = {
                  opacity
              }
              this.showHeader=false
           }else{
              this.showHeader=true
           }
        }
    },
    activated() {
        // document.documentElement.scrollTop=0
        // window.addEventListener('scroll',this.scrolls)
    },
     deactivated() {
        // console.log('asdd')
        // document.documentElement.scrollTop=100
        //  window.removeEventListener('scroll', this.scrolls)
    },
};
</script>
<style  lang="stylus" scoped>
@import '~@/assets/css/var.styl';

.header-return {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
  /* background: #000; */
}

.return {
  width: 0.72rem;
  height: 0.72rem;
  background: #000;
  opacity: 0.5;
  border-radius: 0.36rem;
  display: block;
}

.return-item {
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  width: 0.72rem;
  height: 0.72rem;
  line-height: 0.72rem;
  text-align: center;
  font-size: 0.32rem;
  font-weight: bold;
}

.header-top{
  position:fixed;
  text-align: center;
  top: 0;
  width: 100%;
  line-height: 0.88rem;
  background: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  
}

.header-left {
  position absolute;
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
  z-index 10;
}

</style>
