<template>
  <div>
    <div class="vacation-title">周末去哪儿</div>
    <ul>
      <li class="vacation-item" v-for="item in vacationList" :key="item.id">
        <div class="vacation-img">
          <img
            :src="item.imgUrl"
            alt
          >
        </div>
        <div class="vacation-msg">
          <p v-html="item.title"></p>
          <p v-html="item.msg"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['vacationList'],
  data() {
    return {
     
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl'
.vacation-title {
  font-size: 0.32rem;
  padding: 0.24rem;
}
.vacation-item{
  margin-bottom: .1rem;
  background #fff;
  font-size .28rem;
}
.vacation-img{
  width 100%;
  height 0;
  padding-bottom 37.4375%;
  overflow hidden;
  
}
.vacation-img img{
  width 100%;
}
.vacation-msg{
  padding .2rem 0 .2rem .2rem;
}
.vacation-msg p{
  margin-top: .2rem;
   textOverflow()
}
.vacation-msg p+p{
  color: #616161;
  font-size .24rem;
}
</style>
