import { useSSRContext, mergeProps, unref, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { u as useModalsStore, M as MContainer } from "./ViewWrapper-3c15502d.js";
import { M as MButtonOutline } from "./MButtonOutline-8b835ebe.js";
import { M as MButton } from "./MButton-352890a7.js";
import { _ as _export_sfc } from "../main.mjs";
import { B as BigBadge } from "./BigBadge-63213c6d.js";
const _imports_0 = "/assets/more-c32c7e57.png";
const _imports_1 = "/assets/offer-3e03318a.png";
const CardInsideOfferPrice_vue_vue_type_style_index_0_scoped_82d22041_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-inside-prices" }, _attrs))} data-v-82d22041><div class="prices-old-wrapper" data-v-82d22041><h4 class="prices-old" data-v-82d22041>2000₽</h4></div><h4 class="prices-new" data-v-82d22041>0₽</h4></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardInsideOfferPrice.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardInsideOfferPrice = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-82d22041"]]);
const CardInsideOffer_vue_vue_type_style_index_0_scoped_698a0f59_lang = "";
const _sfc_main$2 = {
  __name: "CardInsideOffer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-inside" }, _attrs))} data-v-698a0f59><div data-v-698a0f59><h4 class="heading h-md" data-v-698a0f59> Первичный приём врача-косметолога<br data-v-698a0f59> + диагностика JANUS PRO.<br data-v-698a0f59> До конца февраля </h4>`);
      _push(ssrRenderComponent(CardInsideOfferPrice, { class: "prices" }, null, _parent));
      _push(`<div class="buttons" data-v-698a0f59>`);
      _push(ssrRenderComponent(MButton, {
        onClick: unref(store).openModalApplication
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Записаться на приём `);
          } else {
            return [
              createTextVNode(" Записаться на приём ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MButtonOutline, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="absolute-link" href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-698a0f59${_scopeId}></a> Задать вопрос `);
          } else {
            return [
              createVNode("a", {
                class: "absolute-link",
                href: "https://wa.me/79774122010",
                target: "_blank",
                rel: "noopener noreferrer"
              }),
              createTextVNode(" Задать вопрос ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardInsideOffer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardInsideOffer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-698a0f59"]]);
const SectionOfferList_vue_vue_type_style_index_0_scoped_3169f438_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))} data-v-3169f438><li class="list-item" data-v-3169f438><span data-v-3169f438>1</span><h5 class="text-lg" data-v-3169f438>Просто запишись к нам на приём</h5></li><li class="list-item" data-v-3169f438><span data-v-3169f438>2</span><h5 class="text-lg" data-v-3169f438> Пройди 30-ти минутную диагностику с помощью JANUS PRO </h5></li><li class="list-item" data-v-3169f438><span data-v-3169f438>3</span><h5 class="text-lg" data-v-3169f438> Получи чёткий план по возвращению коже её естественной красоты </h5></li></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-offer/SectionOfferList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionOfferList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3169f438"]]);
const SectionOffer_vue_vue_type_style_index_0_scoped_1cf6f6f2_lang = "";
const _sfc_main = {
  __name: "SectionOffer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-offer" }, _attrs))} data-v-1cf6f6f2><div class="section-offer-container" data-v-1cf6f6f2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-offer" data-v-1cf6f6f2${_scopeId}>`);
            _push2(ssrRenderComponent(BigBadge, { style: { "background": "#bfb0e9" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Диагностика`);
                } else {
                  return [
                    createTextVNode("Диагностика")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-content" data-v-1cf6f6f2${_scopeId}><div class="card-content-left" data-v-1cf6f6f2${_scopeId}><h3 class="h-l heading" data-v-1cf6f6f2${_scopeId}>Хочешь здоровую кожу?</h3>`);
            _push2(ssrRenderComponent(SectionOfferList, null, null, _parent2, _scopeId));
            _push2(`</div><div class="image-container" data-v-1cf6f6f2${_scopeId}><a href="https://www.youtube.com/watch?v=DK1uUY_BN68" target="_blank" rel="noopener noreferrer" data-v-1cf6f6f2${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="image-more" data-v-1cf6f6f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_1)} class="image" data-v-1cf6f6f2${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(CardInsideOffer, { class: "card-inside" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-offer" }, [
                createVNode(BigBadge, { style: { "background": "#bfb0e9" } }, {
                  default: withCtx(() => [
                    createTextVNode("Диагностика")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "card-content-left" }, [
                    createVNode("h3", { class: "h-l heading" }, "Хочешь здоровую кожу?"),
                    createVNode(SectionOfferList)
                  ]),
                  createVNode("div", { class: "image-container" }, [
                    createVNode("a", {
                      href: "https://www.youtube.com/watch?v=DK1uUY_BN68",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "image-more"
                      })
                    ]),
                    createVNode("img", {
                      src: _imports_1,
                      class: "image"
                    })
                  ])
                ]),
                createVNode(CardInsideOffer, { class: "card-inside" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-offer/SectionOffer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionOffer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cf6f6f2"]]);
export {
  SectionOffer as S
};
