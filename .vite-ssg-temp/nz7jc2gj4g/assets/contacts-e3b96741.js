import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { _ as _export_sfc } from "../main.mjs";
import { S as SectionTour } from "./SectionTour-e14fa69a.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
import "swiper/vue";
import "swiper/modules";
import "./swiper-c12304a9.js";
const CardInfo_vue_vue_type_style_index_0_scoped_4353e612_lang = "";
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-info" }, _attrs))} data-v-4353e612><p class="text-sm card-text" data-v-4353e612> ООО «ФЭЙС КОНЦЕПТ» <br data-v-4353e612> ИНН 5041207701 <br data-v-4353e612> ОГРН 1185053020459 </p><a href="https://disk.yandex.ru/d/mF_BJuNTm2_dSQ" class="card-item" data-v-4353e612><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" data-v-4353e612><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8125 3.125C17.8125 2.95241 17.6726 2.8125 17.5 2.8125H8.75C6.85153 2.8125 5.3125 4.35153 5.3125 6.25V23.75C5.3125 25.6485 6.85153 27.1875 8.75 27.1875H21.25C23.1485 27.1875 24.6875 25.6485 24.6875 23.75V11.4338C24.6875 11.2612 24.5476 11.1213 24.375 11.1213H18.75C18.2323 11.1213 17.8125 10.7016 17.8125 10.1838V3.125ZM18.75 15.3125C19.2677 15.3125 19.6875 15.7323 19.6875 16.25C19.6875 16.7677 19.2677 17.1875 18.75 17.1875H11.25C10.7322 17.1875 10.3125 16.7677 10.3125 16.25C10.3125 15.7323 10.7322 15.3125 11.25 15.3125H18.75ZM18.75 20.3125C19.2677 20.3125 19.6875 20.7323 19.6875 21.25C19.6875 21.7677 19.2677 22.1875 18.75 22.1875H11.25C10.7322 22.1875 10.3125 21.7677 10.3125 21.25C10.3125 20.7323 10.7322 20.3125 11.25 20.3125H18.75Z" fill="black" data-v-4353e612></path><path d="M19.6875 3.53015C19.6875 3.29953 19.9283 3.1531 20.1078 3.29797C20.2589 3.41998 20.3948 3.56293 20.5106 3.72442L24.2771 8.97179C24.3629 9.09126 24.27 9.2463 24.1229 9.2463H20C19.8274 9.2463 19.6875 9.10639 19.6875 8.9338V3.53015Z" fill="black" data-v-4353e612></path></svg> Карточка реквизитов </a></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/CardInfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CardInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4353e612"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none"
  }, _attrs))}><path d="M51.2563 8.73015C48.4921 5.95194 45.1995 3.74917 41.5708 2.25032C37.942 0.75148 34.0496 -0.0134403 30.1206 0.000178708C13.6583 0.000178708 0.241207 13.3501 0.241207 29.7301C0.241207 34.9801 1.62814 40.0801 4.22111 44.58L0 60L15.8291 55.86C20.201 58.23 25.1156 59.49 30.1206 59.49C46.5829 59.49 60 46.14 60 29.7601C60 21.8101 56.8945 14.3401 51.2563 8.73015ZM30.1206 54.45C25.6583 54.45 21.2864 53.25 17.4573 51L16.5528 50.46L7.14573 52.92L9.64824 43.8L9.04523 42.8701C6.56607 38.931 5.24967 34.3778 5.24623 29.7301C5.24623 16.1101 16.402 5.01016 30.0904 5.01016C36.7236 5.01016 42.9648 7.59016 47.6382 12.2701C49.9522 14.562 51.786 17.2881 53.0333 20.2904C54.2807 23.2927 54.9167 26.5114 54.9045 29.7601C54.9648 43.3801 43.809 54.45 30.1206 54.45ZM43.7487 35.9701C42.995 35.6101 39.3166 33.8101 38.6533 33.5401C37.9598 33.3001 37.4774 33.1801 36.9648 33.9001C36.4523 34.6501 35.0352 36.3301 34.6131 36.8101C34.191 37.3201 33.7387 37.3801 32.9849 36.9901C32.2312 36.6301 29.8191 35.8201 26.9849 33.3001C24.7538 31.3201 23.2764 28.8901 22.8241 28.1401C22.402 27.3901 22.7638 27.0001 23.1558 26.6101C23.4874 26.2801 23.9095 25.7401 24.2714 25.3201C24.6332 24.9001 24.7839 24.5701 25.0251 24.0901C25.2663 23.5801 25.1457 23.1601 24.9648 22.8001C24.7839 22.4401 23.2764 18.7801 22.6734 17.2801C22.0703 15.8401 21.4372 16.0201 20.9849 15.9901H19.5377C19.0251 15.9901 18.2412 16.1701 17.5477 16.9201C16.8844 17.6701 14.9548 19.4701 14.9548 23.1301C14.9548 26.7901 17.6382 30.3301 18 30.8101C18.3618 31.3201 23.2764 38.8201 30.7538 42.0301C32.5327 42.8101 33.9196 43.2601 35.005 43.59C36.7839 44.16 38.4121 44.07 39.7085 43.89C41.1558 43.68 44.1407 42.0901 44.7437 40.3501C45.3769 38.6101 45.3769 37.1401 45.1658 36.8101C44.9548 36.4801 44.5025 36.3301 43.7487 35.9701Z" fill="black"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/IconWhatsApp.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconWhatsApp = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "60",
    height: "54",
    viewBox: "0 0 60 54",
    fill: "none"
  }, _attrs))}><path d="M55.5581 0.00551817C54.8171 0.0594284 54.0898 0.233267 53.4045 0.520251H53.3953C52.7374 0.78108 49.6098 2.09677 44.8548 4.09107L27.8155 11.2673C15.5889 16.4147 3.56997 21.4835 3.56997 21.4835L3.71308 21.4281C3.71308 21.4281 2.88442 21.7005 2.01884 22.2937C1.48409 22.634 1.02394 23.0792 0.666223 23.6025C0.24151 24.2257 -0.100107 25.179 0.0268456 26.1646C0.234586 27.8311 1.31483 28.8306 2.0904 29.3823C2.87519 29.9409 3.62306 30.2017 3.62306 30.2017H3.64152L14.9126 33.9987C15.4181 35.6214 18.3472 45.2513 19.0512 47.4695C19.4667 48.7944 19.8706 49.6231 20.3761 50.2555C20.6208 50.5787 20.907 50.8487 21.2509 51.0657C21.4297 51.1697 21.6204 51.2519 21.8188 51.3104L21.7034 51.2827C21.738 51.2919 21.7657 51.3196 21.7911 51.3288C21.8834 51.3542 21.9457 51.3635 22.0634 51.3819C23.8477 51.9221 25.2811 50.8141 25.2811 50.8141L25.3619 50.7495L32.0165 44.6904L43.1698 53.247L43.4237 53.3555C45.7481 54.3757 48.1025 53.8079 49.3466 52.8061C50.6 51.7974 51.087 50.5071 51.087 50.5071L51.1678 50.2994L59.7867 6.14539C60.0314 5.05591 60.0937 4.03568 59.8237 3.04545C59.5451 2.04328 58.9022 1.18134 58.0209 0.628738C57.281 0.1789 56.4229 -0.038226 55.5581 0.00551817ZM55.3249 4.73737C55.3157 4.88279 55.3434 4.86663 55.2788 5.14593V5.17132L46.7407 48.866C46.7037 48.9283 46.6414 49.0645 46.4706 49.2007C46.2905 49.3438 46.1474 49.4338 45.3973 49.136L31.7557 38.6775L23.5153 46.1884L25.2465 35.132L47.5347 14.358C48.4534 13.504 48.1464 13.324 48.1464 13.324C48.211 12.276 46.7591 13.017 46.7591 13.017L18.6542 30.4279L18.645 30.3817L5.17418 25.8461V25.8368L5.13956 25.8299C5.16317 25.8221 5.1863 25.8128 5.20881 25.8022L5.28267 25.7653L5.35422 25.7399C5.35422 25.7399 17.3824 20.671 29.609 15.5237C35.7304 12.9454 41.898 10.3487 46.6414 8.34513C49.4545 7.16102 52.2706 5.98382 55.0895 4.81355C55.2788 4.73968 55.1887 4.73737 55.3249 4.73737Z" fill="black"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/IconTelegram.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const SectionContactsCard_vue_vue_type_style_index_0_scoped_e3719c35_lang = "";
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-contacts-card/SectionContactsCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionContactsCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e3719c35"]]);
const MapBadge_vue_vue_type_style_index_0_scoped_335adcee_lang = "";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-map/MapBadge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MapBadge = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-335adcee"]]);
const SectionMap_vue_vue_type_style_index_0_scoped_96dbbfed_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/contacts/section-map/SectionMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-96dbbfed"]]);
const _sfc_main = {
  __name: "contacts",
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
