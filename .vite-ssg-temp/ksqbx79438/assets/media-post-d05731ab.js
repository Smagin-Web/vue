import { mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { S as SectionFaq } from "./SectionFaq-a1a66c85.js";
import { S as SectionRec } from "./SectionRec-434d765e.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { B as ButtonBack } from "./ButtonBack-4168b883.js";
import { _ as _export_sfc } from "../main.mjs";
import { C as CardNews } from "./CardNews-b94ed9ae.js";
import { M as MButtonOutline } from "./MButtonOutline-8b835ebe.js";
import { M as MButton } from "./MButton-352890a7.js";
import { S as SliderVariant1 } from "./SliderVariant1-f48da4d7.js";
import { SwiperSlide } from "swiper/vue";
import "pinia";
import "emailjs-com";
import "./FaqItem-db08f79b.js";
import "./CardInfo-493a4eeb.js";
import "vite-ssg";
import "./IconSliderArrowRight-502e2ffe.js";
import "swiper/modules";
import "./swiper-c12304a9.js";
const _imports_0$3 = "/assets/photo-0cdd16a0.png";
const SectionAbout_vue_vue_type_style_index_0_scoped_384e1e13_lang = "";
const _sfc_main$c = {
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
            _push2(`<!--]--></ol></div><div class="photo-wrapper" data-v-384e1e13${_scopeId}><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="photo" data-v-384e1e13${_scopeId}></div></div><p class="text-sm" data-v-384e1e13${_scopeId}> В разные периоды жизни, будь то подростковый возраст или зрелые годы, люди сталкиваются с проблемой прыщей на лице. Это хроническое воспалительное заболевание кожи, проявляющееся в виде различных элементов, таких как черные точки, белые головки, папулы, пустулы, узлы и кисты. Они могут вызывать множество неудобств, начиная от легкого дискомфорта и заканчивая серьезными комплексами. Особенно это актуально для подростков, для которых внешний вид играет важную роль в социализации. Однако, данная проблема актуальна и для взрослых, угревая сыпь может появиться в любом возрасте и стать настоящим испытанием для психики человека. <br data-v-384e1e13${_scopeId}> Прыщи на лице, также известные как акне или угревая сыпь — это серьезная неприятность для человека, которая влияет не только на его внешний вид, но и на восприятие окружающих. Но важно помнить, что это распространенная проблема, и существует множество способов борьбы с ней. </p>`);
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
                    src: _imports_0$3,
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-about/SectionAbout.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const SectionAbout = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-384e1e13"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8374 8.75C17.5604 8.75 17.3046 8.89865 17.1674 9.13937L11.5908 18.9282C10.8516 20.2257 10.5414 21.7237 10.7045 23.2082L11.2931 28.5642C11.3978 29.5172 12.1459 30.272 13.0979 30.3853L16.6263 30.805C18.9556 31.0822 21.3172 30.8418 23.5431 30.1015C24.6424 29.736 25.5227 28.9017 25.9471 27.8237L28.7871 20.606C28.8566 20.4297 28.9046 20.2455 28.9301 20.0575C29.1454 18.4707 27.7564 17.132 26.1786 17.4062L20.4856 18.3948C18.6872 18.7072 17.1341 17.1203 17.4851 15.3291L18.5941 9.6693C18.6874 9.19302 18.3227 8.75 17.8374 8.75ZM14.9952 7.90185C15.577 6.8806 16.662 6.25002 17.8374 6.25C19.8964 6.24998 21.4432 8.12947 21.0474 10.15L19.9384 15.8098C19.9336 15.834 19.9362 15.8488 19.9396 15.8595C19.9436 15.8726 19.9521 15.8879 19.9661 15.9022C19.9799 15.9164 19.9951 15.9252 20.0081 15.9296C20.0186 15.9331 20.0334 15.936 20.0577 15.9318L25.7507 14.943C28.9944 14.3796 31.8502 17.1315 31.4074 20.3938C31.3549 20.7802 31.2562 21.1587 31.1136 21.5215L28.2734 28.7392C27.5779 30.5065 26.1344 31.8743 24.3321 32.4738C21.7574 33.3302 19.0254 33.608 16.331 33.2875L12.8026 32.8678C10.6956 32.6172 9.0398 30.9465 8.80803 28.8373L8.21946 23.4812C7.99876 21.4728 8.41846 19.4462 9.4186 17.6905L14.9952 7.90185Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/IconLike.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const IconLike = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4]]);
const MediaInfoWidget_vue_vue_type_style_index_0_scoped_0a44182f_lang = "";
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const MediaInfoWidget = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-0a44182f"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none"
  }, _attrs))}><path d="M20 17.9141C20.6903 17.9141 21.25 18.4737 21.25 19.1641V27.4974C21.25 28.1877 20.6903 28.7474 20 28.7474C19.3097 28.7474 18.75 28.1877 18.75 27.4974V19.1641C18.75 18.4737 19.3097 17.9141 20 17.9141Z" fill="#6D6364"></path><path d="M19.9997 14.9974C20.9202 14.9974 21.6663 14.2512 21.6663 13.3307C21.6663 12.4103 20.9202 11.6641 19.9997 11.6641C19.0792 11.6641 18.333 12.4103 18.333 13.3307C18.333 14.2512 19.0792 14.9974 19.9997 14.9974Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.41699 19.9974C5.41699 11.9432 11.9462 5.41406 20.0003 5.41406C28.0545 5.41406 34.5837 11.9432 34.5837 19.9974C34.5837 28.0516 28.0545 34.5807 20.0003 34.5807C11.9462 34.5807 5.41699 28.0516 5.41699 19.9974ZM20.0003 7.91406C13.3269 7.91406 7.91699 13.324 7.91699 19.9974C7.91699 26.6709 13.3269 32.0807 20.0003 32.0807C26.6738 32.0807 32.0837 26.6709 32.0837 19.9974C32.0837 13.324 26.6738 7.91406 20.0003 7.91406Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/IconInfo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const IconInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const MediaInfoWidget2_vue_vue_type_style_index_0_scoped_be0bf792_lang = "";
