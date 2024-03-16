import { useSSRContext, mergeProps, ref, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, reactive, unref, withModifiers, withDirectives, vModelText } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import { defineStore } from "pinia";
import emailjs from "emailjs-com";
const _sfc_main$u = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "30",
    viewBox: "0 0 32 30",
    fill: "none"
  }, _attrs))}><path d="M11.35 30C10.9389 30 10.5447 29.842 10.254 29.5607C9.9633 29.2794 9.8 28.8978 9.8 28.5V24H3.6C2.77783 24 1.98933 23.6839 1.40797 23.1213C0.826606 22.5587 0.5 21.7956 0.5 21V3C0.5 2.20435 0.826606 1.44129 1.40797 0.87868C1.98933 0.31607 2.77783 0 3.6 0H28.4C29.2222 0 30.0107 0.31607 30.592 0.87868C31.1734 1.44129 31.5 2.20435 31.5 3V21C31.5 21.7956 31.1734 22.5587 30.592 23.1213C30.0107 23.6839 29.2222 24 28.4 24H18.945L13.21 29.565C12.9 29.85 12.5125 30 12.125 30H11.35ZM12.9 21V25.62L17.674 21H28.4V3H3.6V21H12.9ZM6.7 7.5H25.3V10.5H6.7V7.5ZM6.7 13.5H20.65V16.5H6.7V13.5Z" fill="white"></path></svg>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconMessage.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const IconMessage = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$b]]);
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
const _sfc_main$t = {
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
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonFixed.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const ButtonFixed = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-791a2ffe"]]);
const MContainer_vue_vue_type_style_index_0_scoped_e92a5f25_lang = "";
const _sfc_main$s = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e92a5f25>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/MContainer.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const MContainer = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-e92a5f25"]]);
const _sfc_main$r = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "248",
    height: "39",
    viewBox: "0 0 248 39",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_24_12861)"><path d="M20.8545 30.3864C19.2504 29.4217 17.9253 28.1815 16.9489 26.5277C15.9726 24.874 15.4844 23.1514 15.4844 21.2221C15.4844 19.2928 15.9726 17.5701 16.9489 15.9164C17.9253 14.2627 19.1807 13.0224 20.8545 12.0578C22.4585 11.0931 24.2718 10.6797 26.2245 10.6797C28.1773 10.6797 29.9208 11.162 31.5946 12.0578C33.1987 13.0224 34.5237 14.2627 35.4304 15.9164C36.4068 17.5701 36.8252 19.2928 36.8252 21.2221V31.42H31.4551V29.2839C31.1762 29.973 30.4787 30.5242 29.5024 31.0754C28.4563 31.5578 27.4101 31.8334 26.2245 31.8334C24.2718 31.7645 22.5282 31.3511 20.8545 30.3864ZM30.0603 25.0808C31.0367 24.0472 31.5249 22.8069 31.5249 21.291C31.5249 19.7751 31.0367 18.4659 30.0603 17.5012C29.0839 16.4677 27.8286 15.9853 26.2943 15.9853C24.76 15.9853 23.5046 16.4677 22.4585 17.5012C21.4124 18.5348 20.9242 19.7751 20.9242 21.291C20.9242 22.8069 21.4124 24.1161 22.4585 25.0808C23.5046 26.1143 24.76 26.5966 26.2943 26.5966C27.7588 26.5966 29.0142 26.1143 30.0603 25.0808Z" fill="#AE8C8E"></path><path d="M44.4253 30.3864C42.7515 29.4217 41.4962 28.1815 40.5198 26.5277C39.5434 24.874 39.125 23.1514 39.125 21.2221C39.125 19.2928 39.6132 17.5701 40.5198 15.9164C41.4962 14.2627 42.7515 13.0224 44.4253 12.0578C46.0991 11.0931 47.8427 10.6797 49.7954 10.6797C52.2364 10.6797 54.3983 11.3687 56.2814 12.8157C58.1644 14.2627 59.4197 16.0542 60.0474 18.3281H54.3983C53.9102 17.5701 53.2825 16.95 52.5153 16.5366C51.7482 16.1232 50.8415 15.8475 49.8652 15.8475C48.3309 15.8475 47.0755 16.3299 46.0294 17.3634C44.9833 18.397 44.4951 19.6373 44.4951 21.1532C44.4951 22.6691 44.9833 23.9783 46.0294 25.0118C47.0755 26.0454 48.3309 26.5277 49.8652 26.5277C50.7718 26.5277 51.6087 26.321 52.3758 25.9076C53.143 25.4942 53.7707 24.9429 54.2589 24.2539H60.1171C59.4895 26.4588 58.1644 28.2504 56.2814 29.6285C54.3983 31.0065 52.2364 31.6956 49.8652 31.6956C47.9124 31.7645 46.0991 31.3511 44.4253 30.3864Z" fill="#AE8C8E"></path><path d="M232.031 25.5636V31.4205L232.519 31.3516C236.425 30.8004 239.982 28.9399 242.771 26.1837C245.352 23.5654 247.095 20.258 247.723 16.7438C247.723 16.5371 247.793 16.3304 247.793 16.1926C247.863 15.7792 247.932 15.2968 247.932 14.8145V0H241.795V10.129H234.96V15.0901H241.795C241.446 18.3975 239.703 21.4982 236.983 23.4276C235.588 24.4611 233.984 25.1502 232.31 25.4947L232.031 25.5636Z" fill="#AE8C8E"></path><path d="M100.707 29.7653C99.0328 28.8006 97.7775 27.5604 96.8011 25.9066C95.8247 24.2529 95.4062 22.5303 95.4062 20.601C95.4062 18.6717 95.8944 16.9491 96.8011 15.2953C97.7775 13.6416 99.0328 12.4014 100.707 11.4367C102.38 10.472 104.124 10.0586 106.077 10.0586C108.518 10.0586 110.68 10.7476 112.563 12.1946C114.446 13.6416 115.701 15.4332 116.329 17.707H110.61C110.122 16.9491 109.494 16.3289 108.727 15.9155C107.96 15.5021 107.053 15.2264 106.077 15.2264C104.542 15.2264 103.287 15.7088 102.241 16.7423C101.195 17.7759 100.707 19.0162 100.707 20.5321C100.707 22.048 101.195 23.3572 102.241 24.3908C103.287 25.4243 104.542 25.9066 106.077 25.9066C106.983 25.9066 107.82 25.6999 108.587 25.2865C109.355 24.8731 109.982 24.3218 110.47 23.6328H116.329C115.631 25.8377 114.376 27.6293 112.493 29.0074C110.61 30.3854 108.448 31.0745 106.077 31.0745C104.124 31.1434 102.311 30.6611 100.707 29.7653Z" fill="#AE8C8E"></path><path d="M134.392 11.5066C136.066 12.4713 137.321 13.7116 138.298 15.3653C139.274 17.019 139.692 18.7416 139.692 20.6709C139.692 22.6003 139.204 24.3229 138.298 25.9766C137.321 27.6303 136.066 28.8706 134.392 29.8353C132.718 30.7999 130.975 31.2134 129.022 31.2134C127.069 31.2134 125.326 30.731 123.652 29.8353C121.978 28.8706 120.723 27.6303 119.746 25.9766C118.77 24.3229 118.352 22.6003 118.352 20.6709C118.352 18.7416 118.84 17.019 119.746 15.3653C120.723 13.7116 121.978 12.4713 123.652 11.5066C125.326 10.542 127.069 10.1285 129.022 10.1285C130.975 10.0596 132.788 10.542 134.392 11.5066ZM125.326 16.8123C124.28 17.8459 123.791 19.0861 123.791 20.6709C123.791 22.1869 124.28 23.496 125.326 24.4607C126.372 25.4943 127.627 25.9766 129.161 25.9766C130.696 25.9766 131.951 25.4943 132.927 24.4607C133.904 23.4271 134.392 22.1869 134.392 20.6709C134.392 19.155 133.904 17.8459 132.927 16.8123C131.951 15.7787 130.696 15.2964 129.161 15.2964C127.627 15.2964 126.302 15.7787 125.326 16.8123Z" fill="#AE8C8E"></path><path d="M160.268 30.8703H154.828V20.0523C154.828 18.3985 154.549 17.1583 153.921 16.4003C153.294 15.6424 152.387 15.2289 151.062 15.2289C149.737 15.2289 148.83 15.6424 148.202 16.4003C147.575 17.1583 147.296 18.3985 147.296 20.0523V30.8014H141.926V20.0523C141.926 16.7448 142.763 14.1954 144.436 12.5417C146.11 10.8879 148.272 9.99219 151.062 9.99219C153.852 9.99219 156.014 10.819 157.687 12.5417C159.361 14.1954 160.198 16.7448 160.198 20.0523V30.8703H160.268Z" fill="#AE8C8E"></path><path d="M167.8 29.7653C166.127 28.8006 164.871 27.5604 163.895 25.9066C162.918 24.2529 162.5 22.5303 162.5 20.601C162.5 18.6717 162.988 16.9491 163.895 15.2953C164.871 13.6416 166.127 12.4014 167.8 11.4367C169.474 10.472 171.218 10.0586 173.17 10.0586C175.611 10.0586 177.773 10.7476 179.656 12.1946C181.539 13.6416 182.795 15.4332 183.422 17.707H177.704C177.215 16.9491 176.588 16.3289 175.821 15.9155C175.053 15.5021 174.147 15.2264 173.17 15.2264C171.636 15.2264 170.381 15.7088 169.335 16.7423C168.289 17.7759 167.8 19.0162 167.8 20.5321C167.8 22.048 168.289 23.3572 169.335 24.3908C170.381 25.4243 171.636 25.9066 173.17 25.9066C174.077 25.9066 174.914 25.6999 175.681 25.2865C176.448 24.8731 177.076 24.3218 177.564 23.6328H183.422C182.725 25.8377 181.47 27.6293 179.587 29.0074C177.704 30.3854 175.542 31.0745 173.17 31.0745C171.287 31.1434 169.474 30.6611 167.8 29.7653Z" fill="#AE8C8E"></path><path d="M206.853 20.1885C206.783 18.1214 206.225 16.3299 205.179 14.814C204.133 13.2981 202.738 12.1267 201.134 11.2999C199.53 10.473 197.786 10.0596 196.043 10.0596C194.09 10.0596 192.346 10.5419 190.742 11.5066C189.138 12.4712 187.883 13.7804 186.907 15.3652C186 17.0189 185.512 18.7415 185.512 20.602C185.512 22.5313 186 24.2539 186.976 25.9076C187.953 27.4924 189.208 28.8016 190.812 29.6974C192.416 30.662 194.229 31.1444 196.182 31.1444C198.344 31.1444 200.297 30.5242 202.04 29.3529C203.784 28.1815 205.109 26.6656 205.946 24.8052L199.53 24.7363C199.111 25.0808 198.623 25.3564 198.065 25.5631C197.507 25.7698 196.81 25.9076 195.973 25.9076C194.787 25.9076 193.741 25.632 192.904 25.0119C192.067 24.4606 191.509 23.6338 191.3 22.6002H206.643C206.783 21.9112 206.853 21.0154 206.853 20.1885ZM193.253 16.1232C194.09 15.5719 195.066 15.2963 196.252 15.2963C197.298 15.2963 198.274 15.5719 199.181 16.1921C199.739 16.5366 200.157 16.95 200.576 17.5013H191.998C192.277 16.8811 192.695 16.4677 193.253 16.1232Z" fill="#AE8C8E"></path><path d="M210.55 15.2953C211.526 13.6416 212.782 12.4014 214.455 11.4367C216.059 10.472 217.873 10.0586 219.825 10.0586C221.778 10.0586 223.522 10.5409 225.195 11.4367C226.8 12.4014 228.125 13.6416 229.101 15.2953C230.077 16.9491 230.566 18.6717 230.566 20.601C230.566 22.5303 230.077 24.2529 229.101 25.9067C228.125 27.5604 226.869 28.8006 225.195 29.7653C223.591 30.73 221.778 31.1434 219.825 31.1434C217.803 31.1434 216.059 30.5922 214.595 29.5586V38.9985H209.155V20.601C209.085 18.6717 209.573 16.9491 210.55 15.2953ZM223.591 24.4597C224.568 23.4261 225.056 22.1858 225.056 20.6699C225.056 19.154 224.568 17.8448 223.591 16.8801C222.615 15.8466 221.36 15.3642 219.825 15.3642C218.291 15.3642 217.036 15.8466 215.99 16.8801C214.944 17.9137 214.455 19.154 214.455 20.6699C214.455 22.1858 214.944 23.495 215.99 24.4597C217.036 25.4932 218.291 25.9756 219.825 25.9756C221.29 25.9756 222.545 25.4932 223.591 24.4597Z" fill="#AE8C8E"></path><path d="M233.702 22.8066C233.702 22.9444 233.633 23.0134 233.633 23.1512L233.702 22.8066Z" fill="#AE8C8E"></path><path d="M15.9713 5.99556V0.138672L15.4831 0.207576C11.5776 0.827718 8.02082 2.61924 5.23117 5.44433C2.65074 8.0627 0.907208 11.3701 0.279536 14.8843C0.279536 15.091 0.209795 15.2977 0.209795 15.4355C0.140054 15.8489 0.0703125 16.3313 0.0703125 16.8136V31.4903H6.20755V21.4302H13.0422V16.4691H6.1378C6.48651 13.1616 8.23004 10.0609 10.95 8.13161C12.3448 7.09804 13.9488 6.40899 15.6226 6.06447L15.9713 5.99556Z" fill="#AE8C8E"></path><path d="M83.4815 20.8087C83.4117 18.7415 82.8538 16.95 81.8077 15.4341C80.7615 13.9182 79.3667 12.7468 77.7627 11.92C76.1586 11.0931 74.4151 10.6797 72.6716 10.6797C70.7188 10.6797 68.9753 11.162 67.3712 12.1267C65.7672 13.0913 64.5118 14.4005 63.5355 15.9853C62.6288 17.6391 62.1406 19.3617 62.1406 21.2221C62.1406 23.1514 62.6288 24.874 63.5355 26.5277C64.5118 28.1125 65.7672 29.4217 67.3712 30.3175C68.9753 31.2822 70.7885 31.6956 72.7413 31.6956C74.9033 31.6956 76.856 31.1444 78.5996 29.9041C80.3431 28.7327 81.6682 27.2168 82.5051 25.3564L76.0889 25.2875C75.6704 25.632 75.1822 25.9076 74.6243 26.1143C74.0664 26.321 73.369 26.4588 72.5321 26.4588C71.3465 26.4588 70.3004 26.1832 69.4635 25.5631C68.6266 24.9429 68.0686 24.185 67.8594 23.1514H83.2025C83.4117 22.5313 83.4815 21.6355 83.4815 20.8087ZM69.8819 16.7433C70.7188 16.1921 71.6952 15.9164 72.8808 15.9164C73.9269 15.9164 74.9033 16.1921 75.8099 16.8122C76.4376 17.2256 76.9258 17.708 77.3442 18.3281H68.3476C68.766 17.6391 69.2542 17.1567 69.8819 16.7433Z" fill="#AE8C8E"></path></g><defs><clipPath id="clip0_24_12861"><rect width="248" height="39" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconLogo.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Logo$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$9]]);
