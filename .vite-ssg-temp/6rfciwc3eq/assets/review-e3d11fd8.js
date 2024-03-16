import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { C as CardReviewMaster } from "./CardReviewMaster-c4d61f16.js";
import { I as IconSliderArrowRight } from "./IconSliderArrowRight-502e2ffe.js";
import { _ as _export_sfc } from "../main.mjs";
import { M as MSelect } from "./MSelect-6e42ee88.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
const PaginationItems_vue_vue_type_style_index_0_scoped_b0b004f7_lang = "";
const _sfc_main$2 = {
  __name: "PaginationItems",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-b0b004f7><div class="pagination-button-wrapper" data-v-b0b004f7>`);
      _push(ssrRenderComponent(IconSliderArrowRight, { class: "pagination-button-prev pagination-button-arrow" }, null, _parent));
      _push(`<a class="pagination-button-link" href="#" data-v-b0b004f7></a></div><button type="button" class="pagination-button pagination-button-active" data-v-b0b004f7> 1 </button><button type="button" class="pagination-button" data-v-b0b004f7>2</button><button type="button" class="pagination-button" data-v-b0b004f7>3</button><button type="button" class="pagination-button" data-v-b0b004f7>4</button><button type="button" class="pagination-button" data-v-b0b004f7>...</button><button type="button" class="pagination-button" data-v-b0b004f7>11</button><button type="button" class="pagination-button" data-v-b0b004f7>12</button><div class="pagination-button-wrapper" data-v-b0b004f7>`);
      _push(ssrRenderComponent(IconSliderArrowRight, { class: "pagination-button-next pagination-button-arrow" }, null, _parent));
      _push(`<a class="pagination-button-link" href="#" data-v-b0b004f7></a></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/PaginationItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PaginationItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b0b004f7"]]);
const SectionReviewAll_vue_vue_type_style_index_0_scoped_7a40e9ca_lang = "";
const _sfc_main$1 = {
  __name: "SectionReviewAll",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review-all" }, _attrs))} data-v-7a40e9ca>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Отзывы"] }, null, _parent2, _scopeId));
            _push2(`<h3 class="h-xxl heading" data-v-7a40e9ca${_scopeId}>Отзывы</h3><div class="content" data-v-7a40e9ca${_scopeId}><p class="text-sm content-text" data-v-7a40e9ca${_scopeId}> Выберите специалиста, о котором хотите прочитать или оставить отзыв </p>`);
            _push2(ssrRenderComponent(MSelect, {
              class: "section-review-all-select",
              "start-item": "Все отзывы",
              items: ["Отзывы AntiAcne", "Отзывы Lifting"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Оставить отзыв`);
                } else {
                  return [
                    createTextVNode("Оставить отзыв")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="cards" data-v-7a40e9ca${_scopeId}>`);
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master",
              badge: "yandex"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master",
              badge: "2gis"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardReviewMaster, {
              "master-name": "Заика Ольга",
              class: "card-master"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(PaginationItems, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Отзывы"] }),
              createVNode("h3", { class: "h-xxl heading" }, "Отзывы"),
              createVNode("div", { class: "content" }, [
                createVNode("p", { class: "text-sm content-text" }, " Выберите специалиста, о котором хотите прочитать или оставить отзыв "),
                createVNode(MSelect, {
                  class: "section-review-all-select",
                  "start-item": "Все отзывы",
                  items: ["Отзывы AntiAcne", "Отзывы Lifting"]
                }),
                createVNode(MButtonBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Оставить отзыв")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "cards" }, [
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master"
                }),
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master"
                }),
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master",
                  badge: "yandex"
                }),
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master"
                }),
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master",
                  badge: "2gis"
                }),
                createVNode(CardReviewMaster, {
                  "master-name": "Заика Ольга",
                  class: "card-master"
                })
              ]),
              createVNode(PaginationItems)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review/SectionReviewAll.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionReviewAll = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a40e9ca"]]);
const _sfc_main = {
  __name: "review",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionReviewAll, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionReviewAll)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
