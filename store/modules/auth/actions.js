import firebase from 'firebase';
import Cookie from 'js-cookie';

async function register(context, { email, password }){
    let response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return response;
}

async function login(context, { email, password }){
    let response = await firebase.auth().signInWithEmailAndPassword(email, password);
    if(response && response.user){
        var accessToken = await response.user.getIdToken();
    }
    console.log(response.user.refreshToken);
    context.commit("SET_USER", response.user);
    context.commit("SET_TOKEN", accessToken);
    return response;
}

async function logout(context, request){
    let response = await firebase.auth().signOut();
    Cookie.remove("accessToken");
    Cookie.remove("userId");
    return response;
}

export default{
    register,
    login,
    logout
}