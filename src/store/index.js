import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '111',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			url: '###',
			nickname: '黄敬理',
			avatar: 'https://huangjingli.oss-cn-beijing.aliyuncs.com/avatar/d8cf9724ad0d3541f77420ad72a1629f.jpg'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	getters: {
	},
	actions: {
	},
	modules: {}
})
