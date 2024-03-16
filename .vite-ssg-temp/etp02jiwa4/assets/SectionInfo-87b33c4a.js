import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { _ as _export_sfc } from "../main.mjs";
const SectionInfo_vue_vue_type_style_index_0_scoped_47057e66_lang = "";
const _sfc_main = {
  __name: "SectionInfo",
  __ssrInlineRender: true,
  props: {
    title: {
      default: "Наш Центр специализируется на аппаратной косметологии лица и имеет медицинскую лицензию"
    },
    text1: {
      default: "Мы уверены, что аппаратная косметология — это безболезненные процедуры без стресса и реабилитации, при которых клетки начинают работать лучше, улучшая состояние твоей кожи на клеточном уровне."
    },
    text2: {
      default: "В отличие от инъекций, которые дают быстрый, но временный результат, мы заботимся о долгосрочном здоровье твоей кожи."
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-info" }, _attrs))} data-v-47057e66>`);
      _push(ssrRenderComponent(MContainer, { class: "section-info-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="heading" data-v-47057e66${_scopeId}>${ssrInterpolate(props.title)}</h3><p class="text" data-v-47057e66${_scopeId}>${ssrInterpolate(props.text1)} <br data-v-47057e66${_scopeId}><br data-v-47057e66${_scopeId}> ${ssrInterpolate(props.text2)}</p>`);
          } else {
            return [
              createVNode("h3", {
                class: "heading",
                textContent: toDisplayString(props.title)
              }, null, 8, ["textContent"]),
              createVNode("p", { class: "text" }, [
                createTextVNode(toDisplayString(props.text1) + " ", 1),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" " + toDisplayString(props.text2), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-info/SectionInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47057e66"]]);
export {
  SectionInfo as S
};
