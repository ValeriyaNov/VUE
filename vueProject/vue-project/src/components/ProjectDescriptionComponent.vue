<template>
    <div class="project__box__item">
    <div class="project__box__item__star" :style="{'display':`${checkStars}`}">
        <img src="@/assets/img/Star.png" alt="Star" class="project__box__item__star__1"></div>
    <div class="project__box__item__img" ><img class='project__box__item__img__img1' :src="project.img" alt="Kithen" :style="project.geeks"></div>
    <div class="project__box__item__description">
        <div class="project__box__item__description__content">
            <h3 class="project__box__item__description__content__title">
                {{ project.title }}
            </h3>
            <p class="project__box__item__description__content__text">{{ project.text }}</p>
        </div>
        <div class="project__box__item__description__button">
            <img src="@/assets/img/Vector.png" class="project__box__item__description__button__arrow"
alt="Arrow">
            </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'ProjectDescriptionComponent',
  props: ['project'],
  computed:{
    checkStars(){
        let status='';
        if (this.project.starCheck) {
            status='block'
        } else {
            status='none'
        }
        return status
    }
  }


}
</script>
<style lang="scss" scoped>
*{
    margin:0px;
    padding:0px;
}
.project__box {

        &__item {
            display: inline-block;
            &__star{
                position:absolute;
                margin-left: 549px;
                &__1{
                width: 36px;
                height: 34px;
                border-radius: 2px;
        
}
            }
            &__img {
            
                border: 1px solid transparent; //надо добавить в данные проекта радиус
                
                max-width: 600px;
                max-height: 900px;
                &__img1 {
                  //border-radius: 0 80px 0 0;
                }
            }
            &__description {
                max-width: 585px;
                height: 70px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 24px;
                &__content {
                    //max-height: 60px;
                    &__title {
                        color: rgb(41, 47, 54);
                        font-family: DM Serif Display;
                        font-size: 25px;
                        font-weight: 400;
                        line-height: 125%;
                        letter-spacing: 2%;
                        text-align: left;
                    }
                    &__text {
                        color: rgb(77, 80, 83);
                        font-family: Jost;
                        font-size: 22px;
                        font-weight: 400;
                        line-height: 150%;
                        letter-spacing: 1%;
                        text-align: left;
                    }
                }
                &__button {
                    background: rgb(244, 240, 236);
                    width: 70px;
                    height: 70px;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &__arrow {
                        color: rgb(41, 47, 54);
                        width: 8px;
                        height: 18px;
                        left: 517px;
                        top: 44px;
                    }
                }
            }}
        }
</style>