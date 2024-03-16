import { useSSRContext, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { _ as _export_sfc } from "../main.mjs";
import { S as SectionTour } from "./SectionTour-e14fa69a.js";
import { S as SectionReviewPacients } from "./SectionReviewPacients-0ee2c30f.js";
import { S as SectionPluses } from "./SectionPluses-96a79b71.js";
import { S as SectionCircles, a as SectionReview } from "./SectionReview-dd77bd4a.js";
import { S as SectionRead } from "./SectionRead-58c1d2b2.js";
import { S as SectionPlaces } from "./SectionPlaces-2060a424.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
import "swiper/vue";
import "swiper/modules";
import "./swiper-c12304a9.js";
import "./IconPlay-794340eb.js";
import "./CardNews-b94ed9ae.js";
import "./SliderVariant1-f48da4d7.js";
import "./IconSliderArrowRight-502e2ffe.js";
import "./CardPlace-ea87436f.js";
import "./MButtonOutlineBig-941f109f.js";
const _imports_0 = "/assets/photo-6e8459e6.png";
const SectionClinicInfoRight_vue_vue_type_style_index_0_scoped_baae7060_lang = "";
const _sfc_main$5 = {
  __name: "SectionClinicInfoRight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-clinic-right" }, _attrs))} data-v-baae7060><div class="content-photo-wrapper" data-v-baae7060><img${ssrRenderAttr("src", _imports_0)} alt="" class="content-photo" data-v-baae7060></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-clinic-info/SectionClinicInfoRight.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionClinicInfoRight = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-baae7060"]]);
const SectionClinicInfo_vue_vue_type_style_index_0_scoped_abc167a9_lang = "";
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-clinic-info/SectionClinicInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionClinicInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-abc167a9"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8125 3.125C17.8125 2.95241 17.6726 2.8125 17.5 2.8125H8.75C6.85153 2.8125 5.3125 4.35153 5.3125 6.25V23.75C5.3125 25.6485 6.85153 27.1875 8.75 27.1875H21.25C23.1485 27.1875 24.6875 25.6485 24.6875 23.75V11.4338C24.6875 11.2612 24.5476 11.1213 24.375 11.1213H18.75C18.2323 11.1213 17.8125 10.7016 17.8125 10.1838V3.125ZM18.75 15.3125C19.2677 15.3125 19.6875 15.7323 19.6875 16.25C19.6875 16.7677 19.2677 17.1875 18.75 17.1875H11.25C10.7322 17.1875 10.3125 16.7677 10.3125 16.25C10.3125 15.7323 10.7322 15.3125 11.25 15.3125H18.75ZM18.75 20.3125C19.2677 20.3125 19.6875 20.7323 19.6875 21.25C19.6875 21.7677 19.2677 22.1875 18.75 22.1875H11.25C10.7322 22.1875 10.3125 21.7677 10.3125 21.25C10.3125 20.7323 10.7322 20.3125 11.25 20.3125H18.75Z" fill="#6D6364"></path><path d="M19.6875 3.53015C19.6875 3.29953 19.9283 3.1531 20.1078 3.29797C20.2589 3.41998 20.3948 3.56293 20.5106 3.72442L24.2771 8.97179C24.3629 9.09126 24.27 9.2463 24.1229 9.2463H20C19.8274 9.2463 19.6875 9.10639 19.6875 8.9338V3.53015Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegalListIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionLegalListIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const SectionLegalList_vue_vue_type_style_index_0_scoped_6f271c84_lang = "";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegalList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionLegalList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6f271c84"]]);
const SectionLegal_vue_vue_type_style_index_0_scoped_53257d52_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-legal/SectionLegal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionLegal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-53257d52"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionClinicInfo, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionPluses, { "more-text": "Лицензия № ЛО-50-01-010568 от 05.02.2019" }, null, _parent2, _scopeId));
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
              createVNode(SectionPluses, { "more-text": "Лицензия № ЛО-50-01-010568 от 05.02.2019" }),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
