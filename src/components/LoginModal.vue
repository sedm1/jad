<template>
    <transition name="fade">
        <div class="modalBg" v-if="showModal">
            <div class="modalWindow">
                <button class="closeModal" @click="ShowModal"><img src="@/assets/img/Close.svg" alt="Close"></button>
                <h2 class="modal__title">Войти</h2>
                <form action="">
                    <div class="form__item">
                        <p class="form__item-title">Логин</p>
                        <input type="text" class="form__item-input" placeholder="Введите логин">
                    </div>
                    <div class="form__item">
                        <p class="form__item-title">Пароль</p>
                        <input type="password" class="form__item-input" placeholder="Введите пароль">
                    </div>
                    <button class="form__button">Войти</button>
                </form>
            </div>
        </div>
</transition>
</template>

<script>
export default {
    name: "LoginModal",
    data: function(){
        return {
            showModal: false
        }
    },
    methods: {
        ShowModal(){
            this.showModal = !this.showModal
        }
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/modal.sass"
</style>