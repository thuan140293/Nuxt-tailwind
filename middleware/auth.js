import Cookie from 'js-cookie';

export default function ({ store, route, redirect }) {
    var token = Cookie.get("accessToken");
    var expires = Cookie.get("expireTime");
    if (!store.state.accessToken && !token) {
      redirect('/login')
    }
    if (store.state.accessToken && token) {
      redirect('/')
    }
    if (expires < 1000){
      window.alert("Your token is expired")
    }
}