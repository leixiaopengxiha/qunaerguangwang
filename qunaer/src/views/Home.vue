<template>
  <div class="home chat-content" @scroll="scrollEvent">
    <Header></Header>
    <Swiper :swiperList='swiperList'  v-if="hackReset"></Swiper>
    <Icons :iconsList='iconsList'></Icons>
    <Location></Location>
    <Hot :hotList='hotList'></Hot>
    <Like :likeList='likeList'></Like>
    <Vacation :vacationList='vacationList'></Vacation>
  </div>
</template>

<script>
import Header from '@/components/home/pages/Header'
import Swiper from '@/components/home/pages/Swiper'
import Icons from '@/components/home/pages/Icons'
import Location from '@/components/home/pages/Location'
import Hot from '@/components/home/pages/Hot'
import Like from '@/components/home/pages/Like'
import Vacation from '@/components/home/pages/Vacation'
import {getUseInfor} from '../api/user.js'
import { setTimeout } from 'timers';
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    Header,
    Swiper,
    Icons,
    Location,
    Hot,
    Like,
    Vacation
  },

  data() {
    return {
      city:'北京',
      swiperList:[],
      iconsList:[],
      hotList:[],
      likeList:[],
      vacationList:[],
      hackReset:true,
      changeCity:''
    }
  },
  computed: {
    ...mapState(['CityName'])
  },
  created() {
    this.getUseInfors()
  },
  methods: {
    async getUseInfors(){
      let res  = await getUseInfor(this.CityName)
      this.swiperList = res.swiperList
        this.iconsList = res.iconsList 
        this.hotList = res.hotList
        this.likeList = res.likeList
        this.vacationList = res.vacationList
        this.changeCity = this.CityName
    },
    scrollEvent(e){
      console.log('aa')
    }
  },
  watch: {
    swiperList: function (val, oldVal) {
       this.hackReset = false
        this.$nextTick(() => {
          this.hackReset = true
        })
    },
    
  },
  mounted() {
      // this.$nextTick(() => {
      //   const container = this.$el.querySelector('.chat-content')
      //   if (container)
      //     document.documentElement.scrollTop = container.scrollHeight
      // })
        // console.log(document.documentElement.scrollTop)
        //  console.log(window.scrollY)
        //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        // console.log(document.documentElement.scrollTop)

    
  },
  activated() {
    if(this.changeCity!=this.CityName){
      this.getUseInfors();
    }
    // console.log('aa')
    //  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //     console.log(scrollTop)
  },
}
</script>
