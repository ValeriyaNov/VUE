<template>
  <div class="container">
    <div class="text">
        <div class="text__title">
            <div class ="text__title__text">{{ description.title }}</div>
            
        </div>
        <div class="text__content">
            <div class="text__content__text">{{ description.text1 }} <br><br>
            {{ description.text2 }}</div>
            
        </div>
    </div>
    <div class="slider">
        <div class="slider__carousel">
        <div class="slider__magnifier">
            <img src="@/assets/img/Magnifier.png" alt="Magnifier" class="slider__magnifier__pic">
        </div>
        <div class="slider__images">
            <img class="slider__images__pic" :src="require('@/assets/img/'+image)" alt="">
        
        </div>
        <div v-for="ims in slidesUrl" :key="ims.id"></div>
        <ul class="slider__navlinks">
            <input class='slider__navlinks__point' type="radio"  v-for="points,index in slidesUrl" v-model="selectedImg" :value="index"  name="images" :key="index" />
        </ul>
    </div>

    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from "vuex";
export default {
  name: 'SliderComponent',
  data(){
        return{
            selectedImg:0
        }
    },
  methods: {
    ...mapActions(['fetchSlides']),
  },
  computed: {
    ...mapState(['description','slides']),
    
    slidesUrl(){
        let slidesUrles=[];
        for (let index = 0; index < this.slides.length; index++) {
            slidesUrles.push(this.slides[index].url)
            
        }
        return slidesUrles
    },
    image(){
        return this.slidesUrl[this.selectedImg]
    },
    
  },
  mounted () {
    this.fetchSlides()
  },
}


</script>
<style lang="scss">
*{margin: 0;
padding: 0;}
$whidthScrin:1140px;
.container{
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
}
.text{
   
    margin-top: 200px;
    margin-bottom: 100px;
    &__title{
        display: flex;
        justify-content: center;
        margin-bottom: 11px;;
        &__text {
        width: 658px;
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 63px;
        letter-spacing: 0.02em;
        text-align: left;
    }}
    &__content{
        display: flex;
        justify-content: center;
        &__text{
            width: 658px;
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            text-align: left;}
        
    }
}
.slider{
    margin-bottom: 120px;
    
    &__images{
        width:1201px;
        height:799px;
        border-radius: 70px;
        overflow: hidden;
        
       margin-bottom: 20px;
        &__pic{
            width:1201px;
            height:799px; 
        }
    }
    &__navlinks{
        
        &__point{
            margin-left: 10px;
        }
    }
    &__magnifier{
        position: absolute;
        margin-left: $whidthScrin/2 - 30px;
        margin-top: 333.5px;
        border-radius: 100%;
        background-color: white;
        width: 132px;
        height: 132px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__pic{
        width: 37px;
        height: 37px;
        }
    }
}
</style>