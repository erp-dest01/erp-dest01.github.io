import {
  r as e,
  o as t,
  e as s,
  g as i,
  h as a,
  u as r,
  F as n,
  i as l,
  j as o,
  k as d,
  w as p,
  l as c,
  n as u,
  m,
  p as h,
  q as f,
  t as g,
  v,
  x as w,
  y as b
} from "./index-226e1ea7.js";
import {_ as y} from "./002.4306261b.js";
import {_ as x} from "./003.b6f737c9.js";
import {_ as E} from "./_plugin-vue_export-helper.1b428a4d.js";
import {o as S, a as T, b as M, r as C} from "./uni-app.es.1a417ed1.js";
import {_ as A} from "./uni-popup.1e02b1d9.js";

function P(e) {
  return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
}

function z(e, t) {
  void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((s => {
    void 0 === e[s] ? e[s] = t[s] : P(t[s]) && P(e[s]) && Object.keys(t[s]).length > 0 && z(e[s], t[s])
  }))
}

const k = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    }, nodeName: ""
  },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createEvent: () => ({
    initEvent() {
    }
  }),
  createElement: () => ({
    children: [], childNodes: [], style: {}, setAttribute() {
    }, getElementsByTagName: () => []
  }),
  createElementNS: () => ({}),
  importNode: () => null,
  location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
};

function L() {
  const e = "undefined" != typeof document ? document : {};
  return z(e, k), e
}

const I = {
  document: k,
  navigator: {userAgent: ""},
  location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
  history: {
    replaceState() {
    }, pushState() {
    }, go() {
    }, back() {
    }
  },
  CustomEvent: function () {
    return this
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle: () => ({getPropertyValue: () => ""}),
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia: () => ({}),
  requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
  cancelAnimationFrame(e) {
    "undefined" != typeof setTimeout && clearTimeout(e)
  }
};

function O() {
  const e = "undefined" != typeof window ? window : {};
  return z(e, I), e
}

function D(e, t) {
  return void 0 === t && (t = 0), setTimeout(e, t)
}

function $() {
  return Date.now()
}

function B(e, t) {
  void 0 === t && (t = "x");
  const s = O();
  let i, a, r;
  const n = function (e) {
    const t = O();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
  }(e);
  return s.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new s.WebKitCSSMatrix("none" === a ? "" : a)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (a = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (a = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), a || 0
}

function G(e) {
  return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
}

function R(e) {
  return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
}

function H() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < arguments.length; s += 1) {
    const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
    if (null != i && !R(i)) {
      const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
      for (let t = 0, a = s.length; t < a; t += 1) {
        const a = s[t], r = Object.getOwnPropertyDescriptor(i, a);
        void 0 !== r && r.enumerable && (G(e[a]) && G(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : H(e[a], i[a]) : !G(e[a]) && G(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : H(e[a], i[a])) : e[a] = i[a])
      }
    }
  }
  return e
}

function Y(e, t, s) {
  e.style.setProperty(t, s)
}

function N(e) {
  let {swiper: t, targetPosition: s, side: i} = e;
  const a = O(), r = -t.translate;
  let n, l = null;
  const o = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
  const d = s > r ? "next" : "prev", p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t, c = () => {
    n = (new Date).getTime(), null === l && (l = n);
    const e = Math.max(Math.min((n - l) / o, 1), 0), d = .5 - Math.cos(e * Math.PI) / 2;
    let u = r + d * (s - r);
    if (p(u, s) && (u = s), t.wrapperEl.scrollTo({[i]: u}), p(u, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
      t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[i]: u})
    })), void a.cancelAnimationFrame(t.cssModeFrameID);
    t.cssModeFrameID = a.requestAnimationFrame(c)
  };
  c()
}

function _(e) {
  return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
}

function j(e, t) {
  return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
}

function q(e, t) {
  void 0 === t && (t = []);
  const s = document.createElement(e);
  return s.classList.add(...Array.isArray(t) ? t : [t]), s
}

function X(e) {
  const t = O(), s = L(), i = e.getBoundingClientRect(), a = s.body, r = e.clientTop || a.clientTop || 0,
    n = e.clientLeft || a.clientLeft || 0, l = e === t ? t.scrollY : e.scrollTop,
    o = e === t ? t.scrollX : e.scrollLeft;
  return {top: i.top + l - r, left: i.left + o - n}
}

function V(e, t) {
  return O().getComputedStyle(e, null).getPropertyValue(t)
}

function F(e) {
  let t, s = e;
  if (s) {
    for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
    return t
  }
}

function W(e, t) {
  const s = [];
  let i = e.parentElement;
  for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
  return s
}

function U(e, t) {
  t && e.addEventListener("transitionend", (function s(i) {
    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s))
  }))
}

function Q(e, t, s) {
  const i = O();
  return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
}

let K, Z, J;

function ee() {
  return K || (K = function () {
    const e = O(), t = L();
    return {
      smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
      touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
  }()), K
}

function te(e) {
  return void 0 === e && (e = {}), Z || (Z = function (e) {
    let {userAgent: t} = void 0 === e ? {} : e;
    const s = ee(), i = O(), a = i.navigator.platform, r = t || i.navigator.userAgent, n = {ios: !1, android: !1},
      l = i.screen.width, o = i.screen.height, d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = r.match(/(iPad).*OS\s([\d_]+)/);
    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === a;
    let h = "MacIntel" === a;
    return !p && h && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), h = !1), d && !m && (n.os = "android", n.android = !0), (p || u || c) && (n.os = "ios", n.ios = !0), n
  }(e)), Z
}

function se() {
  return J || (J = function () {
    const e = O();
    let t = !1;

    function s() {
      const t = e.navigator.userAgent.toLowerCase();
      return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
    }

    if (s()) {
      const s = String(e.navigator.userAgent);
      if (s.includes("Version/")) {
        const [e, i] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
        t = e < 16 || 16 === e && i < 2
      }
    }
    return {
      isSafari: t || s(),
      needPerspectiveFix: t,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
  }()), J
}

const ie = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
  if (s) {
    let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
    !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
      s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
    }))), t && t.remove()
  }
}, ae = (e, t) => {
  if (!e.slides[t]) return;
  const s = e.slides[t].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading")
}, re = e => {
  if (!e || e.destroyed || !e.params) return;
  let t = e.params.lazyPreloadPrevNext;
  const s = e.slides.length;
  if (!s || !t || t < 0) return;
  t = Math.min(t, s);
  const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
    a = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const s = a, r = [s - t];
    return r.push(...Array.from({length: t}).map(((e, t) => s + i + t))), void e.slides.forEach(((t, s) => {
      r.includes(t.column) && ae(e, s)
    }))
  }
  const r = a + i - 1;
  if (e.params.rewind || e.params.loop) for (let n = a - t; n <= r + t; n += 1) {
    const t = (n % s + s) % s;
    (t < a || t > r) && ae(e, t)
  } else for (let n = Math.max(a - t, 0); n <= Math.min(r + t, s - 1); n += 1) n !== a && (n > r || n < a) && ae(e, n)
};

function ne(e) {
  let {swiper: t, runCallbacks: s, direction: i, step: a} = e;
  const {activeIndex: r, previousIndex: n} = t;
  let l = i;
  if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${a}`), s && r !== n) {
    if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
    t.emit(`slideChangeTransition${a}`), "next" === l ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`)
  }
}

function le(e) {
  const t = this, s = L(), i = O(), a = t.touchEventsData;
  a.evCache.push(e);
  const {params: r, touches: n, enabled: l} = t;
  if (!l) return;
  if (!r.simulateTouch && "mouse" === e.pointerType) return;
  if (t.animating && r.preventInteractionOnTransition) return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let d = o.target;
  if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
  if ("which" in o && 3 === o.which) return;
  if ("button" in o && o.button > 0) return;
  if (a.isTouched && a.isMoved) return;
  const p = !!r.noSwipingClass && "" !== r.noSwipingClass, c = e.composedPath ? e.composedPath() : e.path;
  p && o.target && o.target.shadowRoot && c && (d = c[0]);
  const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    m = !(!o.target || !o.target.shadowRoot);
  if (r.noSwiping && (m ? function (e, t) {
    return void 0 === t && (t = this), function t(s) {
      if (!s || s === L() || s === O()) return null;
      s.assignedSlot && (s = s.assignedSlot);
      const i = s.closest(e);
      return i || s.getRootNode ? i || t(s.getRootNode().host) : null
    }(t)
  }(u, d) : d.closest(u))) return void (t.allowClick = !0);
  if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
  n.currentX = o.pageX, n.currentY = o.pageY;
  const h = n.currentX, f = n.currentY, g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (g && (h <= v || h >= i.innerWidth - v)) {
    if ("prevent" !== g) return;
    e.preventDefault()
  }
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), n.startX = h, n.startY = f, a.touchStartTime = $(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1);
  let w = !0;
  d.matches(a.focusableElements) && (w = !1, "SELECT" === d.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== d && s.activeElement.blur();
  const b = w && t.allowTouchMove && r.touchStartPreventDefault;
  !r.touchStartForcePreventDefault && !b || d.isContentEditable || o.preventDefault(), r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
}

function oe(e) {
  const t = L(), s = this, i = s.touchEventsData, {params: a, touches: r, rtlTranslate: n, enabled: l} = s;
  if (!l) return;
  if (!a.simulateTouch && "mouse" === e.pointerType) return;
  let o = e;
  if (o.originalEvent && (o = o.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", o));
  const d = i.evCache.findIndex((e => e.pointerId === o.pointerId));
  d >= 0 && (i.evCache[d] = o);
  const p = i.evCache.length > 1 ? i.evCache[0] : o, c = p.pageX, u = p.pageY;
  if (o.preventedByNestedSwiper) return r.startX = c, void (r.startY = u);
  if (!s.allowTouchMove) return o.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(r, {
    startX: c,
    startY: u,
    prevX: s.touches.currentX,
    prevY: s.touches.currentY,
    currentX: c,
    currentY: u
  }), i.touchStartTime = $()));
  if (a.touchReleaseOnEdges && !a.loop) if (s.isVertical()) {
    if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
  } else if (c < r.startX && s.translate <= s.maxTranslate() || c > r.startX && s.translate >= s.minTranslate()) return;
  if (t.activeElement && o.target === t.activeElement && o.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
  if (i.allowTouchCallbacks && s.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
  r.currentX = c, r.currentY = u;
  const m = r.currentX - r.startX, h = r.currentY - r.startY;
  if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
  if (void 0 === i.isScrolling) {
    let e;
    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
  }
  if (i.isScrolling && s.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) return void (i.isTouched = !1);
  if (!i.startMoving) return;
  s.allowClick = !1, !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
  let f = s.isHorizontal() ? m : h, g = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  a.oneWayMovement && (f = Math.abs(f) * (n ? 1 : -1), g = Math.abs(g) * (n ? 1 : -1)), r.diff = f, f *= a.touchRatio, n && (f = -f, g = -g);
  const v = s.touchesDirection;
  s.swipeDirection = f > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
  const w = s.params.loop && !a.cssMode,
    b = "next" === s.swipeDirection && s.allowSlideNext || "prev" === s.swipeDirection && s.allowSlidePrev;
  if (!i.isMoved) {
    if (w && b && s.loopFix({direction: s.swipeDirection}), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
      const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
      s.wrapperEl.dispatchEvent(e)
    }
    i.allowMomentumBounce = !1, !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", o)
  }
  let y;
  i.isMoved && v !== s.touchesDirection && w && b && Math.abs(f) >= 1 && (s.loopFix({
    direction: s.swipeDirection,
    setTranslate: !0
  }), y = !0), s.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = f + i.startTranslate;
  let x = !0, E = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (E = 0), f > 0 ? (w && b && !y && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > s.minTranslate() && (x = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + f) ** E))) : f < 0 && (w && b && !y && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
  }), i.currentTranslate < s.maxTranslate() && (x = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - f) ** E))), x && (o.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), a.threshold > 0) {
    if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
  }
  a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
}

function de(e) {
  const t = this, s = t.touchEventsData, i = s.evCache.findIndex((t => t.pointerId === e.pointerId));
  if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    if (!(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView))) return
  }
  const {params: a, touches: r, rtlTranslate: n, slidesGrid: l, enabled: o} = t;
  if (!o) return;
  if (!a.simulateTouch && "mouse" === e.pointerType) return;
  let d = e;
  if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
  a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
  const p = $(), c = p - s.touchStartTime;
  if (t.allowClick) {
    const e = d.path || d.composedPath && d.composedPath();
    t.updateClickedSlide(e && e[0] || d.target, e), t.emit("tap click", d), c < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
  }
  if (s.lastClickTime = $(), D((() => {
    t.destroyed || (t.allowClick = !0)
  })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
  let u;
  if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = a.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
  if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: u});
  let m = 0, h = t.slidesSizesGrid[0];
  for (let b = 0; b < l.length; b += b < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const e = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    void 0 !== l[b + e] ? u >= l[b] && u < l[b + e] && (m = b, h = l[b + e] - l[b]) : u >= l[b] && (m = b, h = l[l.length - 1] - l[l.length - 2])
  }
  let f = null, g = null;
  a.rewind && (t.isBeginning ? g = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
  const v = (u - l[m]) / h, w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (c > a.longSwipesMs) {
    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
    "next" === t.swipeDirection && (v >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? f : m + w) : t.slideTo(m)), "prev" === t.swipeDirection && (v > 1 - a.longSwipesRatio ? t.slideTo(m + w) : null !== g && v < 0 && Math.abs(v) > a.longSwipesRatio ? t.slideTo(g) : t.slideTo(m))
  } else {
    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(m + w) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : m + w), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m))
  }
}

function pe() {
  const e = this, {params: t, el: s} = e;
  if (s && 0 === s.offsetWidth) return;
  t.breakpoints && e.setBreakpoint();
  const {allowSlideNext: i, allowSlidePrev: a, snapGrid: r} = e, n = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const l = n && t.loop;
  !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
  }), 500)), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function ce(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function ue() {
  const e = this, {wrapperEl: t, rtlTranslate: s, enabled: i} = e;
  if (!i) return;
  let a;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  const r = e.maxTranslate() - e.minTranslate();
  a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, a !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}

function me(e) {
  const t = this;
  ie(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
}

let he = !1;

function fe() {
}

const ge = (e, t) => {
  const s = L(), {params: i, el: a, wrapperEl: r, device: n} = e, l = !!i.nested,
    o = "on" === t ? "addEventListener" : "removeEventListener", d = t;
  a[o]("pointerdown", e.onTouchStart, {passive: !1}), s[o]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), s[o]("pointerup", e.onTouchEnd, {passive: !0}), s[o]("pointercancel", e.onTouchEnd, {passive: !0}), s[o]("pointerout", e.onTouchEnd, {passive: !0}), s[o]("pointerleave", e.onTouchEnd, {passive: !0}), s[o]("contextmenu", e.onTouchEnd, {passive: !0}), (i.preventClicks || i.preventClicksPropagation) && a[o]("click", e.onClick, !0), i.cssMode && r[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pe, !0) : e[d]("observerUpdate", pe, !0), a[o]("load", e.onLoad, {capture: !0})
};
const ve = (e, t) => e.grid && t.grid && t.grid.rows > 1;
var we = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: .5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: .85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  loop: !1,
  loopedSlides: null,
  loopPreventsSliding: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  runCallbacksOnInit: !0,
  _emitClasses: !1
};

function be(e, t) {
  return function (s) {
    void 0 === s && (s = {});
    const i = Object.keys(s)[0], a = s[i];
    "object" == typeof a && null !== a ? (!0 === e[i] && (e[i] = {enabled: !0}), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in a ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), H(t, s)) : H(t, s)) : H(t, s)
  }
}

