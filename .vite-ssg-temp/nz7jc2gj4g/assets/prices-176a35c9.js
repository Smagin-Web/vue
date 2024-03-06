import { useSSRContext, mergeProps, withCtx, createTextVNode, ref, unref, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { _ as _export_sfc } from "../main.mjs";
import { B as BadgeMd } from "./BadgeMd-8f37b5c5.js";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
const PricesSidebar_vue_vue_type_style_index_0_scoped_a60d4880_lang = "";
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesSidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PricesSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a60d4880"]]);
const PricesCard_vue_vue_type_style_index_0_scoped_3eed094b_lang = "";
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PricesCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3eed094b"]]);
const PricesSidebarMobile_vue_vue_type_style_index_0_scoped_328797b1_lang = "";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/PricesSidebarMobile.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PricesSidebarMobile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-328797b1"]]);
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
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/prices/SectionPrices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionPrices = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c571e4d9"]]);
const _sfc_main = {
  __name: "prices",
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/prices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
