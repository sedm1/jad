<template>
  <section class="mainScreen">
    <div class="container">
        <div class="main__banner"><img src="@/assets/img/MinaFilm.jpg" alt="MainFilm"></div>
        <h1 class="main__title">15 лучших фильмов про мафию</h1>
        <ul class="films">
            <li class="films__item"
            v-for="film in this.films"
            :key="film.id"
            >
                <a :href="film.link">{{film.title}}</a>
            </li>
        </ul>
    </div>
  </section>
</template>
<script>
export default {
    name: "MainScreen",
    data: function(){
        return {
            films: [
                {
                    id: 1,
                    title: "Крёстный отец",
                    link: "https://google.com"
                },
                {
                    id: 2,
                    title: "Лицо со шрамом",
                    link: "https://google.com"
                },
                {
                    id: 3,
                    title: "Однажды в Америке",
                    link: "https://google.com"
                },
                {
                    id: 4,
                    title: "Неприкасаемые",
                    link: "https://google.com"
                },
                {
                    id: 5,
                    title: "Славные парни",
                    link: "https://google.com"
                },
                {
                    id: 6,
                    title: "Бронкская история",
                    link: "https://google.com"
                },
                {
                    id: 7,
                    title: "Путь Карлито",
                    link: "https://google.com"
                },
                {
                    id: 8,
                    title: "Криминальное чтиво",
                    link: "https://google.com"
                },
                {
                    id: 9,
                    title: "Казино",
                    link: "https://google.com"
                },
                {
                    id: 10,
                    title: "Донни Браско",
                    link: "https://google.com"
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/vars.sass"
.main__banner
    border-radius: 20px
.main__title
    margin-top: 50px
    text-align: center
.films
    margin-top: 30px
    &__item
        font-size: 20px
        font-weight: 40
        color: $mainText
        margin-bottom: 5px
        letter-spacing: 0.02em
        list-style: none
        &:last-child
            margin-bottom: 0px
</style>