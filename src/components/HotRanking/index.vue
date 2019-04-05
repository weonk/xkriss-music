<template>
    <div class="recommend">
        <Loading v-if="isLoading" />
        <h3 class="u-smtitle">歌曲列表</h3>
        <ol class="u-songs">
            <li v-for="(song, index) in songs" :key="song.id" class="u-song">
                <div class="sgi_fl">{{ index + 1 }}</div>
                <div class="sgi_fr f-bd f-bd-btm">
                    <div class="sgich_fl">
                        <div class="f-thide sgich_tl">{{ song.name }}</div>
                        <div class="f-thide sgich_info">{{ song.singer }}</div>
                    </div>
                    <div class="sgich_fr">
                        <span class="u-hmsprt sgich_ply" @touchstart="play(song.id)"></span>
                    </div>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
import bus from '@/assets/eventBus'
export default {
    name: 'HotRanking',
    data() {
        return {
            songs: [],
            isLoading: true
        }
    },
    activated() {
        this.axios.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678').then((res) => {
            var result = res.data.result;
            if (result === 'SUCCESS') {
                this.songs = res.data.data.songs;
                this.isLoading = false;
                this.$store.commit('music/MUSIC_LIST_HOTRANKING', res.data.data.songs);
            }
        });
    },
    methods: {
        play(id) {
            bus.$emit('playEvent', id);
        }
    }
}
</script>

<style scoped>
.recommend {
    overflow: hidden;
}
.recommend .u-smtitle {
    height: 23px;
    line-height: 23px;
    padding: 0 10px;
    font-size: 12px;
    color: #666;
    background-color: #eeeff0;
}
.recommend ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.recommend ol li {
    list-style: none;
}
.u-song {
    display: flex;
}
.u-song .sgi_fl, .u-song .sgi_fr {
    display: -ms-flexbox;
    display: flex;
}
.u-song .sgi_fl {
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40px;
    font-size: 17px;
    color: #999;
}
.u-song .sgi_fr {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.u-song .sgich_fl {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 6px 0;
    width: 0;
}
.u-song .sgich_tl {
    font-size: 17px;
}
.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}
.u-song .sgich_info {
    font-size: 12px;
    color: #888;
}
.u-song .sgich_fr {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
}
.u-song .sgich_ply {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: -24px 0;
}

.u-hmsprt {
    background-image: url(//s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159);
}
.u-hmsprt {
    background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
    background-size: 166px 97px;
}
</style>