const Logo_vue_vue_type_style_index_0_scoped_966da3f0_lang = "";
const _sfc_main$q = {
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
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Logo.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-966da3f0"]]);
const HeaderMobileMenu_vue_vue_type_style_index_0_scoped_4c46c0e6_lang = "";
const _sfc_main$p = {
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/HeaderMobileMenu.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const HeaderMobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-4c46c0e6"]]);
const HeaderBurgerIcon_vue_vue_type_style_index_0_scoped_4e54a047_lang = "";
const _sfc_main$o = {
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/HeaderBurgerIcon.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const HeaderBurgerIcon = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-4e54a047"]]);
const Header_vue_vue_type_style_index_0_scoped_8d58a7b9_lang = "";
const _sfc_main$n = {
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Header.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-8d58a7b9"]]);
const _sfc_main$m = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    fill: "none"
  }, _attrs))}><circle cx="23" cy="23" r="23" fill="#6D6364"></circle><path d="M36.0336 12.3447L31.6683 34.3535C31.6683 34.3535 31.0578 35.8799 29.3789 35.1472L19.3056 27.4243L15.6427 25.654L9.47667 23.5781C9.47667 23.5781 8.5304 23.2425 8.43875 22.5098C8.3471 21.7772 9.50722 21.3805 9.50722 21.3805L34.0187 11.765C34.0187 11.765 36.0334 10.8798 36.0334 12.3451" fill="#F4EEE8"></path><path d="M18.5295 34.1072C18.5295 34.1072 18.2354 34.0797 17.8688 32.9196C17.5028 31.7597 15.6406 25.6547 15.6406 25.6547L30.4453 16.2531C30.4453 16.2531 31.3001 15.7341 31.2696 16.2531C31.2696 16.2531 31.4221 16.3448 30.9641 16.7721C30.5064 17.1996 19.3343 27.2422 19.3343 27.2422" fill="#D8C4B0"></path><path d="M23.1677 30.3841L19.1835 34.0168C19.1835 34.0168 18.8719 34.2532 18.5312 34.1051L19.2942 27.3574" fill="#BC9E81"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconTelegram.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const IconTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$l = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "47",
    height: "46",
    viewBox: "0 0 47 46",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="23.6641" cy="23" r="23" fill="#6D6364"></circle><g clip-path="url(#clip0_138_592)"><path d="M11.2056 22.8348C11.205 25.1538 11.7987 27.418 12.9276 29.4138L11.0977 36.2327L17.9351 34.403C19.8263 35.4537 21.9452 36.0043 24.0984 36.0044H24.1041C31.2123 36.0044 36.9985 30.1011 37.0016 22.8452C37.0029 19.3292 35.6625 16.023 33.2272 13.5356C30.7923 11.0484 27.5539 9.67787 24.1035 9.67627C16.9945 9.67627 11.2087 15.5792 11.2057 22.8348" fill="#6D6364"></path><path d="M10.745 22.8305C10.7442 25.2329 11.3592 27.5781 12.5283 29.6453L10.6328 36.7087L17.7154 34.8134C19.6669 35.8993 21.8641 36.4719 24.0999 36.4727H24.1057C31.4689 36.4727 37.463 30.3571 37.4661 22.8414C37.4674 19.1991 36.0788 15.774 33.5564 13.1975C31.0338 10.6212 27.6796 9.20145 24.1057 9.19995C16.7412 9.19995 10.7479 15.3147 10.745 22.8305ZM14.9628 29.2893L14.6984 28.8609C13.5867 27.0568 12.9999 24.9721 13.0007 22.8314C13.0032 16.5844 17.9845 11.5021 24.1099 11.5021C27.0762 11.5034 29.8639 12.6835 31.9607 14.8248C34.0574 16.9662 35.2111 19.8129 35.2104 22.8406C35.2076 29.0875 30.2262 34.1705 24.1057 34.1705H24.1013C22.1084 34.1694 20.1538 33.6232 18.4493 32.591L18.0436 32.3454L13.8407 33.4701L14.9628 29.2892V29.2893Z" fill="url(#paint0_linear_138_592)"></path><path d="M20.766 17.131C20.5159 16.5637 20.2527 16.5523 20.0148 16.5424C19.8201 16.5338 19.5974 16.5344 19.375 16.5344C19.1524 16.5344 18.7907 16.6199 18.4849 16.9606C18.1788 17.3017 17.3164 18.1258 17.3164 19.802C17.3164 21.4784 18.5127 23.0983 18.6795 23.3259C18.8464 23.553 20.9889 27.1029 24.3821 28.4685C27.2021 29.6035 27.776 29.3777 28.388 29.3208C29.0001 29.2641 30.3632 28.4969 30.6413 27.7013C30.9195 26.9058 30.9195 26.224 30.8361 26.0815C30.7527 25.9395 30.53 25.8542 30.1962 25.6839C29.8622 25.5135 28.221 24.6893 27.915 24.5756C27.609 24.4619 27.3865 24.4052 27.1638 24.7464C26.9412 25.087 26.3019 25.8542 26.107 26.0815C25.9124 26.3092 25.7175 26.3376 25.3838 26.1672C25.0497 25.9962 23.9746 25.6369 22.6991 24.4763C21.7067 23.5732 21.0367 22.458 20.8419 22.1168C20.6472 21.7762 20.8211 21.5915 20.9885 21.4218C21.1385 21.2691 21.3224 21.0239 21.4895 20.8251C21.656 20.6261 21.7115 20.4841 21.8228 20.2569C21.9343 20.0295 21.8785 19.8305 21.7952 19.6601C21.7115 19.4897 21.0628 17.8047 20.766 17.131Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_138_592" x1="1352.3" y1="2760.08" x2="1352.3" y2="9.19995" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"></stop><stop offset="1" stop-color="white"></stop></linearGradient><clipPath id="clip0_138_592"><rect width="26.8333" height="27.6" fill="white" transform="translate(10.6328 9.19995)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconWhatsapp.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const IconWhatsapp = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "46",
    viewBox: "0 0 47 46",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_138_604)"><path d="M18.5193 0.00867969L19.9165 0.00292969H26.7475L28.1467 0.00867969L29.8985 0.0278464L30.7284 0.041263L31.5296 0.0623464L32.302 0.0891797L33.0457 0.119846L33.7625 0.160096L34.4525 0.208013L35.1138 0.265513L35.752 0.328763C39.087 0.70443 41.3736 1.50943 43.0986 3.23443C44.8236 4.95943 45.6286 7.2441 46.0043 10.581L46.0695 11.2193L46.125 11.8824L46.1729 12.5724L46.2113 13.2873L46.2592 14.4143L46.2822 15.2002L46.3071 16.4345L46.3244 18.1883L46.332 20.0666L46.3301 26.4165L46.3244 27.8157L46.3052 29.5675L46.2918 30.3974L46.2707 31.1986L46.2439 31.971L46.2132 32.7147L46.1729 33.4315L46.125 34.1215L46.0675 34.7828L46.0043 35.421C45.6286 38.756 44.8236 41.0426 43.0986 42.7676C41.3736 44.4926 39.0889 45.2976 35.752 45.6733L35.1138 45.7384L34.4506 45.794L33.7606 45.8419L33.0457 45.8803L31.9187 45.9282L31.1329 45.9512L29.8985 45.9761L28.1448 45.9933L26.2664 46.001L19.9165 45.9991L18.5174 45.9933L16.7655 45.9742L15.9356 45.9608L15.1344 45.9397L14.362 45.9128L13.6184 45.8822L12.9015 45.8419L12.2115 45.794L11.5503 45.7365L10.912 45.6733C7.57703 45.2976 5.29045 44.4926 3.56545 42.7676C1.84045 41.0426 1.03545 38.7579 0.659781 35.421L0.594615 34.7828L0.539031 34.1196L0.491115 33.4296L0.452781 32.7147L0.404865 31.5877L0.381865 30.8018L0.356948 29.5675L0.339698 27.8138L0.332031 25.9354L0.333948 19.5855L0.339698 18.1863L0.358865 16.4345L0.372281 15.6046L0.393365 14.8034L0.420198 14.031L0.450865 13.2873L0.491115 12.5705L0.539031 11.8805L0.596531 11.2193L0.659781 10.581C1.03545 7.24601 1.84045 4.95943 3.56545 3.23443C5.29045 1.50943 7.57511 0.70443 10.912 0.328763L11.5503 0.263596L12.2134 0.208013L12.9034 0.160096L13.6184 0.121763L14.7454 0.0738463L15.5312 0.0508463L16.7655 0.0259297L18.5193 0.00867969ZM13.3462 13.9927H8.09453C8.3437 25.9527 14.3237 33.1402 24.8079 33.1402H25.402V26.2977C29.2545 26.681 32.1679 29.4985 33.337 33.1402H38.7804C37.2854 27.6968 33.3562 24.6877 30.9029 23.5377C33.3562 22.1193 36.8062 18.6693 37.6304 13.9927H32.6854C31.612 17.7877 28.4304 21.2377 25.402 21.5635V13.9927H20.457V27.256C17.3904 26.4893 13.5187 22.771 13.3462 13.9927Z" fill="#6D6364"></path></g><defs><clipPath id="clip0_138_604"><rect width="46" height="46" fill="white" transform="translate(0.332031)"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconVk.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const IconVk = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "46",
    height: "46",
    viewBox: "0 0 46 46",
    fill: "none"
  }, _attrs))}><path d="M25.3649 0.00282981C27.0432 -0.00361048 28.7215 0.0132574 30.3994 0.0534283L30.8456 0.0695276C31.3608 0.087927 31.869 0.110926 32.4831 0.138525C34.9302 0.253521 36.6 0.639909 38.065 1.20799C39.583 1.79217 40.8617 2.58334 42.1405 3.8621C43.3097 5.01115 44.2146 6.40109 44.7923 7.93526C45.3604 9.40031 45.7468 11.0724 45.8618 13.5195C45.8894 14.1312 45.9124 14.6418 45.9308 15.157L45.9446 15.6032C45.9854 17.2803 46.0031 18.9579 45.9975 20.6354L45.9998 22.3512V25.3641C46.0054 27.0424 45.9878 28.7207 45.9469 30.3986L45.9331 30.8448C45.9147 31.36 45.8917 31.8682 45.8641 32.4823C45.7491 34.9294 45.3581 36.5992 44.7923 38.0642C44.2165 39.6 43.3114 40.9911 42.1405 42.1397C40.9904 43.3088 39.5998 44.2137 38.065 44.7915C36.6 45.3596 34.9302 45.746 32.4831 45.861C31.869 45.8886 31.3608 45.9116 30.8456 45.93L30.3994 45.9438C28.7215 45.9847 27.0432 46.0023 25.3649 45.9967L23.6491 45.999H20.6385C18.9602 46.0046 17.2818 45.987 15.604 45.9461L15.1578 45.9323C14.6118 45.9125 14.066 45.8895 13.5203 45.8633C11.0731 45.7483 9.40341 45.3573 7.93606 44.7915C6.40128 44.215 5.0111 43.31 3.8629 42.1397C2.69234 40.9904 1.78658 39.5996 1.20879 38.0642C0.640705 36.5992 0.254318 34.9294 0.139322 32.4823C0.113708 31.9366 0.0907084 31.3907 0.0703246 30.8448L0.0588253 30.3986C0.016423 28.7208 -0.00274506 27.0424 0.00132706 25.3641V20.6354C-0.00509195 18.9579 0.0117759 17.2803 0.0519255 15.6032L0.0680249 15.157C0.0864243 14.6418 0.109423 14.1312 0.137022 13.5195C0.252019 11.0701 0.638405 9.40261 1.20649 7.93526C1.78462 6.40034 2.69215 5.01078 3.8652 3.8644C5.01261 2.69317 6.40192 1.78659 7.93606 1.20799C9.40341 0.639909 11.0708 0.253521 13.5203 0.138525L15.1578 0.0695276L15.604 0.0580283C17.2811 0.0156472 18.9586 -0.00352084 20.6362 0.000530058L25.3649 0.00282981ZM23.0005 11.5024C21.4769 11.4809 19.9641 11.7624 18.5501 12.3306C17.1362 12.8987 15.8493 13.7423 14.7642 14.8122C13.6791 15.882 12.8174 17.1569 12.2293 18.5627C11.6412 19.9684 11.3383 21.4771 11.3383 23.0009C11.3383 24.5247 11.6412 26.0334 12.2293 27.4391C12.8174 28.8449 13.6791 30.1198 14.7642 31.1896C15.8493 32.2595 17.1362 33.1031 18.5501 33.6712C19.9641 34.2394 21.4769 34.5209 23.0005 34.4994C26.0504 34.4994 28.9754 33.2878 31.132 31.1312C33.2886 28.9746 34.5002 26.0496 34.5002 22.9997C34.5002 19.9499 33.2886 17.0249 31.132 14.8683C28.9754 12.7117 26.0504 11.5024 23.0005 11.5024ZM23.0005 16.1023C23.9171 16.0854 24.8278 16.2513 25.6795 16.5903C26.5312 16.9294 27.3068 17.4347 27.961 18.0769C28.6152 18.719 29.1348 19.4851 29.4896 20.3303C29.8444 21.1756 30.0273 22.083 30.0274 22.9997C30.0276 23.9164 29.8451 24.8239 29.4905 25.6693C29.136 26.5147 28.6166 27.2809 27.9626 27.9233C27.3086 28.5656 26.5332 29.0712 25.6816 29.4106C24.83 29.7499 23.9194 29.9161 23.0028 29.8995C21.1729 29.8995 19.4179 29.1726 18.124 27.8786C16.83 26.5847 16.1031 24.8297 16.1031 22.9997C16.1031 21.1698 16.83 19.4148 18.124 18.1209C19.4179 16.8269 21.1729 16.1 23.0028 16.1L23.0005 16.1023ZM35.0751 8.05256C34.3332 8.08225 33.6315 8.39789 33.117 8.93336C32.6025 9.46883 32.3152 10.1826 32.3152 10.9252C32.3152 11.6677 32.6025 12.3815 33.117 12.917C33.6315 13.4524 34.3332 13.7681 35.0751 13.7978C35.8376 13.7978 36.5689 13.4949 37.108 12.9557C37.6471 12.4166 37.95 11.6853 37.95 10.9229C37.95 10.1604 37.6471 9.42914 37.108 8.89C36.5689 8.35085 35.8376 8.04796 35.0751 8.04796V8.05256Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconInstagram.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const IconInstagram = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "37",
    viewBox: "0 0 47 37",
    fill: "none"
  }, _attrs))}><path d="M24.2303 0.599609C25.4586 0.606387 28.5316 0.635754 31.7977 0.764521L32.957 0.814221C36.2438 0.965578 39.5284 1.22763 41.1592 1.67267C43.3328 2.27358 45.0395 4.0221 45.6168 6.24051C46.5369 9.76466 46.6519 16.6367 46.6657 18.3017L46.668 18.6451V19.0381C46.6519 20.7031 46.5369 27.5774 45.6168 31.0993C45.0326 33.3245 43.3236 35.0753 41.1592 35.6671C39.5284 36.1122 36.2438 36.3742 32.957 36.5256L31.7977 36.5776C28.5316 36.7041 25.4586 36.7357 24.2303 36.7402L23.6898 36.7425H23.1033C20.5042 36.7267 9.63382 36.6114 6.17444 35.6671C4.00314 35.0662 2.29415 33.3177 1.71682 31.0993C0.796775 27.5752 0.681769 20.7031 0.667969 19.0381V18.3017C0.681769 16.6367 0.796775 9.7624 1.71682 6.24051C2.30105 4.01532 4.01004 2.26454 6.17674 1.67493C9.63382 0.728376 20.5065 0.613164 23.1056 0.599609H24.2303ZM19.0666 10.7654V26.5789L32.8673 18.6722L19.0666 10.7654Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconYoutube.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const IconYoutube = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$h = {};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconAppStore.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconGooglePlay.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const FooterSocials_vue_vue_type_style_index_0_scoped_a171072c_lang = "";
