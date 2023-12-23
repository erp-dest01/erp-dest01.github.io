"use strict";
(self["webpackChunkvue_h5_template"] = self["webpackChunkvue_h5_template"] || []).push([[283], {
    75283: function (e, t, a) {
        a.r(t), a.d(t, {
            default: function () {
                return f
            }
        });
        var n = function () {
            var e = this, t = e._self._c;
            return t("div", {staticClass: "app-container"}, [t("div", {staticClass: "layout-content"}, [e.$route.meta.keepAlive ? t("keep-alive", [t("router-view")], 1) : t("router-view")], 1)])
        }, l = [], r = function () {
            var e = this, t = e._self._c;
            return t("div", [t("van-tabbar", {
                attrs: {fixed: "", route: ""},
                on: {change: e.handleChange},
                model: {
                    value: e.active, callback: function (t) {
                        e.active = t
                    }, expression: "active"
                }
            }, e._l(e.data, (function (a, n) {
                return t("van-tabbar-item", {
                    key: n,
                    attrs: {to: a.to, icon: a.icon}
                }, [e._v(" " + e._s(a.title) + " ")])
            })), 1)], 1)
        }, u = [], i = {
            name: "TabBar",
            props: {defaultActive: {type: Number, default: 0}, data: {type: Array, default: () => []}},
            data() {
                return {active: this.defaultActive}
            },
            methods: {
                handleChange(e) {
                    this.$emit("change", e)
                }
            }
        }, o = i, s = a(1001), c = (0, s.Z)(o, r, u, !1, null, "4a454b4a", null), v = c.exports, d = {
            name: "AppLayout", data() {
                return {tabbars: []}
            }, components: {TabBar: v}, methods: {
                handleChange(e) {
                    console.log("tab value:", e)
                }
            }
        }, h = d, p = (0, s.Z)(h, n, l, !1, null, null, null), f = p.exports
    }
}]);
