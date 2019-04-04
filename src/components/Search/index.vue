<template>
    <div class="m-tabct">
        <div class="tabctitem">
            <div class="m-hmsrch">
                <form class="m-input f-bd f-bd-btm" method="get" action="#">
                    <div class="inputcover">
                        <i class="u-svg u-svg-srch"></i>
                        <input type="search" name="search" class="input" placeholder="" value="" autocomplete="off">
                        <label class="holder">搜索歌曲、歌手、专辑</label>
                        <figure class="close">
                            <i class="u-svg u-svg-empty"></i>
                        </figure>
                    </div>
                </form>
                <div class="m-default">
                    <section class="m-hotlist">
                        <h3 class="title">热门搜索</h3>
                        <ul class="list">
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">林宥嘉新歌</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">一场游戏一场梦</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">X计划</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">绿色</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">路过人间 </a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">我曾</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">多想在平庸的生活拥抱你</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">你不要担心</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">张国荣</a>
                            </li>
                            <li class="item f-bd f-bd-full">
                                <a class="link" href="javascript:void(0);">以团之名总决赛</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
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

</style>