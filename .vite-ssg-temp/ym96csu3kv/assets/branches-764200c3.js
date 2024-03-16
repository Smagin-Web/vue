import { useSSRContext, mergeProps, ref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { _ as _export_sfc } from "../main.mjs";
import { C as CardPlace } from "./CardPlace-ea87436f.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
import "./MButtonOutlineBig-941f109f.js";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2821 1.5C8.09902 1.5 4.61523 4.70845 4.27159 8.87739C4.08657 11.122 4.77992 13.3508 6.20557 15.0943L10.9986 20.9561C11.7736 21.9039 13.2226 21.9039 13.9976 20.9561L18.7905 15.0943C20.2162 13.3508 20.9095 11.122 20.7246 8.87739C20.381 4.70845 16.8971 1.5 12.714 1.5H12.2821ZM12.498 13C14.431 13 15.998 11.433 15.998 9.5C15.998 7.567 14.431 6 12.498 6C10.5651 6 8.99805 7.567 8.99805 9.5C8.99805 11.433 10.5651 13 12.498 13Z" fill="white"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/IconLocation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconLocation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none"
  }, _attrs))}><path d="M19.7668 3.958C14.9337 3.48535 10.0661 3.48535 5.23299 3.958C4.79827 4.00051 4.4322 4.29865 4.29843 4.71071C3.76511 6.35363 3.76511 8.14581 4.29843 9.78873C4.4322 10.2008 4.79827 10.4989 5.23299 10.5414C10.0661 11.0141 14.9337 11.0141 19.7668 10.5414C20.2015 10.4989 20.5676 10.2008 20.7014 9.78873C21.2347 8.14581 21.2347 6.35363 20.7014 4.71071C20.5676 4.29865 20.2015 4.00051 19.7668 3.958Z" fill="#AE8C8E"></path><path d="M19.7668 13.458C14.9337 12.9853 10.0661 12.9853 5.23299 13.458C4.79827 13.5005 4.4322 13.7986 4.29843 14.2107C3.76511 15.8536 3.76511 17.6458 4.29843 19.2887C4.4322 19.7008 4.79827 19.9989 5.23299 20.0414C10.0661 20.5141 14.9337 20.5141 19.7668 20.0414C20.2015 19.9989 20.5676 19.7008 20.7014 19.2887C21.2347 17.6458 21.2347 15.8536 20.7014 14.2107C20.5676 13.7986 20.2015 13.5005 19.7668 13.458Z" fill="#AE8C8E"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/IconList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const SectionBranches_vue_vue_type_style_index_0_scoped_d2ea230d_lang = "";
const _sfc_main$2 = {
  __name: "SectionBranches",
  __ssrInlineRender: true,
  setup(__props) {
    const mapWrapper = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-branches" }, _attrs))} data-v-d2ea230d>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Филиалы"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-d2ea230d${_scopeId}>Филиалы</h1><div class="buttons" data-v-d2ea230d${_scopeId}><button class="button" data-v-d2ea230d${_scopeId}>`);
            _push2(ssrRenderComponent(IconLocation, { class: "button-icon" }, null, _parent2, _scopeId));
            _push2(` На карте </button><button class="button-outline" data-v-d2ea230d${_scopeId}>`);
            _push2(ssrRenderComponent(IconList, { class: "button-icon" }, null, _parent2, _scopeId));
            _push2(` Списком </button></div><div class="map-place" data-v-d2ea230d${_scopeId}><div style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden", "width": "calc(100% + 10px)", "height": "100%" })}" data-v-d2ea230d${_scopeId}><div class="map-wrapper" data-v-d2ea230d${_scopeId}><iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&amp;source=constructor" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="${ssrRenderStyle({ "position": "relative", "display": "block", "margin": "-2px" })}" data-v-d2ea230d${_scopeId}></iframe></div></div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Филиалы"] }),
              createVNode("h1", { class: "h-xxl heading" }, "Филиалы"),
              createVNode("div", { class: "buttons" }, [
                createVNode("button", { class: "button" }, [
                  createVNode(IconLocation, { class: "button-icon" }),
                  createTextVNode(" На карте ")
                ]),
                createVNode("button", { class: "button-outline" }, [
                  createVNode(IconList, { class: "button-icon" }),
                  createTextVNode(" Списком ")
                ])
              ]),
              createVNode("div", { class: "map-place" }, [
                createVNode("div", { style: { "position": "relative", "overflow": "hidden", "width": "calc(100% + 10px)", "height": "100%" } }, [
                  createVNode("div", {
                    class: "map-wrapper",
                    ref_key: "mapWrapper",
                    ref: mapWrapper
                  }, [
                    createVNode("iframe", {
                      src: "https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&source=constructor",
                      width: "100%",
                      height: "100%",
                      frameborder: "1",
                      allowfullscreen: "true",
                      style: { "position": "relative", "display": "block", "margin": "-2px" }
                    })
                  ], 512)
                ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/SectionBranches.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionBranches = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d2ea230d"]]);
const SectionBranchesList_vue_vue_type_style_index_0_scoped_ec8c54bd_lang = "";
const _sfc_main$1 = {
  __name: "SectionBranchesList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-ec8c54bd>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CardPlace, {
              class: "card",
              title: "Face Concept Лефортово"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CardPlace, {
                class: "card",
                title: "Face Concept Лефортово"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-list/SectionBranchesList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionBranchesList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ec8c54bd"]]);
const _sfc_main = {
  __name: "branches",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionBranches, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBranchesList, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionBranches),
              createVNode(SectionBranchesList)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/branches.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
