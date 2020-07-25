<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import router from '@/router';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapState({
      open: (state) => state.modalOpen,
    }),
  },
  methods: {
    ...mapActions(['closeModal', 'modalPrevImage', 'modalNextImage'])
  },
  created() {
    if (!this.$route.params.lang) { router.push('/de'); }
    window.addEventListener('keyup', (e) => {
      console.log(e.key);
      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight' && this.open) {
        this.modalNextImage();
      } else if (e.key === 'ArrowLeft' && this.open) {
        this.modalPrevImage();
      }
    });
  },
};
</script>

<style lang="scss">
  @import '@/styles/main';
</style>
