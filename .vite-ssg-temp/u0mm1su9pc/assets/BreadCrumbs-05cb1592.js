import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const BreadCrumbs_vue_vue_type_style_index_0_scoped_5fbec516_lang = "";
const _sfc_main = {
  __name: "BreadCrumbs",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-5fbec516><!--[-->`);
      ssrRenderList(props.items, (item, index) => {
        _push(`<p class="item" data-v-5fbec516><a class="item-link" href="#" data-v-5fbec516></a> ${ssrInterpolate(item)} `);
        if (index < props.items.length - 1) {
          _push(`<svg class="item-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none" data-v-5fbec516><path d="M7.7197 1.28033C7.4268 0.987437 7.4268 0.512558 7.7197 0.219668C8.0126 -0.0732225 8.4874 -0.0732225 8.7803 0.219668L12.7803 4.2197C13.0732 4.5126 13.0732 4.9874 12.7803 5.2803L8.7803 9.2803C8.4874 9.5732 8.0126 9.5732 7.7197 9.2803C7.4268 8.9874 7.4268 8.5126 7.7197 8.2197L10.4393 5.5H0.75C0.33579 5.5 0 5.1642 0 4.75C0 4.3358 0.33579 4 0.75 4H10.4393L7.7197 1.28033Z" fill="#6D6364" data-v-5fbec516></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/BreadCrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BreadCrumbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5fbec516"]]);
export {
  BreadCrumbs as B
};
