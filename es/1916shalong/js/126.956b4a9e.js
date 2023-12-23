"use strict";
(self["webpackChunkvue_h5_template"] = self["webpackChunkvue_h5_template"] || []).push([[126], {
    96126: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return p
            }
        });
        var o = function () {
            var t = this, e = t._self._c;
            return e("div", {staticClass: "home"}, [e("div", {staticClass: "home-body"}, [e("div", {staticClass: "zhanwei"}), e("div", {staticClass: "contain"}, [e("van-field", {
                attrs: {
                    center: "",
                    placeholder: "请输入验证码"
                }, scopedSlots: t._u([{
                    key: "button", fn: function () {
                        return [e("van-button", {
                            attrs: {size: "small", type: "primary"},
                            on: {click: t.pButton}
                        }, [t._v("提交")])]
                    }, proxy: !0
                }]), model: {
                    value: t.inputValue, callback: function (e) {
                        t.inputValue = e
                    }, expression: "inputValue"
                }
            })], 1), e("div", {staticClass: "home-img"}, [e("img", {
                staticClass: "img-size-1",
                attrs: {src: i(55829), alt: ""},
                on: {click: t.toArticle}
            }), e("img", {
                staticClass: "img-size-2",
                attrs: {src: i(73707), alt: ""},
                on: {click: t.toWelfare}
            }), e("img", {
                staticClass: "img-size-2",
                attrs: {src: i(31363), alt: ""},
                on: {click: t.toTerritory}
            })]), e("van-overlay", {
                attrs: {show: t.isShow},
                on: {click: t.isShowImg}
            }, [e("div", {staticClass: "wrapper"}, [t.isShow2 ? e("img", {
                staticClass: "dia-img",
                attrs: {src: i(12252)}
            }) : t._e()])]), e("van-overlay", {attrs: {show: t.popupShow2}}, [e("div", {staticClass: "pop2"}, [e("img", {
                staticClass: "pop-img",
                attrs: {src: i(80451)}
            })])]), e("van-overlay", {attrs: {show: t.popupShow}}, [e("div", {staticClass: "pop"}, [e("img", {
                staticClass: "pop-img",
                attrs: {src: i(24953)},
                on: {click: t.toPopArticle}
            }), e("img", {
                staticClass: "pop-img2", attrs: {src: i(48134)}, on: {
                    click: function (e) {
                        t.popupShow = !1
                    }
                }
            })])])], 1)])
        }, n = [], s = (i(70560), i(17220)), r = i(51836), a = {
            data() {
                return {inputValue: "", isShow: !1, isShow2: !1, popupShow: !0, popupShow2: !0}
            }, created() {
                this.getLogin()
            }, mounted() {
            }, methods: {
                async getLogin() {
                    let t = "";
                    this.$onDeviceReady((e => {
                        t = e
                    }));
                    const e = await (0, s.m3)({equipmentCode: "11111111"});
                    200 == e.code && (0, r.o4)(e.data.token), console.log("res.data.token", e.data.token)
                }, async pButton() {
                    const t = await (0, s.FA)({code: this.inputValue});
                    let e = t.data.number, i = t.data.time;
                    1 == t.data.type ? (this.isShow = !0, this.isShow2 = !0) : this.$router.push({
                        path: "/verification",
                        query: {number: e, time: i}
                    })
                }, isShowImg() {
                    this.isShow = !1, this.isShow2 = !1, this.inputValue = ""
                }, toArticle() {
                    window.location.href = "https://mp.weixin.qq.com/s/oeE7aKfz26abiQZs4Voj9A"
                }, toPopArticle() {
                    window.location.href = "https://mp.weixin.qq.com/s/Ucx-p2A75o5gMI9JoAcQvg"
                }, toWelfare() {
                    this.$router.push("/welfare")
                }, toTerritory() {
                    this.$router.push("/territory")
                }
            }
        }, c = a, u = i(1001), l = (0, u.Z)(c, o, n, !1, null, "8224b1f0", null), p = l.exports
    }, 17220: function (t, e, i) {
        i.d(e, {
            o5: function () {
                return y
            }, yQ: function () {
                return v
            }, PO: function () {
                return g
            }, DH: function () {
                return f
            }, m3: function () {
                return h
            }, cL: function () {
                return d
            }, rR: function () {
                return m
            }, FA: function () {
                return w
            }
        });
        const o = {
            Login: "/view-user/login",
            SignIn: "/view-user/signIn",
            SupplementaryAttendance: "/view-user/supplementaryAttendance",
            VerificationOfTruth: "/verification-code/checking",
            Details: "/view-user/get",
            GrowthValue: "/view-user/growthValue",
            CreateVerifys: "/view-user/createVerifys",
            BindPhone: "/view-user/bindPhone"
        };
        var n = o, s = (i(34837), i(39146)), r = i(5121), a = i(38820), c = i(51836), u = i(61073);
        const l = r.Z.create({baseURL: u.baseApi, withCredentials: !0, timeout: 5e3});
        l.interceptors.request.use((t => {
            t.hideloading || s.Z.loading({forbidClick: !0});
            let e = (0, c.LP)();
            return e && (t.headers["token"] = e), t
        }), (t => (console.log(t), Promise.reject(t)))), l.interceptors.response.use((t => {
            s.Z.clear();
            const e = t.data;
            return e.status && 200 !== e.status ? (401 === e.status && a.Z.dispatch("FedLogOut").then((() => {
                location.reload()
            })), Promise.reject(e || "error")) : Promise.resolve(e)
        }), (t => (s.Z.clear(), console.log("err" + t), Promise.reject(t))));
        var p = l;

        function h(t) {
            return p({url: n.Login, method: "post", data: t})
        }

        function d(t) {
            return p({url: n.SignIn, method: "get", data: t})
        }

        function m(t) {
            return p({url: n.SupplementaryAttendance, method: "post", data: t})
        }

        function g(t) {
            return p({url: n.Details, method: "get", data: t})
        }

        function f(t) {
            return p({url: n.GrowthValue, method: "post", data: t, hideloading: !0})
        }

        function w(t) {
            return p({url: n.VerificationOfTruth, method: "post", data: t, hideloading: !0})
        }

        function v(t) {
            return p({url: n.CreateVerifys, method: "get", data: t})
        }

        function y(t) {
            return p({url: n.BindPhone, method: "post", data: t, hideloading: !0})
        }
    }, 51836: function (t, e, i) {
        function o(t) {
            sessionStorage.setItem("token", t)
        }

        function n() {
            return sessionStorage.getItem("token")
        }

        i.d(e, {
            LP: function () {
                return n
            }, o4: function () {
                return o
            }
        })
    }, 55829: function (t, e, i) {
        t.exports = i.p + "img/home-1.adcc4d00.png"
    }, 73707: function (t, e, i) {
        t.exports = i.p + "img/home-2.4a67f139.png"
    }, 31363: function (t, e, i) {
        t.exports = i.p + "img/home-3.4236cea5.png"
    }, 80451: function (t, e, i) {
        t.exports = i.p + "img/home-gongzhonhao.bf6966bc.png"
    }, 48134: function (t, e, i) {
        t.exports = i.p + "img/home-guanbi.77aae246.png"
    }, 24953: function (t, e, i) {
        t.exports = i.p + "img/home-popup.a025989b.png"
    }, 12252: function (t, e, i) {
        t.exports = i.p + "img/tishi.53d08834.jpg"
    }
}]);
