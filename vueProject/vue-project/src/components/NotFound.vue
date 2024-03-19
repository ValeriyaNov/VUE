<template>
  <div class="page">
    <div class="not__page">
    <h1>404</h1>
    <h2>We are sorry, but the page you requested was not found</h2>
    <router-link class="header__link" to="/home">
        <button class="banner__button">
            <p class="banner__button__text">Back To Home</p>
            <img src="@/assets/img/VectorOrang.png" class="banner__button__img"
            alt="Arrow">
            </button>
    </router-link>
  </div>
  <div class="not__img"><img src="@/assets/img/404.jpg" alt="trash can" class="not__img__1"></div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped lang="scss">
$whidthScrin:1140px;
    * {
    margin: 0;
    padding: 0;
    block-size: border-box;
    text-decoration: none;
}
.page {
    margin-bottom: 53px;
    margin-top: 53px;
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    //margin-right: calc(50% - $whidthScrin/2 - 30px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.banner__button {
        //margin-right: 20px;
        width: 253px;
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
            //color:red;
            //filter:grayscale(100%);
            width: 15.14px;
            height: 13.18px;
        }
    }
    .banner__button:hover {
      background: rgb(205, 162, 116);
      
    }
    .banner__button:hover .banner__button__img{
        filter:brightness(25%)
       
        
        
    }
    .not__page h1{
    color: rgb(205, 162, 116);
    font-family: DM Serif Display;
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
    }
    .not__page h2{
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 35px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    height: 139px;
    margin-bottom: 23px;
    }
    .not__img{
      width: 913px;
      height: 1042px;
    }
    .not__img__1{
      border-radius: 0px 0px 0px 353px;
    }
</style>