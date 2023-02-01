import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      ovnerName : 'Екатерина Рахилина',
      email: 'rakhilina@gmail.com',
      sections : [
        'Curriculum vitae',
        'Публикации',
        'Галерея',
        'Видео',
        'Контакты'],
      sectionIcon : [
        'briefcase-solid',
        'book-solid',
        'images-regular',
        'circle-play-regular',
        'address-book-regular'
      ],
      lang: ['ru', 'eng'],
      shortBio : [
        'доктор филологических наук (2000)',
        'профессор Школы лингвистики Национального исследовательского университета Высшая школа экономики',
        'ведущий научный сотрудник отдела лингвистического источниковедения и истории русского литературного языка Института русского языка РАН',
        'член редколлегии журнала «Вопросы языкознания»',
        'член экспертного совета Высшей аттестационной комиссии при Министерстве образования и науки Российской Федерации по филологии и искусствоведению'
      ]
    }
  },
  getters : {

  },
  mutations : {

  },
  actions : {

  }

})

export default store