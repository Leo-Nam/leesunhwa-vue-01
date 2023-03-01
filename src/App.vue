<template>
  <v-app>
    <NewAppBar class="container"/>
    <!-- NewAppBar 컴포넌트는 @/components에 정의되어 있습니다.-->
    <!-- 이 컴포넌트를 사용하기 위해서는 script에서 import하여야 하고 components에 등록을 해야 합니다.(Vue2문법임).-->
    <!-- container 클래스는 @/assets/styles/default.css에 정의되어 있습니다.-->
    <!-- 이 컴포넌트 현재의 과제에서는 의미가 없는 부분입니다. 그래서 NewAppBar.vue내부에는 별도의 주석이 없습니다. -->
    <router-link to="/mission1">mission1</router-link> | 
    <router-link to="/mission2">mission2</router-link> | 
    <router-link to="/mission3">mission3</router-link>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NewAppBar from '@/components/NewAppBar.vue'
// import TestBody from '@/components/TestBody.vue'
// 위의 template내부에서 사용할 컴포넌트들은 import를 해야 합니다.(vue2 문법, vue3는 다름)

export default {
  name: 'App',

  components: {
    // TestBody,
    NewAppBar
    // 위에서 import한 컴포넌트는 이곳에서 등록이 되어야 합니다.(이것 또한 vue2문법임)
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
