<template>
    <div class="main-container">
        <!-- <Header /> -->
        <Navbar />
        <keep-alive>
            <router-view />
        </keep-alive>
        <div class="footer">
            <aplayer :music="{
                title: '2002',
                artist: 'Anne-Marie',
                src: 'https://api.bzqll.com/music/tencent/url?id=002iP6Fq48OCKG&key=579621905',
                pic: 'https://api.bzqll.com/music/tencent/pic?id=002iP6Fq48OCKG&key=579621905',
                lrc: 'https://api.bzqll.com/music/tencent/lrc?id=002iP6Fq48OCKG&key=579621905'
            }">
            </aplayer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.main-container {
    padding-bottom: 76px;
    padding-top: 110px;
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
}
</style>
