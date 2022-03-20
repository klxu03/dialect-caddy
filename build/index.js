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

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_react2 = require("react");

// app/styles/dashboard/styles.css
var styles_default = "/build/_assets/styles-FNTYTHNK.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/dialect-caddy/app/routes/dashboard/index.tsx
var import_remix6 = __toESM(require_remix());

// app/components/Search.tsx
init_react();

// app/styles/components/search.css
var search_default = "/build/_assets/search-EPAS2GCV.css";

// app/components/Search.tsx
var choseOption = (option) => {
  console.log("chose ", option);
};
function Search() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown dropdown-content show"
  }, /* @__PURE__ */ React.createElement("p", {
    onClick: choseOption("About")
  }, "About"), /* @__PURE__ */ React.createElement("p", null, "Blog"), /* @__PURE__ */ React.createElement("p", null, "Base"), /* @__PURE__ */ React.createElement("p", null, "Contact"), /* @__PURE__ */ React.createElement("a", {
    href: "#tools"
  }, "Tools")));
}

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
var loader = async ({ request, params }) => {
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
  }), /* @__PURE__ */ React.createElement(Search, null), /* @__PURE__ */ React.createElement("button", {
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
  const [modalActive, setModalActive] = (0, import_react2.useState)(false);
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
var assets_manifest_default = { "version": "6afd80e6", "entry": { "module": "/build/entry.client-ZYHFQWOI.js", "imports": ["/build/_shared/chunk-YVCJRO5Z.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-O5OBQZ3E.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-XNAYCAEA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "routes/auth", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-2SM6H4EN.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js", "/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "routes/auth", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-OSFVLADO.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-JJOHWZBW.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-AICMBIAO.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5EITUKSH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6AFD80E6.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIudHN4IiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2VhcmNoLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9hdXRoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoXCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2F1dGhcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcblx0TGlua3MsXG5cdExpdmVSZWxvYWQsXG5cdE1ldGEsXG5cdE91dGxldCxcblx0U2NyaXB0cyxcblx0U2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lkZWJhclwiO1xuXG5pbXBvcnQgZ2xvYmFsU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG5cdHJldHVybiB7IHRpdGxlOiBcIkRpYWxlY3QgQ2FkZHlTaGFjayBTdWJzaWRpYXJ5XCIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogZ2xvYmFsU3R5bGVzVXJsLFxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxEb2N1bWVudD5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvRG9jdW1lbnQ+XG5cdCk7XG59XG5cbnR5cGUgRG9jdW1lbnRUeXBlID0ge1xuXHRjaGlsZHJlbjogYW55O1xuXHQvLyAgIHRpdGxlOiBzdHJpbmc7XG59O1xuXG5jb25zdCBEb2N1bWVudCA9ICh7IGNoaWxkcmVuIH06IERvY3VtZW50VHlwZSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdFx0PE1ldGEgLz5cblx0XHRcdFx0PExpbmtzIC8+XG5cdFx0XHRcdHsvKiA8dGl0bGU+e3RpdGxlID8gdGl0bGUgOiAnTXkgQ3VzdG9tIERlZmF1bHQgVGl0bGUnfTwvdGl0bGU+ICovfVxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHk+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0e3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG5cdFx0XHRcdDxTY3JpcHRzIC8+XG5cdFx0XHRcdDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuXHRcdFx0XHQ8TGl2ZVJlbG9hZCAvPlxuXHRcdFx0PC9ib2R5PlxuXHRcdDwvaHRtbD5cblx0KTtcbn07XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U2lkZWJhciAvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvPlxuXHQpO1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuXHRjb25zdCB1c2VyID0gZ2V0VXNlcihyZXF1ZXN0KTtcblx0Y29uc29sZS5sb2coXCJ1c2VyIGluIHNpZGViYXJcIiwgdXNlcik7XG5cdHJldHVybiB1c2VyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XG5cdGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGU8c3RyaW5nPihcImhvbWVcIik7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxuXHRcdFx0XHRUaGlzIGlzIGEgc2lkZWJhclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XCJtZW51LWl0ZW0gXCIgKyAoYWN0aXZlID09IFwiaG9tZVwiID8gXCJtZW51LWl0ZW0tYWN0aXZlXCIgOiBcIlwiKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwiaG9tZVwiKX0+XG5cdFx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XCJtZW51LWl0ZW0gXCIgKyAoYWN0aXZlID09IFwiY2FkZGllc1wiICYmIFwibWVudS1pdGVtLWFjdGl2ZVwiKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwiY2FkZGllc1wiKX0+XG5cdFx0XHRcdFx0XHRDYWRkaWVzXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcIm1lbnUtaXRlbSBcIiArIChhY3RpdmUgPT0gXCJoZWxwXCIgJiYgXCJtZW51LWl0ZW0tYWN0aXZlXCIpfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0QWN0aXZlKFwiaGVscFwiKX0+XG5cdFx0XHRcdFx0XHRIZWxwXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIi9hdXRoL2xvZ291dFwiIG1ldGhvZD1cIlBPU1RcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ291dDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8TGluayB0bz1cIi9hdXRoL2xvZ2luXCI+TG9nIEluPC9MaW5rPlxuXHRcdFx0XHRcdHsvKiB7ZGF0YSA/IChcblx0XHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIi9hdXRoL2xvZ291dFwiIG1ldGhvZD1cIlBPU1RcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nb3V0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL2F1dGgvbG9naW5cIj5Mb2cgSW48L0xpbms+XG5cdFx0XHRcdFx0KX0gKi99XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2RiLnNlcnZlclwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxudHlwZSBVc2VySW5mbyA9IHtcblx0dXNlcm5hbWU6IHN0cmluZztcblx0cGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbi8vIExvZ2luIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VySW5mbykge1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gSWYgdGhlcmUgZG9lc24ndCBleGlzdCBzdWNoIGEgdXNlclxuXHRpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG5cdC8vIE5vdyBjaGVjayB0aGUgcGFzc3dvcmRcblx0Y29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuXHRpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gdXNlcjtcbn1cblxuLy8gUmVnaXN0ZXIgVXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXJJbmZvKSB7XG5cdGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cblx0cmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcblx0XHRkYXRhOiB7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkSGFzaCxcblx0XHRcdHR5cGU6IFwicGxheWVyXCIsXG5cdFx0fSxcblx0fSk7XG59XG5cbi8vIENyZWF0ZSBzZXNzaW9uIHN0b3JhZ2VcbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG5cdGNvb2tpZToge1xuXHRcdG5hbWU6IFwiZGlhbGVjdC1jYWRkeV9zZXNzaW9uXCIsXG5cdFx0c2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG5cdFx0c2VjcmV0czogW1wic2VjcmV0XCJdLFxuXHRcdHNhbWVTaXRlOiBcImxheFwiLFxuXHRcdHBhdGg6IFwiL1wiLFxuXHRcdG1heEFnZTogNjAgKiA2MCAqIDI0ICogNjAsIC8vIDYwIHNlY3MgcGVyIG1pbiAqIDYwIG1pbnMgcGVyIGhvdXIgKiAyNCBob3VycyBwZXIgZGF5KiA2MCBkYXlzXG5cdFx0aHR0cE9ubHk6IHRydWUsXG5cdH0sXG59KTtcblxuLy8gQ3JlYXRlIHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcblx0c2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKTtcblx0cmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xufVxuXG4vLyBHZXQgdXNlciBzZXNzaW9uXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuXHRyZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG4vLyBHZXQgbG9nZ2VkIGluIHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblx0Y29uc29sZS5sb2coXCJnZXRVc2VyXCIsIHVzZXJJZCk7XG5cblx0aWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdGlkOiB1c2VySWQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHVzZXI7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLy8gR2V0IHVzZXJJZHMgZnJvbSB1c2VybmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGcm9tVXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZykge1xuXHRjb25zb2xlLmxvZyhcInVzZXJuYW1lIHBhcmFtIGlzIFwiLCB1c2VybmFtZSk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coXCJnZXRVc2VyRnJvbVVzZXJuYW1lXCIsIHVzZXIpO1xuXG5cdFx0cmV0dXJuIHVzZXI7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coXCJnZXRVc2VyRnJvbVVzZXJuYW1lIGhhcyBhbiBlcnJvclwiKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vLyBHZXQgdGhlIHVzZXJuYW1lIG9mIHNvbWVvbmUgd2l0aCBhIHVzZXJJZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lRnJvbVVzZXJJZCh1c2VySWQ6IHN0cmluZykge1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0aWQ6IHVzZXJJZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCB1c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG5cblx0XHRyZXR1cm4gdXNlcm5hbWU7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coXCJnZXRVc2VybmFtZUZyb21Vc2VySWQgaGFzIGFuIGVycm9yXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIEdldCBhbGwgdGhlIHJvdW5kcyBzb21lb25lIHdpdGggYSB1c2VySWQgaXMgaW52b2x2ZWQgd2l0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvdW5kc0Zyb21Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgcm91bmRzX3VzZXJPblJvdW5kID0gYXdhaXQgZGIudXNlck9uUm91bmQuZmluZE1hbnkoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dXNlcklkLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhcInJvdW5kc191c2VyT25Sb3VuZFwiLCByb3VuZHNfdXNlck9uUm91bmQpO1xuXG5cdFx0bGV0IHJvdW5kczogYW55W10gPSBbXTtcblx0XHRmb3IgKGxldCByb3VuZCBvZiByb3VuZHNfdXNlck9uUm91bmQpIHtcblx0XHRcdGNvbnN0IG5ld1JvdW5kID0gYXdhaXQgZGIucm91bmQuZmluZFVuaXF1ZSh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0aWQ6IHJvdW5kLnJvdW5kSWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdHJvdW5kcyA9IFsuLi5yb3VuZHMsIG5ld1JvdW5kXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcm91bmRzO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0Um91bmRGcm9tVXNlciBoYXMgYW4gZXJyb3JcIik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLy8gTG9nIG91dCB1c2VyIGFuZCBkZXN0cm95IHNlc3Npb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuXHRzZXNzaW9uLnVuc2V0KFwidXNlcklkXCIpO1xuXHRjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblx0Y29uc29sZS5sb2coXCJnZXRVc2VyXCIsIHVzZXJJZCk7XG5cblx0Ly8gcmV0dXJuIHJlZGlyZWN0KFwiL2F1dGgvbG9nb3V0XCIpO1xuXHRyZXR1cm4gcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIsIHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuXHRcdH0sXG5cdH0pO1xuXHQvLyByZXR1cm4gcmVkaXJlY3QoXCIvYXV0aC9sb2dvdXRcIiwge1xuXHQvLyBcdGhlYWRlcnM6IHtcblx0Ly8gXHRcdFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuXHQvLyBcdH0sXG5cdC8vIH0pO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuXG4gIGRiID0gZ2xvYmFsLl9fZGI7XG59XG5cbmV4cG9ydCB7IGRiIH07XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VyLCBnZXRVc2VyRnJvbVVzZXJuYW1lIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuXHRjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblx0aWYgKHR5cGVvZiB1c2VyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHVzZXIgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJ1c2VyIGlzIG5vdCBsb2dnZWQgaW4gZm9yIG93bmVyXCIpO1xuXHR9XG5cblx0Y29uc3QgZGF0ZSA9IGZvcm0uZ2V0KFwiZGF0ZVwiKT8udG9TdHJpbmcoKTtcblx0Ly8gY29uc29sZS5sb2coZGF0ZSk7IC8vIDIwMjItMDMtMjNUMDE6NTlcblx0Y29uc3Qgcm91bmRUaW1lID0gbmV3IERhdGUoZGF0ZSk7XG5cdGNvbnNvbGUubG9nKFwicm91bmRUaW1lXCIsIHJvdW5kVGltZSk7XG5cblx0Y29uc3QgcGxheWVycyA9IGZvcm0uZ2V0KFwicGxheWVyc1wiKTtcblx0aWYgKHR5cGVvZiBwbGF5ZXJzICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwicGxheWVycyBpcyBub3QgYSBzdHJpbmdcIik7XG5cdH1cblxuXHRjb25zdCBwbGF5ZXJzQXJyID0gcGxheWVycy5zcGxpdChcIixcIik7XG5cdGNvbnNvbGUubG9nKFwicGxheWVyc0FyclwiLCBwbGF5ZXJzQXJyKTtcblx0bGV0IHVzZXJzSWQ6IHN0cmluZ1tdID0gW3VzZXIuaWRdO1xuXHRmb3IgKGxldCBwbGF5ZXIgb2YgcGxheWVyc0Fycikge1xuXHRcdC8vIElmIGl0J3MgYW4gZW1wdHkgc3RyaW5nIGFuZCB0aGUgc3BsaXQganVzdCBsZWFkcyBhbiBlbXB0eSBcIlwiXG5cdFx0aWYgKHBsYXllciA9PSBcIlwiKSBjb250aW51ZTtcblxuXHRcdGNvbnNvbGUubG9nKFwicGxheWVyIGZvciBsb29wXCIsIHBsYXllcik7XG5cdFx0Y29uc3QgbmV3UGxheWVyID0gYXdhaXQgZ2V0VXNlckZyb21Vc2VybmFtZShwbGF5ZXIpO1xuXHRcdGNvbnNvbGUubG9nKFwibmV3UGxheWVyIHBsYXllciBmb3IgbG9vcFwiLCBuZXdQbGF5ZXIpO1xuXHRcdGNvbnN0IG5ld0lkID0gbmV3UGxheWVyLmlkO1xuXHRcdC8vIGlmIChuZXdJZCAhPT0gXCJzdHJpbmdcIikge1xuXHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKFwiYSBwbGF5ZXIgY291bGQgbm90IGJlIGFkZGVkIGZvciBpbmNvcnJlY3QgdXNlcm5hbWVcIik7XG5cdFx0Ly8gfVxuXHRcdHVzZXJzSWQgPSBbLi4udXNlcnNJZCwgbmV3SWRdO1xuXHR9XG5cblx0Y29uc3QgY2FkZGllcyA9IGZvcm0uZ2V0KFwiY2FkZGllc1wiKTtcblx0aWYgKHR5cGVvZiBjYWRkaWVzICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2FkZGllcyBpcyBub3QgYSBzdHJpbmdcIik7XG5cdH1cblx0Y29uc3QgY2FkZGllc0FyciA9IGNhZGRpZXMuc3BsaXQoXCIsXCIpO1xuXHRjb25zb2xlLmxvZyhcImNhZGRpZXNBcnJcIiwgY2FkZGllc0Fycik7XG5cdGZvciAobGV0IGNhZGR5IG9mIGNhZGRpZXNBcnIpIHtcblx0XHQvLyBJZiBpdCdzIGFuIGVtcHR5IHN0cmluZyBhbmQgdGhlIHNwbGl0IGp1c3QgbGVhZHMgYW4gZW1wdHkgXCJcIlxuXHRcdGlmIChjYWRkeSA9PSBcIlwiKSBjb250aW51ZTtcblxuXHRcdGNvbnN0IG5ld0NhZGR5ID0gYXdhaXQgZ2V0VXNlckZyb21Vc2VybmFtZShjYWRkeSk7XG5cdFx0Y29uc29sZS5sb2coXCJuZXdDYWRkeSBjYWRkeSBmb3IgbG9vcFwiLCBuZXdDYWRkeSk7XG5cdFx0Y29uc3QgbmV3SWQgPSBuZXdDYWRkeS5pZDsgLy8gQ291bGQgcHV0ID8gYWZ0ZXIgbmV3Q2FkZHlcblx0XHQvLyBpZiAobmV3SWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHQvLyBcdHRocm93IG5ldyBFcnJvcihcImEgcGxheWVyIGNvdWxkIG5vdCBiZSBhZGRlZCBmb3IgaW5jb3JyZWN0IHVzZXJuYW1lXCIpO1xuXHRcdC8vIH1cblx0XHR1c2Vyc0lkID0gWy4uLnVzZXJzSWQsIG5ld0lkXTtcblx0fVxuXHRjb25zb2xlLmxvZyhcInVzZXJzSWRcIiwgdXNlcnNJZCk7XG5cblx0Y29uc3Qgcm91bmQgPSBhd2FpdCBkYi5yb3VuZC5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdG93bmVySWQ6IHVzZXIuaWQsXG5cdFx0XHRyb3VuZFRpbWUsXG5cdFx0XHR1c2Vyc0lkLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zb2xlLmxvZyhcInJvdW5kIGNyZWF0ZWQ6IFwiLCByb3VuZCk7XG5cblx0Zm9yIChsZXQgdXNlciBvZiB1c2Vyc0lkKSB7XG5cdFx0Y29uc3QgdXNlck9uUm91bmQgPSBhd2FpdCBkYi51c2VyT25Sb3VuZC5jcmVhdGUoe1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHR1c2VySWQ6IHVzZXIsXG5cdFx0XHRcdHJvdW5kSWQ6IHJvdW5kLmlkLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnNvbGUubG9nKFwidXNlck9uUm91bmQ6IFwiLCB1c2VyT25Sb3VuZCk7XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xufTtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHktY29udGFpbmVyXCI+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhc2hib2FyZFN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZGFzaGJvYXJkL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHtcblx0Z2V0VXNlcixcblx0Z2V0Um91bmRzRnJvbVVzZXIsXG5cdGdldFVzZXJuYW1lRnJvbVVzZXJJZCxcbn0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuLy8gU2VhcmNoXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwifi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IHNlYXJjaFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvY29tcG9uZW50cy9zZWFyY2guY3NzXCI7XG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IGRhc2hib2FyZFN0eWxlcyxcblx0fSxcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogc2VhcmNoU3R5bGVzVXJsLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9OiBhbnkpID0+IHtcblx0bGV0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXHRpZiAoIXVzZXIpIHtcblx0XHR1c2VyID0ge1xuXHRcdFx0aWQ6IG51bGwsXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHJvdW5kc0RhdGEgPSBhd2FpdCBnZXRSb3VuZHNGcm9tVXNlcih1c2VyLmlkKTtcblx0Y29uc29sZS5sb2coXCJyb3VuZHNEYXRhXCIsIHJvdW5kc0RhdGEpO1xuXG5cdC8vIENoYW5nZSBlYWNoIHJvdW5kIGluIHJvdW5kc0RhdGEgZnJvbSBoYXZpbmdcblx0bGV0IHJvdW5kRGF0YTogYW55ID0gW107XG5cdGZvciAobGV0IHJvdW5kIG9mIHJvdW5kc0RhdGEpIHtcblx0XHRjb25zdCBvd25lck5hbWUgPSBhd2FpdCBnZXRVc2VybmFtZUZyb21Vc2VySWQocm91bmQub3duZXJJZCk7XG5cdFx0Y29uc3QgbmV3Um91bmQgPSB7XG5cdFx0XHQuLi5yb3VuZCxcblx0XHRcdG93bmVyOiBvd25lck5hbWUsXG5cdFx0fTtcblx0XHRyb3VuZERhdGEgPSBbLi4ucm91bmREYXRhLCBuZXdSb3VuZF07XG5cdH1cblx0Y29uc29sZS5sb2coXCJyb3VuZERhdGFcIiwgcm91bmREYXRhKTtcblxuXHRjb25zdCBkYXRhID0ge1xuXHRcdHVzZXIsXG5cdFx0cm91bmREYXRhLFxuXHR9O1xuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IFJvdyA9ICh7IHJvdW5kIH06IGFueSkgPT4ge1xuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PHRyPlxuXHRcdFx0PHRkPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLnJvdW5kVGltZX08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC5vd25lcn08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC51c2Vyc0lkLmxlbmd0aH0gaXMgd3Jvbmcgc2luY2UgdGhpcyBpcyBwbGF5ZXJzICsgY2FkZGllczwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLnVzZXJzSWQubGVuZ3RofSBpcyB3cm9uZyBzaW5jZSB0aGlzIGlzIHBsYXllcnMgKyBjYWRkaWVzPC90ZD5cblx0XHRcdDx0ZFxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2V0QWN0aXZlKCFhY3RpdmUpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0e2FjdGl2ZSA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZVwiLCBhY3RpdmUpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdENsb3NlXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8cD5EZWxldGU8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlZpZXc8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPkVkaXQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8YnV0dG9uPi4uLjwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHQpO1xufTtcblxuY29uc3QgQWRkUm91bmQgPSAoKSA9PiB7XG5cdGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW2NhZGRpZXMsIHNldENhZGRpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW2NhZGR5LCBzZXRDYWRkeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbbnVtQ2FkZGllcywgc2V0TnVtQ2FkZGllc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9kYXNoYm9hcmRcIj5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGU8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldERhdGUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwbGF5ZXJcIj5TZWFyY2ggUGxheWVycyA8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cIkFkZCBQbGF5ZXJzXCJcblx0XHRcdFx0dmFsdWU9e3BsYXllcn1cblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNldFBsYXllcihldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PFNlYXJjaCAvPlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldFBsYXllcnMoWy4uLnBsYXllcnMsIHBsYXllcl0pO1xuXHRcdFx0XHRcdHNldFBsYXllcihcIlwiKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdEFkZFxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG5cdFx0XHRcdDxoMz5DdXJyZW50bHkgQWRkZWQgUGxheWVyczogPC9oMz5cblxuXHRcdFx0XHR7cGxheWVycy5tYXAoKHBsYXllcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17cGxheWVyfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0XHRcdFx0PHA+KHtwbGF5ZXJ9KTwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQbGF5ZXJzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGF5ZXJzLmZpbHRlcigoY3VyclBsYXllcikgPT4gY3VyclBsYXllciAhPT0gcGxheWVyKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRYXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjYWRkeVwiPlNlYXJjaCBDYWRkaWVzIDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRuYW1lPVwiQWRkIENhZGRpZXNcIlxuXHRcdFx0XHR2YWx1ZT17Y2FkZHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZXRDYWRkeShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKGNhZGRpZXMubGVuZ3RoICsgMSA8PSBudW1DYWRkaWVzKSB7XG5cdFx0XHRcdFx0XHRzZXRDYWRkaWVzKFsuLi5jYWRkaWVzLCBjYWRkeV0pO1xuXHRcdFx0XHRcdFx0c2V0Q2FkZHkoXCJcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0QWRkXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHQ8aDM+SG93IG1hbnkgY2FkZGllcz88L2gzPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHNldE51bUNhZGRpZXMoTWF0aC5tYXgobnVtQ2FkZGllcyAtIDEsIGNhZGRpZXMubGVuZ3RoKSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0LVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PHA+e251bUNhZGRpZXN9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHNldE51bUNhZGRpZXMobnVtQ2FkZGllcyArIDEpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdCtcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0PGgzPkN1cnJlbnRseSBBZGRlZCBDYWRkaWVzOiA8L2gzPlxuXG5cdFx0XHRcdHtjYWRkaWVzLm1hcCgoY2FkZHkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2NhZGR5fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0XHRcdFx0PHA+KHtjYWRkeX0pPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldENhZGRpZXMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhZGRpZXMuZmlsdGVyKChjdXJyQ2FkZHkpID0+IGN1cnJDYWRkeSAhPT0gY2FkZHkpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFhcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxiciAvPlxuXG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2RhdGV9IC8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwbGF5ZXJzXCIgdmFsdWU9e3BsYXllcnN9IC8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjYWRkaWVzXCIgdmFsdWU9e2NhZGRpZXN9IC8+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFJvdW5kPC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHQpO1xufTtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHR9LCBbXSk7XG5cdGNvbnN0IFttb2RhbEFjdGl2ZSwgc2V0TW9kYWxBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cblx0XHRcdFx0PGgxPkhvbWUge2RhdGEudXNlci51c2VybmFtZX08L2gxPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0TW9kYWxBY3RpdmUoIW1vZGFsQWN0aXZlKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHR7bW9kYWxBY3RpdmUgPyBcIkNsb3NlIFJvdW5kXCIgOiBcIkFkZCBSb3VuZFwifVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7bW9kYWxBY3RpdmUgPyAoXG5cdFx0XHRcdFx0PEFkZFJvdW5kIC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+RGF0ZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoPk93bmVyPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+IyBQbGF5ZXJzPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+IyBDYWRkaWVzPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+UjwvdGg+XG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5yb3VuZERhdGEubWFwKChyb3VuZDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxSb3cga2V5PXtyb3VuZC5pZH0gcm91bmQ9e3JvdW5kfSAvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2NvbXBvbmVudHMvc2VhcmNoLmNzc1wiO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBzdHlsZXNVcmwsXG5cdH0sXG5dO1xuXG5jb25zdCBjaG9zZU9wdGlvbiA9IChvcHRpb246IHN0cmluZykgPT4ge1xuXHRjb25zb2xlLmxvZyhcImNob3NlIFwiLCBvcHRpb24pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1jb250ZW50IHNob3dcIj5cblx0XHRcdFx0PHAgb25DbGljaz17Y2hvc2VPcHRpb24oXCJBYm91dFwiKX0+QWJvdXQ8L3A+XG5cdFx0XHRcdDxwPkJsb2c8L3A+XG5cdFx0XHRcdDxwPkJhc2U8L3A+XG5cdFx0XHRcdDxwPkNvbnRhY3Q8L3A+XG5cdFx0XHRcdDxhIGhyZWY9XCIjdG9vbHNcIj5Ub29sczwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9keS1jb250YWluZXJcIlxuXHRcdFx0XHRzdHlsZT17eyBmb250RmFtaWx5OiBcInN5c3RlbS11aSwgc2Fucy1zZXJpZlwiLCBsaW5lSGVpZ2h0OiBcIjEuNFwiIH19PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiPkdvIHRvIERhc2hib2FyZDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGgxPldlbGNvbWUgdG8gUmVtaXg8L2gxPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHQxNW0gUXVpY2tzdGFydCBCbG9nIFR1dG9yaWFsXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2pva2VzXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHREZWVwIERpdmUgSm9rZXMgQXBwIFR1dG9yaWFsXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0UmVtaXggRG9jc1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcblxuZnVuY3Rpb24gQXV0aCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aDtcbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG5cdC8vIExvZyB0aGlzIHBlcnNvbiBvdXQgb2YgdGhlIHNlc3Npb25cblx0Y29uc29sZS5sb2coXCJpbiB0aGUgYWN0aW9uIGZ1bmN0aW9uIGxvZ291dFwiKTtcblx0cmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4vLyBcdHJldHVybiByZWRpcmVjdChcIi9cIik7XG4vLyB9O1xuIiwgImltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIGpzb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vdXRpbHMvZGIuc2VydmVyXCI7XG5pbXBvcnQgeyBsb2dpbiwgcmVnaXN0ZXIsIGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xuXHRjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXHRjb25zdCBsb2dpblR5cGUgPSBmb3JtLmdldChcImxvZ2luVHlwZVwiKTtcblx0Y29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuXHRjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cblx0Y29uc3QgZmllbGRzID0ge1xuXHRcdGxvZ2luVHlwZSxcblx0XHR1c2VybmFtZSxcblx0XHRwYXNzd29yZCxcblx0fTtcblxuXHRzd2l0Y2ggKGxvZ2luVHlwZSkge1xuXHRcdGNhc2UgXCJsb2dpblwiOiB7XG5cdFx0XHQvLyBGaW5kIHVzZXJcblx0XHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcblxuXHRcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHVzZXIgY29ycmVjdGx5IGxvZ2dlZCBpblxuXHRcdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdFx0XHRmaWVsZHMsXG5cdFx0XHRcdFx0ZmllbGRFcnJvcnM6IHsgdXNlcm5hbWU6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgdXNlciBzZXNzaW9uXG5cdFx0XHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgXCIvZGFzaGJvYXJkXCIpO1xuXHRcdH1cblxuXHRcdGNhc2UgXCJyZWdpc3RlclwiOiB7XG5cdFx0XHQvLyBDaGVjayBpZiB1c2VyIGV4aXN0c1xuXHRcdFx0Y29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcblx0XHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAodXNlckV4aXN0cykge1xuXHRcdFx0XHRyZXR1cm4gYmFkUmVxdWVzdCh7XG5cdFx0XHRcdFx0ZmllbGRzLFxuXHRcdFx0XHRcdGZpZWxkRXJyb3JzOiB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZTogYFVzZXIgJHt1c2VybmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgdXNlclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXHRcdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdFx0XHRmaWVsZHMsXG5cdFx0XHRcdFx0ZmllbGRFcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIHRoZSB1c2VyXCIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgXCIvZGFzaGJvYXJkXCIpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBhbnkpID0+IHtcblx0cmV0dXJuIGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcbn07XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuXHRjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coYWN0aW9uRGF0YSk7XG5cdH0sIFthY3Rpb25EYXRhXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPkxvZ2luPC9oMT5cblx0XHRcdDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0PGZpZWxkc2V0PlxuXHRcdFx0XHRcdDxsZWdlbmQ+TG9naW4gb3IgUmVnaXN0ZXI8L2xlZ2VuZD5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImxvZ2luVHlwZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPVwibG9naW5cIlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZD17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRMb2dpblxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsb2dpblR5cGVcIiB2YWx1ZT1cInJlZ2lzdGVyXCIgLz5cblx0XHRcdFx0XHRcdFJlZ2lzdGVyXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PC9maWVsZHNldD5cblxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxuXG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8YnIgLz5cblxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cblxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PGJyIC8+XG5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzZhZmQ4MGU2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1aWUhGUVdPSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWVZDSlJPNVouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTzVPQlFaM0UuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoJzp7J2lkJzoncm91dGVzL2F1dGgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLVhOQVlDQUVBLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dpbic6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ2luJywncGFyZW50SWQnOidyb3V0ZXMvYXV0aCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ2luLTJTTTZINEVOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUNRWFhQVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2F1dGgvbG9nb3V0JywncGFyZW50SWQnOidyb3V0ZXMvYXV0aCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9sb2dvdXQtT1NGVkxBRE8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1KSk9IV1pCVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFDUVhYUFYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtQUlDTUJJQU8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXNUtMRlhVLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTVFSVRVS1NILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTZBRkQ4MEU2LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlB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
