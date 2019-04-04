<template>
    <div id="content">
        <div class="header">
            <div class="title">
                <span class="iconfont icon-music"></span>  <span>XKRISS</span>
            </div>
        </div>
        <div class="music_menu">
            <div class="hot_swtich">
                <router-link tag="div" to="/music/recommend" class="hot_item">推荐音乐</router-link>
                <router-link tag="div" to="/music/hotRanking" class="hot_item">新歌榜</router-link>
            </div>
            <router-link tag="div" to="/music/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
#content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
#content .header {
    background-color: #D43C33;
    height: 64px;
}
#content .header .title {
    padding: 19px 25px;
}
#content .header .title span {
    color: white;
    font-size: 20px;
}
#content .header .title .icon-music {
    font-size: 25px;
}
#content .music_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.music_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.music_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.music_menu .hot_item.active{ color: #D43C33; border-bottom: 2px #D43C33 solid;}
.music_menu .hot_item.router-link-active{ color: #D43C33; border-bottom: 2px #D43C33 solid;}
.music_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.music_menu .search_entry.active{ color: #D43C33; border-bottom: 2px #D43C33 solid;}
.music_menu .search_entry.router-link-active{ color: #D43C33; border-bottom: 2px #D43C33 solid;}
.music_menu .search_entry i{  font-size:24px; color: #D43C33;}
</style>
