!function t(e, i, n) { function r(o, a) { if (!i[o]) { if (!e[o]) { var l = "function" == typeof require && require; if (!a && l)return l(o, !0); if (s)return s(o, !0); var u = new Error("Cannot find module '" + o + "'"); throw u.code = "MODULE_NOT_FOUND", u } var h = i[o] = {exports: {}}; e[o][0].call(h.exports, function (t) { var i = e[o][1][t]; return r(i ? i : t) }, h, h.exports, t, e, i, n) } return i[o].exports } for (var s = "function" == typeof require && require, o = 0; o < n.length; o++)r(n[o]); return r }({ 1: [function (t, e, i) { (function (e) { var i = t("./../../bower_components/jquery/dist/jquery.js"); t("gsap"), t("gsap-scrollToPlugin"), t("TimelineLite"); var n = (t("scrollmagic"), t("./modules/_main-slider.js")), r = t("./modules/_category.js"), s = t("./modules/_canvas.js"), o = t("./modules/_modal.js"), a = t("./modules/_tabs.js"), l = t("./modules/_box.js"), u = t("./modules/_navbar.js"), h = t("./modules/_filter.js"), c = t("./modules/_back-button.js"), d = t("./modules/_scroll-scenes.js"), p = t("./modules/_form-submit.js"); e.app = {}, app.scrollDisabled = !1, app.openedPopup = null, app.toparea = {}, app.catalog = {}, app.catalog2 = {}, app.initMap = t("./modules/_map.js"), app.openedObjects = [], app.util = { toCamelCase: function (t) { return t.replace(/^([A-Z])|[\s-_](\w)/g, function (t, e, i, n) { return i ? i.toUpperCase() : e.toLowerCase() }) }, prevent: function () { var t = arguments[0]; return t.preventDefault(), !1 }, toggleScroll: function () { app.scrollDisabled ? (app.rootContainer.off("mousewheel DOMMouseScroll", app.util.prevent), app.scrollDisabled = !1) : (app.rootContainer.on("mousewheel DOMMouseScroll", app.util.prevent), app.scrollDisabled = !0) }, transformNumber: function (t) { return t.toString().length > 1 ? t : (parseInt(t, 10) + 100).toString().substr(1) }, getScrollBarWidth: function () { var t, e, n; return t = i("<div>").css({ visibility: "hidden", width: 100, overflow: "scroll" }).appendTo("body"), e = i("<div>").css({width: "100%"}).appendTo(t).outerWidth(), t.remove(), n = 100 - e, i("html").addClass("scrollbar-width-" + n), n }, getPlatform: function () { var t = function (t) { i("html").addClass(t) }; -1 != navigator.appVersion.indexOf("Win") ? t("windows-os") : -1 != navigator.appVersion.indexOf("Mac") ? t("mac-os") : -1 != navigator.appVersion.indexOf("X11") ? t("unix-os") : -1 != navigator.appVersion.indexOf("Linux") && t("linux-os") }, openPopup: function (t) { app.openedPopup = t, i(app.openedPopup).addClass("is-opened"), app.navbar.hidden(), app.mainSlider.pause() }, closePopup: function (t) { i(app.openedPopup).removeClass("is-opened"), app.navbar.visible(), app.mainSlider.play(), app.openedPopup = null }, scrollTo: function (t, e, i) { if (i || app.scrollDisabled !== !0) { var n, r, s, o, a; if (t.originalEvent.deltaY) n = Math.round(t.originalEvent.deltaY); else { if (!t.originalEvent.detail)return; n = 40 * t.originalEvent.detail } r = e || app.rootContainer, s = r.scrollTop(), o = s + n, a = .3, t.preventDefault(), TweenMax.to(r, a, { scrollTo: { y: o, autoKill: !0 }, ease: Power1.easeOut }) } } }, app.init = function () { app.rootContainer = i("#outer"), app.mainSlider = new n("#main-slider"), app.category = new r(".catalog-category", ".catalog-category__item"), app.category2 = new r(".category", ".category__item"), app.morph = new s("#morph"), app.morph2 = new s("#morph2"), app.modal = new o("#catalog", ".catalog__content"), app.modal2 = new o("#catalog2", ".capabilities-modal__content"), app.navbar = new u, app.backButton = new c(".header__center .btn"), app.scrollmagic = d(), app.mainSlider.init(), app.mainSlider.pause(), app.morph.init(), app.initBoxes(), app.initTabs(), app.initFilters(), app.initPopupEvents(), app.initPopupSlider(), app.navbar.init(), app.navbar.hidden(), app.category.toggleHidden(), app.category2.initSlider(1), app.morph2.init().initStandby("square"), Pace.on("done", function () { app.category.toggleHidden(500, 1e3), app.navbar.visible(500, 1e3), setTimeout(function () { i("body").removeClass("preload"), app.mainSlider.play() }, 2e3) }) }, app.initBoxes = function () { i.each(i(".js-box"), function (t, e) { (new l).init(e) }) }, app.initTabs = function () { i.each(i(".js-tabs-1"), function (t, e) { new a(e, {collapseOnScroll: !1}) }), i.each(i(".js-tabs-2"), function (t, e) { new a(e) }) }, app.initFilters = function () { i.each(i(".filter"), function (t, e) { new h(e) }) }, app.initPopupEvents = function () { i("[data-open-popup]").each(function (t, e) { var n = i(this); n.on("click", function (t) { t.preventDefault(); var e = n.data("open-popup"); app.util.openPopup(e) }) }), i(".popup").on("mousewheel", function (t) { t.stopPropagation(), app.util.scrollTo(t, i(this), !0) }), i(".popup .object__close").on("click", function () { app.util.closePopup() }) }, app.initPopupSlider = function () { i(".popup .object__slider").each(function (t, e) { var n = i(e); n.on("init", function (t, e) { var n = e.$dots.find("button"); i.each(n, function (t, e) { var n = i(e).text(); i(e).text(app.util.transformNumber(n)) }) }), n.slick({ accessibility: !1, autoplay: !1, draggable: !1, slide: ".object__slide", prevArrow: n.parent().find(".object__slider-prev"), nextArrow: n.parent().find(".object__slider-next"), dots: !0, swipe: !1, respondTo: "slider", arrows: !0, speed: 500 }) }) }, app.closeAllOpenedObjects = function () { app.openedObjects.length > 0 && (i.each(app.openedObjects, function (t, e) { e.close(!1) }), app.openedObjects = []) }, app.catalog.opened = !1, app.catalog.open = function (t, e, i) { app.catalog.opened || (app.util.toggleScroll(), app.modal.open(e, i), app.mainSlider.rollUp(), app.category.open(), app.morph.activate(t), app.navbar.hidden(), app.backButton.visible(1200), app.catalog.opened = !0) }, app.catalog.close = function () { app.catalog.opened && (app.util.toggleScroll(), app.modal.close(), app.mainSlider.rollDown(), app.morph.deactivate(), app.category.close(), app.navbar.visible(null, 800), app.backButton.hidden(), app.catalog.opened = !1, setTimeout(function () { app.closeAllOpenedObjects() }, 700)) }, app.catalog2.opened = !1, app.catalog2.open = function (t) { var e = t.data("morph-state"), i = t.data("content-index"), n = t.parents(".slick-center"), r = t.attr("href"), s = n.length ? 0 : app.category2.slickOptions.speed; app.catalog2.opened ? setTimeout(function () {
                        app.morph2.changeState(e, app.category2.direction), app.modal2.switchContent(i, r), setTimeout(function () {
                            app.closeAllOpenedObjects()
                        }, 500)
                    }, 0) : (app.util.toggleScroll(), n.length || (app.morph2.initStandby(e), t.addClass("is-hover"), setTimeout(function () {
                        t.removeClass("is-hover")
                    }, app.category2.slickOptions.speed)), setTimeout(function () {
                        app.category2.activate(), app.morph2.fromStandby(), app.modal2.open(i, r), app.navbar.hidden(), app.backButton.visible(1200), app.catalog2.opened = !0
                    }, s))
            }, app.catalog2.close = function () {
                app.catalog2.opened && (app.util.toggleScroll(), app.morph2.toStandby(), app.modal2.close(), setTimeout(function () {
                    app.category2.deactivate(), app.catalog2.opened = !1, app.navbar.visible(null, 800), app.backButton.hidden(), app.closeAllOpenedObjects()
                }, 700))
            }, app.toparea.transformed = !1, app.toparea.inProgress = !1, app.toparea.transform = function () {
                app.toparea.inProgress || (app.mainSlider.rollUp(), app.morph.moveDown(), app.toparea.transformed = !0)
            }, app.toparea.transformBack = function () {
                app.toparea.inProgress || (app.mainSlider.rollDown(), app.morph.moveBack(), app.toparea.transformed = !1)
            }, app.toparea.toggle = function () {
                app.toparea.transformed ? app.toparea.transformBack() : app.toparea.transform(), app.category.toggleHidden()
            }, app.initEvents = function () {
                var t = i("#header .logo"), e = i(".footer");
                i(".catalog-btn").on("click", function (t) {
                    t.preventDefault();
                    var e = i(this), n = e.data("morph-state"), r = e.data("content-index"), s = e.attr("href");
                    app.catalog.opened ? (setTimeout(function () {
                            app.morph.changeState(n, app.category.direction), app.modal.switchContent(r, s)
                        }, 0), setTimeout(function () {
                            app.closeAllOpenedObjects()
                        }, 1e3)) : app.catalog.open(n, r, s)
                }), t.on("click", function (t) {
                    t.preventDefault(), app.openedPopup && app.util.closePopup(), app.catalog.close(), app.catalog2.close()
                }), app.backButton.element.on("click", function (e) {
                    e.preventDefault(), t.trigger("click")
                }), i(".category .btn_category").on("click", function (t) {
                    t.preventDefault(), app.catalog2.open(i(this))
                }), app.rootContainer.on("mousewheel", function (t) {
                    app.util.scrollTo(t)
                }), e.on("mousewheel DOMMouseScroll", function (t) {
                    t.preventDefault(), app.util.scrollTo(t)
                }), i("form").each(function (t, e) {
                    p(e)
                })
            }, i(document).ready(function () {
                app.init(), app.initEvents(), app.util.getScrollBarWidth()
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./../../bower_components/jquery/dist/jquery.js": 2,
        "./modules/_back-button.js": 10,
        "./modules/_box.js": 11,
        "./modules/_canvas.js": 12,
        "./modules/_category.js": 13,
        "./modules/_filter.js": 14,
        "./modules/_form-submit.js": 15,
        "./modules/_main-slider.js": 17,
        "./modules/_map.js": 18,
        "./modules/_modal.js": 19,
        "./modules/_navbar.js": 20,
        "./modules/_scroll-scenes.js": 21,
        "./modules/_tabs.js": 22,
        TimelineLite: 5,
        gsap: 7,
        "gsap-scrollToPlugin": 8,
        scrollmagic: 9
    }],
    2: [function (t, e, i) {
        (function (t) {
            (function (t, e, i, n, r) {
                !function (e, i) {
                    "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function (t) {
                                if (!t.document)throw new Error("jQuery requires a window with a document");
                                return i(t)
                            } : i(e)
                }("undefined" != typeof window ? window : this, function (t, e) {
                    function i(t) {
                        var e = "length" in t && t.length, i = st.type(t);
                        return "function" === i || st.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
                    }

                    function r(t, e, i) {
                        if (st.isFunction(e))return st.grep(t, function (t, n) {
                            return !!e.call(t, n, t) !== i
                        });
                        if (e.nodeType)return st.grep(t, function (t) {
                            return t === e !== i
                        });
                        if ("string" == typeof e) {
                            if (pt.test(e))return st.filter(e, t, i);
                            e = st.filter(e, t)
                        }
                        return st.grep(t, function (t) {
                            return st.inArray(t, e) >= 0 !== i
                        })
                    }

                    function s(t, e) {
                        do t = t[e]; while (t && 1 !== t.nodeType);
                        return t
                    }

                    function o(t) {
                        var e = bt[t] = {};
                        return st.each(t.match(wt) || [], function (t, i) {
                            e[i] = !0
                        }), e
                    }

                    function a() {
                        gt.addEventListener ? (gt.removeEventListener("DOMContentLoaded", l, !1), t.removeEventListener("load", l, !1)) : (gt.detachEvent("onreadystatechange", l), t.detachEvent("onload", l))
                    }

                    function l() {
                        (gt.addEventListener || "load" === event.type || "complete" === gt.readyState) && (a(), st.ready())
                    }

                    function u(t, e, i) {
                        if (void 0 === i && 1 === t.nodeType) {
                            var n = "data-" + e.replace(kt, "-$1").toLowerCase();
                            if (i = t.getAttribute(n), "string" == typeof i) {
                                try {
                                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? st.parseJSON(i) : i
                                } catch (r) {
                                }
                                st.data(t, e, i)
                            } else i = void 0
                        }
                        return i
                    }

                    function h(t) {
                        var e;
                        for (e in t)if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
                        return !0
                    }

                    function c(t, e, i, n) {
                        if (st.acceptData(t)) {
                            var r, s, o = st.expando, a = t.nodeType, l = a ? st.cache : t, u = a ? t[o] : t[o] && o;
                            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e)return u || (u = a ? t[o] = G.pop() || st.guid++ : o), l[u] || (l[u] = a ? {} : {toJSON: st.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = st.extend(l[u], e) : l[u].data = st.extend(l[u].data, e)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[st.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[st.camelCase(e)])) : r = s, r
                        }
                    }

                    function d(t, e, i) {
                        if (st.acceptData(t)) {
                            var n, r, s = t.nodeType, o = s ? st.cache : t, a = s ? t[st.expando] : st.expando;
                            if (o[a]) {
                                if (e && (n = i ? o[a] : o[a].data)) {
                                    st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                                    for (; r--;)delete n[e[r]];
                                    if (i ? !h(n) : !st.isEmptyObject(n))return
                                }
                                (i || (delete o[a].data, h(o[a]))) && (s ? st.cleanData([t], !0) : nt.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
                            }
                        }
                    }

                    function p() {
                        return !0
                    }

                    function f() {
                        return !1
                    }

                    function g() {
                        try {
                            return gt.activeElement
                        } catch (t) {
                        }
                    }

                    function _(t) {
                        var e = Nt.split("|"), i = t.createDocumentFragment();
                        if (i.createElement)for (; e.length;)i.createElement(e.pop());
                        return i
                    }

                    function m(t, e) {
                        var i, n, r = 0, s = typeof t.getElementsByTagName !== St ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== St ? t.querySelectorAll(e || "*") : void 0;
                        if (!s)for (s = [], i = t.childNodes || t; null != (n = i[r]); r++)!e || st.nodeName(n, e) ? s.push(n) : st.merge(s, m(n, e));
                        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], s) : s
                    }

                    function v(t) {
                        Mt.test(t.type) && (t.defaultChecked = t.checked)
                    }

                    function y(t, e) {
                        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
                    }

                    function w(t) {
                        return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type, t
                    }

                    function b(t) {
                        var e = Yt.exec(t.type);
                        return e ? t.type = e[1] : t.removeAttribute("type"), t
                    }

                    function x(t, e) {
                        for (var i, n = 0; null != (i = t[n]); n++)st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
                    }

                    function T(t, e) {
                        if (1 === e.nodeType && st.hasData(t)) {
                            var i, n, r, s = st._data(t), o = st._data(e, s), a = s.events;
                            if (a) {
                                delete o.handle, o.events = {};
                                for (i in a)for (n = 0, r = a[i].length; r > n; n++)st.event.add(e, i, a[i][n])
                            }
                            o.data && (o.data = st.extend({}, o.data))
                        }
                    }

                    function S(t, e) {
                        var i, n, r;
                        if (1 === e.nodeType) {
                            if (i = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[st.expando]) {
                                r = st._data(e);
                                for (n in r.events)st.removeEvent(e, n, r.handle);
                                e.removeAttribute(st.expando)
                            }
                            "script" === i && e.text !== t.text ? (w(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
                        }
                    }

                    function C(e, i) {
                        var n, r = st(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : st.css(r[0], "display");
                        return r.detach(), s
                    }

                    function k(t) {
                        var e = gt, i = te[t];
                        return i || (i = C(t, e), "none" !== i && i || (Kt = (Kt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Kt[0].contentWindow || Kt[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Kt.detach()), te[t] = i), i
                    }

                    function P(t, e) {
                        return {
                            get: function () {
                                var i = t();
                                if (null != i)return i ? void delete this.get : (this.get = e).apply(this, arguments)
                            }
                        }
                    }

                    function A(t, e) {
                        if (e in t)return e;
                        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = pe.length; r--;)if (e = pe[r] + i, e in t)return e;
                        return n
                    }

                    function O(t, e) {
                        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)n = t[o], n.style && (s[o] = st._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ot(n) && (s[o] = st._data(n, "olddisplay", k(n.nodeName)))) : (r = Ot(n), (i && "none" !== i || !r) && st._data(n, "olddisplay", r ? i : st.css(n, "display"))));
                        for (o = 0; a > o; o++)n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
                        return t
                    }

                    function E(t, e, i) {
                        var n = ue.exec(e);
                        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
                    }

                    function M(t, e, i, n, r) {
                        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)"margin" === i && (o += st.css(t, i + At[s], !0, r)), n ? ("content" === i && (o -= st.css(t, "padding" + At[s], !0, r)), "margin" !== i && (o -= st.css(t, "border" + At[s] + "Width", !0, r))) : (o += st.css(t, "padding" + At[s], !0, r), "padding" !== i && (o += st.css(t, "border" + At[s] + "Width", !0, r)));
                        return o
                    }

                    function D(t, e, i) {
                        var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = ee(t), o = nt.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s);
                        if (0 >= r || null == r) {
                            if (r = ie(t, e, s), (0 > r || null == r) && (r = t.style[e]), re.test(r))return r;
                            n = o && (nt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                        }
                        return r + M(t, e, i || (o ? "border" : "content"), n, s) + "px"
                    }

                    function R(t, e, i, n, r) {
                        return new R.prototype.init(t, e, i, n, r)
                    }

                    function j() {
                        return setTimeout(function () {
                            fe = void 0
                        }), fe = st.now()
                    }

                    function z(t, e) {
                        var i, n = {height: t}, r = 0;
                        for (e = e ? 1 : 0; 4 > r; r += 2 - e)i = At[r], n["margin" + i] = n["padding" + i] = t;
                        return e && (n.opacity = n.width = t), n
                    }

                    function L(t, e, i) {
                        for (var n, r = (we[e] || []).concat(we["*"]), s = 0, o = r.length; o > s; s++)if (n = r[s].call(i, e, t))return n
                    }

                    function N(t, e, i) {
                        var n, r, s, o, a, l, u, h, c = this, d = {}, p = t.style, f = t.nodeType && Ot(t), g = st._data(t, "fxshow");
                        i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                            a.unqueued || l()
                        }), a.unqueued++, c.always(function () {
                            c.always(function () {
                                a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
                            })
                        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = st.css(t, "display"), h = "none" === u ? st._data(t, "olddisplay") || k(t.nodeName) : u, "inline" === h && "none" === st.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || c.always(function () {
                            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                        }));
                        for (n in e)if (r = e[n], _e.exec(r)) {
                            if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[n])continue;
                                f = !0
                            }
                            d[n] = g && g[n] || st.style(t, n)
                        } else u = void 0;
                        if (st.isEmptyObject(d)) "inline" === ("none" === u ? k(t.nodeName) : u) && (p.display = u); else {
                            g ? "hidden" in g && (f = g.hidden) : g = st._data(t, "fxshow", {}), s && (g.hidden = !f), f ? st(t).show() : c.done(function () {
                                    st(t).hide()
                                }), c.done(function () {
                                var e;
                                st._removeData(t, "fxshow");
                                for (e in d)st.style(t, e, d[e])
                            });
                            for (n in d)o = L(f ? g[n] : 0, n, c), n in g || (g[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
                        }
                    }

                    function I(t, e) {
                        var i, n, r, s, o;
                        for (i in t)if (n = st.camelCase(i), r = e[n], s = t[i], st.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = st.cssHooks[n], o && "expand" in o) {
                            s = o.expand(s), delete t[n];
                            for (i in s)i in t || (t[i] = s[i], e[i] = r)
                        } else e[n] = r
                    }

                    function F(t, e, i) {
                        var n, r, s = 0, o = ye.length, a = st.Deferred().always(function () {
                            delete l.elem
                        }), l = function () {
                            if (r)return !1;
                            for (var e = fe || j(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(s);
                            return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
                        }, u = a.promise({
                            elem: t,
                            props: st.extend({}, e),
                            opts: st.extend(!0, {specialEasing: {}}, i),
                            originalProperties: e,
                            originalOptions: i,
                            startTime: fe || j(),
                            duration: i.duration,
                            tweens: [],
                            createTween: function (e, i) {
                                var n = st.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                                return u.tweens.push(n), n
                            },
                            stop: function (e) {
                                var i = 0, n = e ? u.tweens.length : 0;
                                if (r)return this;
                                for (r = !0; n > i; i++)u.tweens[i].run(1);
                                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                            }
                        }), h = u.props;
                        for (I(h, u.opts.specialEasing); o > s; s++)if (n = ye[s].call(u, t, h, u.opts))return n;
                        return st.map(h, L, u), st.isFunction(u.opts.start) && u.opts.start.call(t, u), st.fx.timer(st.extend(l, {
                            elem: t,
                            anim: u,
                            queue: u.opts.queue
                        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
                    }

                    function $(t) {
                        return function (e, i) {
                            "string" != typeof e && (i = e, e = "*");
                            var n, r = 0, s = e.toLowerCase().match(wt) || [];
                            if (st.isFunction(i))for (; n = s[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                        }
                    }

                    function B(t, e, i, n) {
                        function r(a) {
                            var l;
                            return s[a] = !0, st.each(t[a] || [], function (t, a) {
                                var u = a(e, i, n);
                                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                            }), l
                        }

                        var s = {}, o = t === We;
                        return r(e.dataTypes[0]) || !s["*"] && r("*")
                    }

                    function q(t, e) {
                        var i, n, r = st.ajaxSettings.flatOptions || {};
                        for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                        return i && st.extend(!0, t, i), t
                    }

                    function H(t, e, i) {
                        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (r)for (o in a)if (a[o] && a[o].test(r)) {
                            l.unshift(o);
                            break
                        }
                        if (l[0] in i) s = l[0]; else {
                            for (o in i) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    s = o;
                                    break
                                }
                                n || (n = o)
                            }
                            s = s || n
                        }
                        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                    }

                    function W(t, e, i, n) {
                        var r, s, o, a, l, u = {}, h = t.dataTypes.slice();
                        if (h[1])for (o in t.converters)u[o.toLowerCase()] = t.converters[o];
                        for (s = h.shift(); s;)if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                            if (o = u[l + " " + s] || u["* " + s], !o)for (r in u)if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], h.unshift(a[1]));
                                break
                            }
                            if (o !== !0)if (o && t["throws"]) e = o(e); else try {
                                e = o(e)
                            } catch (c) {
                                return {state: "parsererror", error: o ? c : "No conversion from " + l + " to " + s}
                            }
                        }
                        return {state: "success", data: e}
                    }

                    function V(t, e, i, n) {
                        var r;
                        if (st.isArray(e)) st.each(e, function (e, r) {
                            i || Ye.test(t) ? n(t, r) : V(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
                        }); else if (i || "object" !== st.type(e)) n(t, e); else for (r in e)V(t + "[" + r + "]", e[r], i, n)
                    }

                    function U() {
                        try {
                            return new t.XMLHttpRequest
                        } catch (e) {
                        }
                    }

                    function X() {
                        try {
                            return new t.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (e) {
                        }
                    }

                    function Y(t) {
                        return st.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
                    }

                    var G = [], Z = G.slice, Q = G.concat, J = G.push, K = G.indexOf, tt = {}, et = tt.toString, it = tt.hasOwnProperty, nt = {}, rt = "1.11.3", st = function (t, e) {
                        return new st.fn.init(t, e)
                    }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, lt = /-([\da-z])/gi, ut = function (t, e) {
                        return e.toUpperCase()
                    };
                    st.fn = st.prototype = {
                        jquery: rt, constructor: st, selector: "", length: 0, toArray: function () {
                            return Z.call(this)
                        }, get: function (t) {
                            return null != t ? 0 > t ? this[t + this.length] : this[t] : Z.call(this)
                        }, pushStack: function (t) {
                            var e = st.merge(this.constructor(), t);
                            return e.prevObject = this, e.context = this.context, e
                        }, each: function (t, e) {
                            return st.each(this, t, e)
                        }, map: function (t) {
                            return this.pushStack(st.map(this, function (e, i) {
                                return t.call(e, i, e)
                            }))
                        }, slice: function () {
                            return this.pushStack(Z.apply(this, arguments))
                        }, first: function () {
                            return this.eq(0)
                        }, last: function () {
                            return this.eq(-1)
                        }, eq: function (t) {
                            var e = this.length, i = +t + (0 > t ? e : 0);
                            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                        }, end: function () {
                            return this.prevObject || this.constructor(null)
                        }, push: J, sort: G.sort, splice: G.splice
                    }, st.extend = st.fn.extend = function () {
                        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
                        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || st.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)if (null != (r = arguments[a]))for (n in r)t = o[n], i = r[n], o !== i && (u && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, s = t && st.isArray(t) ? t : []) : s = t && st.isPlainObject(t) ? t : {}, o[n] = st.extend(u, s, i)) : void 0 !== i && (o[n] = i));
                        return o
                    }, st.extend({
                        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function (t) {
                            throw new Error(t)
                        },
                        noop: function () {
                        },
                        isFunction: function (t) {
                            return "function" === st.type(t)
                        },
                        isArray: Array.isArray || function (t) {
                            return "array" === st.type(t)
                        },
                        isWindow: function (t) {
                            return null != t && t == t.window
                        },
                        isNumeric: function (t) {
                            return !st.isArray(t) && t - parseFloat(t) + 1 >= 0
                        },
                        isEmptyObject: function (t) {
                            var e;
                            for (e in t)return !1;
                            return !0
                        },
                        isPlainObject: function (t) {
                            var e;
                            if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t))return !1;
                            try {
                                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype, "isPrototypeOf"))return !1
                            } catch (i) {
                                return !1
                            }
                            if (nt.ownLast)for (e in t)return it.call(t, e);
                            for (e in t);
                            return void 0 === e || it.call(t, e)
                        },
                        type: function (t) {
                            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
                        },
                        globalEval: function (e) {
                            e && st.trim(e) && (t.execScript || function (e) {
                                t.eval.call(t, e)
                            })(e)
                        },
                        camelCase: function (t) {
                            return t.replace(at, "ms-").replace(lt, ut)
                        },
                        nodeName: function (t, e) {
                            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                        },
                        each: function (t, e, n) {
                            var r, s = 0, o = t.length, a = i(t);
                            if (n) {
                                if (a)for (; o > s && (r = e.apply(t[s], n), r !== !1); s++); else for (s in t)if (r = e.apply(t[s], n), r === !1)break
                            } else if (a)for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++); else for (s in t)if (r = e.call(t[s], s, t[s]), r === !1)break;
                            return t
                        },
                        trim: function (t) {
                            return null == t ? "" : (t + "").replace(ot, "")
                        },
                        makeArray: function (t, e) {
                            var n = e || [];
                            return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)), n
                        },
                        inArray: function (t, e, i) {
                            var n;
                            if (e) {
                                if (K)return K.call(e, t, i);
                                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
                            }
                            return -1
                        },
                        merge: function (t, e) {
                            for (var i = +e.length, n = 0, r = t.length; i > n;)t[r++] = e[n++];
                            if (i !== i)for (; void 0 !== e[n];)t[r++] = e[n++];
                            return t.length = r, t
                        },
                        grep: function (t, e, i) {
                            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++)n = !e(t[s], s), n !== a && r.push(t[s]);
                            return r
                        },
                        map: function (t, e, n) {
                            var r, s = 0, o = t.length, a = i(t), l = [];
                            if (a)for (; o > s; s++)r = e(t[s], s, n), null != r && l.push(r); else for (s in t)r = e(t[s], s, n), null != r && l.push(r);
                            return Q.apply([], l)
                        },
                        guid: 1,
                        proxy: function (t, e) {
                            var i, n, r;
                            return "string" == typeof e && (r = t[e], e = t, t = r), st.isFunction(t) ? (i = Z.call(arguments, 2), n = function () {
                                    return t.apply(e || this, i.concat(Z.call(arguments)))
                                }, n.guid = t.guid = t.guid || st.guid++, n) : void 0
                        },
                        now: function () {
                            return +new Date
                        },
                        support: nt
                    }), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                        tt["[object " + e + "]"] = e.toLowerCase()
                    });
                    var ht = function (t) {
                        function e(t, e, i, n) {
                            var r, s, o, a, l, u, c, p, f, g;
                            if ((e ? e.ownerDocument || e : $) !== D && M(e), e = e || D, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return i;
                            if (!n && j) {
                                if (11 !== a && (r = vt.exec(t)))if (o = r[1]) {
                                    if (9 === a) {
                                        if (s = e.getElementById(o), !s || !s.parentNode)return i;
                                        if (s.id === o)return i.push(s), i
                                    } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && I(e, s) && s.id === o)return i.push(s), i
                                } else {
                                    if (r[2])return J.apply(i, e.getElementsByTagName(t)), i;
                                    if ((o = r[3]) && b.getElementsByClassName)return J.apply(i, e.getElementsByClassName(o)), i
                                }
                                if (b.qsa && (!z || !z.test(t))) {
                                    if (p = c = F, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                        for (u = C(t), (c = e.getAttribute("id")) ? p = c.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)u[l] = p + d(u[l]);
                                        f = yt.test(t) && h(e.parentNode) || e, g = u.join(",")
                                    }
                                    if (g)try {
                                        return J.apply(i, f.querySelectorAll(g)), i
                                    } catch (_) {
                                    } finally {
                                        c || e.removeAttribute("id")
                                    }
                                }
                            }
                            return P(t.replace(lt, "$1"), e, i, n)
                        }

                        function i() {
                            function t(i, n) {
                                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                            }

                            var e = [];
                            return t
                        }

                        function n(t) {
                            return t[F] = !0, t
                        }

                        function r(t) {
                            var e = D.createElement("div");
                            try {
                                return !!t(e)
                            } catch (i) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }

                        function s(t, e) {
                            for (var i = t.split("|"), n = t.length; n--;)x.attrHandle[i[n]] = e
                        }

                        function o(t, e) {
                            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                            if (n)return n;
                            if (i)for (; i = i.nextSibling;)if (i === e)return -1;
                            return t ? 1 : -1
                        }

                        function a(t) {
                            return function (e) {
                                var i = e.nodeName.toLowerCase();
                                return "input" === i && e.type === t
                            }
                        }

                        function l(t) {
                            return function (e) {
                                var i = e.nodeName.toLowerCase();
                                return ("input" === i || "button" === i) && e.type === t
                            }
                        }

                        function u(t) {
                            return n(function (e) {
                                return e = +e, n(function (i, n) {
                                    for (var r, s = t([], i.length, e), o = s.length; o--;)i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                                })
                            })
                        }

                        function h(t) {
                            return t && "undefined" != typeof t.getElementsByTagName && t
                        }

                        function c() {
                        }

                        function d(t) {
                            for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
                            return n
                        }

                        function p(t, e, i) {
                            var n = e.dir, r = i && "parentNode" === n, s = q++;
                            return e.first ? function (e, i, s) {
                                    for (; e = e[n];)if (1 === e.nodeType || r)return t(e, i, s)
                                } : function (e, i, o) {
                                    var a, l, u = [B, s];
                                    if (o) {
                                        for (; e = e[n];)if ((1 === e.nodeType || r) && t(e, i, o))return !0
                                    } else for (; e = e[n];)if (1 === e.nodeType || r) {
                                        if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === B && a[1] === s)return u[2] = a[2];
                                        if (l[n] = u, u[2] = t(e, i, o))return !0
                                    }
                                }
                        }

                        function f(t) {
                            return t.length > 1 ? function (e, i, n) {
                                    for (var r = t.length; r--;)if (!t[r](e, i, n))return !1;
                                    return !0
                                } : t[0]
                        }

                        function g(t, i, n) {
                            for (var r = 0, s = i.length; s > r; r++)e(t, i[r], n);
                            return n
                        }

                        function _(t, e, i, n, r) {
                            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
                            return o
                        }

                        function m(t, e, i, r, s, o) {
                            return r && !r[F] && (r = m(r)), s && !s[F] && (s = m(s, o)), n(function (n, o, a, l) {
                                var u, h, c, d = [], p = [], f = o.length, m = n || g(e || "*", a.nodeType ? [a] : a, []), v = !t || !n && e ? m : _(m, d, t, a, l), y = i ? s || (n ? t : f || r) ? [] : o : v;
                                if (i && i(v, y, a, l), r)for (u = _(y, p), r(u, [], a, l), h = u.length; h--;)(c = u[h]) && (y[p[h]] = !(v[p[h]] = c));
                                if (n) {
                                    if (s || t) {
                                        if (s) {
                                            for (u = [], h = y.length; h--;)(c = y[h]) && u.push(v[h] = c);
                                            s(null, y = [], u, l)
                                        }
                                        for (h = y.length; h--;)(c = y[h]) && (u = s ? tt(n, c) : d[h]) > -1 && (n[u] = !(o[u] = c))
                                    }
                                } else y = _(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
                            })
                        }

                        function v(t) {
                            for (var e, i, n, r = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                                return t === e
                            }, o, !0), u = p(function (t) {
                                return tt(e, t) > -1
                            }, o, !0), h = [function (t, i, n) {
                                var r = !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                                return e = null, r
                            }]; r > a; a++)if (i = x.relative[t[a].type]) h = [p(f(h), i)]; else {
                                if (i = x.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                                    for (n = ++a; r > n && !x.relative[t[n].type]; n++);
                                    return m(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(lt, "$1"), i, n > a && v(t.slice(a, n)), r > n && v(t = t.slice(n)), r > n && d(t))
                                }
                                h.push(i)
                            }
                            return f(h)
                        }

                        function y(t, i) {
                            var r = i.length > 0, s = t.length > 0, o = function (n, o, a, l, u) {
                                var h, c, d, p = 0, f = "0", g = n && [], m = [], v = A, y = n || s && x.find.TAG("*", u), w = B += null == v ? 1 : Math.random() || .1, b = y.length;
                                for (u && (A = o !== D && o); f !== b && null != (h = y[f]); f++) {
                                    if (s && h) {
                                        for (c = 0; d = t[c++];)if (d(h, o, a)) {
                                            l.push(h);
                                            break
                                        }
                                        u && (B = w)
                                    }
                                    r && ((h = !d && h) && p--, n && g.push(h))
                                }
                                if (p += f, r && f !== p) {
                                    for (c = 0; d = i[c++];)d(g, m, o, a);
                                    if (n) {
                                        if (p > 0)for (; f--;)g[f] || m[f] || (m[f] = Z.call(l));
                                        m = _(m)
                                    }
                                    J.apply(l, m), u && !n && m.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                                }
                                return u && (B = w, A = v), g
                            };
                            return r ? n(o) : o
                        }

                        var w, b, x, T, S, C, k, P, A, O, E, M, D, R, j, z, L, N, I, F = "sizzle" + 1 * new Date, $ = t.document, B = 0, q = 0, H = i(), W = i(), V = i(), U = function (t, e) {
                            return t === e && (E = !0), 0
                        }, X = 1 << 31, Y = {}.hasOwnProperty, G = [], Z = G.pop, Q = G.push, J = G.push, K = G.slice, tt = function (t, e) {
                            for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
                            return -1
                        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = nt.replace("w", "w#"), st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]", ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)", at = new RegExp(it + "+", "g"), lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), ut = new RegExp("^" + it + "*," + it + "*"), ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), dt = new RegExp(ot), pt = new RegExp("^" + rt + "$"), ft = {
                            ID: new RegExp("^#(" + nt + ")"),
                            CLASS: new RegExp("^\\.(" + nt + ")"),
                            TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                            ATTR: new RegExp("^" + st),
                            PSEUDO: new RegExp("^" + ot),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + et + ")$", "i"),
                            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                        }, gt = /^(?:input|select|textarea|button)$/i, _t = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, wt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), xt = function (t, e, i) {
                            var n = "0x" + e - 65536;
                            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                        }, Tt = function () {
                            M()
                        };
                        try {
                            J.apply(G = K.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
                        } catch (St) {
                            J = {
                                apply: G.length ? function (t, e) {
                                        Q.apply(t, K.call(e))
                                    } : function (t, e) {
                                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                                        t.length = i - 1
                                    }
                            }
                        }
                        b = e.support = {}, S = e.isXML = function (t) {
                            var e = t && (t.ownerDocument || t).documentElement;
                            return e ? "HTML" !== e.nodeName : !1
                        }, M = e.setDocument = function (t) {
                            var e, i, n = t ? t.ownerDocument || t : $;
                            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), j = !S(n), b.attributes = r(function (t) {
                                    return t.className = "i", !t.getAttribute("className")
                                }), b.getElementsByTagName = r(function (t) {
                                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                                }), b.getElementsByClassName = mt.test(n.getElementsByClassName), b.getById = r(function (t) {
                                    return R.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                                }), b.getById ? (x.find.ID = function (t, e) {
                                        if ("undefined" != typeof e.getElementById && j) {
                                            var i = e.getElementById(t);
                                            return i && i.parentNode ? [i] : []
                                        }
                                    }, x.filter.ID = function (t) {
                                        var e = t.replace(bt, xt);
                                        return function (t) {
                                            return t.getAttribute("id") === e
                                        }
                                    }) : (delete x.find.ID, x.filter.ID = function (t) {
                                        var e = t.replace(bt, xt);
                                        return function (t) {
                                            var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                            return i && i.value === e
                                        }
                                    }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                                    } : function (t, e) {
                                        var i, n = [], r = 0, s = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; i = s[r++];)1 === i.nodeType && n.push(i);
                                            return n
                                        }
                                        return s
                                    }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                                        return j ? e.getElementsByClassName(t) : void 0
                                    }, L = [], z = [], (b.qsa = mt.test(n.querySelectorAll)) && (r(function (t) {
                                    R.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || z.push(".#.+[+~]")
                                }), r(function (t) {
                                    var e = n.createElement("input");
                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
                                })), (b.matchesSelector = mt.test(N = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function (t) {
                                    b.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), L.push("!=", ot)
                                }), z = z.length && new RegExp(z.join("|")), L = L.length && new RegExp(L.join("|")), e = mt.test(R.compareDocumentPosition), I = e || mt.test(R.contains) ? function (t, e) {
                                        var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                                    } : function (t, e) {
                                        if (e)for (; e = e.parentNode;)if (e === t)return !0;
                                        return !1
                                    }, U = e ? function (t, e) {
                                        if (t === e)return E = !0, 0;
                                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === $ && I($, t) ? -1 : e === n || e.ownerDocument === $ && I($, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & i ? -1 : 1)
                                    } : function (t, e) {
                                        if (t === e)return E = !0, 0;
                                        var i, r = 0, s = t.parentNode, a = e.parentNode, l = [t], u = [e];
                                        if (!s || !a)return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                                        if (s === a)return o(t, e);
                                        for (i = t; i = i.parentNode;)l.unshift(i);
                                        for (i = e; i = i.parentNode;)u.unshift(i);
                                        for (; l[r] === u[r];)r++;
                                        return r ? o(l[r], u[r]) : l[r] === $ ? -1 : u[r] === $ ? 1 : 0
                                    }, n) : D
                        }, e.matches = function (t, i) {
                            return e(t, null, null, i)
                        }, e.matchesSelector = function (t, i) {
                            if ((t.ownerDocument || t) !== D && M(t), i = i.replace(ct, "='$1']"), !(!b.matchesSelector || !j || L && L.test(i) || z && z.test(i)))try {
                                var n = N.call(t, i);
                                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
                            } catch (r) {
                            }
                            return e(i, D, null, [t]).length > 0
                        }, e.contains = function (t, e) {
                            return (t.ownerDocument || t) !== D && M(t), I(t, e)
                        }, e.attr = function (t, e) {
                            (t.ownerDocument || t) !== D && M(t);
                            var i = x.attrHandle[e.toLowerCase()], n = i && Y.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !j) : void 0;
                            return void 0 !== n ? n : b.attributes || !j ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                        }, e.error = function (t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, e.uniqueSort = function (t) {
                            var e, i = [], n = 0, r = 0;
                            if (E = !b.detectDuplicates, O = !b.sortStable && t.slice(0), t.sort(U), E) {
                                for (; e = t[r++];)e === t[r] && (n = i.push(r));
                                for (; n--;)t.splice(i[n], 1)
                            }
                            return O = null, t
                        }, T = e.getText = function (t) {
                            var e, i = "", n = 0, r = t.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof t.textContent)return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling)i += T(t)
                                } else if (3 === r || 4 === r)return t.nodeValue
                            } else for (; e = t[n++];)i += T(e);
                            return i
                        }, x = e.selectors = {
                            cacheLength: 50,
                            createPseudo: n,
                            match: ft,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {dir: "parentNode", first: !0},
                                " ": {dir: "parentNode"},
                                "+": {dir: "previousSibling", first: !0},
                                "~": {dir: "previousSibling"}
                            },
                            preFilter: {
                                ATTR: function (t) {
                                    return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                }, CHILD: function (t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                                }, PSEUDO: function (t) {
                                    var e, i = !t[6] && t[2];
                                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (t) {
                                    var e = t.replace(bt, xt).toLowerCase();
                                    return "*" === t ? function () {
                                            return !0
                                        } : function (t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                }, CLASS: function (t) {
                                    var e = H[t + " "];
                                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function (t) {
                                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                        })
                                }, ATTR: function (t, i, n) {
                                    return function (r) {
                                        var s = e.attr(r, t);
                                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                                    }
                                }, CHILD: function (t, e, i, n, r) {
                                    var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                                    return 1 === n && 0 === r ? function (t) {
                                            return !!t.parentNode
                                        } : function (e, i, l) {
                                            var u, h, c, d, p, f, g = s !== o ? "nextSibling" : "previousSibling", _ = e.parentNode, m = a && e.nodeName.toLowerCase(), v = !l && !a;
                                            if (_) {
                                                if (s) {
                                                    for (; g;) {
                                                        for (c = e; c = c[g];)if (a ? c.nodeName.toLowerCase() === m : 1 === c.nodeType)return !1;
                                                        f = g = "only" === t && !f && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (f = [o ? _.firstChild : _.lastChild], o && v) {
                                                    for (h = _[F] || (_[F] = {}), u = h[t] || [], p = u[0] === B && u[1], d = u[0] === B && u[2], c = p && _.childNodes[p]; c = ++p && c && c[g] || (d = p = 0) || f.pop();)if (1 === c.nodeType && ++d && c === e) {
                                                        h[t] = [B, p, d];
                                                        break
                                                    }
                                                } else if (v && (u = (e[F] || (e[F] = {}))[t]) && u[0] === B) d = u[1]; else for (; (c = ++p && c && c[g] || (d = p = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== m : 1 !== c.nodeType) || !++d || (v && ((c[F] || (c[F] = {}))[t] = [B, d]), c !== e)););
                                                return d -= r, d === n || d % n === 0 && d / n >= 0
                                            }
                                        }
                                }, PSEUDO: function (t, i) {
                                    var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                    return s[F] ? s(i) : s.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                                                    for (var n, r = s(t, i), o = r.length; o--;)n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                                                }) : function (t) {
                                                    return s(t, 0, r)
                                                }) : s
                                }
                            },
                            pseudos: {
                                not: n(function (t) {
                                    var e = [], i = [], r = k(t.replace(lt, "$1"));
                                    return r[F] ? n(function (t, e, i, n) {
                                            for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                                        }) : function (t, n, s) {
                                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                                        }
                                }), has: n(function (t) {
                                    return function (i) {
                                        return e(t, i).length > 0
                                    }
                                }), contains: n(function (t) {
                                    return t = t.replace(bt, xt), function (e) {
                                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                                    }
                                }), lang: n(function (t) {
                                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(), function (e) {
                                        var i;
                                        do if (i = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                                }), target: function (e) {
                                    var i = t.location && t.location.hash;
                                    return i && i.slice(1) === e.id
                                }, root: function (t) {
                                    return t === R
                                }, focus: function (t) {
                                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                }, enabled: function (t) {
                                    return t.disabled === !1
                                }, disabled: function (t) {
                                    return t.disabled === !0
                                }, checked: function (t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                                }, selected: function (t) {
                                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                                }, empty: function (t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                                    return !0
                                }, parent: function (t) {
                                    return !x.pseudos.empty(t)
                                }, header: function (t) {
                                    return _t.test(t.nodeName)
                                }, input: function (t) {
                                    return gt.test(t.nodeName)
                                }, button: function (t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                }, text: function (t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                }, first: u(function () {
                                    return [0]
                                }), last: u(function (t, e) {
                                    return [e - 1]
                                }), eq: u(function (t, e, i) {
                                    return [0 > i ? i + e : i]
                                }), even: u(function (t, e) {
                                    for (var i = 0; e > i; i += 2)t.push(i);
                                    return t
                                }), odd: u(function (t, e) {
                                    for (var i = 1; e > i; i += 2)t.push(i);
                                    return t
                                }), lt: u(function (t, e, i) {
                                    for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                                    return t
                                }), gt: u(function (t, e, i) {
                                    for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                                    return t
                                })
                            }
                        }, x.pseudos.nth = x.pseudos.eq;
                        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})x.pseudos[w] = a(w);
                        for (w in{submit: !0, reset: !0})x.pseudos[w] = l(w);
                        return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = e.tokenize = function (t, i) {
                            var n, r, s, o, a, l, u, h = W[t + " "];
                            if (h)return i ? 0 : h.slice(0);
                            for (a = t, l = [], u = x.preFilter; a;) {
                                (!n || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ht.exec(a)) && (n = r.shift(), s.push({
                                    value: n,
                                    type: r[0].replace(lt, " ")
                                }), a = a.slice(n.length));
                                for (o in x.filter)!(r = ft[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                                    value: n,
                                    type: o,
                                    matches: r
                                }), a = a.slice(n.length));
                                if (!n)break
                            }
                            return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
                        }, k = e.compile = function (t, e) {
                            var i, n = [], r = [], s = V[t + " "];
                            if (!s) {
                                for (e || (e = C(t)), i = e.length; i--;)s = v(e[i]), s[F] ? n.push(s) : r.push(s);
                                s = V(t, y(r, n)), s.selector = t
                            }
                            return s
                        }, P = e.select = function (t, e, i, n) {
                            var r, s, o, a, l, u = "function" == typeof t && t, c = !n && C(t = u.selector || t);
                            if (i = i || [], 1 === c.length) {
                                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && b.getById && 9 === e.nodeType && j && x.relative[s[1].type]) {
                                    if (e = (x.find.ID(o.matches[0].replace(bt, xt), e) || [])[0], !e)return i;
                                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                                }
                                for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)if ((l = x.find[a]) && (n = l(o.matches[0].replace(bt, xt), yt.test(s[0].type) && h(e.parentNode) || e))) {
                                    if (s.splice(r, 1), t = n.length && d(s), !t)return J.apply(i, n), i;
                                    break
                                }
                            }
                            return (u || k(t, c))(n, e, !j, i, yt.test(t) && h(e.parentNode) || e), i
                        }, b.sortStable = F.split("").sort(U).join("") === F, b.detectDuplicates = !!E, M(), b.sortDetached = r(function (t) {
                            return 1 & t.compareDocumentPosition(D.createElement("div"))
                        }), r(function (t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        }) || s("type|href|height|width", function (t, e, i) {
                            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        }), b.attributes && r(function (t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        }) || s("value", function (t, e, i) {
                            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                        }), r(function (t) {
                            return null == t.getAttribute("disabled")
                        }) || s(et, function (t, e, i) {
                            var n;
                            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                        }), e
                    }(t);
                    st.find = ht, st.expr = ht.selectors, st.expr[":"] = st.expr.pseudos, st.unique = ht.uniqueSort, st.text = ht.getText, st.isXMLDoc = ht.isXML, st.contains = ht.contains;
                    var ct = st.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
                    st.filter = function (t, e, i) {
                        var n = e[0];
                        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function (t) {
                                return 1 === t.nodeType
                            }))
                    }, st.fn.extend({
                        find: function (t) {
                            var e, i = [], n = this, r = n.length;
                            if ("string" != typeof t)return this.pushStack(st(t).filter(function () {
                                for (e = 0; r > e; e++)if (st.contains(n[e], this))return !0
                            }));
                            for (e = 0; r > e; e++)st.find(t, n[e], i);
                            return i = this.pushStack(r > 1 ? st.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
                        }, filter: function (t) {
                            return this.pushStack(r(this, t || [], !1))
                        }, not: function (t) {
                            return this.pushStack(r(this, t || [], !0))
                        }, is: function (t) {
                            return !!r(this, "string" == typeof t && ct.test(t) ? st(t) : t || [], !1).length
                        }
                    });
                    var ft, gt = t.document, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = st.fn.init = function (t, e) {
                        var i, n;
                        if (!t)return this;
                        if ("string" == typeof t) {
                            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : _t.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
                            if (i[1]) {
                                if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : gt, !0)), dt.test(i[1]) && st.isPlainObject(e))for (i in e)st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                                return this
                            }
                            if (n = gt.getElementById(i[2]), n && n.parentNode) {
                                if (n.id !== i[2])return ft.find(t);
                                this.length = 1, this[0] = n
                            }
                            return this.context = gt, this.selector = t, this
                        }
                        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
                    };
                    mt.prototype = st.fn, ft = st(gt);
                    var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
                    st.extend({
                        dir: function (t, e, i) {
                            for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !st(r).is(i));)1 === r.nodeType && n.push(r), r = r[e];
                            return n
                        }, sibling: function (t, e) {
                            for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
                            return i
                        }
                    }), st.fn.extend({
                        has: function (t) {
                            var e, i = st(t, this), n = i.length;
                            return this.filter(function () {
                                for (e = 0; n > e; e++)if (st.contains(this, i[e]))return !0
                            })
                        }, closest: function (t, e) {
                            for (var i, n = 0, r = this.length, s = [], o = ct.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; r > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                                s.push(i);
                                break
                            }
                            return this.pushStack(s.length > 1 ? st.unique(s) : s)
                        }, index: function (t) {
                            return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        }, add: function (t, e) {
                            return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
                        }, addBack: function (t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), st.each({
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        }, parents: function (t) {
                            return st.dir(t, "parentNode")
                        }, parentsUntil: function (t, e, i) {
                            return st.dir(t, "parentNode", i)
                        }, next: function (t) {
                            return s(t, "nextSibling")
                        }, prev: function (t) {
                            return s(t, "previousSibling")
                        }, nextAll: function (t) {
                            return st.dir(t, "nextSibling")
                        }, prevAll: function (t) {
                            return st.dir(t, "previousSibling")
                        }, nextUntil: function (t, e, i) {
                            return st.dir(t, "nextSibling", i)
                        }, prevUntil: function (t, e, i) {
                            return st.dir(t, "previousSibling", i)
                        }, siblings: function (t) {
                            return st.sibling((t.parentNode || {}).firstChild, t)
                        }, children: function (t) {
                            return st.sibling(t.firstChild)
                        }, contents: function (t) {
                            return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : st.merge([], t.childNodes)
                        }
                    }, function (t, e) {
                        st.fn[t] = function (i, n) {
                            var r = st.map(this, e, i);
                            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = st.filter(n, r)), this.length > 1 && (yt[t] || (r = st.unique(r)), vt.test(t) && (r = r.reverse())), this.pushStack(r)
                        }
                    });
                    var wt = /\S+/g, bt = {};
                    st.Callbacks = function (t) {
                        t = "string" == typeof t ? bt[t] || o(t) : st.extend({}, t);
                        var e, i, n, r, s, a, l = [], u = !t.once && [], h = function (o) {
                            for (i = t.memory && o, n = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++)if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                                i = !1;
                                break
                            }
                            e = !1, l && (u ? u.length && h(u.shift()) : i ? l = [] : c.disable())
                        }, c = {
                            add: function () {
                                if (l) {
                                    var n = l.length;
                                    !function s(e) {
                                        st.each(e, function (e, i) {
                                            var n = st.type(i);
                                            "function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                                        })
                                    }(arguments), e ? r = l.length : i && (a = n, h(i))
                                }
                                return this
                            }, remove: function () {
                                return l && st.each(arguments, function (t, i) {
                                    for (var n; (n = st.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (r >= n && r--, s >= n && s--)
                                }), this
                            }, has: function (t) {
                                return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
                            }, empty: function () {
                                return l = [], r = 0, this
                            }, disable: function () {
                                return l = u = i = void 0, this
                            }, disabled: function () {
                                return !l
                            }, lock: function () {
                                return u = void 0, i || c.disable(), this
                            }, locked: function () {
                                return !u
                            }, fireWith: function (t, i) {
                                return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : h(i)), this
                            }, fire: function () {
                                return c.fireWith(this, arguments), this
                            }, fired: function () {
                                return !!n
                            }
                        };
                        return c
                    }, st.extend({
                        Deferred: function (t) {
                            var e = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]], i = "pending", n = {
                                state: function () {
                                    return i
                                }, always: function () {
                                    return r.done(arguments).fail(arguments), this
                                }, then: function () {
                                    var t = arguments;
                                    return st.Deferred(function (i) {
                                        st.each(e, function (e, s) {
                                            var o = st.isFunction(t[e]) && t[e];
                                            r[s[1]](function () {
                                                var t = o && o.apply(this, arguments);
                                                t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                            })
                                        }), t = null
                                    }).promise()
                                }, promise: function (t) {
                                    return null != t ? st.extend(t, n) : n
                                }
                            }, r = {};
                            return n.pipe = n.then, st.each(e, function (t, s) {
                                var o = s[2], a = s[3];
                                n[s[1]] = o.add, a && o.add(function () {
                                    i = a
                                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                                }, r[s[0] + "With"] = o.fireWith
                            }), n.promise(r), t && t.call(r, r), r
                        }, when: function (t) {
                            var e, i, n, r = 0, s = Z.call(arguments), o = s.length, a = 1 !== o || t && st.isFunction(t.promise) ? o : 0, l = 1 === a ? t : st.Deferred(), u = function (t, i, n) {
                                return function (r) {
                                    i[t] = this, n[t] = arguments.length > 1 ? Z.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                                }
                            };
                            if (o > 1)for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++)s[r] && st.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
                            return a || l.resolveWith(n, s), l.promise()
                        }
                    });
                    var xt;
                    st.fn.ready = function (t) {
                        return st.ready.promise().done(t), this
                    }, st.extend({
                        isReady: !1, readyWait: 1, holdReady: function (t) {
                            t ? st.readyWait++ : st.ready(!0)
                        }, ready: function (t) {
                            if (t === !0 ? !--st.readyWait : !st.isReady) {
                                if (!gt.body)return setTimeout(st.ready);
                                st.isReady = !0, t !== !0 && --st.readyWait > 0 || (xt.resolveWith(gt, [st]), st.fn.triggerHandler && (st(gt).triggerHandler("ready"), st(gt).off("ready")))
                            }
                        }
                    }), st.ready.promise = function (e) {
                        if (!xt)if (xt = st.Deferred(), "complete" === gt.readyState) setTimeout(st.ready); else if (gt.addEventListener) gt.addEventListener("DOMContentLoaded", l, !1), t.addEventListener("load", l, !1); else {
                            gt.attachEvent("onreadystatechange", l), t.attachEvent("onload", l);
                            var i = !1;
                            try {
                                i = null == t.frameElement && gt.documentElement
                            } catch (n) {
                            }
                            i && i.doScroll && !function r() {
                                if (!st.isReady) {
                                    try {
                                        i.doScroll("left")
                                    } catch (t) {
                                        return setTimeout(r, 50)
                                    }
                                    a(), st.ready()
                                }
                            }()
                        }
                        return xt.promise(e)
                    };
                    var Tt, St = "undefined";
                    for (Tt in st(nt))break;
                    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, st(function () {
                        var t, e, i, n;
                        i = gt.getElementsByTagName("body")[0], i && i.style && (e = gt.createElement("div"), n = gt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== St && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
                    }), function () {
                        var t = gt.createElement("div");
                        if (null == nt.deleteExpando) {
                            nt.deleteExpando = !0;
                            try {
                                delete t.test
                            } catch (e) {
                                nt.deleteExpando = !1
                            }
                        }
                        t = null
                    }(), st.acceptData = function (t) {
                        var e = st.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
                        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
                    };
                    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kt = /([A-Z])/g;
                    st.extend({
                        cache: {},
                        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
                        hasData: function (t) {
                            return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando], !!t && !h(t)
                        },
                        data: function (t, e, i) {
                            return c(t, e, i)
                        },
                        removeData: function (t, e) {
                            return d(t, e)
                        },
                        _data: function (t, e, i) {
                            return c(t, e, i, !0)
                        },
                        _removeData: function (t, e) {
                            return d(t, e, !0)
                        }
                    }), st.fn.extend({
                        data: function (t, e) {
                            var i, n, r, s = this[0], o = s && s.attributes;
                            if (void 0 === t) {
                                if (this.length && (r = st.data(s), 1 === s.nodeType && !st._data(s, "parsedAttrs"))) {
                                    for (i = o.length; i--;)o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), u(s, n, r[n])));
                                    st._data(s, "parsedAttrs", !0)
                                }
                                return r
                            }
                            return "object" == typeof t ? this.each(function () {
                                    st.data(this, t)
                                }) : arguments.length > 1 ? this.each(function () {
                                        st.data(this, t, e)
                                    }) : s ? u(s, t, st.data(s, t)) : void 0
                        }, removeData: function (t) {
                            return this.each(function () {
                                st.removeData(this, t)
                            })
                        }
                    }), st.extend({
                        queue: function (t, e, i) {
                            var n;
                            return t ? (e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
                        }, dequeue: function (t, e) {
                            e = e || "fx";
                            var i = st.queue(t, e), n = i.length, r = i.shift(), s = st._queueHooks(t, e), o = function () {
                                st.dequeue(t, e)
                            };
                            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
                        }, _queueHooks: function (t, e) {
                            var i = e + "queueHooks";
                            return st._data(t, i) || st._data(t, i, {
                                    empty: st.Callbacks("once memory").add(function () {
                                        st._removeData(t, e + "queue"), st._removeData(t, i)
                                    })
                                })
                        }
                    }), st.fn.extend({
                        queue: function (t, e) {
                            var i = 2;
                            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                                        var i = st.queue(this, t, e);
                                        st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
                                    })
                        }, dequeue: function (t) {
                            return this.each(function () {
                                st.dequeue(this, t)
                            })
                        }, clearQueue: function (t) {
                            return this.queue(t || "fx", [])
                        }, promise: function (t, e) {
                            var i, n = 1, r = st.Deferred(), s = this, o = this.length, a = function () {
                                --n || r.resolveWith(s, [s])
                            };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)i = st._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                            return a(), r.promise(e)
                        }
                    });
                    var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, At = ["Top", "Right", "Bottom", "Left"], Ot = function (t, e) {
                        return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
                    }, Et = st.access = function (t, e, i, n, r, s, o) {
                        var a = 0, l = t.length, u = null == i;
                        if ("object" === st.type(i)) {
                            r = !0;
                            for (a in i)st.access(t, e, a, i[a], !0, s, o)
                        } else if (void 0 !== n && (r = !0, st.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
                                    return u.call(st(t), i)
                                })), e))for (; l > a; a++)e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
                    }, Mt = /^(?:checkbox|radio)$/i;
                    !function () {
                        var t = gt.createElement("input"), e = gt.createElement("div"), i = gt.createDocumentFragment();
                        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== gt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                                nt.noCloneEvent = !1
                            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                            nt.deleteExpando = !0;
                            try {
                                delete e.test
                            } catch (n) {
                                nt.deleteExpando = !1
                            }
                        }
                    }(), function () {
                        var e, i, n = gt.createElement("div");
                        for (e in{
                            submit: !0,
                            change: !0,
                            focusin: !0
                        })i = "on" + e, (nt[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), nt[e + "Bubbles"] = n.attributes[i].expando === !1);
                        n = null
                    }();
                    var Dt = /^(?:input|select|textarea)$/i, Rt = /^key/, jt = /^(?:mouse|pointer|contextmenu)|click/, zt = /^(?:focusinfocus|focusoutblur)$/, Lt = /^([^.]*)(?:\.(.+)|)$/;
                    st.event = {
                        global: {},
                        add: function (t, e, i, n, r) {
                            var s, o, a, l, u, h, c, d, p, f, g, _ = st._data(t);
                            if (_) {
                                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = st.guid++), (o = _.events) || (o = _.events = {}), (h = _.handle) || (h = _.handle = function (t) {
                                    return typeof st === St || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(h.elem, arguments)
                                }, h.elem = t), e = (e || "").match(wt) || [""], a = e.length; a--;)s = Lt.exec(e[a]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (u = st.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = st.event.special[p] || {}, c = st.extend({
                                    type: p,
                                    origType: g,
                                    data: n,
                                    handler: i,
                                    guid: i.guid,
                                    selector: r,
                                    needsContext: r && st.expr.match.needsContext.test(r),
                                    namespace: f.join(".")
                                }, l), (d = o[p]) || (d = o[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, h) !== !1 || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), st.event.global[p] = !0);
                                t = null
                            }
                        },
                        remove: function (t, e, i, n, r) {
                            var s, o, a, l, u, h, c, d, p, f, g, _ = st.hasData(t) && st._data(t);
                            if (_ && (h = _.events)) {
                                for (e = (e || "").match(wt) || [""], u = e.length; u--;)if (a = Lt.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                                    for (c = st.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, d = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;)o = d[s], !r && g !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(s, 1), o.selector && d.delegateCount--, c.remove && c.remove.call(t, o));
                                    l && !d.length && (c.teardown && c.teardown.call(t, f, _.handle) !== !1 || st.removeEvent(t, p, _.handle), delete h[p])
                                } else for (p in h)st.event.remove(t, p + e[u], i, n, !0);
                                st.isEmptyObject(h) && (delete _.handle, st._removeData(t, "events"))
                            }
                        },
                        trigger: function (e, i, n, r) {
                            var s, o, a, l, u, h, c, d = [n || gt], p = it.call(e, "type") ? e.type : e, f = it.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = h = n = n || gt, 3 !== n.nodeType && 8 !== n.nodeType && !zt.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), u = st.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                                if (!r && !u.noBubble && !st.isWindow(n)) {
                                    for (l = u.delegateType || p, zt.test(l + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), h = a;
                                    h === (n.ownerDocument || gt) && d.push(h.defaultView || h.parentWindow || t)
                                }
                                for (c = 0; (a = d[c++]) && !e.isPropagationStopped();)e.type = c > 1 ? l : u.bindType || p, s = (st._data(a, "events") || {})[e.type] && st._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && st.acceptData(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && st.acceptData(n) && o && n[p] && !st.isWindow(n)) {
                                    h = n[o], h && (n[o] = null), st.event.triggered = p;
                                    try {
                                        n[p]()
                                    } catch (g) {
                                    }
                                    st.event.triggered = void 0, h && (n[o] = h)
                                }
                                return e.result
                            }
                        },
                        dispatch: function (t) {
                            t = st.event.fix(t);
                            var e, i, n, r, s, o = [], a = Z.call(arguments), l = (st._data(this, "events") || {})[t.type] || [], u = st.event.special[t.type] || {};
                            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                                for (o = st.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, s = 0; (n = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, t), t.result
                            }
                        },
                        handlers: function (t, e) {
                            var i, n, r, s, o = [], a = e.delegateCount, l = t.target;
                            if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                                for (r = [], s = 0; a > s; s++)n = e[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length), r[i] && r.push(n);
                                r.length && o.push({elem: l, handlers: r})
                            }
                            return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
                        },
                        fix: function (t) {
                            if (t[st.expando])return t;
                            var e, i, n, r = t.type, s = t, o = this.fixHooks[r];
                            for (o || (this.fixHooks[r] = o = jt.test(r) ? this.mouseHooks : Rt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new st.Event(s), e = n.length; e--;)i = n[e], t[i] = s[i];
                            return t.target || (t.target = s.srcElement || gt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function (t, e) {
                                var i, n, r, s = e.button, o = e.fromElement;
                                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || gt, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                            }
                        },
                        special: {
                            load: {noBubble: !0}, focus: {
                                trigger: function () {
                                    if (this !== g() && this.focus)try {
                                        return this.focus(), !1
                                    } catch (t) {
                                    }
                                }, delegateType: "focusin"
                            }, blur: {
                                trigger: function () {
                                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                                }, delegateType: "focusout"
                            }, click: {
                                trigger: function () {
                                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                                }, _default: function (t) {
                                    return st.nodeName(t.target, "a")
                                }
                            }, beforeunload: {
                                postDispatch: function (t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        },
                        simulate: function (t, e, i, n) {
                            var r = st.extend(new st.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
                            n ? st.event.trigger(r, null, e) : st.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
                        }
                    }, st.removeEvent = gt.removeEventListener ? function (t, e, i) {
                            t.removeEventListener && t.removeEventListener(e, i, !1)
                        } : function (t, e, i) {
                            var n = "on" + e;
                            t.detachEvent && (typeof t[n] === St && (t[n] = null), t.detachEvent(n, i))
                        }, st.Event = function (t, e) {
                        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
                    }, st.Event.prototype = {
                        isDefaultPrevented: f,
                        isPropagationStopped: f,
                        isImmediatePropagationStopped: f,
                        preventDefault: function () {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                        },
                        stopPropagation: function () {
                            var t = this.originalEvent;
                            this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                        },
                        stopImmediatePropagation: function () {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, st.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, function (t, e) {
                        st.event.special[t] = {
                            delegateType: e, bindType: e, handle: function (t) {
                                var i, n = this, r = t.relatedTarget, s = t.handleObj;
                                return (!r || r !== n && !st.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                            }
                        }
                    }), nt.submitBubbles || (st.event.special.submit = {
                        setup: function () {
                            return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function (t) {
                                    var e = t.target, i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form : void 0;
                                    i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit", function (t) {
                                        t._submit_bubble = !0
                                    }), st._data(i, "submitBubbles", !0))
                                })
                        }, postDispatch: function (t) {
                            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
                        }, teardown: function () {
                            return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
                        }
                    }), nt.changeBubbles || (st.event.special.change = {
                        setup: function () {
                            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (t) {
                                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                                }), st.event.add(this, "click._change", function (t) {
                                    this._just_changed && !t.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, t, !0)
                                })), !1) : void st.event.add(this, "beforeactivate._change", function (t) {
                                    var e = t.target;
                                    Dt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change", function (t) {
                                        !this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
                                    }), st._data(e, "changeBubbles", !0))
                                })
                        }, handle: function (t) {
                            var e = t.target;
                            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
                        }, teardown: function () {
                            return st.event.remove(this, "._change"), !Dt.test(this.nodeName)
                        }
                    }), nt.focusinBubbles || st.each({
                        focus: "focusin", blur: "focusout"
                    }, function (t, e) {
                        var i = function (t) {
                            st.event.simulate(e, t.target, st.event.fix(t), !0)
                        };
                        st.event.special[e] = {
                            setup: function () {
                                var n = this.ownerDocument || this, r = st._data(n, e);
                                r || n.addEventListener(t, i, !0), st._data(n, e, (r || 0) + 1)
                            }, teardown: function () {
                                var n = this.ownerDocument || this, r = st._data(n, e) - 1;
                                r ? st._data(n, e, r) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
                            }
                        }
                    }), st.fn.extend({
                        on: function (t, e, i, n, r) {
                            var s, o;
                            if ("object" == typeof t) {
                                "string" != typeof e && (i = i || e, e = void 0);
                                for (s in t)this.on(s, e, i, t[s], r);
                                return this
                            }
                            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = f; else if (!n)return this;
                            return 1 === r && (o = n, n = function (t) {
                                return st().off(t), o.apply(this, arguments)
                            }, n.guid = o.guid || (o.guid = st.guid++)), this.each(function () {
                                st.event.add(this, t, n, i, e)
                            })
                        }, one: function (t, e, i, n) {
                            return this.on(t, e, i, n, 1)
                        }, off: function (t, e, i) {
                            var n, r;
                            if (t && t.preventDefault && t.handleObj)return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                            if ("object" == typeof t) {
                                for (r in t)this.off(r, e, t[r]);
                                return this
                            }
                            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = f), this.each(function () {
                                st.event.remove(this, t, i, e)
                            })
                        }, trigger: function (t, e) {
                            return this.each(function () {
                                st.event.trigger(t, e, this)
                            })
                        }, triggerHandler: function (t, e) {
                            var i = this[0];
                            return i ? st.event.trigger(t, e, i, !0) : void 0
                        }
                    });
                    var Nt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", It = / jQuery\d+="(?:null|\d+)"/g, Ft = new RegExp("<(?:" + Nt + ")[\\s/>]", "i"), $t = /^\s+/, Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qt = /<([\w:]+)/, Ht = /<tbody/i, Wt = /<|&#?\w+;/, Vt = /<(?:script|style|link)/i, Ut = /checked\s*(?:[^=]|=\s*.checked.)/i, Xt = /^$|\/(?:java|ecma)script/i, Yt = /^true\/(.*)/, Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Zt = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        area: [1, "<map>", "</map>"],
                        param: [1, "<object>", "</object>"],
                        thead: [1, "<table>", "</table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                    }, Qt = _(gt), Jt = Qt.appendChild(gt.createElement("div"));
                    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, st.extend({
                        clone: function (t, e, i) {
                            var n, r, s, o, a, l = st.contains(t.ownerDocument, t);
                            if (nt.html5Clone || st.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Jt.innerHTML = t.outerHTML, Jt.removeChild(s = Jt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))for (n = m(s), a = m(t), o = 0; null != (r = a[o]); ++o)n[o] && S(r, n[o]);
                            if (e)if (i)for (a = a || m(t), n = n || m(s), o = 0; null != (r = a[o]); o++)T(r, n[o]); else T(t, s);
                            return n = m(s, "script"), n.length > 0 && x(n, !l && m(t, "script")), n = a = r = null, s
                        }, buildFragment: function (t, e, i, n) {
                            for (var r, s, o, a, l, u, h, c = t.length, d = _(e), p = [], f = 0; c > f; f++)if (s = t[f], s || 0 === s)if ("object" === st.type(s)) st.merge(p, s.nodeType ? [s] : s); else if (Wt.test(s)) {
                                for (a = a || d.appendChild(e.createElement("div")), l = (qt.exec(s) || ["", ""])[1].toLowerCase(), h = Zt[l] || Zt._default, a.innerHTML = h[1] + s.replace(Bt, "<$1></$2>") + h[2], r = h[0]; r--;)a = a.lastChild;
                                if (!nt.leadingWhitespace && $t.test(s) && p.push(e.createTextNode($t.exec(s)[0])), !nt.tbody)for (s = "table" !== l || Ht.test(s) ? "<table>" !== h[1] || Ht.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;)st.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                                for (st.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                                a = d.lastChild
                            } else p.push(e.createTextNode(s));
                            for (a && d.removeChild(a), nt.appendChecked || st.grep(m(p, "input"), v), f = 0; s = p[f++];)if ((!n || -1 === st.inArray(s, n)) && (o = st.contains(s.ownerDocument, s), a = m(d.appendChild(s), "script"), o && x(a), i))for (r = 0; s = a[r++];)Xt.test(s.type || "") && i.push(s);
                            return a = null, d
                        }, cleanData: function (t, e) {
                            for (var i, n, r, s, o = 0, a = st.expando, l = st.cache, u = nt.deleteExpando, h = st.event.special; null != (i = t[o]); o++)if ((e || st.acceptData(i)) && (r = i[a], s = r && l[r])) {
                                if (s.events)for (n in s.events)h[n] ? st.event.remove(i, n) : st.removeEvent(i, n, s.handle);
                                l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== St ? i.removeAttribute(a) : i[a] = null, G.push(r))
                            }
                        }
                    }), st.fn.extend({
                        text: function (t) {
                            return Et(this, function (t) {
                                return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || gt).createTextNode(t))
                            }, null, t, arguments.length)
                        }, append: function () {
                            return this.domManip(arguments, function (t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = y(this, t);
                                    e.appendChild(t)
                                }
                            })
                        }, prepend: function () {
                            return this.domManip(arguments, function (t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = y(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            })
                        }, before: function () {
                            return this.domManip(arguments, function (t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            })
                        }, after: function () {
                            return this.domManip(arguments, function (t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            })
                        }, remove: function (t, e) {
                            for (var i, n = t ? st.filter(t, this) : this, r = 0; null != (i = n[r]); r++)e || 1 !== i.nodeType || st.cleanData(m(i)), i.parentNode && (e && st.contains(i.ownerDocument, i) && x(m(i, "script")), i.parentNode.removeChild(i));
                            return this
                        }, empty: function () {
                            for (var t, e = 0; null != (t = this[e]); e++) {
                                for (1 === t.nodeType && st.cleanData(m(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                                t.options && st.nodeName(t, "select") && (t.options.length = 0)
                            }
                            return this
                        }, clone: function (t, e) {
                            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                                return st.clone(this, t, e)
                            })
                        }, html: function (t) {
                            return Et(this, function (t) {
                                var e = this[0] || {}, i = 0, n = this.length;
                                if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(It, "") : void 0;
                                if (!("string" != typeof t || Vt.test(t) || !nt.htmlSerialize && Ft.test(t) || !nt.leadingWhitespace && $t.test(t) || Zt[(qt.exec(t) || ["", ""])[1].toLowerCase()])) {
                                    t = t.replace(Bt, "<$1></$2>");
                                    try {
                                        for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (st.cleanData(m(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (r) {
                                    }
                                }
                                e && this.empty().append(t)
                            }, null, t, arguments.length)
                        }, replaceWith: function () {
                            var t = arguments[0];
                            return this.domManip(arguments, function (e) {
                                t = this.parentNode, st.cleanData(m(this)), t && t.replaceChild(e, this)
                            }), t && (t.length || t.nodeType) ? this : this.remove()
                        }, detach: function (t) {
                            return this.remove(t, !0)
                        }, domManip: function (t, e) {
                            t = Q.apply([], t);
                            var i, n, r, s, o, a, l = 0, u = this.length, h = this, c = u - 1, d = t[0], p = st.isFunction(d);
                            if (p || u > 1 && "string" == typeof d && !nt.checkClone && Ut.test(d))return this.each(function (i) {
                                var n = h.eq(i);
                                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                            });
                            if (u && (a = st.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                                for (s = st.map(m(a, "script"), w), r = s.length; u > l; l++)n = a, l !== c && (n = st.clone(n, !0, !0), r && st.merge(s, m(n, "script"))), e.call(this[l], n, l);
                                if (r)for (o = s[s.length - 1].ownerDocument, st.map(s, b), l = 0; r > l; l++)n = s[l], Xt.test(n.type || "") && !st._data(n, "globalEval") && st.contains(o, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Gt, "")));
                                a = i = null
                            }
                            return this
                        }
                    }), st.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, function (t, e) {
                        st.fn[t] = function (t) {
                            for (var i, n = 0, r = [], s = st(t), o = s.length - 1; o >= n; n++)i = n === o ? this : this.clone(!0), st(s[n])[e](i), J.apply(r, i.get());
                            return this.pushStack(r)
                        }
                    });
                    var Kt, te = {};
                    !function () {
                        var t;
                        nt.shrinkWrapBlocks = function () {
                            if (null != t)return t;
                            t = !1;
                            var e, i, n;
                            return i = gt.getElementsByTagName("body")[0], i && i.style ? (e = gt.createElement("div"), n = gt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== St && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(gt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
                        }
                    }();
                    var ee, ie, ne = /^margin/, re = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$", "i"), se = /^(top|right|bottom|left)$/;
                    t.getComputedStyle ? (ee = function (e) {
                            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
                        }, ie = function (t, e, i) {
                            var n, r, s, o, a = t.style;
                            return i = i || ee(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || st.contains(t.ownerDocument, t) || (o = st.style(t, e)), re.test(o) && ne.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
                        }) : gt.documentElement.currentStyle && (ee = function (t) {
                            return t.currentStyle
                        }, ie = function (t, e, i) {
                            var n, r, s, o, a = t.style;
                            return i = i || ee(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), re.test(o) && !se.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
                        }), function () {
                        function e() {
                            var e, i, n, r;
                            i = gt.getElementsByTagName("body")[0], i && i.style && (e = gt.createElement("div"), n = gt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(gt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
                        }

                        var i, n, r, s, o, a, l;
                        i = gt.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], n = r && r.style, n && (n.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === n.opacity, nt.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === i.style.backgroundClip, nt.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(nt, {
                            reliableHiddenOffsets: function () {
                                return null == a && e(), a
                            }, boxSizingReliable: function () {
                                return null == o && e(), o
                            }, pixelPosition: function () {
                                return null == s && e(), s
                            }, reliableMarginRight: function () {
                                return null == l && e(), l
                            }
                        }))
                    }(), st.swap = function (t, e, i, n) {
                        var r, s, o = {};
                        for (s in e)o[s] = t.style[s], t.style[s] = e[s];
                        r = i.apply(t, n || []);
                        for (s in e)t.style[s] = o[s];
                        return r
                    };
                    var oe = /alpha\([^)]*\)/i, ae = /opacity\s*=\s*([^)]*)/, le = /^(none|table(?!-c[ea]).+)/, ue = new RegExp("^(" + Pt + ")(.*)$", "i"), he = new RegExp("^([+-])=(" + Pt + ")", "i"), ce = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }, de = {letterSpacing: "0", fontWeight: "400"}, pe = ["Webkit", "O", "Moz", "ms"];
                    st.extend({
                        cssHooks: {
                            opacity: {
                                get: function (t, e) {
                                    if (e) {
                                        var i = ie(t, "opacity");
                                        return "" === i ? "1" : i
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
                        style: function (t, e, i, n) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var r, s, o, a = st.camelCase(e), l = t.style;
                                if (e = st.cssProps[a] || (st.cssProps[a] = A(l, a)), o = st.cssHooks[e] || st.cssHooks[a], void 0 === i)return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                                if (s = typeof i, "string" === s && (r = he.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(st.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || st.cssNumber[a] || (i += "px"), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n)))))try {
                                    l[e] = i
                                } catch (u) {
                                }
                            }
                        },
                        css: function (t, e, i, n) {
                            var r, s, o, a = st.camelCase(e);
                            return e = st.cssProps[a] || (st.cssProps[a] = A(t.style, a)), o = st.cssHooks[e] || st.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = ie(t, e, n)), "normal" === s && e in de && (s = de[e]), "" === i || i ? (r = parseFloat(s), i === !0 || st.isNumeric(r) ? r || 0 : s) : s
                        }
                    }), st.each(["height", "width"], function (t, e) {
                        st.cssHooks[e] = {
                            get: function (t, i, n) {
                                return i ? le.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ce, function () {
                                            return D(t, e, n)
                                        }) : D(t, e, n) : void 0
                            }, set: function (t, i, n) {
                                var r = n && ee(t);
                                return E(t, i, n ? M(t, e, n, nt.boxSizing && "border-box" === st.css(t, "boxSizing", !1, r), r) : 0)
                            }
                        }
                    }), nt.opacity || (st.cssHooks.opacity = {
                        get: function (t, e) {
                            return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                        }, set: function (t, e) {
                            var i = t.style, n = t.currentStyle, r = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = n && n.filter || i.filter || "";
                            i.zoom = 1, (e >= 1 || "" === e) && "" === st.trim(s.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(s) ? s.replace(oe, r) : s + " " + r)
                        }
                    }), st.cssHooks.marginRight = P(nt.reliableMarginRight, function (t, e) {
                        return e ? st.swap(t, {display: "inline-block"}, ie, [t, "marginRight"]) : void 0
                    }), st.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                        st.cssHooks[t + e] = {
                            expand: function (i) {
                                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)r[t + At[n] + e] = s[n] || s[n - 2] || s[0];
                                return r
                            }
                        }, ne.test(t) || (st.cssHooks[t + e].set = E)
                    }), st.fn.extend({
                        css: function (t, e) {
                            return Et(this, function (t, e, i) {
                                var n, r, s = {}, o = 0;
                                if (st.isArray(e)) {
                                    for (n = ee(t), r = e.length; r > o; o++)s[e[o]] = st.css(t, e[o], !1, n);
                                    return s
                                }
                                return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
                            }, t, e, arguments.length > 1)
                        }, show: function () {
                            return O(this, !0)
                        }, hide: function () {
                            return O(this)
                        }, toggle: function (t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                                    Ot(this) ? st(this).show() : st(this).hide()
                                })
                        }
                    }), st.Tween = R, R.prototype = {
                        constructor: R, init: function (t, e, i, n, r, s) {
                            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
                        }, cur: function () {
                            var t = R.propHooks[this.prop];
                            return t && t.get ? t.get(this) : R.propHooks._default.get(this)
                        }, run: function (t) {
                            var e, i = R.propHooks[this.prop];
                            return this.pos = e = this.options.duration ? st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
                        }
                    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
                        _default: {
                            get: function (t) {
                                var e;
                                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                            }, set: function (t) {
                                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                            }
                        }
                    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
                        set: function (t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, st.easing = {
                        linear: function (t) {
                            return t
                        }, swing: function (t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        }
                    }, st.fx = R.prototype.init, st.fx.step = {};
                    var fe, ge, _e = /^(?:toggle|show|hide)$/, me = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$", "i"), ve = /queueHooks$/, ye = [N], we = {
                        "*": [function (t, e) {
                            var i = this.createTween(t, e), n = i.cur(), r = me.exec(e), s = r && r[3] || (st.cssNumber[t] ? "" : "px"), o = (st.cssNumber[t] || "px" !== s && +n) && me.exec(st.css(i.elem, t)), a = 1, l = 20;
                            if (o && o[3] !== s) {
                                s = s || o[3], r = r || [], o = +n || 1;
                                do a = a || ".5", o /= a, st.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                            }
                            return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
                        }]
                    };
                    st.Animation = st.extend(F, {
                        tweener: function (t, e) {
                            st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                            for (var i, n = 0, r = t.length; r > n; n++)i = t[n], we[i] = we[i] || [], we[i].unshift(e)
                        }, prefilter: function (t, e) {
                            e ? ye.unshift(t) : ye.push(t)
                        }
                    }), st.speed = function (t, e, i) {
                        var n = t && "object" == typeof t ? st.extend({}, t) : {
                                complete: i || !i && e || st.isFunction(t) && t,
                                duration: t,
                                easing: i && e || e && !st.isFunction(e) && e
                            };
                        return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                            st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
                        }, n
                    }, st.fn.extend({
                        fadeTo: function (t, e, i, n) {
                            return this.filter(Ot).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
                        }, animate: function (t, e, i, n) {
                            var r = st.isEmptyObject(t), s = st.speed(e, i, n), o = function () {
                                var e = F(this, st.extend({}, t), s);
                                (r || st._data(this, "finish")) && e.stop(!0)
                            };
                            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                        }, stop: function (t, e, i) {
                            var n = function (t) {
                                var e = t.stop;
                                delete t.stop, e(i)
                            };
                            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                                var e = !0, r = null != t && t + "queueHooks", s = st.timers, o = st._data(this);
                                if (r) o[r] && o[r].stop && n(o[r]); else for (r in o)o[r] && o[r].stop && ve.test(r) && n(o[r]);
                                for (r = s.length; r--;)s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                                (e || !i) && st.dequeue(this, t)
                            })
                        }, finish: function (t) {
                            return t !== !1 && (t = t || "fx"), this.each(function () {
                                var e, i = st._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = st.timers, o = n ? n.length : 0;
                                for (i.finish = !0, st.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;)s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                                for (e = 0; o > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
                                delete i.finish
                            })
                        }
                    }), st.each(["toggle", "show", "hide"], function (t, e) {
                        var i = st.fn[e];
                        st.fn[e] = function (t, n, r) {
                            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(z(e, !0), t, n, r)
                        }
                    }), st.each({
                        slideDown: z("show"),
                        slideUp: z("hide"),
                        slideToggle: z("toggle"),
                        fadeIn: {opacity: "show"},
                        fadeOut: {opacity: "hide"},
                        fadeToggle: {opacity: "toggle"}
                    }, function (t, e) {
                        st.fn[t] = function (t, i, n) {
                            return this.animate(e, t, i, n)
                        }
                    }), st.timers = [], st.fx.tick = function () {
                        var t, e = st.timers, i = 0;
                        for (fe = st.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                        e.length || st.fx.stop(), fe = void 0
                    }, st.fx.timer = function (t) {
                        st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
                    }, st.fx.interval = 13, st.fx.start = function () {
                        ge || (ge = setInterval(st.fx.tick, st.fx.interval))
                    }, st.fx.stop = function () {
                        clearInterval(ge), ge = null
                    }, st.fx.speeds = {slow: 600, fast: 200, _default: 400}, st.fn.delay = function (t, e) {
                        return t = st.fx ? st.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                            var n = setTimeout(e, t);
                            i.stop = function () {
                                clearTimeout(n)
                            }
                        })
                    }, function () {
                        var t, e, i, n, r;
                        e = gt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = gt.createElement("select"), r = i.appendChild(gt.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(n.getAttribute("style")), nt.hrefNormalized = "/a" === n.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = r.selected, nt.enctype = !!gt.createElement("form").enctype, i.disabled = !0, nt.optDisabled = !r.disabled, t = gt.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
                    }();
                    var be = /\r/g;
                    st.fn.extend({
                        val: function (t) {
                            var e, i, n, r = this[0];
                            {
                                if (arguments.length)return n = st.isFunction(t), this.each(function (i) {
                                    var r;
                                    1 === this.nodeType && (r = n ? t.call(this, i, st(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : st.isArray(r) && (r = st.map(r, function (t) {
                                                return null == t ? "" : t + ""
                                            })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                                });
                                if (r)return e = st.valHooks[r.type] || st.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)
                            }
                        }
                    }), st.extend({
                        valHooks: {
                            option: {
                                get: function (t) {
                                    var e = st.find.attr(t, "value");
                                    return null != e ? e : st.trim(st.text(t))
                                }
                            }, select: {
                                get: function (t) {
                                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)if (i = n[l], !(!i.selected && l !== r || (nt.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
                                        if (e = st(i).val(), s)return e;
                                        o.push(e)
                                    }
                                    return o
                                }, set: function (t, e) {
                                    for (var i, n, r = t.options, s = st.makeArray(e), o = r.length; o--;)if (n = r[o], st.inArray(st.valHooks.option.get(n), s) >= 0)try {
                                        n.selected = i = !0
                                    } catch (a) {
                                        n.scrollHeight
                                    } else n.selected = !1;
                                    return i || (t.selectedIndex = -1), r
                                }
                            }
                        }
                    }), st.each(["radio", "checkbox"], function () {
                        st.valHooks[this] = {
                            set: function (t, e) {
                                return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
                            }
                        }, nt.checkOn || (st.valHooks[this].get = function (t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    });
                    var xe, Te, Se = st.expr.attrHandle, Ce = /^(?:checked|selected)$/i, ke = nt.getSetAttribute, Pe = nt.input;
                    st.fn.extend({
                        attr: function (t, e) {
                            return Et(this, st.attr, t, e, arguments.length > 1)
                        }, removeAttr: function (t) {
                            return this.each(function () {
                                st.removeAttr(this, t)
                            })
                        }
                    }), st.extend({
                        attr: function (t, e, i) {
                            var n, r, s = t.nodeType;
                            if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === St ? st.prop(t, e, i) : (1 === s && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? Te : xe)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = st.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e))
                        }, removeAttr: function (t, e) {
                            var i, n, r = 0, s = e && e.match(wt);
                            if (s && 1 === t.nodeType)for (; i = s[r++];)n = st.propFix[i] || i, st.expr.match.bool.test(i) ? Pe && ke || !Ce.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""), t.removeAttribute(ke ? i : n)
                        }, attrHooks: {
                            type: {
                                set: function (t, e) {
                                    if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                                        var i = t.value;
                                        return t.setAttribute("type", e), i && (t.value = i), e
                                    }
                                }
                            }
                        }
                    }), Te = {
                        set: function (t, e, i) {
                            return e === !1 ? st.removeAttr(t, i) : Pe && ke || !Ce.test(i) ? t.setAttribute(!ke && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0, i
                        }
                    }, st.each(st.expr.match.bool.source.match(/\w+/g), function (t, e) {
                        var i = Se[e] || st.find.attr;
                        Se[e] = Pe && ke || !Ce.test(e) ? function (t, e, n) {
                                var r, s;
                                return n || (s = Se[e], Se[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Se[e] = s), r
                            } : function (t, e, i) {
                                return i ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
                            }
                    }), Pe && ke || (st.attrHooks.value = {
                        set: function (t, e, i) {
                            return st.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, i)
                        }
                    }), ke || (xe = {
                        set: function (t, e, i) {
                            var n = t.getAttributeNode(i);
                            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
                        }
                    }, Se.id = Se.name = Se.coords = function (t, e, i) {
                        var n;
                        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
                    }, st.valHooks.button = {
                        get: function (t, e) {
                            var i = t.getAttributeNode(e);
                            return i && i.specified ? i.value : void 0
                        }, set: xe.set
                    }, st.attrHooks.contenteditable = {
                        set: function (t, e, i) {
                            xe.set(t, "" === e ? !1 : e, i)
                        }
                    }, st.each(["width", "height"], function (t, e) {
                        st.attrHooks[e] = {
                            set: function (t, i) {
                                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                            }
                        }
                    })), nt.style || (st.attrHooks.style = {
                        get: function (t) {
                            return t.style.cssText || void 0
                        }, set: function (t, e) {
                            return t.style.cssText = e + ""
                        }
                    });
                    var Ae = /^(?:input|select|textarea|button|object)$/i, Oe = /^(?:a|area)$/i;
                    st.fn.extend({
                        prop: function (t, e) {
                            return Et(this, st.prop, t, e, arguments.length > 1)
                        }, removeProp: function (t) {
                            return t = st.propFix[t] || t, this.each(function () {
                                try {
                                    this[t] = void 0, delete this[t]
                                } catch (e) {
                                }
                            })
                        }
                    }), st.extend({
                        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
                            var n, r, s, o = t.nodeType;
                            if (t && 3 !== o && 8 !== o && 2 !== o)return s = 1 !== o || !st.isXMLDoc(t), s && (e = st.propFix[e] || e, r = st.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
                        }, propHooks: {
                            tabIndex: {
                                get: function (t) {
                                    var e = st.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Oe.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        }
                    }), nt.hrefNormalized || st.each(["href", "src"], function (t, e) {
                        st.propHooks[e] = {
                            get: function (t) {
                                return t.getAttribute(e, 4)
                            }
                        }
                    }), nt.optSelected || (st.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                        }
                    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                        st.propFix[this.toLowerCase()] = this
                    }), nt.enctype || (st.propFix.enctype = "encoding");
                    var Ee = /[\t\r\n\f]/g;
                    st.fn.extend({
                        addClass: function (t) {
                            var e, i, n, r, s, o, a = 0, l = this.length, u = "string" == typeof t && t;
                            if (st.isFunction(t))return this.each(function (e) {
                                st(this).addClass(t.call(this, e, this.className))
                            });
                            if (u)for (e = (t || "").match(wt) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")) {
                                for (s = 0; r = e[s++];)n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                o = st.trim(n), i.className !== o && (i.className = o)
                            }
                            return this
                        }, removeClass: function (t) {
                            var e, i, n, r, s, o, a = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
                            if (st.isFunction(t))return this.each(function (e) {
                                st(this).removeClass(t.call(this, e, this.className))
                            });
                            if (u)for (e = (t || "").match(wt) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")) {
                                for (s = 0; r = e[s++];)for (; n.indexOf(" " + r + " ") >= 0;)n = n.replace(" " + r + " ", " ");
                                o = t ? st.trim(n) : "", i.className !== o && (i.className = o)
                            }
                            return this
                        }, toggleClass: function (t, e) {
                            var i = typeof t;
                            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(st.isFunction(t) ? function (i) {
                                        st(this).toggleClass(t.call(this, i, this.className, e), e)
                                    } : function () {
                                        if ("string" === i)for (var e, n = 0, r = st(this), s = t.match(wt) || []; e = s[n++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(i === St || "boolean" === i) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : st._data(this, "__className__") || "")
                                    })
                        }, hasClass: function (t) {
                            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0)return !0;
                            return !1
                        }
                    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                        st.fn[e] = function (t, i) {
                            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                        }
                    }), st.fn.extend({
                        hover: function (t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }, bind: function (t, e, i) {
                            return this.on(t, null, e, i)
                        }, unbind: function (t, e) {
                            return this.off(t, null, e)
                        }, delegate: function (t, e, i, n) {
                            return this.on(e, t, i, n)
                        }, undelegate: function (t, e, i) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                        }
                    });
                    var Me = st.now(), De = /\?/, Re = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                    st.parseJSON = function (e) {
                        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
                        var i, n = null, r = st.trim(e + "");
                        return r && !st.trim(r.replace(Re, function (t, e, r, s) {
                            return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "")
                        })) ? Function("return " + r)() : st.error("Invalid JSON: " + e)
                    }, st.parseXML = function (e) {
                        var i, n;
                        if (!e || "string" != typeof e)return null;
                        try {
                            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
                        } catch (r) {
                            i = void 0
                        }
                        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e), i
                    };
                    var je, ze, Le = /#.*$/, Ne = /([?&])_=[^&]*/, Ie = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $e = /^(?:GET|HEAD)$/, Be = /^\/\//, qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, He = {}, We = {}, Ve = "*/".concat("*");
                    try {
                        ze = location.href
                    } catch (Ue) {
                        ze = gt.createElement("a"), ze.href = "", ze = ze.href
                    }
                    je = qe.exec(ze.toLowerCase()) || [], st.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: ze,
                            type: "GET",
                            isLocal: Fe.test(je[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Ve,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {xml: /xml/, html: /html/, json: /json/},
                            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": st.parseJSON,
                                "text xml": st.parseXML
                            },
                            flatOptions: {url: !0, context: !0}
                        },
                        ajaxSetup: function (t, e) {
                            return e ? q(q(t, st.ajaxSettings), e) : q(st.ajaxSettings, t)
                        },
                        ajaxPrefilter: $(He),
                        ajaxTransport: $(We),
                        ajax: function (t, e) {
                            function i(t, e, i, n) {
                                var r, h, m, v, w, x = e;
                                2 !== y && (y = 2, a && clearTimeout(a), u = void 0, o = n || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (v = H(c, b, i)), v = W(c, v, b, r), r ? (c.ifModified && (w = b.getResponseHeader("Last-Modified"), w && (st.lastModified[s] = w), w = b.getResponseHeader("etag"), w && (st.etag[s] = w)), 204 === t || "HEAD" === c.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = v.state, h = v.data, m = v.error, r = !m)) : (m = x, (t || !x) && (x = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || x) + "", r ? f.resolveWith(d, [h, x, b]) : f.rejectWith(d, [b, x, m]), b.statusCode(_), _ = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [b, c, r ? h : m]), g.fireWith(d, [b, x]), l && (p.trigger("ajaxComplete", [b, c]), --st.active || st.event.trigger("ajaxStop")))
                            }

                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var n, r, s, o, a, l, u, h, c = st.ajaxSetup({}, e), d = c.context || c, p = c.context && (d.nodeType || d.jquery) ? st(d) : st.event, f = st.Deferred(), g = st.Callbacks("once memory"), _ = c.statusCode || {}, m = {}, v = {}, y = 0, w = "canceled", b = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (2 === y) {
                                        if (!h)for (h = {}; e = Ie.exec(o);)h[e[1].toLowerCase()] = e[2];
                                        e = h[t.toLowerCase()]
                                    }
                                    return null == e ? null : e
                                },
                                getAllResponseHeaders: function () {
                                    return 2 === y ? o : null
                                },
                                setRequestHeader: function (t, e) {
                                    var i = t.toLowerCase();
                                    return y || (t = v[i] = v[i] || t, m[t] = e), this
                                },
                                overrideMimeType: function (t) {
                                    return y || (c.mimeType = t), this
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)if (2 > y)for (e in t)_[e] = [_[e], t[e]]; else b.always(t[b.status]);
                                    return this
                                },
                                abort: function (t) {
                                    var e = t || w;
                                    return u && u.abort(e), i(0, e), this
                                }
                            };
                            if (f.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, c.url = ((t || c.url || ze) + "").replace(Le, "").replace(Be, je[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = st.trim(c.dataType || "*").toLowerCase().match(wt) || [""], null == c.crossDomain && (n = qe.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === je[1] && n[2] === je[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (je[3] || ("http:" === je[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = st.param(c.data, c.traditional)), B(He, c, e, b), 2 === y)return b;
                            l = st.event && c.global, l && 0 === st.active++ && st.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !$e.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (De.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Ne.test(s) ? s.replace(Ne, "$1_=" + Me++) : s + (De.test(s) ? "&" : "?") + "_=" + Me++)), c.ifModified && (st.lastModified[s] && b.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && b.setRequestHeader("If-None-Match", st.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : c.accepts["*"]);
                            for (r in c.headers)b.setRequestHeader(r, c.headers[r]);
                            if (c.beforeSend && (c.beforeSend.call(d, b, c) === !1 || 2 === y))return b.abort();
                            w = "abort";
                            for (r in{success: 1, error: 1, complete: 1})b[r](c[r]);
                            if (u = B(We, c, e, b)) {
                                b.readyState = 1, l && p.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (a = setTimeout(function () {
                                    b.abort("timeout")
                                }, c.timeout));
                                try {
                                    y = 1, u.send(m, i)
                                } catch (x) {
                                    if (!(2 > y))throw x;
                                    i(-1, x)
                                }
                            } else i(-1, "No Transport");
                            return b
                        },
                        getJSON: function (t, e, i) {
                            return st.get(t, e, i, "json");

                        },
                        getScript: function (t, e) {
                            return st.get(t, void 0, e, "script")
                        }
                    }), st.each(["get", "post"], function (t, e) {
                        st[e] = function (t, i, n, r) {
                            return st.isFunction(i) && (r = r || n, n = i, i = void 0), st.ajax({
                                url: t,
                                type: e,
                                dataType: r,
                                data: i,
                                success: n
                            })
                        }
                    }), st._evalUrl = function (t) {
                        return st.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
                    }, st.fn.extend({
                        wrapAll: function (t) {
                            if (st.isFunction(t))return this.each(function (e) {
                                st(this).wrapAll(t.call(this, e))
                            });
                            if (this[0]) {
                                var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
                                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                                    return t
                                }).append(this)
                            }
                            return this
                        }, wrapInner: function (t) {
                            return this.each(st.isFunction(t) ? function (e) {
                                    st(this).wrapInner(t.call(this, e))
                                } : function () {
                                    var e = st(this), i = e.contents();
                                    i.length ? i.wrapAll(t) : e.append(t)
                                })
                        }, wrap: function (t) {
                            var e = st.isFunction(t);
                            return this.each(function (i) {
                                st(this).wrapAll(e ? t.call(this, i) : t)
                            })
                        }, unwrap: function () {
                            return this.parent().each(function () {
                                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
                            }).end()
                        }
                    }), st.expr.filters.hidden = function (t) {
                        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
                    }, st.expr.filters.visible = function (t) {
                        return !st.expr.filters.hidden(t)
                    };
                    var Xe = /%20/g, Ye = /\[\]$/, Ge = /\r?\n/g, Ze = /^(?:submit|button|image|reset|file)$/i, Qe = /^(?:input|select|textarea|keygen)/i;
                    st.param = function (t, e) {
                        var i, n = [], r = function (t, e) {
                            e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                        };
                        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function () {
                            r(this.name, this.value)
                        }); else for (i in t)V(i, t[i], e, r);
                        return n.join("&").replace(Xe, "+")
                    }, st.fn.extend({
                        serialize: function () {
                            return st.param(this.serializeArray())
                        }, serializeArray: function () {
                            return this.map(function () {
                                var t = st.prop(this, "elements");
                                return t ? st.makeArray(t) : this
                            }).filter(function () {
                                var t = this.type;
                                return this.name && !st(this).is(":disabled") && Qe.test(this.nodeName) && !Ze.test(t) && (this.checked || !Mt.test(t))
                            }).map(function (t, e) {
                                var i = st(this).val();
                                return null == i ? null : st.isArray(i) ? st.map(i, function (t) {
                                            return {name: e.name, value: t.replace(Ge, "\r\n")}
                                        }) : {name: e.name, value: i.replace(Ge, "\r\n")}
                            }).get()
                        }
                    }), st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
                            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
                        } : U;
                    var Je = 0, Ke = {}, ti = st.ajaxSettings.xhr();
                    t.attachEvent && t.attachEvent("onunload", function () {
                        for (var t in Ke)Ke[t](void 0, !0)
                    }), nt.cors = !!ti && "withCredentials" in ti, ti = nt.ajax = !!ti, ti && st.ajaxTransport(function (t) {
                        if (!t.crossDomain || nt.cors) {
                            var e;
                            return {
                                send: function (i, n) {
                                    var r, s = t.xhr(), o = ++Je;
                                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)s[r] = t.xhrFields[r];
                                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                                    for (r in i)void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                                    s.send(t.hasContent && t.data || null), e = function (i, r) {
                                        var a, l, u;
                                        if (e && (r || 4 === s.readyState))if (delete Ke[o], e = void 0, s.onreadystatechange = st.noop, r) 4 !== s.readyState && s.abort(); else {
                                            u = {}, a = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                            try {
                                                l = s.statusText
                                            } catch (h) {
                                                l = ""
                                            }
                                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                        }
                                        u && n(a, l, u, s.getAllResponseHeaders())
                                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Ke[o] = e : e()
                                }, abort: function () {
                                    e && e(void 0, !0)
                                }
                            }
                        }
                    }), st.ajaxSetup({
                        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                        contents: {script: /(?:java|ecma)script/},
                        converters: {
                            "text script": function (t) {
                                return st.globalEval(t), t
                            }
                        }
                    }), st.ajaxPrefilter("script", function (t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
                    }), st.ajaxTransport("script", function (t) {
                        if (t.crossDomain) {
                            var e, i = gt.head || st("head")[0] || gt.documentElement;
                            return {
                                send: function (n, r) {
                                    e = gt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                                    }, i.insertBefore(e, i.firstChild)
                                }, abort: function () {
                                    e && e.onload(void 0, !0)
                                }
                            }
                        }
                    });
                    var ei = [], ii = /(=)\?(?=&|$)|\?\?/;
                    st.ajaxSetup({
                        jsonp: "callback", jsonpCallback: function () {
                            var t = ei.pop() || st.expando + "_" + Me++;
                            return this[t] = !0, t
                        }
                    }), st.ajaxPrefilter("json jsonp", function (e, i, n) {
                        var r, s, o, a = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
                        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ii, "$1" + r) : e.jsonp !== !1 && (e.url += (De.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                                return o || st.error(r + " was not called"), o[0]
                            }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
                                o = arguments
                            }, n.always(function () {
                                t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, ei.push(r)), o && st.isFunction(s) && s(o[0]), o = s = void 0
                            }), "script") : void 0
                    }), st.parseHTML = function (t, e, i) {
                        if (!t || "string" != typeof t)return null;
                        "boolean" == typeof e && (i = e, e = !1), e = e || gt;
                        var n = dt.exec(t), r = !i && [];
                        return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, r), r && r.length && st(r).remove(), st.merge([], n.childNodes))
                    };
                    var ni = st.fn.load;
                    st.fn.load = function (t, e, i) {
                        if ("string" != typeof t && ni)return ni.apply(this, arguments);
                        var n, r, s, o = this, a = t.indexOf(" ");
                        return a >= 0 && (n = st.trim(t.slice(a, t.length)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && st.ajax({
                            url: t,
                            type: s,
                            dataType: "html",
                            data: e
                        }).done(function (t) {
                            r = arguments, o.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
                        }).complete(i && function (t, e) {
                                o.each(i, r || [t.responseText, e, t])
                            }), this
                    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                        st.fn[e] = function (t) {
                            return this.on(e, t)
                        }
                    }), st.expr.filters.animated = function (t) {
                        return st.grep(st.timers, function (e) {
                            return t === e.elem
                        }).length
                    };
                    var ri = t.document.documentElement;
                    st.offset = {
                        setOffset: function (t, e, i) {
                            var n, r, s, o, a, l, u, h = st.css(t, "position"), c = st(t), d = {};
                            "static" === h && (t.style.position = "relative"), a = c.offset(), s = st.css(t, "top"), l = st.css(t, "left"), u = ("absolute" === h || "fixed" === h) && st.inArray("auto", [s, l]) > -1, u ? (n = c.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
                        }
                    }, st.fn.extend({
                        offset: function (t) {
                            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                                    st.offset.setOffset(this, t, e)
                                });
                            var e, i, n = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
                            if (s)return e = s.documentElement, st.contains(e, r) ? (typeof r.getBoundingClientRect !== St && (n = r.getBoundingClientRect()), i = Y(s), {
                                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                                }) : n
                        }, position: function () {
                            if (this[0]) {
                                var t, e, i = {top: 0, left: 0}, n = this[0];
                                return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)), {
                                    top: e.top - i.top - st.css(n, "marginTop", !0),
                                    left: e.left - i.left - st.css(n, "marginLeft", !0)
                                }
                            }
                        }, offsetParent: function () {
                            return this.map(function () {
                                for (var t = this.offsetParent || ri; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");)t = t.offsetParent;
                                return t || ri
                            })
                        }
                    }), st.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
                        var i = /Y/.test(e);
                        st.fn[t] = function (n) {
                            return Et(this, function (t, n, r) {
                                var s = Y(t);
                                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? st(s).scrollLeft() : r, i ? r : st(s).scrollTop()) : t[n] = r)
                            }, t, n, arguments.length, null)
                        }
                    }), st.each(["top", "left"], function (t, e) {
                        st.cssHooks[e] = P(nt.pixelPosition, function (t, i) {
                            return i ? (i = ie(t, e), re.test(i) ? st(t).position()[e] + "px" : i) : void 0
                        })
                    }), st.each({Height: "height", Width: "width"}, function (t, e) {
                        st.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
                            st.fn[n] = function (n, r) {
                                var s = arguments.length && (i || "boolean" != typeof n), o = i || (n === !0 || r === !0 ? "margin" : "border");
                                return Et(this, function (e, i, n) {
                                    var r;
                                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? st.css(e, i, o) : st.style(e, i, n, o)
                                }, e, s ? n : void 0, s, null)
                            }
                        })
                    }), st.fn.size = function () {
                        return this.length
                    }, st.fn.andSelf = st.fn.addBack, "function" == typeof n && n.amd && n("jquery", [], function () {
                        return st
                    });
                    var si = t.jQuery, oi = t.$;
                    return st.noConflict = function (e) {
                        return t.$ === st && (t.$ = oi), e && t.jQuery === st && (t.jQuery = si), st
                    }, typeof e === St && (t.jQuery = t.$ = st), st
                }), r("undefined" != typeof $ ? $ : window.$)
            }).call(t, void 0, void 0, void 0, void 0, function (t) {
                e.exports = t
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    3: [function (t, e, n) {
        var r = new function (t) {
            var n = new function () {
                function e(t, e, i, r, o) {
                    function a(s, a) {
                        a = a || (a = u(e, s)) && (a.get ? a : a.value), "string" == typeof a && "#" === a[0] && (a = t[a.substring(1)] || a);
                        var h, d = "function" == typeof a, p = a, f = o || d ? a && a.get ? s in t : t[s] : null;
                        o && f || (d && f && (a.base = f), d && r !== !1 && (h = s.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (l[h[3].toLowerCase() + h[4]] = h[2]), p && !d && p.get && "function" == typeof p.get && n.isPlainObject(p) || (p = {
                            value: p,
                            writable: !0
                        }), (u(t, s) || {configurable: !0}).configurable && (p.configurable = !0, p.enumerable = i), c(t, s, p))
                    }

                    var l = {};
                    if (e) {
                        for (var h in e)e.hasOwnProperty(h) && !s.test(h) && a(h);
                        for (var h in l) {
                            var d = l[h], p = t["set" + d], f = t["get" + d] || p && t["is" + d];
                            !f || r !== !0 && 0 !== f.length || a(h, {get: f, set: p})
                        }
                    }
                    return t
                }

                function i(t, e, i) {
                    return t && ("length" in t && !t.getLength && "number" == typeof t.length ? o : a).call(t, e, i = i || t), i
                }

                function r(t, e, i) {
                    for (var n in e)!e.hasOwnProperty(n) || i && i[n] || (t[n] = e[n]);
                    return t
                }

                var s = /^(statics|enumerable|beans|preserve)$/, o = [].forEach || function (t, e) {
                        for (var i = 0, n = this.length; n > i; i++)t.call(e, this[i], i, this)
                    }, a = function (t, e) {
                    for (var i in this)this.hasOwnProperty(i) && t.call(e, this[i], i, this)
                }, l = Object.create || function (t) {
                        return {__proto__: t}
                    }, u = Object.getOwnPropertyDescriptor || function (t, e) {
                        var i = t.__lookupGetter__ && t.__lookupGetter__(e);
                        return i ? {
                                get: i,
                                set: t.__lookupSetter__(e),
                                enumerable: !0,
                                configurable: !0
                            } : t.hasOwnProperty(e) ? {
                                    value: t[e],
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                } : null
                    }, h = Object.defineProperty || function (t, e, i) {
                        return (i.get || i.set) && t.__defineGetter__ ? (i.get && t.__defineGetter__(e, i.get), i.set && t.__defineSetter__(e, i.set)) : t[e] = i.value, t
                    }, c = function (t, e, i) {
                    return delete t[e], h(t, e, i)
                };
                return e(function () {
                    for (var t = 0, e = arguments.length; e > t; t++)r(this, arguments[t])
                }, {
                    inject: function (t) {
                        if (t) {
                            var i = t.statics === !0 ? t : t.statics, n = t.beans, r = t.preserve;
                            i !== t && e(this.prototype, t, t.enumerable, n, r), e(this, i, !0, n, r)
                        }
                        for (var s = 1, o = arguments.length; o > s; s++)this.inject(arguments[s]);
                        return this
                    }, extend: function () {
                        for (var t, i = this, n = 0, r = arguments.length; r > n && !(t = arguments[n].initialize); n++);
                        return t = t || function () {
                                i.apply(this, arguments)
                            }, t.prototype = l(this.prototype), t.base = i, c(t.prototype, "constructor", {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }), e(t, this, !0), arguments.length ? this.inject.apply(t, arguments) : t
                    }
                }, !0).inject({
                    inject: function () {
                        for (var t = 0, i = arguments.length; i > t; t++) {
                            var n = arguments[t];
                            n && e(this, n, n.enumerable, n.beans, n.preserve)
                        }
                        return this
                    }, extend: function () {
                        var t = l(this);
                        return t.inject.apply(t, arguments)
                    }, each: function (t, e) {
                        return i(this, t, e)
                    }, set: function (t) {
                        return r(this, t)
                    }, clone: function () {
                        return new this.constructor(this)
                    }, statics: {
                        each: i, create: l, define: c, describe: u, set: r, clone: function (t) {
                            return r(new t.constructor, t)
                        }, isPlainObject: function (t) {
                            var e = null != t && t.constructor;
                            return e && (e === Object || e === n || "Object" === e.name)
                        }, pick: function (e, i) {
                            return e !== t ? e : i
                        }
                    }
                })
            };
            "undefined" != typeof e && (e.exports = n), n.inject({
                toString: function () {
                    return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + n.each(this, function (t, e) {
                            if (!/^_/.test(e)) {
                                var i = typeof t;
                                this.push(e + ": " + ("number" === i ? u.instance.number(t) : "string" === i ? "'" + t + "'" : t))
                            }
                        }, []).join(", ") + " }"
                }, getClassName: function () {
                    return this._class || ""
                }, exportJSON: function (t) {
                    return n.exportJSON(this, t)
                }, toJSON: function () {
                    return n.serialize(this)
                }, _set: function (e, i, r) {
                    if (e && (r || n.isPlainObject(e))) {
                        var s = e._filtering || e;
                        for (var o in s)if (s.hasOwnProperty(o) && (!i || !i[o])) {
                            var a = e[o];
                            a !== t && (this[o] = a)
                        }
                        return !0
                    }
                }, statics: {
                    exports: {enumerable: !0}, extend: function ot() {
                        var t = ot.base.apply(this, arguments), e = t.prototype._class;
                        return e && !n.exports[e] && (n.exports[e] = t), t
                    }, equals: function (t, e) {
                        function i(t, e) {
                            for (var i in t)if (t.hasOwnProperty(i) && !e.hasOwnProperty(i))return !1;
                            return !0
                        }

                        if (t === e)return !0;
                        if (t && t.equals)return t.equals(e);
                        if (e && e.equals)return e.equals(t);
                        if (Array.isArray(t) && Array.isArray(e)) {
                            if (t.length !== e.length)return !1;
                            for (var r = 0, s = t.length; s > r; r++)if (!n.equals(t[r], e[r]))return !1;
                            return !0
                        }
                        if (t && "object" == typeof t && e && "object" == typeof e) {
                            if (!i(t, e) || !i(e, t))return !1;
                            for (var r in t)if (t.hasOwnProperty(r) && !n.equals(t[r], e[r]))return !1;
                            return !0
                        }
                        return !1
                    }, read: function (e, i, r, s) {
                        if (this === n) {
                            var o = this.peek(e, i);
                            return e.__index++, o
                        }
                        var a = this.prototype, l = a._readIndex, u = i || l && e.__index || 0;
                        s || (s = e.length - u);
                        var h = e[u];
                        return h instanceof this || r && r.readNull && null == h && 1 >= s ? (l && (e.__index = u + 1), h && r && r.clone ? h.clone() : h) : (h = n.create(this.prototype), l && (h.__read = !0), h = h.initialize.apply(h, u > 0 || s < e.length ? Array.prototype.slice.call(e, u, u + s) : e) || h, l && (e.__index = u + h.__read, h.__read = t), h)
                    }, peek: function (t, e) {
                        return t[t.__index = e || t.__index || 0]
                    }, remain: function (t) {
                        return t.length - (t.__index || 0)
                    }, readAll: function (t, e, i) {
                        for (var n, r = [], s = e || 0, o = t.length; o > s; s++)r.push(Array.isArray(n = t[s]) ? this.read(n, 0, i) : this.read(t, s, i, 1));
                        return r
                    }, readNamed: function (e, i, r, s, o) {
                        var a = this.getNamed(e, i), l = a !== t;
                        if (l) {
                            var u = e._filtered;
                            u || (u = e._filtered = n.create(e[0]), u._filtering = e[0]), u[i] = t
                        }
                        return this.read(l ? [a] : e, r, s, o)
                    }, getNamed: function (e, i) {
                        var r = e[0];
                        return e._hasObject === t && (e._hasObject = 1 === e.length && n.isPlainObject(r)), e._hasObject ? i ? r[i] : e._filtered || r : void 0
                    }, hasNamed: function (t, e) {
                        return !!this.getNamed(t, e)
                    }, isPlainValue: function (t, e) {
                        return this.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
                    }, serialize: function (t, e, i, r) {
                        e = e || {};
                        var s, o = !r;
                        if (o && (e.formatter = new u(e.precision), r = {
                                length: 0,
                                definitions: {},
                                references: {},
                                add: function (t, e) {
                                    var i = "#" + t._id, n = this.references[i];
                                    if (!n) {
                                        this.length++;
                                        var r = e.call(t), s = t._class;
                                        s && r[0] !== s && r.unshift(s), this.definitions[i] = r, n = this.references[i] = [i]
                                    }
                                    return n
                                }
                            }), t && t._serialize) {
                            s = t._serialize(e, r);
                            var a = t._class;
                            !a || i || s._compact || s[0] === a || s.unshift(a)
                        } else if (Array.isArray(t)) {
                            s = [];
                            for (var l = 0, h = t.length; h > l; l++)s[l] = n.serialize(t[l], e, i, r);
                            i && (s._compact = !0)
                        } else if (n.isPlainObject(t)) {
                            s = {};
                            for (var l in t)t.hasOwnProperty(l) && (s[l] = n.serialize(t[l], e, i, r))
                        } else s = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                        return o && r.length > 0 ? [["dictionary", r.definitions], s] : s
                    }, deserialize: function (t, e, i) {
                        var r = t, s = !i;
                        if (i = i || {}, Array.isArray(t)) {
                            var o = t[0], a = "dictionary" === o;
                            if (!a) {
                                if (i.dictionary && 1 == t.length && /^#/.test(o))return i.dictionary[o];
                                o = n.exports[o]
                            }
                            r = [];
                            for (var l = o ? 1 : 0, u = t.length; u > l; l++)r.push(n.deserialize(t[l], e, i));
                            if (a) i.dictionary = r[0]; else if (o) {
                                var h = r;
                                e ? r = e(o, h) : (r = n.create(o.prototype), o.apply(r, h))
                            }
                        } else if (n.isPlainObject(t)) {
                            r = {};
                            for (var c in t)r[c] = n.deserialize(t[c], e, i)
                        }
                        return s && t && t.length && "dictionary" === t[0][0] ? r[1] : r
                    }, exportJSON: function (t, e) {
                        var i = n.serialize(t, e);
                        return e && e.asString === !1 ? i : JSON.stringify(i)
                    }, importJSON: function (t, e) {
                        return n.deserialize("string" == typeof t ? JSON.parse(t) : t, function (t, i) {
                            var r = e && e.constructor === t ? e : n.create(t.prototype), s = r === e;
                            if (1 === i.length && r instanceof x && (s || !(r instanceof S))) {
                                var o = i[0];
                                n.isPlainObject(o) && (o.insert = !1)
                            }
                            return t.apply(r, i), s && (e = null), r
                        })
                    }, splice: function (e, i, n, r) {
                        var s = i && i.length, o = n === t;
                        n = o ? e.length : n, n > e.length && (n = e.length);
                        for (var a = 0; s > a; a++)i[a]._index = n + a;
                        if (o)return e.push.apply(e, i), [];
                        var l = [n, r];
                        i && l.push.apply(l, i);
                        for (var u = e.splice.apply(e, l), a = 0, h = u.length; h > a; a++)u[a]._index = t;
                        for (var a = n + s, h = e.length; h > a; a++)e[a]._index = a;
                        return u
                    }, capitalize: function (t) {
                        return t.replace(/\b[a-z]/g, function (t) {
                            return t.toUpperCase()
                        })
                    }, camelize: function (t) {
                        return t.replace(/-(.)/g, function (t, e) {
                            return e.toUpperCase()
                        })
                    }, hyphenate: function (t) {
                        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                    }
                }
            });
            var s = {
                on: function (t, e) {
                    if ("string" != typeof t) n.each(t, function (t, e) {
                        this.on(e, t)
                    }, this); else {
                        var i = this._eventTypes[t];
                        if (i) {
                            var r = this._callbacks = this._callbacks || {};
                            r = r[t] = r[t] || [], -1 === r.indexOf(e) && (r.push(e), i.install && 1 == r.length && i.install.call(this, t))
                        }
                    }
                    return this
                }, off: function (t, e) {
                    if ("string" != typeof t)return void n.each(t, function (t, e) {
                        this.off(e, t)
                    }, this);
                    var i, r = this._eventTypes[t], s = this._callbacks && this._callbacks[t];
                    return r && s && (!e || -1 !== (i = s.indexOf(e)) && 1 === s.length ? (r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : -1 !== i && s.splice(i, 1)), this
                }, once: function (t, e) {
                    return this.on(t, function () {
                        e.apply(this, arguments), this.off(t, e)
                    })
                }, emit: function (t, e) {
                    var i = this._callbacks && this._callbacks[t];
                    if (!i)return !1;
                    for (var n = [].slice.call(arguments, 1), r = 0, s = i.length; s > r; r++)if (i[r].apply(this, n) === !1 && e && e.stop) {
                        e.stop();
                        break
                    }
                    return !0
                }, responds: function (t) {
                    return !(!this._callbacks || !this._callbacks[t])
                }, attach: "#on", detach: "#off", fire: "#emit", _installEvents: function (t) {
                    var e = this._callbacks, i = t ? "install" : "uninstall";
                    for (var n in e)if (e[n].length > 0) {
                        var r = this._eventTypes[n], s = r[i];
                        s && s.call(this, n)
                    }
                }, statics: {
                    inject: function at(t) {
                        var e = t._events;
                        if (e) {
                            var i = {};
                            n.each(e, function (e, r) {
                                var s = "string" == typeof e, o = s ? e : r, a = n.capitalize(o), l = o.substring(2).toLowerCase();
                                i[l] = s ? {} : e, o = "_" + o, t["get" + a] = function () {
                                    return this[o]
                                }, t["set" + a] = function (t) {
                                    var e = this[o];
                                    e && this.off(l, e), t && this.on(l, t), this[o] = t
                                }
                            }), t._eventTypes = i
                        }
                        return at.base.apply(this, arguments)
                    }
                }
            }, o = n.extend({
                _class: "PaperScope", initialize: function lt() {
                    r = this, this.settings = new n({
                        applyMatrix: !0,
                        handleSize: 4,
                        hitTolerance: 0
                    }), this.project = null, this.projects = [], this.tools = [], this.palettes = [], this._id = lt._id++, lt._scopes[this._id] = this;
                    var t = lt.prototype;
                    if (!this.support) {
                        var e = it.getContext(1, 1);
                        t.support = {
                            nativeDash: "setLineDash" in e || "mozDash" in e,
                            nativeBlendModes: nt.nativeModes
                        }, it.release(e)
                    }
                    if (!this.browser) {
                        var i = t.browser = {};
                        navigator.userAgent.toLowerCase().replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:([.\d]+))?/g, function (t, e, n, r, s) {
                            if (!i.chrome) {
                                var o = "opera" === e ? r : n;
                                "trident" === e && (o = s, e = "msie"), i.version = o, i.versionNumber = parseFloat(o), i.name = e, i[e] = !0
                            }
                        }), i.chrome && delete i.webkit, i.atom && delete i.chrome
                    }
                }, version: "0.9.22", getView: function () {
                    return this.project && this.project.getView()
                }, getPaper: function () {
                    return this
                }, execute: function (t, e, i) {
                    r.PaperScript.execute(t, this, e, i), X.updateFocus()
                }, install: function (t) {
                    var e = this;
                    n.each(["project", "view", "tool"], function (i) {
                        n.define(t, i, {
                            configurable: !0, get: function () {
                                return e[i]
                            }
                        })
                    });
                    for (var i in this)!/^_/.test(i) && this[i] && (t[i] = this[i])
                }, setup: function (t) {
                    return r = this, this.project = new w(t), this
                }, activate: function () {
                    r = this
                }, clear: function () {
                    for (var t = this.projects.length - 1; t >= 0; t--)this.projects[t].remove();
                    for (var t = this.tools.length - 1; t >= 0; t--)this.tools[t].remove();
                    for (var t = this.palettes.length - 1; t >= 0; t--)this.palettes[t].remove()
                }, remove: function () {
                    this.clear(), delete o._scopes[this._id]
                }, statics: new function () {
                    function t(t) {
                        return t += "Attribute", function (e, i) {
                            return e[t](i) || e[t]("data-paper-" + i)
                        }
                    }

                    return {
                        _scopes: {}, _id: 0, get: function (t) {
                            return this._scopes[t] || null
                        }, getAttribute: t("get"), hasAttribute: t("has")
                    }
                }
            }), a = n.extend(s, {
                initialize: function (t) {
                    this._scope = r, this._index = this._scope[this._list].push(this) - 1, (t || !this._scope[this._reference]) && this.activate()
                }, activate: function () {
                    if (!this._scope)return !1;
                    var t = this._scope[this._reference];
                    return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
                }, isActive: function () {
                    return this._scope[this._reference] === this
                }, remove: function () {
                    return null == this._index ? !1 : (n.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
                }
            }), u = n.extend({
                initialize: function (t) {
                    this.precision = t || 5, this.multiplier = Math.pow(10, this.precision)
                }, number: function (t) {
                    return Math.round(t * this.multiplier) / this.multiplier
                }, pair: function (t, e, i) {
                    return this.number(t) + (i || ",") + this.number(e)
                }, point: function (t, e) {
                    return this.number(t.x) + (e || ",") + this.number(t.y)
                }, size: function (t, e) {
                    return this.number(t.width) + (e || ",") + this.number(t.height)
                }, rectangle: function (t, e) {
                    return this.point(t, e) + (e || ",") + this.size(t, e)
                }
            });
            u.instance = new u;
            var h = new function () {
                var t = [[.5773502691896257], [0, .7745966692414834], [.33998104358485626, .8611363115940526], [0, .5384693101056831, .906179845938664], [.2386191860831969, .6612093864662645, .932469514203152], [0, .4058451513773972, .7415311855993945, .9491079123427585], [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363], [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261], [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717], [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057], [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192], [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881], [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123], [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854], [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]], e = [[1], [.8888888888888888, .5555555555555556], [.6521451548625461, .34785484513745385], [.5688888888888889, .47862867049936647, .23692688505618908], [.46791393457269104, .3607615730481386, .17132449237917036], [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697], [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626], [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441], [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814], [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366], [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183], [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588], [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186], [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727], [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]], i = Math.abs, n = Math.sqrt, r = Math.pow, s = 1e-6, o = 1e-12, a = 1.12e-16;
                return {
                    TOLERANCE: s, EPSILON: o, MACHINE_EPSILON: a, KAPPA: 4 * (n(2) - 1) / 3, isZero: function (t) {
                        return i(t) <= o
                    }, integrate: function (i, n, r, s) {
                        for (var o = t[s - 2], a = e[s - 2], l = .5 * (r - n), u = l + n, h = 0, c = s + 1 >> 1, d = 1 & s ? a[h++] * i(u) : 0; c > h;) {
                            var p = l * o[h];
                            d += a[h++] * (i(u + p) + i(u - p))
                        }
                        return l * d
                    }, findRoot: function (t, e, n, r, s, o, a) {
                        for (var l = 0; o > l; l++) {
                            var u = t(n), h = u / e(n), c = n - h;
                            if (i(h) < a)return c;
                            u > 0 ? (s = n, n = r >= c ? .5 * (r + s) : c) : (r = n, n = c >= s ? .5 * (r + s) : c)
                        }
                        return n
                    }, solveQuadratic: function (t, e, r, s, o, l) {
                        var u, h, c = 0, d = 1 / 0, p = e;
                        if (e /= 2, h = e * e - t * r, i(h) < a) {
                            var f = Math.pow, g = f(i(t * e * r), 1 / 3);
                            if (1e-8 > g) {
                                var _ = f(10, i(Math.floor(Math.log(g) * Math.LOG10E)));
                                isFinite(_) || (_ = 0), t *= _, e *= _, r *= _, h = e * e - t * r
                            }
                        }
                        if (i(t) < a) {
                            if (i(p) < a)return i(r) < a ? -1 : 0;
                            u = -r / p
                        } else if (h >= -a) {
                            h = 0 > h ? 0 : h;
                            var m = n(h);
                            if (e >= a && a >= e) u = i(t) >= i(r) ? m / t : -r / m, d = -u; else {
                                var v = -(e + (0 > e ? -1 : 1) * m);
                                u = v / t, d = r / v
                            }
                        }
                        return isFinite(u) && (null == o || u >= o && l >= u) && (s[c++] = u), d !== u && isFinite(d) && (null == o || d >= o && l >= d) && (s[c++] = d), c
                    }, solveCubic: function (t, e, s, o, l, u, c) {
                        var d, p, f, g = 0;
                        if (0 === t) t = e, p = s, f = o, d = 1 / 0; else if (0 === o) p = e, f = s, d = 0; else {
                            var _, m, v, y, w, b, x, T = 1 + a;
                            if (d = -(e / t) / 3, x = t * d, p = x + e, f = p * d + s, v = (x + p) * d + f, m = f * d + o, y = m / t, w = r(i(y), 1 / 3), b = 0 > y ? -1 : 1, y = -v / t, w = y > 0 ? 1.3247179572 * Math.max(w, n(y)) : w, _ = d - b * w, _ !== d) {
                                do if (d = _, x = t * d, p = x + e, f = p * d + s, v = (x + p) * d + f, m = f * d + o, _ = 0 === v ? d : d - m / v / T, _ === d) {
                                    d = _;
                                    break
                                } while (b * _ > b * d);
                                i(t) * d * d > i(o / d) && (f = -o / d, p = (f - s) / d)
                            }
                        }
                        var g = h.solveQuadratic(t, p, f, l, u, c);
                        return isFinite(d) && (0 === g || d !== l[g - 1]) && (null == u || d >= u && c >= d) && (l[g++] = d), g
                    }
                }
            }, c = n.extend({
                _class: "Point", _readIndex: !0, initialize: function (t, e) {
                    var i = typeof t;
                    if ("number" === i) {
                        var n = "number" == typeof e;
                        this.x = t, this.y = n ? e : t, this.__read && (this.__read = n ? 2 : 1)
                    } else"undefined" === i || null === t ? (this.x = this.y = 0, this.__read && (this.__read = null === t ? 1 : 0)) : (Array.isArray(t) ? (this.x = t[0], this.y = t.length > 1 ? t[1] : t[0]) : null != t.x ? (this.x = t.x, this.y = t.y) : null != t.width ? (this.x = t.width, this.y = t.height) : null != t.angle ? (this.x = t.length, this.y = 0, this.setAngle(t.angle)) : (this.x = this.y = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1))
                }, set: function (t, e) {
                    return this.x = t, this.y = e, this
                }, equals: function (t) {
                    return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
                }, clone: function () {
                    return new c(this.x, this.y)
                }, toString: function () {
                    var t = u.instance;
                    return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
                }, _serialize: function (t) {
                    var e = t.formatter;
                    return [e.number(this.x), e.number(this.y)]
                }, getLength: function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, setLength: function (t) {
                    if (this.isZero()) {
                        var e = this._angle || 0;
                        this.set(Math.cos(e) * t, Math.sin(e) * t)
                    } else {
                        var i = t / this.getLength();
                        h.isZero(i) && this.getAngle(), this.set(this.x * i, this.y * i)
                    }
                }, getAngle: function () {
                    return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
                }, setAngle: function (t) {
                    this.setAngleInRadians.call(this, t * Math.PI / 180)
                }, getAngleInDegrees: "#getAngle", setAngleInDegrees: "#setAngle", getAngleInRadians: function () {
                    if (arguments.length) {
                        var t = c.read(arguments), e = this.getLength() * t.getLength();
                        if (h.isZero(e))return 0 / 0;
                        var i = this.dot(t) / e;
                        return Math.acos(-1 > i ? -1 : i > 1 ? 1 : i)
                    }
                    return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
                }, setAngleInRadians: function (t) {
                    if (this._angle = t, !this.isZero()) {
                        var e = this.getLength();
                        this.set(Math.cos(t) * e, Math.sin(t) * e)
                    }
                }, getQuadrant: function () {
                    return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
                }
            }, {
                beans: !1, getDirectedAngle: function () {
                    var t = c.read(arguments);
                    return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
                }, getDistance: function () {
                    var t = c.read(arguments), e = t.x - this.x, i = t.y - this.y, r = e * e + i * i, s = n.read(arguments);
                    return s ? r : Math.sqrt(r)
                }, normalize: function (e) {
                    e === t && (e = 1);
                    var i = this.getLength(), n = 0 !== i ? e / i : 0, r = new c(this.x * n, this.y * n);
                    return n >= 0 && (r._angle = this._angle), r
                }, rotate: function (t, e) {
                    if (0 === t)return this.clone();
                    t = t * Math.PI / 180;
                    var i = e ? this.subtract(e) : this, n = Math.sin(t), r = Math.cos(t);
                    return i = new c(i.x * r - i.y * n, i.x * n + i.y * r), e ? i.add(e) : i
                }, transform: function (t) {
                    return t ? t._transformPoint(this) : this
                }, add: function () {
                    var t = c.read(arguments);
                    return new c(this.x + t.x, this.y + t.y)
                }, subtract: function () {
                    var t = c.read(arguments);
                    return new c(this.x - t.x, this.y - t.y)
                }, multiply: function () {
                    var t = c.read(arguments);
                    return new c(this.x * t.x, this.y * t.y)
                }, divide: function () {
                    var t = c.read(arguments);
                    return new c(this.x / t.x, this.y / t.y)
                }, modulo: function () {
                    var t = c.read(arguments);
                    return new c(this.x % t.x, this.y % t.y)
                }, negate: function () {
                    return new c(-this.x, -this.y)
                }, isInside: function () {
                    return g.read(arguments).contains(this)
                }, isClose: function (t, e) {
                    return this.getDistance(t) < e
                }, isColinear: function (t) {
                    return Math.abs(this.cross(t)) < 1e-12
                }, isOrthogonal: function (t) {
                    return Math.abs(this.dot(t)) < 1e-12
                }, isZero: function () {
                    return h.isZero(this.x) && h.isZero(this.y)
                }, isNaN: function () {
                    return isNaN(this.x) || isNaN(this.y)
                }, dot: function () {
                    var t = c.read(arguments);
                    return this.x * t.x + this.y * t.y
                }, cross: function () {
                    var t = c.read(arguments);
                    return this.x * t.y - this.y * t.x
                }, project: function () {
                    var t = c.read(arguments);
                    if (t.isZero())return new c(0, 0);
                    var e = this.dot(t) / t.dot(t);
                    return new c(t.x * e, t.y * e)
                }, statics: {
                    min: function () {
                        var t = c.read(arguments), e = c.read(arguments);
                        return new c(Math.min(t.x, e.x), Math.min(t.y, e.y))
                    }, max: function () {
                        var t = c.read(arguments), e = c.read(arguments);
                        return new c(Math.max(t.x, e.x), Math.max(t.y, e.y))
                    }, random: function () {
                        return new c(Math.random(), Math.random())
                    }
                }
            }, n.each(["round", "ceil", "floor", "abs"], function (t) {
                var e = Math[t];
                this[t] = function () {
                    return new c(e(this.x), e(this.y))
                }
            }, {})), d = c.extend({
                initialize: function (t, e, i, n) {
                    this._x = t, this._y = e, this._owner = i, this._setter = n
                }, set: function (t, e, i) {
                    return this._x = t, this._y = e, i || this._owner[this._setter](this), this
                }, getX: function () {
                    return this._x
                }, setX: function (t) {
                    this._x = t, this._owner[this._setter](this)
                }, getY: function () {
                    return this._y
                }, setY: function (t) {
                    this._y = t, this._owner[this._setter](this)
                }
            }), p = n.extend({
                _class: "Size", _readIndex: !0, initialize: function (t, e) {
                    var i = typeof t;
                    if ("number" === i) {
                        var n = "number" == typeof e;
                        this.width = t, this.height = n ? e : t, this.__read && (this.__read = n ? 2 : 1)
                    } else"undefined" === i || null === t ? (this.width = this.height = 0, this.__read && (this.__read = null === t ? 1 : 0)) : (Array.isArray(t) ? (this.width = t[0], this.height = t.length > 1 ? t[1] : t[0]) : null != t.width ? (this.width = t.width, this.height = t.height) : null != t.x ? (this.width = t.x, this.height = t.y) : (this.width = this.height = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1))
                }, set: function (t, e) {
                    return this.width = t, this.height = e, this
                }, equals: function (t) {
                    return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
                }, clone: function () {
                    return new p(this.width, this.height)
                }, toString: function () {
                    var t = u.instance;
                    return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                }, _serialize: function (t) {
                    var e = t.formatter;
                    return [e.number(this.width), e.number(this.height)]
                }, add: function () {
                    var t = p.read(arguments);
                    return new p(this.width + t.width, this.height + t.height)
                }, subtract: function () {
                    var t = p.read(arguments);
                    return new p(this.width - t.width, this.height - t.height)
                }, multiply: function () {
                    var t = p.read(arguments);
                    return new p(this.width * t.width, this.height * t.height)
                }, divide: function () {
                    var t = p.read(arguments);
                    return new p(this.width / t.width, this.height / t.height)
                }, modulo: function () {
                    var t = p.read(arguments);
                    return new p(this.width % t.width, this.height % t.height)
                }, negate: function () {
                    return new p(-this.width, -this.height)
                }, isZero: function () {
                    return h.isZero(this.width) && h.isZero(this.height)
                }, isNaN: function () {
                    return isNaN(this.width) || isNaN(this.height)
                }, statics: {
                    min: function (t, e) {
                        return new p(Math.min(t.width, e.width), Math.min(t.height, e.height))
                    }, max: function (t, e) {
                        return new p(Math.max(t.width, e.width), Math.max(t.height, e.height))
                    }, random: function () {
                        return new p(Math.random(), Math.random())
                    }
                }
            }, n.each(["round", "ceil", "floor", "abs"], function (t) {
                var e = Math[t];
                this[t] = function () {
                    return new p(e(this.width), e(this.height))
                }
            }, {})), f = p.extend({
                initialize: function (t, e, i, n) {
                    this._width = t, this._height = e, this._owner = i, this._setter = n
                }, set: function (t, e, i) {
                    return this._width = t, this._height = e, i || this._owner[this._setter](this), this
                }, getWidth: function () {
                    return this._width
                }, setWidth: function (t) {
                    this._width = t, this._owner[this._setter](this)
                }, getHeight: function () {
                    return this._height
                }, setHeight: function (t) {
                    this._height = t, this._owner[this._setter](this)
                }
            }), g = n.extend({
                _class: "Rectangle", _readIndex: !0, beans: !0, initialize: function (e, i, r, s) {
                    var o = typeof e, a = 0;
                    if ("number" === o ? (this.x = e, this.y = i, this.width = r, this.height = s, a = 4) : "undefined" === o || null === e ? (this.x = this.y = this.width = this.height = 0, a = null === e ? 1 : 0) : 1 === arguments.length && (Array.isArray(e) ? (this.x = e[0], this.y = e[1], this.width = e[2], this.height = e[3], a = 1) : e.x !== t || e.width !== t ? (this.x = e.x || 0, this.y = e.y || 0, this.width = e.width || 0, this.height = e.height || 0, a = 1) : e.from === t && e.to === t && (this.x = this.y = this.width = this.height = 0, this._set(e), a = 1)), !a) {
                        var l = c.readNamed(arguments, "from"), u = n.peek(arguments);
                        if (this.x = l.x, this.y = l.y, u && u.x !== t || n.hasNamed(arguments, "to")) {
                            var h = c.readNamed(arguments, "to");
                            this.width = h.x - l.x, this.height = h.y - l.y, this.width < 0 && (this.x = h.x, this.width = -this.width), this.height < 0 && (this.y = h.y, this.height = -this.height)
                        } else {
                            var d = p.read(arguments);
                            this.width = d.width, this.height = d.height
                        }
                        a = arguments.__index
                    }
                    this.__read && (this.__read = a)
                }, set: function (t, e, i, n) {
                    return this.x = t, this.y = e, this.width = i, this.height = n, this
                }, clone: function () {
                    return new g(this.x, this.y, this.width, this.height)
                }, equals: function (t) {
                    var e = n.isPlainValue(t) ? g.read(arguments) : t;
                    return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
                }, toString: function () {
                    var t = u.instance;
                    return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                }, _serialize: function (t) {
                    var e = t.formatter;
                    return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
                }, getPoint: function (t) {
                    var e = t ? c : d;
                    return new e(this.x, this.y, this, "setPoint")
                }, setPoint: function () {
                    var t = c.read(arguments);
                    this.x = t.x, this.y = t.y
                }, getSize: function (t) {
                    var e = t ? p : f;
                    return new e(this.width, this.height, this, "setSize")
                }, setSize: function () {
                    var t = p.read(arguments);
                    this._fixX && (this.x += (this.width - t.width) * this._fixX), this._fixY && (this.y += (this.height - t.height) * this._fixY), this.width = t.width, this.height = t.height, this._fixW = 1, this._fixH = 1
                }, getLeft: function () {
                    return this.x
                }, setLeft: function (t) {
                    this._fixW || (this.width -= t - this.x), this.x = t, this._fixX = 0
                }, getTop: function () {
                    return this.y
                }, setTop: function (t) {
                    this._fixH || (this.height -= t - this.y), this.y = t, this._fixY = 0
                }, getRight: function () {
                    return this.x + this.width
                }, setRight: function (e) {
                    this._fixX !== t && 1 !== this._fixX && (this._fixW = 0), this._fixW ? this.x = e - this.width : this.width = e - this.x, this._fixX = 1
                }, getBottom: function () {
                    return this.y + this.height
                }, setBottom: function (e) {
                    this._fixY !== t && 1 !== this._fixY && (this._fixH = 0), this._fixH ? this.y = e - this.height : this.height = e - this.y, this._fixY = 1
                }, getCenterX: function () {
                    return this.x + .5 * this.width
                }, setCenterX: function (t) {
                    this.x = t - .5 * this.width, this._fixX = .5
                }, getCenterY: function () {
                    return this.y + .5 * this.height
                }, setCenterY: function (t) {
                    this.y = t - .5 * this.height, this._fixY = .5
                }, getCenter: function (t) {
                    var e = t ? c : d;
                    return new e(this.getCenterX(), this.getCenterY(), this, "setCenter")
                }, setCenter: function () {
                    var t = c.read(arguments);
                    return this.setCenterX(t.x), this.setCenterY(t.y), this
                }, getArea: function () {
                    return this.width * this.height
                }, isEmpty: function () {
                    return 0 === this.width || 0 === this.height
                }, contains: function (e) {
                    return e && e.width !== t || 4 == (Array.isArray(e) ? e : arguments).length ? this._containsRectangle(g.read(arguments)) : this._containsPoint(c.read(arguments))
                }, _containsPoint: function (t) {
                    var e = t.x, i = t.y;
                    return e >= this.x && i >= this.y && e <= this.x + this.width && i <= this.y + this.height
                }, _containsRectangle: function (t) {
                    var e = t.x, i = t.y;
                    return e >= this.x && i >= this.y && e + t.width <= this.x + this.width && i + t.height <= this.y + this.height
                }, intersects: function () {
                    var t = g.read(arguments);
                    return t.x + t.width > this.x && t.y + t.height > this.y && t.x < this.x + this.width && t.y < this.y + this.height
                }, touches: function () {
                    var t = g.read(arguments);
                    return t.x + t.width >= this.x && t.y + t.height >= this.y && t.x <= this.x + this.width && t.y <= this.y + this.height
                }, intersect: function () {
                    var t = g.read(arguments), e = Math.max(this.x, t.x), i = Math.max(this.y, t.y), n = Math.min(this.x + this.width, t.x + t.width), r = Math.min(this.y + this.height, t.y + t.height);
                    return new g(e, i, n - e, r - i)
                }, unite: function () {
                    var t = g.read(arguments), e = Math.min(this.x, t.x), i = Math.min(this.y, t.y), n = Math.max(this.x + this.width, t.x + t.width), r = Math.max(this.y + this.height, t.y + t.height);
                    return new g(e, i, n - e, r - i)
                }, include: function () {
                    var t = c.read(arguments), e = Math.min(this.x, t.x), i = Math.min(this.y, t.y), n = Math.max(this.x + this.width, t.x), r = Math.max(this.y + this.height, t.y);
                    return new g(e, i, n - e, r - i)
                }, expand: function () {
                    var t = p.read(arguments), e = t.width, i = t.height;
                    return new g(this.x - e / 2, this.y - i / 2, this.width + e, this.height + i)
                }, scale: function (e, i) {
                    return this.expand(this.width * e - this.width, this.height * (i === t ? e : i) - this.height)
                }
            }, n.each([["Top", "Left"], ["Top", "Right"], ["Bottom", "Left"], ["Bottom", "Right"], ["Left", "Center"], ["Top", "Center"], ["Right", "Center"], ["Bottom", "Center"]], function (t, e) {
                var i = t.join(""), n = /^[RL]/.test(i);
                e >= 4 && (t[1] += n ? "Y" : "X");
                var r = t[n ? 0 : 1], s = t[n ? 1 : 0], o = "get" + r, a = "get" + s, l = "set" + r, u = "set" + s, h = "get" + i, p = "set" + i;
                this[h] = function (t) {
                    var e = t ? c : d;
                    return new e(this[o](), this[a](), this, p)
                }, this[p] = function () {
                    var t = c.read(arguments);
                    this[l](t.x), this[u](t.y)
                }
            }, {beans: !0})), _ = g.extend({
                initialize: function (t, e, i, n, r, s) {
                    this.set(t, e, i, n, !0), this._owner = r, this._setter = s
                }, set: function (t, e, i, n, r) {
                    return this._x = t, this._y = e, this._width = i, this._height = n, r || this._owner[this._setter](this), this
                }
            }, new function () {
                var t = g.prototype;
                return n.each(["x", "y", "width", "height"], function (t) {
                    var e = n.capitalize(t), i = "_" + t;
                    this["get" + e] = function () {
                        return this[i]
                    }, this["set" + e] = function (t) {
                        this[i] = t, this._dontNotify || this._owner[this._setter](this)
                    }
                }, n.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function (e) {
                    var i = "set" + e;
                    this[i] = function () {
                        this._dontNotify = !0, t[i].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                    }
                }, {
                    isSelected: function () {
                        return this._owner._boundsSelected
                    }, setSelected: function (t) {
                        var e = this._owner;
                        e.setSelected && (e._boundsSelected = t, e.setSelected(t || e._selectedSegmentState > 0))
                    }
                }))
            }), v = n.extend({
                _class: "Matrix", initialize: function ut(t) {
                    var e = arguments.length, i = !0;
                    if (6 === e ? this.set.apply(this, arguments) : 1 === e ? t instanceof ut ? this.set(t._a, t._c, t._b, t._d, t._tx, t._ty) : Array.isArray(t) ? this.set.apply(this, t) : i = !1 : 0 === e ? this.reset() : i = !1, !i)throw new Error("Unsupported matrix parameters")
                }, set: function (t, e, i, n, r, s, o) {
                    return this._a = t, this._c = e, this._b = i, this._d = n, this._tx = r, this._ty = s, o || this._changed(), this
                }, _serialize: function (t) {
                    return n.serialize(this.getValues(), t)
                }, _changed: function () {
                    var t = this._owner;
                    t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
                }, clone: function () {
                    return new v(this._a, this._c, this._b, this._d, this._tx, this._ty)
                }, equals: function (t) {
                    return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty || !1
                }, toString: function () {
                    var t = u.instance;
                    return "[[" + [t.number(this._a), t.number(this._b), t.number(this._tx)].join(", ") + "], [" + [t.number(this._c), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
                }, reset: function (t) {
                    return this._a = this._d = 1, this._c = this._b = this._tx = this._ty = 0, t || this._changed(), this
                }, apply: function (t, e) {
                    var i = this._owner;
                    return i ? (i.transform(null, !0, n.pick(t, !0), e), this.isIdentity()) : !1
                }, translate: function () {
                    var t = c.read(arguments), e = t.x, i = t.y;
                    return this._tx += e * this._a + i * this._b, this._ty += e * this._c + i * this._d, this._changed(), this
                }, scale: function () {
                    var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0});
                    return e && this.translate(e), this._a *= t.x, this._c *= t.x, this._b *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
                }, rotate: function (t) {
                    t *= Math.PI / 180;
                    var e = c.read(arguments, 1), i = e.x, n = e.y, r = Math.cos(t), s = Math.sin(t), o = i - i * r + n * s, a = n - i * s - n * r, l = this._a, u = this._b, h = this._c, d = this._d;
                    return this._a = r * l + s * u, this._b = -s * l + r * u, this._c = r * h + s * d, this._d = -s * h + r * d, this._tx += o * l + a * u, this._ty += o * h + a * d, this._changed(), this
                }, shear: function () {
                    var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0});
                    e && this.translate(e);
                    var i = this._a, n = this._c;
                    return this._a += t.y * this._b, this._c += t.y * this._d, this._b += t.x * i, this._d += t.x * n, e && this.translate(e.negate()), this._changed(), this
                }, skew: function () {
                    var t = c.read(arguments), e = c.read(arguments, 0, {readNull: !0}), i = Math.PI / 180, n = new c(Math.tan(t.x * i), Math.tan(t.y * i));
                    return this.shear(n, e)
                }, concatenate: function (t) {
                    var e = this._a, i = this._b, n = this._c, r = this._d, s = t._a, o = t._b, a = t._c, l = t._d, u = t._tx, h = t._ty;
                    return this._a = s * e + a * i, this._b = o * e + l * i, this._c = s * n + a * r, this._d = o * n + l * r, this._tx += u * e + h * i, this._ty += u * n + h * r, this._changed(), this
                }, preConcatenate: function (t) {
                    var e = this._a, i = this._b, n = this._c, r = this._d, s = this._tx, o = this._ty, a = t._a, l = t._b, u = t._c, h = t._d, c = t._tx, d = t._ty;
                    return this._a = a * e + l * n, this._b = a * i + l * r, this._c = u * e + h * n, this._d = u * i + h * r, this._tx = a * s + l * o + c, this._ty = u * s + h * o + d, this._changed(), this
                }, chain: function (t) {
                    var e = this._a, i = this._b, n = this._c, r = this._d, s = this._tx, o = this._ty, a = t._a, l = t._b, u = t._c, h = t._d, c = t._tx, d = t._ty;
                    return new v(a * e + u * i, a * n + u * r, l * e + h * i, l * n + h * r, s + c * e + d * i, o + c * n + d * r)
                }, isIdentity: function () {
                    return 1 === this._a && 0 === this._c && 0 === this._b && 1 === this._d && 0 === this._tx && 0 === this._ty
                }, orNullIfIdentity: function () {
                    return this.isIdentity() ? null : this
                }, isInvertible: function () {
                    return !!this._getDeterminant()
                }, isSingular: function () {
                    return !this._getDeterminant()
                }, transform: function (t, e, i) {
                    return arguments.length < 3 ? this._transformPoint(c.read(arguments)) : this._transformCoordinates(t, e, i)
                }, _transformPoint: function (t, e, i) {
                    var n = t.x, r = t.y;
                    return e || (e = new c), e.set(n * this._a + r * this._b + this._tx, n * this._c + r * this._d + this._ty, i)
                }, _transformCoordinates: function (t, e, i) {
                    for (var n = 0, r = 0, s = 2 * i; s > n;) {
                        var o = t[n++], a = t[n++];
                        e[r++] = o * this._a + a * this._b + this._tx, e[r++] = o * this._c + a * this._d + this._ty
                    }
                    return e
                }, _transformCorners: function (t) {
                    var e = t.x, i = t.y, n = e + t.width, r = i + t.height, s = [e, i, n, i, n, r, e, r];
                    return this._transformCoordinates(s, s, 4)
                }, _transformBounds: function (t, e, i) {
                    for (var n = this._transformCorners(t), r = n.slice(0, 2), s = n.slice(), o = 2; 8 > o; o++) {
                        var a = n[o], l = 1 & o;
                        a < r[l] ? r[l] = a : a > s[l] && (s[l] = a)
                    }
                    return e || (e = new g), e.set(r[0], r[1], s[0] - r[0], s[1] - r[1], i)
                }, inverseTransform: function () {
                    return this._inverseTransform(c.read(arguments))
                }, _getDeterminant: function () {
                    var t = this._a * this._d - this._b * this._c;
                    return isFinite(t) && !h.isZero(t) && isFinite(this._tx) && isFinite(this._ty) ? t : null
                }, _inverseTransform: function (t, e, i) {
                    var n = this._getDeterminant();
                    if (!n)return null;
                    var r = t.x - this._tx, s = t.y - this._ty;
                    return e || (e = new c), e.set((r * this._d - s * this._b) / n, (s * this._a - r * this._c) / n, i)
                }, decompose: function () {
                    var t = this._a, e = this._b, i = this._c, n = this._d;
                    if (h.isZero(t * n - e * i))return null;
                    var r = Math.sqrt(t * t + e * e);
                    t /= r, e /= r;
                    var s = t * i + e * n;
                    i -= t * s, n -= e * s;
                    var o = Math.sqrt(i * i + n * n);
                    return i /= o, n /= o, s /= o, e * i > t * n && (t = -t, e = -e, s = -s, r = -r), {
                        scaling: new c(r, o),
                        rotation: 180 * -Math.atan2(e, t) / Math.PI,
                        shearing: s
                    }
                }, getValues: function () {
                    return [this._a, this._c, this._b, this._d, this._tx, this._ty]
                }, getTranslation: function () {
                    return new c(this._tx, this._ty)
                }, getScaling: function () {
                    return (this.decompose() || {}).scaling
                }, getRotation: function () {
                    return (this.decompose() || {}).rotation
                }, inverted: function () {
                    var t = this._getDeterminant();
                    return t && new v(this._d / t, -this._c / t, -this._b / t, this._a / t, (this._b * this._ty - this._d * this._tx) / t, (this._c * this._tx - this._a * this._ty) / t)
                }, shiftless: function () {
                    return new v(this._a, this._c, this._b, this._d, 0, 0)
                }, applyToContext: function (t) {
                    t.transform(this._a, this._c, this._b, this._d, this._tx, this._ty)
                }
            }, n.each(["a", "c", "b", "d", "tx", "ty"], function (t) {
                var e = n.capitalize(t), i = "_" + t;
                this["get" + e] = function () {
                    return this[i]
                }, this["set" + e] = function (t) {
                    this[i] = t, this._changed()
                }
            }, {})), y = n.extend({
                _class: "Line", initialize: function (t, e, i, n, r) {
                    var s = !1;
                    arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = i, this._vy = n, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = i), s || (this._vx -= this._px, this._vy -= this._py)
                }, getPoint: function () {
                    return new c(this._px, this._py)
                }, getVector: function () {
                    return new c(this._vx, this._vy)
                }, getLength: function () {
                    return this.getVector().getLength()
                }, intersect: function (t, e) {
                    return y.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
                }, getSide: function (t) {
                    return y.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
                }, getDistance: function (t) {
                    return Math.abs(y.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0))
                }, statics: {
                    intersect: function (t, e, i, n, r, s, o, a, l, u) {
                        l || (i -= t, n -= e, o -= r, a -= s);
                        var d = i * a - n * o;
                        if (!h.isZero(d)) {
                            var p = t - r, f = e - s, g = (o * f - a * p) / d, _ = (i * f - n * p) / d;
                            if (u || g >= 0 && 1 >= g && _ >= 0 && 1 >= _)return new c(t + g * i, e + g * n)
                        }
                    }, getSide: function (t, e, i, n, r, s, o) {
                        o || (i -= t, n -= e);
                        var a = r - t, l = s - e, u = a * n - l * i;
                        return 0 === u && (u = a * i + l * n, u > 0 && (a -= i, l -= n, u = a * i + l * n, 0 > u && (u = 0))), 0 > u ? -1 : u > 0 ? 1 : 0
                    }, getSignedDistance: function (t, e, i, n, r, s, o) {
                        return o || (i -= t, n -= e), h.isZero(i) ? n >= 0 ? t - r : r - t : h.isZero(n) ? i >= 0 ? s - e : e - s : (i * (s - e) - n * (r - t)) / Math.sqrt(i * i + n * n)
                    }
                }
            }), w = a.extend({
                _class: "Project", _list: "projects", _reference: "project", initialize: function (t) {
                    a.call(this, !0), this.layers = [], this._activeLayer = null, this.symbols = [], this._currentStyle = new W(null, null, this), this._view = X.create(this, t || it.getCanvas(1, 1)), this._selectedItems = {}, this._selectedItemCount = 0, this._updateVersion = 0
                }, _serialize: function (t, e) {
                    return n.serialize(this.layers, t, !0, e)
                }, clear: function () {
                    for (var t = this.layers.length - 1; t >= 0; t--)this.layers[t].remove();
                    this.symbols = []
                }, isEmpty: function () {
                    return 0 === this.layers.length
                }, remove: function ht() {
                    return ht.base.call(this) ? (this._view && this._view.remove(), !0) : !1
                }, getView: function () {
                    return this._view
                }, getCurrentStyle: function () {
                    return this._currentStyle
                }, setCurrentStyle: function (t) {
                    this._currentStyle.initialize(t)
                }, getIndex: function () {
                    return this._index
                }, getOptions: function () {
                    return this._scope.settings
                }, getActiveLayer: function () {
                    return this._activeLayer || new S({project: this})
                }, getSelectedItems: function () {
                    var t = [];
                    for (var e in this._selectedItems) {
                        var i = this._selectedItems[e];
                        i.isInserted() && t.push(i)
                    }
                    return t
                }, insertChild: function (t, e, i) {
                    return e instanceof S ? (e._remove(!1, !0), n.splice(this.layers, [e], t, 0), e._setProject(this, !0), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)) : e instanceof x ? (this._activeLayer || this.insertChild(t, new S(x.NO_INSERT))).insertChild(t, e, i) : e = null, e
                }, addChild: function (e, i) {
                    return this.insertChild(t, e, i)
                }, _updateSelection: function (t) {
                    var e = t._id, i = this._selectedItems;
                    t._selected ? i[e] !== t && (this._selectedItemCount++, i[e] = t) : i[e] === t && (this._selectedItemCount--, delete i[e])
                }, selectAll: function () {
                    for (var t = this.layers, e = 0, i = t.length; i > e; e++)t[e].setFullySelected(!0)
                }, deselectAll: function () {
                    var t = this._selectedItems;
                    for (var e in t)t[e].setFullySelected(!1)
                }, hitTest: function () {
                    for (var t = c.read(arguments), e = O.getOptions(n.read(arguments)), i = this.layers.length - 1; i >= 0; i--) {
                        var r = this.layers[i]._hitTest(t, e);
                        if (r)return r
                    }
                    return null
                }, getItems: function (t) {
                    return x._getItems(this.layers, t)
                }, getItem: function (t) {
                    return x._getItems(this.layers, t, null, null, !0)[0] || null
                }, importJSON: function (t) {
                    this.activate();
                    var e = this._activeLayer;
                    return n.importJSON(t, e && e.isEmpty() && e)
                }, draw: function (t, e, i) {
                    this._updateVersion++, t.save(), e.applyToContext(t);
                    for (var r = new n({
                        offset: new c(0, 0),
                        pixelRatio: i,
                        viewMatrix: e.isIdentity() ? null : e,
                        matrices: [new v],
                        updateMatrix: !0
                    }), s = 0, o = this.layers, a = o.length; a > s; s++)o[s].draw(t, r);
                    if (t.restore(), this._selectedItemCount > 0) {
                        t.save(), t.strokeWidth = 1;
                        var l = this._selectedItems, u = this._scope.settings.handleSize, h = this._updateVersion;
                        for (var d in l)l[d]._drawSelection(t, e, u, l, h);
                        t.restore()
                    }
                }
            }), b = n.extend({
                _class: "Symbol", initialize: function ct(t, e) {
                    this._id = ct._id = (ct._id || 0) + 1, this.project = r.project, this.project.symbols.push(this), t && this.setDefinition(t, e)
                }, _serialize: function (t, e) {
                    return e.add(this, function () {
                        return n.serialize([this._class, this._definition], t, !1, e)
                    })
                }, _changed: function (t) {
                    8 & t && x._clearBoundsCache(this), 1 & t && (this.project._needsUpdate = !0)
                }, getDefinition: function () {
                    return this._definition
                }, setDefinition: function (t, e) {
                    t._parentSymbol && (t = t.clone()), this._definition && (this._definition._parentSymbol = null), this._definition = t, t.remove(), t.setSelected(!1), e || t.setPosition(new c), t._parentSymbol = this, this._changed(9)
                }, place: function (t) {
                    return new A(this, t)
                }, clone: function () {
                    return new b(this._definition.clone(!1))
                }, equals: function (t) {
                    return t === this || t && this.definition.equals(t.definition) || !1
                }
            }), x = n.extend(s, {
                statics: {
                    extend: function dt(t) {
                        return t._serializeFields && (t._serializeFields = new n(this.prototype._serializeFields, t._serializeFields)), dt.base.apply(this, arguments)
                    }, NO_INSERT: {insert: !1}
                },
                _class: "Item",
                _applyMatrix: !0,
                _canApplyMatrix: !0,
                _boundsSelected: !1,
                _selectChildren: !1,
                _serializeFields: {
                    name: null,
                    applyMatrix: null,
                    matrix: new v,
                    pivot: null,
                    locked: !1,
                    visible: !0,
                    blendMode: "normal",
                    opacity: 1,
                    guide: !1,
                    selected: !1,
                    clipMask: !1,
                    data: {}
                },
                initialize: function () {
                },
                _initialize: function (t, e) {
                    var i = t && n.isPlainObject(t), s = i && t.internal === !0, o = this._matrix = new v, a = i && t.project || r.project;
                    return s || (this._id = x._id = (x._id || 0) + 1), this._applyMatrix = this._canApplyMatrix && r.settings.applyMatrix, e && o.translate(e), o._owner = this, this._style = new W(a._currentStyle, this, a), this._project || (s || i && t.insert === !1 ? this._setProject(a) : i && t.parent ? this.setParent(t.parent) : (a._activeLayer || new S).addChild(this)), i && t !== x.NO_INSERT && this._set(t, {
                        insert: !0,
                        parent: !0
                    }, !0), i
                },
                _events: new function () {
                    var t = {
                        mousedown: {mousedown: 1, mousedrag: 1, click: 1, doubleclick: 1},
                        mouseup: {mouseup: 1, mousedrag: 1, click: 1, doubleclick: 1},
                        mousemove: {mousedrag: 1, mousemove: 1, mouseenter: 1, mouseleave: 1}
                    }, e = {
                        install: function (e) {
                            var i = this.getView()._eventCounters;
                            if (i)for (var n in t)i[n] = (i[n] || 0) + (t[n][e] || 0)
                        }, uninstall: function (e) {
                            var i = this.getView()._eventCounters;
                            if (i)for (var n in t)i[n] -= t[n][e] || 0
                        }
                    };
                    return n.each(["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"], function (t) {
                        this[t] = e
                    }, {
                        onFrame: {
                            install: function () {
                                this._animateItem(!0)
                            }, uninstall: function () {
                                this._animateItem(!1)
                            }
                        }, onLoad: {}
                    })
                },
                _animateItem: function (t) {
                    this.getView()._animateItem(this, t)
                },
                _serialize: function (t, e) {
                    function i(i) {
                        for (var o in i) {
                            var a = s[o];
                            n.equals(a, "leading" === o ? 1.2 * i.fontSize : i[o]) || (r[o] = n.serialize(a, t, "data" !== o, e))
                        }
                    }

                    var r = {}, s = this;
                    return i(this._serializeFields), this instanceof T || i(this._style._defaults), [this._class, r]
                },
                _changed: function (e) {
                    var i = this._parentSymbol, n = this._parent || i, r = this._project;
                    if (8 & e && (this._bounds = this._position = this._decomposed = this._globalMatrix = this._currentPath = t), n && 40 & e && x._clearBoundsCache(n), 2 & e && x._clearBoundsCache(this), r && (1 & e && (r._needsUpdate = !0), r._changes)) {
                        var s = r._changesById[this._id];
                        s ? s.flags |= e : (s = {
                                item: this,
                                flags: e
                            }, r._changesById[this._id] = s, r._changes.push(s))
                    }
                    i && i._changed(e)
                },
                set: function (t) {
                    return t && this._set(t), this
                },
                getId: function () {
                    return this._id
                },
                getName: function () {
                    return this._name
                },
                setName: function (e, i) {
                    if (this._name && this._removeNamed(), e === +e + "")throw new Error("Names consisting only of numbers are not supported.");
                    var n = this._parent;
                    if (e && n) {
                        for (var r = n._children, s = n._namedChildren, o = e, a = 1; i && r[e];)e = o + " " + a++;
                        (s[e] = s[e] || []).push(this), r[e] = this
                    }
                    this._name = e || t, this._changed(128)
                },
                getStyle: function () {
                    return this._style
                },
                setStyle: function (t) {
                    this.getStyle().set(t)
                }
            }, n.each(["locked", "visible", "blendMode", "opacity", "guide"], function (t) {
                var e = n.capitalize(t), t = "_" + t;
                this["get" + e] = function () {
                    return this[t]
                }, this["set" + e] = function (e) {
                    e != this[t] && (this[t] = e, this._changed("_locked" === t ? 128 : 129))
                }
            }, {}), {
                beans: !0,
                _locked: !1,
                _visible: !0,
                _blendMode: "normal",
                _opacity: 1,
                _guide: !1,
                isSelected: function () {
                    if (this._selectChildren)for (var t = this._children, e = 0, i = t.length; i > e; e++)if (t[e].isSelected())return !0;
                    return this._selected
                },
                setSelected: function (t, e) {
                    if (!e && this._selectChildren)for (var i = this._children, n = 0, r = i.length; r > n; n++)i[n].setSelected(t);
                    (t = !!t) ^ this._selected && (this._selected = t, this._project._updateSelection(this), this._changed(129))
                },
                _selected: !1,
                isFullySelected: function () {
                    var t = this._children;
                    if (t && this._selected) {
                        for (var e = 0, i = t.length; i > e; e++)if (!t[e].isFullySelected())return !1;
                        return !0
                    }
                    return this._selected
                },
                setFullySelected: function (t) {
                    var e = this._children;
                    if (e)for (var i = 0, n = e.length; n > i; i++)e[i].setFullySelected(t);
                    this.setSelected(t, !0)
                },
                isClipMask: function () {
                    return this._clipMask
                },
                setClipMask: function (t) {
                    this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024))
                },
                _clipMask: !1,
                getData: function () {
                    return this._data || (this._data = {}), this._data
                },
                setData: function (t) {
                    this._data = t
                },
                getPosition: function (t) {
                    var e = this._position, i = t ? c : d;
                    if (!e) {
                        var n = this._pivot;
                        e = this._position = n ? this._matrix._transformPoint(n) : this.getBounds().getCenter(!0)
                    }
                    return new i(e.x, e.y, this, "setPosition")
                },
                setPosition: function () {
                    this.translate(c.read(arguments).subtract(this.getPosition(!0)))
                },
                getPivot: function (t) {
                    var e = this._pivot;
                    if (e) {
                        var i = t ? c : d;
                        e = new i(e.x, e.y, this, "setPivot")
                    }
                    return e
                },
                setPivot: function () {
                    this._pivot = c.read(arguments), this._position = t
                },
                _pivot: null,
                getRegistration: "#getPivot",
                setRegistration: "#setPivot"
            }, n.each(["bounds", "strokeBounds", "handleBounds", "roughBounds", "internalBounds", "internalRoughBounds"], function (t) {
                var e = "get" + n.capitalize(t), i = t.match(/^internal(.*)$/), r = i ? "get" + i[1] : null;
                this[e] = function (i) {
                    var n = this._boundsGetter, s = !r && ("string" == typeof n ? n : n && n[e]) || e, o = this._getCachedBounds(s, i, this, r);
                    return "bounds" === t ? new _(o.x, o.y, o.width, o.height, this, "setBounds") : o
                }
            }, {
                beans: !0, _getBounds: function (t, e, i) {
                    var n = this._children;
                    if (!n || 0 == n.length)return new g;
                    for (var r = 1 / 0, s = -r, o = r, a = s, l = 0, u = n.length; u > l; l++) {
                        var h = n[l];
                        if (h._visible && !h.isEmpty()) {
                            var c = h._getCachedBounds(t, e && e.chain(h._matrix), i);
                            r = Math.min(c.x, r), o = Math.min(c.y, o), s = Math.max(c.x + c.width, s), a = Math.max(c.y + c.height, a)
                        }
                    }
                    return isFinite(r) ? new g(r, o, s - r, a - o) : new g
                }, setBounds: function () {
                    var t = g.read(arguments), e = this.getBounds(), i = new v, n = t.getCenter();
                    i.translate(n), (t.width != e.width || t.height != e.height) && i.scale(0 != e.width ? t.width / e.width : 1, 0 != e.height ? t.height / e.height : 1), n = e.getCenter(), i.translate(-n.x, -n.y), this.transform(i)
                }, _getCachedBounds: function (t, e, i, n) {
                    e = e && e.orNullIfIdentity();
                    var r = n ? null : this._matrix.orNullIfIdentity(), s = (!e || e.equals(r)) && t, o = this._parent || this._parentSymbol;
                    if (o) {
                        var a = i._id, l = o._boundsCache = o._boundsCache || {ids: {}, list: []};
                        l.ids[a] || (l.list.push(i), l.ids[a] = i)
                    }
                    if (s && this._bounds && this._bounds[s])return this._bounds[s].clone();
                    var u = this._getBounds(n || t, e || r, i);
                    if (s) {
                        this._bounds || (this._bounds = {});
                        var h = this._bounds[s] = u.clone();
                        h._internal = !!n
                    }
                    return u
                }, statics: {
                    _clearBoundsCache: function (e) {
                        var i = e._boundsCache;
                        if (i) {
                            e._bounds = e._position = e._boundsCache = t;
                            for (var n = 0, r = i.list, s = r.length; s > n; n++) {
                                var o = r[n];
                                o !== e && (o._bounds = o._position = t, o._boundsCache && x._clearBoundsCache(o))
                            }
                        }
                    }
                }
            }), {
                beans: !0, _decompose: function () {
                    return this._decomposed = this._matrix.decompose()
                }, getRotation: function () {
                    var t = this._decomposed || this._decompose();
                    return t && t.rotation
                }, setRotation: function (t) {
                    var e = this.getRotation();
                    if (null != e && null != t) {
                        var i = this._decomposed;
                        this.rotate(t - e), i.rotation = t, this._decomposed = i
                    }
                }, getScaling: function (t) {
                    var e = this._decomposed || this._decompose(), i = e && e.scaling, n = t ? c : d;
                    return i && new n(i.x, i.y, this, "setScaling")
                }, setScaling: function () {
                    var t = this.getScaling();
                    if (t) {
                        var e = c.read(arguments, 0, {clone: !0}), i = this._decomposed;
                        this.scale(e.x / t.x, e.y / t.y), i.scaling = e, this._decomposed = i
                    }
                }, getMatrix: function () {
                    return this._matrix
                }, setMatrix: function (t) {
                    this._matrix.initialize(t), this._applyMatrix ? this.transform(null, !0) : this._changed(9)
                }, getGlobalMatrix: function (t) {
                    var e = this._globalMatrix, i = this._project._updateVersion;
                    if (e && e._updateVersion !== i && (e = null), !e) {
                        e = this._globalMatrix = this._matrix.clone();
                        var n = this._parent;
                        n && e.preConcatenate(n.getGlobalMatrix(!0)), e._updateVersion = i
                    }
                    return t ? e : e.clone()
                }, getApplyMatrix: function () {
                    return this._applyMatrix
                }, setApplyMatrix: function (t) {
                    (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
                }, getTransformContent: "#getApplyMatrix", setTransformContent: "#setApplyMatrix"
            }, {
                getProject: function () {
                    return this._project
                }, _setProject: function (t, e) {
                    if (this._project !== t) {
                        this._project && this._installEvents(!1), this._project = t;
                        for (var i = this._children, n = 0, r = i && i.length; r > n; n++)i[n]._setProject(t);
                        e = !0
                    }
                    e && this._installEvents(!0)
                }, getView: function () {
                    return this._project.getView()
                }, _installEvents: function pt(t) {
                    pt.base.call(this, t);
                    for (var e = this._children, i = 0, n = e && e.length; n > i; i++)e[i]._installEvents(t)
                }, getLayer: function () {
                    for (var t = this; t = t._parent;)if (t instanceof S)return t;
                    return null
                }, getParent: function () {
                    return this._parent
                }, setParent: function (t) {
                    return t.addChild(this)
                }, getChildren: function () {
                    return this._children
                }, setChildren: function (t) {
                    this.removeChildren(), this.addChildren(t)
                }, getFirstChild: function () {
                    return this._children && this._children[0] || null
                }, getLastChild: function () {
                    return this._children && this._children[this._children.length - 1] || null
                }, getNextSibling: function () {
                    return this._parent && this._parent._children[this._index + 1] || null
                }, getPreviousSibling: function () {
                    return this._parent && this._parent._children[this._index - 1] || null
                }, getIndex: function () {
                    return this._index
                }, equals: function (t) {
                    return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
                }, _equals: function (t) {
                    return n.equals(this._children, t._children)
                }, clone: function (t) {
                    return this._clone(new this.constructor(x.NO_INSERT), t)
                }, _clone: function (e, i) {
                    if (e.setStyle(this._style), this._children)for (var r = 0, s = this._children.length; s > r; r++)e.addChild(this._children[r].clone(!1), !0);
                    (i || i === t) && e.insertAbove(this);
                    for (var o = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide", "_applyMatrix"], r = 0, s = o.length; s > r; r++) {
                        var a = o[r];
                        this.hasOwnProperty(a) && (e[a] = this[a])
                    }
                    return e._matrix.initialize(this._matrix), e._data = this._data ? n.clone(this._data) : null, e.setSelected(this._selected), this._name && e.setName(this._name, !0), e
                }, copyTo: function (t) {
                    return t.addChild(this.clone(!1))
                }, rasterize: function (t) {
                    var e = this.getStrokeBounds(), i = (t || this.getView().getResolution()) / 72, r = e.getTopLeft().floor(), s = e.getBottomRight().ceil(), o = new p(s.subtract(r)), a = it.getCanvas(o.multiply(i)), l = a.getContext("2d"), u = (new v).scale(i).translate(r.negate());
                    l.save(), u.applyToContext(l), this.draw(l, new n({matrices: [u]})), l.restore();
                    var h = new P(x.NO_INSERT);
                    return h.setCanvas(a), h.transform((new v).translate(r.add(o.divide(2))).scale(1 / i)), h.insertAbove(this), h
                }, contains: function () {
                    return !!this._contains(this._matrix._inverseTransform(c.read(arguments)))
                }, _contains: function (t) {
                    if (this._children) {
                        for (var e = this._children.length - 1; e >= 0; e--)if (this._children[e].contains(t))return !0;
                        return !1
                    }
                    return t.isInside(this.getInternalBounds())
                }, isInside: function () {
                    return g.read(arguments).contains(this.getBounds())
                }, _asPathItem: function () {
                    return new z.Rectangle({rectangle: this.getInternalBounds(), matrix: this._matrix, insert: !1})
                }, intersects: function (t, e) {
                    return t instanceof x ? this._asPathItem().getIntersections(t._asPathItem(), e || t._matrix).length > 0 : !1
                }, hitTest: function () {
                    return this._hitTest(c.read(arguments), O.getOptions(n.read(arguments)))
                }, _hitTest: function (t, e) {
                    function i(e, i) {
                        var r = d["get" + i]();
                        return t.subtract(r).divide(l).length <= 1 ? new O(e, c, {
                                name: n.hyphenate(i),
                                point: r
                            }) : void 0
                    }

                    if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty())return null;
                    var r = this._matrix, s = e._totalMatrix, o = this.getView(), a = e._totalMatrix = s ? s.chain(r) : this.getGlobalMatrix().preConcatenate(o._matrix), l = e._tolerancePadding = new p(z._getPenPadding(1, a.inverted())).multiply(Math.max(e.tolerance, 1e-6));
                    if (t = r._inverseTransform(t), !this._children && !this.getInternalRoughBounds().expand(l.multiply(2))._containsPoint(t))return null;
                    var u, h = !(e.guides && !this._guide || e.selected && !this._selected || e.type && e.type !== n.hyphenate(this._class) || e["class"] && !(this instanceof e["class"])), c = this;
                    if (h && (e.center || e.bounds) && this._parent) {
                        var d = this.getInternalBounds();
                        if (e.center && (u = i("center", "Center")), !u && e.bounds)for (var f = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], g = 0; 8 > g && !u; g++)u = i("bounds", f[g])
                    }
                    var _ = !u && this._children;
                    if (_)for (var m = this._getChildHitTestOptions(e), g = _.length - 1; g >= 0 && !u; g--)u = _[g]._hitTest(t, m);
                    return !u && h && (u = this._hitTestSelf(t, e)), u && u.point && (u.point = r.transform(u.point)), e._totalMatrix = s, u
                }, _getChildHitTestOptions: function (t) {
                    return t
                }, _hitTestSelf: function (t, e) {
                    return e.fill && this.hasFill() && this._contains(t) ? new O("fill", this) : void 0
                }, matches: function (t, e) {
                    function i(t, e) {
                        for (var r in t)if (t.hasOwnProperty(r)) {
                            var s = t[r], o = e[r];
                            if (n.isPlainObject(s) && n.isPlainObject(o)) {
                                if (!i(s, o))return !1
                            } else if (!n.equals(s, o))return !1
                        }
                        return !0
                    }

                    if ("object" == typeof t) {
                        for (var r in t)if (t.hasOwnProperty(r) && !this.matches(r, t[r]))return !1
                    } else {
                        var s = /^(empty|editable)$/.test(t) ? this["is" + n.capitalize(t)]() : "type" === t ? n.hyphenate(this._class) : this[t];
                        if (/^(constructor|class)$/.test(t)) {
                            if (!(this instanceof e))return !1
                        } else if (e instanceof RegExp) {
                            if (!e.test(s))return !1
                        } else if ("function" == typeof e) {
                            if (!e(s))return !1
                        } else if (n.isPlainObject(e)) {
                            if (!i(e, s))return !1
                        } else if (!n.equals(s, e))return !1
                    }
                    return !0
                }, getItems: function (t) {
                    return x._getItems(this._children, t, this._matrix)
                }, getItem: function (t) {
                    return x._getItems(this._children, t, this._matrix, null, !0)[0] || null
                }, statics: {
                    _getItems: function ft(t, e, i, r, s) {
                        if (!r) {
                            var o = e.overlapping, a = e.inside, l = o || a, u = l && g.read([l]);
                            r = {
                                items: [],
                                inside: u,
                                overlapping: o && new z.Rectangle({rectangle: u, insert: !1})
                            }, l && (e = n.set({}, e, {inside: !0, overlapping: !0}))
                        }
                        var h = r.items, a = r.inside, o = r.overlapping;
                        i = a && (i || new v);
                        for (var c = 0, d = t && t.length; d > c; c++) {
                            var p = t[c], f = i && i.chain(p._matrix), _ = !0;
                            if (a) {
                                var l = p.getBounds(f);
                                if (!a.intersects(l))continue;
                                a && a.contains(l) || o && o.intersects(p, f) || (_ = !1)
                            }
                            if (_ && p.matches(e) && (h.push(p), s))break;
                            if (ft(p._children, e, f, r, s), s && h.length > 0)break
                        }
                        return h
                    }
                }
            }, {
                importJSON: function (t) {
                    var e = n.importJSON(t, this);
                    return e !== this ? this.addChild(e) : e
                }, addChild: function (e, i) {
                    return this.insertChild(t, e, i)
                }, insertChild: function (t, e, i) {
                    var n = e ? this.insertChildren(t, [e], i) : null;
                    return n && n[0]
                }, addChildren: function (t, e) {
                    return this.insertChildren(this._children.length, t, e)
                }, insertChildren: function (t, e, i, r) {
                    var s = this._children;
                    if (s && e && e.length > 0) {
                        e = Array.prototype.slice.apply(e);
                        for (var o = e.length - 1; o >= 0; o--) {
                            var a = e[o];
                            if (!r || a instanceof r) {
                                var l = a._parent === this && a._index < t;
                                a._remove(!1, !0) && l && t--
                            } else e.splice(o, 1)
                        }
                        n.splice(s, e, t, 0);
                        for (var u = this._project, h = u && u._changes, o = 0, c = e.length; c > o; o++) {
                            var a = e[o];
                            a._parent = this, a._setProject(this._project, !0), a._name && a.setName(a._name), h && this._changed(5)
                        }
                        this._changed(11)
                    } else e = null;
                    return e
                }, _insertSibling: function (t, e, i) {
                    return this._parent ? this._parent.insertChild(t, e, i) : null
                }, insertAbove: function (t, e) {
                    return t._insertSibling(t._index + 1, this, e)
                }, insertBelow: function (t, e) {
                    return t._insertSibling(t._index, this, e)
                }, sendToBack: function () {
                    return (this._parent || this instanceof S && this._project).insertChild(0, this)
                }, bringToFront: function () {
                    return (this._parent || this instanceof S && this._project).addChild(this)
                }, appendTop: "#addChild", appendBottom: function (t) {
                    return this.insertChild(0, t)
                }, moveAbove: "#insertAbove", moveBelow: "#insertBelow", reduce: function () {
                    if (this._children && 1 === this._children.length) {
                        var t = this._children[0].reduce();
                        return t.insertAbove(this), t.setStyle(this._style), this.remove(), t
                    }
                    return this
                }, _removeNamed: function () {
                    var t = this._parent;
                    if (t) {
                        var e = t._children, i = t._namedChildren, n = this._name, r = i[n], s = r ? r.indexOf(this) : -1;
                        -1 !== s && (e[n] == this && delete e[n], r.splice(s, 1), r.length ? e[n] = r[r.length - 1] : delete i[n])
                    }
                }, _remove: function (t, e) {
                    var i = this._parent;
                    if (i) {
                        if (this._name && this._removeNamed(), null != this._index && n.splice(i._children, null, this._index, 1), this._installEvents(!1), t) {
                            var r = this._project;
                            r && r._changes && this._changed(5)
                        }
                        return e && i._changed(11), this._parent = null, !0
                    }
                    return !1
                }, remove: function () {
                    return this._remove(!0, !0)
                }, replaceWith: function (t) {
                    var e = t && t.insertBelow(this);
                    return e && this.remove(), e
                }, removeChildren: function (t, e) {
                    if (!this._children)return null;
                    t = t || 0, e = n.pick(e, this._children.length);
                    for (var i = n.splice(this._children, null, t, e - t), r = i.length - 1; r >= 0; r--)i[r]._remove(!0, !1);
                    return i.length > 0 && this._changed(11), i
                }, clear: "#removeChildren", reverseChildren: function () {
                    if (this._children) {
                        this._children.reverse();
                        for (var t = 0, e = this._children.length; e > t; t++)this._children[t]._index = t;
                        this._changed(11)
                    }
                }, isEmpty: function () {
                    return !this._children || 0 === this._children.length
                }, isEditable: function () {
                    for (var t = this; t;) {
                        if (!t._visible || t._locked)return !1;
                        t = t._parent
                    }
                    return !0
                }, hasFill: function () {
                    return this.getStyle().hasFill()
                }, hasStroke: function () {
                    return this.getStyle().hasStroke()
                }, hasShadow: function () {
                    return this.getStyle().hasShadow()
                }, _getOrder: function (t) {
                    function e(t) {
                        var e = [];
                        do e.unshift(t); while (t = t._parent);
                        return e
                    }

                    for (var i = e(this), n = e(t), r = 0, s = Math.min(i.length, n.length); s > r; r++)if (i[r] != n[r])return i[r]._index < n[r]._index ? 1 : -1;
                    return 0
                }, hasChildren: function () {
                    return this._children && this._children.length > 0
                }, isInserted: function () {
                    return this._parent ? this._parent.isInserted() : !1
                }, isAbove: function (t) {
                    return -1 === this._getOrder(t)
                }, isBelow: function (t) {
                    return 1 === this._getOrder(t)
                }, isParent: function (t) {
                    return this._parent === t
                }, isChild: function (t) {
                    return t && t._parent === this
                }, isDescendant: function (t) {
                    for (var e = this; e = e._parent;)if (e == t)return !0;
                    return !1
                }, isAncestor: function (t) {
                    return t ? t.isDescendant(this) : !1
                }, isGroupedWith: function (t) {
                    for (var e = this._parent; e;) {
                        if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e))return !0;
                        e = e._parent
                    }
                    return !1
                }, translate: function () {
                    var t = new v;
                    return this.transform(t.translate.apply(t, arguments))
                }, rotate: function (t) {
                    return this.transform((new v).rotate(t, c.read(arguments, 1, {readNull: !0}) || this.getPosition(!0)))
                }
            }, n.each(["scale", "shear", "skew"], function (t) {
                this[t] = function () {
                    var e = c.read(arguments), i = c.read(arguments, 0, {readNull: !0});
                    return this.transform((new v)[t](e, i || this.getPosition(!0)))
                }
            }, {}), {
                transform: function (t, e, i, n) {
                    t && t.isIdentity() && (t = null);
                    var r = this._matrix, s = (e || this._applyMatrix) && (!r.isIdentity() || t || e && i && this._children);
                    if (!t && !s)return this;
                    if (t && r.preConcatenate(t), s = s && this._transformContent(r, i, n)) {
                        var o = this._pivot, a = this._style, l = a.getFillColor(!0), u = a.getStrokeColor(!0);
                        o && r._transformPoint(o, o, !0), l && l.transform(r), u && u.transform(r), r.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0)
                    }
                    var h = this._bounds, c = this._position;
                    this._changed(9);
                    var d = h && t && t.decompose();
                    if (d && !d.shearing && d.rotation % 90 === 0) {
                        for (var p in h) {
                            var f = h[p];
                            (s || !f._internal) && t._transformBounds(f, f)
                        }
                        var g = this._boundsGetter, f = h[g && g.getBounds || g || "getBounds"];
                        f && (this._position = f.getCenter(!0)), this._bounds = h
                    } else t && c && (this._position = t._transformPoint(c, c));
                    return this
                }, _transformContent: function (t, e, i) {
                    var n = this._children;
                    if (n) {
                        for (var r = 0, s = n.length; s > r; r++)n[r].transform(t, !0, e, i);
                        return !0
                    }
                }, globalToLocal: function () {
                    return this.getGlobalMatrix(!0)._inverseTransform(c.read(arguments))
                }, localToGlobal: function () {
                    return this.getGlobalMatrix(!0)._transformPoint(c.read(arguments))
                }, parentToLocal: function () {
                    return this._matrix._inverseTransform(c.read(arguments))
                }, localToParent: function () {
                    return this._matrix._transformPoint(c.read(arguments))
                }, fitBounds: function (t, e) {
                    t = g.read(arguments);
                    var i = this.getBounds(), n = i.height / i.width, r = t.height / t.width, s = (e ? n > r : r > n) ? t.width / i.width : t.height / i.height, o = new g(new c, new p(i.width * s, i.height * s));
                    o.setCenter(t.getCenter()), this.setBounds(o)
                }, _setStyles: function (t) {
                    var e = this._style, i = e.getFillColor(), n = e.getStrokeColor(), s = e.getShadowColor();
                    if (i && (t.fillStyle = i.toCanvasStyle(t)), n) {
                        var o = e.getStrokeWidth();
                        if (o > 0) {
                            t.strokeStyle = n.toCanvasStyle(t), t.lineWidth = o;
                            var a = e.getStrokeJoin(), l = e.getStrokeCap(), u = e.getMiterLimit();
                            if (a && (t.lineJoin = a), l && (t.lineCap = l), u && (t.miterLimit = u), r.support.nativeDash) {
                                var h = e.getDashArray(), c = e.getDashOffset();
                                h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = c) : (t.mozDash = h, t.mozDashOffset = c))
                            }
                        }
                    }
                    if (s) {
                        var d = e.getShadowBlur();
                        if (d > 0) {
                            t.shadowColor = s.toCanvasStyle(t), t.shadowBlur = d;
                            var p = this.getShadowOffset();
                            t.shadowOffsetX = p.x, t.shadowOffsetY = p.y
                        }
                    }
                }, draw: function (t, e, i) {
                    function n(t) {
                        return o ? o.chain(t) : t
                    }

                    var r = this._updateVersion = this._project._updateVersion;
                    if (this._visible && 0 !== this._opacity) {
                        var s = e.matrices, o = e.viewMatrix, a = this._matrix, l = s[s.length - 1].chain(a);
                        if (l.isInvertible()) {
                            s.push(l), e.updateMatrix && (l._updateVersion = r, this._globalMatrix = l);
                            var u, h, c, d = this._blendMode, p = this._opacity, f = "normal" === d, g = nt.nativeModes[d], _ = f && 1 === p || e.dontStart || e.clip || (g || f && 1 > p) && this._canComposite(), m = e.pixelRatio;
                            if (!_) {
                                var v = this.getStrokeBounds(n(l));
                                if (!v.width || !v.height)return;
                                c = e.offset, h = e.offset = v.getTopLeft().floor(), u = t, t = it.getContext(v.getSize().ceil().add(1).multiply(m)), 1 !== m && t.scale(m, m)
                            }
                            t.save();
                            var y = i ? i.chain(a) : !this.getStrokeScaling(!0) && n(l), w = !_ && e.clipItem, b = !y || w;
                            if (_ ? (t.globalAlpha = p, g && (t.globalCompositeOperation = d)) : b && t.translate(-h.x, -h.y), b && (_ ? a : n(l)).applyToContext(t), w && e.clipItem.draw(t, e.extend({clip: !0})), y) {
                                t.setTransform(m, 0, 0, m, 0, 0);
                                var x = e.offset;
                                x && t.translate(-x.x, -x.y)
                            }
                            this._draw(t, e, y), t.restore(), s.pop(), e.clip && !e.dontFinish && t.clip(), _ || (nt.process(d, t, u, p, h.subtract(c).multiply(m)), it.release(t), e.offset = c)
                        }
                    }
                }, _isUpdated: function (t) {
                    var e = this._parent;
                    if (e instanceof L)return e._isUpdated(t);
                    var i = this._updateVersion === t;
                    return !i && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, i = !0), i
                }, _drawSelection: function (t, e, i, n, r) {
                    if ((this._drawSelected || this._boundsSelected) && this._isUpdated(r)) {
                        var s = this.getSelectedColor(!0) || this.getLayer().getSelectedColor(!0), o = e.chain(this.getGlobalMatrix(!0));
                        if (t.strokeStyle = t.fillStyle = s ? s.toCanvasStyle(t) : "#009dec", this._drawSelected && this._drawSelected(t, o, n), this._boundsSelected) {
                            var a = i / 2;
                            coords = o._transformCorners(this.getInternalBounds()), t.beginPath();
                            for (var l = 0; 8 > l; l++)t[0 === l ? "moveTo" : "lineTo"](coords[l], coords[++l]);
                            t.closePath(), t.stroke();
                            for (var l = 0; 8 > l; l++)t.fillRect(coords[l] - a, coords[++l] - a, i, i)
                        }
                    }
                }, _canComposite: function () {
                    return !1
                }
            }, n.each(["down", "drag", "up", "move"], function (t) {
                this["removeOn" + n.capitalize(t)] = function () {
                    var e = {};
                    return e[t] = !0, this.removeOn(e)
                }
            }, {
                removeOn: function (t) {
                    for (var e in t)if (t[e]) {
                        var i = "mouse" + e, n = this._project, r = n._removeSets = n._removeSets || {};
                        r[i] = r[i] || {}, r[i][this._id] = this
                    }
                    return this
                }
            })), T = x.extend({
                _class: "Group",
                _selectChildren: !0,
                _serializeFields: {children: []},
                initialize: function (t) {
                    this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
                },
                _changed: function gt(e) {
                    gt.base.call(this, e), 1026 & e && (this._clipItem = t)
                },
                _getClipItem: function () {
                    var e = this._clipItem;
                    if (e === t) {
                        e = null;
                        for (var i = 0, n = this._children.length; n > i; i++) {
                            var r = this._children[i];
                            if (r._clipMask) {
                                e = r;
                                break
                            }
                        }
                        this._clipItem = e
                    }
                    return e
                },
                isClipped: function () {
                    return !!this._getClipItem()
                },
                setClipped: function (t) {
                    var e = this.getFirstChild();
                    e && e.setClipMask(t)
                },
                _draw: function (t, e) {
                    var i = e.clip, n = !i && this._getClipItem(), r = !0;
                    if (e = e.extend({
                            clipItem: n,
                            clip: !1
                        }), i ? this._currentPath ? (t.currentPath = this._currentPath, r = !1) : (t.beginPath(), e.dontStart = e.dontFinish = !0) : n && n.draw(t, e.extend({clip: !0})), r)for (var s = 0, o = this._children.length; o > s; s++) {
                        var a = this._children[s];
                        a !== n && a.draw(t, e)
                    }
                    i && (this._currentPath = t.currentPath)
                }
            }), S = T.extend({
                _class: "Layer", initialize: function (e) {
                    var i = n.isPlainObject(e) ? new n(e) : {children: Array.isArray(e) ? e : arguments}, r = i.insert;
                    i.insert = !1, T.call(this, i), (r || r === t) && (this._project.addChild(this), this.activate())
                }, _remove: function _t(t, e) {
                    if (this._parent)return _t.base.call(this, t, e);
                    if (null != this._index) {
                        var i = this._project;
                        return i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), n.splice(i.layers, null, this._index, 1), this._installEvents(!1), t && i._changes && this._changed(5), e && (i._needsUpdate = !0), !0
                    }
                    return !1
                }, getNextSibling: function mt() {
                    return this._parent ? mt.base.call(this) : this._project.layers[this._index + 1] || null
                }, getPreviousSibling: function vt() {
                    return this._parent ? vt.base.call(this) : this._project.layers[this._index - 1] || null
                }, isInserted: function yt() {
                    return this._parent ? yt.base.call(this) : null != this._index
                }, activate: function () {
                    this._project._activeLayer = this
                }, _insertSibling: function wt(t, e, i) {
                    return this._parent ? wt.base.call(this, t, e, i) : this._project.insertChild(t, e, i)
                }
            }), C = x.extend({
                _class: "Shape",
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _boundsSelected: !0,
                _serializeFields: {type: null, size: null, radius: null},
                initialize: function (t) {
                    this._initialize(t)
                },
                _equals: function (t) {
                    return this._type === t._type && this._size.equals(t._size) && n.equals(this._radius, t._radius)
                },
                clone: function (t) {
                    var e = new C(x.NO_INSERT);
                    return e.setType(this._type), e.setSize(this._size), e.setRadius(this._radius), this._clone(e, t)
                },
                getType: function () {
                    return this._type
                },
                setType: function (t) {
                    this._type = t
                },
                getShape: "#getType",
                setShape: "#setType",
                getSize: function () {
                    var t = this._size;
                    return new f(t.width, t.height, this, "setSize")
                },
                setSize: function () {
                    var t = p.read(arguments);
                    if (this._size) {
                        if (!this._size.equals(t)) {
                            var e = this._type, i = t.width, n = t.height;
                            if ("rectangle" === e) {
                                var r = p.min(this._radius, t.divide(2));
                                this._radius.set(r.width, r.height)
                            } else"circle" === e ? (i = n = (i + n) / 2, this._radius = i / 2) : "ellipse" === e && this._radius.set(i / 2, n / 2);
                            this._size.set(i, n), this._changed(9)
                        }
                    } else this._size = t.clone()
                },
                getRadius: function () {
                    var t = this._radius;
                    return "circle" === this._type ? t : new f(t.width, t.height, this, "setRadius")
                },
                setRadius: function (t) {
                    var e = this._type;
                    if ("circle" === e) {
                        if (t === this._radius)return;
                        var i = 2 * t;
                        this._radius = t, this._size.set(i, i)
                    } else if (t = p.read(arguments), this._radius) {
                        if (this._radius.equals(t))return;
                        if (this._radius.set(t.width, t.height), "rectangle" === e) {
                            var i = p.max(this._size, t.multiply(2));
                            this._size.set(i.width, i.height)
                        } else"ellipse" === e && this._size.set(2 * t.width, 2 * t.height)
                    } else this._radius = t.clone();
                    this._changed(9)
                },
                isEmpty: function () {
                    return !1
                },
                toPath: function (e) {
                    var i = new (z[n.capitalize(this._type)])({
                        center: new c,
                        size: this._size,
                        radius: this._radius,
                        insert: !1
                    });
                    return i.setStyle(this._style), i.transform(this._matrix), (e || e === t) && i.insertAbove(this), i
                },
                _draw: function (t, e, i) {
                    var n = this._style, r = n.hasFill(), s = n.hasStroke(), o = e.dontFinish || e.clip, a = !i;
                    if (r || s || o) {
                        var l = this._type, u = this._radius, h = "circle" === l;
                        if (e.dontStart || t.beginPath(), a && h) t.arc(0, 0, u, 0, 2 * Math.PI, !0); else {
                            var c = h ? u : u.width, d = h ? u : u.height, p = this._size, f = p.width, g = p.height;
                            if (a && "rect" === l && 0 === c && 0 === d) t.rect(-f / 2, -g / 2, f, g); else {
                                var _ = f / 2, m = g / 2, v = .44771525016920644, y = c * v, w = d * v, b = [-_, -m + d, -_, -m + w, -_ + y, -m, -_ + c, -m, _ - c, -m, _ - y, -m, _, -m + w, _, -m + d, _, m - d, _, m - w, _ - y, m, _ - c, m, -_ + c, m, -_ + y, m, -_, m - w, -_, m - d];
                                i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), _ !== c && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), _ !== c && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                            }
                        }
                        t.closePath()
                    }
                    o || !r && !s || (this._setStyles(t), r && (t.fill(n.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), s && t.stroke())
                },
                _canComposite: function () {
                    return !(this.hasFill() && this.hasStroke())
                },
                _getBounds: function (t, e) {
                    var i = new g(this._size).setCenter(0, 0);
                    return "getBounds" !== t && this.hasStroke() && (i = i.expand(this.getStrokeWidth())), e ? e._transformBounds(i) : i
                }
            }, new function () {
                function t(t, e, i) {
                    var n = t._radius;
                    if (!n.isZero())for (var r = t._size.divide(2), s = 0; 4 > s; s++) {
                        var o = new c(1 & s ? 1 : -1, s > 1 ? 1 : -1), a = o.multiply(r), l = a.subtract(o.multiply(n)), u = new g(a, l);
                        if ((i ? u.expand(i) : u).contains(e))return l
                    }
                }

                function e(t, e) {
                    var i = t.getAngleInRadians(), n = 2 * e.width, r = 2 * e.height, s = n * Math.sin(i), o = r * Math.cos(i);
                    return n * r / (2 * Math.sqrt(s * s + o * o))
                }

                return {
                    _contains: function i(e) {
                        if ("rectangle" === this._type) {
                            var n = t(this, e);
                            return n ? e.subtract(n).divide(this._radius).getLength() <= 1 : i.base.call(this, e)
                        }
                        return e.divide(this.size).getLength() <= .5
                    }, _hitTestSelf: function n(i, r) {
                        var s = !1;
                        if (this.hasStroke()) {
                            var o = this._type, a = this._radius, l = this.getStrokeWidth() + 2 * r.tolerance;
                            if ("rectangle" === o) {
                                var u = t(this, i, l);
                                if (u) {
                                    var h = i.subtract(u);
                                    s = 2 * Math.abs(h.getLength() - e(h, a)) <= l
                                } else {
                                    var c = new g(this._size).setCenter(0, 0), d = c.expand(l), p = c.expand(-l);
                                    s = d._containsPoint(i) && !p._containsPoint(i)
                                }
                            } else"ellipse" === o && (a = e(i, a)), s = 2 * Math.abs(i.getLength() - a) <= l
                        }
                        return s ? new O("stroke", this) : n.base.apply(this, arguments)
                    }
                }
            }, {
                statics: new function () {
                    function t(t, e, i, r, s) {
                        var o = new C(n.getNamed(s));
                        return o._type = t, o._size = i, o._radius = r, o.translate(e)
                    }

                    return {
                        Circle: function () {
                            var e = c.readNamed(arguments, "center"), i = n.readNamed(arguments, "radius");
                            return t("circle", e, new p(2 * i), i, arguments)
                        }, Rectangle: function () {
                            var e = g.readNamed(arguments, "rectangle"), i = p.min(p.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                            return t("rectangle", e.getCenter(!0), e.getSize(!0), i, arguments)
                        }, Ellipse: function () {
                            var e = C._readEllipse(arguments), i = e.radius;
                            return t("ellipse", e.center, i.multiply(2), i, arguments)
                        }, _readEllipse: function (t) {
                            var e, i;
                            if (n.hasNamed(t, "radius")) e = c.readNamed(t, "center"), i = p.readNamed(t, "radius"); else {
                                var r = g.readNamed(t, "rectangle");
                                e = r.getCenter(!0), i = r.getSize(!0).divide(2)
                            }
                            return {center: e, radius: i}
                        }
                    }
                }
            }), P = x.extend({
                _class: "Raster",
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _boundsGetter: "getBounds",
                _boundsSelected: !0,
                _serializeFields: {source: null},
                initialize: function (e, i) {
                    this._initialize(e, i !== t && c.read(arguments, 1)) || ("string" == typeof e ? this.setSource(e) : this.setImage(e)), this._size || (this._size = new p, this._loaded = !1)
                },
                _equals: function (t) {
                    return this.getSource() === t.getSource()
                },
                clone: function (t) {
                    var e = new P(x.NO_INSERT), i = this._image, n = this._canvas;
                    if (i) e.setImage(i); else if (n) {
                        var r = it.getCanvas(this._size);
                        r.getContext("2d").drawImage(n, 0, 0), e.setImage(r)
                    }
                    return this._clone(e, t)
                },
                getSize: function () {
                    var t = this._size;
                    return new f(t ? t.width : 0, t ? t.height : 0, this, "setSize")
                },
                setSize: function () {
                    var t = p.read(arguments);
                    if (!t.equals(this._size))if (t.width > 0 && t.height > 0) {
                        var e = this.getElement();
                        this.setImage(it.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
                    } else this._canvas && it.release(this._canvas), this._size = t.clone()
                },
                getWidth: function () {
                    return this._size ? this._size.width : 0
                },
                setWidth: function (t) {
                    this.setSize(t, this.getHeight())
                },
                getHeight: function () {
                    return this._size ? this._size.height : 0
                },
                setHeight: function (t) {
                    this.setSize(this.getWidth(), t)
                },
                isEmpty: function () {
                    var t = this._size;
                    return !t || 0 === t.width && 0 === t.height
                },
                getResolution: function () {
                    var t = this._matrix, e = new c(0, 0).transform(t), i = new c(1, 0).transform(t).subtract(e), n = new c(0, 1).transform(t).subtract(e);
                    return new p(72 / i.getLength(), 72 / n.getLength())
                },
                getPpi: "#getResolution",
                getImage: function () {
                    return this._image
                },
                setImage: function (t) {
                    this._canvas && it.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = t && t.complete), this._size = new p(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521)
                },
                getCanvas: function () {
                    if (!this._canvas) {
                        var t = it.getContext(this._size);
                        try {
                            this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                        } catch (e) {
                            it.release(t)
                        }
                    }
                    return this._canvas
                },
                setCanvas: "#setImage",
                getContext: function (t) {
                    return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context
                },
                setContext: function (t) {
                    this._context = t
                },
                getSource: function () {
                    return this._image && this._image.src || this.toDataURL()
                },
                setSource: function (t) {
                    function e() {
                        var t = n.getView();
                        t && (r = t._scope, n.setImage(i), n.emit("load"), t.update())
                    }

                    var i, n = this;
                    i = document.getElementById(t) || new Image, i.naturalWidth && i.naturalHeight ? setTimeout(e, 0) : (U.add(i, {load: e}), i.src || (i.src = t)), this.setImage(i)
                },
                getElement: function () {
                    return this._canvas || this._loaded && this._image
                }
            }, {
                beans: !1, getSubCanvas: function () {
                    var t = g.read(arguments), e = it.getContext(t.getSize());
                    return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
                }, getSubRaster: function () {
                    var t = g.read(arguments), e = new P(x.NO_INSERT);
                    return e.setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.preConcatenate(this._matrix), e.insertAbove(this), e
                }, toDataURL: function () {
                    var t = this._image && this._image.src;
                    if (/^data:/.test(t))return t;
                    var e = this.getCanvas();
                    return e ? e.toDataURL() : null
                }, drawImage: function (t) {
                    var e = c.read(arguments, 1);
                    this.getContext(!0).drawImage(t, e.x, e.y)
                }, getAverageColor: function (t) {
                    var e, i;
                    t ? t instanceof j ? (i = t, e = t.getBounds()) : t.width ? e = new g(t) : t.x && (e = new g(t.x - .5, t.y - .5, 1, 1)) : e = this.getBounds();
                    var r = 32, s = Math.min(e.width, r), o = Math.min(e.height, r), a = P._sampleContext;
                    a ? a.clearRect(0, 0, r + 1, r + 1) : a = P._sampleContext = it.getContext(new p(r)), a.save();
                    var l = (new v).scale(s / e.width, o / e.height).translate(-e.x, -e.y);
                    l.applyToContext(a), i && i.draw(a, new n({
                        clip: !0,
                        matrices: [l]
                    })), this._matrix.applyToContext(a);
                    var u = this.getElement(), h = this._size;
                    u && a.drawImage(u, -h.width / 2, -h.height / 2), a.restore();
                    for (var c = a.getImageData(.5, .5, Math.ceil(s), Math.ceil(o)).data, d = [0, 0, 0], f = 0, _ = 0, m = c.length; m > _; _ += 4) {
                        var y = c[_ + 3];
                        f += y, y /= 255, d[0] += c[_] * y, d[1] += c[_ + 1] * y, d[2] += c[_ + 2] * y
                    }
                    for (var _ = 0; 3 > _; _++)d[_] /= f;
                    return f ? B.read(d) : null
                }, getPixel: function () {
                    var t = c.read(arguments), e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                    return new B("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
                }, setPixel: function () {
                    var t = c.read(arguments), e = B.read(arguments), i = e._convert("rgb"), n = e._alpha, r = this.getContext(!0), s = r.createImageData(1, 1), o = s.data;
                    o[0] = 255 * i[0], o[1] = 255 * i[1], o[2] = 255 * i[2], o[3] = null != n ? 255 * n : 255, r.putImageData(s, t.x, t.y)
                }, createImageData: function () {
                    var t = p.read(arguments);
                    return this.getContext().createImageData(t.width, t.height)
                }, getImageData: function () {
                    var t = g.read(arguments);
                    return t.isEmpty() && (t = new g(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
                }, setImageData: function (t) {
                    var e = c.read(arguments, 1);
                    this.getContext(!0).putImageData(t, e.x, e.y)
                }, _getBounds: function (t, e) {
                    var i = new g(this._size).setCenter(0, 0);
                    return e ? e._transformBounds(i) : i
                }, _hitTestSelf: function (t) {
                    if (this._contains(t)) {
                        var e = this;
                        return new O("pixel", e, {
                            offset: t.add(e._size.divide(2)).round(), color: {
                                get: function () {
                                    return e.getPixel(this.offset)
                                }
                            }
                        })
                    }
                }, _draw: function (t) {
                    var e = this.getElement();
                    e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
                }, _canComposite: function () {
                    return !0
                }
            }), A = x.extend({
                _class: "PlacedSymbol",
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _boundsGetter: {getBounds: "getStrokeBounds"},
                _boundsSelected: !0,
                _serializeFields: {symbol: null},
                initialize: function (e, i) {
                    this._initialize(e, i !== t && c.read(arguments, 1)) || this.setSymbol(e instanceof b ? e : new b(e))
                },
                _equals: function (t) {
                    return this._symbol === t._symbol
                },
                getSymbol: function () {
                    return this._symbol
                },
                setSymbol: function (t) {
                    this._symbol = t, this._changed(9)
                },
                clone: function (t) {
                    var e = new A(x.NO_INSERT);
                    return e.setSymbol(this._symbol), this._clone(e, t)
                },
                isEmpty: function () {
                    return this._symbol._definition.isEmpty()
                },
                _getBounds: function (t, e, i) {
                    var n = this.symbol._definition;
                    return n._getCachedBounds(t, e && e.chain(n._matrix), i)
                },
                _hitTestSelf: function (t, e) {
                    var i = this._symbol._definition._hitTest(t, e);
                    return i && (i.item = this), i
                },
                _draw: function (t, e) {
                    this.symbol._definition.draw(t, e)
                }
            }), O = n.extend({
                _class: "HitResult", initialize: function (t, e, i) {
                    this.type = t, this.item = e, i && (i.enumerable = !0, this.inject(i))
                }, statics: {
                    getOptions: function (t) {
                        return new n({
                            type: null,
                            tolerance: r.settings.hitTolerance,
                            fill: !t,
                            stroke: !t,
                            segments: !t,
                            handles: !1,
                            ends: !1,
                            center: !1,
                            bounds: !1,
                            guides: !1,
                            selected: !1
                        }, t)
                    }
                }
            }), E = n.extend({
                _class: "Segment", beans: !0, initialize: function (e, i, n, r, s, o) {
                    var a, l, u, h = arguments.length;
                    0 === h || (1 === h ? e.point ? (a = e.point, l = e.handleIn, u = e.handleOut) : a = e : 2 === h && "number" == typeof e ? a = arguments : 3 >= h ? (a = e, l = i, u = n) : (a = e !== t ? [e, i] : null, l = n !== t ? [n, r] : null, u = s !== t ? [s, o] : null)), new M(a, this, "_point"), new M(l, this, "_handleIn"), new M(u, this, "_handleOut")
                }, _serialize: function (t) {
                    return n.serialize(this.isLinear() ? this._point : [this._point, this._handleIn, this._handleOut], t, !0)
                }, _changed: function (t) {
                    var e = this._path;
                    if (e) {
                        var i, n = e._curves, r = this._index;
                        n && (t && t !== this._point && t !== this._handleIn || !(i = r > 0 ? n[r - 1] : e._closed ? n[n.length - 1] : null) || i._changed(), t && t !== this._point && t !== this._handleOut || !(i = n[r]) || i._changed()), e._changed(25)
                    }
                }, getPoint: function () {
                    return this._point
                }, setPoint: function () {
                    var t = c.read(arguments);
                    this._point.set(t.x, t.y)
                }, getHandleIn: function () {
                    return this._handleIn
                }, setHandleIn: function () {
                    var t = c.read(arguments);
                    this._handleIn.set(t.x, t.y)
                }, getHandleOut: function () {
                    return this._handleOut
                }, setHandleOut: function () {
                    var t = c.read(arguments);
                    this._handleOut.set(t.x, t.y)
                }, isLinear: function () {
                    return this._handleIn.isZero() && this._handleOut.isZero()
                }, setLinear: function (t) {
                    t && (this._handleIn.set(0, 0), this._handleOut.set(0, 0))
                }, isColinear: function (t) {
                    var e = this.getNext(), i = t.getNext();
                    return this._handleOut.isZero() && e._handleIn.isZero() && t._handleOut.isZero() && i._handleIn.isZero() && e._point.subtract(this._point).isColinear(i._point.subtract(t._point))
                }, isOrthogonal: function () {
                    var t = this.getPrevious(), e = this.getNext();
                    return t._handleOut.isZero() && this._handleIn.isZero() && this._handleOut.isZero() && e._handleIn.isZero() && this._point.subtract(t._point).isOrthogonal(e._point.subtract(this._point))
                }, isArc: function () {
                    var t = this.getNext(), e = this._handleOut, i = t._handleIn, n = .5522847498307936;
                    if (e.isOrthogonal(i)) {
                        var r = this._point, s = t._point, o = new y(r, e, !0).intersect(new y(s, i, !0), !0);
                        return o && h.isZero(e.getLength() / o.subtract(r).getLength() - n) && h.isZero(i.getLength() / o.subtract(s).getLength() - n)
                    }
                    return !1
                }, _selectionState: 0, isSelected: function (t) {
                    var e = this._selectionState;
                    return t ? t === this._point ? !!(4 & e) : t === this._handleIn ? !!(1 & e) : t === this._handleOut ? !!(2 & e) : !1 : !!(7 & e)
                }, setSelected: function (t, e) {
                    var i = this._path, t = !!t, n = this._selectionState, r = n, s = e ? e === this._point ? 4 : e === this._handleIn ? 1 : e === this._handleOut ? 2 : 0 : 7;
                    t ? n |= s : n &= ~s, this._selectionState = n, i && n !== r && (i._updateSelection(this, r, n), i._changed(129))
                }, getIndex: function () {
                    return this._index !== t ? this._index : null
                }, getPath: function () {
                    return this._path || null
                }, getCurve: function () {
                    var t = this._path, e = this._index;
                    return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
                }, getLocation: function () {
                    var t = this.getCurve();
                    return t ? new R(t, this === t._segment1 ? 0 : 1) : null
                }, getNext: function () {
                    var t = this._path && this._path._segments;
                    return t && (t[this._index + 1] || this._path._closed && t[0]) || null
                }, getPrevious: function () {
                    var t = this._path && this._path._segments;
                    return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
                }, reverse: function () {
                    return new E(this._point, this._handleOut, this._handleIn)
                }, remove: function () {
                    return this._path ? !!this._path.removeSegment(this._index) : !1
                }, clone: function () {
                    return new E(this._point, this._handleIn, this._handleOut)
                }, equals: function (t) {
                    return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
                }, toString: function () {
                    var t = ["point: " + this._point];
                    return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
                }, transform: function (t) {
                    this._transformCoordinates(t, new Array(6), !0), this._changed()
                }, _transformCoordinates: function (t, e, i) {
                    var n = this._point, r = i && this._handleIn.isZero() ? null : this._handleIn, s = i && this._handleOut.isZero() ? null : this._handleOut, o = n._x, a = n._y, l = 2;
                    return e[0] = o, e[1] = a, r && (e[l++] = r._x + o, e[l++] = r._y + a), s && (e[l++] = s._x + o, e[l++] = s._y + a), t && (t._transformCoordinates(e, e, l / 2), o = e[0], a = e[1], i ? (n._x = o, n._y = a, l = 2, r && (r._x = e[l++] - o, r._y = e[l++] - a), s && (s._x = e[l++] - o, s._y = e[l++] - a)) : (r || (e[l++] = o, e[l++] = a), s || (e[l++] = o, e[l++] = a))), e
                }
            }), M = c.extend({
                initialize: function (e, i, n) {
                    var r, s, o;
                    if (e)if ((r = e[0]) !== t) s = e[1]; else {
                        var a = e;
                        (r = a.x) === t && (a = c.read(arguments), r = a.x), s = a.y, o = a.selected
                    } else r = s = 0;
                    this._x = r, this._y = s, this._owner = i, i[n] = this, o && this.setSelected(!0)
                }, set: function (t, e) {
                    return this._x = t, this._y = e, this._owner._changed(this), this
                }, _serialize: function (t) {
                    var e = t.formatter, i = e.number(this._x), n = e.number(this._y);
                    return this.isSelected() ? {x: i, y: n, selected: !0} : [i, n]
                }, getX: function () {
                    return this._x
                }, setX: function (t) {
                    this._x = t, this._owner._changed(this)
                }, getY: function () {
                    return this._y
                }, setY: function (t) {
                    this._y = t, this._owner._changed(this)
                }, isZero: function () {
                    return h.isZero(this._x) && h.isZero(this._y)
                }, setSelected: function (t) {
                    this._owner.setSelected(t, this)
                }, isSelected: function () {
                    return this._owner.isSelected(this)
                }
            }), D = n.extend({
                _class: "Curve", initialize: function (t, e, i, n, r, s, o, a) {
                    var l = arguments.length;
                    if (3 === l) this._path = t, this._segment1 = e, this._segment2 = i; else if (0 === l) this._segment1 = new E, this._segment2 = new E; else if (1 === l) this._segment1 = new E(t.segment1), this._segment2 = new E(t.segment2); else if (2 === l) this._segment1 = new E(t), this._segment2 = new E(e); else {
                        var u, h, c, d;
                        4 === l ? (u = t, h = e, c = i, d = n) : 8 === l && (u = [t, e], d = [o, a], h = [i - t, n - e], c = [r - o, s - a]), this._segment1 = new E(u, null, h), this._segment2 = new E(d, c, null)
                    }
                }, _changed: function () {
                    this._length = this._bounds = t
                }, getPoint1: function () {
                    return this._segment1._point
                }, setPoint1: function () {
                    var t = c.read(arguments);
                    this._segment1._point.set(t.x, t.y)
                }, getPoint2: function () {
                    return this._segment2._point
                }, setPoint2: function () {
                    var t = c.read(arguments);
                    this._segment2._point.set(t.x, t.y)
                }, getHandle1: function () {
                    return this._segment1._handleOut
                }, setHandle1: function () {
                    var t = c.read(arguments);
                    this._segment1._handleOut.set(t.x, t.y)
                }, getHandle2: function () {
                    return this._segment2._handleIn
                }, setHandle2: function () {
                    var t = c.read(arguments);
                    this._segment2._handleIn.set(t.x, t.y)
                }, getSegment1: function () {
                    return this._segment1
                }, getSegment2: function () {
                    return this._segment2
                }, getPath: function () {
                    return this._path
                }, getIndex: function () {
                    return this._segment1._index
                }, getNext: function () {
                    var t = this._path && this._path._curves;
                    return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
                }, getPrevious: function () {
                    var t = this._path && this._path._curves;
                    return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
                }, isSelected: function () {
                    return this.getPoint1().isSelected() && this.getHandle2().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
                }, setSelected: function (t) {
                    this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
                }, getValues: function (t) {
                    return D.getValues(this._segment1, this._segment2, t)
                }, getPoints: function () {
                    for (var t = this.getValues(), e = [], i = 0; 8 > i; i += 2)e.push(new c(t[i], t[i + 1]));
                    return e
                }, getLength: function () {
                    return null == this._length && (this._length = this.isLinear() ? this._segment2._point.getDistance(this._segment1._point) : D.getLength(this.getValues(), 0, 1)), this._length
                }, getArea: function () {
                    return D.getArea(this.getValues())
                }, getPart: function (t, e) {
                    return new D(D.getPart(this.getValues(), t, e))
                }, getPartLength: function (t, e) {
                    return D.getLength(this.getValues(), t, e)
                }, isLinear: function () {
                    return this._segment1._handleOut.isZero() && this._segment2._handleIn.isZero()
                }, getIntersections: function (t) {
                    return D.filterIntersections(D.getIntersections(this.getValues(), t.getValues(), this, t, []))
                }, _getParameter: function (e, i) {
                    return i ? e : e && e.curve === this ? e.parameter : e === t && i === t ? .5 : this.getParameterAt(e, 0)
                }, divide: function (t, e, i) {
                    var n = this._getParameter(t, e), r = 1e-6, s = null;
                    if (n > r && 1 - r > n) {
                        var o = D.subdivide(this.getValues(), n), a = i ? !1 : this.isLinear(), l = o[0], u = o[1];
                        a || (this._segment1._handleOut.set(l[2] - l[0], l[3] - l[1]), this._segment2._handleIn.set(u[4] - u[6], u[5] - u[7]));
                        var h = l[6], d = l[7], p = new E(new c(h, d), !a && new c(l[4] - h, l[5] - d), !a && new c(u[2] - h, u[3] - d));
                        if (this._path) this._segment1._index > 0 && 0 === this._segment2._index ? this._path.add(p) : this._path.insert(this._segment2._index, p), s = this; else {
                            var f = this._segment2;
                            this._segment2 = p, s = new D(p, f)
                        }
                    }
                    return s
                }, split: function (t, e) {
                    return this._path ? this._path.split(this._segment1._index, this._getParameter(t, e)) : null
                }, reverse: function () {
                    return new D(this._segment2.reverse(), this._segment1.reverse())
                }, remove: function () {
                    var t = !1;
                    if (this._path) {
                        var e = this._segment2, i = e._handleOut;
                        t = e.remove(), t && this._segment1._handleOut.set(i.x, i.y)
                    }
                    return t
                }, clone: function () {
                    return new D(this._segment1, this._segment2)
                }, toString: function () {
                    var t = ["point1: " + this._segment1._point];
                    return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
                }, statics: {
                    getValues: function (t, e, i) {
                        var n = t._point, r = t._handleOut, s = e._handleIn, o = e._point, a = [n._x, n._y, n._x + r._x, n._y + r._y, o._x + s._x, o._y + s._y, o._x, o._y];
                        return i && i._transformCoordinates(a, a, 4), a
                    }, evaluate: function (t, e, i) {
                        var n, r, s = t[0], o = t[1], a = t[2], l = t[3], u = t[4], h = t[5], d = t[6], p = t[7], f = 1e-6;
                        if (0 === i && (f > e || e > 1 - f)) {
                            var g = f > e;
                            n = g ? s : d, r = g ? o : p
                        } else {
                            var _ = 3 * (a - s), m = 3 * (u - a) - _, v = d - s - _ - m, y = 3 * (l - o), w = 3 * (h - l) - y, b = p - o - y - w;
                            if (0 === i) n = ((v * e + m) * e + _) * e + s, r = ((b * e + w) * e + y) * e + o; else if (f > e && a === s && l === o || e > 1 - f && u === d && h === p ? (n = u - a, r = h - l) : f > e ? (n = _, r = y) : e > 1 - f ? (n = 3 * (d - u), r = 3 * (p - h)) : (n = (3 * v * e + 2 * m) * e + _, r = (3 * b * e + 2 * w) * e + y), 3 === i) {
                                var x = 6 * v * e + 2 * m, T = 6 * b * e + 2 * w;
                                return (n * T - r * x) / Math.pow(n * n + r * r, 1.5)
                            }
                        }
                        return 2 === i ? new c(r, -n) : new c(n, r)
                    }, subdivide: function (e, i) {
                        var n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], l = e[5], u = e[6], h = e[7];
                        i === t && (i = .5);
                        var c = 1 - i, d = c * n + i * s, p = c * r + i * o, f = c * s + i * a, g = c * o + i * l, _ = c * a + i * u, m = c * l + i * h, v = c * d + i * f, y = c * p + i * g, w = c * f + i * _, b = c * g + i * m, x = c * v + i * w, T = c * y + i * b;
                        return [[n, r, d, p, v, y, x, T], [x, T, w, b, _, m, u, h]]
                    }, solveCubic: function (t, e, i, n, r, s) {
                        var o = t[e], a = t[e + 2], l = t[e + 4], u = t[e + 6], c = 3 * (a - o), d = 3 * (l - a) - c, p = u - o - c - d, f = h.isZero;
                        return f(p) && f(d) && (p = d = 0), h.solveCubic(p, d, c, o - i, n, r, s)
                    }, getParameterOf: function (t, e, i) {
                        var n = 1e-6;
                        if (Math.abs(t[0] - e) < n && Math.abs(t[1] - i) < n)return 0;
                        if (Math.abs(t[6] - e) < n && Math.abs(t[7] - i) < n)return 1;
                        for (var r, s, o = [], a = [], l = D.solveCubic(t, 0, e, o, 0, 1), u = D.solveCubic(t, 1, i, a, 0, 1), h = 0; -1 == l || l > h;)if (-1 == l || (r = o[h++]) >= 0 && 1 >= r) {
                            for (var c = 0; -1 == u || u > c;)if ((-1 == u || (s = a[c++]) >= 0 && 1 >= s) && (-1 == l ? r = s : -1 == u && (s = r), Math.abs(r - s) < n))return .5 * (r + s);
                            if (-1 == l)break
                        }
                        return null
                    }, getPart: function (t, e, i) {
                        return e > 0 && (t = D.subdivide(t, e)[1]), 1 > i && (t = D.subdivide(t, (i - e) / (1 - e))[0]), t
                    }, isLinear: function (t) {
                        var e = h.isZero;
                        return e(t[0] - t[2]) && e(t[1] - t[3]) && e(t[4] - t[6]) && e(t[5] - t[7])
                    }, isFlatEnough: function (t, e) {
                        var i = t[0], n = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], u = t[7], h = 3 * r - 2 * i - l, c = 3 * s - 2 * n - u, d = 3 * o - 2 * l - i, p = 3 * a - 2 * u - n;
                        return Math.max(h * h, d * d) + Math.max(c * c, p * p) < 10 * e * e
                    }, getArea: function (t) {
                        var e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], o = t[5], a = t[6], l = t[7];
                        return (3 * r * e - 1.5 * r * s - 1.5 * r * a - 3 * i * n - 1.5 * i * s - .5 * i * a + 1.5 * o * e + 1.5 * o * n - 3 * o * a + .5 * l * e + 1.5 * l * n + 3 * l * s) / 10
                    }, getEdgeSum: function (t) {
                        return (t[0] - t[2]) * (t[3] + t[1]) + (t[2] - t[4]) * (t[5] + t[3]) + (t[4] - t[6]) * (t[7] + t[5])
                    }, getBounds: function (t) {
                        for (var e = t.slice(0, 2), i = e.slice(), n = [0, 0], r = 0; 2 > r; r++)D._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, i, n);
                        return new g(e[0], e[1], i[0] - e[0], i[1] - e[1])
                    }, _addBounds: function (t, e, i, n, r, s, o, a, l) {
                        function u(t, e) {
                            var i = t - e, n = t + e;
                            i < o[r] && (o[r] = i), n > a[r] && (a[r] = n)
                        }

                        var c = 3 * (e - i) - t + n, d = 2 * (t + i) - 4 * e, p = e - t, f = h.solveQuadratic(c, d, p, l), g = 1e-6, _ = 1 - g;
                        u(n, 0);
                        for (var m = 0; f > m; m++) {
                            var v = l[m], y = 1 - v;
                            v > g && _ > v && u(y * y * y * t + 3 * y * y * v * e + 3 * y * v * v * i + v * v * v * n, s)
                        }
                    }
                }
            }, n.each(["getBounds", "getStrokeBounds", "getHandleBounds", "getRoughBounds"], function (t) {
                this[t] = function () {
                    this._bounds || (this._bounds = {});
                    var e = this._bounds[t];
                    return e || (e = this._bounds[t] = z[t]([this._segment1, this._segment2], !1, this._path.getStyle())), e.clone()
                }
            }, {}), n.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function (t, e) {
                this[t + "At"] = function (t, i) {
                    var n = this.getValues();
                    return D.evaluate(n, i ? t : D.getParameterAt(n, t, 0), e)
                }, this[t] = function (t) {
                    return D.evaluate(this.getValues(), t, e)
                }
            }, {
                beans: !1, getParameterAt: function (t, e) {
                    return D.getParameterAt(this.getValues(), t, e)
                }, getParameterOf: function () {
                    var t = c.read(arguments);
                    return D.getParameterOf(this.getValues(), t.x, t.y)
                }, getLocationAt: function (t, e) {
                    return e || (t = this.getParameterAt(t)), t >= 0 && 1 >= t && new R(this, t)
                }, getLocationOf: function () {
                    return this.getLocationAt(this.getParameterOf(c.read(arguments)), !0)
                }, getOffsetOf: function () {
                    var t = this.getLocationOf.apply(this, arguments);
                    return t ? t.getOffset() : null
                }, getNearestLocation: function () {
                    function t(t) {
                        if (t >= 0 && 1 >= t) {
                            var n = e.getDistance(D.evaluate(i, t, 0), !0);
                            if (r > n)return r = n, s = t, !0
                        }
                    }

                    for (var e = c.read(arguments), i = this.getValues(), n = 100, r = 1 / 0, s = 0, o = 0; n >= o; o++)t(o / n);
                    for (var a = 1 / (2 * n); a > 1e-6;)t(s - a) || t(s + a) || (a /= 2);
                    var l = D.evaluate(i, s, 0);
                    return new R(this, s, l, null, null, null, e.getDistance(l))
                }, getNearestPoint: function () {
                    return this.getNearestLocation.apply(this, arguments).getPoint()
                }
            }), new function () {
                function e(t) {
                    var e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], o = t[5], a = t[6], l = t[7], u = 9 * (n - s) + 3 * (a - e), h = 6 * (e + s) - 12 * n, c = 3 * (n - e), d = 9 * (r - o) + 3 * (l - i), p = 6 * (i + o) - 12 * r, f = 3 * (r - i);
                    return function (t) {
                        var e = (u * t + h) * t + c, i = (d * t + p) * t + f;
                        return Math.sqrt(e * e + i * i)
                    }
                }

                function i(t, e) {
                    return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
                }

                return {
                    statics: !0, getLength: function (n, r, s) {
                        r === t && (r = 0), s === t && (s = 1);
                        var o = h.isZero;
                        if (0 === r && 1 === s && o(n[0] - n[2]) && o(n[1] - n[3]) && o(n[6] - n[4]) && o(n[7] - n[5])) {
                            var a = n[6] - n[0], l = n[7] - n[1];
                            return Math.sqrt(a * a + l * l)
                        }
                        var u = e(n);
                        return h.integrate(u, r, s, i(r, s))
                    }, getParameterAt: function (n, r, s) {
                        function o(t) {
                            return f += h.integrate(c, s, t, i(s, t)), s = t, f - r
                        }

                        if (s === t && (s = 0 > r ? 1 : 0), 0 === r)return s;
                        var a = r > 0, l = a ? s : 0, u = a ? 1 : s, c = e(n), d = h.integrate(c, l, u, i(l, u));
                        if (Math.abs(r) >= d)return a ? u : l;
                        var p = r / d, f = 0;
                        return h.findRoot(o, c, s + p, l, u, 16, 1e-6)
                    }
                }
            }, new function () {
                function t(t, e, i, n, r, s, o, a) {
                    var l = new R(i, n, r, s, o, a);
                    (!e || e(l)) && t.push(l)
                }

                function e(r, s, o, a, l, u, h, c, d, p, f, g, _) {
                    if (!(_ > 32)) {
                        var m, v, w, b = s[0], x = s[1], T = s[6], S = s[7], C = 1e-6, k = y.getSignedDistance, P = k(b, x, T, S, s[2], s[3]) || 0, A = k(b, x, T, S, s[4], s[5]) || 0, O = P * A > 0 ? .75 : 4 / 9, E = O * Math.min(0, P, A), M = O * Math.max(0, P, A), R = k(b, x, T, S, r[0], r[1]), j = k(b, x, T, S, r[2], r[3]), z = k(b, x, T, S, r[4], r[5]), L = k(b, x, T, S, r[6], r[7]);
                        if (b === T && C >= p - d && _ > 3) v = m = (c + h) / 2, w = 0; else {
                            var N, I, F = i(R, j, z, L), $ = F[0], B = F[1];
                            if (N = n($, B, E, M), $.reverse(), B.reverse(), I = n($, B, E, M), null == N || null == I)return;
                            r = D.getPart(r, N, I), w = I - N, m = c * N + h * (1 - N), v = c * I + h * (1 - I)
                        }
                        if (f > .5 && w > .5)if (v - m > p - d) {
                            var q = D.subdivide(r, .5), H = m + (v - m) / 2;
                            e(s, q[0], a, o, l, u, d, p, m, H, w, !g, ++_), e(s, q[1], a, o, l, u, d, p, H, v, w, !g, _)
                        } else {
                            var q = D.subdivide(s, .5), H = d + (p - d) / 2;
                            e(q[0], r, a, o, l, u, d, H, m, v, w, !g, ++_), e(q[1], r, a, o, l, u, H, p, m, v, w, !g, _)
                        } else if (Math.max(p - d, v - m) < C) {
                            var W = m + (v - m) / 2, V = d + (p - d) / 2;
                            g ? t(l, u, a, V, D.evaluate(s, V, 0), o, W, D.evaluate(r, W, 0)) : t(l, u, o, W, D.evaluate(r, W, 0), a, V, D.evaluate(s, V, 0))
                        } else w > 0 && e(s, r, a, o, l, u, d, p, m, v, w, !g, ++_)
                    }
                }

                function i(t, e, i, n) {
                    var r, s = [0, t], o = [1 / 3, e], a = [2 / 3, i], l = [1, n], u = y.getSignedDistance, h = u(0, t, 1, n, 1 / 3, e), c = u(0, t, 1, n, 2 / 3, i), d = !1;
                    if (0 > h * c) r = [[s, o, l], [s, a, l]], d = 0 > h; else {
                        var p, f = 0, g = 0 === h || 0 === c;
                        Math.abs(h) > Math.abs(c) ? (p = o, f = (n - i - (n - t) / 3) * (2 * (n - i) - n + e) / 3) : (p = a, f = (e - t + (t - n) / 3) * (-2 * (t - e) + t - i) / 3), r = 0 > f || g ? [[s, p, l], [s, l]] : [[s, o, a, l], [s, l]], d = h ? 0 > h : 0 > c
                    }
                    return d ? r.reverse() : r
                }

                function n(t, e, i, n) {
                    return t[0][1] < i ? r(t, !0, i) : e[0][1] > n ? r(e, !1, n) : t[0][0]
                }

                function r(t, e, i) {
                    for (var n = t[0][0], r = t[0][1], s = 1, o = t.length; o > s; s++) {
                        var a = t[s][0], l = t[s][1];
                        if (e ? l >= i : i >= l)return n + (i - r) * (a - n) / (l - r);
                        n = a, r = l
                    }
                    return null
                }

                function s(e, i, n, r, s, o) {
                    for (var a = D.isLinear(e), l = a ? i : e, u = a ? e : i, h = u[0], c = u[1], d = u[6], p = u[7], f = d - h, g = p - c, _ = Math.atan2(-g, f), m = Math.sin(_), v = Math.cos(_), y = f * v - g * m, w = [0, 0, 0, 0, y, 0, y, 0], b = [], x = 0; 8 > x; x += 2) {
                        var T = l[x] - h, S = l[x + 1] - c;
                        b.push(T * v - S * m, S * v + T * m)
                    }
                    for (var C = [], k = D.solveCubic(b, 1, 0, C, 0, 1), x = 0; k > x; x++) {
                        var P = C[x], T = D.evaluate(b, P, 0).x;
                        if (T >= 0 && y >= T) {
                            var A = D.getParameterOf(w, T, 0), O = a ? A : P, E = a ? P : A;
                            t(s, o, n, O, D.evaluate(e, O, 0), r, E, D.evaluate(i, E, 0))
                        }
                    }
                }

                function o(e, i, n, r, s, o) {
                    var a = y.intersect(e[0], e[1], e[6], e[7], i[0], i[1], i[6], i[7]);
                    if (a) {
                        var l = a.x, u = a.y;
                        t(s, o, n, D.getParameterOf(e, l, u), a, r, D.getParameterOf(i, l, u), a)
                    }
                }

                return {
                    statics: {
                        getIntersections: function (i, n, r, a, l, u) {
                            var h = D.isLinear(i), c = D.isLinear(n), d = r.getPoint1(), p = r.getPoint2(), f = a.getPoint1(), g = a.getPoint2(), _ = 1e-6;
                            return d.isClose(f, _) && t(l, u, r, 0, d, a, 0, d), d.isClose(g, _) && t(l, u, r, 0, d, a, 1, d), (h && c ? o : h || c ? s : e)(i, n, r, a, l, u, 0, 1, 0, 1, 0, !1, 0), p.isClose(f, _) && t(l, u, r, 1, p, a, 0, p), p.isClose(g, _) && t(l, u, r, 1, p, a, 1, p), l
                        }, filterIntersections: function (t, e) {
                            function i(t, e) {
                                var i = t.getPath(), n = e.getPath();
                                return i === n ? t.getIndex() + t.getParameter() - (e.getIndex() + e.getParameter()) : i._id - n._id
                            }

                            for (var n = t.length - 1, r = 1 - 1e-6, s = n; s >= 0; s--) {
                                var o = t[s], a = o._curve.getNext(), l = o._curve2.getNext();
                                a && o._parameter >= r && (o._parameter = 0, o._curve = a), l && o._parameter2 >= r && (o._parameter2 = 0, o._curve2 = l)
                            }
                            if (n > 0) {
                                t.sort(i);
                                for (var s = n; s > 0; s--)t[s].equals(t[s - 1]) && (t.splice(s, 1), n--)
                            }
                            if (e) {
                                for (var s = n; s >= 0; s--)t.push(t[s].getIntersection());
                                t.sort(i)
                            }
                            return t
                        }
                    }
                }
            }), R = n.extend({
                _class: "CurveLocation", beans: !0, initialize: function bt(t, e, i, n, r, s, o) {
                    this._id = bt._id = (bt._id || 0) + 1, this._curve = t, this._segment1 = t._segment1, this._segment2 = t._segment2, this._parameter = e, this._point = i, this._curve2 = n, this._parameter2 = r, this._point2 = s, this._distance = o
                }, getSegment: function (t) {
                    if (!this._segment) {
                        var e = this.getCurve(), i = this.getParameter();
                        if (1 === i) this._segment = e._segment2; else if (0 === i || t) this._segment = e._segment1; else {
                            if (null == i)return null;
                            this._segment = e.getPartLength(0, i) < e.getPartLength(i, 1) ? e._segment1 : e._segment2
                        }
                    }
                    return this._segment
                }, getCurve: function (t) {
                    return (!this._curve || t) && (this._curve = this._segment1.getCurve(), null == this._curve.getParameterOf(this._point) && (this._curve = this._segment2.getPrevious().getCurve())), this._curve
                }, getIntersection: function () {
                    var t = this._intersection;
                    if (!t && this._curve2) {
                        var e = this._parameter2;
                        this._intersection = t = new R(this._curve2, e, this._point2 || this._point, this), t._intersection = this
                    }
                    return t
                }, getPath: function () {
                    var t = this.getCurve();
                    return t && t._path
                }, getIndex: function () {
                    var t = this.getCurve();
                    return t && t.getIndex()
                }, getOffset: function () {
                    var t = this.getPath();
                    return t ? t._getOffset(this) : this.getCurveOffset()
                }, getCurveOffset: function () {
                    var t = this.getCurve(), e = this.getParameter();
                    return null != e && t && t.getPartLength(0, e)
                }, getParameter: function (t) {
                    if ((null == this._parameter || t) && this._point) {
                        var e = this.getCurve(t);
                        this._parameter = e && e.getParameterOf(this._point)
                    }
                    return this._parameter
                }, getPoint: function (t) {
                    if ((!this._point || t) && null != this._parameter) {
                        var e = this.getCurve(t);
                        this._point = e && e.getPointAt(this._parameter, !0)
                    }
                    return this._point
                }, getDistance: function () {
                    return this._distance
                }, divide: function () {
                    var t = this.getCurve(!0);
                    return t && t.divide(this.getParameter(!0), !0)
                }, split: function () {
                    var t = this.getCurve(!0);
                    return t && t.split(this.getParameter(!0), !0)
                }, equals: function (t) {
                    var e = Math.abs, i = 1e-6;
                    return this === t || t && this._curve === t._curve && this._curve2 === t._curve2 && e(this._parameter - t._parameter) <= i && e(this._parameter2 - t._parameter2) <= i || !1
                }, toString: function () {
                    var t = [], e = this.getPoint(), i = u.instance;
                    e && t.push("point: " + e);
                    var n = this.getIndex();
                    null != n && t.push("index: " + n);
                    var r = this.getParameter();
                    return null != r && t.push("parameter: " + i.number(r)), null != this._distance && t.push("distance: " + i.number(this._distance)), "{ " + t.join(", ") + " }"
                }
            }, n.each(["getTangent", "getNormal", "getCurvature"], function (t) {
                var e = t + "At";
                this[t] = function () {
                    var t = this.getParameter(), i = this.getCurve();
                    return null != t && i && i[e](t, !0)
                }
            }, {})), j = x.extend({
                _class: "PathItem", initialize: function () {
                }, getIntersections: function (t, e, i) {
                    this === t && (t = null);
                    var n = [], r = this.getCurves(), s = t ? t.getCurves() : r, o = this._matrix.orNullIfIdentity(), a = t ? (e || t._matrix).orNullIfIdentity() : o, l = r.length, u = t ? s.length : l, h = [], c = 1e-6, d = 1 - c;
                    if (t && !this.getBounds(o).touches(t.getBounds(a)))return [];
                    for (var p = 0; u > p; p++)h[p] = s[p].getValues(a);
                    for (var p = 0; l > p; p++) {
                        var f = r[p], g = t ? f.getValues(o) : h[p];
                        if (!t) {
                            var _ = f.getSegment1(), m = f.getSegment2(), v = _._handleOut, w = m._handleIn;
                            if (new y(_._point.subtract(v), v.multiply(2), !0).intersect(new y(m._point.subtract(w), w.multiply(2), !0), !1)) {
                                var b = D.subdivide(g);
                                D.getIntersections(b[0], b[1], f, f, n, function (t) {
                                    return t._parameter <= d ? (t._parameter /= 2, t._parameter2 = .5 + t._parameter2 / 2, !0) : void 0
                                })
                            }
                        }
                        for (var x = t ? 0 : p + 1; u > x; x++)D.getIntersections(g, h[x], f, s[x], n, !t && (x === p + 1 || x === u - 1 && 0 === p) && function (t) {
                                var e = t._parameter;
                                return e >= c && d >= e
                            })
                    }
                    return D.filterIntersections(n, i)
                }, _asPathItem: function () {
                    return this
                }, setPathData: function (t) {
                    function e(t, e) {
                        var i = +n[t];
                        return a && (i += l[e]), i
                    }

                    function i(t) {
                        return new c(e(t, "x"), e(t + 1, "y"))
                    }

                    var n, r, s, o = t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi), a = !1, l = new c, u = new c;
                    this.clear();
                    for (var h = 0, d = o && o.length; d > h; h++) {
                        var f = o[h], g = f[0], _ = g.toLowerCase();
                        n = f.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
                        var m = n && n.length;
                        switch (a = g === _, "z" !== r || /[mz]/.test(_) || this.moveTo(l = u), _) {
                            case"m":
                            case"l":
                                var v = "m" === _;
                                v && r && "z" !== r && this.closePath(!0);
                                for (var y = 0; m > y; y += 2)this[0 === y && v ? "moveTo" : "lineTo"](l = i(y));
                                s = l, v && (u = l);
                                break;
                            case"h":
                            case"v":
                                for (var w = "h" === _ ? "x" : "y", y = 0; m > y; y++)l[w] = e(y, w), this.lineTo(l);
                                s = l;
                                break;
                            case"c":
                                for (var y = 0; m > y; y += 6)this.cubicCurveTo(i(y), s = i(y + 2), l = i(y + 4));
                                break;
                            case"s":
                                for (var y = 0; m > y; y += 4)this.cubicCurveTo(/[cs]/.test(r) ? l.multiply(2).subtract(s) : l, s = i(y), l = i(y + 2)), r = _;
                                break;
                            case"q":
                                for (var y = 0; m > y; y += 4)this.quadraticCurveTo(s = i(y), l = i(y + 2));
                                break;
                            case"t":
                                for (var y = 0; m > y; y += 2)this.quadraticCurveTo(s = /[qt]/.test(r) ? l.multiply(2).subtract(s) : l, l = i(y)), r = _;
                                break;
                            case"a":
                                for (var y = 0; m > y; y += 7)this.arcTo(l = i(y + 5), new p(+n[y], +n[y + 1]), +n[y + 2], +n[y + 4], +n[y + 3]);
                                break;
                            case"z":
                                this.closePath(!0)
                        }
                        r = _
                    }
                }, _canComposite: function () {
                    return !(this.hasFill() && this.hasStroke())
                }, _contains: function (t) {
                    var e = this._getWinding(t, !1, !0);
                    return !!("evenodd" === this.getWindingRule() ? 1 & e : e)
                }
            }), z = j.extend({
                _class: "Path", _serializeFields: {segments: [], closed: !1}, initialize: function (e) {
                    this._closed = !1, this._segments = [];
                    var i = Array.isArray(e) ? "object" == typeof e[0] ? e : arguments : !e || e.size !== t || e.x === t && e.point === t ? null : arguments;
                    i && i.length > 0 ? this.setSegments(i) : (this._curves = t, this._selectedSegmentState = 0, i || "string" != typeof e || (this.setPathData(e), e = null)), this._initialize(!i && e)
                }, _equals: function (t) {
                    return this._closed === t._closed && n.equals(this._segments, t._segments)
                }, clone: function (e) {
                    var i = new z(x.NO_INSERT);
                    return i.setSegments(this._segments), i._closed = this._closed, this._clockwise !== t && (i._clockwise = this._clockwise), this._clone(i, e)
                }, _changed: function xt(e) {
                    if (xt.base.call(this, e), 8 & e) {
                        var i = this._parent;
                        if (i && (i._currentPath = t), this._length = this._clockwise = t, this._curves && !(16 & e))for (var n = 0, r = this._curves.length; r > n; n++)this._curves[n]._changed();
                        this._monoCurves = t
                    } else 32 & e && (this._bounds = t)
                }, getStyle: function () {
                    var t = this._parent;
                    return (t instanceof L ? t : this)._style
                }, getSegments: function () {
                    return this._segments
                }, setSegments: function (e) {
                    var i = this.isFullySelected();
                    this._segments.length = 0, this._selectedSegmentState = 0, this._curves = t, e && e.length > 0 && this._add(E.readAll(e)), i && this.setFullySelected(!0)
                }, getFirstSegment: function () {
                    return this._segments[0]
                }, getLastSegment: function () {
                    return this._segments[this._segments.length - 1]
                }, getCurves: function () {
                    var t = this._curves, e = this._segments;
                    if (!t) {
                        var i = this._countCurves();
                        t = this._curves = new Array(i);
                        for (var n = 0; i > n; n++)t[n] = new D(this, e[n], e[n + 1] || e[0])
                    }
                    return t
                }, getFirstCurve: function () {
                    return this.getCurves()[0]
                }, getLastCurve: function () {
                    var t = this.getCurves();
                    return t[t.length - 1]
                }, isClosed: function () {
                    return this._closed
                }, setClosed: function (t) {
                    if (this._closed != (t = !!t)) {
                        if (this._closed = t, this._curves) {
                            var e = this._curves.length = this._countCurves();
                            t && (this._curves[e - 1] = new D(this, this._segments[e - 1], this._segments[0]))
                        }
                        this._changed(25)
                    }
                }
            }, {
                beans: !0, getPathData: function (t, e) {
                    function i(e, i) {
                        e._transformCoordinates(t, g, !1), n = g[0], r = g[1], _ ? (m.push("M" + f.pair(n, r)), _ = !1) : (a = g[2], l = g[3], a === n && l === r && h === s && c === o ? i || m.push("l" + f.pair(n - s, r - o)) : m.push("c" + f.pair(h - s, c - o) + " " + f.pair(a - s, l - o) + " " + f.pair(n - s, r - o))), s = n, o = r, h = g[4], c = g[5]
                    }

                    var n, r, s, o, a, l, h, c, d = this._segments, p = d.length, f = new u(e), g = new Array(6), _ = !0, m = [];
                    if (0 === p)return "";
                    for (var v = 0; p > v; v++)i(d[v]);
                    return this._closed && p > 0 && (i(d[0], !0), m.push("z")), m.join("")
                }
            }, {
                isEmpty: function () {
                    return 0 === this._segments.length
                }, isPolygon: function () {
                    for (var t = 0, e = this._segments.length; e > t; t++)if (!this._segments[t].isLinear())return !1;
                    return !0
                }, _transformContent: function (t) {
                    for (var e = new Array(6), i = 0, n = this._segments.length; n > i; i++)this._segments[i]._transformCoordinates(t, e, !0);
                    return !0
                }, _add: function (t, e) {
                    for (var i = this._segments, n = this._curves, r = t.length, s = null == e, e = s ? i.length : e, o = 0; r > o; o++) {
                        var a = t[o];
                        a._path && (a = t[o] = a.clone()), a._path = this, a._index = e + o, a._selectionState && this._updateSelection(a, 0, a._selectionState)
                    }
                    if (s) i.push.apply(i, t); else {
                        i.splice.apply(i, [e, 0].concat(t));
                        for (var o = e + r, l = i.length; l > o; o++)i[o]._index = o
                    }
                    if (n || t._curves) {
                        n || (n = this._curves = []);
                        var u = e > 0 ? e - 1 : e, h = u, c = Math.min(u + r, this._countCurves());
                        t._curves && (n.splice.apply(n, [u, 0].concat(t._curves)), h += t._curves.length);
                        for (var o = h; c > o; o++)n.splice(o, 0, new D(this, null, null));
                        this._adjustCurves(u, c)
                    }
                    return this._changed(25), t
                }, _adjustCurves: function (t, e) {
                    for (var i, n = this._segments, r = this._curves, s = t; e > s; s++)i = r[s], i._path = this, i._segment1 = n[s], i._segment2 = n[s + 1] || n[0], i._changed();
                    (i = r[this._closed && 0 === t ? n.length - 1 : t - 1]) && (i._segment2 = n[t] || n[0], i._changed()), (i = r[e]) && (i._segment1 = n[e], i._changed())
                }, _countCurves: function () {
                    var t = this._segments.length;
                    return !this._closed && t > 0 ? t - 1 : t
                }, add: function (t) {
                    return arguments.length > 1 && "number" != typeof t ? this._add(E.readAll(arguments)) : this._add([E.read(arguments)])[0]
                }, insert: function (t, e) {
                    return arguments.length > 2 && "number" != typeof e ? this._add(E.readAll(arguments, 1), t) : this._add([E.read(arguments, 1)], t)[0]
                }, addSegment: function () {
                    return this._add([E.read(arguments)])[0]
                }, insertSegment: function (t) {
                    return this._add([E.read(arguments, 1)], t)[0]
                }, addSegments: function (t) {
                    return this._add(E.readAll(t))
                }, insertSegments: function (t, e) {
                    return this._add(E.readAll(e), t)
                }, removeSegment: function (t) {
                    return this.removeSegments(t, t + 1)[0] || null
                }, removeSegments: function (t, e, i) {
                    t = t || 0, e = n.pick(e, this._segments.length);
                    var r = this._segments, s = this._curves, o = r.length, a = r.splice(t, e - t), l = a.length;
                    if (!l)return a;
                    for (var u = 0; l > u; u++) {
                        var h = a[u];
                        h._selectionState && this._updateSelection(h, h._selectionState, 0), h._index = h._path = null
                    }
                    for (var u = t, c = r.length; c > u; u++)r[u]._index = u;
                    if (s) {
                        var d = t > 0 && e === o + (this._closed ? 1 : 0) ? t - 1 : t, s = s.splice(d, l);
                        i && (a._curves = s.slice(1)), this._adjustCurves(d, d)
                    }
                    return this._changed(25), a
                }, clear: "#removeSegments", getLength: function () {
                    if (null == this._length) {
                        var t = this.getCurves();
                        this._length = 0;
                        for (var e = 0, i = t.length; i > e; e++)this._length += t[e].getLength()
                    }
                    return this._length
                }, getArea: function () {
                    for (var t = this.getCurves(), e = 0, i = 0, n = t.length; n > i; i++)e += t[i].getArea();
                    return e
                }, isFullySelected: function () {
                    var t = this._segments.length;
                    return this._selected && t > 0 && this._selectedSegmentState === 7 * t
                }, setFullySelected: function (t) {
                    t && this._selectSegments(!0), this.setSelected(t)
                }, setSelected: function Tt(t) {
                    t || this._selectSegments(!1), Tt.base.call(this, t)
                }, _selectSegments: function (t) {
                    var e = this._segments.length;
                    this._selectedSegmentState = t ? 7 * e : 0;
                    for (var i = 0; e > i; i++)this._segments[i]._selectionState = t ? 7 : 0
                }, _updateSelection: function (t, e, i) {
                    t._selectionState = i;
                    var n = this._selectedSegmentState += i - e;
                    n > 0 && this.setSelected(!0)
                }, flatten: function (t) {
                    for (var e = new N(this, 64, .1), i = 0, n = e.length / Math.ceil(e.length / t), r = e.length + (this._closed ? -n : n) / 2, s = []; r >= i;)s.push(new E(e.evaluate(i, 0))), i += n;
                    this.setSegments(s)
                }, reduce: function () {
                    for (var t = this.getCurves(), e = t.length - 1; e >= 0; e--) {
                        var i = t[e];
                        i.isLinear() && 0 === i.getLength() && i.remove()
                    }
                    return this
                }, simplify: function (t) {
                    if (this._segments.length > 2) {
                        var e = new I(this, t || 2.5);
                        this.setSegments(e.fit())
                    }
                }, split: function (t, e) {
                    if (null === e)return null;
                    if (1 === arguments.length) {
                        var i = t;
                        if ("number" == typeof i && (i = this.getLocationAt(i)), !i)return null;
                        t = i.index, e = i.parameter
                    }
                    var n = 1e-6;
                    e >= 1 - n && (t++, e--);
                    var r = this.getCurves();
                    if (t >= 0 && t < r.length) {
                        e > n && r[t++].divide(e, !0);
                        var s, o = this.removeSegments(t, this._segments.length, !0);
                        return this._closed ? (this.setClosed(!1), s = this) : s = this._clone((new z).insertAbove(this, !0)), s._add(o, 0), this.addSegment(o[0]), s
                    }
                    return null
                }, isClockwise: function () {
                    return this._clockwise !== t ? this._clockwise : z.isClockwise(this._segments)
                }, setClockwise: function (t) {
                    this.isClockwise() != (t = !!t) && this.reverse(), this._clockwise = t
                }, reverse: function () {
                    this._segments.reverse();
                    for (var e = 0, i = this._segments.length; i > e; e++) {
                        var n = this._segments[e], r = n._handleIn;
                        n._handleIn = n._handleOut, n._handleOut = r, n._index = e
                    }
                    this._curves = null, this._clockwise !== t && (this._clockwise = !this._clockwise), this._changed(9)
                }, join: function (t) {
                    if (t) {
                        var e = t._segments, i = this.getLastSegment(), n = t.getLastSegment();
                        if (!n)return this;
                        i && i._point.equals(n._point) && t.reverse();
                        var r = t.getFirstSegment();
                        if (i && i._point.equals(r._point)) i.setHandleOut(r._handleOut), this._add(e.slice(1)); else {
                            var s = this.getFirstSegment();
                            s && s._point.equals(r._point) && t.reverse(), n = t.getLastSegment(), s && s._point.equals(n._point) ? (s.setHandleIn(n._handleIn), this._add(e.slice(0, e.length - 1), 0)) : this._add(e.slice())
                        }
                        t.closed && this._add([e[0]]), t.remove()
                    }
                    var o = this.getFirstSegment(), a = this.getLastSegment();
                    return o !== a && o._point.equals(a._point) && (o.setHandleIn(a._handleIn), a.remove(), this.setClosed(!0)), this
                }, toShape: function (e) {
                    function i(t, e) {
                        return c[t].isColinear(c[e])
                    }

                    function n(t) {
                        return c[t].isOrthogonal()
                    }

                    function r(t) {
                        return c[t].isArc()
                    }

                    function s(t, e) {
                        return c[t]._point.getDistance(c[e]._point)
                    }

                    if (!this._closed)return null;
                    var o, a, l, u, c = this._segments;
                    if (this.isPolygon() && 4 === c.length && i(0, 2) && i(1, 3) && n(1) ? (o = C.Rectangle, a = new p(s(0, 3), s(0, 1)), u = c[1]._point.add(c[2]._point).divide(2)) : 8 === c.length && r(0) && r(2) && r(4) && r(6) && i(1, 5) && i(3, 7) ? (o = C.Rectangle, a = new p(s(1, 6), s(0, 3)), l = a.subtract(new p(s(0, 7), s(1, 2))).divide(2), u = c[3]._point.add(c[4]._point).divide(2)) : 4 === c.length && r(0) && r(1) && r(2) && r(3) && (h.isZero(s(0, 2) - s(1, 3)) ? (o = C.Circle, l = s(0, 2) / 2) : (o = C.Ellipse, l = new p(s(2, 0) / 2, s(3, 1) / 2)), u = c[1]._point), o) {
                        var d = this.getPosition(!0), f = new o({center: d, size: a, radius: l, insert: !1});
                        return f.rotate(u.subtract(d).getAngle() + 90), f.setStyle(this._style), (e || e === t) && f.insertAbove(this), f
                    }
                    return null
                }, _hitTestSelf: function (t, e) {
                    function i(e, i) {
                        return t.subtract(e).divide(i).length <= 1
                    }

                    function n(t, n, r) {
                        if (!e.selected || n.isSelected()) {
                            var s = t._point;
                            if (n !== s && (n = n.add(s)), i(n, w))return new O(r, f, {segment: t, point: n})
                        }
                    }

                    function r(t, i) {
                        return (i || e.segments) && n(t, t._point, "segment") || !i && e.handles && (n(t, t._handleIn, "handle-in") || n(t, t._handleOut, "handle-out"))
                    }

                    function s(t) {
                        h.add(t)
                    }

                    function o(e) {
                        if (("round" !== a || "round" !== l) && (h = new z({
                                internal: !0,
                                closed: !0
                            }), v || e._index > 0 && e._index < m - 1 ? "round" !== a && (e._handleIn.isZero() || e._handleOut.isZero()) && z._addBevelJoin(e, a, S, u, s, !0) : "round" !== l && z._addSquareCap(e, l, S, s, !0), !h.isEmpty())) {
                            var n;
                            return h.contains(t) || (n = h.getNearestLocation(t)) && i(n.getPoint(), y)
                        }
                        return i(e._point, w)
                    }

                    var a, l, u, h, d, p, f = this, g = this.getStyle(), _ = this._segments, m = _.length, v = this._closed, y = e._tolerancePadding, w = y, b = e.stroke && g.hasStroke(), x = e.fill && g.hasFill(), T = e.curves, S = b ? g.getStrokeWidth() / 2 : x && e.tolerance > 0 || T ? 0 : null;
                    if (null !== S && (S > 0 ? (a = g.getStrokeJoin(), l = g.getStrokeCap(), u = S * g.getMiterLimit(), w = y.add(new c(S, S))) : a = l = "round"), !e.ends || e.segments || v) {
                        if (e.segments || e.handles)for (var C = 0; m > C; C++)if (p = r(_[C]))return p
                    } else if (p = r(_[0], !0) || r(_[m - 1], !0))return p;
                    if (null !== S) {
                        if (d = this.getNearestLocation(t)) {
                            var k = d.getParameter();
                            0 === k || 1 === k && m > 1 ? o(d.getSegment()) || (d = null) : i(d.getPoint(), w) || (d = null)
                        }
                        if (!d && "miter" === a && m > 1)for (var C = 0; m > C; C++) {
                            var P = _[C];
                            if (t.getDistance(P._point) <= u && o(P)) {
                                d = P.getLocation();
                                break
                            }
                        }
                    }
                    return !d && x && this._contains(t) || d && !b && !T ? new O("fill", this) : d ? new O(b ? "stroke" : "curve", this, {
                                location: d,
                                point: d.getPoint()
                            }) : null
                }
            }, n.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function (t) {
                this[t + "At"] = function (e, i) {
                    var n = this.getLocationAt(e, i);
                    return n && n[t]()
                }
            }, {
                beans: !1, _getOffset: function (t) {
                    var e = t && t.getIndex();
                    if (null != e) {
                        for (var i = this.getCurves(), n = 0, r = 0; e > r; r++)n += i[r].getLength();
                        var s = i[e], o = t.getParameter();
                        return o > 0 && (n += s.getPartLength(0, o)), n
                    }
                    return null
                }, getLocationOf: function () {
                    for (var t = c.read(arguments), e = this.getCurves(), i = 0, n = e.length; n > i; i++) {
                        var r = e[i].getLocationOf(t);
                        if (r)return r
                    }
                    return null
                }, getOffsetOf: function () {
                    var t = this.getLocationOf.apply(this, arguments);
                    return t ? t.getOffset() : null
                }, getLocationAt: function (t, e) {
                    var i = this.getCurves(), n = 0;
                    if (e) {
                        var r = ~~t;
                        return i[r].getLocationAt(t - r, !0)
                    }
                    for (var s = 0, o = i.length; o > s; s++) {
                        var a = n, l = i[s];
                        if (n += l.getLength(), n > t)return l.getLocationAt(t - a)
                    }
                    return t <= this.getLength() ? new R(i[i.length - 1], 1) : null
                }, getNearestLocation: function () {
                    for (var t = c.read(arguments), e = this.getCurves(), i = 1 / 0, n = null, r = 0, s = e.length; s > r; r++) {
                        var o = e[r].getNearestLocation(t);
                        o._distance < i && (i = o._distance, n = o)
                    }
                    return n
                }, getNearestPoint: function () {
                    return this.getNearestLocation.apply(this, arguments).getPoint()
                }
            }), new function () {
                function t(t, e, i, n) {
                    function r(e) {
                        var i = o[e], n = o[e + 1];
                        (c != i || d != n) && (t.beginPath(), t.moveTo(c, d), t.lineTo(i, n), t.stroke(), t.beginPath(), t.arc(i, n, s, 0, 2 * Math.PI, !0), t.fill())
                    }

                    for (var s = n / 2, o = new Array(6), a = 0, l = e.length; l > a; a++) {
                        var u = e[a];
                        u._transformCoordinates(i, o, !1);
                        var h = u._selectionState, c = o[0], d = o[1];
                        if (1 & h && r(2), 2 & h && r(4), t.fillRect(c - s, d - s, n, n), !(4 & h)) {
                            var p = t.fillStyle;
                            t.fillStyle = "#ffffff", t.fillRect(c - s + 1, d - s + 1, n - 2, n - 2), t.fillStyle = p
                        }
                    }
                }

                function e(t, e, i) {
                    function n(e) {
                        if (i) e._transformCoordinates(i, f, !1), r = f[0], s = f[1]; else {
                            var n = e._point;
                            r = n._x, s = n._y
                        }
                        if (g) t.moveTo(r, s), g = !1; else {
                            if (i) l = f[2], u = f[3]; else {
                                var d = e._handleIn;
                                l = r + d._x, u = s + d._y
                            }
                            l === r && u === s && h === o && c === a ? t.lineTo(r, s) : t.bezierCurveTo(h, c, l, u, r, s)
                        }
                        if (o = r, a = s, i) h = f[4], c = f[5]; else {
                            var d = e._handleOut;
                            h = o + d._x, c = a + d._y
                        }
                    }

                    for (var r, s, o, a, l, u, h, c, d = e._segments, p = d.length, f = new Array(6), g = !0, _ = 0; p > _; _++)n(d[_]);
                    e._closed && p > 0 && n(d[0])
                }

                return {
                    _draw: function (t, i, n) {
                        function s(t) {
                            return c[(t % d + d) % d]
                        }

                        var o = i.dontStart, a = i.dontFinish || i.clip, l = this.getStyle(), u = l.hasFill(), h = l.hasStroke(), c = l.getDashArray(), d = !r.support.nativeDash && h && c && c.length;
                        if (o || t.beginPath(), !o && this._currentPath ? t.currentPath = this._currentPath : (u || h && !d || a) && (e(t, this, n), this._closed && t.closePath(), o || (this._currentPath = t.currentPath)), !a && (u || h) && (this._setStyles(t), u && (t.fill(l.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), h)) {
                            if (d) {
                                o || t.beginPath();
                                var p, f = new N(this, 32, .25, n), g = f.length, _ = -l.getDashOffset(), m = 0;
                                for (_ %= g; _ > 0;)_ -= s(m--) + s(m--);
                                for (; g > _;)p = _ + s(m++), (_ > 0 || p > 0) && f.drawPart(t, Math.max(_, 0), Math.max(p, 0)), _ = p + s(m++)
                            }
                            t.stroke()
                        }
                    }, _drawSelected: function (i, n) {
                        i.beginPath(), e(i, this, n), i.stroke(), t(i, this._segments, n, r.settings.handleSize)
                    }
                }
            }, new function () {
                function t(t) {
                    var e = t.length, i = [], n = [], r = 2;
                    i[0] = t[0] / r;
                    for (var s = 1; e > s; s++)n[s] = 1 / r, r = (e - 1 > s ? 4 : 2) - n[s], i[s] = (t[s] - i[s - 1]) / r;
                    for (var s = 1; e > s; s++)i[e - s - 1] -= n[e - s] * i[e - s];
                    return i
                }

                return {
                    smooth: function () {
                        var e = this._segments, i = e.length, n = this._closed, r = i, s = 0;
                        if (!(2 >= i)) {
                            n && (s = Math.min(i, 4), r += 2 * Math.min(i, s));
                            for (var o = [], a = 0; i > a; a++)o[a + s] = e[a]._point;
                            if (n)for (var a = 0; s > a; a++)o[a] = e[a + i - s]._point, o[a + i + s] = e[a]._point; else r--;
                            for (var l = [], a = 1; r - 1 > a; a++)l[a] = 4 * o[a]._x + 2 * o[a + 1]._x;
                            l[0] = o[0]._x + 2 * o[1]._x, l[r - 1] = 3 * o[r - 1]._x;
                            for (var u = t(l), a = 1; r - 1 > a; a++)l[a] = 4 * o[a]._y + 2 * o[a + 1]._y;
                            l[0] = o[0]._y + 2 * o[1]._y, l[r - 1] = 3 * o[r - 1]._y;
                            var h = t(l);
                            if (n) {
                                for (var a = 0, d = i; s > a; a++, d++) {
                                    var p = a / s, f = 1 - p, g = a + s, _ = d + s;
                                    u[d] = u[a] * p + u[d] * f, h[d] = h[a] * p + h[d] * f, u[_] = u[g] * f + u[_] * p, h[_] = h[g] * f + h[_] * p
                                }
                                r--
                            }
                            for (var m = null, a = s; r - s >= a; a++) {
                                var v = e[a - s];
                                m && v.setHandleIn(m.subtract(v._point)), r > a && (v.setHandleOut(new c(u[a], h[a]).subtract(v._point)), m = r - 1 > a ? new c(2 * o[a + 1]._x - u[a + 1], 2 * o[a + 1]._y - h[a + 1]) : new c((o[r]._x + u[r - 1]) / 2, (o[r]._y + h[r - 1]) / 2))
                            }
                            if (n && m) {
                                var v = this._segments[0];
                                v.setHandleIn(m.subtract(v._point))
                            }
                        }
                    }
                }
            }, new function () {
                function t(t) {
                    var e = t._segments;
                    if (0 === e.length)throw new Error("Use a moveTo() command first");
                    return e[e.length - 1]
                }

                return {
                    moveTo: function () {
                        var t = this._segments;
                        1 === t.length && this.removeSegment(0), t.length || this._add([new E(c.read(arguments))])
                    }, moveBy: function () {
                        throw new Error("moveBy() is unsupported on Path items.")
                    }, lineTo: function () {
                        this._add([new E(c.read(arguments))])
                    }, cubicCurveTo: function () {
                        var e = c.read(arguments), i = c.read(arguments), n = c.read(arguments), r = t(this);
                        r.setHandleOut(e.subtract(r._point)), this._add([new E(n, i.subtract(n))])
                    }, quadraticCurveTo: function () {
                        var e = c.read(arguments), i = c.read(arguments), n = t(this)._point;
                        this.cubicCurveTo(e.add(n.subtract(e).multiply(1 / 3)), e.add(i.subtract(e).multiply(1 / 3)), i)
                    }, curveTo: function () {
                        var e = c.read(arguments), i = c.read(arguments), r = n.pick(n.read(arguments), .5), s = 1 - r, o = t(this)._point, a = e.subtract(o.multiply(s * s)).subtract(i.multiply(r * r)).divide(2 * r * s);
                        if (a.isNaN())throw new Error("Cannot put a curve through points with parameter = " + r);
                        this.quadraticCurveTo(a, i)
                    }, arcTo: function () {
                        var e, i, r, s, o, a = t(this), l = a._point, u = c.read(arguments), h = n.peek(arguments), d = n.pick(h, !0);
                        if ("boolean" == typeof d)var f = l.add(u).divide(2), e = f.add(f.subtract(l).rotate(d ? -90 : 90)); else if (n.remain(arguments) <= 2) e = u, u = c.read(arguments); else {
                            var g = p.read(arguments);
                            if (g.isZero())return this.lineTo(u);
                            var _ = n.read(arguments), d = !!n.read(arguments), m = !!n.read(arguments), f = l.add(u).divide(2), w = l.subtract(f).rotate(-_), b = w.x, x = w.y, T = Math.abs, S = 1e-12, C = T(g.width), k = T(g.height), P = C * C, A = k * k, O = b * b, M = x * x, D = Math.sqrt(O / P + M / A);
                            if (D > 1 && (C *= D, k *= D, P = C * C, A = k * k), D = (P * A - P * M - A * O) / (P * M + A * O), T(D) < S && (D = 0), 0 > D)throw new Error("Cannot create an arc with the given arguments");
                            i = new c(C * x / k, -k * b / C).multiply((m === d ? -1 : 1) * Math.sqrt(D)).rotate(_).add(f), o = (new v).translate(i).rotate(_).scale(C, k), s = o._inverseTransform(l), r = s.getDirectedAngle(o._inverseTransform(u)), !d && r > 0 ? r -= 360 : d && 0 > r && (r += 360)
                        }
                        if (e) {
                            var R = new y(l.add(e).divide(2), e.subtract(l).rotate(90), !0), j = new y(e.add(u).divide(2), u.subtract(e).rotate(90), !0), z = new y(l, u), L = z.getSide(e);
                            if (i = R.intersect(j, !0), !i) {
                                if (!L)return this.lineTo(u);
                                throw new Error("Cannot create an arc with the given arguments")
                            }
                            s = l.subtract(i), r = s.getDirectedAngle(u.subtract(i));
                            var N = z.getSide(i);
                            0 === N ? r = L * Math.abs(r) : L === N && (r += 0 > r ? 360 : -360)
                        }
                        for (var I = Math.abs(r), F = I >= 360 ? 4 : Math.ceil(I / 90), $ = r / F, B = $ * Math.PI / 360, q = 4 / 3 * Math.sin(B) / (1 + Math.cos(B)), H = [], W = 0; F >= W; W++) {
                            var w = u, V = null;
                            if (F > W && (V = s.rotate(90).multiply(q), o ? (w = o._transformPoint(s), V = o._transformPoint(s.add(V)).subtract(w)) : w = i.add(s)), 0 === W) a.setHandleOut(V); else {
                                var U = s.rotate(-90).multiply(q);
                                o && (U = o._transformPoint(s.add(U)).subtract(w)), H.push(new E(w, U, V))
                            }
                            s = s.rotate($)
                        }
                        this._add(H)
                    }, lineBy: function () {
                        var e = c.read(arguments), i = t(this)._point;
                        this.lineTo(i.add(e))
                    }, curveBy: function () {
                        var e = c.read(arguments), i = c.read(arguments), r = n.read(arguments), s = t(this)._point;
                        this.curveTo(s.add(e), s.add(i), r)
                    }, cubicCurveBy: function () {
                        var e = c.read(arguments), i = c.read(arguments), n = c.read(arguments), r = t(this)._point;
                        this.cubicCurveTo(r.add(e), r.add(i), r.add(n))
                    }, quadraticCurveBy: function () {
                        var e = c.read(arguments), i = c.read(arguments), n = t(this)._point;
                        this.quadraticCurveTo(n.add(e), n.add(i))
                    }, arcBy: function () {
                        var e = t(this)._point, i = e.add(c.read(arguments)), r = n.pick(n.peek(arguments), !0);
                        "boolean" == typeof r ? this.arcTo(i, r) : this.arcTo(i, e.add(c.read(arguments)))
                    }, closePath: function (t) {
                        this.setClosed(!0), t && this.join()
                    }
                }
            }, {
                _getBounds: function (t, e) {
                    return z[t](this._segments, this._closed, this.getStyle(), e)
                }, statics: {
                    isClockwise: function (t) {
                        for (var e = 0, i = 0, n = t.length; n > i; i++)e += D.getEdgeSum(D.getValues(t[i], t[n > i + 1 ? i + 1 : 0]));
                        return e > 0
                    }, getBounds: function (t, e, i, n, r) {
                        function s(t) {
                            t._transformCoordinates(n, a, !1);
                            for (var e = 0; 2 > e; e++)D._addBounds(l[e], l[e + 4], a[e + 2], a[e], e, r ? r[e] : 0, u, h, c);
                            var i = l;
                            l = a, a = i
                        }

                        var o = t[0];
                        if (!o)return new g;
                        for (var a = new Array(6), l = o._transformCoordinates(n, new Array(6), !1), u = l.slice(0, 2), h = u.slice(), c = new Array(2), d = 1, p = t.length; p > d; d++)s(t[d]);
                        return e && s(o), new g(u[0], u[1], h[0] - u[0], h[1] - u[1])
                    }, getStrokeBounds: function (t, e, i, n) {
                        function r(t) {
                            c = c.include(n ? n._transformPoint(t, t) : t)
                        }

                        function s(t) {
                            c = c.unite(m.setCenter(n ? n._transformPoint(t._point) : t._point))
                        }

                        function o(t, e) {
                            var i = t._handleIn, n = t._handleOut;
                            "round" === e || !i.isZero() && !n.isZero() && i.isColinear(n) ? s(t) : z._addBevelJoin(t, e, u, _, r)
                        }

                        function a(t, e) {
                            "round" === e ? s(t) : z._addSquareCap(t, e, u, r)
                        }

                        if (!i.hasStroke())return z.getBounds(t, e, i, n);
                        for (var l = t.length - (e ? 0 : 1), u = i.getStrokeWidth() / 2, h = z._getPenPadding(u, n), c = z.getBounds(t, e, i, n, h), d = i.getStrokeJoin(), f = i.getStrokeCap(), _ = u * i.getMiterLimit(), m = new g(new p(h).multiply(2)), v = 1; l > v; v++)o(t[v], d);
                        return e ? o(t[0], d) : l > 0 && (a(t[0], f), a(t[t.length - 1], f)), c
                    }, _getPenPadding: function (t, e) {
                        if (!e)return [t, t];
                        var i = e.shiftless(), n = i.transform(new c(t, 0)), r = i.transform(new c(0, t)), s = n.getAngleInRadians(), o = n.getLength(), a = r.getLength(), l = Math.sin(s), u = Math.cos(s), h = Math.tan(s), d = -Math.atan(a * h / o), p = Math.atan(a / (h * o));
                        return [Math.abs(o * Math.cos(d) * u - a * Math.sin(d) * l), Math.abs(a * Math.sin(p) * u + o * Math.cos(p) * l)]
                    }, _addBevelJoin: function (t, e, i, n, r, s) {
                        var o = t.getCurve(), a = o.getPrevious(), l = o.getPointAt(0, !0), u = a.getNormalAt(1, !0), h = o.getNormalAt(0, !0), d = u.getDirectedAngle(h) < 0 ? -i : i;
                        if (u.setLength(d), h.setLength(d), s && (r(l), r(l.add(u))), "miter" === e) {
                            var p = new y(l.add(u), new c(-u.y, u.x), !0).intersect(new y(l.add(h), new c(-h.y, h.x), !0), !0);
                            if (p && l.getDistance(p) <= n && (r(p), !s))return
                        }
                        s || r(l.add(u)), r(l.add(h))
                    }, _addSquareCap: function (t, e, i, n, r) {
                        var s = t._point, o = t.getLocation(), a = o.getNormal().normalize(i);
                        r && (n(s.subtract(a)), n(s.add(a))), "square" === e && (s = s.add(a.rotate(0 === o.getParameter() ? -90 : 90))), n(s.add(a)), n(s.subtract(a))
                    }, getHandleBounds: function (t, e, i, n, r, s) {
                        for (var o = new Array(6), a = 1 / 0, l = -a, u = a, h = l, c = 0, d = t.length; d > c; c++) {
                            var p = t[c];
                            p._transformCoordinates(n, o, !1);
                            for (var f = 0; 6 > f; f += 2) {
                                var _ = 0 === f ? s : r, m = _ ? _[0] : 0, v = _ ? _[1] : 0, y = o[f], w = o[f + 1], b = y - m, x = y + m, T = w - v, S = w + v;
                                a > b && (a = b), x > l && (l = x), u > T && (u = T), S > h && (h = S)
                            }
                        }
                        return new g(a, u, l - a, h - u)
                    }, getRoughBounds: function (t, e, i, n) {
                        var r = i.hasStroke() ? i.getStrokeWidth() / 2 : 0, s = r;
                        return r > 0 && ("miter" === i.getStrokeJoin() && (s = r * i.getMiterLimit()), "square" === i.getStrokeCap() && (s = Math.max(s, r * Math.sqrt(2)))), z.getHandleBounds(t, e, i, n, z._getPenPadding(r, n), z._getPenPadding(s, n))
                    }
                }
            });
            z.inject({
                statics: new function () {
                    function t(t, e, i) {
                        var r = n.getNamed(i), s = new z(r && r.insert === !1 && x.NO_INSERT);
                        return s._add(t), s._closed = e, s.set(r)
                    }

                    function e(e, i, n) {
                        for (var s = new Array(4), o = 0; 4 > o; o++) {
                            var a = r[o];
                            s[o] = new E(a._point.multiply(i).add(e), a._handleIn.multiply(i), a._handleOut.multiply(i))
                        }
                        return t(s, !0, n)
                    }

                    var i = .5522847498307936, r = [new E([-1, 0], [0, i], [0, -i]), new E([0, -1], [-i, 0], [i, 0]), new E([1, 0], [0, -i], [0, i]), new E([0, 1], [i, 0], [-i, 0])];
                    return {
                        Line: function () {
                            return t([new E(c.readNamed(arguments, "from")), new E(c.readNamed(arguments, "to"))], !1, arguments)
                        }, Circle: function () {
                            var t = c.readNamed(arguments, "center"), i = n.readNamed(arguments, "radius");
                            return e(t, new p(i), arguments)
                        }, Rectangle: function () {
                            var e, n = g.readNamed(arguments, "rectangle"), r = p.readNamed(arguments, "radius", 0, {readNull: !0}), s = n.getBottomLeft(!0), o = n.getTopLeft(!0), a = n.getTopRight(!0), l = n.getBottomRight(!0);
                            if (!r || r.isZero()) e = [new E(s), new E(o), new E(a), new E(l)]; else {
                                r = p.min(r, n.getSize(!0).divide(2));
                                var u = r.width, h = r.height, c = u * i, d = h * i;
                                e = [new E(s.add(u, 0), null, [-c, 0]), new E(s.subtract(0, h), [0, d]), new E(o.add(0, h), null, [0, -d]), new E(o.add(u, 0), [-c, 0], null), new E(a.subtract(u, 0), null, [c, 0]), new E(a.add(0, h), [0, -d], null), new E(l.subtract(0, h), null, [0, d]), new E(l.subtract(u, 0), [c, 0])]
                            }
                            return t(e, !0, arguments)
                        }, RoundRectangle: "#Rectangle", Ellipse: function () {
                            var t = C._readEllipse(arguments);
                            return e(t.center, t.radius, arguments)
                        }, Oval: "#Ellipse", Arc: function () {
                            var t = c.readNamed(arguments, "from"), e = c.readNamed(arguments, "through"), i = c.readNamed(arguments, "to"), r = n.getNamed(arguments), s = new z(r && r.insert === !1 && x.NO_INSERT);
                            return s.moveTo(t), s.arcTo(e, i),
                                s.set(r)
                        }, RegularPolygon: function () {
                            for (var e = c.readNamed(arguments, "center"), i = n.readNamed(arguments, "sides"), r = n.readNamed(arguments, "radius"), s = 360 / i, o = !(i % 3), a = new c(0, o ? -r : r), l = o ? -1 : .5, u = new Array(i), h = 0; i > h; h++)u[h] = new E(e.add(a.rotate((h + l) * s)));
                            return t(u, !0, arguments)
                        }, Star: function () {
                            for (var e = c.readNamed(arguments, "center"), i = 2 * n.readNamed(arguments, "points"), r = n.readNamed(arguments, "radius1"), s = n.readNamed(arguments, "radius2"), o = 360 / i, a = new c(0, -1), l = new Array(i), u = 0; i > u; u++)l[u] = new E(e.add(a.rotate(o * u).multiply(u % 2 ? s : r)));
                            return t(l, !0, arguments)
                        }
                    }
                }
            });
            var L = j.extend({
                _class: "CompoundPath", _serializeFields: {children: []}, initialize: function (t) {
                    this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
                }, insertChildren: function St(e, i, n) {
                    i = St.base.call(this, e, i, n, z);
                    for (var r = 0, s = !n && i && i.length; s > r; r++) {
                        var o = i[r];
                        o._clockwise === t && o.setClockwise(0 === o._index)
                    }
                    return i
                }, reverse: function () {
                    for (var t = this._children, e = 0, i = t.length; i > e; e++)t[e].reverse()
                }, smooth: function () {
                    for (var t = 0, e = this._children.length; e > t; t++)this._children[t].smooth()
                }, reduce: function Ct() {
                    if (0 === this._children.length) {
                        var t = new z(x.NO_INSERT);
                        return t.insertAbove(this), t.setStyle(this._style), this.remove(), t
                    }
                    return Ct.base.call(this)
                }, isClockwise: function () {
                    var t = this.getFirstChild();
                    return t && t.isClockwise()
                }, setClockwise: function (t) {
                    this.isClockwise() !== !!t && this.reverse()
                }, getFirstSegment: function () {
                    var t = this.getFirstChild();
                    return t && t.getFirstSegment()
                }, getLastSegment: function () {
                    var t = this.getLastChild();
                    return t && t.getLastSegment()
                }, getCurves: function () {
                    for (var t = this._children, e = [], i = 0, n = t.length; n > i; i++)e.push.apply(e, t[i].getCurves());
                    return e
                }, getFirstCurve: function () {
                    var t = this.getFirstChild();
                    return t && t.getFirstCurve()
                }, getLastCurve: function () {
                    var t = this.getLastChild();
                    return t && t.getFirstCurve()
                }, getArea: function () {
                    for (var t = this._children, e = 0, i = 0, n = t.length; n > i; i++)e += t[i].getArea();
                    return e
                }
            }, {
                beans: !0, getPathData: function (t, e) {
                    for (var i = this._children, n = [], r = 0, s = i.length; s > r; r++) {
                        var o = i[r], a = o._matrix;
                        n.push(o.getPathData(t && !a.isIdentity() ? t.chain(a) : a, e))
                    }
                    return n.join(" ")
                }
            }, {
                _getChildHitTestOptions: function (t) {
                    return t["class"] === z || "path" === t.type ? t : new n(t, {fill: !1})
                }, _draw: function (t, e, i) {
                    var n = this._children;
                    if (0 !== n.length) {
                        if (this._currentPath) t.currentPath = this._currentPath; else {
                            e = e.extend({dontStart: !0, dontFinish: !0}), t.beginPath();
                            for (var r = 0, s = n.length; s > r; r++)n[r].draw(t, e, i);
                            this._currentPath = t.currentPath
                        }
                        if (!e.clip) {
                            this._setStyles(t);
                            var o = this._style;
                            o.hasFill() && (t.fill(o.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                        }
                    }
                }, _drawSelected: function (t, e, i) {
                    for (var n = this._children, r = 0, s = n.length; s > r; r++) {
                        var o = n[r], a = o._matrix;
                        i[o._id] || o._drawSelected(t, a.isIdentity() ? e : e.chain(a))
                    }
                }
            }, new function () {
                function t(t, e) {
                    var i = t._children;
                    if (e && 0 === i.length)throw new Error("Use a moveTo() command first");
                    return i[i.length - 1]
                }

                var e = {
                    moveTo: function () {
                        var e = t(this), i = e && e.isEmpty() ? e : new z;
                        i !== e && this.addChild(i), i.moveTo.apply(i, arguments)
                    }, moveBy: function () {
                        var e = t(this, !0), i = e && e.getLastSegment(), n = c.read(arguments);
                        this.moveTo(i ? n.add(i._point) : n)
                    }, closePath: function (e) {
                        t(this, !0).closePath(e)
                    }
                };
                return n.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function (i) {
                    e[i] = function () {
                        var e = t(this, !0);
                        e[i].apply(e, arguments)
                    }
                }), e
            });
            j.inject(new function () {
                function t(t, s, o) {
                    function a(t) {
                        return t.clone(!1).reduce().reorient().transform(null, !0, !0)
                    }

                    function l(t) {
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            p.push.apply(p, n._segments), f.push.apply(f, n._getMonoCurves())
                        }
                    }

                    var u = r[o], h = a(t), c = s && t !== s && a(s);
                    c && /^(subtract|exclude)$/.test(o) ^ c.isClockwise() !== h.isClockwise() && c.reverse(), e(h.getIntersections(c, null, !0));
                    var d = [], p = [], f = [], g = 1e-6;
                    l(h._children || [h]), c && l(c._children || [c]), p.sort(function (t, e) {
                        var i = t._intersection, n = e._intersection;
                        return !i && !n || i && n ? 0 : i ? -1 : 1
                    });
                    for (var _ = 0, v = p.length; v > _; _++) {
                        var y = p[_];
                        if (null == y._winding) {
                            d.length = 0;
                            var w = y, b = 0, T = 0;
                            do {
                                var S = y.getCurve().getLength();
                                d.push({segment: y, length: S}), b += S, y = y.getNext()
                            } while (y && !y._intersection && y !== w);
                            for (var C = 0; 3 > C; C++) {
                                var S = b * (C + 1) / 4;
                                for (k = 0, m = d.length; k < m; k++) {
                                    var P = d[k], A = P.length;
                                    if (A >= S) {
                                        (g >= S || g >= A - S) && (S = A / 2);
                                        var O = P.segment.getCurve(), E = O.getPointAt(S), M = O.isLinear() && Math.abs(O.getTangentAt(.5, !0).y) <= g, D = O._path;
                                        D._parent instanceof L && (D = D._parent), T += "subtract" === o && c && (D === h && c._getWinding(E, M) || D === c && !h._getWinding(E, M)) ? 0 : i(E, f, M);
                                        break
                                    }
                                    S -= A
                                }
                            }
                            for (var R = Math.round(T / 3), C = d.length - 1; C >= 0; C--)d[C].segment._winding = R
                        }
                    }
                    var j = new L(x.NO_INSERT);
                    return j.insertAbove(t), j.addChildren(n(p, u), !0), j = j.reduce(), j.setStyle(t._style), j
                }

                function e(t) {
                    function e() {
                        for (var t = 0, e = i.length; e > t; t++)i[t].set(0, 0)
                    }

                    for (var i, n, r, s = 1e-6, o = 1 - s, a = t.length - 1; a >= 0; a--) {
                        var l = t[a], u = l._parameter;
                        r && r._curve === l._curve && r._parameter > 0 ? u /= r._parameter : (n = l._curve, i && e(), i = n.isLinear() ? [n._segment1._handleOut, n._segment2._handleIn] : null);
                        var h, c;
                        (h = n.divide(u, !0, !0)) ? (c = h._segment1, n = h.getPrevious(), i && i.push(c._handleOut, c._handleIn)) : c = s > u ? n._segment1 : u > o ? n._segment2 : n.getPartLength(0, u) < n.getPartLength(u, 1) ? n._segment1 : n._segment2, c._intersection = l.getIntersection(), l._segment = c, r = l
                    }
                    i && e()
                }

                function i(t, e, n, r) {
                    var s = 1e-6, o = s, a = 1 - o, l = t.x, u = t.y, d = 0, p = 0, f = [], g = Math.abs;
                    if (n) {
                        for (var _ = -(1 / 0), m = 1 / 0, v = u - s, y = u + s, w = 0, b = e.length; b > w; w++) {
                            var x = e[w].values;
                            if (D.solveCubic(x, 0, l, f, 0, 1) > 0)for (var T = f.length - 1; T >= 0; T--) {
                                var S = D.evaluate(x, f[T], 0).y;
                                v > S && S > _ ? _ = S : S > y && m > S && (m = S)
                            }
                        }
                        _ = (_ + u) / 2, m = (m + u) / 2, _ > -(1 / 0) && (d = i(new c(l, _), e)), 1 / 0 > m && (p = i(new c(l, m), e))
                    } else for (var C = l - s, k = l + s, w = 0, b = e.length; b > w; w++) {
                        var P, A, O = e[w], x = O.values, E = O.winding;
                        if (E && (1 === E && u >= x[1] && u <= x[7] || u >= x[7] && u <= x[1]) && 1 === D.solveCubic(x, 1, u, f, 0, 1)) {
                            var M = f[0], R = D.evaluate(x, M, 0).x, j = D.evaluate(x, M, 1).y;
                            M > a && (w === b - 1 || O.next !== e[w + 1]) && g(D.evaluate(O.next.values, 0, 0).x - R) <= s || w > 0 && O.previous === e[w - 1] && g(A - R) < s && P > a && o > M || (h.isZero(j) && !D.isLinear(x) || o > M && j * D.evaluate(O.previous.values, 1, 1).y < 0 || M > a && j * D.evaluate(O.next.values, 0, 1).y < 0 ? r && R >= C && k >= R && (++d, ++p) : C >= R ? d += E : R >= k && (p += E)), P = M, A = R
                        }
                    }
                    return Math.max(g(d), g(p))
                }

                function n(t, e, i) {
                    for (var n, r, s = [], o = 1e-6, a = 1 - o, l = 0, u = t.length; u > l; l++)if (n = r = t[l], !n._visited && e(n._winding)) {
                        var h = new z(x.NO_INSERT), c = n._intersection, d = c && c._segment, p = !1, f = 1;
                        do {
                            var g, _ = f > 0 ? n._handleIn : n._handleOut, m = f > 0 ? n._handleOut : n._handleIn;
                            if (p && (!e(n._winding) || i) && (c = n._intersection) && (g = c._segment) && g !== r) {
                                if (i) n._visited = g._visited, n = g, f = 1; else {
                                    var v = n.getCurve();
                                    f > 0 && (v = v.getPrevious());
                                    var y = v.getTangentAt(1 > f ? o : a, !0), w = g.getCurve(), b = w.getPrevious(), T = b.getTangentAt(a, !0), S = w.getTangentAt(o, !0), C = y.cross(T), k = y.cross(S);
                                    if (C * k !== 0) {
                                        var P = k > C ? b : w, A = e(P._segment1._winding) ? P : k > C ? w : b, O = A._segment1;
                                        f = A === b ? -1 : 1, O._visited && n._path !== O._path || !e(O._winding) ? f = 1 : (n._visited = g._visited, n = g, O._visited && (f = 1))
                                    } else f = 1
                                }
                                m = f > 0 ? n._handleOut : n._handleIn
                            }
                            h.add(new E(n._point, p && _, m)), p = !0, n._visited = !0, n = f > 0 ? n.getNext() : n.getPrevious()
                        } while (n && !n._visited && n !== r && n !== d && (n._intersection || e(n._winding)));
                        !n || n !== r && n !== d ? h.lastSegment._handleOut.set(0, 0) : (h.firstSegment.setHandleIn((n === d ? d : n)._handleIn), h.setClosed(!0)), h._segments.length > (h._closed ? h.isPolygon() ? 2 : 0 : 1) && s.push(h)
                    }
                    return s
                }

                var r = {
                    unite: function (t) {
                        return 1 === t || 0 === t
                    }, intersect: function (t) {
                        return 2 === t
                    }, subtract: function (t) {
                        return 1 === t
                    }, exclude: function (t) {
                        return 1 === t
                    }
                };
                return {
                    _getWinding: function (t, e, n) {
                        return i(t, this._getMonoCurves(), e, n)
                    }, unite: function (e) {
                        return t(this, e, "unite")
                    }, intersect: function (e) {
                        return t(this, e, "intersect")
                    }, subtract: function (e) {
                        return t(this, e, "subtract")
                    }, exclude: function (e) {
                        return t(this, e, "exclude")
                    }, divide: function (t) {
                        return new T([this.subtract(t), this.intersect(t)])
                    }
                }
            }), z.inject({
                _getMonoCurves: function () {
                    function t(t) {
                        var e = t[1], r = t[7], s = {
                            values: t,
                            winding: e === r ? 0 : e > r ? -1 : 1,
                            previous: i,
                            next: null
                        };
                        i && (i.next = s), n.push(s), i = s
                    }

                    function e(e) {
                        if (0 !== D.getLength(e)) {
                            var i = e[1], n = e[3], r = e[5], s = e[7];
                            if (D.isLinear(e)) t(e); else {
                                var o = 3 * (n - r) - i + s, a = 2 * (i + r) - 4 * n, l = n - i, u = 1e-6, c = [], d = h.solveQuadratic(o, a, l, c, u, 1 - u);
                                if (0 === d) t(e); else {
                                    c.sort();
                                    var p = c[0], f = D.subdivide(e, p);
                                    t(f[0]), d > 1 && (p = (c[1] - p) / (1 - p), f = D.subdivide(f[1], p), t(f[0])), t(f[1])
                                }
                            }
                        }
                    }

                    var i, n = this._monoCurves;
                    if (!n) {
                        n = this._monoCurves = [];
                        for (var r = this.getCurves(), s = this._segments, o = 0, a = r.length; a > o; o++)e(r[o].getValues());
                        if (!this._closed && s.length > 1) {
                            var l = s[s.length - 1]._point, u = s[0]._point, c = l._x, d = l._y, p = u._x, f = u._y;
                            e([c, d, c, d, p, f, p, f])
                        }
                        if (n.length > 0) {
                            var g = n[0], _ = n[n.length - 1];
                            g.previous = _, _.next = g
                        }
                    }
                    return n
                }, getInteriorPoint: function () {
                    var t = this.getBounds(), e = t.getCenter(!0);
                    if (!this.contains(e)) {
                        for (var i = this._getMonoCurves(), n = [], r = e.y, s = [], o = 0, a = i.length; a > o; o++) {
                            var l = i[o].values;
                            if ((1 === i[o].winding && r >= l[1] && r <= l[7] || r >= l[7] && r <= l[1]) && D.solveCubic(l, 1, r, n, 0, 1) > 0)for (var u = n.length - 1; u >= 0; u--)s.push(D.evaluate(l, n[u], 0).x);
                            if (s.length > 1)break
                        }
                        e.x = (s[0] + s[1]) / 2
                    }
                    return e
                }, reorient: function () {
                    return this.setClockwise(!0), this
                }
            }), L.inject({
                _getMonoCurves: function () {
                    for (var t = this._children, e = [], i = 0, n = t.length; n > i; i++)e.push.apply(e, t[i]._getMonoCurves());
                    return e
                }, reorient: function () {
                    var t = this.removeChildren().sort(function (t, e) {
                        return e.getBounds().getArea() - t.getBounds().getArea()
                    });
                    if (t.length > 0) {
                        this.addChildren(t);
                        for (var e = t[0].isClockwise(), i = 1, n = t.length; n > i; i++) {
                            for (var r = t[i].getInteriorPoint(), s = 0, o = i - 1; o >= 0; o--)t[o].contains(r) && s++;
                            t[i].setClockwise(s % 2 === 0 && e)
                        }
                    }
                    return this
                }
            });
            var N = n.extend({
                _class: "PathIterator", initialize: function (t, e, i, n) {
                    function r(t, e) {
                        var i = D.getValues(t, e, n);
                        a.push(i), s(i, t._index, 0, 1)
                    }

                    function s(t, e, n, r) {
                        if (r - n > h && !D.isFlatEnough(t, i || .25)) {
                            var o = D.subdivide(t), a = (n + r) / 2;
                            s(o[0], e, n, a), s(o[1], e, a, r)
                        } else {
                            var c = t[6] - t[0], d = t[7] - t[1], p = Math.sqrt(c * c + d * d);
                            p > 1e-6 && (u += p, l.push({offset: u, value: r, index: e}))
                        }
                    }

                    for (var o, a = [], l = [], u = 0, h = 1 / (e || 32), c = t._segments, d = c[0], p = 1, f = c.length; f > p; p++)o = c[p], r(d, o), d = o;
                    t._closed && r(o, c[0]), this.curves = a, this.parts = l, this.length = u, this.index = 0
                }, getParameterAt: function (t) {
                    for (var e, i = this.index; e = i, !(0 == i || this.parts[--i].offset < t););
                    for (var n = this.parts.length; n > e; e++) {
                        var r = this.parts[e];
                        if (r.offset >= t) {
                            this.index = e;
                            var s = this.parts[e - 1], o = s && s.index == r.index ? s.value : 0, a = s ? s.offset : 0;
                            return {value: o + (r.value - o) * (t - a) / (r.offset - a), index: r.index}
                        }
                    }
                    var r = this.parts[this.parts.length - 1];
                    return {value: 1, index: r.index}
                }, evaluate: function (t, e) {
                    var i = this.getParameterAt(t);
                    return D.evaluate(this.curves[i.index], i.value, e)
                }, drawPart: function (t, e, i) {
                    e = this.getParameterAt(e), i = this.getParameterAt(i);
                    for (var n = e.index; n <= i.index; n++) {
                        var r = D.getPart(this.curves[n], n == e.index ? e.value : 0, n == i.index ? i.value : 1);
                        n == e.index && t.moveTo(r[0], r[1]), t.bezierCurveTo.apply(t, r.slice(2))
                    }
                }
            }, n.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function (t, e) {
                this[t + "At"] = function (t) {
                    return this.evaluate(t, e)
                }
            }, {})), I = n.extend({
                initialize: function (t, e) {
                    for (var i, n = this.points = [], r = t._segments, s = 0, o = r.length; o > s; s++) {
                        var a = r[s].point.clone();
                        i && i.equals(a) || (n.push(a), i = a)
                    }
                    t._closed && (this.closed = !0, n.unshift(n[n.length - 1]), n.push(n[1])), this.error = e
                }, fit: function () {
                    var t = this.points, e = t.length, i = this.segments = e > 0 ? [new E(t[0])] : [];
                    return e > 1 && this.fitCubic(0, e - 1, t[1].subtract(t[0]).normalize(), t[e - 2].subtract(t[e - 1]).normalize()), this.closed && (i.shift(), i.pop()), i
                }, fitCubic: function (t, e, i, n) {
                    if (e - t == 1) {
                        var r = this.points[t], s = this.points[e], o = r.getDistance(s) / 3;
                        return void this.addCurve([r, r.add(i.normalize(o)), s.add(n.normalize(o)), s])
                    }
                    for (var a, l = this.chordLengthParameterize(t, e), u = Math.max(this.error, this.error * this.error), h = 0; 4 >= h; h++) {
                        var c = this.generateBezier(t, e, l, i, n), d = this.findMaxError(t, e, c, l);
                        if (d.error < this.error)return void this.addCurve(c);
                        if (a = d.index, d.error >= u)break;
                        this.reparameterize(t, e, l, c), u = d.error
                    }
                    var p = this.points[a - 1].subtract(this.points[a]), f = this.points[a].subtract(this.points[a + 1]), g = p.add(f).divide(2).normalize();
                    this.fitCubic(t, a, i, g), this.fitCubic(a, e, g.negate(), n)
                }, addCurve: function (t) {
                    var e = this.segments[this.segments.length - 1];
                    e.setHandleOut(t[1].subtract(t[0])), this.segments.push(new E(t[3], t[2].subtract(t[3])))
                }, generateBezier: function (t, e, i, n, r) {
                    for (var s = 1e-12, o = this.points[t], a = this.points[e], l = [[0, 0], [0, 0]], u = [0, 0], h = 0, c = e - t + 1; c > h; h++) {
                        var d = i[h], p = 1 - d, f = 3 * d * p, g = p * p * p, _ = f * p, m = f * d, v = d * d * d, y = n.normalize(_), w = r.normalize(m), b = this.points[t + h].subtract(o.multiply(g + _)).subtract(a.multiply(m + v));
                        l[0][0] += y.dot(y), l[0][1] += y.dot(w), l[1][0] = l[0][1], l[1][1] += w.dot(w), u[0] += y.dot(b), u[1] += w.dot(b)
                    }
                    var x, T, S = l[0][0] * l[1][1] - l[1][0] * l[0][1];
                    if (Math.abs(S) > s) {
                        var C = l[0][0] * u[1] - l[1][0] * u[0], k = u[0] * l[1][1] - u[1] * l[0][1];
                        x = k / S, T = C / S
                    } else {
                        var P = l[0][0] + l[0][1], A = l[1][0] + l[1][1];
                        x = T = Math.abs(P) > s ? u[0] / P : Math.abs(A) > s ? u[1] / A : 0
                    }
                    var O = a.getDistance(o);
                    return s *= O, (s > x || s > T) && (x = T = O / 3), [o, o.add(n.normalize(x)), a.add(r.normalize(T)), a]
                }, reparameterize: function (t, e, i, n) {
                    for (var r = t; e >= r; r++)i[r - t] = this.findRoot(n, this.points[r], i[r - t])
                }, findRoot: function (t, e, i) {
                    for (var n = [], r = [], s = 0; 2 >= s; s++)n[s] = t[s + 1].subtract(t[s]).multiply(3);
                    for (var s = 0; 1 >= s; s++)r[s] = n[s + 1].subtract(n[s]).multiply(2);
                    var o = this.evaluate(3, t, i), a = this.evaluate(2, n, i), l = this.evaluate(1, r, i), u = o.subtract(e), h = a.dot(a) + u.dot(l);
                    return Math.abs(h) < 1e-6 ? i : i - u.dot(a) / h
                }, evaluate: function (t, e, i) {
                    for (var n = e.slice(), r = 1; t >= r; r++)for (var s = 0; t - r >= s; s++)n[s] = n[s].multiply(1 - i).add(n[s + 1].multiply(i));
                    return n[0]
                }, chordLengthParameterize: function (t, e) {
                    for (var i = [0], n = t + 1; e >= n; n++)i[n - t] = i[n - t - 1] + this.points[n].getDistance(this.points[n - 1]);
                    for (var n = 1, r = e - t; r >= n; n++)i[n] /= i[r];
                    return i
                }, findMaxError: function (t, e, i, n) {
                    for (var r = Math.floor((e - t + 1) / 2), s = 0, o = t + 1; e > o; o++) {
                        var a = this.evaluate(3, i, n[o - t]), l = a.subtract(this.points[o]), u = l.x * l.x + l.y * l.y;
                        u >= s && (s = u, r = o)
                    }
                    return {error: s, index: r}
                }
            }), F = x.extend({
                _class: "TextItem",
                _boundsSelected: !0,
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _serializeFields: {content: null},
                _boundsGetter: "getBounds",
                initialize: function (e) {
                    this._content = "", this._lines = [];
                    var i = e && n.isPlainObject(e) && e.x === t && e.y === t;
                    this._initialize(i && e, !i && c.read(arguments))
                },
                _equals: function (t) {
                    return this._content === t._content
                },
                _clone: function kt(t, e) {
                    return t.setContent(this._content), kt.base.call(this, t, e)
                },
                getContent: function () {
                    return this._content
                },
                setContent: function (t) {
                    this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265)
                },
                isEmpty: function () {
                    return !this._content
                },
                getCharacterStyle: "#getStyle",
                setCharacterStyle: "#setStyle",
                getParagraphStyle: "#getStyle",
                setParagraphStyle: "#setStyle"
            }), $ = F.extend({
                _class: "PointText", initialize: function () {
                    F.apply(this, arguments)
                }, clone: function (t) {
                    return this._clone(new $(x.NO_INSERT), t)
                }, getPoint: function () {
                    var t = this._matrix.getTranslation();
                    return new d(t.x, t.y, this, "setPoint")
                }, setPoint: function () {
                    var t = c.read(arguments);
                    this.translate(t.subtract(this._matrix.getTranslation()))
                }, _draw: function (t) {
                    if (this._content) {
                        this._setStyles(t);
                        var e = this._style, i = this._lines, n = e.getLeading(), r = t.shadowColor;
                        t.font = e.getFontStyle(), t.textAlign = e.getJustification();
                        for (var s = 0, o = i.length; o > s; s++) {
                            t.shadowColor = r;
                            var a = i[s];
                            e.hasFill() && (t.fillText(a, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), e.hasStroke() && t.strokeText(a, 0, 0), t.translate(0, n)
                        }
                    }
                }, _getBounds: function (t, e) {
                    var i = this._style, n = this._lines, r = n.length, s = i.getJustification(), o = i.getLeading(), a = this.getView().getTextWidth(i.getFontStyle(), n), l = 0;
                    "left" !== s && (l -= a / ("center" === s ? 2 : 1));
                    var u = new g(l, r ? -.75 * o : 0, a, r * o);
                    return e ? e._transformBounds(u, u) : u
                }
            }), B = n.extend(new function () {
                function t(t) {
                    var i, n = t.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                    if (n) {
                        i = [0, 0, 0];
                        for (var r = 0; 3 > r; r++) {
                            var o = n[r + 1];
                            i[r] = parseInt(1 == o.length ? o + o : o, 16) / 255
                        }
                    } else if (n = t.match(/^rgba?\((.*)\)$/)) {
                        i = n[1].split(",");
                        for (var r = 0, a = i.length; a > r; r++) {
                            var o = +i[r];
                            i[r] = 3 > r ? o / 255 : o
                        }
                    } else {
                        var l = s[t];
                        if (!l) {
                            e || (e = it.getContext(1, 1), e.globalCompositeOperation = "copy"), e.fillStyle = "rgba(0,0,0,0)", e.fillStyle = t, e.fillRect(0, 0, 1, 1);
                            var u = e.getImageData(0, 0, 1, 1).data;
                            l = s[t] = [u[0] / 255, u[1] / 255, u[2] / 255]
                        }
                        i = l.slice()
                    }
                    return i
                }

                var e, i = {
                    gray: ["gray"],
                    rgb: ["red", "green", "blue"],
                    hsb: ["hue", "saturation", "brightness"],
                    hsl: ["hue", "saturation", "lightness"],
                    gradient: ["gradient", "origin", "destination", "highlight"]
                }, r = {}, s = {}, o = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]], a = {
                    "rgb-hsb": function (t, e, i) {
                        var n = Math.max(t, e, i), r = Math.min(t, e, i), s = n - r, o = 0 === s ? 0 : 60 * (n == t ? (e - i) / s + (i > e ? 6 : 0) : n == e ? (i - t) / s + 2 : (t - e) / s + 4);
                        return [o, 0 === n ? 0 : s / n, n]
                    }, "hsb-rgb": function (t, e, i) {
                        t = (t / 60 % 6 + 6) % 6;
                        var n = Math.floor(t), r = t - n, n = o[n], s = [i, i * (1 - e), i * (1 - e * r), i * (1 - e * (1 - r))];
                        return [s[n[0]], s[n[1]], s[n[2]]]
                    }, "rgb-hsl": function (t, e, i) {
                        var n = Math.max(t, e, i), r = Math.min(t, e, i), s = n - r, o = 0 === s, a = o ? 0 : 60 * (n == t ? (e - i) / s + (i > e ? 6 : 0) : n == e ? (i - t) / s + 2 : (t - e) / s + 4), l = (n + r) / 2, u = o ? 0 : .5 > l ? s / (n + r) : s / (2 - n - r);
                        return [a, u, l]
                    }, "hsl-rgb": function (t, e, i) {
                        if (t = (t / 360 % 1 + 1) % 1, 0 === e)return [i, i, i];
                        for (var n = [t + 1 / 3, t, t - 1 / 3], r = .5 > i ? i * (1 + e) : i + e - i * e, s = 2 * i - r, o = [], a = 0; 3 > a; a++) {
                            var l = n[a];
                            0 > l && (l += 1), l > 1 && (l -= 1), o[a] = 1 > 6 * l ? s + 6 * (r - s) * l : 1 > 2 * l ? r : 2 > 3 * l ? s + (r - s) * (2 / 3 - l) * 6 : s
                        }
                        return o
                    }, "rgb-gray": function (t, e, i) {
                        return [.2989 * t + .587 * e + .114 * i]
                    }, "gray-rgb": function (t) {
                        return [t, t, t]
                    }, "gray-hsb": function (t) {
                        return [0, 0, t]
                    }, "gray-hsl": function (t) {
                        return [0, 0, t]
                    }, "gradient-rgb": function () {
                        return []
                    }, "rgb-gradient": function () {
                        return []
                    }
                };
                return n.each(i, function (t, e) {
                    r[e] = [], n.each(t, function (t, s) {
                        var o = n.capitalize(t), a = /^(hue|saturation)$/.test(t), l = r[e][s] = "gradient" === t ? function (t) {
                                var e = this._components[0];
                                return t = q.read(Array.isArray(t) ? t : arguments, 0, {readNull: !0}), e !== t && (e && e._removeOwner(this), t && t._addOwner(this)), t
                            } : "gradient" === e ? function () {
                                    return c.read(arguments, 0, {readNull: "highlight" === t, clone: !0})
                                } : function (t) {
                                    return null == t || isNaN(t) ? 0 : t
                                };
                        this["get" + o] = function () {
                            return this._type === e || a && /^hs[bl]$/.test(this._type) ? this._components[s] : this._convert(e)[s]
                        }, this["set" + o] = function (t) {
                            this._type === e || a && /^hs[bl]$/.test(this._type) || (this._components = this._convert(e), this._properties = i[e], this._type = e), t = l.call(this, t), null != t && (this._components[s] = t, this._changed())
                        }
                    }, this)
                }, {
                    _class: "Color", _readIndex: !0, initialize: function l(e) {
                        var n, s, o, a, u = Array.prototype.slice, h = arguments, c = 0;
                        Array.isArray(e) && (h = e, e = h[0]);
                        var d = null != e && typeof e;
                        if ("string" === d && e in i && (n = e, e = h[1], Array.isArray(e) ? (s = e, o = h[2]) : (this.__read && (c = 1), h = u.call(h, 1), d = typeof e)), !s) {
                            if (a = "number" === d ? h : "object" === d && null != e.length ? e : null) {
                                n || (n = a.length >= 3 ? "rgb" : "gray");
                                var p = i[n].length;
                                o = a[p], this.__read && (c += a === arguments ? p + (null != o ? 1 : 0) : 1), a.length > p && (a = u.call(a, 0, p))
                            } else if ("string" === d) n = "rgb", s = t(e), 4 === s.length && (o = s[3], s.length--); else if ("object" === d)if (e.constructor === l) {
                                if (n = e._type, s = e._components.slice(), o = e._alpha, "gradient" === n)for (var f = 1, g = s.length; g > f; f++) {
                                    var _ = s[f];
                                    _ && (s[f] = _.clone())
                                }
                            } else if (e.constructor === q) n = "gradient", a = h; else {
                                n = "hue" in e ? "lightness" in e ? "hsl" : "hsb" : "gradient" in e || "stops" in e || "radial" in e ? "gradient" : "gray" in e ? "gray" : "rgb";
                                var m = i[n];
                                y = r[n], this._components = s = [];
                                for (var f = 0, g = m.length; g > f; f++) {
                                    var v = e[m[f]];
                                    null == v && 0 === f && "gradient" === n && "stops" in e && (v = {
                                        stops: e.stops,
                                        radial: e.radial
                                    }), v = y[f].call(this, v), null != v && (s[f] = v)
                                }
                                o = e.alpha
                            }
                            this.__read && n && (c = 1)
                        }
                        if (this._type = n || "rgb", "gradient" === n && (this._id = l._id = (l._id || 0) + 1), !s) {
                            this._components = s = [];
                            for (var y = r[this._type], f = 0, g = y.length; g > f; f++) {
                                var v = y[f].call(this, a && a[f]);
                                null != v && (s[f] = v)
                            }
                        }
                        this._components = s, this._properties = i[this._type], this._alpha = o, this.__read && (this.__read = c)
                    }, _serialize: function (t, e) {
                        var i = this.getComponents();
                        return n.serialize(/^(gray|rgb)$/.test(this._type) ? i : [this._type].concat(i), t, !0, e)
                    }, _changed: function () {
                        this._canvasStyle = null, this._owner && this._owner._changed(65)
                    }, _convert: function (t) {
                        var e;
                        return this._type === t ? this._components.slice() : (e = a[this._type + "-" + t]) ? e.apply(this, this._components) : a["rgb-" + t].apply(this, a[this._type + "-rgb"].apply(this, this._components))
                    }, convert: function (t) {
                        return new B(t, this._convert(t), this._alpha)
                    }, getType: function () {
                        return this._type
                    }, setType: function (t) {
                        this._components = this._convert(t), this._properties = i[t], this._type = t
                    }, getComponents: function () {
                        var t = this._components.slice();
                        return null != this._alpha && t.push(this._alpha), t
                    }, getAlpha: function () {
                        return null != this._alpha ? this._alpha : 1
                    }, setAlpha: function (t) {
                        this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                    }, hasAlpha: function () {
                        return null != this._alpha
                    }, equals: function (t) {
                        var e = n.isPlainValue(t, !0) ? B.read(arguments) : t;
                        return e === this || e && this._class === e._class && this._type === e._type && this._alpha === e._alpha && n.equals(this._components, e._components) || !1
                    }, toString: function () {
                        for (var t = this._properties, e = [], i = "gradient" === this._type, n = u.instance, r = 0, s = t.length; s > r; r++) {
                            var o = this._components[r];
                            null != o && e.push(t[r] + ": " + (i ? o : n.number(o)))
                        }
                        return null != this._alpha && e.push("alpha: " + n.number(this._alpha)), "{ " + e.join(", ") + " }"
                    }, toCSS: function (t) {
                        function e(t) {
                            return Math.round(255 * (0 > t ? 0 : t > 1 ? 1 : t))
                        }

                        var i = this._convert("rgb"), n = t || null == this._alpha ? 1 : this._alpha;
                        return i = [e(i[0]), e(i[1]), e(i[2])], 1 > n && i.push(0 > n ? 0 : n), t ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1) : (4 == i.length ? "rgba(" : "rgb(") + i.join(",") + ")"
                    }, toCanvasStyle: function (t) {
                        if (this._canvasStyle)return this._canvasStyle;
                        if ("gradient" !== this._type)return this._canvasStyle = this.toCSS();
                        var e, i = this._components, n = i[0], r = n._stops, s = i[1], o = i[2];
                        if (n._radial) {
                            var a = o.getDistance(s), l = i[3];
                            if (l) {
                                var u = l.subtract(s);
                                u.getLength() > a && (l = s.add(u.normalize(a - .1)))
                            }
                            var h = l || s;
                            e = t.createRadialGradient(h.x, h.y, 0, s.x, s.y, a)
                        } else e = t.createLinearGradient(s.x, s.y, o.x, o.y);
                        for (var c = 0, d = r.length; d > c; c++) {
                            var p = r[c];
                            e.addColorStop(p._rampPoint, p._color.toCanvasStyle())
                        }
                        return this._canvasStyle = e
                    }, transform: function (t) {
                        if ("gradient" === this._type) {
                            for (var e = this._components, i = 1, n = e.length; n > i; i++) {
                                var r = e[i];
                                t._transformPoint(r, r, !0)
                            }
                            this._changed()
                        }
                    }, statics: {
                        _types: i, random: function () {
                            var t = Math.random;
                            return new B(t(), t(), t())
                        }
                    }
                })
            }, new function () {
                var t = {
                    add: function (t, e) {
                        return t + e
                    }, subtract: function (t, e) {
                        return t - e
                    }, multiply: function (t, e) {
                        return t * e
                    }, divide: function (t, e) {
                        return t / e
                    }
                };
                return n.each(t, function (t, e) {
                    this[e] = function (e) {
                        e = B.read(arguments);
                        for (var i = this._type, n = this._components, r = e._convert(i), s = 0, o = n.length; o > s; s++)r[s] = t(n[s], r[s]);
                        return new B(i, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                    }
                }, {})
            });
            n.each(B._types, function (t, e) {
                var i = this[n.capitalize(e) + "Color"] = function (t) {
                    var i = null != t && typeof t, n = "object" === i && null != t.length ? t : "string" === i ? null : arguments;
                    return n ? new B(e, n) : new B(t)
                };
                if (3 == e.length) {
                    var r = e.toUpperCase();
                    B[r] = this[r + "Color"] = i
                }
            }, n.exports);
            var q = n.extend({
                _class: "Gradient", initialize: function Pt(t, e) {
                    this._id = Pt._id = (Pt._id || 0) + 1, t && this._set(t) && (t = e = null), this._stops || this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
                }, _serialize: function (t, e) {
                    return e.add(this, function () {
                        return n.serialize([this._stops, this._radial], t, !0, e)
                    })
                }, _changed: function () {
                    for (var t = 0, e = this._owners && this._owners.length; e > t; t++)this._owners[t]._changed()
                }, _addOwner: function (t) {
                    this._owners || (this._owners = []), this._owners.push(t)
                }, _removeOwner: function (e) {
                    var i = this._owners ? this._owners.indexOf(e) : -1;
                    -1 != i && (this._owners.splice(i, 1), 0 === this._owners.length && (this._owners = t))
                }, clone: function () {
                    for (var t = [], e = 0, i = this._stops.length; i > e; e++)t[e] = this._stops[e].clone();
                    return new q(t)
                }, getStops: function () {
                    return this._stops
                }, setStops: function (e) {
                    if (this.stops)for (var i = 0, n = this._stops.length; n > i; i++)this._stops[i]._owner = t;
                    if (e.length < 2)throw new Error("Gradient stop list needs to contain at least two stops.");
                    this._stops = H.readAll(e, 0, {clone: !0});
                    for (var i = 0, n = this._stops.length; n > i; i++) {
                        var r = this._stops[i];
                        r._owner = this, r._defaultRamp && r.setRampPoint(i / (n - 1))
                    }
                    this._changed()
                }, getRadial: function () {
                    return this._radial
                }, setRadial: function (t) {
                    this._radial = t, this._changed()
                }, equals: function (t) {
                    if (t === this)return !0;
                    if (t && this._class === t._class && this._stops.length === t._stops.length) {
                        for (var e = 0, i = this._stops.length; i > e; e++)if (!this._stops[e].equals(t._stops[e]))return !1;
                        return !0
                    }
                    return !1
                }
            }), H = n.extend({
                _class: "GradientStop", initialize: function (e, i) {
                    if (e) {
                        var n, r;
                        i === t && Array.isArray(e) ? (n = e[0], r = e[1]) : e.color ? (n = e.color, r = e.rampPoint) : (n = e, r = i), this.setColor(n), this.setRampPoint(r)
                    }
                }, clone: function () {
                    return new H(this._color.clone(), this._rampPoint)
                }, _serialize: function (t, e) {
                    return n.serialize([this._color, this._rampPoint], t, !0, e)
                }, _changed: function () {
                    this._owner && this._owner._changed(65)
                }, getRampPoint: function () {
                    return this._rampPoint
                }, setRampPoint: function (t) {
                    this._defaultRamp = null == t, this._rampPoint = t || 0, this._changed()
                }, getColor: function () {
                    return this._color
                }, setColor: function (t) {
                    this._color = B.read(arguments), this._color === t && (this._color = t.clone()), this._color._owner = this, this._changed()
                }, equals: function (t) {
                    return t === this || t && this._class === t._class && this._color.equals(t._color) && this._rampPoint == t._rampPoint || !1
                }
            }), W = n.extend(new function () {
                var e = {
                    fillColor: t,
                    strokeColor: t,
                    strokeWidth: 1,
                    strokeCap: "butt",
                    strokeJoin: "miter",
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    windingRule: "nonzero",
                    shadowColor: t,
                    shadowBlur: 0,
                    shadowOffset: new c,
                    selectedColor: t,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    fontSize: 12,
                    font: "sans-serif",
                    leading: null,
                    justification: "left"
                }, i = {
                    strokeWidth: 97,
                    strokeCap: 97,
                    strokeJoin: 97,
                    strokeScaling: 105,
                    miterLimit: 97,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9
                }, r = {beans: !0}, s = {_defaults: e, _textDefaults: new n(e, {fillColor: new B}), beans: !0};
                return n.each(e, function (e, o) {
                    var a = /Color$/.test(o), l = "shadowOffset" === o, u = n.capitalize(o), h = i[o], d = "set" + u, p = "get" + u;
                    s[d] = function (e) {
                        var i = this._owner, n = i && i._children;
                        if (n && n.length > 0 && !(i instanceof L))for (var r = 0, s = n.length; s > r; r++)n[r]._style[d](e); else {
                            var l = this._values[o];
                            l !== e && (a && (l && (l._owner = t), e && e.constructor === B && (e._owner && (e = e.clone()), e._owner = i)), this._values[o] = e, i && i._changed(h || 65))
                        }
                    }, s[p] = function (e) {
                        var i, r = this._owner, s = r && r._children;
                        if (!s || 0 === s.length || e || r instanceof L) {
                            var i = this._values[o];
                            if (i === t) i = this._defaults[o], i && i.clone && (i = i.clone()); else {
                                var u = a ? B : l ? c : null;
                                !u || i && i.constructor === u || (this._values[o] = i = u.read([i], 0, {
                                    readNull: !0,
                                    clone: !0
                                }), i && a && (i._owner = r))
                            }
                            return i
                        }
                        for (var h = 0, d = s.length; d > h; h++) {
                            var f = s[h]._style[p]();
                            if (0 === h) i = f; else if (!n.equals(i, f))return t
                        }
                        return i
                    }, r[p] = function (t) {
                        return this._style[p](t)
                    }, r[d] = function (t) {
                        this._style[d](t)
                    }
                }), x.inject(r), s
            }, {
                _class: "Style", initialize: function (t, e, i) {
                    this._values = {}, this._owner = e, this._project = e && e._project || i || r.project, e instanceof F && (this._defaults = this._textDefaults), t && this.set(t)
                }, set: function (t) {
                    var e = t instanceof W, i = e ? t._values : t;
                    if (i)for (var n in i)if (n in this._defaults) {
                        var r = i[n];
                        this[n] = r && e && r.clone ? r.clone() : r
                    }
                }, equals: function (t) {
                    return t === this || t && this._class === t._class && n.equals(this._values, t._values) || !1
                }, hasFill: function () {
                    return !!this.getFillColor()
                }, hasStroke: function () {
                    return !!this.getStrokeColor() && this.getStrokeWidth() > 0
                }, hasShadow: function () {
                    return !!this.getShadowColor() && this.getShadowBlur() > 0
                }, getView: function () {
                    return this._project.getView()
                }, getFontStyle: function () {
                    var t = this.getFontSize();
                    return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
                }, getFont: "#getFontFamily", setFont: "#setFontFamily", getLeading: function At() {
                    var t = At.base.call(this), e = this.getFontSize();
                    return /pt|em|%|px/.test(e) && (e = this.getView().getPixelSize(e)), null != t ? t : 1.2 * e
                }
            }), V = new function () {
                function t(t, e, i, n) {
                    for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), o = 0; 6 > o; o++) {
                        var a = r[o], l = a ? a + s : e;
                        if (l in t) {
                            if (!i)return t[l];
                            t[l] = n;
                            break
                        }
                    }
                }

                return {
                    getStyles: function (t) {
                        var e = t && 9 !== t.nodeType ? t.ownerDocument : t, i = e && e.defaultView;
                        return i && i.getComputedStyle(t, "")
                    }, getBounds: function (t, e) {
                        var i, n = t.ownerDocument, r = n.body, s = n.documentElement;
                        try {
                            i = t.getBoundingClientRect()
                        } catch (o) {
                            i = {left: 0, top: 0, width: 0, height: 0}
                        }
                        var a = i.left - (s.clientLeft || r.clientLeft || 0), l = i.top - (s.clientTop || r.clientTop || 0);
                        if (!e) {
                            var u = n.defaultView;
                            a += u.pageXOffset || s.scrollLeft || r.scrollLeft, l += u.pageYOffset || s.scrollTop || r.scrollTop
                        }
                        return new g(a, l, i.width, i.height)
                    }, getViewportBounds: function (t) {
                        var e = t.ownerDocument, i = e.defaultView, n = e.documentElement;
                        return new g(0, 0, i.innerWidth || n.clientWidth, i.innerHeight || n.clientHeight)
                    }, getOffset: function (t, e) {
                        return V.getBounds(t, e).getPoint()
                    }, getSize: function (t) {
                        return V.getBounds(t, !0).getSize()
                    }, isInvisible: function (t) {
                        return V.getSize(t).equals(new p(0, 0))
                    }, isInView: function (t) {
                        return !V.isInvisible(t) && V.getViewportBounds(t).intersects(V.getBounds(t, !0))
                    }, getPrefixed: function (e, i) {
                        return t(e, i)
                    }, setPrefixed: function (e, i, n) {
                        if ("object" == typeof i)for (var r in i)t(e, r, !0, i[r]); else t(e, i, !0, n)
                    }
                }
            }, U = {
                add: function (t, e) {
                    for (var i in e)for (var n = e[i], r = i.split(/[\s,]+/g), s = 0, o = r.length; o > s; s++)t.addEventListener(r[s], n, !1)
                }, remove: function (t, e) {
                    for (var i in e)for (var n = e[i], r = i.split(/[\s,]+/g), s = 0, o = r.length; o > s; s++)t.removeEventListener(r[s], n, !1)
                }, getPoint: function (t) {
                    var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                    return new c(e.pageX || e.clientX + document.documentElement.scrollLeft, e.pageY || e.clientY + document.documentElement.scrollTop)
                }, getTarget: function (t) {
                    return t.target || t.srcElement
                }, getRelatedTarget: function (t) {
                    return t.relatedTarget || t.toElement
                }, getOffset: function (t, e) {
                    return U.getPoint(t).subtract(V.getOffset(e || U.getTarget(t)))
                }, stop: function (t) {
                    t.stopPropagation(), t.preventDefault()
                }
            };
            U.requestAnimationFrame = new function () {
                function t() {
                    for (var e = r.length - 1; e >= 0; e--) {
                        var a = r[e], l = a[0], u = a[1];
                        (!u || ("true" == o.getAttribute(u, "keepalive") || s) && V.isInView(u)) && (r.splice(e, 1), l())
                    }
                    i && (r.length ? i(t) : n = !1)
                }

                var e, i = V.getPrefixed(window, "requestAnimationFrame"), n = !1, r = [], s = !0;
                return U.add(window, {
                    focus: function () {
                        s = !0
                    }, blur: function () {
                        s = !1
                    }
                }), function (s, o) {
                    r.push([s, o]), i ? n || (i(t), n = !0) : e || (e = setInterval(t, 1e3 / 60))
                }
            };
            var X = n.extend(s, {
                _class: "View", initialize: function Ot(t, e) {
                    function i(t) {
                        return e[t] || parseInt(e.getAttribute(t), 10)
                    }

                    function n() {
                        var t = V.getSize(e);
                        return t.isNaN() || t.isZero() ? new p(i("width"), i("height")) : t
                    }

                    this._project = t, this._scope = t._scope, this._element = e;
                    var r;
                    this._pixelRatio || (this._pixelRatio = window.devicePixelRatio || 1), this._id = e.getAttribute("id"), null == this._id && e.setAttribute("id", this._id = "view-" + Ot._id++), U.add(e, this._viewEvents);
                    var s = "none";
                    if (V.setPrefixed(e.style, {
                            userSelect: s,
                            touchAction: s,
                            touchCallout: s,
                            contentZooming: s,
                            userDrag: s,
                            tapHighlightColor: "rgba(0,0,0,0)"
                        }), o.hasAttribute(e, "resize")) {
                        var a = this;
                        U.add(window, this._windowEvents = {
                            resize: function () {
                                a.setViewSize(n())
                            }
                        })
                    }
                    if (this._setViewSize(r = n()), o.hasAttribute(e, "stats") && "undefined" != typeof Stats) {
                        this._stats = new Stats;
                        var l = this._stats.domElement, u = l.style, h = V.getOffset(e);
                        u.position = "absolute", u.left = h.x + "px", u.top = h.y + "px", document.body.appendChild(l)
                    }
                    Ot._views.push(this), Ot._viewsById[this._id] = this, this._viewSize = r, (this._matrix = new v)._owner = this, this._zoom = 1, Ot._focused || (Ot._focused = this), this._frameItems = {}, this._frameItemCount = 0
                }, remove: function () {
                    return this._project ? (X._focused === this && (X._focused = null), X._views.splice(X._views.indexOf(this), 1), delete X._viewsById[this._id], this._project._view === this && (this._project._view = null), U.remove(this._element, this._viewEvents), U.remove(window, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0) : !1
                }, _events: {
                    onFrame: {
                        install: function () {
                            this.play()
                        }, uninstall: function () {
                            this.pause()
                        }
                    }, onResize: {}
                }, _animate: !1, _time: 0, _count: 0, _requestFrame: function () {
                    var t = this;
                    U.requestAnimationFrame(function () {
                        t._requested = !1, t._animate && (t._requestFrame(), t._handleFrame())
                    }, this._element), this._requested = !0
                }, _handleFrame: function () {
                    r = this._scope;
                    var t = Date.now() / 1e3, e = this._before ? t - this._before : 0;
                    this._before = t, this._handlingFrame = !0, this.emit("frame", new n({
                        delta: e, time: this._time += e,
                        count: this._count++
                    })), this._stats && this._stats.update(), this._handlingFrame = !1, this.update()
                }, _animateItem: function (t, e) {
                    var i = this._frameItems;
                    e ? (i[t._id] = {
                            item: t,
                            time: 0,
                            count: 0
                        }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete i[t._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems))
                }, _handleFrameItems: function (t) {
                    for (var e in this._frameItems) {
                        var i = this._frameItems[e];
                        i.item.emit("frame", new n(t, {time: i.time += t.delta, count: i.count++}))
                    }
                }, _update: function () {
                    this._project._needsUpdate = !0, this._handlingFrame || (this._animate ? this._handleFrame() : this.update())
                }, _changed: function (t) {
                    1 & t && (this._project._needsUpdate = !0)
                }, _transform: function (t) {
                    this._matrix.concatenate(t), this._bounds = null, this._update()
                }, getElement: function () {
                    return this._element
                }, getPixelRatio: function () {
                    return this._pixelRatio
                }, getResolution: function () {
                    return 72 * this._pixelRatio
                }, getViewSize: function () {
                    var t = this._viewSize;
                    return new f(t.width, t.height, this, "setViewSize")
                }, setViewSize: function () {
                    var t = p.read(arguments), e = t.subtract(this._viewSize);
                    e.isZero() || (this._viewSize.set(t.width, t.height), this._setViewSize(t), this._bounds = null, this.emit("resize", {
                        size: t,
                        delta: e
                    }), this._update())
                }, _setViewSize: function (t) {
                    var e = this._element;
                    e.width = t.width, e.height = t.height
                }, getBounds: function () {
                    return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new g(new c, this._viewSize))), this._bounds
                }, getSize: function () {
                    return this.getBounds().getSize()
                }, getCenter: function () {
                    return this.getBounds().getCenter()
                }, setCenter: function () {
                    var t = c.read(arguments);
                    this.scrollBy(t.subtract(this.getCenter()))
                }, getZoom: function () {
                    return this._zoom
                }, setZoom: function (t) {
                    this._transform((new v).scale(t / this._zoom, this.getCenter())), this._zoom = t
                }, isVisible: function () {
                    return V.isInView(this._element)
                }, scrollBy: function () {
                    this._transform((new v).translate(c.read(arguments).negate()))
                }, play: function () {
                    this._animate = !0, this._requested || this._requestFrame()
                }, pause: function () {
                    this._animate = !1
                }, draw: function () {
                    this.update()
                }, projectToView: function () {
                    return this._matrix._transformPoint(c.read(arguments))
                }, viewToProject: function () {
                    return this._matrix._inverseTransform(c.read(arguments))
                }
            }, {
                statics: {
                    _views: [], _viewsById: {}, _id: 0, create: function (t, e) {
                        return "string" == typeof e && (e = document.getElementById(e)), new Y(t, e)
                    }
                }
            }, new function () {
                function t(t) {
                    var e = U.getTarget(t);
                    return e.getAttribute && X._viewsById[e.getAttribute("id")]
                }

                function e(t, e) {
                    return t.viewToProject(U.getOffset(e, t._element))
                }

                function i() {
                    if (!X._focused || !X._focused.isVisible())for (var t = 0, e = X._views.length; e > t; t++) {
                        var i = X._views[t];
                        if (i && i.isVisible()) {
                            X._focused = o = i;
                            break
                        }
                    }
                }

                function n(t, e, i) {
                    t._handleEvent("mousemove", e, i);
                    var n = t._scope.tool;
                    return n && n._handleEvent(h && n.responds("mousedrag") ? "mousedrag" : "mousemove", e, i), t.update(), n
                }

                var r, s, o, a, l, u, h = !1, c = window.navigator;
                c.pointerEnabled || c.msPointerEnabled ? (a = "pointerdown MSPointerDown", l = "pointermove MSPointerMove", u = "pointerup pointercancel MSPointerUp MSPointerCancel") : (a = "touchstart", l = "touchmove", u = "touchend touchcancel", "ontouchstart" in window && c.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (a += " mousedown", l += " mousemove", u += " mouseup"));
                var d = {
                    "selectstart dragstart": function (t) {
                        h && t.preventDefault()
                    }
                }, p = {
                    mouseout: function (t) {
                        var i = X._focused, r = U.getRelatedTarget(t);
                        !i || r && "HTML" !== r.nodeName || n(i, e(i, t), t)
                    }, scroll: i
                };
                return d[a] = function (i) {
                    var n = X._focused = t(i), s = e(n, i);
                    h = !0, n._handleEvent("mousedown", s, i), (r = n._scope.tool) && r._handleEvent("mousedown", s, i), n.update()
                }, p[l] = function (a) {
                    var l = X._focused;
                    if (!h) {
                        var u = t(a);
                        u ? (l !== u && n(l, e(l, a), a), s = l, l = X._focused = o = u) : o && o === l && (l = X._focused = s, i())
                    }
                    if (l) {
                        var c = e(l, a);
                        (h || l.getBounds().contains(c)) && (r = n(l, c, a))
                    }
                }, p[u] = function (t) {
                    var i = X._focused;
                    if (i && h) {
                        var n = e(i, t);
                        h = !1, i._handleEvent("mouseup", n, t), r && r._handleEvent("mouseup", n, t), i.update()
                    }
                }, U.add(document, p), U.add(window, {load: i}), {
                    _viewEvents: d, _handleEvent: function () {
                    }, statics: {updateFocus: i}
                }
            }), Y = X.extend({
                _class: "CanvasView", initialize: function (t, e) {
                    if (!(e instanceof HTMLCanvasElement)) {
                        var i = p.read(arguments, 1);
                        if (i.isZero())throw new Error("Cannot create CanvasView with the provided argument: " + [].slice.call(arguments, 1));
                        e = it.getCanvas(i)
                    }
                    if (this._context = e.getContext("2d"), this._eventCounters = {}, this._pixelRatio = 1, !/^off|false$/.test(o.getAttribute(e, "hidpi"))) {
                        var n = window.devicePixelRatio || 1, r = V.getPrefixed(this._context, "backingStorePixelRatio") || 1;
                        this._pixelRatio = n / r
                    }
                    X.call(this, t, e)
                }, _setViewSize: function (t) {
                    var e = this._element, i = this._pixelRatio, n = t.width, r = t.height;
                    if (e.width = n * i, e.height = r * i, 1 !== i) {
                        if (!o.hasAttribute(e, "resize")) {
                            var s = e.style;
                            s.width = n + "px", s.height = r + "px"
                        }
                        this._context.scale(i, i)
                    }
                }, getPixelSize: function (t) {
                    var e = this._context, i = e.font;
                    return e.font = t + " serif", t = parseFloat(e.font), e.font = i, t
                }, getTextWidth: function (t, e) {
                    var i = this._context, n = i.font, r = 0;
                    i.font = t;
                    for (var s = 0, o = e.length; o > s; s++)r = Math.max(r, i.measureText(e[s]).width);
                    return i.font = n, r
                }, update: function () {
                    var t = this._project;
                    if (!t || !t._needsUpdate)return !1;
                    var e = this._context, i = this._viewSize;
                    return e.clearRect(0, 0, i.width + 1, i.height + 1), t.draw(e, this._matrix, this._pixelRatio), t._needsUpdate = !1, !0
                }
            }, new function () {
                function t(t, e, i, n, r, s) {
                    function o(t) {
                        return t.responds(e) && (a || (a = new J(e, i, n, r, s ? n.subtract(s) : null)), t.emit(e, a) && a.isStopped) ? (i.preventDefault(), !0) : void 0
                    }

                    for (var a, l = r; l;) {
                        if (o(l))return !0;
                        l = l.getParent()
                    }
                    return o(t) ? !0 : !1
                }

                var e, i, n, r, s, o, a, l, u;
                return {
                    _handleEvent: function (h, c, d) {
                        if (this._eventCounters[h]) {
                            var p = this._project, f = p.hitTest(c, {
                                tolerance: 0,
                                fill: !0,
                                stroke: !0
                            }), g = f && f.item, _ = !1;
                            switch (h) {
                                case"mousedown":
                                    for (_ = t(this, h, d, c, g), l = s == g && Date.now() - u < 300, r = s = g, e = i = n = c, a = !_ && g; a && !a.responds("mousedrag");)a = a._parent;
                                    break;
                                case"mouseup":
                                    _ = t(this, h, d, c, g, e), a && (i && !i.equals(c) && t(this, "mousedrag", d, c, a, i), g !== a && (n = c, t(this, "mousemove", d, c, g, n))), !_ && g && g === r && (u = Date.now(), t(this, l && r.responds("doubleclick") ? "doubleclick" : "click", d, e, g), l = !1), r = a = null;
                                    break;
                                case"mousemove":
                                    a && (_ = t(this, "mousedrag", d, c, a, i)), _ || (g !== o && (n = c), _ = t(this, h, d, c, g, n)), i = n = c, g !== o && (t(this, "mouseleave", d, c, o), o = g, t(this, "mouseenter", d, c, g))
                            }
                            return _
                        }
                    }
                }
            }), G = n.extend({
                _class: "Event", initialize: function (t) {
                    this.event = t
                }, isPrevented: !1, isStopped: !1, preventDefault: function () {
                    this.isPrevented = !0, this.event.preventDefault()
                }, stopPropagation: function () {
                    this.isStopped = !0, this.event.stopPropagation()
                }, stop: function () {
                    this.stopPropagation(), this.preventDefault()
                }, getModifiers: function () {
                    return Q.modifiers
                }
            }), Z = G.extend({
                _class: "KeyEvent", initialize: function (t, e, i, n) {
                    G.call(this, n), this.type = t ? "keydown" : "keyup", this.key = e, this.character = i
                }, toString: function () {
                    return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
                }
            }), Q = new function () {
                function t(t, e, s, u) {
                    var h, c = s ? String.fromCharCode(s) : "", d = i[e], p = d || c.toLowerCase(), f = t ? "keydown" : "keyup", g = X._focused, _ = g && g.isVisible() && g._scope, m = _ && _.tool;
                    l[p] = t, d && (h = n.camelize(d)) in o && (o[h] = t), t ? a[e] = s : delete a[e], m && m.responds(f) && (r = _, m.emit(f, new Z(t, p, c, u)), g && g.update())
                }

                var e, i = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "control",
                    18: "option",
                    19: "pause",
                    20: "caps-lock",
                    27: "escape",
                    32: "space",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    46: "delete",
                    91: "command",
                    93: "command",
                    224: "command"
                }, s = {9: !0, 13: !0, 32: !0}, o = new n({
                    shift: !1,
                    control: !1,
                    option: !1,
                    command: !1,
                    capsLock: !1,
                    space: !1
                }), a = {}, l = {};
                return U.add(document, {
                    keydown: function (n) {
                        var r = n.which || n.keyCode;
                        r in i || o.command ? t(!0, r, r in s || o.command ? r : 0, n) : e = r
                    }, keypress: function (i) {
                        null != e && (t(!0, e, i.which || i.keyCode, i), e = null)
                    }, keyup: function (e) {
                        var i = e.which || e.keyCode;
                        i in a && t(!1, i, a[i], e)
                    }
                }), U.add(window, {
                    blur: function (e) {
                        for (var i in a)t(!1, i, a[i], e)
                    }
                }), {
                    modifiers: o, isDown: function (t) {
                        return !!l[t]
                    }
                }
            }, J = G.extend({
                _class: "MouseEvent", initialize: function (t, e, i, n, r) {
                    G.call(this, e), this.type = t, this.point = i, this.target = n, this.delta = r
                }, toString: function () {
                    return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
                }
            }), K = G.extend({
                _class: "ToolEvent", _item: null, initialize: function (t, e, i) {
                    this.tool = t, this.type = e, this.event = i
                }, _choosePoint: function (t, e) {
                    return t ? t : e ? e.clone() : null
                }, getPoint: function () {
                    return this._choosePoint(this._point, this.tool._point)
                }, setPoint: function (t) {
                    this._point = t
                }, getLastPoint: function () {
                    return this._choosePoint(this._lastPoint, this.tool._lastPoint)
                }, setLastPoint: function (t) {
                    this._lastPoint = t
                }, getDownPoint: function () {
                    return this._choosePoint(this._downPoint, this.tool._downPoint)
                }, setDownPoint: function (t) {
                    this._downPoint = t
                }, getMiddlePoint: function () {
                    return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
                }, setMiddlePoint: function (t) {
                    this._middlePoint = t
                }, getDelta: function () {
                    return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
                }, setDelta: function (t) {
                    this._delta = t
                }, getCount: function () {
                    return /^mouse(down|up)$/.test(this.type) ? this.tool._downCount : this.tool._count
                }, setCount: function (t) {
                    this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
                }, getItem: function () {
                    if (!this._item) {
                        var t = this.tool._scope.project.hitTest(this.getPoint());
                        if (t) {
                            for (var e = t.item, i = e._parent; /^(Group|CompoundPath)$/.test(i._class);)e = i, i = i._parent;
                            this._item = e
                        }
                    }
                    return this._item
                }, setItem: function (t) {
                    this._item = t
                }, toString: function () {
                    return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
                }
            }), tt = a.extend({
                _class: "Tool",
                _list: "tools",
                _reference: "tool",
                _events: ["onActivate", "onDeactivate", "onEditOptions", "onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onKeyDown", "onKeyUp"],
                initialize: function (t) {
                    a.call(this), this._firstMove = !0, this._count = 0, this._downCount = 0, this._set(t)
                },
                getMinDistance: function () {
                    return this._minDistance
                },
                setMinDistance: function (t) {
                    this._minDistance = t, null != this._minDistance && null != this._maxDistance && this._minDistance > this._maxDistance && (this._maxDistance = this._minDistance)
                },
                getMaxDistance: function () {
                    return this._maxDistance
                },
                setMaxDistance: function (t) {
                    this._maxDistance = t, null != this._minDistance && null != this._maxDistance && this._maxDistance < this._minDistance && (this._minDistance = t)
                },
                getFixedDistance: function () {
                    return this._minDistance == this._maxDistance ? this._minDistance : null
                },
                setFixedDistance: function (t) {
                    this._minDistance = t, this._maxDistance = t
                },
                _updateEvent: function (t, e, i, n, r, s, o) {
                    if (!r) {
                        if (null != i || null != n) {
                            var a = null != i ? i : 0, l = e.subtract(this._point), u = l.getLength();
                            if (a > u)return !1;
                            var h = null != n ? n : 0;
                            if (0 != h)if (u > h) e = this._point.add(l.normalize(h)); else if (o)return !1
                        }
                        if (s && e.equals(this._point))return !1
                    }
                    switch (this._lastPoint = r && "mousemove" == t ? e : this._point, this._point = e, t) {
                        case"mousedown":
                            this._lastPoint = this._downPoint, this._downPoint = this._point, this._downCount++;
                            break;
                        case"mouseup":
                            this._lastPoint = this._downPoint
                    }
                    return this._count = r ? 0 : this._count + 1, !0
                },
                _fireEvent: function (t, e) {
                    var i = r.project._removeSets;
                    if (i) {
                        "mouseup" === t && (i.mousedrag = null);
                        var n = i[t];
                        if (n) {
                            for (var s in n) {
                                var o = n[s];
                                for (var a in i) {
                                    var l = i[a];
                                    l && l != n && delete l[o._id]
                                }
                                o.remove()
                            }
                            i[t] = null
                        }
                    }
                    return this.responds(t) && this.emit(t, new K(this, t, e))
                },
                _handleEvent: function (t, e, i) {
                    r = this._scope;
                    var n = !1;
                    switch (t) {
                        case"mousedown":
                            this._updateEvent(t, e, null, null, !0, !1, !1), n = this._fireEvent(t, i);
                            break;
                        case"mousedrag":
                            for (var s = !1, o = !1; this._updateEvent(t, e, this.minDistance, this.maxDistance, !1, s, o);)n = this._fireEvent(t, i) || n, s = !0, o = !0;
                            break;
                        case"mouseup":
                            !e.equals(this._point) && this._updateEvent("mousedrag", e, this.minDistance, this.maxDistance, !1, !1, !1) && (n = this._fireEvent("mousedrag", i)), this._updateEvent(t, e, null, this.maxDistance, !1, !1, !1), n = this._fireEvent(t, i) || n, this._updateEvent(t, e, null, null, !0, !1, !1), this._firstMove = !0;
                            break;
                        case"mousemove":
                            for (; this._updateEvent(t, e, this.minDistance, this.maxDistance, this._firstMove, !0, !1);)n = this._fireEvent(t, i) || n, this._firstMove = !1
                    }
                    return n && i.preventDefault(), n
                }
            }), et = {
                request: function (t, e, i) {
                    var n = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
                    return n.open(t.toUpperCase(), e, !0), "overrideMimeType" in n && n.overrideMimeType("text/plain"), n.onreadystatechange = function () {
                        if (4 === n.readyState) {
                            var t = n.status;
                            if (0 !== t && 200 !== t)throw new Error("Could not load " + e + " (Error " + t + ")");
                            i.call(n, n.responseText)
                        }
                    }, n.send(null)
                }
            }, it = {
                canvases: [], getCanvas: function (t, e) {
                    var i, n = !0;
                    "object" == typeof t && (e = t.height, t = t.width), i = this.canvases.length ? this.canvases.pop() : document.createElement("canvas");
                    var r = i.getContext("2d");
                    return i.width === t && i.height === e ? n && r.clearRect(0, 0, t + 1, e + 1) : (i.width = t, i.height = e), r.save(), i
                }, getContext: function (t, e) {
                    return this.getCanvas(t, e).getContext("2d")
                }, release: function (t) {
                    var e = t.canvas ? t.canvas : t;
                    e.getContext("2d").restore(), this.canvases.push(e)
                }
            }, nt = new function () {
                function t(t, e, i) {
                    return .2989 * t + .587 * e + .114 * i
                }

                function e(e, i, n, r) {
                    var s = r - t(e, i, n);
                    p = e + s, f = i + s, g = n + s;
                    var r = t(p, f, g), o = _(p, f, g), a = m(p, f, g);
                    if (0 > o) {
                        var l = r - o;
                        p = r + (p - r) * r / l, f = r + (f - r) * r / l, g = r + (g - r) * r / l
                    }
                    if (a > 255) {
                        var u = 255 - r, h = a - r;
                        p = r + (p - r) * u / h, f = r + (f - r) * u / h, g = r + (g - r) * u / h
                    }
                }

                function i(t, e, i) {
                    return m(t, e, i) - _(t, e, i)
                }

                function r(t, e, i, n) {
                    var r, s = [t, e, i], o = m(t, e, i), a = _(t, e, i);
                    a = a === t ? 0 : a === e ? 1 : 2, o = o === t ? 0 : o === e ? 1 : 2, r = 0 === _(a, o) ? 1 === m(a, o) ? 2 : 1 : 0, s[o] > s[a] ? (s[r] = (s[r] - s[a]) * n / (s[o] - s[a]), s[o] = n) : s[r] = s[o] = 0, s[a] = 0, p = s[0], f = s[1], g = s[2]
                }

                var s, o, a, l, u, h, c, d, p, f, g, _ = Math.min, m = Math.max, v = Math.abs, y = {
                    multiply: function () {
                        p = u * s / 255, f = h * o / 255, g = c * a / 255
                    }, screen: function () {
                        p = u + s - u * s / 255, f = h + o - h * o / 255, g = c + a - c * a / 255
                    }, overlay: function () {
                        p = 128 > u ? 2 * u * s / 255 : 255 - 2 * (255 - u) * (255 - s) / 255, f = 128 > h ? 2 * h * o / 255 : 255 - 2 * (255 - h) * (255 - o) / 255, g = 128 > c ? 2 * c * a / 255 : 255 - 2 * (255 - c) * (255 - a) / 255
                    }, "soft-light": function () {
                        var t = s * u / 255;
                        p = t + u * (255 - (255 - u) * (255 - s) / 255 - t) / 255, t = o * h / 255, f = t + h * (255 - (255 - h) * (255 - o) / 255 - t) / 255, t = a * c / 255, g = t + c * (255 - (255 - c) * (255 - a) / 255 - t) / 255
                    }, "hard-light": function () {
                        p = 128 > s ? 2 * s * u / 255 : 255 - 2 * (255 - s) * (255 - u) / 255, f = 128 > o ? 2 * o * h / 255 : 255 - 2 * (255 - o) * (255 - h) / 255, g = 128 > a ? 2 * a * c / 255 : 255 - 2 * (255 - a) * (255 - c) / 255
                    }, "color-dodge": function () {
                        p = 0 === u ? 0 : 255 === s ? 255 : _(255, 255 * u / (255 - s)), f = 0 === h ? 0 : 255 === o ? 255 : _(255, 255 * h / (255 - o)), g = 0 === c ? 0 : 255 === a ? 255 : _(255, 255 * c / (255 - a))
                    }, "color-burn": function () {
                        p = 255 === u ? 255 : 0 === s ? 0 : m(0, 255 - 255 * (255 - u) / s), f = 255 === h ? 255 : 0 === o ? 0 : m(0, 255 - 255 * (255 - h) / o), g = 255 === c ? 255 : 0 === a ? 0 : m(0, 255 - 255 * (255 - c) / a)
                    }, darken: function () {
                        p = s > u ? u : s, f = o > h ? h : o, g = a > c ? c : a
                    }, lighten: function () {
                        p = u > s ? u : s, f = h > o ? h : o, g = c > a ? c : a
                    }, difference: function () {
                        p = u - s, 0 > p && (p = -p), f = h - o, 0 > f && (f = -f), g = c - a, 0 > g && (g = -g)
                    }, exclusion: function () {
                        p = u + s * (255 - u - u) / 255, f = h + o * (255 - h - h) / 255, g = c + a * (255 - c - c) / 255
                    }, hue: function () {
                        r(s, o, a, i(u, h, c)), e(p, f, g, t(u, h, c))
                    }, saturation: function () {
                        r(u, h, c, i(s, o, a)), e(p, f, g, t(u, h, c))
                    }, luminosity: function () {
                        e(u, h, c, t(s, o, a))
                    }, color: function () {
                        e(s, o, a, t(u, h, c))
                    }, add: function () {
                        p = _(u + s, 255), f = _(h + o, 255), g = _(c + a, 255)
                    }, subtract: function () {
                        p = m(u - s, 0), f = m(h - o, 0), g = m(c - a, 0)
                    }, average: function () {
                        p = (u + s) / 2, f = (h + o) / 2, g = (c + a) / 2
                    }, negation: function () {
                        p = 255 - v(255 - s - u), f = 255 - v(255 - o - h), g = 255 - v(255 - a - c)
                    }
                }, w = this.nativeModes = n.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function (t) {
                    this[t] = !0
                }, {}), b = it.getContext(1, 1);
                n.each(y, function (t, e) {
                    var i = "darken" === e, n = !1;
                    b.save();
                    try {
                        b.fillStyle = i ? "#300" : "#a00", b.fillRect(0, 0, 1, 1), b.globalCompositeOperation = e, b.globalCompositeOperation === e && (b.fillStyle = i ? "#a00" : "#300", b.fillRect(0, 0, 1, 1), n = b.getImageData(0, 0, 1, 1).data[0] !== i ? 170 : 51)
                    } catch (r) {
                    }
                    b.restore(), w[e] = n
                }), it.release(b), this.process = function (t, e, i, n, r) {
                    var _ = e.canvas, m = "normal" === t;
                    if (m || w[t]) i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.globalAlpha = n, m || (i.globalCompositeOperation = t), i.drawImage(_, r.x, r.y), i.restore(); else {
                        var v = y[t];
                        if (!v)return;
                        for (var b = i.getImageData(r.x, r.y, _.width, _.height), x = b.data, T = e.getImageData(0, 0, _.width, _.height).data, S = 0, C = x.length; C > S; S += 4) {
                            s = T[S], u = x[S], o = T[S + 1], h = x[S + 1], a = T[S + 2], c = x[S + 2], l = T[S + 3], d = x[S + 3], v();
                            var k = l * n / 255, P = 1 - k;
                            x[S] = k * p + P * u, x[S + 1] = k * f + P * h, x[S + 2] = k * g + P * c, x[S + 3] = l * n + P * d
                        }
                        i.putImageData(b, r.x, r.y)
                    }
                }
            }, rt = n.each({
                fillColor: ["fill", "color"],
                strokeColor: ["stroke", "color"],
                strokeWidth: ["stroke-width", "number"],
                strokeCap: ["stroke-linecap", "string"],
                strokeJoin: ["stroke-linejoin", "string"],
                strokeScaling: ["vector-effect", "lookup", {
                    "true": "none",
                    "false": "non-scaling-stroke"
                }, function (t, e) {
                    return !e && (t instanceof j || t instanceof C || t instanceof F)
                }],
                miterLimit: ["stroke-miterlimit", "number"],
                dashArray: ["stroke-dasharray", "array"],
                dashOffset: ["stroke-dashoffset", "number"],
                fontFamily: ["font-family", "string"],
                fontWeight: ["font-weight", "string"],
                fontSize: ["font-size", "number"],
                justification: ["text-anchor", "lookup", {left: "start", center: "middle", right: "end"}],
                opacity: ["opacity", "number"],
                blendMode: ["mix-blend-mode", "string"]
            }, function (t, e) {
                var i = n.capitalize(e), r = t[2];
                this[e] = {
                    type: t[1], property: e, attribute: t[0], toSVG: r, fromSVG: r && n.each(r, function (t, e) {
                        this[t] = e
                    }, {}), exportFilter: t[3], get: "get" + i, set: "set" + i
                }
            }, {}), st = {href: "http://www.w3.org/1999/xlink", xlink: "http://www.w3.org/2000/xmlns"};
            return new function () {
                function t(t, e) {
                    for (var i in e) {
                        var n = e[i], r = st[i];
                        "number" == typeof n && (n = S.number(n)), r ? t.setAttributeNS(r, i, n) : t.setAttribute(i, n)
                    }
                    return t
                }

                function e(e, i) {
                    return t(document.createElementNS("http://www.w3.org/2000/svg", e), i)
                }

                function r(t, e, i) {
                    var r = new n, s = t.getTranslation();
                    if (e) {
                        t = t.shiftless();
                        var o = t._inverseTransform(s);
                        r[i ? "cx" : "x"] = o.x, r[i ? "cy" : "y"] = o.y, s = null
                    }
                    if (!t.isIdentity()) {
                        var a = t.decompose();
                        if (a && !a.shearing) {
                            var l = [], u = a.rotation, c = a.scaling;
                            s && !s.isZero() && l.push("translate(" + S.point(s) + ")"), h.isZero(c.x - 1) && h.isZero(c.y - 1) || l.push("scale(" + S.point(c) + ")"), u && l.push("rotate(" + S.number(u) + ")"), r.transform = l.join(" ")
                        } else r.transform = "matrix(" + t.getValues().join(",") + ")"
                    }
                    return r
                }

                function s(i, n) {
                    for (var s = r(i._matrix), o = i._children, a = e("g", s), l = 0, u = o.length; u > l; l++) {
                        var h = o[l], c = b(h, n);
                        if (c)if (h.isClipMask()) {
                            var d = e("clipPath");
                            d.appendChild(c), v(h, d, "clip"), t(a, {"clip-path": "url(#" + d.id + ")"})
                        } else a.appendChild(c)
                    }
                    return a
                }

                function o(t) {
                    var i = r(t._matrix, !0), n = t.getSize();
                    return i.x -= n.width / 2, i.y -= n.height / 2, i.width = n.width, i.height = n.height, i.href = t.toDataURL(), e("image", i)
                }

                function a(t, n) {
                    if (n.matchShapes) {
                        var s = t.toShape(!1);
                        if (s)return c(s, n)
                    }
                    var o, a = t._segments, u = r(t._matrix);
                    if (0 === a.length)return null;
                    if (t.isPolygon())if (a.length >= 3) {
                        o = t._closed ? "polygon" : "polyline";
                        var h = [];
                        for (i = 0, l = a.length; i < l; i++)h.push(S.point(a[i]._point));
                        u.points = h.join(" ")
                    } else {
                        o = "line";
                        var d = a[0]._point, p = a[a.length - 1]._point;
                        u.set({x1: d.x, y1: d.y, x2: p.x, y2: p.y})
                    } else o = "path", u.d = t.getPathData(null, n.precision);
                    return e(o, u)
                }

                function c(t) {
                    var i = t._type, n = t._radius, s = r(t._matrix, !0, "rectangle" !== i);
                    if ("rectangle" === i) {
                        i = "rect";
                        var o = t._size, a = o.width, l = o.height;
                        s.x -= a / 2, s.y -= l / 2, s.width = a, s.height = l, n.isZero() && (n = null)
                    }
                    return n && ("circle" === i ? s.r = n : (s.rx = n.width, s.ry = n.height)), e(i, s)
                }

                function d(t, i) {
                    var n = r(t._matrix), s = t.getPathData(null, i.precision);
                    return s && (n.d = s), e("path", n)
                }

                function p(t, i) {
                    var n = r(t._matrix, !0), s = t.getSymbol(), o = m(s, "symbol"), a = s.getDefinition(), l = a.getBounds();
                    return o || (o = e("symbol", {viewBox: S.rectangle(l)}), o.appendChild(b(a, i)), v(s, o, "symbol")), n.href = "#" + o.id, n.x += l.x, n.y += l.y, n.width = S.number(l.width), n.height = S.number(l.height), n.overflow = "visible", e("use", n)
                }

                function f(t) {
                    var i = m(t, "color");
                    if (!i) {
                        var n, r = t.getGradient(), s = r._radial, o = t.getOrigin().transform(), a = t.getDestination().transform();
                        if (s) {
                            n = {cx: o.x, cy: o.y, r: o.getDistance(a)};
                            var l = t.getHighlight();
                            l && (l = l.transform(), n.fx = l.x, n.fy = l.y)
                        } else n = {x1: o.x, y1: o.y, x2: a.x, y2: a.y};
                        n.gradientUnits = "userSpaceOnUse", i = e((s ? "radial" : "linear") + "Gradient", n);
                        for (var u = r._stops, h = 0, c = u.length; c > h; h++) {
                            var d = u[h], p = d._color, f = p.getAlpha();
                            n = {
                                offset: d._rampPoint,
                                "stop-color": p.toCSS(!0)
                            }, 1 > f && (n["stop-opacity"] = f), i.appendChild(e("stop", n))
                        }
                        v(t, i, "color")
                    }
                    return "url(#" + i.id + ")"
                }

                function g(t) {
                    var i = e("text", r(t._matrix, !0));
                    return i.textContent = t._content, i
                }

                function _(e, i, r) {
                    var s = {}, o = !r && e.getParent();
                    return null != e._name && (s.id = e._name), n.each(rt, function (t) {
                        var i = t.get, r = t.type, a = e[i]();
                        if (t.exportFilter ? t.exportFilter(e, a) : !o || !n.equals(o[i](), a)) {
                            if ("color" === r && null != a) {
                                var l = a.getAlpha();
                                1 > l && (s[t.attribute + "-opacity"] = l)
                            }
                            s[t.attribute] = null == a ? "none" : "number" === r ? S.number(a) : "color" === r ? a.gradient ? f(a, e) : a.toCSS(!0) : "array" === r ? a.join(",") : "lookup" === r ? t.toSVG[a] : a
                        }
                    }), 1 === s.opacity && delete s.opacity, e._visible || (s.visibility = "hidden"), t(i, s)
                }

                function m(t, e) {
                    return C || (C = {ids: {}, svgs: {}}), t && C.svgs[e + "-" + t._id]
                }

                function v(t, e, i) {
                    C || m();
                    var n = C.ids[i] = (C.ids[i] || 0) + 1;
                    e.id = i + "-" + n, C.svgs[i + "-" + t._id] = e
                }

                function y(t, i) {
                    var n = t, r = null;
                    if (C) {
                        n = "svg" === t.nodeName.toLowerCase() && t;
                        for (var s in C.svgs)r || (n || (n = e("svg"), n.appendChild(t)), r = n.insertBefore(e("defs"), n.firstChild)), r.appendChild(C.svgs[s]);
                        C = null
                    }
                    return i.asString ? (new XMLSerializer).serializeToString(n) : n
                }

                function b(t, e, i) {
                    var n = k[t._class], r = n && n(t, e);
                    if (r) {
                        var s = e.onExport;
                        s && (r = s(t, r, e) || r);
                        var o = JSON.stringify(t._data);
                        o && "{}" !== o && "null" !== o && r.setAttribute("data-paper-data", o)
                    }
                    return r && _(t, r, i)
                }

                function T(t) {
                    return t || (t = {}), S = new u(t.precision), t
                }

                var S, C, k = {
                    Group: s,
                    Layer: s,
                    Raster: o,
                    Path: a,
                    Shape: c,
                    CompoundPath: d,
                    PlacedSymbol: p,
                    PointText: g
                };
                x.inject({
                    exportSVG: function (t) {
                        return t = T(t), y(b(this, t, !0), t)
                    }
                }), w.inject({
                    exportSVG: function (t) {
                        t = T(t);
                        var i = this.layers, n = this.getView(), s = n.getViewSize(), o = e("svg", {
                            x: 0,
                            y: 0,
                            width: s.width,
                            height: s.height,
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }), a = o, l = n._matrix;
                        l.isIdentity() || (a = o.appendChild(e("g", r(l))));
                        for (var u = 0, h = i.length; h > u; u++)a.appendChild(b(i[u], t, !0));
                        return y(o, t)
                    }
                })
            }, new function () {
                function e(t, e, i, n) {
                    var r = st[e], s = r ? t.getAttributeNS(r, e) : t.getAttribute(e);
                    return "null" === s && (s = null), null == s ? n ? null : i ? "" : 0 : i ? s : parseFloat(s)
                }

                function i(t, i, n, r) {
                    return i = e(t, i, !1, r), n = e(t, n, !1, r), !r || null != i && null != n ? new c(i, n) : null
                }

                function s(t, i, n, r) {
                    return i = e(t, i, !1, r), n = e(t, n, !1, r), !r || null != i && null != n ? new p(i, n) : null
                }

                function o(t, e, i) {
                    return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? y(t) || t : "lookup" === e ? i[t] : t
                }

                function a(t, e, i, n) {
                    var r = t.childNodes, s = "clippath" === e, o = new T, a = o._project, l = a._currentStyle, u = [];
                    s || (o = m(o, t, n), a._currentStyle = o._style.clone());
                    for (var h = 0, c = r.length; c > h; h++) {
                        var d, p = r[h];
                        1 !== p.nodeType || !(d = S(p, i, !1)) || d instanceof b || u.push(d)
                    }
                    return o.addChildren(u), s && (o = m(o.reduce(), t, n)), a._currentStyle = l, (s || "defs" === e) && (o.remove(), o = null), o
                }

                function l(t, e) {
                    for (var i = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), n = [], r = 0, s = i.length; s > r; r += 2)n.push(new c(parseFloat(i[r]), parseFloat(i[r + 1])));
                    var o = new z(n);
                    return "polygon" === e && o.closePath(), o
                }

                function u(t) {
                    var e = t.getAttribute("d"), i = {pathData: e};
                    return (e.match(/m/gi) || []).length > 1 || /z\S+/i.test(e) ? new L(i) : new z(i)
                }

                function h(t, n) {
                    var r, s = (e(t, "href", !0) || "").substring(1), o = "radialgradient" === n;
                    if (s) r = O[s].getGradient(); else {
                        for (var a = t.childNodes, l = [], u = 0, h = a.length; h > u; u++) {
                            var c = a[u];
                            1 === c.nodeType && l.push(m(new H, c))
                        }
                        r = new q(l, o)
                    }
                    var d, p, f;
                    return o ? (d = i(t, "cx", "cy"), p = d.add(e(t, "r"), 0), f = i(t, "fx", "fy", !0)) : (d = i(t, "x1", "y1"), p = i(t, "x2", "y2")), m(new B(r, d, p, f), t), null
                }

                function d(t, e, i, n) {
                    for (var r = (n.getAttribute(i) || "").split(/\)\s*/g), s = new v, o = 0, a = r.length; a > o; o++) {
                        var l = r[o];
                        if (!l)break;
                        for (var u = l.split(/\(\s*/), h = u[0], c = u[1].split(/[\s,]+/g), d = 0, p = c.length; p > d; d++)c[d] = parseFloat(c[d]);
                        switch (h) {
                            case"matrix":
                                s.concatenate(new v(c[0], c[1], c[2], c[3], c[4], c[5]));
                                break;
                            case"rotate":
                                s.rotate(c[0], c[1], c[2]);
                                break;
                            case"translate":
                                s.translate(c[0], c[1]);
                                break;
                            case"scale":
                                s.scale(c);
                                break;
                            case"skewX":
                                s.skew(c[0], 0);
                                break;
                            case"skewY":
                                s.skew(0, c[0])
                        }
                    }
                    t.transform(s)
                }

                function f(t, e, i) {
                    var n = t["fill-opacity" === i ? "getFillColor" : "getStrokeColor"]();
                    n && n.setAlpha(parseFloat(e))
                }

                function _(e, i, r) {
                    var s = e.attributes[i], o = s && s.value;
                    if (!o) {
                        var a = n.camelize(i);
                        o = e.style[a], o || r.node[a] === r.parent[a] || (o = r.node[a])
                    }
                    return o ? "none" === o ? null : o : t
                }

                function m(e, i, r) {
                    var s = {node: V.getStyles(i) || {}, parent: !r && V.getStyles(i.parentNode) || {}};
                    return n.each(A, function (r, o) {
                        var a = _(i, o, s);
                        a !== t && (e = n.pick(r(e, a, o, i, s), e))
                    }), e
                }

                function y(t) {
                    var e = t && t.match(/\((?:#|)([^)']+)/);
                    return e && O[e[1]]
                }

                function S(t, e, i) {
                    function n(t) {
                        r = o;
                        var n = S(t, e, i), s = e.onLoad, a = o.project && o.getView();
                        s && s.call(this, n), a.update()
                    }

                    if (!t)return null;
                    e ? "function" == typeof e && (e = {onLoad: e}) : e = {};
                    var s = t, o = r;
                    if (i)if ("string" != typeof t || /^.*</.test(t)) {
                        if ("undefined" != typeof File && t instanceof File) {
                            var a = new FileReader;
                            return a.onload = function () {
                                n(a.result)
                            }, a.readAsText(t)
                        }
                    } else {
                        if (s = document.getElementById(t), !s)return et.request("get", t, n);
                        t = null
                    }
                    if ("string" == typeof t && (s = (new DOMParser).parseFromString(t, "image/svg+xml")), !s.nodeName)throw new Error("Unsupported SVG source: " + t);
                    var l, u = s.nodeName.toLowerCase(), h = k[u], c = s.getAttribute && s.getAttribute("data-paper-data"), d = o.settings, p = d.applyMatrix;
                    if (d.applyMatrix = !1, l = h && h(s, u, e, i) || null, d.applyMatrix = p, l) {
                        "#document" === u || l instanceof T || (l = m(l, s, i));
                        var f = e.onImport;
                        f && (l = f(s, l, e) || l), e.expandShapes && l instanceof C && (l.remove(), l = l.toPath()), c && (l._data = JSON.parse(c))
                    }
                    return i && (O = {}, p && l && l.matrix.apply(!0, !0)), l
                }

                var k = {
                    "#document": function (t, e, i, n) {
                        for (var r = t.childNodes, s = 0, o = r.length; o > s; s++) {
                            var a = r[s];
                            if (1 === a.nodeType) {
                                var l = a.nextSibling;
                                document.body.appendChild(a);
                                var u = S(a, i, n);
                                return l ? t.insertBefore(a, l) : t.appendChild(a), u
                            }
                        }
                    },
                    g: a,
                    svg: a,
                    clippath: a,
                    polygon: l,
                    polyline: l,
                    path: u,
                    lineargradient: h,
                    radialgradient: h,
                    image: function (t) {
                        var n = new P(e(t, "href", !0));
                        return n.on("load", function () {
                            var e = s(t, "width", "height");
                            this.setSize(e);
                            var n = this._matrix._transformPoint(i(t, "x", "y").add(e.divide(2)));
                            this.translate(n)
                        }), n
                    },
                    symbol: function (t, e, i, n) {
                        return new b(a(t, e, i, n), !0)
                    },
                    defs: a,
                    use: function (t) {
                        var n = (e(t, "href", !0) || "").substring(1), r = O[n], s = i(t, "x", "y");
                        return r ? r instanceof b ? r.place(s) : r.clone().translate(s) : null
                    },
                    circle: function (t) {
                        return new C.Circle(i(t, "cx", "cy"), e(t, "r"))
                    },
                    ellipse: function (t) {
                        return new C.Ellipse({center: i(t, "cx", "cy"), radius: s(t, "rx", "ry")})
                    },
                    rect: function (t) {
                        var e = i(t, "x", "y"), n = s(t, "width", "height"), r = s(t, "rx", "ry");
                        return new C.Rectangle(new g(e, n), r)
                    },
                    line: function (t) {
                        return new z.Line(i(t, "x1", "y1"), i(t, "x2", "y2"))
                    },
                    text: function (t) {
                        var e = new $(i(t, "x", "y").add(i(t, "dx", "dy")));
                        return e.setContent(t.textContent.trim() || ""), e
                    }
                }, A = n.each(rt, function (t) {
                    this[t.attribute] = function (e, i) {
                        if (e[t.set](o(i, t.type, t.fromSVG)), "color" === t.type && e instanceof C) {
                            var n = e[t.get]();
                            n && n.transform((new v).translate(e.getPosition(!0).negate()))
                        }
                    }
                }, {
                    id: function (t, e) {
                        O[e] = t, t.setName && t.setName(e)
                    },
                    "clip-path": function (t, e) {
                        var i = y(e);
                        if (i) {
                            if (i = i.clone(), i.setClipMask(!0), !(t instanceof T))return new T(i, t);
                            t.insertChild(0, i)
                        }
                    },
                    gradientTransform: d,
                    transform: d,
                    "fill-opacity": f,
                    "stroke-opacity": f,
                    visibility: function (t, e) {
                        t.setVisible("visible" === e)
                    },
                    display: function (t, e) {
                        t.setVisible(null !== e)
                    },
                    "stop-color": function (t, e) {
                        t.setColor && t.setColor(e)
                    },
                    "stop-opacity": function (t, e) {
                        t._color && t._color.setAlpha(parseFloat(e))
                    },
                    offset: function (t, e) {
                        var i = e.match(/(.*)%$/);
                        t.setRampPoint(i ? i[1] / 100 : parseFloat(e))
                    },
                    viewBox: function (t, e, i, n, r) {
                        var a = new g(o(e, "array")), l = s(n, "width", "height", !0);
                        if (t instanceof T) {
                            var u = l ? a.getSize().divide(l) : 1, h = (new v).translate(a.getPoint()).scale(u);
                            t.transform(h.inverted())
                        } else if (t instanceof b) {
                            l && a.setSize(l);
                            var c = "visible" != _(n, "overflow", r), d = t._definition;
                            c && !a.contains(d.getBounds()) && (c = new C.Rectangle(a).transform(d._matrix), c.setClipMask(!0), d.addChild(c))
                        }
                    }
                }), O = {};
                x.inject({
                    importSVG: function (t, e) {
                        return this.addChild(S(t, e, !0))
                    }
                }), w.inject({
                    importSVG: function (t, e) {
                        return this.activate(), S(t, e, !0)
                    }
                })
            }, n.exports.PaperScript = function () {
                function t(t, e, i) {
                    var n = m[e];
                    if (t && t[n]) {
                        var r = t[n](i);
                        return "!=" === e ? !r : r
                    }
                    switch (e) {
                        case"+":
                            return t + i;
                        case"-":
                            return t - i;
                        case"*":
                            return t * i;
                        case"/":
                            return t / i;
                        case"%":
                            return t % i;
                        case"==":
                            return t == i;
                        case"!=":
                            return t != i
                    }
                }

                function i(t, e) {
                    var i = v[t];
                    if (i && e && e[i])return e[i]();
                    switch (t) {
                        case"+":
                            return +e;
                        case"-":
                            return -e
                    }
                }

                function s(t, e) {
                    return _.acorn.parse(t, e)
                }

                function a(t, e, i) {
                    function n(t) {
                        for (var e = 0, i = h.length; i > e; e++) {
                            var n = h[e];
                            if (n[0] >= t)break;
                            t += n[1]
                        }
                        return t
                    }

                    function o(e) {
                        return t.substring(n(e.range[0]), n(e.range[1]))
                    }

                    function a(e, i) {
                        return t.substring(n(e.range[1]), n(i.range[0]))
                    }

                    function l(e, i) {
                        for (var r = n(e.range[0]), s = n(e.range[1]), o = 0, a = h.length - 1; a >= 0; a--)if (r > h[a][0]) {
                            o = a + 1;
                            break
                        }
                        h.splice(o, 0, [r, i.length - s + r]), t = t.substring(0, r) + i + t.substring(s)
                    }

                    function u(t, e) {
                        if (t) {
                            for (var i in t)if ("range" !== i && "loc" !== i) {
                                var n = t[i];
                                if (Array.isArray(n))for (var r = 0, s = n.length; s > r; r++)u(n[r], t); else n && "object" == typeof n && u(n, t)
                            }
                            switch (t.type) {
                                case"UnaryExpression":
                                    if (t.operator in v && "Literal" !== t.argument.type) {
                                        var h = o(t.argument);
                                        l(t, '$__("' + t.operator + '", ' + h + ")")
                                    }
                                    break;
                                case"BinaryExpression":
                                    if (t.operator in m && "Literal" !== t.left.type) {
                                        var c = o(t.left), d = o(t.right), p = a(t.left, t.right), f = t.operator;
                                        l(t, "__$__(" + c + "," + p.replace(new RegExp("\\" + f), '"' + f + '"') + ", " + d + ")")
                                    }
                                    break;
                                case"UpdateExpression":
                                case"AssignmentExpression":
                                    var g = e && e.type;
                                    if (!("ForStatement" === g || "BinaryExpression" === g && /^[=!<>]/.test(e.operator) || "MemberExpression" === g && e.computed))if ("UpdateExpression" === t.type) {
                                        var h = o(t.argument), _ = h + " = __$__(" + h + ', "' + t.operator[0] + '", 1)';
                                        t.prefix || "AssignmentExpression" !== g && "VariableDeclarator" !== g || (_ = h + "; " + _), l(t, _)
                                    } else if (/^.=$/.test(t.operator) && "Literal" !== t.left.type) {
                                        var c = o(t.left), d = o(t.right);
                                        l(t, c + " = __$__(" + c + ', "' + t.operator[0] + '", ' + d + ")")
                                    }
                            }
                        }
                    }

                    if (!t)return "";
                    i = i || {}, e = e || "";
                    var h = [], c = null, d = r.browser, p = d.versionNumber, f = /\r\n|\n|\r/gm;
                    if (d.chrome && p >= 30 || d.webkit && p >= 537.76 || d.firefox && p >= 23) {
                        var g = 0;
                        if (0 === window.location.href.indexOf(e)) {
                            var _ = document.getElementsByTagName("html")[0].innerHTML;
                            g = _.substr(0, _.indexOf(t) + 1).match(f).length + 1
                        }
                        var y = ["AAAA"];
                        y.length = (t.match(f) || []).length + 1 + g, c = {
                            version: 3,
                            file: e,
                            names: [],
                            mappings: y.join(";AACA"),
                            sourceRoot: "",
                            sources: [e]
                        };
                        var w = i.source || !e && t;
                        w && (c.sourcesContent = [w])
                    }
                    return u(s(t, {ranges: !0})), c && (t = new Array(g + 1).join("\n") + t + "\n//# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + "\n//# sourceURL=" + (e || "paperscript")), t
                }

                function l(e, s, o, l) {
                    function u(t, i) {
                        for (var n in t)!i && /^_/.test(n) || !new RegExp("([\\b\\s\\W]|^)" + n.replace(/\$/g, "\\$") + "\\b").test(e) || (_.push(n), m.push(t[n]))
                    }

                    r = s;
                    var h, d = s.getView(), p = /\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(e) ? new tt : null, f = p ? p._events : [], g = ["onFrame", "onResize"].concat(f), _ = [], m = [];
                    e = a(e, o, l), u({
                        __$__: t,
                        $__: i,
                        paper: s,
                        view: d,
                        tool: p
                    }, !0), u(s), g = n.each(g, function (t) {
                        new RegExp("\\s+" + t + "\\b").test(e) && (_.push(t), this.push(t + ": " + t))
                    }, []).join(", "), g && (e += "\nreturn { " + g + " };");
                    var v = r.browser;
                    if (v.chrome || v.firefox) {
                        var y = document.createElement("script"), w = document.head || document.getElementsByTagName("head")[0];
                        v.firefox && (e = "\n" + e), y.appendChild(document.createTextNode("paper._execute = function(" + _ + ") {" + e + "\n}")), w.appendChild(y), h = r._execute, delete r._execute, w.removeChild(y)
                    } else h = Function(_, e);
                    var b = h.apply(s, m) || {};
                    n.each(f, function (t) {
                        var e = b[t];
                        e && (p[t] = e)
                    }), d && (b.onResize && d.setOnResize(b.onResize), d.emit("resize", {
                        size: d.size,
                        delta: new c
                    }), b.onFrame && d.setOnFrame(b.onFrame), d.update())
                }

                function u(t) {
                    if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== o.getAttribute(t, "ignore")) {
                        var e = o.getAttribute(t, "canvas"), i = document.getElementById(e), n = t.src, r = "data-paper-scope";
                        if (!i)throw new Error('Unable to find canvas with id "' + e + '"');
                        var s = o.get(i.getAttribute(r)) || (new o).setup(i);
                        return i.setAttribute(r, s._id), n ? et.request("get", n, function (t) {
                                l(t, s, n)
                            }) : l(t.innerHTML, s, t.baseURI), t.setAttribute("data-paper-ignore", "true"), s
                    }
                }

                function h() {
                    n.each(document.getElementsByTagName("script"), u)
                }

                function d(t) {
                    return t ? u(t) : h();

                }

                var f, g, _ = this;
                !function (t, i) {
                    return "object" == typeof f && "object" == typeof e ? i(f) : "function" == typeof g && g.amd ? g(["exports"], i) : void i(t.acorn || (t.acorn = {}))
                }(this, function (t) {
                    "use strict";
                    function e(t) {
                        ct = t || {};
                        for (var e in gt)Object.prototype.hasOwnProperty.call(ct, e) || (ct[e] = gt[e]);
                        ft = ct.sourceFile || null
                    }

                    function i(t, e) {
                        var i = _t(dt, t);
                        e += " (" + i.line + ":" + i.column + ")";
                        var n = new SyntaxError(e);
                        throw n.pos = t, n.loc = i, n.raisedAt = mt, n
                    }

                    function n(t) {
                        function e(t) {
                            if (1 == t.length)return i += "return str === " + JSON.stringify(t[0]) + ";";
                            i += "switch(str){";
                            for (var e = 0; e < t.length; ++e)i += "case " + JSON.stringify(t[e]) + ":";
                            i += "return true}return false;"
                        }

                        t = t.split(" ");
                        var i = "", n = [];
                        t:for (var r = 0; r < t.length; ++r) {
                            for (var s = 0; s < n.length; ++s)if (n[s][0].length == t[r].length) {
                                n[s].push(t[r]);
                                continue t
                            }
                            n.push([t[r]])
                        }
                        if (n.length > 3) {
                            n.sort(function (t, e) {
                                return e.length - t.length
                            }), i += "switch(str.length){";
                            for (var r = 0; r < n.length; ++r) {
                                var o = n[r];
                                i += "case " + o[0].length + ":", e(o)
                            }
                            i += "}"
                        } else e(t);
                        return new Function("str", i)
                    }

                    function r() {
                        this.line = Ct, this.column = mt - kt
                    }

                    function s() {
                        Ct = 1, mt = kt = 0, St = !0, u()
                    }

                    function o(t, e) {
                        yt = mt, ct.locations && (bt = new r), xt = t, u(), Tt = e, St = t.beforeExpr
                    }

                    function a() {
                        var t = ct.onComment && ct.locations && new r, e = mt, n = dt.indexOf("*/", mt += 2);
                        if (-1 === n && i(mt - 2, "Unterminated comment"), mt = n + 2, ct.locations) {
                            Ze.lastIndex = e;
                            for (var s; (s = Ze.exec(dt)) && s.index < mt;)++Ct, kt = s.index + s[0].length
                        }
                        ct.onComment && ct.onComment(!0, dt.slice(e + 2, n), e, mt, t, ct.locations && new r)
                    }

                    function l() {
                        for (var t = mt, e = ct.onComment && ct.locations && new r, i = dt.charCodeAt(mt += 2); pt > mt && 10 !== i && 13 !== i && 8232 !== i && 8233 !== i;)++mt, i = dt.charCodeAt(mt);
                        ct.onComment && ct.onComment(!1, dt.slice(t + 2, mt), t, mt, e, ct.locations && new r)
                    }

                    function u() {
                        for (; pt > mt;) {
                            var t = dt.charCodeAt(mt);
                            if (32 === t) ++mt; else if (13 === t) {
                                ++mt;
                                var e = dt.charCodeAt(mt);
                                10 === e && ++mt, ct.locations && (++Ct, kt = mt)
                            } else if (10 === t || 8232 === t || 8233 === t) ++mt, ct.locations && (++Ct, kt = mt); else if (t > 8 && 14 > t) ++mt; else if (47 === t) {
                                var e = dt.charCodeAt(mt + 1);
                                if (42 === e) a(); else {
                                    if (47 !== e)break;
                                    l()
                                }
                            } else if (160 === t) ++mt; else {
                                if (!(t >= 5760 && We.test(String.fromCharCode(t))))break;
                                ++mt
                            }
                        }
                    }

                    function h() {
                        var t = dt.charCodeAt(mt + 1);
                        return t >= 48 && 57 >= t ? S(!0) : (++mt, o(we))
                    }

                    function c() {
                        var t = dt.charCodeAt(mt + 1);
                        return St ? (++mt, b()) : 61 === t ? w(Se, 2) : w(xe, 1)
                    }

                    function d() {
                        var t = dt.charCodeAt(mt + 1);
                        return 61 === t ? w(Se, 2) : w(Le, 1)
                    }

                    function p(t) {
                        var e = dt.charCodeAt(mt + 1);
                        return e === t ? w(124 === t ? Ae : Oe, 2) : 61 === e ? w(Se, 2) : w(124 === t ? Ee : De, 1)
                    }

                    function f() {
                        var t = dt.charCodeAt(mt + 1);
                        return 61 === t ? w(Se, 2) : w(Me, 1)
                    }

                    function g(t) {
                        var e = dt.charCodeAt(mt + 1);
                        return e === t ? 45 == e && 62 == dt.charCodeAt(mt + 2) && Ge.test(dt.slice(At, mt)) ? (mt += 3, l(), u(), y()) : w(ke, 2) : 61 === e ? w(Se, 2) : w(Ce, 1)
                    }

                    function _(t) {
                        var e = dt.charCodeAt(mt + 1), i = 1;
                        return e === t ? (i = 62 === t && 62 === dt.charCodeAt(mt + 2) ? 3 : 2, 61 === dt.charCodeAt(mt + i) ? w(Se, i + 1) : w(ze, i)) : 33 == e && 60 == t && 45 == dt.charCodeAt(mt + 2) && 45 == dt.charCodeAt(mt + 3) ? (mt += 4, l(), u(), y()) : (61 === e && (i = 61 === dt.charCodeAt(mt + 2) ? 3 : 2), w(je, i))
                    }

                    function m(t) {
                        var e = dt.charCodeAt(mt + 1);
                        return 61 === e ? w(Re, 61 === dt.charCodeAt(mt + 2) ? 3 : 2) : w(61 === t ? Te : Pe, 1)
                    }

                    function v(t) {
                        switch (t) {
                            case 46:
                                return h();
                            case 40:
                                return ++mt, o(ge);
                            case 41:
                                return ++mt, o(_e);
                            case 59:
                                return ++mt, o(ve);
                            case 44:
                                return ++mt, o(me);
                            case 91:
                                return ++mt, o(ce);
                            case 93:
                                return ++mt, o(de);
                            case 123:
                                return ++mt, o(pe);
                            case 125:
                                return ++mt, o(fe);
                            case 58:
                                return ++mt, o(ye);
                            case 63:
                                return ++mt, o(be);
                            case 48:
                                var e = dt.charCodeAt(mt + 1);
                                if (120 === e || 88 === e)return T();
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                return S(!1);
                            case 34:
                            case 39:
                                return C(t);
                            case 47:
                                return c(t);
                            case 37:
                            case 42:
                                return d();
                            case 124:
                            case 38:
                                return p(t);
                            case 94:
                                return f();
                            case 43:
                            case 45:
                                return g(t);
                            case 60:
                            case 62:
                                return _(t);
                            case 61:
                            case 33:
                                return m(t);
                            case 126:
                                return w(Pe, 1)
                        }
                        return !1
                    }

                    function y(t) {
                        if (t ? mt = vt + 1 : vt = mt, ct.locations && (wt = new r), t)return b();
                        if (mt >= pt)return o(It);
                        var e = dt.charCodeAt(mt);
                        if (Qe(e) || 92 === e)return A();
                        var n = v(e);
                        if (n === !1) {
                            var s = String.fromCharCode(e);
                            if ("\\" === s || Xe.test(s))return A();
                            i(mt, "Unexpected character '" + s + "'")
                        }
                        return n
                    }

                    function w(t, e) {
                        var i = dt.slice(mt, mt + e);
                        mt += e, o(t, i)
                    }

                    function b() {
                        for (var t, e, n = "", r = mt; ;) {
                            mt >= pt && i(r, "Unterminated regular expression");
                            var s = dt.charAt(mt);
                            if (Ge.test(s) && i(r, "Unterminated regular expression"), t) t = !1; else {
                                if ("[" === s) e = !0; else if ("]" === s && e) e = !1; else if ("/" === s && !e)break;
                                t = "\\" === s
                            }
                            ++mt
                        }
                        var n = dt.slice(r, mt);
                        ++mt;
                        var a = P();
                        return a && !/^[gmsiy]*$/.test(a) && i(r, "Invalid regexp flag"), o(zt, new RegExp(n, a))
                    }

                    function x(t, e) {
                        for (var i = mt, n = 0, r = 0, s = null == e ? 1 / 0 : e; s > r; ++r) {
                            var o, a = dt.charCodeAt(mt);
                            if (o = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && 57 >= a ? a - 48 : 1 / 0, o >= t)break;
                            ++mt, n = n * t + o
                        }
                        return mt === i || null != e && mt - i !== e ? null : n
                    }

                    function T() {
                        mt += 2;
                        var t = x(16);
                        return null == t && i(vt + 2, "Expected hexadecimal number"), Qe(dt.charCodeAt(mt)) && i(mt, "Identifier directly after number"), o(jt, t)
                    }

                    function S(t) {
                        var e = mt, n = !1, r = 48 === dt.charCodeAt(mt);
                        t || null !== x(10) || i(e, "Invalid number"), 46 === dt.charCodeAt(mt) && (++mt, x(10), n = !0);
                        var s = dt.charCodeAt(mt);
                        (69 === s || 101 === s) && (s = dt.charCodeAt(++mt), (43 === s || 45 === s) && ++mt, null === x(10) && i(e, "Invalid number"), n = !0), Qe(dt.charCodeAt(mt)) && i(mt, "Identifier directly after number");
                        var a, l = dt.slice(e, mt);
                        return n ? a = parseFloat(l) : r && 1 !== l.length ? /[89]/.test(l) || Dt ? i(e, "Invalid number") : a = parseInt(l, 8) : a = parseInt(l, 10), o(jt, a)
                    }

                    function C(t) {
                        mt++;
                        for (var e = ""; ;) {
                            mt >= pt && i(vt, "Unterminated string constant");
                            var n = dt.charCodeAt(mt);
                            if (n === t)return ++mt, o(Lt, e);
                            if (92 === n) {
                                n = dt.charCodeAt(++mt);
                                var r = /^[0-7]+/.exec(dt.slice(mt, mt + 3));
                                for (r && (r = r[0]); r && parseInt(r, 8) > 255;)r = r.slice(0, r.length - 1);
                                if ("0" === r && (r = null), ++mt, r) Dt && i(mt - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(r, 8)), mt += r.length - 1; else switch (n) {
                                    case 110:
                                        e += "\n";
                                        break;
                                    case 114:
                                        e += "\r";
                                        break;
                                    case 120:
                                        e += String.fromCharCode(k(2));
                                        break;
                                    case 117:
                                        e += String.fromCharCode(k(4));
                                        break;
                                    case 85:
                                        e += String.fromCharCode(k(8));
                                        break;
                                    case 116:
                                        e += "	";
                                        break;
                                    case 98:
                                        e += "\b";
                                        break;
                                    case 118:
                                        e += "";
                                        break;
                                    case 102:
                                        e += "\f";
                                        break;
                                    case 48:
                                        e += "\x00";
                                        break;
                                    case 13:
                                        10 === dt.charCodeAt(mt) && ++mt;
                                    case 10:
                                        ct.locations && (kt = mt, ++Ct);
                                        break;
                                    default:
                                        e += String.fromCharCode(n)
                                }
                            } else(13 === n || 10 === n || 8232 === n || 8233 === n) && i(vt, "Unterminated string constant"), e += String.fromCharCode(n), ++mt
                        }
                    }

                    function k(t) {
                        var e = x(16, t);
                        return null === e && i(vt, "Bad character escape sequence"), e
                    }

                    function P() {
                        Ie = !1;
                        for (var t, e = !0, n = mt; ;) {
                            var r = dt.charCodeAt(mt);
                            if (Je(r)) Ie && (t += dt.charAt(mt)), ++mt; else {
                                if (92 !== r)break;
                                Ie || (t = dt.slice(n, mt)), Ie = !0, 117 != dt.charCodeAt(++mt) && i(mt, "Expecting Unicode escape sequence \\uXXXX"), ++mt;
                                var s = k(4), o = String.fromCharCode(s);
                                o || i(mt - 1, "Invalid Unicode escape"), (e ? Qe(s) : Je(s)) || i(mt - 4, "Invalid Unicode escape"), t += o
                            }
                            e = !1
                        }
                        return Ie ? t : dt.slice(n, mt)
                    }

                    function A() {
                        var t = P(), e = Nt;
                        return Ie || (He(t) ? e = he[t] : (ct.forbidReserved && (3 === ct.ecmaVersion ? Fe : $e)(t) || Dt && Be(t)) && i(vt, "The keyword '" + t + "' is reserved")), o(e, t)
                    }

                    function O() {
                        Pt = vt, At = yt, Ot = bt, y()
                    }

                    function E(t) {
                        if (Dt = t, mt = At, ct.locations)for (; kt > mt;)kt = dt.lastIndexOf("\n", kt - 2) + 1, --Ct;
                        u(), y()
                    }

                    function M() {
                        this.type = null, this.start = vt, this.end = null
                    }

                    function D() {
                        this.start = wt, this.end = null, null !== ft && (this.source = ft)
                    }

                    function R() {
                        var t = new M;
                        return ct.locations && (t.loc = new D), ct.ranges && (t.range = [vt, 0]), t
                    }

                    function j(t) {
                        var e = new M;
                        return e.start = t.start, ct.locations && (e.loc = new D, e.loc.start = t.loc.start), ct.ranges && (e.range = [t.range[0], 0]), e
                    }

                    function z(t, e) {
                        return t.type = e, t.end = At, ct.locations && (t.loc.end = Ot), ct.ranges && (t.range[1] = At), t
                    }

                    function L(t) {
                        return ct.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value
                    }

                    function N(t) {
                        return xt === t ? (O(), !0) : void 0
                    }

                    function I() {
                        return !ct.strictSemicolons && (xt === It || xt === fe || Ge.test(dt.slice(At, vt)))
                    }

                    function F() {
                        N(ve) || I() || B()
                    }

                    function $(t) {
                        xt === t ? O() : B()
                    }

                    function B() {
                        i(vt, "Unexpected token")
                    }

                    function q(t) {
                        "Identifier" !== t.type && "MemberExpression" !== t.type && i(t.start, "Assigning to rvalue"), Dt && "Identifier" === t.type && qe(t.name) && i(t.start, "Assigning to " + t.name + " in strict mode")
                    }

                    function H(t) {
                        Pt = At = mt, ct.locations && (Ot = new r), Et = Dt = null, Mt = [], y();
                        var e = t || R(), i = !0;
                        for (t || (e.body = []); xt !== It;) {
                            var n = W();
                            e.body.push(n), i && L(n) && E(!0), i = !1
                        }
                        return z(e, "Program")
                    }

                    function W() {
                        (xt === xe || xt === Se && "/=" == Tt) && y(!0);
                        var t = xt, e = R();
                        switch (t) {
                            case Ft:
                            case qt:
                                O();
                                var n = t === Ft;
                                N(ve) || I() ? e.label = null : xt !== Nt ? B() : (e.label = ht(), F());
                                for (var r = 0; r < Mt.length; ++r) {
                                    var s = Mt[r];
                                    if (null == e.label || s.name === e.label.name) {
                                        if (null != s.kind && (n || "loop" === s.kind))break;
                                        if (e.label && n)break
                                    }
                                }
                                return r === Mt.length && i(e.start, "Unsyntactic " + t.keyword), z(e, n ? "BreakStatement" : "ContinueStatement");
                            case Ht:
                                return O(), F(), z(e, "DebuggerStatement");
                            case Vt:
                                return O(), Mt.push(Ke), e.body = W(), Mt.pop(), $(ie), e.test = V(), F(), z(e, "DoWhileStatement");
                            case Yt:
                                if (O(), Mt.push(Ke), $(ge), xt === ve)return X(e, null);
                                if (xt === ee) {
                                    var o = R();
                                    return O(), G(o, !0), z(o, "VariableDeclaration"), 1 === o.declarations.length && N(ue) ? Y(e, o) : X(e, o)
                                }
                                var o = Z(!1, !0);
                                return N(ue) ? (q(o), Y(e, o)) : X(e, o);
                            case Gt:
                                return O(), lt(e, !0);
                            case Zt:
                                return O(), e.test = V(), e.consequent = W(), e.alternate = N(Ut) ? W() : null, z(e, "IfStatement");
                            case Qt:
                                return Et || i(vt, "'return' outside of function"), O(), N(ve) || I() ? e.argument = null : (e.argument = Z(), F()), z(e, "ReturnStatement");
                            case Jt:
                                O(), e.discriminant = V(), e.cases = [], $(pe), Mt.push(ti);
                                for (var a, l; xt != fe;)if (xt === $t || xt === Wt) {
                                    var u = xt === $t;
                                    a && z(a, "SwitchCase"), e.cases.push(a = R()), a.consequent = [], O(), u ? a.test = Z() : (l && i(Pt, "Multiple default clauses"), l = !0, a.test = null), $(ye)
                                } else a || B(), a.consequent.push(W());
                                return a && z(a, "SwitchCase"), O(), Mt.pop(), z(e, "SwitchStatement");
                            case Kt:
                                return O(), Ge.test(dt.slice(At, vt)) && i(At, "Illegal newline after throw"), e.argument = Z(), F(), z(e, "ThrowStatement");
                            case te:
                                if (O(), e.block = U(), e.handler = null, xt === Bt) {
                                    var h = R();
                                    O(), $(ge), h.param = ht(), Dt && qe(h.param.name) && i(h.param.start, "Binding " + h.param.name + " in strict mode"), $(_e), h.guard = null, h.body = U(), e.handler = z(h, "CatchClause")
                                }
                                return e.guardedHandlers = Rt, e.finalizer = N(Xt) ? U() : null, e.handler || e.finalizer || i(e.start, "Missing catch or finally clause"), z(e, "TryStatement");
                            case ee:
                                return O(), G(e), F(), z(e, "VariableDeclaration");
                            case ie:
                                return O(), e.test = V(), Mt.push(Ke), e.body = W(), Mt.pop(), z(e, "WhileStatement");
                            case ne:
                                return Dt && i(vt, "'with' in strict mode"), O(), e.object = V(), e.body = W(), z(e, "WithStatement");
                            case pe:
                                return U();
                            case ve:
                                return O(), z(e, "EmptyStatement");
                            default:
                                var c = Tt, d = Z();
                                if (t === Nt && "Identifier" === d.type && N(ye)) {
                                    for (var r = 0; r < Mt.length; ++r)Mt[r].name === c && i(d.start, "Label '" + c + "' is already declared");
                                    var p = xt.isLoop ? "loop" : xt === Jt ? "switch" : null;
                                    return Mt.push({
                                        name: c,
                                        kind: p
                                    }), e.body = W(), Mt.pop(), e.label = d, z(e, "LabeledStatement")
                                }
                                return e.expression = d, F(), z(e, "ExpressionStatement")
                        }
                    }

                    function V() {
                        $(ge);
                        var t = Z();
                        return $(_e), t
                    }

                    function U(t) {
                        var e, i = R(), n = !0, r = !1;
                        for (i.body = [], $(pe); !N(fe);) {
                            var s = W();
                            i.body.push(s), n && t && L(s) && (e = r, E(r = !0)), n = !1
                        }
                        return r && !e && E(!1), z(i, "BlockStatement")
                    }

                    function X(t, e) {
                        return t.init = e, $(ve), t.test = xt === ve ? null : Z(), $(ve), t.update = xt === _e ? null : Z(), $(_e), t.body = W(), Mt.pop(), z(t, "ForStatement")
                    }

                    function Y(t, e) {
                        return t.left = e, t.right = Z(), $(_e), t.body = W(), Mt.pop(), z(t, "ForInStatement")
                    }

                    function G(t, e) {
                        for (t.declarations = [], t.kind = "var"; ;) {
                            var n = R();
                            if (n.id = ht(), Dt && qe(n.id.name) && i(n.id.start, "Binding " + n.id.name + " in strict mode"), n.init = N(Te) ? Z(!0, e) : null, t.declarations.push(z(n, "VariableDeclarator")), !N(me))break
                        }
                        return t
                    }

                    function Z(t, e) {
                        var i = Q(e);
                        if (!t && xt === me) {
                            var n = j(i);
                            for (n.expressions = [i]; N(me);)n.expressions.push(Q(e));
                            return z(n, "SequenceExpression")
                        }
                        return i
                    }

                    function Q(t) {
                        var e = J(t);
                        if (xt.isAssign) {
                            var i = j(e);
                            return i.operator = Tt, i.left = e, O(), i.right = Q(t), q(e), z(i, "AssignmentExpression")
                        }
                        return e
                    }

                    function J(t) {
                        var e = K(t);
                        if (N(be)) {
                            var i = j(e);
                            return i.test = e, i.consequent = Z(!0), $(ye), i.alternate = Z(!0, t), z(i, "ConditionalExpression")
                        }
                        return e
                    }

                    function K(t) {
                        return tt(et(), -1, t)
                    }

                    function tt(t, e, i) {
                        var n = xt.binop;
                        if (null != n && (!i || xt !== ue) && n > e) {
                            var r = j(t);
                            r.left = t, r.operator = Tt, O(), r.right = tt(et(), n, i);
                            var s = z(r, /&&|\|\|/.test(r.operator) ? "LogicalExpression" : "BinaryExpression");
                            return tt(s, e, i)
                        }
                        return t
                    }

                    function et() {
                        if (xt.prefix) {
                            var t = R(), e = xt.isUpdate;
                            return t.operator = Tt, t.prefix = !0, St = !0, O(), t.argument = et(), e ? q(t.argument) : Dt && "delete" === t.operator && "Identifier" === t.argument.type && i(t.start, "Deleting local variable in strict mode"), z(t, e ? "UpdateExpression" : "UnaryExpression")
                        }
                        for (var n = it(); xt.postfix && !I();) {
                            var t = j(n);
                            t.operator = Tt, t.prefix = !1, t.argument = n, q(n), O(), n = z(t, "UpdateExpression")
                        }
                        return n
                    }

                    function it() {
                        return nt(rt())
                    }

                    function nt(t, e) {
                        if (N(we)) {
                            var i = j(t);
                            return i.object = t, i.property = ht(!0), i.computed = !1, nt(z(i, "MemberExpression"), e)
                        }
                        if (N(ce)) {
                            var i = j(t);
                            return i.object = t, i.property = Z(), i.computed = !0, $(de), nt(z(i, "MemberExpression"), e)
                        }
                        if (!e && N(ge)) {
                            var i = j(t);
                            return i.callee = t, i.arguments = ut(_e, !1), nt(z(i, "CallExpression"), e)
                        }
                        return t
                    }

                    function rt() {
                        switch (xt) {
                            case se:
                                var t = R();
                                return O(), z(t, "ThisExpression");
                            case Nt:
                                return ht();
                            case jt:
                            case Lt:
                            case zt:
                                var t = R();
                                return t.value = Tt, t.raw = dt.slice(vt, yt), O(), z(t, "Literal");
                            case oe:
                            case ae:
                            case le:
                                var t = R();
                                return t.value = xt.atomValue, t.raw = xt.keyword, O(), z(t, "Literal");
                            case ge:
                                var e = wt, i = vt;
                                O();
                                var n = Z();
                                return n.start = i, n.end = yt, ct.locations && (n.loc.start = e, n.loc.end = bt), ct.ranges && (n.range = [i, yt]), $(_e), n;
                            case ce:
                                var t = R();
                                return O(), t.elements = ut(de, !0, !0), z(t, "ArrayExpression");
                            case pe:
                                return ot();
                            case Gt:
                                var t = R();
                                return O(), lt(t, !1);
                            case re:
                                return st();
                            default:
                                B()
                        }
                    }

                    function st() {
                        var t = R();
                        return O(), t.callee = nt(rt(), !0), t.arguments = N(ge) ? ut(_e, !1) : Rt, z(t, "NewExpression")
                    }

                    function ot() {
                        var t = R(), e = !0, n = !1;
                        for (t.properties = [], O(); !N(fe);) {
                            if (e) e = !1; else if ($(me), ct.allowTrailingCommas && N(fe))break;
                            var r, s = {key: at()}, o = !1;
                            if (N(ye) ? (s.value = Z(!0), r = s.kind = "init") : ct.ecmaVersion >= 5 && "Identifier" === s.key.type && ("get" === s.key.name || "set" === s.key.name) ? (o = n = !0, r = s.kind = s.key.name, s.key = at(), xt !== ge && B(), s.value = lt(R(), !1)) : B(), "Identifier" === s.key.type && (Dt || n))for (var a = 0; a < t.properties.length; ++a) {
                                var l = t.properties[a];
                                if (l.key.name === s.key.name) {
                                    var u = r == l.kind || o && "init" === l.kind || "init" === r && ("get" === l.kind || "set" === l.kind);
                                    u && !Dt && "init" === r && "init" === l.kind && (u = !1), u && i(s.key.start, "Redefinition of property")
                                }
                            }
                            t.properties.push(s)
                        }
                        return z(t, "ObjectExpression")
                    }

                    function at() {
                        return xt === jt || xt === Lt ? rt() : ht(!0)
                    }

                    function lt(t, e) {
                        xt === Nt ? t.id = ht() : e ? B() : t.id = null, t.params = [];
                        var n = !0;
                        for ($(ge); !N(_e);)n ? n = !1 : $(me), t.params.push(ht());
                        var r = Et, s = Mt;
                        if (Et = !0, Mt = [], t.body = U(!0), Et = r, Mt = s, Dt || t.body.body.length && L(t.body.body[0]))for (var o = t.id ? -1 : 0; o < t.params.length; ++o) {
                            var a = 0 > o ? t.id : t.params[o];
                            if ((Be(a.name) || qe(a.name)) && i(a.start, "Defining '" + a.name + "' in strict mode"), o >= 0)for (var l = 0; o > l; ++l)a.name === t.params[l].name && i(a.start, "Argument name clash in strict mode")
                        }
                        return z(t, e ? "FunctionDeclaration" : "FunctionExpression")
                    }

                    function ut(t, e, i) {
                        for (var n = [], r = !0; !N(t);) {
                            if (r) r = !1; else if ($(me), e && ct.allowTrailingCommas && N(t))break;
                            n.push(i && xt === me ? null : Z(!0))
                        }
                        return n
                    }

                    function ht(t) {
                        var e = R();
                        return e.name = xt === Nt ? Tt : t && !ct.forbidReserved && xt.keyword || B(), St = !1, O(), z(e, "Identifier")
                    }

                    t.version = "0.4.0";
                    var ct, dt, pt, ft;
                    t.parse = function (t, i) {
                        return dt = String(t), pt = dt.length, e(i), s(), H(ct.program)
                    };
                    var gt = t.defaultOptions = {
                        ecmaVersion: 5,
                        strictSemicolons: !1,
                        allowTrailingCommas: !0,
                        forbidReserved: !1,
                        locations: !1,
                        onComment: null,
                        ranges: !1,
                        program: null,
                        sourceFile: null
                    }, _t = t.getLineInfo = function (t, e) {
                        for (var i = 1, n = 0; ;) {
                            Ze.lastIndex = n;
                            var r = Ze.exec(t);
                            if (!(r && r.index < e))break;
                            ++i, n = r.index + r[0].length
                        }
                        return {line: i, column: e - n}
                    };
                    t.tokenize = function (t, i) {
                        function n(t) {
                            return y(t), r.start = vt, r.end = yt, r.startLoc = wt, r.endLoc = bt, r.type = xt, r.value = Tt, r
                        }

                        dt = String(t), pt = dt.length, e(i), s();
                        var r = {};
                        return n.jumpTo = function (t, e) {
                            if (mt = t, ct.locations) {
                                Ct = 1, kt = Ze.lastIndex = 0;
                                for (var i; (i = Ze.exec(dt)) && i.index < t;)++Ct, kt = i.index + i[0].length
                            }
                            St = e, u()
                        }, n
                    };
                    var mt, vt, yt, wt, bt, xt, Tt, St, Ct, kt, Pt, At, Ot, Et, Mt, Dt, Rt = [], jt = {type: "num"}, zt = {type: "regexp"}, Lt = {type: "string"}, Nt = {type: "name"}, It = {type: "eof"}, Ft = {keyword: "break"}, $t = {
                        keyword: "case",
                        beforeExpr: !0
                    }, Bt = {keyword: "catch"}, qt = {keyword: "continue"}, Ht = {keyword: "debugger"}, Wt = {keyword: "default"}, Vt = {
                        keyword: "do",
                        isLoop: !0
                    }, Ut = {keyword: "else", beforeExpr: !0}, Xt = {keyword: "finally"}, Yt = {
                        keyword: "for",
                        isLoop: !0
                    }, Gt = {keyword: "function"}, Zt = {keyword: "if"}, Qt = {
                        keyword: "return",
                        beforeExpr: !0
                    }, Jt = {keyword: "switch"}, Kt = {
                        keyword: "throw",
                        beforeExpr: !0
                    }, te = {keyword: "try"}, ee = {keyword: "var"}, ie = {
                        keyword: "while",
                        isLoop: !0
                    }, ne = {keyword: "with"}, re = {
                        keyword: "new",
                        beforeExpr: !0
                    }, se = {keyword: "this"}, oe = {keyword: "null", atomValue: null}, ae = {
                        keyword: "true",
                        atomValue: !0
                    }, le = {keyword: "false", atomValue: !1}, ue = {
                        keyword: "in",
                        binop: 7,
                        beforeExpr: !0
                    }, he = {
                        "break": Ft,
                        "case": $t,
                        "catch": Bt,
                        "continue": qt,
                        "debugger": Ht,
                        "default": Wt,
                        "do": Vt,
                        "else": Ut,
                        "finally": Xt,
                        "for": Yt,
                        "function": Gt,
                        "if": Zt,
                        "return": Qt,
                        "switch": Jt,
                        "throw": Kt,
                        "try": te,
                        "var": ee,
                        "while": ie,
                        "with": ne,
                        "null": oe,
                        "true": ae,
                        "false": le,
                        "new": re,
                        "in": ue,
                        "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: !0},
                        "this": se,
                        "typeof": {keyword: "typeof", prefix: !0, beforeExpr: !0},
                        "void": {keyword: "void", prefix: !0, beforeExpr: !0},
                        "delete": {keyword: "delete", prefix: !0, beforeExpr: !0}
                    }, ce = {type: "[", beforeExpr: !0}, de = {type: "]"}, pe = {
                        type: "{",
                        beforeExpr: !0
                    }, fe = {type: "}"}, ge = {type: "(", beforeExpr: !0}, _e = {type: ")"}, me = {
                        type: ",",
                        beforeExpr: !0
                    }, ve = {type: ";", beforeExpr: !0}, ye = {
                        type: ":",
                        beforeExpr: !0
                    }, we = {type: "."}, be = {type: "?", beforeExpr: !0}, xe = {
                        binop: 10,
                        beforeExpr: !0
                    }, Te = {isAssign: !0, beforeExpr: !0}, Se = {isAssign: !0, beforeExpr: !0}, Ce = {
                        binop: 9,
                        prefix: !0,
                        beforeExpr: !0
                    }, ke = {postfix: !0, prefix: !0, isUpdate: !0}, Pe = {prefix: !0, beforeExpr: !0}, Ae = {
                        binop: 1,
                        beforeExpr: !0
                    }, Oe = {binop: 2, beforeExpr: !0}, Ee = {binop: 3, beforeExpr: !0}, Me = {
                        binop: 4,
                        beforeExpr: !0
                    }, De = {binop: 5, beforeExpr: !0}, Re = {binop: 6, beforeExpr: !0}, je = {
                        binop: 7,
                        beforeExpr: !0
                    }, ze = {binop: 8, beforeExpr: !0}, Le = {binop: 10, beforeExpr: !0};
                    t.tokTypes = {
                        bracketL: ce,
                        bracketR: de,
                        braceL: pe,
                        braceR: fe,
                        parenL: ge,
                        parenR: _e,
                        comma: me,
                        semi: ve,
                        colon: ye,
                        dot: we,
                        question: be,
                        slash: xe,
                        eq: Te,
                        name: Nt,
                        eof: It,
                        num: jt,
                        regexp: zt,
                        string: Lt
                    };
                    for (var Ne in he)t.tokTypes["_" + Ne] = he[Ne];
                    var Ie, Fe = n("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"), $e = n("class enum extends super const export import"), Be = n("implements interface let package private protected public static yield"), qe = n("eval arguments"), He = n("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"), We = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Ve = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Ue = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿", Xe = new RegExp("[" + Ve + "]"), Ye = new RegExp("[" + Ve + Ue + "]"), Ge = /[\n\r\u2028\u2029]/, Ze = /\r\n|[\n\r\u2028\u2029]/g, Qe = t.isIdentifierStart = function (t) {
                        return 65 > t ? 36 === t : 91 > t ? !0 : 97 > t ? 95 === t : 123 > t ? !0 : t >= 170 && Xe.test(String.fromCharCode(t))
                    }, Je = t.isIdentifierChar = function (t) {
                        return 48 > t ? 36 === t : 58 > t ? !0 : 65 > t ? !1 : 91 > t ? !0 : 97 > t ? 95 === t : 123 > t ? !0 : t >= 170 && Ye.test(String.fromCharCode(t))
                    }, Ke = {kind: "loop"}, ti = {kind: "switch"}
                });
                var m = {
                    "+": "__add",
                    "-": "__subtract",
                    "*": "__multiply",
                    "/": "__divide",
                    "%": "__modulo",
                    "==": "equals",
                    "!=": "equals"
                }, v = {
                    "-": "__negate",
                    "+": null
                }, y = n.each(["add", "subtract", "multiply", "divide", "modulo", "negate"], function (t) {
                    this["__" + t] = "#" + t
                }, {});
                return c.inject(y), p.inject(y), B.inject(y), "complete" === document.readyState ? setTimeout(h) : U.add(window, {load: h}), {
                    compile: a,
                    execute: l,
                    load: d,
                    parse: s
                }
            }.call(this), r = new (o.inject(n.exports, {
                enumerable: !0,
                Base: n,
                Numerical: h,
                Key: Q
            })), "function" == typeof define && define.amd ? define("paper", r) : "object" == typeof e && e && (e.exports = r), r
        }
    }, {}],
    4: [function (t, e, i) {
        !function (n) {
            "use strict";
            "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof i ? e.exports = n(t("./../../jquery/dist/jquery.js")) : n(jQuery)
        }(function (t) {
            "use strict";
            var e = window.Slick || {};
            e = function () {
                function e(e, n) {
                    var r, s, o, a = this;
                    if (a.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: t(e),
                            appendDots: t(e),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                            autoplay: !1,
                            autoplaySpeed: 3e3,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function (t, e) {
                                return '<button type="button" data-role="none">' + (e + 1) + "</button>"
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: !1,
                            focusOnSelect: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            pauseOnHover: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: !1,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            variableWidth: !1,
                            vertical: !1,
                            verticalSwiping: !1,
                            waitForAnimate: !0
                        }, a.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1
                        }, t.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.hidden = "hidden", a.paused = !1, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = t(e), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, r = t(e).data("slick") || {}, a.options = t.extend({}, a.defaults, r, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, s = a.options.responsive || null, s && s.length > -1) {
                        a.respondTo = a.options.respondTo || "window";
                        for (o in s)s.hasOwnProperty(o) && (a.breakpoints.push(s[o].breakpoint), a.breakpointSettings[s[o].breakpoint] = s[o].settings);
                        a.breakpoints.sort(function (t, e) {
                            return a.options.mobileFirst === !0 ? t - e : e - t
                        })
                    }
                    "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = t.proxy(a.autoPlay, a), a.autoPlayClear = t.proxy(a.autoPlayClear, a), a.changeSlide = t.proxy(a.changeSlide, a), a.clickHandler = t.proxy(a.clickHandler, a), a.selectHandler = t.proxy(a.selectHandler, a), a.setPosition = t.proxy(a.setPosition, a), a.swipeHandler = t.proxy(a.swipeHandler, a), a.dragHandler = t.proxy(a.dragHandler, a), a.keyHandler = t.proxy(a.keyHandler, a), a.autoPlayIterator = t.proxy(a.autoPlayIterator, a), a.instanceUid = i++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.init(!0), a.checkResponsive(!0)
                }

                var i = 0;
                return e
            }(), e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
                var r = this;
                if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= r.slideCount)return !1;
                r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : n === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e)
                }), r.$slidesCache = r.$slides, r.reinit()
            }, e.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({height: e}, t.options.speed)
                }
            }, e.prototype.animateSlide = function (e, i) {
                var n = {}, r = this;
                r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({left: e}, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({top: e}, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({animStart: r.currentLeft}).animate({animStart: e}, {
                            duration: r.options.speed,
                            easing: r.options.easing,
                            step: function (t) {
                                t = Math.ceil(t), r.options.vertical === !1 ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
                            },
                            complete: function () {
                                i && i.call()
                            }
                        })) : (r.applyTransition(), e = Math.ceil(e), n[r.animType] = r.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function () {
                            r.disableTransition(), i.call()
                        }, r.options.speed))
            }, e.prototype.asNavFor = function (e) {
                var i = this, n = i.options.asNavFor;
                n && null !== n && (n = t(n).not(i.$slider)), null !== n && "object" == typeof n && n.each(function () {
                    var i = t(this).slick("getSlick");
                    i.unslicked || i.slideHandler(e, !0)
                })
            }, e.prototype.applyTransition = function (t) {
                var e = this, i = {};
                i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, e.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function () {
                var t = this;
                t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (0 === t.currentSlide - 1 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
            }, e.prototype.buildArrows = function () {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow), e.$nextArrow = t(e.options.nextArrow), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
            }, e.prototype.buildDots = function () {
                var e, i, n = this;
                if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                    for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1)i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
                    i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, e.prototype.buildOut = function () {
                var e = this;
                e.$slides = e.$slider.children(":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
                    t(i).attr("data-slick-index", e)
                }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.options.accessibility === !0 && e.$list.prop("tabIndex", 0), e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
            }, e.prototype.buildRows = function () {
                var t, e, i, n, r, s, o, a = this;
                if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                    for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; r > t; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var u = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var h = t * o + (e * a.options.slidesPerRow + i);
                                s.get(h) && u.appendChild(s.get(h))
                            }
                            l.appendChild(u)
                        }
                        n.appendChild(l)
                    }
                    a.$slider.html(n), a.$slider.children().children().children().width(100 / a.options.slidesPerRow + "%").css({display: "inline-block"})
                }
            }, e.prototype.checkResponsive = function (e) {
                var i, n, r, s = this, o = !1, a = s.$slider.width(), l = window.innerWidth || t(window).width();
                if ("window" === s.respondTo ? r = l : "slider" === s.respondTo ? r = a : "min" === s.respondTo && (r = Math.min(l, a)), s.originalSettings.responsive && s.originalSettings.responsive.length > -1 && null !== s.originalSettings.responsive) {
                    n = null;
                    for (i in s.breakpoints)s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (n = s.breakpoints[i]) : r > s.breakpoints[i] && (n = s.breakpoints[i]));
                    null !== n ? null !== s.activeBreakpoint ? n !== s.activeBreakpoint && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[n]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh()), o = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[n]), e === !0 ? s.currentSlide = s.options.initialSlide : s.refresh()), o = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(), o = n), e || o === !1 || s.$slider.trigger("breakpoint", [s, o])
                }
            }, e.prototype.changeSlide = function (e, i) {
                var n, r, s, o = this, a = t(e.target);
                switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = 0 !== o.slideCount % o.options.slidesToScroll, n = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                    case"previous":
                        r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
                        break;
                    case"next":
                        r = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
                        break;
                    case"index":
                        var l = 0 === e.data.index ? 0 : e.data.index || a.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(l), !1, i), a.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function (t) {
                var e, i, n = this;
                if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var r in e) {
                    if (t < e[r]) {
                        t = i;
                        break
                    }
                    i = e[r]
                }
                return t
            }, e.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).off("click.slick", e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.cleanUpRows = function () {
                var t, e = this;
                e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
            }, e.prototype.clickHandler = function (t) {
                var e = this;
                e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
            }, e.prototype.destroy = function () {
                var e = this;
                e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), t(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").css({
                    position: "",
                    left: "",
                    top: "",
                    zIndex: "",
                    opacity: "",
                    width: ""
                }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0
            }, e.prototype.disableTransition = function (t) {
                var e = this, i = {};
                i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, e.prototype.fadeSlide = function (t, e) {
                var i = this;
                i.cssTransitions === !1 ? (i.$slides.eq(t).css({zIndex: 1e3}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                        opacity: 1,
                        zIndex: 1e3
                    }), e && setTimeout(function () {
                        i.disableTransition(t), e.call()
                    }, i.options.speed))
            }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                var t = this;
                return t.currentSlide
            }, e.prototype.getDotCount = function () {
                var t = this, e = 0, i = 0, n = 0;
                if (t.options.infinite === !0)for (; e < t.slideCount;)++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (t.options.centerMode === !0) n = t.slideCount; else for (; e < t.slideCount;)++n, e = i + t.options.slidesToShow, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return n - 1
            }, e.prototype.getLeft = function (t) {
                var e, i, n, r = this, s = 0;
                return r.slideOffset = 0, i = r.$slides.first().outerHeight(), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideWidth * r.options.slidesToShow, s = -1 * i * r.options.slidesToShow), 0 !== r.slideCount % r.options.slidesToScroll && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = -1 * (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth, s = -1 * (r.options.slidesToShow - (t - r.slideCount)) * i) : (r.slideOffset = -1 * r.slideCount % r.options.slidesToScroll * r.slideWidth, s = -1 * r.slideCount % r.options.slidesToScroll * i))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? -1 * t * r.slideWidth + r.slideOffset : -1 * t * i + s, r.options.variableWidth === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? t : t + r.options.slidesToShow), e = n[0] ? -1 * n[0].offsetLeft : 0, r.options.centerMode === !0 && (n = r.$slideTrack.children(".slick-slide").eq(r.options.infinite === !1 ? t : t + r.options.slidesToShow + 1), e = n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
            }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                var e = this;
                return e.options[t]
            }, e.prototype.getNavigableIndexes = function () {
                var t, e = this, i = 0, n = 0, r = [];
                for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;)r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return r
            }, e.prototype.getSlick = function () {
                return this
            }, e.prototype.getSlideCount = function () {
                var e, i, n, r = this;
                return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function (e, s) {
                        return s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * r.swipeLeft ? (i = s, !1) : void 0
                    }), e = Math.abs(t(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
            }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                var i = this;
                i.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
            }, e.prototype.init = function (e) {
                var i = this;
                t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), e && i.$slider.trigger("init", [i])
            }, e.prototype.initArrowEvents = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.on("click.slick", {message: "next"}, t.changeSlide))
            }, e.prototype.initDotEvents = function () {
                var e = this;
                e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
            }, e.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.initUI = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
            }, e.prototype.keyHandler = function (t) {
                var e = this;
                37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({data: {message: "previous"}}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({data: {message: "next"}})
            }, e.prototype.lazyLoad = function () {
                function e(e) {
                    t("img[data-lazy]", e).each(function () {
                        var e = t(this), i = t(this).attr("data-lazy"), n = document.createElement("img");
                        n.onload = function () {
                            e.animate({opacity: 1}, 200)
                        }, n.src = i, e.css({opacity: 0}).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
                    })
                }

                var i, n, r, s, o = this;
                o.options.centerMode === !0 ? o.options.infinite === !0 ? (r = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = r + o.options.slidesToShow + 2) : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = r + o.options.slidesToShow, o.options.fade === !0 && (r > 0 && r--, s <= o.slideCount && s++)), i = o.$slider.find(".slick-slide").slice(r, s), e(i), o.slideCount <= o.options.slidesToShow ? (n = o.$slider.find(".slick-slide"), e(n)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (n = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(n)) : 0 === o.currentSlide && (n = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(n))
            }, e.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
            }, e.prototype.next = e.prototype.slickNext = function () {
                var t = this;
                t.changeSlide({data: {message: "next"}})
            }, e.prototype.orientationChange = function () {
                var t = this;
                t.checkResponsive(), t.setPosition()
            }, e.prototype.pause = e.prototype.slickPause = function () {
                var t = this;
                t.autoPlayClear(), t.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function () {
                var t = this;
                t.paused = !1, t.autoPlay()
            }, e.prototype.postSlide = function (t) {
                var e = this;
                e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
            }, e.prototype.prev = e.prototype.slickPrev = function () {
                var t = this;
                t.changeSlide({data: {message: "previous"}})
            }, e.prototype.preventDefault = function (t) {
                t.preventDefault()
            }, e.prototype.progressiveLazyLoad = function () {
                var e, i, n = this;
                e = t("img[data-lazy]", n.$slider).length, e > 0 && (i = t("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function () {
                    i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition()
                }).error(function () {
                    i.removeAttr("data-lazy"), n.progressiveLazyLoad()
                }))
            }, e.prototype.refresh = function () {
                var e = this, i = e.currentSlide;
                e.destroy(), t.extend(e, e.initials), e.init(), e.changeSlide({data: {message: "index", index: i}}, !1)
            }, e.prototype.reinit = function () {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e])
            }, e.prototype.resize = function () {
                var e = this;
                t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                    e.windowWidth = t(window).width(), e.checkResponsive(), e.setPosition()
                }, 50))
            }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                var n = this;
                return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
            }, e.prototype.setCSS = function (t) {
                var e, i, n = this, r = {};
                n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
            }, e.prototype.setDimensions = function () {
                var t = this;
                t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
            }, e.prototype.setFade = function () {
                var e, i = this;
                i.$slides.each(function (n, r) {
                    e = -1 * i.slideWidth * n, t(r).css(i.options.rtl === !0 ? {
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: 800,
                            opacity: 0
                        } : {position: "relative", left: e, top: 0, zIndex: 800, opacity: 0})
                }), i.$slides.eq(i.currentSlide).css({zIndex: 900, opacity: 1})
            }, e.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function (t, e, i) {
                var n = this;
                n.options[t] = e, i === !0 && (n.unload(), n.reinit())
            }, e.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
            }, e.prototype.setProps = function () {
                var t = this, e = document.body.style;
                t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
            }, e.prototype.setSlideClasses = function (t) {
                var e, i, n, r, s = this;
                s.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
            }, e.prototype.setupInfinite = function () {
                var e, i, n, r = this;
                if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
                    for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1)i = e - 1, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                    for (e = 0; n > e; e += 1)i = e, t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                    r.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                        t(this).attr("id", "")
                    })
                }
            }, e.prototype.setPaused = function (t) {
                var e = this;
                e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
            }, e.prototype.selectHandler = function (e) {
                var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"), r = parseInt(n.attr("data-slick-index"));
                return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(r).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(r).addClass("slick-center")), void i.asNavFor(r)) : void i.slideHandler(r)
            }, e.prototype.slideHandler = function (t, e, i) {
                var n, r, s, o, a = null, l = this;
                return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function () {
                                l.postSlide(n)
                            }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(o, function () {
                                    l.postSlide(n)
                                }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), s = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? l.fadeSlide(r, function () {
                                        l.postSlide(r)
                                    }) : l.postSlide(r), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function () {
                                        l.postSlide(r)
                                    }) : l.postSlide(r))))
            }, e.prototype.startLoad = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
            }, e.prototype.swipeDirection = function () {
                var t, e, i, n, r = this;
                return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
            }, e.prototype.swipeEnd = function () {
                var t, e = this;
                if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX)return !1;
                if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe)switch (e.swipeDirection()) {
                    case"left":
                        t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                        break;
                    case"right":
                        t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
                } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
            }, e.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse")))switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                    case"start":
                        e.swipeStart(t);
                        break;
                    case"move":
                        e.swipeMove(t);
                        break;
                    case"end":
                        e.swipeEnd(t)
                }
            }, e.prototype.swipeMove = function (t) {
                var e, i, n, r, s, o = this;
                return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !o.dragging || s && 1 !== s.length ? !1 : (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), i = o.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), r = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), o.options.verticalSwiping === !0 && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? e + n * r : e + n * (o.$list.height() / o.listWidth) * r, o.options.verticalSwiping === !0 && (o.swipeLeft = e + n * r), o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft)) : void 0)
            }, e.prototype.swipeStart = function (t) {
                var e, i = this;
                return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
            }, e.prototype.unload = function () {
                var e = this;
                t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(), e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function (t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy()
            }, e.prototype.updateArrows = function () {
                var t, e = this;
                t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")))
            }, e.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, e.prototype.visibility = function () {
                var t = this;
                document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
            }, t.fn.slick = function () {
                var t, i = this, n = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length, o = 0;
                for (o; s > o; o++)if ("object" == typeof n || "undefined" == typeof n ? i[o].slick = new e(i[o], n) : t = i[o].slick[n].apply(i[o].slick, r), "undefined" != typeof t)return t;
                return i
            }
        })
    }, {"./../../jquery/dist/jquery.js": 2}],
    5: [function (t, e, i) {
        (function (i) {
            var n = "undefined" != typeof e && e.exports && "undefined" != typeof i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function () {
                "use strict";
                n._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                    var r = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r)i = r[n], u(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        u(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    }, s = 1e-10, o = i._internals, a = r._internals = {}, l = o.isSelector, u = o.isArray, h = o.lazyTweens, c = o.lazyRender, d = [], p = n._gsDefine.globals, f = function (t) {
                        var e, i = {};
                        for (e in t)i[e] = t[e];
                        return i
                    }, g = a.pauseCallback = function (t, e, i, n) {
                        var r, o = t._timeline, a = o._totalTime, l = t._startTime, u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && o._reversed, h = u ? 0 : s, c = u ? s : 0;
                        if (e || !this._forcingPlayhead) {
                            for (o.pause(l), r = t._prev; r && r._startTime === l;)r._rawPrevTime = c, r = r._prev;
                            for (r = t._next; r && r._startTime === l;)r._rawPrevTime = h, r = r._next;
                            e && e.apply(n || o, i || d), (this._forcingPlayhead || !o._paused) && o.seek(a)
                        }
                    }, _ = function (t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    }, m = r.prototype = new e;
                    return r.version = "1.16.1", m.constructor = r, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, n, r) {
                        var s = n.repeat && p.TweenMax || i;
                        return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                    }, m.from = function (t, e, n, r) {
                        return this.add((n.repeat && p.TweenMax || i).from(t, e, n), r)
                    }, m.fromTo = function (t, e, n, r, s) {
                        var o = r.repeat && p.TweenMax || i;
                        return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                    }, m.staggerTo = function (t, e, n, s, o, a, u, h) {
                        var c, d = new r({
                            onComplete: a,
                            onCompleteParams: u,
                            onCompleteScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        });
                        for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], l(t) && (t = _(t)), s = s || 0, 0 > s && (t = _(t), t.reverse(), s *= -1), c = 0; c < t.length; c++)n.startAt && (n.startAt = f(n.startAt)), d.to(t[c], e, f(n), c * s);
                        return this.add(d, o)
                    }, m.staggerFrom = function (t, e, i, n, r, s, o, a) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                    }, m.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                    }, m.call = function (t, e, n, r) {
                        return this.add(i.delayedCall(0, t, e, n), r)
                    }, m.set = function (t, e, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                    }, r.exportRoot = function (t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var n, s, o = new r(t), a = o._timeline;
                        for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n;)s = n._next, e && n instanceof i && n.target === n.vars.onComplete || o.add(n, n._startTime - n._delay), n = s;
                        return a.add(o, 0), o
                    }, m.add = function (n, s, o, a) {
                        var l, h, c, d, p, f;
                        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t)) {
                            if (n instanceof Array || n && n.push && u(n)) {
                                for (o = o || "normal", a = a || 0, l = s, h = n.length, c = 0; h > c; c++)u(d = n[c]) && (d = new r({tweens: d})), this.add(d, l), "string" != typeof d && "function" != typeof d && ("sequence" === o ? l = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), l += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof n)return this.addLabel(n, s);
                            if ("function" != typeof n)throw"Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                            n = i.delayedCall(0, n)
                        }
                        if (e.prototype.add.call(this, n, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (p = this, f = p.rawTime() > n._startTime; p._timeline;)f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                        return this
                    }, m.remove = function (e) {
                        if (e instanceof t)return this._remove(e, !1);
                        if (e instanceof Array || e && e.push && u(e)) {
                            for (var i = e.length; --i > -1;)this.remove(e[i]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, m._remove = function (t, i) {
                        e.prototype._remove.call(this, t, i);
                        var n = this._last;
                        return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, m.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, m.insert = m.insertMultiple = function (t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }, m.appendMultiple = function (t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }, m.addLabel = function (t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, m.addPause = function (t, e, n, r) {
                        var s = i.delayedCall(0, g, ["{self}", e, n, r], this);
                        return s.data = "isPause", this.add(s, t)
                    }, m.removeLabel = function (t) {
                        return delete this._labels[t], this
                    }, m.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, m._parseTimeOrLabel = function (e, i, n, r) {
                        var s;
                        if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && u(r)))for (s = r.length; --s > -1;)r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                        if ("string" == typeof i)return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                            if (s = e.indexOf("="), -1 === s)return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                        }
                        return Number(e) + i
                    }, m.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                    }, m.stop = function () {
                        return this.paused(!0)
                    }, m.gotoAndPlay = function (t, e) {
                        return this.play(t, e)
                    }, m.gotoAndStop = function (t, e) {
                        return this.pause(t, e)
                    }, m.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, o, a, l, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, g = this._timeScale, _ = this._paused;
                        if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = u + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                                r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)for (n = this._first; n && 0 === n._startTime;)n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else this._totalTime = this._time = this._rawPrevTime = t;
                        if (this._time !== p && this._first || i || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)), this._time >= p)for (n = this._first; n && (o = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, !this._paused || _);)(n._active || n._startTime <= p && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                            this._onUpdate && (e || (h.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))), a && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || d)))
                        }
                    }, m._hasPausedChild = function () {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof r && t._hasPausedChild())return !0;
                            t = t._next
                        }
                        return !1
                    }, m.getChildren = function (t, e, n, r) {
                        r = r || -9999999999;
                        for (var s = [], o = this._first, a = 0; o;)o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                        return s
                    }, m.getTweensOf = function (t, e) {
                        var n, r, s = this._gc, o = [], a = 0;
                        for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                        return s && this._enabled(!1, !0), o
                    }, m.recent = function () {
                        return this._recent
                    }, m._contains = function (t) {
                        for (var e = t.timeline; e;) {
                            if (e === this)return !0;
                            e = e.timeline
                        }
                        return !1
                    }, m.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, s = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next;
                        if (e)for (n in s)s[n] >= i && (s[n] += t);
                        return this._uncache(!0)
                    }, m._kill = function (t, e) {
                        if (!t && !e)return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;)i[n]._kill(t, e) && (r = !0);
                        return r
                    }, m.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0), i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
                        return t !== !1 && (this._labels = {}), this._uncache(!0)
                    }, m.invalidate = function () {
                        for (var e = this._first; e;)e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, m._enabled = function (t, i) {
                        if (t === this._gc)for (var n = this._first; n;)n._enabled(t, !0), n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, m.totalTime = function (e, i, n) {
                        this._forcingPlayhead = !0;
                        var r = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, r
                    }, m.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, m.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, s = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                this._duration = this._totalDuration = n, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                    }, m.paused = function (e) {
                        if (!e)for (var i = this._first, n = this._time; i;)i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, m.usesFrames = function () {
                        for (var e = this._timeline; e._timeline;)e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, m.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }, r
                }, !0)
            }), n._gsDefine && n._gsQueue.pop()(), function (i) {
                "use strict";
                var r = function () {
                    return (n.GreenSockGlobals || n)[i]
                };
                "function" == typeof define && define.amd ? define(["TweenLite"], r) : "undefined" != typeof e && e.exports && (t("./TweenLite.js"), e.exports = r())
            }("TimelineLite")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./TweenLite.js": 6}],
    6: [function (t, e, i) {
        (function (t) {
            !function (t, i) {
                "use strict";
                var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!n.TweenLite) {
                    var r, s, o, a, l, u = function (t) {
                        var e, i = t.split("."), r = n;
                        for (e = 0; e < i.length; e++)r[i[e]] = r = r[i[e]] || {};
                        return r
                    }, h = u("com.greensock"), c = 1e-10, d = function (t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    }, p = function () {
                    }, f = function () {
                        var t = Object.prototype.toString, e = t.call([]);
                        return function (i) {
                            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                        }
                    }(), g = {}, _ = function (r, s, o, a) {
                        this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = o;
                        var l = [];
                        this.check = function (h) {
                            for (var c, d, p, f, m = s.length, v = m; --m > -1;)(c = g[s[m]] || new _(s[m], [])).gsClass ? (l[m] = c.gsClass, v--) : h && c.sc.push(this);
                            if (0 === v && o)for (d = ("com.greensock." + r).split("."), p = d.pop(), f = u(d.join("."))[p] = this.gsClass = o.apply(o, l), a && (n[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                    return f
                                }) : r === i && "undefined" != typeof e && e.exports && (e.exports = f)), m = 0; m < this.sc.length; m++)this.sc[m].check()
                        }, this.check(!0)
                    }, m = t._gsDefine = function (t, e, i, n) {
                        return new _(t, e, i, n)
                    }, v = h._class = function (t, e, i) {
                        return e = e || function () {
                            }, m(t, [], function () {
                            return e
                        }, i), e
                    };
                    m.globals = n;
                    var y = [0, 0, 1, 1], w = [], b = v("easing.Ease", function (t, e, i, n) {
                        this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                    }, !0), x = b.map = {}, T = b.register = function (t, e, i, n) {
                        for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)for (s = l[u], r = n ? v("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;)a = c[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                    };
                    for (o = b.prototype, o._calcEnd = !1, o.getRatio = function (t) {
                        if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                    }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;)o = r[s] + ",Power" + s, T(new b(null, null, 1, s), o, "easeOut", !0), T(new b(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), o, "easeInOut");
                    x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
                    var S = v("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    o = S.prototype, o.addEventListener = function (t, e, i, n, r) {
                        r = r || 0;
                        var s, o, u = this._listeners[t], h = 0;
                        for (null == u && (this._listeners[t] = u = []), o = u.length; --o > -1;)s = u[o], s.c === e && s.s === i ? u.splice(o, 1) : 0 === h && s.pr < r && (h = o + 1);
                        u.splice(h, 0, {c: e, s: i, up: n, pr: r}), this !== a || l || a.wake()
                    }, o.removeEventListener = function (t, e) {
                        var i, n = this._listeners[t];
                        if (n)for (i = n.length; --i > -1;)if (n[i].c === e)return void n.splice(i, 1)
                    }, o.dispatchEvent = function (t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)for (e = r.length, i = this._eventTarget; --e > -1;)n = r[e], n && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var C = t.requestAnimationFrame, k = t.cancelAnimationFrame, P = Date.now || function () {
                            return (new Date).getTime()
                        }, A = P();
                    for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !C;)C = t[r[s] + "RequestAnimationFrame"], k = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
                    v("Ticker", function (t, e) {
                        var i, n, r, s, o, u = this, h = P(), d = e !== !1 && C, f = 500, g = 33, _ = "tick", m = function (t) {
                            var e, a, l = P() - A;
                            l > f && (h += l - g), A += l, u.time = (A - h) / 1e3, e = u.time - o, (!i || e > 0 || t === !0) && (u.frame++, o += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(m)), a && u.dispatchEvent(_)
                        };
                        S.call(u), u.time = u.frame = 0, u.tick = function () {
                            m(!0)
                        }, u.lagSmoothing = function (t, e) {
                            f = t || 1 / c, g = Math.min(e, f, 0)
                        }, u.sleep = function () {
                            null != r && (d && k ? k(r) : clearTimeout(r), n = p, r = null, u === a && (l = !1))
                        }, u.wake = function () {
                            null !== r ? u.sleep() : u.frame > 10 && (A = P() - f + 5), n = 0 === i ? p : d && C ? C : function (t) {
                                        return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
                                    }, u === a && (l = !0), m(2)
                        }, u.fps = function (t) {
                            return arguments.length ? (i = t, s = 1 / (i || 60), o = this.time + s, void u.wake()) : i
                        }, u.useRAF = function (t) {
                            return arguments.length ? (u.sleep(), d = t, void u.fps(i)) : d
                        }, u.fps(t), setTimeout(function () {
                            d && u.frame < 5 && u.useRAF(!1)
                        }, 1500)
                    }), o = h.Ticker.prototype = new h.events.EventDispatcher, o.constructor = h.Ticker;
                    var O = v("core.Animation", function (t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                            l || a.wake();
                            var i = this.vars.useFrames ? H : W;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    a = O.ticker = new h.Ticker, o = O.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                    var E = function () {
                        l && P() - A > 2e3 && a.wake(), setTimeout(E, 2e3)
                    };
                    E(), o.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, o.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, o.resume = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, o.seek = function (t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }, o.restart = function (t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }, o.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, o.render = function (t, e, i) {
                    }, o.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                    }, o.isActive = function () {
                        var t, e = this._timeline, i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                    }, o._enabled = function (t, e) {
                        return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, o._kill = function (t, e) {
                        return this._enabled(!1, !1)
                    }, o.kill = function (t, e) {
                        return this._kill(t, e), this
                    }, o._uncache = function (t) {
                        for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
                        return this
                    }, o._swapSelfInParams = function (t) {
                        for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
                        return i
                    }, o.eventCallback = function (t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length)return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, o.delay = function (t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, o.duration = function (t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, o.totalDuration = function (t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, o.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, o.totalTime = function (t, e, i) {
                        if (l || a.wake(), !arguments.length)return this._totalTime;
                        if (this._timeline) {
                            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration, r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && U())
                        }
                        return this
                    }, o.progress = o.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
                    }, o.startTime = function (t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, o.endTime = function (t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, o.timeScale = function (t) {
                        if (!arguments.length)return this._timeScale;
                        if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t, this._uncache(!1)
                    }, o.reversed = function (t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, o.paused = function (t) {
                        if (!arguments.length)return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var M = v("core.SimpleTimeline", function (t) {
                        O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    o = M.prototype = new O, o.constructor = M, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, i, n) {
                        var r, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)for (s = t._startTime; r && r._startTime > s;)r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, o._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, o.render = function (t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;)n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, o.rawTime = function () {
                        return l || a.wake(), this._totalTime
                    };
                    var D = v("TweenLite", function (e, i, n) {
                        if (O.call(this, i, n), this.render = D.prototype.render, null == e)throw"Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                        var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(d(s))) : (this._siblings[r] = X(s, this, !1), 1 === l && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                    }, !0), R = function (e) {
                        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                    }, j = function (t, e) {
                        var i, n = {};
                        for (i in t)B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    };
                    o = D.prototype = new O, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.16.1", D.defaultEase = o._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
                        a.lagSmoothing(t, e)
                    }, D.selector = t.$ || t.jQuery || function (e) {
                            var i = t.$ || t.jQuery;
                            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                        };
                    var z = [], L = {}, N = D._internals = {
                        isArray: f,
                        isSelector: R,
                        lazyTweens: z
                    }, I = D._plugins = {}, F = N.tweenLookup = {}, $ = 0, B = N.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1
                    }, q = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        "true": 1,
                        "false": 0
                    }, H = O._rootFramesTimeline = new M, W = O._rootTimeline = new M, V = 30, U = N.lazyRender = function () {
                        var t, e = z.length;
                        for (L = {}; --e > -1;)t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        z.length = 0
                    };
                    W._startTime = a.time, H._startTime = a.frame, W._active = H._active = !0, setTimeout(U, 1), O._updateRoot = D.render = function () {
                        var t, e, i;
                        if (z.length && U(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), z.length && U(), a.frame >= V) {
                            V = a.frame + (parseInt(D.autoSleep, 10) || 120);
                            for (i in F) {
                                for (e = F[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete F[i]
                            }
                            if (i = W._first, (!i || i._paused) && D.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                                for (; i && i._paused;)i = i._next;
                                i || a.sleep()
                            }
                        }
                    }, a.addEventListener("tick", O._updateRoot);
                    var X = function (t, e, i) {
                        var n, r, s = t._gsTweenID;
                        if (F[s || (t._gsTweenID = s = "t" + $++)] || (F[s] = {
                                target: t,
                                tweens: []
                            }), e && (n = F[s].tweens, n[r = n.length] = e, i))for (; --r > -1;)n[r] === e && n.splice(r, 1);
                        return F[s].tweens
                    }, Y = function (t, e, i, n) {
                        var r, s, o = t.vars.onOverwrite;
                        return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                    }, G = function (t, e, i, n, r) {
                        var s, o, a, l;
                        if (1 === n || n >= 4) {
                            for (l = r.length, s = 0; l > s; s++)if ((a = r[s]) !== e) a._gc || Y(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n)break;
                            return o
                        }
                        var u, h = e._startTime + c, d = [], p = 0, f = 0 === e._duration;
                        for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || Z(e, 0, f), 0 === Z(a, u, f) && (d[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (d[p++] = a)));
                        for (s = p; --s > -1;)if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Y(a, e))continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                        return o
                    }, Z = function (t, e, i) {
                        for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                            if (s += n._startTime, r *= n._timeScale, n._paused)return -100;
                            n = n._timeline
                        }
                        return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                    };
                    o._init = function () {
                        var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
                        if (s.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in s.startAt)r[n] = s.startAt[n];
                            if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)if (this._time > 0) this._startAt = null; else if (0 !== a)return
                        } else if (s.runBackwards && 0 !== a)if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                            0 !== this._time && (l = !1), i = {};
                            for (n in s)B[n] && "autoCSS" !== n || (i[n] = s[n]);
                            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                                if (0 === this._time)return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                        if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                        if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = s.onUpdate, this._initted = !0
                    }, o._initProps = function (e, i, n, r) {
                        var s, o, a, l, u, h;
                        if (null == e)return !1;
                        L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && j(this.vars, e);
                        for (s in this.vars) {
                            if (h = this.vars[s], B[s]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this)); else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: l,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: !0,
                                    n: s,
                                    pg: !0,
                                    pr: l._priority
                                }, o = l._overwriteProps.length; --o > -1;)i[l._overwriteProps[o]] = this._firstPT;
                                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                            } else this._firstPT = i[s] = u = {
                                _next: this._firstPT,
                                t: e,
                                p: s,
                                f: "function" == typeof e[s],
                                n: s,
                                pg: !1,
                                pr: 0
                            }, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                            u && u._next && (u._next._prev = u)
                        }
                        return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
                    }, o.render = function (t, e, i) {
                        var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
                        if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                            var h = t / l, d = this._easeType, p = this._easePower;
                            (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > t / l ? h / 2 : 1 - h / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc)return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = a, this._rawPrevTime = u, z.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), s = this._firstPT; s;)s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || w), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                        }
                    }, o._kill = function (t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                        var n, r, s, o, a, l, u, h, c;
                        if ((f(e) || R(e)) && "number" != typeof e[0])for (n = e.length; --n > -1;)this._kill(t, e[n]) && (l = !0); else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)if (e === this._targets[n]) {
                                    a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                            } else {
                                if (e !== this.target)return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in u)a[s] && (c || (c = []), c.push(s));
                                    if (!Y(this, i, e, c))return !1
                                }
                                for (s in u)(o = a[s]) && (o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, o.invalidate = function () {
                        return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
                    }, o._enabled = function (t, e) {
                        if (l || a.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)for (i = n.length; --i > -1;)this._siblings[i] = X(n[i], this, !0); else this._siblings = X(this.target, this, !0)
                        }
                        return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
                    }, D.to = function (t, e, i) {
                        return new D(t, e, i)
                    }, D.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
                    }, D.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
                    }, D.delayedCall = function (t, e, i, n, r) {
                        return new D(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            onCompleteScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            onReverseCompleteScope: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, D.set = function (t, e) {
                        return new D(t, 0, e)
                    }, D.getTweensOf = function (t, e) {
                        if (null == t)return [];
                        t = "string" != typeof t ? t : D.selector(t) || t;
                        var i, n, r, s;
                        if ((f(t) || R(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;)n = n.concat(D.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)for (s = n[i], r = i; --r > -1;)s === n[r] && n.splice(i, 1)
                        } else for (n = X(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n
                    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;)n[r]._kill(i, t)
                    };
                    var Q = v("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
                    }, !0);
                    if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function (t, e, i, n, r, s) {
                            var o, a;
                            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                                    _next: this._firstPT,
                                    t: t,
                                    p: e,
                                    s: i,
                                    c: o,
                                    f: "function" == typeof t[e],
                                    n: r || e,
                                    r: s
                                }, a._next && (a._next._prev = a), a) : void 0
                        }, o.setRatio = function (t) {
                            for (var e, i = this._firstPT, n = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        }, o._kill = function (t) {
                            var e, i = this._overwriteProps, n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                            for (; n;)null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, o._roundProps = function (t, e) {
                            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                        }, D._onPluginEvent = function (t, e) {
                            var i, n, r, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, n = r; n && n.pr > a.pr;)n = n._next;
                                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                }
                                a = e._firstPT = r
                            }
                            for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, Q.activate = function (t) {
                            for (var e = t.length; --e > -1;)t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
                            return !0
                        }, m.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_roundProps",
                                initAll: "_onInitAllProps"
                            }, o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                Q.call(this, i, n), this._overwriteProps = r || []
                            }, t.global === !0), a = o.prototype = new Q(i);
                            a.constructor = o, o.API = t.API;
                            for (e in s)"function" == typeof t[e] && (a[s[e]] = t[e]);
                            return o.version = t.version, Q.activate([o]), o
                        }, r = t._gsQueue) {
                        for (s = 0; s < r.length; s++)r[s]();
                        for (o in g)g[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
                    }
                    l = !1
                }
            }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenLite")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    7: [function (t, e, i) {
        (function (t) {
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function () {
                "use strict";
                i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                    var n = function (t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    }, r = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    }, s = 1e-10, o = i._internals, a = o.isSelector, l = o.isArray, u = r.prototype = i.to({}, .1, {}), h = [];
                    r.version = "1.16.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                    }, u.updateTo = function (t, e) {
                        var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender;
                        e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (n in t)this.vars[n] = t[n];
                        if (this._initted || s)if (e) this._initted = !1,
                        s && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var o = this._time;
                            this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                        } else if (this._time > 0 || s) {
                            this._initted = !1, this._init();
                            for (var a, l = 1 / (1 - r), u = this._firstPT; u;)a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                        }
                        return this
                    }, u.render = function (t, e, i) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var n, r, a, l, u, c, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration, g = this._time, _ = this._totalTime, m = this._cycle, v = this._duration, y = this._rawPrevTime;
                        if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, d = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === d ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : this._time / v < .5 ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), g === this._time && !i && m === this._cycle)return void(_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc)return;
                            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = g, this._totalTime = _, this._rawPrevTime = y, this._cycle = m, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), a = this._firstPT; a;)a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== _ || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || h), 0 === v && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
                    }, r.to = function (t, e, i) {
                        return new r(t, e, i)
                    }, r.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                    }, r.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                    }, r.staggerTo = r.allTo = function (t, e, s, o, u, c, d) {
                        o = o || 0;
                        var p, f, g, _, m = s.delay || 0, v = [], y = function () {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(d || this, c || h)
                        };
                        for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                            f = {};
                            for (_ in s)f[_] = s[_];
                            f.delay = m, g === p && u && (f.onComplete = y), v[g] = new r(t[g], e, f), m += o
                        }
                        return v
                    }, r.staggerFrom = r.allFrom = function (t, e, i, n, s, o, a) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
                    }, r.staggerFromTo = r.allFromTo = function (t, e, i, n, s, o, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                    }, r.delayedCall = function (t, e, i, n, s) {
                        return new r(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            onCompleteScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            onReverseCompleteScope: n,
                            immediateRender: !1,
                            useFrames: s,
                            overwrite: 0
                        })
                    }, r.set = function (t, e) {
                        return new r(t, 0, e)
                    }, r.isTweening = function (t) {
                        return i.getTweensOf(t, !0).length > 0
                    };
                    var c = function (t, e) {
                        for (var n = [], r = 0, s = t._first; s;)s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(c(s, e)), r = n.length), s = s._next;
                        return n
                    }, d = r.getAllTweens = function (e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                    r.killAll = function (t, i, n, r) {
                        null == i && (i = !0), null == n && (n = !0);
                        var s, o, a, l = d(0 != r), u = l.length, h = i && n && r;
                        for (a = 0; u > a; a++)o = l[a], (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                    }, r.killChildTweensOf = function (t, e) {
                        if (null != t) {
                            var s, u, h, c, d, p = o.tweenLookup;
                            if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))for (c = t.length; --c > -1;)r.killChildTweensOf(t[c], e); else {
                                s = [];
                                for (h in p)for (u = p[h].target.parentNode; u;)u === t && (s = s.concat(p[h].tweens)), u = u.parentNode;
                                for (d = s.length, c = 0; d > c; c++)e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                            }
                        }
                    };
                    var p = function (t, i, n, r) {
                        i = i !== !1, n = n !== !1, r = r !== !1;
                        for (var s, o, a = d(r), l = i && n && r, u = a.length; --u > -1;)o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                    };
                    return r.pauseAll = function (t, e, i) {
                        p(!0, t, e, i)
                    }, r.resumeAll = function (t, e, i) {
                        p(!1, t, e, i)
                    }, r.globalTimeScale = function (e) {
                        var n = t._rootTimeline, r = i.ticker.time;
                        return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                    }, u.progress = function (t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    }, u.totalProgress = function (t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                    }, u.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, u.duration = function (e) {
                        return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                    }, u.totalDuration = function (t) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                    }, u.repeat = function (t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, u.repeatDelay = function (t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, u.yoyo = function (t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, r
                }, !0), i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
                    var r = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r)i = r[n], u(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        u(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    }, s = 1e-10, o = n._internals, a = r._internals = {}, l = o.isSelector, u = o.isArray, h = o.lazyTweens, c = o.lazyRender, d = [], p = i._gsDefine.globals, f = function (t) {
                        var e, i = {};
                        for (e in t)i[e] = t[e];
                        return i
                    }, g = a.pauseCallback = function (t, e, i, n) {
                        var r, o = t._timeline, a = o._totalTime, l = t._startTime, u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && o._reversed, h = u ? 0 : s, c = u ? s : 0;
                        if (e || !this._forcingPlayhead) {
                            for (o.pause(l), r = t._prev; r && r._startTime === l;)r._rawPrevTime = c, r = r._prev;
                            for (r = t._next; r && r._startTime === l;)r._rawPrevTime = h, r = r._next;
                            e && e.apply(n || o, i || d), (this._forcingPlayhead || !o._paused) && o.seek(a)
                        }
                    }, _ = function (t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    }, m = r.prototype = new e;
                    return r.version = "1.16.1", m.constructor = r, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, i, r) {
                        var s = i.repeat && p.TweenMax || n;
                        return e ? this.add(new s(t, e, i), r) : this.set(t, i, r)
                    }, m.from = function (t, e, i, r) {
                        return this.add((i.repeat && p.TweenMax || n).from(t, e, i), r)
                    }, m.fromTo = function (t, e, i, r, s) {
                        var o = r.repeat && p.TweenMax || n;
                        return e ? this.add(o.fromTo(t, e, i, r), s) : this.set(t, r, s)
                    }, m.staggerTo = function (t, e, i, s, o, a, u, h) {
                        var c, d = new r({
                            onComplete: a,
                            onCompleteParams: u,
                            onCompleteScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        });
                        for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], l(t) && (t = _(t)), s = s || 0, 0 > s && (t = _(t), t.reverse(), s *= -1), c = 0; c < t.length; c++)i.startAt && (i.startAt = f(i.startAt)), d.to(t[c], e, f(i), c * s);
                        return this.add(d, o)
                    }, m.staggerFrom = function (t, e, i, n, r, s, o, a) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                    }, m.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                    }, m.call = function (t, e, i, r) {
                        return this.add(n.delayedCall(0, t, e, i), r)
                    }, m.set = function (t, e, i) {
                        return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
                    }, r.exportRoot = function (t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var i, s, o = new r(t), a = o._timeline;
                        for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, i = a._first; i;)s = i._next, e && i instanceof n && i.target === i.vars.onComplete || o.add(i, i._startTime - i._delay), i = s;
                        return a.add(o, 0), o
                    }, m.add = function (i, s, o, a) {
                        var l, h, c, d, p, f;
                        if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, i)), !(i instanceof t)) {
                            if (i instanceof Array || i && i.push && u(i)) {
                                for (o = o || "normal", a = a || 0, l = s, h = i.length, c = 0; h > c; c++)u(d = i[c]) && (d = new r({tweens: d})), this.add(d, l), "string" != typeof d && "function" != typeof d && ("sequence" === o ? l = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), l += a;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof i)return this.addLabel(i, s);
                            if ("function" != typeof i)throw"Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                            i = n.delayedCall(0, i)
                        }
                        if (e.prototype.add.call(this, i, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (p = this, f = p.rawTime() > i._startTime; p._timeline;)f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                        return this
                    }, m.remove = function (e) {
                        if (e instanceof t)return this._remove(e, !1);
                        if (e instanceof Array || e && e.push && u(e)) {
                            for (var i = e.length; --i > -1;)this.remove(e[i]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, m._remove = function (t, i) {
                        e.prototype._remove.call(this, t, i);
                        var n = this._last;
                        return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                    }, m.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, m.insert = m.insertMultiple = function (t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }, m.appendMultiple = function (t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }, m.addLabel = function (t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, m.addPause = function (t, e, i, r) {
                        var s = n.delayedCall(0, g, ["{self}", e, i, r], this);
                        return s.data = "isPause", this.add(s, t)
                    }, m.removeLabel = function (t) {
                        return delete this._labels[t], this
                    }, m.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, m._parseTimeOrLabel = function (e, i, n, r) {
                        var s;
                        if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && u(r)))for (s = r.length; --s > -1;)r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                        if ("string" == typeof i)return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                            if (s = e.indexOf("="), -1 === s)return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                        }
                        return Number(e) + i
                    }, m.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                    }, m.stop = function () {
                        return this.paused(!0)
                    }, m.gotoAndPlay = function (t, e) {
                        return this.play(t, e)
                    }, m.gotoAndStop = function (t, e) {
                        return this.pause(t, e)
                    }, m.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, o, a, l, u = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, g = this._timeScale, _ = this._paused;
                        if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = u + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)for (n = this._first; n && 0 === n._startTime;)n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else this._totalTime = this._time = this._rawPrevTime = t;
                        if (this._time !== p && this._first || i || l) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)), this._time >= p)for (n = this._first; n && (o = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, !this._paused || _);)(n._active || n._startTime <= p && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                            this._onUpdate && (e || (h.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))), a && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || d)))
                        }
                    }, m._hasPausedChild = function () {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof r && t._hasPausedChild())return !0;
                            t = t._next
                        }
                        return !1
                    }, m.getChildren = function (t, e, i, r) {
                        r = r || -9999999999;
                        for (var s = [], o = this._first, a = 0; o;)o._startTime < r || (o instanceof n ? e !== !1 && (s[a++] = o) : (i !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, i)), a = s.length))), o = o._next;
                        return s
                    }, m.getTweensOf = function (t, e) {
                        var i, r, s = this._gc, o = [], a = 0;
                        for (s && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (o[a++] = i[r]);
                        return s && this._enabled(!1, !0), o
                    }, m.recent = function () {
                        return this._recent
                    }, m._contains = function (t) {
                        for (var e = t.timeline; e;) {
                            if (e === this)return !0;
                            e = e.timeline
                        }
                        return !1
                    }, m.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var n, r = this._first, s = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next;
                        if (e)for (n in s)s[n] >= i && (s[n] += t);
                        return this._uncache(!0)
                    }, m._kill = function (t, e) {
                        if (!t && !e)return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;)i[n]._kill(t, e) && (r = !0);
                        return r
                    }, m.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0), i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
                        return t !== !1 && (this._labels = {}), this._uncache(!0)
                    }, m.invalidate = function () {
                        for (var e = this._first; e;)e.invalidate(), e = e._next;
                        return t.prototype.invalidate.call(this)
                    }, m._enabled = function (t, i) {
                        if (t === this._gc)for (var n = this._first; n;)n._enabled(t, !0), n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, m.totalTime = function (e, i, n) {
                        this._forcingPlayhead = !0;
                        var r = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1, r
                    }, m.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, m.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, r = this._last, s = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                                this._duration = this._totalDuration = n, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                    }, m.paused = function (e) {
                        if (!e)for (var i = this._first, n = this._time; i;)i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }, m.usesFrames = function () {
                        for (var e = this._timeline; e._timeline;)e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, m.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }, r
                }, !0), i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                    var n = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    }, r = 1e-10, s = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, u = new i(null, null, 1, 0), h = n.prototype = new t;
                    return h.constructor = n, h.kill()._gc = !1, n.version = "1.16.1", h.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                    }, h.addCallback = function (t, i, n, r) {
                        return this.add(e.delayedCall(0, t, n, r), i)
                    }, h.removeCallback = function (t, e) {
                        if (t)if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;)i[n]._startTime === r && i[n]._enabled(!1, !1);
                        return this
                    }, h.removePause = function (e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }, h.tweenTo = function (t, i) {
                        i = i || {};
                        var n, r, o, a = {ease: u, useFrames: this.usesFrames(), immediateRender: !1};
                        for (r in i)a[r] = i[r];
                        return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function () {
                            o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
                        }, o
                    }, h.tweenFromTo = function (t, e, i) {
                        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            onCompleteScope: this
                        }, i.immediateRender = i.immediateRender !== !1;
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }, h.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, o, u, h, c, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration, g = this._time, _ = this._totalTime, m = this._startTime, v = this._timeScale, y = this._rawPrevTime, w = this._paused, b = this._cycle;
                        if (t >= p) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4); else if (1e-7 > t)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, h = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t; else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)for (n = this._first; n && 0 === n._startTime;)n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        } else 0 === f && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = f + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                        if (this._cycle !== b && !this._locked) {
                            var x = this._yoyo && 0 !== (1 & b), T = x === (this._yoyo && 0 !== (1 & this._cycle)), S = this._totalTime, C = this._cycle, k = this._rawPrevTime, P = this._time;
                            if (this._totalTime = b * f, this._cycle < b ? x = !x : this._totalTime += f, this._time = g, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = b, this._locked = !0, g = x ? 0 : f, this.render(g, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (g = x ? f + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !w)return;
                            this._time = P, this._totalTime = S, this._cycle = C, this._rawPrevTime = k
                        }
                        if (!(this._time !== g && this._first || i || c))return void(_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= g)for (n = this._first; n && (u = n._next, !this._paused || w);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u; else for (n = this._last; n && (u = n._prev, !this._paused || w);)(n._active || n._startTime <= g && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
                        this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), h && (this._locked || this._gc || (m === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)))
                    }, h.getActive = function (t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
                        for (n = 0; l > n; n++)r = o[n], r.isActive() && (s[a++] = r);
                        return s
                    }, h.getLabelAfter = function (t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(), n = i.length;
                        for (e = 0; n > e; e++)if (i[e].time > t)return i[e].name;
                        return null
                    }, h.getLabelBefore = function (t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (e[i].time < t)return e[i].name;
                        return null
                    }, h.getLabelsArray = function () {
                        var t, e = [], i = 0;
                        for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
                        return e.sort(function (t, e) {
                            return t.time - e.time
                        }), e
                    }, h.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }, h.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }, h.totalDuration = function (e) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, h.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, h.repeat = function (t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, h.repeatDelay = function (t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, h.yoyo = function (t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, h.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, n
                }, !0), function () {
                    var t = 180 / Math.PI, e = [], n = [], r = [], s = {}, o = i._gsDefine.globals, a = function (t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    }, l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", u = function (t, e, i, n) {
                        var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, u = (e + i) / 2, h = (i + n) / 2, c = (l + u) / 2, d = (u + h) / 2, p = (d - c) / 8;
                        return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + d) / 2, o.b = d - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    }, h = function (t, i, s, o, a) {
                        var l, h, c, d, p, f, g, _, m, v, y, w, b, x = t.length - 1, T = 0, S = t[0].a;
                        for (l = 0; x > l; l++)p = t[T], h = p.a, c = p.d, d = t[T + 1].d, a ? (y = e[l], w = n[l], b = (w + y) * i * .25 / (o ? .5 : r[l] || .5), f = c - (c - h) * (o ? .5 * i : 0 !== y ? b / y : 0), g = c + (d - c) * (o ? .5 * i : 0 !== w ? b / w : 0), _ = c - (f + ((g - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = c - (c - h) * i * .5, g = c + (d - c) * i * .5, _ = c - (f + g) / 2), f += _, g += _, p.c = m = f, p.b = 0 !== l ? S : S = p.a + .6 * (p.c - p.a), p.da = c - h, p.ca = m - h, p.ba = S - h, s ? (v = u(h, S, m, c), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, S = g;
                        p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (v = u(p.a, S, p.c, p.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    }, c = function (t, i, r, s) {
                        var o, l, u, h, c, d, p = [];
                        if (s)for (t = [s].concat(t), l = t.length; --l > -1;)"string" == typeof(d = t[l][i]) && "=" === d.charAt(1) && (t[l][i] = s[i] + Number(d.charAt(0) + d.substr(2)));
                        if (o = t.length - 2, 0 > o)return p[0] = new a(t[0][i], 0, 0, t[-1 > o ? 0 : 1][i]), p;
                        for (l = 0; o > l; l++)u = t[l][i], h = t[l + 1][i], p[l] = new a(u, 0, 0, h), r && (c = t[l + 2][i], e[l] = (e[l] || 0) + (h - u) * (h - u), n[l] = (n[l] || 0) + (c - h) * (c - h));
                        return p[l] = new a(t[l][i], 0, 0, t[l + 1][i]), p
                    }, d = function (t, i, o, a, u, d) {
                        var p, f, g, _, m, v, y, w, b = {}, x = [], T = d || t[0];
                        u = "string" == typeof u ? "," + u + "," : l, null == i && (i = 1);
                        for (f in t[0])x.push(f);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], y = !0, p = x.length; --p > -1;)if (f = x[p], Math.abs(T[f] - w[f]) > .05) {
                                y = !1;
                                break
                            }
                            y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                        }
                        for (e.length = n.length = r.length = 0, p = x.length; --p > -1;)f = x[p], s[f] = -1 !== u.indexOf("," + f + ","), b[f] = c(t, f, s[f], d);
                        for (p = e.length; --p > -1;)e[p] = Math.sqrt(e[p]), n[p] = Math.sqrt(n[p]);
                        if (!a) {
                            for (p = x.length; --p > -1;)if (s[f])for (g = b[x[p]], v = g.length - 1, _ = 0; v > _; _++)m = g[_ + 1].da / n[_] + g[_].da / e[_], r[_] = (r[_] || 0) + m * m;
                            for (p = r.length; --p > -1;)r[p] = Math.sqrt(r[p])
                        }
                        for (p = x.length, _ = o ? 4 : 1; --p > -1;)f = x[p], g = b[f], h(g, i, o, a, s[f]), y && (g.splice(0, _), g.splice(g.length - _, _));
                        return b
                    }, p = function (t, e, i) {
                        e = e || "soft";
                        var n, r, s, o, l, u, h, c, d, p, f, g = {}, _ = "cubic" === e ? 3 : 2, m = "soft" === e, v = [];
                        if (m && i && (t = [i].concat(t)), null == t || t.length < _ + 1)throw"invalid Bezier data";
                        for (d in t[0])v.push(d);
                        for (u = v.length; --u > -1;) {
                            for (d = v[u], g[d] = l = [], p = 0, c = t.length, h = 0; c > h; h++)n = null == i ? t[h][d] : "string" == typeof(f = t[h][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), m && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (c = p - _ + 1, p = 0, h = 0; c > h; h += _)n = l[h], r = l[h + 1], s = l[h + 2], o = 2 === _ ? 0 : l[h + 3], l[p++] = f = 3 === _ ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return g
                    }, f = function (t, e, i) {
                        for (var n, r, s, o, a, l, u, h, c, d, p, f = 1 / i, g = t.length; --g > -1;)for (d = t[g], s = d.a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, h = 1; i >= h; h++)u = f * h, c = 1 - u, n = r - (r = (u * u * o + 3 * c * (u * a + c * l)) * u), p = g * i + h - 1, e[p] = (e[p] || 0) + n * n
                    }, g = function (t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [], a = [], l = 0, u = 0, h = e - 1, c = [], d = [];
                        for (i in t)f(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++)l += Math.sqrt(o[n]), s = n % e, d[s] = l, s === h && (u += l, s = n / e >> 0, c[s] = d, a[s] = u, l = 0, d = []);
                        return {length: u, lengths: a, segments: c}
                    }, _ = i._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [], u = {}, h = l[0], c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null;
                            for (n in h)this._props.push(n);
                            for (s = this._props.length; --s > -1;)n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var f = g(this._beziers, this._timeRes);
                                this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), s = c.length; --s > -1;) {
                                for (o = 0; 3 > o; o++)n = c[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                n = c[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                            }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, n, r, s, o, a, l, u, h, c, d = this._segCount, p = this._func, f = this._target, g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && d - 1 > r) {
                                    for (u = d - 1; u > r && (this._l2 = h[++r]) <= e;);
                                    this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = h[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                    for (u = c.length - 1; u > r && (this._s2 = c[++r]) <= e;);
                                    this._s1 = c[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                            for (n = 1 - a, r = this._props.length; --r > -1;)s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)),
                                p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var _, m, v, y, w, b, x, T = this._autoRotate;
                                for (r = T.length; --r > -1;)s = T[r][2], b = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], _ = this._beziers[T[r][1]], o && _ && (o = o[i], _ = _[i], m = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, m += (y - m) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = _.a + (_.b - _.a) * a, w = _.b + (_.c - _.b) * a, v += (w - v) * a, w += (_.c + (_.d - _.c) * a - w) * a, l = g ? Math.atan2(w - v, y - m) * x + b : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }), m = _.prototype;
                    _.bezierThrough = d, _.cubicToQuadratic = u, _._autoCSS = !0, _.quadraticToCubic = function (t, e, i) {
                        return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                    }, _._cssRegister = function () {
                        var t = o.CSSPlugin;
                        if (t) {
                            var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function (t, e, s, o, a, l) {
                                    e instanceof Array && (e = {values: e}), l = new _;
                                    var u, h, c, d = e.values, p = d.length - 1, f = [], g = {};
                                    if (0 > p)return a;
                                    for (u = 0; p >= u; u++)c = i(t, d[u], o, a, l, p !== u), f[u] = c.end;
                                    for (h in e)g[h] = e[h];
                                    return g.values = f, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [["left", "top", "rotation", u, !1]] : null != c.end.x ? [["x", "y", "rotation", u, !1]] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), l._onInitTween(c.proxy, g, o._tween), a
                                }
                            })
                        }
                    }, m._roundProps = function (t, e) {
                        for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                    }, m._kill = function (t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;)n[i] === e && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(), i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                    var n, r, s, o, a = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    }, l = i._gsDefine.globals, u = {}, h = a.prototype = new t("css");
                    h.constructor = a, a.version = "1.16.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                        top: h,
                        right: h,
                        bottom: h,
                        left: h,
                        width: h,
                        height: h,
                        fontSize: h,
                        padding: h,
                        margin: h,
                        perspective: h,
                        lineHeight: ""
                    };
                    var c, d, p, f, g, _, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, C = /^(rgb|hsl)/, k = /([A-Z])/g, P = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function (t, e) {
                        return e.toUpperCase()
                    }, E = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, R = /,(?=[^\)]*(?:\(|$))/gi, j = Math.PI / 180, z = 180 / Math.PI, L = {}, N = document, I = function (t) {
                        return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    }, F = I("div"), $ = I("img"), B = a._internals = {_specialProps: u}, q = navigator.userAgent, H = function () {
                        var t = q.indexOf("Android"), e = I("a");
                        return p = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), g = p && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (_ = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(), W = function (t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    }, V = function (t) {
                        window.console && console.log(t)
                    }, U = "", X = "", Y = function (t, e) {
                        e = e || F;
                        var i, n, r = e.style;
                        if (void 0 !== r[t])return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (X = 3 === n ? "ms" : i[n], U = "-" + X.toLowerCase() + "-", X + t) : null
                    }, G = N.defaultView ? N.defaultView.getComputedStyle : function () {
                        }, Z = a.getStyle = function (t, e, i, n, r) {
                        var s;
                        return H || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || G(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : W(t)
                    }, Q = B.convertToPixels = function (t, i, n, r, s) {
                        if ("px" === r || !r)return n;
                        if ("auto" === r || !n)return 0;
                        var o, l, u, h = E.test(i), c = t, d = F.style, p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (h ? t.clientWidth : t.clientHeight); else {
                            if (d.cssText = "border:0 solid red;position:" + Z(t, "position") + ";line-height:0;", "%" !== r && c.appendChild) d[h ? "borderLeftWidth" : "borderTopWidth"] = n + r; else {
                                if (c = t.parentNode || N.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u)return l.width * n / 100;
                                d[h ? "width" : "height"] = n + r
                            }
                            c.appendChild(F), o = parseFloat(F[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(F), h && "%" === r && a.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = o / n * 100), 0 !== o || s || (o = Q(t, i, n, r, !0))
                        }
                        return p ? -o : o
                    }, J = B.calculateOffset = function (t, e, i) {
                        if ("absolute" !== Z(t, "position", i))return 0;
                        var n = "left" === e ? "Left" : "Top", r = Z(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(b, "")) || 0)
                    }, K = function (t, e) {
                        var i, n, r, s = {};
                        if (e = e || G(t, null))if (i = e.length)for (; --i > -1;)r = e[i], (-1 === r.indexOf("-transform") || St === r) && (s[r.replace(P, O)] = e.getPropertyValue(r)); else for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (s[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === s[i] && (s[i.replace(P, O)] = e[i]);
                        return H || (s.opacity = W(t)), n = Rt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, kt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    }, tt = function (t, e, i, n, r) {
                        var s, o, a, l = {}, u = t.style;
                        for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : J(t, o), void 0 !== u[o] && (a = new ft(u, o, u[o], a)));
                        if (n)for (o in n)"className" !== o && (l[o] = n[o]);
                        return {difs: l, firstMPT: a}
                    }, et = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    }, it = ["marginLeft", "marginRight", "marginTop", "marginBottom"], nt = function (t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = et[e], s = r.length;
                        for (i = i || G(t, null); --s > -1;)n -= parseFloat(Z(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Z(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    }, rt = function (t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(w, "")), e.oy = parseFloat(r.replace(w, "")), e.v = t), e || t
                    }, st = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    }, ot = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    }, at = function (t, e, i, n) {
                        var r, s, o, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : z) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    }, lt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    }, ut = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    }, ht = a.parseColor = function (t) {
                        var e, i, n, r, s, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t] ? lt[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ut(r + 1 / 3, e, i), t[1] = ut(r, e, i), t[2] = ut(r - 1 / 3, e, i), t) : (t = t.match(m) || lt.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : lt.black
                    }, ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                    for (h in lt)ct += "|" + h + "\\b";
                    ct = new RegExp(ct + ")", "gi");
                    var dt = function (t, e, i, n) {
                        if (null == t)return function (t) {
                            return t
                        };
                        var r, s = e ? (t.match(ct) || [""])[0] : "", o = t.split(s).join("").match(y) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", h = o.length, c = h > 0 ? o[0].replace(m, "") : "";
                        return h ? r = e ? function (t) {
                                    var e, d, p, f;
                                    if ("number" == typeof t) t += c; else if (n && R.test(t)) {
                                        for (f = t.replace(R, "|").split("|"), p = 0; p < f.length; p++)f[p] = r(f[p]);
                                        return f.join(",")
                                    }
                                    if (e = (t.match(ct) || [s])[0], d = t.split(e).join("").match(y) || [], p = d.length, h > p--)for (; ++p < h;)d[p] = i ? d[(p - 1) / 2 | 0] : o[p];
                                    return a + d.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                                } : function (t) {
                                    var e, s, d;
                                    if ("number" == typeof t) t += c; else if (n && R.test(t)) {
                                        for (s = t.replace(R, "|").split("|"), d = 0; d < s.length; d++)s[d] = r(s[d]);
                                        return s.join(",")
                                    }
                                    if (e = t.match(y) || [], d = e.length, h > d--)for (; ++d < h;)e[d] = i ? e[(d - 1) / 2 | 0] : o[d];
                                    return a + e.join(u) + l
                                } : function (t) {
                                return t
                            }
                    }, pt = function (t) {
                        return t = t.split(","), function (e, i, n, r, s, o, a) {
                            var l, u = (i + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++)a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return r.parse(e, a, s, o)
                        }
                    }, ft = (B._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;)e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)for (a = s.firstMPT; a;) {
                            if (i = a.t, i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)r += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            a = a._next
                        }
                    }, function (t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }), gt = (B._parseToProxy = function (t, e, i, n, r, s) {
                        var o, a, l, u, h, c = n, d = {}, p = {}, f = i._transform, g = L;
                        for (i._transform = null, L = e, n = h = i.parse(t, e, n, r), L = g, s && (i._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, s || (u = new ft(n, "s", a, u, n.r), n.c = 0), 1 === n.type))for (o = n.l; --o > 0;)l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], d[a] = n[l], s || (u = new ft(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {proxy: d, end: p, firstMPT: u, pt: h}
                    }, B.CSSPropTween = function (t, e, i, r, s, a, l, u, h, c, d) {
                        this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof gt || o.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, n = !0), this.b = void 0 === c ? i : c, this.e = void 0 === d ? i + r : d, s && (this._next = s, s._prev = this)
                    }), _t = a.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
                        i = i || s || "", o = new gt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var h, d, p, f, g, _, y, w, b, x, T, S, k = i.split(", ").join(",").split(" "), P = n.split(", ").join(",").split(" "), A = k.length, O = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(R, ", ").split(" "), P = P.join(" ").replace(R, ", ").split(" "), A = k.length), A !== P.length && (k = (s || "").split(" "), A = k.length), o.plugin = l, o.setRatio = u, h = 0; A > h; h++)if (f = k[h], g = P[h], w = parseFloat(f), w || 0 === w) o.appendXtra("", w, st(g, w), g.replace(v, ""), O && -1 !== g.indexOf("px"), !0); else if (r && ("#" === f.charAt(0) || lt[f] || C.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = ht(f), g = ht(g), b = f.length + g.length > 6, b && !H && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[h]).join("transparent")) : (H || (b = !1), o.appendXtra(b ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], b ? "," : S, !0), b && (f = f.length < 4 ? 1 : f[3], o.appendXtra("", f, (g.length < 4 ? 1 : g[3]) - f, S, !1))); else if (_ = f.match(m)) {
                            if (y = g.match(v), !y || y.length !== _.length)return o;
                            for (p = 0, d = 0; d < _.length; d++)T = _[d], x = f.indexOf(T, p), o.appendXtra(f.substr(p, x - p), Number(T), st(y[d], T), "", O && "px" === f.substr(x + T.length, 2), 0 === d), p = x + T.length;
                            o["xs" + o.l] += f.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (S = o.xs0 + o.data.s, h = 1; h < o.l; h++)S += o["xs" + h] + o.data["xn" + h];
                            o.e = S + o["xs" + h]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    }, mt = 9;
                    for (h = gt.prototype, h.l = h.pr = 0; --mt > 0;)h["xn" + mt] = 0, h["xs" + mt] = "";
                    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, n, r, s) {
                        var o = this, a = o.l;
                        return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new gt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                    };
                    var vt = function (t, e) {
                        e = e || {}, this.p = e.prefix ? Y(t) || t : t, u[t] = u[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    }, yt = B._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {parser: i});
                        var n, r, s = t.split(","), o = e.defaultValue;
                        for (i = i || [o], n = 0; n < s.length; n++)e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new vt(s[n], e)
                    }, wt = function (t) {
                        if (!u[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            yt(t, {
                                parser: function (t, i, n, r, s, o, a) {
                                    var h = l.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), u[n].parse(t, i, n, r, s, o, a)) : (V("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                    h = vt.prototype, h.parseComplex = function (t, e, i, n, r, s) {
                        var o, a, l, u, h, c, d = this.keyword;
                        if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : d && (a = [e], l = [i])), l) {
                            for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++)e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (h = e.indexOf(d), c = i.indexOf(d), h !== c && (-1 === c ? a[o] = a[o].split(d).join("") : -1 === h && (a[o] += " " + d)));
                            e = a.join(", "), i = l.join(", ")
                        }
                        return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                    }, h.parse = function (t, e, i, n, r, o, a) {
                        return this.parseComplex(t.style, this.format(Z(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                    }, a.registerSpecialProp = function (t, e, i) {
                        yt(t, {
                            parser: function (t, n, r, s, o, a, l) {
                                var u = new gt(t, r, 0, 0, o, 2, r, !1, i);
                                return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                            }, priority: i
                        })
                    }, a.useSVGTransformAttr = p;
                    var bt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Tt = Y("transform"), St = U + "transform", Ct = Y("transformOrigin"), kt = null !== Y("perspective"), Pt = B.Transform = function () {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && kt ? a.defaultForce3D || "auto" : !1
                    }, At = window.SVGElement, Ot = function (t, e, i) {
                        var n, r = N.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
                        for (n in i)r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    }, Et = N.documentElement, Mt = function () {
                        var t, e, i, n = _ || /Android/i.test(q) && !window.chrome;
                        return N.createElementNS && !n && (t = Ot("svg", Et), e = Ot("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && kt), Et.removeChild(t)), n
                    }(), Dt = function (t, e, i, n) {
                        var r, s;
                        n && (s = n.split(" ")).length || (r = t.getBBox(), e = rt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * r.width : parseFloat(e[0])) + r.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * r.height : parseFloat(e[1])) + r.y]), i.xOrigin = parseFloat(s[0]), i.yOrigin = parseFloat(s[1]), t.setAttribute("data-svg-origin", s.join(" "))
                    }, Rt = B.getTransform = function (t, e, i, n) {
                        if (t._gsTransform && i && !n)return t._gsTransform;
                        var r, o, l, u, h, c, d, p, f, g, _ = i ? t._gsTransform || new Pt : new Pt, m = _.scaleX < 0, v = 2e-5, y = 1e5, w = kt ? parseFloat(Z(t, Ct, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0, b = parseFloat(a.defaultTransformPerspective) || 0;
                        if (Tt ? o = Z(t, St, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(M), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), _.x || 0, _.y || 0].join(",") : ""), r = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, _.svg = !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), _.svg && (r && -1 !== (t.style[Tt] + "").indexOf("matrix") && (o = t.style[Tt], r = !1), Dt(t, Z(t, Ct, s, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")), bt = a.useSVGTransformAttr || Mt, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (o = l, r = 0)), !r) {
                            for (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = l.length; --u > -1;)h = Number(l[u]), l[u] = (c = h - (h |= 0)) ? (c * y + (0 > c ? -.5 : .5) | 0) / y + h : h;
                            if (16 === l.length) {
                                var x, T, S, C, k, P = l[0], A = l[1], O = l[2], E = l[3], D = l[4], R = l[5], j = l[6], L = l[7], N = l[8], I = l[9], F = l[10], $ = l[12], B = l[13], q = l[14], H = l[11], W = Math.atan2(j, F);
                                _.zOrigin && (q = -_.zOrigin, $ = N * q - l[12], B = I * q - l[13], q = F * q + _.zOrigin - l[14]), _.rotationX = W * z, W && (C = Math.cos(-W), k = Math.sin(-W), x = D * C + N * k, T = R * C + I * k, S = j * C + F * k, N = D * -k + N * C, I = R * -k + I * C, F = j * -k + F * C, H = L * -k + H * C, D = x, R = T, j = S), W = Math.atan2(N, F), _.rotationY = W * z, W && (C = Math.cos(-W), k = Math.sin(-W), x = P * C - N * k, T = A * C - I * k, S = O * C - F * k, I = A * k + I * C, F = O * k + F * C, H = E * k + H * C, P = x, A = T, O = S), W = Math.atan2(A, P), _.rotation = W * z, W && (C = Math.cos(-W), k = Math.sin(-W), P = P * C + D * k, T = A * C + R * k, R = A * -k + R * C, j = O * -k + j * C, A = T), _.rotationX && Math.abs(_.rotationX) + Math.abs(_.rotation) > 359.9 && (_.rotationX = _.rotation = 0, _.rotationY += 180), _.scaleX = (Math.sqrt(P * P + A * A) * y + .5 | 0) / y, _.scaleY = (Math.sqrt(R * R + I * I) * y + .5 | 0) / y, _.scaleZ = (Math.sqrt(j * j + F * F) * y + .5 | 0) / y, _.skewX = 0, _.perspective = H ? 1 / (0 > H ? -H : H) : 0, _.x = $, _.y = B, _.z = q, _.svg && (_.x -= _.xOrigin - (_.xOrigin * P - _.yOrigin * D), _.y -= _.yOrigin - (_.yOrigin * A - _.xOrigin * R))
                            } else if (!(kt && !n && l.length && _.x === l[4] && _.y === l[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === Z(t, "display", e))) {
                                var V = l.length >= 6, U = V ? l[0] : 1, X = l[1] || 0, Y = l[2] || 0, G = V ? l[3] : 1;
                                _.x = l[4] || 0, _.y = l[5] || 0, d = Math.sqrt(U * U + X * X), p = Math.sqrt(G * G + Y * Y), f = U || X ? Math.atan2(X, U) * z : _.rotation || 0, g = Y || G ? Math.atan2(Y, G) * z + f : _.skewX || 0, Math.abs(g) > 90 && Math.abs(g) < 270 && (m ? (d *= -1, g += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (p *= -1, g += 0 >= g ? 180 : -180)), _.scaleX = d, _.scaleY = p, _.rotation = f, _.skewX = g, kt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = b, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * U - _.yOrigin * X), _.y -= _.yOrigin - (_.yOrigin * G - _.xOrigin * Y))
                            }
                            _.zOrigin = w;
                            for (u in _)_[u] < v && _[u] > -v && (_[u] = 0)
                        }
                        return i && (t._gsTransform = _, _.svg && (bt && t.style[Tt] ? Nt(t.style, Tt) : !bt && t.getAttribute("transform") && t.removeAttribute("transform"))), _
                    }, jt = function (t) {
                        var e, i, n = this.data, r = -n.rotation * j, s = r + n.skewX * j, o = 1e5, a = (Math.cos(r) * n.scaleX * o | 0) / o, l = (Math.sin(r) * n.scaleX * o | 0) / o, u = (Math.sin(s) * -n.scaleY * o | 0) / o, h = (Math.cos(s) * n.scaleY * o | 0) / o, c = this.t.style, d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -u, u = -i, e = d.filter, c.filter = "";
                            var p, f, g = this.t.offsetWidth, m = this.t.offsetHeight, v = "absolute" !== d.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h, w = n.x + g * n.xPercent / 100, T = n.y + m * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2, w += p - (p * a + f * l), T += f - (p * u + f * h)), v ? (p = g / 2, f = m / 2, y += ", Dx=" + (p - (p * a + f * l) + w) + ", Dy=" + (f - (p * u + f * h) + T) + ")") : y += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                var S, C, k, P = 8 > _ ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * m)) / 2 + w), n.ieOffsetY = Math.round((m - ((0 > h ? -h : h) * m + (0 > u ? -u : u) * g)) / 2 + T), mt = 0; 4 > mt; mt++)C = it[mt], S = d[C], i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, C, parseFloat(S), S.replace(b, "")) || 0, k = i !== n[C] ? 2 > mt ? -n.ieOffsetX : -n.ieOffsetY : 2 > mt ? p - n.ieOffsetX : f - n.ieOffsetY, c[C] = (n[C] = Math.round(i - k * (0 === mt || 2 === mt ? 1 : P))) + "px"
                            }
                        }
                    }, zt = B.set3DTransformRatio = B.setTransformRatio = function (t) {
                        var e, i, n, r, s, o, a, l, u, h, c, d, p, g, _, m, v, y, w, b, x, T, S, C = this.data, k = this.t.style, P = C.rotation, A = C.rotationX, O = C.rotationY, E = C.scaleX, M = C.scaleY, D = C.scaleZ, R = C.x, z = C.y, L = C.z, N = C.svg, I = C.perspective, F = C.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || L || I || O || A) && (!bt || !N) && kt))return void(P || C.skewX || N ? (P *= j, T = C.skewX * j, S = 1e5, e = Math.cos(P) * E, r = Math.sin(P) * E, i = Math.sin(P - T) * -M, s = Math.cos(P - T) * M, T && "simple" === C.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, C.skewY && (e *= v, r *= v)), N && (R += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), z += C.yOrigin - (C.xOrigin * r + C.yOrigin * s), g = 1e-6, g > R && R > -g && (R = 0), g > z && z > -g && (z = 0)), w = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (s * S | 0) / S + "," + R + "," + z + ")", N && bt ? this.t.setAttribute("transform", "matrix(" + w) : k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + w) : k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + M + "," + R + "," + z + ")");
                        if (f && (g = 1e-4, g > E && E > -g && (E = D = 2e-5), g > M && M > -g && (M = D = 2e-5), !I || C.z || C.rotationX || C.rotationY || (I = 0)), P || C.skewX) P *= j, _ = e = Math.cos(P), m = r = Math.sin(P), C.skewX && (P -= C.skewX * j, _ = Math.cos(P), m = Math.sin(P), "simple" === C.skewType && (v = Math.tan(C.skewX * j), v = Math.sqrt(1 + v * v), _ *= v, m *= v, C.skewY && (e *= v, r *= v))), i = -m, s = _; else {
                            if (!(O || A || 1 !== D || I || N))return void(k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + z + "px," + L + "px)" + (1 !== E || 1 !== M ? " scale(" + E + "," + M + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = h = c = 0, d = I ? -1 / I : 0, p = C.zOrigin, g = 1e-6, b = ",", x = "0", P = O * j, P && (_ = Math.cos(P), m = Math.sin(P), a = -m, h = d * -m, n = e * m, o = r * m, u = _, d *= _, e *= _, r *= _), P = A * j, P && (_ = Math.cos(P), m = Math.sin(P), v = i * _ + n * m, y = s * _ + o * m, l = u * m, c = d * m, n = i * -m + n * _, o = s * -m + o * _, u *= _, d *= _, i = v, s = y), 1 !== D && (n *= D, o *= D, u *= D, d *= D), 1 !== M && (i *= M, s *= M, l *= M, c *= M), 1 !== E && (e *= E, r *= E, a *= E, h *= E), (p || N) && (p && (R += n * -p, z += o * -p, L += u * -p + p), N && (R += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), z += C.yOrigin - (C.xOrigin * r + C.yOrigin * s)), g > R && R > -g && (R = x), g > z && z > -g && (z = x), g > L && L > -g && (L = 0)), w = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", w += (g > e && e > -g ? x : e) + b + (g > r && r > -g ? x : r) + b + (g > a && a > -g ? x : a), w += b + (g > h && h > -g ? x : h) + b + (g > i && i > -g ? x : i) + b + (g > s && s > -g ? x : s), A || O ? (w += b + (g > l && l > -g ? x : l) + b + (g > c && c > -g ? x : c) + b + (g > n && n > -g ? x : n), w += b + (g > o && o > -g ? x : o) + b + (g > u && u > -g ? x : u) + b + (g > d && d > -g ? x : d) + b) : w += ",0,0,0,0,1,0,", w += R + b + z + b + L + b + (I ? 1 + -L / I : 1) + ")", k[Tt] = w
                    };
                    h = Pt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                        parser: function (t, e, i, n, r, o, l) {
                            if (n._lastParsedTransform === l)return r;
                            n._lastParsedTransform = l;
                            var u, h, c, d, p, f, g, _ = n._transform = Rt(t, s, !0, l.parseTransform), m = t.style, v = 1e-6, y = xt.length, w = l, b = {};
                            if ("string" == typeof w.transform && Tt) c = F.style, c[Tt] = w.transform, c.display = "block", c.position = "absolute", N.body.appendChild(F), u = Rt(F, null, !1), N.body.removeChild(F); else if ("object" == typeof w) {
                                if (u = {
                                        scaleX: ot(null != w.scaleX ? w.scaleX : w.scale, _.scaleX),
                                        scaleY: ot(null != w.scaleY ? w.scaleY : w.scale, _.scaleY),
                                        scaleZ: ot(w.scaleZ, _.scaleZ),
                                        x: ot(w.x, _.x),
                                        y: ot(w.y, _.y),
                                        z: ot(w.z, _.z),
                                        xPercent: ot(w.xPercent, _.xPercent),
                                        yPercent: ot(w.yPercent, _.yPercent),
                                        perspective: ot(w.transformPerspective, _.perspective)
                                    }, g = w.directionalRotation, null != g)if ("object" == typeof g)for (c in g)w[c] = g[c]; else w.rotation = g;
                                "string" == typeof w.x && -1 !== w.x.indexOf("%") && (u.x = 0, u.xPercent = ot(w.x, _.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (u.y = 0, u.yPercent = ot(w.y, _.yPercent)), u.rotation = at("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : _.rotation, _.rotation, "rotation", b), kt && (u.rotationX = at("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", b), u.rotationY = at("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", b)), u.skewX = null == w.skewX ? _.skewX : at(w.skewX, _.skewX), u.skewY = null == w.skewY ? _.skewY : at(w.skewY, _.skewY), (h = u.skewY - _.skewY) && (u.skewX += h, u.rotation += h)
                            }
                            for (kt && null != w.force3D && (_.force3D = w.force3D, f = !0), _.skewType = w.skewType || _.skewType || a.defaultSkewType, p = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == w.scale || (u.scaleZ = 1); --y > -1;)i = xt[y], d = u[i] - _[i], (d > v || -v > d || null != w[i] || null != L[i]) && (f = !0, r = new gt(_, i, _[i], d, r), i in b && (r.e = b[i]), r.xs0 = 0, r.plugin = o, n._overwriteProps.push(r.n));
                            return d = w.transformOrigin, _.svg && (d || w.svgOrigin) && (Dt(t, rt(d), u, w.svgOrigin), r = new gt(_, "xOrigin", _.xOrigin, u.xOrigin - _.xOrigin, r, -1, "transformOrigin"), r.b = _.xOrigin, r.e = r.xs0 = u.xOrigin, r = new gt(_, "yOrigin", _.yOrigin, u.yOrigin - _.yOrigin, r, -1, "transformOrigin"), r.b = _.yOrigin, r.e = r.xs0 = u.yOrigin, d = bt ? null : "0px 0px"), (d || kt && p && _.zOrigin) && (Tt ? (f = !0, i = Ct, d = (d || Z(t, i, s, !1, "50% 50%")) + "", r = new gt(m, i, 0, 0, r, -1, "transformOrigin"), r.b = m[i], r.plugin = o, kt ? (c = _.zOrigin, d = d.split(" "), _.zOrigin = (d.length > 2 && (0 === c || "0px" !== d[2]) ? parseFloat(d[2]) : c) || 0, r.xs0 = r.e = d[0] + " " + (d[1] || "50%") + " 0px", r = new gt(_, "zOrigin", 0, 0, r, -1, r.n), r.b = c, r.xs0 = r.e = _.zOrigin) : r.xs0 = r.e = d) : rt(d + "", _)), f && (n._transformType = _.svg && bt || !p && 3 !== this._transformType ? 2 : 3), r
                        }, prefix: !0
                    }), yt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), yt("borderRadius", {
                        defaultValue: "0px", parser: function (t, e, i, n, o, a) {
                            e = this.format(e);
                            var l, u, h, c, d, p, f, g, _, m, v, y, w, b, x, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], C = t.style;
                            for (_ = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++)this.p.indexOf("border") && (S[u] = Y(S[u])), d = c = Z(t, S[u], s, !1, "0px"), -1 !== d.indexOf(" ") && (c = d.split(" "), d = c[0], c = c[1]), p = h = l[u], f = parseFloat(d), y = d.substr((f + "").length), w = "=" === p.charAt(1), w ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), v = p.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(p), v = p.substr((g + "").length)), "" === v && (v = r[i] || y), v !== y && (b = Q(t, "borderLeft", f, y), x = Q(t, "borderTop", f, y), "%" === v ? (d = b / _ * 100 + "%", c = x / m * 100 + "%") : "em" === v ? (T = Q(t, "borderLeft", 1, "em"), d = b / T + "em", c = x / T + "em") : (d = b + "px", c = x + "px"), w && (p = parseFloat(d) + g + v, h = parseFloat(c) + g + v)), o = _t(C, S[u], d + " " + c, p + " " + h, !1, "0px", o);
                            return o
                        }, prefix: !0, formatter: dt("0px 0px 0px 0px", !1, !0)
                    }), yt("backgroundPosition", {
                        defaultValue: "0 0", parser: function (t, e, i, n, r, o) {
                            var a, l, u, h, c, d, p = "background-position", f = s || G(t, null), g = this.format((f ? _ ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), m = this.format(e);
                            if (-1 !== g.indexOf("%") != (-1 !== m.indexOf("%")) && (d = Z(t, "backgroundImage").replace(A, ""), d && "none" !== d)) {
                                for (a = g.split(" "), l = m.split(" "), $.setAttribute("src", d), u = 2; --u > -1;)g = a[u], h = -1 !== g.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - $.width : t.offsetHeight - $.height, a[u] = h ? parseFloat(g) / 100 * c + "px" : parseFloat(g) / c * 100 + "%");
                                g = a.join(" ")
                            }
                            return this.parseComplex(t.style, g, m, r, o)
                        }, formatter: rt
                    }), yt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: rt
                    }), yt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), yt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), yt("transformStyle", {prefix: !0}), yt("backfaceVisibility", {prefix: !0}), yt("userSelect", {prefix: !0}), yt("margin", {parser: pt("marginTop,marginRight,marginBottom,marginLeft")}), yt("padding", {parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), yt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (t, e, i, n, r, o) {
                            var a, l, u;
                            return 9 > _ ? (l = t.currentStyle, u = 8 > _ ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Z(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                        }
                    }), yt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), yt("autoRound,strictUnits", {
                        parser: function (t, e, i, n, r) {
                            return r
                        }
                    }), yt("border", {
                        defaultValue: "0px solid #000", parser: function (t, e, i, n, r, o) {
                            return this.parseComplex(t.style, this.format(Z(t, "borderTopWidth", s, !1, "0px") + " " + Z(t, "borderTopStyle", s, !1, "solid") + " " + Z(t, "borderTopColor", s, !1, "#000")), this.format(e), r, o)
                        }, color: !0, formatter: function (t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
                        }
                    }), yt("borderWidth", {parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), yt("float,cssFloat,styleFloat", {
                        parser: function (t, e, i, n, r, s) {
                            var o = t.style, a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                            return new gt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                        }
                    });
                    var Lt = function (t) {
                        var e, i = this.t, n = i.filter || Z(this.data, "filter") || "", r = this.s + this.c * t | 0;
                        100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Z(this.data, "filter")) : (i.filter = n.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                    };
                    yt("opacity,alpha,autoAlpha", {
                        defaultValue: "1", parser: function (t, e, i, n, r, o) {
                            var a = parseFloat(Z(t, "opacity", s, !1, "1")), l = t.style, u = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Z(t, "visibility", s) && 0 !== e && (a = 0), H ? r = new gt(l, "opacity", a, e - a, r) : (r = new gt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = u ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Lt), u && (r = new gt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                        }
                    });
                    var Nt = function (t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    }, It = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : Nt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                    yt("className", {
                        parser: function (t, e, i, r, o, a, l) {
                            var u, h, c, d, p, f = t.getAttribute("class") || "", g = t.style.cssText;
                            if (o = r._classNamePT = new gt(t, i, 0, 0, o, 2), o.setRatio = It, o.pr = -11, n = !0, o.b = f, h = K(t, s), c = t._gsClassPT) {
                                for (d = {}, p = c.data; p;)d[p.p] = 1, p = p._next;
                                c.setRatio(1)
                            }
                            return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = tt(t, h, K(t), l, d), t.setAttribute("class", f), o.data = u.firstMPT, t.style.cssText = g, o = o.xfirst = r.parse(t, u.difs, o, a)
                        }
                    });
                    var Ft = function (t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, i, n, r, s, o = this.t.style, a = u.transform.parse;
                            if ("all" === this.e) o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;)i = e[n], u[i] && (u[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ct : u[i].p), Nt(o, i);
                            r && (Nt(o, Tt), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                        }
                    };
                    for (yt("clearProps", {
                        parser: function (t, e, i, r, s) {
                            return s = new gt(t, i, 0, 0, s, 2), s.setRatio = Ft, s.e = e,
                                s.pr = -10, s.data = r._tween, n = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), mt = h.length; mt--;)wt(h[mt]);
                    h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, i) {
                        if (!t.nodeType)return !1;
                        this._target = t, this._tween = i, this._vars = e, c = e.autoRound, n = !1, r = e.suffixMap || a.suffixMap, s = G(t, ""), o = this._overwriteProps;
                        var l, h, f, _, m, v, y, w, b, x = t.style;
                        if (d && "" === x.zIndex && (l = Z(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (_ = x.cssText, l = K(t, s), x.cssText = _ + ";" + e, l = tt(t, l, K(t)).difs, !H && T.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, x.cssText = _), this._firstPT = h = e.className ? u.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                            for (b = 3 === this._transformType, Tt ? p && (d = !0, "" === x.zIndex && (y = Z(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), g && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : x.zoom = 1, f = h; f && f._next;)f = f._next;
                            w = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, f), w.setRatio = Tt ? zt : jt, w.data = this._transform || Rt(t, s, !0), w.tween = i, w.pr = -1, o.pop()
                        }
                        if (n) {
                            for (; h;) {
                                for (v = h._next, f = _; f && f.pr > h.pr;)f = f._next;
                                (h._prev = f ? f._prev : m) ? h._prev._next = h : _ = h, (h._next = f) ? f._prev = h : m = h, h = v
                            }
                            this._firstPT = _
                        }
                        return !0
                    }, h.parse = function (t, e, i, n) {
                        var o, a, l, h, d, p, f, g, _, m, v = t.style;
                        for (o in e)p = e[o], a = u[o], a ? i = a.parse(t, p, o, this, i, n, e) : (d = Z(t, o, s) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && C.test(p) ? (_ || (p = ht(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = _t(v, o, d, p, !0, "transparent", i, 0, n)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (l = parseFloat(d), f = l || 0 === l ? d.substr((l + "").length) : "", ("" === d || "auto" === d) && ("width" === o || "height" === o ? (l = nt(t, o, s), f = "px") : "left" === o || "top" === o ? (l = J(t, o, s), f = "px") : (l = "opacity" !== o ? 0 : 1, f = "")), m = _ && "=" === p.charAt(1), m ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), g = p.replace(b, "")) : (h = parseFloat(p), g = _ ? p.replace(b, "") : ""), "" === g && (g = o in r ? r[o] : f), p = h || 0 === h ? (m ? h + l : h) + g : e[o], f !== g && "" !== g && (h || 0 === h) && l && (l = Q(t, o, l, f), "%" === g ? (l /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = l + "%")) : "em" === g ? l /= Q(t, o, 1, "em") : "px" !== g && (h = Q(t, o, h, g), g = "px"), m && (h || 0 === h) && (p = h + l + g)), m && (h += l), !l && 0 !== l || !h && 0 !== h ? void 0 !== v[o] && (p || p + "" != "NaN" && null != p) ? (i = new gt(v, o, h || l || 0, 0, i, -1, o, !1, 0, d, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : d) : V("invalid " + o + " tween value: " + e[o]) : (i = new gt(v, o, l, h - l, i, 0, o, c !== !1 && ("px" === g || "zIndex" === o), 0, d, p), i.xs0 = g)) : i = _t(v, o, d, p, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                        return i
                    }, h.setRatio = function (t) {
                        var e, i, n, r = this._firstPT, s = 1e-6;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)if (1 === r.type)if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else-1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else for (; r;)2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;)2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                    }, h._enableTransforms = function (t) {
                        this._transform = this._transform || Rt(this._target, s, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                    };
                    var $t = function (t) {
                        this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                    };
                    h._addLazySet = function (t, e, i) {
                        var n = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                        n.e = i, n.setRatio = $t, n.data = this
                    }, h._linkCSSP = function (t, e, i, n) {
                        return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                    }, h._kill = function (e) {
                        var i, n, r, s = e;
                        if (e.autoAlpha || e.alpha) {
                            s = {};
                            for (n in e)s[n] = e[n];
                            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                        }
                        return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                    };
                    var Bt = function (t, e, i) {
                        var n, r, s, o;
                        if (t.slice)for (r = t.length; --r > -1;)Bt(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;)s = n[r], o = s.type, s.style && (e.push(K(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Bt(s, e, i)
                    };
                    return a.cascadeTo = function (t, i, n) {
                        var r, s, o, a, l = e.to(t, i, n), u = [l], h = [], c = [], d = [], p = e._internals.reservedProps;
                        for (t = l._targets || l.target, Bt(t, h, d), l.render(i, !0, !0), Bt(t, c), l.render(0, !0, !0), l._enabled(!0), r = d.length; --r > -1;)if (s = tt(d[r], h[r], c[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n)p[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s)a[o] = h[r][o];
                            u.push(e.fromTo(d[r], i, a, s))
                        }
                        return u
                    }, t.activate([a]), a
                }, !0), function () {
                    var t = i._gsDefine.plugin({
                        propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }), e = t.prototype;
                    e._onInitAllProps = function () {
                        for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;)o[r[s]] = 1;
                        for (s = r.length; --s > -1;)for (t = r[s], e = n._firstPT; e;)i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                        return !1
                    }, e._add = function (t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                    }
                }(), i._gsDefine.plugin({
                    propName: "attr", API: 2, version: "0.3.3", init: function (t, e, i) {
                        var n, r, s;
                        if ("function" != typeof t.setAttribute)return !1;
                        this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                        for (n in e)this._start[n] = this._proxy[n] = r = t.getAttribute(n), s = this._addTween(this._proxy, n, parseFloat(r), e[n], n), this._end[n] = s ? s.s + s.c : e[n], this._overwriteProps.push(n);
                        return !0
                    }, set: function (t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;)e = i[n], this._target.setAttribute(e, r[e] + "")
                    }
                }), i._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.2.1",
                    API: 2,
                    init: function (t, e, i) {
                        "object" != typeof e && (e = {rotation: e}), this.finals = {};
                        var n, r, s, o, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
                        for (n in e)"useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = o - s, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > h || -h > a) && (this._addTween(t, n, s, s + a, n), this._overwriteProps.push(n)));
                        return !0
                    },
                    set: function (t) {
                        var e;
                        if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                    }
                })._autoCSS = !0, i._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                    var e, n, r, s = i.GreenSockGlobals || i, o = s.com.greensock, a = 2 * Math.PI, l = Math.PI / 2, u = o._class, h = function (e, i) {
                        var n = u("easing." + e, function () {
                        }, !0), r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    }, c = t.register || function () {
                        }, d = function (t, e, i, n, r) {
                        var s = u("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
                        return c(s, t), s
                    }, p = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    }, f = function (e, i) {
                        var n = u("easing." + e, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0), r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function (t) {
                            return new n(t)
                        }, n
                    }, g = d("Back", f("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })), _ = u("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0), m = _.prototype = new t;
                    return m.constructor = _, m.getRatio = function (t) {
                        var e = t + (.5 - t) * this._p;
                        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }, _.ease = new _(.7, .7), m.config = _.config = function (t, e, i) {
                        return new _(t, e, i)
                    }, e = u("easing.SteppedEase", function (t) {
                        t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                    }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
                        return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                    }, m.config = e.config = function (t) {
                        return new e(t)
                    }, n = u("easing.RoughEase", function (e) {
                        e = e || {};
                        for (var i, n, r, s, o, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), d = c, f = e.randomize !== !1, g = e.clamp === !0, _ = e.template instanceof t ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;)i = f ? Math.random() : 1 / c * d, n = _ ? _.getRatio(i) : i, "none" === l ? r = m : "out" === l ? (s = 1 - i, r = s * s * m) : "in" === l ? r = i * i * m : .5 > i ? (s = 2 * i, r = s * s * .5 * m) : (s = 2 * (1 - i), r = s * s * .5 * m), f ? n += Math.random() * r - .5 * r : d % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {
                            x: i,
                            y: n
                        };
                        for (u.sort(function (t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), d = c; --d > -1;)o = u[d], a = new p(o.x, o.y, a);
                        this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                    }, !0), m = n.prototype = new t, m.constructor = n, m.getRatio = function (t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t;)e = e.next;
                            e = e.prev
                        } else for (; e.prev && t <= e.t;)e = e.prev;
                        return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                    }, m.config = function (t) {
                        return new n(t)
                    }, n.ease = new n, d("Bounce", h("BounceOut", function (t) {
                        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }), h("BounceIn", function (t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }), h("BounceInOut", function (t) {
                        var e = .5 > t;
                        return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                    })), d("Circ", h("CircOut", function (t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }), h("CircIn", function (t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    }), h("CircInOut", function (t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    })), r = function (e, i, n) {
                        var r = u("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0), s = r.prototype = new t;
                        return s.constructor = r, s.getRatio = i, s.config = function (t, e) {
                            return new r(t, e)
                        }, r
                    }, d("Elastic", r("ElasticOut", function (t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                    }, .3), r("ElasticIn", function (t) {
                        return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                    }, .3), r("ElasticInOut", function (t) {
                        return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                    }, .45)), d("Expo", h("ExpoOut", function (t) {
                        return 1 - Math.pow(2, -10 * t)
                    }), h("ExpoIn", function (t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                    }), h("ExpoInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    })), d("Sine", h("SineOut", function (t) {
                        return Math.sin(t * l)
                    }), h("SineIn", function (t) {
                        return -Math.cos(t * l) + 1
                    }), h("SineInOut", function (t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    })), u("easing.EaseLookup", {
                        find: function (e) {
                            return t.map[e]
                        }
                    }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), g
                }, !0)
            }), i._gsDefine && i._gsQueue.pop()(), function (t, i) {
                "use strict";
                var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!n.TweenLite) {
                    var r, s, o, a, l, u = function (t) {
                        var e, i = t.split("."), r = n;
                        for (e = 0; e < i.length; e++)r[i[e]] = r = r[i[e]] || {};
                        return r
                    }, h = u("com.greensock"), c = 1e-10, d = function (t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    }, p = function () {
                    }, f = function () {
                        var t = Object.prototype.toString, e = t.call([]);
                        return function (i) {
                            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                        }
                    }(), g = {}, _ = function (r, s, o, a) {
                        this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = o;
                        var l = [];
                        this.check = function (h) {
                            for (var c, d, p, f, m = s.length, v = m; --m > -1;)(c = g[s[m]] || new _(s[m], [])).gsClass ? (l[m] = c.gsClass, v--) : h && c.sc.push(this);
                            if (0 === v && o)for (d = ("com.greensock." + r).split("."), p = d.pop(), f = u(d.join("."))[p] = this.gsClass = o.apply(o, l), a && (n[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function () {
                                    return f
                                }) : r === i && "undefined" != typeof e && e.exports && (e.exports = f)), m = 0; m < this.sc.length; m++)this.sc[m].check()
                        }, this.check(!0)
                    }, m = t._gsDefine = function (t, e, i, n) {
                        return new _(t, e, i, n)
                    }, v = h._class = function (t, e, i) {
                        return e = e || function () {
                            }, m(t, [], function () {
                            return e
                        }, i), e
                    };
                    m.globals = n;
                    var y = [0, 0, 1, 1], w = [], b = v("easing.Ease", function (t, e, i, n) {
                        this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                    }, !0), x = b.map = {}, T = b.register = function (t, e, i, n) {
                        for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)for (s = l[u], r = n ? v("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;)a = c[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                    };
                    for (o = b.prototype, o._calcEnd = !1, o.getRatio = function (t) {
                        if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                    }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;)o = r[s] + ",Power" + s, T(new b(null, null, 1, s), o, "easeOut", !0), T(new b(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), o, "easeInOut");
                    x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
                    var S = v("events.EventDispatcher", function (t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    o = S.prototype, o.addEventListener = function (t, e, i, n, r) {
                        r = r || 0;
                        var s, o, u = this._listeners[t], h = 0;
                        for (null == u && (this._listeners[t] = u = []), o = u.length; --o > -1;)s = u[o], s.c === e && s.s === i ? u.splice(o, 1) : 0 === h && s.pr < r && (h = o + 1);
                        u.splice(h, 0, {c: e, s: i, up: n, pr: r}), this !== a || l || a.wake()
                    }, o.removeEventListener = function (t, e) {
                        var i, n = this._listeners[t];
                        if (n)for (i = n.length; --i > -1;)if (n[i].c === e)return void n.splice(i, 1)
                    }, o.dispatchEvent = function (t) {
                        var e, i, n, r = this._listeners[t];
                        if (r)for (e = r.length, i = this._eventTarget; --e > -1;)n = r[e], n && (n.up ? n.c.call(n.s || i, {
                                type: t,
                                target: i
                            }) : n.c.call(n.s || i))
                    };
                    var C = t.requestAnimationFrame, k = t.cancelAnimationFrame, P = Date.now || function () {
                            return (new Date).getTime()
                        }, A = P();
                    for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !C;)C = t[r[s] + "RequestAnimationFrame"], k = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
                    v("Ticker", function (t, e) {
                        var i, n, r, s, o, u = this, h = P(), d = e !== !1 && C, f = 500, g = 33, _ = "tick", m = function (t) {
                            var e, a, l = P() - A;
                            l > f && (h += l - g), A += l, u.time = (A - h) / 1e3, e = u.time - o, (!i || e > 0 || t === !0) && (u.frame++, o += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(m)), a && u.dispatchEvent(_)
                        };
                        S.call(u), u.time = u.frame = 0, u.tick = function () {
                            m(!0)
                        }, u.lagSmoothing = function (t, e) {
                            f = t || 1 / c, g = Math.min(e, f, 0)
                        }, u.sleep = function () {
                            null != r && (d && k ? k(r) : clearTimeout(r), n = p, r = null, u === a && (l = !1))
                        }, u.wake = function () {
                            null !== r ? u.sleep() : u.frame > 10 && (A = P() - f + 5), n = 0 === i ? p : d && C ? C : function (t) {
                                        return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
                                    }, u === a && (l = !0), m(2)
                        }, u.fps = function (t) {
                            return arguments.length ? (i = t, s = 1 / (i || 60), o = this.time + s, void u.wake()) : i
                        }, u.useRAF = function (t) {
                            return arguments.length ? (u.sleep(), d = t, void u.fps(i)) : d
                        }, u.fps(t), setTimeout(function () {
                            d && u.frame < 5 && u.useRAF(!1)
                        }, 1500)
                    }), o = h.Ticker.prototype = new h.events.EventDispatcher, o.constructor = h.Ticker;
                    var O = v("core.Animation", function (t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                            l || a.wake();
                            var i = this.vars.useFrames ? H : W;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    a = O.ticker = new h.Ticker, o = O.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                    var E = function () {
                        l && P() - A > 2e3 && a.wake(), setTimeout(E, 2e3)
                    };
                    E(), o.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, o.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, o.resume = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, o.seek = function (t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }, o.restart = function (t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }, o.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, o.render = function (t, e, i) {
                    }, o.invalidate = function () {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                    }, o.isActive = function () {
                        var t, e = this._timeline, i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                    }, o._enabled = function (t, e) {
                        return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, o._kill = function (t, e) {
                        return this._enabled(!1, !1)
                    }, o.kill = function (t, e) {
                        return this._kill(t, e), this
                    }, o._uncache = function (t) {
                        for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
                        return this
                    }, o._swapSelfInParams = function (t) {
                        for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
                        return i
                    }, o.eventCallback = function (t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length)return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, o.delay = function (t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, o.duration = function (t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, o.totalDuration = function (t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, o.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, o.totalTime = function (t, e, i) {
                        if (l || a.wake(), !arguments.length)return this._totalTime;
                        if (this._timeline) {
                            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration, r = this._timeline;
                                if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && U())
                        }
                        return this
                    }, o.progress = o.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
                    }, o.startTime = function (t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, o.endTime = function (t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, o.timeScale = function (t) {
                        if (!arguments.length)return this._timeScale;
                        if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t, this._uncache(!1)
                    }, o.reversed = function (t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, o.paused = function (t) {
                        if (!arguments.length)return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var M = v("core.SimpleTimeline", function (t) {
                        O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    o = M.prototype = new O, o.constructor = M, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (t, e, i, n) {
                        var r, s;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)for (s = t._startTime; r && r._startTime > s;)r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, o._remove = function (t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, o.render = function (t, e, i) {
                        var n, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;)n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
                    }, o.rawTime = function () {
                        return l || a.wake(), this._totalTime
                    };
                    var D = v("TweenLite", function (e, i, n) {
                        if (O.call(this, i, n), this.render = D.prototype.render, null == e)throw"Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                        var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(d(s))) : (this._siblings[r] = X(s, this, !1), 1 === l && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                    }, !0), R = function (e) {
                        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                    }, j = function (t, e) {
                        var i, n = {};
                        for (i in t)B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    };
                    o = D.prototype = new O, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.16.1", D.defaultEase = o._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
                        a.lagSmoothing(t, e)
                    }, D.selector = t.$ || t.jQuery || function (e) {
                            var i = t.$ || t.jQuery;
                            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                        };
                    var z = [], L = {}, N = D._internals = {
                        isArray: f,
                        isSelector: R,
                        lazyTweens: z
                    }, I = D._plugins = {}, F = N.tweenLookup = {}, $ = 0, B = N.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1
                    }, q = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        "true": 1,
                        "false": 0
                    }, H = O._rootFramesTimeline = new M, W = O._rootTimeline = new M, V = 30, U = N.lazyRender = function () {
                        var t, e = z.length;
                        for (L = {}; --e > -1;)t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        z.length = 0
                    };
                    W._startTime = a.time, H._startTime = a.frame, W._active = H._active = !0, setTimeout(U, 1), O._updateRoot = D.render = function () {
                        var t, e, i;
                        if (z.length && U(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), z.length && U(), a.frame >= V) {
                            V = a.frame + (parseInt(D.autoSleep, 10) || 120);
                            for (i in F) {
                                for (e = F[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete F[i]
                            }
                            if (i = W._first, (!i || i._paused) && D.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                                for (; i && i._paused;)i = i._next;
                                i || a.sleep()
                            }
                        }
                    }, a.addEventListener("tick", O._updateRoot);
                    var X = function (t, e, i) {
                        var n, r, s = t._gsTweenID;
                        if (F[s || (t._gsTweenID = s = "t" + $++)] || (F[s] = {
                                target: t,
                                tweens: []
                            }), e && (n = F[s].tweens, n[r = n.length] = e, i))for (; --r > -1;)n[r] === e && n.splice(r, 1);
                        return F[s].tweens
                    }, Y = function (t, e, i, n) {
                        var r, s, o = t.vars.onOverwrite;
                        return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                    }, G = function (t, e, i, n, r) {
                        var s, o, a, l;
                        if (1 === n || n >= 4) {
                            for (l = r.length, s = 0; l > s; s++)if ((a = r[s]) !== e) a._gc || Y(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n)break;
                            return o
                        }
                        var u, h = e._startTime + c, d = [], p = 0, f = 0 === e._duration;
                        for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || Z(e, 0, f), 0 === Z(a, u, f) && (d[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (d[p++] = a)));
                        for (s = p; --s > -1;)if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Y(a, e))continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                        return o
                    }, Z = function (t, e, i) {
                        for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                            if (s += n._startTime, r *= n._timeScale, n._paused)return -100;
                            n = n._timeline
                        }
                        return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                    };
                    o._init = function () {
                        var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
                        if (s.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                            for (n in s.startAt)r[n] = s.startAt[n];
                            if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)if (this._time > 0) this._startAt = null; else if (0 !== a)return
                        } else if (s.runBackwards && 0 !== a)if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                            0 !== this._time && (l = !1), i = {};
                            for (n in s)B[n] && "autoCSS" !== n || (i[n] = s[n]);
                            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                                if (0 === this._time)return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                        if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                        if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = s.onUpdate, this._initted = !0
                    }, o._initProps = function (e, i, n, r) {
                        var s, o, a, l, u, h;
                        if (null == e)return !1;
                        L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && j(this.vars, e);
                        for (s in this.vars) {
                            if (h = this.vars[s], B[s]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this)); else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: l,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: !0,
                                    n: s,
                                    pg: !0,
                                    pr: l._priority
                                }, o = l._overwriteProps.length; --o > -1;)i[l._overwriteProps[o]] = this._firstPT;
                                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                            } else this._firstPT = i[s] = u = {
                                _next: this._firstPT,
                                t: e,
                                p: s,
                                f: "function" == typeof e[s],
                                n: s,
                                pg: !1,
                                pr: 0
                            }, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                            u && u._next && (u._next._prev = u)
                        }
                        return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
                    }, o.render = function (t, e, i) {
                        var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
                        if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c); else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                            var h = t / l, d = this._easeType, p = this._easePower;
                            (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > t / l ? h / 2 : 1 - h / 2
                        } else this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc)return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = a, this._rawPrevTime = u, z.push(this), void(this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), s = this._firstPT; s;)s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                            this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)),
                            r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || w), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                        }
                    }, o._kill = function (t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                        var n, r, s, o, a, l, u, h, c;
                        if ((f(e) || R(e)) && "number" != typeof e[0])for (n = e.length; --n > -1;)this._kill(t, e[n]) && (l = !0); else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1;)if (e === this._targets[n]) {
                                    a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                            } else {
                                if (e !== this.target)return !1;
                                a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                                    for (s in u)a[s] && (c || (c = []), c.push(s));
                                    if (!Y(this, i, e, c))return !1
                                }
                                for (s in u)(o = a[s]) && (o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, o.invalidate = function () {
                        return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
                    }, o._enabled = function (t, e) {
                        if (l || a.wake(), t && this._gc) {
                            var i, n = this._targets;
                            if (n)for (i = n.length; --i > -1;)this._siblings[i] = X(n[i], this, !0); else this._siblings = X(this.target, this, !0)
                        }
                        return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
                    }, D.to = function (t, e, i) {
                        return new D(t, e, i)
                    }, D.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
                    }, D.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
                    }, D.delayedCall = function (t, e, i, n, r) {
                        return new D(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            onCompleteScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            onReverseCompleteScope: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, D.set = function (t, e) {
                        return new D(t, 0, e)
                    }, D.getTweensOf = function (t, e) {
                        if (null == t)return [];
                        t = "string" != typeof t ? t : D.selector(t) || t;
                        var i, n, r, s;
                        if ((f(t) || R(t)) && "number" != typeof t[0]) {
                            for (i = t.length, n = []; --i > -1;)n = n.concat(D.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1;)for (s = n[i], r = i; --r > -1;)s === n[r] && n.splice(i, 1)
                        } else for (n = X(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n
                    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;)n[r]._kill(i, t)
                    };
                    var Q = v("plugins.TweenPlugin", function (t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
                    }, !0);
                    if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function (t, e, i, n, r, s) {
                            var o, a;
                            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                                    _next: this._firstPT,
                                    t: t,
                                    p: e,
                                    s: i,
                                    c: o,
                                    f: "function" == typeof t[e],
                                    n: r || e,
                                    r: s
                                }, a._next && (a._next._prev = a), a) : void 0
                        }, o.setRatio = function (t) {
                            for (var e, i = this._firstPT, n = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        }, o._kill = function (t) {
                            var e, i = this._overwriteProps, n = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                            for (; n;)null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                            return !1
                        }, o._roundProps = function (t, e) {
                            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                        }, D._onPluginEvent = function (t, e) {
                            var i, n, r, s, o, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (o = a._next, n = r; n && n.pr > a.pr;)n = n._next;
                                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                                }
                                a = e._firstPT = r
                            }
                            for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, Q.activate = function (t) {
                            for (var e = t.length; --e > -1;)t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
                            return !0
                        }, m.plugin = function (t) {
                            if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_roundProps",
                                initAll: "_onInitAllProps"
                            }, o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                                Q.call(this, i, n), this._overwriteProps = r || []
                            }, t.global === !0), a = o.prototype = new Q(i);
                            a.constructor = o, o.API = t.API;
                            for (e in s)"function" == typeof t[e] && (a[s[e]] = t[e]);
                            return o.version = t.version, Q.activate([o]), o
                        }, r = t._gsQueue) {
                        for (s = 0; s < r.length; s++)r[s]();
                        for (o in g)g[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
                    }
                    l = !1
                }
            }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenMax")
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    8: [function (t, e, i) {
        (function (t) {
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function () {
                "use strict";
                var t = document.documentElement, e = window, n = function (i, n) {
                    var r = "x" === n ? "Width" : "Height", s = "scroll" + r, o = "client" + r, a = document.body;
                    return i === e || i === t || i === a ? Math.max(t[s], a[s]) - (e["inner" + r] || t[o] || a[o]) : i[s] - i["offset" + r]
                }, r = i._gsDefine.plugin({
                    propName: "scrollTo", API: 2, version: "1.7.5", init: function (t, i, r) {
                        return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof i && (i = {y: i}), this.vars = i, this._autoKill = i.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, "max" === i.x ? n(t, "x") : i.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, "max" === i.y ? n(t, "y") : i.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                    }, set: function (t) {
                        this._super.setRatio.call(this, t);
                        var i = this._wdw || !this.skipX ? this.getX() : this.xPrev, r = this._wdw || !this.skipY ? this.getY() : this.yPrev, s = r - this.yPrev, o = i - this.xPrev;
                        this._autoKill && (!this.skipX && (o > 7 || -7 > o) && i < n(this._target, "x") && (this.skipX = !0), !this.skipY && (s > 7 || -7 > s) && r < n(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? i : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                    }
                }), s = r.prototype;
                r.max = n, s.getX = function () {
                    return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
                }, s.getY = function () {
                    return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
                }, s._kill = function (t) {
                    return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
                }
            }), i._gsDefine && i._gsQueue.pop()()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    9: [function (t, e, i) {
        !function (t, n) {
            "function" == typeof define && define.amd ? define(n) : "object" == typeof i ? e.exports = n() : t.ScrollMagic = n()
        }(this, function () {
            "use strict";
            var t = function () {
                r.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            };
            t.version = "2.0.5", window.addEventListener("mousewheel", function () {
            });
            var e = "data-scrollmagic-pin-spacer";
            t.Controller = function (n) {
                var s, o, a = "ScrollMagic.Controller", l = "FORWARD", u = "REVERSE", h = "PAUSED", c = i.defaults, d = this, p = r.extend({}, c, n), f = [], g = !1, _ = 0, m = h, v = !0, y = 0, w = !0, b = function () {
                    for (var e in p)c.hasOwnProperty(e) || (E(2, 'WARNING: Unknown option "' + e + '"'), delete p[e]);
                    if (p.container = r.get.elements(p.container)[0], !p.container)throw E(1, "ERROR creating object " + a + ": No valid scroll container supplied"), a + " init failed.";
                    v = p.container === window || p.container === document.body || !document.body.contains(p.container), v && (p.container = window), y = S(), p.container.addEventListener("resize", A), p.container.addEventListener("scroll", A), p.refreshInterval = parseInt(p.refreshInterval) || c.refreshInterval, x(), E(3, "added new " + a + " controller (v" + t.version + ")")
                }, x = function () {
                    p.refreshInterval > 0 && (o = window.setTimeout(O, p.refreshInterval))
                }, T = function () {
                    return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
                }, S = function () {
                    return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
                }, C = this._setScrollPos = function (t) {
                    p.vertical ? v ? window.scrollTo(r.get.scrollLeft(), t) : p.container.scrollTop = t : v ? window.scrollTo(t, r.get.scrollTop()) : p.container.scrollLeft = t
                }, k = function () {
                    if (w && g) {
                        var t = r.type.Array(g) ? g : f.slice(0);
                        g = !1;
                        var e = _;
                        _ = d.scrollPos();
                        var i = _ - e;
                        0 !== i && (m = i > 0 ? l : u), m === u && t.reverse(), t.forEach(function (e, i) {
                            E(3, "updating Scene " + (i + 1) + "/" + t.length + " (" + f.length + " total)"), e.update(!0)
                        }), 0 === t.length && p.loglevel >= 3 && E(3, "updating 0 Scenes (nothing added to controller)")
                    }
                }, P = function () {
                    s = r.rAF(k)
                }, A = function (t) {
                    E(3, "event fired causing an update:", t.type), "resize" == t.type && (y = S(), m = h), g !== !0 && (g = !0, P())
                }, O = function () {
                    if (!v && y != S()) {
                        var t;
                        try {
                            t = new Event("resize", {bubbles: !1, cancelable: !1})
                        } catch (e) {
                            t = document.createEvent("Event"), t.initEvent("resize", !1, !1)
                        }
                        p.container.dispatchEvent(t)
                    }
                    f.forEach(function (t, e) {
                        t.refresh()
                    }), x()
                }, E = this._log = function (t, e) {
                    p.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments))
                };
                this._options = p;
                var M = function (t) {
                    if (t.length <= 1)return t;
                    var e = t.slice(0);
                    return e.sort(function (t, e) {
                        return t.scrollOffset() > e.scrollOffset() ? 1 : -1
                    }), e
                };
                return this.addScene = function (e) {
                    if (r.type.Array(e)) e.forEach(function (t, e) {
                        d.addScene(t)
                    }); else if (e instanceof t.Scene) {
                        if (e.controller() !== d) e.addTo(d); else if (f.indexOf(e) < 0) {
                            f.push(e), f = M(f), e.on("shift.controller_sort", function () {
                                f = M(f)
                            });
                            for (var i in p.globalSceneOptions)e[i] && e[i].call(e, p.globalSceneOptions[i]);
                            E(3, "adding Scene (now " + f.length + " total)")
                        }
                    } else E(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return d
                }, this.removeScene = function (t) {
                    if (r.type.Array(t)) t.forEach(function (t, e) {
                        d.removeScene(t)
                    }); else {
                        var e = f.indexOf(t);
                        e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), E(3, "removing Scene (now " + f.length + " left)"), t.remove())
                    }
                    return d
                }, this.updateScene = function (e, i) {
                    return r.type.Array(e) ? e.forEach(function (t, e) {
                            d.updateScene(t, i)
                        }) : i ? e.update(!0) : g !== !0 && e instanceof t.Scene && (g = g || [], -1 == g.indexOf(e) && g.push(e), g = M(g), P()), d
                }, this.update = function (t) {
                    return A({type: "resize"}), t && k(), d
                }, this.scrollTo = function (i, n) {
                    if (r.type.Number(i)) C.call(p.container, i, n); else if (i instanceof t.Scene) i.controller() === d ? d.scrollTo(i.scrollOffset(), n) : E(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", i); else if (r.type.Function(i)) C = i; else {
                        var s = r.get.elements(i)[0];
                        if (s) {
                            for (; s.parentNode.hasAttribute(e);)s = s.parentNode;
                            var o = p.vertical ? "top" : "left", a = r.get.offset(p.container), l = r.get.offset(s);
                            v || (a[o] -= d.scrollPos()), d.scrollTo(l[o] - a[o], n)
                        } else E(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", i)
                    }
                    return d
                }, this.scrollPos = function (t) {
                    return arguments.length ? (r.type.Function(t) ? T = t : E(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), d) : T.call(d)
                }, this.info = function (t) {
                    var e = {
                        size: y,
                        vertical: p.vertical,
                        scrollPos: _,
                        scrollDirection: m,
                        container: p.container,
                        isDocument: v
                    };
                    return arguments.length ? void 0 !== e[t] ? e[t] : void E(1, 'ERROR: option "' + t + '" is not available') : e
                }, this.loglevel = function (t) {
                    return arguments.length ? (p.loglevel != t && (p.loglevel = t), d) : p.loglevel
                }, this.enabled = function (t) {
                    return arguments.length ? (w != t && (w = !!t, d.updateScene(f, !0)), d) : w
                }, this.destroy = function (t) {
                    window.clearTimeout(o);
                    for (var e = f.length; e--;)f[e].destroy(t);
                    return p.container.removeEventListener("resize", A), p.container.removeEventListener("scroll", A), r.cAF(s), E(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null
                }, b(), d
            };
            var i = {
                defaults: {
                    container: window,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            t.Controller.addOption = function (t, e) {
                i.defaults[t] = e
            }, t.Controller.extend = function (e) {
                var i = this;
                t.Controller = function () {
                    return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
                }, r.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
            }, t.Scene = function (i) {
                var s, o, a = "ScrollMagic.Scene", l = "BEFORE", u = "DURING", h = "AFTER", c = n.defaults, d = this, p = r.extend({}, c, i), f = l, g = 0, _ = {
                    start: 0,
                    end: 0
                }, m = 0, v = !0, y = function () {
                    for (var t in p)c.hasOwnProperty(t) || (b(2, 'WARNING: Unknown option "' + t + '"'), delete p[t]);
                    for (var e in c)O(e);
                    P()
                }, w = {};
                this.on = function (t, e) {
                    return r.type.Function(e) ? (t = t.trim().split(" "), t.forEach(function (t) {
                            var i = t.split("."), n = i[0], r = i[1];
                            "*" != n && (w[n] || (w[n] = []), w[n].push({namespace: r || "", callback: e}))
                        })) : b(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"), d
                }, this.off = function (t, e) {
                    return t ? (t = t.trim().split(" "), t.forEach(function (t, i) {
                            var n = t.split("."), r = n[0], s = n[1] || "", o = "*" === r ? Object.keys(w) : [r];
                            o.forEach(function (t) {
                                for (var i = w[t] || [], n = i.length; n--;) {
                                    var r = i[n];
                                    !r || s !== r.namespace && "*" !== s || e && e != r.callback || i.splice(n, 1)
                                }
                                i.length || delete w[t]
                            })
                        }), d) : (b(1, "ERROR: Invalid event name supplied."), d)
                }, this.trigger = function (e, i) {
                    if (e) {
                        var n = e.trim().split("."), r = n[0], s = n[1], o = w[r];
                        b(3, "event fired:", r, i ? "->" : "", i || ""), o && o.forEach(function (e, n) {
                            s && s !== e.namespace || e.callback.call(d, new t.Event(r, e.namespace, d, i))
                        })
                    } else b(1, "ERROR: Invalid event name supplied.");
                    return d
                }, d.on("change.internal", function (t) {
                    "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? S() : "reverse" === t.what && d.update())
                }).on("shift.internal", function (t) {
                    x(), d.update()
                });
                var b = this._log = function (t, e) {
                    p.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"), r.log.apply(window, arguments))
                };
                this.addTo = function (e) {
                    return e instanceof t.Controller ? o != e && (o && o.removeScene(d), o = e, P(), T(!0), S(!0), x(), o.info("container").addEventListener("resize", C), e.addScene(d), d.trigger("add", {controller: o}), b(3, "added " + a + " to controller"), d.update()) : b(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), d
                }, this.enabled = function (t) {
                    return arguments.length ? (v != t && (v = !!t, d.update(!0)), d) : v
                }, this.remove = function () {
                    if (o) {
                        o.info("container").removeEventListener("resize", C);
                        var t = o;
                        o = void 0, t.removeScene(d), d.trigger("remove"), b(3, "removed " + a + " from controller")
                    }
                    return d
                }, this.destroy = function (t) {
                    return d.trigger("destroy", {reset: t}), d.remove(), d.off("*.*"), b(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"), null
                }, this.update = function (t) {
                    if (o)if (t)if (o.enabled() && v) {
                        var e, i = o.info("scrollPos");
                        e = p.duration > 0 ? (i - _.start) / (_.end - _.start) : i >= _.start ? 1 : 0, d.trigger("update", {
                            startPos: _.start,
                            endPos: _.end,
                            scrollPos: i
                        }), d.progress(e)
                    } else E && f === u && D(!0); else o.updateScene(d, !1);
                    return d
                }, this.refresh = function () {
                    return T(), S(), d
                }, this.progress = function (t) {
                    if (arguments.length) {
                        var e = !1, i = f, n = o ? o.info("scrollDirection") : "PAUSED", r = p.reverse || t >= g;
                        if (0 === p.duration ? (e = g != t, g = 1 > t && r ? 0 : 1, f = 0 === g ? l : u) : 0 > t && f !== l && r ? (g = 0, f = l, e = !0) : t >= 0 && 1 > t && r ? (g = t, f = u, e = !0) : t >= 1 && f !== h ? (g = 1, f = h, e = !0) : f !== u || r || D(), e) {
                            var s = {progress: g, state: f, scrollDirection: n}, a = f != i, c = function (t) {
                                d.trigger(t, s)
                            };
                            a && i !== u && (c("enter"), c(i === l ? "start" : "end")), c("progress"), a && f !== u && (c(f === l ? "start" : "end"), c("leave"))
                        }
                        return d
                    }
                    return g
                };
                var x = function () {
                    _ = {start: m + p.offset}, o && p.triggerElement && (_.start -= o.info("size") * p.triggerHook), _.end = _.start + p.duration
                }, T = function (t) {
                    if (s) {
                        var e = "duration";
                        A(e, s.call(d)) && !t && (d.trigger("change", {
                            what: e,
                            newval: p[e]
                        }), d.trigger("shift", {reason: e}))
                    }
                }, S = function (t) {
                    var i = 0, n = p.triggerElement;
                    if (o && n) {
                        for (var s = o.info(), a = r.get.offset(s.container), l = s.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);)n = n.parentNode;
                        var u = r.get.offset(n);
                        s.isDocument || (a[l] -= o.scrollPos()), i = u[l] - a[l]
                    }
                    var h = i != m;
                    m = i, h && !t && d.trigger("shift", {reason: "triggerElementPosition"})
                }, C = function (t) {
                    p.triggerHook > 0 && d.trigger("shift", {reason: "containerResize"})
                }, k = r.extend(n.validate, {
                    duration: function (t) {
                        if (r.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                            var e = parseFloat(t) / 100;
                            t = function () {
                                return o ? o.info("size") * e : 0
                            }
                        }
                        if (r.type.Function(t)) {
                            s = t;
                            try {
                                t = parseFloat(s())
                            } catch (i) {
                                t = -1
                            }
                        }
                        if (t = parseFloat(t), !r.type.Number(t) || 0 > t)throw s ? (s = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                        return t
                    }
                }), P = function (t) {
                    t = arguments.length ? [t] : Object.keys(k), t.forEach(function (t, e) {
                        var i;
                        if (k[t])try {
                            i = k[t](p[t])
                        } catch (n) {
                            i = c[t];
                            var s = r.type.String(n) ? [n] : n;
                            r.type.Array(s) ? (s[0] = "ERROR: " + s[0], s.unshift(1), b.apply(this, s)) : b(1, "ERROR: Problem executing validation callback for option '" + t + "':", n.message)
                        } finally {
                            p[t] = i
                        }
                    })
                }, A = function (t, e) {
                    var i = !1, n = p[t];
                    return p[t] != e && (p[t] = e, P(t), i = n != p[t]), i
                }, O = function (t) {
                    d[t] || (d[t] = function (e) {
                        return arguments.length ? ("duration" === t && (s = void 0), A(t, e) && (d.trigger("change", {
                                what: t,
                                newval: p[t]
                            }), n.shifts.indexOf(t) > -1 && d.trigger("shift", {reason: t})), d) : p[t]
                    })
                };
                this.controller = function () {
                    return o
                }, this.state = function () {
                    return f
                }, this.scrollOffset = function () {
                    return _.start
                }, this.triggerPosition = function () {
                    var t = p.offset;
                    return o && (t += p.triggerElement ? m : o.info("size") * d.triggerHook()), t
                };
                var E, M;
                d.on("shift.internal", function (t) {
                    var e = "duration" === t.reason;
                    (f === h && e || f === u && 0 === p.duration) && D(), e && R()
                }).on("progress.internal", function (t) {
                    D()
                }).on("add.internal", function (t) {
                    R()
                }).on("destroy.internal", function (t) {
                    d.removePin(t.reset)
                });
                var D = function (t) {
                    if (E && o) {
                        var e = o.info(), i = M.spacer.firstChild;
                        if (t || f !== u) {
                            var n = {
                                position: M.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            }, s = r.css(i, "position") != n.position;
                            M.pushFollowers ? p.duration > 0 && (f === h && 0 === parseFloat(r.css(M.spacer, "padding-top")) ? s = !0 : f === l && 0 === parseFloat(r.css(M.spacer, "padding-bottom")) && (s = !0)) : n[e.vertical ? "top" : "left"] = p.duration * g, r.css(i, n), s && R()
                        } else {
                            "fixed" != r.css(i, "position") && (r.css(i, {position: "fixed"}), R());
                            var a = r.get.offset(M.spacer, !0), c = p.reverse || 0 === p.duration ? e.scrollPos - _.start : Math.round(g * p.duration * 10) / 10;
                            a[e.vertical ? "top" : "left"] += c, r.css(M.spacer.firstChild, {top: a.top, left: a.left})
                        }
                    }
                }, R = function () {
                    if (E && o && M.inFlow) {
                        var t = f === u, e = o.info("vertical"), i = M.spacer.firstChild, n = r.isMarginCollapseType(r.css(M.spacer, "display")), s = {};
                        M.relSize.width || M.relSize.autoFullWidth ? t ? r.css(E, {width: r.get.width(M.spacer)}) : r.css(E, {width: "100%"}) : (s["min-width"] = r.get.width(e ? E : i, !0, !0), s.width = t ? s["min-width"] : "auto"), M.relSize.height ? t ? r.css(E, {height: r.get.height(M.spacer) - (M.pushFollowers ? p.duration : 0)}) : r.css(E, {height: "100%"}) : (s["min-height"] = r.get.height(e ? i : E, !0, !n), s.height = t ? s["min-height"] : "auto"), M.pushFollowers && (s["padding" + (e ? "Top" : "Left")] = p.duration * g, s["padding" + (e ? "Bottom" : "Right")] = p.duration * (1 - g)), r.css(M.spacer, s)
                    }
                }, j = function () {
                    o && E && f === u && !o.info("isDocument") && D()
                }, z = function () {
                    o && E && f === u && ((M.relSize.width || M.relSize.autoFullWidth) && r.get.width(window) != r.get.width(M.spacer.parentNode) || M.relSize.height && r.get.height(window) != r.get.height(M.spacer.parentNode)) && R()
                }, L = function (t) {
                    o && E && f === u && !o.info("isDocument") && (t.preventDefault(), o._setScrollPos(o.info("scrollPos") - ((t.wheelDelta || t[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
                };
                this.setPin = function (t, i) {
                    var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"};
                    if (i = r.extend({}, n, i), t = r.get.elements(t)[0], !t)return b(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), d;
                    if ("fixed" === r.css(t, "position"))return b(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), d;
                    if (E) {
                        if (E === t)return d;
                        d.removePin()
                    }
                    E = t;
                    var s = E.parentNode.style.display, o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    E.parentNode.style.display = "none";
                    var a = "absolute" != r.css(E, "position"), l = r.css(E, o.concat(["display"])), u = r.css(E, ["width", "height"]);
                    E.parentNode.style.display = s, !a && i.pushFollowers && (b(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), i.pushFollowers = !1), window.setTimeout(function () {
                        E && 0 === p.duration && i.pushFollowers && b(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                    }, 0);
                    var h = E.parentNode.insertBefore(document.createElement("div"), E), c = r.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                    if (a || r.extend(c, r.css(E, ["width", "height"])), r.css(h, c), h.setAttribute(e, ""), r.addClass(h, i.spacerClass), M = {
                            spacer: h,
                            relSize: {
                                width: "%" === u.width.slice(-1),
                                height: "%" === u.height.slice(-1),
                                autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                            },
                            pushFollowers: i.pushFollowers,
                            inFlow: a
                        }, !E.___origStyle) {
                        E.___origStyle = {};
                        var f = E.style, g = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                        g.forEach(function (t) {
                            E.___origStyle[t] = f[t] || ""
                        })
                    }
                    return M.relSize.width && r.css(h, {width: u.width}), M.relSize.height && r.css(h, {height: u.height}), h.appendChild(E), r.css(E, {
                        position: a ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }), (M.relSize.width || M.relSize.autoFullWidth) && r.css(E, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }), window.addEventListener("scroll", j), window.addEventListener("resize", j), window.addEventListener("resize", z), E.addEventListener("mousewheel", L), E.addEventListener("DOMMouseScroll", L), b(3, "added pin"), D(), d
                }, this.removePin = function (t) {
                    if (E) {
                        if (f === u && D(!0), t || !o) {
                            var i = M.spacer.firstChild;
                            if (i.hasAttribute(e)) {
                                var n = M.spacer.style, s = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                margins = {}, s.forEach(function (t) {
                                    margins[t] = n[t] || ""
                                }), r.css(i, margins)
                            }
                            M.spacer.parentNode.insertBefore(i, M.spacer), M.spacer.parentNode.removeChild(M.spacer), E.parentNode.hasAttribute(e) || (r.css(E, E.___origStyle), delete E.___origStyle)
                        }
                        window.removeEventListener("scroll", j), window.removeEventListener("resize", j), window.removeEventListener("resize", z), E.removeEventListener("mousewheel", L), E.removeEventListener("DOMMouseScroll", L), E = void 0, b(3, "removed pin (reset: " + (t ? "true" : "false") + ")")
                    }
                    return d
                };
                var N, I = [];
                return d.on("destroy.internal", function (t) {
                    d.removeClassToggle(t.reset)
                }), this.setClassToggle = function (t, e) {
                    var i = r.get.elements(t);
                    return 0 !== i.length && r.type.String(e) ? (I.length > 0 && d.removeClassToggle(), N = e, I = i, d.on("enter.internal_class leave.internal_class", function (t) {
                            var e = "enter" === t.type ? r.addClass : r.removeClass;
                            I.forEach(function (t, i) {
                                e(t, N)
                            })
                        }), d) : (b(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === i.length ? "element" : "classes") + " supplied."), d)
                }, this.removeClassToggle = function (t) {
                    return t && I.forEach(function (t, e) {
                        r.removeClass(t, N)
                    }), d.off("start.internal_class end.internal_class"), N = void 0, I = [], d
                }, y(), d
            };
            var n = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                }, validate: {
                    offset: function (t) {
                        if (t = parseFloat(t), !r.type.Number(t))throw['Invalid value for option "offset":', t];
                        return t
                    }, triggerElement: function (t) {
                        if (t = t || void 0) {
                            var e = r.get.elements(t)[0];
                            if (!e)throw['Element defined in option "triggerElement" was not found:', t];
                            t = e
                        }
                        return t
                    }, triggerHook: function (t) {
                        var e = {onCenter: .5, onEnter: 1, onLeave: 0};
                        if (r.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1)); else {
                            if (!(t in e))throw['Invalid value for option "triggerHook": ', t];
                            t = e[t]
                        }
                        return t
                    }, reverse: function (t) {
                        return !!t
                    }, loglevel: function (t) {
                        if (t = parseInt(t), !r.type.Number(t) || 0 > t || t > 3)throw['Invalid value for option "loglevel":', t];
                        return t
                    }
                }, shifts: ["duration", "offset", "triggerHook"]
            };
            t.Scene.addOption = function (e, i, r, s) {
                e in n.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (n.defaults[e] = i, n.validate[e] = r, s && n.shifts.push(e))
            }, t.Scene.extend = function (e) {
                var i = this;
                t.Scene = function () {
                    return i.apply(this, arguments), this.$super = r.extend({}, this), e.apply(this, arguments) || this
                }, r.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
            }, t.Event = function (t, e, i, n) {
                n = n || {};
                for (var r in n)this[r] = n[r];
                return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this
            };
            var r = t._util = function (t) {
                var e, i = {}, n = function (t) {
                    return parseFloat(t) || 0
                }, r = function (e) {
                    return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
                }, s = function (e, i, s, o) {
                    if (i = i === document ? t : i, i === t) o = !1; else if (!f.DomElement(i))return 0;
                    e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                    var a = (s ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                    if (s && o) {
                        var l = r(i);
                        a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                    }
                    return a
                }, o = function (t) {
                    return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (t) {
                        return t[1].toUpperCase()
                    })
                };
                i.extend = function (t) {
                    for (t = t || {}, e = 1; e < arguments.length; e++)if (arguments[e])for (var i in arguments[e])arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
                    return t
                }, i.isMarginCollapseType = function (t) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
                };
                var a = 0, l = ["ms", "moz", "webkit", "o"], u = t.requestAnimationFrame, h = t.cancelAnimationFrame;
                for (e = 0; !u && e < l.length; ++e)u = t[l[e] + "RequestAnimationFrame"], h = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
                u || (u = function (e) {
                    var i = (new Date).getTime(), n = Math.max(0, 16 - (i - a)), r = t.setTimeout(function () {
                        e(i + n)
                    }, n);
                    return a = i + n, r
                }), h || (h = function (e) {
                    t.clearTimeout(e)
                }), i.rAF = u.bind(t), i.cAF = h.bind(t);
                var c = ["error", "warn", "log"], d = t.console || {};
                for (d.log = d.log || function () {
                    }, e = 0; e < c.length; e++) {
                    var p = c[e];
                    d[p] || (d[p] = d.log)
                }
                i.log = function (t) {
                    (t > c.length || 0 >= t) && (t = c.length);
                    var e = new Date, i = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3), n = c[t - 1], r = Array.prototype.splice.call(arguments, 1), s = Function.prototype.bind.call(d[n], d);
                    r.unshift(i), s.apply(d, r)
                };
                var f = i.type = function (t) {
                    return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                };
                f.String = function (t) {
                    return "string" === f(t)
                }, f.Function = function (t) {
                    return "function" === f(t)
                }, f.Array = function (t) {
                    return Array.isArray(t)
                }, f.Number = function (t) {
                    return !f.Array(t) && t - parseFloat(t) + 1 >= 0
                }, f.DomElement = function (t) {
                    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
                };
                var g = i.get = {};
                return g.elements = function (e) {
                    var i = [];
                    if (f.String(e))try {
                        e = document.querySelectorAll(e)
                    } catch (n) {
                        return i
                    }
                    if ("nodelist" === f(e) || f.Array(e))for (var r = 0, s = i.length = e.length; s > r; r++) {
                        var o = e[r];
                        i[r] = f.DomElement(o) ? o : g.elements(o)
                    } else(f.DomElement(e) || e === document || e === t) && (i = [e]);
                    return i
                }, g.scrollTop = function (e) {
                    return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
                }, g.scrollLeft = function (e) {
                    return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
                }, g.width = function (t, e, i) {
                    return s("width", t, e, i)
                }, g.height = function (t, e, i) {
                    return s("height", t, e, i)
                }, g.offset = function (t, e) {
                    var i = {top: 0, left: 0};
                    if (t && t.getBoundingClientRect) {
                        var n = t.getBoundingClientRect();
                        i.top = n.top, i.left = n.left, e || (i.top += g.scrollTop(), i.left += g.scrollLeft())
                    }
                    return i
                }, i.addClass = function (t, e) {
                    e && (t.classList ? t.classList.add(e) : t.className += " " + e)
                }, i.removeClass = function (t, e) {
                    e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                }, i.css = function (t, e) {
                    if (f.String(e))return r(t)[o(e)];
                    if (f.Array(e)) {
                        var i = {}, n = r(t);
                        return e.forEach(function (t, e) {
                            i[t] = n[o(t)]
                        }), i
                    }
                    for (var s in e) {
                        var a = e[s];
                        a == parseFloat(a) && (a += "px"), t.style[o(s)] = a
                    }
                }, i
            }(window || {});
            return t.Scene.prototype.addIndicators = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
            }, t.Scene.prototype.removeIndicators = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
            }, t.Scene.prototype.setTween = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
            }, t.Scene.prototype.removeTween = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
            }, t.Scene.prototype.setVelocity = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
            }, t.Scene.prototype.removeVelocity = function () {
                return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
            }, t
        })
    }, {}],
    10: [function (t, e, i) {
        function n(t, e) {
            this.element = r(t), this.active = !1, this.activeClass = "is-visible", this.onClickFunction = "function" == typeof e ? e : function () {
                }, "undefined" != typeof e && this._init()
        }

        var r = t("./../../../bower_components/jquery/dist/jquery.js");
        n.prototype.visible = function (t) {
            var e = this;
            e.active || setTimeout(function () {
                e.element.addClass(e.activeClass), e.active = !0
            }, t || 0)
        }, n.prototype.hidden = function (t) {
            var e = this;
            e.active && setTimeout(function () {
                e.element.removeClass(e.activeClass), e.active = !1
            }, t || 0)
        }, n.prototype._init = function () {
            var t = this;
            t.element.on("click", function (e) {
                e.preventDefault(), t.onClickFunction()
            })
        }, e.exports = n
    }, {"./../../../bower_components/jquery/dist/jquery.js": 2}],
    11: [function (t, e, i) {
        function n() {
            return this.elements = {}, this.opened = !1, this.position = {}, this.slider = null, this.win = {}, this.mode = "slider", this.options = {
                animDur: .5,
                "class": "",
                wrapperClass: "",
                zIndex: 98,
                easing: Power1.easeOut,
                breakpoint: 800,
                height1: 580,
                height2: 680,
                initSliderHeight: 450,
                sliderHeight: null,
                infoTop: 100
            }, this.slickOptions = {
                accessibility: !1,
                autoplay: !1,
                draggable: !1,
                slide: ".object__slide",
                prevArrow: null,
                nextArrow: null,
                dots: !0,
                swipe: !1,
                respondTo: "slider",
                arrows: !0,
                speed: 500
            }, this
        }

        t("./../../../bower_components/jquery/dist/jquery.js"), t("./../../../bower_components/slick-carousel/slick/slick.min.js"), t("gsap"), t("TimelineLite"), n.prototype.init = function (t, e) {
            var i, n = this;
            return n.elements.box = t instanceof jQuery ? t : $(t), n.elements.wrapper = n.elements.box.parents(".object-wrapper"), n.elements.inner = n.elements.box.find(".object__inner"), n.elements.slider = n.elements.box.find(".object__slider"), n.elements.openButton = n.elements.box.find(".info .btn"), n.elements.closeButton = n.elements.box.find(".object__close"), n.elements.info = n.elements.box.find(".info"), n.elements.detail = n.elements.box.find(".object__detail"), n.win.W = $(window).width(), n.win.H = $(window).height(), n.options.sliderHeight = n.win.H <= n.options.breakpoint ? n.options.height1 : n.options.height2,
                n.slickOptions.prevArrow = n.elements.box.find(".object__slider-prev"), n.slickOptions.nextArrow = n.elements.box.find(".object__slider-next"), i = n.elements.box.data("mode"), e ? n.mode = e : i && (n.mode = i), n.options["class"] = "slider" == n.mode ? "is-slider" : "is-opened", n.options.wrapperClass = "slider" == n.mode ? "is-slider" : "is-animate", n._getPosition(), n._initEvents(), this
        }, n.prototype._initEvents = function () {
            var t = this;
            t.elements.openButton.on("click", function (e) {
                e.preventDefault(), t.open()
            }), t.elements.slider.on("click", function () {
                t.open()
            }), t.elements.closeButton.on("click", function (e) {
                e.preventDefault(), t.close(!0)
            }), "modal" == t.mode && t.elements.box.on("scroll mousewheel DOMMouseScroll", function (t) {
                t.stopPropagation()
            }), $(window).on("resize", function () {
                $(t).trigger("winResized"), t._updateOnResize()
            }), t.elements.slider.on("init", function (t, e) {
                var i = e.$dots.find("button");
                $.each(i, function (t, e) {
                    var i = $(e).text();
                    $(e).text(app.util.transformNumber(i))
                })
            })
        }, n.prototype._initSlider = function () {
            var t = this;
            t.slider = t.elements.slider.slick(t.slickOptions)
        }, n.prototype._destroySlider = function () {
            var t = this;
            t.elements.slider.slick("unslick"), t.slider = null
        }, n.prototype._updateOnResize = function () {
            var t = this;
            t.win.W = $(window).width(), t.win.H = $(window).height(), t.options.sliderHeight = t.win.H <= t.options.breakpoint ? t.options.height1 : t.options.height2
        }, n.prototype._getPosition = function () {
            var t = this;
            return t.position.top = t.elements.wrapper.offset().top, t.position.left = t.elements.wrapper.offset().left, t.position.width = t.elements.wrapper.width(), t.position.height = t.elements.wrapper.height(), t.position.right = t.win.W - t.position.width - t.position.left, t.position.bottom = t.win.H - t.position.height - t.position.top, t.position
        }, n.prototype._toFullscreen = function () {
            var t = this, e = t._getPosition();
            tl = new TimelineLite, tl.add("start", 0).add(function () {
                t.opened = !0, app.navbar.hidden(), $(t).on("winResized", t._getPosition), t.elements.wrapper.addClass(t.options.wrapperClass), t.elements.box.css({
                    top: e.top,
                    left: e.left,
                    right: e.right,
                    bottom: e.bottom,
                    width: "auto",
                    height: "auto",
                    position: "fixed",
                    zIndex: t.options.zIndex
                })
            }).to(t.elements.box, t.options.animDur, {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                ease: t.options.easing
            }, "start").to(t.elements.slider, t.options.animDur, {
                height: t.options.sliderHeight,
                ease: t.options.easing
            }, "start").to(t.elements.info, t.options.animDur, {
                y: t.options.infoTop,
                ease: t.options.easing
            }, "start").add(function () {
                t.elements.box.addClass(t.options["class"]), t._initSlider()
            })
        }, n.prototype._toInitState = function () {
            var t = this;
            tl = new TimelineLite, tl.add("start", 0).add(function () {
                t._destroySlider(), $(t).off("winResized"), t.elements.box.removeClass(t.options["class"])
            }).to(t.elements.box, t.options.animDur, {
                top: t.position.top,
                left: t.position.left,
                width: t.position.width,
                height: t.position.height,
                ease: t.options.easing
            }).to(t.elements.slider, t.options.animDur, {
                height: t.options.initSliderHeight,
                ease: t.options.easing
            }, "start").to(t.elements.info, t.options.animDur, {
                y: 0,
                ease: t.options.easing
            }, "start").add(function () {
                t.elements.box.css({
                    top: "",
                    left: "",
                    right: "",
                    bottom: "",
                    width: "",
                    height: "",
                    position: "",
                    zIndex: ""
                }), t.opened = !1, t.elements.wrapper.removeClass(t.options.wrapperClass), app.navbar.visible()
            })
        }, n.prototype._toFullSize = function () {
            var t = this, e = new TimelineLite;
            e.add(function () {
                t.opened = !0, t.elements.wrapper.addClass(t.options.wrapperClass), t.elements.detail.slideDown()
            }).to(t.elements.wrapper, 0, {height: "auto"}).to(t.elements.box, 0, {width: "100%"}).addLabel("beginAnimations").fromTo(t.elements.wrapper, t.options.animDur, {width: t.position.width}, {
                width: t.win.W,
                ease: Linear.easeNone
            }, "beginAnimations").to(t.elements.wrapper, 0, {width: "100%"}).to(t.elements.slider, t.options.animDur, {
                height: t.options.sliderHeight,
                ease: t.options.easing
            }, "beginAnimations").to(t.elements.info, t.options.animDur, {
                y: t.options.infoTop,
                ease: t.options.easing
            }, "beginAnimations").add(function () {
                t.elements.box.addClass(t.options["class"]), t._initSlider()
            })
        }, n.prototype._toInitSize = function (t) {
            var e = this, i = $.isNumeric(t) ? t : e.options.animDur, n = new TimelineLite;
            n.add(function () {
                e._destroySlider(), e.elements.box.removeClass(e.options["class"]), e.elements.detail.slideUp(i)
            }).addLabel("beginAnimations").to(e.elements.slider, i, {
                height: e.options.initSliderHeight,
                ease: e.options.easing
            }, "beginAnimations").to(e.elements.info, i, {
                y: 0,
                ease: e.options.easing
            }, "beginAnimations").to(e.elements.wrapper, i, {
                width: e.position.width,
                ease: e.options.easing
            }, "beginAnimations").add(function () {
                e.opened = !1, e.elements.wrapper.removeClass(e.options.wrapperClass)
            })
        }, n.prototype.open = function () {
            if (!this.opened) {
                var t = this;
                "slider" == t.mode && t._toFullSize(), "modal" == t.mode && t._toFullscreen(), app.openedObjects instanceof Array && app.openedObjects.push(t)
            }
        }, n.prototype.close = function (t) {
            if (this.opened) {
                var e, i, n, r = this, s = null, o = null;
                t === !1 ? (i = 0, e = !0, o = 0) : (i = r.slider.slick("slickGetOption", "speed"), e = !1, n = app.openedObjects.indexOf(r), n > -1 && app.openedObjects.splice(n, 1)), "slider" == r.mode ? s = function () {
                        r._toInitSize(o)
                    } : "modal" == r.mode && (s = function () {
                        r._toInitState()
                    }), 0 !== r.slider.slick("slickCurrentSlide") ? (r.slider.slick("slickGoTo", 0, e), setTimeout(function () {
                        s()
                    }, i)) : s()
            }
        }, e.exports = n
    }, {
        "./../../../bower_components/jquery/dist/jquery.js": 2,
        "./../../../bower_components/slick-carousel/slick/slick.min.js": 4,
        TimelineLite: 5,
        gsap: 7
    }],
    12: [function (t, e, i) {
        var n = t("./../../../bower_components/paper/dist/paper-full.js"), r = t("./../../../bower_components/jquery/dist/jquery.js");
        t("gsap"), t("TimelineLite");
        var s = function (t) {
            return this.canvas = r(t), this.paper = new n.PaperScope, this.state = {
                visible: !1,
                active: !1,
                inProgress: !1,
                standby: !1,
                morph: "circle",
                prevMorph: null,
                rectangle: "initial",
                star: "initial"
            }, this.sizes = {circle: 510, square: 450, triangle: 580, smTriangle: 290}, this.morphSize = {
                x: 580,
                y: 580
            }, this.dur = 800, this.fadeDur = 200, this.shiftY = 680, this.visibleClass = "is-visible", this.activeClass = "is-active", this.standbyScale = .55, this.engVersion = "en" === r("html").attr("lang") ? !0 : !1, this
        };
        s.prototype._initContent = function () {
            {
                var t = this;
                t.state
            }
            morphSize = t.morphSize, t.paper.setup(t.canvas[0]), t.backGroup = new t.paper.Group, t.frontGroup = new t.paper.Group, t.starGroup = new t.paper.Group, t.objects = {
                paths: {
                    morph: new t.paper.Path.Circle({
                        center: [t.paper.view.center.x, t.paper.view.center.y],
                        radius: t.sizes.circle / 2
                    }),
                    star: new t.paper.Path.Star({
                        center: t.paper.view.center,
                        points: 5,
                        radius1: 255,
                        radius2: 255,
                        fillColor: "red"
                    }),
                    fill: new t.paper.Path.Rectangle({
                        center: t.paper.view.center,
                        size: [t.paper.view.viewSize.width, t.paper.view.viewSize.height],
                        fillColor: {
                            gradient: {stops: ["#2B92A5", "#CDF0E9"]},
                            origin: [t.paper.view.center.x, t.paper.view.center.y - t.sizes.circle / 2],
                            destination: [t.paper.view.center.x, t.paper.view.center.y + t.sizes.circle / 2]
                        }
                    }),
                    fillStar: null
                },
                raster: {
                    circle: {
                        pic: new t.paper.Raster({source: "img/canvas1.png", position: t.paper.view.center}),
                        altPic: new t.paper.Raster({
                            source: "img/canvas1.png",
                            position: t.paper.view.center,
                            opacity: 0
                        }),
                        position: {x: t.paper.view.center.x + 111, y: t.paper.view.center.y + 92}
                    },
                    square: {
                        pic: new t.paper.Raster({source: "img/canvas2.png", position: t.paper.view.center}),
                        altPic: new t.paper.Raster({
                            source: "img/canvas2.png",
                            position: t.paper.view.center,
                            opacity: 0
                        }),
                        position: {x: t.paper.view.center.x + 29, y: t.paper.view.center.y + 102}
                    },
                    triangle: {
                        pic: new t.paper.Raster({
                            source: "img/canvas3.png",
                            position: t.paper.view.center,
                            visible: !0
                        }),
                        altPic: new t.paper.Raster({
                            source: "img/canvas3-1.png",
                            position: t.paper.view.center,
                            opacity: 0
                        }),
                        position: {x: t.paper.view.center.x + 45, y: t.paper.view.center.y + 90}
                    }
                },
                other: {
                    rectangle: new t.paper.Path.Rectangle({
                        point: [0, 0],
                        size: [513, 47],
                        strokeWidth: 3,
                        strokeColor: "#333"
                    })
                }
            }, t.objects.other.rectangle.bounds.center = new t.paper.Point(t.paper.view.center.x, t.paper.view.size.height - 64), t.backGroup.set({children: [t.objects.other.rectangle]}), t.frontGroup.set({
                children: [t.objects.paths.morph, t.objects.paths.fill],
                clipped: !0
            }), t.objects.paths.fillStar = t.objects.paths.fill.clone(), t.starGroup.set({
                children: [t.objects.paths.star, t.objects.paths.fillStar],
                clipped: !0,
                visible: !1
            }), r.each(t.objects.raster, function (e, i) {
                i.pic.position.x = i.position.x + morphSize.x, i.pic.position.y = i.position.y, i.altPic.position.x = i.position.x + morphSize.x / 2, i.altPic.position.y = i.position.y, t.frontGroup.addChild(i.pic), t.backGroup.addChild(i.altPic)
            })
        }, s.prototype._initEvents = function () {
            var t = this;
            t.paper.view.onFrame = function (t) {
            }
        }, s.prototype._render = function () {
            var t = this;
            t.paper.view.draw()
        }, s.prototype._calcPosition = function () {
            var t = this, e = t.sizes.circle, i = t.sizes.square, n = t.sizes.triangle, r = t.sizes.smTriangle;
            points = {
                circle: [{point: 0, x: -e / 2, y: 0, handle: {x: 0, y: 140}}, {
                    point: 1,
                    x: 0,
                    y: -e / 2,
                    handle: {x: -140, y: 0}
                }, {point: 2, x: e / 2, y: 0, handle: {x: 0, y: -140}}, {
                    point: 3,
                    x: 0,
                    y: e / 2,
                    handle: {x: 140, y: 0}
                }],
                square: [{point: 0, x: -i / 2, y: -i / 2, handle: {x: 0, y: 0}}, {
                    point: 1,
                    x: i / 2,
                    y: -i / 2,
                    handle: {x: 0, y: 0}
                }, {point: 2, x: i / 2, y: i / 2, handle: {x: 0, y: 0}}, {
                    point: 3,
                    x: -i / 2,
                    y: i / 2,
                    handle: {x: 0, y: 0}
                }],
                triangle: [{point: 0, x: -.36207 * n / 2, y: .58621 * n / 2, handle: {x: 0, y: 0}}, {
                    point: 1,
                    x: -n / 2,
                    y: .3931 * n / 2,
                    handle: {x: 0, y: 0}
                }, {point: 2, x: .53448 * n / 2, y: -n / 2, handle: {x: 0, y: 0}}, {
                    point: 3,
                    x: n / 2,
                    y: n / 2,
                    handle: {x: 0, y: 0}
                }],
                smTriangle: [{point: 0, x: -.36207 * r / 2, y: .58621 * r / 2, handle: {x: 0, y: 0}}, {
                    point: 1,
                    x: -r / 2,
                    y: .3931 * r / 2,
                    handle: {x: 0, y: 0}
                }, {point: 2, x: .53448 * r / 2, y: -r / 2, handle: {x: 0, y: 0}}, {
                    point: 3,
                    x: r / 2,
                    y: r / 2,
                    handle: {x: 0, y: 0}
                }]
            }, t.pathPosition = {
                morph: {
                    circle: t._translateCoordinates(points.circle),
                    square: t._translateCoordinates(points.square),
                    triangle: t._translateCoordinates(points.triangle),
                    smTriangle: t._translateCoordinates(points.smTriangle)
                },
                rectangle: {
                    initial: {
                        center: new t.paper.Point(t.paper.view.center.x, t.paper.view.size.height - 64),
                        size: new t.paper.Size(513, 47)
                    },
                    big: {center: t.paper.view.center, size: new t.paper.Size(791, 261)},
                    wide: {center: t.paper.view.center, size: new t.paper.Size(1221, 161)},
                    hidden: {
                        center: new t.paper.Point(t.paper.view.center.x, t.paper.view.size.height + 100),
                        size: new t.paper.Size(513, 47)
                    }
                }
            }
        }, s.prototype._toggleContentVisibility = function (t, e) {
            var i = this, n = "undefined" != typeof t ? t : !i.objects.raster.circle.pic.visible;
            r.each(i.objects.raster, function (t, e) {
                e.pic.visible = n, e.altPic.visible = n
            }), e || (i.objects.other.rectangle.visible = n)
        }, s.prototype._changePicture = function (t, e, i) {
            var n = this._getState("morph");
            if (t != n) {
                var s, o, a = this, l = (a._getState("prevMorph"), r.isNumeric(i) ? i / 1e3 : a.dur / 1e3);
                s = {
                    current: {
                        inner: {
                            pic: a.objects.raster[n].pic,
                            initPos: a.objects.raster[n].position,
                            pos: {x: a.paper.view.center.x - a.morphSize.x, y: a.objects.raster[n].position.y},
                            duration: l / 2,
                            delay: .2 * l,
                            easing: Power2.easeIn
                        },
                        outer: {
                            pic: a.objects.raster[n].altPic,
                            initPos: a.objects.raster[n].position,
                            pos: {x: a.paper.view.center.x - a.morphSize.x / 2, y: a.objects.raster[n].position.y},
                            duration: l / 2,
                            delay: 0,
                            opacity: 0,
                            easing: Power1.easeIn
                        }
                    },
                    next: {
                        inner: {
                            pic: a.objects.raster[t].pic,
                            initPos: {x: a.paper.view.center.x + a.morphSize.x, y: a.objects.raster[t].position.y},
                            pos: a.objects.raster[t].position,
                            duration: l / 2,
                            delay: l / 2,
                            easing: Power1.easeOut
                        },
                        outer: {
                            pic: a.objects.raster[t].altPic,
                            initPos: {x: a.paper.view.center.x + a.morphSize.x / 2, y: a.objects.raster[t].position.y},
                            pos: a.objects.raster[t].position,
                            duration: l / 2,
                            delay: l / 2,
                            opacity: 1,
                            easing: Power1.easeOut
                        }
                    }
                }, o = s, "REVERSE" == e && (o.current.inner.pos.x = a.paper.view.center.x + a.morphSize.x, o.current.outer.pos.x = a.paper.view.center.x + a.morphSize.x / 2, o.next.inner.initPos.x = a.paper.view.center.x - a.morphSize.x, o.next.outer.initPos.x = a.paper.view.center.x - a.morphSize.x / 2), o.next.inner.pic.position.x = o.next.inner.initPos.x, o.next.inner.pic.position.y = o.next.inner.initPos.y, o.next.outer.pic.position.x = o.next.outer.initPos.x, o.next.outer.pic.position.y = o.next.outer.initPos.y, o.next.outer.pic.scaling.x = 1, o.next.outer.pic.scaling.y = 1, r.each(o, function (t, e) {
                    TweenMax.to(e.inner.pic.position, e.inner.duration, {
                        x: e.inner.pos.x,
                        ease: e.inner.easing,
                        delay: e.inner.delay
                    }), TweenMax.to(e.outer.pic.position, e.outer.duration, {
                        x: e.outer.pos.x,
                        ease: e.outer.easing,
                        delay: e.outer.delay
                    }), TweenMax.to(e.outer.pic, e.outer.duration, {
                        opacity: e.outer.opacity,
                        ease: e.outer.easing,
                        delay: e.outer.delay
                    })
                })
            }
        }, s.prototype._togglePicture = function (t, e) {
            var i, n = this, s = n._getState("morph"), o = r.isNumeric(e) ? e / 1e3 : n.dur / 1e3, a = Linear.easeNone;
            "undefined" == typeof t || null === t ? (t = s, i = {
                    inner: {
                        pic: n.objects.raster[t].pic,
                        pos: {x: n.objects.raster[t].position.x, y: n.paper.view.center.y + n.morphSize.y / 3 * 2},
                        initPos: n.objects.raster[t].position
                    },
                    outer: {
                        pic: n.objects.raster[t].altPic,
                        pos: n.objects.raster[t].position,
                        initPos: n.objects.raster[t].position,
                        initOpacity: 1,
                        initScaling: {x: 1, y: 1},
                        opacity: 0,
                        scaling: {x: .2, y: .2},
                        delay: .1
                    }
                }) : i = {
                    inner: {
                        pic: n.objects.raster[t].pic,
                        initPos: {x: n.objects.raster[t].position.x, y: n.paper.view.center.y + n.morphSize.y / 3 * 2},
                        pos: n.objects.raster[t].position
                    },
                    outer: {
                        pic: n.objects.raster[t].altPic,
                        initPos: n.objects.raster[t].position,
                        pos: n.objects.raster[t].position,
                        initOpacity: 0,
                        initScaling: {x: .2, y: .2},
                        opacity: 1,
                        scaling: {x: 1, y: 1},
                        delay: .1
                    }
                }, i.inner.pic.position.x = i.inner.initPos.x, i.inner.pic.position.y = i.inner.initPos.y, i.outer.pic.position.x = i.outer.initPos.x, i.outer.pic.position.y = i.outer.initPos.y, i.outer.pic.opacity = i.outer.initOpacity, i.outer.pic.scale(i.outer.initScaling.x, n.objects.paths.morph.bounds.topCenter), TweenMax.to(i.inner.pic.position, o, {
                x: i.inner.pos.x,
                y: i.inner.pos.y,
                ease: a
            }), TweenMax.to(i.outer.pic.scaling, o, {
                x: i.outer.scaling.x,
                y: i.outer.scaling.y,
                ease: a
            }), TweenMax.to(i.outer.pic, o, {
                opacity: i.outer.opacity,
                ease: a,
                delay: i.outer.delay
            }), TweenMax.to(i.outer.pic.position, o, {x: i.outer.pos.x, y: i.outer.pos.y, ease: a})
        }, s.prototype._morph = function (t, e) {
            var i = this._getState("morph");
            if (t != i) {
                var n = this, s = r.isNumeric(e) ? e / 1e3 : n.dur / 1e3, o = Sine.easeOut, a = n.objects.paths.morph, l = a.segments, u = (n.pathPosition.morph[i], n.pathPosition.morph[t]);
                n._updateState("inProgress", !0), r.each(l, function (e, n) {
                    TweenMax.to(n.point, s, {
                        x: u[e].x,
                        y: u[e].y,
                        ease: o
                    }), ("circle" == i || "circle" == t) && (TweenMax.to(n.handleIn, s, {
                        x: u[e].handle.x,
                        y: u[e].handle.y,
                        ease: o
                    }), TweenMax.to(n.handleOut, s, {x: -u[e].handle.x, y: -u[e].handle.y, ease: o}))
                }), n._updateState("prevMorph", i), n._updateState("morph", t), setTimeout(function () {
                    n._updateState("inProgress", !1)
                }, s)
            }
        }, s.prototype._morphRectangle = function (t, e, i) {
            var n = this._getState("rectangle");
            if (t != n) {
                var s = this, o = s.objects.other.rectangle, a = s.pathPosition.rectangle[n], l = s.pathPosition.rectangle[t], u = Power2.easeOut, h = r.isNumeric(e) ? e / 1e3 : s.dur / 1e3, c = r.isNumeric(i) ? i / 1e3 : 0;
                TweenMax.fromTo(o.bounds.size, h, {width: a.size.width, height: a.size.height}, {
                    width: l.size.width,
                    height: l.size.height,
                    ease: u,
                    delay: c
                }), TweenMax.fromTo(o.position, h, {x: a.center.x, y: a.center.y}, {
                    x: l.center.x,
                    y: l.center.y,
                    ease: u,
                    delay: c
                }), s._updateState("rectangle", t)
            }
        }, s.prototype._updateState = function (t, e) {
            this.state[t] = e
        }, s.prototype._getState = function (t) {
            return t && this.state.hasOwnProperty(t) ? this.state[t] : this.state
        }, s.prototype._translateCoordinates = function (t) {
            var e = this, i = t;
            return r.each(i, function (t, i) {
                i.x += e.paper.view.center.x, i.y += e.paper.view.center.y
            }), i
        }, s.prototype._fade = function (t) {
            var e = this, i = e._getState("visible"), n = new TimelineLite;
            dur = r.isNumeric(t) ? t / 1e3 : e.fadeDur / 1e3, n.addLabel("beginFade").to(e.canvas, dur, {
                autoAlpha: i ? 0 : 1,
                ease: Linear.easeNone
            }).addLabel("endFade").add(function () {
                e.canvas.toggleClass(e.visibleClass)
            }, i ? "endFade" : "beginFade").add(function () {
                e._updateState("visible", !i)
            })
        }, s.prototype.init = function () {
            return this._initContent(), this._initEvents(), this._toggleContentVisibility(!1, !0), this._calcPosition(), this._initStar(), this._render(), this
        }, s.prototype.changeState = function (t, e, i) {
            this._changePicture(t, e, i), this._morph(t, i)
        }, s.prototype.activate = function (t, e) {
            var i = this._getState("active");
            if (!i) {
                var n = this, r = e || n.fadeDur;
                n._fade(), setTimeout(function () {
                    n._toggleContentVisibility(!0, !0), n._togglePicture(t), n._morph(t), n._morphRectangle("big"), n._updateState("active", !0)
                }, r)
            }
        }, s.prototype.deactivate = function () {
            var t = this._getState("active");
            if (t) {
                var e = this;
                e._togglePicture(), e._morph("circle"), e._morphRectangle("initial"), setTimeout(function () {
                    e._fade(), e._toggleContentVisibility(!1, !0)
                }, e.dur), e._updateState("active", !1)
            }
        }, s.prototype.moveDown = function (t) {
            if (!this._getState("active")) {
                var e = this, i = new TimelineLite, n = t || e.dur;
                i.addLabel("fadeIn", e.fadeDur / 1e3).add(function () {
                    e._fade(), e._toggleContentVisibility(!1)
                }).add(function () {
                    e.engVersion ? e._morph("smTriangle", n) : (e._toggleMorphToStar(), e._morphStar("final", n))
                }, "fadeIn").to(e.canvas, n / 1e3, {y: e.shiftY}, "fadeIn")
            }
        }, s.prototype.moveBack = function (t) {
            if (!this._getState("active")) {
                var e = this, i = new TimelineLite, n = t || e.dur;
                i.add(function () {
                    e.engVersion ? e._morph("circle", n) : e._morphStar("initial", n)
                }).to(e.canvas, n / 1e3, {y: 0}).add(function () {
                    e._fade()
                }).add(function () {
                    e._toggleContentVisibility(!0), e.engVersion || e._toggleMorphToStar()
                }, "+=0.2")
            }
        }, s.prototype.initStandby = function (t) {
            var e = this, i = e.objects.raster[e.state.morph], n = e.objects.raster[t], r = i.pic, s = i.altPic, o = n.pic, a = n.altPic;
            e._toggleContentVisibility(!0, !0), e.state.visible || e._fade(0), r.position.x = s.position.x = 3e3, o.position.x = a.position.x = n.position.x, o.position.y = a.position.y = n.position.y, e._morph(t, 0), setTimeout(function () {
                e.toStandby(0)
            }, 0)
        }, s.prototype.toStandby = function (t, e) {
            if (!this.state.inProgress) {
                var i = this, n = i.objects.paths.morph, s = i.objects.raster[i.state.morph].altPic, o = i.frontGroup, a = r.isNumeric(t) ? t / 1e3 : i.dur / 1e3, l = Back.easeOut.config(1), u = Power1.easeIn, h = new TimelineLite;
                i._updateState("inProgress", !0), h.add(function () {
                    i._morphRectangle("wide", t)
                }, "+=0.2").to(n.scaling, a, {
                    x: i.standbyScale,
                    y: i.standbyScale,
                    ease: l,
                    delay: a / 2
                }, 0).to(s.scaling, a / 2, {x: .3, y: .3, ease: u}, 0).to(s, a / 2, {
                    opacity: 0,
                    ease: u
                }, 0).to(o, a / 2, {opacity: 0, ease: u}).add(function () {
                    i._updateState("standby", !1), i._updateState("inProgress", !1), "function" == typeof e && e()
                })
            }
        }, s.prototype.fromStandby = function (t, e) {
            if (!this.state.inProgress) {
                var i = this, n = i.objects.paths.morph, s = i.objects.raster[i.state.morph].altPic, o = i.frontGroup, a = r.isNumeric(t) ? t / 1e3 : i.dur / 1e3, l = Back.easeIn.config(1.4), u = Power1.easeOut, h = new TimelineLite;
                i._updateState("inProgress", !0), h.add(function () {
                    i._morphRectangle("big", t)
                }, "+=0.2").to(o, 0, {opacity: 1, ease: u}, 0).to(n.scaling, a, {
                    x: 1,
                    y: 1,
                    ease: l
                }, 0).to(s.scaling, a / 2, {x: 1, y: 1, ease: u, delay: a}, 0).to(s, a / 2, {
                    opacity: 1,
                    ease: u,
                    delay: a
                }, 0).add(function () {
                    i._updateState("standby", !0), i._updateState("inProgress", !1), "function" == typeof e && e()
                })
            }
        }, s.prototype.fadeFrontGroup = function (t, e) {
            var i = this, n = r.isNumeric(e) ? e / 1e3 : i.fadeDur / 1e3, s = r.isNumeric(t) ? t : 1;
            TweenMax.to(i.frontGroup, n, {opacity: s, ease: Linear.easeNone})
        }, s.prototype._initStar = function () {
            function t(t, e) {
                r.each(t.segments, function (t, i) {
                    e.push({
                        point: t,
                        x: i.point.x,
                        y: i.point.y,
                        handleIn: {x: i.handleIn.x, y: i.handleIn.y},
                        handleOut: {x: i.handleOut.x, y: i.handleOut.y}
                    })
                })
            }

            var e = this, i = [], n = [], s = e.objects.paths.star, o = new e.paper.Path.Star({
                center: e.paper.view.center,
                points: 5,
                radius1: 72,
                radius2: 190
            });
            o.rotate(25), s.smooth(), t(s, i), t(o, n), e.pathPosition.star = {initial: i, "final": n}, o.remove()
        }, s.prototype._morphStar = function (t, e) {
            var i = this, n = i._getState("star"), s = r.isNumeric(e) ? e / 1e3 : i.dur / 1e3, o = Sine.easeOut, a = (i.pathPosition.star[n], i.pathPosition.star[t]);
            n != t && (r.each(i.objects.paths.star.segments, function (t, e) {
                TweenMax.to(e.point, s, {
                    x: a[t].x,
                    y: a[t].y,
                    ease: o
                }), TweenMax.to(e.handleIn, s, {
                    x: a[t].handleIn.x,
                    y: a[t].handleIn.y,
                    ease: o
                }), TweenMax.to(e.handleOut, s, {x: a[t].handleOut.x, y: a[t].handleOut.y, ease: o})
            }), i._updateState("star", t))
        }, s.prototype._toggleMorphToStar = function () {
            var t = this;
            t.frontGroup.visible = !t.frontGroup.visible, t.starGroup.visible = !t.starGroup.visible
        }, e.exports = s
    }, {
        "./../../../bower_components/jquery/dist/jquery.js": 2,
        "./../../../bower_components/paper/dist/paper-full.js": 3,
        TimelineLite: 5,
        gsap: 7
    }],
    13: [function (t, e, i) {
        function n(t, e) {
            return this.element = r(t), this.items = this.element.find(e).toArray(), this.active = !1, this.hidden = !1, this.inProgress = !1, this.initSlide = 0, this.direction = null, this.classes = {
                animate: "is-animate",
                active: "is-active",
                standby: "is-standby"
            }, this.options = {
                duration: 800,
                delay: 200,
                shiftY: -274,
                initWidth: this.element.outerWidth(),
                targetWidth: 1500,
                easing: Power2.easeOut
            }, this.slickOptions = {
                accessibility: !1,
                autoplay: !1,
                arrows: !1,
                draggable: !1,
                slide: e,
                speed: 500,
                swipe: !1,
                fade: !1,
                centerMode: !0,
                centerPadding: "0",
                focusOnSelect: !0,
                easing: "easeInCubic",
                infinite: !0,
                initialSlide: 1,
                slidesToShow: 3,
                respondTo: "slider"
            }, this._initEvents(), this
        }

        var r = t("./../../../bower_components/jquery/dist/jquery.js");
        t("./../../../bower_components/slick-carousel/slick/slick.min.js"), t("gsap"), t("TimelineLite"), n.prototype._initEvents = function () {
            var t = this;
            r(t.items).bind("click", function () {
                t.initSlide = r(this).index()
            }), t.element.on("beforeChange", function (e, i, n, r) {
                t.direction = n == i.slideCount - 1 && 0 == r ? "FORWARD" : 0 == n && r == i.slideCount - 1 ? "REVERSE" : r > n ? "FORWARD" : n > r ? "REVERSE" : null
            })
        }, n.prototype._init = function (t) {
            var e = this, i = r.isNumeric(t) ? t : e.initSlide;
            e.clonedItems = r(e.items).clone(!0).addClass("clone"), e.element.append(e.clonedItems), setTimeout(function () {
                e.element.slick(e.slickOptions), e.element.slick("slickGoTo", i)
            }, 0)
        }, n.prototype._destroy = function () {
            var t = this;
            t.element.slick("unslick"), r(t.clonedItems).remove(), r(t.items).removeClass(t.classes.active), t.direction = null
        }, n.prototype.initSlider = function (t) {
            var e = this;
            e._init(t)
        }, n.prototype.open = function (t, e) {
            if (!this.active && !this.inProgress) {
                var i = this, n = t / 1e3 || i.options.duration / 1e3, r = e / 1e3 || i.options.delay / 1e3, s = new TimelineLite;
                s.add(function () {
                    i.inProgress = !0
                }).delay(r).addLabel("afterDelay").add(function () {
                    i.element.addClass(i.classes.animate)
                }, "afterDelay").to(i.element, 0, {
                    x: "-50%",
                    marginLeft: 0
                }, "afterDelay").to(i.element, n, {
                    y: i.options.shiftY,
                    width: i.options.targetWidth,
                    ease: i.options.easing
                }).add(function () {
                    i._init(), i.element.addClass(i.classes.active), i.inProgress = !1, i.active = !0
                })
            }
        }, n.prototype.close = function (t, e) {
            if (this.active && !this.inProgress) {
                var i = this, n = t / 1e3 || i.options.duration / 1e3, r = e / 1e3 || 0, s = new TimelineLite;
                s.add(function () {
                    i.inProgress = !0
                }).delay(r).add(function () {
                    i.element.removeClass(i.classes.active), i._destroy()
                }).to(i.element, n, {
                    y: 0,
                    width: i.options.initWidth,
                    ease: i.options.easing,
                    clearProps: "all"
                }).add(function () {
                    i.element.removeClass(i.classes.animate), i.inProgress = !1, i.active = !1
                })
            }
        }, n.prototype.toggleHidden = function (t, e) {
            var i = this, n = r.isNumeric(t) ? t / 1e3 : .5, s = r.isNumeric(e) ? e / 1e3 : i.options.duration / 1e3;
            i.hidden ? (TweenMax.fromTo(i.element, n, {autoAlpha: 0, y: 50}, {
                    autoAlpha: 1,
                    y: 0,
                    clearProps: "all",
                    ease: i.options.easing,
                    delay: s
                }), i.hidden = !1) : (TweenMax.fromTo(i.element, n, {autoAlpha: 1, y: 0}, {
                    autoAlpha: 0,
                    y: 50,
                    ease: i.options.easing
                }), i.hidden = !0)
        }, n.prototype.activate = function (t, e) {
            if (!this.active && !this.inProgress) {
                {
                    var i = this;
                    t / 1e3 || i.options.duration / 1e3, e / 1e3 || i.options.delay / 1e3, new TimelineLite
                }
                i.element.removeClass(i.classes.standby).addClass(i.classes.animate).addClass(i.classes.active), i.active = !0
            }
        }, n.prototype.deactivate = function (t, e) {
            if (this.active && !this.inProgress) {
                {
                    var i = this, n = t || i.options.duration;
                    e || i.options.delay, new TimelineLite
                }
                i.element.removeClass(i.classes.active), setTimeout(function () {
                    i.element.removeClass(i.classes.animate), i.active = !1
                }, n), setTimeout(function () {
                    i.element.addClass(i.classes.standby)
                }, n + 100)
            }
        }, e.exports = n
    }, {
        "./../../../bower_components/jquery/dist/jquery.js": 2,
        "./../../../bower_components/slick-carousel/slick/slick.min.js": 4,
        TimelineLite: 5,
        gsap: 7
    }],
    14: [function (t, e, i) {
        function n(t, e) {
            return this.element = t instanceof jQuery ? t : $(t), this.button = this.element.find('input[type="radio"]'), this.container = e || this.element.next(), this.allFilter = "all", this.animDur = 1, this.init(), this
        }

        t("./../../../bower_components/jquery/dist/jquery.js"), t("gsap"), t("TimelineLite"), n.prototype._show = function (t) {
            var e = this;
            TweenMax.set(t, {display: ""}), TweenMax.fromTo(t, e.animDur, {y: 50, opacity: 0}, {
                y: 0,
                opacity: 1,
                clearProps: "all"
            })
        }, n.prototype._hide = function (t) {
            var e = this;
            TweenMax.fromTo(t, e.animDur, {y: 0, opacity: 1}, {y: 50, opacity: 0}), TweenMax.set(t, {
                display: "none",
                delay: e.animDur
            })
        }, n.prototype.init = function () {
            var t = this, e = 0, i = "M" + (+new Date).toString(36), n = i + (e++).toString(36);
            !t.container instanceof jQuery && (t.container = t.element.siblings(t.container)), t.button.attr("name", n), t.button.on("change", function (e) {
                var i = $(this).val();
                t.filterContent(i)
            })
        }, n.prototype.filterContent = function (t) {
            function e() {
                i.each(t === n.allFilter ? function (t, e) {
                        $(e).css("display", "")
                    } : function (e, i) {
                        var n = $(i);
                        n.data("filter") == t ? n.css("display", "") : n.hide()
                    })
            }

            var i, n = this, r = new TimelineLite;
            i = n.container.find("[data-filter]"), r.fromTo(n.container, n.animDur / 2, {opacity: 1, y: 0}, {
                opacity: 0,
                y: 50
            }).add(function () {
                app.closeAllOpenedObjects instanceof Function && app.closeAllOpenedObjects(), e()
            }).to(n.container, n.animDur / 2, {opacity: 1, y: 0, clearProps: "all"})
        }, e.exports = n
    }, {"./../../../bower_components/jquery/dist/jquery.js": 2, TimelineLite: 5, gsap: 7}],
    15: [function (t, e, i) {
        e.exports = function (t) {
            function e() {
                input = i.find("input");
                for (var t = 0; t < input.length; t++)if ("" === input[t].value)return !1;
                return !0
            }

            var i = $(t), n = i.data("subject"), r = "actions/send.php";
            i.on("submit", function (t) {
                t.preventDefault(), e() && $.ajax({
                    type: "POST",
                    url: r,
                    data: i.serialize() + "&subject=" + n,
                    success: function () {
                        i.addClass("is-success"), setTimeout(function () {
                            i.find("input, textarea").val("")
                        }, 1e3), setTimeout(function () {
                            i.removeClass("is-success")
                        }, 5e3);
                        // yandex counter
                    }
                })
            })
        }
    }, {}],
    16: [function (t, e, i) {
        var n = t("./_box.js"), r = t("./_tabs.js"), s = t("./_filter.js"), o = t("./_form-submit.js");
        e.exports = function (t, e) {
            var i = e instanceof jQuery ? e : $(e);
            i.load(t, function (t) {
                var e = i.find(".js-box"), a = i.find(".js-tabs-2"), l = i.find(".filter"), u = i.find("form");
                e.length && e.each(function (t, e) {
                    (new n).init(e)
                }), a.length && $.each(a, function (t, e) {
                    new r(e).init()
                }), l.length && $.each(l, function (t, e) {
                    new s(e)
                }), u.length && $.each(u, function (t, e) {
                    o(e)
                })
            })
        }
    }, {"./_box.js": 11, "./_filter.js": 14, "./_form-submit.js": 15, "./_tabs.js": 22}],
    17: [function (t, e, i) {
        function n(t) {
            this.wrapper = $(t), this.slider = this.wrapper.find(".main-slider__slides"), this.pagiBtns = this.wrapper.find(".main-slider__paginator").find("button"), this.circle = this.wrapper.find(".main-slider__morph"), this.overlay = this.wrapper.find(".main-slider__overlay"), this.hiddenClass = "is-hidden", this.slickOptions = {
                accessibility: !1,
                autoplay: !0,
                autoplaySpeed: 5e3,
                arrows: !1,
                draggable: !1,
                slide: ".slide",
                dots: !0,
                speed: 700,
                swipe: !1,
                fade: !0,
                useCSS: !0,
                pauseOnHover: !1
            }, this.animDur = 800, this.circleFade = 200, this.easing = Linear.easeNone
        }

        t("./../../../bower_components/jquery/dist/jquery.js"), t("./../../../bower_components/slick-carousel/slick/slick.min.js"), t("gsap"), t("TimelineLite"), n.prototype.init = function () {
            var t = this;
            t.slider.on("init", function (t, e) {
                button = e.$dots.find("button"), $.each(button, function (t, e) {
                    var i = $(e).text();
                    $(e).text(app.util.transformNumber(i))
                })
            }), t.slider.slick(t.slickOptions)
        }, n.prototype.play = function () {
            this.slider.slick("slickPlay")
        }, n.prototype.pause = function () {
            this.slider.slick("slickPause")
        }, n.prototype.rollUp = function (t, e) {
            var i = this, n = t / 1e3 || i.animDur / 1e3, r = e / 1e3 || i.circleFade / 1e3, s = new TimelineLite;
            s.add(function () {
                i.pause(), i.overlay.show(), i.wrapper.addClass(i.hiddenClass)
            }).to(i.circle, 0, {
                autoAlpha: 0,
                ease: i.easing,
                delay: r
            }).addLabel("circleFade").fromTo(i.overlay, n, {y: "100%"}, {
                y: "0%",
                ease: i.easing
            }, "circleFade").to(i.slider, n, {scale: .8, autoAlpha: 0, ease: i.easing}, "circleFade")
        }, n.prototype.rollDown = function (t) {
            var e = this, i = t / 1e3 || e.animDur / 1e3, n = new TimelineLite;
            n.addLabel("start").to(e.overlay, i, {
                y: "100%",
                clearProps: "all",
                ease: e.easing
            }, "start").to(e.slider, i, {
                scale: 1,
                autoAlpha: 1,
                clearProps: "all",
                ease: e.easing
            }, "start").to(e.circle, 0, {autoAlpha: 1, clearProps: "all", ease: e.easing}).add(function () {
                e.wrapper.removeClass(e.hiddenClass), e.overlay.hide(), e.play()
            })
        }, e.exports = n
    }, {
        "./../../../bower_components/jquery/dist/jquery.js": 2,
        "./../../../bower_components/slick-carousel/slick/slick.min.js": 4,
        TimelineLite: 5,
        gsap: 7
    }],
    18: [function (t, e, i) {
        function n(t, e) {
            for (var i = [], n = new google.maps.MarkerImage("/img/map-marker.png", null, null, null, new google.maps.Size(28, 42)), r = 0; r < e.length; r++) {
                var s = e[r], o = new google.maps.LatLng(s[0], s[1]), a = new google.maps.Marker({
                    position: o,
                    map: t,
                    icon: n,
                    title: s[3].head,
                    zIndex: s[2]
                });
                a.infoContent = s[3], i.push(a)
            }
            return i
        }

        function r() {
            // find me
            // oldMap 50.4189765, 30.473812
            var t = {
                zoom: 17,
                disableDefaultUI: !1,
                scrollwheel: !1,
                center: new google.maps.LatLng(55.7968504, 37.6879735),
                styles: l,
                mapTypeControl: !0,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.TOP_CENTER
                },
                zoomControl: !0,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: !0,
                scaleControlOptions: {},
                treetViewControl: !0,
                streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
                overviewMapControl: !1,
                overviewMapControlOptions: {},
                panControl: !1,
                panControlOptions: {}
            };
            o = new google.maps.Map(document.getElementById("map"), t);
            n(o, a)
        }

        function s() {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC93j5cRUF7vRiee-Jmni9vgjo2LQkB0n0&v=3&language=ru-RU&callback=app.initMap", document.body.appendChild(t)
        }

        var o, a, l;
        l = [{
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{color: "#a7a7a7"}]
        }, {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{visibility: "on"}, {color: "#737373"}]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{visibility: "on"}, {color: "#efefef"}]
        }, {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{visibility: "on"}, {color: "#dadada"}]
        }, {featureType: "poi", elementType: "labels", stylers: [{visibility: "off"}]}, {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [{visibility: "off"}]
        }, {featureType: "road", elementType: "labels.text.fill", stylers: [{color: "#696969"}]}, {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{visibility: "off"}]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{color: "#ffffff"}]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{visibility: "on"}, {color: "#b3b3b3"}]
        }, {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{color: "#ffffff"}]
        }, {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{color: "#d6d6d6"}]
        }, {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [{visibility: "on"}, {color: "#ffffff"}, {weight: 1.8}]
        }, {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [{color: "#d7d7d7"}]
        }, {featureType: "transit", elementType: "all", stylers: [{visibility: "on"}]}, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{color: "#d3d3d3"}]
        }], a = [[55.7968504, 37.6879735, 1, {
            head: "mosstroy",
            address: "address 1",
            tel: "8(495) 642-43-19",
            open: "8:30AM - 5:00PM",
            common: "some text"
        }]], window.onload = s, e.exports = r
      // find me
      // oldMap 50.4189765, 30.473812
    }, {}],
    19: [function (t, e, i) {
        function n(t, e) {
            this.el = r(t), this.wrapper = this.el.parent(), this.content = this.el.find(e).toArray(), this.scrollable = this.el.children().first(), this.positions = {}, this.winHeight = r(window).height(), this.opened = !1, this.inProgress = !1, this.activeContentIndex = null, this.options = {
                zIndex: 97,
                duration: 800,
                delay: 300,
                "class": "is-opened"
            }
        }

        var r = t("./../../../bower_components/jquery/dist/jquery.js");
        t("gsap"), t("TimelineLite"), t("gsap-scrollToPlugin");
        var s = t("./_load-partials.js");
        n.prototype._preventBubbling = function () {
            var t = arguments[0];
            t.stopPropagation()
        }, n.prototype._cancelBubbling = function (t) {
            var e = this;
            t === !0 ? this.el.on("mousewheel DOMMouseScroll scroll", e._preventBubbling) : t === !1 && this.el.off("mousewheel DOMMouseScroll scroll", e._preventBubbling)
        }, n.prototype._enableCustomScroll = function () {
            var t = this;
            t.scrollable.on("mousewheel", function (e) {
                e.stopPropagation(), app.util.scrollTo(e, t.scrollable, !0)
            })
        }, n.prototype._disableCustomScroll = function () {
            var t = this;
            t.scrollable.off("mousewheel")
        }, n.prototype._getPositions = function () {
            var t = this;
            return t.positions.top = t.wrapper.offset().top, t.positions.height = t.wrapper.height(), t.positions.bottom = t.positions.top - t.positions.height - t.winHeight, t.positions
        }, n.prototype._toFullscreen = function (t, e, i) {
            var n = this, r = e / 1e3 || n.options.duration / 1e3, s = i / 1e3 || n.options.delay / 1e3, o = n.content[t], a = n._getPositions(), l = new TimelineLite;
            l.add(function () {
                n.inProgress = !0, n.opened = !0, n.activeContentIndex = t
            }).to(n.el, 0, {
                top: a.top,
                left: 0,
                right: 0,
                height: a.height,
                position: "fixed",
                zIndex: n.options.zIndex
            }).to(n.el, r, {top: 0, height: n.winHeight, ease: Linear.easeNone}).to(n.el, 0, {
                height: "100%"
            }).delay(s).fromTo(o, r / 2, {display: "block", opacity: 0, y: 100}, {
                opacity: 1,
                y: 0,
                ease: Linear.easeNone
            }).add(function () {
                n.inProgress = !1, n.el.addClass(n.options["class"]), n._enableCustomScroll()
            })
        }, n.prototype._toInitState = function (t, e) {
            var i = this, n = t / 1e3 || i.options.duration / 1e3, r = e / 1e3 || i.options.delay / 1e3, s = (new TimelineLite).pause();
            s.add(function () {
                i.inProgress = !0, i.el.removeClass(i.options["class"])
            }).to(i.content, n / 2, {
                y: 100,
                opacity: 0,
                ease: Linear.easeNone
            }).to(i.content, 0, {display: "none"}).to(i.el, n, {
                top: i.positions.top,
                height: i.positions.height,
                clearProps: "all",
                ease: Linear.easeNone,
                delay: r
            }).add(function () {
                i.inProgress = !1, i.opened = !1, i._disableCustomScroll()
            }), i.scrollable.scrollTop() > 0 ? i.scrollable.animate({scrollTop: 0}, 500, function () {
                    s.play()
                }) : s.play()
        }, n.prototype._loadContent = function (t, e) {
            var i = r(e);
            i.children().length > 0 || s(t, i)
        }, n.prototype.open = function (t, e, i, n) {
            if (!this.opened) {
                var r = this, s = r.content[t];
                r._loadContent(e, s), r._cancelBubbling(!0), r._toFullscreen(t, i, n)
            }
        }, n.prototype.close = function (t, e) {
            if (this.opened) {
                var i = this;
                i._cancelBubbling(!1), i._toInitState(t, e)
            }
        }, n.prototype.switchContent = function (t, e, i) {
            if (this.opened && this.activeContentIndex != t) {
                var n = this, r = i / 1e3 || n.options.duration / 1e3 * .5;
                prevContent = n.content[n.activeContentIndex], nextContent = n.content[t], tl = new TimelineLite, n._loadContent(e, nextContent), tl.delay(r).to(prevContent, r, {
                    y: 100,
                    opacity: 0
                }).to(prevContent, 0, {display: "none"}).to(nextContent, 0, {display: "block"}).fromTo(nextContent, r, {
                    y: 100,
                    opacity: 0
                }, {y: 0, opacity: 1}).add(function () {
                    n.activeContentIndex = t
                }, "+=0")
            }
        }, e.exports = n
    }, {
        "./../../../bower_components/jquery/dist/jquery.js": 2,
        "./_load-partials.js": 16,
        TimelineLite: 5,
        gsap: 7,
        "gsap-scrollToPlugin": 8
    }],
    20: [function (t, e, i) {
        function n(t) {
            this.element = r(t || "#nav"), this.front = this.element.find(".nav__front"), this.sections = r(".js-section"), this.buttons = this.element.find(".nav__back .nav__link"), this.winHeigh = r(window).height(), this.sectionsHeight = [], this.buttonsHeight = [], this.buttonsTop = [], this.height = 0, this.activeSection = null, this.sectionProgress = 0, this.duration = .5, this.scrollToDur = 1, this.inProggres = !1, this.isHidden = !1
        }

        var r = t("./../../../bower_components/jquery/dist/jquery.js");
        t("gsap"), t("gsap-scrollToPlugin");
        var s = t("scrollmagic");
        n.prototype._initEvents = function () {
            var t = this;
            r(window).on("resize", function (e) {
                var i = t.winHeigh;
                t.winHeigh = r(window).height(), t.winHeigh != i && t.reinit()
            }), r.each(t.buttons, function (e, i) {
                r(i).on("mouseover", function (i) {
                    var n = t.buttonsTop[e] + t.buttonsHeight[e] - t.height;
                    t.update(n, .3)
                }), r(i).on("mouseleave", function (e) {
                    t.update(null, .3)
                }), r(i).on("click", function (e) {
                    e.preventDefault();
                    var i = "#" + r(this).attr("href").slice(1);
                    t.scrollToSection(i)
                })
            })
        }, n.prototype._calcButtonsParam = function () {
            var t = this;
            r.each(t.buttons, function (e, i) {
                var n = r(i).outerWidth(), s = r(i).offset().top;
                t.buttonsHeight[e] = n, t.buttonsTop[e] = s
            })
        }, n.prototype._buildScenes = function () {
            var t = this;
            app.scrollmagic.navbar = {scenes: {}}, r.each(t.sections, function (e, i) {
                var n = i.id ? app.util.toCamelCase(i.id) : "section" + e, o = r(i).outerHeight();
                t.sectionsHeight[e] = o, app.scrollmagic.navbar.scenes[n] = new s.Scene({
                    duration: o,
                    triggerElement: i,
                    triggerHook: "onCenter",
                    loglevel: 1
                }).on("start", function (i) {
                    t.activeSection = n, "FORWARD" == i.scrollDirection && (t.height = t.buttonsTop[e], t.update())
                }).on("progress", function (i) {
                    t.height = t.buttonsTop[e] + t.buttonsHeight[e] * i.progress, t.update()
                }).on("end", function (i) {
                    "REVERSE" == i.scrollDirection && (t.height = t.buttonsTop[e], t.update()), "FORWARD" == i.scrollDirection && e === t.sections.length - 1 && (t.height = t.winHeigh, t.update())
                }).addTo(app.scrollmagic.controller)
            })
        }, n.prototype.init = function () {
            var t = this;
            t._calcButtonsParam(), t.height = t.buttonsTop[0], t._buildScenes(), t._initEvents()
        }, n.prototype.reinit = function () {
            var t = this;
            t._calcButtonsParam()
        }, n.prototype.update = function (t, e) {
            var i = this, n = t || 0, r = e || i.duration, s = ((i.height + n) / i.winHeigh * 100).toFixed(2) + "%";
            TweenMax.to(i.front, r, {width: s, overwrite: "all", ease: Linear.easeNone})
        }, n.prototype.scrollToSection = function (t) {
            var e = this, i = r(t).position().top;
            TweenMax.to(app.rootContainer, e.scrollToDur, {
                scrollTo: {y: i, autoKill: !0},
                ease: Power3.easeOut,
                overwrite: 5,
                onStart: function () {
                    e.inProggres = !0
                },
                onComplete: function () {
                    e.inProggres = !1
                }
            })
        }, n.prototype.hidden = function (t, e) {
            if (!this.isHidden) {
                var i = this, n = t / 1e3 || i.duration, r = e / 1e3 || 0;
                TweenMax.fromTo(i.element, n, {xPercent: 0}, {
                    xPercent: 100,
                    ease: Power2.easeIn,
                    delay: r,
                    onComplete: function () {
                        i.isHidden = !0
                    }
                })
            }
        }, n.prototype.visible = function (t, e) {
            if (this.isHidden) {
                var i = this, n = t / 1e3 || i.duration, r = e / 1e3 || 0;
                TweenMax.fromTo(i.element, n, {xPercent: 100}, {
                    xPercent: 0,
                    ease: Power2.easeOut,
                    clearProps: "all",
                    delay: r,
                    onComplete: function () {
                        i.isHidden = !1
                    }
                })
            }
        }, e.exports = n
    }, {"./../../../bower_components/jquery/dist/jquery.js": 2, gsap: 7, "gsap-scrollToPlugin": 8, scrollmagic: 9}],
    21: [function (t, e, i) {
        t("./../../../bower_components/jquery/dist/jquery.js"), t("gsap"), t("TimelineLite");
        var n = t("scrollmagic");
        e.exports = function () {
            function t() {
                i.box.manRow.each(function (t, e) {
                    TweenMax.to(e, .2, {opacity: 1, y: 0}).delay(.05 * t)
                })
            }

            function e() {
                i.box.manRow.each(function (t, e) {
                    TweenMax.to(e, .2, {opacity: 0, y: -30}).delay(.05 * (i.box.manRow.length - t))
                })
            }

            var i = {}, r = $("#outer");
            return i.controller = new n.Controller({container: r[0]}), TweenMax.lagSmoothing(1e3, 16), i.toparea = {
                el: $(".catalog"),
                scene: null
            }, i.toparea.scene = new n.Scene({
                duration: 300,
                triggerElement: i.toparea.el[0],
                triggerHook: "onLeave",
                loglevel: 1
            }).on("end", function (t) {
                app.catalog.opened || app.toparea.toggle()
            }).addTo(i.controller), i.timeline = {
                el: $("#timeline"),
                trigger: $("#trigger1")[0],
                animated: !1,
                state2: !1,
                scene: null
            }, i.timeline.scene = new n.Scene({
                duration: 450,
                // find me
                /*
                  timeline animation here
                  change offset property if
                  mobile phone (you can check it with is mobile library)
                */
                offset: 15,
                triggerElement: i.timeline.trigger,
                triggerHook: "onCenter",
                loglevel: 1
            }).on("start", function (t) {
                i.timeline.el.toggleClass("is-animate")
            }).on("end", function (t) {
                i.timeline.el.toggleClass("state-2")
            }).addTo(i.controller), i.factsText = {
                el: $(".facts__text")[0],
                offset: 200,
                duration: 800,
                scene: null
            }, i.factsGroup1 = {
                el: $(".facts-group")[0],
                offset: 200,
                scene: null
            }, i.factsGroup2 = {
                el: $(".facts-group")[1],
                offset: 200,
                scene: null
            }, $([i.factsText, i.factsGroup1, i.factsGroup2]).each(function (t, e) {
                e.scene = new n.Scene({
                    duration: e.duration || 0,
                    offset: e.offset || 0,
                    triggerElement: e.trigger || e.el,
                    triggerHook: e.triggerHook || "onCenter",
                    loglevel: 1
                }).setClassToggle(e.el, "is-animate").addTo(i.controller)
            }), i.box = {
                el: $(".box"),
                manRow: $(".box__bg-row"),
                canAnimate: !0,
                stateChanged: !1,
                scene: null
            }, TweenMax.set(i.box.manRow, {opacity: 0, y: -30}), i.box.scene = new n.Scene({
                duration: 800,
                triggerElement: i.box.el[0],
                loglevel: 1
            }).on("start", function (n) {
                i.box.canAnimate && (i.box.canAnimate = !1, i.box.el.toggleClass("is-animate"), "DURING" === n.state && t(), "BEFORE" === n.state && e(), setTimeout(function () {
                    i.box.canAnimate = !0
                }, 600))
            }).addTo(i.controller), i.deco = {el: $(".deco__inner"), scenes: {}}, r.mousemove(function (t) {
                i.deco.el.each(function (e, i) {
                    TweenMax.to(i, .5, {x: t.screenX / 100, y: t.screenY / 100})
                })
            }), i.head = {elements: $(".head"), scenes: {}}, i.head.elements.each(function (t, e) {
                var r = $(e).find(".head__img"), s = $(e).find(".head__text");
                TweenMax.set(r, {bottom: -100}), TweenMax.set(s, {bottom: -100}), i.head.scenes["head" + t] = new n.Scene({
                    duration: $(window).height() + $(e).height(),
                    offset: -$(e).height() / 2,
                    triggerElement: e,
                    triggerHook: "onEnter",
                    loglevel: 1
                }).on("progress", function (t) {
                    var e = (100 * t.progress).toFixed(1), i = (370 * t.progress).toFixed(1);
                    TweenMax.to(r, .05, {y: -e, ease: Linear.easeNone}), TweenMax.to(s, .05, {
                        y: -i,
                        ease: Linear.easeNone
                    })
                }).addTo(i.controller)
            }), i.tables = {el: $(".js-table"), scenes: {}}, i.tables.el.each(function (t, e) {
                i.tables.scenes["table" + t] = new n.Scene({
                    offset: -100,
                    triggerElement: e,
                    triggerHook: "onCenter",
                    loglevel: 1
                }).setClassToggle(e, "is-animate").addTo(i.controller)
            }), i
        }
    }, {"./../../../bower_components/jquery/dist/jquery.js": 2, TimelineLite: 5, gsap: 7, scrollmagic: 9}],
    22: [function (t, e, i) {
        function n(t, e) {
            this.options = {
                dur: 400,
                hideDelay: 500,
                showDelay: 1e3,
                animClass: "is-animate",
                activeClass: "is-active",
                tabButton: ".btn_tab",
                tabContent: ".tabs__content",
                collapseOnScroll: !1
            }, r.extend(this.options, e || {}), this.wrapper = t instanceof jQuery ? t : r(t), this.button = this.wrapper.find(this.options.tabButton), this.content = this.wrapper.find(this.options.tabContent), this.activeTab = null, this.canSwitch = !0, this.init()
        }

        var r = t("./../../../bower_components/jquery/dist/jquery.js"), s = t("scrollmagic");
        n.prototype._initEvents = function () {
            var t = this;
            t.content.each(function (t) {
                var e = r(this);
                e.is(":visible") && e.hide()
            }), t.button.each(function (e) {
                var i = r(this);
                i.on("click", function (n) {
                    n.preventDefault(), t.canSwitch && (null !== t.activeTab ? e != t.activeTab ? (t.switchContent(e), i.addClass(t.options.activeClass)) : t.hideContent() : t.showContent(e))
                })
            })
        }, n.prototype._toggleBorder = function () {
            var t = this, e = r(t.content[t.activeTab]).find(".table__border");
            e.toggleClass(t.options.animClass)
        }, n.prototype._showBorders = function () {
            var t = this, e = t.wrapper.find(".table__border");
            e.addClass(t.options.animClass)
        }, n.prototype._hideBorders = function () {
            var t = this, e = t.wrapper.find(".table__border");
            e.removeClass(t.options.animClass)
        }, n.prototype._buildScene = function () {
            var t = this;
            t.scene = new s.Scene({
                offset: 0,
                triggerElement: t.wrapper[0],
                triggerHook: "onEnter",
                loglevel: 1
            }).setClassToggle(t.wrapper[0], t.options.animClass).addTo(app.scrollmagic.controller), t.options.collapseOnScroll && (t.scene.duration("100%"), t.scene.on("start end", function (e) {
                null !== t.activeTab && t.hideContent()
            }))
        }, n.prototype.showContent = function (t) {
            var e = this, i = r(e.button[t]), n = r(e.content[t]);
            e.activeTab = t, e.canSwitch = !1, i.hasClass(e.options.activeClass) || i.addClass(e.options.activeClass), n.slideDown({
                duration: e.options.dur,
                start: function () {
                    setTimeout(function () {
                        e._showBorders()
                    }, 100)
                },
                complete: function () {
                    e.canSwitch = !0
                }
            })
        }, n.prototype.hideContent = function () {
            var t = this;
            null !== t.activeTab && (t.canSwitch = !1, t._hideBorders(), t.button.removeClass(t.options.activeClass), r(t.content[t.activeTab]).delay(t.options.hideDelay).slideUp({
                duration: t.options.dur,
                complete: function () {
                    t.canSwitch = !0
                }
            }), t.activeTab = null)
        }, n.prototype.switchContent = function (t) {
            var e = this, i = r(e.content[t]);
            null !== e.activeTab && (e.canSwitch = !1, e.button.removeClass(e.options.activeClass), r(e.content[e.activeTab]).slideUp(e.options.dur), i.delay(e.options.dur).slideDown({
                duration: e.options.dur,
                complete: function () {
                    e.activeTab = t, e.canSwitch = !0
                }
            }))
        }, n.prototype.init = function () {
            var t = this;
            return t._initEvents(), t._buildScene(), this
        }, e.exports = n
    }, {"./../../../bower_components/jquery/dist/jquery.js": 2, scrollmagic: 9}]
}, {}, [1]);
//# sourceMappingURL=main.js.map
