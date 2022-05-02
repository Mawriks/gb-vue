import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
    paymentsListIds: [],
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload
    },
    setCategories(state, payload){
      state.categoryList = payload
    },      
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    addDataToCategoryList (state, payload) {
      state.categoryList.push(payload)
    },
  },
  
  actions: {
     fetchData ({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              date: '28.03.2020',
              category: 'Food',
              value: 169,
            },
            {
              date: '24.03.2020',
              category: 'Transport',
              value: 360,
            },
            {
              date: '24.03.2020',
              category: 'Food',
              value: 532,
            },
          ])
        }, 1000)
      })
      .then(res => {
        // запускаем изменение состояния через commit
        commit('setPaymentsListData', res)
      })
    }, 
    fetchCategoryList({commit}) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          resolve (['Food', 'Transport', 'Education', 'Entertainment'])
        }, 1000)
      }).then(res => { commit('setCategories', res)})
    }
  },
  modules: {
  }
})
