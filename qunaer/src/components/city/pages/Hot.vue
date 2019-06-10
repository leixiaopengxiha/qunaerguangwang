<template>
    <div class="hot">
       <div class="hot-title">热门城市</div>
       <ul class="hot-list">
           <li class="hot-item" 
           v-for="item in hotCities" 
           :key="item.id"
           @click=" changeCity(item.name)"
           >
               {{item.name}}
           </li>
       </ul>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['hotCities'],
    methods: {
        ...mapMutations(['changeCitys']),
        changeCity(item){
            // this.$store.dispatch('changeCity',item)
            this.changeCitys(item)
             this.$router.push('/')
        }
    },
}
</script>
<style scoped>
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
    position: relative;
    height: .9rem;
    line-height: .9rem;
    border-bottom: .02rem solid #ddd;

}
</style>


