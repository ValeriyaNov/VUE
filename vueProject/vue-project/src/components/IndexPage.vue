<template>
  <div>
    <IndexUnderHeaderComponent/>
    <TitleTextCentreComponent :titleTextCentre="titleTextCentre1"/>
    <IndexProject/>
    <TitleTextCentreComponent :titleTextCentre="titleTextCentre2"/>
  </div>
</template>
<script>
import IndexUnderHeaderComponent from './IndexUnderHeaderComponent.vue';
import TitleTextCentreComponent from './TitleTextCentreComponent.vue';
import IndexProject from './IndexProject.vue'
export default {
  name: 'IndexPage',
  components:{
    IndexUnderHeaderComponent,
    TitleTextCentreComponent,
    IndexProject
  },
  data() {
    return {
        titleTextCentre1: {
        title:'Follow Our Projects',
        text:'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.'},

        titleTextCentre2: {
        title:'Articles & News',
        text:'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.'}
    };
  },
  
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
</style>