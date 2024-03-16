import { mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { C as CardNews } from "./CardNews-b94ed9ae.js";
import { W as WidgetFilters } from "./WidgetFilters-657ed67a.js";
import { _ as _export_sfc } from "../main.mjs";
import "pinia";
import "emailjs-com";
import "vite-ssg";
const SectionMedia_vue_vue_type_style_index_0_scoped_c645518b_lang = "";
const _sfc_main$5 = {
  __name: "SectionMedia",
  __ssrInlineRender: true,
  setup(__props) {
    const filtersArray = ["Все публикации", "Новости", "Статьи"];
    const breadCrumbsList = ["Главная", "Медиа"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-media" }, _attrs))} data-v-c645518b>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: breadCrumbsList }, null, _parent2, _scopeId));
            _push2(`<h1 class="h-xxl heading" data-v-c645518b${_scopeId}>Медиа</h1>`);
            _push2(ssrRenderComponent(WidgetFilters, { items: filtersArray }, null, _parent2, _scopeId));
            _push2(`<div class="cards" data-v-c645518b${_scopeId}>`);
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isArticle: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CardNews, {
              class: "section-media-card",
              isNews: true
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: breadCrumbsList }),
              createVNode("h1", { class: "h-xxl heading" }, "Медиа"),
              createVNode(WidgetFilters, { items: filtersArray }),
              createVNode("div", { class: "cards" }, [
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isArticle: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
                }),
                createVNode(CardNews, {
                  class: "section-media-card",
                  isNews: true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-media/SectionMedia.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionMedia = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c645518b"]]);
const _imports_0 = "/assets/shadow-f9378ac9.png";
const _imports_1 = "/assets/picture-5c47c79f.png";
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="#0077FF"></rect><path d="M53.8397 39.3597C43.5899 39.3597 37.7436 32.3328 37.5 20.6401H42.6343C42.8029 29.2223 46.588 32.8575 49.5861 33.607V20.6401H54.4208V28.0418C57.3814 27.7232 60.4916 24.3503 61.5409 20.6401H66.3755C65.5698 25.2123 62.1969 28.5852 59.7984 29.9718C62.1969 31.0961 66.0384 34.038 67.5 39.3597H62.1781C61.0351 35.7994 58.1872 33.0449 54.4208 32.6701V39.3597H53.8397Z" fill="white"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/VkIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="#FF0000"></rect><path d="M40.5 43.6433L64.5 30L40.5 16.3564V43.6433Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/YouTubeIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const YouTubeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "60",
    viewBox: "0 0 105 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="105" height="60" rx="30" fill="url(#paint0_radial_1_3799)"></rect><rect width="105" height="60" rx="30" fill="url(#paint1_radial_1_3799)"></rect><path d="M52.5012 15C48.4275 15 47.9163 15.0178 46.3163 15.0906C44.7194 15.1638 43.6294 15.4166 42.6756 15.7875C41.6891 16.1706 40.8522 16.6831 40.0184 17.5172C39.1841 18.3509 38.6716 19.1878 38.2872 20.1741C37.9153 21.1281 37.6622 22.2184 37.5903 23.8147C37.5187 25.4147 37.5 25.9262 37.5 30C37.5 34.0737 37.5181 34.5834 37.5906 36.1834C37.6641 37.7803 37.9169 38.8703 38.2875 39.8241C38.6709 40.8106 39.1834 41.6475 40.0175 42.4813C40.8509 43.3156 41.6878 43.8294 42.6737 44.2125C43.6281 44.5834 44.7184 44.8363 46.315 44.9094C47.915 44.9822 48.4259 45 52.4994 45C56.5734 45 57.0831 44.9822 58.6831 44.9094C60.28 44.8363 61.3713 44.5834 62.3256 44.2125C63.3119 43.8294 64.1475 43.3156 64.9809 42.4813C65.8153 41.6475 66.3278 40.8106 66.7122 39.8244C67.0809 38.8703 67.3341 37.78 67.4091 36.1838C67.4809 34.5837 67.4997 34.0737 67.4997 30C67.4997 25.9262 67.4809 25.415 67.4091 23.815C67.3341 22.2181 67.0809 21.1281 66.7122 20.1744C66.3278 19.1878 65.8153 18.3509 64.9809 17.5172C64.1466 16.6828 63.3122 16.1703 62.3247 15.7875C61.3684 15.4166 60.2778 15.1638 58.6809 15.0906C57.0809 15.0178 56.5716 15 52.4966 15H52.5012ZM51.1556 17.7031C51.555 17.7025 52.0006 17.7031 52.5012 17.7031C56.5062 17.7031 56.9809 17.7175 58.5625 17.7894C60.025 17.8563 60.8187 18.1006 61.3475 18.3059C62.0475 18.5778 62.5466 18.9028 63.0713 19.4278C63.5963 19.9528 63.9212 20.4528 64.1937 21.1528C64.3991 21.6809 64.6437 22.4747 64.7103 23.9372C64.7822 25.5184 64.7978 25.9934 64.7978 29.9966C64.7978 33.9997 64.7822 34.4747 64.7103 36.0559C64.6434 37.5184 64.3991 38.3122 64.1937 38.8403C63.9219 39.5403 63.5963 40.0387 63.0713 40.5634C62.5463 41.0884 62.0478 41.4134 61.3475 41.6853C60.8194 41.8916 60.025 42.1353 58.5625 42.2022C56.9813 42.2741 56.5062 42.2897 52.5012 42.2897C48.4959 42.2897 48.0213 42.2741 46.44 42.2022C44.9775 42.1347 44.1837 41.8903 43.6547 41.685C42.9547 41.4131 42.4547 41.0881 41.9297 40.5631C41.4047 40.0381 41.0797 39.5394 40.8072 38.8391C40.6019 38.3109 40.3572 37.5172 40.2906 36.0547C40.2188 34.4734 40.2044 33.9984 40.2044 29.9928C40.2044 25.9872 40.2188 25.5147 40.2906 23.9334C40.3575 22.4709 40.6019 21.6772 40.8072 21.1484C41.0791 20.4484 41.4047 19.9484 41.9297 19.4234C42.4547 18.8984 42.9547 18.5734 43.6547 18.3009C44.1834 18.0947 44.9775 17.8509 46.44 17.7838C47.8238 17.7213 48.36 17.7025 51.1556 17.6994V17.7031ZM60.5081 20.1937C59.5144 20.1937 58.7081 20.9991 58.7081 21.9931C58.7081 22.9869 59.5144 23.7931 60.5081 23.7931C61.5019 23.7931 62.3081 22.9869 62.3081 21.9931C62.3081 20.9994 61.5019 20.1931 60.5081 20.1931V20.1937ZM52.5012 22.2969C48.2472 22.2969 44.7981 25.7459 44.7981 30C44.7981 34.2541 48.2472 37.7016 52.5012 37.7016C56.7553 37.7016 60.2031 34.2541 60.2031 30C60.2031 25.7459 56.7553 22.2969 52.5012 22.2969ZM52.5012 25C55.2625 25 57.5012 27.2384 57.5012 30C57.5012 32.7612 55.2625 35 52.5012 35C49.7397 35 47.5013 32.7612 47.5013 30C47.5013 27.2384 49.7397 25 52.5012 25Z" fill="white"></path><defs><radialGradient id="paint0_radial_1_3799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.8908 64.6213) rotate(-90) scale(59.4644 96.7865)"><stop stop-color="#FFDD55"></stop><stop offset="0.1" stop-color="#FFDD55"></stop><stop offset="0.5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="paint1_radial_1_3799" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-17.5881 4.3223) rotate(56.5721) scale(50.987 340.725)"><stop stop-color="#3771C8"></stop><stop offset="0.128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop></radialGradient></defs></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/InstagramIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const SectionTelegram_vue_vue_type_style_index_0_scoped_a1c21c29_lang = "";
const _sfc_main$1 = {
  __name: "SectionTelegram",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-telegram" }, _attrs))} data-v-a1c21c29>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-wrapper" data-v-a1c21c29${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="card-shadow" alt="" data-v-a1c21c29${_scopeId}><div class="card-telegram" data-v-a1c21c29${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="card-picture" data-v-a1c21c29${_scopeId}><div class="card-content" data-v-a1c21c29${_scopeId}><h3 class="h-xxl card-title" data-v-a1c21c29${_scopeId}>Подпишись на наш телеграм-канал</h3><h6 class="card-text" data-v-a1c21c29${_scopeId}> получай полезную информацию по уходу за кожей </h6>`);
            _push2(ssrRenderComponent(MButtonBig, { class: "card-button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Подписаться на канал`);
                } else {
                  return [
                    createTextVNode("Подписаться на канал")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-other" data-v-a1c21c29${_scopeId}><h6 class="card-text card-text-other" data-v-a1c21c29${_scopeId}>и другие соцсети</h6><div class="card-icons" data-v-a1c21c29${_scopeId}><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(VkIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(InstagramIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a><a href="#" data-v-a1c21c29${_scopeId}>`);
            _push2(ssrRenderComponent(YouTubeIcon, { class: "card-icon" }, null, _parent2, _scopeId));
            _push2(`</a></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card-wrapper" }, [
                createVNode("img", {
                  src: _imports_0,
                  class: "card-shadow",
                  alt: ""
                }),
                createVNode("div", { class: "card-telegram" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: "",
                    class: "card-picture"
                  }),
                  createVNode("div", { class: "card-content" }, [
                    createVNode("h3", { class: "h-xxl card-title" }, "Подпишись на наш телеграм-канал"),
                    createVNode("h6", { class: "card-text" }, " получай полезную информацию по уходу за кожей "),
                    createVNode(MButtonBig, { class: "card-button" }, {
                      default: withCtx(() => [
                        createTextVNode("Подписаться на канал")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "card-other" }, [
                      createVNode("h6", { class: "card-text card-text-other" }, "и другие соцсети"),
                      createVNode("div", { class: "card-icons" }, [
                        createVNode("a", { href: "#" }, [
                          createVNode(VkIcon, { class: "card-icon" })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(InstagramIcon, { class: "card-icon" })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(YouTubeIcon, { class: "card-icon" })
                        ])
                      ])
                    ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/media/section-telegram/SectionTelegram.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionTelegram = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a1c21c29"]]);
const _sfc_main = {
  __name: "media",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionMedia, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionTelegram, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionMedia),
              createVNode(SectionTelegram)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
