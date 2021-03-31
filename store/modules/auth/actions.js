import firebase from 'firebase';
import Cookie from 'js-cookie';

async function register(context, { email, password }){
    let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return response;
}

async function login(context, { email, password }){
    let response = await firebase.auth().signInWithEmailAndPassword(email, password);
    if(response && response.user){
        var accessToken = await response.user.getIdToken(true);
    }
    context.commit("SET_USER_ID", response.user);
    context.commit("SET_TOKEN", accessToken);
    return response;
}

async function logout(context, request){
    let response = await firebase.auth().signOut();
    Cookie.remove("accessToken");
    Cookie.remove("userId");
    Cookie.remove("expireTime");
    return response;
}

async function getCurrentUser(context, request){
    let response = await firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            context.commit("SET_CURRENT_USER", user);
        } 
    });
    return response;
}

export default{
    register,
    login,
    logout,
    getCurrentUser
}