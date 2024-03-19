<template>
  <div>
    <div class="banner">
        <div class="banner__container">
            <div class="banner__title">
                <p class="banner__title__content">Let Your Home Be Unique</p>
            </div>
            <div class="banner__text">
                <p class="banner__text__content">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            </div>
            <button class="banner__button">
            <p class="banner__button__text">Get Started</p>
            <img src="@/assets/img/VectorOrang.png" class="banner__button__img"
            alt="Arrow">
            </button>
        </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'IndexUnderHeaderComponent'
}
</script>
<style lang="scss">
$whidthScrin:1140px;
.banner {
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    border: 1px solid transparent;
    border-radius: 70px;
    background: url(@/assets/img/Photo.png);
    background-repeat: no-repeat;
    background-position: center -550px;
    width: auto;
    height: 758px;
    display: flex;
    align-items: center;
    &__container {
        margin-left: 52px;
    }
    &__title {
        width: 434px;
        height: 162px;
        &__content {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 65px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
        }
    }
    &__text {
        width: 434px;
        height: 66px;
        margin-top: 18px;
        margin-bottom: 18px;
        &__content {
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
        width: 220px;
        height: 75px;
        border-radius: 18px;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        background-color: rgb(41, 47, 54);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 26px 49px 26px 48px;
        color: rgb(255, 255, 255);
        &__text {
            font-family: Jost;
            font-size: 18px;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
            margin-right: 10px;
        }
        &__img {
            color: rgb(205, 162, 116);
            width: 15.14px;
            height: 13.18px;
        }
    }
    &__button:hover {
        background: transparent;
        color: rgb(41, 47, 54);
        border: 1px solid transparent;
    }
}
</style>