import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { M as MContainer } from "./ViewWrapper-3c15502d.js";
import { _ as _export_sfc } from "../main.mjs";
import { I as IconPlay } from "./IconPlay-794340eb.js";
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "heading-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "233",
    height: "89",
    viewBox: "0 0 233 89",
    fill: "none"
  }, _attrs))}><path d="M224.894 88.3592C225.652 88.6939 226.537 88.3509 226.872 87.5931L232.326 75.2439C232.661 74.4861 232.318 73.6005 231.56 73.2658C230.802 72.9311 229.917 73.2741 229.582 74.0319L224.734 85.0089L213.757 80.1607C212.999 79.826 212.113 80.169 211.779 80.9268C211.444 81.6846 211.787 82.5703 212.545 82.905L224.894 88.3592ZM2.29642 28.7582C80.7209 -20.3794 191.03 2.13715 224.101 87.5288L226.899 86.4453C192.97 -1.16203 80.2792 -23.6429 0.703568 26.216L2.29642 28.7582Z" fill="black"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesArrow.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SectionCirclesArrow = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "74",
    height: "58",
    viewBox: "0 0 74 58",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path id="Arrow 1" d="M59.4453 56.4967C59.9 57.1892 60.83 57.382 61.5225 56.9272L72.807 49.5171C73.4994 49.0624 73.6922 48.1324 73.2375 47.4399C72.7827 46.7475 71.8528 46.5547 71.1603 47.0094L61.1296 53.5962L54.5428 43.5655C54.0881 42.8731 53.1581 42.6803 52.4657 43.1351C51.7732 43.5898 51.5804 44.5198 52.0352 45.2122L59.4453 56.4967ZM1.10045 3.87053C18.2578 2.75098 34.4042 8.17373 45.4365 17.6121C56.4437 27.029 62.3333 40.3967 59.2303 55.369L62.1679 55.9778C65.5277 39.7661 59.0853 25.3409 47.3868 15.3325C35.7133 5.34557 18.7801 -0.28948 0.905115 0.876897L1.10045 3.87053Z" fill="black"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesArrowSm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SectionCirclesArrowSm = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0$1 = "/assets/AvatarImg-d3a63f9a.png";
