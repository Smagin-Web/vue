import { useSSRContext, mergeProps, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none"
  }, _attrs))}><path d="M0 2.01172C0 0.907149 0.895431 0.0117188 2 0.0117188H10C11.1046 0.0117188 12 0.907149 12 2.01172V3.01172H0V2.01172Z" fill="#6D6364"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.01172H12V9.01172C12 10.6686 10.6569 12.0117 9 12.0117H3C1.34315 12.0117 0 10.6686 0 9.01172V4.01172ZM2 6.51172C2 6.23558 2.22386 6.01172 2.5 6.01172H9.5C9.77614 6.01172 10 6.23558 10 6.51172C10 6.78786 9.77614 7.01172 9.5 7.01172H2.5C2.22386 7.01172 2 6.78786 2 6.51172ZM2.5 8.01172C2.22386 8.01172 2 8.23558 2 8.51172C2 8.78786 2.22386 9.01172 2.5 9.01172H9.5C9.77614 9.01172 10 8.78786 10 8.51172C10 8.23558 9.77614 8.01172 9.5 8.01172H2.5Z" fill="#6D6364"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconNew.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconNew = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const ButtonDecor_vue_vue_type_style_index_0_scoped_36222307_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "button-decor" }, _attrs))} data-v-36222307>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/buttons/ButtonDecor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ButtonDecor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-36222307"]]);
const CardNews_vue_vue_type_style_index_0_scoped_519b3a22_lang = "";
const _sfc_main = {
  __name: "CardNews",
  __ssrInlineRender: true,
  props: ["isArticle", "isNews"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-wrapper" }, _attrs))} data-v-519b3a22><a href="#" class="card-link" data-v-519b3a22></a><div class="card" data-v-519b3a22><div class="card-img-container" data-v-519b3a22><img class="card-img" src="https://static.zdravcity.ru/upload/main/fdd/1024_768_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0.jpg" data-v-519b3a22></div><div class="card-head-info" data-v-519b3a22><div class="card-head-info-date" data-v-519b3a22>`);
      _push(ssrRenderComponent(IconNew, null, null, _parent));
      _push(`<span class="card-date-text" data-v-519b3a22>15.05.2024</span></div>`);
      if (props.isNews) {
        _push(ssrRenderComponent(ButtonDecor, { class: "card-tag" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Новость`);
            } else {
              return [
                createTextVNode("Новость")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.isArticle) {
        _push(ssrRenderComponent(ButtonDecor, { class: "card-tag" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Статья `);
            } else {
              return [
                createTextVNode(" Статья ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.isNews) {
        _push(`<h5 class="h-sm-ultra card-heading" data-v-519b3a22> Название публикации </h5>`);
      } else {
        _push(`<!---->`);
      }
      if (props.isArticle) {
        _push(`<h5 class="h-sm-ultra card-heading" data-v-519b3a22> Более длинное название публикации в 2 строчки </h5>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-sm" data-v-519b3a22> Краткий анонс публикации. Lorem ipsum dolor sit amet consectetur. Purus dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit non velit elit nisl ut egestas. </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/cards/CardNews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-519b3a22"]]);
export {
  CardNews as C
};
