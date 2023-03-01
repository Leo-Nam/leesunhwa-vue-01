<template>
  <v-card
    class="mx-auto container"
  >
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
        class="container"      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title><v-icon>mdi-menu</v-icon></v-app-bar-title>
        <v-spacer></v-spacer>111
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>