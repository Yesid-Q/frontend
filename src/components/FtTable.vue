<template>
  <div class="w-100 h-100">
    <header class="table-filter">
      <slot name="filter"></slot>
    </header>
    <div class="w-100 container">
      <table class="w-100 table">
        <thead class="table-header">
          <tr>
            <slot name="header"></slot>
          </tr>
        </thead>
        <tbody class="table-body">
          <div v-if="loading" class="loading">
            <FtSpinner />
          </div>
          <template v-else>
            <slot></slot>
          </template>
        </tbody>
      </table>
    </div>
    <footer class="table-pagination">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import FtSpinner from "./FtSpinner.vue";

defineProps<{
  loading: boolean;
}>();
</script>


<style>
td,
th {
  text-align: center;
  font-size: 1.2rem;
}
tr {
  height: 2.5rem;
}
tr:hover {
  background-color: aliceblue;
}
</style>

<style scoped>
.loading {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner::before {
  content: "";
  border: 5px solid blue;
  border-radius: 50%;
  height: 25px;
  width: 25px;
}
.table-filter {
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  padding: 0 2.4rem;
  gap: 1rem;
}
.container {
  display: block;
  word-break: break-all;
  overflow: auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 30%);
  height: 85%;
}

.table-header {
  height: 3.5rem;
  background-color: aliceblue;
}
.table-body {
  font-size: 1rem;
}
.table-pagination {
  display: flex;
  justify-content: flex-end;
  padding: 0 2.4rem;
  margin-top: 1rem;
}
</style>