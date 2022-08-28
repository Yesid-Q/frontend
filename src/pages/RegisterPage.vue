<template>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
        <vs-card class="card-register">
            <template v-slot:header>
                <h2>
                    Registro
                </h2>
            </template>
            <div class="h-100">
                <vs-row class="h-100" vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-col vs-w="10">
                        <vs-input
                            label="Nombre"
                            type="text"
                            v-model="form.name"
                        ></vs-input>
                    </vs-col>
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
                    <vs-col vs-w="10">
                        <vs-input
                            label="Confirme Contraseña"
                            type="password"
                            v-model="form.veryPassword"
                        ></vs-input>
                    </vs-col>
                </vs-row>
            </div>
            <template v-slot:footer>
                <vs-row vs-type="flex" vs-justify="center" vs-align="center">
                    <vs-col vs-w="10">
                        <vs-row vs-type="flex" vs-justify="space-evenly" vs-align="center">
                            <vs-col vs-w="4">
                                <vs-button v-on:click="register()" class="w-100" color="primary">
                                    Registrarse
                                </vs-button>
                            </vs-col>
                            <vs-col vs-w="4">
                                <vs-button v-on:click="reset()" class="w-100" color="danger">
                                    Cancelar
                                </vs-button>
                            </vs-col>
                        </vs-row>
                    </vs-col>
                    <vs-col vs-w="10">
                        <vs-button :to="{ name: 'login' }" class="w-100" color="primary" type="flat">
                            Inicio
                        </vs-button>
                    </vs-col>
                </vs-row>
            </template>
        </vs-card>
    </vs-col>
</template>

<script lang="ts" setup>
import { useMutation } from 'villus';
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useAuthStore } from '../stores/auth.store';
import { Register, ResponseRegister } from '../interfaces/auth.interface';
import { mutationRegister } from '../schemas/auth.schema';

const authStore = useAuthStore()

const router$ = useRouter()

const { data, execute } = useMutation<ResponseRegister>(mutationRegister)

watch(data, ( ) => {
    authStore.setAuthentication(data.value.registerUser.token, data.value.registerUser.name)
    router$.push({ name: 'players' })
})

const form = reactive<Register>({
    name: '',
    email: '',
    password: '',
    veryPassword: ''
})


const register = () => {
    execute(form)
}

const reset = () => {
    form.name = ''
    form.email = ''
    form.password = ''
    form.veryPassword = ''
}
</script>

<style scoped>
.vs-con-input-label {
    width: 100%;
}

.card-register {
    height: 450px;
    max-width: 400px;
}
.vs-card--content {
    height: calc( 100% - 150px);
}
</style>