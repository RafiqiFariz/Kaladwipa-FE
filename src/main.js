import {createApp, markRaw} from 'vue';
import App from './App.vue';
import router from './router/index.js';
import {IonicVue} from '@ionic/vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// import Vueform from '@vueform/vueform/plugin';
// import vueformConfig from './../vueform.config';
import './axios.js';
import 'flowbite';

/* TailwindCSS */
import './styles/index.scss';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const pinia = createPinia();

pinia.use(({store}) => {
  store.router = markRaw(router);
});

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(pinia);

app.config.globalProperties.$filters = {
  rupiah(value) {
    return parseInt(value).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })
  },
  formatNumber(value) {
    return parseInt(value).toLocaleString('id-ID');
  },
  truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
}

router.isReady().then(() => {
  app.mount('#app');
});