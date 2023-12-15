import {r as e, a as n, s as t, b as a, d as l, c as o, e as s, f as c} from "./index-226e1ea7.js";
import {o as i} from "./uni-app.es.1a417ed1.js";

const r = {
  __name: "decryption", props: {arg: String, timestamp: String}, setup(r) {
    const u = r.arg || function (e) {
      const n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), t = window.location.search.substr(1).match(n);
      if (null != t) return decodeURI(t[2]);
      return null
    }("arg");
    let d = e(!1);

    function p() {
      let e = window.location.href;
      -1 !== e.indexOf("?") && (e = e.replace(/(\?|#)[^'"]*/, ""), window.history.replaceState({}, 0, e));
      c({url: "/pages/qypp/qyppCon"})
    }

    return i((() => {
      !async function () {
        try {
          n("scanData"), n("secretCode"), t("secretCode", u);
          const e = {
            "code": 601,
            "msg": "success",
            "data": {
              "decryptedData": "code=https://y2wm.cn/99.1000.1/AC2021222001L8F0KEY6UNO31OQ288T1U&scanType=0&scanTime=1702223726775&specCode=AC021221",
              "if_code": "0"
            }
          }, c = e.data.decryptedData;
          e.data.if_code;
          let i = null;
          if (600 == e.code) {
            /scanType=(\d)&/.exec(c)[1]
          }
          let r = null;
          c && c.includes("/AC") ? r = "AC" : console.log("缺少AC", c);
          let f = null, g = /specCode=([A-Za-z0-9]+)/;
          g.exec(c) ? f = g.exec(c)[1] : console.log("specCode缺失");
          let C = null;
          if (r && f) {
            C = /(AC.+?)&/.exec(c)[1], 33 != C.length && (console.log("ac长度有误", C.length), C = null)
          }
          let w = null;
          C && (w = C.substr(2, 1), "1" != w && "2" != w && (w = null, console.log("第3位有误")));
          let y = null;
          w && (y = C.substr(3, 1), "0" != y && "1" != y && (y = null, C = null));
          let h = null;
          y && (h = C.substr(4, 5));
          let m = null;
          if (h) {
            const e = o(h);
            if (e) {
              const {data: n} = await s(`static/json/产品信息/${e}`);
              m = n.result.CIG_INFO
            }
            m ? d.value = !0 : (C = null, console.log(`specificationCode:${h}未匹配到具体商品`))
          }
          const x = {ac: r, acCode: C, scanType: i, packingMethod: w, operation: y, specificationCode: h, info: m};
          t("scanData", x), uni.scannedCode = d, uni.scanData = x, p()
        } catch (e) {
          console.error(e), p()
        }
      }()
    })), (e, n) => null
  }
};
export {r as default};