const ye = {
  eventsEmitter: {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const a = s ? "unshift" : "push";
      return e.split(" ").forEach((e => {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t)
      })), i
    }, once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;

      function a() {
        i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(i, r)
      }

      return a.__emitterProxy = t, i.on(e, a, s)
    }, onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
    }, offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    }, off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, a) => {
          (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(a, 1)
        }))
      })), s) : s
    }, emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), i = e) : (t = r[0].events, s = r[0].data, i = r[0].context || e), s.unshift(i);
      return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
          e.apply(i, [t, ...s])
        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
          e.apply(i, s)
        }))
      })), e
    }
  }, update: {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(V(i, "padding-left") || 0, 10) - parseInt(V(i, "padding-right") || 0, 10), s = s - parseInt(V(i, "padding-top") || 0, 10) - parseInt(V(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }))
    }, updateSlides: function () {
      const e = this;

      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t]
      }

      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0)
      }

      const i = e.params, {wrapperEl: a, slidesEl: r, size: n, rtlTranslate: l, wrongRTL: o} = e,
        d = e.virtual && i.virtual.enabled, p = d ? e.virtual.slides.length : e.slides.length,
        c = j(r, `.${e.params.slideClass}, swiper-slide`), u = d ? e.virtual.slides.length : c.length;
      let m = [];
      const h = [], f = [];
      let g = i.slidesOffsetBefore;
      "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
      let v = i.slidesOffsetAfter;
      "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length, b = e.slidesGrid.length;
      let y = i.spaceBetween, x = -g, E = 0, S = 0;
      if (void 0 === n) return;
      "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * n : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, c.forEach((e => {
        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
      })), i.centeredSlides && i.cssMode && (Y(a, "--swiper-centered-offset-before", ""), Y(a, "--swiper-centered-offset-after", ""));
      const T = i.grid && i.grid.rows > 1 && e.grid;
      let M;
      T && e.grid.initSlides(u);
      const C = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
      for (let A = 0; A < u; A += 1) {
        let a;
        if (M = 0, c[A] && (a = c[A]), T && e.grid.updateSlide(A, a, u, t), !c[A] || "none" !== V(a, "display")) {
          if ("auto" === i.slidesPerView) {
            C && (c[A].style[t("width")] = "");
            const r = getComputedStyle(a), n = a.style.transform, l = a.style.webkitTransform;
            if (n && (a.style.transform = "none"), l && (a.style.webkitTransform = "none"), i.roundLengths) M = e.isHorizontal() ? Q(a, "width", !0) : Q(a, "height", !0); else {
              const e = s(r, "width"), t = s(r, "padding-left"), i = s(r, "padding-right"), n = s(r, "margin-left"),
                l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing");
              if (o && "border-box" === o) M = e + n + l; else {
                const {clientWidth: s, offsetWidth: r} = a;
                M = e + t + i + n + l + (r - s)
              }
            }
            n && (a.style.transform = n), l && (a.style.webkitTransform = l), i.roundLengths && (M = Math.floor(M))
          } else M = (n - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (M = Math.floor(M)), c[A] && (c[A].style[t("width")] = `${M}px`);
          c[A] && (c[A].swiperSlideSize = M), f.push(M), i.centeredSlides ? (x = x + M / 2 + E / 2 + y, 0 === E && 0 !== A && (x = x - n / 2 - y), 0 === A && (x = x - n / 2 - y), Math.abs(x) < .001 && (x = 0), i.roundLengths && (x = Math.floor(x)), S % i.slidesPerGroup == 0 && m.push(x), h.push(x)) : (i.roundLengths && (x = Math.floor(x)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup == 0 && m.push(x), h.push(x), x = x + M + y), e.virtualSize += M + y, E = M, S += 1
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, n) + v, l && o && ("slide" === i.effect || "coverflow" === i.effect) && (a.style.width = `${e.virtualSize + y}px`), i.setWrapperSize && (a.style[t("width")] = `${e.virtualSize + y}px`), T && e.grid.updateWrapperSize(M, m, t), !i.centeredSlides) {
        const t = [];
        for (let s = 0; s < m.length; s += 1) {
          let a = m[s];
          i.roundLengths && (a = Math.floor(a)), m[s] <= e.virtualSize - n && t.push(a)
        }
        m = t, Math.floor(e.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - n)
      }
      if (d && i.loop) {
        const t = f[0] + y;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
            a = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + a)
        }
        for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
      }
      if (0 === m.length && (m = [0]), 0 !== y) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        c.filter(((e, t) => !(i.cssMode && !i.loop) || t !== c.length - 1)).forEach((e => {
          e.style[s] = `${y}px`
        }))
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t => {
          e += t + (y || 0)
        })), e -= y;
        const t = e - n;
        m = m.map((e => e <= 0 ? -g : e > t ? t + v : e))
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (f.forEach((t => {
          e += t + (y || 0)
        })), e -= y, e < n) {
          const t = (n - e) / 2;
          m.forEach(((e, s) => {
            m[s] = e - t
          })), h.forEach(((e, s) => {
            h[s] = e + t
          }))
        }
      }
      if (Object.assign(e, {
        slides: c,
        snapGrid: m,
        slidesGrid: h,
        slidesSizesGrid: f
      }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Y(a, "--swiper-centered-offset-before", -m[0] + "px"), Y(a, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
        const t = -e.snapGrid[0], s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
      }
      if (u !== p && e.emit("slidesLengthChange"), m.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(d || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
        const t = `${i.containerModifierClass}backface-hidden`, s = e.el.classList.contains(t);
        u <= i.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
      }
    }, updateAutoHeight: function (e) {
      const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
      let a, r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
        s.push(e)
      })); else for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const e = t.activeIndex + a;
        if (e > t.slides.length && !i) break;
        s.push(n(e))
      } else s.push(n(t.activeIndex));
      for (a = 0; a < s.length; a += 1) if (void 0 !== s[a]) {
        const e = s[a].offsetHeight;
        r = e > r ? e : r
      }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
    }, updateSlidesOffset: function () {
      const e = this, t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
      for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
    }, updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      const t = this, s = t.params, {slides: i, rtlTranslate: a, snapGrid: r} = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      a && (n = e), i.forEach((e => {
        e.classList.remove(s.slideVisibleClass)
      })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
      for (let o = 0; o < i.length; o += 1) {
        const e = i[o];
        let d = e.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const p = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l),
          c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + l), u = -(n - d),
          m = u + t.slidesSizesGrid[o];
        (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), i[o].classList.add(s.slideVisibleClass)), e.progress = a ? -p : p, e.originalProgress = a ? -c : c
      }
    }, updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0
      }
      const s = t.params, i = t.maxTranslate() - t.minTranslate();
      let {progress: a, isBeginning: r, isEnd: n, progressLoop: l} = t;
      const o = r, d = n;
      if (0 === i) a = 0, r = !0, n = !0; else {
        a = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
        r = s || a <= 0, n = l || a >= 1, s && (a = 0), l && (a = 1)
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1), a = t.slidesGrid[s],
          r = t.slidesGrid[i], n = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
        l = o >= a ? (o - a) / n : (o + n - r) / n, l > 1 && (l -= 1)
      }
      Object.assign(t, {
        progress: a,
        progressLoop: l,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", a)
    }, updateSlidesClasses: function () {
      const e = this, {slides: t, params: s, slidesEl: i, activeIndex: a} = e, r = e.virtual && s.virtual.enabled,
        n = e => j(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (t.forEach((e => {
        e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
      })), r) if (s.loop) {
        let t = a - e.virtual.slidesBefore;
        t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = n(`[data-swiper-slide-index="${t}"]`)
      } else l = n(`[data-swiper-slide-index="${a}"]`); else l = t[a];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = function (e, t) {
          const s = [];
          for (; e.nextElementSibling;) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), e = i
          }
          return s
        }(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = function (e, t) {
          const s = [];
          for (; e.previousElementSibling;) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), e = i
          }
          return s
        }(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]), i && i.classList.add(s.slidePrevClass)
      }
      e.emitSlidesClasses()
    }, updateActiveIndex: function (e) {
      const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
        snapGrid: i,
        params: a,
        activeIndex: r,
        realIndex: n,
        snapIndex: l
      } = t;
      let o, d = e;
      const p = e => {
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
      };
      if (void 0 === d && (d = function (e) {
        const {slidesGrid: t, params: s} = e, i = e.rtlTranslate ? e.translate : -e.translate;
        let a;
        for (let r = 0; r < t.length; r += 1) void 0 !== t[r + 1] ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2 ? a = r : i >= t[r] && i < t[r + 1] && (a = r + 1) : i >= t[r] && (a = r);
        return s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
      }(t)), i.indexOf(s) >= 0) o = i.indexOf(s); else {
        const e = Math.min(a.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / a.slidesPerGroup)
      }
      if (o >= i.length && (o = i.length - 1), d === r) return o !== l && (t.snapIndex = o, t.emit("snapIndexChange")), void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = p(d)));
      let c;
      c = t.virtual && a.virtual.enabled && a.loop ? p(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: c,
        previousIndex: r,
        activeIndex: d
      }), t.initialized && re(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== c && t.emit("realIndexChange"), t.emit("slideChange"))
    }, updateClickedSlide: function (e, t) {
      const s = this, i = s.params;
      let a = e.closest(`.${i.slideClass}, swiper-slide`);
      !a && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
        !a && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (a = e)
      }));
      let r, n = !1;
      if (a) for (let l = 0; l < s.slides.length; l += 1) if (s.slides[l] === a) {
        n = !0, r = l;
        break
      }
      if (!a || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
      s.clickedSlide = a, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
    }
  }, translate: {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const {params: t, rtlTranslate: s, translate: i, wrapperEl: a} = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = B(a, e);
      return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
    }, setTranslate: function (e, t) {
      const s = this, {rtlTranslate: i, params: a, wrapperEl: r, progress: n} = s;
      let l, o = 0, d = 0;
      s.isHorizontal() ? o = i ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, a.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : a.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
      const p = s.maxTranslate() - s.minTranslate();
      l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
    }, minTranslate: function () {
      return -this.snapGrid[0]
    }, maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1]
    }, translateTo: function (e, t, s, i, a) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
      const r = this, {params: n, wrapperEl: l} = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(), d = r.maxTranslate();
      let p;
      if (p = i && e > o ? o : i && e < d ? d : e, r.updateProgress(p), n.cssMode) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p; else {
          if (!r.support.smoothScroll) return N({swiper: r, targetPosition: -p, side: e ? "left" : "top"}), !0;
          l.scrollTo({[e ? "left" : "top"]: -p, behavior: "smooth"})
        }
        return !0
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
      }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
    }
  }, transition: {
    setTransition: function (e, t) {
      const s = this;
      s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
    }, transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      const s = this, {params: i} = s;
      i.cssMode || (i.autoHeight && s.updateAutoHeight(), ne({swiper: s, runCallbacks: e, direction: t, step: "Start"}))
    }, transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      const s = this, {params: i} = s;
      s.animating = !1, i.cssMode || (s.setTransition(0), ne({swiper: s, runCallbacks: e, direction: t, step: "End"}))
    }
  }, slide: {
    slideTo: function (e, t, s, i, a) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: p,
        activeIndex: c,
        rtlTranslate: u,
        wrapperEl: m,
        enabled: h
      } = r;
      if (r.animating && l.preventInteractionOnTransition || !h && !i && !a) return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      const v = -o[g];
      if (l.normalizeSlideIndex) for (let b = 0; b < d.length; b += 1) {
        const e = -Math.floor(100 * v), t = Math.floor(100 * d[b]), s = Math.floor(100 * d[b + 1]);
        void 0 !== d[b + 1] ? e >= t && e < s - (s - t) / 2 ? n = b : e >= t && e < s && (n = b + 1) : e >= t && (n = b)
      }
      if (r.initialized && n !== c) {
        if (!r.allowSlideNext && (u ? v > r.translate && v > r.minTranslate() : v < r.translate && v < r.minTranslate())) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== n) return !1
      }
      let w;
      if (n !== (p || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), w = n > c ? "next" : n < c ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
      if (l.cssMode) {
        const e = r.isHorizontal(), s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
            m[e ? "scrollLeft" : "scrollTop"] = s
          }))) : m[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
          }))
        } else {
          if (!r.support.smoothScroll) return N({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
          m.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
        }
        return !0
      }
      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, w), 0 === t ? r.transitionEnd(s, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w))
      }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
    }, slideToLoop: function (e, t, s, i) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10)
      }
      const a = this;
      let r = e;
      return a.params.loop && (a.virtual && a.params.virtual.enabled ? r += a.virtual.slidesBefore : r = a.getSlideIndexByData(r)), a.slideTo(r, t, s, i)
    }, slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this, {enabled: a, params: r, animating: n} = i;
      if (!a) return i;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l, d = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        if (i.loopFix({direction: "next"}), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
          i.slideTo(i.activeIndex + o, e, t, s)
        })), !0
      }
      return r.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
    }, slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this, {params: a, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = i;
      if (!o) return i;
      const p = i.virtual && a.virtual.enabled;
      if (a.loop) {
        if (d && !p && a.loopPreventsSliding) return !1;
        i.loopFix({direction: "prev"}), i._clientLeft = i.wrapperEl.clientLeft
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
      }

      const u = c(l ? i.translate : -i.translate), m = r.map((e => c(e)));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && a.cssMode) {
        let e;
        r.forEach(((t, s) => {
          u >= t && (e = s)
        })), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
      }
      let f = 0;
      if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), a.rewind && i.isBeginning) {
        const a = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(a, e, t, s)
      }
      return a.loop && 0 === i.activeIndex && a.cssMode ? (requestAnimationFrame((() => {
        i.slideTo(f, e, t, s)
      })), !0) : i.slideTo(f, e, t, s)
    }, slideReset: function (e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
    }, slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
      const a = this;
      let r = a.activeIndex;
      const n = Math.min(a.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / a.params.slidesPerGroup),
        o = a.rtlTranslate ? a.translate : -a.translate;
      if (o >= a.snapGrid[l]) {
        const e = a.snapGrid[l];
        o - e > (a.snapGrid[l + 1] - e) * i && (r += a.params.slidesPerGroup)
      } else {
        const e = a.snapGrid[l - 1];
        o - e <= (a.snapGrid[l] - e) * i && (r -= a.params.slidesPerGroup)
      }
      return r = Math.max(r, 0), r = Math.min(r, a.slidesGrid.length - 1), a.slideTo(r, e, t, s)
    }, slideToClickedSlide: function () {
      const e = this, {params: t, slidesEl: s} = e,
        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let a, r = e.clickedIndex;
      const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = e.getSlideIndex(j(s, `${n}[data-swiper-slide-index="${a}"]`)[0]), D((() => {
          e.slideTo(r)
        }))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = e.getSlideIndex(j(s, `${n}[data-swiper-slide-index="${a}"]`)[0]), D((() => {
          e.slideTo(r)
        }))) : e.slideTo(r)
      } else e.slideTo(r)
    }
  }, loop: {
    loopCreate: function (e) {
      const t = this, {params: s, slidesEl: i} = t;
      if (!s.loop || t.virtual && t.params.virtual.enabled) return;
      j(i, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
        e.setAttribute("data-swiper-slide-index", t)
      })), t.loopFix({slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next"})
    }, loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: i,
        setTranslate: a,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {slides: d, allowSlidePrev: p, allowSlideNext: c, slidesEl: u, params: m} = o;
      if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = p, o.allowSlideNext = c, void o.emit("loopFix");
      const h = "auto" === m.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
      let f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - f % m.slidesPerGroup), o.loopedSlides = f;
      const g = [], v = [];
      let w = o.activeIndex;
      void 0 === r ? r = o.getSlideIndex(o.slides.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : w = r;
      const b = "next" === i || !i, y = "prev" === i || !i;
      let x = 0, E = 0;
      if (r < f) {
        x = Math.max(f - r, m.slidesPerGroup);
        for (let e = 0; e < f - r; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          g.push(d.length - t - 1)
        }
      } else if (r > o.slides.length - 2 * f) {
        E = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (let e = 0; e < E; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          v.push(t)
        }
      }
      if (y && g.forEach((e => {
        o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
      })), b && v.forEach((e => {
        o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
      })), o.recalcSlides(), "auto" === m.slidesPerView && o.updateSlides(), m.watchSlidesProgress && o.updateSlidesOffset(), s) if (g.length > 0 && y) if (void 0 === t) {
        const e = o.slidesGrid[w], t = o.slidesGrid[w + x] - e;
        l ? o.setTranslate(o.translate - t) : (o.slideTo(w + x, 0, !1, !0), a && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t, o.touchEventsData.currentTranslate = o.translate))
      } else a && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate); else if (v.length > 0 && b) if (void 0 === t) {
        const e = o.slidesGrid[w], t = o.slidesGrid[w - E] - e;
        l ? o.setTranslate(o.translate - t) : (o.slideTo(w - E, 0, !1, !0), a && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t, o.touchEventsData.currentTranslate = o.translate))
      } else o.slideToLoop(t, 0, !1, !0);
      if (o.allowSlidePrev = p, o.allowSlideNext = c, o.controller && o.controller.control && !n) {
        const e = {slideRealIndex: t, direction: i, setTranslate: a, activeSlideIndex: r, byController: !0};
        Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
          !t.destroyed && t.params.loop && t.loopFix({...e, slideTo: t.params.slidesPerView === m.slidesPerView && s})
        })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
          ...e,
          slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
        })
      }
      o.emit("loopFix")
    }, loopDestroy: function () {
      const e = this, {params: t, slidesEl: s} = e;
      if (!t.loop || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e => {
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        i[t] = e
      })), e.slides.forEach((e => {
        e.removeAttribute("data-swiper-slide-index")
      })), i.forEach((e => {
        s.append(e)
      })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
    }
  }, grabCursor: {
    setGrabCursor: function (e) {
      const t = this;
      if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
      const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
      t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
        t.__preventObserver__ = !1
      }))
    }, unsetGrabCursor: function () {
      const e = this;
      e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
        e.__preventObserver__ = !1
      })))
    }
  }, events: {
    attachEvents: function () {
      const e = this, t = L(), {params: s} = e;
      e.onTouchStart = le.bind(e), e.onTouchMove = oe.bind(e), e.onTouchEnd = de.bind(e), s.cssMode && (e.onScroll = ue.bind(e)), e.onClick = ce.bind(e), e.onLoad = me.bind(e), he || (t.addEventListener("touchstart", fe), he = !0), ge(e, "on")
    }, detachEvents: function () {
      ge(this, "off")
    }
  }, breakpoints: {
    setBreakpoint: function () {
      const e = this, {realIndex: t, initialized: s, params: i, el: a} = e, r = i.breakpoints;
      if (!r || r && 0 === Object.keys(r).length) return;
      const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
      if (!n || e.currentBreakpoint === n) return;
      const l = (n in r ? r[n] : void 0) || e.originalParams, o = ve(e, i), d = ve(e, l), p = i.enabled;
      o && !d ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (a.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && a.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
        if (void 0 === l[t]) return;
        const s = i[t] && i[t].enabled, a = l[t] && l[t].enabled;
        s && !a && e[t].disable(), !s && a && e[t].enable()
      }));
      const c = l.direction && l.direction !== i.direction, u = i.loop && (l.slidesPerView !== i.slidesPerView || c),
        m = i.loop;
      c && s && e.changeDirection(), H(e.params, l);
      const h = e.params.enabled, f = e.params.loop;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
      }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (u ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && f ? (e.loopCreate(t), e.updateSlides()) : m && !f && e.loopDestroy()), e.emit("breakpoint", l)
    }, getBreakpoint: function (e, t, s) {
      if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
      let i = !1;
      const a = O(), r = "window" === t ? a.innerHeight : s.clientHeight, n = Object.keys(e).map((e => {
        if ("string" == typeof e && 0 === e.indexOf("@")) {
          const t = parseFloat(e.substr(1));
          return {value: r * t, point: e}
        }
        return {value: e, point: e}
      }));
      n.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
      for (let l = 0; l < n.length; l += 1) {
        const {point: e, value: r} = n[l];
        "window" === t ? a.matchMedia(`(min-width: ${r}px)`).matches && (i = e) : r <= s.clientWidth && (i = e)
      }
      return i || "max"
    }
  }, checkOverflow: {
    checkOverflow: function () {
      const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: i} = s;
      if (i) {
        const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
        e.isLocked = e.size > s
      } else e.isLocked = 1 === e.snapGrid.length;
      !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
    }
  }, classes: {
    addClasses: function () {
      const e = this, {classNames: t, params: s, rtl: i, el: a, device: r} = e, n = function (e, t) {
        const s = [];
        return e.forEach((e => {
          "object" == typeof e ? Object.keys(e).forEach((i => {
            e[i] && s.push(t + i)
          })) : "string" == typeof e && s.push(t + e)
        })), s
      }(["initialized", s.direction, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: i}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
      t.push(...n), a.classList.add(...t), e.emitContainerClasses()
    }, removeClasses: function () {
      const {el: e, classNames: t} = this;
      e.classList.remove(...t), this.emitContainerClasses()
    }
  }
}, xe = {};

