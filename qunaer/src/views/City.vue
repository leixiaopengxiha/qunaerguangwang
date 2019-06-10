<template>
  <div class="ctiy">
    <City-header></City-header>
    <div ref="container" class="container">
      <div>
        <City-hot :hotCities="hotCities"></City-hot>
        <City-sort :cities="cities"></City-sort>
        <City-lista :cities="cities" :scroll='scroll'></City-lista>
      </div>
    </div>
    <!-- <City-list :cities="cities" :hotCities="hotCities"></City-list> -->
  </div>
</template>
<script>
import CityHeader from "@/components/city/pages/Header";
import CityHot from "@/components/city/pages/Hot";
import CitySort from "@/components/city/pages/Sort";
import CityLista from "@/components/city/pages/Lista";
// import CityList from '@/components/city/pages/List'

import { getUseCity } from "../api/user.js";
import BScroll from "better-scroll";
export default {
  name: "city",
  components: {
    CityHeader,
    CityHot,
    CitySort,
    CityLista
    // CityList
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      scroll: ""
    };
  },
  created() {
    getUseCity().then(res => {
      const datas = res.dataCity.data;
      this.hotCities = datas.hotCities;
      this.cities = datas.cities;
    });
  },
  mounted() {
    let doms = this.$refs.container;
    this.scroll = new BScroll(doms, {
      scrollY: true,
      click: true
    });
  }
};
</script>
<style scoped>
.ctiy {
  background: #f5f5f5;
}
.container{
    position: absolute;
    top:44px;
    left:0;
    right:0;
    bottom: 0;
    overflow: hidden;
}
</style>
