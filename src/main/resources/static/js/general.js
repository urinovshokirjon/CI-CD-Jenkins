!function () {
    var t = {
        4963: function (t) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, 7722: function (t, e, n) {
            var r = n(6314)("unscopables"), o = Array.prototype;
            null == o[r] && n(7728)(o, r, {}), t.exports = function (t) {
                o[r][t] = !0
            }
        }, 7007: function (t, e, n) {
            var r = n(5286);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, 9315: function (t, e, n) {
            var r = n(2110), o = n(875), i = n(2337);
            t.exports = function (t) {
                return function (e, n, s) {
                    var a, c = r(e), u = o(c.length), l = i(s, u);
                    if (t && n != n) {
                        for (; u > l;) if ((a = c[l++]) != a) return !0
                    } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                    return !t && -1
                }
            }
        }, 5466: function (t) {
            var e = {}.toString;
            t.exports = function (t) {
                return e.call(t).slice(8, -1)
            }
        }, 5645: function (t) {
            var e = t.exports = {version: "2.6.12"};
            "number" == typeof __e && (__e = e)
        }, 741: function (t, e, n) {
            var r = n(4963);
            t.exports = function (t, e, n) {
                if (r(t), void 0 === e) return t;
                switch (n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n)
                        };
                    case 2:
                        return function (n, r) {
                            return t.call(e, n, r)
                        };
                    case 3:
                        return function (n, r, o) {
                            return t.call(e, n, r, o)
                        }
                }
                return function () {
                    return t.apply(e, arguments)
                }
            }
        }, 1355: function (t) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, 7057: function (t, e, n) {
            t.exports = !n(4253)((function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 2457: function (t, e, n) {
            var r = n(5286), o = n(3816).document, i = r(o) && r(o.createElement);
            t.exports = function (t) {
                return i ? o.createElement(t) : {}
            }
        }, 4430: function (t) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, 2985: function (t, e, n) {
            var r = n(3816), o = n(5645), i = n(7728), s = n(3415), a = n(741), c = "prototype",
                u = function (t, e, n) {
                    var l, f, p, d, h = t & u.F, v = t & u.G, m = t & u.S, b = t & u.P, y = t & u.B,
                        g = v ? r : m ? r[e] || (r[e] = {}) : (r[e] || {})[c], x = v ? o : o[e] || (o[e] = {}),
                        S = x[c] || (x[c] = {});
                    for (l in v && (n = e), n) p = ((f = !h && g && void 0 !== g[l]) ? g : n)[l], d = y && f ? a(p, r) : b && "function" == typeof p ? a(Function.call, p) : p, g && s(g, l, p, t & u.U), x[l] != p && i(x, l, d), b && S[l] != p && (S[l] = p)
                };
            r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
        }, 4253: function (t) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, 18: function (t, e, n) {
            t.exports = n(3825)("native-function-to-string", Function.toString)
        }, 3816: function (t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }, 9181: function (t) {
            var e = {}.hasOwnProperty;
            t.exports = function (t, n) {
                return e.call(t, n)
            }
        }, 7728: function (t, e, n) {
            var r = n(9275), o = n(681);
            t.exports = n(7057) ? function (t, e, n) {
                return r.f(t, e, o(1, n))
            } : function (t, e, n) {
                return t[e] = n, t
            }
        }, 639: function (t, e, n) {
            var r = n(3816).document;
            t.exports = r && r.documentElement
        }, 1734: function (t, e, n) {
            t.exports = !n(7057) && !n(4253)((function () {
                return 7 != Object.defineProperty(n(2457)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        }, 9797: function (t, e, n) {
            var r = n(5466);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                return "String" == r(t) ? t.split("") : Object(t)
            }
        }, 5286: function (t) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, 9988: function (t, e, n) {
            "use strict";
            var r = n(2503), o = n(681), i = n(2943), s = {};
            n(7728)(s, n(6314)("iterator"), (function () {
                return this
            })), t.exports = function (t, e, n) {
                t.prototype = r(s, {next: o(1, n)}), i(t, e + " Iterator")
            }
        }, 2923: function (t, e, n) {
            "use strict";
            var r = n(4461), o = n(2985), i = n(3415), s = n(7728), a = n(7234), c = n(9988), u = n(2943), l = n(468),
                f = n(6314)("iterator"), p = !([].keys && "next" in [].keys()), d = "keys", h = "values",
                v = function () {
                    return this
                };
            t.exports = function (t, e, n, m, b, y, g) {
                c(n, e, m);
                var x, S, w, L = function (t) {
                        if (!p && t in P) return P[t];
                        switch (t) {
                            case d:
                            case h:
                                return function () {
                                    return new n(this, t)
                                }
                        }
                        return function () {
                            return new n(this, t)
                        }
                    }, k = e + " Iterator", O = b == h, j = !1, P = t.prototype, T = P[f] || P["@@iterator"] || b && P[b],
                    _ = T || L(b), A = b ? O ? L("entries") : _ : void 0, C = "Array" == e && P.entries || T;
                if (C && (w = l(C.call(new t))) !== Object.prototype && w.next && (u(w, k, !0), r || "function" == typeof w[f] || s(w, f, v)), O && T && T.name !== h && (j = !0, _ = function () {
                    return T.call(this)
                }), r && !g || !p && !j && P[f] || s(P, f, _), a[e] = _, a[k] = v, b) if (x = {
                    values: O ? _ : L(h),
                    keys: y ? _ : L(d),
                    entries: A
                }, g) for (S in x) S in P || i(P, S, x[S]); else o(o.P + o.F * (p || j), e, x);
                return x
            }
        }, 5436: function (t) {
            t.exports = function (t, e) {
                return {value: e, done: !!t}
            }
        }, 7234: function (t) {
            t.exports = {}
        }, 4461: function (t) {
            t.exports = !1
        }, 2503: function (t, e, n) {
            var r = n(7007), o = n(5588), i = n(4430), s = n(9335)("IE_PROTO"), a = function () {
            }, c = "prototype", u = function () {
                var t, e = n(2457)("iframe"), r = i.length;
                for (e.style.display = "none", n(639).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u[c][i[r]];
                return u()
            };
            t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (a[c] = r(t), n = new a, a[c] = null, n[s] = t) : n = u(), void 0 === e ? n : o(n, e)
            }
        }, 9275: function (t, e, n) {
            var r = n(7007), o = n(1734), i = n(1689), s = Object.defineProperty;
            e.f = n(7057) ? Object.defineProperty : function (t, e, n) {
                if (r(t), e = i(e, !0), r(n), o) try {
                    return s(t, e, n)
                } catch (t) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        }, 5588: function (t, e, n) {
            var r = n(9275), o = n(7007), i = n(7184);
            t.exports = n(7057) ? Object.defineProperties : function (t, e) {
                o(t);
                for (var n, s = i(e), a = s.length, c = 0; a > c;) r.f(t, n = s[c++], e[n]);
                return t
            }
        }, 468: function (t, e, n) {
            var r = n(9181), o = n(508), i = n(9335)("IE_PROTO"), s = Object.prototype;
            t.exports = Object.getPrototypeOf || function (t) {
                return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
            }
        }, 189: function (t, e, n) {
            var r = n(9181), o = n(2110), i = n(9315)(!1), s = n(9335)("IE_PROTO");
            t.exports = function (t, e) {
                var n, a = o(t), c = 0, u = [];
                for (n in a) n != s && r(a, n) && u.push(n);
                for (; e.length > c;) r(a, n = e[c++]) && (~i(u, n) || u.push(n));
                return u
            }
        }, 7184: function (t, e, n) {
            var r = n(189), o = n(4430);
            t.exports = Object.keys || function (t) {
                return r(t, o)
            }
        }, 681: function (t) {
            t.exports = function (t, e) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
            }
        }, 3415: function (t, e, n) {
            var r = n(3816), o = n(7728), i = n(9181), s = n(3953)("src"), a = n(18), c = "toString",
                u = ("" + a).split(c);
            n(5645).inspectSource = function (t) {
                return a.call(t)
            }, (t.exports = function (t, e, n, a) {
                var c = "function" == typeof n;
                c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
            })(Function.prototype, c, (function () {
                return "function" == typeof this && this[s] || a.call(this)
            }))
        }, 2943: function (t, e, n) {
            var r = n(9275).f, o = n(9181), i = n(6314)("toStringTag");
            t.exports = function (t, e, n) {
                t && !o(t = n ? t : t.prototype, i) && r(t, i, {configurable: !0, value: e})
            }
        }, 9335: function (t, e, n) {
            var r = n(3825)("keys"), o = n(3953);
            t.exports = function (t) {
                return r[t] || (r[t] = o(t))
            }
        }, 3825: function (t, e, n) {
            var r = n(5645), o = n(3816), i = "__core-js_shared__", s = o[i] || (o[i] = {});
            (t.exports = function (t, e) {
                return s[t] || (s[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: r.version,
                mode: n(4461) ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        }, 2337: function (t, e, n) {
            var r = n(1467), o = Math.max, i = Math.min;
            t.exports = function (t, e) {
                return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
            }
        }, 1467: function (t) {
            var e = Math.ceil, n = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t)
            }
        }, 2110: function (t, e, n) {
            var r = n(9797), o = n(1355);
            t.exports = function (t) {
                return r(o(t))
            }
        }, 875: function (t, e, n) {
            var r = n(1467), o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        }, 508: function (t, e, n) {
            var r = n(1355);
            t.exports = function (t) {
                return Object(r(t))
            }
        }, 1689: function (t, e, n) {
            var r = n(5286);
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, o;
                if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
                if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
                if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }, 3953: function (t) {
            var e = 0, n = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
            }
        }, 6314: function (t, e, n) {
            var r = n(3825)("wks"), o = n(3953), i = n(3816).Symbol, s = "function" == typeof i;
            (t.exports = function (t) {
                return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
            }).store = r
        }, 6997: function (t, e, n) {
            "use strict";
            var r = n(7722), o = n(5436), i = n(7234), s = n(2110);
            t.exports = n(2923)(Array, "Array", (function (t, e) {
                this._t = s(t), this._i = 0, this._k = e
            }), (function () {
                var t = this._t, e = this._k, n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
            }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
        }, 2773: function (t, e, n) {
            "use strict";
            var r = n(2985), o = n(9315)(!0);
            r(r.P, "Array", {
                includes: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), n(7722)("includes")
        }, 1181: function (t, e, n) {
            for (var r = n(6997), o = n(7184), i = n(3415), s = n(3816), a = n(7728), c = n(7234), u = n(6314), l = u("iterator"), f = u("toStringTag"), p = c.Array, d = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = o(d), v = 0; v < h.length; v++) {
                var m, b = h[v], y = d[b], g = s[b], x = g && g.prototype;
                if (x && (x[l] || a(x, l, p), x[f] || a(x, f, b), c[b] = p, y)) for (m in r) x[m] || i(x, m, r[m], !0)
            }
        }, 7025: function (t, e, n) {
            !function (t) {
                "use strict";
                var e, r = /^[a-z]+:/, o = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i, i = /\/\/(.*?)(?::(.*?))?@/, s = /^win/i,
                    a = /:$/, c = /^\?/, u = /^#/, l = /(.*\/)/, f = /^\/{2,}/, p = /(^\/?)/, d = /'/g,
                    h = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, v = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
                    m = /%([0-7][0-9a-f])/gi, b = /\+/g, y = /^\w:$/, g = /[^/#?]/,
                    x = "undefined" == typeof window && void 0 !== n.g && !0,
                    S = !x && t.navigator && t.navigator.userAgent && ~t.navigator.userAgent.indexOf("MSIE"),
                    w = x ? t.require : null, L = {
                        protocol: "protocol",
                        host: "hostname",
                        port: "port",
                        path: "pathname",
                        query: "search",
                        hash: "hash"
                    }, k = {ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443};

                function O() {
                    return x ? e = e || "file://" + (process.platform.match(s) ? "/" : "") + w("fs").realpathSync(".") : "about:srcdoc" === document.location.href ? self.parent.document.location.href : document.location.href
                }

                function j(t) {
                    return encodeURIComponent(t).replace(d, "%27")
                }

                function P(t) {
                    return (t = (t = (t = t.replace(b, " ")).replace(h, (function (t, e, n, r) {
                        var o = parseInt(e, 16) - 224, i = parseInt(n, 16) - 128;
                        if (0 == o && i < 32) return t;
                        var s = (o << 12) + (i << 6) + (parseInt(r, 16) - 128);
                        return 65535 < s ? t : String.fromCharCode(s)
                    }))).replace(v, (function (t, e, n) {
                        var r = parseInt(e, 16) - 192;
                        if (r < 2) return t;
                        var o = parseInt(n, 16) - 128;
                        return String.fromCharCode((r << 6) + o)
                    }))).replace(m, (function (t, e) {
                        return String.fromCharCode(parseInt(e, 16))
                    }))
                }

                function T(t) {
                    for (var e = t.split("&"), n = 0, r = e.length; n < r; n++) {
                        var o = e[n].split("="), i = decodeURIComponent(o[0].replace(b, " "));
                        if (i) {
                            var s = void 0 !== o[1] ? P(o[1]) : null;
                            void 0 === this[i] ? this[i] = s : (this[i] instanceof Array || (this[i] = [this[i]]), this[i].push(s))
                        }
                    }
                }

                function _(t, e) {
                    !function (t, e, n) {
                        var s, d, h;
                        e = e || O(), x ? s = w("url").parse(e) : (s = document.createElement("a")).href = e;
                        var v, m, b = (m = {
                            path: !0,
                            query: !0,
                            hash: !0
                        }, (v = e) && r.test(v) && (m.protocol = !0, m.host = !0, o.test(v) && (m.port = !0), i.test(v) && (m.user = !0, m.pass = !0)), m);
                        for (d in h = e.match(i) || [], L) b[d] ? t[d] = s[L[d]] || "" : t[d] = "";
                        if (t.protocol = t.protocol.replace(a, ""), t.query = t.query.replace(c, ""), t.hash = P(t.hash.replace(u, "")), t.user = P(h[1] || ""), t.pass = P(h[2] || ""), t.port = k[t.protocol] == t.port || 0 == t.port ? "" : t.port, !b.protocol && g.test(e.charAt(0)) && (t.path = e.split("?")[0].split("#")[0]), !b.protocol && n) {
                            var y = new _(O().match(l)[0]), j = y.path.split("/"), A = t.path.split("/"),
                                C = ["protocol", "user", "pass", "host", "port"], q = C.length;
                            for (j.pop(), d = 0; d < q; d++) t[C[d]] = y[C[d]];
                            for (; ".." === A[0];) j.pop(), A.shift();
                            t.path = ("/" !== e.charAt(0) ? j.join("/") : "") + "/" + A.join("/")
                        }
                        t.path = t.path.replace(f, "/"), S && (t.path = t.path.replace(p, "/")), t.paths(t.paths()), t.query = new T(t.query)
                    }(this, t, !e)
                }

                T.prototype.toString = function () {
                    var t, e, n = "", r = j;
                    for (t in this) {
                        var o = this[t];
                        if (!(o instanceof Function || void 0 === o)) if (o instanceof Array) {
                            var i = o.length;
                            if (!i) {
                                n += (n ? "&" : "") + r(t) + "=";
                                continue
                            }
                            for (e = 0; e < i; e++) {
                                var s = o[e];
                                void 0 !== s && (n += n ? "&" : "", n += r(t) + (null === s ? "" : "=" + r(s)))
                            }
                        } else n += n ? "&" : "", n += r(t) + (null === o ? "" : "=" + r(o))
                    }
                    return n
                }, _.prototype.clearQuery = function () {
                    for (var t in this.query) this.query[t] instanceof Function || delete this.query[t];
                    return this
                }, _.prototype.queryLength = function () {
                    var t = 0;
                    for (var e in this.query) this.query[e] instanceof Function || t++;
                    return t
                }, _.prototype.isEmptyQuery = function () {
                    return 0 === this.queryLength()
                }, _.prototype.paths = function (t) {
                    var e, n = "", r = 0;
                    if (t && t.length && t + "" !== t) {
                        for (this.isAbsolute() && (n = "/"), e = t.length; r < e; r++) t[r] = !r && y.test(t[r]) ? t[r] : j(t[r]);
                        this.path = n + t.join("/")
                    }
                    for (r = 0, e = (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; r < e; r++) t[r] = P(t[r]);
                    return t
                }, _.prototype.encode = j, _.prototype.decode = P, _.prototype.isAbsolute = function () {
                    return this.protocol || "/" === this.path.charAt(0)
                }, _.prototype.toString = function () {
                    return (this.protocol && this.protocol + "://") + (this.user && j(this.user) + (this.pass && ":" + j(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + j(this.hash))
                }, t[t.exports ? "exports" : "Url"] = _
            }((t = n.nmd(t)).exports ? t : window)
        }
    }, e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {id: r, loaded: !1, exports: {}};
        return t[r](i, i.exports, n), i.loaded = !0, i.exports
    }

    n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, {a: e}), e
    }, n.d = function (t, e) {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.nmd = function (t) {
        return t.paths = [], t.children || (t.children = []), t
    }, function () {
        "use strict";
        n(6997), n(1181), n(2773);
        var t = n(7025);
        const e = new (n.n(t)()), r = "adminkit_config_", o = ".js-settings",
            i = {theme: "default", layout: "fluid", sidebarPosition: "left", sidebarLayout: "default"}, s = {
                theme: ["default", "dark", "light", "colored"],
                layout: ["fluid", "boxed"],
                sidebarPosition: ["left", "right"],
                sidebarLayout: ["default", "compact"]
            };
        let a;
        const c = () => {
            document.body.appendChild((t => {
                const e = document.createElement("template");
                return e.innerHTML = t, e.content.firstChild
            })('<div class="settings js-settings">\n  <div class="settings-toggle js-settings-toggle">\n    <i class="align-middle" data-feather="sliders"></i>\n  </div>\n\n  <div class="settings-panel">\n    <div class="settings-content">\n      <div class="settings-title d-flex align-items-center">\n        <button type="button" class="btn-close float-right js-settings-toggle" aria-label="Close"></button>\n\n        <h4 class="mb-0 ms-2 d-inline-block">Explore AdminKit <sup><small class="badge bg-primary text-uppercase">Pro</small></sup></h4>\n      </div>\n\n      <div class="settings-body">\n\n        <div class="alert alert-primary" role="alert">\n          <div class="alert-message">\n            <strong>Hey there!</strong> Choose the color scheme, sidebar and layout that best fits your project needs.\n          </div>\n        </div>\n\n        <div class="mb-3">\n          <span class="d-block fw-bold">Color scheme</span>\n          <span class="d-block text-muted mb-2">The perfect color mode for your app.</span>\n          <div class="row g-0 text-center mx-n1 mb-2">\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="default">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-default"></div>\n                </div>\n              </label>\n              Default\n            </div>\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="colored">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-colored"></div>\n                </div>\n              </label>\n              Colored\n            </div>\n          </div>\n          <div class="row g-0 text-center mx-n1">\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="dark">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-dark"></div>\n                </div>\n              </label>\n              Dark\n            </div>\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="light">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-light"></div>\n                </div>\n              </label>\n              Light\n            </div>\n          </div>\n        </div>\n        \n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block fw-bold">Sidebar layout</span>\n          <span class="d-block text-muted mb-2">Change the layout of the sidebar.</span>\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarLayout" value="default">\n              <div class="settings-button">\n                Default\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarLayout" value="compact">\n              <div class="settings-button">\n                Compact\n              </div>\n            </label>\n          </div>\n        </div>\n\n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block fw-bold">Sidebar position</span>\n          <span class="d-block text-muted mb-2">Toggle the position of the sidebar.</span>\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarPosition" value="left">\n              <div class="settings-button">\n                Left\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarPosition" value="right">\n              <div class="settings-button">\n                Right\n              </div>\n            </label>\n          </div>\n        </div>\n\n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block fw-bold">Layout</span>\n          <span class="d-block text-muted mb-2">Toggle container layout system.</span>\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="layout" value="fluid">\n              <div class="settings-button">\n                Fluid\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="layout" value="boxed">\n              <div class="settings-button">\n                Boxed\n              </div>\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div class="settings-footer">\n        <div class="d-grid">\n          <a class="btn btn-primary btn-lg btn-block" href="https://adminkit.io/pricing/" target="_blank">Get AdminKit PRO</a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>')), u(), l(), f(), p()
        }, u = () => {
            const t = document.querySelector(o);
            document.querySelectorAll(".js-settings-toggle").forEach((e => {
                e.onclick = e => {
                    e.preventDefault(), t.classList.toggle("open")
                }
            })), document.body.onclick = e => {
                t.contains(e.target) || t.classList.remove("open")
            }
        }, l = () => {
            document.querySelector(o).querySelectorAll("input[type=radio]").forEach((t => {
                t.addEventListener("change", (t => {
                    h(t.target.name, t.target.value), y(t.target.name, t.target.value)
                }))
            }))
        }, f = () => {
            for (let [t, e] of Object.entries(v())) {
                const n = e || i[t];
                document.querySelector('input[name="'.concat(t, '"][value="').concat(n, '"]')).checked = !0
            }
        }, p = () => {
            setTimeout((() => {
                if (!b("visited")) {
                    document.querySelector(o).classList.toggle("open"), y("visited", !0)
                }
            }), 1e3)
        }, d = () => {
            for (let [t, e] of Object.entries(v())) {
                h(t, e || i[t])
            }
        }, h = (t, e) => {
            if ("theme" === t) {
                const t = "dark" === e ? "dark" : "light";
                document.querySelector(".js-stylesheet").setAttribute("href", "css/".concat(t, ".css")), a && a !== t && window.location.replace(window.location.pathname), a = t
            }
            document.body.dataset[t] = e
        }, v = () => ({
            theme: b("theme"),
            layout: b("layout"),
            sidebarPosition: b("sidebarPosition"),
            sidebarLayout: b("sidebarLayout")
        }), m = () => {
            g("theme"), g("layout"), g("sidebarPosition"), g("sidebarLayout")
        }, b = t => localStorage.getItem("".concat(r).concat(t)), y = (t, e) => {
            localStorage.setItem("".concat(r).concat(t), e)
        }, g = t => {
            localStorage.removeItem("".concat(r).concat(t))
        };
        document.addEventListener("DOMContentLoaded", (() => c()));
        const x = new MutationObserver((() => {
            document.body && (Object.keys(e.query).length > 0 ? (m(), Object.entries(e.query).forEach((t => {
                let [e, n] = t;
                s[e] && s[e].includes(n) && (h(e, n), y(e, n))
            }))) : d(), x.disconnect())
        }));
        x.observe(document.documentElement, {childList: !0})
    }()
}();