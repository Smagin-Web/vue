import { useSSRContext, ref, mergeProps, withCtx, unref, renderSlot, createVNode } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { I as IconSliderArrowRight } from "./IconSliderArrowRight-502e2ffe.js";
import { Swiper } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "./swiper-c12304a9.js";
import { _ as _export_sfc } from "../main.mjs";
const SliderVariant1_vue_vue_type_style_index_0_scoped_8b3091ba_lang = "";
const _sfc_main = {
  __name: "SliderVariant1",
  __ssrInlineRender: true,
  props: {
    breakpoints: {
      default: () => ({
        1e3: {
          slidesPerView: 2
        },
        1100: {
          slidesPerView: 1.5
        },
        1300: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 3
        }
      })
    }
  },
  setup(__props) {
    const props = __props;
    const modules = [Pagination];
    let swiperObject = void 0;
    const onSwiperInit = (swiper) => swiperObject = swiper;
    const sliderNext = () => swiperObject.slideNext(500);
    const sliderPrev = () => swiperObject.slidePrev(500);
    const isActiveNext = ref(true);
    const isActivePrev = ref(false);
    const onChangeSlider = (swiper) => {
      if (swiper.realIndex === 0) {
        isActivePrev.value = false;
      } else {
        isActivePrev.value = true;
      }
      if (swiper.slides.length === swiper.realIndex + 1) {
        isActiveNext.value = false;
      } else {
        isActiveNext.value = true;
      }
    };
    const onSwiperEnd = () => {
      setTimeout(() => {
        isActiveNext.value = false;
      }, 300);
    };
    const onSwiperStart = () => {
      setTimeout(() => {
        isActivePrev.value = false;
      }, 300);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MContainer, mergeProps({ class: "container-custom" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrIncludeBooleanAttr(!isActivePrev.value) ? " disabled" : ""} class="${ssrRenderClass([!isActivePrev.value && "disabled", "button-prev"])}"${ssrRenderAttr("onClick", sliderPrev)} data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(IconSliderArrowRight, { style: { "transform": "rotate(180deg)" } }, null, _parent2, _scopeId));
            _push2(`</button><button${ssrIncludeBooleanAttr(!isActiveNext.value) ? " disabled" : ""} class="${ssrRenderClass([!isActiveNext.value && "disabled", "button-next"])}"${ssrRenderAttr("onClick", sliderNext)} data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(IconSliderArrowRight, null, null, _parent2, _scopeId));
            _push2(`</button><div data-v-8b3091ba${_scopeId}><div class="content" data-v-8b3091ba${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              onReachEnd: () => onSwiperEnd(),
              onReachBeginning: () => onSwiperStart(),
              onActiveIndexChange: (swiper) => onChangeSlider(swiper),
              onSwiper: (swiper) => onSwiperInit(swiper),
              class: "swiper-custom",
              modules,
              initialSlide: 0,
              pagination: {
                clickable: true
              },
              breakpoints: props.breakpoints
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("button", {
                disabled: !isActivePrev.value,
                class: ["button-prev", !isActivePrev.value && "disabled"],
                onClick: sliderPrev
              }, [
                createVNode(IconSliderArrowRight, { style: { "transform": "rotate(180deg)" } })
              ], 10, ["disabled"]),
              createVNode("button", {
                disabled: !isActiveNext.value,
                class: ["button-next", !isActiveNext.value && "disabled"],
                onClick: sliderNext
              }, [
                createVNode(IconSliderArrowRight)
              ], 10, ["disabled"]),
              createVNode("div", null, [
                createVNode("div", { class: "content" }, [
                  createVNode(unref(Swiper), {
                    onReachEnd: () => onSwiperEnd(),
                    onReachBeginning: () => onSwiperStart(),
                    onActiveIndexChange: (swiper) => onChangeSlider(swiper),
                    onSwiper: (swiper) => onSwiperInit(swiper),
                    class: "swiper-custom",
                    modules,
                    initialSlide: 0,
                    pagination: {
                      clickable: true
                    },
                    breakpoints: props.breakpoints
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  }, 8, ["onReachEnd", "onReachBeginning", "onActiveIndexChange", "onSwiper", "breakpoints"])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/shared/SliderVariant1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SliderVariant1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b3091ba"]]);
export {
  SliderVariant1 as S
};
