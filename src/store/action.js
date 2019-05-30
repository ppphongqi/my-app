

export default{
    hasLogin:({ commit }) => {
        if(window.localStorage.getItem('username') != null && window.localStorage.getItem('password') != null ){
            commit('hasLogin')
        }else{
            console.log('没有登录')
        }
    },
    noLogin:({ commit }) => {
        if(window.localStorage.getItem('username') == null && window.localStorage.getItem('password') == null ){
            commit('noLogin')
        }
    },
    setUsername: ({ commit } , username) => {
        commit('setUsername',username )
    },
    setCurindex:({ commit },index) => {
        commit('setCurindex',index)
    },
    setUserinfo: ({commit}, userinfo) =>{
        commit('setUserinfo', userinfo)
    }



}