const _sfc_main$f = {
  __name: "FooterSocials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-socials" }, _attrs))} data-v-a171072c><div class="footer-socials-icons" data-v-a171072c><a href="https://t.me/faceconceptru" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconTelegram, null, null, _parent));
      _push(`</a><a href="https://wa.me/79774122010" target="_blank" rel="noopener noreferrer" data-v-a171072c>`);
      _push(ssrRenderComponent(IconWhatsapp, null, null, _parent));
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterSocials.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const FooterSocials = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a171072c"]]);
const FooterNav_vue_vue_type_style_index_0_scoped_5520c387_lang = "";
const __default__$1 = {
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
              text: "Bright Concept",
              href: "/concept/bright"
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
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$1, {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterNav.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const FooterNav = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-5520c387"]]);
const _sfc_main$d = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none"
  }, _attrs))}><g clip-path="url(#clip0_138_475)"><path d="M6.4573 5.69531H5.01551C4.45133 5.69531 4.17969 5.8 4.17969 6.26062V6.78405C4.17969 7.24466 4.47222 7.34935 5.01551 7.34935H5.34984C5.55879 7.34935 5.64237 7.45404 5.64237 7.78903V14.6564C5.64237 15.2217 5.74685 15.4939 6.20655 15.4939H6.74984C7.20954 15.4939 7.31402 15.2008 7.31402 14.6564V6.26062C7.29312 5.8 7.00058 5.69531 6.4573 5.69531Z" fill="#6D6364"></path><path d="M16.3612 0.921236C15.7343 0.314058 14.9612 0 14.0209 0H6.9791C6.03881 0 5.24478 0.314058 4.63881 0.921236L0.898507 4.64806C0.313433 5.2343 0 6.00897 0 6.8674V14.0489C0 15.0329 0.334328 15.8076 1.00299 16.4566L4.55522 20.016C5.24478 20.7069 6.03881 21.0419 7.04179 21.0209H14C14.9612 21.0209 15.7552 20.7278 16.4866 20.016L20.0388 16.4566C20.6866 15.8076 21.0418 15.0329 21.0418 14.0489V6.8674C21.0418 6.00897 20.7284 5.2343 20.1433 4.64806L16.3612 0.921236ZM19.6209 9.31705C19.6209 9.54736 19.5164 9.67298 19.2866 9.67298H18.2209V8.91924C18.2209 8.35394 18.1373 8.08175 17.6567 8.08175H17.1761C16.6955 8.08175 16.6119 8.37488 16.6119 8.91924V9.67298H15.8806C15.3164 9.67298 15.0448 9.75673 15.0448 10.2383V10.7408C15.0448 11.2223 15.3373 11.3061 15.8806 11.3061H16.6328V12.0598C16.6328 12.6251 16.7164 12.8973 17.197 12.8973H17.6776C18.1582 12.8973 18.2418 12.6042 18.2418 12.0598V11.3061H19.3075C19.5164 11.3061 19.6209 11.4108 19.6418 11.6201V14.0489C19.6418 14.6351 19.4746 15.0748 19.0567 15.4726L15.5045 19.0319C15.0866 19.4506 14.6269 19.6391 14.0627 19.6391H6.95821C6.39403 19.6391 5.93433 19.4506 5.51642 19.0319L1.96418 15.4726C1.54627 15.0538 1.35821 14.6351 1.3791 14.0489V7.03489C1.3791 6.44865 1.56716 5.94616 2.00597 5.50648L5.6 1.84247C5.95522 1.48654 6.43582 1.36092 6.95821 1.36092H14.0418C14.5642 1.36092 15.0239 1.4656 15.4 1.84247L19.0149 5.50648C19.4328 5.94616 19.6418 6.44865 19.6418 7.03489V9.31705H19.6209Z" fill="#6D6364"></path><path d="M13.3519 10.4052C14.2504 9.75611 14.2504 9.08612 14.2504 8.54175V7.99738C14.1459 6.19679 13.5608 5.50586 11.4713 5.50586C9.3817 5.50586 8.79663 6.19679 8.69215 7.99738V8.54175C8.69215 9.08612 8.71305 9.75611 9.59066 10.4052C8.52499 10.8239 8.44141 11.7242 8.44141 12.9176C8.44141 14.6763 9.06827 15.5557 11.4504 15.5976C13.8533 15.5557 14.4593 14.6763 14.4593 12.9176C14.5011 11.7242 14.4175 10.8239 13.3519 10.4052ZM11.4922 6.9924C12.3698 6.9924 12.725 7.30646 12.725 8.37425C12.725 9.40018 12.3698 9.75611 11.4922 9.75611C10.6145 9.75611 10.2593 9.40018 10.2593 8.37425C10.2593 7.30646 10.6145 6.9924 11.4922 6.9924ZM11.4922 14.111C10.4683 14.111 10.113 13.7132 10.113 12.7083C10.113 11.7033 10.4683 11.2426 11.4922 11.2426C12.516 11.2426 12.8713 11.7033 12.8713 12.7083C12.8713 13.7132 12.4951 14.111 11.4922 14.111Z" fill="#6D6364"></path></g><defs><clipPath id="clip0_138_475"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconAge18.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const IconAge18 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$3]]);
