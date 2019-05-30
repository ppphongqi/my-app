// import Vue from 'vue';
// import Vuex from 'vuex'
// Vue.use(Vuex);
//
//
// export default new Vuex.Store({
//
//
//      state : {
//         isLogin: false,
//         fabuinfo: [] ,
//         username: '123456',
//         curindex: 0,
//     },
//
//     getters:{
//         login:(state) => {
//             return state.isLogin;
//         },
//         username:(state) => {
//             return state.username
//         },
//         curindex: (state) => {
//             return state.curindex
//         },
//     },
//
//     mutations: {
//         hasLogin: (state) => {
//             state.isLogin = true;
//             console.log(`登录状态：`+state.isLogin)
//         },
//         noLogin: (state) => {
//             state.isLogin = false
//         },
//         setUsername: (state, username) => {
//             state.Username = username;
//
//             console.log('用户名：'+ state.username)
//         },
//         setCurindex: (state, index) => {
//             state.curindex = index
//         },
//         setUserinfo: (state, userinfo) =>{
//             // window.localStorage.setItem('useravatar',userinfo.avatar);
//             state.userinfo = userinfo;
//             console.log(state.userinfo)
//         }
//
//     },
//
//     actions:{
//         hasLogin:({ commit }) => {
//             if(window.localStorage.getItem('username') != null && window.localStorage.getItem('password') != null ){
//                 commit('hasLogin')
//             }else{
//                 console.log('没有登录')
//             }
//         },
//         noLogin:({ commit }) => {
//             if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null ){
//                 commit('noLogin')
//             }
//         },
//         setUsername: ({ commit },username) => {
//             commit('setUsername',username )
//         },
//         setCurindex:({ commit },index) => {
//             commit('setCurindex',index)
//         },
//         setUserinfo: ({commit}, userinfo) =>{
//             commit('setUserinfo', userinfo)
//         }
//     },
//
// });
//
//
