import { withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { d as dataSlides, C as CustomSliderCardTemplate } from "./data-75396c81.js";
import { _ as _export_sfc } from "../main.mjs";
import "pinia";
import "emailjs-com";
import "./MButton-352890a7.js";
import "vite-ssg";
const SectionConcepts_vue_vue_type_style_index_0_scoped_45c892da_lang = "";
const _sfc_main$1 = {
  __name: "SectionConcepts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-45c892da>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="h-xxl concepts-title" data-v-45c892da${_scopeId}>Концепты</h1><p class="text-sm concepts-text" data-v-45c892da${_scopeId}> Мы разработали новый продукт в косметологии — 8 концептов твоей красоты </p><div class="cards" data-v-45c892da${_scopeId}><!--[-->`);
            ssrRenderList(unref(dataSlides), (item, index) => {
              _push2(ssrRenderComponent(CustomSliderCardTemplate, {
                key: index,
                title: item.title,
                subtitle: item.subtitle,
                "badge-name": item.badgeName,
                "badge-color": item.badgeColor,
                "badge-number": item.badgeNumber,
                p1: item.p1,
                p2: item.p2,
                iconSrc: item.iconSrc,
                iconBigSrc: item.iconBigSrc,
                iconPng: item.iconPng,
                link: item.link
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h1", { class: "h-xxl concepts-title" }, "Концепты"),
              createVNode("p", { class: "text-sm concepts-text" }, " Мы разработали новый продукт в косметологии — 8 концептов твоей красоты "),
              createVNode("div", { class: "cards" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(dataSlides), (item, index) => {
                  return openBlock(), createBlock(CustomSliderCardTemplate, {
                    key: index,
                    title: item.title,
                    subtitle: item.subtitle,
                    "badge-name": item.badgeName,
                    "badge-color": item.badgeColor,
                    "badge-number": item.badgeNumber,
                    p1: item.p1,
                    p2: item.p2,
                    iconSrc: item.iconSrc,
                    iconBigSrc: item.iconBigSrc,
                    iconPng: item.iconPng,
                    link: item.link
                  }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/SectionConcepts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionConcepts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45c892da"]]);
const _sfc_main = {
  __name: "concepts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionConcepts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionConcepts)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/concepts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
