import { useSSRContext, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
import "./swiper-c12304a9.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { C as CardMaster } from "./CardMaster-47d8227d.js";
import "./MButtonOutline-8b835ebe.js";
import { _ as _export_sfc } from "../main.mjs";
import { M as MButtonOutlineBig } from "./MButtonOutlineBig-941f109f.js";
const SwiperMasters_vue_vue_type_style_index_0_scoped_9df8d3a8_lang = "";
const _sfc_main$2 = {
  __name: "SwiperMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        class: "swiper-custom",
        "space-between": 14,
        slidesPerView: "auto"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/SwiperMasters.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SwiperMasters = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9df8d3a8"]]);
const SectionMasters_vue_vue_type_style_index_0_scoped_3eb319a7_lang = "";
const _sfc_main$1 = {
  __name: "SectionMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-masters" }, _attrs))} data-v-3eb319a7>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-3eb319a7${_scopeId}>Давай знакомиться</h3><h5 class="text-lg section-subtitle" data-v-3eb319a7${_scopeId}> Врачи-косметологи Face Concept помогут вернуть твоей коже молодость и красоту! </h5>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Давай знакомиться"),
              createVNode("h5", { class: "text-lg section-subtitle" }, " Врачи-косметологи Face Concept помогут вернуть твоей коже молодость и красоту! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, { class: "container-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SwiperMasters, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(SwiperMasters, null, {
                default: withCtx(() => [
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
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
            _push2(`<div class="section-button-wrapper" data-v-3eb319a7${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonOutlineBig, { class: "section-button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Показать ещё врачей `);
                } else {
                  return [
                    createTextVNode(" Показать ещё врачей ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "section-button-wrapper" }, [
                createVNode(MButtonOutlineBig, { class: "section-button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Показать ещё врачей ")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/SectionMasters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionMasters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3eb319a7"]]);
const BigBadge_vue_vue_type_style_index_0_scoped_d2c97bcb_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h6${ssrRenderAttrs(mergeProps({ class: "big-badge" }, _attrs))} data-v-d2c97bcb>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h6>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/big-badge/BigBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BigBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d2c97bcb"]]);
export {
  BigBadge as B,
  SectionMasters as S
};
