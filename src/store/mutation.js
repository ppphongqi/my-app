import getters from './getter.js';

const state = {
    isLogin: false,
    fabuinfo: [] ,
    username: '',
    curindex: 0,

    // my  isLogin
    fabunum: 99,
    colnum: 99,
    buynum: 99,


};

const mutations = {
        hasLogin:(state) => {
            state.isLogin = true;
            console.log(`登录状态：`+state.isLogin)
        },
        noLogin:(state) => {
            state.isLogin = false;
            console.log('登录状态' + state.isLogin)
        },
        setUsername:(state, username ) =>{
            state.username  = username;
            console.log('用户名：'+ state.username)
        },
        setCurindex:(state,index) =>{
            state.curindex = index;
            console.log('curindex:' + state.curindex )
        },
        setUserinfo: (state, userinfo) =>{
            // window.localStorage.setItem('useravatar',userinfo.avatar);
            state.userinfo = userinfo;
            console.log(state.userinfo)

        }

};

export default{
    getters,
    state,
    mutations
}
