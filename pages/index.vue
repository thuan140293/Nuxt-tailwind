<template>
  <div>
    <div class="grid grid-cols-3 gap-4 my-5">
      <form>
        <input-component :type="searchType" :placeholder="searchPlaceholder" :classes="classesInput" @onChanged="handleSearch" />
      </form>
      <form>
        <select-component :placeholder="selectPlaceholder" :options="dummyData.SELECT_ITEMS" :classes="classesSelect" @filterChanged="handleFilter"/>
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
import auth from '../middleware/auth';
export default {
  middleware: auth,
  components:{
    'card-component': Cards,
    'pagination-component': Pagination,
    'input-component': Input,
    'select-component': Select
  },
  data(){
    return{
      hasMorePages: true,
      classesInput : 'w-full border-2 border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 p-3 rounded h-10',
      classesSelect: 'form-select block w-full border-2 border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 p-1 rounded h-10',
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
      this.$store.dispatch("home/filter", event);
      this.$store.dispatch("home/getPaginateCards");
    }
  }
}
</script>

