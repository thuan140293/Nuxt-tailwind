<template>
  <div>
    <nav-bar-component />
    <div class="container mx-auto p-10">
      <Nuxt />
    </div>
    <footer-component />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default {
  components:{
    'nav-bar-component': Navbar,
    'footer-component': Footer
  },
  data(){
    return{
    }
  }
}
</script>