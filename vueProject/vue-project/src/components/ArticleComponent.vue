<template>
    <div>
        <div class="new">
        <div class="news_container">
            <div class="news">
                <div class="news__title__cont">
                    <h1 class="news__title">Articles & News</h1>
                </div>
                <div class="news__title__cont">
                    <a href='#' class="news__link__link1">Home /</a>
                    <a href='#' class="news__link__link1">Blog</a>
                </div>

            </div>
        </div>
    </div>
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

    <div id='app' class="blog">
        <div class="blog__title">
            <div class="blog__title__caption1">Articles & News</div>

        </div>
        <div class="blog__box">
            <div v-for='article in $parent.articles' :key="article.id" class="test">
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
        </div>

    </div>
    <div class="pagination">
        <div class="pagination__item">
            <a href="#" class="pagination__item__text">01</a>
        </div>
        <div class="pagination__item">
            <a href="#" class="pagination__item__text">02</a>
        </div>
        <div class="pagination__item">
            <a href="#" class="pagination__item__text">03</a>
        </div>
        <button class="pagination__button">
            <img src="@/assets/img/Vector.png" class="pagination__button__arrow"
            alt="Arrow">
            </button>
    </div>
    </div>
</template>
<script>
export default {
  name: 'ArticleComponent',
  props:['articles']
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
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
// @import url('@/assets/scss-modules/style.scss');
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
                    ppadding-left: -150px;
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
.news {
    border: 1px solid transparent;
    border-radius: 37px 37px 0 0;
    background-color: white;
    width: 503px;
    height: 173px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: center;
        
    }
    &__link {
        &__link1 {
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

.new {
    background-image: url(@/assets/img/articleTitle.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px -485px;
    width: 100%;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: end;
    height: 356px;
}

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
    }
}

.gap_text {
    margin-top: 40px;
    margin-bottom: 40px;
}

.blog__title__caption1 {
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    text-align: left;
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    margin-bottom: 30px;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 200px;
    &__item {
        background: white;
        border: 1px solid rgb(205, 162, 116);
        width: 52px;
        height: 52px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &__text {
            color: rgb(41, 47, 54);
            font-family: Jost;
            font-size: 16px;
            font-weight: 500;
            line-height: 150%;
            letter-spacing: 0%;
            text-align: left;
            text-transform: capitalize;
        }
    }
    &__item:hover {
        background: rgb(244, 240, 236);
    }
    &__button {
        background: white;
        border: 1px solid rgb(205, 162, 116);
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
    &__button:hover {
        background: rgb(244, 240, 236);
    }
}

 
</style>