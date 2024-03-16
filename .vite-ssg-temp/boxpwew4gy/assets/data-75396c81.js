import { useSSRContext, withAsyncContext, mergeProps, unref, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderSuspense } from "vue/server-renderer";
import { M as MButton } from "./MButton-352890a7.js";
import { _ as _export_sfc } from "../main.mjs";
const CardInfo_vue_vue_type_style_index_0_scoped_6370dba3_lang = "";
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CardInfo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6370dba3"]]);
const _imports_0 = "/assets/slider-86d3abd1.png";
const _imports_1 = "/assets/slider-picture-svg-1386ae23.png";
const CardImage_vue_vue_type_style_index_0_scoped_c873bfb6_lang = "";
const _sfc_main$2 = {
  __name: "CardImage",
  __ssrInlineRender: true,
  props: ["iconSrc", "iconBigSrc", "iconPng"],
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const getSrc = (name) => {
      if (name !== void 0) {
        const path = `${name}`;
        const modules = /* @__PURE__ */ Object.assign({ "./icon1.svg": () => import("./icon1-b326f76a.js"), "./icon2.svg": () => import("./icon2-5edb38fc.js"), "./icon3.svg": () => import("./icon3-f75595b4.js"), "./icon4.svg": () => import("./icon4-4d0079f9.js"), "./icon5.svg": () => import("./icon5-d40790f0.js"), "./icon6.svg": () => import("./icon6-de307f2c.js"), "./icon7.svg": () => import("./icon7-079859ec.js"), "./icon8.svg": () => import("./icon8-2938ede3.js") });
        return modules[path]().then((mod) => mod.default);
      }
    };
    const icon = ([__temp, __restore] = withAsyncContext(() => getSrc(props.iconSrc || props.iconBigSrc || void 0)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-image-wrapper" }, _attrs))} data-v-c873bfb6><img${ssrRenderAttr("src", _imports_0)} alt="" class="card-image" data-v-c873bfb6>`);
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
        _push(`<img class="svg-picture"${ssrRenderAttr("src", _imports_1)} alt="" data-v-c873bfb6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardImage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c873bfb6"]]);
const CardBadges_vue_vue_type_style_index_0_scoped_2c3f94af_lang = "";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CardBadges.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardBadges = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2c3f94af"]]);
const CustomSliderCardTemplate_vue_vue_type_style_index_0_scoped_3a94d741_lang = "";
const _sfc_main = {
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
      _push(ssrRenderComponent(CardInfo, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/main/section-slider/CustomSliderCardTemplate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CustomSliderCardTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a94d741"]]);
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
export {
  CustomSliderCardTemplate as C,
  dataSlides as d
};
