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
            <h3>Jugador</h3>
          </template>
          <div>
            <vs-row vs-justify="flex-end">
              <vs-col vs-w="6">Id:</vs-col>
              <vs-col vs-w="6" class="text-end">{{ data?.playerById.id }}</vs-col>
            </vs-row>
            <vs-row vs-justify="flex-end">
              <vs-col vs-w="6">Nombre:</vs-col>
              <vs-col vs-w="6" class="text-end">{{ data?.playerById.name }}</vs-col>
            </vs-row>
            <vs-row vs-justify="flex-end">
              <vs-col vs-w="6">Posicion:</vs-col>
              <vs-col vs-w="6" class="text-end">{{ data?.playerById.position }}</vs-col>
            </vs-row>
            <vs-row vs-justify="flex-end">
              <vs-col vs-w="6">Nacionalidad:</vs-col>
              <vs-col vs-w="6" class="text-end">{{ data?.playerById.nation.name || 'Se desconoce donde nacio.' }}</vs-col>
            </vs-row>
            <vs-row vs-justify="flex-end">
              <vs-col vs-w="6">Club:</vs-col>
              <vs-col vs-w="6" class="text-end">{{ data?.playerById.club.name || 'No registra club.' }}</vs-col>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </template>
  <script lang="ts" setup>
  import { useRoute } from "vue-router";
  import { useQuery } from "villus";
  
  import { Player } from "../interfaces/players.interface";
  import { queryPlayerById } from "../schemas/player.schema";
  
  const route$ = useRoute();
  
  const { data, isDone, isFetching, error } = useQuery<Player>({
    query: queryPlayerById,
    variables: {
      id: route$.params.id,
    },
  });
  </script>
      