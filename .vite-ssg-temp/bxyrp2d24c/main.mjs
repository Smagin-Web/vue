import { resolveComponent, withCtx, createVNode, useSSRContext, mergeProps, ref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, reactive, unref, withModifiers, withDirectives, vModelText, renderSlot, onMounted, onUnmounted, withAsyncContext, createCommentVNode, watchEffect, createApp } from "vue";
import { defineStore, createPinia } from "pinia";
import VueYandexMetrika from "vue3-yandex-metrika";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderSuspense } from "vue/server-renderer";
import { useRouter, createRouter, createWebHistory } from "vue-router";
import emailjs from "emailjs-com";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectCreative, Mousewheel } from "swiper/modules";
const main = "";
const typography = "";
const swiper$1 = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3I = {};
function _sfc_ssrRender$1m(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$3I = _sfc_main$3I.setup;
_sfc_main$3I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3I ? _sfc_setup$3I(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3I, [["ssrRender", _sfc_ssrRender$1m]]);
const _sfc_main$3H = {};
function _sfc_ssrRender$1l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "30",
    viewBox: "0 0 32 30",
    fill: "none"
  }, _attrs))}><path d="M11.35 30C10.9389 30 10.5447 29.842 10.254 29.5607C9.9633 29.2794 9.8 28.8978 9.8 28.5V24H3.6C2.77783 24 1.98933 23.6839 1.40797 23.1213C0.826606 22.5587 0.5 21.7956 0.5 21V3C0.5 2.20435 0.826606 1.44129 1.40797 0.87868C1.98933 0.31607 2.77783 0 3.6 0H28.4C29.2222 0 30.0107 0.31607 30.592 0.87868C31.1734 1.44129 31.5 2.20435 31.5 3V21C31.5 21.7956 31.1734 22.5587 30.592 23.1213C30.0107 23.6839 29.2222 24 28.4 24H18.945L13.21 29.565C12.9 29.85 12.5125 30 12.125 30H11.35ZM12.9 21V25.62L17.674 21H28.4V3H3.6V21H12.9ZM6.7 7.5H25.3V10.5H6.7V7.5ZM6.7 13.5H20.65V16.5H6.7V13.5Z" fill="white"></path></svg>`);
}
const _sfc_setup$3H = _sfc_main$3H.setup;
_sfc_main$3H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconMessage.vue");
  return _sfc_setup$3H ? _sfc_setup$3H(props, ctx) : void 0;
};
const IconMessage = /* @__PURE__ */ _export_sfc(_sfc_main$3H, [["ssrRender", _sfc_ssrRender$1l]]);
const useModalsStore = defineStore("modals", () => {
  const isBodyLock = ref(false);
  const isOpenModalBonuse = ref(false);
  const isOpenModalApplication = ref(false);
  const isOpenModalReplace = ref(true);
  const closeAllModals = () => {
    isOpenModalApplication.value = false;
    isOpenModalBonuse.value = false;
    isOpenModalReplace.value = false;
    document.body.style.overflow = "auto";
  };
  function openModalApplication() {
    closeAllModals();
    isBodyLock.value = true;
    isOpenModalApplication.value = true;
    document.body.style.overflow = "hidden";
  }
  function openModalBonuse() {
    closeAllModals();
    isBodyLock.value = true;
    isOpenModalBonuse.value = true;
    document.body.style.overflow = "hidden";
  }
  return {
    isBodyLock,
    isOpenModalApplication,
    isOpenModalBonuse,
    isOpenModalReplace,
    openModalApplication,
    openModalBonuse,
    closeAllModals
  };
});
const ButtonFixed_vue_vue_type_style_index_0_scoped_791a2ffe_lang = "";
const _sfc_main$3G = {
  __name: "ButtonFixed",
  __ssrInlineRender: true,
  setup(__props) {
    useModalsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "buttons-fixed" }, _attrs))} data-v-791a2ffe><div class="background" data-v-791a2ffe></div><button class="button-one" data-v-791a2ffe> Запись на приём </button><button class="button-two" data-v-791a2ffe><a href="https://wa.me/79774122010" class="button-two-link" target="_blank" rel="noopener noreferrer" data-v-791a2ffe></a>`);
      _push(ssrRenderComponent(IconMessage, { class: "button-icon" }, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$3G = _sfc_main$3G.setup;
_sfc_main$3G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonFixed.vue");
  return _sfc_setup$3G ? _sfc_setup$3G(props, ctx) : void 0;
};
const ButtonFixed = /* @__PURE__ */ _export_sfc(_sfc_main$3G, [["__scopeId", "data-v-791a2ffe"]]);
const MContainer_vue_vue_type_style_index_0_scoped_e92a5f25_lang = "";
const _sfc_main$3F = {};
function _sfc_ssrRender$1k(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e92a5f25>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3F = _sfc_main$3F.setup;
_sfc_main$3F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/MContainer.vue");
  return _sfc_setup$3F ? _sfc_setup$3F(props, ctx) : void 0;
};
const MContainer = /* @__PURE__ */ _export_sfc(_sfc_main$3F, [["ssrRender", _sfc_ssrRender$1k], ["__scopeId", "data-v-e92a5f25"]]);
const _sfc_main$3E = {};
function _sfc_ssrRender$1j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "248",
    height: "39",
    viewBox: "0 0 248 39",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_24_12861)"><path d="M20.8545 30.3864C19.2504 29.4217 17.9253 28.1815 16.9489 26.5277C15.9726 24.874 15.4844 23.1514 15.4844 21.2221C15.4844 19.2928 15.9726 17.5701 16.9489 15.9164C17.9253 14.2627 19.1807 13.0224 20.8545 12.0578C22.4585 11.0931 24.2718 10.6797 26.2245 10.6797C28.1773 10.6797 29.9208 11.162 31.5946 12.0578C33.1987 13.0224 34.5237 14.2627 35.4304 15.9164C36.4068 17.5701 36.8252 19.2928 36.8252 21.2221V31.42H31.4551V29.2839C31.1762 29.973 30.4787 30.5242 29.5024 31.0754C28.4563 31.5578 27.4101 31.8334 26.2245 31.8334C24.2718 31.7645 22.5282 31.3511 20.8545 30.3864ZM30.0603 25.0808C31.0367 24.0472 31.5249 22.8069 31.5249 21.291C31.5249 19.7751 31.0367 18.4659 30.0603 17.5012C29.0839 16.4677 27.8286 15.9853 26.2943 15.9853C24.76 15.9853 23.5046 16.4677 22.4585 17.5012C21.4124 18.5348 20.9242 19.7751 20.9242 21.291C20.9242 22.8069 21.4124 24.1161 22.4585 25.0808C23.5046 26.1143 24.76 26.5966 26.2943 26.5966C27.7588 26.5966 29.0142 26.1143 30.0603 25.0808Z" fill="#AE8C8E"></path><path d="M44.4253 30.3864C42.7515 29.4217 41.4962 28.1815 40.5198 26.5277C39.5434 24.874 39.125 23.1514 39.125 21.2221C39.125 19.2928 39.6132 17.5701 40.5198 15.9164C41.4962 14.2627 42.7515 13.0224 44.4253 12.0578C46.0991 11.0931 47.8427 10.6797 49.7954 10.6797C52.2364 10.6797 54.3983 11.3687 56.2814 12.8157C58.1644 14.2627 59.4197 16.0542 60.0474 18.3281H54.3983C53.9102 17.5701 53.2825 16.95 52.5153 16.5366C51.7482 16.1232 50.8415 15.8475 49.8652 15.8475C48.3309 15.8475 47.0755 16.3299 46.0294 17.3634C44.9833 18.397 44.4951 19.6373 44.4951 21.1532C44.4951 22.6691 44.9833 23.9783 46.0294 25.0118C47.0755 26.0454 48.3309 26.5277 49.8652 26.5277C50.7718 26.5277 51.6087 26.321 52.3758 25.9076C53.143 25.4942 53.7707 24.9429 54.2589 24.2539H60.1171C59.4895 26.4588 58.1644 28.2504 56.2814 29.6285C54.3983 31.0065 52.2364 31.6956 49.8652 31.6956C47.9124 31.7645 46.0991 31.3511 44.4253 30.3864Z" fill="#AE8C8E"></path><path d="M232.031 25.5636V31.4205L232.519 31.3516C236.425 30.8004 239.982 28.9399 242.771 26.1837C245.352 23.5654 247.095 20.258 247.723 16.7438C247.723 16.5371 247.793 16.3304 247.793 16.1926C247.863 15.7792 247.932 15.2968 247.932 14.8145V0H241.795V10.129H234.96V15.0901H241.795C241.446 18.3975 239.703 21.4982 236.983 23.4276C235.588 24.4611 233.984 25.1502 232.31 25.4947L232.031 25.5636Z" fill="#AE8C8E"></path><path d="M100.707 29.7653C99.0328 28.8006 97.7775 27.5604 96.8011 25.9066C95.8247 24.2529 95.4062 22.5303 95.4062 20.601C95.4062 18.6717 95.8944 16.9491 96.8011 15.2953C97.7775 13.6416 99.0328 12.4014 100.707 11.4367C102.38 10.472 104.124 10.0586 106.077 10.0586C108.518 10.0586 110.68 10.7476 112.563 12.1946C114.446 13.6416 115.701 15.4332 116.329 17.707H110.61C110.122 16.9491 109.494 16.3289 108.727 15.9155C107.96 15.5021 107.053 15.2264 106.077 15.2264C104.542 15.2264 103.287 15.7088 102.241 16.7423C101.195 17.7759 100.707 19.0162 100.707 20.5321C100.707 22.048 101.195 23.3572 102.241 24.3908C103.287 25.4243 104.542 25.9066 106.077 25.9066C106.983 25.9066 107.82 25.6999 108.587 25.2865C109.355 24.8731 109.982 24.3218 110.47 23.6328H116.329C115.631 25.8377 114.376 27.6293 112.493 29.0074C110.61 30.3854 108.448 31.0745 106.077 31.0745C104.124 31.1434 102.311 30.6611 100.707 29.7653Z" fill="#AE8C8E"></path><path d="M134.392 11.5066C136.066 12.4713 137.321 13.7116 138.298 15.3653C139.274 17.019 139.692 18.7416 139.692 20.6709C139.692 22.6003 139.204 24.3229 138.298 25.9766C137.321 27.6303 136.066 28.8706 134.392 29.8353C132.718 30.7999 130.975 31.2134 129.022 31.2134C127.069 31.2134 125.326 30.731 123.652 29.8353C121.978 28.8706 120.723 27.6303 119.746 25.9766C118.77 24.3229 118.352 22.6003 118.352 20.6709C118.352 18.7416 118.84 17.019 119.746 15.3653C120.723 13.7116 121.978 12.4713 123.652 11.5066C125.326 10.542 127.069 10.1285 129.022 10.1285C130.975 10.0596 132.788 10.542 134.392 11.5066ZM125.326 16.8123C124.28 17.8459 123.791 19.0861 123.791 20.6709C123.791 22.1869 124.28 23.496 125.326 24.4607C126.372 25.4943 127.627 25.9766 129.161 25.9766C130.696 25.9766 131.951 25.4943 132.927 24.4607C133.904 23.4271 134.392 22.1869 134.392 20.6709C134.392 19.155 133.904 17.8459 132.927 16.8123C131.951 15.7787 130.696 15.2964 129.161 15.2964C127.627 15.2964 126.302 15.7787 125.326 16.8123Z" fill="#AE8C8E"></path><path d="M160.268 30.8703H154.828V20.0523C154.828 18.3985 154.549 17.1583 153.921 16.4003C153.294 15.6424 152.387 15.2289 151.062 15.2289C149.737 15.2289 148.83 15.6424 148.202 16.4003C147.575 17.1583 147.296 18.3985 147.296 20.0523V30.8014H141.926V20.0523C141.926 16.7448 142.763 14.1954 144.436 12.5417C146.11 10.8879 148.272 9.99219 151.062 9.99219C153.852 9.99219 156.014 10.819 157.687 12.5417C159.361 14.1954 160.198 16.7448 160.198 20.0523V30.8703H160.268Z" fill="#AE8C8E"></path><path d="M167.8 29.7653C166.127 28.8006 164.871 27.5604 163.895 25.9066C162.918 24.2529 162.5 22.5303 162.5 20.601C162.5 18.6717 162.988 16.9491 163.895 15.2953C164.871 13.6416 166.127 12.4014 167.8 11.4367C169.474 10.472 171.218 10.0586 173.17 10.0586C175.611 10.0586 177.773 10.7476 179.656 12.1946C181.539 13.6416 182.795 15.4332 183.422 17.707H177.704C177.215 16.9491 176.588 16.3289 175.821 15.9155C175.053 15.5021 174.147 15.2264 173.17 15.2264C171.636 15.2264 170.381 15.7088 169.335 16.7423C168.289 17.7759 167.8 19.0162 167.8 20.5321C167.8 22.048 168.289 23.3572 169.335 24.3908C170.381 25.4243 171.636 25.9066 173.17 25.9066C174.077 25.9066 174.914 25.6999 175.681 25.2865C176.448 24.8731 177.076 24.3218 177.564 23.6328H183.422C182.725 25.8377 181.47 27.6293 179.587 29.0074C177.704 30.3854 175.542 31.0745 173.17 31.0745C171.287 31.1434 169.474 30.6611 167.8 29.7653Z" fill="#AE8C8E"></path><path d="M206.853 20.1885C206.783 18.1214 206.225 16.3299 205.179 14.814C204.133 13.2981 202.738 12.1267 201.134 11.2999C199.53 10.473 197.786 10.0596 196.043 10.0596C194.09 10.0596 192.346 10.5419 190.742 11.5066C189.138 12.4712 187.883 13.7804 186.907 15.3652C186 17.0189 185.512 18.7415 185.512 20.602C185.512 22.5313 186 24.2539 186.976 25.9076C187.953 27.4924 189.208 28.8016 190.812 29.6974C192.416 30.662 194.229 31.1444 196.182 31.1444C198.344 31.1444 200.297 30.5242 202.04 29.3529C203.784 28.1815 205.109 26.6656 205.946 24.8052L199.53 24.7363C199.111 25.0808 198.623 25.3564 198.065 25.5631C197.507 25.7698 196.81 25.9076 195.973 25.9076C194.787 25.9076 193.741 25.632 192.904 25.0119C192.067 24.4606 191.509 23.6338 191.3 22.6002H206.643C206.783 21.9112 206.853 21.0154 206.853 20.1885ZM193.253 16.1232C194.09 15.5719 195.066 15.2963 196.252 15.2963C197.298 15.2963 198.274 15.5719 199.181 16.1921C199.739 16.5366 200.157 16.95 200.576 17.5013H191.998C192.277 16.8811 192.695 16.4677 193.253 16.1232Z" fill="#AE8C8E"></path><path d="M210.55 15.2953C211.526 13.6416 212.782 12.4014 214.455 11.4367C216.059 10.472 217.873 10.0586 219.825 10.0586C221.778 10.0586 223.522 10.5409 225.195 11.4367C226.8 12.4014 228.125 13.6416 229.101 15.2953C230.077 16.9491 230.566 18.6717 230.566 20.601C230.566 22.5303 230.077 24.2529 229.101 25.9067C228.125 27.5604 226.869 28.8006 225.195 29.7653C223.591 30.73 221.778 31.1434 219.825 31.1434C217.803 31.1434 216.059 30.5922 214.595 29.5586V38.9985H209.155V20.601C209.085 18.6717 209.573 16.9491 210.55 15.2953ZM223.591 24.4597C224.568 23.4261 225.056 22.1858 225.056 20.6699C225.056 19.154 224.568 17.8448 223.591 16.8801C222.615 15.8466 221.36 15.3642 219.825 15.3642C218.291 15.3642 217.036 15.8466 215.99 16.8801C214.944 17.9137 214.455 19.154 214.455 20.6699C214.455 22.1858 214.944 23.495 215.99 24.4597C217.036 25.4932 218.291 25.9756 219.825 25.9756C221.29 25.9756 222.545 25.4932 223.591 24.4597Z" fill="#AE8C8E"></path><path d="M233.702 22.8066C233.702 22.9444 233.633 23.0134 233.633 23.1512L233.702 22.8066Z" fill="#AE8C8E"></path><path d="M15.9713 5.99556V0.138672L15.4831 0.207576C11.5776 0.827718 8.02082 2.61924 5.23117 5.44433C2.65074 8.0627 0.907208 11.3701 0.279536 14.8843C0.279536 15.091 0.209795 15.2977 0.209795 15.4355C0.140054 15.8489 0.0703125 16.3313 0.0703125 16.8136V31.4903H6.20755V21.4302H13.0422V16.4691H6.1378C6.48651 13.1616 8.23004 10.0609 10.95 8.13161C12.3448 7.09804 13.9488 6.40899 15.6226 6.06447L15.9713 5.99556Z" fill="#AE8C8E"></path><path d="M83.4815 20.8087C83.4117 18.7415 82.8538 16.95 81.8077 15.4341C80.7615 13.9182 79.3667 12.7468 77.7627 11.92C76.1586 11.0931 74.4151 10.6797 72.6716 10.6797C70.7188 10.6797 68.9753 11.162 67.3712 12.1267C65.7672 13.0913 64.5118 14.4005 63.5355 15.9853C62.6288 17.6391 62.1406 19.3617 62.1406 21.2221C62.1406 23.1514 62.6288 24.874 63.5355 26.5277C64.5118 28.1125 65.7672 29.4217 67.3712 30.3175C68.9753 31.2822 70.7885 31.6956 72.7413 31.6956C74.9033 31.6956 76.856 31.1444 78.5996 29.9041C80.3431 28.7327 81.6682 27.2168 82.5051 25.3564L76.0889 25.2875C75.6704 25.632 75.1822 25.9076 74.6243 26.1143C74.0664 26.321 73.369 26.4588 72.5321 26.4588C71.3465 26.4588 70.3004 26.1832 69.4635 25.5631C68.6266 24.9429 68.0686 24.185 67.8594 23.1514H83.2025C83.4117 22.5313 83.4815 21.6355 83.4815 20.8087ZM69.8819 16.7433C70.7188 16.1921 71.6952 15.9164 72.8808 15.9164C73.9269 15.9164 74.9033 16.1921 75.8099 16.8122C76.4376 17.2256 76.9258 17.708 77.3442 18.3281H68.3476C68.766 17.6391 69.2542 17.1567 69.8819 16.7433Z" fill="#AE8C8E"></path></g><defs><clipPath id="clip0_24_12861"><rect width="248" height="39" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$3E = _sfc_main$3E.setup;
_sfc_main$3E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconLogo.vue");
  return _sfc_setup$3E ? _sfc_setup$3E(props, ctx) : void 0;
};
const Logo$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3E, [["ssrRender", _sfc_ssrRender$1j]]);
const Logo_vue_vue_type_style_index_0_scoped_966da3f0_lang = "";
const _sfc_main$3D = {
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-966da3f0><a href="/" data-v-966da3f0>`);
      _push(ssrRenderComponent(Logo$1, { class: "logo-icon" }, null, _parent));
      _push(`</a></div>`);
    };
  }
};
const _sfc_setup$3D = _sfc_main$3D.setup;
_sfc_main$3D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Logo.vue");
  return _sfc_setup$3D ? _sfc_setup$3D(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$3D, [["__scopeId", "data-v-966da3f0"]]);
const HeaderMobileMenu_vue_vue_type_style_index_0_scoped_4c46c0e6_lang = "";
const _sfc_main$3C = {
  __name: "HeaderMobileMenu",
  __ssrInlineRender: true,
  props: ["isActive", "onClose"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="${ssrRenderClass([props.isActive && "active", "header-mobile-menu-bg"])}" data-v-4c46c0e6></div><div class="${ssrRenderClass([props.isActive && "active", "header-mobile-menu"])}" data-v-4c46c0e6><div class="header-mobile-menu-logo" data-v-4c46c0e6>`);
      _push(ssrRenderComponent(Logo, null, null, _parent));
      _push(`</div><nav class="header-mobile-menu-nav" data-v-4c46c0e6>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-mobile-menu-nav-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Главная `);
          } else {
            return [
              createTextVNode(" Главная ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-mobile-menu-nav-link",
        to: "/concepts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Концепты `);
          } else {
            return [
              createTextVNode(" Концепты ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-mobile-menu-nav-link",
        to: "/prices"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Цены `);
          } else {
            return [
              createTextVNode(" Цены ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-mobile-menu-nav-link",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` О клинике `);
          } else {
            return [
              createTextVNode(" О клинике ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-mobile-menu-nav-link",
        to: "/contacts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Контакты `);
          } else {
            return [
              createTextVNode(" Контакты ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="header-mobile-menu-contacts" data-v-4c46c0e6><a class="header-mobile-menu-nav-link header-mobile-menu-nav-link-number" href="tel:+74952913578" data-v-4c46c0e6>+7 495 291-35-78</a><a data-v-4c46c0e6><svg width="30" height="30" viewBox="0 0 30 30" fill="none" data-v-4c46c0e6><path d="M25.6281 4.36508C24.246 2.97597 22.5998 1.87459 20.7854 1.12516C18.971 0.37574 17.0248 -0.00672015 15.0603 8.93542e-05C6.82914 8.93542e-05 0.120603 6.67507 0.120603 14.865C0.120603 17.49 0.81407 20.04 2.11055 22.29L0 30L7.91457 27.93C10.1005 29.115 12.5578 29.745 15.0603 29.745C23.2915 29.745 30 23.07 30 14.88C30 10.9051 28.4472 7.17007 25.6281 4.36508ZM15.0603 27.225C12.8291 27.225 10.6432 26.625 8.72864 25.5L8.27638 25.23L3.57286 26.46L4.82412 21.9L4.52261 21.435C3.28303 19.4655 2.62483 17.1889 2.62312 14.865C2.62312 8.05507 8.201 2.50508 15.0452 2.50508C18.3618 2.50508 21.4824 3.79508 23.8191 6.13507C24.9761 7.28101 25.893 8.64406 26.5167 10.1452C27.1403 11.6463 27.4583 13.2557 27.4523 14.88C27.4824 21.69 21.9045 27.225 15.0603 27.225ZM21.8744 17.985C21.4975 17.805 19.6583 16.905 19.3266 16.77C18.9799 16.65 18.7387 16.59 18.4824 16.95C18.2261 17.325 17.5176 18.165 17.3065 18.405C17.0955 18.66 16.8693 18.69 16.4925 18.495C16.1156 18.315 14.9095 17.91 13.4925 16.65C12.3769 15.66 11.6382 14.445 11.4121 14.07C11.201 13.695 11.3819 13.5 11.5779 13.305C11.7437 13.14 11.9548 12.8701 12.1357 12.6601C12.3166 12.4501 12.392 12.2851 12.5126 12.0451C12.6332 11.7901 12.5729 11.5801 12.4824 11.4001C12.392 11.2201 11.6382 9.39006 11.3367 8.64006C11.0352 7.92007 10.7186 8.01007 10.4925 7.99507H9.76884C9.51256 7.99507 9.1206 8.08507 8.77387 8.46006C8.44221 8.83506 7.47739 9.73506 7.47739 11.5651C7.47739 13.3951 8.8191 15.165 9 15.405C9.1809 15.66 11.6382 19.41 15.3769 21.015C16.2663 21.405 16.9598 21.63 17.5025 21.795C18.392 22.08 19.206 22.035 19.8543 21.945C20.5779 21.84 22.0703 21.045 22.3719 20.175C22.6884 19.305 22.6884 18.57 22.5829 18.405C22.4774 18.24 22.2513 18.165 21.8744 17.985Z" fill="#6D6364" data-v-4c46c0e6></path></svg></a><a data-v-4c46c0e6><svg width="30" height="27" viewBox="0 0 30 27" fill="none" data-v-4c46c0e6><path d="M27.779 0.0027645C27.4085 0.0297726 27.0449 0.116862 26.7022 0.260636H26.6976C26.3687 0.391307 24.8049 1.05044 22.4274 2.04955L13.9078 5.64473C7.79444 8.22345 1.78498 10.7629 1.78498 10.7629L1.85654 10.7351C1.85654 10.7351 1.44221 10.8716 1.00942 11.1687C0.742045 11.3392 0.511968 11.5623 0.333112 11.8244C0.120755 12.1366 -0.0500533 12.6142 0.0134228 13.108C0.117293 13.9429 0.657417 14.4436 1.0452 14.72C1.4376 14.9998 1.81153 15.1305 1.81153 15.1305H1.82076L7.45629 17.0327C7.70904 17.8457 9.1736 22.6701 9.52561 23.7814C9.73335 24.4451 9.93532 24.8603 10.1881 25.1771C10.3104 25.339 10.4535 25.4743 10.6255 25.583C10.7149 25.6351 10.8102 25.6762 10.9094 25.7056L10.8517 25.6917C10.869 25.6963 10.8828 25.7102 10.8955 25.7148C10.9417 25.7275 10.9729 25.7322 11.0317 25.7414C11.9239 26.012 12.6406 25.4569 12.6406 25.4569L12.6809 25.4246L16.0083 22.3891L21.5849 26.6758L21.7119 26.7301C22.8741 27.2412 24.0513 26.9568 24.6733 26.4549C25.3 25.9496 25.5435 25.3031 25.5435 25.3031L25.5839 25.1991L29.8934 3.07873C30.0157 2.53292 30.0469 2.0218 29.9118 1.52571C29.7726 1.02364 29.4511 0.591832 29.0105 0.314986C28.6405 0.0896256 28.2115 -0.0191506 27.779 0.0027645ZM27.6625 2.37334C27.6578 2.44619 27.6717 2.4381 27.6394 2.57802V2.59074L23.3703 24.481C23.3519 24.5122 23.3207 24.5804 23.2353 24.6486C23.1453 24.7203 23.0737 24.7654 22.6986 24.6163L15.8778 19.3767L11.7577 23.1396L12.6232 17.6005L23.7673 7.19312C24.2267 6.76526 24.0732 6.67506 24.0732 6.67506C24.1055 6.15007 23.3796 6.52126 23.3796 6.52126L9.3271 15.2438L9.32248 15.2207L2.58709 12.9484V12.9438L2.56978 12.9403C2.58159 12.9364 2.59315 12.9318 2.6044 12.9264L2.64133 12.9079L2.67711 12.8952C2.67711 12.8952 8.69118 10.3558 14.8045 7.77709C17.8652 6.48542 20.949 5.18449 23.3207 4.18076C24.7273 3.58754 26.1353 2.99778 27.5447 2.4115C27.6394 2.37449 27.5944 2.37334 27.6625 2.37334Z" fill="#6D6364" data-v-4c46c0e6></path></svg></a></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$3C = _sfc_main$3C.setup;
_sfc_main$3C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/HeaderMobileMenu.vue");
  return _sfc_setup$3C ? _sfc_setup$3C(props, ctx) : void 0;
};
const HeaderMobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3C, [["__scopeId", "data-v-4c46c0e6"]]);
const HeaderBurgerIcon_vue_vue_type_style_index_0_scoped_4e54a047_lang = "";
const _sfc_main$3B = {
  __name: "HeaderBurgerIcon",
  __ssrInlineRender: true,
  props: {
    isActive: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "burger-icon-wrapper" }, _attrs))} data-v-4e54a047><div class="${ssrRenderClass([props.isActive && "active", "burger-icon"])}" data-v-4e54a047></div></div>`);
    };
  }
};
const _sfc_setup$3B = _sfc_main$3B.setup;
_sfc_main$3B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/HeaderBurgerIcon.vue");
  return _sfc_setup$3B ? _sfc_setup$3B(props, ctx) : void 0;
};
const HeaderBurgerIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3B, [["__scopeId", "data-v-4e54a047"]]);
const Header_vue_vue_type_style_index_0_scoped_8d58a7b9_lang = "";
const _sfc_main$3A = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        text: "О клинике",
        link: "/about"
      },
      {
        text: "Концепты",
        link: "/concepts"
      },
      {
        text: "Цены",
        link: "/prices"
      },
      {
        text: "Контакты",
        link: "/contacts"
      }
    ];
    const isOpenMenuMobile = ref(false);
    const toggleMenu = () => {
      isOpenMenuMobile.value = !isOpenMenuMobile.value;
      if (isOpenMenuMobile.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-8d58a7b9>`);
      _push(ssrRenderComponent(HeaderMobileMenu, {
        isActive: isOpenMenuMobile.value,
        onClose: toggleMenu
      }, null, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header-flex" data-v-8d58a7b9${_scopeId}><div class="header-flex-left" data-v-8d58a7b9${_scopeId}>`);
            _push2(ssrRenderComponent(Logo, null, null, _parent2, _scopeId));
            _push2(`</div><nav class="header-nav" data-v-8d58a7b9${_scopeId}><a class="header-nav-item" href="tel:+74952913578" data-v-8d58a7b9${_scopeId}><span class="header-nav-item-link" data-v-8d58a7b9${_scopeId}>+7 495 291-35-78 </span></a><!--[-->`);
            ssrRenderList(items, (item) => {
              _push2(ssrRenderComponent(_component_router_link, {
                class: "header-nav-item",
                key: item.text,
                to: item.link
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="header-nav-item-link" data-v-8d58a7b9${_scopeId2}>${ssrInterpolate(item.text)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "header-nav-item-link" }, toDisplayString(item.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><button type="button" class="burger-button" data-v-8d58a7b9${_scopeId}>`);
            _push2(ssrRenderComponent(HeaderBurgerIcon, { isActive: isOpenMenuMobile.value }, null, _parent2, _scopeId));
            _push2(`</button></nav></div>`);
          } else {
            return [
              createVNode("div", { class: "header-flex" }, [
                createVNode("div", { class: "header-flex-left" }, [
                  createVNode(Logo)
                ]),
                createVNode("nav", { class: "header-nav" }, [
                  createVNode("a", {
                    class: "header-nav-item",
                    href: "tel:+74952913578"
                  }, [
                    createVNode("span", { class: "header-nav-item-link" }, "+7 495 291-35-78 ")
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(items, (item) => {
                    return createVNode(_component_router_link, {
                      class: "header-nav-item",
                      key: item.text,
                      to: item.link
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "header-nav-item-link" }, toDisplayString(item.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 64)),
                  createVNode("button", {
                    type: "button",
                    class: "burger-button",
                    onClick: toggleMenu
                  }, [
                    createVNode(HeaderBurgerIcon, { isActive: isOpenMenuMobile.value }, null, 8, ["isActive"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$3A = _sfc_main$3A.setup;
_sfc_main$3A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Header.vue");
  return _sfc_setup$3A ? _sfc_setup$3A(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3A, [["__scopeId", "data-v-8d58a7b9"]]);
const _sfc_main$3z = {};
function _sfc_ssrRender$1i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    fill: "none"
  }, _attrs))}><circle cx="23" cy="23" r="23" fill="#6D6364"></circle><path d="M36.0336 12.3447L31.6683 34.3535C31.6683 34.3535 31.0578 35.8799 29.3789 35.1472L19.3056 27.4243L15.6427 25.654L9.47667 23.5781C9.47667 23.5781 8.5304 23.2425 8.43875 22.5098C8.3471 21.7772 9.50722 21.3805 9.50722 21.3805L34.0187 11.765C34.0187 11.765 36.0334 10.8798 36.0334 12.3451" fill="#F4EEE8"></path><path d="M18.5295 34.1072C18.5295 34.1072 18.2354 34.0797 17.8688 32.9196C17.5028 31.7597 15.6406 25.6547 15.6406 25.6547L30.4453 16.2531C30.4453 16.2531 31.3001 15.7341 31.2696 16.2531C31.2696 16.2531 31.4221 16.3448 30.9641 16.7721C30.5064 17.1996 19.3343 27.2422 19.3343 27.2422" fill="#D8C4B0"></path><path d="M23.1677 30.3841L19.1835 34.0168C19.1835 34.0168 18.8719 34.2532 18.5312 34.1051L19.2942 27.3574" fill="#BC9E81"></path></svg>`);
}
const _sfc_setup$3z = _sfc_main$3z.setup;
_sfc_main$3z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconTelegram.vue");
  return _sfc_setup$3z ? _sfc_setup$3z(props, ctx) : void 0;
};
const IconTelegram$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3z, [["ssrRender", _sfc_ssrRender$1i]]);
const _sfc_main$3y = {};
function _sfc_ssrRender$1h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "47",
    height: "46",
    viewBox: "0 0 47 46",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="23.6641" cy="23" r="23" fill="#6D6364"></circle><g clip-path="url(#clip0_138_592)"><path d="M11.2056 22.8348C11.205 25.1538 11.7987 27.418 12.9276 29.4138L11.0977 36.2327L17.9351 34.403C19.8263 35.4537 21.9452 36.0043 24.0984 36.0044H24.1041C31.2123 36.0044 36.9985 30.1011 37.0016 22.8452C37.0029 19.3292 35.6625 16.023 33.2272 13.5356C30.7923 11.0484 27.5539 9.67787 24.1035 9.67627C16.9945 9.67627 11.2087 15.5792 11.2057 22.8348" fill="#6D6364"></path><path d="M10.745 22.8305C10.7442 25.2329 11.3592 27.5781 12.5283 29.6453L10.6328 36.7087L17.7154 34.8134C19.6669 35.8993 21.8641 36.4719 24.0999 36.4727H24.1057C31.4689 36.4727 37.463 30.3571 37.4661 22.8414C37.4674 19.1991 36.0788 15.774 33.5564 13.1975C31.0338 10.6212 27.6796 9.20145 24.1057 9.19995C16.7412 9.19995 10.7479 15.3147 10.745 22.8305ZM14.9628 29.2893L14.6984 28.8609C13.5867 27.0568 12.9999 24.9721 13.0007 22.8314C13.0032 16.5844 17.9845 11.5021 24.1099 11.5021C27.0762 11.5034 29.8639 12.6835 31.9607 14.8248C34.0574 16.9662 35.2111 19.8129 35.2104 22.8406C35.2076 29.0875 30.2262 34.1705 24.1057 34.1705H24.1013C22.1084 34.1694 20.1538 33.6232 18.4493 32.591L18.0436 32.3454L13.8407 33.4701L14.9628 29.2892V29.2893Z" fill="url(#paint0_linear_138_592)"></path><path d="M20.766 17.131C20.5159 16.5637 20.2527 16.5523 20.0148 16.5424C19.8201 16.5338 19.5974 16.5344 19.375 16.5344C19.1524 16.5344 18.7907 16.6199 18.4849 16.9606C18.1788 17.3017 17.3164 18.1258 17.3164 19.802C17.3164 21.4784 18.5127 23.0983 18.6795 23.3259C18.8464 23.553 20.9889 27.1029 24.3821 28.4685C27.2021 29.6035 27.776 29.3777 28.388 29.3208C29.0001 29.2641 30.3632 28.4969 30.6413 27.7013C30.9195 26.9058 30.9195 26.224 30.8361 26.0815C30.7527 25.9395 30.53 25.8542 30.1962 25.6839C29.8622 25.5135 28.221 24.6893 27.915 24.5756C27.609 24.4619 27.3865 24.4052 27.1638 24.7464C26.9412 25.087 26.3019 25.8542 26.107 26.0815C25.9124 26.3092 25.7175 26.3376 25.3838 26.1672C25.0497 25.9962 23.9746 25.6369 22.6991 24.4763C21.7067 23.5732 21.0367 22.458 20.8419 22.1168C20.6472 21.7762 20.8211 21.5915 20.9885 21.4218C21.1385 21.2691 21.3224 21.0239 21.4895 20.8251C21.656 20.6261 21.7115 20.4841 21.8228 20.2569C21.9343 20.0295 21.8785 19.8305 21.7952 19.6601C21.7115 19.4897 21.0628 17.8047 20.766 17.131Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_138_592" x1="1352.3" y1="2760.08" x2="1352.3" y2="9.19995" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="white"></stop></linearGradient><clipPath id="clip0_138_592"><rect width="26.8333" height="27.6" fill="white" transform="translate(10.6328 9.19995)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$3y = _sfc_main$3y.setup;
_sfc_main$3y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconWhatsapp.vue");
  return _sfc_setup$3y ? _sfc_setup$3y(props, ctx) : void 0;
};
const IconWhatsapp$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3y, [["ssrRender", _sfc_ssrRender$1h]]);
const _sfc_main$3x = {};
function _sfc_ssrRender$1g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "46",
    viewBox: "0 0 47 46",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_138_604)"><path d="M18.5193 0.00867969L19.9165 0.00292969H26.7475L28.1467 0.00867969L29.8985 0.0278464L30.7284 0.041263L31.5296 0.0623464L32.302 0.0891797L33.0457 0.119846L33.7625 0.160096L34.4525 0.208013L35.1138 0.265513L35.752 0.328763C39.087 0.70443 41.3736 1.50943 43.0986 3.23443C44.8236 4.95943 45.6286 7.2441 46.0043 10.581L46.0695 11.2193L46.125 11.8824L46.1729 12.5724L46.2113 13.2873L46.2592 14.4143L46.2822 15.2002L46.3071 16.4345L46.3244 18.1883L46.332 20.0666L46.3301 26.4165L46.3244 27.8157L46.3052 29.5675L46.2918 30.3974L46.2707 31.1986L46.2439 31.971L46.2132 32.7147L46.1729 33.4315L46.125 34.1215L46.0675 34.7828L46.0043 35.421C45.6286 38.756 44.8236 41.0426 43.0986 42.7676C41.3736 44.4926 39.0889 45.2976 35.752 45.6733L35.1138 45.7384L34.4506 45.794L33.7606 45.8419L33.0457 45.8803L31.9187 45.9282L31.1329 45.9512L29.8985 45.9761L28.1448 45.9933L26.2664 46.001L19.9165 45.9991L18.5174 45.9933L16.7655 45.9742L15.9356 45.9608L15.1344 45.9397L14.362 45.9128L13.6184 45.8822L12.9015 45.8419L12.2115 45.794L11.5503 45.7365L10.912 45.6733C7.57703 45.2976 5.29045 44.4926 3.56545 42.7676C1.84045 41.0426 1.03545 38.7579 0.659781 35.421L0.594615 34.7828L0.539031 34.1196L0.491115 33.4296L0.452781 32.7147L0.404865 31.5877L0.381865 30.8018L0.356948 29.5675L0.339698 27.8138L0.332031 25.9354L0.333948 19.5855L0.339698 18.1863L0.358865 16.4345L0.372281 15.6046L0.393365 14.8034L0.420198 14.031L0.450865 13.2873L0.491115 12.5705L0.539031 11.8805L0.596531 11.2193L0.659781 10.581C1.03545 7.24601 1.84045 4.95943 3.56545 3.23443C5.29045 1.50943 7.57511 0.70443 10.912 0.328763L11.5503 0.263596L12.2134 0.208013L12.9034 0.160096L13.6184 0.121763L14.7454 0.0738463L15.5312 0.0508463L16.7655 0.0259297L18.5193 0.00867969ZM13.3462 13.9927H8.09453C8.3437 25.9527 14.3237 33.1402 24.8079 33.1402H25.402V26.2977C29.2545 26.681 32.1679 29.4985 33.337 33.1402H38.7804C37.2854 27.6968 33.3562 24.6877 30.9029 23.5377C33.3562 22.1193 36.8062 18.6693 37.6304 13.9927H32.6854C31.612 17.7877 28.4304 21.2377 25.402 21.5635V13.9927H20.457V27.256C17.3904 26.4893 13.5187 22.771 13.3462 13.9927Z" fill="#6D6364"></path></g><defs><clipPath id="clip0_138_604"><rect width="46" height="46" fill="white" transform="translate(0.332031)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$3x = _sfc_main$3x.setup;
_sfc_main$3x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconVk.vue");
  return _sfc_setup$3x ? _sfc_setup$3x(props, ctx) : void 0;
};
const IconVk = /* @__PURE__ */ _export_sfc(_sfc_main$3x, [["ssrRender", _sfc_ssrRender$1g]]);
const _sfc_main$3w = {};
function _sfc_ssrRender$1f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    fill: "none"
  }, _attrs))}><path d="M25.3649 0.00282981C27.0432 -0.00361048 28.7215 0.0132574 30.3994 0.0534283L30.8456 0.0695276C31.3608 0.087927 31.869 0.110926 32.4831 0.138525C34.9302 0.253521 36.6 0.639909 38.065 1.20799C39.583 1.79217 40.8617 2.58334 42.1405 3.8621C43.3097 5.01115 44.2146 6.40109 44.7923 7.93526C45.3604 9.40031 45.7468 11.0724 45.8618 13.5195C45.8894 14.1312 45.9124 14.6418 45.9308 15.157L45.9446 15.6032C45.9854 17.2803 46.0031 18.9579 45.9975 20.6354L45.9998 22.3512V25.3641C46.0054 27.0424 45.9878 28.7207 45.9469 30.3986L45.9331 30.8448C45.9147 31.36 45.8917 31.8682 45.8641 32.4823C45.7491 34.9294 45.3581 36.5992 44.7923 38.0642C44.2165 39.6 43.3114 40.9911 42.1405 42.1397C40.9904 43.3088 39.5998 44.2137 38.065 44.7915C36.6 45.3596 34.9302 45.746 32.4831 45.861C31.869 45.8886 31.3608 45.9116 30.8456 45.93L30.3994 45.9438C28.7215 45.9847 27.0432 46.0023 25.3649 45.9967L23.6491 45.999H20.6385C18.9602 46.0046 17.2818 45.987 15.604 45.9461L15.1578 45.9323C14.6118 45.9125 14.066 45.8895 13.5203 45.8633C11.0731 45.7483 9.40341 45.3573 7.93606 44.7915C6.40128 44.215 5.0111 43.31 3.8629 42.1397C2.69234 40.9904 1.78658 39.5996 1.20879 38.0642C0.640705 36.5992 0.254318 34.9294 0.139322 32.4823C0.113708 31.9366 0.0907084 31.3907 0.0703246 30.8448L0.0588253 30.3986C0.016423 28.7208 -0.00274506 27.0424 0.00132706 25.3641V20.6354C-0.00509195 18.9579 0.0117759 17.2803 0.0519255 15.6032L0.0680249 15.157C0.0864243 14.6418 0.109423 14.1312 0.137022 13.5195C0.252019 11.0701 0.638405 9.40261 1.20649 7.93526C1.78462 6.40034 2.69215 5.01078 3.8652 3.8644C5.01261 2.69317 6.40192 1.78659 7.93606 1.20799C9.40341 0.639909 11.0708 0.253521 13.5203 0.138525L15.1578 0.0695276L15.604 0.0580283C17.2811 0.0156472 18.9586 -0.00352084 20.6362 0.000530058L25.3649 0.00282981ZM23.0005 11.5024C21.4769 11.4809 19.9641 11.7624 18.5501 12.3306C17.1362 12.8987 15.8493 13.7423 14.7642 14.8122C13.6791 15.882 12.8174 17.1569 12.2293 18.5627C11.6412 19.9684 11.3383 21.4771 11.3383 23.0009C11.3383 24.5247 11.6412 26.0334 12.2293 27.4391C12.8174 28.8449 13.6791 30.1198 14.7642 31.1896C15.8493 32.2595 17.1362 33.1031 18.5501 33.6712C19.9641 34.2394 21.4769 34.5209 23.0005 34.4994C26.0504 34.4994 28.9754 33.2878 31.132 31.1312C33.2886 28.9746 34.5002 26.0496 34.5002 22.9997C34.5002 19.9499 33.2886 17.0249 31.132 14.8683C28.9754 12.7117 26.0504 11.5024 23.0005 11.5024ZM23.0005 16.1023C23.9171 16.0854 24.8278 16.2513 25.6795 16.5903C26.5312 16.9294 27.3068 17.4347 27.961 18.0769C28.6152 18.719 29.1348 19.4851 29.4896 20.3303C29.8444 21.1756 30.0273 22.083 30.0274 22.9997C30.0276 23.9164 29.8451 24.8239 29.4905 25.6693C29.136 26.5147 28.6166 27.2809 27.9626 27.9233C27.3086 28.5656 26.5332 29.0712 25.6816 29.4106C24.83 29.7499 23.9194 29.9161 23.0028 29.8995C21.1729 29.8995 19.4179 29.1726 18.124 27.8786C16.83 26.5847 16.1031 24.8297 16.1031 22.9997C16.1031 21.1698 16.83 19.4148 18.124 18.1209C19.4179 16.8269 21.1729 16.1 23.0028 16.1L23.0005 16.1023ZM35.0751 8.05256C34.3332 8.08225 33.6315 8.39789 33.117 8.93336C32.6025 9.46883 32.3152 10.1826 32.3152 10.9252C32.3152 11.6677 32.6025 12.3815 33.117 12.917C33.6315 13.4524 34.3332 13.7681 35.0751 13.7978C35.8376 13.7978 36.5689 13.4949 37.108 12.9557C37.6471 12.4166 37.95 11.6853 37.95 10.9229C37.95 10.1604 37.6471 9.42914 37.108 8.89C36.5689 8.35085 35.8376 8.04796 35.0751 8.04796V8.05256Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$3w = _sfc_main$3w.setup;
_sfc_main$3w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconInstagram.vue");
  return _sfc_setup$3w ? _sfc_setup$3w(props, ctx) : void 0;
};
const IconInstagram = /* @__PURE__ */ _export_sfc(_sfc_main$3w, [["ssrRender", _sfc_ssrRender$1f]]);
const _sfc_main$3v = {};
function _sfc_ssrRender$1e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "37",
    viewBox: "0 0 47 37",
    fill: "none"
  }, _attrs))}><path d="M24.2303 0.599609C25.4586 0.606387 28.5316 0.635754 31.7977 0.764521L32.957 0.814221C36.2438 0.965578 39.5284 1.22763 41.1592 1.67267C43.3328 2.27358 45.0395 4.0221 45.6168 6.24051C46.5369 9.76466 46.6519 16.6367 46.6657 18.3017L46.668 18.6451V19.0381C46.6519 20.7031 46.5369 27.5774 45.6168 31.0993C45.0326 33.3245 43.3236 35.0753 41.1592 35.6671C39.5284 36.1122 36.2438 36.3742 32.957 36.5256L31.7977 36.5776C28.5316 36.7041 25.4586 36.7357 24.2303 36.7402L23.6898 36.7425H23.1033C20.5042 36.7267 9.63382 36.6114 6.17444 35.6671C4.00314 35.0662 2.29415 33.3177 1.71682 31.0993C0.796775 27.5752 0.681769 20.7031 0.667969 19.0381V18.3017C0.681769 16.6367 0.796775 9.7624 1.71682 6.24051C2.30105 4.01532 4.01004 2.26454 6.17674 1.67493C9.63382 0.728376 20.5065 0.613164 23.1056 0.599609H24.2303ZM19.0666 10.7654V26.5789L32.8673 18.6722L19.0666 10.7654Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$3v = _sfc_main$3v.setup;
_sfc_main$3v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconYoutube.vue");
  return _sfc_setup$3v ? _sfc_setup$3v(props, ctx) : void 0;
};
const IconYoutube = /* @__PURE__ */ _export_sfc(_sfc_main$3v, [["ssrRender", _sfc_ssrRender$1e]]);
const _sfc_main$3u = {};
const _sfc_setup$3u = _sfc_main$3u.setup;
_sfc_main$3u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconAppStore.vue");
  return _sfc_setup$3u ? _sfc_setup$3u(props, ctx) : void 0;
};
const _sfc_main$3t = {};
const _sfc_setup$3t = _sfc_main$3t.setup;
_sfc_main$3t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconGooglePlay.vue");
  return _sfc_setup$3t ? _sfc_setup$3t(props, ctx) : void 0;
};
const FooterSocials_vue_vue_type_style_index_0_scoped_a171072c_lang = "";
const _sfc_main$3s = {
  __name: "FooterSocials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-socials" }, _attrs))} data-v-a171072c><div class="footer-socials-icons" data-v-a171072c><a href="https://t.me/faceconceptru" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconTelegram$2, null, null, _parent));
      _push(`</a><a href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconWhatsapp$1, null, null, _parent));
      _push(`</a><a href="https://vk.com/face_concept" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconVk, null, null, _parent));
      _push(`</a><a href="https://www.instagram.com/face_concept_ru/" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconInstagram, null, null, _parent));
      _push(`</a><a href="https://www.youtube.com/@FaceConceptru" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconYoutube, null, null, _parent));
      _push(`</a></div></div>`);
    };
  }
};
const _sfc_setup$3s = _sfc_main$3s.setup;
_sfc_main$3s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterSocials.vue");
  return _sfc_setup$3s ? _sfc_setup$3s(props, ctx) : void 0;
};
const FooterSocials = /* @__PURE__ */ _export_sfc(_sfc_main$3s, [["__scopeId", "data-v-a171072c"]]);
const FooterNav_vue_vue_type_style_index_0_scoped_5520c387_lang = "";
const __default__$2 = {
  data() {
    return {
      items: [
        {
          title: "Концепты",
          links: [
            {
              text: "AntiAcne Concept",
              href: "/concept/antiacne"
            },
            {
              text: "Clear Concept",
              href: "/concept/clear"
            },
            {
              text: "Detox Concept",
              href: "/concept/detox"
            },
            {
              text: "Lifting Concept",
              href: "/concept/lifting"
            },
            {
              text: "Brigth Concept",
              href: "/concept/brigth"
            },
            {
              text: "Hydro Concept",
              href: "/concept/hydro"
            },
            {
              text: "Red Concept",
              href: "/concept/red"
            },
            {
              text: "Personal  Concept",
              href: "/concept/personal"
            }
          ]
        },
        {
          title: "Клиентам",
          links: [
            {
              text: "О клинике",
              href: "#"
            },
            {
              text: "Цены",
              href: "#"
            },
            {
              text: "Контакты",
              href: "#"
            }
          ]
        }
      ]
    };
  }
};
const _sfc_main$3r = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "FooterNav",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-nav" }, _attrs))} data-v-5520c387><div class="footer-nav-left" data-v-5520c387><!--[-->`);
      ssrRenderList(_ctx.items, (item, index) => {
        _push(`<div data-v-5520c387><h5 class="footer-nav-title" data-v-5520c387>${ssrInterpolate(item.title)}</h5><!--[-->`);
        ssrRenderList(item.links, (link, index2) => {
          _push(ssrRenderComponent(_component_router_link, {
            key: index2,
            to: link.href,
            class: "footer-nav-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="footer-nav-right" data-v-5520c387><h5 class="footer-nav-title" data-v-5520c387>Контакты</h5><a class="footer-nav-link" href="tel:+74952913578" data-v-5520c387>+7 495 291-35-78</a><a class="footer-nav-link" href="tel:+79774122010" data-v-5520c387>+7 977 412-20-10</a><a class="footer-nav-link" data-v-5520c387>hello@faceconcept.ru</a><a class="footer-nav-link footer-nav-link-address" data-v-5520c387> Москва, Красноказарменная 14А, корпус 6 <span class="footer-nav-link-span" data-v-5520c387> Работаем с 10:00 до 22:00 без выходных </span></a>`);
      _push(ssrRenderComponent(FooterSocials, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3r = _sfc_main$3r.setup;
_sfc_main$3r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterNav.vue");
  return _sfc_setup$3r ? _sfc_setup$3r(props, ctx) : void 0;
};
const FooterNav = /* @__PURE__ */ _export_sfc(_sfc_main$3r, [["__scopeId", "data-v-5520c387"]]);
const _sfc_main$3q = {};
function _sfc_ssrRender$1d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_138_475)"><path d="M6.4573 5.69531H5.01551C4.45133 5.69531 4.17969 5.8 4.17969 6.26062V6.78405C4.17969 7.24466 4.47222 7.34935 5.01551 7.34935H5.34984C5.55879 7.34935 5.64237 7.45404 5.64237 7.78903V14.6564C5.64237 15.2217 5.74685 15.4939 6.20655 15.4939H6.74984C7.20954 15.4939 7.31402 15.2008 7.31402 14.6564V6.26062C7.29312 5.8 7.00058 5.69531 6.4573 5.69531Z" fill="#6D6364"></path><path d="M16.3612 0.921236C15.7343 0.314058 14.9612 0 14.0209 0H6.9791C6.03881 0 5.24478 0.314058 4.63881 0.921236L0.898507 4.64806C0.313433 5.2343 0 6.00897 0 6.8674V14.0489C0 15.0329 0.334328 15.8076 1.00299 16.4566L4.55522 20.016C5.24478 20.7069 6.03881 21.0419 7.04179 21.0209H14C14.9612 21.0209 15.7552 20.7278 16.4866 20.016L20.0388 16.4566C20.6866 15.8076 21.0418 15.0329 21.0418 14.0489V6.8674C21.0418 6.00897 20.7284 5.2343 20.1433 4.64806L16.3612 0.921236ZM19.6209 9.31705C19.6209 9.54736 19.5164 9.67298 19.2866 9.67298H18.2209V8.91924C18.2209 8.35394 18.1373 8.08175 17.6567 8.08175H17.1761C16.6955 8.08175 16.6119 8.37488 16.6119 8.91924V9.67298H15.8806C15.3164 9.67298 15.0448 9.75673 15.0448 10.2383V10.7408C15.0448 11.2223 15.3373 11.3061 15.8806 11.3061H16.6328V12.0598C16.6328 12.6251 16.7164 12.8973 17.197 12.8973H17.6776C18.1582 12.8973 18.2418 12.6042 18.2418 12.0598V11.3061H19.3075C19.5164 11.3061 19.6209 11.4108 19.6418 11.6201V14.0489C19.6418 14.6351 19.4746 15.0748 19.0567 15.4726L15.5045 19.0319C15.0866 19.4506 14.6269 19.6391 14.0627 19.6391H6.95821C6.39403 19.6391 5.93433 19.4506 5.51642 19.0319L1.96418 15.4726C1.54627 15.0538 1.35821 14.6351 1.3791 14.0489V7.03489C1.3791 6.44865 1.56716 5.94616 2.00597 5.50648L5.6 1.84247C5.95522 1.48654 6.43582 1.36092 6.95821 1.36092H14.0418C14.5642 1.36092 15.0239 1.4656 15.4 1.84247L19.0149 5.50648C19.4328 5.94616 19.6418 6.44865 19.6418 7.03489V9.31705H19.6209Z" fill="#6D6364"></path><path d="M13.3519 10.4052C14.2504 9.75611 14.2504 9.08612 14.2504 8.54175V7.99738C14.1459 6.19679 13.5608 5.50586 11.4713 5.50586C9.3817 5.50586 8.79663 6.19679 8.69215 7.99738V8.54175C8.69215 9.08612 8.71305 9.75611 9.59066 10.4052C8.52499 10.8239 8.44141 11.7242 8.44141 12.9176C8.44141 14.6763 9.06827 15.5557 11.4504 15.5976C13.8533 15.5557 14.4593 14.6763 14.4593 12.9176C14.5011 11.7242 14.4175 10.8239 13.3519 10.4052ZM11.4922 6.9924C12.3698 6.9924 12.725 7.30646 12.725 8.37425C12.725 9.40018 12.3698 9.75611 11.4922 9.75611C10.6145 9.75611 10.2593 9.40018 10.2593 8.37425C10.2593 7.30646 10.6145 6.9924 11.4922 6.9924ZM11.4922 14.111C10.4683 14.111 10.113 13.7132 10.113 12.7083C10.113 11.7033 10.4683 11.2426 11.4922 11.2426C12.516 11.2426 12.8713 11.7033 12.8713 12.7083C12.8713 13.7132 12.4951 14.111 11.4922 14.111Z" fill="#6D6364"></path></g><defs><clipPath id="clip0_138_475"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$3q = _sfc_main$3q.setup;
_sfc_main$3q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconAge18.vue");
  return _sfc_setup$3q ? _sfc_setup$3q(props, ctx) : void 0;
};
const IconAge18 = /* @__PURE__ */ _export_sfc(_sfc_main$3q, [["ssrRender", _sfc_ssrRender$1d]]);
const FooterInfo_vue_vue_type_style_index_0_scoped_29b07078_lang = "";
const _sfc_main$3p = {
  __name: "FooterInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-info" }, _attrs))} data-v-29b07078><div class="footer-info-left" data-v-29b07078><p class="footer-info-text" data-v-29b07078> Copyright © 2019-2024. ООО «Центр косметологии FACE CONCEPT» <br data-v-29b07078><br class="spacing-sm" data-v-29b07078><a class="footer-link" data-v-29b07078> Лицензия № ЛО-50-01-010568 от 05.02.2019 </a></p><p class="footer-info-text footer-info-width-limit" data-v-29b07078>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/policy",
        class: "footer-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Политика по обработке персональных данных `);
          } else {
            return [
              createTextVNode(" Политика по обработке персональных данных ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="footer-info-right" data-v-29b07078><p class="footer-info-text" data-v-29b07078><a href="#" class="footer-link" data-v-29b07078>Разработка сайта Pixl.ru</a></p><p class="footer-info-text footer-info-width-limit" data-v-29b07078> Сайт может содержать материалы для лиц старше 18 лет `);
      _push(ssrRenderComponent(IconAge18, { class: "footer-info-icon-18" }, null, _parent));
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup$3p = _sfc_main$3p.setup;
_sfc_main$3p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterInfo.vue");
  return _sfc_setup$3p ? _sfc_setup$3p(props, ctx) : void 0;
};
const FooterInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3p, [["__scopeId", "data-v-29b07078"]]);
const Footer_vue_vue_type_style_index_0_scoped_6b313038_lang = "";
const __default__$1 = {
  data() {
    return {
      items: [
        {
          title: "Услуги",
          links: [
            {
              text: "Запись",
              href: "#"
            },
            {
              text: "Консультации",
              href: "#"
            },
            {
              text: "Запись",
              href: "#"
            }
          ]
        },
        {
          title: "О Центре",
          links: [
            {
              text: "Процедуры",
              href: "#"
            },
            {
              text: "Консультации",
              href: "#"
            },
            {
              text: "Запись",
              href: "#"
            },
            {
              text: "Процедуры",
              href: "#"
            },
            {
              text: "Консультации",
              href: "#"
            },
            {
              text: "Запись",
              href: "#"
            }
          ]
        },
        {
          title: "Клиентам",
          links: [
            {
              text: "Процедуры",
              href: "#"
            },
            {
              text: "Консультации",
              href: "#"
            },
            {
              text: "Запись",
              href: "#"
            },
            {
              text: "Процедуры",
              href: "#"
            },
            {
              text: "Консультации",
              href: "#"
            },
            {
              text: "Запись",
              href: "#"
            }
          ]
        }
      ]
    };
  }
};
const _sfc_main$3o = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6b313038>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-6b313038${_scopeId}><div class="footer-logo" data-v-6b313038${_scopeId}>`);
            _push2(ssrRenderComponent(Logo$1, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(FooterNav, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(FooterInfo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "footer-logo" }, [
                  createVNode(Logo$1)
                ]),
                createVNode(FooterNav)
              ]),
              createVNode(FooterInfo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$3o = _sfc_main$3o.setup;
_sfc_main$3o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Footer.vue");
  return _sfc_setup$3o ? _sfc_setup$3o(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3o, [["__scopeId", "data-v-6b313038"]]);
const ModalBlockSuccess_vue_vue_type_style_index_0_scoped_725193d3_lang = "";
const _sfc_main$3n = {
  __name: "ModalBlockSuccess",
  __ssrInlineRender: true,
  props: ["isActive"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["modal-success-screen", props.isActive && "modal-success-screen-active"]
      }, _attrs))} data-v-725193d3><h6 class="h-l" data-v-725193d3>Спасибо за заявку!</h6><p class="text-sm" data-v-725193d3>Администратор скоро с Вами свяжется!</p></div>`);
    };
  }
};
const _sfc_setup$3n = _sfc_main$3n.setup;
_sfc_main$3n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalBlockSuccess.vue");
  return _sfc_setup$3n ? _sfc_setup$3n(props, ctx) : void 0;
};
const ModalBlockSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$3n, [["__scopeId", "data-v-725193d3"]]);
const _sfc_main$3m = {};
function _sfc_ssrRender$1c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><circle cx="30" cy="30" r="30" transform="rotate(90 30 30)" fill="#AE8C8E"></circle><path d="M32.6804 29.9433L39.3845 23.1996C39.7152 22.8371 39.8939 22.36 39.8833 21.8681C39.8727 21.3761 39.6736 20.9073 39.3276 20.5595C38.9816 20.2116 38.5154 20.0117 38.0263 20.0013C37.5372 19.991 37.0631 20.171 36.7028 20.5039L36.7046 20.5022L30.0005 27.2458L23.2963 20.5022C22.9359 20.1695 22.4616 19.9898 21.9725 20.0004C21.4835 20.0111 21.0174 20.2114 20.6716 20.5594C20.3258 20.9075 20.127 21.3764 20.1168 21.8684C20.1065 22.3603 20.2855 22.8373 20.6164 23.1996L20.6147 23.1979L27.3188 29.9415L20.6147 36.6852C20.426 36.8592 20.2744 37.0699 20.1688 37.3045C20.0633 37.5391 20.006 37.7927 20.0004 38.0501C19.9949 38.3075 20.0412 38.5634 20.1365 38.8024C20.2319 39.0414 20.3743 39.2584 20.5553 39.4406C20.7362 39.6227 20.9519 39.7661 21.1894 39.8622C21.4269 39.9583 21.6813 40.005 21.9372 39.9996C22.1932 39.9942 22.4453 39.9367 22.6786 39.8307C22.9119 39.7247 23.1214 39.5722 23.2946 39.3826L23.2963 39.3809L30.0005 32.6372L36.7046 39.3809C36.8776 39.5706 37.0871 39.7232 37.3203 39.8293C37.5535 39.9355 37.8056 39.9931 38.0615 39.9987C38.3175 40.0043 38.5719 39.9577 38.8094 39.8618C39.047 39.7659 39.2628 39.6226 39.4438 39.4406C39.6249 39.2586 39.7675 39.0416 39.863 38.8027C39.9585 38.5638 40.005 38.308 39.9996 38.0505C39.9942 37.7931 39.9371 37.5394 39.8317 37.3048C39.7263 37.0701 39.5747 36.8594 39.3862 36.6852L39.3845 36.6834L32.6804 29.9433Z" fill="white"></path></svg>`);
}
const _sfc_setup$3m = _sfc_main$3m.setup;
_sfc_main$3m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/CloseIcon.vue");
  return _sfc_setup$3m ? _sfc_setup$3m(props, ctx) : void 0;
};
const CloseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3m, [["ssrRender", _sfc_ssrRender$1c]]);
const ModalLinkTelegram_vue_vue_type_style_index_0_scoped_9def60ad_lang = "";
const _sfc_main$3l = {};
function _sfc_ssrRender$1b(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://t.me/FaceConcept_bot",
    class: "modal-link"
  }, _attrs))} data-v-9def60ad><svg width="60" height="54" viewBox="0 0 60 54" fill="none" class="modal-link-icon" data-v-9def60ad><path d="M55.5581 0.00551817C54.8171 0.0594284 54.0898 0.233267 53.4045 0.520251H53.3953C52.7374 0.78108 49.6098 2.09677 44.8548 4.09107L27.8155 11.2673C15.5889 16.4147 3.56997 21.4835 3.56997 21.4835L3.71308 21.4281C3.71308 21.4281 2.88442 21.7005 2.01884 22.2937C1.48409 22.634 1.02394 23.0792 0.666223 23.6025C0.24151 24.2257 -0.100107 25.179 0.0268456 26.1646C0.234586 27.8311 1.31483 28.8306 2.0904 29.3823C2.87519 29.9409 3.62306 30.2017 3.62306 30.2017H3.64152L14.9126 33.9987C15.4181 35.6214 18.3472 45.2513 19.0512 47.4695C19.4667 48.7944 19.8706 49.6231 20.3761 50.2555C20.6208 50.5787 20.907 50.8487 21.2509 51.0657C21.4297 51.1697 21.6204 51.2519 21.8188 51.3104L21.7034 51.2827C21.738 51.2919 21.7657 51.3196 21.7911 51.3288C21.8834 51.3542 21.9457 51.3635 22.0634 51.3819C23.8477 51.9221 25.2811 50.8141 25.2811 50.8141L25.3619 50.7495L32.0165 44.6904L43.1698 53.247L43.4237 53.3555C45.7481 54.3757 48.1025 53.8079 49.3466 52.8061C50.6 51.7974 51.087 50.5071 51.087 50.5071L51.1678 50.2994L59.7867 6.14539C60.0314 5.05591 60.0937 4.03568 59.8237 3.04545C59.5451 2.04328 58.9022 1.18134 58.0209 0.628738C57.281 0.1789 56.4229 -0.038226 55.5581 0.00551817ZM55.3249 4.73737C55.3157 4.88279 55.3434 4.86663 55.2788 5.14593V5.17132L46.7407 48.866C46.7037 48.9283 46.6414 49.0645 46.4706 49.2007C46.2905 49.3438 46.1474 49.4338 45.3973 49.136L31.7557 38.6775L23.5153 46.1884L25.2465 35.132L47.5347 14.358C48.4534 13.504 48.1464 13.324 48.1464 13.324C48.211 12.276 46.7591 13.017 46.7591 13.017L18.6542 30.4279L18.645 30.3817L5.17418 25.8461V25.8368L5.13956 25.8299C5.16317 25.8221 5.1863 25.8128 5.20881 25.8022L5.28267 25.7653L5.35422 25.7399C5.35422 25.7399 17.3824 20.671 29.609 15.5237C35.7304 12.9454 41.898 10.3487 46.6414 8.34513C49.4545 7.16102 52.2706 5.98382 55.0895 4.81355C55.2788 4.73968 55.1887 4.73737 55.3249 4.73737Z" fill="black" data-v-9def60ad></path></svg></a>`);
}
const _sfc_setup$3l = _sfc_main$3l.setup;
_sfc_main$3l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalLinkTelegram.vue");
  return _sfc_setup$3l ? _sfc_setup$3l(props, ctx) : void 0;
};
const ModalLinkTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$3l, [["ssrRender", _sfc_ssrRender$1b], ["__scopeId", "data-v-9def60ad"]]);
const ModalLinkWhatsapp_vue_vue_type_style_index_0_scoped_ba2c3330_lang = "";
const _sfc_main$3k = {};
function _sfc_ssrRender$1a(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://wa.me/79774122010",
    class: "modal-link"
  }, _attrs))} data-v-ba2c3330><svg width="60" height="60" viewBox="0 0 60 60" fill="none" class="modal-link-icon" data-v-ba2c3330><path d="M51.2563 8.73015C48.4921 5.95194 45.1995 3.74917 41.5708 2.25032C37.942 0.75148 34.0496 -0.0134403 30.1206 0.000178708C13.6583 0.000178708 0.241207 13.3501 0.241207 29.7301C0.241207 34.9801 1.62814 40.0801 4.22111 44.58L0 60L15.8291 55.86C20.201 58.23 25.1156 59.49 30.1206 59.49C46.5829 59.49 60 46.14 60 29.7601C60 21.8101 56.8945 14.3401 51.2563 8.73015ZM30.1206 54.45C25.6583 54.45 21.2864 53.25 17.4573 51L16.5528 50.46L7.14573 52.92L9.64824 43.8L9.04523 42.8701C6.56607 38.931 5.24967 34.3778 5.24623 29.7301C5.24623 16.1101 16.402 5.01016 30.0904 5.01016C36.7236 5.01016 42.9648 7.59016 47.6382 12.2701C49.9522 14.562 51.786 17.2881 53.0333 20.2904C54.2807 23.2927 54.9167 26.5114 54.9045 29.7601C54.9648 43.3801 43.809 54.45 30.1206 54.45ZM43.7487 35.9701C42.995 35.6101 39.3166 33.8101 38.6533 33.5401C37.9598 33.3001 37.4774 33.1801 36.9648 33.9001C36.4523 34.6501 35.0352 36.3301 34.6131 36.8101C34.191 37.3201 33.7387 37.3801 32.9849 36.9901C32.2312 36.6301 29.8191 35.8201 26.9849 33.3001C24.7538 31.3201 23.2764 28.8901 22.8241 28.1401C22.402 27.3901 22.7638 27.0001 23.1558 26.6101C23.4874 26.2801 23.9095 25.7401 24.2714 25.3201C24.6332 24.9001 24.7839 24.5701 25.0251 24.0901C25.2663 23.5801 25.1457 23.1601 24.9648 22.8001C24.7839 22.4401 23.2764 18.7801 22.6734 17.2801C22.0703 15.8401 21.4372 16.0201 20.9849 15.9901H19.5377C19.0251 15.9901 18.2412 16.1701 17.5477 16.9201C16.8844 17.6701 14.9548 19.4701 14.9548 23.1301C14.9548 26.7901 17.6382 30.3301 18 30.8101C18.3618 31.3201 23.2764 38.8201 30.7538 42.0301C32.5327 42.8101 33.9196 43.2601 35.005 43.59C36.7839 44.16 38.4121 44.07 39.7085 43.89C41.1558 43.68 44.1407 42.0901 44.7437 40.3501C45.3769 38.6101 45.3769 37.1401 45.1658 36.8101C44.9548 36.4801 44.5025 36.3301 43.7487 35.9701Z" fill="black" data-v-ba2c3330></path></svg></a>`);
}
const _sfc_setup$3k = _sfc_main$3k.setup;
_sfc_main$3k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalLinkWhatsapp.vue");
  return _sfc_setup$3k ? _sfc_setup$3k(props, ctx) : void 0;
};
const ModalLinkWhatsapp = /* @__PURE__ */ _export_sfc(_sfc_main$3k, [["ssrRender", _sfc_ssrRender$1a], ["__scopeId", "data-v-ba2c3330"]]);
const ModalBase_vue_vue_type_style_index_0_scoped_83f3b2cf_lang = "";
const _sfc_main$3j = {
  __name: "ModalBase",
  __ssrInlineRender: true,
  props: ["title", "isSuccess"],
  setup(__props) {
    useModalsStore();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-wrapper" }, _attrs))} data-v-83f3b2cf><div class="modal" data-v-83f3b2cf>`);
      _push(ssrRenderComponent(ModalBlockSuccess, {
        class: ["modal-bonus-success-screen", props.isSuccess && "modal-bonus-success-screen-active"]
      }, null, _parent));
      _push(`<button class="close-button" data-v-83f3b2cf>`);
      _push(ssrRenderComponent(CloseIcon, { class: "close-button-icon" }, null, _parent));
      _push(`</button><h4 class="h-l modal-title" data-v-83f3b2cf>${ssrInterpolate(props.title)}</h4><p class="text-sm modal-text" data-v-83f3b2cf>${ssrInterpolate(
        "Заполни форму — всё остальное наш администратор берёт на себя. Он быстро свяжется с тобой, чтобы назначить визит в удобное для тебя время."
      )}</p>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<p class="text-mini modal-agreement" data-v-83f3b2cf> Нажимая кнопку «Отправить заявку», я соглашаюсь с политикой конфиденциальности </p><p class="text-sm modal-text-socials" data-v-83f3b2cf> Предпочитаешь общение через мессенджеры? <br data-v-83f3b2cf> Напиши нам. </p><div class="modal-socials-links" data-v-83f3b2cf>`);
      _push(ssrRenderComponent(ModalLinkTelegram, null, null, _parent));
      _push(ssrRenderComponent(ModalLinkWhatsapp, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3j = _sfc_main$3j.setup;
_sfc_main$3j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalBase.vue");
  return _sfc_setup$3j ? _sfc_setup$3j(props, ctx) : void 0;
};
const ModalBase = /* @__PURE__ */ _export_sfc(_sfc_main$3j, [["__scopeId", "data-v-83f3b2cf"]]);
const MButtonBig_vue_vue_type_style_index_0_scoped_0703f02b_lang = "";
const _sfc_main$3i = {
  __name: "MButtonBig",
  __ssrInlineRender: true,
  props: ["type"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "main-button",
        type: props.type
      }, _attrs))} data-v-0703f02b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$3i = _sfc_main$3i.setup;
_sfc_main$3i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButtonBig.vue");
  return _sfc_setup$3i ? _sfc_setup$3i(props, ctx) : void 0;
};
const MButtonBig = /* @__PURE__ */ _export_sfc(_sfc_main$3i, [["__scopeId", "data-v-0703f02b"]]);
const _sfc_main$3h = {
  __name: "ModalBonuse",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    emailjs.init("uWrvoY8ZWXv7j-g9-");
    const isActiveSuccess = ref(false);
    const setOpenSuccess = () => isActiveSuccess.value = true;
    const setCloseSuccess = () => isActiveSuccess.value = false;
    const dataObject = reactive({
      user_name: "",
      user_phone: "",
      price: ""
    });
    const sendSuccess = () => {
      setOpenSuccess();
      setTimeout(() => {
        setCloseSuccess();
        store.closeAllModals();
      }, 4e3);
    };
    const sendEmail = () => {
      sendSuccess();
      emailjs.send("service_03ipejb", "template_032l0us", dataObject).then(() => store.closeAllModals());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(store).isOpenModalBonuse ? null : { display: "none" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(ModalBase, { isSuccess: isActiveSuccess.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" class="modal-form" id="form_modal_bonus"${_scopeId}><input class="minput" type="text" placeholder="Имя" name="user_name"${ssrRenderAttr("value", dataObject.user_name)}${_scopeId}><input class="minput" type="text" placeholder="Телефон" name="user_phone"${ssrRenderAttr("value", dataObject.user_phone)}${_scopeId}><input class="minput" type="text" placeholder="Номинал сертификата" name="price"${ssrRenderAttr("value", dataObject.price)}${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, {
              type: "submit",
              class: "modal-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отправить заявку `);
                } else {
                  return [
                    createTextVNode(" Отправить заявку ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(sendEmail, ["prevent", "stop"]),
                method: "POST",
                class: "modal-form",
                id: "form_modal_bonus",
                ref: "formRef"
              }, [
                withDirectives(createVNode("input", {
                  class: "minput",
                  type: "text",
                  placeholder: "Имя",
                  name: "user_name",
                  "onUpdate:modelValue": ($event) => dataObject.user_name = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, dataObject.user_name]
                ]),
                withDirectives(createVNode("input", {
                  class: "minput",
                  type: "text",
                  placeholder: "Телефон",
                  name: "user_phone",
                  "onUpdate:modelValue": ($event) => dataObject.user_phone = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, dataObject.user_phone]
                ]),
                withDirectives(createVNode("input", {
                  class: "minput",
                  type: "text",
                  placeholder: "Номинал сертификата",
                  name: "price",
                  "onUpdate:modelValue": ($event) => dataObject.price = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, dataObject.price]
                ]),
                createVNode(MButtonBig, {
                  type: "submit",
                  class: "modal-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Отправить заявку ")
                  ]),
                  _: 1
                })
              ], 544)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3h = _sfc_main$3h.setup;
_sfc_main$3h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-bonuse/ModalBonuse.vue");
  return _sfc_setup$3h ? _sfc_setup$3h(props, ctx) : void 0;
};
const ModalApplication_vue_vue_type_style_index_0_scoped_0e35b2df_lang = "";
const _sfc_main$3g = {
  __name: "ModalApplication",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    emailjs.init("uWrvoY8ZWXv7j-g9-");
    const isActiveSuccess = ref(false);
    const dataObject = reactive({
      user_name: "",
      user_phone: ""
    });
    const sendSuccess = () => {
      isActiveSuccess.value = true;
      setTimeout(() => {
        isActiveSuccess.value = false;
        store.closeAllModals();
      }, 4e3);
    };
    const sendEmail = () => {
      sendSuccess();
      emailjs.send("service_03ipejb", "template_032l0us", dataObject).then(() => store.closeAllModals());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(store).isOpenModalApplication ? null : { display: "none" }
      }, _attrs))} data-v-0e35b2df>`);
      _push(ssrRenderComponent(ModalBase, { isSuccess: isActiveSuccess.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" class="modal-form" id="form_modal_bonus" data-v-0e35b2df${_scopeId}><input class="minput" type="text" placeholder="Имя" name="user_name"${ssrRenderAttr("value", dataObject.user_name)} data-v-0e35b2df${_scopeId}><input class="minput" type="text" placeholder="Телефон" name="user_phone"${ssrRenderAttr("value", dataObject.user_phone)} data-v-0e35b2df${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, {
              type: "submit",
              class: "modal-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отправить заявку `);
                } else {
                  return [
                    createTextVNode(" Отправить заявку ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(sendEmail, ["prevent", "stop"]),
                method: "POST",
                class: "modal-form",
                id: "form_modal_bonus",
                ref: "formRef"
              }, [
                withDirectives(createVNode("input", {
                  class: "minput",
                  type: "text",
                  placeholder: "Имя",
                  name: "user_name",
                  "onUpdate:modelValue": ($event) => dataObject.user_name = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, dataObject.user_name]
                ]),
                withDirectives(createVNode("input", {
                  class: "minput",
                  type: "text",
                  placeholder: "Телефон",
                  name: "user_phone",
                  "onUpdate:modelValue": ($event) => dataObject.user_phone = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, dataObject.user_phone]
                ]),
                createVNode(MButtonBig, {
                  type: "submit",
                  class: "modal-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Отправить заявку ")
                  ]),
                  _: 1
                })
              ], 544)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3g = _sfc_main$3g.setup;
_sfc_main$3g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-application/ModalApplication.vue");
  return _sfc_setup$3g ? _sfc_setup$3g(props, ctx) : void 0;
};
const ModalApplication = /* @__PURE__ */ _export_sfc(_sfc_main$3g, [["__scopeId", "data-v-0e35b2df"]]);
const ModalWrapper_vue_vue_type_style_index_0_scoped_093018ca_lang = "";
const _sfc_main$3f = {
  __name: "ModalWrapper",
  __ssrInlineRender: true,
  props: ["title", "isSuccess", "text"],
  setup(__props) {
    useModalsStore();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-wrapper" }, _attrs))} data-v-093018ca><div class="modal" data-v-093018ca><button class="close-button" data-v-093018ca></button>`);
      _push(ssrRenderComponent(ModalBlockSuccess, {
        isActive: props.isSuccess
      }, null, _parent));
      _push(`<h4 class="h-l modal-title" data-v-093018ca>${ssrInterpolate(props.title)}</h4><p class="text-sm modal-text" data-v-093018ca>${ssrInterpolate(props.text)}</p>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3f = _sfc_main$3f.setup;
_sfc_main$3f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalWrapper.vue");
  return _sfc_setup$3f ? _sfc_setup$3f(props, ctx) : void 0;
};
const ModalWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$3f, [["__scopeId", "data-v-093018ca"]]);
const ModalReplace_vue_vue_type_style_index_0_scoped_f4b5f16d_lang = "";
const _sfc_main$3e = {
  __name: "ModalReplace",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(store).isOpenModalReplace ? null : { display: "none" }
      }, _attrs))} data-v-f4b5f16d>`);
      _push(ssrRenderComponent(ModalWrapper, {
        title: "Сайт переехал",
        text: "Центр косметологии в г. Реутов переехал на новый сайт: www.zvezda-mira.ru"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="button-wrapper" data-v-f4b5f16d${_scopeId}><a href="http://www.zvezda-mira.ru/" class="absolute-link" data-v-f4b5f16d${_scopeId}></a>`);
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Перейти на сайт`);
                } else {
                  return [
                    createTextVNode("Перейти на сайт")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "button-wrapper" }, [
                createVNode("a", {
                  href: "http://www.zvezda-mira.ru/",
                  class: "absolute-link"
                }),
                createVNode(MButtonBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Перейти на сайт")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3e = _sfc_main$3e.setup;
_sfc_main$3e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-replace/ModalReplace.vue");
  return _sfc_setup$3e ? _sfc_setup$3e(props, ctx) : void 0;
};
const ModalReplace = /* @__PURE__ */ _export_sfc(_sfc_main$3e, [["__scopeId", "data-v-f4b5f16d"]]);
const ViewWrapper_vue_vue_type_style_index_0_scoped_d3bed000_lang = "";
const _sfc_main$3d = {
  __name: "ViewWrapper",
  __ssrInlineRender: true,
  setup(__props) {
    const headerStyles = ref("display: block");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-d3bed000>`);
      _push(ssrRenderComponent(Header, { style: headerStyles.value }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(ButtonFixed, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(ModalReplace, null, null, _parent));
      _push(ssrRenderComponent(ModalApplication, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3h, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3d = _sfc_main$3d.setup;
_sfc_main$3d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ViewWrapper.vue");
  return _sfc_setup$3d ? _sfc_setup$3d(props, ctx) : void 0;
};
const ViewWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$3d, [["__scopeId", "data-v-d3bed000"]]);
const _sfc_main$3c = {};
function _sfc_ssrRender$19(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    viewBox: "0 0 943 806",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_1511)"><ellipse cx="593" cy="573" rx="250" ry="133" fill="#D8C4B0"></ellipse></g><path d="M226 200C226 188.954 234.954 180 246 180H776C858.843 180 926 247.157 926 330V671C926 682.046 917.046 691 906 691H376C293.157 691 226 623.843 226 541V200Z" fill="#EDE4DA"></path><path d="M641.295 236.156C641.295 236.156 612.657 469.845 660.472 644.985L638.17 670.331C635.382 673.542 637.409 678.949 641.38 678.949H738.108C748.668 678.949 756.609 668.135 754.666 656.56C746.472 607.98 727.38 494.515 722.142 457.932L785.079 651.66L769.788 670.5C767.169 673.795 769.197 679.033 773.167 679.033H869.642C881.3 679.033 889.41 666.107 885.524 653.856C858.829 568.863 771.984 293.691 744.867 239.62L641.295 236.156Z" fill="#BAC3D8"></path><path d="M842.946 655.208C855.533 655.208 868.374 654.701 879.779 653.434C880.201 653.349 880.539 652.927 880.539 652.505C880.455 652.082 880.032 651.744 879.61 651.744C841.341 656.222 785.754 650.899 785.162 650.899C784.74 650.899 784.317 651.153 784.233 651.66C784.148 652.082 784.486 652.505 784.993 652.589C785.416 652.505 813.125 655.208 842.946 655.208Z" fill="black"></path><path d="M726.196 652.673C733.039 652.673 740.473 652.504 748.499 652.166C749.006 652.166 749.344 651.744 749.344 651.322C749.344 650.815 748.921 650.477 748.499 650.477C685.647 653.096 661.063 644.225 660.81 644.14C660.387 643.971 659.88 644.225 659.711 644.647C659.543 645.07 659.796 645.576 660.218 645.745C660.387 645.745 679.311 652.673 726.196 652.673Z" fill="black"></path><path d="M722.139 458.777C722.224 458.777 722.308 458.777 722.392 458.777C722.815 458.608 723.068 458.186 722.984 457.763L679.815 310.335C678.125 304.59 673.733 300.112 668.495 298.76L660.807 296.732C660.385 296.648 659.878 296.901 659.793 297.324C659.709 297.746 659.962 298.253 660.385 298.338L668.072 300.365C672.803 301.633 676.689 305.603 678.21 310.757L721.379 458.186C721.463 458.524 721.801 458.777 722.139 458.777Z" fill="black"></path><path d="M615.614 115.931C637.663 119.142 725.521 130.801 734.729 105.877C737.517 98.2737 732.617 88.4732 729.323 81.8833C718.847 60.7617 698.15 52.313 688.097 37.4434C681.423 27.5585 678.297 16.7443 678.297 16.7443C677.959 15.5615 674.918 5.08515 664.189 1.19877C658.698 -0.828899 651.264 -0.659926 641.38 4.66272C641.38 4.66272 632.087 3.31094 624.822 9.39396C619.584 13.7028 617.726 19.7858 616.712 25.1929C612.15 49.9474 615.445 112.045 615.614 115.931Z" fill="black"></path><path d="M419.71 59.2411C421.569 56.2841 436.606 46.6526 483.069 84.249C485.519 86.1922 487.885 88.1354 490.25 89.9096C488.391 104.019 482.562 123.789 464.822 136.631C453.164 123.282 436.352 103.343 430.27 99.3721C423.005 94.5564 426.553 87.882 426.553 87.882C422.413 83.3197 427.229 77.9971 427.229 77.9971C423.343 68.957 436.859 70.5623 436.859 70.5623C435.846 65.4086 417.851 62.1981 419.71 59.2411Z" fill="#F4EEE8"></path><path d="M464.822 137.476C464.991 137.476 465.245 137.391 465.413 137.307C465.751 136.969 465.836 136.462 465.498 136.124C463.724 134.096 461.865 131.984 460.007 129.788C448.771 116.861 436.099 102.245 430.862 98.781C424.357 94.3877 427.313 88.5581 427.398 88.3892C427.567 88.0512 427.482 87.7133 427.313 87.4598C423.765 83.489 427.82 78.9267 427.989 78.7577C428.243 78.5043 428.243 78.1663 428.158 77.8284C427.398 75.9697 427.313 74.5334 428.074 73.5196C429.763 71.2384 435.085 71.3229 436.944 71.5764C437.197 71.5764 437.451 71.4919 437.704 71.3229C437.873 71.154 437.958 70.816 437.873 70.5625C437.197 67.4366 431.96 65.2399 426.891 63.2122C424.441 62.1984 420.724 60.6776 420.555 59.9173C420.978 59.2414 422.667 57.8051 425.962 57.2137C432.889 56.0309 449.362 58.143 482.647 85.0942C484.844 86.8684 487.209 88.7271 489.828 90.8393C490.166 91.0927 490.757 91.0927 491.011 90.6703C491.264 90.3324 491.264 89.741 490.842 89.4875C488.223 87.4598 485.942 85.6011 483.661 83.8269C449.869 56.4533 432.805 54.4256 425.624 55.6085C421.991 56.1999 419.879 57.8051 419.034 59.0724C418.781 59.4948 418.697 60.0017 418.866 60.5087C419.372 62.0294 421.822 63.0433 426.215 64.8175C429.594 66.1693 433.987 67.9435 435.592 69.8022C433.227 69.7177 428.581 69.9711 426.722 72.5057C425.624 73.942 425.539 75.8007 426.384 77.9973C424.695 80.1095 422.752 84.4183 425.708 88.1357C425.032 89.9099 423.427 95.824 429.932 100.217C434.917 103.597 448.095 118.72 458.74 130.97C460.683 133.167 462.541 135.364 464.315 137.307C464.315 137.307 464.569 137.476 464.822 137.476Z" fill="black"></path><path d="M490.251 89.9096C532.068 122.775 554.37 131.561 554.37 131.561C554.37 131.561 576.757 108.328 598.299 96.584C619.841 84.8404 698.576 84.4179 698.576 84.4179C698.576 84.4179 709.22 191.293 610.38 196.869C511.539 202.445 481.887 155.556 471.243 143.812C469.384 141.784 467.272 139.334 464.822 136.631C482.478 123.789 488.392 104.019 490.251 89.9096Z" fill="white"></path><path d="M594.581 198.137C599.734 198.137 605.056 197.968 610.463 197.714C638.51 196.109 660.474 186.309 675.681 168.398C704.15 135.11 699.504 84.8406 699.504 84.3337C699.419 83.9113 699.081 83.5733 698.659 83.5733C695.449 83.5733 619.418 84.1647 597.96 95.8238C578.192 106.638 557.41 127.337 554.284 130.548C550.736 129.027 528.687 118.889 490.841 89.2339C490.587 89.0649 490.249 88.9804 489.996 89.1494C489.742 89.2339 489.489 89.4874 489.489 89.8253C487.63 103.935 481.801 123.282 464.399 135.955C464.23 136.124 464.061 136.293 464.061 136.546C464.061 136.8 464.145 137.053 464.23 137.222C467.017 140.348 469.045 142.629 470.65 144.404C471.579 145.417 472.593 146.6 473.776 148.121C480.534 156.147 491.854 169.665 513.058 180.817C535.192 192.307 562.563 198.137 594.581 198.137ZM697.814 85.263C698.237 91.684 700.433 136.8 674.329 167.299C659.376 184.788 637.834 194.419 610.294 196.025C520.324 201.094 488.56 163.16 474.958 146.938C473.691 145.502 472.678 144.235 471.748 143.221C470.228 141.615 468.454 139.503 466.004 136.715C482.731 124.211 488.729 105.54 490.841 91.4306C531.559 123.282 553.862 132.237 554.031 132.322C554.369 132.406 554.707 132.406 554.96 132.153C555.214 131.9 577.516 108.919 598.636 97.3446C618.657 86.4459 689.535 85.3475 697.814 85.263Z" fill="black"></path><path d="M399.092 152.416C371.909 145.34 355.58 117.676 362.62 90.6262C369.66 63.5765 397.403 47.3845 424.586 54.4603C451.769 61.5361 468.098 89.2002 461.058 116.25C454.018 143.3 426.275 159.492 399.092 152.416Z" fill="#BAC3D8"></path><path d="M431.79 88.5581C424.441 86.615 416.837 91.5152 414.81 99.3724C414.81 99.4569 414.725 99.5414 414.641 99.7103C414.641 99.5414 414.641 99.3724 414.641 99.3724C416.668 91.5152 412.36 83.5734 405.095 81.7147C397.745 79.7716 390.142 84.6718 388.115 92.529C382.792 112.89 407.46 127.084 407.46 127.084C407.46 127.084 407.46 127.084 407.545 126.999C407.545 127.084 407.545 127.084 407.545 127.084C407.545 127.084 436.014 126.746 441.336 106.385C443.364 98.4431 439.14 90.5013 431.79 88.5581Z" fill="white"></path><path d="M458.821 79.8558C454.766 79.7713 450.711 80.1938 446.825 81.0386C444.713 81.4611 442.263 82.4749 441.841 84.5026C441.419 86.1923 442.517 87.882 443.953 88.8959C446.825 91.177 450.796 91.4305 454.428 91.8529C458.061 92.2753 462.116 93.1202 464.312 95.9927L458.821 79.8558Z" fill="#F4EEE8"></path><path d="M561.467 137.138C561.72 137.138 561.974 136.969 562.143 136.8C562.396 136.377 562.312 135.87 561.889 135.617L554.877 130.886C554.455 130.632 553.948 130.717 553.695 131.139C553.441 131.562 553.526 132.069 553.948 132.322L560.96 137.053C561.129 137.138 561.298 137.138 561.467 137.138Z" fill="black"></path><path d="M655.661 85.3472C705.503 84.0799 699.167 84.4178 699.167 84.4178C699.167 84.4178 742.674 106.215 763.202 177.86C772.918 211.739 771.481 231.762 767.089 243.421C763.371 253.475 758.134 254.32 742.252 256.855L638.427 266.908C629.979 264.965 623.897 259.136 622.291 250.603C614.181 207.346 600.749 152.345 595.934 136.546C590.105 117.537 605.734 86.53 655.661 85.3472Z" fill="white"></path><path d="M638.85 267.669C639.273 267.669 639.61 267.416 639.695 266.993C639.779 266.571 639.526 266.064 639.019 265.98C630.656 264.121 625.08 258.376 623.559 250.35C615.449 207.261 603.115 159.696 598.3 143.812C598.131 143.39 597.709 143.136 597.286 143.221C596.864 143.39 596.611 143.812 596.695 144.235C601.51 160.118 613.844 207.599 621.954 250.603C623.644 259.39 629.726 265.557 638.766 267.585C638.681 267.669 638.766 267.669 638.85 267.669Z" fill="black"></path><path d="M751.713 256.094C751.798 256.094 751.798 256.094 751.882 256.094C759.739 254.405 764.216 252.039 767.257 243.844C772.917 228.636 771.566 206.416 763.371 177.691C763.202 177.269 762.78 177.015 762.358 177.1C761.935 177.269 761.682 177.691 761.766 178.114C769.876 206.416 771.228 228.298 765.652 243.168C763.118 249.927 759.823 252.546 751.46 254.405C751.037 254.489 750.699 254.912 750.784 255.419C750.953 255.841 751.375 256.094 751.713 256.094Z" fill="black"></path><path d="M551.624 183.566C543.289 156.546 558.543 127.85 585.695 119.473C612.848 111.096 641.616 126.209 649.951 153.23C658.286 180.251 643.032 208.947 615.88 217.324C588.727 225.701 559.959 210.587 551.624 183.566Z" fill="#BAC3D8"></path><path d="M614.095 156.4L618.826 148.627C620.431 145.923 621.022 141.615 618.319 140.009C615.7 138.404 613.25 139.84 610.547 143.304L604.633 149.894C601.508 153.274 596.777 154.963 593.736 154.963C591.455 154.963 589.427 156.484 588.751 158.681L584.443 173.804C583.767 176.085 584.274 178.535 585.71 180.394C589.427 183.435 593.736 185.717 598.298 186.984C598.298 186.984 607.759 189.518 612.912 191.039C615.278 191.715 617.897 190.363 618.488 187.913C618.742 186.899 618.657 185.885 618.235 185.041C618.15 184.787 618.404 184.365 618.657 184.449L619.248 184.618C621.445 184.956 623.303 183.52 624.064 181.999C624.571 180.985 624.824 179.802 623.895 178.028C625.5 177.69 627.527 176.17 627.95 174.395C628.372 172.706 627.527 171.438 626.429 170.509C625.838 170.002 625.922 169.157 626.598 168.819C627.443 168.397 628.203 167.636 628.626 166.2C629.301 163.835 628.119 162.145 625.5 161.131C621.022 159.188 614.095 156.4 614.095 156.4Z" fill="white"></path><path d="M572.7 177.268L577.938 178.704C579.374 179.127 580.81 178.282 581.233 176.846L587.231 155.386C587.653 153.95 586.808 152.514 585.372 152.091L580.135 150.655C578.698 150.232 577.262 151.077 576.84 152.514L570.842 173.973C570.504 175.409 571.264 176.93 572.7 177.268Z" fill="white"></path><path d="M661.743 180.985L684.292 199.99C684.292 199.99 706.855 168.47 703.475 159.43C701.194 153.432 671.686 143.555 661.743 142.459C654.147 141.383 651.014 142.29 646.791 142.459C641.13 142.628 633.527 143.22 630.317 145.501C624.91 149.387 639.103 151.161 644.594 151.415C644.594 151.415 629.388 152.091 630.317 156.568C631.162 161.046 641.891 159.357 650.761 161.638C650.761 161.638 631.669 160.624 633.781 165.862C635.808 170.931 646.453 168.903 652.451 170.762C652.451 170.762 639.863 168.903 639.694 174.48C639.61 179.549 656.59 177.437 661.743 180.985Z" fill="#F4EEE8"></path><path d="M683.959 200.84C684.212 200.84 684.381 200.755 684.55 200.586C696.124 188.251 702.713 169.664 705.67 159.695C705.754 159.272 705.585 158.935 705.247 158.681C701.953 156.907 698.405 155.048 694.688 153.105C671.794 141.277 655.405 140.01 645.69 141.108C645.267 141.192 644.929 141.615 644.929 142.037C645.014 142.46 645.436 142.798 645.859 142.798C653.631 141.953 670.189 142.375 693.927 154.626C697.391 156.4 700.77 158.174 703.896 159.864C701.024 169.664 694.688 186.9 684.043 198.728C675.342 188.927 665.627 179.718 653.969 177.944C653.293 177.86 652.617 177.691 651.941 177.606C651.434 177.522 651.012 177.86 650.927 178.282C650.843 178.704 651.181 179.211 651.603 179.296C652.279 179.38 652.955 179.549 653.631 179.634C665.035 181.408 674.666 190.701 683.283 200.586C683.536 200.671 683.705 200.84 683.959 200.84Z" fill="black"></path><path d="M733.63 177.268L678.803 92.3594L698.571 84.4176C698.571 84.4176 730.081 81.0382 770.124 136.63C809.069 190.702 822.333 222.13 793.779 244.688C765.225 267.246 718.254 234.465 703.555 221.624C697.219 216.047 690.799 207.768 683.956 199.995C695.445 187.745 702.034 169.158 704.822 159.442C731.264 173.551 733.63 177.268 733.63 177.268Z" fill="white"></path><path d="M770.295 253.137C778.997 253.137 787.276 250.856 794.372 245.28C823.855 222.046 808.818 188.928 770.802 136.124C757.201 117.283 746.641 106.976 734.814 97.3443C734.476 97.0908 733.885 97.0908 733.631 97.4288C733.293 97.7667 733.378 98.3581 733.716 98.6116C745.374 108.159 755.934 118.381 769.366 137.137C791.162 167.384 802.228 186.984 806.368 202.699C811.014 220.103 806.79 233.283 793.189 244.013C767.001 264.712 723.409 238.014 704.064 220.948C699.502 216.977 694.94 211.57 690.125 205.909C688.435 203.966 686.745 201.938 685.056 199.995C695.954 188.083 702.29 170.679 705.331 160.625C729.83 173.889 732.787 177.606 732.871 177.691C733.124 178.029 733.631 178.113 734.054 177.86C734.392 177.606 734.561 177.099 734.307 176.677C734.054 176.255 731.097 172.453 705.246 158.512C704.993 158.428 704.74 158.343 704.486 158.512C704.233 158.597 704.064 158.85 703.979 159.019C701.107 168.82 694.602 187.153 683.282 199.235C682.944 199.573 682.944 200.08 683.282 200.333C685.14 202.445 687.083 204.727 688.857 206.839C693.673 212.584 698.319 217.991 702.965 222.046C717.58 235.057 745.712 253.137 770.295 253.137Z" fill="black"></path><path d="M732.87 177.353C732.955 177.353 733.124 177.353 733.208 177.268C733.631 177.099 733.8 176.592 733.631 176.17L713.44 134.349C713.271 133.927 712.764 133.758 712.342 133.927C711.919 134.096 711.75 134.602 711.919 135.025L732.11 176.846C732.279 177.184 732.532 177.353 732.87 177.353Z" fill="black"></path><path d="M751.624 194.757C751.793 194.757 752.046 194.673 752.215 194.504C752.553 194.166 752.553 193.659 752.3 193.321C746.555 186.9 740.219 181.07 733.461 175.832C727.97 171.608 722.056 167.806 715.974 164.427C715.551 164.173 715.045 164.342 714.791 164.764C714.538 165.187 714.707 165.694 715.129 165.947C721.127 169.242 726.956 173.044 732.447 177.184C739.121 182.338 745.457 188.083 751.033 194.419C751.117 194.673 751.371 194.757 751.624 194.757Z" fill="black"></path><path d="M640.454 88.3043L651.52 116.692L673.062 84.3334C673.062 84.3334 663.939 81.123 662.841 77.0676L655.322 50.3699L634.287 60.9307L640.454 88.3043Z" fill="white"></path><path d="M651.603 117.537C651.856 117.537 652.11 117.368 652.279 117.199L673.821 84.8406C673.99 84.5871 673.99 84.3337 673.905 84.0802C673.821 83.8268 673.652 83.6578 673.399 83.5733C670.949 82.7284 664.528 79.8559 663.683 76.8989L656.165 50.2012C656.08 49.9477 655.911 49.7787 655.658 49.6942C655.405 49.6098 655.151 49.6098 654.898 49.6942L633.947 60.1706C633.609 60.3395 633.44 60.762 633.524 61.0999L639.691 88.4735V88.558L650.843 117.03C650.927 117.283 651.265 117.537 651.518 117.537H651.603ZM671.878 84.7561L651.856 114.833L641.381 87.9666L635.383 61.3534L654.898 51.5529L662.163 77.3213C663.092 80.9542 669.259 83.7423 671.878 84.7561Z" fill="black"></path><path d="M653.545 45.4699C653.545 45.4699 657.6 36.3453 663.344 37.4437C672.13 39.1334 673.228 54.2565 659.289 55.1013C659.289 55.1013 645.181 77.9972 628.708 73.9418C612.235 69.8865 619.753 32.9659 622.203 26.5449C622.203 26.5449 642.9 21.3913 645.857 33.8108C647.631 41.1611 646.449 46.3147 653.545 45.4699Z" fill="white"></path><path d="M632.764 75.2939C646.788 75.2939 658.023 58.7346 659.797 55.9465C667.485 55.2707 670.526 50.4549 670.78 46.3996C671.118 41.6683 667.992 37.444 663.599 36.5992C658.023 35.5008 653.968 42.7667 653.039 44.6254C648.731 44.9633 648.308 42.7667 647.632 38.1199C647.379 36.7681 647.21 35.2474 646.788 33.6421C646.112 30.7696 644.507 28.5729 641.972 26.9677C634.707 22.5744 622.627 25.5314 622.12 25.7004C621.866 25.7849 621.613 25.9539 621.528 26.2073C619.585 31.4455 614.348 56.1155 620.768 68.2816C622.627 71.7455 625.245 73.9422 628.625 74.787C629.976 75.125 631.412 75.2939 632.764 75.2939ZM662.416 38.2044C662.67 38.2044 662.923 38.2044 663.177 38.2889C667.232 39.0493 669.175 43.0201 669.006 46.3151C668.752 49.8635 666.049 53.8344 659.206 54.2568C658.953 54.2568 658.699 54.4258 658.53 54.6792C658.361 54.9327 644.591 76.9837 628.878 73.1818C626.006 72.5059 623.725 70.5627 622.12 67.5212C616.375 56.7914 620.515 33.8956 622.796 27.3057C624.992 26.7987 635.045 24.94 640.959 28.4885C643.071 29.7558 644.422 31.6145 645.014 34.0646C645.352 35.5853 645.605 37.1061 645.858 38.4579C646.619 43.2736 647.21 47.0755 653.63 46.3151C653.968 46.3151 654.222 46.0616 654.306 45.8082C654.391 45.7237 657.854 38.2044 662.416 38.2044Z" fill="black"></path><path d="M657.095 50.8773C657.349 50.8773 657.602 50.7928 657.771 50.5394C659.46 48.5962 662.079 47.4978 664.614 47.6668C665.121 47.7513 665.458 47.3289 665.543 46.9064C665.543 46.3995 665.205 46.0616 664.783 45.9771C661.657 45.7236 658.531 47.0754 656.504 49.441C656.166 49.779 656.25 50.3704 656.588 50.6238C656.673 50.7928 656.926 50.8773 657.095 50.8773Z" fill="black"></path><path d="M326.111 254.894C317.567 227.208 333.191 197.802 361.009 189.216C388.827 180.63 418.305 196.114 426.849 223.8C435.394 251.487 419.769 280.892 391.951 289.479C364.133 298.065 334.656 282.581 326.111 254.894Z" fill="#BAC3D8"></path><path d="M379.915 223.905L378.816 214.865C378.479 211.739 376.113 208.022 373.072 208.36C369.946 208.698 369.017 211.317 369.101 215.795L368.51 224.666C368.172 229.312 365.553 233.537 363.103 235.48C361.329 236.916 360.653 239.366 361.498 241.479L367.581 256.01C368.51 258.207 370.369 259.812 372.65 260.403C377.465 260.488 382.196 259.559 386.673 257.784C386.673 257.784 395.628 253.898 400.612 251.87C402.893 250.941 404.076 248.237 403.062 245.956C402.64 245.027 401.964 244.267 401.119 243.844C400.866 243.675 400.781 243.253 401.034 243.084L401.626 242.83C403.569 241.816 404.076 239.451 403.822 237.846C403.569 236.663 403.062 235.649 401.203 234.889C402.217 233.621 402.893 231.171 402.133 229.481C401.457 227.876 399.936 227.369 398.5 227.369C397.74 227.369 397.317 226.609 397.571 225.933C397.993 225.088 398.078 223.99 397.486 222.554C396.557 220.272 394.53 219.681 391.911 220.526C387.095 221.793 379.915 223.905 379.915 223.905Z" fill="white"></path><path d="M360.483 265.979L365.552 263.867C366.903 263.276 367.579 261.755 366.988 260.403L358.371 239.789C357.78 238.437 356.259 237.761 354.907 238.352L349.839 240.465C348.487 241.056 347.811 242.577 348.403 243.929L357.019 264.543C357.526 265.895 359.131 266.571 360.483 265.979Z" fill="white"></path><path d="M287.66 354.505L264.361 375.892L242.916 352.535C200.743 306.539 129.356 303.376 83.3555 345.553C37.3552 387.73 34.186 459.118 76.3592 505.114L251.086 679.722L440.165 521.108C486.165 478.931 489.334 407.544 447.161 361.547C405.048 315.491 333.66 312.328 287.66 354.505Z" fill="#D8C4B0"></path><g opacity="0.3"><path d="M143.156 362V380.309L142.066 380.51C136.684 381.583 131.711 383.797 127.283 386.949C118.563 393.119 113.113 402.777 112.023 413.239H125.852V428.732H112.16V460.522H92.8125V414.446C92.9487 412.971 93.085 411.495 93.2894 410.154C93.3575 409.551 93.4937 408.947 93.5619 408.343C95.6056 397.21 101.124 386.68 109.23 378.565C118.018 369.712 129.259 364.079 141.657 362.268L143.156 362Z" fill="#F4EEE8"></path><path d="M173.81 381.449V427.659C173.674 429.134 173.537 430.61 173.333 431.951C173.265 432.555 173.129 433.158 173.061 433.762C171.017 444.895 165.499 455.425 157.392 463.54C148.604 472.393 137.364 478.027 124.965 479.838L123.398 480.039V461.729L124.488 461.528C129.87 460.455 134.843 458.242 139.271 455.09C147.991 448.919 153.441 439.262 154.531 428.799H140.089V413.306H154.395V381.516H173.81V381.449Z" fill="#F4EEE8"></path></g><path d="M338.245 443.483C314.913 427.769 308.666 396.22 324.291 373.015C339.915 349.811 371.496 343.738 394.828 359.452C418.16 375.165 424.408 406.714 408.783 429.919C393.158 453.123 361.577 459.196 338.245 443.483Z" fill="#BAC3D8"></path><path d="M364.531 376.616C370.838 380.853 372.25 389.703 367.732 396.481C367.732 396.575 367.637 396.669 367.543 396.858C367.637 396.764 367.732 396.669 367.826 396.575C372.344 389.797 381.099 387.82 387.407 392.056C393.714 396.293 395.126 405.143 390.608 411.921C378.84 429.339 351.916 420.301 351.916 420.301C351.916 420.301 351.916 420.301 351.916 420.206C351.822 420.206 351.822 420.206 351.822 420.206C351.822 420.206 333.277 398.647 344.95 381.229C349.469 374.451 358.224 372.379 364.531 376.616Z" fill="white"></path><path d="M285.299 419.999L456.031 422.28L455.355 472.972L284.623 475.676L285.299 419.999Z" fill="#D8C4B0"></path><path d="M456.03 423.125C456.453 423.125 456.875 422.787 456.875 422.28C456.875 421.773 456.537 421.435 456.03 421.435L285.298 419.154C284.876 419.154 284.453 419.492 284.453 419.999C284.453 420.506 284.791 420.844 285.298 420.844L456.03 423.125Z" fill="black"></path><defs><filter id="filter0_f_1_1511" x="243" y="340" width="700" height="466" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1511"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$3c = _sfc_main$3c.setup;
_sfc_main$3c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PictureReviews.vue");
  return _sfc_setup$3c ? _sfc_setup$3c(props, ctx) : void 0;
};
const PictureReviews = /* @__PURE__ */ _export_sfc(_sfc_main$3c, [["ssrRender", _sfc_ssrRender$19]]);
const ButtonLink_vue_vue_type_style_index_0_scoped_7e546c10_lang = "";
const _sfc_main$3b = {};
const _sfc_setup$3b = _sfc_main$3b.setup;
_sfc_main$3b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonLink.vue");
  return _sfc_setup$3b ? _sfc_setup$3b(props, ctx) : void 0;
};
const SectionReviewPacients_vue_vue_type_style_index_0_scoped_d820c65a_lang = "";
const _sfc_main$3a = {
  __name: "SectionReviewPacients",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review-pactients" }, _attrs))} data-v-d820c65a>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-d820c65a${_scopeId}><h3 class="heading h-l" data-v-d820c65a${_scopeId}> Наши пациенты стали нам добрыми друзьями. <br data-v-d820c65a${_scopeId}><br data-v-d820c65a${_scopeId}> Они хорошеют год от года и оставляют положительные отзывы. <br data-v-d820c65a${_scopeId}><br data-v-d820c65a${_scopeId}> Присоединяйся и ты! </h3><div class="picture-wrapper" data-v-d820c65a${_scopeId}>`);
            _push2(ssrRenderComponent(PictureReviews, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("h3", { class: "heading h-l" }, [
                  createTextVNode(" Наши пациенты стали нам добрыми друзьями. "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Они хорошеют год от года и оставляют положительные отзывы. "),
                  createVNode("br"),
                  createVNode("br"),
                  createTextVNode(" Присоединяйся и ты! ")
                ]),
                createVNode("div", { class: "picture-wrapper" }, [
                  createVNode(PictureReviews)
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
const _sfc_setup$3a = _sfc_main$3a.setup;
_sfc_main$3a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-review-pacients/SectionReviewPacients.vue");
  return _sfc_setup$3a ? _sfc_setup$3a(props, ctx) : void 0;
};
const SectionReviewPacients = /* @__PURE__ */ _export_sfc(_sfc_main$3a, [["__scopeId", "data-v-d820c65a"]]);
const _imports_0$r = "/assets/model-afa01ebb.jpg";
const swiper = "";
const SectionStories_vue_vue_type_style_index_0_scoped_5be6b0d2_lang = "";
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {};
  }
};
const _sfc_main$39 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "SectionStories",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-stories" }, _attrs))} data-v-5be6b0d2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-xl heading" data-v-5be6b0d2${_scopeId}>Истории наших клиентов</h2><h5 class="text" data-v-5be6b0d2${_scopeId}> Это поможет тебе лучше понять структуру плана лечения и ориентироваться в его стоимости </h5>`);
          } else {
            return [
              createVNode("h2", { class: "h-xl heading" }, "Истории наших клиентов"),
              createVNode("h5", { class: "text" }, " Это поможет тебе лучше понять структуру плана лечения и ориентироваться в его стоимости ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, { class: "container-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-group" data-v-5be6b0d2${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              class: "swiper-custom",
              breakpoints: {
                300: { slidesPerView: 1.2 },
                600: { slidesPerView: 2.2 },
                900: { slidesPerView: 3 }
              },
              "space-between": 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0$r)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0$r,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0$r)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0$r,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0$r)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0$r,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-group" }, [
                createVNode(unref(Swiper), {
                  class: "swiper-custom",
                  breakpoints: {
                    300: { slidesPerView: 1.2 },
                    600: { slidesPerView: 2.2 },
                    900: { slidesPerView: 3 }
                  },
                  "space-between": 24
                }, {
                  default: withCtx(() => [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0$r,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$39 = _sfc_main$39.setup;
_sfc_main$39.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-stories/SectionStories.vue");
  return _sfc_setup$39 ? _sfc_setup$39(props, ctx) : void 0;
};
const SectionStories = /* @__PURE__ */ _export_sfc(_sfc_main$39, [["__scopeId", "data-v-5be6b0d2"]]);
const _imports_0$q = "/assets/Avatar-64292437.png";
const _sfc_main$38 = {};
function _sfc_ssrRender$18(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "76",
    height: "51",
    viewBox: "0 0 76 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="76" height="51" rx="25.5" fill="#5081FF"></rect><path d="M46.7827 22.4783L32.8027 13.4952C30.3924 12.1228 27.5 13.7448 27.5 16.6144V34.4558C27.5 37.2007 30.3924 38.9474 32.8027 37.4502L46.7827 28.467C49.0724 27.0946 49.0724 23.8508 46.7827 22.4783Z" fill="white"></path></svg>`);
}
const _sfc_setup$38 = _sfc_main$38.setup;
_sfc_main$38.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconPlay.vue");
  return _sfc_setup$38 ? _sfc_setup$38(props, ctx) : void 0;
};
const IconPlay = /* @__PURE__ */ _export_sfc(_sfc_main$38, [["ssrRender", _sfc_ssrRender$18]]);
const CardMaster_vue_vue_type_style_index_0_scoped_c66d982d_lang = "";
const _sfc_main$37 = {
  __name: "CardMaster",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-master" }, _attrs))} data-v-c66d982d><a href="https://youtube.com" target="_blank" data-v-c66d982d><div class="card-img-wrapper" data-v-c66d982d><img${ssrRenderAttr("src", _imports_0$q)} class="card-img" data-v-c66d982d>`);
      _push(ssrRenderComponent(IconPlay, { class: "card-icon" }, null, _parent));
      _push(`</div></a><a href="https://youtube.com" target="_blank" data-v-c66d982d><h5 class="h-md card-heading" data-v-c66d982d>Ольга Заика</h5></a><a href="https://youtube.com" target="_blank" data-v-c66d982d><p class="text-sm" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c66d982d> Главный врач, врач-косметолог </p></a></div>`);
    };
  }
};
const _sfc_setup$37 = _sfc_main$37.setup;
_sfc_main$37.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/CardMaster.vue");
  return _sfc_setup$37 ? _sfc_setup$37(props, ctx) : void 0;
};
const CardMaster = /* @__PURE__ */ _export_sfc(_sfc_main$37, [["__scopeId", "data-v-c66d982d"]]);
const MButtonOutline_vue_vue_type_style_index_0_scoped_296ad36e_lang = "";
const _sfc_main$36 = {};
function _sfc_ssrRender$17(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "main-button-outline" }, _attrs))} data-v-296ad36e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$36 = _sfc_main$36.setup;
_sfc_main$36.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButtonOutline.vue");
  return _sfc_setup$36 ? _sfc_setup$36(props, ctx) : void 0;
};
const MButtonOutline = /* @__PURE__ */ _export_sfc(_sfc_main$36, [["ssrRender", _sfc_ssrRender$17], ["__scopeId", "data-v-296ad36e"]]);
const SwiperMasters_vue_vue_type_style_index_0_scoped_9df8d3a8_lang = "";
const _sfc_main$35 = {
  __name: "SwiperMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        class: "swiper-custom",
        "space-between": 14,
        slidesPerView: "auto"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$35 = _sfc_main$35.setup;
_sfc_main$35.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/SwiperMasters.vue");
  return _sfc_setup$35 ? _sfc_setup$35(props, ctx) : void 0;
};
const SwiperMasters = /* @__PURE__ */ _export_sfc(_sfc_main$35, [["__scopeId", "data-v-9df8d3a8"]]);
const MButtonOutlineBig_vue_vue_type_style_index_0_scoped_d1cddbde_lang = "";
const _sfc_main$34 = {};
function _sfc_ssrRender$16(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "main-button-outline" }, _attrs))} data-v-d1cddbde>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$34 = _sfc_main$34.setup;
_sfc_main$34.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButtonOutlineBig.vue");
  return _sfc_setup$34 ? _sfc_setup$34(props, ctx) : void 0;
};
const MButtonOutlineBig = /* @__PURE__ */ _export_sfc(_sfc_main$34, [["ssrRender", _sfc_ssrRender$16], ["__scopeId", "data-v-d1cddbde"]]);
const SectionMasters_vue_vue_type_style_index_0_scoped_3eb319a7_lang = "";
const _sfc_main$33 = {
  __name: "SectionMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-masters" }, _attrs))} data-v-3eb319a7>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-3eb319a7${_scopeId}>Давай знакомиться</h3><h5 class="text-lg section-subtitle" data-v-3eb319a7${_scopeId}> Врачи-косметологи Face Concept помогут вернуть твоей коже молодость и красоту! </h5>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Давай знакомиться"),
              createVNode("h5", { class: "text-lg section-subtitle" }, " Врачи-косметологи Face Concept помогут вернуть твоей коже молодость и красоту! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, { class: "container-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SwiperMasters, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(CardMaster, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(CardMaster)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode(CardMaster)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(SwiperMasters, null, {
                default: withCtx(() => [
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode(CardMaster)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-button-wrapper" data-v-3eb319a7${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonOutlineBig, { class: "section-button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Показать ещё врачей `);
                } else {
                  return [
                    createTextVNode(" Показать ещё врачей ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "section-button-wrapper" }, [
                createVNode(MButtonOutlineBig, { class: "section-button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Показать ещё врачей ")
                  ]),
                  _: 1
                })
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
const _sfc_setup$33 = _sfc_main$33.setup;
_sfc_main$33.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-masters/SectionMasters.vue");
  return _sfc_setup$33 ? _sfc_setup$33(props, ctx) : void 0;
};
const SectionMasters$1 = /* @__PURE__ */ _export_sfc(_sfc_main$33, [["__scopeId", "data-v-3eb319a7"]]);
const _sfc_main$32 = {};
function _sfc_ssrRender$15(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "heading-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "233",
    height: "89",
    viewBox: "0 0 233 89",
    fill: "none"
  }, _attrs))}><path d="M224.894 88.3592C225.652 88.6939 226.537 88.3509 226.872 87.5931L232.326 75.2439C232.661 74.4861 232.318 73.6005 231.56 73.2658C230.802 72.9311 229.917 73.2741 229.582 74.0319L224.734 85.0089L213.757 80.1607C212.999 79.826 212.113 80.169 211.779 80.9268C211.444 81.6846 211.787 82.5703 212.545 82.905L224.894 88.3592ZM2.29642 28.7582C80.7209 -20.3794 191.03 2.13715 224.101 87.5288L226.899 86.4453C192.97 -1.16203 80.2792 -23.6429 0.703568 26.216L2.29642 28.7582Z" fill="black"></path></svg>`);
}
const _sfc_setup$32 = _sfc_main$32.setup;
_sfc_main$32.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesArrow.vue");
  return _sfc_setup$32 ? _sfc_setup$32(props, ctx) : void 0;
};
const SectionCirclesArrow = /* @__PURE__ */ _export_sfc(_sfc_main$32, [["ssrRender", _sfc_ssrRender$15]]);
const _sfc_main$31 = {};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "74",
    height: "58",
    viewBox: "0 0 74 58",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path id="Arrow 1" d="M59.4453 56.4967C59.9 57.1892 60.83 57.382 61.5225 56.9272L72.807 49.5171C73.4994 49.0624 73.6922 48.1324 73.2375 47.4399C72.7827 46.7475 71.8528 46.5547 71.1603 47.0094L61.1296 53.5962L54.5428 43.5655C54.0881 42.8731 53.1581 42.6803 52.4657 43.1351C51.7732 43.5898 51.5804 44.5198 52.0352 45.2122L59.4453 56.4967ZM1.10045 3.87053C18.2578 2.75098 34.4042 8.17373 45.4365 17.6121C56.4437 27.029 62.3333 40.3967 59.2303 55.369L62.1679 55.9778C65.5277 39.7661 59.0853 25.3409 47.3868 15.3325C35.7133 5.34557 18.7801 -0.28948 0.905115 0.876897L1.10045 3.87053Z" fill="black"></path></svg>`);
}
const _sfc_setup$31 = _sfc_main$31.setup;
_sfc_main$31.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesArrowSm.vue");
  return _sfc_setup$31 ? _sfc_setup$31(props, ctx) : void 0;
};
const SectionCirclesArrowSm = /* @__PURE__ */ _export_sfc(_sfc_main$31, [["ssrRender", _sfc_ssrRender$14]]);
const _imports_0$p = "/assets/AvatarImg-d3a63f9a.png";
const Avatar_vue_vue_type_style_index_0_scoped_d30b1028_lang = "";
const _sfc_main$30 = {
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-wrapper" }, _attrs))} data-v-d30b1028><a href="#" class="avatar-link" data-v-d30b1028></a><div class="avatar" data-v-d30b1028><img${ssrRenderAttr("src", _imports_0$p)} alt="" class="avatar-img" data-v-d30b1028>`);
      _push(ssrRenderComponent(IconPlay, { class: "avatar-play-icon" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$30 = _sfc_main$30.setup;
_sfc_main$30.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/Avatar.vue");
  return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$30, [["__scopeId", "data-v-d30b1028"]]);
const SectionCirclesBlock_vue_vue_type_style_index_0_scoped_069c44af_lang = "";
const _sfc_main$2$ = {
  __name: "SectionCirclesBlock",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-069c44af><div class="groups" data-v-069c44af><div class="group" style="${ssrRenderStyle({ "padding-bottom": "34px" })}" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(`</div><div class="group group-center" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(`</div><div class="group" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2$ = _sfc_main$2$.setup;
_sfc_main$2$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesBlock.vue");
  return _sfc_setup$2$ ? _sfc_setup$2$(props, ctx) : void 0;
};
const SectionCirclesBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2$, [["__scopeId", "data-v-069c44af"]]);
const SectionCircles_vue_vue_type_style_index_0_scoped_7e756146_lang = "";
const _sfc_main$2_ = {
  __name: "SectionCircles",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-7e756146>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-l heading" data-v-7e756146${_scopeId}><span style="${ssrRenderStyle({ "position": "relative" })}" data-v-7e756146${_scopeId}> Отзывы клиентов в кружочках `);
            _push2(ssrRenderComponent(SectionCirclesArrowSm, { class: "heading-icon-sm" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(SectionCirclesArrow, { class: "heading-icon" }, null, _parent2, _scopeId));
            _push2(`</h3>`);
            _push2(ssrRenderComponent(SectionCirclesBlock, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "h-l heading" }, [
                createVNode("span", { style: { "position": "relative" } }, [
                  createTextVNode(" Отзывы клиентов в кружочках "),
                  createVNode(SectionCirclesArrowSm, { class: "heading-icon-sm" })
                ]),
                createVNode(SectionCirclesArrow, { class: "heading-icon" })
              ]),
              createVNode(SectionCirclesBlock)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2_ = _sfc_main$2_.setup;
_sfc_main$2_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCircles.vue");
  return _sfc_setup$2_ ? _sfc_setup$2_(props, ctx) : void 0;
};
const SectionCircles = /* @__PURE__ */ _export_sfc(_sfc_main$2_, [["__scopeId", "data-v-7e756146"]]);
const _sfc_main$2Z = {};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "419",
    height: "710",
    viewBox: "0 0 419 710",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1_1444)"><path d="M216 147.3C216.2 136.6 216.4 125.5 219.6 115.4C222.4 106.7 227.4 99 228.8 89.8C230.2 79.8 226.9 69.9 221.7 63.4C216.9 57.4 211.3 53.7 203 50.4C189.8 45.2 168.7 36.9 145.3 42.7C115.5 50.2 98.8 76.5 89 91.8C68.3 124.3 75.4 134.6 47 195C37.9 214.3 34.2 219.4 28.3 236C25.5 243.8 5.09997 300.6 21.9 313.5C22.1 313.7 23 314.7 24.5 315C31 316.5 39.1 302.5 61.6 298.8C98.7 292.7 114.3 328.5 171.4 330.5C180.7 330.8 190.4 330.7 199.1 324.8C219.3 311.1 214.3 273.4 214.6 249.2C215 215.3 215.5 181.3 216 147.3Z" fill="black"></path><path d="M329.702 708.5L264.902 450.5L92.9024 485.5C39.1024 556.6 30.0024 649 30.1024 708.5H329.702Z" fill="white"></path><path d="M329.703 709.5C329.303 709.5 328.803 709.2 328.703 708.7C323.303 687.3 317.703 664.9 312.003 642.1C296.003 578 279.403 511.7 263.703 452.1C256.003 453.6 248.303 455.1 240.703 456.6C192.303 466.1 142.203 475.9 93.4031 486.3C53.1031 539.3 32.2031 614 31.2031 708.4C31.2031 709 30.7031 709.4 30.2031 709.4C29.6031 709.4 29.2031 708.9 29.2031 708.4C29.7031 663.7 34.6031 623.2 43.8031 587.9C54.2031 547.9 70.5031 513.2 92.1031 484.8C92.2031 484.6 92.5031 484.5 92.7031 484.4C141.603 473.9 191.803 464.1 240.403 454.6C248.403 453 256.403 451.5 264.403 449.9C264.903 449.8 265.403 450.1 265.603 450.6C281.303 510.5 298.003 577.1 314.103 641.5C319.803 664.3 325.403 686.6 330.803 708.1C330.903 708.6 330.603 709.2 330.103 709.3C329.803 709.5 329.703 709.5 329.703 709.5Z" fill="black"></path><path d="M197.903 708.3C197.403 708.3 196.903 707.9 196.903 707.4C196.603 702 196.103 693.4 195.703 685C195.303 676.6 194.803 667.9 194.503 662.5C194.303 659 194.103 655.4 193.803 651.9C193.303 644.9 192.903 637.7 192.503 630.7C191.803 616.6 199.203 603.9 211.203 598.1C215.303 596.1 219.603 594.3 223.803 592.5C225.903 591.6 228.003 590.7 230.003 589.8C230.503 589.6 231.103 589.8 231.303 590.3C231.503 590.8 231.303 591.4 230.803 591.6C228.703 592.5 226.603 593.4 224.503 594.3C220.403 596.1 216.103 597.9 212.003 599.9C200.703 605.3 193.803 617.3 194.403 630.6C194.703 637.7 195.203 644.9 195.703 651.8C195.903 655.3 196.203 658.9 196.403 662.4C196.703 667.8 197.203 676.5 197.603 684.9C198.003 693.3 198.503 701.9 198.803 707.3C199.003 707.8 198.503 708.3 197.903 708.3C198.003 708.3 198.003 708.3 197.903 708.3Z" fill="black"></path><path d="M134.102 137.5L108.602 225C108.602 225 157.202 284.9 193.902 282.6C230.502 280.2 223.702 238.8 196.402 225.9L169.802 218.2L177.702 149.7L134.102 137.5Z" fill="white"></path><path d="M211.099 119.4C212.899 129.5 212.999 140.1 209.599 149.7C206.199 159.3 198.999 167.9 189.499 171.6C181.199 174.8 171.699 174 163.499 170.6C155.299 167.2 148.299 161.3 142.699 154.5C133.999 157.6 123.299 154 118.299 146.2C115.399 141.7 114.399 135.7 116.699 130.9C119.099 126.1 125.299 123.2 130.199 125.5C132.999 126.8 134.899 129.5 137.699 130.6C140.799 131.9 144.599 131.1 147.399 129.2C150.199 127.3 152.199 124.4 153.899 121.4C158.999 112 160.499 100.7 158.099 90.3C158.299 91.3 163.599 92.8 164.499 93.1C166.799 93.9 169.299 94.5 171.699 94.9C176.499 95.7 181.499 95.6 186.299 94.8C188.699 94.4 191.199 93.8 193.499 92.9C195.399 92.2 197.799 90.5 199.699 90.5C203.799 90.5 205.099 98 206.099 100.9C208.099 107 209.999 113.1 211.099 119.4Z" fill="white"></path><path d="M178.201 174.6C173.201 174.6 168.001 173.6 163.101 171.5C155.601 168.4 148.601 163 142.301 155.6C133.301 158.4 122.501 154.6 117.401 146.7C114.001 141.5 113.401 135.3 115.801 130.4C118.501 124.9 125.401 122.1 130.601 124.6C132.001 125.3 133.201 126.3 134.401 127.2C135.601 128.2 136.701 129.1 138.101 129.7C140.701 130.8 144.001 130.3 146.801 128.4C149.101 126.9 151.001 124.5 152.901 121C157.901 111.8 159.401 100.7 157.001 90.6C156.901 90.1 157.201 89.5 157.701 89.4C158.201 89.3 158.701 89.5 158.801 90C159.101 90.3 160.301 90.9 164.001 92C164.301 92.1 164.501 92.2 164.601 92.2C166.901 93 169.201 93.5 171.601 93.9C176.301 94.6 181.101 94.6 185.901 93.8C188.301 93.4 190.701 92.8 192.901 92C193.501 91.8 194.201 91.4 194.901 91.1C196.401 90.3 198.001 89.5 199.501 89.5C199.501 89.5 199.501 89.5 199.601 89.5C203.701 89.5 205.301 95.1 206.301 98.8C206.501 99.5 206.701 100.1 206.801 100.6C209.301 107.8 210.901 113.7 211.901 119.2C214.001 130.7 213.501 141.1 210.401 150C206.701 160.6 198.901 169 189.701 172.5C186.201 173.9 182.301 174.6 178.201 174.6ZM142.701 153.5C143.001 153.5 143.301 153.6 143.501 153.9C149.701 161.3 156.601 166.7 164.001 169.8C172.401 173.3 181.601 173.7 189.201 170.8C197.901 167.5 205.201 159.5 208.701 149.5C211.701 140.9 212.201 130.9 210.201 119.7C209.201 114.3 207.601 108.5 205.201 101.3C205.001 100.8 204.801 100.1 204.601 99.4C203.701 96.3 202.401 91.6 199.801 91.6C198.801 91.6 197.401 92.3 196.101 93C195.301 93.4 194.601 93.8 193.901 94C191.501 94.8 189.101 95.5 186.601 95.9C181.601 96.8 176.601 96.8 171.701 96C169.201 95.6 166.701 95 164.301 94.2C164.201 94.2 164.001 94.1 163.701 94C161.901 93.5 160.601 93 159.701 92.6C161.401 102.6 159.801 113.2 154.901 122.1C152.801 125.9 150.701 128.5 148.101 130.2C144.801 132.4 140.701 133 137.501 131.6C135.901 130.9 134.601 129.9 133.301 128.8C132.201 127.9 131.101 127 129.901 126.4C125.801 124.5 120.001 126.8 117.801 131.3C115.801 135.4 116.401 141 119.301 145.6C124.101 153 134.301 156.4 142.501 153.5C142.501 153.5 142.601 153.5 142.701 153.5Z" fill="black"></path><path d="M127.898 138.2C132.798 138 137.698 140.9 139.698 145.3L127.898 138.2Z" fill="white"></path><path d="M139.8 146.3C139.4 146.3 139.1 146.1 138.9 145.7C137 141.6 132.5 138.9 128 139.2C127.4 139.2 127 138.8 127 138.3C127 137.7 127.4 137.3 127.9 137.3C133.2 137 138.4 140.2 140.7 145C140.9 145.5 140.7 146.1 140.2 146.3C140.1 146.2 139.9 146.3 139.8 146.3Z" fill="black"></path><path d="M67.6008 504.9C49.7008 495.6 38.3008 477.2 29.8008 458.9C9.60076 416 -0.0992348 368.3 0.000765213 320.8C0.100765 297.2 3.00076 272.5 16.8008 253.3C31.7008 232.6 57.2008 221.9 82.4008 218.1C92.6008 216.6 103.301 216.1 112.701 220.3C124.901 225.8 132.301 238 141.401 247.7C152.101 259 165.801 267.3 180.801 271.5C190.301 274.2 201.901 274.9 208.101 265.7C210.901 261.6 211.801 256.5 211.101 251.6C209.701 241.3 203.001 233.3 196.501 225.7C209.101 223.7 222.001 228.7 231.901 236.7C241.801 244.7 249.101 255.3 255.801 266.2C276.201 299.3 291.901 335.1 304.501 371.9C308.901 384.9 313.101 398.5 311.601 412.2C310.001 427.7 307.101 442.4 295.701 453C292.001 456.4 288.501 459.5 285.401 462C279.601 466.9 271.901 468.9 264.401 467.9C222.901 462.2 122.601 494.7 114.101 501.6C101.201 512 81.9008 512.4 67.6008 504.9Z" fill="#BAC3D8"></path><path d="M108.601 378.5C108.201 378.5 107.801 378.2 107.601 377.8L87.8009 315.6C87.6009 315.1 87.9009 314.5 88.4009 314.3C88.9009 314.1 89.5009 314.4 89.7009 314.9L109.501 377.1C109.701 377.6 109.401 378.2 108.901 378.4C108.801 378.5 108.701 378.5 108.601 378.5Z" fill="black"></path><path d="M248.7 354.6C248.2 354.6 247.8 354.2 247.7 353.7C245.2 336.4 241 319.4 235 303C234.8 302.5 235.1 301.9 235.6 301.7C236.1 301.5 236.7 301.8 236.9 302.3C242.9 318.8 247.2 336 249.7 353.4C249.8 353.9 249.4 354.5 248.9 354.5C248.8 354.6 248.8 354.6 248.7 354.6Z" fill="black"></path><path d="M115.301 486.9C116.001 489.2 117.001 491.7 119.201 492.5C121.001 493.1 123.101 492.7 124.601 491.5C155.801 466 180.701 449.6 217.701 433.7C222.401 431.7 215.001 452.2 241.701 433.9C245.901 431 242.401 422.4 237.301 421.5C241.501 420.9 245.001 417.3 245.601 413.1C246.101 408.9 243.601 404.5 239.701 402.9C243.701 403.7 247.501 399.6 247.701 395.5C247.901 391.4 245.501 387.6 242.501 384.7C253.701 390.1 269.401 406 278.201 395.3C280.601 384.5 273.001 378.7 264.601 371.5C256.201 364.3 245.301 360.7 234.401 358.7C210.201 354.2 185.001 356.4 161.401 363.3C140.601 369.3 120.801 378.8 102.401 390.2C97.9011 393 96.4011 393.6 96.3011 398.8C96.2011 404.4 97.9011 410.5 98.7011 416C100.501 427.5 102.701 438.9 105.301 450.2C108.401 462.6 111.601 474.8 115.301 486.9Z" fill="#F4EEE8"></path><path d="M218.402 434.3C218.002 434.3 217.602 434 217.402 433.6C217.202 433.1 217.502 432.5 218.002 432.3L228.702 428.9C229.202 428.7 229.802 429 230.002 429.5C230.202 430 229.902 430.6 229.402 430.8L218.702 434.2C218.602 434.3 218.502 434.3 218.402 434.3Z" fill="black"></path><path d="M58.3007 418.1C58.0007 418.1 57.7007 418 57.5007 417.7C57.1007 417.3 57.2007 416.6 57.6007 416.3C68.3007 407.5 80.1007 400 92.7007 394.1C93.2007 393.9 93.8007 394.1 94.0007 394.6C94.2007 395.1 94.0007 395.7 93.5007 395.9C81.1007 401.7 69.4007 409.1 58.8007 417.8C58.7007 418 58.5007 418.1 58.3007 418.1Z" fill="black"></path><path d="M251.603 443.8C251.803 450.9 253.803 458.4 259.403 462.7C266.603 468.3 276.803 466.7 285.503 464.2C326.903 452.3 364.203 429.3 385.703 392C386.603 390.5 394.503 371.6 391.203 367.3C388.203 363.3 380.603 370.9 375.703 371.9C354.403 376.4 333.303 382.2 312.803 389.3C302.203 393 291.703 396.9 281.403 401.3C273.503 404.6 266.803 405.5 261.503 412.7C254.903 421.6 251.303 432.7 251.603 443.8Z" fill="#F4EEE8"></path><path d="M285.404 465.3C285.004 465.3 284.604 465 284.404 464.6C284.204 464.1 284.604 463.5 285.104 463.4C330.904 450.2 365.304 425.4 384.704 391.7C386.004 389.5 393.004 371.7 390.304 368.1C390.004 367.7 390.104 367 390.504 366.7C390.904 366.4 391.604 366.5 391.904 366.9C395.804 372.1 386.504 392.5 386.404 392.7C366.704 426.9 331.904 452.1 285.604 465.4C285.604 465.2 285.504 465.3 285.404 465.3Z" fill="black"></path><path d="M413.203 331.2H337.103C335.503 331.2 333.903 331.9 332.903 333.2L271.503 411.3C268.803 414.8 271.203 419.9 275.703 419.9H349.203C350.803 419.9 352.303 419.2 353.303 418L417.303 339.9C420.203 336.4 417.703 331.2 413.203 331.2Z" fill="black"></path><path d="M380.905 341.3C380.005 340.5 378.705 339.6 377.605 340.2C376.605 340.7 376.505 342 376.405 343.1C375.805 353.7 375.205 364.2 374.605 374.8C374.705 365.3 372.305 355.6 366.105 348.4C364.605 346.6 361.905 345 360.105 346.5C359.005 347.4 358.905 349 359.005 350.4C359.505 362.3 364.305 374.5 360.105 385.6C359.405 378.5 357.705 371.6 355.105 364.9C354.105 362.2 352.805 359.4 350.405 357.7C348.005 356 344.305 355.9 342.505 358.2C340.605 360.7 341.805 364.1 342.805 367.1C345.805 375.5 347.105 384.6 346.505 393.5C345.305 386.5 343.905 379 338.705 374.2C337.205 372.8 335.305 371.7 333.205 371.5C331.105 371.3 328.905 372.3 328.005 374.2C327.005 376.3 327.805 378.7 328.505 380.9C331.005 389.3 331.005 398.5 328.505 406.9C326.605 413.2 318.705 421.7 327.105 426.7C330.005 428.4 333.505 428.5 336.805 428.1C346.105 426.8 354.305 421.1 361.605 415.1C369.105 409 376.105 402.3 381.605 394.3C387.005 386.3 390.805 377 391.105 367.4C391.505 357.7 388.005 347.8 380.905 341.3Z" fill="#F4EEE8"></path><path d="M215.553 290.328L216.358 294.596L216.117 294.69C214.929 295.173 213.886 295.904 213.008 296.831C211.279 298.647 210.453 301.134 210.663 303.62L213.837 303.021L214.518 306.632L211.376 307.226L212.775 314.636L208.335 315.474L206.308 304.734C206.274 304.384 206.24 304.034 206.228 303.713C206.217 303.569 206.222 303.422 206.211 303.279C206.19 300.595 206.993 297.902 208.496 295.659C210.124 293.215 212.455 291.415 215.221 290.455L215.553 290.328Z" fill="#AE8C8E"></path><path d="M223.443 293.534L225.477 304.305C225.51 304.654 225.544 305.004 225.556 305.326C225.567 305.469 225.562 305.616 225.573 305.76C225.594 308.443 224.791 311.137 223.288 313.38C221.661 315.824 219.329 317.624 216.564 318.583L216.213 318.698L215.407 314.43L215.649 314.336C216.836 313.853 217.88 313.121 218.758 312.195C220.487 310.379 221.313 307.892 221.103 305.406L217.788 306.031L217.107 302.42L220.39 301.8L218.991 294.39L223.446 293.549L223.443 293.534Z" fill="#AE8C8E"></path></g><defs><clipPath id="clip0_1_1444"><rect width="418.5" height="709.5" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$2Z = _sfc_main$2Z.setup;
_sfc_main$2Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PictureResult.vue");
  return _sfc_setup$2Z ? _sfc_setup$2Z(props, ctx) : void 0;
};
const PictureResult = /* @__PURE__ */ _export_sfc(_sfc_main$2Z, [["ssrRender", _sfc_ssrRender$13]]);
const _sfc_main$2Y = {};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "790",
    height: "506",
    viewBox: "0 0 790 506",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_1442)"><ellipse cx="395" cy="253" rx="295" ry="153" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_1442" x="0" y="0" width="790" height="506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1442"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$2Y = _sfc_main$2Y.setup;
_sfc_main$2Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResultShadow.vue");
  return _sfc_setup$2Y ? _sfc_setup$2Y(props, ctx) : void 0;
};
const SectionResultShadow = /* @__PURE__ */ _export_sfc(_sfc_main$2Y, [["ssrRender", _sfc_ssrRender$12]]);
const SectionResultBanner_vue_vue_type_style_index_0_scoped_7f25c9d8_lang = "";
const _sfc_main$2X = {
  __name: "SectionResultBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-7f25c9d8>`);
      _push(ssrRenderComponent(SectionResultShadow, { class: "picture-shadow" }, null, _parent));
      _push(`<div class="wrapper" data-v-7f25c9d8>`);
      _push(ssrRenderComponent(PictureResult, { class: "picture" }, null, _parent));
      _push(`<svg width="100%" viewBox="0 0 686 442" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7f25c9d8><path d="M0 150C0 67.1573 67.1573 0 150 0H666C677.046 0 686 8.95431 686 20V292C686 374.843 618.843 442 536 442H20C8.95432 442 0 433.046 0 422V150Z" fill="#EDE4DA" data-v-7f25c9d8></path></svg></div></div>`);
    };
  }
};
const _sfc_setup$2X = _sfc_main$2X.setup;
_sfc_main$2X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResultBanner.vue");
  return _sfc_setup$2X ? _sfc_setup$2X(props, ctx) : void 0;
};
const SectionResultBanner = /* @__PURE__ */ _export_sfc(_sfc_main$2X, [["__scopeId", "data-v-7f25c9d8"]]);
const SectionResult_vue_vue_type_style_index_0_scoped_980efccd_lang = "";
const _sfc_main$2W = {
  __name: "SectionResult",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-result" }, _attrs))} data-v-980efccd>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-980efccd${_scopeId}>`);
            _push2(ssrRenderComponent(SectionResultBanner, { class: "banner" }, null, _parent2, _scopeId));
            _push2(`<div data-v-980efccd${_scopeId}><h3 class="heading" data-v-980efccd${_scopeId}>Что ты получишь<br data-v-980efccd${_scopeId}>в результате приёма?</h3><h5 class="text" data-v-980efccd${_scopeId}> На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению </h5><h5 class="text text-sm" data-v-980efccd${_scopeId}> На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению </h5></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(SectionResultBanner, { class: "banner" }),
                createVNode("div", null, [
                  createVNode("h3", { class: "heading" }, [
                    createTextVNode("Что ты получишь"),
                    createVNode("br"),
                    createTextVNode("в результате приёма?")
                  ]),
                  createVNode("h5", { class: "text" }, " На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению "),
                  createVNode("h5", { class: "text text-sm" }, " На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению ")
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
const _sfc_setup$2W = _sfc_main$2W.setup;
_sfc_main$2W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResult.vue");
  return _sfc_setup$2W ? _sfc_setup$2W(props, ctx) : void 0;
};
const SectionResult = /* @__PURE__ */ _export_sfc(_sfc_main$2W, [["__scopeId", "data-v-980efccd"]]);
const _imports_0$o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAiCAYAAACOTf3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1ZSURBVHgB7VoJkBTVGf66e849Wa5iYTl0EQhQJcciCIUgcghoxFUOK0JMNKaihMIIFiJWCUQJaCGhioRKMESKIqCFFUrAGBKQSxSFknAp4Y5yu+zu7DE7090v//+6e7Z3dxZmZheCZv/isdPd7+r/e//dCpIgQYQkSVjjoCpK9Q3+z7luouuSoiTOLA9uJBGQZjQMs6QckXAlCFX4gkGIzCDg9UKBRk1FE7SNR0nx8loSyo8ETWcKHaKiDPrRAwjv+Aj46itooTIIvYp7QQSCMFrlwNNvCNIH3QetTVvA57E3IpLd0v8FJSOhjQKohMEUMPQowv/YjMjmDQic/BI+XYdqGhAqLElk0GlFbiYph6rMZtD79oXvoQnwd+tpyaqqycPBKrkJWotuKqDODfNqEUpWLkdwy/vwGzojLO+r7iGMrGtJU7HGV7ZoCfHTnyNj2IP0WIVpmlBVFfI9mlC9eYDyJcNmhr5F8a9fQdYXe1nupG10nB7VPUIC6rqEJa2sqis9XhhTZyBtxBhomtcaq6poouQAbRDHJFZVYYSWLkb2vz6BF1EosFSlIqwW07HcLAhjTXG1YDQK7Xe/RXj3P62BapNopkINAlQxTFSuX42MHdvgEVE5meoAarcYsvU0B1BNMZARIefpD8tgnjsH1TCRKgl5YEypugU19rYhnTaBpOOu7xg1KGwRJUUQWz6kSfQGTaXE2CyQdvUSKv7+PjJ//JSlulPZl0GmoKwE5fv3oerfx+HRDdbfMPI7IWf4/XR4vr/SnzIKBnmv5ds/hO/ifzhYqU4YSKpmGKUUUEUMjJCjpFG3gOojbaqTXTBR24TzaPaKjW1/gzF2HDyt2yJRssIm3piBij0fofS5mfAd+RIekvQALeURJkomPQL1vpG0bGoH5btAqYsVxZXGR1vhMy0Qq+NI2L8U6HR5srwCV8k+RoQFYIamIi/oQyufz5bMalClsqZ+gUuXUblnF9IfGp9c2oGmK9u5A+EnnoBWVgZ11iwoA+5CaPsOpL2+RM4tYSfwle+plKYMaPT8eWjfnGFRtcOLmtaJlBxOUkLhfETI8ESxQ5QS6l9RWgFvjhc5Wm2mCgmqX4+g8tA+4MFxJLI+JEqKEUXpbxYi59xlVM2fi2bPTYdC3nMZg0sJDwtL8b3OOqbuFBVdgL+8nJgjXGAq1pQUnlQSohd1U4Y1FiMV+y8dBrJn5ysoJRhX+hTp4arfXCCAktue/u1l+PbsoYRFAP77x9Jx1WJaQLGndoPpjsKkyrZbslR7HjexY3a9Mc61dOJSWN9NKUuoKC6DJqXTfdcKT3hLoYgOK+Fj2mC67CrdL4qEyZUKoo78CSvwUYuLiBtV9JJ0pagJqcjyY6eQVmUg3LIF/B1yLRhVJ0yqpsrKSuzevRvhcBgPjH1AbvvChQvYt28fOnXqhJ49e8p+p06dwtmzZ+us07VrV7Rp08Z+F4EzZ85gwwbKjgUCGDp0KLp06SL3y8927dqF0tJSDB8+HH6/X669detWZGRkYODAgfCR6WEgd+7cic8//xxpaWno378/evfunZJZSB1Qo56KiS2tRhxG1hgvhC038fsIgluoied2LfDscXIDjtMl7H/V61y8eBGTJk3C1atXYxK0bds2PP7445g9ezbmz58v761YsQKvvfZanbU2b96M0aNHk/9l4N1338UTZLOrqqokAAzQjh07UFBQgCj5DjNmzMBnn30mD0zr1q0xc+ZMLF++HHPmzMGQIUNw+fJljB8/Xo5xpFPTNJw8eRIdOnRAspS6ys3KJNsYn9m8rXTalGpHmTUCU7tl+QLXxEpPz5LnJeFTSt3SSCrDrGZDVN25dMlSGPYzR0E489Wn2tzrMWB8PXfuXOzdu1dKLl87fYqKivDyyy8jMzMTH3/8MZYtWwad8tcvvfRS3H2fo/h6zZo1UrqnTZsm52dgWTp79eqF/fv3y8Mybtw4tG2buIfvppQBVUmtibRA3Gf8LpkeFZmUwnMY4G4sxW3SgtDqYapJu9La5NEifiSaCWBJ87ZsD71XAfwEaHjj+5xbkA4Z2/RqfeFW/XVtphswB9C+VEDg1qJFixpAsVSdOHECgwcPlmpy0sRJ6Ny5swS3nPwLN/E6K1eulOr3xRdfRE5OjlTnLOE85+rVq3HnnXdi1KhRWLt2rZTSVChlQP25HVGV2y4uv1nreql1zfajnUeh35x4sFgaoBfrkh5AK/JwFVPEHWzQC3rvGgiZclASyxipZGeF34vMha+gkspzysLXcWXCRBQvXgpj6xZ5eBKRdTfAbGOZ0tPTY0C6nRy2w3z/7rvvlnnnZjnNpJrkcV9R2dBNR48exRtvvIFu3bphypQpsv+BAwdQUlKCPn36yPvOYfJ4PCmHVanHoawy7xmBKiqT+Y04cR1dBui/ztlZyKNkQShqVVCyKQ71wnam6tl0GZXVMnuRU6BqSLiIplj5gvSBQ2G89RaiP3kaWRv+iopNG+GhQ6LBtqjCrKEttm/fLv8eOnTIuudajx0Ypuzs7DrPmBg0PgCHDx/GkiVL5L1LrOqJiouLY/34vRnMUCiEefPmSYeIiW05j+/Ro0eMfw2Nj1MHlGQ7MGgQKt/7C/xkS6zPSmpLHLGAEwUUhgR9qnRMVBncxydh/68NGAQ1Nw/J1s4UO+QJdu9G5iCIEtIEYuECRI+fgGfp7+OOGTZsWL3zVVRUSAZnZWU5C9QgB7RVq1bJ5hADyOraIZZq9mx5nkHEMwe08jJLLTsHpjEoZZUrPbrcTtBG/5DUooZ4Ci3mAwmL2Sov57JR8XqXZzeH75FJEFryZ00qdWJe8fr3oJ49A2PovWj51JN08AbHaq+16dVXX5We7MSJE2uU61hy2Olh9ZeXlxd3PQc09mQ/+OCDWNu4cSMGDBhQ/Wb0vmxnWULXrVtX7c16LDtZ2942hBqWnKcNBQofRejgYWQc/ER+IRSPErNdlNHxazAfexLB9ncAdRKDCU2CyLkL0Jf/CYbPj+C0qVA1n1WNi+MMcZtF6UEmdkQks23Ymclff/21tIlerzc2zk3NmzeXfzl2ZWfG3YdB5FBGmNY6HAqxal6wYAEKCwvRvn17aZuZWE2LRkpHNqx8xozKbIW0mbNQmt9DVkNliSrJfTELqrxhRB6egIwHH5ZfLSiJW88aE4W3bEKz08ehD+pP9tRyrKzyWVIzybjx9OnTsQDfOQBupjuOzMGDB2POUm1QnAPCB+OZXzwj485FixbJuW677TZ5WDihwTFrbIyZeraogZ8EWOpTtGmH9NnzESoYYKXz7HDhesA64If9PoQnPo2cHz1FOiPg6OikSFrmcAVCy5ZKAL2Pkgr1pdvbVOLUgep5IxsQdpbYKeIMT300cuRICcz69etx5coVCUQkEpFhixtgZ87JkydLO/r222/j2LFj6FfQT0o3x6ebNm2Kpf74WaopwIZJKG2Uv7f1kQ315LVH9ux5CI14iIJ7RQLKr3TNbQkNpc1bQZ/2ArIe+xkUH8Wm7JHKpE/iLySlwNRR/M5aNDvwJUK35yM45n4SdKcGpMQ+dUmEOJPz/PPPS6ZyzNg5vzPy8/NlxoffmTNDHHIw2PybbW337t1xz5B7ZFqQ79cOW3hch46WlLI654xReka6TFqwlE6YMAFjxoyRIVBBvwIJairUaN/lchxopmcj85nnUJ5HWY5Vf6TSGj9hVVKXkSxRZfSC3l++gEDPAivmUKoL3cmIKCtnvSqMi7s+QWaXrlCnTIa3dbvYFCZJRVG3HhAdOsn6LKfnGCAO8p0P0jjbwznYli1bStvHFRp2htjOOdLWsWNHae9YbXJGiMctXrxYZn74EHz66adyDNtl7svPWa2yM+QkCp6d+iy2btsq88RHjhxB4cOFCAaDMmO0ZcsWmbzgFGRubi5uOIkEiF6emi6+3fCOqBx3rzBH9BZiRC9qfan1oes+whjeV1ycOkVEzh4XhlFlj7FaqmToUaFHKoUZLhdGNCqoAE/pZprT0IWpUzU2HBImPdfNqFyHPFTZ3Gs69958801BEiUos1Njb9ymT58uCChBifTYWGc+ParX6e9ey93X3ehw1PhbmxfJYNToX85b9kJD87GFKI1QtWTNCgRDJaTySD3LFJyJkk53IHvOK9BadJTf6spvixQnyEmNVA5zNDt94K4bUHKCVTv89peEds01nkfJEuXmn7tPvP7uZID8reK63qrT1+0NM/G1EzaJBni8SUYFiZ2WWDdSVaXr/gwvqd+AiJCZ8yLcNhf+eYugdMiXkSmXtySTFbuWegsQp+M4ZOHqCKtgJofB7P2yA8Q5Wy6X3Qy66V/Ox+kX+22UF6N03kxkf/EFwiQt0Wm/Qtao8dJJsbJ/VonL2vKtAWi814xXpWms7M716KZ9l3uNDVS3YDY8owuhqz7oHW5H5uARUio1cqJUu3At2KGCan3dEPONU4/FGkpxK0Rxnt2KdMNFgs1CoEcvFFO+MtL5BzDIE65NdVnzvwPzu043ROXWGGOyG2TCOHcGSlo2NEqXWWVvNRadiBobqnnVRLeADW2ixqVkAP0vsYX1He/Uq1UAAAAASUVORK5CYII=";
const _imports_1$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAiCAYAAACOTf3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAf4SURBVHgB7Zp7cFTVHce/+95k89jNY8MmIQ8IwZA4ibTYVGWklY7QImPVGqwOJfQ1xlBKQQydKa08HJ0qQyCxEwkWwQeKgdZYB6S2RlEcIGoSAZOsuEDYPDcku9lX9nE9dxeye3P37q7xZoc/7mdmh3vP79xzw/2e8zu/3+9eQEBAQEBAQEBAQEBAQEAgdojAM2bzGGW12jBVZDIZUlPVYca3ofVUFy7o+9Dfa4HbBWhSknDTvCzk5qejsCgD0UJRgPGSHV+cGUHPBQfMVz3kgYiRkRWPuaUJmFUUB3WqhPP6kSEKHpf/WEy6abThH6fNQsE+FjiPSwBUSWJeNeBd0J/ds5oymy2YKnK5DK+9sgvp6amMdrfbg4bn38Lxo5/CZnWRP1wCESUlFhk5lvqEgFeKkrJc/KbqdhTOmxH2Pvrzo9i3s5v8SyafV3xtDHpM2cSxKlGOhUvUWL5KjUQ1U9ixEQrrlzvgcVMTbaULJXh0uwJSaeh7bn7YDuPXgf4pZAL8/d/xvGogBs98FzFpxsddPvGCuWjow8MVm3GkqQVWq4PzWhGZ7Ofar2Ddb9/Evw52cPY79M9u/G3NaXSdHQHl9XL2s1q8OHbIjL9W9hMhXAybjay0YDFp2j704K09Ls7xHFbm+fAABb7hXVC+6e0dQs3G3RgaGo36GrFEhBfrT+I/TedYtqOHDXhjbxecDjeixTTgxtNrTEQAT8S+7xxw4fjB6Mfmmxte0B3Pvoz+fhOmwot1p3DxwvDE+YDRin119Mr99ivDfJXCC1uim1Sv7xpH1+eRxZ8OpOCZ4uJCRAqKenr6iFsNPYtzcrKg1fr3z/b2LrSeoVcZc94lJsbjwYcWITM7Dap4Ba6abDj2dgfOtvcz+rndXjQfOo/qJ273nb+xr5MEURTZHwPbFh0YlXxPjdsWa5GeIYeXEuGrL5xoeXsUVweZf5u+3Y3OzzyYewt3oHSd3Y+PY+PzSsycw3uYEhbeBf1H/baw9v0HDvt+oSgvn49NTzwKicT/wI4d/YjVR5epwc66NUhJTWS0//juErzU8DHefLWV0X7qwyugNpK4x0uh9aSRNd6yimw8Uj0b4qBgs6wcWLhUjW1VPSSSDfSl98xP3nUQQVWIhN1KoX6TE5saFEhOjZ2oMXW527bXYU/jayTwGWfZKh5chu1bN0CjSZ5o6+42sPpV/nopS0wakUiEipULkJbOtI2OOPB1twkGvdl3HIxWF4eK3+UxxJywZcmxojqN1X5ZH70rHTJ6sXOdE047/8EPFzERdHh4BH9ctwXvHv/A9+CD8ZIoc+3a1XisaiXJQQMOgyK+8OIl5oqSSiW4486bOe8TFy9HSamO0Ubf7solM4YH2dtAzmwVFEpuJ1V+VxIrBbnc7fG56VBI5ey2y3ovDtVzR758w7vLnQy9X65bv5UENoMsm0aTRFxslc/VTsbj8ZJ80wmZRDnRpkqIZ4geCnVKAquN3jetHvZD1WWHd51iMt0VSsqXolxnnCxyL8cizS8SI3MW0HKEmQq9f9gNdVps3O60Cnr8vyews3YvLBYry5aeloLdu7cgU6cNeS29kpVKOYJ1sI7ZfHuhOExxpc/IjkQVcWRPptj/1eEh7pyWhp4ITgfzXkqVvyrExSMblLjQYScrk7mMjzS4IFdOv6jT5nJf2t+EJ7fUhhRz0aJy7G18hlNMGolEjIKCbEYbXXBo+X8b5zUOu4uUBJmegHaP6TMSoCPlvMmFsfNto7DbuHPG0++PYXIwrsuVQBRGF9r2eL0SujwRq93lnP69lHdBnc5xbH+qDo17D4ZcSQ888FP8ueYxqNXJEceaXZDHamuob0avcZjVTrvoA40nMdBnZrQnq5WYVaBB3hw1OVYwbMODDjTtM4TcE0dMbjTtYee/uYWRU5b4RBGqn1EgSRPblIWGd5f75NZanDhxmhX80NCF9zNnOnw/LhSklrvjub+QXFOFuxb/AMfe+YSIFbCbTGZs+EMD7l56K4rm5UAik6DfaEbLe1+i47NeXw02mPnlOkik/nl760Id3mu+wrA3v9oD/VkrFi/PQnKKjKQbXgz0eND8sokU0/013gAi/HCJHNGQMVOMX22S44XN48Rtxy7K5V1QWkwuXC4XDIbLiMTYmNUn6C1lRSgtm4tPWzsZ9sHBUbyy/3++4ryIFOdxrTjvPw4gJUI+tLps4nzZLwrRctQIz6Ss6cs2Czrb9P6ivG9M6bWJwXRg8xbIUFgmQ7SU3iHBvb+X4PXa2JUCb/jS38aaVUgh0TAX4eZ+ZfUCZGQG8tKZ+YlYVV0C7pdM3KOlasWorIm8TUzmJxVy/Oi+yG6aL254QbVaDZ6r/RN5naaJ+hqFQooVlfOx7P5ilm3JfflYWV1M3rIgajRpEqzfkYI03dQeV8VaBQpKY7Of8i6oVpvm2z+n+qP3WTrfDCY3dwYaGmtw7/13Elsc571FIjHmFmfgqV0/xy9Xf5+z3z0r8vB042246WY1Z5GAJk4lwtIKNZ5tykRm/iR3Tk5lCn/0ev2n1oYejO5bRd6TZuaLGP0Tvv2Cj8i0fLFgs9kxVaSkcJCawv3Fgslkgb6zB+2fG3xfLFBeke+LhbxZWpTOz0F2TmrYtGIy+nMW9Bjs6OoYg2XEQwoZUuKm45EzR4mSBQmsF9vBjJooRlqjIt5dGeZ9NV39ogv+1ydRXDz/XywICAgICAgICAgICAjc4HwDTbO1aF1hRCkAAAAASUVORK5CYII=";
const _imports_2$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAiCAYAAACOTf3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAspSURBVHgB7Zp7bFRlGsafdnqHtkDLrVQKRWihUBAtKrAWAVdEzSouIhGNhmxU1o36l2QTd3Vd9w8TybICK65GNCgEFURRkIsKyE0EEUGgAkK1CIUWubS0ZTrd83vrGWem05ZqQGjmaabtOeeb732/93lv3zcjRdCqEMWvOgeK4JJHlINoRdCqECG0lSGmsQcV1XU6WObVoeNeeX1Sl1SP+nSOVVJ8lCK4eNGA0Moan+ZuqNScDVXafbhW0T/FcGKMR0MyE1WYE6X7CxOUnBAJ7osRQU1ReYVPf5xV7hDpcwrsz4OinYvM5AQlxXrsumt7adrEeHVK9SiCiwdBTVHdmUrNm7FCu0LIBJ2S4v1kgpJy6fEF1aqo8imCiwt+QisWzteEpVP1cOkCJfmq/APSEuOUmhCcmaMdwouPSX9ffMqJ7gipFxOMqdqTJ1S9ZJHqPLF6oOQV5Zzeo6e7P6xO3dM1sSDeIdSjdUVebSvWz9EbXaV1Z57X7uOT1LdDr2YF+Xw+HTlyRPv371dVVZUSEhLUq1cvderUyanTv009RqeTJ0/K4/EoOTlZrQFGqHfvHvlKj9iNuiiPCk9uUteaOPWc/Kwy2tWn2jEDY/TUwiptOSCddYKyJn2uKuO/0JqS3GYJPXHihN555x3t3r1bXq+XXO9/dsUVV2jMmDFq3769LjRqamo0Y8YMtWnTRo899phaisrKSnOG+Pj4RsewXhwYGVFR53+HUE9o8bd0Rv7wi0ryquBPOYpr93PdbBMfrYdGxem+/9WoOnWp6pLXKz4qRt+e+q5JAQcPHtS8efNUXl6uLl26KD8/X23btrXI2LZtm7Zu3WqLvueee/RbANm8WoozZ85o1qxZSklJ0eTJk43YUJABZs+ebWMfffRRxcTE6HyjXkJlhf9GVGKt2o7fL09WToPBXdtHy5u4Q76O852r+tPCytqqRic/duyYXnvtNZ06dUojRozQDTfcoNjYWP/z66+/XuvXr9eVV16pSxHV1dXat2+fvv76aw0YMKDB8y+//NIcGge+UKgvXgmJP13WKXHsd/Jknna6pO0NBn9x6JDOZvxbLpn21uiERiffsGGDkdm3b19Lq4FkAq4LCwsv6ILPBxYsWGDpNxCk848//viC9wcWobFZ2eIEIX5wqeL6llFI5Tv4L0WlDlV0an30nK46ptlF/3Ee1fjfXOf85HfoE3ZitrZbtmyxtAOZLV3YDz/8YB5O/aW+DhkyRO3atQsac/z4cRtTWlpqTdagQYPUvXv3oDGkO/Q45DgjjjN8+HDt2rXL5gwda+s8fVqbN2+2Bg55yO3QoUOjel599dWmwyeffKKxY8f672/atMn0Qh7yA+1CmSkpKTGboHO3bt2svh49etTu5+Xlae/evfYiTV911VXq2LFjkG127txpwdK5c2frQxIT64PSCPXk5imuoE4JI0uMTMPZo6rdWqjadr+TNzpV/yyu0M7K4OJf6yg3IL132IVSIxFIjenatWvQMxTCYKFITU1Vz549zTjLli2zxaMo3r9q1SrdcccdZmCwY8cOvfHGGzp79qySkpIs/a1bt07XXXedbr75ZhuDQV966SX9+OOPiouLM+cixRM9ffr00aRJk4Lk04HPnTtXFRUV1sTgDJ9++qnuuusu9e/fP+w6IR3SPvroIyM3LS3N5K1YsUKjR48OGot89Dlw4IARAVgr5eiWW25RcXGxrQlZ7hgcDB0mTJhg/QfOQEbgGTqS7smEDz74YAChbdoq6b6bnBODrcHa1jn1sXy5/lsxUKvOZDdYzJDO+cpLC08ohsbrwnWANEMYIBCMpQ5BImQSFRgSA+EALPTtt9+2hWDEhQsXGknjx4/X5ZdfbkZctGiRVq9ebY4xbNgwvfXWWxbhI0eO1NChQ40gum2ICwUOsXjxYvt77733mmMdPnzYCEAuMsgCoUBfegHW9MEHH1hzR6rF2BC8ceNG/1i6XTIDZQaHqq2tNUddu3atOYVx4TRXBANdN+vEjm+++aZfh88++0wZGRmaMmWKRS99CrLdxs6fBz1Z9zu/0hoovLYmQ/PCkFnnnBr+Jf9uxUSH79wwKimFtEhEBKJ3797mve6LlGHKOOO/+uorWyhpmpSIYVgIBGE8lP/mm2/McwcOHGjvZQ952WWX6dZbb7V5Pv/8cyMS4iCGZoxMgTPcfvvtCvfxLxmDFw0a+iGDKMNQjC8rK1NjwLBEGSmSiCHdQmbo3pZMgnwyzocffqg1a9YYwciAGLOrIwt93fJCn4HD4Ax79uyx8YwlUnF0rrEh9jZdXGHRCT1Ul/eKfNvHOVf1bBd5O+jZ04MaLMDn/DzU7271byQ6XUUwMmmERVIrXEAQLxfLly+3v3geXSOREJqme/ToYVGM0d1I4WAiEBxSYDQ8nJqJg1CfArcUjCGyQ0F5wJEw1rRp0yzi0X/ixIkWTThWUygoKDAjz5kzx+rdtdde22AMer344os2d1ZWlumB0yHXdTL+xw6BgCzqP8FBnWbs+++/b4EC8ddcc41FPQgKL0+6U9QzHpLv0PMq9SXp6ZODVeYLTpmQObrbUN2X9wc1B4SwB3333XctOkJJAkQSTQNeTmSQ5kgzGDiwEeCahWBY17gYKBCkVFImi3SjI3QMz0MzBsBJIJ5txuDBg81IGLYlhwEYe/r06RYx4UqN2yg98sgj5mgAeS+88IJ/DPKwSWADiD3QGx1ZF6WIOs9c2I6ASE9Pt7ENWs/oPs/Km/J7/ePEIO2rbbidyErO1F8LHmg01QaCIk6HRnrEMxGO0fFCUggnRzNnzjTPw6MzMzOtw+P5e++9Z4sAPF+yZIkRSprNzc21ha9cudI6Q8B8vIf3Moa5qMPIIFXxXpoS6lw4kkjvrhOQ3jE4c1EPqV8YtTkg85lnnvGXkFCQanFcsgRAH/dgxQVORR/gRixj0AEn7Nevn+3r6TFwarecuLUUNGAlKjpWtXlztO+7x52rU0HPfI6MJwv+rNT4cz/3vO2228yzKPzz5883I3MNsRBFWqRzdVt+lIYwSMDbqX2kWbdmQjiLvfHGG7V06VLzbryTNMZpFEal5kAa3S4yX3/9dTulwqB4dThCKRGjRo2yZovTHYzOeGTTaSMvdB/dwHaNNIEu2I/TsdJo5eTk2BaFCA2cFwK59/LLLxth6AvpRL2bebAl68XpSNk4GykcWHF50kGg4LhYh/2UTK0+tFleX63dY8/5cP4kjekxXC0BhFGDWAyCiSS8jUVwD8LpQN19Kn/pdjEijQhEshA8EaPyHMOxWIzujsFJ6BRdBwKkeeos3ksa4z4k01iRzokkIhzDoCPOQNrnHuPdfeKdd97pbzpcEL0Qnp2dbZ14Y8BxIYGeAcdDFluS77//3t43btw4i1D0pKxs377dOljWVVRUZLbC2ckarBtHwMkhEuJxILZz2OMpB01+6++JjdO17OBa+z+3fbZmjnhCKXG/7lMJPBBiSS3NnW2ilkt+YwcTjHEP/EPng2giDKO783D93HPP+clvDKT7c9HxlwCdcQjmD8wWlCSyydSpU81ZsRXPw2WUcHM0+62/Cb1ussjkZ0zWsF9NJoAYvOpcDOWmsKZOmRgDUeHmYx9K14mn01FCPHWX9xCRTeFcdfwlcJ2vuYbLzUYtmaNJjXPTspWd0l2HK49pZOZQXWogCklvr776qrX9EErUktJJXRcbIOhciG4KzX7ReuG+ldpRVqS/DZmiSxE0FRz3sS8lSqllEH0hPspqKai31G7qe7iP45oDKTfyzflWhMg351shIoS2MkQIbWWIEBpBBBFEcMHwf+DOjCyuroLAAAAAAElFTkSuQmCC";
const _imports_3$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAiCAYAAACOTf3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvgSURBVHgB7ZsJVFT1Hse/wOAgyrCLrG4gAgqIJc+1tLAyyGdq71SEL7UyMzU3sDonlVY0rVzIlAxN006WS74yTXgukBYqS6wCyoDsOzKy+v6/i7NcZpgZ7uB7553mc84cuf9773/u/L///2/7XwEjRowYMfJfwgQCuXv37nr2zzvarkmpycTl6nRcq8lCXuMN1Lc2wOSuCewtbOAx0BUBtqMwxXEc+9cbRnhsMDExWQ8BiHAfSK5Kxa68Q0ipzkDH3U61883NZZCyz8WKFGzL3o9AO1+87PUMHnEKhhHD6FNB61sbsTPnAPYWHoXIxEyve8xMTJFem40llzfgUSbo+oBlcBTbwogwTNFH1LbUY8Fvb2Ff4XG9xVTFjFn/hPLLmHd+BYrZ6jUijD5ZoZV3ahCeFAXp7RIw26923oQJ7G45mPlNFyabKcqbK5DfJGXmuF3t2gpZFV5IisSRKZ/CTmwDfWD+HBUVlZBKiyBrlsHWzhbu7u6wtrZGb7hz5w5KSkpQWVmJ9vZ22Nvbw8PDAwMGDND5/apoGgOioKAAqalpkBYVoaWlBXasf++RIxE0LgiWlpboC/pE0A8z93BidqeD/dCXPOdh3pDH4GHpzPuhJc3l+OnWOcQXHEV1Sx3vvnIm6qt/RCM++H1YiMRav/vY0WM4yj5SqZQTQU6/fv3g5eWFl195GQEB/lr7KJYWY/v2HcjJyUFtba2inYTq378/fHx88PfZszB16lSNYs2PmM/iAhn397Bhw7BpcwzvPAn58eYtyMrKUhOfju3t7RAaGopnn3sWFhYWMASDo9x9N07gg/RY1hG/KycLB3wRvBFekiFa+6lgq3vehZWolFWqnVvmE4HFnv/QeF9DQwM2bNiIlD9SelwRRGdnJyIiIrBw0QKN57/8ci/iv4qHqal270MDHxAYgOjojZBIJLxzT4XNQmNjI/e3xxAPxMd/pTiXl5uH1avXcM+rCz8/X2zbvo1+j+Ao1yAfWsuCoO0sSu0uZn9Rf+yfFKNTTGKQhR2+nfwxnC0c1c7F5hxiq7VarZ1Eejf6XVxJucITkwa9+wogoQ4ePIjk5GReO1333rvvY/++/TrFJOh70pi5XPnGKr3EkbN16ye868ViMVxdXTCSmVobG75L+PPPTHz4wUcwBINM7rHiM2hqu63Wvtw7HG6WTtAXJwt7rPZbiJUpH/AmR1tnK3bnf4e3R7/Cu/7ChYu4fOl3mJh2XUvijB8/njOLVlYSdv4CThw/AZmsywzSBIiP34cJEyYon52Z6TNnzvD6JV85efJkZmJHcSIXMV/3669neWY4Pz8fuz7fhTVr10AX6enpyMjIgJlZV5BoZWWFmJiPMIr1z/2+tjbE7YnDoUOHFRMzISEBT8x8HEIxSNAfpQlqbbQ6n3afgd7yhMsUbM7ai1LmW1VJKPsNkb4LYW6qfNTTp08rxCRmzpyJtZHKAR4zZjSCgsYicm2UYqAy2eyvqKjAoEGD0Nraiq+/PsD7Hn9/f8Rs+ohbQaosemkRdu/egyPfHVG0/fjjSYS/EA5nZ2doIzc3VyEmMfWhqQoxCXNzc87H5+XlIYVZG4KebceOWAhFsKDnyi4jq6FArX2CQyAGmguL2P5mH4gfmk/x2qgAkdWQD3+brmoS/eD0tDTFeRqw58OfU+srODiYG/CysjLFdYUFhZygp34+haqqKoXYZPo2Rm9QE5OgtqVLX0PqtVRcv36da6PVm3QxGXPmPg1ttLd38I5bWBTdHepr1epVnK+VQ5N1z54vIATBgu6+fgTMY6m1+0k8IRRPa+Zzpfw2ESs8XKpKVwhK/qiurl7hKwcPdmI+yVVjfySeXFCOe4s6KSmZ53sj5kfoTHHWRq5FTbXSn7u6uUIXQ1iARM8p/67z5y9wPnvO3Dm8NMXFxYX79AWCBb3eVKSx3dxMuBU3M9V8b0GTUmUHBwcc/EZpLkU9fB8JSaZMDqU0cuHr6pRpEg34pEmToAsvLzZRvXo3WQMDA+Hk5MSZeoJyz7i4L3H48Ldcf8OGD4evrw+XM3t79009W/DoN7Q2aUx6igyo8txpk2lsb+rgt+uazQXMtFIULA+KCF+WEri5uXF/19QoV1p7W1cBQZXi4mJcuXJV63c4OjrwgixNUE65ctVKrItap7AotFpv376Na8yE0+eH739AR0cHF/WueGMFRo/2gyEIFpQi/Q51i4s0VpftZAV5U5PeZ0T5DTc1tndPRXqi9FYpl6KcOfMrV/WRQwP2Bhss5bHKhoGJev+FhYXYumUrtDFt2jSdghLBweNZbvkZ6+8TzmJoSpHIv1P0vGTxErz59pt4/PHHIBTBgkpEEtS21am1FzZKWS22HB4DnNFbkqo0r4qBLHLWBpXTjh87hoSziWp+nSo9q9eswqhRyuiSSoPV9/yhSCTiSn26ItbuqEavuvDz88OeuN1cHistlnKrPzcnF6WlpdxkU/QpMsPOHTuZJdHtn3tCsKBDLV1QU1+rVlRoY/XZT3P2I8ztEQRae8FGLNHaj6y9BRn1ubhWm4uqlhq1/ojhA93V2ii3/JlFq7+c+gVpLOrVtIq9vUdiwcIFXI6qiquLK67ndUWsZAIpr503b67iPOWL5P9Uqa+v51auHArGeos/K0HS58knn+SOSdCTLAX6jqVE5F8JqjjF7Y6DUAQLSjXaV1MyNZ77qeTf+FdJIleU97cdifVjXsMoyXDeNdLbZdiSvRcnS85xOy00sJrEbL/bgQftRiuOScjY2M+5gVD1kXJIWE9PT8ya9RRL0J/gVmB3AscGIDExURF9HmA5aVhYqKKOSmIGfqIUlFbR8mUreH0EBARAFzExm9DU2HTvuTrx1ttv8Wq1ZBUoz21iPpUKHXJuFBVBKIJLfxMHB8HXekSP5zlx2I9Iq8nG/KR1SGW+VQ6Z5GcursSpWxe4tERbLdaN7dIE2irNJQ0urcruYlI7VXk+++xT7IzdgbCnwjSKSUyfPp0XCNHqW/raUn6Kcw+aINEbo5GRnqFoo9yUdkh0UXrrFktVznMfsgJnWdVJE3Z2drzjnp5bHwTf2Y+lGJMcxyGrPl/ntY1tTdjEqkBfT+yqU25mK7Oe7Z/qw0THsVoF556F7axQdaizs4OlBId7vG48KzbQyqXi+uLFr+C9995X9J2fX4Dw51/gChJj/MewFKqr9JeQkMhFpaqVKSr061P/9WEpCUWycrZt2w5z9qwhIY8q2m7evMn8/3HFMU2gh6ZMYWb4WwjBoNLfohFP40Ahq5l2yHRem1x1je2bVsPaXILEskvQBxGbNMtYXVgXVD2Sl860YWurfBMiZEYIV2s9zmq+clFplSclJXGfnggKCsLs2bOhD6GhYawq9QtLk2q4Y4q8KZ069M0hbhKSlaGArLm5WXHPCM8RWLJ0CV5f/jqEYNBui6SfFVb5LdBYMeqO2ESEc5VX8HtdJlraW6APzw4NZbsx9rhfUI744osv6pUW0TUhISFYv+EdvU2ii4szotZF8dpoZdP+aHZ2Nrc6VcUkyxHJKlL6rP6eMHiDe65bCE4UJyC1JlPntSWyCpbuDNBpQolhA9wR5btI4zlaafr00R2xWH3zeP4/I/DwtIewj+3GpKWlo7y8XDGgJCINMlVyyET797BRbmtro7iH0iRVHnzwAeza9Tnz7duQmZmpcYObyoC0ObBs+TJuEhhCn7zG2cD2ReecW84EK9d6z1g7XziIbXC6NEnrdfZiW3zD9kh72oKTh/i9hXJHbauLyoP05kN5eQWrILXBgVWDqFxIaYw2aBuMom85mor8xI0bN1kumnpvZcpY/ViCIUOHclG1s/Ng1UsFb3D32Xu59EpJRFIUSmUVMASbfhLET2Sb41bu+Avzv3ljQRVXtppOPhzL9jWnsrJf7+cJ+eEH7Efj4JQtf3UxDaJP38u1EFng43GRmHFrMr4q+B5Xa7PYjNEubicTcgyrKIUPm4VZ7tNhxDDuy5vzj7lMwgznidx/g7hYeRVXWcB0g22BVbd25Z5WZpbcf4WgHDPYIQDj7HwgNhPDiBEjRowY+T/iP7PDtDP3pBWAAAAAAElFTkSuQmCC";
const SectionReview_vue_vue_type_style_index_0_scoped_2134d2f2_lang = "";
const _sfc_main$2V = {
  __name: "SectionReview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review" }, _attrs))} data-v-2134d2f2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-review-content" data-v-2134d2f2${_scopeId}><h4 class="h-l" data-v-2134d2f2${_scopeId}>Отзывы на площадках</h4><div class="section-review__links" data-v-2134d2f2${_scopeId}><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_0$o)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_1$7)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_2$2)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_3$2)} data-v-2134d2f2${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "section-review-content" }, [
                createVNode("h4", { class: "h-l" }, "Отзывы на площадках"),
                createVNode("div", { class: "section-review__links" }, [
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_0$o })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_1$7 })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_2$2 })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_3$2 })
                  ])
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
const _sfc_setup$2V = _sfc_main$2V.setup;
_sfc_main$2V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-review/SectionReview.vue");
  return _sfc_setup$2V ? _sfc_setup$2V(props, ctx) : void 0;
};
const SectionReview = /* @__PURE__ */ _export_sfc(_sfc_main$2V, [["__scopeId", "data-v-2134d2f2"]]);
const _imports_0$n = "/assets/more-c32c7e57.png";
const _imports_1$6 = "/assets/offer-3e03318a.png";
const MButton_vue_vue_type_style_index_0_scoped_036617d7_lang = "";
const _sfc_main$2U = {};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "main-button" }, _attrs))} data-v-036617d7>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2U = _sfc_main$2U.setup;
_sfc_main$2U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButton.vue");
  return _sfc_setup$2U ? _sfc_setup$2U(props, ctx) : void 0;
};
const MButton = /* @__PURE__ */ _export_sfc(_sfc_main$2U, [["ssrRender", _sfc_ssrRender$11], ["__scopeId", "data-v-036617d7"]]);
const CardInsideOfferPrice_vue_vue_type_style_index_0_scoped_82d22041_lang = "";
const _sfc_main$2T = {};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-inside-prices" }, _attrs))} data-v-82d22041><div class="prices-old-wrapper" data-v-82d22041><h4 class="prices-old" data-v-82d22041>2000₽</h4></div><h4 class="prices-new" data-v-82d22041>0₽</h4></div>`);
}
const _sfc_setup$2T = _sfc_main$2T.setup;
_sfc_main$2T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardInsideOfferPrice.vue");
  return _sfc_setup$2T ? _sfc_setup$2T(props, ctx) : void 0;
};
const CardInsideOfferPrice = /* @__PURE__ */ _export_sfc(_sfc_main$2T, [["ssrRender", _sfc_ssrRender$10], ["__scopeId", "data-v-82d22041"]]);
const CardInsideOffer_vue_vue_type_style_index_0_scoped_698a0f59_lang = "";
const _sfc_main$2S = {
  __name: "CardInsideOffer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-inside" }, _attrs))} data-v-698a0f59><div data-v-698a0f59><h4 class="heading h-md" data-v-698a0f59> Первичный приём врача-косметолога<br data-v-698a0f59> + диагностика JANUS PRO.<br data-v-698a0f59> До конца февраля </h4>`);
      _push(ssrRenderComponent(CardInsideOfferPrice, { class: "prices" }, null, _parent));
      _push(`<div class="buttons" data-v-698a0f59>`);
      _push(ssrRenderComponent(MButton, {
        onClick: unref(store).openModalApplication
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Записаться на приём `);
          } else {
            return [
              createTextVNode(" Записаться на приём ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MButtonOutline, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a class="absolute-link" href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-698a0f59${_scopeId}></a> Задать вопрос `);
          } else {
            return [
              createVNode("a", {
                class: "absolute-link",
                href: "https://wa.me/79774122010",
                target: "_blank",
                rel: "noopener noreferrer"
              }),
              createTextVNode(" Задать вопрос ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2S = _sfc_main$2S.setup;
_sfc_main$2S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardInsideOffer.vue");
  return _sfc_setup$2S ? _sfc_setup$2S(props, ctx) : void 0;
};
const CardInsideOffer = /* @__PURE__ */ _export_sfc(_sfc_main$2S, [["__scopeId", "data-v-698a0f59"]]);
const SectionOfferList_vue_vue_type_style_index_0_scoped_3169f438_lang = "";
const _sfc_main$2R = {};
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))} data-v-3169f438><li class="list-item" data-v-3169f438><span data-v-3169f438>1</span><h5 class="text-lg" data-v-3169f438>Просто запишись к нам на приём</h5></li><li class="list-item" data-v-3169f438><span data-v-3169f438>2</span><h5 class="text-lg" data-v-3169f438> Пройди 30-ти минутную диагностику с помощью JANUS PRO </h5></li><li class="list-item" data-v-3169f438><span data-v-3169f438>3</span><h5 class="text-lg" data-v-3169f438> Получи чёткий план по возвращению коже её естественной красоты </h5></li></ul>`);
}
const _sfc_setup$2R = _sfc_main$2R.setup;
_sfc_main$2R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-offer/SectionOfferList.vue");
  return _sfc_setup$2R ? _sfc_setup$2R(props, ctx) : void 0;
};
const SectionOfferList = /* @__PURE__ */ _export_sfc(_sfc_main$2R, [["ssrRender", _sfc_ssrRender$$], ["__scopeId", "data-v-3169f438"]]);
const BigBadge_vue_vue_type_style_index_0_scoped_d2c97bcb_lang = "";
const _sfc_main$2Q = {};
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs) {
  _push(`<h6${ssrRenderAttrs(mergeProps({ class: "big-badge" }, _attrs))} data-v-d2c97bcb>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h6>`);
}
const _sfc_setup$2Q = _sfc_main$2Q.setup;
_sfc_main$2Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/big-badge/BigBadge.vue");
  return _sfc_setup$2Q ? _sfc_setup$2Q(props, ctx) : void 0;
};
const BigBadge = /* @__PURE__ */ _export_sfc(_sfc_main$2Q, [["ssrRender", _sfc_ssrRender$_], ["__scopeId", "data-v-d2c97bcb"]]);
const SectionOffer_vue_vue_type_style_index_0_scoped_1cf6f6f2_lang = "";
const _sfc_main$2P = {
  __name: "SectionOffer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-offer" }, _attrs))} data-v-1cf6f6f2><div class="section-offer-container" data-v-1cf6f6f2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-offer" data-v-1cf6f6f2${_scopeId}>`);
            _push2(ssrRenderComponent(BigBadge, { style: { "background": "#bfb0e9" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Диагностика`);
                } else {
                  return [
                    createTextVNode("Диагностика")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-content" data-v-1cf6f6f2${_scopeId}><div class="card-content-left" data-v-1cf6f6f2${_scopeId}><h3 class="h-l heading" data-v-1cf6f6f2${_scopeId}>Хочешь здоровую кожу?</h3>`);
            _push2(ssrRenderComponent(SectionOfferList, null, null, _parent2, _scopeId));
            _push2(`</div><div class="image-container" data-v-1cf6f6f2${_scopeId}><a href="https://www.youtube.com/watch?v=DK1uUY_BN68" target="_blank" rel="noopener noreferrer" data-v-1cf6f6f2${_scopeId}><img${ssrRenderAttr("src", _imports_0$n)} class="image-more" data-v-1cf6f6f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_1$6)} class="image" data-v-1cf6f6f2${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(CardInsideOffer, { class: "card-inside" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-offer" }, [
                createVNode(BigBadge, { style: { "background": "#bfb0e9" } }, {
                  default: withCtx(() => [
                    createTextVNode("Диагностика")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "card-content-left" }, [
                    createVNode("h3", { class: "h-l heading" }, "Хочешь здоровую кожу?"),
                    createVNode(SectionOfferList)
                  ]),
                  createVNode("div", { class: "image-container" }, [
                    createVNode("a", {
                      href: "https://www.youtube.com/watch?v=DK1uUY_BN68",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode("img", {
                        src: _imports_0$n,
                        class: "image-more"
                      })
                    ]),
                    createVNode("img", {
                      src: _imports_1$6,
                      class: "image"
                    })
                  ])
                ]),
                createVNode(CardInsideOffer, { class: "card-inside" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2P = _sfc_main$2P.setup;
_sfc_main$2P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-offer/SectionOffer.vue");
  return _sfc_setup$2P ? _sfc_setup$2P(props, ctx) : void 0;
};
const SectionOffer = /* @__PURE__ */ _export_sfc(_sfc_main$2P, [["__scopeId", "data-v-1cf6f6f2"]]);
const SectionOtherCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2O = {
  __name: "SectionOtherCard",
  __ssrInlineRender: true,
  props: {
    iconFilename: String
  },
  setup(__props) {
    const props = __props;
    function getImageUrl() {
      return new URL(`./${props.iconFilename}`, import.meta.url).toString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "transition": "0.2s" } }, _attrs))}><img${ssrRenderAttr("src", getImageUrl())} class="image"></div>`);
    };
  }
};
const _sfc_setup$2O = _sfc_main$2O.setup;
_sfc_main$2O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherCard.vue");
  return _sfc_setup$2O ? _sfc_setup$2O(props, ctx) : void 0;
};
const SectionOtherBlockSm_vue_vue_type_style_index_0_scoped_37d4c311_lang = "";
const _sfc_main$2N = {
  __name: "SectionOtherBlockSm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-37d4c311><div class="wrapper-cards" data-v-37d4c311><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto5.png",
        class: "card-parallax"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto1.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "right": "100%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto8.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "left": "100%" }
      }, null, _parent));
      _push(`</div><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto2.png",
        class: "card-parallax"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto7.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "right": "110%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto6.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "left": "110%" }
      }, null, _parent));
      _push(`</div><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto3.png",
        class: "card-parallax"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2N = _sfc_main$2N.setup;
_sfc_main$2N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockSm.vue");
  return _sfc_setup$2N ? _sfc_setup$2N(props, ctx) : void 0;
};
const SectionOtherBlockSm = /* @__PURE__ */ _export_sfc(_sfc_main$2N, [["__scopeId", "data-v-37d4c311"]]);
const SectionOtherBlockMd_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2M = {
  __name: "SectionOtherBlockMd",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="wrapper-cards"><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$2O, { iconFilename: "ParallaxPhoto5.png" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto1.png",
        class: "card-absolute",
        style: { "top": "50%", "right": "100%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto8.png",
        class: "card-absolute",
        style: { "top": "50%", "left": "100%" }
      }, null, _parent));
      _push(`</div><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$2O, { iconFilename: "ParallaxPhoto2.png" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto7.png",
        class: "card-absolute",
        style: { "top": "50%", "right": "110%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto6.png",
        class: "card-absolute",
        style: { "top": "50%", "left": "110%" }
      }, null, _parent));
      _push(`</div><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$2O, { iconFilename: "ParallaxPhoto3.png" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2M = _sfc_main$2M.setup;
_sfc_main$2M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockMd.vue");
  return _sfc_setup$2M ? _sfc_setup$2M(props, ctx) : void 0;
};
const SectionOtherBlockLg_vue_vue_type_style_index_0_scoped_8eb2128d_lang = "";
const _sfc_main$2L = {
  __name: "SectionOtherBlockLg",
  __ssrInlineRender: true,
  setup(__props) {
    const parallaxStyle = ref("");
    const parallaxStyle2 = ref("");
    const parallaxStyle3 = ref("");
    const handleScroll = () => {
      if (window.innerWidth > 1200) {
        const scrollTop = window.scrollY;
        if (scrollTop > 7e3 && scrollTop < 1e4) {
          let value = scrollTop - 7500;
          parallaxStyle.value = `transform: translateY(${value * 0.01}px) translateX(${value * -0.01}px)`;
          parallaxStyle2.value = `transform: translateY(${value * -0.01}px) translateX(${value * 8e-3}px)`;
          parallaxStyle3.value = `transform: translateY(${value * 0.01}px) translateX(${value * 0.01}px)`;
        }
      } else {
        parallaxStyle.value = "";
        parallaxStyle2.value = "";
        parallaxStyle3.value = "";
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding-bottom": "300px" } }, _attrs))} data-v-8eb2128d><div class="wrapper-cards" data-v-8eb2128d><div style="${ssrRenderStyle({ "padding-top": "120px" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto7.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto1.png",
        style: parallaxStyle.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "top": "140%", "left": "-30%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto3.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "padding-top": "70px", "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto2.png",
        style: parallaxStyle3.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "bottom": "100%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto5.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div><div class="card-absolute" style="${ssrRenderStyle({ "top": "120%", "left": "50%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto6.png",
        style: parallaxStyle.value
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "padding-top": "150px", "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto4.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "bottom": "85%", "left": "-20%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$2O, {
        iconFilename: "ParallaxPhoto8.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$2L = _sfc_main$2L.setup;
_sfc_main$2L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockLg.vue");
  return _sfc_setup$2L ? _sfc_setup$2L(props, ctx) : void 0;
};
const SectionOtherBlockLg = /* @__PURE__ */ _export_sfc(_sfc_main$2L, [["__scopeId", "data-v-8eb2128d"]]);
const SectionBlockResponse_vue_vue_type_style_index_0_scoped_93514416_lang = "";
const _sfc_main$2K = {
  __name: "SectionBlockResponse",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-93514416>`);
      _push(ssrRenderComponent(SectionOtherBlockLg, { class: "pictures-block-lg" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2M, { class: "pictures-block-md" }, null, _parent));
      _push(ssrRenderComponent(SectionOtherBlockSm, { class: "pictures-block-sm" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2K = _sfc_main$2K.setup;
_sfc_main$2K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionBlockResponse.vue");
  return _sfc_setup$2K ? _sfc_setup$2K(props, ctx) : void 0;
};
const SectionBlockResponse = /* @__PURE__ */ _export_sfc(_sfc_main$2K, [["__scopeId", "data-v-93514416"]]);
const SectionOther_vue_vue_type_style_index_0_scoped_007cbfb1_lang = "";
const _sfc_main$2J = {
  __name: "SectionOther",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-other" }, _attrs))} data-v-007cbfb1>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="h-xl heading-section--other" data-v-007cbfb1${_scopeId}> Другие примеры результата, к которому мы помогли придти </h4>`);
            _push2(ssrRenderComponent(SectionBlockResponse, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h4", { class: "h-xl heading-section--other" }, " Другие примеры результата, к которому мы помогли придти "),
              createVNode(SectionBlockResponse)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2J = _sfc_main$2J.setup;
_sfc_main$2J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOther.vue");
  return _sfc_setup$2J ? _sfc_setup$2J(props, ctx) : void 0;
};
const SectionOther$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2J, [["__scopeId", "data-v-007cbfb1"]]);
const SectionInfo_vue_vue_type_style_index_0_scoped_47057e66_lang = "";
const _sfc_main$2I = {
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
const _sfc_setup$2I = _sfc_main$2I.setup;
_sfc_main$2I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-info/SectionInfo.vue");
  return _sfc_setup$2I ? _sfc_setup$2I(props, ctx) : void 0;
};
const SectionInfo = /* @__PURE__ */ _export_sfc(_sfc_main$2I, [["__scopeId", "data-v-47057e66"]]);
const _sfc_main$2H = {};
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none"
  }, _attrs))}><path d="M0 2.01172C0 0.907149 0.895431 0.0117188 2 0.0117188H10C11.1046 0.0117188 12 0.907149 12 2.01172V3.01172H0V2.01172Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.01172H12V9.01172C12 10.6686 10.6569 12.0117 9 12.0117H3C1.34315 12.0117 0 10.6686 0 9.01172V4.01172ZM2 6.51172C2 6.23558 2.22386 6.01172 2.5 6.01172H9.5C9.77614 6.01172 10 6.23558 10 6.51172C10 6.78786 9.77614 7.01172 9.5 7.01172H2.5C2.22386 7.01172 2 6.78786 2 6.51172ZM2.5 8.01172C2.22386 8.01172 2 8.23558 2 8.51172C2 8.78786 2.22386 9.01172 2.5 9.01172H9.5C9.77614 9.01172 10 8.78786 10 8.51172C10 8.23558 9.77614 8.01172 9.5 8.01172H2.5Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$2H = _sfc_main$2H.setup;
_sfc_main$2H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconNew.vue");
  return _sfc_setup$2H ? _sfc_setup$2H(props, ctx) : void 0;
};
const IconNew = /* @__PURE__ */ _export_sfc(_sfc_main$2H, [["ssrRender", _sfc_ssrRender$Z]]);
const ButtonDecor_vue_vue_type_style_index_0_scoped_36222307_lang = "";
const _sfc_main$2G = {};
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "button-decor" }, _attrs))} data-v-36222307>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2G = _sfc_main$2G.setup;
_sfc_main$2G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonDecor.vue");
  return _sfc_setup$2G ? _sfc_setup$2G(props, ctx) : void 0;
};
const ButtonDecor = /* @__PURE__ */ _export_sfc(_sfc_main$2G, [["ssrRender", _sfc_ssrRender$Y], ["__scopeId", "data-v-36222307"]]);
const CardNews_vue_vue_type_style_index_0_scoped_519b3a22_lang = "";
const _sfc_main$2F = {
  __name: "CardNews",
  __ssrInlineRender: true,
  props: ["isArticle", "isNews"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-wrapper" }, _attrs))} data-v-519b3a22><a href="#" class="card-link" data-v-519b3a22></a><div class="card" data-v-519b3a22><div class="card-img-container" data-v-519b3a22><img class="card-img" src="https://static.zdravcity.ru/upload/main/fdd/1024_768_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0.jpg" data-v-519b3a22></div><div class="card-head-info" data-v-519b3a22><div class="card-head-info-date" data-v-519b3a22>`);
      _push(ssrRenderComponent(IconNew, null, null, _parent));
      _push(`<span class="card-date-text" data-v-519b3a22>15.05.2024</span></div>`);
      if (props.isNews) {
        _push(ssrRenderComponent(ButtonDecor, { class: "card-tag" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Новость`);
            } else {
              return [
                createTextVNode("Новость")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.isArticle) {
        _push(ssrRenderComponent(ButtonDecor, { class: "card-tag" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Статья `);
            } else {
              return [
                createTextVNode(" Статья ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.isNews) {
        _push(`<h5 class="h-sm-ultra card-heading" data-v-519b3a22> Название публикации </h5>`);
      } else {
        _push(`<!---->`);
      }
      if (props.isArticle) {
        _push(`<h5 class="h-sm-ultra card-heading" data-v-519b3a22> Более длинное название публикации в 2 строчки </h5>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-sm" data-v-519b3a22> Краткий анонс публикации. Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. </p></div></div>`);
    };
  }
};
const _sfc_setup$2F = _sfc_main$2F.setup;
_sfc_main$2F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardNews.vue");
  return _sfc_setup$2F ? _sfc_setup$2F(props, ctx) : void 0;
};
const CardNews = /* @__PURE__ */ _export_sfc(_sfc_main$2F, [["__scopeId", "data-v-519b3a22"]]);
const _sfc_main$2E = {};
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><circle cx="30" cy="30" r="30" transform="rotate(90 30 30)" fill="#AE8C8E"></circle><path d="M20.3996 29.7688C20.3996 29.4195 20.518 29.1265 20.7546 28.8898C20.9913 28.6531 21.2839 28.5352 21.6324 28.536L35.4083 28.536L29.3986 22.5264C29.1521 22.2798 29.0288 21.9869 29.0288 21.6474C29.0288 21.308 29.1521 21.0155 29.3986 20.7697C29.6452 20.5232 29.9328 20.3999 30.2616 20.3999C30.5903 20.3999 30.8779 20.5232 31.1245 20.7697L39.2606 28.9058C39.3839 29.0291 39.471 29.1627 39.5219 29.3065C39.5729 29.4503 39.5988 29.6044 39.5996 29.7688C39.5996 29.9331 39.5737 30.0926 39.5219 30.2471C39.4702 30.4016 39.3831 30.5298 39.2606 30.6317L31.1245 38.7678C30.8779 39.0143 30.5903 39.1376 30.2616 39.1376C29.9328 39.1376 29.6452 39.0143 29.3986 38.7678C29.1521 38.5212 29.0288 38.2283 29.0288 37.8888C29.0288 37.5494 29.1521 37.2569 29.3986 37.0111L35.4083 31.0015L21.6324 31.0015C21.2831 31.0015 20.9901 30.8832 20.7534 30.6465C20.5167 30.4098 20.3988 30.1172 20.3996 29.7688Z" fill="white"></path></svg>`);
}
const _sfc_setup$2E = _sfc_main$2E.setup;
_sfc_main$2E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconSliderArrowRight.vue");
  return _sfc_setup$2E ? _sfc_setup$2E(props, ctx) : void 0;
};
const IconSliderArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2E, [["ssrRender", _sfc_ssrRender$X]]);
const SliderVariant1_vue_vue_type_style_index_0_scoped_8b3091ba_lang = "";
const _sfc_main$2D = {
  __name: "SliderVariant1",
  __ssrInlineRender: true,
  props: {
    breakpoints: {
      default: () => ({
        1e3: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 1.5
        },
        1300: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 3
        }
      })
    }
  },
  setup(__props) {
    const props = __props;
    const modules = [Pagination];
    let swiperObject = void 0;
    const onSwiperInit = (swiper2) => swiperObject = swiper2;
    const sliderNext = () => swiperObject.slideNext(500);
    const sliderPrev = () => swiperObject.slidePrev(500);
    const isActiveNext = ref(true);
    const isActivePrev = ref(false);
    const onChangeSlider = (swiper2) => {
      if (swiper2.realIndex === 0) {
        isActivePrev.value = false;
      } else {
        isActivePrev.value = true;
      }
      if (swiper2.slides.length === swiper2.realIndex + 1) {
        isActiveNext.value = false;
      } else {
        isActiveNext.value = true;
      }
    };
    const onSwiperEnd = () => {
      setTimeout(() => {
        isActiveNext.value = false;
      }, 300);
    };
    const onSwiperStart = () => {
      setTimeout(() => {
        isActivePrev.value = false;
      }, 300);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MContainer, mergeProps({ class: "container-custom" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrIncludeBooleanAttr(!isActivePrev.value) ? " disabled" : ""} class="${ssrRenderClass([!isActivePrev.value && "disabled", "button-prev"])}"${ssrRenderAttr("onClick", sliderPrev)} data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(IconSliderArrowRight, { style: { "transform": "rotate(180deg)" } }, null, _parent2, _scopeId));
            _push2(`</button><button${ssrIncludeBooleanAttr(!isActiveNext.value) ? " disabled" : ""} class="${ssrRenderClass([!isActiveNext.value && "disabled", "button-next"])}"${ssrRenderAttr("onClick", sliderNext)} data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(IconSliderArrowRight, null, null, _parent2, _scopeId));
            _push2(`</button><div data-v-8b3091ba${_scopeId}><div class="content" data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              onReachEnd: () => onSwiperEnd(),
              onReachBeginning: () => onSwiperStart(),
              onActiveIndexChange: (swiper2) => onChangeSlider(swiper2),
              onSwiper: (swiper2) => onSwiperInit(swiper2),
              class: "swiper-custom",
              modules,
              initialSlide: 0,
              pagination: {
                clickable: true
              },
              breakpoints: props.breakpoints
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("button", {
                disabled: !isActivePrev.value,
                class: ["button-prev", !isActivePrev.value && "disabled"],
                onClick: sliderPrev
              }, [
                createVNode(IconSliderArrowRight, { style: { "transform": "rotate(180deg)" } })
              ], 10, ["disabled"]),
              createVNode("button", {
                disabled: !isActiveNext.value,
                class: ["button-next", !isActiveNext.value && "disabled"],
                onClick: sliderNext
              }, [
                createVNode(IconSliderArrowRight)
              ], 10, ["disabled"]),
              createVNode("div", null, [
                createVNode("div", { class: "content" }, [
                  createVNode(unref(Swiper), {
                    onReachEnd: () => onSwiperEnd(),
                    onReachBeginning: () => onSwiperStart(),
                    onActiveIndexChange: (swiper2) => onChangeSlider(swiper2),
                    onSwiper: (swiper2) => onSwiperInit(swiper2),
                    class: "swiper-custom",
                    modules,
                    initialSlide: 0,
                    pagination: {
                      clickable: true
                    },
                    breakpoints: props.breakpoints
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  }, 8, ["onReachEnd", "onReachBeginning", "onActiveIndexChange", "onSwiper", "breakpoints"])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2D = _sfc_main$2D.setup;
_sfc_main$2D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/SliderVariant1.vue");
  return _sfc_setup$2D ? _sfc_setup$2D(props, ctx) : void 0;
};
const SliderVariant1 = /* @__PURE__ */ _export_sfc(_sfc_main$2D, [["__scopeId", "data-v-8b3091ba"]]);
const SectionRead_vue_vue_type_style_index_0_scoped_d2a99271_lang = "";
const _sfc_main$2C = {
  __name: "SectionRead",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = {
      0: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      },
      1e3: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 2
      },
      1300: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 3
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-read" }, _attrs))} data-v-d2a99271>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-d2a99271${_scopeId}>Читай полезное и интересное</h3><h5 class="text-section section-read-text" data-v-d2a99271${_scopeId}> Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе ухаживать за кожей </h5>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Читай полезное и интересное"),
              createVNode("h5", { class: "text-section section-read-text" }, " Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе ухаживать за кожей ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, { breakpoints }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isArticle: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isArticle: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardNews, {
                    class: "card-news",
                    isNews: true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardNews, {
                      class: "card-news",
                      isNews: true
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isArticle: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardNews, {
                    class: "card-news",
                    isNews: true
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-d2a99271${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, { class: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Больше интересных статей`);
                } else {
                  return [
                    createTextVNode("Больше интересных статей")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "display": "flex", "justify-content": "center" } }, [
                createVNode(MButtonBig, { class: "button" }, {
                  default: withCtx(() => [
                    createTextVNode("Больше интересных статей")
                  ]),
                  _: 1
                })
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
const _sfc_setup$2C = _sfc_main$2C.setup;
_sfc_main$2C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-read/SectionRead.vue");
  return _sfc_setup$2C ? _sfc_setup$2C(props, ctx) : void 0;
};
const SectionRead = /* @__PURE__ */ _export_sfc(_sfc_main$2C, [["__scopeId", "data-v-d2a99271"]]);
const SectionTech_vue_vue_type_style_index_0_scoped_98c71603_lang = "";
const _sfc_main$2B = {
  __name: "SectionTech",
  __ssrInlineRender: true,
  setup(__props) {
    const stylesH1 = ref("opacity: 0;");
    const stylesH2 = ref("opacity: 0;");
    const isSectionInfoVisible = ref(false);
    let observer = null;
    const handleSectionIntersect = (entries) => {
      const [entry] = entries;
      isSectionInfoVisible.value = entry.isIntersecting;
      if (isSectionInfoVisible.value) {
        setTimeout(() => {
          stylesH1.value = "opacity: 1;";
          stylesH2.value = "opacity: 1; text-shadow: 0px 10px 20px #d0c3b4;";
        }, 400);
      }
    };
    onMounted(() => {
      observer = new IntersectionObserver(handleSectionIntersect);
      const sectionTech = document.querySelector(".section-tech");
      if (sectionTech) {
        observer.observe(sectionTech);
      }
    });
    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-tech" }, _attrs))} data-v-98c71603>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="heading" style="${ssrRenderStyle(stylesH1.value)}" data-v-98c71603${_scopeId}> Мы разработали новый продукт <br data-v-98c71603${_scopeId}> в косметологии </h4><h4 class="big-heading" style="${ssrRenderStyle(stylesH2.value)}" data-v-98c71603${_scopeId}> 8 концептов твоей красоты </h4>`);
          } else {
            return [
              createVNode("h4", {
                class: "heading",
                style: stylesH1.value
              }, [
                createTextVNode(" Мы разработали новый продукт "),
                createVNode("br"),
                createTextVNode(" в косметологии ")
              ], 4),
              createVNode("h4", {
                class: "big-heading",
                style: stylesH2.value
              }, " 8 концептов твоей красоты ", 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2B = _sfc_main$2B.setup;
_sfc_main$2B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-tech/SectionTech.vue");
  return _sfc_setup$2B ? _sfc_setup$2B(props, ctx) : void 0;
};
const SectionTech$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2B, [["__scopeId", "data-v-98c71603"]]);
const _sfc_main$2A = {};
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "434",
    height: "459",
    viewBox: "0 0 434 459",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1_1271)"><path d="M255.704 130.334C255.704 130.334 285.534 95.8805 261.897 73.8183C238.26 51.756 257.064 35.5116 236.145 18.2849C218.625 3.92937 200.652 18.2849 183.66 7.48048C162.515 -5.96841 133.29 -2.26618 126.04 25.9916C118.866 54.2494 89.4899 31.1294 72.4984 66.5649C61.0197 90.516 85.865 107.667 59.6604 124.667C31.1147 143.103 59.1318 194.027 98.2499 184.809C137.368 175.592 255.704 130.334 255.704 130.334Z" fill="black"></path><path d="M265.974 241.627L307.433 459H71.2891L120.3 254.32L265.974 241.627Z" fill="#BAC3D8"></path><path d="M290.216 66.6397C291.197 71.9286 322.084 64.0708 335.979 82.733C342.247 91.1197 364.148 134.791 350.932 131.391C340.964 128.822 249.059 112.124 249.059 112.124L260.613 189.191C260.613 189.191 391.56 228.177 425.77 185.337C460.13 142.346 365.809 29.1641 360.447 24.253C352.593 17.0752 343.38 20.7019 345.042 29.6175C345.042 29.6175 331.146 21.6841 328.805 37.3241C328.805 37.3241 320.574 32.413 318.006 40.4219C316.42 45.333 319.97 55.3819 319.97 55.3819C319.97 55.3819 287.648 52.7375 290.216 66.6397Z" fill="#F4EEE8"></path><path d="M363.468 206.191C353.424 206.191 342.398 205.511 330.316 204.076C293.69 199.693 260.764 190.022 260.462 189.947C260.16 189.871 260.009 189.645 259.933 189.342L248.379 112.276C248.379 112.049 248.454 111.822 248.605 111.596C248.757 111.445 249.059 111.369 249.285 111.369C250.191 111.52 341.341 128.142 351.234 130.636C352.971 131.089 353.575 130.56 353.877 130.031C357.804 124.138 341.19 90.7423 335.451 83.1112C326.691 71.3245 310.832 70.4179 300.335 69.8134C294.067 69.4356 289.989 69.209 289.536 66.7912C289.083 64.2223 289.687 62.0312 291.348 60.1423C297.163 53.7956 314.381 54.249 318.988 54.5512C318.082 51.7556 315.967 44.3512 317.327 40.1956C318.082 37.7779 319.441 36.1912 321.329 35.5112C323.897 34.529 326.842 35.5112 328.277 36.1912C329.107 31.8845 330.92 29.089 333.714 27.729C337.49 25.9156 342.021 27.3512 344.135 28.3334C343.909 24.9334 345.268 22.1379 347.911 20.6268C351.612 18.5868 356.747 19.7956 360.976 23.649C363.694 26.1423 388.464 55.3823 408.703 90.0623C420.257 109.858 427.96 127.462 431.585 142.498C436.191 161.16 434.379 175.742 426.374 185.791C415.499 199.391 394.43 206.191 363.468 206.191ZM261.292 188.587C265.37 189.796 296.333 198.485 330.467 202.565C364.072 206.569 407.721 206.72 425.166 184.885C442.761 162.822 425.166 121.569 407.344 90.8934C387.558 56.969 362.562 27.2001 359.919 24.7823C356.143 21.3823 351.687 20.249 348.591 21.9868C346.174 23.3468 345.117 26.0668 345.721 29.4668C345.797 29.769 345.646 30.0712 345.419 30.2223C345.193 30.3734 344.89 30.3734 344.588 30.2979C344.513 30.2979 338.623 26.9734 334.242 29.089C331.75 30.2979 330.089 33.0934 329.485 37.4756C329.485 37.7023 329.258 37.929 329.032 38.0801C328.805 38.1556 328.503 38.1556 328.352 38.0801C328.352 38.0801 324.652 35.889 321.707 37.0223C320.272 37.5512 319.29 38.8356 318.61 40.7245C317.1 45.3334 320.574 55.0801 320.574 55.2312C320.649 55.4579 320.649 55.7601 320.498 55.9112C320.347 56.1379 320.121 56.2134 319.819 56.2134C319.592 56.2134 298.296 54.5512 292.255 61.2756C290.895 62.7868 290.442 64.5245 290.82 66.6401C291.046 67.9245 295.502 68.1512 300.184 68.4534C310.983 69.0579 327.219 70.0401 336.433 82.3556C341.87 89.6845 359.616 123.911 354.859 131.013C354.255 131.92 353.046 132.827 350.554 132.222C341.266 129.88 259.933 114.996 249.738 113.182L261.292 188.587Z" fill="black"></path><path d="M368.379 42.7646C368.379 42.7646 367.095 54.5513 356.824 49.1869C356.824 49.1869 355.314 63.8446 343.684 56.3646C343.684 56.3646 341.645 65.8847 331.828 60.7469L368.379 42.7646Z" fill="white"></path><path d="M337.114 63.0136C335.453 63.0136 333.565 62.4847 331.526 61.4269C331.148 61.2003 330.997 60.7469 331.224 60.3692C331.45 59.9914 331.903 59.8403 332.205 60.0669C335.075 61.578 337.492 61.8803 339.38 61.0492C342.174 59.7647 342.929 56.2892 342.929 56.2136C343.004 55.9869 343.155 55.7603 343.382 55.6847C343.609 55.6091 343.835 55.6092 344.062 55.7603C347.082 57.7247 349.65 58.2536 351.613 57.2714C355.314 55.5336 355.993 49.1869 355.993 49.1114C355.993 48.8847 356.144 48.658 356.371 48.5069C356.598 48.3558 356.824 48.3558 357.051 48.5069C359.845 49.9425 362.11 50.2447 363.847 49.2625C366.943 47.6003 367.548 42.6892 367.548 42.6136C367.623 42.2358 367.925 41.9336 368.378 41.9336C368.756 42.0091 369.058 42.3869 369.058 42.7647C369.058 42.9914 368.378 48.5069 364.602 50.5469C362.639 51.6047 360.147 51.5291 357.353 50.2447C356.975 52.3603 355.691 56.8936 352.218 58.5558C349.952 59.6136 347.233 59.2358 344.062 57.4225C343.609 58.7825 342.4 61.1247 339.984 62.258C339.153 62.7869 338.171 63.0136 337.114 63.0136Z" fill="black"></path><path d="M348.891 35.2852C348.891 35.2852 354.781 43.7474 356.896 49.1874L348.891 35.2852Z" fill="white"></path><path d="M356.821 49.9425C356.519 49.9425 356.217 49.7914 356.142 49.4892C354.178 44.2758 348.288 35.8892 348.288 35.8136C348.061 35.4358 348.137 34.9825 348.439 34.7558C348.817 34.5292 349.27 34.6047 349.496 34.9069C349.723 35.2847 355.462 43.5203 357.577 48.9603C357.728 49.338 357.501 49.7914 357.124 49.9425C357.048 49.8669 356.897 49.9425 356.821 49.9425Z" fill="black"></path><path d="M332.656 41.707C332.656 41.707 340.359 54.0226 343.682 56.3648L332.656 41.707Z" fill="white"></path><path d="M343.68 57.1202C343.529 57.1202 343.378 57.0447 343.227 56.9691C339.829 54.6269 332.277 42.6136 331.975 42.0847C331.749 41.7069 331.824 41.2536 332.202 41.0269C332.579 40.8002 333.032 40.8758 333.259 41.2536C333.334 41.4047 340.962 53.4936 344.133 55.6847C344.511 55.9114 344.587 56.3647 344.36 56.7425C344.209 56.9691 343.982 57.1202 343.68 57.1202Z" fill="black"></path><path d="M176.862 111.218C176.862 111.218 249.586 105.627 292.253 116.96C296.029 117.942 284.55 150.885 278.66 194.707C286.514 235.129 289.459 274.418 273.751 270.64C197.479 251.978 138.424 304.036 114.258 281.445C110.784 278.196 105.196 250.693 100.665 220.925C79.7465 185.867 54.4481 169.169 58.1485 165.316C89.5638 132.902 176.862 111.218 176.862 111.218Z" fill="white"></path><path d="M131.099 287.942C124.152 287.942 118.337 286.28 113.73 281.973C109.879 278.347 104.064 248.2 99.9105 221.151C88.2052 201.507 75.1407 187.755 66.5317 178.613C59.1309 170.831 55.5061 166.902 57.6206 164.711C88.8094 132.524 175.806 110.689 176.712 110.462C176.787 110.462 176.787 110.462 176.863 110.462C177.618 110.387 250.191 105.022 292.481 116.204C294.973 116.884 293.84 122.4 289.837 139.778C286.666 153.68 282.361 172.795 279.416 194.707C284.098 218.733 290.442 260.364 280.624 269.658C278.736 271.471 276.32 272 273.526 271.32C232.52 261.271 196.875 271.698 168.178 280.084C153.906 284.315 141.294 287.942 131.099 287.942ZM177.014 111.973C174.295 112.653 89.2625 134.338 58.7534 165.844C57.6206 166.978 62.3027 171.964 67.6644 177.631C76.349 186.849 89.489 200.675 101.345 220.547C101.421 220.622 101.421 220.698 101.421 220.849C106.481 254.018 111.842 278.195 114.787 280.915C125.586 291.04 144.239 285.6 167.876 278.724C196.724 270.338 232.595 259.835 273.979 269.96C276.32 270.489 278.132 270.111 279.643 268.675C286.439 262.178 285.835 235.355 277.981 194.933C277.981 194.858 277.981 194.782 277.981 194.707C280.926 172.644 285.306 153.529 288.478 139.551C290.895 128.898 293.16 118.849 292.103 117.791C250.493 106.684 179.506 111.822 177.014 111.973Z" fill="black"></path><path d="M57.394 167.582C22.3538 198.106 -16.3868 248.88 8.76063 286.582C43.4987 338.64 152.32 271.697 169.689 219.64C169.689 219.64 174.295 204.982 164.251 206.946C164.251 206.946 168.48 195.009 156.171 196.897C156.171 196.897 157.53 182.995 145.146 189.569C145.146 189.569 167.348 165.693 158.814 159.497C152.471 154.889 145.523 172.191 126.493 189.191C118.035 196.746 75.0651 232.635 51.3526 234.675L72.8752 227.278L95.9081 213.125L57.394 167.582Z" fill="#F4EEE8"></path><path d="M47.1225 306.151C29.9045 306.151 16.5379 299.653 8.15541 287.035C-16.0102 250.844 17.5196 201.355 56.8643 167.053C57.1664 166.751 57.6195 166.826 57.9215 167.129C58.2236 167.431 58.1481 167.884 57.846 168.186C18.9544 202.035 -14.1978 250.844 9.36369 286.129C19.03 300.635 35.5683 306.831 57.1664 303.884C78.1603 301.089 103.006 289.68 125.283 272.755C147.334 255.982 163.269 236.489 168.933 219.338C169.612 217.146 170.896 210.951 168.781 208.533C167.875 207.551 166.44 207.249 164.401 207.626C164.099 207.702 163.873 207.551 163.722 207.4C163.571 207.173 163.495 206.946 163.571 206.644C163.571 206.569 165.308 201.658 163.118 199.089C161.909 197.653 159.568 197.124 156.246 197.653C156.019 197.653 155.792 197.653 155.641 197.426C155.49 197.275 155.415 197.049 155.415 196.822C155.415 196.746 155.943 191.08 153.074 189.191C151.412 188.058 148.845 188.435 145.522 190.249C145.22 190.4 144.767 190.324 144.54 190.022C144.314 189.72 144.314 189.342 144.616 189.04C144.767 188.889 160.852 171.435 160.021 163.049C159.87 161.764 159.342 160.782 158.436 160.102C155.415 157.911 152.092 161.764 145.447 169.924C140.84 175.591 135.025 182.693 127.096 189.72C126.643 190.173 77.9337 233.089 51.5025 235.355C51.0494 235.431 50.7474 235.053 50.6719 234.675C50.6719 234.222 50.9739 233.92 51.3515 233.844C77.2541 231.578 125.585 188.964 126.038 188.586C133.892 181.56 139.632 174.533 144.238 168.942C150.733 161.009 155.037 155.72 159.342 158.893C160.626 159.8 161.381 161.16 161.532 162.898C162.211 170 152.545 182.24 148.014 187.529C150.431 186.773 152.47 186.924 153.98 187.906C156.774 189.795 157.076 194.102 157.001 195.991C160.399 195.613 162.891 196.293 164.326 198.106C166.289 200.524 165.761 204.151 165.308 206.04C167.271 205.889 168.857 206.418 169.914 207.626C173.086 211.178 170.518 219.564 170.367 219.942C164.552 237.395 148.467 257.115 126.19 274.04C103.761 291.191 78.6134 302.6 57.3174 305.471C53.8436 305.924 50.3698 306.151 47.1225 306.151Z" fill="black"></path><path d="M162.367 77.8223L165.312 119.151C165.312 119.151 179.736 134.489 194.311 128.218C204.279 123.911 198.842 114.693 198.842 114.693L190.988 79.1823L162.367 77.8223Z" fill="white"></path><path d="M187.059 130.485C175.127 130.485 164.857 119.831 164.781 119.68C164.63 119.529 164.555 119.378 164.555 119.227L161.609 77.8223C161.609 77.5957 161.685 77.369 161.836 77.2179C161.987 77.0668 162.214 76.9912 162.44 76.9912L191.137 78.4268C191.514 78.4268 191.741 78.6534 191.816 79.0312L199.67 114.391C200.048 115.071 202.087 119 200.803 122.929C199.972 125.498 197.933 127.538 194.762 128.898C192.119 130.031 189.551 130.485 187.059 130.485ZM166.065 118.849C167.802 120.587 181.017 133.205 194.082 127.538C196.876 126.329 198.613 124.667 199.293 122.551C200.501 118.925 198.311 115.147 198.235 115.071C198.16 114.996 198.16 114.92 198.16 114.845L190.382 79.9379L163.12 78.5779L166.065 118.849Z" fill="black"></path><path d="M209.864 59.4619C210.544 66.1863 210.166 73.213 207.598 79.4085C205.031 85.6797 200.198 91.0441 194.005 93.0085C188.643 94.7463 182.753 93.8397 177.769 91.2708C172.785 88.7019 168.707 84.4708 165.459 79.7108C159.871 81.373 153.301 78.5774 150.507 73.213C148.921 70.1152 148.544 66.1108 150.205 63.0886C151.866 59.9908 155.944 58.4041 158.889 60.0663C160.551 61.0485 161.684 62.8619 163.345 63.7686C165.233 64.7508 167.725 64.2974 169.537 63.1641C171.35 62.0308 172.634 60.293 173.842 58.4041C176.41 54.3997 175.352 45.9374 174.295 38.9863C175.654 39.2886 185.321 43.293 195.289 42.0841C201.557 41.253 203.143 38.9863 204.427 39.0619C205.635 40.4974 206.919 44.9552 207.447 46.9197C208.58 51.1508 209.411 55.3063 209.864 59.4619Z" fill="white"></path><path d="M188.265 94.747C184.641 94.747 180.94 93.8403 177.466 92.027C172.935 89.6848 168.782 85.8314 165.157 80.6937C159.342 82.1292 152.772 79.107 149.902 73.667C148.014 70.0403 147.863 65.8848 149.6 62.787C150.582 60.9737 152.394 59.5381 154.433 58.9337C156.17 58.4803 157.907 58.6314 159.267 59.4626C160.173 59.9914 160.852 60.6714 161.532 61.3514C162.212 62.0314 162.891 62.7114 163.722 63.1648C165.157 63.9203 167.347 63.6937 169.159 62.5603C170.745 61.5781 171.954 60.067 173.237 58.027C175.654 54.3248 174.672 46.3159 173.615 39.1381C173.615 38.9114 173.69 38.6848 173.841 38.4581C173.993 38.307 174.295 38.2314 174.521 38.2314C174.748 38.307 175.201 38.4581 175.88 38.6848C178.977 39.667 187.057 42.387 195.288 41.4048C199.291 40.8759 201.254 39.8181 202.538 39.0626C203.293 38.6092 203.897 38.307 204.502 38.3826C204.728 38.3826 204.879 38.4581 205.03 38.6848C206.541 40.5737 208.051 46.2403 208.202 46.8448C209.41 51.7559 210.165 55.6848 210.543 59.387C211.374 67.0937 210.543 73.9692 208.202 79.7114C205.408 86.587 200.122 91.8003 194.156 93.7648C192.343 94.4448 190.304 94.747 188.265 94.747ZM165.459 79.0314C165.686 79.0314 165.912 79.1826 166.063 79.3337C169.612 84.4714 173.69 88.3248 178.146 90.5914C183.281 93.2359 188.945 93.9159 193.778 92.3292C199.366 90.5159 204.275 85.6048 206.843 79.107C209.108 73.5914 209.863 66.9426 209.033 59.5381C208.655 55.9114 207.9 51.9826 206.692 47.2226C206.012 44.5781 204.955 41.3292 204.049 39.9692C203.822 40.0448 203.52 40.2714 203.142 40.4226C201.859 41.1781 199.593 42.387 195.364 42.9159C186.831 43.9737 178.448 41.1781 175.352 40.1203C175.276 40.1203 175.276 40.1203 175.201 40.0448C176.258 47.2226 177.013 54.8537 174.446 58.8581C173.313 60.5959 171.954 62.5603 169.915 63.8448C168.102 64.9781 165.308 65.7337 162.967 64.4492C161.985 63.9203 161.23 63.1648 160.475 62.4092C159.795 61.7292 159.191 61.1248 158.511 60.747C157.454 60.1426 156.17 59.9914 154.811 60.3692C153.15 60.8226 151.715 61.9559 150.884 63.467C149.449 66.1114 149.525 69.8137 151.186 72.9114C153.829 77.8981 160.022 80.6181 165.232 79.0314C165.308 79.0314 165.383 79.0314 165.459 79.0314Z" fill="black"></path><path d="M157.379 68.4541C160.626 68.5297 163.722 70.6452 164.855 73.6674L157.379 68.4541Z" fill="white"></path><path d="M164.931 74.4227C164.629 74.4227 164.327 74.2716 164.251 73.9694C163.194 71.2494 160.4 69.2849 157.454 69.2094C157.001 69.2094 156.699 68.8316 156.699 68.4538C156.699 68.0005 157.001 67.6982 157.454 67.6982C161.004 67.7738 164.402 70.116 165.686 73.3649C165.837 73.7427 165.61 74.196 165.233 74.3471C165.082 74.4227 165.006 74.4227 164.931 74.4227Z" fill="black"></path><path d="M239.119 153.816L239.925 158.084L239.684 158.178C238.496 158.661 237.452 159.393 236.574 160.319C234.845 162.135 234.019 164.623 234.229 167.108L237.403 166.509L238.085 170.121L234.942 170.714L236.341 178.124L231.901 178.962L229.874 168.222C229.84 167.872 229.807 167.522 229.795 167.201C229.784 167.057 229.788 166.911 229.778 166.767C229.757 164.083 230.56 161.39 232.063 159.147C233.69 156.703 236.022 154.903 238.787 153.944L239.119 153.816Z" fill="#AE8C8E"></path><path d="M247.01 157.022L249.043 167.793C249.077 168.143 249.11 168.493 249.123 168.815C249.133 168.958 249.129 169.105 249.14 169.248C249.161 171.932 248.358 174.626 246.854 176.868C245.227 179.313 242.896 181.113 240.13 182.072L239.779 182.187L238.974 177.919L239.215 177.825C240.403 177.341 241.447 176.61 242.324 175.683C244.054 173.868 244.879 171.38 244.669 168.894L241.355 169.52L240.673 165.909L243.956 165.289L242.557 157.879L247.013 157.038L247.01 157.022Z" fill="#AE8C8E"></path></g><defs><clipPath id="clip0_1_1271"><rect width="434" height="459" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$2A = _sfc_main$2A.setup;
_sfc_main$2A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PicturePluses1.vue");
  return _sfc_setup$2A ? _sfc_setup$2A(props, ctx) : void 0;
};
const PicturePluses1 = /* @__PURE__ */ _export_sfc(_sfc_main$2A, [["ssrRender", _sfc_ssrRender$W]]);
const PlusesText_vue_vue_type_style_index_0_scoped_4de72c60_lang = "";
const _sfc_main$2z = {
  __name: "PlusesText",
  __ssrInlineRender: true,
  props: ["text", "more"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${ssrRenderAttrs(mergeProps({ class: "h-xs pluses-text" }, _attrs))} data-v-4de72c60>${ssrInterpolate(props.text)} `);
      if (!!props.more) {
        _push(`<span class="more-text" data-v-4de72c60>${ssrInterpolate(props.more)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4>`);
    };
  }
};
const _sfc_setup$2z = _sfc_main$2z.setup;
_sfc_main$2z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/PlusesText.vue");
  return _sfc_setup$2z ? _sfc_setup$2z(props, ctx) : void 0;
};
const PlusesText = /* @__PURE__ */ _export_sfc(_sfc_main$2z, [["__scopeId", "data-v-4de72c60"]]);
const _sfc_main$2y = {};
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "668",
    height: "443",
    viewBox: "0 0 668 443",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_1153)"><ellipse cx="334" cy="221.5" rx="234" ry="121.5" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_1153" x="0" y="0" width="668" height="443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1153"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$2y = _sfc_main$2y.setup;
_sfc_main$2y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/SectionPlusesShadow.vue");
  return _sfc_setup$2y ? _sfc_setup$2y(props, ctx) : void 0;
};
const SectionPlusesShadow = /* @__PURE__ */ _export_sfc(_sfc_main$2y, [["ssrRender", _sfc_ssrRender$V]]);
const _sfc_main$2x = {};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    viewBox: "0 0 544 378",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 150C0 67.1573 67.1573 0 150 0H524C535.046 0 544 8.9543 544 20V228C544 310.843 476.843 378 394 378H20C8.95429 378 0 369.046 0 358V150Z" fill="#EDE4DA"></path></svg>`);
}
const _sfc_setup$2x = _sfc_main$2x.setup;
_sfc_main$2x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/svg/SvgBg1.vue");
  return _sfc_setup$2x ? _sfc_setup$2x(props, ctx) : void 0;
};
const SvgBg1 = /* @__PURE__ */ _export_sfc(_sfc_main$2x, [["ssrRender", _sfc_ssrRender$U]]);
const SectionPlusesPicture1_vue_vue_type_style_index_0_scoped_acd84cf1_lang = "";
const _sfc_main$2w = {
  __name: "SectionPlusesPicture1",
  __ssrInlineRender: true,
  props: {
    text: {
      default: "Сертифицированные косметологи и врачи со стажем от 10 лет"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-pluses" }, _attrs))} data-v-acd84cf1>`);
      _push(ssrRenderComponent(SectionPlusesShadow, { class: "card-shadow" }, null, _parent));
      _push(`<div class="wrapper" data-v-acd84cf1>`);
      _push(ssrRenderComponent(SvgBg1, null, null, _parent));
      _push(ssrRenderComponent(PicturePluses1, { class: "picture" }, null, _parent));
      _push(`<div class="text-wrapper" data-v-acd84cf1>`);
      _push(ssrRenderComponent(PlusesText, {
        text: props.text
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2w = _sfc_main$2w.setup;
_sfc_main$2w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/SectionPlusesPicture1.vue");
  return _sfc_setup$2w ? _sfc_setup$2w(props, ctx) : void 0;
};
const SectionPlusesPicture1 = /* @__PURE__ */ _export_sfc(_sfc_main$2w, [["__scopeId", "data-v-acd84cf1"]]);
const _sfc_main$2v = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "544",
    height: "362",
    viewBox: "0 0 544 362",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M226.569 231.443C226.439 231.443 226.351 231.399 226.264 231.312C220.25 224.691 210.445 211.274 212.58 195.591C214.411 182.305 220.991 176.25 226.787 170.935C231.843 166.318 236.2 162.31 236.375 154.556C236.68 142.969 227.528 133.69 215.936 121.972C205.303 111.212 193.275 99.0581 184.123 81.1977C183.644 80.2393 182.903 79.1067 182.075 77.7127C179.373 73.313 175.32 66.6916 173.49 58.4583C171.267 48.5698 172.749 38.6376 177.891 28.9233C179.591 25.6997 195.192 -2.35417 221.732 0.172425C241.604 2.04559 252.456 18.5991 254.46 21.8663C254.591 22.0841 254.504 22.3455 254.329 22.4762C254.112 22.6068 253.85 22.5197 253.719 22.3455C251.802 19.1219 241.125 2.91683 221.688 1.04366C195.715 -1.39581 180.375 26.1789 178.719 29.3589C167.083 51.4449 177.368 68.2598 182.903 77.3207C183.731 78.6711 184.472 79.8908 184.951 80.8492C194.059 98.5789 206.043 110.733 216.633 121.405C228.356 133.254 237.595 142.62 237.29 154.6C237.072 162.702 232.409 167.058 227.397 171.632C221.688 176.86 215.239 182.828 213.452 195.766C211.36 211.1 220.991 224.299 226.918 230.79C227.092 230.964 227.049 231.225 226.874 231.399C226.787 231.399 226.657 231.443 226.569 231.443Z" fill="black"></path><path d="M204.736 100.414H91.4297V231.013H204.736V100.414Z" fill="white"></path><path d="M204.735 231.447H91.428C91.1665 231.447 90.9922 231.272 90.9922 231.011V100.412C90.9922 100.151 91.1665 99.9766 91.428 99.9766H204.735C204.996 99.9766 205.17 100.151 205.17 100.412V231.011C205.17 231.229 204.952 231.447 204.735 231.447ZM91.8638 230.575H204.299V100.848H91.8638V230.575Z" fill="black"></path><path d="M218.633 135.563H114.391C106.634 135.563 99.6176 131.119 96.3055 124.149L59.6552 47.1317C55.5587 38.8549 61.6163 29.1406 70.8551 29.1406L247.962 123.452L245.26 125.761C237.808 132.034 228.395 135.563 218.633 135.563Z" fill="#BAC3D8"></path><path d="M218.635 136H114.393C106.549 136 99.2712 131.426 95.9156 124.326L59.2652 47.308C57.3041 43.3003 57.522 38.5956 59.8753 34.8057C62.2722 30.9723 66.3687 28.707 70.8574 28.707C70.9445 28.707 70.9881 28.707 71.0753 28.7506L248.182 123.062C248.313 123.149 248.4 123.237 248.4 123.411C248.4 123.541 248.356 123.716 248.269 123.803L245.567 126.112C238.028 132.472 228.484 136 218.635 136ZM70.7266 29.5347C66.5866 29.5783 62.7952 31.6692 60.5726 35.2413C58.3501 38.8134 58.1322 43.1696 60.0061 46.9159L96.6564 123.977C99.8813 130.773 106.854 135.129 114.35 135.129H218.635C228.266 135.129 237.636 131.688 244.914 125.415L247.093 123.541L70.7266 29.5347Z" fill="black"></path><path d="M247.925 123.413H115.879L69.3359 29.1016H201.382L247.925 123.413Z" fill="white"></path><path d="M247.922 123.847H115.876C115.702 123.847 115.571 123.76 115.484 123.586L68.9409 29.3175C68.8538 29.1868 68.8974 29.0126 68.9409 28.8819C69.0281 28.7512 69.1588 28.6641 69.2896 28.6641H201.335C201.51 28.6641 201.64 28.7512 201.728 28.9254L248.227 123.237C248.314 123.368 248.27 123.542 248.227 123.673C248.183 123.76 248.053 123.847 247.922 123.847ZM116.138 122.976H247.224L201.117 29.5353H70.074L116.138 122.976Z" fill="black"></path><path d="M217.895 107.556H130.214L99.3594 44.957H187.041L217.895 107.556Z" fill="black"></path><path d="M300.787 362C300.613 362 300.482 361.913 300.395 361.782L255.116 274.397C255.029 274.222 255.072 274.005 255.203 273.874C255.334 273.743 255.595 273.743 255.726 273.83L381.583 361.172C381.801 361.303 381.845 361.564 381.714 361.782C381.583 362 381.322 362.043 381.104 361.913L256.685 275.573L301.179 361.39C301.31 361.608 301.223 361.869 301.005 361.956C300.918 362 300.831 362 300.787 362Z" fill="black"></path><path d="M241.429 231.793C241.429 231.793 143.854 153.599 77.657 150.245C24.9259 147.544 0.390625 161.353 0.390625 161.353L0.434204 361.564C0.434204 361.564 103.151 361.433 123.938 361.433C172.486 361.433 238.596 337.561 255.505 274.179C237.594 233.84 241.429 231.793 241.429 231.793Z" fill="#D8C4B0"></path><path d="M0.435795 252.005C0.217897 252.005 0 251.831 0 251.613C0 251.352 0.174318 251.178 0.392215 251.134C47.153 247.78 82.1473 243.946 104.373 239.765C104.591 239.721 104.852 239.895 104.896 240.113C104.939 240.331 104.765 240.592 104.547 240.636C82.278 244.774 47.2837 248.608 0.435795 252.005Z" fill="black"></path><path d="M49.7706 247.825C49.5527 247.825 49.3784 247.651 49.3348 247.433C49.2912 247.215 49.4655 246.998 49.727 246.954C78.7074 243.774 108.123 223.823 108.429 223.605C108.646 223.474 108.908 223.518 109.039 223.735C109.169 223.953 109.126 224.215 108.908 224.345C108.603 224.563 79.0124 244.645 49.8142 247.825C49.8142 247.825 49.8142 247.825 49.7706 247.825Z" fill="black"></path><path d="M354.344 152.465C324.449 147.499 243.522 171.894 241.473 196.55C239.904 215.02 260.561 219.376 259.428 225.431C258.033 232.924 224.564 223.645 219.335 234.1C212.319 248.084 246.223 292.299 246.223 292.299C246.223 292.299 368.638 276.573 392.738 246.341C418.319 214.192 403.937 160.698 354.344 152.465Z" fill="white"></path><path d="M246.224 292.736C246.006 292.736 245.832 292.562 245.788 292.344C245.744 292.126 245.919 291.908 246.18 291.865C246.485 291.821 277.165 287.857 310.373 280.234C354.257 270.171 382.628 258.366 392.389 246.038C404.984 230.225 408.209 208.487 400.844 189.32C393.348 169.848 376.396 156.561 354.257 152.902C343.014 151.029 324.013 153.251 303.4 158.87C282.003 164.707 263.438 172.941 252.543 181.392C245.875 186.575 242.258 191.672 241.866 196.551C240.907 207.921 248.577 213.845 254.155 218.158C257.598 220.815 260.3 222.95 259.864 225.433C259.167 229.223 251.715 229.135 243.086 229.048C241.212 229.005 239.295 229.005 237.377 229.005C237.159 229.005 236.941 228.831 236.941 228.569C236.941 228.308 237.116 228.134 237.377 228.134C239.295 228.134 241.212 228.134 243.086 228.177C250.974 228.264 258.426 228.351 258.993 225.258C259.341 223.255 256.814 221.294 253.632 218.811C247.88 214.368 240.036 208.269 241.038 196.42C241.474 191.324 245.178 186.009 252.063 180.651C263.046 172.113 281.697 163.836 303.226 157.955C323.926 152.292 343.057 150.07 354.432 151.944C376.831 155.646 394.089 169.151 401.672 188.884C409.167 208.356 405.855 230.399 393.087 246.473C383.02 259.106 355.26 270.694 310.547 280.974C277.296 288.598 246.616 292.562 246.311 292.605C246.267 292.736 246.267 292.736 246.224 292.736Z" fill="black"></path><path d="M331.856 252.44C331.289 252.44 330.679 252.44 330.069 252.397C322.835 252.179 318.564 250.436 317.3 247.256C315.078 241.55 323.358 233.491 323.706 233.142C323.881 232.968 324.142 232.968 324.317 233.142C324.491 233.317 324.491 233.578 324.317 233.752C324.229 233.839 316.124 241.768 318.128 246.908C319.218 249.74 323.271 251.308 330.113 251.526C330.723 251.526 331.289 251.569 331.856 251.569C353.951 251.569 355.476 238.501 355.476 238.326C355.519 238.108 355.694 237.891 355.955 237.934C356.173 237.978 356.391 238.152 356.347 238.413C356.347 238.544 355.955 242.203 352.512 245.732C349.505 248.825 343.491 252.44 331.856 252.44Z" fill="black"></path><path d="M339.395 244.597C332.684 244.597 327.89 240.546 327.803 240.503C327.629 240.328 327.585 240.067 327.759 239.893C327.934 239.719 328.195 239.675 328.37 239.849C328.457 239.936 336.345 246.514 345.845 242.332C346.063 242.245 346.324 242.332 346.411 242.55C346.499 242.768 346.411 243.029 346.194 243.116C343.84 244.162 341.531 244.597 339.395 244.597Z" fill="black"></path><path d="M339 260.827C339 260.827 300.58 244.667 285.305 256.078C270.029 267.488 291.454 272.237 267.979 276.986C244.504 281.735 254.886 306.715 267.979 307.887C285.305 309.428 285.305 294.749 285.305 294.749L339 260.827Z" fill="black"></path><path d="M305.188 282.89C305.147 282.982 305.148 282.982 305.148 282.982L305.151 282.983L305.161 282.987L305.2 283.004C305.234 283.019 305.286 283.042 305.354 283.071C305.491 283.129 305.693 283.215 305.959 283.325C306.49 283.546 307.272 283.865 308.278 284.259C310.289 285.046 313.194 286.131 316.768 287.324C323.917 289.71 333.747 292.525 344.469 294.244C365.892 297.679 390.921 296.744 405.213 279.192C405.229 279.19 405.251 279.186 405.277 279.181C405.344 279.169 405.443 279.151 405.572 279.125C405.83 279.074 406.209 278.995 406.689 278.883C407.65 278.657 409.022 278.296 410.664 277.754C413.949 276.671 418.319 274.863 422.662 271.968C431.348 266.179 439.921 256.037 439.469 238.648L439.472 238.642C439.478 238.625 439.488 238.6 439.5 238.567C439.525 238.502 439.561 238.404 439.608 238.275C439.7 238.019 439.832 237.641 439.992 237.153C440.31 236.178 440.735 234.765 441.163 233.011C442.021 229.506 442.892 224.639 442.95 219.198C443.064 208.324 439.925 195.144 426.909 185.95L426.908 185.947C426.903 185.918 426.894 185.876 426.883 185.82C426.861 185.708 426.827 185.542 426.78 185.328C426.687 184.899 426.541 184.274 426.334 183.488C425.92 181.915 425.259 179.697 424.272 177.113C422.297 171.947 419.015 165.316 413.786 159.467C408.556 153.616 401.377 148.547 391.612 146.508C381.849 144.47 369.509 145.463 353.959 151.719L353.988 151.912L353.99 151.896C353.988 151.912 353.988 151.912 353.989 151.912L353.989 151.912L353.993 151.912L354.009 151.913C354.022 151.915 354.043 151.917 354.07 151.919C354.124 151.925 354.205 151.934 354.31 151.947C354.519 151.973 354.825 152.017 355.209 152.085C355.976 152.221 357.056 152.456 358.303 152.853C360.798 153.646 363.957 155.081 366.625 157.651C369.292 160.219 371.472 163.923 372.006 169.262C372.541 174.605 371.43 181.59 367.501 190.717L367.501 190.717C358.442 211.79 342.846 234.815 329.512 252.576C322.846 261.456 316.745 269.018 312.312 274.36C310.095 277.031 308.295 279.147 307.05 280.595C306.427 281.32 305.942 281.877 305.614 282.253C305.45 282.441 305.324 282.584 305.24 282.679L305.145 282.787L305.121 282.815L305.115 282.821L305.113 282.823C305.113 282.824 305.113 282.824 305.188 282.89ZM305.188 282.89L305.147 282.982L305.022 282.927L305.113 282.824L305.188 282.89ZM354.196 151.732C354.154 151.727 354.119 151.723 354.09 151.721C354.062 151.718 354.041 151.716 354.027 151.714L354.01 151.713L354.006 151.712L354.005 151.712C354.005 151.712 354.005 151.712 353.996 151.812L354.034 151.905C354.092 151.881 354.151 151.858 354.21 151.834C356.833 152.139 382.534 156.046 367.593 190.756C349.882 231.953 307.213 280.593 305.257 282.811L354.196 151.732Z" fill="white" stroke="black" stroke-width="0.2"></path><path d="M304.765 282.519L304.76 282.525L304.755 282.531C304.661 282.672 304.599 282.836 304.657 283.01C304.704 283.152 304.805 283.316 304.976 283.376C305.428 283.584 323.322 291.291 344.393 294.665C351.021 295.754 357.259 296.278 363.104 296.278C368.296 296.278 373.139 295.842 377.547 295.056L377.548 295.056C389.45 292.834 398.791 287.649 405.388 279.628C406.763 279.343 414.898 277.625 422.863 272.346L422.864 272.345C430.856 267.019 440.291 256.846 439.861 238.737C440.243 237.729 443.26 229.394 443.347 219.205C443.434 209.219 440.732 195.299 427.256 185.689C426.994 184.456 425.598 178.231 421.971 171.017C418.306 163.727 412.356 155.42 402.984 150.245C389.962 143.037 373.367 143.438 353.741 151.328L353.741 151.328L353.734 151.332C353.533 151.432 353.364 151.645 353.419 151.92L353.419 151.92L353.42 151.925C353.469 152.122 353.626 152.349 353.909 152.349C353.909 152.349 353.91 152.349 353.913 152.349C353.925 152.35 353.963 152.354 354.029 152.361C354.108 152.37 354.223 152.384 354.37 152.405C354.663 152.447 355.084 152.516 355.603 152.624C356.639 152.84 358.065 153.213 359.641 153.839C362.794 155.092 366.542 157.357 368.989 161.405L368.989 161.405C373.103 168.202 372.465 178.007 367.065 190.544L367.065 190.544C358.136 211.334 342.672 234.207 329.381 251.946C316.091 269.684 304.98 282.282 304.765 282.519ZM404.783 278.769L404.782 278.769L404.776 278.777C397.496 287.726 387.313 292.216 376.515 294.081C365.717 295.946 354.311 295.185 344.599 293.639C325.81 290.631 309.566 284.143 306.095 282.721C310.972 277.078 351.141 230.372 368.121 190.972L368.121 190.971C373.616 178.111 374.285 167.965 369.988 160.823L369.988 160.822C366.178 154.517 359.347 152.304 356.011 151.609C374.55 144.548 390.182 144.38 402.539 151.204C412.123 156.505 418.06 165.164 421.607 172.538C425.113 179.827 426.28 185.851 426.326 186.107C426.329 186.178 426.364 186.24 426.4 186.287C426.437 186.337 426.485 186.384 426.526 186.426L426.529 186.429L426.535 186.435L426.542 186.44C439.796 195.779 442.45 209.375 442.363 219.159C442.319 224.486 441.471 229.281 440.628 232.755C440.206 234.492 439.786 235.899 439.469 236.876C439.31 237.365 439.177 237.746 439.083 238.008C439.035 238.138 438.998 238.239 438.971 238.309C438.961 238.334 438.954 238.355 438.947 238.371C438.941 238.386 438.937 238.397 438.934 238.404C438.901 238.445 438.889 238.494 438.883 238.529C438.876 238.57 438.876 238.609 438.876 238.631L438.876 238.632L438.876 238.635C439.311 256.278 430.141 266.181 422.36 271.395L422.36 271.395C418.121 274.242 413.826 276.035 410.58 277.117C408.957 277.658 407.597 278.02 406.637 278.248C406.157 278.362 405.778 278.441 405.516 278.493C405.385 278.519 405.283 278.537 405.213 278.549C405.178 278.555 405.151 278.56 405.133 278.563L405.112 278.566C405.112 278.566 405.111 278.566 405.11 278.566H405.091L405.07 278.576L405.067 278.578C404.981 278.621 404.881 278.671 404.783 278.769Z" fill="black" stroke="black" stroke-width="0.2"></path><path d="M367.507 190.859C367.502 190.859 367.498 190.859 367.494 190.858L367.494 190.857C367.498 190.857 367.502 190.858 367.507 190.859ZM368.193 191.013C368.887 191.171 370.03 191.445 371.521 191.857L371.259 192.515C370.267 191.989 369.245 191.488 368.193 191.013Z" fill="black" stroke="black"></path><path d="M367.975 158.916L367.975 158.916L367.969 158.921C367.772 159.068 367.648 159.335 367.765 159.568C367.865 159.768 368.076 159.936 368.35 159.883C382.585 158.125 397.027 164.665 407.959 171.696C418.721 178.618 426.063 186.004 426.43 186.373C426.435 186.378 426.439 186.382 426.442 186.385C426.491 186.434 426.545 186.475 426.608 186.503C426.672 186.532 426.74 186.545 426.818 186.545C426.978 186.545 427.086 186.488 427.222 186.397L427.23 186.392L427.237 186.385C427.45 186.171 427.45 185.847 427.237 185.633L427.235 185.631L427.23 185.626L427.212 185.608L427.143 185.539C427.083 185.478 426.995 185.391 426.88 185.277C426.651 185.05 426.313 184.721 425.875 184.305C424.998 183.473 423.719 182.294 422.1 180.896C418.862 178.101 414.26 174.428 408.786 170.896C399.321 164.789 385.342 157.908 371.125 158.607C375.634 156.758 386.285 153.859 403.045 157.661L403.047 157.661C403.188 157.689 403.334 157.646 403.449 157.57C403.564 157.494 403.66 157.375 403.688 157.234C403.716 157.093 403.673 156.947 403.597 156.832C403.52 156.718 403.402 156.622 403.262 156.594C379.908 151.324 368.507 158.578 367.977 158.915L367.975 158.916Z" fill="black" stroke="black" stroke-width="0.2"></path><path d="M431.252 228.742V228.742C431.252 229.008 431.465 229.278 431.788 229.278C431.929 229.278 432.061 229.208 432.156 229.12C432.249 229.033 432.324 228.911 432.324 228.786C432.367 213.213 427.654 200.813 418.303 191.99C409.764 183.913 398.75 180.226 389.845 178.558C385.391 177.724 381.463 177.394 378.631 177.273C377.216 177.212 376.074 177.204 375.278 177.21C374.879 177.214 374.568 177.221 374.351 177.227C374.243 177.23 374.159 177.233 374.1 177.235L374.03 177.238L374.01 177.239L374.004 177.239C374.002 177.239 374.001 177.239 374.002 177.239H373.992L373.982 177.241C373.722 177.293 373.509 177.504 373.509 177.818V177.828L373.511 177.838C373.563 178.098 373.775 178.31 374.089 178.31H374.097L374.105 178.309C374.105 178.309 374.105 178.309 374.106 178.309C374.109 178.308 374.115 178.308 374.128 178.307C374.144 178.306 374.166 178.304 374.195 178.303C374.253 178.299 374.335 178.295 374.441 178.291C374.654 178.283 374.96 178.274 375.351 178.269C376.134 178.259 377.258 178.264 378.651 178.322C381.438 178.437 385.303 178.759 389.683 179.577C398.444 181.214 409.252 184.836 417.599 192.745L417.599 192.745C426.683 201.348 431.296 213.429 431.252 228.742Z" fill="black" stroke="black" stroke-width="0.2"></path><path d="M370.329 200.295C370.329 200.295 370.329 200.295 370.329 200.295L370.329 200.295ZM370.222 200.345C370.219 200.341 370.216 200.338 370.216 200.337L370.217 200.336C370.218 200.339 370.22 200.342 370.222 200.345Z" fill="black" stroke="black"></path><path d="M411.478 88.9101C411.347 88.9101 411.26 88.8665 411.173 88.7794L358.267 37.6812C358.18 37.5941 358.137 37.4634 358.137 37.3327C358.137 37.202 358.224 37.0714 358.311 37.0278C366.548 31.3212 390.473 19.3416 431.437 0.43573C431.655 0.348606 431.917 0.43573 432.004 0.65354C432.091 0.87135 432.004 1.13272 431.786 1.21985C391.606 19.7772 367.855 31.6697 359.27 37.4634L411.565 87.9517C426.905 78.978 537.728 45.958 542.478 44.564C542.696 44.4769 542.957 44.6076 543.001 44.8689C543.088 45.0868 542.957 45.3481 542.696 45.3917C541.519 45.7402 425.772 80.1977 411.696 88.8665C411.652 88.8665 411.565 88.9101 411.478 88.9101Z" fill="black"></path><path d="M399.799 8.58203L380.189 19.2112C380.189 19.2112 328.285 35.634 316.214 44.4335C293.727 60.8128 261.522 115.44 260.432 126.286C259.343 137.133 273.942 136.611 294.076 104.985C294.076 104.985 310.679 115.004 335.258 117.661C343.713 118.576 413.745 89.9558 413.745 89.9558L438.498 83.2037L399.799 8.58203Z" fill="white"></path><path d="M264.92 133.126C264.266 133.126 263.656 133.039 263.09 132.821C260.78 132.037 259.647 129.641 259.996 126.243C260.519 120.798 268.973 104.462 280.086 87.4297C293.116 67.3912 306.19 51.6218 315.952 44.0856C324.232 37.682 377.312 19.6909 380.013 18.7761C380.711 18.4276 393.349 11.8497 399.581 8.19051C399.668 8.14695 399.799 8.10339 399.929 8.14695C400.06 8.19051 400.147 8.27764 400.191 8.36476L438.889 82.9864C438.933 83.1171 438.933 83.2478 438.889 83.3785C438.846 83.5092 438.715 83.5963 438.584 83.6398L413.831 90.392C410.781 91.6553 347.852 117.313 338.09 117.313C337.916 117.313 337.785 117.313 337.654 117.313C315.124 114.874 296.951 106.815 294.249 105.552C281.829 124.937 271.021 133.126 264.92 133.126ZM399.624 9.19244C393.087 12.9823 380.493 19.5166 380.362 19.5602C380.362 19.5602 380.319 19.5602 380.319 19.6037C379.752 19.778 324.668 38.4661 316.475 44.7826C294.772 61.5104 261.957 115.44 260.867 126.331C260.562 129.293 261.477 131.297 263.395 131.994C266.01 132.908 270.237 131.253 274.987 127.42C280.827 122.715 287.32 114.874 293.77 104.767C293.9 104.593 294.118 104.506 294.336 104.593C294.511 104.68 313.642 113.828 337.829 116.442C345.76 117.313 412.96 89.8692 413.613 89.6078H413.657L437.931 82.9864L399.624 9.19244Z" fill="black"></path><path d="M290.936 99.582L289.847 105.768C283.702 123.628 295.469 129.988 303.226 127.157C310.155 124.63 316.169 115.264 316.169 115.264C312.77 128.115 322.575 130.293 328.458 129.03C332.511 128.159 336.564 124.804 336.564 124.804C336.825 135.085 351.032 139.006 362.624 120.797C362.624 120.797 368.987 110.647 364.542 104.417L290.936 99.582Z" fill="white"></path><path d="M345.279 133.822C344.32 133.822 343.405 133.691 342.577 133.474C338.96 132.472 336.519 129.466 336.127 125.589C334.82 126.591 331.682 128.725 328.501 129.422C325.189 130.119 320.308 129.858 317.388 126.765C315.296 124.543 314.555 121.363 315.253 117.269C313.117 120.144 308.541 125.676 303.355 127.549C299.303 129.03 294.465 127.985 291.415 124.979C289.018 122.583 285.531 116.92 289.41 105.681L290.499 99.5388C290.543 99.321 290.761 99.1468 291.022 99.1903C291.24 99.2339 291.415 99.4517 291.371 99.7131L290.282 105.899C290.282 105.942 290.282 105.942 290.282 105.986C286.534 116.833 289.802 122.191 292.068 124.413C294.901 127.201 299.346 128.159 303.094 126.809C309.805 124.369 315.776 115.178 315.819 115.09C315.95 114.916 316.168 114.829 316.342 114.916C316.56 115.003 316.647 115.221 316.604 115.439C315.34 120.274 315.819 123.89 318.042 126.242C320.744 129.074 325.276 129.292 328.37 128.638C332.292 127.811 336.214 124.5 336.258 124.5C336.389 124.413 336.563 124.369 336.737 124.456C336.868 124.543 336.999 124.674 336.999 124.848C337.086 128.769 339.352 131.818 342.838 132.777C347.632 134.083 355.259 131.6 362.231 120.623C362.275 120.536 368.376 110.647 364.149 104.723C364.018 104.548 364.062 104.244 364.236 104.113C364.454 103.982 364.715 104.026 364.846 104.2C369.422 110.604 363.234 120.666 362.972 121.058C356.915 130.511 350.29 133.822 345.279 133.822Z" fill="black"></path><path d="M265.803 22.4704L247.531 29.4688L249.714 35.1637L267.986 28.1654L265.803 22.4704Z" fill="white"></path><path d="M249.709 35.5907C249.535 35.5907 249.361 35.5036 249.317 35.3293L247.138 29.6227C247.095 29.5356 247.095 29.4049 247.138 29.2742C247.182 29.1871 247.269 29.1 247.4 29.0564L265.659 22.0429C265.877 21.9558 266.139 22.0865 266.226 22.3043L268.405 28.0109C268.449 28.098 268.449 28.2287 268.405 28.3594C268.361 28.4465 268.274 28.5336 268.143 28.5772L249.884 35.5907C249.84 35.5471 249.797 35.5907 249.709 35.5907ZM248.097 29.6663L249.971 34.5452L267.446 27.8802L265.572 23.0013L248.097 29.6663Z" fill="black"></path><path d="M282.61 130.642L306.98 121.293L271.239 28.2006L246.868 37.5499L282.61 130.642Z" fill="white"></path><path d="M282.612 131.08C282.568 131.08 282.481 131.08 282.437 131.037C282.35 130.993 282.263 130.906 282.219 130.775L246.484 37.64C246.397 37.4222 246.528 37.1608 246.746 37.0737L271.107 27.7514C271.194 27.7079 271.325 27.7079 271.455 27.7514C271.543 27.795 271.63 27.8821 271.673 28.0128L307.408 121.148C307.496 121.366 307.365 121.627 307.147 121.715L282.786 131.037C282.742 131.037 282.699 131.08 282.612 131.08ZM247.487 37.7707L282.917 130.078L306.45 121.061L271.02 28.7098L247.487 37.7707Z" fill="black"></path><path d="M314.468 144.845L309.239 121.932L305.927 113.176L277.992 123.848L281.435 132.604L292.94 153.296L314.468 144.845Z" fill="white"></path><path d="M292.94 153.732C292.765 153.732 292.635 153.644 292.547 153.514L281.042 132.822C281.042 132.822 281.042 132.778 280.999 132.778L277.556 124.022C277.513 123.935 277.513 123.804 277.556 123.674C277.6 123.587 277.687 123.5 277.818 123.456L305.752 112.74C305.839 112.696 305.97 112.696 306.101 112.74C306.188 112.783 306.275 112.87 306.319 113.001L309.631 121.801V121.844L314.817 144.758C314.86 144.976 314.729 145.237 314.468 145.281C314.25 145.324 313.989 145.193 313.945 144.932L308.759 122.062L305.621 113.698L278.471 124.109L281.74 132.43L293.245 153.122C293.375 153.339 293.288 153.601 293.07 153.732C293.07 153.732 293.027 153.732 292.94 153.732Z" fill="black"></path><path d="M314.079 145.238L293.422 153.167L300.874 165.93L314.776 202.653C314.863 202.914 315.124 203.001 315.386 202.914L316.737 202.348C317.042 202.217 317.216 201.869 317.086 201.564C318.306 199.429 319.482 197.905 321.836 197.033C323.797 196.293 326.237 196.424 328.852 197.077C328.896 197.121 328.939 197.251 328.983 197.382C329.026 197.513 329.201 197.6 329.375 197.556L331.205 196.903C331.38 196.859 331.467 196.641 331.38 196.467L317.173 159.701L314.079 145.238Z" fill="white"></path><path d="M315.169 203.349C315.038 203.349 314.907 203.306 314.82 203.262C314.602 203.175 314.428 203.001 314.341 202.739L300.439 166.06L293.03 153.34C292.987 153.21 292.943 153.079 292.987 152.992C293.03 152.861 293.118 152.774 293.248 152.73L313.905 144.802H313.949C314.079 144.758 314.21 144.758 314.297 144.846C314.428 144.889 314.471 145.02 314.515 145.151L317.522 159.57L331.729 196.292C331.816 196.467 331.816 196.684 331.729 196.902C331.642 197.076 331.467 197.251 331.293 197.294L329.463 197.948C329.114 198.078 328.678 197.904 328.548 197.556C328.548 197.512 328.504 197.468 328.504 197.468C325.889 196.815 323.667 196.815 321.967 197.468C319.875 198.253 318.742 199.603 317.566 201.65C317.609 201.825 317.566 202.042 317.478 202.217C317.348 202.478 317.173 202.696 316.912 202.783L315.561 203.349C315.43 203.349 315.299 203.349 315.169 203.349ZM294.033 153.34L301.223 165.668C301.223 165.668 301.267 165.712 301.267 165.755L315.169 202.478L315.387 202.914L315.212 202.522L316.563 201.955C316.607 201.912 316.65 201.868 316.65 201.868C316.65 201.825 316.694 201.781 316.65 201.738C316.607 201.607 316.607 201.476 316.694 201.346C318.001 199.037 319.265 197.512 321.662 196.597C323.58 195.857 326.02 195.9 328.94 196.641C329.071 196.684 329.158 196.771 329.245 196.902C329.245 196.946 329.288 197.033 329.332 197.12L330.901 196.554L316.738 159.874C316.738 159.831 316.738 159.831 316.738 159.787L313.818 145.848L294.033 153.34Z" fill="black"></path><path d="M280.828 132.691L309.852 121.713L306.322 112.391L277.211 123.542L280.828 132.691Z" fill="white"></path><path d="M280.827 133.126C280.653 133.126 280.479 133.039 280.435 132.864L276.818 123.673C276.774 123.586 276.774 123.455 276.818 123.324C276.861 123.237 276.949 123.15 277.079 123.106L306.19 111.955C306.278 111.911 306.408 111.911 306.539 111.955C306.626 111.998 306.713 112.085 306.757 112.216L310.243 121.538C310.33 121.756 310.2 122.017 309.982 122.104L281.001 133.082C280.958 133.126 280.871 133.126 280.827 133.126ZM277.777 123.803L281.045 132.167L309.241 121.495L306.06 113L277.777 123.803Z" fill="black"></path><path d="M321.439 195.115C317.604 196.422 316.297 199.558 316.297 199.558L306.186 173.247C304.922 169.98 306.579 166.321 309.847 165.057C313.115 163.794 316.776 165.449 318.04 168.716L328.194 195.159C328.194 195.115 324.577 194.07 321.439 195.115Z" fill="white"></path><path d="M316.298 199.994C316.124 199.994 315.95 199.863 315.906 199.732L305.796 173.377C305.142 171.678 305.185 169.849 305.926 168.194C306.667 166.538 308.018 165.275 309.674 164.621C313.16 163.271 317.083 165.013 318.434 168.498L328.588 194.941C328.631 195.115 328.631 195.289 328.5 195.376C328.37 195.507 328.239 195.55 328.065 195.507C328.021 195.507 324.535 194.505 321.571 195.507C317.954 196.727 316.69 199.645 316.69 199.689C316.647 199.863 316.473 199.994 316.298 199.994ZM312.115 165.057C311.417 165.057 310.72 165.188 310.023 165.449C308.541 166.015 307.364 167.104 306.754 168.542C306.101 169.98 306.057 171.591 306.624 173.072L316.385 198.513C317.083 197.424 318.564 195.638 321.31 194.723C323.663 193.939 326.234 194.244 327.498 194.505L317.649 168.847C316.734 166.495 314.468 165.057 312.115 165.057Z" fill="black"></path><path d="M271.787 26.7319L245.539 36.7852L258.2 69.8158L284.448 59.7626L271.787 26.7319Z" fill="white"></path><path d="M258.208 70.2229C258.034 70.2229 257.859 70.1358 257.816 69.9615L245.134 36.9416C245.091 36.8544 245.091 36.7238 245.134 36.5931C245.178 36.5059 245.265 36.4188 245.396 36.3753L271.631 26.3124C271.848 26.2253 272.11 26.356 272.197 26.5738L284.879 59.5938C284.922 59.6809 284.922 59.8116 284.879 59.9423C284.835 60.0294 284.748 60.1165 284.617 60.1601L258.382 70.2229C258.295 70.2229 258.252 70.2229 258.208 70.2229ZM246.049 37.0287L258.426 69.2645L283.833 59.5067L271.456 27.2708L246.049 37.0287Z" fill="black"></path><path d="M277.906 41.5147L250.887 51.8825L245.483 37.8555C244.96 36.5051 245.657 34.9369 247.008 34.4141L269.103 25.9631C270.454 25.4404 272.023 26.1374 272.546 27.4878L277.906 41.5147Z" fill="#BAC3D8"></path><path d="M284.485 79.805C283.918 83.29 286.228 85.076 288.973 87.0799C291.675 89.0402 298.212 89.8243 301.35 88.6481C304.488 87.5155 304.531 87.864 307.669 86.6878C315.731 83.6385 328.979 81.8524 334.732 88.3867L334.775 46.2188C327.367 51.5333 318.956 56.3687 311.765 60.2893C303.442 64.8197 295.99 68.2611 290.324 71.6589C287.361 73.445 285.051 76.3201 284.485 79.805Z" fill="white"></path><path d="M298.169 89.5649C294.596 89.5649 289.758 88.3888 287.536 86.7334C284.529 84.5553 283.309 80.6783 284.573 77.3676C285.836 74.0569 288.974 72.053 293.637 69.3957C298.518 66.6078 302.919 64.3861 307.147 62.208C315.688 57.8518 323.794 53.757 334.515 45.9158C334.689 45.7851 334.994 45.8287 335.125 46.003C335.255 46.1772 335.212 46.4821 335.038 46.6128C324.273 54.4975 316.124 58.6359 307.539 62.9921C303.268 65.1702 298.91 67.3919 294.029 70.1363C289.541 72.7064 286.49 74.6232 285.313 77.6725C284.18 80.6347 285.27 84.0761 287.972 86.0364C290.586 87.9531 297.167 89.2164 300.348 88.4759C303.312 87.7789 304.401 87.4739 307.495 86.3413C314.25 83.8147 328.675 80.9397 335.038 88.1709C335.212 88.3452 335.168 88.6066 334.994 88.7808C334.82 88.9551 334.558 88.9115 334.384 88.7372C328.326 81.8545 314.337 84.686 307.8 87.1255C304.706 88.3016 303.573 88.563 300.566 89.3036C299.912 89.4778 299.084 89.5649 298.169 89.5649Z" fill="black"></path><path d="M361.272 123.152C361.185 123.152 361.098 123.109 361.011 123.065C360.793 122.935 360.749 122.673 360.88 122.455C365.674 115.573 366.981 108.211 364.149 104.552C361.403 101.023 356.696 101.459 353.515 102.853C351.249 103.855 349.244 105.118 345.322 111.478C345.191 111.696 344.93 111.739 344.712 111.609C344.494 111.478 344.451 111.216 344.581 110.999C348.634 104.421 350.77 103.07 353.167 102.025C356.653 100.5 361.795 100.065 364.846 103.985C368.419 108.603 365.674 117.01 361.577 122.891C361.534 123.109 361.403 123.152 361.272 123.152Z" fill="black"></path><path d="M336.087 125.504C336 125.504 335.913 125.46 335.826 125.417C335.651 125.286 335.608 124.981 335.739 124.807C344.28 113.132 348.202 105.204 347.418 101.24C346.677 97.4934 343.844 95.1846 339.443 94.7925C335.913 94.444 332.601 96.7093 329.768 98.9745C323.667 103.897 321.88 106.772 317.566 113.698L317.174 114.352C317.043 114.57 316.782 114.613 316.564 114.483C316.346 114.352 316.302 114.09 316.433 113.873L316.825 113.219C321.052 106.38 323.013 103.287 329.245 98.2775C332.209 95.9251 335.739 93.5292 339.53 93.9213C344.367 94.4005 347.461 96.9271 348.29 101.065C349.118 105.335 345.239 113.263 336.436 125.329C336.349 125.46 336.218 125.504 336.087 125.504Z" fill="black"></path><path d="M320.046 109.429C319.959 109.429 319.915 109.429 319.828 109.385C319.61 109.254 319.523 108.993 319.654 108.775C321.484 105.508 321.484 102.676 321.136 100.89C320.438 97.1876 317.824 95.1402 313.814 95.0966C312.027 95.0531 310.11 95.5322 308.28 96.4035C308.062 96.4906 307.8 96.4035 307.713 96.1857C307.626 95.9679 307.713 95.7065 307.931 95.6194C309.892 94.661 311.94 94.1818 313.858 94.2254C318.303 94.2689 321.266 96.6648 322.051 100.716C322.399 102.633 322.443 105.682 320.482 109.167C320.351 109.341 320.177 109.429 320.046 109.429Z" fill="black"></path><path d="M323.708 201.868C323.533 201.868 323.359 201.78 323.316 201.606L309.719 165.972C309.632 165.755 309.762 165.493 309.98 165.406C310.198 165.319 310.46 165.45 310.547 165.668L324.1 201.258C324.187 201.476 324.056 201.737 323.838 201.824C323.795 201.868 323.751 201.868 323.708 201.868Z" fill="#BAC3D8"></path><path d="M332.296 209.359C332.209 209.359 332.122 209.316 332.035 209.272L326.369 204.698C326.195 204.567 326.151 204.262 326.326 204.088C326.457 203.914 326.762 203.87 326.936 204.045L332.601 208.619C332.776 208.749 332.819 209.054 332.645 209.228C332.558 209.272 332.427 209.359 332.296 209.359Z" fill="#BAC3D8"></path><path d="M339.271 204.044H339.227L328.158 202.563C327.94 202.519 327.766 202.301 327.766 202.083C327.809 201.866 328.027 201.691 328.245 201.691L339.314 203.129C339.532 203.173 339.706 203.39 339.706 203.608C339.663 203.87 339.489 204.044 339.271 204.044Z" fill="#BAC3D8"></path><path d="M323.358 213.061C323.314 213.061 323.314 213.061 323.358 213.061C323.096 213.061 322.922 212.843 322.922 212.582L323.576 204.784C323.576 204.567 323.793 204.349 324.055 204.392C324.316 204.392 324.491 204.61 324.447 204.871L323.793 212.669C323.75 212.887 323.576 213.061 323.358 213.061Z" fill="#BAC3D8"></path><path d="M314.557 214.326C314.47 214.326 314.383 214.282 314.296 214.239C314.122 214.108 314.078 213.803 314.209 213.629L320.964 204.394C321.094 204.219 321.399 204.176 321.574 204.306C321.748 204.437 321.792 204.742 321.661 204.916L314.906 214.151C314.819 214.239 314.688 214.326 314.557 214.326Z" fill="#BAC3D8"></path><path d="M325.102 201.693C325.102 202.39 324.535 202.956 323.838 202.956C323.141 202.956 322.574 202.39 322.574 201.693C322.574 200.996 323.141 200.43 323.838 200.43C324.535 200.43 325.102 200.996 325.102 201.693Z" fill="#BAC3D8"></path><path d="M534.153 361.997C534.066 361.997 534.022 361.997 533.935 361.953L439.15 307.98C438.976 307.849 438.888 307.632 438.976 307.414L467.477 241.2C467.564 241.025 467.782 240.895 468 240.938L542.695 259.016C542.913 259.06 543.087 259.321 543 259.539C542.956 259.757 542.695 259.931 542.477 259.844L468.13 241.853L439.934 307.37L534.415 361.169C534.633 361.3 534.676 361.561 534.589 361.779C534.458 361.91 534.327 361.997 534.153 361.997Z" fill="black"></path><path d="M383.848 216.63C377.006 213.973 363.017 208.223 355.086 202.996C343.973 195.677 350.772 181.824 387.16 194.24C402.936 199.641 433.834 222.86 455.624 234.099C458.151 235.406 484.038 240.72 487.088 241.461C485.911 244.075 450.002 319.393 449.915 320.047C439.761 312.075 415.792 296.872 415.792 296.872C415.792 296.872 354.912 266.901 351.251 264.374C342.84 258.624 341.184 248.866 366.635 258.014C366.635 258.014 342.23 248.779 338.177 240.328C334.647 232.966 346.675 230.527 364.02 235.536C352.646 231.354 333.209 222.991 332.773 214.147C332.381 207.918 346.98 202.908 383.848 216.63Z" fill="white"></path><path d="M449.957 320.482C449.87 320.482 449.783 320.439 449.695 320.395C439.803 312.598 416.444 297.787 415.616 297.264C412.827 295.913 354.649 267.25 350.988 264.767C346.63 261.804 344.407 258.145 345.54 255.88C346.761 253.528 351.206 253.266 358.309 255.009C350.77 251.524 340.311 245.948 337.74 240.546C336.52 237.976 337.217 236.321 338.045 235.362C340.616 232.313 348.155 231.703 357.612 233.576C346.368 228.959 332.641 221.771 332.249 214.191C332.162 212.623 332.946 211.185 334.471 210.053C336.737 208.397 345.628 204.215 371.601 212.057C365.631 209.399 359.268 206.306 354.823 203.388C350.552 200.556 348.765 196.766 350.291 193.673C352.687 188.751 363.844 185.832 387.246 193.848C396.311 196.941 410.125 205.74 424.724 215.062C435.401 221.902 446.471 228.915 455.753 233.75C457.67 234.752 474.361 238.324 482.424 240.023C484.777 240.546 486.476 240.895 487.174 241.069C487.304 241.112 487.392 241.199 487.479 241.287C487.522 241.417 487.522 241.548 487.479 241.679C487.087 242.506 483.469 250.173 478.414 260.759C468.086 282.496 450.785 318.87 450.349 320.177C450.305 320.308 450.218 320.439 450.088 320.482C450.044 320.482 450 320.482 449.957 320.482ZM350.726 254.704C347.545 254.704 346.586 255.706 346.325 256.228C345.41 258.014 347.632 261.369 351.467 264.026C355.084 266.509 415.398 296.175 416.008 296.48C416.008 296.48 416.052 296.48 416.052 296.523C416.27 296.654 439.498 311.378 449.783 319.35C451.177 316.17 458.498 300.662 477.673 260.367C482.031 251.219 485.561 243.813 486.52 241.766C485.692 241.592 484.21 241.243 482.336 240.851C473.664 238.978 457.496 235.536 455.448 234.491C446.122 229.656 435.053 222.599 424.332 215.759C409.777 206.481 396.005 197.681 387.028 194.632C365.587 187.313 353.559 189.056 351.119 194.022C349.811 196.679 351.467 200.077 355.346 202.604C363.147 207.744 376.656 213.32 384.021 216.195C384.239 216.282 384.37 216.543 384.283 216.761C384.195 216.979 383.934 217.11 383.716 217.023C355.694 206.611 340.18 206.96 335.038 210.75C333.774 211.708 333.12 212.841 333.207 214.104C333.643 222.642 352.818 230.919 364.192 235.101C364.41 235.188 364.541 235.406 364.454 235.667C364.367 235.885 364.149 236.016 363.931 235.928C352.034 232.487 341.705 232.487 338.786 235.885C337.827 236.974 337.783 238.412 338.611 240.154C342.533 248.344 366.589 257.535 366.807 257.622C367.025 257.709 367.156 257.971 367.069 258.189C366.982 258.406 366.72 258.537 366.502 258.45C358.484 255.575 353.646 254.704 350.726 254.704Z" fill="black"></path></svg>`);
}
const _sfc_setup$2v = _sfc_main$2v.setup;
_sfc_main$2v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PicturePluses2.vue");
  return _sfc_setup$2v ? _sfc_setup$2v(props, ctx) : void 0;
};
const PicturePluses2 = /* @__PURE__ */ _export_sfc(_sfc_main$2v, [["ssrRender", _sfc_ssrRender$T]]);
const _sfc_main$2u = {};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    viewBox: "0 0 544 630",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="544" height="630" rx="100" fill="#EDE4DA"></rect></svg>`);
}
const _sfc_setup$2u = _sfc_main$2u.setup;
_sfc_main$2u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/svg/SvgBg2.vue");
  return _sfc_setup$2u ? _sfc_setup$2u(props, ctx) : void 0;
};
const SvgBg2 = /* @__PURE__ */ _export_sfc(_sfc_main$2u, [["ssrRender", _sfc_ssrRender$S]]);
const SectionPlusesPicture2_vue_vue_type_style_index_0_scoped_f3fd9835_lang = "";
const _sfc_main$2t = {
  __name: "SectionPlusesPicture2",
  __ssrInlineRender: true,
  props: {
    moreText: {
      default: ""
    },
    text: {
      default: "Парк лицензированной аппаратной косметологии"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-pluses" }, _attrs))} data-v-f3fd9835>`);
      _push(ssrRenderComponent(SectionPlusesShadow, { class: "card-shadow" }, null, _parent));
      _push(`<div class="wrapper" data-v-f3fd9835>`);
      _push(ssrRenderComponent(SvgBg2, null, null, _parent));
      _push(ssrRenderComponent(PicturePluses2, { class: "picture" }, null, _parent));
      _push(`<div class="text-wrapper" data-v-f3fd9835>`);
      _push(ssrRenderComponent(PlusesText, {
        text: props.text,
        more: props.moreText
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2t = _sfc_main$2t.setup;
_sfc_main$2t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/SectionPlusesPicture2.vue");
  return _sfc_setup$2t ? _sfc_setup$2t(props, ctx) : void 0;
};
const SectionPlusesPicture2 = /* @__PURE__ */ _export_sfc(_sfc_main$2t, [["__scopeId", "data-v-f3fd9835"]]);
const _sfc_main$2s = {};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "540",
    height: "426",
    viewBox: "0 0 540 426",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M128.281 316.642C176.945 316.642 216.395 277.232 216.395 228.619C216.395 180.005 176.945 140.596 128.281 140.596C79.6177 140.596 40.168 180.005 40.168 228.619C40.168 277.232 79.6177 316.642 128.281 316.642Z" fill="#D8C4B0"></path><path d="M128.279 317.237C79.3673 317.237 39.5703 277.514 39.5703 228.618C39.5703 179.783 79.3673 140 128.279 140C177.192 140 216.989 179.723 216.989 228.618C216.989 277.454 177.192 317.237 128.279 317.237ZM128.279 141.191C80.0226 141.191 40.7618 180.438 40.7618 228.618C40.7618 276.799 80.0226 316.046 128.279 316.046C176.536 316.046 215.797 276.799 215.797 228.618C215.797 180.438 176.536 141.191 128.279 141.191Z" fill="black"></path><path d="M138.644 288.651C117.196 287.102 104.447 280.611 97.536 275.37C89.9698 269.712 87.5867 264.471 87.4675 264.233C87.3484 263.935 87.4675 263.578 87.7654 263.459C88.0633 263.34 88.4208 263.459 88.5399 263.757C88.6591 263.935 98.37 284.541 138.644 287.46C139.001 287.46 139.239 287.757 139.18 288.115C139.239 288.412 138.942 288.651 138.644 288.651Z" fill="black"></path><path d="M22.3553 405.676C22.2957 405.676 22.1766 405.676 22.117 405.617C21.8191 405.498 21.6999 405.14 21.8191 404.843L71.327 295.975C71.4462 295.677 71.8036 295.558 72.1015 295.677C72.3994 295.797 72.5186 296.154 72.3994 296.452L22.8915 405.319C22.7723 405.498 22.5936 405.676 22.3553 405.676Z" fill="black"></path><path d="M19.3151 419.553C22.8028 419.553 25.6302 416.727 25.6302 413.24C25.6302 409.754 22.8028 406.927 19.3151 406.927C15.8274 406.927 13 409.754 13 413.24C13 416.727 15.8274 419.553 19.3151 419.553Z" fill="black"></path><path d="M234.266 405.677C234.027 405.677 233.849 405.558 233.729 405.32L184.221 296.453C184.102 296.155 184.221 295.798 184.519 295.678C184.817 295.559 185.175 295.678 185.294 295.976L234.802 404.844C234.921 405.141 234.802 405.499 234.504 405.618C234.385 405.618 234.325 405.677 234.266 405.677Z" fill="black"></path><path d="M237.245 419.553C240.733 419.553 243.56 416.727 243.56 413.241C243.56 409.754 240.733 406.928 237.245 406.928C233.757 406.928 230.93 409.754 230.93 413.241C230.93 416.727 233.757 419.553 237.245 419.553Z" fill="black"></path><path d="M198.09 79.2683C197.971 71.1092 196.183 62.5928 198.984 54.9697C202.26 46.0959 211.316 39.9021 213.163 30.6115C214.235 25.192 212.567 19.4151 209.35 14.8889C206.133 10.3627 201.486 7.02755 196.481 4.64533C181.289 -2.67999 162.225 -1.1911 148.344 8.45688C140.718 13.7573 134.701 21.2017 126.717 25.9066C116.411 31.9217 103.959 32.6959 92.2227 34.959C80.6649 37.1626 53.1406 41.3315 53.1406 72.7172C53.1406 96.718 75.7201 115.299 85.1331 118.515C102.529 124.411 120.998 127.27 139.407 126.913C150.608 126.734 162.165 125.186 171.936 119.706C179.621 115.359 185.996 108.093 188.319 99.7554C195.588 96.5394 198.209 87.2487 198.09 79.2683Z" fill="black"></path><path d="M78.1016 194.865L114.622 74.3248C114.622 74.3248 172.232 73.1337 192.488 77.7194C192.488 77.7194 204.82 166.338 205.893 186.527L78.1016 194.865Z" fill="white"></path><path d="M78.1035 195.461C77.9248 195.461 77.7461 195.401 77.6269 195.222C77.5077 195.044 77.4482 194.865 77.5077 194.686L114.028 74.1461C114.088 73.9079 114.326 73.7292 114.564 73.7292C115.16 73.7292 172.532 72.5977 192.609 77.1239C192.848 77.1835 193.026 77.3621 193.086 77.6003C193.205 78.4937 205.418 166.457 206.491 186.468C206.491 186.765 206.252 187.063 205.954 187.063L78.1035 195.461ZM115.041 74.9204L78.878 194.21L205.239 185.991C204.048 165.742 192.848 84.747 191.954 78.2555C172.592 74.027 120.343 74.8012 115.041 74.9204Z" fill="black"></path><path d="M231.157 182.06C231.157 182.06 212.867 76.7663 192.492 77.7787L202.858 187.123L231.157 182.06Z" fill="#F4EEE8"></path><path d="M202.857 187.659C202.737 187.659 202.618 187.599 202.499 187.54C202.38 187.421 202.261 187.302 202.261 187.123L191.895 77.7791C191.895 77.6005 191.954 77.4814 192.014 77.3623C192.133 77.2431 192.252 77.1836 192.431 77.1836C192.55 77.1836 192.609 77.1836 192.729 77.1836C213.282 77.1836 230.977 177.713 231.751 182.001C231.811 182.299 231.572 182.656 231.274 182.716L202.976 187.718C202.976 187.659 202.916 187.659 202.857 187.659ZM193.146 78.3151L203.393 186.349L230.44 181.525C229.725 177.475 225.317 153.355 218.883 129.652C209.946 96.5987 201.01 78.8511 193.146 78.3151Z" fill="black"></path><path d="M309.975 182.06L157.281 187.063V177.356C157.281 173.246 160.618 169.852 164.788 169.852H309.975V182.06Z" fill="black"></path><path d="M312.597 176.343L217.632 176.284C213.581 176.284 210.9 172.532 212.21 168.661L233.36 97.3729C234.254 94.6333 236.935 92.7275 239.794 92.7275L334.759 92.7871C338.81 92.7871 341.491 96.5391 340.18 100.41L319.031 171.698C318.137 174.438 315.456 176.343 312.597 176.343Z" fill="black"></path><path d="M286.325 127.746H277.984L280.665 119.587H289.006L286.325 127.746Z" fill="white"></path><path d="M358.114 237.508C358.114 237.508 400.652 331.844 403.214 334.405C404.882 336.072 415.248 343.874 422.219 348.996C424.661 350.842 423.827 354.713 420.789 355.308L323.381 375.438L298.598 264.725L358.114 237.508Z" fill="white"></path><path d="M323.441 376.093C323.143 376.093 322.905 375.914 322.846 375.616L298.062 264.903C298.002 264.605 298.121 264.367 298.419 264.248L357.876 237.031C357.996 236.971 358.174 236.971 358.353 237.031C358.472 237.091 358.651 237.21 358.71 237.329C375.749 275.146 401.844 332.141 403.691 334.047C404.942 335.297 411.674 340.479 422.636 348.638C423.947 349.65 424.542 351.258 424.185 352.866C423.827 354.474 422.576 355.725 420.968 356.023L323.56 376.152C323.501 376.093 323.501 376.093 323.441 376.093ZM299.313 265.082L323.858 374.783L420.67 354.772C421.802 354.534 422.696 353.641 422.934 352.509C423.172 351.377 422.755 350.186 421.802 349.531C413.997 343.754 404.406 336.489 402.737 334.881C400.176 332.379 363.119 250.312 357.757 238.341L299.313 265.082Z" fill="black"></path><path d="M322.068 355.546C321.83 355.546 321.592 355.367 321.472 355.129C321.413 354.831 321.592 354.474 321.889 354.415L394.215 334.344C394.513 334.285 394.87 334.464 394.93 334.761C394.99 335.059 394.811 335.416 394.513 335.476L322.247 355.546C322.187 355.546 322.128 355.546 322.068 355.546Z" fill="black"></path><path d="M234.137 337.68L246.886 413.852C248.018 420.522 253.797 425.465 260.589 425.465H354.421C357.579 425.465 359.187 421.653 356.924 419.39L335.119 397.474L316.71 304.627L234.137 337.68Z" fill="white"></path><path d="M354.423 426.001H260.65C253.56 426.001 247.543 420.938 246.352 413.911L233.543 337.739C233.483 337.442 233.662 337.203 233.9 337.084L316.473 304.031C316.652 303.971 316.831 303.971 316.95 304.031C317.128 304.091 317.188 304.269 317.248 304.448L335.657 397.116L357.342 418.913C358.534 420.105 358.891 421.832 358.236 423.44C357.64 425.048 356.151 426.001 354.423 426.001ZM234.794 338.037L247.484 413.732C248.556 420.164 254.097 424.869 260.59 424.869H354.423C355.913 424.869 356.806 423.916 357.164 423.023C357.521 422.129 357.581 420.819 356.508 419.807L334.703 397.89C334.644 397.831 334.584 397.712 334.525 397.593L316.235 305.46L234.794 338.037Z" fill="black"></path><path d="M249.092 405.99C248.794 405.99 248.496 405.752 248.496 405.394C248.496 405.037 248.734 404.799 249.092 404.799C275.305 404.501 301.638 401.881 327.375 397.116C327.673 397.057 328.031 397.295 328.09 397.593C328.15 397.89 327.911 398.248 327.613 398.307C301.817 403.072 275.365 405.633 249.092 405.99Z" fill="black"></path><path d="M76.3779 204.752C76.3779 204.752 55.5262 256.922 101.281 271.573C146.976 286.223 221.863 277.945 221.863 277.945L234.494 345.481L403.631 299.802C403.631 299.802 361.51 231.135 329.935 186.111C313.492 162.646 284.299 151.628 256.418 158.358C194.518 173.366 85.6122 200.047 76.3779 204.752Z" fill="#BAC3D8"></path><path d="M338.634 317.908C338.336 317.908 338.097 317.729 338.038 317.431C337.799 316.359 314.088 212.256 284.836 198.32C250.758 182.121 201.668 227.205 187.488 241.379C161.93 266.928 149.24 274.551 149.121 274.611C148.823 274.789 148.466 274.67 148.287 274.373C148.108 274.075 148.228 273.717 148.525 273.539C148.645 273.479 161.215 265.916 186.654 240.486C195.71 231.433 214 214.638 234.315 203.799C254.631 192.96 271.848 190.757 285.432 197.189C298.002 203.144 310.871 225.18 323.739 262.64C333.272 290.453 339.289 316.836 339.348 317.133C339.408 317.431 339.229 317.788 338.872 317.848C338.753 317.908 338.693 317.908 338.634 317.908Z" fill="black"></path><path d="M148.346 149.127C124.873 157.822 91.3317 178.785 91.3317 178.785C91.3317 178.785 122.252 94.8123 114.626 74.3848C114.626 74.3848 74.1142 86.5341 55.4072 147.042C39.9769 196.89 56.2413 219.64 73.5184 226.311C77.2121 227.74 80.9654 228.395 84.4209 228.455C99.4341 228.752 131.665 198.737 149.776 184.205C155.555 179.56 159.904 176.522 161.811 176.522L189.037 169.852C189.037 169.852 171.819 140.372 148.346 149.127Z" fill="#F4EEE8"></path><path d="M69.1674 224.822C69.0482 224.822 68.9887 224.822 68.8695 224.762C59.099 219.283 38.1281 200.761 54.8095 146.804C64.5204 115.418 80.189 97.1945 91.6277 87.487C104.02 76.9457 114.326 73.7892 114.445 73.7297C114.743 73.6106 115.041 73.7892 115.16 74.087C122.309 93.2043 96.8704 165.207 92.4617 177.297C99.1939 173.187 127.612 156.095 148.106 148.472C157.936 144.839 168.243 147.34 177.835 155.678C185.043 161.931 189.452 169.376 189.512 169.435C189.631 169.614 189.631 169.793 189.571 169.971C189.512 170.15 189.333 170.269 189.154 170.329L161.928 176.999C161.868 176.999 161.868 176.999 161.809 176.999C159.843 176.999 154.242 181.287 150.191 184.562C149.953 184.741 149.536 184.741 149.357 184.443C149.178 184.205 149.178 183.788 149.476 183.609C156.328 178.13 159.902 175.867 161.809 175.808L188.201 169.316C185.401 164.969 169.434 141.802 148.642 149.544C125.467 158.12 92.1043 178.905 91.7468 179.143C91.5085 179.262 91.2702 179.262 91.0319 179.083C90.8532 178.905 90.734 178.666 90.8532 178.428C91.1511 177.594 121.058 95.8843 114.326 74.9804C112.062 75.7546 103.066 79.3279 92.4617 88.3803C81.1422 98.0283 65.6524 116.014 56.0606 147.102C39.6175 200.166 60.0522 218.33 69.5844 223.631C69.8823 223.809 70.0015 224.167 69.8227 224.464C69.5844 224.703 69.3461 224.822 69.1674 224.822Z" fill="black"></path><path d="M167.883 172.889C167.644 172.889 167.406 172.711 167.346 172.473C165.857 168.125 162.402 164.373 158.172 162.527C157.874 162.408 157.755 162.05 157.874 161.753C157.993 161.455 158.35 161.336 158.648 161.455C163.176 163.42 166.87 167.41 168.478 172.056C168.598 172.353 168.419 172.711 168.121 172.83C168.002 172.889 167.942 172.889 167.883 172.889Z" fill="black"></path><path d="M176.466 171.162C176.227 171.162 175.989 170.984 175.87 170.745C174.261 165.445 170.329 160.8 165.265 158.477C164.968 158.358 164.848 158.001 164.968 157.703C165.087 157.405 165.444 157.286 165.742 157.405C171.104 159.906 175.274 164.79 176.942 170.448C177.062 170.745 176.883 171.103 176.525 171.162C176.585 171.162 176.525 171.162 176.466 171.162Z" fill="black"></path><path d="M157.223 182.06V177.356C157.223 173.246 160.559 169.852 164.729 169.852H195.769L157.223 182.06Z" fill="black"></path><path d="M155.493 39.8428L141.969 75.5165C141.969 75.5165 148.939 84.7476 164.667 86.832C180.336 88.9165 166.991 75.8143 166.991 75.8143L174.557 54.1361L155.493 39.8428Z" fill="white"></path><path d="M167.708 87.6656C166.815 87.6656 165.742 87.606 164.61 87.4273C148.882 85.3429 141.793 76.2309 141.554 75.8736C141.435 75.6949 141.375 75.5163 141.495 75.278L154.899 39.6043C154.959 39.4257 155.138 39.3066 155.316 39.247C155.495 39.1874 155.674 39.247 155.853 39.3661L174.977 53.6594C175.155 53.8381 175.274 54.0763 175.155 54.3145L167.708 75.6354C169.078 77.0647 174.142 82.5438 172.653 85.6407C171.938 87.0105 170.33 87.6656 167.708 87.6656ZM142.627 75.3971C143.878 76.886 150.908 84.39 164.729 86.2362C168.602 86.7722 170.925 86.3553 171.521 85.1642C172.474 83.1989 169.019 78.6131 166.576 76.2309C166.398 76.0523 166.338 75.814 166.457 75.6354L173.904 54.3741L155.793 40.7954L142.627 75.3971Z" fill="black"></path><path d="M198.506 32.5176C198.506 32.5176 189.451 70.4544 175.152 71.5859C160.795 72.7175 156.803 56.042 157.22 45.7389C157.22 45.7389 148.641 38.1753 153.705 29.8971C157.875 22.9887 164.667 28.3487 163.058 34.1256C163.058 34.1256 169.016 22.9291 174.676 26.6811C180.276 30.3736 192.668 36.21 198.506 32.5176Z" fill="white"></path><path d="M173.784 72.1813C169.852 72.1813 166.516 70.8711 163.775 68.1911C158.116 62.712 156.388 52.8258 156.626 45.9174C155.315 44.6072 148.405 37.3414 153.171 29.5397C155.018 26.4428 157.699 25.2517 160.26 26.3832C162.048 27.1574 163.597 29.1823 163.835 31.6241C165.324 29.4205 167.946 26.2046 170.924 25.4303C172.354 25.073 173.725 25.3112 174.976 26.145C181.112 30.1948 192.849 35.4356 198.27 31.9814C198.449 31.8623 198.747 31.8623 198.925 31.9814C199.104 32.1005 199.223 32.3388 199.164 32.577C198.806 34.1254 189.87 70.9307 175.274 72.0622C174.737 72.1813 174.261 72.1813 173.784 72.1813ZM158.354 27.1574C156.805 27.1574 155.315 28.1699 154.184 30.1352C149.477 37.8774 157.282 44.905 157.639 45.2027C157.758 45.3218 157.818 45.5005 157.818 45.6792C157.52 52.3494 159.128 62.0569 164.609 67.2978C167.409 70.0373 170.984 71.2285 175.095 70.8711C187.368 69.9182 195.887 40.081 197.615 33.5299C190.704 36.2694 178.61 29.897 174.261 27.0383C173.308 26.3832 172.295 26.2046 171.163 26.5023C167.112 27.5148 163.537 34.2445 163.537 34.3041C163.418 34.6019 163.06 34.721 162.763 34.6019C162.465 34.4828 162.345 34.185 162.405 33.8872C163.239 30.9094 161.69 28.289 159.724 27.4552C159.307 27.2765 158.83 27.1574 158.354 27.1574Z" fill="black"></path></svg>`);
}
const _sfc_setup$2s = _sfc_main$2s.setup;
_sfc_main$2s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PicturePluses3.vue");
  return _sfc_setup$2s ? _sfc_setup$2s(props, ctx) : void 0;
};
const PicturePluses3 = /* @__PURE__ */ _export_sfc(_sfc_main$2s, [["ssrRender", _sfc_ssrRender$R]]);
const _sfc_main$2r = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    viewBox: "0 0 544 466",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 20C0 8.9543 8.95431 0 20 0H394C476.843 0 544 67.1573 544 150V446C544 457.046 535.046 466 524 466H150C67.1573 466 0 398.843 0 316V20Z" fill="#EDE4DA"></path></svg>`);
}
const _sfc_setup$2r = _sfc_main$2r.setup;
_sfc_main$2r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/svg/SvgBg3.vue");
  return _sfc_setup$2r ? _sfc_setup$2r(props, ctx) : void 0;
};
const SvgBg3 = /* @__PURE__ */ _export_sfc(_sfc_main$2r, [["ssrRender", _sfc_ssrRender$Q]]);
const SectionPlusesPicture3_vue_vue_type_style_index_0_scoped_fe92755c_lang = "";
const _sfc_main$2q = {
  __name: "SectionPlusesPicture3",
  __ssrInlineRender: true,
  props: {
    text: {
      default: "Своё закрытое сообщество, где делимся секретами молодости"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-pluses" }, _attrs))} data-v-fe92755c>`);
      _push(ssrRenderComponent(SectionPlusesShadow, { class: "card-shadow" }, null, _parent));
      _push(`<div class="wrapper" data-v-fe92755c>`);
      _push(ssrRenderComponent(SvgBg3, null, null, _parent));
      _push(ssrRenderComponent(PicturePluses3, { class: "picture" }, null, _parent));
      _push(`<div class="text-wrapper" data-v-fe92755c>`);
      _push(ssrRenderComponent(PlusesText, {
        text: props.text
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2q = _sfc_main$2q.setup;
_sfc_main$2q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/SectionPlusesPicture3.vue");
  return _sfc_setup$2q ? _sfc_setup$2q(props, ctx) : void 0;
};
const SectionPlusesPicture3 = /* @__PURE__ */ _export_sfc(_sfc_main$2q, [["__scopeId", "data-v-fe92755c"]]);
const SectionPluses_vue_vue_type_style_index_0_scoped_7a926620_lang = "";
const _sfc_main$2p = {
  __name: "SectionPluses",
  __ssrInlineRender: true,
  props: ["moreText", "text1", "text2", "text3"],
  setup(__props) {
    const parallaxStyle = ref("");
    const parallaxStyle2 = ref("");
    const parallaxStyle3 = ref("");
    const handleScroll = () => {
      if (window.innerWidth > 1200) {
        const scrollTop = window.scrollY;
        parallaxStyle.value = `transform: translateY(${scrollTop * 0.03}px)`;
        parallaxStyle2.value = `transform: translateY(${scrollTop * -0.05}px)`;
        parallaxStyle3.value = `transform: translateY(${scrollTop * 0.06}px)`;
      } else {
        parallaxStyle.value = "";
        parallaxStyle2.value = "";
        parallaxStyle3.value = "";
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-pluses" }, _attrs))} data-v-7a926620>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cards" data-v-7a926620${_scopeId}>`);
            _push2(ssrRenderComponent(SectionPlusesPicture1, {
              text: props.text1,
              style: [parallaxStyle.value, { "transition": "1s" }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPlusesPicture2, {
              text: props.text2,
              "more-text": props.moreText,
              style: [parallaxStyle2.value, { "transition": "1s" }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPlusesPicture3, {
              text: props.text3,
              style: [parallaxStyle3.value, { "transition": "1s" }],
              class: "picture-3"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "cards" }, [
                createVNode(SectionPlusesPicture1, {
                  text: props.text1,
                  style: [parallaxStyle.value, { "transition": "1s" }]
                }, null, 8, ["text", "style"]),
                createVNode(SectionPlusesPicture2, {
                  text: props.text2,
                  "more-text": props.moreText,
                  style: [parallaxStyle2.value, { "transition": "1s" }]
                }, null, 8, ["text", "more-text", "style"]),
                createVNode(SectionPlusesPicture3, {
                  text: props.text3,
                  style: [parallaxStyle3.value, { "transition": "1s" }],
                  class: "picture-3"
                }, null, 8, ["text", "style"])
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
const _sfc_setup$2p = _sfc_main$2p.setup;
_sfc_main$2p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-pluses/SectionPluses.vue");
  return _sfc_setup$2p ? _sfc_setup$2p(props, ctx) : void 0;
};
const SectionPluses$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2p, [["__scopeId", "data-v-7a926620"]]);
const SectionBannerBadges_vue_vue_type_style_index_0_scoped_1fe0908a_lang = "";
const _sfc_main$2o = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "badge-group" }, _attrs))} data-v-1fe0908a><svg xmlns="http://www.w3.org/2000/svg" width="393" height="203" viewBox="0 0 393 203" fill="none" data-v-1fe0908a><rect x="8.27148" y="90" width="361" height="70" rx="20" transform="rotate(6.78616 8.27148 90)" fill="#BFB0E9" data-v-1fe0908a></rect><path d="M26.9414 127.888L27.242 125.361C28.9152 111.301 42.0633 107.645 56.0378 108.824L55.7181 115.167C43.9531 114.105 35.6473 116.066 33.1896 123.314C36.451 121.092 40.6181 118.977 45.5751 119.567C52.2003 120.356 56.9159 125.412 55.997 133.134C55.203 139.807 48.233 145.165 39.8442 144.166C31.1217 143.128 25.9885 135.895 26.9414 127.888ZM43.5542 125.176C40.3607 124.796 36.6351 126.044 33.3374 128.165L33.1842 129.452C32.7021 133.504 35.7834 138.076 40.5021 138.637C45.6022 139.244 49.1847 135.948 49.6101 132.374C50.0922 128.322 47.7963 125.68 43.5542 125.176ZM74.5376 142.349C77.7787 142.735 80.8076 142.467 84.4016 141.106L85.6706 146.284C82.2843 147.525 77.6281 148.469 73.243 147.947C64.3776 146.892 59.1842 140.57 60.035 133.421C60.9822 125.461 68.3176 121.5 76.2775 122.447C83.5224 123.309 88.3945 128.675 87.6288 135.109C87.504 136.158 87.2306 137.237 86.8142 138.299L66.3188 135.86C66.8103 139.448 70.0572 141.816 74.5376 142.349ZM75.2666 127.693C71.1675 127.205 68.3112 128.46 67.0119 131.254L81.454 132.973C81.169 130.087 78.9844 128.135 75.2666 127.693ZM97.7183 140.225L98.2912 135.411L102.2 135.876C106.442 136.381 108.324 135.59 108.506 134.065C108.653 132.826 107.242 131.691 104.286 131.339C101.331 130.988 97.1914 131.655 93.8391 132.61L92.7164 127.014C95.9201 126.09 100.268 125.302 104.939 125.858C111.469 126.635 115.294 130.232 114.807 134.331C114.568 136.333 113.094 137.753 110.855 138.695C113.442 140.115 115.15 142.01 114.872 144.345C114.231 149.731 107.677 151.997 101.433 151.254C97.2388 150.754 92.5723 148.942 89.667 146.953L92.2564 141.847C95.3104 143.806 99.052 145.266 102.198 145.641C105.773 146.066 108.342 145.598 108.557 143.787C108.716 142.453 107.251 141.36 103.39 140.9L97.7183 140.225ZM147.758 136.561C143.182 136.016 139.438 138.229 138.922 142.567C138.378 147.142 141.862 150.361 146.819 150.95C150.298 151.364 152.944 150.664 156.254 149.656L157.523 154.834C154.078 156.165 149.814 157.059 145.334 156.526C136.468 155.471 131.704 149.2 132.555 142.051C133.502 134.091 140.837 130.13 148.797 131.077C152.753 131.548 156.268 132.884 159.009 134.226L156.814 139.668C153.684 137.943 150.999 136.946 147.758 136.561ZM161.167 138.93L161.819 133.448L185.985 136.324L185.333 141.805L176.372 140.739L174.188 159.09L167.944 158.347L170.128 139.996L161.167 138.93ZM206.967 137.999C213.496 138.776 218.411 144.195 217.492 151.916C216.641 159.066 209.938 164.214 201.93 163.261C199.309 162.949 196.133 161.604 193.883 160.611L192.425 172.861L186.134 172.112L190.331 136.841L196.622 137.59L195.993 142.881C197.957 139.779 202.105 137.42 206.967 137.999ZM204.41 143.64C200.168 143.136 195.715 145.216 195.193 149.601L194.512 155.321C197.133 156.454 199.728 157.392 202.683 157.743C206.783 158.231 210.676 155.166 211.153 151.162C211.663 146.872 208.652 144.145 204.41 143.64ZM235.961 161.558C239.202 161.944 242.231 161.676 245.825 160.315L247.094 165.493C243.708 166.734 239.052 167.678 234.667 167.156C225.801 166.101 220.608 159.78 221.459 152.63C222.406 144.67 229.741 140.709 237.701 141.656C244.946 142.518 249.818 147.884 249.052 154.318C248.928 155.367 248.654 156.446 248.238 157.508L227.742 155.07C228.234 158.657 231.481 161.025 235.961 161.558ZM236.69 146.902C232.591 146.414 229.735 147.669 228.436 150.463L242.878 152.182C242.593 149.296 240.408 147.344 236.69 146.902ZM267.802 150.846C263.226 150.301 259.482 152.514 258.966 156.852C258.421 161.427 261.906 164.646 266.863 165.235C270.342 165.649 272.987 164.949 276.298 163.941L277.567 169.119C274.121 170.45 269.858 171.344 265.377 170.811C256.512 169.756 251.747 163.485 252.598 156.336C253.545 148.376 260.881 144.415 268.841 145.362C272.797 145.833 276.312 147.169 279.052 148.511L276.858 153.953C273.728 152.227 271.043 151.231 267.802 150.846ZM297.126 154.335C292.55 153.791 288.806 156.004 288.29 160.341C287.746 164.917 291.23 168.135 296.187 168.725C299.666 169.139 302.312 168.439 305.622 167.431L306.891 172.609C303.446 173.939 299.182 174.834 294.702 174.3C285.836 173.246 281.072 166.975 281.923 159.825C282.87 151.865 290.205 147.904 298.165 148.851C302.121 149.322 305.636 150.659 308.377 152L306.182 157.443C303.052 155.717 300.367 154.721 297.126 154.335ZM321.36 162.826C323.933 163.132 327.227 164.298 329.191 165.257L329.52 162.492C329.815 160.014 328.393 158.152 325.39 157.795C322.912 157.5 319.159 158.165 315.526 159.038L314.634 153.131C317.703 152.53 322.883 151.648 326.649 152.096C333.178 152.873 336.578 156.806 335.8 163.336L334.78 171.916C334.694 172.63 335.12 173.116 335.787 173.196C336.502 173.281 337.804 172.904 339.271 172.353L339.98 177.368C337.188 178.486 334.215 179.099 332.261 178.867C329.067 178.487 327.999 176.088 328.221 173.407C325.61 175.852 321.727 177.613 317.675 177.131C313.195 176.598 310.21 173.246 310.721 168.956C311.328 163.856 316.45 162.242 321.36 162.826ZM320.366 171.989C322.749 172.272 326.191 171.377 328.692 169.451L328.8 168.545C326.235 167.757 323.499 167.189 321.211 166.917C319.114 166.668 317.422 167.481 317.218 169.197C317.031 170.77 318.364 171.751 320.366 171.989Z" fill="white" data-v-1fe0908a></path><rect x="107" y="61.6445" width="277" height="70" rx="20" transform="rotate(-12.8585 107 61.6445)" fill="#98CBFA" data-v-1fe0908a></rect><path d="M135.816 93.4453L135.249 90.9651C132.098 77.1602 143.252 69.2968 156.81 65.7097L158.641 71.7906C147.204 74.746 140.04 79.3845 140.163 87.0372C142.487 83.8479 145.701 80.4557 150.568 79.3447C157.072 77.8599 163.213 81.037 164.944 88.618C166.439 95.1694 161.676 102.559 153.44 104.439C144.876 106.394 137.61 101.307 135.816 93.4453ZM150.55 85.3062C147.414 86.0219 144.325 88.4502 141.933 91.5566L142.221 92.8201C143.129 96.7978 147.568 100.068 152.201 99.0104C157.208 97.8674 159.474 93.5591 158.673 90.0494C157.765 86.0717 154.715 84.3555 150.55 85.3062ZM185.503 91.0639C188.685 90.3375 191.448 89.0669 194.375 86.577L197.311 91.0272C194.539 93.334 190.471 95.7888 186.166 96.7715C177.462 98.7584 170.446 94.5503 168.843 87.5309C167.059 79.7159 172.636 73.5194 180.451 71.7355C187.564 70.1118 193.957 73.5269 195.399 79.8444C195.634 80.8739 195.739 81.9823 195.704 83.1227L175.581 87.716C177.25 90.9292 181.104 92.068 185.503 91.0639ZM181.263 77.0154C177.238 77.934 174.97 80.0765 174.686 83.1447L188.865 79.908C187.626 77.2859 184.913 76.1822 181.263 77.0154ZM206.621 81.2708L205.542 76.5443L209.379 75.6684C213.544 74.7177 215.051 73.3397 214.709 71.8423C214.432 70.6255 212.721 70.0314 209.819 70.6937C206.918 71.356 203.243 73.3764 200.407 75.4024L197.469 70.5097C200.175 68.5625 204.005 66.359 208.591 65.3122C215.002 63.8487 219.814 65.9505 220.733 69.9749C221.182 71.9404 220.271 73.7731 218.479 75.413C221.392 75.8804 223.637 77.091 224.161 79.384C225.368 84.672 219.957 89.0089 213.827 90.4082C209.709 91.3482 204.705 91.2104 201.3 90.3137L202.022 84.6345C205.557 85.4524 209.572 85.5699 212.66 84.8649C216.17 84.0637 218.432 82.7595 218.026 80.9813C217.727 79.671 215.98 79.1343 212.19 79.9996L206.621 81.2708ZM239.691 69.734L239.124 67.2538C235.973 53.4489 247.127 45.5855 260.685 41.9984L262.516 48.0793C251.079 51.0347 243.915 55.6732 244.038 63.3259C246.362 60.1366 249.576 56.7444 254.443 55.6334C260.947 54.1486 267.088 57.3257 268.819 64.9067C270.314 71.4581 265.551 78.8474 257.315 80.7275C248.751 82.6823 241.485 77.5958 239.691 69.734ZM254.425 61.5949C251.289 62.3106 248.2 64.7389 245.808 67.8453L246.096 69.1088C247.004 73.0865 251.443 76.3566 256.076 75.2991C261.083 74.1561 263.349 69.8478 262.548 66.3381C261.64 62.3604 258.59 60.6442 254.425 61.5949ZM284.42 48.0029C292.235 46.2189 299.988 49.1264 301.772 56.9414C303.374 63.9608 298.605 71.1054 290.135 73.0389C281.665 74.9723 274.267 70.6051 272.665 63.5856C270.881 55.7706 276.605 49.7868 284.42 48.0029ZM285.648 53.3844C280.781 54.4954 277.895 57.8128 278.889 62.1649C279.786 66.0958 284.284 68.7616 288.917 67.7041C293.55 66.6466 296.446 62.293 295.548 58.3621C294.555 54.01 290.515 52.2735 285.648 53.3844ZM327.844 38.9276L333.185 62.3257L327.054 63.7251L322.942 45.7085L315.361 47.439C316.755 57.2138 316.409 66.6967 308.079 68.5981C307.471 68.737 307.19 68.8011 306.571 68.8931L305.48 63.037C306.053 62.9556 306.25 62.9597 307.046 62.7781C312.1 61.6244 310.117 49.9162 308.798 43.2752L327.844 38.9276ZM345.153 59.5939L339.724 60.833L334.383 37.4348L340.513 36.0355L343.985 51.2443L353.897 32.9804L359.372 31.7306L364.713 55.1287L358.583 56.5281L355.101 41.2725L345.153 59.5939Z" fill="white" data-v-1fe0908a></path></svg></div>`);
}
const _sfc_setup$2o = _sfc_main$2o.setup;
_sfc_main$2o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-banner/SectionBannerBadges.vue");
  return _sfc_setup$2o ? _sfc_setup$2o(props, ctx) : void 0;
};
const SectionBannerBadges$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2o, [["ssrRender", _sfc_ssrRender$P], ["__scopeId", "data-v-1fe0908a"]]);
const _imports_0$m = "/assets/banner-05bdea9a.png";
const _sfc_main$2n = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "819",
    height: "924",
    viewBox: "0 0 819 924",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_72_7826)"><ellipse cx="409.18" cy="462" rx="309" ry="362" fill="#BAC3D8"></ellipse></g><defs><filter id="filter0_f_72_7826" x="0.179688" y="0" width="818" height="924" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_72_7826"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$2n = _sfc_main$2n.setup;
_sfc_main$2n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-banner/SectionBannerShadow.vue");
  return _sfc_setup$2n ? _sfc_setup$2n(props, ctx) : void 0;
};
const SectionBannerShadow = /* @__PURE__ */ _export_sfc(_sfc_main$2n, [["ssrRender", _sfc_ssrRender$O]]);
const _sfc_main$2m = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "733",
    height: "627",
    viewBox: "0 0 733 627",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0.179688 120.676C0.179688 54.4016 53.9055 0.675781 120.18 0.675781H712.18C723.225 0.675781 732.18 9.63009 732.18 20.6758V496.879C732.18 568.676 673.977 626.879 602.18 626.879H20.1797C9.134 626.879 0.179688 617.925 0.179688 606.879V120.676Z" fill="url(#paint0_linear_72_7830)"></path><defs><linearGradient id="paint0_linear_72_7830" x1="302.68" y1="65.5" x2="366.18" y2="626.879" gradientUnits="userSpaceOnUse"><stop stop-color="#C1C2C7"></stop><stop offset="1" stop-color="#E7EAF3"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$2m = _sfc_main$2m.setup;
_sfc_main$2m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PictureBgBanner.vue");
  return _sfc_setup$2m ? _sfc_setup$2m(props, ctx) : void 0;
};
const PictureBgBanner = /* @__PURE__ */ _export_sfc(_sfc_main$2m, [["ssrRender", _sfc_ssrRender$N]]);
const SectionBannerBlock_vue_vue_type_style_index_0_scoped_5e9fab90_lang = "";
const _sfc_main$2l = {
  __name: "SectionBannerBlock",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-5e9fab90><div data-v-5e9fab90><img class="banner-picture"${ssrRenderAttr("src", _imports_0$m)} alt="" data-v-5e9fab90>`);
      _push(ssrRenderComponent(PictureBgBanner, { class: "banner-background" }, null, _parent));
      _push(ssrRenderComponent(SectionBannerShadow, { class: "banner-shadow" }, null, _parent));
      _push(ssrRenderComponent(SectionBannerShadow, { class: "banner-shadow banner-shadow-top" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2l = _sfc_main$2l.setup;
_sfc_main$2l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-banner/SectionBannerBlock.vue");
  return _sfc_setup$2l ? _sfc_setup$2l(props, ctx) : void 0;
};
const SectionBannerBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2l, [["__scopeId", "data-v-5e9fab90"]]);
const SectionBannerText_vue_vue_type_style_index_0_scoped_32d73917_lang = "";
const _sfc_main$2k = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs) {
  _push(`<p${ssrRenderAttrs(mergeProps({ class: "banner-text" }, _attrs))} data-v-32d73917> Наслаждайся уютной обстановкой и профессиональной заботой в нашем Центре аппаратной косметологии. <br data-v-32d73917><br data-v-32d73917> Забудь о временных результатах и начни путь к долгосрочному здоровью кожи уже сегодня! </p>`);
}
const _sfc_setup$2k = _sfc_main$2k.setup;
_sfc_main$2k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-banner/SectionBannerText.vue");
  return _sfc_setup$2k ? _sfc_setup$2k(props, ctx) : void 0;
};
const SectionBannerText = /* @__PURE__ */ _export_sfc(_sfc_main$2k, [["ssrRender", _sfc_ssrRender$M], ["__scopeId", "data-v-32d73917"]]);
const SectionBanner_vue_vue_type_style_index_0_scoped_fd61e983_lang = "";
const _sfc_main$2j = {
  __name: "SectionBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-banner" }, _attrs))} data-v-fd61e983><div class="container-custom" data-v-fd61e983><div class="content" data-v-fd61e983>`);
      _push(ssrRenderComponent(SectionBannerBlock, { class: "banner" }, null, _parent));
      _push(`<div class="content-info" data-v-fd61e983><h2 class="content-heading-text" data-v-fd61e983> Преобразуй <br data-v-fd61e983> свою кожу `);
      _push(ssrRenderComponent(SectionBannerBadges$1, { class: "banner-badges" }, null, _parent));
      _push(`</h2>`);
      _push(ssrRenderComponent(SectionBannerText, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$2j = _sfc_main$2j.setup;
_sfc_main$2j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-banner/SectionBanner.vue");
  return _sfc_setup$2j ? _sfc_setup$2j(props, ctx) : void 0;
};
const SectionBanner$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2j, [["__scopeId", "data-v-fd61e983"]]);
const mousewheel = "";
const sliderCustom = "";
const CardInfo_vue_vue_type_style_index_0_scoped_6370dba3_lang = "";
const _sfc_main$2i = {
  __name: "CardInfo",
  __ssrInlineRender: true,
  props: ["title", "subtitle", "p1", "p2"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h3 class="h-l title" data-v-6370dba3>${props.title}</h3><h5 class="text-lg subtitle" data-v-6370dba3>${props.subtitle}</h5><p class="text-sm card-text" data-v-6370dba3><span data-v-6370dba3>${props.p1}</span><span data-v-6370dba3>${props.p2}</span></p><!--]-->`);
    };
  }
};
const _sfc_setup$2i = _sfc_main$2i.setup;
_sfc_main$2i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardInfo.vue");
  return _sfc_setup$2i ? _sfc_setup$2i(props, ctx) : void 0;
};
const CardInfo$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2i, [["__scopeId", "data-v-6370dba3"]]);
const _imports_0$l = "/assets/slider-86d3abd1.png";
const _imports_1$5 = "/assets/slider-picture-svg-1386ae23.png";
const CardImage_vue_vue_type_style_index_0_scoped_c873bfb6_lang = "";
const _sfc_main$2h = {
  __name: "CardImage",
  __ssrInlineRender: true,
  props: ["iconSrc", "iconBigSrc", "iconPng"],
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const getSrc = (name) => {
      if (name !== void 0) {
        const path = `${name}`;
        const modules = /* @__PURE__ */ Object.assign({ "./icon1.svg": () => import("./assets/icon1-b326f76a.js"), "./icon2.svg": () => import("./assets/icon2-5edb38fc.js"), "./icon3.svg": () => import("./assets/icon3-f75595b4.js"), "./icon4.svg": () => import("./assets/icon4-4d0079f9.js"), "./icon5.svg": () => import("./assets/icon5-d40790f0.js"), "./icon6.svg": () => import("./assets/icon6-de307f2c.js"), "./icon7.svg": () => import("./assets/icon7-079859ec.js"), "./icon8.svg": () => import("./assets/icon8-2938ede3.js") });
        return modules[path]().then((mod) => mod.default);
      }
    };
    const icon = ([__temp, __restore] = withAsyncContext(() => getSrc(props.iconSrc || props.iconBigSrc || void 0)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-image-wrapper" }, _attrs))} data-v-c873bfb6><img${ssrRenderAttr("src", _imports_0$l)} alt="" class="card-image" data-v-c873bfb6>`);
      if (props.iconSrc) {
        _push(`<img${ssrRenderAttr("src", unref(icon))} class="svg-picture" alt="" data-v-c873bfb6>`);
      } else {
        _push(`<!---->`);
      }
      if (props.iconBigSrc) {
        _push(`<img${ssrRenderAttr("src", unref(icon))} class="svg-picture-head" alt="" data-v-c873bfb6>`);
      } else {
        _push(`<!---->`);
      }
      if (props.iconPng) {
        _push(`<img class="svg-picture"${ssrRenderAttr("src", _imports_1$5)} alt="" data-v-c873bfb6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2h = _sfc_main$2h.setup;
_sfc_main$2h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardImage.vue");
  return _sfc_setup$2h ? _sfc_setup$2h(props, ctx) : void 0;
};
const CardImage = /* @__PURE__ */ _export_sfc(_sfc_main$2h, [["__scopeId", "data-v-c873bfb6"]]);
const CardBadges_vue_vue_type_style_index_0_scoped_2c3f94af_lang = "";
const _sfc_main$2g = {
  __name: "CardBadges",
  __ssrInlineRender: true,
  props: ["badgeNumber", "badgeColor", "badgeName"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-badges" }, _attrs))} data-v-2c3f94af><div class="card-badge" style="${ssrRenderStyle(`background: ${props.badgeColor}`)}" data-v-2c3f94af>${props.badgeNumber}</div><div class="card-badge" style="${ssrRenderStyle(`background: ${props.badgeColor}`)}" data-v-2c3f94af>${props.badgeName}</div></div>`);
    };
  }
};
const _sfc_setup$2g = _sfc_main$2g.setup;
_sfc_main$2g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardBadges.vue");
  return _sfc_setup$2g ? _sfc_setup$2g(props, ctx) : void 0;
};
const CardBadges = /* @__PURE__ */ _export_sfc(_sfc_main$2g, [["__scopeId", "data-v-2c3f94af"]]);
const CustomSliderCardTemplate_vue_vue_type_style_index_0_scoped_3a94d741_lang = "";
const _sfc_main$2f = {
  __name: "CustomSliderCardTemplate",
  __ssrInlineRender: true,
  props: [
    "title",
    "subtitle",
    "p1",
    "p2",
    "badgeNumber",
    "badgeName",
    "badgeColor",
    "iconSrc",
    "iconBigSrc",
    "iconPng",
    "link"
  ],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-slider" }, _attrs))} data-v-3a94d741>`);
      _push(ssrRenderComponent(CardBadges, {
        "badge-color": props.badgeColor,
        "badge-name": props.badgeName,
        "badge-number": props.badgeNumber
      }, null, _parent));
      _push(`<div class="card-info" data-v-3a94d741>`);
      _push(ssrRenderComponent(CardInfo$2, {
        title: props.title,
        subtitle: props.subtitle,
        p1: props.p1,
        p2: props.p2
      }, null, _parent));
      _push(`</div><div data-v-3a94d741>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(CardImage, {
            "icon-src": props.iconSrc,
            "icon-big-src": props.iconBigSrc,
            "icon-png": props.iconPng
          }, null, _parent));
        },
        _: 1
      });
      _push(`<div class="card-buttons" data-v-3a94d741>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: props.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(MButton, { class: "card-button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Подробнее`);
                } else {
                  return [
                    createTextVNode("Подробнее")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(MButton, { class: "card-button" }, {
                default: withCtx(() => [
                  createTextVNode("Подробнее")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2f = _sfc_main$2f.setup;
_sfc_main$2f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CustomSliderCardTemplate.vue");
  return _sfc_setup$2f ? _sfc_setup$2f(props, ctx) : void 0;
};
const CustomSliderCardTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$2f, [["__scopeId", "data-v-3a94d741"]]);
const dataSlides = [
  {
    title: `Вылечим твою кожу и&nbsp;избавим от высыпания на лице.`,
    subtitle: "Задачей концепта является эффективное лечение заболевания Акне первой, второй и&nbsp;третьей степени.",
    p1: "Если домашние средства от&nbsp;прыщей больше не&nbsp;помогают, ты&nbsp;чувствуешь стеснение и&nbsp;дискомфорт, тебе не&nbsp;нравится, как ты&nbsp;выглядишь или твоя работа связана с&nbsp;публичностью и&nbsp;необходимостью выглядеть идеально, приходи, мы&nbsp;исправим ситуацию!",
    badgeNumber: "01.",
    badgeName: "AntiAcne Concept",
    badgeColor: "#ce99ab",
    iconSrc: "./icon1.svg",
    link: "/concept/antiacne"
  },
  {
    title: "Сделаем твою кожу чистой и&nbsp;сияющей&nbsp;— без черных точек и&nbsp;расширенных пор!",
    subtitle: "Задачей концепта является очищения кожи, выравнивания рельефа, уменьшения жирности, сужения пор, лечения комедонов.",
    p1: "Мы&nbsp;подготовили для тебя уникальную программу процедур, улучшающих состояние твоей кожи на&nbsp;клеточном уровне. В&nbsp;своей работе мы&nbsp;используем аппаратную чистку кожи лица, бесконтактный пилинг, насыщаем клетки кожи полезными веществами.",
    badgeNumber: "02.",
    badgeName: "Clear Concept",
    badgeColor: "#8AC8D7",
    iconSrc: "./icon2.svg",
    link: "/concept/clear"
  },
  // detox
  {
    title: "Избавим кожу от&nbsp;токсинов и&nbsp;загрязнений, наполним свежестью и&nbsp;здоровьем",
    subtitle: "Задачей концепта является детоксикация кожи, восстановление нормальной работы клеток и&nbsp;профилактика старения.",
    p1: "Детокс-очищение кожи&nbsp;— это комплекс процедур, направленный на&nbsp;удаление вредных веществ из&nbsp;слоев кожи и&nbsp;восстановление обменных процессов.",
    badgeNumber: "03.",
    badgeName: "Detox Concept",
    badgeColor: "#A7CA90",
    iconSrc: "./icon3.svg",
    link: "/concept/detox"
  },
  {
    title: "Подтяжка овала лица без операций",
    subtitle: "Задачей концепта является профилактика старения, подтяжка овала лица, повышение плотности кожи, разглаживание морщин",
    p1: "Курс процедур по&nbsp;подтяжке лица подходит для тех, кто впервые столкнулся с&nbsp;признаками старения и&nbsp;тех, кто хочет убрать явные возрастные изменения.",
    badgeNumber: "04.",
    badgeName: "Lifting Concept",
    badgeColor: "#A8A7FF",
    iconSrc: "./icon4.svg",
    link: "/concept/lifting"
  },
  {
    title: "Убираем пигментные пятна, сделаем твою кожу молодой и&nbsp;сияющей",
    subtitle: "Задачей концепта является бережное осветление кожи, уменьшение пигментации, придание коже сияния.",
    p1: "Подберем для тебя комплекс процедур, который избавит от&nbsp;веснушек, возрастной пигментации, застойных пятен от&nbsp;воспалений и&nbsp;акне.",
    badgeNumber: "05.",
    badgeName: "Brigth Concept",
    badgeColor: "#F2B280",
    iconSrc: "./icon5.svg",
    link: "/concept/brigth"
  },
  {
    title: "Увлажняем твою кожу, устраняя сухость, стягивание и&nbsp;дискомфорт",
    subtitle: "Задачей концепта является увлажнение твоей кожи, устранение стягивания, сухости, профилактика старения.",
    p1: "Аппаратные процедуры по&nbsp;увлажнению лица улучшают состояние кожи на&nbsp;клеточном уровне. Мы&nbsp;эффективно решаем проблемы стянутости и&nbsp;шелушения кожи, убираем сухость после загара или в&nbsp;отопительный сезон.",
    badgeNumber: "06.",
    badgeName: "Hydro Concept",
    badgeColor: "#86B6F8",
    iconSrc: "./icon6.svg",
    link: "/concept/hydro"
  },
  {
    title: "Вылечим купероз, розацеа, избавим от&nbsp;покраснений на&nbsp;лице",
    subtitle: "Задачей концепта является лечение розацеа и&nbsp;купероза, устранение видимых покраснений на&nbsp;лице.",
    p1: "Заботимся о&nbsp;долгосрочном здоровье твоей кожи, применяя аппаратные методики для лечения розацеа, купероза и&nbsp;удаления сосудистых звездочек на&nbsp;лице. После курса процедур ты&nbsp;забудешь о&nbsp;неоднородном красном цвете лица, покраснениях после мороза и&nbsp;расширенных сосудах.",
    badgeNumber: "07.",
    badgeName: "Red Concept",
    badgeColor: "#F88476",
    iconPng: "./slider-picture-svg.png",
    link: "/concept/red"
  },
  {
    title: "Разработаем персональный план по&nbsp;улучшению твоей кожи",
    subtitle: "Задачей концепта является разработка индивидуального плана улучшения твоей кожи с&nbsp;помощью инъекций и&nbsp;уходовых процедур.",
    p1: "Заботимся о&nbsp;долгосрочном здоровье твоей кожи, применяя аппаратные методики для лечения розацеа, купероза и&nbsp;удаления сосудистых звездочек на&nbsp;лице. После курса процедур ты&nbsp;забудешь о&nbsp;неоднородном красном цвете лица, покраснениях после мороза и&nbsp;расширенных сосудах.",
    badgeNumber: "08.",
    badgeName: "Personal Concept",
    badgeColor: "#B9B5A7",
    iconBigSrc: "./icon8.svg",
    link: "/concept/personal"
  }
];
const CustomSlider_vue_vue_type_style_index_0_scoped_08e696b9_lang = "";
const _sfc_main$2e = {
  __name: "CustomSlider",
  __ssrInlineRender: true,
  setup(__props) {
    let activeSlideIndex = ref(1);
    const container = ref(null);
    const isLockScroll = ref(true);
    const handleWheel = (event) => {
      event.stopPropagation();
      const swiper2 = (event.currentTarget & { swiper: swiper2 }).swiper;
      const isEndSlide = swiper2.isEnd && event.deltaY > 0;
      const isStartSlide = swiper2.isBeginning && event.deltaY < 0;
      if (isLockScroll.value === true) {
        scrollToCenter();
        event.preventDefault();
      }
      if (isEndSlide || isStartSlide) {
        setTimeout(() => isLockScroll.value = false, 300);
        return;
      } else {
        isLockScroll.value = true;
      }
    };
    const scrollToCenter = () => {
      const containerElement = container.value;
      if (containerElement) {
        containerElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    const onChangeActive = (swiper2) => {
      activeSlideIndex.value = swiper2.activeIndex + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "wrapper",
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-08e696b9>`);
      _push(ssrRenderComponent(unref(Swiper), {
        effect: "creative",
        speed: 500,
        creativeEffect: {
          prev: {
            translate: [0, -100, 0],
            scale: 0.8
          },
          next: {
            translate: [0, 100, 0],
            scale: 0.8
          }
        },
        mousewheel: { releaseOnEdges: true },
        threshold: 2e4,
        "release-on-edges": true,
        modules: [unref(EffectCreative), unref(Mousewheel)],
        "slides-per-view": 1,
        onActiveIndexChange: onChangeActive,
        onWheel: handleWheel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(dataSlides), (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CustomSliderCardTemplate, {
                      title: item.title,
                      subtitle: item.subtitle,
                      "badge-name": item.badgeName,
                      "badge-color": item.badgeColor,
                      "badge-number": item.badgeNumber,
                      p1: item.p1,
                      p2: item.p2,
                      iconSrc: item.iconSrc,
                      iconBigSrc: item.iconBigSrc,
                      iconPng: item.iconPng,
                      link: item.link
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(CustomSliderCardTemplate, {
                        title: item.title,
                        subtitle: item.subtitle,
                        "badge-name": item.badgeName,
                        "badge-color": item.badgeColor,
                        "badge-number": item.badgeNumber,
                        p1: item.p1,
                        p2: item.p2,
                        iconSrc: item.iconSrc,
                        iconBigSrc: item.iconBigSrc,
                        iconPng: item.iconPng,
                        link: item.link
                      }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataSlides), (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(CustomSliderCardTemplate, {
                      title: item.title,
                      subtitle: item.subtitle,
                      "badge-name": item.badgeName,
                      "badge-color": item.badgeColor,
                      "badge-number": item.badgeNumber,
                      p1: item.p1,
                      p2: item.p2,
                      iconSrc: item.iconSrc,
                      iconBigSrc: item.iconBigSrc,
                      iconPng: item.iconPng,
                      link: item.link
                    }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2e = _sfc_main$2e.setup;
_sfc_main$2e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CustomSlider.vue");
  return _sfc_setup$2e ? _sfc_setup$2e(props, ctx) : void 0;
};
const CustomSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2e, [["__scopeId", "data-v-08e696b9"]]);
const CustomSliderSm_vue_vue_type_style_index_0_scoped_c002fce8_lang = "";
const _sfc_main$2d = {
  __name: "CustomSliderSm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-custom-slider" }, _attrs))} data-v-c002fce8><div class="wrapper" data-v-c002fce8>`);
      _push(ssrRenderComponent(unref(Swiper), {
        mousewheel: { releaseOnEdges: true },
        "slides-per-view": 1,
        "space-between": 16,
        modules: [unref(Pagination)],
        pagination: {
          clickable: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(dataSlides), (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(CustomSliderCardTemplate, {
                      title: item.title,
                      subtitle: item.subtitle,
                      "badge-name": item.badgeName,
                      "badge-color": item.badgeColor,
                      "badge-number": item.badgeNumber,
                      p1: item.p1,
                      p2: item.p2,
                      iconSrc: item.iconSrc,
                      iconBigSrc: item.iconBigSrc,
                      iconPng: item.iconPng,
                      link: item.link
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(CustomSliderCardTemplate, {
                        title: item.title,
                        subtitle: item.subtitle,
                        "badge-name": item.badgeName,
                        "badge-color": item.badgeColor,
                        "badge-number": item.badgeNumber,
                        p1: item.p1,
                        p2: item.p2,
                        iconSrc: item.iconSrc,
                        iconBigSrc: item.iconBigSrc,
                        iconPng: item.iconPng,
                        link: item.link
                      }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataSlides), (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(CustomSliderCardTemplate, {
                      title: item.title,
                      subtitle: item.subtitle,
                      "badge-name": item.badgeName,
                      "badge-color": item.badgeColor,
                      "badge-number": item.badgeNumber,
                      p1: item.p1,
                      p2: item.p2,
                      iconSrc: item.iconSrc,
                      iconBigSrc: item.iconBigSrc,
                      iconPng: item.iconPng,
                      link: item.link
                    }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$2d = _sfc_main$2d.setup;
_sfc_main$2d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CustomSliderSm.vue");
  return _sfc_setup$2d ? _sfc_setup$2d(props, ctx) : void 0;
};
const CustomSliderSm = /* @__PURE__ */ _export_sfc(_sfc_main$2d, [["__scopeId", "data-v-c002fce8"]]);
const HomeView_vue_vue_type_style_index_0_scoped_94eab763_lang = "";
const _sfc_main$2c = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionBanner$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTech$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomSlider, { class: "custom-slider-lg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CustomSliderSm, { class: "custom-slider-sm" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionResult, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionStories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOther$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewPacients, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionBanner$2),
              createVNode(SectionPluses$1),
              createVNode(SectionInfo),
              createVNode(SectionTech$1),
              createVNode(CustomSlider, { class: "custom-slider-lg" }),
              createVNode(CustomSliderSm, { class: "custom-slider-sm" }),
              createVNode(SectionOffer),
              createVNode(SectionResult),
              createVNode(SectionStories),
              createVNode(SectionOther$1),
              createVNode(SectionMasters$1),
              createVNode(SectionReviewPacients),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionRead)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2c = _sfc_main$2c.setup;
_sfc_main$2c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$2c ? _sfc_setup$2c(props, ctx) : void 0;
};
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main$2c, [["__scopeId", "data-v-94eab763"]]);
const SectionPreview_vue_vue_type_style_index_0_scoped_3fa93898_lang = "";
const _sfc_main$2b = {
  __name: "SectionPreview",
  __ssrInlineRender: true,
  props: {
    title: {
      default: "Мы разработали продукт — AntiAcne Concept"
    },
    text: {
      default: "Задачей которого является эффективное лечение заболевания Акне первой, второй и третьей степен"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-preview" }, _attrs))} data-v-3fa93898>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="heading" data-v-3fa93898${_scopeId}>${ssrInterpolate(props.title)}</h3><h4 class="heading-2" data-v-3fa93898${_scopeId}>${ssrInterpolate(props.text)}</h4>`);
          } else {
            return [
              createVNode("h3", {
                class: "heading",
                textContent: toDisplayString(props.title)
              }, null, 8, ["textContent"]),
              createVNode("h4", {
                class: "heading-2",
                textContent: toDisplayString(props.text)
              }, null, 8, ["textContent"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2b = _sfc_main$2b.setup;
_sfc_main$2b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-preview/SectionPreview.vue");
  return _sfc_setup$2b ? _sfc_setup$2b(props, ctx) : void 0;
};
const SectionPreview = /* @__PURE__ */ _export_sfc(_sfc_main$2b, [["__scopeId", "data-v-3fa93898"]]);
const _sfc_main$2a = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "15",
    viewBox: "0 0 19 15",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3559 4.91866C18.5699 4.69497 18.7368 4.43218 18.8471 4.1453C18.9574 3.85843 19.0089 3.55308 18.9987 3.2467C18.9886 2.94031 18.9169 2.63889 18.7878 2.35964C18.6587 2.08039 18.4747 1.82879 18.2463 1.61919C18.0179 1.40959 17.7496 1.24611 17.4568 1.13807C17.1639 1.03003 16.8522 0.979548 16.5394 0.989516C16.2266 0.999483 15.9188 1.0697 15.6337 1.19616C15.3487 1.32261 15.0918 1.50283 14.8778 1.72653L7.53332 9.40352L3.90515 6.24639C3.42979 5.85931 2.81944 5.66839 2.20303 5.71394C1.58662 5.75949 1.01242 6.03796 0.601735 6.49051C0.19105 6.94306 -0.0239596 7.53426 0.00212367 8.13922C0.028207 8.74418 0.293342 9.31551 0.74152 9.73253L6.10159 14.3994C6.56538 14.8029 7.17158 15.0134 7.7913 14.9859C8.41101 14.9584 8.99535 14.6953 9.42006 14.2524L18.3559 4.91866Z" fill="white"></path></svg>`);
}
const _sfc_setup$2a = _sfc_main$2a.setup;
_sfc_main$2a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-bonus/IconCheck.vue");
  return _sfc_setup$2a ? _sfc_setup$2a(props, ctx) : void 0;
};
const IconCheck = /* @__PURE__ */ _export_sfc(_sfc_main$2a, [["ssrRender", _sfc_ssrRender$L]]);
const SectionBonusList_vue_vue_type_style_index_0_scoped_38d4eee1_lang = "";
const _sfc_main$29 = {
  __name: "SectionBonusList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))} data-v-38d4eee1><li class="list-item" data-v-38d4eee1><span class="list-icon" data-v-38d4eee1>`);
      _push(ssrRenderComponent(IconCheck, null, null, _parent));
      _push(`</span><h6 class="list-text text-lg" data-v-38d4eee1> Любой номинал сертификата при покупке на сайте </h6></li><li class="list-item" data-v-38d4eee1><span class="list-icon" data-v-38d4eee1>`);
      _push(ssrRenderComponent(IconCheck, null, null, _parent));
      _push(`</span><h6 class="list-text text-lg" data-v-38d4eee1>Сертификат действует 6 месяцев</h6></li><li class="list-item" data-v-38d4eee1><span class="list-icon" data-v-38d4eee1>`);
      _push(ssrRenderComponent(IconCheck, null, null, _parent));
      _push(`</span><h6 class="list-text text-lg" data-v-38d4eee1> Можно использовать на любую услугу или товар </h6></li></ul>`);
    };
  }
};
const _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-bonus/SectionBonusList.vue");
  return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
const SectionBonusList = /* @__PURE__ */ _export_sfc(_sfc_main$29, [["__scopeId", "data-v-38d4eee1"]]);
const _sfc_main$28 = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "648",
    height: "764",
    viewBox: "0 0 648 764",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><mask id="mask0_1_2601" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="648" height="764"><rect y="0.988281" width="648" height="763" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_1_2601)"><path d="M289.158 781.339L311.033 682.902L339.949 781.339H478.939C467.552 724.104 453.668 657.981 440.933 607.988C382.6 603.344 277.871 583.666 183.23 628.365C172.942 671.515 160.106 728.599 148.77 781.339H289.158Z" fill="white"></path><path d="M478.94 782.438H339.951C339.451 782.438 339.052 782.139 338.902 781.639L311.184 687.298L290.258 781.589C290.158 782.089 289.708 782.438 289.209 782.438H148.721C148.371 782.438 148.072 782.288 147.872 782.039C147.672 781.789 147.572 781.439 147.672 781.14C159.209 727.402 172.094 670.218 182.132 628.116C182.232 627.766 182.432 627.517 182.732 627.367C264.537 588.761 354.634 598.101 414.215 604.294C423.854 605.292 432.893 606.241 440.984 606.89C441.434 606.94 441.833 607.24 441.983 607.69C452.721 649.941 465.506 708.274 479.989 781.09C480.039 781.39 479.989 781.739 479.74 781.989C479.54 782.288 479.24 782.438 478.94 782.438ZM340.8 780.241H477.592C463.308 708.523 450.723 650.89 440.085 609.038C432.194 608.389 423.354 607.49 414.065 606.491C354.833 600.348 265.336 591.059 184.23 629.115C174.291 670.767 161.606 727.152 150.169 780.241H288.36L310.035 682.653C310.135 682.154 310.584 681.804 311.084 681.804C311.583 681.754 312.033 682.104 312.182 682.603L340.8 780.241Z" fill="black"></path><path d="M311.036 683.953C310.437 683.953 309.938 683.454 309.938 682.855C309.938 679.359 308.589 676.262 306.042 673.865C302.546 670.619 297.652 669.37 294.356 669.62C293.756 669.67 293.207 669.22 293.207 668.621C293.157 668.022 293.606 667.472 294.206 667.472C298.85 667.173 304.094 669.07 307.59 672.317C310.587 675.114 312.185 678.809 312.185 682.905C312.135 683.454 311.636 683.953 311.036 683.953Z" fill="black"></path><path d="M196.666 519.543L170.047 659.232C170.047 659.232 266.785 678.76 318.476 613.685C318.476 613.685 373.313 690.946 463.109 678.41L438.238 538.471L196.666 519.543Z" fill="white"></path><path d="M443.629 680.858C406.073 680.858 376.057 665.625 356.43 651.641C335.104 636.459 321.77 619.928 318.374 615.483C291.455 648.495 252.799 658.983 224.931 661.93C194.466 665.176 169.994 660.331 169.795 660.281C169.195 660.182 168.796 659.582 168.946 658.983L195.615 519.294C195.715 518.744 196.214 518.345 196.764 518.395L438.285 537.373C438.785 537.423 439.184 537.773 439.284 538.272L464.156 678.211C464.206 678.51 464.156 678.81 463.956 679.06C463.756 679.309 463.506 679.459 463.207 679.509C456.514 680.458 449.972 680.858 443.629 680.858ZM318.473 612.586C318.873 612.586 319.173 612.786 319.372 613.036C319.522 613.236 333.306 632.463 357.828 649.893C380.202 665.825 416.361 683.455 461.808 677.462L437.287 539.521L197.563 520.692L171.293 658.334C176.287 659.183 198.212 662.579 224.781 659.732C252.499 656.785 291.105 646.298 317.574 612.986C317.824 612.736 318.124 612.586 318.473 612.586Z" fill="black"></path><path d="M377.46 304.99C376.86 290.357 371.217 276.473 368.919 261.99C366.622 247.856 367.371 232.774 360.679 220.138C352.139 204.107 332.961 195.916 314.832 196.166C296.703 196.465 279.422 203.857 263.491 212.547C247.559 221.237 232.327 231.425 215.396 238.018C182.234 250.953 144.078 249.504 112.964 266.734C85.9953 281.667 67.1669 310.384 64.2203 341.099C61.2737 371.813 74.3087 403.577 97.9815 423.354C121.404 442.931 154.566 450.123 183.982 442.132C185.131 442.632 186.33 443.081 187.578 443.431C193.921 445.179 200.613 444.729 207.156 443.93C259.495 437.737 309.388 412.616 345.496 374.211C363.326 355.232 378.508 331.11 377.46 304.99Z" fill="black"></path><path d="M80.2988 25.4639C69.4113 20.8692 58.4739 13.9272 55.1777 19.8204C51.9314 25.7635 67.6633 34.7532 67.6633 34.7532C53.0801 36.601 39.5956 21.5684 34.6513 25.2142C29.757 28.86 36.2495 36.5012 36.2495 36.5012C36.2495 36.5012 27.7093 27.062 22.3655 32.9552C17.0216 38.8485 29.707 47.7882 29.707 47.7882C29.707 47.7882 18.6198 40.3967 15.3236 49.5361C12.0274 58.6756 41.9929 66.2669 41.9929 66.2669C36.0997 65.1182 27.3597 66.3168 27.16 70.5619C26.9602 74.857 37.5979 76.3553 48.7351 79.5016C59.9222 82.648 71.8085 83.7967 71.8085 83.7967C75.5043 103.574 147.571 349.091 150.768 363.475C152.316 370.367 158.609 375.111 165.601 374.811C166.999 374.762 168.347 374.662 169.746 374.512C181.532 373.413 206.354 356.682 217.241 352.088L217.391 352.038C224.583 348.991 227.829 340.551 224.483 333.459C216.592 316.728 127.644 72.5097 120.153 55.6791C110.264 33.4047 91.2362 30.1085 80.2988 25.4639Z" fill="#F4EEE8"></path><path d="M164.953 375.909C157.662 375.909 151.319 370.865 149.721 363.723C148.422 357.979 135.837 314.23 121.254 263.638C100.178 190.372 74.0081 99.5771 70.9117 84.8441C68.015 84.5444 57.9266 83.2459 48.4875 80.5989C46.0902 79.9497 43.7929 79.3504 41.5455 78.801C32.4559 76.5037 25.9135 74.8556 26.1133 70.6105C26.1632 69.3119 26.8124 68.1633 27.9611 67.2643C29.4095 66.1156 31.6069 65.4164 34.0042 65.0668C26.9123 62.6197 17.3234 58.5743 14.7264 53.68C13.9273 52.1817 13.7775 50.6335 14.3268 49.1851C15.2258 46.6381 16.774 44.99 18.9715 44.2908C20.6196 43.7414 22.3676 43.8413 24.0157 44.1909C22.1179 42.0933 20.3199 39.5462 20.0203 36.9992C19.8205 35.2012 20.3699 33.6031 21.5685 32.2546C22.9669 30.7564 24.615 29.9573 26.5627 29.9573C28.5604 29.9573 30.6081 30.8063 32.3061 31.8551C31.9066 30.6565 31.6569 29.4079 31.8067 28.1593C32.0065 26.6111 32.7556 25.3126 34.0541 24.3138C36.8009 22.2661 40.9961 24.5135 46.2401 27.3603C51.3841 30.1071 57.577 33.4532 64.0695 33.8028C59.3749 30.6565 51.4341 24.3637 54.2309 19.3195C57.3273 13.676 65.5678 17.5216 74.2578 21.5669C76.3554 22.5658 78.5528 23.5646 80.7503 24.4636C82.4484 25.1628 84.3961 25.9119 86.4937 26.6111C97.531 30.6065 112.714 36.0503 121.204 55.2282C124.65 63.0192 145.476 119.254 167.5 178.736C192.671 246.857 221.239 324.019 225.484 333.008C227.232 336.704 227.381 340.849 225.933 344.645C224.485 348.44 221.588 351.437 217.842 353.035L217.693 353.085C214.047 354.633 208.603 357.68 202.86 360.876C191.123 367.419 177.839 374.86 169.848 375.609C168.449 375.759 167.051 375.859 165.653 375.909C165.453 375.909 165.203 375.909 164.953 375.909ZM37.5001 66.9646C34.3038 66.9646 30.9577 67.564 29.2596 68.9124C28.6104 69.4118 28.2608 70.0111 28.2608 70.6105C28.1609 73.0576 35.2028 74.8556 42.0449 76.6035C44.2923 77.1529 46.6396 77.7522 49.0368 78.4514C59.9742 81.5479 71.7607 82.6965 71.9105 82.6965C72.4099 82.7465 72.8095 83.0961 72.9094 83.5955C75.1068 95.332 101.876 188.325 123.401 262.989C137.984 313.631 150.57 357.38 151.868 363.223C153.317 369.616 159.06 374.011 165.603 373.711C166.951 373.661 168.299 373.562 169.648 373.412C177.189 372.712 190.824 365.071 201.761 358.978C207.804 355.582 213.048 352.686 216.794 351.087L216.943 351.037C220.14 349.689 222.587 347.142 223.836 343.896C225.084 340.649 224.934 337.104 223.436 333.957C219.141 324.868 191.822 251.003 165.353 179.585C143.328 120.103 122.502 63.9182 119.106 56.1771C110.966 37.8482 96.3324 32.6042 85.6447 28.7587C83.5471 28.0095 81.5993 27.3103 79.8014 26.5612C77.6039 25.6123 75.4065 24.6134 73.2589 23.6146C65.5179 20.0187 58.1763 16.6226 56.0787 20.4682C53.8313 24.5135 64.3192 31.7053 68.1648 33.9027C68.5644 34.1524 68.8141 34.6019 68.7142 35.0514C68.6143 35.5009 68.2647 35.8505 67.7653 35.9504C59.325 36.9992 51.484 32.804 45.1413 29.4079C40.7963 26.9607 36.9508 24.9131 35.3526 26.1117C34.5535 26.711 34.104 27.4602 34.0042 28.4091C33.7045 31.106 36.1517 34.6519 37.1505 35.8005C37.5501 36.25 37.5001 36.9492 37.0507 37.3488C36.6012 37.7483 35.902 37.6984 35.5024 37.2489C35.4525 37.1989 30.8078 32.1048 26.6127 32.1048C25.3142 32.1048 24.1655 32.6042 23.2166 33.703C22.4175 34.6019 22.0679 35.5508 22.2177 36.7495C22.6672 40.6949 28.2608 45.4394 30.4083 46.9377C30.9077 47.2873 31.0076 47.9366 30.658 48.436C30.3084 48.9354 29.6592 49.0852 29.1597 48.7356C29.1098 48.6857 23.5662 45.0898 19.6707 46.3883C18.1724 46.8878 17.1236 48.0365 16.4244 49.9343C16.1248 50.8332 16.1747 51.7322 16.7241 52.6811C19.7706 58.4245 36.2516 63.6684 42.3446 65.2167C42.9439 65.3665 43.2935 65.9159 43.1436 66.5152C42.9938 67.1145 42.4444 67.4641 41.8451 67.3642C40.4967 67.1145 38.9984 66.9646 37.5001 66.9646Z" fill="black"></path><path d="M51.9333 68.9098C51.8834 68.9098 51.7835 68.9098 51.7335 68.9098L42.7439 67.0619C42.1446 66.9621 41.7451 66.3627 41.8949 65.7634C41.9948 65.1641 42.5941 64.7646 43.1934 64.9144L52.183 66.7623C52.7823 66.8622 53.1819 67.4615 53.032 68.0608C52.8822 68.5602 52.4327 68.9098 51.9333 68.9098Z" fill="black"></path><path d="M54.3301 55.1283C54.2801 55.1283 54.2302 55.1283 54.1802 55.1283C44.0919 53.9797 36.4007 51.982 30.7073 49.1352C30.1579 48.8855 29.9581 48.1863 30.2079 47.637C30.4576 47.0876 31.1568 46.8878 31.7061 47.1375C37.0999 49.8344 44.7411 51.7822 54.43 52.9309C55.0293 52.9808 55.4787 53.5302 55.3789 54.1295C55.3789 54.7288 54.8794 55.1283 54.3301 55.1283Z" fill="black"></path><path d="M58.6761 43.9908C58.6262 43.9908 58.6262 43.9908 58.6761 43.9908C51.1848 43.6911 43.7433 41.8433 37.051 38.597C36.5017 38.3473 36.3019 37.6981 36.5516 37.1487C36.8013 36.5993 37.4506 36.3995 37.9999 36.6493C44.3926 39.7956 51.5843 41.5436 58.7261 41.8433C59.3254 41.8433 59.8248 42.3926 59.7749 42.992C59.7249 43.4914 59.2255 43.9908 58.6761 43.9908Z" fill="black"></path><path d="M76.9533 56.7757C76.5038 56.7757 76.1043 56.526 75.9545 56.0765C74.9556 53.6793 74.7059 51.0823 74.5061 48.6351C74.4063 47.5863 74.3064 46.4376 74.1066 45.3888C73.757 43.0915 72.6583 38.9962 69.412 37.5478C68.8626 37.2981 68.6129 36.6489 68.8626 36.0995C69.1124 35.5501 69.7616 35.3004 70.311 35.5501C74.5061 37.398 75.8546 42.2924 76.3041 45.0392C76.5038 46.1879 76.6037 47.2866 76.7036 48.3854C76.9533 50.8325 77.1531 53.1299 78.0021 55.2275C78.2518 55.7768 77.9522 56.4261 77.4028 56.6758C77.203 56.7757 77.0532 56.7757 76.9533 56.7757Z" fill="black"></path><path d="M85.2457 85.2458C85.0959 85.2458 84.946 85.1959 84.7962 85.1459C82.5987 84.1471 80.2514 83.4978 77.8542 83.2481C77.2549 83.1982 76.8054 82.6488 76.8554 82.0495C76.9053 81.4502 77.4547 81.0007 78.054 81.0507C80.7009 81.3503 83.2979 82.0495 85.6952 83.1482C86.2445 83.398 86.4942 84.0472 86.2445 84.5966C86.0448 84.9961 85.6452 85.2458 85.2457 85.2458Z" fill="black"></path><path d="M585.819 47.0361C597.256 43.9896 609.092 38.6458 611.489 44.9385C613.887 51.2812 597.056 57.9735 597.056 57.9735C611.24 61.8191 626.722 48.834 631.067 53.1291C635.412 57.4241 627.92 64.0665 627.92 64.0665C627.92 64.0665 637.709 55.8759 642.204 62.4683C646.699 69.0607 632.865 76.1526 632.865 76.1526C632.865 76.1526 644.901 70.3592 646.849 79.8983C648.796 89.4373 618.082 92.7335 618.082 92.7335C624.075 92.4338 632.565 94.831 632.166 99.0762C631.766 103.321 621.028 103.371 609.542 104.919C598.055 106.468 586.119 105.968 586.119 105.968C579.726 125.046 474.197 358.128 469.003 371.912C466.506 378.504 459.664 382.35 452.722 381.051C451.374 380.802 450.025 380.502 448.677 380.202C437.14 377.456 414.916 357.479 404.777 351.386L404.678 351.336C397.985 347.29 395.938 338.5 400.233 331.958C410.371 316.476 532.48 87.04 542.169 71.408C555.054 50.6819 574.382 50.0826 585.819 47.0361Z" fill="#F4EEE8"></path><path d="M455.419 382.399C454.47 382.399 453.471 382.299 452.472 382.099C451.124 381.849 449.775 381.55 448.377 381.25C440.536 379.402 428.45 370.213 417.762 362.072C412.518 358.077 407.574 354.331 404.178 352.284L404.078 352.234C400.582 350.136 398.135 346.79 397.236 342.794C396.337 338.799 397.036 334.754 399.283 331.358C404.727 323.067 443.732 250.601 478.193 186.724C508.308 130.839 536.725 78.0494 541.22 70.8577C552.307 53.0282 568.089 49.782 579.576 47.3348C581.723 46.8853 583.721 46.4858 585.519 45.9864C587.816 45.387 590.114 44.6879 592.361 43.9887C601.55 41.1919 610.191 38.5449 612.488 44.538C614.536 49.9318 605.846 55.0759 600.751 57.5231C607.244 58.0724 613.836 55.6752 619.28 53.6276C624.924 51.53 629.368 49.9318 631.766 52.3291C632.914 53.4777 633.464 54.8761 633.464 56.4243C633.414 57.6729 633.014 58.8715 632.465 59.9702C634.313 59.1712 636.41 58.5719 638.408 58.8715C640.356 59.1212 641.904 60.1201 643.053 61.8181C644.101 63.3164 644.401 64.9645 643.952 66.7125C643.302 69.2096 641.205 71.507 639.007 73.3049C640.705 73.1551 642.453 73.3548 644.002 74.104C646.049 75.1028 647.348 76.9507 647.897 79.5976C648.197 81.1459 647.847 82.6441 646.848 83.9926C643.602 88.4874 633.514 91.1344 626.222 92.4828C628.519 93.132 630.617 94.1309 631.916 95.4793C632.914 96.5281 633.414 97.7767 633.264 99.0253C632.864 103.27 626.122 104.02 616.833 105.018C614.536 105.268 612.138 105.518 609.691 105.867C599.952 107.166 589.764 107.016 586.867 106.916C581.723 121.1 543.168 207.4 512.104 276.97C490.628 325.065 472.1 366.567 470.002 372.111C467.705 378.503 461.811 382.399 455.419 382.399ZM586.118 48.0839C584.27 48.5834 582.223 48.9829 580.025 49.4823C568.888 51.8296 553.656 54.976 543.068 72.0064C538.623 79.1482 510.206 131.937 480.09 187.773C443.982 254.796 406.625 324.166 401.131 332.556C399.234 335.453 398.584 338.949 399.383 342.345C400.182 345.741 402.23 348.588 405.227 350.386L405.326 350.436C408.822 352.533 413.617 356.179 419.111 360.324C429.099 367.916 441.535 377.355 448.926 379.103C450.275 379.402 451.623 379.702 452.922 379.952C459.314 381.15 465.657 377.604 467.954 371.511C470.052 365.918 488.631 324.366 510.106 276.221C541.819 205.253 581.274 116.905 585.069 105.568C585.219 105.118 585.669 104.769 586.168 104.819C586.268 104.819 598.154 105.318 609.391 103.77C611.839 103.42 614.286 103.17 616.583 102.921C623.575 102.172 630.817 101.373 631.066 98.9254C631.116 98.2761 630.867 97.6768 630.317 97.0775C628.12 94.7802 622.277 93.5815 618.131 93.7813C617.582 93.8312 617.033 93.3818 616.983 92.7825C616.933 92.1831 617.382 91.6837 617.982 91.5838C624.224 90.8846 641.255 87.988 645.1 82.744C645.75 81.8451 645.949 80.996 645.75 80.0471C645.35 78.0494 644.451 76.7509 643.053 76.0517C639.956 74.5535 634.962 76.2515 633.314 77.0506C632.765 77.3003 632.115 77.1005 631.866 76.5512C631.616 76.0018 631.816 75.3525 632.365 75.1028C634.662 73.9042 640.905 69.9587 641.904 66.1631C642.204 65.0644 642.004 64.0156 641.355 63.0167C640.556 61.8181 639.507 61.1689 638.208 60.9691C634.063 60.4197 628.769 64.7647 628.669 64.8147C628.22 65.2142 627.521 65.1643 627.121 64.6648C626.721 64.2154 626.771 63.5162 627.221 63.1166C628.32 62.1178 631.266 58.9215 631.316 56.2246C631.316 55.2757 631.017 54.4766 630.267 53.7274C628.819 52.2791 624.774 53.7774 620.079 55.5254C613.337 58.0225 604.947 61.069 596.756 58.8715C596.307 58.7716 595.957 58.3221 595.957 57.8727C595.907 57.4232 596.207 56.9737 596.656 56.7739C600.751 55.1258 612.138 49.4823 610.49 45.1373C608.942 41.0421 601.201 43.3894 593.06 45.8865C590.763 46.7854 588.416 47.4846 586.118 48.0839Z" fill="black"></path><path d="M608.044 94.0312C607.445 94.0312 606.995 93.5817 606.945 92.9824C606.895 92.3831 607.345 91.8337 607.994 91.8337L617.183 91.2344C617.783 91.2344 618.332 91.6339 618.332 92.2832C618.382 92.8825 617.933 93.4318 617.283 93.4318L608.094 94.0312H608.044Z" fill="black"></path><path d="M610.841 80.0475C609.742 80.0475 608.643 80.0475 607.544 79.9976C606.945 79.9976 606.446 79.4982 606.496 78.8489C606.496 78.2496 607.045 77.7502 607.644 77.8001C617.383 78.0498 625.224 77.2008 630.967 75.253C631.517 75.0533 632.166 75.3529 632.366 75.9522C632.566 76.5016 632.266 77.1509 631.667 77.3506C626.223 79.1486 619.431 80.0475 610.841 80.0475Z" fill="black"></path><path d="M610.142 68.6607C608.344 68.6607 606.496 68.5608 604.698 68.361C604.099 68.3111 603.649 67.7617 603.699 67.1624C603.749 66.5631 604.298 66.1136 604.898 66.1636C611.99 66.9127 619.331 66.1136 626.123 63.9162C626.723 63.7164 627.322 64.066 627.522 64.6154C627.721 65.2147 627.372 65.814 626.822 66.0137C621.529 67.7617 615.835 68.6607 610.142 68.6607Z" fill="black"></path><path d="M584.973 78.4975C584.773 78.4975 584.573 78.4476 584.423 78.3477C583.924 78.0481 583.724 77.3489 584.024 76.8494C585.172 74.9017 585.722 72.6543 586.271 70.257C586.521 69.1583 586.82 68.0596 587.12 66.9608C587.919 64.2639 589.967 59.6193 594.362 58.3707C594.961 58.2209 595.56 58.5705 595.71 59.1199C595.86 59.7192 595.51 60.3185 594.961 60.4683C591.565 61.4172 589.917 65.3127 589.218 67.5602C588.918 68.6089 588.668 69.6577 588.419 70.7065C587.819 73.1537 587.22 75.6508 585.921 77.8982C585.722 78.2978 585.322 78.4975 584.973 78.4975Z" fill="black"></path><path d="M572.785 105.519C572.335 105.519 571.886 105.219 571.736 104.719C571.536 104.12 571.886 103.521 572.485 103.371C575.032 102.622 577.679 102.272 580.326 102.372C580.926 102.372 581.425 102.922 581.375 103.521C581.375 104.12 580.826 104.62 580.226 104.57C577.779 104.47 575.382 104.769 573.085 105.519C572.985 105.519 572.885 105.519 572.785 105.519Z" fill="black"></path><path d="M423.257 264.238L399.535 319.075C392.043 336.455 374.713 347.492 355.835 347.043C329.265 346.394 297.602 345.195 271.382 343.048C253.103 341.549 237.022 330.412 229.131 313.831L210.902 275.525L131.094 321.422C131.094 321.422 154.866 380.754 155.715 386.098C159.96 414.166 151.171 529.033 151.171 529.033C151.171 529.033 300.798 567.689 453.273 554.754C453.273 554.754 457.218 482.087 457.418 436.939C457.518 419.21 461.463 401.68 469.104 385.648L504.414 311.484L423.257 264.238Z" fill="#BAC3D8"></path><path d="M344.398 395.887C322.623 395.887 304.943 414.815 304.943 438.188C304.943 438.388 304.893 438.737 304.793 439.237C304.693 438.737 304.643 438.388 304.643 438.188C304.643 414.815 286.964 395.887 265.189 395.887C243.414 395.887 225.734 414.815 225.734 438.188C225.734 498.668 304.594 520.194 304.594 520.194C304.594 520.194 304.643 520.094 304.743 519.994C304.843 520.144 304.893 520.194 304.893 520.194C304.893 520.194 383.752 498.618 383.752 438.188C383.852 414.815 366.173 395.887 344.398 395.887Z" fill="white"></path><path d="M292.207 316.475L290.359 342.645L314.382 374.907L341.8 344.892L338.304 310.781L292.207 316.475Z" fill="white"></path><path d="M314.384 376.008H314.334C313.985 376.008 313.685 375.808 313.485 375.559L289.463 343.296C289.313 343.096 289.213 342.846 289.263 342.547L291.161 316.377C291.211 315.877 291.61 315.428 292.11 315.378L338.207 309.685C338.506 309.635 338.806 309.735 339.006 309.934C339.255 310.134 339.405 310.384 339.405 310.683L342.901 344.844C342.951 345.144 342.851 345.443 342.602 345.693L315.183 375.659C314.983 375.858 314.684 376.008 314.384 376.008ZM291.46 342.297L314.484 373.161L340.704 344.544L337.358 311.982L293.258 317.426L291.46 342.297Z" fill="black"></path><path d="M265.039 342.099C265.039 342.099 265.938 371.815 309.388 376.31C352.838 380.805 365.573 347.643 365.573 347.643L346.795 342.099L341.851 332.66L329.715 334.908L315.731 368.569L302.396 333.709L288.462 332.71L283.268 340.102L265.039 342.099Z" fill="white"></path><path d="M315.733 369.668C315.284 369.668 314.884 369.368 314.684 368.969L301.649 334.758L289.014 333.859L284.22 340.801C283.87 341.301 283.171 341.401 282.671 341.101C282.172 340.751 282.072 340.052 282.372 339.553L287.516 332.111C287.716 331.812 288.115 331.612 288.515 331.662L302.449 332.661C302.898 332.711 303.248 332.96 303.397 333.36L315.733 365.623L328.618 334.558C328.768 334.209 329.068 333.959 329.417 333.909L341.603 331.612C342.053 331.512 342.552 331.762 342.752 332.161L347.696 341.6C347.996 342.15 347.796 342.799 347.247 343.099C346.698 343.398 346.048 343.199 345.749 342.649L341.154 333.909L330.366 335.907L316.632 368.969C316.582 369.368 316.183 369.668 315.733 369.668Z" fill="black"></path><path d="M322.724 326.113C351.042 316.124 348.744 277.519 343.051 257.292C343.051 257.292 327.918 255.744 319.678 235.617C319.678 235.617 312.936 262.237 269.336 276.72C269.336 276.72 281.422 340.696 322.724 326.113Z" fill="white"></path><path d="M310.939 329.412C305.745 329.412 300.85 328.113 296.256 325.466C275.33 313.43 268.537 278.42 268.238 276.922C268.138 276.373 268.438 275.873 268.987 275.674C311.438 261.59 318.53 235.62 318.58 235.32C318.68 234.871 319.079 234.521 319.579 234.521C320.028 234.471 320.478 234.771 320.677 235.22C328.568 254.548 343.002 256.246 343.151 256.246C343.601 256.296 344.001 256.596 344.1 257.045C349.644 276.772 352.391 316.876 323.075 327.214C318.879 328.663 314.834 329.412 310.939 329.412ZM270.635 277.422C271.884 283.115 279.175 313.031 297.404 323.519C304.796 327.764 313.236 328.313 322.375 325.067C349.794 315.378 347.397 277.522 342.203 258.244C339.106 257.694 327.37 254.498 319.828 238.566C316.832 245.808 305.844 265.435 270.635 277.422Z" fill="black"></path><path d="M320.175 369.664C319.876 369.664 319.626 369.564 319.376 369.365C318.927 368.915 318.927 368.216 319.376 367.816L333.71 353.583C333.909 353.383 334.209 353.233 334.559 353.283C334.858 353.283 335.158 353.433 335.358 353.683L341.301 360.924L345.546 344.693C345.696 344.094 346.295 343.744 346.894 343.894C347.494 344.044 347.843 344.643 347.694 345.242L342.899 363.521C342.799 363.921 342.5 364.221 342.05 364.32C341.651 364.42 341.251 364.271 340.951 363.921L334.409 355.93L320.974 369.315C320.725 369.514 320.475 369.664 320.175 369.664Z" fill="black"></path><path d="M309.686 369.665C309.386 369.665 309.136 369.565 308.887 369.365L295.452 355.981L288.91 363.972C288.66 364.271 288.21 364.421 287.811 364.371C287.411 364.271 287.112 363.972 286.962 363.572L282.167 345.293C282.018 344.694 282.367 344.095 282.966 343.945C283.566 343.795 284.165 344.145 284.315 344.744L288.56 360.975L294.503 353.733C294.703 353.484 295.003 353.334 295.302 353.334C295.602 353.284 295.902 353.434 296.151 353.634L310.435 367.867C310.884 368.317 310.884 368.966 310.435 369.415C310.285 369.515 309.985 369.665 309.686 369.665Z" fill="black"></path></g></svg>`);
}
const _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-bonus/SectionBonusPicture.vue");
  return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
const SectionBonusPicture = /* @__PURE__ */ _export_sfc(_sfc_main$28, [["ssrRender", _sfc_ssrRender$K]]);
const SectionBonus_vue_vue_type_style_index_0_scoped_7533d7a4_lang = "";
const _sfc_main$27 = {
  __name: "SectionBonus",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useModalsStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-bonus" }, _attrs))} data-v-7533d7a4>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-bonus" data-v-7533d7a4${_scopeId}>`);
            _push2(ssrRenderComponent(BigBadge, { style: { "background": "#b2977b" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Подарочный сертификат`);
                } else {
                  return [
                    createTextVNode("Подарочный сертификат")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-content" data-v-7533d7a4${_scopeId}><h5 class="card-heading h-l" data-v-7533d7a4${_scopeId}> Сделайте приятный сюрприз близкому человеку </h5>`);
            _push2(ssrRenderComponent(SectionBonusList, { class: "card-list" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MButtonBig, {
              onClick: unref(store).openModalBonuse
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Оформить сертификат `);
                } else {
                  return [
                    createTextVNode(" Оформить сертификат ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(SectionBonusPicture, { class: "card-picture" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-bonus" }, [
                createVNode(BigBadge, { style: { "background": "#b2977b" } }, {
                  default: withCtx(() => [
                    createTextVNode("Подарочный сертификат")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "card-content" }, [
                  createVNode("h5", { class: "card-heading h-l" }, " Сделайте приятный сюрприз близкому человеку "),
                  createVNode(SectionBonusList, { class: "card-list" }),
                  createVNode(MButtonBig, {
                    onClick: unref(store).openModalBonuse
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Оформить сертификат ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(SectionBonusPicture, { class: "card-picture" })
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
const _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-bonus/SectionBonus.vue");
  return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
const SectionBonus = /* @__PURE__ */ _export_sfc(_sfc_main$27, [["__scopeId", "data-v-7533d7a4"]]);
const _imports_0$k = "/assets/photo-bd6d849b.png";
const SectionHelpPicture_vue_vue_type_style_index_0_scoped_dad139f9_lang = "";
const _sfc_main$26 = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture" }, _attrs))} data-v-dad139f9><p class="picture-text lg" data-v-dad139f9>Ольга Заика | Главный врач, врач-косметолог</p><p class="picture-text sm" data-v-dad139f9> Ольга Заика<br data-v-dad139f9>Главный врач, врач-косметолог </p><img class="picture-photo"${ssrRenderAttr("src", _imports_0$k)} alt="" data-v-dad139f9></div>`);
}
const _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-help/SectionHelpPicture.vue");
  return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
const SectionHelpPicture = /* @__PURE__ */ _export_sfc(_sfc_main$26, [["ssrRender", _sfc_ssrRender$J], ["__scopeId", "data-v-dad139f9"]]);
const _sfc_main$25 = {};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "22",
    viewBox: "0 0 25 22",
    fill: "none"
  }, _attrs))}><path d="M23.0748 0.21168C22.7784 0.233244 22.4875 0.302779 22.2134 0.417573H22.2097C21.9465 0.521905 20.6955 1.04818 18.7935 1.8459L11.9778 4.71641C7.08711 6.77534 2.27955 8.80288 2.27955 8.80288L2.33679 8.78073C2.33679 8.78073 2.00533 8.88967 1.6591 9.12696C1.4452 9.26307 1.26114 9.44116 1.11805 9.65046C0.948167 9.89975 0.81152 10.2811 0.862301 10.6753C0.945397 11.3419 1.3775 11.7417 1.68772 11.9624C2.00164 12.1858 2.30078 12.2901 2.30078 12.2901H2.30817L6.81659 13.809C7.01879 14.458 8.19045 18.31 8.47205 19.1973C8.63824 19.7272 8.79982 20.0587 9.00202 20.3117C9.09988 20.4409 9.21437 20.549 9.35194 20.6358C9.42346 20.6774 9.49972 20.7102 9.57907 20.7336L9.53291 20.7225C9.54676 20.7262 9.55784 20.7373 9.56799 20.741C9.60492 20.7512 9.62985 20.7549 9.67694 20.7622C10.3906 20.9783 10.964 20.5351 10.964 20.5351L10.9963 20.5093L13.6582 18.0856L18.1195 21.5083L18.2211 21.5517C19.1508 21.9598 20.0926 21.7326 20.5902 21.3319C21.0916 20.9284 21.2864 20.4123 21.2864 20.4123L21.3187 20.3292L24.7663 2.66763C24.8641 2.23184 24.8891 1.82374 24.781 1.42765C24.6696 1.02678 24.4124 0.68201 24.0599 0.460968C23.764 0.281033 23.4207 0.194182 23.0748 0.21168ZM22.9815 2.10442C22.9778 2.16259 22.9889 2.15613 22.9631 2.26784V2.278L19.5478 19.7559C19.5331 19.7808 19.5081 19.8353 19.4398 19.8897C19.3678 19.947 19.3105 19.983 19.0105 19.8639L13.5538 15.6805L10.2577 18.6848L10.9502 14.2623L19.8654 5.95269C20.2329 5.61107 20.1101 5.53906 20.1101 5.53906C20.136 5.11988 19.5552 5.41626 19.5552 5.41626L8.31324 12.3806L8.30955 12.3622L2.92124 10.5479V10.5442L2.90739 10.5414C2.91683 10.5383 2.92608 10.5346 2.93508 10.5304L2.96463 10.5156L2.99325 10.5054C2.99325 10.5054 7.80451 8.47789 12.6952 6.41895C15.1437 5.38764 17.6108 4.34894 19.5081 3.54752C20.6334 3.07388 21.7598 2.603 22.8874 2.13489C22.9631 2.10535 22.9271 2.10442 22.9815 2.10442Z" fill="white"></path></svg>`);
}
const _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconTelegram2.vue");
  return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
const IconTelegram2 = /* @__PURE__ */ _export_sfc(_sfc_main$25, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$24 = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none"
  }, _attrs))}><path d="M21.2056 4.48034C20.0999 3.36906 18.7829 2.48795 17.3314 1.88841C15.8799 1.28887 14.323 0.982905 12.7514 0.988353C6.16644 0.988353 0.799608 6.32834 0.799608 12.8803C0.799608 14.9803 1.35438 17.0203 2.39157 18.8203L0.703125 24.9883L7.03478 23.3323C8.78353 24.2803 10.7494 24.7843 12.7514 24.7843C19.3363 24.7843 24.7031 19.4443 24.7031 12.8923C24.7031 9.71233 23.4609 6.72434 21.2056 4.48034ZM12.7514 22.7683C10.9664 22.7683 9.2177 22.2883 7.68604 21.3883L7.32423 21.1723L3.56142 22.1563L4.56242 18.5083L4.32122 18.1363C3.32955 16.5607 2.80299 14.7394 2.80162 12.8803C2.80162 7.43233 7.26393 2.99235 12.7393 2.99235C15.3926 2.99235 17.8891 4.02434 19.7584 5.89634C20.684 6.81309 21.4175 7.90353 21.9165 9.10444C22.4154 10.3054 22.6698 11.5929 22.6649 12.8923C22.6891 18.3403 18.2267 22.7683 12.7514 22.7683ZM18.2026 15.3763C17.9011 15.2323 16.4298 14.5123 16.1644 14.4043C15.887 14.3083 15.6941 14.2603 15.4891 14.5483C15.284 14.8483 14.7172 15.5203 14.5483 15.7123C14.3795 15.9163 14.1986 15.9403 13.8971 15.7843C13.5956 15.6403 12.6308 15.3163 11.4971 14.3083C10.6046 13.5163 10.0137 12.5443 9.83277 12.2443C9.66393 11.9443 9.80865 11.7883 9.96544 11.6323C10.0981 11.5003 10.2669 11.2843 10.4117 11.1163C10.5564 10.9483 10.6167 10.8163 10.7132 10.6243C10.8097 10.4203 10.7614 10.2523 10.6891 10.1083C10.6167 9.96433 10.0137 8.50033 9.77247 7.90033C9.53126 7.32433 9.278 7.39633 9.09709 7.38433H8.5182C8.31317 7.38433 7.99961 7.45633 7.72222 7.75633C7.45689 8.05633 6.68503 8.77633 6.68503 10.2403C6.68503 11.7043 7.7584 13.1203 7.90312 13.3123C8.04785 13.5163 10.0137 16.5163 13.0046 17.8003C13.7162 18.1123 14.271 18.2923 14.7051 18.4243C15.4167 18.6523 16.0679 18.6163 16.5865 18.5443C17.1654 18.4603 18.3594 17.8243 18.6006 17.1283C18.8539 16.4323 18.8539 15.8443 18.7695 15.7123C18.685 15.5803 18.5041 15.5203 18.2026 15.3763Z" fill="white"></path></svg>`);
}
const _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconWhatsApp2.vue");
  return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
const IconWhatsApp2 = /* @__PURE__ */ _export_sfc(_sfc_main$24, [["ssrRender", _sfc_ssrRender$H]]);
const _sfc_main$23 = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1400",
    height: "444",
    viewBox: "0 0 1400 444",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_336_3567)"><ellipse cx="700" cy="222.488" rx="600" ry="121.5" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_336_3567" x="0" y="0.988281" width="1400" height="443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_336_3567"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-help/CardShadow.vue");
  return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
const CardShadow = /* @__PURE__ */ _export_sfc(_sfc_main$23, [["ssrRender", _sfc_ssrRender$G]]);
const SectionHelp_vue_vue_type_style_index_0_scoped_7f975b10_lang = "";
const _sfc_main$22 = {
  __name: "SectionHelp",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-help" }, _attrs))} data-v-7f975b10>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrapper" data-v-7f975b10${_scopeId}><div class="card-help" data-v-7f975b10${_scopeId}><div class="card-left" data-v-7f975b10${_scopeId}><h5 class="h-l card-heading" data-v-7f975b10${_scopeId}>Остались вопросы?</h5><h6 class="card-text" data-v-7f975b10${_scopeId}> Пиши или звони напрямую нам. <br data-v-7f975b10${_scopeId}> Мы открыты, и на связи в любое разумное время. </h6><div class="card-buttons" data-v-7f975b10${_scopeId}><a class="button-link button-link-tg" href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-7f975b10${_scopeId}> Написать в Телеграм `);
            _push2(ssrRenderComponent(IconTelegram2, null, null, _parent2, _scopeId));
            _push2(`</a><a class="button-link button-link-wa" href="https://t.me/FaceConcept_bot" target="_blank" rel="noopener noreferrer" data-v-7f975b10${_scopeId}> Написать в WhatsApp `);
            _push2(ssrRenderComponent(IconWhatsApp2, null, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
            _push2(ssrRenderComponent(SectionHelpPicture, { class: "card-picture" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(CardShadow, { class: "card-shadow" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrapper" }, [
                createVNode("div", { class: "card-help" }, [
                  createVNode("div", { class: "card-left" }, [
                    createVNode("h5", { class: "h-l card-heading" }, "Остались вопросы?"),
                    createVNode("h6", { class: "card-text" }, [
                      createTextVNode(" Пиши или звони напрямую нам. "),
                      createVNode("br"),
                      createTextVNode(" Мы открыты, и на связи в любое разумное время. ")
                    ]),
                    createVNode("div", { class: "card-buttons" }, [
                      createVNode("a", {
                        class: "button-link button-link-tg",
                        href: "https://wa.me/79774122010",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }, [
                        createTextVNode(" Написать в Телеграм "),
                        createVNode(IconTelegram2)
                      ]),
                      createVNode("a", {
                        class: "button-link button-link-wa",
                        href: "https://t.me/FaceConcept_bot",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }, [
                        createTextVNode(" Написать в WhatsApp "),
                        createVNode(IconWhatsApp2)
                      ])
                    ])
                  ]),
                  createVNode(SectionHelpPicture, { class: "card-picture" })
                ]),
                createVNode(CardShadow, { class: "card-shadow" })
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
const _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-help/SectionHelp.vue");
  return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
const SectionHelp = /* @__PURE__ */ _export_sfc(_sfc_main$22, [["__scopeId", "data-v-7f975b10"]]);
const SectionPriceItem_vue_vue_type_style_index_0_scoped_d2e2a353_lang = "";
const _sfc_main$21 = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "item" }, _attrs))} data-v-d2e2a353><div class="item-part" data-v-d2e2a353><div data-v-d2e2a353><p class="item-title" data-v-d2e2a353>Код услуги</p><h6 class="item-text" data-v-d2e2a353>А22.30.022</h6></div><div data-v-d2e2a353><p class="item-title" data-v-d2e2a353>Наименование</p><h6 class="item-text" data-v-d2e2a353>Наименование процедуры</h6></div></div><div class="item-part" data-v-d2e2a353><div data-v-d2e2a353><p class="item-title" data-v-d2e2a353>Время процедуры</p><h6 class="item-text" data-v-d2e2a353>120 мин</h6></div><div data-v-d2e2a353><p class="item-title" data-v-d2e2a353>Стоимость</p><h6 class="item-text" data-v-d2e2a353>44 900₽</h6></div></div></div>`);
}
const _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-price/SectionPriceItem.vue");
  return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
const SectionPriceItem = /* @__PURE__ */ _export_sfc(_sfc_main$21, [["ssrRender", _sfc_ssrRender$F], ["__scopeId", "data-v-d2e2a353"]]);
const SectionProcedures_vue_vue_type_style_index_0_scoped_b2e1f1c9_lang = "";
const _sfc_main$20 = {
  __name: "SectionProcedures",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-procedures" }, _attrs))} data-v-b2e1f1c9>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-b2e1f1c9${_scopeId}>Процедуры</h3><div class="section-procedures-table" data-v-b2e1f1c9${_scopeId}>`);
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Процедуры"),
              createVNode("div", { class: "section-procedures-table" }, [
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem)
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
const _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProcedures.vue");
  return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
const SectionProcedures = /* @__PURE__ */ _export_sfc(_sfc_main$20, [["__scopeId", "data-v-b2e1f1c9"]]);
const _imports_0$j = "/assets/photo-4c9e2630.png";
const _sfc_main$1$ = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="Group 3435"><rect id="Rectangle 187" width="12" height="12" rx="3" fill="#6D6364"></rect><path id="Rectangle 188" d="M8 2.5C6.067 2.5 4.5 4.067 4.5 6C4.5 7.933 6.067 9.5 8 9.5H12C12.8284 9.5 13.5 8.82843 13.5 8V4C13.5 3.17157 12.8284 2.5 12 2.5H8Z" fill="#6D6364" stroke="white"></path><circle id="Ellipse 334" cx="8" cy="6" r="1" fill="white"></circle></g></svg>`);
}
const _sfc_setup$1$ = _sfc_main$1$.setup;
_sfc_main$1$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconPay.vue");
  return _sfc_setup$1$ ? _sfc_setup$1$(props, ctx) : void 0;
};
const IconPay = /* @__PURE__ */ _export_sfc(_sfc_main$1$, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$1_ = {};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    style: { "display": "block" },
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8.52941 4.47059C8.52941 4.1782 8.29238 3.94118 8 3.94118C7.70762 3.94118 7.47059 4.1782 7.47059 4.47059V8C7.47059 8.18254 7.56461 8.35216 7.71941 8.44894L9.83706 9.77247C10.085 9.92741 10.4116 9.85209 10.5666 9.60412C10.7215 9.35614 10.6462 9.02953 10.3982 8.87459L8.52941 7.70656V4.47059Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$1_ = _sfc_main$1_.setup;
_sfc_main$1_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconClock.vue");
  return _sfc_setup$1_ ? _sfc_setup$1_(props, ctx) : void 0;
};
const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$1_, [["ssrRender", _sfc_ssrRender$D]]);
const CardInfo_vue_vue_type_style_index_0_scoped_8064c09e_lang = "";
const _sfc_main$1Z = {
  __name: "CardInfo",
  __ssrInlineRender: true,
  props: ["title", "icon", "text"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "info" }, _attrs))} data-v-8064c09e>`);
      if (props.title) {
        _push(`<div class="info-title" data-v-8064c09e>`);
        if (__props.icon === "pay") {
          _push(ssrRenderComponent(IconPay, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.icon === "time") {
          _push(ssrRenderComponent(IconClock, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.text) {
        _push(`<h6 class="h-md" data-v-8064c09e>${ssrInterpolate(props.text)}</h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1Z = _sfc_main$1Z.setup;
_sfc_main$1Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardInfo.vue");
  return _sfc_setup$1Z ? _sfc_setup$1Z(props, ctx) : void 0;
};
const CardInfo$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1Z, [["__scopeId", "data-v-8064c09e"]]);
const _sfc_main$1Y = {};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "140",
    height: "80",
    viewBox: "0 0 140 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="140" height="80" rx="40" fill="#AE8C8E"></rect><path d="M57.9811 52.0209C57.5461 51.5859 57.3295 51.0729 57.3311 50.4818C57.3327 49.8906 57.5522 49.3774 57.9895 48.9421L75.2393 31.6924L60.2303 31.7335C59.6146 31.7352 59.0953 31.5247 58.6727 31.102C58.25 30.6793 58.04 30.1606 58.0427 29.5459C58.0444 28.9301 58.251 28.4164 58.6627 28.0048C59.0743 27.5932 59.588 27.3865 60.2037 27.3848L80.5236 27.3291C80.8315 27.3283 81.1069 27.3855 81.3498 27.5008C81.5927 27.6161 81.817 27.7756 82.0227 27.9793C82.2274 28.184 82.3935 28.4149 82.5211 28.6722C82.6487 28.9294 82.6993 29.1981 82.6729 29.4784L82.6172 49.7983C82.6155 50.414 82.4088 50.9277 81.9972 51.3393C81.5856 51.751 81.0719 51.9576 80.4561 51.9593C79.8404 51.961 79.3211 51.7505 78.8985 51.3278C78.4758 50.9051 78.2658 50.3864 78.2685 49.7717L78.3096 34.7627L61.0599 52.0125C60.6225 52.4498 60.1083 52.6693 59.5172 52.6709C58.926 52.6725 58.414 52.4559 57.9811 52.0209Z" fill="white"></path></svg>`);
}
const _sfc_setup$1Y = _sfc_main$1Y.setup;
_sfc_main$1Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconCardLink.vue");
  return _sfc_setup$1Y ? _sfc_setup$1Y(props, ctx) : void 0;
};
const IconCardLink = /* @__PURE__ */ _export_sfc(_sfc_main$1Y, [["ssrRender", _sfc_ssrRender$C]]);
const CardLink_vue_vue_type_style_index_0_scoped_794ec6da_lang = "";
const _sfc_main$1X = {
  __name: "CardLink",
  __ssrInlineRender: true,
  props: ["path"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "card-link",
        href: props.path
      }, _attrs))} data-v-794ec6da>`);
      _push(ssrRenderComponent(IconCardLink, { class: "card-link-icon" }, null, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup$1X = _sfc_main$1X.setup;
_sfc_main$1X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardLink.vue");
  return _sfc_setup$1X ? _sfc_setup$1X(props, ctx) : void 0;
};
const CardLink = /* @__PURE__ */ _export_sfc(_sfc_main$1X, [["__scopeId", "data-v-794ec6da"]]);
const SectionDevicesCard_vue_vue_type_style_index_0_scoped_d31b2c5c_lang = "";
const _sfc_main$1W = {
  __name: "SectionDevicesCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-devices-big" }, _attrs))} data-v-d31b2c5c><div class="card-content" data-v-d31b2c5c><div class="card-info" data-v-d31b2c5c><h5 class="h-md" data-v-d31b2c5c>Skinova Pro</h5><p class="text-sm" data-v-d31b2c5c> Клеточная реконструкция высокочастотным ультразвуком. Единственная технология, регулирующая уровень кавеолина — структурного белка клеточной мембраны, который находится практически во всех клетках кожи. </p><div class="card-price-and-link" data-v-d31b2c5c>`);
      _push(ssrRenderComponent(CardInfo$1, {
        class: "card-price",
        title: "Стоимость 1 процедуры",
        icon: "pay",
        text: "от 4 500₽"
      }, null, _parent));
      _push(ssrRenderComponent(CardLink, { path: "youtube.com" }, null, _parent));
      _push(`</div></div><div class="card-img-wrapper" data-v-d31b2c5c><img${ssrRenderAttr("src", _imports_0$j)} class="card-img" alt="" data-v-d31b2c5c></div></div></div>`);
    };
  }
};
const _sfc_setup$1W = _sfc_main$1W.setup;
_sfc_main$1W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-devices/SectionDevicesCard.vue");
  return _sfc_setup$1W ? _sfc_setup$1W(props, ctx) : void 0;
};
const SectionDevicesCard$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1W, [["__scopeId", "data-v-d31b2c5c"]]);
const SectionDevices_vue_vue_type_style_index_0_scoped_59e56ef1_lang = "";
const _sfc_main$1V = {
  __name: "SectionDevices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-devices" }, _attrs))} data-v-59e56ef1>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl heading" data-v-59e56ef1${_scopeId}>Аппараты AntiAcne Concept</h3>`);
            _push2(ssrRenderComponent(SectionDevicesCard$1, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard$1, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard$1, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard$1, { class: "section-devices-card" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "h-xl heading" }, "Аппараты AntiAcne Concept"),
              createVNode(SectionDevicesCard$1, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard$1, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard$1, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard$1, { class: "section-devices-card" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$1V = _sfc_main$1V.setup;
_sfc_main$1V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-devices/SectionDevices.vue");
  return _sfc_setup$1V ? _sfc_setup$1V(props, ctx) : void 0;
};
const SectionDevices$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1V, [["__scopeId", "data-v-59e56ef1"]]);
const _imports_0$i = "/assets/banner-eb398e28.png";
const BreadCrumbs_vue_vue_type_style_index_0_scoped_5fbec516_lang = "";
const _sfc_main$1U = {
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
const _sfc_setup$1U = _sfc_main$1U.setup;
_sfc_main$1U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/BreadCrumbs.vue");
  return _sfc_setup$1U ? _sfc_setup$1U(props, ctx) : void 0;
};
const BreadCrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$1U, [["__scopeId", "data-v-5fbec516"]]);
const SectionBannerBadges_vue_vue_type_style_index_0_scoped_cf1a4231_lang = "";
const _sfc_main$1T = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "badge-group" }, _attrs))} data-v-cf1a4231><svg xmlns="http://www.w3.org/2000/svg" width="393" height="203" viewBox="0 0 393 203" fill="none" data-v-cf1a4231><rect x="8.27148" y="90" width="361" height="70" rx="20" transform="rotate(6.78616 8.27148 90)" fill="#BFB0E9" data-v-cf1a4231></rect><path d="M26.9414 127.888L27.242 125.361C28.9152 111.301 42.0633 107.645 56.0378 108.824L55.7181 115.167C43.9531 114.105 35.6473 116.066 33.1896 123.314C36.451 121.092 40.6181 118.977 45.5751 119.567C52.2003 120.356 56.9159 125.412 55.997 133.134C55.203 139.807 48.233 145.165 39.8442 144.166C31.1217 143.128 25.9885 135.895 26.9414 127.888ZM43.5542 125.176C40.3607 124.796 36.6351 126.044 33.3374 128.165L33.1842 129.452C32.7021 133.504 35.7834 138.076 40.5021 138.637C45.6022 139.244 49.1847 135.948 49.6101 132.374C50.0922 128.322 47.7963 125.68 43.5542 125.176ZM74.5376 142.349C77.7787 142.735 80.8076 142.467 84.4016 141.106L85.6706 146.284C82.2843 147.525 77.6281 148.469 73.243 147.947C64.3776 146.892 59.1842 140.57 60.035 133.421C60.9822 125.461 68.3176 121.5 76.2775 122.447C83.5224 123.309 88.3945 128.675 87.6288 135.109C87.504 136.158 87.2306 137.237 86.8142 138.299L66.3188 135.86C66.8103 139.448 70.0572 141.816 74.5376 142.349ZM75.2666 127.693C71.1675 127.205 68.3112 128.46 67.0119 131.254L81.454 132.973C81.169 130.087 78.9844 128.135 75.2666 127.693ZM97.7183 140.225L98.2912 135.411L102.2 135.876C106.442 136.381 108.324 135.59 108.506 134.065C108.653 132.826 107.242 131.691 104.286 131.339C101.331 130.988 97.1914 131.655 93.8391 132.61L92.7164 127.014C95.9201 126.09 100.268 125.302 104.939 125.858C111.469 126.635 115.294 130.232 114.807 134.331C114.568 136.333 113.094 137.753 110.855 138.695C113.442 140.115 115.15 142.01 114.872 144.345C114.231 149.731 107.677 151.997 101.433 151.254C97.2388 150.754 92.5723 148.942 89.667 146.953L92.2564 141.847C95.3104 143.806 99.052 145.266 102.198 145.641C105.773 146.066 108.342 145.598 108.557 143.787C108.716 142.453 107.251 141.36 103.39 140.9L97.7183 140.225ZM147.758 136.561C143.182 136.016 139.438 138.229 138.922 142.567C138.378 147.142 141.862 150.361 146.819 150.95C150.298 151.364 152.944 150.664 156.254 149.656L157.523 154.834C154.078 156.165 149.814 157.059 145.334 156.526C136.468 155.471 131.704 149.2 132.555 142.051C133.502 134.091 140.837 130.13 148.797 131.077C152.753 131.548 156.268 132.884 159.009 134.226L156.814 139.668C153.684 137.943 150.999 136.946 147.758 136.561ZM161.167 138.93L161.819 133.448L185.985 136.324L185.333 141.805L176.372 140.739L174.188 159.09L167.944 158.347L170.128 139.996L161.167 138.93ZM206.967 137.999C213.496 138.776 218.411 144.195 217.492 151.916C216.641 159.066 209.938 164.214 201.93 163.261C199.309 162.949 196.133 161.604 193.883 160.611L192.425 172.861L186.134 172.112L190.331 136.841L196.622 137.59L195.993 142.881C197.957 139.779 202.105 137.42 206.967 137.999ZM204.41 143.64C200.168 143.136 195.715 145.216 195.193 149.601L194.512 155.321C197.133 156.454 199.728 157.392 202.683 157.743C206.783 158.231 210.676 155.166 211.153 151.162C211.663 146.872 208.652 144.145 204.41 143.64ZM235.961 161.558C239.202 161.944 242.231 161.676 245.825 160.315L247.094 165.493C243.708 166.734 239.052 167.678 234.667 167.156C225.801 166.101 220.608 159.78 221.459 152.63C222.406 144.67 229.741 140.709 237.701 141.656C244.946 142.518 249.818 147.884 249.052 154.318C248.928 155.367 248.654 156.446 248.238 157.508L227.742 155.07C228.234 158.657 231.481 161.025 235.961 161.558ZM236.69 146.902C232.591 146.414 229.735 147.669 228.436 150.463L242.878 152.182C242.593 149.296 240.408 147.344 236.69 146.902ZM267.802 150.846C263.226 150.301 259.482 152.514 258.966 156.852C258.421 161.427 261.906 164.646 266.863 165.235C270.342 165.649 272.987 164.949 276.298 163.941L277.567 169.119C274.121 170.45 269.858 171.344 265.377 170.811C256.512 169.756 251.747 163.485 252.598 156.336C253.545 148.376 260.881 144.415 268.841 145.362C272.797 145.833 276.312 147.169 279.052 148.511L276.858 153.953C273.728 152.227 271.043 151.231 267.802 150.846ZM297.126 154.335C292.55 153.791 288.806 156.004 288.29 160.341C287.746 164.917 291.23 168.135 296.187 168.725C299.666 169.139 302.312 168.439 305.622 167.431L306.891 172.609C303.446 173.939 299.182 174.834 294.702 174.3C285.836 173.246 281.072 166.975 281.923 159.825C282.87 151.865 290.205 147.904 298.165 148.851C302.121 149.322 305.636 150.659 308.377 152L306.182 157.443C303.052 155.717 300.367 154.721 297.126 154.335ZM321.36 162.826C323.933 163.132 327.227 164.298 329.191 165.257L329.52 162.492C329.815 160.014 328.393 158.152 325.39 157.795C322.912 157.5 319.159 158.165 315.526 159.038L314.634 153.131C317.703 152.53 322.883 151.648 326.649 152.096C333.178 152.873 336.578 156.806 335.8 163.336L334.78 171.916C334.694 172.63 335.12 173.116 335.787 173.196C336.502 173.281 337.804 172.904 339.271 172.353L339.98 177.368C337.188 178.486 334.215 179.099 332.261 178.867C329.067 178.487 327.999 176.088 328.221 173.407C325.61 175.852 321.727 177.613 317.675 177.131C313.195 176.598 310.21 173.246 310.721 168.956C311.328 163.856 316.45 162.242 321.36 162.826ZM320.366 171.989C322.749 172.272 326.191 171.377 328.692 169.451L328.8 168.545C326.235 167.757 323.499 167.189 321.211 166.917C319.114 166.668 317.422 167.481 317.218 169.197C317.031 170.77 318.364 171.751 320.366 171.989Z" fill="white" data-v-cf1a4231></path><rect x="107" y="61.6445" width="277" height="70" rx="20" transform="rotate(-12.8585 107 61.6445)" fill="#98CBFA" data-v-cf1a4231></rect><path d="M135.816 93.4453L135.249 90.9651C132.098 77.1602 143.252 69.2968 156.81 65.7097L158.641 71.7906C147.204 74.746 140.04 79.3845 140.163 87.0372C142.487 83.8479 145.701 80.4557 150.568 79.3447C157.072 77.8599 163.213 81.037 164.944 88.618C166.439 95.1694 161.676 102.559 153.44 104.439C144.876 106.394 137.61 101.307 135.816 93.4453ZM150.55 85.3062C147.414 86.0219 144.325 88.4502 141.933 91.5566L142.221 92.8201C143.129 96.7978 147.568 100.068 152.201 99.0104C157.208 97.8674 159.474 93.5591 158.673 90.0494C157.765 86.0717 154.715 84.3555 150.55 85.3062ZM185.503 91.0639C188.685 90.3375 191.448 89.0669 194.375 86.577L197.311 91.0272C194.539 93.334 190.471 95.7888 186.166 96.7715C177.462 98.7584 170.446 94.5503 168.843 87.5309C167.059 79.7159 172.636 73.5194 180.451 71.7355C187.564 70.1118 193.957 73.5269 195.399 79.8444C195.634 80.8739 195.739 81.9823 195.704 83.1227L175.581 87.716C177.25 90.9292 181.104 92.068 185.503 91.0639ZM181.263 77.0154C177.238 77.934 174.97 80.0765 174.686 83.1447L188.865 79.908C187.626 77.2859 184.913 76.1822 181.263 77.0154ZM206.621 81.2708L205.542 76.5443L209.379 75.6684C213.544 74.7177 215.051 73.3397 214.709 71.8423C214.432 70.6255 212.721 70.0314 209.819 70.6937C206.918 71.356 203.243 73.3764 200.407 75.4024L197.469 70.5097C200.175 68.5625 204.005 66.359 208.591 65.3122C215.002 63.8487 219.814 65.9505 220.733 69.9749C221.182 71.9404 220.271 73.7731 218.479 75.413C221.392 75.8804 223.637 77.091 224.161 79.384C225.368 84.672 219.957 89.0089 213.827 90.4082C209.709 91.3482 204.705 91.2104 201.3 90.3137L202.022 84.6345C205.557 85.4524 209.572 85.5699 212.66 84.8649C216.17 84.0637 218.432 82.7595 218.026 80.9813C217.727 79.671 215.98 79.1343 212.19 79.9996L206.621 81.2708ZM239.691 69.734L239.124 67.2538C235.973 53.4489 247.127 45.5855 260.685 41.9984L262.516 48.0793C251.079 51.0347 243.915 55.6732 244.038 63.3259C246.362 60.1366 249.576 56.7444 254.443 55.6334C260.947 54.1486 267.088 57.3257 268.819 64.9067C270.314 71.4581 265.551 78.8474 257.315 80.7275C248.751 82.6823 241.485 77.5958 239.691 69.734ZM254.425 61.5949C251.289 62.3106 248.2 64.7389 245.808 67.8453L246.096 69.1088C247.004 73.0865 251.443 76.3566 256.076 75.2991C261.083 74.1561 263.349 69.8478 262.548 66.3381C261.64 62.3604 258.59 60.6442 254.425 61.5949ZM284.42 48.0029C292.235 46.2189 299.988 49.1264 301.772 56.9414C303.374 63.9608 298.605 71.1054 290.135 73.0389C281.665 74.9723 274.267 70.6051 272.665 63.5856C270.881 55.7706 276.605 49.7868 284.42 48.0029ZM285.648 53.3844C280.781 54.4954 277.895 57.8128 278.889 62.1649C279.786 66.0958 284.284 68.7616 288.917 67.7041C293.55 66.6466 296.446 62.293 295.548 58.3621C294.555 54.01 290.515 52.2735 285.648 53.3844ZM327.844 38.9276L333.185 62.3257L327.054 63.7251L322.942 45.7085L315.361 47.439C316.755 57.2138 316.409 66.6967 308.079 68.5981C307.471 68.737 307.19 68.8011 306.571 68.8931L305.48 63.037C306.053 62.9556 306.25 62.9597 307.046 62.7781C312.1 61.6244 310.117 49.9162 308.798 43.2752L327.844 38.9276ZM345.153 59.5939L339.724 60.833L334.383 37.4348L340.513 36.0355L343.985 51.2443L353.897 32.9804L359.372 31.7306L364.713 55.1287L358.583 56.5281L355.101 41.2725L345.153 59.5939Z" fill="white" data-v-cf1a4231></path></svg></div>`);
}
const _sfc_setup$1T = _sfc_main$1T.setup;
_sfc_main$1T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-banner/SectionBannerBadges.vue");
  return _sfc_setup$1T ? _sfc_setup$1T(props, ctx) : void 0;
};
const SectionBannerBadges = /* @__PURE__ */ _export_sfc(_sfc_main$1T, [["ssrRender", _sfc_ssrRender$B], ["__scopeId", "data-v-cf1a4231"]]);
const SectionBanner_vue_vue_type_style_index_0_scoped_0d1c9740_lang = "";
const _sfc_main$1S = {
  __name: "SectionBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-banner-about" }, _attrs))} data-v-0d1c9740>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Концепты", "Аппаратное лечение акне"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Концепты", "Аппаратное лечение акне"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="container-custom" data-v-0d1c9740><img class="banner"${ssrRenderAttr("src", _imports_0$i)} alt="" data-v-0d1c9740><div class="content-info" data-v-0d1c9740><h2 class="heading" data-v-0d1c9740><span style="${ssrRenderStyle({ "position": "relative", "z-index": "10" })}" data-v-0d1c9740> Вылечим кожу и избавим от высыпания на лице </span>`);
      _push(ssrRenderComponent(SectionBannerBadges, { class: "badges" }, null, _parent));
      _push(`</h2></div></div></section>`);
    };
  }
};
const _sfc_setup$1S = _sfc_main$1S.setup;
_sfc_main$1S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-banner/SectionBanner.vue");
  return _sfc_setup$1S ? _sfc_setup$1S(props, ctx) : void 0;
};
const SectionBanner$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1S, [["__scopeId", "data-v-0d1c9740"]]);
const _imports_0$h = "/assets/place-abac57aa.png";
const _sfc_main$1R = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "31",
    height: "32",
    viewBox: "0 0 31 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="15.5" cy="16.4883" r="15.5" fill="#FFE116"></circle><path d="M15.518 24.2083C12.064 24.2083 10.084 22.3383 10.084 19.7643C10.084 17.8283 11.25 16.6183 12.768 15.9803C11.228 15.2543 10.48 13.9563 10.48 12.5923C10.48 10.2823 12.262 8.52228 15.518 8.52228C18.862 8.52228 20.512 10.4583 20.512 12.5703C20.512 13.9563 19.808 15.2543 18.224 15.9803C19.764 16.5963 20.908 17.8063 20.908 19.7643C20.908 22.4043 18.884 24.2083 15.518 24.2083ZM15.518 21.7663C17.036 21.7663 17.784 20.8203 17.784 19.5223C17.784 18.1803 17.036 17.2343 15.518 17.2343C14.154 17.2343 13.208 18.0703 13.208 19.5223C13.208 20.8863 14.088 21.7663 15.518 21.7663ZM15.518 14.8143C16.816 14.8143 17.388 13.9343 17.388 12.8783C17.388 11.8443 16.926 10.9643 15.518 10.9643C14.132 10.9643 13.604 11.8663 13.604 12.8783C13.604 13.9343 14.242 14.8143 15.518 14.8143Z" fill="black"></path></svg>`);
}
const _sfc_setup$1R = _sfc_main$1R.setup;
_sfc_main$1R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/Icon8.vue");
  return _sfc_setup$1R ? _sfc_setup$1R(props, ctx) : void 0;
};
const Icon8 = /* @__PURE__ */ _export_sfc(_sfc_main$1R, [["ssrRender", _sfc_ssrRender$A]]);
const _sfc_main$1Q = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "31",
    height: "32",
    viewBox: "0 0 31 32",
    fill: "none"
  }, _attrs))}><circle cx="15.5" cy="16.4883" r="15.5" fill="black"></circle><path d="M13.146 24.5423H10V8.98828H16.028C19.086 8.98828 21.308 10.8363 21.308 14.0043C21.308 17.0843 19.13 19.0203 16.028 19.0203H13.146V24.5423ZM15.676 16.5123C17.106 16.5123 18.118 15.6323 18.118 13.9823C18.118 12.3323 17.106 11.4963 15.676 11.4963H13.146V16.5123H15.676Z" fill="white"></path></svg>`);
}
const _sfc_setup$1Q = _sfc_main$1Q.setup;
_sfc_main$1Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/IconP.vue");
  return _sfc_setup$1Q ? _sfc_setup$1Q(props, ctx) : void 0;
};
const IconP = /* @__PURE__ */ _export_sfc(_sfc_main$1Q, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$1P = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "61",
    viewBox: "0 0 60 61",
    fill: "none"
  }, _attrs))}><path d="M51.2563 9.71843C48.4921 6.94022 45.1995 4.73745 41.5708 3.23861C37.942 1.73976 34.0496 0.974841 30.1206 0.98846C13.6583 0.98846 0.241207 14.3384 0.241207 30.7184C0.241207 35.9684 1.62814 41.0683 4.22111 45.5683L0 60.9883L15.8291 56.8483C20.201 59.2183 25.1156 60.4783 30.1206 60.4783C46.5829 60.4783 60 47.1283 60 30.7484C60 22.7984 56.8945 15.3284 51.2563 9.71843ZM30.1206 55.4383C25.6583 55.4383 21.2864 54.2383 17.4573 51.9883L16.5528 51.4483L7.14573 53.9083L9.64824 44.7883L9.04523 43.8583C6.56607 39.9193 5.24967 35.3661 5.24623 30.7184C5.24623 17.0984 16.402 5.99845 30.0904 5.99845C36.7236 5.99845 42.9648 8.57844 47.6382 13.2584C49.9522 15.5503 51.786 18.2764 53.0333 21.2787C54.2807 24.281 54.9167 27.4997 54.9045 30.7484C54.9648 44.3683 43.809 55.4383 30.1206 55.4383ZM43.7487 36.9584C42.995 36.5984 39.3166 34.7984 38.6533 34.5284C37.9598 34.2884 37.4774 34.1684 36.9648 34.8884C36.4523 35.6384 35.0352 37.3184 34.6131 37.7984C34.191 38.3083 33.7387 38.3683 32.9849 37.9783C32.2312 37.6184 29.8191 36.8084 26.9849 34.2884C24.7538 32.3084 23.2764 29.8784 22.8241 29.1284C22.402 28.3784 22.7638 27.9884 23.1558 27.5984C23.4874 27.2684 23.9095 26.7284 24.2714 26.3084C24.6332 25.8884 24.7839 25.5584 25.0251 25.0784C25.2663 24.5684 25.1457 24.1484 24.9648 23.7884C24.7839 23.4284 23.2764 19.7684 22.6734 18.2684C22.0703 16.8284 21.4372 17.0084 20.9849 16.9784H19.5377C19.0251 16.9784 18.2412 17.1584 17.5477 17.9084C16.8844 18.6584 14.9548 20.4584 14.9548 24.1184C14.9548 27.7784 17.6382 31.3184 18 31.7984C18.3618 32.3084 23.2764 39.8083 30.7538 43.0183C32.5327 43.7983 33.9196 44.2483 35.005 44.5783C36.7839 45.1483 38.4121 45.0583 39.7085 44.8783C41.1558 44.6683 44.1407 43.0783 44.7437 41.3383C45.3769 39.5983 45.3769 38.1283 45.1658 37.7984C44.9548 37.4684 44.5025 37.3184 43.7487 36.9584Z" fill="black"></path></svg>`);
}
const _sfc_setup$1P = _sfc_main$1P.setup;
_sfc_main$1P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/IconWhatsapp.vue");
  return _sfc_setup$1P ? _sfc_setup$1P(props, ctx) : void 0;
};
const IconWhatsapp = /* @__PURE__ */ _export_sfc(_sfc_main$1P, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$1O = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "55",
    viewBox: "0 0 60 55",
    fill: "none"
  }, _attrs))}><path d="M55.5581 0.993799C54.8171 1.04771 54.0898 1.22155 53.4045 1.50853H53.3953C52.7374 1.76936 49.6098 3.08505 44.8548 5.07935L27.8155 12.2556C15.5889 17.403 3.56997 22.4718 3.56997 22.4718L3.71308 22.4164C3.71308 22.4164 2.88442 22.6888 2.01884 23.282C1.48409 23.6223 1.02394 24.0675 0.666223 24.5908C0.24151 25.214 -0.100107 26.1673 0.0268456 27.1529C0.234586 28.8194 1.31483 29.8189 2.0904 30.3705C2.87519 30.9291 3.62306 31.19 3.62306 31.19H3.64152L14.9126 34.987C15.4181 36.6097 18.3472 46.2396 19.0512 48.4578C19.4667 49.7827 19.8706 50.6114 20.3761 51.2438C20.6208 51.567 20.907 51.837 21.2509 52.054C21.4297 52.158 21.6204 52.2401 21.8188 52.2987L21.7034 52.271C21.738 52.2802 21.7657 52.3079 21.7911 52.3171C21.8834 52.3425 21.9457 52.3518 22.0634 52.3702C23.8477 52.9103 25.2811 51.8024 25.2811 51.8024L25.3619 51.7378L32.0165 45.6787L43.1698 54.2353L43.4237 54.3437C45.7481 55.364 48.1025 54.7962 49.3466 53.7944C50.6 52.7857 51.087 51.4954 51.087 51.4954L51.1678 51.2877L59.7867 7.13367C60.0314 6.04419 60.0937 5.02396 59.8237 4.03373C59.5451 3.03156 58.9022 2.16962 58.0209 1.61702C57.281 1.16718 56.4229 0.950055 55.5581 0.993799ZM55.3249 5.72566C55.3157 5.87107 55.3434 5.85492 55.2788 6.13421V6.1596L46.7407 49.8543C46.7037 49.9166 46.6414 50.0528 46.4706 50.1889C46.2905 50.3321 46.1474 50.4221 45.3973 50.1243L31.7557 39.6658L23.5153 47.1767L25.2465 36.1203L47.5347 15.3463C48.4534 14.4923 48.1464 14.3122 48.1464 14.3122C48.211 13.2643 46.7591 14.0053 46.7591 14.0053L18.6542 31.4162L18.645 31.37L5.17418 26.8344V26.8251L5.13956 26.8182C5.16317 26.8104 5.1863 26.8011 5.20881 26.7905L5.28267 26.7536L5.35422 26.7282C5.35422 26.7282 17.3824 21.6593 29.609 16.512C35.7304 13.9337 41.898 11.3369 46.6414 9.33341C49.4545 8.1493 52.2706 6.9721 55.0895 5.80183C55.2788 5.72796 55.1887 5.72566 55.3249 5.72566Z" fill="black"></path></svg>`);
}
const _sfc_setup$1O = _sfc_main$1O.setup;
_sfc_main$1O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/IconTelegram.vue");
  return _sfc_setup$1O ? _sfc_setup$1O(props, ctx) : void 0;
};
const IconTelegram$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1O, [["ssrRender", _sfc_ssrRender$x]]);
const CardPlaceContacts_vue_vue_type_style_index_0_scoped_a39d5d8e_lang = "";
const _sfc_main$1N = {
  __name: "CardPlaceContacts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contacts" }, _attrs))} data-v-a39d5d8e><a href="#" data-v-a39d5d8e><h6 class="h-xxl" data-v-a39d5d8e><a href="tel:+79257267181" style="${ssrRenderStyle({ "color": "inherit" })}" data-v-a39d5d8e>+7 925 726-71-81 </a></h6></a><div class="contacts-socials" data-v-a39d5d8e><a href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-a39d5d8e>`);
      _push(ssrRenderComponent(IconWhatsapp, { class: "contacts-icon" }, null, _parent));
      _push(`</a><a href="https://t.me/FaceConcept_bot" target="_blank" rel="noopener noreferrer" data-v-a39d5d8e>`);
      _push(ssrRenderComponent(IconTelegram$1, { class: "contacts-icon" }, null, _parent));
      _push(`</a></div></div>`);
    };
  }
};
const _sfc_setup$1N = _sfc_main$1N.setup;
_sfc_main$1N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/CardPlaceContacts.vue");
  return _sfc_setup$1N ? _sfc_setup$1N(props, ctx) : void 0;
};
const CardPlaceContacts = /* @__PURE__ */ _export_sfc(_sfc_main$1N, [["__scopeId", "data-v-a39d5d8e"]]);
const CardPlace_vue_vue_type_style_index_0_scoped_fca7bf6f_lang = "";
const _sfc_main$1M = {
  __name: "CardPlace",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-place" }, _attrs))} data-v-fca7bf6f><h2 class="h-xl" data-v-fca7bf6f>Face Concept Лефортово</h2><h5 class="h-md card-text" data-v-fca7bf6f> Москва, улица Красноказарменная 14А, <br data-v-fca7bf6f> корпус 6 </h5><div class="card-badges" data-v-fca7bf6f><p class="card-badge" data-v-fca7bf6f>`);
      _push(ssrRenderComponent(Icon8, { class: "card-badge-icon" }, null, _parent));
      _push(` Авиамоторная — 5 мин </p><p class="card-badge" data-v-fca7bf6f>`);
      _push(ssrRenderComponent(IconP, { class: "card-badge-icon" }, null, _parent));
      _push(` Бесплатня парковка </p></div>`);
      _push(ssrRenderComponent(CardPlaceContacts, null, null, _parent));
      _push(`<img class="card-img"${ssrRenderAttr("src", _imports_0$h)} alt="" data-v-fca7bf6f>`);
      _push(ssrRenderComponent(MButtonOutlineBig, { class: "button-more" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее`);
          } else {
            return [
              createTextVNode("Подробнее")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1M = _sfc_main$1M.setup;
_sfc_main$1M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/card-place/CardPlace.vue");
  return _sfc_setup$1M ? _sfc_setup$1M(props, ctx) : void 0;
};
const CardPlace = /* @__PURE__ */ _export_sfc(_sfc_main$1M, [["__scopeId", "data-v-fca7bf6f"]]);
const SectionPlaces_vue_vue_type_style_index_0_scoped_723fcda9_lang = "";
const _sfc_main$1L = {
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
const _sfc_setup$1L = _sfc_main$1L.setup;
_sfc_main$1L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-places/SectionPlaces.vue");
  return _sfc_setup$1L ? _sfc_setup$1L(props, ctx) : void 0;
};
const SectionPlaces = /* @__PURE__ */ _export_sfc(_sfc_main$1L, [["__scopeId", "data-v-723fcda9"]]);
const SectionTariffCard_vue_vue_type_style_index_0_scoped_b6133102_lang = "";
const _sfc_main$1K = {
  __name: "SectionTariffCard",
  __ssrInlineRender: true,
  props: ["text", "title", "price", "info"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-tariff" }, _attrs))} data-v-b6133102><h6 class="card-tag" data-v-b6133102>Курс</h6><h5 class="card-heading" data-v-b6133102>${ssrInterpolate(props.title)}</h5><p class="card-text" data-v-b6133102>${ssrInterpolate(props.text)}</p>`);
      _push(ssrRenderComponent(CardInfo$1, {
        text: props.info
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo$1, {
        icon: "pay",
        title: "Стоимость",
        text: props.price
      }, null, _parent));
      _push(`<div class="card-button-wrapper" data-v-b6133102>`);
      _push(ssrRenderComponent(MButtonBig, { class: "card-button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Хочу оформить`);
          } else {
            return [
              createTextVNode("Хочу оформить")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1K = _sfc_main$1K.setup;
_sfc_main$1K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tariff/SectionTariffCard.vue");
  return _sfc_setup$1K ? _sfc_setup$1K(props, ctx) : void 0;
};
const SectionTariffCard = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["__scopeId", "data-v-b6133102"]]);
const SectionTariff_vue_vue_type_style_index_0_scoped_478c79e0_lang = "";
const text = `Lorem ipsum dolor sit amet consectetur. Elit mi in nisi tincidunt magna at in fermentum. Dapibus sit cursus ut elit a lobortis pellentesque urna. Tempus eu mattis nibh facilisi amet et vitae quis. Enim pulvinar sed quis porttitor.`;
const _sfc_main$1J = {
  __name: "SectionTariff",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-procedures" }, _attrs))} data-v-478c79e0>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl heading" data-v-478c79e0${_scopeId}>Выбери свой тариф</h3><div class="cards-wrapper" data-v-478c79e0${_scopeId}>`);
            _push2(ssrRenderComponent(SectionTariffCard, {
              text,
              title: "Базовый",
              price: "5 900₽",
              info: "3 процедуры"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTariffCard, {
              class: "card-2",
              text,
              title: "Базовый Плюс",
              price: "7 900₽",
              info: "5 процедур"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTariffCard, {
              class: "card-3",
              text,
              title: "Полная очистка",
              price: "12 900₽",
              info: "10 процедур"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl heading" }, "Выбери свой тариф"),
              createVNode("div", { class: "cards-wrapper" }, [
                createVNode(SectionTariffCard, {
                  text,
                  title: "Базовый",
                  price: "5 900₽",
                  info: "3 процедуры"
                }),
                createVNode(SectionTariffCard, {
                  class: "card-2",
                  text,
                  title: "Базовый Плюс",
                  price: "7 900₽",
                  info: "5 процедур"
                }),
                createVNode(SectionTariffCard, {
                  class: "card-3",
                  text,
                  title: "Полная очистка",
                  price: "12 900₽",
                  info: "10 процедур"
                })
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
const _sfc_setup$1J = _sfc_main$1J.setup;
_sfc_main$1J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tariff/SectionTariff.vue");
  return _sfc_setup$1J ? _sfc_setup$1J(props, ctx) : void 0;
};
const SectionTariff = /* @__PURE__ */ _export_sfc(_sfc_main$1J, [["__scopeId", "data-v-478c79e0"]]);
const _sfc_main$1I = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "894",
    height: "443",
    viewBox: "0 0 894 443",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_1960)"><ellipse cx="447" cy="221.5" rx="347" ry="121.5" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_1960" x="0" y="0" width="894" height="443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1960"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$1I = _sfc_main$1I.setup;
_sfc_main$1I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tech/SectionTechShadow.vue");
  return _sfc_setup$1I ? _sfc_setup$1I(props, ctx) : void 0;
};
const SectionTechShadow = /* @__PURE__ */ _export_sfc(_sfc_main$1I, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$1H = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "567",
    height: "578",
    viewBox: "0 0 567 578",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1_2057)"><g clip-path="url(#clip1_1_2057)"><path d="M443.07 50C429.776 50 419 61.5622 419 75.8033C419 75.9443 419 76.0853 418.86 76.5083C418.86 76.2263 418.72 75.9443 418.72 75.8033C418.86 61.5622 408.224 50 394.93 50C381.776 50 371 61.5622 371 75.8033C371 112.746 418.86 126 418.86 126C418.86 126 418.86 126 419 125.859C419 126 419.14 126 419.14 126C419.14 126 467 112.887 467 75.8033C467 61.5622 456.224 50 443.07 50Z" fill="#BAC3D8"></path></g><path d="M171.667 377.434L171.767 360.437L360.734 350.539L367.133 383.433L231.057 442.423C231.057 442.423 165.468 398.831 171.667 377.434Z" fill="#BAC3D8"></path><path d="M192.168 473.919C192.168 473.919 439.625 298.249 514.411 318.746C589.298 339.242 572.401 435.725 528.309 472.919C497.714 498.814 449.223 540.107 312.247 572.002C175.271 603.896 192.168 473.919 192.168 473.919Z" fill="white"></path><path d="M272.655 578C284.753 578 298.05 576.301 312.548 572.901C372.737 558.904 421.028 542.007 460.222 521.21C493.316 503.713 512.912 487.216 528.61 473.918L529.009 473.518C542.307 462.22 553.405 445.523 560.204 426.427C567.103 406.93 568.802 386.633 565.003 369.236C561.004 350.94 549.006 327.144 514.712 317.745C486.317 309.947 430.527 328.844 349.141 373.936C348.641 374.236 348.441 374.836 348.741 375.335C349.041 375.835 349.641 376.035 350.141 375.735C431.127 330.943 486.317 312.146 514.212 319.745C547.506 328.843 559.204 351.939 563.103 369.736C570.702 404.03 555.205 449.123 527.81 472.219L527.41 472.619C495.915 499.214 448.324 539.407 312.148 571.102C270.455 580.8 238.961 576.401 218.564 558.004C188.07 530.409 192.669 479.817 193.169 474.618C196.368 472.319 220.764 455.122 254.758 433.225C255.258 432.925 255.358 432.326 255.058 431.826C254.758 431.326 254.158 431.226 253.658 431.526C217.264 455.022 191.869 473.019 191.569 473.219C191.369 473.418 191.169 473.618 191.169 473.918C191.069 474.518 184.37 529.809 217.064 559.504C230.862 571.801 249.459 578 272.655 578Z" fill="black"></path><path d="M407.031 541.607C407.131 541.607 407.231 541.607 407.431 541.507C407.931 541.307 408.231 540.707 408.031 540.207C395.333 508.613 338.043 447.423 337.544 446.823C337.144 446.423 336.544 446.423 336.144 446.823C335.744 447.223 335.744 447.823 336.144 448.223C336.744 448.823 393.734 509.712 406.231 541.007C406.331 541.307 406.631 541.607 407.031 541.607Z" fill="black"></path><path d="M246.06 498.114C246.26 498.114 246.56 498.014 246.66 497.914C284.353 466.219 455.623 374.135 457.322 373.236C457.822 372.936 458.022 372.336 457.722 371.836C457.422 371.336 456.823 371.136 456.323 371.436C454.623 372.336 283.253 464.52 245.36 496.314C244.96 496.714 244.86 497.314 245.26 497.714C245.46 498.014 245.76 498.114 246.06 498.114Z" fill="black"></path><path d="M402.134 564.304C404.033 566.604 404.433 569.903 403.134 572.603C401.834 575.302 399.134 577.102 396.035 577.102C372.239 577.102 313.349 577.102 182.273 577.102C160.176 577.102 138.78 568.703 122.583 553.606C99.5871 532.21 64.8932 499.615 35.5984 470.62C2.40427 437.826 -7.9939 388.435 8.90311 345.042C9.20306 344.442 9.40302 343.742 9.70297 343.142C24.1004 306.649 68.7926 293.251 100.787 315.947C165.176 361.739 267.258 437.026 307.65 482.018C307.65 482.018 376.738 533.21 402.134 564.304Z" fill="white"></path><path d="M182.27 578.001H396.132C399.531 578.001 402.631 576.001 404.131 573.002C405.53 569.902 405.13 566.303 403.031 563.603C378.235 533.309 311.247 483.217 308.447 481.218C296.65 468.12 278.653 451.423 254.957 431.526C254.557 431.126 253.857 431.226 253.557 431.626C253.157 432.026 253.257 432.726 253.657 433.026C277.253 452.823 295.25 469.52 306.948 482.517L307.048 482.617C307.748 483.117 376.336 534.109 401.331 564.703C403.031 566.703 403.331 569.602 402.231 571.902C401.131 574.302 398.732 575.801 396.032 575.801H182.27C160.274 575.801 139.377 567.603 123.28 552.605C99.5843 530.609 65.3904 498.315 36.2955 469.62C3.40128 437.125 -6.99692 388.234 9.90012 345.141L10.7 343.242C17.3988 326.144 31.3963 313.247 49.0932 308.048C66.6901 302.849 85.3868 305.948 100.284 316.546C125.38 334.443 149.276 351.74 171.172 368.237C171.572 368.537 172.271 368.437 172.571 368.037C172.871 367.637 172.771 366.937 172.371 366.638C150.375 350.24 126.48 332.843 101.384 314.946C85.8867 303.948 66.5901 300.749 48.4933 306.148C30.2966 311.547 15.7991 324.845 8.80032 342.542L8.00049 344.441C-9.0965 388.334 1.40161 438.025 34.8957 471.119C63.8906 499.814 98.1845 532.109 121.88 554.105C138.377 569.602 159.874 578.001 182.27 578.001Z" fill="black"></path><path d="M223.662 578C223.962 578 224.362 577.8 224.562 577.501C224.862 577.001 224.662 576.401 224.162 576.101C172.571 545.706 113.482 493.215 73.6888 442.224C68.3897 435.425 62.9907 428.226 59.8912 420.028C59.6912 419.528 59.0914 419.228 58.5914 419.428C58.0915 419.628 57.7916 420.228 57.9915 420.728C61.291 429.126 66.79 436.525 72.0891 443.424C112.082 494.615 171.372 547.306 223.162 577.801C223.262 578 223.462 578 223.662 578Z" fill="black"></path><path d="M212.866 560.904C213.166 560.904 213.466 560.804 213.666 560.604C240.262 530.109 271.056 503.614 305.25 481.818C305.75 481.518 305.85 480.918 305.55 480.418C305.25 479.918 304.65 479.818 304.15 480.118C269.856 502.014 238.862 528.61 212.166 559.304C211.767 559.704 211.867 560.304 212.266 560.704C212.366 560.904 212.566 560.904 212.866 560.904Z" fill="black"></path><path d="M186.169 537.509C186.469 537.509 186.669 537.409 186.869 537.209C214.564 508.714 245.159 482.518 277.553 459.522C278.053 459.222 278.153 458.622 277.753 458.123C277.453 457.623 276.853 457.523 276.353 457.923C243.859 481.019 213.165 507.314 185.369 535.909C184.97 536.309 184.97 536.909 185.369 537.309C185.669 537.509 185.969 537.509 186.169 537.509Z" fill="black"></path><path d="M350.138 174.571C350.138 174.571 385.731 125.879 341.139 99.3839C310.345 81.187 341.339 47.9928 315.744 26.9964C294.348 9.39943 285.149 22.0972 264.353 8.89952C238.457 -7.59763 203.264 -1.19874 190.866 28.5961C177.168 61.4904 148.973 36.5947 128.277 79.8872C114.279 109.082 144.074 132.978 112.08 153.774C77.1859 176.271 89.6837 241.959 151.073 224.062C198.265 210.265 350.138 174.571 350.138 174.571Z" fill="black"></path><path d="M54.8874 201.865C55.0873 201.865 55.3873 201.765 55.4873 201.665C55.8872 201.265 55.9872 200.665 55.5873 200.265C53.1877 197.366 53.5876 193.066 54.2875 188.567C54.9874 183.968 55.2873 178.769 51.8879 175.469C51.088 174.67 50.1882 174.07 49.2884 173.57C47.9886 172.77 46.7888 171.97 46.2889 170.87C45.3891 169.071 46.3889 166.671 47.8886 165.471C49.3883 164.271 51.488 163.672 54.1875 163.672C60.4864 163.772 66.4853 166.971 70.0847 172.17C70.3846 172.67 70.9845 172.77 71.4844 172.47C71.9844 172.17 72.0844 171.57 71.7844 171.07C67.8851 165.371 61.1863 161.772 54.2875 161.672C51.0881 161.672 48.5885 162.372 46.6888 163.871C44.2892 165.871 43.3894 169.171 44.5892 171.67C45.3891 173.37 46.8888 174.27 48.3885 175.17C49.1884 175.669 49.9882 176.169 50.6881 176.869C53.3876 179.569 53.1877 184.168 52.4878 188.267C51.8879 192.067 51.0881 197.766 54.2875 201.565C54.2875 201.765 54.5874 201.865 54.8874 201.865Z" fill="black"></path><path d="M44.0908 193.867C46.9902 193.867 49.6897 192.067 51.1895 189.867C53.2891 186.868 53.6891 182.968 53.7891 180.369C53.7891 179.769 53.3891 179.369 52.7892 179.369C52.2893 179.369 51.7894 179.769 51.7894 180.369C51.6894 182.769 51.2895 186.168 49.4898 188.767C48.0901 190.867 45.0906 192.567 42.4911 191.667C40.1915 190.867 38.4918 188.368 37.4919 184.168C35.7922 176.97 35.8922 169.371 37.5919 162.172C37.6919 161.672 37.3919 161.072 36.892 160.972C36.3921 160.872 35.7922 161.172 35.6922 161.672C33.8925 169.171 33.8926 177.07 35.5923 184.568C36.6921 189.467 38.7917 192.467 41.8911 193.467C42.591 193.767 43.2909 193.867 44.0908 193.867Z" fill="black"></path><path d="M26.0912 197.466C27.8908 197.466 29.6905 196.966 31.1902 196.166C33.9897 194.567 36.3893 191.767 38.189 187.868C38.389 187.368 38.189 186.768 37.6891 186.568C37.1892 186.368 36.5893 186.568 36.3893 187.068C34.7896 190.667 32.69 193.167 30.2904 194.467C27.7909 195.866 24.0915 196.066 21.7919 193.867C19.8923 191.967 19.3923 188.868 19.2924 186.168C18.8924 179.669 19.3923 173.17 20.6921 166.771C20.7921 166.272 20.4921 165.672 19.8922 165.572C19.3923 165.472 18.7924 165.772 18.6924 166.372C17.3927 172.97 16.8928 179.669 17.2927 186.268C17.4927 189.468 17.9926 192.967 20.3921 195.367C21.8919 196.766 23.9915 197.466 26.0912 197.466Z" fill="black"></path><path d="M13.1934 202.865C13.2934 202.865 13.3934 202.865 13.5934 202.765C17.5927 201.266 20.4922 197.166 20.4922 192.867C20.4922 192.267 20.0923 191.867 19.4924 191.867C18.9925 191.867 18.4925 192.267 18.4925 192.867C18.4925 196.366 16.0929 199.766 12.8935 200.966C12.3936 201.166 12.0937 201.765 12.2936 202.265C12.3936 202.665 12.7935 202.865 13.1934 202.865Z" fill="black"></path><path d="M11.3978 202.865C11.3978 202.865 -1.29997 205.165 1.29958 184.568C3.49919 167.171 10.4979 159.773 18.5965 162.172C18.5965 162.172 27.9949 149.175 35.7935 157.573C35.7935 157.573 40.3927 141.676 58.6894 151.474L63.6886 118.08C63.9885 115.98 65.3883 114.181 67.3879 113.381C71.3872 111.781 75.7864 114.88 75.6865 119.18L70.7873 252.157L153.773 196.466L184.867 178.869L173.869 293.949L67.7878 336.042C38.493 347.74 6.69859 325.944 6.89856 294.349C7.39847 255.356 8.3983 211.864 11.3978 202.865Z" fill="#F4EEE8"></path><path d="M51.3909 340.242C57.0899 340.242 62.7889 339.142 68.188 337.043L174.269 294.95C174.569 294.85 174.869 294.45 174.869 294.15L185.867 179.07C185.867 178.67 185.767 178.37 185.367 178.17C185.067 177.97 184.667 177.97 184.367 178.17L153.273 195.767L71.8873 250.458L76.6865 119.48C76.7864 117.081 75.6866 114.881 73.687 113.481C71.6873 112.082 69.2877 111.782 66.9882 112.681C64.6886 113.581 62.9889 115.681 62.6889 118.181L57.8897 150.175C51.9908 147.276 46.8917 146.776 42.6924 148.475C38.3932 150.275 36.2935 153.974 35.3937 155.974C33.594 154.474 31.5944 153.774 29.4948 153.974C24.1957 154.274 19.5965 159.473 18.1967 161.273C15.2972 160.573 12.4978 161.073 9.99823 162.673C4.99911 165.972 1.69968 173.571 0.299927 184.669C-0.699905 192.768 0.499893 198.467 3.7993 201.566C5.99892 203.666 8.49847 204.066 10.0982 204.066C7.79858 213.464 6.49884 243.859 5.99893 294.45C5.89896 309.547 13.2976 323.745 25.7954 332.343C33.4941 337.543 42.3925 340.242 51.3909 340.242ZM172.969 293.25L67.4881 335.143C53.9904 340.542 38.7931 338.842 26.8952 330.644C14.8973 322.445 7.89859 308.948 7.99858 294.45C8.49849 241.959 9.99818 210.365 12.3978 203.266C12.4978 202.966 12.3978 202.566 12.1978 202.266C11.9978 201.966 11.5979 201.866 11.298 201.966C11.198 201.966 7.79857 202.566 5.19902 200.066C2.39952 197.367 1.39973 192.168 2.29958 184.869C3.59935 174.471 6.69878 167.172 11.098 164.273C13.2976 162.873 15.6972 162.473 18.2968 163.273C18.6967 163.373 19.0966 163.273 19.3965 162.873C19.3965 162.773 24.2957 156.174 29.5947 155.874C31.5944 155.774 33.3941 156.574 35.0938 158.374C35.2937 158.674 35.6937 158.774 36.0936 158.674C36.3936 158.574 36.6935 158.374 36.7935 157.974C36.7935 157.874 38.4932 152.375 43.5923 150.275C47.4916 148.575 52.4907 149.375 58.2897 152.475C58.5896 152.675 58.8896 152.675 59.1895 152.475C59.4895 152.375 59.6894 152.075 59.6894 151.775L64.6886 118.381C64.9885 116.581 66.1883 115.081 67.788 114.481C69.3877 113.881 71.1874 114.081 72.5872 115.081C73.9869 116.081 74.7868 117.681 74.6868 119.38L69.7877 252.357C69.7877 252.757 69.9876 253.057 70.2876 253.257C70.5875 253.457 70.9875 253.457 71.2874 253.257L154.273 197.567L183.668 180.97L172.969 293.25Z" fill="black"></path><path d="M54.8874 201.865C55.0873 201.865 55.3873 201.765 55.4873 201.665C55.8872 201.265 55.9872 200.665 55.5873 200.265C53.1877 197.366 53.5876 193.066 54.2875 188.567C54.9874 183.968 55.2873 178.769 51.8879 175.469C51.088 174.67 50.1882 174.07 49.2884 173.57C47.9886 172.77 46.7888 171.97 46.2889 170.87C45.3891 169.071 46.3889 166.671 47.8886 165.471C49.3883 164.271 51.488 163.672 54.1875 163.672C60.4864 163.772 66.4853 166.971 70.0847 172.17C70.3846 172.67 70.9845 172.77 71.4844 172.47C71.9844 172.17 72.0844 171.57 71.7844 171.07C67.8851 165.371 61.1863 161.772 54.2875 161.672C51.0881 161.672 48.5885 162.372 46.6888 163.871C44.2892 165.871 43.3894 169.171 44.5892 171.67C45.3891 173.37 46.8888 174.27 48.3885 175.17C49.1884 175.669 49.9882 176.169 50.6881 176.869C53.3876 179.569 53.1877 184.168 52.4878 188.267C51.8879 192.067 51.0881 197.766 54.2875 201.565C54.2875 201.765 54.5874 201.865 54.8874 201.865Z" fill="black"></path><path d="M44.0908 193.867C46.9902 193.867 49.6897 192.067 51.1895 189.867C53.2891 186.868 53.6891 182.968 53.7891 180.369C53.7891 179.769 53.3891 179.369 52.7892 179.369C52.2893 179.369 51.7894 179.769 51.7894 180.369C51.6894 182.769 51.2895 186.168 49.4898 188.767C48.0901 190.867 45.0906 192.567 42.4911 191.667C40.1915 190.867 38.4918 188.368 37.4919 184.168C35.7922 176.97 35.8922 169.371 37.5919 162.172C37.6919 161.672 37.3919 161.072 36.892 160.972C36.3921 160.872 35.7922 161.172 35.6922 161.672C33.8925 169.171 33.8926 177.07 35.5923 184.568C36.6921 189.467 38.7917 192.467 41.8911 193.467C42.591 193.767 43.2909 193.867 44.0908 193.867Z" fill="black"></path><path d="M26.0912 197.466C27.8908 197.466 29.6905 196.966 31.1902 196.166C33.9897 194.567 36.3893 191.767 38.189 187.868C38.389 187.368 38.189 186.768 37.6891 186.568C37.1892 186.368 36.5893 186.568 36.3893 187.068C34.7896 190.667 32.69 193.167 30.2904 194.467C27.7909 195.866 24.0915 196.066 21.7919 193.867C19.8923 191.967 19.3923 188.868 19.2924 186.168C18.8924 179.669 19.3923 173.17 20.6921 166.771C20.7921 166.272 20.4921 165.672 19.8922 165.572C19.3923 165.472 18.7924 165.772 18.6924 166.372C17.3927 172.97 16.8928 179.669 17.2927 186.268C17.4927 189.468 17.9926 192.967 20.3921 195.367C21.8919 196.766 23.9915 197.466 26.0912 197.466Z" fill="black"></path><path d="M13.1934 202.865C13.2934 202.865 13.3934 202.865 13.5934 202.765C17.5927 201.266 20.4922 197.166 20.4922 192.867C20.4922 192.267 20.0923 191.867 19.4924 191.867C18.9925 191.867 18.4925 192.267 18.4925 192.867C18.4925 196.366 16.0929 199.766 12.8935 200.966C12.3936 201.166 12.0937 201.765 12.2936 202.265C12.3936 202.665 12.7935 202.865 13.1934 202.865Z" fill="black"></path><path d="M449.518 107.983C449.518 107.983 424.622 103.684 425.022 98.285C425.422 92.8859 443.119 94.6856 443.119 94.6856C443.119 94.6856 418.824 90.9862 419.523 83.4875C420.323 75.9888 445.819 79.3882 445.819 79.3882C445.819 79.3882 418.824 72.8894 419.423 67.4903C420.023 62.0912 443.219 60.8914 458.617 65.6906C458.617 65.6906 428.122 56.5922 429.222 48.4936C430.122 42.0947 485.012 47.4938 496.31 56.5922C501.009 60.3915 526.904 110.683 514.407 160.774C508.908 182.67 484.612 194.068 464.116 184.77C455.017 180.671 457.217 181.271 443.019 172.972L447.518 145.077L449.518 107.983Z" fill="#F4EEE8"></path><path d="M479.114 188.969C484.713 188.969 490.412 187.669 495.611 185.17C505.509 180.37 512.708 171.572 515.308 160.974C522.007 134.178 517.607 108.083 512.708 90.9859C507.309 71.8892 499.51 57.8916 496.911 55.792C486.213 47.1935 439.921 42.2943 430.623 45.9937C429.223 46.5936 428.423 47.3934 428.223 48.2933C427.523 53.3924 436.922 58.4915 445.42 62.0909C435.122 60.9911 424.624 61.7909 420.324 64.5905C419.125 65.3903 418.425 66.2902 418.325 67.39C417.925 71.2893 427.223 75.0886 435.422 77.5882C429.723 77.4882 423.124 77.8882 420.124 80.2877C419.025 81.0876 418.425 82.1874 418.325 83.3872C417.825 88.2864 425.723 91.5858 432.722 93.5854C429.723 93.7854 426.723 94.4853 425.124 95.7851C424.324 96.4849 423.824 97.2848 423.824 98.2846C423.424 103.884 441.421 107.683 448.32 108.883L446.42 145.077L441.921 172.972C441.821 173.372 442.021 173.772 442.421 173.972C447.32 176.871 450.319 178.571 452.419 179.971C456.418 182.37 457.618 183.17 463.617 185.869C468.616 187.869 473.915 188.969 479.114 188.969ZM442.021 46.6936C459.018 46.6936 488.312 51.4927 495.611 57.3917C499.81 60.7911 525.806 110.383 513.308 160.574C510.808 170.572 504.01 178.871 494.611 183.47C485.013 188.069 474.015 188.269 464.317 183.87C458.418 181.27 457.418 180.57 453.419 178.171C451.319 176.871 448.619 175.171 444.02 172.572L448.419 145.376V145.277L450.419 108.183C450.419 107.683 450.119 107.183 449.619 107.183C438.021 105.183 425.723 101.284 425.923 98.4846C425.923 98.0847 426.123 97.6847 426.523 97.3848C429.323 94.9852 439.221 95.4851 442.82 95.7851C443.32 95.7851 443.82 95.4851 443.92 94.8852C444.02 94.3853 443.62 93.8854 443.12 93.7854C434.122 92.3857 419.925 88.3863 420.424 83.5872C420.524 82.9873 420.824 82.3874 421.424 81.8875C425.624 78.588 440.321 79.6879 445.62 80.3877C446.12 80.4877 446.62 80.0878 446.72 79.5879C446.82 79.088 446.52 78.588 446.02 78.3881C433.422 75.3886 420.124 70.3895 420.424 67.5899C420.524 67.09 421.024 66.5901 421.524 66.2902C426.523 63.0907 444.12 62.4908 457.318 66.3902C457.718 66.4901 458.118 66.5901 458.318 66.6901C458.818 66.8901 459.418 66.5901 459.518 65.9902C459.717 65.4903 459.418 64.8904 458.818 64.7904C458.418 64.6904 458.118 64.5905 457.718 64.4905C446.22 60.9911 429.423 53.7923 430.123 48.6932C430.123 48.5932 430.423 48.2933 431.223 47.8934C433.522 46.9935 437.321 46.6936 442.021 46.6936Z" fill="black"></path><path d="M458.418 110.483C458.918 110.483 459.318 110.183 459.418 109.683C459.518 109.183 459.118 108.584 458.618 108.584L449.62 107.084C449.12 106.984 448.52 107.384 448.52 107.884C448.42 108.384 448.82 108.983 449.32 108.983L458.318 110.483C458.318 110.483 458.318 110.483 458.418 110.483Z" fill="black"></path><path d="M452.419 97.0851L452.719 95.0855C452.719 95.0855 446.32 94.0856 443.12 93.5857C442.621 93.4858 442.021 93.8857 442.021 94.3856C441.921 94.8855 442.321 95.4854 442.821 95.4854C446.02 96.0853 452.419 97.0851 452.419 97.0851Z" fill="black"></path><path d="M455.418 81.9882C455.918 81.9882 456.318 81.6883 456.418 81.1884C456.518 80.6884 456.118 80.0885 455.618 79.9886L445.92 78.2889C445.32 78.1889 444.82 78.5888 444.72 79.0887C444.62 79.5886 445.02 80.1885 445.52 80.2885L455.218 81.9882C455.318 81.9882 455.418 81.9882 455.418 81.9882Z" fill="black"></path><path d="M447.219 125.68C426.622 186.669 412.325 196.367 412.325 196.367C412.325 196.367 339.638 150.475 307.143 143.377C274.649 136.278 191.164 179.97 191.164 179.97C191.164 179.97 223.058 187.969 280.748 222.063C315.742 242.759 385.93 291.551 429.322 287.452C502.909 280.653 515.807 154.975 517.906 150.475C488.811 150.475 455.017 143.377 447.219 125.68Z" fill="#BAC3D8"></path><path d="M406.927 207.465C407.327 207.465 407.627 207.265 407.827 206.965L413.226 196.966C413.526 196.467 413.326 195.867 412.826 195.567C412.326 195.267 411.727 195.467 411.427 195.967L406.028 205.965C405.728 206.465 405.928 207.065 406.427 207.365C406.627 207.465 406.727 207.465 406.927 207.465Z" fill="black"></path><path d="M246.454 155.375C181.065 172.872 170.067 183.87 148.771 196.468C136.773 203.567 73.1842 247.459 73.1842 247.459L74.7839 214.965L6.29599 221.764C6.29599 221.764 -2.4025 294.651 8.3956 315.747C27.3922 352.741 70.7846 339.243 70.7846 339.243L174.266 297.551L171.767 360.54C171.767 360.54 362.233 365.039 361.033 353.341C355.034 293.851 330.339 233.062 330.439 210.566C330.739 183.57 311.842 137.878 246.454 155.375Z" fill="#BAC3D8"></path><path d="M324.242 339.842C324.842 339.842 325.242 339.343 325.242 338.843C324.642 321.946 310.945 280.653 310.445 278.953C310.445 278.853 310.345 278.753 310.245 278.653C292.648 258.557 250.555 249.358 243.057 247.858L254.755 208.165C254.855 207.865 254.755 207.465 254.555 207.165C254.355 206.865 253.955 206.765 253.655 206.865L216.461 214.064L209.563 167.272C209.463 166.772 208.963 166.372 208.463 166.472C207.963 166.572 207.563 167.072 207.663 167.572L214.762 215.364C214.762 215.664 214.962 215.864 215.162 216.064C215.362 216.264 215.662 216.264 215.961 216.264L252.555 209.165L240.957 248.358C240.857 248.658 240.957 248.958 241.057 249.158C241.157 249.358 241.457 249.558 241.757 249.658C242.257 249.758 290.148 258.856 308.745 279.853C309.745 282.952 322.843 322.945 323.443 339.043C323.243 339.443 323.742 339.842 324.242 339.842Z" fill="black"></path><path d="M295.945 250.757C296.045 250.757 296.045 250.757 295.945 250.757C296.545 250.757 296.945 250.258 296.945 249.658C295.945 231.661 312.842 211.664 313.042 211.464C313.242 211.264 313.342 210.864 313.242 210.564C313.142 210.265 312.942 209.965 312.642 209.865L290.346 199.966L310.543 186.969C310.742 186.869 310.942 186.569 310.942 186.269C311.042 185.969 310.942 185.669 310.742 185.469L283.547 148.675C283.247 148.275 282.547 148.175 282.148 148.475C281.748 148.775 281.648 149.475 281.948 149.875L308.543 185.869L287.647 199.266C287.347 199.466 287.147 199.866 287.147 200.166C287.147 200.566 287.447 200.866 287.747 200.966L310.543 211.064C306.943 215.464 293.845 232.961 294.845 249.658C295.045 250.358 295.445 250.757 295.945 250.757Z" fill="black"></path><path d="M68.5857 285.152C69.0856 285.152 69.5855 284.752 69.5855 284.252L71.7852 252.258C71.7852 251.658 71.3852 251.258 70.8853 251.158C70.3854 251.158 69.8855 251.558 69.7855 252.058L67.5859 284.053C67.5859 284.652 67.9858 285.152 68.5857 285.152Z" fill="black"></path><path d="M225.259 108.482L234.657 158.773L273.65 188.968L273.75 146.575L262.952 108.082L225.259 108.482Z" fill="white"></path><path d="M284.948 77.1882C287.248 85.7867 288.048 94.8851 286.048 103.484C283.949 112.082 278.749 120.081 271.251 123.88C264.652 127.18 256.853 127.28 249.855 124.88C242.856 122.48 236.757 117.881 231.558 112.382C224.659 115.682 215.561 113.382 210.861 106.983C208.162 103.284 206.862 98.1846 208.462 93.8853C210.062 89.5861 214.961 86.5866 219.06 88.2863C221.46 89.1861 223.259 91.3857 225.659 92.1856C228.358 93.0854 231.458 91.9856 233.557 90.186C235.757 88.3863 237.057 85.8867 238.157 83.1872C240.756 77.4881 237.657 66.79 234.857 57.8915C236.657 57.9915 249.955 61.291 262.752 57.6916C270.751 55.392 272.351 52.0925 273.95 51.8926C275.85 53.5923 278.45 59.0913 279.449 61.4909C281.549 66.59 283.549 71.7891 284.948 77.1882Z" fill="white"></path><path d="M259.655 127.579C263.954 127.579 268.054 126.68 271.653 124.78C279.052 121.081 284.751 113.182 287.05 103.684C288.95 95.685 288.55 86.6866 285.95 76.8882C284.751 72.1891 282.951 67.1899 280.351 61.091C280.051 60.2911 276.952 53.1923 274.552 51.0927C274.353 50.8927 274.053 50.7928 273.753 50.8927C272.953 50.9927 272.253 51.4926 271.253 52.1925C269.753 53.3923 267.354 55.192 262.355 56.6917C251.956 59.5912 240.858 57.7915 236.659 57.0917C235.759 56.8917 235.159 56.7917 234.759 56.7917C234.46 56.7917 234.16 56.8917 233.96 57.1916C233.76 57.4916 233.66 57.7915 233.76 58.0915C236.659 67.1899 239.459 77.3882 237.159 82.6872C235.859 85.5867 234.66 87.6864 232.76 89.3861C230.56 91.1858 227.861 91.9856 225.861 91.2858C224.761 90.8858 223.761 90.1859 222.662 89.3861C221.662 88.5862 220.562 87.8863 219.262 87.3864C217.263 86.5866 214.963 86.6865 212.863 87.6864C210.364 88.7862 208.264 91.0858 207.364 93.5854C205.765 97.9846 206.764 103.284 209.964 107.583C214.763 114.082 223.961 116.681 231.16 113.582C236.859 119.481 243.058 123.58 249.457 125.78C252.856 126.98 256.356 127.579 259.655 127.579ZM284.051 77.3882C286.55 86.8865 286.95 95.585 285.151 103.284C283.051 112.182 277.652 119.581 270.853 123.08C264.954 126.08 257.455 126.48 250.257 123.98C244.058 121.88 237.959 117.781 232.36 111.782C232.06 111.482 231.56 111.382 231.16 111.582C224.661 114.682 216.163 112.482 211.764 106.483C209.064 102.784 208.064 97.9846 209.464 94.2852C210.264 92.1856 211.864 90.3859 213.963 89.4861C215.563 88.7862 217.363 88.6862 218.862 89.2861C219.862 89.686 220.762 90.3859 221.762 91.0858C222.862 91.8856 224.061 92.7855 225.461 93.1854C228.761 94.2852 232.26 92.7855 234.36 90.9858C236.759 88.8862 238.159 86.0867 239.259 83.5871C241.758 77.8881 239.259 68.1897 236.459 59.0913C236.559 59.0913 236.559 59.0913 236.659 59.0913C240.958 59.7912 252.356 61.6909 263.254 58.5914C268.654 56.9917 271.253 54.992 272.853 53.7922C273.253 53.4923 273.653 53.1923 273.953 52.9924C275.352 54.5921 277.452 58.5914 278.852 61.8908C281.051 67.8898 282.751 72.789 284.051 77.3882Z" fill="black"></path><path d="M229.562 105.583C229.762 105.583 229.862 105.583 230.062 105.483C230.562 105.183 230.662 104.583 230.462 104.083C228.162 100.084 223.263 97.6846 218.664 98.3845C218.164 98.4844 217.764 98.9843 217.764 99.4843C217.864 99.9842 218.364 100.384 218.864 100.384C222.663 99.8842 226.763 101.784 228.662 105.183C228.862 105.483 229.162 105.583 229.562 105.583Z" fill="black"></path></g><defs><clipPath id="clip0_1_2057"><rect width="567" height="578" fill="white" transform="matrix(-1 0 0 1 567 0)"></rect></clipPath><clipPath id="clip1_1_2057"><rect width="96" height="76" fill="white" transform="translate(371 50)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$1H = _sfc_main$1H.setup;
_sfc_main$1H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tech/SectionTechPicture.vue");
  return _sfc_setup$1H ? _sfc_setup$1H(props, ctx) : void 0;
};
const SectionTechPicture = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["ssrRender", _sfc_ssrRender$v]]);
const SectionTech_vue_vue_type_style_index_0_scoped_a2246519_lang = "";
const _sfc_main$1G = {
  __name: "SectionTech",
  __ssrInlineRender: true,
  props: {
    text1: {
      default: "В ходе лечения мы применяем новейшее оборудование и инновационные терапевтические методики."
    },
    text2: {
      default: "Лечение в нашем центре проходит без боли и других неприятных ощущений."
    },
    text3: {
      default: "Благодаря комплексному подходу к терапии угревой сыпи мы не только быстро избавляем наших пациентов от кожных проблем, но и предотвращаем их повторное появление в будущем."
    },
    text4: {
      default: "Результат нашего лечения ты сможешь увидеть уже после первого посещения."
    },
    textDisable2: {
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-tech" }, _attrs))} data-v-a2246519>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-a2246519${_scopeId}><div class="content-left" data-v-a2246519${_scopeId}><div class="card-wrapper" data-v-a2246519${_scopeId}><div class="card card-1" data-v-a2246519${_scopeId}><h5 class="card-text" data-v-a2246519${_scopeId}>${ssrInterpolate(props.text1)} `);
            if (!props.textDisable2) {
              _push2(`<br data-v-a2246519${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (!props.textDisable2) {
              _push2(`<br data-v-a2246519${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(props.textDisable2 ? void 0 : props.text2)}</h5></div>`);
            _push2(ssrRenderComponent(SectionTechShadow, { class: "card-shadow" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(SectionTechPicture, { class: "picture" }, null, _parent2, _scopeId));
            _push2(`</div><div class="card-wrapper" data-v-a2246519${_scopeId}><div class="card card-2" data-v-a2246519${_scopeId}><h5 class="card-text" data-v-a2246519${_scopeId}>${ssrInterpolate(props.text3)} <br data-v-a2246519${_scopeId}><br data-v-a2246519${_scopeId}> ${ssrInterpolate(props.text4)}</h5></div>`);
            _push2(ssrRenderComponent(SectionTechShadow, { class: "card-shadow" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode("div", { class: "card-wrapper" }, [
                    createVNode("div", { class: "card card-1" }, [
                      createVNode("h5", { class: "card-text" }, [
                        createTextVNode(toDisplayString(props.text1) + " ", 1),
                        !props.textDisable2 ? (openBlock(), createBlock("br", { key: 0 })) : createCommentVNode("", true),
                        !props.textDisable2 ? (openBlock(), createBlock("br", { key: 1 })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(props.textDisable2 ? void 0 : props.text2), 1)
                      ])
                    ]),
                    createVNode(SectionTechShadow, { class: "card-shadow" })
                  ]),
                  createVNode(SectionTechPicture, { class: "picture" })
                ]),
                createVNode("div", { class: "card-wrapper" }, [
                  createVNode("div", { class: "card card-2" }, [
                    createVNode("h5", { class: "card-text" }, [
                      createTextVNode(toDisplayString(props.text3) + " ", 1),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(props.text4), 1)
                    ])
                  ]),
                  createVNode(SectionTechShadow, { class: "card-shadow" })
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
const _sfc_setup$1G = _sfc_main$1G.setup;
_sfc_main$1G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tech/SectionTech.vue");
  return _sfc_setup$1G ? _sfc_setup$1G(props, ctx) : void 0;
};
const SectionTech = /* @__PURE__ */ _export_sfc(_sfc_main$1G, [["__scopeId", "data-v-a2246519"]]);
const _imports_0$g = "/assets/picture-3c5aa1c6.png";
const SectionRecCard_vue_vue_type_style_index_0_scoped_2cda2cbd_lang = "";
const _sfc_main$1F = {
  __name: "SectionRecCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-rec" }, _attrs))} data-v-2cda2cbd><div class="card-image-wrapper" data-v-2cda2cbd><img class="card-image"${ssrRenderAttr("src", _imports_0$g)} alt="" data-v-2cda2cbd></div><p class="card-text" data-v-2cda2cbd> Увлажняющий крем-филлер для лица с гиалуроновым наполнителем Hydro Active Hyaluron Refill Cream — DR.GRANDEL </p>`);
      _push(ssrRenderComponent(CardInfo$1, { text: "6 350₽" }, null, _parent));
      _push(`<div class="card-button-wrapper" data-v-2cda2cbd>`);
      _push(ssrRenderComponent(MButtonBig, { class: "card-button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Хочу`);
          } else {
            return [
              createTextVNode("Хочу")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1F = _sfc_main$1F.setup;
_sfc_main$1F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-rec/SectionRecCard.vue");
  return _sfc_setup$1F ? _sfc_setup$1F(props, ctx) : void 0;
};
const SectionRecCard = /* @__PURE__ */ _export_sfc(_sfc_main$1F, [["__scopeId", "data-v-2cda2cbd"]]);
const SectionRec_vue_vue_type_style_index_0_scoped_c373d779_lang = "";
const _sfc_main$1E = {
  __name: "SectionRec",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-procedures" }, _attrs))} data-v-c373d779>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl heading" data-v-c373d779${_scopeId}>Рекомендованная косметика</h3>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl heading" }, "Рекомендованная косметика")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SectionRecCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(SectionRecCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(SectionRecCard)
                ]),
                _: 1
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
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-rec/SectionRec.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const SectionRec = /* @__PURE__ */ _export_sfc(_sfc_main$1E, [["__scopeId", "data-v-c373d779"]]);
const FaqItem_vue_vue_type_style_index_0_scoped_c4dc2c5a_lang = "";
const _sfc_main$1D = {
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
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-faq/FaqItem.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const FaqItem = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["__scopeId", "data-v-c4dc2c5a"]]);
const SectionFaq_vue_vue_type_style_index_0_scoped_b15104fc_lang = "";
const _sfc_main$1C = {
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
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-faq/SectionFaq.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const SectionFaq$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-b15104fc"]]);
const InsideView_vue_vue_type_style_index_0_scoped_e63107bd_lang = "";
const _sfc_main$1B = {
  __name: "InsideView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionBanner$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPreview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTech, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionResult, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProcedures, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRec, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevices$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionStories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOther$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTariff, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPlaces, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBonus, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, { class: "section-read" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionBanner$1),
              createVNode(SectionPluses$1),
              createVNode(SectionInfo),
              createVNode(SectionPreview),
              createVNode(SectionTech),
              createVNode(SectionOffer),
              createVNode(SectionResult),
              createVNode(SectionProcedures),
              createVNode(SectionRec),
              createVNode(SectionMasters$1),
              createVNode(SectionDevices$1),
              createVNode(SectionStories),
              createVNode(SectionOther$1),
              createVNode(SectionTariff),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionHelp),
              createVNode(SectionPlaces),
              createVNode(SectionBonus),
              createVNode(SectionRead, { class: "section-read" }),
              createVNode(SectionFaq$1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/InsideView.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const InsideView = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["__scopeId", "data-v-e63107bd"]]);
const _imports_0$f = "/assets/picture-251501ed.png";
const SectionProceduresBadge_vue_vue_type_style_index_0_scoped_6557ba6c_lang = "";
const _sfc_main$1A = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "#",
    style: { "display": "flex" }
  }, _attrs))} data-v-6557ba6c><span class="badge" data-v-6557ba6c>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></a>`);
}
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProceduresBadge.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const SectionProceduresBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["ssrRender", _sfc_ssrRender$u], ["__scopeId", "data-v-6557ba6c"]]);
const SectionProceduresCard_vue_vue_type_style_index_0_scoped_f6347a6c_lang = "";
const _sfc_main$1z = {
  __name: "SectionProceduresCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-f6347a6c><div class="card-image-wrap" data-v-f6347a6c><img${ssrRenderAttr("src", _imports_0$f)} class="card-image" alt="" data-v-f6347a6c></div><div style="${ssrRenderStyle({ "display": "flex", "gap": "10px" })}" data-v-f6347a6c>`);
      _push(ssrRenderComponent(SectionProceduresBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SectionProceduresBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detox Concept`);
          } else {
            return [
              createTextVNode("Detox Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h5 class="card-heading h-sm-ultra" data-v-f6347a6c> Аппаратная чистка лица Hydro Peel Plus </h5><p class="card-text text-sm" data-v-f6347a6c> Красота и здоровье кожи надолго, всего за одну процедуру. </p>`);
      _push(ssrRenderComponent(CardInfo$1, {
        icon: "time",
        title: "Время процедуры",
        text: "1 час 30 минут"
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo$1, {
        icon: "pay",
        title: "Стоимость",
        text: "4 500₽"
      }, null, _parent));
      _push(ssrRenderComponent(CardLink, { class: "card-link" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProceduresCard.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const SectionProceduresCard = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["__scopeId", "data-v-f6347a6c"]]);
const Filter_vue_vue_type_style_index_0_scoped_c6645c24_lang = "";
const _sfc_main$1y = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: ["active"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["filter", { active: props.active }]
      }, _attrs))} data-v-c6645c24>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Filter.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["__scopeId", "data-v-c6645c24"]]);
const WidgetFilters_vue_vue_type_style_index_0_scoped_0858234a_lang = "";
const _sfc_main$1x = {
  __name: "WidgetFilters",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget-filters" }, _attrs))} data-v-0858234a><!--[-->`);
      ssrRenderList(props.items, (item, index) => {
        _push(ssrRenderComponent(Filter, {
          active: index === 0,
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/widgets/filters/WidgetFilters.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const WidgetFilters = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["__scopeId", "data-v-0858234a"]]);
const SectionCategories_vue_vue_type_style_index_0_scoped_6a2a131d_lang = "";
const _sfc_main$1w = {
  __name: "SectionCategories",
  __ssrInlineRender: true,
  setup(__props) {
    const filtersList = [
      "Все процедуры",
      "AntiAcne Concept",
      "Clear Concept",
      "Detox Concept",
      "Lifting Concept",
      "Brigth Concept",
      "Hydro Concept",
      "Red Concept",
      "Personal Concept"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-categories" }, _attrs))} data-v-6a2a131d>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Процедуры"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl section-categories-title" data-v-6a2a131d${_scopeId}>Процедуры</h1>`);
            _push2(ssrRenderComponent(WidgetFilters, { items: filtersList }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-6a2a131d${_scopeId}>`);
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProceduresCard, null, null, _parent2, _scopeId));
            _push2(`</div><div class="button-wrapper" data-v-6a2a131d${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonOutlineBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Показать ещё процедуры`);
                } else {
                  return [
                    createTextVNode("Показать ещё процедуры")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Процедуры"] }),
              createVNode("h1", { class: "h-xxl section-categories-title" }, "Процедуры"),
              createVNode(WidgetFilters, { items: filtersList }),
              createVNode("div", { class: "cards" }, [
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard),
                createVNode(SectionProceduresCard)
              ]),
              createVNode("div", { class: "button-wrapper" }, [
                createVNode(MButtonOutlineBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Показать ещё процедуры")
                  ]),
                  _: 1
                })
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
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/procedures/section-categories/SectionCategories.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const SectionCategories = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["__scopeId", "data-v-6a2a131d"]]);
const _sfc_main$1v = {
  __name: "ProceduresView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionCategories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewPacients, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionCategories),
              createVNode(SectionOffer),
              createVNode(SectionMasters$1),
              createVNode(SectionReviewPacients),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionHelp)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ProceduresView.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const SectionPrice_vue_vue_type_style_index_0_scoped_c00ec4b5_lang = "";
const _sfc_main$1u = {
  __name: "SectionPrice",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-price" }, _attrs))} data-v-c00ec4b5>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-c00ec4b5${_scopeId}>Цены на процедуры</h3><div class="items" data-v-c00ec4b5${_scopeId}>`);
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPriceItem, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Цены на процедуры"),
              createVNode("div", { class: "items" }, [
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem),
                createVNode(SectionPriceItem)
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
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-price/SectionPrice.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const SectionPrice = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["__scopeId", "data-v-c00ec4b5"]]);
const BadgeMd_vue_vue_type_style_index_0_scoped_981124cc_lang = "";
const _sfc_main$1t = {
  __name: "BadgeMd",
  __ssrInlineRender: true,
  props: ["type"],
  setup(__props) {
    const props = __props;
    const className = `badge-${props.type}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["badge-md", className]
      }, _attrs))} data-v-981124cc><a href="#" class="badge-md-link" data-v-981124cc></a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/BadgeMd.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const BadgeMd = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["__scopeId", "data-v-981124cc"]]);
const MainTag_vue_vue_type_style_index_0_scoped_b90906e9_lang = "";
const _sfc_main$1s = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tag" }, _attrs))} data-v-b90906e9>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/MainTag.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const MainTag = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["ssrRender", _sfc_ssrRender$t], ["__scopeId", "data-v-b90906e9"]]);
const _imports_0$e = "/assets/picture-89105952.png";
const _sfc_main$1r = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "668",
    height: "443",
    viewBox: "0 0 668 443",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_3527)"><ellipse cx="334" cy="221.5" rx="234" ry="121.5" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_3527" x="0" y="0" width="668" height="443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_3527"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/PictureShadow.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const PictureShadow = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$1q = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "544",
    height: "600",
    viewBox: "0 0 544 600",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 150C0 67.1573 67.1573 0 150 0H524C535.046 0 544 8.95431 544 20V450C544 532.843 476.843 600 394 600H20C8.95429 600 0 591.046 0 580V150Z" fill="#EDE4DA"></path></svg>`);
}
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionPictureBg.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const SectionPictureBg = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["ssrRender", _sfc_ssrRender$r]]);
const SectionMainPicture_vue_vue_type_style_index_0_scoped_a6fa18bd_lang = "";
const _sfc_main$1p = {
  __name: "SectionMainPicture",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture-wrapper" }, _attrs))} data-v-a6fa18bd>`);
      _push(ssrRenderComponent(SectionPictureBg, { class: "picture-bg" }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0$e)} alt="" class="picture-photo" data-v-a6fa18bd>`);
      _push(ssrRenderComponent(PictureShadow, { class: "picture-shadow" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionMainPicture.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const SectionMainPicture = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["__scopeId", "data-v-a6fa18bd"]]);
const SectionMain_vue_vue_type_style_index_0_scoped_28e1f969_lang = "";
const _sfc_main$1o = {
  __name: "SectionMain",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-main" }, _attrs))} data-v-28e1f969>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, {
              class: "bread-crumbs",
              items: ["Главная", "Аппараты", "Skinova Pro"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="section-content" data-v-28e1f969${_scopeId}><div class="section-content-left" data-v-28e1f969${_scopeId}>`);
            _push2(ssrRenderComponent(SectionMainPicture, { class: "picture" }, null, _parent2, _scopeId));
            _push2(`</div><div class="section-content-right" data-v-28e1f969${_scopeId}><h1 class="heading" data-v-28e1f969${_scopeId}>Skinova Pro — новое поколение ультразвука</h1><div class="badges" data-v-28e1f969${_scopeId}>`);
            _push2(ssrRenderComponent(BadgeMd, { type: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`AntiAcne Concept`);
                } else {
                  return [
                    createTextVNode("AntiAcne Concept")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BadgeMd, { type: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Detox Concept`);
                } else {
                  return [
                    createTextVNode("Detox Concept")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(BadgeMd, { type: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lifting Concept`);
                } else {
                  return [
                    createTextVNode("Lifting Concept")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><p class="text" data-v-28e1f969${_scopeId}> Первая в мире ультразвуковая 3D-волна поколения triple действует четко в цель: мгновенно омолаживает кожу на клеточном уровне, стимулирует регенерацию, помогает в лечении дерматологических проблем и восстановлении после агрессивных процедур и пластики. </p><p class="heading-mini" data-v-28e1f969${_scopeId}>Показания</p><div class="tags" data-v-28e1f969${_scopeId}>`);
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Морщины`);
                } else {
                  return [
                    createTextVNode("Морщины")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Дряблость кожи`);
                } else {
                  return [
                    createTextVNode("Дряблость кожи")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Угревая сыпь, акне`);
                } else {
                  return [
                    createTextVNode("Угревая сыпь, акне")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Атопический дерматит`);
                } else {
                  return [
                    createTextVNode("Атопический дерматит")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Экзема`);
                } else {
                  return [
                    createTextVNode("Экзема")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Трофические язвы`);
                } else {
                  return [
                    createTextVNode("Трофические язвы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Келоиды`);
                } else {
                  return [
                    createTextVNode("Келоиды")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Волчанка`);
                } else {
                  return [
                    createTextVNode("Волчанка")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MainTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Постакне`);
                } else {
                  return [
                    createTextVNode("Постакне")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, {
                class: "bread-crumbs",
                items: ["Главная", "Аппараты", "Skinova Pro"]
              }),
              createVNode("div", { class: "section-content" }, [
                createVNode("div", { class: "section-content-left" }, [
                  createVNode(SectionMainPicture, { class: "picture" })
                ]),
                createVNode("div", { class: "section-content-right" }, [
                  createVNode("h1", { class: "heading" }, "Skinova Pro — новое поколение ультразвука"),
                  createVNode("div", { class: "badges" }, [
                    createVNode(BadgeMd, { type: "1" }, {
                      default: withCtx(() => [
                        createTextVNode("AntiAcne Concept")
                      ]),
                      _: 1
                    }),
                    createVNode(BadgeMd, { type: "2" }, {
                      default: withCtx(() => [
                        createTextVNode("Detox Concept")
                      ]),
                      _: 1
                    }),
                    createVNode(BadgeMd, { type: "3" }, {
                      default: withCtx(() => [
                        createTextVNode("Lifting Concept")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("p", { class: "text" }, " Первая в мире ультразвуковая 3D-волна поколения triple действует четко в цель: мгновенно омолаживает кожу на клеточном уровне, стимулирует регенерацию, помогает в лечении дерматологических проблем и восстановлении после агрессивных процедур и пластики. "),
                  createVNode("p", { class: "heading-mini" }, "Показания"),
                  createVNode("div", { class: "tags" }, [
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Морщины")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Дряблость кожи")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Угревая сыпь, акне")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Атопический дерматит")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Экзема")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Трофические язвы")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Келоиды")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Волчанка")
                      ]),
                      _: 1
                    }),
                    createVNode(MainTag, null, {
                      default: withCtx(() => [
                        createTextVNode("Постакне")
                      ]),
                      _: 1
                    })
                  ])
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
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionMain.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const SectionMain = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-28e1f969"]]);
const _imports_0$d = "/assets/1-48a6245c.png";
const _imports_1$4 = "/assets/2-8cd1aa72.png";
const _imports_2$1 = "/assets/3-e6ee3108.png";
const _imports_3$1 = "/assets/4-d68159f1.png";
const _imports_4$1 = "/assets/5-927f0a5f.png";
const _imports_5$1 = "/assets/6-f9d20b06.png";
const _imports_6$1 = "/assets/photo-f99b9bff.png";
const ListItem_vue_vue_type_style_index_0_scoped_9eafcba5_lang = "";
const _sfc_main$1n = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "list-item" }, _attrs))} data-v-9eafcba5><div class="number-wrapper" data-v-9eafcba5>`);
  ssrRenderSlot(_ctx.$slots, "img", {}, null, _push, _parent);
  _push(`</div><p class="list-item-text" data-v-9eafcba5>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-pluses/ListItem.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const ListItem = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-9eafcba5"]]);
const SectionPluses_vue_vue_type_style_index_0_scoped_9b0959b8_lang = "";
const _sfc_main$1m = {
  __name: "SectionPluses",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-pluses" }, _attrs))} data-v-9b0959b8>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="h-xl section-main-heading" data-v-9b0959b8${_scopeId}> Преимущества ультразвукового омоложения SKINOVA PRO </h4><div class="content-wrapper" data-v-9b0959b8${_scopeId}><div class="list" data-v-9b0959b8${_scopeId}>`);
            _push2(ssrRenderComponent(ListItem, { "img-src": "./1.png" }, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0$d)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0$d,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Молниеносное переключение между 3 частотами создает совершенно новую 3D-волну, которая действует не ниже дермы, как ультразвуковые аппараты прежних поколений, а в зоне дермы и эпидермиса `);
                } else {
                  return [
                    createTextVNode(" Молниеносное переключение между 3 частотами создает совершенно новую 3D-волну, которая действует не ниже дермы, как ультразвуковые аппараты прежних поколений, а в зоне дермы и эпидермиса ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ListItem, null, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_1$4)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1$4,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Использование трех разных частот усиливает эффективность процедуры и дает стойкий, выразительный и пролонгированный эффект заживления поврежденной кожи и омоложения `);
                } else {
                  return [
                    createTextVNode(" Использование трех разных частот усиливает эффективность процедуры и дает стойкий, выразительный и пролонгированный эффект заживления поврежденной кожи и омоложения ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ListItem, null, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2$1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2$1,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Благодаря мощной частоте, время процедуры сокращается с 20-30 минут до 12 минут! Заглянуть к косметологу можно в обеденный перерыв! `);
                } else {
                  return [
                    createTextVNode(" Благодаря мощной частоте, время процедуры сокращается с 20-30 минут до 12 минут! Заглянуть к косметологу можно в обеденный перерыв! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ListItem, null, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_3$1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3$1,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Процедура может использоваться как отдельная методика, а также до и после агрессивных воздействий `);
                } else {
                  return [
                    createTextVNode(" Процедура может использоваться как отдельная методика, а также до и после агрессивных воздействий ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ListItem, null, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4$1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4$1,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Реабилитация не требуется. Skinova Pro не вызывает отеков даже у склонных к ним пациентам `);
                } else {
                  return [
                    createTextVNode(" Реабилитация не требуется. Skinova Pro не вызывает отеков даже у склонных к ним пациентам ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(ListItem, null, {
              img: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5$1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5$1,
                      alt: "",
                      class: "number-img"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 100% комфортная процедура, не требующая анестезии `);
                } else {
                  return [
                    createTextVNode(" 100% комфортная процедура, не требующая анестезии ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="content-right" data-v-9b0959b8${_scopeId}><h4 class="title" data-v-9b0959b8${_scopeId}>Видео процедуры</h4><div class="photo-wrapper" data-v-9b0959b8${_scopeId}>`);
            _push2(ssrRenderComponent(IconPlay, { class: "photo-icon" }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="" class="photo" data-v-9b0959b8${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("h4", { class: "h-xl section-main-heading" }, " Преимущества ультразвукового омоложения SKINOVA PRO "),
              createVNode("div", { class: "content-wrapper" }, [
                createVNode("div", { class: "list" }, [
                  createVNode(ListItem, { "img-src": "./1.png" }, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$d,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Молниеносное переключение между 3 частотами создает совершенно новую 3D-волну, которая действует не ниже дермы, как ультразвуковые аппараты прежних поколений, а в зоне дермы и эпидермиса ")
                    ]),
                    _: 1
                  }),
                  createVNode(ListItem, null, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_1$4,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Использование трех разных частот усиливает эффективность процедуры и дает стойкий, выразительный и пролонгированный эффект заживления поврежденной кожи и омоложения ")
                    ]),
                    _: 1
                  }),
                  createVNode(ListItem, null, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_2$1,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Благодаря мощной частоте, время процедуры сокращается с 20-30 минут до 12 минут! Заглянуть к косметологу можно в обеденный перерыв! ")
                    ]),
                    _: 1
                  }),
                  createVNode(ListItem, null, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_3$1,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Процедура может использоваться как отдельная методика, а также до и после агрессивных воздействий ")
                    ]),
                    _: 1
                  }),
                  createVNode(ListItem, null, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_4$1,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Реабилитация не требуется. Skinova Pro не вызывает отеков даже у склонных к ним пациентам ")
                    ]),
                    _: 1
                  }),
                  createVNode(ListItem, null, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_5$1,
                        alt: "",
                        class: "number-img"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" 100% комфортная процедура, не требующая анестезии ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode("h4", { class: "title" }, "Видео процедуры"),
                  createVNode("div", { class: "photo-wrapper" }, [
                    createVNode(IconPlay, { class: "photo-icon" }),
                    createVNode("img", {
                      src: _imports_6$1,
                      alt: "",
                      class: "photo"
                    })
                  ])
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
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-pluses/SectionPluses.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const SectionPluses = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["__scopeId", "data-v-9b0959b8"]]);
const _imports_0$c = "/assets/photo-0c683ecc.png";
const SectionBanner_vue_vue_type_style_index_0_scoped_18f1dfaf_lang = "";
const _sfc_main$1l = {
  __name: "SectionBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-banner" }, _attrs))} data-v-18f1dfaf>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$c)} alt="" class="photo" data-v-18f1dfaf${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$c,
                alt: "",
                class: "photo"
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
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-banner/SectionBanner.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const SectionBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-18f1dfaf"]]);
const TechView_vue_vue_type_style_index_0_scoped_8d3bab5d_lang = "";
const _sfc_main$1k = {
  __name: "TechView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMain, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPrice, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBonus, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq$1, { class: "section-help" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMain),
              createVNode(SectionPluses),
              createVNode(SectionBanner),
              createVNode(SectionPrice),
              createVNode(SectionMasters$1),
              createVNode(SectionBonus),
              createVNode(SectionRead),
              createVNode(SectionFaq$1, { class: "section-help" }),
              createVNode(SectionHelp)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/TechView.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const TechView = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-8d3bab5d"]]);
const PricesSidebar_vue_vue_type_style_index_0_scoped_a60d4880_lang = "";
const _sfc_main$1j = {
  __name: "PricesSidebar",
  __ssrInlineRender: true,
  props: ["activeIndex", "itemsConcepts", "setActiveCategory"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-a60d4880><h6 class="link-mini" data-v-a60d4880>Услуги по концептам</h6><div class="link-group" data-v-a60d4880><!--[-->`);
      ssrRenderList(props.itemsConcepts, (item, index) => {
        _push(`<h5 class="${ssrRenderClass([props.activeIndex === index && "active", "link-text"])}" data-v-a60d4880>${ssrInterpolate(item.title)}</h5>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesSidebar.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const PricesSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-a60d4880"]]);
const PricesCard_vue_vue_type_style_index_0_scoped_3eed094b_lang = "";
const _sfc_main$1i = {
  __name: "PricesCard",
  __ssrInlineRender: true,
  props: ["title", "price", "time", "tech"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-price" }, _attrs))} data-v-3eed094b><div class="card-info" data-v-3eed094b><div class="card-info-group-1" data-v-3eed094b><div class="card-info-item-1" data-v-3eed094b><p class="card-title" data-v-3eed094b>Код услуги</p><h6 class="h-xs" data-v-3eed094b>-</h6></div><div data-v-3eed094b><p class="card-title" data-v-3eed094b>Наименование</p><h6 class="h-xs" data-v-3eed094b>${ssrInterpolate(props.title)}</h6></div></div><div data-v-3eed094b><p class="card-title" data-v-3eed094b>Аппарат</p><h6 class="h-xs" data-v-3eed094b>${ssrInterpolate(props.tech || "-")}</h6></div><div class="card-info-group-3" data-v-3eed094b><div data-v-3eed094b><p class="card-title" data-v-3eed094b>Время процедуры</p><h6 class="h-xs" data-v-3eed094b>${ssrInterpolate(props.time)} мин</h6></div><div data-v-3eed094b><p class="card-title" data-v-3eed094b>Стоимость</p><h6 class="h-xs" data-v-3eed094b>${ssrInterpolate(props.price)}₽</h6></div></div></div><div class="badges" data-v-3eed094b>`);
      _push(ssrRenderComponent(BadgeMd, { type: "3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BadgeMd, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Detox Concept`);
          } else {
            return [
              createTextVNode("Detox Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BadgeMd, { type: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lifting Concept`);
          } else {
            return [
              createTextVNode("Lifting Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="buttons" data-v-3eed094b><button class="button-accent" data-v-3eed094b>Записаться</button><button class="button-second" data-v-3eed094b>Об услуге</button></div></div>`);
    };
  }
};
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesCard.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const PricesCard = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-3eed094b"]]);
const PricesSidebarMobile_vue_vue_type_style_index_0_scoped_328797b1_lang = "";
const _sfc_main$1h = {
  __name: "PricesSidebarMobile",
  __ssrInlineRender: true,
  props: ["activeIndex", "itemsConcepts", "setActiveCategory"],
  setup(__props) {
    let isActive = ref(false);
    const onClickHandler = () => {
      isActive.value = !isActive.value;
    };
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "nav",
        onClick: onClickHandler
      }, _attrs))} data-v-328797b1><button class="${ssrRenderClass([{ active: unref(isActive) }, "nav-main-button"])}" data-v-328797b1>${ssrInterpolate(props.itemsConcepts[__props.activeIndex || 0].title)}</button><span class="${ssrRenderClass([{ active: unref(isActive) }, "nav-icon-button"])}" data-v-328797b1><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" data-v-328797b1><circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#AE8C8E" data-v-328797b1></circle><path d="M20.1545 13.6063C20.3873 13.6063 20.5827 13.6851 20.7405 13.8429C20.8982 14.0007 20.9769 14.1958 20.9763 14.4281L20.9763 23.612L24.9827 19.6056C25.1471 19.4412 25.3424 19.3591 25.5687 19.3591C25.795 19.3591 25.99 19.4412 26.1538 19.6056C26.3182 19.77 26.4004 19.9617 26.4004 20.1809C26.4004 20.4 26.3182 20.5918 26.1538 20.7562L20.7298 26.1802C20.6476 26.2624 20.5586 26.3205 20.4627 26.3545C20.3668 26.3884 20.2641 26.4057 20.1545 26.4062C20.0449 26.4062 19.9386 26.389 19.8356 26.3545C19.7326 26.32 19.6471 26.2619 19.5792 26.1802L14.1551 20.7562C13.9908 20.5918 13.9086 20.4 13.9086 20.1809C13.9086 19.9617 13.9908 19.77 14.1551 19.6056C14.3195 19.4412 14.5148 19.3591 14.7411 19.3591C14.9674 19.3591 15.1624 19.4412 15.3262 19.6056L19.3327 23.612L19.3327 14.4281C19.3327 14.1952 19.4116 13.9999 19.5693 13.8421C19.7271 13.6843 19.9222 13.6057 20.1545 13.6063Z" fill="white" data-v-328797b1></path></svg></span><div class="${ssrRenderClass([{ "nav-list-active": unref(isActive) }, "nav-list"])}" data-v-328797b1><div class="nav-list-scroll" data-v-328797b1><!--[-->`);
      ssrRenderList(props.itemsConcepts, (item, index) => {
        _push(`<button class="${ssrRenderClass([props.activeIndex === index && "active", "nav-list-button"])}" data-v-328797b1>${ssrInterpolate(item.title)}</button>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesSidebarMobile.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const PricesSidebarMobile = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-328797b1"]]);
const consult = [
  {
    text: "Прием (осмотр, консультация) врача- косметолога первичный с диагностикой камерой Janus PRO Sunlike",
    time: "60",
    price: "2000"
  },
  {
    text: "Прием (осмотр, консультация) врача-косметолога певичный без диагностики",
    time: "30",
    price: "1500"
  },
  {
    text: "Прием (осмотр, консультация) врача- косметолога повторный с диагностикой камерой Janus PRO Sunlike",
    time: "30",
    price: "1000"
  },
  {
    text: "Прием (осмотр, консультация) врача- косметолога повторный без диагностики камерой Janus PRO Sunlike",
    time: "30",
    price: "0"
  },
  {
    text: "Генетическое тестирование по профилю Косметология",
    time: "30",
    price: "15000"
  },
  {
    text: "Интерпретация генетического теста (консультация по результатам исследования)",
    time: "60",
    price: "3000"
  },
  {
    text: "Печать книги дополнительно к исследованию",
    time: "",
    price: "1500"
  }
];
const antiacneConcept = [
  {
    text: "AntiAcne Concept, фотодинамическая терапия Heleo4 AntiAcne (гель антиакне для ФДТ)",
    tech: "Heleo4",
    time: "60",
    price: "6000"
  },
  {
    text: "AntiAcne Concept, Affinity AntiAcne (раствор кислоты для Аффинити плюс маска противовосп кремовая)",
    tech: "Affinity",
    time: "60",
    price: "5000"
  },
  {
    text: "AntiAcne Concept, Jet Peel AntiAcne (Пилинг, барофорез Clear и маской противовосп)",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "AntiAcne Concept, PROFACIAL AntiAcne (гель Антиакне вводится без RF)",
    tech: "PROFACIAL",
    time: "60",
    price: "6000"
  },
  {
    text: "AntiAcne Concept, микротоковая терапия AntiAcne (лифтинг и введение геля антиакне)",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  }
];
const clearConcept = [
  {
    text: "Clear Concept, PROFACIAL Clear Concept без RF- лифтинга (гель антиакне)",
    tech: "PROFACIAL",
    time: "40",
    price: "6000"
  },
  {
    text: "Clear Concept, PROFACIAL Clear Concept c RF- лифтингом (гель антиакне)",
    tech: "PROFACIAL",
    time: "60",
    price: "7000"
  },
  {
    text: "Clear Concept, Geneo Balance без RF-лифтинга",
    tech: "Geneo+",
    time: "40",
    price: "7000"
  },
  {
    text: "Clear Concept, Geneo Balance с RF-лифтингом",
    tech: "Geneo+",
    time: "60",
    price: "8000"
  },
  {
    text: "Clear Concept, Geneo Retouch без RF-лифтинга",
    tech: "Retouche",
    time: "40",
    price: "7000"
  },
  {
    text: "Clear Concept, Geneo Retouch c RF-лифтингом",
    tech: "Retouche",
    time: "60",
    price: "8000"
  },
  {
    text: "Clear Concept, Jet Peel Clear Concept (Программа Стимуляция -пилинг, барофорез с маской поросуживающей)",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "Clear Concept, Affinity (лосьон с кислотой для Аффинити и маска поросуживающая)",
    tech: "Affinity",
    time: "60",
    price: "5000"
  }
];
const detoxConcept = [
  {
    text: "Detox Concept, фотодинамическая терапия Heleo4 Detox, лицо (Антиэйдж гель для ФДТ)",
    tech: "Heleo4",
    time: "60",
    price: "6000"
  },
  {
    text: "Detox Concept, фотодинамическая терапия Heleo4 Detox, лицо + шея (Антиэйдж гель для ФДТ)",
    tech: "Heleo4",
    time: "60",
    price: "9000"
  },
  {
    text: "Detox Concept, Geneo Detox без RF-лифтинга",
    tech: "Geneo+",
    time: "40",
    price: "7000"
  },
  {
    text: "Detox Concept, Geneo Detox c RF- лифтингом",
    tech: "Geneo+",
    time: "60",
    price: "8000"
  },
  {
    text: "Detox Concept, Jet Peel Detox (лимфодренаж, барофорез, маска)",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "Detox Concept, микротоковый лимфодренаж Detox (микротоковый лимфодренаж в перчатках с введением геля от отеков)",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  },
  {
    text: "Detox Concept, PROFACIAL Detox без RF-лифтинга",
    tech: "PROFACIAL",
    time: "40",
    price: "7000"
  },
  {
    text: "Detox Concept, PROFACIAL Detox c RF-лифтингом",
    tech: "PROFACIAL",
    time: "60",
    price: "8000"
  }
];
const liftingConcept = [
  {
    text: "Lifting Concept, Geneo Revive",
    tech: "Geneo+",
    time: "60",
    price: "7500"
  },
  { text: "Lifting Concept, Geneo Glam	Geneo+", time: "60", price: "7500" },
  {
    text: "Lifting Concept, микротововый лифтинг (пробы, введение геля)",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  },
  {
    text: "Lifting Concept, TurboLift (с биомаской) - работа по лифтинговым мышцам, введение геля и биомаска",
    tech: "BioUltimateGold",
    time: "60",
    price: "6000"
  },
  {
    text: "Lifting Concept, RF-лифтинг (на Geneo)",
    tech: "Geneo+",
    time: "40",
    price: "4000"
  },
  {
    text: "Lifting Concept, Jet Peel Lifting (с 3D массажем и введением концентрата с аргирелином)",
    tech: "Jet Peel",
    time: "60",
    price: "8000"
  },
  {
    text: "Lifting Concept, Affinity Lifting (Аффинити и биореф с альгинатной маской)",
    tech: "Affinity",
    time: "60",
    price: "6000"
  },
  {
    text: "Lifting Concept, Jet Peel + Affinity (лимфодренаж Джет пил и программа Аффинити)",
    tech: "Jet Peel + Affinity",
    time: "90",
    price: "9000"
  },
  {
    text: "Lifting Concept, PROFACIAL lifting (введение концентрата с эластином под УЗ и микроток с RF-лифтингом )",
    tech: "PROFACIAL",
    time: "60",
    price: "8000"
  }
];
const brightConcept = [
  {
    text: "Bright Concept, Geneo Illuminate без RF-лифтинга",
    tech: "Geneo+",
    time: "40",
    price: "7000"
  },
  {
    text: "Bright Concept, Geneo Illuminate c RF-лифтингом",
    tech: "Geneo+",
    time: "60",
    price: "8000"
  },
  {
    text: "Bright Concept, Jet Peel Bright (пилинг, барофорез осветл конц и маска осветляющая)",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "Bright Concept, Affinity Bright (гель осветляющий и маска осветляющая)",
    tech: "Affinity",
    time: "60",
    price: "5000"
  },
  {
    text: "Bright Concept, PROFACIAL Bright без RF-лифтинга с осветляющим гелем",
    tech: "PROFACIAL",
    time: "40",
    price: "7000"
  },
  {
    text: "Bright Concept, PROFACIAL Bright с RF-лифтингом с осветляющим гелем",
    tech: "PROFACIAL",
    time: "60",
    price: "8000"
  },
  {
    text: "Bright Concept, микротоковая терапия Bright с осветляющим гелем",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  }
];
const hydroConcept = [
  {
    text: "Geneo Hydro с RF- лифтингом",
    tech: "Geneo+",
    time: "60",
    price: "8000"
  },
  {
    text: "Geneo Hydro без RF-лифтинга",
    tech: "Geneo+",
    time: "40",
    price: "7000"
  },
  {
    text: "Jet Peel Hydro лимфодренаж и барофорез ГК, маска увлажняющая",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "Affinity Hydro (гель увлажняющий и маска увлажняющая)",
    tech: "Affinity",
    time: "60",
    price: "5000"
  },
  {
    text: "PROFACIAL Hydro без RF-лифтинга (по увлажняющему гелю)",
    tech: "PROFACIAL",
    time: "40",
    price: "7000"
  },
  {
    text: "PROFACIAL Hydrо с RF-лифтингом (по увлажняющему гелю)",
    tech: "PROFACIAL",
    time: "60",
    price: "8000"
  },
  {
    text: "микротоковая терапия Hydro (введение увлажняющего геля)",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  }
];
const redConcept = [
  {
    text: "Red Concept, фотодинамическая терапия Heleo4 Red (гель Антиакне или Антиэйдж)",
    tech: "Heleo4",
    time: "60",
    price: "6000"
  },
  {
    text: "Red Concept, Affinity Red (гель успокаивающий и маска SOS от купероза)",
    tech: "Affinity",
    time: "60",
    price: "5000"
  },
  {
    text: "Red Concept, Jet Peel Red (лимфодренаж и маска SOS от купероза)",
    tech: "Jet Peel",
    time: "60",
    price: "6000"
  },
  {
    text: "Red Concept, микротоковая терапия Red (введение геля успокаивающего)",
    tech: "BioUltimateGold",
    time: "60",
    price: "4000"
  }
];
const personalConcept = [
  {
    text: "Personal Concept, Skin Retreat HELEO4 (массаж, фотобиомодуляция, маска)",
    tech: "Heleo 4",
    time: "60",
    price: "6000"
  },
  {
    text: "Personal Concept, ботулинотерапия, Миотокс 1 ед.",
    time: "30",
    price: "320"
  },
  {
    text: "Personal Concept, Биоревитализация, Belotero Hydro, 1 мл.",
    time: "60",
    price: "15000"
  },
  {
    text: "Personal Concept, Биоревитализация, Belotero Hydro, 2 мл.",
    time: "60",
    price: "19000"
  },
  {
    text: "Personal Concept, Биоревитализация, Profhilo, 2 мл.",
    time: "60",
    price: "19800"
  },
  {
    text: "Personal Concept, Биоревитализация, Bellarti Hydrate, 1 мл",
    time: "60",
    price: "13400"
  },
  {
    text: "Personal Concept, Биоревитализация, Bellarti Hydrate, 2 мл",
    time: "60",
    price: "17000"
  },
  {
    text: "Personal Concept, Биоревитализация, Bellarti Lift, 1 мл.",
    time: "60",
    price: "13400"
  },
  {
    text: "Personal Concept, Биоревитализация, Bellarti Lift, 2 мл.",
    time: "60",
    price: "17000"
  },
  {
    text: "Personal Concept, Биоревитализация, Viscoderm Skinko, 5 мл.",
    time: "60",
    price: "8200"
  },
  {
    text: "Personal Concept, Биоревитализация, Viscoderm Skinko Е, 5 мл.",
    time: "60",
    price: "8900"
  },
  {
    text: "Personal Concept, Биоревитализация, Curasen, 2 мл",
    time: "60",
    price: "7800"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Soft, 1 мл",
    time: "60",
    price: "17500"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Balance, 1 мл",
    time: "60",
    price: "18500"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Intense, 1 мл",
    time: "60",
    price: "19500"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Volume, 1 мл",
    time: "60",
    price: "20000"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Volume, 2 мл",
    time: "60",
    price: "30000"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Lips Contour 0,6 мл",
    time: "60",
    price: "15500"
  },
  {
    text: "Personal Concept, контурная пластика, Belotero Lips Shape 0,6 мл",
    time: "60",
    price: "15500"
  },
  {
    text: "Personal Concept, контурная пластика, Radiesse, 1,5 мл.",
    time: "60",
    price: "28000"
  },
  {
    text: "Personal Concept, контурная пластика, Radiesse, 3 мл.",
    time: "60",
    price: "40000"
  },
  {
    text: "Personal Concept, чистка лица механическая (гель разрыхляющий, чистка ручная, маска кремовая)",
    time: "60",
    price: "4500"
  },
  {
    text: "Personal Concept, чистка лица комбинированная (гель разрыхляющий,Узпилинг, ручная чистка, маска )",
    time: "90",
    price: "5500"
  },
  {
    text: "Personal Concept, PRX T33-терапия, 2 мл.",
    time: "45",
    price: "7000"
  }
];
const allConcepts = personalConcept.concat(redConcept).concat(hydroConcept).concat(brightConcept).concat(liftingConcept).concat(detoxConcept).concat(clearConcept).concat(antiacneConcept);
const SectionPrices_vue_vue_type_style_index_0_scoped_c571e4d9_lang = "";
const _sfc_main$1g = {
  __name: "SectionPrices",
  __ssrInlineRender: true,
  setup(__props) {
    const activeCategory = ref(1);
    const categories = [
      {
        title: "Все категории",
        items: allConcepts
      },
      {
        title: "Консультации",
        items: consult
      },
      {
        title: "AntiAcne Concept",
        items: antiacneConcept
      },
      {
        title: "Clear Concept",
        items: clearConcept
      },
      {
        title: "Detox Concept",
        items: detoxConcept
      },
      {
        title: "Lifting Concept",
        items: liftingConcept
      },
      {
        title: "Bright Concept",
        items: brightConcept
      },
      {
        title: "Personal Concept",
        items: personalConcept
      }
    ];
    const setActiveCategory = (numberCategory) => {
      activeCategory.value = numberCategory;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-prices" }, _attrs))} data-v-c571e4d9>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, {
              class: "bread-crumbs",
              items: ["Главная", "Цены"]
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-c571e4d9${_scopeId}>Цены</h1><p class="text text-sm" data-v-c571e4d9${_scopeId}> Здесь ты найдешь стоимость услуг, предлагаемых в нашем косметологическом центре Face Concept. После тщательного обследования и установления точного диагноза, наш специалист подберет для тебя индивидуальный курс лечения. Этот курс будет включать процедуры для домашнего ухода и системную терапию. </p><div class="workspace" data-v-c571e4d9${_scopeId}>`);
            _push2(ssrRenderComponent(PricesSidebar, {
              class: "sidebar-lg",
              itemsConcepts: categories,
              setActiveCategory,
              activeIndex: activeCategory.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PricesSidebarMobile, {
              class: "sidebar-sm",
              itemsConcepts: categories,
              setActiveCategory,
              activeIndex: activeCategory.value
            }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-c571e4d9${_scopeId}><!--[-->`);
            ssrRenderList(categories[activeCategory.value].items, (item, index) => {
              _push2(ssrRenderComponent(PricesCard, {
                key: index,
                price: item.price,
                time: item.time,
                title: item.text,
                tech: item.tech
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, {
                class: "bread-crumbs",
                items: ["Главная", "Цены"]
              }),
              createVNode("h1", { class: "h-xxl heading" }, "Цены"),
              createVNode("p", { class: "text text-sm" }, " Здесь ты найдешь стоимость услуг, предлагаемых в нашем косметологическом центре Face Concept. После тщательного обследования и установления точного диагноза, наш специалист подберет для тебя индивидуальный курс лечения. Этот курс будет включать процедуры для домашнего ухода и системную терапию. "),
              createVNode("div", { class: "workspace" }, [
                createVNode(PricesSidebar, {
                  class: "sidebar-lg",
                  itemsConcepts: categories,
                  setActiveCategory,
                  activeIndex: activeCategory.value
                }, null, 8, ["activeIndex"]),
                createVNode(PricesSidebarMobile, {
                  class: "sidebar-sm",
                  itemsConcepts: categories,
                  setActiveCategory,
                  activeIndex: activeCategory.value
                }, null, 8, ["activeIndex"]),
                createVNode("div", { class: "cards" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(categories[activeCategory.value].items, (item, index) => {
                    return openBlock(), createBlock(PricesCard, {
                      key: index,
                      price: item.price,
                      time: item.time,
                      title: item.text,
                      tech: item.tech
                    }, null, 8, ["price", "time", "title", "tech"]);
                  }), 128))
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
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/SectionPrices.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const SectionPrices = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-c571e4d9"]]);
const _sfc_main$1f = {
  __name: "PricesView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionPrices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionPrices),
              createVNode(SectionHelp)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PricesView.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const NavView_vue_vue_type_style_index_0_scoped_7dc25861_lang = "";
const _sfc_main$1e = {
  __name: "NavView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(MContainer, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="links" data-v-7dc25861${_scopeId2}><a class="link" href="/" data-v-7dc25861${_scopeId2}>1) Главная</a><a class="link" href="/tech" data-v-7dc25861${_scopeId2}>2) Карточка аппарата</a><a class="link" href="/procedures" data-v-7dc25861${_scopeId2}>3) Процедуры</a><a class="link" href="/inside" data-v-7dc25861${_scopeId2}>4) AntiAcne Concept</a><a class="link" href="/prices" data-v-7dc25861${_scopeId2}>5) Цены</a><a class="link" href="/devices" data-v-7dc25861${_scopeId2}>6) Аппараты</a><a class="link" href="/media" data-v-7dc25861${_scopeId2}>7) Медиа</a><a class="link" href="/faq" data-v-7dc25861${_scopeId2}>8) Faq</a><a class="link" href="/masters" data-v-7dc25861${_scopeId2}>9) Специалисты</a><a class="link" href="/master" data-v-7dc25861${_scopeId2}>10) Карточка специалиста</a><a class="link" href="/review" data-v-7dc25861${_scopeId2}>11) Отзывы</a><a class="link" href="/review-inside" data-v-7dc25861${_scopeId2}>12) Отзыв - карточка</a><a class="link" href="/about" data-v-7dc25861${_scopeId2}>13) О клинике</a><a class="link" href="/contacts" data-v-7dc25861${_scopeId2}>14) Контакты</a><a class="link" href="/branches" data-v-7dc25861${_scopeId2}>15) Филиалы</a><a class="link" href="/media/1" data-v-7dc25861${_scopeId2}>16) Медиа - карточка</a><a class="link" href="/policy" data-v-7dc25861${_scopeId2}>17) Политика</a><a class="link" href="/concept/personal" data-v-7dc25861${_scopeId2}>personal</a><a class="link" href="/concept/red" data-v-7dc25861${_scopeId2}>red</a><a class="link" href="/concept/hydro" data-v-7dc25861${_scopeId2}>hydro</a><a class="link" href="/concept/bright" data-v-7dc25861${_scopeId2}>bright</a><a class="link" href="/concept/lifting" data-v-7dc25861${_scopeId2}>lifting</a><a class="link" href="/concept/detox" data-v-7dc25861${_scopeId2}>detox</a><a class="link" href="/concept/clear" data-v-7dc25861${_scopeId2}>clear</a><a class="link" href="/concept/antiacne" data-v-7dc25861${_scopeId2}>antiacne</a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "links" }, [
                      createVNode("a", {
                        class: "link",
                        href: "/"
                      }, "1) Главная"),
                      createVNode("a", {
                        class: "link",
                        href: "/tech"
                      }, "2) Карточка аппарата"),
                      createVNode("a", {
                        class: "link",
                        href: "/procedures"
                      }, "3) Процедуры"),
                      createVNode("a", {
                        class: "link",
                        href: "/inside"
                      }, "4) AntiAcne Concept"),
                      createVNode("a", {
                        class: "link",
                        href: "/prices"
                      }, "5) Цены"),
                      createVNode("a", {
                        class: "link",
                        href: "/devices"
                      }, "6) Аппараты"),
                      createVNode("a", {
                        class: "link",
                        href: "/media"
                      }, "7) Медиа"),
                      createVNode("a", {
                        class: "link",
                        href: "/faq"
                      }, "8) Faq"),
                      createVNode("a", {
                        class: "link",
                        href: "/masters"
                      }, "9) Специалисты"),
                      createVNode("a", {
                        class: "link",
                        href: "/master"
                      }, "10) Карточка специалиста"),
                      createVNode("a", {
                        class: "link",
                        href: "/review"
                      }, "11) Отзывы"),
                      createVNode("a", {
                        class: "link",
                        href: "/review-inside"
                      }, "12) Отзыв - карточка"),
                      createVNode("a", {
                        class: "link",
                        href: "/about"
                      }, "13) О клинике"),
                      createVNode("a", {
                        class: "link",
                        href: "/contacts"
                      }, "14) Контакты"),
                      createVNode("a", {
                        class: "link",
                        href: "/branches"
                      }, "15) Филиалы"),
                      createVNode("a", {
                        class: "link",
                        href: "/media/1"
                      }, "16) Медиа - карточка"),
                      createVNode("a", {
                        class: "link",
                        href: "/policy"
                      }, "17) Политика"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/personal"
                      }, "personal"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/red"
                      }, "red"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/hydro"
                      }, "hydro"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/bright"
                      }, "bright"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/lifting"
                      }, "lifting"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/detox"
                      }, "detox"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/clear"
                      }, "clear"),
                      createVNode("a", {
                        class: "link",
                        href: "/concept/antiacne"
                      }, "antiacne")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(MContainer, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "links" }, [
                    createVNode("a", {
                      class: "link",
                      href: "/"
                    }, "1) Главная"),
                    createVNode("a", {
                      class: "link",
                      href: "/tech"
                    }, "2) Карточка аппарата"),
                    createVNode("a", {
                      class: "link",
                      href: "/procedures"
                    }, "3) Процедуры"),
                    createVNode("a", {
                      class: "link",
                      href: "/inside"
                    }, "4) AntiAcne Concept"),
                    createVNode("a", {
                      class: "link",
                      href: "/prices"
                    }, "5) Цены"),
                    createVNode("a", {
                      class: "link",
                      href: "/devices"
                    }, "6) Аппараты"),
                    createVNode("a", {
                      class: "link",
                      href: "/media"
                    }, "7) Медиа"),
                    createVNode("a", {
                      class: "link",
                      href: "/faq"
                    }, "8) Faq"),
                    createVNode("a", {
                      class: "link",
                      href: "/masters"
                    }, "9) Специалисты"),
                    createVNode("a", {
                      class: "link",
                      href: "/master"
                    }, "10) Карточка специалиста"),
                    createVNode("a", {
                      class: "link",
                      href: "/review"
                    }, "11) Отзывы"),
                    createVNode("a", {
                      class: "link",
                      href: "/review-inside"
                    }, "12) Отзыв - карточка"),
                    createVNode("a", {
                      class: "link",
                      href: "/about"
                    }, "13) О клинике"),
                    createVNode("a", {
                      class: "link",
                      href: "/contacts"
                    }, "14) Контакты"),
                    createVNode("a", {
                      class: "link",
                      href: "/branches"
                    }, "15) Филиалы"),
                    createVNode("a", {
                      class: "link",
                      href: "/media/1"
                    }, "16) Медиа - карточка"),
                    createVNode("a", {
                      class: "link",
                      href: "/policy"
                    }, "17) Политика"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/personal"
                    }, "personal"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/red"
                    }, "red"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/hydro"
                    }, "hydro"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/bright"
                    }, "bright"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/lifting"
                    }, "lifting"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/detox"
                    }, "detox"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/clear"
                    }, "clear"),
                    createVNode("a", {
                      class: "link",
                      href: "/concept/antiacne"
                    }, "antiacne")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NavView.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const NavView = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-7dc25861"]]);
const _imports_0$b = "/assets/card-photo-6367f044.png";
const SectionDevicesCard_vue_vue_type_style_index_0_scoped_7e980470_lang = "";
const _sfc_main$1d = {
  __name: "SectionDevicesCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-devices-main" }, _attrs))} data-v-7e980470>`);
      _push(ssrRenderComponent(CardLink, { class: "card-link" }, null, _parent));
      _push(`<div class="card-left" data-v-7e980470><h5 class="h-md card-title" data-v-7e980470>Skinova Pro</h5><div class="badges" data-v-7e980470>`);
      _push(ssrRenderComponent(BadgeMd, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BadgeMd, { type: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(BadgeMd, { type: "3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`AntiAcne Concept`);
          } else {
            return [
              createTextVNode("AntiAcne Concept")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-sm card-text" data-v-7e980470> Клеточная реконструкция высокочастотным ультразвуком. Единственная технология, регулирующая уровень кавеолина — структурного белка клеточной мембраны, который находится практически во всех клетках кожи. </p><p class="card-title-mini" data-v-7e980470>Показания</p><div class="card-tags" data-v-7e980470>`);
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Морщины`);
          } else {
            return [
              createTextVNode("Морщины")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Дряблость кожи`);
          } else {
            return [
              createTextVNode("Дряблость кожи")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Угревая сыпь, акне`);
          } else {
            return [
              createTextVNode("Угревая сыпь, акне")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Атопический дерматит`);
          } else {
            return [
              createTextVNode("Атопический дерматит")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Экзема`);
          } else {
            return [
              createTextVNode("Экзема")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Трофические язвы`);
          } else {
            return [
              createTextVNode("Трофические язвы")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Келоиды`);
          } else {
            return [
              createTextVNode("Келоиды")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Волчанка`);
          } else {
            return [
              createTextVNode("Волчанка")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MainTag, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Постакне`);
          } else {
            return [
              createTextVNode("Постакне")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="card-right" data-v-7e980470><div class="card-photo-wrapper" data-v-7e980470>`);
      _push(ssrRenderComponent(IconPlay, { class: "card-photo-icon" }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0$b)} alt="" class="card-photo" data-v-7e980470></div>`);
      _push(ssrRenderComponent(CardInfo$1, {
        title: "Время процедуры",
        icon: "time",
        text: "60 минут"
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo$1, {
        title: "Стоимость",
        icon: "pay",
        text: "от 4 500₽"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/devices/SectionDevicesCard.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const SectionDevicesCard = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-7e980470"]]);
const SectionDevices_vue_vue_type_style_index_0_scoped_012d919a_lang = "";
const _sfc_main$1c = {
  __name: "SectionDevices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-devices" }, _attrs))} data-v-012d919a>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Аппараты"] }, null, _parent2, _scopeId));
            _push2(`<h3 class="h-xxl section-title" data-v-012d919a${_scopeId}>Аппараты</h3><p class="text-sm section-devices-text" data-v-012d919a${_scopeId}> Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. </p><div class="devices-cards" data-v-012d919a${_scopeId}>`);
            _push2(ssrRenderComponent(SectionDevicesCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Аппараты"] }),
              createVNode("h3", { class: "h-xxl section-title" }, "Аппараты"),
              createVNode("p", { class: "text-sm section-devices-text" }, " Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. "),
              createVNode("div", { class: "devices-cards" }, [
                createVNode(SectionDevicesCard),
                createVNode(SectionDevicesCard),
                createVNode(SectionDevicesCard)
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
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/devices/SectionDevices.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const SectionDevices = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-012d919a"]]);
const _sfc_main$1b = {
  __name: "DevicesView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionDevices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionResult, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionStories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOther$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewPacients, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionDevices),
              createVNode(SectionOffer),
              createVNode(SectionResult),
              createVNode(SectionStories),
              createVNode(SectionOther$1),
              createVNode(SectionMasters$1),
              createVNode(SectionReviewPacients),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionHelp)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/DevicesView.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const SectionMedia_vue_vue_type_style_index_0_scoped_c645518b_lang = "";
const _sfc_main$1a = {
  __name: "SectionMedia",
  __ssrInlineRender: true,
  setup(__props) {
    const filtersArray = ["Все публикации", "Новости", "Статьи"];
    const breadCrumbsList = ["Главная", "Медиа"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-media" }, _attrs))} data-v-c645518b>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: breadCrumbsList }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-c645518b${_scopeId}>Медиа</h1>`);
            _push2(ssrRenderComponent(WidgetFilters, { items: filtersArray }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-c645518b${_scopeId}>`);
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isArticle: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: breadCrumbsList }),
              createVNode("h1", { class: "h-xxl heading" }, "Медиа"),
              createVNode(WidgetFilters, { items: filtersArray }),
              createVNode("div", { class: "cards" }, [
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isArticle: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                })
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
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-media/SectionMedia.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const SectionMedia = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-c645518b"]]);
const _imports_0$a = "/assets/shadow-f9378ac9.png";
const _imports_1$3 = "/assets/picture-5c47c79f.png";
const _sfc_main$19 = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="#0077FF"></rect><path d="M53.8397 39.3597C43.5899 39.3597 37.7436 32.3328 37.5 20.6401H42.6343C42.8029 29.2223 46.588 32.8575 49.5861 33.607V20.6401H54.4208V28.0418C57.3814 27.7232 60.4916 24.3503 61.5409 20.6401H66.3755C65.5698 25.2123 62.1969 28.5852 59.7984 29.9718C62.1969 31.0961 66.0384 34.038 67.5 39.3597H62.1781C61.0351 35.7994 58.1872 33.0449 54.4208 32.6701V39.3597H53.8397Z" fill="white"></path></svg>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/VkIcon.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$18 = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="#FF0000"></rect><path d="M40.5 43.6433L64.5 30L40.5 16.3564V43.6433Z" fill="white"></path></svg>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/YouTubeIcon.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const YouTubeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$17 = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="url(#paint0_radial_1_3799)"></rect><rect width="105" height="60" rx="30" fill="url(#paint1_radial_1_3799)"></rect><path d="M52.5012 15C48.4275 15 47.9163 15.0178 46.3163 15.0906C44.7194 15.1638 43.6294 15.4166 42.6756 15.7875C41.6891 16.1706 40.8522 16.6831 40.0184 17.5172C39.1841 18.3509 38.6716 19.1878 38.2872 20.1741C37.9153 21.1281 37.6622 22.2184 37.5903 23.8147C37.5187 25.4147 37.5 25.9262 37.5 30C37.5 34.0737 37.5181 34.5834 37.5906 36.1834C37.6641 37.7803 37.9169 38.8703 38.2875 39.8241C38.6709 40.8106 39.1834 41.6475 40.0175 42.4813C40.8509 43.3156 41.6878 43.8294 42.6737 44.2125C43.6281 44.5834 44.7184 44.8363 46.315 44.9094C47.915 44.9822 48.4259 45 52.4994 45C56.5734 45 57.0831 44.9822 58.6831 44.9094C60.28 44.8363 61.3713 44.5834 62.3256 44.2125C63.3119 43.8294 64.1475 43.3156 64.9809 42.4813C65.8153 41.6475 66.3278 40.8106 66.7122 39.8244C67.0809 38.8703 67.3341 37.78 67.4091 36.1838C67.4809 34.5837 67.4997 34.0737 67.4997 30C67.4997 25.9262 67.4809 25.415 67.4091 23.815C67.3341 22.2181 67.0809 21.1281 66.7122 20.1744C66.3278 19.1878 65.8153 18.3509 64.9809 17.5172C64.1466 16.6828 63.3122 16.1703 62.3247 15.7875C61.3684 15.4166 60.2778 15.1638 58.6809 15.0906C57.0809 15.0178 56.5716 15 52.4966 15H52.5012ZM51.1556 17.7031C51.555 17.7025 52.0006 17.7031 52.5012 17.7031C56.5062 17.7031 56.9809 17.7175 58.5625 17.7894C60.025 17.8563 60.8187 18.1006 61.3475 18.3059C62.0475 18.5778 62.5466 18.9028 63.0713 19.4278C63.5963 19.9528 63.9212 20.4528 64.1937 21.1528C64.3991 21.6809 64.6437 22.4747 64.7103 23.9372C64.7822 25.5184 64.7978 25.9934 64.7978 29.9966C64.7978 33.9997 64.7822 34.4747 64.7103 36.0559C64.6434 37.5184 64.3991 38.3122 64.1937 38.8403C63.9219 39.5403 63.5963 40.0387 63.0713 40.5634C62.5463 41.0884 62.0478 41.4134 61.3475 41.6853C60.8194 41.8916 60.025 42.1353 58.5625 42.2022C56.9813 42.2741 56.5062 42.2897 52.5012 42.2897C48.4959 42.2897 48.0213 42.2741 46.44 42.2022C44.9775 42.1347 44.1837 41.8903 43.6547 41.685C42.9547 41.4131 42.4547 41.0881 41.9297 40.5631C41.4047 40.0381 41.0797 39.5394 40.8072 38.8391C40.6019 38.3109 40.3572 37.5172 40.2906 36.0547C40.2188 34.4734 40.2044 33.9984 40.2044 29.9928C40.2044 25.9872 40.2188 25.5147 40.2906 23.9334C40.3575 22.4709 40.6019 21.6772 40.8072 21.1484C41.0791 20.4484 41.4047 19.9484 41.9297 19.4234C42.4547 18.8984 42.9547 18.5734 43.6547 18.3009C44.1834 18.0947 44.9775 17.8509 46.44 17.7838C47.8238 17.7213 48.36 17.7025 51.1556 17.6994V17.7031ZM60.5081 20.1937C59.5144 20.1937 58.7081 20.9991 58.7081 21.9931C58.7081 22.9869 59.5144 23.7931 60.5081 23.7931C61.5019 23.7931 62.3081 22.9869 62.3081 21.9931C62.3081 20.9994 61.5019 20.1931 60.5081 20.1931V20.1937ZM52.5012 22.2969C48.2472 22.2969 44.7981 25.7459 44.7981 30C44.7981 34.2541 48.2472 37.7016 52.5012 37.7016C56.7553 37.7016 60.2031 34.2541 60.2031 30C60.2031 25.7459 56.7553 22.2969 52.5012 22.2969ZM52.5012 25C55.2625 25 57.5012 27.2384 57.5012 30C57.5012 32.7612 55.2625 35 52.5012 35C49.7397 35 47.5013 32.7612 47.5013 30C47.5013 27.2384 49.7397 25 52.5012 25Z" fill="white"></path><defs><radialGradient id="paint0_radial_1_3799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8908 64.6213) rotate(-90) scale(59.4644 96.7865)"><stop stop-color="#FFDD55"></stop><stop offset="0.1" stop-color="#FFDD55"></stop><stop offset="0.5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="paint1_radial_1_3799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-17.5881 4.3223) rotate(56.5721) scale(50.987 340.725)"><stop stop-color="#3771C8"></stop><stop offset="0.128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop></radialGradient></defs></svg>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/InstagramIcon.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$n]]);
const SectionTelegram_vue_vue_type_style_index_0_scoped_a1c21c29_lang = "";
const _sfc_main$16 = {
  __name: "SectionTelegram",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-telegram" }, _attrs))} data-v-a1c21c29>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrapper" data-v-a1c21c29${_scopeId}><img${ssrRenderAttr("src", _imports_0$a)} class="card-shadow" alt="" data-v-a1c21c29${_scopeId}><div class="card-telegram" data-v-a1c21c29${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="" class="card-picture" data-v-a1c21c29${_scopeId}><div class="card-content" data-v-a1c21c29${_scopeId}><h3 class="h-xxl card-title" data-v-a1c21c29${_scopeId}>Подпишись на наш телеграм-канал</h3><h6 class="card-text" data-v-a1c21c29${_scopeId}> получай полезную информацию по уходу за кожей </h6>`);
            _push2(ssrRenderComponent(MButtonBig, { class: "card-button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Подписаться на канал`);
                } else {
                  return [
                    createTextVNode("Подписаться на канал")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-other" data-v-a1c21c29${_scopeId}><h6 class="card-text card-text-other" data-v-a1c21c29${_scopeId}>и другие соцсети</h6><div class="card-icons" data-v-a1c21c29${_scopeId}><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(VkIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(InstagramIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(YouTubeIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrapper" }, [
                createVNode("img", {
                  src: _imports_0$a,
                  class: "card-shadow",
                  alt: ""
                }),
                createVNode("div", { class: "card-telegram" }, [
                  createVNode("img", {
                    src: _imports_1$3,
                    alt: "",
                    class: "card-picture"
                  }),
                  createVNode("div", { class: "card-content" }, [
                    createVNode("h3", { class: "h-xxl card-title" }, "Подпишись на наш телеграм-канал"),
                    createVNode("h6", { class: "card-text" }, " получай полезную информацию по уходу за кожей "),
                    createVNode(MButtonBig, { class: "card-button" }, {
                      default: withCtx(() => [
                        createTextVNode("Подписаться на канал")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "card-other" }, [
                      createVNode("h6", { class: "card-text card-text-other" }, "и другие соцсети"),
                      createVNode("div", { class: "card-icons" }, [
                        createVNode("a", { href: "#" }, [
                          createVNode(VkIcon, { class: "card-icon" })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(InstagramIcon, { class: "card-icon" })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(YouTubeIcon, { class: "card-icon" })
                        ])
                      ])
                    ])
                  ])
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
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/SectionTelegram.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const SectionTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-a1c21c29"]]);
const _sfc_main$15 = {
  __name: "MediaView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMedia, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTelegram, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMedia),
              createVNode(SectionTelegram)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MediaView.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const MSelect_vue_vue_type_style_index_0_scoped_8194173a_lang = "";
const _sfc_main$14 = {
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
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/select/MSelect.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const MSelect = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-8194173a"]]);
const SectionFaq_vue_vue_type_style_index_0_scoped_82fb6448_lang = "";
const _sfc_main$13 = {
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
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/faq/SectionFaq.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const SectionFaq = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-82fb6448"]]);
const _sfc_main$12 = {
  __name: "FaqView",
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
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/FaqView.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const SectionMasters_vue_vue_type_style_index_0_scoped_40a26584_lang = "";
const _sfc_main$11 = {
  __name: "SectionMasters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-masters" }, _attrs))} data-v-40a26584>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Специалисты"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-40a26584${_scopeId}>Специалисты</h1><p class="text-sm text" data-v-40a26584${_scopeId}> Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. </p>`);
            _push2(ssrRenderComponent(MSelect, {
              class: "section-masters-select",
              startItem: "Все специалисты",
              items: ["Специалисты AntiAcne", "Специалисты Lifting"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-40a26584${_scopeId}>`);
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardMaster, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Специалисты"] }),
              createVNode("h1", { class: "h-xxl heading" }, "Специалисты"),
              createVNode("p", { class: "text-sm text" }, " Мы используем оригинальное оборудование премиум-класса, которое имеет сертификаты, регистрационные удостоверения Российской Федерации, а также сертификаты и разрешения FDA (США) и Европейского Союза! Вводный текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed cras. "),
              createVNode(MSelect, {
                class: "section-masters-select",
                startItem: "Все специалисты",
                items: ["Специалисты AntiAcne", "Специалисты Lifting"]
              }),
              createVNode("div", { class: "cards" }, [
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster),
                createVNode(CardMaster)
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
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/masters/SectionMasters.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const SectionMasters = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-40a26584"]]);
const _sfc_main$10 = {
  __name: "MastersView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMasters)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MastersView.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _imports_0$9 = "/assets/photo-5e94a47c.png";
const ButtonBack_vue_vue_type_style_index_0_scoped_586ac3c2_lang = "";
const _sfc_main$$ = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "button-back"
  }, _attrs))} data-v-586ac3c2><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-v-586ac3c2><path d="M16 8.00023C16 8.2913 15.9014 8.53545 15.7041 8.73269C15.5069 8.92993 15.2631 9.02821 14.9727 9.02752L3.49278 9.02752L8.5008 14.0355C8.70626 14.241 8.80899 14.4852 8.80899 14.768C8.80899 15.0508 8.70626 15.2947 8.5008 15.4994C8.29534 15.7049 8.05564 15.8076 7.7817 15.8076C7.50776 15.8076 7.26806 15.7049 7.0626 15.4994L0.282503 8.71934C0.179775 8.61661 0.10718 8.50532 0.0647185 8.38547C0.0222573 8.26562 0.000684523 8.13721 -3.41272e-07 8.00024C-3.47259e-07 7.86326 0.0215724 7.7304 0.0647184 7.60165C0.107864 7.47289 0.180459 7.36606 0.282503 7.28113L7.0626 0.501039C7.26806 0.295581 7.50776 0.192852 7.7817 0.192852C8.05564 0.192852 8.29534 0.295581 8.5008 0.501039C8.70626 0.706497 8.80899 0.950648 8.80899 1.23349C8.80899 1.51634 8.70626 1.76015 8.5008 1.96492L3.49278 6.97295L14.9727 6.97295C15.2638 6.97295 15.5079 7.07157 15.7052 7.26881C15.9024 7.46604 16.0007 7.70985 16 8.00023Z" fill="#AE8C8E" data-v-586ac3c2></path></svg>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonBack.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const ButtonBack = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$m], ["__scopeId", "data-v-586ac3c2"]]);
const SectionMasterList_vue_vue_type_style_index_0_lang = "";
const _sfc_main$_ = {
  __name: "SectionMasterList",
  __ssrInlineRender: true,
  props: ["items"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))}><!--[-->`);
      ssrRenderList(props.items, (item, index) => {
        _push(`<li class="list-item text-sm">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMasterList.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const _sfc_main$Z = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M7.80785 2.17848e-06C8.09892 2.20393e-06 8.34307 0.0986226 8.54031 0.295862C8.73755 0.493101 8.83583 0.73691 8.83514 1.02729L8.83514 12.5072L13.8432 7.4992C14.0486 7.29374 14.2928 7.19101 14.5756 7.19101C14.8585 7.19101 15.1023 7.29374 15.307 7.4992C15.5125 7.70466 15.6152 7.94436 15.6152 8.2183C15.6152 8.49224 15.5125 8.73194 15.307 8.9374L8.52695 15.7175C8.42422 15.8202 8.31294 15.8928 8.19309 15.9353C8.07324 15.9777 7.94482 15.9993 7.80785 16C7.67088 16 7.53802 15.9784 7.40927 15.9353C7.28051 15.8921 7.17367 15.8195 7.08875 15.7175L0.308657 8.9374C0.1032 8.73194 0.000469864 8.49224 0.000469888 8.2183C0.000469912 7.94436 0.1032 7.70466 0.308657 7.4992C0.514115 7.29374 0.758266 7.19101 1.04111 7.19101C1.32396 7.19101 1.56777 7.29374 1.77254 7.4992L6.78056 12.5072L6.78057 1.02729C6.78057 0.736225 6.87919 0.492073 7.07643 0.294834C7.27366 0.0975954 7.51747 -0.000681631 7.80785 2.17848e-06Z" fill="#AE8C8E"></path></svg>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/IconArrow.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const IconArrow = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$l]]);
const SectionMaster_vue_vue_type_style_index_0_scoped_f47f5590_lang = "";
const _sfc_main$Y = {
  __name: "SectionMaster",
  __ssrInlineRender: true,
  setup(__props) {
    const isShowMore = ref(false);
    const skills = [
      "Коррекция мимических морщин",
      "Объемное моделирование лица филлерами",
      "Мезотерапия, биоревитализация",
      "Нитевые методики (Аптос, ПДО)",
      "Химические пилинги"
    ];
    const skillsTwo = [
      "Лечение угревой болезни, рубцов постакне",
      "Лечение гиперпигментаций",
      "Аппаратная косметология",
      "Уходовые процедуры по лицу, массаж лица"
    ];
    const eduSkills = [
      "Диплом ДВС 0103906 от 25 июня 2001 г – присуждена квалификация Врач по специальности Лечебное дело, Владивосток.",
      "Удостоверение №0145 от 24 октября 2002 г – клиническая интернатура по терапии, присуждена квалификация врача-терапевта, Владивосток.",
      "Диплом №755232 от 21 мая 2005 г – профессиональная переподготовка по Дерматовенерологии, Владивосток.",
      "Свидетельство о повышении квалификации «Косметология терапевтическая» от 25 июня 2005 г, Владивосток."
    ];
    const moreSkills = [
      "Апрель 2010 г. – сертификат БОТОКС, Владивосток.",
      "Диплом №494044 от 7 мая 2011 г. – профессиональная переподготовка по косметологии, 576 часов, Москва.",
      "Ноябрь 2011 г. – сертификат ДИСПОРТ, Москва.",
      "Апрель 2012 г. – сертификат КСЕОМИН, Москва.",
      "Июнь 2012 г. – сертификат КОЛЛОСТ, Москва.",
      "Декабрь 2012 г. – сертификат DR.GRANDEL, Москва.",
      "Сентябрь 2014 г. – сертификат ЮВИДЕРМ, СУРЖИДЕРМ, Москва.",
      "Сертификат «Методики микротоковой терапии в уходе за лицом и телом», Москва, 2014 г.",
      "Ноябрь 2015 г. – приняла участие в семинаре «Омолаживающая косметология лица и тела. Секреты зарубежной школы», Москва."
    ];
    const showMore = () => {
      isShowMore.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-master" }, _attrs))} data-v-f47f5590>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-f47f5590${_scopeId}> Ольга Заика `);
            _push2(ssrRenderComponent(ButtonBack, { class: "button-back" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Все специалисты`);
                } else {
                  return [
                    createTextVNode("Все специалисты")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h1><div class="content" data-v-f47f5590${_scopeId}><div class="content-left" data-v-f47f5590${_scopeId}><h5 class="heading-2" data-v-f47f5590${_scopeId}>Главный врач, врач-косметолог</h5><p class="text" data-v-f47f5590${_scopeId}>Стаж в области косметологии с 2005 года</p><div class="line" data-v-f47f5590${_scopeId}></div><h5 class="heading-2" data-v-f47f5590${_scopeId}>Профессиональные навыки</h5><div class="list-group" data-v-f47f5590${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$_, { items: skills }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$_, { items: skillsTwo }, null, _parent2, _scopeId));
            _push2(`</div><div class="line" data-v-f47f5590${_scopeId}></div><h5 class="heading-2" data-v-f47f5590${_scopeId}>Образование</h5>`);
            _push2(ssrRenderComponent(_sfc_main$_, { items: eduSkills }, null, _parent2, _scopeId));
            _push2(`<div class="line" data-v-f47f5590${_scopeId}></div><h5 class="heading-2" data-v-f47f5590${_scopeId}>Дополнительное образование и сертификаты</h5>`);
            _push2(ssrRenderComponent(_sfc_main$_, { items: moreSkills }, null, _parent2, _scopeId));
            if (isShowMore.value) {
              _push2(ssrRenderComponent(_sfc_main$_, { items: moreSkills }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!isShowMore.value) {
              _push2(`<button class="more-button" data-v-f47f5590${_scopeId}> Показать весь список `);
              _push2(ssrRenderComponent(IconArrow, null, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="content-right" data-v-f47f5590${_scopeId}><div class="photo-wrapper" data-v-f47f5590${_scopeId}><img${ssrRenderAttr("src", _imports_0$9)} alt="" class="photo" data-v-f47f5590${_scopeId}>`);
            _push2(ssrRenderComponent(IconPlay, { class: "photo-icon-play" }, null, _parent2, _scopeId));
            _push2(`</div><div class="button-review-wrapper" data-v-f47f5590${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, { class: "button-review" }, {
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
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }),
              createVNode("h1", { class: "h-xxl heading" }, [
                createTextVNode(" Ольга Заика "),
                createVNode(ButtonBack, { class: "button-back" }, {
                  default: withCtx(() => [
                    createTextVNode("Все специалисты")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode("h5", { class: "heading-2" }, "Главный врач, врач-косметолог"),
                  createVNode("p", { class: "text" }, "Стаж в области косметологии с 2005 года"),
                  createVNode("div", { class: "line" }),
                  createVNode("h5", { class: "heading-2" }, "Профессиональные навыки"),
                  createVNode("div", { class: "list-group" }, [
                    createVNode(_sfc_main$_, { items: skills }),
                    createVNode(_sfc_main$_, { items: skillsTwo })
                  ]),
                  createVNode("div", { class: "line" }),
                  createVNode("h5", { class: "heading-2" }, "Образование"),
                  createVNode(_sfc_main$_, { items: eduSkills }),
                  createVNode("div", { class: "line" }),
                  createVNode("h5", { class: "heading-2" }, "Дополнительное образование и сертификаты"),
                  createVNode(_sfc_main$_, { items: moreSkills }),
                  isShowMore.value ? (openBlock(), createBlock(_sfc_main$_, {
                    key: 0,
                    items: moreSkills
                  })) : createCommentVNode("", true),
                  !isShowMore.value ? (openBlock(), createBlock("button", {
                    key: 1,
                    class: "more-button",
                    onClick: showMore
                  }, [
                    createTextVNode(" Показать весь список "),
                    createVNode(IconArrow)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode("div", { class: "photo-wrapper" }, [
                    createVNode("img", {
                      src: _imports_0$9,
                      alt: "",
                      class: "photo"
                    }),
                    createVNode(IconPlay, { class: "photo-icon-play" })
                  ]),
                  createVNode("div", { class: "button-review-wrapper" }, [
                    createVNode(MButtonBig, { class: "button-review" }, {
                      default: withCtx(() => [
                        createTextVNode("Оставить отзыв")
                      ]),
                      _: 1
                    })
                  ])
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
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMaster.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const SectionMaster = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-f47f5590"]]);
const _imports_0$8 = "/assets/CardReviewMasterAvatar-591a6288.png";
const _imports_1$2 = "/assets/CardReviewMasterPhoto-07545fbc.png";
const _sfc_main$X = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "70",
    height: "16",
    viewBox: "0 0 70 16",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_1_4707)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.07391 3.60444H5.1162C3.35199 3.60444 2.41948 4.4568 2.41948 5.74751C2.41948 7.18435 3.04956 7.86623 4.38531 8.71859L5.46904 9.42483L2.34387 13.9789H0L2.82273 9.93625C1.20974 8.816 0.277233 7.74447 0.277233 5.89363C0.277233 3.58008 1.94063 2.02148 5.091 2.02148H8.21616V14.0032H6.07391V3.60444ZM17.0876 5.30916V13.9789H14.9706V10.3503H12.1478V13.9789H10.0308V5.30916H12.1478V8.74295H14.9958V5.30916H17.0876ZM26.6647 15.9515H24.6989V13.9789H19.9607V15.9515H17.9949V12.3472H18.6502C19.4063 10.9104 19.5323 8.15847 19.5323 6.03975V5.30916H25.707V12.3472H26.6647V15.9515ZM23.6152 6.91646H21.3721V7.18435C21.3721 8.69424 21.2209 11.0321 20.616 12.3472H23.6152V6.91646ZM31.4281 14.125C28.7314 14.125 27.194 12.6638 27.194 9.64401C27.194 7.01387 28.4289 5.11433 30.9996 5.11433C33.1167 5.11433 34.5028 6.25893 34.5028 9.25436V10.3503H29.3866C29.4623 11.7871 30.0671 12.4933 31.6045 12.4933C32.6378 12.4933 33.7468 12.1037 34.402 11.6897V13.37C33.7972 13.784 32.789 14.125 31.4281 14.125ZM29.3866 8.84036H32.3354V8.66989C32.3354 7.574 32.0078 6.74599 30.9492 6.74599C29.9663 6.74599 29.4371 7.47658 29.3866 8.84036ZM38.0565 9.71707V13.9789H35.9394V5.30916H38.0565V9.30307L41.0556 5.30916H43.1979L40.1987 9.30307L43.6011 13.9545H41.1816L38.0565 9.71707ZM43.4751 9.64401C43.4751 12.542 44.8361 14.1493 47.684 14.1493C48.6669 14.1493 49.3726 13.9789 49.8767 13.6136V11.9332C49.3474 12.2985 48.6921 12.5177 47.81 12.5177C46.2978 12.5177 45.6678 11.3731 45.6678 9.5953C45.6678 7.72012 46.4238 6.74599 47.8352 6.74599C48.6669 6.74599 49.4482 7.01387 49.8767 7.28176V5.52833C49.423 5.2848 48.6417 5.11433 47.5832 5.11433C44.8865 5.11433 43.4751 6.98952 43.4751 9.64401Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M62.7046 0C59.0501 0 56.0762 2.87367 56.0762 6.40487C56.0762 8.10959 56.7819 9.7169 58.0168 10.9346C59.2265 12.1035 62.0241 13.7595 62.2005 15.5373C62.2257 15.8052 62.4273 16.0244 62.7046 16.0244C62.9818 16.0244 63.1834 15.8052 63.2086 15.5373C63.385 13.7839 66.1826 12.1035 67.3923 10.9346C68.6272 9.74125 69.3329 8.10959 69.3329 6.40487C69.3329 2.87367 66.359 0 62.7046 0Z" fill="#FF4433"></path><path opacity="0.251" fill-rule="evenodd" clip-rule="evenodd" d="M62.7044 8.64552C63.9898 8.64552 65.0231 7.64705 65.0231 6.40504C65.0231 5.16303 63.9898 4.16455 62.7044 4.16455C61.4191 4.16455 60.3857 5.16303 60.3857 6.40504C60.3857 7.64705 61.4191 8.64552 62.7044 8.64552Z" fill="black"></path></g><defs><clipPath id="clip0_1_4707"><rect width="69.3333" height="16" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconYandexLocation.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const IconYandexLocation = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$W = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M7.318 13.031C7.44 12.543 7.693 12.097 8.048 11.741L12.336 7.454C12.6287 7.16133 13.0256 6.99692 13.4395 6.99692C13.8534 6.99692 14.2503 7.16133 14.543 7.454C14.8357 7.74667 15.0001 8.14361 15.0001 8.5575C15.0001 8.97139 14.8357 9.36833 14.543 9.661L10.255 13.948C9.89911 14.3038 9.45322 14.5561 8.965 14.678L7.755 14.981C7.65286 15.0066 7.54585 15.0052 7.44438 14.9772C7.3429 14.9491 7.25042 14.8953 7.17592 14.8209C7.10142 14.7465 7.04745 14.6541 7.01925 14.5526C6.99105 14.4512 6.98959 14.3442 7.015 14.242L7.318 13.031ZM13.998 5V4.5C13.998 3.83696 13.7346 3.20107 13.2658 2.73223C12.7969 2.26339 12.161 2 11.498 2H4.5C3.83696 2 3.20107 2.26339 2.73223 2.73223C2.26339 3.20107 2 3.83696 2 4.5V5H13.998ZM12.998 6.036V6H2V11.5C2.00027 12.1629 2.26377 12.7985 2.73259 13.2671C3.2014 13.7357 3.83713 13.999 4.5 13.999H6.046L6.348 12.789C6.514 12.126 6.858 11.519 7.342 11.035L11.629 6.748C12.0012 6.37419 12.4802 6.12508 13 6.035L12.998 6.036Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconCalendar.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const IconCalendar$1 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$j]]);
const ButtonMore_vue_vue_type_style_index_0_scoped_cde650c8_lang = "";
const _sfc_main$V = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "button-more",
    type: "button"
  }, _attrs))} data-v-cde650c8>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonMore.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const ButtonMore = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-cde650c8"]]);
const _sfc_main$U = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "16",
    viewBox: "0 0 50 16",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_1_4861)"><path d="M47.2453 5.89282H49.5176C49.2302 3.6859 47.615 2.52588 45.37 2.52588C43.0979 2.52588 41.5785 3.72836 41.5785 5.79379C41.5785 8.14215 43.5359 8.66554 44.5762 8.87781C45.9176 9.14658 47.2317 9.17489 47.2317 10.3632C47.2317 11.1695 46.5746 11.5657 45.6438 11.5657C44.494 11.5657 43.7276 10.9715 43.5359 9.8964H41.291C41.4279 12.2164 43.0568 13.4613 45.4523 13.4613C47.6697 13.4613 49.4902 12.4145 49.4902 10.151C49.4902 7.71773 47.396 7.27921 45.9313 7.05284C44.932 6.89725 43.837 6.75576 43.837 5.66645C43.837 4.90254 44.3982 4.43572 45.3427 4.43572C46.4378 4.43572 47.0947 5.07235 47.2453 5.89282Z" fill="#403F41"></path><path d="M40.0456 2.87988H37.8965V13.1362H40.0456V2.87988Z" fill="#403F41"></path><path d="M31.4082 9.5569H34.2143C33.7762 10.6604 32.7907 11.1837 31.6545 11.1837C29.6561 11.1837 28.7253 9.5852 28.7253 8.00076C28.7253 6.40215 29.6013 4.77531 31.6409 4.77531C32.8865 4.77531 33.8173 5.36947 34.1732 6.43047L36.4865 6.43048C36.0896 4.03972 34.0637 2.66748 31.6683 2.66748C28.7116 2.66748 26.4941 4.747 26.4941 8.02907C26.4941 11.3535 28.9032 13.3199 31.6545 13.3199C34.3648 13.3199 36.4865 11.495 36.4865 8.6374V7.8027H31.4082V9.5569Z" fill="#403F41"></path><path d="M21.5813 2.66748C19.1175 2.66748 17.2969 4.26602 17.3106 6.92561H19.5281C19.5007 5.76559 20.2125 4.70459 21.4718 4.70459C22.5669 4.70459 23.2102 5.49682 23.2102 6.40216C23.2102 7.30757 22.5669 7.81687 21.376 8.36863C19.7471 9.11838 18.5836 9.59936 17.3927 10.0238V13.136H25.6878V11.0423H19.9932C19.9932 11.0423 20.0121 11.0362 20.0214 11.0333C20.99 10.73 21.7177 10.4004 22.5806 10.0096C24.4285 9.16084 25.4825 8.09979 25.4825 6.28904C25.4825 4.06796 23.8946 2.66748 21.5813 2.66748Z" fill="#403F41"></path><path d="M11.4785 9.52863C8.6861 9.54279 8.2344 11.2828 8.08386 12.7541L8.01543 13.4048H7.45417L7.38574 12.7541C7.23519 11.2828 6.7698 9.54278 4.0732 9.52863C3.6215 8.5666 3.42987 7.78854 3.42987 6.91144C3.42987 4.71874 5.16828 2.6674 7.74161 2.6674C10.315 2.6674 12.026 4.70452 12.026 6.92566C12.026 7.78854 11.9439 8.5666 11.4785 9.52863ZM7.71428 0.0078125C3.47097 0.0078125 -0.00585938 3.60112 -0.00585938 8.00069C-0.00585938 12.4145 3.47097 16.0078 7.71428 16.0078C11.9986 16.0078 15.4618 12.4145 15.4618 8.00069C15.4618 3.60113 11.9986 0.0078125 7.71428 0.0078125Z" fill="#29B24A"></path></g><defs><clipPath id="clip0_1_4861"><rect width="49.5238" height="16" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconLocation2Gis.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const IconLocation2Gis = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$h]]);
const CardReviewMaster_vue_vue_type_style_index_0_scoped_ac3ddfdf_lang = "";
const _sfc_main$T = {
  __name: "CardReviewMaster",
  __ssrInlineRender: true,
  props: ["masterName", "badge"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["card-wrapper", props.masterName ? "card-wrapper-with-header" : ""]
      }, _attrs))} data-v-ac3ddfdf>`);
      if (props.masterName) {
        _push(`<div class="card-header" data-v-ac3ddfdf><img${ssrRenderAttr("src", _imports_0$8)} alt="" data-v-ac3ddfdf><div data-v-ac3ddfdf><p class="text-sm card-header-title" data-v-ac3ddfdf>Отзыв о специалисте</p><h6 class="card-header-name" data-v-ac3ddfdf>${ssrInterpolate(props.masterName)}</h6></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card-review" data-v-ac3ddfdf>`);
      _push(ssrRenderComponent(ButtonMore, { class: "button-read-more" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Читать отзыв`);
          } else {
            return [
              createTextVNode("Читать отзыв")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="card-head" data-v-ac3ddfdf><div data-v-ac3ddfdf><h4 class="h-sm card-title" data-v-ac3ddfdf>Каролина<br data-v-ac3ddfdf>Милютина</h4><div class="card-badges" data-v-ac3ddfdf><p class="card-calendar-badge" data-v-ac3ddfdf>`);
      _push(ssrRenderComponent(IconCalendar$1, null, null, _parent));
      _push(`<span class="text-sm" data-v-ac3ddfdf>15.05.2024</span></p>`);
      if (props.badge === "yandex") {
        _push(ssrRenderComponent(IconYandexLocation, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.badge === "2gis") {
        _push(ssrRenderComponent(IconLocation2Gis, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="card-photo" data-v-ac3ddfdf></div></div><p class="text-sm" data-v-ac3ddfdf> Не первый год пользуюсь услугами центра косметологии MIRA.С огромным удовольствием прихожу на приём к Ольге Владимировне.Последний раз не исключение, результат превосходный!!Она никогда не посоветует лишнего,всегда даст рекомендации,не стремиться заработать как можно больше денег на людях,советуя... </p></div></div>`);
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardReviewMaster.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const CardReviewMaster = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-ac3ddfdf"]]);
const SectionMasterReview_vue_vue_type_style_index_0_scoped_f2fec9ac_lang = "";
const _sfc_main$S = {
  __name: "SectionMasterReview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-master-review" }, _attrs))} data-v-f2fec9ac>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-f2fec9ac${_scopeId}>Последние отзывы о специалисте</h3>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Последние отзывы о специалисте")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="buttons" data-v-f2fec9ac${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Посмотреть больше`);
                } else {
                  return [
                    createTextVNode("Посмотреть больше")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MButtonOutlineBig, null, {
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
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "buttons" }, [
                createVNode(MButtonBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Посмотреть больше")
                  ]),
                  _: 1
                }),
                createVNode(MButtonOutlineBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Оставить отзыв")
                  ]),
                  _: 1
                })
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
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMasterReview.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const SectionMasterReview = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-f2fec9ac"]]);
const _sfc_main$R = {
  __name: "MasterView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasterReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMaster),
              createVNode(SectionMasterReview),
              createVNode(SectionMasters$1),
              createVNode(SectionOffer)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MasterView.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const PaginationItems_vue_vue_type_style_index_0_scoped_b0b004f7_lang = "";
const _sfc_main$Q = {
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
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/PaginationItems.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const PaginationItems = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-b0b004f7"]]);
const SectionReviewAll_vue_vue_type_style_index_0_scoped_7a40e9ca_lang = "";
const _sfc_main$P = {
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
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review/SectionReviewAll.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const SectionReviewAll = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-7a40e9ca"]]);
const _sfc_main$O = {
  __name: "ReviewView",
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
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ReviewView.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _imports_0$7 = "/assets/noPhoto-579cf766.png";
const _sfc_main$N = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.77354 8.87739C4.11718 4.70845 7.60097 1.5 11.7841 1.5H12.216C16.3991 1.5 19.8829 4.70845 20.2265 8.87739C20.4115 11.122 19.7182 13.3508 18.2925 15.0943L13.4995 20.9561C12.7245 21.9039 11.2756 21.9039 10.5006 20.9561L5.70752 15.0943C4.28187 13.3508 3.58852 11.122 3.77354 8.87739ZM12 5.25C9.37665 5.25 7.25 7.37665 7.25 10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10C16.75 7.37665 14.6234 5.25 12 5.25Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconLocation.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const IconLocation$1 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$M = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M10.977 19.5465C11.16 18.8145 11.5395 18.1455 12.072 17.6115L18.504 11.181C18.943 10.742 19.5384 10.4954 20.1593 10.4954C20.7801 10.4954 21.3755 10.742 21.8145 11.181C22.2535 11.62 22.5001 12.2154 22.5001 12.8363C22.5001 13.4571 22.2535 14.0525 21.8145 14.4915L15.3825 20.922C14.8487 21.4556 14.1798 21.8341 13.4475 22.017L11.6325 22.4715C11.4793 22.5098 11.3188 22.5078 11.1666 22.4658C11.0144 22.4237 10.8756 22.3429 10.7639 22.2313C10.6521 22.1197 10.5712 21.9811 10.5289 21.8289C10.4866 21.6768 10.4844 21.5163 10.5225 21.363L10.977 19.5465ZM20.997 7.5V6.75C20.997 5.75544 20.6019 4.80161 19.8987 4.09835C19.1954 3.39509 18.2416 3 17.247 3H6.75C5.75544 3 4.80161 3.39509 4.09835 4.09835C3.39509 4.80161 3 5.75544 3 6.75V7.5H20.997ZM19.497 9.054V9H3V17.25C3.0004 18.2443 3.39566 19.1977 4.09888 19.9007C4.8021 20.6036 5.7557 20.9985 6.75 20.9985H9.069L9.522 19.1835C9.771 18.189 10.287 17.2785 11.013 16.5525L17.4435 10.122C18.0018 9.56129 18.7203 9.18762 19.5 9.0525L19.497 9.054Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconCalendar.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const IconCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$L = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M20.7005 18.0756C19.7005 15.6756 17.8005 13.8756 15.5005 12.9756C16.8005 11.9756 17.6005 10.3756 17.6005 8.67559C17.6005 5.47559 15.1005 2.97559 12.0005 2.97559C8.90055 2.97559 6.40055 5.47559 6.40055 8.57559C6.40055 10.2756 7.20055 11.8756 8.50055 12.8756C6.20055 13.7756 4.30055 15.5756 3.30055 17.9756C2.90055 18.9756 3.00055 20.1756 3.60055 21.0756C4.20055 22.0756 5.30055 22.5756 6.50055 22.5756H17.6005C18.8005 22.5756 19.8005 21.9756 20.5005 21.0756C21.1005 20.1756 21.2005 19.0756 20.7005 18.0756Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconPerson.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const IconPerson = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$K = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "80",
    height: "119",
    viewBox: "0 0 80 119",
    fill: "none"
  }, _attrs))}><g opacity="0.3"><path d="M49.7219 0V18.3682L48.6453 18.57C43.33 19.6465 38.4184 21.8669 34.045 25.0291C25.4328 31.2191 20.0502 40.9078 18.9737 51.4039H32.6321V66.9462H19.1083V98.8382H0V52.615C0.134565 51.1348 0.269134 49.6546 0.470982 48.3089C0.538264 47.7034 0.67283 47.0978 0.740113 46.4923C2.75859 35.3234 8.20849 24.76 16.2151 16.6188C24.8946 7.7375 35.9962 2.08576 48.2416 0.269126L49.7219 0Z" fill="white"></path><path d="M80.0001 19.5127V65.8704C79.8655 67.3507 79.7309 68.8309 79.5291 70.1765C79.4618 70.7821 79.3273 71.3876 79.26 71.9931C77.2415 83.1621 71.7916 93.7255 63.785 101.867C55.1055 110.748 44.0039 116.4 31.7584 118.216L30.2109 118.418V100.05L31.2875 99.8482C36.6028 98.7717 41.5144 96.5513 45.8878 93.389C54.5 87.199 59.8826 77.5103 60.9591 67.0142H46.6952V51.472H60.8245V19.58H80.0001V19.5127Z" fill="white"></path></g></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconLogo.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const IconLogo = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$J = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "257",
    height: "67",
    viewBox: "0 0 257 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M21.9028 65H0.182813V1.64H21.9028V24.56H55.0228V1.64H76.7428V65H55.0228V40.04H21.9028V65ZM175.666 43.64C172.066 57.56 155.986 66.56 135.586 66.56C110.986 66.56 93.5859 52.76 93.5859 33.44C93.5859 14 110.506 0.079999 134.266 0.079999C157.546 0.079999 175.186 13.52 175.186 33.68C175.186 33.92 175.066 36.08 174.946 37.16H115.066C116.266 47.24 124.186 53.48 136.186 53.48C145.906 53.48 153.586 49.88 155.146 43.64H175.666ZM152.506 25.04C150.106 17.72 143.506 13.16 134.386 13.16C125.266 13.16 118.666 17.72 116.266 25.04H152.506ZM229.772 65H208.052V15.44H181.052V1.64H256.772V15.44H229.772V65Z" fill="url(#paint0_linear_1_4916)"></path><defs><linearGradient id="paint0_linear_1_4916" x1="124.5" y1="-37" x2="124.5" y2="101" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconText1.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const IconText1 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$I = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "425",
    height: "114",
    viewBox: "0 0 425 114",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M64.2039 113.48V78.2C57.0039 83.84 47.7639 87.56 37.0839 87.56C14.7639 87.56 0.00390634 74.48 0.00390634 54.44C0.00390634 34.28 14.6439 21.08 37.0839 21.08C47.8839 21.08 57.0039 24.8 64.2039 30.44V0.0799975H85.9239V30.44C93.1239 24.8 102.244 21.08 113.044 21.08C135.484 21.08 150.124 34.28 150.124 54.44C150.124 74.48 135.484 87.56 113.044 87.56C102.364 87.56 93.1239 83.84 85.9239 78.2V113.48H64.2039ZM64.2039 54.32C64.2039 43.04 56.1639 35.6 43.0839 35.6C29.1639 35.6 21.2439 42.56 21.2439 54.44C21.2439 66.08 29.1639 73.04 43.0839 73.04C56.1639 73.04 64.2039 65.48 64.2039 54.32ZM85.9239 54.32C85.9239 65.48 93.9639 73.04 107.044 73.04C121.084 73.04 128.884 66.08 128.884 54.44C128.884 42.56 121.084 35.6 107.044 35.6C93.9639 35.6 85.9239 43.04 85.9239 54.32ZM248.231 54.44C248.231 74.36 231.191 87.56 205.151 87.56C179.231 87.56 162.191 74.36 162.191 54.44C162.191 34.4 179.231 21.08 205.151 21.08C231.191 21.08 248.231 34.4 248.231 54.44ZM226.991 54.44C226.991 42.68 218.831 35.6 205.271 35.6C191.471 35.6 183.431 42.68 183.431 54.44C183.431 65.96 191.471 73.04 205.271 73.04C218.831 73.04 226.991 65.96 226.991 54.44ZM304.471 86H282.751V36.44H255.751V22.64H331.471V36.44H304.471V86ZM424.833 54.44C424.833 74.36 407.793 87.56 381.753 87.56C355.833 87.56 338.793 74.36 338.793 54.44C338.793 34.4 355.833 21.08 381.753 21.08C407.793 21.08 424.833 34.4 424.833 54.44ZM403.593 54.44C403.593 42.68 395.433 35.6 381.873 35.6C368.073 35.6 360.033 42.68 360.033 54.44C360.033 65.96 368.073 73.04 381.873 73.04C395.433 73.04 403.593 65.96 403.593 54.44Z" fill="url(#paint0_linear_1_4917)"></path><defs><linearGradient id="paint0_linear_1_4917" x1="212.5" y1="-16" x2="212.5" y2="122" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconText2.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const IconText2 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$b]]);
const SectionReviewInside_vue_vue_type_style_index_0_scoped_90b035bf_lang = "";
const _sfc_main$H = {
  __name: "SectionReviewInside",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review-inside" }, _attrs))} data-v-90b035bf>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }, null, _parent2, _scopeId));
            _push2(`<h3 class="h-xxl section-title" data-v-90b035bf${_scopeId}> Отзыв о работе <br data-v-90b035bf${_scopeId}> Юлии Епишиной `);
            _push2(ssrRenderComponent(ButtonBack, { class: "button-back" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Все отзывы`);
                } else {
                  return [
                    createTextVNode("Все отзывы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h3><div class="card-with-photo" data-v-90b035bf${_scopeId}><div class="card-review-inside" data-v-90b035bf${_scopeId}><div class="card-footer" data-v-90b035bf${_scopeId}><h6 class="h-sm-ultra card-footer-title" data-v-90b035bf${_scopeId}>Ответ клиники</h6><p class="text-sm card-footer-text" data-v-90b035bf${_scopeId}> Каролина, огромная благодарность вам за столь подробный и развернутый отзыв! </p>`);
            _push2(ssrRenderComponent(IconLogo, { class: "card-footer-logo" }, null, _parent2, _scopeId));
            _push2(`</div><h6 class="h-sm-ultra card-title" data-v-90b035bf${_scopeId}>Каролина Милютина</h6><div class="card-badges" data-v-90b035bf${_scopeId}><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconPerson, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>36 лет</span></p><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconLocation$1, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>Москва</span></p><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconCalendar, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>15.05.2024</span></p></div><p class="text-sm card-text" data-v-90b035bf${_scopeId}> В современном мире сложно найти профессионала , знающего толк в своем деле. В этом вопросе, мне очень повезло, мой ведущий косметолог Юлия Николаевна именно такой специалист. Каждая процедура для меня, это момент естественного преображения и Юлия очень четко и верно подбирает мне препараты и процедуры . Такой заботы, четкого отношения ко мне, внимания к моему здоровью я еще не встречала. Советы и рекомендации от этого доктора всегда уместны, высокий профессионализм и тактичность, аккуратность в деталях и педантичность до мелочей. Прокаченный и современный доктор. Если и доверять себя любимую в руки косметолога, тогда точно к Юлии Николаевне. </p></div><div class="photo-wrapper" data-v-90b035bf${_scopeId}><img${ssrRenderAttr("src", _imports_0$7)} alt="" class="photo" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconText1, { class: "icon-text icon-text-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(IconText2, { class: "icon-text icon-text-2" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }),
              createVNode("h3", { class: "h-xxl section-title" }, [
                createTextVNode(" Отзыв о работе "),
                createVNode("br"),
                createTextVNode(" Юлии Епишиной "),
                createVNode(ButtonBack, { class: "button-back" }, {
                  default: withCtx(() => [
                    createTextVNode("Все отзывы")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "card-with-photo" }, [
                createVNode("div", { class: "card-review-inside" }, [
                  createVNode("div", { class: "card-footer" }, [
                    createVNode("h6", { class: "h-sm-ultra card-footer-title" }, "Ответ клиники"),
                    createVNode("p", { class: "text-sm card-footer-text" }, " Каролина, огромная благодарность вам за столь подробный и развернутый отзыв! "),
                    createVNode(IconLogo, { class: "card-footer-logo" })
                  ]),
                  createVNode("h6", { class: "h-sm-ultra card-title" }, "Каролина Милютина"),
                  createVNode("div", { class: "card-badges" }, [
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconPerson),
                      createVNode("span", { class: "text-sm" }, "36 лет")
                    ]),
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconLocation$1),
                      createVNode("span", { class: "text-sm" }, "Москва")
                    ]),
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconCalendar),
                      createVNode("span", { class: "text-sm" }, "15.05.2024")
                    ])
                  ]),
                  createVNode("p", { class: "text-sm card-text" }, " В современном мире сложно найти профессионала , знающего толк в своем деле. В этом вопросе, мне очень повезло, мой ведущий косметолог Юлия Николаевна именно такой специалист. Каждая процедура для меня, это момент естественного преображения и Юлия очень четко и верно подбирает мне препараты и процедуры . Такой заботы, четкого отношения ко мне, внимания к моему здоровью я еще не встречала. Советы и рекомендации от этого доктора всегда уместны, высокий профессионализм и тактичность, аккуратность в деталях и педантичность до мелочей. Прокаченный и современный доктор. Если и доверять себя любимую в руки косметолога, тогда точно к Юлии Николаевне. ")
                ]),
                createVNode("div", { class: "photo-wrapper" }, [
                  createVNode("img", {
                    src: _imports_0$7,
                    alt: "",
                    class: "photo"
                  }),
                  createVNode(IconText1, { class: "icon-text icon-text-1" }),
                  createVNode(IconText2, { class: "icon-text icon-text-2" })
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
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/SectionReviewInside.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const SectionReviewInside = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-90b035bf"]]);
const SectionReviewOther_vue_vue_type_style_index_0_scoped_9f53ca2a_lang = "";
const _sfc_main$G = {
  __name: "SectionReviewOther",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-master-review" }, _attrs))} data-v-9f53ca2a>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-9f53ca2a${_scopeId}>Другие отзывы о специалисте</h3>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Другие отзывы о специалисте")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "yandex"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, {
                      class: "card-review-master",
                      badge: "yandex"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "2gis"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, {
                      class: "card-review-master",
                      badge: "2gis"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, { class: "card-review-master" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, { class: "card-review-master" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "yandex"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "2gis"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, { class: "card-review-master" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="buttons" data-v-9f53ca2a${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Посмотреть больше отзывов`);
                } else {
                  return [
                    createTextVNode("Посмотреть больше отзывов")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "buttons" }, [
                createVNode(MButtonBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Посмотреть больше отзывов")
                  ]),
                  _: 1
                })
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
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-other/SectionReviewOther.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const SectionReviewOther = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-9f53ca2a"]]);
const _sfc_main$F = {
  __name: "ReviewInsideView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionReviewInside, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewOther, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionReviewInside),
              createVNode(SectionReviewOther)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ReviewInsideView.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _imports_0$6 = "/assets/photo-6e8459e6.png";
const SectionClinicInfoRight_vue_vue_type_style_index_0_scoped_baae7060_lang = "";
const _sfc_main$E = {
  __name: "SectionClinicInfoRight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-clinic-right" }, _attrs))} data-v-baae7060><div class="content-photo-wrapper" data-v-baae7060><img${ssrRenderAttr("src", _imports_0$6)} alt="" class="content-photo" data-v-baae7060></div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-clinic-info/SectionClinicInfoRight.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const SectionClinicInfoRight = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-baae7060"]]);
const SectionClinicInfo_vue_vue_type_style_index_0_scoped_abc167a9_lang = "";
const _sfc_main$D = {
  __name: "SectionClinicInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-clinic-info" }, _attrs))} data-v-abc167a9>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "О клинике"] }, null, _parent2, _scopeId));
            _push2(`<div class="content" data-v-abc167a9${_scopeId}><div class="content-left" data-v-abc167a9${_scopeId}><h1 class="h-xxl title" data-v-abc167a9${_scopeId}>О клинике</h1><h3 class="h-l subtitle" data-v-abc167a9${_scopeId}> Наш Центр специализируется на аппаратной косметологии и имеет медицинскую лицензию </h3><p class="text-sm text" data-v-abc167a9${_scopeId}> Мы постарались сделать Центр косметологии Face Concept уютным, современным местом, где вы сможете решить все проблемы кожи, начиная от черных точек и заканчивая возрастными изменениями. </p></div>`);
            _push2(ssrRenderComponent(SectionClinicInfoRight, { class: "content-right" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "О клинике"] }),
              createVNode("div", { class: "content" }, [
                createVNode("div", { class: "content-left" }, [
                  createVNode("h1", { class: "h-xxl title" }, "О клинике"),
                  createVNode("h3", { class: "h-l subtitle" }, " Наш Центр специализируется на аппаратной косметологии и имеет медицинскую лицензию "),
                  createVNode("p", { class: "text-sm text" }, " Мы постарались сделать Центр косметологии Face Concept уютным, современным местом, где вы сможете решить все проблемы кожи, начиная от черных точек и заканчивая возрастными изменениями. ")
                ]),
                createVNode(SectionClinicInfoRight, { class: "content-right" })
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
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-clinic-info/SectionClinicInfo.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const SectionClinicInfo = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-abc167a9"]]);
const _sfc_main$C = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8125 3.125C17.8125 2.95241 17.6726 2.8125 17.5 2.8125H8.75C6.85153 2.8125 5.3125 4.35153 5.3125 6.25V23.75C5.3125 25.6485 6.85153 27.1875 8.75 27.1875H21.25C23.1485 27.1875 24.6875 25.6485 24.6875 23.75V11.4338C24.6875 11.2612 24.5476 11.1213 24.375 11.1213H18.75C18.2323 11.1213 17.8125 10.7016 17.8125 10.1838V3.125ZM18.75 15.3125C19.2677 15.3125 19.6875 15.7323 19.6875 16.25C19.6875 16.7677 19.2677 17.1875 18.75 17.1875H11.25C10.7322 17.1875 10.3125 16.7677 10.3125 16.25C10.3125 15.7323 10.7322 15.3125 11.25 15.3125H18.75ZM18.75 20.3125C19.2677 20.3125 19.6875 20.7323 19.6875 21.25C19.6875 21.7677 19.2677 22.1875 18.75 22.1875H11.25C10.7322 22.1875 10.3125 21.7677 10.3125 21.25C10.3125 20.7323 10.7322 20.3125 11.25 20.3125H18.75Z" fill="#6D6364"></path><path d="M19.6875 3.53015C19.6875 3.29953 19.9283 3.1531 20.1078 3.29797C20.2589 3.41998 20.3948 3.56293 20.5106 3.72442L24.2771 8.97179C24.3629 9.09126 24.27 9.2463 24.1229 9.2463H20C19.8274 9.2463 19.6875 9.10639 19.6875 8.9338V3.53015Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegalListIcon.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const SectionLegalListIcon = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$a]]);
const SectionLegalList_vue_vue_type_style_index_0_scoped_6f271c84_lang = "";
const _sfc_main$B = {
  __name: "SectionLegalList",
  __ssrInlineRender: true,
  setup(__props) {
    const listItems = [
      {
        text: "График приема пациентов главным врачом",
        link: "https://disk.yandex.ru/d/aSRmQUFEkbPquA"
      },
      {
        text: "Контролирующие органы",
        link: "https://disk.yandex.ru/d/e137aupCHHAMkA"
      },
      {
        text: "ОГРН Свидетельство о постановке на учет",
        link: "https://disk.yandex.ru/d/U1AevBRRwPGPHA"
      },
      {
        text: "Сведения и документы медицинской организации",
        link: "https://disk.yandex.ru/d/6YnHNOny3_gMNQ"
      },
      {
        text: "О правилах предоставления платных медицинских услуг",
        link: "https://disk.yandex.ru/i/8VtAMbp7gRp2bA"
      },
      {
        text: 'Правила внутреннего распорядка для потребителей медицинских услуг в ООО "ФЭЙС КОНЦЕПТ"',
        link: "https://disk.yandex.ru/d/FhuHmKyynNsOEA"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-legal-list-wrapper" }, _attrs))} data-v-6f271c84><div class="section-legal-list" data-v-6f271c84><!--[-->`);
      ssrRenderList(listItems, (item, index) => {
        _push(`<div class="section-legal-list-item" data-v-6f271c84><a${ssrRenderAttr("href", item.link)} class="section-legal-link" target="_blank" rel="noopener noreferrer" data-v-6f271c84></a>`);
        _push(ssrRenderComponent(SectionLegalListIcon, { class: "section-legal-icon-document" }, null, _parent));
        _push(`<p class="text-sm" data-v-6f271c84>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div><div class="section-legal-footer" data-v-6f271c84>`);
      _push(ssrRenderComponent(SectionLegalListIcon, { class: "section-legal-icon-document" }, null, _parent));
      _push(`<div data-v-6f271c84><p class="text-sm" data-v-6f271c84> Уважаемые пациенты, ООО «Центр Косметологии «Фэйс Концепт» уведомляет вас о том, что не оказывает медицинскую помощь в рамках государственной и региональных программ гарантий бесплатного оказания гражданам медицинской помощи. </p><p class="text-sm" style="${ssrRenderStyle({ "padding-top": "10px", "position": "relative" })}" data-v-6f271c84><a href="https://disk.yandex.ru/d/k5gZiEwD6BEtqA" class="section-legal-link" target="_blank" rel="noopener noreferrer" data-v-6f271c84></a> — Программы государственных гарантий бесплатного оказания гражданам медицинской помощи </p><p class="text-sm" style="${ssrRenderStyle({ "position": "relative" })}" data-v-6f271c84><a href="https://disk.yandex.ru/i/-j6lfE9VY-97rg" class="section-legal-link" target="_blank" rel="noopener noreferrer" data-v-6f271c84></a> — Территориальные программы государственных гарантий бесплатного оказания гражданам медицинской помощи </p></div></div></div>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegalList.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const SectionLegalList = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-6f271c84"]]);
const SectionLegal_vue_vue_type_style_index_0_scoped_53257d52_lang = "";
const _sfc_main$A = {
  __name: "SectionLegal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-legal" }, _attrs))} data-v-53257d52>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-legal" data-v-53257d52${_scopeId}><h4 class="h-l" data-v-53257d52${_scopeId}>Правовая информация</h4>`);
            _push2(ssrRenderComponent(SectionLegalList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-legal" }, [
                createVNode("h4", { class: "h-l" }, "Правовая информация"),
                createVNode(SectionLegalList)
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
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegal.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const SectionLegal = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-53257d52"]]);
const _imports_0$5 = "/assets/room-fc3ee4bd.png";
const _imports_1$1 = "/assets/room2-4be15d8c.png";
const ButtonTour_vue_vue_type_style_index_0_scoped_f3bc35d6_lang = "";
const _sfc_main$z = {
  __name: "ButtonTour",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MButtonBig, mergeProps({ class: "button-tour" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="button-tour-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f3bc35d6${_scopeId}><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8M15.194 13.707L19.008 15.567L17.148 19.381" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3bc35d6${_scopeId}></path><path d="M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3bc35d6${_scopeId}></path></svg> 3D тур `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "button-tour-icon",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8M15.194 13.707L19.008 15.567L17.148 19.381",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createTextVNode(" 3D тур ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-tour/ButtonTour.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const ButtonTour = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-f3bc35d6"]]);
const SectionTour_vue_vue_type_style_index_0_scoped_2f89cd4e_lang = "";
const _sfc_main$y = {
  __name: "SectionTour",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-tour" }, _attrs))} data-v-2f89cd4e>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-l section-heading" data-v-2f89cd4e${_scopeId}> Атмосферное пространство <br data-v-2f89cd4e${_scopeId}> комфорта и красоты `);
            _push2(ssrRenderComponent(ButtonTour, null, null, _parent2, _scopeId));
            _push2(`</h2>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              slidesPerView: "auto",
              grabCursor: true,
              spaceBetween: 24,
              modules: [unref(Pagination)],
              pagination: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0$5,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_1$1,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0$5,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0$5,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0$5,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0$5,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_1$1,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0$5,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0$5,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0$5,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "h-l section-heading" }, [
                createTextVNode(" Атмосферное пространство "),
                createVNode("br"),
                createTextVNode(" комфорта и красоты "),
                createVNode(ButtonTour)
              ]),
              createVNode(unref(Swiper), {
                slidesPerView: "auto",
                grabCursor: true,
                spaceBetween: 24,
                modules: [unref(Pagination)],
                pagination: true
              }, {
                default: withCtx(() => [
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0$5,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0$5,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0$5,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0$5,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modules"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-tour/SectionTour.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const SectionTour = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-2f89cd4e"]]);
const _sfc_main$x = {
  __name: "AboutView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionClinicInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses$1, { "more-text": "Лицензия № ЛО-50-01-010568 от 05.02.2019" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTour, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPlaces, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewPacients, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionLegal, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionClinicInfo),
              createVNode(SectionPluses$1, { "more-text": "Лицензия № ЛО-50-01-010568 от 05.02.2019" }),
              createVNode(SectionTour),
              createVNode(SectionPlaces),
              createVNode(SectionReviewPacients),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionRead),
              createVNode(SectionLegal)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const CardInfo_vue_vue_type_style_index_0_scoped_4353e612_lang = "";
const _sfc_main$w = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-info" }, _attrs))} data-v-4353e612><p class="text-sm card-text" data-v-4353e612> ООО «ФЭЙС КОНЦЕПТ» <br data-v-4353e612> ИНН 5041207701 <br data-v-4353e612> ОГРН 1185053020459 </p><a href="https://disk.yandex.ru/d/mF_BJuNTm2_dSQ" class="card-item" data-v-4353e612><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" data-v-4353e612><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8125 3.125C17.8125 2.95241 17.6726 2.8125 17.5 2.8125H8.75C6.85153 2.8125 5.3125 4.35153 5.3125 6.25V23.75C5.3125 25.6485 6.85153 27.1875 8.75 27.1875H21.25C23.1485 27.1875 24.6875 25.6485 24.6875 23.75V11.4338C24.6875 11.2612 24.5476 11.1213 24.375 11.1213H18.75C18.2323 11.1213 17.8125 10.7016 17.8125 10.1838V3.125ZM18.75 15.3125C19.2677 15.3125 19.6875 15.7323 19.6875 16.25C19.6875 16.7677 19.2677 17.1875 18.75 17.1875H11.25C10.7322 17.1875 10.3125 16.7677 10.3125 16.25C10.3125 15.7323 10.7322 15.3125 11.25 15.3125H18.75ZM18.75 20.3125C19.2677 20.3125 19.6875 20.7323 19.6875 21.25C19.6875 21.7677 19.2677 22.1875 18.75 22.1875H11.25C10.7322 22.1875 10.3125 21.7677 10.3125 21.25C10.3125 20.7323 10.7322 20.3125 11.25 20.3125H18.75Z" fill="black" data-v-4353e612></path><path d="M19.6875 3.53015C19.6875 3.29953 19.9283 3.1531 20.1078 3.29797C20.2589 3.41998 20.3948 3.56293 20.5106 3.72442L24.2771 8.97179C24.3629 9.09126 24.27 9.2463 24.1229 9.2463H20C19.8274 9.2463 19.6875 9.10639 19.6875 8.9338V3.53015Z" fill="black" data-v-4353e612></path></svg> Карточка реквизитов </a></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/CardInfo.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const CardInfo = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-4353e612"]]);
const _sfc_main$v = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><path d="M51.2563 8.73015C48.4921 5.95194 45.1995 3.74917 41.5708 2.25032C37.942 0.75148 34.0496 -0.0134403 30.1206 0.000178708C13.6583 0.000178708 0.241207 13.3501 0.241207 29.7301C0.241207 34.9801 1.62814 40.0801 4.22111 44.58L0 60L15.8291 55.86C20.201 58.23 25.1156 59.49 30.1206 59.49C46.5829 59.49 60 46.14 60 29.7601C60 21.8101 56.8945 14.3401 51.2563 8.73015ZM30.1206 54.45C25.6583 54.45 21.2864 53.25 17.4573 51L16.5528 50.46L7.14573 52.92L9.64824 43.8L9.04523 42.8701C6.56607 38.931 5.24967 34.3778 5.24623 29.7301C5.24623 16.1101 16.402 5.01016 30.0904 5.01016C36.7236 5.01016 42.9648 7.59016 47.6382 12.2701C49.9522 14.562 51.786 17.2881 53.0333 20.2904C54.2807 23.2927 54.9167 26.5114 54.9045 29.7601C54.9648 43.3801 43.809 54.45 30.1206 54.45ZM43.7487 35.9701C42.995 35.6101 39.3166 33.8101 38.6533 33.5401C37.9598 33.3001 37.4774 33.1801 36.9648 33.9001C36.4523 34.6501 35.0352 36.3301 34.6131 36.8101C34.191 37.3201 33.7387 37.3801 32.9849 36.9901C32.2312 36.6301 29.8191 35.8201 26.9849 33.3001C24.7538 31.3201 23.2764 28.8901 22.8241 28.1401C22.402 27.3901 22.7638 27.0001 23.1558 26.6101C23.4874 26.2801 23.9095 25.7401 24.2714 25.3201C24.6332 24.9001 24.7839 24.5701 25.0251 24.0901C25.2663 23.5801 25.1457 23.1601 24.9648 22.8001C24.7839 22.4401 23.2764 18.7801 22.6734 17.2801C22.0703 15.8401 21.4372 16.0201 20.9849 15.9901H19.5377C19.0251 15.9901 18.2412 16.1701 17.5477 16.9201C16.8844 17.6701 14.9548 19.4701 14.9548 23.1301C14.9548 26.7901 17.6382 30.3301 18 30.8101C18.3618 31.3201 23.2764 38.8201 30.7538 42.0301C32.5327 42.8101 33.9196 43.2601 35.005 43.59C36.7839 44.16 38.4121 44.07 39.7085 43.89C41.1558 43.68 44.1407 42.0901 44.7437 40.3501C45.3769 38.6101 45.3769 37.1401 45.1658 36.8101C44.9548 36.4801 44.5025 36.3301 43.7487 35.9701Z" fill="black"></path></svg>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/IconWhatsApp.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const IconWhatsApp = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$u = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "54",
    viewBox: "0 0 60 54",
    fill: "none"
  }, _attrs))}><path d="M55.5581 0.00551817C54.8171 0.0594284 54.0898 0.233267 53.4045 0.520251H53.3953C52.7374 0.78108 49.6098 2.09677 44.8548 4.09107L27.8155 11.2673C15.5889 16.4147 3.56997 21.4835 3.56997 21.4835L3.71308 21.4281C3.71308 21.4281 2.88442 21.7005 2.01884 22.2937C1.48409 22.634 1.02394 23.0792 0.666223 23.6025C0.24151 24.2257 -0.100107 25.179 0.0268456 26.1646C0.234586 27.8311 1.31483 28.8306 2.0904 29.3823C2.87519 29.9409 3.62306 30.2017 3.62306 30.2017H3.64152L14.9126 33.9987C15.4181 35.6214 18.3472 45.2513 19.0512 47.4695C19.4667 48.7944 19.8706 49.6231 20.3761 50.2555C20.6208 50.5787 20.907 50.8487 21.2509 51.0657C21.4297 51.1697 21.6204 51.2519 21.8188 51.3104L21.7034 51.2827C21.738 51.2919 21.7657 51.3196 21.7911 51.3288C21.8834 51.3542 21.9457 51.3635 22.0634 51.3819C23.8477 51.9221 25.2811 50.8141 25.2811 50.8141L25.3619 50.7495L32.0165 44.6904L43.1698 53.247L43.4237 53.3555C45.7481 54.3757 48.1025 53.8079 49.3466 52.8061C50.6 51.7974 51.087 50.5071 51.087 50.5071L51.1678 50.2994L59.7867 6.14539C60.0314 5.05591 60.0937 4.03568 59.8237 3.04545C59.5451 2.04328 58.9022 1.18134 58.0209 0.628738C57.281 0.1789 56.4229 -0.038226 55.5581 0.00551817ZM55.3249 4.73737C55.3157 4.88279 55.3434 4.86663 55.2788 5.14593V5.17132L46.7407 48.866C46.7037 48.9283 46.6414 49.0645 46.4706 49.2007C46.2905 49.3438 46.1474 49.4338 45.3973 49.136L31.7557 38.6775L23.5153 46.1884L25.2465 35.132L47.5347 14.358C48.4534 13.504 48.1464 13.324 48.1464 13.324C48.211 12.276 46.7591 13.017 46.7591 13.017L18.6542 30.4279L18.645 30.3817L5.17418 25.8461V25.8368L5.13956 25.8299C5.16317 25.8221 5.1863 25.8128 5.20881 25.8022L5.28267 25.7653L5.35422 25.7399C5.35422 25.7399 17.3824 20.671 29.609 15.5237C35.7304 12.9454 41.898 10.3487 46.6414 8.34513C49.4545 7.16102 52.2706 5.98382 55.0895 4.81355C55.2788 4.73968 55.1887 4.73737 55.3249 4.73737Z" fill="black"></path></svg>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/IconTelegram.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const IconTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$7]]);
const SectionContactsCard_vue_vue_type_style_index_0_scoped_e3719c35_lang = "";
const _sfc_main$t = {
  __name: "SectionContactsCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-contacts-card" }, _attrs))} data-v-e3719c35>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Контакты"] }, null, _parent2, _scopeId));
            _push2(`<div class="content" data-v-e3719c35${_scopeId}><div data-v-e3719c35${_scopeId}><h1 class="h-xxl contacts-title" data-v-e3719c35${_scopeId}>Контакты</h1><div class="numbers" data-v-e3719c35${_scopeId}><p class="text-sm numbers-title" data-v-e3719c35${_scopeId}>Запись и консультация</p><h5 class="h-xxl numbers-item" data-v-e3719c35${_scopeId}><a href="tel:+79774122010" style="${ssrRenderStyle({ "color": "black" })}" data-v-e3719c35${_scopeId}> +7 977 412-20-10 </a><a href="https://wa.me/79774122010" data-v-e3719c35${_scopeId}>`);
            _push2(ssrRenderComponent(IconWhatsApp, { class: "contact-icon" }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://t.me/FaceConcept_bot" data-v-e3719c35${_scopeId}>`);
            _push2(ssrRenderComponent(IconTelegram, { class: "contact-icon" }, null, _parent2, _scopeId));
            _push2(`</a></h5><h5 class="h-xxl" data-v-e3719c35${_scopeId}><a href="tel:+74952913578" style="${ssrRenderStyle({ "color": "black" })}" data-v-e3719c35${_scopeId}> +7 495 291-35-78 </a></h5></div><a href="#" data-v-e3719c35${_scopeId}><p class="h-md contacts-mail" data-v-e3719c35${_scopeId}>hello@faceconcept.ru</p></a><p class="h-md contacts-info" data-v-e3719c35${_scopeId}> Москва, улица Красноказарменная 14А, корпус 6 </p><p class="text-sm" data-v-e3719c35${_scopeId}>с 10:00 до 22:00 без выходных</p></div><div class="content-right" data-v-e3719c35${_scopeId}>`);
            _push2(ssrRenderComponent(CardInfo, { class: "card-mini" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Контакты"] }),
              createVNode("div", { class: "content" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "h-xxl contacts-title" }, "Контакты"),
                  createVNode("div", { class: "numbers" }, [
                    createVNode("p", { class: "text-sm numbers-title" }, "Запись и консультация"),
                    createVNode("h5", { class: "h-xxl numbers-item" }, [
                      createVNode("a", {
                        href: "tel:+79774122010",
                        style: { "color": "black" }
                      }, " +7 977 412-20-10 "),
                      createVNode("a", { href: "https://wa.me/79774122010" }, [
                        createVNode(IconWhatsApp, { class: "contact-icon" })
                      ]),
                      createVNode("a", { href: "https://t.me/FaceConcept_bot" }, [
                        createVNode(IconTelegram, { class: "contact-icon" })
                      ])
                    ]),
                    createVNode("h5", { class: "h-xxl" }, [
                      createVNode("a", {
                        href: "tel:+74952913578",
                        style: { "color": "black" }
                      }, " +7 495 291-35-78 ")
                    ])
                  ]),
                  createVNode("a", { href: "#" }, [
                    createVNode("p", { class: "h-md contacts-mail" }, "hello@faceconcept.ru")
                  ]),
                  createVNode("p", { class: "h-md contacts-info" }, " Москва, улица Красноказарменная 14А, корпус 6 "),
                  createVNode("p", { class: "text-sm" }, "с 10:00 до 22:00 без выходных")
                ]),
                createVNode("div", { class: "content-right" }, [
                  createVNode(CardInfo, { class: "card-mini" })
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
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/SectionContactsCard.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const SectionContactsCard = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-e3719c35"]]);
const MapBadge_vue_vue_type_style_index_0_scoped_335adcee_lang = "";
const _sfc_main$s = {
  __name: "MapBadge",
  __ssrInlineRender: true,
  props: ["number", "color"],
  setup(__props) {
    const props = __props;
    const styleColor = `
background-color: ${props.color || "#ffe116"};
color: ${props.color ? "#fff" : "#000"}
`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "map-badge" }, _attrs))} data-v-335adcee><div class="map-badge-number" style="${ssrRenderStyle(styleColor)}" data-v-335adcee>${ssrInterpolate(__props.number)}</div><p class="text-sm" data-v-335adcee>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-map/MapBadge.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const MapBadge = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-335adcee"]]);
const SectionMap_vue_vue_type_style_index_0_scoped_96dbbfed_lang = "";
const _sfc_main$r = {
  __name: "SectionMap",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-map" }, _attrs))} data-v-96dbbfed>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-96dbbfed${_scopeId}>Как добраться</h3><div class="map" data-v-96dbbfed${_scopeId}><div class="map-header" data-v-96dbbfed${_scopeId}><h6 class="h-sm-ultra map-header-title" data-v-96dbbfed${_scopeId}>Ближайшие станции метро</h6><div class="map-header-flex" data-v-96dbbfed${_scopeId}><div class="map-header-badges" data-v-96dbbfed${_scopeId}>`);
            _push2(ssrRenderComponent(MapBadge, { number: "8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Авиамоторная`);
                } else {
                  return [
                    createTextVNode("Авиамоторная")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MapBadge, { number: "8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Площадь Ильича`);
                } else {
                  return [
                    createTextVNode("Площадь Ильича")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MapBadge, {
              number: "11",
              color: "#7ECECE"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Лефортово`);
                } else {
                  return [
                    createTextVNode("Лефортово")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MapBadge, {
              number: "10",
              color: "#BED968"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Римская`);
                } else {
                  return [
                    createTextVNode("Римская")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="map-body" data-v-96dbbfed${_scopeId}><iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&amp;source=constructor" width="100%" height="780px" frameborder="0" style="${ssrRenderStyle({ "border": "none", "position": "relative", "display": "block", "margin": "-2px", "border-radius": "50px" })}" data-v-96dbbfed${_scopeId}></iframe></div></div>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Как добраться"),
              createVNode("div", { class: "map" }, [
                createVNode("div", { class: "map-header" }, [
                  createVNode("h6", { class: "h-sm-ultra map-header-title" }, "Ближайшие станции метро"),
                  createVNode("div", { class: "map-header-flex" }, [
                    createVNode("div", { class: "map-header-badges" }, [
                      createVNode(MapBadge, { number: "8" }, {
                        default: withCtx(() => [
                          createTextVNode("Авиамоторная")
                        ]),
                        _: 1
                      }),
                      createVNode(MapBadge, { number: "8" }, {
                        default: withCtx(() => [
                          createTextVNode("Площадь Ильича")
                        ]),
                        _: 1
                      }),
                      createVNode(MapBadge, {
                        number: "11",
                        color: "#7ECECE"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Лефортово")
                        ]),
                        _: 1
                      }),
                      createVNode(MapBadge, {
                        number: "10",
                        color: "#BED968"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Римская")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "map-body" }, [
                  createVNode("iframe", {
                    src: "https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&source=constructor",
                    width: "100%",
                    height: "780px",
                    frameborder: "0",
                    style: { "border": "none", "position": "relative", "display": "block", "margin": "-2px", "border-radius": "50px" }
                  })
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
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-map/SectionMap.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const SectionMap = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-96dbbfed"]]);
const _sfc_main$q = {
  __name: "ContactsView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionContactsCard, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMap, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTour, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionContactsCard),
              createVNode(SectionMap),
              createVNode(SectionTour)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ContactsView.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2821 1.5C8.09902 1.5 4.61523 4.70845 4.27159 8.87739C4.08657 11.122 4.77992 13.3508 6.20557 15.0943L10.9986 20.9561C11.7736 21.9039 13.2226 21.9039 13.9976 20.9561L18.7905 15.0943C20.2162 13.3508 20.9095 11.122 20.7246 8.87739C20.381 4.70845 16.8971 1.5 12.714 1.5H12.2821ZM12.498 13C14.431 13 15.998 11.433 15.998 9.5C15.998 7.567 14.431 6 12.498 6C10.5651 6 8.99805 7.567 8.99805 9.5C8.99805 11.433 10.5651 13 12.498 13Z" fill="white"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/IconLocation.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const IconLocation = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$o = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none"
  }, _attrs))}><path d="M19.7668 3.958C14.9337 3.48535 10.0661 3.48535 5.23299 3.958C4.79827 4.00051 4.4322 4.29865 4.29843 4.71071C3.76511 6.35363 3.76511 8.14581 4.29843 9.78873C4.4322 10.2008 4.79827 10.4989 5.23299 10.5414C10.0661 11.0141 14.9337 11.0141 19.7668 10.5414C20.2015 10.4989 20.5676 10.2008 20.7014 9.78873C21.2347 8.14581 21.2347 6.35363 20.7014 4.71071C20.5676 4.29865 20.2015 4.00051 19.7668 3.958Z" fill="#AE8C8E"></path><path d="M19.7668 13.458C14.9337 12.9853 10.0661 12.9853 5.23299 13.458C4.79827 13.5005 4.4322 13.7986 4.29843 14.2107C3.76511 15.8536 3.76511 17.6458 4.29843 19.2887C4.4322 19.7008 4.79827 19.9989 5.23299 20.0414C10.0661 20.5141 14.9337 20.5141 19.7668 20.0414C20.2015 19.9989 20.5676 19.7008 20.7014 19.2887C21.2347 17.6458 21.2347 15.8536 20.7014 14.2107C20.5676 13.7986 20.2015 13.5005 19.7668 13.458Z" fill="#AE8C8E"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/IconList.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const IconList = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$5]]);
const SectionBranches_vue_vue_type_style_index_0_scoped_d2ea230d_lang = "";
const _sfc_main$n = {
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-map/SectionBranches.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const SectionBranches = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d2ea230d"]]);
const SectionBranchesList_vue_vue_type_style_index_0_scoped_ec8c54bd_lang = "";
const _sfc_main$m = {
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
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/branches/section-branches-list/SectionBranchesList.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const SectionBranchesList = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-ec8c54bd"]]);
const _sfc_main$l = {
  __name: "BranchesView",
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
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/BranchesView.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _imports_0$4 = "/assets/photo-0cdd16a0.png";
const SectionAbout_vue_vue_type_style_index_0_scoped_384e1e13_lang = "";
const _sfc_main$k = {
  __name: "SectionAbout",
  __ssrInlineRender: true,
  setup(__props) {
    const breadCrubmsItems = [
      "Главная",
      "Медиа",
      "Причины сухой кожи лица и как от нее избавиться"
    ];
    const listItems = [
      "Причины появления",
      "Виды акне",
      "Особенности локализации",
      "Методы лечения",
      "Профессиональное лечение у врача-косметолога",
      "Особенности ухода за кожей при акне",
      "Рекомендации по питанию и образу жизни",
      "Мифы и ошибки при лечении",
      "Заключение",
      "Часто задаваемые вопросы"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-about" }, _attrs))} data-v-384e1e13>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: breadCrubmsItems }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-384e1e13${_scopeId}><span data-v-384e1e13${_scopeId}> Как избавиться от прыщей на лице: путь к чистой и здоровой коже </span>`);
            _push2(ssrRenderComponent(ButtonBack, { class: "button-back" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Вернуться`);
                } else {
                  return [
                    createTextVNode("Вернуться")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h1><div class="list-with-photo" data-v-384e1e13${_scopeId}><div data-v-384e1e13${_scopeId}><h5 class="text-section list-heading" data-v-384e1e13${_scopeId}>Оглавление</h5><ol class="list" data-v-384e1e13${_scopeId}><!--[-->`);
            ssrRenderList(listItems, (item, index) => {
              _push2(`<li class="list-item text-sm" data-v-384e1e13${_scopeId}><a class="list-item-link" href="#" data-v-384e1e13${_scopeId}></a> ${ssrInterpolate(item)}</li>`);
            });
            _push2(`<!--]--></ol></div><div class="photo-wrapper" data-v-384e1e13${_scopeId}><img${ssrRenderAttr("src", _imports_0$4)} alt="" class="photo" data-v-384e1e13${_scopeId}></div></div><p class="text-sm" data-v-384e1e13${_scopeId}> В разные периоды жизни, будь то подростковый возраст или зрелые годы, люди сталкиваются с проблемой прыщей на лице. Это хроническое воспалительное заболевание кожи, проявляющееся в виде различных элементов, таких как черные точки, белые головки, папулы, пустулы, узлы и кисты. Они могут вызывать множество неудобств, начиная от легкого дискомфорта и заканчивая серьезными комплексами. Особенно это актуально для подростков, для которых внешний вид играет важную роль в социализации. Однако, данная проблема актуальна и для взрослых, угревая сыпь может появиться в любом возрасте и стать настоящим испытанием для психики человека. <br data-v-384e1e13${_scopeId}> Прыщи на лице, также известные как акне или угревая сыпь — это серьезная неприятность для человека, которая влияет не только на его внешний вид, но и на восприятие окружающих. Но важно помнить, что это распространенная проблема, и существует множество способов борьбы с ней. </p>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: breadCrubmsItems }),
              createVNode("h1", { class: "h-xxl heading" }, [
                createVNode("span", null, " Как избавиться от прыщей на лице: путь к чистой и здоровой коже "),
                createVNode(ButtonBack, { class: "button-back" }, {
                  default: withCtx(() => [
                    createTextVNode("Вернуться")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "list-with-photo" }, [
                createVNode("div", null, [
                  createVNode("h5", { class: "text-section list-heading" }, "Оглавление"),
                  createVNode("ol", { class: "list" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(listItems, (item, index) => {
                      return createVNode("li", {
                        key: index + item,
                        class: "list-item text-sm"
                      }, [
                        createVNode("a", {
                          class: "list-item-link",
                          href: "#"
                        }),
                        createTextVNode(" " + toDisplayString(item), 1)
                      ]);
                    }), 64))
                  ])
                ]),
                createVNode("div", { class: "photo-wrapper" }, [
                  createVNode("img", {
                    src: _imports_0$4,
                    alt: "",
                    class: "photo"
                  })
                ])
              ]),
              createVNode("p", { class: "text-sm" }, [
                createTextVNode(" В разные периоды жизни, будь то подростковый возраст или зрелые годы, люди сталкиваются с проблемой прыщей на лице. Это хроническое воспалительное заболевание кожи, проявляющееся в виде различных элементов, таких как черные точки, белые головки, папулы, пустулы, узлы и кисты. Они могут вызывать множество неудобств, начиная от легкого дискомфорта и заканчивая серьезными комплексами. Особенно это актуально для подростков, для которых внешний вид играет важную роль в социализации. Однако, данная проблема актуальна и для взрослых, угревая сыпь может появиться в любом возрасте и стать настоящим испытанием для психики человека. "),
                createVNode("br"),
                createTextVNode(" Прыщи на лице, также известные как акне или угревая сыпь — это серьезная неприятность для человека, которая влияет не только на его внешний вид, но и на восприятие окружающих. Но важно помнить, что это распространенная проблема, и существует множество способов борьбы с ней. ")
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-about/SectionAbout.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const SectionAbout = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-384e1e13"]]);
const _sfc_main$j = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8374 8.75C17.5604 8.75 17.3046 8.89865 17.1674 9.13937L11.5908 18.9282C10.8516 20.2257 10.5414 21.7237 10.7045 23.2082L11.2931 28.5642C11.3978 29.5172 12.1459 30.272 13.0979 30.3853L16.6263 30.805C18.9556 31.0822 21.3172 30.8418 23.5431 30.1015C24.6424 29.736 25.5227 28.9017 25.9471 27.8237L28.7871 20.606C28.8566 20.4297 28.9046 20.2455 28.9301 20.0575C29.1454 18.4707 27.7564 17.132 26.1786 17.4062L20.4856 18.3948C18.6872 18.7072 17.1341 17.1203 17.4851 15.3291L18.5941 9.6693C18.6874 9.19302 18.3227 8.75 17.8374 8.75ZM14.9952 7.90185C15.577 6.8806 16.662 6.25002 17.8374 6.25C19.8964 6.24998 21.4432 8.12947 21.0474 10.15L19.9384 15.8098C19.9336 15.834 19.9362 15.8488 19.9396 15.8595C19.9436 15.8726 19.9521 15.8879 19.9661 15.9022C19.9799 15.9164 19.9951 15.9252 20.0081 15.9296C20.0186 15.9331 20.0334 15.936 20.0577 15.9318L25.7507 14.943C28.9944 14.3796 31.8502 17.1315 31.4074 20.3938C31.3549 20.7802 31.2562 21.1587 31.1136 21.5215L28.2734 28.7392C27.5779 30.5065 26.1344 31.8743 24.3321 32.4738C21.7574 33.3302 19.0254 33.608 16.331 33.2875L12.8026 32.8678C10.6956 32.6172 9.0398 30.9465 8.80803 28.8373L8.21946 23.4812C7.99876 21.4728 8.41846 19.4462 9.4186 17.6905L14.9952 7.90185Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/IconLike.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const IconLike = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$4]]);
const MediaInfoWidget_vue_vue_type_style_index_0_scoped_0a44182f_lang = "";
const _sfc_main$i = {
  __name: "MediaInfoWidget",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget" }, _attrs))} data-v-0a44182f>`);
      _push(ssrRenderComponent(IconLike, null, null, _parent));
      _push(`<p class="text-sm" data-v-0a44182f> Более 80% подростков и около 40% взрослых сталкиваются с проблемой угревой сыпи в той или иной степени. </p></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const MediaInfoWidget = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0a44182f"]]);
const _sfc_main$h = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none"
  }, _attrs))}><path d="M20 17.9141C20.6903 17.9141 21.25 18.4737 21.25 19.1641V27.4974C21.25 28.1877 20.6903 28.7474 20 28.7474C19.3097 28.7474 18.75 28.1877 18.75 27.4974V19.1641C18.75 18.4737 19.3097 17.9141 20 17.9141Z" fill="#6D6364"></path><path d="M19.9997 14.9974C20.9202 14.9974 21.6663 14.2512 21.6663 13.3307C21.6663 12.4103 20.9202 11.6641 19.9997 11.6641C19.0792 11.6641 18.333 12.4103 18.333 13.3307C18.333 14.2512 19.0792 14.9974 19.9997 14.9974Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.41699 19.9974C5.41699 11.9432 11.9462 5.41406 20.0003 5.41406C28.0545 5.41406 34.5837 11.9432 34.5837 19.9974C34.5837 28.0516 28.0545 34.5807 20.0003 34.5807C11.9462 34.5807 5.41699 28.0516 5.41699 19.9974ZM20.0003 7.91406C13.3269 7.91406 7.91699 13.324 7.91699 19.9974C7.91699 26.6709 13.3269 32.0807 20.0003 32.0807C26.6738 32.0807 32.0837 26.6709 32.0837 19.9974C32.0837 13.324 26.6738 7.91406 20.0003 7.91406Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/IconInfo.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const IconInfo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3]]);
const MediaInfoWidget2_vue_vue_type_style_index_0_scoped_be0bf792_lang = "";
const _sfc_main$g = {
  __name: "MediaInfoWidget2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget" }, _attrs))} data-v-be0bf792>`);
      _push(ssrRenderComponent(IconInfo, null, null, _parent));
      _push(`<p class="text-sm" data-v-be0bf792> В разные периоды жизни, будь то подростковый возраст или зрелые годы, люди сталкиваются с проблемой прыщей на лице. Это хроническое воспалительное заболевание кожи, проявляющееся в виде различных элементов, таких как черные точки, белые головки, папулы, пустулы, узлы и кисты. </p></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget2.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const MediaInfoWidget2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-be0bf792"]]);
const _imports_0$3 = "/assets/avatar-134e9acb.png";
const MediaInfoWidget3_vue_vue_type_style_index_0_scoped_7096edff_lang = "";
const _sfc_main$f = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget" }, _attrs))} data-v-7096edff><div class="widget-header" data-v-7096edff><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="widget-header-avatar" data-v-7096edff><div data-v-7096edff><h6 class="h-xs widget-header-title" data-v-7096edff>Ольга Заика</h6><p class="text-mini" data-v-7096edff> Врач – косметолог, дерматовенеролог , член общества специалистов эстетической медицины, сертифицированный национальный тренер по аппаратной и инъекционной косметологии компании. </p></div></div><p class="text-sm" data-v-7096edff> В нашей клинике каждому пациенту предоставляется индивидуальный подход. Мы предлагаем широкий спектр самых современных методов для лечения акне, гарантируя качественный результат. Преимущества работы с нами – это профессионализм и забота о здоровье вашей кожи. </p></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget3.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const MediaInfoWidget3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7096edff"]]);
const SectionMediaInfo_vue_vue_type_style_index_0_scoped_bead1d70_lang = "";
const _sfc_main$e = {
  __name: "SectionMediaInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-media-info" }, _attrs))} data-v-bead1d70>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="widgets" data-v-bead1d70${_scopeId}>`);
            _push2(ssrRenderComponent(MediaInfoWidget, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MediaInfoWidget2, null, null, _parent2, _scopeId));
            _push2(`</div><h5 class="text-section list-heading" data-v-bead1d70${_scopeId}> Причины, приводящие к сухости кожи бывают различными, в зависимости от этого выделяют следующие виды: </h5><ul class="list" data-v-bead1d70${_scopeId}><li class="list-item" data-v-bead1d70${_scopeId}> Врождённый ксероз. Исходя из названия, обусловлен наследственной предрасположенностью к сухости, которая возникает из-за сбоя в синтезе филларгина — белка, принимающего участие в построении защитного барьера кожи. В результате на коже появляются точечные высыпания, она зудит и шелушится; такое состояние возникает спустя несколько недель после рождения. </li><li class="list-item" data-v-bead1d70${_scopeId}> Приобретённый ксероз. Наиболее частая его причина — неправильный уход за кожей, неправильное питание, жизнь в условиях неблагоприятной и загрязнённой среды. </li><li class="list-item" data-v-bead1d70${_scopeId}> Возрастной ксероз. Это отдельный вид сухой кожи, он возникает из-за низкого содержания гиалуроновой кислоты в коже, которая с возрастом начинает образовываться в меньшем количестве. </li></ul><h4 class="h-md heading-step" data-v-bead1d70${_scopeId}>Виды акне</h4><p class="text-sm section-text" data-v-bead1d70${_scopeId}> Сухая кожа может иметь разную степень выраженности, исходя из этого, выделяют следующие степени ксероза: </p><ol class="list text-sm" data-v-bead1d70${_scopeId}><li class="" data-v-bead1d70${_scopeId}> Первая степень — симптомы возникают после контакта с раздражителем. При применении увлажняющих средств, сухость сразу исчезает. </li><li data-v-bead1d70${_scopeId}> При второй степени симптомы становятся более выраженные. Человек ощущает постоянную стянутость кожи, небольшое жжение и покраснение на ней. После применения увлажняющих средств наступает облегчение, но полностью симптомы не уходят. Для правильного лечения необходима консультация врача дерматолога или косметолога. </li><li data-v-bead1d70${_scopeId}> При третьей степени симптомы крайне выражены: постоянный зуд кожи, красные пятна и очень сильное шелушение. Кожа может отекать и воспаляться. При этой степени вначале необходима консультация врача дерматокосметолога. </li></ol><h4 class="h-md heading-step" data-v-bead1d70${_scopeId}>Симптомы сухой кожи</h4><p class="text-sm section-text" data-v-bead1d70${_scopeId}> Наиболее частыми симптомами являются стянутость кожи, шероховатости, зуд, иногда могут возникать красные пятна и жжение кожи. </p><p class="text-sm section-text" data-v-bead1d70${_scopeId}> Причины, из-за которых возникает сухая кожа, разделяют на экзогенные и эндогенные. Среди экзогенных причин выделяют следующие: </p><ul class="list text-sm" data-v-bead1d70${_scopeId}><li data-v-bead1d70${_scopeId}> Неверный уход за кожей. Частое скрабирование лица, агрессивные средств для умывания, неподходящий вашей коже крем — все это вызывает нарушение гидролипидного барьера кожи, а как следствие –шелушение и сухость кожи </li><li data-v-bead1d70${_scopeId}> неправильное питание, т.е. недостаточное потребление жидкости, витаминовмогут быть ещё одной причиной ксероза </li><li data-v-bead1d70${_scopeId}>ветреная погода, яркое солнце, холодное время года</li><li data-v-bead1d70${_scopeId}>постоянный стресс</li><li data-v-bead1d70${_scopeId}> гормональные изменения, нарушения обмена веществ, изменения со стороны ЖКТ, ЦНС и мочевыделительной систем, инфекционные заболевания. </li></ul>`);
            _push2(ssrRenderComponent(MediaInfoWidget3, null, null, _parent2, _scopeId));
            _push2(`<h4 class="h-md heading-step" data-v-bead1d70${_scopeId}>Заключение</h4><p class="text-sm" data-v-bead1d70${_scopeId}> Борьба с акне — сложный процесс, который требует комплексного и индивидуального подхода. Правильно выбранные методы лечения, грамотный уход за кожей и соблюдение рекомендаций специалистов могут дать заметные результаты, улучшая качество жизни и возвращая уверенность в себе. Профессиональное лечение — это не только применение медикаментов или косметических процедур. Это также правильный уход, диета, устранение вредных привычек и работа над психологическим состоянием. Современная дерматология предлагает множество методов борьбы с этой проблемой, и ключ к успеху — в индивидуальном подходе. </p>`);
          } else {
            return [
              createVNode("div", { class: "widgets" }, [
                createVNode(MediaInfoWidget),
                createVNode(MediaInfoWidget2)
              ]),
              createVNode("h5", { class: "text-section list-heading" }, " Причины, приводящие к сухости кожи бывают различными, в зависимости от этого выделяют следующие виды: "),
              createVNode("ul", { class: "list" }, [
                createVNode("li", { class: "list-item" }, " Врождённый ксероз. Исходя из названия, обусловлен наследственной предрасположенностью к сухости, которая возникает из-за сбоя в синтезе филларгина — белка, принимающего участие в построении защитного барьера кожи. В результате на коже появляются точечные высыпания, она зудит и шелушится; такое состояние возникает спустя несколько недель после рождения. "),
                createVNode("li", { class: "list-item" }, " Приобретённый ксероз. Наиболее частая его причина — неправильный уход за кожей, неправильное питание, жизнь в условиях неблагоприятной и загрязнённой среды. "),
                createVNode("li", { class: "list-item" }, " Возрастной ксероз. Это отдельный вид сухой кожи, он возникает из-за низкого содержания гиалуроновой кислоты в коже, которая с возрастом начинает образовываться в меньшем количестве. ")
              ]),
              createVNode("h4", { class: "h-md heading-step" }, "Виды акне"),
              createVNode("p", { class: "text-sm section-text" }, " Сухая кожа может иметь разную степень выраженности, исходя из этого, выделяют следующие степени ксероза: "),
              createVNode("ol", { class: "list text-sm" }, [
                createVNode("li", { class: "" }, " Первая степень — симптомы возникают после контакта с раздражителем. При применении увлажняющих средств, сухость сразу исчезает. "),
                createVNode("li", null, " При второй степени симптомы становятся более выраженные. Человек ощущает постоянную стянутость кожи, небольшое жжение и покраснение на ней. После применения увлажняющих средств наступает облегчение, но полностью симптомы не уходят. Для правильного лечения необходима консультация врача дерматолога или косметолога. "),
                createVNode("li", null, " При третьей степени симптомы крайне выражены: постоянный зуд кожи, красные пятна и очень сильное шелушение. Кожа может отекать и воспаляться. При этой степени вначале необходима консультация врача дерматокосметолога. ")
              ]),
              createVNode("h4", { class: "h-md heading-step" }, "Симптомы сухой кожи"),
              createVNode("p", { class: "text-sm section-text" }, " Наиболее частыми симптомами являются стянутость кожи, шероховатости, зуд, иногда могут возникать красные пятна и жжение кожи. "),
              createVNode("p", { class: "text-sm section-text" }, " Причины, из-за которых возникает сухая кожа, разделяют на экзогенные и эндогенные. Среди экзогенных причин выделяют следующие: "),
              createVNode("ul", { class: "list text-sm" }, [
                createVNode("li", null, " Неверный уход за кожей. Частое скрабирование лица, агрессивные средств для умывания, неподходящий вашей коже крем — все это вызывает нарушение гидролипидного барьера кожи, а как следствие –шелушение и сухость кожи "),
                createVNode("li", null, " неправильное питание, т.е. недостаточное потребление жидкости, витаминовмогут быть ещё одной причиной ксероза "),
                createVNode("li", null, "ветреная погода, яркое солнце, холодное время года"),
                createVNode("li", null, "постоянный стресс"),
                createVNode("li", null, " гормональные изменения, нарушения обмена веществ, изменения со стороны ЖКТ, ЦНС и мочевыделительной систем, инфекционные заболевания. ")
              ]),
              createVNode(MediaInfoWidget3),
              createVNode("h4", { class: "h-md heading-step" }, "Заключение"),
              createVNode("p", { class: "text-sm" }, " Борьба с акне — сложный процесс, который требует комплексного и индивидуального подхода. Правильно выбранные методы лечения, грамотный уход за кожей и соблюдение рекомендаций специалистов могут дать заметные результаты, улучшая качество жизни и возвращая уверенность в себе. Профессиональное лечение — это не только применение медикаментов или косметических процедур. Это также правильный уход, диета, устранение вредных привычек и работа над психологическим состоянием. Современная дерматология предлагает множество методов борьбы с этой проблемой, и ключ к успеху — в индивидуальном подходе. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/SectionMediaInfo.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const SectionMediaInfo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-bead1d70"]]);
const SectionOtherPublic_vue_vue_type_style_index_0_scoped_4660a82d_lang = "";
const _sfc_main$d = {
  __name: "SectionOtherPublic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-service" }, _attrs))} data-v-4660a82d>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-xl section-title" data-v-4660a82d${_scopeId}>Другие публикации</h2><div class="cards" data-v-4660a82d${_scopeId}>`);
            _push2(ssrRenderComponent(CardNews, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, null, null, _parent2, _scopeId));
            _push2(`</div><div class="button-wrapper" data-v-4660a82d${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ещё публикации`);
                } else {
                  return [
                    createTextVNode("Ещё публикации")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", { class: "h-xl section-title" }, "Другие публикации"),
              createVNode("div", { class: "cards" }, [
                createVNode(CardNews),
                createVNode(CardNews),
                createVNode(CardNews)
              ]),
              createVNode("div", { class: "button-wrapper" }, [
                createVNode(MButtonBig, null, {
                  default: withCtx(() => [
                    createTextVNode("Ещё публикации")
                  ]),
                  _: 1
                })
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other-public/SectionOtherPublic.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const SectionOtherPublic = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-4660a82d"]]);
const _imports_0$2 = "/assets/tech-328fcd19.png";
const CardSale_vue_vue_type_style_index_0_scoped_b8dd41fc_lang = "";
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "prices" }, _attrs))} data-v-b8dd41fc><div class="price-old-wrapper" data-v-b8dd41fc><h4 class="price-old" data-v-b8dd41fc>2 500₽</h4></div><h4 class="price-new" data-v-b8dd41fc>990₽</h4></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardSale.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CardSale = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b8dd41fc"]]);
const SectionService_vue_vue_type_style_index_0_scoped_cd3cd7bb_lang = "";
const _sfc_main$b = {
  __name: "SectionService",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-service" }, _attrs))} data-v-cd3cd7bb>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="service-card" data-v-cd3cd7bb${_scopeId}><div class="service-card-content" data-v-cd3cd7bb${_scopeId}><h4 class="h-l service-card-title" data-v-cd3cd7bb${_scopeId}>Газожидкостный пилинг Jet Peel</h4><h5 class="text-lg service-card-subtitle" data-v-cd3cd7bb${_scopeId}> Lorem ipsum dolor sit amet consectetur. Iaculis tristique turpis pretium elementum auctor aliquam. </h5><p class="text-sm service-card-text" data-v-cd3cd7bb${_scopeId}> Краткое описание или подробности услуги Lorem ipsum dolor sit amet consectetur. Iaculis tristique turpis pretium elementum auctor aliquam. Senectus aliquet eget quis posuere amet id hac sit potenti. Id sem malesuada vitae dolor ut nibh morbi tempus sapien </p><div class="service-card-buttons" data-v-cd3cd7bb${_scopeId}>`);
            _push2(ssrRenderComponent(MButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Записаться на приём`);
                } else {
                  return [
                    createTextVNode("Записаться на приём")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MButtonOutline, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Получить консультацию`);
                } else {
                  return [
                    createTextVNode("Получить консультацию")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="service-card-right" data-v-cd3cd7bb${_scopeId}><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="service-card-img" data-v-cd3cd7bb${_scopeId}>`);
            _push2(ssrRenderComponent(CardSale, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "service-card" }, [
                createVNode("div", { class: "service-card-content" }, [
                  createVNode("h4", { class: "h-l service-card-title" }, "Газожидкостный пилинг Jet Peel"),
                  createVNode("h5", { class: "text-lg service-card-subtitle" }, " Lorem ipsum dolor sit amet consectetur. Iaculis tristique turpis pretium elementum auctor aliquam. "),
                  createVNode("p", { class: "text-sm service-card-text" }, " Краткое описание или подробности услуги Lorem ipsum dolor sit amet consectetur. Iaculis tristique turpis pretium elementum auctor aliquam. Senectus aliquet eget quis posuere amet id hac sit potenti. Id sem malesuada vitae dolor ut nibh morbi tempus sapien "),
                  createVNode("div", { class: "service-card-buttons" }, [
                    createVNode(MButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Записаться на приём")
                      ]),
                      _: 1
                    }),
                    createVNode(MButtonOutline, null, {
                      default: withCtx(() => [
                        createTextVNode("Получить консультацию")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "service-card-right" }, [
                  createVNode("img", {
                    src: _imports_0$2,
                    alt: "",
                    class: "service-card-img"
                  }),
                  createVNode(CardSale)
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-service/SectionService.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const SectionService = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-cd3cd7bb"]]);
const _imports_0$1 = "/assets/photo-b0053034.png";
const CardOther_vue_vue_type_style_index_0_scoped_d167f012_lang = "";
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-other" }, _attrs))} data-v-d167f012><a class="card-other-link" href="#" data-v-d167f012></a><div class="card-other-photo-wrapper" data-v-d167f012><img${ssrRenderAttr("src", _imports_0$1)} class="card-other-photo" alt="" data-v-d167f012></div><h6 class="card-other-title" data-v-d167f012>Фотоомоложение</h6></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other/CardOther.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CardOther = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d167f012"]]);
const SectionOther_vue_vue_type_style_index_0_scoped_c18249b9_lang = "";
const _sfc_main$9 = {
  __name: "SectionOther",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-other" }, _attrs))} data-v-c18249b9>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-xl" data-v-c18249b9${_scopeId}>Другие услуги</h2>`);
          } else {
            return [
              createVNode("h2", { class: "h-xl" }, "Другие услуги")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SliderVariant1, { class: "section-other-swiper" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardOther, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardOther)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardOther, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardOther)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardOther, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardOther)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardOther, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardOther)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardOther, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardOther)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardOther)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardOther)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardOther)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardOther)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardOther)
                ]),
                _: 1
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other/SectionOther.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SectionOther = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c18249b9"]]);
const _sfc_main$8 = {
  __name: "MediaPostView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionAbout, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMediaInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionService, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOther, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRec, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOtherPublic, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionAbout),
              createVNode(SectionMediaInfo),
              createVNode(SectionService),
              createVNode(SectionOther),
              createVNode(SectionRec),
              createVNode(SectionFaq$1),
              createVNode(SectionOtherPublic)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/MediaPostView.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const dataPolicy1 = [
  {
    text: `1. Политика обработки персональных данных (далее – Политика)
            разработана в соответствии с Федеральным законом от 27.07.2006.
            №152-ФЗ «О персональных данных» (далее – ФЗ-152).`
  },
  {
    text: `1.2. Настоящая Политика определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «ФЭЙС КОНЦЕПТ» (далее – Оператор) с
            целью защиты прав и свобод человека и гражданина при обработке его
            персональных данных, в том числе защиты прав на неприкосновенность
            частной жизни, личную и семейную тайну. `
  },
  {
    text: `1.3. В Политике используются следующие основные понятия:`,
    listArray: [
      `автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;`,
      `блокирование персональных данных - временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);`,
      `информационная система персональных данных - совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;`,
      `обезличивание персональных данных - действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному субъекту персональных данных;`,
      `обработка персональных данных - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;`,
      `оператор - государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;`,
      `персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных);`,
      `предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;`,
      `распространение персональных данных - действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно- телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;`,
      `трансграничная передача персональных данных - передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;`,
      `уничтожение персональных данных - действия, в результате которых невозможно восстановить содержание персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.`
    ]
  },
  {
    text: `1.4. Компания обязана опубликовать или иным образом обеспечить неограниченный доступ к настоящей Политике обработки
          персональных данных в соответствии с ч. 2 ст. 18.1. ФЗ-152.`
  }
];
const dataPolicy2 = [
  { text: `2.1. Принципы обработки персональных данных.` },
  {
    text: `2.1.1. Обработка персональных данных у Оператора осуществляется на основе следующих принципов:`,
    listArray: [
      `законности и справедливой основы;`,
      `ограничения обработки персональных данных достижением конкретных, заранее определенных и законных целей;`,
      `недопущения обработки персональных данных, несовместимой с целями сбора персональных данных;`,
      `недопущения объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой; обработки только тех персональных данных, которые отвечают целям их обработки;`,
      `соответствия содержания и объема обрабатываемых персональных данных заявленным целям обработки; недопущения обработки персональных данных, избыточных по отношению к заявленным целям их обработки;`,
      `обеспечения точности, достаточности и актуальности персональных данных по отношению к целям обработки персональных данных;`,
      `уничтожения либо обезличивания персональных данных по достижении целей их обработки или в случае утраты необходимости в достижении этих целей, при невозможности устранения Оператором допущенных нарушений персональных данных, если иное не предусмотрено федеральным законом.`
    ]
  },
  { text: `2.2. Условия обработки персональных данных.` },
  {
    text: `2.2.1. Оператор производит обработку персональных данных при наличии хотя бы одного из следующих условий:`,
    listArray: [
      `обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных;`,
      `обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;`,
      `обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве;`,
      `обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;`,
      `обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;`,
      `осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее - общедоступные персональные данные);`,
      `осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.`
    ]
  },
  { text: `2.3. Конфиденциальность персональных данных.` },
  {
    text: `2.3.1. Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать
            третьим лицам и не распространять персональные данные без согласия субъекта персональных данных,
            если иное не предусмотрено федеральным законом.`
  },
  {
    text: `2.4. Общедоступные источники персональных данных.`
  },
  {
    text: `2.4.1. В целях информационного обеспечения у Оператора могут создаваться общедоступные источники персональных данных субъектов, в том числе справочники и адресные книги.`
  },
  {
    text: `2.4.2. В общедоступные источники персональных данных с письменного согласия субъекта могут включаться его фамилия, имя, отчество, дата и место рождения, должность, номера контактных телефонов, адрес электронной почты и иные персональные данные, сообщаемые субъектом персональных данных. Сведения о субъекте должны быть в любое время исключены из общедоступных источников персональных данных по требованию субъекта либо по решению суда или иных уполномоченных государственных органов.`
  },
  {
    text: `2.5. Специальные категории персональных данных.`
  },
  {
    text: `2.5.1. Обработка Оператором специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, допускается в случаях, если:`,
    listArray: [
      `субъект персональных данных дал согласие в письменной форме на обработку своих персональных данных;`,
      `персональные данные сделаны общедоступными субъектом персональных данных;`,
      `обработка персональных данных осуществляется в соответствии с законодательством о государственной социальной помощи, трудовым законодательством, законодательством Российской Федерации о пенсиях по государственному пенсионному обеспечению, о трудовых пенсиях;`,
      `обработка персональных данных необходима для защиты жизни, здоровья или иных жизненно важных интересов субъекта персональных данных либо жизни, здоровья или иных жизненно важных интересов других лиц и получение согласия субъекта персональных данных невозможно;`,
      `обработка персональных данных осуществляется в медико-профилактических целях, в целях установления медицинского диагноза, оказания медицинских и медико- социальных услуг при условии, что обработка персональных данных осуществляется лицом, профессионально занимающимся медицинской деятельностью и обязанным в соответствии с законодательством Российской Федерации сохранять врачебную тайну;`,
      `обработка персональных данных необходима для установления или осуществления прав субъекта персональных данных или третьих лиц, а равно и в связи с осуществлением правосудия;`,
      `обработка персональных данных осуществляется в соответствии с законодательством об обязательных видах страхования, со страховым законодательством. Обработка специальных категорий персональных данных должна быть незамедлительно прекращена, если устранены причины, вследствие которых осуществлялась их обработка, если иное не установлено федеральным законом.`
    ]
  },
  {
    text: `2.5.2. Обработка персональных данных о судимости может осуществляться Оператором исключительно в случаях и в порядке, которые определяются в соответствии с федеральными законами.`
  },
  {
    text: `2.6. Биометрические персональные данные.`
  },
  {
    text: `2.6.1. Сведения, которые характеризуют физиологические и биологические особенности человека, на основании которых можно установить его личность - биометрические персональные данные - могут обрабатываться Оператором только при наличии согласия в письменной форме субъекта.`
  },
  {
    text: `2.7. Поручение обработки персональных данных другому лицу.`
  },
  {
    text: `2.7.1. Оператор вправе поручить обработку персональных данных другому лицу с согласия субъекта персональных данных, если иное не предусмотрено федеральным законом, на основании заключаемого с этим лицом договора.`
  },
  {
    text: `2.7.2. Лицо, осуществляющее обработку персональных данных по поручению Оператора, обязано соблюдать принципы и правила обработки персональных данных, предусмотренные ФЗ-152.`
  },
  {
    text: `2.8. Трансграничная передача персональных данных.`
  },
  {
    text: `2.8.1. Оператор обязана убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается адекватная защита прав субъектов персональных данных, до начала осуществления такой передачи.`
  },
  {
    text: `2.8.2. Трансграничная передача персональных данных на территории иностранных государств, не обеспечивающих адекватной защиты прав субъектов персональных данных, может осуществляться в случаях:`,
    listArray: [
      `наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных;`,
      `исполнения договора, стороной которого является субъект персональных данных.`
    ]
  }
];
const dataPolicy3 = [
  {
    text: `3.1. Согласие субъекта персональных данных на обработку его персональных данных Субъект персональных данных принимает решение о предоставлении его персональных данных и дает согласие на их обработку свободно, своей волей и в своем интересе.`
  },
  {
    text: `3.2. Согласие на обработку персональных данных может быть дано субъектом персональных данных или его представителем в любой позволяющей подтвердить факт его получения форме, если иное не установлено федеральным законом. Обязанность предоставить доказательство получения согласия субъекта персональных данных на обработку его персональных данных или доказательство наличия оснований, указанных в ФЗ-152, возлагается на Оператора.`
  },
  {
    text: `3.3. Права субъекта персональных данных.`
  },
  {
    text: `3.3.1. Субъект персональных данных имеет право на получение у Оператора информации, касающейся обработки его персональных данных, если такое право не ограничено в соответствии с федеральными законами.`
  },
  {
    text: `3.3.2. Субъект персональных данных вправе требовать от Оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.`
  },
  {
    text: `3.3.3. Обработка персональных данных в целях продвижения товаров, работ, услуг на рынке путем осуществления прямых контактов с потенциальным потребителем с помощью средств связи, а также в целях политической агитации допускается только при условии предварительного согласия субъекта персональных данных. Указанная обработка персональных данных признается осуществляемой без предварительного согласия субъекта персональных данных, если Компания не докажет, что такое согласие было получено.`
  },
  {
    text: `3.3.4. Оператор обязан немедленно прекратить по требованию субъекта персональных данных обработку его персональных данных в вышеуказанных целях.`
  },
  {
    text: `3.3.5. Запрещается принятие на основании исключительно автоматизированной обработки персональных данных решений, порождающих юридические последствия в отношении субъекта персональных данных или иным образом затрагивающих его права и законные интересы, за исключением случаев, предусмотренных федеральными законами, или при наличии согласия в письменной форме субъекта персональных данных.`
  },
  {
    text: `3.3.6. Если субъект персональных данных считает, что Оператор осуществляет обработку его персональных данных с нарушением требований ФЗ-152 или иным образом нарушает его права и свободы, субъект персональных данных вправе обжаловать действия или бездействие Оператора в Уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке.`
  },
  {
    text: `3.3.7. Субъект персональных данных имеет право на защиту своих прав и законных интересов, в том числе на возмещение убытков и (или) компенсацию морального вреда в судебном порядке.`
  }
];
const dataPolicy4 = [
  {
    text: `4.1. Безопасность персональных данных, обрабатываемых Оператора, обеспечивается реализацией правовых, организационных и технических мер, необходимых для обеспечения требований федерального законодательства в области защиты персональных данных.`
  },
  {
    text: `4.2. Для предотвращения несанкционированного доступа к персональным данным Оператором применяются следующие организационно-технические меры:`,
    listArray: [
      `назначение должностных лиц, ответственных за организацию обработки и защиты персональных данных;`,
      `ограничение состава лиц, имеющих доступ к персональным данным;`,
      `ознакомление субъектов с требованиями федерального законодательства и нормативных документов Оператора по обработке и защите персональных данных;`,
      `организация учета, хранения и обращения носителей информации;`,
      `определение угроз безопасности персональных данных при их обработке, формирование на их основе моделей угроз;`,
      `разработка на основе модели угроз системы защиты персональных данных;`,
      `проверка готовности и эффективности использования средств защиты информации;`,
      `разграничение доступа пользователей к информационным ресурсам и программно- аппаратным средствам обработки информации;`,
      `регистрация и учет действий пользователей информационных систем персональных данных;`,
      `использование антивирусных средств и средств восстановления системы защиты персональных данных;`,
      `применение в необходимых случаях средств межсетевого экранирования, обнаружения вторжений, анализа защищенности и средств криптографической защиты информации;`,
      `организация пропускного режима на территорию Оператора, охраны помещений с техническими средствами обработки персональных данных.`
    ]
  }
];
const dataPolicy5 = [
  {
    text: `5.1. Иные права и обязанности Оператора, как оператора персональных данных определяются законодательством Российской Федерации в области персональных данных.`
  },
  {
    text: `5.2. Должностные лица Оператора, виновные в нарушении норм, регулирующих обработку и защиту персональных данных, несут материальную, дисциплинарную, административную, гражданско-правовую или уголовную ответственность в порядке, установленном федеральными законами.`
  }
];
const _sfc_main$7 = {
  __name: "PolicyItem",
  __ssrInlineRender: true,
  props: ["text", "listArray"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-sm">${ssrInterpolate(props.text)}</p>`);
      if (!!__props.listArray) {
        _push(`<ul><!--[-->`);
        ssrRenderList(__props.listArray, (item) => {
          _push(`<li class="text-sm">${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/policy/PolicyItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SectionPolicy_vue_vue_type_style_index_0_scoped_02c3572f_lang = "";
const _sfc_main$6 = {
  __name: "SectionPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-policy" }, _attrs))} data-v-02c3572f>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="h-xxl policy-title" data-v-02c3572f${_scopeId}>ПОЛИТИКА ООО «ФЭЙС КОНЦЕПТ»</h1><h2 class="h-sm-ultra policy-subtitle" data-v-02c3572f${_scopeId}> В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ </h2><h3 class="h-sm-ultra policy-heading" data-v-02c3572f${_scopeId}>1. ОБЩИЕ ПОЛОЖЕНИЯ</h3><!--[-->`);
            ssrRenderList(unref(dataPolicy1), (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                text: item.text,
                key: item.text,
                listArray: item.listArray
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><h3 class="h-sm-ultra policy-heading" data-v-02c3572f${_scopeId}> 2. ПРИНЦИПЫ И УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3><!--[-->`);
            ssrRenderList(unref(dataPolicy2), (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                text: item.text,
                key: item.text,
                listArray: item.listArray
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><h3 class="h-sm-ultra policy-heading" data-v-02c3572f${_scopeId}> 3. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ </h3><!--[-->`);
            ssrRenderList(unref(dataPolicy3), (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                text: item.text,
                key: item.text,
                listArray: item.listArray
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><h3 class="h-sm-ultra policy-heading" data-v-02c3572f${_scopeId}> 4. ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ </h3><!--[-->`);
            ssrRenderList(unref(dataPolicy4), (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                text: item.text,
                key: item.text,
                listArray: item.listArray
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><h3 class="h-sm-ultra policy-heading" data-v-02c3572f${_scopeId}>5. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3><!--[-->`);
            ssrRenderList(unref(dataPolicy5), (item) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                text: item.text,
                key: item.text,
                listArray: item.listArray
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("h1", { class: "h-xxl policy-title" }, "ПОЛИТИКА ООО «ФЭЙС КОНЦЕПТ»"),
              createVNode("h2", { class: "h-sm-ultra policy-subtitle" }, " В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ "),
              createVNode("h3", { class: "h-sm-ultra policy-heading" }, "1. ОБЩИЕ ПОЛОЖЕНИЯ"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataPolicy1), (item) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  text: item.text,
                  key: item.text,
                  listArray: item.listArray
                }, null, 8, ["text", "listArray"]);
              }), 128)),
              createVNode("h3", { class: "h-sm-ultra policy-heading" }, " 2. ПРИНЦИПЫ И УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ "),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataPolicy2), (item) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  text: item.text,
                  key: item.text,
                  listArray: item.listArray
                }, null, 8, ["text", "listArray"]);
              }), 128)),
              createVNode("h3", { class: "h-sm-ultra policy-heading" }, " 3. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ "),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataPolicy3), (item) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  text: item.text,
                  key: item.text,
                  listArray: item.listArray
                }, null, 8, ["text", "listArray"]);
              }), 128)),
              createVNode("h3", { class: "h-sm-ultra policy-heading" }, " 4. ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ "),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataPolicy4), (item) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  text: item.text,
                  key: item.text,
                  listArray: item.listArray
                }, null, 8, ["text", "listArray"]);
              }), 128)),
              createVNode("h3", { class: "h-sm-ultra policy-heading" }, "5. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(dataPolicy5), (item) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  text: item.text,
                  key: item.text,
                  listArray: item.listArray
                }, null, 8, ["text", "listArray"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/policy/SectionPolicy.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SectionPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-02c3572f"]]);
const _sfc_main$5 = {
  __name: "PolicyView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionPolicy, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionPolicy)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PolicyView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionConcepts_vue_vue_type_style_index_0_scoped_45c892da_lang = "";
const _sfc_main$4 = {
  __name: "SectionConcepts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-45c892da>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="h-xxl concepts-title" data-v-45c892da${_scopeId}>Концепты</h1><p class="text-sm concepts-text" data-v-45c892da${_scopeId}> Мы разработали новый продукт в косметологии — 8 концептов твоей красоты </p><div class="cards" data-v-45c892da${_scopeId}><!--[-->`);
            ssrRenderList(unref(dataSlides), (item, index) => {
              _push2(ssrRenderComponent(CustomSliderCardTemplate, {
                key: index,
                title: item.title,
                subtitle: item.subtitle,
                "badge-name": item.badgeName,
                "badge-color": item.badgeColor,
                "badge-number": item.badgeNumber,
                p1: item.p1,
                p2: item.p2,
                iconSrc: item.iconSrc,
                iconBigSrc: item.iconBigSrc,
                iconPng: item.iconPng,
                link: item.link
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h1", { class: "h-xxl concepts-title" }, "Концепты"),
              createVNode("p", { class: "text-sm concepts-text" }, " Мы разработали новый продукт в косметологии — 8 концептов твоей красоты "),
              createVNode("div", { class: "cards" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(dataSlides), (item, index) => {
                  return openBlock(), createBlock(CustomSliderCardTemplate, {
                    key: index,
                    title: item.title,
                    subtitle: item.subtitle,
                    "badge-name": item.badgeName,
                    "badge-color": item.badgeColor,
                    "badge-number": item.badgeNumber,
                    p1: item.p1,
                    p2: item.p2,
                    iconSrc: item.iconSrc,
                    iconBigSrc: item.iconBigSrc,
                    iconPng: item.iconPng,
                    link: item.link
                  }, null, 8, ["title", "subtitle", "badge-name", "badge-color", "badge-number", "p1", "p2", "iconSrc", "iconBigSrc", "iconPng", "link"]);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/SectionConcepts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionConcepts = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-45c892da"]]);
const _sfc_main$3 = {
  __name: "ConceptsView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionConcepts, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionConcepts)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ConceptsView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "/assets/bg-place-b64ad106.png";
const _imports_1 = "/assets/shadow-cb5e42cd.png";
const _imports_2 = "/assets/head-f342d2ea.png";
const _imports_3 = "/assets/head1-e7d04982.png";
const _imports_4 = "/assets/head2-85eff865.png";
const _imports_5 = "/assets/head3-08361214.png";
const _imports_6 = "/assets/head4-73a27a76.png";
const _imports_7 = "/assets/head_hydro-0ea2fcd0.png";
const _imports_8 = "/assets/head6-0b716971.png";
const _imports_9 = "/assets/head7-fd3694db.png";
const ConceptPicture1_vue_vue_type_style_index_0_scoped_8199fc4c_lang = "";
const _sfc_main$2 = {
  __name: "ConceptPicture1",
  __ssrInlineRender: true,
  setup(__props) {
    const currentNumberConcept = ref("");
    const router2 = useRouter();
    currentNumberConcept.value = router2.currentRoute.value.path.split("/")[2];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture-wrapper" }, _attrs))} data-v-8199fc4c><img${ssrRenderAttr("src", _imports_0)} alt="" class="picture-img-bg" data-v-8199fc4c><img${ssrRenderAttr("src", _imports_1)} alt="shadow" class="picture-img-bg-shadow" data-v-8199fc4c><div class="picture-img-head-wrapper" data-v-8199fc4c>`);
      if (currentNumberConcept.value == "antiacne") {
        _push(`<img${ssrRenderAttr("src", _imports_2)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "clear") {
        _push(`<img${ssrRenderAttr("src", _imports_3)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "detox") {
        _push(`<img${ssrRenderAttr("src", _imports_4)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "lifting") {
        _push(`<img${ssrRenderAttr("src", _imports_5)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "bright") {
        _push(`<img${ssrRenderAttr("src", _imports_6)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "hydro") {
        _push(`<img${ssrRenderAttr("src", _imports_7)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "red") {
        _push(`<img${ssrRenderAttr("src", _imports_8)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      if (currentNumberConcept.value == "personal") {
        _push(`<img${ssrRenderAttr("src", _imports_9)} alt="" data-v-8199fc4c>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/concept/concept-pictures/ConceptPicture1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ConceptPicture1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8199fc4c"]]);
const SectionConceptMain_vue_vue_type_style_index_0_scoped_d26a45fd_lang = "";
const _sfc_main$1 = {
  __name: "SectionConceptMain",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-concept-main" }, _attrs))} data-v-d26a45fd>`);
      _push(ssrRenderComponent(MContainer, null, null, _parent));
      _push(`<div class="container-custom" data-v-d26a45fd>`);
      _push(ssrRenderComponent(ConceptPicture1, { class: "concept-picture" }, null, _parent));
      _push(`<div class="content-info" data-v-d26a45fd><h2 class="h-xxxl" data-v-d26a45fd>${ssrInterpolate(props.title)}</h2></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/concept/section-concept-main/SectionConceptMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionConceptMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d26a45fd"]]);
const conceptsInfo = {
  personal: {
    concept: "personal",
    number: 0,
    title: "Разработаем персональный план по улучшению твоей кожи",
    pluses: [
      "Сертифицированные косметологи и врачи со стажем от 10 лет",
      "Парк лицензированной аппаратной косметологии",
      "Своё закрытое сообщество, где делимся секретами молодости"
    ],
    info: {
      title: "Только эффективные методики омоложения и ухода за лицом в центре косметологии Face Concept",
      text1: "Заботимся о долгосрочном здоровье твоей кожи, применяя аппаратные методики для лечения розацеа, купероза и удаления сосудистых звездочек на лице. После курса процедур ты забудешь о неоднородном красном цвете лица, покраснениях после мороза и расширенных сосудах.",
      text2: "Помимо аппаратной косметологии, мы применяем инъекционные методики, направленные на быстрое и эффективное решение проблем. Все процедуры работают в комплексе, что дает быстрый результат, который сохраняется надолго."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит с комфортом и заботой о тебе. Твоя кожа станет молодой и здоровой за счет активации в клетках восстановительных процессов, улучшения обмена веществ, а также действия препаратов, насыщающих клетки полезными веществами. Результаты заметны уже после первого посещения.",
      text3: "Твоя кожа станет молодой и здоровой за счет активации в клетках восстановительных процессов, улучшения обмена веществ, а также действия препаратов, насыщающих клетки полезными веществами.",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Personal Concept",
      text: "Его задача — разработка индивидуального плана улучшения твоей кожи с помощью инъекций и уходовых процедур."
    },
    faq: [
      {
        title: "Сколько стоит биоревитализация кожи лица?",
        text: "Цены за за 1 процедуру биоревитализации в нашем центре косметологии начинаются от 8000 рублей. Итоговая стоимость курса зависит от количества сеансов, выбранного препарата, состояния кожных покровов."
      },
      {
        title: "Как проводится процедура биоревитализации?",
        text: `В зависимости от показаний врач-косметолог назначает курс от двух до шести процедур, которые включают в себя несколько этапов:

							1) Очищение кожи.
							2) Обработка зоны воздействия антисептиком.
							3) Введение препарата.
							4) Обработка лица антисептиком после инъекций.

							Сеанс длится до 40 минут. Результаты будут заметны уже после первого посещения.
						`
      },
      {
        title: "Сочетается ли биоревитализация с другими процедурами?",
        text: `
				Смысл подхода Personal Concept как раз таки и состоит в сочетании процедур. Курс включает процедуры биоревитализации, введение филлеров, пилинги, чистку лица, фотодинамическую терапию.

				Эти методики сочетаются друг с другом и в комплексе дают потрясающий эффект. Инъекции дают быстрый результат, а аппаратные методики помогают очистить кожу, а также закрепить полученный от инъекций эффект. Виды процедур, их количество и очередность врач назначает после проведения диагностики.
				
				`
      },
      {
        title: "Какие проблемы можно решить уколами красоты?",
        text: `
					Инъекционные методики направлены на решение разных задач:

					- восполнение недостатка гиалуроновой кислоты;
					- разглаживание морщин;
					- придание дополнительного объема отдельным зонам лица;
					- коррекция асимметрии;
					- выравнивание цвета кожи.
					
					У  нас работают специалисты с медицинским образованием. Наш главный врач — врач-косметолог с 19-летним опытом в косметологии и инъекционном омоложении. Обратившись к нам, ты попадешь в заботливые руки опытных, вежливых и аккуратных специалистов, которые подберут индивидуальный план лечения и возвращения молодости твоей коже.
				`
      },
      {
        title: "Биоревитализация для лица — что это за процедура?",
        text: `Биоревитализация — это инъекционная методика введения в глубокие слои кожи препаратов на основе гиалуроновой кислоты. Гиалуронка удерживает в клетках влагу, обеспечивая увлажнение. Под влиянием препарата улучшается обмен веществ, запускается синтез коллагена и эластина. В результате кожа подтягивается, становится свежей и увлажненной.`
      }
    ]
  },
  // red
  red: {
    concept: "red",
    number: 1,
    title: "Вылечим купероз, розацеа, избавим от покраснений на лице",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "Аппаратная косметология для лечения сосудистых патологий на лице",
      text1: "Заботимся о долгосрочном здоровье твоей кожи, применяя аппаратные методики для лечения розацеа, купероза и удаления сосудистых звездочек на лице. После курса процедур ты забудешь о неоднородном красном цвете лица, покраснениях после мороза и расширенных сосудах.",
      text2: "Все воздействия проводятся безболезненно и не требуют реабилитации."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Снимаем воспаление, укрепляем сосуды и восстанавливаем кровообращение в коже. Поможем тебе надолго забыть о сосудистых звездочках и покраснениях!",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Red Concept",
      text: "Его задача — лечение розацеа и купероза, устранение видимых покраснений на лице."
    },
    faq: [
      {
        title: "Как происходит удаление сосудистых звездочек на лице?",
        text: `
				В нашем центре косметологии лечение купероза и розацеа проводится аппаратными методами:

				- фотодинамическая терапия — воздействие излучением определенного спектра;
				- доставка лечебных препаратов тончайшей струей в дерму и эпидермис;
				- микротоковая терапия.
				
				Все эти процедуры бережно воздействуют на твою кожу, укрепляют сосуды, улучшают структуру кожных покровов, запускают в клетках естественные восстановительные процессы.
				В лечении сосудистых патологий помогают насыщение кожи гиалуроновой кислотой, лимфодренажные процедуры, отшелушивание. Комплексный подход позволяет не только избавится от проблем с сосудами, но и оказывает общий оздоравливающий и омолаживающий эффект.
				`
      },
      {
        title: "Есть ли противопоказания к удалению капилляров на лице?",
        text: `Процедуры не проводятся при наличии острых воспалительных процессов на лице, при аллергиях, наличии некоторых хронических заболеваний, а также во время беременности и грудного вскармливания. На первом приеме врач обязательно спросит вас о состоянии здоровья и только потом назначит курс.`
      },
      {
        title: "Сколько стоит удаление сосудистых звездочек?",
        text: `Цены на удаление сосудистых звездочек на лице в Москве в центре косметологии Face Concept начинаются от 4000 рублей за одну процедуру. Итоговая стоимость курса лечения зависит от количества сеансов и состояния твоей кожи.`
      },
      {
        title: "Как быстро восстановится кожа после лечения?",
        text: `После аппаратных процедур твоя кожа не нуждается в восстановлении! Помимо этого, процедуры в рамках подхода Red Concept помогают быстрее восстановиться после агрессивного воздействия на кожные покровы и некоторых видов пилинга.`
      },
      {
        title: "Сколько времени нужно, чтобы убрать сосудистые звездочки на лице?",
        text: `Ты заметишь результат уже после первого посещения. Итоговое количество сеансов назначает врач после диагностики. Обычно, чем больше выражена проблема, тем больше времени понадобится на ее устранение.`
      },
      {
        title: "С какими сосудистыми проблемами справляется аппаратная косметология?",
        text: `
					Аппаратные методики позволяют полностью избавиться от:

					- розацеа;
					- купероза;
					- единичных расширенных сосудов на щеках;
					- покраснений после мороза;
					- воспалений.
					
					В результате цвет лица становится здоровым и ровным даже без использования тонального крема!
				`
      }
    ]
  },
  // hydro
  hydro: {
    concept: "hydro",
    number: 2,
    title: "Увлажняем твою кожу, устраняя сухость, стягивание и дискомфорт",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "Аппаратная косметология для увлажнения твоей кожи",
      text1: "Аппаратные процедуры по увлажнению лица улучшают состояние кожи на клеточном уровне. Мы эффективно решаем проблемы стянутости и шелушения кожи, убираем сухость после загара или в отопительный сезон. В результате процедур даже самая тонкая и обезвоженная кожа становится здоровой и увлажненной. Все воздействия проводятся бережно и направлены на долгосрочный результат."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Мы насыщаем кожу увлажняющими веществами и активируем синтез гиалуроновой кислоты для собственного увлажнения. Клетки кожи начинают работать, а ощущение сухости, шелушения и обезвоживания исчезает!",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Hydro Concept",
      text: "Его задача — увлажнение твоей кожи, устранение стягивания, сухости, профилактика старения."
    },
    faq: [
      {
        title: "Сколько стоят увлажняющие процедуры для лица у косметолога?",
        text: `Цены на процедуры для увлажнения лица в центре косметологии Face Concept начинаются от 4000 рублей. Итоговая стоимость курса увлажнения зависит от количества сеансов, состояния кожи и целей, которые ты хочешь достичь.`
      },
      {
        title: "Зимой сильно шелушится кожа, как ее увлажнить?",
        text: `Зимой лицо часто начинает шелушиться из-за отопления, морозного воздуха, ветра. У нас есть комплекс процедур, подобранных специально для холодного времени года. Мы не просто увлажняем кожу, мы насыщаем ее питательными компонентами так, чтобы эффект сохранялся как можно дольше. Если зимой появляется сухость, приходи, мы решим эту проблему.`
      },
      {
        title: "Можно ли увлажнить лицо в домашних условиях?",
        text: `Всё зависит от того, насколько сильно выражена проблема. Если тебе не удается избавиться от сухости привычными средствами дома, попробуй аппаратные процедуры для увлажнения кожи лица. Косметолог использует специальные насадки, которые доставляют увлажняющие препараты прямо в поры, питая кожу изнутри. Воздействие происходит не только на поверхности, но и внутри клеток. В результате клетки начинают работать, в них запускается синтез гиалуроновой кислоты, а твоя кожа становится увлажненной, сияющей и более молодой.`
      },
      {
        title: "Через сколько будет виден результат?",
        text: `Уже после первого посещения ты заметишь разницу в состоянии лица до и после. Для закрепления результата мы рекомендуем пройти курс процедур.`
      },
      {
        title: "С какими проблемами справляется аппаратное увлажнение лица?",
        text: `
					Любая кожа периодически нуждается в питании и увлажнении, а особенно склонная к сухости. Увлажняющие процедуры и безинъекционная биоревитализация помогают справиться с:
					
					- шелушением после загара;
					- сухостью и стянутостью во время отопительного сезона;
					- мелкой сеточкой морщин;
					- тусклым и серым оттенком лица;
					- повышенной чувствительностью на холод, воду, внешние факторы.
					
					Увлажнение можно проводить в любое время года.
				`
      },
      {
        title: "Есть ли противопоказания для процедур по увлажнению кожи у косметолога?",
        text: `Аппаратная косметология имеет минимум противопоказаний и подходит для кожи любого типа. Процедуры не проводятся, если на лице есть сильные воспаления или герпес, если ты себя плохо чувствуешь, а также если у тебя имеется ряд заболеваний. Врач обязательно задаст вопросы о твоем здоровье во время диагностики, после чего назначит курс процедур, которые тебе точно подойдут и не причинят вреда.`
      }
    ]
  },
  // bright
  bright: {
    concept: "bright",
    number: 3,
    title: "Убираем пигментные пятна, сделаем твою кожу молодой и сияющей",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости "
    ],
    info: {
      title: "Выравниваем цвет лица и убираем пигментные пятна аппаратными процедурами",
      text1: "Подберем для тебя комплекс процедур, который избавит от веснушек, возрастной пигментации, застойных пятен от воспалений и акне. В своей работе мы применяем аппаратное отбеливание кожи лица, куда входят бесконтактные пилинги, лечение сыворотками и препаратами, микротоковая терапия.",
      text2: "В результате твоя кожа обретает равномерный цвет, начинает сиять изнутри и становится моложе."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Используем специальные составы, которые убирают накопленный пигмент и снижают выработку меланина. Твоя кожа будет выглядеть сияющей и здоровой!",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Bright Concept",
      text: "Его задача — бережное осветление кожи, уменьшение пигментации, придание коже сияния."
    },
    faq: [
      {
        title: "Как осветлить пигментные пятна на лице?",
        text: `
				В аппаратной косметологии отбеливающий эффект достигается за счет:

				- глубокой очистки, отшелушивания, пилинга для осветления кожи;
				- безинъекционного введения в кожу препаратов и сывороток;
				- ультразвука;
				- микротоков.

				Эти способы позволяют убрать пигментные пятна, осветлить кожу вокруг глаз, избавиться от потемнений, вызванных воспалительными процессами.
				
				Чтобы узнать, какая аппаратная процедура подойдет именно тебе, приходи на диагностику.
				`
      },
      {
        title: "Сколько стоит отбеливание кожи лица?",
        text: `Цены на отбеливание кожи лица в в центре косметологии Face Concept начинаются от 5000 рублей.`
      },
      {
        title: "Как проводится процедура отбеливания кожи?",
        text: `
				Любая процедура начинается с консультации врача-дерматовенеролога. Врач проводит диагностику, определяет природу пигментации и только после этого назначает комплекс процедур.
				
				Если противопоказаний нет, отбеливание можно проводить в этот же день. В зависимости от показаний врач может назначить процедуру лазерного осветления кожи, пилинг, ультразвук либо микротоки.
				
				Аппаратные процедуры проводятся бережно, безболезненно и длятся не более часа. После сеанса можно возвращаться к привычному образу жизни, реабилитация не нужна. Единственное требование — исключить загар в течение двух недель, либо пользоваться солнцезащитными средствами.
				
				Эффект будет заметен уже после первого посещения — цвет пятен станет менее выраженным. Чтобы полностью убрать пигментацию врач назначит курс процедур.				
				`
      },
      {
        title: "Можно ли убрать пигментные пятна в домашних условиях?",
        text: `Избавиться от пигментации в домашних условиях помогут профессиональные средства, которые подбирает косметолог. Это долгий путь, который со временем приводит к уменьшению пигментации. Наиболее эффективный способ отбеливания кожи лица от пигментных пятен — это аппаратные косметологические процедуры, последующий уход и профилактика. В таком случае ты сможешь быстро и надолго забыть о проблеме.`
      },
      {
        title: "От каких пигментных пятен помогают аппаратные процедуры?",
        text: `
					Пигментные пятна возникают из-за усиленной выработки меланина. В одних случаях они появляются из-за ультрафиолета, в других — из-за гормональных изменений или генетики. Гиперпигментация также может появляться на месте следов от акне.
					
					Аппаратные процедуры эффективны для удаления возрастных пигментных пятен (лентиго), веснушек, а также потемнений, вызванных воспалениями и травмами. Процедуры направлены не только на осветление гиперпигментации, но и на выравнивание тона кожи, в результате чего лицо обретает сияющий и молодой внешний вид.
				`
      },
      {
        title: "Есть ли противопоказания для осветления кожи?",
        text: `
					Противопоказаний для аппаратных процедур не так много:

					- нарушение кожных покровов в зоне обработки;
					- беременность и период грудного вскармливания;
					- обострение заболеваний;
					- онкологические заболевания;
					- применение некоторых гормональных и лекарственных препаратов.
				
					На первом приеме врач проведет диагностику, задаст вопросы о состоянии твоего здоровья, затем примет решение о проведении процедур.
				`
      }
    ]
  },
  // lifting
  lifting: {
    concept: "lifting",
    number: 4,
    title: "Подтяжка овала лица без операций — знаем, как вернуть твоей коже молодость и красоту!",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "В нашем центре косметологии ты сможешь подтянуть лицо без хирургических вмешательств",
      text1: "Курс процедур по подтяжке лица подходит для тех, кто впервые столкнулся с признаками старения и тех, кто хочет убрать явные возрастные изменения.",
      text2: "Наш центр специализируется на аппаратной косметологии и имеет медицинскую лицензию. Для подтяжки овала лица и омоложения кожи мы используем бережные методики, которые запускают синтез коллагена, насыщают клетки питательными веществами, позволяя надолго продлить молодость."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Твоя кожа станет подтянутой за счет активации в клетках естественных восстановительных процессов и улучшения обмена веществ. Lifting Concept — это подтянутый овал лица и молодость без операций!",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Lifting Concept",
      text: "Его задача — профилактика старения, подтяжка овала лица, повышение плотности кожи, разглаживание морщин."
    },
    faq: [
      {
        title: "Сколько стоит подтяжка лица в Москве?",
        text: `Цены на процедуры по подтяжке лица в центре косметологии Face Concept начинаются от 4000 рублей. Итоговая стоимость курса омоложения зависит от количества процедур, твоих целей и состояния кожи.`
      },
      {
        title: "Фейслифтинг или аппаратная подтяжка?",
        text: `Фейслифтинг — это пластическая операция для подтяжки лица, которая проводится путем удаления излишков кожи и жировой ткани. Это быстрый и эффективный метод, который убирает явные признаки старения. Однако, фейслифтинг подразумевает хирургическое вмешательство и реабилитацию. В большинстве случаев подтянуть лицо можно аппаратными методами, не прибегая к операциям и инъекциям. Чтобы узнать, как сделать лицо моложе с помощью безопасных аппаратных процедур, приходи на диагностику.`
      },
      {
        title: "В чем принцип действия аппаратной подтяжки лица?",
        text: `
					Это безоперационное воздействие, которое запускает в клетках естественные восстановительные процессы, стимулирует синтез коллагена и выработку гиалуроновой кислоты, удаляет продукты обмена, оказывает лимфодренажный эффект.

					Эффект омоложения и подтяжки достигается при помощи:

					- ультразвука;
					- радиоволнового (RF) воздействия;
					- доставки полезных компонентов прямо в поры;
					- микротоков;
					- питания и увлажнения.

					Все эти методики могут применяться как по отдельности, так и в сочетании друг с другом. После диагностики врач-косметолог подберет для тебя индивидуальный курс процедур, направленных на поддержание молодости и красоты.
				`
      },
      {
        title: "Через сколько будет виден результат от процедур?",
        text: `Лифтинг-эффект виден уже после первого посещения, но для закрепления результата рекомендуется пройти курс. Косметолог подберет для тебя подходящие методы основных и поддерживающих процедур, которые помогут сохранить устойчивый результат до 1,5-2 лет.`
      },
      {
        title: "Больно ли делать аппаратную подтяжку кожи лица?",
        text: `В отличие от хирургического фейслифтинга для лица, аппаратные процедуры проходят безболезненно и не требуют реабилитации. Во время сеанса ты сможешь расслабиться и послушать в наушниках интересный контент. Ряд манипуляций может сопровождаться легким дискомфортом, но об этом тебя обязательно предупредит врач.`
      },
      {
        title: "Эффективна ли подтяжка лица без операции?",
        text: `
					Да, аппаратные процедуры могут стать полноценной, а главное безболезненной и безопасной альтернативой хирургическому вмешательству! 

					Показания к аппаратному лифтингу:

					- признаки птоза;
					- отечность;
					- дряблость кожи;
					- наличие второго подбородка, жировых отложений;
					- мимические морщины;
					- нечеткие контуры подбородка;
					- появление брылей;
					- стремительная потеря веса;
					- опущение верхних век;
					- возрастные морщины.
				`
      }
    ]
  },
  // detox
  detox: {
    concept: "detox",
    number: 5,
    title: "Избавим кожу от токсинов и загрязнений, наполним свежестью, здоровьем и сиянием",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "Аппаратные детокс процедуры для здоровья твоей кожи",
      text1: "Детокс-очищение кожи — это комплекс процедур, направленный на удаление вредных веществ из слоев кожи и восстановление обменных процессов. В результате твоя кожа становится бархатной, сияющей и упругой, уходит отечность, шелушение, исчезают мелкие морщинки. Комплекс детокс-процедур для лица не только возвращает красоту и ровный цвет твоей коже, но и становится отличной профилактикой старения."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Комплексный подход к здоровью кожи лица позволяет не только убрать проблемы, но и предотвратить их повторное появление.",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Detox Concept",
      text: "Его задача — детоксикация кожи, восстановление нормальной работы клеток и профилактика старения."
    },
    faq: [
      {
        title: "Детокс в косметологии — что это такое?",
        text: `
					Нарушение режима сна, стрессы, неправильное питание, воздействие пыли, грязи и выхлопных газов нарушают работу твоей кожи. Кроме того, с возрастом появляются поврежденные клетки, которые приводят к старению и воспалениям. В результате цвет лица становится тусклым, возникают шелушения, морщинки и появляются круги под глазами.

					Детокс — это процедуры, которые убирают нездоровые клетки, выводят все вредные вещества из кожи, восстанавливают обменные процессы, делают лицо сияющим и здоровым.
				
					В центре косметологии Face Concept детоксикация кожи лица проводится аппаратными методами — без инъекций, боли и восстановительного периода.
				`
      },
      {
        title: "От каких кожных проблем можно избавиться с помощью детокса?",
        text: `
					Твоя кожа нуждается в помощи, если лицо выглядит уставшим, появились круги под глазами, морщины и отеки, забились поры и стали часто появляться прыщи.

					Приходи на диагностику и врач подберет тебе курс лечения в рамках подхода Detox Concept. Ты заметишь эффект уже после первого посещения — цвет лица станет ровным, исчезнут отеки, появится ощущение свежести.
				`
      },
      {
        title: "Есть ли противопоказания к процедурам по детоксикации кожи?",
        text: `Преимущество аппаратных методик в том, что они подходят практически всем и почти не имеют противопоказаний. Процедуры нельзя проводить при обострении заболеваний, при герпесе и плохом самочувствии. Во время диагностики врач обязательно задаст вопросы о состоянии твоего здоровья, и только потом назначит курс лечения.`
      },
      {
        title: "Сколько стоит детокс для лица?",
        text: `Цены на отдельные процедуры Detox Concept начинаются от 4000 рублей.`
      },
      {
        title: "Помогает ли детокс от прыщей?",
        text: `Если причина прыщей — накопление в коже токсинов и загрязнений, то именно детокс поможет забыть об этой проблеме навсегда. Если тебя беспокоят прыщи, запишись на диагностику и получи индивидуальный план лечения.`
      },
      {
        title: "Через сколько будет виден результат от процедур?",
        text: `Эффект от процедур бывает моментальный и накопительный. Моментальный эффект — это видимые улучшения, которые наступают уже после первого сеанса. Такой эффект длится недолго и требует закрепления. Накопительный эффект — это долговременный результат курсового лечения, когда в клетках запускаются естественные процессы регенерации и обновления.`
      }
    ]
  },
  // clear
  clear: {
    concept: "clear",
    number: 5,
    title: "Сделаем твою кожу чистой и сияющей — без черных точек и расширенных пор!",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "В нашем центре косметологии ты забудешь о черных точках, жирности кожи и расширенных порах",
      text1: "Мы подготовили для тебя уникальную программу процедур, улучшающих состояние твоей кожи на клеточном уровне. В своей работе мы используем аппаратную чистку кожи лица, бесконтактный пилинг, насыщаем клетки кожи полезными веществами. Все эти методики проводятся бережно и безболезненно.",
      text2: "Если ты мечтаешь хорошо выглядеть без тонального крема, хочешь убрать жирный блеск и очистить забитые поры, приходи в Face Concept!"
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Больше никакого жирного блеска, черных точек и прыщей, которые приходилось постоянно скрывать!",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — Clear Concept",
      text: "Для очищения кожи, выравнивания рельефа, уменьшения жирности, сужения пор, лечения комедонов."
    },
    faq: [
      {
        title: "Какие проблемы решает косметологическая чистка лица?",
        text: `Профессиональная чистка лица у косметолога избавит тебя от черных точек, расширенных пор, угревой сыпи, а также вернет лицу сияние и свежесть. Улучшения появятся уже после первой процедуры, а пройдя курс, ты полностью избавишься от надоевшей тебе проблемы.`
      },
      {
        title: "Есть ли противопоказания для чистки лица аппаратными методами?",
        text: `Аппаратная косметология — это комплекс щадящих методов, практически не имеющих противопоказаний. Но, если ты плохо себя чувствуешь, у тебя обострились воспаления или появился герпес, процедуры проводить нельзя. Любой курс лечения начинается с диагностики, на которой врач задаст вопросы о здоровье и примет решение — делать процедуры сейчас или отложить на более подходящее время.`
      },
      {
        title: "Как проводится аппаратная чистка кожи лица?",
        text: `
					Наш авторский подход Clear Concept — это больше, чем просто чистка. Это курс процедур, разработанный специально для тебя, с учетом твоих индивидуальных особенностей и пожеланий. Подход включает не только очищение лица, но и процедуры для выравнивания рельефа кожи, ее питания и увлажнения. 

					Для очищения кожи используются технологии бесконтактного пилинга, аквапилинг и ультразвук. Для поддержания свежести, молодости и красоты применяются методики, которые насыщают кожу кислородом, улучшают ее цвет, запускают регенерацию, сужают поры и убирают жирный блеск.

					Приходи на диагностику, мы подробнее расскажем об аппаратных методиках и средствах для лечения и ухода.
				`
      },
      {
        title: "Можно ли эффективно очистить кожу в домашних условиях?",
        text: `
					Иногда при помощи обычных косметических средств можно провести поверхностную чистку, которая помогает при слабо выраженных дефектах. Если же тебе ничего не помогло, приходи к нам — мы знаем, как решить твою проблему.

					После терапии правильный домашний уход поможет предотвратить повторное появление кожных проблем. Врач посоветует профессиональные косметические средства для заботы о твоем лице.
				`
      },
      {
        title: "Сколько стоит чистка лица?",
        text: `Итоговая стоимость чистки лица складывается из цен на отдельные процедуры, подобранные индивидуально для тебя. Цены на услуги в нашем центре косметологии представлены в прайсе, они помогут тебе сориентироваться.`
      },
      {
        title: "Как быстро восстановится кожа лица?",
        text: `Аппаратные процедуры не требуют реабилитации, чего не скажешь об инъекциях, после которых остаются следы. Да, после сеанса может быть небольшое покраснение, но оно проходит буквально на следующий день. На приеме врач-косметолог оценит состояние твоего лица и подберет подходящую интенсивность воздействия.`
      }
    ]
  },
  // antiacne
  antiacne: {
    concept: "antiacne",
    number: 5,
    title: "Вылечим твою кожу и избавим от высыпаний на лице!",
    pluses: [
      "Врачи-косметологи и косметологи-эсетисты с медицинским образованием",
      "Лицензированное оборудование для аппаратной косметологии",
      "Свое закрытое сообщество, где мы делимся секретами молодости"
    ],
    info: {
      title: "В нашем центре косметологии ты вылечишь акне, избавишься от рубцов и улучшишь свою внешность",
      text1: "Если домашние средства от прыщей больше не помогают, ты чувствуешь стеснение и дискомфорт, тебе не нравится, как ты выглядишь или твоя работа связана с публичностью и необходимостью выглядеть идеально, приходи, мы исправим ситуацию!",
      text2: "Наш центр специализируется на аппаратной косметологии и имеет медицинскую лицензию. Для борьбы с акне мы используем бережные методики, которые улучшают состояние кожи на клеточном уровне."
    },
    info2: {
      text1: "Сделаем твое лицо безупречным с помощью аппаратной косметологии — применяем новейшее оборудование и инновационные методики. Лечение в нашем центре проходит без боли и дискомфорта.",
      text3: "Комплексный подход к терапии угревой сыпи позволяет не только убрать кожные проблемы, но и предотвратить их повторное появление.",
      text4: "Результаты заметны уже после первого посещения."
    },
    preview: {
      title: "Мы разработали продукт — AntiAcne Concept",
      text: "Для эффективного лечения акне первой, второй и третьей степени."
    },
    faq: [
      {
        title: "Можно ли вылечить акне в домашних условиях?",
        text: `Возможно, у тебя были самостоятельные попытки избавиться от угревой сыпи, которые не были эффективны. Зато было потрачено много времени и денег на скрабы, пенки, пилинги, кремы. На проблему надо смотреть глубже — в центре косметологии Face Concept ты пройдешь диагностику и получишь четкий план по лечению аппаратными методами. Лечение акне у косметолога дает устойчивый эффект, а изменения будут заметны уже после первого посещения.`
      },
      {
        title: "Есть ли противопоказания при лечении угревой сыпи?",
        text: `Аппаратная косметология практически не имеет противопоказаний. Да, есть состояния, когда процедуры лучше перенести на потом или использовать другие методы. Во время диагностики врач спросит тебя о состоянии здоровья и только после этого назначит курс процедур против акне.`
      },
      {
        title: "Можно ли навсегда вылечить акне?",
        text: `Чтобы кожные высыпания не появлялись снова, недостаточно один раз сходить к косметологу или использовать только средства для ухода. Важно подобрать курс терапии и придерживаться его. Мы можем долго рассказывать о пользе аппаратных методик, но лучше приходи, чтобы увидеть все своими глазами. Мы не будем навязывать лишнее — мы решим твою проблему, чтобы тебе забыть о ней навсегда.`
      },
      {
        title: "Каким способом можно избавиться от высыпаний на лице?",
        text: `После диагностики наши косметологи подбирают подходящие процедуры в рамках уникального подхода AntiAcne Concept — лечения заболевания акне 1, 2 и 3 степени. Это безболезненное воздействие на кожные покровы, после которого не нужна реабилитация. Также врач порекомендует профессиональные косметические средства для домашнего ухода.`
      },
      {
        title: "Сколько времени потребуется, чтобы вылечить угревую сыпь?",
        text: `Эффект будет заметен уже после первой процедуры. Но, чтобы полностью решить проблему, нужно посетить косметолога несколько раз. Курс лечения акне врач назначает на основании результатов диагностики.`
      },
      {
        title: "С чего начать лечение акне?",
        text: `Начни с диагностики. Всего несколько минут и ты увидишь состояние своей кожи и получишь четкий план, как избавиться от высыпаний на лице.`
      }
    ]
  }
};
const _sfc_main = {
  __name: "Concept1View",
  __ssrInlineRender: true,
  setup(__props) {
    const currentConcept = ref("");
    const router2 = useRouter();
    currentConcept.value = router2.currentRoute.value.path.split("/")[2];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(SectionConceptMain, {
              title: unref(conceptsInfo)[currentConcept.value].title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses$1, {
              text1: unref(conceptsInfo)[currentConcept.value].pluses[0],
              text2: unref(conceptsInfo)[currentConcept.value].pluses[1],
              text3: unref(conceptsInfo)[currentConcept.value].pluses[2]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionInfo, {
              title: (_a = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _a.title,
              text1: (_b = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _b.text1,
              text2: (_c = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _c.text2
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPreview, {
              title: unref(conceptsInfo)[currentConcept.value].preview.title,
              text: unref(conceptsInfo)[currentConcept.value].preview.text
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTech, {
              text1: unref(conceptsInfo)[currentConcept.value].info2.text1,
              text3: unref(conceptsInfo)[currentConcept.value].info2.text3,
              text4: unref(conceptsInfo)[currentConcept.value].info2.text4,
              textDisable2: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq$1, {
              items: unref(conceptsInfo)[currentConcept.value].faq
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionConceptMain, {
                title: unref(conceptsInfo)[currentConcept.value].title
              }, null, 8, ["title"]),
              createVNode(SectionPluses$1, {
                text1: unref(conceptsInfo)[currentConcept.value].pluses[0],
                text2: unref(conceptsInfo)[currentConcept.value].pluses[1],
                text3: unref(conceptsInfo)[currentConcept.value].pluses[2]
              }, null, 8, ["text1", "text2", "text3"]),
              createVNode(SectionInfo, {
                title: (_d = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _d.title,
                text1: (_e = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _e.text1,
                text2: (_f = unref(conceptsInfo)[currentConcept.value].info) == null ? void 0 : _f.text2
              }, null, 8, ["title", "text1", "text2"]),
              createVNode(SectionPreview, {
                title: unref(conceptsInfo)[currentConcept.value].preview.title,
                text: unref(conceptsInfo)[currentConcept.value].preview.text
              }, null, 8, ["title", "text"]),
              createVNode(SectionTech, {
                text1: unref(conceptsInfo)[currentConcept.value].info2.text1,
                text3: unref(conceptsInfo)[currentConcept.value].info2.text3,
                text4: unref(conceptsInfo)[currentConcept.value].info2.text4,
                textDisable2: true
              }, null, 8, ["text1", "text3", "text4"]),
              createVNode(SectionHelp),
              createVNode(SectionFaq$1, {
                items: unref(conceptsInfo)[currentConcept.value].faq
              }, null, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Concept1View.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/inside",
      name: "inside",
      component: InsideView
    },
    {
      path: "/procedures",
      name: "procedures",
      component: _sfc_main$1v
    },
    {
      path: "/tech",
      name: "tech",
      component: TechView
    },
    {
      path: "/prices",
      name: "prices",
      component: _sfc_main$1f
    },
    {
      path: "/nav",
      name: "nav",
      component: NavView
    },
    {
      path: "/devices",
      name: "devices",
      component: _sfc_main$1b
    },
    {
      path: "/media",
      name: "media",
      component: _sfc_main$15
    },
    {
      path: "/faq",
      name: "faq",
      component: _sfc_main$12
    },
    {
      path: "/masters",
      name: "masters",
      component: _sfc_main$10
    },
    {
      path: "/master",
      name: "master",
      component: _sfc_main$R
    },
    {
      path: "/review",
      name: "review",
      component: _sfc_main$O
    },
    {
      path: "/review-inside",
      name: "review-inside",
      component: _sfc_main$F
    },
    {
      path: "/about",
      name: "about",
      component: _sfc_main$x
    },
    {
      path: "/contacts",
      name: "contacts",
      component: _sfc_main$q
    },
    {
      path: "/branches",
      name: "branches",
      component: _sfc_main$l
    },
    {
      path: "/media/1",
      name: "media-post",
      component: _sfc_main$8
    },
    {
      path: "/policy",
      name: "policy",
      component: _sfc_main$5
    },
    {
      path: "/concepts",
      name: "concepts",
      component: _sfc_main$3
    },
    {
      path: "/concept/:id",
      name: "/concept/1",
      component: _sfc_main
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueYandexMetrika, {
  id: 96439362,
  router,
  env: "production"
});
app.mount("#app");
