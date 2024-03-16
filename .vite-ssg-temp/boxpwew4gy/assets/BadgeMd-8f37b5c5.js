import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const BadgeMd_vue_vue_type_style_index_0_scoped_981124cc_lang = "";
const _sfc_main = {
  __name: "BadgeMd",
  __ssrInlineRender: true,
  props: ["type"],
  setup(__props) {
    const props = __props;
    const className = `badge-${props.type}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["badge-md", className]
      }, _attrs))} data-v-981124cc><a href="#" class="badge-md-link" data-v-981124cc></a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/BadgeMd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BadgeMd = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-981124cc"]]);
export {
  BadgeMd as B
};
