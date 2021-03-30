import firebase from 'firebase'

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

export default{
    register,
    login
}