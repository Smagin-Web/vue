import { useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { a as MButtonBig, M as MContainer } from "./ViewWrapper-3c15502d.js";
import { _ as _export_sfc } from "../main.mjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "./swiper-c12304a9.js";
const _imports_0 = "/assets/room-fc3ee4bd.png";
const _imports_1 = "/assets/room2-4be15d8c.png";
const ButtonTour_vue_vue_type_style_index_0_scoped_f3bc35d6_lang = "";
const _sfc_main$1 = {
  __name: "ButtonTour",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MButtonBig, mergeProps({ class: "button-tour" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="button-tour-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f3bc35d6${_scopeId}><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8M15.194 13.707L19.008 15.567L17.148 19.381" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3bc35d6${_scopeId}></path><path d="M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f3bc35d6${_scopeId}></path></svg> 3D тур `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "button-tour-icon",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8M15.194 13.707L19.008 15.567L17.148 19.381",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }),
                createVNode("path", {
                  d: "M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ])),
              createTextVNode(" 3D тур ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-tour/ButtonTour.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ButtonTour = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3bc35d6"]]);
const SectionTour_vue_vue_type_style_index_0_scoped_2f89cd4e_lang = "";
const _sfc_main = {
  __name: "SectionTour",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-tour" }, _attrs))} data-v-2f89cd4e>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="h-l section-heading" data-v-2f89cd4e${_scopeId}> Атмосферное пространство <br data-v-2f89cd4e${_scopeId}> комфорта и красоты `);
            _push2(ssrRenderComponent(ButtonTour, null, null, _parent2, _scopeId));
            _push2(`</h2>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              slidesPerView: "auto",
              grabCursor: true,
              spaceBetween: 24,
              modules: [unref(Pagination)],
              pagination: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "card-room-photo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="card-room" data-v-2f89cd4e${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" class="card-room-photo" data-v-2f89cd4e${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "card-room" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "card-room-photo"
                            })
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
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card-room" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "card-room-photo"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "h-l section-heading" }, [
                createTextVNode(" Атмосферное пространство "),
                createVNode("br"),
                createTextVNode(" комфорта и красоты "),
                createVNode(ButtonTour)
              ]),
              createVNode(unref(Swiper), {
                slidesPerView: "auto",
                grabCursor: true,
                spaceBetween: 24,
                modules: [unref(Pagination)],
                pagination: true
              }, {
                default: withCtx(() => [
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(SwiperSlide), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "card-room" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "card-room-photo"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modules"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/section-tour/SectionTour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionTour = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f89cd4e"]]);
export {
  SectionTour as S
};
