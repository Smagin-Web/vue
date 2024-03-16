import { mergeProps, useSSRContext, ref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { B as ButtonBack } from "./ButtonBack-4168b883.js";
import { _ as _export_sfc } from "../main.mjs";
import { I as IconPlay } from "./IconPlay-794340eb.js";
import { C as CardReviewMaster } from "./CardReviewMaster-c4d61f16.js";
import { M as MButtonOutlineBig } from "./MButtonOutlineBig-941f109f.js";
import { S as SliderVariant1 } from "./SliderVariant1-f48da4d7.js";
import { SwiperSlide } from "swiper/vue";
import { S as SectionMasters } from "./BigBadge-63213c6d.js";
import { S as SectionOffer } from "./SectionOffer-d75924a6.js";
import "pinia";
import "emailjs-com";
import "vite-ssg";
import "./IconSliderArrowRight-502e2ffe.js";
import "swiper/modules";
import "./swiper-c12304a9.js";
import "./CardMaster-47d8227d.js";
import "./MButtonOutline-8b835ebe.js";
import "./MButton-352890a7.js";
const _imports_0 = "/assets/photo-5e94a47c.png";
const SectionMasterList_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMasterList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, _attrs))}><path d="M7.80785 2.17848e-06C8.09892 2.20393e-06 8.34307 0.0986226 8.54031 0.295862C8.73755 0.493101 8.83583 0.73691 8.83514 1.02729L8.83514 12.5072L13.8432 7.4992C14.0486 7.29374 14.2928 7.19101 14.5756 7.19101C14.8585 7.19101 15.1023 7.29374 15.307 7.4992C15.5125 7.70466 15.6152 7.94436 15.6152 8.2183C15.6152 8.49224 15.5125 8.73194 15.307 8.9374L8.52695 15.7175C8.42422 15.8202 8.31294 15.8928 8.19309 15.9353C8.07324 15.9777 7.94482 15.9993 7.80785 16C7.67088 16 7.53802 15.9784 7.40927 15.9353C7.28051 15.8921 7.17367 15.8195 7.08875 15.7175L0.308657 8.9374C0.1032 8.73194 0.000469864 8.49224 0.000469888 8.2183C0.000469912 7.94436 0.1032 7.70466 0.308657 7.4992C0.514115 7.29374 0.758266 7.19101 1.04111 7.19101C1.32396 7.19101 1.56777 7.29374 1.77254 7.4992L6.78056 12.5072L6.78057 1.02729C6.78057 0.736225 6.87919 0.492073 7.07643 0.294834C7.27366 0.0975954 7.51747 -0.000681631 7.80785 2.17848e-06Z" fill="#AE8C8E"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/IconArrow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconArrow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const SectionMaster_vue_vue_type_style_index_0_scoped_f47f5590_lang = "";
const _sfc_main$2 = {
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
            _push2(ssrRenderComponent(_sfc_main$4, { items: skills }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, { items: skillsTwo }, null, _parent2, _scopeId));
            _push2(`</div><div class="line" data-v-f47f5590${_scopeId}></div><h5 class="heading-2" data-v-f47f5590${_scopeId}>Образование</h5>`);
            _push2(ssrRenderComponent(_sfc_main$4, { items: eduSkills }, null, _parent2, _scopeId));
            _push2(`<div class="line" data-v-f47f5590${_scopeId}></div><h5 class="heading-2" data-v-f47f5590${_scopeId}>Дополнительное образование и сертификаты</h5>`);
            _push2(ssrRenderComponent(_sfc_main$4, { items: moreSkills }, null, _parent2, _scopeId));
            if (isShowMore.value) {
              _push2(ssrRenderComponent(_sfc_main$4, { items: moreSkills }, null, _parent2, _scopeId));
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
            _push2(`</div><div class="content-right" data-v-f47f5590${_scopeId}><div class="photo-wrapper" data-v-f47f5590${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="photo" data-v-f47f5590${_scopeId}>`);
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
                    createVNode(_sfc_main$4, { items: skills }),
                    createVNode(_sfc_main$4, { items: skillsTwo })
                  ]),
                  createVNode("div", { class: "line" }),
                  createVNode("h5", { class: "heading-2" }, "Образование"),
                  createVNode(_sfc_main$4, { items: eduSkills }),
                  createVNode("div", { class: "line" }),
                  createVNode("h5", { class: "heading-2" }, "Дополнительное образование и сертификаты"),
                  createVNode(_sfc_main$4, { items: moreSkills }),
                  isShowMore.value ? (openBlock(), createBlock(_sfc_main$4, {
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
                      src: _imports_0,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMaster.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionMaster = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f47f5590"]]);
const SectionMasterReview_vue_vue_type_style_index_0_scoped_f2fec9ac_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/master/SectionMasterReview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionMasterReview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f2fec9ac"]]);
const _sfc_main = {
  __name: "master",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMaster, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasterReview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionMasters, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOffer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMaster),
              createVNode(SectionMasterReview),
              createVNode(SectionMasters),
              createVNode(SectionOffer)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/master.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
