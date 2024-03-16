import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="Group 3435"><rect id="Rectangle 187" width="12" height="12" rx="3" fill="#6D6364"></rect><path id="Rectangle 188" d="M8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5H12C12.8284 9.5 13.5 8.82843 13.5 8V4C13.5 3.17157 12.8284 2.5 12 2.5H8Z" fill="#6D6364" stroke="white"></path><circle id="Ellipse 334" cx="8" cy="6" r="1" fill="white"></circle></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconPay.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconPay = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    style: { "display": "block" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8.52941 4.47059C8.52941 4.1782 8.29238 3.94118 8 3.94118C7.70762 3.94118 7.47059 4.1782 7.47059 4.47059V8C7.47059 8.18254 7.56461 8.35216 7.71941 8.44894L9.83706 9.77247C10.085 9.92741 10.4116 9.85209 10.5666 9.60412C10.7215 9.35614 10.6462 9.02953 10.3982 8.87459L8.52941 7.70656V4.47059Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconClock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const CardInfo_vue_vue_type_style_index_0_scoped_8064c09e_lang = "";
const _sfc_main = {
  __name: "CardInfo",
  __ssrInlineRender: true,
  props: ["title", "icon", "text"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))} data-v-8064c09e>`);
      if (props.title) {
        _push(`<div class="info-title" data-v-8064c09e>`);
        if (__props.icon === "pay") {
          _push(ssrRenderComponent(IconPay, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.icon === "time") {
          _push(ssrRenderComponent(IconClock, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.text) {
        _push(`<h6 class="h-md" data-v-8064c09e>${ssrInterpolate(props.text)}</h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8064c09e"]]);
export {
  CardInfo as C
};
