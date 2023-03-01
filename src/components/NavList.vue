<template lang="">
  <div>
    <div
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
    <!-- 전체 메뉴를 하나의 div으로 감싸서 메뉴내부와 메뉴외부를 구분할 수 있습니다. -->
    <!-- 메뉴내부와 외부를 구분하는 이유는 메뉴 내부에 마우스가 올라왔는지를 검사하기 위한것입니다. -->
    <!-- 메뉴내부에 마우스가 올라가게 되면 mouseover이벤트가 발생하게 되고 이벤트발생 즉시 mouseOver 메소드를 호출하게 됩니다. -->
    <!-- mouseOver 메소드는 하단 script의 methods 내부에서 구현하고 있습니다. -->
    <!-- 메뉴외부로 마우스가 나가게 되면 mouseleave이벤트가 발생하게 되고 이벤트발생 즉시 mouseLeave 메소드를 호출하게 됩니다. -->
    <!-- mouseLeave 메소드 또한 하단 script의 methods 내부에서 구현하고 있습니다. -->

      <v-list dense>
        <v-list-item
          v-for="item, idx in menuList"
          :key="idx"
          link
          style="padding:0px"
        >
        <!-- v-for는 배열의 아이템을 하나씩 꺼내서 사용하는 문법입니다. -->
        <!-- v-for에서 가장 먼저 사용되는 item(변수명으로서 다른 이름으로 바꿔도 됩니다)은 배열에서 꺼낸 값입니다. -->
        <!-- v-for에서 두번째로  사용되는 idx(배열번호로서 0부터 시작합니다)는 주로 키의 값으로 사용하면 무난합니다. -->
        <!-- v-for 바로 밑에 :key에 바인딩된 것이 바로 v-for에서 꺼낸 배열의 번호입니다. -->
        <!-- style은 class로 구현해도 됩니다. -->
          <v-list-item-content>
            <v-list-item-title>
              <span>
                <v-icon>
                  {{ item.icon }}
                </v-icon> 
                <router-link :to="item.route">{{ item.title }}</router-link>
              </span>
            </v-list-item-title>
            <div v-show="mouseHover">
              <!-- v-show는 v-if와 비슷한 기능을 합니다. -->
              <!-- v-show에 바인딩된 값이 True이면 v-show로 묶인 element가 화면에 나타나게 되고 false이면 화면에 보이지 않게 됩니다. -->
              <!-- mouseOver와 mouseLeave 메소드가 mouseHover값을 토글시키는 기능을 함으로써 메뉴가 collapse될때는 서브메뉴가 사라지게 되고 -->
              <!-- expand될때는 서브메뉴가 나타나게 되는것입니다. -->
              <v-list-item
                v-for="subMenu in item.subMenus"
                :key="subMenu.title"
                link
              >
              <!-- 이부분에서 서브메뉴가 나타나게 됩니다. -->
              <!-- v-for를 사용함로써 서브메뉴 배열에 데이타가 존재하는 경우에만 작동하게 됩니다. -->
              <!-- 서브메뉴가 없으면 v-show와 상관없이 나타나지 않고 작동하지 않습니다. -->
              <!-- 여기에서는 subMenu(배열의 값) 바로뒤에 idx를 사용하지 않았습니다. 사용하지 않아도 됩니다. -->
                <v-list-item-content>
                  <v-list-item-title>
                    <span>
                      <router-link :to="subMenu.route">{{ subMenu.title }}</router-link>
                      <!-- 위와 같이 스크립트의 연산결과 도출한 값을 dom에 바로 표시하는 방식은 수염괄호를 두번사용하면 됩니다({{ 값 }} <= 이런식) -->
                    </span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script>
import menuList from "@/assets/data/menuList.json"
// 메뉴를 별도의 json파일로 만들어서 관리하도록 하였습니다.
// 코딩한 내용을 수정하지 않고도 json파일만 수정하면 메뉴가 변경되도록 하여 코드유지보수 비용을 절감시킬수 있습니다.
// json파일은 방법은 있지만 주석사용이 까다로워서 주석을 사용하지 않았습니다.
// 메뉴에 대한 json파일의 구조에 대해서는 노션에서 별도로 설명하고 있습니다.
// https://www.notion.so/assets-data-menuList-json-fc584cd7c1374764a99b498c0ac50e07
export default {
  data() {
    return {
      menuList,
      // 위에서 import한 menuList.json을 등록하였습니다.
      // 이제 스크립트 내부에서는 this.menuList로 참조가 가능하고 template에서는 this없이 menuList만으로 참조가 가능해졌습니다.
      mouseHover: false
      // mouseOver와 mouseLeave 메소드가 관리하는 마우스의 메뉴에 대한 hovering상태의 toggle값(boolean)값입니다.
      // 이 값이 true이면 메뉴가 펼쳐진 상태이고 이 값이 false이면 메뉴가 움츠러든 상태입니다.
      // 메뉴가 움츠러들었을때에는 서브메뉴도 사라지게 됩니다.
    }
  },
  created() {
    console.log(this.menuList, 'this.menuList')
    // 이 부분은 의미는 없습니다. 
    // created는 이 파일이 생성되는 시점에 발생하는 hook의 한 종류인데 단어 뜻 그대로입니다.
    // 이 파일이 실행될때 json 파일로 만들어진 메뉴리스트를 콘솔에서 확인하기 위한 목적입니다.
    // 개발이 완료되면 주석처리하거나 삭제하면 됩니다.
  },
  methods: {
    mouseOver() {
      console.log('mouse over...')
      if (!this.mouseHover) this.mouseHover = !this.mouseHover
      // 마우스가 메뉴를 감싸고 있는 div의 상단으로 올라가게 되면 mouseHover값을 toggle(truie로 만듬)시키게 됩니다.
    },
    mouseLeave() {
      console.log('mouse leave...')
      if (this.mouseHover) this.mouseHover = !this.mouseHover
      // 마우스가 메뉴를 감싸고 있는 div의 바깥으로 나가게 되면 mouseHover값을 toggle(false로 만듬)시키게 됩니다.
    }
  }
}
</script>
<style lang="">
  
</style>