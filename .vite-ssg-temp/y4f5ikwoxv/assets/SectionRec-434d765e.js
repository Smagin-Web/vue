import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { a as MButtonBig, M as MContainer } from "./ViewWrapper-3c15502d.js";
import { C as CardInfo } from "./CardInfo-493a4eeb.js";
import { _ as _export_sfc } from "../main.mjs";
import { SwiperSlide } from "swiper/vue";
import { S as SliderVariant1 } from "./SliderVariant1-f48da4d7.js";
const _imports_0 = "/assets/picture-3c5aa1c6.png";
const SectionRecCard_vue_vue_type_style_index_0_scoped_2cda2cbd_lang = "";
const _sfc_main$1 = {
  __name: "SectionRecCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-rec" }, _attrs))} data-v-2cda2cbd><div class="card-image-wrapper" data-v-2cda2cbd><img class="card-image"${ssrRenderAttr("src", _imports_0)} alt="" data-v-2cda2cbd></div><p class="card-text" data-v-2cda2cbd> Увлажняющий крем-филлер для лица с гиалуроновым наполнителем Hydro Active Hyaluron Refill Cream — DR.GRANDEL </p>`);
      _push(ssrRenderComponent(CardInfo, { text: "6 350₽" }, null, _parent));
      _push(`<div class="card-button-wrapper" data-v-2cda2cbd>`);
      _push(ssrRenderComponent(MButtonBig, { class: "card-button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Хочу`);
          } else {
            return [
              createTextVNode("Хочу")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-rec/SectionRecCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionRecCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2cda2cbd"]]);
const SectionRec_vue_vue_type_style_index_0_scoped_c373d779_lang = "";
const _sfc_main = {
  __name: "SectionRec",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-procedures" }, _attrs))} data-v-c373d779>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl heading" data-v-c373d779${_scopeId}>Рекомендованная косметика</h3>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl heading" }, "Рекомендованная косметика")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-rec/SectionRec.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionRec = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c373d779"]]);
export {
  SectionRec as S
};
