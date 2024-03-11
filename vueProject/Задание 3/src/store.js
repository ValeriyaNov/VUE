import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: [], // Массив данных с сервера
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data; // Сохранение полученных данных в состояние
        },
    },
    actions: {
        fetchData(context) {
            // Симуляция асинхронного запроса к серверу
            setTimeout(() => {
                const dataFromServer = ['Data 1', 'Data 2', 'Data 3']; // Полученные данные с сервера
                context.commit('SET_DATA', dataFromServer); // Вызов мутации для сохранения данных в состояние
            }, 1000);
        },
    },
});

export default store;
