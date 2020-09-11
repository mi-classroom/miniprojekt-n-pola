<template>
  <div id="app">
    <Header v-if="!isMobile()" />
    <HeaderMobile v-else @toggleAll="toggleAccordion" />
    <router-view ref="viewContent" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import router from '@/router';
import Header from '@/components/Header.vue';
import HeaderMobile from '@/components/HeaderMobile.vue';
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  name: 'App',
  components: {
    Header,
    HeaderMobile
  },
  computed: {
    ...mapState({
      open: (state) => state.modalOpen,
      languages: (state) => state.availableLanguages
    }),
  },
  methods: {
    ...mapActions(['closeModal', 'modalPrevImage', 'modalNextImage', 'setLang']),
    toggleAccordion() {
      this.$refs.viewContent.toggleAll();
    }
  },
  created() {
    if (!this.$route.params.lang || this.$route.params.lang === 'index.html') {
      router.push('/de');
      this.setLang(this.languages.de);
    } else {
      const currentLang = this.$route.params.lang.replace('/', '');
      if (this.languages[currentLang]) { this.setLang(this.languages[currentLang]); } else {
        router.push('/de');
        this.setLang(this.languages.de);
      }
    }
    window.addEventListener('keyup', (e) => {
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
@import "@/styles/main";
</style>
