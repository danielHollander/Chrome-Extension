function createFIObject () {
	window.FI = window.FI || {};
	FI["g_clientManager"] = FI["g_clientManager"] || {};
	FI["g_clientManager"]["placementQueue"] = FI["g_clientManager"]["placementQueue"] || {};
}

function setWebsiteId(response) {
	//Prevent Error
	FI.options = FI.options || {};
	FI.options.websiteId = FI.options.websiteId || response.obj.FI.g_clientManager.websiteId;
}


function setAllPlacementsReturnedToPage(placementQueue) {
	window.FI.g_clientManager.placementQueue = placementQueue;
}

function printAllPlacementsReturnedToPage(data) {
  	chrome.runtime.sendMessage({FI: data}, function(response) {
  		if (fiQuery.isEmptyObject(FI.g_clientManager.placementQueue)) {
	  		console.log("greeting daniel this is working");
	    	console.log(response.obj.FI.g_clientManager.placementQueue); 

	    	setWebsiteId(response);
	    	setAllPlacementsReturnedToPage(response.obj.FI.g_clientManager.placementQueue);
  		} else
  			console.log(FI.g_clientManager.placementQueue);
    });
}

function loadFiQuery () {
	(function(a, b) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
	}
	)("undefined" !== typeof window ? window : this, function(a, b) {
	    function c(a) {
	        var b = a.length
	          , c = k.type(a);
	        return "function" === c || k.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
	    }
	    function d(a, b, c) {
	        if (k.isFunction(b))
	            return k.grep(a, function(a, d) {
	                return !!b.call(a, d, a) !== c
	            });
	        if (b.nodeType)
	            return k.grep(a, function(a) {
	                return a === b !== c
	            });
	        if ("string" === typeof b) {
	            if (pb.test(b))
	                return k.filter(b, a, c);
	            b = k.filter(b, a)
	        }
	        return k.grep(a, function(a) {
	            return 0 <= aa.call(b, a) !== c
	        })
	    }
	    function e(a, b) {
	        for (; (a = a[b]) && 1 !== a.nodeType; )
	            ;
	        return a
	    }
	    function f(a) {
	        var b = Ua[a] = {};
	        k.each(a.match(oa) || [], function(a, c) {
	            b[c] = !0
	        });
	        return b
	    }
	    function g() {
	        S.removeEventListener("DOMContentLoaded", g, !1);
	        a.removeEventListener("load", g, !1);
	        k.ready()
	    }
	    function n() {
	        Object.defineProperty(this.cache = {}, 0, {
	            get: function() {
	                return {}
	            }
	        });
	        this.expando = k.expando + Math.random()
	    }
	    function l(a, b, c) {
	        if (void 0 === c && 1 === a.nodeType)
	            if (c = "data-" + b.replace(ta, "-$1").toLowerCase(),
	            c = a.getAttribute(c),
	            "string" === typeof c) {
	                try {
	                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Wa.test(c) ? k.parseJSON(c) : c
	                } catch (Qa) {}
	                ba.set(a, b, c)
	            } else
	                c = void 0;
	        return c
	    }
	    function q() {
	        return !0
	    }
	    function u() {
	        return !1
	    }
	    function r() {
	        try {
	            return S.activeElement
	        } catch (v) {}
	    }
	    function B(a, b) {
	        return k.nodeName(a, "table") && k.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	    }
	    function D(a) {
	        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
	        return a
	    }
	    function w(a) {
	        var b = wb.exec(a.type);
	        b ? a.type = b[1] : a.removeAttribute("type");
	        return a
	    }
	    function h(a, b) {
	        for (var c = 0, d = a.length; c < d; c++)
	            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
	    }
	    function p(a, b) {
	        var c, d;
	        if (1 === b.nodeType) {
	            if (N.hasData(a)) {
	                var e = N.access(a);
	                var v = N.set(b, e);
	                if (e = e.events)
	                    for (d in delete v.handle,
	                    v.events = {},
	                    e)
	                        for (v = 0,
	                        c = e[d].length; v < c; v++)
	                            k.event.add(b, d, e[d][v])
	            }
	            ba.hasData(a) && (a = ba.access(a),
	            a = k.extend({}, a),
	            ba.set(b, a))
	        }
	    }
	    function x(a, b) {
	        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
	        return void 0 === b || b && k.nodeName(a, b) ? k.merge([a], c) : c
	    }
	    function t(b, c) {
	        var d;
	        b = k(c.createElement(b)).appendTo(c.body);
	        c = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(b[0])) ? d.display : k.css(b[0], "display");
	        b.detach();
	        return c
	    }
	    function z(a) {
	        var b = S
	          , c = ab[a];
	        c || (c = t(a, b),
	        "none" !== c && c || (Ka = (Ka || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
	        b = Ka[0].contentDocument,
	        b.write(),
	        b.close(),
	        c = t(a, b),
	        Ka.detach()),
	        ab[a] = c);
	        return c
	    }
	    function C(a, b, c) {
	        var d, e = a.style;
	        (c = c || xa(a)) && (d = c.getPropertyValue(b) || c[b]);
	        if (c && ("" !== d || k.contains(a.ownerDocument, a) || (d = k.style(a, b)),
	        ya.test(d) && qb.test(b))) {
	            a = e.width;
	            b = e.minWidth;
	            var v = e.maxWidth;
	            e.minWidth = e.maxWidth = e.width = d;
	            d = c.width;
	            e.width = a;
	            e.minWidth = b;
	            e.maxWidth = v
	        }
	        return void 0 !== d ? d + "" : d
	    }
	    function y(a, b) {
	        return {
	            get: function() {
	                if (a())
	                    delete this.get;
	                else
	                    return (this.get = b).apply(this, arguments)
	            }
	        }
	    }
	    function I(a, b) {
	        if (b in a)
	            return b;
	        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = $a.length; e--; )
	            if (b = $a[e] + c,
	            b in a)
	                return b;
	        return d
	    }
	    function m(a, b, c) {
	        return (a = gb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
	    }
	    function E(a, b, c, d, e) {
	        b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
	        for (var v = 0; 4 > b; b += 2)
	            "margin" === c && (v += k.css(a, c + wa[b], !0, e)),
	            d ? ("content" === c && (v -= k.css(a, "padding" + wa[b], !0, e)),
	            "margin" !== c && (v -= k.css(a, "border" + wa[b] + "Width", !0, e))) : (v += k.css(a, "padding" + wa[b], !0, e),
	            "padding" !== c && (v += k.css(a, "border" + wa[b] + "Width", !0, e)));
	        return v
	    }
	    function G(a, b, c) {
	        var d = !0
	          , e = "width" === b ? a.offsetWidth : a.offsetHeight
	          , v = xa(a)
	          , f = "border-box" === k.css(a, "boxSizing", !1, v);
	        if (0 >= e || null == e) {
	            e = C(a, b, v);
	            if (0 > e || null == e)
	                e = a.style[b];
	            if (ya.test(e))
	                return e;
	            d = f && (U.boxSizingReliable() || e === a.style[b]);
	            e = parseFloat(e) || 0
	        }
	        return e + E(a, b, c || (f ? "border" : "content"), d, v) + "px"
	    }
	    function H(a, b) {
	        for (var c, d, e, v = [], f = 0, g = a.length; f < g; f++)
	            d = a[f],
	            d.style && (v[f] = N.get(d, "olddisplay"),
	            c = d.style.display,
	            b ? (v[f] || "none" !== c || (d.style.display = ""),
	            "" === d.style.display && za(d) && (v[f] = N.access(d, "olddisplay", z(d.nodeName)))) : (e = za(d),
	            "none" === c && e || N.set(d, "olddisplay", e ? c : k.css(d, "display"))));
	        for (f = 0; f < g; f++)
	            d = a[f],
	            !d.style || b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? v[f] || "" : "none");
	        return a
	    }
	    function J(a, b, c, d, e) {
	        return new J.prototype.init(a,b,c,d,e)
	    }
	    function A() {
	        setTimeout(function() {
	            La = void 0
	        });
	        return La = k.now()
	    }
	    function M(a, b) {
	        var c = 0
	          , d = {
	            height: a
	        };
	        for (b = b ? 1 : 0; 4 > c; c += 2 - b) {
	            var e = wa[c];
	            d["margin" + e] = d["padding" + e] = a
	        }
	        b && (d.opacity = d.width = a);
	        return d
	    }
	    function F(a, b, c) {
	        for (var d, e = (pa[b] || []).concat(pa["*"]), f = 0, v = e.length; f < v; f++)
	            if (d = e[f].call(c, b, a))
	                return d
	    }
	    function L(a, b) {
	        var c, d;
	        for (c in a) {
	            var e = k.camelCase(c);
	            var f = b[e];
	            var v = a[c];
	            k.isArray(v) && (f = v[1],
	            v = a[c] = v[0]);
	            c !== e && (a[e] = v,
	            delete a[c]);
	            if ((d = k.cssHooks[e]) && "expand"in d)
	                for (c in v = d.expand(v),
	                delete a[e],
	                v)
	                    c in a || (a[c] = v[c],
	                    b[c] = f);
	            else
	                b[e] = f
	        }
	    }
	    function K(a, b, c) {
	        var d, e = 0, f = Na.length, v = k.Deferred().always(function() {
	            delete g.elem
	        }), g = function() {
	            if (d)
	                return !1;
	            var b = La || A();
	            b = Math.max(0, h.startTime + h.duration - b);
	            for (var c = 1 - (b / h.duration || 0), e = 0, f = h.tweens.length; e < f; e++)
	                h.tweens[e].run(c);
	            v.notifyWith(a, [h, c, b]);
	            if (1 > c && f)
	                return b;
	            v.resolveWith(a, [h]);
	            return !1
	        }, h = v.promise({
	            elem: a,
	            props: k.extend({}, b),
	            opts: k.extend(!0, {
	                specialEasing: {}
	            }, c),
	            originalProperties: b,
	            originalOptions: c,
	            startTime: La || A(),
	            duration: c.duration,
	            tweens: [],
	            createTween: function(b, c) {
	                b = k.Tween(a, h.opts, b, c, h.opts.specialEasing[b] || h.opts.easing);
	                h.tweens.push(b);
	                return b
	            },
	            stop: function(b) {
	                var c = 0
	                  , e = b ? h.tweens.length : 0;
	                if (d)
	                    return this;
	                for (d = !0; c < e; c++)
	                    h.tweens[c].run(1);
	                b ? v.resolveWith(a, [h, b]) : v.rejectWith(a, [h, b]);
	                return this
	            }
	        });
	        c = h.props;
	        for (L(c, h.opts.specialEasing); e < f; e++)
	            if (b = Na[e].call(h, a, c, h.opts))
	                return b;
	        k.map(c, F, h);
	        k.isFunction(h.opts.start) && h.opts.start.call(a, h);
	        k.fx.timer(k.extend(g, {
	            elem: a,
	            anim: h,
	            queue: h.opts.queue
	        }));
	        return h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
	    }
	    function R(a) {
	        return function(b, c) {
	            "string" !== typeof b && (c = b,
	            b = "*");
	            var d = 0
	              , e = b.toLowerCase().match(oa) || [];
	            if (k.isFunction(c))
	                for (; b = e[d++]; )
	                    "+" === b[0] ? (b = b.slice(1) || "*",
	                    (a[b] = a[b] || []).unshift(c)) : (a[b] = a[b] || []).push(c)
	        }
	    }
	    function T(a, b, c, d) {
	        function e(g) {
	            var h;
	            f[g] = !0;
	            k.each(a[g] || [], function(a, g) {
	                a = g(b, c, d);
	                if ("string" === typeof a && !v && !f[a])
	                    return b.dataTypes.unshift(a),
	                    e(a),
	                    !1;
	                if (v)
	                    return !(h = a)
	            });
	            return h
	        }
	        var f = {}
	          , v = a === Bb;
	        return e(b.dataTypes[0]) || !f["*"] && e("*")
	    }
	    function Q(a, b) {
	        var c, d, e = k.ajaxSettings.flatOptions || {};
	        for (c in b)
	            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	        d && k.extend(!0, a, d);
	        return a
	    }
	    function O(a, b, c, d) {
	        var e;
	        if (k.isArray(b))
	            k.each(b, function(b, e) {
	                c || Mb.test(a) ? d(a, e) : O(a + "[" + ("object" === typeof e ? b : "") + "]", e, c, d)
	            });
	        else if (c || "object" !== k.type(b))
	            d(a, b);
	        else
	            for (e in b)
	                O(a + "[" + e + "]", b[e], c, d)
	    }
	    function V(a) {
	        return k.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	    }
	    var X = []
	      , Y = X.slice
	      , P = X.concat
	      , ja = X.push
	      , aa = X.indexOf
	      , ea = {}
	      , ka = ea.toString
	      , fa = ea.hasOwnProperty
	      , U = {}
	      , S = a.document
	      , k = function(a, b) {
	        return new k.fn.init(a,b)
	    }
	      , ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	      , ua = /^-ms-/
	      , Ha = /-([\da-z])/gi
	      , Ia = function(a, b) {
	        return b.toUpperCase()
	    };
	    k.fn = k.prototype = {
	        jquery: "2.1.1",
	        constructor: k,
	        selector: "",
	        length: 0,
	        toArray: function() {
	            return Y.call(this)
	        },
	        get: function(a) {
	            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
	        },
	        pushStack: function(a) {
	            a = k.merge(this.constructor(), a);
	            a.prevObject = this;
	            a.context = this.context;
	            return a
	        },
	        each: function(a, b) {
	            return k.each(this, a, b)
	        },
	        map: function(a) {
	            return this.pushStack(k.map(this, function(b, c) {
	                return a.call(b, c, b)
	            }))
	        },
	        slice: function() {
	            return this.pushStack(Y.apply(this, arguments))
	        },
	        first: function() {
	            return this.eq(0)
	        },
	        last: function() {
	            return this.eq(-1)
	        },
	        eq: function(a) {
	            var b = this.length;
	            a = +a + (0 > a ? b : 0);
	            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
	        },
	        end: function() {
	            return this.prevObject || this.constructor(null)
	        },
	        push: ja,
	        sort: X.sort,
	        splice: X.splice
	    };
	    k.extend = k.fn.extend = function() {
	        var a, b, c, d = arguments[0] || {}, e = 1, f = arguments.length, g = !1;
	        "boolean" === typeof d && (g = d,
	        d = arguments[e] || {},
	        e++);
	        "object" === typeof d || k.isFunction(d) || (d = {});
	        e === f && (d = this,
	        e--);
	        for (; e < f; e++)
	            if (null != (a = arguments[e]))
	                for (b in a) {
	                    var h = d[b];
	                    var l = a[b];
	                    d !== l && (g && l && (k.isPlainObject(l) || (c = k.isArray(l))) ? (c ? (c = !1,
	                    h = h && k.isArray(h) ? h : []) : h = h && k.isPlainObject(h) ? h : {},
	                    d[b] = k.extend(g, h, l)) : void 0 !== l && (d[b] = l))
	                }
	        return d
	    }
	    ;
	    k.extend({
	        expando: "jQuery" + ("2.1.1" + Math.random()).replace(/\D/g, ""),
	        isReady: !0,
	        error: function(a) {
	            throw Error(a);
	        },
	        noop: function() {},
	        isFunction: function(a) {
	            return "function" === k.type(a)
	        },
	        isArray: Array.isArray,
	        isWindow: function(a) {
	            return null != a && a === a.window
	        },
	        isNumeric: function(a) {
	            return !k.isArray(a) && 0 <= a - parseFloat(a)
	        },
	        isPlainObject: function(a) {
	            return "object" !== k.type(a) || a.nodeType || k.isWindow(a) || a.constructor && !fa.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
	        },
	        isEmptyObject: function(a) {
	            for (var b in a)
	                return !1;
	            return !0
	        },
	        type: function(a) {
	            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? ea[ka.call(a)] || "object" : typeof a
	        },
	        globalEval: function(a) {
	            var b = eval;
	            if (a = k.trim(a))
	                1 === a.indexOf("use strict") ? (b = S.createElement("script"),
	                b.text = a,
	                S.head.appendChild(b).parentNode.removeChild(b)) : b(a)
	        },
	        camelCase: function(a) {
	            return a.replace(ua, "ms-").replace(Ha, Ia)
	        },
	        nodeName: function(a, b) {
	            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	        },
	        each: function(a, b, d) {
	            var e = 0
	              , f = a.length;
	            var v = c(a);
	            if (d)
	                if (v)
	                    for (; e < f && (v = b.apply(a[e], d),
	                    !1 !== v); e++)
	                        ;
	                else
	                    for (e in a) {
	                        if (v = b.apply(a[e], d),
	                        !1 === v)
	                            break
	                    }
	            else if (v)
	                for (; e < f && (v = b.call(a[e], e, a[e]),
	                !1 !== v); e++)
	                    ;
	            else
	                for (e in a)
	                    if (v = b.call(a[e], e, a[e]),
	                    !1 === v)
	                        break;
	            return a
	        },
	        trim: function(a) {
	            return null == a ? "" : (a + "").replace(ca, "")
	        },
	        makeArray: function(a, b) {
	            b = b || [];
	            null != a && (c(Object(a)) ? k.merge(b, "string" === typeof a ? [a] : a) : ja.call(b, a));
	            return b
	        },
	        inArray: function(a, b, c) {
	            return null == b ? -1 : aa.call(b, a, c)
	        },
	        merge: function(a, b) {
	            for (var c = +b.length, d = 0, e = a.length; d < c; d++)
	                a[e++] = b[d];
	            a.length = e;
	            return a
	        },
	        grep: function(a, b, c) {
	            for (var d = [], e = 0, f = a.length, v = !c; e < f; e++)
	                c = !b(a[e], e),
	                c !== v && d.push(a[e]);
	            return d
	        },
	        map: function(a, b, d) {
	            var e = 0
	              , f = a.length
	              , v = [];
	            if (c(a))
	                for (; e < f; e++) {
	                    var g = b(a[e], e, d);
	                    null != g && v.push(g)
	                }
	            else
	                for (e in a)
	                    g = b(a[e], e, d),
	                    null != g && v.push(g);
	            return P.apply([], v)
	        },
	        guid: 1,
	        proxy: function(a, b) {
	            if ("string" === typeof b) {
	                var c = a[b];
	                b = a;
	                a = c
	            }
	            if (k.isFunction(a)) {
	                var d = Y.call(arguments, 2);
	                c = function() {
	                    return a.apply(b || this, d.concat(Y.call(arguments)))
	                }
	                ;
	                c.guid = a.guid = a.guid || k.guid++;
	                return c
	            }
	        },
	        now: Date.now,
	        support: U
	    });
	    k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
	        ea["[object " + b + "]"] = b.toLowerCase()
	    });
	    var va = function(a) {
	        function b(a, b, c, d) {
	            var e, f, v, g;
	            (b ? b.ownerDocument || b : J) !== A && pa(b);
	            b = b || A;
	            c = c || [];
	            if (!a || "string" !== typeof a)
	                return c;
	            if (1 !== (g = b.nodeType) && 9 !== g)
	                return [];
	            if (E && !d) {
	                if (e = ta.exec(a))
	                    if (v = e[1])
	                        if (9 === g)
	                            if ((f = b.getElementById(v)) && f.parentNode) {
	                                if (f.id === v)
	                                    return c.push(f),
	                                    c
	                            } else
	                                return c;
	                        else {
	                            if (b.ownerDocument && (f = b.ownerDocument.getElementById(v)) && H(b, f) && f.id === v)
	                                return c.push(f),
	                                c
	                        }
	                    else {
	                        if (e[2])
	                            return T.apply(c, b.getElementsByTagName(a)),
	                            c;
	                        if ((v = e[3]) && ia.getElementsByClassName && b.getElementsByClassName)
	                            return T.apply(c, b.getElementsByClassName(v)),
	                            c
	                    }
	                if (ia.qsa && (!I || !I.test(a))) {
	                    f = e = G;
	                    v = b;
	                    var h = 9 === g && a;
	                    if (1 === g && "object" !== b.nodeName.toLowerCase()) {
	                        g = va(a);
	                        (e = b.getAttribute("id")) ? f = e.replace(wa, "\\$&") : b.setAttribute("id", f);
	                        f = "[id='" + f + "'] ";
	                        for (v = g.length; v--; )
	                            g[v] = f + n(g[v]);
	                        v = sa.test(a) && l(b.parentNode) || b;
	                        h = g.join(",")
	                    }
	                    if (h)
	                        try {
	                            return T.apply(c, v.querySelectorAll(h)),
	                            c
	                        } catch (Yb) {} finally {
	                            e || b.removeAttribute("id")
	                        }
	                }
	            }
	            return za(a.replace(ca, "$1"), b, c, d)
	        }
	        function c() {
	            function a(c, d) {
	                b.push(c + " ") > Z.cacheLength && delete a[b.shift()];
	                return a[c + " "] = d
	            }
	            var b = [];
	            return a
	        }
	        function d(a) {
	            a[G] = !0;
	            return a
	        }
	        function e(a) {
	            var b = A.createElement("div");
	            try {
	                return !!a(b)
	            } catch (Wb) {
	                return !1
	            } finally {
	                b.parentNode && b.parentNode.removeChild(b)
	            }
	        }
	        function f(a, b) {
	            var c = a.split("|");
	            for (a = a.length; a--; )
	                Z.attrHandle[c[a]] = b
	        }
	        function v(a, b) {
	            var c = b && a
	              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
	            if (d)
	                return d;
	            if (c)
	                for (; c = c.nextSibling; )
	                    if (c === b)
	                        return -1;
	            return a ? 1 : -1
	        }
	        function g(a) {
	            return function(b) {
	                return "input" === b.nodeName.toLowerCase() && b.type === a
	            }
	        }
	        function h(a) {
	            return function(b) {
	                var c = b.nodeName.toLowerCase();
	                return ("input" === c || "button" === c) && b.type === a
	            }
	        }
	        function k(a) {
	            return d(function(b) {
	                b = +b;
	                return d(function(c, d) {
	                    for (var e, f = a([], c.length, b), v = f.length; v--; )
	                        c[e = f[v]] && (c[e] = !(d[e] = c[e]))
	                })
	            })
	        }
	        function l(a) {
	            return a && "undefined" !== typeof a.getElementsByTagName && a
	        }
	        function p() {}
	        function n(a) {
	            for (var b = 0, c = a.length, d = ""; b < c; b++)
	                d += a[b].value;
	            return d
	        }
	        function m(a, b, c) {
	            var d = b.dir
	              , e = c && "parentNode" === d
	              , f = L++;
	            return b.first ? function(b, c, f) {
	                for (; b = b[d]; )
	                    if (1 === b.nodeType || e)
	                        return a(b, c, f)
	            }
	            : function(b, c, v) {
	                var g, h = [K, f];
	                if (v)
	                    for (; b = b[d]; ) {
	                        if ((1 === b.nodeType || e) && a(b, c, v))
	                            return !0
	                    }
	                else
	                    for (; b = b[d]; )
	                        if (1 === b.nodeType || e) {
	                            var k = b[G] || (b[G] = {});
	                            if ((g = k[d]) && g[0] === K && g[1] === f)
	                                return h[2] = g[2];
	                            k[d] = h;
	                            if (h[2] = a(b, c, v))
	                                return !0
	                        }
	            }
	        }
	        function q(a) {
	            return 1 < a.length ? function(b, c, d) {
	                for (var e = a.length; e--; )
	                    if (!a[e](b, c, d))
	                        return !1;
	                return !0
	            }
	            : a[0]
	        }
	        function t(a, b, c, d, e) {
	            for (var f, v = [], g = 0, h = a.length, k = null != b; g < h; g++)
	                if (f = a[g])
	                    if (!c || c(f, d, e))
	                        v.push(f),
	                        k && b.push(g);
	            return v
	        }
	        function x(a, c, e, f, v, g) {
	            f && !f[G] && (f = x(f));
	            v && !v[G] && (v = x(v, g));
	            return d(function(d, g, h, k) {
	                var W, l = [], p = [], da = g.length, n;
	                if (!(n = d)) {
	                    n = c || "*";
	                    for (var m = h.nodeType ? [h] : h, q = [], Qa = 0, x = m.length; Qa < x; Qa++)
	                        b(n, m[Qa], q);
	                    n = q
	                }
	                n = !a || !d && c ? n : t(n, l, a, h, k);
	                m = e ? v || (d ? a : da || f) ? [] : g : n;
	                e && e(n, m, h, k);
	                if (f) {
	                    var Aa = t(m, p);
	                    f(Aa, [], h, k);
	                    for (h = Aa.length; h--; )
	                        if (W = Aa[h])
	                            m[p[h]] = !(n[p[h]] = W)
	                }
	                if (d) {
	                    if (v || a) {
	                        if (v) {
	                            Aa = [];
	                            for (h = m.length; h--; )
	                                (W = m[h]) && Aa.push(n[h] = W);
	                            v(null, m = [], Aa, k)
	                        }
	                        for (h = m.length; h--; )
	                            (W = m[h]) && -1 < (Aa = v ? U.call(d, W) : l[h]) && (d[Aa] = !(g[Aa] = W))
	                    }
	                } else
	                    m = t(m === g ? m.splice(da, m.length) : m),
	                    v ? v(null, g, m, k) : T.apply(g, m)
	            })
	        }
	        function r(a) {
	            var b, c, d = a.length, e = Z.relative[a[0].type];
	            var f = e || Z.relative[" "];
	            for (var v = e ? 1 : 0, g = m(function(a) {
	                return a === b
	            }, f, !0), h = m(function(a) {
	                return -1 < U.call(b, a)
	            }, f, !0), k = [function(a, c, d) {
	                return !e && (d || c !== u) || ((b = c).nodeType ? g(a, c, d) : h(a, c, d))
	            }
	            ]; v < d; v++)
	                if (f = Z.relative[a[v].type])
	                    k = [m(q(k), f)];
	                else {
	                    f = Z.filter[a[v].type].apply(null, a[v].matches);
	                    if (f[G]) {
	                        for (c = ++v; c < d && !Z.relative[a[c].type]; c++)
	                            ;
	                        return x(1 < v && q(k), 1 < v && n(a.slice(0, v - 1).concat({
	                            value: " " === a[v - 2].type ? "*" : ""
	                        })).replace(ca, "$1"), f, v < c && r(a.slice(v, c)), c < d && r(a = a.slice(c)), c < d && n(a))
	                    }
	                    k.push(f)
	                }
	            return q(k)
	        }
	        function z(a, c) {
	            var e = 0 < c.length
	              , f = 0 < a.length
	              , v = function(d, v, g, h, k) {
	                var W, l, p, m = 0, da = "0", n = d && [], q = [], Qa = u, x = d || f && Z.find.TAG("*", k), Aa = K += null == Qa ? 1 : Math.random() || .1, r = x.length;
	                for (k && (u = v !== A && v); da !== r && null != (W = x[da]); da++) {
	                    if (f && W) {
	                        for (l = 0; p = a[l++]; )
	                            if (p(W, v, g)) {
	                                h.push(W);
	                                break
	                            }
	                        k && (K = Aa)
	                    }
	                    e && ((W = !p && W) && m--,
	                    d && n.push(W))
	                }
	                m += da;
	                if (e && da !== m) {
	                    for (l = 0; p = c[l++]; )
	                        p(n, q, v, g);
	                    if (d) {
	                        if (0 < m)
	                            for (; da--; )
	                                n[da] || q[da] || (q[da] = S.call(h));
	                        q = t(q)
	                    }
	                    T.apply(h, q);
	                    k && !d && 0 < q.length && 1 < m + c.length && b.uniqueSort(h)
	                }
	                k && (K = Aa,
	                u = Qa);
	                return n
	            };
	            return e ? d(v) : v
	        }
	        var y, u, C, w, A, B, E, I, D, F, H, G = "sizzle" + -new Date, J = a.document, K = 0, L = 0, M = c(), N = c(), Q = c(), P = function(a, b) {
	            a === b && (w = !0);
	            return 0
	        }, R = {}.hasOwnProperty, O = [], S = O.pop, V = O.push, T = O.push, X = O.slice, U = O.indexOf || function(a) {
	            for (var b = 0, c = this.length; b < c; b++)
	                if (this[b] === a)
	                    return b;
	            return -1
	        }
	        , Y = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)[\\x20\\t\\r\\n\\f]*\\]", ba = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + aa + ")*)|.*)\\)|)", ca = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ea = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, fa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ja = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, na = new RegExp(ba), oa = new RegExp("^" + Y + "$"), ha = {
	            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
	            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
	            TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
	            ATTR: new RegExp("^" + aa),
	            PSEUDO: new RegExp("^" + ba),
	            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
	            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
	            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
	        }, qa = /^(?:input|select|textarea|button)$/i, ra = /^h\d$/i, ka = /^[^{]+\{\s*\[native \w/, ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, wa = /'|\\/g, la = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ma = function(a, b, c) {
	            a = "0x" + b - 65536;
	            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
	        };
	        try {
	            T.apply(O = X.call(J.childNodes), J.childNodes),
	            O[J.childNodes.length].nodeType
	        } catch (Vb) {
	            T = {
	                apply: O.length ? function(a, b) {
	                    V.apply(a, X.call(b))
	                }
	                : function(a, b) {
	                    for (var c = a.length, d = 0; a[c++] = b[d++]; )
	                        ;
	                    a.length = c - 1
	                }
	            }
	        }
	        var ia = b.support = {};
	        var xa = b.isXML = function(a) {
	            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
	        }
	        ;
	        var pa = b.setDocument = function(a) {
	            var b = a ? a.ownerDocument || a : J;
	            a = b.defaultView;
	            if (b === A || 9 !== b.nodeType || !b.documentElement)
	                return A;
	            A = b;
	            B = b.documentElement;
	            E = !xa(b);
	            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
	                pa()
	            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
	                pa()
	            }));
	            ia.attributes = e(function(a) {
	                a.className = "i";
	                return !a.getAttribute("className")
	            });
	            ia.getElementsByTagName = e(function(a) {
	                a.appendChild(b.createComment(""));
	                return !a.getElementsByTagName("*").length
	            });
	            ia.getElementsByClassName = ka.test(b.getElementsByClassName) && e(function(a) {
	                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
	                a.firstChild.className = "i";
	                return 2 === a.getElementsByClassName("i").length
	            });
	            ia.getById = e(function(a) {
	                B.appendChild(a).id = G;
	                return !b.getElementsByName || !b.getElementsByName(G).length
	            });
	            ia.getById ? (Z.find.ID = function(a, b) {
	                if ("undefined" !== typeof b.getElementById && E)
	                    return (a = b.getElementById(a)) && a.parentNode ? [a] : []
	            }
	            ,
	            Z.filter.ID = function(a) {
	                var b = a.replace(la, ma);
	                return function(a) {
	                    return a.getAttribute("id") === b
	                }
	            }
	            ) : (delete Z.find.ID,
	            Z.filter.ID = function(a) {
	                var b = a.replace(la, ma);
	                return function(a) {
	                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
	                }
	            }
	            );
	            Z.find.TAG = ia.getElementsByTagName ? function(a, b) {
	                if ("undefined" !== typeof b.getElementsByTagName)
	                    return b.getElementsByTagName(a)
	            }
	            : function(a, b) {
	                var c = []
	                  , d = 0;
	                b = b.getElementsByTagName(a);
	                if ("*" === a) {
	                    for (; a = b[d++]; )
	                        1 === a.nodeType && c.push(a);
	                    return c
	                }
	                return b
	            }
	            ;
	            Z.find.CLASS = ia.getElementsByClassName && function(a, b) {
	                if ("undefined" !== typeof b.getElementsByClassName && E)
	                    return b.getElementsByClassName(a)
	            }
	            ;
	            D = [];
	            I = [];
	            if (ia.qsa = ka.test(b.querySelectorAll))
	                e(function(a) {
	                    a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
	                    a.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
	                    a.querySelectorAll("[selected]").length || I.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
	                    a.querySelectorAll(":checked").length || I.push(":checked")
	                }),
	                e(function(a) {
	                    var c = b.createElement("input");
	                    c.setAttribute("type", "hidden");
	                    a.appendChild(c).setAttribute("name", "D");
	                    a.querySelectorAll("[name=d]").length && I.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
	                    a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled");
	                    a.querySelectorAll("*,:x");
	                    I.push(",.*:")
	                });
	            (ia.matchesSelector = ka.test(F = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && e(function(a) {
	                ia.disconnectedMatch = F.call(a, "div");
	                F.call(a, "[s!='']:x");
	                D.push("!=", ba)
	            });
	            I = I.length && new RegExp(I.join("|"));
	            D = D.length && new RegExp(D.join("|"));
	            H = (a = ka.test(B.compareDocumentPosition)) || ka.test(B.contains) ? function(a, b) {
	                var c = 9 === a.nodeType ? a.documentElement : a;
	                b = b && b.parentNode;
	                return a === b || !!(b && 1 === b.nodeType && (c.contains ? c.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16))
	            }
	            : function(a, b) {
	                if (b)
	                    for (; b = b.parentNode; )
	                        if (b === a)
	                            return !0;
	                return !1
	            }
	            ;
	            P = a ? function(a, c) {
	                if (a === c)
	                    return w = !0,
	                    0;
	                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
	                if (d)
	                    return d;
	                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
	                return d & 1 || !ia.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === J && H(J, a) ? -1 : c === b || c.ownerDocument === J && H(J, c) ? 1 : C ? U.call(C, a) - U.call(C, c) : 0 : d & 4 ? -1 : 1
	            }
	            : function(a, c) {
	                if (a === c)
	                    return w = !0,
	                    0;
	                var d = 0
	                  , e = a.parentNode
	                  , f = c.parentNode
	                  , g = [a]
	                  , h = [c];
	                if (!e || !f)
	                    return a === b ? -1 : c === b ? 1 : e ? -1 : f ? 1 : C ? U.call(C, a) - U.call(C, c) : 0;
	                if (e === f)
	                    return v(a, c);
	                for (; a = a.parentNode; )
	                    g.unshift(a);
	                for (a = c; a = a.parentNode; )
	                    h.unshift(a);
	                for (; g[d] === h[d]; )
	                    d++;
	                return d ? v(g[d], h[d]) : g[d] === J ? -1 : h[d] === J ? 1 : 0
	            }
	            ;
	            return b
	        }
	        ;
	        b.matches = function(a, c) {
	            return b(a, null, null, c)
	        }
	        ;
	        b.matchesSelector = function(a, c) {
	            (a.ownerDocument || a) !== A && pa(a);
	            c = c.replace(ja, "='$1']");
	            if (!(!ia.matchesSelector || !E || D && D.test(c) || I && I.test(c)))
	                try {
	                    var d = F.call(a, c);
	                    if (d || ia.disconnectedMatch || a.document && 11 !== a.document.nodeType)
	                        return d
	                } catch (Xb) {}
	            return 0 < b(c, A, null, [a]).length
	        }
	        ;
	        b.contains = function(a, b) {
	            (a.ownerDocument || a) !== A && pa(a);
	            return H(a, b)
	        }
	        ;
	        b.attr = function(a, b) {
	            (a.ownerDocument || a) !== A && pa(a);
	            var c = Z.attrHandle[b.toLowerCase()];
	            c = c && R.call(Z.attrHandle, b.toLowerCase()) ? c(a, b, !E) : void 0;
	            return void 0 !== c ? c : ia.attributes || !E ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
	        }
	        ;
	        b.error = function(a) {
	            throw Error("Syntax error, unrecognized expression: " + a);
	        }
	        ;
	        b.uniqueSort = function(a) {
	            var b, c = [], d = 0, e = 0;
	            w = !ia.detectDuplicates;
	            C = !ia.sortStable && a.slice(0);
	            a.sort(P);
	            if (w) {
	                for (; b = a[e++]; )
	                    b === a[e] && (d = c.push(e));
	                for (; d--; )
	                    a.splice(c[d], 1)
	            }
	            C = null;
	            return a
	        }
	        ;
	        var ua = b.getText = function(a) {
	            var b = ""
	              , c = 0;
	            var d = a.nodeType;
	            if (!d)
	                for (; d = a[c++]; )
	                    b += ua(d);
	            else if (1 === d || 9 === d || 11 === d) {
	                if ("string" === typeof a.textContent)
	                    return a.textContent;
	                for (a = a.firstChild; a; a = a.nextSibling)
	                    b += ua(a)
	            } else if (3 === d || 4 === d)
	                return a.nodeValue;
	            return b
	        }
	        ;
	        var Z = b.selectors = {
	            cacheLength: 50,
	            createPseudo: d,
	            match: ha,
	            attrHandle: {},
	            find: {},
	            relative: {
	                ">": {
	                    dir: "parentNode",
	                    first: !0
	                },
	                " ": {
	                    dir: "parentNode"
	                },
	                "+": {
	                    dir: "previousSibling",
	                    first: !0
	                },
	                "~": {
	                    dir: "previousSibling"
	                }
	            },
	            preFilter: {
	                ATTR: function(a) {
	                    a[1] = a[1].replace(la, ma);
	                    a[3] = (a[3] || a[4] || a[5] || "").replace(la, ma);
	                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
	                    return a.slice(0, 4)
	                },
	                CHILD: function(a) {
	                    a[1] = a[1].toLowerCase();
	                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]),
	                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
	                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
	                    return a
	                },
	                PSEUDO: function(a) {
	                    var b, c = !a[6] && a[2];
	                    if (ha.CHILD.test(a[0]))
	                        return null;
	                    a[3] ? a[2] = a[4] || a[5] || "" : c && na.test(c) && (b = va(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
	                    a[2] = c.slice(0, b));
	                    return a.slice(0, 3)
	                }
	            },
	            filter: {
	                TAG: function(a) {
	                    var b = a.replace(la, ma).toLowerCase();
	                    return "*" === a ? function() {
	                        return !0
	                    }
	                    : function(a) {
	                        return a.nodeName && a.nodeName.toLowerCase() === b
	                    }
	                },
	                CLASS: function(a) {
	                    var b = M[a + " "];
	                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
	                    M(a, function(a) {
	                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
	                    }))
	                },
	                ATTR: function(a, c, d) {
	                    return function(e) {
	                        e = b.attr(e, a);
	                        if (null == e)
	                            return "!=" === c;
	                        if (!c)
	                            return !0;
	                        e += "";
	                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
	                    }
	                },
	                CHILD: function(a, b, c, d, e) {
	                    var f = "nth" !== a.slice(0, 3)
	                      , v = "last" !== a.slice(-4)
	                      , g = "of-type" === b;
	                    return 1 === d && 0 === e ? function(a) {
	                        return !!a.parentNode
	                    }
	                    : function(b, c, h) {
	                        var k;
	                        c = f !== v ? "nextSibling" : "previousSibling";
	                        var W = b.parentNode
	                          , l = g && b.nodeName.toLowerCase();
	                        h = !h && !g;
	                        if (W) {
	                            if (f) {
	                                for (; c; ) {
	                                    for (k = b; k = k[c]; )
	                                        if (g ? k.nodeName.toLowerCase() === l : 1 === k.nodeType)
	                                            return !1;
	                                    var p = c = "only" === a && !p && "nextSibling"
	                                }
	                                return !0
	                            }
	                            p = [v ? W.firstChild : W.lastChild];
	                            if (v && h) {
	                                h = W[G] || (W[G] = {});
	                                var da = h[a] || [];
	                                var m = da[0] === K && da[1];
	                                var n = da[0] === K && da[2];
	                                for (k = m && W.childNodes[m]; k = ++m && k && k[c] || (n = m = 0) || p.pop(); )
	                                    if (1 === k.nodeType && ++n && k === b) {
	                                        h[a] = [K, m, n];
	                                        break
	                                    }
	                            } else if (h && (da = (b[G] || (b[G] = {}))[a]) && da[0] === K)
	                                n = da[1];
	                            else
	                                for (; (k = ++m && k && k[c] || (n = m = 0) || p.pop()) && ((g ? k.nodeName.toLowerCase() !== l : 1 !== k.nodeType) || !++n || (h && ((k[G] || (k[G] = {}))[a] = [K, n]),
	                                k !== b)); )
	                                    ;
	                            n -= e;
	                            return n === d || 0 === n % d && 0 <= n / d
	                        }
	                    }
	                },
	                PSEUDO: function(a, c) {
	                    var e = Z.pseudos[a] || Z.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
	                    if (e[G])
	                        return e(c);
	                    if (1 < e.length) {
	                        var f = [a, a, "", c];
	                        return Z.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
	                            for (var d, f = e(a, c), v = f.length; v--; )
	                                d = U.call(a, f[v]),
	                                a[d] = !(b[d] = f[v])
	                        }) : function(a) {
	                            return e(a, 0, f)
	                        }
	                    }
	                    return e
	                }
	            },
	            pseudos: {
	                not: d(function(a) {
	                    var b = []
	                      , c = []
	                      , e = ya(a.replace(ca, "$1"));
	                    return e[G] ? d(function(a, b, c, d) {
	                        d = e(a, null, d, []);
	                        for (var f = a.length; f--; )
	                            if (c = d[f])
	                                a[f] = !(b[f] = c)
	                    }) : function(a, d, f) {
	                        b[0] = a;
	                        e(b, null, f, c);
	                        return !c.pop()
	                    }
	                }),
	                has: d(function(a) {
	                    return function(c) {
	                        return 0 < b(a, c).length
	                    }
	                }),
	                contains: d(function(a) {
	                    return function(b) {
	                        return -1 < (b.textContent || b.innerText || ua(b)).indexOf(a)
	                    }
	                }),
	                lang: d(function(a) {
	                    oa.test(a || "") || b.error("unsupported lang: " + a);
	                    a = a.replace(la, ma).toLowerCase();
	                    return function(b) {
	                        var c;
	                        do
	                            if (c = E ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
	                                return c = c.toLowerCase(),
	                                c === a || 0 === c.indexOf(a + "-");
	                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
	                    }
	                }),
	                target: function(b) {
	                    var c = a.location && a.location.hash;
	                    return c && c.slice(1) === b.id
	                },
	                root: function(a) {
	                    return a === B
	                },
	                focus: function(a) {
	                    return a === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
	                },
	                enabled: function(a) {
	                    return !1 === a.disabled
	                },
	                disabled: function(a) {
	                    return !0 === a.disabled
	                },
	                checked: function(a) {
	                    var b = a.nodeName.toLowerCase();
	                    return "input" === b && !!a.checked || "option" === b && !!a.selected
	                },
	                selected: function(a) {
	                    a.parentNode && a.parentNode.selectedIndex;
	                    return !0 === a.selected
	                },
	                empty: function(a) {
	                    for (a = a.firstChild; a; a = a.nextSibling)
	                        if (6 > a.nodeType)
	                            return !1;
	                    return !0
	                },
	                parent: function(a) {
	                    return !Z.pseudos.empty(a)
	                },
	                header: function(a) {
	                    return ra.test(a.nodeName)
	                },
	                input: function(a) {
	                    return qa.test(a.nodeName)
	                },
	                button: function(a) {
	                    var b = a.nodeName.toLowerCase();
	                    return "input" === b && "button" === a.type || "button" === b
	                },
	                text: function(a) {
	                    var b;
	                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
	                },
	                first: k(function() {
	                    return [0]
	                }),
	                last: k(function(a, b) {
	                    return [b - 1]
	                }),
	                eq: k(function(a, b, c) {
	                    return [0 > c ? c + b : c]
	                }),
	                even: k(function(a, b) {
	                    for (var c = 0; c < b; c += 2)
	                        a.push(c);
	                    return a
	                }),
	                odd: k(function(a, b) {
	                    for (var c = 1; c < b; c += 2)
	                        a.push(c);
	                    return a
	                }),
	                lt: k(function(a, b, c) {
	                    for (b = 0 > c ? c + b : c; 0 <= --b; )
	                        a.push(b);
	                    return a
	                }),
	                gt: k(function(a, b, c) {
	                    for (c = 0 > c ? c + b : c; ++c < b; )
	                        a.push(c);
	                    return a
	                })
	            }
	        };
	        Z.pseudos.nth = Z.pseudos.eq;
	        for (y in {
	            radio: !0,
	            checkbox: !0,
	            file: !0,
	            password: !0,
	            image: !0
	        })
	            Z.pseudos[y] = g(y);
	        for (y in {
	            submit: !0,
	            reset: !0
	        })
	            Z.pseudos[y] = h(y);
	        p.prototype = Z.filters = Z.pseudos;
	        Z.setFilters = new p;
	        var va = b.tokenize = function(a, c) {
	            var d, e, f, v, g;
	            if (v = N[a + " "])
	                return c ? 0 : v.slice(0);
	            v = a;
	            var h = [];
	            for (g = Z.preFilter; v; ) {
	                if (!k || (d = ea.exec(v)))
	                    d && (v = v.slice(d[0].length) || v),
	                    h.push(e = []);
	                var k = !1;
	                if (d = fa.exec(v))
	                    k = d.shift(),
	                    e.push({
	                        value: k,
	                        type: d[0].replace(ca, " ")
	                    }),
	                    v = v.slice(k.length);
	                for (f in Z.filter)
	                    !(d = ha[f].exec(v)) || g[f] && !(d = g[f](d)) || (k = d.shift(),
	                    e.push({
	                        value: k,
	                        type: f,
	                        matches: d
	                    }),
	                    v = v.slice(k.length));
	                if (!k)
	                    break
	            }
	            return c ? v.length : v ? b.error(a) : N(a, h).slice(0)
	        }
	        ;
	        var ya = b.compile = function(a, b) {
	            var c, d = [], e = [], f = Q[a + " "];
	            if (!f) {
	                b || (b = va(a));
	                for (c = b.length; c--; )
	                    f = r(b[c]),
	                    f[G] ? d.push(f) : e.push(f);
	                f = Q(a, z(e, d));
	                f.selector = a
	            }
	            return f
	        }
	        ;
	        var za = b.select = function(a, b, c, d) {
	            var e, f, v, g = "function" === typeof a && a, h = !d && va(a = g.selector || a);
	            c = c || [];
	            if (1 === h.length) {
	                var k = h[0] = h[0].slice(0);
	                if (2 < k.length && "ID" === (f = k[0]).type && ia.getById && 9 === b.nodeType && E && Z.relative[k[1].type]) {
	                    b = (Z.find.ID(f.matches[0].replace(la, ma), b) || [])[0];
	                    if (!b)
	                        return c;
	                    g && (b = b.parentNode);
	                    a = a.slice(k.shift().value.length)
	                }
	                for (e = ha.needsContext.test(a) ? 0 : k.length; e--; ) {
	                    f = k[e];
	                    if (Z.relative[v = f.type])
	                        break;
	                    if (v = Z.find[v])
	                        if (d = v(f.matches[0].replace(la, ma), sa.test(k[0].type) && l(b.parentNode) || b)) {
	                            k.splice(e, 1);
	                            a = d.length && n(k);
	                            if (!a)
	                                return T.apply(c, d),
	                                c;
	                            break
	                        }
	                }
	            }
	            (g || ya(a, h))(d, b, !E, c, sa.test(a) && l(b.parentNode) || b);
	            return c
	        }
	        ;
	        ia.sortStable = G.split("").sort(P).join("") === G;
	        ia.detectDuplicates = !!w;
	        pa();
	        ia.sortDetached = e(function(a) {
	            return a.compareDocumentPosition(A.createElement("div")) & 1
	        });
	        e(function(a) {
	            a.innerHTML = "<a href='#'></a>";
	            return "#" === a.firstChild.getAttribute("href")
	        }) || f("type|href|height|width", function(a, b, c) {
	            if (!c)
	                return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
	        });
	        ia.attributes && e(function(a) {
	            a.innerHTML = "<input/>";
	            a.firstChild.setAttribute("value", "");
	            return "" === a.firstChild.getAttribute("value")
	        }) || f("value", function(a, b, c) {
	            if (!c && "input" === a.nodeName.toLowerCase())
	                return a.defaultValue
	        });
	        e(function(a) {
	            return null == a.getAttribute("disabled")
	        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
	            var d;
	            if (!c)
	                return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
	        });
	        return b
	    }(a);
	    k.find = va;
	    k.expr = va.selectors;
	    k.expr[":"] = k.expr.pseudos;
	    k.unique = va.uniqueSort;
	    k.text = va.getText;
	    k.isXMLDoc = va.isXML;
	    k.contains = va.contains;
	    var Ra = k.expr.match.needsContext
	      , la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
	      , pb = /^.[^:#\[\.,]*$/;
	    k.filter = function(a, b, c) {
	        var d = b[0];
	        c && (a = ":not(" + a + ")");
	        return 1 === b.length && 1 === d.nodeType ? k.find.matchesSelector(d, a) ? [d] : [] : k.find.matches(a, k.grep(b, function(a) {
	            return 1 === a.nodeType
	        }))
	    }
	    ;
	    k.fn.extend({
	        find: function(a) {
	            var b, c = this.length, d = [], e = this;
	            if ("string" !== typeof a)
	                return this.pushStack(k(a).filter(function() {
	                    for (b = 0; b < c; b++)
	                        if (k.contains(e[b], this))
	                            return !0
	                }));
	            for (b = 0; b < c; b++)
	                k.find(a, e[b], d);
	            d = this.pushStack(1 < c ? k.unique(d) : d);
	            d.selector = this.selector ? this.selector + " " + a : a;
	            return d
	        },
	        filter: function(a) {
	            return this.pushStack(d(this, a || [], !1))
	        },
	        not: function(a) {
	            return this.pushStack(d(this, a || [], !0))
	        },
	        is: function(a) {
	            return !!d(this, "string" === typeof a && Ra.test(a) ? k(a) : a || [], !1).length
	        }
	    });
	    var db = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	    (k.fn.init = function(a, b) {
	        if (!a)
	            return this;
	        if ("string" === typeof a) {
	            var c = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : db.exec(a);
	            if (!c || !c[1] && b)
	                return !b || b.jquery ? (b || sa).find(a) : this.constructor(b).find(a);
	            if (c[1]) {
	                if (b = b instanceof k ? b[0] : b,
	                k.merge(this, k.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : S, !0)),
	                la.test(c[1]) && k.isPlainObject(b))
	                    for (c in b)
	                        if (k.isFunction(this[c]))
	                            this[c](b[c]);
	                        else
	                            this.attr(c, b[c])
	            } else
	                (b = S.getElementById(c[2])) && b.parentNode && (this.length = 1,
	                this[0] = b),
	                this.context = S,
	                this.selector = a;
	            return this
	        }
	        if (a.nodeType)
	            return this.context = this[0] = a,
	            this.length = 1,
	            this;
	        if (k.isFunction(a))
	            return "undefined" !== typeof sa.ready ? sa.ready(a) : a(k);
	        void 0 !== a.selector && (this.selector = a.selector,
	        this.context = a.context);
	        return k.makeArray(a, this)
	    }
	    ).prototype = k.fn;
	    var sa = k(S);
	    var eb = /^(?:parents|prev(?:Until|All))/
	      , Xa = {
	        children: !0,
	        contents: !0,
	        next: !0,
	        prev: !0
	    };
	    k.extend({
	        dir: function(a, b, c) {
	            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
	                if (1 === a.nodeType) {
	                    if (e && k(a).is(c))
	                        break;
	                    d.push(a)
	                }
	            return d
	        },
	        sibling: function(a, b) {
	            for (var c = []; a; a = a.nextSibling)
	                1 === a.nodeType && a !== b && c.push(a);
	            return c
	        }
	    });
	    k.fn.extend({
	        has: function(a) {
	            var b = k(a, this)
	              , c = b.length;
	            return this.filter(function() {
	                for (var a = 0; a < c; a++)
	                    if (k.contains(this, b[a]))
	                        return !0
	            })
	        },
	        closest: function(a, b) {
	            for (var c, d = 0, e = this.length, f = [], v = Ra.test(a) || "string" !== typeof a ? k(a, b || this.context) : 0; d < e; d++)
	                for (c = this[d]; c && c !== b; c = c.parentNode)
	                    if (11 > c.nodeType && (v ? -1 < v.index(c) : 1 === c.nodeType && k.find.matchesSelector(c, a))) {
	                        f.push(c);
	                        break
	                    }
	            return this.pushStack(1 < f.length ? k.unique(f) : f)
	        },
	        index: function(a) {
	            return a ? "string" === typeof a ? aa.call(k(a), this[0]) : aa.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
	        },
	        add: function(a, b) {
	            return this.pushStack(k.unique(k.merge(this.get(), k(a, b))))
	        },
	        addBack: function(a) {
	            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	        }
	    });
	    k.each({
	        parent: function(a) {
	            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
	        },
	        parents: function(a) {
	            return k.dir(a, "parentNode")
	        },
	        parentsUntil: function(a, b, c) {
	            return k.dir(a, "parentNode", c)
	        },
	        next: function(a) {
	            return e(a, "nextSibling")
	        },
	        prev: function(a) {
	            return e(a, "previousSibling")
	        },
	        nextAll: function(a) {
	            return k.dir(a, "nextSibling")
	        },
	        prevAll: function(a) {
	            return k.dir(a, "previousSibling")
	        },
	        nextUntil: function(a, b, c) {
	            return k.dir(a, "nextSibling", c)
	        },
	        prevUntil: function(a, b, c) {
	            return k.dir(a, "previousSibling", c)
	        },
	        siblings: function(a) {
	            return k.sibling((a.parentNode || {}).firstChild, a)
	        },
	        children: function(a) {
	            return k.sibling(a.firstChild)
	        },
	        contents: function(a) {
	            return a.contentDocument || k.merge([], a.childNodes)
	        }
	    }, function(a, b) {
	        k.fn[a] = function(c, d) {
	            var e = k.map(this, b, c);
	            "Until" !== a.slice(-5) && (d = c);
	            d && "string" === typeof d && (e = k.filter(d, e));
	            1 < this.length && (Xa[a] || k.unique(e),
	            eb.test(a) && e.reverse());
	            return this.pushStack(e)
	        }
	    });
	    var oa = /\S+/g
	      , Ua = {};
	    k.Callbacks = function(a) {
	        a = "string" === typeof a ? Ua[a] || f(a) : k.extend({}, a);
	        var b, c, d, e, v, g, h = [], l = !a.once && [], p = function(f) {
	            b = a.memory && f;
	            c = !0;
	            g = e || 0;
	            e = 0;
	            v = h.length;
	            for (d = !0; h && g < v; g++)
	                if (!1 === h[g].apply(f[0], f[1]) && a.stopOnFalse) {
	                    b = !1;
	                    break
	                }
	            d = !1;
	            h && (l ? l.length && p(l.shift()) : b ? h = [] : m.disable())
	        }, m = {
	            add: function() {
	                if (h) {
	                    var c = h.length;
	                    (function Sb(b) {
	                        k.each(b, function(b, c) {
	                            b = k.type(c);
	                            "function" === b ? a.unique && m.has(c) || h.push(c) : c && c.length && "string" !== b && Sb(c)
	                        })
	                    }
	                    )(arguments);
	                    d ? v = h.length : b && (e = c,
	                    p(b))
	                }
	                return this
	            },
	            remove: function() {
	                h && k.each(arguments, function(a, b) {
	                    for (var c; -1 < (c = k.inArray(b, h, c)); )
	                        h.splice(c, 1),
	                        d && (c <= v && v--,
	                        c <= g && g--)
	                });
	                return this
	            },
	            has: function(a) {
	                return a ? -1 < k.inArray(a, h) : !(!h || !h.length)
	            },
	            empty: function() {
	                h = [];
	                v = 0;
	                return this
	            },
	            disable: function() {
	                h = l = b = void 0;
	                return this
	            },
	            disabled: function() {
	                return !h
	            },
	            lock: function() {
	                l = void 0;
	                b || m.disable();
	                return this
	            },
	            locked: function() {
	                return !l
	            },
	            fireWith: function(a, b) {
	                !h || c && !l || (b = b || [],
	                b = [a, b.slice ? b.slice() : b],
	                d ? l.push(b) : p(b));
	                return this
	            },
	            fire: function() {
	                m.fireWith(this, arguments);
	                return this
	            },
	            fired: function() {
	                return !!c
	            }
	        };
	        return m
	    }
	    ;
	    k.extend({
	        Deferred: function(a) {
	            var b = [["resolve", "done", k.Callbacks("once memory"), "resolved"], ["reject", "fail", k.Callbacks("once memory"), "rejected"], ["notify", "progress", k.Callbacks("memory")]]
	              , c = "pending"
	              , d = {
	                state: function() {
	                    return c
	                },
	                always: function() {
	                    e.done(arguments).fail(arguments);
	                    return this
	                },
	                then: function() {
	                    var a = arguments;
	                    return k.Deferred(function(c) {
	                        k.each(b, function(b, f) {
	                            var v = k.isFunction(a[b]) && a[b];
	                            e[f[1]](function() {
	                                var a = v && v.apply(this, arguments);
	                                if (a && k.isFunction(a.promise))
	                                    a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
	                                else
	                                    c[f[0] + "With"](this === d ? c.promise() : this, v ? [a] : arguments)
	                            })
	                        });
	                        a = null
	                    }).promise()
	                },
	                promise: function(a) {
	                    return null != a ? k.extend(a, d) : d
	                }
	            }
	              , e = {};
	            d.pipe = d.then;
	            k.each(b, function(a, f) {
	                var v = f[2]
	                  , h = f[3];
	                d[f[1]] = v.add;
	                h && v.add(function() {
	                    c = h
	                }, b[a ^ 1][2].disable, b[2][2].lock);
	                e[f[0]] = function() {
	                    e[f[0] + "With"](this === e ? d : this, arguments);
	                    return this
	                }
	                ;
	                e[f[0] + "With"] = v.fireWith
	            });
	            d.promise(e);
	            a && a.call(e, e);
	            return e
	        },
	        when: function(a) {
	            var b = 0, c = Y.call(arguments), d = c.length, e = 1 !== d || a && k.isFunction(a.promise) ? d : 0, f = 1 === e ? a : k.Deferred(), v = function(a, b, c) {
	                return function(d) {
	                    b[a] = this;
	                    c[a] = 1 < arguments.length ? Y.call(arguments) : d;
	                    c === g ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
	                }
	            }, h;
	            if (1 < d) {
	                var g = Array(d);
	                var l = Array(d);
	                for (h = Array(d); b < d; b++)
	                    c[b] && k.isFunction(c[b].promise) ? c[b].promise().done(v(b, h, c)).fail(f.reject).progress(v(b, l, g)) : --e
	            }
	            e || f.resolveWith(h, c);
	            return f.promise()
	        }
	    });
	    var Ea;
	    k.fn.ready = function(a) {
	        k.ready.promise().done(a);
	        return this
	    }
	    ;
	    k.extend({
	        isReady: !1,
	        readyWait: 1,
	        holdReady: function(a) {
	            a ? k.readyWait++ : k.ready(!0)
	        },
	        ready: function(a) {
	            (!0 === a ? --k.readyWait : k.isReady) || (k.isReady = !0,
	            !0 !== a && 0 < --k.readyWait || (Ea.resolveWith(S, [k]),
	            k.fn.triggerHandler && (k(S).triggerHandler("ready"),
	            k(S).off("ready"))))
	        }
	    });
	    k.ready.promise = function(b) {
	        Ea || (Ea = k.Deferred(),
	        "complete" === S.readyState ? setTimeout(k.ready) : (S.addEventListener("DOMContentLoaded", g, !1),
	        a.addEventListener("load", g, !1)));
	        return Ea.promise(b)
	    }
	    ;
	    k.ready.promise();
	    var qa = k.access = function(a, b, c, d, e, f, h) {
	        var v = 0
	          , g = a.length
	          , W = null == c;
	        if ("object" === k.type(c))
	            for (v in e = !0,
	            c)
	                k.access(a, b, v, c[v], !0, f, h);
	        else if (void 0 !== d && (e = !0,
	        k.isFunction(d) || (h = !0),
	        W && (h ? (b.call(a, d),
	        b = null) : (W = b,
	        b = function(a, b, c) {
	            return W.call(k(a), c)
	        }
	        )),
	        b))
	            for (; v < g; v++)
	                b(a[v], c, h ? d : d.call(a[v], v, b(a[v], c)));
	        return e ? a : W ? b.call(a) : g ? b(a[0], c) : f
	    }
	    ;
	    k.acceptData = function(a) {
	        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	    }
	    ;
	    n.uid = 1;
	    n.accepts = k.acceptData;
	    n.prototype = {
	        key: function(a) {
	            if (!n.accepts(a))
	                return 0;
	            var b = {}
	              , c = a[this.expando];
	            if (!c) {
	                c = n.uid++;
	                try {
	                    b[this.expando] = {
	                        value: c
	                    },
	                    Object.defineProperties(a, b)
	                } catch (Qa) {
	                    b[this.expando] = c,
	                    k.extend(a, b)
	                }
	            }
	            this.cache[c] || (this.cache[c] = {});
	            return c
	        },
	        set: function(a, b, c) {
	            var d;
	            a = this.key(a);
	            var e = this.cache[a];
	            if ("string" === typeof b)
	                e[b] = c;
	            else if (k.isEmptyObject(e))
	                k.extend(this.cache[a], b);
	            else
	                for (d in b)
	                    e[d] = b[d];
	            return e
	        },
	        get: function(a, b) {
	            a = this.cache[this.key(a)];
	            return void 0 === b ? a : a[b]
	        },
	        access: function(a, b, c) {
	            if (void 0 === b || b && "string" === typeof b && void 0 === c)
	                return c = this.get(a, b),
	                void 0 !== c ? c : this.get(a, k.camelCase(b));
	            this.set(a, b, c);
	            return void 0 !== c ? c : b
	        },
	        remove: function(a, b) {
	            var c = this.key(a);
	            a = this.cache[c];
	            if (void 0 === b)
	                this.cache[c] = {};
	            else
	                for (k.isArray(b) ? c = b.concat(b.map(k.camelCase)) : (c = k.camelCase(b),
	                c = b in a ? [b, c] : c in a ? [c] : c.match(oa) || []),
	                b = c.length; b--; )
	                    delete a[c[b]]
	        },
	        hasData: function(a) {
	            return !k.isEmptyObject(this.cache[a[this.expando]] || {})
	        },
	        discard: function(a) {
	            a[this.expando] && delete this.cache[a[this.expando]]
	        }
	    };
	    var N = new n
	      , ba = new n
	      , Wa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
	      , ta = /([A-Z])/g;
	    k.extend({
	        hasData: function(a) {
	            return ba.hasData(a) || N.hasData(a)
	        },
	        data: function(a, b, c) {
	            return ba.access(a, b, c)
	        },
	        removeData: function(a, b) {
	            ba.remove(a, b)
	        },
	        _data: function(a, b, c) {
	            return N.access(a, b, c)
	        },
	        _removeData: function(a, b) {
	            N.remove(a, b)
	        }
	    });
	    k.fn.extend({
	        data: function(a, b) {
	            var c, d = this[0], e = d && d.attributes;
	            if (void 0 === a) {
	                if (this.length) {
	                    var f = ba.get(d);
	                    if (1 === d.nodeType && !N.get(d, "hasDataAttrs")) {
	                        for (c = e.length; c--; )
	                            if (e[c]) {
	                                var v = e[c].name;
	                                0 === v.indexOf("data-") && (v = k.camelCase(v.slice(5)),
	                                l(d, v, f[v]))
	                            }
	                        N.set(d, "hasDataAttrs", !0)
	                    }
	                }
	                return f
	            }
	            return "object" === typeof a ? this.each(function() {
	                ba.set(this, a)
	            }) : qa(this, function(b) {
	                var c = k.camelCase(a);
	                if (d && void 0 === b) {
	                    var e = ba.get(d, a);
	                    if (void 0 !== e)
	                        return e;
	                    e = ba.get(d, c);
	                    if (void 0 !== e)
	                        return e;
	                    e = l(d, c, void 0);
	                    if (void 0 !== e)
	                        return e
	                } else
	                    this.each(function() {
	                        var d = ba.get(this, c);
	                        ba.set(this, c, b);
	                        -1 !== a.indexOf("-") && void 0 !== d && ba.set(this, a, b)
	                    })
	            }, null, b, 1 < arguments.length, null, !0)
	        },
	        removeData: function(a) {
	            return this.each(function() {
	                ba.remove(this, a)
	            })
	        }
	    });
	    k.extend({
	        queue: function(a, b, c) {
	            if (a) {
	                b = (b || "fx") + "queue";
	                var d = N.get(a, b);
	                c && (!d || k.isArray(c) ? d = N.access(a, b, k.makeArray(c)) : d.push(c));
	                return d || []
	            }
	        },
	        dequeue: function(a, b) {
	            b = b || "fx";
	            var c = k.queue(a, b)
	              , d = c.length
	              , e = c.shift()
	              , f = k._queueHooks(a, b)
	              , v = function() {
	                k.dequeue(a, b)
	            };
	            "inprogress" === e && (e = c.shift(),
	            d--);
	            e && ("fx" === b && c.unshift("inprogress"),
	            delete f.stop,
	            e.call(a, v, f));
	            !d && f && f.empty.fire()
	        },
	        _queueHooks: function(a, b) {
	            var c = b + "queueHooks";
	            return N.get(a, c) || N.access(a, c, {
	                empty: k.Callbacks("once memory").add(function() {
	                    N.remove(a, [b + "queue", c])
	                })
	            })
	        }
	    });
	    k.fn.extend({
	        queue: function(a, b) {
	            var c = 2;
	            "string" !== typeof a && (b = a,
	            a = "fx",
	            c--);
	            return arguments.length < c ? k.queue(this[0], a) : void 0 === b ? this : this.each(function() {
	                var c = k.queue(this, a, b);
	                k._queueHooks(this, a);
	                "fx" === a && "inprogress" !== c[0] && k.dequeue(this, a)
	            })
	        },
	        dequeue: function(a) {
	            return this.each(function() {
	                k.dequeue(this, a)
	            })
	        },
	        clearQueue: function(a) {
	            return this.queue(a || "fx", [])
	        },
	        promise: function(a, b) {
	            var c, d = 1, e = k.Deferred(), f = this, v = this.length, h = function() {
	                --d || e.resolveWith(f, [f])
	            };
	            "string" !== typeof a && (b = a,
	            a = void 0);
	            for (a = a || "fx"; v--; )
	                (c = N.get(f[v], a + "queueHooks")) && c.empty && (d++,
	                c.empty.add(h));
	            h();
	            return e.promise(b)
	        }
	    });
	    var Ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
	      , wa = ["Top", "Right", "Bottom", "Left"]
	      , za = function(a, b) {
	        a = b || a;
	        return "none" === k.css(a, "display") || !k.contains(a.ownerDocument, a)
	    }
	      , Fa = /^(?:checkbox|radio)$/i;
	    (function() {
	        var a = S.createDocumentFragment().appendChild(S.createElement("div"))
	          , b = S.createElement("input");
	        b.setAttribute("type", "radio");
	        b.setAttribute("checked", "checked");
	        b.setAttribute("name", "t");
	        a.appendChild(b);
	        U.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
	        a.innerHTML = "<textarea>x</textarea>";
	        U.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
	    }
	    )();
	    U.focusinBubbles = "onfocusin"in a;
	    var hb = /^key/
	      , ma = /^(?:mouse|pointer|contextmenu)|click/
	      , cb = /^(?:focusinfocus|focusoutblur)$/
	      , Ja = /^([^.]*)(?:\.(.+)|)$/;
	    k.event = {
	        global: {},
	        add: function(a, b, c, d, e) {
	            var f, v, h, g, l;
	            if (h = N.get(a)) {
	                if (c.handler) {
	                    var p = c;
	                    c = p.handler;
	                    e = p.selector
	                }
	                c.guid || (c.guid = k.guid++);
	                (v = h.events) || (v = h.events = {});
	                (f = h.handle) || (f = h.handle = function(b) {
	                    return "undefined" !== typeof k && k.event.triggered !== b.type ? k.event.dispatch.apply(a, arguments) : void 0
	                }
	                );
	                b = (b || "").match(oa) || [""];
	                for (h = b.length; h--; ) {
	                    var m = Ja.exec(b[h]) || [];
	                    var n = g = m[1];
	                    var W = (m[2] || "").split(".").sort();
	                    n && (m = k.event.special[n] || {},
	                    n = (e ? m.delegateType : m.bindType) || n,
	                    m = k.event.special[n] || {},
	                    g = k.extend({
	                        type: n,
	                        origType: g,
	                        data: d,
	                        handler: c,
	                        guid: c.guid,
	                        selector: e,
	                        needsContext: e && k.expr.match.needsContext.test(e),
	                        namespace: W.join(".")
	                    }, p),
	                    (l = v[n]) || (l = v[n] = [],
	                    l.delegateCount = 0,
	                    m.setup && !1 !== m.setup.call(a, d, W, f) || a.addEventListener && a.addEventListener(n, f, !1)),
	                    m.add && (m.add.call(a, g),
	                    g.handler.guid || (g.handler.guid = c.guid)),
	                    e ? l.splice(l.delegateCount++, 0, g) : l.push(g),
	                    k.event.global[n] = !0)
	                }
	            }
	        },
	        remove: function(a, b, c, d, e) {
	            var f, h, v, g, l, p = N.hasData(a) && N.get(a);
	            if (p && (v = p.events)) {
	                b = (b || "").match(oa) || [""];
	                for (g = b.length; g--; ) {
	                    var m = Ja.exec(b[g]) || [];
	                    var n = l = m[1];
	                    var W = (m[2] || "").split(".").sort();
	                    if (n) {
	                        var q = k.event.special[n] || {};
	                        n = (d ? q.delegateType : q.bindType) || n;
	                        var t = v[n] || [];
	                        m = m[2] && new RegExp("(^|\\.)" + W.join("\\.(?:.*\\.|)") + "(\\.|$)");
	                        for (h = f = t.length; f--; ) {
	                            var da = t[f];
	                            !e && l !== da.origType || c && c.guid !== da.guid || m && !m.test(da.namespace) || d && d !== da.selector && ("**" !== d || !da.selector) || (t.splice(f, 1),
	                            da.selector && t.delegateCount--,
	                            q.remove && q.remove.call(a, da))
	                        }
	                        h && !t.length && (q.teardown && !1 !== q.teardown.call(a, W, p.handle) || k.removeEvent(a, n, p.handle),
	                        delete v[n])
	                    } else
	                        for (n in v)
	                            k.event.remove(a, n + b[g], c, d, !0)
	                }
	                k.isEmptyObject(v) && (delete p.handle,
	                N.remove(a, "events"))
	            }
	        },
	        trigger: function(b, c, d, e) {
	            var f, h, g = [d || S], v = fa.call(b, "type") ? b.type : b;
	            var l = fa.call(b, "namespace") ? b.namespace.split(".") : [];
	            var p = f = d = d || S;
	            if (3 !== d.nodeType && 8 !== d.nodeType && !cb.test(v + k.event.triggered)) {
	                0 <= v.indexOf(".") && (l = v.split("."),
	                v = l.shift(),
	                l.sort());
	                var m = 0 > v.indexOf(":") && "on" + v;
	                b = b[k.expando] ? b : new k.Event(v,"object" === typeof b && b);
	                b.isTrigger = e ? 2 : 3;
	                b.namespace = l.join(".");
	                b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	                b.result = void 0;
	                b.target || (b.target = d);
	                c = null == c ? [b] : k.makeArray(c, [b]);
	                l = k.event.special[v] || {};
	                if (e || !l.trigger || !1 !== l.trigger.apply(d, c)) {
	                    if (!e && !l.noBubble && !k.isWindow(d)) {
	                        var n = l.delegateType || v;
	                        cb.test(n + v) || (p = p.parentNode);
	                        for (; p; p = p.parentNode)
	                            g.push(p),
	                            f = p;
	                        f === (d.ownerDocument || S) && g.push(f.defaultView || f.parentWindow || a)
	                    }
	                    for (f = 0; (p = g[f++]) && !b.isPropagationStopped(); )
	                        b.type = 1 < f ? n : l.bindType || v,
	                        (h = (N.get(p, "events") || {})[b.type] && N.get(p, "handle")) && h.apply(p, c),
	                        (h = m && p[m]) && h.apply && k.acceptData(p) && (b.result = h.apply(p, c),
	                        !1 === b.result && b.preventDefault());
	                    b.type = v;
	                    e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(g.pop(), c) || !k.acceptData(d) || !m || !k.isFunction(d[v]) || k.isWindow(d) || ((f = d[m]) && (d[m] = null),
	                    k.event.triggered = v,
	                    d[v](),
	                    k.event.triggered = void 0,
	                    f && (d[m] = f));
	                    return b.result
	                }
	            }
	        },
	        dispatch: function(a) {
	            a = k.event.fix(a);
	            var b, c, d, e = Y.call(arguments);
	            var f = (N.get(this, "events") || {})[a.type] || [];
	            var h = k.event.special[a.type] || {};
	            e[0] = a;
	            a.delegateTarget = this;
	            if (!h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
	                var g = k.event.handlers.call(this, a, f);
	                for (f = 0; (d = g[f++]) && !a.isPropagationStopped(); )
	                    for (a.currentTarget = d.elem,
	                    b = 0; (c = d.handlers[b++]) && !a.isImmediatePropagationStopped(); )
	                        if (!a.namespace_re || a.namespace_re.test(c.namespace))
	                            a.handleObj = c,
	                            a.data = c.data,
	                            c = ((k.event.special[c.origType] || {}).handle || c.handler).apply(d.elem, e),
	                            void 0 !== c && !1 === (a.result = c) && (a.preventDefault(),
	                            a.stopPropagation());
	                h.postDispatch && h.postDispatch.call(this, a);
	                return a.result
	            }
	        },
	        handlers: function(a, b) {
	            var c, d = [], e = b.delegateCount, f = a.target;
	            if (e && f.nodeType && (!a.button || "click" !== a.type))
	                for (; f !== this; f = f.parentNode || this)
	                    if (!0 !== f.disabled || "click" !== a.type) {
	                        var h = [];
	                        for (c = 0; c < e; c++) {
	                            var g = b[c];
	                            var v = g.selector + " ";
	                            void 0 === h[v] && (h[v] = g.needsContext ? 0 <= k(v, this).index(f) : k.find(v, this, null, [f]).length);
	                            h[v] && h.push(g)
	                        }
	                        h.length && d.push({
	                            elem: f,
	                            handlers: h
	                        })
	                    }
	            e < b.length && d.push({
	                elem: this,
	                handlers: b.slice(e)
	            });
	            return d
	        },
	        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	        fixHooks: {},
	        keyHooks: {
	            props: ["char", "charCode", "key", "keyCode"],
	            filter: function(a, b) {
	                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
	                return a
	            }
	        },
	        mouseHooks: {
	            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
	            filter: function(a, b) {
	                var c = b.button;
	                if (null == a.pageX && null != b.clientX) {
	                    var d = a.target.ownerDocument || S;
	                    var e = d.documentElement;
	                    d = d.body;
	                    a.pageX = b.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0);
	                    a.pageY = b.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)
	                }
	                a.which || void 0 === c || (a.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0);
	                return a
	            }
	        },
	        fix: function(a) {
	            if (a[k.expando])
	                return a;
	            var b = a.type;
	            var c = a
	              , d = this.fixHooks[b];
	            d || (this.fixHooks[b] = d = ma.test(b) ? this.mouseHooks : hb.test(b) ? this.keyHooks : {});
	            var e = d.props ? this.props.concat(d.props) : this.props;
	            a = new k.Event(c);
	            for (b = e.length; b--; ) {
	                var f = e[b];
	                a[f] = c[f]
	            }
	            a.target || (a.target = S);
	            3 === a.target.nodeType && (a.target = a.target.parentNode);
	            return d.filter ? d.filter(a, c) : a
	        },
	        special: {
	            load: {
	                noBubble: !0
	            },
	            focus: {
	                trigger: function() {
	                    if (this !== r() && this.focus)
	                        return this.focus(),
	                        !1
	                },
	                delegateType: "focusin"
	            },
	            blur: {
	                trigger: function() {
	                    if (this === r() && this.blur)
	                        return this.blur(),
	                        !1
	                },
	                delegateType: "focusout"
	            },
	            click: {
	                trigger: function() {
	                    if ("checkbox" === this.type && this.click && k.nodeName(this, "input"))
	                        return this.click(),
	                        !1
	                },
	                _default: function(a) {
	                    return k.nodeName(a.target, "a")
	                }
	            },
	            beforeunload: {
	                postDispatch: function(a) {
	                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
	                }
	            }
	        },
	        simulate: function(a, b, c, d) {
	            a = k.extend(new k.Event, c, {
	                type: a,
	                isSimulated: !0,
	                originalEvent: {}
	            });
	            d ? k.event.trigger(a, null, b) : k.event.dispatch.call(b, a);
	            a.isDefaultPrevented() && c.preventDefault()
	        }
	    };
	    k.removeEvent = function(a, b, c) {
	        a.removeEventListener && a.removeEventListener(b, c, !1)
	    }
	    ;
	    k.Event = function(a, b) {
	        if (!(this instanceof k.Event))
	            return new k.Event(a,b);
	        a && a.type ? (this.originalEvent = a,
	        this.type = a.type,
	        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? q : u) : this.type = a;
	        b && k.extend(this, b);
	        this.timeStamp = a && a.timeStamp || k.now();
	        this[k.expando] = !0
	    }
	    ;
	    k.Event.prototype = {
	        isDefaultPrevented: u,
	        isPropagationStopped: u,
	        isImmediatePropagationStopped: u,
	        preventDefault: function() {
	            var a = this.originalEvent;
	            this.isDefaultPrevented = q;
	            a && a.preventDefault && a.preventDefault()
	        },
	        stopPropagation: function() {
	            var a = this.originalEvent;
	            this.isPropagationStopped = q;
	            a && a.stopPropagation && a.stopPropagation()
	        },
	        stopImmediatePropagation: function() {
	            var a = this.originalEvent;
	            this.isImmediatePropagationStopped = q;
	            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
	            this.stopPropagation()
	        }
	    };
	    k.each({
	        mouseenter: "mouseover",
	        mouseleave: "mouseout",
	        pointerenter: "pointerover",
	        pointerleave: "pointerout"
	    }, function(a, b) {
	        k.event.special[a] = {
	            delegateType: b,
	            bindType: b,
	            handle: function(a) {
	                var c = a.relatedTarget
	                  , d = a.handleObj;
	                if (!c || c !== this && !k.contains(this, c)) {
	                    a.type = d.origType;
	                    var e = d.handler.apply(this, arguments);
	                    a.type = b
	                }
	                return e
	            }
	        }
	    });
	    U.focusinBubbles || k.each({
	        focus: "focusin",
	        blur: "focusout"
	    }, function(a, b) {
	        var c = function(a) {
	            k.event.simulate(b, a.target, k.event.fix(a), !0)
	        };
	        k.event.special[b] = {
	            setup: function() {
	                var d = this.ownerDocument || this
	                  , e = N.access(d, b);
	                e || d.addEventListener(a, c, !0);
	                N.access(d, b, (e || 0) + 1)
	            },
	            teardown: function() {
	                var d = this.ownerDocument || this
	                  , e = N.access(d, b) - 1;
	                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
	                N.remove(d, b))
	            }
	        }
	    });
	    k.fn.extend({
	        on: function(a, b, c, d, e) {
	            var f;
	            if ("object" === typeof a) {
	                "string" !== typeof b && (c = c || b,
	                b = void 0);
	                for (f in a)
	                    this.on(f, b, c, a[f], e);
	                return this
	            }
	            null == c && null == d ? (d = b,
	            c = b = void 0) : null == d && ("string" === typeof b ? (d = c,
	            c = void 0) : (d = c,
	            c = b,
	            b = void 0));
	            if (!1 === d)
	                d = u;
	            else if (!d)
	                return this;
	            if (1 === e) {
	                var h = d;
	                d = function(a) {
	                    k().off(a);
	                    return h.apply(this, arguments)
	                }
	                ;
	                d.guid = h.guid || (h.guid = k.guid++)
	            }
	            return this.each(function() {
	                k.event.add(this, a, d, c, b)
	            })
	        },
	        one: function(a, b, c, d) {
	            return this.on(a, b, c, d, 1)
	        },
	        off: function(a, b, c) {
	            if (a && a.preventDefault && a.handleObj) {
	                var d = a.handleObj;
	                k(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
	                return this
	            }
	            if ("object" === typeof a) {
	                for (d in a)
	                    this.off(d, b, a[d]);
	                return this
	            }
	            if (!1 === b || "function" === typeof b)
	                c = b,
	                b = void 0;
	            !1 === c && (c = u);
	            return this.each(function() {
	                k.event.remove(this, a, c, b)
	            })
	        },
	        trigger: function(a, b) {
	            return this.each(function() {
	                k.event.trigger(a, b, this)
	            })
	        },
	        triggerHandler: function(a, b) {
	            var c = this[0];
	            if (c)
	                return k.event.trigger(a, b, c, !0)
	        }
	    });
	    var Ma = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
	      , Da = /<([\w:]+)/
	      , Za = /<|&#?\w+;/
	      , ob = /<(?:script|style|link)/i
	      , Oa = /checked\s*(?:[^=]|=\s*.checked.)/i
	      , Ca = /^$|\/(?:java|ecma)script/i
	      , wb = /^true\/(.*)/
	      , fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
	      , na = {
	        option: [1, "<select multiple='multiple'>", "</select>"],
	        thead: [1, "<table>", "</table>"],
	        col: [2, "<table><colgroup>", "</colgroup></table>"],
	        tr: [2, "<table><tbody>", "</tbody></table>"],
	        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	        _default: [0, "", ""]
	    };
	    na.optgroup = na.option;
	    na.tbody = na.tfoot = na.colgroup = na.caption = na.thead;
	    na.th = na.td;
	    k.extend({
	        clone: function(a, b, c) {
	            var d, e = a.cloneNode(!0), f = k.contains(a.ownerDocument, a);
	            if (!(U.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || k.isXMLDoc(a))) {
	                var g = x(e);
	                var v = x(a);
	                var l = 0;
	                for (d = v.length; l < d; l++) {
	                    var m = v[l]
	                      , n = g[l]
	                      , q = n.nodeName.toLowerCase();
	                    if ("input" === q && Fa.test(m.type))
	                        n.checked = m.checked;
	                    else if ("input" === q || "textarea" === q)
	                        n.defaultValue = m.defaultValue
	                }
	            }
	            if (b)
	                if (c)
	                    for (v = v || x(a),
	                    g = g || x(e),
	                    l = 0,
	                    d = v.length; l < d; l++)
	                        p(v[l], g[l]);
	                else
	                    p(a, e);
	            g = x(e, "script");
	            0 < g.length && h(g, !f && x(a, "script"));
	            return e
	        },
	        buildFragment: function(a, b, c, d) {
	            for (var e, f, g, v = b.createDocumentFragment(), l = [], p = 0, m = a.length; p < m; p++)
	                if ((e = a[p]) || 0 === e)
	                    if ("object" === k.type(e))
	                        k.merge(l, e.nodeType ? [e] : e);
	                    else if (Za.test(e)) {
	                        f = f || v.appendChild(b.createElement("div"));
	                        g = (Da.exec(e) || ["", ""])[1].toLowerCase();
	                        g = na[g] || na._default;
	                        f.innerHTML = g[1] + e.replace(Ma, "<$1></$2>") + g[2];
	                        for (g = g[0]; g--; )
	                            f = f.lastChild;
	                        k.merge(l, f.childNodes);
	                        f = v.firstChild;
	                        f.textContent = ""
	                    } else
	                        l.push(b.createTextNode(e));
	            v.textContent = "";
	            for (p = 0; e = l[p++]; )
	                if (!d || -1 === k.inArray(e, d))
	                    if (a = k.contains(e.ownerDocument, e),
	                    f = x(v.appendChild(e), "script"),
	                    a && h(f),
	                    c)
	                        for (g = 0; e = f[g++]; )
	                            Ca.test(e.type || "") && c.push(e);
	            return v
	        },
	        cleanData: function(a) {
	            for (var b, c, d, e, f = k.event.special, h = 0; void 0 !== (c = a[h]); h++) {
	                if (k.acceptData(c) && (e = c[N.expando]) && (b = N.cache[e])) {
	                    if (b.events)
	                        for (d in b.events)
	                            f[d] ? k.event.remove(c, d) : k.removeEvent(c, d, b.handle);
	                    N.cache[e] && delete N.cache[e]
	                }
	                delete ba.cache[c[ba.expando]]
	            }
	        }
	    });
	    k.fn.extend({
	        text: function(a) {
	            return qa(this, function(a) {
	                return void 0 === a ? k.text(this) : this.empty().each(function() {
	                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
	                        this.textContent = a
	                })
	            }, null, a, arguments.length)
	        },
	        append: function() {
	            return this.domManip(arguments, function(a) {
	                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || B(this, a).appendChild(a)
	            })
	        },
	        prepend: function() {
	            return this.domManip(arguments, function(a) {
	                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	                    var b = B(this, a);
	                    b.insertBefore(a, b.firstChild)
	                }
	            })
	        },
	        before: function() {
	            return this.domManip(arguments, function(a) {
	                this.parentNode && this.parentNode.insertBefore(a, this)
	            })
	        },
	        after: function() {
	            return this.domManip(arguments, function(a) {
	                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
	            })
	        },
	        remove: function(a, b) {
	            for (var c = a ? k.filter(a, this) : this, d = 0; null != (a = c[d]); d++)
	                b || 1 !== a.nodeType || k.cleanData(x(a)),
	                a.parentNode && (b && k.contains(a.ownerDocument, a) && h(x(a, "script")),
	                a.parentNode.removeChild(a));
	            return this
	        },
	        empty: function() {
	            for (var a, b = 0; null != (a = this[b]); b++)
	                1 === a.nodeType && (k.cleanData(x(a, !1)),
	                a.textContent = "");
	            return this
	        },
	        clone: function(a, b) {
	            a = null == a ? !1 : a;
	            b = null == b ? a : b;
	            return this.map(function() {
	                return k.clone(this, a, b)
	            })
	        },
	        html: function(a) {
	            return qa(this, function(a) {
	                var b = this[0] || {}
	                  , c = 0
	                  , d = this.length;
	                if (void 0 === a && 1 === b.nodeType)
	                    return b.innerHTML;
	                if ("string" === typeof a && !ob.test(a) && !na[(Da.exec(a) || ["", ""])[1].toLowerCase()]) {
	                    a = a.replace(Ma, "<$1></$2>");
	                    try {
	                        for (; c < d; c++)
	                            b = this[c] || {},
	                            1 === b.nodeType && (k.cleanData(x(b, !1)),
	                            b.innerHTML = a);
	                        b = 0
	                    } catch (Ub) {}
	                }
	                b && this.empty().append(a)
	            }, null, a, arguments.length)
	        },
	        replaceWith: function() {
	            var a = arguments[0];
	            this.domManip(arguments, function(b) {
	                a = this.parentNode;
	                k.cleanData(x(this));
	                a && a.replaceChild(b, this)
	            });
	            return a && (a.length || a.nodeType) ? this : this.remove()
	        },
	        detach: function(a) {
	            return this.remove(a, !0)
	        },
	        domManip: function(a, b) {
	            a = P.apply([], a);
	            var c, d = 0, e = this.length, f = this, h = e - 1, g = a[0], v = k.isFunction(g);
	            if (v || 1 < e && "string" === typeof g && !U.checkClone && Oa.test(g))
	                return this.each(function(c) {
	                    var d = f.eq(c);
	                    v && (a[0] = g.call(this, c, d.html()));
	                    d.domManip(a, b)
	                });
	            if (e) {
	                var l = k.buildFragment(a, this[0].ownerDocument, !1, this);
	                var p = l.firstChild;
	                1 === l.childNodes.length && (l = p);
	                if (p) {
	                    p = k.map(x(l, "script"), D);
	                    for (c = p.length; d < e; d++) {
	                        var m = l;
	                        d !== h && (m = k.clone(m, !0, !0),
	                        c && k.merge(p, x(m, "script")));
	                        b.call(this[d], m, d)
	                    }
	                    if (c)
	                        for (l = p[p.length - 1].ownerDocument,
	                        k.map(p, w),
	                        d = 0; d < c; d++)
	                            m = p[d],
	                            Ca.test(m.type || "") && !N.access(m, "globalEval") && k.contains(l, m) && (m.src ? k._evalUrl && k._evalUrl(m.src) : k.globalEval(m.textContent.replace(fb, "")))
	                }
	            }
	            return this
	        }
	    });
	    k.each({
	        appendTo: "append",
	        prependTo: "prepend",
	        insertBefore: "before",
	        insertAfter: "after",
	        replaceAll: "replaceWith"
	    }, function(a, b) {
	        k.fn[a] = function(a) {
	            for (var c = [], d = k(a), e = d.length - 1, f = 0; f <= e; f++)
	                a = f === e ? this : this.clone(!0),
	                k(d[f])[b](a),
	                ja.apply(c, a.get());
	            return this.pushStack(c)
	        }
	    });
	    var Ka, ab = {}, qb = /^margin/, ya = new RegExp("^(" + Ga + ")(?!px)[a-z%]+$","i"), xa = function(a) {
	        return a.ownerDocument.defaultView.getComputedStyle(a, null)
	    };
	    (function() {
	        function b() {
	            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
	            h.innerHTML = "";
	            e.appendChild(f);
	            var b = a.getComputedStyle(h, null);
	            c = "1%" !== b.top;
	            d = "4px" === b.width;
	            e.removeChild(f)
	        }
	        var c, d, e = S.documentElement, f = S.createElement("div"), h = S.createElement("div");
	        h.style && (h.style.backgroundClip = "content-box",
	        h.cloneNode(!0).style.backgroundClip = "",
	        U.clearCloneStyle = "content-box" === h.style.backgroundClip,
	        f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
	        f.appendChild(h),
	        a.getComputedStyle && k.extend(U, {
	            pixelPosition: function() {
	                b();
	                return c
	            },
	            boxSizingReliable: function() {
	                null == d && b();
	                return d
	            },
	            reliableMarginRight: function() {
	                var b = h.appendChild(S.createElement("div"));
	                b.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
	                b.style.marginRight = b.style.width = "0";
	                h.style.width = "1px";
	                e.appendChild(f);
	                b = !parseFloat(a.getComputedStyle(b, null).marginRight);
	                e.removeChild(f);
	                return b
	            }
	        }))
	    }
	    )();
	    k.swap = function(a, b, c, d) {
	        var e, f = {};
	        for (e in b)
	            f[e] = a.style[e],
	            a.style[e] = b[e];
	        c = c.apply(a, d || []);
	        for (e in b)
	            a.style[e] = f[e];
	        return c
	    }
	    ;
	    var Ba = /^(none|table(?!-c[ea]).+)/
	      , gb = new RegExp("^(" + Ga + ")(.*)$","i")
	      , zb = new RegExp("^([+-])=(" + Ga + ")","i")
	      , sb = {
	        position: "absolute",
	        visibility: "hidden",
	        display: "block"
	    }
	      , kb = {
	        letterSpacing: "0",
	        fontWeight: "400"
	    }
	      , $a = ["Webkit", "O", "Moz", "ms"];
	    k.extend({
	        cssHooks: {
	            opacity: {
	                get: function(a, b) {
	                    if (b)
	                        return a = C(a, "opacity"),
	                        "" === a ? "1" : a
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
	        cssProps: {
	            "float": "cssFloat"
	        },
	        style: function(a, b, c, d) {
	            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	                var e, f = k.camelCase(b), h = a.style;
	                b = k.cssProps[f] || (k.cssProps[f] = I(h, f));
	                var g = k.cssHooks[b] || k.cssHooks[f];
	                if (void 0 !== c) {
	                    var v = typeof c;
	                    "string" === v && (e = zb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(k.css(a, b)),
	                    v = "number");
	                    null != c && c === c && ("number" !== v || k.cssNumber[f] || (c += "px"),
	                    U.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (h[b] = "inherit"),
	                    g && "set"in g && void 0 === (c = g.set(a, c, d)) || (h[b] = c))
	                } else
	                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : h[b]
	            }
	        },
	        css: function(a, b, c, d) {
	            var e;
	            var f = k.camelCase(b);
	            b = k.cssProps[f] || (k.cssProps[f] = I(a.style, f));
	            (f = k.cssHooks[b] || k.cssHooks[f]) && "get"in f && (e = f.get(a, !0, c));
	            void 0 === e && (e = C(a, b, d));
	            "normal" === e && b in kb && (e = kb[b]);
	            return "" === c || c ? (a = parseFloat(e),
	            !0 === c || k.isNumeric(a) ? a || 0 : e) : e
	        }
	    });
	    k.each(["height", "width"], function(a, b) {
	        k.cssHooks[b] = {
	            get: function(a, c, d) {
	                if (c)
	                    return Ba.test(k.css(a, "display")) && 0 === a.offsetWidth ? k.swap(a, sb, function() {
	                        return G(a, b, d)
	                    }) : G(a, b, d)
	            },
	            set: function(a, c, d) {
	                var e = d && xa(a);
	                return m(a, c, d ? E(a, b, d, "border-box" === k.css(a, "boxSizing", !1, e), e) : 0)
	            }
	        }
	    });
	    k.cssHooks.marginRight = y(U.reliableMarginRight, function(a, b) {
	        if (b)
	            return k.swap(a, {
	                display: "inline-block"
	            }, C, [a, "marginRight"])
	    });
	    k.each({
	        margin: "",
	        padding: "",
	        border: "Width"
	    }, function(a, b) {
	        k.cssHooks[a + b] = {
	            expand: function(c) {
	                var d = 0
	                  , e = {};
	                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)
	                    e[a + wa[d] + b] = c[d] || c[d - 2] || c[0];
	                return e
	            }
	        };
	        qb.test(a) || (k.cssHooks[a + b].set = m)
	    });
	    k.fn.extend({
	        css: function(a, b) {
	            return qa(this, function(a, b, c) {
	                var d, e = {}, f = 0;
	                if (k.isArray(b)) {
	                    c = xa(a);
	                    for (d = b.length; f < d; f++)
	                        e[b[f]] = k.css(a, b[f], !1, c);
	                    return e
	                }
	                return void 0 !== c ? k.style(a, b, c) : k.css(a, b)
	            }, a, b, 1 < arguments.length)
	        },
	        show: function() {
	            return H(this, !0)
	        },
	        hide: function() {
	            return H(this)
	        },
	        toggle: function(a) {
	            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
	                za(this) ? k(this).show() : k(this).hide()
	            })
	        }
	    });
	    k.Tween = J;
	    J.prototype = {
	        constructor: J,
	        init: function(a, b, c, d, e, f) {
	            this.elem = a;
	            this.prop = c;
	            this.easing = e || "swing";
	            this.options = b;
	            this.start = this.now = this.cur();
	            this.end = d;
	            this.unit = f || (k.cssNumber[c] ? "" : "px")
	        },
	        cur: function() {
	            var a = J.propHooks[this.prop];
	            return a && a.get ? a.get(this) : J.propHooks._default.get(this)
	        },
	        run: function(a) {
	            var b, c = J.propHooks[this.prop];
	            this.pos = this.options.duration ? b = k.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
	            this.now = (this.end - this.start) * b + this.start;
	            this.options.step && this.options.step.call(this.elem, this.now, this);
	            c && c.set ? c.set(this) : J.propHooks._default.set(this);
	            return this
	        }
	    };
	    J.prototype.init.prototype = J.prototype;
	    J.propHooks = {
	        _default: {
	            get: function(a) {
	                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = k.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
	            },
	            set: function(a) {
	                if (k.fx.step[a.prop])
	                    k.fx.step[a.prop](a);
	                else
	                    a.elem.style && (null != a.elem.style[k.cssProps[a.prop]] || k.cssHooks[a.prop]) ? k.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
	            }
	        }
	    };
	    J.propHooks.scrollTop = J.propHooks.scrollLeft = {
	        set: function(a) {
	            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
	        }
	    };
	    k.easing = {
	        linear: function(a) {
	            return a
	        },
	        swing: function(a) {
	            return .5 - Math.cos(a * Math.PI) / 2
	        }
	    };
	    k.fx = J.prototype.init;
	    k.fx.step = {};
	    var La, bb, ra = /^(?:toggle|show|hide)$/, nb = new RegExp("^(?:([+-])=|)(" + Ga + ")([a-z%]*)$","i"), mb = /queueHooks$/, Na = [function(a, b, c) {
	        var d, e = this, f = {}, h = a.style, g = a.nodeType && za(a), v = N.get(a, "fxshow");
	        if (!c.queue) {
	            var l = k._queueHooks(a, "fx");
	            if (null == l.unqueued) {
	                l.unqueued = 0;
	                var p = l.empty.fire;
	                l.empty.fire = function() {
	                    l.unqueued || p()
	                }
	            }
	            l.unqueued++;
	            e.always(function() {
	                e.always(function() {
	                    l.unqueued--;
	                    k.queue(a, "fx").length || l.empty.fire()
	                })
	            })
	        }
	        if (1 === a.nodeType && ("height"in b || "width"in b)) {
	            c.overflow = [h.overflow, h.overflowX, h.overflowY];
	            var m = k.css(a, "display");
	            var n = "none" === m ? N.get(a, "olddisplay") || z(a.nodeName) : m;
	            "inline" === n && "none" === k.css(a, "float") && (h.display = "inline-block")
	        }
	        c.overflow && (h.overflow = "hidden",
	        e.always(function() {
	            h.overflow = c.overflow[0];
	            h.overflowX = c.overflow[1];
	            h.overflowY = c.overflow[2]
	        }));
	        for (d in b)
	            if (n = b[d],
	            ra.exec(n)) {
	                delete b[d];
	                var q = q || "toggle" === n;
	                if (n === (g ? "hide" : "show"))
	                    if ("show" === n && v && void 0 !== v[d])
	                        g = !0;
	                    else
	                        continue;
	                f[d] = v && v[d] || k.style(a, d)
	            } else
	                m = void 0;
	        if (k.isEmptyObject(f))
	            "inline" === ("none" === m ? z(a.nodeName) : m) && (h.display = m);
	        else
	            for (d in v ? "hidden"in v && (g = v.hidden) : v = N.access(a, "fxshow", {}),
	            q && (v.hidden = !g),
	            g ? k(a).show() : e.done(function() {
	                k(a).hide()
	            }),
	            e.done(function() {
	                var b;
	                N.remove(a, "fxshow");
	                for (b in f)
	                    k.style(a, b, f[b])
	            }),
	            f)
	                b = F(g ? v[d] : 0, d, e),
	                d in v || (v[d] = b.start,
	                g && (b.end = b.start,
	                b.start = "width" === d || "height" === d ? 1 : 0))
	    }
	    ], pa = {
	        "*": [function(a, b) {
	            var c = this.createTween(a, b)
	              , d = c.cur()
	              , e = (b = nb.exec(b)) && b[3] || (k.cssNumber[a] ? "" : "px")
	              , f = (k.cssNumber[a] || "px" !== e && +d) && nb.exec(k.css(c.elem, a))
	              , h = 1
	              , g = 20;
	            if (f && f[3] !== e) {
	                e = e || f[3];
	                b = b || [];
	                f = +d || 1;
	                do
	                    h = h || ".5",
	                    f /= h,
	                    k.style(c.elem, a, f + e);
	                while (h !== (h = c.cur() / d) && 1 !== h && --g)
	            }
	            b && (f = c.start = +f || +d || 0,
	            c.unit = e,
	            c.end = b[1] ? f + (b[1] + 1) * b[2] : +b[2]);
	            return c
	        }
	        ]
	    };
	    k.Animation = k.extend(K, {
	        tweener: function(a, b) {
	            k.isFunction(a) ? (b = a,
	            a = ["*"]) : a = a.split(" ");
	            for (var c, d = 0, e = a.length; d < e; d++)
	                c = a[d],
	                pa[c] = pa[c] || [],
	                pa[c].unshift(b)
	        },
	        prefilter: function(a, b) {
	            b ? Na.unshift(a) : Na.push(a)
	        }
	    });
	    k.speed = function(a, b, c) {
	        var d = a && "object" === typeof a ? k.extend({}, a) : {
	            complete: c || !c && b || k.isFunction(a) && a,
	            duration: a,
	            easing: c && b || b && !k.isFunction(b) && b
	        };
	        d.duration = k.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in k.fx.speeds ? k.fx.speeds[d.duration] : k.fx.speeds._default;
	        if (null == d.queue || !0 === d.queue)
	            d.queue = "fx";
	        d.old = d.complete;
	        d.complete = function() {
	            k.isFunction(d.old) && d.old.call(this);
	            d.queue && k.dequeue(this, d.queue)
	        }
	        ;
	        return d
	    }
	    ;
	    k.fn.extend({
	        fadeTo: function(a, b, c, d) {
	            return this.filter(za).css("opacity", 0).show().end().animate({
	                opacity: b
	            }, a, c, d)
	        },
	        animate: function(a, b, c, d) {
	            var e = k.isEmptyObject(a)
	              , f = k.speed(b, c, d);
	            b = function() {
	                var b = K(this, k.extend({}, a), f);
	                (e || N.get(this, "finish")) && b.stop(!0)
	            }
	            ;
	            b.finish = b;
	            return e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
	        },
	        stop: function(a, b, c) {
	            var d = function(a) {
	                var b = a.stop;
	                delete a.stop;
	                b(c)
	            };
	            "string" !== typeof a && (c = b,
	            b = a,
	            a = void 0);
	            b && !1 !== a && this.queue(a || "fx", []);
	            return this.each(function() {
	                var b = !0
	                  , e = null != a && a + "queueHooks"
	                  , f = k.timers
	                  , h = N.get(this);
	                if (e)
	                    h[e] && h[e].stop && d(h[e]);
	                else
	                    for (e in h)
	                        h[e] && h[e].stop && mb.test(e) && d(h[e]);
	                for (e = f.length; e--; )
	                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
	                    b = !1,
	                    f.splice(e, 1));
	                !b && c || k.dequeue(this, a)
	            })
	        },
	        finish: function(a) {
	            !1 !== a && (a = a || "fx");
	            return this.each(function() {
	                var b = N.get(this)
	                  , c = b[a + "queue"];
	                var d = b[a + "queueHooks"];
	                var e = k.timers
	                  , f = c ? c.length : 0;
	                b.finish = !0;
	                k.queue(this, a, []);
	                d && d.stop && d.stop.call(this, !0);
	                for (d = e.length; d--; )
	                    e[d].elem === this && e[d].queue === a && (e[d].anim.stop(!0),
	                    e.splice(d, 1));
	                for (d = 0; d < f; d++)
	                    c[d] && c[d].finish && c[d].finish.call(this);
	                delete b.finish
	            })
	        }
	    });
	    k.each(["toggle", "show", "hide"], function(a, b) {
	        var c = k.fn[b];
	        k.fn[b] = function(a, d, e) {
	            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(M(b, !0), a, d, e)
	        }
	    });
	    k.each({
	        slideDown: M("show"),
	        slideUp: M("hide"),
	        slideToggle: M("toggle"),
	        fadeIn: {
	            opacity: "show"
	        },
	        fadeOut: {
	            opacity: "hide"
	        },
	        fadeToggle: {
	            opacity: "toggle"
	        }
	    }, function(a, b) {
	        k.fn[a] = function(a, c, d) {
	            return this.animate(b, a, c, d)
	        }
	    });
	    k.timers = [];
	    k.fx.tick = function() {
	        var a = 0
	          , b = k.timers;
	        for (La = k.now(); a < b.length; a++) {
	            var c = b[a];
	            c() || b[a] !== c || b.splice(a--, 1)
	        }
	        b.length || k.fx.stop();
	        La = void 0
	    }
	    ;
	    k.fx.timer = function(a) {
	        k.timers.push(a);
	        a() ? k.fx.start() : k.timers.pop()
	    }
	    ;
	    k.fx.interval = 13;
	    k.fx.start = function() {
	        bb || (bb = setInterval(k.fx.tick, k.fx.interval))
	    }
	    ;
	    k.fx.stop = function() {
	        clearInterval(bb);
	        bb = null
	    }
	    ;
	    k.fx.speeds = {
	        slow: 600,
	        fast: 200,
	        _default: 400
	    };
	    k.fn.delay = function(a, b) {
	        a = k.fx ? k.fx.speeds[a] || a : a;
	        return this.queue(b || "fx", function(b, c) {
	            var d = setTimeout(b, a);
	            c.stop = function() {
	                clearTimeout(d)
	            }
	        })
	    }
	    ;
	    (function() {
	        var a = S.createElement("input")
	          , b = S.createElement("select")
	          , c = b.appendChild(S.createElement("option"));
	        a.type = "checkbox";
	        U.checkOn = "" !== a.value;
	        U.optSelected = c.selected;
	        b.disabled = !0;
	        U.optDisabled = !c.disabled;
	        a = S.createElement("input");
	        a.value = "t";
	        a.type = "radio";
	        U.radioValue = "t" === a.value
	    }
	    )();
	    var ha = k.expr.attrHandle;
	    k.fn.extend({
	        attr: function(a, b) {
	            return qa(this, k.attr, a, b, 1 < arguments.length)
	        },
	        removeAttr: function(a) {
	            return this.each(function() {
	                k.removeAttr(this, a)
	            })
	        }
	    });
	    k.extend({
	        attr: function(a, b, c) {
	            var d, e = a.nodeType;
	            if (a && 3 !== e && 8 !== e && 2 !== e) {
	                if ("undefined" === typeof a.getAttribute)
	                    return k.prop(a, b, c);
	                if (1 !== e || !k.isXMLDoc(a)) {
	                    b = b.toLowerCase();
	                    var f = k.attrHooks[b] || (k.expr.match.bool.test(b) ? tb : void 0)
	                }
	                if (void 0 !== c)
	                    if (null === c)
	                        k.removeAttr(a, b);
	                    else {
	                        if (f && "set"in f && void 0 !== (d = f.set(a, c, b)))
	                            return d;
	                        a.setAttribute(b, c + "");
	                        return c
	                    }
	                else {
	                    if (f && "get"in f && null !== (d = f.get(a, b)))
	                        return d;
	                    d = k.find.attr(a, b);
	                    return null == d ? void 0 : d
	                }
	            }
	        },
	        removeAttr: function(a, b) {
	            var c = 0
	              , d = b && b.match(oa);
	            if (d && 1 === a.nodeType)
	                for (; b = d[c++]; ) {
	                    var e = k.propFix[b] || b;
	                    k.expr.match.bool.test(b) && (a[e] = !1);
	                    a.removeAttribute(b)
	                }
	        },
	        attrHooks: {
	            type: {
	                set: function(a, b) {
	                    if (!U.radioValue && "radio" === b && k.nodeName(a, "input")) {
	                        var c = a.value;
	                        a.setAttribute("type", b);
	                        c && (a.value = c);
	                        return b
	                    }
	                }
	            }
	        }
	    });
	    var tb = {
	        set: function(a, b, c) {
	            !1 === b ? k.removeAttr(a, c) : a.setAttribute(c, c);
	            return c
	        }
	    };
	    k.each(k.expr.match.bool.source.match(/\w+/g), function(a, b) {
	        var c = ha[b] || k.find.attr;
	        ha[b] = function(a, b, d) {
	            if (!d) {
	                var e = ha[b];
	                ha[b] = f;
	                var f = null != c(a, b, d) ? b.toLowerCase() : null;
	                ha[b] = e
	            }
	            return f
	        }
	    });
	    var Sa = /^(?:input|select|textarea|button)$/i;
	    k.fn.extend({
	        prop: function(a, b) {
	            return qa(this, k.prop, a, b, 1 < arguments.length)
	        },
	        removeProp: function(a) {
	            return this.each(function() {
	                delete this[k.propFix[a] || a]
	            })
	        }
	    });
	    k.extend({
	        propFix: {
	            "for": "htmlFor",
	            "class": "className"
	        },
	        prop: function(a, b, c) {
	            var d, e = a.nodeType;
	            if (a && 3 !== e && 8 !== e && 2 !== e) {
	                if (1 !== e || !k.isXMLDoc(a)) {
	                    b = k.propFix[b] || b;
	                    var f = k.propHooks[b]
	                }
	                return void 0 !== c ? f && "set"in f && void 0 !== (d = f.set(a, c, b)) ? d : a[b] = c : f && "get"in f && null !== (d = f.get(a, b)) ? d : a[b]
	            }
	        },
	        propHooks: {
	            tabIndex: {
	                get: function(a) {
	                    return a.hasAttribute("tabindex") || Sa.test(a.nodeName) || a.href ? a.tabIndex : -1
	                }
	            }
	        }
	    });
	    U.optSelected || (k.propHooks.selected = {
	        get: function(a) {
	            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
	            return null
	        }
	    });
	    k.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
	        k.propFix[this.toLowerCase()] = this
	    });
	    var Ta = /[\t\r\n\f]/g;
	    k.fn.extend({
	        addClass: function(a) {
	            var b, c, d;
	            var e = "string" === typeof a && a;
	            var f = 0
	              , h = this.length;
	            if (k.isFunction(a))
	                return this.each(function(b) {
	                    k(this).addClass(a.call(this, b, this.className))
	                });
	            if (e)
	                for (e = (a || "").match(oa) || []; f < h; f++) {
	                    var g = this[f];
	                    if (b = 1 === g.nodeType && (g.className ? (" " + g.className + " ").replace(Ta, " ") : " ")) {
	                        for (d = 0; c = e[d++]; )
	                            0 > b.indexOf(" " + c + " ") && (b += c + " ");
	                        b = k.trim(b);
	                        g.className !== b && (g.className = b)
	                    }
	                }
	            return this
	        },
	        removeClass: function(a) {
	            var b, c, d;
	            var e = 0 === arguments.length || "string" === typeof a && a;
	            var f = 0
	              , h = this.length;
	            if (k.isFunction(a))
	                return this.each(function(b) {
	                    k(this).removeClass(a.call(this, b, this.className))
	                });
	            if (e)
	                for (e = (a || "").match(oa) || []; f < h; f++) {
	                    var g = this[f];
	                    if (b = 1 === g.nodeType && (g.className ? (" " + g.className + " ").replace(Ta, " ") : "")) {
	                        for (d = 0; c = e[d++]; )
	                            for (; 0 <= b.indexOf(" " + c + " "); )
	                                b = b.replace(" " + c + " ", " ");
	                        b = a ? k.trim(b) : "";
	                        g.className !== b && (g.className = b)
	                    }
	                }
	            return this
	        },
	        toggleClass: function(a, b) {
	            var c = typeof a;
	            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : k.isFunction(a) ? this.each(function(c) {
	                k(this).toggleClass(a.call(this, c, this.className, b), b)
	            }) : this.each(function() {
	                if ("string" === c)
	                    for (var b, d = 0, e = k(this), f = a.match(oa) || []; b = f[d++]; )
	                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	                else if ("undefined" === c || "boolean" === c)
	                    this.className && N.set(this, "__className__", this.className),
	                    this.className = this.className || !1 === a ? "" : N.get(this, "__className__") || ""
	            })
	        },
	        hasClass: function(a) {
	            a = " " + a + " ";
	            for (var b = 0, c = this.length; b < c; b++)
	                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ta, " ").indexOf(a))
	                    return !0;
	            return !1
	        }
	    });
	    var jb = /\r/g;
	    k.fn.extend({
	        val: function(a) {
	            var b, c, d = this[0];
	            if (arguments.length) {
	                var e = k.isFunction(a);
	                return this.each(function(c) {
	                    1 === this.nodeType && (c = e ? a.call(this, c, k(this).val()) : a,
	                    null == c ? c = "" : "number" === typeof c ? c += "" : k.isArray(c) && (c = k.map(c, function(a) {
	                        return null == a ? "" : a + ""
	                    })),
	                    b = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()],
	                    b && "set"in b && void 0 !== b.set(this, c, "value") || (this.value = c))
	                })
	            }
	            if (d) {
	                if ((b = k.valHooks[d.type] || k.valHooks[d.nodeName.toLowerCase()]) && "get"in b && void 0 !== (c = b.get(d, "value")))
	                    return c;
	                c = d.value;
	                return "string" === typeof c ? c.replace(jb, "") : null == c ? "" : c
	            }
	        }
	    });
	    k.extend({
	        valHooks: {
	            option: {
	                get: function(a) {
	                    var b = k.find.attr(a, "value");
	                    return null != b ? b : k.trim(k.text(a))
	                }
	            },
	            select: {
	                get: function(a) {
	                    for (var b, c = a.options, d = a.selectedIndex, e = (a = "select-one" === a.type || 0 > d) ? null : [], f = a ? d + 1 : c.length, h = 0 > d ? f : a ? d : 0; h < f; h++)
	                        if (b = c[h],
	                        !(!b.selected && h !== d || (U.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && k.nodeName(b.parentNode, "optgroup"))) {
	                            b = k(b).val();
	                            if (a)
	                                return b;
	                            e.push(b)
	                        }
	                    return e
	                },
	                set: function(a, b) {
	                    for (var c, d = a.options, e = k.makeArray(b), f = d.length; f--; )
	                        if (b = d[f],
	                        b.selected = 0 <= k.inArray(b.value, e))
	                            c = !0;
	                    c || (a.selectedIndex = -1);
	                    return e
	                }
	            }
	        }
	    });
	    k.each(["radio", "checkbox"], function() {
	        k.valHooks[this] = {
	            set: function(a, b) {
	                if (k.isArray(b))
	                    return a.checked = 0 <= k.inArray(k(a).val(), b)
	            }
	        };
	        U.checkOn || (k.valHooks[this].get = function(a) {
	            return null === a.getAttribute("value") ? "on" : a.value
	        }
	        )
	    });
	    k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
	        k.fn[b] = function(a, c) {
	            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
	        }
	    });
	    k.fn.extend({
	        hover: function(a, b) {
	            return this.mouseenter(a).mouseleave(b || a)
	        },
	        bind: function(a, b, c) {
	            return this.on(a, null, b, c)
	        },
	        unbind: function(a, b) {
	            return this.off(a, null, b)
	        },
	        delegate: function(a, b, c, d) {
	            return this.on(b, a, c, d)
	        },
	        undelegate: function(a, b, c) {
	            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
	        }
	    });
	    var ib = k.now()
	      , Va = /\?/;
	    k.parseJSON = function(a) {
	        return JSON.parse(a + "")
	    }
	    ;
	    k.parseXML = function(a) {
	        if (!a || "string" !== typeof a)
	            return null;
	        try {
	            var b = new DOMParser;
	            var c = b.parseFromString(a, "text/xml")
	        } catch (Qa) {
	            c = void 0
	        }
	        c && !c.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + a);
	        return c
	    }
	    ;
	    var Pa = /#.*$/
	      , ub = /([?&])_=[^&]*/
	      , Db = /^(.*?):[ \t]*([^\r\n]*)$/mg
	      , Eb = /^(?:GET|HEAD)$/
	      , Kb = /^\/\//
	      , Ab = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
	      , vb = {}
	      , Bb = {}
	      , xb = "*/".concat("*");
	    try {
	        var Ya = location.href
	    } catch (v) {
	        Ya = S.createElement("a"),
	        Ya.href = "",
	        Ya = Ya.href
	    }
	    var lb = Ab.exec(Ya.toLowerCase()) || [];
	    k.extend({
	        active: 0,
	        lastModified: {},
	        etag: {},
	        ajaxSettings: {
	            url: Ya,
	            type: "GET",
	            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lb[1]),
	            global: !0,
	            processData: !0,
	            async: !0,
	            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	            accepts: {
	                "*": xb,
	                text: "text/plain",
	                html: "text/html",
	                xml: "application/xml, text/xml",
	                json: "application/json, text/javascript"
	            },
	            contents: {
	                xml: /xml/,
	                html: /html/,
	                json: /json/
	            },
	            responseFields: {
	                xml: "responseXML",
	                text: "responseText",
	                json: "responseJSON"
	            },
	            converters: {
	                "* text": String,
	                "text html": !0,
	                "text json": k.parseJSON,
	                "text xml": k.parseXML
	            },
	            flatOptions: {
	                url: !0,
	                context: !0
	            }
	        },
	        ajaxSetup: function(a, b) {
	            return b ? Q(Q(a, k.ajaxSettings), b) : Q(k.ajaxSettings, a)
	        },
	        ajaxPrefilter: R(vb),
	        ajaxTransport: R(Bb),
	        ajax: function(a, b) {
	            function c(a, b, c, f) {
	                var l = b;
	                if (2 !== z) {
	                    z = 2;
	                    h && clearTimeout(h);
	                    d = void 0;
	                    e = f || "";
	                    u.readyState = 0 < a ? 4 : 0;
	                    f = 200 <= a && 300 > a || 304 === a;
	                    if (c) {
	                        var x = p;
	                        for (var r = u, y, w, A, B, I = x.contents, E = x.dataTypes; "*" === E[0]; )
	                            E.shift(),
	                            void 0 === y && (y = x.mimeType || r.getResponseHeader("Content-Type"));
	                        if (y)
	                            for (w in I)
	                                if (I[w] && I[w].test(y)) {
	                                    E.unshift(w);
	                                    break
	                                }
	                        if (E[0]in c)
	                            A = E[0];
	                        else {
	                            for (w in c) {
	                                if (!E[0] || x.converters[w + " " + E[0]]) {
	                                    A = w;
	                                    break
	                                }
	                                B || (B = w)
	                            }
	                            A = A || B
	                        }
	                        A ? (A !== E[0] && E.unshift(A),
	                        x = c[A]) : x = void 0
	                    }
	                    a: {
	                        c = p;
	                        y = x;
	                        w = u;
	                        A = f;
	                        var D;
	                        r = {};
	                        I = c.dataTypes.slice();
	                        if (I[1])
	                            for (F in c.converters)
	                                r[F.toLowerCase()] = c.converters[F];
	                        for (B = I.shift(); B; ) {
	                            c.responseFields[B] && (w[c.responseFields[B]] = y);
	                            !G && A && c.dataFilter && (y = c.dataFilter(y, c.dataType));
	                            var G = B;
	                            if (B = I.shift())
	                                if ("*" === B)
	                                    B = G;
	                                else if ("*" !== G && G !== B) {
	                                    var F = r[G + " " + B] || r["* " + B];
	                                    if (!F)
	                                        for (D in r)
	                                            if (x = D.split(" "),
	                                            x[1] === B && (F = r[G + " " + x[0]] || r["* " + x[0]])) {
	                                                !0 === F ? F = r[D] : !0 !== r[D] && (B = x[0],
	                                                I.unshift(x[1]));
	                                                break
	                                            }
	                                    if (!0 !== F)
	                                        if (F && c["throws"])
	                                            y = F(y);
	                                        else
	                                            try {
	                                                y = F(y)
	                                            } catch (Tb) {
	                                                x = {
	                                                    state: "parsererror",
	                                                    error: F ? Tb : "No conversion from " + G + " to " + B
	                                                };
	                                                break a
	                                            }
	                                }
	                        }
	                        x = {
	                            state: "success",
	                            data: y
	                        }
	                    }
	                    if (f)
	                        if (p.ifModified && ((l = u.getResponseHeader("Last-Modified")) && (k.lastModified[C] = l),
	                        (l = u.getResponseHeader("etag")) && (k.etag[C] = l)),
	                        204 === a || "HEAD" === p.type)
	                            l = "nocontent";
	                        else if (304 === a)
	                            l = "notmodified";
	                        else {
	                            l = x.state;
	                            var H = x.data;
	                            var W = x.error;
	                            f = !W
	                        }
	                    else if (W = l,
	                    a || !l)
	                        l = "error",
	                        0 > a && (a = 0);
	                    u.status = a;
	                    u.statusText = (b || l) + "";
	                    f ? q.resolveWith(m, [H, l, u]) : q.rejectWith(m, [u, l, W]);
	                    u.statusCode(v);
	                    v = void 0;
	                    g && n.trigger(f ? "ajaxSuccess" : "ajaxError", [u, p, f ? H : W]);
	                    t.fireWith(m, [u, l]);
	                    g && (n.trigger("ajaxComplete", [u, p]),
	                    --k.active || k.event.trigger("ajaxStop"))
	                }
	            }
	            "object" === typeof a && (b = a,
	            a = void 0);
	            b = b || {};
	            var d, e, f, h, g, l, p = k.ajaxSetup({}, b), m = p.context || p, n = p.context && (m.nodeType || m.jquery) ? k(m) : k.event, q = k.Deferred(), t = k.Callbacks("once memory"), v = p.statusCode || {}, x = {}, r = {}, z = 0, y = "canceled", u = {
	                readyState: 0,
	                getResponseHeader: function(a) {
	                    var b;
	                    if (2 === z) {
	                        if (!f)
	                            for (f = {}; b = Db.exec(e); )
	                                f[b[1].toLowerCase()] = b[2];
	                        b = f[a.toLowerCase()]
	                    }
	                    return null == b ? null : b
	                },
	                getAllResponseHeaders: function() {
	                    return 2 === z ? e : null
	                },
	                setRequestHeader: function(a, b) {
	                    var c = a.toLowerCase();
	                    z || (a = r[c] = r[c] || a,
	                    x[a] = b);
	                    return this
	                },
	                overrideMimeType: function(a) {
	                    z || (p.mimeType = a);
	                    return this
	                },
	                statusCode: function(a) {
	                    var b;
	                    if (a)
	                        if (2 > z)
	                            for (b in a)
	                                v[b] = [v[b], a[b]];
	                        else
	                            u.always(a[u.status]);
	                    return this
	                },
	                abort: function(a) {
	                    a = a || y;
	                    d && d.abort(a);
	                    c(0, a);
	                    return this
	                }
	            };
	            q.promise(u).complete = t.add;
	            u.success = u.done;
	            u.error = u.fail;
	            p.url = ((a || p.url || Ya) + "").replace(Pa, "").replace(Kb, lb[1] + "//");
	            p.type = b.method || b.type || p.method || p.type;
	            p.dataTypes = k.trim(p.dataType || "*").toLowerCase().match(oa) || [""];
	            null == p.crossDomain && (a = Ab.exec(p.url.toLowerCase()),
	            p.crossDomain = !(!a || a[1] === lb[1] && a[2] === lb[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (lb[3] || ("http:" === lb[1] ? "80" : "443"))));
	            p.data && p.processData && "string" !== typeof p.data && (p.data = k.param(p.data, p.traditional));
	            T(vb, p, b, u);
	            if (2 === z)
	                return u;
	            (g = p.global) && 0 === k.active++ && k.event.trigger("ajaxStart");
	            p.type = p.type.toUpperCase();
	            p.hasContent = !Eb.test(p.type);
	            var C = p.url;
	            p.hasContent || (p.data && (C = p.url += (Va.test(C) ? "&" : "?") + p.data,
	            delete p.data),
	            !1 === p.cache && (p.url = ub.test(C) ? C.replace(ub, "$1_=" + ib++) : C + (Va.test(C) ? "&" : "?") + "_=" + ib++));
	            p.ifModified && (k.lastModified[C] && u.setRequestHeader("If-Modified-Since", k.lastModified[C]),
	            k.etag[C] && u.setRequestHeader("If-None-Match", k.etag[C]));
	            (p.data && p.hasContent && !1 !== p.contentType || b.contentType) && u.setRequestHeader("Content-Type", p.contentType);
	            u.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + xb + "; q=0.01" : "") : p.accepts["*"]);
	            for (l in p.headers)
	                u.setRequestHeader(l, p.headers[l]);
	            if (p.beforeSend && (!1 === p.beforeSend.call(m, u, p) || 2 === z))
	                return u.abort();
	            y = "abort";
	            for (l in {
	                success: 1,
	                error: 1,
	                complete: 1
	            })
	                u[l](p[l]);
	            if (d = T(Bb, p, b, u)) {
	                u.readyState = 1;
	                g && n.trigger("ajaxSend", [u, p]);
	                p.async && 0 < p.timeout && (h = setTimeout(function() {
	                    u.abort("timeout")
	                }, p.timeout));
	                try {
	                    z = 1,
	                    d.send(x, c)
	                } catch (Jb) {
	                    if (2 > z)
	                        c(-1, Jb);
	                    else
	                        throw Jb;
	                }
	            } else
	                c(-1, "No Transport");
	            return u
	        },
	        getJSON: function(a, b, c) {
	            return k.get(a, b, c, "json")
	        },
	        getScript: function(a, b) {
	            return k.get(a, void 0, b, "script")
	        }
	    });
	    k.each(["get", "post"], function(a, b) {
	        k[b] = function(a, c, d, e) {
	            k.isFunction(c) && (e = e || d,
	            d = c,
	            c = void 0);
	            return k.ajax({
	                url: a,
	                type: b,
	                dataType: e,
	                data: c,
	                success: d
	            })
	        }
	    });
	    k.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
	        k.fn[b] = function(a) {
	            return this.on(b, a)
	        }
	    });
	    k._evalUrl = function(a) {
	        return k.ajax({
	            url: a,
	            type: "GET",
	            dataType: "script",
	            async: !1,
	            global: !1,
	            "throws": !0
	        })
	    }
	    ;
	    k.fn.extend({
	        wrapAll: function(a) {
	            if (k.isFunction(a))
	                return this.each(function(b) {
	                    k(this).wrapAll(a.call(this, b))
	                });
	            if (this[0]) {
	                var b = k(a, this[0].ownerDocument).eq(0).clone(!0);
	                this[0].parentNode && b.insertBefore(this[0]);
	                b.map(function() {
	                    for (var a = this; a.firstElementChild; )
	                        a = a.firstElementChild;
	                    return a
	                }).append(this)
	            }
	            return this
	        },
	        wrapInner: function(a) {
	            return k.isFunction(a) ? this.each(function(b) {
	                k(this).wrapInner(a.call(this, b))
	            }) : this.each(function() {
	                var b = k(this)
	                  , c = b.contents();
	                c.length ? c.wrapAll(a) : b.append(a)
	            })
	        },
	        wrap: function(a) {
	            var b = k.isFunction(a);
	            return this.each(function(c) {
	                k(this).wrapAll(b ? a.call(this, c) : a)
	            })
	        },
	        unwrap: function() {
	            return this.parent().each(function() {
	                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
	            }).end()
	        }
	    });
	    k.expr.filters.hidden = function(a) {
	        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
	    }
	    ;
	    k.expr.filters.visible = function(a) {
	        return !k.expr.filters.hidden(a)
	    }
	    ;
	    var Lb = /%20/g
	      , Mb = /\[\]$/
	      , Hb = /\r?\n/g
	      , Nb = /^(?:submit|button|image|reset|file)$/i
	      , Ob = /^(?:input|select|textarea|keygen)/i;
	    k.param = function(a, b) {
	        var c, d = [], e = function(a, b) {
	            b = k.isFunction(b) ? b() : null == b ? "" : b;
	            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
	        };
	        void 0 === b && (b = k.ajaxSettings && k.ajaxSettings.traditional);
	        if (k.isArray(a) || a.jquery && !k.isPlainObject(a))
	            k.each(a, function() {
	                e(this.name, this.value)
	            });
	        else
	            for (c in a)
	                O(c, a[c], b, e);
	        return d.join("&").replace(Lb, "+")
	    }
	    ;
	    k.fn.extend({
	        serialize: function() {
	            return k.param(this.serializeArray())
	        },
	        serializeArray: function() {
	            return this.map(function() {
	                var a = k.prop(this, "elements");
	                return a ? k.makeArray(a) : this
	            }).filter(function() {
	                var a = this.type;
	                return this.name && !k(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(a) && (this.checked || !Fa.test(a))
	            }).map(function(a, b) {
	                a = k(this).val();
	                return null == a ? null : k.isArray(a) ? k.map(a, function(a) {
	                    return {
	                        name: b.name,
	                        value: a.replace(Hb, "\r\n")
	                    }
	                }) : {
	                    name: b.name,
	                    value: a.replace(Hb, "\r\n")
	                }
	            }).get()
	        }
	    });
	    k.ajaxSettings.xhr = function() {
	        try {
	            return new XMLHttpRequest
	        } catch (v) {}
	    }
	    ;
	    var Pb = 0
	      , yb = {}
	      , Qb = {
	        0: 200,
	        1223: 204
	    }
	      , rb = k.ajaxSettings.xhr();
	    if (a.ActiveXObject)
	        k(a).on("unload", function() {
	            for (var a in yb)
	                yb[a]()
	        });
	    U.cors = !!rb && "withCredentials"in rb;
	    U.ajax = rb = !!rb;
	    k.ajaxTransport(function(a) {
	        var b;
	        if (U.cors || rb && !a.crossDomain)
	            return {
	                send: function(c, d) {
	                    var e, f = a.xhr(), h = ++Pb;
	                    f.open(a.type, a.url, a.async, a.username, a.password);
	                    if (a.xhrFields)
	                        for (e in a.xhrFields)
	                            f[e] = a.xhrFields[e];
	                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
	                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
	                    for (e in c)
	                        f.setRequestHeader(e, c[e]);
	                    b = function(a) {
	                        return function() {
	                            b && (delete yb[h],
	                            b = f.onload = f.onerror = null,
	                            "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Qb[f.status] || f.status, f.statusText, "string" === typeof f.responseText ? {
	                                text: f.responseText
	                            } : void 0, f.getAllResponseHeaders()))
	                        }
	                    }
	                    ;
	                    f.onload = b();
	                    f.onerror = b("error");
	                    b = yb[h] = b("abort");
	                    try {
	                        f.send(a.hasContent && a.data || null)
	                    } catch (Rb) {
	                        if (b)
	                            throw Rb;
	                    }
	                },
	                abort: function() {
	                    b && b()
	                }
	            }
	    });
	    k.ajaxSetup({
	        accepts: {
	            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	        },
	        contents: {
	            script: /(?:java|ecma)script/
	        },
	        converters: {
	            "text script": function(a) {
	                k.globalEval(a);
	                return a
	            }
	        }
	    });
	    k.ajaxPrefilter("script", function(a) {
	        void 0 === a.cache && (a.cache = !1);
	        a.crossDomain && (a.type = "GET")
	    });
	    k.ajaxTransport("script", function(a) {
	        if (a.crossDomain) {
	            var b, c;
	            return {
	                send: function(d, e) {
	                    b = k("<script>").prop({
	                        async: !0,
	                        charset: a.scriptCharset,
	                        src: a.url
	                    }).on("load error", c = function(a) {
	                        b.remove();
	                        c = null;
	                        a && e("error" === a.type ? 404 : 200, a.type)
	                    }
	                    );
	                    S.head.appendChild(b[0])
	                },
	                abort: function() {
	                    c && c()
	                }
	            }
	        }
	    });
	    var Ib = []
	      , Cb = /(=)\?(?=&|$)|\?\?/;
	    k.ajaxSetup({
	        jsonp: "callback",
	        jsonpCallback: function() {
	            var a = Ib.pop() || k.expando + "_" + ib++;
	            this[a] = !0;
	            return a
	        }
	    });
	    k.ajaxPrefilter("json jsonp", function(b, c, d) {
	        var e, f = !1 !== b.jsonp && (Cb.test(b.url) ? "url" : "string" === typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Cb.test(b.data) && "data");
	        if (f || "jsonp" === b.dataTypes[0]) {
	            var h = b.jsonpCallback = k.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;
	            f ? b[f] = b[f].replace(Cb, "$1" + h) : !1 !== b.jsonp && (b.url += (Va.test(b.url) ? "&" : "?") + b.jsonp + "=" + h);
	            b.converters["script json"] = function() {
	                e || k.error(h + " was not called");
	                return e[0]
	            }
	            ;
	            b.dataTypes[0] = "json";
	            var g = a[h];
	            a[h] = function() {
	                e = arguments
	            }
	            ;
	            d.always(function() {
	                a[h] = g;
	                b[h] && (b.jsonpCallback = c.jsonpCallback,
	                Ib.push(h));
	                e && k.isFunction(g) && g(e[0]);
	                e = g = void 0
	            });
	            return "script"
	        }
	    });
	    k.parseHTML = function(a, b, c) {
	        if (!a || "string" !== typeof a)
	            return null;
	        "boolean" === typeof b && (c = b,
	        b = !1);
	        b = b || S;
	        var d = la.exec(a);
	        c = !c && [];
	        if (d)
	            return [b.createElement(d[1])];
	        d = k.buildFragment([a], b, c);
	        c && c.length && k(c).remove();
	        return k.merge([], d.childNodes)
	    }
	    ;
	    var Fb = k.fn.load;
	    k.fn.load = function(a, b, c) {
	        if ("string" !== typeof a && Fb)
	            return Fb.apply(this, arguments);
	        var d, e, f = this, h = a.indexOf(" ");
	        if (0 <= h) {
	            var g = k.trim(a.slice(h));
	            a = a.slice(0, h)
	        }
	        k.isFunction(b) ? (c = b,
	        b = void 0) : b && "object" === typeof b && (d = "POST");
	        0 < f.length && k.ajax({
	            url: a,
	            type: d,
	            dataType: "html",
	            data: b
	        }).done(function(a) {
	            e = arguments;
	            f.html(g ? k("<div>").append(k.parseHTML(a)).find(g) : a)
	        }).complete(c && function(a, b) {
	            f.each(c, e || [a.responseText, b, a])
	        }
	        );
	        return this
	    }
	    ;
	    k.expr.filters.animated = function(a) {
	        return k.grep(k.timers, function(b) {
	            return a === b.elem
	        }).length
	    }
	    ;
	    var Gb = a.document.documentElement;
	    k.offset = {
	        setOffset: function(a, b, c) {
	            var d = k.css(a, "position")
	              , e = k(a)
	              , f = {};
	            "static" === d && (a.style.position = "relative");
	            var h = e.offset();
	            var g = k.css(a, "top");
	            var p = k.css(a, "left");
	            ("absolute" === d || "fixed" === d) && -1 < (g + p).indexOf("auto") ? (p = e.position(),
	            g = p.top,
	            p = p.left) : (g = parseFloat(g) || 0,
	            p = parseFloat(p) || 0);
	            k.isFunction(b) && (b = b.call(a, c, h));
	            null != b.top && (f.top = b.top - h.top + g);
	            null != b.left && (f.left = b.left - h.left + p);
	            "using"in b ? b.using.call(a, f) : e.css(f)
	        }
	    };
	    k.fn.extend({
	        offset: function(a) {
	            if (arguments.length)
	                return void 0 === a ? this : this.each(function(b) {
	                    k.offset.setOffset(this, a, b)
	                });
	            var b = this[0];
	            var c = {
	                top: 0,
	                left: 0
	            }
	              , d = b && b.ownerDocument;
	            if (d) {
	                var e = d.documentElement;
	                if (!k.contains(e, b))
	                    return c;
	                "undefined" !== typeof b.getBoundingClientRect && (c = b.getBoundingClientRect());
	                b = V(d);
	                return {
	                    top: c.top + b.pageYOffset - e.clientTop,
	                    left: c.left + b.pageXOffset - e.clientLeft
	                }
	            }
	        },
	        position: function() {
	            if (this[0]) {
	                var a = this[0]
	                  , b = {
	                    top: 0,
	                    left: 0
	                };
	                if ("fixed" === k.css(a, "position"))
	                    var c = a.getBoundingClientRect();
	                else {
	                    var d = this.offsetParent();
	                    c = this.offset();
	                    k.nodeName(d[0], "html") || (b = d.offset());
	                    b.top += k.css(d[0], "borderTopWidth", !0);
	                    b.left += k.css(d[0], "borderLeftWidth", !0)
	                }
	                return {
	                    top: c.top - b.top - k.css(a, "marginTop", !0),
	                    left: c.left - b.left - k.css(a, "marginLeft", !0)
	                }
	            }
	        },
	        offsetParent: function() {
	            return this.map(function() {
	                for (var a = this.offsetParent || Gb; a && !k.nodeName(a, "html") && "static" === k.css(a, "position"); )
	                    a = a.offsetParent;
	                return a || Gb
	            })
	        }
	    });
	    k.each({
	        scrollLeft: "pageXOffset",
	        scrollTop: "pageYOffset"
	    }, function(b, c) {
	        var d = "pageYOffset" === c;
	        k.fn[b] = function(e) {
	            return qa(this, function(b, e, f) {
	                var h = V(b);
	                if (void 0 === f)
	                    return h ? h[c] : b[e];
	                h ? h.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f
	            }, b, e, arguments.length, null)
	        }
	    });
	    k.each(["top", "left"], function(a, b) {
	        k.cssHooks[b] = y(U.pixelPosition, function(a, c) {
	            if (c)
	                return c = C(a, b),
	                ya.test(c) ? k(a).position()[b] + "px" : c
	        })
	    });
	    k.each({
	        Height: "height",
	        Width: "width"
	    }, function(a, b) {
	        k.each({
	            padding: "inner" + a,
	            content: b,
	            "": "outer" + a
	        }, function(c, d) {
	            k.fn[d] = function(d, e) {
	                var f = arguments.length && (c || "boolean" !== typeof d)
	                  , h = c || (!0 === d || !0 === e ? "margin" : "border");
	                return qa(this, function(b, c, d) {
	                    return k.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement,
	                    Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? k.css(b, c, h) : k.style(b, c, d, h)
	                }, b, f ? d : void 0, f, null)
	            }
	        })
	    });
	    k.fn.size = function() {
	        return this.length
	    }
	    ;
	    return a.fiQuery = k
	});
	        (function(a) {
            a.storage = {};
            a.storage.init = function() {
                for (var b in localStorage)
                    0 === b.indexOf("fi_") && a.storage.get(b.replace("fi_", ""), !0)
            }
            ;
            a.storage.set = function(b, c, d) {
                d = void 0 === d ? null : d;
                var e = {};
                null === c || Number.isInteger(d) && 0 > d ? a.storage.remove(b) : (Number.isInteger(d) ? e.ttl = d ? Date.now() + 6E4 * d : null : e.ttl = d instanceof Date ? d : null,
                localStorage.setItem("fi_" + b, JSON.stringify({
                    data: c,
                    meta: e
                })))
            }
            ;
            a.storage.get = function(b, c) {
                c = void 0 === c ? !1 : c;
                try {
                    var d = JSON.parse(localStorage.getItem("fi_" + b));
                    return c && (d.meta.ttl && d.meta.ttl < Date.now() || !d.meta.ttl) ? (a.storage.remove(b),
                    null) : d.data
                } catch (e) {
                    return null
                }
            }
            ;
            a.storage.remove = function(a) {
                localStorage.removeItem("fi_" + a)
            }
            ;
            a.storage.exists = function(a) {
                return !!localStorage.getItem("fi_" + a)
            }
        }
        )(fiQuery);
            (function(a, b, c) {
            function d(a) {
                return a
            }
            function e(a) {
                a = decodeURIComponent(a.replace(g, " "));
                0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                return a
            }
            function f(a) {
                return n.json ? JSON.parse(a) : a
            }
            var g = /\+/g
              , n = a.cookie = function(g, q, u) {
                if (q !== c) {
                    u = a.extend({}, n.defaults, u);
                    null === q && (u.expires = -1);
                    if ("number" === typeof u.expires) {
                        var l = u.expires
                          , B = u.expires = new Date;
                        B.setDate(B.getDate() + l)
                    }
                    q = n.json ? JSON.stringify(q) : String(q);
                    return b.cookie = [encodeURIComponent(g), "=", n.raw ? q : encodeURIComponent(q), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                q = n.raw ? d : e;
                u = b.cookie.split("; ");
                l = g ? null : {};
                B = 0;
                for (var D = u.length; B < D; B++) {
                    var w = u[B].split("=")
                      , h = q(w.shift());
                    w = q(w.join("="));
                    if (g && g === h) {
                        l = f(w);
                        break
                    }
                    g || (l[h] = f(w))
                }
                return l
            }
            ;
            n.defaults = {};
            a.removeCookie = function(b, c) {
                return null !== a.cookie(b) ? (a.cookie(b, null, c),
                !0) : !1
            }
        }
        )(fiQuery, document);
        (function(a) {
            a.storage = {};
            a.storage.init = function() {
                for (var b in localStorage)
                    0 === b.indexOf("fi_") && a.storage.get(b.replace("fi_", ""), !0)
            }
            ;
            a.storage.set = function(b, c, d) {
                d = void 0 === d ? null : d;
                var e = {};
                null === c || Number.isInteger(d) && 0 > d ? a.storage.remove(b) : (Number.isInteger(d) ? e.ttl = d ? Date.now() + 6E4 * d : null : e.ttl = d instanceof Date ? d : null,
                localStorage.setItem("fi_" + b, JSON.stringify({
                    data: c,
                    meta: e
                })))
            }
            ;
            a.storage.get = function(b, c) {
                c = void 0 === c ? !1 : c;
                try {
                    var d = JSON.parse(localStorage.getItem("fi_" + b));
                    return c && (d.meta.ttl && d.meta.ttl < Date.now() || !d.meta.ttl) ? (a.storage.remove(b),
                    null) : d.data
                } catch (e) {
                    return null
                }
            }
            ;
            a.storage.remove = function(a) {
                localStorage.removeItem("fi_" + a)
            }
            ;
            a.storage.exists = function(a) {
                return !!localStorage.getItem("fi_" + a)
            }
        }
        )(fiQuery);
        (function(a, b, c) {
            function d() {
                g = b.setTimeout(function() {
                    e.each(function() {
                        var c = a(this)
                          , d = c.width()
                          , e = c.height()
                          , f = a.data(this, "resize-special-event");
                        (e !== f.h || d !== f.w && this === b) && c.trigger("resize", [f.w = d, f.h = e])
                    });
                    d()
                }, f.delay)
            }
            "$:nomunge";
            var e = a([]), f = a.resize = a.extend(a.resize, {}), g;
            f.delay = 250;
            f.throttleWindow = !0;
            a.event.special.resize = {
                setup: function() {
                    if (!f.throttleWindow && this.setTimeout)
                        return !1;
                    var b = a(this);
                    e = e.add(b);
                    a.data(this, "resize-special-event", {
                        w: b.width(),
                        h: b.height()
                    });
                    1 === e.length && d()
                },
                teardown: function() {
                    if (!f.throttleWindow && this.setTimeout)
                        return !1;
                    var b = a(this);
                    e = e.not(b);
                    b.removeData("resize-special-event");
                    e.length || clearTimeout(g)
                },
                add: function(b) {
                    function d(b, d, f) {
                        var g = a(this)
                          , l = a.data(this, "resize-special-event");
                        l.w = d !== c ? d : g.width();
                        l.h = f !== c ? f : g.height();
                        e.apply(this, arguments)
                    }
                    if (!f.throttleWindow && this.setTimeout)
                        return !1;
                    if (a.isFunction(b)) {
                        var e = b;
                        return d
                    }
                    e = b.handler;
                    b.handler = d
                }
            }
        }
        )(fiQuery, this);
        (function() {
            function a(a) {
                var b = !1;
                return function() {
                    if (b)
                        throw Error("Callback was already called.");
                    b = !0;
                    a.apply(c, arguments)
                }
            }
            var b = {};
            var c = this;
            if (null != c)
                var d = c.async;
            b.noConflict = function() {
                c.async = d;
                return b
            }
            ;
            var e = function(a, b) {
                if (a.forEach)
                    return a.forEach(b);
                for (var c = 0; c < a.length; c += 1)
                    b(a[c], c, a)
            }
              , f = function(a, b) {
                if (a.map)
                    return a.map(b);
                var c = [];
                e(a, function(a, d, e) {
                    c.push(b(a, d, e))
                });
                return c
            }
              , g = function(a, b, c) {
                if (a.reduce)
                    return a.reduce(b, c);
                e(a, function(a, d, e) {
                    c = b(c, a, d, e)
                });
                return c
            }
              , n = function(a) {
                if (Object.keys)
                    return Object.keys(a);
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push(c);
                return b
            };
            "undefined" !== typeof process && process.nextTick ? (b.nextTick = process.nextTick,
            b.setImmediate = "undefined" !== typeof setImmediate ? function(a) {
                setImmediate(a)
            }
            : b.nextTick) : (b.nextTick = "function" === typeof setImmediate ? function(a) {
                setImmediate(a)
            }
            : function(a) {
                setTimeout(a, 0)
            }
            ,
            b.setImmediate = b.nextTick);
            b.each = function(b, c, d) {
                d = d || function() {}
                ;
                if (!b.length)
                    return d();
                var f = 0;
                e(b, function(e) {
                    c(e, a(function(a) {
                        a ? (d(a),
                        d = function() {}
                        ) : (f += 1,
                        f >= b.length && d(null))
                    }))
                })
            }
            ;
            b.forEach = b.each;
            b.eachSeries = function(a, b, c) {
                c = c || function() {}
                ;
                if (!a.length)
                    return c();
                var d = 0
                  , e = function() {
                    b(a[d], function(b) {
                        b ? (c(b),
                        c = function() {}
                        ) : (d += 1,
                        d >= a.length ? c(null) : e())
                    })
                };
                e()
            }
            ;
            b.forEachSeries = b.eachSeries;
            b.eachLimit = function(a, b, c, d) {
                l(b).apply(null, [a, c, d])
            }
            ;
            b.forEachLimit = b.eachLimit;
            var l = function(a) {
                return function(b, c, d) {
                    d = d || function() {}
                    ;
                    if (!b.length || 0 >= a)
                        return d();
                    var e = 0
                      , f = 0
                      , h = 0;
                    (function m() {
                        if (e >= b.length)
                            return d();
                        for (; h < a && f < b.length; )
                            f += 1,
                            h += 1,
                            c(b[f - 1], function(a) {
                                a ? (d(a),
                                d = function() {}
                                ) : (e += 1,
                                --h,
                                e >= b.length ? d() : m())
                            })
                    }
                    )()
                }
            }
              , q = function(a) {
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    return a.apply(null, [b.each].concat(c))
                }
            }
              , u = function(a, b) {
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    return b.apply(null, [l(a)].concat(c))
                }
            }
              , r = function(a) {
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    return a.apply(null, [b.eachSeries].concat(c))
                }
            }
              , B = function(a, b, c, d) {
                var e = [];
                b = f(b, function(a, b) {
                    return {
                        index: b,
                        value: a
                    }
                });
                a(b, function(a, b) {
                    c(a.value, function(c, d) {
                        e[a.index] = d;
                        b(c)
                    })
                }, function(a) {
                    d(a, e)
                })
            };
            b.map = q(B);
            b.mapSeries = r(B);
            b.mapLimit = function(a, b, c, d) {
                return u(b, B)(a, c, d)
            }
            ;
            b.reduce = function(a, c, d, e) {
                b.eachSeries(a, function(a, b) {
                    d(c, a, function(a, d) {
                        c = d;
                        b(a)
                    })
                }, function(a) {
                    e(a, c)
                })
            }
            ;
            b.inject = b.reduce;
            b.foldl = b.reduce;
            b.reduceRight = function(a, c, d, e) {
                a = f(a, function(a) {
                    return a
                }).reverse();
                b.reduce(a, c, d, e)
            }
            ;
            b.foldr = b.reduceRight;
            var D = function(a, b, c, d) {
                var e = [];
                b = f(b, function(a, b) {
                    return {
                        index: b,
                        value: a
                    }
                });
                a(b, function(a, b) {
                    c(a.value, function(c) {
                        c && e.push(a);
                        b()
                    })
                }, function(a) {
                    d(f(e.sort(function(a, b) {
                        return a.index - b.index
                    }), function(a) {
                        return a.value
                    }))
                })
            };
            b.filter = q(D);
            b.filterSeries = r(D);
            b.select = b.filter;
            b.selectSeries = b.filterSeries;
            D = function(a, b, c, d) {
                var e = [];
                b = f(b, function(a, b) {
                    return {
                        index: b,
                        value: a
                    }
                });
                a(b, function(a, b) {
                    c(a.value, function(c) {
                        c || e.push(a);
                        b()
                    })
                }, function(a) {
                    d(f(e.sort(function(a, b) {
                        return a.index - b.index
                    }), function(a) {
                        return a.value
                    }))
                })
            }
            ;
            b.reject = q(D);
            b.rejectSeries = r(D);
            D = function(a, b, c, d) {
                a(b, function(a, b) {
                    c(a, function(c) {
                        c ? (d(a),
                        d = function() {}
                        ) : b()
                    })
                }, function(a) {
                    d()
                })
            }
            ;
            b.detect = q(D);
            b.detectSeries = r(D);
            b.some = function(a, c, d) {
                b.each(a, function(a, b) {
                    c(a, function(a) {
                        a && (d(!0),
                        d = function() {}
                        );
                        b()
                    })
                }, function(a) {
                    d(!1)
                })
            }
            ;
            b.any = b.some;
            b.every = function(a, c, d) {
                b.each(a, function(a, b) {
                    c(a, function(a) {
                        a || (d(!1),
                        d = function() {}
                        );
                        b()
                    })
                }, function(a) {
                    d(!0)
                })
            }
            ;
            b.all = b.every;
            b.sortBy = function(a, c, d) {
                b.map(a, function(a, b) {
                    c(a, function(c, d) {
                        c ? b(c) : b(null, {
                            value: a,
                            criteria: d
                        })
                    })
                }, function(a, b) {
                    if (a)
                        return d(a);
                    d(null, f(b.sort(function(a, b) {
                        a = a.criteria;
                        b = b.criteria;
                        return a < b ? -1 : a > b ? 1 : 0
                    }), function(a) {
                        return a.value
                    }))
                })
            }
            ;
            b.auto = function(a, c) {
                c = c || function() {}
                ;
                var d = n(a);
                if (!d.length)
                    return c(null);
                var f = {}
                  , h = []
                  , l = function() {
                    e(h.slice(0), function(a) {
                        a()
                    })
                };
                h.unshift(function() {
                    n(f).length === d.length && (c(null, f),
                    c = function() {}
                    )
                });
                e(d, function(d) {
                    var p = a[d]instanceof Function ? [a[d]] : a[d]
                      , m = function(a) {
                        var h = Array.prototype.slice.call(arguments, 1);
                        1 >= h.length && (h = h[0]);
                        if (a) {
                            var g = {};
                            e(n(f), function(a) {
                                g[a] = f[a]
                            });
                            g[d] = h;
                            c(a, g);
                            c = function() {}
                        } else
                            f[d] = h,
                            b.setImmediate(l)
                    }
                      , q = p.slice(0, Math.abs(p.length - 1)) || []
                      , t = function() {
                        return g(q, function(a, b) {
                            return a && f.hasOwnProperty(b)
                        }, !0) && !f.hasOwnProperty(d)
                    };
                    if (t())
                        p[p.length - 1](m, f);
                    else {
                        var r = function() {
                            if (t()) {
                                a: for (var a = r, b = 0; b < h.length; b += 1)
                                    if (h[b] === a) {
                                        h.splice(b, 1);
                                        break a
                                    }
                                p[p.length - 1](m, f)
                            }
                        };
                        h.unshift(r)
                    }
                })
            }
            ;
            b.waterfall = function(a, c) {
                c = c || function() {}
                ;
                if (a.constructor !== Array)
                    return c(Error("First argument to waterfall must be an array of functions"));
                if (!a.length)
                    return c();
                var d = function(a) {
                    return function(e) {
                        if (e)
                            c.apply(null, arguments),
                            c = function() {}
                            ;
                        else {
                            var f = Array.prototype.slice.call(arguments, 1)
                              , h = a.next();
                            h ? f.push(d(h)) : f.push(c);
                            b.setImmediate(function() {
                                a.apply(null, f)
                            })
                        }
                    }
                };
                d(b.iterator(a))()
            }
            ;
            var w = function(a, b, c) {
                c = c || function() {}
                ;
                if (b.constructor === Array)
                    a.map(b, function(a, b) {
                        a && a(function(a) {
                            var c = Array.prototype.slice.call(arguments, 1);
                            1 >= c.length && (c = c[0]);
                            b.call(null, a, c)
                        })
                    }, c);
                else {
                    var d = {};
                    a.each(n(b), function(a, c) {
                        b[a](function(b) {
                            var e = Array.prototype.slice.call(arguments, 1);
                            1 >= e.length && (e = e[0]);
                            d[a] = e;
                            c(b)
                        })
                    }, function(a) {
                        c(a, d)
                    })
                }
            };
            b.parallel = function(a, c) {
                w({
                    map: b.map,
                    each: b.each
                }, a, c)
            }
            ;
            b.parallelLimit = function(a, b, c) {
                w({
                    map: u(b, B),
                    each: l(b)
                }, a, c)
            }
            ;
            b.series = function(a, c) {
                c = c || function() {}
                ;
                if (a.constructor === Array)
                    b.mapSeries(a, function(a, b) {
                        a && a(function(a) {
                            var c = Array.prototype.slice.call(arguments, 1);
                            1 >= c.length && (c = c[0]);
                            b.call(null, a, c)
                        })
                    }, c);
                else {
                    var d = {};
                    b.eachSeries(n(a), function(b, c) {
                        a[b](function(a) {
                            var e = Array.prototype.slice.call(arguments, 1);
                            1 >= e.length && (e = e[0]);
                            d[b] = e;
                            c(a)
                        })
                    }, function(a) {
                        c(a, d)
                    })
                }
            }
            ;
            b.iterator = function(a) {
                var b = function(c) {
                    var d = function() {
                        a.length && a[c].apply(null, arguments);
                        return d.next()
                    };
                    d.next = function() {
                        return c < a.length - 1 ? b(c + 1) : null
                    }
                    ;
                    return d
                };
                return b(0)
            }
            ;
            b.apply = function(a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return a.apply(null, b.concat(Array.prototype.slice.call(arguments)))
                }
            }
            ;
            D = function(a, b, c, d) {
                var e = [];
                a(b, function(a, b) {
                    c(a, function(a, c) {
                        e = e.concat(c || []);
                        b(a)
                    })
                }, function(a) {
                    d(a, e)
                })
            }
            ;
            b.concat = q(D);
            b.concatSeries = r(D);
            b.whilst = function(a, c, d) {
                a() ? c(function(e) {
                    if (e)
                        return d(e);
                    b.whilst(a, c, d)
                }) : d()
            }
            ;
            b.doWhilst = function(a, c, d) {
                a(function(e) {
                    if (e)
                        return d(e);
                    c() ? b.doWhilst(a, c, d) : d()
                })
            }
            ;
            b.until = function(a, c, d) {
                a() ? d() : c(function(e) {
                    if (e)
                        return d(e);
                    b.until(a, c, d)
                })
            }
            ;
            b.doUntil = function(a, c, d) {
                a(function(e) {
                    if (e)
                        return d(e);
                    c() ? d() : b.doUntil(a, c, d)
                })
            }
            ;
            b.queue = function(c, d) {
                function f(a, c, f, g) {
                    c.constructor !== Array && (c = [c]);
                    e(c, function(c) {
                        c = {
                            data: c,
                            callback: "function" === typeof g ? g : null
                        };
                        f ? a.tasks.unshift(c) : a.tasks.push(c);
                        a.saturated && a.tasks.length === d && a.saturated();
                        b.setImmediate(a.process)
                    })
                }
                void 0 === d && (d = 1);
                var g = 0
                  , h = {
                    tasks: [],
                    concurrency: d,
                    saturated: null,
                    empty: null,
                    drain: null,
                    push: function(a, b) {
                        f(h, a, !1, b)
                    },
                    unshift: function(a, b) {
                        f(h, a, !0, b)
                    },
                    process: function() {
                        if (g < h.concurrency && h.tasks.length) {
                            var b = h.tasks.shift();
                            h.empty && 0 === h.tasks.length && h.empty();
                            g += 1;
                            var d = a(function() {
                                --g;
                                b.callback && b.callback.apply(b, arguments);
                                h.drain && 0 === h.tasks.length + g && h.drain();
                                h.process()
                            });
                            c(b.data, d)
                        }
                    },
                    length: function() {
                        return h.tasks.length
                    },
                    running: function() {
                        return g
                    }
                };
                return h
            }
            ;
            b.cargo = function(a, c) {
                var d = !1
                  , g = []
                  , h = {
                    tasks: g,
                    payload: c,
                    saturated: null,
                    empty: null,
                    drain: null,
                    push: function(a, d) {
                        a.constructor !== Array && (a = [a]);
                        e(a, function(a) {
                            g.push({
                                data: a,
                                callback: "function" === typeof d ? d : null
                            });
                            h.saturated && g.length === c && h.saturated()
                        });
                        b.setImmediate(h.process)
                    },
                    process: function y() {
                        if (!d)
                            if (0 === g.length)
                                h.drain && h.drain();
                            else {
                                var b = "number" === typeof c ? g.splice(0, c) : g.splice(0)
                                  , l = f(b, function(a) {
                                    return a.data
                                });
                                h.empty && h.empty();
                                d = !0;
                                a(l, function() {
                                    d = !1;
                                    var a = arguments;
                                    e(b, function(b) {
                                        b.callback && b.callback.apply(null, a)
                                    });
                                    y()
                                })
                            }
                    },
                    length: function() {
                        return g.length
                    },
                    running: function() {
                        return d
                    }
                };
                return h
            }
            ;
            D = function(a) {
                return function(b) {
                    var c = Array.prototype.slice.call(arguments, 1);
                    b.apply(null, c.concat([function(b) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        "undefined" !== typeof console && (b ? console.error && console.error(b) : console[a] && e(c, function(b) {
                            console[a](b)
                        }))
                    }
                    ]))
                }
            }
            ;
            b.log = D("log");
            b.dir = D("dir");
            b.memoize = function(a, b) {
                var c = {}
                  , d = {};
                b = b || function(a) {
                    return a
                }
                ;
                var e = function() {
                    var e = Array.prototype.slice.call(arguments)
                      , f = e.pop()
                      , g = b.apply(null, e);
                    g in c ? f.apply(null, c[g]) : g in d ? d[g].push(f) : (d[g] = [f],
                    a.apply(null, e.concat([function() {
                        c[g] = arguments;
                        var a = d[g];
                        delete d[g];
                        for (var b = 0, e = a.length; b < e; b++)
                            a[b].apply(null, arguments)
                    }
                    ])))
                };
                e.memo = c;
                e.unmemoized = a;
                return e
            }
            ;
            b.unmemoize = function(a) {
                return function() {
                    return (a.unmemoized || a).apply(null, arguments)
                }
            }
            ;
            b.times = function(a, c, d) {
                for (var e = [], f = 0; f < a; f++)
                    e.push(f);
                return b.map(e, c, d)
            }
            ;
            b.timesSeries = function(a, c, d) {
                for (var e = [], f = 0; f < a; f++)
                    e.push(f);
                return b.mapSeries(e, c, d)
            }
            ;
            b.compose = function() {
                var a = Array.prototype.reverse.call(arguments);
                return function() {
                    var c = this
                      , d = Array.prototype.slice.call(arguments)
                      , e = d.pop();
                    b.reduce(a, d, function(a, b, d) {
                        b.apply(c, a.concat([function() {
                            var a = arguments[0]
                              , b = Array.prototype.slice.call(arguments, 1);
                            d(a, b)
                        }
                        ]))
                    }, function(a, b) {
                        e.apply(c, [a].concat(b))
                    })
                }
            }
            ;
            D = function(a, b) {
                var c = function() {
                    var c = this
                      , d = Array.prototype.slice.call(arguments)
                      , e = d.pop();
                    return a(b, function(a, b) {
                        a.apply(c, d.concat([b]))
                    }, e)
                };
                if (2 < arguments.length) {
                    var d = Array.prototype.slice.call(arguments, 2);
                    return c.apply(this, d)
                }
                return c
            }
            ;
            b.applyEach = q(D);
            b.applyEachSeries = r(D);
            b.forever = function(a, b) {
                function c(d) {
                    if (d) {
                        if (b)
                            return b(d);
                        throw d;
                    }
                    a(c)
                }
                c()
            }
            ;
            c.async = b
        }
        )();
}

function postFIMessage () {
	chrome.runtime.onConnect.addListener((port) => {
		port.onMessage.addListener((msg) => {
			var s = document.createElement('script');
			s.src = chrome.runtime.getURL('script.js');
			s.classList.add("fi-post-message");
			document.head.appendChild(s);
		}); 
	});
}


function listenToMessage(event) {
	// We only accept messages from ourselves
	if (event.source != window)
		return;

	if (event.data.type && (event.data.type == "FROM_PAGE")) {
		if (typeof FI === "undefined") createFIObject();
		if (typeof fiQuery === "undefined") loadFiQuery();
		printAllPlacementsReturnedToPage(event.data);
		window.removeEventListener("message", listenToMessage, false);
	} 
}

window.addEventListener("message", listenToMessage);

if (!chrome.runtime.onMessage.hasListeners())
	postFIMessage();