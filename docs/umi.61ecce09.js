(function(e) {
  function n(n) {
    for (
      var a, i, o = n[0], c = n[1], s = n[2], m = 0, u = [];
      m < o.length;
      m++
    )
      (i = o[m]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
        (r[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    d && d(n);
    while (u.length) u.shift()();
    return l.push.apply(l, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < l.length; n++) {
      for (var t = l[n], a = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== r[c] && (a = !1);
      }
      a && (l.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var a = {},
    r = { 0: 0 },
    l = [];
  function i(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, n) {
      if ((1 & n && (e = i(e)), 8 & n)) return e;
      if (4 & n && 'object' === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var a in e)
          i.d(
            t,
            a,
            function(n) {
              return e[n];
            }.bind(null, a),
          );
      return t;
    }),
    (i.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e['default'];
            }
          : function() {
              return e;
            };
      return i.d(n, 'a', n), n;
    }),
    (i.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = 'https://yicoding.github.io/image-picker-mobile/');
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = o.push.bind(o);
  (o.push = n), (o = o.slice());
  for (var s = 0; s < o.length; s++) n(o[s]);
  var d = c;
  l.push([0, 1]), t();
})({
  0: function(e, n, t) {
    e.exports = t('tB8F');
  },
  '19b6': function(e, n) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAAByCAMAAADAvHvuAAABI1BMVEXx8fHh4eGSxP/1n4Hy1YXrnoDq6url5eX39/ey0/rt8PLk5OTn5+fuyoDw14fwvIH0sILuyLn0woT////yz4T1oIH0x4TyzIT1o4Hy14v1ooHw8PDzuYP1qYHu7u7s7Ozy36ny1IX0p4Hx8O3114j9/f3y58fy5b/x2ZLy0YT1toTx7+rsoYP1rIKXx//6+vrQ4vbz8/Py7ejy7uPy4rXzvYP1s4P1poLvy4Hx47v1yobwwIPwxYKeyv6q0Pzy6M/v183x25zy25jtr4H29vbx69nx3tbv0MPuxLTtuqXx3J/x3J71z4fus4L1r4LtqoG41/q51/nY5vXm7PPr7/Lx5+Tx6tXy4bDy3qXutJnsrJPspov1voXutYLspoHw4dvw1b3UZAjfAAAEGklEQVR42u3c13LaQBQG4AO7AicQTCQhOqY3g7HB2LHBPXGLS3pv7/8U2RUoogoxg2aOJvvd2INvfu/8uzpoNAJFKe2Aa+yUFAWUFrhKS4ESuEwJXoLLrIGLiqxzX2BBEARBEARhCclPld3s2fltdrfyCaxs+D0r59+AZW2WsyFqimdPCjCHz+MIHyylcBCnk+KVJMwU8DgiAMuoDAPXNLmb6sqaSnXVMsziccgynbilXLTbjJChfEqjXHZWO/weR/jBtldVPXCYDBix03ro8w5MyTjSjEAG7DqJ80bs/VtgLUGGmlHe6FcwzeeAJdaYJ47mydDDYfGuToYSMs/cAVw6PDFf2ISxyMU7Y8HZRym+CTcBk8I5TxwhifqPGNH9qGtkYF9LR/TMt4DJAUuksrDNYrFOxkXk4t0+IbwbZcCjHaI0p/f48HCfTNiTZZ48yupcADQ+U0q7xFqTUnoAWHT48ZYgprrxM0JMGqUhNDuQN3mkwvuHRTkyaPFoTfKY2nzOmhwjJrm4N2hxUSYjWJu/AA68F9pYbWNpwqVjTTIixZpRGJ+XAytnb14um72wxJtxMprY4wg7mXdZlDSxoUZpBcckl2WRY8SKWeZdHPPya0pzxA6N0iyOVa5SqhI7ZErPcMzLLHLNbuTXMCLpC66cLwn2ikEjtouBAt9+5lUuEZ5g/jcq334o8EOuaV4wQhPCZCiS44ccCuWxOU4NTdDIUFi/lKDQpiNHxkNoSszcfSEsE/PZ8PKXiMVicmhKin2cYL1Q0ew+gAqLzGe2/rNJL3Tslz6b6zANnx2qL3P6mYU8X+Q4mhEfPuvj57pV5HAK1Rcp2IyzPKl1K6kcpdUCjMkE/SsXzNhuMxO2mpXVYZNxzMtMgR8auflDcyLK/v4F1/3ldpVnDs9bY564uons/vKfHGVSM8ejcI1fbL5iu7/87aJm3F6ekJcpoz5KpzAu43FEBuz5LUm/opTTHsZWOi1TLvpLkm5gQsbnXzlfBmy6kiSp0ae6mryXjvE9lw93VarrScx3QOW5xN2r1JBTc9QQvZB0gAqPzP1U6ST1XhpoACqnkpHroqeO5u1dSIZvgEq7IZkef673+tF+b/3+URpxDbjcSIs0PgIuHxvSAs8Bm1PJ2k0S0Ln8Llm4RpgYoH09txxfL2EGnwOzXMAHS0leXj2fdnXaRvw8xhyIn8eYC+vzGMsKehwRBOcknbm/nAQHJTd8K7eB8jAVBEEQBEEQBJd5igjYsH285UVk63gbFnjjRefNgjX2ImS9zsdehI7BCqoeG7bAypEXoSOw8sSL0BOw8h5hM7beg6V36Kpx9A4W+LD99gkib7c/gCAIwn/Eda8B2nHf26FeuvEdXMoauMqaAoq73s7WUnhkpdRac4lWicX9C81Kok0FFxVKAAAAAElFTkSuQmCC';
  },
  '2YZa': function(e, n, t) {
    'use strict';
    t.r(n),
      t.d(n, 'ImagePicker', function() {
        return v;
      });
    t('TttT');
    var a = t('Kl5d'),
      r = t.n(a),
      l = t('ODXe'),
      i = t('q1tI'),
      o = t.n(i),
      c = t('Wm/2'),
      s = t('TSYQ'),
      d = t.n(s),
      m = t('U0F3'),
      u = t.n(m),
      g =
        'data:image/png;base64,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',
      f =
        'data:image/png;base64,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',
      p = Object(c['createStyles'])({
        root: { display: 'flex', flexWrap: 'wrap' },
        hidden: { display: 'none' },
        imgBox: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '5px',
          boxSizing: 'border-box',
        },
        img: {
          display: 'block',
          boxSizing: 'border-box',
          borderRadius: '5px',
          width: '100%',
          height: '100%',
        },
        errorTip: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#d56161',
          fontSize: '12px',
          border: '1px solid #d56161',
          boxSizing: 'border-box',
          borderRadius: '5px',
          padding: '0 8px',
          wordBreak: 'keep-all',
          textAlign: 'center',
        },
        iconRemove: {
          width: '20px',
          height: '20px',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 99,
          backgroundImage: 'url('.concat(f, ')'),
          backgroundSize: '100% 100%',
        },
        parent: { overflow: 'hidden', margin: '0 8px 8px 0' },
        noMargin: { margin: 0 },
        name: {
          textAlign: 'center',
          wordBreak: 'break-all',
          marginBottom: '10px',
          color: '#999',
          fontSize: '12px',
          lineHeight: 1.4,
          marginTop: '8px',
        },
        childrenEle: {
          position: 'relative',
          borderRadius: '5px',
          boxSizing: 'border-box',
          '&:before': {
            content: '""',
            width: '30px',
            height: '4px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#ccc',
          },
          '&:after': {
            content: '""',
            width: '4px',
            height: '30px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#ccc',
          },
        },
        defaultDashed: { border: '1px dashed #ccc' },
        defaultBackGround: { background: '#e8f1fc' },
        defaultBorder: { border: '1px solid #ddd' },
        loadingBox: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 100,
          background: 'rgba(0,0,0,.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        loading: {
          width: '35px',
          height: '35px',
          backgroundImage: 'url('.concat(g, ')'),
          backgroundSize: '100% 100%',
          animation: '$myRound 1s linear infinite',
        },
        '@keyframes myRound': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }),
      h = p,
      A = () => {},
      E = e => {
        var n = e.filesList,
          t = void 0 === n ? [] : n,
          a = e.classes,
          c = void 0 === a ? {} : a,
          s = e.max,
          m = void 0 === s ? 1 : s,
          g = e.onChange,
          f = void 0 === g ? A : g,
          p = e.accept,
          h = void 0 === p ? 'image/*' : p,
          E = e.multiple,
          v = e.width,
          k = void 0 === v ? '80px' : v,
          b = e.height,
          C = void 0 === b ? '80px' : b,
          x = e.config,
          y = void 0 === x ? ['defaultBorder'] : x,
          I = e.children,
          P = e.mode,
          B = void 0 === P ? 'fill' : P,
          j = e.size,
          w = e.onUpload,
          S = e.onFail,
          N = void 0 === S ? A : S,
          L = e.resize,
          O = Object(i['useRef'])(null),
          D = Object(i['useRef'])(null),
          M = Object(i['useRef'])(t),
          z = [];
        M.current.forEach(e => {
          e.url && z.push(e.url);
        });
        var U = Object(i['useMemo'])(() => {
            for (var e = 0, n = 0; n < t.length; n++) {
              var a = t[n],
                r = a.url,
                l = a.errorTip;
              (r || l) && e++;
            }
            return e;
          }, [t]),
          R = Object(i['useState'])(!1),
          T = Object(l['default'])(R, 2),
          F = T[0],
          J = T[1],
          Q = Object(i['useState'])(0),
          q = Object(l['default'])(Q, 2),
          X = q[0],
          H = q[1],
          V = Object(i['useState'])(''),
          K = Object(l['default'])(V, 2),
          W = K[0],
          Y = K[1];
        Object(i['useEffect'])(() => {
          var e = getComputedStyle(D.current).width;
          Y(e);
        }, []);
        var Z,
          G,
          _ = (e, n) =>
            new Promise((t, a) => {
              var r = new FileReader();
              (r.onload = r => {
                var l = r.target.result;
                l
                  ? t({ url: l, file: e })
                  : a('Fail to get the '.concat(n, ' image'));
              }),
                r.readAsDataURL(e);
            }),
          $ = e => {
            var n = e.target,
              t = n.files;
            if (!t || !t.length) return (n.value = '');
            var a = m - U;
            t.length > a &&
              r.a.info(
                '\u56fe\u7247\u6700\u591a\u4e0d\u8d85\u8fc7'.concat(
                  m,
                  '\u5f20',
                ),
              );
            for (
              var l = Array.from(t).slice(0, a), i = [], o = 0;
              o < l.length;
              o++
            )
              i.push(_(l[o], o));
            M.current = M.current.filter(e => e.url || e.errorTip);
            var c = M.current.length;
            Promise.all(i)
              .then(e => {
                w && e.forEach(e => (e.loading = !0));
                var t = e.filter(e =>
                  j && e.file.size > 1024 * j * 1024
                    ? r.a.info(
                        '\u56fe\u7247\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7'.concat(
                          j,
                          'M',
                        ),
                      )
                    : e,
                );
                if (((M.current = M.current.concat(t)), f(M.current), w))
                  for (
                    var a = function(e) {
                        var n = M.current[e];
                        e >= c &&
                          w(n.file)
                            .then(n => {
                              (M.current[e] = Object.assign(
                                {},
                                M.current[e],
                                n,
                                { loading: !1 },
                              )),
                                (M.current = [...M.current]),
                                setTimeout(() => {
                                  f(M.current);
                                }, 10);
                            })
                            .catch(n => {
                              (M.current[e] = {
                                url: '',
                                loading: !1,
                                errorTip:
                                  n ||
                                  '\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5',
                              }),
                                (M.current = [...M.current]),
                                setTimeout(() => {
                                  f(M.current);
                                }, 10);
                            });
                      },
                      l = 0;
                    l < M.current.length;
                    l++
                  )
                    a(l);
                n.value = '';
              })
              .catch(e => {
                N(e), (n.value = '');
              });
          },
          ee = () => {
            O && O.current && O.current.click();
          },
          ne = e => {
            for (var n = !0, t = 0; t < M.current.length; t++) {
              var a = M.current[t].loading;
              if (a) {
                n = !1;
                break;
              }
            }
            if (!n)
              return r.a.info(
                '\u56fe\u7247\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u540e\u64cd\u4f5c',
              );
            M.current.splice(e, 1), (M.current = [...M.current]), f(M.current);
          },
          te = e => {
            H(e), ae();
          },
          ae = () => J(e => !e);
        (function(e) {
          (e['defaultBorder'] = 'defaultBorder'),
            (e['defaultBackGround'] = 'defaultBackGround'),
            (e['defaultDashed'] = 'defaultDashed');
        })(Z || (Z = {})),
          (function(e) {
            (e['fill'] = 'fill'),
              (e['cover'] = 'cover'),
              (e['contain'] = 'contain'),
              (e['scale-down'] = 'scale-down');
          })(G || (G = {}));
        var re = L ? W : C;
        return o.a.createElement(
          'div',
          { className: c.root },
          o.a.createElement('input', {
            className: c.hidden,
            ref: O,
            type: 'file',
            accept: h,
            multiple: E,
            onChange: $,
          }),
          t &&
            t.length > 0 &&
            t.map((e, n) => {
              var a = e.url,
                r = e.loading,
                l = e.name,
                i = e.errorTip;
              if (a || i) {
                for (
                  var s = t.slice(0, n + 1), u = 0, g = 0;
                  g < s.length;
                  g++
                ) {
                  var f = s[g].errorTip;
                  f && u++;
                }
                var p = n - u;
                return o.a.createElement(
                  'div',
                  {
                    key: n,
                    className: d()(c.parent, {
                      [c.noMargin]: 1 === m || t.length < 1,
                    }),
                    style: { width: k },
                  },
                  o.a.createElement(
                    'div',
                    { className: c.imgBox, style: { height: re } },
                    a &&
                      o.a.createElement('img', {
                        alt: '',
                        className: c.img,
                        src: a,
                        style: { objectFit: B },
                        onClick: () => te(p),
                      }),
                    i &&
                      o.a.createElement(
                        'div',
                        { className: c.errorTip, style: { height: re } },
                        i,
                      ),
                    o.a.createElement('i', {
                      className: c.iconRemove,
                      onClick: () => ne(n),
                    }),
                    r &&
                      o.a.createElement(
                        'div',
                        { className: c.loadingBox },
                        o.a.createElement('i', { className: c.loading }),
                      ),
                  ),
                  l && o.a.createElement('div', { className: c.name }, l),
                );
              }
            }),
          U < m &&
            o.a.createElement(
              'div',
              {
                className: d()(c.parent, {
                  [c.noMargin]: 1 === m || t.length < 1,
                }),
                style: { width: k },
                ref: D,
                onClick: ee,
              },
              I ||
                o.a.createElement('div', {
                  style: { height: re },
                  className: d()(c.childrenEle, [...y.map(e => c[e])]),
                }),
              1 === m &&
                t[0] &&
                t[0].name &&
                o.a.createElement(
                  'div',
                  { className: c.name, style: { width: k } },
                  t[0].name,
                ),
            ),
          F && o.a.createElement(u.a, { onClose: ae, index: X, urls: z }),
        );
      },
      v = Object(c['withStyles'])(h)(E);
  },
  '9Ihz': function(e, n) {},
  '9kvl': function(e, n, t) {
    'use strict';
    var a = t('FfOG');
    t.d(n, 'a', function() {
      return a['b'];
    });
    var r = t('bCY9');
    t.d(n, 'b', function() {
      return r['a'];
    });
  },
  CWFq: function(e, n) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA0CAMAAADhcastAAAB71BMVEUAAAAghP9UoP9RnP9dpv8egv8vdf8/lf8mev8zj/85k/8xjf83kP9bpf9Hmv89lf83kP9Pn/8thP8AKP82kP83kv9OnP82jv8tjP9Bl/9Im/9Fmf9Al/8si/8piv9EmP8qi/81j/83jv9SoP86kv8ihf80kP89lf8lh/9Mnf8yjv8qiv8/lf8oif80kP8lh/85kv8vjf9Pnv8fg/8khv80j/8oiP88lP8ti/8tjP9ElP9DmP8zkP9ZpP9Alv9Jm/9Yov8tjP89lf9KnP8yj/9Gmv84k/9SoP9LnP9Zpf9DmP9Uof9DmP8/lv8siv9Hm/9Gmf89lf9DmP8tjP87lf9ZpP8ti/9Wo/9Knf9Tof8jhf8ph/9LnP9Onv8yjv88lP8vjP8ujP9UoP9Lm/8ri/9apf8kh/9dpv9Vov9dpv8piv9EmP9LnP87k/8qiv8jhv9Pnv80j/9Zo/9Jm/9cpv9Rn/9Tn/82kP9dp/8zj/9GmP9Alv9Nnf8xjP8nif8ihv9Mnf9Pn/9DmP9Bl/8kh/89lf8piv9JnP9Hm/83kv88lP9Fmv80kP8ri/8sjP8ujf9Nnv8/lv86k/9RoP81kf9Tof8xjv9Vov85k/9bpf9SoP9ZpP9LnP8zj/9Wo/8yj/8wjv9YpP8jh/9cpv8qi//dYM98AAAAfnRSTlMAcP0s2HADcAfLynAR2G8yLCcMAY9wHhT73MvLy8twV083GPn47+fm2dfRwq+vqKSbhXppXklDQiIcDvv7+fby7u7t6tjOzsrIwrasrKGZlo6GgXp2X1hUTz06KPz59/Dn5+Th4N3Szs7My8K+vbu3ta2koI2FcmxrZGNfRh8K9YYDAAADqElEQVRIx6WUh3MSYRDFN5aIiiIkhsSWYu+9xN5777333ruAQMAgJURDMQHS/lDf7mc+uTsyRPzNzuzbt/sGbi6BSuB8/WAMM2nMJNQYrgPvN9KIOLN9IJsdyA6gpCvujaYRcG5LtiR36qgsGyd1M9nuLEp35mVN+S/dLfR19zFoet7ipDJUH8jn+/J9KN01q6gMF0bl8+l8GiWd0fp+NZXE7RytOJS20pXuQqXTo86pG2dddfHHHbo5e5SiS+BjCZlQN7O373s79NprVs3+JXT9UicQQHsoq97nJOHNj0pYKK/9/NfKeI4Ht+3vYL52WNcwDTsIlO6fiUZfwVrh6/AJECjphp3JP0bU6KuUx0STe3p8PT6U7ppttxYu3HXZ5wv7wuGesFj6BsZ+hMOl2fXqfJ3d5mpxrJo2zMU0hL8J4W/KgWC2Ha+jIaob92gfTWsJW4DvoGJcx0sdTUf4u5WDdjLxcZP1isN+/3e/DGhK73ET03zy8KODxxrtxJzWGX2H8Di/mZ1TCDgPb1JjwycCNUssd3/DAX9AgDhBwNHAnsz+k2JsZa3BMAPhgIn5LTjd0FBsjSNwxHQn4WQykAygkn84wm9nSbEX2MoPsl608qWrcFuyTYAAjXwIrXzVV/D7aij2AIfbjMzhT6k1mfPdMJcUO5G2yASEI+gyKK614u4JhMFvhrkiYgThqZ1CpPOPNd+O97KXFSy9W4vwCQi5U12FNZnOTCazswXhCaxRerWenwWz8lXncCbTnmln0KDnXMLdsoxC7WBOERN7mVXncLsJ/obvTN4E/r3aazLHE038aaIW4S/zjN5UeI7NrKI/oygxORwF2kDb7eL/g6gGu0V2WCujJlQ4F81pMHzgP7EVOd6r3Tx+4tZ5rFHa53ChkCvkUIUhdts5Xbu5kCqkUrlUbhFnqTaVgqFBgMMpC8uqCax7sQO6ftEpN4Gmq5YzDvf2JnoTqF5B9EoSNqw929RsE+m4rvf6lsOJEhxVEU3TjYSVmUSz4gYS8QQqvnhdUbRlZX2pG2M4Fo8JEPH6pWdbawjYmk/djvFOfKA1h2PDsWPx0qPLny6olyEUC6EMew4PDoYGQ2XBEcqgHxKt8XhCnhBKd43VN+wWE130VMpyIvsCgxP0BFEjCq8hoqpgZdx18bt4FuwPBr1BL0r1fm8/ygusHgacQ8+9SIx7qdeMPh6WuU2ksK1e4P035i6/RBrXutVVY4WqsVUGYFi81Ws20P/zG4ODxESqQjmZAAAAAElFTkSuQmCC';
  },
  FfOG: function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return i;
    }),
      t.d(n, 'b', function() {
        return l;
      });
    var a = t('YS25'),
      r = { basename: '/' };
    window.routerBase && (r.basename = window.routerBase);
    var l = Object({ NODE_ENV: 'production' }).__IS_SERVER
        ? null
        : Object(a['b'])(r),
      i = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (l = Object(a['b'])(r)), l;
      };
  },
  bCY9: function(e, n, t) {
    'use strict';
    t.d(n, 'a', function() {
      return r;
    });
    var a = t('HyNC'),
      r = new a['b']({
        validKeys: [
          'modifyClientRenderOpts',
          'patchRoutes',
          'rootContainer',
          'render',
          'onRouteChange',
        ],
      });
  },
  gql7: function(e, n, t) {
    'use strict';
    t.r(n);
    var a = t('q1tI'),
      r = t.n(a),
      l = (t('B2uJ'), t('+su7'), t('qOys')),
      i = t.n(l);
    t('5Yjd');
    n['default'] = function() {
      return r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          'div',
          { className: 'markdown' },
          r.a.createElement(
            'h1',
            { id: 'image-picker-mobile' },
            r.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#image-picker-mobile' },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'image-picker-mobile',
          ),
          r.a.createElement(
            'p',
            null,
            '\u57fa\u4e8e',
            r.a.createElement('code', null, 'react'),
            '\u7684\u79fb\u52a8\u7aef\u56fe\u7247\u4e0a\u4f20\u7ec4\u4ef6',
          ),
          r.a.createElement(
            'p',
            null,
            r.a.createElement(
              'a',
              {
                href: 'https://yicoding.github.io/image-picker-mobile',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              '\u67e5\u770b\u6587\u6863\u548c\u793a\u4f8b',
              r.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  'aria-hidden': !0,
                  x: '0px',
                  y: '0px',
                  viewBox: '0 0 100 100',
                  width: '15',
                  height: '15',
                  className: '__dumi-default-external-link-icon',
                },
                r.a.createElement('path', {
                  fill: 'currentColor',
                  d:
                    'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                }),
                r.a.createElement('polygon', {
                  fill: 'currentColor',
                  points:
                    '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                }),
              ),
            ),
          ),
          r.a.createElement(
            'h2',
            { id: '\u4f7f\u7528' },
            r.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#\u4f7f\u7528' },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u4f7f\u7528',
          ),
          r.a.createElement(
            'h3',
            { id: 'npm-\u6216-yarn-\u5b89\u88c5' },
            r.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#npm-\u6216-yarn-\u5b89\u88c5' },
              r.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'npm \u6216 yarn \u5b89\u88c5',
          ),
          r.a.createElement(i.a, {
            code: 'npm install image-picker-mobile --save\n',
            lang: 'shell',
          }),
          r.a.createElement('br', null),
          r.a.createElement(i.a, {
            code: 'yarn add image-picker-mobile\n',
            lang: 'shell',
          }),
        ),
      );
    };
  },
  mZby: function(e, n, t) {
    'use strict';
    t.r(n);
    var a = t('wx14'),
      r = t('q1tI'),
      l = t.n(r),
      i = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
      o = t.n(i),
      c = l.a.memo(function() {
        var e = t('284h'),
          n = t('TqRt');
        t('ZyjE');
        var a = n(t('4IZf'));
        t('ca75');
        var r = n(t('JMAg'));
        t('dlV3');
        var l = n(t('4cdd')),
          i = n(t('ODXe')),
          o = e(t('q1tI')),
          c = (t('9ibs'), t('2YZa')),
          s = function() {
            var e = (0, o.useState)([]),
              n = (0, i['default'])(e, 2),
              t = n[0],
              s = n[1],
              d = function(e) {
                e.forEach(function(e) {
                  return (e.name = '\u793a\u4f8b\u56fe');
                }),
                  s(e);
              };
            return o['default'].createElement(
              a['default'],
              { direction: 'row', wrap: 'wrap' },
              o['default'].createElement(
                r['default'],
                null,
                o['default'].createElement(c.ImagePicker, {
                  filesList: t,
                  onChange: d,
                }),
                o['default'].createElement(l['default'], null),
              ),
              o['default'].createElement(
                r['default'],
                null,
                o['default'].createElement(c.ImagePicker, {
                  filesList: t,
                  onChange: d,
                  config: ['defaultBackGround'],
                }),
                o['default'].createElement(l['default'], null),
              ),
              o['default'].createElement(
                r['default'],
                null,
                o['default'].createElement(c.ImagePicker, {
                  filesList: t,
                  onChange: d,
                  config: ['defaultDashed'],
                }),
                o['default'].createElement(l['default'], null),
              ),
              o['default'].createElement(
                r['default'],
                null,
                o['default'].createElement(c.ImagePicker, {
                  filesList: t,
                  onChange: d,
                  config: ['defaultBorder', 'defaultBackGround'],
                }),
                o['default'].createElement(l['default'], null),
              ),
              o['default'].createElement(
                r['default'],
                null,
                o['default'].createElement(c.ImagePicker, {
                  filesList: t,
                  onChange: d,
                  config: ['defaultDashed', 'defaultBackGround'],
                }),
                o['default'].createElement(l['default'], null),
              ),
            );
          };
        return o['default'].createElement(s);
      }),
      s = l.a.memo(function() {
        var e = t('284h'),
          n = t('TqRt'),
          a = n(t('ODXe')),
          r = e(t('q1tI')),
          l = t('2YZa'),
          i = function() {
            var e = (0, r.useState)([]),
              n = (0, a['default'])(e, 2),
              t = n[0],
              i = n[1],
              o = function(e) {
                e.forEach(function(e, n) {
                  return (e.name = '\u793a\u4f8b\u56fe'.concat(n));
                }),
                  i(e);
              },
              c = function() {
                return new Promise(function(e, n) {
                  var t = Math.random();
                  setTimeout(function() {
                    if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
                    n('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');
                  }, 3e3);
                });
              };
            return r['default'].createElement(l.ImagePicker, {
              filesList: t,
              onChange: o,
              multiple: !0,
              max: 10,
              mode: 'cover',
              onUpload: c,
            });
          };
        return r['default'].createElement(i);
      }),
      d = l.a.memo(function() {
        var e = t('284h'),
          n = t('TqRt');
        t('ZyjE');
        var a = n(t('4IZf')),
          r = n(t('ODXe')),
          l = e(t('q1tI')),
          i = t('Wm/2'),
          o = (t('9ibs'), t('2YZa')),
          c = t('okqA'),
          s = t('19b6'),
          d = t('CWFq'),
          m = (0, i.createUseStyles)({
            root: {
              width: '375px',
              boxSizing: 'border-box',
              padding: '20px',
              border: '1px solid #ddd',
              display: 'flex',
            },
            item: { flex: 1, '&:first-child': { marginRight: '30px' } },
            children: {
              background: '#e8f1fc',
              height: '102px',
              position: 'relative',
            },
            img: { width: '89px', height: '57px' },
            iconPhoto: {
              width: '32px',
              height: '28px',
              display: 'block',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            },
          }),
          u = function() {
            var e = m(),
              n = (0, l.useState)([
                { name: '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762' },
              ]),
              t = (0, r['default'])(n, 2),
              i = t[0],
              u = t[1],
              g = (0, l.useState)([
                { name: '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762' },
              ]),
              f = (0, r['default'])(g, 2),
              p = f[0],
              h = f[1],
              A = function() {
                return new Promise(function(e, n) {
                  var t = Math.random();
                  setTimeout(function() {
                    if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
                    n('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');
                  }, 3e3);
                });
              },
              E = function(e) {
                0 === e.length && e.push({}),
                  e.forEach(function(e, n) {
                    return (e.name = '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762');
                  }),
                  u(e);
              },
              v = function(e) {
                0 === e.length && e.push({}),
                  e.forEach(function(e, n) {
                    return (e.name = '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762');
                  }),
                  h(e);
              };
            return l['default'].createElement(
              'div',
              { className: e.root },
              l['default'].createElement(
                'div',
                { className: e.item },
                l['default'].createElement(
                  o.ImagePicker,
                  {
                    filesList: i,
                    onChange: E,
                    mode: 'cover',
                    width: '100%',
                    height: '102px',
                    onUpload: A,
                  },
                  l['default'].createElement(
                    a['default'],
                    { className: e.children, justify: 'center' },
                    l['default'].createElement('img', {
                      className: e.img,
                      alt: '',
                      src: c,
                    }),
                    l['default'].createElement('img', {
                      alt: '',
                      className: e.iconPhoto,
                      src: d,
                    }),
                  ),
                ),
              ),
              l['default'].createElement(
                'div',
                { className: e.item },
                l['default'].createElement(
                  o.ImagePicker,
                  {
                    filesList: p,
                    onChange: v,
                    mode: 'cover',
                    width: '100%',
                    height: '102px',
                    onUpload: A,
                  },
                  l['default'].createElement(
                    a['default'],
                    { className: e.children, justify: 'center' },
                    l['default'].createElement('img', {
                      className: e.img,
                      alt: '',
                      src: s,
                    }),
                    l['default'].createElement('img', {
                      alt: '',
                      className: e.iconPhoto,
                      src: d,
                    }),
                  ),
                ),
              ),
            );
          };
        return l['default'].createElement(u);
      }),
      m = l.a.memo(function() {
        var e = t('284h'),
          n = t('TqRt'),
          a = n(t('ODXe')),
          r = e(t('q1tI')),
          l = t('2YZa'),
          i = function() {
            var e = (0, r.useState)([]),
              n = (0, a['default'])(e, 2),
              t = n[0],
              i = n[1],
              o = function(e) {
                e.forEach(function(e, n) {
                  return (e.name = '\u793a\u4f8b\u56fe'.concat(n));
                }),
                  i(e);
              },
              c = function() {
                return new Promise(function(e, n) {
                  var t = Math.random();
                  setTimeout(function() {
                    if (t > 0.3) return e({ fssid: t.toString().slice(-6) });
                    n('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');
                  }, 3e3);
                });
              };
            return r['default'].createElement(l.ImagePicker, {
              filesList: t,
              onChange: o,
              multiple: !0,
              max: 10,
              mode: 'cover',
              onUpload: c,
              resize: !0,
              width: '18%',
            });
          };
        return r['default'].createElement(i);
      });
    n['default'] = function() {
      return l.a.createElement(
        l.a.Fragment,
        null,
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h1',
            { id: 'imagepicker-\u56fe\u7247\u9009\u62e9\u5668' },
            l.a.createElement(
              'a',
              {
                'aria-hidden': 'true',
                href: '#imagepicker-\u56fe\u7247\u9009\u62e9\u5668',
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
          ),
          l.a.createElement(
            'h2',
            { id: '\u57fa\u672c\u7528\u6cd5' },
            l.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u57fa\u672c\u7528\u6cd5',
          ),
        ),
        l.a.createElement(
          o.a,
          Object(a['a'])(
            {
              source: {
                tsx:
                  "import React, { useState } from 'react';\n\nimport { WhiteSpace, Flex, WingBlank } from 'antd-mobile';\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  interface Files {\n    url: string; // \u56fe\u7247url\n    loading: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n    errorTip?: string; // \u9519\u8bef\u63d0\u793a\n    name?: string; // \u56fe\u7247\u540d\u79f0\n    [index: string]: any;\n  }\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach(item => (item.name = '\u793a\u4f8b\u56fe'));\n    setFilesList(arr);\n  };\n\n  return (\n    <Flex direction=\"row\" wrap=\"wrap\">\n      <WingBlank>\n        <ImagePicker filesList={filesList} onChange={onChange} />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultDashed']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultBorder', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultDashed', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n    </Flex>\n  );\n};",
                jsx:
                  "import React, { useState } from 'react';\nimport { WhiteSpace, Flex, WingBlank } from 'antd-mobile';\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = arr => {\n    console.log('onChange', arr);\n    arr.forEach(item => (item.name = '\u793a\u4f8b\u56fe'));\n    setFilesList(arr);\n  };\n\n  return (\n    <Flex direction=\"row\" wrap=\"wrap\">\n      <WingBlank>\n        <ImagePicker filesList={filesList} onChange={onChange} />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker filesList={filesList} onChange={onChange} config={['defaultBackGround']} />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker filesList={filesList} onChange={onChange} config={['defaultDashed']} />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultBorder', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n      <WingBlank>\n        <ImagePicker\n          filesList={filesList}\n          onChange={onChange}\n          config={['defaultDashed', 'defaultBackGround']}\n        />\n        <WhiteSpace />\n      </WingBlank>\n    </Flex>\n  );\n};\n",
              },
            },
            {
              CSSInDependencies: ['antd-mobile/dist/antd-mobile.css'],
              dependencies: {
                'antd-mobile': '2.3.4',
                'image-picker-mobile': '1.0.0',
              },
              files: {},
            },
          ),
          l.a.createElement(c, null),
        ),
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h2',
            { id: '\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20' },
            l.a.createElement(
              'a',
              {
                'aria-hidden': 'true',
                href: '#\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20',
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u591a\u9009+\u5b9e\u65f6\u4e0a\u4f20',
          ),
        ),
        l.a.createElement(
          o.a,
          Object(a['a'])(
            {
              source: {
                tsx:
                  "import React, { useState } from 'react';\n\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  interface Files {\n    url: string; // \u56fe\u7247url\n    loading: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n    errorTip?: string; // \u9519\u8bef\u63d0\u793a\n    name?: string; // \u56fe\u7247\u540d\u79f0\n    [index: string]: any;\n  }\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setFilesList(arr);\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = () => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    });\n  };\n\n  return (\n    <ImagePicker\n      filesList={filesList}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n    />\n  );\n};",
                jsx:
                  "import React, { useState } from 'react';\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = arr => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setFilesList(arr);\n  }; // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n\n  const onUpload = () =>\n    new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({\n            fssid: rate.toString().slice(-6),\n          });\n        }\n\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    });\n\n  return (\n    <ImagePicker\n      filesList={filesList}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n    />\n  );\n};\n",
              },
            },
            { dependencies: { 'image-picker-mobile': '1.0.0' }, files: {} },
          ),
          l.a.createElement(s, null),
        ),
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h2',
            { id: '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6' },
            l.a.createElement(
              'a',
              {
                'aria-hidden': 'true',
                href: '#\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6',
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668(\u5b50\u7ec4\u4ef6)',
          ),
        ),
        l.a.createElement(
          o.a,
          Object(a['a'])(
            {
              source: {
                tsx:
                  "import React, { useState } from 'react';\nimport { createUseStyles } from '@wonder-ui/styles';\n\nimport { Flex, WingBlank } from 'antd-mobile';\nimport { ImagePicker } from 'image-picker-mobile';\n\nconst iconIdCard = require('../assets/images/icon-idcard.png');\nconst iconIdCardBack = require('../assets/images/icon-idcard-back.png');\nconst iconPhoto = require('../assets/images/icon-photo.png');\n\nconst styles = createUseStyles({\n  root: {\n    width: '375px',\n    boxSizing: 'border-box',\n    padding: '20px',\n    border: '1px solid #ddd',\n    display: 'flex',\n  },\n  item: {\n    flex: 1,\n    '&:first-child': {\n      marginRight: '30px',\n    },\n  },\n  children: {\n    background: '#e8f1fc',\n    height: '102px',\n    position: 'relative',\n  },\n  img: {\n    width: '89px',\n    height: '57px',\n  },\n  iconPhoto: {\n    width: '32px',\n    height: '28px',\n    display: 'block',\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    zIndex: 2,\n  },\n});\n\nexport default () => {\n  const s = styles();\n\n  interface Files {\n    url: string; // \u56fe\u7247url\n    loading: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n    errorTip?: string; // \u9519\u8bef\u63d0\u793a\n    name?: string; // \u56fe\u7247\u540d\u79f0\n    [index: string]: any;\n  }\n\n  const [idCard, setIdCard] = useState<Array<Files>>([\n    { name: '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762' },\n  ]);\n  const [idCardBack, setIdCardBack] = useState<Array<Files>>([\n    { name: '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762' },\n  ]);\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = () => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    });\n  };\n\n  // \u4eba\u50cf\u9762\u6539\u53d8\n  const onChangeIdCard = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    if (arr.length === 0) {\n      arr.push({});\n    }\n    arr.forEach((item, index) => (item.name = '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762'));\n    setIdCard(arr);\n  };\n\n  // \u56fd\u5fbd\u9762\u6539\u53d8\n  const onChangeIdCardBack = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    if (arr.length === 0) {\n      arr.push({});\n    }\n    arr.forEach((item, index) => (item.name = '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762'));\n    setIdCardBack(arr);\n  };\n\n  return (\n    <div className={s.root}>\n      <div className={s.item}>\n        <ImagePicker\n          filesList={idCard}\n          onChange={onChangeIdCard}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"102px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCard} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n      <div className={s.item}>\n        <ImagePicker\n          filesList={idCardBack}\n          onChange={onChangeIdCardBack}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"102px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCardBack} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n    </div>\n  );\n};",
                jsx:
                  "import React, { useState } from 'react';\nimport { createUseStyles } from '@wonder-ui/styles';\nimport { Flex } from 'antd-mobile';\nimport { ImagePicker } from 'image-picker-mobile';\n\nconst iconIdCard = require('../assets/images/icon-idcard.png');\n\nconst iconIdCardBack = require('../assets/images/icon-idcard-back.png');\n\nconst iconPhoto = require('../assets/images/icon-photo.png');\n\nconst styles = createUseStyles({\n  root: {\n    width: '375px',\n    boxSizing: 'border-box',\n    padding: '20px',\n    border: '1px solid #ddd',\n    display: 'flex',\n  },\n  item: {\n    flex: 1,\n    '&:first-child': {\n      marginRight: '30px',\n    },\n  },\n  children: {\n    background: '#e8f1fc',\n    height: '102px',\n    position: 'relative',\n  },\n  img: {\n    width: '89px',\n    height: '57px',\n  },\n  iconPhoto: {\n    width: '32px',\n    height: '28px',\n    display: 'block',\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    zIndex: 2,\n  },\n});\nexport default () => {\n  const s = styles();\n  const [idCard, setIdCard] = useState([\n    {\n      name: '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762',\n    },\n  ]);\n  const [idCardBack, setIdCardBack] = useState([\n    {\n      name: '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762',\n    },\n  ]); // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n\n  const onUpload = () =>\n    new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({\n            fssid: rate.toString().slice(-6),\n          });\n        }\n\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    }); // \u4eba\u50cf\u9762\u6539\u53d8\n\n  const onChangeIdCard = arr => {\n    console.log('onChange', arr);\n\n    if (arr.length === 0) {\n      arr.push({});\n    }\n\n    arr.forEach((item, index) => (item.name = '\u8eab\u4efd\u8bc1\u4eba\u50cf\u9762'));\n    setIdCard(arr);\n  }; // \u56fd\u5fbd\u9762\u6539\u53d8\n\n  const onChangeIdCardBack = arr => {\n    console.log('onChange', arr);\n\n    if (arr.length === 0) {\n      arr.push({});\n    }\n\n    arr.forEach((item, index) => (item.name = '\u8eab\u4efd\u8bc1\u56fd\u5fbd\u9762'));\n    setIdCardBack(arr);\n  };\n\n  return (\n    <div className={s.root}>\n      <div className={s.item}>\n        <ImagePicker\n          filesList={idCard}\n          onChange={onChangeIdCard}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"102px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCard} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n      <div className={s.item}>\n        <ImagePicker\n          filesList={idCardBack}\n          onChange={onChangeIdCardBack}\n          mode=\"cover\"\n          width=\"100%\"\n          height=\"102px\"\n          onUpload={onUpload}\n        >\n          <Flex className={s.children} justify=\"center\">\n            <img className={s.img} alt=\"\" src={iconIdCardBack} />\n            <img alt=\"\" className={s.iconPhoto} src={iconPhoto} />\n          </Flex>\n        </ImagePicker>\n      </div>\n    </div>\n  );\n};\n",
              },
            },
            {
              CSSInDependencies: ['antd-mobile/dist/antd-mobile.css'],
              dependencies: {
                'antd-mobile': '2.3.4',
                react: '>=16.8.0',
                '@wonder-ui/styles': '2.0.0-beta.9',
                'image-picker-mobile': '1.0.0',
              },
              files: {},
            },
          ),
          l.a.createElement(d, null),
        ),
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h2',
            { id: '\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49' },
            l.a.createElement(
              'a',
              {
                'aria-hidden': 'true',
                href: '#\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49',
              },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            '\u591a\u9009+\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49',
          ),
        ),
        l.a.createElement(
          o.a,
          Object(a['a'])(
            {
              source: {
                tsx:
                  "import React, { useState } from 'react';\n\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  interface Files {\n    url: string; // \u56fe\u7247url\n    loading: boolean; // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n    errorTip?: string; // \u9519\u8bef\u63d0\u793a\n    name?: string; // \u56fe\u7247\u540d\u79f0\n    [index: string]: any;\n  }\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: Array<Files>) => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setFilesList(arr);\n  };\n\n  // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n  const onUpload = () => {\n    return new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({ fssid: rate.toString().slice(-6) });\n        }\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    });\n  };\n\n  return (\n    <ImagePicker\n      filesList={filesList}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n      resize\n      width=\"18%\"\n    />\n  );\n};",
                jsx:
                  "import React, { useState } from 'react';\nimport { ImagePicker } from 'image-picker-mobile';\n\nexport default () => {\n  const [filesList, setFilesList] = useState([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = arr => {\n    console.log('onChange', arr);\n    arr.forEach((item, index) => (item.name = `\u793a\u4f8b\u56fe${index}`));\n    setFilesList(arr);\n  }; // \u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5\n\n  const onUpload = () =>\n    new Promise((resolve, reject) => {\n      const rate = Math.random();\n      setTimeout(() => {\n        if (rate > 0.3) {\n          // \u6210\u529f\n          return resolve({\n            fssid: rate.toString().slice(-6),\n          });\n        }\n\n        reject('\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5~');\n      }, 3000);\n    });\n\n  return (\n    <ImagePicker\n      filesList={filesList}\n      onChange={onChange}\n      multiple\n      max={10}\n      mode=\"cover\"\n      onUpload={onUpload}\n      resize\n      width=\"18%\"\n    />\n  );\n};\n",
              },
            },
            { dependencies: { 'image-picker-mobile': '1.0.0' }, files: {} },
          ),
          l.a.createElement(m, null),
        ),
        l.a.createElement(
          'div',
          { className: 'markdown' },
          l.a.createElement(
            'h2',
            { id: 'api' },
            l.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#api' },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'API',
          ),
          l.a.createElement(
            'h3',
            { id: 'imagepicker' },
            l.a.createElement(
              'a',
              { 'aria-hidden': 'true', href: '#imagepicker' },
              l.a.createElement('span', { className: 'icon icon-link' }),
            ),
            'ImagePicker',
          ),
          l.a.createElement(
            'table',
            null,
            l.a.createElement(
              'thead',
              null,
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('th', null, '\u5c5e\u6027'),
                l.a.createElement('th', null, '\u8bf4\u660e'),
                l.a.createElement('th', null, '\u7c7b\u578b'),
                l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
              ),
            ),
            l.a.createElement(
              'tbody',
              null,
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'filesList'),
                l.a.createElement(
                  'td',
                  null,
                  '\u56fe\u7247\u6587\u4ef6\u6570\u7ec4,\u5143\u7d20\u4e3a\u5bf9\u8c61,\u5305\u542b\u5c5e\u6027 ',
                  l.a.createElement('code', null, 'url'),
                  ': \u56fe\u7247\u8def\u5f84(',
                  l.a.createElement('code', null, '\u5fc5\u9009'),
                  '), ',
                  l.a.createElement('code', null, 'loading'),
                  ': \u56fe\u7247\u52a0\u8f7d\u72b6\u6001, ',
                  l.a.createElement('code', null, 'errorTip'),
                  ': \u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u63d0\u793a\u6587\u6848,',
                  l.a.createElement('code', null, 'name'),
                  ': \u56fe\u7247\u5e95\u90e8\u663e\u793a\u7684\u540d\u79f0,\u4ee5\u53ca\u4e1a\u52a1\u9700\u8981\u7684\u5176\u5b83\u5c5e\u6027',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'Array'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '[]'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'max'),
                l.a.createElement(
                  'td',
                  null,
                  '\u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u6570\u91cf',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'number'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '1'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'onChange'),
                l.a.createElement(
                  'td',
                  null,
                  'files \u503c\u53d1\u751f\u53d8\u5316\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '(arr: Array<Files>) => any'),
                ),
                l.a.createElement('td', null, '-'),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'onUpload'),
                l.a.createElement(
                  'td',
                  null,
                  '\u56fe\u7247\u5b9e\u65f6\u4e0a\u4f20\u65b9\u6cd5',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '(file) => Promise'),
                ),
                l.a.createElement('td', null, '-'),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'accept'),
                l.a.createElement('td', null, '\u56fe\u7247\u7c7b\u578b'),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'string'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'image/*'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'multiple'),
                l.a.createElement('td', null, '\u662f\u5426\u591a\u9009'),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'boolean'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'false'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'width'),
                l.a.createElement('td', null, '\u56fe\u7247\u5bbd\u5ea6'),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'string'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '80px'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'height'),
                l.a.createElement('td', null, '\u56fe\u7247\u9ad8\u5ea6'),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'string'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '80px'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'config'),
                l.a.createElement(
                  'td',
                  null,
                  '\u56fe\u7247\u7684\u989d\u5916\u6269\u5c55\u9879,',
                  l.a.createElement('code', null, 'defaultBorder'),
                  ': \u663e\u793a\u5b9e\u7ebf\u8fb9\u6846, ',
                  l.a.createElement('code', null, 'defaultBackGround'),
                  ': \u663e\u793a\u9ed8\u8ba4\u80cc\u666f\u8272, ',
                  l.a.createElement('code', null, 'defaultDashed'),
                  ': \u663e\u793a\u865a\u7ebf\u8fb9\u6846',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'string[]'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'defaultBorder'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'children'),
                l.a.createElement(
                  'td',
                  null,
                  '\u9009\u62e9\u56fe\u7247\u5143\u7d20',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'React.ReactNode'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'default'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'mode'),
                l.a.createElement(
                  'td',
                  null,
                  '\u56fe\u7247\u88c1\u5207\u7c7b\u578b(\u540c css \u4e2d',
                  l.a.createElement('code', null, 'object-fit'),
                  '\u5c5e\u6027), ',
                  l.a.createElement('code', null, 'fill'),
                  ', ',
                  l.a.createElement('code', null, 'cover'),
                  ', ',
                  l.a.createElement('code', null, 'contain'),
                  ', ',
                  l.a.createElement('code', null, 'scale-down'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'string'),
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'fill'),
                ),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'size'),
                l.a.createElement(
                  'td',
                  null,
                  '\u5355\u4e2a\u56fe\u7247\u9650\u5236\u5927\u5c0f\uff0c\u5355\u4f4d M',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, 'number'),
                ),
                l.a.createElement('td', null, '-'),
              ),
              l.a.createElement(
                'tr',
                null,
                l.a.createElement('td', null, 'onFail'),
                l.a.createElement(
                  'td',
                  null,
                  '\u56fe\u7247\u9009\u62e9\u5931\u8d25',
                ),
                l.a.createElement(
                  'td',
                  null,
                  l.a.createElement('code', null, '(msg: string): void'),
                ),
                l.a.createElement('td', null, '-'),
              ),
            ),
          ),
        ),
      );
    };
  },
  okqA: function(e, n) {
    e.exports =
      'data:image/png;base64,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';
  },
  tB8F: function(e, n, t) {
    'use strict';
    t.r(n);
    t('pNMO'),
      t('4Brf'),
      t('tjZM'),
      t('3I1R'),
      t('7+kd'),
      t('KhsS'),
      t('gOCb'),
      t('a57n'),
      t('GXvd'),
      t('I1Gw'),
      t('gXIK'),
      t('lEou'),
      t('ma9I'),
      t('piMb'),
      t('TeQF'),
      t('BIHw'),
      t('XbcX'),
      t('QWBl'),
      t('pjDv'),
      t('yq1k'),
      t('yXV3'),
      t('4mDm'),
      t('uqXc'),
      t('2B1R'),
      t('E9XD'),
      t('9N29'),
      t('Junv'),
      t('+2oP'),
      t('Rfxz'),
      t('ToJy'),
      t('94Xl'),
      t('pDQq'),
      t('QGkA'),
      t('c9m3'),
      t('rOQg'),
      t('7+zs'),
      t('tW5y'),
      t('DEfu'),
      t('Tskq'),
      t('Uydy'),
      t('QFcT'),
      t('I9xj'),
      t('w1rZ'),
      t('toAj'),
      t('zKZe'),
      t('Eqjn'),
      t('5xtp'),
      t('T63A'),
      t('wfmh'),
      t('27RR'),
      t('v5b1'),
      t('W/eh'),
      t('07d7'),
      t('B6y2'),
      t('5s+n'),
      t('p532'),
      t('pv2x'),
      t('SuFq'),
      t('ftMj'),
      t('U3f4'),
      t('JfAA'),
      t('YGK4'),
      t('inlA'),
      t('JTJg'),
      t('Rm1S'),
      t('hDyC'),
      t('TZCg'),
      t('UxlC'),
      t('hByQ'),
      t('EnZy'),
      t('LKBx'),
      t('SYor'),
      t('HiXI'),
      t('7ueG'),
      t('z8NH'),
      t('SpvK'),
      t('/Yfv'),
      t('iwkZ'),
      t('FDzp'),
      t('XMab'),
      t('ilnZ'),
      t('hMMk'),
      t('+ywr'),
      t('IL/d'),
      t('gvgV'),
      t('7JcK'),
      t('s5qe'),
      t('cvf0'),
      t('ENF9'),
      t('H+LF'),
      t('66V8'),
      t('iIM6'),
      t('2tOg'),
      t('gYJb'),
      t('EDT/'),
      t('j+VE'),
      t('wgYD'),
      t('R3/m'),
      t('l/vG'),
      t('0q/z'),
      t('n5pg'),
      t('zu+z'),
      t('ihrJ'),
      t('Q7Pz'),
      t('unQa'),
      t('Vnov'),
      t('nIe3'),
      t('CUyW'),
      t('qc1c'),
      t('5921'),
      t('VOz1'),
      t('Thag'),
      t('9D6x'),
      t('cOPa'),
      t('vdRX'),
      t('KrxN'),
      t('SL6q'),
      t('lehK'),
      t('eO0o'),
      t('NqR8'),
      t('w7s6'),
      t('uWhJ'),
      t('WPzJ'),
      t('NV22'),
      t('ny8l'),
      t('a5/B'),
      t('vzwy'),
      t('pevA'),
      t('8go2'),
      t('DrvE'),
      t('kCkZ'),
      t('++zV'),
      t('Y4C7'),
      t('ZsH6'),
      t('vZi8'),
      t('5r1n'),
      t('sQ9d'),
      t('bdeN'),
      t('AwgR'),
      t('qgGA'),
      t('49+q'),
      t('AVoK'),
      t('hcok'),
      t('dNT4'),
      t('3uUd'),
      t('tijO'),
      t('1kQv'),
      t('ZY7T'),
      t('C1JJ'),
      t('lmH4'),
      t('Co1j'),
      t('5JV0'),
      t('ctDJ'),
      t('8r4s'),
      t('JwUS'),
      t('qaHo'),
      t('Si40'),
      t('BGb9'),
      t('fN96'),
      t('UzNg'),
      t('DhMN'),
      t('rZ3M'),
      t('apDx'),
      t('4XaG'),
      t('6V7H'),
      t('cfiF'),
      t('702D'),
      t('TJ79'),
      t('Z4nd'),
      t('8STE'),
      t('spTT'),
      t('rb3L'),
      t('FZtP'),
      t('3bBZ'),
      t('Ew+T'),
      t('n5b4'),
      t('Kz25'),
      t('vxnP'),
      t('mGGf'),
      t('VWci');
    var a = t('bCY9'),
      r = (t('9Ihz'), t('FfOG')),
      l = t('HyNC'),
      i = t('zlVK'),
      o = t('VTBJ');
    function c() {
      var e = [
        {
          path: '/',
          component: e =>
            t('q1tI').createElement(
              t('09U7').default,
              Object(o['a'])(
                Object(o['a'])(
                  {},
                  {
                    menus: {
                      '*': {
                        '*': [
                          { path: '/', title: 'README', meta: { order: null } },
                          {
                            title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
                            path: '/image-picker',
                            meta: {},
                            children: [],
                          },
                        ],
                      },
                    },
                    locales: [],
                    navs: {},
                    title: 'image-picker-mobile',
                    logo:
                      'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
                    mode: 'doc',
                    repoUrl: 'https://github.com/Yicoding/image-picker-mobile',
                  },
                ),
                e,
              ),
            ),
          routes: [
            {
              path: '/',
              component: t('gql7').default,
              exact: !0,
              meta: { locale: 'en-US', title: 'README', order: null },
              title: 'README',
            },
            {
              path: '/image-picker',
              component: t('mZby').default,
              exact: !0,
              meta: {
                filePath: 'src/image-picker/index.md',
                updatedTime: 1609723775291,
                group: {
                  title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
                  path: '/image-picker',
                },
                slugs: [
                  {
                    depth: 1,
                    value: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
                    heading: 'imagepicker-\u56fe\u7247\u9009\u62e9\u5668',
                  },
                  {
                    depth: 2,
                    value: '\u57fa\u672c\u7528\u6cd5',
                    heading: '\u57fa\u672c\u7528\u6cd5',
                  },
                  {
                    depth: 2,
                    value: '\u591a\u9009+\u5b9e\u65f6\u4e0a\u4f20',
                    heading: '\u591a\u9009\u5b9e\u65f6\u4e0a\u4f20',
                  },
                  {
                    depth: 2,
                    value:
                      '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668(\u5b50\u7ec4\u4ef6)',
                    heading:
                      '\u81ea\u5b9a\u4e49\u9009\u62e9\u5668\u5b50\u7ec4\u4ef6',
                  },
                  {
                    depth: 2,
                    value:
                      '\u591a\u9009+\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49',
                    heading:
                      '\u591a\u9009\u9ad8\u5ea6\u4e0e\u5bbd\u5ea6\u76f8\u7b49',
                  },
                  { depth: 2, value: 'API', heading: 'api' },
                  { depth: 3, value: 'ImagePicker', heading: 'imagepicker' },
                ],
                title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
              },
              title: 'ImagePicker \u56fe\u7247\u9009\u62e9\u5668',
            },
          ],
          title: 'image-picker-mobile',
        },
      ];
      return (
        a['a'].applyPlugins({
          key: 'patchRoutes',
          type: l['a'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var s = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return a['a'].applyPlugins({
          key: 'render',
          type: l['a'].compose,
          initialValue: () => {
            var n = a['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: l['a'].modify,
              initialValue: {
                routes: e.routes || c(),
                plugin: a['a'],
                history: Object(r['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                rootElement: 'root',
                defaultTitle: 'image-picker-mobile',
              },
            });
            return Object(i['renderClient'])(n);
          },
          args: e,
        });
      },
      d = s();
    n['default'] = d();
    window.g_umi = { version: '3.3.3' };
  },
});
