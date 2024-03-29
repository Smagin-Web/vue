import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "140",
    height: "80",
    viewBox: "0 0 140 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="140" height="80" rx="40" fill="#AE8C8E"></rect><path d="M57.9811 52.0209C57.5461 51.5859 57.3295 51.0729 57.3311 50.4818C57.3327 49.8906 57.5522 49.3774 57.9895 48.9421L75.2393 31.6924L60.2303 31.7335C59.6146 31.7352 59.0953 31.5247 58.6727 31.102C58.25 30.6793 58.04 30.1606 58.0427 29.5459C58.0444 28.9301 58.251 28.4164 58.6627 28.0048C59.0743 27.5932 59.588 27.3865 60.2037 27.3848L80.5236 27.3291C80.8315 27.3283 81.1069 27.3855 81.3498 27.5008C81.5927 27.6161 81.817 27.7756 82.0227 27.9793C82.2274 28.184 82.3935 28.4149 82.5211 28.6722C82.6487 28.9294 82.6993 29.1981 82.6729 29.4784L82.6172 49.7983C82.6155 50.414 82.4088 50.9277 81.9972 51.3393C81.5856 51.751 81.0719 51.9576 80.4561 51.9593C79.8404 51.961 79.3211 51.7505 78.8985 51.3278C78.4758 50.9051 78.2658 50.3864 78.2685 49.7717L78.3096 34.7627L61.0599 52.0125C60.6225 52.4498 60.1083 52.6693 59.5172 52.6709C58.926 52.6725 58.414 52.4559 57.9811 52.0209Z" fill="white"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconCardLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconCardLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const CardLink_vue_vue_type_style_index_0_scoped_794ec6da_lang = "";
const _sfc_main = {
  __name: "CardLink",
  __ssrInlineRender: true,
  props: ["path"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "card-link",
        href: props.path
      }, _attrs))} data-v-794ec6da>`);
      _push(ssrRenderComponent(IconCardLink, { class: "card-link-icon" }, null, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-794ec6da"]]);
export {
  CardLink as C
};
