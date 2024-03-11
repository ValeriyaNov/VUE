<template>
  <div>
    <div class="heading">
        <div class="heading__title">{{ titleTextCentre.title }}</div>
        <div class="heading__text">
            <p class="heading__text__content">{{ titleTextCentre.text }}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'TitleTextCentreComponent',
    props:['titleTextCentre']
  }
  
  </script>
  
  <style lang="scss">
  $whidthScrin:1140px;
    .heading {
    margin-bottom: 93px;
    margin-top: 93px;
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    &__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    &__text {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        display: flex;
        justify-content: center;
        text-align: center;
        &__content {
            width: 737px;
        }
    }
}
  </style>