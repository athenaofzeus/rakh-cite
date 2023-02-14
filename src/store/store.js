import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      ovnerName : 'Екатерина Рахилина',
      email: 'rakhilina@gmail.com',
      sections : {
        'Curriculum vitae' : 'briefcase-solid',
        'Публикации' : 'book-solid',
        'Галерея' : 'images-regular',
        'Видео' : 'circle-play-regular',
        'Контакты' : 'address-book-regular',
        'Проекты' : 'network-wired-solid'
      },
      sectionsLength : 0,
      lang: ['ru', 'eng'],
      shortBio : [
        'доктор филологических наук (2000)',
        'профессор Школы лингвистики Национального исследовательского университета Высшая школа экономики',
        'ведущий научный сотрудник отдела лингвистического источниковедения и истории русского литературного языка Института русского языка РАН',
        'член редколлегии журнала «Вопросы языкознания»',
        'член экспертного совета Высшей аттестационной комиссии при Министерстве образования и науки Российской Федерации по филологии и искусствоведению'
      ],
      tagInterests : [
        'общая семантика',
        'конструкции',
        'теория Грамматика конструкций',
        'лексикология',
        'лексикография',
        'русский язык',
        'корпусная лингвистика',
        'компьютерная лингвистика',
        'лексическая типология'
      ],
      listMenuShown: false,
      menuVisib: false,
      width: window.innerWidth,
    }
  },
  getters : {
  },
  mutations : {
    changeMenuState(state) {
      state.listMenuShown = !state.listMenuShown
    },
    getLength (state) {
      state.sectionsLength = Object.keys(state.sections).length
    }
  },
  actions : {
    changeMenuState( {commit} ) {
      commit('changeMenuState')
    },
    getLength ({commit}) {
      commit('getLength')
    }
  }
})

export default store