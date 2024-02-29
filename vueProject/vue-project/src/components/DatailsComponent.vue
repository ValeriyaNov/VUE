<template>
    <div >
        <div class="laceholder">
        <img src="@/assets/img/datailsBack.jpeg" alt="Room" class="laceholder__img">
    </div>
    <div >
        <div class="blog1">
            <div class="state">
                <div class="state__title">
                    <h3 class="state__title__text">Let’s Get Solution for Building Construction Work</h3>
                </div>
                <div class="state__img"><img src="@/assets/img/datailsPic1.png" alt="Interior" class="state__img__pic">
                </div>
                <div class="state__description">
                    <div class="state__description__text">26 December, 2022</div>
                    <div class="state__description__link">
                        <a href="#" class="state__description__link__item">Interior /</a>
                        <a href="#" class="state__description__link__item">Home /</a>
                        <a href="#" class="state__description__link__item">Decore</a>
                    </div>
                </div>
                <div class="state__text">
                    <p class="state__text__content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injecthumour,or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                </div>
            </div>
            <div class="tags">
                <div class="tags__title">
                    <h3 class="tags__title__text">Tags</h3>
                </div>
                <div class="tags__container">

                    <button @click="getFilter" class="tags__container__item">Kitchen</button>


                    <button @click="getFilter" class="tags__container__item">Bedroom</button>

                    <button @click="getFilter" class="tags__container__item">Building</button>

                    <button @click="getFilter" class="tags__container__item ">Architecture</button>

                    <button @click="getFilter" class="tags__container__item ">Kitchen Planning
                        </button>

                    <button @click="getFilter" class="tags__container__item">Bedroom</button>

                </div>
            </div>

        </div>
        <div class="state2 ">
            <div class="state2__note ">
                <div class="state2__note__container ">
                    <div class="state2__note__box ">
                        <div class="state2__note__box__img ">
                            <img src="@/assets/img/datailsQuotes.png" alt="Quotes " class="state2__note__box__img__pic ">
                        </div>
                        <div class="state2__note__box__text ">
                            <p class="state2__note__box__text__content ">The details are not the details. They make the design.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="state2__box ">
                <div class="state2__box__title ">Design sprints are great</div>
                <div class="state2__box__content ">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
                <ol class="state2__box__list ">
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ol>
                <div class="state2__box__img ">
                    <img class="state2__box__img__pic " src="@/assets/img/datailsPic2.png" alt=" DD"></div>
                <div class="state2__box__content ">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
        </div>

        <div class="current__state ">
            
            <div class="box">
                <div v-for='state in filteredStates' :key='state.id' class="current__state__item ">

                    <div class="current__state__item__title ">{{state.title}}</div>
                    <div class="current__state__item__tag ">{{state.tag}}</div>
                    <div class="current__state__item__description ">
                        <div class="current__state__item__description__date ">{{state.dateState}}
                        </div>
                        <a href="# ">
                            <div class="current__state__item__description__button ">
                                <img src="@/assets/img/Vector.png" class="current__state__item__description__button__arrow"
            alt="Arrow">
                        
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    </template>
    <script>
    export default {
      name: 'HeaderComponent',
      data() {
            return {
                filter: [],
                states: [{
                    id: 0,
                    tag: 'Kitchen',
                    title: 'Kitchen design trends 2024',
                    dateState: '29 December, 2023'
                }, {
                    id: 1,
                    tag: 'Kitchen',
                    title: 'Lighting systems',
                    dateState: '05 February, 2024'
                }, {
                    id: 2,
                    tag: 'Bedroom',
                    title: 'How choose a bed',
                    dateState: '17 December, 2023'
                }, {
                    id: 3,
                    tag: 'Building',
                    title: 'The most unusual hotel lobby interiors',
                    dateState: '25 December, 2023'
                }]

            }
        },
        methods: {
            getFilter(event) {
                let array = event.target.parentNode.children;
                for (let index = 0; index < array.length; index++) {
                    let currentEl = array[index];
                    currentEl.classList.remove('tags__container__item__pressed')
                }
                this.filter = [];
                this.filter.push(event.target.textContent);
                event.target.classList.toggle('tags__container__item__pressed');
            }
        },
        computed: {
            filteredStates() {
                if (this.filter.length === 0) { return this.states }
                return this.states.filter(item => item.tag === this.filter[0]);

            }
        }


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
    
    .laceholder {
    height: 351px;
    
    overflow: hidden;
    margin-bottom: 200px;
    &__img {
        width: 2248px;
        height: 1500px;
        margin: -590px 1755px 872px -164px;
    }
}

.tags {
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    margin-left: 57px;
    height: 200px;
    width: 345px;
    &__title {
        margin-bottom: 24px;
        &__text {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }
    }
    &__container {
        grid-row: 1;
        grid-column: 2;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
        &__item {
            border-radius: 10px;
            border: 1px solid transparent;
            background: rgb(244, 240, 236);
            padding: 9px 30px 9px 30px;
            color: rgb(41, 47, 54);
            font-family: Jost;
            font-size: 18px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
        }
        &__item__pressed {
            background-color: rgb(41, 47, 54);
            color: white;
        }
        &__item:hover {
            background-color: rgb(41, 47, 54);
            color: white;
        }
    }
}

.state {
    &__title {
        margin-bottom: 21px;
        width: 799px;
        &__text {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }
    }
    &__img {
        width: 799px;
        height: 539px;
        overflow: hidden;
        border-radius: 50px;
        background: rgb(196, 196, 196);
        &__pic {
            width: 910px;
            height: 606.67px;
            margin: 0px -43px -204px -68px;
        }
    }
    &__description {
        margin-top: 46px;
        margin-bottom: 48px;
        width: 799px;
        display: flex;
        justify-content: space-between;
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
        &__link {
            margin-right: 40px;
            &__item {
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
    &__text {
        width: 799px;
        margin-bottom: 35px;
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
}

.blog1 {
    display: flex;
    justify-content: start;
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    margin-left: calc(50% - $whidthScrin/2 - 30px);
}

.state2 {
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    width: 799px;
    margin-bottom: 96px;
    &__note {
        &__container {
            border-radius: 50px;
            background: rgb(244, 240, 236);
            width: 799px;
            height: 267px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 27px;
        }
        &__box {
            width: 345px;
            &__img {
                display: flex;
                justify-content: center;
                &__pic {}
            }
            &__text {
                margin-top: 10px;
                &__content {
                    color: rgb(205, 162, 116);
                    font-family: DM Serif Display;
                    font-style: italic;
                    font-size: 25px;
                    font-weight: 400;
                    line-height: 125%;
                    letter-spacing: 2%;
                    text-align: center;
                }
            }
        }
    }
    &__box {
        &__title {
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }
        &__content {
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            margin-top: 24px;
            margin-bottom: 24px;
        }
        &__list {
            counter-reset: lis;
        }
        &__list li {
            margin-bottom: 32px;
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            list-style-type: none;
            kmargin-left: 18px;
        }
        &__list li::before {
            color: rgb(205, 162, 116);
            font-family: DM Serif Display;
            font-size: 20px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
            counter-increment: lis;
            content: counter(lis);
            margin-right: 18px;
        }
        &__img {
            width: 799px;
            height: 365px;
            border-radius: 50px;
            background: rgb(196, 196, 196);
            overflow: hidden;
            &__pic {
                width: 892px;
                height: 594.67px;
                margin: -62px -29px -167px -64px;
            }
        }
    }
}

.box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 60px;
}

.current__state {
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    &__item {
        border: 1px solid transparent;
        border-radius: 50px;
        background: rgb(244, 240, 236);
        padding: 15px;
        &__title {
            height: 80px;
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 30px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
        }
        &__tag {
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }
        &__description a {
            color: rgb(41, 47, 54);
        }
        &__description {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__date {
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
            }
            &__button {
                background: white;
                width: 70px;
                height: 70px;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
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

.cont {
    display: flex;
    align-items: end;
}
</style>