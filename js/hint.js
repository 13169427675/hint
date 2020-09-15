let defaultTitle = "来自程序员小哥哥的温馨提示";
let defaultContent = "您有一封未读邮件、请查收！";
let defaultBt = "朕已阅";
let BT_1 = "喜欢";
let BT_2 = "不喜欢";
let defaultSrc = "./images/demo.jpg";
let defaultHref = "#";
let defaultValue = "一键加入";
class HINT {
    constructor() {}
    //消息确认框、有返回值，用于信息阅读交互
    FOUND_0(title = defaultTitle, content = defaultContent, btValue = defaultBt) {
        let binds = this;

        let body = document.getElementsByTagName("body")[0];

        let MASK_T = document.createElement("div");
        MASK_T.className = "MASK";

        let HIDE_T = document.createElement("div");
        HIDE_T.className = "HINT";

        let TITLE_T = document.createElement("div");
        TITLE_T.className = "TITLE";
        HIDE_T.appendChild(TITLE_T);

        let FONT_T = document.createElement("div");
        FONT_T.className = "FONT";
        FONT_T.innerHTML = title;
        TITLE_T.appendChild(FONT_T);

        let CLOSE_T = document.createElement("div");
        CLOSE_T.className = "CLOSE";
        CLOSE_T.innerHTML = "×";
        CLOSE_T.onclick = function () {
            setTimeout(function () {
                binds.CLOSE();
            }, 200)
        }
        TITLE_T.appendChild(CLOSE_T);

        let CONTENT_T = document.createElement("div");
        CONTENT_T.className = "CONTENT";
        CONTENT_T.innerHTML = content;
        HIDE_T.appendChild(CONTENT_T);

        let FOOTER_T = document.createElement("div");
        FOOTER_T.className = "FOOTER";
        HIDE_T.appendChild(FOOTER_T);

        let BT_T = document.createElement("button");
        BT_T.className = "BT";
        BT_T.innerHTML = btValue;
        BT_T.onclick = function () {
            setTimeout(function () {
                binds.CLOSE();
            }, 200);
        }
        FOOTER_T.appendChild(BT_T);

        MASK_T.appendChild(HIDE_T);
        body.appendChild(MASK_T);
    }
    //提示弹窗API、无交互，信息短暂展示。通常用于提醒
    FOUND_1(value = "亲、很高兴见到你！") {
        let binds = this;
        let body = document.getElementsByTagName("body")[0];

        let MASK_T = document.createElement("div");
        MASK_T.className = "MASK";

        let HINT_1 = document.createElement("div");
        HINT_1.className = "HINT_1";
        HINT_1.innerHTML = value;
        MASK_T.appendChild(HINT_1);
        body.appendChild(MASK_T);
        let MASK_D = document.getElementsByClassName("MASK")[0];
        binds.FAINOUT(MASK_D);

    }
    //选择框、有返回值、有交互根据返回值进行操作
    FOUND_2(title = defaultTitle, content = defaultContent, btValue = [BT_1, BT_2]) {
        let binds = this;

        let body = document.getElementsByTagName("body")[0];

        let MASK_T = document.createElement("div");
        MASK_T.className = "MASK";

        let HIDE_T = document.createElement("div");
        HIDE_T.className = "HINT";

        let TITLE_T = document.createElement("div");
        TITLE_T.className = "TITLE";
        HIDE_T.appendChild(TITLE_T);

        let FONT_T = document.createElement("div");
        FONT_T.className = "FONT";
        FONT_T.innerHTML = title;
        TITLE_T.appendChild(FONT_T);

        let CLOSE_T = document.createElement("div");
        CLOSE_T.className = "CLOSE";
        CLOSE_T.innerHTML = "×";
        CLOSE_T.onclick = function () {
            setTimeout(function () {
                binds.CLOSE(false);
            }, 200)
        }
        TITLE_T.appendChild(CLOSE_T);

        let CONTENT_T = document.createElement("div");
        CONTENT_T.className = "CONTENT";
        CONTENT_T.innerHTML = content;
        HIDE_T.appendChild(CONTENT_T);

        let FOOTER_T = document.createElement("div");
        FOOTER_T.className = "FOOTER";
        HIDE_T.appendChild(FOOTER_T);

        let BOX_T = document.createElement("div");
        BOX_T.className = "BOX";
        FOOTER_T.appendChild(BOX_T);

        let BTS_T1 = document.createElement("button");
        BTS_T1.className = "BTS";
        BTS_T1.innerHTML = btValue[0];
        BTS_T1.onclick = function () {
            setTimeout(function () {
                binds.CLOSE(true);
            }, 200);
        }
        BOX_T.appendChild(BTS_T1);

        let BTS_T2 = document.createElement("button");
        BTS_T2.className = "BTS";
        BTS_T2.innerHTML = btValue[1];
        BTS_T2.onclick = function () {
            setTimeout(function () {
                binds.CLOSE(false);
            }, 200);
        }
        BOX_T.appendChild(BTS_T2);

        MASK_T.appendChild(HIDE_T);
        body.appendChild(MASK_T);
    }
    //广告弹出层  
    FOUND_3(src = defaultSrc,href = defaultHref,value = defaultValue) {
        let binds = this;
        let body = document.getElementsByTagName("body")[0];

        let MASK_T = document.createElement("div");
        MASK_T.className = "MASK";

        let HINT_T = document.createElement("div");
        HINT_T.className = "HINT";
        MASK_T.appendChild(HINT_T);

        let CONTENTS_T = document.createElement("div");
        CONTENTS_T.className = "CONTENTS";
        HINT_T.appendChild(CONTENTS_T);

        let IMG_T = document.createElement("img");
        IMG_T.src = src;
        IMG_T.WIDTH = "100%";
        IMG_T.HEIGHT = "100%";
        CONTENTS_T.appendChild(IMG_T);

        let SKIP_T = document.createElement("div");
        SKIP_T.className = "SKIP";
        CONTENTS_T.appendChild(SKIP_T);

        let A_T = document.createElement("a");
        A_T.href = href;
        A_T.innerHTML = value;
        SKIP_T.appendChild(A_T);

        let CLOSE_T = document.createElement("div");
        CLOSE_T.className = "CLOSE";
        CLOSE_T.innerHTML = "×";
        CLOSE_T.onclick = function () {
            binds.CLOSE();
        }
        CONTENTS_T.appendChild(CLOSE_T);

        body.appendChild(MASK_T);


    }
    //目标元素渐隐API
    FAINOUT(obj, time = 2) {
        let binds = this;
        obj.style.cssText = `animation:opacity_out ${time}s 1;animation-delay:2s;animation-fill-mode: forwards;`;
        setTimeout(function () {
            binds.CLOSE();
        }, (time + 2) * 1000);
    }
    //移除目标元素API
    CLOSE(bool) {
        let body = document.getElementsByTagName("body")[0];
        let MASK_C = document.getElementsByClassName("MASK")[0];
        body.removeChild(MASK_C);
        console.log(bool);
    }

}
let TC = new HINT();