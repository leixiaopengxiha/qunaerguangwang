<template exclude="test-keep-alive">
    <div>
       
        <Detalis-banner></Detalis-banner>
         <Detalis-header></Detalis-header>
         <div class="box"></div>
    </div>
</template>
<script>
import DetalisHeader from '@/components/details/pages/Header'
import DetalisBanner from '@/components/details/pages/Banner'

export default {
    name: 'details',
    components: {
        DetalisHeader,
        DetalisBanner,
    },
   
}
</script>
<style scoped>
.box{
    height: 100rem;
}
</style>

 