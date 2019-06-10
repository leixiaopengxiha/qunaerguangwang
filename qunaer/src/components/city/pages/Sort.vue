<template>
  <div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <li
        class="sort-item"
        v-for="(val,key,index) in cities"
        :key="index"
        @click="changSort(key)"
      >{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["cities"],
  data() {
    return {};
  },
  methods: {
      changSort(key){
          this.$store.dispatch('changSort',key)
      }
  },
};
</script>
<style scoped>
.sort-title {
  font-size: 0.25rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}
.sort-list {
  background: #fff;
  font-size: 0.28rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  color: #212121;
}
.sort-item {
  width: calc(100% / 6);
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
}
</style>