class Ee {
  constructor() {
    let e, t;
    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
    1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = H({}, t), e && !t.el && (t.el = e);
    const r = L();
    if (t.el && "string" == typeof t.el && r.querySelectorAll(t.el).length > 1) {
      const e = [];
      return r.querySelectorAll(t.el).forEach((s => {
        const i = H({}, t, {el: s});
        e.push(new Ee(i))
      })), e
    }
    const n = this;
    n.__swiper__ = !0, n.support = ee(), n.device = te({userAgent: t.userAgent}), n.browser = se(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
    const l = {};
    n.modules.forEach((e => {
      e({
        params: t,
        swiper: n,
        extendParams: be(t, l),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      })
    }));
    const o = H({}, we, l);
    return n.params = H({}, o, xe, t), n.originalParams = H({}, n.params), n.passedParams = H({}, t), n.params && n.params.on && Object.keys(n.params.on).forEach((e => {
      n.on(e, n.params.on[e])
    })), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
      enabled: n.params.enabled,
      el: e,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal: () => "horizontal" === n.params.direction,
      isVertical: () => "vertical" === n.params.direction,
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
      },
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: n.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: !0,
      allowTouchMove: n.params.allowTouchMove,
      touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
      imagesToLoad: [],
      imagesLoaded: 0
    }), n.emit("_swiper"), n.params.init && n.init(), n
  }

  getSlideIndex(e) {
    const {slidesEl: t, params: s} = this, i = F(j(t, `.${s.slideClass}, swiper-slide`)[0]);
    return F(e) - i
  }

  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
  }

  recalcSlides() {
    const {slidesEl: e, params: t} = this;
    this.slides = j(e, `.${t.slideClass}, swiper-slide`)
  }

  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
  }

  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
  }

  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(), a = (s.maxTranslate() - i) * e + i;
    s.translateTo(a, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
  }

  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
    e.emit("_containerClasses", t.join(" "))
  }

  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
  }

  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((s => {
      const i = e.getSlideClasses(s);
      t.push({slideEl: s, classNames: i}), e.emit("_slideClass", s, i)
    })), e.emit("_slideClasses", t)
  }

  slidesPerViewDynamic(e, t) {
    void 0 === e && (e = "current"), void 0 === t && (t = !1);
    const {params: s, slides: i, slidesGrid: a, slidesSizesGrid: r, size: n, activeIndex: l} = this;
    let o = 1;
    if ("number" == typeof s.slidesPerView) return s.slidesPerView;
    if (s.centeredSlides) {
      let e, t = i[l] ? i[l].swiperSlideSize : 0;
      for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > n && (e = !0));
      for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > n && (e = !0))
    } else if ("current" === e) for (let d = l + 1; d < i.length; d += 1) {
      (t ? a[d] + r[d] - a[l] < n : a[d] - a[l] < n) && (o += 1)
    } else for (let d = l - 1; d >= 0; d -= 1) {
      a[l] - a[d] < n && (o += 1)
    }
    return o
  }

  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {snapGrid: t, params: s} = e;

    function i() {
      const t = e.rtlTranslate ? -1 * e.translate : e.translate,
        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
      e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
    }

    let a;
    if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
      t.complete && ie(e, t)
    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight(); else {
      if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        a = e.slideTo(t.length - 1, 0, !1, !0)
      } else a = e.slideTo(e.activeIndex, 0, !1, !0);
      a || i()
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
  }

  changeDirection(e, t) {
    void 0 === t && (t = !0);
    const s = this, i = s.params.direction;
    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
      "vertical" === e ? t.style.width = "" : t.style.height = ""
    })), s.emit("changeDirection"), t && s.update()), s
  }

  changeLanguageDirection(e) {
    const t = this;
    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
  }

  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
    s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() => {
      if (s && s.shadowRoot && s.shadowRoot.querySelector) {
        return s.shadowRoot.querySelector(i())
      }
      return j(s, i())[0]
    })();
    return !a && t.params.createElements && (a = q("div", t.params.wrapperClass), s.append(a), j(s, `.${t.params.slideClass}`).forEach((e => {
      a.append(e)
    }))), Object.assign(t, {
      el: s,
      wrapperEl: a,
      slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
      hostEl: t.isElement ? s.parentNode.host : s,
      mounted: !0,
      rtl: "rtl" === s.dir.toLowerCase() || "rtl" === V(s, "direction"),
      rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === V(s, "direction")),
      wrongRTL: "-webkit-box" === V(a, "display")
    }), !0
  }

  init(e) {
    const t = this;
    if (t.initialized) return t;
    if (!1 === t.mount(e)) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
      e.complete ? ie(t, e) : e.addEventListener("load", (e => {
        ie(t, e.target)
      }))
    })), re(t), t.initialized = !0, re(t), t.emit("init"), t.emit("afterInit"), t
  }

  destroy(e, t) {
    void 0 === e && (e = !0), void 0 === t && (t = !0);
    const s = this, {params: i, el: a, wrapperEl: r, slides: n} = s;
    return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach((e => {
      e.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
    }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
      s.off(e)
    })), !1 !== e && (s.el.swiper = null, function (e) {
      const t = e;
      Object.keys(t).forEach((e => {
        try {
          t[e] = null
        } catch (s) {
        }
        try {
          delete t[e]
        } catch (s) {
        }
      }))
    }(s)), s.destroyed = !0), null
  }

  static extendDefaults(e) {
    H(xe, e)
  }

  static get extendedDefaults() {
    return xe
  }

  static get defaults() {
    return we
  }

  static installModule(e) {
    Ee.prototype.__modules__ || (Ee.prototype.__modules__ = []);
    const t = Ee.prototype.__modules__;
    "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
  }

  static use(e) {
    return Array.isArray(e) ? (e.forEach((e => Ee.installModule(e))), Ee) : (Ee.installModule(e), Ee)
  }
}

function Se(e, t, s, i) {
  return e.params.createElements && Object.keys(i).forEach((a => {
    if (!s[a] && !0 === s.auto) {
      let r = j(e.el, `.${i[a]}`)[0];
      r || (r = q("div", i[a]), r.className = i[a], e.el.append(r)), s[a] = r, t[a] = r
    }
  })), s
}

function Te(e) {
  return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}

function Me(e) {
  const t = this, {params: s, slidesEl: i} = t;
  s.loop && t.loopDestroy();
  const a = e => {
    if ("string" == typeof e) {
      const t = document.createElement("div");
      t.innerHTML = e, i.append(t.children[0]), t.innerHTML = ""
    } else i.append(e)
  };
  if ("object" == typeof e && "length" in e) for (let r = 0; r < e.length; r += 1) e[r] && a(e[r]); else a(e);
  t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
}

function Ce(e) {
  const t = this, {params: s, activeIndex: i, slidesEl: a} = t;
  s.loop && t.loopDestroy();
  let r = i + 1;
  const n = e => {
    if ("string" == typeof e) {
      const t = document.createElement("div");
      t.innerHTML = e, a.prepend(t.children[0]), t.innerHTML = ""
    } else a.prepend(e)
  };
  if ("object" == typeof e && "length" in e) {
    for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
    r = i + e.length
  } else n(e);
  t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
}

function Ae(e, t) {
  const s = this, {params: i, activeIndex: a, slidesEl: r} = s;
  let n = a;
  i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
  const l = s.slides.length;
  if (e <= 0) return void s.prependSlide(t);
  if (e >= l) return void s.appendSlide(t);
  let o = n > e ? n + 1 : n;
  const d = [];
  for (let p = l - 1; p >= e; p -= 1) {
    const e = s.slides[p];
    e.remove(), d.unshift(e)
  }
  if ("object" == typeof t && "length" in t) {
    for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
    o = n > e ? n + t.length : n
  } else r.append(t);
  for (let p = 0; p < d.length; p += 1) r.append(d[p]);
  s.recalcSlides(), i.loop && s.loopCreate(), i.observer && !s.isElement || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
}

function Pe(e) {
  const t = this, {params: s, activeIndex: i} = t;
  let a = i;
  s.loop && (a -= t.loopedSlides, t.loopDestroy());
  let r, n = a;
  if ("object" == typeof e && "length" in e) {
    for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
    n = Math.max(n, 0)
  } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
  t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
}

function ze() {
  const e = this, t = [];
  for (let s = 0; s < e.slides.length; s += 1) t.push(s);
  e.removeSlide(t)
}

function ke(e) {
  const {
    effect: t,
    swiper: s,
    on: i,
    setTranslate: a,
    setTransition: r,
    overwriteParams: n,
    perspective: l,
    recreateShadows: o,
    getEffectParams: d
  } = e;
  let p;
  i("beforeInit", (() => {
    if (s.params.effect !== t) return;
    s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const e = n ? n() : {};
    Object.assign(s.params, e), Object.assign(s.originalParams, e)
  })), i("setTranslate", (() => {
    s.params.effect === t && a()
  })), i("setTransition", ((e, i) => {
    s.params.effect === t && r(i)
  })), i("transitionEnd", (() => {
    if (s.params.effect === t && o) {
      if (!d || !d().slideShadows) return;
      s.slides.forEach((e => {
        e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
      })), o()
    }
  })), i("virtualUpdate", (() => {
    s.params.effect === t && (s.slides.length || (p = !0), requestAnimationFrame((() => {
      p && s.slides && s.slides.length && (a(), p = !1)
    })))
  }))
}

function Le(e, t) {
  const s = _(t);
  return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
}

function Ie(e) {
  let {swiper: t, duration: s, transformElements: i, allSlides: a} = e;
  const {activeIndex: r} = t;
  if (t.params.virtualTranslate && 0 !== s) {
    let e, s = !1;
    e = a ? i : i.filter((e => {
      const s = e.classList.contains("swiper-slide-transform") ? (e => {
        if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
        return e.parentElement
      })(e) : e;
      return t.getSlideIndex(s) === r
    })), e.forEach((e => {
      U(e, (() => {
        if (s) return;
        if (!t || t.destroyed) return;
        s = !0, t.animating = !1;
        const e = new window.CustomEvent("transitionend", {bubbles: !0, cancelable: !0});
        t.wrapperEl.dispatchEvent(e)
      }))
    }))
  }
}

function Oe(e, t, s) {
  const i = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, a = _(t);
  let r = a.querySelector(`.${i.split(" ").join(".")}`);
  return r || (r = q("div", i.split(" ")), a.append(r)), r
}

