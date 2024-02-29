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
    <div class="heading">
        <div class="heading__title">Follow Our Projects</div>
        <div class="heading__text">
            <p class="heading__text__content">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
        </div>
    </div>
    <div class="project">
        <div class="project__box">
            <div class="project__box__item">
                <div class="project__box__item__img"><img class='project__box__item__img__img1' src="@/assets/img/Project1 (2).png" alt="Kithen"></div>
                <div class="project__box__item__description">
                    <div class="project__box__item__description__content">
                        <h3 class="project__box__item__description__content__title">
                            Modern Kitchan
                        </h3>
                        <p class="project__box__item__description__content__text">Decor / Artchitecture</p>
                    </div>
                    <div class="project__box__item__description__button"><img src="@/assets/img/Vector.png" class="project__box__item__description__button__arrow"
            alt="Arrow"></div>
                </div>
            </div>
            <div class="project__box__item indentation">
                <div class="project__box__item__img pic"><img class='project__box__item__img__img1 pic__pic1' src="@/assets/img/Project2.png" alt="Kithen"></div>
                <div class="project__box__item__description">
                    <div class="project__box__item__description__content">
                        <h3 class="project__box__item__description__content__title">
                            Modern Kitchan
                        </h3>
                        <p class="project__box__item__description__content__text">Decor / Artchitecture</p>
                    </div>
                    <div class="project__box__item__description__button"><img src="@/assets/img/Vector.png" class="project__box__item__description__button__arrow"
            alt="Arrow"></div>
                </div>
            </div>
            <div class="project__box__item">
                <div class="project__box__item__img pic2"><img class='project__box__item__img__img1 pic2__2' src="@/assets/img/Project3.png" alt="Kithen"></div>
                <div class="project__box__item__description">
                    <div class="project__box__item__description__content">
                        <h3 class="project__box__item__description__content__title">
                            Modern Kitchan
                        </h3>
                        <p class="project__box__item__description__content__text">Decor / Artchitecture</p>
                    </div>
                    <div class="project__box__item__description__button"><img src="@/assets/img/Vector.png" class="project__box__item__description__button__arrow"
            alt="Arrow"></div>
                </div>
            </div>
            <div class="project__box__item indentation">
                <div class="project__box__item__img pic3"><img class='project__box__item__img__img1 pic3__3' src="@/assets/img/Project4.png" alt="Kithen"></div>
                <div class="project__box__item__description">
                    <div class="project__box__item__description__content">
                        <h3 class="project__box__item__description__content__title">
                            Modern Kitchan
                        </h3>
                        <p class="project__box__item__description__content__text">Decor / Artchitecture</p>
                    </div>
                    <div class="project__box__item__description__button">
                        <img src="@/assets/img/Vector.png" class="project__box__item__description__button__arrow"
            alt="Arrow">
                        </div>
                </div>
            </div>
        </div>

    </div>
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
    <div class="blog">
        <div class="blog__title">
            <div class="blog__title__caption">Articles & News</div>
            <div class="blog__title__text">
                <p class="blog__title__text__content">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
            </div>
        </div>
        <div class="blog__box">
            <div v-for='article in $parent.articles2' :key="article.id" class="test">
                <div class="blog__box__item">
                    <div class="blog__container">
                        <div class="blog__box__item__img"><img class='blog__box__item__img__1' :src='article.img' alt="Interior" :style="article.geeks">
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
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: 'BannerIndexComponent',
  props:['articles2']
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
.project {
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    margin-bottom: 97px;
    &__box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        &__item {
            &__img {
                border: 1px solid transparent;
                border-radius: 0 80px 0 0;
                width: 525px;
                height: 548px;
                overflow: hidden;
                &__img1 {
                    width: 686px;
                    height: 1031px;
                    margin-right: -60px;
                    margin-left: -110px;
                    margin-top: -260px;
                    margin-bottom: -216px;
                }
            }
            &__description {
                width: 525px;
                display: flex;
                justify-content: space-between;
                margin-top: 24px;
                &__content {
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
            }
        }
    }
}

.pic {
    border-radius: 80px 0 0 0;
    &__pic1 {
        width: 930px;
        height: 1393px;
        mmargin-left: -86px;
        margin-top: -451px;
        margin-bottom: -394px;
        kmargin-right: -1281px;
    }
}

.pic2 {
    border-radius: 0 0 80px 0;
    &__2 {
        width: 677px;
        height: 847px;
        kmargin-left: -95px;
        margin-top: -165px;
        margin-bottom: -116px;
        jmargin-right: -753px;
    }
}

.pic3 {
    border-radius: 0 0 0 80px;
    &__3 {
        width: 744px;
        height: 1117px;
        margin-left: -155px;
        margin-top: -255px;
        margin-bottom: -290px;
        margin-right: -87px;
    }
}

.indentation {
    margin-left: 80px;
}

.counter {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    background-color: rgb(244, 240, 236);
    height: 457px;
    margin-bottom: 96px;
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

.blog {
    &__title {
        margin-bottom: 52px;
        &__caption {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
            margin-bottom: 12px;
        }
        &__text {
            display: flex;
            justify-content: center;
            &__content {
                width: 811px;
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
    &__container {
        width: 340px;
        height: 490px;
    }
    &__box {
        margin-bottom: 96px;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(3, 1fr);
        margin-left: calc(50% - $whidthScrin/2 - 30px);
        margin-right: calc(50% - $whidthScrin/2 - 30px);
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
}

.test {
    background-color: white;
}

.test :hover {
    background-color: rgb(244, 240, 236);
}

.test :hover .blog__box__item__button {
    background-color: white;
}

</style>