const FooterInfo_vue_vue_type_style_index_0_scoped_29b07078_lang = "";
const _sfc_main$c = {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/FooterInfo.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const FooterInfo = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-29b07078"]]);
const Footer_vue_vue_type_style_index_0_scoped_6b313038_lang = "";
const __default__ = {
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
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__, {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/Footer.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-6b313038"]]);
const ModalBlockSuccess_vue_vue_type_style_index_0_scoped_725193d3_lang = "";
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalBlockSuccess.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ModalBlockSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-725193d3"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><circle cx="30" cy="30" r="30" transform="rotate(90 30 30)" fill="#AE8C8E"></circle><path d="M32.6804 29.9433L39.3845 23.1996C39.7152 22.8371 39.8939 22.36 39.8833 21.8681C39.8727 21.3761 39.6736 20.9073 39.3276 20.5595C38.9816 20.2116 38.5154 20.0117 38.0263 20.0013C37.5372 19.991 37.0631 20.171 36.7028 20.5039L36.7046 20.5022L30.0005 27.2458L23.2963 20.5022C22.9359 20.1695 22.4616 19.9898 21.9725 20.0004C21.4835 20.0111 21.0174 20.2114 20.6716 20.5594C20.3258 20.9075 20.127 21.3764 20.1168 21.8684C20.1065 22.3603 20.2855 22.8373 20.6164 23.1996L20.6147 23.1979L27.3188 29.9415L20.6147 36.6852C20.426 36.8592 20.2744 37.0699 20.1688 37.3045C20.0633 37.5391 20.006 37.7927 20.0004 38.0501C19.9949 38.3075 20.0412 38.5634 20.1365 38.8024C20.2319 39.0414 20.3743 39.2584 20.5553 39.4406C20.7362 39.6227 20.9519 39.7661 21.1894 39.8622C21.4269 39.9583 21.6813 40.005 21.9372 39.9996C22.1932 39.9942 22.4453 39.9367 22.6786 39.8307C22.9119 39.7247 23.1214 39.5722 23.2946 39.3826L23.2963 39.3809L30.0005 32.6372L36.7046 39.3809C36.8776 39.5706 37.0871 39.7232 37.3203 39.8293C37.5535 39.9355 37.8056 39.9931 38.0615 39.9987C38.3175 40.0043 38.5719 39.9577 38.8094 39.8618C39.047 39.7659 39.2628 39.6226 39.4438 39.4406C39.6249 39.2586 39.7675 39.0416 39.863 38.8027C39.9585 38.5638 40.005 38.308 39.9996 38.0505C39.9942 37.7931 39.9371 37.5394 39.8317 37.3048C39.7263 37.0701 39.5747 36.8594 39.3862 36.6852L39.3845 36.6834L32.6804 29.9433Z" fill="white"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/CloseIcon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CloseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const ModalLinkTelegram_vue_vue_type_style_index_0_scoped_9def60ad_lang = "";
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://t.me/FaceConcept_bot",
    class: "modal-link"
  }, _attrs))} data-v-9def60ad><svg width="60" height="54" viewBox="0 0 60 54" fill="none" class="modal-link-icon" data-v-9def60ad><path d="M55.5581 0.00551817C54.8171 0.0594284 54.0898 0.233267 53.4045 0.520251H53.3953C52.7374 0.78108 49.6098 2.09677 44.8548 4.09107L27.8155 11.2673C15.5889 16.4147 3.56997 21.4835 3.56997 21.4835L3.71308 21.4281C3.71308 21.4281 2.88442 21.7005 2.01884 22.2937C1.48409 22.634 1.02394 23.0792 0.666223 23.6025C0.24151 24.2257 -0.100107 25.179 0.0268456 26.1646C0.234586 27.8311 1.31483 28.8306 2.0904 29.3823C2.87519 29.9409 3.62306 30.2017 3.62306 30.2017H3.64152L14.9126 33.9987C15.4181 35.6214 18.3472 45.2513 19.0512 47.4695C19.4667 48.7944 19.8706 49.6231 20.3761 50.2555C20.6208 50.5787 20.907 50.8487 21.2509 51.0657C21.4297 51.1697 21.6204 51.2519 21.8188 51.3104L21.7034 51.2827C21.738 51.2919 21.7657 51.3196 21.7911 51.3288C21.8834 51.3542 21.9457 51.3635 22.0634 51.3819C23.8477 51.9221 25.2811 50.8141 25.2811 50.8141L25.3619 50.7495L32.0165 44.6904L43.1698 53.247L43.4237 53.3555C45.7481 54.3757 48.1025 53.8079 49.3466 52.8061C50.6 51.7974 51.087 50.5071 51.087 50.5071L51.1678 50.2994L59.7867 6.14539C60.0314 5.05591 60.0937 4.03568 59.8237 3.04545C59.5451 2.04328 58.9022 1.18134 58.0209 0.628738C57.281 0.1789 56.4229 -0.038226 55.5581 0.00551817ZM55.3249 4.73737C55.3157 4.88279 55.3434 4.86663 55.2788 5.14593V5.17132L46.7407 48.866C46.7037 48.9283 46.6414 49.0645 46.4706 49.2007C46.2905 49.3438 46.1474 49.4338 45.3973 49.136L31.7557 38.6775L23.5153 46.1884L25.2465 35.132L47.5347 14.358C48.4534 13.504 48.1464 13.324 48.1464 13.324C48.211 12.276 46.7591 13.017 46.7591 13.017L18.6542 30.4279L18.645 30.3817L5.17418 25.8461V25.8368L5.13956 25.8299C5.16317 25.8221 5.1863 25.8128 5.20881 25.8022L5.28267 25.7653L5.35422 25.7399C5.35422 25.7399 17.3824 20.671 29.609 15.5237C35.7304 12.9454 41.898 10.3487 46.6414 8.34513C49.4545 7.16102 52.2706 5.98382 55.0895 4.81355C55.2788 4.73968 55.1887 4.73737 55.3249 4.73737Z" fill="black" data-v-9def60ad></path></svg></a>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalLinkTelegram.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ModalLinkTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9def60ad"]]);
