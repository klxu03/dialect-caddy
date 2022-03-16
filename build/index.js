var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-JKOEVWHU.css";

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/root.tsx
var meta = () => {
  return { title: "Dialect CaddyShack Subsidiary" };
};
var links = () => [
  {
    rel: "stylesheet",
    href: global_default
  }
];
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/utils/session.server.ts
var session_server_exports = {};
__export(session_server_exports, {
  createUserSession: () => createUserSession,
  getUser: () => getUser,
  getUserSession: () => getUserSession,
  login: () => login,
  logout: () => logout,
  register: () => register
});
init_react();
var import_bcrypt = __toESM(require("bcrypt"));

// app/routes/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/utils/session.server.ts
var import_remix3 = __toESM(require_remix());
async function login({ username, password }) {
  const user = await db.user.findUnique({
    where: {
      username
    }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcrypt.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
async function register({ username, password }) {
  const passwordHash = await import_bcrypt.default.hash(password, 10);
  return db.user.create({
    data: {
      username,
      passwordHash,
      type: "player"
    }
  });
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "dialect-caddy_session",
    secure: false,
    secrets: ["secret"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUser(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    });
    return user;
  } catch (error) {
    return null;
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix3.redirect)("/auth/logout", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/utils/db.server.ts
var db_server_exports = {};
__export(db_server_exports, {
  db: () => db2
});
init_react();
var import_client2 = require("@prisma/client");
var db2;
if (false) {
  db2 = new import_client2.PrismaClient();
  db2.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client2.PrismaClient();
    global.__db.$connect();
  }
  db2 = global.__db;
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/routes/utils/session.server.ts
init_react();
var import_bcrypt2 = __toESM(require("bcrypt"));
var import_remix4 = __toESM(require_remix());
async function login2({ username, password }) {
  const user = await db.user.findUnique({
    where: {
      username
    }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcrypt2.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
async function register2({ username, password }) {
  const passwordHash = await import_bcrypt2.default.hash(password, 10);
  return db.user.create({
    data: {
      username,
      passwordHash,
      type: "player"
    }
  });
}
var storage2 = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "dialect-caddy_session",
    secure: false,
    secrets: ["secret"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true
  }
});
async function createUserSession2(userId, redirectTo) {
  const session = await storage2.getSession();
  session.set("userId", userId);
  return (0, import_remix4.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage2.commitSession(session)
    }
  });
}
async function logout2(request) {
  const session = await storage2.getSession(request.headers.get("Cookie"));
  return (0, import_remix4.redirect)("/auth/logout", {
    headers: {
      "Set-Cookie": await storage2.destroySession(session)
    }
  });
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/auth/logout.tsx
var action = async ({ request }) => {
  return logout2(request);
};
var loader = async () => {
  return (0, import_remix5.redirect)("/");
};

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => login_default
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_react = require("react");
var action2 = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const fields = {
    loginType,
    username,
    password
  };
  switch (loginType) {
    case "login": {
      const user = await login2({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: { username: "Invalid credentials" }
        });
      }
      return createUserSession2(user.id, "/dashboard");
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: {
          username
        }
      });
      if (userExists) {
        return badRequest({
          fields,
          fieldErrors: {
            username: `User ${username} already exists`
          }
        });
      }
      const user = await register2({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldError: "Something went wrong trying to create the user"
        });
      }
      return createUserSession2(user.id, "/dashboard");
    }
  }
};
var badRequest = (data) => {
  return (0, import_remix6.json)(data, { status: 400 });
};
function Login() {
  const actionData = (0, import_remix6.useActionData)();
  (0, import_react.useEffect)(() => {
    console.log(actionData);
  }, [actionData]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Login or Register"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: true
  }), "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register"
  }), "Register")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "username"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit")));
}
var login_default = Login;

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action3,
  default: () => dashboard_default
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/components/Sidebar.tsx
init_react();
var import_react2 = require("react");
function Sidebar() {
  const [active, setActive] = (0, import_react2.useState)("home");
  return /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-wrapper"
  }, "This is a sidebar", /* @__PURE__ */ React.createElement("div", {
    className: "menu-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "home" ? "menu-item-active" : ""),
    onClick: () => setActive("home")
  }, "Home"), /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "caddies" && "menu-item-active"),
    onClick: () => setActive("caddies")
  }, "Caddies"), /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "help" && "menu-item-active"),
    onClick: () => setActive("help")
  }, "Help"))));
}

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/dashboard.tsx
var action3 = async ({ request }) => {
  const form = await request.formData();
  const players = form.get("players");
  if (typeof players !== "string") {
    throw new Error("players is not a string");
  }
  const playersArr = players.split(",");
  console.log(playersArr);
  return Promise.resolve(true);
};
function Dashboard() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "body-container"
  }, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)));
}
var dashboard_default = Dashboard;

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2,
  links: () => links2
});
init_react();
var import_react3 = require("react");

