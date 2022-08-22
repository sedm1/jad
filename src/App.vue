<template>
  <div>
    <LoginModal ref="LoginModal"></LoginModal>
    <RegModal ref="RegModal"></RegModal>
    <TheHeader
    @openLoginWindow="openLoginWindow"
    @openRegModal="openRegModal"
    ></TheHeader>
    <main>
      <MainScreen></MainScreen>
      <FilmDescript></FilmDescript>
    </main>
    <footer>
      <div class="copy">
        Copyright © Event-u All rights reserved
      </div>
    </footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import MainScreen from './components/MainScreen.vue';
import FilmDescript from './components/FilmDescript.vue';
import LoginModal from './components/LoginModal.vue';
import RegModal from './components/RegModal.vue';
export default {
    name: "App",
    components: { TheHeader, MainScreen, FilmDescript, LoginModal, RegModal },
    methods: {
      openLoginWindow(){
        this.$refs.LoginModal.ShowModal()
      },
      openRegModal(){
        this.$refs.RegModal.ShowModal()
      }
    }
}
</script>

<style lang="sass">
@import "@/assets/sass/main.sass"
main
  margin-top: 50px
footer
  margin-top: 50px
  padding-bottom: 20px
.copy
  text-align: center
  font-weight: 400
  font-size: 18px
</style>
