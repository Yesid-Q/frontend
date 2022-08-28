<template>
  <header class="header-page">
    <div class="content-image">
      <img src="/ft.svg" class="w-100 h-100" />
      <div>
        <h2 class="title-page">FT</h2>
        <span class="name-user">
          {{  authStore.$state.name }}
        </span>
      </div>
    </div>
      <vs-button color="danger">
        cerrar seccion
      </vs-button>
  </header>
  <main>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" class="h-100">
      <vs-col vs-w="10" class="h-85">
        <RouterView />
      </vs-col>
    </vs-row>
    <vs-navbar
      type="-item"
      v-model="activeItem"
      class="navbar"
      text-color="rgba(0,0,0,.6)"
    >
      <vs-navbar-item>
        <router-link :to="{ name: 'players' }"> Jugadores </router-link>
      </vs-navbar-item>
      <vs-navbar-item>
        <router-link :to="{ name: 'nations' }"> Naciones </router-link>
      </vs-navbar-item>
      <vs-navbar-item>
        <router-link :to="{ name: 'clubs' }"> Clubs </router-link>
      </vs-navbar-item>
    </vs-navbar>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.store";

const authStore = useAuthStore()
const activeItem = ref<number>(0);
</script>


<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.router-link-active,
.router-link-exact-active {
  color: #000;
}
.h-85 {
  height: 85%;
}
.navbar {
  background: transparent;
  position: fixed;
  bottom: 12px;
  width: 50%;
  margin: auto;
  left: 0;
  right: 0;
  border-radius: 12px;
  height: 48px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 30%);
}

.header-page {
  height: 3rem;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10rem;
  top: 1rem;
}

.content-image {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}

.title-page {
  font-size: 1.5rem !important;
}
.name-user {
  font-size: .8rem !important;
  font-style: italic;
  text-transform: capitalize;
}
</style>

<style>
.vs-con-items {
  height: 100%;
}
</style>