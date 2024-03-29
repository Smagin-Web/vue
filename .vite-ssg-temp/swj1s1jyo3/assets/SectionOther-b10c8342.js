import { useSSRContext, mergeProps, withCtx, createVNode, unref, createTextVNode, ref, onMounted, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "./swiper-c12304a9.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { _ as _export_sfc } from "../main.mjs";
const _imports_0 = "/assets/model-afa01ebb.jpg";
const SectionStories_vue_vue_type_style_index_0_scoped_5be6b0d2_lang = "";
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {};
  }
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__, {
  __name: "SectionStories",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-stories" }, _attrs))} data-v-5be6b0d2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-xl heading" data-v-5be6b0d2${_scopeId}>Истории наших клиентов</h2><h5 class="text" data-v-5be6b0d2${_scopeId}> Это поможет тебе лучше понять структуру плана лечения и ориентироваться в его стоимости </h5>`);
          } else {
            return [
              createVNode("h2", { class: "h-xl heading" }, "Истории наших клиентов"),
              createVNode("h5", { class: "text" }, " Это поможет тебе лучше понять структуру плана лечения и ориентироваться в его стоимости ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(MContainer, { class: "container-custom" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card-group" data-v-5be6b0d2${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              class: "swiper-custom",
              breakpoints: {
                300: { slidesPerView: 1.2 },
                600: { slidesPerView: 2.2 },
                900: { slidesPerView: 3 }
              },
              "space-between": 24
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-courses" data-v-5be6b0d2${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} class="card-img" data-v-5be6b0d2${_scopeId3}><p class="card-text" data-v-5be6b0d2${_scopeId3}> Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. </p><div class="card-link-group" data-v-5be6b0d2${_scopeId3}><a class="card-link" data-v-5be6b0d2${_scopeId3}>Срок</a><a class="card-link" data-v-5be6b0d2${_scopeId3}>Стоимость</a></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-courses" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "card-img"
                            }),
                            createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                            createVNode("div", { class: "card-link-group" }, [
                              createVNode("a", { class: "card-link" }, "Срок"),
                              createVNode("a", { class: "card-link" }, "Стоимость")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card-group" }, [
                createVNode(unref(Swiper), {
                  class: "swiper-custom",
                  breakpoints: {
                    300: { slidesPerView: 1.2 },
                    600: { slidesPerView: 2.2 },
                    900: { slidesPerView: 3 }
                  },
                  "space-between": 24
                }, {
                  default: withCtx(() => [
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-courses" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "card-img"
                          }),
                          createVNode("p", { class: "card-text" }, " Описание курса и проведёных процедур.Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam nisi tempor. "),
                          createVNode("div", { class: "card-link-group" }, [
                            createVNode("a", { class: "card-link" }, "Срок"),
                            createVNode("a", { class: "card-link" }, "Стоимость")
                          ])
                        ])
                      ]),
                      _: 1
                    })
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
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-stories/SectionStories.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SectionStories = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5be6b0d2"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "419",
    height: "710",
    viewBox: "0 0 419 710",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g clip-path="url(#clip0_1_1444)"><path d="M216 147.3C216.2 136.6 216.4 125.5 219.6 115.4C222.4 106.7 227.4 99 228.8 89.8C230.2 79.8 226.9 69.9 221.7 63.4C216.9 57.4 211.3 53.7 203 50.4C189.8 45.2 168.7 36.9 145.3 42.7C115.5 50.2 98.8 76.5 89 91.8C68.3 124.3 75.4 134.6 47 195C37.9 214.3 34.2 219.4 28.3 236C25.5 243.8 5.09997 300.6 21.9 313.5C22.1 313.7 23 314.7 24.5 315C31 316.5 39.1 302.5 61.6 298.8C98.7 292.7 114.3 328.5 171.4 330.5C180.7 330.8 190.4 330.7 199.1 324.8C219.3 311.1 214.3 273.4 214.6 249.2C215 215.3 215.5 181.3 216 147.3Z" fill="black"></path><path d="M329.702 708.5L264.902 450.5L92.9024 485.5C39.1024 556.6 30.0024 649 30.1024 708.5H329.702Z" fill="white"></path><path d="M329.703 709.5C329.303 709.5 328.803 709.2 328.703 708.7C323.303 687.3 317.703 664.9 312.003 642.1C296.003 578 279.403 511.7 263.703 452.1C256.003 453.6 248.303 455.1 240.703 456.6C192.303 466.1 142.203 475.9 93.4031 486.3C53.1031 539.3 32.2031 614 31.2031 708.4C31.2031 709 30.7031 709.4 30.2031 709.4C29.6031 709.4 29.2031 708.9 29.2031 708.4C29.7031 663.7 34.6031 623.2 43.8031 587.9C54.2031 547.9 70.5031 513.2 92.1031 484.8C92.2031 484.6 92.5031 484.5 92.7031 484.4C141.603 473.9 191.803 464.1 240.403 454.6C248.403 453 256.403 451.5 264.403 449.9C264.903 449.8 265.403 450.1 265.603 450.6C281.303 510.5 298.003 577.1 314.103 641.5C319.803 664.3 325.403 686.6 330.803 708.1C330.903 708.6 330.603 709.2 330.103 709.3C329.803 709.5 329.703 709.5 329.703 709.5Z" fill="black"></path><path d="M197.903 708.3C197.403 708.3 196.903 707.9 196.903 707.4C196.603 702 196.103 693.4 195.703 685C195.303 676.6 194.803 667.9 194.503 662.5C194.303 659 194.103 655.4 193.803 651.9C193.303 644.9 192.903 637.7 192.503 630.7C191.803 616.6 199.203 603.9 211.203 598.1C215.303 596.1 219.603 594.3 223.803 592.5C225.903 591.6 228.003 590.7 230.003 589.8C230.503 589.6 231.103 589.8 231.303 590.3C231.503 590.8 231.303 591.4 230.803 591.6C228.703 592.5 226.603 593.4 224.503 594.3C220.403 596.1 216.103 597.9 212.003 599.9C200.703 605.3 193.803 617.3 194.403 630.6C194.703 637.7 195.203 644.9 195.703 651.8C195.903 655.3 196.203 658.9 196.403 662.4C196.703 667.8 197.203 676.5 197.603 684.9C198.003 693.3 198.503 701.9 198.803 707.3C199.003 707.8 198.503 708.3 197.903 708.3C198.003 708.3 198.003 708.3 197.903 708.3Z" fill="black"></path><path d="M134.102 137.5L108.602 225C108.602 225 157.202 284.9 193.902 282.6C230.502 280.2 223.702 238.8 196.402 225.9L169.802 218.2L177.702 149.7L134.102 137.5Z" fill="white"></path><path d="M211.099 119.4C212.899 129.5 212.999 140.1 209.599 149.7C206.199 159.3 198.999 167.9 189.499 171.6C181.199 174.8 171.699 174 163.499 170.6C155.299 167.2 148.299 161.3 142.699 154.5C133.999 157.6 123.299 154 118.299 146.2C115.399 141.7 114.399 135.7 116.699 130.9C119.099 126.1 125.299 123.2 130.199 125.5C132.999 126.8 134.899 129.5 137.699 130.6C140.799 131.9 144.599 131.1 147.399 129.2C150.199 127.3 152.199 124.4 153.899 121.4C158.999 112 160.499 100.7 158.099 90.3C158.299 91.3 163.599 92.8 164.499 93.1C166.799 93.9 169.299 94.5 171.699 94.9C176.499 95.7 181.499 95.6 186.299 94.8C188.699 94.4 191.199 93.8 193.499 92.9C195.399 92.2 197.799 90.5 199.699 90.5C203.799 90.5 205.099 98 206.099 100.9C208.099 107 209.999 113.1 211.099 119.4Z" fill="white"></path><path d="M178.201 174.6C173.201 174.6 168.001 173.6 163.101 171.5C155.601 168.4 148.601 163 142.301 155.6C133.301 158.4 122.501 154.6 117.401 146.7C114.001 141.5 113.401 135.3 115.801 130.4C118.501 124.9 125.401 122.1 130.601 124.6C132.001 125.3 133.201 126.3 134.401 127.2C135.601 128.2 136.701 129.1 138.101 129.7C140.701 130.8 144.001 130.3 146.801 128.4C149.101 126.9 151.001 124.5 152.901 121C157.901 111.8 159.401 100.7 157.001 90.6C156.901 90.1 157.201 89.5 157.701 89.4C158.201 89.3 158.701 89.5 158.801 90C159.101 90.3 160.301 90.9 164.001 92C164.301 92.1 164.501 92.2 164.601 92.2C166.901 93 169.201 93.5 171.601 93.9C176.301 94.6 181.101 94.6 185.901 93.8C188.301 93.4 190.701 92.8 192.901 92C193.501 91.8 194.201 91.4 194.901 91.1C196.401 90.3 198.001 89.5 199.501 89.5C199.501 89.5 199.501 89.5 199.601 89.5C203.701 89.5 205.301 95.1 206.301 98.8C206.501 99.5 206.701 100.1 206.801 100.6C209.301 107.8 210.901 113.7 211.901 119.2C214.001 130.7 213.501 141.1 210.401 150C206.701 160.6 198.901 169 189.701 172.5C186.201 173.9 182.301 174.6 178.201 174.6ZM142.701 153.5C143.001 153.5 143.301 153.6 143.501 153.9C149.701 161.3 156.601 166.7 164.001 169.8C172.401 173.3 181.601 173.7 189.201 170.8C197.901 167.5 205.201 159.5 208.701 149.5C211.701 140.9 212.201 130.9 210.201 119.7C209.201 114.3 207.601 108.5 205.201 101.3C205.001 100.8 204.801 100.1 204.601 99.4C203.701 96.3 202.401 91.6 199.801 91.6C198.801 91.6 197.401 92.3 196.101 93C195.301 93.4 194.601 93.8 193.901 94C191.501 94.8 189.101 95.5 186.601 95.9C181.601 96.8 176.601 96.8 171.701 96C169.201 95.6 166.701 95 164.301 94.2C164.201 94.2 164.001 94.1 163.701 94C161.901 93.5 160.601 93 159.701 92.6C161.401 102.6 159.801 113.2 154.901 122.1C152.801 125.9 150.701 128.5 148.101 130.2C144.801 132.4 140.701 133 137.501 131.6C135.901 130.9 134.601 129.9 133.301 128.8C132.201 127.9 131.101 127 129.901 126.4C125.801 124.5 120.001 126.8 117.801 131.3C115.801 135.4 116.401 141 119.301 145.6C124.101 153 134.301 156.4 142.501 153.5C142.501 153.5 142.601 153.5 142.701 153.5Z" fill="black"></path><path d="M127.898 138.2C132.798 138 137.698 140.9 139.698 145.3L127.898 138.2Z" fill="white"></path><path d="M139.8 146.3C139.4 146.3 139.1 146.1 138.9 145.7C137 141.6 132.5 138.9 128 139.2C127.4 139.2 127 138.8 127 138.3C127 137.7 127.4 137.3 127.9 137.3C133.2 137 138.4 140.2 140.7 145C140.9 145.5 140.7 146.1 140.2 146.3C140.1 146.2 139.9 146.3 139.8 146.3Z" fill="black"></path><path d="M67.6008 504.9C49.7008 495.6 38.3008 477.2 29.8008 458.9C9.60076 416 -0.0992348 368.3 0.000765213 320.8C0.100765 297.2 3.00076 272.5 16.8008 253.3C31.7008 232.6 57.2008 221.9 82.4008 218.1C92.6008 216.6 103.301 216.1 112.701 220.3C124.901 225.8 132.301 238 141.401 247.7C152.101 259 165.801 267.3 180.801 271.5C190.301 274.2 201.901 274.9 208.101 265.7C210.901 261.6 211.801 256.5 211.101 251.6C209.701 241.3 203.001 233.3 196.501 225.7C209.101 223.7 222.001 228.7 231.901 236.7C241.801 244.7 249.101 255.3 255.801 266.2C276.201 299.3 291.901 335.1 304.501 371.9C308.901 384.9 313.101 398.5 311.601 412.2C310.001 427.7 307.101 442.4 295.701 453C292.001 456.4 288.501 459.5 285.401 462C279.601 466.9 271.901 468.9 264.401 467.9C222.901 462.2 122.601 494.7 114.101 501.6C101.201 512 81.9008 512.4 67.6008 504.9Z" fill="#BAC3D8"></path><path d="M108.601 378.5C108.201 378.5 107.801 378.2 107.601 377.8L87.8009 315.6C87.6009 315.1 87.9009 314.5 88.4009 314.3C88.9009 314.1 89.5009 314.4 89.7009 314.9L109.501 377.1C109.701 377.6 109.401 378.2 108.901 378.4C108.801 378.5 108.701 378.5 108.601 378.5Z" fill="black"></path><path d="M248.7 354.6C248.2 354.6 247.8 354.2 247.7 353.7C245.2 336.4 241 319.4 235 303C234.8 302.5 235.1 301.9 235.6 301.7C236.1 301.5 236.7 301.8 236.9 302.3C242.9 318.8 247.2 336 249.7 353.4C249.8 353.9 249.4 354.5 248.9 354.5C248.8 354.6 248.8 354.6 248.7 354.6Z" fill="black"></path><path d="M115.301 486.9C116.001 489.2 117.001 491.7 119.201 492.5C121.001 493.1 123.101 492.7 124.601 491.5C155.801 466 180.701 449.6 217.701 433.7C222.401 431.7 215.001 452.2 241.701 433.9C245.901 431 242.401 422.4 237.301 421.5C241.501 420.9 245.001 417.3 245.601 413.1C246.101 408.9 243.601 404.5 239.701 402.9C243.701 403.7 247.501 399.6 247.701 395.5C247.901 391.4 245.501 387.6 242.501 384.7C253.701 390.1 269.401 406 278.201 395.3C280.601 384.5 273.001 378.7 264.601 371.5C256.201 364.3 245.301 360.7 234.401 358.7C210.201 354.2 185.001 356.4 161.401 363.3C140.601 369.3 120.801 378.8 102.401 390.2C97.9011 393 96.4011 393.6 96.3011 398.8C96.2011 404.4 97.9011 410.5 98.7011 416C100.501 427.5 102.701 438.9 105.301 450.2C108.401 462.6 111.601 474.8 115.301 486.9Z" fill="#F4EEE8"></path><path d="M218.402 434.3C218.002 434.3 217.602 434 217.402 433.6C217.202 433.1 217.502 432.5 218.002 432.3L228.702 428.9C229.202 428.7 229.802 429 230.002 429.5C230.202 430 229.902 430.6 229.402 430.8L218.702 434.2C218.602 434.3 218.502 434.3 218.402 434.3Z" fill="black"></path><path d="M58.3007 418.1C58.0007 418.1 57.7007 418 57.5007 417.7C57.1007 417.3 57.2007 416.6 57.6007 416.3C68.3007 407.5 80.1007 400 92.7007 394.1C93.2007 393.9 93.8007 394.1 94.0007 394.6C94.2007 395.1 94.0007 395.7 93.5007 395.9C81.1007 401.7 69.4007 409.1 58.8007 417.8C58.7007 418 58.5007 418.1 58.3007 418.1Z" fill="black"></path><path d="M251.603 443.8C251.803 450.9 253.803 458.4 259.403 462.7C266.603 468.3 276.803 466.7 285.503 464.2C326.903 452.3 364.203 429.3 385.703 392C386.603 390.5 394.503 371.6 391.203 367.3C388.203 363.3 380.603 370.9 375.703 371.9C354.403 376.4 333.303 382.2 312.803 389.3C302.203 393 291.703 396.9 281.403 401.3C273.503 404.6 266.803 405.5 261.503 412.7C254.903 421.6 251.303 432.7 251.603 443.8Z" fill="#F4EEE8"></path><path d="M285.404 465.3C285.004 465.3 284.604 465 284.404 464.6C284.204 464.1 284.604 463.5 285.104 463.4C330.904 450.2 365.304 425.4 384.704 391.7C386.004 389.5 393.004 371.7 390.304 368.1C390.004 367.7 390.104 367 390.504 366.7C390.904 366.4 391.604 366.5 391.904 366.9C395.804 372.1 386.504 392.5 386.404 392.7C366.704 426.9 331.904 452.1 285.604 465.4C285.604 465.2 285.504 465.3 285.404 465.3Z" fill="black"></path><path d="M413.203 331.2H337.103C335.503 331.2 333.903 331.9 332.903 333.2L271.503 411.3C268.803 414.8 271.203 419.9 275.703 419.9H349.203C350.803 419.9 352.303 419.2 353.303 418L417.303 339.9C420.203 336.4 417.703 331.2 413.203 331.2Z" fill="black"></path><path d="M380.905 341.3C380.005 340.5 378.705 339.6 377.605 340.2C376.605 340.7 376.505 342 376.405 343.1C375.805 353.7 375.205 364.2 374.605 374.8C374.705 365.3 372.305 355.6 366.105 348.4C364.605 346.6 361.905 345 360.105 346.5C359.005 347.4 358.905 349 359.005 350.4C359.505 362.3 364.305 374.5 360.105 385.6C359.405 378.5 357.705 371.6 355.105 364.9C354.105 362.2 352.805 359.4 350.405 357.7C348.005 356 344.305 355.9 342.505 358.2C340.605 360.7 341.805 364.1 342.805 367.1C345.805 375.5 347.105 384.6 346.505 393.5C345.305 386.5 343.905 379 338.705 374.2C337.205 372.8 335.305 371.7 333.205 371.5C331.105 371.3 328.905 372.3 328.005 374.2C327.005 376.3 327.805 378.7 328.505 380.9C331.005 389.3 331.005 398.5 328.505 406.9C326.605 413.2 318.705 421.7 327.105 426.7C330.005 428.4 333.505 428.5 336.805 428.1C346.105 426.8 354.305 421.1 361.605 415.1C369.105 409 376.105 402.3 381.605 394.3C387.005 386.3 390.805 377 391.105 367.4C391.505 357.7 388.005 347.8 380.905 341.3Z" fill="#F4EEE8"></path><path d="M215.553 290.328L216.358 294.596L216.117 294.69C214.929 295.173 213.886 295.904 213.008 296.831C211.279 298.647 210.453 301.134 210.663 303.62L213.837 303.021L214.518 306.632L211.376 307.226L212.775 314.636L208.335 315.474L206.308 304.734C206.274 304.384 206.24 304.034 206.228 303.713C206.217 303.569 206.222 303.422 206.211 303.279C206.19 300.595 206.993 297.902 208.496 295.659C210.124 293.215 212.455 291.415 215.221 290.455L215.553 290.328Z" fill="#AE8C8E"></path><path d="M223.443 293.534L225.477 304.305C225.51 304.654 225.544 305.004 225.556 305.326C225.567 305.469 225.562 305.616 225.573 305.76C225.594 308.443 224.791 311.137 223.288 313.38C221.661 315.824 219.329 317.624 216.564 318.583L216.213 318.698L215.407 314.43L215.649 314.336C216.836 313.853 217.88 313.121 218.758 312.195C220.487 310.379 221.313 307.892 221.103 305.406L217.788 306.031L217.107 302.42L220.39 301.8L218.991 294.39L223.446 293.549L223.443 293.534Z" fill="#AE8C8E"></path></g><defs><clipPath id="clip0_1_1444"><rect width="418.5" height="709.5" fill="white"></rect></clipPath></defs></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PictureResult.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const PictureResult = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "790",
    height: "506",
    viewBox: "0 0 790 506",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g filter="url(#filter0_f_1_1442)"><ellipse cx="395" cy="253" rx="295" ry="153" fill="#D8C4B0"></ellipse></g><defs><filter id="filter0_f_1_1442" x="0" y="0" width="790" height="506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_1442"></feGaussianBlur></filter></defs></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResultShadow.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SectionResultShadow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const SectionResultBanner_vue_vue_type_style_index_0_scoped_7f25c9d8_lang = "";
const _sfc_main$7 = {
  __name: "SectionResultBanner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-7f25c9d8>`);
      _push(ssrRenderComponent(SectionResultShadow, { class: "picture-shadow" }, null, _parent));
      _push(`<div class="wrapper" data-v-7f25c9d8>`);
      _push(ssrRenderComponent(PictureResult, { class: "picture" }, null, _parent));
      _push(`<svg width="100%" viewBox="0 0 686 442" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7f25c9d8><path d="M0 150C0 67.1573 67.1573 0 150 0H666C677.046 0 686 8.95431 686 20V292C686 374.843 618.843 442 536 442H20C8.95432 442 0 433.046 0 422V150Z" fill="#EDE4DA" data-v-7f25c9d8></path></svg></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResultBanner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SectionResultBanner = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7f25c9d8"]]);
const SectionResult_vue_vue_type_style_index_0_scoped_980efccd_lang = "";
const _sfc_main$6 = {
  __name: "SectionResult",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-result" }, _attrs))} data-v-980efccd>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content" data-v-980efccd${_scopeId}>`);
            _push2(ssrRenderComponent(SectionResultBanner, { class: "banner" }, null, _parent2, _scopeId));
            _push2(`<div data-v-980efccd${_scopeId}><h3 class="heading" data-v-980efccd${_scopeId}>Что ты получишь<br data-v-980efccd${_scopeId}>в результате приёма?</h3><h5 class="text" data-v-980efccd${_scopeId}> На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению </h5><h5 class="text text-sm" data-v-980efccd${_scopeId}> На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению </h5></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content" }, [
                createVNode(SectionResultBanner, { class: "banner" }),
                createVNode("div", null, [
                  createVNode("h3", { class: "heading" }, [
                    createTextVNode("Что ты получишь"),
                    createVNode("br"),
                    createTextVNode("в результате приёма?")
                  ]),
                  createVNode("h5", { class: "text" }, " На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению "),
                  createVNode("h5", { class: "text text-sm" }, " На основе полученных данных врач оценит состояние твоей кожи, определит проблему и даст четкий план по ее решению ")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-result/SectionResult.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SectionResult = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-980efccd"]]);
const SectionOtherCard_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  __name: "SectionOtherCard",
  __ssrInlineRender: true,
  props: {
    iconFilename: String
  },
  setup(__props) {
    const props = __props;
    function getImageUrl() {
      return new URL(`./${props.iconFilename}`, import.meta.url).toString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "transition": "0.2s" } }, _attrs))}><img${ssrRenderAttr("src", getImageUrl())} class="image"></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionOtherBlockSm_vue_vue_type_style_index_0_scoped_37d4c311_lang = "";
const _sfc_main$4 = {
  __name: "SectionOtherBlockSm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-37d4c311><div class="wrapper-cards" data-v-37d4c311><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto5.png",
        class: "card-parallax"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto1.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "right": "100%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto8.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "left": "100%" }
      }, null, _parent));
      _push(`</div><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto2.png",
        class: "card-parallax"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto7.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "right": "110%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto6.png",
        class: "card-parallax card-absolute",
        style: { "top": "50%", "left": "110%" }
      }, null, _parent));
      _push(`</div><div class="row" data-v-37d4c311>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto3.png",
        class: "card-parallax"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockSm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionOtherBlockSm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-37d4c311"]]);
const SectionOtherBlockMd_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  __name: "SectionOtherBlockMd",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="wrapper-cards"><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$5, { iconFilename: "ParallaxPhoto5.png" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto1.png",
        class: "card-absolute",
        style: { "top": "50%", "right": "100%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto8.png",
        class: "card-absolute",
        style: { "top": "50%", "left": "100%" }
      }, null, _parent));
      _push(`</div><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$5, { iconFilename: "ParallaxPhoto2.png" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto7.png",
        class: "card-absolute",
        style: { "top": "50%", "right": "110%" }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto6.png",
        class: "card-absolute",
        style: { "top": "50%", "left": "110%" }
      }, null, _parent));
      _push(`</div><div class="row">`);
      _push(ssrRenderComponent(_sfc_main$5, { iconFilename: "ParallaxPhoto3.png" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockMd.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SectionOtherBlockLg_vue_vue_type_style_index_0_scoped_8eb2128d_lang = "";
const _sfc_main$2 = {
  __name: "SectionOtherBlockLg",
  __ssrInlineRender: true,
  setup(__props) {
    const parallaxStyle = ref("");
    const parallaxStyle2 = ref("");
    const parallaxStyle3 = ref("");
    const handleScroll = () => {
      if (window.innerWidth > 1200) {
        const scrollTop = window.scrollY;
        if (scrollTop > 7e3 && scrollTop < 1e4) {
          let value = scrollTop - 7500;
          parallaxStyle.value = `transform: translateY(${value * 0.01}px) translateX(${value * -0.01}px)`;
          parallaxStyle2.value = `transform: translateY(${value * -0.01}px) translateX(${value * 8e-3}px)`;
          parallaxStyle3.value = `transform: translateY(${value * 0.01}px) translateX(${value * 0.01}px)`;
        }
      } else {
        parallaxStyle.value = "";
        parallaxStyle2.value = "";
        parallaxStyle3.value = "";
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding-bottom": "300px" } }, _attrs))} data-v-8eb2128d><div class="wrapper-cards" data-v-8eb2128d><div style="${ssrRenderStyle({ "padding-top": "120px" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto7.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto1.png",
        style: parallaxStyle.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "top": "140%", "left": "-30%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto3.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "padding-top": "70px", "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto2.png",
        style: parallaxStyle3.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "bottom": "100%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto5.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div><div class="card-absolute" style="${ssrRenderStyle({ "top": "120%", "left": "50%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto6.png",
        style: parallaxStyle.value
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "padding-top": "150px", "position": "relative" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto4.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`<div class="card-absolute" style="${ssrRenderStyle({ "bottom": "85%", "left": "-20%" })}" data-v-8eb2128d>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        iconFilename: "ParallaxPhoto8.png",
        style: parallaxStyle2.value
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOtherBlockLg.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionOtherBlockLg = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8eb2128d"]]);
const SectionBlockResponse_vue_vue_type_style_index_0_scoped_93514416_lang = "";
const _sfc_main$1 = {
  __name: "SectionBlockResponse",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-93514416>`);
      _push(ssrRenderComponent(SectionOtherBlockLg, { class: "pictures-block-lg" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { class: "pictures-block-md" }, null, _parent));
      _push(ssrRenderComponent(SectionOtherBlockSm, { class: "pictures-block-sm" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionBlockResponse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionBlockResponse = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-93514416"]]);
const SectionOther_vue_vue_type_style_index_0_scoped_007cbfb1_lang = "";
const _sfc_main = {
  __name: "SectionOther",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-other" }, _attrs))} data-v-007cbfb1>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h4 class="h-xl heading-section--other" data-v-007cbfb1${_scopeId}> Другие примеры результата, к которому мы помогли придти </h4>`);
            _push2(ssrRenderComponent(SectionBlockResponse, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h4", { class: "h-xl heading-section--other" }, " Другие примеры результата, к которому мы помогли придти "),
              createVNode(SectionBlockResponse)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-other/SectionOther.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionOther = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-007cbfb1"]]);
export {
  SectionResult as S,
  SectionStories as a,
  SectionOther as b
};
