<template>
    <div class="main-container">
        <!-- <Header /> -->
        <Navbar />
            <keep-alive>
                <router-view />
            </keep-alive>
        <Player />
    </div>
</template>

<script>
export default {
    name: 'Recommend'
}
</script>

<style scoped>
.main-container {
    padding-bottom: 100px;
    padding-top: 110px;
}
</style>
