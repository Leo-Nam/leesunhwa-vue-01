<template>
  <div>
    <v-app-bar
      temporary
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <div
        @mouseover="mouseOver"
      >
        <v-btn v-for="menu, idx in menuList" :key="idx" icon class="margin-left-2rem">
          <!-- <router-link to="subMenuList">
            <span class="font-white">{{ menu.title }}</span>
          </router-link> -->
          <span class="font-white">{{ menu.title }}</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <NavList />
    </v-navigation-drawer>
    <SubMenuList 
      :subMenus="subMenus"
      :mouseHoverEffect="mouseHoverEffect[mouseHover]"
      :mouseHover="mouseHover"
      @mouseLeave="mouseLeave"
    />
  </div>
</template>
<script>
import menuList from "@/assets/data/menuList.json"
import SubMenuList from '@/components/SubMenuList'
import NavList from './NavList.vue';
export default {
  components: {
    NavList,
    SubMenuList
  },
  data() {
    return {
      mouseHover: 0,
      menuList,
      subMenus: [],
      drawer: false,
      group: null,
      appBarMenuList: [
        {
          title: 'mission1',
          route: '/mission1'
        },
        {
          title: 'mission2',
          route: '/mission2'
        },
        {
          title: 'mission3',
          route: '/mission3'
        },
      ],
      mouseHoverEffect: [
        'margin-right-minus transition',
        'margin-right-0 transition'
      ]
    }
  },
  watch: {
    subMenus() {
      return this.subMenus
    }
  },
  created() {
    console.log(this.menuList, 'ths.menuList created...')
    this.subMenus = this.menuList.map(v => v.subMenus)
    console.log(this.subMenus, 'ths.subMenus created...')
  },
  methods: {
    mouseOver() {
      console.log('mouse over...')
      if (this.mouseHover == 0) this.mouseHover = 1
      // 마우스가 메뉴를 감싸고 있는 div의 상단으로 올라가게 되면 mouseHover값을 toggle(truie로 만듬)시키게 됩니다.
    },
    mouseLeave() {
      console.log('mouse leave...')
      if (this.mouseHover == 1) this.mouseHover = 0
      // 마우스가 메뉴를 감싸고 있는 div의 바깥으로 나가게 되면 mouseHover값을 toggle(false로 만듬)시키게 됩니다.
    }
  }
}
</script>
<style>
.margin-left-2rem {
  margin-left: 2rem
}
.margin-right-minus {
  margin-right: -12rem
}
.margin-right-0 {
  margin-right: 0rem
}
.position-absolute {
  position: absolute
}
.transition {
  transition: all 0.5s
}
.delay {
  transition-duration: 4s;
  transition-delay: 2s;
}
</style>