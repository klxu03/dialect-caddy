var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/components/Sidebar.tsx
init_react();
var import_react = require("react");
var import_remix3 = __toESM(require_remix());

// app/utils/session.server.ts
init_react();
var import_bcrypt = __toESM(require("bcrypt"));

// app/utils/db.server.ts
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

// app/utils/session.server.ts
var import_remix2 = __toESM(require_remix());
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
var storage = (0, import_remix2.createCookieSessionStorage)({
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
  return (0, import_remix2.redirect)(redirectTo, {
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
  console.log("getUser", userId);
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
async function getUserFromUsername(username) {
  console.log("username param is ", username);
  try {
    const user = await db.user.findUnique({
      where: {
        username
      }
    });
    console.log("getUserFromUsername", user);
    return user;
  } catch (error) {
    console.log("getUserFromUsername has an error");
    return null;
  }
}
async function getUsernameFromUserId(userId) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    });
    const username = user.username;
    return username;
  } catch (error) {
    console.log("getUsernameFromUserId has an error");
    return null;
  }
}
async function getRoundsFromUser(userId) {
  try {
    const rounds_userOnRound = await db.userOnRound.findMany({
      where: {
        userId
      }
    });
    console.log("rounds_userOnRound", rounds_userOnRound);
    let rounds = [];
    for (let round of rounds_userOnRound) {
      const newRound = await db.round.findUnique({
        where: {
          id: round.roundId
        }
      });
      rounds = [...rounds, newRound];
    }
    return rounds;
  } catch (error) {
    console.log("getRoundFromUser has an error");
    return null;
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  session.unset("userId");
  const userId = session.get("userId");
  console.log("getUser", userId);
  return (0, import_remix2.redirect)("/dashboard", {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/components/Sidebar.tsx
function Sidebar() {
  const data = (0, import_remix3.useLoaderData)();
  console.log(data);
  const [active, setActive] = (0, import_react.useState)("home");
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
  }, "Help")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    action: "/auth/logout",
    method: "POST"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout")), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/auth/login"
  }, "Log In"))));
}

// app/styles/global.css
var global_default = "/build/_assets/global-JKOEVWHU.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/root.tsx
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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar, null), children);
};

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action,
  default: () => dashboard_default
});
init_react();
var import_remix5 = __toESM(require_remix());
var action = async ({ request }) => {
  var _a;
  const form = await request.formData();
  const user = await getUser(request);
  if (typeof user === void 0 || typeof user === null) {
    throw new Error("user is not logged in for owner");
  }
  const date = (_a = form.get("date")) == null ? void 0 : _a.toString();
  const roundTime = new Date(date);
  console.log("roundTime", roundTime);
  const players = form.get("players");
  if (typeof players !== "string") {
    throw new Error("players is not a string");
  }
  const playersArr = players.split(",");
  console.log("playersArr", playersArr);
  let usersId = [user.id];
  for (let player of playersArr) {
    if (player == "")
      continue;
    console.log("player for loop", player);
    const newPlayer = await getUserFromUsername(player);
    console.log("newPlayer player for loop", newPlayer);
    const newId = newPlayer.id;
    usersId = [...usersId, newId];
  }
  const caddies = form.get("caddies");
  if (typeof caddies !== "string") {
    throw new Error("caddies is not a string");
  }
  const caddiesArr = caddies.split(",");
  console.log("caddiesArr", caddiesArr);
  for (let caddy of caddiesArr) {
    if (caddy == "")
      continue;
    const newCaddy = await getUserFromUsername(caddy);
    console.log("newCaddy caddy for loop", newCaddy);
    const newId = newCaddy.id;
    usersId = [...usersId, newId];
  }
  console.log("usersId", usersId);
  const round = await db.round.create({
    data: {
      ownerId: user.id,
      roundTime,
      usersId
    }
  });
  console.log("round created: ", round);
  for (let user2 of usersId) {
    const userOnRound = await db.userOnRound.create({
      data: {
        userId: user2,
        roundId: round.id
      }
    });
    console.log("userOnRound: ", userOnRound);
  }
  return Promise.resolve(true);
};
function Dashboard() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "body-container"
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}
var dashboard_default = Dashboard;

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/user-search/type/$type/user/$user/index.tsx
var user_exports = {};
__export(user_exports, {
  loader: () => loader
});
init_react();
async function loader({ params, request }) {
  const type = params.type;
  const userTypedIn = params.user;
  console.log(type, userTypedIn);
  try {
    let users = await db.user.findMany({
      where: {
        type
      }
    });
    users = users.filter((user) => {
      let length = userTypedIn.length;
      return user.username.substring(0, length) == userTypedIn;
    });
    let usernames = [];
    for (let user of users) {
      usernames.push(user.username);
    }
    console.log(usernames);
    return usernames;
  } catch (err) {
    console.log(err);
  }
}

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2,
  links: () => links2,
  loader: () => loader2
});
init_react();
var import_react2 = require("react");

// app/styles/dashboard/styles.css
var styles_default = "/build/_assets/styles-FNTYTHNK.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var import_remix6 = __toESM(require_remix());

