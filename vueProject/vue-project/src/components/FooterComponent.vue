<template>
    <footer class="footer">
        <div class="feedback">
            <div class="feedback__logo">
                <div class="feedback__logo__img"><img src="@/assets/img/Logo.png" alt="Logo" class="feedback__logo__img__1"></div>
                <div class="feedback__logo__text">Interno</div>
            </div>
            <div class="feedback__text">It is a long established fact that a reader will be distracted lookings.
            </div>
            <div class="feedback__network">
                <div class="feedback__network__twiter">
                    <a href="#" class="feedback__network__twiter__link">
                        <img src='@/assets/img/twit.png' alt="linked"></a>
                </div>
                <div class="feedback__network__linked">
                    <a href="#" class="feedback__network__linked__link">
                        <img src="@/assets/img/linked.png" alt="twiter">
                    </a>
                </div>
            </div>
        </div>
        <div class="pages">
            <div class="pages__title">Pages</div>
            <div class="pages__item">
                <router-link to='/home' class="pages__item__link">Home</router-link>
            </div>
            <div class="pages__item">
                <router-link to='/project' class="pages__item__link">Project</router-link>
            </div>
            <div class="pages__item">
                <router-link to='/blog' class="pages__item__link">Blog</router-link>
            </div>
        </div>
        <div class="contacts">
            <div class="contacts__title">Contact</div>
            <div class="contacts__adress">55 East Birchwood Ave. Brooklyn, New York 11201</div>
            <div class="contacts__mail">contact@interno.com</div>
            <div class="contacts__tel">(123)456 7890</div>
        </div>

    </footer>
</template>

<script>

export default {
  name: 'FooterComponent',
  
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
 $whidthScrin:1140px;
    * {
    margin: 0;
    padding: 0;
    block-size: border-box;
    text-decoration: none;
}
.footer {
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    display: flex;
    justify-content: space-between;
    margin-bottom: 131px;
}

.feedback {
    &__logo {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 18px;
        &__img {
            margin-right: 8px;
            &__1 {
                width: 34px;
                height: 34px;
            }
        }
        &__text {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 40px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0%;
            text-align: left;
        }
    }
    &__text {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        margin-bottom: 31px;
        width: 393px;
    }
    &__network {
        display: flex;
        justify-content: start;
        &__twiter {
            margin-right: 54px;
            &__link {
                width: 18px;
                height: 22px;
                color: rgb(41, 47, 54);
            }
        }
        &__linked {
            &__link {
                width: 16px;
                height: 22px;
                color: rgb(41, 47, 54);
            }
        }
    }
}

.pages {
    margin-left: -301px;
    &__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 10px;
    }
    &__item {
        &__link {
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 300%;
            letter-spacing: 1%;
            text-align: left;
        }
    }
}

.contacts {
    width: 258px;
    &__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 26px;
    }
    &__adress {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        mmargin-bottom: 31px;
        mwidth: 393px;
    }
    &__mail {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
        margin-bottom: 31px;
        margin-top: 31px;
    }
    &__tel {
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
    }
}

</style>