const Avatar_vue_vue_type_style_index_0_scoped_d30b1028_lang = "";
const _sfc_main$3 = {
  __name: "Avatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "avatar-wrapper" }, _attrs))} data-v-d30b1028><a href="#" class="avatar-link" data-v-d30b1028></a><div class="avatar" data-v-d30b1028><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="avatar-img" data-v-d30b1028>`);
      _push(ssrRenderComponent(IconPlay, { class: "avatar-play-icon" }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/Avatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d30b1028"]]);
const SectionCirclesBlock_vue_vue_type_style_index_0_scoped_069c44af_lang = "";
const _sfc_main$2 = {
  __name: "SectionCirclesBlock",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-069c44af><div class="groups" data-v-069c44af><div class="group" style="${ssrRenderStyle({ "padding-bottom": "34px" })}" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(`</div><div class="group group-center" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(`</div><div class="group" data-v-069c44af>`);
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(ssrRenderComponent(Avatar, null, null, _parent));
      _push(ssrRenderComponent(Avatar, { style: { "opacity": "0", "z-index": "-10" } }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCirclesBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SectionCirclesBlock = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-069c44af"]]);
const SectionCircles_vue_vue_type_style_index_0_scoped_7e756146_lang = "";
const _sfc_main$1 = {
  __name: "SectionCircles",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-7e756146>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="h-l heading" data-v-7e756146${_scopeId}><span style="${ssrRenderStyle({ "position": "relative" })}" data-v-7e756146${_scopeId}> Отзывы клиентов в кружочках `);
            _push2(ssrRenderComponent(SectionCirclesArrowSm, { class: "heading-icon-sm" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(SectionCirclesArrow, { class: "heading-icon" }, null, _parent2, _scopeId));
            _push2(`</h3>`);
            _push2(ssrRenderComponent(SectionCirclesBlock, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "h-l heading" }, [
                createVNode("span", { style: { "position": "relative" } }, [
                  createTextVNode(" Отзывы клиентов в кружочках "),
                  createVNode(SectionCirclesArrowSm, { class: "heading-icon-sm" })
                ]),
                createVNode(SectionCirclesArrow, { class: "heading-icon" })
              ]),
              createVNode(SectionCirclesBlock)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-circles/SectionCircles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SectionCircles = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7e756146"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAiCAYAAACOTf3NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAspSURBVHgB7Zp7bFRlGsafdnqHtkDLrVQKRWihUBAtKrAWAVdEzSouIhGNhmxU1o36l2QTd3Vd9w8TybICK65GNCgEFURRkIsKyE0EEUGgAkK1CIUWubS0ZTrd83vrGWem05ZqQGjmaabtOeeb732/93lv3zcjRdCqEMWvOgeK4JJHlINoRdCqECG0lSGmsQcV1XU6WObVoeNeeX1Sl1SP+nSOVVJ8lCK4eNGA0Moan+ZuqNScDVXafbhW0T/FcGKMR0MyE1WYE6X7CxOUnBAJ7osRQU1ReYVPf5xV7hDpcwrsz4OinYvM5AQlxXrsumt7adrEeHVK9SiCiwdBTVHdmUrNm7FCu0LIBJ2S4v1kgpJy6fEF1aqo8imCiwt+QisWzteEpVP1cOkCJfmq/APSEuOUmhCcmaMdwouPSX9ffMqJ7gipFxOMqdqTJ1S9ZJHqPLF6oOQV5Zzeo6e7P6xO3dM1sSDeIdSjdUVebSvWz9EbXaV1Z57X7uOT1LdDr2YF+Xw+HTlyRPv371dVVZUSEhLUq1cvderUyanTv009RqeTJ0/K4/EoOTlZrQFGqHfvHvlKj9iNuiiPCk9uUteaOPWc/Kwy2tWn2jEDY/TUwiptOSCddYKyJn2uKuO/0JqS3GYJPXHihN555x3t3r1bXq+XXO9/dsUVV2jMmDFq3769LjRqamo0Y8YMtWnTRo899phaisrKSnOG+Pj4RsewXhwYGVFR53+HUE9o8bd0Rv7wi0ryquBPOYpr93PdbBMfrYdGxem+/9WoOnWp6pLXKz4qRt+e+q5JAQcPHtS8efNUXl6uLl26KD8/X23btrXI2LZtm7Zu3WqLvueee/RbANm8WoozZ85o1qxZSklJ0eTJk43YUJABZs+ebWMfffRRxcTE6HyjXkJlhf9GVGKt2o7fL09WToPBXdtHy5u4Q76O852r+tPCytqqRic/duyYXnvtNZ06dUojRozQDTfcoNjYWP/z66+/XuvXr9eVV16pSxHV1dXat2+fvv76aw0YMKDB8y+//NIcGge+UKgvXgmJP13WKXHsd/Jknna6pO0NBn9x6JDOZvxbLpn21uiERiffsGGDkdm3b19Lq4FkAq4LCwsv6ILPBxYsWGDpNxCk848//viC9wcWobFZ2eIEIX5wqeL6llFI5Tv4L0WlDlV0an30nK46ptlF/3Ee1fjfXOf85HfoE3ZitrZbtmyxtAOZLV3YDz/8YB5O/aW+DhkyRO3atQsac/z4cRtTWlpqTdagQYPUvXv3oDGkO/Q45DgjjjN8+HDt2rXL5gwda+s8fVqbN2+2Bg55yO3QoUOjel599dWmwyeffKKxY8f672/atMn0Qh7yA+1CmSkpKTGboHO3bt2svh49etTu5+Xlae/evfYiTV911VXq2LFjkG127txpwdK5c2frQxIT64PSCPXk5imuoE4JI0uMTMPZo6rdWqjadr+TNzpV/yyu0M7K4OJf6yg3IL132IVSIxFIjenatWvQMxTCYKFITU1Vz549zTjLli2zxaMo3r9q1SrdcccdZmCwY8cOvfHGGzp79qySkpIs/a1bt07XXXedbr75ZhuDQV966SX9+OOPiouLM+cixRM9ffr00aRJk4Lk04HPnTtXFRUV1sTgDJ9++qnuuusu9e/fP+w6IR3SPvroIyM3LS3N5K1YsUKjR48OGot89Dlw4IARAVgr5eiWW25RcXGxrQlZ7hgcDB0mTJhg/QfOQEbgGTqS7smEDz74YAChbdoq6b6bnBODrcHa1jn1sXy5/lsxUKvOZDdYzJDO+cpLC08ohsbrwnWANEMYIBCMpQ5BImQSFRgSA+EALPTtt9+2hWDEhQsXGknjx4/X5ZdfbkZctGiRVq9ebY4xbNgwvfXWWxbhI0eO1NChQ40gum2ICwUOsXjxYvt77733mmMdPnzYCEAuMsgCoUBfegHW9MEHH1hzR6rF2BC8ceNG/1i6XTIDZQaHqq2tNUddu3atOYVx4TRXBANdN+vEjm+++aZfh88++0wZGRmaMmWKRS99CrLdxs6fBz1Z9zu/0hoovLYmQ/PCkFnnnBr+Jf9uxUSH79wwKimFtEhEBKJ3797mve6LlGHKOOO/+uorWyhpmpSIYVgIBGE8lP/mm2/McwcOHGjvZQ952WWX6dZbb7V5Pv/8cyMS4iCGZoxMgTPcfvvtCvfxLxmDFw0a+iGDKMNQjC8rK1NjwLBEGSmSiCHdQmbo3pZMgnwyzocffqg1a9YYwciAGLOrIwt93fJCn4HD4Ax79uyx8YwlUnF0rrEh9jZdXGHRCT1Ul/eKfNvHOVf1bBd5O+jZ04MaLMDn/DzU7271byQ6XUUwMmmERVIrXEAQLxfLly+3v3geXSOREJqme/ToYVGM0d1I4WAiEBxSYDQ8nJqJg1CfArcUjCGyQ0F5wJEw1rRp0yzi0X/ixIkWTThWUygoKDAjz5kzx+rdtdde22AMer344os2d1ZWlumB0yHXdTL+xw6BgCzqP8FBnWbs+++/b4EC8ddcc41FPQgKL0+6U9QzHpLv0PMq9SXp6ZODVeYLTpmQObrbUN2X9wc1B4SwB3333XctOkJJAkQSTQNeTmSQ5kgzGDiwEeCahWBY17gYKBCkVFImi3SjI3QMz0MzBsBJIJ5txuDBg81IGLYlhwEYe/r06RYx4UqN2yg98sgj5mgAeS+88IJ/DPKwSWADiD3QGx1ZF6WIOs9c2I6ASE9Pt7ENWs/oPs/Km/J7/ePEIO2rbbidyErO1F8LHmg01QaCIk6HRnrEMxGO0fFCUggnRzNnzjTPw6MzMzOtw+P5e++9Z4sAPF+yZIkRSprNzc21ha9cudI6Q8B8vIf3Moa5qMPIIFXxXpoS6lw4kkjvrhOQ3jE4c1EPqV8YtTkg85lnnvGXkFCQanFcsgRAH/dgxQVORR/gRixj0AEn7Nevn+3r6TFwarecuLUUNGAlKjpWtXlztO+7x52rU0HPfI6MJwv+rNT4cz/3vO2228yzKPzz5883I3MNsRBFWqRzdVt+lIYwSMDbqX2kWbdmQjiLvfHGG7V06VLzbryTNMZpFEal5kAa3S4yX3/9dTulwqB4dThCKRGjRo2yZovTHYzOeGTTaSMvdB/dwHaNNIEu2I/TsdJo5eTk2BaFCA2cFwK59/LLLxth6AvpRL2bebAl68XpSNk4GykcWHF50kGg4LhYh/2UTK0+tFleX63dY8/5cP4kjekxXC0BhFGDWAyCiSS8jUVwD8LpQN19Kn/pdjEijQhEshA8EaPyHMOxWIzujsFJ6BRdBwKkeeos3ksa4z4k01iRzokkIhzDoCPOQNrnHuPdfeKdd97pbzpcEL0Qnp2dbZ14Y8BxIYGeAcdDFluS77//3t43btw4i1D0pKxs377dOljWVVRUZLbC2ckarBtHwMkhEuJxILZz2OMpB01+6++JjdO17OBa+z+3fbZmjnhCKXG/7lMJPBBiSS3NnW2ilkt+YwcTjHEP/EPng2giDKO783D93HPP+clvDKT7c9HxlwCdcQjmD8wWlCSyydSpU81ZsRXPw2WUcHM0+62/Cb1ussjkZ0zWsF9NJoAYvOpcDOWmsKZOmRgDUeHmYx9K14mn01FCPHWX9xCRTeFcdfwlcJ2vuYbLzUYtmaNJjXPTspWd0l2HK49pZOZQXWogCklvr776qrX9EErUktJJXRcbIOhciG4KzX7ReuG+ldpRVqS/DZmiSxE0FRz3sS8lSqllEH0hPspqKai31G7qe7iP45oDKTfyzflWhMg351shIoS2MkQIbWWIEBpBBBFEcMHwf+DOjCyuroLAAAAAAElFTkSuQmCC";
const _imports_3 = "data:image/png;base64,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";
const SectionReview_vue_vue_type_style_index_0_scoped_2134d2f2_lang = "";
const _sfc_main = {
  __name: "SectionReview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-review" }, _attrs))} data-v-2134d2f2>`);
      _push(ssrRenderComponent(MContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-review-content" data-v-2134d2f2${_scopeId}><h4 class="h-l" data-v-2134d2f2${_scopeId}>Отзывы на площадках</h4><div class="section-review__links" data-v-2134d2f2${_scopeId}><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_0)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_1)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_2)} data-v-2134d2f2${_scopeId}></div><div class="section-review-item" data-v-2134d2f2${_scopeId}><a href="#" class="section-review-item-link" data-v-2134d2f2${_scopeId}></a><img${ssrRenderAttr("src", _imports_3)} data-v-2134d2f2${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "section-review-content" }, [
                createVNode("h4", { class: "h-l" }, "Отзывы на площадках"),
                createVNode("div", { class: "section-review__links" }, [
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_0 })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_1 })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_2 })
                  ]),
                  createVNode("div", { class: "section-review-item" }, [
                    createVNode("a", {
                      href: "#",
                      class: "section-review-item-link"
                    }),
                    createVNode("img", { src: _imports_3 })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/shared/section-review/SectionReview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SectionReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2134d2f2"]]);
export {
  SectionCircles as S,
  SectionReview as a
};
