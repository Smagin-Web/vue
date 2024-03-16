import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { F as FaqItem } from "./FaqItem-db08f79b.js";
import { _ as _export_sfc } from "../main.mjs";
const SectionFaq_vue_vue_type_style_index_0_scoped_b15104fc_lang = "";
const _sfc_main = {
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
      if (index != indexActiveItem.value) {
        indexActiveItem.value = index;
      } else {
        indexActiveItem.value = 20;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-faq" }, _attrs))} data-v-b15104fc>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-b15104fc${_scopeId}>Популярные вопросы</h3><div class="items" data-v-b15104fc${_scopeId}><!--[-->`);
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
              createVNode("h3", { class: "h-xl" }, "Популярные вопросы"),
              createVNode("div", { class: "items" }, [
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-faq/SectionFaq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionFaq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b15104fc"]]);
export {
  SectionFaq as S
};
