(window.webpackJsonp = window.webpackJsonp || []).push([[141], {
  1: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(2), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 10: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      name: "alert", data: function () {
        return {show: !1}
      }, props: {constants: {type: Object, required: !0}}, methods: {
        close: function () {
          var t = event.currentTarget;
          this.show = !1, t.className.indexOf("btn-left") >= 0 ? this.$emit("getAwardFn") : t.className.indexOf("btn-right") >= 0 ? this.$emit("cancelFn") : t.className.indexOf("btn-middle") >= 0 && this.$emit("alertFn")
        }, goHome: function () {
          location.href = "../../views/common/yz.html?t=" + +new Date + "&from=others"
        }, callback: function () {
          this.show = !1, this.$emit("alertCallback")
        }
      }
    }
  }, 119: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(120), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 120: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(n(23));
    e.default = {
      name: "alert", data: function () {
        return {navList: [], color: "", token: sessionStorage.getItem("token")}
      }, props: {}, beforeMount: function () {
        this.token || (this.token = a.default.getQueryString("token"), sessionStorage.setItem("token", this.token));
        var t = this;
        this.Fetch.get("/es/hehua/json/menu-conf.json").then(function (e) {
          t.navList = e, 0 != t.navList.length && (t.color = e[0].bgColor, t.navList.forEach(function (t, e) {
            t.isShow = !0;
            var n = location.origin + location.pathname, a = "";
            a = location.origin + t.menuUri, (n.indexOf(t.menuUri) > -1 || a.indexOf(location.pathname) > -1) && (t.isShow = !1);
            var s = "";
            s = t.menuUri.indexOf("?") > -1 ? "&from=others" : "?from=others", t.jumpUrl = location.origin + t.menuUri + s
          }))
        })
      }, methods: {
        selected: function (t, e) {
          event.currentTarget.setAttribute("src", this.navList[e].activeIcon)
        }
      }
    }
  }, 133: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {attrs: {id: "root"}}, [e("nav", {style: {background: t.color}}, [e("ul", t._l(t.navList, function (n, a) {
        // return e("li", {key: a}, [e("a", {attrs: {href: n.jumpUrl}}, [e("img", {
        return e("li", {key: a}, [e("a", {attrs: {href: 'javascript:void(0);'}}, [e("img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: n.isShow,
            expression: "item.isShow"
          }], staticClass: "nav-img", attrs: {src: n.icon, alt: ""}, on: {
            click: function (e) {
              return t.selected(n.name, a)
            }
          }
        }), t._v(" "), e("img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !n.isShow,
            expression: "!item.isShow"
          }], staticClass: "nav-img", attrs: {src: n.activeIcon, alt: ""}, on: {
            click: function (e) {
              return t.selected(n.name, a)
            }
          }
        })])])
      }), 0)])])
    }, s = []
  }, 153: function (t, e, n) {
  }, 155: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      "act-100": "fanzuanshi.html",
      "act-101": "jiugongge.html",
      "act-102": "yuanbao.html",
      "act-103": "smash-egg.html",
      "act-104": "fanpaizi.html",
      "act-111": "hpiaoxiang.html",
      "act-112": "rockPaperScissors.html",
      "act-113": "boating.html",
      "act-501": "question.html",
      "act-301": "redPacked.html",
      "act-105": "round.html",
      "act-701": "niudan.html",
      "act-702": "dadishu.html",
      "act-703": "daqiqiu.html",
      "act-704": "jiawawa.html",
      "act-705": "dhongbao.html",
      "act-601": "diy.html"
    }
  }, 1622: function (t, e, n) {
    "use strict";
    n(79);
    var a = c(n(72)), s = c(n(144)), i = c(n(1623));
    n(46);
    var o = c(n(19)), r = c(n(155));

    function c(t) {
      return t && t.__esModule ? t : {default: t}
    }

    n(182), a.default.use(s.default), a.default.prototype.Fetch = o.default, a.default.prototype.actPath = r.default, new a.default({
      render: function (t) {
        return t(i.default)
      }
    }).$mount("#app")
  }, 1623: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(720), s = n(515);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1644);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1624: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(729), s = n(517);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1625);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1625: function (t, e, n) {
    "use strict";
    n(930)
  }, 1626: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(730), s = n(519);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1629);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1627: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(737), s = n(521);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1628);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "0adcf48a", null);
    e.default = r.exports
  }, 1628: function (t, e, n) {
    "use strict";
    n(931)
  }, 1629: function (t, e, n) {
    "use strict";
    n(932)
  }, 1630: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(731), s = n(523);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1631);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1631: function (t, e, n) {
    "use strict";
    n(933)
  }, 1632: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(732), s = n(525);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1633);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1633: function (t, e, n) {
    "use strict";
    n(934)
  }, 1634: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(733), s = n(527);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1635);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1635: function (t, e, n) {
    "use strict";
    n(935)
  }, 1636: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(734), s = n(529);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1637);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "43b68234", null);
    e.default = r.exports
  }, 1637: function (t, e, n) {
    "use strict";
    n(936)
  }, 1638: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(735), s = n(531);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1641);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "095610f6", null);
    e.default = r.exports
  }, 1639: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(738), s = n(533);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1640);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "8113c00c", null);
    e.default = r.exports
  }, 1640: function (t, e, n) {
    "use strict";
    n(937)
  }, 1641: function (t, e, n) {
    "use strict";
    n(938)
  }, 1642: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(736), s = n(535);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(1643);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 1643: function (t, e, n) {
    "use strict";
    n(939)
  }, 1644: function (t, e, n) {
    "use strict";
    n(940)
  }, 182: function (t, e, n) {
    "use strict";
    var a = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(n(19));
    !function (t, e) {
      "undefined" == typeof wx ? function (t) {
        var e = window.document, n = e.getElementsByTagName("script")[0], a = e.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js", a.onload = function () {
          t()
        }, n.parentNode.insertBefore(a, n)
      }(e) : e()
    }(0, function () {
      function t(t, e, n, s) {
        a.default.get("/es/hehua/json/wx-jsapi.json", {url: location.href.split("#")[0]}).then(function (a) {
          var i = a.appId, o = a.timestamp, r = a.nonceStr, c = a.signature;
          wx.config({
            debug: !1,
            appId: i,
            timestamp: o,
            nonceStr: r,
            signature: c,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "showOptionMenu", "translateVoice", "scanQRCode"]
          }), wx.ready(function () {
            !function (t, e, n, a) {
              wx.showOptionMenu(), wx.onMenuShareTimeline({
                title: t, link: n, imgUrl: a, success: function () {
                }, error: function (t) {
                  alert(JSON.stringify(t))
                }
              }), wx.onMenuShareAppMessage({
                title: t, link: n, imgUrl: a, desc: e, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareQQ({
                title: t, link: n, imgUrl: a, desc: e, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareWeibo({
                title: t, link: n, imgUrl: a, desc: e, trigger: function (t) {
                }, success: function (t) {
                }, cancel: function (t) {
                }, fail: function (t) {
                }
              }), wx.onMenuShareQZone({
                title: t, desc: e, link: n, imgUrl: a, success: function () {
                }, cancel: function () {
                }
              })
            }(t, e, n, s)
          })
        })
      }

      !function () {
        if (sessionStorage.getItem("share")) {
          var e = JSON.parse(sessionStorage.getItem("share")).shareConf,
            n = JSON.parse(sessionStorage.getItem("share")).prefix, s = "", i = "", o = "", r = "";
          e.forEach(function (t) {
            "home" == t.menuType && (s = t.title, i = t.content, o = n + "/syx/orgmenu/auth?menuCode=" + t.menuCode, r = t.icon)
          }), t(s, i, o, r)
        } else a.default.get("/es/hehua/json/org-all.json", {}).then(function (e) {
          if (200 == e.code) {
            var n = e.data.prefix, a = e.data.shareConf;
            sessionStorage.setItem("share", JSON.stringify(e.data));
            var s = "", i = "", o = "", r = "";
            a.forEach(function (t) {
              "home" == t.menuType && (s = t.title, i = t.content, o = n + "/syx/orgmenu/auth?menuCode=" + t.menuCode, r = t.icon)
            }), t(s, i, o, r)
          }
        })
      }()
    })
  }, 183: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(133), s = n(119);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(184);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, null, null);
    e.default = r.exports
  }, 184: function (t, e, n) {
    "use strict";
    n(153)
  }, 19: function (t, e, n) {
    "use strict";
    (function (t, a) {
      Object.defineProperty(e, "__esModule", {value: !0});
      var s = function (t) {
        return t && t.__esModule ? t : {default: t}
      }(n(23));
      var i = t.CancelToken.source();
      if (t.defaults.headers["X-Requested-With"] = "XMLHttpRequest", !sessionStorage.getItem("token")) {
        var o = s.default.getQueryString("token");
        sessionStorage.setItem("token", o)
      }

      function r(e, n, s, o) {
        var r = {method: e, url: n, cancelToken: i.token};
        return "get" === e ? r.params = s : "post" === e && (1 == o ? (r.headers = {"Content-type": "application/json;charset=UTF-8"}, r.data = JSON.stringify(s)) : r.data = a.stringify(s)), new Promise(function (e, n) {
          t(r).then(function (t) {
            200 == t.status && null != t.data && e(t.data)
          }).catch(function (t) {
            window.location.href = "/es/hehua/overtime-error.html", n(t)
          })
        })
      }

      t.defaults.headers.token = sessionStorage.getItem("token"), t.defaults.timeout = 6e4;
      var c = {
        get: function (t, e) {
          return r("get", t, e)
        }, post: function (t, e, n) {
          return r("post", t, e, n)
        }
      };
      e.default = c
    }).call(this, n(75), n(76))
  }, 2: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {}
  }, 23: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = {
      getQuerys: function () {
        return window.location.search.substr(1)
      }, getQueryString: function (t) {
        return function (t) {
          var e = new RegExp("(?:^|&)" + t + "=([^&]*)(?:&|$)", "i"), n = window.location.search.substr(1).match(e);
          return null != n ? n[1] : null
        }(t)
      }, remQueryString: function (t) {
        return function (t) {
          var e = window.location.search.substr(1);
          if (e.indexOf(t) > -1) {
            for (var n = {}, a = e.split("&"), s = 0; s < a.length; s++) a[s] = a[s].split("="), n[a[s][0]] = a[s][1];
            delete n[t], e = JSON.stringify(n).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&")
          }
          return e
        }(t)
      }, getRandomStr: function (t, e, n) {
        return function (t, e, n) {
          var a = "", s = e,
            i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          if ("number" != typeof s) return console.log("getRandomStr: min值应为Number类型");
          if (t) {
            if ("number" != typeof n) return console.log("getRandomStr: max值应为Number类型");
            s = Math.round(Math.random() * (n - e)) + e
          }
          for (var o = 0; o < s; o++) a += i[Math.round(Math.random() * (i.length - 1))];
          return a
        }(t, e, n)
      }, compare: function (t, e) {
        return function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return function (n, a) {
            var s = n[t], i = a[t];
            return e ? s - i : i - s
          }
        }(t, e)
      }
    };
    e.default = a
  }, 24: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      this._self._c;
      return this._m(0)
    }, s = [function () {
      var t = this._self._c;
      return t("div", {staticClass: "loading-bg"}, [t("div", {staticClass: "content"}, [this._v("\n        正在加载中...\n    ")])])
    }]
  }, 28: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {attrs: {id: "root"}}, [e("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.show,
          expression: "show"
        }], staticClass: "confirm-alert-wrap"
      }, [e("div", {staticClass: "confirm-mask border-box"}, [e("p", {staticClass: "title"}, [t._v(t._s(t.constants.title || "提示"))]), t._v(" "), e("p", {
        staticClass: "message",
        domProps: {innerHTML: t._s(t.constants.msg ? t.constants.msg : "提示")}
      }, [t._v(t._s(t.constants.msg || "提示"))]), t._v(" "), "confirm" === t.constants.type ? e("div", {staticClass: "btn-double border-box"}, [e("div", {
        staticClass: "btn-left border-box",
        on: {click: t.close}
      }, [t._v("\n\t\t\t\t\t" + t._s(t.constants.text[0] || "确定") + "\n\t\t\t\t")]), t._v(" "), e("div", {
        staticClass: "btn-right border-box",
        on: {click: t.close}
      }, [t._v("\n\t\t\t\t\t" + t._s(t.constants.text[1] || "取消") + "\n\t\t\t\t")])]) : t._e()]), t._v(" "), "alert" !== t.constants.type || t.constants.flag ? "alert" === t.constants.type && "1" == t.constants.flag ? e("div", {
        staticClass: "btn-middle",
        on: {click: t.goHome}
      }, [t._v("\n\t\t\t" + t._s(t.constants.text[0] || "确定") + "\n\t\t")]) : "alert" === t.constants.type && "2" == t.constants.flag ? e("div", {
        staticClass: "btn-middle",
        on: {click: t.callback}
      }, [t._v("\n\t\t\t" + t._s(t.constants.text[0] || "确定") + "\n\t\t")]) : t._e() : e("div", {
        staticClass: "btn-middle",
        on: {click: t.close}
      }, [t._v("\n\t\t\t" + t._s(t.constants.text[0] || "确定") + "\n\t\t")])])])
    }, s = []
  }, 34: function (t, e, n) {
  }, 35: function (t, e, n) {
  }, 39: function (t, e, n) {
  }, 46: function (t, e, n) {
  }, 48: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(24), s = n(1);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(49);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "1781d97c", null);
    e.default = r.exports
  }, 49: function (t, e, n) {
    "use strict";
    n(34)
  }, 50: function (t, e, n) {
    "use strict";
    n.r(e);
    n(51);
    var a = n(0), s = Object(a.a)({}, function () {
      this._self._c;
      return this._m(0)
    }, [function () {
      var t = this._self._c;
      return t("div", {staticClass: "loading-animate-con"}, [t("div", {staticClass: "loading-animate"}, [t("p", [this._v("加载中,请稍后...")])])])
    }], !1, null, "1aa3cb5a", null);
    e.default = s.exports
  }, 51: function (t, e, n) {
    "use strict";
    n(35)
  }, 515: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(516), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 516: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = function () {
        return function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [], a = !0, s = !1, i = void 0;
            try {
              for (var o, r = t[Symbol.iterator](); !(a = (o = r.next()).done) && (n.push(o.value), !e || n.length !== e); a = !0) ;
            } catch (t) {
              s = !0, i = t
            } finally {
              try {
                !a && r.return && r.return()
              } finally {
                if (s) throw i
              }
            }
            return n
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(), s = g(n(183)), i = g(n(58)), o = g(n(1624)), r = g(n(1626)), c = g(n(1630)), l = g(n(1632)), u = g(n(1634)),
      f = g(n(48)), d = g(n(1636)), h = g(n(1638)), m = g(n(1642)), v = g(n(23));

    function g(t) {
      return t && t.__esModule ? t : {default: t}
    }

    e.default = {
      components: {
        yz: o.default,
        activity: r.default,
        gzh: c.default,
        unscantop: l.default,
        navPart: s.default,
        unscanbot: u.default,
        loading: f.default,
        redPacked: d.default,
        scanTwo: h.default,
        activityPop: m.default,
        alertDialog: i.default
      }, data: function () {
        return {
          constants: {title: "提示", msg: "", type: "alert", text: ["确定"]},
          type: "",
          actlist: [],
          adList: [],
          fulfilledFlag: !1,
          fulfilled: {},
          unfulfilledFlag: !1,
          unfulfilled: {},
          A: "",
          contentA: {},
          B: "",
          contentB: {},
          C: "",
          contentC: {},
          contentM: {},
          contentN: {},
          contentTwo: {},
          load: !0,
          isRedAct: !1,
          redData: {},
          redImgJSON: {},
          fromParams: v.default.getQueryString("from") || "",
          activityPopFlag: !1,
          wjhPopFlag: !1,
          classFlag: ""
        }
      }, created: function () {
        var t = this;
        Promise.all([this.getScanResult(), this.getJSON(), this.getActivity(), this.getName(), this.getADList()]).then(function (e) {
          var n = a(e, 5), s = n[0], i = n[1], o = n[2], r = n[3], c = n[4];
          200 == r.code && (r.data.forEach(function (t, e) {
            "score_name_config" == t.propKey && sessionStorage.setItem("unit", t.propValue), "orgDomain" == t.propKey && sessionStorage.setItem("prefix", t.propValue), "score_valid_time" == t.propKey && sessionStorage.setItem("score_valid_time", t.propValue)
          }), sessionStorage.getItem("unit") || sessionStorage.setItem("unit", "积分"));
          if (o.data) {
            var l = o.data.filter(function (t) {
              return "act-301" === t.form
            });
            l.length && t.getRedPackedInfo(l[0].actCode)
          }
          if (200 == o.code ? t.actlist = o.data : t.actlist = [], t.load = !1, i) {
            null != i.actPopTips && (t.activityPopFlag = !0), i = i.scanCodePage;
            var u = JSON.parse(i.conf);
            t.type = i.type
          }
          if (200 == s.code) {
            var f = u.has.title.name;
            if (sessionStorage.setItem("title", f), s.data.unusualBatch && sessionStorage.setItem("unusualBatch", "1"), s.data.isMaxScanNum && (t.$refs.alert.show = !0, t.clickFlag = !1, t.constants = {
              title: "提示",
              msg: "您已超过当日验真次数，可继续进行验真，但无法进行抽奖活动和领奖，请明天再来哦",
              type: "alert",
              text: ["知道了"]
            }), document.title = sessionStorage.getItem("title"), t.fulfilled = u.has, delete u.has.title, sessionStorage.setItem("info", JSON.stringify(s.data)), t.fulfilledFlag = !0, -1 !== s.data.orgName.indexOf("山西昆明") && (t.activityPopFlag = !1), "SCMB-001" === t.type) {
              var d = JSON.parse(JSON.stringify(o.data)), h = [];
              h = d.length <= 5 ? d : d.slice(0, 5), t.showPage(u.has, !0, s.data, h)
            } else "SCMB-002" === t.type && (t.contentTwo = u);
            3001 == s.data.checkResult && (-1 != sessionStorage.getItem("prefix").indexOf("hbz") && (t.wjhPopFlag = !0, t.classFlag = "hbz"), -1 != sessionStorage.getItem("prefix").indexOf("hbh") && (t.wjhPopFlag = !0, t.classFlag = "hbh"))
          } else t.Fetch.get(i.pubUrl).then(function (e) {
            t.unfulfilled = JSON.parse(e.not);
            var n = t.unfulfilled.title.name;
            document.title = n, t.showPage(t.unfulfilled, !1)
          });
          200 == c.code && (console.log(c.data), c.data.length > 0 && (t.contentTwo.has.yz.botFlag = 1, "yes" == c.data[0].adJumpInfo ? t.Fetch.post("/syx/adtf/jumpInfo", {adCode: c.data[0].adCode}).then(function (e) {
            200 == e.code && (c.data[0].adJumpUrl = e.data.turl, t.adList = c.data)
          }) : t.adList = c.data))
        }).catch(function (t) {
          return console.log(t)
        })
      }, methods: {
        alertFn: function () {
          this.$refs.alert.show = !1
        }, getADList: function () {
          var t = this;
          return new Promise(function (e, n) {
            t.Fetch.get("/es/hehua/json/adtf-list.json", {}).then(function (t) {
              e(t)
            })
          })
        }, getScanResult: function () {
          var t = this;
          return new Promise(function (e, n) {
            t.Fetch.get(`/es/hehua/${sessionStorage.getItem("productName")}/checkResult.json`).then(function (t) {
              t.data.firstScanTime = sessionStorage.getItem("firstScanTime")
              e(t)
            })
          })
        }, getJSON: function () {
          var t = this;
          return new Promise(function (e, n) {
            t.Fetch.get(`/es/hehua/${sessionStorage.getItem('productName')}/scanCodeCheckConf.json`).then(function (t) {
              e(t)
            })
          })
        }, getActivity: function () {
          var t = this;
          return new Promise(function (e, n) {
            t.Fetch.get("/es/hehua/json/act-list.json", {}).then(function (t) {
              e(t)
            })
          })
        }, getName: function () {
          var t = this;
          return new Promise(function (e, n) {
            t.Fetch.get("/es/hehua/json/commonList.json", {}).then(function (t) {
              e(t)
            })
          })
        }, getRedPackedInfo: function (t) {
          var e = this;
          this.Fetch.post("/syx/act/redrain/jinfo", {actCode: t}).then(function (t) {
            if ("200" === t.code) {
              if (e.redData = t.data, !e.redData.actJinfo && !e.redData.rrTfInfo) return;
              var n = t.data.activity.confUrl;
              e.getRedImgUrl(n)
            }
          }).catch(function (t) {
            console.log(t)
          })
        }, getRedImgUrl: function (t) {
          var e = this;
          this.Fetch.get(t).then(function (t) {
            e.isRedAct = !0, e.redImgJSON = t
          }).catch(function (t) {
            console.log(t)
          })
        }, showPage: function (t, e, n, a) {
          var s = this;
          e ? Object.keys(t).forEach(function (e, i) {
            var o = t[e];
            0 === i ? (s.A = e, s.contentA = s.merge(e, o, n, a)) : 2 === i ? (s.B = e, s.contentB = s.merge(e, o, n, a)) : 1 === i && (s.C = e, s.contentC = s.merge(e, o, n, a))
          }) : (this.contentM = t.yz, this.contentN = t.gzh, this.unfulfilledFlag = !0)
        }, merge: function (t, e, n, a) {
          return "yz" === t ? Object.assign({}, e, n) : "activity" === t ? Object.assign({}, e, [a]) : e
        }
      }
    }
  }, 517: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(518), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 518: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      name: "Info",
      props: ["content"],
      data: function () {
        return {unusualBatch: sessionStorage.getItem("unusualBatch"), tobacoo: !1, mycontent: this.content}
      },
      mounted: function () {
        console.log("info"), console.log(this.content), "prod1" == this.content.product.type && "guest" != this.content.product.orgId && (this.tobacoo = !0)
      }
    }
  }, 519: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(520), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 520: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(n(1627));
    e.default = {
      props: ["content"], data: function () {
        return {myContent: this.content, actPath: this.actPath}
      }, computed: {
        banner: function () {
          return this.myContent[0].filter(function (t) {
            return "act-301" !== t.form
          })
        }
      }, created: function () {
        console.log(this.content)
      }, components: {carousel: a.default}, methods: {
        moreActs: function () {
          window.location.href = "activity.html"
        }
      }
    }
  }, 521: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(522), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 522: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(144);
    e.default = {
      name: "carousel", props: ["banner"], components: {Swipe: a.Swipe, SwipeItem: a.SwipeItem}, data: function () {
        return {mark: 0, mybanner: [], len: this.banner.length, path: this.actPath}
      }, created: function () {
        var t = this;
        this.banner.forEach(function (e) {
          "act-301" !== e.form && t.mybanner.push(e)
        })
      }, methods: {}, directives: {
        lb: {
          bind: function (t, e, n, a) {
            var s = t.childNodes, i = t.firstChild, o = void 0, r = void 0, c = e.value.time, l = void 0, u = void 0,
              f = void 0, d = 0;

            function h() {
              i.classList.remove("active"), i.classList.add("before"), o = i, i = null, r.classList.remove("after"), r.classList.add("active"), i = r, r = null, r = i.nextElementSibling || t.firstChild, setTimeout(function (t) {
                o.classList.remove("show", "before"), o = null, r.classList.remove("show")
              }, c / 3), setTimeout(function (t) {
                r.classList.add("after", "show")
              }, c / 2)
            }

            s.length <= 1 || (i.classList.add("active", "show"), (r = i.nextElementSibling).classList.add("after", "show"), l = setInterval(h, c), t.addEventListener("touchstart", function (t) {
              u = t.changedTouches[0].pageX, console.log("startX", u), clearInterval(l), l = null
            }), t.addEventListener("touchmove", function (t) {
            }), t.addEventListener("touchend", function (e) {
              f = e.changedTouches[0].pageX, console.log("endX", f), (d = f - u) < 100 ? h() : d > 100 && (o = i.previousElementSibling || t.lastChild, console.log("before", o), o.classList.add("before"), setTimeout(function (t) {
                o.classList.add("show"), i.classList.remove("active"), i.classList.add("next"), i = null, o.classList.add("before")
              }, c / 3), setTimeout(function (t) {
              }, c / 2))
            }))
          }
        }, carousel: {
          bind: function (t, e, n, a) {
            t.classList.add("flex", "transition"), t.style.transform = "translateX(-750px)";
            var s = parseInt(t.style.width), i = Number(s / 750), o = 1;
            setInterval(function () {
              o == i ? (t.style.transform = "translateX(-750px)", t.classList.remove("transition"), o = 1) : 0 == o ? (t.style.transform = "translateX(" + -750 * (i - 1) + "px)", t.classList.remove("transition"), o = i - 1) : (t.classList.add("transition"), t.style.transform = "translateX(" + -750 * o + "px)", o++)
            }, 3e3)
          }
        }
      }
    }
  }, 523: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(524), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 524: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      props: ["content"], data: function () {
        return {myContent: this.content}
      }
    }
  }, 525: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(526), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 526: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), n(91), e.default = {
      props: ["content"], data: function () {
        return {mycontent: this.content}
      }, methods: {
        vueScanQRCode: function () {
          _.wxScanQRCode()
        }
      }
    }
  }, 527: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(528), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 528: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      props: ["content"], data: function () {
        return {myContent: this.content}
      }
    }
  }, 529: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(530), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 530: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      props: ["redData", "redImgUrl"],
      data: function () {
        return {popupImg: {}, popupBtn1: {}, popupBtn2: {}, isOpen: !1}
      },
      watch: {},
      created: function () {
        this.popupImg = JSON.parse(this.redImgUrl.img).tips.tipsImg, this.popupBtn1 = JSON.parse(this.redImgUrl.img).tips.tipsBtn1, this.popupBtn2 = JSON.parse(this.redImgUrl.img).tips.tipsBtn2, this.isOpenPopup()
      },
      methods: {
        isOpenPopup: function () {
          var t = this.redData.actJinfo;
          if (this.redData.rrTfInfo && 0 != this.redData.rrTfInfo.restNum) {
            var e = new Date(this.redData.rrTfInfo.nowTime.replace(/-/g, "/")),
              n = new Date(this.redData.rrTfInfo.actTf.stime.replace(/-/g, "/")),
              a = new Date(this.redData.rrTfInfo.actTf.etime.replace(/-/g, "/")), s = t && t.canDraw && !t.drawed,
              i = e >= n && e <= a;
            this.isOpen = !(!s || !i)
          }
        }, goActPage: function () {
          // location.href = "/yx/views/activity/redPacked.html?actCode=" + this.redData.activity.actCode
        }
      }
    }
  }, 531: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(532), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 532: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(n(1639));
    e.default = {
      props: ["content", "actlist", "from", "adList"], data: function () {
        return {
          unusualBatch: sessionStorage.getItem("unusualBatch"),
          myContent: this.content,
          loadingWidth: 0,
          loadingTimer: null,
          loadingFlag: 0,
          productName: "",
          firstScanTime: "",
          checkResult: "",
          scanCount: "",
          showAct: {},
          actPath: this.actPath,
          isGuest: !1
        }
      }, components: {feedBack: a.default}, mounted: function () {
        var t = JSON.parse(sessionStorage.getItem("info"));
        this.firstScanTime = t.firstScanTime, this.productName = t.product.name, this.checkResult = t.checkResult, this.scanCount = t.scanCount, this.isGuest = "guest" == t.product.orgId, this.getShowAct()
      }, created: function () {
        var t = this.content;
        this.loadingFlag = t.loading.flag, 1 == this.loadingFlag && "others" != this.from && this.handleLoading(), 1 == this.loadingFlag && "others" == this.from && (this.loadingFlag = 0)
      }, methods: {
        getShowAct: function () {
          this.actlist.length && (this.showAct = this.actlist[0], console.log(this.actlist))
        }, handleLoading: function () {
          var t = this;
          this.loadingTimer = setInterval(function () {
            t.loadingWidth = Number(t.loadingWidth) + .3, t.loadingWidth >= 1 && (t.$refs.loading.style.width = "100%", clearInterval(t.loadingTimer), setTimeout(function () {
              t.handleLoadingEnd()
            }, 200)), t.$refs.loading.style.width = Math.round(100 * t.loadingWidth) + "%"
          }, 500)
        }, handleLoadingEnd: function () {
          this.loadingFlag = 0
        }, showFeedback: function () {
          this.$refs.feedback.handleFeedBackShow()
        }, jumpActlist: function () {
          location.href = "activity.html?t=" + (new Date).getTime()
        }
      }
    }
  }, 533: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(534), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 534: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var a = o(n(224)), s = o(n(22)), i = o(n(50));

    function o(t) {
      return t && t.__esModule ? t : {default: t}
    }

    function r(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t
    }

    e.default = {
      props: ["content"], data: function () {
        var t;
        return r(t = {
          isReadonly: !1,
          defaultImg: "/es/hehua/img/mes-fail-qr.png",
          qrCodeImg: "",
          validateCodeImg: "",
          inputValue: "",
          scanCode: "",
          submitFlag: !1,
          errFlag: !1,
          errMsg: ""
        }, "submitFlag", !1), r(t, "feedBackFlag", !1), r(t, "qrCodeFormData", null), r(t, "loadingAnimate", !1), t
      }, components: {loadingAnimate: i.default}, mounted: function () {
        this.qrCodeFormData = new FormData
      }, created: function () {
      }, methods: {
        handleUpLoadImg4: function () {
          var t = this, e = event.target.files[0];
          if (e && e.size > 8e6) alert("请上传小于8M图片"); else {
            if (e) this.loadingAnimate = !0; else if (!e) return;
            (0, a.default)(e, {width: 200}).then(function (n) {
              t.qrCodeFormData.append("file", e), t.qrCodeImg = n.base64, t.loadingAnimate = !1
            })
          }
        }, handleSubmitFeedBack: function () {
          var t = this, e = this;
          if (this.qrCodeImg && this.$refs.rptPhone.value && this.$refs.rptName.value) {
            /^1[3456789]\d{9}$/.test(this.$refs.rptPhone.value) ? (this.qrCodeFormData.append("phoneNo", e.$refs.rptPhone.value), this.qrCodeFormData.append("name", this.$refs.rptName.value), (0, s.default)(".hhy-fail-alert-submit").attr("disabled", !0), this.loadingAnimate = !0, s.default.ajax({
              url: "/syx/code/fakeReport",
              type: "POST",
              cache: !1,
              data: e.qrCodeFormData,
              processData: !1,
              contentType: !1,
              headers: {ContentType: "multipart/form-data", token: sessionStorage.getItem("token")},
              success: function (t) {
                (0, s.default)(".hhy-fail-alert-submit").attr("disabled", !1), "200" == t.code ? (e.feedBackFlag = !1, e.qrCodeImg = "", e.submitFlag = !0, e.loadingAnimate = !1) : "500" == t.code && (e.loadingAnimate = !1, e.errMsg = t.msg, e.errFlag = !0, setTimeout(function () {
                  e.errFlag = !1
                }, 3e3))
              },
              error: function () {
                setTimeout(function() {
                  (0, s.default)(".hhy-fail-alert-submit").attr("disabled", !1), "200" == "200" ? (e.feedBackFlag = !1, e.qrCodeImg = "", e.submitFlag = !0, e.loadingAnimate = !1) : "500" == t.code && (e.loadingAnimate = !1, e.errMsg = t.msg, e.errFlag = !0, setTimeout(function () {
                    e.errFlag = !1
                  }, 3e3))
                }, 2000)
              }
            })) : (this.errMsg = "手机号码输入不正确", this.errFlag = !0, setTimeout(function () {
              t.errFlag = !1
            }, 3e3))
          } else this.errMsg = "请完善信息", this.errFlag = !0, setTimeout(function () {
            t.errFlag = !1
          }, 3e3)
        }, handleScanPage: function () {
          this.submitFlag = !1, this.qrCodeImg = "", this.$refs.rptName.value = "", this.$refs.rptPhone.value = ""
        }, handleFeedBackClose: function () {
          this.feedBackFlag = !1, this.qrCodeImg = "", this.$refs.rptName.value = "", this.$refs.rptPhone.value = ""
        }, handleFeedBackShow: function () {
          this.feedBackFlag = !0
        }
      }
    }
  }, 535: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(536), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 536: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
      props: ["actlist"], data: function () {
        return {actPath: this.actPath, form: "", actCode: "", popShow: !1, alertImg: "", btnStyle: {}}
      }, created: function () {
        var t = !1;
        this.actlist.forEach(function (e, n) {
          "act-301" != e.form || (t = !0)
        }), this.actlist.length > 0 && (t || (this.form = this.actlist[0].form, this.actCode = this.actlist[0].actCode, this.checkConf(this.actlist[0].popInfo || null)))
      }, components: {}, methods: {
        enterActivity: function () {
          // window.location.href = "/yx/views/activity/" + this.actPath[this.form] + "?actCode=" + this.actCode
        }, checkConf: function (t) {
          var e = this;
          this.alertImg = t, sessionStorage.getItem("notShow") || (-1 != sessionStorage.getItem("prefix").indexOf("hbh") ? setTimeout(function () {
            e.alertImg && (e.popShow = !0, sessionStorage.setItem("notShow", 1))
          }, 3500) : setTimeout(function () {
            e.alertImg && (e.popShow = !0, sessionStorage.setItem("notShow", 1))
          }, 500))
        }, closePop: function () {
          this.popShow = !1
        }
      }
    }
  }, 58: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(28), s = n(9);
    for (var i in s) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return s[t]
      })
    }(i);
    n(59);
    var o = n(0), r = Object(o.a)(s.default, a.a, a.b, !1, null, "b3999762", null);
    e.default = r.exports
  }, 59: function (t, e, n) {
    "use strict";
    n(39)
  }, 720: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("main", [e("alert-dialog", {
        ref: "alert",
        staticStyle: {"z-index": "99999999 !important"},
        attrs: {constants: t.constants},
        on: {alertFn: t.alertFn}
      }), t._v(" "), t.load ? e("loading") : t._e(), t._v(" "), t.activityPopFlag ? e("activity-pop", {attrs: {actlist: t.actlist}}) : t._e(), t._v(" "), t.wjhPopFlag ? e("div", {staticClass: "wjh"}, [e("div", {staticClass: "bg"}), t._v(" "), e("div", {
        staticClass: "pop",
        class: t.classFlag
      }, [e("div", {
        staticClass: "close", class: t.classFlag, on: {
          click: function (e) {
            t.wjhPopFlag = !1
          }
        }
      }), t._v(" "), e("div", {
        staticClass: "btn", class: t.classFlag, on: {
          click: function (e) {
            t.wjhPopFlag = !1
          }
        }
      })])]) : t._e(), t._v(" "), t.fulfilledFlag ? e("div", {staticClass: "fulfilled"}, ["SCMB-001" == t.type ? e("div", [e(t.A, {
        tag: "component",
        attrs: {content: t.contentA}
      }), t._v(" "), e(t.B, {tag: "component", attrs: {content: t.contentB}}), t._v(" "), e(t.C, {
        tag: "component",
        attrs: {content: t.contentC}
      })], 1) : t._e(), t._v(" "), "SCMB-002" == t.type ? e("div", [e("scan-two", {
        attrs: {
          content: t.contentTwo,
          actlist: t.actlist,
          from: t.fromParams,
          adList: t.adList
        }
      })], 1) : t._e()]) : t._e(), t._v(" "), t.unfulfilledFlag ? e("div", {staticClass: "unfulfilled"}, [e("unscantop", {attrs: {content: t.contentM}}), t._v(" "), e("unscanbot", {attrs: {content: t.contentN}})], 1) : t._e(), t._v(" "), e("div", {staticClass: "space"}), t._v(" "), e("navPart"), t._v(" "), t.isRedAct ? e("red-packed", {
        attrs: {
          redData: t.redData,
          redImgUrl: t.redImgJSON
        }
      }) : t._e()], 1)
    }, s = []
  }, 729: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "yz"}, [e("img", {
        staticClass: "bg",
        attrs: {src: t.mycontent.bg, alt: ""}
      }), t._v(" "), e("a", {staticClass: "producthref"}, [e("div", {staticClass: "image"}, [e("img", {
        attrs: {
          src: t.mycontent.product.bigPic,
          alt: ""
        }
      })]), t._v(" "), e("div", {staticClass: "info"}, [e("div", {class: {"detail-show": t.mycontent.detail}}, [e("span", [t._v(t._s(t.mycontent.product.name))]), t._v(" "), e("a", {attrs: {href: "/es/hehua/info.html"}}, [t.mycontent.detailFlag && "guest" != t.mycontent.product.orgId ? e("span", {staticClass: "detail"}, [t._v("详情")]) : t._e()])]), t._v(" "), [e("p", {staticClass: "infos"}, [t._v(t._s(1 == t.mycontent.checkResult ? "此码为正确编码" : 3e3 == t.mycontent.checkResult ? "此码疑似假码" : 3001 == t.mycontent.checkResult ? "此码未激活" : "系统错误"))])], t._v(" "), e("p", {staticClass: "infos"}, [t._v("首扫时间: " + t._s(t.mycontent.firstScanTime))]), t._v(" "), t.mycontent.scanCount < 9 ? e("p", {staticClass: "infos"}, [t._v("扫码次数: "), e("span", {staticStyle: {color: "red"}}, [t._v(t._s(t.mycontent.scanCount))]), t._v("次")]) : e("p", {staticClass: "infos"}, [t._v("此烟疑似假码")]), t._v(" "), t.tobacoo ? e("p", {staticClass: "tips"}, [t._v("本页面含有烟草产品信息,未满18岁请勿继续访问")]) : t._e()], 2)]), t._v(" "), e("div", {staticClass: "clear"})])
    }, s = []
  }, 730: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return t.myContent.show && 0 != t.banner.length ? e("div", {staticClass: "activity"}, [e("div", {staticClass: "header"}, [e("span", [t._v("精彩活动不间断")]), t._v(" "), e("a", {
        attrs: {href: "javascript:;"},
        on: {click: t.moreActs}
      }, [t._v("更多活动 >")])]), t._v(" "), "1" == t.myContent.tpl ? e("carousel", {attrs: {banner: t.banner}}) : e("ul", {staticClass: "list"}, t._l(t.banner, function (n, a) {
        return e("li", {key: a}, ["act-301" != n.form ? e("a", {
          staticClass: "bannera",
          // attrs: {href: "/yx/views/activity/" + t.actPath[n.form] + "?actCode=" + n.actCode}
          attrs: {href: 'javascript:void(0);'}
        }, [e("img", {attrs: {src: n.banner, alt: ""}})]) : t._e()])
      }), 0)], 1) : t._e()
    }, s = []
  }, 731: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "qr-has"}, [e("img", {
        staticClass: "bg",
        attrs: {src: t.myContent.bg, alt: ""}
      }), t._v(" "), e("div", {staticClass: "image qrimg"}, [e("img", {
        attrs: {
          src: t.myContent.qrIcon,
          alt: ""
        }
      })]), t._v(" "), e("p", {staticClass: "qrtext"}, [t._v("关注公众号"), e("em", [t._v('"' + t._s(t.myContent.name) + '"')]), t._v(" " + t._s(t.myContent.note))])])
    }, s = []
  }, 732: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "abnormal block"}, [e("div", {staticClass: "unscantop"}, [e("img", {
        staticClass: "bg",
        attrs: {src: t.mycontent.bg, alt: ""}
      }), t._v(" "), e("img", {
        staticClass: "logo",
        attrs: {src: t.mycontent.logoIcon, alt: ""}
      }), t._v(" "), e("p", {staticClass: "logotext"}, [t._v(t._s(t.mycontent.tip))]), t._v(" "), e("div", {
        staticClass: "buttonimg",
        on: {click: t.vueScanQRCode}
      }, [e("img", {attrs: {src: t.mycontent.btnIcon, alt: ""}})])])])
    }, s = []
  }, 733: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "qr"}, [e("img", {
        staticClass: "bg",
        attrs: {src: t.myContent.bg, alt: ""}
      }), t._v(" "), e("div", {staticClass: "image qrimg"}, [e("img", {
        attrs: {
          src: t.myContent.qrIcon,
          alt: ""
        }
      })]), t._v(" "), e("p", {staticClass: "qrtext"}, [t._v("关注公众号"), e("em", [t._v('"' + t._s(t.myContent.name) + '"')]), t._v(" " + t._s(t.myContent.note))])])
    }, s = []
  }, 734: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "content"}, [e("div", {
        staticClass: "red-packed",
        on: {click: t.goActPage}
      }, [e("a", {
        style: {background: `url('${t.redData.activity.banner}') no-repeat center / 100% 100%`},
        // attrs: {href: "/yx/views/activity/redPacked.html?actCode=" + t.redData.activity.actCode}
        attrs: {href: 'javascript:void(0);'}
      })]), t._v(" "), e("div", {
        directives: [{name: "show", rawName: "v-show", value: t.isOpen, expression: "isOpen"}],
        staticClass: "goAct"
      }, [e("div", {
        staticClass: "content",
        style: {background: `url('${t.popupImg.url}') no-repeat center / 100% 100%`}
      }, [e("div", {staticClass: "title"}, [t._v(" 拼手气  抢红包")]), t._v(" "), e("p", [t._v("红包雨进行中")])]), t._v(" "), e("div", {
        staticClass: "btn",
        style: {background: `url('${t.popupBtn1.url}') no-repeat center / 100% 100%`},
        on: {click: t.goActPage}
      }, [t._v("马上开抢")])])])
    }, s = []
  }, 735: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "scan2-root"}, [1 == t.loadingFlag && "others" != t.from ? e("div", {
        staticClass: "hhy-main",
        style: {backgroundImage: `url(${t.myContent.loading.bg})`}
      }, [e("div", {staticClass: "hhy-loading-con"}, [e("div", {staticClass: "hhy-loading-wrapper"}, [e("div", {
        ref: "loading",
        staticClass: "hhy-loading",
        style: {background: t.myContent.loading.color}
      })]), t._v(" "), e("div", {
        ref: "loadingCon",
        staticClass: "hhy-loading-under",
        style: {border: "1px solid " + t.myContent.loading.color}
      })])]) : t._e(), t._v(" "), 1 != t.loadingFlag ? e("div", {staticClass: "scan-info-page"}, [e("div", {staticClass: "img-top"}, [1 == t.myContent.has.yz.botFlag ? e("img", {
        attrs: {
          src: `/es/hehua/img/${sessionStorage.getItem("productName")}.jpg`,
          // src: t.myContent.has.yz.productImg,
          alt: ""
        }
      }) : t._e(), t._v(" "), 0 == t.myContent.has.yz.botFlag ? e("img", {
        attrs: {
          src: t.myContent.has.yz.productImgBig,
          alt: ""
        }
      }) : t._e()]), t._v(" "), 1 == t.checkResult && 1 == t.scanCount ? e("div", {staticClass: "yx-text"}, [e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("尊敬的用户")]), t._v(" "), [e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("此码为【" + t._s(t.productName) + "】的正确编码")])], t._v(" "), e("span", {staticClass: "date"}, [t._v("首次验证时间:" + t._s(t.firstScanTime) + " "), t.myContent.has.yz.detailFlag && !t.isGuest ? e("a", {
        style: {
          color: t.myContent.has.yz.color,
          border: "1px solid " + t.myContent.has.yz.color
        }, attrs: {href: "/es/hehua/info.html"}
      }, [t._v("详情")]) : t._e()]), t._v(" "), e("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isGuest,
          expression: "!isGuest"
        }], staticClass: "tips"
      }, [t._v(t._s(t.myContent.has.yz.note))])], 2) : t._e(), t._v(" "), 3e3 == t.checkResult || 1 == t.checkResult && t.scanCount > 1 ? e("div", {staticClass: "yx-text"}, [t.scanCount > 9 ? e("h2", {staticClass: "seat"}) : t._e(), t._v(" "), [t.scanCount <= 9 ? e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("抱歉，该二维码已被扫描，请注意甄别")]) : t._e(), t._v(" "), t.scanCount <= 9 ? e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("欢迎继续选购【" + t._s(t.productName) + "】")]) : t._e(), t._v(" "), t.scanCount > 9 ? e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("二维码异常")]) : t._e()], t._v(" "), e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("扫码次数 "), e("span", {staticClass: "count"}, [t._v(t._s(t.scanCount))]), t._v(" 次 "), t.myContent.has.yz.detailFlag && !t.isGuest ? e("a", {
        style: {
          color: t.myContent.has.yz.color,
          border: "1px solid " + t.myContent.has.yz.color
        }, attrs: {href: "/es/hehua/info.html"}
      }, [t._v("详情")]) : t._e()]), t._v(" "), t.scanCount <= 9 ? e("span", {staticClass: "date"}, [t._v("首次验证时间:" + t._s(t.firstScanTime) + " ")]) : t._e(), t._v(" "), e("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isGuest,
          expression: "!isGuest"
        }], staticClass: "tips"
      }, [t._v(t._s(t.myContent.has.yz.note))]), t._v(" "), 1 == t.myContent.has.yz.feedbackFlag && t.scanCount > 9 ? e("div", {
        staticClass: "feedback",
        on: {click: t.showFeedback}
      }, [e("img", {
        attrs: {
          src: t.myContent.has.yz.feedbackImg,
          alt: ""
        }
      })]) : t._e()], 2) : t._e(), t._v(" "), 3001 == t.checkResult ? e("div", {staticClass: "yx-text"}, [e("h2", {staticClass: "seat"}), t._v(" "), e("h2", {staticClass: "seat"}), t._v(" "), e("h2", {
        staticClass: "tip",
        style: {color: t.myContent.has.yz.color}
      }, [t._v("此码未激活 "), t.myContent.has.yz.detailFlag && !t.isGuest ? e("a", {
        style: {
          color: t.myContent.has.yz.color,
          border: "1px solid " + t.myContent.has.yz.color
        }, attrs: {href: "/es/hehua/info.html"}
      }, [t._v("详情")]) : t._e()]), t._v(" "), e("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isGuest,
          expression: "!isGuest"
        }], staticClass: "tips"
      }, [t._v(t._s(t.myContent.has.yz.note))]), t._v(" "), 1 == t.myContent.has.yz.feedbackFlag ? e("div", {
        staticClass: "feedback",
        on: {click: t.showFeedback}
      }, [e("img", {
        attrs: {
          src: t.myContent.has.yz.feedbackImg,
          alt: ""
        }
      })]) : t._e()]) : t._e(), t._v(" "), 1 == t.myContent.has.yz.botFlag && 0 == t.adList.length ? e("div", {staticClass: "img-bot"}, [1 == t.myContent.has.yz.botFlag ? e("img", {
        attrs: {
          src: t.myContent.has.yz.botImg,
          alt: ""
        }
      }) : t._e()]) : t._e(), t._v(" "), t.adList[0] ? e("div", {staticClass: "img-bot"}, [e("a", {attrs: {href: t.adList[0].adJumpUrl}}, [e("img", {
        attrs: {
          src: t.adList[0].adBanner,
          alt: ""
        }
      })])]) : t._e(), t._v(" "), e("div", {staticClass: "act-part"}, [e("p", [t.actlist.length >= 6 ? e("span", {
        style: {color: t.myContent.has.yz.color},
        on: {click: t.jumpActlist}
      }, [t._v("更多活动  》")]) : t._e()]), t._v(" "), t._l(t.actlist, function (n, a) {
        // return a < 5 ? e("div", {staticClass: "banner"}, [e("a", {attrs: {href: "/yx/views/activity/" + t.actPath[n.form] + "?actCode=" + n.actCode + "&t=" + (new Date).getTime()}}, [e("img", {
        return a < 5 ? e("div", {staticClass: "banner"}, [e("a", {attrs: {href: "javascript:void(0);"}}, [e("img", {
          attrs: {
            src: n.banner,
            alt: ""
          }
        })])]) : t._e()
      })], 2)]) : t._e(), t._v(" "), e("feed-back", {ref: "feedback", attrs: {content: t.myContent}})], 1)
    }, s = []
  }, 736: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this._self._c;
      return this.popShow ? t("div", {
        staticClass: "activity-pop", on: {
          touchmove: function (t) {
            t.preventDefault()
          }
        }
      }, [t("div", {staticClass: "activity-alert"}, [t("img", {
        staticClass: "alert-img",
        attrs: {src: this.alertImg, alt: ""},
        on: {click: this.enterActivity}
      }), this._v(" "), t("div", {staticClass: "close", on: {click: this.closePop}})])]) : this._e()
    }, s = []
  }, 737: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", {staticClass: "carousel"}, [e("mt-swipe", {attrs: {auto: 4e3}}, t._l(t.mybanner, function (n, a) {
        return e("mt-swipe-item", {key: a}, ["act-301" !== n.form ? e("a", {
          staticClass: "bannera",
          // attrs: {href: "/yx/views/activity/" + t.path[n.form] + "?actCode=" + n.actCode}
          attrs: {href: 'javascript:void(0);'}
        }, [e("img", {attrs: {src: n.banner, alt: ""}})]) : t._e()])
      }), 1)], 1)
    }, s = []
  }, 738: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a
    }), n.d(e, "b", function () {
      return s
    });
    var a = function () {
      var t = this, e = t._self._c;
      return e("div", [e("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.feedBackFlag,
          expression: "feedBackFlag"
        }], staticClass: "hhy-fail-alert-con"
      }, [e("div", {staticClass: "hhy-fail-alert"}, [e("div", {
        staticClass: "hhy-fail-alert-tip",
        style: {borderBottom: "1px solid" + t.content.has.yz.color}
      }, [e("h2", {
        staticClass: "hhy-fail-service-label",
        style: {color: t.content.has.yz.color}
      }, [t._v("请联系客服查验")]), t._v(" "), e("p", {staticClass: "hhy-fail-service-mobile"}, [t._v("客服电话：15511699502(同微信)")])]), t._v(" "), e("div", {staticClass: "hhy-fail-alert-qr"}, [e("div", {staticClass: "hhy-fail-common"}, [e("span", {
        staticClass: "hhy-fail-alert-qr-tip",
        style: {color: t.content.has.yz.color}
      }, [t._v("上传该烟的二维码")]), t._v(" "), e("div", {staticClass: "up-qr-img-con"}, [e("img", {
        staticClass: "hhy-fail-alert-qr-img",
        attrs: {src: t.qrCodeImg || t.defaultImg, alt: ""}
      }), t._v(" "), t.isReadonly ? t._e() : e("input", {
        staticClass: "hhy-qr-Input",
        attrs: {type: "file", accept: "image/*"},
        on: {change: t.handleUpLoadImg4}
      })])])]), t._v(" "), e("div", {staticClass: "hhy-fail-alert-personal"}, [e("div", {
        staticClass: "hhy-fail-alert-name",
        style: {borderBottom: "1px solid" + t.content.has.yz.color}
      }, [e("label", {
        staticClass: "alert-name-label",
        attrs: {for: "alert-name-input"}
      }, [t._v(" 姓名")]), t._v(" "), e("input", {
        ref: "rptName",
        attrs: {id: "alert-name-input", type: "text"}
      })]), t._v(" "), e("div", {
        staticClass: "hhy-fail-alert-mobile",
        style: {borderBottom: "1px solid" + t.content.has.yz.color}
      }, [e("label", {
        staticClass: "alert-mobile-label",
        attrs: {for: "alert-mobile-input"}
      }, [t._v("手机")]), t._v(" "), e("input", {
        ref: "rptPhone",
        attrs: {id: "alert-mobile-input", type: "text"}
      })])]), t._v(" "), e("button", {
        staticClass: "hhy-fail-alert-submit",
        style: {background: t.content.has.yz.color},
        on: {click: t.handleSubmitFeedBack}
      }, [t._v("上传")]), t._v(" "), e("button", {
        staticClass: "hhy-fail-alert-close",
        on: {click: t.handleFeedBackClose}
      })])]), t._v(" "), t.submitFlag ? e("div", {staticClass: "hhy-succ-alert"}, [e("div", {staticClass: "succ-alert-con"}, [e("h2", {
        staticClass: "succ-alert-h2",
        style: {color: t.content.has.yz.color}
      }, [t._v("上传成功")]), t._v(" "), e("span", {
        staticClass: "succ-alert-tip",
        style: {color: t.content.has.yz.color}
      }, [t._v("感谢您的配合")]), t._v(" "), e("button", {
        staticClass: "succ-alert-btn",
        staticStyle: {border: "1px solid #fff"},
        on: {click: t.handleScanPage}
      }, [t._v("确定")])])]) : t._e(), t._v(" "), t.errFlag ? e("div", {staticClass: "err-tip"}, [t._v("\n        " + t._s(t.errMsg) + "\n    ")]) : t._e(), t._v(" "), e("loading-animate", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.loadingAnimate,
          expression: "loadingAnimate"
        }]
      })], 1)
    }, s = []
  }, 77: function (t, e) {
  }, 9: function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(10), s = n.n(a);
    for (var i in a) ["default"].indexOf(i) < 0 && function (t) {
      n.d(e, t, function () {
        return a[t]
      })
    }(i);
    e.default = s.a
  }, 91: function (t, e, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, s = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(n(19));
    var i = {};
    !function () {
      function t() {
        WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}), WeixinJSBridge.on("menu:setfont", function () {
          WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0})
        })
      }

      "object" == ("undefined" == typeof WeixinJSBridge ? "undefined" : a(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke ? t() : document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", t, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", t), document.attachEvent("onWeixinJSBridgeReady", t))
    }(), function (t, e) {
      "undefined" == typeof wx ? function (e) {
        var n = t.document.getElementsByTagName("script")[0],
          a = (t.document || window.document).createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = "https://res.wx.qq.com/open/js/jweixin-1.2.0.js", a.onload = function () {
          e()
        }, n.parentNode.insertBefore(a, n)
      }(e) : e()
    }(window, function () {
      var t = {};
      window.location.href;

      function e(e, n, a) {
        s.default.get("/es/hehua/json/wx-jsapi.json", {url: location.href.split("#")[0]}).then(function (s) {
          t = s, wx.config({
            debug: !1,
            appId: t.appId,
            timestamp: t.timestamp,
            nonceStr: t.nonceStr,
            signature: t.signature,
            jsApiList: e
          }), wx.ready(function () {
            console.log("wx ready"), console.log(n), n && n()
          }), wx.error(function (t) {
            a && a(), console.log(t, "err")
          })
        })
      }

      i.wxShowShare = function (t, n) {
        e(["showOptionMenu", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"], function () {
          wx.showOptionMenu(), function (t, e) {
            wx.onMenuShareTimeline({
              title: t.title || "",
              imgUrl: t.img || "",
              link: t.link || "",
              desc: t.desc || "",
              success: function () {
                e && e(t)
              },
              error: function (t) {
              },
              fail: function (t) {
              }
            })
          }(t, n), function (t, e) {
            wx.onMenuShareAppMessage({
              title: t.title || "",
              imgUrl: t.img || "",
              link: t.link || "",
              desc: t.desc || "",
              success: function (n) {
                e && e(t)
              },
              cancel: function (t) {
              },
              fail: function (t) {
              }
            })
          }(t, n), function (t, e) {
            wx.onMenuShareQQ({
              title: t.title || "",
              imgUrl: t.img || "",
              link: t.link || "",
              desc: t.desc || "",
              success: function (n) {
                e && e(t)
              },
              cancel: function (t) {
              },
              fail: function (t) {
              }
            })
          }(t, n), function (t, e) {
            wx.onMenuShareWeibo({
              title: t.title || "",
              imgUrl: t.img || "",
              link: t.link || "",
              desc: t.desc || "",
              trigger: function (n) {
                e && e(t)
              },
              success: function (t) {
              },
              cancel: function (t) {
              },
              fail: function (t) {
              }
            })
          }(t, n)
        })
      }, i.wxhideShare = function (t) {
        e(["hideMenuItems", "hideAllNonBaseMenuItem"], function () {
          wx.hideAllNonBaseMenuItem()
        })
      }, i.wxScanQRCode = function (t) {
        e(["scanQRCode"], function () {
          console.log("scanQRCode callback");
          var e = {needResult: 0, scanType: ["qrCode", "barCode"]};
          e = Object.assign({}, e, t), console.log(e), wx.scanQRCode({
            needResult: e.needResult,
            scanType: e.scanType,
            success: function (t) {
              e.successCb && e.successCb(t)
            }
          })
        })
      }, i.wxGetLocation = function (t) {
        e(["getLocation"], function () {
          var e = {type: "wgs84"};
          e = Object.assign({}, e, t), wx.getLocation({
            type: e.type, success: function (t) {
              e.successCb && e.successCb(t)
            }, cancel: function (t) {
              e.cancelCb && e.cancelCb(t)
            }, fail: function (t) {
              e.failCb && e.failCb(t)
            }
          })
        })
      }, window._ = Object.assign({}, window._, i)
    })
  }, 930: function (t, e, n) {
  }, 931: function (t, e, n) {
  }, 932: function (t, e, n) {
  }, 933: function (t, e, n) {
  }, 934: function (t, e, n) {
  }, 935: function (t, e, n) {
  }, 936: function (t, e, n) {
  }, 937: function (t, e, n) {
  }, 938: function (t, e, n) {
  }, 939: function (t, e, n) {
  }, 940: function (t, e, n) {
  }
}, [[1622, 0, 1]]]);
