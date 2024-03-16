import { mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { S as SectionResult, a as SectionStories, b as SectionOther } from "./SectionOther-b10c8342.js";
import { S as SectionPreview, a as SectionTech } from "./SectionTech-add26d84.js";
import { S as SectionMasters } from "./BigBadge-63213c6d.js";
import { S as SectionCircles, a as SectionReview } from "./SectionReview-dd77bd4a.js";
import { S as SectionPriceItem, a as SectionBonus } from "./SectionPriceItem-e638a647.js";
import { S as SectionOffer } from "./SectionOffer-d75924a6.js";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import { S as SectionInfo } from "./SectionInfo-87b33c4a.js";
import { S as SectionRead } from "./SectionRead-58c1d2b2.js";
import { S as SectionPluses } from "./SectionPluses-96a79b71.js";
import "./MButtonOutlineBig-941f109f.js";
import { _ as _export_sfc } from "../main.mjs";
import { C as CardInfo } from "./CardInfo-493a4eeb.js";
import { C as CardLink } from "./CardLink-77a26580.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { S as SectionPlaces } from "./SectionPlaces-2060a424.js";
import { S as SectionRec } from "./SectionRec-434d765e.js";
import { S as SectionFaq } from "./SectionFaq-a1a66c85.js";
import "pinia";
import "emailjs-com";
import "./swiper-c12304a9.js";
import "swiper/vue";
import "./CardMaster-47d8227d.js";
import "./IconPlay-794340eb.js";
import "./MButtonOutline-8b835ebe.js";
import "./MButton-352890a7.js";
import "./CardNews-b94ed9ae.js";
import "./SliderVariant1-f48da4d7.js";
import "./IconSliderArrowRight-502e2ffe.js";
import "swiper/modules";
import "vite-ssg";
import "./CardPlace-ea87436f.js";
import "./FaqItem-db08f79b.js";
const SectionProcedures_vue_vue_type_style_index_0_scoped_b2e1f1c9_lang = "";
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-procedures/SectionProcedures.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SectionProcedures = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-b2e1f1c9"]]);
const _imports_0$1 = "/assets/photo-4c9e2630.png";
const SectionDevicesCard_vue_vue_type_style_index_0_scoped_d31b2c5c_lang = "";
const _sfc_main$6 = {
  __name: "SectionDevicesCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-devices-big" }, _attrs))} data-v-d31b2c5c><div class="card-content" data-v-d31b2c5c><div class="card-info" data-v-d31b2c5c><h5 class="h-md" data-v-d31b2c5c>Skinova Pro</h5><p class="text-sm" data-v-d31b2c5c> Клеточная реконструкция высокочастотным ультразвуком. Единственная технология, регулирующая уровень кавеолина — структурного белка клеточной мембраны, который находится практически во всех клетках кожи. </p><div class="card-price-and-link" data-v-d31b2c5c>`);
      _push(ssrRenderComponent(CardInfo, {
        class: "card-price",
        title: "Стоимость 1 процедуры",
        icon: "pay",
        text: "от 4 500₽"
      }, null, _parent));
      _push(ssrRenderComponent(CardLink, { path: "youtube.com" }, null, _parent));
      _push(`</div></div><div class="card-img-wrapper" data-v-d31b2c5c><img${ssrRenderAttr("src", _imports_0$1)} class="card-img" alt="" data-v-d31b2c5c></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-devices/SectionDevicesCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SectionDevicesCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-d31b2c5c"]]);
