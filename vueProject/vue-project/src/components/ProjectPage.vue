
<template>
    <div>
        <HeaderComponent/>
        <UnderHeaderComponent :underFooter="underFooter"/>
        <ProjectBannerComponent/>
        <PaginationComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import FooterComponent from './FooterComponent.vue';
import ProjectBannerComponent from './ProjectBannerComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import UnderHeaderComponent from './UnderHeaderComponent.vue';
import PaginationComponent from './PaginationComponent.vue'
export default {
    components: {
        FooterComponent,
        ProjectBannerComponent,
        HeaderComponent,
        UnderHeaderComponent,
        PaginationComponent
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/ProjectBack.png'),
                checkBlock:{'display': 'blockk'},
                textTitle:'Our Project',
                textLink:'Project'//добавить ссылку
            },
        };
    },
}
</script>