<template>
  <RouterView />
</template>
<script lang="ts" setup>
import { useAuthStore } from './stores/auth.store'

const authStore = useAuthStore()

authStore.start()
</script>
