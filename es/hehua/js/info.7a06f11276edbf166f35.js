(window.webpackJsonp = window.webpackJsonp || []).push([[113], {
  1: function (t, n, e) {
    "use strict";
    e.r(n);
    var s = e(2), i = e.n(s);
    for (var o in s) ["default"].indexOf(o) < 0 && function (t) {
      e.d(n, t, function () {
        return s[t]
      })
    }(o);
    n.default = i.a
  }, 1532: function (t, n, e) {
    "use strict";
    e(79);
    var s = a(e(72)), i = a(e(1533));
    e(46);
    var o = a(e(19));

    function a(t) {
      return t && t.__esModule ? t : {default: t}
    }

    e(182), s.default.prototype.Fetch = o.default, new s.default({
      render: function (t) {
        return t(i.default)
      }
    }).$mount("#app")
  }, 1533: function (t, n, e) {
    "use strict";
    e.r(n);
    var s = e(692), i = e(453);
    for (var o in i) ["default"].indexOf(o) < 0 && function (t) {
      e.d(n, t, function () {
        return i[t]
      })
    }(o);
    e(1534);
    var a = e(0), r = Object(a.a)(i.default, s.a, s.b, !1, null, null, null);
    n.default = r.exports
  }, 1534: function (t, n, e) {
    "use strict";
    e(898)
  }, 182: function (t, n, e) {
    "use strict";
    var s = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(e(19));
    !function (t, n) {
      "undefined" == typeof wx ? function (t) {
        var n = window.document, e = n.getElementsByTagName("script")[0], s = n.createElement("script");
        s.type = "text/javascript", s.async = !0, s.src = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js", s.onload = function () {
          t()
        }, e.parentNode.insertBefore(s, e)
      }(n) : n()
    }(0, function () {
      function t(t, n, e, i) {
        s.default.get("/es/hehua/json/wx-jsapi.json", {url: location.href.split("#")[0]}).then(function (s) {
          var o = s.appId, a = s.timestamp, r = s.nonceStr, c = s.signature;
          wx.config({
            debug: !1,
            appId: o,
            timestamp: a,
            nonceStr: r,
            signature: c,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "showOptionMenu", "translateVoice", "scanQRCode"]
          }), wx.ready(function () {
            !function (t, n, e, s) {
              wx.showOptionMenu(), wx.onMenuShareTimeline({
                title: t, link: e, imgUrl: s, success: function () {
                }, error: function (t) {
                  alert(JSON.stringify(t))
                }
              }), wx.onMenuShareAppMessage({
                title: t, link: e, imgUrl: s, desc: n, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareQQ({
                title: t, link: e, imgUrl: s, desc: n, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareWeibo({
                title: t, link: e, imgUrl: s, desc: n, trigger: function (t) {
                }, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareQZone({
                title: t, desc: n, link: e, imgUrl: s, success: function () {
                }, cancel: function () {
                }
              })
            }(t, n, e, i)
          })
        })
      }

      !function () {
        if (sessionStorage.getItem("share")) {
          var n = JSON.parse(sessionStorage.getItem("share")).shareConf,
            e = JSON.parse(sessionStorage.getItem("share")).prefix, i = "", o = "", a = "", r = "";
          n.forEach(function (t) {
            "home" == t.menuType && (i = t.title, o = t.content, a = e + "/syx/orgmenu/auth?menuCode=" + t.menuCode, r = t.icon)
          }), t(i, o, a, r)
        } else s.default.get("/es/hehua/json/org-all.json", {}).then(function (n) {
          if (200 == n.code) {
            var e = n.data.prefix, s = n.data.shareConf;
            sessionStorage.setItem("share", JSON.stringify(n.data));
            var i = "", o = "", a = "", r = "";
            s.forEach(function (t) {
              "home" == t.menuType && (i = t.title, o = t.content, a = e + "/syx/orgmenu/auth?menuCode=" + t.menuCode, r = t.icon)
            }), t(i, o, a, r)
          }
        })
      }()
    })
  }, 19: function (t, n, e) {
    "use strict";
    (function (t, s) {
      Object.defineProperty(n, "__esModule", {value: !0});
      var i = function (t) {
        return t && t.__esModule ? t : {default: t}
      }(e(23));
      var o = t.CancelToken.source();
      if (t.defaults.headers["X-Requested-With"] = "XMLHttpRequest", !sessionStorage.getItem("token")) {
        var a = i.default.getQueryString("token");
        sessionStorage.setItem("token", a)
      }

      function r(n, e, i, a) {
        var r = {method: n, url: e, cancelToken: o.token};
        return "get" === n ? r.params = i : "post" === n && (1 == a ? (r.headers = {"Content-type": "application/json;charset=UTF-8"}, r.data = JSON.stringify(i)) : r.data = s.stringify(i)), new Promise(function (n, e) {
          t(r).then(function (t) {
            200 == t.status && null != t.data && n(t.data)
          }).catch(function (t) {
            window.location.href = "/es/hehua/overtime-error.html", e(t)
          })
        })
      }

      t.defaults.headers.token = sessionStorage.getItem("token"), t.defaults.timeout = 6e4;
      var c = {
        get: function (t, n) {
          return r("get", t, n)
        }, post: function (t, n, e) {
          return r("post", t, n, e)
        }
      };
      n.default = c
    }).call(this, e(75), e(76))
  }, 2: function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = {}
  }, 23: function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var s = {
      getQuerys: function () {
        return window.location.search.substr(1)
      }, getQueryString: function (t) {
        return function (t) {
          var n = new RegExp("(?:^|&)" + t + "=([^&]*)(?:&|$)", "i"), e = window.location.search.substr(1).match(n);
          return null != e ? e[1] : null
        }(t)
      }, remQueryString: function (t) {
        return function (t) {
          var n = window.location.search.substr(1);
          if (n.indexOf(t) > -1) {
            for (var e = {}, s = n.split("&"), i = 0; i < s.length; i++) s[i] = s[i].split("="), e[s[i][0]] = s[i][1];
            delete e[t], n = JSON.stringify(e).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&")
          }
          return n
        }(t)
      }, getRandomStr: function (t, n, e) {
        return function (t, n, e) {
          var s = "", i = n,
            o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          if ("number" != typeof i) return console.log("getRandomStr: min值应为Number类型");
          if (t) {
            if ("number" != typeof e) return console.log("getRandomStr: max值应为Number类型");
            i = Math.round(Math.random() * (e - n)) + n
          }
          for (var a = 0; a < i; a++) s += o[Math.round(Math.random() * (o.length - 1))];
          return s
        }(t, n, e)
      }, compare: function (t, n) {
        return function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return function (e, s) {
            var i = e[t], o = s[t];
            return n ? i - o : o - i
          }
        }(t, n)
      }
    };
    n.default = s
  }, 24: function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return s
    }), e.d(n, "b", function () {
      return i
    });
    var s = function () {
      this._self._c;
      return this._m(0)
    }, i = [function () {
      var t = this._self._c;
      return t("div", {staticClass: "loading-bg"}, [t("div", {staticClass: "content"}, [this._v("\n        正在加载中...\n    ")])])
    }]
  }, 34: function (t, n, e) {
  }, 453: function (t, n, e) {
    "use strict";
    e.r(n);
    var s = e(454), i = e.n(s);
    for (var o in s) ["default"].indexOf(o) < 0 && function (t) {
      e.d(n, t, function () {
        return s[t]
      })
    }(o);
    n.default = i.a
  }, 454: function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    var s = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(e(48));
    n.default = {
      data: function () {
        return {
          tobacco: !1,
          wine: !1,
          scanInfo: JSON.parse(sessionStorage.getItem("info")) || {},
          subinfo: {},
          load: !0,
          scanList: [],
          color: "",
          scanCount: "",
          firstScanName: "",
          firstScanTime: ""
        }
      }, components: {loading: s.default}, created: function () {
        var t = this;
        this.color = sessionStorage.getItem("textColor") || "", this.getDetail().then(function (n) {
          var e = n.data;
          t.subinfo = e
        }), this.getList()
      }, mounted: function () {
        "prod1" == this.scanInfo.product.type ? this.tobacco = !0 : "prod2" == this.scanInfo.product.type && (this.wine = !0)
      }, methods: {
        getDetail: function () {
          return this.Fetch.get(`/es/hehua/${sessionStorage.getItem("productName")}/product-detail.json`)
        }, getList: function () {
          var t = this;
          this.Fetch.get("/es/hehua/json/code-history.json", {token: sessionStorage.getItem("token")}).then(function (n) {
            t.load = !1, "200" == n.code && (t.scanList = n.data.hisList, t.scanCount = n.data.scanCount, t.firstScanName = n.data.firstScanName, t.firstScanTime = sessionStorage.getItem("firstScanTime"))
          })
        }
      }
    }
  }, 46: function (t, n, e) {
  }, 48: function (t, n, e) {
    "use strict";
    e.r(n);
    var s = e(24), i = e(1);
    for (var o in i) ["default"].indexOf(o) < 0 && function (t) {
      e.d(n, t, function () {
        return i[t]
      })
    }(o);
    e(49);
    var a = e(0), r = Object(a.a)(i.default, s.a, s.b, !1, null, "1781d97c", null);
    n.default = r.exports
  }, 49: function (t, n, e) {
    "use strict";
    e(34)
  }, 692: function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return s
    }), e.d(n, "b", function () {
      return i
    });
    var s = function () {
      var t = this, n = t._self._c;
      return n("main", [t.load ? n("loading") : t._e(), t._v(" "), n("div", {staticClass: "top"}, [n("h4", [t._v(t._s(t.scanInfo.product && t.scanInfo.product.name))]), t._v(" "), n("p", {staticClass: "infos"}, [t._v("生产商：" + t._s(t.scanInfo.orgName))]), t._v(" "), n("p", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.wine,
          expression: "wine"
        }], staticClass: "infos"
      }, [t._v("全球运营商：中国500强新华联集团豪客酒行有限公司")]), t._v(" "), n("p", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.wine,
          expression: "wine"
        }], staticClass: "infos"
      }, [t._v("\n      客服电话："), n("span", {staticClass: "tel"}, [t._v("010-80559329")]), t._v(" "), t._m(0)])]), t._v(" "), n("div", {staticClass: "bottom"}, [n("div", {staticClass: "image"}, [n("img", {
        attrs: {
          src: t.scanInfo.product && t.scanInfo.product.bigPic,
          alt: ""
        }
      })]), t._v(" "), n("div", {staticClass: "text"}, [n("h6", [t._v("基本信息")]), t._v(" "), n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.tobacco,
          expression: "tobacco"
        }]
      }, [n("p", {staticClass: "infos"}, [t._v("规格: " + t._s(1 == t.scanInfo.product.unitType ? "盒" : "条"))]), t._v(" "), n("p", {staticClass: "infos"}, [t._v("类型: " + t._s(t.subinfo.typeName))]), t._v(" "), n("p", {staticClass: "infos"}, [t._v("焦油含量: " + t._s(t.subinfo.oil) + "mg")]), t._v(" "), n("p", {staticClass: "infos"}, [t._v("烟气一氧化碳量: " + t._s(t.subinfo.carbonMonoxide) + "mg")]), t._v(" "), n("p", {staticClass: "infos"}, [t._v("烟气烟碱量: " + t._s(t.subinfo.nicotine) + "mg")])]), t._v(" "), n("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.wine,
          expression: "wine"
        }]
      }, [n("p", {staticClass: "infos"}, [t._v("类型: " + t._s(1 == t.scanInfo.product.unitType ? "瓶" : "箱"))])])])]), t._v(" "), n("div", {staticClass: "scan-list"}, [n("h6", [t._v("扫码记录"), n("span", {
        staticStyle: {
          color: "#818181",
          "font-size": "0.36rem",
          "font-weight": "initial"
        }
      }, [t._v("（此码已被扫描"), n("span", {staticStyle: {color: "red"}}, [t._v(t._s(t.scanCount))]), t._v("次）")])]), t._v(" "), n("h5", [t._v("首扫人信息")]), t._v(" "), n("ul", [n("li", [n("p", [t._v(t._s(t.firstScanName))]), t._v(" "), n("p", {staticClass: "count"}, [t._v(t._s(t.firstScanTime))])])]), t._v(" "), n("h5", [t._v("最近10条扫码记录")]), t._v(" "), n("ul", t._l(t.scanList, function (e, s) {
        return n("li", [n("p", [t._v(t._s(e.userName))]), t._v(" "), n("p", {staticClass: "count"}, [t._v(t._s(e.scanTime))])])
      }), 0)])], 1)
    }, i = [function () {
      var t = this._self._c;
      return t("a", {
        staticClass: "tel-icon",
        attrs: {href: "tel:010-80559329"}
      }, [t("img", {attrs: {src: "/es/hehua/img/ic-tel.png"}})])
    }]
  }, 77: function (t, n) {
  }, 898: function (t, n, e) {
  }
}, [[1532, 0, 1]]]);
