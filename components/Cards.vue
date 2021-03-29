<template>
    <div>
        <div class="md:flex space-x-4 cursor-pointer">
            <div class="flex-1 bg-white rounded-xl shadow-md" v-for="(item, index) in dataCard" :key="index" @click="openModalCardDetail(item)">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover w-100" :src="item.url" alt="images">
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-cyan-500 font-semibold">{{ item.category ? item.category : '' }}</div>
                    <a href="javascript:;" class="block mt-1 text-lg leading-tight font-medium text-gray-800 hover:underline">{{ item.title ? item.title : '' }}</a>
                    <p class="mt-2 text-gray-500">{{ item.content ? item.content : '' }}</p>
                </div>
            </div>
        </div>
        <modal-component :isShowing="state.detailModal" :dataModal="dataModal"/>
    </div>
</template>

<script>
import Modal from '../components/Modal'; 
import { mapState, mapGetters } from "vuex";
export default {
    data(){
        return{
            dataModal: ''
        }
    },
    computed: {
        ...mapState({
            state: state => state.home,
        }),
        ...mapGetters({
        })
    },
    components:{
        'modal-component': Modal
    },
    methods:{
        openModalCardDetail(item){
            this.dataModal = item;
            this.$store.dispatch("home/openDetailModal");
        }
    },
    props: ['dataCard']
}
</script>