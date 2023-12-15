var e;
function t(e, t) {
  const n = Object.create(null)
    , o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? e=>!!n[e.toLowerCase()] : e=>!!n[e]
}
function n(e) {
  if (C(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o]
        , i = O(r) ? a(r) : n(r);
      if (i)
        for (const e in i)
          t[e] = i[e]
    }
    return t
  }
  return O(e) || B(e) ? e : void 0
}
!function() {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e=>{
        for (const n of e)
          if ("childList" === n.type)
            for (const e of n.addedNodes)
              "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
      }
    )).observe(document, {
      childList: !0,
      subtree: !0
    })
  }
  function t(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = function(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
        t
    }(e);
    fetch(e.href, t)
  }
}(),
function(e) {
  var t = !1
    , n = e.Promise;
  if (n) {
    var o = null
      , r = null;
    try {
      r = (o = n.resolve()).then
    } catch (i) {}
    o instanceof n && "function" == typeof r && !n.cast && (t = !0)
  }
  return t
}(e = self) || function() {
  var t;
  t = function() {
    function t(e) {
      return "function" == typeof e
    }
    var n = Array.isArray ? Array.isArray : function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }
      , o = 0
      , r = void 0
      , i = void 0
      , a = function(e, t) {
      p[o] = e,
        p[o + 1] = t,
      2 === (o += 2) && (i ? i(h) : b())
    }
      , s = "undefined" != typeof window ? window : void 0
      , l = s || {}
      , c = l.MutationObserver || l.WebKitMutationObserver
      , u = void 0 === e && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
      , d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
    function f() {
      var e = setTimeout;
      return function() {
        return e(h, 1)
      }
    }
    var p = new Array(1e3);
    function h() {
      for (var e = 0; e < o; e += 2)
        (0,
          p[e])(p[e + 1]),
          p[e] = void 0,
          p[e + 1] = void 0;
      o = 0
    }
    var m, g, v, y, b = void 0;
    function _(e, t) {
      var n = arguments
        , o = this
        , r = new this.constructor(T);
      void 0 === r[S] && D(r);
      var i, s = o._state;
      return s ? (i = n[s - 1],
        a((function() {
            return M(s, r, i, o._result)
          }
        ))) : B(o, r, e, t),
        r
    }
    function w(e) {
      if (e && "object" == typeof e && e.constructor === this)
        return e;
      var t = new this(T);
      return P(t, e),
        t
    }
    u ? b = function() {
        return process.nextTick(h)
      }
      : c ? (g = 0,
          v = new c(h),
          y = document.createTextNode(""),
          v.observe(y, {
            characterData: !0
          }),
          b = function() {
            y.data = g = ++g % 2
          }
      ) : d ? ((m = new MessageChannel).port1.onmessage = h,
          b = function() {
            return m.port2.postMessage(0)
          }
      ) : b = void 0 === s && "function" == typeof require ? function() {
        try {
          var e = require("vertx");
          return void 0 !== (r = e.runOnLoop || e.runOnContext) ? function() {
              r(h)
            }
            : f()
        } catch (t) {
          return f()
        }
      }() : f();
    var S = Math.random().toString(36).substring(16);
    function T() {}
    var x = void 0
      , C = new I;
    function E(e) {
      try {
        return e.then
      } catch (t) {
        return C.error = t,
          C
      }
    }
    function k(e, n, o) {
      var r, i, s, l;
      n.constructor === e.constructor && o === _ && n.constructor.resolve === w ? (s = e,
        1 === (l = n)._state ? O(s, l._result) : 2 === l._state ? A(s, l._result) : B(l, void 0, (function(e) {
            return P(s, e)
          }
        ), (function(e) {
            return A(s, e)
          }
        ))) : o === C ? (A(e, C.error),
        C.error = null) : void 0 === o ? O(e, n) : t(o) ? (r = n,
        i = o,
        a((function(e) {
            var t = !1
              , n = function(n, o, i, a) {
              try {
                n.call(o, (function(n) {
                    t || (t = !0,
                      r !== n ? P(e, n) : O(e, n))
                  }
                ), (function(n) {
                    t || (t = !0,
                      A(e, n))
                  }
                ))
              } catch (s) {
                return s
              }
            }(i, r, 0, 0, e._label);
            !t && n && (t = !0,
              A(e, n))
          }
        ), e)) : O(e, n)
    }
    function P(e, t) {
      var n;
      e === t ? A(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = t) || "object" == typeof n && null !== n ? k(e, t, E(t)) : O(e, t)
    }
    function L(e) {
      e._onerror && e._onerror(e._result),
        $(e)
    }
    function O(e, t) {
      e._state === x && (e._result = t,
        e._state = 1,
      0 !== e._subscribers.length && a($, e))
    }
    function A(e, t) {
      e._state === x && (e._state = 2,
        e._result = t,
        a(L, e))
    }
    function B(e, t, n, o) {
      var r = e._subscribers
        , i = r.length;
      e._onerror = null,
        r[i] = t,
        r[i + 1] = n,
        r[i + 2] = o,
      0 === i && e._state && a($, e)
    }
    function $(e) {
      var t = e._subscribers
        , n = e._state;
      if (0 !== t.length) {
        for (var o = void 0, r = void 0, i = e._result, a = 0; a < t.length; a += 3)
          o = t[a],
            r = t[a + n],
            o ? M(n, o, r, i) : r(i);
        e._subscribers.length = 0
      }
    }
    function I() {
      this.error = null
    }
    var N = new I;
    function M(e, n, o, r) {
      var i = t(o)
        , a = void 0
        , s = void 0
        , l = void 0
        , c = void 0;
      if (i) {
        if ((a = function(e, t) {
          try {
            return e(t)
          } catch (n) {
            return N.error = n,
              N
          }
        }(o, r)) === N ? (c = !0,
          s = a.error,
          a.error = null) : l = !0,
        n === a)
          return void A(n, new TypeError("A promises callback cannot return that same promise."))
      } else
        a = r,
          l = !0;
      n._state !== x || (i && l ? P(n, a) : c ? A(n, s) : 1 === e ? O(n, a) : 2 === e && A(n, a))
    }
    var R = 0;
    function D(e) {
      e[S] = R++,
        e._state = void 0,
        e._result = void 0,
        e._subscribers = []
    }
    function j(e, t) {
      this._instanceConstructor = e,
        this.promise = new e(T),
      this.promise[S] || D(this.promise),
        n(t) ? (this._input = t,
          this.length = t.length,
          this._remaining = t.length,
          this._result = new Array(this.length),
          0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0,
            this._enumerate(),
          0 === this._remaining && O(this.promise, this._result))) : A(this.promise, new Error("Array Methods must be provided an Array"))
    }
    function F(e) {
      this[S] = R++,
        this._result = this._state = void 0,
        this._subscribers = [],
      T !== e && ("function" != typeof e && function() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      }(),
        this instanceof F ? function(e, t) {
          try {
            t((function(t) {
                P(e, t)
              }
            ), (function(t) {
                A(e, t)
              }
            ))
          } catch (n) {
            A(e, n)
          }
        }(this, e) : function() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }())
    }
    return j.prototype._enumerate = function() {
      for (var e = this.length, t = this._input, n = 0; this._state === x && n < e; n++)
        this._eachEntry(t[n], n)
    }
      ,
      j.prototype._eachEntry = function(e, t) {
        var n = this._instanceConstructor
          , o = n.resolve;
        if (o === w) {
          var r = E(e);
          if (r === _ && e._state !== x)
            this._settledAt(e._state, t, e._result);
          else if ("function" != typeof r)
            this._remaining--,
              this._result[t] = e;
          else if (n === F) {
            var i = new n(T);
            k(i, e, r),
              this._willSettleAt(i, t)
          } else
            this._willSettleAt(new n((function(t) {
                return t(e)
              }
            )), t)
        } else
          this._willSettleAt(o(e), t)
      }
      ,
      j.prototype._settledAt = function(e, t, n) {
        var o = this.promise;
        o._state === x && (this._remaining--,
          2 === e ? A(o, n) : this._result[t] = n),
        0 === this._remaining && O(o, this._result)
      }
      ,
      j.prototype._willSettleAt = function(e, t) {
        var n = this;
        B(e, void 0, (function(e) {
            return n._settledAt(1, t, e)
          }
        ), (function(e) {
            return n._settledAt(2, t, e)
          }
        ))
      }
      ,
      F.all = function(e) {
        return new j(this,e).promise
      }
      ,
      F.race = function(e) {
        var t = this;
        return n(e) ? new t((function(n, o) {
            for (var r = e.length, i = 0; i < r; i++)
              t.resolve(e[i]).then(n, o)
          }
        )) : new t((function(e, t) {
            return t(new TypeError("You must pass an array to race."))
          }
        ))
      }
      ,
      F.resolve = w,
      F.reject = function(e) {
        var t = new this(T);
        return A(t, e),
          t
      }
      ,
      F._setScheduler = function(e) {
        i = e
      }
      ,
      F._setAsap = function(e) {
        a = e
      }
      ,
      F._asap = a,
      F.prototype = {
        constructor: F,
        then: _,
        catch: function(e) {
          return this.then(null, e)
        }
      },
      F.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global)
          t = global;
        else if (void 0 !== e)
          t = e;
        else
          try {
            t = Function("return this")()
          } catch (r) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
        var n = t.Promise;
        if (n) {
          var o = null;
          try {
            o = Object.prototype.toString.call(n.resolve())
          } catch (r) {}
          if ("[object Promise]" === o && !n.cast)
            return
        }
        t.Promise = F
      }
      ,
      (F.Promise = F).polyfill(),
      F
  }
    ,
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : this.ES6Promise = t()
}(),
  function(e) {
    var t, n, o = "AlipayJSBridge", r = e[o], i = navigator.userAgent || navigator.swuserAgent, a = "apm-h5", s = e.window, l = e.document, c = e.console, u = e.parseInt, d = [], f = {
      getBAPSI: {
        isListening: !1,
        lastState: 2,
        on: function() {
          f.getBAPSI.isListening || (r.call("startMonitorBackgroundAudio"),
            f.getBAPSI.isListening = !0,
            h.on("getBackgroundAudioPlayedStateInfo", f.getBAPSI.listener))
        },
        off: function() {
          h.off("getBackgroundAudioPlayedStateInfo", f.getBAPSI.listener),
            r.call("stopMonitorBackgroundAudio"),
            f.getBAPSI.isListening = !1
        },
        listener: function(e) {
          var t = (e.data || {}).status
            , n = ["backgroundAudioPause", "backgroundAudioPlay", "backgroundAudioStop"][t];
          n && t !== f.getBAPSI.lastState && (h.trigger(n),
            f.getBAPSI.lastState = t)
        }
      }
    }, p = {
      openBluetoothAdapter: {},
      closeBluetoothAdapter: {},
      getBluetoothAdapterState: {},
      startBluetoothDevicesDiscovery: {
        b: function(e) {
          return V(e._) && (e._ = [e._]),
            E(e, {
              _: "services"
            }),
            e
        }
      },
      stopBluetoothDevicesDiscovery: {},
      getBluetoothDevices: {
        b: function(e) {
          return V(e._) && (e._ = [e._]),
            E(e, {
              _: "services"
            }),
            e
        },
        a: function(e) {
          return W(e.devices) && I(e.devices, (function(e, t) {
              E(t, {
                manufacturerData: "advertisData"
              })
            }
          )),
            e
        }
      },
      getConnectedBluetoothDevices: {
        a: function(e) {
          return W(e.devices) && I(e.devices, (function(e, t) {
              E(t, {
                manufacturerData: "advertisData"
              })
            }
          )),
            e
        }
      },
      connectBLEDevice: {
        b: function(e) {
          return E(e, {
            _: "deviceId"
          }),
            e
        }
      },
      disconnectBLEDevice: {},
      writeBLECharacteristicValue: {},
      readBLECharacteristicValue: {},
      notifyBLECharacteristicValueChange: {},
      getBLEDeviceServices: {
        b: function(e) {
          return E(e, {
            _: "deviceId"
          }),
            e
        }
      },
      getBLEDeviceCharacteristics: {},
      onBLECharacteristicValueChange: {
        m: "BLECharacteristicValueChange"
      },
      offBLECharacteristicValueChange: {
        m: "BLECharacteristicValueChange"
      },
      onBluetoothAdapterStateChange: {},
      offBluetoothAdapterStateChange: {},
      onBLEConnectionStateChanged: {
        m: "BLEConnectionStateChanged"
      },
      offBLEConnectionStateChanged: {
        m: "BLEConnectionStateChanged"
      },
      onBluetoothDeviceFound: {
        a: function(e) {
          return E(e, {
            manufacturerData: "advertisData"
          })
        }
      },
      offBluetoothDeviceFound: {},
      pushBizWindow: {},
      compressImage: {
        b: function(e) {
          return e.level = D(e.level) ? 4 : e.level,
            E(e, {
              _: "apFilePaths",
              level: "compressLevel%d"
            })
        },
        d: function(e, t) {
          M() ? r.call("compressImage", e, t) : g(t, {
            apFilePaths: e.apFilePaths || []
          })
        }
      },
      getLaunchParams: {
        d: function(e, t) {
          h.launchParams = s.ALIPAYH5STARTUPPARAMS || r.startupParams || {},
          F(t) && t(h.launchParams)
        }
      },
      onTabClick: {},
      offTabClick: {},
      onShare: {
        m: "onShare"
      },
      offShare: {
        m: "onShare"
      },
      connectSocket: {
        b: function(e) {
          return E(e, {
            headers: "header"
          })
        }
      },
      sendSocketMessage: {
        b: function(e) {
          return E(e, {
            _: "data"
          })
        }
      },
      closeSocket: {},
      onSocketOpen: {},
      offSocketOpen: {},
      onSocketMessage: {},
      offSocketMessage: {},
      onSocketError: {},
      offSocketError: {},
      onSocketClose: {},
      offSocketClose: {},
      alert: {
        b: function(e) {
          return D((e = E(e, {
            _: "content",
            content: "message%s",
            buttonText: "button%s"
          })).title) || (e.title = C("%s", e.title)),
            e
        }
      },
      confirm: {
        b: function(e) {
          return D((e = E(e, {
            _: "content%s",
            content: "message%s",
            confirmButtonText: "okButton%s",
            cancelButtonText: "cancelButton%s"
          })).title) || (e.title = C("%s", e.title)),
            e
        },
        a: function(e) {
          return E(e, {
            ok: "confirm"
          })
        }
      },
      showToast: {
        m: "toast",
        b: function(e) {
          return E(e, {
            _: "content%s"
          }),
          V(e.content) || (e.content = C("%s", e.content)),
            e
        }
      },
      hideToast: {},
      showLoading: {
        b: function(e) {
          return E(e, {
            _: "content",
            content: "text%s"
          })
        }
      },
      hideLoading: {},
      showNavigationBarLoading: {
        m: "showTitleLoading"
      },
      hideNavigationBarLoading: {
        m: "hideTitleLoading"
      },
      setNavigationBar: {
        b: function(e) {
          var t = "setTitle"
            , n = "setTitleColor"
            , o = "setBarBottomLineColor"
            , r = {
            setTitle: {},
            setTitleColor: {},
            setBarBottomLineColor: {}
          };
          return r[t] = E(r[t], {
            _: "title",
            title: "title%s",
            image: "image%b"
          }, e),
            r[n] = E(r[n], {
              backgroundColor: "color%c",
              reset: "reset"
            }, e),
            r[o] = E(r[o], {
              borderBottomColor: "color%c"
            }, e),
            r
        },
        d: function(e, t) {
          var n = "setTitle"
            , o = "setTitleColor"
            , i = "setBarBottomLineColor"
            , a = {};
          U(e[n]) || r.call(n, e[n]),
          U(e[i]) || (r.call(i, e[i]),
          j(e[i].color) && (a.error = 2,
            a.errorMessage = "颜色值不合法")),
            U(e[o]) ? g(t, a) : r.call(o, e[o], (function(e) {
                a = Y(e, a),
                  t(a)
              }
            ))
        }
      },
      showTabBar: {
        b: function(e) {
          if (e.action = "create",
            e.activeIndex = e.activeIndex || 0,
            E(e, {
              color: "textColor%c",
              activeColor: "selectedColor%c",
              activeIndex: "selectedIndex%d"
            }),
            W(e.items)) {
            var t = e.items;
            e.items = [],
              t.forEach((function(t, n) {
                  (t = E(Y({}, t), {
                    title: "name%s",
                    tag: "tag%s",
                    icon: "icon%b",
                    activeIcon: "activeIcon%b",
                    badge: "redDot%s"
                  }, {
                    tag: n,
                    badge: D(t.badge) ? "-1" : t.badge
                  })).icon = C("%b", t.icon),
                    t.activeIcon = C("%b", t.activeIcon),
                    e.items.push(t)
                }
              ))
          }
          return e
        },
        d: function(e, t, n) {
          var o = "showTabBar";
          D(f.showTabBar) ? f.showTabBar = {
            opt: n
          } : c.error(o + " must be called at most once"),
            h.on("tabClick", (function(e) {
                var n = {};
                E(n, {
                  tag: "index%d"
                }, {
                  tag: q(e.data) && e.data.tag ? e.data.tag : "0"
                }),
                  t(n)
              }
            )),
            r.call("tabBar", e, (function(e) {
                T(o, e)
              }
            ))
        }
      },
      setTabBarBadge: {
        m: "tabBar",
        b: function(e) {
          return e.action = "redDot",
            E(e, {
              index: "tag%s",
              badge: "redDot%s"
            }, {
              index: e.index
            }),
            e
        }
      },
      showActionSheet: {
        m: "actionSheet",
        b: function(e) {
          if (E(e, {
            items: "btns",
            cancelButtonText: "cancelBtn%s"
          }),
            W(e.btns)) {
            var t = e.btns;
            e.btns = [],
              t.forEach((function(t) {
                  return e.btns.push(t + "")
                }
              ))
          }
          return D(e.cancelBtn) && (e.cancelBtn = "取消"),
            e
        },
        a: function(e, t) {
          return W(t.btns) && e.index === t.btns.length && (e.index = -1),
            e
        }
      },
      redirectTo: {
        b: function(e) {
          return E(e, {
            _: "url"
          }),
          q(e.data) && (e.url = B(e.url, e.data)),
            e
        },
        d: function(e) {
          e.url && s.location.replace(e.url)
        }
      },
      pushWindow: {
        b: function(e) {
          return E(e, {
            _: "url",
            params: "param"
          }),
          -1 < e.url.indexOf("?") && c.warn("try opt.data instead of querystring"),
          -1 < e.url.indexOf("__webview_options__") && c.warn("try opt.params instead of __webview_options__"),
          q(e.data) && (e.url = B(e.url, e.data),
            delete e.data),
            e
        }
      },
      popWindow: {
        b: function(e) {
          return q((e = v(e)).data) || (e.data = {
            ___forResume___: e.data
          }),
            e
        }
      },
      popTo: {
        b: function(e) {
          var t;
          return E(e, {
            _: (t = void 0,
            H(e._) && (t = "index"),
            V(e._) && (t = "urlPattern"),
              t)
          }),
          q(e.data) || (e.data = {
            ___forResume___: e.data
          }),
            e
        }
      },
      allowPullDownRefresh: {
        d: function(e) {
          var t = "onPullDownRefresh";
          E(e, {
            _: "allow"
          }),
            e.allow = !!D(e.allow) || !!e.allow,
            q(f[t]) ? f[t].allow = e.allow : (f[t] = {
              allow: e.allow
            },
              h.onPullDownRefresh()),
            f[t].allow ? r.call("restorePullToRefresh") : f[t].event && f[t].event.preventDefault()
        }
      },
      choosePhoneContact: {
        m: "contact"
      },
      chooseAlipayContact: {
        m: "chooseContact",
        b: function(e) {
          return E(e, {
            _: "count"
          }),
          D(e.count) && (e.count = 1),
            1 === e.count ? e.type = "single" : (e.type = "multi",
              e.count <= 0 || 10 < e.count ? e.multiMax = 10 : e.multiMax = e.count),
            delete e.count,
            e
        },
        a: function(e) {
          return W(e.contacts) && e.contacts.forEach((function(e) {
              E(e, {
                headImageUrl: "avatar",
                name: "realName"
              }),
                delete e.from
            }
          )),
            e
        }
      },
      share: {
        b: function(e) {
          var t = {}
            , n = {};
          return t.onlySelectChannel = ["ALPContact", "ALPTimeLine", "ALPCommunity", "Weibo", "DingTalkSession", "SMS", "Weixin", "WeixinTimeLine", "QQ", "QQZone"],
          $(e, "bizType") && (t.bizType = e.bizType),
            delete (n = Y({}, e)).bizType,
            delete n.onlySelectChannel,
            E(n, {
              image: "imageUrl"
            }),
            f.share = {
              startShare: t,
              shareToChannel: n
            },
            e
        },
        d: function(e, t) {
          !1 === e.showToolBar && r.call("setToolbarMenu", {
            menus: [],
            override: !0
          }),
            r.call("startShare", f.share.startShare, (function(e) {
                var n = f.share.shareToChannel;
                e.channelName ? r.call("shareToChannel", {
                  name: e.channelName,
                  param: n
                }, t) : t(e)
              }
            ))
        }
      },
      datePicker: {
        b: function(e) {
          switch (E(e, {
            _: "formate",
            formate: "mode",
            currentDate: "beginDate",
            startDate: "minDate",
            endDate: "maxDate"
          }),
            e.mode) {
            case "HH:mm:ss":
              e.mode = 0;
              break;
            case "yyyy-MM-dd":
            default:
              e.mode = 1;
              break;
            case "yyyy-MM-dd HH:mm:ss":
              e.mode = 2
          }
          return e
        },
        a: function(e) {
          return V(e.date) && (e.date = e.date.replace(/\//g, "-").trim()),
            e
        }
      },
      chooseCity: {
        m: "getCities",
        b: function(e) {
          var t, n;
          function o(e) {
            var t;
            return W(e) && (t = [],
              e.forEach((function(e) {
                  t.push(E({}, {
                    city: "name",
                    adCode: "adcode%s",
                    spell: "pinyin"
                  }, e))
                }
              )),
              e = t),
              e
          }
          return E(e, {
            showHotCities: "needHotCity",
            cities: "customCities",
            hotCities: "customHotCities"
          }),
            !0 === e.showLocatedCity ? (e.currentCity = "",
              e.adcode = "") : (delete e.currentCity,
              delete e.adcode),
            delete e.showLocatedCity,
            t = e.customCities,
          D(e.customCities) || (e.customCities = o(t)),
            n = e.customHotCities,
          D(e.customHotCities) || (e.customHotCities = o(n)),
            e
        },
        a: function(e) {
          return E(e, {
            adcode: "adCode"
          }),
            e
        }
      },
      onBack: {
        a: function(e) {
          var t = {}
            , n = "onBack";
          return q(f[n]) ? f[n].event = e : f[n] = {
            event: e,
            allowButton: !0
          },
          !1 === f[n].allowButton && e.preventDefault(),
            t.backAvailable = f[n].allowButton,
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offBack: {},
      onResume: {
        a: function(e) {
          var t = {};
          return D(e.data) || (t.data = e.data),
          $(e.data, "___forResume___") && (t.data = e.data.___forResume___),
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offResume: {},
      onPause: {},
      offPause: {},
      onPageResume: {
        a: function(e) {
          var t = {};
          return D(e.data) || (t.data = e.data),
          $(e.data, "___forResume___") && (t.data = e.data.___forResume___),
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offPageResume: {},
      onPagePause: {},
      offPagePause: {},
      onTitleClick: {},
      offTitleClick: {},
      onPullDownRefresh: {
        m: "firePullToRefresh",
        a: function(e) {
          var t = {}
            , n = "onPullDownRefresh";
          return q(f[n]) ? f[n].event = e : f[n] = {
            event: e,
            allow: !0
          },
          !1 === f[n].allow && f[n].event.preventDefault(),
            t.refreshAvailable = f[n].allow,
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offPullDownRefresh: {
        m: "firePullToRefresh"
      },
      onNetworkChange: {
        d: function(e, t, n, o) {
          var r = function() {
            return h.getNetworkType(t)
          };
          b("h5NetworkChange", o, r),
            h.on("h5NetworkChange", r)
        }
      },
      offNetworkChange: {
        d: function(e, t, n, o) {
          _("h5NetworkChange", o)
        }
      },
      onAccelerometerChange: {
        b: function() {
          r.call("watchShake", {
            monitorAccelerometer: !0
          })
        },
        a: function(e) {
          var t = {};
          return E(t, {
            x: "x",
            y: "y",
            z: "z"
          }, q(e.data) ? e.data : e),
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offAccelerometerChange: {
        b: function() {
          r.call("watchShake", {
            monitorAccelerometer: !1
          })
        }
      },
      onCompassChange: {
        b: function() {
          r.call("watchShake", {
            monitorCompass: !0
          })
        },
        a: function(e) {
          var t = {};
          return E(t, {
            direction: "direction"
          }, q(e.data) ? e.data : e),
            t
        },
        e: {
          handleEventData: !1
        }
      },
      offCompassChange: {
        b: function() {
          r.call("watchShake", {
            monitorCompass: !1
          })
        }
      },
      onBackgroundAudioPlay: {
        b: function(e) {
          return f.getBAPSI.on(),
            e
        }
      },
      offBackgroundAudioPlay: {},
      onBackgroundAudioPause: {
        b: function(e) {
          return f.getBAPSI.on(),
            e
        }
      },
      offBackgroundAudioPause: {},
      onBackgroundAudioStop: {
        b: function(e) {
          return f.getBAPSI.on(),
            e
        }
      },
      offBackgroundAudioStop: {},
      onAppResume: {},
      offAppResume: {},
      onAppPause: {},
      offAppPause: {},
      getNetworkType: {
        a: function(e) {
          return D(e.networkInfo) || (e.networkType = (V(t = e.networkInfo) && (t = t.toUpperCase()),
            t)),
            delete e.err_msg,
            delete e.networkInfo,
            e;
          var t
        }
      },
      scan: {
        b: function(e) {
          return E(e, {
            _: "type"
          }),
            e.type = e.type || "qr",
            e
        },
        a: function(e) {
          return (e.qrCode || e.barCode) && (e.code = e.qrCode || e.barCode,
            delete e.qrCode,
            delete e.barCode),
            e
        }
      },
      watchShake: {
        b: function(e) {
          return U(e) && (e = null),
            e
        }
      },
      getLocation: {
        b: function(e) {
          return E(e, {
            accuracy: "horizontalAccuracy",
            type: "requestType%d"
          }),
          D(e.requestType) && (e.requestType = 2),
          M() && (D(e.isHighAccuracy) && (e.isHighAccuracy = !0),
          D(e.isNeedSpeed) && (e.isNeedSpeed = !0)),
            e
        },
        a: function(e) {
          return E(e, {
            citycode: "cityCode",
            adcode: "adCode"
          }),
          D(e.city) && e.province && (e.city = e.province),
          e.latitude && (e.latitude = C("%s", e.latitude)),
          e.longitude && (e.longitude = C("%s", e.longitude)),
          e.accuracy && (e.accuracy = C("%f", e.accuracy)),
          e.speed && (e.speed = C("%f", e.speed)),
            e
        }
      },
      getSystemInfo: {
        a: function(e) {
          var t = "pixelRatio"
            , n = "windowWidth"
            , o = "windowHeight"
            , r = "language";
          if (!$(e, "error")) {
            e[t] = C("%f", e[t]),
              e[n] = C("%d", e[n]),
              e[r] = (e[r] || "").replace(/\s?\w+\/((?:\w|-)+)$/, "$1"),
              e[o] = C("%d", e[o]);
            try {
              R() && h.compareVersion("10.0.12") < 0 && (e[o] = s.screen.height - 64)
            } catch (i) {}
          }
          return e
        }
      },
      vibrate: {},
      getServerTime: {},
      previewImage: {
        m: "imageViewer",
        b: function(e) {
          return E(e, {
            _: "urls",
            current: "init%d"
          }),
          D(e.init) && (e.init = 0),
            e.images = [],
            (e.urls || []).forEach((function(t) {
                e.images.push({
                  u: t
                })
              }
            )),
            delete e.urls,
            e
        }
      },
      chooseImage: {
        b: function(e) {
          return E(e, {
            _: "count%d"
          }),
          D(e.count) && (e.count = 1),
          V(e.sourceType) && (e.sourceType = [e.sourceType]),
            e
        },
        a: function(e) {
          return E(e, {
            errorCode: "error",
            errorDesc: "errorMessage",
            localIds: "apFilePaths",
            tempFilePaths: "apFilePaths"
          }),
            delete e.scene,
            delete e.localIds,
            delete e.tempFilePaths,
          V(e.apFilePaths) && (e.apFilePaths = N(e.apFilePaths)),
            e
        }
      },
      chooseVideo: {
        b: function(e) {
          return E(e, {
            _: "maxDuration%d"
          }),
          V(e.sourceType) && (e.sourceType = [e.sourceType]),
          V(e.camera) && (e.camera = [e.camera]),
            e
        },
        a: function(e) {
          switch (E(e, {
            errorCode: "error",
            errorDesc: "errorMessage",
            msg: "errorMessage",
            localId: "apFilePath",
            tempFilePath: "apFilePath",
            tempFile: "apFilePath"
          }),
            delete e.localId,
            delete e.tempFilePath,
            delete e.tempFile,
            e.error) {
            case 0:
              delete e.error;
              break;
            case 1:
              e.error = 2;
              break;
            case 2:
              e.error = 10;
              break;
            case 3:
              e.error = 11;
              break;
            case 4:
              e.error = 12
          }
          return e
        }
      },
      uploadFile: {
        b: function(e) {
          var t;
          return E(e, {
            headers: "header",
            fileName: "name",
            fileType: "type"
          }),
            t = e.filePath,
          /^[a-z0-9|]+$/i.test(t) && (e.localId = e.filePath,
            delete e.filePath),
            e
        },
        a: function(e) {
          return 2 === e.error && (e.error = 11),
            e
        }
      },
      saveImage: {
        b: function(e, t) {
          return E(e, {
            _: "url",
            url: "src"
          }),
          F(t) && (e.cusHandleResult = !0),
            e
        }
      },
      downloadFile: {
        b: function(e) {
          return E(e, {
            headers: "header"
          }),
            e
        },
        a: function(e) {
          return E(e, {
            tempFilePath: "apFilePath",
            errorCode: "error"
          }),
            delete e.tempFilePath,
            e
        }
      },
      setSessionData: {
        b: function(e) {
          return q((e = v(e)).data) || (e.data = {
            data: e.data
          }),
            I(e.data, (function(t, n) {
                e.data[t] = JSON.stringify(n)
              }
            )),
            e
        }
      },
      getSessionData: {
        b: function(e) {
          return V(e._) && (e.keys = [e._]),
          W(e._) && (e.keys = e._),
            delete e._,
            e
        },
        a: function(e) {
          return I(e.data, (function(t, n) {
              e.data[t] = N(n)
            }
          )),
            e
        }
      },
      startBizService: {
        b: function(e) {
          return E(e, {
            _: "name",
            params: "param%s"
          }),
            e
        }
      },
      tradePay: {
        b: function(e) {
          return E(e, {
            _: "orderStr"
          }),
            e
        }
      },
      getAuthCode: {
        b: function(e) {
          return E(e, {
            _: "scopes"
          }),
            V(e.scopes) ? e.scopeNicks = [e.scopes] : W(e.scopes) ? e.scopeNicks = e.scopes : e.scopeNicks = ["auth_base"],
            delete e.scopes,
            e
        },
        a: function(e) {
          return E(e, {
            authcode: "authCode"
          }),
            e
        }
      },
      getAuthUserInfo: {
        a: function(e) {
          return E(e, {
            nick: "nickName",
            userAvatar: "avatar"
          }),
            e
        }
      },
      openInBrowser: {
        b: function(e) {
          return E(e, {
            _: "url"
          })
        }
      },
      openLocation: {
        b: function(e) {
          return D(e.scale) && (e.scale = 15),
            e
        }
      },
      showPopMenu: {
        b: function(e) {
          if (E(e, {
            _: "items",
            items: "menus"
          }),
            q(f.showPopMenu) ? f.showPopMenu.menus = {} : f.showPopMenu = {
              menus: {}
            },
            W(e.menus)) {
            var t = e.menus;
            e.menus = [],
              t.forEach((function(t, n) {
                  V(t) && (t = {
                    title: t
                  }),
                  D((t = E(Y({}, t), {
                    title: "name%s",
                    tag: "tag%s",
                    badge: "redDot%s"
                  }, {
                    tag: n,
                    title: t.title,
                    badge: D(t.badge) ? "-1" : t.badge
                  })).icon) || (t.icon = C("%b", t.icon)),
                    e.menus.push(t),
                    f.showPopMenu.menus[t.name] = n
                }
              ))
          }
          return e
        },
        d: function(e, t) {
          var n = "showPopMenu";
          !0 !== f.showPopMenu.onEvent && (f.showPopMenu.onEvent = !0,
            h.on("popMenuClick", (function(e) {
                var n = {};
                E(n, {
                  title: "index%d"
                }, {
                  title: q(e.data) && e.data.title ? f.showPopMenu.menus[e.data.title] : "-1"
                }),
                  t(n)
              }
            ))),
            r.call(n, e, (function(e) {
                T(n, e)
              }
            ))
        }
      },
      setOptionButton: {
        m: "setOptionMenu",
        b: function(e) {
          if (V(e._) && (e.title = e._,
            delete e._),
          W(e._) && (e.items = e._,
            delete e._),
            E(e, {
              items: "menus",
              type: "iconType",
              badge: "redDot%s"
            }),
          D(e.icon) || (e.icon = C("%b", e.icon)),
            q(f.setOptionButton) ? f.setOptionButton.menus = [] : f.setOptionButton = {
              menus: []
            },
            W(e.menus)) {
            var t = e.menus;
            e.menus = [],
              t.forEach((function(n, o) {
                  D((n = E(Y({}, n), {
                    type: "icontype",
                    badge: "redDot%s"
                  }, {
                    badge: D(n.badge) ? "-1" : n.badge
                  })).icon) || (n.icon = C("%b", n.icon)),
                    e.menus.unshift(n),
                    f.setOptionButton.menus[t.length - 1 - o] = o
                }
              )),
            0 < e.menus.length && D(e.override) && (e.override = !0)
          }
          if (F(f.setOptionButton.onEvent) && h.off("optionMenu", f.setOptionButton.onEvent),
            F(e.onClick)) {
            var n = e.onClick
              , o = function(e) {
              var t = 0
                , o = {};
              q(e.data) && H(e.data.index) && 0 < f.setOptionButton.menus.length && (t = f.setOptionButton.menus[e.data.index]),
                o.index = C("%d", t),
                n(o)
            };
            f.setOptionButton.onEvent = o,
            !0 !== e.reset && h.on("optionMenu", o),
              delete e.onClick
          }
          return e
        },
        d: function(e, t) {
          r.call("setOptionMenu", e, t),
          R() && g(t, {}),
            h.showOptionButton()
        }
      },
      showOptionButton: {
        m: "showOptionMenu"
      },
      hideOptionButton: {
        m: "hideOptionMenu"
      },
      showBackButton: {},
      hideBackButton: {},
      allowBack: {
        d: function(e) {
          var t = "onBack";
          E(e, {
            _: "allowButton"
          }),
            e.allowButton = !!D(e.allowButton) || !!e.allowButton,
          "boolean" == typeof e.allowGesture && r.call("setGestureBack", {
            val: e.allowGesture
          }),
            q(f[t]) ? f[t].allowButton = e.allowButton : (f[t] = {
              allowButton: e.allowButton
            },
              h.onBack()),
          !1 === e.allowButton && f[t].event && f[t].event.preventDefault()
        }
      },
      startRecord: {
        m: "startAudioRecord",
        b: function(e) {
          return E(e, {
            maxDuration: "maxRecordTime%f",
            minDuration: "minRecordTime%f",
            bizType: "business"
          }, {
            maxDuration: e.maxDuration || 60,
            minDuration: e.minDuration || 1
          }),
          D(e.business) && (e.business = a),
            e
        },
        a: function(e) {
          return E(e, {
            tempFilePath: "apFilePath",
            identifier: "apFilePath"
          }),
            e
        }
      },
      stopRecord: {
        m: "stopAudioRecord"
      },
      cancelRecord: {
        m: "cancelAudioRecord"
      },
      playVoice: {
        m: "startPlayAudio",
        b: function(e) {
          return E(e, {
            _: "filePath",
            filePath: "identifier",
            bizType: "business"
          }),
          D(e.business) && (e.business = a),
            e
        },
        a: function(e) {
          return E(e, {
            identifier: "filePath"
          }),
            e
        }
      },
      pauseVoice: {
        m: "pauseAudioPlay"
      },
      resumeVoice: {
        m: "resumeAudioPlay"
      },
      stopVoice: {
        m: "stopAudioPlay"
      },
      makePhoneCall: {
        d: function(e, t) {
          var n = "tel:";
          E(e, {
            _: "number"
          }),
            n += e.number,
            r.call("openInBrowser", {
              url: n
            }, t)
        }
      },
      playBackgroundAudio: {
        b: function(e) {
          return E(e, {
            _: "url",
            url: "audioDataUrl%s",
            title: "audioName%s",
            singer: "singerName%s",
            describe: "audioDescribe%s",
            logo: "audioLogoUrl%s",
            cover: "coverImgUrl%s",
            bizType: "business"
          }, {
            bizType: e.bizType || a
          }),
            e
        },
        a: function(e) {
          return E(e, {
            describe: "errorMessage"
          }),
            x(e, 12, 0),
            e
        }
      },
      pauseBackgroundAudio: {
        a: function(e) {
          return E(e, {
            describe: "errorMessage"
          }),
            x(e, 12, 0),
            e
        }
      },
      stopBackgroundAudio: {
        a: function(e) {
          return E(e, {
            describe: "errorMessage"
          }),
            x(e, 12, 0),
            e
        }
      },
      seekBackgroundAudio: {
        b: function(e) {
          return E(e, {
            _: "position",
            bizType: "business"
          }, {
            bizType: e.bizType || a
          }),
            e.position = C("%f", e.position),
            e
        },
        a: function(e) {
          return E(e, {
            describe: "errorMessage"
          }),
            x(e, 12, 0),
            e
        }
      },
      getBackgroundAudioPlayerState: {
        a: function(e) {
          return E(e, {
            audioDataUrl: "url",
            describe: "errorMessage"
          }),
            x(e, 12, 0),
            e
        }
      }
    }, h = {
      version: "3.1.1",
      ua: i,
      isAlipay: L(/AlipayClient/),
      alipayVersion: (n = i.match(/AlipayClient[a-zA-Z]*\/(\d+(?:\.\d+)+)/),
        n && n.length ? n[1] : ""),
      compareVersion: function(e) {
        var t = h.alipayVersion.split(".");
        e = e.split(".");
        for (var n, o, r = 0; r < t.length; r++) {
          if (n = u(e[r], 10) || 0,
          (o = u(t[r], 10) || 0) < n)
            return -1;
          if (n < o)
            return 1
        }
        return 0
      },
      parseQueryString: function(e) {
        var t, n = {}, o = e || s.location.search, r = {
          true: !0,
          false: !1
        };
        o = (o = 0 === o.indexOf("?") ? o.substr(1) : o) ? o.split("&") : "";
        for (var i = 0; i < o.length; i++)
          (t = o[i].split("="))[1] = decodeURIComponent(t[1]),
            t[1] = D(r[t[1]]) ? t[1] : r[t[1]],
            n[t[0]] = t[1];
        return k("parseQueryString"),
          n
      },
      enableDebug: function() {
        h.debug = !0
      },
      on: function(e, t) {
        var n = "ready" === e;
        n || "back" === e ? l.addEventListener(n ? o + "Ready" : e, t, !1) : (e = e.replace(/ready/, o + "Ready")).split(/\s+/g).forEach((function(e) {
            l.addEventListener(e, t, !1)
          }
        ))
      },
      off: function(e, t) {
        l.removeEventListener(e, t, !1)
      },
      trigger: function(e, t) {
        var n = l.createEvent("Events");
        return n.initEvent(e, !1, !0),
          n.data = t || {},
          l.dispatchEvent(n),
          n
      },
      ready: function(e) {
        if (A())
          return new Promise(t);
        function t(t) {
          m() ? (F(e) && e(),
          F(t) && t()) : h.on("ready", (function() {
              m(),
              F(e) && e(),
              F(t) && t()
            }
          ))
        }
        t()
      },
      call: function() {
        var e = X(arguments);
        if (A())
          return h.ready().then((function() {
              return new Promise(t)
            }
          ));
        function t(t, n) {
          var o, i, a, s, l, u, d, f, m, g, v, y, x, C, E;
          o = e[0] + "",
            i = e[1],
          D(a = e[2]) && F(i) && (a = i,
            i = {}),
          !q(i) && 2 <= e.length && (i = {
            _: i
          }),
          D(i) && (i = {}),
            s = function(e, t, n) {
              var o = p[e]
                , r = o && o.b ? o.b(Y({}, t), n) : t
                , i = S(e, "optionModifier");
              if (F(i)) {
                var a = i(r, n);
                q(a) && (r = a)
              }
              return r
            }(o, i, a),
            E = {},
          F((C = (C = s) || {}).success) && (E.success = C.success,
            delete C.success),
          F(C.fail) && (E.fail = C.fail,
            delete C.fail),
          F(C.complete) && (E.complete = C.complete,
            delete C.complete),
            l = E,
          D(s) && c.error("please confirm " + o + ".before() returns the options."),
            m = !(!(v = p[o]) || !v.d) && v.d,
            g = $(i, "_") ? i._ : i,
            P(o, g, s),
            d = w("on", o),
            f = w("off", o),
            u = function(e) {
              var r, u, f = void 0;
              e = e || {},
              d && !1 !== S(o, "handleEventData") && (u = {},
              D((r = e).data) || (u = q(u = r.data) ? u : {
                data: u
              }),
                f = u),
              D(f = function(e, t, n, o, r) {
                var i = p[e]
                  , a = i && i.a ? i.a("[object Event]" === z(t) ? t : Y({}, t), n, o, r) : Y({}, t)
                  , s = S(e, "resultModifier");
                if (F(s)) {
                  var l = s(a, n, o, r);
                  q(l) && (a = l)
                }
                return a
              }(o, f || e, s, i, a)) && c.error("please confirm " + o + ".after() returns the result."),
                f = T(o, f),
                P(o, g, s, e, f),
                $(f, "error") || $(f, "errorMessage") ? (F(n) && n(f),
                F(l.fail) && l.fail(f)) : (F(t) && t(f),
                F(l.success) && l.success(f)),
              F(l.complete) && l.complete(f),
              F(a) && a(f)
            }
            ,
            F(m) ? m(s, u, i, a) : d ? (b(d, a, u, l),
              h.on(d, u)) : f ? _(f, a) : r.call((x = p[y = o]) && x.m ? x.m : y, s, u),
            k(o)
        }
        m() ? t() : d.push(e)
      },
      extendJSAPI: function(e, t) {
        !t && V(e) && (e = [e]),
          I(e, (function(n) {
              var o = n;
              if (!0 !== t) {
                var r = e[o];
                F(r) && (r = {
                  doing: r
                }),
                V(r) && (o = r,
                  (r = {})[o] = {}),
                  p[o] = E(p[o] || {}, {
                    mapping: "m",
                    before: "b",
                    doing: "d",
                    after: "a"
                  }, r),
                q(r.extra) && (p[o].e = p[o].e || {},
                  p[o].e = Y(p[o].e, r.extra))
              }
              h[o] = function() {
                return h.call.apply(null, [o].concat(X(arguments)))
              }
            }
          ), !0)
      }
    };
    function m() {
      return (r = r || e[o]) && r.call
    }
    function g(e, t) {
      setTimeout((function() {
          e(t)
        }
      ), 1)
    }
    function v(e, t) {
      var n = !1;
      return t = t || "data",
        $(e, "_") ? (e[t] = e._,
          delete e._) : (I(e, (function(e) {
            e !== t && (n = !0)
          }
        )),
        n && (n = e,
          (e = {})[t] = n)),
        e
    }
    function y(e, t, n) {
      var o, r = !1;
      return D(e) || (f.EVENTS || (f.EVENTS = {}),
      f.EVENTS[e] || (f.EVENTS[e] = {
        callbacks: []
      }),
      f.EVENTS[e].callbacks || (f.EVENTS[e].callbacks = []),
        f.EVENTS[e].callbacks.forEach((function(e, n) {
            e.cb === t && (r = e,
              o = n)
          }
        )),
      n && H(o) && f.EVENTS[e].callbacks.splice(o, 1)),
        r
    }
    function b(e, t, n, o) {
      y(e, t) || f.EVENTS[e].callbacks.push({
        cb: t,
        _cb: n,
        _cbSFC: o
      })
    }
    function _(e, t) {
      var n = y(e, t, !0);
      F(t) ? n && h.off(e, n._cb) : (f.EVENTS[e].callbacks.forEach((function(t) {
          h.off(e, t._cb)
        }
      )),
        f.EVENTS[e].callbacks = [])
    }
    function w(e, t) {
      var n, o = p[t], r = !1, i = "off" === e ? /^off([A-Z])(\w+)/ : /^on([A-Z])(\w+)/;
      return o && i.test(t) && (t = t.match(i),
      !(r = o.m) && t[1] && t[2] && (V(n = t[1]) && (n = n.toLowerCase()),
        r = n + t[2])),
        r
    }
    function S(e, t) {
      var n = p[e] || {};
      return (n.e || n.extra || {})[t]
    }
    function T(e, t) {
      return $(t, "error") && (t.error = u(t.error, 10)),
      !1 !== S(e, "handleResultSuccess") && x(t),
      0 === t.error && (delete t.error,
        delete t.errorMessage),
      0 < t.error && t.error < 10 && c.error(e, t),
        t
    }
    function x(e, t, n) {
      return n = !D(n) && n,
      $(e, "error") || e.success !== n || (e.error = H(t) ? t : 2),
        delete e.success,
        e
    }
    function C(e, t) {
      return "%s" === e && (t = function(e) {
        var t = e;
        if (q(e) || W(e))
          try {
            t = JSON.stringify(e)
          } catch (n) {}
        else
          t = e + "";
        return t
      }(t)),
      "%c" === e && (0 === (o = "" + (n = t)).indexOf("#") && (o = o.substr(1)),
      3 === o.length && (o = o.replace(/(.)/g, "$1$1")),
      j(o = u(o, 16)) && c.error(n + " is invalid hex color."),
        t = o),
      "%b" === e && (t = function(e) {
        return V(e) && (e = e.replace(/^data:(\/|\w|\-|\.)+;base64,/i, "")),
          e
      }(t)),
      "%d" === e && (t = u(t, 10)),
      "%f" === e && (t = parseFloat(t)),
        t;
      var n, o
    }
    function E(e, t, n) {
      var o;
      return n = n || {},
        I(t, (function(r, i) {
            var a, s, l;
            l = {
              k: a = t[r]
            },
            (s = (a || "").match(/(\w+)(%\w)$/i)) && (l.k = s[1],
              l.t = s[2]),
            !D(i = (o = l).k) && ($(e, r) || $(n, r)) && D(e[i]) && (e[i] = C(o.t, D(n[r]) ? e[r] : n[r]),
            i !== r && delete e[r])
          }
        )),
        e
    }
    h.extendJSAPI.mapping = E,
      h.extendJSAPI.toType = C,
    h.isAlipay || c.warn("Run alipayjsapi.js in Alipay please!"),
      h.extendJSAPI(p, !0),
      h.on("ready", (function() {
          d.length && function e() {
            O((function() {
                var t = d.shift();
                h.call.apply(null, t),
                d.length && e()
              }
            ))
          }()
        }
      ));
    var k = function() {
      var e = []
        , t = void 0
        , n = !1;
      function o() {
        setTimeout((function() {
            if (0 < e.length) {
              var o = e.join("|");
              h.ready((function() {
                  r.call("remoteLog", {
                    type: "monitor",
                    bizType: "ALIPAYJSAPI",
                    logLevel: 1,
                    actionId: "MonitorReport",
                    seedId: "ALIPAYJSAPI_INVOKE_COUNTER",
                    param1: o
                  })
                }
              )),
              h.debug && c.info("REMOTE_LOG_QUEUE>", e),
                e = []
            }
            !D(t) && clearTimeout(t),
              n = !1
          }
        ), 0)
      }
      return h.on("back", (function() {
          o()
        }
      )),
        function(r) {
          e.push(r),
            6 <= e.length ? o() : n || (n = !0,
              t = setTimeout((function() {
                  o()
                }
              ), 5e3))
        }
    }();
    function P() {
      var e, t, n, o, r, i, a = X(arguments);
      h.debug && (e = a[0],
        t = a[1],
        n = a[2],
        o = a[3],
        r = a[4],
        i = [3 < a.length ? "RETURN>" : "INVOKE>", e, $(t, "_") ? t._ : t, n],
      3 < a.length && i.push(o),
      4 < a.length && i.push(r),
        c.info(i))
    }
    function L(e) {
      return e.test(i)
    }
    var O = s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.msRequestAnimationFrame || function(e, t) {
        s.setTimeout((function() {
            e(+new Date, t)
          }
        ), 1e3 / 60)
      }
    ;
    function A() {
      if (void 0 === t) {
        var n = !1
          , o = e.Promise;
        if (o) {
          var r = null
            , i = null;
          try {
            i = (r = o.resolve()).then
          } catch (a) {}
          r instanceof o && F(i) && !o.cast && (n = !0)
        }
        n || c.warn("try callback since no Promise detected"),
          t = n
      }
      return t
    }
    function B(e, t) {
      var n, o = t;
      return q(t) && (n = [],
        I(t, (function(e, t) {
            n.push(e + "=" + encodeURIComponent(D(t) ? "" : t))
          }
        )),
        o = n = n.join("&")),
        /\?/.test(e) ? /&$/.test(e) || /\?$/.test(e) || (o = "&" + o) : o = "?" + o,
      e + o
    }
    function $(e, t) {
      return !(!q(e) && !W(e)) && e.hasOwnProperty(t)
    }
    function I(e, t, n) {
      var o, r, i;
      if (n || !(i = e) || F(i) || !W(i) && !H(i.length)) {
        for (r in e)
          if (!1 === t(r, e[r]))
            return e
      } else
        for (o = 0; o < e.length; o++)
          if (!1 === t(o, e[o]))
            return e;
      return e
    }
    function N(e) {
      try {
        e = JSON.parse(e)
      } catch (t) {
        c.warn(t, e)
      }
      return e
    }
    function M() {
      return L(/android/i)
    }
    function R() {
      return L(/iPad|iPod|iPhone|iOS/i)
    }
    function D(e) {
      return "[object Undefined]" === z(e)
    }
    function j(e) {
      return "NaN" === u(e, 10).toString()
    }
    function F(e) {
      return "[object Function]" === z(e)
    }
    function V(e) {
      return "string" == typeof e
    }
    function q(e) {
      return "[object Object]" === z(e)
    }
    function H(e) {
      return "[object Number]" === z(e)
    }
    function W(e) {
      return "[object Array]" === z(e)
    }
    function z(e) {
      return Object.prototype.toString.call(e)
    }
    function U(e) {
      for (var t in e)
        return !1;
      return !0
    }
    function X(e) {
      for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, n = e.length - t, o = new Array(n), r = 0; r < n; r++)
        o[r] = e[r + t];
      return o
    }
    function Y(e) {
      var t, n, o = X(arguments, 1);
      if (!q(e))
        return e;
      for (var r = 0, i = o.length; r < i; r++)
        for (n in t = o[r])
          hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    }
    e._AP = h,
      "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && (define.amd || define.cmd) ? define((function() {
          return h
        }
      )) : e.ap = e.AP = h
  }(self);
const o = /;(?![^(]*\))/g
  , r = /:([^]+)/
  , i = /\/\*.*?\*\//gs;
function a(e) {
  const t = {};
  return e.replace(i, "").split(o).forEach((e=>{
      if (e) {
        const n = e.split(r);
        n.length > 1 && (t[n[0].trim()] = n[1].trim())
      }
    }
  )),
    t
}
function s(e) {
  let t = "";
  if (O(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = s(e[n]);
      o && (t += o + " ")
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim()
}
const l = t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function c(e) {
  return !!e || "" === e
}
function u(e, t) {
  if (e === t)
    return !0;
  let n = P(e)
    , o = P(t);
  if (n || o)
    return !(!n || !o) && e.getTime() === t.getTime();
  if (n = A(e),
    o = A(t),
  n || o)
    return e === t;
  if (n = C(e),
    o = C(t),
  n || o)
    return !(!n || !o) && function(e, t) {
      if (e.length !== t.length)
        return !1;
      let n = !0;
      for (let o = 0; n && o < e.length; o++)
        n = u(e[o], t[o]);
      return n
    }(e, t);
  if (n = B(e),
    o = B(t),
  n || o) {
    if (!n || !o)
      return !1;
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const n in e) {
      const o = e.hasOwnProperty(n)
        , r = t.hasOwnProperty(n);
      if (o && !r || !o && r || !u(e[n], t[n]))
        return !1
    }
  }
  return String(e) === String(t)
}
function d(e, t) {
  return e.findIndex((e=>u(e, t)))
}
const f = e=>O(e) ? e : null == e ? "" : C(e) || B(e) && (e.toString === I || !L(e.toString)) ? JSON.stringify(e, p, 2) : String(e)
  , p = (e,t)=>t && t.__v_isRef ? p(e, t.value) : E(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`] = n,
      e)), {})
  } : k(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : !B(t) || C(t) || M(t) ? t : String(t)
  , h = {}
  , m = []
  , g = ()=>{}
  , v = ()=>!1
  , y = /^on[^a-z]/
  , b = e=>y.test(e)
  , _ = e=>e.startsWith("onUpdate:")
  , w = Object.assign
  , S = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  }
  , T = Object.prototype.hasOwnProperty
  , x = (e,t)=>T.call(e, t)
  , C = Array.isArray
  , E = e=>"[object Map]" === N(e)
  , k = e=>"[object Set]" === N(e)
  , P = e=>"[object Date]" === N(e)
  , L = e=>"function" == typeof e
  , O = e=>"string" == typeof e
  , A = e=>"symbol" == typeof e
  , B = e=>null !== e && "object" == typeof e
  , $ = e=>B(e) && L(e.then) && L(e.catch)
  , I = Object.prototype.toString
  , N = e=>I.call(e)
  , M = e=>"[object Object]" === N(e)
  , R = e=>O(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e
  , D = t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , j = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
  }
  , F = /-(\w)/g
  , V = j((e=>e.replace(F, ((e,t)=>t ? t.toUpperCase() : ""))))
  , q = /\B([A-Z])/g
  , H = j((e=>e.replace(q, "-$1").toLowerCase()))
  , W = j((e=>e.charAt(0).toUpperCase() + e.slice(1)))
  , z = j((e=>e ? `on ${W(e)}` : ""))
  , U = (e,t)=>!Object.is(e, t)
  , X = (e,t)=>{
    for (let n = 0; n < e.length; n++)
      e[n](t)
  }
  , Y = (e,t,n)=>{
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  }
  , G = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  }
;
let J;
const K = ["ad", "ad-content-page", "ad-draw", "audio", "button", "camera", "canvas", "checkbox", "checkbox-group", "cover-image", "cover-view", "editor", "form", "functional-page-navigator", "icon", "image", "input", "label", "live-player", "live-pusher", "map", "movable-area", "movable-view", "navigator", "official-account", "open-data", "picker", "picker-view", "picker-view-column", "progress", "radio", "radio-group", "rich-text", "scroll-view", "slider", "swiper", "swiper-item", "switch", "text", "textarea", "video", "view", "web-view"].map((e=>"uni-" + e));
const Z = /^([a-z-]+:)?\/\//i
  , Q = /^data:.*,.*/
  , ee = "onShow"
  , te = "onLoad"
  , ne = "onReady"
  , oe = "onUnload";
function re(e) {
  if (!e)
    return;
  let t = e.type.name;
  for (; t && (n = H(t),
  -1 !== K.indexOf("uni-" + n.replace("v-uni-", ""))); )
    t = (e = e.parent).type.name;
  var n;
  return e.proxy
}
function ie(e) {
  return 1 === e.nodeType
}
function ae(e) {
  return 0 === e.indexOf("/")
}
function se(e) {
  return ae(e) ? e : "/" + e
}
function le(e, t=null) {
  let n;
  return (...o)=>(e && (n = e.apply(t, o),
    e = null),
    n)
}
function ce(e) {
  return V(e.substring(5))
}
const ue = le((()=>{
    const e = HTMLElement.prototype
      , t = e.setAttribute;
    e.setAttribute = function(e, n) {
      if (e.startsWith("data-") && this.tagName.startsWith("UNI-")) {
        (this.__uniDataset || (this.__uniDataset = {}))[ce(e)] = n
      }
      t.call(this, e, n)
    }
    ;
    const n = e.removeAttribute;
    e.removeAttribute = function(e) {
      this.__uniDataset && e.startsWith("data-") && this.tagName.startsWith("UNI-") && delete this.__uniDataset[ce(e)],
        n.call(this, e)
    }
  }
));
function de(e) {
  return w({}, e.dataset, e.__uniDataset)
}
const fe = new RegExp("\"[^\"]+\"|'[^']+'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px","g");
function pe(e) {
  return {
    passive: e
  }
}
function he(e) {
  const {id: t, offsetTop: n, offsetLeft: o} = e;
  return {
    id: t,
    dataset: de(e),
    offsetTop: n,
    offsetLeft: o
  }
}
function me(e) {
  try {
    return decodeURIComponent("" + e)
  } catch (t) {}
  return "" + e
}
function ge(e={}) {
  const t = {};
  return Object.keys(e).forEach((n=>{
      try {
        t[n] = me(e[n])
      } catch (o) {
        t[n] = e[n]
      }
    }
  )),
    t
}
const ve = /\+/g;
function ye(e) {
  const t = {};
  if ("" === e || "?" === e)
    return t;
  const n = ("?" === e[0] ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(ve, " ");
    let r = e.indexOf("=")
      , i = me(r < 0 ? e : e.slice(0, r))
      , a = r < 0 ? null : me(e.slice(r + 1));
    if (i in t) {
      let e = t[i];
      C(e) || (e = t[i] = [e]),
        e.push(a)
    } else
      t[i] = a
  }
  return t
}
function be(e, t, {clearTimeout: n, setTimeout: o}) {
  let r;
  const i = function() {
    n(r);
    const i = ()=>e.apply(this, arguments);
    r = o(i, t)
  };
  return i.cancel = function() {
    n(r)
  }
    ,
    i
}
class _e {
  constructor(e, t) {
    this.id = e,
      this.listener = {},
      this.emitCache = [],
    t && Object.keys(t).forEach((e=>{
        this.on(e, t[e])
      }
    ))
  }
  emit(e, ...t) {
    const n = this.listener[e];
    if (!n)
      return this.emitCache.push({
        eventName: e,
        args: t
      });
    n.forEach((e=>{
        e.fn.apply(e.fn, t)
      }
    )),
      this.listener[e] = n.filter((e=>"once" !== e.type))
  }
  on(e, t) {
    this._addListener(e, "on", t),
      this._clearCache(e)
  }
  once(e, t) {
    this._addListener(e, "once", t),
      this._clearCache(e)
  }
  off(e, t) {
    const n = this.listener[e];
    if (n)
      if (t)
        for (let o = 0; o < n.length; )
          n[o].fn === t && (n.splice(o, 1),
            o--),
            o++;
      else
        delete this.listener[e]
  }
  _clearCache(e) {
    for (let t = 0; t < this.emitCache.length; t++) {
      const n = this.emitCache[t]
        , o = e ? n.eventName === e ? e : null : n.eventName;
      if (!o)
        continue;
      "number" != typeof this.emit.apply(this, [o, ...n.args]) ? (this.emitCache.splice(t, 1),
        t--) : this.emitCache.pop()
    }
  }
  _addListener(e, t, n) {
    (this.listener[e] || (this.listener[e] = [])).push({
      fn: n,
      type: t
    })
  }
}
const we = ["onInit", "onLoad", "onShow", "onHide", "onUnload", "onBackPress", "onPageScroll", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onShareTimeline", "onShareAppMessage", "onAddToFavorites", "onSaveExitState", "onNavigationBarButtonTap", "onNavigationBarSearchInputClicked", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputFocusChanged"]
  , Se = ["onLoad", "onShow"];
const Te = ["onShow", "onHide", "onLaunch", "onError", "onThemeChange", "onPageNotFound", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onResize", "onBackPress", "onPageScroll", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onShareTimeline", "onAddToFavorites", "onShareAppMessage", "onSaveExitState", "onNavigationBarButtonTap", "onNavigationBarSearchInputClicked", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputFocusChanged"];
const xe = [];
const Ce = le(((e,t)=>{
    if (L(e._component.onError))
      return t(e)
  }
))
  , Ee = function() {};
Ee.prototype = {
  on: function(e, t, n) {
    var o = this.e || (this.e = {});
    return (o[e] || (o[e] = [])).push({
      fn: t,
      ctx: n
    }),
      this
  },
  once: function(e, t, n) {
    var o = this;
    function r() {
      o.off(e, r),
        t.apply(n, arguments)
    }
    return r._ = t,
      this.on(e, r, n)
  },
  emit: function(e) {
    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++)
      n[o].fn.apply(n[o].ctx, t);
    return this
  },
  off: function(e, t) {
    var n = this.e || (this.e = {})
      , o = n[e]
      , r = [];
    if (o && t)
      for (var i = 0, a = o.length; i < a; i++)
        o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]);
    return r.length ? n[e] = r : delete n[e],
      this
  }
};
var ke = Ee;
const Pe = {
  black: "rgba(0,0,0,0.4)",
  white: "rgba(255,255,255,0.4)"
};
function Le(e, t={}, n="light") {
  const o = t[n]
    , r = {};
  return o ? (Object.keys(e).forEach((i=>{
      let a = e[i];
      r[i] = (()=>{
          if (M(a))
            return Le(a, t, n);
          if (C(a))
            return a.map((e=>M(e) ? Le(e, t, n) : e));
          if (O(a) && a.startsWith("@")) {
            const t = a.replace("@", "");
            let n = o[t] || a;
            switch (i) {
              case "titleColor":
                n = "black" === n ? "#000000" : "#ffffff";
                break;
              case "borderStyle":
                n = (e = n) && e in Pe ? Pe[e] : e
            }
            return n
          }
          var e;
          return a
        }
      )()
    }
  )),
    r) : e
}
let Oe;
class Ae {
  constructor(e=!1) {
    this.detached = e,
      this._active = !0,
      this.effects = [],
      this.cleanups = [],
      this.parent = Oe,
    !e && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(e) {
    if (this._active) {
      const t = Oe;
      try {
        return Oe = this,
          e()
      } finally {
        Oe = t
      }
    }
  }
  on() {
    Oe = this
  }
  off() {
    Oe = this.parent
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (t = 0,
             n = this.effects.length; t < n; t++)
        this.effects[t].stop();
      for (t = 0,
             n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0,
               n = this.scopes.length; t < n; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e && e !== this && (this.parent.scopes[this.index] = e,
          e.index = this.index)
      }
      this.parent = void 0,
        this._active = !1
    }
  }
}
function Be(e) {
  return new Ae(e)
}
const $e = e=>{
  const t = new Set(e);
  return t.w = 0,
    t.n = 0,
    t
}
  , Ie = e=>(e.w & De) > 0
  , Ne = e=>(e.n & De) > 0
  , Me = new WeakMap;
let Re = 0
  , De = 1;
let je;
const Fe = Symbol("")
  , Ve = Symbol("");
class qe {
  constructor(e, t=null, n) {
    this.fn = e,
      this.scheduler = t,
      this.active = !0,
      this.deps = [],
      this.parent = void 0,
      function(e, t=Oe) {
        t && t.active && t.effects.push(e)
      }(this, n)
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = je
      , t = We;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent
    }
    try {
      return this.parent = je,
        je = this,
        We = !0,
        De = 1 << ++Re,
        Re <= 30 ? (({deps: e})=>{
            if (e.length)
              for (let t = 0; t < e.length; t++)
                e[t].w |= De
          }
        )(this) : He(this),
        this.fn()
    } finally {
      Re <= 30 && (e=>{
          const {deps: t} = e;
          if (t.length) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              Ie(r) && !Ne(r) ? r.delete(e) : t[n++] = r,
                r.w &= ~De,
                r.n &= ~De
            }
            t.length = n
          }
        }
      )(this),
        De = 1 << --Re,
        je = this.parent,
        We = t,
        this.parent = void 0,
      this.deferStop && this.stop()
    }
  }
  stop() {
    je === this ? this.deferStop = !0 : this.active && (He(this),
    this.onStop && this.onStop(),
      this.active = !1)
  }
}
function He(e) {
  const {deps: t} = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0
  }
}
let We = !0;
const ze = [];
function Ue() {
  ze.push(We),
    We = !1
}
function Xe() {
  const e = ze.pop();
  We = void 0 === e || e
}
function Ye(e, t, n) {
  if (We && je) {
    let t = Me.get(e);
    t || Me.set(e, t = new Map);
    let o = t.get(n);
    o || t.set(n, o = $e()),
      Ge(o)
  }
}
function Ge(e, t) {
  let n = !1;
  Re <= 30 ? Ne(e) || (e.n |= De,
    n = !Ie(e)) : n = !e.has(je),
  n && (e.add(je),
    je.deps.push(e))
}
function Je(e, t, n, o, r, i) {
  const a = Me.get(e);
  if (!a)
    return;
  let s = [];
  if ("clear" === t)
    s = [...a.values()];
  else if ("length" === n && C(e)) {
    const e = Number(o);
    a.forEach(((t,n)=>{
        ("length" === n || n >= e) && s.push(t)
      }
    ))
  } else
    switch (void 0 !== n && s.push(a.get(n)),
      t) {
      case "add":
        C(e) ? R(n) && s.push(a.get("length")) : (s.push(a.get(Fe)),
        E(e) && s.push(a.get(Ve)));
        break;
      case "delete":
        C(e) || (s.push(a.get(Fe)),
        E(e) && s.push(a.get(Ve)));
        break;
      case "set":
        E(e) && s.push(a.get(Fe))
    }
  if (1 === s.length)
    s[0] && Ke(s[0]);
  else {
    const e = [];
    for (const t of s)
      t && e.push(...t);
    Ke($e(e))
  }
}
function Ke(e, t) {
  const n = C(e) ? e : [...e];
  for (const o of n)
    o.computed && Ze(o);
  for (const o of n)
    o.computed || Ze(o)
}
function Ze(e, t) {
  (e !== je || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Qe = t("__proto__,__v_isRef,__isVue")
  , et = new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments" !== e && "caller" !== e)).map((e=>Symbol[e])).filter(A))
  , tt = st()
  , nt = st(!1, !0)
  , ot = st(!0)
  , rt = it();
function it() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t=>{
      e[t] = function(...e) {
        const n = zt(this);
        for (let t = 0, r = this.length; t < r; t++)
          Ye(n, 0, t + "");
        const o = n[t](...e);
        return -1 === o || !1 === o ? n[t](...e.map(zt)) : o
      }
    }
  )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t=>{
        e[t] = function(...e) {
          Ue();
          const n = zt(this)[t].apply(this, e);
          return Xe(),
            n
        }
      }
    )),
    e
}
function at(e) {
  const t = zt(this);
  return Ye(t, 0, e),
    t.hasOwnProperty(e)
}
function st(e=!1, t=!1) {
  return function(n, o, r) {
    if ("__v_isReactive" === o)
      return !e;
    if ("__v_isReadonly" === o)
      return e;
    if ("__v_isShallow" === o)
      return t;
    if ("__v_raw" === o && r === (e ? t ? Mt : Nt : t ? It : $t).get(n))
      return n;
    const i = C(n);
    if (!e) {
      if (i && x(rt, o))
        return Reflect.get(rt, o, r);
      if ("hasOwnProperty" === o)
        return at
    }
    const a = Reflect.get(n, o, r);
    return (A(o) ? et.has(o) : Qe(o)) ? a : (e || Ye(n, 0, o),
      t ? a : Kt(a) ? i && R(o) ? a : a.value : B(a) ? e ? jt(a) : Dt(a) : a)
  }
}
function lt(e=!1) {
  return function(t, n, o, r) {
    let i = t[n];
    if (qt(i) && Kt(i) && !Kt(o))
      return !1;
    if (!e && (Ht(o) || qt(o) || (i = zt(i),
      o = zt(o)),
    !C(t) && Kt(i) && !Kt(o)))
      return i.value = o,
        !0;
    const a = C(t) && R(n) ? Number(n) < t.length : x(t, n)
      , s = Reflect.set(t, n, o, r);
    return t === zt(r) && (a ? U(o, i) && Je(t, "set", n, o) : Je(t, "add", n, o)),
      s
  }
}
const ct = {
  get: tt,
  set: lt(),
  deleteProperty: function(e, t) {
    const n = x(e, t);
    e[t];
    const o = Reflect.deleteProperty(e, t);
    return o && n && Je(e, "delete", t, void 0),
      o
  },
  has: function(e, t) {
    const n = Reflect.has(e, t);
    return A(t) && et.has(t) || Ye(e, 0, t),
      n
  },
  ownKeys: function(e) {
    return Ye(e, 0, C(e) ? "length" : Fe),
      Reflect.ownKeys(e)
  }
}
  , ut = {
  get: ot,
  set: (e,t)=>!0,
  deleteProperty: (e,t)=>!0
}
  , dt = w({}, ct, {
  get: nt,
  set: lt(!0)
})
  , ft = e=>e
  , pt = e=>Reflect.getPrototypeOf(e);
function ht(e, t, n=!1, o=!1) {
  const r = zt(e = e.__v_raw)
    , i = zt(t);
  n || (t !== i && Ye(r, 0, t),
    Ye(r, 0, i));
  const {has: a} = pt(r)
    , s = o ? ft : n ? Yt : Xt;
  return a.call(r, t) ? s(e.get(t)) : a.call(r, i) ? s(e.get(i)) : void (e !== r && e.get(t))
}
function mt(e, t=!1) {
  const n = this.__v_raw
    , o = zt(n)
    , r = zt(e);
  return t || (e !== r && Ye(o, 0, e),
    Ye(o, 0, r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function gt(e, t=!1) {
  return e = e.__v_raw,
  !t && Ye(zt(e), 0, Fe),
    Reflect.get(e, "size", e)
}
function vt(e) {
  e = zt(e);
  const t = zt(this);
  return pt(t).has.call(t, e) || (t.add(e),
    Je(t, "add", e, e)),
    this
}
function yt(e, t) {
  t = zt(t);
  const n = zt(this)
    , {has: o, get: r} = pt(n);
  let i = o.call(n, e);
  i || (e = zt(e),
    i = o.call(n, e));
  const a = r.call(n, e);
  return n.set(e, t),
    i ? U(t, a) && Je(n, "set", e, t) : Je(n, "add", e, t),
    this
}
function bt(e) {
  const t = zt(this)
    , {has: n, get: o} = pt(t);
  let r = n.call(t, e);
  r || (e = zt(e),
    r = n.call(t, e)),
  o && o.call(t, e);
  const i = t.delete(e);
  return r && Je(t, "delete", e, void 0),
    i
}
function _t() {
  const e = zt(this)
    , t = 0 !== e.size
    , n = e.clear();
  return t && Je(e, "clear", void 0, void 0),
    n
}
function wt(e, t) {
  return function(n, o) {
    const r = this
      , i = r.__v_raw
      , a = zt(i)
      , s = t ? ft : e ? Yt : Xt;
    return !e && Ye(a, 0, Fe),
      i.forEach(((e,t)=>n.call(o, s(e), s(t), r)))
  }
}
function St(e, t, n) {
  return function(...o) {
    const r = this.__v_raw
      , i = zt(r)
      , a = E(i)
      , s = "entries" === e || e === Symbol.iterator && a
      , l = "keys" === e && a
      , c = r[e](...o)
      , u = n ? ft : t ? Yt : Xt;
    return !t && Ye(i, 0, l ? Ve : Fe),
      {
        next() {
          const {value: e, done: t} = c.next();
          return t ? {
            value: e,
            done: t
          } : {
            value: s ? [u(e[0]), u(e[1])] : u(e),
            done: t
          }
        },
        [Symbol.iterator]() {
          return this
        }
      }
  }
}
function Tt(e) {
  return function(...t) {
    return "delete" !== e && this
  }
}
function xt() {
  const e = {
    get(e) {
      return ht(this, e)
    },
    get size() {
      return gt(this)
    },
    has: mt,
    add: vt,
    set: yt,
    delete: bt,
    clear: _t,
    forEach: wt(!1, !1)
  }
    , t = {
    get(e) {
      return ht(this, e, !1, !0)
    },
    get size() {
      return gt(this)
    },
    has: mt,
    add: vt,
    set: yt,
    delete: bt,
    clear: _t,
    forEach: wt(!1, !0)
  }
    , n = {
    get(e) {
      return ht(this, e, !0)
    },
    get size() {
      return gt(this, !0)
    },
    has(e) {
      return mt.call(this, e, !0)
    },
    add: Tt("add"),
    set: Tt("set"),
    delete: Tt("delete"),
    clear: Tt("clear"),
    forEach: wt(!0, !1)
  }
    , o = {
    get(e) {
      return ht(this, e, !0, !0)
    },
    get size() {
      return gt(this, !0)
    },
    has(e) {
      return mt.call(this, e, !0)
    },
    add: Tt("add"),
    set: Tt("set"),
    delete: Tt("delete"),
    clear: Tt("clear"),
    forEach: wt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r=>{
      e[r] = St(r, !1, !1),
        n[r] = St(r, !0, !1),
        t[r] = St(r, !1, !0),
        o[r] = St(r, !0, !0)
    }
  )),
    [e, n, t, o]
}
const [Ct,Et,kt,Pt] = xt();
function Lt(e, t) {
  const n = t ? e ? Pt : kt : e ? Et : Ct;
  return (t,o,r)=>"__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(x(n, o) && o in t ? n : t, o, r)
}
const Ot = {
  get: Lt(!1, !1)
}
  , At = {
  get: Lt(!1, !0)
}
  , Bt = {
  get: Lt(!0, !1)
}
  , $t = new WeakMap
  , It = new WeakMap
  , Nt = new WeakMap
  , Mt = new WeakMap;
function Rt(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : function(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0
    }
  }((e=>N(e).slice(8, -1))(e))
}
function Dt(e) {
  return qt(e) ? e : Ft(e, !1, ct, Ot, $t)
}
function jt(e) {
  return Ft(e, !0, ut, Bt, Nt)
}
function Ft(e, t, n, o, r) {
  if (!B(e))
    return e;
  if (e.__v_raw && (!t || !e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const a = Rt(e);
  if (0 === a)
    return e;
  const s = new Proxy(e,2 === a ? o : n);
  return r.set(e, s),
    s
}
function Vt(e) {
  return qt(e) ? Vt(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function qt(e) {
  return !(!e || !e.__v_isReadonly)
}
function Ht(e) {
  return !(!e || !e.__v_isShallow)
}
function Wt(e) {
  return Vt(e) || qt(e)
}
function zt(e) {
  const t = e && e.__v_raw;
  return t ? zt(t) : e
}
function Ut(e) {
  return Y(e, "__v_skip", !0),
    e
}
const Xt = e=>B(e) ? Dt(e) : e
  , Yt = e=>B(e) ? jt(e) : e;
function Gt(e) {
  We && je && Ge((e = zt(e)).dep || (e.dep = $e()))
}
function Jt(e, t) {
  const n = (e = zt(e)).dep;
  n && Ke(n)
}
function Kt(e) {
  return !(!e || !0 !== e.__v_isRef)
}
function Zt(e) {
  return en(e, !1)
}
function Qt(e) {
  return en(e, !0)
}
function en(e, t) {
  return Kt(e) ? e : new tn(e,t)
}
class tn {
  constructor(e, t) {
    this.__v_isShallow = t,
      this.dep = void 0,
      this.__v_isRef = !0,
      this._rawValue = t ? e : zt(e),
      this._value = t ? e : Xt(e)
  }
  get value() {
    return Gt(this),
      this._value
  }
  set value(e) {
    const t = this.__v_isShallow || Ht(e) || qt(e);
    e = t ? e : zt(e),
    U(e, this._rawValue) && (this._rawValue = e,
      this._value = t ? e : Xt(e),
      Jt(this))
  }
}
function nn(e) {
  return Kt(e) ? e.value : e
}
const on = {
  get: (e,t,n)=>nn(Reflect.get(e, t, n)),
  set: (e,t,n,o)=>{
    const r = e[t];
    return Kt(r) && !Kt(n) ? (r.value = n,
      !0) : Reflect.set(e, t, n, o)
  }
};
function rn(e) {
  return Vt(e) ? e : new Proxy(e,on)
}
var an;
class sn {
  constructor(e, t, n, o) {
    this._setter = t,
      this.dep = void 0,
      this.__v_isRef = !0,
      this[an] = !1,
      this._dirty = !0,
      this.effect = new qe(e,(()=>{
          this._dirty || (this._dirty = !0,
            Jt(this))
        }
      )),
      this.effect.computed = this,
      this.effect.active = this._cacheable = !o,
      this.__v_isReadonly = n
  }
  get value() {
    const e = zt(this);
    return Gt(e),
    !e._dirty && e._cacheable || (e._dirty = !1,
      e._value = e.effect.run()),
      e._value
  }
  set value(e) {
    this._setter(e)
  }
}
function ln(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e()
  } catch (i) {
    un(i, t, n)
  }
  return r
}
function cn(e, t, n, o) {
  if (L(e)) {
    const r = ln(e, t, n, o);
    return r && $(r) && r.catch((e=>{
        un(e, t, n)
      }
    )),
      r
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(cn(e[i], t, n, o));
  return r
}
function un(e, t, n, o=!0) {
  t && t.vnode;
  if (t) {
    let o = t.parent;
    const r = t.proxy
      , i = n;
    for (; o; ) {
      const t = o.ec;
      if (t)
        for (let n = 0; n < t.length; n++)
          if (!1 === t[n](e, r, i))
            return;
      o = o.parent
    }
    const a = t.appContext.config.errorHandler;
    if (a)
      return void ln(a, null, 10, [e, r, i])
  }
  !function(e, t, n, o=!0) {
    console.error(e)
  }(e, 0, 0, o)
}
an = "__v_isReadonly";
let dn = !1
  , fn = !1;
const pn = [];
let hn = 0;
const mn = [];
let gn = null
  , vn = 0;
const yn = Promise.resolve();
let bn = null;
function _n(e) {
  const t = bn || yn;
  return e ? t.then(this ? e.bind(this) : e) : t
}
function wn(e) {
  pn.length && pn.includes(e, dn && e.allowRecurse ? hn + 1 : hn) || (null == e.id ? pn.push(e) : pn.splice(function(e) {
    let t = hn + 1
      , n = pn.length;
    for (; t < n; ) {
      const o = t + n >>> 1;
      Cn(pn[o]) < e ? t = o + 1 : n = o
    }
    return t
  }(e.id), 0, e),
    Sn())
}
function Sn() {
  dn || fn || (fn = !0,
    bn = yn.then(kn))
}
function Tn(e, t=(dn ? hn + 1 : 0)) {
  for (; t < pn.length; t++) {
    const e = pn[t];
    e && e.pre && (pn.splice(t, 1),
      t--,
      e())
  }
}
function xn(e) {
  if (mn.length) {
    const e = [...new Set(mn)];
    if (mn.length = 0,
      gn)
      return void gn.push(...e);
    for (gn = e,
           gn.sort(((e,t)=>Cn(e) - Cn(t))),
           vn = 0; vn < gn.length; vn++)
      gn[vn]();
    gn = null,
      vn = 0
  }
}
const Cn = e=>null == e.id ? 1 / 0 : e.id
  , En = (e,t)=>{
    const n = Cn(e) - Cn(t);
    if (0 === n) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1
    }
    return n
  }
;
function kn(e) {
  fn = !1,
    dn = !0,
    pn.sort(En);
  try {
    for (hn = 0; hn < pn.length; hn++) {
      const e = pn[hn];
      e && !1 !== e.active && ln(e, null, 14)
    }
  } finally {
    hn = 0,
      pn.length = 0,
      xn(),
      dn = !1,
      bn = null,
    (pn.length || mn.length) && kn()
  }
}
function Pn(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || h;
  let r = n;
  const i = t.startsWith("update:")
    , a = i && t.slice(7);
  if (a && a in o) {
    const e = `${"modelValue" === a ? "model" : a}Modifiers`
      , {number: t, trim: i} = o[e] || h;
    i && (r = n.map((e=>O(e) ? e.trim() : e))),
    t && (r = n.map(G))
  }
  let s, l = o[s = z(t)] || o[s = z(V(t))];
  !l && i && (l = o[s = z(H(t))]),
  l && cn(l, e, 6, Ln(e, l, r));
  const c = o[s + "Once"];
  if (c) {
    if (e.emitted) {
      if (e.emitted[s])
        return
    } else
      e.emitted = {};
    e.emitted[s] = !0,
      cn(c, e, 6, Ln(e, c, r))
  }
}
function Ln(e, t, n) {
  if (1 !== n.length)
    return n;
  if (L(t)) {
    if (t.length < 2)
      return n
  } else if (!t.find((e=>e.length >= 2)))
    return n;
  const o = n[0];
  if (o && x(o, "type") && x(o, "timeStamp") && x(o, "target") && x(o, "currentTarget") && x(o, "detail")) {
    const t = e.proxy
      , o = t.$gcd(t, !0);
    o && n.push(o)
  }
  return n
}
function On(e, t, n=!1) {
  const o = t.emitsCache
    , r = o.get(e);
  if (void 0 !== r)
    return r;
  const i = e.emits;
  let a = {}
    , s = !1;
  if (!L(e)) {
    const o = e=>{
        const n = On(e, t, !0);
        n && (s = !0,
          w(a, n))
      }
    ;
    !n && t.mixins.length && t.mixins.forEach(o),
    e.extends && o(e.extends),
    e.mixins && e.mixins.forEach(o)
  }
  return i || s ? (C(i) ? i.forEach((e=>a[e] = null)) : w(a, i),
  B(e) && o.set(e, a),
    a) : (B(e) && o.set(e, null),
    null)
}
function An(e, t) {
  return !(!e || !b(t)) && (t = t.slice(2).replace(/Once$/, ""),
  x(e, t[0].toLowerCase() + t.slice(1)) || x(e, H(t)) || x(e, t))
}
let Bn = null
  , $n = null;
function In(e) {
  const t = Bn;
  return Bn = e,
    $n = e && e.type.__scopeId || null,
    t
}
function Nn(e, t=Bn, n) {
  if (!t)
    return e;
  if (e._n)
    return e;
  const o = (...n)=>{
      o._d && Mr(-1);
      const r = In(t);
      let i;
      try {
        i = e(...n)
      } finally {
        In(r),
        o._d && Mr(1)
      }
      return i
    }
  ;
  return o._n = !0,
    o._c = !0,
    o._d = !0,
    o
}
function Mn(e) {
  const {type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [a], slots: s, attrs: l, emit: c, render: u, renderCache: d, data: f, setupState: p, ctx: h, inheritAttrs: m} = e;
  let g, v;
  const y = In(e);
  try {
    if (4 & n.shapeFlag) {
      const e = r || o;
      g = Jr(u.call(e, e, d, i, p, f, h)),
        v = l
    } else {
      const e = t;
      0,
        g = Jr(e.length > 1 ? e(i, {
          attrs: l,
          slots: s,
          emit: c
        }) : e(i, null)),
        v = t.props ? l : Rn(l)
    }
  } catch (w) {
    Br.length = 0,
      un(w, e, 1),
      g = Ur(Or)
  }
  let b = g;
  if (v && !1 !== m) {
    const e = Object.keys(v)
      , {shapeFlag: t} = b;
    e.length && 7 & t && (a && e.some(_) && (v = Dn(v, a)),
      b = Xr(b, v))
  }
  return n.dirs && (b = Xr(b),
    b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
  n.transition && (b.transition = n.transition),
    g = b,
    In(y),
    g
}
const Rn = e=>{
    let t;
    for (const n in e)
      ("class" === n || "style" === n || b(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  }
  , Dn = (e,t)=>{
    const n = {};
    for (const o in e)
      _(o) && o.slice(9)in t || (n[o] = e[o]);
    return n
  }
;
function jn(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !An(n, i))
      return !0
  }
  return !1
}
const Fn = e=>e.__isSuspense;
function Vn(e, t) {
  if (oi) {
    let n = oi.provides;
    const o = oi.parent && oi.parent.provides;
    o === n && (n = oi.provides = Object.create(o)),
      n[e] = t,
    "app" === oi.type.mpType && oi.appContext.app.provide(e, t)
  } else
    ;
}
function qn(e, t, n=!1) {
  const o = oi || Bn;
  if (o) {
    const r = null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(o.proxy) : t
  }
}
function Hn(e, t) {
  return Un(e, null, t)
}
const Wn = {};
function zn(e, t, n) {
  return Un(e, t, n)
}
function Un(e, t, {immediate: n, deep: o, flush: r, onTrack: i, onTrigger: a}=h) {
  const s = Oe === (null == oi ? void 0 : oi.scope) ? oi : null;
  let l, c, u = !1, d = !1;
  if (Kt(e) ? (l = ()=>e.value,
    u = Ht(e)) : Vt(e) ? (l = ()=>e,
    o = !0) : C(e) ? (d = !0,
    u = e.some((e=>Vt(e) || Ht(e))),
    l = ()=>e.map((e=>Kt(e) ? e.value : Vt(e) ? Gn(e) : L(e) ? ln(e, s, 2) : void 0))) : l = L(e) ? t ? ()=>ln(e, s, 2) : ()=>{
      if (!s || !s.isUnmounted)
        return c && c(),
          cn(e, s, 3, [p])
    }
    : g,
  t && o) {
    const e = l;
    l = ()=>Gn(e())
  }
  let f, p = e=>{
      c = b.onStop = ()=>{
        ln(e, s, 4)
      }
    }
  ;
  if (li) {
    if (p = g,
      t ? n && cn(t, s, 3, [l(), d ? [] : void 0, p]) : l(),
    "sync" !== r)
      return g;
    {
      const e = gi();
      f = e.__watcherHandles || (e.__watcherHandles = [])
    }
  }
  let m = d ? new Array(e.length).fill(Wn) : Wn;
  const v = ()=>{
      if (b.active)
        if (t) {
          const e = b.run();
          (o || u || (d ? e.some(((e,t)=>U(e, m[t]))) : U(e, m))) && (c && c(),
            cn(t, s, 3, [e, m === Wn ? void 0 : d && m[0] === Wn ? [] : m, p]),
            m = e)
        } else
          b.run()
    }
  ;
  let y;
  v.allowRecurse = !!t,
    "sync" === r ? y = v : "post" === r ? y = ()=>xr(v, s && s.suspense) : (v.pre = !0,
    s && (v.id = s.uid),
      y = ()=>wn(v));
  const b = new qe(l,y);
  t ? n ? v() : m = b.run() : "post" === r ? xr(b.run.bind(b), s && s.suspense) : b.run();
  const _ = ()=>{
      b.stop(),
      s && s.scope && S(s.scope.effects, b)
    }
  ;
  return f && f.push(_),
    _
}
function Xn(e, t, n) {
  const o = this.proxy
    , r = O(e) ? e.includes(".") ? Yn(o, e) : ()=>o[e] : e.bind(o, o);
  let i;
  L(t) ? i = t : (i = t.handler,
    n = t);
  const a = oi;
  ii(this);
  const s = Un(r, i.bind(o), n);
  return a ? ii(a) : ai(),
    s
}
function Yn(e, t) {
  const n = t.split(".");
  return ()=>{
    let t = e;
    for (let e = 0; e < n.length && t; e++)
      t = t[n[e]];
    return t
  }
}
function Gn(e, t) {
  if (!B(e) || e.__v_skip)
    return e;
  if ((t = t || new Set).has(e))
    return e;
  if (t.add(e),
    Kt(e))
    Gn(e.value, t);
  else if (C(e))
    for (let n = 0; n < e.length; n++)
      Gn(e[n], t);
  else if (k(e) || E(e))
    e.forEach((e=>{
        Gn(e, t)
      }
    ));
  else if (M(e))
    for (const n in e)
      Gn(e[n], t);
  return e
}
const Jn = [Function, Array]
  , Kn = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: Jn,
  onEnter: Jn,
  onAfterEnter: Jn,
  onEnterCancelled: Jn,
  onBeforeLeave: Jn,
  onLeave: Jn,
  onAfterLeave: Jn,
  onLeaveCancelled: Jn,
  onBeforeAppear: Jn,
  onAppear: Jn,
  onAfterAppear: Jn,
  onAppearCancelled: Jn
}
  , Zn = {
  name: "BaseTransition",
  props: Kn,
  setup(e, {slots: t}) {
    const n = ri()
      , o = function() {
      const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
      };
      return ko((()=>{
          e.isMounted = !0
        }
      )),
        Oo((()=>{
            e.isUnmounting = !0
          }
        )),
        e
    }();
    let r;
    return ()=>{
      const i = t.default && ro(t.default(), !0);
      if (!i || !i.length)
        return;
      let a = i[0];
      if (i.length > 1)
        for (const e of i)
          if (e.type !== Or) {
            a = e;
            break
          }
      const s = zt(e)
        , {mode: l} = s;
      if (o.isLeaving)
        return to(a);
      const c = no(a);
      if (!c)
        return to(a);
      const u = eo(c, s, o, n);
      oo(c, u);
      const d = n.subTree
        , f = d && no(d);
      let p = !1;
      const {getTransitionKey: h} = c.type;
      if (h) {
        const e = h();
        void 0 === r ? r = e : e !== r && (r = e,
          p = !0)
      }
      if (f && f.type !== Or && (!Vr(c, f) || p)) {
        const e = eo(f, s, o, n);
        if (oo(f, e),
        "out-in" === l)
          return o.isLeaving = !0,
            e.afterLeave = ()=>{
              o.isLeaving = !1,
              !1 !== n.update.active && n.update()
            }
            ,
            to(a);
        "in-out" === l && c.type !== Or && (e.delayLeave = (e,t,n)=>{
            Qn(o, f)[String(f.key)] = f,
              e._leaveCb = ()=>{
                t(),
                  e._leaveCb = void 0,
                  delete u.delayedLeave
              }
              ,
              u.delayedLeave = n
          }
        )
      }
      return a
    }
  }
};
function Qn(e, t) {
  const {leavingVNodes: n} = e;
  let o = n.get(t.type);
  return o || (o = Object.create(null),
    n.set(t.type, o)),
    o
}
function eo(e, t, n, o) {
  const {appear: r, mode: i, persisted: a=!1, onBeforeEnter: s, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: f, onAfterLeave: p, onLeaveCancelled: h, onBeforeAppear: m, onAppear: g, onAfterAppear: v, onAppearCancelled: y} = t
    , b = String(e.key)
    , _ = Qn(n, e)
    , w = (e,t)=>{
    e && cn(e, o, 9, t)
  }
    , S = (e,t)=>{
    const n = t[1];
    w(e, t),
      C(e) ? e.every((e=>e.length <= 1)) && n() : e.length <= 1 && n()
  }
    , T = {
    mode: i,
    persisted: a,
    beforeEnter(t) {
      let o = s;
      if (!n.isMounted) {
        if (!r)
          return;
        o = m || s
      }
      t._leaveCb && t._leaveCb(!0);
      const i = _[b];
      i && Vr(e, i) && i.el._leaveCb && i.el._leaveCb(),
        w(o, [t])
    },
    enter(e) {
      let t = l
        , o = c
        , i = u;
      if (!n.isMounted) {
        if (!r)
          return;
        t = g || l,
          o = v || c,
          i = y || u
      }
      let a = !1;
      const s = e._enterCb = t=>{
          a || (a = !0,
            w(t ? i : o, [e]),
          T.delayedLeave && T.delayedLeave(),
            e._enterCb = void 0)
        }
      ;
      t ? S(t, [e, s]) : s()
    },
    leave(t, o) {
      const r = String(e.key);
      if (t._enterCb && t._enterCb(!0),
        n.isUnmounting)
        return o();
      w(d, [t]);
      let i = !1;
      const a = t._leaveCb = n=>{
          i || (i = !0,
            o(),
            w(n ? h : p, [t]),
            t._leaveCb = void 0,
          _[r] === e && delete _[r])
        }
      ;
      _[r] = e,
        f ? S(f, [t, a]) : a()
    },
    clone: e=>eo(e, t, n, o)
  };
  return T
}
function to(e) {
  if (co(e))
    return (e = Xr(e)).children = null,
      e
}
function no(e) {
  return co(e) ? e.children ? e.children[0] : void 0 : e
}
function oo(e, t) {
  6 & e.shapeFlag && e.component ? oo(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function ro(e, t=!1, n) {
  let o = []
    , r = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const s = null == n ? a.key : String(n) + String(null != a.key ? a.key : i);
    a.type === Pr ? (128 & a.patchFlag && r++,
      o = o.concat(ro(a.children, t, s))) : (t || a.type !== Or) && o.push(null != s ? Xr(a, {
      key: s
    }) : a)
  }
  if (r > 1)
    for (let i = 0; i < o.length; i++)
      o[i].patchFlag = -2;
  return o
}
function io(e) {
  return L(e) ? {
    setup: e,
    name: e.name
  } : e
}
const ao = e=>!!e.type.__asyncLoader;
function so(e) {
  L(e) && (e = {
    loader: e
  });
  const {loader: t, loadingComponent: n, errorComponent: o, delay: r=200, timeout: i, suspensible: a=!0, onError: s} = e;
  let l, c = null, u = 0;
  const d = ()=>{
      let e;
      return c || (e = c = t().catch((e=>{
          if (e = e instanceof Error ? e : new Error(String(e)),
            s)
            return new Promise(((t,n)=>{
                s(e, (()=>t((u++,
                  c = null,
                  d()))), (()=>n(e)), u + 1)
              }
            ));
          throw e
        }
      )).then((t=>e !== c && c ? c : (t && (t.__esModule || "Module" === t[Symbol.toStringTag]) && (t = t.default),
        l = t,
        t))))
    }
  ;
  return io({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return l
    },
    setup() {
      const e = oi;
      if (l)
        return ()=>lo(l, e);
      const t = t=>{
          c = null,
            un(t, e, 13, !o)
        }
      ;
      if (a && e.suspense || li)
        return d().then((t=>()=>lo(t, e))).catch((e=>(t(e),
          ()=>o ? Ur(o, {
            error: e
          }) : null)));
      const s = Zt(!1)
        , u = Zt()
        , f = Zt(!!r);
      return r && setTimeout((()=>{
          f.value = !1
        }
      ), r),
      null != i && setTimeout((()=>{
          if (!s.value && !u.value) {
            const e = new Error(`Async component timed out after ${i}ms.`);
            t(e),
              u.value = e
          }
        }
      ), i),
        d().then((()=>{
            s.value = !0,
            e.parent && co(e.parent.vnode) && wn(e.parent.update)
          }
        )).catch((e=>{
            t(e),
              u.value = e
          }
        )),
        ()=>s.value && l ? lo(l, e) : u.value && o ? Ur(o, {
          error: u.value
        }) : n && !f.value ? Ur(n) : void 0
    }
  })
}
function lo(e, t) {
  const {ref: n, props: o, children: r, ce: i} = t.vnode
    , a = Ur(e, o, r);
  return a.ref = n,
    a.ce = i,
    delete t.vnode.ce,
    a
}
const co = e=>e.type.__isKeepAlive;
class uo {
  constructor(e) {
    this.max = e,
      this._cache = new Map,
      this._keys = new Set,
      this._max = parseInt(e, 10)
  }
  get(e) {
    const {_cache: t, _keys: n, _max: o} = this
      , r = t.get(e);
    if (r)
      n.delete(e),
        n.add(e);
    else if (n.add(e),
    o && n.size > o) {
      const e = n.values().next().value;
      this.pruneCacheEntry(t.get(e)),
        this.delete(e)
    }
    return r
  }
  set(e, t) {
    this._cache.set(e, t)
  }
  delete(e) {
    this._cache.delete(e),
      this._keys.delete(e)
  }
  forEach(e, t) {
    this._cache.forEach(e.bind(t))
  }
}
const fo = {
  name: "KeepAlive",
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number],
    matchBy: {
      type: String,
      default: "name"
    },
    cache: Object
  },
  setup(e, {slots: t}) {
    const n = ri()
      , o = n.ctx;
    if (!o.renderer)
      return ()=>{
        const e = t.default && t.default();
        return e && 1 === e.length ? e[0] : e
      }
        ;
    const r = e.cache || new uo(e.max);
    r.pruneCacheEntry = a;
    let i = null;
    function a(t) {
      var o;
      !i || !Vr(t, i) || "key" === e.matchBy && t.key !== i.key ? (bo(o = t),
        u(o, n, s, !0)) : i && bo(i)
    }
    const s = n.suspense
      , {renderer: {p: l, m: c, um: u, o: {createElement: d}}} = o
      , f = d("div");
    function p(t) {
      r.forEach(((n,o)=>{
          const i = wo(n, e.matchBy);
          !i || t && t(i) || (r.delete(o),
            a(n))
        }
      ))
    }
    o.activate = (e,t,n,o,r)=>{
      const i = e.component;
      if (i.ba) {
        const e = i.isDeactivated;
        i.isDeactivated = !1,
          X(i.ba),
          i.isDeactivated = e
      }
      c(e, t, n, 0, s),
        l(i.vnode, e, t, n, i, s, o, e.slotScopeIds, r),
        xr((()=>{
            i.isDeactivated = !1,
            i.a && X(i.a);
            const t = e.props && e.props.onVnodeMounted;
            t && ei(t, i.parent, e)
          }
        ), s)
    }
      ,
      o.deactivate = e=>{
        const t = e.component;
        t.bda && So(t.bda),
          c(e, f, null, 1, s),
          xr((()=>{
              t.bda && To(t.bda),
              t.da && X(t.da);
              const n = e.props && e.props.onVnodeUnmounted;
              n && ei(n, t.parent, e),
                t.isDeactivated = !0
            }
          ), s)
      }
      ,
      zn((()=>[e.include, e.exclude, e.matchBy]), (([e,t])=>{
          e && p((t=>ho(e, t))),
          t && p((e=>!ho(t, e)))
        }
      ), {
        flush: "post",
        deep: !0
      });
    let h = null;
    const m = ()=>{
        null != h && r.set(h, _o(n.subTree))
      }
    ;
    return ko(m),
      Lo(m),
      Oo((()=>{
          r.forEach(((t,o)=>{
              r.delete(o),
                a(t);
              const {subTree: i, suspense: s} = n
                , l = _o(i);
              if (t.type !== l.type || "key" === e.matchBy && t.key !== l.key)
                ;
              else {
                l.component.bda && X(l.component.bda),
                  bo(l);
                const e = l.component.da;
                e && xr(e, s)
              }
            }
          ))
        }
      )),
      ()=>{
        if (h = null,
          !t.default)
          return null;
        const n = t.default()
          , o = n[0];
        if (n.length > 1)
          return i = null,
            n;
        if (!Fr(o) || !(4 & o.shapeFlag) && !Fn(o.type))
          return i = null,
            o;
        let a = _o(o);
        const s = a.type
          , l = wo(a, e.matchBy)
          , {include: c, exclude: u} = e;
        if (c && (!l || !ho(c, l)) || u && l && ho(u, l))
          return i = a,
            o;
        const d = null == a.key ? s : a.key
          , f = r.get(d);
        return a.el && (a = Xr(a),
        Fn(o.type) && (o.ssContent = a)),
          h = d,
        f && (a.el = f.el,
          a.component = f.component,
        a.transition && oo(a, a.transition),
          a.shapeFlag |= 512),
          a.shapeFlag |= 256,
          i = a,
          Fn(o.type) ? o : a
      }
  }
}
  , po = fo;
function ho(e, t) {
  return C(e) ? e.some((e=>ho(e, t))) : O(e) ? e.split(",").includes(t) : !!e.test && e.test(t)
}
function mo(e, t) {
  vo(e, "a", t)
}
function go(e, t) {
  vo(e, "da", t)
}
function vo(e, t, n=oi) {
  const o = e.__wdc || (e.__wdc = ()=>{
      let t = n;
      for (; t; ) {
        if (t.isDeactivated)
          return;
        t = t.parent
      }
      return e()
    }
  );
  if (o.__called = !1,
    xo(t, o, n),
    n) {
    let e = n.parent;
    for (; e && e.parent; )
      co(e.parent.vnode) && yo(o, t, n, e),
        e = e.parent
  }
}
function yo(e, t, n, o) {
  const r = xo(t, e, o, !0);
  Ao((()=>{
      S(o[t], r)
    }
  ), n)
}
function bo(e) {
  e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function _o(e) {
  return Fn(e.type) ? e.ssContent : e
}
function wo(e, t) {
  if ("name" === t) {
    const t = e.type;
    return fi(ao(e) ? t.__asyncResolved || {} : t)
  }
  return String(e.key)
}
function So(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    n.__called || (n(),
      n.__called = !0)
  }
}
function To(e) {
  e.forEach((e=>e.__called = !1))
}
function xo(e, t, n=oi, o=!1) {
  if (n) {
    if (r = e,
    we.indexOf(r) > -1 && n.$pageInstance) {
      if (n.type.__reserved)
        return;
      if (n !== n.$pageInstance && (n = n.$pageInstance,
        function(e) {
          return Se.indexOf(e) > -1
        }(e))) {
        const o = n.proxy;
        cn(t.bind(o), n, e, "onLoad" === e ? [o.$page.options] : [])
      }
    }
    const i = n[e] || (n[e] = [])
      , a = t.__weh || (t.__weh = (...o)=>{
        if (n.isUnmounted)
          return;
        Ue(),
          ii(n);
        const r = cn(t, n, e, o);
        return ai(),
          Xe(),
          r
      }
    );
    return o ? i.unshift(a) : i.push(a),
      a
  }
  var r
}
const Co = e=>(t,n=oi)=>(!li || "sp" === e) && xo(e, ((...e)=>t(...e)), n)
  , Eo = Co("bm")
  , ko = Co("m")
  , Po = Co("bu")
  , Lo = Co("u")
  , Oo = Co("bum")
  , Ao = Co("um")
  , Bo = Co("sp")
  , $o = Co("rtg")
  , Io = Co("rtc");
function No(e, t=oi) {
  xo("ec", e, t)
}
function Mo(e, t) {
  const n = Bn;
  if (null === n)
    return e;
  const o = di(n) || n.proxy
    , r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let[e,n,a,s=h] = t[i];
    e && (L(e) && (e = {
      mounted: e,
      updated: e
    }),
    e.deep && Gn(n),
      r.push({
        dir: e,
        instance: o,
        value: n,
        oldValue: void 0,
        arg: a,
        modifiers: s
      }))
  }
  return e
}
function Ro(e, t, n, o) {
  const r = e.dirs
    , i = t && t.dirs;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    i && (s.oldValue = i[a].value);
    let l = s.dir[o];
    l && (Ue(),
      cn(l, n, 8, [e.el, s, e, t]),
      Xe())
  }
}
function Do(e, t) {
  return Vo("components", e, !0, t) || e
}
const jo = Symbol();
function Fo(e) {
  return O(e) ? Vo("components", e, !1) || e : e || jo
}
function Vo(e, t, n=!0, o=!1) {
  const r = Bn || oi;
  if (r) {
    const n = r.type;
    if ("components" === e) {
      const e = fi(n, !1);
      if (e && (e === t || e === V(t) || e === W(V(t))))
        return n
    }
    const i = qo(r[e] || n[e], t) || qo(r.appContext[e], t);
    return !i && o ? n : i
  }
}
function qo(e, t) {
  return e && (e[t] || e[V(t)] || e[W(V(t))])
}
function Ho(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (C(e) || O(e)) {
    r = new Array(e.length);
    for (let n = 0, o = e.length; n < o; n++)
      r[n] = t(e[n], n, void 0, i && i[n])
  } else if ("number" == typeof e) {
    r = new Array(e);
    for (let n = 0; n < e; n++)
      r[n] = t(n + 1, n, void 0, i && i[n])
  } else if (B(e))
    if (e[Symbol.iterator])
      r = Array.from(e, ((e,n)=>t(e, n, void 0, i && i[n])));
    else {
      const n = Object.keys(e);
      r = new Array(n.length);
      for (let o = 0, a = n.length; o < a; o++) {
        const a = n[o];
        r[o] = t(e[a], a, o, i && i[o])
      }
    }
  else
    r = [];
  return n && (n[o] = r),
    r
}
function Wo(e, t, n={}, o, r) {
  if (Bn.isCE || Bn.parent && ao(Bn.parent) && Bn.parent.isCE)
    return "default" !== t && (n.name = t),
      Ur("slot", n, o && o());
  let i = e[t];
  i && i._c && (i._d = !1),
    Ir();
  const a = i && zo(i(n))
    , s = jr(Pr, {
    key: n.key || a && a.key || `_ ${t}`
  }, a || (o ? o() : []), a && 1 === e._ ? 64 : -2);
  return !r && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]),
  i && i._c && (i._d = !0),
    s
}
function zo(e) {
  return e.some((e=>!Fr(e) || e.type !== Or && !(e.type === Pr && !zo(e.children)))) ? e : null
}
const Uo = e=>e ? si(e) ? di(e) || e.proxy : Uo(e.parent) : null
  , Xo = w(Object.create(null), {
  $: e=>e,
  $el: e=>e.vnode.el,
  $data: e=>e.data,
  $props: e=>e.props,
  $attrs: e=>e.attrs,
  $slots: e=>e.slots,
  $refs: e=>e.refs,
  $parent: e=>Uo(e.parent),
  $root: e=>Uo(e.root),
  $emit: e=>e.emit,
  $options: e=>er(e),
  $forceUpdate: e=>e.f || (e.f = ()=>wn(e.update)),
  $nextTick: e=>e.n || (e.n = _n.bind(e.proxy)),
  $watch: e=>Xn.bind(e)
})
  , Yo = (e,t)=>e !== h && !e.__isScriptSetup && x(e, t)
  , Go = {
  get({_: e}, t) {
    const {ctx: n, setupState: o, data: r, props: i, accessCache: a, type: s, appContext: l} = e;
    let c;
    if ("$" !== t[0]) {
      const s = a[t];
      if (void 0 !== s)
        switch (s) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t]
        }
      else {
        if (Yo(o, t))
          return a[t] = 1,
            o[t];
        if (r !== h && x(r, t))
          return a[t] = 2,
            r[t];
        if ((c = e.propsOptions[0]) && x(c, t))
          return a[t] = 3,
            i[t];
        if (n !== h && x(n, t))
          return a[t] = 4,
            n[t];
        Jo && (a[t] = 0)
      }
    }
    const u = Xo[t];
    let d, f;
    return u ? ("$attrs" === t && Ye(e, 0, t),
      u(e)) : (d = s.__cssModules) && (d = d[t]) ? d : n !== h && x(n, t) ? (a[t] = 4,
      n[t]) : (f = l.config.globalProperties,
      x(f, t) ? f[t] : void 0)
  },
  set({_: e}, t, n) {
    const {data: o, setupState: r, ctx: i} = e;
    return Yo(r, t) ? (r[t] = n,
      !0) : o !== h && x(o, t) ? (o[t] = n,
      !0) : !x(e.props, t) && (("$" !== t[0] || !(t.slice(1)in e)) && (i[t] = n,
      !0))
  },
  has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i}}, a) {
    let s;
    return !!n[a] || e !== h && x(e, a) || Yo(t, a) || (s = i[0]) && x(s, a) || x(o, a) || x(Xo, a) || x(r.config.globalProperties, a)
  },
  defineProperty(e, t, n) {
    return null != n.get ? e._.accessCache[t] = 0 : x(n, "value") && this.set(e, t, n.value, null),
      Reflect.defineProperty(e, t, n)
  }
};
let Jo = !0;
function Ko(e) {
  const t = er(e)
    , n = e.proxy
    , o = e.ctx;
  Jo = !1,
  t.beforeCreate && Zo(t.beforeCreate, e, "bc");
  const {data: r, computed: i, methods: a, watch: s, provide: l, inject: c, created: u, beforeMount: d, mounted: f, beforeUpdate: p, updated: h, activated: m, deactivated: v, beforeDestroy: y, beforeUnmount: b, destroyed: _, unmounted: w, render: S, renderTracked: T, renderTriggered: x, errorCaptured: E, serverPrefetch: k, expose: P, inheritAttrs: O, components: A, directives: $, filters: I} = t;
  if (c && function(e, t, n=g, o=!1) {
    C(e) && (e = rr(e));
    for (const r in e) {
      const n = e[r];
      let i;
      i = B(n) ? "default"in n ? qn(n.from || r, n.default, !0) : qn(n.from || r) : qn(n),
        Kt(i) && o ? Object.defineProperty(t, r, {
          enumerable: !0,
          configurable: !0,
          get: ()=>i.value,
          set: e=>i.value = e
        }) : t[r] = i
    }
  }(c, o, null, e.appContext.config.unwrapInjectedRef),
    a)
    for (const g in a) {
      const e = a[g];
      L(e) && (o[g] = e.bind(n))
    }
  if (r) {
    const t = r.call(n, n);
    B(t) && (e.data = Dt(t))
  }
  if (Jo = !0,
    i)
    for (const C in i) {
      const e = i[C]
        , t = L(e) ? e.bind(n, n) : L(e.get) ? e.get.bind(n, n) : g
        , r = !L(e) && L(e.set) ? e.set.bind(n) : g
        , a = pi({
        get: t,
        set: r
      });
      Object.defineProperty(o, C, {
        enumerable: !0,
        configurable: !0,
        get: ()=>a.value,
        set: e=>a.value = e
      })
    }
  if (s)
    for (const g in s)
      Qo(s[g], o, n, g);
  if (l) {
    const e = L(l) ? l.call(n) : l;
    Reflect.ownKeys(e).forEach((t=>{
        Vn(t, e[t])
      }
    ))
  }
  function N(e, t) {
    C(t) ? t.forEach((t=>e(t.bind(n)))) : t && e(t.bind(n))
  }
  if (u && Zo(u, e, "c"),
    N(Eo, d),
    N(ko, f),
    N(Po, p),
    N(Lo, h),
    N(mo, m),
    N(go, v),
    N(No, E),
    N(Io, T),
    N($o, x),
    N(Oo, b),
    N(Ao, w),
    N(Bo, k),
    C(P))
    if (P.length) {
      const t = e.exposed || (e.exposed = {});
      P.forEach((e=>{
          Object.defineProperty(t, e, {
            get: ()=>n[e],
            set: t=>n[e] = t
          })
        }
      ))
    } else
      e.exposed || (e.exposed = {});
  S && e.render === g && (e.render = S),
  null != O && (e.inheritAttrs = O),
  A && (e.components = A),
  $ && (e.directives = $);
  const M = e.appContext.config.globalProperties.$applyOptions;
  M && M(t, e, n)
}
function Zo(e, t, n) {
  cn(C(e) ? e.map((e=>e.bind(t.proxy))) : e.bind(t.proxy), t, n)
}
function Qo(e, t, n, o) {
  const r = o.includes(".") ? Yn(n, o) : ()=>n[o];
  if (O(e)) {
    const n = t[e];
    L(n) && zn(r, n)
  } else if (L(e))
    zn(r, e.bind(n));
  else if (B(e))
    if (C(e))
      e.forEach((e=>Qo(e, t, n, o)));
    else {
      const o = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(o) && zn(r, o, e)
    }
}
function er(e) {
  const t = e.type
    , {mixins: n, extends: o} = t
    , {mixins: r, optionsCache: i, config: {optionMergeStrategies: a}} = e.appContext
    , s = i.get(t);
  let l;
  return s ? l = s : r.length || n || o ? (l = {},
  r.length && r.forEach((e=>tr(l, e, a, !0))),
    tr(l, t, a)) : l = t,
  B(t) && i.set(t, l),
    l
}
function tr(e, t, n, o=!1) {
  const {mixins: r, extends: i} = t;
  i && tr(e, i, n, !0),
  r && r.forEach((t=>tr(e, t, n, !0)));
  for (const a in t)
    if (o && "expose" === a)
      ;
    else {
      const o = nr[a] || n && n[a];
      e[a] = o ? o(e[a], t[a]) : t[a]
    }
  return e
}
const nr = {
  data: or,
  props: ar,
  emits: ar,
  methods: ar,
  computed: ar,
  beforeCreate: ir,
  created: ir,
  beforeMount: ir,
  mounted: ir,
  beforeUpdate: ir,
  updated: ir,
  beforeDestroy: ir,
  beforeUnmount: ir,
  destroyed: ir,
  unmounted: ir,
  activated: ir,
  deactivated: ir,
  errorCaptured: ir,
  serverPrefetch: ir,
  components: ar,
  directives: ar,
  watch: function(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = w(Object.create(null), e);
    for (const o in t)
      n[o] = ir(e[o], t[o]);
    return n
  },
  provide: or,
  inject: function(e, t) {
    return ar(rr(e), rr(t))
  }
};
function or(e, t) {
  return t ? e ? function() {
      return w(L(e) ? e.call(this, this) : e, L(t) ? t.call(this, this) : t)
    }
    : t : e
}
function rr(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t
  }
  return e
}
function ir(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function ar(e, t) {
  return e ? w(w(Object.create(null), e), t) : t
}
function sr(e, t, n, o=!1) {
  const r = {}
    , i = {};
  Y(i, qr, 1),
    e.propsDefaults = Object.create(null),
    lr(e, t, r, i);
  for (const a in e.propsOptions[0])
    a in r || (r[a] = void 0);
  n ? e.props = o ? r : Ft(r, !1, dt, At, It) : e.type.props ? e.props = r : e.props = i,
    e.attrs = i
}
function lr(e, t, n, o) {
  const [r,i] = e.propsOptions;
  let a, s = !1;
  if (t)
    for (let l in t) {
      if (D(l))
        continue;
      const c = t[l];
      let u;
      r && x(r, u = V(l)) ? i && i.includes(u) ? (a || (a = {}))[u] = c : n[u] = c : An(e.emitsOptions, l) || l in o && c === o[l] || (o[l] = c,
        s = !0)
    }
  if (i) {
    const t = zt(n)
      , o = a || h;
    for (let a = 0; a < i.length; a++) {
      const s = i[a];
      n[s] = cr(r, t, s, o[s], e, !x(o, s))
    }
  }
  return s
}
function cr(e, t, n, o, r, i) {
  const a = e[n];
  if (null != a) {
    const e = x(a, "default");
    if (e && void 0 === o) {
      const e = a.default;
      if (a.type !== Function && L(e)) {
        const {propsDefaults: i} = r;
        n in i ? o = i[n] : (ii(r),
          o = i[n] = e.call(null, t),
          ai())
      } else
        o = e
    }
    a[0] && (i && !e ? o = !1 : !a[1] || "" !== o && o !== H(n) || (o = !0))
  }
  return o
}
function ur(e, t, n=!1) {
  const o = t.propsCache
    , r = o.get(e);
  if (r)
    return r;
  const i = e.props
    , a = {}
    , s = [];
  let l = !1;
  if (!L(e)) {
    const o = e=>{
        l = !0;
        const [n,o] = ur(e, t, !0);
        w(a, n),
        o && s.push(...o)
      }
    ;
    !n && t.mixins.length && t.mixins.forEach(o),
    e.extends && o(e.extends),
    e.mixins && e.mixins.forEach(o)
  }
  if (!i && !l)
    return B(e) && o.set(e, m),
      m;
  if (C(i))
    for (let u = 0; u < i.length; u++) {
      const e = V(i[u]);
      dr(e) && (a[e] = h)
    }
  else if (i)
    for (const u in i) {
      const e = V(u);
      if (dr(e)) {
        const t = i[u]
          , n = a[e] = C(t) || L(t) ? {
          type: t
        } : Object.assign({}, t);
        if (n) {
          const t = hr(Boolean, n.type)
            , o = hr(String, n.type);
          n[0] = t > -1,
            n[1] = o < 0 || t < o,
          (t > -1 || x(n, "default")) && s.push(e)
        }
      }
    }
  const c = [a, s];
  return B(e) && o.set(e, c),
    c
}
function dr(e) {
  return "$" !== e[0]
}
function fr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : null === e ? "null" : ""
}
function pr(e, t) {
  return fr(e) === fr(t)
}
function hr(e, t) {
  return C(t) ? t.findIndex((t=>pr(t, e))) : L(t) && pr(t, e) ? 0 : -1
}
const mr = e=>"_" === e[0] || "$stable" === e
  , gr = e=>C(e) ? e.map(Jr) : [Jr(e)]
  , vr = (e,t,n)=>{
    if (t._n)
      return t;
    const o = Nn(((...e)=>gr(t(...e))), n);
    return o._c = !1,
      o
  }
  , yr = (e,t,n)=>{
    const o = e._ctx;
    for (const r in e) {
      if (mr(r))
        continue;
      const n = e[r];
      if (L(n))
        t[r] = vr(0, n, o);
      else if (null != n) {
        const e = gr(n);
        t[r] = ()=>e
      }
    }
  }
  , br = (e,t)=>{
    const n = gr(t);
    e.slots.default = ()=>n
  }
;
function _r() {
  return {
    app: null,
    config: {
      isNativeTag: v,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let wr = 0;
function Sr(e, t) {
  return function(n, o=null) {
    L(n) || (n = Object.assign({}, n)),
    null == o || B(o) || (o = null);
    const r = _r()
      , i = new Set;
    let a = !1;
    const s = r.app = {
      _uid: wr++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: vi,
      get config() {
        return r.config
      },
      set config(e) {},
      use: (e,...t)=>(i.has(e) || (e && L(e.install) ? (i.add(e),
        e.install(s, ...t)) : L(e) && (i.add(e),
        e(s, ...t))),
        s),
      mixin: e=>(r.mixins.includes(e) || r.mixins.push(e),
        s),
      component: (e,t)=>t ? (r.components[e] = t,
        s) : r.components[e],
      directive: (e,t)=>t ? (r.directives[e] = t,
        s) : r.directives[e],
      mount(i, l, c) {
        if (!a) {
          const u = Ur(n, o);
          return u.appContext = r,
            l && t ? t(u, i) : e(u, i, c),
            a = !0,
            s._container = i,
            i.__vue_app__ = s,
            s._instance = u.component,
          di(u.component) || u.component.proxy
        }
      },
      unmount() {
        a && (e(null, s._container),
          delete s._container.__vue_app__)
      },
      provide: (e,t)=>(r.provides[e] = t,
        s)
    };
    return s
  }
}
function Tr(e, t, n, o, r=!1) {
  if (C(e))
    return void e.forEach(((e,i)=>Tr(e, t && (C(t) ? t[i] : t), n, o, r)));
  if (ao(o) && !r)
    return;
  const i = 4 & o.shapeFlag ? di(o.component) || o.component.proxy : o.el
    , a = r ? null : i
    , {i: s, r: l} = e
    , c = t && t.r
    , u = s.refs === h ? s.refs = {} : s.refs
    , d = s.setupState;
  if (null != c && c !== l && (O(c) ? (u[c] = null,
  x(d, c) && (d[c] = null)) : Kt(c) && (c.value = null)),
    L(l))
    ln(l, s, 12, [a, u]);
  else {
    const t = O(l)
      , o = Kt(l);
    if (t || o) {
      const s = ()=>{
          if (e.f) {
            const n = t ? x(d, l) ? d[l] : u[l] : l.value;
            r ? C(n) && S(n, i) : C(n) ? n.includes(i) || n.push(i) : t ? (u[l] = [i],
            x(d, l) && (d[l] = u[l])) : (l.value = [i],
            e.k && (u[e.k] = l.value))
          } else
            t ? (u[l] = a,
            x(d, l) && (d[l] = a)) : o && (l.value = a,
            e.k && (u[e.k] = a))
        }
      ;
      a ? (s.id = -1,
        xr(s, n)) : s()
    }
  }
}
const xr = function(e, t) {
  var n;
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : (C(n = e) ? mn.push(...n) : gn && gn.includes(n, n.allowRecurse ? vn + 1 : vn) || mn.push(n),
    Sn())
};
function Cr(e) {
  return function(e, t) {
    (J || (J = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {})).__VUE__ = !0;
    const {insert: n, remove: o, patchProp: r, forcePatchProp: i, createElement: a, createText: s, createComment: l, setText: c, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p=g, insertStaticContent: v} = e
      , y = (e,t,n,o=null,r=null,i=null,a=!1,s=null,l=!!t.dynamicChildren)=>{
      if (e === t)
        return;
      e && !Vr(e, t) && (o = te(e),
        G(e, r, i, !0),
        e = null),
      -2 === t.patchFlag && (l = !1,
        t.dynamicChildren = null);
      const {type: c, ref: u, shapeFlag: d} = t;
      switch (c) {
        case Lr:
          b(e, t, n, o);
          break;
        case Or:
          _(e, t, n, o);
          break;
        case Ar:
          null == e && S(t, n, o, a);
          break;
        case Pr:
          I(e, t, n, o, r, i, a, s, l);
          break;
        default:
          1 & d ? E(e, t, n, o, r, i, a, s, l) : 6 & d ? N(e, t, n, o, r, i, a, s, l) : (64 & d || 128 & d) && c.process(e, t, n, o, r, i, a, s, l, oe)
      }
      null != u && r && Tr(u, e && e.ref, i, t || e, !t)
    }
      , b = (e,t,o,r)=>{
      if (null == e)
        n(t.el = s(t.children), o, r);
      else {
        const n = t.el = e.el;
        t.children !== e.children && c(n, t.children)
      }
    }
      , _ = (e,t,o,r)=>{
      null == e ? n(t.el = l(t.children || ""), o, r) : t.el = e.el
    }
      , S = (e,t,n,o)=>{
      [e.el,e.anchor] = v(e.children, t, n, o, e.el, e.anchor)
    }
      , T = ({el: e, anchor: t},o,r)=>{
      let i;
      for (; e && e !== t; )
        i = f(e),
          n(e, o, r),
          e = i;
      n(t, o, r)
    }
      , C = ({el: e, anchor: t})=>{
      let n;
      for (; e && e !== t; )
        n = f(e),
          o(e),
          e = n;
      o(t)
    }
      , E = (e,t,n,o,r,i,a,s,l)=>{
      a = a || "svg" === t.type,
        null == e ? k(t, n, o, r, i, a, s, l) : O(e, t, r, i, a, s, l)
    }
      , k = (e,t,o,i,s,l,c,d)=>{
      let f, p;
      const {type: h, props: m, shapeFlag: g, transition: v, dirs: y} = e;
      if (f = e.el = a(e.type, l, m && m.is, m),
        8 & g ? u(f, e.children) : 16 & g && L(e.children, f, null, i, s, l && "foreignObject" !== h, c, d),
      y && Ro(e, null, i, "created"),
        P(f, e, e.scopeId, c, i),
        m) {
        for (const t in m)
          "value" === t || D(t) || r(f, t, null, m[t], l, e.children, i, s, ee);
        "value"in m && r(f, "value", null, m.value),
        (p = m.onVnodeBeforeMount) && ei(p, i, e)
      }
      Object.defineProperty(f, "__vueParentComponent", {
        value: i,
        enumerable: !1
      }),
      y && Ro(e, null, i, "beforeMount");
      const b = (!s || s && !s.pendingBranch) && v && !v.persisted;
      b && v.beforeEnter(f),
        n(f, t, o),
      ((p = m && m.onVnodeMounted) || b || y) && xr((()=>{
          p && ei(p, i, e),
          b && v.enter(f),
          y && Ro(e, null, i, "mounted")
        }
      ), s)
    }
      , P = (e,t,n,o,r)=>{
      if (n && p(e, n),
        o)
        for (let i = 0; i < o.length; i++)
          p(e, o[i]);
      if (r) {
        if (t === r.subTree) {
          const t = r.vnode;
          P(e, t, t.scopeId, t.slotScopeIds, r.parent)
        }
      }
    }
      , L = (e,t,n,o,r,i,a,s,l=0)=>{
      for (let c = l; c < e.length; c++) {
        const l = e[c] = s ? Kr(e[c]) : Jr(e[c]);
        y(null, l, t, n, o, r, i, a, s)
      }
    }
      , O = (e,t,n,o,a,s,l)=>{
      const c = t.el = e.el;
      let {patchFlag: d, dynamicChildren: f, dirs: p} = t;
      d |= 16 & e.patchFlag;
      const m = e.props || h
        , g = t.props || h;
      let v;
      n && Er(n, !1),
      (v = g.onVnodeBeforeUpdate) && ei(v, n, t, e),
      p && Ro(t, e, n, "beforeUpdate"),
      n && Er(n, !0);
      const y = a && "foreignObject" !== t.type;
      if (f ? A(e.dynamicChildren, f, c, n, o, y, s) : l || q(e, t, c, null, n, o, y, s, !1),
      d > 0) {
        if (16 & d)
          B(c, t, m, g, n, o, a);
        else if (2 & d && m.class !== g.class && r(c, "class", null, g.class, a),
        4 & d && r(c, "style", m.style, g.style, a),
        8 & d) {
          const s = t.dynamicProps;
          for (let t = 0; t < s.length; t++) {
            const l = s[t]
              , u = m[l]
              , d = g[l];
            (d !== u || "value" === l || i && i(c, l)) && r(c, l, u, d, a, e.children, n, o, ee)
          }
        }
        1 & d && e.children !== t.children && u(c, t.children)
      } else
        l || null != f || B(c, t, m, g, n, o, a);
      ((v = g.onVnodeUpdated) || p) && xr((()=>{
          v && ei(v, n, t, e),
          p && Ro(t, e, n, "updated")
        }
      ), o)
    }
      , A = (e,t,n,o,r,i,a)=>{
      for (let s = 0; s < t.length; s++) {
        const l = e[s]
          , c = t[s]
          , u = l.el && (l.type === Pr || !Vr(l, c) || 70 & l.shapeFlag) ? d(l.el) : n;
        y(l, c, u, null, o, r, i, a, !0)
      }
    }
      , B = (e,t,n,o,a,s,l)=>{
      if (n !== o) {
        if (n !== h)
          for (const i in n)
            D(i) || i in o || r(e, i, n[i], null, l, t.children, a, s, ee);
        for (const c in o) {
          if (D(c))
            continue;
          const u = o[c]
            , d = n[c];
          (u !== d && "value" !== c || i && i(e, c)) && r(e, c, d, u, l, t.children, a, s, ee)
        }
        "value"in o && r(e, "value", n.value, o.value)
      }
    }
      , I = (e,t,o,r,i,a,l,c,u)=>{
      const d = t.el = e ? e.el : s("")
        , f = t.anchor = e ? e.anchor : s("");
      let {patchFlag: p, dynamicChildren: h, slotScopeIds: m} = t;
      m && (c = c ? c.concat(m) : m),
        null == e ? (n(d, o, r),
          n(f, o, r),
          L(t.children, o, f, i, a, l, c, u)) : p > 0 && 64 & p && h && e.dynamicChildren ? (A(e.dynamicChildren, h, o, i, a, l, c),
        (null != t.key || i && t === i.subTree) && kr(e, t, !0)) : q(e, t, o, f, i, a, l, c, u)
    }
      , N = (e,t,n,o,r,i,a,s,l)=>{
      t.slotScopeIds = s,
        null == e ? 512 & t.shapeFlag ? r.ctx.activate(t, n, o, a, l) : M(t, n, o, r, i, a, l) : R(e, t, l)
    }
      , M = (e,t,n,o,r,i,a)=>{
      const s = e.component = function(e, t, n) {
        const o = e.type
          , r = (t ? t.appContext : e.appContext) || ti
          , i = {
          uid: ni++,
          vnode: e,
          type: o,
          parent: t,
          appContext: r,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          scope: new Ae(!0),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: t ? t.provides : Object.create(r.provides),
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: ur(o, r),
          emitsOptions: On(o, r),
          emit: null,
          emitted: null,
          propsDefaults: h,
          inheritAttrs: o.inheritAttrs,
          ctx: h,
          data: h,
          props: h,
          attrs: h,
          slots: h,
          refs: h,
          setupState: h,
          setupContext: null,
          suspense: n,
          suspenseId: n ? n.pendingId : 0,
          asyncDep: null,
          asyncResolved: !1,
          isMounted: !1,
          isUnmounted: !1,
          isDeactivated: !1,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          bda: null,
          da: null,
          ba: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        i.ctx = {
          _: i
        },
          i.root = t ? t.root : i,
          i.emit = Pn.bind(null, i),
          i.$pageInstance = t && t.$pageInstance,
        e.ce && e.ce(i);
        return i
      }(e, o, r);
      if (co(e) && (s.ctx.renderer = oe),
        function(e, t=!1) {
          li = t;
          const {props: n, children: o} = e.vnode
            , r = si(e);
          sr(e, n, r, t),
            ((e,t)=>{
                if (32 & e.vnode.shapeFlag) {
                  const n = t._;
                  n ? (e.slots = zt(t),
                    Y(t, "_", n)) : yr(t, e.slots = {})
                } else
                  e.slots = {},
                  t && br(e, t);
                Y(e.slots, qr, 1)
              }
            )(e, o);
          const i = r ? function(e, t) {
            const n = e.type;
            e.accessCache = Object.create(null),
              e.proxy = Ut(new Proxy(e.ctx,Go));
            const {setup: o} = n;
            if (o) {
              const n = e.setupContext = o.length > 1 ? function(e) {
                const t = t=>{
                    e.exposed = t || {}
                  }
                ;
                let n;
                return {
                  get attrs() {
                    return n || (n = function(e) {
                      return new Proxy(e.attrs,{
                        get: (t,n)=>(Ye(e, 0, "$attrs"),
                          t[n])
                      })
                    }(e))
                  },
                  slots: e.slots,
                  emit: e.emit,
                  expose: t
                }
              }(e) : null;
              ii(e),
                Ue();
              const r = ln(o, e, 0, [e.props, n]);
              if (Xe(),
                ai(),
                $(r)) {
                if (r.then(ai, ai),
                  t)
                  return r.then((n=>{
                      ci(e, n, t)
                    }
                  )).catch((t=>{
                      un(t, e, 0)
                    }
                  ));
                e.asyncDep = r
              } else
                ci(e, r, t)
            } else
              ui(e, t)
          }(e, t) : void 0;
          li = !1
        }(s),
        s.asyncDep) {
        if (r && r.registerDep(s, j),
          !e.el) {
          const e = s.subTree = Ur(Or);
          _(null, e, t, n)
        }
      } else
        j(s, e, t, n, r, i, a)
    }
      , R = (e,t,n)=>{
      const o = t.component = e.component;
      if (function(e, t, n) {
        const {props: o, children: r, component: i} = e
          , {props: a, children: s, patchFlag: l} = t
          , c = i.emitsOptions;
        if (t.dirs || t.transition)
          return !0;
        if (!(n && l >= 0))
          return !(!r && !s || s && s.$stable) || o !== a && (o ? !a || jn(o, a, c) : !!a);
        if (1024 & l)
          return !0;
        if (16 & l)
          return o ? jn(o, a, c) : !!a;
        if (8 & l) {
          const e = t.dynamicProps;
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            if (a[n] !== o[n] && !An(c, n))
              return !0
          }
        }
        return !1
      }(e, t, n)) {
        if (o.asyncDep && !o.asyncResolved)
          return void F(o, t, n);
        o.next = t,
          function(e) {
            const t = pn.indexOf(e);
            t > hn && pn.splice(t, 1)
          }(o.update),
          o.update()
      } else
        t.el = e.el,
          o.vnode = t
    }
      , j = (e,t,n,o,r,i,a)=>{
      const s = ()=>{
        if (e.isMounted) {
          let t, {next: n, bu: o, u: s, parent: l, vnode: c} = e, u = n;
          Er(e, !1),
            n ? (n.el = c.el,
              F(e, n, a)) : n = c,
          o && X(o),
          (t = n.props && n.props.onVnodeBeforeUpdate) && ei(t, l, n, c),
            Er(e, !0);
          const f = Mn(e)
            , p = e.subTree;
          e.subTree = f,
            y(p, f, d(p.el), te(p), e, r, i),
            n.el = f.el,
          null === u && function({vnode: e, parent: t}, n) {
            for (; t && t.subTree === e; )
              (e = t.vnode).el = n,
                t = t.parent
          }(e, f.el),
          s && xr(s, r),
          (t = n.props && n.props.onVnodeUpdated) && xr((()=>ei(t, l, n, c)), r)
        } else {
          let a;
          const {el: s, props: l} = t
            , {bm: c, m: u, parent: d} = e
            , f = ao(t);
          if (Er(e, !1),
          c && X(c),
          !f && (a = l && l.onVnodeBeforeMount) && ei(a, d, t),
            Er(e, !0),
          s && ie) {
            const n = ()=>{
                e.subTree = Mn(e),
                  ie(s, e.subTree, e, r, null)
              }
            ;
            f ? t.type.__asyncLoader().then((()=>!e.isUnmounted && n())) : n()
          } else {
            const a = e.subTree = Mn(e);
            y(null, a, n, o, e, r, i),
              t.el = a.el
          }
          if (u && xr(u, r),
          !f && (a = l && l.onVnodeMounted)) {
            const e = t;
            xr((()=>ei(a, d, e)), r)
          }
          const {ba: p, a: h} = e;
          (256 & t.shapeFlag || d && ao(d.vnode) && 256 & d.vnode.shapeFlag) && (p && So(p),
          h && xr(h, r),
          p && xr((()=>To(p)), r)),
            e.isMounted = !0,
            t = n = o = null
        }
      }
        , l = e.effect = new qe(s,(()=>wn(c)),e.scope)
        , c = e.update = ()=>l.run();
      c.id = e.uid,
        Er(e, !0),
        c()
    }
      , F = (e,t,n)=>{
      t.component = e;
      const o = e.vnode.props;
      e.vnode = t,
        e.next = null,
        function(e, t, n, o) {
          const {props: r, attrs: i, vnode: {patchFlag: a}} = e
            , s = zt(r)
            , [l] = e.propsOptions;
          let c = !1;
          if (!(o || a > 0) || 16 & a) {
            let o;
            lr(e, t, r, i) && (c = !0);
            for (const i in s)
              t && (x(t, i) || (o = H(i)) !== i && x(t, o)) || (l ? !n || void 0 === n[i] && void 0 === n[o] || (r[i] = cr(l, s, i, void 0, e, !0)) : delete r[i]);
            if (i !== s)
              for (const e in i)
                t && x(t, e) || (delete i[e],
                  c = !0)
          } else if (8 & a) {
            const n = e.vnode.dynamicProps;
            for (let o = 0; o < n.length; o++) {
              let a = n[o];
              if (An(e.emitsOptions, a))
                continue;
              const u = t[a];
              if (l)
                if (x(i, a))
                  u !== i[a] && (i[a] = u,
                    c = !0);
                else {
                  const t = V(a);
                  r[t] = cr(l, s, t, u, e, !1)
                }
              else
                u !== i[a] && (i[a] = u,
                  c = !0)
            }
          }
          c && Je(e, "set", "$attrs")
        }(e, t.props, o, n),
        ((e,t,n)=>{
            const {vnode: o, slots: r} = e;
            let i = !0
              , a = h;
            if (32 & o.shapeFlag) {
              const e = t._;
              e ? n && 1 === e ? i = !1 : (w(r, t),
              n || 1 !== e || delete r._) : (i = !t.$stable,
                yr(t, r)),
                a = t
            } else
              t && (br(e, t),
                a = {
                  default: 1
                });
            if (i)
              for (const s in r)
                mr(s) || s in a || delete r[s]
          }
        )(e, t.children, n),
        Ue(),
        Tn(),
        Xe()
    }
      , q = (e,t,n,o,r,i,a,s,l=!1)=>{
      const c = e && e.children
        , d = e ? e.shapeFlag : 0
        , f = t.children
        , {patchFlag: p, shapeFlag: h} = t;
      if (p > 0) {
        if (128 & p)
          return void z(c, f, n, o, r, i, a, s, l);
        if (256 & p)
          return void W(c, f, n, o, r, i, a, s, l)
      }
      8 & h ? (16 & d && ee(c, r, i),
      f !== c && u(n, f)) : 16 & d ? 16 & h ? z(c, f, n, o, r, i, a, s, l) : ee(c, r, i, !0) : (8 & d && u(n, ""),
      16 & h && L(f, n, o, r, i, a, s, l))
    }
      , W = (e,t,n,o,r,i,a,s,l)=>{
      t = t || m;
      const c = (e = e || m).length
        , u = t.length
        , d = Math.min(c, u);
      let f;
      for (f = 0; f < d; f++) {
        const o = t[f] = l ? Kr(t[f]) : Jr(t[f]);
        y(e[f], o, n, null, r, i, a, s, l)
      }
      c > u ? ee(e, r, i, !0, !1, d) : L(t, n, o, r, i, a, s, l, d)
    }
      , z = (e,t,n,o,r,i,a,s,l)=>{
      let c = 0;
      const u = t.length;
      let d = e.length - 1
        , f = u - 1;
      for (; c <= d && c <= f; ) {
        const o = e[c]
          , u = t[c] = l ? Kr(t[c]) : Jr(t[c]);
        if (!Vr(o, u))
          break;
        y(o, u, n, null, r, i, a, s, l),
          c++
      }
      for (; c <= d && c <= f; ) {
        const o = e[d]
          , c = t[f] = l ? Kr(t[f]) : Jr(t[f]);
        if (!Vr(o, c))
          break;
        y(o, c, n, null, r, i, a, s, l),
          d--,
          f--
      }
      if (c > d) {
        if (c <= f) {
          const e = f + 1
            , d = e < u ? t[e].el : o;
          for (; c <= f; )
            y(null, t[c] = l ? Kr(t[c]) : Jr(t[c]), n, d, r, i, a, s, l),
              c++
        }
      } else if (c > f)
        for (; c <= d; )
          G(e[c], r, i, !0),
            c++;
      else {
        const p = c
          , h = c
          , g = new Map;
        for (c = h; c <= f; c++) {
          const e = t[c] = l ? Kr(t[c]) : Jr(t[c]);
          null != e.key && g.set(e.key, c)
        }
        let v, b = 0;
        const _ = f - h + 1;
        let w = !1
          , S = 0;
        const T = new Array(_);
        for (c = 0; c < _; c++)
          T[c] = 0;
        for (c = p; c <= d; c++) {
          const o = e[c];
          if (b >= _) {
            G(o, r, i, !0);
            continue
          }
          let u;
          if (null != o.key)
            u = g.get(o.key);
          else
            for (v = h; v <= f; v++)
              if (0 === T[v - h] && Vr(o, t[v])) {
                u = v;
                break
              }
          void 0 === u ? G(o, r, i, !0) : (T[u - h] = c + 1,
            u >= S ? S = u : w = !0,
            y(o, t[u], n, null, r, i, a, s, l),
            b++)
        }
        const x = w ? function(e) {
          const t = e.slice()
            , n = [0];
          let o, r, i, a, s;
          const l = e.length;
          for (o = 0; o < l; o++) {
            const l = e[o];
            if (0 !== l) {
              if (r = n[n.length - 1],
              e[r] < l) {
                t[o] = r,
                  n.push(o);
                continue
              }
              for (i = 0,
                     a = n.length - 1; i < a; )
                s = i + a >> 1,
                  e[n[s]] < l ? i = s + 1 : a = s;
              l < e[n[i]] && (i > 0 && (t[o] = n[i - 1]),
                n[i] = o)
            }
          }
          i = n.length,
            a = n[i - 1];
          for (; i-- > 0; )
            n[i] = a,
              a = t[a];
          return n
        }(T) : m;
        for (v = x.length - 1,
               c = _ - 1; c >= 0; c--) {
          const e = h + c
            , d = t[e]
            , f = e + 1 < u ? t[e + 1].el : o;
          0 === T[c] ? y(null, d, n, f, r, i, a, s, l) : w && (v < 0 || c !== x[v] ? U(d, n, f, 2) : v--)
        }
      }
    }
      , U = (e,t,o,r,i=null)=>{
      const {el: a, type: s, transition: l, children: c, shapeFlag: u} = e;
      if (6 & u)
        return void U(e.component.subTree, t, o, r);
      if (128 & u)
        return void e.suspense.move(t, o, r);
      if (64 & u)
        return void s.move(e, t, o, oe);
      if (s === Pr) {
        n(a, t, o);
        for (let e = 0; e < c.length; e++)
          U(c[e], t, o, r);
        return void n(e.anchor, t, o)
      }
      if (s === Ar)
        return void T(e, t, o);
      if (2 !== r && 1 & u && l)
        if (0 === r)
          l.beforeEnter(a),
            n(a, t, o),
            xr((()=>l.enter(a)), i);
        else {
          const {leave: e, delayLeave: r, afterLeave: i} = l
            , s = ()=>n(a, t, o)
            , c = ()=>{
              e(a, (()=>{
                  s(),
                  i && i()
                }
              ))
            }
          ;
          r ? r(a, s, c) : c()
        }
      else
        n(a, t, o)
    }
      , G = (e,t,n,o=!1,r=!1)=>{
      const {type: i, props: a, ref: s, children: l, dynamicChildren: c, shapeFlag: u, patchFlag: d, dirs: f} = e;
      if (null != s && Tr(s, null, n, e, !0),
      256 & u)
        return void t.ctx.deactivate(e);
      const p = 1 & u && f
        , h = !ao(e);
      let m;
      if (h && (m = a && a.onVnodeBeforeUnmount) && ei(m, t, e),
      6 & u)
        Q(e.component, n, o);
      else {
        if (128 & u)
          return void e.suspense.unmount(n, o);
        p && Ro(e, null, t, "beforeUnmount"),
          64 & u ? e.type.remove(e, t, n, r, oe, o) : c && (i !== Pr || d > 0 && 64 & d) ? ee(c, t, n, !1, !0) : (i === Pr && 384 & d || !r && 16 & u) && ee(l, t, n),
        o && K(e)
      }
      (h && (m = a && a.onVnodeUnmounted) || p) && xr((()=>{
          m && ei(m, t, e),
          p && Ro(e, null, t, "unmounted")
        }
      ), n)
    }
      , K = e=>{
      const {type: t, el: n, anchor: r, transition: i} = e;
      if (t === Pr)
        return void Z(n, r);
      if (t === Ar)
        return void C(e);
      const a = ()=>{
          o(n),
          i && !i.persisted && i.afterLeave && i.afterLeave()
        }
      ;
      if (1 & e.shapeFlag && i && !i.persisted) {
        const {leave: t, delayLeave: o} = i
          , r = ()=>t(n, a);
        o ? o(e.el, a, r) : r()
      } else
        a()
    }
      , Z = (e,t)=>{
      let n;
      for (; e !== t; )
        n = f(e),
          o(e),
          e = n;
      o(t)
    }
      , Q = (e,t,n)=>{
      const {bum: o, scope: r, update: i, subTree: a, um: s} = e;
      o && X(o),
        r.stop(),
      i && (i.active = !1,
        G(a, e, t, n)),
      s && xr(s, t),
        xr((()=>{
            e.isUnmounted = !0
          }
        ), t),
      t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--,
      0 === t.deps && t.resolve())
    }
      , ee = (e,t,n,o=!1,r=!1,i=0)=>{
      for (let a = i; a < e.length; a++)
        G(e[a], t, n, o, r)
    }
      , te = e=>6 & e.shapeFlag ? te(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : f(e.anchor || e.el)
      , ne = (e,t,n)=>{
      null == e ? t._vnode && G(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n),
        Tn(),
        xn(),
        t._vnode = e
    }
      , oe = {
      p: y,
      um: G,
      m: U,
      r: K,
      mt: M,
      mc: L,
      pc: q,
      pbc: A,
      n: te,
      o: e
    };
    let re, ie;
    t && ([re,ie] = t(oe));
    return {
      render: ne,
      hydrate: re,
      createApp: Sr(ne, re)
    }
  }(e)
}
function Er({effect: e, update: t}, n) {
  e.allowRecurse = t.allowRecurse = n
}
function kr(e, t, n=!1) {
  const o = e.children
    , r = t.children;
  if (C(o) && C(r))
    for (let i = 0; i < o.length; i++) {
      const e = o[i];
      let t = r[i];
      1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = r[i] = Kr(r[i]),
        t.el = e.el),
      n || kr(e, t)),
      t.type === Lr && (t.el = e.el)
    }
}
const Pr = Symbol(void 0)
  , Lr = Symbol(void 0)
  , Or = Symbol(void 0)
  , Ar = Symbol(void 0)
  , Br = [];
let $r = null;
function Ir(e=!1) {
  Br.push($r = e ? null : [])
}
let Nr = 1;
function Mr(e) {
  Nr += e
}
function Rr(e) {
  return e.dynamicChildren = Nr > 0 ? $r || m : null,
    Br.pop(),
    $r = Br[Br.length - 1] || null,
  Nr > 0 && $r && $r.push(e),
    e
}
function Dr(e, t, n, o, r, i) {
  return Rr(zr(e, t, n, o, r, i, !0))
}
function jr(e, t, n, o, r) {
  return Rr(Ur(e, t, n, o, r, !0))
}
function Fr(e) {
  return !!e && !0 === e.__v_isVNode
}
function Vr(e, t) {
  return e.type === t.type && e.key === t.key
}
const qr = "__vInternal"
  , Hr = ({key: e})=>null != e ? e : null
  , Wr = ({ref: e, ref_key: t, ref_for: n})=>null != e ? O(e) || Kt(e) || L(e) ? {
  i: Bn,
  r: e,
  k: t,
  f: !!n
} : e : null;
function zr(e, t=null, n=null, o=0, r=null, i=(e === Pr ? 0 : 1), a=!1, s=!1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hr(t),
    ref: t && Wr(t),
    scopeId: $n,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Bn
  };
  return s ? (Zr(l, n),
  128 & i && e.normalize(l)) : n && (l.shapeFlag |= O(n) ? 8 : 16),
  Nr > 0 && !a && $r && (l.patchFlag > 0 || 6 & i) && 32 !== l.patchFlag && $r.push(l),
    l
}
const Ur = function(e, t=null, o=null, r=0, i=null, a=!1) {
  e && e !== jo || (e = Or);
  if (Fr(e)) {
    const n = Xr(e, t, !0);
    return o && Zr(n, o),
    Nr > 0 && !a && $r && (6 & n.shapeFlag ? $r[$r.indexOf(e)] = n : $r.push(n)),
      n.patchFlag |= -2,
      n
  }
  l = e,
  L(l) && "__vccOpts"in l && (e = e.__vccOpts);
  var l;
  if (t) {
    t = function(e) {
      return e ? Wt(e) || qr in e ? w({}, e) : e : null
    }(t);
    let {class: e, style: o} = t;
    e && !O(e) && (t.class = s(e)),
    B(o) && (Wt(o) && !C(o) && (o = w({}, o)),
      t.style = n(o))
  }
  const c = O(e) ? 1 : Fn(e) ? 128 : (e=>e.__isTeleport)(e) ? 64 : B(e) ? 4 : L(e) ? 2 : 0;
  return zr(e, t, o, r, i, c, a, !0)
};
function Xr(e, t, n=!1) {
  const {props: o, ref: r, patchFlag: i, children: a} = e
    , s = t ? Qr(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && Hr(s),
    ref: t && t.ref ? n && r ? C(r) ? r.concat(Wr(t)) : [r, Wr(t)] : Wr(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Pr ? -1 === i ? 16 : 16 | i : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xr(e.ssContent),
    ssFallback: e.ssFallback && Xr(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function Yr(e=" ", t=0) {
  return Ur(Lr, null, e, t)
}
function Gr(e="", t=!1) {
  return t ? (Ir(),
    jr(Or, null, e)) : Ur(Or, null, e)
}
function Jr(e) {
  return null == e || "boolean" == typeof e ? Ur(Or) : C(e) ? Ur(Pr, null, e.slice()) : "object" == typeof e ? Kr(e) : Ur(Lr, null, String(e))
}
function Kr(e) {
  return null === e.el && -1 !== e.patchFlag || e.memo ? e : Xr(e)
}
function Zr(e, t) {
  let n = 0;
  const {shapeFlag: o} = e;
  if (null == t)
    t = null;
  else if (C(t))
    n = 16;
  else if ("object" == typeof t) {
    if (65 & o) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1),
        Zr(e, n()),
      n._c && (n._d = !0)))
    }
    {
      n = 32;
      const o = t._;
      o || qr in t ? 3 === o && Bn && (1 === Bn.slots._ ? t._ = 1 : (t._ = 2,
        e.patchFlag |= 1024)) : t._ctx = Bn
    }
  } else
    L(t) ? (t = {
      default: t,
      _ctx: Bn
    },
      n = 32) : (t = String(t),
      64 & o ? (n = 16,
        t = [Yr(t)]) : n = 8);
  e.children = t,
    e.shapeFlag |= n
}
function Qr(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const e in r)
      if ("class" === e)
        t.class !== r.class && (t.class = s([t.class, r.class]));
      else if ("style" === e)
        t.style = n([t.style, r.style]);
      else if (b(e)) {
        const n = t[e]
          , o = r[e];
        !o || n === o || C(n) && n.includes(o) || (t[e] = n ? [].concat(n, o) : o)
      } else
        "" !== e && (t[e] = r[e])
  }
  return t
}
function ei(e, t, n, o=null) {
  cn(e, t, 7, [n, o])
}
const ti = _r();
let ni = 0;
let oi = null;
const ri = ()=>oi || Bn
  , ii = e=>{
    oi = e,
      e.scope.on()
  }
  , ai = ()=>{
    oi && oi.scope.off(),
      oi = null
  }
;
function si(e) {
  return 4 & e.vnode.shapeFlag
}
let li = !1;
function ci(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = rn(t)),
    ui(e, n)
}
function ui(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || g),
    ii(e),
    Ue(),
    Ko(e),
    Xe(),
    ai()
}
function di(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(rn(Ut(e.exposed)),{
      get: (t,n)=>n in t ? t[n] : n in Xo ? Xo[n](e) : void 0,
      has: (e,t)=>t in e || t in Xo
    }))
}
function fi(e, t=!0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name
}
const pi = (e,t)=>function(e, t, n=!1) {
  let o, r;
  const i = L(e);
  return i ? (o = e,
    r = g) : (o = e.get,
    r = e.set),
    new sn(o,r,i || !r,n)
}(e, 0, li);
function hi(e, t, n) {
  const o = arguments.length;
  return 2 === o ? B(t) && !C(t) ? Fr(t) ? Ur(e, null, [t]) : Ur(e, t) : Ur(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === o && Fr(n) && (n = [n]),
    Ur(e, t, n))
}
const mi = Symbol("")
  , gi = ()=>qn(mi)
  , vi = "3.2.47"
  , yi = "undefined" != typeof document ? document : null
  , bi = yi && yi.createElement("template")
  , _i = {
  insert: (e,t,n)=>{
    t.insertBefore(e, n || null)
  }
  ,
  remove: e=>{
    const t = e.parentNode;
    t && t.removeChild(e)
  }
  ,
  createElement: (e,t,n,o)=>{
    const r = t ? yi.createElementNS("http://www.w3.org/2000/svg", e) : yi.createElement(e, n ? {
      is: n
    } : void 0);
    return "select" === e && o && null != o.multiple && r.setAttribute("multiple", o.multiple),
      r
  }
  ,
  createText: e=>yi.createTextNode(e),
  createComment: e=>yi.createComment(e),
  setText: (e,t)=>{
    e.nodeValue = t
  }
  ,
  setElementText: (e,t)=>{
    e.textContent = t
  }
  ,
  parentNode: e=>e.parentNode,
  nextSibling: e=>e.nextSibling,
  querySelector: e=>yi.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "")
  },
  insertStaticContent(e, t, n, o, r, i) {
    const a = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n),
             r !== i && (r = r.nextSibling); )
        ;
    else {
      bi.innerHTML = o ? `<svg>${e}</svg>` : e;
      const r = bi.content;
      if (o) {
        const e = r.firstChild;
        for (; e.firstChild; )
          r.appendChild(e.firstChild);
        r.removeChild(e)
      }
      t.insertBefore(r, n)
    }
    return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
  }
};
const wi = /\s*!important$/;
function Si(e, t, n) {
  if (C(n))
    n.forEach((n=>Si(e, t, n)));
  else if (null == n && (n = ""),
    n = Bi(n),
    t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = function(e, t) {
      const n = xi[t];
      if (n)
        return n;
      let o = V(t);
      if ("filter" !== o && o in e)
        return xi[t] = o;
      o = W(o);
      for (let r = 0; r < Ti.length; r++) {
        const n = Ti[r] + o;
        if (n in e)
          return xi[t] = n
      }
      return t
    }(e, t);
    wi.test(n) ? e.setProperty(H(o), n.replace(wi, ""), "important") : e[o] = n
  }
}
const Ti = ["Webkit", "Moz", "ms"]
  , xi = {};
const {unit: Ci, unitRatio: Ei, unitPrecision: ki} = {
  unit: "rem",
  unitRatio: 10 / 320,
  unitPrecision: 5
}
  , Pi = (Li = Ci,
  Oi = Ei,
  Ai = ki,
  e=>e.replace(fe, ((e,t)=>{
      if (!t)
        return e;
      if (1 === Oi)
        return `${t}${Li}`;
      const n = function(e, t) {
        const n = Math.pow(10, t + 1)
          , o = Math.floor(e * n);
        return 10 * Math.round(o / 10) / n
      }(parseFloat(t) * Oi, Ai);
      return 0 === n ? "0" : `${n}${Li}`
    }
  )));
var Li, Oi, Ai;
const Bi = e=>O(e) ? Pi(e) : e
  , $i = "http://www.w3.org/1999/xlink";
function Ii(e, t, n, o) {
  e.addEventListener(t, n, o)
}
function Ni(e, t, n, o, r=null) {
  const i = e._vei || (e._vei = {})
    , a = i[t];
  if (o && a)
    a.value = o;
  else {
    const [n,s] = function(e) {
      let t;
      if (Mi.test(e)) {
        let n;
        for (t = {}; n = e.match(Mi); )
          e = e.slice(0, e.length - n[0].length),
            t[n[0].toLowerCase()] = !0
      }
      return [":" === e[2] ? e.slice(3) : H(e.slice(2)), t]
    }(t);
    if (o) {
      const a = i[t] = function(e, t) {
        const n = e=>{
            if (e._vts) {
              if (e._vts <= n.attached)
                return
            } else
              e._vts = Date.now();
            const o = t && t.proxy
              , r = o && o.$nne
              , {value: i} = n;
            if (r && C(i)) {
              const n = ji(e, i);
              for (let o = 0; o < n.length; o++) {
                const i = n[o];
                cn(i, t, 5, i.__wwe ? [e] : r(e))
              }
            } else
              cn(ji(e, i), t, 5, r && !i.__wwe ? r(e, i, t) : [e])
          }
        ;
        return n.value = e,
          n.attached = (()=>Ri || (Di.then((()=>Ri = 0)),
            Ri = Date.now()))(),
          n
      }(o, r);
      Ii(e, n, a, s)
    } else
      a && (!function(e, t, n, o) {
        e.removeEventListener(t, n, o)
      }(e, n, a, s),
        i[t] = void 0)
  }
}
const Mi = /(?:Once|Passive|Capture)$/;
let Ri = 0;
const Di = Promise.resolve();
function ji(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = ()=>{
      n.call(e),
        e._stopped = !0
    }
      ,
      t.map((e=>{
          const t = t=>!t._stopped && e && e(t);
          return t.__wwe = e.__wwe,
            t
        }
      ))
  }
  return t
}
const Fi = /^on[a-z]/;
const Vi = "transition"
  , qi = (e,{slots: t})=>hi(Zn, function(e) {
  const t = {};
  for (const w in e)
    w in Hi || (t[w] = e[w]);
  if (!1 === e.css)
    return t;
  const {name: n="v", type: o, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: a=`${n}-enter-active`, enterToClass: s=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: c=a, appearToClass: u=s, leaveFromClass: d=`${n}-leave-from`, leaveActiveClass: f=`${n}-leave-active`, leaveToClass: p=`${n}-leave-to`} = e
    , h = function(e) {
      if (null == e)
        return null;
      if (B(e))
        return [Ui(e.enter), Ui(e.leave)];
      {
        const t = Ui(e);
        return [t, t]
      }
    }(r)
    , m = h && h[0]
    , g = h && h[1]
    , {onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: _, onLeaveCancelled: S, onBeforeAppear: T=v, onAppear: x=y, onAppearCancelled: C=b} = t
    , E = (e,t,n)=>{
      Yi(e, t ? u : s),
        Yi(e, t ? c : a),
      n && n()
    }
    , k = (e,t)=>{
      e._isLeaving = !1,
        Yi(e, d),
        Yi(e, p),
        Yi(e, f),
      t && t()
    }
    , P = e=>(t,n)=>{
      const r = e ? x : y
        , a = ()=>E(t, e, n);
      Wi(r, [t, a]),
        Gi((()=>{
            Yi(t, e ? l : i),
              Xi(t, e ? u : s),
            zi(r) || Ki(t, o, m, a)
          }
        ))
    }
  ;
  return w(t, {
    onBeforeEnter(e) {
      Wi(v, [e]),
        Xi(e, i),
        Xi(e, a)
    },
    onBeforeAppear(e) {
      Wi(T, [e]),
        Xi(e, l),
        Xi(e, c)
    },
    onEnter: P(!1),
    onAppear: P(!0),
    onLeave(e, t) {
      e._isLeaving = !0;
      const n = ()=>k(e, t);
      Xi(e, d),
        document.body.offsetHeight,
        Xi(e, f),
        Gi((()=>{
            e._isLeaving && (Yi(e, d),
              Xi(e, p),
            zi(_) || Ki(e, o, g, n))
          }
        )),
        Wi(_, [e, n])
    },
    onEnterCancelled(e) {
      E(e, !1),
        Wi(b, [e])
    },
    onAppearCancelled(e) {
      E(e, !0),
        Wi(C, [e])
    },
    onLeaveCancelled(e) {
      k(e),
        Wi(S, [e])
    }
  })
}(e), t);
qi.displayName = "Transition";
const Hi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qi.props = w({}, Kn, Hi);
const Wi = (e,t=[])=>{
  C(e) ? e.forEach((e=>e(...t))) : e && e(...t)
}
  , zi = e=>!!e && (C(e) ? e.some((e=>e.length > 1)) : e.length > 1);
function Ui(e) {
  const t = (e=>{
      const t = O(e) ? Number(e) : NaN;
      return isNaN(t) ? e : t
    }
  )(e);
  return t
}
function Xi(e, t) {
  t.split(/\s+/).forEach((t=>t && e.classList.add(t))),
    (e._vtc || (e._vtc = new Set)).add(t)
}
function Yi(e, t) {
  t.split(/\s+/).forEach((t=>t && e.classList.remove(t)));
  const {_vtc: n} = e;
  n && (n.delete(t),
  n.size || (e._vtc = void 0))
}
function Gi(e) {
  requestAnimationFrame((()=>{
      requestAnimationFrame(e)
    }
  ))
}
let Ji = 0;
function Ki(e, t, n, o) {
  const r = e._endId = ++Ji
    , i = ()=>{
      r === e._endId && o()
    }
  ;
  if (n)
    return setTimeout(i, n);
  const {type: a, timeout: s, propCount: l} = function(e, t) {
    const n = window.getComputedStyle(e)
      , o = e=>(n[e] || "").split(", ")
      , r = o("transitionDelay")
      , i = o("transitionDuration")
      , a = Zi(r, i)
      , s = o("animationDelay")
      , l = o("animationDuration")
      , c = Zi(s, l);
    let u = null
      , d = 0
      , f = 0;
    t === Vi ? a > 0 && (u = Vi,
      d = a,
      f = i.length) : "animation" === t ? c > 0 && (u = "animation",
      d = c,
      f = l.length) : (d = Math.max(a, c),
      u = d > 0 ? a > c ? Vi : "animation" : null,
      f = u ? u === Vi ? i.length : l.length : 0);
    const p = u === Vi && /\b(transform|all)(,|$)/.test(o("transitionProperty").toString());
    return {
      type: u,
      timeout: d,
      propCount: f,
      hasTransform: p
    }
  }(e, t);
  if (!a)
    return o();
  const c = a + "end";
  let u = 0;
  const d = ()=>{
      e.removeEventListener(c, f),
        i()
    }
    , f = t=>{
      t.target === e && ++u >= l && d()
    }
  ;
  setTimeout((()=>{
      u < l && d()
    }
  ), s + 1),
    e.addEventListener(c, f)
}
function Zi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map(((t,n)=>Qi(t) + Qi(e[n]))))
}
function Qi(e) {
  return 1e3 * Number(e.slice(0, -1).replace(",", "."))
}
const ea = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return C(t) ? e=>X(t, e) : t
  }
;
function ta(e) {
  e.target.composing = !0
}
function na(e) {
  const t = e.target;
  t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const oa = {
  created(e, {modifiers: {lazy: t, trim: n, number: o}}, r) {
    e._assign = ea(r);
    const i = o || r.props && "number" === r.props.type;
    Ii(e, t ? "change" : "input", (t=>{
        if (t.target.composing)
          return;
        let o = e.value;
        n && (o = o.trim()),
        i && (o = G(o)),
          e._assign(o)
      }
    )),
    n && Ii(e, "change", (()=>{
        e.value = e.value.trim()
      }
    )),
    t || (Ii(e, "compositionstart", ta),
      Ii(e, "compositionend", na),
      Ii(e, "change", na))
  },
  mounted(e, {value: t}) {
    e.value = null == t ? "" : t
  },
  beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: o, number: r}}, i) {
    if (e._assign = ea(i),
      e.composing)
      return;
    if (document.activeElement === e && "range" !== e.type) {
      if (n)
        return;
      if (o && e.value.trim() === t)
        return;
      if ((r || "number" === e.type) && G(e.value) === t)
        return
    }
    const a = null == t ? "" : t;
    e.value !== a && (e.value = a)
  }
}
  , ra = {
  deep: !0,
  created(e, t, n) {
    e._assign = ea(n),
      Ii(e, "change", (()=>{
          const t = e._modelValue
            , n = ca(e)
            , o = e.checked
            , r = e._assign;
          if (C(t)) {
            const e = d(t, n)
              , i = -1 !== e;
            if (o && !i)
              r(t.concat(n));
            else if (!o && i) {
              const n = [...t];
              n.splice(e, 1),
                r(n)
            }
          } else if (k(t)) {
            const e = new Set(t);
            o ? e.add(n) : e.delete(n),
              r(e)
          } else
            r(ua(e, o))
        }
      ))
  },
  mounted: ia,
  beforeUpdate(e, t, n) {
    e._assign = ea(n),
      ia(e, t, n)
  }
};
function ia(e, {value: t, oldValue: n}, o) {
  e._modelValue = t,
    C(t) ? e.checked = d(t, o.props.value) > -1 : k(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = u(t, ua(e, !0)))
}
const aa = {
  created(e, {value: t}, n) {
    e.checked = u(t, n.props.value),
      e._assign = ea(n),
      Ii(e, "change", (()=>{
          e._assign(ca(e))
        }
      ))
  },
  beforeUpdate(e, {value: t, oldValue: n}, o) {
    e._assign = ea(o),
    t !== n && (e.checked = u(t, o.props.value))
  }
}
  , sa = {
  deep: !0,
  created(e, {value: t, modifiers: {number: n}}, o) {
    const r = k(t);
    Ii(e, "change", (()=>{
        const t = Array.prototype.filter.call(e.options, (e=>e.selected)).map((e=>n ? G(ca(e)) : ca(e)));
        e._assign(e.multiple ? r ? new Set(t) : t : t[0])
      }
    )),
      e._assign = ea(o)
  },
  mounted(e, {value: t}) {
    la(e, t)
  },
  beforeUpdate(e, t, n) {
    e._assign = ea(n)
  },
  updated(e, {value: t}) {
    la(e, t)
  }
};
function la(e, t) {
  const n = e.multiple;
  if (!n || C(t) || k(t)) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const r = e.options[o]
        , i = ca(r);
      if (n)
        C(t) ? r.selected = d(t, i) > -1 : r.selected = t.has(i);
      else if (u(ca(r), t))
        return void (e.selectedIndex !== o && (e.selectedIndex = o))
    }
    n || -1 === e.selectedIndex || (e.selectedIndex = -1)
  }
}
function ca(e) {
  return "_value"in e ? e._value : e.value
}
function ua(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t
}
const da = {
  created(e, t, n) {
    fa(e, t, n, null, "created")
  },
  mounted(e, t, n) {
    fa(e, t, n, null, "mounted")
  },
  beforeUpdate(e, t, n, o) {
    fa(e, t, n, o, "beforeUpdate")
  },
  updated(e, t, n, o) {
    fa(e, t, n, o, "updated")
  }
};
function fa(e, t, n, o, r) {
  const i = function(e, t) {
    switch (e) {
      case "SELECT":
        return sa;
      case "TEXTAREA":
        return oa;
      default:
        switch (t) {
          case "checkbox":
            return ra;
          case "radio":
            return aa;
          default:
            return oa
        }
    }
  }(e.tagName, n.props && n.props.type)[r];
  i && i(e, t, n, o)
}
const pa = ["ctrl", "shift", "alt", "meta"]
  , ha = {
  stop: e=>e.stopPropagation(),
  prevent: e=>e.preventDefault(),
  self: e=>e.target !== e.currentTarget,
  ctrl: e=>!e.ctrlKey,
  shift: e=>!e.shiftKey,
  alt: e=>!e.altKey,
  meta: e=>!e.metaKey,
  left: e=>"button"in e && 0 !== e.button,
  middle: e=>"button"in e && 1 !== e.button,
  right: e=>"button"in e && 2 !== e.button,
  exact: (e,t)=>pa.some((n=>e[`${n}Key`] && !t.includes(n)))
}
  , ma = (e,t)=>(n,...o)=>{
  for (let e = 0; e < t.length; e++) {
    const o = ha[t[e]];
    if (o && o(n, t))
      return
  }
  return e(n, ...o)
}
  , ga = {
  beforeMount(e, {value: t}, {transition: n}) {
    e._vod = "none" === e.style.display ? "" : e.style.display,
      n && t ? n.beforeEnter(e) : va(e, t)
  },
  mounted(e, {value: t}, {transition: n}) {
    n && t && n.enter(e)
  },
  updated(e, {value: t, oldValue: n}, {transition: o}) {
    !t != !n && (o ? t ? (o.beforeEnter(e),
      va(e, !0),
      o.enter(e)) : o.leave(e, (()=>{
        va(e, !1)
      }
    )) : va(e, t))
  },
  beforeUnmount(e, {value: t}) {
    va(e, t)
  }
};
function va(e, t) {
  e.style.display = t ? e._vod : "none"
}
const ya = w({
  patchProp: (e,t,n,o,r=!1,i,a,s,u)=>{
    if (0 === t.indexOf("change:"))
      return function(e, t, n, o=null) {
        if (!n || !o)
          return;
        const r = t.replace("change:", "")
          , {attrs: i} = o
          , a = i[r]
          , s = (e.__wxsProps || (e.__wxsProps = {}))[r];
        if (s === a)
          return;
        e.__wxsProps[r] = a;
        const l = o.proxy;
        _n((()=>{
            n(a, s, l.$gcd(l, !0), l.$gcd(l, !1))
          }
        ))
      }(e, t, o, a);
    "class" === t ? function(e, t, n) {
      const {__wxsAddClass: o, __wxsRemoveClass: r} = e;
      r && r.length && (t = (t || "").split(/\s+/).filter((e=>-1 === r.indexOf(e))).join(" "),
        r.length = 0),
      o && o.length && (t = (t || "") + " " + o.join(" "));
      const i = e._vtc;
      i && (t = (t ? [t, ...i] : [...i]).join(" ")),
        null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }(e, o, r) : "style" === t ? function(e, t, n) {
      const o = e.style
        , r = O(n);
      if (n && !r) {
        if (t && !O(t))
          for (const e in t)
            null == n[e] && Si(o, e, "");
        for (const e in n)
          Si(o, e, n[e])
      } else {
        const i = o.display;
        r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
        "_vod"in e && (o.display = i)
      }
      const {__wxsStyle: i} = e;
      if (i)
        for (const a in i)
          Si(o, a, i[a])
    }(e, n, o) : b(t) ? _(t) || Ni(e, t, 0, o, a) : ("." === t[0] ? (t = t.slice(1),
      1) : "^" === t[0] ? (t = t.slice(1),
      0) : function(e, t, n, o) {
      if (o)
        return "innerHTML" === t || "textContent" === t || !!(t in e && Fi.test(t) && L(n));
      if ("spellcheck" === t || "draggable" === t || "translate" === t)
        return !1;
      if ("form" === t)
        return !1;
      if ("list" === t && "INPUT" === e.tagName)
        return !1;
      if ("type" === t && "TEXTAREA" === e.tagName)
        return !1;
      if (Fi.test(t) && O(n))
        return !1;
      return t in e
    }(e, t, o, r)) ? function(e, t, n, o, r, i, a) {
      if ("innerHTML" === t || "textContent" === t)
        return o && a(o, r, i),
          void (e[t] = null == n ? "" : n);
      if ("value" === t && "PROGRESS" !== e.tagName && !e.tagName.includes("-")) {
        e._value = n;
        const o = null == n ? "" : n;
        return e.value === o && "OPTION" !== e.tagName || (e.value = o),
          void (null == n && e.removeAttribute(t))
      }
      let s = !1;
      if ("" === n || null == n) {
        const o = typeof e[t];
        "boolean" === o ? n = c(n) : null == n && "string" === o ? (n = "",
          s = !0) : "number" === o && (n = 0,
          s = !0)
      }
      try {
        e[t] = n
      } catch (l) {}
      s && e.removeAttribute(t)
    }(e, t, o, i, a, s, u) : ("true-value" === t ? e._trueValue = o : "false-value" === t && (e._falseValue = o),
      function(e, t, n, o, r) {
        if (o && t.startsWith("xlink:"))
          null == n ? e.removeAttributeNS($i, t.slice(6, t.length)) : e.setAttributeNS($i, t, n);
        else {
          const o = l(t);
          null == n || o && !c(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
        }
      }(e, t, o, r))
  }
  ,
  forcePatchProp: (e,t)=>0 === t.indexOf("change:") || ("class" === t && e.__wxsClassChanged ? (e.__wxsClassChanged = !1,
    !0) : !("style" !== t || !e.__wxsStyleChanged) && (e.__wxsStyleChanged = !1,
    !0))
}, _i);
let ba;
function _a() {
  return ba || (ba = Cr(ya))
}
const wa = (...e)=>{
    _a().render(...e)
  }
  , Sa = (...e)=>{
    const t = _a().createApp(...e)
      , {mount: n} = t;
    return t.mount = e=>{
      const o = function(e) {
        if (O(e)) {
          return document.querySelector(e)
        }
        return e
      }(e);
      if (!o)
        return;
      const r = t._component;
      L(r) || r.render || r.template || (r.template = o.innerHTML),
        o.innerHTML = "";
      const i = n(o, !1, o instanceof SVGElement);
      return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
      ,
      t
  }
;
const Ta = ["{", "}"];
const xa = /^(?:\d)+/
  , Ca = /^(?:\w)+/;
const Ea = Object.prototype.hasOwnProperty
  , ka = (e,t)=>Ea.call(e, t)
  , Pa = new class {
    constructor() {
      this._caches = Object.create(null)
    }
    interpolate(e, t, n=Ta) {
      if (!t)
        return [e];
      let o = this._caches[e];
      return o || (o = function(e, [t,n]) {
        const o = [];
        let r = 0
          , i = "";
        for (; r < e.length; ) {
          let a = e[r++];
          if (a === t) {
            i && o.push({
              type: "text",
              value: i
            }),
              i = "";
            let t = "";
            for (a = e[r++]; void 0 !== a && a !== n; )
              t += a,
                a = e[r++];
            const s = a === n
              , l = xa.test(t) ? "list" : s && Ca.test(t) ? "named" : "unknown";
            o.push({
              value: t,
              type: l
            })
          } else
            i += a
        }
        return i && o.push({
          type: "text",
          value: i
        }),
          o
      }(e, n),
        this._caches[e] = o),
        function(e, t) {
          const n = [];
          let o = 0;
          const r = Array.isArray(t) ? "list" : (i = t,
            null !== i && "object" == typeof i ? "named" : "unknown");
          var i;
          if ("unknown" === r)
            return n;
          for (; o < e.length; ) {
            const i = e[o];
            switch (i.type) {
              case "text":
                n.push(i.value);
                break;
              case "list":
                n.push(t[parseInt(i.value, 10)]);
                break;
              case "named":
                "named" === r && n.push(t[i.value])
            }
            o++
          }
          return n
        }(o, t)
    }
  }
;
function La(e, t) {
  if (!e)
    return;
  if (e = e.trim().replace(/_/g, "-"),
  t && t[e])
    return e;
  if ("chinese" === (e = e.toLowerCase()))
    return "zh-Hans";
  if (0 === e.indexOf("zh"))
    return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 ? "zh-Hant" : (n = e,
      ["-tw", "-hk", "-mo", "-cht"].find((e=>-1 !== n.indexOf(e))) ? "zh-Hant" : "zh-Hans");
  var n;
  let o = ["en", "fr", "es"];
  t && Object.keys(t).length > 0 && (o = Object.keys(t));
  const r = function(e, t) {
    return t.find((t=>0 === e.indexOf(t)))
  }(e, o);
  return r || void 0
}
class Oa {
  constructor({locale: e, fallbackLocale: t, messages: n, watcher: o, formater: r}) {
    this.locale = "en",
      this.fallbackLocale = "en",
      this.message = {},
      this.messages = {},
      this.watchers = [],
    t && (this.fallbackLocale = t),
      this.formater = r || Pa,
      this.messages = n || {},
      this.setLocale(e || "en"),
    o && this.watchLocale(o)
  }
  setLocale(e) {
    const t = this.locale;
    this.locale = La(e, this.messages) || this.fallbackLocale,
    this.messages[this.locale] || (this.messages[this.locale] = {}),
      this.message = this.messages[this.locale],
    t !== this.locale && this.watchers.forEach((e=>{
        e(this.locale, t)
      }
    ))
  }
  getLocale() {
    return this.locale
  }
  watchLocale(e) {
    const t = this.watchers.push(e) - 1;
    return ()=>{
      this.watchers.splice(t, 1)
    }
  }
  add(e, t, n=!0) {
    const o = this.messages[e];
    o ? n ? Object.assign(o, t) : Object.keys(t).forEach((e=>{
        ka(o, e) || (o[e] = t[e])
      }
    )) : this.messages[e] = t
  }
  f(e, t, n) {
    return this.formater.interpolate(e, t, n).join("")
  }
  t(e, t, n) {
    let o = this.message;
    return "string" == typeof t ? (t = La(t, this.messages)) && (o = this.messages[t]) : n = t,
      ka(o, e) ? this.formater.interpolate(o[e], n).join("") : (console.warn(`Cannot translate the value of keypath ${e}. Use the value of keypath as default.`),
        e)
  }
}
function Aa(e, t={}, n, o) {
  "string" != typeof e && ([e,t] = [t, e]),
  "string" != typeof e && (e = "undefined" != typeof uni && od ? od() : "undefined" != typeof global && global.getLocale ? global.getLocale() : "en"),
  "string" != typeof n && (n = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || "en");
  const r = new Oa({
    locale: e,
    fallbackLocale: n,
    messages: t,
    watcher: o
  });
  let i = (e,t)=>{
      {
        let e = !1;
        i = function(t, n) {
          const o = lp().$vm;
          return o && (o.$locale,
          e || (e = !0,
            function(e, t) {
              e.$watchLocale ? e.$watchLocale((e=>{
                  t.setLocale(e)
                }
              )) : e.$watch((()=>e.$locale), (e=>{
                  t.setLocale(e)
                }
              ))
            }(o, r))),
            r.t(t, n)
        }
      }
      return i(e, t)
    }
  ;
  return {
    i18n: r,
    f: (e,t,n)=>r.f(e, t, n),
    t: (e,t)=>i(e, t),
    add: (e,t,n=!0)=>r.add(e, t, n),
    watch: e=>r.watchLocale(e),
    getLocale: ()=>r.getLocale(),
    setLocale: e=>r.setLocale(e)
  }
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Ba = "undefined" != typeof window;
const $a = Object.assign;
function Ia(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Ma(r) ? r.map(e) : e(r)
  }
  return n
}
const Na = ()=>{}
  , Ma = Array.isArray
  , Ra = /\/$/;
function Da(e, t, n="/") {
  let o, r = {}, i = "", a = "";
  const s = t.indexOf("#");
  let l = t.indexOf("?");
  return s < l && s >= 0 && (l = -1),
  l > -1 && (o = t.slice(0, l),
    i = t.slice(l + 1, s > -1 ? s : t.length),
    r = e(i)),
  s > -1 && (o = o || t.slice(0, s),
    a = t.slice(s, t.length)),
    o = function(e, t) {
      if (e.startsWith("/"))
        return e;
      if (!e)
        return t;
      const n = t.split("/")
        , o = e.split("/");
      let r, i, a = n.length - 1;
      for (r = 0; r < o.length; r++)
        if (i = o[r],
        "." !== i) {
          if (".." !== i)
            break;
          a > 1 && a--
        }
      return n.slice(0, a).join("/") + "/" + o.slice(r - (r === o.length ? 1 : 0)).join("/")
    }(null != o ? o : t, n),
    {
      fullPath: o + (i && "?") + i + a,
      path: o,
      query: r,
      hash: a
    }
}
function ja(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e
}
function Fa(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Va(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!qa(e[n], t[n]))
      return !1;
  return !0
}
function qa(e, t) {
  return Ma(e) ? Ha(e, t) : Ma(t) ? Ha(t, e) : e === t
}
function Ha(e, t) {
  return Ma(t) ? e.length === t.length && e.every(((e,n)=>e === t[n])) : 1 === e.length && e[0] === t
}
var Wa, za, Ua, Xa;
function Ya(e) {
  if (!e)
    if (Ba) {
      const t = document.querySelector("base");
      e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "")
    } else
      e = "/";
  return "/" !== e[0] && "#" !== e[0] && (e = "/" + e),
    e.replace(Ra, "")
}
(za = Wa || (Wa = {})).pop = "pop",
  za.push = "push",
  (Xa = Ua || (Ua = {})).back = "back",
  Xa.forward = "forward",
  Xa.unknown = "";
const Ga = /^[^#]+#/;
function Ja(e, t) {
  return e.replace(Ga, "#") + t
}
const Ka = ()=>({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Za(e) {
  let t;
  if ("el"in e) {
    const n = e.el
      , o = "string" == typeof n && n.startsWith("#")
      , r = "string" == typeof n ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r)
      return;
    t = function(e, t) {
      const n = document.documentElement.getBoundingClientRect()
        , o = e.getBoundingClientRect();
      return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
      }
    }(r, e)
  } else
    t = e;
  "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.pageXOffset, null != t.top ? t.top : window.pageYOffset)
}
function Qa(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const es = new Map;
function ts(e, t) {
  const {pathname: n, search: o, hash: r} = t
    , i = e.indexOf("#");
  if (i > -1) {
    let t = r.includes(e.slice(i)) ? e.slice(i).length : 1
      , n = r.slice(t);
    return "/" !== n[0] && (n = "/" + n),
      ja(n, "")
  }
  return ja(n, e) + o + r
}
function ns(e, t, n, o=!1, r=!1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Ka() : null
  }
}
function os(e) {
  const {history: t, location: n} = window
    , o = {
    value: ts(e, n)
  }
    , r = {
    value: t.state
  };
  function i(o, i, a) {
    const s = e.indexOf("#")
      , l = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + o : location.protocol + "//" + location.host + e + o;
    try {
      t[a ? "replaceState" : "pushState"](i, "", l),
        r.value = i
    } catch (c) {
      console.error(c),
        n[a ? "replace" : "assign"](l)
    }
  }
  return r.value || i(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0),
    {
      location: o,
      state: r,
      push: function(e, n) {
        const a = $a({}, r.value, t.state, {
          forward: e,
          scroll: Ka()
        });
        i(a.current, a, !0),
          i(e, $a({}, ns(o.value, e, null), {
            position: a.position + 1
          }, n), !1),
          o.value = e
      },
      replace: function(e, n) {
        i(e, $a({}, t.state, ns(r.value.back, e, r.value.forward, !0), n, {
          position: r.value.position
        }), !0),
          o.value = e
      }
    }
}
function rs(e) {
  const t = os(e = Ya(e))
    , n = function(e, t, n, o) {
    let r = []
      , i = []
      , a = null;
    const s = ({state: i})=>{
        const s = ts(e, location)
          , l = n.value
          , c = t.value;
        let u = 0;
        if (i) {
          if (n.value = s,
            t.value = i,
          a && a === l)
            return void (a = null);
          u = c ? i.position - c.position : 0
        } else
          o(s);
        r.forEach((e=>{
            e(n.value, l, {
              delta: u,
              type: Wa.pop,
              direction: u ? u > 0 ? Ua.forward : Ua.back : Ua.unknown
            })
          }
        ))
      }
    ;
    function l() {
      const {history: e} = window;
      e.state && e.replaceState($a({}, e.state, {
        scroll: Ka()
      }), "")
    }
    return window.addEventListener("popstate", s),
      window.addEventListener("beforeunload", l),
      {
        pauseListeners: function() {
          a = n.value
        },
        listen: function(e) {
          r.push(e);
          const t = ()=>{
              const t = r.indexOf(e);
              t > -1 && r.splice(t, 1)
            }
          ;
          return i.push(t),
            t
        },
        destroy: function() {
          for (const e of i)
            e();
          i = [],
            window.removeEventListener("popstate", s),
            window.removeEventListener("beforeunload", l)
        }
      }
  }(e, t.state, t.location, t.replace);
  const o = $a({
    location: "",
    base: e,
    go: function(e, t=!0) {
      t || n.pauseListeners(),
        history.go(e)
    },
    createHref: Ja.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: ()=>t.location.value
  }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: ()=>t.state.value
    }),
    o
}
function is(e) {
  return "string" == typeof e || "symbol" == typeof e
}
const as = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
  , ss = Symbol("");
var ls, cs;
function us(e, t) {
  return $a(new Error, {
    type: e,
    [ss]: !0
  }, t)
}
function ds(e, t) {
  return e instanceof Error && ss in e && (null == t || !!(e.type & t))
}
(cs = ls || (ls = {}))[cs.aborted = 4] = "aborted",
  cs[cs.cancelled = 8] = "cancelled",
  cs[cs.duplicated = 16] = "duplicated";
const fs = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}
  , ps = /[.+*?^${}()[\]/\\]/g;
function hs(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++
  }
  return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0
}
function ms(e, t) {
  let n = 0;
  const o = e.score
    , r = t.score;
  for (; n < o.length && n < r.length; ) {
    const e = hs(o[n], r[n]);
    if (e)
      return e;
    n++
  }
  if (1 === Math.abs(r.length - o.length)) {
    if (gs(o))
      return 1;
    if (gs(r))
      return -1
  }
  return r.length - o.length
}
function gs(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const vs = {
  type: 0,
  value: ""
}
  , ys = /[a-zA-Z0-9_]/;
function bs(e, t, n) {
  const o = function(e, t) {
    const n = $a({}, fs, t)
      , o = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const l of e) {
      const e = l.length ? [] : [90];
      n.strict && !l.length && (r += "/");
      for (let t = 0; t < l.length; t++) {
        const o = l[t];
        let a = 40 + (n.sensitive ? .25 : 0);
        if (0 === o.type)
          t || (r += "/"),
            r += o.value.replace(ps, "\\$&"),
            a += 40;
        else if (1 === o.type) {
          const {value: e, repeatable: n, optional: c, regexp: u} = o;
          i.push({
            name: e,
            repeatable: n,
            optional: c
          });
          const d = u || "[^/]+?";
          if ("[^/]+?" !== d) {
            a += 10;
            try {
              new RegExp(`(${d})`)
            } catch (s) {
              throw new Error(`Invalid custom RegExp for param "${e}" (${d}): ` + s.message)
            }
          }
          let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`;
          t || (f = c && l.length < 2 ? `(?:/${f})` : "/" + f),
          c && (f += "?"),
            r += f,
            a += 20,
          c && (a += -8),
          n && (a += -20),
          ".*" === d && (a += -50)
        }
        e.push(a)
      }
      o.push(e)
    }
    if (n.strict && n.end) {
      const e = o.length - 1;
      o[e][o[e].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"),
      n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const a = new RegExp(r,n.sensitive ? "" : "i");
    return {
      re: a,
      score: o,
      keys: i,
      parse: function(e) {
        const t = e.match(a)
          , n = {};
        if (!t)
          return null;
        for (let o = 1; o < t.length; o++) {
          const e = t[o] || ""
            , r = i[o - 1];
          n[r.name] = e && r.repeatable ? e.split("/") : e
        }
        return n
      },
      stringify: function(t) {
        let n = ""
          , o = !1;
        for (const r of e) {
          o && n.endsWith("/") || (n += "/"),
            o = !1;
          for (const e of r)
            if (0 === e.type)
              n += e.value;
            else if (1 === e.type) {
              const {value: i, repeatable: a, optional: s} = e
                , l = i in t ? t[i] : "";
              if (Ma(l) && !a)
                throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);
              const c = Ma(l) ? l.join("/") : l;
              if (!c) {
                if (!s)
                  throw new Error(`Missing required param "${i}"`);
                r.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : o = !0)
              }
              n += c
            }
        }
        return n || "/"
      }
    }
  }(function(e) {
    if (!e)
      return [[]];
    if ("/" === e)
      return [[vs]];
    if (!e.startsWith("/"))
      throw new Error(`Invalid path "${e}"`);
    function t(e) {
      throw new Error(`ERR (${n})/"${c}": ${e}`)
    }
    let n = 0
      , o = n;
    const r = [];
    let i;
    function a() {
      i && r.push(i),
        i = []
    }
    let s, l = 0, c = "", u = "";
    function d() {
      c && (0 === n ? i.push({
        type: 0,
        value: c
      }) : 1 === n || 2 === n || 3 === n ? (i.length > 1 && ("*" === s || "+" === s) && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
          type: 1,
          value: c,
          regexp: u,
          repeatable: "*" === s || "+" === s,
          optional: "*" === s || "?" === s
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function f() {
      c += s
    }
    for (; l < e.length; )
      if (s = e[l++],
      "\\" !== s || 2 === n)
        switch (n) {
          case 0:
            "/" === s ? (c && d(),
              a()) : ":" === s ? (d(),
              n = 1) : f();
            break;
          case 4:
            f(),
              n = o;
            break;
          case 1:
            "(" === s ? n = 2 : ys.test(s) ? f() : (d(),
              n = 0,
            "*" !== s && "?" !== s && "+" !== s && l--);
            break;
          case 2:
            ")" === s ? "\\" == u[u.length - 1] ? u = u.slice(0, -1) + s : n = 3 : u += s;
            break;
          case 3:
            d(),
              n = 0,
            "*" !== s && "?" !== s && "+" !== s && l--,
              u = "";
            break;
          default:
            t("Unknown state")
        }
      else
        o = n,
          n = 4;
    return 2 === n && t(`Unfinished custom RegExp for param "${c}"`),
      d(),
      a(),
      r
  }(e.path), n)
    , r = $a(o, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function _s(e, t) {
  const n = []
    , o = new Map;
  function r(e, n, o) {
    const s = !o
      , l = function(e) {
      return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Ss(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
          default: e.component
        }
      }
    }(e);
    l.aliasOf = o && o.record;
    const c = Cs(t, e)
      , u = [l];
    if ("alias"in e) {
      const t = "string" == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t)
        u.push($a({}, l, {
          components: o ? o.record.components : l.components,
          path: e,
          aliasOf: o ? o.record : l
        }))
    }
    let d, f;
    for (const t of u) {
      const {path: u} = t;
      if (n && "/" !== u[0]) {
        const e = n.record.path
          , o = "/" === e[e.length - 1] ? "" : "/";
        t.path = n.record.path + (u && o + u)
      }
      if (d = bs(t, n, c),
        o ? o.alias.push(d) : (f = f || d,
        f !== d && f.alias.push(d),
        s && e.name && !Ts(d) && i(e.name)),
        l.children) {
        const e = l.children;
        for (let t = 0; t < e.length; t++)
          r(e[t], d, o && o.children[t])
      }
      o = o || d,
      (d.record.components && Object.keys(d.record.components).length || d.record.name || d.record.redirect) && a(d)
    }
    return f ? ()=>{
        i(f)
      }
      : Na
  }
  function i(e) {
    if (is(e)) {
      const t = o.get(e);
      t && (o.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(i),
        t.alias.forEach(i))
    } else {
      const t = n.indexOf(e);
      t > -1 && (n.splice(t, 1),
      e.record.name && o.delete(e.record.name),
        e.children.forEach(i),
        e.alias.forEach(i))
    }
  }
  function a(e) {
    let t = 0;
    for (; t < n.length && ms(e, n[t]) >= 0 && (e.record.path !== n[t].record.path || !Es(e, n[t])); )
      t++;
    n.splice(t, 0, e),
    e.record.name && !Ts(e) && o.set(e.record.name, e)
  }
  return t = Cs({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t),
    e.forEach((e=>r(e))),
    {
      addRoute: r,
      resolve: function(e, t) {
        let r, i, a, s = {};
        if ("name"in e && e.name) {
          if (r = o.get(e.name),
            !r)
            throw us(1, {
              location: e
            });
          a = r.record.name,
            s = $a(ws(t.params, r.keys.filter((e=>!e.optional)).map((e=>e.name))), e.params && ws(e.params, r.keys.map((e=>e.name)))),
            i = r.stringify(s)
        } else if ("path"in e)
          i = e.path,
            r = n.find((e=>e.re.test(i))),
          r && (s = r.parse(i),
            a = r.record.name);
        else {
          if (r = t.name ? o.get(t.name) : n.find((e=>e.re.test(t.path))),
            !r)
            throw us(1, {
              location: e,
              currentLocation: t
            });
          a = r.record.name,
            s = $a({}, t.params, e.params),
            i = r.stringify(s)
        }
        const l = [];
        let c = r;
        for (; c; )
          l.unshift(c.record),
            c = c.parent;
        return {
          name: a,
          path: i,
          params: s,
          matched: l,
          meta: xs(l)
        }
      },
      removeRoute: i,
      getRoutes: function() {
        return n
      },
      getRecordMatcher: function(e) {
        return o.get(e)
      }
    }
}
function ws(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n
}
function Ss(e) {
  const t = {}
    , n = e.props || !1;
  if ("component"in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = "boolean" == typeof n ? n : n[o];
  return t
}
function Ts(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent
  }
  return !1
}
function xs(e) {
  return e.reduce(((e,t)=>$a(e, t.meta)), {})
}
function Cs(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n
}
function Es(e, t) {
  return t.children.some((t=>t === e || Es(e, t)))
}
const ks = /#/g
  , Ps = /&/g
  , Ls = /\//g
  , Os = /=/g
  , As = /\?/g
  , Bs = /\+/g
  , $s = /%5B/g
  , Is = /%5D/g
  , Ns = /%5E/g
  , Ms = /%60/g
  , Rs = /%7B/g
  , Ds = /%7C/g
  , js = /%7D/g
  , Fs = /%20/g;
function Vs(e) {
  return encodeURI("" + e).replace(Ds, "|").replace($s, "[").replace(Is, "]")
}
function qs(e) {
  return Vs(e).replace(Bs, "%2B").replace(Fs, "+").replace(ks, "%23").replace(Ps, "%26").replace(Ms, "`").replace(Rs, "{").replace(js, "}").replace(Ns, "^")
}
function Hs(e) {
  return null == e ? "" : function(e) {
    return Vs(e).replace(ks, "%23").replace(As, "%3F")
  }(e).replace(Ls, "%2F")
}
function Ws(e) {
  try {
    return decodeURIComponent("" + e)
  } catch (t) {}
  return "" + e
}
function zs(e) {
  const t = {};
  if ("" === e || "?" === e)
    return t;
  const n = ("?" === e[0] ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const e = n[o].replace(Bs, " ")
      , r = e.indexOf("=")
      , i = Ws(r < 0 ? e : e.slice(0, r))
      , a = r < 0 ? null : Ws(e.slice(r + 1));
    if (i in t) {
      let e = t[i];
      Ma(e) || (e = t[i] = [e]),
        e.push(a)
    } else
      t[i] = a
  }
  return t
}
function Us(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = qs(n).replace(Os, "%3D"),
    null == o) {
      void 0 !== o && (t += (t.length ? "&" : "") + n);
      continue
    }
    (Ma(o) ? o.map((e=>e && qs(e))) : [o && qs(o)]).forEach((e=>{
        void 0 !== e && (t += (t.length ? "&" : "") + n,
        null != e && (t += "=" + e))
      }
    ))
  }
  return t
}
function Xs(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    void 0 !== o && (t[n] = Ma(o) ? o.map((e=>null == e ? null : "" + e)) : null == o ? o : "" + o)
  }
  return t
}
const Ys = Symbol("")
  , Gs = Symbol("")
  , Js = Symbol("")
  , Ks = Symbol("")
  , Zs = Symbol("");
function Qs() {
  let e = [];
  return {
    add: function(t) {
      return e.push(t),
        ()=>{
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1)
        }
    },
    list: ()=>e,
    reset: function() {
      e = []
    }
  }
}
function el(e, t, n, o, r) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return ()=>new Promise(((a,s)=>{
      const l = e=>{
        var l;
        !1 === e ? s(us(4, {
          from: n,
          to: t
        })) : e instanceof Error ? s(e) : "string" == typeof (l = e) || l && "object" == typeof l ? s(us(2, {
          from: t,
          to: e
        })) : (i && o.enterCallbacks[r] === i && "function" == typeof e && i.push(e),
          a())
      }
        , c = e.call(o && o.instances[r], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)),
        u.catch((e=>s(e)))
    }
  ))
}
function tl(e, t, n, o) {
  const r = [];
  for (const a of e)
    for (const e in a.components) {
      let s = a.components[e];
      if ("beforeRouteEnter" === t || a.instances[e])
        if ("object" == typeof (i = s) || "displayName"in i || "props"in i || "__vccOpts"in i) {
          const i = (s.__vccOpts || s)[t];
          i && r.push(el(i, n, o, a, e))
        } else {
          let i = s();
          r.push((()=>i.then((r=>{
              if (!r)
                return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));
              const i = (s = r).__esModule || "Module" === s[Symbol.toStringTag] ? r.default : r;
              var s;
              a.components[e] = i;
              const l = (i.__vccOpts || i)[t];
              return l && el(l, n, o, a, e)()
            }
          ))))
        }
    }
  var i;
  return r
}
function nl(e) {
  const t = qn(Js)
    , n = qn(Ks)
    , o = pi((()=>t.resolve(nn(e.to))))
    , r = pi((()=>{
      const {matched: e} = o.value
        , {length: t} = e
        , r = e[t - 1]
        , i = n.matched;
      if (!r || !i.length)
        return -1;
      const a = i.findIndex(Fa.bind(null, r));
      if (a > -1)
        return a;
      const s = rl(e[t - 2]);
      return t > 1 && rl(r) === s && i[i.length - 1].path !== s ? i.findIndex(Fa.bind(null, e[t - 2])) : a
    }
  ))
    , i = pi((()=>r.value > -1 && function(e, t) {
    for (const n in t) {
      const o = t[n]
        , r = e[n];
      if ("string" == typeof o) {
        if (o !== r)
          return !1
      } else if (!Ma(r) || r.length !== o.length || o.some(((e,t)=>e !== r[t])))
        return !1
    }
    return !0
  }(n.params, o.value.params)))
    , a = pi((()=>r.value > -1 && r.value === n.matched.length - 1 && Va(n.params, o.value.params)));
  return {
    route: o,
    href: pi((()=>o.value.href)),
    isActive: i,
    isExactActive: a,
    navigate: function(n={}) {
      return function(e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          return;
        if (e.defaultPrevented)
          return;
        if (void 0 !== e.button && 0 !== e.button)
          return;
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t))
            return
        }
        e.preventDefault && e.preventDefault();
        return !0
      }(n) ? t[nn(e.replace) ? "replace" : "push"](nn(e.to)).catch(Na) : Promise.resolve()
    }
  }
}
const ol = io({
  name: "RouterLink",
  compatConfig: {
    MODE: 3
  },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: nl,
  setup(e, {slots: t}) {
    const n = Dt(nl(e))
      , {options: o} = qn(Js)
      , r = pi((()=>({
      [il(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      [il(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    })));
    return ()=>{
      const o = t.default && t.default(n);
      return e.custom ? o : hi("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, o)
    }
  }
});
function rl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const il = (e,t,n)=>null != e ? e : null != t ? t : n;
function al(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n
}
const sl = io({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: {
    MODE: 3
  },
  setup(e, {attrs: t, slots: n}) {
    const o = qn(Zs)
      , r = pi((()=>e.route || o.value))
      , i = qn(Gs, 0)
      , a = pi((()=>{
        let e = nn(i);
        const {matched: t} = r.value;
        let n;
        for (; (n = t[e]) && !n.components; )
          e++;
        return e
      }
    ))
      , s = pi((()=>r.value.matched[a.value]));
    Vn(Gs, pi((()=>a.value + 1))),
      Vn(Ys, s),
      Vn(Zs, r);
    const l = Zt();
    return zn((()=>[l.value, s.value, e.name]), (([e,t,n],[o,r,i])=>{
        t && (t.instances[n] = e,
        r && r !== t && e && e === o && (t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
        t.updateGuards.size || (t.updateGuards = r.updateGuards))),
        !e || !t || r && Fa(t, r) && o || (t.enterCallbacks[n] || []).forEach((t=>t(e)))
      }
    ), {
      flush: "post"
    }),
      ()=>{
        const o = r.value
          , i = e.name
          , a = s.value
          , c = a && a.components[i];
        if (!c)
          return al(n.default, {
            Component: c,
            route: o
          });
        const u = a.props[i]
          , d = u ? !0 === u ? o.params : "function" == typeof u ? u(o) : u : null
          , f = hi(c, $a({}, d, t, {
          onVnodeUnmounted: e=>{
            e.component.isUnmounted && (a.instances[i] = null)
          }
          ,
          ref: l
        }));
        return al(n.default, {
          Component: f,
          route: o
        }) || f
      }
  }
});
function ll(e) {
  const t = _s(e.routes, e)
    , n = e.parseQuery || zs
    , o = e.stringifyQuery || Us
    , r = e.history
    , i = Qs()
    , a = Qs()
    , s = Qs()
    , l = Qt(as);
  let c = as;
  Ba && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
  const u = Ia.bind(null, (e=>"" + e))
    , d = Ia.bind(null, Hs)
    , f = Ia.bind(null, Ws);
  function p(e, i) {
    if (i = $a({}, i || l.value),
    "string" == typeof e) {
      const o = Da(n, e, i.path)
        , a = t.resolve({
        path: o.path
      }, i)
        , s = r.createHref(o.fullPath);
      return $a(o, a, {
        params: f(a.params),
        hash: Ws(o.hash),
        redirectedFrom: void 0,
        href: s
      })
    }
    let a;
    if ("path"in e)
      a = $a({}, e, {
        path: Da(n, e.path, i.path).path
      });
    else {
      const t = $a({}, e.params);
      for (const e in t)
        null == t[e] && delete t[e];
      a = $a({}, e, {
        params: d(e.params)
      }),
        i.params = d(i.params)
    }
    const s = t.resolve(a, i)
      , c = e.hash || "";
    s.params = u(f(s.params));
    const p = function(e, t) {
      const n = t.query ? e(t.query) : "";
      return t.path + (n && "?") + n + (t.hash || "")
    }(o, $a({}, e, {
      hash: (h = c,
        Vs(h).replace(Rs, "{").replace(js, "}").replace(Ns, "^")),
      path: s.path
    }));
    var h;
    const m = r.createHref(p);
    return $a({
      fullPath: p,
      hash: c,
      query: o === Us ? Xs(e.query) : e.query || {}
    }, s, {
      redirectedFrom: void 0,
      href: m
    })
  }
  function h(e) {
    return "string" == typeof e ? Da(n, e, l.value.path) : $a({}, e)
  }
  function m(e, t) {
    if (c !== e)
      return us(8, {
        from: t,
        to: e
      })
  }
  function g(e) {
    return y(e)
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1];
    if (t && t.redirect) {
      const {redirect: n} = t;
      let o = "function" == typeof n ? n(e) : n;
      return "string" == typeof o && (o = o.includes("?") || o.includes("#") ? o = h(o) : {
        path: o
      },
        o.params = {}),
        $a({
          query: e.query,
          hash: e.hash,
          params: "path"in o ? {} : e.params
        }, o)
    }
  }
  function y(e, t) {
    const n = c = p(e)
      , r = l.value
      , i = e.state
      , a = e.force
      , s = !0 === e.replace
      , u = v(n);
    if (u)
      return y($a(h(u), {
        state: "object" == typeof u ? $a({}, i, u.state) : i,
        force: a,
        replace: s
      }), t || n);
    const d = n;
    let f;
    return d.redirectedFrom = t,
    !a && function(e, t, n) {
      const o = t.matched.length - 1
        , r = n.matched.length - 1;
      return o > -1 && o === r && Fa(t.matched[o], n.matched[r]) && Va(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
    }(o, r, n) && (f = us(16, {
      to: d,
      from: r
    }),
      O(r, r, !0, !1)),
      (f ? Promise.resolve(f) : _(d, r)).catch((e=>ds(e) ? ds(e, 2) ? e : L(e) : P(e, d, r))).then((e=>{
          if (e) {
            if (ds(e, 2))
              return y($a({
                replace: s
              }, h(e.to), {
                state: "object" == typeof e.to ? $a({}, i, e.to.state) : i,
                force: a
              }), t || d)
          } else
            e = S(d, r, !0, s, i);
          return w(d, r, e),
            e
        }
      ))
  }
  function b(e, t) {
    const n = m(e, t);
    return n ? Promise.reject(n) : Promise.resolve()
  }
  function _(e, t) {
    let n;
    const [o,r,s] = function(e, t) {
      const n = []
        , o = []
        , r = []
        , i = Math.max(t.matched.length, e.matched.length);
      for (let a = 0; a < i; a++) {
        const i = t.matched[a];
        i && (e.matched.find((e=>Fa(e, i))) ? o.push(i) : n.push(i));
        const s = e.matched[a];
        s && (t.matched.find((e=>Fa(e, s))) || r.push(s))
      }
      return [n, o, r]
    }(e, t);
    n = tl(o.reverse(), "beforeRouteLeave", e, t);
    for (const i of o)
      i.leaveGuards.forEach((o=>{
          n.push(el(o, e, t))
        }
      ));
    const l = b.bind(null, e, t);
    return n.push(l),
      cl(n).then((()=>{
          n = [];
          for (const o of i.list())
            n.push(el(o, e, t));
          return n.push(l),
            cl(n)
        }
      )).then((()=>{
          n = tl(r, "beforeRouteUpdate", e, t);
          for (const o of r)
            o.updateGuards.forEach((o=>{
                n.push(el(o, e, t))
              }
            ));
          return n.push(l),
            cl(n)
        }
      )).then((()=>{
          n = [];
          for (const o of e.matched)
            if (o.beforeEnter && !t.matched.includes(o))
              if (Ma(o.beforeEnter))
                for (const r of o.beforeEnter)
                  n.push(el(r, e, t));
              else
                n.push(el(o.beforeEnter, e, t));
          return n.push(l),
            cl(n)
        }
      )).then((()=>(e.matched.forEach((e=>e.enterCallbacks = {})),
        n = tl(s, "beforeRouteEnter", e, t),
        n.push(l),
        cl(n)))).then((()=>{
          n = [];
          for (const o of a.list())
            n.push(el(o, e, t));
          return n.push(l),
            cl(n)
        }
      )).catch((e=>ds(e, 8) ? e : Promise.reject(e)))
  }
  function w(e, t, n) {
    for (const o of s.list())
      o(e, t, n)
  }
  function S(e, t, n, o, i) {
    const a = m(e, t);
    if (a)
      return a;
    const s = t === as
      , c = Ba ? history.state : {};
    n && (o || s ? r.replace(e.fullPath, $a({
      scroll: s && c && c.scroll
    }, i)) : r.push(e.fullPath, i)),
      l.value = e,
      O(e, t, n, s),
      L()
  }
  let T;
  function x() {
    T || (T = r.listen(((e,t,n)=>{
        if (!I.listening)
          return;
        const o = p(e)
          , i = v(o);
        if (i)
          return void y($a(i, {
            replace: !0
          }), o).catch(Na);
        c = o;
        const a = l.value;
        var s, u;
        Ba && (s = Qa(a.fullPath, n.delta),
          u = Ka(),
          es.set(s, u)),
          _(o, a).catch((e=>ds(e, 12) ? e : ds(e, 2) ? (y(e.to, o).then((e=>{
              ds(e, 20) && !n.delta && n.type === Wa.pop && r.go(-1, !1)
            }
          )).catch(Na),
            Promise.reject()) : (n.delta && r.go(-n.delta, !1),
            P(e, o, a)))).then((e=>{
              (e = e || S(o, a, !1)) && (n.delta && !ds(e, 8) ? r.go(-n.delta, !1) : n.type === Wa.pop && ds(e, 20) && r.go(-1, !1)),
                w(o, a, e)
            }
          )).catch(Na)
      }
    )))
  }
  let C, E = Qs(), k = Qs();
  function P(e, t, n) {
    L(e);
    const o = k.list();
    return o.length ? o.forEach((o=>o(e, t, n))) : console.error(e),
      Promise.reject(e)
  }
  function L(e) {
    return C || (C = !e,
      x(),
      E.list().forEach((([t,n])=>e ? n(e) : t())),
      E.reset()),
      e
  }
  function O(t, n, o, r) {
    const {scrollBehavior: i} = e;
    if (!Ba || !i)
      return Promise.resolve();
    const a = !o && function(e) {
      const t = es.get(e);
      return es.delete(e),
        t
    }(Qa(t.fullPath, 0)) || (r || !o) && history.state && history.state.scroll || null;
    return _n().then((()=>i(t, n, a))).then((e=>e && Za(e))).catch((e=>P(e, t, n)))
  }
  const A = e=>r.go(e);
  let B;
  const $ = new Set
    , I = {
    currentRoute: l,
    listening: !0,
    addRoute: function(e, n) {
      let o, r;
      return is(e) ? (o = t.getRecordMatcher(e),
        r = n) : r = e,
        t.addRoute(r, o)
    },
    removeRoute: function(e) {
      const n = t.getRecordMatcher(e);
      n && t.removeRoute(n)
    },
    hasRoute: function(e) {
      return !!t.getRecordMatcher(e)
    },
    getRoutes: function() {
      return t.getRoutes().map((e=>e.record))
    },
    resolve: p,
    options: e,
    push: g,
    replace: function(e) {
      return g($a(h(e), {
        replace: !0
      }))
    },
    go: A,
    back: ()=>A(-1),
    forward: ()=>A(1),
    beforeEach: i.add,
    beforeResolve: a.add,
    afterEach: s.add,
    onError: k.add,
    isReady: function() {
      return C && l.value !== as ? Promise.resolve() : new Promise(((e,t)=>{
          E.add([e, t])
        }
      ))
    },
    install(e) {
      e.component("RouterLink", ol),
        e.component("RouterView", sl),
        e.config.globalProperties.$router = this,
        Object.defineProperty(e.config.globalProperties, "$route", {
          enumerable: !0,
          get: ()=>nn(l)
        }),
      Ba && !B && l.value === as && (B = !0,
        g(r.location).catch((e=>{}
        )));
      const t = {};
      for (const o in as)
        t[o] = pi((()=>l.value[o]));
      e.provide(Js, this),
        e.provide(Ks, Dt(t)),
        e.provide(Zs, l);
      const n = e.unmount;
      $.add(e),
        e.unmount = function() {
          $.delete(e),
          $.size < 1 && (c = as,
          T && T(),
            T = null,
            l.value = as,
            B = !1,
            C = !1),
            n()
        }
    }
  };
  return I
}
function cl(e) {
  return e.reduce(((e,t)=>e.then((()=>t()))), Promise.resolve())
}
function ul() {
  return qn(Ks)
}
const dl = le((()=>"undefined" != typeof __uniConfig && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length));
let fl;
function pl() {
  if (!fl) {
    let e;
    if (e = navigator.cookieEnabled && window.localStorage && localStorage.UNI_LOCALE || __uniConfig.locale || navigator.language,
      fl = Aa(e),
      dl()) {
      const t = Object.keys(__uniConfig.locales || {});
      t.length && t.forEach((e=>fl.add(e, __uniConfig.locales[e]))),
        fl.setLocale(e)
    }
  }
  return fl
}
function hl(e, t, n) {
  return t.reduce(((t,o,r)=>(t[e + o] = n[r],
    t)), {})
}
const ml = le((()=>{
    const e = "uni.async."
      , t = ["error"];
    pl().add("en", hl(e, t, ["The connection timed out, click the screen to try again."]), !1),
      pl().add("es", hl(e, t, ["Se agotó el tiempo de conexión, haga clic en la pantalla para volver a intentarlo."]), !1),
      pl().add("fr", hl(e, t, ["La connexion a expiré, cliquez sur l'écran pour réessayer."]), !1),
      pl().add("zh-Hans", hl(e, t, ["连接服务器超时，点击屏幕重试"]), !1),
      pl().add("zh-Hant", hl(e, t, ["連接服務器超時，點擊屏幕重試"]), !1)
  }
))
  , gl = le((()=>{
    const e = "uni.showToast."
      , t = ["unpaired"];
    pl().add("en", hl(e, t, ["Please note showToast must be paired with hideToast"]), !1),
      pl().add("es", hl(e, t, ["Tenga en cuenta que showToast debe estar emparejado con hideToast"]), !1),
      pl().add("fr", hl(e, t, ["Veuillez noter que showToast doit être associé à hideToast"]), !1),
      pl().add("zh-Hans", hl(e, t, ["请注意 showToast 与 hideToast 必须配对使用"]), !1),
      pl().add("zh-Hant", hl(e, t, ["請注意 showToast 與 hideToast 必須配對使用"]), !1)
  }
))
  , vl = le((()=>{
    const e = "uni.showLoading."
      , t = ["unpaired"];
    pl().add("en", hl(e, t, ["Please note showLoading must be paired with hideLoading"]), !1),
      pl().add("es", hl(e, t, ["Tenga en cuenta que showLoading debe estar emparejado con hideLoading"]), !1),
      pl().add("fr", hl(e, t, ["Veuillez noter que showLoading doit être associé à hideLoading"]), !1),
      pl().add("zh-Hans", hl(e, t, ["请注意 showLoading 与 hideLoading 必须配对使用"]), !1),
      pl().add("zh-Hant", hl(e, t, ["請注意 showLoading 與 hideLoading 必須配對使用"]), !1)
  }
))
  , yl = le((()=>{
    const e = "uni.video."
      , t = ["danmu", "volume"];
    pl().add("en", hl(e, t, ["Danmu", "Volume"]), !1),
      pl().add("es", hl(e, t, ["Danmu", "Volumen"]), !1),
      pl().add("fr", hl(e, t, ["Danmu", "Le Volume"]), !1),
      pl().add("zh-Hans", hl(e, t, ["弹幕", "音量"]), !1),
      pl().add("zh-Hant", hl(e, t, ["彈幕", "音量"]), !1)
  }
));
function bl(e) {
  const t = new ke;
  return {
    on: (e,n)=>t.on(e, n),
    once: (e,n)=>t.once(e, n),
    off: (e,n)=>t.off(e, n),
    emit: (e,...n)=>t.emit(e, ...n),
    subscribe(n, o, r=!1) {
      t[r ? "once" : "on"](`${e}.${n}`, o)
    },
    unsubscribe(n, o) {
      t.off(`${e}.${n}`, o)
    },
    subscribeHandler(n, o, r) {
      t.emit(`${e}.${n}`, o, r)
    }
  }
}
let _l = 1;
const wl = Object.create(null);
function Sl(e, t) {
  return e + "." + t
}
function Tl(e, t, n) {
  t = Sl(e, t),
  wl[t] || (wl[t] = n)
}
function xl({id: e, name: t, args: n}, o) {
  t = Sl(o, t);
  const r = t=>{
    e && sh.publishHandler("invokeViewApi." + e, t)
  }
    , i = wl[t];
  i ? i(n, r) : r({})
}
const Cl = w(bl("service"), {
  invokeServiceMethod: (e,t,n)=>{
    const {subscribe: o, publishHandler: r} = sh
      , i = n ? _l++ : 0;
    n && o("invokeServiceApi." + i, n, !0),
      r("invokeServiceApi", {
        id: i,
        name: e,
        args: t
      })
  }
})
  , El = pe(!0);
let kl;
function Pl() {
  kl && (clearTimeout(kl),
    kl = null)
}
let Ll = 0
  , Ol = 0;
function Al(e) {
  if (Pl(),
  1 !== e.touches.length)
    return;
  const {pageX: t, pageY: n} = e.touches[0];
  Ll = t,
    Ol = n,
    kl = setTimeout((function() {
        const t = new CustomEvent("longpress",{
          bubbles: !0,
          cancelable: !0,
          target: e.target,
          currentTarget: e.currentTarget
        });
        t.touches = e.touches,
          t.changedTouches = e.changedTouches,
          e.target.dispatchEvent(t)
      }
    ), 350)
}
function Bl(e) {
  if (!kl)
    return;
  if (1 !== e.touches.length)
    return Pl();
  const {pageX: t, pageY: n} = e.touches[0];
  return Math.abs(t - Ll) > 10 || Math.abs(n - Ol) > 10 ? Pl() : void 0
}
function $l(e, t) {
  const n = Number(e);
  return isNaN(n) ? t : n
}
function Il() {
  const e = __uniConfig.globalStyle || {}
    , t = $l(e.rpxCalcMaxDeviceWidth, 960)
    , n = $l(e.rpxCalcBaseDeviceWidth, 375);
  function o() {
    let e = function() {
      const e = /^Apple/.test(navigator.vendor) && "number" == typeof window.orientation
        , t = e && 90 === Math.abs(window.orientation);
      var n = e ? Math[t ? "max" : "min"](screen.width, screen.height) : screen.width;
      return Math.min(window.innerWidth, document.documentElement.clientWidth, n) || n
    }();
    e = e <= t ? e : n,
      document.documentElement.style.fontSize = e / 23.4375 + "px"
  }
  o(),
    document.addEventListener("DOMContentLoaded", o),
    window.addEventListener("load", o),
    window.addEventListener("resize", o)
}
function Nl() {
  Il(),
    ue(),
    window.addEventListener("touchstart", Al, El),
    window.addEventListener("touchmove", Bl, El),
    window.addEventListener("touchend", Pl, El),
    window.addEventListener("touchcancel", Pl, El)
}
function Ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Rl, Dl, jl = ["top", "left", "right", "bottom"], Fl = {};
function Vl() {
  return Dl = "CSS"in window && "function" == typeof CSS.supports ? CSS.supports("top: env(safe-area-inset-top)") ? "env" : CSS.supports("top: constant(safe-area-inset-top)") ? "constant" : "" : ""
}
function ql() {
  if (Dl = "string" == typeof Dl ? Dl : Vl()) {
    var e = []
      , t = !1;
    try {
      var n = Object.defineProperty({}, "passive", {
        get: function() {
          t = {
            passive: !0
          }
        }
      });
      window.addEventListener("test", null, n)
    } catch (s) {}
    var o = document.createElement("div");
    r(o, {
      position: "absolute",
      left: "0",
      top: "0",
      width: "0",
      height: "0",
      zIndex: "-1",
      overflow: "hidden",
      visibility: "hidden"
    }),
      jl.forEach((function(e) {
          a(o, e)
        }
      )),
      document.body.appendChild(o),
      i(),
      Rl = !0
  } else
    jl.forEach((function(e) {
        Fl[e] = 0
      }
    ));
  function r(e, t) {
    var n = e.style;
    Object.keys(t).forEach((function(e) {
        var o = t[e];
        n[e] = o
      }
    ))
  }
  function i(t) {
    t ? e.push(t) : e.forEach((function(e) {
        e()
      }
    ))
  }
  function a(e, n) {
    var o = document.createElement("div")
      , a = document.createElement("div")
      , s = document.createElement("div")
      , l = document.createElement("div")
      , c = {
      position: "absolute",
      width: "100px",
      height: "200px",
      boxSizing: "border-box",
      overflow: "hidden",
      paddingBottom: Dl + "(safe-area-inset-" + n + ")"
    };
    r(o, c),
      r(a, c),
      r(s, {
        transition: "0s",
        animation: "none",
        width: "400px",
        height: "400px"
      }),
      r(l, {
        transition: "0s",
        animation: "none",
        width: "250%",
        height: "250%"
      }),
      o.appendChild(s),
      a.appendChild(l),
      e.appendChild(o),
      e.appendChild(a),
      i((function() {
          o.scrollTop = a.scrollTop = 1e4;
          var e = o.scrollTop
            , r = a.scrollTop;
          function i() {
            this.scrollTop !== (this === o ? e : r) && (o.scrollTop = a.scrollTop = 1e4,
              e = o.scrollTop,
              r = a.scrollTop,
              function(e) {
                Wl.length || setTimeout((function() {
                    var e = {};
                    Wl.forEach((function(t) {
                        e[t] = Fl[t]
                      }
                    )),
                      Wl.length = 0,
                      zl.forEach((function(t) {
                          t(e)
                        }
                      ))
                  }
                ), 0);
                Wl.push(e)
              }(n))
          }
          o.addEventListener("scroll", i, t),
            a.addEventListener("scroll", i, t)
        }
      ));
    var u = getComputedStyle(o);
    Object.defineProperty(Fl, n, {
      configurable: !0,
      get: function() {
        return parseFloat(u.paddingBottom)
      }
    })
  }
}
function Hl(e) {
  return Rl || ql(),
    Fl[e]
}
var Wl = [];
var zl = [];
const Ul = Ml({
  get support() {
    return 0 != ("string" == typeof Dl ? Dl : Vl()).length
  },
  get top() {
    return Hl("top")
  },
  get left() {
    return Hl("left")
  },
  get right() {
    return Hl("right")
  },
  get bottom() {
    return Hl("bottom")
  },
  onChange: function(e) {
    Vl() && (Rl || ql(),
    "function" == typeof e && zl.push(e))
  },
  offChange: function(e) {
    var t = zl.indexOf(e);
    t >= 0 && zl.splice(t, 1)
  }
})
  , Xl = ma((()=>{}
), ["prevent"]);
function Yl(e, t) {
  return parseInt((e.getPropertyValue(t).match(/\d+/) || ["0"])[0])
}
function Gl() {
  const e = Yl(document.documentElement.style, "--window-top");
  return e ? e + Ul.top : 0
}
function Jl(e) {
  const t = document.documentElement.style;
  Object.keys(e).forEach((n=>{
      t.setProperty(n, e[n])
    }
  ))
}
function Kl(e) {
  return Symbol(e)
}
function Zl(e) {
  return -1 !== (e += "").indexOf("rpx") || -1 !== e.indexOf("upx")
}
function Ql(e, t=!1) {
  if (t)
    return function(e) {
      if (!Zl(e))
        return e;
      return e.replace(/(\d+(\.\d+)?)[ru]px/g, ((e,t)=>Gu(parseFloat(t)) + "px"))
    }(e);
  if (O(e)) {
    const t = parseInt(e) || 0;
    return Zl(e) ? Gu(t) : t
  }
  return e
}
const ec = "M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
  , tc = "M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z";
function nc(e, t="#000", n=27) {
  return Ur("svg", {
    width: n,
    height: n,
    viewBox: "0 0 32 32"
  }, [Ur("path", {
    d: e,
    fill: t
  }, null, 8, ["d", "fill"])], 8, ["width", "height"])
}
function oc() {
  {
    const {$pageInstance: e} = ri();
    return e && e.proxy.$page.id
  }
}
function rc() {
  const e = Df()
    , t = e.length;
  if (t)
    return e[t - 1]
}
function ic() {
  const e = rc();
  if (e)
    return e.$page.meta
}
function ac() {
  const e = ic();
  return e ? e.id : -1
}
function sc() {
  const e = rc();
  if (e)
    return e.$vm
}
const lc = ["navigationBar", "pullToRefresh"];
function cc(e, t) {
  const n = JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}))
    , o = w({
    id: t
  }, n, e);
  lc.forEach((t=>{
      o[t] = w({}, n[t], e[t])
    }
  ));
  const {navigationBar: r} = o;
  return r.titleText && r.titleImage && (r.titleText = ""),
    o
}
function uc(e, t, n) {
  if (O(e))
    n = t,
      t = e,
      e = sc();
  else if ("number" == typeof e) {
    const t = Df().find((t=>t.$page.id === e));
    e = t ? t.$vm : sc()
  }
  if (!e)
    return;
  const o = e.$[t];
  return o && ((e,t)=>{
      let n;
      for (let o = 0; o < e.length; o++)
        n = e[o](t);
      return n
    }
  )(o, n)
}
function dc(e) {
  e.preventDefault()
}
let fc, pc = 0;
function hc({onPageScroll: e, onReachBottom: t, onReachBottomDistance: n}) {
  let o = !1
    , r = !1
    , i = !0;
  const a = ()=>{
      function a() {
        if ((()=>{
            const {scrollHeight: e} = document.documentElement
              , t = window.innerHeight
              , o = window.scrollY
              , i = o > 0 && e > t && o + t + n >= e
              , a = Math.abs(e - pc) > n;
            return !i || r && !a ? (!i && r && (r = !1),
              !1) : (pc = e,
              r = !0,
              !0)
          }
        )())
          return t && t(),
            i = !1,
            setTimeout((function() {
                i = !0
              }
            ), 350),
            !0
      }
      e && e(window.pageYOffset),
      t && i && (a() || (fc = setTimeout(a, 300))),
        o = !1
    }
  ;
  return function() {
    clearTimeout(fc),
    o || requestAnimationFrame(a),
      o = !0
  }
}
function mc(e, t) {
  if (0 === t.indexOf("/"))
    return t;
  if (0 === t.indexOf("./"))
    return mc(e, t.slice(2));
  const n = t.split("/")
    , o = n.length;
  let r = 0;
  for (; r < o && ".." === n[r]; r++)
    ;
  n.splice(0, r),
    t = n.join("/");
  const i = e.length > 0 ? e.split("/") : [];
  return i.splice(i.length - r - 1, r + 1),
    se(i.concat(n).join("/"))
}
function gc(e, t=!1) {
  return t ? __uniRoutes.find((t=>t.path === e || t.alias === e)) : __uniRoutes.find((t=>t.path === e))
}
class vc {
  constructor(e) {
    this.$bindClass = !1,
      this.$bindStyle = !1,
      this.$vm = e,
      this.$el = function(e, t=!1) {
        const {vnode: n} = e;
        if (ie(n.el))
          return t ? n.el ? [n.el] : [] : n.el;
        const {subTree: o} = e;
        if (16 & o.shapeFlag) {
          const e = o.children.filter((e=>e.el && ie(e.el)));
          if (e.length > 0)
            return t ? e.map((e=>e.el)) : e[0].el
        }
        return t ? n.el ? [n.el] : [] : n.el
      }(e.$),
    this.$el.getAttribute && (this.$bindClass = !!this.$el.getAttribute("class"),
      this.$bindStyle = !!this.$el.getAttribute("style"))
  }
  selectComponent(e) {
    if (!this.$el || !e)
      return;
    const t = wc(this.$el.querySelector(e));
    return t ? yc(t, !1) : void 0
  }
  selectAllComponents(e) {
    if (!this.$el || !e)
      return [];
    const t = []
      , n = this.$el.querySelectorAll(e);
    for (let o = 0; o < n.length; o++) {
      const e = wc(n[o]);
      e && t.push(yc(e, !1))
    }
    return t
  }
  forceUpdate(e) {
    "class" === e ? this.$bindClass ? (this.$el.__wxsClassChanged = !0,
      this.$vm.$forceUpdate()) : this.updateWxsClass() : "style" === e && (this.$bindStyle ? (this.$el.__wxsStyleChanged = !0,
      this.$vm.$forceUpdate()) : this.updateWxsStyle())
  }
  updateWxsClass() {
    const {__wxsAddClass: e} = this.$el;
    e.length && (this.$el.className = e.join(" "))
  }
  updateWxsStyle() {
    const {__wxsStyle: e} = this.$el;
    e && this.$el.setAttribute("style", function(e) {
      let t = "";
      if (!e || O(e))
        return t;
      for (const n in e) {
        const o = e[n]
          , r = n.startsWith("--") ? n : H(n);
        (O(o) || "number" == typeof o) && (t += `${r}:${o};`)
      }
      return t
    }(e))
  }
  setStyle(e) {
    return this.$el && e ? (O(e) && (e = a(e)),
    M(e) && (this.$el.__wxsStyle = e,
      this.forceUpdate("style")),
      this) : this
  }
  addClass(e) {
    if (!this.$el || !e)
      return this;
    const t = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = []);
    return -1 === t.indexOf(e) && (t.push(e),
      this.forceUpdate("class")),
      this
  }
  removeClass(e) {
    if (!this.$el || !e)
      return this;
    const {__wxsAddClass: t} = this.$el;
    if (t) {
      const n = t.indexOf(e);
      n > -1 && t.splice(n, 1)
    }
    const n = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = []);
    return -1 === n.indexOf(e) && (n.push(e),
      this.forceUpdate("class")),
      this
  }
  hasClass(e) {
    return this.$el && this.$el.classList.contains(e)
  }
  getDataset() {
    return this.$el && this.$el.dataset
  }
  callMethod(e, t={}) {
    const n = this.$vm[e];
    L(n) ? n(JSON.parse(JSON.stringify(t))) : this.$vm.ownerId && sh.publishHandler("onWxsInvokeCallMethod", {
      nodeId: this.$el.__id,
      ownerId: this.$vm.ownerId,
      method: e,
      args: t
    })
  }
  requestAnimationFrame(e) {
    return window.requestAnimationFrame(e)
  }
  getState() {
    return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}))
  }
  triggerEvent(e, t={}) {
    return this.$vm.$emit(e, t),
      this
  }
  getComputedStyle(e) {
    if (this.$el) {
      const t = window.getComputedStyle(this.$el);
      return e && e.length ? e.reduce(((e,n)=>(e[n] = t[n],
        e)), {}) : t
    }
    return {}
  }
  setTimeout(e, t) {
    return window.setTimeout(e, t)
  }
  clearTimeout(e) {
    return window.clearTimeout(e)
  }
  getBoundingClientRect() {
    return this.$el.getBoundingClientRect()
  }
}
function yc(e, t=!0) {
  if (t && e && (e = re(e.$)),
  e && e.$el)
    return e.$el.__wxsComponentDescriptor || (e.$el.__wxsComponentDescriptor = new vc(e)),
      e.$el.__wxsComponentDescriptor
}
function bc(e, t) {
  return yc(e, t)
}
function _c(e, t, n, o=!0) {
  if (t) {
    e.__instance || (e.__instance = !0,
      Object.defineProperty(e, "instance", {
        get: ()=>bc(n.proxy, !1)
      }));
    const r = function(e, t, n=!0) {
      if (!t)
        return !1;
      if (n && e.length < 2)
        return !1;
      const o = re(t);
      if (!o)
        return !1;
      const r = o.$.type;
      return !(!r.$wxs && !r.$renderjs) && o
    }(t, n, o);
    if (r)
      return [e, bc(r, !1)]
  }
}
function wc(e) {
  if (e)
    return e.__vueParentComponent && e.__vueParentComponent.proxy
}
function Sc(e) {
  for (; e && 0 !== e.tagName.indexOf("UNI-"); )
    e = e.parentElement;
  return e
}
function Tc(e, t=!1) {
  const {type: n, timeStamp: o, target: r, currentTarget: i} = e
    , a = {
    type: n,
    timeStamp: o,
    target: he(t ? r : Sc(r)),
    detail: {},
    currentTarget: he(i)
  };
  return e._stopped && (a._stopped = !0),
  e.type.startsWith("touch") && (a.touches = e.touches,
    a.changedTouches = e.changedTouches),
    function(e, t) {
      w(e, {
        preventDefault: ()=>t.preventDefault(),
        stopPropagation: ()=>t.stopPropagation()
      })
    }(a, e),
    a
}
function xc(e, t) {
  return {
    force: 1,
    identifier: 0,
    clientX: e.clientX,
    clientY: e.clientY - t,
    pageX: e.pageX,
    pageY: e.pageY - t
  }
}
function Cc(e, t) {
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const {identifier: r, pageX: i, pageY: a, clientX: s, clientY: l, force: c} = e[o];
    n.push({
      identifier: r,
      pageX: i,
      pageY: a - t,
      clientX: s,
      clientY: l - t,
      force: c || 0
    })
  }
  return n
}
const Ec = Object.defineProperty({
  __proto__: null,
  $nne: function(e, t, n) {
    const {currentTarget: o} = e;
    if (!(e instanceof Event && o instanceof HTMLElement))
      return [e];
    const r = 0 !== o.tagName.indexOf("UNI-");
    if (r)
      return _c(e, t, n, !1) || [e];
    const i = Tc(e, r);
    if ("click" === e.type)
      !function(e, t) {
        const {x: n, y: o} = t
          , r = Gl();
        e.detail = {
          x: n,
          y: o - r
        },
          e.touches = e.changedTouches = [xc(t, r)]
      }(i, e);
    else if ((e=>0 === e.type.indexOf("mouse") || ["contextmenu"].includes(e.type))(e))
      !function(e, t) {
        const n = Gl();
        e.pageX = t.pageX,
          e.pageY = t.pageY - n,
          e.clientX = t.clientX,
          e.clientY = t.clientY - n,
          e.touches = e.changedTouches = [xc(t, n)]
      }(i, e);
    else if ((e=>"undefined" != typeof TouchEvent && e instanceof TouchEvent || 0 === e.type.indexOf("touch") || ["longpress"].indexOf(e.type) >= 0)(e)) {
      const t = Gl();
      i.touches = Cc(e.touches, t),
        i.changedTouches = Cc(e.changedTouches, t)
    } else if ((e=>!e.type.indexOf("key") && e instanceof KeyboardEvent)(e)) {
      ["key", "code"].forEach((t=>{
          Object.defineProperty(i, t, {
            get: ()=>e[t]
          })
        }
      ))
    }
    return _c(i, t, n) || [i]
  },
  createNativeEvent: Tc
}, Symbol.toStringTag, {
  value: "Module"
});
function kc(e) {
  !function(e) {
    const t = e.globalProperties;
    w(t, Ec),
      t.$gcd = bc
  }(e._context.config)
}
let Pc = 1;
function Lc(e) {
  return (e || ac()) + ".invokeViewApi"
}
const Oc = w(bl("view"), {
  invokeOnCallback: (e,t)=>lh.emit("api." + e, t),
  invokeViewMethod: (e,t,n,o)=>{
    const {subscribe: r, publishHandler: i} = lh
      , a = o ? Pc++ : 0;
    o && r("invokeViewApi." + a, o, !0),
      i(Lc(n), {
        id: a,
        name: e,
        args: t
      }, n)
  }
  ,
  invokeViewMethodKeepAlive: (e,t,n,o)=>{
    const {subscribe: r, unsubscribe: i, publishHandler: a} = lh
      , s = Pc++
      , l = "invokeViewApi." + s;
    return r(l, n),
      a(Lc(o), {
        id: s,
        name: e,
        args: t
      }, o),
      ()=>{
        i(l)
      }
  }
});
function Ac(e) {
  uc(rc(), "onResize", e),
    lh.invokeOnCallback("onWindowResize", e)
}
function Bc(e) {
  const t = rc();
  uc(lp(), "onShow", e),
    uc(t, "onShow")
}
function $c() {
  uc(lp(), "onHide"),
    uc(rc(), "onHide")
}
const Ic = ["onPageScroll", "onReachBottom"];
function Nc() {
  Ic.forEach((e=>lh.subscribe(e, function(e) {
    return (t,n)=>{
      uc(parseInt(n), e, t)
    }
  }(e))))
}
function Mc() {
  !function() {
    const {on: e} = lh;
    e("onResize", Ac),
      e("onAppEnterForeground", Bc),
      e("onAppEnterBackground", $c)
  }(),
    Nc()
}
function Rc() {
  if (this.$route) {
    const e = this.$route.meta;
    return e.eventChannel || (e.eventChannel = new _e(this.$page.id)),
      e.eventChannel
  }
}
function Dc(e) {
  e._context.config.globalProperties.getOpenerEventChannel = Rc
}
function jc() {
  return {
    path: "",
    query: {},
    scene: 1001,
    referrerInfo: {
      appId: "",
      extraData: {}
    }
  }
}
function Fc(e) {
  return /^-?\d+[ur]px$/i.test(e) ? e.replace(/(^-?\d+)[ur]px$/i, ((e,t)=>`${Gu(parseFloat(t))}px`)) : /^-?[\d\.]+$/.test(e) ? `${e}px` : e || ""
}
function Vc(e) {
  const t = e.animation;
  if (!t || !t.actions || !t.actions.length)
    return;
  let n = 0;
  const o = t.actions
    , r = t.actions.length;
  function i() {
    const t = o[n]
      , a = t.option.transition
      , s = function(e) {
      const t = ["matrix", "matrix3d", "scale", "scale3d", "rotate3d", "skew", "translate", "translate3d"]
        , n = ["scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "translateX", "translateY", "translateZ"]
        , o = ["opacity", "background-color"]
        , r = ["width", "height", "left", "right", "top", "bottom"]
        , i = e.animates
        , a = e.option
        , s = a.transition
        , l = {}
        , c = [];
      return i.forEach((e=>{
          let i = e.type
            , a = [...e.args];
          if (t.concat(n).includes(i))
            i.startsWith("rotate") || i.startsWith("skew") ? a = a.map((e=>parseFloat(e) + "deg")) : i.startsWith("translate") && (a = a.map(Fc)),
            n.indexOf(i) >= 0 && (a.length = 1),
              c.push(`${i}(${a.join(",")})`);
          else if (o.concat(r).includes(a[0])) {
            i = a[0];
            const e = a[1];
            l[i] = r.includes(i) ? Fc(e) : e
          }
        }
      )),
        l.transform = l.webkitTransform = c.join(" "),
        l.transition = l.webkitTransition = Object.keys(l).map((e=>`${function(e) {
          return e.replace(/[A-Z]/g, (e=>`-${e.toLowerCase()}`)).replace("webkit", "-webkit")
        }(e)} ${s.duration}ms ${s.timingFunction} ${s.delay}ms`)).join(","),
        l.transformOrigin = l.webkitTransformOrigin = a.transformOrigin,
        l
    }(t);
    Object.keys(s).forEach((t=>{
        e.$el.style[t] = s[t]
      }
    )),
      n += 1,
    n < r && setTimeout(i, a.duration + a.delay)
  }
  setTimeout((()=>{
      i()
    }
  ), 0)
}
const qc = {
  props: ["animation"],
  watch: {
    animation: {
      deep: !0,
      handler() {
        Vc(this)
      }
    }
  },
  mounted() {
    Vc(this)
  }
}
  , Hc = e=>{
  e.__reserved = !0;
  const {props: t, mixins: n} = e;
  return t && t.animation || (n || (e.mixins = [])).push(qc),
    Wc(e)
}
  , Wc = e=>(e.__reserved = !0,
  e.compatConfig = {
    MODE: 3
  },
  io(e))
  , zc = {
  hoverClass: {
    type: String,
    default: "none"
  },
  hoverStopPropagation: {
    type: Boolean,
    default: !1
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 400
  }
};
function Uc(e) {
  const t = Zt(!1);
  let n, o, r = !1;
  function i() {
    requestAnimationFrame((()=>{
        clearTimeout(o),
          o = setTimeout((()=>{
              t.value = !1
            }
          ), parseInt(e.hoverStayTime))
      }
    ))
  }
  function a(o) {
    o._hoverPropagationStopped || e.hoverClass && "none" !== e.hoverClass && !e.disabled && (e.hoverStopPropagation && (o._hoverPropagationStopped = !0),
      r = !0,
      n = setTimeout((()=>{
          t.value = !0,
          r || i()
        }
      ), parseInt(e.hoverStartTime)))
  }
  function s() {
    r = !1,
    t.value && i()
  }
  function l() {
    s(),
      window.removeEventListener("mouseup", l)
  }
  return {
    hovering: t,
    binding: {
      onTouchstartPassive: function(e) {
        e.touches.length > 1 || a(e)
      },
      onMousedown: function(e) {
        r || (a(e),
          window.addEventListener("mouseup", l))
      },
      onTouchend: function() {
        s()
      },
      onMouseup: function() {
        r && l()
      },
      onTouchcancel: function() {
        r = !1,
          t.value = !1,
          clearTimeout(n)
      }
    }
  }
}
function Xc(e, t) {
  return O(t) && (t = [t]),
    t.reduce(((t,n)=>(e[n] && (t[n] = !0),
      t)), Object.create(null))
}
function Yc(e, t) {
  return (n,o,r)=>{
    e.value && t(n, function(e, t, n, o) {
      const r = he(n);
      return {
        type: o.type || e,
        timeStamp: t.timeStamp || 0,
        target: r,
        currentTarget: r,
        detail: o
      }
    }(n, o, e.value, r || {}))
  }
}
const Gc = Kl("uf")
  , Jc = Kl("ul");
function Kc(e, t, n) {
  const o = oc();
  n && !e || M(t) && Object.keys(t).forEach((r=>{
      n ? 0 !== r.indexOf("@") && 0 !== r.indexOf("uni-") && sh.on(`uni-${r}-${o}-${e}`, t[r]) : 0 === r.indexOf("uni-") ? sh.on(r, t[r]) : e && sh.on(`uni-${r}-${o}-${e}`, t[r])
    }
  ))
}
function Zc(e, t, n) {
  const o = oc();
  n && !e || M(t) && Object.keys(t).forEach((r=>{
      n ? 0 !== r.indexOf("@") && 0 !== r.indexOf("uni-") && sh.off(`uni-${r}-${o}-${e}`, t[r]) : 0 === r.indexOf("uni-") ? sh.off(r, t[r]) : e && sh.off(`uni-${r}-${o}-${e}`, t[r])
    }
  ))
}
const Qc = Hc({
  name: "Button",
  props: {
    id: {
      type: String,
      default: ""
    },
    hoverClass: {
      type: String,
      default: "button-hover"
    },
    hoverStartTime: {
      type: [Number, String],
      default: 20
    },
    hoverStayTime: {
      type: [Number, String],
      default: 70
    },
    hoverStopPropagation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: [Boolean, String],
      default: !1
    },
    formType: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    loading: {
      type: [Boolean, String],
      default: !1
    },
    plain: {
      type: [Boolean, String],
      default: !1
    }
  },
  setup(e, {slots: t}) {
    const n = Zt(null)
      , o = qn(Gc, !1)
      , {hovering: r, binding: i} = Uc(e);
    pl();
    const a = ((s = (t,r)=>{
        if (e.disabled)
          return t.stopImmediatePropagation();
        r && n.value.click();
        const i = e.formType;
        if (i) {
          if (!o)
            return;
          "submit" === i ? o.submit(t) : "reset" === i && o.reset(t)
        }
      }
    ).__wwe = !0,
      s);
    var s;
    const l = qn(Jc, !1);
    return l && (l.addHandler(a),
      Oo((()=>{
          l.removeHandler(a)
        }
      ))),
      function(e, t) {
        Kc(e.id, t),
          zn((()=>e.id), ((e,n)=>{
              Zc(n, t, !0),
                Kc(e, t, !0)
            }
          )),
          Ao((()=>{
              Zc(e.id, t)
            }
          ))
      }(e, {
        "label-click": a
      }),
      ()=>{
        const o = e.hoverClass
          , s = Xc(e, "disabled")
          , l = Xc(e, "loading")
          , c = Xc(e, "plain")
          , u = o && "none" !== o;
        return Ur("uni-button", Qr({
          ref: n,
          onClick: a,
          class: u && r.value ? o : ""
        }, u && i, s, l, c), [t.default && t.default()], 16, ["onClick"])
      }
  }
});
function eu(e) {
  const {base: t} = __uniConfig.router;
  return 0 === se(e).indexOf(t) ? se(e) : t + e
}
function tu(e) {
  const {base: t, assets: n} = __uniConfig.router;
  if ("./" === t && (0 === e.indexOf("./static/") || n && 0 === e.indexOf("./" + n + "/")) && (e = e.slice(1)),
  0 === e.indexOf("/")) {
    if (0 !== e.indexOf("//"))
      return eu(e.slice(1));
    e = "https:" + e
  }
  if (Z.test(e) || Q.test(e) || 0 === e.indexOf("blob:"))
    return e;
  const o = Df();
  return o.length ? eu(mc(o[o.length - 1].$page.route, e).slice(1)) : e
}
const nu = navigator.userAgent
  , ou = /android/i.test(nu)
  , ru = /iphone|ipad|ipod/i.test(nu)
  , iu = nu.match(/Windows NT ([\d|\d.\d]*)/i)
  , au = /Macintosh|Mac/i.test(nu)
  , su = /Linux|X11/i.test(nu)
  , lu = au && navigator.maxTouchPoints > 0;
function cu() {
  return /^Apple/.test(navigator.vendor) && "number" == typeof window.orientation
}
function uu(e) {
  return e && 90 === Math.abs(window.orientation)
}
function du(e, t) {
  return e ? Math[t ? "max" : "min"](screen.width, screen.height) : screen.width
}
function fu(e) {
  return Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
}
const pu = ["GET", "OPTIONS", "HEAD", "POST", "PUT", "DELETE", "TRACE", "CONNECT", "PATCH"];
function hu(e, t) {
  return e && -1 !== t.indexOf(e) ? e : t[0]
}
function mu(e) {
  return function() {
    try {
      return e.apply(e, arguments)
    } catch (t) {
      console.error(t)
    }
  }
}
let gu = 1;
const vu = {};
function yu(e, t, n) {
  if ("number" == typeof e) {
    const o = vu[e];
    if (o)
      return o.keepAlive || delete vu[e],
        o.callback(t, n)
  }
  return t
}
const bu = "success"
  , _u = "fail"
  , wu = "complete";
function Su(e, t={}, {beforeAll: n, beforeSuccess: o}={}) {
  M(t) || (t = {});
  const {success: r, fail: i, complete: a} = function(e) {
    const t = {};
    for (const n in e) {
      const o = e[n];
      L(o) && (t[n] = mu(o),
        delete e[n])
    }
    return t
  }(t)
    , s = L(r)
    , l = L(i)
    , c = L(a)
    , u = gu++;
  return function(e, t, n, o=!1) {
    vu[e] = {
      name: t,
      keepAlive: o,
      callback: n
    }
  }(u, e, (u=>{
      (u = u || {}).errMsg = function(e, t) {
        return e && -1 !== e.indexOf(":fail") ? t + e.substring(e.indexOf(":fail")) : t + ":ok"
      }(u.errMsg, e),
      L(n) && n(u),
        u.errMsg === e + ":ok" ? (L(o) && o(u, t),
        s && r(u)) : l && i(u),
      c && a(u)
    }
  )),
    u
}
const Tu = "success"
  , xu = "fail"
  , Cu = "complete"
  , Eu = {}
  , ku = {};
function Pu(e, t) {
  return function(n) {
    return e(n, t) || n
  }
}
function Lu(e, t, n) {
  let o = !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (o)
      o = Promise.resolve(Pu(i, n));
    else {
      const e = i(t, n);
      if ($(e) && (o = Promise.resolve(e)),
      !1 === e)
        return {
          then() {},
          catch() {}
        }
    }
  }
  return o || {
    then: e=>e(t),
    catch() {}
  }
}
function Ou(e, t={}) {
  return [Tu, xu, Cu].forEach((n=>{
      const o = e[n];
      if (!C(o))
        return;
      const r = t[n];
      t[n] = function(e) {
        Lu(o, e, t).then((e=>L(r) && r(e) || e))
      }
    }
  )),
    t
}
function Au(e, t) {
  const n = [];
  C(Eu.returnValue) && n.push(...Eu.returnValue);
  const o = ku[e];
  return o && C(o.returnValue) && n.push(...o.returnValue),
    n.forEach((e=>{
        t = e(t) || t
      }
    )),
    t
}
function Bu(e) {
  const t = Object.create(null);
  Object.keys(Eu).forEach((e=>{
      "returnValue" !== e && (t[e] = Eu[e].slice())
    }
  ));
  const n = ku[e];
  return n && Object.keys(n).forEach((e=>{
      "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]))
    }
  )),
    t
}
function $u(e, t, n, o) {
  const r = Bu(e);
  if (r && Object.keys(r).length) {
    if (C(r.invoke)) {
      return Lu(r.invoke, n).then((n=>t(Ou(Bu(e), n), ...o)))
    }
    return t(Ou(r, n), ...o)
  }
  return t(n, ...o)
}
function Iu(e, t) {
  return (n={},...o)=>function(e) {
    return !(!M(e) || ![bu, _u, wu].find((t=>L(e[t]))))
  }(n) ? Au(e, $u(e, t, n, o)) : Au(e, new Promise(((r,i)=>{
      $u(e, t, w(n, {
        success: r,
        fail: i
      }), o)
    }
  )))
}
function Nu(e, t, n, o) {
  return yu(e, w({
    errMsg: t + ":fail" + (n ? " " + n : "")
  }, o))
}
function Mu(e, t, n, o) {
  if (o && o.beforeInvoke) {
    const e = o.beforeInvoke(t);
    if (O(e))
      return e
  }
  const r = function(e, t) {
    const n = e[0];
    if (!t || !M(t.formatArgs) && M(n))
      return;
    const o = t.formatArgs
      , r = Object.keys(o);
    for (let i = 0; i < r.length; i++) {
      const t = r[i]
        , a = o[t];
      if (L(a)) {
        const o = a(e[0][t], n);
        if (O(o))
          return o
      } else
        x(n, t) || (n[t] = a)
    }
  }(t, o);
  if (r)
    return r
}
function Ru(e, t, n, o) {
  return n=>{
    const r = Su(e, n, o)
      , i = Mu(0, [n], 0, o);
    return i ? Nu(r, e, i) : t(n, {
      resolve: t=>function(e, t, n) {
        return yu(e, w(n || {}, {
          errMsg: t + ":ok"
        }))
      }(r, e, t),
      reject: (t,n)=>Nu(r, e, function(e) {
        return !e || O(e) ? e : e.stack ? (console.error(e.message + "\n" + e.stack),
          e.message) : e
      }(t), n)
    })
  }
}
function Du(e, t, n, o) {
  return Iu(e, Ru(e, t, 0, o))
}
function ju(e, t, n, o) {
  return function(e, t, n, o) {
    return (...e)=>{
      const n = Mu(0, e, 0, o);
      if (n)
        throw new Error(n);
      return t.apply(null, e)
    }
  }(0, t, 0, o)
}
function Fu(e, t, n, o) {
  return Iu(e, function(e, t, n, o) {
    return Ru(e, t, 0, o)
  }(e, t, 0, o))
}
let Vu = !1
  , qu = 0
  , Hu = 0
  , Wu = 960
  , zu = 375
  , Uu = 750;
function Xu() {
  const {platform: e, pixelRatio: t, windowWidth: n} = function() {
    const e = cu()
      , t = fu(du(e, uu(e)));
    return {
      platform: ru ? "ios" : "other",
      pixelRatio: window.devicePixelRatio,
      windowWidth: t
    }
  }();
  qu = n,
    Hu = t,
    Vu = "ios" === e
}
function Yu(e, t) {
  const n = Number(e);
  return isNaN(n) ? t : n
}
const Gu = ju(0, ((e,t)=>{
    if (0 === qu && (Xu(),
      function() {
        const e = __uniConfig.globalStyle || {};
        Wu = Yu(e.rpxCalcMaxDeviceWidth, 960),
          zu = Yu(e.rpxCalcBaseDeviceWidth, 375),
          Uu = Yu(e.rpxCalcBaseDeviceWidth, 750)
      }()),
    0 === (e = Number(e)))
      return 0;
    let n = t || qu;
    n = e === Uu || n <= Wu ? n : zu;
    let o = e / 750 * n;
    return o < 0 && (o = -o),
      o = Math.floor(o + 1e-4),
    0 === o && (o = 1 !== Hu && Vu ? .5 : 1),
      e < 0 ? -o : o
  }
));
function Ju(e, t) {
  Object.keys(t).forEach((n=>{
      L(t[n]) && (e[n] = function(e, t) {
        const n = t ? e ? e.concat(t) : C(t) ? t : [t] : e;
        return n ? function(e) {
          const t = [];
          for (let n = 0; n < e.length; n++)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }(n) : n
      }(e[n], t[n]))
    }
  ))
}
const Ku = ju(0, ((e,t)=>{
    O(e) && M(t) ? Ju(ku[e] || (ku[e] = {}), t) : M(e) && Ju(Eu, e)
  }
))
  , Zu = {
  formatArgs: {}
}
  , Qu = {
  duration: 400,
  timingFunction: "linear",
  delay: 0,
  transformOrigin: "50% 50% 0"
};
class ed {
  constructor(e) {
    this.actions = [],
      this.currentTransform = {},
      this.currentStepAnimates = [],
      this.option = w({}, Qu, e)
  }
  _getOption(e) {
    const t = {
      transition: w({}, this.option, e),
      transformOrigin: ""
    };
    return t.transformOrigin = t.transition.transformOrigin,
      delete t.transition.transformOrigin,
      t
  }
  _pushAnimates(e, t) {
    this.currentStepAnimates.push({
      type: e,
      args: t
    })
  }
  _converType(e) {
    return e.replace(/[A-Z]/g, (e=>`-${e.toLowerCase()}`))
  }
  _getValue(e) {
    return "number" == typeof e ? `${e}px` : e
  }
  export() {
    const e = this.actions;
    return this.actions = [],
      {
        actions: e
      }
  }
  step(e) {
    return this.currentStepAnimates.forEach((e=>{
        "style" !== e.type ? this.currentTransform[e.type] = e : this.currentTransform[`${e.type}.${e.args[0]}`] = e
      }
    )),
      this.actions.push({
        animates: Object.values(this.currentTransform),
        option: this._getOption(e)
      }),
      this.currentStepAnimates = [],
      this
  }
}
const td = le((()=>{
    const e = ["opacity", "backgroundColor"]
      , t = ["width", "height", "left", "right", "top", "bottom"];
    ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"].concat(e, t).forEach((n=>{
        ed.prototype[n] = function(...o) {
          return e.concat(t).includes(n) ? this._pushAnimates("style", [this._converType(n), t.includes(n) ? this._getValue(o[0]) : o[0]]) : this._pushAnimates(n, o),
            this
        }
      }
    ))
  }
))
  , nd = ju(0, (e=>(td(),
  new ed(e))), 0, Zu)
  , od = ju(0, (()=>{
    const e = lp();
    return e && e.$vm ? e.$vm.$locale : pl().getLocale()
  }
))
  , rd = {
  onUnhandledRejection: [],
  onPageNotFound: [],
  onError: [],
  onShow: [],
  onHide: []
};
const id = "json"
  , ad = ["text", "arraybuffer"]
  , sd = encodeURIComponent;
ArrayBuffer,
  Boolean;
const ld = {
  formatArgs: {
    method(e, t) {
      t.method = hu((e || "").toUpperCase(), pu)
    },
    data(e, t) {
      t.data = e || ""
    },
    url(e, t) {
      t.method === pu[0] && M(t.data) && Object.keys(t.data).length && (t.url = function(e, t) {
        let n = e.split("#");
        const o = n[1] || "";
        n = n[0].split("?");
        let r = n[1] || "";
        e = n[0];
        const i = r.split("&").filter((e=>e))
          , a = {};
        i.forEach((e=>{
            const t = e.split("=");
            a[t[0]] = t[1]
          }
        ));
        for (const s in t)
          if (x(t, s)) {
            let e = t[s];
            null == e ? e = "" : M(e) && (e = JSON.stringify(e)),
              a[sd(s)] = sd(e)
          }
        return r = Object.keys(a).map((e=>`${e}=${a[e]}`)).join("&"),
        e + (r ? "?" + r : "") + (o ? "#" + o : "")
      }(e, t.data))
    },
    header(e, t) {
      const n = t.header = e || {};
      t.method !== pu[0] && (Object.keys(n).find((e=>"content-type" === e.toLowerCase())) || (n["Content-Type"] = "application/json"))
    },
    dataType(e, t) {
      t.dataType = (e || id).toLowerCase()
    },
    responseType(e, t) {
      t.responseType = (e || "").toLowerCase(),
      -1 === ad.indexOf(t.responseType) && (t.responseType = "text")
    }
  }
};
const cd = {
  url: {
    type: String,
    required: !0
  }
}
  , ud = (fd(["slide-in-right", "slide-in-left", "slide-in-top", "slide-in-bottom", "fade-in", "zoom-out", "zoom-fade-out", "pop-in", "none"]),
  fd(["slide-out-right", "slide-out-left", "slide-out-top", "slide-out-bottom", "fade-out", "zoom-in", "zoom-fade-in", "pop-out", "none"]),
  md("navigateTo"))
  , dd = md("redirectTo");
function fd(e) {
  return {
    animationType: {
      type: String,
      validator(t) {
        if (t && -1 === e.indexOf(t))
          return "`" + t + "` is not supported for `animationType` (supported values are: `" + e.join("`|`") + "`)"
      }
    },
    animationDuration: {
      type: Number
    }
  }
}
let pd;
function hd() {
  pd = ""
}
function md(e) {
  return {
    formatArgs: {
      url: gd(e)
    },
    beforeAll: hd
  }
}
function gd(e) {
  return function(t, n) {
    if (!t)
      return 'Missing required args: "url"';
    const o = (t = function(e) {
      if (0 === e.indexOf("/"))
        return e;
      let t = "";
      const n = Df();
      return n.length && (t = n[n.length - 1].$page.route),
        mc(t, e)
    }(t)).split("?")[0]
      , r = gc(o, !0);
    if (!r)
      return "page `" + t + "` is not found";
    if ("navigateTo" === e || "redirectTo" === e) {
      if (r.meta.isTabBar)
        return `can not ${e} a tabbar page`
    } else if ("switchTab" === e && !r.meta.isTabBar)
      return "can not switch to no-tabBar page";
    if ("switchTab" !== e && "preloadPage" !== e || !r.meta.isTabBar || "appLaunch" === n.openType || (t = o),
    r.meta.isEntry && (t = t.replace(r.alias, "/")),
      n.url = function(e) {
        if (!O(e))
          return e;
        const t = e.indexOf("?");
        if (-1 === t)
          return e;
        const n = e.slice(t + 1).trim().replace(/^(\?|#|&)/, "");
        if (!n)
          return e;
        e = e.slice(0, t);
        const o = [];
        return n.split("&").forEach((e=>{
            const t = e.replace(/\+/g, " ").split("=")
              , n = t.shift()
              , r = t.length > 0 ? t.join("=") : "";
            o.push(n + "=" + encodeURIComponent(r))
          }
        )),
          o.length ? e + "?" + o.join("&") : e
      }(t),
    "unPreloadPage" !== e)
      if ("preloadPage" !== e) {
        if (pd === t && "appLaunch" !== n.openType)
          return `${pd} locked`;
        __uniConfig.ready && (pd = t)
      } else if (r.meta.isTabBar) {
        const e = Df()
          , t = r.path.slice(1);
        if (e.find((e=>e.route === t)))
          return "tabBar page `" + t + "` already exists"
      }
  }
}
const vd = {
  formatArgs: {
    duration: 300
  }
}
  , yd = ["success", "loading", "none", "error"]
  , bd = (Boolean,
  {
    formatArgs: {
      title: "",
      icon(e, t) {
        t.icon = hu(e, yd)
      },
      image(e, t) {
        t.image = e ? tu(e) : ""
      },
      duration: 1500,
      mask: !1
    }
  })
  , _d = jc()
  , wd = jc();
const Sd = Hc({
  name: "ResizeSensor",
  props: {
    initial: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["resize"],
  setup(e, {emit: t}) {
    const n = Zt(null)
      , o = function(e) {
      return ()=>{
        const {firstElementChild: t, lastElementChild: n} = e.value;
        t.scrollLeft = 1e5,
          t.scrollTop = 1e5,
          n.scrollLeft = 1e5,
          n.scrollTop = 1e5
      }
    }(n)
      , r = function(e, t, n) {
      const o = Dt({
        width: -1,
        height: -1
      });
      return zn((()=>w({}, o)), (e=>t("resize", e))),
        ()=>{
          const t = e.value;
          o.width = t.offsetWidth,
            o.height = t.offsetHeight,
            n()
        }
    }(n, t, o);
    return function(e, t, n, o) {
      mo(o),
        ko((()=>{
            t.initial && _n(n);
            const r = e.value;
            r.offsetParent !== r.parentElement && (r.parentElement.style.position = "relative"),
            "AnimationEvent"in window || o()
          }
        ))
    }(n, e, r, o),
      ()=>Ur("uni-resize-sensor", {
        ref: n,
        onAnimationstartOnce: r
      }, [Ur("div", {
        onScroll: r
      }, [Ur("div", null, null)], 40, ["onScroll"]), Ur("div", {
        onScroll: r
      }, [Ur("div", null, null)], 40, ["onScroll"])], 40, ["onAnimationstartOnce"])
  }
});
function Td() {}
const xd = {
  cursorSpacing: {
    type: [Number, String],
    default: 0
  },
  showConfirmBar: {
    type: [Boolean, String],
    default: "auto"
  },
  adjustPosition: {
    type: [Boolean, String],
    default: !0
  },
  autoBlur: {
    type: [Boolean, String],
    default: !1
  }
};
function Cd(e, t, n) {
  function o(e) {
    const t = pi((()=>0 === String(navigator.vendor).indexOf("Apple")));
    e.addEventListener("focus", (()=>{
        clearTimeout(undefined),
          document.addEventListener("click", Td, !1)
      }
    ));
    e.addEventListener("blur", (()=>{
        t.value && e.blur(),
          document.removeEventListener("click", Td, !1),
        t.value && document.documentElement.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollTop)
      }
    ))
  }
  zn((()=>t.value), (e=>e && o(e)))
}
const Ed = {
  src: {
    type: String,
    default: ""
  },
  mode: {
    type: String,
    default: "scaleToFill"
  },
  lazyLoad: {
    type: [Boolean, String],
    default: !1
  },
  draggable: {
    type: Boolean,
    default: !1
  }
}
  , kd = {
  widthFix: ["offsetWidth", "height", (e,t)=>e / t],
  heightFix: ["offsetHeight", "width", (e,t)=>e * t]
}
  , Pd = {
  aspectFit: ["center center", "contain"],
  aspectFill: ["center center", "cover"],
  widthFix: [, "100% 100%"],
  heightFix: [, "100% 100%"],
  top: ["center top"],
  bottom: ["center bottom"],
  center: ["center center"],
  left: ["left center"],
  right: ["right center"],
  "top left": ["left top"],
  "top right": ["right top"],
  "bottom left": ["left bottom"],
  "bottom right": ["right bottom"]
}
  , Ld = Hc({
  name: "Image",
  props: Ed,
  setup(e, {emit: t}) {
    const n = Zt(null)
      , o = function(e, t) {
      const n = Zt("")
        , o = pi((()=>{
          let e = "auto"
            , o = "";
          const r = Pd[t.mode];
          return r ? (r[0] && (o = r[0]),
          r[1] && (e = r[1])) : (o = "0% 0%",
            e = "100% 100%"),
            `background-image:${n.value ? 'url("' + n.value + '")' : "none"};background-position:${o};background-size:${e};`
        }
      ))
        , r = Dt({
        rootEl: e,
        src: pi((()=>t.src ? tu(t.src) : "")),
        origWidth: 0,
        origHeight: 0,
        origStyle: {
          width: "",
          height: ""
        },
        modeStyle: o,
        imgSrc: n
      });
      return ko((()=>{
          const t = e.value.style;
          r.origWidth = Number(t.width) || 0,
            r.origHeight = Number(t.height) || 0
        }
      )),
        r
    }(n, e)
      , r = Yc(n, t)
      , {fixSize: i} = function(e, t, n) {
      const o = ()=>{
          const {mode: o} = t
            , r = kd[o];
          if (!r)
            return;
          const {origWidth: i, origHeight: a} = n
            , s = i && a ? i / a : 0;
          if (!s)
            return;
          const l = e.value
            , c = l[r[0]];
          c && (l.style[r[1]] = function(e) {
            Od && e > 10 && (e = 2 * Math.round(e / 2));
            return e
          }(r[2](c, s)) + "px")
        }
        , r = ()=>{
          const {style: t} = e.value
            , {origStyle: {width: o, height: r}} = n;
          t.width = o,
            t.height = r
        }
      ;
      return zn((()=>t.mode), ((e,t)=>{
          kd[t] && r(),
          kd[e] && o()
        }
      )),
        {
          fixSize: o,
          resetSize: r
        }
    }(n, e, o);
    return function(e, t, n, o, r) {
      let i, a;
      const s = (t=0,n=0,o="")=>{
          e.origWidth = t,
            e.origHeight = n,
            e.imgSrc = o
        }
        , l = l=>{
          if (!l)
            return c(),
              void s();
          i = i || new Image,
            i.onload = e=>{
              const {width: u, height: d} = i;
              s(u, d, l),
                o(),
                i.draggable = t.draggable,
              a && a.remove(),
                a = i,
                n.value.appendChild(i),
                c(),
                r("load", e, {
                  width: u,
                  height: d
                })
            }
            ,
            i.onerror = t=>{
              s(),
                c(),
                r("error", t, {
                  errMsg: `GET ${e.src} 404 (Not Found)`
                })
            }
            ,
            i.src = l
        }
        , c = ()=>{
          i && (i.onload = null,
            i.onerror = null,
            i = null)
        }
      ;
      zn((()=>e.src), (e=>l(e))),
        zn((()=>e.imgSrc), (e=>{
            !e && a && (a.remove(),
              a = null)
          }
        )),
        ko((()=>l(e.src))),
        Oo((()=>c()))
    }(o, e, n, i, r),
      ()=>Ur("uni-image", {
        ref: n
      }, [Ur("div", {
        style: o.modeStyle
      }, null, 4), kd[e.mode] ? Ur(Sd, {
        onResize: i
      }, null, 8, ["onResize"]) : Ur("span", null, null)], 512)
  }
});
const Od = "Google Inc." === navigator.vendor;
const Ad = pe(!0)
  , Bd = [];
let $d, Id = 0;
const Nd = e=>Bd.forEach((t=>t.userAction = e));
function Md(e={
  userAction: !1
}) {
  if (!$d) {
    ["touchstart", "touchmove", "touchend", "mousedown", "mouseup"].forEach((e=>{
        document.addEventListener(e, (function() {
            !Id && Nd(!0),
              Id++,
              setTimeout((()=>{
                  !--Id && Nd(!1)
                }
              ), 0)
          }
        ), Ad)
      }
    )),
      $d = !0
  }
  Bd.push(e)
}
function Rd() {
  const e = Dt({
    userAction: !1
  });
  return ko((()=>{
      Md(e)
    }
  )),
    Oo((()=>{
        !function(e) {
          const t = Bd.indexOf(e);
          t >= 0 && Bd.splice(t, 1)
        }(e)
      }
    )),
    {
      state: e
    }
}
function Dd(e, t) {
  const n = document.activeElement;
  if (!n)
    return t({});
  const o = {};
  ["input", "textarea"].includes(n.tagName.toLowerCase()) && (o.start = n.selectionStart,
    o.end = n.selectionEnd),
    t(o)
}
function jd(e, t) {
  return "number" === t && isNaN(Number(e)) && (e = ""),
    null === e ? "" : String(e)
}
const Fd = ["none", "text", "decimal", "numeric", "tel", "search", "email", "url"]
  , Vd = w({}, {
  name: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    default: ""
  },
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  autoFocus: {
    type: [Boolean, String],
    default: !1
  },
  focus: {
    type: [Boolean, String],
    default: !1
  },
  cursor: {
    type: [Number, String],
    default: -1
  },
  selectionStart: {
    type: [Number, String],
    default: -1
  },
  selectionEnd: {
    type: [Number, String],
    default: -1
  },
  type: {
    type: String,
    default: "text"
  },
  password: {
    type: [Boolean, String],
    default: !1
  },
  placeholder: {
    type: String,
    default: ""
  },
  placeholderStyle: {
    type: String,
    default: ""
  },
  placeholderClass: {
    type: String,
    default: ""
  },
  maxlength: {
    type: [Number, String],
    default: 140
  },
  confirmType: {
    type: String,
    default: "done"
  },
  confirmHold: {
    type: Boolean,
    default: !1
  },
  ignoreCompositionEvent: {
    type: Boolean,
    default: !0
  },
  step: {
    type: String,
    default: "0.000000000000000001"
  },
  inputmode: {
    type: String,
    default: void 0,
    validator: e=>!!~Fd.indexOf(e)
  }
}, xd)
  , qd = ["input", "focus", "blur", "update:value", "update:modelValue", "update:focus", "compositionstart", "compositionupdate", "compositionend", "keyboardheightchange"];
function Hd(e, t, n, o) {
  const r = be((n=>{
      t.value = jd(n, e.type)
    }
  ), 100, {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout
  });
  zn((()=>e.modelValue), r),
    zn((()=>e.value), r);
  const i = function(e, t) {
    let n, o, r = 0;
    const i = function(...i) {
      const a = Date.now();
      clearTimeout(n),
        o = ()=>{
          o = null,
            r = a,
            e.apply(this, i)
        }
        ,
        a - r < t ? n = setTimeout(o, t - (a - r)) : o()
    };
    return i.cancel = function() {
      clearTimeout(n),
        o = null
    }
      ,
      i.flush = function() {
        clearTimeout(n),
        o && o()
      }
      ,
      i
  }(((e,t)=>{
      r.cancel(),
        n("update:modelValue", t.value),
        n("update:value", t.value),
        o("input", e, t)
    }
  ), 100);
  return Eo((()=>{
      r.cancel(),
        i.cancel()
    }
  )),
    {
      trigger: o,
      triggerInput: (e,t,n)=>{
        r.cancel(),
          i(e, t),
        n && i.flush()
      }
    }
}
function Wd(e, t) {
  Rd();
  const n = pi((()=>e.autoFocus || e.focus));
  function o() {
    if (!n.value)
      return;
    const e = t.value;
    e ? e.focus() : setTimeout(o, 100)
  }
  zn((()=>e.focus), (e=>{
      e ? o() : function() {
        const e = t.value;
        e && e.blur()
      }()
    }
  )),
    ko((()=>{
        n.value && _n(o)
      }
    ))
}
function zd(e, t, n, o) {
  Tl(ac(), "getSelectedTextRange", Dd);
  const {fieldRef: r, state: i, trigger: a} = function(e, t, n) {
    const o = Zt(null)
      , r = Yc(t, n)
      , i = pi((()=>{
        const t = Number(e.selectionStart);
        return isNaN(t) ? -1 : t
      }
    ))
      , a = pi((()=>{
        const t = Number(e.selectionEnd);
        return isNaN(t) ? -1 : t
      }
    ))
      , s = pi((()=>{
        const t = Number(e.cursor);
        return isNaN(t) ? -1 : t
      }
    ))
      , l = pi((()=>{
        var t = Number(e.maxlength);
        return isNaN(t) ? 140 : t
      }
    ))
      , c = jd(e.modelValue, e.type) || jd(e.value, e.type)
      , u = Dt({
      value: c,
      valueOrigin: c,
      maxlength: l,
      focus: e.focus,
      composing: !1,
      selectionStart: i,
      selectionEnd: a,
      cursor: s
    });
    return zn((()=>u.focus), (e=>n("update:focus", e))),
      zn((()=>u.maxlength), (e=>u.value = u.value.slice(0, e))),
      {
        fieldRef: o,
        state: u,
        trigger: r
      }
  }(e, t, n)
    , {triggerInput: s} = Hd(e, i, n, a);
  Wd(e, r),
    Cd(0, r);
  const {state: l} = function() {
    const e = Dt({
      attrs: {}
    });
    return ko((()=>{
        let t = ri();
        for (; t; ) {
          const n = t.type.__scopeId;
          n && (e.attrs[n] = ""),
            t = t.proxy && "page" === t.proxy.$mpType ? null : t.parent
        }
      }
    )),
      {
        state: e
      }
  }();
  !function(e, t) {
    const n = qn(Gc, !1);
    if (!n)
      return;
    const o = ri()
      , r = {
      submit() {
        const n = o.proxy;
        return [n[e], O(t) ? n[t] : t.value]
      },
      reset() {
        O(t) ? o.proxy[t] = "" : t.value = ""
      }
    };
    n.addField(r),
      Oo((()=>{
          n.removeField(r)
        }
      ))
  }("name", i),
    function(e, t, n, o, r, i) {
      function a() {
        const n = e.value;
        n && t.focus && t.selectionStart > -1 && t.selectionEnd > -1 && "number" !== n.type && (n.selectionStart = t.selectionStart,
          n.selectionEnd = t.selectionEnd)
      }
      function s() {
        const n = e.value;
        n && t.focus && t.selectionStart < 0 && t.selectionEnd < 0 && t.cursor > -1 && "number" !== n.type && (n.selectionEnd = n.selectionStart = t.cursor)
      }
      function l(e) {
        return "number" === e.type ? null : e.selectionEnd
      }
      zn([()=>t.selectionStart, ()=>t.selectionEnd], a),
        zn((()=>t.cursor), s),
        zn((()=>e.value), (function() {
            const c = e.value;
            if (!c)
              return;
            const u = function(e, o) {
              e.stopPropagation(),
              L(i) && !1 === i(e, t) || (t.value = c.value,
              t.composing && n.ignoreCompositionEvent || r(e, {
                value: c.value,
                cursor: l(c)
              }, o))
            };
            function d(e) {
              n.ignoreCompositionEvent || o(e.type, e, {
                value: e.data
              })
            }
            c.addEventListener("change", (e=>e.stopPropagation())),
              c.addEventListener("focus", (function(e) {
                  t.focus = !0,
                    o("focus", e, {
                      value: t.value
                    }),
                    a(),
                    s()
                }
              )),
              c.addEventListener("blur", (function(e) {
                  t.composing && (t.composing = !1,
                    u(e, !0)),
                    t.focus = !1,
                    o("blur", e, {
                      value: t.value,
                      cursor: l(e.target)
                    })
                }
              )),
              c.addEventListener("input", u),
              c.addEventListener("compositionstart", (e=>{
                  e.stopPropagation(),
                    t.composing = !0,
                    d(e)
                }
              )),
              c.addEventListener("compositionend", (e=>{
                  e.stopPropagation(),
                  t.composing && (t.composing = !1,
                    u(e)),
                    d(e)
                }
              )),
              c.addEventListener("compositionupdate", d)
          }
        ))
    }(r, i, e, a, s, o);
  return {
    fieldRef: r,
    state: i,
    scopedAttrsState: l,
    fixDisabledColor: 0 === String(navigator.vendor).indexOf("Apple") && CSS.supports("image-orientation:from-image"),
    trigger: a
  }
}
const Ud = Hc({
  name: "Input",
  props: w({}, Vd, {
    placeholderClass: {
      type: String,
      default: "input-placeholder"
    },
    textContentType: {
      type: String,
      default: ""
    }
  }),
  emits: ["confirm", ...qd],
  setup(e, {emit: t}) {
    const n = ["text", "number", "idcard", "digit", "password", "tel"]
      , o = ["off", "one-time-code"]
      , r = pi((()=>{
        let t = "";
        switch (e.type) {
          case "text":
            "search" === e.confirmType && (t = "search");
            break;
          case "idcard":
            t = "text";
            break;
          case "digit":
            t = "number";
            break;
          default:
            t = ~n.includes(e.type) ? e.type : "text"
        }
        return e.password ? "password" : t
      }
    ))
      , i = pi((()=>{
        const t = o.indexOf(e.textContentType)
          , n = o.indexOf(H(e.textContentType));
        return o[-1 !== t ? t : -1 !== n ? n : 0]
      }
    ));
    let a, s = Zt("");
    const l = Zt(null)
      , {fieldRef: c, state: u, scopedAttrsState: d, fixDisabledColor: f, trigger: p} = zd(e, l, t, ((e,t)=>{
        const n = e.target;
        if ("number" === r.value) {
          if (a && (n.removeEventListener("blur", a),
            a = null),
          n.validity && !n.validity.valid) {
            if ((!s.value || !n.value) && "-" === e.data || "-" === s.value[0] && "deleteContentBackward" === e.inputType)
              return s.value = "-",
                t.value = "",
                a = ()=>{
                  s.value = n.value = ""
                }
                ,
                n.addEventListener("blur", a),
                !1;
            if (s.value)
              if (-1 !== s.value.indexOf(".")) {
                if ("." !== e.data && "deleteContentBackward" === e.inputType) {
                  const e = s.value.indexOf(".");
                  return s.value = n.value = t.value = s.value.slice(0, e),
                    !0
                }
              } else if ("." === e.data)
                return s.value += ".",
                  a = ()=>{
                    s.value = n.value = s.value.slice(0, -1)
                  }
                  ,
                  n.addEventListener("blur", a),
                  !1;
            return s.value = t.value = n.value = "-" === s.value ? "" : s.value,
              !1
          }
          s.value = n.value;
          const o = t.maxlength;
          if (o > 0 && n.value.length > o)
            return n.value = n.value.slice(0, o),
              t.value = n.value,
              !1
        }
      }
    ));
    zn((()=>u.value), (t=>{
        "number" !== e.type || "-" === s.value && "" === t || (s.value = t)
      }
    ));
    const h = ["number", "digit"]
      , m = pi((()=>h.includes(e.type) ? e.step : ""));
    function g(t) {
      if ("Enter" !== t.key)
        return;
      const n = t.target;
      t.stopPropagation(),
        p("confirm", t, {
          value: n.value
        }),
      !e.confirmHold && n.blur()
    }
    return ()=>{
      let t = e.disabled && f ? Ur("input", {
        key: "disabled-input",
        ref: c,
        value: u.value,
        tabindex: "-1",
        readonly: !!e.disabled,
        type: r.value,
        maxlength: u.maxlength,
        step: m.value,
        class: "uni-input-input",
        onFocus: e=>e.target.blur()
      }, null, 40, ["value", "readonly", "type", "maxlength", "step", "onFocus"]) : Mo(Ur("input", {
        key: "input",
        ref: c,
        "onUpdate:modelValue": e=>u.value = e,
        disabled: !!e.disabled,
        type: r.value,
        maxlength: u.maxlength,
        step: m.value,
        enterkeyhint: e.confirmType,
        pattern: "number" === e.type ? "[0-9]*" : void 0,
        class: "uni-input-input",
        autocomplete: i.value,
        onKeyup: g,
        inputmode: e.inputmode
      }, null, 40, ["onUpdate:modelValue", "disabled", "type", "maxlength", "step", "enterkeyhint", "pattern", "autocomplete", "onKeyup", "inputmode"]), [[da, u.value]]);
      return Ur("uni-input", {
        ref: l
      }, [Ur("div", {
        class: "uni-input-wrapper"
      }, [Mo(Ur("div", Qr(d.attrs, {
        style: e.placeholderStyle,
        class: ["uni-input-placeholder", e.placeholderClass]
      }), [e.placeholder], 16), [[ga, !(u.value.length || "-" === s.value)]]), "search" === e.confirmType ? Ur("form", {
        action: "",
        onSubmit: e=>e.preventDefault(),
        class: "uni-input-form"
      }, [t], 40, ["onSubmit"]) : t])], 512)
    }
  }
});
const Xd = ["class", "style"]
  , Yd = /^on[A-Z]+/
  , Gd = (e={})=>{
    const {excludeListeners: t=!1, excludeKeys: n=[]} = e
      , o = ri()
      , r = Qt({})
      , i = Qt({})
      , a = Qt({})
      , s = n.concat(Xd);
    return o.attrs = Dt(o.attrs),
      Hn((()=>{
          const e = (n = o.attrs,
            Object.keys(n).map((e=>[e, n[e]]))).reduce(((e,[n,o])=>(s.includes(n) ? e.exclude[n] = o : Yd.test(n) ? (t || (e.attrs[n] = o),
            e.listeners[n] = o) : e.attrs[n] = o,
            e)), {
            exclude: {},
            attrs: {},
            listeners: {}
          });
          var n;
          r.value = e.attrs,
            i.value = e.listeners,
            a.value = e.exclude
        }
      )),
      {
        $attrs: r,
        $listeners: i,
        $excludeAttrs: a
      }
  }
;
function Jd(e) {
  const t = [];
  return C(e) && e.forEach((e=>{
      Fr(e) ? e.type === Pr ? t.push(...Jd(e.children)) : t.push(e) : C(e) && t.push(...Jd(e))
    }
  )),
    t
}
const Kd = function(e, t, n, o) {
  e.addEventListener(t, (e=>{
      L(n) && !1 === n(e) && ((void 0 === e.cancelable || e.cancelable) && e.preventDefault(),
        e.stopPropagation())
    }
  ), {
    passive: !1
  })
};
let Zd, Qd;
const ef = ["navigate", "redirect", "switchTab", "reLaunch", "navigateBack"]
  , tf = ["slide-in-right", "slide-in-left", "slide-in-top", "slide-in-bottom", "fade-in", "zoom-out", "zoom-fade-out", "pop-in", "none"]
  , nf = ["slide-out-right", "slide-out-left", "slide-out-top", "slide-out-bottom", "fade-out", "zoom-in", "zoom-fade-in", "pop-out", "none"]
  , of = {
  hoverClass: {
    type: String,
    default: "navigator-hover"
  },
  url: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: "navigate",
    validator: e=>Boolean(~ef.indexOf(e))
  },
  delta: {
    type: Number,
    default: 1
  },
  hoverStartTime: {
    type: [Number, String],
    default: 50
  },
  hoverStayTime: {
    type: [Number, String],
    default: 600
  },
  exists: {
    type: String,
    default: ""
  },
  hoverStopPropagation: {
    type: Boolean,
    default: !1
  },
  animationType: {
    type: String,
    default: "",
    validator: e=>!e || tf.concat(nf).includes(e)
  },
  animationDuration: {
    type: [String, Number],
    default: 300
  }
};
w({}, of, {
  renderLink: {
    type: Boolean,
    default: !0
  }
});
const rf = pe(!0)
  , af = Hc({
  name: "ScrollView",
  compatConfig: {
    MODE: 3
  },
  props: {
    scrollX: {
      type: [Boolean, String],
      default: !1
    },
    scrollY: {
      type: [Boolean, String],
      default: !1
    },
    upperThreshold: {
      type: [Number, String],
      default: 50
    },
    lowerThreshold: {
      type: [Number, String],
      default: 50
    },
    scrollTop: {
      type: [Number, String],
      default: 0
    },
    scrollLeft: {
      type: [Number, String],
      default: 0
    },
    scrollIntoView: {
      type: String,
      default: ""
    },
    scrollWithAnimation: {
      type: [Boolean, String],
      default: !1
    },
    enableBackToTop: {
      type: [Boolean, String],
      default: !1
    },
    refresherEnabled: {
      type: [Boolean, String],
      default: !1
    },
    refresherThreshold: {
      type: Number,
      default: 45
    },
    refresherDefaultStyle: {
      type: String,
      default: "back"
    },
    refresherBackground: {
      type: String,
      default: "#fff"
    },
    refresherTriggered: {
      type: [Boolean, String],
      default: !1
    }
  },
  emits: ["scroll", "scrolltoupper", "scrolltolower", "refresherrefresh", "refresherrestore", "refresherpulling", "refresherabort", "update:refresherTriggered"],
  setup(e, {emit: t, slots: n}) {
    const o = Zt(null)
      , r = Zt(null)
      , i = Zt(null)
      , a = Zt(null)
      , s = Zt(null)
      , l = Yc(o, t)
      , {state: c, scrollTopNumber: u, scrollLeftNumber: d} = function(e) {
      const t = pi((()=>Number(e.scrollTop) || 0))
        , n = pi((()=>Number(e.scrollLeft) || 0));
      return {
        state: Dt({
          lastScrollTop: t.value,
          lastScrollLeft: n.value,
          lastScrollToUpperTime: 0,
          lastScrollToLowerTime: 0,
          refresherHeight: 0,
          refreshRotate: 0,
          refreshState: ""
        }),
        scrollTopNumber: t,
        scrollLeftNumber: n
      }
    }(e);
    !function(e, t, n, o, r, i, a, s, l) {
      let c = !1
        , u = 0
        , d = !1
        , f = ()=>{}
      ;
      const p = pi((()=>{
          let t = Number(e.upperThreshold);
          return isNaN(t) ? 50 : t
        }
      ))
        , h = pi((()=>{
          let t = Number(e.lowerThreshold);
          return isNaN(t) ? 50 : t
        }
      ));
      function m(e, t) {
        const n = a.value;
        let o = 0
          , r = "";
        if (e < 0 ? e = 0 : "x" === t && e > n.scrollWidth - n.offsetWidth ? e = n.scrollWidth - n.offsetWidth : "y" === t && e > n.scrollHeight - n.offsetHeight && (e = n.scrollHeight - n.offsetHeight),
          "x" === t ? o = n.scrollLeft - e : "y" === t && (o = n.scrollTop - e),
        0 === o)
          return;
        let i = s.value;
        i.style.transition = "transform .3s ease-out",
          i.style.webkitTransition = "-webkit-transform .3s ease-out",
          "x" === t ? r = "translateX(" + o + "px) translateZ(0)" : "y" === t && (r = "translateY(" + o + "px) translateZ(0)"),
          i.removeEventListener("transitionend", f),
          i.removeEventListener("webkitTransitionEnd", f),
          f = ()=>_(e, t),
          i.addEventListener("transitionend", f),
          i.addEventListener("webkitTransitionEnd", f),
          "x" === t ? n.style.overflowX = "hidden" : "y" === t && (n.style.overflowY = "hidden"),
          i.style.transform = r,
          i.style.webkitTransform = r
      }
      function g(n) {
        const o = n.target;
        r("scroll", n, {
          scrollLeft: o.scrollLeft,
          scrollTop: o.scrollTop,
          scrollHeight: o.scrollHeight,
          scrollWidth: o.scrollWidth,
          deltaX: t.lastScrollLeft - o.scrollLeft,
          deltaY: t.lastScrollTop - o.scrollTop
        }),
        e.scrollY && (o.scrollTop <= p.value && t.lastScrollTop - o.scrollTop > 0 && n.timeStamp - t.lastScrollToUpperTime > 200 && (r("scrolltoupper", n, {
          direction: "top"
        }),
          t.lastScrollToUpperTime = n.timeStamp),
        o.scrollTop + o.offsetHeight + h.value >= o.scrollHeight && t.lastScrollTop - o.scrollTop < 0 && n.timeStamp - t.lastScrollToLowerTime > 200 && (r("scrolltolower", n, {
          direction: "bottom"
        }),
          t.lastScrollToLowerTime = n.timeStamp)),
        e.scrollX && (o.scrollLeft <= p.value && t.lastScrollLeft - o.scrollLeft > 0 && n.timeStamp - t.lastScrollToUpperTime > 200 && (r("scrolltoupper", n, {
          direction: "left"
        }),
          t.lastScrollToUpperTime = n.timeStamp),
        o.scrollLeft + o.offsetWidth + h.value >= o.scrollWidth && t.lastScrollLeft - o.scrollLeft < 0 && n.timeStamp - t.lastScrollToLowerTime > 200 && (r("scrolltolower", n, {
          direction: "right"
        }),
          t.lastScrollToLowerTime = n.timeStamp)),
          t.lastScrollTop = o.scrollTop,
          t.lastScrollLeft = o.scrollLeft
      }
      function v(t) {
        e.scrollY && (e.scrollWithAnimation ? m(t, "y") : a.value.scrollTop = t)
      }
      function y(t) {
        e.scrollX && (e.scrollWithAnimation ? m(t, "x") : a.value.scrollLeft = t)
      }
      function b(t) {
        if (t) {
          if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))
            return void console.error(`id error: scroll-into-view=${t}`);
          let n = i.value.querySelector("#" + t);
          if (n) {
            let t = a.value.getBoundingClientRect()
              , o = n.getBoundingClientRect();
            if (e.scrollX) {
              let n = o.left - t.left
                , r = a.value.scrollLeft + n;
              e.scrollWithAnimation ? m(r, "x") : a.value.scrollLeft = r
            }
            if (e.scrollY) {
              let n = o.top - t.top
                , r = a.value.scrollTop + n;
              e.scrollWithAnimation ? m(r, "y") : a.value.scrollTop = r
            }
          }
        }
      }
      function _(t, n) {
        s.value.style.transition = "",
          s.value.style.webkitTransition = "",
          s.value.style.transform = "",
          s.value.style.webkitTransform = "";
        let o = a.value;
        "x" === n ? (o.style.overflowX = e.scrollX ? "auto" : "hidden",
          o.scrollLeft = t) : "y" === n && (o.style.overflowY = e.scrollY ? "auto" : "hidden",
          o.scrollTop = t),
          s.value.removeEventListener("transitionend", f),
          s.value.removeEventListener("webkitTransitionEnd", f)
      }
      function w(n) {
        if (e.refresherEnabled) {
          switch (n) {
            case "refreshing":
              t.refresherHeight = e.refresherThreshold,
              c || (c = !0,
                r("refresherrefresh", {}, {}),
                l("update:refresherTriggered", !0));
              break;
            case "restore":
            case "refresherabort":
              c = !1,
                t.refresherHeight = u = 0,
              "restore" === n && (d = !1,
                r("refresherrestore", {}, {})),
              "refresherabort" === n && d && (d = !1,
                r("refresherabort", {}, {}))
          }
          t.refreshState = n
        }
      }
      ko((()=>{
          _n((()=>{
              v(n.value),
                y(o.value)
            }
          )),
            b(e.scrollIntoView);
          let i = function(e) {
            e.preventDefault(),
              e.stopPropagation(),
              g(e)
          }
            , s = {
            x: 0,
            y: 0
          }
            , l = null
            , f = function(n) {
            if (null === s)
              return;
            let o = n.touches[0].pageX
              , i = n.touches[0].pageY
              , f = a.value;
            if (Math.abs(o - s.x) > Math.abs(i - s.y))
              if (e.scrollX) {
                if (0 === f.scrollLeft && o > s.x)
                  return void (l = !1);
                if (f.scrollWidth === f.offsetWidth + f.scrollLeft && o < s.x)
                  return void (l = !1);
                l = !0
              } else
                l = !1;
            else if (e.scrollY)
              if (0 === f.scrollTop && i > s.y)
                l = !1,
                e.refresherEnabled && !1 !== n.cancelable && n.preventDefault();
              else {
                if (f.scrollHeight === f.offsetHeight + f.scrollTop && i < s.y)
                  return void (l = !1);
                l = !0
              }
            else
              l = !1;
            if (l && n.stopPropagation(),
            0 === f.scrollTop && 1 === n.touches.length && w("pulling"),
            e.refresherEnabled && "pulling" === t.refreshState) {
              const o = i - s.y;
              0 === u && (u = i),
                c ? (t.refresherHeight = o + e.refresherThreshold,
                  d = !1) : (t.refresherHeight = i - u,
                t.refresherHeight > 0 && (d = !0,
                  r("refresherpulling", n, {
                    deltaY: o
                  })));
              const a = t.refresherHeight / e.refresherThreshold;
              t.refreshRotate = 360 * (a > 1 ? 1 : a)
            }
          }
            , p = function(e) {
            1 === e.touches.length && (s = {
              x: e.touches[0].pageX,
              y: e.touches[0].pageY
            })
          }
            , h = function(n) {
            s = null,
              t.refresherHeight >= e.refresherThreshold ? w("refreshing") : w("refresherabort")
          };
          a.value.addEventListener("touchstart", p, rf),
            a.value.addEventListener("touchmove", f, pe(!1)),
            a.value.addEventListener("scroll", i, pe(!1)),
            a.value.addEventListener("touchend", h, rf),
            Oo((()=>{
                a.value.removeEventListener("touchstart", p),
                  a.value.removeEventListener("touchmove", f),
                  a.value.removeEventListener("scroll", i),
                  a.value.removeEventListener("touchend", h)
              }
            ))
        }
      )),
        mo((()=>{
            e.scrollY && (a.value.scrollTop = t.lastScrollTop),
            e.scrollX && (a.value.scrollLeft = t.lastScrollLeft)
          }
        )),
        zn(n, (e=>{
            v(e)
          }
        )),
        zn(o, (e=>{
            y(e)
          }
        )),
        zn((()=>e.scrollIntoView), (e=>{
            b(e)
          }
        )),
        zn((()=>e.refresherTriggered), (e=>{
            !0 === e ? w("refreshing") : !1 === e && w("restore")
          }
        ))
    }(e, c, u, d, l, o, r, a, t);
    const f = pi((()=>{
        let t = "";
        return e.scrollX ? t += "overflow-x:auto;" : t += "overflow-x:hidden;",
          e.scrollY ? t += "overflow-y:auto;" : t += "overflow-y:hidden;",
          t
      }
    ));
    return ()=>{
      const {refresherEnabled: t, refresherBackground: l, refresherDefaultStyle: u} = e
        , {refresherHeight: d, refreshState: p, refreshRotate: h} = c;
      return Ur("uni-scroll-view", {
        ref: o
      }, [Ur("div", {
        ref: i,
        class: "uni-scroll-view"
      }, [Ur("div", {
        ref: r,
        style: f.value,
        class: "uni-scroll-view"
      }, [Ur("div", {
        ref: a,
        class: "uni-scroll-view-content"
      }, [t ? Ur("div", {
        ref: s,
        style: {
          backgroundColor: l,
          height: d + "px"
        },
        class: "uni-scroll-view-refresher"
      }, ["none" !== u ? Ur("div", {
        class: "uni-scroll-view-refresh"
      }, [Ur("div", {
        class: "uni-scroll-view-refresh-inner"
      }, ["pulling" == p ? Ur("svg", {
        key: "refresh__icon",
        style: {
          transform: "rotate(" + h + "deg)"
        },
        fill: "#2BD009",
        class: "uni-scroll-view-refresh__icon",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, [Ur("path", {
        d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      }, null), Ur("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }, null)], 4) : null, "refreshing" == p ? Ur("svg", {
        key: "refresh__spinner",
        class: "uni-scroll-view-refresh__spinner",
        width: "24",
        height: "24",
        viewBox: "25 25 50 50"
      }, [Ur("circle", {
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        style: "color: #2bd009",
        "stroke-width": "3"
      }, null)]) : null])]) : null, "none" == u ? n.refresher && n.refresher() : null], 4) : null, n.default && n.default()], 512)], 4)], 512)], 512)
    }
  }
});
function sf(e, t, n, o, r, i) {
  function a() {
    c && (clearTimeout(c),
      c = null)
  }
  let s, l, c = null, u = !0, d = 0, f = 1, p = null, h = !1, m = 0, g = "";
  const v = pi((()=>n.value.length > t.displayMultipleItems))
    , y = pi((()=>e.circular && v.value));
  function b(r) {
    Math.floor(2 * d) === Math.floor(2 * r) && Math.ceil(2 * d) === Math.ceil(2 * r) || y.value && function(o) {
      if (!u)
        for (let r = n.value, i = r.length, a = o + t.displayMultipleItems, s = 0; s < i; s++) {
          const t = r[s]
            , n = Math.floor(o / i) * i + s
            , l = n + i
            , c = n - i
            , u = Math.max(o - (n + 1), n - a, 0)
            , d = Math.max(o - (l + 1), l - a, 0)
            , f = Math.max(o - (c + 1), c - a, 0)
            , p = Math.min(u, d, f)
            , h = [n, l, c][[u, d, f].indexOf(p)];
          t.updatePosition(h, e.vertical)
        }
    }(r);
    const a = "translate(" + (e.vertical ? "0" : 100 * -r * f + "%") + ", " + (e.vertical ? 100 * -r * f + "%" : "0") + ") translateZ(0)"
      , l = o.value;
    if (l && (l.style.webkitTransform = a,
      l.style.transform = a),
      d = r,
      !s) {
      if (r % 1 == 0)
        return;
      s = r
    }
    r -= Math.floor(s);
    const c = n.value;
    r <= -(c.length - 1) ? r += c.length : r >= c.length && (r -= c.length),
      r = s % 1 > .5 || s < 0 ? r - 1 : r,
      i("transition", {}, {
        dx: e.vertical ? 0 : r * l.offsetWidth,
        dy: e.vertical ? r * l.offsetHeight : 0
      })
  }
  function _(e) {
    const o = n.value.length;
    if (!o)
      return -1;
    const r = (Math.round(e) % o + o) % o;
    if (y.value) {
      if (o <= t.displayMultipleItems)
        return 0
    } else if (r > o - t.displayMultipleItems)
      return o - t.displayMultipleItems;
    return r
  }
  function w() {
    p = null
  }
  function S() {
    if (!p)
      return void (h = !1);
    const e = p
      , o = e.toPos
      , r = e.acc
      , a = e.endTime
      , c = e.source
      , u = a - Date.now();
    if (u <= 0) {
      b(o),
        p = null,
        h = !1,
        s = null;
      const e = n.value[t.current];
      if (e) {
        const n = e.getItemId();
        i("animationfinish", {}, {
          current: t.current,
          currentItemId: n,
          source: c
        })
      }
      return
    }
    b(o + r * u * u / 2),
      l = requestAnimationFrame(S)
  }
  function T(e, o, r) {
    w();
    const i = t.duration
      , a = n.value.length;
    let s = d;
    if (y.value)
      if (r < 0) {
        for (; s < e; )
          s += a;
        for (; s - a > e; )
          s -= a
      } else if (r > 0) {
        for (; s > e; )
          s -= a;
        for (; s + a < e; )
          s += a;
        s + a - e < e - s && (s += a)
      } else {
        for (; s + a < e; )
          s += a;
        for (; s - a > e; )
          s -= a;
        s + a - e < e - s && (s += a)
      }
    else
      "click" === o && (e = e + t.displayMultipleItems - 1 < a ? e : 0);
    p = {
      toPos: e,
      acc: 2 * (s - e) / (i * i),
      endTime: Date.now() + i,
      source: o
    },
    h || (h = !0,
      l = requestAnimationFrame(S))
  }
  function x() {
    a();
    const e = n.value
      , o = function() {
      c = null,
        g = "autoplay",
        y.value ? t.current = _(t.current + 1) : t.current = t.current + t.displayMultipleItems < e.length ? t.current + 1 : 0,
        T(t.current, "autoplay", y.value ? 1 : 0),
        c = setTimeout(o, t.interval)
    };
    u || e.length <= t.displayMultipleItems || (c = setTimeout(o, t.interval))
  }
  function C(e) {
    e ? x() : a()
  }
  return zn([()=>e.current, ()=>e.currentItemId, ()=>[...n.value]], (()=>{
      let o = -1;
      if (e.currentItemId)
        for (let t = 0, r = n.value; t < r.length; t++) {
          if (r[t].getItemId() === e.currentItemId) {
            o = t;
            break
          }
        }
      o < 0 && (o = Math.round(e.current) || 0),
        o = o < 0 ? 0 : o,
      t.current !== o && (g = "",
        t.current = o)
    }
  )),
    zn([()=>e.vertical, ()=>y.value, ()=>t.displayMultipleItems, ()=>[...n.value]], (function() {
        a(),
        p && (b(p.toPos),
          p = null);
        const r = n.value;
        for (let t = 0; t < r.length; t++)
          r[t].updatePosition(t, e.vertical);
        f = 1;
        const i = o.value;
        if (1 === t.displayMultipleItems && r.length) {
          const e = r[0].getBoundingClientRect()
            , t = i.getBoundingClientRect();
          f = e.width / t.width,
          f > 0 && f < 1 || (f = 1)
        }
        const s = d;
        d = -2;
        const l = t.current;
        l >= 0 ? (u = !1,
          t.userTracking ? (b(s + l - m),
            m = l) : (b(l),
          e.autoplay && x())) : (u = !0,
          b(-t.displayMultipleItems - 1))
      }
    )),
    zn((()=>t.interval), (()=>{
        c && (a(),
          x())
      }
    )),
    zn((()=>t.current), ((e,o)=>{
        !function(e, o) {
          const r = g;
          g = "";
          const a = n.value;
          if (!r) {
            const t = a.length;
            T(e, "", y.value && o + (t - e) % t > t / 2 ? 1 : 0)
          }
          const s = a[e];
          if (s) {
            const e = t.currentItemId = s.getItemId();
            i("change", {}, {
              current: t.current,
              currentItemId: e,
              source: r
            })
          }
        }(e, o),
          r("update:current", e)
      }
    )),
    zn((()=>t.currentItemId), (e=>{
        r("update:currentItemId", e)
      }
    )),
    zn((()=>e.autoplay && !t.userTracking), C),
    C(e.autoplay && !t.userTracking),
    ko((()=>{
        let r = !1
          , i = 0
          , s = 0;
        function l(e) {
          t.userTracking = !1;
          const n = i / Math.abs(i);
          let o = 0;
          !e && Math.abs(i) > .2 && (o = .5 * n);
          const r = _(d + o);
          e ? b(m) : (g = "touch",
            t.current = r,
            T(r, "touch", 0 !== o ? o : 0 === r && y.value && d >= 1 ? 1 : 0))
        }
        !function(e, t, n) {
          Oo((()=>{
              document.removeEventListener("mousemove", Zd),
                document.removeEventListener("mouseup", Qd)
            }
          ));
          let o = 0
            , r = 0
            , i = 0
            , a = 0;
          const s = function(e, n, s, l) {
            if (!1 === t({
              cancelable: e.cancelable,
              target: e.target,
              currentTarget: e.currentTarget,
              preventDefault: e.preventDefault.bind(e),
              stopPropagation: e.stopPropagation.bind(e),
              touches: e.touches,
              changedTouches: e.changedTouches,
              detail: {
                state: n,
                x: s,
                y: l,
                dx: s - o,
                dy: l - r,
                ddx: s - i,
                ddy: l - a,
                timeStamp: e.timeStamp
              }
            }))
              return !1
          };
          let l, c, u = null;
          Kd(e, "touchstart", (function(e) {
              if (l = !0,
              1 === e.touches.length && !u)
                return u = e,
                  o = i = e.touches[0].pageX,
                  r = a = e.touches[0].pageY,
                  s(e, "start", o, r)
            }
          )),
            Kd(e, "mousedown", (function(e) {
                if (c = !0,
                !l && !u)
                  return u = e,
                    o = i = e.pageX,
                    r = a = e.pageY,
                    s(e, "start", o, r)
              }
            )),
            Kd(e, "touchmove", (function(e) {
                if (1 === e.touches.length && u) {
                  const t = s(e, "move", e.touches[0].pageX, e.touches[0].pageY);
                  return i = e.touches[0].pageX,
                    a = e.touches[0].pageY,
                    t
                }
              }
            ));
          const d = Zd = function(e) {
              if (!l && c && u) {
                const t = s(e, "move", e.pageX, e.pageY);
                return i = e.pageX,
                  a = e.pageY,
                  t
              }
            }
          ;
          document.addEventListener("mousemove", d),
            Kd(e, "touchend", (function(e) {
                if (0 === e.touches.length && u)
                  return l = !1,
                    u = null,
                    s(e, "end", e.changedTouches[0].pageX, e.changedTouches[0].pageY)
              }
            ));
          const f = Qd = function(e) {
              if (c = !1,
              !l && u)
                return u = null,
                  s(e, "end", e.pageX, e.pageY)
            }
          ;
          document.addEventListener("mouseup", f),
            Kd(e, "touchcancel", (function(e) {
                if (u) {
                  l = !1;
                  const t = u;
                  return u = null,
                    s(e, n ? "cancel" : "end", t.touches[0].pageX, t.touches[0].pageY)
                }
              }
            ))
        }(o.value, (c=>{
            if (!e.disableTouch && !u) {
              if ("start" === c.detail.state)
                return t.userTracking = !0,
                  r = !1,
                  a(),
                  m = d,
                  i = 0,
                  s = Date.now(),
                  void w();
              if ("end" === c.detail.state)
                return l(!1);
              if ("cancel" === c.detail.state)
                return l(!0);
              if (t.userTracking) {
                if (!r) {
                  r = !0;
                  const n = Math.abs(c.detail.dx)
                    , o = Math.abs(c.detail.dy);
                  if ((n >= o && e.vertical || n <= o && !e.vertical) && (t.userTracking = !1),
                    !t.userTracking)
                    return void (e.autoplay && x())
                }
                return function(r) {
                  const a = s;
                  s = Date.now();
                  const l = n.value.length - t.displayMultipleItems;
                  function c(e) {
                    return .5 - .25 / (e + .5)
                  }
                  function u(e, t) {
                    let n = m + e;
                    i = .6 * i + .4 * t,
                    y.value || (n < 0 || n > l) && (n < 0 ? n = -c(-n) : n > l && (n = l + c(n - l)),
                      i = 0),
                      b(n)
                  }
                  const d = s - a || 1
                    , f = o.value;
                  e.vertical ? u(-r.dy / f.offsetHeight, -r.ddy / d) : u(-r.dx / f.offsetWidth, -r.ddx / d)
                }(c.detail),
                  !1
              }
            }
          }
        ))
      }
    )),
    Ao((()=>{
        a(),
          cancelAnimationFrame(l)
      }
    )),
    {
      onSwiperDotClick: function(e) {
        T(t.current = e, g = "click", y.value ? 1 : 0)
      },
      circularEnabled: y,
      swiperEnabled: v
    }
}
const lf = Hc({
  name: "Swiper",
  props: {
    indicatorDots: {
      type: [Boolean, String],
      default: !1
    },
    vertical: {
      type: [Boolean, String],
      default: !1
    },
    autoplay: {
      type: [Boolean, String],
      default: !1
    },
    circular: {
      type: [Boolean, String],
      default: !1
    },
    interval: {
      type: [Number, String],
      default: 5e3
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    current: {
      type: [Number, String],
      default: 0
    },
    indicatorColor: {
      type: String,
      default: ""
    },
    indicatorActiveColor: {
      type: String,
      default: ""
    },
    previousMargin: {
      type: String,
      default: ""
    },
    nextMargin: {
      type: String,
      default: ""
    },
    currentItemId: {
      type: String,
      default: ""
    },
    skipHiddenItemLayout: {
      type: [Boolean, String],
      default: !1
    },
    displayMultipleItems: {
      type: [Number, String],
      default: 1
    },
    disableTouch: {
      type: [Boolean, String],
      default: !1
    },
    navigation: {
      type: [Boolean, String],
      default: !1
    },
    navigationColor: {
      type: String,
      default: "#fff"
    },
    navigationActiveColor: {
      type: String,
      default: "rgba(53, 53, 53, 0.6)"
    }
  },
  emits: ["change", "transition", "animationfinish", "update:current", "update:currentItemId"],
  setup(e, {slots: t, emit: n}) {
    const o = Zt(null)
      , r = Yc(o, n)
      , i = Zt(null)
      , a = Zt(null)
      , s = function(e) {
      return Dt({
        interval: pi((()=>{
            const t = Number(e.interval);
            return isNaN(t) ? 5e3 : t
          }
        )),
        duration: pi((()=>{
            const t = Number(e.duration);
            return isNaN(t) ? 500 : t
          }
        )),
        displayMultipleItems: pi((()=>{
            const t = Math.round(e.displayMultipleItems);
            return isNaN(t) ? 1 : t
          }
        )),
        current: Math.round(e.current) || 0,
        currentItemId: e.currentItemId,
        userTracking: !1
      })
    }(e)
      , l = pi((()=>{
        let t = {};
        return (e.nextMargin || e.previousMargin) && (t = e.vertical ? {
          left: 0,
          right: 0,
          top: Ql(e.previousMargin, !0),
          bottom: Ql(e.nextMargin, !0)
        } : {
          top: 0,
          bottom: 0,
          left: Ql(e.previousMargin, !0),
          right: Ql(e.nextMargin, !0)
        }),
          t
      }
    ))
      , c = pi((()=>{
        const t = Math.abs(100 / s.displayMultipleItems) + "%";
        return {
          width: e.vertical ? "100%" : t,
          height: e.vertical ? t : "100%"
        }
      }
    ));
    let u = [];
    const d = []
      , f = Zt([]);
    function p() {
      const e = [];
      for (let t = 0; t < u.length; t++) {
        let n = u[t];
        n instanceof Element || (n = n.el);
        const o = d.find((e=>n === e.rootRef.value));
        o && e.push(Ut(o))
      }
      f.value = e
    }
    Vn("addSwiperContext", (function(e) {
        d.push(e),
          p()
      }
    ));
    Vn("removeSwiperContext", (function(e) {
        const t = d.indexOf(e);
        t >= 0 && (d.splice(t, 1),
          p())
      }
    ));
    const {onSwiperDotClick: h, circularEnabled: m, swiperEnabled: g} = sf(e, s, f, a, n, r);
    let v = ()=>null;
    return v = cf(o, e, s, h, f, m, g),
      ()=>{
        const n = t.default && t.default();
        return u = Jd(n),
          Ur("uni-swiper", {
            ref: o
          }, [Ur("div", {
            ref: i,
            class: "uni-swiper-wrapper"
          }, [Ur("div", {
            class: "uni-swiper-slides",
            style: l.value
          }, [Ur("div", {
            ref: a,
            class: "uni-swiper-slide-frame",
            style: c.value
          }, [n], 4)], 4), e.indicatorDots && Ur("div", {
            class: ["uni-swiper-dots", e.vertical ? "uni-swiper-dots-vertical" : "uni-swiper-dots-horizontal"]
          }, [f.value.map(((t,n,o)=>Ur("div", {
            onClick: ()=>h(n),
            class: {
              "uni-swiper-dot": !0,
              "uni-swiper-dot-active": n < s.current + s.displayMultipleItems && n >= s.current || n < s.current + s.displayMultipleItems - o.length
            },
            style: {
              background: n === s.current ? e.indicatorActiveColor : e.indicatorColor
            }
          }, null, 14, ["onClick"])))], 2), v()], 512)], 512)
      }
  }
})
  , cf = (e,t,n,o,r,i,a)=>{
  let s = !1
    , l = !1
    , c = !1
    , u = Zt(!1);
  function d(e, n) {
    const o = e.currentTarget;
    o && (o.style.backgroundColor = "over" === n ? t.navigationActiveColor : "")
  }
  Hn((()=>{
      s = "auto" === t.navigation,
        u.value = !0 !== t.navigation || s,
        y()
    }
  )),
    Hn((()=>{
        const e = r.value.length
          , t = !i.value;
        l = 0 === n.current && t,
          c = n.current === e - 1 && t || t && n.current + n.displayMultipleItems >= e,
        a.value || (l = !0,
          c = !0,
        s && (u.value = !0))
      }
    ));
  const f = {
    onMouseover: e=>d(e, "over"),
    onMouseout: e=>d(e, "out")
  };
  function p(e, t, a) {
    if (e.stopPropagation(),
      a)
      return;
    const s = r.value.length;
    let l = n.current;
    switch (t) {
      case "prev":
        l--,
        l < 0 && i.value && (l = s - 1);
        break;
      case "next":
        l++,
        l >= s && i.value && (l = 0)
    }
    o(l)
  }
  const h = ()=>nc("M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z", t.navigationColor, 26);
  let m;
  const g = n=>{
      clearTimeout(m);
      const {clientX: o, clientY: r} = n
        , {left: i, right: a, top: s, bottom: l, width: c, height: d} = e.value.getBoundingClientRect();
      let f = !1;
      if (f = t.vertical ? !(r - s < d / 3 || l - r < d / 3) : !(o - i < c / 3 || a - o < c / 3),
        f)
        return m = setTimeout((()=>{
            u.value = f
          }
        ), 300);
      u.value = f
    }
    , v = ()=>{
      u.value = !0
    }
  ;
  function y() {
    e.value && (e.value.removeEventListener("mousemove", g),
      e.value.removeEventListener("mouseleave", v),
    s && (e.value.addEventListener("mousemove", g),
      e.value.addEventListener("mouseleave", v)))
  }
  return ko(y),
    function() {
      const e = {
        "uni-swiper-navigation-hide": u.value,
        "uni-swiper-navigation-vertical": t.vertical
      };
      return t.navigation ? Ur(Pr, null, [Ur("div", Qr({
        class: ["uni-swiper-navigation uni-swiper-navigation-prev", w({
          "uni-swiper-navigation-disabled": l
        }, e)],
        onClick: e=>p(e, "prev", l)
      }, f), [h()], 16, ["onClick"]), Ur("div", Qr({
        class: ["uni-swiper-navigation uni-swiper-navigation-next", w({
          "uni-swiper-navigation-disabled": c
        }, e)],
        onClick: e=>p(e, "next", c)
      }, f), [h()], 16, ["onClick"])]) : null
    }
}
  , uf = Hc({
  name: "SwiperItem",
  props: {
    itemId: {
      type: String,
      default: ""
    }
  },
  setup(e, {slots: t}) {
    const n = Zt(null)
      , o = {
      rootRef: n,
      getItemId: ()=>e.itemId,
      getBoundingClientRect: ()=>n.value.getBoundingClientRect(),
      updatePosition(e, t) {
        const o = t ? "0" : 100 * e + "%"
          , r = t ? 100 * e + "%" : "0"
          , i = n.value
          , a = `translate(${o},${r}) translateZ(0)`;
        i && (i.style.webkitTransform = a,
          i.style.transform = a)
      }
    };
    return ko((()=>{
        const e = qn("addSwiperContext");
        e && e(o)
      }
    )),
      Ao((()=>{
          const e = qn("removeSwiperContext");
          e && e(o)
        }
      )),
      ()=>Ur("uni-swiper-item", {
        ref: n,
        style: {
          position: "absolute",
          width: "100%",
          height: "100%"
        }
      }, [t.default && t.default()], 512)
  }
})
  , df = {
  ensp: " ",
  emsp: " ",
  nbsp: " "
};
function ff(e, t) {
  return e.replace(/\\n/g, "\n").split("\n").map((e=>function(e, {space: t, decode: n}) {
    if (!e)
      return e;
    t && df[t] && (e = e.replace(/ /g, df[t]));
    if (!n)
      return e;
    return e.replace(/&nbsp;/g, df.nbsp).replace(/&ensp;/g, df.ensp).replace(/&emsp;/g, df.emsp).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  }(e, t)))
}
const pf = Hc({
  name: "Text",
  props: {
    selectable: {
      type: [Boolean, String],
      default: !1
    },
    space: {
      type: String,
      default: ""
    },
    decode: {
      type: [Boolean, String],
      default: !1
    }
  },
  setup: (e,{slots: t})=>()=>{
    const n = [];
    return t.default && t.default().forEach((t=>{
        if (8 & t.shapeFlag && t.type !== Or) {
          const o = ff(t.children, {
            space: e.space,
            decode: e.decode
          })
            , r = o.length - 1;
          o.forEach(((e,t)=>{
              (0 !== t || e) && n.push(Yr(e)),
              t !== r && n.push(Ur("br"))
            }
          ))
        } else
          n.push(t)
      }
    )),
      Ur("uni-text", {
        selectable: !!e.selectable || null
      }, [Ur("span", null, n)], 8, ["selectable"])
  }
})
  , hf = Hc({
  name: "View",
  props: w({}, zc),
  setup(e, {slots: t}) {
    const {hovering: n, binding: o} = Uc(e);
    return ()=>{
      const r = e.hoverClass;
      return r && "none" !== r ? Ur("uni-view", Qr({
        class: n.value ? r : ""
      }, o), [t.default && t.default()], 16) : Ur("uni-view", null, [t.default && t.default()])
    }
  }
});
function mf(e, t) {
  if (t || (t = e.id),
    t)
    return e.$options.name.toLowerCase() + "." + t
}
function gf(e, t, n) {
  e && Tl(n || ac(), e, (({type: e, data: n},o)=>{
      t(e, n, o)
    }
  ))
}
function vf(e, t) {
  e && function(e, t) {
    t = Sl(e, t),
      delete wl[t]
  }(t || ac(), e)
}
let yf = 0;
function bf(e, t, n, o) {
  L(t) && xo(e, t.bind(n), o)
}
function _f(e, t, n) {
  var o;
  const r = e.mpType || n.$mpType;
  if (r && "component" !== r && (Object.keys(e).forEach((o=>{
      if (function(e, t, n=!0) {
        return !(n && !L(t)) && (Te.indexOf(e) > -1 || 0 === e.indexOf("on"))
      }(o, e[o], !1)) {
        const r = e[o];
        C(r) ? r.forEach((e=>bf(o, e, n, t))) : bf(o, r, n, t)
      }
    }
  )),
  "page" === r)) {
    t.__isVisible = !0;
    try {
      uc(n, "onLoad", t.attrs.__pageQuery),
        delete t.attrs.__pageQuery,
      "preloadPage" !== (null == (o = n.$page) ? void 0 : o.openType) && uc(n, "onShow")
    } catch (i) {
      console.error(i.message + "\n" + i.stack)
    }
  }
}
function wf(e, t, n) {
  _f(e, t, n)
}
function Sf(e, t, n) {
  return e[t] = n
}
function Tf(e) {
  return function(t, n, o) {
    if (!n)
      throw t;
    const r = e._instance;
    if (!r || !r.proxy)
      throw t;
    uc(r.proxy, "onError", t)
  }
}
function xf(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Cf(e) {
  const t = e._context.config;
  var n;
  t.errorHandler = Ce(e, Tf),
    n = t.optionMergeStrategies,
    Te.forEach((e=>{
        n[e] = xf
      }
    ));
  const o = t.globalProperties;
  o.$set = Sf,
    o.$applyOptions = wf,
    function(e) {
      xe.forEach((t=>t(e)))
    }(e)
}
const Ef = Kl("upm");
function kf() {
  return qn(Ef)
}
function Pf(e) {
  const t = function(e) {
    return Dt(function(e) {
      if (history.state) {
        const t = history.state.__type__;
        "redirectTo" !== t && "reLaunch" !== t || 0 !== Df().length || (e.isEntry = !0,
          e.isQuit = !0)
      }
      return e
    }(JSON.parse(JSON.stringify(cc(ul().meta, e)))))
  }(e);
  return Vn(Ef, t),
    t
}
function Lf() {
  return ul()
}
function Of() {
  return history.state && history.state.__id__ || 1
}
const Af = window.CSS && window.CSS.supports;
function Bf(e) {
  return Af && (Af(e) || Af.apply(window.CSS, e.split(":")))
}
const $f = Bf("top:env(a)")
  , If = Bf("top:constant(a)")
  , Nf = (()=>$f ? "env" : If ? "constant" : "")();
function Mf(e) {
  var t, n;
  Jl({
    "--window-top": (n = 0,
      Nf ? `calc(${n}px + ${Nf}(safe-area-inset-top))` : `${n}px`),
    "--window-bottom": (t = 0,
      Nf ? `calc(${t}px + ${Nf}(safe-area-inset-bottom))` : `${t}px`)
  })
}
const Rf = new Map;
function Df() {
  const e = []
    , t = Rf.values();
  for (const n of t)
    n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
  return e
}
function jf(e, t=!0) {
  const n = Rf.get(e);
  n.$.__isUnload = !0,
    uc(n, "onUnload"),
    Rf.delete(e),
  t && function(e) {
    const t = Wf.get(e);
    t && (Wf.delete(e),
      zf.pruneCacheEntry(t))
  }(e)
}
let Ff = Of();
function Vf(e) {
  const t = kf();
  let n = e.fullPath;
  return e.meta.isEntry && -1 === n.indexOf(e.meta.route) && (n = "/" + e.meta.route + n.replace("/", "")),
    function(e, t, n, o, r, i) {
      const {id: a, route: s} = o
        , l = Le(o.navigationBar, __uniConfig.themeConfig, i).titleColor;
      return {
        id: a,
        path: se(s),
        route: s,
        fullPath: t,
        options: n,
        meta: o,
        openType: e,
        eventChannel: r,
        statusBarStyle: "#ffffff" === l ? "light" : "dark"
      }
    }("navigateTo", n, {}, t)
}
function qf(e) {
  const t = Vf(e.$route);
  !function(e, t) {
    e.route = t.route,
      e.$vm = e,
      e.$page = t,
      e.$mpType = "page",
    t.meta.isTabBar && (e.$.__isTabBar = !0,
      e.$.__isActive = !0)
  }(e, t),
    Rf.set(Hf(t.path, t.id), e)
}
function Hf(e, t) {
  return e + "$$" + t
}
const Wf = new Map
  , zf = {
  get: e=>Wf.get(e),
  set(e, t) {
    !function(e) {
      const t = parseInt(e.split("$$")[1]);
      if (!t)
        return;
      zf.forEach(((e,n)=>{
          const o = parseInt(n.split("$$")[1]);
          o && o > t && (zf.delete(n),
            zf.pruneCacheEntry(e),
            _n((()=>{
                Rf.forEach(((e,t)=>{
                    e.$.isUnmounted && Rf.delete(t)
                  }
                ))
              }
            )))
        }
      ))
    }(e),
      Wf.set(e, t)
  },
  delete(e) {
    Wf.get(e) && Wf.delete(e)
  },
  forEach(e) {
    Wf.forEach(e)
  }
};
function Uf(e, t) {
  !function(e) {
    const t = Yf(e)
      , {body: n} = document;
    Gf && n.removeAttribute(Gf),
    t && n.setAttribute(t, ""),
      Gf = t
  }(e),
    Mf(),
    function(e) {
      const t = "nvue-dir-" + __uniConfig.nvue["flex-direction"];
      e.isNVue ? (document.body.setAttribute("nvue", ""),
        document.body.setAttribute(t, "")) : (document.body.removeAttribute("nvue"),
        document.body.removeAttribute(t))
    }(t),
    function(e, t) {
      document.removeEventListener("touchmove", dc),
      Jf && document.removeEventListener("scroll", Jf);
      if (t.disableScroll)
        return document.addEventListener("touchmove", dc);
      const {onPageScroll: n, onReachBottom: o} = e
        , r = "transparent" === t.navigationBar.type;
      if (!n && !o && !r)
        return;
      const i = {}
        , a = e.proxy.$page.id;
      (n || r) && (i.onPageScroll = function(e, t, n) {
        return o=>{
          t && sh.publishHandler("onPageScroll", {
            scrollTop: o
          }, e),
          n && sh.emit(e + ".onPageScroll", {
            scrollTop: o
          })
        }
      }(a, n, r));
      o && (i.onReachBottomDistance = t.onReachBottomDistance || 50,
        i.onReachBottom = ()=>sh.publishHandler("onReachBottom", {}, a));
      Jf = hc(i),
        requestAnimationFrame((()=>document.addEventListener("scroll", Jf)))
    }(e, t)
}
function Xf(e) {
  const t = Yf(e);
  t && function(e) {
    const t = document.querySelector("uni-page-body");
    t && t.setAttribute(e, "")
  }(t)
}
function Yf(e) {
  return e.type.__scopeId
}
let Gf, Jf;
function Kf(e) {
  const t = ll({
    history: Qf(),
    strict: !!__uniConfig.router.strict,
    routes: __uniRoutes,
    scrollBehavior: Zf
  });
  e.router = t,
    e.use(t)
}
const Zf = (e,t,n)=>{
    if (n)
      return n
  }
;
function Qf() {
  let {routerBase: e} = __uniConfig.router;
  "/" === e && (e = "");
  const t = (n = e,
  (n = location.host ? n || location.pathname + location.search : "").includes("#") || (n += "#"),
    rs(n));
  var n;
  return t.listen(((e,t,n)=>{
      "back" === n.direction && function(e=1) {
        const t = Df()
          , n = t.length - 1
          , o = n - e;
        for (let r = n; r > o; r--) {
          const e = t[r].$page;
          jf(Hf(e.path, e.id), !1)
        }
      }(Math.abs(n.delta))
    }
  )),
    t
}
const ep = {
  install(e) {
    Cf(e),
      kc(e),
      Dc(e),
    e.config.warnHandler || (e.config.warnHandler = tp),
      Kf(e)
  }
};
function tp(e, t, n) {
  if (t) {
    if ("PageMetaHead" === t.$.type.name)
      return;
    const e = t.$.parent;
    if (e && "PageMeta" === e.type.name)
      return
  }
  const o = [`[Vue warn]: ${e}`];
  n.length && o.push("\n", n),
    console.warn(...o)
}
const np = {
  class: "uni-async-loading"
}
  , op = Ur("i", {
  class: "uni-loading"
}, null, -1)
  , rp = Wc({
  name: "AsyncLoading",
  render: ()=>(Ir(),
    jr("div", np, [op]))
});
function ip() {
  window.location.reload()
}
const ap = Wc({
  name: "AsyncError",
  setup() {
    ml();
    const {t: e} = pl();
    return ()=>Ur("div", {
      class: "uni-async-error",
      onClick: ip
    }, [e("uni.async.error")], 8, ["onClick"])
  }
});
let sp;
function lp() {
  return sp
}
function cp(e) {
  sp = e,
    Object.defineProperty(sp.$.ctx, "$children", {
      get: ()=>Df().map((e=>e.$vm))
    });
  const t = sp.$.appContext.app;
  t.component(rp.name) || t.component(rp.name, rp),
  t.component(ap.name) || t.component(ap.name, ap),
    function(e) {
      e.$vm = e,
        e.$mpType = "app";
      const t = Zt(pl().getLocale());
      Object.defineProperty(e, "$locale", {
        get: ()=>t.value,
        set(e) {
          t.value = e
        }
      })
    }(sp),
    function(e, t) {
      const n = e.$options || {};
      n.globalData = w(n.globalData || {}, t),
        Object.defineProperty(e, "globalData", {
          get: ()=>n.globalData,
          set(e) {
            n.globalData = e
          }
        })
    }(sp),
    Mc(),
    Nl()
}
function up(e, {clone: t, init: n, setup: o, before: r}) {
  t && (e = w({}, e)),
  r && r(e);
  const i = e.setup;
  return e.setup = (e,t)=>{
    const r = ri();
    n(r.proxy);
    const a = o(r);
    if (i)
      return i(a || e, t)
  }
    ,
    e
}
function dp(e, t) {
  return e && (e.__esModule || "Module" === e[Symbol.toStringTag]) ? up(e.default, t) : up(e, t)
}
function fp(e) {
  return dp(e, {
    clone: !0,
    init: qf,
    setup(e) {
      e.$pageInstance = e;
      const t = Lf()
        , n = ge(t.query);
      e.attrs.__pageQuery = n,
        e.proxy.$page.options = n;
      const o = kf();
      var r, i, a;
      return Eo((()=>{
          Uf(e, o)
        }
      )),
        ko((()=>{
            Xf(e);
            const {onReady: n} = e;
            n && X(n),
              gp(t)
          }
        )),
        vo((()=>{
            if (!e.__isVisible) {
              Uf(e, o),
                e.__isVisible = !0;
              const {onShow: n} = e;
              n && X(n),
                _n((()=>{
                    gp(t)
                  }
                ))
            }
          }
        ), "ba", r),
        function(e, t) {
          vo(e, "bda", t)
        }((()=>{
            if (e.__isVisible && !e.__isUnload) {
              e.__isVisible = !1;
              const {onHide: t} = e;
              t && X(t)
            }
          }
        )),
        i = o.id,
        sh.subscribe(Sl(i, "invokeViewApi"), a ? a(xl) : xl),
        Oo((()=>{
            !function(e) {
              sh.unsubscribe(Sl(e, "invokeViewApi")),
                Object.keys(wl).forEach((t=>{
                    0 === t.indexOf(e + ".") && delete wl[t]
                  }
                ))
            }(o.id)
          }
        )),
        n
    }
  })
}
function pp() {
  const {windowWidth: e, windowHeight: t, screenWidth: n, screenHeight: o} = Bp()
    , r = 90 === Math.abs(Number(window.orientation)) ? "landscape" : "portrait";
  lh.emit("onResize", {
    deviceOrientation: r,
    size: {
      windowWidth: e,
      windowHeight: t,
      screenWidth: n,
      screenHeight: o
    }
  })
}
function hp(e) {
  M(e.data) && "WEB_INVOKE_APPSERVICE" === e.data.type && lh.emit("onWebInvokeAppService", e.data.data, e.data.pageId)
}
function mp() {
  const {emit: e} = lh;
  "visible" === document.visibilityState ? e("onAppEnterForeground", w({}, wd)) : e("onAppEnterBackground")
}
function gp(e) {
  const {tabBarText: t, tabBarIndex: n, route: o} = e.meta;
  t && uc("onTabItemTap", {
    index: n,
    text: t,
    pagePath: o
  })
}
function vp(e) {
  e = e > 0 && e < 1 / 0 ? e : 0;
  const t = Math.floor(e / 3600)
    , n = Math.floor(e % 3600 / 60)
    , o = Math.floor(e % 3600 % 60)
    , r = (t < 10 ? "0" : "") + t;
  let i = (n < 10 ? "0" : "") + n + ":" + ((o < 10 ? "0" : "") + o);
  return "00" !== r && (i = r + ":" + i),
    i
}
function yp(e, t, n) {
  const o = Dt({
    gestureType: "none",
    volumeOld: 0,
    volumeNew: 0,
    currentTimeOld: 0,
    currentTimeNew: 0
  })
    , r = {
    x: 0,
    y: 0
  };
  return {
    state: o,
    onTouchstart: function(e) {
      const t = e.targetTouches[0];
      r.x = t.pageX,
        r.y = t.pageY,
        o.gestureType = "none",
        o.volumeOld = 0,
        o.currentTimeOld = o.currentTimeNew = 0
    },
    onTouchmove: function(i) {
      function a() {
        i.stopPropagation(),
          i.preventDefault()
      }
      n.fullscreen && a();
      const s = o.gestureType;
      if ("stop" === s)
        return;
      const l = i.targetTouches[0]
        , c = l.pageX
        , u = l.pageY
        , d = r
        , f = t.value;
      if ("progress" === s ? function(e) {
        const n = t.value.duration;
        let r = e / 600 * n + o.currentTimeOld;
        r < 0 ? r = 0 : r > n && (r = n);
        o.currentTimeNew = r
      }(c - d.x) : "volume" === s && function(e) {
        const n = t.value
          , r = o.volumeOld;
        let i;
        "number" == typeof r && (i = r - e / 200,
          i < 0 ? i = 0 : i > 1 && (i = 1),
          n.volume = i,
          o.volumeNew = i)
      }(u - d.y),
      "none" === s)
        if (Math.abs(c - d.x) > Math.abs(u - d.y)) {
          if (!e.enableProgressGesture)
            return void (o.gestureType = "stop");
          o.gestureType = "progress",
            o.currentTimeOld = o.currentTimeNew = f.currentTime,
          n.fullscreen || a()
        } else {
          if (!e.pageGesture)
            return void (o.gestureType = "stop");
          o.gestureType = "volume",
            o.volumeOld = f.volume,
          n.fullscreen || a()
        }
    },
    onTouchend: function(e) {
      const n = t.value;
      "none" !== o.gestureType && "stop" !== o.gestureType && (e.stopPropagation(),
        e.preventDefault()),
      "progress" === o.gestureType && o.currentTimeOld !== o.currentTimeNew && (n.currentTime = o.currentTimeNew),
        o.gestureType = "none"
    }
  }
}
function bp(e, t, n, o, r, i, a) {
  const s = {
    play: e,
    pause: t,
    seek: n,
    sendDanmu: o,
    playbackRate: r,
    requestFullScreen: i,
    exitFullScreen: a
  };
  !function(e, t, n, o) {
    const r = ri().proxy;
    ko((()=>{
        gf(t || mf(r), e, o),
        !n && t || zn((()=>r.id), ((t,n)=>{
            gf(mf(r, t), e, o),
              vf(n && mf(r, n))
          }
        ))
      }
    )),
      Oo((()=>{
          vf(t || mf(r), o)
        }
      ))
  }(((e,t)=>{
      let n;
      switch (e) {
        case "seek":
          n = t.position;
          break;
        case "sendDanmu":
          n = t;
          break;
        case "playbackRate":
          n = t.rate
      }
      e in s && s[e](n)
    }
  ), function(e) {
    const t = oc()
      , n = ri().proxy
      , o = n.$options.name.toLowerCase()
      , r = e || n.id || "context" + yf++;
    return ko((()=>{
        n.$el.__uniContextInfo = {
          id: r,
          type: o,
          page: t
        }
      }
    )),
      `${o}.${r}`
  }(), !0)
}
const _p = Hc({
  name: "Video",
  props: {
    id: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    duration: {
      type: [Number, String],
      default: ""
    },
    controls: {
      type: [Boolean, String],
      default: !0
    },
    danmuList: {
      type: Array,
      default: ()=>[]
    },
    danmuBtn: {
      type: [Boolean, String],
      default: !1
    },
    enableDanmu: {
      type: [Boolean, String],
      default: !1
    },
    autoplay: {
      type: [Boolean, String],
      default: !1
    },
    loop: {
      type: [Boolean, String],
      default: !1
    },
    muted: {
      type: [Boolean, String],
      default: !1
    },
    objectFit: {
      type: String,
      default: "contain"
    },
    poster: {
      type: String,
      default: ""
    },
    direction: {
      type: [String, Number],
      default: ""
    },
    showProgress: {
      type: Boolean,
      default: !0
    },
    initialTime: {
      type: [String, Number],
      default: 0
    },
    showFullscreenBtn: {
      type: [Boolean, String],
      default: !0
    },
    pageGesture: {
      type: [Boolean, String],
      default: !1
    },
    enableProgressGesture: {
      type: [Boolean, String],
      default: !0
    },
    showPlayBtn: {
      type: [Boolean, String],
      default: !0
    },
    showCenterPlayBtn: {
      type: [Boolean, String],
      default: !0
    }
  },
  emits: ["fullscreenchange", "progress", "loadedmetadata", "waiting", "error", "play", "pause", "ended", "timeupdate"],
  setup(e, {emit: t, attrs: n, slots: o}) {
    const r = Zt(null)
      , i = Zt(null)
      , a = Yc(r, t)
      , {state: s} = Rd()
      , {$attrs: l} = Gd({
      excludeListeners: !0
    })
      , {t: c} = pl();
    yl();
    const {videoRef: u, state: d, play: f, pause: p, seek: h, playbackRate: m, toggle: g, onDurationChange: v, onLoadedMetadata: y, onProgress: b, onWaiting: _, onVideoError: w, onPlay: S, onPause: T, onEnded: x, onTimeUpdate: E} = function(e, t, n) {
      const o = Zt(null)
        , r = pi((()=>tu(e.src)))
        , i = Dt({
        start: !1,
        src: r,
        playing: !1,
        currentTime: 0,
        duration: 0,
        progress: 0,
        buffered: 0
      });
      function a(e) {
        const t = e.target
          , n = t.buffered;
        n.length && (i.buffered = n.end(n.length - 1) / t.duration * 100)
      }
      return zn((()=>r.value), (()=>{
          i.playing = !1,
            i.currentTime = 0
        }
      )),
        zn((()=>i.buffered), (e=>{
            n("progress", {}, {
              buffered: e
            })
          }
        )),
        {
          videoRef: o,
          state: i,
          play: function() {
            const e = o.value;
            i.start = !0,
              e.play()
          },
          pause: function() {
            o.value.pause()
          },
          seek: function(e) {
            const t = o.value;
            "number" != typeof (e = Number(e)) || isNaN(e) || (t.currentTime = e)
          },
          playbackRate: function(e) {
            o.value.playbackRate = e
          },
          toggle: function() {
            const e = o.value;
            i.playing ? e.pause() : e.play()
          },
          onDurationChange: function({target: e}) {
            i.duration = e.duration
          },
          onLoadedMetadata: function(t) {
            const o = Number(e.initialTime) || 0
              , r = t.target;
            o > 0 && (r.currentTime = o),
              n("loadedmetadata", t, {
                width: r.videoWidth,
                height: r.videoHeight,
                duration: r.duration
              }),
              a(t)
          },
          onProgress: a,
          onWaiting: function(e) {
            n("waiting", e, {})
          },
          onVideoError: function(e) {
            i.playing = !1,
              n("error", e, {})
          },
          onPlay: function(e) {
            i.start = !0,
              i.playing = !0,
              n("play", e, {})
          },
          onPause: function(e) {
            i.playing = !1,
              n("pause", e, {})
          },
          onEnded: function(e) {
            i.playing = !1,
              n("ended", e, {})
          },
          onTimeUpdate: function(e) {
            const t = e.target
              , o = i.currentTime = t.currentTime;
            n("timeupdate", e, {
              currentTime: o,
              duration: t.duration
            })
          }
        }
    }(e, 0, a)
      , {state: k, danmuRef: P, updateDanmu: L, toggleDanmu: O, sendDanmu: A} = function(e, t) {
      const n = Zt(null)
        , o = Dt({
        enable: Boolean(e.enableDanmu)
      });
      let r = {
        time: 0,
        index: -1
      };
      const i = C(e.danmuList) ? JSON.parse(JSON.stringify(e.danmuList)) : [];
      function a(e) {
        const t = document.createElement("p");
        t.className = "uni-video-danmu-item",
          t.innerText = e.text;
        let o = `bottom: ${100 * Math.random()}%;color: ${e.color};`;
        t.setAttribute("style", o),
          n.value.appendChild(t),
          setTimeout((function() {
              o += "left: 0;-webkit-transform: translateX(-100%);transform: translateX(-100%);",
                t.setAttribute("style", o),
                setTimeout((function() {
                    t.remove()
                  }
                ), 4e3)
            }
          ), 17)
      }
      return i.sort((function(e, t) {
          return (e.time || 0) - (t.time || 0)
        }
      )),
        {
          state: o,
          danmuRef: n,
          updateDanmu: function(e) {
            const n = e.target.currentTime
              , s = r
              , l = {
              time: n,
              index: s.index
            };
            if (n > s.time)
              for (let r = s.index + 1; r < i.length; r++) {
                const e = i[r];
                if (!(n >= (e.time || 0)))
                  break;
                l.index = r,
                t.playing && o.enable && a(e)
              }
            else if (n < s.time)
              for (let t = s.index - 1; t > -1 && n <= (i[t].time || 0); t--)
                l.index = t - 1;
            r = l
          },
          toggleDanmu: function() {
            o.enable = !o.enable
          },
          sendDanmu: function(e) {
            i.splice(r.index + 1, 0, {
              text: String(e.text),
              color: e.color,
              time: t.currentTime || 0
            })
          }
        }
    }(e, d)
      , {state: B, onFullscreenChange: $, emitFullscreenChange: I, toggleFullscreen: N, requestFullScreen: M, exitFullScreen: R} = function(e, t, n, o, r) {
      const i = Dt({
        fullscreen: !1
      })
        , a = /^Apple/.test(navigator.vendor);
      function s(t) {
        i.fullscreen = t,
          e("fullscreenchange", {}, {
            fullScreen: t,
            direction: "vertical"
          })
      }
      function l(e) {
        const i = r.value
          , l = t.value
          , c = n.value;
        let u;
        e ? !document.fullscreenEnabled && !document.webkitFullscreenEnabled || a && !o.userAction ? c.webkitEnterFullScreen ? c.webkitEnterFullScreen() : (u = !0,
          l.remove(),
          l.classList.add("uni-video-type-fullscreen"),
          document.body.appendChild(l)) : l[document.fullscreenEnabled ? "requestFullscreen" : "webkitRequestFullscreen"]() : document.fullscreenEnabled || document.webkitFullscreenEnabled ? document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen() : c.webkitExitFullScreen ? c.webkitExitFullScreen() : (u = !0,
          l.remove(),
          l.classList.remove("uni-video-type-fullscreen"),
          i.appendChild(l)),
        u && s(e)
      }
      function c() {
        l(!1)
      }
      return Oo(c),
        {
          state: i,
          onFullscreenChange: function(e, t) {
            t && document.fullscreenEnabled || s(!(!document.fullscreenElement && !document.webkitFullscreenElement))
          },
          emitFullscreenChange: s,
          toggleFullscreen: l,
          requestFullScreen: function() {
            l(!0)
          },
          exitFullScreen: c
        }
    }(a, i, u, s, r)
      , {state: D, onTouchstart: j, onTouchend: F, onTouchmove: V} = yp(e, u, B)
      , {state: q, progressRef: H, ballRef: W, clickProgress: z, toggleControls: U} = function(e, t, n) {
      const o = Zt(null)
        , r = Zt(null)
        , i = pi((()=>e.showCenterPlayBtn && !t.start))
        , a = Zt(!0)
        , s = pi((()=>!i.value && e.controls && a.value))
        , l = Dt({
        touching: !1,
        controlsTouching: !1,
        centerPlayBtnShow: i,
        controlsShow: s,
        controlsVisible: a
      });
      let c;
      function u() {
        c = setTimeout((()=>{
            l.controlsVisible = !1
          }
        ), 3e3)
      }
      function d() {
        c && (clearTimeout(c),
          c = null)
      }
      return Oo((()=>{
          c && clearTimeout(c)
        }
      )),
        zn((()=>l.controlsShow && t.playing && !l.controlsTouching), (e=>{
            e ? u() : d()
          }
        )),
        zn([()=>t.currentTime, ()=>{
          e.duration
        }
        ], (function() {
            l.touching || (t.progress = t.currentTime / t.duration * 100)
          }
        )),
        ko((()=>{
            const e = pe(!1);
            let i, a, s, c = !0;
            const u = r.value;
            function d(e) {
              const n = e.targetTouches[0]
                , r = n.pageX
                , l = n.pageY;
              if (c && Math.abs(r - i) < Math.abs(l - a))
                return void f(e);
              c = !1;
              const u = o.value.offsetWidth;
              let d = s + (r - i) / u * 100;
              d < 0 ? d = 0 : d > 100 && (d = 100),
                t.progress = d,
                e.preventDefault(),
                e.stopPropagation()
            }
            function f(o) {
              l.controlsTouching = !1,
              l.touching && (u.removeEventListener("touchmove", d, e),
              c || (o.preventDefault(),
                o.stopPropagation(),
                n(t.duration * t.progress / 100)),
                l.touching = !1)
            }
            u.addEventListener("touchstart", (n=>{
                l.controlsTouching = !0;
                const o = n.targetTouches[0];
                i = o.pageX,
                  a = o.pageY,
                  s = t.progress,
                  c = !0,
                  l.touching = !0,
                  u.addEventListener("touchmove", d, e)
              }
            )),
              u.addEventListener("touchend", f),
              u.addEventListener("touchcancel", f)
          }
        )),
        {
          state: l,
          progressRef: o,
          ballRef: r,
          clickProgress: function(e) {
            const r = o.value;
            let i = e.target
              , a = e.offsetX;
            for (; i && i !== r; )
              a += i.offsetLeft,
                i = i.parentNode;
            const s = r.offsetWidth;
            let l = 0;
            a >= 0 && a <= s && (l = a / s,
              n(t.duration * l))
          },
          toggleControls: function() {
            l.controlsVisible = !l.controlsVisible
          },
          autoHideStart: u,
          autoHideEnd: d
        }
    }(e, d, h);
    return bp(f, p, h, A, m, M, R),
      ()=>Ur("uni-video", {
        ref: r,
        id: e.id
      }, [Ur("div", {
        ref: i,
        class: "uni-video-container",
        onTouchstart: j,
        onTouchend: F,
        onTouchmove: V,
        onFullscreenchange: ma($, ["stop"]),
        onWebkitfullscreenchange: ma((e=>$(e, !0)), ["stop"])
      }, [Ur("video", Qr({
        ref: u,
        style: {
          "object-fit": e.objectFit
        },
        muted: !!e.muted,
        loop: !!e.loop,
        src: d.src,
        poster: e.poster,
        autoplay: !!e.autoplay
      }, l.value, {
        class: "uni-video-video",
        "webkit-playsinline": !0,
        playsinline: !0,
        onClick: U,
        onDurationchange: v,
        onLoadedmetadata: y,
        onProgress: b,
        onWaiting: _,
        onError: w,
        onPlay: S,
        onPause: T,
        onEnded: x,
        onTimeupdate: e=>{
          E(e),
            L(e)
        }
        ,
        onWebkitbeginfullscreen: ()=>I(!0),
        onX5videoenterfullscreen: ()=>I(!0),
        onWebkitendfullscreen: ()=>I(!1),
        onX5videoexitfullscreen: ()=>I(!1)
      }), null, 16, ["muted", "loop", "src", "poster", "autoplay", "webkit-playsinline", "playsinline", "onClick", "onDurationchange", "onLoadedmetadata", "onProgress", "onWaiting", "onError", "onPlay", "onPause", "onEnded", "onTimeupdate", "onWebkitbeginfullscreen", "onX5videoenterfullscreen", "onWebkitendfullscreen", "onX5videoexitfullscreen"]), Mo(Ur("div", {
        class: "uni-video-bar uni-video-bar-full",
        onClick: ma((()=>{}
        ), ["stop"])
      }, [Ur("div", {
        class: "uni-video-controls"
      }, [Mo(Ur("div", {
        class: {
          "uni-video-control-button": !0,
          "uni-video-control-button-play": !d.playing,
          "uni-video-control-button-pause": d.playing
        },
        onClick: ma(g, ["stop"])
      }, null, 10, ["onClick"]), [[ga, e.showPlayBtn]]), Mo(Ur("div", {
        class: "uni-video-current-time"
      }, [vp(d.currentTime)], 512), [[ga, e.showProgress]]), Mo(Ur("div", {
        ref: H,
        class: "uni-video-progress-container",
        onClick: ma(z, ["stop"])
      }, [Ur("div", {
        class: "uni-video-progress"
      }, [Ur("div", {
        style: {
          width: d.buffered + "%"
        },
        class: "uni-video-progress-buffered"
      }, null, 4), Ur("div", {
        ref: W,
        style: {
          left: d.progress + "%"
        },
        class: "uni-video-ball"
      }, [Ur("div", {
        class: "uni-video-inner"
      }, null)], 4)])], 8, ["onClick"]), [[ga, e.showProgress]]), Mo(Ur("div", {
        class: "uni-video-duration"
      }, [vp(Number(e.duration) || d.duration)], 512), [[ga, e.showProgress]])]), Mo(Ur("div", {
        class: {
          "uni-video-danmu-button": !0,
          "uni-video-danmu-button-active": k.enable
        },
        onClick: ma(O, ["stop"])
      }, [c("uni.video.danmu")], 10, ["onClick"]), [[ga, e.danmuBtn]]), Mo(Ur("div", {
        class: {
          "uni-video-fullscreen": !0,
          "uni-video-type-fullscreen": B.fullscreen
        },
        onClick: ma((()=>N(!B.fullscreen)), ["stop"])
      }, null, 10, ["onClick"]), [[ga, e.showFullscreenBtn]])], 8, ["onClick"]), [[ga, q.controlsShow]]), Mo(Ur("div", {
        ref: P,
        style: "z-index: 0;",
        class: "uni-video-danmu"
      }, null, 512), [[ga, d.start && k.enable]]), q.centerPlayBtnShow && Ur("div", {
        class: "uni-video-cover",
        onClick: ma((()=>{}
        ), ["stop"])
      }, [Ur("div", {
        class: "uni-video-cover-play-button",
        onClick: ma(f, ["stop"])
      }, null, 8, ["onClick"]), Ur("p", {
        class: "uni-video-cover-duration"
      }, [vp(Number(e.duration) || d.duration)])], 8, ["onClick"]), Ur("div", {
        class: {
          "uni-video-toast": !0,
          "uni-video-toast-volume": "volume" === D.gestureType
        }
      }, [Ur("div", {
        class: "uni-video-toast-title"
      }, [c("uni.video.volume")]), Ur("svg", {
        class: "uni-video-toast-icon",
        width: "200px",
        height: "200px",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [Ur("path", {
        d: "M475.400704 201.19552l0 621.674496q0 14.856192-10.856448 25.71264t-25.71264 10.856448-25.71264-10.856448l-190.273536-190.273536-149.704704 0q-14.856192 0-25.71264-10.856448t-10.856448-25.71264l0-219.414528q0-14.856192 10.856448-25.71264t25.71264-10.856448l149.704704 0 190.273536-190.273536q10.856448-10.856448 25.71264-10.856448t25.71264 10.856448 10.856448 25.71264zm219.414528 310.837248q0 43.425792-24.28416 80.851968t-64.2816 53.425152q-5.71392 2.85696-14.2848 2.85696-14.856192 0-25.71264-10.570752t-10.856448-25.998336q0-11.999232 6.856704-20.284416t16.570368-14.2848 19.427328-13.142016 16.570368-20.284416 6.856704-32.569344-6.856704-32.569344-16.570368-20.284416-19.427328-13.142016-16.570368-14.2848-6.856704-20.284416q0-15.427584 10.856448-25.998336t25.71264-10.570752q8.57088 0 14.2848 2.85696 39.99744 15.427584 64.2816 53.139456t24.28416 81.137664zm146.276352 0q0 87.422976-48.56832 161.41824t-128.5632 107.707392q-7.428096 2.85696-14.2848 2.85696-15.427584 0-26.284032-10.856448t-10.856448-25.71264q0-22.284288 22.284288-33.712128 31.997952-16.570368 43.425792-25.141248 42.283008-30.855168 65.995776-77.423616t23.712768-99.136512-23.712768-99.136512-65.995776-77.423616q-11.42784-8.57088-43.425792-25.141248-22.284288-11.42784-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 79.99488 33.712128 128.5632 107.707392t48.56832 161.41824zm146.276352 0q0 131.42016-72.566784 241.41312t-193.130496 161.989632q-7.428096 2.85696-14.856192 2.85696-14.856192 0-25.71264-10.856448t-10.856448-25.71264q0-20.570112 22.284288-33.712128 3.999744-2.285568 12.85632-5.999616t12.85632-5.999616q26.284032-14.2848 46.854144-29.140992 70.281216-51.996672 109.707264-129.705984t39.426048-165.132288-39.426048-165.132288-109.707264-129.705984q-20.570112-14.856192-46.854144-29.140992-3.999744-2.285568-12.85632-5.999616t-12.85632-5.999616q-22.284288-13.142016-22.284288-33.712128 0-14.856192 10.856448-25.71264t25.71264-10.856448q7.428096 0 14.856192 2.85696 120.563712 51.996672 193.130496 161.989632t72.566784 241.41312z"
      }, null)]), Ur("div", {
        class: "uni-video-toast-value"
      }, [Ur("div", {
        style: {
          width: 100 * D.volumeNew + "%"
        },
        class: "uni-video-toast-value-content"
      }, [Ur("div", {
        class: "uni-video-toast-volume-grids"
      }, [Ho(10, (()=>Ur("div", {
        class: "uni-video-toast-volume-grids-item"
      }, null)))])], 4)])], 2), Ur("div", {
        class: {
          "uni-video-toast": !0,
          "uni-video-toast-progress": "progress" === D.gestureType
        }
      }, [Ur("div", {
        class: "uni-video-toast-title"
      }, [vp(D.currentTimeNew), " / ", vp(d.duration)])], 2), Ur("div", {
        class: "uni-video-slots"
      }, [o.default && o.default()])], 40, ["onTouchstart", "onTouchend", "onTouchmove", "onFullscreenchange", "onWebkitfullscreenchange"])], 8, ["id"])
  }
})
  , wp = navigator.cookieEnabled && (window.localStorage || window.sessionStorage) || {};
let Sp;
function Tp() {
  if (Sp = Sp || wp.__DC_STAT_UUID,
    !Sp) {
    Sp = Date.now() + "" + Math.floor(1e7 * Math.random());
    try {
      wp.__DC_STAT_UUID = Sp
    } catch (e) {}
  }
  return Sp
}
function xp() {
  if (!0 !== __uniConfig.darkmode)
    return O(__uniConfig.darkmode) ? __uniConfig.darkmode : "light";
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  } catch (e) {
    return "light"
  }
}
function Cp() {
  let e, t = "0", n = "", o = "phone";
  const r = navigator.language;
  if (ru) {
    e = "iOS";
    const o = nu.match(/OS\s([\w_]+)\slike/);
    o && (t = o[1].replace(/_/g, "."));
    const r = nu.match(/\(([a-zA-Z]+);/);
    r && (n = r[1])
  } else if (ou) {
    e = "Android";
    const o = nu.match(/Android[\s/]([\w\.]+)[;\s]/);
    o && (t = o[1]);
    const r = nu.match(/\((.+?)\)/)
      , i = r ? r[1].split(";") : nu.split(" ")
      , a = [/\bAndroid\b/i, /\bLinux\b/i, /\bU\b/i, /^\s?[a-z][a-z]$/i, /^\s?[a-z][a-z]-[a-z][a-z]$/i, /\bwv\b/i, /\/[\d\.,]+$/, /^\s?[\d\.,]+$/, /\bBrowser\b/i, /\bMobile\b/i];
    for (let e = 0; e < i.length; e++) {
      const t = i[e];
      if (t.indexOf("Build") > 0) {
        n = t.split("Build")[0].trim();
        break
      }
      let o;
      for (let e = 0; e < a.length; e++)
        if (a[e].test(t)) {
          o = !0;
          break
        }
      if (!o) {
        n = t.trim();
        break
      }
    }
  } else if (lu)
    n = "iPad",
      e = "iOS",
      o = "pad",
      t = L(window.BigInt) ? "14.0" : "13.0";
  else if (iu || au || su) {
    n = "PC",
      e = "PC",
      o = "pc",
      t = "0";
    let r = nu.match(/\((.+?)\)/)[1];
    if (iu) {
      switch (e = "Windows",
        iu[1]) {
        case "5.1":
          t = "XP";
          break;
        case "6.0":
          t = "Vista";
          break;
        case "6.1":
          t = "7";
          break;
        case "6.2":
          t = "8";
          break;
        case "6.3":
          t = "8.1";
          break;
        case "10.0":
          t = "10"
      }
      const n = r && r.match(/[Win|WOW]([\d]+)/);
      n && (t += ` x ${n[1]}`)
    } else if (au) {
      e = "macOS";
      const n = r && r.match(/Mac OS X (.+)/) || "";
      t && (t = n[1].replace(/_/g, "."),
      -1 !== t.indexOf(";") && (t = t.split(";")[0]))
    } else if (su) {
      e = "Linux";
      const n = r && r.match(/Linux (.*)/) || "";
      n && (t = n[1],
      -1 !== t.indexOf(";") && (t = t.split(";")[0]))
    }
  } else
    e = "Other",
      t = "0",
      o = "unknown";
  const i = `${e} ${t}`
    , a = e.toLocaleLowerCase();
  let s = ""
    , l = String(function() {
    const e = navigator.userAgent
      , t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1
      , n = e.indexOf("Edge") > -1 && !t
      , o = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
    if (t) {
      new RegExp("MSIE (\\d+\\.\\d+);").test(e);
      const t = parseFloat(RegExp.$1);
      return t > 6 ? t : 6
    }
    return n ? -1 : o ? 11 : -1
  }());
  if ("-1" !== l)
    s = "IE";
  else {
    const e = ["Version", "Firefox", "Chrome", "Edge{0,1}"]
      , t = ["Safari", "Firefox", "Chrome", "Edge"];
    for (let n = 0; n < e.length; n++) {
      const o = e[n]
        , r = new RegExp(`(${o})/(\\S*)\\b`);
      r.test(nu) && (s = t[n],
        l = nu.match(r)[2])
    }
  }
  let c = "portrait";
  const u = void 0 === window.screen.orientation ? window.orientation : window.screen.orientation.angle;
  return c = 90 === Math.abs(u) ? "landscape" : "portrait",
    {
      deviceBrand: void 0,
      brand: void 0,
      deviceModel: n,
      deviceOrientation: c,
      model: n,
      system: i,
      platform: a,
      browserName: s.toLocaleLowerCase(),
      browserVersion: l,
      language: r,
      deviceType: o,
      ua: nu,
      osname: e,
      osversion: t,
      theme: xp()
    }
}
const Ep = ju(0, (()=>{
    const e = window.devicePixelRatio
      , t = cu()
      , n = uu(t)
      , o = du(t, n)
      , r = function(e, t) {
      return e ? Math[t ? "min" : "max"](screen.height, screen.width) : screen.height
    }(t, n)
      , i = fu(o);
    let a = window.innerHeight;
    const s = Ul.top
      , l = {
      left: Ul.left,
      right: i - Ul.right,
      top: Ul.top,
      bottom: a - Ul.bottom,
      width: i - Ul.left - Ul.right,
      height: a - Ul.top - Ul.bottom
    }
      , {top: c, bottom: u} = function() {
      const e = document.documentElement.style
        , t = Gl()
        , n = Yl(e, "--window-bottom")
        , o = Yl(e, "--window-left")
        , r = Yl(e, "--window-right")
        , i = Yl(e, "--top-window-height");
      return {
        top: t,
        bottom: n ? n + Ul.bottom : 0,
        left: o ? o + Ul.left : 0,
        right: r ? r + Ul.right : 0,
        topWindowHeight: i || 0
      }
    }();
    return a -= c,
      a -= u,
      {
        windowTop: c,
        windowBottom: u,
        windowWidth: i,
        windowHeight: a,
        pixelRatio: e,
        screenWidth: o,
        screenHeight: r,
        statusBarHeight: s,
        safeArea: l,
        safeAreaInsets: {
          top: Ul.top,
          right: Ul.right,
          bottom: Ul.bottom,
          left: Ul.left
        },
        screenTop: r - a
      }
  }
));
let kp, Pp = !0;
function Lp() {
  Pp && (kp = Cp())
}
const Op = ju(0, (()=>{
    Lp();
    const {deviceBrand: e, deviceModel: t, brand: n, model: o, platform: r, system: i, deviceOrientation: a, deviceType: s} = kp;
    return {
      brand: n,
      deviceBrand: e,
      deviceModel: t,
      devicePixelRatio: window.devicePixelRatio,
      deviceId: Tp(),
      deviceOrientation: a,
      deviceType: s,
      model: o,
      platform: r,
      system: i
    }
  }
))
  , Ap = ju(0, (()=>{
    Lp();
    const {theme: e, language: t, browserName: n, browserVersion: o} = kp;
    return {
      appId: __uniConfig.appId,
      appName: __uniConfig.appName,
      appVersion: __uniConfig.appVersion,
      appVersionCode: __uniConfig.appVersionCode,
      appLanguage: od ? od() : t,
      enableDebug: !1,
      hostSDKVersion: void 0,
      hostPackageName: void 0,
      hostFontSizeSetting: void 0,
      hostName: n,
      hostVersion: o,
      hostTheme: e,
      hostLanguage: t,
      language: t,
      SDKVersion: "",
      theme: e,
      version: ""
    }
  }
))
  , Bp = ju(0, (()=>{
    Pp = !0,
      Lp(),
      Pp = !1;
    const e = Ep()
      , t = Op()
      , n = Ap();
    Pp = !0;
    const {ua: o, browserName: r, browserVersion: i, osname: a, osversion: s} = kp
      , l = w(e, t, n, {
      ua: o,
      browserName: r,
      browserVersion: i,
      uniPlatform: "web",
      uniCompileVersion: __uniConfig.compilerVersion,
      uniRuntimeVersion: __uniConfig.compilerVersion,
      fontSizeSetting: void 0,
      osName: a.toLocaleLowerCase(),
      osVersion: s,
      osLanguage: void 0,
      osTheme: void 0
    });
    return delete l.screenTop,
      delete l.enableDebug,
    __uniConfig.darkmode || delete l.theme,
      function(e) {
        let t = {};
        return M(e) && Object.keys(e).sort().forEach((n=>{
            const o = n;
            t[o] = e[o]
          }
        )),
          Object.keys(t) ? t : e
      }(l)
  }
));
const $p = ju(0, ((e,t)=>{
    const n = typeof t
      , o = "string" === n ? t : JSON.stringify({
      type: n,
      data: t
    });
    localStorage.setItem(e, o)
  }
));
function Ip(e) {
  const t = localStorage && localStorage.getItem(e);
  if (!O(t))
    throw new Error("data not found");
  let n = t;
  try {
    const e = function(e) {
      const t = ["object", "string", "number", "boolean", "undefined"];
      try {
        const n = O(e) ? JSON.parse(e) : e
          , o = n.type;
        if (t.indexOf(o) >= 0) {
          const e = Object.keys(n);
          if (2 === e.length && "data"in n) {
            if (typeof n.data === o)
              return n.data;
            if ("object" === o && /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(n.data))
              return new Date(n.data)
          } else if (1 === e.length)
            return ""
        }
      } catch (n) {}
    }(JSON.parse(t));
    void 0 !== e && (n = e)
  } catch (o) {}
  return n
}
const Np = ju(0, (e=>{
    try {
      return Ip(e)
    } catch (t) {
      return ""
    }
  }
))
  , Mp = ju(0, (e=>{
    localStorage && localStorage.removeItem(e)
  }
));
Md();
const Rp = {
  esc: ["Esc", "Escape"],
  enter: ["Enter"]
}
  , Dp = Object.keys(Rp);
function jp(e, {onEsc: t, onEnter: n}) {
  const o = Zt(e.visible)
    , {key: r, disable: i} = function() {
    const e = Zt("")
      , t = Zt(!1)
      , n = n=>{
        if (t.value)
          return;
        const o = Dp.find((e=>-1 !== Rp[e].indexOf(n.key)));
        o && (e.value = o),
          _n((()=>e.value = ""))
      }
    ;
    return ko((()=>{
        document.addEventListener("keyup", n)
      }
    )),
      Oo((()=>{
          document.removeEventListener("keyup", n)
        }
      )),
      {
        key: e,
        disable: t
      }
  }();
  return zn((()=>e.visible), (e=>o.value = e)),
    zn((()=>o.value), (e=>i.value = !e)),
    Hn((()=>{
        const {value: e} = r;
        "esc" === e ? t && t() : "enter" === e && n && n()
      }
    )),
    o
}
const Fp = Du("request", (({url: e, data: t, header: n, method: o, dataType: r, responseType: i, withCredentials: a, timeout: s=__uniConfig.networkTimeout.request},{resolve: l, reject: c})=>{
    let u = null;
    const d = function(e) {
      const t = Object.keys(e).find((e=>"content-type" === e.toLowerCase()));
      if (!t)
        return;
      const n = e[t];
      if (0 === n.indexOf("application/json"))
        return "json";
      if (0 === n.indexOf("application/x-www-form-urlencoded"))
        return "urlencoded";
      return "string"
    }(n);
    if ("GET" !== o)
      if (O(t) || t instanceof ArrayBuffer)
        u = t;
      else if ("json" === d)
        try {
          u = JSON.stringify(t)
        } catch (m) {
          u = t.toString()
        }
      else if ("urlencoded" === d) {
        const e = [];
        for (const n in t)
          x(t, n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        u = e.join("&")
      } else
        u = t.toString();
    const f = new XMLHttpRequest
      , p = new Vp(f);
    f.open(o, e);
    for (const g in n)
      x(n, g) && f.setRequestHeader(g, n[g]);
    const h = setTimeout((function() {
        f.onload = f.onabort = f.onerror = null,
          p.abort(),
          c("timeout")
      }
    ), s);
    return f.responseType = i,
      f.onload = function() {
        clearTimeout(h);
        const e = f.status;
        let t = "text" === i ? f.responseText : f.response;
        if ("text" === i && "json" === r)
          try {
            t = JSON.parse(t)
          } catch (m) {}
        l({
          data: t,
          statusCode: e,
          header: qp(f.getAllResponseHeaders()),
          cookies: []
        })
      }
      ,
      f.onabort = function() {
        clearTimeout(h),
          c("abort")
      }
      ,
      f.onerror = function() {
        clearTimeout(h),
          c()
      }
      ,
      f.withCredentials = a,
      f.send(u),
      p
  }
), 0, ld);
class Vp {
  constructor(e) {
    this._xhr = e
  }
  abort() {
    this._xhr && (this._xhr.abort(),
      delete this._xhr)
  }
  onHeadersReceived(e) {
    throw new Error("Method not implemented.")
  }
  offHeadersReceived(e) {
    throw new Error("Method not implemented.")
  }
}
function qp(e) {
  const t = {};
  return e.split("\n").forEach((e=>{
      const n = e.match(/(\S+\s*):\s*(.*)/);
      n && 3 === n.length && (t[n[1]] = n[2])
    }
  )),
    t
}
function Hp({type: e, url: t, tabBarText: n, events: o}, r) {
  const i = lp().$router
    , {path: a, query: s} = function(e) {
    const [t,n] = e.split("?", 2);
    return {
      path: t,
      query: ye(n || "")
    }
  }(t);
  return new Promise(((t,l)=>{
      const c = function(e, t) {
        return {
          __id__: t || ++Ff,
          __type__: e
        }
      }(e, r);
      i["navigateTo" === e ? "push" : "replace"]({
        path: a,
        query: s,
        state: c,
        force: !0
      }).then((r=>{
          if (ds(r))
            return l(r.message);
          if ("switchTab" === e && (i.currentRoute.value.meta.tabBarText = n),
          "navigateTo" === e) {
            const e = i.currentRoute.value.meta;
            return e.eventChannel ? o && (Object.keys(o).forEach((t=>{
                e.eventChannel._addListener(t, "on", o[t])
              }
            )),
              e.eventChannel._clearCache()) : e.eventChannel = new _e(c.__id__,o),
              t({
                eventChannel: e.eventChannel
              })
          }
          return t()
        }
      ))
    }
  ))
}
const Wp = Fu("navigateTo", (({url: e, events: t},{resolve: n, reject: o})=>Hp({
  type: "navigateTo",
  url: e,
  events: t
}).then(n).catch(o)), 0, ud);
const zp = Fu("redirectTo", (({url: e},{resolve: t, reject: n})=>(function() {
  const e = rc();
  if (!e)
    return;
  const t = e.$page;
  jf(Hf(t.path, t.id))
}(),
  Hp({
    type: "redirectTo",
    url: e
  }).then(t).catch(n))), 0, dd);
const Up = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    default: "success",
    validator: e=>-1 !== yd.indexOf(e)
  },
  image: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 1500
  },
  mask: {
    type: Boolean,
    default: !1
  },
  visible: {
    type: Boolean
  }
}
  , Xp = {
  light: "#fff",
  dark: "rgba(255,255,255,0.9)"
}
  , Yp = e=>Xp[e]
  , Gp = io({
  name: "Toast",
  props: Up,
  setup(e) {
    gl(),
      vl();
    const {Icon: t} = function(e) {
      const t = Zt(Yp(xp()))
        , n = ({theme: e})=>t.value = Yp(e);
      Hn((()=>{
          var t;
          e.visible ? (t = n,
          __uniConfig.darkmode && lh.on("onThemeChange", t)) : function(e) {
            lh.off("onThemeChange", e)
          }(n)
        }
      ));
      return {
        Icon: pi((()=>{
            switch (e.icon) {
              case "success":
                return Ur(nc(ec, t.value, 38), {
                  class: "uni-toast__icon"
                });
              case "error":
                return Ur(nc(tc, t.value, 38), {
                  class: "uni-toast__icon"
                });
              case "loading":
                return Ur("i", {
                  class: ["uni-toast__icon", "uni-loading"]
                }, null, 2);
              default:
                return null
            }
          }
        ))
      }
    }(e)
      , n = jp(e, {});
    return ()=>{
      const {mask: o, duration: r, title: i, image: a} = e;
      return Ur(qi, {
        name: "uni-fade"
      }, {
        default: ()=>[Mo(Ur("uni-toast", {
          "data-duration": r
        }, [o ? Ur("div", {
          class: "uni-mask",
          style: "background: transparent;",
          onTouchmove: Xl
        }, null, 40, ["onTouchmove"]) : "", a || t.value ? Ur("div", {
          class: "uni-toast"
        }, [a ? Ur("img", {
          src: a,
          class: "uni-toast__icon"
        }, null, 10, ["src"]) : t.value, Ur("p", {
          class: "uni-toast__content"
        }, [i])]) : Ur("div", {
          class: "uni-sample-toast"
        }, [Ur("p", {
          class: "uni-simple-toast__text"
        }, [i])])], 8, ["data-duration"]), [[ga, n.value]])]
      })
    }
  }
});
let Jp, Kp, Zp = "";
const Qp = Be();
function eh(e) {
  Jp ? w(Jp, e) : (Jp = Dt(w(e, {
    visible: !1
  })),
    _n((()=>{
        var e, t, n;
        Qp.run((()=>{
            zn([()=>Jp.visible, ()=>Jp.duration], (([e,t])=>{
                if (e) {
                  if (Kp && clearTimeout(Kp),
                  "onShowLoading" === Zp)
                    return;
                  Kp = setTimeout((()=>{
                      nh("onHideToast")
                    }
                  ), t)
                } else
                  Kp && clearTimeout(Kp)
              }
            ))
          }
        )),
          lh.on("onHidePopup", (()=>nh("onHidePopup"))),
          (e = Gp,
            t = Jp,
            n = ()=>{}
            ,
            t.onClose = (...e)=>(t.visible = !1,
              n.apply(null, e)),
            Sa(io({
              setup: ()=>()=>(Ir(),
                jr(e, t, null, 16))
            }))).mount(function(e) {
            let t = document.getElementById(e);
            return t || (t = document.createElement("div"),
              t.id = e,
              document.body.append(t)),
              t
          }("u-a-t"))
      }
    ))),
    setTimeout((()=>{
        Jp.visible = !0
      }
    ), 10)
}
const th = Fu("showToast", ((e,{resolve: t, reject: n})=>{
    eh(e),
      Zp = "onShowToast",
      t()
  }
), 0, bd);
function nh(e) {
  const {t: t} = pl();
  if (!Zp)
    return;
  let n = "";
  if ("onHideToast" === e && "onShowToast" !== Zp ? n = t("uni.showToast.unpaired") : "onHideLoading" === e && "onShowLoading" !== Zp && (n = t("uni.showLoading.unpaired")),
    n)
    return console.warn(n);
  Zp = "",
    setTimeout((()=>{
        Jp.visible = !1
      }
    ), 10)
}
function oh(e) {
  function t() {
    var t;
    t = e.navigationBar.titleText,
      document.title = t,
      lh.emit("onNavigationBarChange", {
        titleText: t
      })
  }
  Hn(t),
    mo(t)
}
const rh = Fu("setNavigationBarTitle", ((e,{resolve: t, reject: n})=>{
    !function(e, t, n, o, r) {
      if (!e)
        return r("page not found");
      const {navigationBar: i} = e;
      switch (t) {
        case "setNavigationBarColor":
          const {frontColor: e, backgroundColor: t, animation: o} = n
            , {duration: r, timingFunc: a} = o;
          e && (i.titleColor = "#000000" === e ? "#000000" : "#ffffff"),
          t && (i.backgroundColor = t),
            i.duration = r + "ms",
            i.timingFunc = a;
          break;
        case "showNavigationBarLoading":
          i.loading = !0;
          break;
        case "hideNavigationBarLoading":
          i.loading = !1;
          break;
        case "setNavigationBarTitle":
          const {title: s} = n;
          i.titleText = s
      }
      o()
    }(ic(), "setNavigationBarTitle", e, t, n)
  }
))
  , ih = Fu("pageScrollTo", (({scrollTop: e, selector: t, duration: n},{resolve: o})=>{
    !function(e, t, n) {
      if (O(e)) {
        const t = document.querySelector(e);
        if (t) {
          const {height: o, top: r} = t.getBoundingClientRect();
          e = r + window.pageYOffset,
          n && (e -= o)
        }
      }
      e < 0 && (e = 0);
      const o = document.documentElement
        , {clientHeight: r, scrollHeight: i} = o;
      if (e = Math.min(e, i - r),
      0 === t)
        return void (o.scrollTop = document.body.scrollTop = e);
      if (window.scrollY === e)
        return;
      const a = t=>{
          if (t <= 0)
            return void window.scrollTo(0, e);
          const n = e - window.scrollY;
          requestAnimationFrame((function() {
              window.scrollTo(0, window.scrollY + n / t * 10),
                a(t - 10)
            }
          ))
        }
      ;
      a(t)
    }(t || e || 0, n, !0),
      o()
  }
), 0, vd)
  , ah = Wc({
  name: "Layout",
  setup(e, {emit: t}) {
    const n = Zt(null);
    Jl({
      "--status-bar-height": "0px",
      "--top-window-height": "0px",
      "--window-left": "0px",
      "--window-right": "0px",
      "--window-margin": "0px",
      "--tab-bar-height": "0px"
    });
    const o = function() {
      const e = ul();
      return {
        routeKey: pi((()=>Hf("/" + e.meta.route, Of()))),
        isTabBar: pi((()=>e.meta.isTabBar)),
        routeCache: zf
      }
    }()
      , {layoutState: r, windowState: i} = function() {
      Lf();
      {
        const e = Dt({
          marginWidth: 0,
          leftWindowWidth: 0,
          rightWindowWidth: 0
        });
        return zn((()=>e.marginWidth), (e=>Jl({
          "--window-margin": e + "px"
        }))),
          zn((()=>e.leftWindowWidth + e.marginWidth), (e=>{
              Jl({
                "--window-left": e + "px"
              })
            }
          )),
          zn((()=>e.rightWindowWidth + e.marginWidth), (e=>{
              Jl({
                "--window-right": e + "px"
              })
            }
          )),
          {
            layoutState: e,
            windowState: pi((()=>({})))
          }
      }
    }();
    !function(e, t) {
      const n = Lf();
      function o() {
        const o = document.body.clientWidth
          , r = Df();
        let i = {};
        if (r.length > 0) {
          i = r[r.length - 1].$page.meta
        } else {
          const e = gc(n.path, !0);
          e && (i = e.meta)
        }
        const a = parseInt(String((x(i, "maxWidth") ? i.maxWidth : __uniConfig.globalStyle.maxWidth) || Number.MAX_SAFE_INTEGER));
        let s = !1;
        s = o > a,
          s && a ? (e.marginWidth = (o - a) / 2,
            _n((()=>{
                const e = t.value;
                e && e.setAttribute("style", "max-width:" + a + "px;margin:0 auto;")
              }
            ))) : (e.marginWidth = 0,
            _n((()=>{
                const e = t.value;
                e && e.removeAttribute("style")
              }
            )))
      }
      zn([()=>n.path], o),
        ko((()=>{
            o(),
              window.addEventListener("resize", o)
          }
        ))
    }(r, n);
    const a = function(e) {
      const t = Zt(!1);
      return pi((()=>({
        "uni-app--showtabbar": e && e.value,
        "uni-app--maxwidth": t.value
      })))
    }(!1);
    return ()=>{
      const e = function(e, t, n, o, r, i) {
        return function({routeKey: e, isTabBar: t, routeCache: n}) {
          return Ur(sl, null, {
            default: Nn((({Component: o})=>[(Ir(),
              jr(po, {
                matchBy: "key",
                cache: n
              }, [(Ir(),
                jr(Fo(o), {
                  type: t.value ? "tabBar" : "",
                  key: e.value
                }))], 1032, ["cache"]))])),
            _: 1
          })
        }(e)
      }(o);
      return Ur("uni-app", {
        ref: n,
        class: a.value
      }, [e, !1], 2)
    }
  }
});
const sh = w(Cl, {
  publishHandler(e, t, n) {
    lh.subscribeHandler(e, t, n)
  }
})
  , lh = w(Oc, {
  publishHandler(e, t, n) {
    sh.subscribeHandler(e, t, n)
  }
})
  , ch = Wc({
  name: "PageBody",
  setup: (e,t)=>()=>Ur(Pr, null, [!1, Ur("uni-page-wrapper", null, [Ur("uni-page-body", null, [Wo(t.slots, "default")])], 16)])
})
  , uh = Wc({
  name: "Page",
  setup(e, t) {
    const n = Pf(Of());
    return n.navigationBar,
      oh(n),
      ()=>Ur("uni-page", {
        "data-page": n.route
      }, [dh(t)])
  }
});
function dh(e) {
  return Ir(),
    jr(ch, {
      key: 0
    }, {
      default: Nn((()=>[Wo(e.slots, "page")])),
      _: 3
    })
}
const fh = {}
  , ph = function(e, t, n) {
  if (!t || 0 === t.length)
    return e();
  const o = document.getElementsByTagName("link");
  return Promise.all(t.map((e=>{
      if ((e = function(e) {
        return "/es/zhonghua/" + e
      }(e))in fh)
        return;
      fh[e] = !0;
      const t = e.endsWith(".css")
        , r = t ? '[rel="stylesheet"]' : "";
      if (!!n)
        for (let n = o.length - 1; n >= 0; n--) {
          const r = o[n];
          if (r.href === e && (!t || "stylesheet" === r.rel))
            return
        }
      else if (document.querySelector(`link[href="${e}"]${r}`))
        return;
      const i = document.createElement("link");
      return i.rel = t ? "stylesheet" : "modulepreload",
      t || (i.as = "script",
        i.crossOrigin = ""),
        i.href = e,
        document.head.appendChild(i),
        t ? new Promise(((t,n)=>{
            i.addEventListener("load", t),
              i.addEventListener("error", (()=>n(new Error(`Unable to preload CSS for ${e}`))))
          }
        )) : void 0
    }
  ))).then((()=>e()))
}
  , hh = {
  loading: "AsyncLoading",
  error: "AsyncError",
  delay: 200,
  timeout: 6e4,
  suspensible: !0
};
window.uni = {},
  window.wx = {},
  window.rpx2px = Gu;
const mh = Object.assign({})
  , gh = Object.assign;
window.__uniConfig = gh({
  globalStyle: {
    backgroundColor: "#F8F8F8",
    navigationBar: {
      style: "custom",
      type: "default",
      titleColor: "#000000"
    },
    isNVue: !1
  },
  uniIdRouter: {},
  compilerVersion: "3.96"
}, {
  appId: "__UNI__EEA64FC",
  appName: "BrandDisplay",
  appVersion: "1.0.0",
  appVersionCode: 2,
  async: hh,
  debug: !1,
  networkTimeout: {
    request: 6e4,
    connectSocket: 6e4,
    uploadFile: 6e4,
    downloadFile: 6e4
  },
  sdkConfigs: {},
  qqMapKey: void 0,
  googleMapKey: void 0,
  aMapKey: void 0,
  aMapSecurityJsCode: void 0,
  aMapServiceHost: void 0,
  nvue: {
    "flex-direction": "column"
  },
  locale: "",
  fallbackLocale: "",
  locales: Object.keys(mh).reduce(((e,t)=>{
      const n = t.replace(/\.\/locale\/(uni-app.)?(.*).json/, "$2");
      return gh(e[n] || (e[n] = {}), mh[t].default),
        e
    }
  ), {}),
  router: {
    mode: "hash",
    base: "/es/zhonghua/",
    assets: "assets",
    routerBase: "/es/zhonghua/"
  },
  darkmode: !1,
  themeConfig: {}
}),
  window.__uniLayout = window.__uniLayout || {};
const vh = {
  delay: hh.delay,
  timeout: hh.timeout,
  suspensible: hh.suspensible
};
hh.loading && (vh.loadingComponent = {
  name: "SystemAsyncLoading",
  render: ()=>Ur(Do(hh.loading))
}),
hh.error && (vh.errorComponent = {
  name: "SystemAsyncError",
  render: ()=>Ur(Do(hh.error))
});
const yh = ()=>ph((()=>import("./pages-qypp-decryption.f671668e.js")), ["assets/pages-qypp-decryption.f671668e.js", "assets/uni-app.es.1a417ed1.js"]).then((e=>fp(e.default || e)))
  , bh = so(gh({
  loader: yh
}, vh))
  , _h = ()=>ph((()=>import("./pages-qypp-qyppCon.bf616da0.js")), ["assets/pages-qypp-qyppCon.bf616da0.js", "assets/002.4306261b.js", "assets/003.b6f737c9.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/uni-app.es.1a417ed1.js", "assets/uni-popup.1e02b1d9.js", "assets/uni-popup-808c05ff.css", "assets/qyppCon-8240f497.css"]).then((e=>fp(e.default || e)))
  , wh = so(gh({
  loader: _h
}, vh))
  , Sh = ()=>ph((()=>import("./pages-activitie-activitie.62d77956.js")), ["assets/pages-activitie-activitie.62d77956.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/activitie-07e9600b.css"]).then((e=>fp(e.default || e)))
  , Th = so(gh({
  loader: Sh
}, vh))
  , xh = ()=>ph((()=>import("./pages-tfd-tfdList.d9b54f7d.js")), ["assets/pages-tfd-tfdList.d9b54f7d.js", "assets/uni-popup.1e02b1d9.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/uni-app.es.1a417ed1.js", "assets/uni-popup-808c05ff.css", "assets/tfdList-11e7653a.css"]).then((e=>fp(e.default || e)))
  , Ch = so(gh({
  loader: xh
}, vh))
  , Eh = ()=>ph((()=>import("./pages-brandIntroduction-brandIntroduction.a2b6a0f7.js")), ["assets/pages-brandIntroduction-brandIntroduction.a2b6a0f7.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/brandIntroduction-1e26190c.css"]).then((e=>fp(e.default || e)))
  , kh = so(gh({
  loader: Eh
}, vh))
  , Ph = ()=>ph((()=>import("./pages-specificationList-specificationList.11d834a7.js")), ["assets/pages-specificationList-specificationList.11d834a7.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/specificationList-0dea729b.css"]).then((e=>fp(e.default || e)))
  , Lh = so(gh({
  loader: Ph
}, vh))
  , Oh = ()=>ph((()=>import("./pages-specificationDetails-specificationDetails.abc52324.js")), ["assets/pages-specificationDetails-specificationDetails.abc52324.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/015.ce6fccb6.js", "assets/003.b6f737c9.js", "assets/015-2c18e10a.css", "assets/002.4306261b.js", "assets/specificationDetails-9290eef2.css"]).then((e=>fp(e.default || e)))
  , Ah = so(gh({
  loader: Oh
}, vh))
  , Bh = ()=>ph((()=>import("./pages-brandActivity-brandActivity.782ea239.js")), ["assets/pages-brandActivity-brandActivity.782ea239.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/brandActivity-b54143a2.css"]).then((e=>fp(e.default || e)))
  , $h = so(gh({
  loader: Bh
}, vh))
  , Ih = ()=>ph((()=>import("./pages-antiKnowledge-antiKnowledge.afba52c8.js")), ["assets/pages-antiKnowledge-antiKnowledge.afba52c8.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/viewer.deccfb49.js", "assets/viewer-bd328ae4.css", "assets/antiKnowledge-6c3d57a8.css"]).then((e=>fp(e.default || e)))
  , Nh = so(gh({
  loader: Ih
}, vh))
  , Mh = ()=>ph((()=>import("./pages-announcement-announcementList.659ac6be.js")), ["assets/pages-announcement-announcementList.659ac6be.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/announcementList-1f0a4e67.css"]).then((e=>fp(e.default || e)))
  , Rh = so(gh({
  loader: Mh
}, vh))
  , Dh = ()=>ph((()=>import("./pages-announcement-announcementDetails.1cabf485.js")), ["assets/pages-announcement-announcementDetails.1cabf485.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/viewer.deccfb49.js", "assets/viewer-bd328ae4.css", "assets/announcementDetails-0578c41e.css"]).then((e=>fp(e.default || e)))
  , jh = so(gh({
  loader: Dh
}, vh))
  , Fh = ()=>ph((()=>import("./pages-brandIntroduction-brandSpecificationList.8fbbcadd.js")), ["assets/pages-brandIntroduction-brandSpecificationList.8fbbcadd.js", "assets/nav-title.288f6c4b.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/nav-title-84ecdcdf.css", "assets/uni-app.es.1a417ed1.js", "assets/brandSpecificationList-2750ddbc.css"]).then((e=>fp(e.default || e)))
  , Vh = so(gh({
  loader: Fh
}, vh))
  , qh = ()=>ph((()=>import("./pages-tfd-tfdDetails.e58c5262.js")), ["assets/pages-tfd-tfdDetails.e58c5262.js", "assets/015.ce6fccb6.js", "assets/003.b6f737c9.js", "assets/_plugin-vue_export-helper.1b428a4d.js", "assets/015-2c18e10a.css", "assets/uni-app.es.1a417ed1.js", "assets/tfdDetails-6b0c0c79.css"]).then((e=>fp(e.default || e)))
  , Hh = so(gh({
  loader: qh
}, vh));
function Wh(e, t) {
  return Ir(),
    jr(uh, null, {
      page: Nn((()=>[Ur(e, gh({}, t, {
        ref: "page"
      }), null, 512)])),
      _: 1
    })
}
window.__uniRoutes = [{
  path: "/",
  alias: "/pages/qypp/decryption",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(bh, t)
    }
  },
  loader: yh,
  meta: {
    isQuit: !0,
    isEntry: !0,
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/qypp/qyppCon",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(wh, t)
    }
  },
  loader: _h,
  meta: {
    navigationBar: {
      titleText: "首页",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/activitie/activitie",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Th, t)
    }
  },
  loader: Sh,
  meta: {
    enablePullDownRefresh: !1,
    disableScroll: !0,
    navigationBar: {
      titleText: "品牌活动",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/tfd/tfdList",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Ch, t)
    }
  },
  loader: xh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "测试列表",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/brandIntroduction/brandIntroduction",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(kh, t)
    }
  },
  loader: Eh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "品牌介绍",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/specificationList/specificationList",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Lh, t)
    }
  },
  loader: Ph,
  meta: {
    enablePullDownRefresh: !1,
    disableScroll: !0,
    navigationBar: {
      titleText: "新品介绍",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/specificationDetails/specificationDetails",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Ah, t)
    }
  },
  loader: Oh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "产品信息",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/brandActivity/brandActivity",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh($h, t)
    }
  },
  loader: Bh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "品牌活动",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/antiKnowledge/antiKnowledge",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Nh, t)
    }
  },
  loader: Ih,
  meta: {
    enablePullDownRefresh: !1,
    disableScroll: !0,
    bounce: "none",
    navigationBar: {
      titleText: "防伪知识",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/announcement/announcementList",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Rh, t)
    }
  },
  loader: Mh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "公告信息",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/announcement/announcementDetails",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(jh, t)
    }
  },
  loader: Dh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "公告信息",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/brandIntroduction/brandSpecificationList",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Vh, t)
    }
  },
  loader: Fh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "产品信息",
      type: "default"
    },
    isNVue: !1
  }
}, {
  path: "/pages/tfd/tfdDetails",
  component: {
    setup() {
      const e = lp()
        , t = e && e.$route && e.$route.query || {};
      return ()=>Wh(Hh, t)
    }
  },
  loader: qh,
  meta: {
    enablePullDownRefresh: !1,
    navigationBar: {
      titleText: "模拟企业服务页",
      type: "default"
    },
    isNVue: !1
  }
}].map((e=>(e.meta.route = (e.alias || e.path).slice(1),
  e)));
const zh = {
  __name: "App",
  setup: e=>(e,t)=>null
};
function Uh(e) {
  const t = ["6901028010085_6901028010078.json", "6901028010115_6901028010108.json", "6901028010146_6901028010139.json", "6901028010351_6901028010344.json", "6901028010597_6901028010580.json", "6901028010740_6901028010733.json", "6901028010771_6901028010764.json", "6901028010801_6901028010795.json", "6901028018227_6901028018210.json", "6901028018289_6901028018272.json", "6901028018340_6901028018333.json", "6901028018371_6901028018364.json", "6901028018401_6901028018395.json", "6901028018432_6901028018425.json", "6901028018630_6901028018623.json", "6901028018661_6901028018654.json", "6901028018692_6901028018685.json", "6901028018722_6901028018715.json", "6901028018753_6901028018746.json", "6901028018791_6901028018777.json", "6901028018968_6901028018951.json", "6901028070072_6901028070065.json", "6901028071475_6901028071468.json", "6901028071505_6901028071499.json", "6901028071536_6901028071529.json", "6901028071680_6901028071673.json", "6901028071772_6901028071765.json", "6901028072557_6901028072540.json", "6901028072618_6901028072601.json", "6901028073561_6901028073554.json", "6901028073806_6901028073790.json", "6901028074841_6901028074834.json", "6901028075015_6901028075763.json", "6901028075022_6901028075770.json", "6901028075053_6901028075862.json", "6901028075084_6901028075800.json", "6901028075138_6901028075916.json", "6901028075145_6901028075831.json", "6901028075725_6901028075718.json", "6901028076005_6901028075992.json", "6901028076562_6901028076555.json", "6901028212137_6901028212120.json", "6901028212168_6901028212151.json", "6901028212199_6901028212182.json", "6901028212229_6901028212212.json", "6901028212250_6901028212243.json", "6901028212281_6901028212274.json", "6901028212311_6901028212304.json", "6901028212342_6901028212335.json", "6901028212373_6901028212366.json"];
  let n = null;
  for (let o of t.values())
    if (o.includes(e)) {
      n = o;
      break
    }
  return n
}
dp(zh, {
  init: cp,
  setup(e) {
    const t = Lf()
      , n = ()=>{
        var n;
        n = e,
          Object.keys(rd).forEach((e=>{
              rd[e].forEach((t=>{
                  xo(e, t, n)
                }
              ))
            }
          ));
        const {onLaunch: o, onShow: r, onPageNotFound: i, onError: a} = e
          , s = function({path: e, query: t}) {
          return w(_d, {
            path: e,
            query: t
          }),
            w(wd, _d),
            w({}, _d)
        }({
          path: t.path.slice(1) || __uniRoutes[0].meta.route,
          query: ge(t.query)
        });
        if (o && X(o, s),
        r && X(r, s),
          !t.matched.length) {
          const e = {
            notFound: !0,
            openType: "appLaunch",
            path: t.path,
            query: {},
            scene: 1001
          };
          i && X(i, e)
        }
        a && (e.appContext.config.errorHandler = e=>{
            X(a, e)
          }
        )
      }
    ;
    return qn(Js).isReady().then(n),
      ko((()=>{
          window.addEventListener("resize", be(pp, 50, {
            setTimeout: setTimeout,
            clearTimeout: clearTimeout
          })),
            window.addEventListener("message", hp),
            document.addEventListener("visibilitychange", mp),
            function() {
              let e = null;
              try {
                e = window.matchMedia("(prefers-color-scheme: dark)")
              } catch (t) {}
              if (e) {
                let t = e=>{
                    lh.emit("onThemeChange", {
                      theme: e.matches ? "dark" : "light"
                    })
                  }
                ;
                e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
              }
            }()
        }
      )),
      t.query
  },
  before(e) {
    e.mpType = "app";
    const {setup: t} = e
      , n = ()=>(Ir(),
      jr(ah));
    e.setup = (e,o)=>{
      const r = t && t(e, o);
      return L(r) ? n : r
    }
      ,
      e.render = n
  }
});
let Xh = Bp().ua.toLowerCase().includes("alipayclient");
let Yh = "";
Yh = "https://yxzx.shtb.cn";
const Gh = {
  path: "/qyppzs/businessmng/doLogin",
  port_local: ":8082",
  port_dev: ":8080",
  port: ""
}
  , Jh = {
  path: "/qyppzs/businessmng/decrypt/doDecrypt",
  port_local: ":8082",
  port_dev: ":8080",
  port: ""
}
  , Kh = {
  path: "/qyppzs/businessmng/qrCodeVerify/verify",
  port_local: ":8082",
  port_dev: ":8080",
  port: ""
}
  , Zh = {
  path: "/qyppzs/audit/audit/syncAudit",
  port_local: ":8081",
  port_dev: ":8080",
  port: ""
};
async function Qh(e, t) {
  try {
    let n = null;
    n = `${Yh}${e.port || ":8800"}${e.path}`;
    const o = {
      url: n,
      method: t.method || "POST",
      header: {
        ...t.header
      },
      data: {
        ...t.data
      }
    };
    return Fp(o)
  } catch (n) {
    console.error(n)
  }
}
async function em(e) {
  const {BASE_URL: t} = {
    VITE_USER_NODE_ENV: "production",
    VITE_ROOT_DIR: "/Users/lihuifang/Documents/code/brand-display",
    BASE_URL: "/es/zhonghua/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
  };
  try {
    let n = `${t}${e}?m=${(new Date).getMinutes()}`;
    return new Promise(((e,t)=>{
        Fp({
          url: n,
          success: t=>{
            let n = JSON.stringify(t);
            n = n.replaceAll(".jpg", `.jpg?v=${Ap().appVersionCode}`);
            const o = JSON.parse(n);
            e(o)
          }
          ,
          fail: e=>{
            t(e)
          }
        })
      }
    ))
  } catch (n) {
    console.error(n)
  }
}
async function tm(e) {
  var t, n, o;
  const {appVersion: r} = Ap()
    , {system: i, deviceId: a} = Op();
  let s = "";
  try {
    "undefined" != typeof returnCitySN && (s = null == returnCitySN ? void 0 : returnCitySN.cip)
  } catch (c) {
    console.error(c)
  }
  const l = {
    vr: r,
    sys: i,
    scanning_user: a,
    op_time: Date.now(),
    ip: s,
    qrcode: null == (t = Np("scanData")) ? void 0 : t.acCode,
    cigcode: null == (o = null == (n = Np("scanData")) ? void 0 : n.info) ? void 0 : o.CIG_CODE,
    ...e
  };
}
uni.setTitle = function(e) {
  Xh ? AlipayJSBridge.call("setTitle", {
    title: e
  }) : rh({
    title: e
  })
}
  ,
  function() {
    Ku("request", {
      success(e) {
        (async e=>{
            var t, n, o, r, i, a;
            try {
              let s = {};
              const {data: l} = e
                , c = Df();
              if (600 == l.code && (null == l ? void 0 : l.data) && (null == l ? void 0 : l.data.decryptedData))
                s.op_enc = Np("secretCode"),
                  s.op_dec = l.data.decryptedData;
              else if (601 == l.code)
                s.op_dec = l.data,
                  s.op_enc = Np("secretCode");
              else if (null == (n = null == (t = l.result) ? void 0 : t.CIG_INFO) ? void 0 : n.CIG_CODE) {
                if (!c.find((e=>e.route.includes("brandSpecificationList"))))
                  return;
                const {CIG_CODE: e, CIG_NAME: t} = null == (o = l.result) ? void 0 : o.CIG_INFO;
                s.menu_code = `CPXX_产品code(${e})`,
                  s.op_parameter = `产品信息—产品名称(${t})`
              } else if (null == (r = l.result) ? void 0 : r.ASID_LIST) {
                const {BRAND_CODE: e, BRAND_NAME: t} = l.result;
                s.menu_code = `FWZS_品牌CODE (${e})`,
                  s.op_parameter = `防伪知识—品牌名称(${t})`
              } else if (null == (i = l.result) ? void 0 : i.ACTIVITY_ID) {
                const {ACTIVITY_ID: e, ACTIVITY_TITLE: t} = l.result;
                s.menu_code = `PPHD_活动ID(${e})`,
                  s.op_parameter = `品牌活动—活动标题(${t})`
              } else if (null == (a = l.result) ? void 0 : a.IB_ID) {
                const {IB_ID: e, IB_TITLE: t} = l.result;
                s.menu_code = `GGXX_公告ID(${e})`,
                  s.op_parameter = `公告信息—公告标题(${t})`
              }
              Object.keys(s).length > 0 && tm(s)
            } catch (s) {
              console.error(s)
            }
          }
        )(e)
      }
    });
    const e = (t,n)=>{
        if (!t)
          return null;
        if (!t.classList)
          return null;
        return t.classList.contains(n) ? t : e(t.parentElement, n)
      }
      , t = (e,n)=>{
        if (!e)
          return null;
        if (!e.parentElement)
          return null;
        const o = e.dataset[n];
        return null == o ? t(e.parentElement, n) : {
          el: e,
          val: o
        }
      }
    ;
    document.addEventListener("click", (n=>{
        (async n=>{
            var o, r, i;
            try {
              const {target: a} = n;
              Df();
              let s = {};
              const l = a.parentElement;
              if (e(a, "age-pop"))
                e(a, "y") ? (s.menu_code = "18OK",
                  s.op_parameter = "平台18周岁确定") : e(a, "n") && (s.menu_code = "18NO",
                  s.op_parameter = "平台18周岁取消");
              else if (e(a, "swiper") && "IMG" == a.nodeName)
                s.menu_code = "SYLB",
                  s.op_parameter = "首页轮播图片链接点击";
              else if (e(a, "feature")) {
                const {val: e} = t(a, "num");
                if ("0" == e) {
                  const e = null == (o = Np("scanData")) ? void 0 : o.info.CIG_CODE
                    , t = null == (r = Np("scanData")) ? void 0 : r.info.CIG_NAME;
                  s.menu_code = `SMYZ_产品code(${e})`,
                    s.op_parameter = `扫码验证_产品名称(${t})`
                } else
                  "1" == e ? (s.menu_code = "CPCX",
                    s.op_parameter = "产品查询") : "2" == e ? (s.menu_code = "FWZS",
                    s.op_parameter = "防伪知识") : "3" == e ? (s.menu_code = "PPHD",
                    s.op_parameter = "品牌活动") : "4" == e && (s.menu_code = "GGXX",
                    s.op_parameter = "公告信息")
              } else if ("扫码验证" == document.title && "防伪知识" == a.innerHTML) {
                const e = null == (i = uni.scanData) ? void 0 : i.info.CIG_NAME;
                s.menu_code = "SMYZ_FWZS",
                  s.op_parameter = `扫码验证-产品名称(${e})防伪知识`
              } else if ("产品信息" == document.title && a.innerHTML.includes("防伪知识")) {
                const e = t(a, "code")
                  , n = t(a, "name");
                s.menu_code = `CPXX_FWZS_产品code(${e.val})`,
                  s.op_parameter = `产品信息-产品名称(${n.val})防伪知识`
              } else if ("品牌介绍" == document.title) {
                const {val: e} = t(a, "name");
                e.includes("中华") ? (s.menu_code = "PPJS_ZH",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("熊猫") ? (s.menu_code = "PPJS_XM",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("牡丹") ? (s.menu_code = "PPJS_MD",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("中南海") ? (s.menu_code = "PPJS_ZNH",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("红双喜") ? (s.menu_code = "PPJS_HSX",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("恒大") ? (s.menu_code = "PPJS_HD",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`) : e.includes("大前门") && (s.menu_code = "PPJS_DQM",
                  s.op_parameter = `产品查询-品牌介绍 ${e}`)
              } else if (null == l ? void 0 : l.innerHTML.includes("011.png"))
                s.menu_code = "XPTJ",
                  s.op_parameter = "新品推荐—更多";
              else if (t(a, "xptj")) {
                const {el: e, val: n} = t(a, "xptj")
                  , o = e.querySelector(".tit");
                s.menu_code = `XPTJ_产品code(${n})`,
                  s.op_parameter = `新品推荐—产品名称（${o.innerHTML}）`
              } else if (t(a, "lbType")) {
                const {el: e, val: n} = t(a, "lbType");
                switch (n) {
                  case "1":
                    console.log(n);
                    break;
                  case "2":
                    const {el: e, val: n} = t(a, "lbCode");
                    s.menu_code = `SYLB_产品code(${n})`,
                      s.op_parameter = ""
                }
              }
              Object.keys(s).length > 0 && tm(s)
            } catch (a) {
              console.error(a)
            }
          }
        )(n)
      }
    ), !0)
  }(),
  function() {
    const e = Sa(zh)
      , t = Bp().ua.toLowerCase();
    return ["MicroMessenger", "AlipayClient"].some((e=>t.includes(e.toLowerCase()))),
      {
        app: e
      }
  }().app.use(ep).mount("#app");
export {ri as $, Gh as A, zr as B, pf as C, nd as D, Mo as E, Pr as F, ga as G, Wo as H, Ud as I, s as J, n as K, Do as L, Bp as M, ih as N, Np as O, Kh as P, uf as Q, lf as R, af as S, zn as T, io as U, Ao as V, _n as W, hi as X, wa as Y, O as Z, xo as _, Mp as a, ee as a0, te as a1, ne as a2, oe as a3, li as a4, Qh as b, Uh as c, Jh as d, em as e, zp as f, Ir as g, Dr as h, Ho as i, Ur as j, Gr as k, jr as l, Ld as m, Wp as n, ko as o, hf as p, th as q, Zt as r, $p as s, Yr as t, nn as u, f as v, Nn as w, Fo as x, _p as y, Qc as z};