// app/styles/components/search.css
var search_default = "/build/_assets/search-EPAS2GCV.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  },
  {
    rel: "stylesheet",
    href: search_default
  }
];
var loader2 = async ({ request, params }) => {
  let user = await getUser(request);
  if (!user) {
    user = {
      id: null
    };
  }
  const roundsData = await getRoundsFromUser(user.id);
  console.log("roundsData", roundsData);
  let roundData = [];
  for (let round of roundsData) {
    const ownerName = await getUsernameFromUserId(round.ownerId);
    const newRound = __spreadProps(__spreadValues({}, round), {
      owner: ownerName
    });
    roundData = [...roundData, newRound];
  }
  console.log("roundData", roundData);
  const data = {
    user,
    roundData
  };
  return data;
};
var Row = ({ round }) => {
  const [active, setActive] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("td", null, round.roundTime), /* @__PURE__ */ React.createElement("td", null, round.owner), /* @__PURE__ */ React.createElement("td", null, round.usersId.length, " is wrong since this is players + caddies"), /* @__PURE__ */ React.createElement("td", null, round.usersId.length, " is wrong since this is players + caddies"), /* @__PURE__ */ React.createElement("td", {
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
  const [date, setDate] = (0, import_react2.useState)("");
  const [players, setPlayers] = (0, import_react2.useState)([]);
  const [player, setPlayer] = (0, import_react2.useState)("");
  const [caddies, setCaddies] = (0, import_react2.useState)([]);
  const [caddy, setCaddy] = (0, import_react2.useState)("");
  const [numCaddies, setNumCaddies] = (0, import_react2.useState)(0);
  const userSearch = (0, import_remix6.useFetcher)();
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
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(userSearch.Form, {
    method: "get",
    action: `/dashboard/user-search/type/player/user/${player}`
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "player"
  }, "Search Players "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Add Players",
    value: player,
    onChange: (event) => {
      setPlayer(event.target.value);
      console.log("event.target", event.target.form);
      userSearch.submit(event.target.form);
      console.log("userSearch", userSearch);
    }
  }), userSearch.data && (userSearch.data.length ? userSearch.data.map((username) => {
    return /* @__PURE__ */ React.createElement("h1", null, username);
  }) : /* @__PURE__ */ React.createElement("h2", null, "No User Matches This")))), /* @__PURE__ */ React.createElement("button", {
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
  const data = (0, import_remix6.useLoaderData)();
  (0, import_react2.useEffect)(() => {
    console.log(data);
  }, []);
  const [modalActive, setModalActive] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Home ", data.user.username), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setModalActive(!modalActive);
    }
  }, modalActive ? "Close Round" : "Add Round")), /* @__PURE__ */ React.createElement("div", null, modalActive ? /* @__PURE__ */ React.createElement(AddRound, null) : /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("th", null, "Date"), /* @__PURE__ */ React.createElement("th", null, "Owner"), /* @__PURE__ */ React.createElement("th", null, "# Players"), /* @__PURE__ */ React.createElement("th", null, "# Caddies"), /* @__PURE__ */ React.createElement("th", null, "R"))), /* @__PURE__ */ React.createElement("tbody", null, data.roundData.map((round) => {
    return /* @__PURE__ */ React.createElement(Row, {
      key: round.id,
      round
    });
  })))));
}
var dashboard_default2 = Dashboard2;

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix7 = __toESM(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "body-container",
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/dashboard"
  }, "Go to Dashboard")), /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
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

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
init_react();
var import_remix8 = __toESM(require_remix());
function Auth() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "body-container"
  }, /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)));
}
var auth_default = Auth;

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
init_react();
var action2 = async ({ request }) => {
  console.log("in the action function logout");
  return logout(request);
};

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => login_default
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_react3 = require("react");
var action3 = async ({ request }) => {
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
      const user = await login({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldErrors: { username: "Invalid credentials" }
        });
      }
      return createUserSession(user.id, "/dashboard");
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
      const user = await register({ username, password });
      if (!user) {
        return badRequest({
          fields,
          fieldError: "Something went wrong trying to create the user"
        });
      }
      return createUserSession(user.id, "/dashboard");
    }
  }
};
var badRequest = (data) => {
  return (0, import_remix9.json)(data, { status: 400 });
};
function Login() {
  const actionData = (0, import_remix9.useActionData)();
  (0, import_react3.useEffect)(() => {
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

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "f193e340", "entry": { "module": "/build/entry.client-KONULJDY.js", "imports": ["/build/_shared/chunk-ZHL2GEAM.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-GT5QY2VA.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-Y5DCC3KN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "routes/auth", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-ENZLJSO6.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js", "/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "routes/auth", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-OSFVLADO.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-QOUFVIHX.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-IBTUUDLP.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/user-search/type/$type/user/$user/index": { "id": "routes/dashboard/user-search/type/$type/user/$user/index", "parentId": "routes/dashboard", "path": "user-search/type/:type/user/:user", "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/user-search/type/$type/user/$user/index-RQNHQFUT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WYWFU4LV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F193E340.js" };

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
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/user-search/type/$type/user/$user/index": {
    id: "routes/dashboard/user-search/type/$type/user/$user/index",
    parentId: "routes/dashboard",
    path: "user-search/type/:type/user/:user",
    index: true,
    caseSensitive: void 0,
    module: user_exports
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
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "routes/auth",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "routes/auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIudHN4IiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC91c2VyLXNlYXJjaC90eXBlLyR0eXBlL3VzZXIvJHVzZXIvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC91c2VyLXNlYXJjaC90eXBlLyR0eXBlL3VzZXIvJHVzZXIvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkL3VzZXItc2VhcmNoL3R5cGUvJHR5cGUvdXNlci8kdXNlci9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkL3VzZXItc2VhcmNoL3R5cGUvJHR5cGUvdXNlci8kdXNlci9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogXCJ1c2VyLXNlYXJjaC90eXBlLzp0eXBlL3VzZXIvOnVzZXJcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXV0aFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoXCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4geyB0aXRsZTogXCJEaWFsZWN0IENhZGR5U2hhY2sgU3Vic2lkaWFyeVwiIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG50eXBlIERvY3VtZW50VHlwZSA9IHtcblx0Y2hpbGRyZW46IGFueTtcblx0Ly8gICB0aXRsZTogc3RyaW5nO1xufTtcblxuY29uc3QgRG9jdW1lbnQgPSAoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFR5cGUpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHR7LyogPHRpdGxlPnt0aXRsZSA/IHRpdGxlIDogJ015IEN1c3RvbSBEZWZhdWx0IFRpdGxlJ308L3RpdGxlPiAqL31cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PExpdmVSZWxvYWQgLz5cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdCk7XG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFNpZGViYXIgLz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8Lz5cblx0KTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcblx0Y29uc3QgdXNlciA9IGdldFVzZXIocmVxdWVzdCk7XG5cdGNvbnNvbGUubG9nKFwidXNlciBpbiBzaWRlYmFyXCIsIHVzZXIpO1xuXHRyZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJob21lXCIpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cblx0XHRcdFx0VGhpcyBpcyBhIHNpZGViYXJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFwibWVudS1pdGVtIFwiICsgKGFjdGl2ZSA9PSBcImhvbWVcIiA/IFwibWVudS1pdGVtLWFjdGl2ZVwiIDogXCJcIilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImhvbWVcIil9PlxuXHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFwibWVudS1pdGVtIFwiICsgKGFjdGl2ZSA9PSBcImNhZGRpZXNcIiAmJiBcIm1lbnUtaXRlbS1hY3RpdmVcIilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImNhZGRpZXNcIil9PlxuXHRcdFx0XHRcdFx0Q2FkZGllc1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XCJtZW51LWl0ZW0gXCIgKyAoYWN0aXZlID09IFwiaGVscFwiICYmIFwibWVudS1pdGVtLWFjdGl2ZVwiKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImhlbHBcIil9PlxuXHRcdFx0XHRcdFx0SGVscFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIvYXV0aC9sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dvdXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PExpbmsgdG89XCIvYXV0aC9sb2dpblwiPkxvZyBJbjwvTGluaz5cblx0XHRcdFx0XHR7Lyoge2RhdGEgPyAoXG5cdFx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIvYXV0aC9sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ291dDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9hdXRoL2xvZ2luXCI+TG9nIEluPC9MaW5rPlxuXHRcdFx0XHRcdCl9ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYi5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbnR5cGUgVXNlckluZm8gPSB7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG4vLyBMb2dpbiB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogVXNlckluZm8pIHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIElmIHRoZXJlIGRvZXNuJ3QgZXhpc3Qgc3VjaCBhIHVzZXJcblx0aWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuXHQvLyBOb3cgY2hlY2sgdGhlIHBhc3N3b3JkXG5cdGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcblx0aWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIHVzZXI7XG59XG5cbi8vIFJlZ2lzdGVyIFVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VySW5mbykge1xuXHRjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG5cdHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZEhhc2gsXG5cdFx0XHR0eXBlOiBcInBsYXllclwiLFxuXHRcdH0sXG5cdH0pO1xufVxuXG4vLyBDcmVhdGUgc2Vzc2lvbiBzdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcImRpYWxlY3QtY2FkZHlfc2Vzc2lvblwiLFxuXHRcdHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuXHRcdHNlY3JldHM6IFtcInNlY3JldFwiXSxcblx0XHRzYW1lU2l0ZTogXCJsYXhcIixcblx0XHRwYXRoOiBcIi9cIixcblx0XHRtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDYwLCAvLyA2MCBzZWNzIHBlciBtaW4gKiA2MCBtaW5zIHBlciBob3VyICogMjQgaG91cnMgcGVyIGRheSogNjAgZGF5c1xuXHRcdGh0dHBPbmx5OiB0cnVlLFxuXHR9LFxufSk7XG5cbi8vIENyZWF0ZSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG5cdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG5cdHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn1cblxuLy8gR2V0IHVzZXIgc2Vzc2lvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0cmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuLy8gR2V0IGxvZ2dlZCBpbiB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cdGNvbnNvbGUubG9nKFwiZ2V0VXNlclwiLCB1c2VySWQpO1xuXG5cdGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHRpZDogdXNlcklkLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHJldHVybiB1c2VyO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIEdldCB1c2VySWRzIGZyb20gdXNlcm5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbVVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpIHtcblx0Y29uc29sZS5sb2coXCJ1c2VybmFtZSBwYXJhbSBpcyBcIiwgdXNlcm5hbWUpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0VXNlckZyb21Vc2VybmFtZVwiLCB1c2VyKTtcblxuXHRcdHJldHVybiB1c2VyO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0VXNlckZyb21Vc2VybmFtZSBoYXMgYW4gZXJyb3JcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLy8gR2V0IHRoZSB1c2VybmFtZSBvZiBzb21lb25lIHdpdGggYSB1c2VySWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VybmFtZUZyb21Vc2VySWQodXNlcklkOiBzdHJpbmcpIHtcblx0dHJ5IHtcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdGlkOiB1c2VySWQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lO1xuXG5cdFx0cmV0dXJuIHVzZXJuYW1lO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0VXNlcm5hbWVGcm9tVXNlcklkIGhhcyBhbiBlcnJvclwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vLyBHZXQgYWxsIHRoZSByb3VuZHMgc29tZW9uZSB3aXRoIGEgdXNlcklkIGlzIGludm9sdmVkIHdpdGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSb3VuZHNGcm9tVXNlcih1c2VySWQ6IHN0cmluZykge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJvdW5kc191c2VyT25Sb3VuZCA9IGF3YWl0IGRiLnVzZXJPblJvdW5kLmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdHVzZXJJZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coXCJyb3VuZHNfdXNlck9uUm91bmRcIiwgcm91bmRzX3VzZXJPblJvdW5kKTtcblxuXHRcdGxldCByb3VuZHM6IGFueVtdID0gW107XG5cdFx0Zm9yIChsZXQgcm91bmQgb2Ygcm91bmRzX3VzZXJPblJvdW5kKSB7XG5cdFx0XHRjb25zdCBuZXdSb3VuZCA9IGF3YWl0IGRiLnJvdW5kLmZpbmRVbmlxdWUoe1xuXHRcdFx0XHR3aGVyZToge1xuXHRcdFx0XHRcdGlkOiByb3VuZC5yb3VuZElkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRyb3VuZHMgPSBbLi4ucm91bmRzLCBuZXdSb3VuZF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJvdW5kcztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhcImdldFJvdW5kRnJvbVVzZXIgaGFzIGFuIGVycm9yXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIExvZyBvdXQgdXNlciBhbmQgZGVzdHJveSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcblx0c2Vzc2lvbi51bnNldChcInVzZXJJZFwiKTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cdGNvbnNvbGUubG9nKFwiZ2V0VXNlclwiLCB1c2VySWQpO1xuXG5cdC8vIHJldHVybiByZWRpcmVjdChcIi9hdXRoL2xvZ291dFwiKTtcblx0cmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiLCB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcblx0Ly8gcmV0dXJuIHJlZGlyZWN0KFwiL2F1dGgvbG9nb3V0XCIsIHtcblx0Ly8gXHRoZWFkZXJzOiB7XG5cdC8vIFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcblx0Ly8gXHR9LFxuXHQvLyB9KTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBkYi4kY29ubmVjdCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XG4gIH1cblxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0VXNlciwgZ2V0VXNlckZyb21Vc2VybmFtZSB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cdGlmICh0eXBlb2YgdXNlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB1c2VyID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidXNlciBpcyBub3QgbG9nZ2VkIGluIGZvciBvd25lclwiKTtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBmb3JtLmdldChcImRhdGVcIik/LnRvU3RyaW5nKCk7XG5cdC8vIGNvbnNvbGUubG9nKGRhdGUpOyAvLyAyMDIyLTAzLTIzVDAxOjU5XG5cdGNvbnN0IHJvdW5kVGltZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRjb25zb2xlLmxvZyhcInJvdW5kVGltZVwiLCByb3VuZFRpbWUpO1xuXG5cdGNvbnN0IHBsYXllcnMgPSBmb3JtLmdldChcInBsYXllcnNcIik7XG5cdGlmICh0eXBlb2YgcGxheWVycyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcInBsYXllcnMgaXMgbm90IGEgc3RyaW5nXCIpO1xuXHR9XG5cblx0Y29uc3QgcGxheWVyc0FyciA9IHBsYXllcnMuc3BsaXQoXCIsXCIpO1xuXHRjb25zb2xlLmxvZyhcInBsYXllcnNBcnJcIiwgcGxheWVyc0Fycik7XG5cdGxldCB1c2Vyc0lkOiBzdHJpbmdbXSA9IFt1c2VyLmlkXTtcblx0Zm9yIChsZXQgcGxheWVyIG9mIHBsYXllcnNBcnIpIHtcblx0XHQvLyBJZiBpdCdzIGFuIGVtcHR5IHN0cmluZyBhbmQgdGhlIHNwbGl0IGp1c3QgbGVhZHMgYW4gZW1wdHkgXCJcIlxuXHRcdGlmIChwbGF5ZXIgPT0gXCJcIikgY29udGludWU7XG5cblx0XHRjb25zb2xlLmxvZyhcInBsYXllciBmb3IgbG9vcFwiLCBwbGF5ZXIpO1xuXHRcdGNvbnN0IG5ld1BsYXllciA9IGF3YWl0IGdldFVzZXJGcm9tVXNlcm5hbWUocGxheWVyKTtcblx0XHRjb25zb2xlLmxvZyhcIm5ld1BsYXllciBwbGF5ZXIgZm9yIGxvb3BcIiwgbmV3UGxheWVyKTtcblx0XHRjb25zdCBuZXdJZCA9IG5ld1BsYXllci5pZDtcblx0XHQvLyBpZiAobmV3SWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHQvLyBcdHRocm93IG5ldyBFcnJvcihcImEgcGxheWVyIGNvdWxkIG5vdCBiZSBhZGRlZCBmb3IgaW5jb3JyZWN0IHVzZXJuYW1lXCIpO1xuXHRcdC8vIH1cblx0XHR1c2Vyc0lkID0gWy4uLnVzZXJzSWQsIG5ld0lkXTtcblx0fVxuXG5cdGNvbnN0IGNhZGRpZXMgPSBmb3JtLmdldChcImNhZGRpZXNcIik7XG5cdGlmICh0eXBlb2YgY2FkZGllcyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNhZGRpZXMgaXMgbm90IGEgc3RyaW5nXCIpO1xuXHR9XG5cdGNvbnN0IGNhZGRpZXNBcnIgPSBjYWRkaWVzLnNwbGl0KFwiLFwiKTtcblx0Y29uc29sZS5sb2coXCJjYWRkaWVzQXJyXCIsIGNhZGRpZXNBcnIpO1xuXHRmb3IgKGxldCBjYWRkeSBvZiBjYWRkaWVzQXJyKSB7XG5cdFx0Ly8gSWYgaXQncyBhbiBlbXB0eSBzdHJpbmcgYW5kIHRoZSBzcGxpdCBqdXN0IGxlYWRzIGFuIGVtcHR5IFwiXCJcblx0XHRpZiAoY2FkZHkgPT0gXCJcIikgY29udGludWU7XG5cblx0XHRjb25zdCBuZXdDYWRkeSA9IGF3YWl0IGdldFVzZXJGcm9tVXNlcm5hbWUoY2FkZHkpO1xuXHRcdGNvbnNvbGUubG9nKFwibmV3Q2FkZHkgY2FkZHkgZm9yIGxvb3BcIiwgbmV3Q2FkZHkpO1xuXHRcdGNvbnN0IG5ld0lkID0gbmV3Q2FkZHkuaWQ7IC8vIENvdWxkIHB1dCA/IGFmdGVyIG5ld0NhZGR5XG5cdFx0Ly8gaWYgKG5ld0lkICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoXCJhIHBsYXllciBjb3VsZCBub3QgYmUgYWRkZWQgZm9yIGluY29ycmVjdCB1c2VybmFtZVwiKTtcblx0XHQvLyB9XG5cdFx0dXNlcnNJZCA9IFsuLi51c2Vyc0lkLCBuZXdJZF07XG5cdH1cblx0Y29uc29sZS5sb2coXCJ1c2Vyc0lkXCIsIHVzZXJzSWQpO1xuXG5cdGNvbnN0IHJvdW5kID0gYXdhaXQgZGIucm91bmQuY3JlYXRlKHtcblx0XHRkYXRhOiB7XG5cdFx0XHRvd25lcklkOiB1c2VyLmlkLFxuXHRcdFx0cm91bmRUaW1lLFxuXHRcdFx0dXNlcnNJZCxcblx0XHR9LFxuXHR9KTtcblx0Y29uc29sZS5sb2coXCJyb3VuZCBjcmVhdGVkOiBcIiwgcm91bmQpO1xuXG5cdGZvciAobGV0IHVzZXIgb2YgdXNlcnNJZCkge1xuXHRcdGNvbnN0IHVzZXJPblJvdW5kID0gYXdhaXQgZGIudXNlck9uUm91bmQuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dXNlcklkOiB1c2VyLFxuXHRcdFx0XHRyb3VuZElkOiByb3VuZC5pZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhcInVzZXJPblJvdW5kOiBcIiwgdXNlck9uUm91bmQpO1xuXHR9XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbn07XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwifi91dGlscy9wZy5zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcywgcmVxdWVzdCB9OiBhbnkpIHtcblx0Ly8gY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG5cdC8vIGNvbnN0IHBhcmFtID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ1c2Vyc1wiKTtcblx0Y29uc3QgdHlwZSA9IHBhcmFtcy50eXBlO1xuXHRjb25zdCB1c2VyVHlwZWRJbiA9IHBhcmFtcy51c2VyO1xuXHRjb25zb2xlLmxvZyh0eXBlLCB1c2VyVHlwZWRJbik7XG5cblx0dHJ5IHtcblx0XHRsZXQgdXNlcnMgPSBhd2FpdCBkYi51c2VyLmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdC8vIHVzZXJuYW1lOiBgJHt1c2VyVHlwZWRJbn1AJWAsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0dXNlcnMgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcblx0XHRcdGxldCBsZW5ndGggPSB1c2VyVHlwZWRJbi5sZW5ndGg7XG5cdFx0XHRyZXR1cm4gdXNlci51c2VybmFtZS5zdWJzdHJpbmcoMCwgbGVuZ3RoKSA9PSB1c2VyVHlwZWRJbjtcblx0XHR9KTtcblxuXHRcdGxldCB1c2VybmFtZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Zm9yIChsZXQgdXNlciBvZiB1c2Vycykge1xuXHRcdFx0dXNlcm5hbWVzLnB1c2godXNlci51c2VybmFtZSk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc3QgdXNlcnMgPSBhd2FpdCBjbGllbnQucXVlcnkoYFxuXHRcdC8vIFNFTEVDVCAqIEZST00gdXNlclxuXHRcdC8vIFdIRVJFIHVzZXJuYW1lIGxpa2UgXCIke3VzZXJUeXBlZElufSVcIlxuXHRcdC8vIGApO1xuXHRcdGNvbnNvbGUubG9nKHVzZXJuYW1lcyk7XG5cdFx0cmV0dXJuIHVzZXJuYW1lcztcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0fVxufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXNoYm9hcmRTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2Rhc2hib2FyZC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VGZXRjaGVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7XG5cdGdldFVzZXIsXG5cdGdldFJvdW5kc0Zyb21Vc2VyLFxuXHRnZXRVc2VybmFtZUZyb21Vc2VySWQsXG59IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbi8vIFNlYXJjaFxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIn4vY29tcG9uZW50cy9TZWFyY2hcIjtcbmltcG9ydCBzZWFyY2hTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2NvbXBvbmVudHMvc2VhcmNoLmNzc1wiO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBkYXNoYm9hcmRTdHlsZXMsXG5cdH0sXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IHNlYXJjaFN0eWxlc1VybCxcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG5cdGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblx0aWYgKCF1c2VyKSB7XG5cdFx0dXNlciA9IHtcblx0XHRcdGlkOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCByb3VuZHNEYXRhID0gYXdhaXQgZ2V0Um91bmRzRnJvbVVzZXIodXNlci5pZCk7XG5cdGNvbnNvbGUubG9nKFwicm91bmRzRGF0YVwiLCByb3VuZHNEYXRhKTtcblxuXHQvLyBDaGFuZ2UgZWFjaCByb3VuZCBpbiByb3VuZHNEYXRhIGZyb20gaGF2aW5nXG5cdGxldCByb3VuZERhdGE6IGFueSA9IFtdO1xuXHRmb3IgKGxldCByb3VuZCBvZiByb3VuZHNEYXRhKSB7XG5cdFx0Y29uc3Qgb3duZXJOYW1lID0gYXdhaXQgZ2V0VXNlcm5hbWVGcm9tVXNlcklkKHJvdW5kLm93bmVySWQpO1xuXHRcdGNvbnN0IG5ld1JvdW5kID0ge1xuXHRcdFx0Li4ucm91bmQsXG5cdFx0XHRvd25lcjogb3duZXJOYW1lLFxuXHRcdH07XG5cdFx0cm91bmREYXRhID0gWy4uLnJvdW5kRGF0YSwgbmV3Um91bmRdO1xuXHR9XG5cdGNvbnNvbGUubG9nKFwicm91bmREYXRhXCIsIHJvdW5kRGF0YSk7XG5cblx0Y29uc3QgZGF0YSA9IHtcblx0XHR1c2VyLFxuXHRcdHJvdW5kRGF0YSxcblx0fTtcblx0cmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBTZWFyY2ggPSAoeyB1c2VyLCB0eXBlIH06IGFueSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWNvbnRlbnQgc2hvd1wiPlxuXHRcdFx0XHQ8cCBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcIkFib3V0XCIpfT5BYm91dDwvcD5cblx0XHRcdFx0PHA+QmxvZzwvcD5cblx0XHRcdFx0PHA+QmFzZTwvcD5cblx0XHRcdFx0PHA+Q29udGFjdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgUm93ID0gKHsgcm91bmQgfTogYW55KSA9PiB7XG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZD57cm91bmQucm91bmRUaW1lfTwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLm93bmVyfTwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLnVzZXJzSWQubGVuZ3RofSBpcyB3cm9uZyBzaW5jZSB0aGlzIGlzIHBsYXllcnMgKyBjYWRkaWVzPC90ZD5cblx0XHRcdDx0ZD57cm91bmQudXNlcnNJZC5sZW5ndGh9IGlzIHdyb25nIHNpbmNlIHRoaXMgaXMgcGxheWVycyArIGNhZGRpZXM8L3RkPlxuXHRcdFx0PHRkXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRzZXRBY3RpdmUoIWFjdGl2ZSk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7YWN0aXZlID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYWN0aXZlXCIsIGFjdGl2ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0Q2xvc2Vcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxwPkRlbGV0ZTwvcD5cblx0XHRcdFx0XHRcdFx0PHA+VmlldzwvcD5cblx0XHRcdFx0XHRcdFx0PHA+RWRpdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxidXR0b24+Li4uPC9idXR0b24+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L3RkPlxuXHRcdDwvdHI+XG5cdCk7XG59O1xuXG5jb25zdCBBZGRSb3VuZCA9ICgpID0+IHtcblx0Y29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuXHRjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXHRjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuXHRjb25zdCBbY2FkZGllcywgc2V0Q2FkZGllc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXHRjb25zdCBbY2FkZHksIHNldENhZGR5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFtudW1DYWRkaWVzLCBzZXROdW1DYWRkaWVzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cblx0Y29uc3QgdXNlclNlYXJjaCA9IHVzZUZldGNoZXIoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvZGFzaGJvYXJkXCI+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImRhdGVcIj5EYXRlPC9sYWJlbD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRzZXREYXRlKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cblx0XHRcdDxiciAvPlxuXHRcdFx0PGJyIC8+XG5cblx0XHRcdDx1c2VyU2VhcmNoLkZvcm1cblx0XHRcdFx0bWV0aG9kPVwiZ2V0XCJcblx0XHRcdFx0YWN0aW9uPXtgL2Rhc2hib2FyZC91c2VyLXNlYXJjaC90eXBlL3BsYXllci91c2VyLyR7cGxheWVyfWB9PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGxheWVyXCI+U2VhcmNoIFBsYXllcnMgPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJBZGQgUGxheWVyc1wiXG5cdFx0XHRcdFx0XHR2YWx1ZT17cGxheWVyfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRQbGF5ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJldmVudC50YXJnZXRcIiwgZXZlbnQudGFyZ2V0LmZvcm0pO1xuXHRcdFx0XHRcdFx0XHR1c2VyU2VhcmNoLnN1Ym1pdChldmVudC50YXJnZXQuZm9ybSk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidXNlclNlYXJjaFwiLCB1c2VyU2VhcmNoKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7Lyoge3VzZXJTZWFyY2guc3RhdGUgPT0gXCJzdWJtaXR0aW5nXCIgJiYgPGgxPlN1Ym1pdHRpbmc8L2gxPn0gKi99XG5cdFx0XHRcdFx0e3VzZXJTZWFyY2guZGF0YSAmJlxuXHRcdFx0XHRcdFx0KHVzZXJTZWFyY2guZGF0YS5sZW5ndGggPyAoXG5cdFx0XHRcdFx0XHRcdHVzZXJTZWFyY2guZGF0YS5tYXAoKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGgxPnt1c2VybmFtZX08L2gxPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxoMj5ObyBVc2VyIE1hdGNoZXMgVGhpczwvaDI+XG5cdFx0XHRcdFx0XHQpKX1cblxuXHRcdFx0XHRcdHsvKiA8U2VhcmNoIC8+ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdXNlclNlYXJjaC5Gb3JtPlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldFBsYXllcnMoWy4uLnBsYXllcnMsIHBsYXllcl0pO1xuXHRcdFx0XHRcdHNldFBsYXllcihcIlwiKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdEFkZFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG5cdFx0XHRcdDxoMz5DdXJyZW50bHkgQWRkZWQgUGxheWVyczogPC9oMz5cblxuXHRcdFx0XHR7cGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17cGxheWVyfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0XHRcdFx0PHA+KHtwbGF5ZXJ9KTwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQbGF5ZXJzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJzLmZpbHRlcigoY3VyclBsYXllcikgPT4gY3VyclBsYXllciAhPT0gcGxheWVyKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRYXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjYWRkeVwiPlNlYXJjaCBDYWRkaWVzIDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRuYW1lPVwiQWRkIENhZGRpZXNcIlxuXHRcdFx0XHR2YWx1ZT17Y2FkZHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZXRDYWRkeShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKGNhZGRpZXMubGVuZ3RoICsgMSA8PSBudW1DYWRkaWVzKSB7XG5cdFx0XHRcdFx0XHRzZXRDYWRkaWVzKFsuLi5jYWRkaWVzLCBjYWRkeV0pO1xuXHRcdFx0XHRcdFx0c2V0Q2FkZHkoXCJcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0QWRkXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHQ8aDM+SG93IG1hbnkgY2FkZGllcz88L2gzPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHNldE51bUNhZGRpZXMoTWF0aC5tYXgobnVtQ2FkZGllcyAtIDEsIGNhZGRpZXMubGVuZ3RoKSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0LVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PHA+e251bUNhZGRpZXN9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHNldE51bUNhZGRpZXMobnVtQ2FkZGllcyArIDEpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdCtcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0PGgzPkN1cnJlbnRseSBBZGRlZCBDYWRkaWVzOiA8L2gzPlxuXG5cdFx0XHRcdHtjYWRkaWVzLm1hcCgoY2FkZHkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2NhZGR5fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0XHRcdFx0PHA+KHtjYWRkeX0pPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldENhZGRpZXMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhZGRpZXMuZmlsdGVyKChjdXJyQ2FkZHkpID0+IGN1cnJDYWRkeSAhPT0gY2FkZHkpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFhcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxiciAvPlxuXG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2RhdGV9IC8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwbGF5ZXJzXCIgdmFsdWU9e3BsYXllcnN9IC8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjYWRkaWVzXCIgdmFsdWU9e2NhZGRpZXN9IC8+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFJvdW5kPC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHQpO1xufTtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHR9LCBbXSk7XG5cdGNvbnN0IFttb2RhbEFjdGl2ZSwgc2V0TW9kYWxBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuXHRcdFx0XHQ8aDE+SG9tZSB7ZGF0YS51c2VyLnVzZXJuYW1lfTwvaDE+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNb2RhbEFjdGl2ZSghbW9kYWxBY3RpdmUpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdHttb2RhbEFjdGl2ZSA/IFwiQ2xvc2UgUm91bmRcIiA6IFwiQWRkIFJvdW5kXCJ9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHttb2RhbEFjdGl2ZSA/IChcblx0XHRcdFx0XHQ8QWRkUm91bmQgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5EYXRlPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+T3duZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD4jIFBsYXllcnM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD4jIENhZGRpZXM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SPC90aD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdHtkYXRhLnJvdW5kRGF0YS5tYXAoKHJvdW5kOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFJvdyBrZXk9e3JvdW5kLmlkfSByb3VuZD17cm91bmR9IC8+O1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiXG5cdFx0XHRcdHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+R28gdG8gRGFzaGJvYXJkPC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2Jsb2dcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdERlZXAgRGl2ZSBKb2tlcyBBcHAgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHRSZW1peCBEb2NzXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5mdW5jdGlvbiBBdXRoKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHktY29udGFpbmVyXCI+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcblx0Ly8gTG9nIHRoaXMgcGVyc29uIG91dCBvZiB0aGUgc2Vzc2lvblxuXHRjb25zb2xlLmxvZyhcImluIHRoZSBhY3Rpb24gZnVuY3Rpb24gbG9nb3V0XCIpO1xuXHRyZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbi8vIFx0cmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbi8vIH07XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGxvZ2luLCByZWdpc3RlciwgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG5cdGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cdGNvbnN0IGxvZ2luVHlwZSA9IGZvcm0uZ2V0KFwibG9naW5UeXBlXCIpO1xuXHRjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG5cdGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuXHRjb25zdCBmaWVsZHMgPSB7XG5cdFx0bG9naW5UeXBlLFxuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkLFxuXHR9O1xuXG5cdHN3aXRjaCAobG9naW5UeXBlKSB7XG5cdFx0Y2FzZSBcImxvZ2luXCI6IHtcblx0XHRcdC8vIEZpbmQgdXNlclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgdXNlciBjb3JyZWN0bHkgbG9nZ2VkIGluXG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0XHRcdGZpZWxkcyxcblx0XHRcdFx0XHRmaWVsZEVycm9yczogeyB1c2VybmFtZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSB1c2VyIHNlc3Npb25cblx0XHRcdHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCBcIi9kYXNoYm9hcmRcIik7XG5cdFx0fVxuXG5cdFx0Y2FzZSBcInJlZ2lzdGVyXCI6IHtcblx0XHRcdC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzXG5cdFx0XHRjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuXHRcdFx0XHR3aGVyZToge1xuXHRcdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh1c2VyRXhpc3RzKSB7XG5cdFx0XHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdFx0XHRmaWVsZHMsXG5cdFx0XHRcdFx0ZmllbGRFcnJvcnM6IHtcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBgVXNlciAke3VzZXJuYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSB1c2VyXG5cdFx0XHRjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0XHRcdGZpZWxkcyxcblx0XHRcdFx0XHRmaWVsZEVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgdGhlIHVzZXJcIixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCBcIi9kYXNoYm9hcmRcIik7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IGFueSkgPT4ge1xuXHRyZXR1cm4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufTtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG5cdGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcblx0fSwgW2FjdGlvbkRhdGFdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+TG9naW48L2gxPlxuXHRcdFx0PGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0PGxlZ2VuZD5Mb2dpbiBvciBSZWdpc3RlcjwvbGVnZW5kPlxuXHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibG9naW5UeXBlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJsb2dpblwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxvZ2luVHlwZVwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxuXHRcdFx0XHRcdFx0UmVnaXN0ZXJcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XG5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxiciAvPlxuXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuXG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8YnIgLz5cblxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZjE5M2UzNDAnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUtPTlVMSkRZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aSEwyR0VBTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1HVDVRWTJWQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgnOnsnaWQnOidyb3V0ZXMvYXV0aCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgtWTVEQ0MzS04uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoJywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9naW4tRU5aTEpTTzYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRQ1FYWFBWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dvdXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoJywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ291dC1PU0ZWTEFETy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLVFPVUZWSUhYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUNRWFhQVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC9pbmRleC1JQlRVVURMUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL3VzZXItc2VhcmNoL3R5cGUvJHR5cGUvdXNlci8kdXNlci9pbmRleCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQvdXNlci1zZWFyY2gvdHlwZS8kdHlwZS91c2VyLyR1c2VyL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6J3VzZXItc2VhcmNoL3R5cGUvOnR5cGUvdXNlci86dXNlcicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkL3VzZXItc2VhcmNoL3R5cGUvJHR5cGUvdXNlci8kdXNlci9pbmRleC1SUU5IUUZVVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtV1lXRlU0TFYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRjE5M0UzNDAuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtB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
