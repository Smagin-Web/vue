import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { C as CardPlace } from "./CardPlace-ea87436f.js";
import { _ as _export_sfc } from "../main.mjs";
const SectionPlaces_vue_vue_type_style_index_0_scoped_723fcda9_lang = "";
const _sfc_main = {
  __name: "SectionPlaces",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-places" }, _attrs))} data-v-723fcda9>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl title" data-v-723fcda9${_scopeId}>Наши филиалы</h3><h5 class="text-lg text" data-v-723fcda9${_scopeId}>Атмосферные пространства комфорта и красоты</h5><div class="cards" data-v-723fcda9${_scopeId}>`);
            _push2(ssrRenderComponent(CardPlace, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardPlace, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl title" }, "Наши филиалы"),
              createVNode("h5", { class: "text-lg text" }, "Атмосферные пространства комфорта и красоты"),
              createVNode("div", { class: "cards" }, [
                createVNode(CardPlace),
                createVNode(CardPlace)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-places/SectionPlaces.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionPlaces = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-723fcda9"]]);
export {
  SectionPlaces as S
};
