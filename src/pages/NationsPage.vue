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
        </template>
        <tr :key="nation.id" v-for="nation of data.nations.items" v-on:click="goToNation(nation.id)">
            <td>{{ nation.id }}</td>
            <td>{{ nation.name }}</td>
        </tr>
        <template v-slot:footer>
            <vs-pagination
                :total="data.nations.pageInfo.pageTotal"
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
import { Nations } from '../interfaces/nation.interface'
import { queryNations } from '../schemas/nation.schema'

const router$ = useRouter();

const params = reactive<PageParams>({
    page: 1,
    limit: 15,
    search: ''
})

watch(params, ({ limit }) => {
    params.limit = Number(limit)
});

const { data, isDone, isFetching, error } = useQuery<Nations>({
    query: queryNations,
    variables: params
});

const goToNation = (id: number) => {
    router$.push({ name: 'nation', params: { id }})
}
</script>
