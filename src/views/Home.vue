<template>
  <div class="home">
    <div class="page-cover" v-if="isShow" @click="showMenu"></div>
    <vHeader :isShow="isShow">
      <template v-slot:left>
        <i @click="showMenu">菜单</i>
      </template>
      全部
    </vHeader>
    <vSildeBar :isShow="isShow" />
    <vList :datas="listData" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters , mapActions } from 'vuex';
import vList from "@/components/List.vue";

export default {
  name: "home",
  components: {
    vList
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    // this.$store.dispatch('setList')
    this.setList()
  },
  // computed: mapState({
  //   listData: state => state.list.alllist
  // }),
  computed: mapGetters('list',{
    listData: 'getlist'
  }),
  methods: {
    ...mapActions('list',['setList']),
    showMenu() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
