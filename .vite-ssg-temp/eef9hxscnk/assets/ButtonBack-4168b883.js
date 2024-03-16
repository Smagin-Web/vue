import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const ButtonBack_vue_vue_type_style_index_0_scoped_586ac3c2_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "button-back"
  }, _attrs))} data-v-586ac3c2><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-586ac3c2><path d="M16 8.00023C16 8.2913 15.9014 8.53545 15.7041 8.73269C15.5069 8.92993 15.2631 9.02821 14.9727 9.02752L3.49278 9.02752L8.5008 14.0355C8.70626 14.241 8.80899 14.4852 8.80899 14.768C8.80899 15.0508 8.70626 15.2947 8.5008 15.4994C8.29534 15.7049 8.05564 15.8076 7.7817 15.8076C7.50776 15.8076 7.26806 15.7049 7.0626 15.4994L0.282503 8.71934C0.179775 8.61661 0.10718 8.50532 0.0647185 8.38547C0.0222573 8.26562 0.000684523 8.13721 -3.41272e-07 8.00024C-3.47259e-07 7.86326 0.0215724 7.7304 0.0647184 7.60165C0.107864 7.47289 0.180459 7.36606 0.282503 7.28113L7.0626 0.501039C7.26806 0.295581 7.50776 0.192852 7.7817 0.192852C8.05564 0.192852 8.29534 0.295581 8.5008 0.501039C8.70626 0.706497 8.80899 0.950648 8.80899 1.23349C8.80899 1.51634 8.70626 1.76015 8.5008 1.96492L3.49278 6.97295L14.9727 6.97295C15.2638 6.97295 15.5079 7.07157 15.7052 7.26881C15.9024 7.46604 16.0007 7.70985 16 8.00023Z" fill="#AE8C8E" data-v-586ac3c2></path></svg>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonBack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ButtonBack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-586ac3c2"]]);
export {
  ButtonBack as B
};
