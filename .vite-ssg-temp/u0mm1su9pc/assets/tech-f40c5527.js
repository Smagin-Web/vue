import { mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { M as MContainer, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { S as SectionMasters } from "./BigBadge-63213c6d.js";
import { S as SectionPriceItem, a as SectionBonus } from "./SectionPriceItem-e638a647.js";
import { S as SectionRead } from "./SectionRead-58c1d2b2.js";
import { S as SectionHelp } from "./SectionHelp-101f1497.js";
import { S as SectionFaq } from "./SectionFaq-a1a66c85.js";
import { _ as _export_sfc } from "../main.mjs";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { B as BadgeMd } from "./BadgeMd-8f37b5c5.js";
import { M as MainTag } from "./MainTag-1f2dc7ad.js";
import { I as IconPlay } from "./IconPlay-794340eb.js";
import "pinia";
import "emailjs-com";
import "./swiper-c12304a9.js";
import "swiper/vue";
import "./CardMaster-47d8227d.js";
import "./MButtonOutline-8b835ebe.js";
import "./MButtonOutlineBig-941f109f.js";
import "./CardNews-b94ed9ae.js";
import "./SliderVariant1-f48da4d7.js";
import "./IconSliderArrowRight-502e2ffe.js";
import "swiper/modules";
import "./FaqItem-db08f79b.js";
import "vite-ssg";
const SectionPrice_vue_vue_type_style_index_0_scoped_c00ec4b5_lang = "";
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-price/SectionPrice.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SectionPrice = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-c00ec4b5"]]);
const _imports_0$2 = "/assets/picture-89105952.png";
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "668",
    height: "443",
    viewBox: "0 0 668 443",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_3527)"><ellipse cx="334" cy="221.5" rx="234" ry="121.5" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_3527" x="0" y="0" width="668" height="443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_3527"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/PictureShadow.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PictureShadow = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "544",
    height: "600",
    viewBox: "0 0 544 600",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 150C0 67.1573 67.1573 0 150 0H524C535.046 0 544 8.95431 544 20V450C544 532.843 476.843 600 394 600H20C8.95429 600 0 591.046 0 580V150Z" fill="#EDE4DA"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionPictureBg.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SectionPictureBg = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const SectionMainPicture_vue_vue_type_style_index_0_scoped_a6fa18bd_lang = "";
const _sfc_main$5 = {
  __name: "SectionMainPicture",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "picture-wrapper" }, _attrs))} data-v-a6fa18bd>`);
      _push(ssrRenderComponent(SectionPictureBg, { class: "picture-bg" }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0$2)} alt="" class="picture-photo" data-v-a6fa18bd>`);
      _push(ssrRenderComponent(PictureShadow, { class: "picture-shadow" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionMainPicture.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionMainPicture = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a6fa18bd"]]);
const SectionMain_vue_vue_type_style_index_0_scoped_28e1f969_lang = "";
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-main/SectionMain.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionMain = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-28e1f969"]]);
const _imports_0$1 = "/assets/1-48a6245c.png";
const _imports_1 = "/assets/2-8cd1aa72.png";
const _imports_2 = "/assets/3-e6ee3108.png";
const _imports_3 = "/assets/4-d68159f1.png";
const _imports_4 = "/assets/5-927f0a5f.png";
const _imports_5 = "/assets/6-f9d20b06.png";
const _imports_6 = "/assets/photo-f99b9bff.png";
const ListItem_vue_vue_type_style_index_0_scoped_9eafcba5_lang = "";
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "list-item" }, _attrs))} data-v-9eafcba5><div class="number-wrapper" data-v-9eafcba5>`);
  ssrRenderSlot(_ctx.$slots, "img", {}, null, _push, _parent);
  _push(`</div><p class="list-item-text" data-v-9eafcba5>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-pluses/ListItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ListItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9eafcba5"]]);
const SectionPluses_vue_vue_type_style_index_0_scoped_9b0959b8_lang = "";
const _sfc_main$2 = {
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
                  _push3(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0$1,
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
                  _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_1,
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
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
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
                  _push3(`<img${ssrRenderAttr("src", _imports_3)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_3,
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
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4,
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
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} alt="" class="number-img" data-v-9b0959b8${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5,
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
            _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="" class="photo" data-v-9b0959b8${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("h4", { class: "h-xl section-main-heading" }, " Преимущества ультразвукового омоложения SKINOVA PRO "),
              createVNode("div", { class: "content-wrapper" }, [
                createVNode("div", { class: "list" }, [
                  createVNode(ListItem, { "img-src": "./1.png" }, {
                    img: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0$1,
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
                        src: _imports_1,
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
                        src: _imports_2,
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
                        src: _imports_3,
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
                        src: _imports_4,
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
                        src: _imports_5,
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
                      src: _imports_6,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-pluses/SectionPluses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionPluses = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9b0959b8"]]);
const _imports_0 = "/assets/photo-0c683ecc.png";
const SectionBanner_vue_vue_type_style_index_0_scoped_18f1dfaf_lang = "";
const _sfc_main$1 = {
  __name: "SectionBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-banner" }, _attrs))} data-v-18f1dfaf>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="photo" data-v-18f1dfaf${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/tech/section-banner/SectionBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionBanner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18f1dfaf"]]);
const tech_vue_vue_type_style_index_0_scoped_8a6f4f14_lang = "";
const _sfc_main = {
  __name: "tech",
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
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBonus, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionRead, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionFaq, { class: "section-help" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionHelp, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMain),
              createVNode(SectionPluses),
              createVNode(SectionBanner),
              createVNode(SectionPrice),
              createVNode(SectionMasters),
              createVNode(SectionBonus),
              createVNode(SectionRead),
              createVNode(SectionFaq, { class: "section-help" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/tech.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tech = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a6f4f14"]]);
export {
  tech as default
};
