!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = { i: o, l: !1, exports: {} };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) n.d(o, a, function (t) {
            return e[t]
        }.bind(null, a));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 264)
}([function (e, t, n) {
    "use strict";
    e.exports = n(62)
}, , , , , function (e, t, n) {
    "use strict";
    n.d(t, "f", (function () {
        return o
    })), n.d(t, "g", (function () {
        return a
    })), n.d(t, "i", (function () {
        return r
    })), n.d(t, "c", (function () {
        return c
    })), n.d(t, "e", (function () {
        return l
    })), n.d(t, "h", (function () {
        return i
    })), n.d(t, "b", (function () {
        return y
    })), n.d(t, "a", (function () {
        return d
    })), n.d(t, "d", (function () {
        return c
    }));
    var o = {
        actionIndicatorActionSeek: !0,
        actionIndicatorIconHidden: !1,
        autoclickAdSkipButton: !1,
        audioAutoGain: !1,
        audioAutoGainBoostThreshold: -3,
        audioAutoGainMode: "boost",
        audioBoostGain: 0,
        audioHPF: !1,
        audioHPFFrequency: 200,
        audioMonoMix: !1,
        audioMonoMixSource: "left+right",
        backToTop: !1,
        backToTopPosition: "center",
        chaptersAutoShowList: !1,
        chatVisibility: !1,
        cinemaMode: !1,
        cinemaModeHiddenMasthead: !1,
        cinemaModeHiddenScrollbar: !1,
        cleanPlayer: !1,
        cleanPlayerAdOverlay: !0,
        cleanPlayerCE: !0,
        cleanPlayerChannelWattermark: !0,
        cleanPlayerEndScreen: !1,
        cleanPlayerTop: !0,
        cleanPlayerPaidContentOverlay: !1,
        cleanPlayerVideoAnnotations: !0,
        cleanSite: !1,
        cleanSiteAds: !0,
        cleanSiteAnnoyances: !0,
        cleanSiteDrawerFooter: !0,
        cleanSiteHeaderVoiceSearchButton: !1,
        cleanSiteHomeSections: !1,
        cleanSiteSidebarDonationShelf: !0,
        cleanSiteWatchClarifyBox: !1,
        cleanSiteWatchCommentInput: !1,
        cleanSiteWatchInfoMenu: !1,
        customCSS: !0,
        customCSSCode: "",
        customJS: !0,
        customJSCode: "",
        commentsSectionHidden: !1,
        commentsSortBy: !1,
        convertChannelNameToURL: !0,
        cvfIncludeSubtitles: !1,
        cvfQuality: .92,
        cvfType: "JPEG",
        embedModeWindow: "current",
        extensionShortcutsSeekByValue: 5,
        extensionShortcutsAdjustVolumeByValue: 5,
        extensionOptionsPageLayout: "vertical",
        gotoChapterStart: "mousedown1",
        initialAutoPlay: !1,
        initialChannelPageTab: !1,
        initialFullscreen: !1,
        initialPlaybackRate: !1,
        initialPlaybackRateLevel: 1,
        initialTheatreMode: !1,
        initialTheme: !1,
        initialSubtitles: !1,
        initialVolume: !1,
        initialVolumeLevel: 50,
        instantFullscreen: !1,
        instantTogglePlay: !1,
        initialLoop: !1,
        maxMouseControlArea: !1,
        mmbToggleFullscreen: !1,
        mouseControlActive: !0,
        mouseControlDisableDoubleClick: !1,
        mouseControlElement: "player",
        mouseControlModKey: "shift",
        mouseControlMiniplayer: !1,
        playlistDuration: !0,
        replayOnPreviousChapter: !0,
        scrollbarThin: !1,
        searchResultsOpenInNewTab: !1,
        searchResultsNavigation: !1,
        sidebarRelatedHidden: !1,
        sidebarSectionFixed: !1,
        sidebarSectionHidden: !1,
        skipVideoBlockGlobal: !1,
        skipVideoBlockGlobalData: { enabled: !0, start: "" },
        skipVideoBlockIndividual: !1,
        skipVideoBlockIndividualData: [{
            channelName: "TED",
            enabled: !1,
            id: "2467085a-e8b4-413c-a71e-4e4825581dc1",
            start: "12",
            videoTitle: ""
        }],
        subtitlesDisabled: !1,
        subtitlesPosition: !1,
        subtitlesOffsetY: 2,
        themeType: "system",
        thumbnailViewFullSize: !1,
        upNextVideo: !1,
        videoDescription: !1,
        videoDimmer: !1,
        videoDimmerBrightness: .5,
        videoDownloadLinkMode: "copy",
        videoDownloadLinkQuery: "youtube-dl https://www.youtube.com/watch?v=%s",
        videoPlaybackInfo: !1,
        videoPlaybackInfoPlaybackRate: !1,
        videoPlaybackInfoVolume: !1,
        videoPlaybackInfoCurrentTime: !0,
        videoPlaybackInfoRemainingTime: !1,
        videoPlaybackInfoStyleFontSize: 1,
        videoPlaybackInfoStyleOpacity: 1,
        ytpAutohideDelay: 3e3,
        ytpControlsHidden: !1,
        ytpControlsHiddenPlaying: !0,
        ytpControlsHiddenPaused: !0,
        ytpControlsHiddenShowOnHover: !1,
        ytpControlsMode: "default",
        ytpPreferredQuality: !1,
        ytpProgressBarOpacity: .5,
        ytpProgressBarAtBottom: !1,
        hotkeys: {
            backToComment: null,
            captureVideoFrame: null,
            captureVideoFramePNG: null,
            cycleCommentsSortBy: null,
            cycleMouseControlActive: null,
            cycleSubtitlesPosition: null,
            cycleYtpControlsMode: null,
            embedMode: null,
            enterPictureInPicture: null,
            focusSearchBox: null,
            getVideoDownloadLink: null,
            increaseSubtitlesOffsetY: null,
            decreaseSubtitlesOffsetY: null,
            toggleAudioAutoGain: null,
            toggleAudioHPF: null,
            toggleAudioMonoMix: null,
            toggleCinemaMode: null,
            toggleCleanPlayer: null,
            toggleCleanSite: null,
            toggleCommentsVisibility: null,
            toggleSidebarVisibility: null,
            toggleSkipVideoBlockGlobal: null,
            toggleSkipVideoBlockIndividual: null,
            toggleSubtitlesDisabled: null,
            toggleVideoDimmer: null,
            toggleVideoPlaybackInfo: null,
            toggleYtpControlsHidden: null
        },
        keyboardControlKeys: [{ action: "seekBy", payload: "1c", key: null }, {
            action: "seekBy",
            payload: "-1c",
            key: null
        }, { action: "seekBy", payload: 1, key: null }, {
            action: "seekBy",
            payload: -1,
            key: null
        }, { action: "adjustVolumeBy", payload: 1, key: null }, {
            action: "adjustVolumeBy",
            payload: -1,
            key: null
        }, { action: "adjustPlaybackRateBy", payload: .1, key: null }, {
            action: "adjustPlaybackRateBy",
            payload: -.1,
            key: null
        }],
        interactionZonesMouseButton: 1,
        interactionZonesMouseButtonPresets: [{
            name: "Default",
            type: "mouseButton",
            gridColumns: 3,
            gridRows: 1,
            gridColumnsRatios: [3, 6, 3],
            gridRowsRatios: [12],
            actionMap: [{ key: "mousedown0+g020B", action: "setPlaybackRate", payload: 1 }, {
                key: "ctrl+mousedown0+g020B",
                action: "captureVideoFrame"
            }, { key: "ctrl+mousedown0+g380B", action: "captureVideoFrame" }, {
                key: "ctrl+mousedown0+g9B0B",
                action: "captureVideoFrame"
            }, { key: "mousedown0+g9B0B", action: "toggleMute" }]
        }, {
            name: "Default (customizable)",
            type: "mouseButton",
            gridColumns: 3,
            gridRows: 1,
            gridColumnsRatios: [3, 6, 3],
            gridRowsRatios: [12],
            actionMap: [{ key: "mousedown0+g020B", action: "setPlaybackRate", payload: 1 }, {
                key: "ctrl+mousedown0+g020B",
                action: "captureVideoFrame"
            }, { key: "ctrl+mousedown0+g380B", action: "captureVideoFrame" }, {
                key: "mousedown0+g9B0B",
                action: "toggleMute"
            }, { key: "ctrl+mousedown0+g9B0B", action: "captureVideoFrame" }]
        }, {
            actionMap: [{ action: "toggleMute", key: "mousedown0+g9B03" }, {
                action: "setVolume",
                key: "ctrl+mousedown0+g9B03",
                payload: 80
            }, { action: "toggleMute", key: "mousedown0+g9B47" }, {
                action: "setVolume",
                key: "ctrl+mousedown0+g9B47",
                payload: 50
            }, { action: "toggleMute", key: "mousedown0+g9B8B" }, {
                action: "setVolume",
                key: "ctrl+mousedown0+g9B8B",
                payload: 20
            }, { action: "captureVideoFrame", key: "ctrl+mousedown0+g388B" }, {
                action: "captureVideoFrame",
                key: "ctrl+mousedown0+g3847"
            }, { action: "captureVideoFrame", key: "ctrl+mousedown0+g3803" }, {
                action: "setPlaybackRate",
                key: "mousedown0+g028B",
                payload: 1
            }, { action: "setPlaybackRate", key: "ctrl+mousedown0+g028B", payload: .25 }, {
                action: "setPlaybackRate",
                key: "mousedown0+g0247",
                payload: 1
            }, { action: "setPlaybackRate", key: "ctrl+mousedown0+g0247", payload: 2 }, {
                action: "setPlaybackRate",
                key: "mousedown0+g0203",
                payload: 1
            }, { action: "setPlaybackRate", key: "ctrl+mousedown0+g0203", payload: 4 }],
            gridColumns: 3,
            gridColumnsRatios: [3, 6, 3],
            gridRows: 3,
            gridRowsRatios: [4, 4, 4],
            name: "Intermediate Control",
            type: "mouseButton"
        }, {
            actionMap: [{ action: "captureVideoFrame", key: "ctrl+mousedown0+g388B" }, {
                action: "viewChapter",
                key: "mousedown2+g388B"
            }, { action: "captureVideoFrame", key: "ctrl+mousedown0+g3847" }, {
                action: "scrollBackToComment",
                key: "mousedown2+g3847"
            }, { action: "captureVideoFrame", key: "ctrl+mousedown0+g3803" }, {
                action: "enterPictureInPicture",
                key: "mousedown1+g3803"
            }, { action: "toggleMute", key: "mousedown0+g9B03" }, {
                action: "setVolume",
                key: "ctrl+mousedown0+g9B03",
                payload: 80
            }, { action: "getVideoDownloadLink", key: "mousedown2+g9B03" }, {
                action: "toggleEmbedMode",
                key: "mousedown1+g9B03"
            }, { action: "setPlaybackRate", key: "mousedown0+g0203", payload: 1 }, {
                action: "setPlaybackRate",
                key: "ctrl+mousedown0+g0203",
                payload: 4
            }, { action: "getVideoURLAtCurrentTime", key: "mousedown2+g0203" }, {
                action: "toggleMiniplayer",
                key: "mousedown1+g0203"
            }, { action: "setPlaybackRate", key: "mousedown0+g028B", payload: 1 }, {
                action: "setPlaybackRate",
                key: "ctrl+mousedown0+g028B",
                payload: .25
            }, { action: "toggleVideoInfo", key: "mousedown2+g028B" }, {
                action: "toggleMute",
                key: "mousedown0+g9B8B"
            }, { action: "setVolume", key: "ctrl+mousedown0+g9B8B", payload: 20 }, {
                action: "togglePlayerSettings",
                key: "mousedown2+g9B8B"
            }, { action: "setPlaybackRate", key: "mousedown0+g0247", payload: 1 }, {
                action: "setPlaybackRate",
                key: "ctrl+mousedown0+g0247",
                payload: 2
            }, { action: "getVideoEmbedCode", key: "mousedown2+g0247" }, {
                action: "toggleMute",
                key: "mousedown0+g9B47"
            }, { action: "setVolume", key: "ctrl+mousedown0+g9B47", payload: 50 }, {
                action: "toggleVideoDimmer",
                key: "mousedown2+g9B47"
            }],
            gridColumns: 3,
            gridColumnsRatios: [3, 6, 3],
            gridRows: 3,
            gridRowsRatios: [4, 4, 4],
            name: "Advanced Control",
            type: "mouseButton"
        }],
        interactionZonesMouseWheel: 1,
        interactionZonesMouseWheelPresets: [{
            name: "Default",
            type: "mouseWheel",
            gridColumns: 3,
            gridRows: 3,
            gridColumnsRatios: [3, 6, 3],
            gridRowsRatios: [4, 4, 4],
            actionMap: [{ key: "wheelup+g0203", action: "adjustPlaybackRateBy", payload: .5 }, {
                key: "wheeldown+g0203",
                action: "adjustPlaybackRateBy",
                payload: -.5
            }, { key: "wheelup+g0247", action: "adjustPlaybackRateBy", payload: .25 }, {
                key: "wheeldown+g0247",
                action: "adjustPlaybackRateBy",
                payload: -.25
            }, { key: "wheelup+g028B", action: "adjustPlaybackRateBy", payload: .1 }, {
                key: "wheeldown+g028B",
                action: "adjustPlaybackRateBy",
                payload: -.1
            }, { key: "wheelup+g3803", action: "seekBy", payload: "5%" }, {
                key: "wheeldown+g3803",
                action: "seekBy",
                payload: "-5%"
            }, { key: "ctrl+wheelup+g3803", action: "seekBy", payload: "10%" }, {
                key: "ctrl+wheeldown+g3803",
                action: "seekBy",
                payload: "-10%"
            }, { key: "wheelup+g3847", action: "seekBy", payload: 5 }, {
                key: "wheeldown+g3847",
                action: "seekBy",
                payload: -5
            }, { key: "ctrl+wheelup+g3847", action: "seekBy", payload: "1c" }, {
                key: "ctrl+wheeldown+g3847",
                action: "seekBy",
                payload: "-1c"
            }, { key: "wheelup+g388B", action: "seekBy", payload: 1 }, {
                key: "wheeldown+g388B",
                action: "seekBy",
                payload: -1
            }, { key: "ctrl+wheelup+g388B", action: "seekBy", payload: "1f" }, {
                key: "ctrl+wheeldown+g388B",
                action: "seekBy",
                payload: "-1f"
            }, { key: "wheelup+g9B03", action: "adjustVolumeBy", payload: 10 }, {
                key: "wheeldown+g9B03",
                action: "adjustVolumeBy",
                payload: -10
            }, { key: "wheelup+g9B47", action: "adjustVolumeBy", payload: 5 }, {
                key: "wheeldown+g9B47",
                action: "adjustVolumeBy",
                payload: -5
            }, { key: "wheelup+g9B8B", action: "adjustVolumeBy", payload: 1 }, {
                key: "wheeldown+g9B8B",
                action: "adjustVolumeBy",
                payload: -1
            }]
        }, {
            name: "Default (customizable)",
            type: "mouseWheel",
            gridColumns: 3,
            gridRows: 3,
            gridColumnsRatios: [3, 6, 3],
            gridRowsRatios: [4, 4, 4],
            actionMap: [{ key: "wheelup+g0203", action: "adjustPlaybackRateBy", payload: .5 }, {
                key: "wheeldown+g0203",
                action: "adjustPlaybackRateBy",
                payload: -.5
            }, { key: "wheelup+g0247", action: "adjustPlaybackRateBy", payload: .25 }, {
                key: "wheeldown+g0247",
                action: "adjustPlaybackRateBy",
                payload: -.25
            }, { key: "wheelup+g028B", action: "adjustPlaybackRateBy", payload: .1 }, {
                key: "wheeldown+g028B",
                action: "adjustPlaybackRateBy",
                payload: -.1
            }, { key: "wheelup+g3803", action: "seekBy", payload: "5%" }, {
                key: "wheeldown+g3803",
                action: "seekBy",
                payload: "-5%"
            }, { key: "ctrl+wheelup+g3803", action: "seekBy", payload: "10%" }, {
                key: "ctrl+wheeldown+g3803",
                action: "seekBy",
                payload: "-10%"
            }, { key: "wheelup+g3847", action: "seekBy", payload: 5 }, {
                key: "wheeldown+g3847",
                action: "seekBy",
                payload: -5
            }, { key: "ctrl+wheelup+g3847", action: "seekBy", payload: "1c" }, {
                key: "ctrl+wheeldown+g3847",
                action: "seekBy",
                payload: "-1c"
            }, { key: "wheelup+g388B", action: "seekBy", payload: 1 }, {
                key: "wheeldown+g388B",
                action: "seekBy",
                payload: -1
            }, { key: "ctrl+wheelup+g388B", action: "seekBy", payload: "1f" }, {
                key: "ctrl+wheeldown+g388B",
                action: "seekBy",
                payload: "-1f"
            }, { key: "wheelup+g9B03", action: "adjustVolumeBy", payload: 10 }, {
                key: "wheeldown+g9B03",
                action: "adjustVolumeBy",
                payload: -10
            }, { key: "wheelup+g9B47", action: "adjustVolumeBy", payload: 5 }, {
                key: "wheeldown+g9B47",
                action: "adjustVolumeBy",
                payload: -5
            }, { key: "wheelup+g9B8B", action: "adjustVolumeBy", payload: 1 }, {
                key: "wheeldown+g9B8B",
                action: "adjustVolumeBy",
                payload: -1
            }]
        }, {
            name: "Right Mouse Button + Wheel: Volume",
            type: "mouseWheel",
            gridColumns: 1,
            gridRows: 1,
            gridColumnsRatios: [12],
            gridRowsRatios: [12],
            actionMap: [{ key: "wheelup2+g0B0B", action: "adjustVolumeBy", payload: 5 }, {
                key: "wheeldown2+g0B0B",
                action: "adjustVolumeBy",
                payload: -5
            }]
        }, {
            name: "Horizontal Split: Volume & Seek",
            type: "mouseWheel",
            gridColumns: 1,
            gridRows: 2,
            gridColumnsRatios: [12],
            gridRowsRatios: [6, 6],
            actionMap: [{ key: "wheelup+g0B6B", action: "seekBy", payload: 1 }, {
                key: "wheeldown+g0B6B",
                action: "seekBy",
                payload: -1
            }, { key: "wheelup+g0B05", action: "adjustVolumeBy", payload: 5 }, {
                key: "wheeldown+g0B05",
                action: "adjustVolumeBy",
                payload: -5
            }]
        }, {
            name: "Vertical Split: Speed & Volume",
            type: "mouseWheel",
            gridColumns: 2,
            gridRows: 1,
            gridColumnsRatios: [6, 6],
            gridRowsRatios: [12],
            actionMap: [{ key: "wheelup+g6B0B", action: "adjustVolumeBy", payload: 5 }, {
                key: "wheeldown+g6B0B",
                action: "adjustVolumeBy",
                payload: -5
            }, { key: "wheelup+g050B", action: "adjustPlaybackRateBy", payload: .1 }, {
                key: "wheeldown+g050B",
                action: "adjustPlaybackRateBy",
                payload: -.1
            }]
        }]
    }, a = {};
    var r = {
        altFullscreenTrigger: "mmbToggleFullscreen",
        instantPause: "instantTogglePlay",
        ytpAutoHideDelay: "ytpAutohideDelay",
        ytpBottomHidden: "ytpControlsHidden",
        ytpBottomStyle: e => ({ newKey: "ytpControlsMode", newValue: "minimalistic" === e ? "persistent-mini" : e }),
        wheelControl: null
    };

    function i(e = {}, t = {}) {
        const n = {}, o = [];
        return Object.entries(t).forEach(([t, a]) => {
            if (Object.prototype.hasOwnProperty.call(e, t)) {
                if (null === a) return o.push(t);
                if ("string" == typeof a) return n[a] = e[t], o.push(t);
                if ("function" == typeof a) {
                    const { newKey: r, newValue: i } = a(e[t]);
                    return n[r] = i, o.push(t)
                }
            }
        }), { migratedStorage: n, deprecatedKeys: o }
    }

    var c = {
        get: async function (e = null, t = {}) {
            const n = { type: "local", validateStorage: !e, ...t };
            return new Promise((t, a) => {
                chrome.storage[n.type].get(e, e => {
                    if (chrome.runtime.lastError) return a(chrome.runtime.lastError);
                    if (!n.validateStorage) return t(e);
                    const c = Object.keys(e);
                    if (Object.keys(o).every(e => c.includes(e))) return t(e);
                    const { migratedStorage: l, deprecatedKeys: u } = i(e, r),
                        s = { ...o, ...e, hotkeys: { ...o.hotkeys, ...null == e ? void 0 : e.hotkeys }, ...l };
                    chrome.storage.local.set(s, () => u.length && chrome.storage.local.remove(u)), t(s)
                })
            })
        }, remove: async function (e, t = {}, n) {
            const o = { type: "local", ...t };
            return new Promise((t, a) => {
                chrome.storage[o.type].remove(e, () => {
                    if (chrome.runtime.lastError) return a(chrome.runtime.lastError);
                    t(n && n())
                })
            })
        }, set: async function (e, t = {}, n) {
            const o = { type: "local", ...t };
            return new Promise((t, a) => {
                chrome.storage[o.type].set(e, () => {
                    if (chrome.runtime.lastError) return a(chrome.runtime.lastError);
                    t(n && n())
                })
            })
        }, onChanged: chrome.storage.onChanged
    };

    function l(e) {
        return [...Object.entries(e)].reduce((e, [t, { newValue: n }]) => (e[t] = n, e), {})
    }

    var u = n(0), s = n.n(u);
    const d = s.a.createContext(), p = (e, { type: t, payload: n }) => {
        switch (t) {
            case "LOAD_STORAGE":
                return { ...n };
            case "UPDATE_STORAGE":
                return { ...e, ...n };
            default:
                return { ...e }
        }
    };
    var y = function ({ children: e }) {
        const [t, n] = s.a.useReducer(p, {});
        return s.a.useEffect(() => {
            const e = e => {
                const t = l(e);
                n({ type: "UPDATE_STORAGE", payload: t })
            };
            return (async () => {
                const t = await c.get().catch(e => console.error(e));
                n({ type: "LOAD_STORAGE", payload: t || o }), c.onChanged.addListener(e)
            })(), () => {
                c.onChanged.removeListener(e)
            }
        }, []), s.a.createElement(d.Provider, {
            value: {
                storageData: t,
                storageDataLoaded: !!Object.keys(t).length,
                setStorage: c.set
            }
        }, e)
    }
}, , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return c
    }));
    var o = n(63);
    let a = {};
    const r = {}, i = Object(o.a)();
    var c = {
        init(e) {
            a = { ...e.hotkeys }
        }, add({ action: e, fn: t }) {
            r[e] = t, i.add({ [a[e]]: t })
        }, update(e) {
            i.clear(), a = { ...e.hotkeys }, Object.entries(r).forEach(([e, t]) => {
                i.add({ [a[e]]: t })
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    const o = new Map;
    var a = n(26), r = {
        add() {
            if (document.head.querySelector("#ytp-bezel-text")) return;
            const e = document.createElement("style");
            e.id = "ytp-bezel-text", e.innerHTML = "\n      .ytp-text-root {\n        display: block !important;\n      }\n      \n      .ytp-text-root .ytp-bezel-text-wrapper {\n        pointer-events: none;\n        z-index: 40 !important;\n      }\n      \n      .ytp-text-root .ytp-bezel-text {\n        display: inline-block !important;\n      }\n      \n      .ytp-text-root .ytp-bezel {\n        display: none !important;\n      }\n    ", document.head.append(e)
        }, remove() {
            var e;
            null === (e = document.head.querySelector("#ytp-bezel-text")) || void 0 === e || e.remove()
        }
    };

    function i(e, t = {}) {
        const n = { duration: 500, ...t };
        if (Object(a.a)()) {
            var i, c;
            const e = document.querySelector("#player .ytp-bezel-text");
            if (!e) return;
            return null === (i = document.querySelector("#player")) || void 0 === i || i.append(null === (c = e.parentElement) || void 0 === c ? void 0 : c.parentElement), u(e)
        }
        const l = document.querySelector("#movie_player .ytp-bezel-text");

        function u(t) {
            !function ({ id: e, duration: t, onBefore: n, onAfter: a }) {
                let r = o.get(e);
                clearTimeout(r), n && n(), r = setTimeout(() => {
                    a && a()
                }, t), o.set(e, r)
            }({
                id: "ytp-bezel-text", duration: n.duration, onBefore: () => {
                    t.textContent = e, r.add(), t.parentElement.parentElement.classList.add("ytp-text-root")
                }, onAfter: () => {
                    t.parentElement.parentElement.classList.remove("ytp-text-root"), r.remove()
                }
            })
        }

        l && u(l)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var a = {};
            if (o) for (var r = 0; r < this.length; r++) {
                var i = this[r][0];
                null != i && (a[i] = !0)
            }
            for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                o && a[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l))
            }
        }, t
    }
}, , function (e, t, n) {
    "use strict";
    var o, a = function () {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
    }, r = function () {
        var e = {};
        return function (t) {
            if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                e[t] = n
            }
            return e[t]
        }
    }(), i = [];

    function c(e) {
        for (var t = -1, n = 0; n < i.length; n++) if (i[n].identifier === e) {
            t = n;
            break
        }
        return t
    }

    function l(e, t) {
        for (var n = {}, o = [], a = 0; a < e.length; a++) {
            var r = e[a], l = t.base ? r[0] + t.base : r[0], u = n[l] || 0, s = "".concat(l, " ").concat(u);
            n[l] = u + 1;
            var d = c(s), p = { css: r[1], media: r[2], sourceMap: r[3] };
            -1 !== d ? (i[d].references++, i[d].updater(p)) : i.push({
                identifier: s,
                updater: g(p, t),
                references: 1
            }), o.push(s)
        }
        return o
    }

    function u(e) {
        var t = document.createElement("style"), o = e.attributes || {};
        if (void 0 === o.nonce) {
            var a = n.nc;
            a && (o.nonce = a)
        }
        if (Object.keys(o).forEach((function (e) {
            t.setAttribute(e, o[e])
        })), "function" == typeof e.insert) e.insert(t); else {
            var i = r(e.insert || "head");
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            i.appendChild(t)
        }
        return t
    }

    var s, d = (s = [], function (e, t) {
        return s[e] = t, s.filter(Boolean).join("\n")
    });

    function p(e, t, n, o) {
        var a = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, a); else {
            var r = document.createTextNode(a), i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(r, i[t]) : e.appendChild(r)
        }
    }

    function y(e, t, n) {
        var o = n.css, a = n.media, r = n.sourceMap;
        if (a ? e.setAttribute("media", a) : e.removeAttribute("media"), r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = o; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o))
        }
    }

    var m = null, f = 0;

    function g(e, t) {
        var n, o, a;
        if (t.singleton) {
            var r = f++;
            n = m || (m = u(t)), o = p.bind(null, n, r, !1), a = p.bind(null, n, r, !0)
        } else n = u(t), o = y.bind(null, n, t), a = function () {
            !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return o(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                o(e = t)
            } else a()
        }
    }

    e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = a());
        var n = l(e = e || [], t);
        return function (e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var o = 0; o < n.length; o++) {
                    var a = c(n[o]);
                    i[a].references--
                }
                for (var r = l(e, t), u = 0; u < n.length; u++) {
                    var s = c(n[u]);
                    0 === i[s].references && (i[s].updater(), i.splice(s, 1))
                }
                n = r
            }
        }
    }
}, , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    }));
    var o = (e, t) => (n, o) => {
        var a;
        window.postMessage({
            type: "ytpActionRequest",
            action: n,
            payload: o,
            playerId: null == e || null === (a = e.closest(".html5-video-player")) || void 0 === a ? void 0 : a.id,
            options: t
        }, window.location.origin)
    }
}, , function (e, t, n) {
    var o, a, r;
    a = [], void 0 === (r = "function" == typeof (o = function () {
        var e, t, n, o = Array.isArray, a = {}, r = {};
        return {
            on: function (i, c) {
                if (c) {
                    if (!e) {
                        var l = document, u = l.head;
                        l.addEventListener("animationstart", (function (e, t, n, o) {
                            if (t = r[e.animationName]) for (e.stopImmediatePropagation(), n = t.length, o = 0; o < n; o++) t[o](e.target)
                        }), !0), e = l.createElement("style"), u.insertBefore(e, u.firstChild), t = e.sheet, n = t.cssRules
                    }
                    (o(i) ? i : [i]).map((function (e, o, i) {
                        (o = a[e]) || (i = "!" == e[0], a[e] = o = i ? e.slice(1) : "sentinel-" + Math.random().toString(16).slice(2), n[t.insertRule("@keyframes " + o + "{from{transform:none;}to{transform:none;}}", n.length)]._id = e, i || (n[t.insertRule(e + "{animation-duration:0.0001s;animation-name:" + o + ";}", n.length)]._id = e), a[e] = o), (r[o] = r[o] || []).push(c)
                    }))
                }
            }, off: function (e, i) {
                (o(e) ? e : [e]).map((function (e, o, c, l) {
                    if (o = a[e]) {
                        if (c = r[o], i) for (l = c.length; l--;) c[l] === i && c.splice(l, 1); else c = [];
                        if (!c.length) {
                            for (l = n.length; l--;) n[l]._id == e && t.deleteRule(l);
                            delete a[e], delete r[o]
                        }
                    }
                }))
            }, reset: function () {
                a = {}, r = {}, e && e.parentNode.removeChild(e), e = 0
            }
        }
    }) ? o.apply(t, a) : o) || (e.exports = r)
}, , , , , , function (e, t, n) {
    "use strict";

    function o(e, t) {
        return "key" === t ? e.key.match(/Control|Shift|Alt|Meta/) ? e.key.toLowerCase() : `${a(e, !1)}${e.key.toLowerCase()}` : "code" === t ? e.code.match(/Control|Shift|Alt|Meta/) ? e.code : `${a(e, !0)}${e.code}` : e.key.match(/Control|Shift|Alt|Meta/) ? e[t] : `${a(e, !1)}${e[t]}`
    }

    function a(e, t) {
        return ["ctrl", "shift", "alt", "meta"].filter(t => e[t + "Key"]).map(e => t ? e[0].toUpperCase() + e.slice(1) : e).reduce((e, t) => `${e}${t}+`, "")
    }

    n.d(t, "b", (function () {
        return C
    })), n.d(t, "c", (function () {
        return y
    })), n.d(t, "a", (function () {
        return u
    })), n.d(t, "d", (function () {
        return d
    }));
    var r = (e = {}, t = {}, n = {}) => a => {
        if (!1 === ((t = {
            acceptRepeat: !0,
            customizeKey: void 0,
            excludeTargets: !1,
            keyType: "key",
            log: !1,
            onStart: void 0,
            preventDefault: !0,
            stopPropagation: !1,
            stopImmediatePropagation: !1,
            targets: [], ...t
        }).onStart && t.onStart({ actionMap: e, event: a, options: t })) || !t.acceptRepeat && a.repeat) return;
        const { activeElement: r } = document;
        if (t.targets.length) {
            const e = t.targets.some(e => e instanceof HTMLElement ? e.isEqualNode(r) : "." === e[0] ? [...r.classList].includes(e.slice(1)) : "#" === e[0] ? r.id === e.slice(1) : r.nodeName === e);
            if (!e && !t.excludeTargets || e && t.excludeTargets) return
        }
        const i = o(a, t.keyType), c = t.customizeKey && t.customizeKey({ event: a, key: i }) || i,
            l = ["code", "key", "keyCode", "which"].map(e => ({ keyType: e, key: o(a, e) }));
        t.log && console.log("keyboard-evt", { actionMap: e, event: a, key: c, keys: l, options: t });
        const u = function (e) {
            const t = {};
            return Object.entries(e).forEach(([e, n]) => {
                e.split(" || ").forEach(e => t[e] = n)
            }), t
        }(e)[c];
        return function (e, t, n, o) {
            "function" == typeof t && (n.preventDefault && e.preventDefault(), n.stopPropagation && e.stopPropagation(), n.stopImmediatePropagation && e.stopImmediatePropagation(), n.log && console.log("keyboard-evt-action:", t), t({ event: e, ...o }))
        }(a, u, t, n), { action: u, actionMap: e, event: a, key: c, keys: l, options: t }
    };

    function i(e, t, n, o) {
        return n.preventDefault && e.preventDefault(), n.stopPropagation && e.stopPropagation(), n.stopImmediatePropagation && e.stopImmediatePropagation(), n.log && console.log("mouse-evt-action:", t), t({ event: e, ...o }), t
    }

    function c(e, t, n) {
        return !("function" != typeof e || !n.allowOverlaping && t.length)
    }

    var l = (e = {}, t = {}, n = {}) => o => {
        const a = {
            acceptDetail: "auto",
            allowOverlaping: !1,
            grid: { x: 12, y: 12 },
            ignoreModKey: { ctrl: !1, shift: !1, alt: !1, meta: !1 },
            log: !1,
            onStart: void 0,
            preventDefault: !0,
            stopPropagation: !1,
            stopImmediatePropagation: !1, ...t
        };
        a.acceptDetail = "auto" === a.acceptDetail ? function (e = {}) {
            return [...Object.keys(e)].some(e => e.match(/\+d\d/))
        }(e) : a.acceptDetail;
        if (!1 === (a.onStart && a.onStart({ actionMap: e, event: o, options: a }))) return;
        const r = function (e, t) {
            const { button: n, buttons: o, deltaX: a, deltaY: r, detail: i, type: c } = e,
                l = `${e.ctrlKey && !t.ignoreModKey.ctrl ? "ctrl+" : ""}${e.shiftKey && !t.ignoreModKey.shift ? "shift+" : ""}${e.altKey && !t.ignoreModKey.alt ? "alt+" : ""}${e.metaKey && !t.ignoreModKey.meta ? "meta+" : ""}`;
            return (() => {
                switch (c) {
                    case "mousedown":
                    case "mouseup":
                        return `${l}${c}${n}${t.acceptDetail && i > 1 ? "+d" + i : ""}`;
                    case "click":
                    case "contextmenu":
                    case "dblclick":
                        return `${l}${c}`;
                    case "wheel":
                        if (r) return `${l}${c}${r > 0 ? "down" : "up"}${o || ""}`;
                        if (a) return `${l}${c}${a > 0 ? "right" : "left"}${o || ""}`;
                    default:
                        return
                }
            })()
        }(o, a), { x: l, y: u } = function ({ currentTarget: e, offsetX: t, offsetY: n, target: o }, a) {
            o !== e && (t += o.offsetLeft, n += o.offsetTop);
            let r = Math.floor(t / e.offsetWidth * a.grid.x);
            r = Math.min(Math.max(r, 0), a.grid.x - 1).toString(16).toUpperCase();
            let i = Math.floor(n / e.offsetHeight * a.grid.y);
            return i = Math.min(Math.max(i, 0), a.grid.y - 1).toString(16).toUpperCase(), { x: r, y: i }
        }(o, a);
        a.log && console.log("mouse-evt:", { actionMap: e, event: o, key: r, keyWithGrid: `${r}+g${l}${u}`, options: a });
        const s = [];
        return Object.keys(e).forEach(t => {
            let d = t.match(/\+(g[0-9A-F]{4})/);
            if (d) {
                if (d = d[1], l >= d[1] && l <= d[2] && u >= d[3] && u <= d[4]) {
                    let l = r + "+" + d;
                    if (t !== l) return;
                    const u = e[l];
                    if (!c(u, s, a)) return;
                    return s.push({ action: u, key: l }), i(o, u, a, n)
                }
            } else {
                const l = r === t && e[t];
                if (!c(l, s, a)) return;
                s.push({ action: l, key: r }), i(o, l, a, n)
            }
        }), { actionMap: e, actions: s, event: o, key: r, keyWithGrid: `${r}+g${l}${u}`, options: a }
    };

    function u(e, t = {}) {

        const n = {
            name: document.title,
            quality: .9,
            timestamp: " " + Date.now(),
            type: "image/jpeg",
            ext: "jpg",
            onCapture: void 0, ...t
        }, o = `${n.name && n.name + new Date(e.currentTime * 1000).toISOString().substr(11, 15).replace(/:/g, '-')}.${n.ext}`, a = document.createElement("canvas");
        a.width = e.videoWidth, a.height = e.videoHeight;
        const r = a.getContext("2d");


        // window.open('https://turbotuts.test/playlist/1', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');


        r.drawImage(e, 0, 0, a.width, a.height), n.onCapture && n.onCapture({
            canvas: a,
            ctx: r,
            video: e
        }), a.toBlob(e => {
            const t = document.createElement("a");
            t.href = URL.createObjectURL(e), t.download = o, t.click()
        }, n.type, n.quality)

    }

    function s(e) {
        const { buffered: t, currentTime: n, buffered: { length: o } } = e, a = [];
        for (let e = 0; e < o; e++) a.push({ start: t.start(e), end: t.end(e) });
        return { current: a.find(e => e.start <= n && e.end >= n), ranges: a }
    }

    function d(e, t) {
        const n = parseFloat(e);
        return "%" === ("string" == typeof e ? e.match(/\D+$/)[0] : "s") ? n / 100 * t : n
    }

    var p = {
        pause({ video: e, paused: t, state: n }) {
            t && (n.restorePausedActivated = !0, !n.playbackRate && (n.playbackRate = e.playbackRate), e.playbackRate = 0)
        }, play({ state: e, video: t }) {
            t.playbackRate = e.playbackRate, e.restorePausedActivated = !1, e.playbackRate = null, t.play()
        }
    };

    function y(e, t = {}) {
        const n = { leadingZero: !1, ...t }, o = [];
        return Object.values({ day: 86400, hour: 3600, minute: 60, second: 1 }).forEach(t => {
            if (e >= t) {
                const n = parseInt(e / t, 10);
                e -= n * t, o.push(n)
            } else o.length && o.push(0)
        }), !o.length && o.push(0), o.length < 2 && o.unshift(0), o.map((e, t) => e.toString().length > 1 || 0 === t && !n.leadingZero ? e : "0" + e).join(":")
    }

    const m = new Map;

    function f({ video: e, detail: { action: t, value: n, info: o } = {} }, a = {}) {
        const r = {
            duration: 600,
            elementClass: "player-ctrl__action-info-element",
            elementId: "player-ctrl-action-info-element",
            elementStyle: void 0,
            elementStyleOffsetTop: .06,
            root: void 0,
            useShadowDOM: !0, ...a
        };
        if (!e || !t && !o) return;
        const i = void 0 !== o ? o : t.toLowerCase().includes("playbackrate") ? (void 0 !== n ? n : e.playbackRate) + "x" : t.toLowerCase().includes("seek") ? "" + y(void 0 !== n ? n : e.currentTime) : t.toLowerCase().includes("volume") ? `${Math.round(100 * (void 0 !== n ? n : e.volume))}%${e.muted ? " (Muted)" : ""}` : t.toLowerCase().includes("mute") ? (void 0 !== n ? n : e.muted) ? "Muted" : "Unmuted" : t.toLowerCase().includes("capturevideoframe") ? "Frame Captured" : void 0;
        if (!i) return;
        const c = document.getElementById(r.elementId) || function (e, t) {
            const n = document.createElement("span");
            n.id = t.elementId, n.className = t.elementClass, n.style = function (e, t) {
                return `\n    background: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(255, 255, 255, .12);\n    border-radius: 4px;\n    color: #eee;\n    display: flex;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    line-height: 1.15;\n    padding: 0.5em 1em;\n    pointer-events: none;\n    position: absolute;\n    top: calc(${e.offsetTop}px + ${e.offsetHeight * t.elementStyleOffsetTop}px);\n    left: ${e.offsetLeft + e.offsetWidth / 2}px;\n    transform: translateX(-50%);\n    ${"function" == typeof t.elementStyle ? t.elementStyle(e) : t.elementStyle}\n  `
            }(e, t);
            const o = t.useShadowDOM ? function (e, t) {
                e.removeAttribute("id");
                const n = document.createElement("div");
                return n.id = t.elementId, Element.prototype.attachShadow.call(n, { mode: "open" }), n.shadowRoot.append(e), n
            }(n, t) : n;
            return (t.root || e.parentElement).append(o), o
        }(e, r);
        r.useShadowDOM ? c.shadowRoot.firstChild.textContent = i : c.textContent = i, function ({ id: e, duration: t, onBefore: n, onAfter: o }) {
            let a = m.get(e);
            clearTimeout(a), n && n(), a = setTimeout(() => {
                o && o()
            }, t), m.set(e, a)
        }({
            id: r.elementId, duration: r.duration, onAfter() {
                c.remove()
            }
        })
    }

    var g = {
        click: () => {
        }, "ctrl+click": () => {
        }, "shift+click": () => {
        }, "alt+click": () => {
        }, "ctrl+shift+click": () => {
        }, "ctrl+alt+click": () => {
        }, "shift+alt+click": () => {
        }, "ctrl+shift+alt+click": () => {
        }, mouseup0: () => {
        }, "ctrl+mouseup0": () => {
        }, "shift+mouseup0": () => {
        }, "alt+mouseup0": () => {
        }, "ctrl+shift+mouseup0": () => {
        }, "ctrl+alt+mouseup0": () => {
        }, "shift+alt+mouseup0": () => {
        }, "ctrl+shift+alt+mouseup0": () => {
        }
    };
    var v = {
        "mousedown0+g020B": { action: "setPlaybackRate", payload: 1 },
        "mousedown0+g380B": { action: "togglePlay" },
        "mousedown0+g9B0B": { action: "toggleMute" },
        dblclick: ({ video: e }) => document.fullscreenElement ? document.exitFullscreen() : e.parentElement.requestFullscreen(),
        "ctrl+mousedown0+g380B": { action: "captureVideoFrame" }
    };
    var h = {
        "wheeldown+g020B": { action: "adjustPlaybackRateBy", payload: -.1 },
        "wheelup+g020B": { action: "adjustPlaybackRateBy", payload: .1 },
        "wheeldown+g380B": { action: "seekBy", payload: -5 },
        "wheelup+g380B": { action: "seekBy", payload: 5 },
        "wheeldown+g9B0B": { action: "adjustVolumeBy", payload: -.05 },
        "wheelup+g9B0B": { action: "adjustVolumeBy", payload: .05 }
    };
    var b = {
        ...{
            "Alt+ArrowDown": { action: "adjustPlaybackRateBy", payload: -.25 },
            "Alt+ArrowUp": { action: "adjustPlaybackRateBy", payload: .25 },
            ArrowLeft: { action: "seekBy", payload: -5 },
            ArrowRight: { action: "seekBy", payload: 5 },
            Space: { action: "togglePlay" },
            ArrowDown: { action: "adjustVolumeBy", payload: -.05 },
            ArrowUp: { action: "adjustVolumeBy", payload: .05 },
            KeyM: { action: "toggleMute" },
            KeyR: { action: "captureVideoFrame" },
            Escape: ({ video: e }) => e.blur()
        }, ...{ ...g, ...v, ...h }, ...{
            "pandown+g020B": { action: "adjustPlaybackRateBy", payload: -.1 },
            "panup+g020B": { action: "adjustPlaybackRateBy", payload: .1 },
            "tap+g020B": { action: "setPlaybackRate", payload: 1 },
            "panleft+g380B": { action: "seekBy", payload: -1 },
            "panright+g380B": { action: "seekBy", payload: 1 },
            "tap+g380B": { action: "togglePlay" },
            "pandown+g9B0B": { action: "adjustVolumeBy", payload: -.01 },
            "panup+g9B0B": { action: "adjustVolumeBy", payload: .01 },
            "tap+g9B0B": { action: "toggleMute" }
        }
    };
    var w = {
        "mousedown0+g020B": { action: "setPlaybackRate", payload: 1 },
        "ctrl+mousedown0+g0203": { action: "setPlaybackRate", payload: 2 },
        "ctrl+mousedown0+g0247": { action: "setPlaybackRate", payload: 1 },
        "ctrl+mousedown0+g028B": { action: "setPlaybackRate", payload: .25 },
        "mousedown0+g380B": { action: "togglePlay" },
        "mousedown0+g9B0B": { action: "toggleMute" },
        "ctrl+mousedown0+g9B03": { action: "setVolume", payload: .8 },
        "ctrl+mousedown0+g9B47": { action: "setVolume", payload: .5 },
        "ctrl+mousedown0+g9B8B": { action: "setVolume", payload: .2 },
        dblclick: ({ video: e }) => document.fullscreenElement ? document.exitFullscreen() : e.parentElement.requestFullscreen(),
        "ctrl+mousedown0+g380B": { action: "captureVideoFrame" }
    };
    var k = {
        "wheeldown+g0203": { action: "adjustPlaybackRateBy", payload: -.5 },
        "wheelup+g0203": { action: "adjustPlaybackRateBy", payload: .5 },
        "wheeldown+g0247": { action: "adjustPlaybackRateBy", payload: -.25 },
        "wheelup+g0247": { action: "adjustPlaybackRateBy", payload: .25 },
        "wheeldown+g028B": { action: "adjustPlaybackRateBy", payload: -.1 },
        "wheelup+g028B": { action: "adjustPlaybackRateBy", payload: .1 },
        "ctrl+wheeldown+g0203": { action: "adjustPlaybackRateBy", payload: -2 },
        "ctrl+wheelup+g0203": { action: "adjustPlaybackRateBy", payload: 2 },
        "ctrl+wheeldown+g024B": { action: "setPlaybackRate", payload: 1 },
        "ctrl+wheelup+g024B": { action: "setPlaybackRate", payload: 1 },
        "wheeldown+g3803": { action: "seekBy", payload: "-5%" },
        "wheelup+g3803": { action: "seekBy", payload: "5%" },
        "wheeldown+g3847": { action: "seekBy", payload: -5 },
        "wheelup+g3847": { action: "seekBy", payload: 5 },
        "wheeldown+g388B": { action: "seekBy", payload: -1 },
        "wheelup+g388B": { action: "seekBy", payload: 1 },
        "ctrl+wheeldown+g3803": { action: "seekBy", payload: "-25%" },
        "ctrl+wheelup+g3803": { action: "seekBy", payload: "25%" },
        "ctrl+wheeldown+g384B": { action: "seekBy", payload: -.04 },
        "ctrl+wheelup+g384B": { action: "seekBy", payload: .04 },
        "wheeldown+g9B03": { action: "adjustVolumeBy", payload: -.1 },
        "wheelup+g9B03": { action: "adjustVolumeBy", payload: .1 },
        "wheeldown+g9B47": { action: "adjustVolumeBy", payload: -.05 },
        "wheelup+g9B47": { action: "adjustVolumeBy", payload: .05 },
        "wheeldown+g9B8B": { action: "adjustVolumeBy", payload: -.01 },
        "wheelup+g9B8B": { action: "adjustVolumeBy", payload: .01 },
        "ctrl+wheeldown+g9B03": { action: "adjustVolumeBy", payload: -.25 },
        "ctrl+wheelup+g9B03": { action: "adjustVolumeBy", payload: .25 },
        "ctrl+wheeldown+g9B4B": { action: "setMuted", payload: !0 },
        "ctrl+wheelup+g9B4B": { action: "setMuted", payload: !1 }
    };
    var S = {
        ...{
            "Alt+ArrowDown": { action: "adjustPlaybackRateBy", payload: -.25 },
            "Alt+ArrowUp": { action: "adjustPlaybackRateBy", payload: .25 },
            "Ctrl+Alt+ArrowDown": { action: "adjustPlaybackRateBy", payload: -.1 },
            "Ctrl+Alt+ArrowUp": { action: "adjustPlaybackRateBy", payload: .1 },
            "Ctrl+Shift+Alt+ArrowDown": { action: "setPlaybackRate", payload: 1 },
            "Ctrl+Shift+Alt+ArrowUp": { action: "setPlaybackRate", payload: 1 },
            ArrowLeft: { action: "seekBy", payload: -5 },
            ArrowRight: { action: "seekBy", payload: 5 },
            "Ctrl+ArrowLeft": { action: "seekBy", payload: -1 },
            "Ctrl+ArrowRight": { action: "seekBy", payload: 1 },
            "Shift+ArrowLeft": { action: "seekBy", payload: "-5%" },
            "Shift+ArrowRight": { action: "seekBy", payload: "5%" },
            "Ctrl+Shift+ArrowLeft": { action: "seekBy", payload: -.04 },
            "Ctrl+Shift+ArrowRight": { action: "seekBy", payload: .04 },
            Space: { action: "togglePlay" },
            ArrowDown: { action: "adjustVolumeBy", payload: -.05 },
            ArrowUp: { action: "adjustVolumeBy", payload: .05 },
            "Ctrl+ArrowDown": { action: "adjustVolumeBy", payload: -.01 },
            "Ctrl+ArrowUp": { action: "adjustVolumeBy", payload: .01 },
            "Shift+ArrowDown": { action: "adjustVolumeBy", payload: -.1 },
            "Shift+ArrowUp": { action: "adjustVolumeBy", payload: .1 },
            KeyM: { action: "toggleMute" },
            KeyR: { action: "captureVideoFrame" },
            Escape: ({ video: e }) => e.blur()
        }, ...{ ...g, ...w, ...k }, ...{
            "pandown+g020B": { action: "adjustPlaybackRateBy", payload: -.1 },
            "panup+g020B": { action: "adjustPlaybackRateBy", payload: .1 },
            "tap+g020B": { action: "setPlaybackRate", payload: 1 },
            "panleft+g380B": { action: "seekBy", payload: -1 },
            "panright+g380B": { action: "seekBy", payload: 1 },
            "tap+g380B": { action: "togglePlay" },
            "pandown+g9B0B": { action: "adjustVolumeBy", payload: -.01 },
            "panup+g9B0B": { action: "adjustVolumeBy", payload: .01 },
            "tap+g9B0B": { action: "toggleMute" }
        }
    }, B = { basic: b, advanced: S };

    function x(e, t = {}) {
        const n = {}, o = { ...B[t.preset], ...t.userPreset };
        return Object.entries(o).forEach(([t, o]) => {
            if ("function" == typeof o) return n[t] = e => P(o(e));
            const { action: a, payload: r } = o;
            if ("function" == typeof a) return n[t] = e => P(a(e, r));
            e && (n[t] = () => {
                e[a](r), P({ action: a })
            })
        }), n
    }

    function P(e) {
        if (!e) return;
        const t = new CustomEvent("player-ctrl-action", { detail: e });
        document.dispatchEvent(t)
    }

    function C(e, t = {}) {
        let n, o, a, i, c, y = {
            area: void 0,
            actionInfo: {},
            actionInfoDisabled: !1,
            active: !0,
            events: ["click", "dblclick", "mousedown", "mouseup", "wheel", "keydown"],
            force: !1,
            keyboardEventTarget: document,
            modKey: "shift",
            mouseEvt: {},
            onPlayerCtrlAction: void 0,
            preset: "basic",
            touchEvents: void 0,
            userPreset: {},
            userPresetPassive: {},
            videoCtrl: {},
            videoCtrlDisabled: !1, ...t,
            keyboardEvt: { keyType: "code", targets: ["BODY", "VIDEO"], ...t.keyboardEvt }
        };

        function m(t) {
            if (!1 !== y.active) return !0 === y.active || y.active.includes("fullscreen") && document.fullscreenElement ? l(n, { ...i, ...y.mouseEvt }, { video: e })(t) : y.active.includes("modKey") && t[y.modKey + "Key"] ? l(n, {
                ...i,
                ignoreModKey: { [y.modKey]: !0 }, ...y.mouseEvt
            }, { video: e })(t) : void l(o, { ...i, ...y.mouseEvt }, { video: e })(t)
        }

        function g(t) {
            r(n, { ...i, ...y.keyboardEvt }, { video: e })(t)
        }

        function v({ detail: t }) {
            y.onPlayerCtrlAction && (t = y.onPlayerCtrlAction(t)), f({ video: e, detail: t }, y.actionInfo)
        }

        function h() {
            a = y.area || e, c = !y.videoCtrlDisabled && e && function (e, t = {}) {
                if (!e) return;
                const n = {
                    bufferHeadroom: 1,
                    playbackRateMin: .25,
                    playbackRateMax: 16,
                    playbackRateStep: .1,
                    restorePausedOnSeek: !1,
                    seekStep: 5,
                    seekWithinCurrentBuffer: !1,
                    volumeStep: .05,
                    unmuteOnAdjustVolume: !1, ...t
                }, o = { playbackRate: null, restorePausedActivated: !1 }, a = (t = n.playbackRateStep) => {
                    const o = Math.round(100 * e.playbackRate + 100 * t) / 100;
                    if (e.playbackRate < 1 && o > 1) return e.playbackRate = 1;
                    e.playbackRate = Math.min(o, n.playbackRateMax)
                }, r = (t = n.playbackRateStep) => {
                    const o = Math.round(100 * e.playbackRate - 100 * t) / 100;
                    if (e.playbackRate > 1 && o < 1) return e.playbackRate = 1;
                    e.playbackRate = Math.max(n.playbackRateMin, o)
                }, i = (t = n.seekStep, a = {}) => {
                    const r = { ...n, ...a }, { currentTime: i, duration: c, paused: l } = e, u = i - Math.abs(d(t, c));
                    if (r.seekWithinCurrentBuffer) {
                        const t = s(e).current.start;
                        return e.currentTime = u - r.bufferHeadroom > t ? u : Math.min(t + r.bufferHeadroom, i), void (n.restorePausedOnSeek && p.pause({
                            paused: l,
                            state: o,
                            video: e
                        }))
                    }
                    e.currentTime = Math.max(u, 0), n.restorePausedOnSeek && p.pause({ paused: l, state: o, video: e })
                }, c = (t = n.seekStep, a = {}) => {
                    const r = { ...n, ...a }, { currentTime: i, duration: c, paused: l } = e, u = i + Math.abs(d(t, c));
                    if (r.seekWithinCurrentBuffer) {
                        const t = s(e).current.end;
                        return e.currentTime = u + r.bufferHeadroom < t ? u : Math.max(t - r.bufferHeadroom, i), void (n.restorePausedOnSeek && p.pause({
                            paused: l,
                            state: o,
                            video: e
                        }))
                    }
                    e.currentTime = Math.min(u, c), n.restorePausedOnSeek && p.pause({ paused: l, state: o, video: e })
                }, l = (t = n.volumeStep) => {
                    let { volume: o } = e;
                    o = Math.round(100 * o - 100 * t) / 100, e.volume = Math.max(0, o), n.unmuteOnAdjustVolume && (e.muted = !1)
                }, y = (t = n.volumeStep) => {
                    let { volume: o } = e;
                    o = Math.round(100 * o + 100 * t) / 100, e.volume = Math.min(o, 1), n.unmuteOnAdjustVolume && (e.muted = !1)
                };
                return {
                    captureVideoFrame: u.bind(null, e), getBuffered: s.bind(null, e), adjustPlaybackRateBy: e => {
                        e && (e > 0 ? a(Math.abs(e)) : r(Math.abs(e)))
                    }, decreasePlaybackRate: r, increasePlaybackRate: a, setPlaybackRate: t => {
                        t >= n.playbackRateMin && t <= n.playbackRateMax && (e.playbackRate = t)
                    }, seekBackward: i, seekForward: c, seekBy: (e, t = {}) => {
                        e && (parseFloat(e) > 0 ? c(e, t) : i(e, t))
                    }, seekTo: t => {
                        const n = d(t, e.duration);
                        e.currentTime = n
                    }, play: (t = 1) => {
                        if (t) return e.play();
                        e.pause()
                    }, togglePlay: () => {
                        if (n.restorePausedOnSeek && o.restorePausedActivated) return p.play({ state: o, video: e });
                        e.paused ? e.play() : e.pause()
                    }, adjustVolumeBy: e => {
                        e && (e > 0 ? y(Math.abs(e)) : l(Math.abs(e)))
                    }, decreaseVolume: l, increaseVolume: y, setVolume: t => {
                        t >= 0 && t <= 1 && (e.volume = t)
                    }, setMuted: t => e.muted = t, toggleMute: () => e.muted = !e.muted, video: e
                }
            }(e, y.videoCtrl), n = x(c, y), o = x(c, {
                ...y,
                preset: null,
                userPreset: y.userPresetPassive
            }), i = y.force ? { stopPropagation: !0, stopImmediatePropagation: !0 } : {}, y.events.forEach(e => {
                if (e.match(/(keydown|keyup)/)) return y.keyboardEventTarget.addEventListener(e, g, y.force);
                a.addEventListener(e, m, y.force)
            }), !y.actionInfoDisabled && document.addEventListener("player-ctrl-action", v), y.touchEvents && y.touchEvents.add({
                actionMap: n,
                actionMapPassive: o,
                area: a,
                video: e,
                options: y
            })
        }

        function b() {
            y.events.forEach(e => {
                if (e.match(/(keydown|keyup)/)) return y.keyboardEventTarget.removeEventListener(e, g, y.force);
                a.removeEventListener(e, m, y.force)
            }), document.removeEventListener("player-ctrl-action", v), y.touchEvents && y.touchEvents.remove()
        }

        return h(), {
            options: y, videoCtrl: c, start: h, stop: b, update: function (e) {
                b(), y = { ...y, ...e }, h()
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function o() {
        return "music.youtube.com" === window.location.hostname
    }

    n.d(t, "a", (function () {
        return o
    }))
}, , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return l
    })), n.d(t, "b", (function () {
        return c
    }));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var o = function () {
        return (o = Object.assign || function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    };

    function a(e) {
        return "--" + e.replace(/^-+/, "")
    }

    function r(e, t) {
        void 0 === t && (t = {});
        var n = o({ element: document.documentElement, parse: !1 }, t);
        if (!n.element) return "";
        var r = n.element.style.getPropertyValue(a(e)) || getComputedStyle(n.element).getPropertyValue(a(e));
        if (!0 === n.parse || "float" === n.parse) {
            var i = parseFloat(r);
            return Number.isNaN(i) ? r : i
        }
        if ("int" === n.parse) {
            i = parseInt(r);
            return Number.isNaN(i) ? r : i
        }
        return r
    }

    function i(e, t) {
        void 0 === t && (t = {});
        var n = o({ element: document.documentElement }, t);
        if (Array.isArray(e)) return e.forEach((function (e) {
            var t, o = e[0], r = e[1];
            null === (t = n.element) || void 0 === t || t.style.setProperty(a(o), null === r ? null : String(r))
        }));
        Object.entries(e).forEach((function (e) {
            var t, o = e[0], r = e[1];
            null === (t = n.element) || void 0 === t || t.style.setProperty(a(o), null === r ? null : String(r))
        }))
    }

    function c(e) {
        var t = o({ element: document.documentElement, parse: !1 }, e);
        return {
            get: function (e, n) {
                return r(e, o(o({}, t), n))
            }, set: function (e, n) {
                return i(e, o(o({}, t), n))
            }
        }
    }

    var l = { get: r, set: i }
}, , , , , function (e, t, n) {
    "use strict";

    function o(e, t) {
        return "key" === t ? e.key.match(/Control|Shift|Alt|Meta/) ? e.key.toLowerCase() : `${a(e, !1)}${e.key.toLowerCase()}` : "code" === t ? e.code.match(/Control|Shift|Alt|Meta/) ? e.code : `${a(e, !0)}${e.code}` : e.key.match(/Control|Shift|Alt|Meta/) ? e[t] : `${a(e, !1)}${e[t]}`
    }

    function a(e, t) {
        return ["ctrl", "shift", "alt", "meta"].filter(t => e[t + "Key"]).map(e => t ? e[0].toUpperCase() + e.slice(1) : e).reduce((e, t) => `${e}${t}+`, "")
    }

    function r(e) {
        if ("string" != typeof e) return e;
        if (!e.match(/^\d+:/)) return e;
        const t = e.match(/^\d+/);
        return `${e.match(/ctrl\+/) || ""}${e.match(/shift\+/) || ""}${e.match(/alt\+/) || ""}${e.match(/meta\+/) || ""}` + t
    }

    n.d(t, "a", (function () {
        return i
    })), n.d(t, "b", (function () {
        return r
    }));
    var i = (e = {}, t = {}) => n => {
        if (!(t = {
            acceptRepeat: !0,
            excludeTargets: !1,
            includeKeyCode: !1,
            keyType: "key",
            log: !1,
            onAction: void 0,
            preventDefault: !0,
            stopPropagation: !1,
            stopImmediatePropagation: !1,
            targets: [], ...t
        }).acceptRepeat && n.repeat) return;
        const { activeElement: a } = document;
        if (t.targets.length) {
            const e = t.targets.some(e => e instanceof HTMLElement ? e.isEqualNode(a) : "." === e[0] ? [...a.classList].includes(e.slice(1)) : "#" === e[0] ? a.id === e.slice(1) : a.nodeName === e);
            if (!e && !t.excludeTargets || e && t.excludeTargets) return
        }
        const i = o(n, t.keyType), c = t.includeKeyCode && `${n.keyCode}:${o(n, "key")}`;
        t.log && console.log({ event: n, key: i, keyWithKeyCode: c });
        const { parsedActionMap: l, parsedActionMapWithKeyCodes: u } = function (e) {
            const t = {}, n = {};
            return Object.entries(e).forEach(([e, o]) => {
                const a = e.split(" || ");
                a.forEach(e => t[e] = o), a.forEach(e => n[r(e)] = o)
            }), { parsedActionMap: t, parsedActionMapWithKeyCodes: n }
        }(e), s = l[c] || l[i] || u[o(n, "keyCode")];
        return s && (!function (e, t, n, o) {
            "function" == typeof t && (n.preventDefault && e.preventDefault(), n.stopPropagation && e.stopPropagation(), n.stopImmediatePropagation && e.stopImmediatePropagation(), n.log && console.log("keyboard-evt-action:", t), t(e))
        }(n, s, t), t.onAction && t.onAction()), { event: n, key: i, keyWithKeyCode: c }
    }
}, , , , function (e, t, n) {
    (function (t) {
        var n = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, r = /^0o[0-7]+$/i, i = parseInt,
            c = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            u = c || l || Function("return this")(), s = Object.prototype.toString, d = Math.max, p = Math.min,
            y = function () {
                return u.Date.now()
            };

        function m(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function f(e) {
            if ("number" == typeof e) return e;
            if (function (e) {
                return "symbol" == typeof e || function (e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == s.call(e)
            }(e)) return NaN;
            if (m(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = m(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(n, "");
            var c = a.test(e);
            return c || r.test(e) ? i(e.slice(2), c ? 2 : 8) : o.test(e) ? NaN : +e
        }

        e.exports = function (e, t, n) {
            var o, a, r, i, c, l, u = 0, s = !1, g = !1, v = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function h(t) {
                var n = o, r = a;
                return o = a = void 0, u = t, i = e.apply(r, n)
            }

            function b(e) {
                return u = e, c = setTimeout(k, t), s ? h(e) : i
            }

            function w(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || g && e - u >= r
            }

            function k() {
                var e = y();
                if (w(e)) return S(e);
                c = setTimeout(k, function (e) {
                    var n = t - (e - l);
                    return g ? p(n, r - (e - u)) : n
                }(e))
            }

            function S(e) {
                return c = void 0, v && o ? h(e) : (o = a = void 0, i)
            }

            function B() {
                var e = y(), n = w(e);
                if (o = arguments, a = this, l = e, n) {
                    if (void 0 === c) return b(l);
                    if (g) return c = setTimeout(k, t), h(l)
                }
                return void 0 === c && (c = setTimeout(k, t)), i
            }

            return t = f(t) || 0, m(n) && (s = !!n.leading, r = (g = "maxWait" in n) ? d(f(n.maxWait) || 0, t) : r, v = "trailing" in n ? !!n.trailing : v), B.cancel = function () {
                void 0 !== c && clearTimeout(c), u = 0, o = l = a = c = void 0
            }, B.flush = function () {
                return void 0 === c ? i : S(y())
            }, B
        }
    }).call(this, n(136))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    })), n.d(t, "b", (function () {
        return r
    }));
    var o = n(9);

    function a(e) {
        o.a.add({ action: "enterPictureInPicture", fn: () => r(e) })
    }

    async function r(e) {
        e || (e = document.querySelector("#movie_player video"));
        try {
            e !== document.pictureInPictureElement ? await e.requestPictureInPicture() : await document.exitPictureInPicture()
        } catch (e) {
            console.log("enterPIP error:", e)
        }
    }
}, , function (e, t, n) {
    "use strict";

    function o({ event: e }) {
        return ["html5-main-video", "html5-video-player", "ytp-player-content", "song-media-controls"].some(t => e.target.classList.contains(t))
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var o = n(25), a = n(10);

    function r({ lines: e, span: t, yRatio: n }) {
        return t.offsetHeight / e * n * .2
    }

    function i(e, t) {
        const n = {
            quality: t.cvfQuality,
            type: "image/" + t.cvfType,
            typeTitle: "JPEG" === t.cvfType ? "JPG" : t.cvfType,
            ext: "JPEG" === t.cvfType ? "jpg" : t.cvfType,
            onCapture: e => function ({ ctx: e, video: t }, n) {
                if (!n.cvfIncludeSubtitles) return;
                let o = 0;
                document.querySelectorAll(".ytp-caption-segment").forEach((function (a) {
                    var i;
                    const c = document.querySelector(".caption-window"), l = t.videoWidth / t.offsetWidth,
                        u = t.videoHeight / t.offsetHeight,
                        s = n.subtitlesPosition ? (t.videoWidth - c.offsetWidth * l) / 2 : Math.min(t.videoWidth - c.offsetWidth * l, Math.max(0, c.offsetLeft - ((null === (m = t.closest("#movie_player")) || void 0 === m ? void 0 : m.offsetWidth) - t.offsetWidth) / 2) * l),
                        d = Math.min(t.videoHeight - c.offsetHeight * u, Math.max(0, (c.offsetTop - ((null === (i = t.closest("#movie_player")) || void 0 === i ? void 0 : i.offsetHeight) - t.offsetHeight) / 2) * u)),
                        p = getComputedStyle(a), y = parseInt(p.paddingLeft, 10);
                    var m;
                    e.fillStyle = a.style.backgroundColor, e.fillRect(s + a.offsetLeft * l, d + o, a.offsetWidth * l, a.offsetHeight * u), o += a.offsetHeight * u;
                    const f = parseFloat(p.fontSize), { fontFamily: g } = p,
                        v = Math.floor(a.offsetHeight / Math.round(f));
                    if (e.font = `${f * l}px ${g}`, e.fillStyle = p.color, v <= 1) return e.fillText(a.textContent, s + a.offsetLeft * l + y * l, d + o - r({
                        lines: v,
                        span: a,
                        yRatio: u
                    }));
                    !function ({ ctx: e, text: t, x: n, y: o, maxWidth: a, lineHeight: r, padding: i }) {
                        const c = t.match(/\s/), l = t.split(c ? " " : "");
                        let u = "";
                        for (let t = 0; t < l.length; t += 1) {
                            const n = `${u}${l[t]}${c ? " " : ""}`;
                            e.measureText(n).width > a - i && t > 0 ? (e.fillText(u, s(u), o), u = `${l[t]}${c ? " " : ""}`, o += r) : u = n
                        }

                        function s(t) {
                            const o = e.measureText(t).width;
                            return n + (a - o) / 2
                        }

                        e.fillText(u, s(u), o)
                    }({
                        ctx: e,
                        text: a.textContent,
                        x: s + a.offsetLeft * l,
                        y: d + o - a.offsetHeight / v * u - r({ lines: v, span: a, yRatio: u }),
                        maxWidth: c.offsetWidth * l,
                        lineHeight: a.offsetHeight * u / v,
                        padding: y * l
                    })
                }))
            }(e, t)
        };
        Object(o.a)(e, n), Object(a.a)(`Take a Video Snapshot (${n.typeTitle})`, { duration: 1500 })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    var o = n(26);

    function a(e, t) {
        return Object(o.a)() ? document.querySelector(".song-media-controls") : "player" === t.mouseControlElement && document.querySelector("#movie_player") || e
    }
}, , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(5), a = n(10);

    async function r() {
        const { initialLoop: e } = await o.d.get(["initialLoop"]).catch(() => {
        }), t = !e;
        o.d.set({ initialLoop: t }), Object(a.a)("Loop Every Video: " + (t ? "On" : "Off"), { duration: 1500 })
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        let t;
        return t = e ? e.closest("#movie_player") || e.closest(".html5-video-player") : document.querySelector("#movie_player"), t || console.error("YouTube player element not found."), t
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return f
    }));
    var o = n(47), a = n(17), r = n(44), i = n(65), c = n(84), l = n(85), u = n(86), s = n(83), d = n(52), p = n(87),
        y = n(89), m = n(90);

    function f(e, t, n) {
        const f = {}, g = Object(a.a)(t, n);
        return (Array.isArray(e) ? function (e) {
            return e.map(({ action: e, payload: t, key: n }) => [n, { action: e, payload: t }])
        }(e) : Object.entries(e)).forEach(([e, a]) => {
            const { action: v, payload: h } = a;
            if ((e = e.replace(/mousedown2/, "contextmenu")).match(/^mousedown0\+g/) && (f[e.replace(/mousedown0/, "click")] = () => {
            }), e.match(/wheel(down|up|left|right)2\+g/)) return f[e] = () => {
                g(v, h), document.addEventListener("contextmenu", e => {
                    e.preventDefault(), e.stopPropagation()
                }, { capture: !0, once: !0 })
            };
            if ("function" == typeof a) return f[e] = a;
            const b = Object(i.a)(v);
            if (b) return f[e] = () => b(n);
            switch (v) {
                case "enterPictureInPicture":
                    return f[e] = () => Object(r.b)(t, n);
                case "captureVideoFrame":
                    return f[e] = () => Object(o.a)(t, n);
                case "scrollBackToComment":
                    return f[e] = () => Object(c.b)();
                case "toggleCinemaMode":
                    return f[e] = () => Object(p.b)(n);
                case "toggleEmbedMode":
                    return f[e] = () => Object(l.b)(n);
                case "toggleInitialLoop":
                    return f[e] = () => Object(d.a)(n);
                case "toggleSubtitlesDisabled":
                    return f[e] = () => Object(s.b)();
                case "toggleVideoDimmer":
                    return f[e] = () => Object(y.b)();
                case "toggleVideoPlaybackInfo":
                    return f[e] = () => Object(m.b)(n);
                case "viewCurrentThumbnail":
                    return f[e] = () => Object(u.b)();
                case "doNothing":
                    return f[e] = () => {
                    }
            }
            f[e] = () => g(v, h)
        }), f
    }
}, , , function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var o = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;

    function i(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                return t[e]
            })).join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                o[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, c, l = i(e), u = 1; u < arguments.length; u++) {
            for (var s in n = Object(arguments[u])) a.call(n, s) && (l[s] = n[s]);
            if (o) {
                c = o(n);
                for (var d = 0; d < c.length; d++) r.call(n, c[d]) && (l[c[d]] = n[c[d]])
            }
        }
        return l
    }
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    }));
    var o = {
        get: function (e, t) {
            const n = { session: !1, ...t };
            let o;
            try {
                o = n.session ? sessionStorage[e] : localStorage[e]
            } catch (t) {
                console.error(`Unable to access "${e}" in ${n.session ? "session" : "local"}Storage.\n${t}`)
            }
            return o
        }, set: function (e, t, n) {
            const o = { session: !1, ...n };
            let a;
            try {
                o.session ? sessionStorage[e] = t : localStorage[e] = t, a = !0
            } catch (t) {
                console.error(`Unable to set "${e}" in ${o.session ? "session" : "local"}Storage.\n${t}`)
            }
            return a
        }
    }
}, , function (e, t, n) {
    "use strict";

    function o(e) {
        return [...e.interactionZonesMouseButtonPresets[e.interactionZonesMouseButton].actionMap, ...e.interactionZonesMouseWheelPresets[e.interactionZonesMouseWheel].actionMap]
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var o = n(57), a = "function" == typeof Symbol && Symbol.for, r = a ? Symbol.for("react.element") : 60103,
        i = a ? Symbol.for("react.portal") : 60106, c = a ? Symbol.for("react.fragment") : 60107,
        l = a ? Symbol.for("react.strict_mode") : 60108, u = a ? Symbol.for("react.profiler") : 60114,
        s = a ? Symbol.for("react.provider") : 60109, d = a ? Symbol.for("react.context") : 60110,
        p = a ? Symbol.for("react.forward_ref") : 60112, y = a ? Symbol.for("react.suspense") : 60113,
        m = a ? Symbol.for("react.memo") : 60115, f = a ? Symbol.for("react.lazy") : 60116,
        g = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    var h = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, b = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || h
    }

    function k() {
    }

    function S(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || h
    }

    w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, k.prototype = w.prototype;
    var B = S.prototype = new k;
    B.constructor = S, o(B, w.prototype), B.isPureReactComponent = !0;
    var x = { current: null }, P = Object.prototype.hasOwnProperty, C = { key: !0, ref: !0, __self: !0, __source: !0 };

    function M(e, t, n) {
        var o, a = {}, i = null, c = null;
        if (null != t) for (o in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (i = "" + t.key), t) P.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) a.children = n; else if (1 < l) {
            for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
            a.children = u
        }
        if (e && e.defaultProps) for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
        return { $$typeof: r, type: e, key: i, ref: c, props: a, _owner: x.current }
    }

    function E(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
    }

    var j = /\/+/g, O = [];

    function T(e, t, n, o) {
        if (O.length) {
            var a = O.pop();
            return a.result = e, a.keyPrefix = t, a.func = n, a.context = o, a.count = 0, a
        }
        return { result: e, keyPrefix: t, func: n, context: o, count: 0 }
    }

    function A(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > O.length && O.push(e)
    }

    function R(e, t, n) {
        return null == e ? 0 : function e(t, n, o, a) {
            var c = typeof t;
            "undefined" !== c && "boolean" !== c || (t = null);
            var l = !1;
            if (null === t) l = !0; else switch (c) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case r:
                        case i:
                            l = !0
                    }
            }
            if (l) return o(a, t, "" === n ? "." + V(t, 0) : n), 1;
            if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var u = 0; u < t.length; u++) {
                var s = n + V(c = t[u], u);
                l += e(c, s, o, a)
            } else if (null === t || "object" != typeof t ? s = null : s = "function" == typeof (s = g && t[g] || t["@@iterator"]) ? s : null, "function" == typeof s) for (t = s.call(t), u = 0; !(c = t.next()).done;) l += e(c = c.value, s = n + V(c, u++), o, a); else if ("object" === c) throw o = "" + t, Error(v(31, "[object Object]" === o ? "object with keys {" + Object.keys(t).join(", ") + "}" : o, ""));
            return l
        }(e, "", t, n)
    }

    function V(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function (e) {
            var t = { "=": "=0", ":": "=2" };
            return "$" + ("" + e).replace(/[=:]/g, (function (e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function L(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function I(e, t, n) {
        var o = e.result, a = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? D(e, o, n, (function (e) {
            return e
        })) : null != e && (E(e) && (e = function (e, t) {
            return { $$typeof: r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
        }(e, a + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(j, "$&/") + "/") + n)), o.push(e))
    }

    function D(e, t, n, o, a) {
        var r = "";
        null != n && (r = ("" + n).replace(j, "$&/") + "/"), R(e, I, t = T(t, r, o, a)), A(t)
    }

    var _ = { current: null };

    function $() {
        var e = _.current;
        if (null === e) throw Error(v(321));
        return e
    }

    var F = {
        ReactCurrentDispatcher: _,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: x,
        IsSomeRendererActing: { current: !1 },
        assign: o
    };
    t.Children = {
        map: function (e, t, n) {
            if (null == e) return e;
            var o = [];
            return D(e, o, null, t, n), o
        }, forEach: function (e, t, n) {
            if (null == e) return e;
            R(e, L, t = T(null, null, t, n)), A(t)
        }, count: function (e) {
            return R(e, (function () {
                return null
            }), null)
        }, toArray: function (e) {
            var t = [];
            return D(e, t, null, (function (e) {
                return e
            })), t
        }, only: function (e) {
            if (!E(e)) throw Error(v(143));
            return e
        }
    }, t.Component = w, t.Fragment = c, t.Profiler = u, t.PureComponent = S, t.StrictMode = l, t.Suspense = y, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(v(267, e));
        var a = o({}, e.props), i = e.key, c = e.ref, l = e._owner;
        if (null != t) {
            if (void 0 !== t.ref && (c = t.ref, l = x.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (s in t) P.call(t, s) && !C.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s) a.children = n; else if (1 < s) {
            u = Array(s);
            for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
            a.children = u
        }
        return { $$typeof: r, type: e.type, key: i, ref: c, props: a, _owner: l }
    }, t.createContext = function (e, t) {
        return void 0 === t && (t = null), (e = {
            $$typeof: d,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = { $$typeof: s, _context: e }, e.Consumer = e
    }, t.createElement = M, t.createFactory = function (e) {
        var t = M.bind(null, e);
        return t.type = e, t
    }, t.createRef = function () {
        return { current: null }
    }, t.forwardRef = function (e) {
        return { $$typeof: p, render: e }
    }, t.isValidElement = E, t.lazy = function (e) {
        return { $$typeof: f, _ctor: e, _status: -1, _result: null }
    }, t.memo = function (e, t) {
        return { $$typeof: m, type: e, compare: void 0 === t ? null : t }
    }, t.useCallback = function (e, t) {
        return $().useCallback(e, t)
    }, t.useContext = function (e, t) {
        return $().useContext(e, t)
    }, t.useDebugValue = function () {
    }, t.useEffect = function (e, t) {
        return $().useEffect(e, t)
    }, t.useImperativeHandle = function (e, t, n) {
        return $().useImperativeHandle(e, t, n)
    }, t.useLayoutEffect = function (e, t) {
        return $().useLayoutEffect(e, t)
    }, t.useMemo = function (e, t) {
        return $().useMemo(e, t)
    }, t.useReducer = function (e, t, n) {
        return $().useReducer(e, t, n)
    }, t.useRef = function (e) {
        return $().useRef(e)
    }, t.useState = function (e) {
        return $().useState(e)
    }, t.version = "16.13.1"
}, function (e, t, n) {
    "use strict";

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    n.d(t, "a", (function () {
        return i
    }));

    class a {
        constructor() {
            o(this, "elements", new Map), o(this, "on", (e, t, n, o) => {
                !function (e, t, n, o) {
                    if (!e) throw new Error("Missing arguments: htmlElement");
                    if (!t) throw new Error("Missing arguments: eventType");
                    if (!n) throw new Error("Missing arguments: fn")
                }(e, t, n);
                const a = this.elements.get(e);
                if (!a) return this._addNewElement(e, t, n, o);
                this._updateElement(a, e, t, n, o)
            }), o(this, "clear", () => {
                for (const [e, { listeners: t }] of this.elements.entries()) t.forEach(({ type: t, options: n }) => e.removeEventListener(t, this._handleEvent, n)), this.elements.delete(e)
            }), o(this, "_addEventListener", (e, t, n) => {
                e.addEventListener(t, this._handleEvent, n)
            }), o(this, "_addNewElement", (e, t, n, o) => {
                this.elements.set(e, {
                    actions: { [t]: [n] },
                    listeners: [{ type: t, options: o }]
                }), this._addEventListener(e, t, o)
            }), o(this, "_handleEvent", e => {
                const t = this.elements.get(e.currentTarget).actions[e.type];
                t && t.forEach(t => t(e))
            }), o(this, "_updateElement", (e, t, n, o, a) => {
                e.listeners.some(({ type: e }) => e === n) || (this._addEventListener(t, n, a), e.listeners.push({
                    type: n,
                    options: a
                })), e.actions[n] ? e.actions[n].push(o) : e.actions[n] = [o], this.elements.set(t, e)
            })
        }
    }

    var r = n(39);
    var i = function ({ keyboardEvtOptions: e, ...t } = {}) {
        const n = {
            keyboardEvtOptions: {
                includeKeyCode: !0,
                targets: ["A", "BODY", "H1", "H2", "BUTTON", "VIDEO", "#movie_player", ".html5-video-player", ".ytp-button", ".ytp-progress-bar", ".ytp-volume-panel"],
                stopPropagation: !0, ...e
            }, useCapture: !0, ...t
        }, o = new a;
        return o.add = e => {
            o.on(document, "keydown", Object(r.a)(e, n.keyboardEvtOptions), n.useCapture)
        }, o
    }
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var o = n(53), a = n(10);
    const r = {
        changeCommentsSortBy() {
            const e = document.querySelectorAll("ytd-comments #sort-menu a.yt-dropdown-menu");
            2 === e.length && (e[0].classList.contains("iron-selected") ? e[1].click() : e[0].click())
        }, dislike() {
            var e, t;
            null === (e = document.querySelectorAll("#info #menu-container button")) || void 0 === e || null === (t = e[1]) || void 0 === t || t.click()
        }, like() {
            var e, t;
            null === (e = document.querySelectorAll("#info #menu-container button")) || void 0 === e || null === (t = e[0]) || void 0 === t || t.click()
        }, nextVideo() {
            var e;
            null === (e = document.querySelector(".ytp-next-button")) || void 0 === e || e.click()
        }, previousVideo() {
            var e;
            null === (e = document.querySelector(".ytp-prev-button")) || void 0 === e || e.click()
        }, save() {
            var e, t;
            null === (e = document.querySelectorAll("#info #menu-container button")) || void 0 === e || null === (t = e[3]) || void 0 === t || t.click()
        }, share() {
            var e, t;
            null === (e = document.querySelectorAll("#info #menu-container button")) || void 0 === e || null === (t = e[2]) || void 0 === t || t.click()
        }, toggleAutoPlay(e) {
            var t;
            const n = document.querySelector(".ytp-autonav-toggle-button");
            n && (n.click(), ("persistent-mini" === e.ytpControlsMode || (null === (t = Object(o.a)()) || void 0 === t ? void 0 : t.classList.contains("ytp-autohide"))) && setTimeout(() => {
                Object(a.a)("Auto-play is " + ("true" === n.getAttribute("aria-checked") ? "on" : "off"), { duration: 1500 })
            }, 1))
        }, toggleMiniplayer() {
            var e, t;
            if (window.location.pathname.match(/\/watch/)) return null === (t = document.querySelector(".ytp-miniplayer-button")) || void 0 === t ? void 0 : t.click();
            null === (e = document.querySelector(".ytp-miniplayer-expand-watch-page-button")) || void 0 === e || e.click()
        }, toggleSubtitles() {
            var e;
            null === (e = document.querySelector(".ytp-subtitles-button")) || void 0 === e || e.click()
        }, toggleTheatreMode() {
            var e;
            null === (e = document.querySelector(".ytp-size-button")) || void 0 === e || e.click()
        }, togglePlayerSettings() {
            var e;
            null === (e = document.querySelector(".ytp-button.ytp-settings-button")) || void 0 === e || e.click()
        }, viewChapter() {
            const e = document.querySelector(".ytp-button.ytp-chapter-title");
            if (!e || e.hasAttribute("disabled")) return Object(a.a)("Chapter info not available", { duration: 1500 });
            e.click()
        }
    };

    function i(e) {
        return r[e]
    }
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        const n = t.indexOf(e);
        return {
            next() {
                if (-1 === n) return;
                const e = (n + 1) % t.length;
                return { index: e, value: t[e] }
            }, prev() {
                if (-1 === n) return;
                const e = n ? (n - 1) % t.length : t.length - 1;
                return { index: e, value: t[e] }
            }
        }
    }

    n.d(t, "a", (function () {
        return o
    }))
}, , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return O
    }));
    var o = n(34);
    let a, r, i, c, l, u = !1, s = !1, d = {};

    function p(e) {
        v() || (cancelAnimationFrame(i), e.stopPropagation(), "mousedown" === e.type && e.preventDefault(), s = !1, u = !0, d = {
            x: e.clientX,
            y: e.clientY
        })
    }

    function y(e) {
        if (!v()) return e.stopPropagation(), u = !1, l > 1 ? i = requestAnimationFrame(() => function e() {
            if (r = [.9 * r[0], .9 * r[1]], Math.abs(r[0]) < 4 && Math.abs(r[1]) < 4) return cancelAnimationFrame(i);
            c.scrollBy(...r), i = requestAnimationFrame(() => {
                e(c)
            })
        }(e.target.parentElement)) : void 0
    }

    function m(e) {
        if (v() || !u) return;
        e.preventDefault(), c = e.target.parentElement;
        const t = function (e) {
            if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
            return { x: e.clientX, y: e.clientY }
        }(e);
        r = [d.x - t.x, d.y - t.y], c.scrollBy(...r), l = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2)), s = !0, d = t
    }

    function f(e) {
        e.preventDefault(), u = !1
    }

    function g(e) {
        !v() && s && (e.stopPropagation(), e.stopImmediatePropagation())
    }

    function v() {
        return !!a && a()
    }

    var h = {
        start: function (e, t = {}) {
            e && (t.cancel && (a = t.cancel), e.addEventListener("mousedown", p), e.addEventListener("mouseup", y), e.addEventListener("mousemove", m), e.addEventListener("mouseout", f), e.addEventListener("click", g), e.addEventListener("touchstart", p), e.addEventListener("touchend", y), e.addEventListener("touchmove", m))
        }, stop: function (e) {
            e && (e.removeEventListener("mousedown", p), e.removeEventListener("mouseup", y), e.removeEventListener("mousemove", m), e.removeEventListener("mouseout", f), e.removeEventListener("click", g), e.addEventListener("touchstart", p), e.addEventListener("touchend", y), e.addEventListener("touchmove", m))
        }
    };

    function b({ event: e, cssVarElement: t }, n = {}) {
        const a = { zoomFactor: 1.25, ...n };
        if (!function (e) {
            return e.target.dataset.zoom
        }(e)) return;
        e.preventDefault(), e.stopPropagation();
        const r = e.target.dataset.zoomTarget ? e.target : e.target.querySelector('[data-zoom-target="true"]'),
            i = r.parentElement, c = Object(o.b)({ element: t, parse: "float" }), l = c.get("image-scale");
        let u;
        if ("click" === e.type) {
            if (1 !== l) return c.set({ "image-scale": 1 });
            const e = Math.min(i.offsetWidth / r.naturalWidth, i.offsetHeight / r.naturalHeight);
            u = e > 1 ? e : 1 / e
        }
        e.deltaY < 0 && (u = l * a.zoomFactor), e.deltaY > 0 && (u = l / a.zoomFactor);
        const s = function ({ image: e, event: t, scale: n, container: o }) {
            const { width: a, height: r, offsetWidth: i, offsetHeight: c } = t.target, l = t.offsetX / (a || i),
                u = e.dataset.initialWidth * n * l - o.offsetWidth * l, s = t.offsetY / (r || c),
                d = e.dataset.initialHeight * n * s - o.offsetHeight * s;
            return [u, d]
        }({ event: e, image: r, container: i, scale: u });
        c.set({ "image-scale": u }), i.scrollTo(...s)
    }

    function w({ container: e, spinner: t } = {}, n) {
        const a = document.createElement("img");

        function r() {
            return 1 === o.a.get("image-scale", { element: e, parse: "float" })
        }

        function i(t) {
            t.stopPropagation(), b({ event: t, image: a, cssVarElement: e })
        }

        function c(t) {
            t.stopPropagation(), b({ event: t, image: a, cssVarElement: e })
        }

        return a.id = "gallectron-image-lex-image", a.className = "gallectron-image-lex__image", a.dataset.zoom = !0, a.dataset.zoomTarget = !0, a.style.opacity = 0, a.onload = () => {
            (function (e, t, n) {
                const a = Math.min(t.offsetWidth / e.naturalWidth, t.offsetHeight / e.naturalHeight);
                let r, i;
                a < 1 ? (r = e.naturalWidth * a, i = e.naturalHeight * a) : (r = e.naturalWidth, i = e.naturalHeight), e.dataset.initialWidth = r, e.dataset.initialHeight = i, o.a.set({
                    "image-scale": n.fitImageToContainer && a > 1 ? a : 1,
                    "image-width": r + "px",
                    "image-height": i + "px"
                }, { element: t })
            })(a, e, n), t.style.display = "none", setTimeout(() => {
                a.style.opacity = 1
            }, 25), h.start(a, { cancel: r }), a.addEventListener("click", i), a.addEventListener("wheel", c)
        }, a
    }

    var k, S = n(13), B = n.n(S), x = n(91), P = 0, C = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, M = {};
    M.locals = x.a.locals || {}, M.use = function () {
        return P++ || (k = B()(x.a, C)), M
    }, M.unuse = function () {
        P > 0 && !--P && (k(), k = null)
    };
    var E = M, j = n(113);

    function O(e = null, t = {}) {
        const n = {
            id: "gallectron-image-lex",
            fitImageToContainer: !1,
            hasEscapeKeyDown: !0,
            parent: document.body,
            rootInlineStyles: "",
            useShadowDOM: !1, ...t
        }, o = { parentStyleOverflow: null }, a = function ({ onClick: e, onWheel: t }, n) {
            const o = document.createElement("div");
            return o.id = n.id, o.className = "gallectron-image-lex__root", o.dataset.zoom = !0, o.style = n.rootInlineStyles, o.addEventListener("click", t => {
                e && e(t)
            }), o.addEventListener("wheel", e => {
                b({ event: e, cssVarElement: o }), t && t(e)
            }), o
        }({ onClick: u }, n), r = n.useShadowDOM && function ({ element: e, id: t, parent: n, styles: o } = {}) {
            const a = n || document.createElement("div");
            return t && (a.id = t), Element.prototype.attachShadow.call(a, { mode: "open" }), o && o.forEach(e => {
                const t = document.createElement("style");
                t.innerHTML = e, a.shadowRoot.appendChild(t)
            }), a.shadowRoot.appendChild(e), a
        }({ element: a, id: n.id, styles: [j.a] }), i = function () {
            const e = document.createElement("div");
            e.id = "gallectron-image-lex-spinner", e.className = "gallectron-image-lex__spinner";
            const t = document.createElement("div");
            return e.append(t), e
        }(), c = w({ container: a, spinner: i }, n), l = function ({ onClick: e }) {
            const t = document.createElement("button");
            return t.id = "gallectron-image-lex-button-x", t.className = "gallectron-image-lex__button gallectron-image-lex__button-x", t.innerHTML = "<span>&#x2716;</span>", t.addEventListener("click", t => {
                e && e(t)
            }), t
        }({ onClick: u });

        function u() {
            (r || a).remove(), n.parent.style.overflow = o.parentStyleOverflow
        }

        return a.append(c), a.append(i), a.append(l), n.hasEscapeKeyDown && document.addEventListener("keydown", (function (e) {
            if ("Escape" !== e.code) return;
            e.preventDefault(), e.stopPropagation(), u()
        })), e && function (e) {
            Object.entries(e).forEach(([e, t]) => c[e] = t), o.parentStyleOverflow = n.parent.style.overflow, n.parent.style.overflow = "hidden", document.getElementById(n.id) || document.body.append(r || a)
        }(e), a.close = u, { element: a, close: u }
    }

    E.use()
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return f
    })), n.d(t, "b", (function () {
        return i
    }));
    var o = n(5), a = n(9), r = n(10);

    async function i() {
        const { subtitlesDisabled: e } = await o.d.get(["subtitlesDisabled"]).catch(() => {
        }), t = !e;
        o.d.set({ subtitlesDisabled: t }), Object(r.a)("Disable Subtitles: " + (t ? "On" : "Off"), { duration: 1500 })
    }

    var c, l = n(13), u = n.n(l), s = n(92), d = 0, p = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, y = {};
    y.locals = s.a.locals || {}, y.use = function () {
        return d++ || (c = u()(s.a, p)), y
    }, y.unuse = function () {
        d > 0 && !--d && (c(), c = null)
    };
    var m = y;

    function f(e) {
        function t(e) {
            e.subtitlesDisabled && m.use()
        }

        return t(e), a.a.add({ action: "toggleSubtitlesDisabled", fn: i }), {
            update: function (e) {
                m.unuse(), t(e)
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return c
    })), n.d(t, "b", (function () {
        return l
    }));
    var o = n(9), a = n(10);
    let r, i;

    function c() {
        document.addEventListener("click", (function (e) {
            const { target: t } = e;
            "A" === t.nodeName && t.href.match(/&t=\d/) && (r = window.scrollY, i = t)
        }), !0), o.a.add({ action: "backToComment", fn: l })
    }

    function l() {
        if (!r) return Object(a.a)("Back to the comment not available", { duration: 1500 });
        try {
            i.scrollIntoView({ block: "center" })
        } catch {
            window.scrollTo(0, r)
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "b", (function () {
        return i
    }));
    var o = n(9), a = n(17);

    function r(e) {
        o.a.add({ action: "embedMode", fn: () => i(e) });
        const t = {
            canStartEmbedMode(e) {
                e(window.location.pathname.includes("/watch") || window.location.pathname.includes("/embed"))
            }, toggleEmbedMode() {
                i(e)
            }
        };
        chrome.runtime.onMessage.addListener(({ type: e, action: n }, o, a) => {
            if ("twfytRuntimeMessage" !== e) return;
            const r = t[n];
            r && r(a)
        })
    }

    function i(e) {
        if (window.location.pathname.includes("/embed")) {
            const e = document.querySelector("video");
            e && Object(a.a)(e)("reverseEmbed")
        }
        if (window.location.pathname.includes("/watch")) {
            const t = new URLSearchParams(window.location.search).get("v");
            if (!t) return;
            const n = document.querySelector("#movie_player video"),
                o = Math.floor((null == n ? void 0 : n.currentTime) || 0);
            if ("current" === e.embedModeWindow) return void (window.location = `${window.location.origin}/embed/${t}?start=${o}&autoplay=1`);
            n && n.pause(), window.open(`${window.location.origin}/embed/${t}?start=${o}&autoplay=1`, "twfyt-embedded-video-window", "width=1280, height=720")
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return c
    })), n.d(t, "b", (function () {
        return i
    }));
    var o = n(81), a = n(9), r = n(88);

    async function i() {
        const e = document.getElementById("twfyt-thumbnail");
        if (e) return e.shadowRoot ? e.shadowRoot.querySelector("#twfyt-thumbnail").close() : e.close();
        const t = Object(r.a)();
        if (!t) return;
        const n = await (async () => {
            const e = `https://i3.ytimg.com/vi/${t}/maxresdefault.jpg`,
                n = `https://i3.ytimg.com/vi/${t}/hqdefault.jpg`, o = new Image;
            o.src = e;
            return await new Promise(e => {
                o.onload = () => {
                    e(o.width > 120)
                }
            }) ? e : n
        })();
        Object(o.a)({ src: n }, { id: "twfyt-thumbnail", parent: document.fullscreenElement || document.body })
    }

    function c() {
        a.a.add({ action: "viewCurrentThumbnail", fn: i })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return i
    }));
    var o = n(5), a = n(9);

    async function r() {
        const { cinemaMode: e } = await o.d.get(["cinemaMode"]).catch(e => console.error(e)), t = !e && "mastheadFixed";
        o.d.set({ cinemaMode: t })
    }

    function i() {
        a.a.add({ action: "toggleCinemaMode", fn: r })
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e ? e.match(/\/embed\//) ? e.split("/")[2] : new URLSearchParams(new URL(e).search).get("v") : new URLSearchParams(window.location.search).get("v") || window.location.pathname.match(/\/embed\//) && window.location.pathname.split("/")[2]
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return i
    })), n.d(t, "a", (function () {
        return c
    }));
    var o = n(5), a = n(9), r = n(10);

    async function i() {
        const { videoDimmer: e, videoDimmerBrightness: t } = await o.d.get(["videoDimmer", "videoDimmerBrightness"]).catch(e => console.error(e)),
            n = !e;
        Object(r.a)(n ? `Video Dimmer: Brightness ${100 * t}%` : "Video Dimmer: Off", { duration: 1500 }), o.d.set({ videoDimmer: n })
    }

    function c() {
        a.a.add({ action: "toggleVideoDimmer", fn: i })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return i
    }));
    var o = n(5), a = n(9);

    async function r() {
        const { videoPlaybackInfo: e } = await o.d.get(["videoPlaybackInfo"]).catch(e => console.error(e)), t = !e;
        o.d.set({ videoPlaybackInfo: t })
    }

    function i() {
        a.a.add({ action: "toggleVideoPlaybackInfo", fn: r })
    }
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ":root{--gallectron-image-lex-background: 14, 14, 14;--gallectron-image-lex-background-opacity: 1;--gallectron-image-lex-color: 255, 255, 255;--gallectron-image-lex-font-size: 16px;--gallectron-image-lex-z-index: 1000000}.gallectron-image-lex__root{--image-scale: 1;--image-width: initial;--image-height: initial;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(14, 14, 14, 1);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), var(--gallectron-image-lex-background-opacity, 0.96));display:flex;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size:16px;font-size:var(--gallectron-image-lex-font-size, 16px);overflow:hidden;z-index:1000000;z-index:var(--gallectron-image-lex-z-index, 1)}.gallectron-image-lex__image{cursor:pointer;margin:auto;width:calc(var(--image-width) * var(--image-scale));height:calc(var(--image-height) * var(--image-scale));transition:opacity 300ms cubic-bezier(0, 0, 0.2, 1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gallectron-image-lex__button{background:rgba(14, 14, 14, 0.64);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), 0.64);border:1px solid rgba(255, 255, 255, 0.12);border:1px solid rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.12);border-radius:50%;color:rgba(255, 255, 255, 0.64);color:rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.64);cursor:pointer;font-size:inherit;display:flex;align-items:center;justify-content:center;line-height:1em;position:fixed;width:3em;height:3em;transition:all 200ms cubic-bezier(0.4, 0, 0.2, 1)}.gallectron-image-lex__button:hover,.gallectron-image-lex__button:focus{background:rgba(14, 14, 14, 0.96);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), 0.96);border:1px solid rgba(255, 255, 255, 0.96);border:1px solid rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.96);color:rgba(255, 255, 255, 0.64);color:rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.64)}.gallectron-image-lex__button:active{background:rgba(0, 0, 0, 0.96);background:rgba(var(--gallectron-image-background, 0, 0, 0), 0.96);border:1px solid rgba(255, 255, 255, 0.48);border:1px solid rgba(var(--gallectron-image-color, 255, 255, 255), 0.48);color:rgba(255, 255, 255, 96);color:rgba(var(--gallectron-image-color, 255, 255, 255), 96)}.gallectron-image-lex__button.gallectron-image-lex__button-x{top:1em;right:1em}.gallectron-image-lex__spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none}.gallectron-image-lex__spinner>div{border:4px solid rgba(255, 255, 255, 0.24);border:4px solid rgba(var(--gallectron-image-lex-color), 0.24);border-radius:50%;border-top-color:rgba(255, 255, 255, 0.64);border-top-color:rgba(var(--gallectron-image-lex-color), 0.64);width:2em;height:2em;pointer-events:none;-webkit-animation:spinner-spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite,spinner-fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 1;animation:spinner-spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite,spinner-fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 1}@-webkit-keyframes spinner-spin{to{transform:rotate(360deg)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-fadein{from{opacity:0}to{opacity:1}}@keyframes spinner-fadein{from{opacity:0}to{opacity:1}}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".ytp-caption-window-container{display:none}\n", ""]), t.a = a
}, , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return n.preventDefault && e.preventDefault(), n.stopPropagation && e.stopPropagation(), n.stopImmediatePropagation && e.stopImmediatePropagation(), n.log && console.log("mouse-evt-action:", t), t({ event: e, ...o }), t
    }

    function a(e, t, n) {
        return !("function" != typeof e || !n.allowOverlaping && t.length)
    }

    n.d(t, "a", (function () {
        return r
    }));
    var r = (e = {}, t = {}, n = {}) => r => {
        const i = {
            acceptDetail: "auto",
            allowOverlaping: !1,
            grid: { x: 12, y: 12 },
            ignoreModKey: { ctrl: !1, shift: !1, alt: !1, meta: !1 },
            log: !1,
            onStart: void 0,
            preventDefault: !0,
            stopPropagation: !1,
            stopImmediatePropagation: !1, ...t
        };
        i.acceptDetail = "auto" === i.acceptDetail ? function (e = {}) {
            return [...Object.keys(e)].some(e => e.match(/\+d\d/))
        }(e) : i.acceptDetail;
        if (!1 === (i.onStart && i.onStart({ actionMap: e, event: r, options: i }))) return;
        const c = function (e, t) {
            const { button: n, buttons: o, deltaX: a, deltaY: r, detail: i, type: c } = e,
                l = `${e.ctrlKey && !t.ignoreModKey.ctrl ? "ctrl+" : ""}${e.shiftKey && !t.ignoreModKey.shift ? "shift+" : ""}${e.altKey && !t.ignoreModKey.alt ? "alt+" : ""}${e.metaKey && !t.ignoreModKey.meta ? "meta+" : ""}`;
            return (() => {
                switch (c) {
                    case "mousedown":
                    case "mouseup":
                        return `${l}${c}${n}${t.acceptDetail && i > 1 ? "+d" + i : ""}`;
                    case "click":
                    case "contextmenu":
                    case "dblclick":
                        return `${l}${c}`;
                    case "wheel":
                        if (r) return `${l}${c}${r > 0 ? "down" : "up"}${o || ""}`;
                        if (a) return `${l}${c}${a > 0 ? "right" : "left"}${o || ""}`;
                    default:
                        return
                }
            })()
        }(r, i), { x: l, y: u } = function ({ currentTarget: e, offsetX: t, offsetY: n, target: o }, a) {
            o !== e && (t += o.offsetLeft, n += o.offsetTop);
            let r = Math.floor(t / e.offsetWidth * a.grid.x);
            r = Math.min(Math.max(r, 0), a.grid.x - 1).toString(16).toUpperCase();
            let i = Math.floor(n / e.offsetHeight * a.grid.y);
            return i = Math.min(Math.max(i, 0), a.grid.y - 1).toString(16).toUpperCase(), { x: r, y: i }
        }(r, i);
        i.log && console.log("mouse-evt:", { actionMap: e, event: r, key: c, keyWithGrid: `${c}+g${l}${u}`, options: i });
        const s = [];
        return Object.keys(e).forEach(t => {
            let d = t.match(/\+(g[0-9A-F]{4})/);
            if (d) {
                if (d = d[1], l >= d[1] && l <= d[2] && u >= d[3] && u <= d[4]) {
                    let l = c + "+" + d;
                    if (t !== l) return;
                    const u = e[l];
                    if (!a(u, s, i)) return;
                    return s.push({ action: u, key: l }), o(r, u, i, n)
                }
            } else {
                const l = c === t && e[t];
                if (!a(l, s, i)) return;
                s.push({ action: l, key: c }), o(r, l, i, n)
            }
        }), { actionMap: e, actions: s, event: r, key: c, keyWithGrid: `${c}+g${l}${u}`, options: i }
    }
}, function (e, t, n) {
    "use strict";

    function o() {
        var e;
        return [...(null === (e = document.querySelector("div#description")) || void 0 === e ? void 0 : e.querySelectorAll("a")) || []].filter(e => e.href.match(/youtube.com\/watch\?.*(\?|&)t=\d+s/) && e.textContent.match(/^\d+(:\d+)+$/)).map(e => {
            var t;
            return {
                start: parseInt(null === (t = e.href.match(/(\?|&)t=(\d+)s/)) || void 0 === t ? void 0 : t[2], 10),
                link: e
            }
        })
    }

    function a({ currentTime: e } = {}) {
        const t = o(), n = t.findIndex(({ start: t }) => t > e);
        return -1 === n ? t.length - 1 : n - 1
    }

    n.d(t, "a", (function () {
        return r
    }));
    var r = {
        getChapter: function (e) {
            return o()[e]
        }, getChapters: o, getCurrentChapterIndex: a, getCurrentChapterIndexFromHoverEffect: function () {
            var e, t;
            const n = document.querySelector(".ytp-chapter-hover-container.ytp-exp-chapter-hover-container.ytp-exp-chapter-hover-effect"),
                o = null == n || null === (e = n.parentElement) || void 0 === e ? void 0 : e.children;
            if (o) return [...o].indexOf(n);
            const r = null === (t = document.querySelector(".ytp-tooltip-text")) || void 0 === t ? void 0 : t.textContent;
            if (!r) return;
            return a({ currentTime: r.split(":").reverse().slice(0, 3).reduce((e, t, n) => e + parseInt(t, 10) * 60 ** n, 0) })
        }
    }
}, , , , , function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ":root{--gallectron-image-lex-background: 14, 14, 14;--gallectron-image-lex-background-opacity: 1;--gallectron-image-lex-color: 255, 255, 255;--gallectron-image-lex-font-size: 16px;--gallectron-image-lex-z-index: 1000000}.gallectron-image-lex__root{--image-scale: 1;--image-width: initial;--image-height: initial;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(14, 14, 14, 1);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), var(--gallectron-image-lex-background-opacity, 0.96));display:flex;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size:16px;font-size:var(--gallectron-image-lex-font-size, 16px);overflow:hidden;z-index:1000000;z-index:var(--gallectron-image-lex-z-index, 1)}.gallectron-image-lex__image{cursor:pointer;margin:auto;width:calc(var(--image-width) * var(--image-scale));height:calc(var(--image-height) * var(--image-scale));transition:opacity 300ms cubic-bezier(0, 0, 0.2, 1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gallectron-image-lex__button{background:rgba(14, 14, 14, 0.64);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), 0.64);border:1px solid rgba(255, 255, 255, 0.12);border:1px solid rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.12);border-radius:50%;color:rgba(255, 255, 255, 0.64);color:rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.64);cursor:pointer;font-size:inherit;display:flex;align-items:center;justify-content:center;line-height:1em;position:fixed;width:3em;height:3em;transition:all 200ms cubic-bezier(0.4, 0, 0.2, 1)}.gallectron-image-lex__button:hover,.gallectron-image-lex__button:focus{background:rgba(14, 14, 14, 0.96);background:rgba(var(--gallectron-image-lex-background, 0, 0, 0), 0.96);border:1px solid rgba(255, 255, 255, 0.96);border:1px solid rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.96);color:rgba(255, 255, 255, 0.64);color:rgba(var(--gallectron-image-lex-color, 255, 255, 255), 0.64)}.gallectron-image-lex__button:active{background:rgba(0, 0, 0, 0.96);background:rgba(var(--gallectron-image-background, 0, 0, 0), 0.96);border:1px solid rgba(255, 255, 255, 0.48);border:1px solid rgba(var(--gallectron-image-color, 255, 255, 255), 0.48);color:rgba(255, 255, 255, 96);color:rgba(var(--gallectron-image-color, 255, 255, 255), 96)}.gallectron-image-lex__button.gallectron-image-lex__button-x{top:1em;right:1em}.gallectron-image-lex__spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none}.gallectron-image-lex__spinner>div{border:4px solid rgba(255, 255, 255, 0.24);border:4px solid rgba(var(--gallectron-image-lex-color), 0.24);border-radius:50%;border-top-color:rgba(255, 255, 255, 0.64);border-top-color:rgba(var(--gallectron-image-lex-color), 0.64);width:2em;height:2em;pointer-events:none;-webkit-animation:spinner-spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite,spinner-fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 1;animation:spinner-spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite,spinner-fadein 1s cubic-bezier(0.4, 0, 0.2, 1) 1}@-webkit-keyframes spinner-spin{to{transform:rotate(360deg)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-fadein{from{opacity:0}to{opacity:1}}@keyframes spinner-fadein{from{opacity:0}to{opacity:1}}\n", ""]), t.a = a
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return p
    }));
    var o = n(26);
    var a = {
        levelToPowerFactor: e => Math.round(1 * Math.pow(10, e / 10) * 1e6) / 1e6,
        powerFactorToLevel: e => Math.round(10 * Math.log(e / 1) * Math.LOG10E * 1e6) / 1e6,
        levelToVoltageFactor: e => Math.round(1 * Math.pow(10, e / 20) * 1e6) / 1e6,
        voltageFactorToLevel: e => Math.round(20 * Math.log(e / 1) * Math.LOG10E * 1e6) / 1e6,
        levelToVolumeFactor: e => Math.round(1e6 * Math.pow(10, .301029995664 * e / 10)) / 1e6,
        volumeFactorToLevel: e => Math.round(33.21928095 * Math.log(e) / Math.log(10) * 1e6) / 1e6
    };
    var r = n(19), i = n.n(r);

    function c(e, t, n) {
        if (!(n = n || document.querySelector(".html5-video-info-panel-content"))) return;
        let a = n.querySelector("#twfyt-stats-for-nerds-gain-info");
        if (!a) {
            if (Object(o.a)() || !t.audioAutoGain) return;
            a = document.createElement("div"), a.id = "twfyt-stats-for-nerds-gain-info";
            const e = document.createElement("div");
            e.textContent = "Auto Gain";
            const r = document.createElement("span");
            a.append(e), a.append(r), n.insertBefore(a, n.children[4])
        }
        if (Object(o.a)() || !t.audioAutoGain) return a.remove();
        a.querySelector("span").textContent = "" + e.toFixed(2)
    }

    var l = n(5), u = n(9), s = n(10);

    async function d() {
        const { audioAutoGain: e } = await l.d.get(["audioAutoGain"]).catch(e => console.error(e)), t = !e;
        l.d.set({ audioAutoGain: t }), Object(s.a)("Auto Gain: " + (t ? "On" : "Off"), { duration: 1500 })
    }

    function p(e, t) {
        const n = { autoGainFactor: 1, boostGainValue: 0 };
        let r, p, y, m, f, g, v;

        function h({ audioAutoGain: t, audioBoostGain: i, audioHPF: c, audioHPFFrequency: l, audioMonoMix: u, audioMonoMixSource: s }) {
            if (Object(o.a)() && (t = !1), !(v || t || i || c || u)) return;
            v ? (y.disconnect(), g.disconnect(), m.disconnect(), p.disconnect(), v.disconnect()) : (r = new AudioContext, v = r.createMediaElementSource(e), y = r.createGain(), f = new StereoPannerNode(r, { pan: 0 }), g = r.createChannelSplitter(2), m = r.createChannelMerger(2), p = r.createBiquadFilter(), p.type = "highpass"), n.boostGainValue = a.levelToVoltageFactor(i) - 1, v.connect(y), y.gain.setValueAtTime(n.autoGainFactor + n.boostGainValue, r.currentTime), p.frequency.setValueAtTime(l, r.currentTime);
            const { channel1: d, channel2: h } = function (e) {
                switch (e) {
                    case "left":
                        return { channel1: 0, channel2: 0 };
                    case "right":
                        return { channel1: 1, channel2: 1 };
                    default:
                        return { channel1: 0, channel2: 1 }
                }
            }(s);
            return u && c ? (y.connect(g), g.connect(f, d).connect(m, 0, 0), g.connect(f, h).connect(m, 0, 1), m.connect(p).connect(r.destination)) : u ? (y.connect(g), g.connect(f, d).connect(m, 0, 0), g.connect(f, h).connect(m, 0, 1), m.connect(r.destination)) : c ? y.connect(p).connect(r.destination) : void y.connect(r.destination)
        }

        window.addEventListener("message", ({ data: e }) => {
            var o, i;
            "twfyt-set-auto-gain-level" === e.type && (n.autoGainFactor = function (e, t) {
                const n = (() => {
                    const n = e.payload;
                    return n < 0 && n > t.audioAutoGainBoostThreshold ? 0 : n < 0 ? 1.2 * n : n
                })(), o = "boost" === t.audioAutoGainMode ? Math.max(0, 0 - n) : 0 - n, r = a.levelToVolumeFactor(o);
                return Math.min(30, r)
            }(e, t), (null === (o = r) || void 0 === o ? void 0 : o.currentTime) && (null === (i = y) || void 0 === i || i.gain.setValueAtTime(n.autoGainFactor + n.boostGainValue, r.currentTime)), c(n.autoGainFactor, t))
        });
        try {
            h(t)
        } catch (e) {
            console.error(e)
        }
        return u.a.add({ action: "toggleAudioAutoGain", fn: d }), u.a.add({
            action: "toggleAudioHPF",
            fn: async function () {
                const { audioHPF: e } = await l.d.get(["audioHPF"]).catch(e => console.error(e)), t = !e;
                l.d.set({ audioHPF: t }), Object(s.a)("High Pass Filter: " + (t ? "On" : "Off"), { duration: 1500 })
            }
        }), u.a.add({
            action: "toggleAudioMonoMix", fn: async function () {
                const { audioMonoMix: e } = await l.d.get(["audioMonoMix"]).catch(e => console.error(e)), t = !e;
                l.d.set({ audioMonoMix: t }), Object(s.a)("Mono Mix: " + (t ? "On" : "Off"), { duration: 1500 })
            }
        }), function (e, t) {
            i.a.on(".html5-video-info-panel-content", n => {
                c(e.autoGainFactor, t, n)
            })
        }(n, t), {
            update: function (e) {
                try {
                    h(e)
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return y
    }));
    var o = n(25), a = n(61), r = n(54), i = n(48), c = n(46), l = n(66), u = n(5), s = n(9), d = n(10);
    const p = new Map([[!0, "Always On"], ["modKey", "With ModKey"], ["fullscreen", "In Fullscreen"], ["modKey+fullscreen", "ModKey + Fullscreen"], [!1, "Off"]]);

    function y(e, t) {
        const n = {
            active: t.mouseControlActive,
            area: Object(i.a)(e, t),
            events: ["click", "contextmenu", "mousedown", "wheel"],
            force: !0,
            modKey: t.mouseControlModKey,
            preset: null,
            userPreset: Object(r.a)(Object(a.a)(t), e, t),
            mouseEvt: { onStart: c.a }
        }, y = Object(o.b)(e, n);
        return s.a.add({
            action: "cycleMouseControlActive", fn: async function () {
                const { mouseControlActive: e } = await u.d.get(["mouseControlActive"]).catch(e => console.error(e)),
                    t = Object(l.a)(e, [...p.keys()]).next().value;
                u.d.set({ mouseControlActive: t }), Object(d.a)("Mouse Control: " + p.get(t), { duration: 1500 })
            }
        }), {
            updateOptions: function (t) {
                y.update({
                    active: t.mouseControlActive,
                    area: Object(i.a)(e, t),
                    modKey: t.mouseControlModKey,
                    userPreset: Object(r.a)(Object(a.a)(t), e, t)
                })
            }
        }
    }
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    var o = n(17);

    function a(e) {
        chrome.runtime.sendMessage({
            type: "activeVideo",
            action: "set"
        }), Object(o.a)(e)("addPlayerStateChangeListener"), window.addEventListener("message", e => {
            "ytpActionResponse" === e.data.type && "playerStateChangedToPlaying" === e.data.action && chrome.runtime.sendMessage({
                type: "activeVideo",
                action: "set"
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(17), a = n(44);

    function r(e, t) {
        const n = Object(o.a)(e, t), r = {
            enterPictureInPicture: a.b, navigateChapterNext() {
                n("seekBy", "1c")
            }, navigateChapterPrevious() {
                n("seekBy", "-1c")
            }, navigateTrackNext() {
                n("nextVideo")
            }, navigateTrackPrevious() {
                n("previousVideo")
            }, seekBackward() {
                n("seekBy", -1 * t.extensionShortcutsSeekByValue)
            }, seekForward() {
                n("seekBy", t.extensionShortcutsSeekByValue)
            }, volumeDecrease() {
                n("adjustVolumeBy", -1 * t.extensionShortcutsAdjustVolumeByValue)
            }, volumeIncrease() {
                n("adjustVolumeBy", t.extensionShortcutsAdjustVolumeByValue)
            }, togglePlay() {
                n("togglePlay")
            }
        };
        chrome.runtime.onMessage.addListener(({ type: e, action: t }) => {
            if ("extensionShortcut" !== e) return;
            const n = r[t];
            n && n()
        })
    }
}, function (e, t, n) {
    "use strict";

    async function o() {
        return new Promise(e => {
            const t = document.createElement("script");
            t.src = chrome.extension.getURL("embedding.bundle.js"), document.head.append(t), t.onload = () => e({ success: !0 })
        })
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(9), a = n(26);

    function r() {
        o.a.add({
            action: "focusSearchBox", fn: function () {
                var e;
                const t = document.getSelection().toString();
                if (Object(a.a)()) {
                    var n;
                    const e = document.querySelector(".ytmusic-search-box input");
                    return e && (e.value = t), null === (n = document.querySelector(".search-box paper-icon-button")) || void 0 === n ? void 0 : n.click()
                }
                const o = null === (e = document.getElementById("search-form")) || void 0 === e ? void 0 : e.querySelector("input");
                o && (o.value = t, o.focus())
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(9), a = n(17);

    function r(e, t) {
        o.a.add({
            action: "getVideoDownloadLink", fn: function () {
                Object(a.a)(e, t)("getVideoDownloadLink", t)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(59), a = n(17);

    function r(e, t) {
        const n = Object(a.a)(e);

        function r(e) {
            if (e.initialVolume) return window.location !== window.parent.location ? n("setVolume", {
                value: e.initialVolumeLevel,
                noEcho: !0
            }) : void ("session" === e.initialVolume && o.a.get("yt-player-volume") || n("setVolume", {
                value: e.initialVolumeLevel,
                noEcho: !0
            }))
        }

        return r(t), {
            update: function (e) {
                r(e)
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return l
    }));
    var o = n(63), a = n(17), r = n(65), i = n(52);
    const c = Object(o.a)();

    function l(e, t) {
        const n = Object(a.a)(e, t), { keyboardControlKeys: o } = t;

        function l(e) {
            const o = {};
            e.forEach(({ action: e, key: a, payload: c }) => {
                const l = Object(r.a)(e);
                if (l) return o[a] = () => l(t);
                switch (e) {
                    case "toggleInitialLoop":
                        return o[a] = () => Object(i.a)(t)
                }
                o[a] = () => n(e, c)
            }), c.add(o)
        }

        return l(o), {
            update: function ({ keyboardControlKeys: e }) {
                c.clear(), l(e)
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var o = n(9), a = n(47);

    function r(e, t) {
        o.a.add({ action: "captureVideoFrame", fn: () => Object(a.a)(e, t) }), o.a.add({
            action: "captureVideoFramePNG",
            fn: () => Object(a.a)(e, { ...t, cvfType: "PNG" })
        });
        const n = {
            canCaptureVideoFrame(t) {
                t(e && e.readyState >= 2 && window.self === window.top)
            }, captureVideoFrame: () => Object(a.a)(e, t)
        };
        chrome.runtime.onMessage.addListener(({ type: e, action: t }, o, a) => {
            if ("twfytRuntimeMessage" !== e) return;
            const r = n[t];
            r && r(a)
        })
    }
}, , , , , , , , , function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".html5-video-player *:not(:first-child){pointer-events:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".video-ads,.ytp-caption-window-container{pointer-events:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".twfyt-back-to-top-element{border-radius:50%;font-size:24px;padding:8px;width:32px;height:32px;position:fixed;bottom:0px;align-items:center;justify-content:center;cursor:pointer;z-index:3000;transition:all 150ms cubic-bezier(0.4, 0, 0.2, 1)}.twfyt-back-to-top-element svg g{transform:translateX(1px)}.twfyt-back-to-top-element[data-color='dark-or-light']{background:var(--paper-menu-background-color);color:var(--paper-menu-color);border:1px solid var(--yt-spec-10-percent-layer)}.twfyt-back-to-top-element[data-color='dark-or-light']:hover{border:1px solid var(--secondary-text-color)}.twfyt-back-to-top-element[data-color='dark-or-light-inverted']{background:var(--paper-menu-color);color:var(--paper-menu-background-color);border:1px solid var(--secondary-text-color)}.twfyt-back-to-top-element[data-color='dark-or-light-inverted']:hover{background:var(--paper-menu-background-color);color:var(--paper-menu-color)}.twfyt-back-to-top-element[data-color='red']{background:#f00;color:#fff;border:1px solid #f00}.twfyt-back-to-top-element[data-color='red']:hover{background:#ff4c4c}.twfyt-back-to-top-element[data-color='blue']{background:#065fd4;color:#fff;border:1px solid #065fd4}.twfyt-back-to-top-element[data-color='blue']:hover{background:#3077d3}.twfyt-back-to-top-element[data-position='center']{left:50%;transform:translate(-50%, -25%)}.twfyt-back-to-top-element[data-position='left']{left:0;transform:translate(25%, -25%)}.twfyt-back-to-top-element[data-position='right']{right:0;transform:translate(-25%, -25%)}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#chat{display:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "ytd-watch-flexy[theater] #player-theater-container.ytd-watch-flexy{height:calc(100vh - var(--ytd-watch-flexy-masthead-height));max-height:calc(100vh - var(--ytd-watch-flexy-masthead-height))}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "html[data-twfyt-theater] ytd-page-manager{margin-top:0 !important}html[data-twfyt-theater] ytd-watch-flexy[theater] #player-theater-container.ytd-watch-flexy{height:100vh;max-height:100vh}html[data-twfyt-theater] #player-theater-container{max-height:100vh !important}html[data-twfyt-theater][data-twfyt-theater='top'] ytd-app #masthead-container.ytd-app{transform:translateY(calc(-100% - 5px));opacity:0;transition:transform 0.3s ease, opacity 0s 0.3s}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "html[data-twfyt-theater]{scrollbar-width:none}html[data-twfyt-theater] body::-webkit-scrollbar{width:1px !important;background:black}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#comments{display:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#columns #channel-name:hover{color:var(--yt-spec-text-primary)}ytd-playlist-panel-video-renderer[watch-color-update] #byline.ytd-playlist-panel-video-renderer:hover{color:var(--yt-spec-text-primary)}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".ytp-bezel{display:none}.ytp-doubletap-ui-legacy .ytp-doubletap-fast-forward-ve,.ytp-doubletap-ui-legacy .ytp-doubletap-rewind-ve,.ytp-doubletap-ui-legacy .ytp-doubletap-static-circle,.ytp-doubletap-ui-legacy .ytp-doubletap-overlay-a11y,.ytp-doubletap-ui-legacy .ytp-doubletap-arrows-container,.ytp-doubletap-ui-legacy .ytp-doubletap-tooltip-label{display:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#movie_player.paused-mode:not(.ytp-autohide) .caption-window.ytp-caption-window-bottom{margin-bottom:0 !important}#movie_player.paused-mode .ytp-player-content{bottom:12px !important}#movie_player.paused-mode .caption-window.ytp-caption-window-bottom{margin-bottom:0 !important}#movie_player.paused-mode .ytp-gradient-bottom,#movie_player.paused-mode .ytp-chrome-bottom,#movie_player.paused-mode .ytp-gradient-top,#movie_player.paused-mode .ytp-chrome-top{opacity:0 !important;pointer-events:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#movie_player.playing-mode:not(.ytp-autohide) .caption-window.ytp-caption-window-bottom{margin-bottom:0 !important}#movie_player.playing-mode .ytp-player-content{bottom:12px !important}#movie_player.playing-mode .caption-window.ytp-caption-window-bottom{margin-bottom:0 !important}#movie_player.playing-mode .ytp-gradient-bottom,#movie_player.playing-mode .ytp-chrome-bottom,#movie_player.playing-mode .ytp-gradient-top,#movie_player.playing-mode .ytp-chrome-top{opacity:0 !important;pointer-events:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#movie_player.paused-mode .ytp-chrome-bottom,#movie_player.paused-mode .ytp-chrome-top,#movie_player.playing-mode .ytp-chrome-bottom,#movie_player.playing-mode .ytp-chrome-top{pointer-events:all}#movie_player .ytp-gradient-bottom:hover,#movie_player .ytp-chrome-bottom:hover,#movie_player .ytp-gradient-top:hover,#movie_player .ytp-chrome-top:hover{opacity:1 !important}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".ytp-miniplayer-ui{pointer-events:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "html{scrollbar-width:thin}html::-webkit-scrollbar{width:8px}html::-webkit-scrollbar-thumb{height:56px;background:var(--yt-spec-icon-disabled)}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#contents a#video-title:focus,#contents a#main-link:focus #channel-title,#contents a.ytd-playlist-renderer:focus *,#contents a.ytd-radio-renderer:focus *{color:red !important}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary-inner{position:fixed;overflow-x:hidden;overflow-y:auto;height:calc(\r 100vh - var(--ytd-watch-flexy-masthead-height) - var(--ytd-margin-6x) * 2);max-width:var(--ytd-watch-flexy-sidebar-width);scrollbar-width:thin}ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary-inner::-webkit-scrollbar{width:8px}ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary-inner::-webkit-scrollbar-thumb{height:56px;background:var(--yt-spec-icon-disabled)}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#secondary{display:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#secondary #related{display:none}#secondary #secondary-inner{width:100%}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, "#secondary{display:none}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ":root{--twfyt-video-dimmer-brightness: 0.5}video{filter:brightness(0.5);filter:brightness(var(--twfyt-video-dimmer-brightness))}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ".twfyt__video-playback-info__container{--twfyt--video-playback-info--opacity: 1;--twfyt--video-playback-info--font-size: 1em;background:rgba(0,0,0,0.5);border-radius:0 0 4px 0;color:#fff;display:flex;flex-direction:column;padding:0.25em;pointer-events:none;position:absolute;top:0;left:0;font-size:1em;font-size:var(--twfyt--video-playback-info--font-size, 1em);opacity:1;opacity:var(--twfyt--video-playback-info--opacity, 1)}.twfyt__video-playback-info__container>*{margin:0.25em 0.5em}\n", ""]), t.a = a
}, function (e, t, n) {
    "use strict";
    var o = n(11), a = n.n(o)()((function (e) {
        return e[1]
    }));
    a.push([e.i, ":root{--twfyt-persistent-progress-bar-opacity: 0.5}#content #contents{scrollbar-width:thin}#content #contents::-webkit-scrollbar{width:8px}#content #contents::-webkit-scrollbar-thumb{height:56px;background:var(--yt-spec-icon-disabled)}.ytp-bezel-text-wrapper{pointer-events:none}.ytp-ad-overlay-slot{pointer-events:initial}.gallectron-image-le__button-close{background:rgba(14,14,14,0.5) !important}.gallectron-image-le__button-close:hover,.gallectron-image-le__button-close:active{background:rgba(14,14,14,0.95) !important}.ytp-doubletap-ui-legacy{pointer-events:none}.ytp-doubletap-ui-legacy .ytp-chapter-seek-text-legacy{color:white;text-shadow:#000 2px 2px 4px}\n", ""]), t.a = a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(19), a = n.n(o), r = n(5), i = n(9), c = n(120), l = n(121), u = n(17);
    var s, d = n(122), p = n(13), y = n.n(p), m = n(161), f = 0, g = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, v = {};
    v.locals = m.a.locals || {}, v.use = function () {
        return f++ || (s = y()(m.a, g)), v
    }, v.unuse = function () {
        f > 0 && !--f && (s(), s = null)
    };
    var h = v;

    function b(e) {
        function t(e) {
            e.maxMouseControlArea && e.mouseControlActive && (document.addEventListener("keydown", w), document.addEventListener("keyup", k), document.addEventListener("mousedown", S), document.addEventListener("mouseup", B))
        }

        return t(e), {
            update: function (e) {
                document.removeEventListener("keydown", w), document.removeEventListener("keyup", k), document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", B), t(e)
            }
        }
    }

    function w(e) {
        e.repeat || (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) && h.use()
    }

    function k() {
        h.unuse()
    }

    function S(e) {
        2 === e.button && h.use()
    }

    function B() {
        h.unuse()
    }

    var x = n(107), P = n(25), C = n(61), M = n(46);

    function E(e, t) {
        const n = {};
        return (Array.isArray(e) ? function (e) {
            return e.map(({ action: e, payload: t, key: n }) => [n, { action: e, payload: t }])
        }(e) : Object.entries(e)).forEach(([e]) => {
            e.match(/^mousedown0\+g/) && (n[e.replace(/mousedown0/, "click")] = () => {
            }), t.mouseControlDisableDoubleClick && e.match(/mousedown0\+g/) && (n[e.replace(/mousedown0/, "dblclick")] = () => {
            })
        }), n
    }

    var j, O = n(162), T = 0, A = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, R = {};
    R.locals = O.a.locals || {}, R.use = function () {
        return T++ || (j = y()(O.a, A)), R
    }, R.unuse = function () {
        T > 0 && !--T && (j(), j = null)
    };
    var V = R;
    let L;

    function I(e, t) {
        function n(t) {
            "video" !== t.mouseControlElement && (V.use(), !L && (L = Object(P.b)(!0, function (e, t) {
                return {
                    active: "player" === t.mouseControlElement && t.mouseControlActive,
                    actionInfoDisabled: !0,
                    area: e,
                    events: ["click", "dblclick", "contextmenu"],
                    force: !0,
                    modKey: t.mouseControlModKey,
                    preset: null,
                    userPreset: E(Object(C.a)(t), t),
                    mouseEvt: { onStart: M.a }
                }
            }(e, t))), t.instantTogglePlay && e.addEventListener("click", D, !0), t.mmbToggleFullscreen && e.addEventListener("dblclick", _, !0))
        }

        return n(t), {
            update: function (t) {
                V.unuse(), e.removeEventListener("click", D, !0), e.removeEventListener("dblclick", _, !0), L && L.stop(), n(t), L && L.update({
                    active: "player" === t.mouseControlElement && t.mouseControlActive,
                    modKey: t.mouseControlModKey,
                    userPreset: E(Object(C.a)(t), t)
                })
            }
        }
    }

    function D(e) {
        Object(x.a)({
            click: () => {
            }
        }, { onStart: () => Object(M.a)({ event: e }), stopPropagation: !0 })(e)
    }

    function _(e) {
        Object(x.a)({
            dblclick: () => {
            }
        }, { onStart: () => Object(M.a)({ event: e }), stopPropagation: !0 })(e)
    }

    var $ = n(115);

    function F(e) {
        function t(e) {
            e.autoclickAdSkipButton && a.a.on(".ytp-ad-skip-button", e => {
                e.click()
            })
        }

        return t(e), {
            update: function (e) {
                a.a.off(".ytp-ad-skip-button"), t(e)
            }
        }
    }

    const z = new Map;
    var H = n(53), q = n(10);

    function N(e, t) {
        const n = { ytpAutohideDelay: 3e3, ...t }, o = Object(H.a)(e), a = new MutationObserver(() => {
            o.classList.contains("ytp-autohide") || c()
        });

        function c() {
            !function ({ id: e, duration: t, onBefore: n, onAfter: o }) {
                let a = z.get(e);
                clearTimeout(a), n && n(), a = setTimeout(() => {
                    o && o()
                }, t), z.set(e, a)
            }({
                id: "ytp-activate-autohide", duration: n.ytpAutohideDelay, onAfter: () => {
                    var t;
                    window.postMessage({
                        type: "ytpActionRequest",
                        action: "dispatchMouseEvent",
                        payload: "mouseleave",
                        playerId: null === (t = e.closest(".html5-video-player")) || void 0 === t ? void 0 : t.id
                    }, window.location.origin)
                }
            })
        }

        function l() {
            n.ytpAutohideDelay >= 500 && n.ytpAutohideDelay < 3e3 && (e.addEventListener("mousemove", c), a.observe(o, {
                attributes: !0,
                attributeFilter: ["class"]
            }))
        }

        return l(), i.a.add({
            action: "toggleYtpControlsHidden", fn: async function () {
                const { ytpControlsHidden: e } = await r.d.get(["ytpControlsHidden"]).catch(e => console.error(e)),
                    t = !e;
                r.d.set({ ytpControlsHidden: t }), Object(q.a)("Hide Player Controls: " + (t ? "On" : "Off"), { duration: 1500 })
            }
        }), {
            updateOptions: function ({ ytpAutohideDelay: t }) {
                n.ytpAutohideDelay = t, a.disconnect(), e.removeEventListener("mousemove", c), l()
            }
        }
    }

    var K, W = n(84), G = n(163), U = 0, Y = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, X = {};
    X.locals = G.a.locals || {}, X.use = function () {
        return U++ || (K = y()(G.a, Y)), X
    }, X.unuse = function () {
        U > 0 && !--U && (K(), K = null)
    };
    var Z = X;
    const Q = document.createElement("div");

    function J(e) {
        function t(e) {
            e.backToTop && a.a.on("ytd-page-manager", t => {
                Z.use(), Q.dataset.color = e.backToTop, Q.dataset.position = e.backToTopPosition, ee(), t.append(Q), window.addEventListener("scroll", ee), a.a.off("ytd-page-manager")
            })
        }

        return t(e), {
            update: function (e) {
                Z.unuse(), Q.remove(), window.removeEventListener("scroll", ee), t(e)
            }
        }
    }

    function ee() {
        if (window.scrollY > window.innerHeight / 3) return Q.style.display = "flex";
        Q.style.display = "none"
    }

    Q.className = "twfyt-back-to-top-element", Q.addEventListener("click", () => window.scrollTo(0, 0)), Q.innerHTML = '\n  <button id="button" class="style-scope yt-icon-button" aria-label="Scroll back to top">\n    <yt-icon icon="up_arrow" class="style-scope">\n      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">\n        <g id="up_arrow-filled">\n          <path d="M16.3,10.7L13,7.4V20h-2V7.4l-3.3,3.3L6.3,9.3L12,3.6l5.7,5.7L16.3,10.7z">\n          </path>\n        </g>\n      </svg>\n    </yt-icon>\n  </button>\n';
    var te, ne = n(164), oe = 0, ae = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, re = {};
    re.locals = ne.a.locals || {}, re.use = function () {
        return oe++ || (te = y()(ne.a, ae)), re
    }, re.unuse = function () {
        oe > 0 && !--oe && (te(), te = null)
    };
    var ie = re;

    function ce(e) {
        function t(e) {
            const t = document.querySelector("#show-hide-button #button");
            if (t) {
                var n, o;
                if ("hide" === e) return !(null === (n = document.querySelector("ytd-live-chat-frame")) || void 0 === n ? void 0 : n.hasAttribute("collapsed")) && t.click();
                if ("show" === e) return (null === (o = document.querySelector("ytd-live-chat-frame")) || void 0 === o ? void 0 : o.hasAttribute("collapsed")) && t.click()
            }
        }

        function n(e) {
            if (e.chatVisibility) return "disable" === e.chatVisibility ? ie.use() : "auto-show" === e.chatVisibility ? a.a.on("#show-hide-button #button", () => t("show")) : void a.a.on("#show-hide-button #button", () => t("hide"))
        }

        return n(e), {
            update: function (e) {
                ie.unuse(), a.a.off("#show-hide-button #button"), t("show"), n(e)
            }
        }
    }

    var le, ue = n(87), se = n(165), de = 0, pe = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, ye = {};
    ye.locals = se.a.locals || {}, ye.use = function () {
        return de++ || (le = y()(se.a, pe)), ye
    }, ye.unuse = function () {
        de > 0 && !--de && (le(), le = null)
    };
    var me, fe = ye, ge = n(166), ve = 0, he = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, be = {};
    be.locals = ge.a.locals || {}, be.use = function () {
        return ve++ || (me = y()(ge.a, he)), be
    }, be.unuse = function () {
        ve > 0 && !--ve && (me(), me = null)
    };
    var we, ke = be, Se = n(167), Be = 0, xe = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Pe = {};
    Pe.locals = Se.a.locals || {}, Pe.use = function () {
        return Be++ || (we = y()(Se.a, xe)), Pe
    }, Pe.unuse = function () {
        Be > 0 && !--Be && (we(), we = null)
    };
    var Ce = Pe;

    function Me(e) {
        const t = new MutationObserver(e => {
            if (Ee(e[0].target)) return document.documentElement.dataset.twfytTheater = "top";
            delete document.documentElement.dataset.twfytTheater
        });

        function n() {
            var e;
            return Ee() ? 0 === window.scrollY && (null === (e = document.querySelector("ytd-watch-flexy")) || void 0 === e ? void 0 : e.hasAttribute("theater")) ? document.documentElement.dataset.twfytTheater = "top" : void (document.documentElement.dataset.twfytTheater = "") : delete document.documentElement.dataset.twfytTheater
        }

        function o(e) {
            e.cinemaMode && (fe.use(), !e.cinemaModeHiddenMasthead && !e.cinemaModeHiddenScrollbar || window.location.pathname.includes("/embed") || (e.cinemaModeHiddenMasthead && ke.use(), e.cinemaModeHiddenScrollbar && Ce.use(), document.addEventListener("scroll", n), a.a.on("ytd-watch-flexy", e => {
                Ee(e) && (document.documentElement.dataset.twfytTheater = "top"), t.observe(e, {
                    attributes: !0,
                    attributeFilter: ["theater", "hidden", "fullscreen"]
                }), Object(u.a)()("updateVideoData"), setTimeout(() => {
                    Object(u.a)()("updateVideoData")
                }, 1e3), a.a.off("ytd-watch-flexy")
            })))
        }

        return Object(ue.a)(), o(e), {
            update: function (e) {
                delete document.documentElement.dataset.twfytTheater, fe.unuse(), ke.unuse(), Ce.unuse(), t.disconnect(), document.removeEventListener("scroll", n), o(e), Object(u.a)()("updateVideoData")
            }
        }
    }

    function Ee(e) {
        if (e = e || document.querySelector("ytd-watch-flexy")) return !(!e.hasAttribute("theater") || e.hasAttribute("hidden") || e.hasAttribute("fullscreen")) || void 0
    }

    const je = document.createElement("style");
    je.id = "twfyt-clean-player-style";
    const Oe = {
        cleanPlayerAdOverlay: [".ytp-ad-overlay-slot"],
        cleanPlayerCE: [".ytp-ce-element"],
        cleanPlayerChannelWattermark: [".ytp-iv-player-content"],
        cleanPlayerTop: [".ytp-gradient-top", ".ytp-chrome-top"],
        cleanPlayerEndScreen: [".html5-endscreen"],
        cleanPlayerPaidContentOverlay: [".ytp-paid-content-overlay"],
        cleanPlayerVideoAnnotations: [".ytp-iv-video-content"]
    };
    var Te = {
        add(e) {
            je.innerHTML = (e => [...Object.entries(Oe)].filter(([t]) => e[t]).reduce((e, [, t]) => [...e, ...t], []).join(", ") + " { display: none !important; }")(e), document.head.querySelector("#twfyt-clean-player-style") || document.head.append(je)
        }, remove() {
            je.remove()
        }
    };

    function Ae(e) {
        function t(e) {
            e.cleanPlayer && Te.add(e)
        }

        return t(e), i.a.add({
            action: "toggleCleanPlayer", fn: async function () {
                const { cleanPlayer: e } = await r.d.get(["cleanPlayer"]).catch(e => console.error(e)), t = !e;
                r.d.set({ cleanPlayer: t }), Object(q.a)("Clean Player: " + (t ? "On" : "Off"), { duration: 1500 })
            }
        }), {
            update: function (e) {
                Te.remove(), t(e)
            }
        }
    }

    const Re = document.createElement("style");
    Re.id = "twfyt-clean-site-style";
    const Ve = {
        cleanSiteAds: ["ytd-compact-promoted-item-renderer", "ytd-mealbar-promo-renderer", "ytd-primetime-promo-renderer", "ytd-promoted-sparkles-web-renderer", "ytd-statement-banner-renderer", "#masthead-ad", "#player-ads", "#offer-module", ".ytp-promotooltip-wrapper", "#ticket-shelf", "#merch-shelf", ".ytd-promoted-sparkles-text-search-renderer"],
        cleanSiteAnnoyances: ["yt-bubble-hint-renderer", "yt-tooltip-renderer", "ytd-consent-bump-renderer", "ytd-feed-nudge-renderer", "ytd-single-option-survey-renderer", "ytd-checkbox-survey-renderer", "#ticker"],
        cleanSiteDrawerFooter: ["#footer"],
        cleanSiteDrawerMoreFromYouTube: ["tp-yt-app-drawer #sections > *:nth-child(3)"],
        cleanSiteDrawerLastSection: ["tp-yt-app-drawer #sections > *:nth-child(4)"],
        cleanSiteWatchCommentInput: ["ytd-comment-simplebox-renderer"],
        cleanSiteWatchClarifyBox: ["#clarify-box"],
        cleanSiteWatchInfoMenu: ["ytd-watch-flexy #info #menu-container"],
        cleanSiteHomeSections: ["ytd-browse ytd-rich-section-renderer"],
        cleanSiteHeaderVoiceSearchButton: ["#voice-search-button"],
        cleanSiteSidebarDonationShelf: ["#donation-shelf"]
    };
    var Le = {
        add(e) {
            Re.innerHTML = (e => [...Object.entries(Ve)].filter(([t]) => e[t]).reduce((e, [, t]) => [...e, ...t], []).join(", ") + " { display: none !important; }")(e), document.head.querySelector("#twfyt-clean-site-style") || document.head.append(Re)
        }, remove() {
            Re.remove()
        }
    };

    function Ie(e) {
        function t(e) {
            e.cleanSite && Le.add(e)
        }

        return t(e), i.a.add({
            action: "toggleCleanSite", fn: async function () {
                const { cleanSite: e } = await r.d.get(["cleanSite"]).catch(e => console.error(e)), t = !e;
                r.d.set({ cleanSite: t }), Object(q.a)("Clean Page: " + (t ? "On" : "Off"), { duration: 1500 })
            }
        }), {
            update: function (e) {
                Le.remove(), t(e)
            }
        }
    }

    function De(e) {
        function t(e) {
            e.commentsSortBy && a.a.on("ytd-comments #sort-menu", e => {
                var t, n;
                null === (t = e.querySelectorAll("a.yt-dropdown-menu")) || void 0 === t || null === (n = t[1]) || void 0 === n || n.click()
            })
        }

        return t(e), {
            update: function (e) {
                a.a.off("ytd-comments #sort-menu"), t(e)
            }
        }
    }

    async function _e() {
        const { commentsSectionHidden: e } = await r.d.get(["commentsSectionHidden"]).catch(e => console.error(e)),
            t = !e;
        r.d.set({ commentsSectionHidden: t })
    }

    var $e, Fe = n(168), ze = 0, He = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, qe = {};
    qe.locals = Fe.a.locals || {}, qe.use = function () {
        return ze++ || ($e = y()(Fe.a, He)), qe
    }, qe.unuse = function () {
        ze > 0 && !--ze && ($e(), $e = null)
    };
    var Ne = qe;

    function Ke(e) {
        function t(e) {
            if (e.commentsSectionHidden) return Ne.use();
            Ne.unuse(), window.scrollBy(0, 1), window.scrollBy(0, -1)
        }

        return t(e), i.a.add({ action: "toggleCommentsVisibility", fn: _e }), {
            update: function (e) {
                t(e)
            }
        }
    }

    var We, Ge = n(169), Ue = 0, Ye = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Xe = {};
    Xe.locals = Ge.a.locals || {}, Xe.use = function () {
        return Ue++ || (We = y()(Ge.a, Ye)), Xe
    }, Xe.unuse = function () {
        Ue > 0 && !--Ue && (We(), We = null)
    };
    var Ze = Xe;

    function Qe(e) {
        function t(e) {
            if (!e.target.closest("#playlist #byline-containerz")) return;
            e.preventDefault(), e.stopPropagation();
            const t = e.target.closest("a");
            t && o(t.href)
        }

        function n(e) {
            if (!e.target.closest("#channel-name")) return;
            e.preventDefault(), e.stopPropagation();
            const t = e.target.closest("a");
            t && o(t.href)
        }

        async function o(t) {
            const n = new URLSearchParams(t.replace(/^.+\?/, "")).get("v"), o = await async function (e) {
                const t = document.createElement("iframe");
                return t.width = 0, t.height = 0, t.src = "https://www.youtube.com/embed/" + e, new Promise((e, n) => {
                    document.body.appendChild(t), t.onload = () => {
                        var n;
                        const o = null === (n = t.contentDocument.querySelector("a.ytp-title-channel-logo")) || void 0 === n ? void 0 : n.href.split("/").slice(-1)[0];
                        t.remove(), e(o)
                    }, t.onerror = () => {
                        t.remove(), n(new Error("Loading video in iframe failed"))
                    }
                })
            }(n).catch(() => null);
            o && window.open(`https://www.youtube.com/channel/${o}/${e.initialChannelPageTab || ""}`)
        }

        function a(e) {
            e.convertChannelNameToURL && (Ze.use(), setTimeout(() => {
                var e, o;
                null === (e = document.querySelector("#playlist")) || void 0 === e || e.addEventListener("click", t, !0), null === (o = document.querySelector("#related")) || void 0 === o || o.addEventListener("click", n, !0)
            }, 1e3))
        }

        return a(e), {
            update: function (e) {
                var o, r;
                Ze.unuse(), null === (o = document.querySelector("#playlist")) || void 0 === o || o.removeEventListener("click", t, !0), null === (r = document.querySelector("#related")) || void 0 === r || r.removeEventListener("click", n, !0), a(e)
            }
        }
    }

    var Je = n(85), et = n(123), tt = n(124), nt = n(108);

    function ot(e, t) {
        const n = document.querySelector(".ytp-progress-bar");
        let o;

        function a(n) {
            if ("mousedown" === n.type && ("mousedown1" === t.gotoChapterStart && 1 !== n.button || "mousedown2" === t.gotoChapterStart && 2 !== n.button)) return;
            n.preventDefault();
            const o = nt.a.getCurrentChapterIndexFromHoverEffect();
            return 0 === o ? at() ? Object(u.a)(e, t)("seekTo", 0) : Object(u.a)(e, t)("seekToChapter", 0) : o > 0 ? Object(u.a)(e, t)("seekToChapter", at() ? o - 1 : o) : void 0
        }

        function r(e) {
            e.preventDefault(), e.stopPropagation()
        }

        function i(e) {
            var t;
            t = e.gotoChapterStart, o = t && "dblclick" !== t ? t.replace(/\d+$/, "") : t, o && n && (n.addEventListener(o, a), "mousedown2" === e.gotoChapterStart && n.addEventListener("contextmenu", r))
        }

        return i(t), {
            update: function (e) {
                o && (n.removeEventListener(o, a), n.removeEventListener("contextmenu", r)), i(e)
            }
        }
    }

    function at() {
        return !!document.querySelector('#panels [target-id="engagement-panel-macro-markers-auto-chapters"]')
    }

    var rt, it = n(170), ct = 0, lt = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, ut = {};
    ut.locals = it.a.locals || {}, ut.use = function () {
        return ct++ || (rt = y()(it.a, lt)), ut
    }, ut.unuse = function () {
        ct > 0 && !--ct && (rt(), rt = null)
    };
    var st = ut;

    function dt(e) {
        function t(e) {
            e.actionIndicatorIconHidden && st.use()
        }

        return t(e), {
            update: function (e) {
                st.unuse(), t(e)
            }
        }
    }

    var pt, yt = n(171), mt = 0, ft = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, gt = {};
    gt.locals = yt.a.locals || {}, gt.use = function () {
        return mt++ || (pt = y()(yt.a, ft)), gt
    }, gt.unuse = function () {
        mt > 0 && !--mt && (pt(), pt = null)
    };
    var vt, ht = gt, bt = n(172), wt = 0, kt = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, St = {};
    St.locals = bt.a.locals || {}, St.use = function () {
        return wt++ || (vt = y()(bt.a, kt)), St
    }, St.unuse = function () {
        wt > 0 && !--wt && (vt(), vt = null)
    };
    var Bt, xt = St, Pt = n(173), Ct = 0, Mt = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Et = {};
    Et.locals = Pt.a.locals || {}, Et.use = function () {
        return Ct++ || (Bt = y()(Pt.a, Mt)), Et
    }, Et.unuse = function () {
        Ct > 0 && !--Ct && (Bt(), Bt = null)
    };
    var jt = Et;

    function Ot(e, t = {}) {
        function n(e) {
            e.ytpControlsHidden && (e.ytpControlsHiddenPlaying && xt.use(), e.ytpControlsHiddenPaused && ht.use(), e.ytpControlsHiddenShowOnHover && jt.use())
        }

        return n(t), {
            update: function (e) {
                ht.unuse(), xt.unuse(), jt.unuse(), n(e)
            }
        }
    }

    var Tt = n(59);
    const At = "#channel-header yt-formatted-string.ytd-channel-name";

    function Rt(e) {
        const t = new MutationObserver(() => {
            n()
        });

        function n() {
            var t;
            const n = [...document.querySelectorAll("#tabsContent tp-yt-paper-tab")].filter(e => !(0 === e.childElementCount || e.hasAttribute("hidden")));
            if (!n) return;
            null === (t = n[function (e, t) {
                switch (e) {
                    case "videos":
                        return 1;
                    case "playlists":
                        return 2;
                    case "about":
                        return t.length - 1
                }
            }(e.initialChannelPageTab, n)]) || void 0 === t || t.click()
        }

        return function (e) {
            e.initialChannelPageTab && a.a.on("#channel-header", () => {
                const e = document.querySelector(At);
                e && (t.observe(e, { childList: !0 }), window.location.pathname.match(/\/(featured|videos|playlists|community|store|channels|about)$/) || n())
            })
        }(e), {
            update: function (e) {
                if (!e.initialChannelPageTab) return a.a.off("#channel-header"), void t.disconnect();
                !function () {
                    const e = document.querySelector(At);
                    e && t.observe(e, { childList: !0 })
                }()
            }
        }
    }

    function Vt(e) {
        function t(e) {
            var t;
            if (e.initialFullscreen && !document.pictureInPictureElement && !(null === (t = document.querySelector("ytd-miniplayer")) || void 0 === t ? void 0 : t.hasAttribute("active")) && !window.location.pathname.match(/\/embed/) && !document.fullscreenElement) {
                const e = document.querySelector(".ytp-fullscreen-button");
                null == e || e.click()
            }
        }

        return t(e), {
            update: function (e) {
                t(e)
            }
        }
    }

    function Lt(e) {
        function t(e) {
            e.initialLoop && Object(u.a)()("setLoopVideo", !0)
        }

        return t(e), {
            update: function (e) {
                Object(u.a)()("setLoopVideo", !1), t(e)
            }
        }
    }

    n(52);
    var It = n(125);

    function Dt(e) {
        function t(e) {
            const t = document.querySelector(".ytp-subtitles-button");
            if (e.initialSubtitles && t) switch (e.initialSubtitles) {
                case "on":
                    return n(t);
                case "off":
                    return o(t);
                case "byStoredValue":
                    return function (e) {
                        let t;
                        const a = Tt.a.get("yt-player-sticky-caption");
                        var r;
                        t = void 0 !== a ? null === (r = JSON.parse(a)) || void 0 === r ? void 0 : r.data : Tt.a.get("yt-html5-player-modules::subtitlesModuleData::module-enabled");
                        if (void 0 === t) return;
                        "true" === t && n(e), "false" === t && o(e)
                    }(t)
            }
        }

        function n(e) {
            "false" === e.getAttribute("aria-pressed") && e.click()
        }

        function o(e) {
            "true" === e.getAttribute("aria-pressed") && e.click()
        }

        return t(e), { update: t }
    }

    function _t() {
        var e;
        null === (e = document.querySelector(".ytp-size-button")) || void 0 === e || e.click()
    }

    function $t(e) {
        function t(e) {
            e.instantFullscreen && window.postMessage({
                type: "twfytAction",
                action: "setInstantFullscreen",
                payload: !0
            }, window.location.origin)
        }

        return t(e), {
            update: function (e) {
                window.postMessage({
                    type: "twfytAction",
                    action: "setInstantFullscreen",
                    payload: !1
                }, window.location.origin), t(e)
            }
        }
    }

    var Ft = n(54), zt = n(48);
    var Ht = n(126);
    var qt, Nt = n(118), Kt = n(174), Wt = 0, Gt = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Ut = {};
    Ut.locals = Kt.a.locals || {}, Ut.use = function () {
        return Wt++ || (qt = y()(Kt.a, Gt)), Ut
    }, Ut.unuse = function () {
        Wt > 0 && !--Wt && (qt(), qt = null)
    };
    var Yt = Ut;

    function Xt(e) {
        function t(e) {
            e.mouseControlMiniplayer && Yt.use()
        }

        return t(e), {
            update: function (e) {
                Yt.unuse(), t(e)
            }
        }
    }

    var Zt = n(44);
    const Qt = document.createElement("style");
    Qt.id = "twfyt-progress-bar-mini-style";
    const Jt = {
        add({ ytpControlsMode: e, ytpControlsHidden: t, ytpProgressBarAtBottom: n }) {
            document.head.querySelector("#twfyt-progress-bar-mini-style") || (Qt.innerHTML = (({ ytpControlsMode: e, ytpControlsHidden: t, ytpProgressBarAtBottom: n }) => `\n  .ytp-chrome-controls {\n    display: none !important;\n  }\n\n  .ytp-progress-bar-container {\n    height: 4px !important;\n    bottom: ${n ? 0 : 8}px !important;\n    opacity: var(--twfyt-persistent-progress-bar-opacity);\n  }\n  .ytp-big-mode .ytp-progress-bar-container {\n    bottom: ${n ? 0 : 12}px !important;\n  }\n  \n  .ytp-progress-list{\n    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);\n  }\n\n  .ytp-progress-bar-padding {\n    height: 32px !important;\n    bottom: -8px !important;\n  }\n  .ytp-big-mode .ytp-progress-bar-padding {\n    bottom: -12px !important;\n  }\n  \n  .ytp-gradient-bottom {\n    display: none !important;\n  }\n\n  .ytp-scrubber-container {\n    display: none;\n  }\n\n  .ytp-big-mode .ytp-scrubber-container {\n    top: -8px;\n  }\n\n  .ytp-chrome-bottom {\n    opacity: 1 ${"mini" === e ? "" : " !important"};\n  }\n\n  .ytp-chrome-bottom:hover .ytp-progress-bar-container,\n  .ytp-progress-bar-container:hover {\n      opacity: 1;\n  }\n\n  .ytp-player-content {\n    bottom: ${t ? 12 : 24}px !important;\n  }\n  .ytp-big-mode  .ytp-player-content {\n    bottom: ${t ? 12 : 28}px !important;\n  }\n\n  .ytp-ce-element {\n    /* display: none; */\n  }\n\n  .ytp-scrubber-container {\n    ${n ? "display: none !important" : ""};\n  }\n\n  #movie_player:not(.ytp-autohide) .caption-window.ytp-caption-window-bottom {\n    margin-bottom: 20px !important;\n  }\n\n  #movie_player${"mini" === e ? ":not(.ytp-autohide)" : ""} .caption-window.ytp-caption-window-bottom {\n    margin-bottom: 20px !important;\n  }\n`)({
                ytpControlsMode: e,
                ytpControlsHidden: t,
                ytpProgressBarAtBottom: n
            }), document.head.append(Qt))
        }, remove() {
            Qt.remove()
        }
    };
    var en = n(66);
    const tn = new Map([["default", "Default"], ["mini", "Progress Bar"], ["combined", "Default + Progress Bar"], ["persistent-mini", "Persistent Progress Bar"], ["persistent-default", "Persistent Default"]]);
    var nn = n(34);

    function on(e = {}) {
        nn.a.set({ "twfyt-persistent-progress-bar-opacity": e.ytpProgressBarOpacity || 0 })
    }

    function an(e, t = {}) {
        let n = { ytpControlsMode: "combined", ...t };
        on(t);
        const o = Object(u.a)(e), a = Object(H.a)(e);
        let c, l;
        const s = new MutationObserver(() => {
            if (a.classList.contains("ytp-autohide")) {
                if (!c) return;
                return c = !1, Jt.add(n), void (l = setInterval(() => {
                    o("updateVideoData")
                }, 1e3))
            }
            c || (c = !0, clearInterval(l), Jt.remove())
        }), d = new MutationObserver(() => {
            a.classList.contains("ytp-autohide") && o("wakeUpControls")
        });

        function p() {
            switch (c = !0, n.ytpControlsMode) {
                case "persistent-default":
                    o("wakeUpControls"), d.observe(a, {
                        attributes: !0,
                        attributeFilter: ["class"]
                    }), l = setInterval(() => {
                        o("wakeUpControls")
                    }, 1e3);
                    break;
                case "persistent-mini":
                    Jt.add(n), l = setInterval(() => {
                        o("updateVideoData")
                    }, 1e3);
                    break;
                case "combined":
                    o("wakeUpControls"), s.observe(a, { attributes: !0, attributeFilter: ["class"] });
                    break;
                case "mini":
                    o("wakeUpControls"), Jt.add(n);
                    break;
                default:
                    o("wakeUpControls")
            }
        }

        return p(), i.a.add({
            action: "cycleYtpControlsMode", fn: async function () {
                const { ytpControlsMode: e } = await r.d.get(["ytpControlsMode"]).catch(e => console.error(e)),
                    t = Object(en.a)(e, [...tn.keys()]).next().value;
                r.d.set({ ytpControlsMode: t }), Object(q.a)("Player Controls: " + tn.get(t), { duration: 1500 })
            }
        }), chrome.runtime.onMessage.addListener(({ type: e, action: t, payload: n }) => {
            "twfytRuntimeMessage" === e && "update-ytp-progress-bar-opacity" === t && on(n)
        }), {
            updateOptions: function (e) {
                n = { ...n, ...e }, clearInterval(l), s.disconnect(), d.disconnect(), Jt.remove(), p()
            }, updateProgressBarOpacity: on
        }
    }

    var rn = n(43), cn = n.n(rn);
    const ln = "ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer span.ytd-thumbnail-overlay-time-status-renderer",
        un = "twfyt-playlist-duration-element-playlist-page",
        sn = "ytd-playlist-panel-video-renderer span.ytd-thumbnail-overlay-time-status-renderer",
        dn = "twfyt-playlist-duration-element-watch-page";

    function pn(e) {
        return e.map(e => e.split(":").reverse().reduce((e, t, n) => e + Number(t) * 60 ** n, 0)).reduce((e, t) => e + t, 0)
    }

    function yn() {
        var e, t, n, o;
        const { length: a } = document.querySelectorAll("ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer"),
            r = null === (e = document.querySelector("#stats.style-scope.ytd-playlist-sidebar-primary-info-renderer")) || void 0 === e || null === (t = e.firstElementChild) || void 0 === t || null === (n = t.textContent) || void 0 === n || null === (o = n.match(/\d/g)) || void 0 === o ? void 0 : o.join(""),
            i = a < Number(r);
        !function (e, t) {
            const n = Object(P.c)(e), o = document.getElementById(un), a = `Duration: ${n}${t ? "+" : ""}`;
            if (o) return void (o.textContent = a);
            const r = document.createElement("yt-formatted-string");
            r.id = un, r.className = "style-scope ytd-playlist-sidebar-primary-info-renderer", r.style.display = "initial", document.querySelector("#stats.style-scope.ytd-playlist-sidebar-primary-info-renderer").append(r), r.textContent = a
        }(pn([...document.querySelectorAll(ln)].map(e => e.innerText.replace(/\s/g, ""))), i)
    }

    function mn() {
        var e;
        const t = [...document.querySelectorAll("ytd-playlist-panel-video-renderer")],
            n = null === (e = [...document.querySelectorAll("#publisher-container.ytd-playlist-panel-renderer yt-formatted-string.index-message.ytd-playlist-panel-renderer")].filter(e => e.innerText)[0]) || void 0 === e ? void 0 : e.innerText.replace(/.+\//, ""),
            o = t.length < Number(n);
        !function (e, t) {
            const n = Object(P.c)(e),
                o = document.querySelector("#publisher-container.ytd-playlist-panel-renderer yt-formatted-string");
            var a;
            if (o.textContent.includes("YouTube")) return o.textContent = `${null === (a = o.textContent.match(/[^-]+/)) || void 0 === a ? void 0 : a[0].trim()} - ${n}`;
            const r = document.getElementById(dn);
            null == r || r.remove();
            const i = `• ${n}${t ? "+" : ""}`, c = document.createElement("span");
            c.id = dn, c.className = "style-scope yt-formatted-string", c.style.margin = "0 4px", c.textContent = i, document.querySelectorAll("#publisher-container.ytd-playlist-panel-renderer .index-message-wrapper.style-scope.ytd-playlist-panel-renderer").forEach(e => e.append(c))
        }(pn([...document.querySelectorAll(sn)].map(e => e.innerText.replace(/\s/g, ""))), o)
    }

    function fn(e = {}) {
        let t = { playlistDuration: !0, ...e };

        function n() {
            o(), setTimeout(() => {
                o()
            }, 1e3)
        }

        function o() {
            return window.location.pathname.match(/^\/playlist/) ? yn() : window.location.pathname.match(/^\/watch/) && window.location.search.match(/list=/) ? mn() : void 0
        }

        function r() {
            t.playlistDuration && a.a.on([ln, sn], cn()(n, 200))
        }

        return r(), {
            updateOptions: function (e) {
                a.a.off([ln, sn]), [un, dn].forEach(e => {
                    var t;
                    return null === (t = document.getElementById(e)) || void 0 === t ? void 0 : t.remove()
                }), t = { ...t, ...e }, r()
            }
        }
    }

    var gn, vn = n(175), hn = 0, bn = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, wn = {};
    wn.locals = vn.a.locals || {}, wn.use = function () {
        return hn++ || (gn = y()(vn.a, bn)), wn
    }, wn.unuse = function () {
        hn > 0 && !--hn && (gn(), gn = null)
    };

    function kn(e) {
        function t(e) {
            if ("Enter" === e.code && (e.ctrlKey || e.shiftKey)) {
                e.preventDefault(), e.stopPropagation();
                const t = "https://www.youtube.com/results?search_query=" + e.currentTarget.value;
                e.currentTarget.value = "", window.open(t)
            }
        }

        function n(e) {
            var n;
            e.searchResultsOpenInNewTab && (null === (n = document.querySelector("input#search")) || void 0 === n || n.addEventListener("keydown", t, !0))
        }

        return n(e), {
            update: function (e) {
                var o;
                null === (o = document.querySelector("input#search")) || void 0 === o || o.removeEventListener("keydown", t, !0), n(e)
            }
        }
    }

    var Sn, Bn = n(39), xn = n(176), Pn = 0, Cn = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Mn = {};
    Mn.locals = xn.a.locals || {}, Mn.use = function () {
        return Pn++ || (Sn = y()(xn.a, Cn)), Mn
    }, Mn.unuse = function () {
        Pn > 0 && !--Pn && (Sn(), Sn = null)
    };
    var En = Mn;

    function jn(e) {
        function t(e) {
            window.location.pathname.match(/\/(results|search)$/) && Object(Bn.a)({
                arrowup: Rn,
                arrowdown: An
            }, { targets: ["INPUT"], excludeTargets: !0, stopImmediatePropagation: !0 })(e)
        }

        function n(e) {
            e.searchResultsNavigation && (En.use(), document.addEventListener("keydown", t, !0))
        }

        return n(e), {
            update: function (e) {
                En.unuse(), document.removeEventListener("keydown", t, !0), n(e)
            }
        }
    }

    function On() {
        var e;
        return null === (e = Tn()) || void 0 === e ? void 0 : e.findIndex(e => e.isEqualNode(document.activeElement))
    }

    function Tn() {
        return "/results" === window.location.pathname ? [...document.querySelectorAll("\n      ytd-search #contents a#main-link,\n      ytd-search #contents a#video-title,\n      ytd-search #contents a.ytd-playlist-renderer,\n      ytd-search #contents a.ytd-radio-renderer\n      ")] : window.location.pathname.match(/\/search$/) ? [...document.querySelectorAll("\n      ytd-browse #contents a#main-link,\n      ytd-browse #contents a#video-title,\n      ytd-browse #contents a.ytd-playlist-renderer,\n      ytd-browse #contents a.ytd-radio-renderer\n      ")] : void 0
    }

    function An() {
        const e = On() + 1;
        e >= 0 && Vn(e)
    }

    function Rn() {
        const e = Math.max(0, On() - 1);
        e >= 0 && Vn(e)
    }

    function Vn(e) {
        var t;
        const n = null === (t = Tn()) || void 0 === t ? void 0 : t[e];
        n && (n.focus(), n.scrollIntoView({ block: "center" }))
    }

    var Ln, In = n(177), Dn = 0, _n = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, $n = {};
    $n.locals = In.a.locals || {}, $n.use = function () {
        return Dn++ || (Ln = y()(In.a, _n)), $n
    }, $n.unuse = function () {
        Dn > 0 && !--Dn && (Ln(), Ln = null)
    };
    var Fn = $n;

    async function zn() {
        const { sidebarSectionHidden: e } = await r.d.get(["sidebarSectionHidden"]).catch(e => console.error(e)), t = !e;
        r.d.set({ sidebarSectionHidden: t })
    }

    var Hn, qn = n(178), Nn = 0, Kn = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Wn = {};
    Wn.locals = qn.a.locals || {}, Wn.use = function () {
        return Nn++ || (Hn = y()(qn.a, Kn)), Wn
    }, Wn.unuse = function () {
        Nn > 0 && !--Nn && (Hn(), Hn = null)
    };
    var Gn = Wn;

    function Un(e) {
        function t(e) {
            e.sidebarSectionHidden && Gn.use()
        }

        return t(e), i.a.add({ action: "toggleSidebarVisibility", fn: zn }), {
            update: function (e) {
                Gn.unuse(), t(e)
            }
        }
    }

    var Yn, Xn = n(179), Zn = 0, Qn = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Jn = {};
    Jn.locals = Xn.a.locals || {}, Jn.use = function () {
        return Zn++ || (Yn = y()(Xn.a, Qn)), Jn
    }, Jn.unuse = function () {
        Zn > 0 && !--Zn && (Yn(), Yn = null)
    };
    var eo, to = Jn, no = n(180), oo = 0, ao = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, ro = {};
    ro.locals = no.a.locals || {}, ro.use = function () {
        return oo++ || (eo = y()(no.a, ao)), ro
    }, ro.unuse = function () {
        oo > 0 && !--oo && (eo(), eo = null)
    };
    var io = ro;

    function co(e) {
        let t = !1;
        const n = new MutationObserver(cn()((function () {
            if (!lo(e)) return !t && io.use(), t = !0;
            io.unuse(), t = !1
        }), 200));

        function o(e) {
            if (!e.sidebarRelatedHidden) return;
            to.use();
            const o = document.getElementById("secondary");

            function r(o) {
                n.observe(o, { attributes: !0, childList: !0, subtree: !0 }), lo(e) || (!t && io.use(), t = !0)
            }

            o || a.a.on("#secondary", e => (a.a.off("#secondary"), r(e))), o && r(o)
        }

        return o(e), {
            update: function (e) {
                t = !1, n.disconnect(), to.unuse(), io.unuse(), o(e)
            }
        }
    }

    function lo(e) {
        var t, n, o, a;
        const r = document.querySelector("ytd-live-chat-frame") && "disable" !== e.chatVisibility,
            i = "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" === (null === (t = document.querySelector('#panels [target-id="engagement-panel-macro-markers-description-chapters"]')) || void 0 === t ? void 0 : t.getAttribute("visibility")),
            c = "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" === (null === (n = document.querySelector('#panels [target-id="engagement-panel-macro-markers-auto-chapters"]')) || void 0 === n ? void 0 : n.getAttribute("visibility"));
        return [null === (o = document.querySelector("ytd-watch-flexy")) || void 0 === o ? void 0 : o.hasAttribute("playlist"), r, i, c, "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED" === (null === (a = document.querySelector('#panels [target-id="engagement-panel-transcript"]')) || void 0 === a ? void 0 : a.getAttribute("visibility"))].some(e => e)
    }

    async function uo() {
        const { skipVideoBlockGlobal: e } = await r.d.get(["skipVideoBlockGlobal"]).catch(e => console.error(e)), t = !e;
        Object(q.a)("Skip Video Intro Global: " + (t ? "On" : "Off"), { duration: 1500 }), r.d.set({ skipVideoBlockGlobal: t })
    }

    async function so() {
        const { skipVideoBlockIndividual: e } = await r.d.get(["skipVideoBlockIndividual"]).catch(e => console.error(e)),
            t = !e;
        Object(q.a)("Skip Video Intro Individual: " + (t ? "On" : "Off"), { duration: 1500 }), r.d.set({ skipVideoBlockIndividual: t })
    }

    function po(e, t) {
        const n = Object(u.a)(e, t);

        function o(e) {
            if (!window.location.pathname.includes("/watch") || window.location.href.match(/t=\d+/)) return;
            const t = function () {
                var e;
                const t = document.querySelector("ytd-video-owner-renderer ytd-channel-name a");
                return t && {
                    channelId: null == t ? void 0 : t.href.split("/").slice(-1)[0],
                    channelName: null == t ? void 0 : t.textContent,
                    videoTitle: null === (e = document.querySelector("#info h1")) || void 0 === e ? void 0 : e.textContent
                }
            }();
            t && function ({ channelId: t, channelName: o, videoTitle: a }) {
                const r = e.skipVideoBlockIndividual && e.skipVideoBlockIndividualData.find(e => e.videoTitle ? (null == a ? void 0 : a.match(new RegExp(e.videoTitle, "i"))) && (e.channelId === t || e.channelName === o) : e.channelId === t || e.channelName === o) || e.skipVideoBlockGlobal && e.skipVideoBlockGlobalData;
                if (!(null == r ? void 0 : r.start) || !(null == r ? void 0 : r.enabled)) return;
                const i = parseFloat(r.start), c = function (e) {
                    if (e.match(/(c|chapter)/)) return "c";
                    if (e.match(/(%)/)) return "%"
                }(r.start);
                if (!(i > 0)) return;
                if ("c" === c) return n("seekToChapter", i - 1);
                n("seekTo", c ? `${i}${c}` : i)
            }(t)
        }

        return i.a.add({
            action: "toggleSkipVideoBlockGlobal",
            fn: uo
        }), i.a.add({ action: "toggleSkipVideoBlockIndividual", fn: so }), o(t), {
            update: function (e) {
                o(e)
            }
        }
    }

    var yo = n(83);
    const mo = document.createElement("style");
    mo.id = "twfyt-subtitles-position-styles";
    var fo = {
        add(e) {
            document.head.querySelector(mo.id) || document.head.append(function ({ subtitlesPosition: e, subtitlesOffsetY: t, ytpControlsMode: n, ytpControlsHidden: o }) {
                return mo.innerHTML = `\n    .caption-window {\n      text-align: center !important;\n      bottom: unset !important;\n      top: unset !important;\n      right: unset !important;\n      left: 50% !important;\n      transform: translateX(-50%);\n      margin-left: 0 !important;\n      margin-right: 0 !important;\n      margin-top: 0 !important;\n      pointer-events: none !important;\n      ${"top" === e ? `top: ${t}% !important;` : `bottom: ${t}% !important;`} \n      ${(["mini", "persistent-mini"].some(e => n === e) || o) && "margin-bottom: 0 !important;"}\n    }\n  `, mo
            }(e))
        }, remove() {
            mo.remove()
        }
    };
    const go = new Map([["top", "Top"], [!1, "Default"], ["bottom", "Bottom"]]);

    function vo(e) {
        function t(e) {
            if (!e.subtitlesPosition) return fo.remove();
            fo.add(e)
        }

        function n(e) {
            t(e)
        }

        return t(e), i.a.add({
            action: "cycleSubtitlesPosition", fn: async function () {
                const { subtitlesPosition: e } = await r.d.get(["subtitlesPosition"]).catch(e => console.error(e)),
                    t = Object(en.a)(e, [...go.keys()]).next().value;
                r.d.set({ subtitlesPosition: t }), Object(q.a)("Subtitles Position: " + go.get(t), { duration: 1500 })
            }
        }), function () {
            async function e(e) {
                const { subtitlesOffsetY: t } = await r.d.get(["subtitlesOffsetY"]).catch(e => console.error(e)),
                    n = "+" === e ? Math.min(100, t + 1) : Math.max(0, t - 1);
                r.d.set({ subtitlesOffsetY: n }), Object(q.a)(`Subtitles Offset Y: ${n}%`)
            }

            i.a.add({
                action: "increaseSubtitlesOffsetY",
                fn: () => e("+")
            }), i.a.add({ action: "decreaseSubtitlesOffsetY", fn: () => e("-") })
        }(), chrome.runtime.onMessage.addListener(({ type: e, action: t, payload: o }) => {
            "twfytRuntimeMessage" === e && "update-subtitles-offset-y" === t && n(o)
        }), { update: n }
    }

    var ho = n(86), bo = n(81), wo = n(88);

    function ko(e) {
        async function t(e) {
            if (!e.ctrlKey || e.shiftKey || e.altKey) return;
            if (e.target.className.includes("banner-visible-area")) {
                var t;
                return So(null === (t = nn.a.get("yt-channel-banner", { element: e.target.closest("ytd-c4-tabbed-header-renderer") })) || void 0 === t ? void 0 : t.slice(4, -1).replace(/\\/g, "").replace(/=w.+/, "=w0"))
            }
            const n = function (e) {
                if ("IMG" !== e.nodeName || "img" !== e.id) return;
                if (e.src.match(/https:\/\/yt3.ggpht.com\/.+=s\d+/)) return e.src.split("=")[0] + "=s0"
            }(e.target);
            if (n) return e.preventDefault(), e.stopPropagation(), So(n);
            const o = e.target.closest("a#thumbnail, a.ytp-videowall-still");
            if (!o) return;
            e.preventDefault(), e.stopPropagation(), o.blur();
            const a = Object(wo.a)(o.href);
            So(await function (e) {
                return (async () => {
                    const t = `https://i3.ytimg.com/vi/${e}/maxresdefault.jpg`,
                        n = `https://i3.ytimg.com/vi/${e}/hqdefault.jpg`, o = new Image;
                    o.src = t;
                    return await new Promise(e => {
                        o.onload = () => {
                            e(o.width > 120)
                        }
                    }) ? t : n
                })()
            }(a))
        }

        function n(e) {
            e.thumbnailViewFullSize && document.addEventListener("click", t)
        }

        return n(e), {
            update: function (e) {
                document.removeEventListener("click", t), n(e)
            }
        }
    }

    function So(e) {
        e && Object(bo.a)({ src: e }, { id: "twfyt-thumbnail", parent: document.fullscreenElement || document.body })
    }

    function Bo(e) {
        function t(e) {
            e.videoDescription && a.a.on("#meta-contents #more", e => {
                var t;
                window.location.pathname.match(/\/watch/) && (e.click(), null === (t = document.querySelector("#meta-contents #less")) || void 0 === t || t.setAttribute("disabled", !0))
            })
        }

        return t(e), {
            update: function (e) {
                var n;
                a.a.off("#meta-contents #more"), null === (n = document.querySelector("#meta-contents #less")) || void 0 === n || n.removeAttribute("disabled"), t(e)
            }
        }
    }

    var xo, Po = n(89), Co = n(181), Mo = 0, Eo = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, jo = {};
    jo.locals = Co.a.locals || {}, jo.use = function () {
        return Mo++ || (xo = y()(Co.a, Eo)), jo
    }, jo.unuse = function () {
        Mo > 0 && !--Mo && (xo(), xo = null)
    };
    var Oo = jo;

    function To(e) {
        function t(e) {
            e.videoDimmer && (nn.a.set({ "twfyt-video-dimmer-brightness": e.videoDimmerBrightness }), Oo.use())
        }

        return Object(Po.a)(), t(e), {
            update: function (e) {
                Oo.unuse(), t(e)
            }
        }
    }

    var Ao, Ro = n(90), Vo = n(182), Lo = 0, Io = {
        injectType: "lazyStyleTag",
        attributes: { className: "tweaks-for-youtube-lazy-styles" },
        insert: "head",
        singleton: !1
    }, Do = {};
    Do.locals = Vo.a.locals || {}, Do.use = function () {
        return Lo++ || (Ao = y()(Vo.a, Io)), Do
    }, Do.unuse = function () {
        Lo > 0 && !--Lo && (Ao(), Ao = null)
    };
    var _o = Do;

    function $o(e, t) {
        const n = document.createElement("div");
        n.className = "twfyt__video-playback-info__container";
        const o = {
            currentTime: document.createElement("span"),
            remainingTime: document.createElement("span"),
            volume: document.createElement("span"),
            playbackRate: document.createElement("span")
        };
        let a;

        function r() {
            o.playbackRate.textContent = Math.round(100 * e.playbackRate) / 100 + "x", o.volume.textContent = (function (e) {
                var t, n;
                return null === (t = e.closest("#movie_player")) || void 0 === t || null === (n = t.querySelector(".ytp-volume-panel")) || void 0 === n ? void 0 : n.getAttribute("aria-valuenow")
            }(e) || Math.round(100 * e.volume)) + "%", o.currentTime.textContent = `${Object(P.c)(e.currentTime)} / ${Object(P.c)(e.duration)}`, o.remainingTime.textContent = "-" + Object(P.c)(e.duration - e.currentTime)
        }

        function i(t) {
            t.videoPlaybackInfo && (_o.use(), c(t), r(), function (e) {
                ["playbackRate", "volume", "currentTime", "remainingTime"].forEach(t => o[t].style.display = e[`videoPlaybackInfo${t[0].toUpperCase()}${t.slice(1)}`] ? "" : "none")
            }(t), e.parentElement.appendChild(n), e.addEventListener("ratechange", r), e.addEventListener("volumechange", r), a = setInterval(() => {
                r()
            }, 1e3))
        }

        function c(e) {
            nn.a.set([["twfyt--video-playback-info--opacity", e.videoPlaybackInfoStyleOpacity], ["twfyt--video-playback-info--font-size", e.videoPlaybackInfoStyleFontSize + "em"]], { element: n })
        }

        return Object.values(o).forEach(e => n.appendChild(e)), Object(Ro.a)(), i(t), {
            update: function (t) {
                n.remove(), _o.unuse(), e.removeEventListener("ratechange", r), e.removeEventListener("volumechange", r), clearInterval(a), i(t)
            }, updateStyles: c
        }
    }

    var Fo = n(127), zo = n(183),
        Ho = { attributes: { className: "tweaks-for-youtube-styles" }, insert: "head", singleton: !1 };
    y()(zo.a, Ho), zo.a.locals;
    (async () => {
        await Object(d.a)();
        let e = await r.c.get().catch(e => console.error(e));
        e = e || r.f, i.a.init(e);
        const t = {}, n = {};

        function o() {
            var o, a, r, i, c, l, u, s, d, p;
            null === (o = t.initialFullscreen) || void 0 === o || o.update(e), null === (a = t.initialPlaybackRate) || void 0 === a || a.update(e), null === (r = t.initialVolume) || void 0 === r || r.update(e), null === (i = t.initialAutoPlay) || void 0 === i || i.update(e), null === (c = t.initialTheatreMode) || void 0 === c || c.restart(e), null === (l = t.initialSubtitles) || void 0 === l || l.update(e), null === (u = t.playbackQuality) || void 0 === u || u.update(e), null === (s = t.chaptersAutoShowList) || void 0 === s || s.restart(e), null === (d = t.initialLoop) || void 0 === d || d.update(e), null === (p = n.getContentLoudness) || void 0 === p || p.restart(e)
        }

        t.searchResultsOpenInNewTab = kn(e), t.backToTop = J(e), t.thumbnailViewFullSize = ko(e), t.searchResultsNavigation = jn(e), t.initialChannelPageTab = Rt(e), t.cleanPlayer = Ae(e), t.cleanSite = Ie(e), t.scrollbarThin = {
            update: function (e) {
            }
        }, t.sidebarFixed = function (e) {
            function t(e) {
                if (e.sidebarSectionFixed) return Fn.use();
                Fn.unuse()
            }

            return t(e), {
                update: function (e) {
                    t(e)
                }
            }
        }(e), t.commentsSortBy = De(e), t.commentsVisibility = Ke(e), t.sidebarVisibility = Un(e), t.focusSearchBox = Object(et.a)(), t.playlistDuration = fn(e), t.videoDimmer = To(e), t.autoclickAdSkipButton = F(e), t.videoDescription = Bo(e), t.chatVisibility = ce(e), t.subtitlesDisabled = Object(yo.a)(e), a.a.on("#movie_player video", async o => {
            t.convertChannelNameToURL = Qe(e), t.backToComment = Object(W.a)(), t.embedMode = Object(Je.a)(e), t.thumbnailViewCurrent = Object(ho.a)(e), o.paused && await async function (e) {
                return new Promise(t => {
                    e.addEventListener("play", () => {
                        t({ success: !0 })
                    }, { once: !0 })
                })
            }(o), Object(c.a)(o), t.cinemaMode = Me(e), t.sidebarRelatedVisibility = co(e), t.skipVideoBlock = po(o, e), t.chaptersAutoShowList = function (e) {
                function t(e) {
                    if (!e.chaptersAutoShowList) return;
                    new MutationObserver((e, t) => {
                        const n = document.querySelector(".ytp-button.ytp-chapter-title");
                        n && (n.click(), t.disconnect())
                    }).observe(document.querySelector(".ytp-chrome-controls"), { childList: !0, subtree: !0 })
                }

                return t(e), {
                    restart: function (e) {
                        t(e)
                    }
                }
            }(e), t.audioProcessing = Object($.a)(o, e), t.videoSnapshot = Object(Fo.a)(o, e), t.mouseControl = Object(Nt.a)(o, e), t.mouseControlMiniplayer = Xt(e), t.keyboardControl = Object(Ht.a)(o, e), t.instantTogglePlay = function (e, t) {
                const n = {
                    click: () => {
                        var t;
                        return null === (t = Object(H.a)(e)) || void 0 === t ? void 0 : t.focus()
                    }, mousedown0: { action: "togglePlay" }
                }, o = {
                    active: t.instantTogglePlay,
                    actionInfoDisabled: !0,
                    area: Object(zt.a)(e, t),
                    events: ["click", "mousedown"],
                    force: !0,
                    preset: null,
                    userPreset: Object(Ft.a)(n, e, t),
                    mouseEvt: { onStart: M.a }
                }, a = Object(P.b)(e, o);
                return {
                    updateOptions: function ({ instantTogglePlay: n }) {
                        a.update({ active: n, area: Object(zt.a)(e, t) })
                    }
                }
            }(o, e), t.instantFullscreen = $t(e), t.mmbToggleFullscreen = function (e, t) {
                const n = {
                    dblclick: () => {
                    }, mousedown1: { action: "toggleFullscreen" }
                }, o = {
                    active: t.mmbToggleFullscreen,
                    actionInfoDisabled: !0,
                    area: Object(zt.a)(e, t),
                    events: ["dblclick", "mousedown"],
                    force: !0,
                    preset: null,
                    userPreset: Object(Ft.a)(n, e),
                    mouseEvt: { onStart: M.a }
                }, a = Object(P.b)(e, o);
                return {
                    updateOptions: function ({ mmbToggleFullscreen: n }) {
                        a.update({ active: n, area: Object(zt.a)(e, t) })
                    }
                }
            }(o, e), t.autohidePlayerControls = N(o, e), t.playerControlsMode = an(o, e), t.hideActionIndicatorIcon = dt(e), t.hidePlayerControls = Ot(0, e), t.subtitlesPosition = vo(e), t.getVideoDownloadLink = Object(tt.a)(o, e), t.gotoChapterStart = ot(o, e), t.initialPlaybackRate = function (e, t) {
                const n = Object(u.a)(e);

                function o(e) {
                    e.initialPlaybackRate && n("setPlaybackRate", { value: e.initialPlaybackRateLevel, noEcho: !0 })
                }

                return o(t), {
                    update: function (e) {
                        o(e)
                    }
                }
            }(o, e), t.initialVolume = Object(It.a)(o, e), t.initialAutoPlay = function (e) {
                function t(e) {
                    const t = document.querySelector(".ytp-autonav-toggle-button");
                    e.initialAutoPlay && !Tt.a.get("yt.autonav::autonav_disabled") && t && setTimeout(() => {
                        switch (e.initialAutoPlay) {
                            case "on":
                                return function (e) {
                                    "false" === e.getAttribute("aria-checked") && e.click()
                                }(t);
                            case "off":
                                return function (e) {
                                    "true" === e.getAttribute("aria-checked") && e.click()
                                }(t)
                        }
                    }, 1e3)
                }

                return t(e), { update: t }
            }(e), t.initialSubtitles = Dt(e), t.initialTheatreMode = function (e) {
                function t(e) {
                    const t = new IntersectionObserver(() => {
                        var n;
                        if (!e.initialTheatreMode) return t.disconnect();
                        const o = null === (n = document.querySelector("ytd-watch-flexy")) || void 0 === n ? void 0 : n.hasAttribute("theater");
                        "default-view" === e.initialTheatreMode ? o && _t() : !o && _t(), t.disconnect()
                    });
                    t.observe(document.querySelector("video"))
                }

                return t(e), {
                    restart: function (e) {
                        t(e)
                    }
                }
            }(e), t.playbackQuality = function (e, t) {
                const n = Object(u.a)(e);

                function o(e) {
                    e.ytpPreferredQuality && setTimeout(() => {
                        n("setPlaybackQuality", e.ytpPreferredQuality)
                    }, 100)
                }

                return o(t), {
                    update: function (e) {
                        o(e)
                    }
                }
            }(o, e), t.upNextVideo = function (e) {
                function t(e) {
                    e.upNextVideo && a.a.on(".ytp-autonav-endscreen-upnext-play-button", e => {
                        e.click()
                    })
                }

                return t(e), {
                    update: function (e) {
                        a.a.off(".ytp-autonav-endscreen-upnext-play-button"), t(e)
                    }
                }
            }(e), t.pictureInPicture = Object(Zt.a)(o, e), t.videoPlaybackInfo = $o(o, e), t.initialFullscreen = Vt(e), t.initialLoop = Lt(e), n.getContentLoudness = function (e, t) {
                function n(t) {
                    if (!t.audioAutoGain) return o(0);
                    setTimeout(() => {
                        Object(u.a)(e, t)("getContentLoudness")
                    }, 100)
                }

                function o(e) {
                    window.postMessage({ type: "twfyt-set-auto-gain-level", payload: e }, window.location.origin)
                }

                return window.addEventListener("message", ({ data: e }) => {
                    "twfyt-get-content-loudness" === e.type && o(e.payload)
                }), n(t), { restart: n, update: n }
            }(o, e), n.maxMouseControlArea = b(e), Object(l.a)(o, e), a.a.off("#movie_player video")
        }), a.a.on("ytd-player", t => {
            n.ytdPlayerEventOverride = I(t, e), t.removeEventListener("yt-player-updated", o), t.addEventListener("yt-player-updated", o)
        }), document.addEventListener("yt-page-data-updated", (function () {
            var n, o;
            null === (n = t.skipVideoBlock) || void 0 === n || n.update(e), null === (o = t.skipVideoBlock) || void 0 === o || o.update(e)
        })), r.c.onChanged.addListener((function (o) {
            Object.assign(e, Object(r.e)(o)), Object.entries(o).forEach(([o]) => {
                var a, r, c, l, u, s, d, p, y, m, f, g, v, h, b, w, k, S, B, x, P, C, M, E, j, O, T, A, R, V, L, I, D,
                    _, $, F, z, H, q, N, K, W, G, U, Y, X, Z;
                switch (o) {
                    case "mouseControlActive":
                    case "mouseControlDisableDoubleClick":
                    case "mouseControlElement":
                    case "mouseControlModKey":
                    case "instantTogglePlay":
                    case "mmbToggleFullscreen":
                    case "interactionZonesMouseButton":
                    case "interactionZonesMouseWheel":
                    case "interactionZonesMouseButtonPresets":
                    case "interactionZonesMouseWheelPresets":
                        return null === (a = t.mouseControl) || void 0 === a || a.updateOptions(e), null === (r = t.instantTogglePlay) || void 0 === r || r.updateOptions(e), null === (c = t.mmbToggleFullscreen) || void 0 === c || c.updateOptions(e), null === (l = n.ytdPlayerEventOverride) || void 0 === l || l.update(e), void (null === (u = n.maxMouseControlArea) || void 0 === u || u.update(e));
                    case "mouseControlMiniplayer":
                        return null === (s = t.mouseControlMiniplayer) || void 0 === s ? void 0 : s.update(e);
                    case "ytpAutohideDelay":
                        return null === (d = t.autohidePlayerControls) || void 0 === d ? void 0 : d.updateOptions(e);
                    case "ytpControlsMode":
                    case "ytpControlsHidden":
                    case "ytpControlsHiddenPaused":
                    case "ytpControlsHiddenPlaying":
                    case "ytpControlsHiddenShowOnHover":
                    case "ytpProgressBarAtBottom":
                        return null === (p = t.hidePlayerControls) || void 0 === p || p.update(e), null === (y = t.playerControlsMode) || void 0 === y || y.updateOptions(e), void (null === (m = t.subtitlesPosition) || void 0 === m || m.update(e));
                    case "cleanPlayer":
                    case "cleanPlayerAdOverlay":
                    case "cleanPlayerCE":
                    case "cleanPlayerChannelWattermark":
                    case "cleanPlayerEndScreen":
                    case "cleanPlayerTop":
                    case "cleanPlayerPaidContentOverlay":
                    case "cleanPlayerVideoAnnotations":
                        return null === (f = t.cleanPlayer) || void 0 === f ? void 0 : f.update(e);
                    case "cleanSite":
                    case "cleanSiteAds":
                    case "cleanSiteAnnoyances":
                    case "cleanSiteDrawerFooter":
                    case "cleanSiteDrawerLastSection":
                    case "cleanSiteDrawerMoreFromYouTube":
                    case "cleanSiteHeaderVoiceSearchButton":
                    case "cleanSiteHomeSections":
                    case "cleanSiteSidebarDonationShelf":
                    case "cleanSiteWatchClarifyBox":
                    case "cleanSiteWatchCommentInput":
                    case "cleanSiteWatchInfoMenu":
                        return null === (g = t.cleanSite) || void 0 === g ? void 0 : g.update(e);
                    case "ytpProgressBarOpacity":
                        return null === (v = t.playerControlsMode) || void 0 === v ? void 0 : v.updateProgressBarOpacity(e);
                    case "playlistDuration":
                        return null === (h = t.playlistDuration) || void 0 === h ? void 0 : h.updateOptions(e);
                    case "hotkeys":
                        return null === i.a || void 0 === i.a ? void 0 : i.a.update(e);
                    case "keyboardControlKeys":
                        return null === (b = t.keyboardControl) || void 0 === b ? void 0 : b.update(e);
                    case "audioAutoGain":
                    case "audioAutoGainBoostThreshold":
                    case "audioBoostGain":
                    case "audioAutoGainMode":
                    case "audioHPF":
                    case "audioHPFFrequency":
                    case "audioMonoMix":
                    case "audioMonoMixSource":
                        return null === (w = t.audioProcessing) || void 0 === w || w.update(e), void (null === (k = n.getContentLoudness) || void 0 === k || k.update(e));
                    case "subtitlesOffsetY":
                    case "subtitlesPosition":
                        return null === (S = t.subtitlesPosition) || void 0 === S ? void 0 : S.update(e);
                    case "initialSubtitles":
                        return null === (B = t.initialSubtitles) || void 0 === B ? void 0 : B.update(e);
                    case "commentsSectionHidden":
                        return null === (x = t.commentsVisibility) || void 0 === x ? void 0 : x.update(e);
                    case "sidebarSectionHidden":
                        return null === (P = t.sidebarVisibility) || void 0 === P ? void 0 : P.update(e);
                    case "sidebarRelatedHidden":
                        return null === (C = t.sidebarRelatedVisibility) || void 0 === C ? void 0 : C.update(e);
                    case "scrollbarThin":
                        return null === (M = t.scrollbarThin) || void 0 === M ? void 0 : M.update(e);
                    case "sidebarSectionFixed":
                        return null === (E = t.sidebarFixed) || void 0 === E ? void 0 : E.update(e);
                    case "ytpPreferredQuality":
                        return null === (j = t.playbackQuality) || void 0 === j ? void 0 : j.update(e);
                    case "gotoChapterStart":
                        return null === (O = t.gotoChapterStart) || void 0 === O ? void 0 : O.update(e);
                    case "maxMouseControlArea":
                        return null === (T = n.maxMouseControlArea) || void 0 === T ? void 0 : T.update(e);
                    case "initialChannelPageTab":
                        return null === (A = t.initialChannelPageTab) || void 0 === A ? void 0 : A.update(e);
                    case "convertChannelNameToURL":
                        return null === (R = t.convertChannelNameToURL) || void 0 === R ? void 0 : R.update(e);
                    case "upNextVideo":
                        return null === (V = t.upNextVideo) || void 0 === V ? void 0 : V.update(e);
                    case "cinemaMode":
                    case "cinemaModeHiddenMasthead":
                    case "cinemaModeHiddenScrollbar":
                        return null === (L = t.cinemaMode) || void 0 === L ? void 0 : L.update(e);
                    case "searchResultsNavigation":
                        return null === (I = t.searchResultsNavigation) || void 0 === I ? void 0 : I.update(e);
                    case "videoDimmer":
                    case "videoDimmerBrightness":
                        return null === (D = t.videoDimmer) || void 0 === D ? void 0 : D.update(e);
                    case "autoclickAdSkipButton":
                        return null === (_ = t.autoclickAdSkipButton) || void 0 === _ ? void 0 : _.update(e);
                    case "commentsSortBy":
                        return null === ($ = t.commentsSortBy) || void 0 === $ ? void 0 : $.update(e);
                    case "actionIndicatorIconHidden":
                        return null === (F = t.hideActionIndicatorIcon) || void 0 === F ? void 0 : F.update(e);
                    case "videoDescription":
                        return null === (z = t.videoDescription) || void 0 === z ? void 0 : z.update(e);
                    case "backToTop":
                    case "backToTopPosition":
                        return null === (H = t.backToTop) || void 0 === H ? void 0 : H.update(e);
                    case "thumbnailViewFullSize":
                        return null === (q = t.thumbnailViewFullSize) || void 0 === q ? void 0 : q.update(e);
                    case "instantFullscreen":
                        return null === (N = t.instantFullscreen) || void 0 === N ? void 0 : N.update(e);
                    case "videoPlaybackInfo":
                    case "videoPlaybackInfoPlaybackRate":
                    case "videoPlaybackInfoVolume":
                    case "videoPlaybackInfoCurrentTime":
                    case "videoPlaybackInfoRemainingTime":
                        return null === (K = t.videoPlaybackInfo) || void 0 === K ? void 0 : K.update(e);
                    case "videoPlaybackInfoStyleFontSize":
                    case "videoPlaybackInfoStyleOpacity":
                        return null === (W = t.videoPlaybackInfo) || void 0 === W ? void 0 : W.updateStyles(e);
                    case "chatVisibility":
                        return null === (G = t.chatVisibility) || void 0 === G || G.update(e), void (null === (U = t.sidebarRelatedVisibility) || void 0 === U || U.update(e));
                    case "initialLoop":
                        return null === (Y = t.initialLoop) || void 0 === Y ? void 0 : Y.update(e);
                    case "searchResultsOpenInNewTab":
                        return null === (X = t.searchResultsOpenInNewTab) || void 0 === X ? void 0 : X.update(e);
                    case "subtitlesDisabled":
                        return null === (Z = t.subtitlesDisabled) || void 0 === Z ? void 0 : Z.update(e)
                }
            })
        }))
    })()
}]);