const ModalLinkWhatsapp_vue_vue_type_style_index_0_scoped_ba2c3330_lang = "";
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "https://wa.me/79774122010",
    class: "modal-link"
  }, _attrs))} data-v-ba2c3330><svg width="60" height="60" viewBox="0 0 60 60" fill="none" class="modal-link-icon" data-v-ba2c3330><path d="M51.2563 8.73015C48.4921 5.95194 45.1995 3.74917 41.5708 2.25032C37.942 0.75148 34.0496 -0.0134403 30.1206 0.000178708C13.6583 0.000178708 0.241207 13.3501 0.241207 29.7301C0.241207 34.9801 1.62814 40.0801 4.22111 44.58L0 60L15.8291 55.86C20.201 58.23 25.1156 59.49 30.1206 59.49C46.5829 59.49 60 46.14 60 29.7601C60 21.8101 56.8945 14.3401 51.2563 8.73015ZM30.1206 54.45C25.6583 54.45 21.2864 53.25 17.4573 51L16.5528 50.46L7.14573 52.92L9.64824 43.8L9.04523 42.8701C6.56607 38.931 5.24967 34.3778 5.24623 29.7301C5.24623 16.1101 16.402 5.01016 30.0904 5.01016C36.7236 5.01016 42.9648 7.59016 47.6382 12.2701C49.9522 14.562 51.786 17.2881 53.0333 20.2904C54.2807 23.2927 54.9167 26.5114 54.9045 29.7601C54.9648 43.3801 43.809 54.45 30.1206 54.45ZM43.7487 35.9701C42.995 35.6101 39.3166 33.8101 38.6533 33.5401C37.9598 33.3001 37.4774 33.1801 36.9648 33.9001C36.4523 34.6501 35.0352 36.3301 34.6131 36.8101C34.191 37.3201 33.7387 37.3801 32.9849 36.9901C32.2312 36.6301 29.8191 35.8201 26.9849 33.3001C24.7538 31.3201 23.2764 28.8901 22.8241 28.1401C22.402 27.3901 22.7638 27.0001 23.1558 26.6101C23.4874 26.2801 23.9095 25.7401 24.2714 25.3201C24.6332 24.9001 24.7839 24.5701 25.0251 24.0901C25.2663 23.5801 25.1457 23.1601 24.9648 22.8001C24.7839 22.4401 23.2764 18.7801 22.6734 17.2801C22.0703 15.8401 21.4372 16.0201 20.9849 15.9901H19.5377C19.0251 15.9901 18.2412 16.1701 17.5477 16.9201C16.8844 17.6701 14.9548 19.4701 14.9548 23.1301C14.9548 26.7901 17.6382 30.3301 18 30.8101C18.3618 31.3201 23.2764 38.8201 30.7538 42.0301C32.5327 42.8101 33.9196 43.2601 35.005 43.59C36.7839 44.16 38.4121 44.07 39.7085 43.89C41.1558 43.68 44.1407 42.0901 44.7437 40.3501C45.3769 38.6101 45.3769 37.1401 45.1658 36.8101C44.9548 36.4801 44.5025 36.3301 43.7487 35.9701Z" fill="black" data-v-ba2c3330></path></svg></a>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalLinkWhatsapp.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ModalLinkWhatsapp = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ba2c3330"]]);
const ModalBase_vue_vue_type_style_index_0_scoped_83f3b2cf_lang = "";
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalBase.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ModalBase = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-83f3b2cf"]]);
const MButtonBig_vue_vue_type_style_index_0_scoped_0703f02b_lang = "";
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/MButtonBig.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MButtonBig = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0703f02b"]]);
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-bonuse/ModalBonuse.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ModalApplication_vue_vue_type_style_index_0_scoped_0e35b2df_lang = "";
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-application/ModalApplication.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ModalApplication = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0e35b2df"]]);
const ModalWrapper_vue_vue_type_style_index_0_scoped_093018ca_lang = "";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/ModalWrapper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ModalWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-093018ca"]]);
const ModalReplace_vue_vue_type_style_index_0_scoped_f4b5f16d_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/modal/modal-replace/ModalReplace.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ModalReplace = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4b5f16d"]]);
const ViewWrapper_vue_vue_type_style_index_0_scoped_d3bed000_lang = "";
const _sfc_main = {
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
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ViewWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ViewWrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3bed000"]]);
export {
  MContainer as M,
  ViewWrapper as V,
  MButtonBig as a,
  useModalsStore as u
};
