<template>
  <div>
    <div class="grid grid-cols-3 gap-4 my-5">
      <form>
        <input-component :type="searchType" :placeholder="searchPlaceholder" @searchChanged="handleSearch" />
      </form>
      <form>
        <select-component :placeholder="selectPlaceholder" :options="dummyData.SELECT_ITEMS" @filterChanged="handleFilter"/>
      </form>
    </div>
    <div class="my-5">
      <card-component v-if="paginateCards.length > 0" :dataCard="paginateCards" />
      <h2 v-else>Loading..</h2>
    </div>
    <div class="max-w-lg mx-auto my-12">
      <pagination-component v-if="paginateCards.length > 0" :total-pages="paginateCards.totalPages" :total="state.total" :per-page="state.params.limit" :current-page="state.params.page" :has-more-pages="hasMorePages" @pagechanged="showMore" />
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import Input from '../components/Input';
import Select from '../components/Select';
import dummyData from '../commons/dummys';
import { mapState, mapGetters } from "vuex";
export default {
  components:{
    'card-component': Cards,
    'pagination-component': Pagination,
    'input-component': Input,
    'select-component': Select
  },
  data(){
    return{
      hasMorePages: true,
      searchPlaceholder: 'Search here...',
      searchType: 'text',
      selectPlaceholder: 'Select',
      dummyData
    }
  },
  computed: {
    ...mapState({
      state: state => state.home,
    }),
    ...mapGetters({
      paginateCards: "home/getPaginateCards",
      allCards: "home/getAllCards",
    })
  },
  created() {
    this.$store.dispatch("home/getAllCards");
    this.$store.dispatch("home/getPaginateCards");
  },
  methods:{
    redirectTo: function (path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
    showMore(page) {
      this.state.params.page = page;
      this.$store.dispatch("home/getAllCards");
      this.$store.dispatch("home/getPaginateCards");
    },
    handleSearch(event){
      this.$store.dispatch("home/search", event);
      this.$store.dispatch("home/getPaginateCards");
    },
    handleFilter(event){
      console.log(event);
      this.$store.dispatch("home/filter", event);
      this.$store.dispatch("home/getPaginateCards");
    }
  }
}
</script>

