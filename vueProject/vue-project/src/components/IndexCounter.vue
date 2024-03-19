<template>
    <div class="counter">
        <div class="counter__item">
            <div class="counter__item__number">12</div>
            <div class="counter__item__text">Years Of Experiance</div>
        </div>
        <div class="conter__line"><img src="@/assets/img/Line.png" alt="Line"></div>
        <div class="counter__item">
            <div class="counter__item__number">85</div>
            <div class="counter__item__text">Success Project</div>
        </div>
        <div class="conter__line"><img src="@/assets/img/Line.png" alt="Line"></div>
        <div class="counter__item">
            <div class="counter__item__number">15</div>
            <div class="counter__item__text">Active Project</div>
        </div>
        <div class="conter__line"><img src="@/assets/img/Line.png" alt="Line"></div>
        <div class="counter__item">
            <div class="counter__item__number">95</div>
            <div class="counter__item__text">Happy CUstomers</div>
        </div>
    </div>
 
 </template>
 <script>
 export default {
   name: 'IndexCounter',
   
 
 
 }
 </script>
 <style lang="scss">
 .counter {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    background-color: rgb(244, 240, 236);
    height: 457px;
    margin-bottom: 96px;
    margin-top: 96px;
    &__item {
        width: 100%;
        width: 192px;
        height: 155px;
        &__number {
            color: rgb(205, 162, 116);
            font-family: DM Serif Display;
            font-size: 85px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
            margin-bottom: 16px;
        }
        &__text {
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: center;
        }
    }
    &__line {
        height: 130px;
    }
}
 </style>