const _sfc_main$8 = {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget2.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MediaInfoWidget2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-be0bf792"]]);
const _imports_0$2 = "/assets/avatar-134e9acb.png";
const MediaInfoWidget3_vue_vue_type_style_index_0_scoped_7096edff_lang = "";
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "widget" }, _attrs))} data-v-7096edff><div class="widget-header" data-v-7096edff><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="widget-header-avatar" data-v-7096edff><div data-v-7096edff><h6 class="h-xs widget-header-title" data-v-7096edff>Ольга Заика</h6><p class="text-mini" data-v-7096edff> Врач – косметолог, дерматовенеролог , член общества специалистов эстетической медицины, сертифицированный национальный тренер по аппаратной и инъекционной косметологии компании. </p></div></div><p class="text-sm" data-v-7096edff> В нашей клинике каждому пациенту предоставляется индивидуальный подход. Мы предлагаем широкий спектр самых современных методов для лечения акне, гарантируя качественный результат. Преимущества работы с нами – это профессионализм и забота о здоровье вашей кожи. </p></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/MediaInfoWidget3.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MediaInfoWidget3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7096edff"]]);
const SectionMediaInfo_vue_vue_type_style_index_0_scoped_bead1d70_lang = "";
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-media-info/SectionMediaInfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SectionMediaInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bead1d70"]]);
const SectionOtherPublic_vue_vue_type_style_index_0_scoped_4660a82d_lang = "";
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other-public/SectionOtherPublic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionOtherPublic = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4660a82d"]]);
const _imports_0$1 = "/assets/tech-328fcd19.png";
const CardSale_vue_vue_type_style_index_0_scoped_b8dd41fc_lang = "";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "prices" }, _attrs))} data-v-b8dd41fc><div class="price-old-wrapper" data-v-b8dd41fc><h4 class="price-old" data-v-b8dd41fc>2 500₽</h4></div><h4 class="price-new" data-v-b8dd41fc>990₽</h4></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/card-elements/CardSale.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CardSale = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b8dd41fc"]]);
const SectionService_vue_vue_type_style_index_0_scoped_cd3cd7bb_lang = "";
const _sfc_main$3 = {
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
            _push2(`</div></div><div class="service-card-right" data-v-cd3cd7bb${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="service-card-img" data-v-cd3cd7bb${_scopeId}>`);
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
                    src: _imports_0$1,
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-service/SectionService.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionService = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cd3cd7bb"]]);
const _imports_0 = "/assets/photo-b0053034.png";
const CardOther_vue_vue_type_style_index_0_scoped_d167f012_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-other" }, _attrs))} data-v-d167f012><a class="card-other-link" href="#" data-v-d167f012></a><div class="card-other-photo-wrapper" data-v-d167f012><img${ssrRenderAttr("src", _imports_0)} class="card-other-photo" alt="" data-v-d167f012></div><h6 class="card-other-title" data-v-d167f012>Фотоомоложение</h6></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other/CardOther.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardOther = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d167f012"]]);
const SectionOther_vue_vue_type_style_index_0_scoped_c18249b9_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media-post/section-other/SectionOther.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionOther = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c18249b9"]]);
const _sfc_main = {
  __name: "media-post",
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
            _push2(ssrRenderComponent(SectionFaq, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionOtherPublic, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionAbout),
              createVNode(SectionMediaInfo),
              createVNode(SectionService),
              createVNode(SectionOther),
              createVNode(SectionRec),
              createVNode(SectionFaq),
              createVNode(SectionOtherPublic)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/media-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
