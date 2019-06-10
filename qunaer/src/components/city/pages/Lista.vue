<template>
  <div>
    <!-- list -->
    <div class="list">
      <div class="sortkey" v-show="false">{{SortKey}}</div>
      <div v-for="(val,key,index) in cities" :key="index" :ref="key" >
        <div class="list-title">{{key}}</div>
        <ul class="list-mag">
          <li class="list-item" 
            v-for="item in val" 
            :key="item.id"  
            @click=" changeCity(item.name)"
          >
          {{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props: ["cities",'scroll'],
  computed: {
    ...mapState(['SortKey'])
  },
  updated() {
    this.scroll.scrollToElement(this.$refs[this.SortKey][0])
  },
   methods: {
        ...mapMutations(['changeCitys']),
        changeCity(item){
            this.changeCitys(item)
             this.$router.push('/')
        }
    },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/common.styl';
// list
.list-title {
  font-size: 0.25rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}
.list-mag {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}

.list-mag:before {
  position: absolute;
  content: '';
  left: calc((100% / 4));
  width: calc((100% / 4));
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
  box-sizing: border-box;
}

.list-mag:after {
  position: absolute;
  content: '';
  left: calc(100% / 4 * 3);
  width: 0;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  box-sizing: border-box;
}

.list-item {
  width: calc((100% / 4));
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.9rem;
  border-bottom: 0.02rem solid #ddd;
  textOverflow();
  padding: 0.01rem;
  position relative
  box-sizing: border-box;
}
</style>


