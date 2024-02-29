<template>
<div class="header">
        <div class="header__logo">
            <div class="header__logo__1">
                <img src="../assets/img/Logo.png" alt="Logo" class="header__logo__1__img">
            </div>
            <div class="header__logo__2">
                <p class="header__logo__2__text">Interno</p>
            </div>
        </div>
        <div class="header__link">
            <div class="header__link__item">
                <a class="header__link__item__color" href="#">Home</a>
            </div>
            <div class="header__link__item ">
                <a class="header__link__item__color" href="# ">Project</a>
            </div>
            <div class="header__link__item ">
                <a class="header__link__item__color" href="# ">Blog</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="scss">
    $whidthScrin:1140px;
    * {
    margin: 0;
    padding: 0;
    block-size: border-box;
    text-decoration: none;
}

.header {
    margin-bottom: 53px;
    margin-top: 53px;
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
        display: flex;
        justify-content: start;
        gap: 8px;
        &__1 {
            &__img {
                width: 34px;
                height: 34px;
            }
        }
        &__2 {
            width: 133px;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 40px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
        }
    }
    &__link {
        display: flex;
        justify-content: end;
        gap: 15px;
        width: 243px;
        height: 25px;
        align-items: center;
        &__item {
            font-family: Jost;
            font-size: 20px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            &__color {
                color: rgb(41, 47, 54);
            }
        }
    }
}

 
</style>
