<template>
  <section class="filmDescript">
    <div class="container">
        <h2 class="filmDescript__title">Крёстный отец</h2>
        <p class="filmDescript__descript">Эпос <a href="#"> Френсиса Форда Копполы</a> рассказывает о мафиозной семье Корлеоне. Глава клана дон Вито, которого все зовут Крёстным отцом, выдаёт замуж свою дочь. В то же время его любимый сын Майкл возвращается домой после войны. Последний не желает иметь ничего общего с тёмными делами отца. Однако покушение на Вито Корлеоне меняет всё.</p>
        <p class="filmDescript__descript">«Крёстный отец» считается не только образцовым гангстерским фильмом, но и примером одной из самых пронзительных трансформаций персонажа за всю историю кинематографа.</p>
        <ul class="ratings">
            <li class="ratings__item">США, Италия, 1972 год.</li>
            <li class="ratings__item">Эпическая гангстерская драма.</li>
            <li class="ratings__item">Длительность: 175 минут.</li>
            <li class="ratings__item">IMDb: 9,2.</li>
        </ul>
        <div class="film__banner"><img src="@/assets/img/MinaFilm.jpg" alt="MinaFilm"></div>
        <div class="table">
            <div class="table__item">
                <div class="item__column">Мисс Марвел</div>
                <div class="item__column">США</div>
                <div class="item__column">2022</div>
                <div class="item__column">Фантастика</div>
            </div>
            <div class="table__item">
                <div class="item__column">Медленные лошади</div>
                <div class="item__column">США</div>
                <div class="item__column">2022</div>
                <div class="item__column">Детектив</div>
            </div>
            <div class="table__item">
                <div class="item__column">Тёмные ветра</div>
                <div class="item__column">США</div>
                <div class="item__column">2022</div>
                <div class="item__column">Триллер</div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "FilmDescript"
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.container
    background: $white
    padding: 37px 40px
    padding-bottom: 57px
    backdrop-filter: blur(35px)
    border-radius: 26px
.filmDescript
    margin-top: 30px
    
    &__title
        text-align: center
        margin-bottom: 4px
    &__descript
        font-size: 18px
        font-weight: 400
        margin-top: 30px
        color: $mainText
        a
            color: $purpleLinks
.ratings
    margin-top: 30px
    padding-left: 20px
    &__item
        margin-bottom: 5px
        &:last-child
            margin-bottom: 0px
.film__banner
    border-radius: 25px
    width: 85%
    margin: 0 auto
    margin-top: 30px
.table
    margin-top: 50px
    background: $blue
    padding: 25px 30px
    border-radius: 20px
    &__item
        padding: 25px 0px
        +flexa 
        justify-content: space-between
        border-bottom: 1px solid $white
        .item__column
            max-width: 25%
            width: 100%
            color: $white
            &:first-child
                color: $purple2
        &:last-child
            border-bottom: 0px
@media screen and ( max-width:  $MainContainer)
    .container
        padding: 25px 20px
    .film__banner
        width: 100%
    .table
        &__item
            flex-wrap: wrap
            .item__column
                max-width: 50%
                text-align: center
                margin-bottom: 15px
@media screen and ( max-width:  400px)
    .filmDescript__descript
        font-size: 16px
        margin-top: 15px
    .table
        &__item
            .item__column
                max-width: 100%
</style>