// app/styles/dashboard/styles.css
var styles_default = "/build/_assets/styles-FNTYTHNK.css";

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  }
];
var Row = ({ round }) => {
  const [active, setActive] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("td", null, round.date), /* @__PURE__ */ React.createElement("td", null, round.owner), /* @__PURE__ */ React.createElement("td", null, round.players), /* @__PURE__ */ React.createElement("td", null, round.caddies), /* @__PURE__ */ React.createElement("td", {
    onClick: () => {
      setActive(!active);
    }
  }, active ? /* @__PURE__ */ React.createElement("div", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-content"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setActive(false);
      console.log("active", active);
    }
  }, "Close"), /* @__PURE__ */ React.createElement("p", null, "Delete"), /* @__PURE__ */ React.createElement("p", null, "View"), /* @__PURE__ */ React.createElement("p", null, "Edit"))) : /* @__PURE__ */ React.createElement("button", null, "...")));
};
var AddRound = () => {
  const [date, setDate] = (0, import_react3.useState)("");
  const [players, setPlayers] = (0, import_react3.useState)([]);
  const [player, setPlayer] = (0, import_react3.useState)("");
  const [caddies, setCaddies] = (0, import_react3.useState)([]);
  const [caddy, setCaddy] = (0, import_react3.useState)("");
  const [numCaddies, setNumCaddies] = (0, import_react3.useState)(0);
  return /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "/dashboard"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "date"
  }, "Date"), /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    onChange: (e) => {
      setDate(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "player"
  }, "Search Players "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Add Players",
    value: player,
    onChange: (event) => {
      setPlayer(event.target.value);
    }
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setPlayers([...players, player]);
      setPlayer("");
    }
  }, "Add"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Currently Added Players: "), players.map((player2) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: player2,
      style: { display: "flex" }
    }, /* @__PURE__ */ React.createElement("p", null, "(", player2, ")"), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        e.preventDefault();
        setPlayers(players.filter((currPlayer) => currPlayer !== player2));
      }
    }, "X"));
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "caddy"
  }, "Search Caddies "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Add Caddies",
    value: caddy,
    onChange: (event) => {
      setCaddy(event.target.value);
    }
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      if (caddies.length + 1 <= numCaddies) {
        setCaddies([...caddies, caddy]);
        setCaddy("");
      }
    }
  }, "Add"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "How many caddies?"), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setNumCaddies(Math.max(numCaddies - 1, caddies.length));
    }
  }, "-"), /* @__PURE__ */ React.createElement("p", null, numCaddies), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setNumCaddies(numCaddies + 1);
    }
  }, "+")), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Currently Added Caddies: "), caddies.map((caddy2) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: caddy2,
      style: { display: "flex" }
    }, /* @__PURE__ */ React.createElement("p", null, "(", caddy2, ")"), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        e.preventDefault();
        setCaddies(caddies.filter((currCaddy) => currCaddy !== caddy2));
      }
    }, "X"));
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "date",
    value: date
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "players",
    value: players
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "caddies",
    value: caddies
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Save Round"));
};
function Dashboard2() {
  const [modalActive, setModalActive] = (0, import_react3.useState)(false);
  const data = [
    {
      id: 1,
      date: "3/17 @ 12:51 PM",
      owner: "KurtisPlayer1",
      players: 2,
      caddies: 1
    },
    {
      id: 2,
      date: "3/18 @ 12:51 PM",
      owner: "KurtisPlayer2",
      players: 5,
      caddies: 2
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Home"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setModalActive(!modalActive);
    }
  }, modalActive ? "Close Round" : "Add Round")), /* @__PURE__ */ React.createElement("div", null, modalActive ? /* @__PURE__ */ React.createElement(AddRound, null) : /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("th", null, "Date"), /* @__PURE__ */ React.createElement("th", null, "Owner"), /* @__PURE__ */ React.createElement("th", null, "# Players"), /* @__PURE__ */ React.createElement("th", null, "# Caddies"), /* @__PURE__ */ React.createElement("th", null, "R")), data.map((round) => {
    return /* @__PURE__ */ React.createElement(Row, {
      key: round.id,
      round
    });
  }))));
}
var dashboard_default2 = Dashboard2;

