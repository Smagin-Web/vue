import { useSSRContext, ref, onMounted, watchEffect, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const FaqItem_vue_vue_type_style_index_0_scoped_c4dc2c5a_lang = "";
const _sfc_main = {
  __name: "FaqItem",
  __ssrInlineRender: true,
  props: ["title", "text", "isActive", "onClick"],
  setup(__props) {
    const props = __props;
    const textRef = ref();
    ref();
    const itemRef = ref();
    const onResize = () => {
      heightItem.value = "";
    };
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    let heightItem = ref("");
    watchEffect(() => {
      if (props.isActive) {
        heightItem.value = `height: ${itemRef.value.offsetHeight}px`;
        setTimeout(() => {
          heightItem.value = `height: ${itemRef.value.offsetHeight + textRef.value.offsetHeight}px;`;
        }, 10);
      } else {
        heightItem.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "item",
        style: unref(heightItem),
        ref_key: "itemRef",
        ref: itemRef
      }, _attrs))} data-v-c4dc2c5a><h6 class="item-title" data-v-c4dc2c5a>${ssrInterpolate(__props.title)} <div class="item-icon-wrapper" data-v-c4dc2c5a><div class="${ssrRenderClass([{ active: __props.isActive }, "item-icon"])}" data-v-c4dc2c5a></div></div></h6><p class="${ssrRenderClass([{ active: __props.isActive }, "item-text"])}" data-v-c4dc2c5a>${__props.text.replace(/\n/g, "<br />")}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-faq/FaqItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4dc2c5a"]]);
export {
  FaqItem as F
};
