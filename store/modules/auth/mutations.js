import Cookie from 'js-cookie'

const SET_USER = (state, payload) =>{
    state.user = payload;
    Cookie.set("userId", state.user.uid);
}

const SET_TOKEN = (state, payload) =>{
    state.accessToken = payload;
    Cookie.set("accessToken", state.accessToken, { expires: 3600 });
}

export default{
    SET_USER,
    SET_TOKEN
}