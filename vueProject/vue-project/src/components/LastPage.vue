<template>
    <div>
        <HeaderComponent/>
        <UnderHeaderComponent :underFooter="underFooter"/>
        <SliderComponent/>
        <FooterComponent/>
    </div>
</template>
<script>

import FooterComponent from './FooterComponent.vue';
import SliderComponent from './SliderComponent.vue';
import UnderHeaderComponent from './UnderHeaderComponent.vue';

export default {
    components: {
       FooterComponent,
        SliderComponent,
        UnderHeaderComponent,
        
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/BackLast.jpg'),
                checkBlock:{'display': 'none'},
                textTitle:'Our Project',
                textLink:'Project'
            },
        };
    },
}
</script>