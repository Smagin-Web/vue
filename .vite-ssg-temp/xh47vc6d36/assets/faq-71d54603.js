import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { F as FaqItem } from "./FaqItem-db08f79b.js";
import { M as MSelect } from "./MSelect-6e42ee88.js";
import { _ as _export_sfc } from "../main.mjs";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
const SectionFaq_vue_vue_type_style_index_0_scoped_82fb6448_lang = "";
const _sfc_main$1 = {
  __name: "SectionFaq",
  __ssrInlineRender: true,
  props: {
    items: {
      default: [{ title: "Заголовок", text: "Ответ на вопрос" }]
    }
  },
  setup(__props) {
    let indexActiveItem = ref(20);
    const props = __props;
    const openFaq = (index) => {
      indexActiveItem.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-faq" }, _attrs))} data-v-82fb6448>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Частые вопросы"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-82fb6448${_scopeId}>Частые вопросы</h1><div class="section-faq-search" data-v-82fb6448${_scopeId}>`);
            _push2(ssrRenderComponent(MSelect, null, null, _parent2, _scopeId));
            _push2(`</div><div class="questions" data-v-82fb6448${_scopeId}><!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              _push2(ssrRenderComponent(FaqItem, {
                key: item.text,
                onClick: () => openFaq(index),
                isActive: unref(indexActiveItem) === index,
                title: item.title,
                text: item.text
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Частые вопросы"] }),
              createVNode("h1", { class: "h-xxl heading" }, "Частые вопросы"),
              createVNode("div", { class: "section-faq-search" }, [
                createVNode(MSelect)
              ]),
              createVNode("div", { class: "questions" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                  return openBlock(), createBlock(FaqItem, {
                    key: item.text,
                    onClick: () => openFaq(index),
                    isActive: unref(indexActiveItem) === index,
                    title: item.title,
                    text: item.text
                  }, null, 8, ["onClick", "isActive", "title", "text"]);
                }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/faq/SectionFaq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionFaq = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82fb6448"]]);
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionFaq, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionFaq),
              createVNode(SectionHelp)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
