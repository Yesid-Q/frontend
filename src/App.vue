<template>
  <RouterView />
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

const authStore = useAuthStore()
const router = useRouter()
authStore.start()

if(authStore.isAuthentication) {
  router.push({ name: 'players' })
}
</script>
