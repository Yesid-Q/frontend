<template>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
        <vs-card class="card-login">
            <template v-slot:header>
                <h2>
                    Inicia Sesion
                </h2>
            </template>
            <div class="h-100">
                <vs-row class="h-100" vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-col vs-w="10">
                        <vs-input
                            label="Correo electronico"
                            type="email"
                            v-model="form.email"
                        ></vs-input>
                    </vs-col>
                    <vs-col vs-w="10">
                        <vs-input
                            label="Contraseña"
                            type="password"
                            v-model="form.password"
                        ></vs-input>
                    </vs-col>
                </vs-row>
            </div>
            <template v-slot:footer>
                <vs-row vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-col vs-w="10">
                        <vs-button class="w-100" color="primary" vs-w="100" v-on:click="login()">
                            Inicio
                        </vs-button>
                    </vs-col>
                    <vs-col vs-w="10">
                        <vs-button :to="{ name: 'register' }" class="w-100" color="primary" type="flat">
                            Registrarse
                        </vs-button>
                    </vs-col>
                </vs-row>
            </template>
        </vs-card>
    </vs-col>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { useMutation } from 'villus'
import { useRouter } from "vue-router";

import { useAuthStore } from "../stores/auth.store";
import { Login, ResponseLogin } from '../interfaces/auth.interface'
import { mutationLogin } from '../schemas/auth.schema'

const form = reactive<Login>({
    email: '',
    password: ''
});

const authStore = useAuthStore()

const router$ = useRouter()

const { data, execute } = useMutation<ResponseLogin>(mutationLogin)

watch(data, ( ) => {
    authStore.setAuthentication(data.value.loginUser.token, data.value.loginUser.name)
    router$.push({ name: 'players' })
})

const login = () => {
    execute(form)
}
</script>


<style scoped>
.vs-con-input-label {
    width: 100%;
}

.card-login {
    height: 300px;
    max-width: 400px;
}
.vs-card--content {
    height: calc( 100% - 150px);
}
</style>