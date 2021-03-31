import Cookie from 'js-cookie';

export default function ({ store, route, redirect }) {
  var token = Cookie.get("accessToken");
  if (!store.state.accessToken && token) {
    redirect("/")
  }
}