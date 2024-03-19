<template>
  <div>
        <div class="blog__box__item">
                    <div class="blog__container">
                        <div class="blog__box__item__img"><img class='blog__box__item__img__1' :src="article.img" alt="Interior" :style="article.geeks">
                            <div class="blog__box__item__img__note">
                                <p class="blog__box__item__img__note__text">{{article.textBox}}</p>
                            </div>
                        </div>
                        <div class="blog__box__item__title">{{article.title}}
                        </div>
                        <div class="blog__box__item__description">
                            <div class="blog__box__item__text">{{article.datePublic}}</div>
                            <div class="blog__box__item__button">
                                <img src="@/assets/img/Vector.png" class="blog__box__item__button__arrow"
            alt="Arrow">
                            </div>
                        </div>
                    </div>
                </div>
  </div>
</template>

<script>

export default ({
  name:'ArticleBoxComponent',
  props:['article']
});
</script>
<style lang="scss">
$whidthScrin:1140px;
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.blog__container {
        width: 340px;
        height: 490px;
    }
.blog__box {
        
        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgb(231, 231, 231);
            border-radius: 62px;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            width: 390px;
            height: 521px;
            &__img {
                border: 1px solid transparent;
                border-radius: 45px 45px 0 0;
                width: 340px;
                height: 289px;
                overflow: hidden;
                position: absolute;
                &__1 {
                    position: absolute;
            
                }
                &__note {
                    position: relative;
                    z-index: 1;
                    width: 124px;
                    height: 41px;
                    border: 1px solid black;
                    border-radius: 8px 8px 8px 0;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 228px;
                    margin-right: 196px;
                    margin-bottom: 20px;
                    margin-left: 20px;
                    &__text {
                        color: rgb(77, 80, 83);
                        font-family: Jost;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 150%;
                        letter-spacing: 1%;
                        text-align: left;
                        text-transform: capitalize;
                    }
                }
            }
            &__title {
                color: rgb(41, 47, 54);
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
                text-align: left;
                width: 276px;
                margin-top: 310px;
                margin-bottom: 30px;
                position: relative;
            }
            &__text {
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                text-transform: capitalize;
            }
            &__button {
                background: rgb(244, 240, 236);
                width: 52px;
                height: 52px;
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
            &__description {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
</style>
