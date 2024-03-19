<template>
  <div>
    <div class="post">Latest Post</div>
    <div class="blog">
            <div v-for="article in articlesPage" :key="article.id" class="guidance">
              <ArticleBoxComponent :article="article" />
            </div>  
    </div> 
    <PaginationComponent :totalPages="totalPages" :quantity="quantity" :visible="visible" :site="site"/>
  </div>
</template>

<script>
import ArticleBoxComponent from '@/components/ArticleBoxComponent.vue'
import PaginationComponent from './PaginationComponent.vue';
export default {
  name: 'BlogBannerComponent',
  components:{
    ArticleBoxComponent,
    PaginationComponent
  },

  data() {
    return {
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
    }, {
        id: '7',
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
        id: '8',
        img: require("@/assets/img/blog6.png"),
        title: 'Best For Any Office & Business Interior Solution',
        textBox: 'Interior Design',
        datePublic: '26 December,2022',
        geeks: {
            width: '616px',
            height: '412px',
            margin: '-82px -111px -40px -325px'
        }
    }
],
        quantity:6,
        visible:true,
        site:'blog'
    };
  },
  computed: {
    showBlok () {
      return this.visible
    },
    totalPages () {
      return Math.ceil(this.articles.length / this.quantity)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    articlesPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.quantity
      const endIndex = startIndex + this.quantity
      return this.articles.slice(startIndex, endIndex)
    }
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss">
$whidthScrin:1140px;
.post {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    margin-top: 200px;
    margin-bottom: 27px;
    
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
.blog{
  margin-bottom: 96px;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(3, 1fr);
        margin-left: calc(50% - $whidthScrin/2 - 30px);
        margin-right: calc(50% - $whidthScrin/2 - 30px);
}
</style>