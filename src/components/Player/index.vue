<template>
    <div class="footer">
        <div id="aplayer"></div>
    </div>  
</template>

<script>
import bus from '@/assets/eventBus'
import { setTimeout } from 'timers';
export default {
    name: 'Player2',
    data() {
        return {
            currentSongId: '1336856777'
        }
    },
    mounted() {
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            mini: false,
            autoplay: false,
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            listFolded: false,
            lrcType: 3,
            audio: [{
                name: '我曾',
                artist: '隔壁老樊',
                url: 'https://api.bzqll.com/music/netease/url?id=1336856777&key=579621905',
                cover: 'http://p2.music.126.net/KK3YNRE9flpcZCYkDS8Z3g==/109951163826159510.jpg?param=400y400',
                lrc: 'https://api.bzqll.com/music/netease/lrc?id=1336856777&key=579621905',
            }]
        });
        bus.$on('playEvent', (id) => {
            if(id != this.currentSongId) {
                this.currentSongId = id;
                ap.list.clear();
                var songs = this.$store.state.music.recommendList.concat(this.$store.state.music.hotRankingList).concat(this.$store.state.music.searchList);
                for (var song of songs) {
                    if (id == song.id) {
                        ap.list.add([{
                            name: song.name,
                            artist: song.singer,
                            url: song.url,
                            cover: song.pic,
                            lrc: song.lrc,
                        }]);
                        break;
                    }
                }
                ap.play();
            } else {
                ap.toggle();
            }
        })
    }
}
</script>

<style>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
}
</style>
