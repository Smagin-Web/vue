import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { S as SectionReviewPacients } from "./SectionReviewPacients-0ee2c30f.js";
import { S as SectionCircles, a as SectionReview } from "./SectionReview-dd77bd4a.js";
import { S as SectionResult, a as SectionStories, b as SectionOther } from "./SectionOther-b10c8342.js";
import { S as SectionMasters } from "./BigBadge-63213c6d.js";
import { S as SectionOffer } from "./SectionOffer-d75924a6.js";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { C as CardInfo } from "./CardInfo-493a4eeb.js";
import { C as CardLink } from "./CardLink-77a26580.js";
import { I as IconPlay } from "./IconPlay-794340eb.js";
import { B as BadgeMd } from "./BadgeMd-8f37b5c5.js";
import { M as MainTag } from "./MainTag-1f2dc7ad.js";
import { _ as _export_sfc } from "../main.mjs";
import "pinia";
import "emailjs-com";
import "./swiper-c12304a9.js";
import "swiper/vue";
import "./CardMaster-47d8227d.js";
import "./MButtonOutline-8b835ebe.js";
import "./MButtonOutlineBig-941f109f.js";
import "./MButton-352890a7.js";
import "vite-ssg";
const _imports_0 = "/assets/card-photo-6367f044.png";
const SectionDevicesCard_vue_vue_type_style_index_0_scoped_7e980470_lang = "";
const _sfc_main$2 = {
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
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="card-photo" data-v-7e980470></div>`);
      _push(ssrRenderComponent(CardInfo, {
        title: "Время процедуры",
        icon: "time",
        text: "60 минут"
      }, null, _parent));
      _push(ssrRenderComponent(CardInfo, {
        title: "Стоимость",
        icon: "pay",
        text: "от 4 500₽"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/devices/SectionDevicesCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionDevicesCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7e980470"]]);
const SectionDevices_vue_vue_type_style_index_0_scoped_012d919a_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/devices/SectionDevices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionDevices = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-012d919a"]]);
const _sfc_main = {
  __name: "devices",
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
            _push2(ssrRenderComponent(SectionOther, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
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
              createVNode(SectionOther),
              createVNode(SectionMasters),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/devices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
