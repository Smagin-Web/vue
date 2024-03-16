import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { M as MContainer, a as MButtonBig, V as ViewWrapper } from "./ViewWrapper-3c15502d.js";
import { B as BreadCrumbs } from "./BreadCrumbs-05cb1592.js";
import { B as ButtonBack } from "./ButtonBack-4168b883.js";
import { _ as _export_sfc } from "../main.mjs";
import { C as CardReviewMaster } from "./CardReviewMaster-c4d61f16.js";
import { S as SliderVariant1 } from "./SliderVariant1-f48da4d7.js";
import { SwiperSlide } from "swiper/vue";
import "pinia";
import "emailjs-com";
import "vite-ssg";
import "./IconSliderArrowRight-502e2ffe.js";
import "swiper/modules";
import "./swiper-c12304a9.js";
const _imports_0 = "/assets/noPhoto-579cf766.png";
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.77354 8.87739C4.11718 4.70845 7.60097 1.5 11.7841 1.5H12.216C16.3991 1.5 19.8829 4.70845 20.2265 8.87739C20.4115 11.122 19.7182 13.3508 18.2925 15.0943L13.4995 20.9561C12.7245 21.9039 11.2756 21.9039 10.5006 20.9561L5.70752 15.0943C4.28187 13.3508 3.58852 11.122 3.77354 8.87739ZM12 5.25C9.37665 5.25 7.25 7.37665 7.25 10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10C16.75 7.37665 14.6234 5.25 12 5.25Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconLocation.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const IconLocation = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M10.977 19.5465C11.16 18.8145 11.5395 18.1455 12.072 17.6115L18.504 11.181C18.943 10.742 19.5384 10.4954 20.1593 10.4954C20.7801 10.4954 21.3755 10.742 21.8145 11.181C22.2535 11.62 22.5001 12.2154 22.5001 12.8363C22.5001 13.4571 22.2535 14.0525 21.8145 14.4915L15.3825 20.922C14.8487 21.4556 14.1798 21.8341 13.4475 22.017L11.6325 22.4715C11.4793 22.5098 11.3188 22.5078 11.1666 22.4658C11.0144 22.4237 10.8756 22.3429 10.7639 22.2313C10.6521 22.1197 10.5712 21.9811 10.5289 21.8289C10.4866 21.6768 10.4844 21.5163 10.5225 21.363L10.977 19.5465ZM20.997 7.5V6.75C20.997 5.75544 20.6019 4.80161 19.8987 4.09835C19.1954 3.39509 18.2416 3 17.247 3H6.75C5.75544 3 4.80161 3.39509 4.09835 4.09835C3.39509 4.80161 3 5.75544 3 6.75V7.5H20.997ZM19.497 9.054V9H3V17.25C3.0004 18.2443 3.39566 19.1977 4.09888 19.9007C4.8021 20.6036 5.7557 20.9985 6.75 20.9985H9.069L9.522 19.1835C9.771 18.189 10.287 17.2785 11.013 16.5525L17.4435 10.122C18.0018 9.56129 18.7203 9.18762 19.5 9.0525L19.497 9.054Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconCalendar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M20.7005 18.0756C19.7005 15.6756 17.8005 13.8756 15.5005 12.9756C16.8005 11.9756 17.6005 10.3756 17.6005 8.67559C17.6005 5.47559 15.1005 2.97559 12.0005 2.97559C8.90055 2.97559 6.40055 5.47559 6.40055 8.57559C6.40055 10.2756 7.20055 11.8756 8.50055 12.8756C6.20055 13.7756 4.30055 15.5756 3.30055 17.9756C2.90055 18.9756 3.00055 20.1756 3.60055 21.0756C4.20055 22.0756 5.30055 22.5756 6.50055 22.5756H17.6005C18.8005 22.5756 19.8005 21.9756 20.5005 21.0756C21.1005 20.1756 21.2005 19.0756 20.7005 18.0756Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconPerson.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IconPerson = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "80",
    height: "119",
    viewBox: "0 0 80 119",
    fill: "none"
  }, _attrs))}><g opacity="0.3"><path d="M49.7219 0V18.3682L48.6453 18.57C43.33 19.6465 38.4184 21.8669 34.045 25.0291C25.4328 31.2191 20.0502 40.9078 18.9737 51.4039H32.6321V66.9462H19.1083V98.8382H0V52.615C0.134565 51.1348 0.269134 49.6546 0.470982 48.3089C0.538264 47.7034 0.67283 47.0978 0.740113 46.4923C2.75859 35.3234 8.20849 24.76 16.2151 16.6188C24.8946 7.7375 35.9962 2.08576 48.2416 0.269126L49.7219 0Z" fill="white"></path><path d="M80.0001 19.5127V65.8704C79.8655 67.3507 79.7309 68.8309 79.5291 70.1765C79.4618 70.7821 79.3273 71.3876 79.26 71.9931C77.2415 83.1621 71.7916 93.7255 63.785 101.867C55.1055 110.748 44.0039 116.4 31.7584 118.216L30.2109 118.418V100.05L31.2875 99.8482C36.6028 98.7717 41.5144 96.5513 45.8878 93.389C54.5 87.199 59.8826 77.5103 60.9591 67.0142H46.6952V51.472H60.8245V19.58H80.0001V19.5127Z" fill="white"></path></g></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "257",
    height: "67",
    viewBox: "0 0 257 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M21.9028 65H0.182813V1.64H21.9028V24.56H55.0228V1.64H76.7428V65H55.0228V40.04H21.9028V65ZM175.666 43.64C172.066 57.56 155.986 66.56 135.586 66.56C110.986 66.56 93.5859 52.76 93.5859 33.44C93.5859 14 110.506 0.079999 134.266 0.079999C157.546 0.079999 175.186 13.52 175.186 33.68C175.186 33.92 175.066 36.08 174.946 37.16H115.066C116.266 47.24 124.186 53.48 136.186 53.48C145.906 53.48 153.586 49.88 155.146 43.64H175.666ZM152.506 25.04C150.106 17.72 143.506 13.16 134.386 13.16C125.266 13.16 118.666 17.72 116.266 25.04H152.506ZM229.772 65H208.052V15.44H181.052V1.64H256.772V15.44H229.772V65Z" fill="url(#paint0_linear_1_4916)"></path><defs><linearGradient id="paint0_linear_1_4916" x1="124.5" y1="-37" x2="124.5" y2="101" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconText1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconText1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "425",
    height: "114",
    viewBox: "0 0 425 114",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M64.2039 113.48V78.2C57.0039 83.84 47.7639 87.56 37.0839 87.56C14.7639 87.56 0.00390634 74.48 0.00390634 54.44C0.00390634 34.28 14.6439 21.08 37.0839 21.08C47.8839 21.08 57.0039 24.8 64.2039 30.44V0.0799975H85.9239V30.44C93.1239 24.8 102.244 21.08 113.044 21.08C135.484 21.08 150.124 34.28 150.124 54.44C150.124 74.48 135.484 87.56 113.044 87.56C102.364 87.56 93.1239 83.84 85.9239 78.2V113.48H64.2039ZM64.2039 54.32C64.2039 43.04 56.1639 35.6 43.0839 35.6C29.1639 35.6 21.2439 42.56 21.2439 54.44C21.2439 66.08 29.1639 73.04 43.0839 73.04C56.1639 73.04 64.2039 65.48 64.2039 54.32ZM85.9239 54.32C85.9239 65.48 93.9639 73.04 107.044 73.04C121.084 73.04 128.884 66.08 128.884 54.44C128.884 42.56 121.084 35.6 107.044 35.6C93.9639 35.6 85.9239 43.04 85.9239 54.32ZM248.231 54.44C248.231 74.36 231.191 87.56 205.151 87.56C179.231 87.56 162.191 74.36 162.191 54.44C162.191 34.4 179.231 21.08 205.151 21.08C231.191 21.08 248.231 34.4 248.231 54.44ZM226.991 54.44C226.991 42.68 218.831 35.6 205.271 35.6C191.471 35.6 183.431 42.68 183.431 54.44C183.431 65.96 191.471 73.04 205.271 73.04C218.831 73.04 226.991 65.96 226.991 54.44ZM304.471 86H282.751V36.44H255.751V22.64H331.471V36.44H304.471V86ZM424.833 54.44C424.833 74.36 407.793 87.56 381.753 87.56C355.833 87.56 338.793 74.36 338.793 54.44C338.793 34.4 355.833 21.08 381.753 21.08C407.793 21.08 424.833 34.4 424.833 54.44ZM403.593 54.44C403.593 42.68 395.433 35.6 381.873 35.6C368.073 35.6 360.033 42.68 360.033 54.44C360.033 65.96 368.073 73.04 381.873 73.04C395.433 73.04 403.593 65.96 403.593 54.44Z" fill="url(#paint0_linear_1_4917)"></path><defs><linearGradient id="paint0_linear_1_4917" x1="212.5" y1="-16" x2="212.5" y2="122" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/IconText2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconText2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const SectionReviewInside_vue_vue_type_style_index_0_scoped_90b035bf_lang = "";
const _sfc_main$2 = {
  __name: "SectionReviewInside",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review-inside" }, _attrs))} data-v-90b035bf>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }, null, _parent2, _scopeId));
            _push2(`<h3 class="h-xxl section-title" data-v-90b035bf${_scopeId}> Отзыв о работе <br data-v-90b035bf${_scopeId}> Юлии Епишиной `);
            _push2(ssrRenderComponent(ButtonBack, { class: "button-back" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Все отзывы`);
                } else {
                  return [
                    createTextVNode("Все отзывы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h3><div class="card-with-photo" data-v-90b035bf${_scopeId}><div class="card-review-inside" data-v-90b035bf${_scopeId}><div class="card-footer" data-v-90b035bf${_scopeId}><h6 class="h-sm-ultra card-footer-title" data-v-90b035bf${_scopeId}>Ответ клиники</h6><p class="text-sm card-footer-text" data-v-90b035bf${_scopeId}> Каролина, огромная благодарность вам за столь подробный и развернутый отзыв! </p>`);
            _push2(ssrRenderComponent(IconLogo, { class: "card-footer-logo" }, null, _parent2, _scopeId));
            _push2(`</div><h6 class="h-sm-ultra card-title" data-v-90b035bf${_scopeId}>Каролина Милютина</h6><div class="card-badges" data-v-90b035bf${_scopeId}><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconPerson, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>36 лет</span></p><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconLocation, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>Москва</span></p><p class="card-badge" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconCalendar, null, null, _parent2, _scopeId));
            _push2(`<span class="text-sm" data-v-90b035bf${_scopeId}>15.05.2024</span></p></div><p class="text-sm card-text" data-v-90b035bf${_scopeId}> В современном мире сложно найти профессионала , знающего толк в своем деле. В этом вопросе, мне очень повезло, мой ведущий косметолог Юлия Николаевна именно такой специалист. Каждая процедура для меня, это момент естественного преображения и Юлия очень четко и верно подбирает мне препараты и процедуры . Такой заботы, четкого отношения ко мне, внимания к моему здоровью я еще не встречала. Советы и рекомендации от этого доктора всегда уместны, высокий профессионализм и тактичность, аккуратность в деталях и педантичность до мелочей. Прокаченный и современный доктор. Если и доверять себя любимую в руки косметолога, тогда точно к Юлии Николаевне. </p></div><div class="photo-wrapper" data-v-90b035bf${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="photo" data-v-90b035bf${_scopeId}>`);
            _push2(ssrRenderComponent(IconText1, { class: "icon-text icon-text-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(IconText2, { class: "icon-text icon-text-2" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(BreadCrumbs, { items: ["Главная", "Специалисты", "Ольга Заика"] }),
              createVNode("h3", { class: "h-xxl section-title" }, [
                createTextVNode(" Отзыв о работе "),
                createVNode("br"),
                createTextVNode(" Юлии Епишиной "),
                createVNode(ButtonBack, { class: "button-back" }, {
                  default: withCtx(() => [
                    createTextVNode("Все отзывы")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "card-with-photo" }, [
                createVNode("div", { class: "card-review-inside" }, [
                  createVNode("div", { class: "card-footer" }, [
                    createVNode("h6", { class: "h-sm-ultra card-footer-title" }, "Ответ клиники"),
                    createVNode("p", { class: "text-sm card-footer-text" }, " Каролина, огромная благодарность вам за столь подробный и развернутый отзыв! "),
                    createVNode(IconLogo, { class: "card-footer-logo" })
                  ]),
                  createVNode("h6", { class: "h-sm-ultra card-title" }, "Каролина Милютина"),
                  createVNode("div", { class: "card-badges" }, [
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconPerson),
                      createVNode("span", { class: "text-sm" }, "36 лет")
                    ]),
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconLocation),
                      createVNode("span", { class: "text-sm" }, "Москва")
                    ]),
                    createVNode("p", { class: "card-badge" }, [
                      createVNode(IconCalendar),
                      createVNode("span", { class: "text-sm" }, "15.05.2024")
                    ])
                  ]),
                  createVNode("p", { class: "text-sm card-text" }, " В современном мире сложно найти профессионала , знающего толк в своем деле. В этом вопросе, мне очень повезло, мой ведущий косметолог Юлия Николаевна именно такой специалист. Каждая процедура для меня, это момент естественного преображения и Юлия очень четко и верно подбирает мне препараты и процедуры . Такой заботы, четкого отношения ко мне, внимания к моему здоровью я еще не встречала. Советы и рекомендации от этого доктора всегда уместны, высокий профессионализм и тактичность, аккуратность в деталях и педантичность до мелочей. Прокаченный и современный доктор. Если и доверять себя любимую в руки косметолога, тогда точно к Юлии Николаевне. ")
                ]),
                createVNode("div", { class: "photo-wrapper" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "photo"
                  }),
                  createVNode(IconText1, { class: "icon-text icon-text-1" }),
                  createVNode(IconText2, { class: "icon-text icon-text-2" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-inside/SectionReviewInside.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionReviewInside = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-90b035bf"]]);
const SectionReviewOther_vue_vue_type_style_index_0_scoped_9f53ca2a_lang = "";
const _sfc_main$1 = {
  __name: "SectionReviewOther",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-master-review" }, _attrs))} data-v-9f53ca2a>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-xl" data-v-9f53ca2a${_scopeId}>Другие отзывы о специалисте</h3>`);
          } else {
            return [
              createVNode("h3", { class: "h-xl" }, "Другие отзывы о специалисте")
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
                  _push3(ssrRenderComponent(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "yandex"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, {
                      class: "card-review-master",
                      badge: "yandex"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "2gis"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CardReviewMaster, {
                      class: "card-review-master",
                      badge: "2gis"
                    })
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
                  createVNode(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "yandex"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(CardReviewMaster, {
                    class: "card-review-master",
                    badge: "2gis"
                  })
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
            _push2(`<div class="buttons" data-v-9f53ca2a${_scopeId}>`);
            _push2(ssrRenderComponent(MButtonBig, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Посмотреть больше отзывов`);
                } else {
                  return [
                    createTextVNode("Посмотреть больше отзывов")
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
                    createTextVNode("Посмотреть больше отзывов")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/review-inside/section-review-other/SectionReviewOther.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionReviewOther = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f53ca2a"]]);
const _sfc_main = {
  __name: "review-inside",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(ViewWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SectionReviewInside, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionReviewOther, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SectionReviewInside),
              createVNode(SectionReviewOther)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/review-inside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
