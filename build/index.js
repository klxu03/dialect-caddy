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
var links2 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  }
];
var loader = async ({ request, params }) => {
  let user = await getUser(request);
  if (!user) {
    user = {
      id: null
    };
  }
  const roundData = [
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
var assets_manifest_default = { "version": "272e843d", "entry": { "module": "/build/entry.client-ZYHFQWOI.js", "imports": ["/build/_shared/chunk-YVCJRO5Z.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-O5OBQZ3E.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-XNAYCAEA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "routes/auth", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-2SM6H4EN.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js", "/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "routes/auth", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-OSFVLADO.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-JJOHWZBW.js", "imports": ["/build/_shared/chunk-RQCQXXPV.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-F3G7JT6C.js", "imports": ["/build/_shared/chunk-4W5KLFXU.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5EITUKSH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-272E843D.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIudHN4IiwgIi4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi9hcHAvdXRpbHMvZGIuc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9hdXRoLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgvbG9nb3V0LnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vZXhwcmVzc1wiO1xuXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvYXV0aC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9hdXRoL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9hdXRoL2xvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2F1dGhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYXV0aFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9hdXRoXCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL1NpZGViYXJcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4geyB0aXRsZTogXCJEaWFsZWN0IENhZGR5U2hhY2sgU3Vic2lkaWFyeVwiIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8RG9jdW1lbnQ+XG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8L0RvY3VtZW50PlxuXHQpO1xufVxuXG50eXBlIERvY3VtZW50VHlwZSA9IHtcblx0Y2hpbGRyZW46IGFueTtcblx0Ly8gICB0aXRsZTogc3RyaW5nO1xufTtcblxuY29uc3QgRG9jdW1lbnQgPSAoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFR5cGUpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8aHRtbCBsYW5nPVwiZW5cIj5cblx0XHRcdDxoZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cdFx0XHRcdDxNZXRhIC8+XG5cdFx0XHRcdDxMaW5rcyAvPlxuXHRcdFx0XHR7LyogPHRpdGxlPnt0aXRsZSA/IHRpdGxlIDogJ015IEN1c3RvbSBEZWZhdWx0IFRpdGxlJ308L3RpdGxlPiAqL31cblx0XHRcdDwvaGVhZD5cblx0XHRcdDxib2R5PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuXHRcdFx0XHQ8U2NyaXB0cyAvPlxuXHRcdFx0XHQ8U2Nyb2xsUmVzdG9yYXRpb24gLz5cblx0XHRcdFx0PExpdmVSZWxvYWQgLz5cblx0XHRcdDwvYm9keT5cblx0XHQ8L2h0bWw+XG5cdCk7XG59O1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFNpZGViYXIgLz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8Lz5cblx0KTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcblx0Y29uc3QgdXNlciA9IGdldFVzZXIocmVxdWVzdCk7XG5cdGNvbnNvbGUubG9nKFwidXNlciBpbiBzaWRlYmFyXCIsIHVzZXIpO1xuXHRyZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuXHRjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJob21lXCIpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cblx0XHRcdFx0VGhpcyBpcyBhIHNpZGViYXJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFwibWVudS1pdGVtIFwiICsgKGFjdGl2ZSA9PSBcImhvbWVcIiA/IFwibWVudS1pdGVtLWFjdGl2ZVwiIDogXCJcIilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImhvbWVcIil9PlxuXHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFwibWVudS1pdGVtIFwiICsgKGFjdGl2ZSA9PSBcImNhZGRpZXNcIiAmJiBcIm1lbnUtaXRlbS1hY3RpdmVcIilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImNhZGRpZXNcIil9PlxuXHRcdFx0XHRcdFx0Q2FkZGllc1xuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XCJtZW51LWl0ZW0gXCIgKyAoYWN0aXZlID09IFwiaGVscFwiICYmIFwibWVudS1pdGVtLWFjdGl2ZVwiKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShcImhlbHBcIil9PlxuXHRcdFx0XHRcdFx0SGVscFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIvYXV0aC9sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dvdXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PExpbmsgdG89XCIvYXV0aC9sb2dpblwiPkxvZyBJbjwvTGluaz5cblx0XHRcdFx0XHR7Lyoge2RhdGEgPyAoXG5cdFx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIvYXV0aC9sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ291dDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9hdXRoL2xvZ2luXCI+TG9nIEluPC9MaW5rPlxuXHRcdFx0XHRcdCl9ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYi5zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbnR5cGUgVXNlckluZm8gPSB7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG4vLyBMb2dpbiB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogVXNlckluZm8pIHtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIElmIHRoZXJlIGRvZXNuJ3QgZXhpc3Qgc3VjaCBhIHVzZXJcblx0aWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuXHQvLyBOb3cgY2hlY2sgdGhlIHBhc3N3b3JkXG5cdGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcblx0aWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIHVzZXI7XG59XG5cbi8vIFJlZ2lzdGVyIFVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VySW5mbykge1xuXHRjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG5cdHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZEhhc2gsXG5cdFx0XHR0eXBlOiBcInBsYXllclwiLFxuXHRcdH0sXG5cdH0pO1xufVxuXG4vLyBDcmVhdGUgc2Vzc2lvbiBzdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuXHRjb29raWU6IHtcblx0XHRuYW1lOiBcImRpYWxlY3QtY2FkZHlfc2Vzc2lvblwiLFxuXHRcdHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuXHRcdHNlY3JldHM6IFtcInNlY3JldFwiXSxcblx0XHRzYW1lU2l0ZTogXCJsYXhcIixcblx0XHRwYXRoOiBcIi9cIixcblx0XHRtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDYwLCAvLyA2MCBzZWNzIHBlciBtaW4gKiA2MCBtaW5zIHBlciBob3VyICogMjQgaG91cnMgcGVyIGRheSogNjAgZGF5c1xuXHRcdGh0dHBPbmx5OiB0cnVlLFxuXHR9LFxufSk7XG5cbi8vIENyZWF0ZSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuXHRjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG5cdHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG5cdHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcbn1cblxuLy8gR2V0IHVzZXIgc2Vzc2lvblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0cmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuLy8gR2V0IGxvZ2dlZCBpbiB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cdGNvbnNvbGUubG9nKFwiZ2V0VXNlclwiLCB1c2VySWQpO1xuXG5cdGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHRpZDogdXNlcklkLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHJldHVybiB1c2VyO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIEdldCB1c2VySWRzIGZyb20gdXNlcm5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbVVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpIHtcblx0Y29uc29sZS5sb2coXCJ1c2VybmFtZSBwYXJhbSBpcyBcIiwgdXNlcm5hbWUpO1xuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKFwiZ2V0VXNlckZyb21Vc2VybmFtZVwiLCB1c2VyKTtcblxuXHRcdHJldHVybiB1c2VyO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8vIExvZyBvdXQgdXNlciBhbmQgZGVzdHJveSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcblx0c2Vzc2lvbi51bnNldChcInVzZXJJZFwiKTtcblx0Y29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cdGNvbnNvbGUubG9nKFwiZ2V0VXNlclwiLCB1c2VySWQpO1xuXG5cdC8vIHJldHVybiByZWRpcmVjdChcIi9hdXRoL2xvZ291dFwiKTtcblx0cmV0dXJuIHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiLCB7XG5cdFx0aGVhZGVyczoge1xuXHRcdFx0XCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcblx0XHR9LFxuXHR9KTtcblx0Ly8gcmV0dXJuIHJlZGlyZWN0KFwiL2F1dGgvbG9nb3V0XCIsIHtcblx0Ly8gXHRoZWFkZXJzOiB7XG5cdC8vIFx0XHRcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcblx0Ly8gXHR9LFxuXHQvLyB9KTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBkYi4kY29ubmVjdCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XG4gIH1cblxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0VXNlciwgZ2V0VXNlckZyb21Vc2VybmFtZSB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJ+L3V0aWxzL2RiLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcblx0Y29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblx0Y29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cdGlmICh0eXBlb2YgdXNlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB1c2VyID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidXNlciBpcyBub3QgbG9nZ2VkIGluIGZvciBvd25lclwiKTtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBmb3JtLmdldChcImRhdGVcIik/LnRvU3RyaW5nKCk7XG5cdC8vIGNvbnNvbGUubG9nKGRhdGUpOyAvLyAyMDIyLTAzLTIzVDAxOjU5XG5cdGNvbnN0IHJvdW5kVGltZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRjb25zb2xlLmxvZyhcInJvdW5kVGltZVwiLCByb3VuZFRpbWUpO1xuXG5cdGNvbnN0IHBsYXllcnMgPSBmb3JtLmdldChcInBsYXllcnNcIik7XG5cdGlmICh0eXBlb2YgcGxheWVycyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcInBsYXllcnMgaXMgbm90IGEgc3RyaW5nXCIpO1xuXHR9XG5cblx0Y29uc3QgcGxheWVyc0FyciA9IHBsYXllcnMuc3BsaXQoXCIsXCIpO1xuXHRjb25zb2xlLmxvZyhcInBsYXllcnNBcnJcIiwgcGxheWVyc0Fycik7XG5cdGxldCB1c2Vyc0lkOiBzdHJpbmdbXSA9IFt1c2VyLmlkXTtcblx0Zm9yIChsZXQgcGxheWVyIG9mIHBsYXllcnNBcnIpIHtcblx0XHQvLyBJZiBpdCdzIGFuIGVtcHR5IHN0cmluZyBhbmQgdGhlIHNwbGl0IGp1c3QgbGVhZHMgYW4gZW1wdHkgXCJcIlxuXHRcdGlmIChwbGF5ZXIgPT0gXCJcIikgY29udGludWU7XG5cblx0XHRjb25zb2xlLmxvZyhcInBsYXllciBmb3IgbG9vcFwiLCBwbGF5ZXIpO1xuXHRcdGNvbnN0IG5ld1BsYXllciA9IGF3YWl0IGdldFVzZXJGcm9tVXNlcm5hbWUocGxheWVyKTtcblx0XHRjb25zb2xlLmxvZyhcIm5ld1BsYXllciBwbGF5ZXIgZm9yIGxvb3BcIiwgbmV3UGxheWVyKTtcblx0XHRjb25zdCBuZXdJZCA9IG5ld1BsYXllci5pZDtcblx0XHQvLyBpZiAobmV3SWQgIT09IFwic3RyaW5nXCIpIHtcblx0XHQvLyBcdHRocm93IG5ldyBFcnJvcihcImEgcGxheWVyIGNvdWxkIG5vdCBiZSBhZGRlZCBmb3IgaW5jb3JyZWN0IHVzZXJuYW1lXCIpO1xuXHRcdC8vIH1cblx0XHR1c2Vyc0lkID0gWy4uLnVzZXJzSWQsIG5ld0lkXTtcblx0fVxuXG5cdGNvbnN0IGNhZGRpZXMgPSBmb3JtLmdldChcImNhZGRpZXNcIik7XG5cdGlmICh0eXBlb2YgY2FkZGllcyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNhZGRpZXMgaXMgbm90IGEgc3RyaW5nXCIpO1xuXHR9XG5cdGNvbnN0IGNhZGRpZXNBcnIgPSBjYWRkaWVzLnNwbGl0KFwiLFwiKTtcblx0Y29uc29sZS5sb2coXCJjYWRkaWVzQXJyXCIsIGNhZGRpZXNBcnIpO1xuXHRmb3IgKGxldCBjYWRkeSBvZiBjYWRkaWVzQXJyKSB7XG5cdFx0Ly8gSWYgaXQncyBhbiBlbXB0eSBzdHJpbmcgYW5kIHRoZSBzcGxpdCBqdXN0IGxlYWRzIGFuIGVtcHR5IFwiXCJcblx0XHRpZiAoY2FkZHkgPT0gXCJcIikgY29udGludWU7XG5cblx0XHRjb25zdCBuZXdDYWRkeSA9IGF3YWl0IGdldFVzZXJGcm9tVXNlcm5hbWUoY2FkZHkpO1xuXHRcdGNvbnNvbGUubG9nKFwibmV3Q2FkZHkgY2FkZHkgZm9yIGxvb3BcIiwgbmV3Q2FkZHkpO1xuXHRcdGNvbnN0IG5ld0lkID0gbmV3Q2FkZHkuaWQ7IC8vIENvdWxkIHB1dCA/IGFmdGVyIG5ld0NhZGR5XG5cdFx0Ly8gaWYgKG5ld0lkICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoXCJhIHBsYXllciBjb3VsZCBub3QgYmUgYWRkZWQgZm9yIGluY29ycmVjdCB1c2VybmFtZVwiKTtcblx0XHQvLyB9XG5cdFx0dXNlcnNJZCA9IFsuLi51c2Vyc0lkLCBuZXdJZF07XG5cdH1cblx0Y29uc29sZS5sb2coXCJ1c2Vyc0lkXCIsIHVzZXJzSWQpO1xuXG5cdGNvbnN0IHJvdW5kID0gYXdhaXQgZGIucm91bmQuY3JlYXRlKHtcblx0XHRkYXRhOiB7XG5cdFx0XHRvd25lcklkOiB1c2VyLmlkLFxuXHRcdFx0cm91bmRUaW1lLFxuXHRcdFx0dXNlcnNJZCxcblx0XHR9LFxuXHR9KTtcblx0Y29uc29sZS5sb2coXCJyb3VuZCBjcmVhdGVkOiBcIiwgcm91bmQpO1xuXG5cdGZvciAobGV0IHVzZXIgb2YgdXNlcnNJZCkge1xuXHRcdGNvbnN0IHVzZXJPblJvdW5kID0gYXdhaXQgZGIudXNlck9uUm91bmQuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dXNlcklkOiB1c2VyLFxuXHRcdFx0XHRyb3VuZElkOiByb3VuZC5pZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zb2xlLmxvZyhcInVzZXJPblJvdW5kOiBcIiwgdXNlck9uUm91bmQpO1xuXHR9XG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbn07XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXNoYm9hcmRTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2Rhc2hib2FyZC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG5cdHtcblx0XHRyZWw6IFwic3R5bGVzaGVldFwiLFxuXHRcdGhyZWY6IGRhc2hib2FyZFN0eWxlcyxcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfTogYW55KSA9PiB7XG5cdGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblx0aWYgKCF1c2VyKSB7XG5cdFx0dXNlciA9IHtcblx0XHRcdGlkOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCByb3VuZERhdGEgPSBbXG5cdFx0e1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHRkYXRlOiBcIjMvMTcgQCAxMjo1MSBQTVwiLFxuXHRcdFx0b3duZXI6IFwiS3VydGlzUGxheWVyMVwiLFxuXHRcdFx0cGxheWVyczogMixcblx0XHRcdGNhZGRpZXM6IDEsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogMixcblx0XHRcdGRhdGU6IFwiMy8xOCBAIDEyOjUxIFBNXCIsXG5cdFx0XHRvd25lcjogXCJLdXJ0aXNQbGF5ZXIyXCIsXG5cdFx0XHRwbGF5ZXJzOiA1LFxuXHRcdFx0Y2FkZGllczogMixcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IGRhdGEgPSB7XG5cdFx0dXNlcixcblx0XHRyb3VuZERhdGEsXG5cdH07XG5cdHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgUm93ID0gKHsgcm91bmQgfTogYW55KSA9PiB7XG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZD57cm91bmQuZGF0ZX08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC5vd25lcn08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC5wbGF5ZXJzfTwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLmNhZGRpZXN9PC90ZD5cblx0XHRcdDx0ZFxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2V0QWN0aXZlKCFhY3RpdmUpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0e2FjdGl2ZSA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZVwiLCBhY3RpdmUpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdENsb3NlXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8cD5EZWxldGU8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlZpZXc8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPkVkaXQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8YnV0dG9uPi4uLjwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHQpO1xufTtcblxuY29uc3QgQWRkUm91bmQgPSAoKSA9PiB7XG5cdGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW2NhZGRpZXMsIHNldENhZGRpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW2NhZGR5LCBzZXRDYWRkeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbbnVtQ2FkZGllcywgc2V0TnVtQ2FkZGllc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9kYXNoYm9hcmRcIj5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGU8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldERhdGUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwbGF5ZXJcIj5TZWFyY2ggUGxheWVycyA8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cIkFkZCBQbGF5ZXJzXCJcblx0XHRcdFx0dmFsdWU9e3BsYXllcn1cblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNldFBsYXllcihldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0UGxheWVycyhbLi4ucGxheWVycywgcGxheWVyXSk7XG5cdFx0XHRcdFx0c2V0UGxheWVyKFwiXCIpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0QWRkXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0PGgzPkN1cnJlbnRseSBBZGRlZCBQbGF5ZXJzOiA8L2gzPlxuXG5cdFx0XHRcdHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtwbGF5ZXJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8cD4oe3BsYXllcn0pPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFBsYXllcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllcnMuZmlsdGVyKChjdXJyUGxheWVyKSA9PiBjdXJyUGxheWVyICE9PSBwbGF5ZXIpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFhcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxiciAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImNhZGR5XCI+U2VhcmNoIENhZGRpZXMgPC9sYWJlbD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdG5hbWU9XCJBZGQgQ2FkZGllc1wiXG5cdFx0XHRcdHZhbHVlPXtjYWRkeX1cblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNldENhZGR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoY2FkZGllcy5sZW5ndGggKyAxIDw9IG51bUNhZGRpZXMpIHtcblx0XHRcdFx0XHRcdHNldENhZGRpZXMoWy4uLmNhZGRpZXMsIGNhZGR5XSk7XG5cdFx0XHRcdFx0XHRzZXRDYWRkeShcIlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRBZGRcblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG5cdFx0XHRcdDxoMz5Ib3cgbWFueSBjYWRkaWVzPzwvaDM+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c2V0TnVtQ2FkZGllcyhNYXRoLm1heChudW1DYWRkaWVzIC0gMSwgY2FkZGllcy5sZW5ndGgpKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQtXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8cD57bnVtQ2FkZGllc308L3A+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c2V0TnVtQ2FkZGllcyhudW1DYWRkaWVzICsgMSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0K1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHQ8aDM+Q3VycmVudGx5IEFkZGVkIENhZGRpZXM6IDwvaDM+XG5cblx0XHRcdFx0e2NhZGRpZXMubWFwKChjYWRkeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17Y2FkZHl9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8cD4oe2NhZGR5fSk8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0Q2FkZGllcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FkZGllcy5maWx0ZXIoKGN1cnJDYWRkeSkgPT4gY3VyckNhZGR5ICE9PSBjYWRkeSlcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0WFxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxiciAvPlxuXHRcdFx0PGJyIC8+XG5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRhdGVcIiB2YWx1ZT17ZGF0ZX0gLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBsYXllcnNcIiB2YWx1ZT17cGxheWVyc30gLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNhZGRpZXNcIiB2YWx1ZT17Y2FkZGllc30gLz5cblx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgUm91bmQ8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59O1xuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cdGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdH0sIFtdKTtcblx0Y29uc3QgW21vZGFsQWN0aXZlLCBzZXRNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuXHRcdFx0XHQ8aDE+SG9tZSB7ZGF0YS51c2VyLnVzZXJuYW1lfTwvaDE+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNb2RhbEFjdGl2ZSghbW9kYWxBY3RpdmUpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdHttb2RhbEFjdGl2ZSA/IFwiQ2xvc2UgUm91bmRcIiA6IFwiQWRkIFJvdW5kXCJ9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHttb2RhbEFjdGl2ZSA/IChcblx0XHRcdFx0XHQ8QWRkUm91bmQgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5EYXRlPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+T3duZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD4jIFBsYXllcnM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD4jIENhZGRpZXM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SPC90aD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdHtkYXRhLnJvdW5kRGF0YS5tYXAoKHJvdW5kOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPFJvdyBrZXk9e3JvdW5kLmlkfSByb3VuZD17cm91bmR9IC8+O1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiXG5cdFx0XHRcdHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+R28gdG8gRGFzaGJvYXJkPC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2Jsb2dcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdERlZXAgRGl2ZSBKb2tlcyBBcHAgVHV0b3JpYWxcblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHRSZW1peCBEb2NzXG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5mdW5jdGlvbiBBdXRoKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHktY29udGFpbmVyXCI+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiBhbnkpID0+IHtcblx0Ly8gTG9nIHRoaXMgcGVyc29uIG91dCBvZiB0aGUgc2Vzc2lvblxuXHRjb25zb2xlLmxvZyhcImluIHRoZSBhY3Rpb24gZnVuY3Rpb24gbG9nb3V0XCIpO1xuXHRyZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbi8vIFx0cmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbi8vIH07XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi91dGlscy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB7IGxvZ2luLCByZWdpc3RlciwgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XG5cdGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cdGNvbnN0IGxvZ2luVHlwZSA9IGZvcm0uZ2V0KFwibG9naW5UeXBlXCIpO1xuXHRjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG5cdGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblxuXHRjb25zdCBmaWVsZHMgPSB7XG5cdFx0bG9naW5UeXBlLFxuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkLFxuXHR9O1xuXG5cdHN3aXRjaCAobG9naW5UeXBlKSB7XG5cdFx0Y2FzZSBcImxvZ2luXCI6IHtcblx0XHRcdC8vIEZpbmQgdXNlclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgdXNlciBjb3JyZWN0bHkgbG9nZ2VkIGluXG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0XHRcdGZpZWxkcyxcblx0XHRcdFx0XHRmaWVsZEVycm9yczogeyB1c2VybmFtZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSB1c2VyIHNlc3Npb25cblx0XHRcdHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCBcIi9kYXNoYm9hcmRcIik7XG5cdFx0fVxuXG5cdFx0Y2FzZSBcInJlZ2lzdGVyXCI6IHtcblx0XHRcdC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzXG5cdFx0XHRjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgZGIudXNlci5maW5kRmlyc3Qoe1xuXHRcdFx0XHR3aGVyZToge1xuXHRcdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh1c2VyRXhpc3RzKSB7XG5cdFx0XHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdFx0XHRmaWVsZHMsXG5cdFx0XHRcdFx0ZmllbGRFcnJvcnM6IHtcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBgVXNlciAke3VzZXJuYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSB1c2VyXG5cdFx0XHRjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cdFx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0XHRcdGZpZWxkcyxcblx0XHRcdFx0XHRmaWVsZEVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgdGhlIHVzZXJcIixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCBcIi9kYXNoYm9hcmRcIik7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IGFueSkgPT4ge1xuXHRyZXR1cm4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufTtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG5cdGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhhY3Rpb25EYXRhKTtcblx0fSwgW2FjdGlvbkRhdGFdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+TG9naW48L2gxPlxuXHRcdFx0PGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHQ8ZmllbGRzZXQ+XG5cdFx0XHRcdFx0PGxlZ2VuZD5Mb2dpbiBvciBSZWdpc3RlcjwvbGVnZW5kPlxuXHRcdFx0XHRcdDxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwibG9naW5UeXBlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJsb2dpblwiXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxvZ2luVHlwZVwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxuXHRcdFx0XHRcdFx0UmVnaXN0ZXJcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XG5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxiciAvPlxuXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuXG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8YnIgLz5cblxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMjcyZTg0M2QnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVpZSEZRV09JLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZVkNKUk81Wi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1PNU9CUVozRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgnOnsnaWQnOidyb3V0ZXMvYXV0aCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgtWE5BWUNBRUEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoJywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9naW4tMlNNNkg0RU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRQ1FYWFBWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dvdXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9hdXRoJywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ291dC1PU0ZWTEFETy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkJzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkYXNoYm9hcmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkLUpKT0hXWkJXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUNRWFhQVi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC9pbmRleC1GM0c3SlQ2Qy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNFc1S0xGWFUuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNUVJVFVLU0guanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMjcyRTg0M0QuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07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
