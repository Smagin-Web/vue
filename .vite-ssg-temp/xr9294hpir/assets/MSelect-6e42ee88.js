import { useSSRContext, ref, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const MSelect_vue_vue_type_style_index_0_scoped_8194173a_lang = "";
const _sfc_main = {
  __name: "MSelect",
  __ssrInlineRender: true,
  setup(__props) {
    let isActive = ref(false);
    const onClickHandler = () => {
      isActive.value = !isActive.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "nav",
        onClick: onClickHandler
      }, _attrs))} data-v-8194173a><button class="nav-main-button" data-v-8194173a>Все услуги</button><span class="${ssrRenderClass([{ active: unref(isActive) }, "nav-icon-button"])}" data-v-8194173a><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" data-v-8194173a><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#AE8C8E" data-v-8194173a></circle><path d="M20.1545 13.6063C20.3873 13.6063 20.5827 13.6851 20.7405 13.8429C20.8982 14.0007 20.9769 14.1958 20.9763 14.4281L20.9763 23.612L24.9827 19.6056C25.1471 19.4412 25.3424 19.3591 25.5687 19.3591C25.795 19.3591 25.99 19.4412 26.1538 19.6056C26.3182 19.77 26.4004 19.9617 26.4004 20.1809C26.4004 20.4 26.3182 20.5918 26.1538 20.7562L20.7298 26.1802C20.6476 26.2624 20.5586 26.3205 20.4627 26.3545C20.3668 26.3884 20.2641 26.4057 20.1545 26.4062C20.0449 26.4062 19.9386 26.389 19.8356 26.3545C19.7326 26.32 19.6471 26.2619 19.5792 26.1802L14.1551 20.7562C13.9908 20.5918 13.9086 20.4 13.9086 20.1809C13.9086 19.9617 13.9908 19.77 14.1551 19.6056C14.3195 19.4412 14.5148 19.3591 14.7411 19.3591C14.9674 19.3591 15.1624 19.4412 15.3262 19.6056L19.3327 23.612L19.3327 14.4281C19.3327 14.1952 19.4116 13.9999 19.5693 13.8421C19.7271 13.6843 19.9222 13.6057 20.1545 13.6063Z" fill="white" data-v-8194173a></path></svg></span><div class="${ssrRenderClass([{ "nav-list-active": unref(isActive) }, "nav-list"])}" data-v-8194173a><div class="nav-list-scroll" data-v-8194173a><button class="nav-list-button" data-v-8194173a>Аппаратная косметология</button><button class="nav-list-button" data-v-8194173a>Инъекционная косметология</button><button class="nav-list-button" data-v-8194173a>AntiAcne Concept</button><button class="nav-list-button" data-v-8194173a>Clear Concept</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/select/MSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8194173a"]]);
export {
  MSelect as M
};
