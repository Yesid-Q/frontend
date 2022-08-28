<template>
<main>
    <vs-row class="h-100">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="0">
            <div class="content-image">
                <img src="/ft.svg" class="w-100 h-100"/>
                <h1>FT</h1>
            </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
            <RouterView />
        </vs-col>
    </vs-row>
</main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
}
.content-image {
    width: 250px;
    height: 250px;
}

h1 {
    text-align: center;
    font-size: 4rem !important;
}
</style>