// route:/media/HDD/Kevin/(C) Computer Science Projects/KevThatDevs/dialect-caddy/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "body-container",
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c917ad78", "entry": { "module": "/build/entry.client-4A7Z7Q4L.js", "imports": ["/build/_shared/chunk-LNNNJZOE.js", "/build/_shared/chunk-7NHNT3JL.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WL4GPCAT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-CBDYDKMT.js", "imports": ["/build/_shared/chunk-LEH72TBY.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-PJLSIVV2.js", "imports": ["/build/_shared/chunk-LEH72TBY.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-K43QJH5A.js", "imports": ["/build/_shared/chunk-V66YSMR3.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-6VI4HUKC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-L4D3GRV4.js", "imports": ["/build/_shared/chunk-V66YSMR3.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/utils/db.server": { "id": "routes/utils/db.server", "parentId": "root", "path": "utils/db/server", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/utils/db.server-MKT2BO47.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/utils/session.server": { "id": "routes/utils/session.server", "parentId": "root", "path": "utils/session/server", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/utils/session.server-RHVQF37P.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C917AD78.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/utils/session.server": {
    id: "routes/utils/session.server",
    parentId: "root",
    path: "utils/session/server",
    index: void 0,
    caseSensitive: void 0,
    module: session_server_exports
  },
  "routes/utils/db.server": {
    id: "routes/utils/db.server",
    parentId: "root",
    path: "utils/db/server",
    index: void 0,
    caseSensitive: void 0,
    module: db_server_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb290LnRzeCIsICJyb3V0ZTovbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvcm91dGVzL3V0aWxzL2RiLnNlcnZlci50cyIsICJyb3V0ZTovbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHN4IiwgIi4uL2FwcC9yb3V0ZXMvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAicm91dGU6L21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAicm91dGU6L21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsICJyb3V0ZTovbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgudHN4IiwgInJvdXRlOi9tZWRpYS9IREQvS2V2aW4vKEMpIENvbXB1dGVyIFNjaWVuY2UgUHJvamVjdHMvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5cbmFwcC5hbGwoXG4gIFwiKlwiLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlci50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy91dGlscy9kYi5zZXJ2ZXIudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9tZWRpYS9IREQvS2V2aW4vKEMpIENvbXB1dGVyIFNjaWVuY2UgUHJvamVjdHMvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9tZWRpYS9IREQvS2V2aW4vKEMpIENvbXB1dGVyIFNjaWVuY2UgUHJvamVjdHMvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL21lZGlhL0hERC9LZXZpbi8oQykgQ29tcHV0ZXIgU2NpZW5jZSBQcm9qZWN0cy9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvbWVkaWEvSEREL0tldmluLyhDKSBDb21wdXRlciBTY2llbmNlIFByb2plY3RzL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3V0aWxzL3Nlc3Npb24uc2VydmVyXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ1dGlscy9zZXNzaW9uL3NlcnZlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvdXRpbHMvZGIuc2VydmVyXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy91dGlscy9kYi5zZXJ2ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidXRpbHMvZGIvc2VydmVyXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC9sb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC9sb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4geyB0aXRsZTogXCJEaWFsZWN0IENhZGR5U2hhY2sgU3Vic2lkaWFyeVwiIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG50eXBlIERvY3VtZW50VHlwZSA9IHtcblx0Y2hpbGRyZW46IGFueTtcblx0Ly8gICB0aXRsZTogc3RyaW5nO1xufTtcblxuY29uc3QgRG9jdW1lbnQgPSAoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFR5cGUpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHR7LyogPHRpdGxlPnt0aXRsZSA/IHRpdGxlIDogJ015IEN1c3RvbSBEZWZhdWx0IFRpdGxlJ308L3RpdGxlPiAqL31cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PExpdmVSZWxvYWQgLz5cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdCk7XG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcic7XG5cbmltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4JztcblxudHlwZSBVc2VySW5mbyA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbi8vIExvZ2luIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VySW5mbykge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcm5hbWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gSWYgdGhlcmUgZG9lc24ndCBleGlzdCBzdWNoIGEgdXNlclxuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gIC8vIE5vdyBjaGVjayB0aGUgcGFzc3dvcmRcbiAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gdXNlcjtcbn1cblxuLy8gUmVnaXN0ZXIgVXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXJJbmZvKSB7XG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgcmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkSGFzaCxcbiAgICAgIHR5cGU6ICdwbGF5ZXInLFxuICAgIH0sXG4gIH0pO1xufVxuXG4vLyBDcmVhdGUgc2Vzc2lvbiBzdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnZGlhbGVjdC1jYWRkeV9zZXNzaW9uJyxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgc2VjcmV0czogWydzZWNyZXQnXSxcbiAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgcGF0aDogJy8nLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNjAsIC8vIDYwIHNlY3MgcGVyIG1pbiAqIDYwIG1pbnMgcGVyIGhvdXIgKiAyNCBob3VycyBwZXIgZGF5KiA2MCBkYXlzXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KTtcblxuLy8gQ3JlYXRlIHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoJ3VzZXJJZCcsIHVzZXJJZCk7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEdldCB1c2VyIHNlc3Npb25cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xufVxuXG4vLyBHZXQgbG9nZ2VkIGluIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIExvZyBvdXQgdXNlciBhbmQgZGVzdHJveSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvYXV0aC9sb2dvdXQnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuXG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgZGIuJGNvbm5lY3QoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpO1xuICB9XG5cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJ34vcm91dGVzL3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG4gIC8vIExvZyB0aGlzIHBlcnNvbiBvdXQgb2YgdGhlIHNlc3Npb25cbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdCgnLycpO1xufTtcbiIsICJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGIuc2VydmVyJztcblxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xuXG50eXBlIFVzZXJJbmZvID0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxuLy8gTG9naW4gdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXJJbmZvKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICB9LFxuICB9KTtcblxuICAvLyBJZiB0aGVyZSBkb2Vzbid0IGV4aXN0IHN1Y2ggYSB1c2VyXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgLy8gTm93IGNoZWNrIHRoZSBwYXNzd29yZFxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG4vLyBSZWdpc3RlciBVc2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogVXNlckluZm8pIHtcbiAgY29uc3QgcGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcblxuICByZXR1cm4gZGIudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmRIYXNoLFxuICAgICAgdHlwZTogJ3BsYXllcicsXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIENyZWF0ZSBzZXNzaW9uIHN0b3JhZ2VcbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6ICdkaWFsZWN0LWNhZGR5X3Nlc3Npb24nLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbJ3NlY3JldCddLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA2MCwgLy8gNjAgc2VjcyBwZXIgbWluICogNjAgbWlucyBwZXIgaG91ciAqIDI0IGhvdXJzIHBlciBkYXkqIDYwIGRheXNcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG4vLyBDcmVhdGUgc2Vzc2lvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICBzZXNzaW9uLnNldCgndXNlcklkJywgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gR2V0IHVzZXIgc2Vzc2lvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XG59XG5cbi8vIEdldCBsb2dnZWQgaW4gdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KCd1c2VySWQnKTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiB1c2VySWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gTG9nIG91dCB1c2VyIGFuZCBkZXN0cm95IHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcblxuICByZXR1cm4gcmVkaXJlY3QoJy9hdXRoL2xvZ291dCcsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnU2V0LUNvb2tpZSc6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwganNvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi9yb3V0ZXMvdXRpbHMvZGIuc2VydmVyJztcbmltcG9ydCB7XG4gIGxvZ2luLFxuICByZWdpc3RlcixcbiAgY3JlYXRlVXNlclNlc3Npb24sXG59IGZyb20gJ34vcm91dGVzL3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgbG9naW5UeXBlID0gZm9ybS5nZXQoJ2xvZ2luVHlwZScpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KCd1c2VybmFtZScpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KCdwYXNzd29yZCcpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHtcbiAgICBsb2dpblR5cGUsXG4gICAgdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQsXG4gIH07XG5cbiAgc3dpdGNoIChsb2dpblR5cGUpIHtcbiAgICBjYXNlICdsb2dpbic6IHtcbiAgICAgIC8vIEZpbmQgdXNlclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgdXNlciBjb3JyZWN0bHkgbG9nZ2VkIGluXG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmaWVsZEVycm9yczogeyB1c2VybmFtZTogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdXNlciBzZXNzaW9uXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgJy9kYXNoYm9hcmQnKTtcbiAgICB9XG5cbiAgICBjYXNlICdyZWdpc3Rlcic6IHtcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzXG4gICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh1c2VyRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZmllbGRFcnJvcnM6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBgVXNlciAke3VzZXJuYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB1c2VyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmaWVsZEVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgdHJ5aW5nIHRvIGNyZWF0ZSB0aGUgdXNlcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgJy9kYXNoYm9hcmQnKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogYW55KSA9PiB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59O1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbkRhdGEpO1xuICB9LCBbYWN0aW9uRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPkxvZ2luIG9yIFJlZ2lzdGVyPC9sZWdlbmQ+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJsb2dpblR5cGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibG9naW5UeXBlXCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZmllbGRzZXQ+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnfi9jb21wb25lbnRzL1NpZGViYXInO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBwbGF5ZXJzID0gZm9ybS5nZXQoJ3BsYXllcnMnKTtcbiAgaWYgKHR5cGVvZiBwbGF5ZXJzICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcigncGxheWVycyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGNvbnN0IHBsYXllcnNBcnIgPSBwbGF5ZXJzLnNwbGl0KCcsJyk7XG4gIGNvbnNvbGUubG9nKHBsYXllcnNBcnIpO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xufTtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2hvbWUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgIFRoaXMgaXMgYSBzaWRlYmFyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAnbWVudS1pdGVtICcgKyAoYWN0aXZlID09ICdob21lJyA/ICdtZW51LWl0ZW0tYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCdob21lJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICdtZW51LWl0ZW0gJyArIChhY3RpdmUgPT0gJ2NhZGRpZXMnICYmICdtZW51LWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSgnY2FkZGllcycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhZGRpZXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9eydtZW51LWl0ZW0gJyArIChhY3RpdmUgPT0gJ2hlbHAnICYmICdtZW51LWl0ZW0tYWN0aXZlJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoJ2hlbHAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIZWxwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRhc2hib2FyZFN0eWxlcyBmcm9tICd+L3N0eWxlcy9kYXNoYm9hcmQvc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcbiAge1xuICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgIGhyZWY6IGRhc2hib2FyZFN0eWxlcyxcbiAgfSxcbl07XG5cbmNvbnN0IFJvdyA9ICh7IHJvdW5kIH06IGFueSkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+e3JvdW5kLmRhdGV9PC90ZD5cbiAgICAgIDx0ZD57cm91bmQub3duZXJ9PC90ZD5cbiAgICAgIDx0ZD57cm91bmQucGxheWVyc308L3RkPlxuICAgICAgPHRkPntyb3VuZC5jYWRkaWVzfTwvdGQ+XG4gICAgICA8dGRcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlJywgYWN0aXZlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxwPkRlbGV0ZTwvcD5cbiAgICAgICAgICAgICAgPHA+VmlldzwvcD5cbiAgICAgICAgICAgICAgPHA+RWRpdDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24+Li4uPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5jb25zdCBBZGRSb3VuZCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IFtjYWRkaWVzLCBzZXRDYWRkaWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjYWRkeSwgc2V0Q2FkZHldID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtudW1DYWRkaWVzLCBzZXROdW1DYWRkaWVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0RGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYXllclwiPlNlYXJjaCBQbGF5ZXJzIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiQWRkIFBsYXllcnNcIlxuICAgICAgICB2YWx1ZT17cGxheWVyfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0UGxheWVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZXRQbGF5ZXJzKFsuLi5wbGF5ZXJzLCBwbGF5ZXJdKTtcbiAgICAgICAgICBzZXRQbGF5ZXIoJycpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgPGgzPkN1cnJlbnRseSBBZGRlZCBQbGF5ZXJzOiA8L2gzPlxuXG4gICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwbGF5ZXJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPHA+KHtwbGF5ZXJ9KTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBzZXRQbGF5ZXJzKFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLmZpbHRlcigoY3VyclBsYXllcikgPT4gY3VyclBsYXllciAhPT0gcGxheWVyKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FkZHlcIj5TZWFyY2ggQ2FkZGllcyA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIkFkZCBDYWRkaWVzXCJcbiAgICAgICAgdmFsdWU9e2NhZGR5fVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2V0Q2FkZHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChjYWRkaWVzLmxlbmd0aCArIDEgPD0gbnVtQ2FkZGllcykge1xuICAgICAgICAgICAgc2V0Q2FkZGllcyhbLi4uY2FkZGllcywgY2FkZHldKTtcbiAgICAgICAgICAgIHNldENhZGR5KCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgIDxoMz5Ib3cgbWFueSBjYWRkaWVzPzwvaDM+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0TnVtQ2FkZGllcyhNYXRoLm1heChudW1DYWRkaWVzIC0gMSwgY2FkZGllcy5sZW5ndGgpKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHA+e251bUNhZGRpZXN9PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldE51bUNhZGRpZXMobnVtQ2FkZGllcyArIDEpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICArXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICA8aDM+Q3VycmVudGx5IEFkZGVkIENhZGRpZXM6IDwvaDM+XG5cbiAgICAgICAge2NhZGRpZXMubWFwKChjYWRkeSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2FkZHl9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPHA+KHtjYWRkeX0pPC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHNldENhZGRpZXMoXG4gICAgICAgICAgICAgICAgICAgIGNhZGRpZXMuZmlsdGVyKChjdXJyQ2FkZHkpID0+IGN1cnJDYWRkeSAhPT0gY2FkZHkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGF0ZVwiIHZhbHVlPXtkYXRlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGxheWVyc1wiIHZhbHVlPXtwbGF5ZXJzfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2FkZGllc1wiIHZhbHVlPXtjYWRkaWVzfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBSb3VuZDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgW21vZGFsQWN0aXZlLCBzZXRNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGRhdGU6ICczLzE3IEAgMTI6NTEgUE0nLFxuICAgICAgb3duZXI6ICdLdXJ0aXNQbGF5ZXIxJyxcbiAgICAgIHBsYXllcnM6IDIsXG4gICAgICBjYWRkaWVzOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBkYXRlOiAnMy8xOCBAIDEyOjUxIFBNJyxcbiAgICAgIG93bmVyOiAnS3VydGlzUGxheWVyMicsXG4gICAgICBwbGF5ZXJzOiA1LFxuICAgICAgY2FkZGllczogMixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TW9kYWxBY3RpdmUoIW1vZGFsQWN0aXZlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge21vZGFsQWN0aXZlID8gJ0Nsb3NlIFJvdW5kJyA6ICdBZGQgUm91bmQnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7bW9kYWxBY3RpdmUgPyAoXG4gICAgICAgICAgPEFkZFJvdW5kIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPk93bmVyPC90aD5cbiAgICAgICAgICAgICAgPHRoPiMgUGxheWVyczwvdGg+XG4gICAgICAgICAgICAgIDx0aD4jIENhZGRpZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+UjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge2RhdGEubWFwKChyb3VuZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPFJvdyBrZXk9e3JvdW5kLmlkfSByb3VuZD17cm91bmR9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCAiaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lkZWJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFNpZGViYXIgLz5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9keS1jb250YWluZXJcIlxuXHRcdFx0XHRzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuXHRcdFx0XHQ8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2Jsb2dcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdERlZXAgRGl2ZSBKb2tlcyBBcHAgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHRSZW1peCBEb2NzXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2M5MTdhZDc4JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC00QTdaN1E0TC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTE5OTkpaT0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03TkhOVDNKTC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtV0w0R1BDQVQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9sb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ2luLUNCRFlES01ULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MRUg3MlRCWS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ291dCc6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ291dC1QSkxTSVZWMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTEVINzJUQlkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtSzQzUUpINUEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVY2NllTTVIzLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZC9pbmRleCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LTZWSTRIVUtDLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTDREM0dSVjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVY2NllTTVIzLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91dGlscy9kYi5zZXJ2ZXInOnsnaWQnOidyb3V0ZXMvdXRpbHMvZGIuc2VydmVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3V0aWxzL2RiL3NlcnZlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91dGlscy9kYi5zZXJ2ZXItTUtUMkJPNDcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlcic6eydpZCc6J3JvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid1dGlscy9zZXNzaW9uL3NlcnZlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy91dGlscy9zZXNzaW9uLnNlcnZlci1SSFZRRjM3UC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1DOTE3QUQ3OC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FB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
