import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const main = "";
const typography = "";
const swiper = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_noindex = resolveComponent("noindex");
  const _component_RouterView = resolveComponent("RouterView");
  _push(ssrRenderComponent(_component_noindex, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_RouterView)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const createApp = ViteSSG(
  App,
  // { routes },
  ({ app, router: router2, initialState }) => {
    createPinia();
    app.use(createPinia());
  }
);
export {
  createApp
};
