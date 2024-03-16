import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as ViewWrapper, M as MContainer } from "./ViewWrapper-3c15502d.js";
import { _ as _export_sfc } from "../main.mjs";
import "pinia";
import "emailjs-com";
import "vite-ssg";
const nav_vue_vue_type_style_index_0_scoped_0c6add54_lang = "";
const _sfc_main = {
  __name: "nav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(MContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="links" data-v-0c6add54${_scopeId2}><a class="link" href="/" data-v-0c6add54${_scopeId2}>1) Главная</a><a class="link" href="/tech" data-v-0c6add54${_scopeId2}>2) Карточка аппарата</a><a class="link" href="/procedures" data-v-0c6add54${_scopeId2}>3) Процедуры</a><a class="link" href="/inside" data-v-0c6add54${_scopeId2}>4) AntiAcne Concept</a><a class="link" href="/prices" data-v-0c6add54${_scopeId2}>5) Цены</a><a class="link" href="/devices" data-v-0c6add54${_scopeId2}>6) Аппараты</a><a class="link" href="/media" data-v-0c6add54${_scopeId2}>7) Медиа</a><a class="link" href="/faq" data-v-0c6add54${_scopeId2}>8) Faq</a><a class="link" href="/masters" data-v-0c6add54${_scopeId2}>9) Специалисты</a><a class="link" href="/master" data-v-0c6add54${_scopeId2}>10) Карточка специалиста</a><a class="link" href="/review" data-v-0c6add54${_scopeId2}>11) Отзывы</a><a class="link" href="/review-inside" data-v-0c6add54${_scopeId2}>12) Отзыв - карточка</a><a class="link" href="/about" data-v-0c6add54${_scopeId2}>13) О клинике</a><a class="link" href="/contacts" data-v-0c6add54${_scopeId2}>14) Контакты</a><a class="link" href="/branches" data-v-0c6add54${_scopeId2}>15) Филиалы</a><a class="link" href="/media/1" data-v-0c6add54${_scopeId2}>16) Медиа - карточка</a><a class="link" href="/policy" data-v-0c6add54${_scopeId2}>17) Политика</a><a class="link" href="/concept/personal" data-v-0c6add54${_scopeId2}>personal</a><a class="link" href="/concept/red" data-v-0c6add54${_scopeId2}>red</a><a class="link" href="/concept/hydro" data-v-0c6add54${_scopeId2}>hydro</a><a class="link" href="/concept/bright" data-v-0c6add54${_scopeId2}>bright</a><a class="link" href="/concept/lifting" data-v-0c6add54${_scopeId2}>lifting</a><a class="link" href="/concept/detox" data-v-0c6add54${_scopeId2}>detox</a><a class="link" href="/concept/clear" data-v-0c6add54${_scopeId2}>clear</a><a class="link" href="/concept/antiacne" data-v-0c6add54${_scopeId2}>antiacne</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "links" }, [
                      createVNode("a", {
                        class: "link",
                        href: "/"
                      }, "1) Главная"),
                      createVNode("a", {
                        class: "link",
                        href: "/tech"
                      }, "2) Карточка аппарата"),
                      createVNode("a", {
                        class: "link",
                        href: "/procedures"
                      }, "3) Процедуры"),
                      createVNode("a", {
                        class: "link",
                        href: "/inside"
                      }, "4) AntiAcne Concept"),
                      createVNode("a", {
                        class: "link",
                        href: "/prices"
                      }, "5) Цены"),
                      createVNode("a", {
                        class: "link",
                        href: "/devices"
                      }, "6) Аппараты"),
                      createVNode("a", {
                        class: "link",
                        href: "/media"
                      }, "7) Медиа"),
                      createVNode("a", {
                        class: "link",
                        href: "/faq"
                      }, "8) Faq"),
                      createVNode("a", {
                        class: "link",
                        href: "/masters"
                      }, "9) Специалисты"),
                      createVNode("a", {
                        class: "link",
                        href: "/master"
                      }, "10) Карточка специалиста"),
                      createVNode("a", {
                        class: "link",
                        href: "/review"
                      }, "11) Отзывы"),
                      createVNode("a", {
                        class: "link",
                        href: "/review-inside"
                      }, "12) Отзыв - карточка"),
                      createVNode("a", {
                        class: "link",
                        href: "/about"
                      }, "13) О клинике"),
                      createVNode("a", {
                        class: "link",
                        href: "/contacts"
                      }, "14) Контакты"),
                      createVNode("a", {
                        class: "link",
                        href: "/branches"
                      }, "15) Филиалы"),
                      createVNode("a", {
                        class: "link",
                        href: "/media/1"
                      }, "16) Медиа - карточка"),
                      createVNode("a", {
                        class: "link",
                        href: "/policy"
                      }, "17) Политика"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/personal"
                      }, "personal"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/red"
                      }, "red"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/hydro"
                      }, "hydro"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/bright"
                      }, "bright"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/lifting"
                      }, "lifting"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/detox"
                      }, "detox"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/clear"
                      }, "clear"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/antiacne"
                      }, "antiacne")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(MContainer, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "links" }, [
                    createVNode("a", {
                      class: "link",
                      href: "/"
                    }, "1) Главная"),
                    createVNode("a", {
                      class: "link",
                      href: "/tech"
                    }, "2) Карточка аппарата"),
                    createVNode("a", {
                      class: "link",
                      href: "/procedures"
                    }, "3) Процедуры"),
                    createVNode("a", {
                      class: "link",
                      href: "/inside"
                    }, "4) AntiAcne Concept"),
                    createVNode("a", {
                      class: "link",
                      href: "/prices"
                    }, "5) Цены"),
                    createVNode("a", {
                      class: "link",
                      href: "/devices"
                    }, "6) Аппараты"),
                    createVNode("a", {
                      class: "link",
                      href: "/media"
                    }, "7) Медиа"),
                    createVNode("a", {
                      class: "link",
                      href: "/faq"
                    }, "8) Faq"),
                    createVNode("a", {
                      class: "link",
                      href: "/masters"
                    }, "9) Специалисты"),
                    createVNode("a", {
                      class: "link",
                      href: "/master"
                    }, "10) Карточка специалиста"),
                    createVNode("a", {
                      class: "link",
                      href: "/review"
                    }, "11) Отзывы"),
                    createVNode("a", {
                      class: "link",
                      href: "/review-inside"
                    }, "12) Отзыв - карточка"),
                    createVNode("a", {
                      class: "link",
                      href: "/about"
                    }, "13) О клинике"),
                    createVNode("a", {
                      class: "link",
                      href: "/contacts"
                    }, "14) Контакты"),
                    createVNode("a", {
                      class: "link",
                      href: "/branches"
                    }, "15) Филиалы"),
                    createVNode("a", {
                      class: "link",
                      href: "/media/1"
                    }, "16) Медиа - карточка"),
                    createVNode("a", {
                      class: "link",
                      href: "/policy"
                    }, "17) Политика"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/personal"
                    }, "personal"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/red"
                    }, "red"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/hydro"
                    }, "hydro"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/bright"
                    }, "bright"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/lifting"
                    }, "lifting"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/detox"
                    }, "detox"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/clear"
                    }, "clear"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/antiacne"
                    }, "antiacne")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/nav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c6add54"]]);
export {
  nav as default
};
