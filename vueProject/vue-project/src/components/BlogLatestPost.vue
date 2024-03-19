<template>
  <div>
    <div class="post">Latest Post</div>
    <div class="content">
        <div class="content__img"><img src="@/assets/img/contentphoto.png" alt="Interior" class="content__img__pic"></div>
        <div class="content__description">
            <div class="content__description__title">
                <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            </div>
            <div class="content__description__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</div>
            <div class="content__description__text gap_text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</div>
            <div class="content__description__box">
                <div class="content__description__box__text">26 December, 2022</div>
                <div class="content__description__box__button">
                    <img src="@/assets/img/Vector.png" class="content__description__box__button__arrow"
            alt="Arrow">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLatesPost',

  data() {
    return {
      
    };
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
    margin-left: calc(50% - $whidthScrin/2 - 30px);
}

.content {
    $whidthScrin:1140px;
    margin-bottom: 150px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 65px;
    &__img {
        border: 1px solid transparent;
        width: 1300px;
        /*не правильно работает*/
        height: 478px;
        border-radius: 50px;
        overflow: hidden;
        &__pic {
            width: 765px;
            height: 510px;
            margin-left: -42.5px;
            margin-right: -153.5px;
            margin-top: -16px;
            margin-bottom: -16px;
        }
    }
    &__description {
        &__title {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            letter-spacing: 2%;
            line-height: 31.25px;
            text-align: left;
            margin-bottom: 22px;
            margin-right: 10px;
        }
        &__text {
            color: rgb(41, 47, 54);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 1%;
            line-height: 33px;
            text-align: left;
        }
        &__box {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
                &__arrrow {
                    color: rgb(41, 47, 54);
                    width: 8px;
                    height: 18px;
                    left: 517px;
                    top: 44px;
                }
            }
        }
    }}
    .gap_text {
    margin-top: 40px;
    margin-bottom: 40px;
}

</style>