import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { S as SectionReviewPacients } from "./SectionReviewPacients-0ee2c30f.js";
import { S as SectionCircles, a as SectionReview } from "./SectionReview-dd77bd4a.js";
import { S as SectionMasters } from "./BigBadge-63213c6d.js";
import { S as SectionOffer } from "./SectionOffer-d75924a6.js";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { M as MButtonOutlineBig } from "./MButtonOutlineBig-941f109f.js";
import { _ as _export_sfc } from "../main.mjs";
import { C as CardInfo } from "./CardInfo-493a4eeb.js";
import { C as CardLink } from "./CardLink-77a26580.js";
import { W as WidgetFilters } from "./WidgetFilters-657ed67a.js";
import "pinia";
import "emailjs-com";
import "./IconPlay-794340eb.js";
import "./swiper-c12304a9.js";
import "swiper/vue";
import "./CardMaster-47d8227d.js";
import "./MButtonOutline-8b835ebe.js";
import "./MButton-352890a7.js";
import "vite-ssg";
const _imports_0 = "/assets/picture-251501ed.png";
const SectionProceduresBadge_vue_vue_type_style_index_0_scoped_6557ba6c_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "#",
    style: { "display": "flex" }
  }, _attrs))} data-v-6557ba6c><span class="badge" data-v-6557ba6c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></a>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProceduresBadge.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionProceduresBadge = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6557ba6c"]]);
const SectionProceduresCard_vue_vue_type_style_index_0_scoped_f6347a6c_lang = "";
const _sfc_main$2 = {
  __name: "SectionProceduresCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f6347a6c><div class="card-image-wrap" data-v-f6347a6c><img${ssrRenderAttr("src", _imports_0)} class="card-image" alt="" data-v-f6347a6c></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px" })}" data-v-f6347a6c>`);
      _push(ssrRenderComponent(SectionProceduresBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SectionProceduresBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detox Concept`);
          } else {
            return [
              createTextVNode("Detox Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h5 class="card-heading h-sm-ultra" data-v-f6347a6c> Аппаратная чистка лица Hydro Peel Plus </h5><p class="card-text text-sm" data-v-f6347a6c> Красота и здоровье кожи надолго, всего за одну процедуру. </p>`);
      _push(ssrRenderComponent(CardInfo, {
        icon: "time",
        title: "Время процедуры",
        text: "1 час 30 минут"
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo, {
        icon: "pay",
        title: "Стоимость",
        text: "4 500₽"
      }, null, _parent));
      _push(ssrRenderComponent(CardLink, { class: "card-link" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProceduresCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionProceduresCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f6347a6c"]]);
const SectionCategories_vue_vue_type_style_index_0_scoped_6a2a131d_lang = "";
const _sfc_main$1 = {
  __name: "SectionCategories",
  __ssrInlineRender: true,
  setup(__props) {
    const filtersList = [
      "Все процедуры",
      "AntiAcne Concept",
      "Clear Concept",
      "Detox Concept",
      "Lifting Concept",
      "Brigth Concept",
      "Hydro Concept",
      "Red Concept",
      "Personal Concept"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-categories" }, _attrs))} data-v-6a2a131d>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Процедуры"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl section-categories-title" data-v-6a2a131d${_scopeId}>Процедуры</h1>`);
            _push2(ssrRenderComponent(WidgetFilters, { items: filtersList }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-6a2a131d${_scopeId}>`);
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(`</div><div class="button-wrapper" data-v-6a2a131d${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonOutlineBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Показать ещё процедуры`);
                } else {
                  return [
                    createTextVNode("Показать ещё процедуры")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Процедуры"] }),
              createVNode("h1", { class: "h-xxl section-categories-title" }, "Процедуры"),
              createVNode(WidgetFilters, { items: filtersList }),
              createVNode("div", { class: "cards" }, [
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard)
              ]),
              createVNode("div", { class: "button-wrapper" }, [
                createVNode(MButtonOutlineBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Показать ещё процедуры")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/procedures/section-categories/SectionCategories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionCategories = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a2a131d"]]);
const _sfc_main = {
  __name: "procedures",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionCategories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewPacients, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionCategories),
              createVNode(SectionOffer),
              createVNode(SectionMasters),
              createVNode(SectionReviewPacients),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionHelp)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/procedures.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