const SectionDevices_vue_vue_type_style_index_0_scoped_59e56ef1_lang = "";
const _sfc_main$5 = {
  __name: "SectionDevices",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-devices" }, _attrs))} data-v-59e56ef1>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl heading" data-v-59e56ef1${_scopeId}>Аппараты AntiAcne Concept</h3>`);
            _push2(ssrRenderComponent(SectionDevicesCard, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard, { class: "section-devices-card" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevicesCard, { class: "section-devices-card" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "h-xl heading" }, "Аппараты AntiAcne Concept"),
              createVNode(SectionDevicesCard, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard, { class: "section-devices-card" }),
              createVNode(SectionDevicesCard, { class: "section-devices-card" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-devices/SectionDevices.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionDevices = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-59e56ef1"]]);
const _imports_0 = "/assets/banner-eb398e28.png";
const SectionBannerBadges_vue_vue_type_style_index_0_scoped_cf1a4231_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "badge-group" }, _attrs))} data-v-cf1a4231><svg xmlns="http://www.w3.org/2000/svg" width="393" height="203" viewBox="0 0 393 203" fill="none" data-v-cf1a4231><rect x="8.27148" y="90" width="361" height="70" rx="20" transform="rotate(6.78616 8.27148 90)" fill="#BFB0E9" data-v-cf1a4231></rect><path d="M26.9414 127.888L27.242 125.361C28.9152 111.301 42.0633 107.645 56.0378 108.824L55.7181 115.167C43.9531 114.105 35.6473 116.066 33.1896 123.314C36.451 121.092 40.6181 118.977 45.5751 119.567C52.2003 120.356 56.9159 125.412 55.997 133.134C55.203 139.807 48.233 145.165 39.8442 144.166C31.1217 143.128 25.9885 135.895 26.9414 127.888ZM43.5542 125.176C40.3607 124.796 36.6351 126.044 33.3374 128.165L33.1842 129.452C32.7021 133.504 35.7834 138.076 40.5021 138.637C45.6022 139.244 49.1847 135.948 49.6101 132.374C50.0922 128.322 47.7963 125.68 43.5542 125.176ZM74.5376 142.349C77.7787 142.735 80.8076 142.467 84.4016 141.106L85.6706 146.284C82.2843 147.525 77.6281 148.469 73.243 147.947C64.3776 146.892 59.1842 140.57 60.035 133.421C60.9822 125.461 68.3176 121.5 76.2775 122.447C83.5224 123.309 88.3945 128.675 87.6288 135.109C87.504 136.158 87.2306 137.237 86.8142 138.299L66.3188 135.86C66.8103 139.448 70.0572 141.816 74.5376 142.349ZM75.2666 127.693C71.1675 127.205 68.3112 128.46 67.0119 131.254L81.454 132.973C81.169 130.087 78.9844 128.135 75.2666 127.693ZM97.7183 140.225L98.2912 135.411L102.2 135.876C106.442 136.381 108.324 135.59 108.506 134.065C108.653 132.826 107.242 131.691 104.286 131.339C101.331 130.988 97.1914 131.655 93.8391 132.61L92.7164 127.014C95.9201 126.09 100.268 125.302 104.939 125.858C111.469 126.635 115.294 130.232 114.807 134.331C114.568 136.333 113.094 137.753 110.855 138.695C113.442 140.115 115.15 142.01 114.872 144.345C114.231 149.731 107.677 151.997 101.433 151.254C97.2388 150.754 92.5723 148.942 89.667 146.953L92.2564 141.847C95.3104 143.806 99.052 145.266 102.198 145.641C105.773 146.066 108.342 145.598 108.557 143.787C108.716 142.453 107.251 141.36 103.39 140.9L97.7183 140.225ZM147.758 136.561C143.182 136.016 139.438 138.229 138.922 142.567C138.378 147.142 141.862 150.361 146.819 150.95C150.298 151.364 152.944 150.664 156.254 149.656L157.523 154.834C154.078 156.165 149.814 157.059 145.334 156.526C136.468 155.471 131.704 149.2 132.555 142.051C133.502 134.091 140.837 130.13 148.797 131.077C152.753 131.548 156.268 132.884 159.009 134.226L156.814 139.668C153.684 137.943 150.999 136.946 147.758 136.561ZM161.167 138.93L161.819 133.448L185.985 136.324L185.333 141.805L176.372 140.739L174.188 159.09L167.944 158.347L170.128 139.996L161.167 138.93ZM206.967 137.999C213.496 138.776 218.411 144.195 217.492 151.916C216.641 159.066 209.938 164.214 201.93 163.261C199.309 162.949 196.133 161.604 193.883 160.611L192.425 172.861L186.134 172.112L190.331 136.841L196.622 137.59L195.993 142.881C197.957 139.779 202.105 137.42 206.967 137.999ZM204.41 143.64C200.168 143.136 195.715 145.216 195.193 149.601L194.512 155.321C197.133 156.454 199.728 157.392 202.683 157.743C206.783 158.231 210.676 155.166 211.153 151.162C211.663 146.872 208.652 144.145 204.41 143.64ZM235.961 161.558C239.202 161.944 242.231 161.676 245.825 160.315L247.094 165.493C243.708 166.734 239.052 167.678 234.667 167.156C225.801 166.101 220.608 159.78 221.459 152.63C222.406 144.67 229.741 140.709 237.701 141.656C244.946 142.518 249.818 147.884 249.052 154.318C248.928 155.367 248.654 156.446 248.238 157.508L227.742 155.07C228.234 158.657 231.481 161.025 235.961 161.558ZM236.69 146.902C232.591 146.414 229.735 147.669 228.436 150.463L242.878 152.182C242.593 149.296 240.408 147.344 236.69 146.902ZM267.802 150.846C263.226 150.301 259.482 152.514 258.966 156.852C258.421 161.427 261.906 164.646 266.863 165.235C270.342 165.649 272.987 164.949 276.298 163.941L277.567 169.119C274.121 170.45 269.858 171.344 265.377 170.811C256.512 169.756 251.747 163.485 252.598 156.336C253.545 148.376 260.881 144.415 268.841 145.362C272.797 145.833 276.312 147.169 279.052 148.511L276.858 153.953C273.728 152.227 271.043 151.231 267.802 150.846ZM297.126 154.335C292.55 153.791 288.806 156.004 288.29 160.341C287.746 164.917 291.23 168.135 296.187 168.725C299.666 169.139 302.312 168.439 305.622 167.431L306.891 172.609C303.446 173.939 299.182 174.834 294.702 174.3C285.836 173.246 281.072 166.975 281.923 159.825C282.87 151.865 290.205 147.904 298.165 148.851C302.121 149.322 305.636 150.659 308.377 152L306.182 157.443C303.052 155.717 300.367 154.721 297.126 154.335ZM321.36 162.826C323.933 163.132 327.227 164.298 329.191 165.257L329.52 162.492C329.815 160.014 328.393 158.152 325.39 157.795C322.912 157.5 319.159 158.165 315.526 159.038L314.634 153.131C317.703 152.53 322.883 151.648 326.649 152.096C333.178 152.873 336.578 156.806 335.8 163.336L334.78 171.916C334.694 172.63 335.12 173.116 335.787 173.196C336.502 173.281 337.804 172.904 339.271 172.353L339.98 177.368C337.188 178.486 334.215 179.099 332.261 178.867C329.067 178.487 327.999 176.088 328.221 173.407C325.61 175.852 321.727 177.613 317.675 177.131C313.195 176.598 310.21 173.246 310.721 168.956C311.328 163.856 316.45 162.242 321.36 162.826ZM320.366 171.989C322.749 172.272 326.191 171.377 328.692 169.451L328.8 168.545C326.235 167.757 323.499 167.189 321.211 166.917C319.114 166.668 317.422 167.481 317.218 169.197C317.031 170.77 318.364 171.751 320.366 171.989Z" fill="white" data-v-cf1a4231></path><rect x="107" y="61.6445" width="277" height="70" rx="20" transform="rotate(-12.8585 107 61.6445)" fill="#98CBFA" data-v-cf1a4231></rect><path d="M135.816 93.4453L135.249 90.9651C132.098 77.1602 143.252 69.2968 156.81 65.7097L158.641 71.7906C147.204 74.746 140.04 79.3845 140.163 87.0372C142.487 83.8479 145.701 80.4557 150.568 79.3447C157.072 77.8599 163.213 81.037 164.944 88.618C166.439 95.1694 161.676 102.559 153.44 104.439C144.876 106.394 137.61 101.307 135.816 93.4453ZM150.55 85.3062C147.414 86.0219 144.325 88.4502 141.933 91.5566L142.221 92.8201C143.129 96.7978 147.568 100.068 152.201 99.0104C157.208 97.8674 159.474 93.5591 158.673 90.0494C157.765 86.0717 154.715 84.3555 150.55 85.3062ZM185.503 91.0639C188.685 90.3375 191.448 89.0669 194.375 86.577L197.311 91.0272C194.539 93.334 190.471 95.7888 186.166 96.7715C177.462 98.7584 170.446 94.5503 168.843 87.5309C167.059 79.7159 172.636 73.5194 180.451 71.7355C187.564 70.1118 193.957 73.5269 195.399 79.8444C195.634 80.8739 195.739 81.9823 195.704 83.1227L175.581 87.716C177.25 90.9292 181.104 92.068 185.503 91.0639ZM181.263 77.0154C177.238 77.934 174.97 80.0765 174.686 83.1447L188.865 79.908C187.626 77.2859 184.913 76.1822 181.263 77.0154ZM206.621 81.2708L205.542 76.5443L209.379 75.6684C213.544 74.7177 215.051 73.3397 214.709 71.8423C214.432 70.6255 212.721 70.0314 209.819 70.6937C206.918 71.356 203.243 73.3764 200.407 75.4024L197.469 70.5097C200.175 68.5625 204.005 66.359 208.591 65.3122C215.002 63.8487 219.814 65.9505 220.733 69.9749C221.182 71.9404 220.271 73.7731 218.479 75.413C221.392 75.8804 223.637 77.091 224.161 79.384C225.368 84.672 219.957 89.0089 213.827 90.4082C209.709 91.3482 204.705 91.2104 201.3 90.3137L202.022 84.6345C205.557 85.4524 209.572 85.5699 212.66 84.8649C216.17 84.0637 218.432 82.7595 218.026 80.9813C217.727 79.671 215.98 79.1343 212.19 79.9996L206.621 81.2708ZM239.691 69.734L239.124 67.2538C235.973 53.4489 247.127 45.5855 260.685 41.9984L262.516 48.0793C251.079 51.0347 243.915 55.6732 244.038 63.3259C246.362 60.1366 249.576 56.7444 254.443 55.6334C260.947 54.1486 267.088 57.3257 268.819 64.9067C270.314 71.4581 265.551 78.8474 257.315 80.7275C248.751 82.6823 241.485 77.5958 239.691 69.734ZM254.425 61.5949C251.289 62.3106 248.2 64.7389 245.808 67.8453L246.096 69.1088C247.004 73.0865 251.443 76.3566 256.076 75.2991C261.083 74.1561 263.349 69.8478 262.548 66.3381C261.64 62.3604 258.59 60.6442 254.425 61.5949ZM284.42 48.0029C292.235 46.2189 299.988 49.1264 301.772 56.9414C303.374 63.9608 298.605 71.1054 290.135 73.0389C281.665 74.9723 274.267 70.6051 272.665 63.5856C270.881 55.7706 276.605 49.7868 284.42 48.0029ZM285.648 53.3844C280.781 54.4954 277.895 57.8128 278.889 62.1649C279.786 66.0958 284.284 68.7616 288.917 67.7041C293.55 66.6466 296.446 62.293 295.548 58.3621C294.555 54.01 290.515 52.2735 285.648 53.3844ZM327.844 38.9276L333.185 62.3257L327.054 63.7251L322.942 45.7085L315.361 47.439C316.755 57.2138 316.409 66.6967 308.079 68.5981C307.471 68.737 307.19 68.8011 306.571 68.8931L305.48 63.037C306.053 62.9556 306.25 62.9597 307.046 62.7781C312.1 61.6244 310.117 49.9162 308.798 43.2752L327.844 38.9276ZM345.153 59.5939L339.724 60.833L334.383 37.4348L340.513 36.0355L343.985 51.2443L353.897 32.9804L359.372 31.7306L364.713 55.1287L358.583 56.5281L355.101 41.2725L345.153 59.5939Z" fill="white" data-v-cf1a4231></path></svg></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-banner/SectionBannerBadges.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionBannerBadges = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf1a4231"]]);
const SectionBanner_vue_vue_type_style_index_0_scoped_0d1c9740_lang = "";
const _sfc_main$3 = {
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
      _push(`<div class="container-custom" data-v-0d1c9740><img class="banner"${ssrRenderAttr("src", _imports_0)} alt="" data-v-0d1c9740><div class="content-info" data-v-0d1c9740><h2 class="heading" data-v-0d1c9740><span style="${ssrRenderStyle({ "position": "relative", "z-index": "10" })}" data-v-0d1c9740> Вылечим кожу и избавим от высыпания на лице </span>`);
      _push(ssrRenderComponent(SectionBannerBadges, { class: "badges" }, null, _parent));
      _push(`</h2></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-banner/SectionBanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionBanner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0d1c9740"]]);
const SectionTariffCard_vue_vue_type_style_index_0_scoped_b6133102_lang = "";
const _sfc_main$2 = {
  __name: "SectionTariffCard",
  __ssrInlineRender: true,
  props: ["text", "title", "price", "info"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-tariff" }, _attrs))} data-v-b6133102><h6 class="card-tag" data-v-b6133102>Курс</h6><h5 class="card-heading" data-v-b6133102>${ssrInterpolate(props.title)}</h5><p class="card-text" data-v-b6133102>${ssrInterpolate(props.text)}</p>`);
      _push(ssrRenderComponent(CardInfo, {
        text: props.info
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tariff/SectionTariffCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionTariffCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b6133102"]]);
const SectionTariff_vue_vue_type_style_index_0_scoped_478c79e0_lang = "";
const text = `Lorem ipsum dolor sit amet consectetur. Elit mi in nisi tincidunt magna at in fermentum. Dapibus sit cursus ut elit a lobortis pellentesque urna. Tempus eu mattis nibh facilisi amet et vitae quis. Enim pulvinar sed quis porttitor.`;
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/inside/section-tariff/SectionTariff.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionTariff = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-478c79e0"]]);
const inside_vue_vue_type_style_index_0_scoped_ecdc4cab_lang = "";
const _sfc_main = {
  __name: "inside",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionBanner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPreview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTech, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionResult, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionProcedures, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRec, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionDevices, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionStories, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOther, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTariff, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionCircles, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPlaces, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBonus, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, { class: "section-read" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionBanner),
              createVNode(SectionPluses),
              createVNode(SectionInfo),
              createVNode(SectionPreview),
              createVNode(SectionTech),
              createVNode(SectionOffer),
              createVNode(SectionResult),
              createVNode(SectionProcedures),
              createVNode(SectionRec),
              createVNode(SectionMasters),
              createVNode(SectionDevices),
              createVNode(SectionStories),
              createVNode(SectionOther),
              createVNode(SectionTariff),
              createVNode(SectionCircles),
              createVNode(SectionReview),
              createVNode(SectionHelp),
              createVNode(SectionPlaces),
              createVNode(SectionBonus),
              createVNode(SectionRead, { class: "section-read" }),
              createVNode(SectionFaq)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/inside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inside = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ecdc4cab"]]);
export {
  inside as default
};
