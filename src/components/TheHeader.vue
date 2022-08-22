<template>
  <header>
    <div class="container">
        <div class="logo"><img src="@/assets/img/logo.svg" alt="logo"></div>
        <div class="header__buttons">
            <button class="header__button" id="logIn" @click="openLoginWindow">Вход</button>
            <button class="header__button" id="registraition" @click="openRegModal">Регистрация</button>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "TheHeader",
    methods: {
        openLoginWindow(){
            this.$emit("openLoginWindow")
        },
        openRegModal(){
            this.$emit("openRegModal")
        }
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
header
    padding-top: 69px
.container
    +flexa 
    justify-content: space-between
.logo
    width: 137px
.header__button
    padding: 10px 30px
    color: $white
    font-weight: 600
    font-size: 14px
    backdrop-filter: blur(17px)
    border-radius: 25px
    background: $purple2
    &:first-child
        margin-right: 20px
</style>