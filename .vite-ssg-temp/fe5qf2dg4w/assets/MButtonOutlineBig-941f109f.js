import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const MButtonOutlineBig_vue_vue_type_style_index_0_scoped_d1cddbde_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "main-button-outline" }, _attrs))} data-v-d1cddbde>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButtonOutlineBig.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MButtonOutlineBig = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d1cddbde"]]);
export {
  MButtonOutlineBig as M
};
