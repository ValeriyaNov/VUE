<template>
    <div>
        <HeaderComponent/>
        <UnderHeaderComponent :underFooter="underFooter"/>
        <SliderComponent/>
        <!-- <ProjectBannerComponent/> удалить потом
        <PaginationComponent/> -->
        <FooterComponent/>
    </div>
</template>
<script>
import FooterComponent from './FooterComponent.vue';

//import ProjectBannerComponent from './ProjectBannerComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import SliderComponent from './SliderComponent.vue';
import UnderHeaderComponent from './UnderHeaderComponent.vue';
//import PaginationComponent from './PaginationComponent.vue'
export default {
    components: {
        FooterComponent,
        SliderComponent,
        //ProjectBannerComponent,
        HeaderComponent,
        UnderHeaderComponent,
        //PaginationComponent
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/BackLast.jpg'),
                checkBlock:{'display': 'none'},
                textTitle:'Our Project',
                textLink:'Project'//добавить ссылку
            },
        };
    },
}
</script>