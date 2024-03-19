<template>
  <div>
    <IndexUnderHeaderComponent/>
    <TitleTextCentreComponent :titleTextCentre="titleTextCentre1"/>
    <IndexProject/>
    <IndexCounter/>
    <TitleTextCentreComponent :titleTextCentre="titleTextCentre2"/>
    <div class="blog">
            <div v-for="article in articles2" :key="article.id" class="guidance">
              <ArticleBoxComponent :article="article"/>
            </div>  
    </div> 
    <FooterComponent/>
  </div>
</template>
<script>
import IndexUnderHeaderComponent from './IndexUnderHeaderComponent.vue';
import TitleTextCentreComponent from './TitleTextCentreComponent.vue';
import IndexProject from './IndexProject.vue'
import IndexCounter from './IndexCounter.vue';
import ArticleBoxComponent from './ArticleBoxComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
  name: 'IndexPage',
  components:{
    IndexUnderHeaderComponent,
    TitleTextCentreComponent,
    IndexProject,
    IndexCounter,
    ArticleBoxComponent,
    FooterComponent
  },
  data() {
    return {
        titleTextCentre1: {
        title:'Follow Our Projects',
        text:'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.'},

        titleTextCentre2: {
        title:'Articles & News',
        text:'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.'},

        articles2: [{
        id: '1',
        img: require('@/assets/img/blog1.png'),
        title: 'Let’s Get Solution For Building Construction Work',
        textBox: 'Kitchan Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '622.62px',
            height: '415.08px',
            margin: '-61.5px -119.19px -64.31px -350px'
        }

    }, {
        id: '2',
        img: require('@/assets/img/blog2.png'),
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        textBox: 'Living Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '580px',
            height: '386px',
            margin: '-48px -119px -48px -300px'
        }
    }, {
        id: '3',
        img: require('@/assets/img/blog3.png'),
        title: 'Best For Any Office & Business Interior Solution',
        textBox: 'Interior Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '945px',
            height: '630px',
            margin: '-138px -281px -202px -480px'
        }
    }] 
    
    };
  },
  
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
$whidthScrin:1140px;
.blog{
  margin-bottom: 96px;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(3, 1fr);
        margin-left: calc(50% - $whidthScrin/2 - 30px);
        margin-right: calc(50% - $whidthScrin/2 - 30px);
}
.guidance {
    background-color: white;
}

.guidance :hover .blog__box__item{
    background-color: rgb(244, 240, 236);
}

.guidance :hover .blog__box__item__button {
    background-color: white;
}
</style>