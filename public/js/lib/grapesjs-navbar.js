/*! grapesjs-navbar - 0.1.5 */
!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n(require("grapesjs")))
    : "function" == typeof define && define.amd
    ? define(["grapesjs"], n)
    : "object" == typeof exports
    ? (exports["grapesjs-navbar"] = n(require("grapesjs")))
    : (e["grapesjs-navbar"] = n(e.grapesjs));
})(this, function (e) {
  return (function (e) {
    function n(t) {
      if (a[t]) return a[t].exports;
      var r = (a[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    var a = {};
    return (
      (n.m = e),
      (n.c = a),
      (n.d = function (e, a, t) {
        n.o(e, a) ||
          Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: t,
          });
      }),
      (n.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(a, "a", a), a;
      }),
      (n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (n.p = ""),
      n((n.s = 1))
    );
  })([
    function (e, n, a) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      (n.hNavbarRef = "h-navbar"),
        (n.navbarRef = "navbar"),
        (n.navbarItemsRef = "navbar-items"),
        (n.menuRef = "navbar-menu");
    },
    function (e, n, a) {
      "use strict";
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = a(2),
        i = t(r),
        l = a(3),
        s = t(l),
        o = a(4),
        d = t(o),
        u = a(0);
      n.default = i.default.plugins.add("gjs-navbar", function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n,
          t = {
            blocks: [u.hNavbarRef],
            defaultStyle: 1,
            navbarClsPfx: "navbar",
            labelNavbar: "Navbar",
            labelNavbarContainer: "Navbar Container",
            labelMenu: "Navbar Menu",
            labelMenuLink: "Menu link",
            labelBurger: "Burger",
            labelBurgerLine: "Burger Line",
            labelNavbarBlock: "Navbar",
            labelNavbarCategory: "Extra",
            labelHome: "Home",
            labelAbout: "About",
            labelContact: "Contact",
          };
        for (var r in t) r in a || (a[r] = t[r]);
        (0, s.default)(e, a), (0, d.default)(e, a);
      });
    },
    function (n, a) {
      n.exports = e;
    },
    function (e, n, a) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t = a(0);
      n.default = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n,
          r = e.BlockManager,
          i = a.navbarClsPfx || "navbar",
          l = a.defaultStyle
            ? "\n  <style>\n    ." +
              i +
              "-items-c {\n      display: inline-block;\n      float: right;\n    }\n\n    ." +
              i +
              " {\n      background-color: #222;\n      color: #ddd;\n      min-height: 50px;\n      width: 100%;\n    }\n\n    ." +
              i +
              "-container {\n      max-width: 950px;\n      margin: 0 auto;\n      width: 95%;\n    }\n\n    ." +
              i +
              '-container::after {\n      content: "";\n      clear: both;\n      display: block;\n    }\n\n    .' +
              i +
              "-brand {\n      vertical-align: top;\n      display: inline-block;\n      padding: 5px;\n      min-height: 50px;\n      min-width: 50px;\n      color: inherit;\n      text-decoration: none;\n    }\n\n    ." +
              i +
              "-menu {\n      padding: 10px 0;\n      display: block;\n      float: right;\n      margin: 0;\n    }\n\n    ." +
              i +
              "-menu-link {\n      margin: 0;\n      color: inherit;\n      text-decoration: none;\n      display: inline-block;\n      padding: 10px 15px;\n    }\n\n    ." +
              i +
              "-burger {\n      margin: 10px 0;\n      width: 45px;\n      padding: 5px 10px;\n      display: none;\n      float: right;\n      cursor: pointer;\n    }\n\n    ." +
              i +
              "-burger-line {\n      padding: 1px;\n      background-color: white;\n      margin: 5px 0;\n    }\n\n    @media (max-width: 768px) {\n      ." +
              i +
              "-burger {\n        display: block;\n      }\n\n      ." +
              i +
              "-items-c {\n        display: none;\n        width: 100%;\n      }\n\n      ." +
              i +
              "-menu {\n        width: 100%;\n      }\n\n      ." +
              i +
              "-menu-link {\n        display: block;\n      }\n    }\n  </style>\n  "
            : "";
        a.blocks.indexOf(t.hNavbarRef) >= 0 &&
          r.add(t.hNavbarRef, {
            label:
              '\n        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n          <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>\n          <rect class="gjs-block-svg-path" x="15" y="10" width="5" height="1"></rect>\n          <rect class="gjs-block-svg-path" x="15" y="13" width="5" height="1"></rect>\n          <rect class="gjs-block-svg-path" x="15" y="11.5" width="5" height="1"></rect>\n        </svg>\n        <div class="gjs-block-label">' +
              a.labelNavbarBlock +
              "</div>",
            category: a.labelNavbarCategory,
            content:
              '\n        <div class="' +
              i +
              '" data-gjs-droppable="false" data-gjs-custom-name="' +
              a.labelNavbar +
              '" data-gjs="' +
              t.navbarRef +
              '">\n          <div class="' +
              i +
              '-container" data-gjs-droppable="false" data-gjs-draggable="false"\n            data-gjs-removable="false" data-gjs-copyable="false" data-gjs-highlightable="false"\n            data-gjs-custom-name="' +
              a.labelNavbarContainer +
              '">\n\n            <a href="/" class="' +
              i +
              '-brand" data-gjs-droppable="true"></a>\n\n            <div class="' +
              i +
              '-burger" data-gjs-type="burger-menu">\n              <div class="' +
              i +
              '-burger-line" data-gjs-custom-name="' +
              a.labelBurgerLine +
              '" data-gjs-droppable="false" data-gjs-draggable="false"></div>\n              <div class="' +
              i +
              '-burger-line" data-gjs-custom-name="' +
              a.labelBurgerLine +
              '" data-gjs-droppable="false" data-gjs-draggable="false"></div>\n              <div class="' +
              i +
              '-burger-line" data-gjs-custom-name="' +
              a.labelBurgerLine +
              '" data-gjs-droppable="false" data-gjs-draggable="false"></div>\n            </div>\n\n            <div class="' +
              i +
              '-items-c" data-gjs="' +
              t.navbarItemsRef +
              '">\n              <nav class="' +
              i +
              '-menu" data-gjs="' +
              t.menuRef +
              '" data-gjs-custom-name="' +
              a.labelMenu +
              '">\n                <a href="#" class="' +
              i +
              '-menu-link" data-gjs-custom-name="' +
              a.labelMenuLink +
              '" data-gjs-draggable="[data-gjs=' +
              t.menuRef +
              ']">' +
              a.labelHome +
              '</a>\n                <a href="#" class="' +
              i +
              '-menu-link" data-gjs-custom-name="' +
              a.labelMenuLink +
              '" data-gjs-draggable="[data-gjs=' +
              t.menuRef +
              ']">' +
              a.labelAbout +
              '</a>\n                <a href="#" class="' +
              i +
              '-menu-link" data-gjs-custom-name="' +
              a.labelMenuLink +
              '" data-gjs-draggable="[data-gjs=' +
              t.menuRef +
              ']">' +
              a.labelContact +
              "</a>\n              </nav>\n            </div>\n\n          </div>\n        </div>\n        " +
              l +
              "\n      ",
          });
      };
    },
    function (e, n, a) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var t =
        Object.assign ||
        function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n];
            for (var t in a)
              Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
          }
          return e;
        };
      n.default = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n,
          r = e.DomComponents,
          i = r.getType("default"),
          l = i.model;
        r.addType("burger-menu", {
          model: l.extend(
            {
              defaults: t({}, l.prototype.defaults, {
                "custom-name": a.labelBurger,
                draggable: !1,
                droppable: !1,
                copyable: !1,
                removable: !1,
                script: function () {
                  var e,
                    n = 0,
                    a = (function () {
                      var e,
                        n = document.createElement("void"),
                        a = {
                          transition: "transitionend",
                          OTransition: "oTransitionEnd",
                          MozTransition: "transitionend",
                          WebkitTransition: "webkitTransitionEnd",
                        };
                      for (e in a) if (void 0 !== n.style[e]) return a[e];
                    })(),
                    t = function (e) {
                      var n = window.getComputedStyle(e),
                        a = n.display,
                        t =
                          (n.position,
                          n.visibility,
                          n.height,
                          parseInt(n["max-height"]));
                      if ("none" !== a && "0" !== t) return e.offsetHeight;
                      (e.style.height = "auto"),
                        (e.style.display = "block"),
                        (e.style.position = "absolute"),
                        (e.style.visibility = "hidden");
                      var r = e.offsetHeight;
                      return (
                        (e.style.height = ""),
                        (e.style.display = ""),
                        (e.style.position = ""),
                        (e.style.visibility = ""),
                        r
                      );
                    },
                    r = function (e) {
                      n = 1;
                      var a = t(e),
                        r = e.style;
                      (r.display = "block"),
                        (r.transition = "max-height 0.25s ease-in-out"),
                        (r.overflowY = "hidden"),
                        "" == r["max-height"] && (r["max-height"] = 0),
                        0 == parseInt(r["max-height"])
                          ? ((r["max-height"] = "0"),
                            setTimeout(function () {
                              r["max-height"] = a + "px";
                            }, 10))
                          : (r["max-height"] = "0");
                    },
                    i = function (t) {
                      if ((t.preventDefault(), !n)) {
                        var i = this.closest("[data-gjs=navbar]"),
                          l = i.querySelector("[data-gjs=navbar-items]");
                        r(l),
                          e ||
                            (l.addEventListener(a, function () {
                              n = 0;
                              var e = l.style;
                              0 == parseInt(e["max-height"]) &&
                                ((e.display = ""), (e["max-height"] = ""));
                            }),
                            (e = 1));
                      }
                    };
                  "gjs-collapse" in this || this.addEventListener("click", i),
                    (this["gjs-collapse"] = 1);
                },
              }),
            },
            {
              isComponent: function (e) {
                if (
                  e.getAttribute &&
                  "burger-menu" == e.getAttribute("data-gjs-type")
                )
                  return { type: "burger-menu" };
              },
            }
          ),
          view: i.view,
        });
      };
    },
  ]);
});
