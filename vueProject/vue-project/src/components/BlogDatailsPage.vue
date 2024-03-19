
<template>
    <div>
        
        <UnderHeaderComponent :underFooter="underFooter"/>
        <DatailsComponent/>
        <FooterComponent/>
        
    </div>
</template>
<script>
import UnderHeaderComponent from './UnderHeaderComponent.vue';

import DatailsComponent from './DatailsComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    components: {
        
        FooterComponent,
        UnderHeaderComponent,
        DatailsComponent
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/BackBlogDatails.jpg'),
                checkBlock:{'display': 'none'},
                textTitle:'Articles & News',
                textLink:'Blog'//добавить ссылку
            },
        };
    },
}
</script>