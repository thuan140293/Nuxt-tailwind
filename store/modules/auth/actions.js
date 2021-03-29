import firebase from 'firebase'

async function register(context, { email, password }){
    let response = firebase.auth().createUserWithEmailAndPassword(email, password);
    return response;
}

export default{
    register
}