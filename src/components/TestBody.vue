<template lang="">
  <div class="display-flex width-100vw">
    <div :class="leftDivClasses[flag]">
    <!-- flag값은 0과 1의 둘 중 하나를 가지게 됩니다. -->
    <!-- flag가 0인 경우에는 아래 script의 data에 정의된 leftDivClasses배열에서 첫번째 클래스 리스트를 가져오게 되고 -->
    <!-- flag가 1인 경우에는 아래 script의 data에 정의된 leftDivClasses배열에서 두번째 클래스 리스트를 가져오게 됩니다. -->
    <!-- 배열의 index는 첫번째 값이 0이고 두번째 값이 1, 세번째 값이 2, 이렇게 사용됩니다. -->
    <!-- div내에서 사용되는 class앞에는 세미콜론(:class)을 사용해야만 script내에서 정의한 자바스크립트 변수를 인식하게 됩니다. -->
      <v-icon @click="divSlide">
        mdi-pencil
      </v-icon>
      <!--위의 @click에서 마우스 클릭이벤트를 listen합니다.-->
      <!--클릭이 발생하게 되면 divSlide메소드가 호출되는데 이 메소드는 script내의 methods안에 구현되어 있습니다.-->
      <!--위의 mdi-pencil은 다른 mdi icon으로 버꾸시면 됩니다.-->
    </div>
    <div :class="rightDivClasses[flag]">
      right div
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: 0,
      leftDivClasses: [
        'width-half background-yellow text-align-right margin-left-minus transition',
        'width-half background-yellow text-align-right margin-left-zero transition'
      ],
      // leftDivClasses는 배열로서 위의 template에서 사용됩니다.
      // 이 배열에는 2개의 요소값이 정의되어 있으며 첫번째(index=0)값은 왼쪽 div가 좌측으로 밀리게 되는 모양을 만들게 되고
      // 두번째(index=1)값은 왼쪽 div가 우측으로 밀고 나오는 모양을 만들게 됩니다.
      // 여기에서 클래스를 추가 또는 변경하시면 됩니다.
      // 위에서 사용하고 있는 클래스는 @/assets/styles/default.css와 아래 하단부의 style에서 정의되어 있습니다.
      rightDivClasses: [
        'background-blue width-100vw font-white font-size-2',
        'background-blue width-100vw font-white font-size-3'
      ],
      // rightDivClasses는 배열로서 위의 template에서 사용됩니다.
      // 이 배열에는 2개의 요소값이 정의되어 있으며 첫번째(index=0)값은 오른쪽 div 내부에 있는 폰트크기가 20px로 작아지고
      // 두번째(index=1)값은 오른쪽 div가 우측으로 밀리면서 내부 폰트크기가 30px로 커집니다.
      // 여기에서 클래스를 추가 또는 변경하시면 됩니다.
      // 위에서 사용하고 있는 클래스는 @/assets/styles/default.css와 아래 하단부의 style에서 정의되어 있습니다.
    }
  },
  methods: {
    divSlide() { 
      // 이 메소드는 flag값을 0과 1값 사이에서 토글해주는 기능을 합니다.
      // flag 변수는 위의 data()안에서 정의되어 있으며 참조할 때는 항상 this를 붙여야 합니다.
      // this.flag = !this.flag
      console.log('divSlide 클릭', this.flag)
      if(this.flag == 1){
        this.flag = 0 // 현재 flag값이 1이면 0으로 바꾸어 주고
      } else {
        this.flag = 1 // 현재 flag값이 0이면 1으로 바꾸어 줍니다.
      }
    }
  }
}
</script>

<style>
  .margin-left-minus {
    margin-left: -40%
  }
  .margin-left-zero {
    margin-left: 0%
  }
  .transition {
    transition: all 0.5s
  }
  .width-100vw {
    width: 100vw
  }
  .width-half {
    width: 50%
  }
  .font-size-2 {
    font-size: 2.0rem
    /* font-size는 2.0rem으로서 @/assets/styles/default.css에서 첫번째 라인에서 정의된 font-size가 10px이므로 픽셀로 환산하면 20px(= 10 * 2.0)입니다. */
    /* 기준 폰트값을 변경하면 여기에서 정의한 폰트크기를 변경하지 않더라도 같은 비율로 변경됩니다. */
  }
  .font-size-3 {
    font-size: 3.0rem
  }
</style>