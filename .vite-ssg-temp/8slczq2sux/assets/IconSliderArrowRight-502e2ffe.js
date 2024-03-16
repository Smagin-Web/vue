import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><circle cx="30" cy="30" r="30" transform="rotate(90 30 30)" fill="#AE8C8E"></circle><path d="M20.3996 29.7688C20.3996 29.4195 20.518 29.1265 20.7546 28.8898C20.9913 28.6531 21.2839 28.5352 21.6324 28.536L35.4083 28.536L29.3986 22.5264C29.1521 22.2798 29.0288 21.9869 29.0288 21.6474C29.0288 21.308 29.1521 21.0155 29.3986 20.7697C29.6452 20.5232 29.9328 20.3999 30.2616 20.3999C30.5903 20.3999 30.8779 20.5232 31.1245 20.7697L39.2606 28.9058C39.3839 29.0291 39.471 29.1627 39.5219 29.3065C39.5729 29.4503 39.5988 29.6044 39.5996 29.7688C39.5996 29.9331 39.5737 30.0926 39.5219 30.2471C39.4702 30.4016 39.3831 30.5298 39.2606 30.6317L31.1245 38.7678C30.8779 39.0143 30.5903 39.1376 30.2616 39.1376C29.9328 39.1376 29.6452 39.0143 29.3986 38.7678C29.1521 38.5212 29.0288 38.2283 29.0288 37.8888C29.0288 37.5494 29.1521 37.2569 29.3986 37.0111L35.4083 31.0015L21.6324 31.0015C21.2831 31.0015 20.9901 30.8832 20.7534 30.6465C20.5167 30.4098 20.3988 30.1172 20.3996 29.7688Z" fill="white"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconSliderArrowRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconSliderArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconSliderArrowRight as I
};
