import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const install = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (isClient)
    pinia.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia.state.value;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const main = "";
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("./assets/index-9994349c.js")
    /* no children */
  },
  {
    path: "/about",
    name: "/about",
    component: () => import("./assets/about-7862c172.js")
    /* no children */
  },
  {
    path: "/branches",
    name: "/branches",
    component: () => import("./assets/branches-764200c3.js")
    /* no children */
  },
  {
    path: "/concept",
    /* internal name: '/concept' */
    /* no component */
    children: [
      {
        path: ":concept",
        name: "/concept/[concept]",
        component: () => import("./assets/_concept_-5621cb21.js")
        /* no children */
      }
    ]
  },
  {
    path: "/concepts",
    name: "/concepts",
    component: () => import("./assets/concepts-bfd286ac.js")
    /* no children */
  },
  {
    path: "/contacts",
    name: "/contacts",
    component: () => import("./assets/contacts-e3b96741.js")
    /* no children */
  },
  {
    path: "/devices",
    name: "/devices",
    component: () => import("./assets/devices-c7ca887a.js")
    /* no children */
  },
  {
    path: "/faq",
    name: "/faq",
    component: () => import("./assets/faq-71d54603.js")
    /* no children */
  },
  {
    path: "/inside",
    name: "/inside",
    component: () => import("./assets/inside-ae3282e9.js")
    /* no children */
  },
  {
    path: "/master",
    name: "/master",
    component: () => import("./assets/master-99a4970b.js")
    /* no children */
  },
  {
    path: "/masters",
    name: "/masters",
    component: () => import("./assets/masters-86a7ceb2.js")
    /* no children */
  },
  {
    path: "/media",
    name: "/media",
    component: () => import("./assets/media-a483392b.js")
    /* no children */
  },
  {
    path: "/media-post",
    name: "/media-post",
    component: () => import("./assets/media-post-d05731ab.js")
    /* no children */
  },
  {
    path: "/nav",
    name: "/nav",
    component: () => import("./assets/nav-62d6dff5.js")
    /* no children */
  },
  {
    path: "/policy",
    name: "/policy",
    component: () => import("./assets/policy-c6a08481.js")
    /* no children */
  },
  {
    path: "/prices",
    name: "/prices",
    component: () => import("./assets/prices-176a35c9.js")
    /* no children */
  },
  {
    path: "/procedures",
    name: "/procedures",
    component: () => import("./assets/procedures-584cc55c.js")
    /* no children */
  },
  {
    path: "/review",
    name: "/review",
    component: () => import("./assets/review-e3d11fd8.js")
    /* no children */
  },
  {
    path: "/review-inside",
    name: "/review-inside",
    component: () => import("./assets/review-inside-c560f45b.js")
    /* no children */
  },
  {
    path: "/tech",
    name: "/tech",
    component: () => import("./assets/tech-f40c5527.js")
    /* no children */
  }
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = resolveComponent("RouterView");
  _push(ssrRenderComponent(_component_RouterView, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const createApp = ViteSSG(
  App,
  {
    routes,
    base: "/"
  },
  (ctx) => {
    Object.values(/* @__PURE__ */ Object.assign({ "./modules/pinia.js": __vite_glob_0_0 })).forEach(
      (i) => {
        var _a;
        return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
      }
    );
  }
);
function includedRoutes(paths, routes2) {
  return Promise.all(
    routes2.flatMap((route) => {
      if (route.path === "/concept") {
        route.children.path = "/bright";
        route.children.name = "/concept/bright";
        return route;
      } else {
        return route;
      }
    })
  );
}
export {
  _export_sfc as _,
  createApp,
  includedRoutes
};
