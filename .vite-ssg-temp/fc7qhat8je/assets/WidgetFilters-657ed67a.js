import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const Filter_vue_vue_type_style_index_0_scoped_c6645c24_lang = "";
const _sfc_main$1 = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: ["active"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["filter", { active: props.active }]
      }, _attrs))} data-v-c6645c24>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Filter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c6645c24"]]);
const WidgetFilters_vue_vue_type_style_index_0_scoped_0858234a_lang = "";
const _sfc_main = {
  __name: "WidgetFilters",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget-filters" }, _attrs))} data-v-0858234a><!--[-->`);
      ssrRenderList(props.items, (item, index) => {
        _push(ssrRenderComponent(Filter, {
          active: index === 0,
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/widgets/filters/WidgetFilters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WidgetFilters = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0858234a"]]);
export {
  WidgetFilters as W
};
