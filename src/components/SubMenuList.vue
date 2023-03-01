<template lang="">
  <div 
    v-show="mouseHover" 
    class="display-flex justify-content-flex-end"
    @mouseleave="$emit('mouseLeave')"
  >
    <v-card
      v-for="subMenu, idx in subMenus"
      :key="idx"
      :class="mouseHoverEffect"
    >
      <v-list dense>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="item, idx2 in subMenu"
            :key="idx2"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link :to="item.route">
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </router-link>                
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>  
</template>
<script>
export default {
  props: {
    subMenus:{
      type: Array,
      default: null
    },
    mouseHoverEffect: {
      type: String,
      default: ''
    },
    mouseHover: {
      type: Number,
      default: 0
    }
  }
  
}
</script>
<style scoped>
  
</style>