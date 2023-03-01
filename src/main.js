import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// 라우터를 설치하면 이부분에서 라우터를 import합니다.
// import 대상은 라우터를 관리하는 파일이 저장된 폴더의 이름입니다.
// 보통 router라는 이름으로 사용합니다.
import vuetify from './plugins/vuetify'
// vuetify를 사용하려면 위와 같이 vuetify가 import되어 있어야 합니다.
// vuetify는 터미널에서 vue add vuetify를 실행하면 자동으로 이곳에서 추가됩니다.
// vuetify가 추가되면 아래 하단부 new Vue내부에도 vuetify가 등록되게 됩니다.

Vue.config.productionTip = false

require('@/assets/styles/default.css')
// css style은 이렇게 하나의 파일로 묶어서 여기에서 불러들여도 됩니다.
// 또는 public 폴더내에 있는 index.html에다가 link를 불러들여도 같은 효과가 있습니다.
// 개별 component별로 최적화된 css파일을 만든후에 해당 컴포넌트의 style내부에서 import명령어로 불러들여도 됩니다.

new Vue({
  router,
  // 라우터를 등록하는 부분입니다. 아래에는 뷰티파이가 등록되어 있네요
  vuetify,
  render: h => h(App)
}).$mount('#app')
