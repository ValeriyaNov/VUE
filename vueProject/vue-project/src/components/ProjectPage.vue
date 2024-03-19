
<template>
    <div>
        <UnderHeaderComponent :underFooter="underFooter"/>
        <ProjectBannerComponent/>
        <PaginationComponent/>
        <FooterComponent/>
    </div>
</template>
<script>

import ProjectBannerComponent from './ProjectBannerComponent.vue';
import UnderHeaderComponent from './UnderHeaderComponent.vue';
import PaginationComponent from './PaginationComponent.vue'
import FooterComponent from './FooterComponent.vue';
export default {
    components: {
        
        ProjectBannerComponent,
        UnderHeaderComponent,
        PaginationComponent,
        FooterComponent
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/ProjectBack.png'),
                checkBlock:{'display': 'blockk'},
                textTitle:'Our Project',
                textLink:'Project'
            },
        };
    },
}
</script>