!(function () {
  var t = {
      7757: function (t, e, n) {
        t.exports = n(5666);
      },
      1694: function (t, e, n) {
        "use strict";
        n.d(e, {
          Xb: function () {
            return y;
          },
          Gd: function () {
            return x;
          },
          cu: function () {
            return g;
          },
        });
        var r,
          i,
          o = n(655);
        !(function (t) {
          (t.Ok = "ok"),
            (t.Exited = "exited"),
            (t.Crashed = "crashed"),
            (t.Abnormal = "abnormal");
        })(r || (r = {})),
          (function (t) {
            (t.Ok = "ok"), (t.Errored = "errored"), (t.Crashed = "crashed");
          })(i || (i = {}));
        var a = n(2844),
          s = n(1170),
          u = n(2343),
          c = n(2991),
          l = n(1422),
          f = n(7597),
          p = (function () {
            function t(t) {
              var e = this;
              (this._state = "PENDING"),
                (this._handlers = []),
                (this._resolve = function (t) {
                  e._setResult("RESOLVED", t);
                }),
                (this._reject = function (t) {
                  e._setResult("REJECTED", t);
                }),
                (this._setResult = function (t, n) {
                  "PENDING" === e._state &&
                    ((0, f.J8)(n)
                      ? n.then(e._resolve, e._reject)
                      : ((e._state = t), (e._value = n), e._executeHandlers()));
                }),
                (this._attachHandler = function (t) {
                  (e._handlers = e._handlers.concat(t)), e._executeHandlers();
                }),
                (this._executeHandlers = function () {
                  if ("PENDING" !== e._state) {
                    var t = e._handlers.slice();
                    (e._handlers = []),
                      t.forEach(function (t) {
                        t.done ||
                          ("RESOLVED" === e._state &&
                            t.onfulfilled &&
                            t.onfulfilled(e._value),
                          "REJECTED" === e._state &&
                            t.onrejected &&
                            t.onrejected(e._value),
                          (t.done = !0));
                      });
                  }
                });
              try {
                t(this._resolve, this._reject);
              } catch (t) {
                this._reject(t);
              }
            }
            return (
              (t.resolve = function (e) {
                return new t(function (t) {
                  t(e);
                });
              }),
              (t.reject = function (e) {
                return new t(function (t, n) {
                  n(e);
                });
              }),
              (t.all = function (e) {
                return new t(function (n, r) {
                  if (Array.isArray(e))
                    if (0 !== e.length) {
                      var i = e.length,
                        o = [];
                      e.forEach(function (e, a) {
                        t.resolve(e)
                          .then(function (t) {
                            (o[a] = t), 0 === (i -= 1) && n(o);
                          })
                          .then(null, r);
                      });
                    } else n([]);
                  else
                    r(new TypeError("Promise.all requires an array as input."));
                });
              }),
              (t.prototype.then = function (e, n) {
                var r = this;
                return new t(function (t, i) {
                  r._attachHandler({
                    done: !1,
                    onfulfilled: function (n) {
                      if (e)
                        try {
                          return void t(e(n));
                        } catch (t) {
                          return void i(t);
                        }
                      else t(n);
                    },
                    onrejected: function (e) {
                      if (n)
                        try {
                          return void t(n(e));
                        } catch (t) {
                          return void i(t);
                        }
                      else i(e);
                    },
                  });
                });
              }),
              (t.prototype.catch = function (t) {
                return this.then(function (t) {
                  return t;
                }, t);
              }),
              (t.prototype.finally = function (e) {
                var n = this;
                return new t(function (t, r) {
                  var i, o;
                  return n
                    .then(
                      function (t) {
                        (o = !1), (i = t), e && e();
                      },
                      function (t) {
                        (o = !0), (i = t), e && e();
                      }
                    )
                    .then(function () {
                      o ? r(i) : t(i);
                    });
                });
              }),
              (t.prototype.toString = function () {
                return "[object SyncPromise]";
              }),
              t
            );
          })(),
          d = (function () {
            function t() {
              (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._contexts = {});
            }
            return (
              (t.clone = function (e) {
                var n = new t();
                return (
                  e &&
                    ((n._breadcrumbs = (0, o.fl)(e._breadcrumbs)),
                    (n._tags = (0, o.pi)({}, e._tags)),
                    (n._extra = (0, o.pi)({}, e._extra)),
                    (n._contexts = (0, o.pi)({}, e._contexts)),
                    (n._user = e._user),
                    (n._level = e._level),
                    (n._span = e._span),
                    (n._session = e._session),
                    (n._transactionName = e._transactionName),
                    (n._fingerprint = e._fingerprint),
                    (n._eventProcessors = (0, o.fl)(e._eventProcessors)),
                    (n._requestSession = e._requestSession)),
                  n
                );
              }),
              (t.prototype.addScopeListener = function (t) {
                this._scopeListeners.push(t);
              }),
              (t.prototype.addEventProcessor = function (t) {
                return this._eventProcessors.push(t), this;
              }),
              (t.prototype.setUser = function (t) {
                return (
                  (this._user = t || {}),
                  this._session && this._session.update({ user: t }),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.getUser = function () {
                return this._user;
              }),
              (t.prototype.getRequestSession = function () {
                return this._requestSession;
              }),
              (t.prototype.setRequestSession = function (t) {
                return (this._requestSession = t), this;
              }),
              (t.prototype.setTags = function (t) {
                return (
                  (this._tags = (0, o.pi)((0, o.pi)({}, this._tags), t)),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setTag = function (t, e) {
                var n;
                return (
                  (this._tags = (0, o.pi)(
                    (0, o.pi)({}, this._tags),
                    (((n = {})[t] = e), n)
                  )),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setExtras = function (t) {
                return (
                  (this._extra = (0, o.pi)((0, o.pi)({}, this._extra), t)),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setExtra = function (t, e) {
                var n;
                return (
                  (this._extra = (0, o.pi)(
                    (0, o.pi)({}, this._extra),
                    (((n = {})[t] = e), n)
                  )),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setFingerprint = function (t) {
                return (
                  (this._fingerprint = t), this._notifyScopeListeners(), this
                );
              }),
              (t.prototype.setLevel = function (t) {
                return (this._level = t), this._notifyScopeListeners(), this;
              }),
              (t.prototype.setTransactionName = function (t) {
                return (
                  (this._transactionName = t),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setTransaction = function (t) {
                return this.setTransactionName(t);
              }),
              (t.prototype.setContext = function (t, e) {
                var n;
                return (
                  null === e
                    ? delete this._contexts[t]
                    : (this._contexts = (0, o.pi)(
                        (0, o.pi)({}, this._contexts),
                        (((n = {})[t] = e), n)
                      )),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.setSpan = function (t) {
                return (this._span = t), this._notifyScopeListeners(), this;
              }),
              (t.prototype.getSpan = function () {
                return this._span;
              }),
              (t.prototype.getTransaction = function () {
                var t,
                  e,
                  n,
                  r,
                  i = this.getSpan();
                return (
                  null === (t = i) || void 0 === t ? void 0 : t.transaction
                )
                  ? null === (e = i) || void 0 === e
                    ? void 0
                    : e.transaction
                  : (
                      null ===
                        (r =
                          null === (n = i) || void 0 === n
                            ? void 0
                            : n.spanRecorder) || void 0 === r
                        ? void 0
                        : r.spans[0]
                    )
                  ? i.spanRecorder.spans[0]
                  : void 0;
              }),
              (t.prototype.setSession = function (t) {
                return (
                  t ? (this._session = t) : delete this._session,
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.getSession = function () {
                return this._session;
              }),
              (t.prototype.update = function (e) {
                if (!e) return this;
                if ("function" == typeof e) {
                  var n = e(this);
                  return n instanceof t ? n : this;
                }
                return (
                  e instanceof t
                    ? ((this._tags = (0, o.pi)(
                        (0, o.pi)({}, this._tags),
                        e._tags
                      )),
                      (this._extra = (0, o.pi)(
                        (0, o.pi)({}, this._extra),
                        e._extra
                      )),
                      (this._contexts = (0, o.pi)(
                        (0, o.pi)({}, this._contexts),
                        e._contexts
                      )),
                      e._user &&
                        Object.keys(e._user).length &&
                        (this._user = e._user),
                      e._level && (this._level = e._level),
                      e._fingerprint && (this._fingerprint = e._fingerprint),
                      e._requestSession &&
                        (this._requestSession = e._requestSession))
                    : (0, f.PO)(e) &&
                      ((e = e),
                      (this._tags = (0, o.pi)(
                        (0, o.pi)({}, this._tags),
                        e.tags
                      )),
                      (this._extra = (0, o.pi)(
                        (0, o.pi)({}, this._extra),
                        e.extra
                      )),
                      (this._contexts = (0, o.pi)(
                        (0, o.pi)({}, this._contexts),
                        e.contexts
                      )),
                      e.user && (this._user = e.user),
                      e.level && (this._level = e.level),
                      e.fingerprint && (this._fingerprint = e.fingerprint),
                      e.requestSession &&
                        (this._requestSession = e.requestSession)),
                  this
                );
              }),
              (t.prototype.clear = function () {
                return (
                  (this._breadcrumbs = []),
                  (this._tags = {}),
                  (this._extra = {}),
                  (this._user = {}),
                  (this._contexts = {}),
                  (this._level = void 0),
                  (this._transactionName = void 0),
                  (this._fingerprint = void 0),
                  (this._requestSession = void 0),
                  (this._span = void 0),
                  (this._session = void 0),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.addBreadcrumb = function (t, e) {
                var n = "number" == typeof e ? Math.min(e, 100) : 100;
                if (n <= 0) return this;
                var r = (0, o.pi)({ timestamp: (0, s.yW)() }, t);
                return (
                  (this._breadcrumbs = (0, o.fl)(this._breadcrumbs, [r]).slice(
                    -n
                  )),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (t.prototype.clearBreadcrumbs = function () {
                return (
                  (this._breadcrumbs = []), this._notifyScopeListeners(), this
                );
              }),
              (t.prototype.applyToEvent = function (t, e) {
                var n;
                if (
                  (this._extra &&
                    Object.keys(this._extra).length &&
                    (t.extra = (0, o.pi)((0, o.pi)({}, this._extra), t.extra)),
                  this._tags &&
                    Object.keys(this._tags).length &&
                    (t.tags = (0, o.pi)((0, o.pi)({}, this._tags), t.tags)),
                  this._user &&
                    Object.keys(this._user).length &&
                    (t.user = (0, o.pi)((0, o.pi)({}, this._user), t.user)),
                  this._contexts &&
                    Object.keys(this._contexts).length &&
                    (t.contexts = (0, o.pi)(
                      (0, o.pi)({}, this._contexts),
                      t.contexts
                    )),
                  this._level && (t.level = this._level),
                  this._transactionName &&
                    (t.transaction = this._transactionName),
                  this._span)
                ) {
                  t.contexts = (0, o.pi)(
                    { trace: this._span.getTraceContext() },
                    t.contexts
                  );
                  var r =
                    null === (n = this._span.transaction) || void 0 === n
                      ? void 0
                      : n.name;
                  r && (t.tags = (0, o.pi)({ transaction: r }, t.tags));
                }
                return (
                  this._applyFingerprint(t),
                  (t.breadcrumbs = (0, o.fl)(
                    t.breadcrumbs || [],
                    this._breadcrumbs
                  )),
                  (t.breadcrumbs =
                    t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                  this._notifyEventProcessors(
                    (0, o.fl)(h(), this._eventProcessors),
                    t,
                    e
                  )
                );
              }),
              (t.prototype._notifyEventProcessors = function (t, e, n, r) {
                var i = this;
                return (
                  void 0 === r && (r = 0),
                  new p(function (a, s) {
                    var u = t[r];
                    if (null === e || "function" != typeof u) a(e);
                    else {
                      var c = u((0, o.pi)({}, e), n);
                      (0, f.J8)(c)
                        ? c
                            .then(function (e) {
                              return i
                                ._notifyEventProcessors(t, e, n, r + 1)
                                .then(a);
                            })
                            .then(null, s)
                        : i
                            ._notifyEventProcessors(t, c, n, r + 1)
                            .then(a)
                            .then(null, s);
                    }
                  })
                );
              }),
              (t.prototype._notifyScopeListeners = function () {
                var t = this;
                this._notifyingListeners ||
                  ((this._notifyingListeners = !0),
                  this._scopeListeners.forEach(function (e) {
                    e(t);
                  }),
                  (this._notifyingListeners = !1));
              }),
              (t.prototype._applyFingerprint = function (t) {
                (t.fingerprint = t.fingerprint
                  ? Array.isArray(t.fingerprint)
                    ? t.fingerprint
                    : [t.fingerprint]
                  : []),
                  this._fingerprint &&
                    (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                  t.fingerprint &&
                    !t.fingerprint.length &&
                    delete t.fingerprint;
              }),
              t
            );
          })();
        function h() {
          var t = (0, c.R)();
          return (
            (t.__SENTRY__ = t.__SENTRY__ || {}),
            (t.__SENTRY__.globalEventProcessors =
              t.__SENTRY__.globalEventProcessors || []),
            t.__SENTRY__.globalEventProcessors
          );
        }
        var v = n(535),
          m = (function () {
            function t(t) {
              (this.errors = 0),
                (this.sid = (0, a.DM)()),
                (this.duration = 0),
                (this.status = r.Ok),
                (this.init = !0),
                (this.ignoreDuration = !1);
              var e = (0, s.ph)();
              (this.timestamp = e), (this.started = e), t && this.update(t);
            }
            return (
              (t.prototype.update = function (t) {
                if (
                  (void 0 === t && (t = {}),
                  t.user &&
                    (!this.ipAddress &&
                      t.user.ip_address &&
                      (this.ipAddress = t.user.ip_address),
                    this.did ||
                      t.did ||
                      (this.did =
                        t.user.id || t.user.email || t.user.username)),
                  (this.timestamp = t.timestamp || (0, s.ph)()),
                  t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
                  t.sid &&
                    (this.sid = 32 === t.sid.length ? t.sid : (0, a.DM)()),
                  void 0 !== t.init && (this.init = t.init),
                  !this.did && t.did && (this.did = "" + t.did),
                  "number" == typeof t.started && (this.started = t.started),
                  this.ignoreDuration)
                )
                  this.duration = void 0;
                else if ("number" == typeof t.duration)
                  this.duration = t.duration;
                else {
                  var e = this.timestamp - this.started;
                  this.duration = e >= 0 ? e : 0;
                }
                t.release && (this.release = t.release),
                  t.environment && (this.environment = t.environment),
                  !this.ipAddress &&
                    t.ipAddress &&
                    (this.ipAddress = t.ipAddress),
                  !this.userAgent &&
                    t.userAgent &&
                    (this.userAgent = t.userAgent),
                  "number" == typeof t.errors && (this.errors = t.errors),
                  t.status && (this.status = t.status);
              }),
              (t.prototype.close = function (t) {
                t
                  ? this.update({ status: t })
                  : this.status === r.Ok
                  ? this.update({ status: r.Exited })
                  : this.update();
              }),
              (t.prototype.toJSON = function () {
                return (0, v.Jr)({
                  sid: "" + this.sid,
                  init: this.init,
                  started: new Date(1e3 * this.started).toISOString(),
                  timestamp: new Date(1e3 * this.timestamp).toISOString(),
                  status: this.status,
                  errors: this.errors,
                  did:
                    "number" == typeof this.did || "string" == typeof this.did
                      ? "" + this.did
                      : void 0,
                  duration: this.duration,
                  attrs: (0, v.Jr)({
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent,
                  }),
                });
              }),
              t
            );
          })(),
          y = (function () {
            function t(t, e, n) {
              void 0 === e && (e = new d()),
                void 0 === n && (n = 4),
                (this._version = n),
                (this._stack = [{}]),
                (this.getStackTop().scope = e),
                t && this.bindClient(t);
            }
            return (
              (t.prototype.isOlderThan = function (t) {
                return this._version < t;
              }),
              (t.prototype.bindClient = function (t) {
                (this.getStackTop().client = t),
                  t && t.setupIntegrations && t.setupIntegrations();
              }),
              (t.prototype.pushScope = function () {
                var t = d.clone(this.getScope());
                return (
                  this.getStack().push({ client: this.getClient(), scope: t }),
                  t
                );
              }),
              (t.prototype.popScope = function () {
                return (
                  !(this.getStack().length <= 1) && !!this.getStack().pop()
                );
              }),
              (t.prototype.withScope = function (t) {
                var e = this.pushScope();
                try {
                  t(e);
                } finally {
                  this.popScope();
                }
              }),
              (t.prototype.getClient = function () {
                return this.getStackTop().client;
              }),
              (t.prototype.getScope = function () {
                return this.getStackTop().scope;
              }),
              (t.prototype.getStack = function () {
                return this._stack;
              }),
              (t.prototype.getStackTop = function () {
                return this._stack[this._stack.length - 1];
              }),
              (t.prototype.captureException = function (t, e) {
                var n = (this._lastEventId = (0, a.DM)()),
                  r = e;
                if (!e) {
                  var i = void 0;
                  try {
                    throw new Error("Sentry syntheticException");
                  } catch (t) {
                    i = t;
                  }
                  r = { originalException: t, syntheticException: i };
                }
                return (
                  this._invokeClient(
                    "captureException",
                    t,
                    (0, o.pi)((0, o.pi)({}, r), { event_id: n })
                  ),
                  n
                );
              }),
              (t.prototype.captureMessage = function (t, e, n) {
                var r = (this._lastEventId = (0, a.DM)()),
                  i = n;
                if (!n) {
                  var s = void 0;
                  try {
                    throw new Error(t);
                  } catch (t) {
                    s = t;
                  }
                  i = { originalException: t, syntheticException: s };
                }
                return (
                  this._invokeClient(
                    "captureMessage",
                    t,
                    e,
                    (0, o.pi)((0, o.pi)({}, i), { event_id: r })
                  ),
                  r
                );
              }),
              (t.prototype.captureEvent = function (t, e) {
                var n = (0, a.DM)();
                return (
                  "transaction" !== t.type && (this._lastEventId = n),
                  this._invokeClient(
                    "captureEvent",
                    t,
                    (0, o.pi)((0, o.pi)({}, e), { event_id: n })
                  ),
                  n
                );
              }),
              (t.prototype.lastEventId = function () {
                return this._lastEventId;
              }),
              (t.prototype.addBreadcrumb = function (t, e) {
                var n = this.getStackTop(),
                  r = n.scope,
                  i = n.client;
                if (r && i) {
                  var a = (i.getOptions && i.getOptions()) || {},
                    c = a.beforeBreadcrumb,
                    l = void 0 === c ? null : c,
                    f = a.maxBreadcrumbs,
                    p = void 0 === f ? 100 : f;
                  if (!(p <= 0)) {
                    var d = (0, s.yW)(),
                      h = (0, o.pi)({ timestamp: d }, t),
                      v = l
                        ? (0, u.C)(function () {
                            return l(h, e);
                          })
                        : h;
                    null !== v && r.addBreadcrumb(v, p);
                  }
                }
              }),
              (t.prototype.setUser = function (t) {
                var e = this.getScope();
                e && e.setUser(t);
              }),
              (t.prototype.setTags = function (t) {
                var e = this.getScope();
                e && e.setTags(t);
              }),
              (t.prototype.setExtras = function (t) {
                var e = this.getScope();
                e && e.setExtras(t);
              }),
              (t.prototype.setTag = function (t, e) {
                var n = this.getScope();
                n && n.setTag(t, e);
              }),
              (t.prototype.setExtra = function (t, e) {
                var n = this.getScope();
                n && n.setExtra(t, e);
              }),
              (t.prototype.setContext = function (t, e) {
                var n = this.getScope();
                n && n.setContext(t, e);
              }),
              (t.prototype.configureScope = function (t) {
                var e = this.getStackTop(),
                  n = e.scope,
                  r = e.client;
                n && r && t(n);
              }),
              (t.prototype.run = function (t) {
                var e = b(this);
                try {
                  t(this);
                } finally {
                  b(e);
                }
              }),
              (t.prototype.getIntegration = function (t) {
                var e = this.getClient();
                if (!e) return null;
                try {
                  return e.getIntegration(t);
                } catch (e) {
                  return (
                    u.k.warn(
                      "Cannot retrieve integration " +
                        t.id +
                        " from the current Hub"
                    ),
                    null
                  );
                }
              }),
              (t.prototype.startSpan = function (t) {
                return this._callExtensionMethod("startSpan", t);
              }),
              (t.prototype.startTransaction = function (t, e) {
                return this._callExtensionMethod("startTransaction", t, e);
              }),
              (t.prototype.traceHeaders = function () {
                return this._callExtensionMethod("traceHeaders");
              }),
              (t.prototype.captureSession = function (t) {
                if ((void 0 === t && (t = !1), t)) return this.endSession();
                this._sendSessionUpdate();
              }),
              (t.prototype.endSession = function () {
                var t, e, n, r, i;
                null ===
                  (n =
                    null ===
                      (e =
                        null === (t = this.getStackTop()) || void 0 === t
                          ? void 0
                          : t.scope) || void 0 === e
                      ? void 0
                      : e.getSession()) ||
                  void 0 === n ||
                  n.close(),
                  this._sendSessionUpdate(),
                  null ===
                    (i =
                      null === (r = this.getStackTop()) || void 0 === r
                        ? void 0
                        : r.scope) ||
                    void 0 === i ||
                    i.setSession();
              }),
              (t.prototype.startSession = function (t) {
                var e = this.getStackTop(),
                  n = e.scope,
                  i = e.client,
                  a = (i && i.getOptions()) || {},
                  s = a.release,
                  u = a.environment,
                  l = ((0, c.R)().navigator || {}).userAgent,
                  f = new m(
                    (0, o.pi)(
                      (0, o.pi)(
                        (0, o.pi)(
                          { release: s, environment: u },
                          n && { user: n.getUser() }
                        ),
                        l && { userAgent: l }
                      ),
                      t
                    )
                  );
                if (n) {
                  var p = n.getSession && n.getSession();
                  p && p.status === r.Ok && p.update({ status: r.Exited }),
                    this.endSession(),
                    n.setSession(f);
                }
                return f;
              }),
              (t.prototype._sendSessionUpdate = function () {
                var t = this.getStackTop(),
                  e = t.scope,
                  n = t.client;
                if (e) {
                  var r = e.getSession && e.getSession();
                  r && n && n.captureSession && n.captureSession(r);
                }
              }),
              (t.prototype._invokeClient = function (t) {
                for (var e, n = [], r = 1; r < arguments.length; r++)
                  n[r - 1] = arguments[r];
                var i = this.getStackTop(),
                  a = i.scope,
                  s = i.client;
                s && s[t] && (e = s)[t].apply(e, (0, o.fl)(n, [a]));
              }),
              (t.prototype._callExtensionMethod = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                  e[n - 1] = arguments[n];
                var r = g(),
                  i = r.__SENTRY__;
                if (i && i.extensions && "function" == typeof i.extensions[t])
                  return i.extensions[t].apply(this, e);
                u.k.warn(
                  "Extension method " + t + " couldn't be found, doing nothing."
                );
              }),
              t
            );
          })();
        function g() {
          var t = (0, c.R)();
          return (
            (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
          );
        }
        function b(t) {
          var e = g(),
            n = _(e);
          return T(e, t), n;
        }
        function x() {
          var t = g();
          return (
            (w(t) && !_(t).isOlderThan(4)) || T(t, new y()),
            (0, l.KV)()
              ? (function (t) {
                  var e, n, r;
                  try {
                    var i =
                      null ===
                        (r =
                          null ===
                            (n =
                              null === (e = g().__SENTRY__) || void 0 === e
                                ? void 0
                                : e.extensions) || void 0 === n
                            ? void 0
                            : n.domain) || void 0 === r
                        ? void 0
                        : r.active;
                    if (!i) return _(t);
                    if (!w(i) || _(i).isOlderThan(4)) {
                      var o = _(t).getStackTop();
                      T(i, new y(o.client, d.clone(o.scope)));
                    }
                    return _(i);
                  } catch (e) {
                    return _(t);
                  }
                })(t)
              : _(t)
          );
        }
        function w(t) {
          return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
        }
        function _(t) {
          return (
            (t && t.__SENTRY__ && t.__SENTRY__.hub) ||
              ((t.__SENTRY__ = t.__SENTRY__ || {}),
              (t.__SENTRY__.hub = new y())),
            t.__SENTRY__.hub
          );
        }
        function T(t, e) {
          return (
            !!t &&
            ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0)
          );
        }
      },
      6257: function (t, e, n) {
        "use strict";
        n.d(e, {
          d: function () {
            return r;
          },
          x: function () {
            return i;
          },
        });
        var r = "finishReason",
          i = ["heartbeatFailed", "idleTimeout", "documentHidden"];
      },
      1109: function (t, e, n) {
        "use strict";
        n.d(e, {
          ro: function () {
            return g;
          },
          lb: function () {
            return y;
          },
        });
        var r,
          i = n(655),
          o = n(1694);
        !(function (t) {
          (t.Explicit = "explicitly_set"),
            (t.Sampler = "client_sampler"),
            (t.Rate = "client_rate"),
            (t.Inheritance = "inheritance");
        })(r || (r = {}));
        var a = n(2343),
          s = n(1422),
          u = n(8886),
          c = n(5734),
          l = n(3233);
        function f() {
          var t = (0, l.x1)();
          t &&
            (a.k.log(
              "[Tracing] Transaction: " +
                c.p.InternalError +
                " -> Global error occured"
            ),
            t.setStatus(c.p.InternalError));
        }
        var p = n(6458),
          d = n(8309);
        function h() {
          var t = this.getScope();
          if (t) {
            var e = t.getSpan();
            if (e) return { "sentry-trace": e.toTraceparent() };
          }
          return {};
        }
        function v(t, e, n) {
          return (0, l.zu)(e)
            ? void 0 !== t.sampled
              ? (t.setMetadata({ transactionSampling: { method: r.Explicit } }),
                t)
              : ("function" == typeof e.tracesSampler
                  ? ((i = e.tracesSampler(n)),
                    t.setMetadata({
                      transactionSampling: {
                        method: r.Sampler,
                        rate: Number(i),
                      },
                    }))
                  : void 0 !== n.parentSampled
                  ? ((i = n.parentSampled),
                    t.setMetadata({
                      transactionSampling: { method: r.Inheritance },
                    }))
                  : ((i = e.tracesSampleRate),
                    t.setMetadata({
                      transactionSampling: { method: r.Rate, rate: Number(i) },
                    })),
                (function (t) {
                  if (
                    isNaN(t) ||
                    ("number" != typeof t && "boolean" != typeof t)
                  )
                    return (
                      a.k.warn(
                        "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                          JSON.stringify(t) +
                          " of type " +
                          JSON.stringify(typeof t) +
                          "."
                      ),
                      !1
                    );
                  if (t < 0 || t > 1)
                    return (
                      a.k.warn(
                        "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " +
                          t +
                          "."
                      ),
                      !1
                    );
                  return !0;
                })(i)
                  ? i
                    ? ((t.sampled = Math.random() < i),
                      t.sampled
                        ? (a.k.log(
                            "[Tracing] starting " +
                              t.op +
                              " transaction - " +
                              t.name
                          ),
                          t)
                        : (a.k.log(
                            "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                              Number(i) +
                              ")"
                          ),
                          t))
                    : (a.k.log(
                        "[Tracing] Discarding transaction because " +
                          ("function" == typeof e.tracesSampler
                            ? "tracesSampler returned 0 or false"
                            : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                      ),
                      (t.sampled = !1),
                      t)
                  : (a.k.warn(
                      "[Tracing] Discarding transaction because of invalid sample rate."
                    ),
                    (t.sampled = !1),
                    t))
            : ((t.sampled = !1), t);
          var i;
        }
        function m(t, e) {
          var n,
            r,
            o =
              (null === (n = this.getClient()) || void 0 === n
                ? void 0
                : n.getOptions()) || {},
            a = new d.Y(t, this);
          return (
            (a = v(
              a,
              o,
              (0, i.pi)(
                { parentSampled: t.parentSampled, transactionContext: t },
                e
              )
            )).sampled &&
              a.initSpanRecorder(
                null === (r = o._experiments) || void 0 === r
                  ? void 0
                  : r.maxSpans
              ),
            a
          );
        }
        function y(t, e, n, r, o) {
          var a,
            s,
            u =
              (null === (a = t.getClient()) || void 0 === a
                ? void 0
                : a.getOptions()) || {},
            c = new p.io(e, t, n, r);
          return (
            (c = v(
              c,
              u,
              (0, i.pi)(
                { parentSampled: e.parentSampled, transactionContext: e },
                o
              )
            )).sampled &&
              c.initSpanRecorder(
                null === (s = u._experiments) || void 0 === s
                  ? void 0
                  : s.maxSpans
              ),
            c
          );
        }
        function g() {
          var e;
          (e = (0, o.cu)()).__SENTRY__ &&
            ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
            e.__SENTRY__.extensions.startTransaction ||
              (e.__SENTRY__.extensions.startTransaction = m),
            e.__SENTRY__.extensions.traceHeaders ||
              (e.__SENTRY__.extensions.traceHeaders = h)),
            (0, s.KV)() &&
              (function () {
                var e = (0, o.cu)();
                if (e.__SENTRY__) {
                  var n = {
                      mongodb: function () {
                        return new ((0, s.l$)(
                          t,
                          "./integrations/node/mongo"
                        ).Mongo)();
                      },
                      mongoose: function () {
                        return new ((0, s.l$)(
                          t,
                          "./integrations/node/mongo"
                        ).Mongo)({ mongoose: !0 });
                      },
                      mysql: function () {
                        return new ((0, s.l$)(
                          t,
                          "./integrations/node/mysql"
                        ).Mysql)();
                      },
                      pg: function () {
                        return new ((0, s.l$)(
                          t,
                          "./integrations/node/postgres"
                        ).Postgres)();
                      },
                    },
                    r = Object.keys(n)
                      .filter(function (t) {
                        return !!(0, s.$y)(t);
                      })
                      .map(function (t) {
                        try {
                          return n[t]();
                        } catch (t) {
                          return;
                        }
                      })
                      .filter(function (t) {
                        return t;
                      });
                  r.length > 0 &&
                    (e.__SENTRY__.integrations = (0, i.fl)(
                      e.__SENTRY__.integrations || [],
                      r
                    ));
                }
              })(),
            (0, u.o)({ callback: f, type: "error" }),
            (0, u.o)({ callback: f, type: "unhandledrejection" });
        }
        t = n.hmd(t);
      },
      6458: function (t, e, n) {
        "use strict";
        n.d(e, {
          nT: function () {
            return l;
          },
          io: function () {
            return p;
          },
        });
        var r = n(655),
          i = n(1170),
          o = n(2343),
          a = n(6257),
          s = n(5334),
          u = n(5734),
          c = n(8309),
          l = 1e3,
          f = (function (t) {
            function e(e, n, r, i) {
              void 0 === r && (r = "");
              var o = t.call(this, i) || this;
              return (
                (o._pushActivity = e),
                (o._popActivity = n),
                (o.transactionSpanId = r),
                o
              );
            }
            return (
              (0, r.ZT)(e, t),
              (e.prototype.add = function (e) {
                var n = this;
                e.spanId !== this.transactionSpanId &&
                  ((e.finish = function (t) {
                    (e.endTimestamp = "number" == typeof t ? t : (0, i._I)()),
                      n._popActivity(e.spanId);
                  }),
                  void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
                  t.prototype.add.call(this, e);
              }),
              e
            );
          })(s.g),
          p = (function (t) {
            function e(e, n, r, i) {
              void 0 === r && (r = l), void 0 === i && (i = !1);
              var a = t.call(this, e, n) || this;
              return (
                (a._idleHub = n),
                (a._idleTimeout = r),
                (a._onScope = i),
                (a.activities = {}),
                (a._heartbeatCounter = 0),
                (a._finished = !1),
                (a._beforeFinishCallbacks = []),
                n &&
                  i &&
                  (d(n),
                  o.k.log(
                    "Setting idle transaction on scope. Span ID: " + a.spanId
                  ),
                  n.configureScope(function (t) {
                    return t.setSpan(a);
                  })),
                (a._initTimeout = setTimeout(function () {
                  a._finished || a.finish();
                }, a._idleTimeout)),
                a
              );
            }
            return (
              (0, r.ZT)(e, t),
              (e.prototype.finish = function (e) {
                var n,
                  a,
                  s = this;
                if (
                  (void 0 === e && (e = (0, i._I)()),
                  (this._finished = !0),
                  (this.activities = {}),
                  this.spanRecorder)
                ) {
                  o.k.log(
                    "[Tracing] finishing IdleTransaction",
                    new Date(1e3 * e).toISOString(),
                    this.op
                  );
                  try {
                    for (
                      var c = (0, r.XA)(this._beforeFinishCallbacks),
                        l = c.next();
                      !l.done;
                      l = c.next()
                    ) {
                      (0, l.value)(this, e);
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      l && !l.done && (a = c.return) && a.call(c);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  (this.spanRecorder.spans = this.spanRecorder.spans.filter(
                    function (t) {
                      if (t.spanId === s.spanId) return !0;
                      t.endTimestamp ||
                        ((t.endTimestamp = e),
                        t.setStatus(u.p.Cancelled),
                        o.k.log(
                          "[Tracing] cancelling span since transaction ended early",
                          JSON.stringify(t, void 0, 2)
                        ));
                      var n = t.startTimestamp < e;
                      return (
                        n ||
                          o.k.log(
                            "[Tracing] discarding Span since it happened after Transaction was finished",
                            JSON.stringify(t, void 0, 2)
                          ),
                        n
                      );
                    }
                  )),
                    o.k.log("[Tracing] flushing IdleTransaction");
                } else o.k.log("[Tracing] No active IdleTransaction");
                return (
                  this._onScope && d(this._idleHub),
                  t.prototype.finish.call(this, e)
                );
              }),
              (e.prototype.registerBeforeFinishCallback = function (t) {
                this._beforeFinishCallbacks.push(t);
              }),
              (e.prototype.initSpanRecorder = function (t) {
                var e = this;
                if (!this.spanRecorder) {
                  (this.spanRecorder = new f(
                    function (t) {
                      e._finished || e._pushActivity(t);
                    },
                    function (t) {
                      e._finished || e._popActivity(t);
                    },
                    this.spanId,
                    t
                  )),
                    o.k.log("Starting heartbeat"),
                    this._pingHeartbeat();
                }
                this.spanRecorder.add(this);
              }),
              (e.prototype._pushActivity = function (t) {
                this._initTimeout &&
                  (clearTimeout(this._initTimeout),
                  (this._initTimeout = void 0)),
                  o.k.log("[Tracing] pushActivity: " + t),
                  (this.activities[t] = !0),
                  o.k.log(
                    "[Tracing] new activities count",
                    Object.keys(this.activities).length
                  );
              }),
              (e.prototype._popActivity = function (t) {
                var e = this;
                if (
                  (this.activities[t] &&
                    (o.k.log("[Tracing] popActivity " + t),
                    delete this.activities[t],
                    o.k.log(
                      "[Tracing] new activities count",
                      Object.keys(this.activities).length
                    )),
                  0 === Object.keys(this.activities).length)
                ) {
                  var n = this._idleTimeout,
                    r = (0, i._I)() + n / 1e3;
                  setTimeout(function () {
                    e._finished || (e.setTag(a.d, a.x[1]), e.finish(r));
                  }, n);
                }
              }),
              (e.prototype._beat = function () {
                if (!this._finished) {
                  var t = Object.keys(this.activities).join("");
                  t === this._prevHeartbeatString
                    ? (this._heartbeatCounter += 1)
                    : (this._heartbeatCounter = 1),
                    (this._prevHeartbeatString = t),
                    this._heartbeatCounter >= 3
                      ? (o.k.log(
                          "[Tracing] Transaction finished because of no change for 3 heart beats"
                        ),
                        this.setStatus(u.p.DeadlineExceeded),
                        this.setTag(a.d, a.x[0]),
                        this.finish())
                      : this._pingHeartbeat();
                }
              }),
              (e.prototype._pingHeartbeat = function () {
                var t = this;
                o.k.log(
                  "pinging Heartbeat -> current counter: " +
                    this._heartbeatCounter
                ),
                  setTimeout(function () {
                    t._beat();
                  }, 5e3);
              }),
              e
            );
          })(c.Y);
        function d(t) {
          if (t) {
            var e = t.getScope();
            if (e) e.getTransaction() && e.setSpan(void 0);
          }
        }
      },
      5334: function (t, e, n) {
        "use strict";
        n.d(e, {
          g: function () {
            return u;
          },
          D: function () {
            return c;
          },
        });
        var r = n(655),
          i = n(2844),
          o = n(1170),
          a = n(535),
          s = n(5734),
          u = (function () {
            function t(t) {
              void 0 === t && (t = 1e3), (this.spans = []), (this._maxlen = t);
            }
            return (
              (t.prototype.add = function (t) {
                this.spans.length > this._maxlen
                  ? (t.spanRecorder = void 0)
                  : this.spans.push(t);
              }),
              t
            );
          })(),
          c = (function () {
            function t(t) {
              if (
                ((this.traceId = (0, i.DM)()),
                (this.spanId = (0, i.DM)().substring(16)),
                (this.startTimestamp = (0, o._I)()),
                (this.tags = {}),
                (this.data = {}),
                !t)
              )
                return this;
              t.traceId && (this.traceId = t.traceId),
                t.spanId && (this.spanId = t.spanId),
                t.parentSpanId && (this.parentSpanId = t.parentSpanId),
                "sampled" in t && (this.sampled = t.sampled),
                t.op && (this.op = t.op),
                t.description && (this.description = t.description),
                t.data && (this.data = t.data),
                t.tags && (this.tags = t.tags),
                t.status && (this.status = t.status),
                t.startTimestamp && (this.startTimestamp = t.startTimestamp),
                t.endTimestamp && (this.endTimestamp = t.endTimestamp);
            }
            return (
              (t.prototype.child = function (t) {
                return this.startChild(t);
              }),
              (t.prototype.startChild = function (e) {
                var n = new t(
                  (0, r.pi)((0, r.pi)({}, e), {
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId,
                  })
                );
                return (
                  (n.spanRecorder = this.spanRecorder),
                  n.spanRecorder && n.spanRecorder.add(n),
                  (n.transaction = this.transaction),
                  n
                );
              }),
              (t.prototype.setTag = function (t, e) {
                var n;
                return (
                  (this.tags = (0, r.pi)(
                    (0, r.pi)({}, this.tags),
                    (((n = {})[t] = e), n)
                  )),
                  this
                );
              }),
              (t.prototype.setData = function (t, e) {
                var n;
                return (
                  (this.data = (0, r.pi)(
                    (0, r.pi)({}, this.data),
                    (((n = {})[t] = e), n)
                  )),
                  this
                );
              }),
              (t.prototype.setStatus = function (t) {
                return (this.status = t), this;
              }),
              (t.prototype.setHttpStatus = function (t) {
                this.setTag("http.status_code", String(t));
                var e = s.p.fromHttpCode(t);
                return e !== s.p.UnknownError && this.setStatus(e), this;
              }),
              (t.prototype.isSuccess = function () {
                return this.status === s.p.Ok;
              }),
              (t.prototype.finish = function (t) {
                this.endTimestamp = "number" == typeof t ? t : (0, o._I)();
              }),
              (t.prototype.toTraceparent = function () {
                var t = "";
                return (
                  void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                  this.traceId + "-" + this.spanId + t
                );
              }),
              (t.prototype.toContext = function () {
                return (0, a.Jr)({
                  data: this.data,
                  description: this.description,
                  endTimestamp: this.endTimestamp,
                  op: this.op,
                  parentSpanId: this.parentSpanId,
                  sampled: this.sampled,
                  spanId: this.spanId,
                  startTimestamp: this.startTimestamp,
                  status: this.status,
                  tags: this.tags,
                  traceId: this.traceId,
                });
              }),
              (t.prototype.updateWithContext = function (t) {
                var e, n, r, i, o;
                return (
                  (this.data = null != (e = t.data) ? e : {}),
                  (this.description = t.description),
                  (this.endTimestamp = t.endTimestamp),
                  (this.op = t.op),
                  (this.parentSpanId = t.parentSpanId),
                  (this.sampled = t.sampled),
                  (this.spanId = null != (n = t.spanId) ? n : this.spanId),
                  (this.startTimestamp =
                    null != (r = t.startTimestamp) ? r : this.startTimestamp),
                  (this.status = t.status),
                  (this.tags = null != (i = t.tags) ? i : {}),
                  (this.traceId = null != (o = t.traceId) ? o : this.traceId),
                  this
                );
              }),
              (t.prototype.getTraceContext = function () {
                return (0, a.Jr)({
                  data: Object.keys(this.data).length > 0 ? this.data : void 0,
                  description: this.description,
                  op: this.op,
                  parent_span_id: this.parentSpanId,
                  span_id: this.spanId,
                  status: this.status,
                  tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                  trace_id: this.traceId,
                });
              }),
              (t.prototype.toJSON = function () {
                return (0, a.Jr)({
                  data: Object.keys(this.data).length > 0 ? this.data : void 0,
                  description: this.description,
                  op: this.op,
                  parent_span_id: this.parentSpanId,
                  span_id: this.spanId,
                  start_timestamp: this.startTimestamp,
                  status: this.status,
                  tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                  timestamp: this.endTimestamp,
                  trace_id: this.traceId,
                });
              }),
              t
            );
          })();
      },
      5734: function (t, e, n) {
        "use strict";
        var r;
        n.d(e, {
          p: function () {
            return r;
          },
        }),
          (function (t) {
            (t.Ok = "ok"),
              (t.DeadlineExceeded = "deadline_exceeded"),
              (t.Unauthenticated = "unauthenticated"),
              (t.PermissionDenied = "permission_denied"),
              (t.NotFound = "not_found"),
              (t.ResourceExhausted = "resource_exhausted"),
              (t.InvalidArgument = "invalid_argument"),
              (t.Unimplemented = "unimplemented"),
              (t.Unavailable = "unavailable"),
              (t.InternalError = "internal_error"),
              (t.UnknownError = "unknown_error"),
              (t.Cancelled = "cancelled"),
              (t.AlreadyExists = "already_exists"),
              (t.FailedPrecondition = "failed_precondition"),
              (t.Aborted = "aborted"),
              (t.OutOfRange = "out_of_range"),
              (t.DataLoss = "data_loss");
          })(r || (r = {})),
          (function (t) {
            t.fromHttpCode = function (e) {
              if (e < 400 && e >= 100) return t.Ok;
              if (e >= 400 && e < 500)
                switch (e) {
                  case 401:
                    return t.Unauthenticated;
                  case 403:
                    return t.PermissionDenied;
                  case 404:
                    return t.NotFound;
                  case 409:
                    return t.AlreadyExists;
                  case 413:
                    return t.FailedPrecondition;
                  case 429:
                    return t.ResourceExhausted;
                  default:
                    return t.InvalidArgument;
                }
              if (e >= 500 && e < 600)
                switch (e) {
                  case 501:
                    return t.Unimplemented;
                  case 503:
                    return t.Unavailable;
                  case 504:
                    return t.DeadlineExceeded;
                  default:
                    return t.InternalError;
                }
              return t.UnknownError;
            };
          })(r || (r = {}));
      },
      8309: function (t, e, n) {
        "use strict";
        n.d(e, {
          Y: function () {
            return l;
          },
        });
        var r,
          i = n(655),
          o = n(1694);
        !(function (t) {
          (t.BeforeSend = "before_send"),
            (t.EventProcessor = "event_processor"),
            (t.NetworkError = "network_error"),
            (t.QueueOverflow = "queue_overflow"),
            (t.RateLimitBackoff = "ratelimit_backoff"),
            (t.SampleRate = "sample_rate");
        })(r || (r = {}));
        var a = n(7597),
          s = n(2343),
          u = n(535),
          c = n(5334),
          l = (function (t) {
            function e(e, n) {
              var r = t.call(this, e) || this;
              return (
                (r._measurements = {}),
                (r._hub = (0, o.Gd)()),
                (0, a.V9)(n, o.Xb) && (r._hub = n),
                (r.name = e.name || ""),
                (r.metadata = e.metadata || {}),
                (r._trimEnd = e.trimEnd),
                (r.transaction = r),
                r
              );
            }
            return (
              (0, i.ZT)(e, t),
              (e.prototype.setName = function (t) {
                this.name = t;
              }),
              (e.prototype.initSpanRecorder = function (t) {
                void 0 === t && (t = 1e3),
                  this.spanRecorder || (this.spanRecorder = new c.g(t)),
                  this.spanRecorder.add(this);
              }),
              (e.prototype.setMeasurements = function (t) {
                this._measurements = (0, i.pi)({}, t);
              }),
              (e.prototype.setMetadata = function (t) {
                this.metadata = (0, i.pi)((0, i.pi)({}, this.metadata), t);
              }),
              (e.prototype.finish = function (e) {
                var n,
                  i,
                  o,
                  a,
                  u,
                  c = this;
                if (void 0 === this.endTimestamp) {
                  if (
                    (this.name ||
                      (s.k.warn(
                        "Transaction has no name, falling back to `<unlabeled transaction>`."
                      ),
                      (this.name = "<unlabeled transaction>")),
                    t.prototype.finish.call(this, e),
                    !0 !== this.sampled)
                  )
                    return (
                      s.k.log(
                        "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
                      ),
                      void (
                        null ===
                          (u =
                            null ===
                              (o =
                                null === (n = this._hub.getClient()) ||
                                void 0 === n
                                  ? void 0
                                  : (i = n).getTransport) || void 0 === o
                              ? void 0
                              : (a = o.call(i)).recordLostEvent) ||
                        void 0 === u ||
                        u.call(a, r.SampleRate, "transaction")
                      )
                    );
                  var l = this.spanRecorder
                    ? this.spanRecorder.spans.filter(function (t) {
                        return t !== c && t.endTimestamp;
                      })
                    : [];
                  this._trimEnd &&
                    l.length > 0 &&
                    (this.endTimestamp = l.reduce(function (t, e) {
                      return t.endTimestamp && e.endTimestamp
                        ? t.endTimestamp > e.endTimestamp
                          ? t
                          : e
                        : t;
                    }).endTimestamp);
                  var f = {
                    contexts: { trace: this.getTraceContext() },
                    spans: l,
                    start_timestamp: this.startTimestamp,
                    tags: this.tags,
                    timestamp: this.endTimestamp,
                    transaction: this.name,
                    type: "transaction",
                    debug_meta: this.metadata,
                  };
                  return (
                    Object.keys(this._measurements).length > 0 &&
                      (s.k.log(
                        "[Measurements] Adding measurements to transaction",
                        JSON.stringify(this._measurements, void 0, 2)
                      ),
                      (f.measurements = this._measurements)),
                    s.k.log(
                      "[Tracing] Finishing " +
                        this.op +
                        " transaction: " +
                        this.name +
                        "."
                    ),
                    this._hub.captureEvent(f)
                  );
                }
              }),
              (e.prototype.toContext = function () {
                var e = t.prototype.toContext.call(this);
                return (0, u.Jr)(
                  (0, i.pi)((0, i.pi)({}, e), {
                    name: this.name,
                    trimEnd: this._trimEnd,
                  })
                );
              }),
              (e.prototype.updateWithContext = function (e) {
                var n;
                return (
                  t.prototype.updateWithContext.call(this, e),
                  (this.name = null != (n = e.name) ? n : ""),
                  (this._trimEnd = e.trimEnd),
                  this
                );
              }),
              e
            );
          })(c.D);
      },
      3233: function (t, e, n) {
        "use strict";
        n.d(e, {
          zu: function () {
            return o;
          },
          qG: function () {
            return a;
          },
          x1: function () {
            return s;
          },
          XL: function () {
            return u;
          },
          WB: function () {
            return c;
          },
        });
        var r = n(1694),
          i = new RegExp(
            "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
          );
        function o(t) {
          var e;
          return (
            void 0 === t &&
              (t =
                null === (e = (0, r.Gd)().getClient()) || void 0 === e
                  ? void 0
                  : e.getOptions()),
            !!t && ("tracesSampleRate" in t || "tracesSampler" in t)
          );
        }
        function a(t) {
          var e = t.match(i);
          if (e) {
            var n = void 0;
            return (
              "1" === e[3] ? (n = !0) : "0" === e[3] && (n = !1),
              { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
            );
          }
        }
        function s(t) {
          var e, n;
          return (
            void 0 === t && (t = (0, r.Gd)()),
            null ===
              (n = null === (e = t) || void 0 === e ? void 0 : e.getScope()) ||
            void 0 === n
              ? void 0
              : n.getTransaction()
          );
        }
        function u(t) {
          return t / 1e3;
        }
        function c(t) {
          return 1e3 * t;
        }
      },
      2991: function (t, e, n) {
        "use strict";
        n.d(e, {
          R: function () {
            return o;
          },
        });
        var r = n(1422),
          i = {};
        function o() {
          return (0, r.KV)()
            ? n.g
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : i;
        }
      },
      8886: function (t, e, n) {
        "use strict";
        n.d(e, {
          o: function () {
            return y;
          },
        });
        var r = n(655),
          i = n(2991),
          o = n(7597),
          a = n(2343),
          s = n(535),
          u = "<anonymous>";
        function c(t) {
          try {
            return (t && "function" == typeof t && t.name) || u;
          } catch (t) {
            return u;
          }
        }
        function l() {
          if (!("fetch" in (0, i.R)())) return !1;
          try {
            return new Headers(), new Request(""), new Response(), !0;
          } catch (t) {
            return !1;
          }
        }
        function f(t) {
          return (
            t &&
            /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
              t.toString()
            )
          );
        }
        var p,
          d = (0, i.R)(),
          h = {},
          v = {};
        function m(t) {
          if (!v[t])
            switch (((v[t] = !0), t)) {
              case "console":
                !(function () {
                  if (!("console" in d)) return;
                  ["debug", "info", "warn", "error", "log", "assert"].forEach(
                    function (t) {
                      t in d.console &&
                        (0, s.hl)(d.console, t, function (e) {
                          return function () {
                            for (var n = [], r = 0; r < arguments.length; r++)
                              n[r] = arguments[r];
                            g("console", { args: n, level: t }),
                              e &&
                                Function.prototype.apply.call(e, d.console, n);
                          };
                        });
                    }
                  );
                })();
                break;
              case "dom":
                !(function () {
                  if (!("document" in d)) return;
                  var t = g.bind(null, "dom"),
                    e = T(t, !0);
                  d.document.addEventListener("click", e, !1),
                    d.document.addEventListener("keypress", e, !1),
                    ["EventTarget", "Node"].forEach(function (e) {
                      var n = d[e] && d[e].prototype;
                      n &&
                        n.hasOwnProperty &&
                        n.hasOwnProperty("addEventListener") &&
                        ((0, s.hl)(n, "addEventListener", function (e) {
                          return function (n, r, i) {
                            if ("click" === n || "keypress" == n)
                              try {
                                var o = this,
                                  a = (o.__sentry_instrumentation_handlers__ =
                                    o.__sentry_instrumentation_handlers__ ||
                                    {}),
                                  s = (a[n] = a[n] || { refCount: 0 });
                                if (!s.handler) {
                                  var u = T(t);
                                  (s.handler = u), e.call(this, n, u, i);
                                }
                                s.refCount += 1;
                              } catch (t) {}
                            return e.call(this, n, r, i);
                          };
                        }),
                        (0, s.hl)(n, "removeEventListener", function (t) {
                          return function (e, n, r) {
                            if ("click" === e || "keypress" == e)
                              try {
                                var i = this,
                                  o =
                                    i.__sentry_instrumentation_handlers__ || {},
                                  a = o[e];
                                a &&
                                  ((a.refCount -= 1),
                                  a.refCount <= 0 &&
                                    (t.call(this, e, a.handler, r),
                                    (a.handler = void 0),
                                    delete o[e]),
                                  0 === Object.keys(o).length &&
                                    delete i.__sentry_instrumentation_handlers__);
                              } catch (t) {}
                            return t.call(this, e, n, r);
                          };
                        }));
                    });
                })();
                break;
              case "xhr":
                !(function () {
                  if (!("XMLHttpRequest" in d)) return;
                  var t = [],
                    e = [],
                    n = XMLHttpRequest.prototype;
                  (0, s.hl)(n, "open", function (n) {
                    return function () {
                      for (var r = [], i = 0; i < arguments.length; i++)
                        r[i] = arguments[i];
                      var a = this,
                        u = r[1];
                      (a.__sentry_xhr__ = {
                        method: (0, o.HD)(r[0]) ? r[0].toUpperCase() : r[0],
                        url: r[1],
                      }),
                        (0, o.HD)(u) &&
                          "POST" === a.__sentry_xhr__.method &&
                          u.match(/sentry_key/) &&
                          (a.__sentry_own_request__ = !0);
                      var c = function () {
                        if (4 === a.readyState) {
                          try {
                            a.__sentry_xhr__ &&
                              (a.__sentry_xhr__.status_code = a.status);
                          } catch (t) {}
                          try {
                            var n = t.indexOf(a);
                            if (-1 !== n) {
                              t.splice(n);
                              var i = e.splice(n)[0];
                              a.__sentry_xhr__ &&
                                void 0 !== i[0] &&
                                (a.__sentry_xhr__.body = i[0]);
                            }
                          } catch (t) {}
                          g("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: a,
                          });
                        }
                      };
                      return (
                        "onreadystatechange" in a &&
                        "function" == typeof a.onreadystatechange
                          ? (0, s.hl)(a, "onreadystatechange", function (t) {
                              return function () {
                                for (
                                  var e = [], n = 0;
                                  n < arguments.length;
                                  n++
                                )
                                  e[n] = arguments[n];
                                return c(), t.apply(a, e);
                              };
                            })
                          : a.addEventListener("readystatechange", c),
                        n.apply(a, r)
                      );
                    };
                  }),
                    (0, s.hl)(n, "send", function (n) {
                      return function () {
                        for (var r = [], i = 0; i < arguments.length; i++)
                          r[i] = arguments[i];
                        return (
                          t.push(this),
                          e.push(r),
                          g("xhr", {
                            args: r,
                            startTimestamp: Date.now(),
                            xhr: this,
                          }),
                          n.apply(this, r)
                        );
                      };
                    });
                })();
                break;
              case "fetch":
                !(function () {
                  if (
                    !(function () {
                      if (!l()) return !1;
                      var t = (0, i.R)();
                      if (f(t.fetch)) return !0;
                      var e = !1,
                        n = t.document;
                      if (n && "function" == typeof n.createElement)
                        try {
                          var r = n.createElement("iframe");
                          (r.hidden = !0),
                            n.head.appendChild(r),
                            r.contentWindow &&
                              r.contentWindow.fetch &&
                              (e = f(r.contentWindow.fetch)),
                            n.head.removeChild(r);
                        } catch (t) {
                          a.k.warn(
                            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                            t
                          );
                        }
                      return e;
                    })()
                  )
                    return;
                  (0, s.hl)(d, "fetch", function (t) {
                    return function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      var i = {
                        args: e,
                        fetchData: { method: b(e), url: x(e) },
                        startTimestamp: Date.now(),
                      };
                      return (
                        g("fetch", (0, r.pi)({}, i)),
                        t.apply(d, e).then(
                          function (t) {
                            return (
                              g(
                                "fetch",
                                (0, r.pi)((0, r.pi)({}, i), {
                                  endTimestamp: Date.now(),
                                  response: t,
                                })
                              ),
                              t
                            );
                          },
                          function (t) {
                            throw (
                              (g(
                                "fetch",
                                (0, r.pi)((0, r.pi)({}, i), {
                                  endTimestamp: Date.now(),
                                  error: t,
                                })
                              ),
                              t)
                            );
                          }
                        )
                      );
                    };
                  });
                })();
                break;
              case "history":
                !(function () {
                  if (
                    !(function () {
                      var t = (0, i.R)(),
                        e = t.chrome,
                        n = e && e.app && e.app.runtime,
                        r =
                          "history" in t &&
                          !!t.history.pushState &&
                          !!t.history.replaceState;
                      return !n && r;
                    })()
                  )
                    return;
                  var t = d.onpopstate;
                  function e(t) {
                    return function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      var r = e.length > 2 ? e[2] : void 0;
                      if (r) {
                        var i = p,
                          o = String(r);
                        (p = o), g("history", { from: i, to: o });
                      }
                      return t.apply(this, e);
                    };
                  }
                  (d.onpopstate = function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var r = d.location.href,
                      i = p;
                    if (((p = r), g("history", { from: i, to: r }), t))
                      try {
                        return t.apply(this, e);
                      } catch (t) {}
                  }),
                    (0, s.hl)(d.history, "pushState", e),
                    (0, s.hl)(d.history, "replaceState", e);
                })();
                break;
              case "error":
                (k = d.onerror),
                  (d.onerror = function (t, e, n, r, i) {
                    return (
                      g("error", {
                        column: r,
                        error: i,
                        line: n,
                        msg: t,
                        url: e,
                      }),
                      !!k && k.apply(this, arguments)
                    );
                  });
                break;
              case "unhandledrejection":
                (S = d.onunhandledrejection),
                  (d.onunhandledrejection = function (t) {
                    return (
                      g("unhandledrejection", t), !S || S.apply(this, arguments)
                    );
                  });
                break;
              default:
                a.k.warn("unknown instrumentation type:", t);
            }
        }
        function y(t) {
          t &&
            "string" == typeof t.type &&
            "function" == typeof t.callback &&
            ((h[t.type] = h[t.type] || []),
            h[t.type].push(t.callback),
            m(t.type));
        }
        function g(t, e) {
          var n, i;
          if (t && h[t])
            try {
              for (
                var o = (0, r.XA)(h[t] || []), s = o.next();
                !s.done;
                s = o.next()
              ) {
                var u = s.value;
                try {
                  u(e);
                } catch (e) {
                  a.k.error(
                    "Error while triggering instrumentation handler.\nType: " +
                      t +
                      "\nName: " +
                      c(u) +
                      "\nError: " +
                      e
                  );
                }
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (i = o.return) && i.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
        }
        function b(t) {
          return (
            void 0 === t && (t = []),
            "Request" in d && (0, o.V9)(t[0], Request) && t[0].method
              ? String(t[0].method).toUpperCase()
              : t[1] && t[1].method
              ? String(t[1].method).toUpperCase()
              : "GET"
          );
        }
        function x(t) {
          return (
            void 0 === t && (t = []),
            "string" == typeof t[0]
              ? t[0]
              : "Request" in d && (0, o.V9)(t[0], Request)
              ? t[0].url
              : String(t[0])
          );
        }
        var w, _;
        function T(t, e) {
          return (
            void 0 === e && (e = !1),
            function (n) {
              if (
                n &&
                _ !== n &&
                !(function (t) {
                  if ("keypress" !== t.type) return !1;
                  try {
                    var e = t.target;
                    if (!e || !e.tagName) return !0;
                    if (
                      "INPUT" === e.tagName ||
                      "TEXTAREA" === e.tagName ||
                      e.isContentEditable
                    )
                      return !1;
                  } catch (t) {}
                  return !0;
                })(n)
              ) {
                var r = "keypress" === n.type ? "input" : n.type;
                (void 0 === w ||
                  (function (t, e) {
                    if (!t) return !0;
                    if (t.type !== e.type) return !0;
                    try {
                      if (t.target !== e.target) return !0;
                    } catch (t) {}
                    return !1;
                  })(_, n)) &&
                  (t({ event: n, name: r, global: e }), (_ = n)),
                  clearTimeout(w),
                  (w = d.setTimeout(function () {
                    w = void 0;
                  }, 1e3));
              }
            }
          );
        }
        var k = null;
        var S = null;
      },
      7597: function (t, e, n) {
        "use strict";
        function r(t) {
          return "[object String]" === Object.prototype.toString.call(t);
        }
        function i(t) {
          return "[object Object]" === Object.prototype.toString.call(t);
        }
        function o(t) {
          return "[object RegExp]" === Object.prototype.toString.call(t);
        }
        function a(t) {
          return Boolean(t && t.then && "function" == typeof t.then);
        }
        function s(t, e) {
          try {
            return t instanceof e;
          } catch (t) {
            return !1;
          }
        }
        n.d(e, {
          HD: function () {
            return r;
          },
          PO: function () {
            return i;
          },
          Kj: function () {
            return o;
          },
          J8: function () {
            return a;
          },
          V9: function () {
            return s;
          },
        });
      },
      2343: function (t, e, n) {
        "use strict";
        n.d(e, {
          C: function () {
            return a;
          },
          k: function () {
            return u;
          },
        });
        var r = n(2991),
          i = (0, r.R)(),
          o = "Sentry Logger ";
        function a(t) {
          var e = (0, r.R)();
          if (!("console" in e)) return t();
          var n = e.console,
            i = {};
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (
            t
          ) {
            t in e.console &&
              n[t].__sentry_original__ &&
              ((i[t] = n[t]), (n[t] = n[t].__sentry_original__));
          });
          var o = t();
          return (
            Object.keys(i).forEach(function (t) {
              n[t] = i[t];
            }),
            o
          );
        }
        var s = (function () {
          function t() {
            this._enabled = !1;
          }
          return (
            (t.prototype.disable = function () {
              this._enabled = !1;
            }),
            (t.prototype.enable = function () {
              this._enabled = !0;
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._enabled &&
                a(function () {
                  i.console.log(o + "[Log]: " + t.join(" "));
                });
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._enabled &&
                a(function () {
                  i.console.warn(o + "[Warn]: " + t.join(" "));
                });
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this._enabled &&
                a(function () {
                  i.console.error(o + "[Error]: " + t.join(" "));
                });
            }),
            t
          );
        })();
        i.__SENTRY__ = i.__SENTRY__ || {};
        var u = i.__SENTRY__.logger || (i.__SENTRY__.logger = new s());
      },
      2844: function (t, e, n) {
        "use strict";
        n.d(e, {
          DM: function () {
            return i;
          },
        });
        var r = n(2991);
        function i() {
          var t = (0, r.R)(),
            e = t.crypto || t.msCrypto;
          if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8);
            e.getRandomValues(n),
              (n[3] = (4095 & n[3]) | 16384),
              (n[4] = (16383 & n[4]) | 32768);
            var i = function (t) {
              for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
              return e;
            };
            return (
              i(n[0]) +
              i(n[1]) +
              i(n[2]) +
              i(n[3]) +
              i(n[4]) +
              i(n[5]) +
              i(n[6]) +
              i(n[7])
            );
          }
          return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" === t ? e : (3 & e) | 8).toString(16);
            }
          );
        }
      },
      1422: function (t, e, n) {
        "use strict";
        n.d(e, {
          KV: function () {
            return i;
          },
          l$: function () {
            return o;
          },
          $y: function () {
            return a;
          },
        }),
          (t = n.hmd(t));
        var r = n(4155);
        function i() {
          return (
            "[object process]" ===
            Object.prototype.toString.call(void 0 !== r ? r : 0)
          );
        }
        function o(t, e) {
          return t.require(e);
        }
        function a(e) {
          var n;
          try {
            n = o(t, e);
          } catch (t) {}
          try {
            var r = o(t, "process").cwd;
            n = o(t, r() + "/node_modules/" + e);
          } catch (t) {}
          return n;
        }
      },
      535: function (t, e, n) {
        "use strict";
        n.d(e, {
          hl: function () {
            return o;
          },
          Jr: function () {
            return a;
          },
        });
        var r = n(655),
          i = n(7597);
        function o(t, e, n) {
          if (e in t) {
            var r = t[e],
              i = n(r);
            if ("function" == typeof i)
              try {
                (i.prototype = i.prototype || {}),
                  Object.defineProperties(i, {
                    __sentry_original__: { enumerable: !1, value: r },
                  });
              } catch (t) {}
            t[e] = i;
          }
        }
        function a(t) {
          var e, n;
          if ((0, i.PO)(t)) {
            var o = t,
              s = {};
            try {
              for (
                var u = (0, r.XA)(Object.keys(o)), c = u.next();
                !c.done;
                c = u.next()
              ) {
                var l = c.value;
                void 0 !== o[l] && (s[l] = a(o[l]));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                c && !c.done && (n = u.return) && n.call(u);
              } finally {
                if (e) throw e.error;
              }
            }
            return s;
          }
          return Array.isArray(t) ? t.map(a) : t;
        }
      },
      1170: function (t, e, n) {
        "use strict";
        n.d(e, {
          yW: function () {
            return u;
          },
          ph: function () {
            return c;
          },
          _I: function () {
            return l;
          },
          Z1: function () {
            return f;
          },
        });
        var r = n(2991),
          i = n(1422);
        t = n.hmd(t);
        var o = {
          nowSeconds: function () {
            return Date.now() / 1e3;
          },
        };
        var a = (0, i.KV)()
            ? (function () {
                try {
                  return (0, i.l$)(t, "perf_hooks").performance;
                } catch (t) {
                  return;
                }
              })()
            : (function () {
                var t = (0, r.R)().performance;
                if (t && t.now)
                  return {
                    now: function () {
                      return t.now();
                    },
                    timeOrigin: Date.now() - t.now(),
                  };
              })(),
          s =
            void 0 === a
              ? o
              : {
                  nowSeconds: function () {
                    return (a.timeOrigin + a.now()) / 1e3;
                  },
                },
          u = o.nowSeconds.bind(o),
          c = s.nowSeconds.bind(s),
          l = c,
          f = (function () {
            var t = (0, r.R)().performance;
            if (t && t.now) {
              var e = 36e5,
                n = t.now(),
                i = Date.now(),
                o = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
                a = o < e,
                s = t.timing && t.timing.navigationStart,
                u = "number" == typeof s ? Math.abs(s + n - i) : e;
              return a || u < e
                ? o <= u
                  ? ("timeOrigin", t.timeOrigin)
                  : ("navigationStart", s)
                : ("dateNow", i);
            }
            ("none");
          })();
      },
      6201: function (t, e, n) {
        "use strict";
        n(7294);
        e.Z =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0iTGF5ZXJfMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAgODMuOSIKCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgODMuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMEFERUY7fQo8L3N0eWxlPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNS42LDk1Mi40Yy0xLjMsMC0yLjQsMS0yLjksMS44bC01LjYsMTEuMUgxMWMtNiwwLTExLDUtMTEsMTF2NDljMCw2LDUsMTEsMTEsMTFoNzhjNiwwLDExLTUsMTEtMTF2LTQ5CgkJYzAtNi01LTExLTExLTExSDcyLjlsLTUuNi0xMS4xYy0wLjUtMS4xLTEuNi0xLjgtMi45LTEuOEwzNS42LDk1Mi40TDM1LjYsOTUyLjR6IE0zNy42LDk1OC44aDI1LjJsNS41LDExLjEKCQljMC41LDEuMSwxLjYsMS44LDIuOSwxLjhoMTguMWMyLjYsMCw0LjUsMS45LDQuNSw0LjV2NDljMCwyLjYtMS45LDQuNS00LjUsNC41SDExLjFjLTIuNiwwLTQuNS0xLjktNC41LTQuNXYtNDkKCQljMC0yLjYsMS45LTQuNSw0LjUtNC41aDE4LjFjMS4xLDAsMi40LTAuOCwyLjktMS44TDM3LjYsOTU4Ljh6IE01MC4yLDk3OS44Yy0xMS42LDAtMjEsOS40LTIxLDIxczkuNCwyMSwyMSwyMXMyMS05LjQsMjEtMjEKCQlTNjEuOCw5NzkuOCw1MC4yLDk3OS44eiBNNTAuMiw5ODYuMmM4LjEsMCwxNC41LDYuNSwxNC41LDE0LjVzLTYuNSwxNC41LTE0LjUsMTQuNXMtMTQuNS02LjUtMTQuNS0xNC41UzQyLjEsOTg2LjIsNTAuMiw5ODYuMnoiLz4KPC9nPgo8L3N2Zz4K";
      },
      7265: function (t, e, n) {
        "use strict";
        var r = n(3645),
          i = n.n(r),
          o = n(1667),
          a = n.n(o),
          s = n(6201),
          u = i()(function (t) {
            return t[1];
          }),
          c = a()(s.Z);
        u.push([
          t.id,
          '.ssBtnDefault{position:absolute;z-index:100000000;background:none;border:none;outline:none;right:0;cursor:pointer;width:26px;height:26px;margin:0;padding:0;top:8px;right:8px;opacity:.6;pointer-events:all;transition-duration:.25s}.ssBtnDefault:hover{opacity:1 !important;transition-duration:.25s}.ssBtnDefault .fade{transition-duration:5s;opacity:0}.ssBtnYouTube{background:none;border:none;margin-right:20px !important;padding-top:0px !important;width:25px !important}.ssBtnVimeo svg{width:22px}.ssBtnNetflix{background:none;border:none;cursor:pointer;width:4rem;margin-right:4rem;margin-top:-8px;display:inline-block;flex-shrink:0}.ssBtnNetflix>svg{transform:translateY(-0.3rem)}.ssBtnNetflix:hover{transform:scale(1.2);transition-duration:.25s}.ssBtnHulu{width:27px;margin-top:4px;margin-right:10px;opacity:.7;cursor:pointer}.ssBtnHulu:hover{opacity:1}.ssBtnAmazon{margin-right:1.5vw;outline:none;cursor:pointer;opacity:.8}.ssBtnAmazon:hover{opacity:1}.ssBtnHBO{width:30px;height:100%;right:70px;top:0px;position:relative;opacity:.7;cursor:pointer}.ssBtnHBO:hover{opacity:1;transform:scale(1.2)}@media(min-width: 1200px){.ssBtnAmazon{width:1.6666666667vw;height:1.6666666667vw}}@media(max-width: 1199px){.ssBtnAmazon{width:20px;height:20px}}body #ssTempHolder{position:fixed;z-index:1000000000000;width:100%;height:100%;top:0;pointer-events:none}body #ssTempHolder video{width:auto !important;height:auto !important;max-width:100% !important;max-height:100% !important;top:0 !important;left:0 !important;transform:none !important}body .ssElement{z-index:100000000000 !important}body .ssElement.netflix{background-color:#000}body .ssElement.netflix video{height:auto !important}body .ssElement.netflix.hideSubs .player-timedtext-text-container{display:none !important}body .ssWrapper{overflow:hidden}body #copiedToClipboard{display:flex;width:100%;height:4rem;justify-content:center;align-items:center;position:fixed;z-index:1000000000;top:-4rem;animation-name:notification;animation-duration:1.5s;animation-iteration-count:1}body #copiedToClipboard::after{content:"Screenshot copied to clipboard!";position:absolute;color:#155724;background-color:#d4edda;border-color:#c3e6cb;z-index:1000000000;padding:.75rem 1.25em;margin-bottom:1em;border:1px solid transparent;border-radius:.25em;font-size:12px;height:fit-content;top:0}body .ssModal{position:absolute;z-index:100000000;right:20px;opacity:0;background-color:#fffefa;border-radius:3px;padding:25px;color:#525252;font-family:muli,sans-serif;letter-spacing:.8px;line-height:1.5rem;box-shadow:0px 4px 8px 0px rgba(0,0,0,.15);animation-name:animateOn;animation-duration:.2s;animation-fill-mode:forwards}@keyframes animateOn{from{opacity:0;top:0px}to{opacity:1;top:20px}}body .ssModal .ssButtons{margin-top:25px;text-align:right}body .ssModal .ssButtons .ssButton,body .ssModal .ssButtons a .ssButton{display:inline-block;padding:3px 12px 3px;margin-left:14px;border-radius:4px;box-shadow:0px 4px 8px 0px rgba(0,0,0,.15);background-color:#fff;color:#525252;font-size:11px;cursor:pointer;text-decoration:none}body .ssModal .ssButtons .ssButton.blue,body .ssModal .ssButtons a .ssButton.blue{background-color:#19acef;color:#fff}body .ssModal .icon{background-image:url(' +
            c +
            ');background-repeat:no-repeat;width:30px;height:30px;vertical-align:top;margin-right:22px;margin-top:2px;display:inline-block}body .ssModal .body{display:inline-block;width:315px}body .ssModal .body .title{font-size:14px;font-weight:600;margin-bottom:7px}body .ssModal .body .description{font-size:12px;font-weight:lighter}body .ssModal:before{content:" ";position:absolute}@keyframes notification{0%{top:-4rem}25%{top:3rem}85%{top:3rem}100%{top:-4rem}}',
          "",
        ]),
          (e.Z = u);
      },
      3645: function (t) {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = t(e);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (e.i = function (t, n, r) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var u = [].concat(t[s]);
                (r && i[u[0]]) ||
                  (n &&
                    (u[2]
                      ? (u[2] = "".concat(n, " and ").concat(u[2]))
                      : (u[2] = n)),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      1667: function (t) {
        "use strict";
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            "string" != typeof (t = t && t.__esModule ? t.default : t)
              ? t
              : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : t)
          );
        };
      },
      9755: function (t, e) {
        var n;
        !(function (e, n) {
          "use strict";
          "object" == typeof t.exports
            ? (t.exports = e.document
                ? n(e, !0)
                : function (t) {
                    if (!t.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(t);
                  })
            : n(e);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            u = o.flat
              ? function (t) {
                  return o.flat.call(t);
                }
              : function (t) {
                  return o.concat.apply([], t);
                },
            c = o.push,
            l = o.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            v = h.call(Object),
            m = {},
            y = function (t) {
              return (
                "function" == typeof t &&
                "number" != typeof t.nodeType &&
                "function" != typeof t.item
              );
            },
            g = function (t) {
              return null != t && t === t.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(t, e, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = t), e))
              for (r in x)
                (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function _(t) {
            return null == t
              ? t + ""
              : "object" == typeof t || "function" == typeof t
              ? f[p.call(t)] || "object"
              : typeof t;
          }
          var T = "3.6.0",
            k = function (t, e) {
              return new k.fn.init(t, e);
            };
          function S(t) {
            var e = !!t && "length" in t && t.length,
              n = _(t);
            return (
              !y(t) &&
              !g(t) &&
              ("array" === n ||
                0 === e ||
                ("number" == typeof e && e > 0 && e - 1 in t))
            );
          }
          (k.fn = k.prototype =
            {
              jquery: T,
              constructor: k,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (t) {
                return null == t
                  ? s.call(this)
                  : t < 0
                  ? this[t + this.length]
                  : this[t];
              },
              pushStack: function (t) {
                var e = k.merge(this.constructor(), t);
                return (e.prevObject = this), e;
              },
              each: function (t) {
                return k.each(this, t);
              },
              map: function (t) {
                return this.pushStack(
                  k.map(this, function (e, n) {
                    return t.call(e, n, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  k.grep(this, function (t, e) {
                    return (e + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  k.grep(this, function (t, e) {
                    return e % 2;
                  })
                );
              },
              eq: function (t) {
                var e = this.length,
                  n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (k.extend = k.fn.extend =
              function () {
                var t,
                  e,
                  n,
                  r,
                  i,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  u = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof a &&
                    ((c = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || y(a) || (a = {}),
                    s === u && ((a = this), s--);
                  s < u;
                  s++
                )
                  if (null != (t = arguments[s]))
                    for (e in t)
                      (r = t[e]),
                        "__proto__" !== e &&
                          a !== r &&
                          (c &&
                          r &&
                          (k.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[e]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || k.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[e] = k.extend(c, o, r)))
                            : void 0 !== r && (a[e] = r));
                return a;
              }),
            k.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (t) {
                throw new Error(t);
              },
              noop: function () {},
              isPlainObject: function (t) {
                var e, n;
                return (
                  !(!t || "[object Object]" !== p.call(t)) &&
                  (!(e = a(t)) ||
                    ("function" ==
                      typeof (n = d.call(e, "constructor") && e.constructor) &&
                      h.call(n) === v))
                );
              },
              isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
              },
              globalEval: function (t, e, n) {
                w(t, { nonce: e && e.nonce }, n);
              },
              each: function (t, e) {
                var n,
                  r = 0;
                if (S(t))
                  for (
                    n = t.length;
                    r < n && !1 !== e.call(t[r], r, t[r]);
                    r++
                  );
                else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                return t;
              },
              makeArray: function (t, e) {
                var n = e || [];
                return (
                  null != t &&
                    (S(Object(t))
                      ? k.merge(n, "string" == typeof t ? [t] : t)
                      : c.call(n, t)),
                  n
                );
              },
              inArray: function (t, e, n) {
                return null == e ? -1 : l.call(e, t, n);
              },
              merge: function (t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                  t[i++] = e[r];
                return (t.length = i), t;
              },
              grep: function (t, e, n) {
                for (var r = [], i = 0, o = t.length, a = !n; i < o; i++)
                  !e(t[i], i) !== a && r.push(t[i]);
                return r;
              },
              map: function (t, e, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (S(t))
                  for (r = t.length; o < r; o++)
                    null != (i = e(t[o], o, n)) && a.push(i);
                else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                return u(a);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (k.fn[Symbol.iterator] = o[Symbol.iterator]),
            k.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (t, e) {
                f["[object " + e + "]"] = e.toLowerCase();
              }
            );
          var C = (function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              p,
              d,
              h,
              v,
              m,
              y,
              g,
              b,
              x = "sizzle" + 1 * new Date(),
              w = t.document,
              _ = 0,
              T = 0,
              k = ut(),
              S = ut(),
              C = ut(),
              E = ut(),
              L = function (t, e) {
                return t === e && (f = !0), 0;
              },
              j = {}.hasOwnProperty,
              N = [],
              O = N.pop,
              R = N.push,
              D = N.push,
              A = N.slice,
              M = function (t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                  if (t[n] === e) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              H = "[\\x20\\t\\r\\n\\f]",
              P =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              B =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                P +
                ")(?:" +
                H +
                "*([*^$|!~]?=)" +
                H +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                P +
                "))|)" +
                H +
                "*\\]",
              q =
                ":(" +
                P +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
              F = new RegExp(H + "+", "g"),
              z = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              Y = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              U = new RegExp(H + "|>"),
              $ = new RegExp(q),
              X = new RegExp("^" + P + "$"),
              V = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              Z = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              tt = /[+~]/,
              et = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return (
                  e ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              it = function (t, e) {
                return e
                  ? "\0" === t
                    ? "�"
                    : t.slice(0, -1) +
                      "\\" +
                      t.charCodeAt(t.length - 1).toString(16) +
                      " "
                  : "\\" + t;
              },
              ot = function () {
                p();
              },
              at = xt(
                function (t) {
                  return (
                    !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              D.apply((N = A.call(w.childNodes)), w.childNodes),
                N[w.childNodes.length].nodeType;
            } catch (t) {
              D = {
                apply: N.length
                  ? function (t, e) {
                      R.apply(t, A.call(e));
                    }
                  : function (t, e) {
                      for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                      t.length = n - 1;
                    },
              };
            }
            function st(t, e, r, i) {
              var o,
                s,
                c,
                l,
                f,
                h,
                y,
                g = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (p(e), (e = e || d), v)) {
                if (11 !== w && (f = K.exec(t)))
                  if ((o = f[1])) {
                    if (9 === w) {
                      if (!(c = e.getElementById(o))) return r;
                      if (c.id === o) return r.push(c), r;
                    } else if (
                      g &&
                      (c = g.getElementById(o)) &&
                      b(e, c) &&
                      c.id === o
                    )
                      return r.push(c), r;
                  } else {
                    if (f[2]) return D.apply(r, e.getElementsByTagName(t)), r;
                    if (
                      (o = f[3]) &&
                      n.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return D.apply(r, e.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !E[t + " "] &&
                  (!m || !m.test(t)) &&
                  (1 !== w || "object" !== e.nodeName.toLowerCase())
                ) {
                  if (((y = t), (g = e), 1 === w && (U.test(t) || Y.test(t)))) {
                    for (
                      ((g = (tt.test(t) && yt(e.parentNode)) || e) === e &&
                        n.scope) ||
                        ((l = e.getAttribute("id"))
                          ? (l = l.replace(rt, it))
                          : e.setAttribute("id", (l = x))),
                        s = (h = a(t)).length;
                      s--;

                    )
                      h[s] = (l ? "#" + l : ":scope") + " " + bt(h[s]);
                    y = h.join(",");
                  }
                  try {
                    return D.apply(r, g.querySelectorAll(y)), r;
                  } catch (e) {
                    E(t, !0);
                  } finally {
                    l === x && e.removeAttribute("id");
                  }
                }
              }
              return u(t.replace(z, "$1"), e, r, i);
            }
            function ut() {
              var t = [];
              return function e(n, i) {
                return (
                  t.push(n + " ") > r.cacheLength && delete e[t.shift()],
                  (e[n + " "] = i)
                );
              };
            }
            function ct(t) {
              return (t[x] = !0), t;
            }
            function lt(t) {
              var e = d.createElement("fieldset");
              try {
                return !!t(e);
              } catch (t) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function ft(t, e) {
              for (var n = t.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = e;
            }
            function pt(t, e) {
              var n = e && t,
                r =
                  n &&
                  1 === t.nodeType &&
                  1 === e.nodeType &&
                  t.sourceIndex - e.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
              return t ? 1 : -1;
            }
            function dt(t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            }
            function ht(t) {
              return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
              };
            }
            function vt(t) {
              return function (e) {
                return "form" in e
                  ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                      ? "label" in e.parentNode
                        ? e.parentNode.disabled === t
                        : e.disabled === t
                      : e.isDisabled === t ||
                        (e.isDisabled !== !t && at(e) === t)
                    : e.disabled === t
                  : "label" in e && e.disabled === t;
              };
            }
            function mt(t) {
              return ct(function (e) {
                return (
                  (e = +e),
                  ct(function (n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function yt(t) {
              return t && void 0 !== t.getElementsByTagName && t;
            }
            for (e in ((n = st.support = {}),
            (o = st.isXML =
              function (t) {
                var e = t && t.namespaceURI,
                  n = t && (t.ownerDocument || t).documentElement;
                return !G.test(e || (n && n.nodeName) || "HTML");
              }),
            (p = st.setDocument =
              function (t) {
                var e,
                  i,
                  a = t ? t.ownerDocument || t : w;
                return a != d && 9 === a.nodeType && a.documentElement
                  ? ((h = (d = a).documentElement),
                    (v = !o(d)),
                    w != d &&
                      (i = d.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", ot, !1)
                        : i.attachEvent && i.attachEvent("onunload", ot)),
                    (n.scope = lt(function (t) {
                      return (
                        h.appendChild(t).appendChild(d.createElement("div")),
                        void 0 !== t.querySelectorAll &&
                          !t.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = lt(function (t) {
                      return (t.className = "i"), !t.getAttribute("className");
                    })),
                    (n.getElementsByTagName = lt(function (t) {
                      return (
                        t.appendChild(d.createComment("")),
                        !t.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = lt(function (t) {
                      return (
                        (h.appendChild(t).id = x),
                        !d.getElementsByName || !d.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (t) {
                          var e = t.replace(et, nt);
                          return function (t) {
                            return t.getAttribute("id") === e;
                          };
                        }),
                        (r.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && v) {
                            var n = e.getElementById(t);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (t) {
                          var e = t.replace(et, nt);
                          return function (t) {
                            var n =
                              void 0 !== t.getAttributeNode &&
                              t.getAttributeNode("id");
                            return n && n.value === e;
                          };
                        }),
                        (r.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && v) {
                            var n,
                              r,
                              i,
                              o = e.getElementById(t);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                              for (
                                i = e.getElementsByName(t), r = 0;
                                (o = i[r++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === t
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (t, e) {
                          return void 0 !== e.getElementsByTagName
                            ? e.getElementsByTagName(t)
                            : n.qsa
                            ? e.querySelectorAll(t)
                            : void 0;
                        }
                      : function (t, e) {
                          var n,
                            r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                          if ("*" === t) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (t, e) {
                        if (void 0 !== e.getElementsByClassName && v)
                          return e.getElementsByClassName(t);
                      }),
                    (y = []),
                    (m = []),
                    (n.qsa = Q.test(d.querySelectorAll)) &&
                      (lt(function (t) {
                        var e;
                        (h.appendChild(t).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          t.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          t.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"
                            ),
                          t.querySelectorAll("[id~=" + x + "-]").length ||
                            m.push("~="),
                          (e = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          t.appendChild(e),
                          t.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          t.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          t.querySelectorAll("a#" + x + "+*").length ||
                            m.push(".#.+[+~]"),
                          t.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      lt(function (t) {
                        t.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden"),
                          t.appendChild(e).setAttribute("name", "D"),
                          t.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== t.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (h.appendChild(t).disabled = !0),
                          2 !== t.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          t.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = Q.test(
                      (g =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      lt(function (t) {
                        (n.disconnectedMatch = g.call(t, "*")),
                          g.call(t, "[s!='']:x"),
                          y.push("!=", q);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (y = y.length && new RegExp(y.join("|"))),
                    (e = Q.test(h.compareDocumentPosition)),
                    (b =
                      e || Q.test(h.contains)
                        ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                              r = e && e.parentNode;
                            return (
                              t === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : t.compareDocumentPosition &&
                                    16 & t.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (t, e) {
                            if (e)
                              for (; (e = e.parentNode); )
                                if (e === t) return !0;
                            return !1;
                          }),
                    (L = e
                      ? function (t, e) {
                          if (t === e) return (f = !0), 0;
                          var r =
                            !t.compareDocumentPosition -
                            !e.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (t.ownerDocument || t) == (e.ownerDocument || e)
                                  ? t.compareDocumentPosition(e)
                                  : 1) ||
                            (!n.sortDetached &&
                              e.compareDocumentPosition(t) === r)
                              ? t == d || (t.ownerDocument == w && b(w, t))
                                ? -1
                                : e == d || (e.ownerDocument == w && b(w, e))
                                ? 1
                                : l
                                ? M(l, t) - M(l, e)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (t, e) {
                          if (t === e) return (f = !0), 0;
                          var n,
                            r = 0,
                            i = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            s = [e];
                          if (!i || !o)
                            return t == d
                              ? -1
                              : e == d
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : l
                              ? M(l, t) - M(l, e)
                              : 0;
                          if (i === o) return pt(t, e);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? pt(a[r], s[r])
                            : a[r] == w
                            ? -1
                            : s[r] == w
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (st.matches = function (t, e) {
              return st(t, null, null, e);
            }),
            (st.matchesSelector = function (t, e) {
              if (
                (p(t),
                n.matchesSelector &&
                  v &&
                  !E[e + " "] &&
                  (!y || !y.test(e)) &&
                  (!m || !m.test(e)))
              )
                try {
                  var r = g.call(t, e);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return r;
                } catch (t) {
                  E(e, !0);
                }
              return st(e, d, null, [t]).length > 0;
            }),
            (st.contains = function (t, e) {
              return (t.ownerDocument || t) != d && p(t), b(t, e);
            }),
            (st.attr = function (t, e) {
              (t.ownerDocument || t) != d && p(t);
              var i = r.attrHandle[e.toLowerCase()],
                o =
                  i && j.call(r.attrHandle, e.toLowerCase())
                    ? i(t, e, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                ? t.getAttribute(e)
                : (o = t.getAttributeNode(e)) && o.specified
                ? o.value
                : null;
            }),
            (st.escape = function (t) {
              return (t + "").replace(rt, it);
            }),
            (st.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (st.uniqueSort = function (t) {
              var e,
                r = [],
                i = 0,
                o = 0;
              if (
                ((f = !n.detectDuplicates),
                (l = !n.sortStable && t.slice(0)),
                t.sort(L),
                f)
              ) {
                for (; (e = t[o++]); ) e === t[o] && (i = r.push(o));
                for (; i--; ) t.splice(r[i], 1);
              }
              return (l = null), t;
            }),
            (i = st.getText =
              function (t) {
                var e,
                  n = "",
                  r = 0,
                  o = t.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                  } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[r++]); ) n += i(e);
                return n;
              }),
            (r = st.selectors =
              {
                cacheLength: 50,
                createPseudo: ct,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (t) {
                    return (
                      (t[1] = t[1].replace(et, nt)),
                      (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                      "~=" === t[2] && (t[3] = " " + t[3] + " "),
                      t.slice(0, 4)
                    );
                  },
                  CHILD: function (t) {
                    return (
                      (t[1] = t[1].toLowerCase()),
                      "nth" === t[1].slice(0, 3)
                        ? (t[3] || st.error(t[0]),
                          (t[4] = +(t[4]
                            ? t[5] + (t[6] || 1)
                            : 2 * ("even" === t[3] || "odd" === t[3]))),
                          (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                        : t[3] && st.error(t[0]),
                      t
                    );
                  },
                  PSEUDO: function (t) {
                    var e,
                      n = !t[6] && t[2];
                    return V.CHILD.test(t[0])
                      ? null
                      : (t[3]
                          ? (t[2] = t[4] || t[5] || "")
                          : n &&
                            $.test(n) &&
                            (e = a(n, !0)) &&
                            (e = n.indexOf(")", n.length - e) - n.length) &&
                            ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                        t.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t
                      ? function () {
                          return !0;
                        }
                      : function (t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e;
                        };
                  },
                  CLASS: function (t) {
                    var e = k[t + " "];
                    return (
                      e ||
                      ((e = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + t + "(" + H + "|$)"
                      )) &&
                        k(t, function (t) {
                          return e.test(
                            ("string" == typeof t.className && t.className) ||
                              (void 0 !== t.getAttribute &&
                                t.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (t, e, n) {
                    return function (r) {
                      var i = st.attr(r, t);
                      return null == i
                        ? "!=" === e
                        : !e ||
                            ((i += ""),
                            "=" === e
                              ? i === n
                              : "!=" === e
                              ? i !== n
                              : "^=" === e
                              ? n && 0 === i.indexOf(n)
                              : "*=" === e
                              ? n && i.indexOf(n) > -1
                              : "$=" === e
                              ? n && i.slice(-n.length) === n
                              : "~=" === e
                              ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                              : "|=" === e &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                      a = "last" !== t.slice(-4),
                      s = "of-type" === e;
                    return 1 === r && 0 === i
                      ? function (t) {
                          return !!t.parentNode;
                        }
                      : function (e, n, u) {
                          var c,
                            l,
                            f,
                            p,
                            d,
                            h,
                            v = o !== a ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            y = s && e.nodeName.toLowerCase(),
                            g = !u && !s,
                            b = !1;
                          if (m) {
                            if (o) {
                              for (; v; ) {
                                for (p = e; (p = p[v]); )
                                  if (
                                    s
                                      ? p.nodeName.toLowerCase() === y
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = v = "only" === t && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? m.firstChild : m.lastChild]), a && g)
                            ) {
                              for (
                                b =
                                  (d =
                                    (c =
                                      (l =
                                        (f = (p = m)[x] || (p[x] = {}))[
                                          p.uniqueID
                                        ] || (f[p.uniqueID] = {}))[t] ||
                                      [])[0] === _ && c[1]) && c[2],
                                  p = d && m.childNodes[d];
                                (p =
                                  (++d && p && p[v]) || (b = d = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++b && p === e) {
                                  l[t] = [_, d, b];
                                  break;
                                }
                            } else if (
                              (g &&
                                (b = d =
                                  (c =
                                    (l =
                                      (f = (p = e)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[t] ||
                                    [])[0] === _ && c[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[v]) ||
                                  (b = d = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? p.nodeName.toLowerCase() !== y
                                  : 1 !== p.nodeType) ||
                                  !++b ||
                                  (g &&
                                    ((l =
                                      (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                                      (f[p.uniqueID] = {}))[t] = [_, b]),
                                  p !== e));

                              );
                            return (b -= i) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (t, e) {
                    var n,
                      i =
                        r.pseudos[t] ||
                        r.setFilters[t.toLowerCase()] ||
                        st.error("unsupported pseudo: " + t);
                    return i[x]
                      ? i(e)
                      : i.length > 1
                      ? ((n = [t, t, "", e]),
                        r.setFilters.hasOwnProperty(t.toLowerCase())
                          ? ct(function (t, n) {
                              for (var r, o = i(t, e), a = o.length; a--; )
                                t[(r = M(t, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (t) {
                              return i(t, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ct(function (t) {
                    var e = [],
                      n = [],
                      r = s(t.replace(z, "$1"));
                    return r[x]
                      ? ct(function (t, e, n, i) {
                          for (
                            var o, a = r(t, null, i, []), s = t.length;
                            s--;

                          )
                            (o = a[s]) && (t[s] = !(e[s] = o));
                        })
                      : function (t, i, o) {
                          return (
                            (e[0] = t),
                            r(e, null, o, n),
                            (e[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ct(function (t) {
                    return function (e) {
                      return st(t, e).length > 0;
                    };
                  }),
                  contains: ct(function (t) {
                    return (
                      (t = t.replace(et, nt)),
                      function (e) {
                        return (e.textContent || i(e)).indexOf(t) > -1;
                      }
                    );
                  }),
                  lang: ct(function (t) {
                    return (
                      X.test(t || "") || st.error("unsupported lang: " + t),
                      (t = t.replace(et, nt).toLowerCase()),
                      function (e) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? e.lang
                              : e.getAttribute("xml:lang") ||
                                e.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === t ||
                              0 === n.indexOf(t + "-")
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                  },
                  root: function (t) {
                    return t === h;
                  },
                  focus: function (t) {
                    return (
                      t === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(t.type || t.href || ~t.tabIndex)
                    );
                  },
                  enabled: vt(!1),
                  disabled: vt(!0),
                  checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && !!t.checked) ||
                      ("option" === e && !!t.selected)
                    );
                  },
                  selected: function (t) {
                    return (
                      t.parentNode && t.parentNode.selectedIndex,
                      !0 === t.selected
                    );
                  },
                  empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (t) {
                    return !r.pseudos.empty(t);
                  },
                  header: function (t) {
                    return J.test(t.nodeName);
                  },
                  input: function (t) {
                    return Z.test(t.nodeName);
                  },
                  button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && "button" === t.type) || "button" === e
                    );
                  },
                  text: function (t) {
                    var e;
                    return (
                      "input" === t.nodeName.toLowerCase() &&
                      "text" === t.type &&
                      (null == (e = t.getAttribute("type")) ||
                        "text" === e.toLowerCase())
                    );
                  },
                  first: mt(function () {
                    return [0];
                  }),
                  last: mt(function (t, e) {
                    return [e - 1];
                  }),
                  eq: mt(function (t, e, n) {
                    return [n < 0 ? n + e : n];
                  }),
                  even: mt(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  odd: mt(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  lt: mt(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                      t.push(r);
                    return t;
                  }),
                  gt: mt(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                    return t;
                  }),
                },
              }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[e] = dt(e);
            for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e);
            function gt() {}
            function bt(t) {
              for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
              return r;
            }
            function xt(t, e, n) {
              var r = e.dir,
                i = e.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
              return e.first
                ? function (e, n, i) {
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || a) return t(e, n, i);
                    return !1;
                  }
                : function (e, n, u) {
                    var c,
                      l,
                      f,
                      p = [_, s];
                    if (u) {
                      for (; (e = e[r]); )
                        if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
                    } else
                      for (; (e = e[r]); )
                        if (1 === e.nodeType || a)
                          if (
                            ((l =
                              (f = e[x] || (e[x] = {}))[e.uniqueID] ||
                              (f[e.uniqueID] = {})),
                            i && i === e.nodeName.toLowerCase())
                          )
                            e = e[r] || e;
                          else {
                            if ((c = l[o]) && c[0] === _ && c[1] === s)
                              return (p[2] = c[2]);
                            if (((l[o] = p), (p[2] = t(e, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function wt(t) {
              return t.length > 1
                ? function (e, n, r) {
                    for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                    return !0;
                  }
                : t[0];
            }
            function _t(t, e, n, r, i) {
              for (
                var o, a = [], s = 0, u = t.length, c = null != e;
                s < u;
                s++
              )
                (o = t[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), c && e.push(s)));
              return a;
            }
            function Tt(t, e, n, r, i, o) {
              return (
                r && !r[x] && (r = Tt(r)),
                i && !i[x] && (i = Tt(i, o)),
                ct(function (o, a, s, u) {
                  var c,
                    l,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    v =
                      o ||
                      (function (t, e, n) {
                        for (var r = 0, i = e.length; r < i; r++)
                          st(t, e[r], n);
                        return n;
                      })(e || "*", s.nodeType ? [s] : s, []),
                    m = !t || (!o && e) ? v : _t(v, p, t, s, u),
                    y = n ? (i || (o ? t : h || r) ? [] : a) : m;
                  if ((n && n(m, y, s, u), r))
                    for (c = _t(y, d), r(c, [], s, u), l = c.length; l--; )
                      (f = c[l]) && (y[d[l]] = !(m[d[l]] = f));
                  if (o) {
                    if (i || t) {
                      if (i) {
                        for (c = [], l = y.length; l--; )
                          (f = y[l]) && c.push((m[l] = f));
                        i(null, (y = []), c, u);
                      }
                      for (l = y.length; l--; )
                        (f = y[l]) &&
                          (c = i ? M(o, f) : p[l]) > -1 &&
                          (o[c] = !(a[c] = f));
                    }
                  } else (y = _t(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : D.apply(a, y);
                })
              );
            }
            function kt(t) {
              for (
                var e,
                  n,
                  i,
                  o = t.length,
                  a = r.relative[t[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  l = xt(
                    function (t) {
                      return t === e;
                    },
                    s,
                    !0
                  ),
                  f = xt(
                    function (t) {
                      return M(e, t) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (t, n, r) {
                      var i =
                        (!a && (r || n !== c)) ||
                        ((e = n).nodeType ? l(t, n, r) : f(t, n, r));
                      return (e = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[t[u].type])) p = [xt(wt(p), n)];
                else {
                  if ((n = r.filter[t[u].type].apply(null, t[u].matches))[x]) {
                    for (i = ++u; i < o && !r.relative[t[i].type]; i++);
                    return Tt(
                      u > 1 && wt(p),
                      u > 1 &&
                        bt(
                          t
                            .slice(0, u - 1)
                            .concat({ value: " " === t[u - 2].type ? "*" : "" })
                        ).replace(z, "$1"),
                      n,
                      u < i && kt(t.slice(u, i)),
                      i < o && kt((t = t.slice(i))),
                      i < o && bt(t)
                    );
                  }
                  p.push(n);
                }
              return wt(p);
            }
            return (
              (gt.prototype = r.filters = r.pseudos),
              (r.setFilters = new gt()),
              (a = st.tokenize =
                function (t, e) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c,
                    l = S[t + " "];
                  if (l) return e ? 0 : l.slice(0);
                  for (s = t, u = [], c = r.preFilter; s; ) {
                    for (a in ((n && !(i = W.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = Y.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(z, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = V[a].exec(s)) ||
                        (c[a] && !(i = c[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return e ? s.length : s ? st.error(t) : S(t, u).slice(0);
                }),
              (s = st.compile =
                function (t, e) {
                  var n,
                    i = [],
                    o = [],
                    s = C[t + " "];
                  if (!s) {
                    for (e || (e = a(t)), n = e.length; n--; )
                      (s = kt(e[n]))[x] ? i.push(s) : o.push(s);
                    (s = C(
                      t,
                      (function (t, e) {
                        var n = e.length > 0,
                          i = t.length > 0,
                          o = function (o, a, s, u, l) {
                            var f,
                              h,
                              m,
                              y = 0,
                              g = "0",
                              b = o && [],
                              x = [],
                              w = c,
                              T = o || (i && r.find.TAG("*", l)),
                              k = (_ += null == w ? 1 : Math.random() || 0.1),
                              S = T.length;
                            for (
                              l && (c = a == d || a || l);
                              g !== S && null != (f = T[g]);
                              g++
                            ) {
                              if (i && f) {
                                for (
                                  h = 0,
                                    a ||
                                      f.ownerDocument == d ||
                                      (p(f), (s = !v));
                                  (m = t[h++]);

                                )
                                  if (m(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                  }
                                l && (_ = k);
                              }
                              n && ((f = !m && f) && y--, o && b.push(f));
                            }
                            if (((y += g), n && g !== y)) {
                              for (h = 0; (m = e[h++]); ) m(b, x, a, s);
                              if (o) {
                                if (y > 0)
                                  for (; g--; )
                                    b[g] || x[g] || (x[g] = O.call(u));
                                x = _t(x);
                              }
                              D.apply(u, x),
                                l &&
                                  !o &&
                                  x.length > 0 &&
                                  y + e.length > 1 &&
                                  st.uniqueSort(u);
                            }
                            return l && ((_ = k), (c = w)), b;
                          };
                        return n ? ct(o) : o;
                      })(o, i)
                    )),
                      (s.selector = t);
                  }
                  return s;
                }),
              (u = st.select =
                function (t, e, n, i) {
                  var o,
                    u,
                    c,
                    l,
                    f,
                    p = "function" == typeof t && t,
                    d = !i && a((t = p.selector || t));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (u = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (c = u[0]).type &&
                      9 === e.nodeType &&
                      v &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(e = (r.find.ID(c.matches[0].replace(et, nt), e) ||
                          [])[0])
                      )
                        return n;
                      p && (e = e.parentNode),
                        (t = t.slice(u.shift().value.length));
                    }
                    for (
                      o = V.needsContext.test(t) ? 0 : u.length;
                      o-- && ((c = u[o]), !r.relative[(l = c.type)]);

                    )
                      if (
                        (f = r.find[l]) &&
                        (i = f(
                          c.matches[0].replace(et, nt),
                          (tt.test(u[0].type) && yt(e.parentNode)) || e
                        ))
                      ) {
                        if ((u.splice(o, 1), !(t = i.length && bt(u))))
                          return D.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (p || s(t, d))(
                      i,
                      e,
                      !v,
                      n,
                      !e || (tt.test(t) && yt(e.parentNode)) || e
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(L).join("") === x),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = lt(function (t) {
                return (
                  1 & t.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              lt(function (t) {
                return (
                  (t.innerHTML = "<a href='#'></a>"),
                  "#" === t.firstChild.getAttribute("href")
                );
              }) ||
                ft("type|href|height|width", function (t, e, n) {
                  if (!n)
                    return t.getAttribute(
                      e,
                      "type" === e.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                lt(function (t) {
                  return (
                    (t.innerHTML = "<input/>"),
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                  );
                })) ||
                ft("value", function (t, e, n) {
                  if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue;
                }),
              lt(function (t) {
                return null == t.getAttribute("disabled");
              }) ||
                ft(I, function (t, e, n) {
                  var r;
                  if (!n)
                    return !0 === t[e]
                      ? e.toLowerCase()
                      : (r = t.getAttributeNode(e)) && r.specified
                      ? r.value
                      : null;
                }),
              st
            );
          })(r);
          (k.find = C),
            (k.expr = C.selectors),
            (k.expr[":"] = k.expr.pseudos),
            (k.uniqueSort = k.unique = C.uniqueSort),
            (k.text = C.getText),
            (k.isXMLDoc = C.isXML),
            (k.contains = C.contains),
            (k.escapeSelector = C.escape);
          var E = function (t, e, n) {
              for (
                var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;

              )
                if (1 === t.nodeType) {
                  if (i && k(t).is(n)) break;
                  r.push(t);
                }
              return r;
            },
            L = function (t, e) {
              for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
              return n;
            },
            j = k.expr.match.needsContext;
          function N(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function R(t, e, n) {
            return y(e)
              ? k.grep(t, function (t, r) {
                  return !!e.call(t, r, t) !== n;
                })
              : e.nodeType
              ? k.grep(t, function (t) {
                  return (t === e) !== n;
                })
              : "string" != typeof e
              ? k.grep(t, function (t) {
                  return l.call(e, t) > -1 !== n;
                })
              : k.filter(e, t, n);
          }
          (k.filter = function (t, e, n) {
            var r = e[0];
            return (
              n && (t = ":not(" + t + ")"),
              1 === e.length && 1 === r.nodeType
                ? k.find.matchesSelector(r, t)
                  ? [r]
                  : []
                : k.find.matches(
                    t,
                    k.grep(e, function (t) {
                      return 1 === t.nodeType;
                    })
                  )
            );
          }),
            k.fn.extend({
              find: function (t) {
                var e,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof t)
                  return this.pushStack(
                    k(t).filter(function () {
                      for (e = 0; e < r; e++)
                        if (k.contains(i[e], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), e = 0; e < r; e++)
                  k.find(t, i[e], n);
                return r > 1 ? k.uniqueSort(n) : n;
              },
              filter: function (t) {
                return this.pushStack(R(this, t || [], !1));
              },
              not: function (t) {
                return this.pushStack(R(this, t || [], !0));
              },
              is: function (t) {
                return !!R(
                  this,
                  "string" == typeof t && j.test(t) ? k(t) : t || [],
                  !1
                ).length;
              },
            });
          var D,
            A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((k.fn.init = function (t, e, n) {
            var r, i;
            if (!t) return this;
            if (((n = n || D), "string" == typeof t)) {
              if (
                !(r =
                  "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                    ? [null, t, null]
                    : A.exec(t)) ||
                (!r[1] && e)
              )
                return !e || e.jquery
                  ? (e || n).find(t)
                  : this.constructor(e).find(t);
              if (r[1]) {
                if (
                  ((e = e instanceof k ? e[0] : e),
                  k.merge(
                    this,
                    k.parseHTML(
                      r[1],
                      e && e.nodeType ? e.ownerDocument || e : b,
                      !0
                    )
                  ),
                  O.test(r[1]) && k.isPlainObject(e))
                )
                  for (r in e) y(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return t.nodeType
              ? ((this[0] = t), (this.length = 1), this)
              : y(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(k)
              : k.makeArray(t, this);
          }).prototype = k.fn),
            (D = k(b));
          var M = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function H(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; );
            return t;
          }
          k.fn.extend({
            has: function (t) {
              var e = k(t, this),
                n = e.length;
              return this.filter(function () {
                for (var t = 0; t < n; t++)
                  if (k.contains(this, e[t])) return !0;
              });
            },
            closest: function (t, e) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof t && k(t);
              if (!j.test(t))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && k.find.matchesSelector(n, t))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
            },
            index: function (t) {
              return t
                ? "string" == typeof t
                  ? l.call(k(t), this[0])
                  : l.call(this, t.jquery ? t[0] : t)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (t, e) {
              return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))));
            },
            addBack: function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            },
          }),
            k.each(
              {
                parent: function (t) {
                  var e = t.parentNode;
                  return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                  return E(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                  return E(t, "parentNode", n);
                },
                next: function (t) {
                  return H(t, "nextSibling");
                },
                prev: function (t) {
                  return H(t, "previousSibling");
                },
                nextAll: function (t) {
                  return E(t, "nextSibling");
                },
                prevAll: function (t) {
                  return E(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                  return E(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                  return E(t, "previousSibling", n);
                },
                siblings: function (t) {
                  return L((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                  return L(t.firstChild);
                },
                contents: function (t) {
                  return null != t.contentDocument && a(t.contentDocument)
                    ? t.contentDocument
                    : (N(t, "template") && (t = t.content || t),
                      k.merge([], t.childNodes));
                },
              },
              function (t, e) {
                k.fn[t] = function (n, r) {
                  var i = k.map(this, e, n);
                  return (
                    "Until" !== t.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = k.filter(r, i)),
                    this.length > 1 &&
                      (I[t] || k.uniqueSort(i), M.test(t) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var P = /[^\x20\t\r\n\f]+/g;
          function B(t) {
            return t;
          }
          function q(t) {
            throw t;
          }
          function F(t, e, n, r) {
            var i;
            try {
              t && y((i = t.promise))
                ? i.call(t).done(e).fail(n)
                : t && y((i = t.then))
                ? i.call(t, e, n)
                : e.apply(void 0, [t].slice(r));
            } catch (t) {
              n.apply(void 0, [t]);
            }
          }
          (k.Callbacks = function (t) {
            t =
              "string" == typeof t
                ? (function (t) {
                    var e = {};
                    return (
                      k.each(t.match(P) || [], function (t, n) {
                        e[n] = !0;
                      }),
                      e
                    );
                  })(t)
                : k.extend({}, t);
            var e,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function () {
                for (i = i || t.once, r = e = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      t.stopOnFalse &&
                      ((s = o.length), (n = !1));
                t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !e && ((s = o.length - 1), a.push(n)),
                      (function e(n) {
                        k.each(n, function (n, r) {
                          y(r)
                            ? (t.unique && c.has(r)) || o.push(r)
                            : r && r.length && "string" !== _(r) && e(r);
                        });
                      })(arguments),
                      n && !e && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    k.each(arguments, function (t, e) {
                      for (var n; (n = k.inArray(e, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (t) {
                  return t ? k.inArray(t, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || e || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (t, n) {
                  return (
                    i ||
                      ((n = [t, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      e || u()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return c;
          }),
            k.extend({
              Deferred: function (t) {
                var e = [
                    [
                      "notify",
                      "progress",
                      k.Callbacks("memory"),
                      k.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (t) {
                      return i.then(null, t);
                    },
                    pipe: function () {
                      var t = arguments;
                      return k
                        .Deferred(function (n) {
                          k.each(e, function (e, r) {
                            var i = y(t[r[4]]) && t[r[4]];
                            o[r[1]](function () {
                              var t = i && i.apply(this, arguments);
                              t && y(t.promise)
                                ? t
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[r[0] + "With"](this, i ? [t] : arguments);
                            });
                          }),
                            (t = null);
                        })
                        .promise();
                    },
                    then: function (t, n, i) {
                      var o = 0;
                      function a(t, e, n, i) {
                        return function () {
                          var s = this,
                            u = arguments,
                            c = function () {
                              var r, c;
                              if (!(t < o)) {
                                if ((r = n.apply(s, u)) === e.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  y(c)
                                    ? i
                                      ? c.call(r, a(o, e, B, i), a(o, e, q, i))
                                      : (o++,
                                        c.call(
                                          r,
                                          a(o, e, B, i),
                                          a(o, e, q, i),
                                          a(o, e, B, e.notifyWith)
                                        ))
                                    : (n !== B && ((s = void 0), (u = [r])),
                                      (i || e.resolveWith)(s, u));
                              }
                            },
                            l = i
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    k.Deferred.exceptionHook &&
                                      k.Deferred.exceptionHook(r, l.stackTrace),
                                      t + 1 >= o &&
                                        (n !== q && ((s = void 0), (u = [r])),
                                        e.rejectWith(s, u));
                                  }
                                };
                          t
                            ? l()
                            : (k.Deferred.getStackHook &&
                                (l.stackTrace = k.Deferred.getStackHook()),
                              r.setTimeout(l));
                        };
                      }
                      return k
                        .Deferred(function (r) {
                          e[0][3].add(a(0, r, y(i) ? i : B, r.notifyWith)),
                            e[1][3].add(a(0, r, y(t) ? t : B)),
                            e[2][3].add(a(0, r, y(n) ? n : q));
                        })
                        .promise();
                    },
                    promise: function (t) {
                      return null != t ? k.extend(t, i) : i;
                    },
                  },
                  o = {};
                return (
                  k.each(e, function (t, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          e[3 - t][2].disable,
                          e[3 - t][3].disable,
                          e[0][2].lock,
                          e[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  t && t.call(o, o),
                  o
                );
              },
              when: function (t) {
                var e = arguments.length,
                  n = e,
                  r = Array(n),
                  i = s.call(arguments),
                  o = k.Deferred(),
                  a = function (t) {
                    return function (n) {
                      (r[t] = this),
                        (i[t] = arguments.length > 1 ? s.call(arguments) : n),
                        --e || o.resolveWith(r, i);
                    };
                  };
                if (
                  e <= 1 &&
                  (F(t, o.done(a(n)).resolve, o.reject, !e),
                  "pending" === o.state() || y(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) F(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (k.Deferred.exceptionHook = function (t, e) {
            r.console &&
              r.console.warn &&
              t &&
              z.test(t.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + t.message,
                t.stack,
                e
              );
          }),
            (k.readyException = function (t) {
              r.setTimeout(function () {
                throw t;
              });
            });
          var W = k.Deferred();
          function Y() {
            b.removeEventListener("DOMContentLoaded", Y),
              r.removeEventListener("load", Y),
              k.ready();
          }
          (k.fn.ready = function (t) {
            return (
              W.then(t).catch(function (t) {
                k.readyException(t);
              }),
              this
            );
          }),
            k.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (t) {
                (!0 === t ? --k.readyWait : k.isReady) ||
                  ((k.isReady = !0),
                  (!0 !== t && --k.readyWait > 0) || W.resolveWith(b, [k]));
              },
            }),
            (k.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(k.ready)
              : (b.addEventListener("DOMContentLoaded", Y),
                r.addEventListener("load", Y));
          var U = function (t, e, n, r, i, o, a) {
              var s = 0,
                u = t.length,
                c = null == n;
              if ("object" === _(n))
                for (s in ((i = !0), n)) U(t, e, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                y(r) || (a = !0),
                c &&
                  (a
                    ? (e.call(t, r), (e = null))
                    : ((c = e),
                      (e = function (t, e, n) {
                        return c.call(k(t), n);
                      }))),
                e)
              )
                for (; s < u; s++)
                  e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
              return i ? t : c ? e.call(t) : u ? e(t[0], n) : o;
            },
            $ = /^-ms-/,
            X = /-([a-z])/g;
          function V(t, e) {
            return e.toUpperCase();
          }
          function G(t) {
            return t.replace($, "ms-").replace(X, V);
          }
          var Z = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
          };
          function J() {
            this.expando = k.expando + J.uid++;
          }
          (J.uid = 1),
            (J.prototype = {
              cache: function (t) {
                var e = t[this.expando];
                return (
                  e ||
                    ((e = {}),
                    Z(t) &&
                      (t.nodeType
                        ? (t[this.expando] = e)
                        : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0,
                          }))),
                  e
                );
              },
              set: function (t, e, n) {
                var r,
                  i = this.cache(t);
                if ("string" == typeof e) i[G(e)] = n;
                else for (r in e) i[G(r)] = e[r];
                return i;
              },
              get: function (t, e) {
                return void 0 === e
                  ? this.cache(t)
                  : t[this.expando] && t[this.expando][G(e)];
              },
              access: function (t, e, n) {
                return void 0 === e ||
                  (e && "string" == typeof e && void 0 === n)
                  ? this.get(t, e)
                  : (this.set(t, e, n), void 0 !== n ? n : e);
              },
              remove: function (t, e) {
                var n,
                  r = t[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== e) {
                    n = (e = Array.isArray(e)
                      ? e.map(G)
                      : (e = G(e)) in r
                      ? [e]
                      : e.match(P) || []).length;
                    for (; n--; ) delete r[e[n]];
                  }
                  (void 0 === e || k.isEmptyObject(r)) &&
                    (t.nodeType
                      ? (t[this.expando] = void 0)
                      : delete t[this.expando]);
                }
              },
              hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !k.isEmptyObject(e);
              },
            });
          var Q = new J(),
            K = new J(),
            tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            et = /[A-Z]/g;
          function nt(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)
              if (
                ((r = "data-" + e.replace(et, "-$&").toLowerCase()),
                "string" == typeof (n = t.getAttribute(r)))
              ) {
                try {
                  n = (function (t) {
                    return (
                      "true" === t ||
                      ("false" !== t &&
                        ("null" === t
                          ? null
                          : t === +t + ""
                          ? +t
                          : tt.test(t)
                          ? JSON.parse(t)
                          : t))
                    );
                  })(n);
                } catch (t) {}
                K.set(t, e, n);
              } else n = void 0;
            return n;
          }
          k.extend({
            hasData: function (t) {
              return K.hasData(t) || Q.hasData(t);
            },
            data: function (t, e, n) {
              return K.access(t, e, n);
            },
            removeData: function (t, e) {
              K.remove(t, e);
            },
            _data: function (t, e, n) {
              return Q.access(t, e, n);
            },
            _removeData: function (t, e) {
              Q.remove(t, e);
            },
          }),
            k.fn.extend({
              data: function (t, e) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === t) {
                  if (
                    this.length &&
                    ((i = K.get(o)),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = G(r.slice(5))), nt(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof t
                  ? this.each(function () {
                      K.set(this, t);
                    })
                  : U(
                      this,
                      function (e) {
                        var n;
                        if (o && void 0 === e)
                          return void 0 !== (n = K.get(o, t)) ||
                            void 0 !== (n = nt(o, t))
                            ? n
                            : void 0;
                        this.each(function () {
                          K.set(this, t, e);
                        });
                      },
                      null,
                      e,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (t) {
                return this.each(function () {
                  K.remove(this, t);
                });
              },
            }),
            k.extend({
              queue: function (t, e, n) {
                var r;
                if (t)
                  return (
                    (e = (e || "fx") + "queue"),
                    (r = Q.get(t, e)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Q.access(t, e, k.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (t, e) {
                e = e || "fx";
                var n = k.queue(t, e),
                  r = n.length,
                  i = n.shift(),
                  o = k._queueHooks(t, e);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === e && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      t,
                      function () {
                        k.dequeue(t, e);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                  Q.get(t, n) ||
                  Q.access(t, n, {
                    empty: k.Callbacks("once memory").add(function () {
                      Q.remove(t, [e + "queue", n]);
                    }),
                  })
                );
              },
            }),
            k.fn.extend({
              queue: function (t, e) {
                var n = 2;
                return (
                  "string" != typeof t && ((e = t), (t = "fx"), n--),
                  arguments.length < n
                    ? k.queue(this[0], t)
                    : void 0 === e
                    ? this
                    : this.each(function () {
                        var n = k.queue(this, t, e);
                        k._queueHooks(this, t),
                          "fx" === t &&
                            "inprogress" !== n[0] &&
                            k.dequeue(this, t);
                      })
                );
              },
              dequeue: function (t) {
                return this.each(function () {
                  k.dequeue(this, t);
                });
              },
              clearQueue: function (t) {
                return this.queue(t || "fx", []);
              },
              promise: function (t, e) {
                var n,
                  r = 1,
                  i = k.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof t && ((e = t), (t = void 0)),
                    t = t || "fx";
                  a--;

                )
                  (n = Q.get(o[a], t + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(e);
              },
            });
          var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
            ot = ["Top", "Right", "Bottom", "Left"],
            at = b.documentElement,
            st = function (t) {
              return k.contains(t.ownerDocument, t);
            },
            ut = { composed: !0 };
          at.getRootNode &&
            (st = function (t) {
              return (
                k.contains(t.ownerDocument, t) ||
                t.getRootNode(ut) === t.ownerDocument
              );
            });
          var ct = function (t, e) {
            return (
              "none" === (t = e || t).style.display ||
              ("" === t.style.display &&
                st(t) &&
                "none" === k.css(t, "display"))
            );
          };
          function lt(t, e, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return k.css(t, e, "");
                  },
              u = s(),
              c = (n && n[3]) || (k.cssNumber[e] ? "" : "px"),
              l =
                t.nodeType &&
                (k.cssNumber[e] || ("px" !== c && +u)) &&
                it.exec(k.css(t, e));
            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                k.style(t, e, l + c),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (l /= o);
              (l *= 2), k.style(t, e, l + c), (n = n || []);
            }
            return (
              n &&
                ((l = +l || +u || 0),
                (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = l), (r.end = i))),
              i
            );
          }
          var ft = {};
          function pt(t) {
            var e,
              n = t.ownerDocument,
              r = t.nodeName,
              i = ft[r];
            return (
              i ||
              ((e = n.body.appendChild(n.createElement(r))),
              (i = k.css(e, "display")),
              e.parentNode.removeChild(e),
              "none" === i && (i = "block"),
              (ft[r] = i),
              i)
            );
          }
          function dt(t, e) {
            for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
              (r = t[o]).style &&
                ((n = r.style.display),
                e
                  ? ("none" === n &&
                      ((i[o] = Q.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ct(r) && (i[o] = pt(r)))
                  : "none" !== n && ((i[o] = "none"), Q.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
            return t;
          }
          k.fn.extend({
            show: function () {
              return dt(this, !0);
            },
            hide: function () {
              return dt(this);
            },
            toggle: function (t) {
              return "boolean" == typeof t
                ? t
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ct(this) ? k(this).show() : k(this).hide();
                  });
            },
          });
          var ht,
            vt,
            mt = /^(?:checkbox|radio)$/i,
            yt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            gt = /^$|^module$|\/(?:java|ecma)script/i;
          (ht = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (vt = b.createElement("input")).setAttribute("type", "radio"),
            vt.setAttribute("checked", "checked"),
            vt.setAttribute("name", "t"),
            ht.appendChild(vt),
            (m.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ht.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue),
            (ht.innerHTML = "<option></option>"),
            (m.option = !!ht.lastChild);
          var bt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xt(t, e) {
            var n;
            return (
              (n =
                void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e || "*")
                  : void 0 !== t.querySelectorAll
                  ? t.querySelectorAll(e || "*")
                  : []),
              void 0 === e || (e && N(t, e)) ? k.merge([t], n) : n
            );
          }
          function wt(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
              Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
          }
          (bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead),
            (bt.th = bt.td),
            m.option ||
              (bt.optgroup = bt.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var _t = /<|&#?\w+;/;
          function Tt(t, e, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                c,
                l,
                f = e.createDocumentFragment(),
                p = [],
                d = 0,
                h = t.length;
              d < h;
              d++
            )
              if ((o = t[d]) || 0 === o)
                if ("object" === _(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (_t.test(o)) {
                  for (
                    a = a || f.appendChild(e.createElement("div")),
                      s = (yt.exec(o) || ["", ""])[1].toLowerCase(),
                      u = bt[s] || bt._default,
                      a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                      l = u[0];
                    l--;

                  )
                    a = a.lastChild;
                  k.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(e.createTextNode(o));
            for (f.textContent = "", d = 0; (o = p[d++]); )
              if (r && k.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((c = st(o)),
                (a = xt(f.appendChild(o), "script")),
                c && wt(a),
                n)
              )
                for (l = 0; (o = a[l++]); ) gt.test(o.type || "") && n.push(o);
            return f;
          }
          var kt = /^([^.]*)(?:\.(.+)|)/;
          function St() {
            return !0;
          }
          function Ct() {
            return !1;
          }
          function Et(t, e) {
            return (
              (t ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (t) {}
                })()) ==
              ("focus" === e)
            );
          }
          function Lt(t, e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              e))
                Lt(t, s, n, r, e[s], o);
              return t;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Ct;
            else if (!i) return t;
            return (
              1 === o &&
                ((a = i),
                (i = function (t) {
                  return k().off(t), a.apply(this, arguments);
                }),
                (i.guid = a.guid || (a.guid = k.guid++))),
              t.each(function () {
                k.event.add(this, e, i, r, n);
              })
            );
          }
          function jt(t, e, n) {
            n
              ? (Q.set(t, e, !1),
                k.event.add(t, e, {
                  namespace: !1,
                  handler: function (t) {
                    var r,
                      i,
                      o = Q.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                      if (o.length)
                        (k.event.special[e] || {}).delegateType &&
                          t.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        Q.set(this, e, o),
                        (r = n(this, e)),
                        this[e](),
                        o !== (i = Q.get(this, e)) || r
                          ? Q.set(this, e, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          t.stopImmediatePropagation(),
                          t.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (Q.set(this, e, {
                          value: k.event.trigger(
                            k.extend(o[0], k.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        t.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(t, e) && k.event.add(t, e, St);
          }
          (k.event = {
            global: {},
            add: function (t, e, n, r, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                v,
                m = Q.get(t);
              if (Z(t))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && k.find.matchesSelector(at, i),
                    n.guid || (n.guid = k.guid++),
                    (u = m.events) || (u = m.events = Object.create(null)),
                    (a = m.handle) ||
                      (a = m.handle =
                        function (e) {
                          return void 0 !== k && k.event.triggered !== e.type
                            ? k.event.dispatch.apply(t, arguments)
                            : void 0;
                        }),
                    c = (e = (e || "").match(P) || [""]).length;
                  c--;

                )
                  (d = v = (s = kt.exec(e[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = k.event.special[d] || {}),
                      (d = (i ? f.delegateType : f.bindType) || d),
                      (f = k.event.special[d] || {}),
                      (l = k.extend(
                        {
                          type: d,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && k.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                          (t.addEventListener && t.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(t, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                      i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                      (k.event.global[d] = !0));
            },
            remove: function (t, e, n, r, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                v,
                m = Q.hasData(t) && Q.get(t);
              if (m && (u = m.events)) {
                for (c = (e = (e || "").match(P) || [""]).length; c--; )
                  if (
                    ((d = v = (s = kt.exec(e[c]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = k.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = p.length;
                      o--;

                    )
                      (l = p[o]),
                        (!i && v !== l.origType) ||
                          (n && n.guid !== l.guid) ||
                          (s && !s.test(l.namespace)) ||
                          (r &&
                            r !== l.selector &&
                            ("**" !== r || !l.selector)) ||
                          (p.splice(o, 1),
                          l.selector && p.delegateCount--,
                          f.remove && f.remove.call(t, l));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(t, h, m.handle)) ||
                        k.removeEvent(t, d, m.handle),
                      delete u[d]);
                  } else for (d in u) k.event.remove(t, d + e[c], n, r, !0);
                k.isEmptyObject(u) && Q.remove(t, "handle events");
              }
            },
            dispatch: function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = k.event.fix(t),
                c =
                  (Q.get(this, "events") || Object.create(null))[u.type] || [],
                l = k.event.special[u.type] || {};
              for (s[0] = u, e = 1; e < arguments.length; e++)
                s[e] = arguments[e];
              if (
                ((u.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, u))
              ) {
                for (
                  a = k.event.handlers.call(this, u, c), e = 0;
                  (i = a[e++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (k.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (t, e) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = e.delegateCount,
                c = t.target;
              if (u && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== t.type || !0 !== c.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = (r = e[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? k(i, this).index(c) > -1
                          : k.find(i, this, null, [c]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                u < e.length && s.push({ elem: c, handlers: e.slice(u) }),
                s
              );
            },
            addProp: function (t, e) {
              Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e,
                  });
                },
              });
            },
            fix: function (t) {
              return t[k.expando] ? t : new k.Event(t);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (t) {
                  var e = this || t;
                  return (
                    mt.test(e.type) &&
                      e.click &&
                      N(e, "input") &&
                      jt(e, "click", St),
                    !1
                  );
                },
                trigger: function (t) {
                  var e = this || t;
                  return (
                    mt.test(e.type) &&
                      e.click &&
                      N(e, "input") &&
                      jt(e, "click"),
                    !0
                  );
                },
                _default: function (t) {
                  var e = t.target;
                  return (
                    (mt.test(e.type) &&
                      e.click &&
                      N(e, "input") &&
                      Q.get(e, "click")) ||
                    N(e, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (t) {
                  void 0 !== t.result &&
                    t.originalEvent &&
                    (t.originalEvent.returnValue = t.result);
                },
              },
            },
          }),
            (k.removeEvent = function (t, e, n) {
              t.removeEventListener && t.removeEventListener(e, n);
            }),
            (k.Event = function (t, e) {
              if (!(this instanceof k.Event)) return new k.Event(t, e);
              t && t.type
                ? ((this.originalEvent = t),
                  (this.type = t.type),
                  (this.isDefaultPrevented =
                    t.defaultPrevented ||
                    (void 0 === t.defaultPrevented && !1 === t.returnValue)
                      ? St
                      : Ct),
                  (this.target =
                    t.target && 3 === t.target.nodeType
                      ? t.target.parentNode
                      : t.target),
                  (this.currentTarget = t.currentTarget),
                  (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
                e && k.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[k.expando] = !0);
            }),
            (k.Event.prototype = {
              constructor: k.Event,
              isDefaultPrevented: Ct,
              isPropagationStopped: Ct,
              isImmediatePropagationStopped: Ct,
              isSimulated: !1,
              preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = St),
                  t && !this.isSimulated && t.preventDefault();
              },
              stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = St),
                  t && !this.isSimulated && t.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = St),
                  t && !this.isSimulated && t.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            k.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              k.event.addProp
            ),
            k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
              k.event.special[t] = {
                setup: function () {
                  return jt(this, t, Et), !1;
                },
                trigger: function () {
                  return jt(this, t), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: e,
              };
            }),
            k.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (t, e) {
                k.event.special[t] = {
                  delegateType: e,
                  bindType: e,
                  handle: function (t) {
                    var n,
                      r = this,
                      i = t.relatedTarget,
                      o = t.handleObj;
                    return (
                      (i && (i === r || k.contains(r, i))) ||
                        ((t.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (t.type = e)),
                      n
                    );
                  },
                };
              }
            ),
            k.fn.extend({
              on: function (t, e, n, r) {
                return Lt(this, t, e, n, r);
              },
              one: function (t, e, n, r) {
                return Lt(this, t, e, n, r, 1);
              },
              off: function (t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj)
                  return (
                    (r = t.handleObj),
                    k(t.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof t) {
                  for (i in t) this.off(i, e, t[i]);
                  return this;
                }
                return (
                  (!1 !== e && "function" != typeof e) ||
                    ((n = e), (e = void 0)),
                  !1 === n && (n = Ct),
                  this.each(function () {
                    k.event.remove(this, t, n, e);
                  })
                );
              },
            });
          var Nt = /<script|<style|<link/i,
            Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Dt(t, e) {
            return (
              (N(t, "table") &&
                N(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                k(t).children("tbody")[0]) ||
              t
            );
          }
          function At(t) {
            return (
              (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t
            );
          }
          function Mt(t) {
            return (
              "true/" === (t.type || "").slice(0, 5)
                ? (t.type = t.type.slice(5))
                : t.removeAttribute("type"),
              t
            );
          }
          function It(t, e) {
            var n, r, i, o, a, s;
            if (1 === e.nodeType) {
              if (Q.hasData(t) && (s = Q.get(t).events))
                for (i in (Q.remove(e, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    k.event.add(e, i, s[i][n]);
              K.hasData(t) &&
                ((o = K.access(t)), (a = k.extend({}, o)), K.set(e, a));
            }
          }
          function Ht(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && mt.test(t.type)
              ? (e.checked = t.checked)
              : ("input" !== n && "textarea" !== n) ||
                (e.defaultValue = t.defaultValue);
          }
          function Pt(t, e, n, r) {
            e = u(e);
            var i,
              o,
              a,
              s,
              c,
              l,
              f = 0,
              p = t.length,
              d = p - 1,
              h = e[0],
              v = y(h);
            if (
              v ||
              (p > 1 && "string" == typeof h && !m.checkClone && Ot.test(h))
            )
              return t.each(function (i) {
                var o = t.eq(i);
                v && (e[0] = h.call(this, i, o.html())), Pt(o, e, n, r);
              });
            if (
              p &&
              ((o = (i = Tt(e, t[0].ownerDocument, !1, t, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = k.map(xt(i, "script"), At)).length; f < p; f++)
                (c = i),
                  f !== d &&
                    ((c = k.clone(c, !0, !0)),
                    s && k.merge(a, xt(c, "script"))),
                  n.call(t[f], c, f);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, k.map(a, Mt), f = 0;
                  f < s;
                  f++
                )
                  (c = a[f]),
                    gt.test(c.type || "") &&
                      !Q.access(c, "globalEval") &&
                      k.contains(l, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? k._evalUrl &&
                          !c.noModule &&
                          k._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            l
                          )
                        : w(c.textContent.replace(Rt, ""), c, l));
            }
            return t;
          }
          function Bt(t, e, n) {
            for (
              var r, i = e ? k.filter(e, t) : t, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || k.cleanData(xt(r)),
                r.parentNode &&
                  (n && st(r) && wt(xt(r, "script")),
                  r.parentNode.removeChild(r));
            return t;
          }
          k.extend({
            htmlPrefilter: function (t) {
              return t;
            },
            clone: function (t, e, n) {
              var r,
                i,
                o,
                a,
                s = t.cloneNode(!0),
                u = st(t);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== t.nodeType && 11 !== t.nodeType) ||
                  k.isXMLDoc(t)
                )
              )
                for (a = xt(s), r = 0, i = (o = xt(t)).length; r < i; r++)
                  Ht(o[r], a[r]);
              if (e)
                if (n)
                  for (
                    o = o || xt(t), a = a || xt(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    It(o[r], a[r]);
                else It(t, s);
              return (
                (a = xt(s, "script")).length > 0 &&
                  wt(a, !u && xt(t, "script")),
                s
              );
            },
            cleanData: function (t) {
              for (
                var e, n, r, i = k.event.special, o = 0;
                void 0 !== (n = t[o]);
                o++
              )
                if (Z(n)) {
                  if ((e = n[Q.expando])) {
                    if (e.events)
                      for (r in e.events)
                        i[r]
                          ? k.event.remove(n, r)
                          : k.removeEvent(n, r, e.handle);
                    n[Q.expando] = void 0;
                  }
                  n[K.expando] && (n[K.expando] = void 0);
                }
            },
          }),
            k.fn.extend({
              detach: function (t) {
                return Bt(this, t, !0);
              },
              remove: function (t) {
                return Bt(this, t);
              },
              text: function (t) {
                return U(
                  this,
                  function (t) {
                    return void 0 === t
                      ? k.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = t);
                        });
                  },
                  null,
                  t,
                  arguments.length
                );
              },
              append: function () {
                return Pt(this, arguments, function (t) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Dt(this, t).appendChild(t);
                });
              },
              prepend: function () {
                return Pt(this, arguments, function (t) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var e = Dt(this, t);
                    e.insertBefore(t, e.firstChild);
                  }
                });
              },
              before: function () {
                return Pt(this, arguments, function (t) {
                  this.parentNode && this.parentNode.insertBefore(t, this);
                });
              },
              after: function () {
                return Pt(this, arguments, function (t) {
                  this.parentNode &&
                    this.parentNode.insertBefore(t, this.nextSibling);
                });
              },
              empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++)
                  1 === t.nodeType &&
                    (k.cleanData(xt(t, !1)), (t.textContent = ""));
                return this;
              },
              clone: function (t, e) {
                return (
                  (t = null != t && t),
                  (e = null == e ? t : e),
                  this.map(function () {
                    return k.clone(this, t, e);
                  })
                );
              },
              html: function (t) {
                return U(
                  this,
                  function (t) {
                    var e = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if (
                      "string" == typeof t &&
                      !Nt.test(t) &&
                      !bt[(yt.exec(t) || ["", ""])[1].toLowerCase()]
                    ) {
                      t = k.htmlPrefilter(t);
                      try {
                        for (; n < r; n++)
                          1 === (e = this[n] || {}).nodeType &&
                            (k.cleanData(xt(e, !1)), (e.innerHTML = t));
                        e = 0;
                      } catch (t) {}
                    }
                    e && this.empty().append(t);
                  },
                  null,
                  t,
                  arguments.length
                );
              },
              replaceWith: function () {
                var t = [];
                return Pt(
                  this,
                  arguments,
                  function (e) {
                    var n = this.parentNode;
                    k.inArray(this, t) < 0 &&
                      (k.cleanData(xt(this)), n && n.replaceChild(e, this));
                  },
                  t
                );
              },
            }),
            k.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (t, e) {
                k.fn[t] = function (t) {
                  for (
                    var n, r = [], i = k(t), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      k(i[a])[e](n),
                      c.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var qt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
            Ft = function (t) {
              var e = t.ownerDocument.defaultView;
              return (e && e.opener) || (e = r), e.getComputedStyle(t);
            },
            zt = function (t, e, n) {
              var r,
                i,
                o = {};
              for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
              for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
              return r;
            },
            Wt = new RegExp(ot.join("|"), "i");
          function Yt(t, e, n) {
            var r,
              i,
              o,
              a,
              s = t.style;
            return (
              (n = n || Ft(t)) &&
                ("" !== (a = n.getPropertyValue(e) || n[e]) ||
                  st(t) ||
                  (a = k.style(t, e)),
                !m.pixelBoxStyles() &&
                  qt.test(a) &&
                  Wt.test(e) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function Ut(t, e) {
            return {
              get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function t() {
              if (l) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  at.appendChild(c).appendChild(l);
                var t = r.getComputedStyle(l);
                (n = "1%" !== t.top),
                  (u = 12 === e(t.marginLeft)),
                  (l.style.right = "60%"),
                  (a = 36 === e(t.right)),
                  (i = 36 === e(t.width)),
                  (l.style.position = "absolute"),
                  (o = 12 === e(l.offsetWidth / 3)),
                  at.removeChild(c),
                  (l = null);
              }
            }
            function e(t) {
              return Math.round(parseFloat(t));
            }
            var n,
              i,
              o,
              a,
              s,
              u,
              c = b.createElement("div"),
              l = b.createElement("div");
            l.style &&
              ((l.style.backgroundClip = "content-box"),
              (l.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
              k.extend(m, {
                boxSizingReliable: function () {
                  return t(), i;
                },
                pixelBoxStyles: function () {
                  return t(), a;
                },
                pixelPosition: function () {
                  return t(), n;
                },
                reliableMarginLeft: function () {
                  return t(), u;
                },
                scrollboxSize: function () {
                  return t(), o;
                },
                reliableTrDimensions: function () {
                  var t, e, n, i;
                  return (
                    null == s &&
                      ((t = b.createElement("table")),
                      (e = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (t.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (e.style.cssText = "border:1px solid"),
                      (e.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      at.appendChild(t).appendChild(e).appendChild(n),
                      (i = r.getComputedStyle(e)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        e.offsetHeight),
                      at.removeChild(t)),
                    s
                  );
                },
              }));
          })();
          var $t = ["Webkit", "Moz", "ms"],
            Xt = b.createElement("div").style,
            Vt = {};
          function Gt(t) {
            var e = k.cssProps[t] || Vt[t];
            return (
              e ||
              (t in Xt
                ? t
                : (Vt[t] =
                    (function (t) {
                      for (
                        var e = t[0].toUpperCase() + t.slice(1), n = $t.length;
                        n--;

                      )
                        if ((t = $t[n] + e) in Xt) return t;
                    })(t) || t))
            );
          }
          var Zt = /^(none|table(?!-c[ea]).+)/,
            Jt = /^--/,
            Qt = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Kt = { letterSpacing: "0", fontWeight: "400" };
          function te(t, e, n) {
            var r = it.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
          }
          function ee(t, e, n, r, i, o) {
            var a = "width" === e ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += k.css(t, n + ot[a], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= k.css(t, "padding" + ot[a], !0, i)),
                    "margin" !== n &&
                      (u -= k.css(t, "border" + ot[a] + "Width", !0, i)))
                  : ((u += k.css(t, "padding" + ot[a], !0, i)),
                    "padding" !== n
                      ? (u += k.css(t, "border" + ot[a] + "Width", !0, i))
                      : (s += k.css(t, "border" + ot[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      t["offset" + e[0].toUpperCase() + e.slice(1)] -
                        o -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function ne(t, e, n) {
            var r = Ft(t),
              i =
                (!m.boxSizingReliable() || n) &&
                "border-box" === k.css(t, "boxSizing", !1, r),
              o = i,
              a = Yt(t, e, r),
              s = "offset" + e[0].toUpperCase() + e.slice(1);
            if (qt.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && N(t, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === k.css(t, "display", !1, r))) &&
                t.getClientRects().length &&
                ((i = "border-box" === k.css(t, "boxSizing", !1, r)),
                (o = s in t) && (a = t[s])),
              (a = parseFloat(a) || 0) +
                ee(t, e, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function re(t, e, n, r, i) {
            return new re.prototype.init(t, e, n, r, i);
          }
          k.extend({
            cssHooks: {
              opacity: {
                get: function (t, e) {
                  if (e) {
                    var n = Yt(t, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (t, e, n, r) {
              if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i,
                  o,
                  a,
                  s = G(e),
                  u = Jt.test(e),
                  c = t.style;
                if (
                  (u || (e = Gt(s)),
                  (a = k.cssHooks[e] || k.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(t, !1, r))
                    ? i
                    : c[e];
                "string" === (o = typeof n) &&
                  (i = it.exec(n)) &&
                  i[1] &&
                  ((n = lt(t, e, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== e.indexOf("background") ||
                      (c[e] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
                      (u ? c.setProperty(e, n) : (c[e] = n)));
              }
            },
            css: function (t, e, n, r) {
              var i,
                o,
                a,
                s = G(e);
              return (
                Jt.test(e) || (e = Gt(s)),
                (a = k.cssHooks[e] || k.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(t, !0, n)),
                void 0 === i && (i = Yt(t, e, r)),
                "normal" === i && e in Kt && (i = Kt[e]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            k.each(["height", "width"], function (t, e) {
              k.cssHooks[e] = {
                get: function (t, n, r) {
                  if (n)
                    return !Zt.test(k.css(t, "display")) ||
                      (t.getClientRects().length &&
                        t.getBoundingClientRect().width)
                      ? ne(t, e, r)
                      : zt(t, Qt, function () {
                          return ne(t, e, r);
                        });
                },
                set: function (t, n, r) {
                  var i,
                    o = Ft(t),
                    a = !m.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === k.css(t, "boxSizing", !1, o),
                    u = r ? ee(t, e, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        t["offset" + e[0].toUpperCase() + e.slice(1)] -
                          parseFloat(o[e]) -
                          ee(t, e, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = it.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((t.style[e] = n), (n = k.css(t, e))),
                    te(0, n, u)
                  );
                },
              };
            }),
            (k.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function (t, e) {
              if (e)
                return (
                  (parseFloat(Yt(t, "marginLeft")) ||
                    t.getBoundingClientRect().left -
                      zt(t, { marginLeft: 0 }, function () {
                        return t.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            k.each(
              { margin: "", padding: "", border: "Width" },
              function (t, e) {
                (k.cssHooks[t + e] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[t + ot[r] + e] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== t && (k.cssHooks[t + e].set = te);
              }
            ),
            k.fn.extend({
              css: function (t, e) {
                return U(
                  this,
                  function (t, e, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(e)) {
                      for (r = Ft(t), i = e.length; a < i; a++)
                        o[e[a]] = k.css(t, e[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? k.style(t, e, n) : k.css(t, e);
                  },
                  t,
                  e,
                  arguments.length > 1
                );
              },
            }),
            (k.Tween = re),
            (re.prototype = {
              constructor: re,
              init: function (t, e, n, r, i, o) {
                (this.elem = t),
                  (this.prop = n),
                  (this.easing = i || k.easing._default),
                  (this.options = e),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (k.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var t = re.propHooks[this.prop];
                return t && t.get
                  ? t.get(this)
                  : re.propHooks._default.get(this);
              },
              run: function (t) {
                var e,
                  n = re.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = e =
                        k.easing[this.easing](
                          t,
                          this.options.duration * t,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = e = t),
                  (this.now = (this.end - this.start) * e + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : re.propHooks._default.set(this),
                  this
                );
              },
            }),
            (re.prototype.init.prototype = re.prototype),
            (re.propHooks = {
              _default: {
                get: function (t) {
                  var e;
                  return 1 !== t.elem.nodeType ||
                    (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                    ? t.elem[t.prop]
                    : (e = k.css(t.elem, t.prop, "")) && "auto" !== e
                    ? e
                    : 0;
                },
                set: function (t) {
                  k.fx.step[t.prop]
                    ? k.fx.step[t.prop](t)
                    : 1 !== t.elem.nodeType ||
                      (!k.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)])
                    ? (t.elem[t.prop] = t.now)
                    : k.style(t.elem, t.prop, t.now + t.unit);
                },
              },
            }),
            (re.propHooks.scrollTop = re.propHooks.scrollLeft =
              {
                set: function (t) {
                  t.elem.nodeType &&
                    t.elem.parentNode &&
                    (t.elem[t.prop] = t.now);
                },
              }),
            (k.easing = {
              linear: function (t) {
                return t;
              },
              swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (k.fx = re.prototype.init),
            (k.fx.step = {});
          var ie,
            oe,
            ae = /^(?:toggle|show|hide)$/,
            se = /queueHooks$/;
          function ue() {
            oe &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ue)
                : r.setTimeout(ue, k.fx.interval),
              k.fx.tick());
          }
          function ce() {
            return (
              r.setTimeout(function () {
                ie = void 0;
              }),
              (ie = Date.now())
            );
          }
          function le(t, e) {
            var n,
              r = 0,
              i = { height: t };
            for (e = e ? 1 : 0; r < 4; r += 2 - e)
              i["margin" + (n = ot[r])] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i;
          }
          function fe(t, e, n) {
            for (
              var r,
                i = (pe.tweeners[e] || []).concat(pe.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, e, t))) return r;
          }
          function pe(t, e, n) {
            var r,
              i,
              o = 0,
              a = pe.prefilters.length,
              s = k.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var e = ie || ce(),
                    n = Math.max(0, c.startTime + c.duration - e),
                    r = 1 - (n / c.duration || 0),
                    o = 0,
                    a = c.tweens.length;
                  o < a;
                  o++
                )
                  c.tweens[o].run(r);
                return (
                  s.notifyWith(t, [c, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(t, [c, 1, 0]),
                      s.resolveWith(t, [c]),
                      !1)
                );
              },
              c = s.promise({
                elem: t,
                props: k.extend({}, e),
                opts: k.extend(
                  !0,
                  { specialEasing: {}, easing: k.easing._default },
                  n
                ),
                originalProperties: e,
                originalOptions: n,
                startTime: ie || ce(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                  var r = k.Tween(
                    t,
                    c.opts,
                    e,
                    n,
                    c.opts.specialEasing[e] || c.opts.easing
                  );
                  return c.tweens.push(r), r;
                },
                stop: function (e) {
                  var n = 0,
                    r = e ? c.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) c.tweens[n].run(1);
                  return (
                    e
                      ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e]))
                      : s.rejectWith(t, [c, e]),
                    this
                  );
                },
              }),
              l = c.props;
            for (
              !(function (t, e) {
                var n, r, i, o, a;
                for (n in t)
                  if (
                    ((i = e[(r = G(n))]),
                    (o = t[n]),
                    Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                    n !== r && ((t[r] = o), delete t[n]),
                    (a = k.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete t[r], o))
                      (n in t) || ((t[n] = o[n]), (e[n] = i));
                  else e[r] = i;
              })(l, c.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = pe.prefilters[o].call(c, t, l, c.opts)))
                return (
                  y(r.stop) &&
                    (k._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              k.map(l, fe, c),
              y(c.opts.start) && c.opts.start.call(t, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              k.fx.timer(
                k.extend(u, { elem: t, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (k.Animation = k.extend(pe, {
            tweeners: {
              "*": [
                function (t, e) {
                  var n = this.createTween(t, e);
                  return lt(n.elem, t, it.exec(e), n), n;
                },
              ],
            },
            tweener: function (t, e) {
              y(t) ? ((e = t), (t = ["*"])) : (t = t.match(P));
              for (var n, r = 0, i = t.length; r < i; r++)
                (n = t[r]),
                  (pe.tweeners[n] = pe.tweeners[n] || []),
                  pe.tweeners[n].unshift(e);
            },
            prefilters: [
              function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = "width" in e || "height" in e,
                  p = this,
                  d = {},
                  h = t.style,
                  v = t.nodeType && ct(t),
                  m = Q.get(t, "fxshow");
                for (r in (n.queue ||
                  (null == (a = k._queueHooks(t, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, k.queue(t, "fx").length || a.empty.fire();
                    });
                  })),
                e))
                  if (((i = e[r]), ae.test(i))) {
                    if (
                      (delete e[r],
                      (o = o || "toggle" === i),
                      i === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[r]) continue;
                      v = !0;
                    }
                    d[r] = (m && m[r]) || k.style(t, r);
                  }
                if ((u = !k.isEmptyObject(e)) || !k.isEmptyObject(d))
                  for (r in (f &&
                    1 === t.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = m && m.display) && (c = Q.get(t, "display")),
                    "none" === (l = k.css(t, "display")) &&
                      (c
                        ? (l = c)
                        : (dt([t], !0),
                          (c = t.style.display || c),
                          (l = k.css(t, "display")),
                          dt([t]))),
                    ("inline" === l || ("inline-block" === l && null != c)) &&
                      "none" === k.css(t, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((l = h.display), (c = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (m
                        ? "hidden" in m && (v = m.hidden)
                        : (m = Q.access(t, "fxshow", { display: c })),
                      o && (m.hidden = !v),
                      v && dt([t], !0),
                      p.done(function () {
                        for (r in (v || dt([t]), Q.remove(t, "fxshow"), d))
                          k.style(t, r, d[r]);
                      })),
                      (u = fe(v ? m[r] : 0, r, p)),
                      r in m ||
                        ((m[r] = u.start),
                        v && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (t, e) {
              e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
            },
          })),
            (k.speed = function (t, e, n) {
              var r =
                t && "object" == typeof t
                  ? k.extend({}, t)
                  : {
                      complete: n || (!n && e) || (y(t) && t),
                      duration: t,
                      easing: (n && e) || (e && !y(e) && e),
                    };
              return (
                k.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in k.fx.speeds
                      ? (r.duration = k.fx.speeds[r.duration])
                      : (r.duration = k.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  y(r.old) && r.old.call(this),
                    r.queue && k.dequeue(this, r.queue);
                }),
                r
              );
            }),
            k.fn.extend({
              fadeTo: function (t, e, n, r) {
                return this.filter(ct)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: e }, t, n, r);
              },
              animate: function (t, e, n, r) {
                var i = k.isEmptyObject(t),
                  o = k.speed(e, n, r),
                  a = function () {
                    var e = pe(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (t, e, n) {
                var r = function (t) {
                  var e = t.stop;
                  delete t.stop, e(n);
                };
                return (
                  "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                  e && this.queue(t || "fx", []),
                  this.each(function () {
                    var e = !0,
                      i = null != t && t + "queueHooks",
                      o = k.timers,
                      a = Q.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && se.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != t && o[i].queue !== t) ||
                        (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
                    (!e && n) || k.dequeue(this, t);
                  })
                );
              },
              finish: function (t) {
                return (
                  !1 !== t && (t = t || "fx"),
                  this.each(function () {
                    var e,
                      n = Q.get(this),
                      r = n[t + "queue"],
                      i = n[t + "queueHooks"],
                      o = k.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        k.queue(this, t, []),
                        i && i.stop && i.stop.call(this, !0),
                        e = o.length;
                      e--;

                    )
                      o[e].elem === this &&
                        o[e].queue === t &&
                        (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++)
                      r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            k.each(["toggle", "show", "hide"], function (t, e) {
              var n = k.fn[e];
              k.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t
                  ? n.apply(this, arguments)
                  : this.animate(le(e, !0), t, r, i);
              };
            }),
            k.each(
              {
                slideDown: le("show"),
                slideUp: le("hide"),
                slideToggle: le("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (t, e) {
                k.fn[t] = function (t, n, r) {
                  return this.animate(e, t, n, r);
                };
              }
            ),
            (k.timers = []),
            (k.fx.tick = function () {
              var t,
                e = 0,
                n = k.timers;
              for (ie = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
              n.length || k.fx.stop(), (ie = void 0);
            }),
            (k.fx.timer = function (t) {
              k.timers.push(t), k.fx.start();
            }),
            (k.fx.interval = 13),
            (k.fx.start = function () {
              oe || ((oe = !0), ue());
            }),
            (k.fx.stop = function () {
              oe = null;
            }),
            (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (k.fn.delay = function (t, e) {
              return (
                (t = (k.fx && k.fx.speeds[t]) || t),
                (e = e || "fx"),
                this.queue(e, function (e, n) {
                  var i = r.setTimeout(e, t);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var t = b.createElement("input"),
                e = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (t.type = "checkbox"),
                (m.checkOn = "" !== t.value),
                (m.optSelected = e.selected),
                ((t = b.createElement("input")).value = "t"),
                (t.type = "radio"),
                (m.radioValue = "t" === t.value);
            })();
          var de,
            he = k.expr.attrHandle;
          k.fn.extend({
            attr: function (t, e) {
              return U(this, k.attr, t, e, arguments.length > 1);
            },
            removeAttr: function (t) {
              return this.each(function () {
                k.removeAttr(this, t);
              });
            },
          }),
            k.extend({
              attr: function (t, e, n) {
                var r,
                  i,
                  o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === t.getAttribute
                    ? k.prop(t, e, n)
                    : ((1 === o && k.isXMLDoc(t)) ||
                        (i =
                          k.attrHooks[e.toLowerCase()] ||
                          (k.expr.match.bool.test(e) ? de : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void k.removeAttr(t, e)
                          : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                          ? r
                          : (t.setAttribute(e, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(t, e))
                        ? r
                        : null == (r = k.find.attr(t, e))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (t, e) {
                    if (!m.radioValue && "radio" === e && N(t, "input")) {
                      var n = t.value;
                      return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                  },
                },
              },
              removeAttr: function (t, e) {
                var n,
                  r = 0,
                  i = e && e.match(P);
                if (i && 1 === t.nodeType)
                  for (; (n = i[r++]); ) t.removeAttribute(n);
              },
            }),
            (de = {
              set: function (t, e, n) {
                return !1 === e ? k.removeAttr(t, n) : t.setAttribute(n, n), n;
              },
            }),
            k.each(k.expr.match.bool.source.match(/\w+/g), function (t, e) {
              var n = he[e] || k.find.attr;
              he[e] = function (t, e, r) {
                var i,
                  o,
                  a = e.toLowerCase();
                return (
                  r ||
                    ((o = he[a]),
                    (he[a] = i),
                    (i = null != n(t, e, r) ? a : null),
                    (he[a] = o)),
                  i
                );
              };
            });
          var ve = /^(?:input|select|textarea|button)$/i,
            me = /^(?:a|area)$/i;
          function ye(t) {
            return (t.match(P) || []).join(" ");
          }
          function ge(t) {
            return (t.getAttribute && t.getAttribute("class")) || "";
          }
          function be(t) {
            return Array.isArray(t)
              ? t
              : ("string" == typeof t && t.match(P)) || [];
          }
          k.fn.extend({
            prop: function (t, e) {
              return U(this, k.prop, t, e, arguments.length > 1);
            },
            removeProp: function (t) {
              return this.each(function () {
                delete this[k.propFix[t] || t];
              });
            },
          }),
            k.extend({
              prop: function (t, e, n) {
                var r,
                  i,
                  o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && k.isXMLDoc(t)) ||
                      ((e = k.propFix[e] || e), (i = k.propHooks[e])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                        ? r
                        : (t[e] = n)
                      : i && "get" in i && null !== (r = i.get(t, e))
                      ? r
                      : t[e]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (t) {
                    var e = k.find.attr(t, "tabindex");
                    return e
                      ? parseInt(e, 10)
                      : ve.test(t.nodeName) || (me.test(t.nodeName) && t.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (k.propHooks.selected = {
                get: function (t) {
                  var e = t.parentNode;
                  return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (t) {
                  var e = t.parentNode;
                  e &&
                    (e.selectedIndex,
                    e.parentNode && e.parentNode.selectedIndex);
                },
              }),
            k.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                k.propFix[this.toLowerCase()] = this;
              }
            ),
            k.fn.extend({
              addClass: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (y(t))
                  return this.each(function (e) {
                    k(this).addClass(t.call(this, e, ge(this)));
                  });
                if ((e = be(t)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ge(n)), (r = 1 === n.nodeType && " " + ye(i) + " "))
                    ) {
                      for (a = 0; (o = e[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = ye(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (y(t))
                  return this.each(function (e) {
                    k(this).removeClass(t.call(this, e, ge(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((e = be(t)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ge(n)), (r = 1 === n.nodeType && " " + ye(i) + " "))
                    ) {
                      for (a = 0; (o = e[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = ye(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (t, e) {
                var n = typeof t,
                  r = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && r
                  ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                  : y(t)
                  ? this.each(function (n) {
                      k(this).toggleClass(t.call(this, n, ge(this), e), e);
                    })
                  : this.each(function () {
                      var e, i, o, a;
                      if (r)
                        for (i = 0, o = k(this), a = be(t); (e = a[i++]); )
                          o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                      else
                        (void 0 !== t && "boolean" !== n) ||
                          ((e = ge(this)) && Q.set(this, "__className__", e),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              e || !1 === t
                                ? ""
                                : Q.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (t) {
                var e,
                  n,
                  r = 0;
                for (e = " " + t + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + ye(ge(n)) + " ").indexOf(e) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xe = /\r/g;
          k.fn.extend({
            val: function (t) {
              var e,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = y(t)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? t.call(this, n, k(this).val()) : t)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = k.map(i, function (t) {
                            return null == t ? "" : t + "";
                          })),
                      ((e =
                        k.valHooks[this.type] ||
                        k.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in e &&
                        void 0 !== e.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (e =
                    k.valHooks[i.type] ||
                    k.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in e &&
                  void 0 !== (n = e.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(xe, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            k.extend({
              valHooks: {
                option: {
                  get: function (t) {
                    var e = k.find.attr(t, "value");
                    return null != e ? e : ye(k.text(t));
                  },
                },
                select: {
                  get: function (t) {
                    var e,
                      n,
                      r,
                      i = t.options,
                      o = t.selectedIndex,
                      a = "select-one" === t.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                      ) {
                        if (((e = k(n).val()), a)) return e;
                        s.push(e);
                      }
                    return s;
                  },
                  set: function (t, e) {
                    for (
                      var n, r, i = t.options, o = k.makeArray(e), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        k.inArray(k.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (t.selectedIndex = -1), o;
                  },
                },
              },
            }),
            k.each(["radio", "checkbox"], function () {
              (k.valHooks[this] = {
                set: function (t, e) {
                  if (Array.isArray(e))
                    return (t.checked = k.inArray(k(t).val(), e) > -1);
                },
              }),
                m.checkOn ||
                  (k.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value;
                  });
            }),
            (m.focusin = "onfocusin" in r);
          var we = /^(?:focusinfocus|focusoutblur)$/,
            _e = function (t) {
              t.stopPropagation();
            };
          k.extend(k.event, {
            trigger: function (t, e, n, i) {
              var o,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                h = [n || b],
                v = d.call(t, "type") ? t.type : t,
                m = d.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !we.test(v + k.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((m = v.split(".")), (v = m.shift()), m.sort()),
                  (c = v.indexOf(":") < 0 && "on" + v),
                  ((t = t[k.expando]
                    ? t
                    : new k.Event(v, "object" == typeof t && t)).isTrigger = i
                    ? 2
                    : 3),
                  (t.namespace = m.join(".")),
                  (t.rnamespace = t.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = n),
                  (e = null == e ? [t] : k.makeArray(e, [t])),
                  (f = k.event.special[v] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, e)))
              ) {
                if (!i && !f.noBubble && !g(n)) {
                  for (
                    u = f.delegateType || v,
                      we.test(u + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = h[o++]) && !t.isPropagationStopped(); )
                  (p = a),
                    (t.type = o > 1 ? u : f.bindType || v),
                    (l =
                      (Q.get(a, "events") || Object.create(null))[t.type] &&
                      Q.get(a, "handle")) && l.apply(a, e),
                    (l = c && a[c]) &&
                      l.apply &&
                      Z(a) &&
                      ((t.result = l.apply(a, e)),
                      !1 === t.result && t.preventDefault());
                return (
                  (t.type = v),
                  i ||
                    t.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), e)) ||
                    !Z(n) ||
                    (c &&
                      y(n[v]) &&
                      !g(n) &&
                      ((s = n[c]) && (n[c] = null),
                      (k.event.triggered = v),
                      t.isPropagationStopped() && p.addEventListener(v, _e),
                      n[v](),
                      t.isPropagationStopped() && p.removeEventListener(v, _e),
                      (k.event.triggered = void 0),
                      s && (n[c] = s))),
                  t.result
                );
              }
            },
            simulate: function (t, e, n) {
              var r = k.extend(new k.Event(), n, { type: t, isSimulated: !0 });
              k.event.trigger(r, null, e);
            },
          }),
            k.fn.extend({
              trigger: function (t, e) {
                return this.each(function () {
                  k.event.trigger(t, e, this);
                });
              },
              triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return k.event.trigger(t, e, n, !0);
              },
            }),
            m.focusin ||
              k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var n = function (t) {
                  k.event.simulate(e, t.target, k.event.fix(t));
                };
                k.event.special[e] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Q.access(r, e);
                    i || r.addEventListener(t, n, !0),
                      Q.access(r, e, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Q.access(r, e) - 1;
                    i
                      ? Q.access(r, e, i)
                      : (r.removeEventListener(t, n, !0), Q.remove(r, e));
                  },
                };
              });
          var Te = r.location,
            ke = { guid: Date.now() },
            Se = /\?/;
          k.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
              e = new r.DOMParser().parseFromString(t, "text/xml");
            } catch (t) {}
            return (
              (n = e && e.getElementsByTagName("parsererror")[0]),
              (e && !n) ||
                k.error(
                  "Invalid XML: " +
                    (n
                      ? k
                          .map(n.childNodes, function (t) {
                            return t.textContent;
                          })
                          .join("\n")
                      : t)
                ),
              e
            );
          };
          var Ce = /\[\]$/,
            Ee = /\r?\n/g,
            Le = /^(?:submit|button|image|reset|file)$/i,
            je = /^(?:input|select|textarea|keygen)/i;
          function Ne(t, e, n, r) {
            var i;
            if (Array.isArray(e))
              k.each(e, function (e, i) {
                n || Ce.test(t)
                  ? r(t, i)
                  : Ne(
                      t +
                        "[" +
                        ("object" == typeof i && null != i ? e : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== _(e)) r(t, e);
            else for (i in e) Ne(t + "[" + i + "]", e[i], n, r);
          }
          (k.param = function (t, e) {
            var n,
              r = [],
              i = function (t, e) {
                var n = y(e) ? e() : e;
                r[r.length] =
                  encodeURIComponent(t) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == t) return "";
            if (Array.isArray(t) || (t.jquery && !k.isPlainObject(t)))
              k.each(t, function () {
                i(this.name, this.value);
              });
            else for (n in t) Ne(n, t[n], e, i);
            return r.join("&");
          }),
            k.fn.extend({
              serialize: function () {
                return k.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var t = k.prop(this, "elements");
                  return t ? k.makeArray(t) : this;
                })
                  .filter(function () {
                    var t = this.type;
                    return (
                      this.name &&
                      !k(this).is(":disabled") &&
                      je.test(this.nodeName) &&
                      !Le.test(t) &&
                      (this.checked || !mt.test(t))
                    );
                  })
                  .map(function (t, e) {
                    var n = k(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? k.map(n, function (t) {
                          return { name: e.name, value: t.replace(Ee, "\r\n") };
                        })
                      : { name: e.name, value: n.replace(Ee, "\r\n") };
                  })
                  .get();
              },
            });
          var Oe = /%20/g,
            Re = /#.*$/,
            De = /([?&])_=[^&]*/,
            Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Me = /^(?:GET|HEAD)$/,
            Ie = /^\/\//,
            He = {},
            Pe = {},
            Be = "*/".concat("*"),
            qe = b.createElement("a");
          function Fe(t) {
            return function (e, n) {
              "string" != typeof e && ((n = e), (e = "*"));
              var r,
                i = 0,
                o = e.toLowerCase().match(P) || [];
              if (y(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                    : (t[r] = t[r] || []).push(n);
            };
          }
          function ze(t, e, n, r) {
            var i = {},
              o = t === Pe;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                k.each(t[s] || [], function (t, s) {
                  var c = s(e, n, r);
                  return "string" != typeof c || o || i[c]
                    ? o
                      ? !(u = c)
                      : void 0
                    : (e.dataTypes.unshift(c), a(c), !1);
                }),
                u
              );
            }
            return a(e.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function We(t, e) {
            var n,
              r,
              i = k.ajaxSettings.flatOptions || {};
            for (n in e)
              void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && k.extend(!0, t, r), t;
          }
          (qe.href = Te.href),
            k.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Te.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Te.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Be,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": k.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (t, e) {
                return e ? We(We(t, k.ajaxSettings), e) : We(k.ajaxSettings, t);
              },
              ajaxPrefilter: Fe(He),
              ajaxTransport: Fe(Pe),
              ajax: function (t, e) {
                "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d = k.ajaxSetup({}, e),
                  h = d.context || d,
                  v = d.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                  m = k.Deferred(),
                  y = k.Callbacks("once memory"),
                  g = d.statusCode || {},
                  x = {},
                  w = {},
                  _ = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                      var e;
                      if (c) {
                        if (!a)
                          for (a = {}; (e = Ae.exec(o)); )
                            a[e[1].toLowerCase() + " "] = (
                              a[e[1].toLowerCase() + " "] || []
                            ).concat(e[2]);
                        e = a[t.toLowerCase() + " "];
                      }
                      return null == e ? null : e.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (t, e) {
                      return (
                        null == c &&
                          ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                          (x[t] = e)),
                        this
                      );
                    },
                    overrideMimeType: function (t) {
                      return null == c && (d.mimeType = t), this;
                    },
                    statusCode: function (t) {
                      var e;
                      if (t)
                        if (c) T.always(t[T.status]);
                        else for (e in t) g[e] = [g[e], t[e]];
                      return this;
                    },
                    abort: function (t) {
                      var e = t || _;
                      return n && n.abort(e), S(0, e), this;
                    },
                  };
                if (
                  (m.promise(T),
                  (d.url = ((t || d.url || Te.href) + "").replace(
                    Ie,
                    Te.protocol + "//"
                  )),
                  (d.type = e.method || e.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = b.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        qe.protocol + "//" + qe.host !=
                        u.protocol + "//" + u.host);
                  } catch (t) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = k.param(d.data, d.traditional)),
                  ze(He, d, e, T),
                  c)
                )
                  return T;
                for (f in ((l = k.event && d.global) &&
                  0 == k.active++ &&
                  k.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Me.test(d.type)),
                (i = d.url.replace(Re, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(Oe, "+"))
                  : ((p = d.url.slice(i.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((i += (Se.test(i) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((i = i.replace(De, "$1")),
                      (p = (Se.test(i) ? "&" : "?") + "_=" + ke.guid++ + p)),
                    (d.url = i + p)),
                d.ifModified &&
                  (k.lastModified[i] &&
                    T.setRequestHeader("If-Modified-Since", k.lastModified[i]),
                  k.etag[i] && T.setRequestHeader("If-None-Match", k.etag[i])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  e.contentType) &&
                  T.setRequestHeader("Content-Type", d.contentType),
                T.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  T.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, T, d) || c))
                  return T.abort();
                if (
                  ((_ = "abort"),
                  y.add(d.complete),
                  T.done(d.success),
                  T.fail(d.error),
                  (n = ze(Pe, d, e, T)))
                ) {
                  if (
                    ((T.readyState = 1), l && v.trigger("ajaxSend", [T, d]), c)
                  )
                    return T;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      T.abort("timeout");
                    }, d.timeout));
                  try {
                    (c = !1), n.send(x, S);
                  } catch (t) {
                    if (c) throw t;
                    S(-1, t);
                  }
                } else S(-1, "No Transport");
                function S(t, e, a, u) {
                  var f,
                    p,
                    b,
                    x,
                    w,
                    _ = e;
                  c ||
                    ((c = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = u || ""),
                    (T.readyState = t > 0 ? 4 : 0),
                    (f = (t >= 200 && t < 300) || 304 === t),
                    a &&
                      (x = (function (t, e, n) {
                        for (
                          var r, i, o, a, s = t.contents, u = t.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                t.mimeType ||
                                e.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || t.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(d, T, a)),
                    !f &&
                      k.inArray("script", d.dataTypes) > -1 &&
                      k.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (x = (function (t, e, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        c = {},
                        l = t.dataTypes.slice();
                      if (l[1])
                        for (a in t.converters)
                          c[a.toLowerCase()] = t.converters[a];
                      for (o = l.shift(); o; )
                        if (
                          (t.responseFields[o] && (n[t.responseFields[o]] = e),
                          !u &&
                            r &&
                            t.dataFilter &&
                            (e = t.dataFilter(e, t.dataType)),
                          (u = o),
                          (o = l.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = c[u + " " + o] || c["* " + o]))
                              for (i in c)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = c[u + " " + s[0]] || c["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = c[i])
                                    : !0 !== c[i] &&
                                      ((o = s[0]), l.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && t.throws) e = a(e);
                              else
                                try {
                                  e = a(e);
                                } catch (t) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? t
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: e };
                    })(d, x, T, f)),
                    f
                      ? (d.ifModified &&
                          ((w = T.getResponseHeader("Last-Modified")) &&
                            (k.lastModified[i] = w),
                          (w = T.getResponseHeader("etag")) && (k.etag[i] = w)),
                        204 === t || "HEAD" === d.type
                          ? (_ = "nocontent")
                          : 304 === t
                          ? (_ = "notmodified")
                          : ((_ = x.state), (p = x.data), (f = !(b = x.error))))
                      : ((b = _),
                        (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                    (T.status = t),
                    (T.statusText = (e || _) + ""),
                    f
                      ? m.resolveWith(h, [p, _, T])
                      : m.rejectWith(h, [T, _, b]),
                    T.statusCode(g),
                    (g = void 0),
                    l &&
                      v.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        T,
                        d,
                        f ? p : b,
                      ]),
                    y.fireWith(h, [T, _]),
                    l &&
                      (v.trigger("ajaxComplete", [T, d]),
                      --k.active || k.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (t, e, n) {
                return k.get(t, e, n, "json");
              },
              getScript: function (t, e) {
                return k.get(t, void 0, e, "script");
              },
            }),
            k.each(["get", "post"], function (t, e) {
              k[e] = function (t, n, r, i) {
                return (
                  y(n) && ((i = i || r), (r = n), (n = void 0)),
                  k.ajax(
                    k.extend(
                      { url: t, type: e, dataType: i, data: n, success: r },
                      k.isPlainObject(t) && t
                    )
                  )
                );
              };
            }),
            k.ajaxPrefilter(function (t) {
              var e;
              for (e in t.headers)
                "content-type" === e.toLowerCase() &&
                  (t.contentType = t.headers[e] || "");
            }),
            (k._evalUrl = function (t, e, n) {
              return k.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (t) {
                  k.globalEval(t, e, n);
                },
              });
            }),
            k.fn.extend({
              wrapAll: function (t) {
                var e;
                return (
                  this[0] &&
                    (y(t) && (t = t.call(this[0])),
                    (e = k(t, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && e.insertBefore(this[0]),
                    e
                      .map(function () {
                        for (var t = this; t.firstElementChild; )
                          t = t.firstElementChild;
                        return t;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (t) {
                return y(t)
                  ? this.each(function (e) {
                      k(this).wrapInner(t.call(this, e));
                    })
                  : this.each(function () {
                      var e = k(this),
                        n = e.contents();
                      n.length ? n.wrapAll(t) : e.append(t);
                    });
              },
              wrap: function (t) {
                var e = y(t);
                return this.each(function (n) {
                  k(this).wrapAll(e ? t.call(this, n) : t);
                });
              },
              unwrap: function (t) {
                return (
                  this.parent(t)
                    .not("body")
                    .each(function () {
                      k(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (k.expr.pseudos.hidden = function (t) {
              return !k.expr.pseudos.visible(t);
            }),
            (k.expr.pseudos.visible = function (t) {
              return !!(
                t.offsetWidth ||
                t.offsetHeight ||
                t.getClientRects().length
              );
            }),
            (k.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (t) {}
            });
          var Ye = { 0: 200, 1223: 204 },
            Ue = k.ajaxSettings.xhr();
          (m.cors = !!Ue && "withCredentials" in Ue),
            (m.ajax = Ue = !!Ue),
            k.ajaxTransport(function (t) {
              var e, n;
              if (m.cors || (Ue && !t.crossDomain))
                return {
                  send: function (i, o) {
                    var a,
                      s = t.xhr();
                    if (
                      (s.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                    )
                      for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in (t.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(t.mimeType),
                    t.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
                    (e = function (t) {
                      return function () {
                        e &&
                          ((e =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === t
                            ? s.abort()
                            : "error" === t
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Ye[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = e()),
                      (n = s.onerror = s.ontimeout = e("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                e && n();
                              });
                          }),
                      (e = e("abort"));
                    try {
                      s.send((t.hasContent && t.data) || null);
                    } catch (t) {
                      if (e) throw t;
                    }
                  },
                  abort: function () {
                    e && e();
                  },
                };
            }),
            k.ajaxPrefilter(function (t) {
              t.crossDomain && (t.contents.script = !1);
            }),
            k.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (t) {
                  return k.globalEval(t), t;
                },
              },
            }),
            k.ajaxPrefilter("script", function (t) {
              void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET");
            }),
            k.ajaxTransport("script", function (t) {
              var e, n;
              if (t.crossDomain || t.scriptAttrs)
                return {
                  send: function (r, i) {
                    (e = k("<script>")
                      .attr(t.scriptAttrs || {})
                      .prop({ charset: t.scriptCharset, src: t.url })
                      .on(
                        "load error",
                        (n = function (t) {
                          e.remove(),
                            (n = null),
                            t && i("error" === t.type ? 404 : 200, t.type);
                        })
                      )),
                      b.head.appendChild(e[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var $e,
            Xe = [],
            Ve = /(=)\?(?=&|$)|\?\?/;
          k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var t = Xe.pop() || k.expando + "_" + ke.guid++;
              return (this[t] = !0), t;
            },
          }),
            k.ajaxPrefilter("json jsonp", function (t, e, n) {
              var i,
                o,
                a,
                s =
                  !1 !== t.jsonp &&
                  (Ve.test(t.url)
                    ? "url"
                    : "string" == typeof t.data &&
                      0 ===
                        (t.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ve.test(t.data) &&
                      "data");
              if (s || "jsonp" === t.dataTypes[0])
                return (
                  (i = t.jsonpCallback =
                    y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  s
                    ? (t[s] = t[s].replace(Ve, "$1" + i))
                    : !1 !== t.jsonp &&
                      (t.url +=
                        (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                  (t.converters["script json"] = function () {
                    return a || k.error(i + " was not called"), a[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? k(r).removeProp(i) : (r[i] = o),
                      t[i] && ((t.jsonpCallback = e.jsonpCallback), Xe.push(i)),
                      a && y(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              ((($e = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === $e.childNodes.length)),
            (k.parseHTML = function (t, e, n) {
              return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                  e ||
                    (m.createHTMLDocument
                      ? (((r = (e =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        e.head.appendChild(r))
                      : (e = b)),
                  (o = !n && []),
                  (i = O.exec(t))
                    ? [e.createElement(i[1])]
                    : ((i = Tt([t], e, o)),
                      o && o.length && k(o).remove(),
                      k.merge([], i.childNodes)));
              var r, i, o;
            }),
            (k.fn.load = function (t, e, n) {
              var r,
                i,
                o,
                a = this,
                s = t.indexOf(" ");
              return (
                s > -1 && ((r = ye(t.slice(s))), (t = t.slice(0, s))),
                y(e)
                  ? ((n = e), (e = void 0))
                  : e && "object" == typeof e && (i = "POST"),
                a.length > 0 &&
                  k
                    .ajax({
                      url: t,
                      type: i || "GET",
                      dataType: "html",
                      data: e,
                    })
                    .done(function (t) {
                      (o = arguments),
                        a.html(
                          r ? k("<div>").append(k.parseHTML(t)).find(r) : t
                        );
                    })
                    .always(
                      n &&
                        function (t, e) {
                          a.each(function () {
                            n.apply(this, o || [t.responseText, e, t]);
                          });
                        }
                    ),
                this
              );
            }),
            (k.expr.pseudos.animated = function (t) {
              return k.grep(k.timers, function (e) {
                return t === e.elem;
              }).length;
            }),
            (k.offset = {
              setOffset: function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c = k.css(t, "position"),
                  l = k(t),
                  f = {};
                "static" === c && (t.style.position = "relative"),
                  (s = l.offset()),
                  (o = k.css(t, "top")),
                  (u = k.css(t, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = l.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  y(e) && (e = e.call(t, n, k.extend({}, s))),
                  null != e.top && (f.top = e.top - s.top + a),
                  null != e.left && (f.left = e.left - s.left + i),
                  "using" in e ? e.using.call(t, f) : l.css(f);
              },
            }),
            k.fn.extend({
              offset: function (t) {
                if (arguments.length)
                  return void 0 === t
                    ? this
                    : this.each(function (e) {
                        k.offset.setOffset(this, t, e);
                      });
                var e,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((e = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var t,
                    e,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === k.css(r, "position"))
                    e = r.getBoundingClientRect();
                  else {
                    for (
                      e = this.offset(),
                        n = r.ownerDocument,
                        t = r.offsetParent || n.documentElement;
                      t &&
                      (t === n.body || t === n.documentElement) &&
                      "static" === k.css(t, "position");

                    )
                      t = t.parentNode;
                    t &&
                      t !== r &&
                      1 === t.nodeType &&
                      (((i = k(t).offset()).top += k.css(
                        t,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += k.css(t, "borderLeftWidth", !0)));
                  }
                  return {
                    top: e.top - i.top - k.css(r, "marginTop", !0),
                    left: e.left - i.left - k.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var t = this.offsetParent;
                    t && "static" === k.css(t, "position");

                  )
                    t = t.offsetParent;
                  return t || at;
                });
              },
            }),
            k.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (t, e) {
                var n = "pageYOffset" === e;
                k.fn[t] = function (r) {
                  return U(
                    this,
                    function (t, r, i) {
                      var o;
                      if (
                        (g(t)
                          ? (o = t)
                          : 9 === t.nodeType && (o = t.defaultView),
                        void 0 === i)
                      )
                        return o ? o[e] : t[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (t[r] = i);
                    },
                    t,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            k.each(["top", "left"], function (t, e) {
              k.cssHooks[e] = Ut(m.pixelPosition, function (t, n) {
                if (n)
                  return (
                    (n = Yt(t, e)), qt.test(n) ? k(t).position()[e] + "px" : n
                  );
              });
            }),
            k.each({ Height: "height", Width: "width" }, function (t, e) {
              k.each(
                { padding: "inner" + t, content: e, "": "outer" + t },
                function (n, r) {
                  k.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return U(
                      this,
                      function (e, n, i) {
                        var o;
                        return g(e)
                          ? 0 === r.indexOf("outer")
                            ? e["inner" + t]
                            : e.document.documentElement["client" + t]
                          : 9 === e.nodeType
                          ? ((o = e.documentElement),
                            Math.max(
                              e.body["scroll" + t],
                              o["scroll" + t],
                              e.body["offset" + t],
                              o["offset" + t],
                              o["client" + t]
                            ))
                          : void 0 === i
                          ? k.css(e, n, s)
                          : k.style(e, n, i, s);
                      },
                      e,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            k.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (t, e) {
                k.fn[e] = function (t) {
                  return this.on(e, t);
                };
              }
            ),
            k.fn.extend({
              bind: function (t, e, n) {
                return this.on(t, null, e, n);
              },
              unbind: function (t, e) {
                return this.off(t, null, e);
              },
              delegate: function (t, e, n, r) {
                return this.on(e, t, n, r);
              },
              undelegate: function (t, e, n) {
                return 1 === arguments.length
                  ? this.off(t, "**")
                  : this.off(e, t || "**", n);
              },
              hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
              },
            }),
            k.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (t, e) {
                k.fn[e] = function (t, n) {
                  return arguments.length > 0
                    ? this.on(e, null, t, n)
                    : this.trigger(e);
                };
              }
            );
          var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (k.proxy = function (t, e) {
            var n, r, i;
            if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
              return (
                (r = s.call(arguments, 2)),
                (i = function () {
                  return t.apply(e || this, r.concat(s.call(arguments)));
                }),
                (i.guid = t.guid = t.guid || k.guid++),
                i
              );
          }),
            (k.holdReady = function (t) {
              t ? k.readyWait++ : k.ready(!0);
            }),
            (k.isArray = Array.isArray),
            (k.parseJSON = JSON.parse),
            (k.nodeName = N),
            (k.isFunction = y),
            (k.isWindow = g),
            (k.camelCase = G),
            (k.type = _),
            (k.now = Date.now),
            (k.isNumeric = function (t) {
              var e = k.type(t);
              return (
                ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
              );
            }),
            (k.trim = function (t) {
              return null == t ? "" : (t + "").replace(Ge, "");
            }),
            void 0 ===
              (n = function () {
                return k;
              }.apply(e, [])) || (t.exports = n);
          var Ze = r.jQuery,
            Je = r.$;
          return (
            (k.noConflict = function (t) {
              return (
                r.$ === k && (r.$ = Je),
                t && r.jQuery === k && (r.jQuery = Ze),
                k
              );
            }),
            void 0 === i && (r.jQuery = r.$ = k),
            k
          );
        });
      },
      7418: function (t) {
        "use strict";
        var e = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function i(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        t.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, n = 0; n < 10; n++)
              e["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                r[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Object.assign
          : function (t, o) {
              for (var a, s, u = i(t), c = 1; c < arguments.length; c++) {
                for (var l in (a = Object(arguments[c])))
                  n.call(a, l) && (u[l] = a[l]);
                if (e) {
                  s = e(a);
                  for (var f = 0; f < s.length; f++)
                    r.call(a, s[f]) && (u[s[f]] = a[s[f]]);
                }
              }
              return u;
            };
      },
      4155: function (t) {
        var e,
          n,
          r = (t.exports = {});
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === i || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (n) {
            try {
              return e.call(null, t, 0);
            } catch (n) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t) {
            e = i;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (t) {
            n = o;
          }
        })();
        var s,
          u = [],
          c = !1,
          l = -1;
        function f() {
          c &&
            s &&
            ((c = !1),
            s.length ? (u = s.concat(u)) : (l = -1),
            u.length && p());
        }
        function p() {
          if (!c) {
            var t = a(f);
            c = !0;
            for (var e = u.length; e; ) {
              for (s = u, u = []; ++l < e; ) s && s[l].run();
              (l = -1), (e = u.length);
            }
            (s = null),
              (c = !1),
              (function (t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === o || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(t);
                try {
                  n(t);
                } catch (e) {
                  try {
                    return n.call(null, t);
                  } catch (e) {
                    return n.call(this, t);
                  }
                }
              })(t);
          }
        }
        function d(t, e) {
          (this.fun = t), (this.array = e);
        }
        function h() {}
        (r.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          u.push(new d(t, e)), 1 !== u.length || c || a(p);
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = h),
          (r.addListener = h),
          (r.once = h),
          (r.off = h),
          (r.removeListener = h),
          (r.removeAllListeners = h),
          (r.emit = h),
          (r.prependListener = h),
          (r.prependOnceListener = h),
          (r.listeners = function (t) {
            return [];
          }),
          (r.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      2408: function (t, e, n) {
        "use strict";
        var r = n(7418),
          i = 60103,
          o = 60106;
        var a = 60109,
          s = 60110,
          u = 60112;
        var c = 60115,
          l = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (i = f("react.element")),
            (o = f("react.portal")),
            f("react.fragment"),
            f("react.strict_mode"),
            f("react.profiler"),
            (a = f("react.provider")),
            (s = f("react.context")),
            (u = f("react.forward_ref")),
            f("react.suspense"),
            (c = f("react.memo")),
            (l = f("react.lazy"));
        }
        var p = "function" == typeof Symbol && Symbol.iterator;
        function d(t) {
          for (
            var e =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
              n = 1;
            n < arguments.length;
            n++
          )
            e += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            t +
            "; visit " +
            e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = {};
        function m(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function g(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = v),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (t, e) {
            if ("object" != typeof t && "function" != typeof t && null != t)
              throw Error(d(85));
            this.updater.enqueueSetState(this, t, e, "setState");
          }),
          (m.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var b = (g.prototype = new y());
        (b.constructor = g), r(b, m.prototype), (b.isPureReactComponent = !0);
        var x = { current: null },
          w = Object.prototype.hasOwnProperty,
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(t, e, n) {
          var r,
            o = {},
            a = null,
            s = null;
          if (null != e)
            for (r in (void 0 !== e.ref && (s = e.ref),
            void 0 !== e.key && (a = "" + e.key),
            e))
              w.call(e, r) && !_.hasOwnProperty(r) && (o[r] = e[r]);
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
            o.children = c;
          }
          if (t && t.defaultProps)
            for (r in (u = t.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
          return {
            $$typeof: i,
            type: t,
            key: a,
            ref: s,
            props: o,
            _owner: x.current,
          };
        }
        function k(t) {
          return "object" == typeof t && null !== t && t.$$typeof === i;
        }
        var S = /\/+/g;
        function C(t, e) {
          return "object" == typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })("" + t.key)
            : e.toString(36);
        }
        function E(t, e, n, r, a) {
          var s = typeof t;
          ("undefined" !== s && "boolean" !== s) || (t = null);
          var u = !1;
          if (null === t) u = !0;
          else
            switch (s) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case i:
                  case o:
                    u = !0;
                }
            }
          if (u)
            return (
              (a = a((u = t))),
              (t = "" === r ? "." + C(u, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != t && (n = t.replace(S, "$&/") + "/"),
                  E(a, e, n, "", function (t) {
                    return t;
                  }))
                : null != a &&
                  (k(a) &&
                    (a = (function (t, e) {
                      return {
                        $$typeof: i,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      a,
                      n +
                        (!a.key || (u && u.key === a.key)
                          ? ""
                          : ("" + a.key).replace(S, "$&/") + "/") +
                        t
                    )),
                  e.push(a)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
            for (var c = 0; c < t.length; c++) {
              var l = r + C((s = t[c]), c);
              u += E(s, e, n, l, a);
            }
          else if (
            ((l = (function (t) {
              return null === t || "object" != typeof t
                ? null
                : "function" == typeof (t = (p && t[p]) || t["@@iterator"])
                ? t
                : null;
            })(t)),
            "function" == typeof l)
          )
            for (t = l.call(t), c = 0; !(s = t.next()).done; )
              u += E((s = s.value), e, n, (l = r + C(s, c++)), a);
          else if ("object" === s)
            throw (
              ((e = "" + t),
              Error(
                d(
                  31,
                  "[object Object]" === e
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
                )
              ))
            );
          return u;
        }
        function L(t, e, n) {
          if (null == t) return t;
          var r = [],
            i = 0;
          return (
            E(t, r, "", "", function (t) {
              return e.call(n, t, i++);
            }),
            r
          );
        }
        function j(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()),
              (t._status = 0),
              (t._result = e),
              e.then(
                function (e) {
                  0 === t._status &&
                    ((e = e.default), (t._status = 1), (t._result = e));
                },
                function (e) {
                  0 === t._status && ((t._status = 2), (t._result = e));
                }
              );
          }
          if (1 === t._status) return t._result;
          throw t._result;
        }
        var N = { current: null };
        function O() {
          var t = N.current;
          if (null === t) throw Error(d(321));
          return t;
        }
      },
      7294: function (t, e, n) {
        "use strict";
        n(2408);
      },
      5666: function (t) {
        var e = (function (t) {
          "use strict";
          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";
          function u(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function c(t, e, n, r) {
            var i = e && e.prototype instanceof m ? e : m,
              o = Object.create(i.prototype),
              a = new L(r || []);
            return (
              (o._invoke = (function (t, e, n) {
                var r = f;
                return function (i, o) {
                  if (r === d) throw new Error("Generator is already running");
                  if (r === h) {
                    if ("throw" === i) throw o;
                    return N();
                  }
                  for (n.method = i, n.arg = o; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = S(a, n);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = d;
                    var u = l(t, e, n);
                    if ("normal" === u.type) {
                      if (((r = n.done ? h : p), u.arg === v)) continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = h), (n.method = "throw"), (n.arg = u.arg));
                  }
                };
              })(t, n, a)),
              o
            );
          }
          function l(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = c;
          var f = "suspendedStart",
            p = "suspendedYield",
            d = "executing",
            h = "completed",
            v = {};
          function m() {}
          function y() {}
          function g() {}
          var b = {};
          u(b, o, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            w = x && x(x(j([])));
          w && w !== n && r.call(w, o) && (b = w);
          var _ = (g.prototype = m.prototype = Object.create(b));
          function T(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function k(t, e) {
            function n(i, o, a, s) {
              var u = l(t[i], t, o);
              if ("throw" !== u.type) {
                var c = u.arg,
                  f = c.value;
                return f && "object" == typeof f && r.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        n("next", t, a, s);
                      },
                      function (t) {
                        n("throw", t, a, s);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (c.value = t), a(c);
                      },
                      function (t) {
                        return n("throw", t, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var i;
            this._invoke = function (t, r) {
              function o() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (i = i ? i.then(o, o) : o());
            };
          }
          function S(t, n) {
            var r = t.iterator[n.method];
            if (r === e) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  S(t, n),
                  "throw" === n.method)
                )
                  return v;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return v;
            }
            var i = l(r, t.iterator, n.arg);
            if ("throw" === i.type)
              return (
                (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
              );
            var o = i.arg;
            return o
              ? o.done
                ? ((n[t.resultName] = o.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  v)
                : o
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function C(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function E(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function L(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(C, this),
              this.reset(!0);
          }
          function j(t) {
            if (t) {
              var n = t[o];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  a = function n() {
                    for (; ++i < t.length; )
                      if (r.call(t, i))
                        return (n.value = t[i]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: N };
          }
          function N() {
            return { value: e, done: !0 };
          }
          return (
            (y.prototype = g),
            u(_, "constructor", g),
            u(g, "constructor", y),
            (y.displayName = u(g, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), u(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(_)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            T(k.prototype),
            u(k.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = k),
            (t.async = function (e, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new k(c(e, n, r, i), o);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            T(_),
            u(_, s, "Generator"),
            u(_, o, function () {
              return this;
            }),
            u(_, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return (
                e.reverse(),
                function n() {
                  for (; e.length; ) {
                    var r = e.pop();
                    if (r in t) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (t.values = j),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(E),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function i(r, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = t),
                    (n.next = r),
                    i && ((n.method = "next"), (n.arg = e)),
                    !!i
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var u = r.call(a, "catchLoc"),
                      c = r.call(a, "finallyLoc");
                    if (u && c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), v)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), E(n), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      E(n);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: j(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  v
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
      513: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3379),
          i = n.n(r),
          o = n(7265),
          a = { insert: "head", singleton: !1 };
        i()(o.Z, a);
        e.default = o.Z.locals || {};
      },
      3379: function (t, e, n) {
        "use strict";
        var r,
          i = function () {
            return (
              void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r
            );
          },
          o = (function () {
            var t = {};
            return function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (t) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            };
          })(),
          a = [];
        function s(t) {
          for (var e = -1, n = 0; n < a.length; n++)
            if (a[n].identifier === t) {
              e = n;
              break;
            }
          return e;
        }
        function u(t, e) {
          for (var n = {}, r = [], i = 0; i < t.length; i++) {
            var o = t[i],
              u = e.base ? o[0] + e.base : o[0],
              c = n[u] || 0,
              l = "".concat(u, " ").concat(c);
            n[u] = c + 1;
            var f = s(l),
              p = { css: o[1], media: o[2], sourceMap: o[3] };
            -1 !== f
              ? (a[f].references++, a[f].updater(p))
              : a.push({ identifier: l, updater: m(p, e), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function c(t) {
          var e = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (t) {
              e.setAttribute(t, r[t]);
            }),
            "function" == typeof t.insert)
          )
            t.insert(e);
          else {
            var a = o(t.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(e);
          }
          return e;
        }
        var l,
          f =
            ((l = []),
            function (t, e) {
              return (l[t] = e), l.filter(Boolean).join("\n");
            });
        function p(t, e, n, r) {
          var i = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (t.styleSheet) t.styleSheet.cssText = f(e, i);
          else {
            var o = document.createTextNode(i),
              a = t.childNodes;
            a[e] && t.removeChild(a[e]),
              a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
          }
        }
        function d(t, e, n) {
          var r = n.css,
            i = n.media,
            o = n.sourceMap;
          if (
            (i ? t.setAttribute("media", i) : t.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                  " */"
                )),
            t.styleSheet)
          )
            t.styleSheet.cssText = r;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r));
          }
        }
        var h = null,
          v = 0;
        function m(t, e) {
          var n, r, i;
          if (e.singleton) {
            var o = v++;
            (n = h || (h = c(e))),
              (r = p.bind(null, n, o, !1)),
              (i = p.bind(null, n, o, !0));
          } else
            (n = c(e)),
              (r = d.bind(null, n, e)),
              (i = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(n);
              });
          return (
            r(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap
                )
                  return;
                r((t = e));
              } else i();
            }
          );
        }
        t.exports = function (t, e) {
          (e = e || {}).singleton ||
            "boolean" == typeof e.singleton ||
            (e.singleton = i());
          var n = u((t = t || []), e);
          return function (t) {
            if (
              ((t = t || []),
              "[object Array]" === Object.prototype.toString.call(t))
            ) {
              for (var r = 0; r < n.length; r++) {
                var i = s(n[r]);
                a[i].references--;
              }
              for (var o = u(t, e), c = 0; c < n.length; c++) {
                var l = s(n[c]);
                0 === a[l].references && (a[l].updater(), a.splice(l, 1));
              }
              n = o;
            }
          };
        };
      },
      655: function (t, e, n) {
        "use strict";
        n.d(e, {
          ZT: function () {
            return i;
          },
          pi: function () {
            return o;
          },
          _T: function () {
            return a;
          },
          XA: function () {
            return s;
          },
          fl: function () {
            return c;
          },
        });
        var r = function (t, e) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            r(t, e)
          );
        };
        function i(t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
            o.apply(this, arguments)
          );
        };
        function a(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        }
        function s(t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && r >= t.length && (t = void 0),
                  { value: t && t[r++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function u(t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            i,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        }
        function c() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(u(arguments[e]));
          return t;
        }
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.hmd = function (t) {
      return (
        (t = Object.create(t)).children || (t.children = []),
        Object.defineProperty(t, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                t.id
            );
          },
        }),
        t
      );
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      function t(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function e(e) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(n, r);
            function s(e) {
              t(a, i, o, s, u, "next", e);
            }
            function u(e) {
              t(a, i, o, s, u, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var r = n(7757),
        i = n.n(r);
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
        //   var r = e[n];
        //   (r.enumerable = r.enumerable || !1),
        //     (r.configurable = !0),
        //     "value" in r && (r.writable = !0),
        //     Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }
      var u = n(655),
        c = n(1694);
      function l(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var r = (0, c.Gd)();
        if (r && r[t]) return r[t].apply(r, (0, u.fl)(e));
        throw new Error(
          "No hub defined or " +
            t +
            " was not found on the hub, please open a bug report."
        );
      }
      function f(t, e) {
        var n;
        try {
          throw new Error("Sentry syntheticException");
        } catch (t) {
          n = t;
        }
        return l("captureException", t, {
          captureContext: e,
          originalException: t,
          syntheticException: n,
        });
      }
      var p = n(1109),
        d = n(2343),
        h = n(2991),
        v = n(6458),
        m = n(5734),
        y = n(3233),
        g = n(6257),
        b = (0, h.R)();
      var x = n(1422),
        w = n(1170),
        _ = n(7597);
      function T(t, e) {
        try {
          for (
            var n = t, r = [], i = 0, o = 0, a = " > ".length, s = void 0;
            n &&
            i++ < 5 &&
            !(
              "html" === (s = k(n, e)) ||
              (i > 1 && o + r.length * a + s.length >= 80)
            );

          )
            r.push(s), (o += s.length), (n = n.parentNode);
          return r.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function k(t, e) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          c = t,
          l = [];
        if (!c || !c.tagName) return "";
        l.push(c.tagName.toLowerCase());
        var f = (null === (n = e) || void 0 === n ? void 0 : n.length)
          ? e
              .filter(function (t) {
                return c.getAttribute(t);
              })
              .map(function (t) {
                return [t, c.getAttribute(t)];
              })
          : null;
        if (null === (r = f) || void 0 === r ? void 0 : r.length)
          f.forEach(function (t) {
            l.push("[" + t[0] + '="' + t[1] + '"]');
          });
        else if (
          (c.id && l.push("#" + c.id), (i = c.className) && (0, _.HD)(i))
        )
          for (o = i.split(/\s+/), u = 0; u < o.length; u++) l.push("." + o[u]);
        var p = ["type", "name", "title", "alt"];
        for (u = 0; u < p.length; u++)
          (a = p[u]),
            (s = c.getAttribute(a)) && l.push("[" + a + '="' + s + '"]');
        return l.join("");
      }
      var S = function (t, e, n) {
          var r;
          return function (i) {
            e.value >= 0 &&
              (i || n) &&
              ((e.delta = e.value - (r || 0)),
              (e.delta || void 0 === r) && ((r = e.value), t(e)));
          };
        },
        C = function (t, e) {
          return {
            name: t,
            value: null != e ? e : -1,
            delta: 0,
            entries: [],
            id:
              "v2-" +
              Date.now() +
              "-" +
              (Math.floor(8999999999999 * Math.random()) + 1e12),
          };
        },
        E = function (t, e) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              if ("first-input" === t && !("PerformanceEventTiming" in self))
                return;
              var n = new PerformanceObserver(function (t) {
                return t.getEntries().map(e);
              });
              return n.observe({ type: t, buffered: !0 }), n;
            }
          } catch (t) {}
        },
        L = function (t, e) {
          var n = function (r) {
            ("pagehide" !== r.type &&
              "hidden" !== (0, h.R)().document.visibilityState) ||
              (t(r),
              e &&
                (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)));
          };
          addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0);
        },
        j = -1,
        N = function () {
          return (
            j < 0 &&
              ((j =
                "hidden" === (0, h.R)().document.visibilityState ? 0 : 1 / 0),
              L(function (t) {
                var e = t.timeStamp;
                j = e;
              }, !0)),
            {
              get firstHiddenTime() {
                return j;
              },
            }
          );
        },
        O = {},
        R = (0, h.R)(),
        D = (function () {
          function t(t) {
            var e, n;
            void 0 === t && (t = !1),
              (this._reportAllChanges = t),
              (this._measurements = {}),
              (this._performanceCursor = 0),
              !(0, x.KV)() &&
                (null === (e = R) || void 0 === e ? void 0 : e.performance) &&
                (null === (n = R) || void 0 === n ? void 0 : n.document) &&
                (R.performance.mark &&
                  R.performance.mark("sentry-tracing-init"),
                this._trackCLS(),
                this._trackLCP(),
                this._trackFID());
          }
          return (
            (t.prototype.addPerformanceEntries = function (t) {
              var e = this;
              if (R && R.performance && R.performance.getEntries && w.Z1) {
                d.k.log(
                  "[Tracing] Adding & adjusting spans using Performance API"
                );
                var n,
                  r,
                  i,
                  o,
                  a,
                  s = (0, y.XL)(w.Z1);
                if (R.document && R.document.scripts)
                  for (var u = 0; u < R.document.scripts.length; u++)
                    if ("true" === R.document.scripts[u].dataset.entry) {
                      n = R.document.scripts[u].src;
                      break;
                    }
                if (
                  (R.performance
                    .getEntries()
                    .slice(this._performanceCursor)
                    .forEach(function (u) {
                      var c = (0, y.XL)(u.startTime),
                        l = (0, y.XL)(u.duration);
                      if (!("navigation" === t.op && s + c < t.startTimestamp))
                        switch (u.entryType) {
                          case "navigation":
                            !(function (t, e, n) {
                              A({
                                transaction: t,
                                entry: e,
                                event: "unloadEvent",
                                timeOrigin: n,
                              }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "redirect",
                                  timeOrigin: n,
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "domContentLoadedEvent",
                                  timeOrigin: n,
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "loadEvent",
                                  timeOrigin: n,
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "connect",
                                  timeOrigin: n,
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "secureConnection",
                                  timeOrigin: n,
                                  eventEnd: "connectEnd",
                                  description: "TLS/SSL",
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "fetch",
                                  timeOrigin: n,
                                  eventEnd: "domainLookupStart",
                                  description: "cache",
                                }),
                                A({
                                  transaction: t,
                                  entry: e,
                                  event: "domainLookup",
                                  timeOrigin: n,
                                  description: "DNS",
                                }),
                                (function (t, e, n) {
                                  M(t, {
                                    op: "browser",
                                    description: "request",
                                    startTimestamp:
                                      n + (0, y.XL)(e.requestStart),
                                    endTimestamp: n + (0, y.XL)(e.responseEnd),
                                  }),
                                    M(t, {
                                      op: "browser",
                                      description: "response",
                                      startTimestamp:
                                        n + (0, y.XL)(e.responseStart),
                                      endTimestamp:
                                        n + (0, y.XL)(e.responseEnd),
                                    });
                                })(t, e, n);
                            })(t, u, s),
                              (o = s + (0, y.XL)(u.responseStart)),
                              (a = s + (0, y.XL)(u.requestStart));
                            break;
                          case "mark":
                          case "paint":
                          case "measure":
                            var f = (function (t, e, n, r, i) {
                              var o = i + n,
                                a = o + r;
                              return (
                                M(t, {
                                  description: e.name,
                                  endTimestamp: a,
                                  op: e.entryType,
                                  startTimestamp: o,
                                }),
                                o
                              );
                            })(t, u, c, l, s);
                            void 0 === i &&
                              "sentry-tracing-init" === u.name &&
                              (i = f);
                            var p = N(),
                              h = u.startTime < p.firstHiddenTime;
                            "first-paint" === u.name &&
                              h &&
                              (d.k.log("[Measurements] Adding FP"),
                              (e._measurements.fp = { value: u.startTime }),
                              (e._measurements["mark.fp"] = { value: f })),
                              "first-contentful-paint" === u.name &&
                                h &&
                                (d.k.log("[Measurements] Adding FCP"),
                                (e._measurements.fcp = { value: u.startTime }),
                                (e._measurements["mark.fcp"] = { value: f }));
                            break;
                          case "resource":
                            var v = u.name.replace(R.location.origin, ""),
                              m = (function (t, e, n, r, i, o) {
                                if (
                                  "xmlhttprequest" === e.initiatorType ||
                                  "fetch" === e.initiatorType
                                )
                                  return;
                                var a = {};
                                "transferSize" in e &&
                                  (a["Transfer Size"] = e.transferSize);
                                "encodedBodySize" in e &&
                                  (a["Encoded Body Size"] = e.encodedBodySize);
                                "decodedBodySize" in e &&
                                  (a["Decoded Body Size"] = e.decodedBodySize);
                                var s = o + r,
                                  u = s + i;
                                return (
                                  M(t, {
                                    description: n,
                                    endTimestamp: u,
                                    op: e.initiatorType
                                      ? "resource." + e.initiatorType
                                      : "resource",
                                    startTimestamp: s,
                                    data: a,
                                  }),
                                  u
                                );
                              })(t, u, v, c, l, s);
                            void 0 === r &&
                              (n || "").indexOf(v) > -1 &&
                              (r = m);
                        }
                    }),
                  void 0 !== r &&
                    void 0 !== i &&
                    M(t, {
                      description: "evaluation",
                      endTimestamp: i,
                      op: "script",
                      startTimestamp: r,
                    }),
                  (this._performanceCursor = Math.max(
                    performance.getEntries().length - 1,
                    0
                  )),
                  this._trackNavigator(t),
                  "pageload" === t.op)
                ) {
                  var c = (0, y.XL)(w.Z1);
                  "number" == typeof o &&
                    (d.k.log("[Measurements] Adding TTFB"),
                    (this._measurements.ttfb = {
                      value: 1e3 * (o - t.startTimestamp),
                    }),
                    "number" == typeof a &&
                      a <= o &&
                      (this._measurements["ttfb.requestTime"] = {
                        value: 1e3 * (o - a),
                      })),
                    ["fcp", "fp", "lcp"].forEach(function (n) {
                      if (e._measurements[n] && !(c >= t.startTimestamp)) {
                        var r = e._measurements[n].value,
                          i = c + (0, y.XL)(r),
                          o = Math.abs(1e3 * (i - t.startTimestamp)),
                          a = o - r;
                        d.k.log(
                          "[Measurements] Normalized " +
                            n +
                            " from " +
                            r +
                            " to " +
                            o +
                            " (" +
                            a +
                            ")"
                        ),
                          (e._measurements[n].value = o);
                      }
                    }),
                    this._measurements["mark.fid"] &&
                      this._measurements.fid &&
                      M(t, {
                        description: "first input delay",
                        endTimestamp:
                          this._measurements["mark.fid"].value +
                          (0, y.XL)(this._measurements.fid.value),
                        op: "web.vitals",
                        startTimestamp: this._measurements["mark.fid"].value,
                      }),
                    "fcp" in this._measurements ||
                      delete this._measurements.cls,
                    t.setMeasurements(this._measurements),
                    this._tagMetricInfo(t),
                    t.setTag("sentry_reportAllChanges", this._reportAllChanges);
                }
              }
            }),
            (t.prototype._tagMetricInfo = function (t) {
              this._lcpEntry &&
                (d.k.log("[Measurements] Adding LCP Data"),
                this._lcpEntry.element &&
                  t.setTag("lcp.element", T(this._lcpEntry.element)),
                this._lcpEntry.id && t.setTag("lcp.id", this._lcpEntry.id),
                this._lcpEntry.url &&
                  t.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200)),
                t.setTag("lcp.size", this._lcpEntry.size)),
                this._clsEntry &&
                  this._clsEntry.sources &&
                  (d.k.log("[Measurements] Adding CLS Data"),
                  this._clsEntry.sources.forEach(function (e, n) {
                    return t.setTag("cls.source." + (n + 1), T(e.node));
                  }));
            }),
            (t.prototype._trackCLS = function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = this;
              (t = function (t) {
                var e = t.entries.pop();
                e &&
                  (d.k.log("[Measurements] Adding CLS"),
                  (u._measurements.cls = { value: t.value }),
                  (u._clsEntry = e));
              }),
                (r = C("CLS", 0)),
                (i = 0),
                (o = []),
                (s = E(
                  "layout-shift",
                  (a = function (t) {
                    if (t && !t.hadRecentInput) {
                      var e = o[0],
                        a = o[o.length - 1];
                      i &&
                      0 !== o.length &&
                      t.startTime - a.startTime < 1e3 &&
                      t.startTime - e.startTime < 5e3
                        ? ((i += t.value), o.push(t))
                        : ((i = t.value), (o = [t])),
                        i > r.value &&
                          ((r.value = i), (r.entries = o), n && n());
                    }
                  })
                )) &&
                  ((n = S(t, r, e)),
                  L(function () {
                    s.takeRecords().map(a), n(!0);
                  }));
            }),
            (t.prototype._trackNavigator = function (t) {
              var e = R.navigator;
              if (e) {
                var n = e.connection;
                n &&
                  (n.effectiveType &&
                    t.setTag("effectiveConnectionType", n.effectiveType),
                  n.type && t.setTag("connectionType", n.type),
                  I(n.rtt) &&
                    (this._measurements["connection.rtt"] = { value: n.rtt }),
                  I(n.downlink) &&
                    (this._measurements["connection.downlink"] = {
                      value: n.downlink,
                    })),
                  I(e.deviceMemory) &&
                    t.setTag("deviceMemory", String(e.deviceMemory)),
                  I(e.hardwareConcurrency) &&
                    t.setTag(
                      "hardwareConcurrency",
                      String(e.hardwareConcurrency)
                    );
              }
            }),
            (t.prototype._trackLCP = function () {
              var t = this;
              !(function (t, e) {
                var n,
                  r = N(),
                  i = C("LCP"),
                  o = function (t) {
                    var e = t.startTime;
                    e < r.firstHiddenTime && ((i.value = e), i.entries.push(t)),
                      n && n();
                  },
                  a = E("largest-contentful-paint", o);
                if (a) {
                  n = S(t, i, e);
                  var s = function () {
                    O[i.id] ||
                      (a.takeRecords().map(o),
                      a.disconnect(),
                      (O[i.id] = !0),
                      n(!0));
                  };
                  ["keydown", "click"].forEach(function (t) {
                    addEventListener(t, s, { once: !0, capture: !0 });
                  }),
                    L(s, !0);
                }
              })(function (e) {
                var n = e.entries.pop();
                if (n) {
                  var r = (0, y.XL)(w.Z1),
                    i = (0, y.XL)(n.startTime);
                  d.k.log("[Measurements] Adding LCP"),
                    (t._measurements.lcp = { value: e.value }),
                    (t._measurements["mark.lcp"] = { value: r + i }),
                    (t._lcpEntry = n);
                }
              }, this._reportAllChanges);
            }),
            (t.prototype._trackFID = function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a,
                s = this;
              (t = function (t) {
                var e = t.entries.pop();
                if (e) {
                  var n = (0, y.XL)(w.Z1),
                    r = (0, y.XL)(e.startTime);
                  d.k.log("[Measurements] Adding FID"),
                    (s._measurements.fid = { value: t.value }),
                    (s._measurements["mark.fid"] = { value: n + r });
                }
              }),
                (r = N()),
                (i = C("FID")),
                (a = E(
                  "first-input",
                  (o = function (t) {
                    n &&
                      t.startTime < r.firstHiddenTime &&
                      ((i.value = t.processingStart - t.startTime),
                      i.entries.push(t),
                      n(!0));
                  })
                )) &&
                  ((n = S(t, i, e)),
                  L(function () {
                    a.takeRecords().map(o), a.disconnect();
                  }, !0));
            }),
            t
          );
        })();
      function A(t) {
        var e = t.transaction,
          n = t.entry,
          r = t.event,
          i = t.timeOrigin,
          o = t.eventEnd,
          a = t.description,
          s = o ? n[o] : n[r + "End"],
          u = n[r + "Start"];
        u &&
          s &&
          M(e, {
            op: "browser",
            description: null != a ? a : r,
            startTimestamp: i + (0, y.XL)(u),
            endTimestamp: i + (0, y.XL)(s),
          });
      }
      function M(t, e) {
        var n = e.startTimestamp,
          r = (0, u._T)(e, ["startTimestamp"]);
        return (
          n && t.startTimestamp > n && (t.startTimestamp = n),
          t.startChild((0, u.pi)({ startTimestamp: n }, r))
        );
      }
      function I(t) {
        return "number" == typeof t && isFinite(t);
      }
      function H(t, e) {
        return (
          !!(0, _.HD)(t) &&
          ((0, _.Kj)(e)
            ? e.test(t)
            : "string" == typeof e && -1 !== t.indexOf(e))
        );
      }
      var P = n(8886),
        B = {
          traceFetch: !0,
          traceXHR: !0,
          tracingOrigins: ["localhost", /^\//],
        };
      function q(t) {
        var e = (0, u.pi)((0, u.pi)({}, B), t),
          n = e.traceFetch,
          r = e.traceXHR,
          i = e.tracingOrigins,
          o = e.shouldCreateSpanForRequest,
          a = {},
          s = function (t) {
            if (a[t]) return a[t];
            var e = i;
            return (
              (a[t] =
                e.some(function (e) {
                  return H(t, e);
                }) && !H(t, "sentry_key")),
              a[t]
            );
          },
          c = s;
        "function" == typeof o &&
          (c = function (t) {
            return s(t) && o(t);
          });
        var l = {};
        n &&
          (0, P.o)({
            callback: function (t) {
              !(function (t, e, n) {
                if (!(0, y.zu)() || !t.fetchData || !e(t.fetchData.url)) return;
                if (t.endTimestamp && t.fetchData.__span) {
                  return void (
                    (i = n[t.fetchData.__span]) &&
                    (t.response
                      ? i.setHttpStatus(t.response.status)
                      : t.error && i.setStatus(m.p.InternalError),
                    i.finish(),
                    delete n[t.fetchData.__span])
                  );
                }
                var r = (0, y.x1)();
                if (r) {
                  var i = r.startChild({
                    data: (0, u.pi)((0, u.pi)({}, t.fetchData), {
                      type: "fetch",
                    }),
                    description: t.fetchData.method + " " + t.fetchData.url,
                    op: "http.client",
                  });
                  (t.fetchData.__span = i.spanId), (n[i.spanId] = i);
                  var o = (t.args[0] = t.args[0]),
                    a = (t.args[1] = t.args[1] || {}),
                    s = a.headers;
                  (0, _.V9)(o, Request) && (s = o.headers),
                    s
                      ? "function" == typeof s.append
                        ? s.append("sentry-trace", i.toTraceparent())
                        : (s = Array.isArray(s)
                            ? (0, u.fl)(s, [
                                ["sentry-trace", i.toTraceparent()],
                              ])
                            : (0, u.pi)((0, u.pi)({}, s), {
                                "sentry-trace": i.toTraceparent(),
                              }))
                      : (s = { "sentry-trace": i.toTraceparent() }),
                    (a.headers = s);
                }
              })(t, c, l);
            },
            type: "fetch",
          }),
          r &&
            (0, P.o)({
              callback: function (t) {
                !(function (t, e, n) {
                  var r, i;
                  if (
                    !(0, y.zu)() ||
                    (null === (r = t.xhr) || void 0 === r
                      ? void 0
                      : r.__sentry_own_request__) ||
                    !(null === (i = t.xhr) || void 0 === i
                      ? void 0
                      : i.__sentry_xhr__) ||
                    !e(t.xhr.__sentry_xhr__.url)
                  )
                    return;
                  var o = t.xhr.__sentry_xhr__;
                  if (t.endTimestamp && t.xhr.__sentry_xhr_span_id__) {
                    return void (
                      (s = n[t.xhr.__sentry_xhr_span_id__]) &&
                      (s.setHttpStatus(o.status_code),
                      s.finish(),
                      delete n[t.xhr.__sentry_xhr_span_id__])
                    );
                  }
                  var a = (0, y.x1)();
                  if (a) {
                    var s = a.startChild({
                      data: (0, u.pi)((0, u.pi)({}, o.data), {
                        type: "xhr",
                        method: o.method,
                        url: o.url,
                      }),
                      description: o.method + " " + o.url,
                      op: "http.client",
                    });
                    if (
                      ((t.xhr.__sentry_xhr_span_id__ = s.spanId),
                      (n[t.xhr.__sentry_xhr_span_id__] = s),
                      t.xhr.setRequestHeader)
                    )
                      try {
                        t.xhr.setRequestHeader(
                          "sentry-trace",
                          s.toTraceparent()
                        );
                      } catch (t) {}
                  }
                })(t, c, l);
              },
              type: "xhr",
            });
      }
      var F = (0, h.R)();
      var z = (0, u.pi)(
          {
            idleTimeout: v.nT,
            markBackgroundTransactions: !0,
            maxTransactionDuration: 600,
            routingInstrumentation: function (t, e, n) {
              if (
                (void 0 === e && (e = !0),
                void 0 === n && (n = !0),
                F && F.location)
              ) {
                var r,
                  i = F.location.href;
                e && (r = t({ name: F.location.pathname, op: "pageload" })),
                  n &&
                    (0, P.o)({
                      callback: function (e) {
                        var n = e.to,
                          o = e.from;
                        void 0 === o && i && -1 !== i.indexOf(n)
                          ? (i = void 0)
                          : o !== n &&
                            ((i = void 0),
                            r &&
                              (d.k.log(
                                "[Tracing] Finishing current transaction with op: " +
                                  r.op
                              ),
                              r.finish()),
                            (r = t({
                              name: F.location.pathname,
                              op: "navigation",
                            })));
                      },
                      type: "history",
                    });
              } else
                d.k.warn(
                  "Could not initialize routing instrumentation due to invalid location"
                );
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
          },
          B
        ),
        W = (function () {
          function t(e) {
            (this.name = t.id),
              (this._emitOptionsWarning = !1),
              (this._configuredIdleTimeout = void 0);
            var n = B.tracingOrigins;
            e &&
              ((this._configuredIdleTimeout = e.idleTimeout),
              e.tracingOrigins &&
              Array.isArray(e.tracingOrigins) &&
              0 !== e.tracingOrigins.length
                ? (n = e.tracingOrigins)
                : (this._emitOptionsWarning = !0)),
              (this.options = (0, u.pi)((0, u.pi)((0, u.pi)({}, z), e), {
                tracingOrigins: n,
              }));
            var r = this.options._metricOptions;
            this._metrics = new D(r && r._reportAllChanges);
          }
          return (
            (t.prototype.setupOnce = function (t, e) {
              var n = this;
              (this._getCurrentHub = e),
                this._emitOptionsWarning &&
                  (d.k.warn(
                    "[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."
                  ),
                  d.k.warn(
                    "[Tracing] We added a reasonable default for you: " +
                      B.tracingOrigins
                  ));
              var r = this.options,
                i = r.routingInstrumentation,
                o = r.startTransactionOnLocationChange,
                a = r.startTransactionOnPageLoad,
                s = r.markBackgroundTransactions,
                u = r.traceFetch,
                c = r.traceXHR,
                l = r.tracingOrigins,
                f = r.shouldCreateSpanForRequest;
              i(
                function (t) {
                  return n._createRouteTransaction(t);
                },
                a,
                o
              ),
                s &&
                  (b && b.document
                    ? b.document.addEventListener(
                        "visibilitychange",
                        function () {
                          var t = (0, y.x1)();
                          b.document.hidden &&
                            t &&
                            (d.k.log(
                              "[Tracing] Transaction: " +
                                m.p.Cancelled +
                                " -> since tab moved to the background, op: " +
                                t.op
                            ),
                            t.status || t.setStatus(m.p.Cancelled),
                            t.setTag("visibilitychange", "document.hidden"),
                            t.setTag(g.d, g.x[2]),
                            t.finish());
                        }
                      )
                    : d.k.warn(
                        "[Tracing] Could not set up background tab detection due to lack of global document"
                      )),
                q({
                  traceFetch: u,
                  traceXHR: c,
                  tracingOrigins: l,
                  shouldCreateSpanForRequest: f,
                });
            }),
            (t.prototype._createRouteTransaction = function (t) {
              var e = this;
              if (this._getCurrentHub) {
                var n = this.options,
                  r = n.beforeNavigate,
                  i = n.idleTimeout,
                  o = n.maxTransactionDuration,
                  a =
                    "pageload" === t.op
                      ? (function () {
                          var t =
                            ((e = "sentry-trace"),
                            (n = (0, h.R)().document.querySelector(
                              "meta[name=" + e + "]"
                            )),
                            n ? n.getAttribute("content") : null);
                          var e, n;
                          if (t) return (0, y.qG)(t);
                          return;
                        })()
                      : void 0,
                  s = (0, u.pi)((0, u.pi)((0, u.pi)({}, t), a), {
                    trimEnd: !0,
                  }),
                  c = "function" == typeof r ? r(s) : s,
                  l =
                    void 0 === c
                      ? (0, u.pi)((0, u.pi)({}, s), { sampled: !1 })
                      : c;
                !1 === l.sampled &&
                  d.k.log(
                    "[Tracing] Will not send " +
                      l.op +
                      " transaction because of beforeNavigate."
                  ),
                  d.k.log(
                    "[Tracing] Starting " + l.op + " transaction on scope"
                  );
                var f = this._getCurrentHub(),
                  v = (0, h.R)().location,
                  g = (0, p.lb)(f, l, i, !0, { location: v });
                return (
                  g.registerBeforeFinishCallback(function (t, n) {
                    e._metrics.addPerformanceEntries(t),
                      (function (t, e, n) {
                        var r = n - e.startTimestamp;
                        n &&
                          (r > t || r < 0) &&
                          (e.setStatus(m.p.DeadlineExceeded),
                          e.setTag("maxTransactionDurationExceeded", "true"));
                      })((0, y.WB)(o), t, n);
                  }),
                  g.setTag("idleTimeout", this._configuredIdleTimeout),
                  g
                );
              }
              d.k.warn(
                "[Tracing] Did not create " +
                  t.op +
                  " transaction because _getCurrentHub is invalid."
              );
            }),
            (t.id = "BrowserTracing"),
            t
          );
        })();
      (0, p.ro)();
      var Y = (function () {
        function t() {
          o(this, t), (this.started = !1);
        }
        return (
          s(t, [
            {
              key: "start",
              value: function () {
                this.started ||
                  ((this.started = !0),
                  window.chrome.storage.sync.get(
                    "id",
                    (function () {
                      var t = e(
                        i().mark(function t(e) {
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  ({
                                    // dsn: "https://c1449689dfc74cd5b60cb035157c3d79@o1058504.ingest.sentry.io/6046205",
                                    dsn: "https://c1449689dfc74cd5b60cb035157c3d79@o1058504.ingest.sentry.io/6046205",
                                    release:
                                      window.chrome.runtime.getManifest().version,
                                    environment: "production",
                                    integrations: [new W()],
                                    tracesSampleRate: 0.001,
                                    sampleRate: 1,
                                    whitelistUrls: [chrome.runtime.getURL("/")],
                                    initialScope: { user: { id: e.id } },
                                  });
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ),
                  window.chrome.runtime.onMessage.addListener(
                    (function () {
                      var t = e(
                        i().mark(function t(e, n, r) {
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  "GetTroubleshootData" === e.action &&
                                    r({
                                      url: window.location.href,
                                      html: document.body.innerHTML,
                                    });
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e, n, r) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ));
              },
            },
            {
              key: "report",
              value: function (t) {
                t instanceof Error ? f(t) : f(new Error(t));
              },
            },
          ]),
          t
        );
      })();
      var U = (function () {
        function t() {
          o(this, t), window === window.top && function () {
            var t = e(
              i().mark(function t(e, n, r) {
                var o, a;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (t.t0 = e.type),
                          (t.next =
                            "CopyToClipboardFromBackground" === t.t0
                              ? 4
                              : 11);
                        break;
                      case 4:
                        return (
                          (t.next = 7),
                          fetch(e.canvas).then(function (t) {
                            return t.blob();
                          })
                        );
                      case 7:
                        return (
                          (o = t.sent),
                          (a = new ClipboardItem(
                            ((n = {}),
                            (r = o.type),
                            (i = o),
                            r in n
                              ? Object.defineProperty(n, r, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (n[r] = i),
                            n)
                          )),
                          t.abrupt(
                            "return",
                            navigator.clipboard
                              .write([a])
                              .then(function () {
                                var t =
                                  document.getElementById(
                                    "copiedToClipboard"
                                  );
                                t && t.parentNode.removeChild(t);
                                var e = document.createElement("div");
                                return (
                                  (e.id = "copiedToClipboard"),
                                  document.body.appendChild(e),
                                  "done"
                                );
                              })
                              .catch(function (t) {
                                throw new Error("Failed:", t);
                              })
                          )
                        );
                      case 11:
                      case 12:
                      case "end":
                        return t.stop();
                    }
                  var n, r, i;
                }, t);
              })
            );
            return function (e, n, r) {
              return t.apply(this, arguments);
            };
          };
        }
        var n;
        return (
          s(t, [
            {
              key: "sendImage",
              value:
                ((n = e(
                  i().mark(function t(e) {
                    var n;
                    return i().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (n = {
                              type: "CopyToClipboardToBackground",
                              canvas: e.toDataURL(),
                              pageType: window.location.protocol,
                            }),
                              window.chrome.runtime.sendMessage(n);
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "receiveImage",


              },
            ,
          ]),
          t
        );
      })();
      function $(t) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          $(t)
        );
      }
      function X(t, e, n) {
        return (
          (X =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (t, e, n) {
                  var r = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = $(t));

                    );
                    return t;
                  })(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get ? i.get.call(n) : i.value;
                  }
                }),
          X(t, e, n || t)
        );
      }
      function V(t, e) {
        return (
          (V =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          V(t, e)
        );
      }
      function G(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && V(t, e);
      }
      function Z(t) {
        return (
          (Z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Z(t)
        );
      }
      function J(t, e) {
        if (e && ("object" === Z(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      }
      var Q = (function () {
        function t() {
          o(this, t),
            (this.video = null),
            (this.element = null),
            (this.wasPaused = null),
            (this.tempHolder = null),
            (this.wrapper = null),
            (this.rememberPlace = null),
            this.init(),
            this.pauseVideo();
        }
        var n, r;
        return (
          s(t, [
            {
              key: "init",
              value: function () {
                return (
                  (this.video = document.querySelectorAll("Video")[0]),
                  (this.element = this.video),
                  null
                );
              },
            },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.prepTempHolder("generic"),
                                (t.next = 3),
                                this.moveElement()
                              );
                            case 3:
                              return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "prepTempHolder",
              value: function (t) {
                (this.tempHolder = document.createElement("div")),
                  (this.tempHolder.id = "ssTempHolder"),
                  (this.tempHolder.style.maxWidth =
                    this.video.videoWidth + "px"),
                  (this.tempHolder.style.maxHeight =
                    this.video.videoHeight + "px"),
                  this.tempHolder.classList.add(t),
                  (this.wrapper = document.webkitFullscreenElement),
                  null == this.wrapper && (this.wrapper = document.body),
                  this.wrapper.classList.add("ssWrapper"),
                  this.wrapper.prepend(this.tempHolder),
                  null === this.rememberPlace &&
                    (this.rememberPlace = document.createElement("div")),
                  (this.rememberPlace.id = "ssRememberPlace");
              },
            },
            {
              key: "moveElement",
              value:
                ((n = e(
                  i().mark(function t() {
                    var e = this;
                    return i().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(function (t) {
                                var n = new MutationObserver(function (e) {
                                  n.disconnect(),
                                    requestAnimationFrame(function () {
                                      requestAnimationFrame(function () {
                                        t("done");
                                      });
                                    });
                                });
                                n.observe(e.tempHolder, {
                                  attributes: !0,
                                  childList: !0,
                                  characterData: !0,
                                  subtree: !0,
                                }),
                                  e.element.parentNode.insertBefore(
                                    e.rememberPlace,
                                    e.element
                                  ),
                                  e.tempHolder.append(e.element);
                              })
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value: function () {
                return (
                  this.rememberPlace.parentNode.insertBefore(
                    this.element,
                    this.rememberPlace
                  ),
                  this.tempHolder.parentNode.removeChild(this.tempHolder),
                  null
                );
              },
            },
            {
              key: "pauseVideo",
              value: function () {
                this.video &&
                  ((this.wasPaused = this.video.paused),
                  !1 === this.video.paused && this.video.pause());
              },
            },
            {
              key: "playVideo",
              value: function () {
                !1 === this.wasPaused && this.video.play();
              },
            },
            {
              key: "currentTime",
              get: function () {
                return this.video.currentTime;
              },
            },
            {
              key: "height",
              get: function () {
                return this.video.offsetHeight;
              },
            },
            {
              key: "width",
              get: function () {
                return this.video.offsetWidth;
              },
            },
            {
              key: "offsetX",
              get: function () {
                return this.video.offsetLeft;
              },
            },
            {
              key: "offsetY",
              get: function () {
                return this.video.offsetTop;
              },
            },
          ]),
          t
        );
      })();
      function K(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var tt = (function (t) {
        G(u, t);
        var n,
          r,
          a = K(u);
        function u() {
          var t;
          return o(this, u), (t = a.call(this)).init(), t;
        }
        return (
          s(u, [
            {
              key: "init",
              value: function () {
                (this.video =
                  document.querySelectorAll("Video")[0] || this.video),
                  this.video && (this.element = this.video);
              },
            },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                X($(u.prototype), "prepTempHolder", this).call(
                                  this,
                                  "netflix"
                                ),
                                (t.next = 3),
                                X($(u.prototype), "moveElement", this).call(
                                  this
                                )
                              );
                            case 3:
                              return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value:
                ((n = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                X($(u.prototype), "resetTabCapture", this).call(
                                  this
                                )
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          u
        );
      })(Q);
      function et(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var nt = (function (t) {
        G(u, t);
        var n,
          r,
          a = et(u);
        function u() {
          var t;
          return o(this, u), (t = a.call(this)).init(), t;
        }
        return (
          s(u, [
            {
              key: "init",
              value: function () {
                try {
                  (this.video =
                    document.querySelectorAll("#dv-web-player Video")[0] ||
                    this.video),
                    (this.element = this.video.parentNode);
                } catch (t) {}
              },
            },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                X($(u.prototype), "prepTempHolder", this).call(
                                  this,
                                  "amazon"
                                ),
                                (t.next = 3),
                                X($(u.prototype), "moveElement", this).call(
                                  this
                                )
                              );
                            case 3:
                              return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value:
                ((n = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                X($(u.prototype), "resetTabCapture", this).call(
                                  this
                                )
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          u
        );
      })(Q);
      function rt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var it = (function (t) {
        G(u, t);
        var n,
          r,
          a = rt(u);
        function u() {
          var t;
          return o(this, u), (t = a.call(this)).init(), t;
        }
        return (
          s(u, [
            {
              key: "init",
              value: function () {
                try {
                  (this.video =
                    document.querySelectorAll("#content-video-player")[0] ||
                    this.video),
                    (this.element = this.video);
                } catch (t) {}
              },
            },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                X($(u.prototype), "prepTempHolder", this).call(
                                  this,
                                  "hulu"
                                ),
                                (t.next = 3),
                                X($(u.prototype), "moveElement", this).call(
                                  this
                                )
                              );
                            case 3:
                              return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value:
                ((n = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                X($(u.prototype), "resetTabCapture", this).call(
                                  this
                                )
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          u
        );
      })(Q);
      function ot(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var at = (function (t) {
        G(u, t);
        var n,
          r,
          a = ot(u);
        function u() {
          var t;
          return o(this, u), (t = a.call(this)).init(), t;
        }
        return (
          s(u, [
            {
              key: "init",
              value: function () {
                (this.video =
                  document.querySelectorAll("Video")[0] || this.video),
                  this.video && (this.element = this.video);
              },
            },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                X($(u.prototype), "prepTempHolder", this).call(
                                  this,
                                  "hbo"
                                ),
                                (t.next = 3),
                                X($(u.prototype), "moveElement", this).call(
                                  this
                                )
                              );
                            case 3:
                              return t.abrupt("return", t.sent);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value:
                ((n = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                X($(u.prototype), "resetTabCapture", this).call(
                                  this
                                )
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          u
        );
      })(Q);
      function st(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var ut = (function (t) {
        G(u, t);
        var n,
          r,
          a = st(u);
        function u(t) {
          var e;
          return (
            o(this, u), ((e = a.call(this)).video = t), (e.element = e.video), e
          );
        }
        return (
          s(u, [
            { key: "update", value: function () {} },
            { key: "init", value: function () {} },
            {
              key: "prepTabCapture",
              value:
                ((r = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                X($(u.prototype), "prepTempHolder", this).call(
                                  this,
                                  "allSites"
                                ),
                                (this.tempHolder.style.maxWidth =
                                  this.video.videoWidth + "px"),
                                (this.tempHolder.style.maxHeight =
                                  this.video.videoHeight + "px"),
                                (t.next = 5),
                                X($(u.prototype), "moveElement", this).call(
                                  this
                                )
                              );
                            case 5:
                              return t.abrupt("return", t.sent);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "resetTabCapture",
              value:
                ((n = e(
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                X($(u.prototype), "resetTabCapture", this).call(
                                  this
                                )
                              );
                            case 2:
                              return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          u
        );
      })(Q);
      function ct(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var lt = (function (t) {
          G(n, t);
          var e = ct(n);
          function n() {
            var t;
            return o(this, n), (t = e.call(this)).init(), t;
          }
          return (
            s(n, [
              {
                key: "init",
                value: function () {
                  (this.video =
                    document.querySelectorAll(
                      "ytd-watch-flexy Video, .ytp-embed Video"
                    )[0] || this.video),
                    this.video && (this.element = this.video);
                },
              },
            ]),
            n
          );
        })(Q),
        ft = (function () {
          function t(e, n) {
            return o(this, t), (this.handler = this.init(e, n)), this.handler;
          }
          return (
            s(t, [
              {
                key: "init",
                value: function (t, e) {
                  switch (t) {
                    case "youtube":
                      return new lt();
                    case "netflix":
                      return new tt();
                    case "vimeo":
                      return new Q();
                    case "hulu":
                      return new it();
                    case "amazon":
                      return new nt();
                    case "hbo":
                      return new at();
                    default:
                      return new ut(e);
                  }
                },
              },
            ]),
            t
          );
        })(),
        pt = (function () {
          function t(e) {
            o(this, t),
              (this.enableRefresh = !0),
              (this.observer = null),
              this.init(e);
          }
          return (
            s(t, [
              {
                key: "init",
                value: function (t) {
                  if (document.body) {
                    this.observer = new MutationObserver(function (e) {
                      if (
                        (void 0 === this.enableRefresh &&
                          (this.enableRefresh = !0),
                        !0 === this.enableRefresh)
                      ) {
                        t(), (this.enableRefresh = !1);
                        var n = this;
                        setTimeout(function () {
                          n.enableRefresh = !0;
                        }, 500);
                      }
                    });
                    this.observer.observe(document.body, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    });
                  }
                },
              },
              {
                key: "remove",
                value: function () {
                  var t;
                  null === (t = this.observer) ||
                    void 0 === t ||
                    t.disconnect();
                },
              },
            ]),
            t
          );
        })(),
        dt = n(9755),
        ht = n.n(dt),
        vt = (function () {
          function t(e) {
            o(this, t),
              (this.button = null),
              (this.buttonClickRef = null),
              (this.handleButtonClick = e);
          }
          return (
            s(t, [
              {
                key: "additionalSetup",
                value: function () {
                  this.button.innerHTML =
                    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50"><path class="st0" fill="#FFFFFF" style="fill:#FFFFFF" d="M17.6,4c-0.7,0-1.2,0.4-1.4,0.9l-2.8,5.5h-8c-3,0-5.4,2.5-5.4,5.5v24.5c0,3,2.5,5.5,5.4,5.5h39.2c3,0,5.4-2.5,5.4-5.5V16c0-3-2.5-5.5-5.4-5.5h-8L33.8,5c-0.3-0.6-0.9-1-1.5-1H17.6L17.6,4z M18.6,7.2h12.5l2.8,5.5c0.3,0.5,0.8,0.9,1.4,0.9h9c1.2,0,2.2,1,2.2,2.2v24.5c0,1.3-1,2.2-2.2,2.2H5.3c-1.2,0-2.2-1-2.2-2.2V15.9c0-1.3,1-2.2,2.2-2.2h9c0.6,0,1.2-0.4,1.4-0.9L18.6,7.2z M24.8,17.7c-5.8,0-10.4,4.7-10.4,10.4c0,5.8,4.7,10.4,10.4,10.4c5.8,0,10.4-4.7,10.4-10.4S30.7,17.7,24.8,17.7z M24.8,20.9c4,0,7.2,3.2,7.2,7.2s-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2C17.6,24.2,20.8,20.9,24.8,20.9z"/></svg>';
                  var t = this.buttonClick.bind(this);
                  this.button.addEventListener("click", t);
                },
              },
              {
                key: "buttonClick",
                value: function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.handleButtonClick(this.button);
                },
              },
              {
                key: "update",
                value: function () {
                  this.playerControls &&
                    this.button &&
                    (ht().contains(this.playerControls, this.button) ||
                      this.refreshControls());
                },
              },
              {
                key: "delete",
                value: function () {
                  ht()(this.button).remove();
                },
              },
            ]),
            t
          );
        })();
      function mt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var yt = (function (t) {
        G(n, t);
        var e = mt(n);
        function n(t) {
          var r;
          return (
            o(this, n), (r = e.call(this, t)).init(), r.additionalSetup(), r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("button")),
                  (this.button.className = "ytp-button ssBtnYouTube");
              },
            },
            {
              key: "refreshControls",
              value: function () {
                this.playerControls.before(this.button);
              },
            },
            {
              key: "playerControls",
              get: function () {
                return ht()(
                  "ytd-watch-flexy .ytp-right-controls, .ytp-embed .ytp-right-controls"
                )
                  .last()
                  .children()
                  .first();
              },
            },
          ]),
          n
        );
      })(vt);
      function gt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var bt = (function (t) {
        G(n, t);
        var e = gt(n);
        function n(t) {
          var r;
          return (
            o(this, n),
            ((r = e.call(this, t)).buttonWrap = null),
            r.init(),
            r.additionalSetup(),
            r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.buttonWrap = document.createElement("div")),
                  (this.buttonWrap.className = "box screenshotter ssBtnVimeo"),
                  (this.button = document.createElement("button")),
                  (this.button.type = "button"),
                  (this.button.className = "rounded-box"),
                  this.buttonWrap.append(this.button);
              },
            },
            {
              key: "refreshControls",
              value: function () {
                this.playerControls.after(this.buttonWrap);
              },
            },
            {
              key: "playerControls",
              get: function () {
                return ht()(".vp-sidedock").children().last();
              },
            },
          ]),
          n
        );
      })(vt);
      function xt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var wt = (function (t) {
        G(n, t);
        var e = xt(n);
        function n(t) {
          var r;
          return (
            o(this, n), (r = e.call(this, t)).init(), r.additionalSetup(), r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("div")),
                  (this.button.className = "ltr-1dcjcj4 ssBtnNetflix");
              },
            },
            {
              key: "refreshControls",
              value: function () {
                var t;
                null === (t = this.playerControls) ||
                  void 0 === t ||
                  t.before(this.button);
              },
            },
            {
              key: "playerControls",
              get: function () {
                var t;
                return (t = ht()('[data-uia="video-title"]')
                  .parent()
                  .next()
                  .children()
                  .eq(1)).length ||
                  (t = ht()('[data-uia="report-a-problem-button"]')).length
                  ? t
                  : null;
              },
            },
          ]),
          n
        );
      })(vt);
      function _t(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var Tt = (function (t) {
        G(n, t);
        var e = _t(n);
        function n(t) {
          var r;
          return (
            o(this, n), (r = e.call(this, t)).init(), r.additionalSetup(), r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("button")),
                  (this.button.className = "ssBtnAmazon");
              },
            },
            {
              key: "refreshControls",
              value: function () {
                var t;
                null === (t = this.playerControls) ||
                  void 0 === t ||
                  t.before(this.button);
              },
            },
            {
              key: "playerControls",
              get: function () {
                try {
                  return ht()(".atvwebplayersdk-hideabletopbuttons-container")
                    .children()
                    .children()
                    .first();
                } catch (t) {
                  return null;
                }
              },
            },
          ]),
          n
        );
      })(vt);
      function kt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var St = (function (t) {
        G(n, t);
        var e = kt(n);
        function n(t) {
          var r;
          return (
            o(this, n), (r = e.call(this, t)).init(), r.additionalSetup(), r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("div")),
                  (this.button.className = "ssBtnHulu");
              },
            },
            {
              key: "refreshControls",
              value: function () {
                this.playerControls.before(this.button);
              },
            },
            {
              key: "playerControls",
              get: function () {
                try {
                  return ht()(".BottomUiControls__playerSettingsGroup")
                    .children()
                    .first();
                } catch (t) {
                  return null;
                }
              },
            },
          ]),
          n
        );
      })(vt);
      function Ct(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var Et = (function (t) {
        G(n, t);
        var e = Ct(n);
        function n(t) {
          var r;
          return (
            o(this, n), (r = e.call(this, t)).init(), r.additionalSetup(), r
          );
        }
        return (
          s(n, [
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("div")),
                  (this.button.className = "ssBtnHBO");
              },
            },
            {
              key: "refreshControls",
              value: function () {
                this.playerControls.before(this.button);
              },
            },
            {
              key: "playerControls",
              get: function () {
                var t;
                try {
                  t = ht()('[aria-label="Volume slider"]')
                    .parent()
                    .parent()
                    .parent();
                } catch (t) {}
                return t;
              },
            },
          ]),
          n
        );
      })(vt);
      function Lt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = $(t);
          if (e) {
            var i = $(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return J(this, n);
        };
      }
      var jt = (function (t) {
        G(n, t);
        var e = Lt(n);
        function n(t, r) {
          var i;
          return (
            o(this, n),
            ((i = e.call(this)).handleButtonClick = i.buttonClicked),
            (i.buttonClickRef = r),
            (i.video = t),
            (i.iconDimmer = null),
            i.init(),
            i.additionalSetup(),
            i
          );
        }
        return (
          s(n, [
            {
              key: "buttonClicked",
              value: function () {
                this.buttonClickRef(this.video);
              },
            },
            {
              key: "init",
              value: function () {
                (this.button = document.createElement("button")),
                  (this.button.className = "ssBtnDefault"),
                  this.videoContainer.prepend(this.button);
              },
            },
            {
              key: "iconFadeOut",
              value: function (t) {
                clearInterval(this.iconDimmer),
                  this.button.classList.remove("fade");
                var e = this;
                this.iconDimmer = setInterval(function () {
                  e.video.paused || e.button.classList.add("fade"),
                    clearInterval(e.iconDimmer);
                }, 250);
              },
            },
            {
              key: "videoContainer",
              get: function () {
                return this.video.parentNode;
              },
            },
          ]),
          n
        );
      })(vt);
      function Nt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Ot(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ot(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function Ot(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Rt = (function () {
          function t(e) {
            o(this, t),
              (this.handleButtonClick = e),
              (this.knownVideos = []),
              (this.newBtn = null);
          }
          return (
            s(t, [
              { key: "init", value: function () {} },
              {
                key: "update",
                value: function () {
                  if (this.allVideos && 0 !== this.allVideos.length) {
                    var t,
                      e = Nt(this.allVideos);
                    try {
                      for (e.s(); !(t = e.n()).done; ) {
                        var n,
                          r = t.value,
                          i = !0,
                          o = Nt(this.knownVideos);
                        try {
                          for (o.s(); !(n = o.n()).done; ) {
                            n.value === r && (i = !1);
                          }
                        } catch (t) {
                          o.e(t);
                        } finally {
                          o.f();
                        }
                        !0 === i &&
                          (this.newBtn = new jt(r, this.handleButtonClick)),
                          this.knownVideos.push(r);
                      }
                    } catch (t) {
                      e.e(t);
                    } finally {
                      e.f();
                    }
                  }
                },
              },
              {
                key: "delete",
                value: function () {
                  var t;
                  null === (t = this.newBtn) || void 0 === t || t.delete();
                },
              },
              { key: "refreshControls", value: function (t) {} },
              {
                key: "allVideos",
                get: function () {
                  return document.querySelectorAll("Video");
                },
              },
            ]),
            t
          );
        })(),
        Dt = (function () {
          function t(e, n) {
            o(this, t),
              (this.currentSite = null),
              (this.button = null),
              (this.playerControls = null),
              (this.handlePageUpdate = null),
              (this.bug = new Y()),
              this.init(e, n);
          }
          return (
            s(t, [
              {
                key: "init",
                value: function (t, e) {
                  (this.currentSite = t),
                    (this.handleButtonClick = e),
                    (this.button = this.buildButton()),
                    this.update();
                },
              },
              {
                key: "buildButton",
                value: function () {
                  switch (this.currentSite) {
                    case "youtube":
                      return new yt(this.handleButtonClick);
                    case "vimeo":
                      return new bt(this.handleButtonClick);
                    case "netflix":
                      return new wt(this.handleButtonClick);
                    case "amazon":
                      return new Tt(this.handleButtonClick);
                    case "hulu":
                      return new St(this.handleButtonClick);
                    case "hbo":
                      return new Et(this.handleButtonClick);
                    default:
                      return new Rt(this.handleButtonClick);
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  try {
                    var t;
                    null === (t = this.button) || void 0 === t || t.update();
                  } catch (t) {
                    this.bug.report(t);
                  }
                },
              },
              {
                key: "delete",
                value: function () {
                  var t;
                  null === (t = this.button) || void 0 === t || t.delete();
                },
              },
            ]),
            t
          );
        })(),
        At = (function () {
          function t() {
            o(this, t), (this.blobSizeMinimum = 3e4);
          }
          var n;
          return (
            s(t, [
              {
                key: "getBlob",
                value:
                  ((n = e(
                    i().mark(function t(e, n) {
                      return i().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(function (t, r) {
                                  e.toBlob(
                                    function (e) {
                                      null !== e
                                        ? t(e)
                                        : r(
                                            "GetCanvasBlob: No Image to Download"
                                          );
                                    },
                                    n,
                                    1
                                  );
                                })
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function (t, e) {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            t
          );
        })(),
        Mt = (function () {
          function t() {
            o(this, t);
          }
          var n, r, a;
          return (
            s(t, [
              {
                key: "save",
                value:
                  ((a = e(
                    i().mark(function t(e, n, r, o, a) {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ("clipboard" !== o) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.copyToClipboard(n)
                                );
                              case 4:
                                return t.abrupt("return", "done!");
                              case 7:
                                (t.prev = 7), (t.t0 = t.catch(1));
                              case 10:
                                this.saveFile(e, n, r, o, a);
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 7]]
                      );
                    })
                  )),
                  function (t, e, n, r, i) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "saveFile",
                value:
                  ((r = e(
                    i().mark(function t(e, n, r, o, a) {
                      var s, u, c, l, f, p, d;
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (s = new At(n)), (t.next = 3), s.getBlob(n, o)
                                );
                              case 3:
                                return (
                                  (u = t.sent),
                                  (c = URL.createObjectURL(u)),
                                  (l = "image/jpeg" === u.type ? "jpg" : "png"),
                                  (f =
                                    "Screenshotter--" +
                                    a +
                                    "-" +
                                    this.getTimecode(r) +
                                    "." +
                                    l),
                                  (p = {
                                    type: "ScreenshotDownload",
                                    url: c,
                                    filename: f,
                                    useBackground: !1,
                                  }),
                                  window.chrome.runtime.sendMessage(p),
                                  ((d = document.createElement("a")).href =
                                    p.url),
                                  (d.download = p.filename),
                                  document.body.appendChild(d),
                                  d.click(),
                                  document.body.removeChild(d),
                                  t.abrupt("return", null)
                                );
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t, e, n, i, o) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "copyToClipboard",
                value:
                  ((n = e(
                    i().mark(function t(e) {
                      return i().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              new U().sendImage(e);
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function (t) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "getTimecode",
                value: function (t) {
                  var e = t,
                    n = Math.floor(e / 60),
                    r = Math.floor(e - 60 * n);
                  return n + "’" + (r = ("0" + r).slice(-2)) + "”";
                },
              },
            ]),
            t
          );
        })(),
        It = (function () {
          function t(e, n) {
            o(this, t), (this.videoHandler = e), (this.imageType = n);
          }
          var n;
          return (
            s(t, [
              {
                key: "go",
                value:
                  ((n = e(
                    i().mark(function t() {
                      var e;
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  (((e =
                                    document.createElement("canvas")).width =
                                    this.videoHandler.video.videoWidth),
                                  (e.height =
                                    this.videoHandler.video.videoHeight),
                                  e
                                    .getContext("2d")
                                    .drawImage(
                                      this.videoHandler.video,
                                      0,
                                      0,
                                      e.width,
                                      e.height
                                    ),
                                  (t.prev = 4),
                                  !this.detectImage(e))
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return", e);
                              case 9:
                                return t.abrupt("return", null);
                              case 10:
                                t.next = 16;
                                break;
                              case 12:
                                return (
                                  (t.prev = 12),
                                  (t.t0 = t.catch(4)),
                                  t.abrupt("return", null)
                                );
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[4, 12]]
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "detectImage",
                value: function (t) {
                  var e = new Uint32Array(
                    t
                      .getContext("2d")
                      .getImageData(0, 0, t.width, t.height).data
                  );
                  if (e[0] + e[1] + e[2] !== 0) return !0;
                  var n = document.createElement("canvas");
                  (n.width = 100),
                    (n.height = (n.width * t.height) / t.width),
                    n.getContext("2d").drawImage(t, 0, 0, n.width, n.height);
                  for (
                    var r = new Uint32Array(
                        n
                          .getContext("2d")
                          .getImageData(0, 0, n.width, n.height).data
                      ),
                      i = 0;
                    i < r.length / 4;
                    i++
                  )
                    if (r[4 * i] + r[4 * i + 1] + r[4 * i + 2] > 3) return !0;
                  return !1;
                },
              },
            ]),
            t
          );
        })(),
        Ht = (function () {
          function t(e, n) {
            o(this, t), (this.videoHandler = e), (this.imageType = n);
          }
          var n;
          return (
            s(t, [
              {
                key: "go",
                value:
                  ((n = e(
                    i().mark(function t() {
                      var e, n, r;
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 3), this.sendToBackground();
                              case 3:
                                return (
                                  (e = t.sent), (t.next = 6), this.loadImage(e)
                                );
                              case 6:
                                return (
                                  (n = t.sent),
                                  ((r =
                                    document.createElement("canvas")).width =
                                    2 * this.videoHandler.width),
                                  (r.height = 2 * this.videoHandler.height),
                                  r
                                    .getContext("2d")
                                    .drawImage(
                                      n,
                                      2 * -this.videoHandler.offsetX,
                                      2 * -this.videoHandler.offsetY,
                                      2 * window.innerWidth,
                                      2 * window.innerHeight
                                    ),
                                  t.abrupt("return", r)
                                );
                              case 13:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "sendToBackground",
                value: function () {
                  return new Promise(function (t) {
                    window.chrome.runtime.sendMessage(
                      { type: "TabCaptureScreenshot" },
                      (function () {
                        var n = e(
                          i().mark(function e(n) {
                            return i().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    t(n.imgSrc);
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return n.apply(this, arguments);
                        };
                      })()
                    );
                  });
                },
              },
              {
                key: "loadImage",
                value: function (t) {
                  return new Promise(function (e) {
                    var n = document.createElement("img");
                    (n.src = t),
                      (n.onload = function () {
                        e(n);
                      });
                  });
                },
              },
            ]),
            t
          );
        })(),
        Pt = (function () {
          function t() {
            o(this, t);
          }
          var n;
          return (
            s(t, [
              {
                key: "getSettings",
                value:
                  ((n = e(
                    i().mark(function t() {
                      return i().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                new Promise(function (t) {
                                  window.chrome.storage.sync.get(
                                    ["imageType", "autoCrop"],
                                    function (e) {
                                      var n = e.imageType;
                                      n ||
                                        (window.chrome.storage.sync.set({
                                          imageType: "image/png",
                                        }),
                                        (n = "image/png"));
                                      var r = e.autoCrop || !1;
                                      t({ imageType: n, autoCrop: r });
                                    }
                                  );
                                })
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            t
          );
        })(),
        Bt = (function () {
          function t(e) {
            return (
              o(this, t),
              (this.canvas = e),
              (this.imageData = this.canvas
                .getContext("2d")
                .getImageData(0, 0, this.canvas.width, this.canvas.height)),
              this.trimCanvas()
            );
          }
          return (
            s(t, [
              {
                key: "trimCanvas",
                value: function () {
                  for (
                    var t, e = this.canvas, n = e.getContext("2d"), r = 0;
                    r < e.width;
                    r++
                  )
                    for (var i = 0; i < e.height; i++) {
                      var o = this.getPixelColor(r, i);
                      if (o[0] + o[1] + o[2] > 30) {
                        t = void 0 === t || t > i ? i : t;
                        break;
                      }
                    }
                  for (var a = e.width; a > 0; a--)
                    for (var s = e.height; s > 0; s--) {
                      var u = this.getPixelColor(a, s);
                      if (u[0] + u[1] + u[2] > 30) {
                        t = void 0 === t || t > e.height - s ? e.height - s : t;
                        break;
                      }
                    }
                  if ((t > 0 && (t += 2), e.width / (e.height - 2 * t) > 2.5))
                    return e;
                  var c = n.getImageData(0, t, e.width, e.height - t);
                  return (
                    (e.height = e.height - 2 * t), n.putImageData(c, 0, 0), e
                  );
                },
              },
              {
                key: "getPixelColor",
                value: function (t, e) {
                  var n = e * (4 * this.canvas.width) + 4 * t;
                  return this.imageData.data.slice(n, n + 4);
                },
              },
            ]),
            t
          );
        })(),
        qt = new Mt(),
        Ft = (function () {
          function t(e) {
            o(this, t),
              (this.inProgress = !1),
              (this.currentSite = e),
              (this.video = null);
          }
          var n;
          return (
            s(t, [
              {
                key: "go",
                value:
                  ((n = e(
                    i().mark(function t(e, n, r) {
                      var o, a, s, u, c, l, f;
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (o = new Pt()), (t.next = 3), o.getSettings()
                                );
                              case 3:
                                if (
                                  ((a = t.sent),
                                  (s = a.imageType),
                                  (u = a.autoCrop),
                                  !0 !== this.inProgress)
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return t.abrupt("return");
                              case 10:
                                return (
                                  (this.inProgress = !0),
                                  (l = new It(e, s)),
                                  (t.next = 15),
                                  l.go()
                                );
                              case 15:
                                if ((c = t.sent)) {
                                  t.next = 26;
                                  break;
                                }
                                return (t.next = 21), e.prepTabCapture();
                              case 21:
                                return (
                                  (f = new Ht(e, s)), (t.next = 24), f.go()
                                );
                              case 24:
                                (c = t.sent), e.resetTabCapture();
                              case 26:
                                if (c) {
                                  t.next = 28;
                                  break;
                                }
                                throw Error("Canvas is undefined!");
                              case 28:
                                return (
                                  u && (c = new Bt(c)),
                                  qt.save(
                                    this.currentSite,
                                    c,
                                    e.currentTime,
                                    s,
                                    r
                                  ),
                                  (this.inProgress = !1),
                                  t.abrupt("return", null)
                                );
                              case 34:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t, e, r) {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            t
          );
        })(),
        zt = (function () {
          function t() {
            o(this, t), this.init();
          }
          return (
            s(t, [
              {
                key: "init",
                value: function () {
                  var t = this.build;
                  window.chrome.runtime.onMessage.addListener(function (e, n) {
                    "show-modal-review" === e.action && t();
                  });
                },
              },
              {
                key: "build",
                value: function () {
                  ht()("<div>")
                    .addClass("ssModalContainer")
                    .html(
                      '\n\t\t\t<div class="ssModal review">\n\t\t\t\t<div class="icon"></div>\n\t\t\t\t<div class="body">\n\t\t\t\t\t<div class="title">Rate Video Screenshot</div>\n\t\t\t\t\t<div class="description">If you find Video Screenshot useful, please rate it on the Chrome Extension store. Thanks for your support!</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="ssButtons">\n\t\t\t\t\t<a class="ssButton never">No, thanks</a>\n\t\t\t\t\t<a class="ssButton notNow">Remind me later</a>\n\t\t\t\t\t<a class="ssButton rate blue" href="https://chrome.google.com/webstore/detail/video-screenshot/ppkojackhibeogijphhfnamhemklmial/reviews" target="_blank">Rate it now</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t'
                    )
                    .appendTo("body"),
                    ht()(".ssModal .never").click(function () {
                      ht()(".ssModalContainer").remove(),
                        window.chrome.storage.sync.set({
                          showReviewPrompt: !1,
                        });
                    }),
                    ht()(".ssModal .notNow").click(function () {
                      ht()(".ssModalContainer").remove();
                    }),
                    ht()(".ssModal .rate").click(function () {
                      window.chrome.storage.sync.set({ showReviewPrompt: !1 }),
                        ht()(".ssModalContainer").remove();
                    });
                },
              },
            ]),
            t
          );
        })(),
        Wt = (function () {
          function t(e) {
            o(this, t),
              (this.currentSite = e),
              (this.savedTitle = null),
              (this.bug = new Y());
          }
          return (
            s(t, [
              {
                key: "update",
                value: function () {
                  if ("netflix" === this.currentSite)
                    this.savedTitle =
                      ht()('[data-uia="video-title"]').text() ||
                      this.savedTitle;
                },
              },
              {
                key: "rawTitle",
                get: function () {
                  try {
                    if (this.savedTitle) return this.savedTitle;
                    switch (this.currentSite) {
                      case "youtube":
                        return "YouTube-".concat(
                          document.getElementsByClassName("ytp-title-link")[0]
                            .textContent
                        );
                      case "vimeo":
                        return (
                          "Vimeo-" +
                          document.getElementsByTagName("H1")[0].children[0]
                            .innerText
                        );
                      case "netflix":
                        return "Netflix-".concat(
                          ht()('[data-uia="video-title"]').textContent
                        );
                      case "amazon":
                        return (
                          "Amazon-" +
                          document.getElementsByClassName(
                            "contentTitlePanel"
                          )[0].textContent
                        );
                      default:
                        return document.title;
                    }
                  } catch (t) {}
                  return document.title;
                },
              },
              {
                key: "title",
                get: function () {
                  return this.rawTitle.replace(/[^a-zA-Z0-9-]/g, "");
                },
              },
            ]),
            t
          );
        })();
      function Yt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return Ut(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ut(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function Ut(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var $t,
        Xt = (function () {
          function t(e) {
            o(this, t), (this.takeScreenshot = e), this.init();
          }
          return (
            s(t, [
              {
                key: "init",
                value: function () {
                  window.chrome.runtime.onMessage.addListener(
                    this.recieveEvent.bind(this)
                  );
                },
              },
              {
                key: "recieveEvent",
                value: function (t, e, n) {
                  if ("take-screenshot" !== t.action) return !1;
                  window.chrome.runtime.sendMessage({
                    type: "GAEvent",
                    event: "ScreenshotTaken",
                    action: "KeyboardShortcut",
                  });
                  var r = document.getElementsByTagName("Video");
                  if (0 !== r.length) {
                    var i,
                      o = [],
                      a = Yt(r);
                    try {
                      for (a.s(); !(i = a.n()).done; ) {
                        var s = i.value;
                        s.currentTime > 0 && o.push(s);
                      }
                    } catch (t) {
                      a.e(t);
                    } finally {
                      a.f();
                    }
                    for (var u = o[0], c = 0, l = o; c < l.length; c++) {
                      var f = l[c];
                      f.width > u.width && (u = f);
                    }
                    u && this.takeScreenshot(u);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Vt = (function () {
          function t(e) {
            o(this, t),
              n(513),
              (this.currentSite = e),
              (this.pageMonitor = null),
              (this.buttonMonitor = null),
              (this.titleMonitor = null),
              (this.capture = null),
              (this.shortcutHandler = null),
              (this.bug = new Y());
            try {
              this.init();
            } catch (t) {
              this.bug.report(t);
            }
          }
          var r;
          return (
            s(t, [
              {
                key: "init",
                value: function () {
                  var t = this.handlePageUpdate.bind(this),
                    e = this.handleButtonClick.bind(this);
                  (this.pageMonitor = new pt(t)),
                    (this.buttonMonitor = new Dt(this.currentSite, e)),
                    (this.titleMonitor = new Wt(this.currentSite)),
                    (this.capture = new Ft(this.currentSite)),
                    (this.reviewModal = new zt()),
                    new Xt(this.takeScreenshot.bind(this));
                },
              },
              {
                key: "handlePageUpdate",
                value: function () {
                  this.buttonMonitor && this.buttonMonitor.update(),
                    this.titleMonitor && this.titleMonitor.update();
                },
              },
              {
                key: "handleButtonClick",
                value: function (t) {
                  window.chrome.runtime.sendMessage({
                    type: "GAEvent",
                    event: "ScreenshotTaken",
                    action: "Clicked",
                  });
                  try {
                    this.takeScreenshot(t);
                  } catch (t) {
                    window.chrome.runtime.sendMessage({
                      type: "GAEvent",
                      event: "Error",
                      action: "TakingScreenshot",
                    });
                  }
                },
              },
              {
                key: "takeScreenshot",
                value:
                  ((r = e(
                    i().mark(function t(e) {
                      var n;
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (n = new ft(this.currentSite, e)),
                                  (t.next = 5),
                                  this.capture.go(
                                    n,
                                    this.buttonMonitor,
                                    this.titleMonitor.title
                                  )
                                );
                              case 5:
                                n.playVideo(), (t.next = 12);
                                break;
                              case 8:
                                (t.prev = 8),
                                  (t.t0 = t.catch(0)),
                                  this.bug.report(t.t0);
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 8]]
                      );
                    })
                  )),
                  function (t) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "disable",
                value: function () {
                  this.pageMonitor.remove(), this.buttonMonitor.delete();
                },
              },
            ]),
            t
          );
        })();
      function Gt() {
        return Zt.apply(this, arguments);
      }
      function Zt() {
        return (Zt = e(
          i().mark(function t() {
            var e;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (document.head) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), Qt();
                  case 4:
                    (e = t.sent) ? (new Y().start(), ($t = new Vt(e))) : Jt();
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Jt() {
        $t && $t.disable(), ($t = null);
      }
      function Qt() {
        return Kt.apply(this, arguments);
      }
      function Kt() {
        return (Kt = e(
          i().mark(function t() {
            var e;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (e = window.location.hostname.replace(/^(www\.)/, "")) &&
                      "" !== e
                    ) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        localStorage.getItem(null, function (n) {
                          for (
                            var r = n.websites, i = 0, o = Object.values(r);
                            i < o.length;
                            i++
                          ) {
                            var a,
                              s = o[i];
                            null !== (a = s.url) &&
                              void 0 !== a &&
                              a.some(function (t) {
                                return e.includes(t);
                              }) &&
                              (s.enabled && t(s.name), t(!1));
                          }
                          !0 ===
                            r.find(function (t) {
                              return "everythingelse" === t.name;
                            }).enabled &&
                            (n.blacklist.find(function (t) {
                              return t.includes(e);
                            }) ||
                              t("default")),
                            n.whitelist.find(function (t) {
                              return t.includes(e);
                            }) && t("default"),
                            t(!1);
                        });
                      })
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      new U(),
        Gt()
        // window.chrome.storage.onChanged.addListener(function (t, e) {
        //   "websites" === Object.keys(t)[0] && (Jt(), Gt());
        // });
    })();
})();
