import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { I as IconPlay } from "./IconPlay-794340eb.js";
import { _ as _export_sfc } from "../main.mjs";
const _imports_0 = "/assets/Avatar-64292437.png";
const CardMaster_vue_vue_type_style_index_0_scoped_c66d982d_lang = "";
const _sfc_main = {
  __name: "CardMaster",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-master" }, _attrs))} data-v-c66d982d><a href="https://youtube.com" target="_blank" data-v-c66d982d><div class="card-img-wrapper" data-v-c66d982d><img${ssrRenderAttr("src", _imports_0)} class="card-img" data-v-c66d982d>`);
      _push(ssrRenderComponent(IconPlay, { class: "card-icon" }, null, _parent));
      _push(`</div></a><a href="https://youtube.com" target="_blank" data-v-c66d982d><h5 class="h-md card-heading" data-v-c66d982d>Ольга Заика</h5></a><a href="https://youtube.com" target="_blank" data-v-c66d982d><p class="text-sm" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c66d982d> Главный врач, врач-косметолог </p></a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/CardMaster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardMaster = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c66d982d"]]);
export {
  CardMaster as C
};
