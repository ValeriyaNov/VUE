Vue.component('current', {

        template: `<div class="box">
    <div v-for='state in filteredStates' :key='state.id' class="current__state__item">

        <div class="current__state__item__title">{{state.title}}</div>
        <div class="current__state__item__tag">{{state.tag}}</div>
        <div class="current__state__item__description">
            <div class="current__state__item__description__date">{{state.dateState}}
            </div>
            <a href="#">
                <div class="current__state__item__description__button"><i class="fa-solid fa-chevron-right current__state__item__description__button__arrow"></i>
                </div>
            </a>
        </div>
    </div>
</div>`,
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
        },


    }

);
const app1 = new Vue({
    el: '#app1',

})