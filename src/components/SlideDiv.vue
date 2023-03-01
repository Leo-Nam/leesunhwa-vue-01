<template lang="">
  <div>
    <NewAppBar />
    <v-main>
      <TestBody/>
    </v-main>
  </div>
</template>
<script>
import NewAppBar from '@/components/NewAppBar.vue'
import TestBody from '@/components/TestBody.vue'
export default {

components: {
  // HelloWorld,
  // OriginAppBar,
  NewAppBar,
  TestBody,
},
  
}
</script>
<style lang="">
  
</style>