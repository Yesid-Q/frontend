<template>
    <h2 v-if="error">
        hubo un error
    </h2>
    <FtTable v-if="data" :loading="isFetching">
        <template v-slot:filter>
            <vs-input-number
                label="Limite: "
                v-model="params.limit"
            ></vs-input-number>
            <vs-input
                label="Busca por nombre"
                type="text"
                v-model="params.search"
            ></vs-input>
        </template>
        <template v-slot:header>
            <th>Id</th>
            <th>Nombre</th>
            <th>Posicion</th>
            <th>Nacionalidad</th>
            <th>Club</th>
        </template>
        <tr :key="player.id" v-for="player of data.players.items" v-on:click="goToPlayer(player.id)">
            <td>{{ player.id }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.nation?.name || 'Se desconoce donde nacio.' }}</td>
            <td>{{ player.club?.name || 'No registra club.' }}</td>
        </tr>
        <template v-slot:footer>
            <vs-pagination
                :total="data.players.pageInfo.pageTotal"
                v-model="params.page"
            ></vs-pagination> 
        </template>
    </FtTable>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { useQuery } from 'villus'
import { useRouter } from 'vue-router'

import FtTable from '../components/FtTable.vue'

import { PageParams } from '../interfaces/base.interface'
import { Players } from '../interfaces/players.interface'
import { queryPlayers } from '../schemas/player.schema'

const router$ = useRouter();

const params = reactive<PageParams>({
    page: 1,
    limit: 15,
    search: ''
})

watch(params, ({ limit }) => {
    params.limit = Number(limit)
});

const { data, isDone, isFetching, error } = useQuery<Players>({
    query: queryPlayers,
    variables: params
});

const goToPlayer = (id: number) => {
    router$.push({ name: 'player', params: { id }})
}
</script>
