import Cookie from 'js-cookie'

const SET_USER_ID = (state, payload) =>{
    state.userId = payload;
    Cookie.set("userId", state.userId.uid);
}

const SET_TOKEN = (state, payload) =>{
    var date = new Date();
    var minutes = 60;
    var expires = date.setTime(date.getTime()+(minutes*60*1000));
    state.accessToken = payload;
    Cookie.set("accessToken", state.accessToken)
    Cookie.set("expireTime", expires);
}

const SET_CURRENT_USER = (state, payload) =>{
    state.currentUser.displayName = payload.displayName;
    state.currentUser.email = payload.email;
    state.currentUser.emailVerified = payload.emailVerified;
    state.currentUser.phoneNumber = payload.phoneNumber;
    state.currentUser.photoURL = payload.photoURL;
}

export default{
    SET_USER_ID,
    SET_TOKEN,
    SET_CURRENT_USER
}