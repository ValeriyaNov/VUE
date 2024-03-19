
<template>
    <div>
        
        <UnderHeaderComponent :underFooter="underFooter"/>
        <BlogLatestPost/>
        <BlogBannerComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import UnderHeaderComponent from './UnderHeaderComponent.vue';
import BlogLatestPost from './BlogLatestPost.vue';
import BlogBannerComponent from './BlogBannerComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    components: {
        FooterComponent,
        BlogLatestPost,
        UnderHeaderComponent,
        BlogBannerComponent
  },
    name: 'ProjectPage',
    data() {
        return {
            underFooter:{
                backGroundImg: require('@/assets/img/BackBlog.png'),
                checkBlock:{'display': 'blockk'},
                textTitle:'Articles & News',
                textLink:'Blog'//добавить ссылку
            },
        };
    },
}
</script>