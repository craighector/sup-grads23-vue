import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import loading from 'vuejs-loading-screen'

Vue.config.productionTip = false

// your i18n setup
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      loading: 'Loading...'
    }
  },
  km: {
    message: {
      loading: 'កំពុងដំណើរការ...'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

// config loading plugins
Vue.use(loading, {
  bg: '#41b883ad',
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> ${ i18n.t('message.loading') }</h3>
    </div>
  `,
})

new Vue({
  render: h => h(App),
}).$mount('#app')

