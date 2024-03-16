import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "76",
    height: "51",
    viewBox: "0 0 76 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="76" height="51" rx="25.5" fill="#5081FF"></rect><path d="M46.7827 22.4783L32.8027 13.4952C30.3924 12.1228 27.5 13.7448 27.5 16.6144V34.4558C27.5 37.2007 30.3924 38.9474 32.8027 37.4502L46.7827 28.467C49.0724 27.0946 49.0724 23.8508 46.7827 22.4783Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconPlay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconPlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconPlay as I
};
