import { mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig } from "./ViewWrapper-3c15502d.js";
import { C as CardNews } from "./CardNews-b94ed9ae.js";
import { S as SliderVariant1 } from "./SliderVariant1-f48da4d7.js";
import { SwiperSlide } from "swiper/vue";
import { _ as _export_sfc } from "../main.mjs";
const SectionRead_vue_vue_type_style_index_0_scoped_d2a99271_lang = "";
const _sfc_main = {
  __name: "SectionRead",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      0: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      },
      1e3: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 2
      },
      1300: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 3
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-read" }, _attrs))} data-v-d2a99271>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-d2a99271${_scopeId}>Читай полезное и интересное</h3><h5 class="text-section section-read-text" data-v-d2a99271${_scopeId}> Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе ухаживать за кожей </h5>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Читай полезное и интересное"),
              createVNode("h5", { class: "text-section section-read-text" }, " Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе ухаживать за кожей ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, { breakpoints }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isArticle: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isArticle: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isArticle: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-d2a99271${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, { class: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Больше интересных статей`);
                } else {
                  return [
                    createTextVNode("Больше интересных статей")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "display": "flex", "justify-content": "center" } }, [
                createVNode(MButtonBig, { class: "button" }, {
                  default: withCtx(() => [
                    createTextVNode("Больше интересных статей")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-read/SectionRead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionRead = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2a99271"]]);
export {
  SectionRead as S
};
