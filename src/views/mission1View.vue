<template lang="">
  <div>
    <TestBody />
    <!-- TestBody는 컴포넌트로서 아래 script에서 import해야 하고 components에 등록되어야 합니다(Vue2 문법임, Vue3는 다릅니다.).-->
    <!-- TestBody에 div 슬라이드 기능이 구현되어 있습니다. -->
  </div>
</template>
<script>
import TestBody from '@/components/TestBody.vue';
export default {
  components: {
    TestBody
  }
}
</script>
<style lang="">
  
</style>