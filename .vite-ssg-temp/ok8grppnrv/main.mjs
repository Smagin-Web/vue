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
        path: ":index",
        name: "/concept/[index]",
        component: () => import("./assets/_index_-950e49f4.js")
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
const setupLayouts = (routes2) => {
  const layouts = {};
  const modules = /* @__PURE__ */ Object.assign({});
  Object.entries(modules).forEach(([name, module]) => {
    let key = name.replace("/src/layouts/", "").replace(".vue", "");
    layouts[key] = module.default;
  });
  function deepSetupLayout(routes3, top = true) {
    return routes3.map((route) => {
      var _a, _b, _c, _d, _e, _f;
      if (((_a = route.children) == null ? void 0 : _a.length) > 0) {
        route.children = deepSetupLayout(route.children, false);
      }
      if (top) {
        const skipLayout = !route.component && ((_b = route.children) == null ? void 0 : _b.find((r) => {
          var _a2;
          return (r.path === "" || r.path === "/") && ((_a2 = r.meta) == null ? void 0 : _a2.isLayout);
        }));
        if (skipLayout) {
          return route;
        }
        if (((_c = route.meta) == null ? void 0 : _c.layout) !== false) {
          return {
            path: route.path,
            component: layouts[((_d = route.meta) == null ? void 0 : _d.layout) || "default"],
            children: route.path === "/" ? [route] : [{ ...route, path: "" }],
            meta: {
              isLayout: true
            }
          };
        }
      }
      if ((_e = route.meta) == null ? void 0 : _e.layout) {
        return {
          path: route.path,
          component: layouts[(_f = route.meta) == null ? void 0 : _f.layout],
          children: [{ ...route, path: "" }],
          meta: {
            isLayout: true
          }
        };
      }
      return route;
    });
  }
  return deepSetupLayout(routes2);
};
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
    routes: setupLayouts(routes),
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
async function includedRoutes(paths, routes2) {
  paths.push("/concept/bright");
  console.log(paths);
  console.log(routes2[0].name);
  return paths;
}
export {
  _export_sfc as _,
  createApp,
  includedRoutes
};
