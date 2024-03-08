<template>
    <div class="new" :style="{'background':`url(${underFooter.backGroundImg})`}" >
        
        <div class="news_container" >
            <div class="news" :style="underFooter.checkBlock">
                <div class="news__title__cont">
                    <h1 class="news__title">{{ underFooter.textTitle }}</h1>
                </div>
                <div class="news__title__cont">
                    <a href='#' class="news__link__link1">Home /</a>
                    <a href='#' class="news__link__link1">{{underFooter.textLink}}</a>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'UnderHeaderComponent',
  props: ['underFooter'],
  
  
  

}
</script>
<style lang="scss">
.new {
    lbackground: url('@/assets/img/ProjectBack.png');
    background-repeat: no-repeat;
    background-size: cover;
    //background-position: 0px -485px;
    width: 100%;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 356px;
    hdisplay: block;
}
.news {
    border: 1px solid transparent;
    border-radius: 37px 37px 0 0;
    background-color: white;
    width: 503px;
    height: 173px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: center;
        &_cont {
            kdisplay: flex;
            ljustify-content: center;
            lalign-items: center;
        }
    }
    &__link {
        &__link1 {
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: center;
        }
    }
}


</style>