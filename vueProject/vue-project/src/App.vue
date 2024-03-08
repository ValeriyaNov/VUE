<template>
  <div id="app">
    <ProjectPage/>
    <!-- <HeaderComponent/>
    <ProjectBannerComponent/> -->
    <!-- <BannerIndexComponent/>
    <ArticleComponent/>
    <DatailsComponent/> -->
    <!-- <FooterComponent/> -->
    </div>
  
</template>

<script>
import ProjectPage from './components/ProjectPage.vue';
// import BannerIndexComponent from './components/BannerIndexComponent.vue';
// import ArticleComponent from './components/ArticleComponent.vue';
// import DatailsComponent from './components/DatailsComponent.vue';
//import FooterComponent from './components/FooterComponent.vue';
//import ProjectBannerComponent from './components/ProjectBannerComponent.vue';

export default {
  name: 'App',
  components: {
    ProjectPage
    //HeaderComponent,
    //ProjectBannerComponent,
    // BannerIndexComponent,
    // ArticleComponent,
    // DatailsComponent,
    //FooterComponent
},
data() {
    return{
        articles: [{
        id: '1',
        img: require('@/assets/img/blog1.png'),
        title: 'Let’s Get Solution For Building Construction Work',
        textBox: 'Kitchan Design',
        datePublic: '26 December,2022',
        geeksParent:{},
        geeks: {
            width: '622px',
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
    }, {
        id: '4',
        img: require('@/assets/img/blog4.png'),
        title: 'Let’s Get Solution For Building Construction Work',
        textBox: 'Kitchan Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '524px',
            height: '786px',
            margin: '-167px -59px -329px -296px'
        }
    }, {
        id: '5',
        img: require('@/assets/img/blog5.png'),
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        textBox: 'Living Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '418px',
            height: '627px',
            margin: '-242px -39px -95px -220px'
        }
    }, {
        id: '6',
        img: require("@/assets/img/blog6.png"),
        title: 'Best For Any Office & Business Interior Solution',
        textBox: 'Interior Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '616px',
            height: '412px',
            margin: '-82px -111px -40px -325px'
        }
    }],
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
    

}
}}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
