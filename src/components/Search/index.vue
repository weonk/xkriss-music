<template>
    <div class="m-tabct">
        <div class="tabctitem">
            <div class="m-hmsrch">
                <form class="m-input f-bd f-bd-btm" method="get" action="#">
                    <div class="inputcover">
                        <i class="u-svg u-svg-srch"></i>
                        <input type="search" name="search" class="input" placeholder="" v-model="keyword" autocomplete="off">
                        <label v-if="isPlacehold" class="holder">搜索歌曲、歌手、专辑</label>
                        <figure class="close">
                            <i class="u-svg u-svg-empty"></i>
                        </figure>
                    </div>
                </form>
                <div v-if="isPlacehold" class="m-default">
                    <section class="m-hotlist">
                        <h3 class="title">热门搜索</h3>
                        <ul class="list">
                            <li v-for="(item, index) in hotSearchKeywords" :key="index" class="item f-bd f-bd-full" @click="handleToHotSearch(item.keyword)">
                                <a class="link" href="javascript:void(0);">{{ item.keyword }}</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div v-else class="recommend">
                    <Loading v-if="isLoading" />
                    <h3 class="u-smtitle">歌曲列表</h3>
                    <ol class="u-songs">
                        <li v-for="(song, index) in songs" :key="song.id" class="u-song" @click="play(song.id)">
                            <div class="sgi_fl">{{ index + 1 }}</div>
                            <div class="sgi_fr f-bd f-bd-btm">
                                <div class="sgich_fl">
                                    <div class="f-thide sgich_tl">{{ song.name }}</div>
                                    <div class="f-thide sgich_info">{{ song.singer }}</div>
                                </div>
                                <div class="sgich_fr">
                                    <span class="u-hmsprt sgich_ply"></span>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/assets/eventBus'
export default {
    name: 'Search',
    data() {
        return {
            isPlacehold: true,
            isLoading: true,
            keyword: '',
            songs: [],
            hotSearchKeywords: [
                { keyword: '林宥嘉新歌' },
                { keyword: '一场游戏一场梦' },
                { keyword: 'X计划' },
                { keyword: '绿色' },
                { keyword: '路过人间' },
                { keyword: '我曾' },
                { keyword: '多想在平庸的生活拥抱你' },
                { keyword: '你不要担心' },
                { keyword: '张国荣' },
                { keyword: '以团之名总决赛' }
            ]
        }
    },
    watch: {
        keyword(newVal){
            if(newVal !== '' || newVal === null) {
                var that = this;
                this.cancelRequest();
                this.isPlacehold = false;
                this.isLoading = true;
                this.axios.get('/music/tencent/search?key=579621905&s=' + newVal,{
                    cancelToken: new this.axios.CancelToken(function(c){
                        that.source = c;
                    })
                }).then((res) => {
                    var result = res.data.result;
                    if (result === 'SUCCESS') {
                        this.songs = res.data.data;
                        this.isLoading = false;
                        this.$store.commit('music/MUSIC_LIST_SEARCH', res.data.data);
                    } else if (result = 'ERROR') {
                        this.isLoading = false;
                    }
                }).catch((err) => {
                    if (this.axios.isCancel(err)) {
                        console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                    } else {
                        //handle error
                        console.log(err);
                    }
                });
            } else {
                this.isPlacehold = true;
                this.songs = [];
                this.$store.commit('music/MUSIC_LIST_SEARCH', []);
            }
        }
    },
    methods: {
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
        play(id) {
            bus.$emit('playEvent', id);
        },
        handleToHotSearch(keyword) {
            this.keyword = keyword;
        }
    }
}
</script>

<style scoped>
.m-tabct {
    width: 100%;
    height: 100%;
    display: block;
}
.m-hmsrch {
    padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}
.m-hmsrch {
    background: #fbfcfd;
}
.m-input {
    padding: 15px 10px;
}
.m-input .inputcover {
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
}
.inputcover, .m-input-login {
    width: 100%;
    box-sizing: border-box;
}
.inputcover {
    padding: 0 16px;
}
.inputcover, .u-input-login {
    width: 100%;
    box-sizing: border-box;
}
.inputcover {
    padding: 0 16px;
}
.inputcover, .u-input-login {
    width: 100%;
    box-sizing: border-box;
}

.inputcover {
    padding: 0 16px;
}
.m-input .u-svg-srch {
    position: absolute;
    left: 0;
    top: 9px;
    margin: 0 8px;
    vertical-align: middle;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg-srch {
    width: 13px;
    height: 13px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.m-input .input {
    width: 100%;
    height: 30px;
    line-height: 18px;
    background: transparent;
    font-size: 14px;
    color: #333;
}
.input {
    outline: none;
}

input, select, textarea {
    -webkit-appearance: none;
    border-radius: 0;
    border: 0;
    background-color: transparent;
}
body, button, input, keygen, legend, select, textarea {
    font: 14px/1.5 Helvetica,sans-serif;
    color: #333;
    outline: 0;
}
.m-input .holder {
    position: absolute;
    left: 30px;
    top: 5px;
    font-size: 14px;
    color: #c9c9c9;
    background: transparent;
    pointer-events: none;
}
label, summary {
    cursor: default;
}

user agent stylesheet
label {
    cursor: default;
}
.m-input .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
}
figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
}
.m-input .u-svg-empty {
    display: none;
    vertical-align: middle;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg-empty {
    width: 14px;
    height: 14px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+);
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.u-svg {
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
}
.m-hotlist {
    padding: 15px 10px 0;
}
.m-hotlist .title {
    font-size: 12px;
    line-height: 12px;
    color: #666;
}
.m-hotlist .list {
    margin: 10px 0 7px;
}
.m-hotlist .item {
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
}
ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
a, a:visited {
    color: #333;
}
a, del, ins, s, u {
    text-decoration: none;
}
a, button {
    cursor: pointer;
}
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
    color: #507daf;
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