Object.keys(ye).forEach((e => {
  Object.keys(ye[e]).forEach((t => {
    Ee.prototype[t] = ye[e][t]
  }))
})), Ee.use([function (e) {
  let {swiper: t, on: s, emit: i} = e;
  const a = O();
  let r = null, n = null;
  const l = () => {
    t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
  }, o = () => {
    t && !t.destroyed && t.initialized && i("orientationchange")
  };
  s("init", (() => {
    t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
      n = a.requestAnimationFrame((() => {
        const {width: s, height: i} = t;
        let a = s, r = i;
        e.forEach((e => {
          let {contentBoxSize: s, contentRect: i, target: n} = e;
          n && n !== t.el || (a = i ? i.width : (s[0] || s).inlineSize, r = i ? i.height : (s[0] || s).blockSize)
        })), a === s && r === i || l()
      }))
    })), r.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", o))
  })), s("destroy", (() => {
    n && a.cancelAnimationFrame(n), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", o)
  }))
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = [], n = O(), l = function (e, s) {
    void 0 === s && (s = {});
    const i = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
      if (t.__preventObserver__) return;
      if (1 === e.length) return void a("observerUpdate", e[0]);
      const s = function () {
        a("observerUpdate", e[0])
      };
      n.requestAnimationFrame ? n.requestAnimationFrame(s) : n.setTimeout(s, 0)
    }));
    i.observe(e, {
      attributes: void 0 === s.attributes || s.attributes,
      childList: void 0 === s.childList || s.childList,
      characterData: void 0 === s.characterData || s.characterData
    }), r.push(i)
  };
  s({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", (() => {
    if (t.params.observer) {
      if (t.params.observeParents) {
        const e = W(t.hostEl);
        for (let t = 0; t < e.length; t += 1) l(e[t])
      }
      l(t.hostEl, {childList: t.params.observeSlideChildren}), l(t.wrapperEl, {attributes: !1})
    }
  })), i("destroy", (() => {
    r.forEach((e => {
      e.disconnect()
    })), r.splice(0, r.length)
  }))
}]);
const De = [function (e) {
  let t, {swiper: s, extendParams: i, on: a, emit: r} = e;
  i({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  const n = L();
  s.virtual = {cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: []};
  const l = n.createElement("div");

  function o(e, t) {
    const i = s.params.virtual;
    if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
    let a;
    return i.renderSlide ? (a = i.renderSlide.call(s, e, t), "string" == typeof a && (l.innerHTML = a, a = l.children[0])) : a = s.isElement ? q("swiper-slide") : q("div", s.params.slideClass), a.setAttribute("data-swiper-slide-index", t), i.renderSlide || (a.innerHTML = e), i.cache && (s.virtual.cache[t] = a), a
  }

  function d(e) {
    const {slidesPerView: t, slidesPerGroup: i, centeredSlides: a, loop: n} = s.params, {
      addSlidesBefore: l,
      addSlidesAfter: d
    } = s.params.virtual, {from: p, to: c, slides: u, slidesGrid: m, offset: h} = s.virtual;
    s.params.cssMode || s.updateActiveIndex();
    const f = s.activeIndex || 0;
    let g, v, w;
    g = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", a ? (v = Math.floor(t / 2) + i + d, w = Math.floor(t / 2) + i + l) : (v = t + (i - 1) + d, w = (n ? t : i) + l);
    let b = f - w, y = f + v;
    n || (b = Math.max(b, 0), y = Math.min(y, u.length - 1));
    let x = (s.slidesGrid[b] || 0) - (s.slidesGrid[0] || 0);

    function E() {
      s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), r("virtualUpdate")
    }

    if (n && f >= w ? (b -= w, a || (x += s.slidesGrid[0])) : n && f < w && (b = -w, a && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
      from: b,
      to: y,
      offset: x,
      slidesGrid: s.slidesGrid,
      slidesBefore: w,
      slidesAfter: v
    }), p === b && c === y && !e) return s.slidesGrid !== m && x !== h && s.slides.forEach((e => {
      e.style[g] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
    })), s.updateProgress(), void r("virtualUpdate");
    if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
      offset: x,
      from: b,
      to: y,
      slides: function () {
        const e = [];
        for (let t = b; t <= y; t += 1) e.push(u[t]);
        return e
      }()
    }), void (s.params.virtual.renderExternalUpdate ? E() : r("virtualUpdate"));
    const S = [], T = [], M = e => {
      let t = e;
      return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t
    };
    if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
      e.remove()
    })); else for (let r = p; r <= c; r += 1) if (r < b || r > y) {
      const e = M(r);
      s.slides.filter((t => t.matches(`.${s.params.slideClass}[data-swiper-slide-index="${e}"], swiper-slide[data-swiper-slide-index="${e}"]`))).forEach((e => {
        e.remove()
      }))
    }
    const C = n ? -u.length : 0, A = n ? 2 * u.length : u.length;
    for (let s = C; s < A; s += 1) if (s >= b && s <= y) {
      const t = M(s);
      void 0 === c || e ? T.push(t) : (s > c && T.push(t), s < p && S.push(t))
    }
    if (T.forEach((e => {
      s.slidesEl.append(o(u[e], e))
    })), n) for (let r = S.length - 1; r >= 0; r -= 1) {
      const e = S[r];
      s.slidesEl.prepend(o(u[e], e))
    } else S.sort(((e, t) => t - e)), S.forEach((e => {
      s.slidesEl.prepend(o(u[e], e))
    }));
    j(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
      e.style[g] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
    })), E()
  }

  a("beforeInit", (() => {
    if (!s.params.virtual.enabled) return;
    let e;
    if (void 0 === s.passedParams.virtual.slides) {
      const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
      t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
        e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
      })))
    }
    e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, d()
  })), a("setTranslate", (() => {
    s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
      d()
    }), 100)) : d())
  })), a("init update resize", (() => {
    s.params.virtual.enabled && s.params.cssMode && Y(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
  })), Object.assign(s.virtual, {
    appendSlide: function (e) {
      if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
      d(!0)
    }, prependSlide: function (e) {
      const t = s.activeIndex;
      let i = t + 1, a = 1;
      if (Array.isArray(e)) {
        for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
        i = t + e.length, a = e.length
      } else s.virtual.slides.unshift(e);
      if (s.params.virtual.cache) {
        const e = s.virtual.cache, t = {};
        Object.keys(e).forEach((s => {
          const i = e[s], r = i.getAttribute("data-swiper-slide-index");
          r && i.setAttribute("data-swiper-slide-index", parseInt(r, 10) + a), t[parseInt(s, 10) + a] = i
        })), s.virtual.cache = t
      }
      d(!0), s.slideTo(i, 0)
    }, removeSlide: function (e) {
      if (null == e) return;
      let t = s.activeIndex;
      if (Array.isArray(e)) for (let i = e.length - 1; i >= 0; i -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[i]], Object.keys(s.virtual.cache).forEach((t => {
        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
      }))), s.virtual.slides.splice(e[i], 1), e[i] < t && (t -= 1), t = Math.max(t, 0); else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
      }))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
      d(!0), s.slideTo(t, 0)
    }, removeAllSlides: function () {
      s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), d(!0), s.slideTo(0, 0)
    }, update: d
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = L(), n = O();

  function l(e) {
    if (!t.enabled) return;
    const {rtlTranslate: s} = t;
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const l = i.keyCode || i.charCode, o = t.params.keyboard.pageUpDown, d = o && 33 === l, p = o && 34 === l,
      c = 37 === l, u = 39 === l, m = 38 === l, h = 40 === l;
    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || p)) return !1;
    if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && m || d)) return !1;
    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
      if (t.params.keyboard.onlyInViewport && (d || p || c || u || m || h)) {
        let e = !1;
        if (W(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === W(t.el, `.${t.params.slideActiveClass}`).length) return;
        const i = t.el, a = i.clientWidth, r = i.clientHeight, l = n.innerWidth, o = n.innerHeight, d = X(i);
        s && (d.left -= i.scrollLeft);
        const p = [[d.left, d.top], [d.left + a, d.top], [d.left, d.top + r], [d.left + a, d.top + r]];
        for (let t = 0; t < p.length; t += 1) {
          const s = p[t];
          if (s[0] >= 0 && s[0] <= l && s[1] >= 0 && s[1] <= o) {
            if (0 === s[0] && 0 === s[1]) continue;
            e = !0
          }
        }
        if (!e) return
      }
      t.isHorizontal() ? ((d || p || c || u) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((p || u) && !s || (d || c) && s) && t.slideNext(), ((d || c) && !s || (p || u) && s) && t.slidePrev()) : ((d || p || m || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (p || h) && t.slideNext(), (d || m) && t.slidePrev()), a("keyPress", l)
    }
  }

  function o() {
    t.keyboard.enabled || (r.addEventListener("keydown", l), t.keyboard.enabled = !0)
  }

  function d() {
    t.keyboard.enabled && (r.removeEventListener("keydown", l), t.keyboard.enabled = !1)
  }

  t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
    t.params.keyboard.enabled && o()
  })), i("destroy", (() => {
    t.keyboard.enabled && d()
  })), Object.assign(t.keyboard, {enable: o, disable: d})
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = O();
  let n;
  s({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  }), t.mousewheel = {enabled: !1};
  let l, o = $();
  const d = [];

  function p() {
    t.enabled && (t.mouseEntered = !0)
  }

  function c() {
    t.enabled && (t.mouseEntered = !1)
  }

  function u(e) {
    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && $() - o < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && $() - o < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), a("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), a("scroll", e.raw)), o = (new r.Date).getTime(), !1)))
  }

  function m(e) {
    let s = e, i = !0;
    if (!t.enabled) return;
    if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
    const r = t.params.mousewheel;
    t.params.cssMode && s.preventDefault();
    let o = t.el;
    "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
    const p = o && o.contains(s.target);
    if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
    s.originalEvent && (s = s.originalEvent);
    let c = 0;
    const m = t.rtlTranslate ? -1 : 1, h = function (e) {
      let t = 0, s = 0, i = 0, a = 0;
      return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, a = 10 * s, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = a, a = 0), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !s && (s = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: s,
        pixelX: i,
        pixelY: a
      }
    }(s);
    if (r.forceToAxis) if (t.isHorizontal()) {
      if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
      c = -h.pixelX * m
    } else {
      if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
      c = -h.pixelY
    } else c = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * m : -h.pixelY;
    if (0 === c) return !0;
    r.invert && (c = -c);
    let f = t.getTranslate() + c * r.sensitivity;
    if (f >= t.minTranslate() && (f = t.minTranslate()), f <= t.maxTranslate() && (f = t.maxTranslate()), i = !!t.params.loop || !(f === t.minTranslate() || f === t.maxTranslate()), i && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
      const e = {time: $(), delta: Math.abs(c), direction: Math.sign(c)},
        i = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
      if (!i) {
        l = void 0;
        let o = t.getTranslate() + c * r.sensitivity;
        const p = t.isBeginning, u = t.isEnd;
        if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!p && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
          direction: e.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), t.params.freeMode.sticky) {
          clearTimeout(n), n = void 0, d.length >= 15 && d.shift();
          const s = d.length ? d[d.length - 1] : void 0, i = d[0];
          if (d.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) d.splice(0); else if (d.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
            const s = c > 0 ? .8 : .2;
            l = e, d.splice(0), n = D((() => {
              t.slideToClosest(t.params.speed, !0, void 0, s)
            }), 0)
          }
          n || (n = D((() => {
            l = e, d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
          }), 500))
        }
        if (i || a("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (o === t.minTranslate() || o === t.maxTranslate())) return !0
      }
    } else {
      const s = {time: $(), delta: Math.abs(c), direction: Math.sign(c), raw: e};
      d.length >= 2 && d.shift();
      const i = d.length ? d[d.length - 1] : void 0;
      if (d.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && u(s) : u(s), function (e) {
        const s = t.params.mousewheel;
        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
        return !1
      }(s)) return !0
    }
    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
  }

  function h(e) {
    let s = t.el;
    "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", p), s[e]("mouseleave", c), s[e]("wheel", m)
  }

  function f() {
    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", m), !0) : !t.mousewheel.enabled && (h("addEventListener"), t.mousewheel.enabled = !0, !0)
  }

  function g() {
    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, m), !0) : !!t.mousewheel.enabled && (h("removeEventListener"), t.mousewheel.enabled = !1, !0)
  }

  i("init", (() => {
    !t.params.mousewheel.enabled && t.params.cssMode && g(), t.params.mousewheel.enabled && f()
  })), i("destroy", (() => {
    t.params.cssMode && f(), t.mousewheel.enabled && g()
  })), Object.assign(t.mousewheel, {enable: f, disable: g})
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {nextEl: null, prevEl: null};
  const r = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

  function n(e) {
    let s;
    return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
  }

  function l(e, s) {
    const i = t.params.navigation;
    (e = r(e)).forEach((e => {
      e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
    }))
  }

  function o() {
    const {nextEl: e, prevEl: s} = t.navigation;
    if (t.params.loop) return l(s, !1), void l(e, !1);
    l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
  }

  function d(e) {
    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
  }

  function p(e) {
    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
  }

  function c() {
    const e = t.params.navigation;
    if (t.params.navigation = Se(t, t.originalParams.navigation, t.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !e.nextEl && !e.prevEl) return;
    let s = n(e.nextEl), i = n(e.prevEl);
    Object.assign(t.navigation, {nextEl: s, prevEl: i}), s = r(s), i = r(i);
    const a = (s, i) => {
      s && s.addEventListener("click", "next" === i ? p : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
    };
    s.forEach((e => a(e, "next"))), i.forEach((e => a(e, "prev")))
  }

  function u() {
    let {nextEl: e, prevEl: s} = t.navigation;
    e = r(e), s = r(s);
    const i = (e, s) => {
      e.removeEventListener("click", "next" === s ? p : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
    };
    e.forEach((e => i(e, "next"))), s.forEach((e => i(e, "prev")))
  }

  i("init", (() => {
    !1 === t.params.navigation.enabled ? m() : (c(), o())
  })), i("toEdge fromEdge lock unlock", (() => {
    o()
  })), i("destroy", (() => {
    u()
  })), i("enable disable", (() => {
    let {nextEl: e, prevEl: s} = t.navigation;
    e = r(e), s = r(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
  })), i("click", ((e, s) => {
    let {nextEl: i, prevEl: n} = t.navigation;
    i = r(i), n = r(n);
    const l = s.target;
    if (t.params.navigation.hideOnClick && !n.includes(l) && !i.includes(l)) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
      let e;
      i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), a(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
    }
  }));
  const m = () => {
    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
  };
  Object.assign(t.navigation, {
    enable: () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), o()
    }, disable: m, update: o, init: c, destroy: u
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = "swiper-pagination";
  let n;
  s({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: e => e,
      formatFractionTotal: e => e,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`
    }
  }), t.pagination = {el: null, bullets: []};
  let l = 0;
  const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

  function d() {
    return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
  }

  function p(e, s) {
    const {bulletActiveClass: i} = t.params.pagination;
    e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
  }

  function c(e) {
    const s = e.target.closest(Te(t.params.pagination.bulletClass));
    if (!s) return;
    e.preventDefault();
    const i = F(s) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === i) return;
      const e = t.realIndex, s = t.getSlideIndexByData(i), a = t.getSlideIndexByData(t.realIndex), r = i => {
        const a = t.activeIndex;
        t.loopFix({direction: i, activeSlideIndex: s, slideTo: !1});
        a === t.activeIndex && t.slideToLoop(e, 0, !1, !0)
      };
      if (s > t.slides.length - t.loopedSlides) r(s > a ? "next" : "prev"); else if (t.params.centeredSlides) {
        const e = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(t.params.slidesPerView, 10));
        s < Math.floor(e / 2) && r("prev")
      }
      t.slideToLoop(i)
    } else t.slideTo(i)
  }

  function u() {
    const e = t.rtl, s = t.params.pagination;
    if (d()) return;
    let i, r, c = t.pagination.el;
    c = o(c);
    const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
    if (t.params.loop ? (r = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
      const a = t.pagination.bullets;
      let o, d, u;
      if (s.dynamicBullets && (n = Q(a[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e => {
        e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
      })), s.dynamicMainBullets > 1 && void 0 !== r && (l += i - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(i - l, 0), d = o + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (d + o) / 2), a.forEach((e => {
        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
        e.classList.remove(...t)
      })), c.length > 1) a.forEach((e => {
        const a = F(e);
        a === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (a >= o && a <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), a === o && p(e, "prev"), a === d && p(e, "next"))
      })); else {
        const e = a[i];
        if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && a.forEach(((e, t) => {
          e.setAttribute("part", t === i ? "bullet-active" : "bullet")
        })), s.dynamicBullets) {
          const e = a[o], t = a[d];
          for (let i = o; i <= d; i += 1) a[i] && a[i].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
          p(e, "prev"), p(t, "next")
        }
      }
      if (s.dynamicBullets) {
        const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n, l = e ? "right" : "left";
        a.forEach((e => {
          e.style[t.isHorizontal() ? l : "top"] = `${r}px`
        }))
      }
    }
    c.forEach(((e, r) => {
      if ("fraction" === s.type && (e.querySelectorAll(Te(s.currentClass)).forEach((e => {
        e.textContent = s.formatFractionCurrent(i + 1)
      })), e.querySelectorAll(Te(s.totalClass)).forEach((e => {
        e.textContent = s.formatFractionTotal(m)
      }))), "progressbar" === s.type) {
        let a;
        a = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
        const r = (i + 1) / m;
        let n = 1, l = 1;
        "horizontal" === a ? n = r : l = r, e.querySelectorAll(Te(s.progressbarFillClass)).forEach((e => {
          e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
        }))
      }
      "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, m), 0 === r && a("paginationRender", e)) : (0 === r && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
    }))
  }

  function m() {
    const e = t.params.pagination;
    if (d()) return;
    const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
    let i = t.pagination.el;
    i = o(i);
    let r = "";
    if ("bullets" === e.type) {
      let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
      for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
    }
    "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((s => {
      "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(Te(e.bulletClass)))
    })), "custom" !== e.type && a("paginationRender", i[0])
  }

  function h() {
    t.params.pagination = Se(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
    const e = t.params.pagination;
    if (!e.el) return;
    let s;
    "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => W(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {el: s}), s = o(s), s.forEach((s => {
      "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass)
    })))
  }

  function f() {
    const e = t.params.pagination;
    if (d()) return;
    let s = t.pagination.el;
    s && (s = o(s), s.forEach((s => {
      s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c))
    }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
  }

  i("changeDirection", (() => {
    if (!t.pagination || !t.pagination.el) return;
    const e = t.params.pagination;
    let {el: s} = t.pagination;
    s = o(s), s.forEach((s => {
      s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
    }))
  })), i("init", (() => {
    !1 === t.params.pagination.enabled ? g() : (h(), m(), u())
  })), i("activeIndexChange", (() => {
    void 0 === t.snapIndex && u()
  })), i("snapIndexChange", (() => {
    u()
  })), i("snapGridLengthChange", (() => {
    m(), u()
  })), i("destroy", (() => {
    f()
  })), i("enable disable", (() => {
    let {el: e} = t.pagination;
    e && (e = o(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
  })), i("lock unlock", (() => {
    u()
  })), i("click", ((e, s) => {
    const i = s.target, r = o(t.pagination.el);
    if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
      if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
      const e = r[0].classList.contains(t.params.pagination.hiddenClass);
      a(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
    }
  }));
  const g = () => {
    t.el.classList.add(t.params.pagination.paginationDisabledClass);
    let {el: e} = t.pagination;
    e && (e = o(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), f()
  };
  Object.assign(t.pagination, {
    enable: () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let {el: e} = t.pagination;
      e && (e = o(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), h(), m(), u()
    }, disable: g, render: m, update: u, init: h, destroy: f
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = L();
  let n, l, o, d, p = !1, c = null, u = null;

  function m() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const {scrollbar: e, rtlTranslate: s} = t, {dragEl: i, el: a} = e, r = t.params.scrollbar,
      n = t.params.loop ? t.progressLoop : t.progress;
    let d = l, p = (o - l) * n;
    s ? (p = -p, p > 0 ? (d = l - p, p = 0) : -p + l > o && (d = o + p)) : p < 0 ? (d = l + p, p = 0) : p + l > o && (d = o - p), t.isHorizontal() ? (i.style.transform = `translate3d(${p}px, 0, 0)`, i.style.width = `${d}px`) : (i.style.transform = `translate3d(0px, ${p}px, 0)`, i.style.height = `${d}px`), r.hide && (clearTimeout(c), a.style.opacity = 1, c = setTimeout((() => {
      a.style.opacity = 0, a.style.transitionDuration = "400ms"
    }), 1e3))
  }

  function h() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const {scrollbar: e} = t, {dragEl: s, el: i} = e;
    s.style.width = "", s.style.height = "", o = t.isHorizontal() ? i.offsetWidth : i.offsetHeight, d = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? o * d : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${l}px` : s.style.height = `${l}px`, i.style.display = d >= 1 ? "none" : "", t.params.scrollbar.hide && (i.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
  }

  function f(e) {
    return t.isHorizontal() ? e.clientX : e.clientY
  }

  function g(e) {
    const {scrollbar: s, rtlTranslate: i} = t, {el: a} = s;
    let r;
    r = (f(e) - X(a)[t.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), i && (r = 1 - r);
    const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
    t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses()
  }

  function v(e) {
    const s = t.params.scrollbar, {scrollbar: i, wrapperEl: r} = t, {el: l, dragEl: o} = i;
    p = !0, n = e.target === o ? f(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.style.transitionDuration = "100ms", o.style.transitionDuration = "100ms", g(e), clearTimeout(u), l.style.transitionDuration = "0ms", s.hide && (l.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), a("scrollbarDragStart", e)
  }

  function w(e) {
    const {scrollbar: s, wrapperEl: i} = t, {el: r, dragEl: n} = s;
    p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), i.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", a("scrollbarDragMove", e))
  }

  function b(e) {
    const s = t.params.scrollbar, {scrollbar: i, wrapperEl: r} = t, {el: n} = i;
    p && (p = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), s.hide && (clearTimeout(u), u = D((() => {
      n.style.opacity = 0, n.style.transitionDuration = "400ms"
    }), 1e3)), a("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
  }

  function y(e) {
    const {scrollbar: s, params: i} = t, a = s.el;
    if (!a) return;
    const n = a, l = !!i.passiveListeners && {passive: !1, capture: !1},
      o = !!i.passiveListeners && {passive: !0, capture: !1};
    if (!n) return;
    const d = "on" === e ? "addEventListener" : "removeEventListener";
    n[d]("pointerdown", v, l), r[d]("pointermove", w, l), r[d]("pointerup", b, o)
  }

  function x() {
    const {scrollbar: e, el: s} = t;
    t.params.scrollbar = Se(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
    const i = t.params.scrollbar;
    if (!i.el) return;
    let a, n;
    "string" == typeof i.el && t.isElement && (a = t.el.querySelector(i.el)), a || "string" != typeof i.el ? a || (a = i.el) : a = r.querySelectorAll(i.el), t.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.querySelectorAll(i.el).length && (a = s.querySelector(i.el)), a.length > 0 && (a = a[0]), a.classList.add(t.isHorizontal() ? i.horizontalClass : i.verticalClass), a && (n = a.querySelector(`.${t.params.scrollbar.dragClass}`), n || (n = q("div", t.params.scrollbar.dragClass), a.append(n))), Object.assign(e, {
      el: a,
      dragEl: n
    }), i.draggable && t.params.scrollbar.el && t.scrollbar.el && y("on"), a && a.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
  }

  function E() {
    const e = t.params.scrollbar, s = t.scrollbar.el;
    s && s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && y("off")
  }

  s({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), t.scrollbar = {el: null, dragEl: null}, i("init", (() => {
    !1 === t.params.scrollbar.enabled ? S() : (x(), h(), m())
  })), i("update resize observerUpdate lock unlock", (() => {
    h()
  })), i("setTranslate", (() => {
    m()
  })), i("setTransition", ((e, s) => {
    !function (e) {
      t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
    }(s)
  })), i("enable disable", (() => {
    const {el: e} = t.scrollbar;
    e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass)
  })), i("destroy", (() => {
    E()
  }));
  const S = () => {
    t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), E()
  };
  Object.assign(t.scrollbar, {
    enable: () => {
      t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), x(), h(), m()
    }, disable: S, updateSize: h, setTranslate: m, init: x, destroy: E
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({parallax: {enabled: !1}});
  const a = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    r = (e, s) => {
      const {rtl: i} = t, a = i ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
      let n = e.getAttribute("data-swiper-parallax-x"), l = e.getAttribute("data-swiper-parallax-y");
      const o = e.getAttribute("data-swiper-parallax-scale"), d = e.getAttribute("data-swiper-parallax-opacity"),
        p = e.getAttribute("data-swiper-parallax-rotate");
      if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * a + "%" : n * s * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
        const t = d - (d - 1) * (1 - Math.abs(s));
        e.style.opacity = t
      }
      let c = `translate3d(${n}, ${l}, 0px)`;
      if (null != o) {
        c += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
      }
      if (p && null != p) {
        c += ` rotate(${p * s * -1}deg)`
      }
      e.style.transform = c
    }, n = () => {
      const {el: e, slides: s, progress: i, snapGrid: n, isElement: l} = t, o = j(e, a);
      t.isElement && o.push(...j(t.hostEl, a)), o.forEach((e => {
        r(e, i)
      })), s.forEach(((e, s) => {
        let l = e.progress;
        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - i * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((e => {
          r(e, l)
        }))
      }))
    };
  i("beforeInit", (() => {
    t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
  })), i("init", (() => {
    t.params.parallax.enabled && n()
  })), i("setTranslate", (() => {
    t.params.parallax.enabled && n()
  })), i("setTransition", ((e, s) => {
    t.params.parallax.enabled && function (e) {
      void 0 === e && (e = t.params.speed);
      const {el: s, hostEl: i} = t, r = [...s.querySelectorAll(a)];
      t.isElement && r.push(...i.querySelectorAll(a)), r.forEach((t => {
        let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
      }))
    }(s)
  }))
}, function (e) {
  let {swiper: t, extendParams: s, on: i, emit: a} = e;
  const r = O();
  s({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), t.zoom = {enabled: !1};
  let n, l, o = 1, d = !1;
  const p = [], c = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, u = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  }, m = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
  let h = 1;

  function f() {
    if (p.length < 2) return 1;
    const e = p[0].pageX, t = p[0].pageY, s = p[1].pageX, i = p[1].pageY;
    return Math.sqrt((s - e) ** 2 + (i - t) ** 2)
  }

  function g(e) {
    const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
    return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
  }

  function v(e) {
    if ("mouse" === e.pointerType && p.splice(0, p.length), !g(e)) return;
    const s = t.params.zoom;
    if (n = !1, l = !1, p.push(e), !(p.length < 2)) {
      if (n = !0, c.scaleStart = f(), !c.slideEl) {
        c.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), c.slideEl || (c.slideEl = t.slides[t.activeIndex]);
        let i = c.slideEl.querySelector(`.${s.containerClass}`);
        if (i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = i, c.imageWrapEl = i ? W(c.imageEl, `.${s.containerClass}`)[0] : void 0, !c.imageWrapEl) return void (c.imageEl = void 0);
        c.maxRatio = c.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
      }
      if (c.imageEl) {
        const [e, t] = function () {
          if (p.length < 2) return {x: null, y: null};
          const e = c.imageEl.getBoundingClientRect();
          return [(p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x - r.scrollX) / o, (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y - r.scrollY) / o]
        }();
        c.originX = e, c.originY = t, c.imageEl.style.transitionDuration = "0ms"
      }
      d = !0
    }
  }

  function w(e) {
    if (!g(e)) return;
    const s = t.params.zoom, i = t.zoom, a = p.findIndex((t => t.pointerId === e.pointerId));
    a >= 0 && (p[a] = e), p.length < 2 || (l = !0, c.scaleMove = f(), c.imageEl && (i.scale = c.scaleMove / c.scaleStart * o, i.scale > c.maxRatio && (i.scale = c.maxRatio - 1 + (i.scale - c.maxRatio + 1) ** .5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5), c.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`))
  }

  function b(e) {
    if (!g(e)) return;
    if ("mouse" === e.pointerType && "pointerout" === e.type) return;
    const s = t.params.zoom, i = t.zoom, a = p.findIndex((t => t.pointerId === e.pointerId));
    a >= 0 && p.splice(a, 1), n && l && (n = !1, l = !1, c.imageEl && (i.scale = Math.max(Math.min(i.scale, c.maxRatio), s.minRatio), c.imageEl.style.transitionDuration = `${t.params.speed}ms`, c.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`, o = i.scale, d = !1, i.scale > 1 && c.slideEl ? c.slideEl.classList.add(`${s.zoomedSlideClass}`) : i.scale <= 1 && c.slideEl && c.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === i.scale && (c.originX = 0, c.originY = 0, c.slideEl = void 0)))
  }

  function y(e) {
    if (!g(e) || !function (e) {
      const s = `.${t.params.zoom.containerClass}`;
      return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
    }(e)) return;
    const s = t.zoom;
    if (!c.imageEl) return;
    if (!u.isTouched || !c.slideEl) return;
    u.isMoved || (u.width = c.imageEl.offsetWidth, u.height = c.imageEl.offsetHeight, u.startX = B(c.imageWrapEl, "x") || 0, u.startY = B(c.imageWrapEl, "y") || 0, c.slideWidth = c.slideEl.offsetWidth, c.slideHeight = c.slideEl.offsetHeight, c.imageWrapEl.style.transitionDuration = "0ms");
    const i = u.width * s.scale, a = u.height * s.scale;
    if (i < c.slideWidth && a < c.slideHeight) return;
    u.minX = Math.min(c.slideWidth / 2 - i / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - a / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX, u.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY;
    if (Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (t.allowClick = !1), !u.isMoved && !d) {
      if (t.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) return void (u.isTouched = !1);
      if (!t.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) return void (u.isTouched = !1)
    }
    e.cancelable && e.preventDefault(), e.stopPropagation(), u.isMoved = !0;
    const r = (s.scale - o) / (c.maxRatio - t.params.zoom.minRatio), {originX: n, originY: l} = c;
    u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + r * (u.width - 2 * n), u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + r * (u.height - 2 * l), u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** .8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** .8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** .8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** .8), m.prevPositionX || (m.prevPositionX = u.touchesCurrent.x), m.prevPositionY || (m.prevPositionY = u.touchesCurrent.y), m.prevTime || (m.prevTime = Date.now()), m.x = (u.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2, m.y = (u.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2, Math.abs(u.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0), Math.abs(u.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0), m.prevPositionX = u.touchesCurrent.x, m.prevPositionY = u.touchesCurrent.y, m.prevTime = Date.now(), c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`
  }

  function x() {
    const e = t.zoom;
    c.slideEl && t.activeIndex !== t.slides.indexOf(c.slideEl) && (c.imageEl && (c.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), c.imageWrapEl && (c.imageWrapEl.style.transform = "translate3d(0,0,0)"), c.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, o = 1, c.slideEl = void 0, c.imageEl = void 0, c.imageWrapEl = void 0, c.originX = 0, c.originY = 0)
  }

  function E(e) {
    const s = t.zoom, i = t.params.zoom;
    if (!c.slideEl) {
      e && e.target && (c.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), c.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? c.slideEl = j(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : c.slideEl = t.slides[t.activeIndex]);
      let s = c.slideEl.querySelector(`.${i.containerClass}`);
      s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = s, c.imageWrapEl = s ? W(c.imageEl, `.${i.containerClass}`)[0] : void 0
    }
    if (!c.imageEl || !c.imageWrapEl) return;
    let a, n, l, d, p, m, h, f, g, v, w, b, y, x, E, S, T, M;
    t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), c.slideEl.classList.add(`${i.zoomedSlideClass}`), void 0 === u.touchesStart.x && e ? (a = e.pageX, n = e.pageY) : (a = u.touchesStart.x, n = u.touchesStart.y);
    const C = "number" == typeof e ? e : null;
    1 === o && C && (a = void 0, n = void 0), s.scale = C || c.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio, o = C || c.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio, !e || 1 === o && C ? (h = 0, f = 0) : (T = c.slideEl.offsetWidth, M = c.slideEl.offsetHeight, l = X(c.slideEl).left + r.scrollX, d = X(c.slideEl).top + r.scrollY, p = l + T / 2 - a, m = d + M / 2 - n, g = c.imageEl.offsetWidth, v = c.imageEl.offsetHeight, w = g * s.scale, b = v * s.scale, y = Math.min(T / 2 - w / 2, 0), x = Math.min(M / 2 - b / 2, 0), E = -y, S = -x, h = p * s.scale, f = m * s.scale, h < y && (h = y), h > E && (h = E), f < x && (f = x), f > S && (f = S)), C && 1 === s.scale && (c.originX = 0, c.originY = 0), c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = `translate3d(${h}px, ${f}px,0)`, c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
  }

  function S() {
    const e = t.zoom, s = t.params.zoom;
    if (!c.slideEl) {
      t.params.virtual && t.params.virtual.enabled && t.virtual ? c.slideEl = j(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : c.slideEl = t.slides[t.activeIndex];
      let e = c.slideEl.querySelector(`.${s.containerClass}`);
      e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = e, c.imageWrapEl = e ? W(c.imageEl, `.${s.containerClass}`)[0] : void 0
    }
    c.imageEl && c.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, o = 1, c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = "translate3d(0,0,0)", c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = "translate3d(0,0,0) scale(1)", c.slideEl.classList.remove(`${s.zoomedSlideClass}`), c.slideEl = void 0, c.originX = 0, c.originY = 0)
  }

  function T(e) {
    const s = t.zoom;
    s.scale && 1 !== s.scale ? S() : E(e)
  }

  function M() {
    return {
      passiveListener: !!t.params.passiveListeners && {passive: !0, capture: !1},
      activeListenerWithCapture: !t.params.passiveListeners || {passive: !1, capture: !0}
    }
  }

  function C() {
    const e = t.zoom;
    if (e.enabled) return;
    e.enabled = !0;
    const {passiveListener: s, activeListenerWithCapture: i} = M();
    t.wrapperEl.addEventListener("pointerdown", v, s), t.wrapperEl.addEventListener("pointermove", w, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
      t.wrapperEl.addEventListener(e, b, s)
    })), t.wrapperEl.addEventListener("pointermove", y, i)
  }

  function A() {
    const e = t.zoom;
    if (!e.enabled) return;
    e.enabled = !1;
    const {passiveListener: s, activeListenerWithCapture: i} = M();
    t.wrapperEl.removeEventListener("pointerdown", v, s), t.wrapperEl.removeEventListener("pointermove", w, i), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
      t.wrapperEl.removeEventListener(e, b, s)
    })), t.wrapperEl.removeEventListener("pointermove", y, i)
  }

  Object.defineProperty(t.zoom, "scale", {
    get: () => h, set(e) {
      if (h !== e) {
        const t = c.imageEl, s = c.slideEl;
        a("zoomChange", e, t, s)
      }
      h = e
    }
  }), i("init", (() => {
    t.params.zoom.enabled && C()
  })), i("destroy", (() => {
    A()
  })), i("touchStart", ((e, s) => {
    t.zoom.enabled && function (e) {
      const s = t.device;
      if (!c.imageEl) return;
      if (u.isTouched) return;
      s.android && e.cancelable && e.preventDefault(), u.isTouched = !0;
      const i = p.length > 0 ? p[0] : e;
      u.touchesStart.x = i.pageX, u.touchesStart.y = i.pageY
    }(s)
  })), i("touchEnd", ((e, s) => {
    t.zoom.enabled && function () {
      const e = t.zoom;
      if (!c.imageEl) return;
      if (!u.isTouched || !u.isMoved) return u.isTouched = !1, void (u.isMoved = !1);
      u.isTouched = !1, u.isMoved = !1;
      let s = 300, i = 300;
      const a = m.x * s, r = u.currentX + a, n = m.y * i, l = u.currentY + n;
      0 !== m.x && (s = Math.abs((r - u.currentX) / m.x)), 0 !== m.y && (i = Math.abs((l - u.currentY) / m.y));
      const o = Math.max(s, i);
      u.currentX = r, u.currentY = l;
      const d = u.width * e.scale, p = u.height * e.scale;
      u.minX = Math.min(c.slideWidth / 2 - d / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - p / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), c.imageWrapEl.style.transitionDuration = `${o}ms`, c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`
    }()
  })), i("doubleTap", ((e, s) => {
    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && T(s)
  })), i("transitionEnd", (() => {
    t.zoom.enabled && t.params.zoom.enabled && x()
  })), i("slideChange", (() => {
    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x()
  })), Object.assign(t.zoom, {enable: C, disable: A, in: E, out: S, toggle: T})
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;

  function a(e, t) {
    const s = function () {
      let e, t, s;
      return (i, a) => {
        for (t = -1, e = i.length; e - t > 1;) s = e + t >> 1, i[s] <= a ? t = s : e = s;
        return e
      }
    }();
    let i, a;
    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
      return e ? (a = s(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
    }, this
  }

  function r() {
    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
  }

  s({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  }), t.controller = {control: void 0}, i("beforeInit", (() => {
    if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
      const e = document.querySelector(t.params.controller.control);
      if (e && e.swiper) t.controller.control = e.swiper; else if (e) {
        const s = i => {
          t.controller.control = i.detail[0], t.update(), e.removeEventListener("init", s)
        };
        e.addEventListener("init", s)
      }
    } else t.controller.control = t.params.controller.control
  })), i("update", (() => {
    r()
  })), i("resize", (() => {
    r()
  })), i("observerUpdate", (() => {
    r()
  })), i("setTranslate", ((e, s, i) => {
    t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, i)
  })), i("setTransition", ((e, s, i) => {
    t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, i)
  })), Object.assign(t.controller, {
    setTranslate: function (e, s) {
      const i = t.controller.control;
      let r, n;
      const l = t.constructor;

      function o(e) {
        if (e.destroyed) return;
        const s = t.rtlTranslate ? -t.translate : t.translate;
        "slide" === t.params.controller.by && (!function (e) {
          t.controller.spline = t.params.loop ? new a(t.slidesGrid, e.slidesGrid) : new a(t.snapGrid, e.snapGrid)
        }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
      }

      if (Array.isArray(i)) for (let t = 0; t < i.length; t += 1) i[t] !== s && i[t] instanceof l && o(i[t]); else i instanceof l && s !== i && o(i)
    }, setTransition: function (e, s) {
      const i = t.constructor, a = t.controller.control;
      let r;

      function n(s) {
        s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && D((() => {
          s.updateAutoHeight()
        })), U(s.wrapperEl, (() => {
          a && s.transitionEnd()
        }))))
      }

      if (Array.isArray(a)) for (r = 0; r < a.length; r += 1) a[r] !== s && a[r] instanceof i && n(a[r]); else a instanceof i && s !== a && n(a)
    }
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  }), t.a11y = {clicked: !1};
  let a = null;

  function r(e) {
    const t = a;
    0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
  }

  const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

  function l(e) {
    (e = n(e)).forEach((e => {
      e.setAttribute("tabIndex", "0")
    }))
  }

  function o(e) {
    (e = n(e)).forEach((e => {
      e.setAttribute("tabIndex", "-1")
    }))
  }

  function d(e, t) {
    (e = n(e)).forEach((e => {
      e.setAttribute("role", t)
    }))
  }

  function p(e, t) {
    (e = n(e)).forEach((e => {
      e.setAttribute("aria-roledescription", t)
    }))
  }

  function c(e, t) {
    (e = n(e)).forEach((e => {
      e.setAttribute("aria-label", t)
    }))
  }

  function u(e) {
    (e = n(e)).forEach((e => {
      e.setAttribute("aria-disabled", !0)
    }))
  }

  function m(e) {
    (e = n(e)).forEach((e => {
      e.setAttribute("aria-disabled", !1)
    }))
  }

  function h(e) {
    if (13 !== e.keyCode && 32 !== e.keyCode) return;
    const s = t.params.a11y, i = e.target;
    t.pagination && t.pagination.el && (i === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(Te(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && i === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && i === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && i.matches(Te(t.params.pagination.bulletClass)) && i.click())
  }

  function f() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length
  }

  function g() {
    return f() && t.params.pagination.clickable
  }

  const v = (e, t, s) => {
    l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)), c(e, s), function (e, t) {
      (e = n(e)).forEach((e => {
        e.setAttribute("aria-controls", t)
      }))
    }(e, t)
  }, w = () => {
    t.a11y.clicked = !0
  }, b = () => {
    requestAnimationFrame((() => {
      requestAnimationFrame((() => {
        t.destroyed || (t.a11y.clicked = !1)
      }))
    }))
  }, y = e => {
    if (t.a11y.clicked) return;
    const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
    if (!s || !t.slides.includes(s)) return;
    const i = t.slides.indexOf(s) === t.activeIndex,
      a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
    i || a || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
  }, x = () => {
    const e = t.params.a11y;
    e.itemRoleDescriptionMessage && p(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
    const s = t.slides.length;
    e.slideLabelMessage && t.slides.forEach(((i, a) => {
      const r = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : a;
      c(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
    }))
  }, E = () => {
    const e = t.params.a11y;
    t.el.append(a);
    const s = t.el;
    e.containerRoleDescriptionMessage && p(s, e.containerRoleDescriptionMessage), e.containerMessage && c(s, e.containerMessage);
    const i = t.wrapperEl,
      r = e.id || i.getAttribute("id") || `swiper-wrapper-${l = 16, void 0 === l && (l = 16), "x".repeat(l).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
    var l;
    const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
    var d;
    d = r, n(i).forEach((e => {
      e.setAttribute("id", d)
    })), function (e, t) {
      (e = n(e)).forEach((e => {
        e.setAttribute("aria-live", t)
      }))
    }(i, o), x();
    let {nextEl: u, prevEl: m} = t.navigation ? t.navigation : {};
    if (u = n(u), m = n(m), u && u.forEach((t => v(t, r, e.nextSlideMessage))), m && m.forEach((t => v(t, r, e.prevSlideMessage))), g()) {
      (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
        e.addEventListener("keydown", h)
      }))
    }
    t.el.addEventListener("focus", y, !0), t.el.addEventListener("pointerdown", w, !0), t.el.addEventListener("pointerup", b, !0)
  };
  i("beforeInit", (() => {
    a = q("span", t.params.a11y.notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true")
  })), i("afterInit", (() => {
    t.params.a11y.enabled && E()
  })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
    t.params.a11y.enabled && x()
  })), i("fromEdge toEdge afterInit lock unlock", (() => {
    t.params.a11y.enabled && function () {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      const {nextEl: e, prevEl: s} = t.navigation;
      s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)))
    }()
  })), i("paginationUpdate", (() => {
    t.params.a11y.enabled && function () {
      const e = t.params.a11y;
      f() && t.pagination.bullets.forEach((s => {
        t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), c(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, F(s) + 1)))), s.matches(Te(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
      }))
    }()
  })), i("destroy", (() => {
    t.params.a11y.enabled && function () {
      a && a.remove();
      let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
      e = n(e), s = n(s), e && e.forEach((e => e.removeEventListener("keydown", h))), s && s.forEach((e => e.removeEventListener("keydown", h))), g() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
        e.removeEventListener("keydown", h)
      }));
      t.el.removeEventListener("focus", y, !0), t.el.removeEventListener("pointerdown", w, !0), t.el.removeEventListener("pointerup", b, !0)
    }()
  }))
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
  let a = !1, r = {};
  const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
    l = e => {
      const t = O();
      let s;
      s = e ? new URL(e) : t.location;
      const i = s.pathname.slice(1).split("/").filter((e => "" !== e)), a = i.length;
      return {key: i[a - 2], value: i[a - 1]}
    }, o = (e, s) => {
      const i = O();
      if (!a || !t.params.history.enabled) return;
      let r;
      r = t.params.url ? new URL(t.params.url) : i.location;
      const l = t.slides[s];
      let o = n(l.getAttribute("data-history"));
      if (t.params.history.root.length > 0) {
        let s = t.params.history.root;
        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), o = `${s}/${e ? `${e}/` : ""}${o}`
      } else r.pathname.includes(e) || (o = `${e ? `${e}/` : ""}${o}`);
      t.params.history.keepQuery && (o += r.search);
      const d = i.history.state;
      d && d.value === o || (t.params.history.replaceState ? i.history.replaceState({value: o}, null, o) : i.history.pushState({value: o}, null, o))
    }, d = (e, s, i) => {
      if (s) for (let a = 0, r = t.slides.length; a < r; a += 1) {
        const r = t.slides[a];
        if (n(r.getAttribute("data-history")) === s) {
          const s = t.getSlideIndex(r);
          t.slideTo(s, e, i)
        }
      } else t.slideTo(0, e, i)
    }, p = () => {
      r = l(t.params.url), d(t.params.speed, r.value, !1)
    };
  i("init", (() => {
    t.params.history.enabled && (() => {
      const e = O();
      if (t.params.history) {
        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
        a = !0, r = l(t.params.url), r.key || r.value ? (d(0, r.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
      }
    })()
  })), i("destroy", (() => {
    t.params.history.enabled && (() => {
      const e = O();
      t.params.history.replaceState || e.removeEventListener("popstate", p)
    })()
  })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
    a && o(t.params.history.key, t.activeIndex)
  })), i("slideChange", (() => {
    a && t.params.cssMode && o(t.params.history.key, t.activeIndex)
  }))
}, function (e) {
  let {swiper: t, extendParams: s, emit: i, on: a} = e, r = !1;
  const n = L(), l = O();
  s({
    hashNavigation: {
      enabled: !1, replaceState: !1, watchState: !1, getSlideIndex(e, s) {
        if (t.virtual && t.params.virtual.enabled) {
          const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
          if (!e) return 0;
          return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
        }
        return t.getSlideIndex(j(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
      }
    }
  });
  const o = () => {
    i("hashChange");
    const e = n.location.hash.replace("#", ""),
      s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
    if (e !== (s ? s.getAttribute("data-hash") : "")) {
      const s = t.params.hashNavigation.getSlideIndex(t, e);
      if (void 0 === s || Number.isNaN(s)) return;
      t.slideTo(s)
    }
  }, d = () => {
    if (!r || !t.params.hashNavigation.enabled) return;
    const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
      s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
    t.params.hashNavigation.replaceState && l.history && l.history.replaceState ? (l.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (n.location.hash = s || "", i("hashSet"))
  };
  a("init", (() => {
    t.params.hashNavigation.enabled && (() => {
      if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
      r = !0;
      const e = n.location.hash.replace("#", "");
      if (e) {
        const s = 0, i = t.params.hashNavigation.getSlideIndex(t, e);
        t.slideTo(i || 0, s, t.params.runCallbacksOnInit, !0)
      }
      t.params.hashNavigation.watchState && l.addEventListener("hashchange", o)
    })()
  })), a("destroy", (() => {
    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && l.removeEventListener("hashchange", o)
  })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
    r && d()
  })), a("slideChange", (() => {
    r && t.params.cssMode && d()
  }))
}, function (e) {
  let t, s, {swiper: i, extendParams: a, on: r, emit: n, params: l} = e;
  i.autoplay = {running: !1, paused: !1, timeLeft: 0}, a({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let o, d, p, c, u, m, h, f = l && l.autoplay ? l.autoplay.delay : 3e3, g = l && l.autoplay ? l.autoplay.delay : 3e3,
    v = (new Date).getTime;

  function w(e) {
    i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", w), T())
  }

  const b = () => {
    if (i.destroyed || !i.autoplay.running) return;
    i.autoplay.paused ? d = !0 : d && (g = o, d = !1);
    const e = i.autoplay.paused ? o : v + g - (new Date).getTime();
    i.autoplay.timeLeft = e, n("autoplayTimeLeft", e, e / f), s = requestAnimationFrame((() => {
      b()
    }))
  }, y = e => {
    if (i.destroyed || !i.autoplay.running) return;
    cancelAnimationFrame(s), b();
    let a = void 0 === e ? i.params.autoplay.delay : e;
    f = i.params.autoplay.delay, g = i.params.autoplay.delay;
    const r = (() => {
      let e;
      if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], !e) return;
      return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
    })();
    !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, f = r, g = r), o = a;
    const l = i.params.speed, d = () => {
      i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(l, !0, !0), n("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, l, !0, !0), n("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(l, !0, !0), n("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, l, !0, !0), n("autoplay")), i.params.cssMode && (v = (new Date).getTime(), requestAnimationFrame((() => {
        y()
      }))))
    };
    return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
      d()
    }), a)) : requestAnimationFrame((() => {
      d()
    })), a
  }, x = () => {
    i.autoplay.running = !0, y(), n("autoplayStart")
  }, E = () => {
    i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), n("autoplayStop")
  }, S = (e, s) => {
    if (i.destroyed || !i.autoplay.running) return;
    clearTimeout(t), e || (h = !0);
    const a = () => {
      n("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", w) : T()
    };
    if (i.autoplay.paused = !0, s) return m && (o = i.params.autoplay.delay), m = !1, void a();
    const r = o || i.params.autoplay.delay;
    o = r - ((new Date).getTime() - v), i.isEnd && o < 0 && !i.params.loop || (o < 0 && (o = 0), a())
  }, T = () => {
    i.isEnd && o < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (v = (new Date).getTime(), h ? (h = !1, y(o)) : y(), i.autoplay.paused = !1, n("autoplayResume"))
  }, M = () => {
    if (i.destroyed || !i.autoplay.running) return;
    const e = L();
    "hidden" === e.visibilityState && (h = !0, S(!0)), "visible" === e.visibilityState && T()
  }, C = e => {
    "mouse" === e.pointerType && (h = !0, i.animating || i.autoplay.paused || S(!0))
  }, A = e => {
    "mouse" === e.pointerType && i.autoplay.paused && T()
  };
  r("init", (() => {
    i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", C), i.el.addEventListener("pointerleave", A)), L().addEventListener("visibilitychange", M), v = (new Date).getTime(), x())
  })), r("destroy", (() => {
    i.el.removeEventListener("pointerenter", C), i.el.removeEventListener("pointerleave", A), L().removeEventListener("visibilitychange", M), i.autoplay.running && E()
  })), r("beforeTransitionStart", ((e, t, s) => {
    !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? S(!0, !0) : E())
  })), r("sliderFirstMove", (() => {
    !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? E() : (p = !0, c = !1, h = !1, u = setTimeout((() => {
      h = !0, c = !0, S(!0)
    }), 200)))
  })), r("touchEnd", (() => {
    if (!i.destroyed && i.autoplay.running && p) {
      if (clearTimeout(u), clearTimeout(t), i.params.autoplay.disableOnInteraction) return c = !1, void (p = !1);
      c && i.params.cssMode && T(), c = !1, p = !1
    }
  })), r("slideChange", (() => {
    !i.destroyed && i.autoplay.running && (m = !0)
  })), Object.assign(i.autoplay, {start: x, stop: E, pause: S, resume: T})
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let a = !1, r = !1;

  function n() {
    const e = t.thumbs.swiper;
    if (!e || e.destroyed) return;
    const s = e.clickedIndex, i = e.clickedSlide;
    if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
    if (null == s) return;
    let a;
    a = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(a) : t.slideTo(a)
  }

  function l() {
    const {thumbs: e} = t.params;
    if (a) return !1;
    a = !0;
    const s = t.constructor;
    if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), Object.assign(t.thumbs.swiper.params, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), t.thumbs.swiper.update(); else if (G(e.swiper)) {
      const i = Object.assign({}, e.swiper);
      Object.assign(i, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(i), r = !0
    }
    return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
  }

  function o(e) {
    const s = t.thumbs.swiper;
    if (!s || s.destroyed) return;
    const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
    let a = 1;
    const r = t.params.thumbs.slideThumbActiveClass;
    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let o = 0; o < a; o += 1) j(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + o}"]`).forEach((e => {
      e.classList.add(r)
    })); else for (let o = 0; o < a; o += 1) s.slides[t.realIndex + o] && s.slides[t.realIndex + o].classList.add(r);
    const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
    if (t.realIndex !== s.realIndex || l) {
      const a = s.activeIndex;
      let r, o;
      if (s.params.loop) {
        const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
        r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
      } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
      l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > a && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
    }
  }

  t.thumbs = {swiper: null}, i("beforeInit", (() => {
    const {thumbs: e} = t.params;
    if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
      const s = L(), i = () => {
        const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
        if (i && i.swiper) e.swiper = i.swiper, l(), o(!0); else if (i) {
          const s = a => {
            e.swiper = a.detail[0], i.removeEventListener("init", s), l(), o(!0), e.swiper.update(), t.update()
          };
          i.addEventListener("init", s)
        }
        return i
      }, a = () => {
        if (t.destroyed) return;
        i() || requestAnimationFrame(a)
      };
      requestAnimationFrame(a)
    } else l(), o(!0)
  })), i("slideChange update resize observerUpdate", (() => {
    o()
  })), i("setTransition", ((e, s) => {
    const i = t.thumbs.swiper;
    i && !i.destroyed && i.setTransition(s)
  })), i("beforeDestroy", (() => {
    const e = t.thumbs.swiper;
    e && !e.destroyed && r && e.destroy()
  })), Object.assign(t.thumbs, {init: l, update: o})
}, function (e) {
  let {swiper: t, extendParams: s, emit: i, once: a} = e;
  s({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: .02
    }
  }), Object.assign(t, {
    freeMode: {
      onTouchStart: function () {
        if (t.params.cssMode) return;
        const e = t.getTranslate();
        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
      }, onTouchMove: function () {
        if (t.params.cssMode) return;
        const {touchEventsData: e, touches: s} = t;
        0 === e.velocities.length && e.velocities.push({
          position: s[t.isHorizontal() ? "startX" : "startY"],
          time: e.touchStartTime
        }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: $()})
      }, onTouchEnd: function (e) {
        let {currentPos: s} = e;
        if (t.params.cssMode) return;
        const {params: r, wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t,
          p = $() - d.touchStartTime;
        if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
          if (r.freeMode.momentum) {
            if (d.velocities.length > 1) {
              const e = d.velocities.pop(), s = d.velocities.pop(), i = e.position - s.position, a = e.time - s.time;
              t.velocity = i / a, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (a > 150 || $() - e.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
            let e = 1e3 * r.freeMode.momentumRatio;
            const s = t.velocity * e;
            let p = t.translate + s;
            l && (p = -p);
            let c, u = !1;
            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
            let h;
            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -m && (p = t.maxTranslate() - m), c = t.maxTranslate(), u = !0, d.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (h = !0); else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > m && (p = t.minTranslate() + m), c = t.minTranslate(), u = !0, d.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (h = !0); else if (r.freeMode.sticky) {
              let e;
              for (let t = 0; t < o.length; t += 1) if (o[t] > -p) {
                e = t;
                break
              }
              p = Math.abs(o[e] - p) < Math.abs(o[e - 1] - p) || "next" === t.swipeDirection ? o[e] : o[e - 1], p = -p
            }
            if (h && a("transitionEnd", (() => {
              t.loopFix()
            })), 0 !== t.velocity) {
              if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                const s = Math.abs((l ? -p : p) - t.translate), i = t.slidesSizesGrid[t.activeIndex];
                e = s < i ? r.speed : s < 2 * i ? 1.5 * r.speed : 2.5 * r.speed
              }
            } else if (r.freeMode.sticky) return void t.slideToClosest();
            r.freeMode.momentumBounce && u ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, U(n, (() => {
              t && !t.destroyed && d.allowMomentumBounce && (i("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                t.setTranslate(c), U(n, (() => {
                  t && !t.destroyed && t.transitionEnd()
                }))
              }), 0))
            }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, U(n, (() => {
              t && !t.destroyed && t.transitionEnd()
            })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
          } else {
            if (r.freeMode.sticky) return void t.slideToClosest();
            r.freeMode && i("_freeModeNoMomentumRelease")
          }
          (!r.freeMode.momentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        }
      }
    }
  })
}, function (e) {
  let t, s, i, a, {swiper: r, extendParams: n, on: l} = e;
  n({grid: {rows: 1, fill: "column"}});
  const o = () => {
    let e = r.params.spaceBetween;
    return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
  };
  l("init", (() => {
    a = r.params.grid && r.params.grid.rows > 1
  })), l("update", (() => {
    const {params: e, el: t} = r, s = e.grid && e.grid.rows > 1;
    a && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), i = 1, r.emitContainerClasses()) : !a && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), a = s
  })), r.grid = {
    initSlides: e => {
      const {slidesPerView: a} = r.params, {rows: n, fill: l} = r.params.grid;
      i = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== a && "row" === l && (t = Math.max(t, a * n)), s = t / n
    }, updateSlide: (e, a, n, l) => {
      const {slidesPerGroup: d} = r.params, p = o(), {rows: c, fill: u} = r.params.grid;
      let m, h, f;
      if ("row" === u && d > 1) {
        const s = Math.floor(e / (d * c)), i = e - c * d * s,
          r = 0 === s ? d : Math.min(Math.ceil((n - s * c * d) / c), d);
        f = Math.floor(i / r), h = i - f * r + s * d, m = h + f * t / c, a.style.order = m
      } else "column" === u ? (h = Math.floor(e / c), f = e - h * c, (h > i || h === i && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
      a.row = f, a.column = h, a.style[l("margin-top")] = 0 !== f ? p && `${p}px` : ""
    }, updateWrapperSize: (e, s, i) => {
      const {centeredSlides: a, roundLengths: n} = r.params, l = o(), {rows: d} = r.params.grid;
      if (r.virtualSize = (e + l) * t, r.virtualSize = Math.ceil(r.virtualSize / d) - l, r.wrapperEl.style[i("width")] = `${r.virtualSize + l}px`, a) {
        const e = [];
        for (let t = 0; t < s.length; t += 1) {
          let i = s[t];
          n && (i = Math.floor(i)), s[t] < r.virtualSize + s[0] && e.push(i)
        }
        s.splice(0, s.length), s.push(...e)
      }
    }
  }
}, function (e) {
  let {swiper: t} = e;
  Object.assign(t, {
    appendSlide: Me.bind(t),
    prependSlide: Ce.bind(t),
    addSlide: Ae.bind(t),
    removeSlide: Pe.bind(t),
    removeAllSlides: ze.bind(t)
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({fadeEffect: {crossFade: !1}}), ke({
    effect: "fade",
    swiper: t,
    on: i,
    setTranslate: () => {
      const {slides: e} = t;
      t.params.fadeEffect;
      for (let s = 0; s < e.length; s += 1) {
        const e = t.slides[s];
        let i = -e.swiperSlideOffset;
        t.params.virtualTranslate || (i -= t.translate);
        let a = 0;
        t.isHorizontal() || (a = i, i = 0);
        const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
          n = Le(0, e);
        n.style.opacity = r, n.style.transform = `translate3d(${i}px, ${a}px, 0px)`
      }
    },
    setTransition: e => {
      const s = t.slides.map((e => _(e)));
      s.forEach((t => {
        t.style.transitionDuration = `${e}ms`
      })), Ie({swiper: t, duration: e, transformElements: s, allSlides: !0})
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !t.params.cssMode
    })
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
  const a = (e, t, s) => {
    let i = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
      a = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
    i || (i = q("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(i)), a || (a = q("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(a)), i && (i.style.opacity = Math.max(-t, 0)), a && (a.style.opacity = Math.max(t, 0))
  };
  ke({
    effect: "cube",
    swiper: t,
    on: i,
    setTranslate: () => {
      const {el: e, wrapperEl: s, slides: i, width: r, height: n, rtlTranslate: l, size: o, browser: d} = t,
        p = t.params.cubeEffect, c = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
      let m, h = 0;
      p.shadow && (c ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = q("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = q("div", "swiper-cube-shadow"), e.append(m))));
      for (let t = 0; t < i.length; t += 1) {
        const e = i[t];
        let s = t;
        u && (s = parseInt(e.getAttribute("data-swiper-slide-index"), 10));
        let r = 90 * s, n = Math.floor(r / 360);
        l && (r = -r, n = Math.floor(-r / 360));
        const d = Math.max(Math.min(e.progress, 1), -1);
        let m = 0, f = 0, g = 0;
        s % 4 == 0 ? (m = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (m = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (m = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (m = -o, g = 3 * o + 4 * o * n), l && (m = -m), c || (f = m, m = 0);
        const v = `rotateX(${c ? 0 : -r}deg) rotateY(${c ? r : 0}deg) translate3d(${m}px, ${f}px, ${g}px)`;
        d <= 1 && d > -1 && (h = 90 * s + 90 * d, l && (h = 90 * -s - 90 * d)), e.style.transform = v, p.slideShadows && a(e, d, c)
      }
      if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, p.shadow) if (c) m.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`; else {
        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
          t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale,
          i = p.shadowScale / t, a = p.shadowOffset;
        m.style.transform = `scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + a}px, ${-n / 2 / i}px) rotateX(-90deg)`
      }
      const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
      s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
    },
    setTransition: e => {
      const {el: s, slides: i} = t;
      if (i.forEach((t => {
        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
          t.style.transitionDuration = `${e}ms`
        }))
      })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
        const t = s.querySelector(".swiper-cube-shadow");
        t && (t.style.transitionDuration = `${e}ms`)
      }
    },
    recreateShadows: () => {
      const e = t.isHorizontal();
      t.slides.forEach((t => {
        const s = Math.max(Math.min(t.progress, 1), -1);
        a(t, s, e)
      }))
    },
    getEffectParams: () => t.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({flipEffect: {slideShadows: !0, limitRotation: !0}});
  const a = (e, s) => {
    let i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
      a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
    i || (i = Oe("flip", e, t.isHorizontal() ? "left" : "top")), a || (a = Oe("flip", e, t.isHorizontal() ? "right" : "bottom")), i && (i.style.opacity = Math.max(-s, 0)), a && (a.style.opacity = Math.max(s, 0))
  };
  ke({
    effect: "flip",
    swiper: t,
    on: i,
    setTranslate: () => {
      const {slides: e, rtlTranslate: s} = t, i = t.params.flipEffect;
      for (let r = 0; r < e.length; r += 1) {
        const n = e[r];
        let l = n.progress;
        t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
        const o = n.swiperSlideOffset;
        let d = -180 * l, p = 0, c = t.params.cssMode ? -o - t.translate : -o, u = 0;
        t.isHorizontal() ? s && (d = -d) : (u = c, c = 0, p = -d, d = 0), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, i.slideShadows && a(n, l);
        const m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
        Le(0, n).style.transform = m
      }
    },
    setTransition: e => {
      const s = t.slides.map((e => _(e)));
      s.forEach((t => {
        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
          t.style.transitionDuration = `${e}ms`
        }))
      })), Ie({swiper: t, duration: e, transformElements: s})
    },
    recreateShadows: () => {
      t.params.flipEffect, t.slides.forEach((e => {
        let s = e.progress;
        t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), a(e, s)
      }))
    },
    getEffectParams: () => t.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !t.params.cssMode
    })
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({coverflowEffect: {rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0}}), ke({
    effect: "coverflow", swiper: t, on: i, setTranslate: () => {
      const {width: e, height: s, slides: i, slidesSizesGrid: a} = t, r = t.params.coverflowEffect,
        n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth;
      for (let t = 0, c = i.length; t < c; t += 1) {
        const e = i[t], s = a[t], l = (o - e.swiperSlideOffset - s / 2) / s,
          c = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
        let u = n ? d * c : 0, m = n ? 0 : d * c, h = -p * Math.abs(c), f = r.stretch;
        "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
        let g = n ? 0 : f * c, v = n ? f * c : 0, w = 1 - (1 - r.scale) * Math.abs(c);
        Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0), Math.abs(w) < .001 && (w = 0);
        const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
        if (Le(0, e).style.transform = b, e.style.zIndex = 1 - Math.abs(Math.round(c)), r.slideShadows) {
          let t = n ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
            s = n ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
          t || (t = Oe("coverflow", e, n ? "left" : "top")), s || (s = Oe("coverflow", e, n ? "right" : "bottom")), t && (t.style.opacity = c > 0 ? c : 0), s && (s.style.opacity = -c > 0 ? -c : 0)
        }
      }
    }, setTransition: e => {
      t.slides.map((e => _(e))).forEach((t => {
        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
          t.style.transitionDuration = `${e}ms`
        }))
      }))
    }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
      next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
    }
  });
  const a = e => "string" == typeof e ? e : `${e}px`;
  ke({
    effect: "creative",
    swiper: t,
    on: i,
    setTranslate: () => {
      const {slides: e, wrapperEl: s, slidesSizesGrid: i} = t, r = t.params.creativeEffect, {progressMultiplier: n} = r,
        l = t.params.centeredSlides;
      if (l) {
        const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
        s.style.transform = `translateX(calc(50% - ${e}px))`
      }
      for (let o = 0; o < e.length; o += 1) {
        const s = e[o], i = s.progress, d = Math.min(Math.max(s.progress, -r.limitProgress), r.limitProgress);
        let p = d;
        l || (p = Math.min(Math.max(s.originalProgress, -r.limitProgress), r.limitProgress));
        const c = s.swiperSlideOffset, u = [t.params.cssMode ? -c - t.translate : -c, 0, 0], m = [0, 0, 0];
        let h = !1;
        t.isHorizontal() || (u[1] = u[0], u[0] = 0);
        let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
        d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach(((e, t) => {
          u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`
        })), m.forEach(((e, t) => {
          m[t] = f.rotate[t] * Math.abs(d * n)
        })), s.style.zIndex = -Math.abs(Math.round(i)) + e.length;
        const g = u.join(", "), v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
          w = p < 0 ? `scale(${1 + (1 - f.scale) * p * n})` : `scale(${1 - (1 - f.scale) * p * n})`,
          b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n, y = `translate3d(${g}) ${v} ${w}`;
        if (h && f.shadow || !h) {
          let e = s.querySelector(".swiper-slide-shadow");
          if (!e && f.shadow && (e = Oe("creative", s)), e) {
            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
          }
        }
        const x = Le(0, s);
        x.style.transform = y, x.style.opacity = b, f.origin && (x.style.transformOrigin = f.origin)
      }
    },
    setTransition: e => {
      const s = t.slides.map((e => _(e)));
      s.forEach((t => {
        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
          t.style.transitionDuration = `${e}ms`
        }))
      })), Ie({swiper: t, duration: e, transformElements: s, allSlides: !0})
    },
    perspective: () => t.params.creativeEffect.perspective,
    overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
  })
}, function (e) {
  let {swiper: t, extendParams: s, on: i} = e;
  s({cardsEffect: {slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), ke({
    effect: "cards", swiper: t, on: i, setTranslate: () => {
      const {slides: e, activeIndex: s, rtlTranslate: i} = t, a = t.params.cardsEffect, {
        startTranslate: r,
        isTouched: n
      } = t.touchEventsData, l = i ? -t.translate : t.translate;
      for (let o = 0; o < e.length; o += 1) {
        const d = e[o], p = d.progress, c = Math.min(Math.max(p, -4), 4);
        let u = d.swiperSlideOffset;
        t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
        let m = t.params.cssMode ? -u - t.translate : -u, h = 0;
        const f = -100 * Math.abs(c);
        let g = 1, v = -a.perSlideRotate * c, w = a.perSlideOffset - .75 * Math.abs(c);
        const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
          y = (b === s || b === s - 1) && c > 0 && c < 1 && (n || t.params.cssMode) && l < r,
          x = (b === s || b === s + 1) && c < 0 && c > -1 && (n || t.params.cssMode) && l > r;
        if (y || x) {
          const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
          v += -28 * c * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(c) + "%"
        }
        if (m = c < 0 ? `calc(${m}px ${i ? "-" : "+"} (${w * Math.abs(c)}%))` : c > 0 ? `calc(${m}px ${i ? "-" : "+"} (-${w * Math.abs(c)}%))` : `${m}px`, !t.isHorizontal()) {
          const e = h;
          h = m, m = e
        }
        const E = c < 0 ? "" + (1 + (1 - g) * c) : "" + (1 - (1 - g) * c),
          S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${a.rotate ? i ? -v : v : 0}deg)\n        scale(${E})\n      `;
        if (a.slideShadows) {
          let e = d.querySelector(".swiper-slide-shadow");
          e || (e = Oe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
        }
        d.style.zIndex = -Math.abs(Math.round(p)) + e.length;
        Le(0, d).style.transform = S
      }
    }, setTransition: e => {
      const s = t.slides.map((e => _(e)));
      s.forEach((t => {
        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
          t.style.transitionDuration = `${e}ms`
        }))
      })), Ie({swiper: t, duration: e, transformElements: s})
    }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
  })
}];
Ee.use(De);
const $e = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function Be(e) {
  return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
}

function Ge(e, t) {
  const s = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
    void 0 === e[s] ? e[s] = t[s] : Be(t[s]) && Be(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : Ge(e[s], t[s]) : e[s] = t[s]
  }))
}

function Re(e) {
  return void 0 === e && (e = ""), e.replace(/-[a-z]/g, (e => e.toUpperCase().replace("-", "")))
}

const He = e => {
    if (parseFloat(e) === Number(e)) return Number(e);
    if ("true" === e) return !0;
    if ("" === e) return !0;
    if ("false" === e) return !1;
    if ("null" === e) return null;
    if ("undefined" !== e) {
      if ("string" == typeof e && e.includes("{") && e.includes("}") && e.includes('"')) {
        let s;
        try {
          s = JSON.parse(e)
        } catch (t) {
          s = e
        }
        return s
      }
      return e
    }
  },
  Ye = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];

function Ne(e, t, s) {
  const i = {}, a = {};
  Ge(i, we);
  const r = [...$e, "on"], n = r.map((e => e.replace(/_/, "")));
  r.forEach((t => {
    t = t.replace("_", ""), void 0 !== e[t] && (a[t] = e[t])
  }));
  const l = [...e.attributes];
  return "string" == typeof t && void 0 !== s && l.push({name: t, value: Be(s) ? {...s} : s}), l.forEach((e => {
    const t = Ye.filter((t => 0 === e.name.indexOf(`${t}-`)))[0];
    if (t) {
      const s = Re(t), i = Re(e.name.split(`${t}-`)[1]);
      void 0 === a[s] && (a[s] = {}), !0 === a[s] && (a[s] = {enabled: !0}), a[s][i] = He(e.value)
    } else {
      const t = Re(e.name);
      if (!n.includes(t)) return;
      const s = He(e.value);
      a[t] && Ye.includes(e.name) && !Be(s) ? (a[t].constructor !== Object && (a[t] = {}), a[t].enabled = !!s) : a[t] = s
    }
  })), Ge(i, a), i.navigation ? i.navigation = {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next", ...!0 !== i.navigation ? i.navigation : {}
  } : !1 === i.navigation && delete i.navigation, i.scrollbar ? i.scrollbar = {el: ".swiper-scrollbar", ...!0 !== i.scrollbar ? i.scrollbar : {}} : !1 === i.scrollbar && delete i.scrollbar, i.pagination ? i.pagination = {el: ".swiper-pagination", ...!0 !== i.pagination ? i.pagination : {}} : !1 === i.pagination && delete i.pagination, {
    params: i,
    passedParams: a
  }
}

const _e = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;overflow:clip;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
const je = "undefined" == typeof window || "undefined" == typeof HTMLElement ? class {
  } : HTMLElement,
  qe = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ',
  Xe = (e, t) => {
    if ("undefined" != typeof CSSStyleSheet && e.adoptedStyleSheets) {
      const s = new CSSStyleSheet;
      s.replaceSync(t), e.adoptedStyleSheets = [s]
    } else {
      const s = document.createElement("style");
      s.rel = "stylesheet", s.textContent = t, e.appendChild(s)
    }
  };

class Ve extends je {
  constructor() {
    super(), this.attachShadow({mode: "open"})
  }

  static get nextButtonSvg() {
    return qe
  }

  static get prevButtonSvg() {
    return qe.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>')
  }

  cssStyles() {
    return [_e, ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []].join("\n")
  }

  cssLinks() {
    return this.injectStylesUrls || []
  }

  calcSlideSlots() {
    const e = this.slideSlots || 0,
      t = [...this.querySelectorAll("[slot^=slide-]")].map((e => parseInt(e.getAttribute("slot").split("slide-")[1], 10)));
    if (this.slideSlots = t.length ? Math.max(...t) + 1 : 0, this.rendered) if (this.slideSlots > e) for (let s = e; s < this.slideSlots; s += 1) {
      const e = document.createElement("swiper-slide");
      e.setAttribute("part", `slide slide-${s + 1}`);
      const t = document.createElement("slot");
      t.setAttribute("name", `slide-${s + 1}`), e.appendChild(t), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(e)
    } else if (this.slideSlots < e) {
      const e = this.swiper.slides;
      for (let t = e.length - 1; t >= 0; t -= 1) t > this.slideSlots && e[t].remove()
    }
  }

  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), e.length && Xe(this.shadowRoot, e), this.cssLinks().forEach((e => {
      if (this.shadowRoot.querySelector(`link[href="${e}"]`)) return;
      const t = document.createElement("link");
      t.rel = "stylesheet", t.href = e, this.shadowRoot.appendChild(t)
    }));
    const t = document.createElement("div");
    var s;
    t.classList.add("swiper"), t.part = "container", t.innerHTML = `\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        ${Array.from({length: this.slideSlots}).map(((e, t) => `\n        <swiper-slide part="slide slide-${t}">\n          <slot name="slide-${t}"></slot>\n        </swiper-slide>\n        `)).join("")}\n      </div>\n      <slot name="container-end"></slot>\n      ${s = this.passedParams, void 0 === s && (s = {}), s.navigation && void 0 === s.navigation.nextEl && void 0 === s.navigation.prevEl ? `\n        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>\n        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>\n      ` : ""}\n      ${function (e) {
      return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
    }(this.passedParams) ? '\n        <div part="pagination" class="swiper-pagination"></div>\n      ' : ""}\n      ${function (e) {
      return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
    }(this.passedParams) ? '\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      ' : ""}\n    `, this.shadowRoot.appendChild(t), this.rendered = !0
  }

  initialize() {
    var e = this;
    if (this.initialized) return;
    this.initialized = !0;
    const {params: t, passedParams: s} = Ne(this);
    this.swiperParams = t, this.passedParams = s, delete this.swiperParams.init, this.render(), this.swiper = new Ee(this.shadowRoot.querySelector(".swiper"), {
      ...t.virtual ? {} : {
        observer: !0,
        observeSlideChildren: this.slideSlots > 0
      }, ...t, touchEventsTarget: "container", onAny: function (s) {
        "observerUpdate" === s && e.calcSlideSlots();
        const i = t.eventsPrefix ? `${t.eventsPrefix}${s.toLowerCase()}` : s.toLowerCase();
        for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) r[n - 1] = arguments[n];
        const l = new CustomEvent(i, {detail: r, bubbles: "hashChange" !== s, cancelable: !0});
        e.dispatchEvent(l)
      }
    })
  }

  connectedCallback() {
    this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || !1 !== this.init && "false" !== this.getAttribute("init") && this.initialize()
  }

  disconnectedCallback() {
    this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || (this.swiper && this.swiper.destroy && this.swiper.destroy(), this.initialized = !1)
  }

  updateSwiperOnPropChange(e, t) {
    const {params: s, passedParams: i} = Ne(this, e, t);
    this.passedParams = i, this.swiperParams = s, function (e) {
      let {
        swiper: t,
        slides: s,
        passedParams: i,
        changedParams: a,
        nextEl: r,
        prevEl: n,
        scrollbarEl: l,
        paginationEl: o
      } = e;
      const d = a.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)), {
        params: p,
        pagination: c,
        navigation: u,
        scrollbar: m,
        virtual: h,
        thumbs: f
      } = t;
      let g, v, w, b, y, x, E, S;
      a.includes("thumbs") && i.thumbs && i.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (g = !0), a.includes("controller") && i.controller && i.controller.control && p.controller && !p.controller.control && (v = !0), a.includes("pagination") && i.pagination && (i.pagination.el || o) && (p.pagination || !1 === p.pagination) && c && !c.el && (w = !0), a.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (b = !0), a.includes("navigation") && i.navigation && (i.navigation.prevEl || n) && (i.navigation.nextEl || r) && (p.navigation || !1 === p.navigation) && u && !u.prevEl && !u.nextEl && (y = !0);
      const T = e => {
        t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), p[e].prevEl = void 0, p[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), p[e].el = void 0, t[e].el = void 0))
      };
      a.includes("loop") && t.isElement && (p.loop && !i.loop ? x = !0 : !p.loop && i.loop ? E = !0 : S = !0), d.forEach((e => {
        if (Be(p[e]) && Be(i[e])) Ge(p[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || T(e); else {
          const t = i[e];
          !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = i[e] : !1 === t && T(e)
        }
      })), d.includes("controller") && !v && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), a.includes("children") && s && h && p.virtual.enabled && (h.slides = s, h.update(!0)), a.includes("children") && s && p.loop && (S = !0), g && f.init() && f.update(!0);
      v && (t.controller.control = p.controller.control), w && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (p.pagination.el = o), c.init(), c.render(), c.update()), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (p.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), y && (t.isElement && (r && "string" != typeof r || (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), n && "string" != typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-prev"), n.innerHTML = t.hostEl.constructor.prevButtonSvg, n.part.add("button-prev"), t.el.appendChild(n))), r && (p.navigation.nextEl = r), n && (p.navigation.prevEl = n), u.init(), u.update()), a.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), a.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), a.includes("direction") && t.changeDirection(i.direction, !1), (x || S) && t.loopDestroy(), (E || S) && t.loopCreate(), t.update()
    }({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [Re(e)], ..."navigation" === e && i[e] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {}, ..."pagination" === e && i[e] ? {paginationEl: ".swiper-pagination"} : {}, ..."scrollbar" === e && i[e] ? {scrollbarEl: ".swiper-scrollbar"} : {}
    })
  }

  attributeChangedCallback(e, t, s) {
    this.initialized && ("true" === t && null === s && (s = !1), this.updateSwiperOnPropChange(e, s))
  }

  static get observedAttributes() {
    return $e.filter((e => e.includes("_"))).map((e => e.replace(/[A-Z]/g, (e => `-${e}`)).replace("_", "").toLowerCase()))
  }
}

$e.forEach((e => {
  "init" !== e && (e = e.replace("_", ""), Object.defineProperty(Ve.prototype, e, {
    configurable: !0, get() {
      return (this.passedParams || {})[e]
    }, set(t) {
      this.passedParams || (this.passedParams = {}), this.passedParams[e] = t, this.initialized && this.updateSwiperOnPropChange(e, t)
    }
  }))
}));

class Fe extends je {
  constructor() {
    super(), this.attachShadow({mode: "open"})
  }

  render() {
    const e = this.lazy || "" === this.getAttribute("lazy") || "true" === this.getAttribute("lazy");
    if (Xe(this.shadowRoot, "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}"), this.shadowRoot.appendChild(document.createElement("slot")), e) {
      const e = document.createElement("div");
      e.classList.add("swiper-lazy-preloader"), e.part.add("preloader"), this.shadowRoot.appendChild(e)
    }
  }

  initialize() {
    this.render()
  }

  connectedCallback() {
    this.initialize()
  }
}

"undefined" != typeof window && (window.SwiperElementRegisterParams = e => {
  $e.push(...e)
});
const We = E({
  __name: "home-banner", setup(f) {
    "undefined" != typeof window && (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", Ve), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", Fe));
    let g = e([]), v = e(0);
    t((() => {
      w()
    }));
    const w = () => {
      g.value = [
        {
          "HPIMG_ID": "1",
          "HPIMG_IMG": "/static/img/HPIMG_1.jpg?v=2",
          "HPIMG_TYPE": 2,
          "HPIMG_CONTENT": "6901028010801_6901028010795"
        },
        {
          "HPIMG_ID": "2",
          "HPIMG_IMG": "/static/img/HPIMG_2.jpg?v=2",
          "HPIMG_TYPE": 2,
          "HPIMG_CONTENT": "6901028212311_6901028212304"
        },
        {
          "HPIMG_ID": "3",
          "HPIMG_IMG": "/static/img/HPIMG_3.jpg?v=2",
          "HPIMG_TYPE": 2,
          "HPIMG_CONTENT": "6901028212373_6901028212366"
        }
      ]
    };

    function b(e) {
      const t = e.detail[0];
      for (let s = 0; s < t.slides.length; s++) {
        let e = t.slides[s], i = e.progress, a = 1 - .3 * Math.abs(i) + 0;
        a > 1 && (a = 1);
        e.querySelector(".img").style.transform = `scale(${a},${a})`
      }
    }

    function E(e) {
      v.value = e.detail[0].activeIndex
    }

    function S(e) {
    }

    function T(e) {
      const {HPIMG_TYPE: t, HPIMG_CONTENT: s} = g.value[e];
      switch (t) {
        case 1:
          u({url: `/pages/activitie/activitie?id=${s}`});
          break;
        case 2:
          u({url: `/pages/specificationDetails/specificationDetails?type=产品信息&CIG_CODE=${s}.json`})
      }
    }

    return (e, t) => {
      const s = m, u = h;
      return i(), a(n, null, [r(g).length ? (i(), a("swiper-container", {
        key: 0,
        class: "swiper",
        effect: "coverflow",
        grabCursor: "true",
        centeredSlides: "true",
        spaceBetween: -10,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        speed: "900",
        watchSlidesProgress: "true",
        observer: "true",
        observeParents: "true",
        slidesPerView: "auto",
        coverflowEffect: {rotate: 0, stretch: 10, depth: 20, modifier: 2, slideShadows: !1},
        onProgress: b,
        autoplay: {disableOnInteraction: !1},
        onSlidechange: E,
        onTouchstart: S
      }, [(i(!0), a(n, null, l(r(g), ((e, t) => (i(), a("swiper-slide", {
        class: "swiper-slide",
        key: t,
        onClick: e => T(t)
      }, [o(s, {
        class: "img",
        "data-lb-type": e.HPIMG_TYPE,
        "data-lb-code": e.HPIMG_CONTENT,
        src: e.HPIMG_IMG,
        mode: "aspectFill"
      }, null, 8, ["data-lb-type", "data-lb-code", "src"])], 8, ["onClick"])))), 128))], 32)) : d("", !0), o(u, {class: "indicator-dots"}, {
        default: p((() => [(i(!0), a(n, null, l(r(g), ((e, t) => (i(), c(u, {
          key: t,
          onClick: e => T(t)
        }, {
          default: p((() => [t == r(v) ? (i(), c(s, {key: 0, src: y, mode: "widthFix"})) : (i(), c(s, {
            key: 1,
            src: x,
            mode: "aspectFit"
          }))])), _: 2
        }, 1032, ["onClick"])))), 128))])), _: 1
      })], 64)
    }
  }
}, [["__scopeId", "data-v-5fdff1c4"]]), Ue = E({
  __name: "qyppCon", setup(t) {
    let y = e(null);
    e([]);
    let x = true, E = uni.scanData;
    const P = e(null), z = e(null);
    S((() => {
    })), T((() => {
      uni.setTitle("首页")
    })), M((() => {
      x ? (k(), P.value.open()) : f({title: "异常操作", icon: "error"})
    }));
    const k = () => {
      y.value = [
        {
          "MENU_ID": "1",
          "MENU_IMG": "/static/img/006.png",
          "MENU_TITLE": "产品查询"
        },
        {
          "MENU_ID": "2",
          "MENU_IMG": "/static/img/023.png",
          "MENU_TITLE": "新品介绍"
        },
        {
          "MENU_ID": "3",
          "MENU_IMG": "/static/img/007.png",
          "MENU_TITLE": "防伪知识"
        },
        {
          "MENU_ID": "4",
          "MENU_IMG": "/static/img/008.png",
          "MENU_TITLE": "品牌活动"
        },
        {
          "MENU_ID": "5",
          "MENU_IMG": "/static/img/009.png",
          "MENU_TITLE": "公告信息"
        }
      ]
    };

    function L(e) {
      switch (e) {
        case"y":
          break;
        case"n":
          window.history.back()
      }
      P.value.close()
    }

    function I() {
      z.value.close()
    }

    return (e, t) => {
      const s = h, f = C(w("home-banner"), We), S = m, T = C(w("uni-popup"), A), M = b;
      return i(), a(n, null, [r(y) ? (i(), a(n, {key: 0}, [o(s, {class: "nav"}), o(s, {class: "banner"}, {
        default: p((() => [o(f)])),
        _: 1
      }), o(s, {class: "feature"}, {
        default: p((() => [o(s, {class: "tit"}, {
          default: p((() => [o(S, {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAAxCAMAAAA7mjazAAABtlBMVEUAAAALCwsGBgbS2NwHBwfS2Ny131vS2NwAAADS2NzS2NzS2NzS2NzS2NzS2NzS2NzS2Ny131vS2NwODg7S2NzS2Ny131sAAAAAAAAGBgYHBwfS2NwGBgYFBQUAAAAEBAQTExMGBgYFBQUMDAwMDAwCAgIEBAQEBAQDAwMQEBAsNRkZGRoHBwcKCgoGBgYDAwMbIBEEBAS131sHBwcICAgEBAQDAwO131u131u131u131sDAwO131tWWVq131u131u131sUFxAcIxCxtrkqKywVGBE9Pj8kJx53en2131uKq0aprbG131sAAAAGBga131uYnaA7Rx9JS0xedDCSlpmmzVQlJiZGVSW/xchYWlwbGxyDokIAAADS2Ny131saGhoSEhI2QR4YGBghJxWIp0QXFxeq0VUVFRUYGw+TtUo9Pj9QUlRrgzYlLRUZGxSdoqUpMRYlJicbIBFGVSUuOBkWGBNabi24vcB1kDyew1BkezNBUCI4RR0iKBMdIhITFg5/nEA2NzhLXCc9SiAdJBBUZysgISE0PxwdIBeLjpEqKyxQYinFys5/g4Voa20yMzRWWVpxizkuwwW6AAAAXXRSTlMA3aKAu8DAQECgEOBg8JBw0EAw61AggCAQ2cSw08YwmfLmdXPmgk2M3vXv7u3izGv3tZB+9K5cMPDgsKZwZGBQEPf08vHo497Y0MzKoFA+IOjo5trQxL+6tbWsdGAnWEhIAAAJVElEQVRo3uyXS4/TMBCAk9Sl2bSliFAlLU0f0G4L7C4srwviABICIYFAwI12QlEo4imBEFx4CQkBF/4yYzvOJMEohVNW4js0HjdxMl88rmv8Zw0CxiyKLMYCI8dNj9p00r8xMHe6R1SwaXV3eka5MQEYRQzANLKc3JptUkQnZRlYenKXdgGWAxXYLoDrGaWmQA/aARidLNRjgh7LyNABONZPoh5AdMEoNUV6jowBwJ2KwohxAYaqHaytx7Nt+0wI0LERX6rnoVFqCovrfAfwle/ikgMaGA3jmjnGGT1WiGBPyLlxlHNmC686I5qbRjnhemjxQBVjS5KsoP3REv1MC/RQk4Rk9QARTsLfxiknPC9vct4wtYmTn7PepoWQQ5K4tp4oFOwVPVbX8jCvLTfq6fWQn2NnCpfmjpVjltdj2hy2V/T0ILQxr1EIrjcKOav4FUfZB+7PuB2cPpoKLF6aSY83CTzeCO+TRDVQ+TClHtaDaGoLuvErzteKHyeYh/2dnlm0ZEKPbewBlB4G0KO60S8lxXpcU8PA81J6Tg5h7O0VPX0XTJ+LOB/CtreWnlWXMcZVMMTN6MG2ju72ztRXeowdiM7FegKmCIxSYodgirz8bVhNdHpovRlgW+ald4jtHV+rB2BMeo6soCeHoXLE7lIyiaAnc+zih16PRSkU6XF7v/vxp67YGCs9fmd5drZH9OwCMJmjtXJn6l9Q51/1QKghwv4u6THODWw5jFqt3NLqYQC7Mkdv0qclhI7qj9Y40ROl/3MNU3o68EeiKV/nbJbe99jJLVhp9WzDchA/5REm4e8yOXb7qR+dgl+u86MI9IQBr7luGNKuWei5AnC1Ukn0OBXkoCFo8HZLtmsVjmO0xdGIcRob1ephcT5RQWp0VZq27KIB2i0cYKPhqDh1x4YcxzvX27JjPZY2MXtdPYg3tfScVDM1N/IJgCfzeaKnMUc2DMH+Oact2lXerGN2ok8l05xLqilBh3jH4fiEeZaa6ort4h0ETeVLRA26o+jv+2vrUb9i584CiF0zK9jsjkxzRFF69mj1HBZPK9/mQXpYRzT3Z/Q4Vcq7echQbIgOZw09zgH6puqQnqaT0UOrzMAUuIAMzZhRVo8kiGDFw5udXb9gz5lcRGvP3ZcvXz7R6WnPlRJOPZkIDdF9kPRID0QjqTc5o1pr6En00oyV7cN6PTF+B5BoYBB5PReGEG1huDmClfohD0wdQxIdiPnDB7n28+38qU5PK3k+qq5ERdNI66lp7aBIwYFiPY38dwi1/6wHN21wFsQOWq/HDzDpDk+U72eWsR8GBbD4rO1ZuHwi9FzM61HTvZ2qLl43TfWCa2ljSL1Vq5AdWZ00QruGyBNrHEfpoTPrjVadps9cUndIz+l9yCmA4/tiLgO8uBzCUnYQtwFO8eP1UxHApevHeXjnDfo5dY93H4cCjsdnsd0l/BB6bgk9n5Ue9BHTSlXXBnkiPbHJupgGZEdWp1ynFCQkG8k1R95GzbfkatKzb4E8BHiwkLzDjJ8/eo6Oni0yvAZ4uFg8+vIKAD6+WzwQ4afH6Of9I/71g5hXD1J8A/gWN18vkA+op/8Vwu9cz8tKfwjwVOmR1US1IeN6fGwaGT0kgVDVqcQV62lli3iuOPgnPY9+lWMmP0gDURhvYkpTFCqmoInx6MGLBy/uS+IeNSYeXGNfLdAiQqVaQcEV913/Y9/MdPqmtGLdo3wXOu10mPnNe9/M9AFA961zNwR4eD2PZ3CrCwC9u06Cx+kwPkOHdL839KnUZrVI/i2WZEcA+hzP1f0YpSmejWupe0p2bRCRYi7iIW8g0WJkfAOPQbUUZDQ/X8EzCwDY+EYeeLfwl/SUjfQ6o9FDbhIPi5/2QKFzB7qje1/D03HZx59jHkQCzzkPA0niOR/137+7qithwXmtacrcIjw0+emWj3jqnGZ5PFa2UQG+GM8gBHDHyTx7I4XPDMGEc2dwJ0R6hAdfeaTQudfzBL9iPHPEcUY7hXXecDxPAGAi8Rxjt9bbSm7U+UxaMrdyeAwakUHZyCHVyuMxCvDU1ubw8KEyK3F4VGT5zF4BKpz5M4RHeJgyOeiPAtbE9WI8MZr6Rk2P3vQjxmICANHVBE+VB5QllilbyS7KraV4ZLTVxc+6H8UjUzyPZ9ADspzpHSUO5iEWuuizaeLErttzCuQ/C+R7OTw+Fo/iqoABw1ncwBb7Es86vBVNmpqp5AZ11S7CY2Xx2MKrRBBt/tHksmvFePz4jliUyEYAemMZSkH8nAVUO356e9rpdKbj8bjD9fz2baxEeol83JcisIYZPAN8cpwvmu9YnfcvsL2bEs/FJ4hnPQ6SdvYCFeVKzpqzeMzMyaz6g9ZsWIV4Hj/ki1LWZgHQajAixPJ99xFwBYtfcxgM0jAIhv74Wnz76VPI4Bnhqxc07QT0n0QA21wP4AXv2nZsPwLUwkbYlkWzGA9tf6vJgYJkLcVTlf+Sx6PpRXg4g4cYO6TnIUBw33E+I5b2PRYNz1woUPe5k/UfxDUNQGhED9C3e1c07dQLYGKHF+8179pWUdl7IrpFuVGj3CI8tJej7a/kRFpfYt9j0g5TwdMswoOLtjvilkEaPOwOfR5H7tvEkUbtduguauE1TjIErvCtcn/oxQ1Mro/80Lv3sudForubtmzzAALvMI2uKbOLcit/qDCNxDn0lBOpuRSPnjRg6ASKTmZZPDHf1E7nzqKux75YuG45pE5OToEetJmG86xvDxieD/1+/wh+BrkUTGR393+6cePDJJcbNuUW4aEHSm0556T6MjwCK8kmPDygCE8p+c4vEsMj57uaREu6s1/DJROHssvO4ZEGQYdISzDhLYh8WYqnSqui6I2Kx1Dw/FkRHuoGeQmXRQcL+pZBePJfs2obFAshuzaW4dE21BSfqqp4UPW/hWdniocsROaKpZ6765RdZh4P8km9Rm+y0dJLcl0yl+LRmnq6DiAdwkOx9afw7KpUdrT2NRqHxFlBR9XFOHQmnG7+29SETFZImLDL9Hy5QVSXsOp6raab7KlsAcOI/mIz3WdX+ZJhsgbqafNKEza7XPdb8eyuVFqtA42G9g/rl+OpVPa0WgcbO7X/QpVflT2nW61G46z2n+ln8OxOLeW/1ffjOfkfWEp5PCtpKeXxrKSllMezkpZSHs9KWkpp7VhJSympLytqcASdLzRDAAAAAElFTkSuQmCC",
            mode: "heightFix"
          })])), _: 1
        }), o(s, {class: "list"}, {
          default: p((() => [(i(!0), a(n, null, l(r(y), ((e, t) => (i(), c(s, {
            class: "item",
            "data-num": t,
            onClick: t => function (e) {
              var t;
              switch (e.MENU_ID) {
                case"1":
                  u({url: "/pages/brandIntroduction/brandIntroduction"});
                  break;
                case"2":
                  u({url: "/pages/specificationList/specificationList"});
                  break;
                case"3": {
                  let e = "/pages/antiKnowledge/antiKnowledge";
                  (null == x ? void 0 : x.value) && (e += `?BRAND_CODE=${null == (t = null == E ? void 0 : E.info) ? void 0 : t.BRAND_CODE}`), u({url: e})
                }
                  break;
                case"4":
                  u({url: "/pages/brandActivity/brandActivity"});
                  break;
                case"5":
                  u({url: "/pages/announcement/announcementList"})
              }
            }(e),
            key: t
          }, {
            default: p((() => [o(S, {
              src: e.MENU_IMG,
              mode: "heightFix"
            }, null, 8, ["src"]), o(s, {class: "tit"}, {default: p((() => [g(v(e.MENU_TITLE), 1)])), _: 2}, 1024)])),
            _: 2
          }, 1032, ["data-num", "onClick"])))), 128))])), _: 1
        })])), _: 1
      }), d("", !0)], 64)) : d("", !0), o(T, {
        ref_key: "agePop",
        ref: P,
        class: "age-pop",
        type: "center",
        "mask-click": !1
      }, {
        default: p((() => [o(s, {class: "con"}, {
          default: p((() => [o(s, {class: ""}, {
            default: p((() => [g(" 本平台含有烟草信息 ")])),
            _: 1
          }), o(s, {class: ""}, {
            default: p((() => [g(" 未满18周岁不能浏览该平台 ")])),
            _: 1
          }), o(s, {class: "btns"}, {
            default: p((() => [o(s, {
              class: "y",
              onClick: t[0] || (t[0] = e => L("y"))
            }, {default: p((() => [g("确定")])), _: 1}), o(s, {
              class: "n",
              onClick: t[1] || (t[1] = e => L("n"))
            }, {default: p((() => [g("取消")])), _: 1})])), _: 1
          })])), _: 1
        })])), _: 1
      }, 512), o(T, {class: "video-pop", ref_key: "videoPop", ref: z, type: "center", "mask-click": !1}, {
        default: p((() => [o(M, {
          id: "myVideo",
          src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4",
          controls: ""
        }), o(s, {class: "close", onClick: I}, {
          default: p((() => [o(S, {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAOVBMVEUAAADc3Nzc3Nzf39/f39/d3d3d3d3e3t7d3d3f39/d3d3d3d3d3d3d3d3f39/d3d3d3d3f39/d3d1aFjzMAAAAEnRSTlMAYMBAEPCAoOAgsJDQzzB/cFCt/Am3AAADAklEQVR42uWb6W7jMAyEdV++knn/h11sgYWwaBtRomw67fc7yIxp6jAlqiGcfRzRGI8PvDHxeFinLsE9F+PxJd4sz5Nd7MuGBtuyq5Ow0YOEj3a+ej4SOkhHnvzw6GZiGKzBEMZOlBezkA1YGGYuHGBzcKKfMIE0/B4WTGIZm/U2TGMbmB21x0S8Fsg+Ti66gukU16G/4QQ2J6VfHTDTn+8gSz1/jYGUfnUgpE93UHAy8bV+wOmEl/MvLkC/GIAeF+C/H4wbLmEbWP8vSQOLy7DqKxIuIwmMwOZLyGDBHwkGl1KEMrBiZQMAGOEAALYzAN4UQ37BYUl9IbBNeU3fLEdXP+uoIYgt/b0ul9TFziX6ziAT/pTqQNPDmsmToKdvGXTH3B7IvzTkTYvuWV1TjVXXtKWJ+ipQ0zB2Thqapq8KdYPq0cJ9ckDQdwAtt2z/0qEJ+iqiyU7eielPDto/IdduNow54Otjq69qwAFPvybXE6MO+Pp41hQYcMDSr5OhwbADjn6dYYBxB1x9+JqDYw6Y+oBTFiwHTH1Y9QDPAU8fDxXAc8DTR+ivyeiZ+ogDHwR6oj7MgAHoefowCgPoafrwCtMcaIygMMuBBscA34HG7zIw7xW8ZxLOHIbyE5H4VCy+GIkvx+IbEvEtmfimVHxbLv9hEkQ/ze7wcSr+ea5WuQLFeo8SzY4mcaRIVdBkJ5bp/FCZLqOFp9bTylih0lADa9EgDJRqKQYstVi9DBSrCQYSuaqcxsr1nhzYTD9d0RPPNjK9rJtc/5HN7jvGtqXdCXQRBEqmXYazXQmLtBwFRIwxvv2jex1cih/dyh9eix/fq4xLyfe7wiF/iUX+Go/4RSbi9pTPet/LbOLX+eQvNMpf6VTu5ERcnRJyUPVFHFR9AvtpDtY6AAViUJ9fysHq3qfB4YwZKbxbk8vcwbBm2Uan8K6tXnNyMSgWuYBFye/e8HiDls8bNL3+JYe+tt/w8e5/UuPzv9bvFQ1WRus3v/k9PK9qwbeP8H/7fxht//8D78sYpOaMqMcAAAAASUVORK5CYII=",
            mode: "aspectFit"
          })])), _: 1
        })])), _: 1
      }, 512), o(S, {class: "bottom-img", src: "/es/zhonghua/assets/024-20e67c46.png", mode: "widthFix"})], 64)
    }
  }
}, [["__scopeId", "data-v-c6099700"]]);
export {Ue as default};
