<template>
  <vs-row class="h-100" vs-justify="center">
    <vs-col
      class="h-100"
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-w="2"
    >
      <vs-card>
        <template v-slot:header>
          <h3>Club</h3>
        </template>
        <div>
          <vs-row vs-justify="flex-end">
            <vs-col vs-w="6">Id:</vs-col>
            <vs-col vs-w="6" class="text-end">{{ data?.clubById.id }}</vs-col>
          </vs-row>
          <vs-row vs-justify="flex-end">
            <vs-col vs-w="6">Nombre:</vs-col>
            <vs-col vs-w="6" class="text-end">{{ data?.clubById.name }}</vs-col>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useQuery } from "villus";

import { Club } from "../interfaces/club.interface";
import { queryClubById } from "../schemas/club.schema";

const route$ = useRoute();

const { data, isDone, isFetching, error } = useQuery<Club>({
  query: queryClubById,
  variables: {
    id: route$.params.id,
  },
});
</script>
    