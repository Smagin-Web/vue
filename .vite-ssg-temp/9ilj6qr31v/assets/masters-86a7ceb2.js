import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { C as CardMaster } from "./CardMaster-47d8227d.js";
import { M as MSelect } from "./MSelect-6e42ee88.js";
import { _ as _export_sfc } from "../main.mjs";
import "pinia";
import "emailjs-com";
import "./IconPlay-794340eb.js";
import "vite-ssg";
const SectionMasters_vue_vue_type_style_index_0_scoped_40a26584_lang = "";
const _sfc_main$1 = {
  __name: "SectionMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-masters" }, _attrs))} data-v-40a26584>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Специалисты"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-40a26584${_scopeId}>Специалисты</h1><p class="text-sm text" data-v-40a26584${_scopeId}> Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. </p>`);
            _push2(ssrRenderComponent(MSelect, {
              class: "section-masters-select",
              startItem: "Все специалисты",
              items: ["Специалисты AntiAcne", "Специалисты Lifting"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-40a26584${_scopeId}>`);
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Специалисты"] }),
              createVNode("h1", { class: "h-xxl heading" }, "Специалисты"),
              createVNode("p", { class: "text-sm text" }, " Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. "),
              createVNode(MSelect, {
                class: "section-masters-select",
                startItem: "Все специалисты",
                items: ["Специалисты AntiAcne", "Специалисты Lifting"]
              }),
              createVNode("div", { class: "cards" }, [
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/masters/SectionMasters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionMasters = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-40a26584"]]);
const _sfc_main = {
  __name: "masters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMasters)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/masters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
