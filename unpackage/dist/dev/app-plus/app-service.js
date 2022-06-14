if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$k = {
    emits: ["clickLeft", "clickRight"],
    props: {
      leftIcon: {
        type: String,
        value: ""
      },
      leftIconStyle: {
        type: String,
        value: ""
      },
      rightIconStyle: {
        type: String,
        value: ""
      },
      rightIcon: {
        type: String,
        value: ""
      },
      title: {
        type: String,
        value: ""
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "navigation-bar animate__animated animate__pulse",
      style: { "padding-top": "2rem" }
    }, [
      vue.createElementVNode("image", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
        style: vue.normalizeStyle($props.leftIconStyle),
        src: $props.leftIcon
      }, null, 12, ["src"]),
      vue.createElementVNode("text", null, vue.toDisplayString($props.title), 1),
      vue.createElementVNode("image", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
        style: vue.normalizeStyle($props.rightIconStyle),
        src: $props.rightIcon
      }, null, 12, ["src"])
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-185f267c"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/relieve-navigationbar/components/relieve-navigationbar/relieve-navigationbar.vue"]]);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$j = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      style: vue.normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
      class: "uni-grid-item"
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
        style: vue.normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-7b4a3849"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  const _sfc_main$i = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      column: {
        type: Number,
        default: 3
      },
      showBorder: {
        type: Boolean,
        default: true
      },
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e) {
        this.$emit("change", e);
      },
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.width = parseInt((ret[0].width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-grid-wrap" }, [
      vue.createElementVNode("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: vue.normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: vue.normalizeStyle({ "border-left-color": $props.borderColor })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 14, ["id"])
    ]);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-aaae28a6"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  const _sfc_main$h = {
    props: {
      style: {
        type: String,
        value: ""
      },
      msg: {
        type: String,
        value: "+"
      },
      textStyle: {
        type: String,
        value: ""
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "fab",
      style: vue.normalizeStyle($props.style)
    }, [
      vue.createElementVNode("text", {
        style: vue.normalizeStyle($props.textStyle)
      }, vue.toDisplayString($props.msg), 5)
    ], 4);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-b4164ab2"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/relieve-floatactionbutton/components/relieve-floatactionbutton/relieve-floatactionbutton.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        title: "Hello",
        show_sunny_doll: true,
        show_float_action_button: true,
        show_sunny_doll_grid: false,
        home_start_text: "\u5F00\u59CB\u8BB0\u5F55\u5427",
        sunny_doll_imgs: [
          "../../static/sunny_doll_0.png",
          "../../static/sunny_doll_1.png",
          "../../static/sunny_doll_2.png",
          "../../static/sunny_doll_3.png",
          "../../static/sunny_doll_4.png",
          "../../static/sunny_doll_5.png",
          "../../static/sunny_doll_6.png",
          "../../static/sunny_doll_7.png"
        ]
      };
    },
    onLoad() {
    },
    methods: {
      onStartRecord() {
        uni.navigateTo({
          url: "index-next"
        });
      },
      setting() {
        uni.navigateTo({
          url: "setting"
        });
      },
      music() {
        uni.navigateTo({
          url: "music"
        });
      },
      world() {
        uni.navigateTo({
          url: "world"
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_2);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_3$2);
    const _component_relieve_floatactionbutton = resolveEasycom(vue.resolveDynamicComponent("relieve-floatactionbutton"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content animate__animated animate__fadeIn" }, [
      vue.createVNode(_component_relieve_navigationbar, {
        leftIcon: "../../static/navigationbar_person.png",
        onClickLeft: $options.setting,
        onClickRight: $options.music,
        title: "\u91CA\u6000",
        rightIcon: "../../static/Vector.png",
        rightIconStyle: "transform:scale(0.7)"
      }, null, 8, ["onClickLeft", "onClickRight"]),
      vue.createElementVNode("view", { class: "home" }, [
        vue.createElementVNode("image", {
          class: "home_sun",
          src: "/static/home_sun.png"
        }),
        vue.createElementVNode("text", { class: "home_start_text" }, vue.toDisplayString($data.home_start_text), 1),
        vue.withDirectives(vue.createElementVNode("image", {
          class: "home_sunny_doll",
          src: "/static/home_sunny_doll.png",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.test && _ctx.test(...args))
        }, null, 512), [
          [vue.vShow, $data.show_sunny_doll]
        ]),
        vue.withDirectives(vue.createVNode(_component_uni_grid, {
          column: 3,
          showBorder: false,
          borderColor: "white"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sunny_doll_imgs, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_uni_grid_item, { index }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "grid-item-box-row" }, [
                    vue.createElementVNode("image", {
                      class: "grid-item-image",
                      src: item
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 2
              }, 1032, ["index"]);
            }), 256))
          ]),
          _: 1
        }, 512), [
          [vue.vShow, $data.show_sunny_doll_grid]
        ]),
        vue.withDirectives(vue.createVNode(_component_relieve_floatactionbutton, {
          style: { "position": "fixed", "left": "42.5%", "bottom": "10%" },
          onClick: $options.onStartRecord,
          msg: "+"
        }, null, 8, ["onClick"]), [
          [vue.vShow, $data.show_float_action_button]
        ]),
        vue.createElementVNode("image", {
          src: "/static/drawing_board.png",
          style: { "position": "fixed", "width": "40px", "height": "40px", "right": "10%", "bottom": "11%" },
          onClick: _cache[1] || (_cache[1] = (...args) => $options.world && $options.world(...args))
        })
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-57280228"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/index.vue"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$f = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  let platform = "other";
  const _sfc_main$e = {
    name: "UniFab",
    emits: ["fabClick", "trigger"],
    props: {
      pattern: {
        type: Object,
        default() {
          return {};
        }
      },
      horizontal: {
        type: String,
        default: "left"
      },
      vertical: {
        type: String,
        default: "bottom"
      },
      direction: {
        type: String,
        default: "horizontal"
      },
      content: {
        type: Array,
        default() {
          return [];
        }
      },
      show: {
        type: Boolean,
        default: false
      },
      popMenu: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        fabShow: false,
        isShow: false,
        isAndroidNvue: platform === "android",
        styles: {
          color: "#3c3e49",
          selectedColor: "#007AFF",
          backgroundColor: "#fff",
          buttonColor: "#007AFF",
          iconColor: "#fff"
        }
      };
    },
    computed: {
      contentWidth(e) {
        return (this.content.length + 1) * 55 + 15 + "px";
      },
      contentWidthMin() {
        return "55px";
      },
      boxWidth() {
        return this.getPosition(3, "horizontal");
      },
      boxHeight() {
        return this.getPosition(3, "vertical");
      },
      leftBottom() {
        return this.getPosition(0, "left", "bottom");
      },
      rightBottom() {
        return this.getPosition(0, "right", "bottom");
      },
      leftTop() {
        return this.getPosition(0, "left", "top");
      },
      rightTop() {
        return this.getPosition(0, "right", "top");
      },
      flexDirectionStart() {
        return this.getPosition(1, "vertical", "top");
      },
      flexDirectionEnd() {
        return this.getPosition(1, "vertical", "bottom");
      },
      horizontalLeft() {
        return this.getPosition(2, "horizontal", "left");
      },
      horizontalRight() {
        return this.getPosition(2, "horizontal", "right");
      }
    },
    watch: {
      pattern: {
        handler(val, oldVal) {
          this.styles = Object.assign({}, this.styles, val);
        },
        deep: true
      }
    },
    created() {
      this.isShow = this.show;
      if (this.top === 0) {
        this.fabShow = true;
      }
      this.styles = Object.assign({}, this.styles, this.pattern);
    },
    methods: {
      _onClick() {
        this.$emit("fabClick");
        if (!this.popMenu) {
          return;
        }
        this.isShow = !this.isShow;
      },
      open() {
        this.isShow = true;
      },
      close() {
        this.isShow = false;
      },
      _onItemClick(index, item) {
        this.$emit("trigger", {
          index,
          item
        });
      },
      getPosition(types, paramA, paramB) {
        if (types === 0) {
          return this.horizontal === paramA && this.vertical === paramB;
        } else if (types === 1) {
          return this.direction === paramA && this.vertical === paramB;
        } else if (types === 2) {
          return this.direction === paramA && this.horizontal === paramB;
        } else {
          return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-cursor-point" }, [
      $props.popMenu && ($options.leftBottom || $options.rightBottom || $options.leftTop || $options.rightTop) && $props.content.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass([{
          "uni-fab--leftBottom": $options.leftBottom,
          "uni-fab--rightBottom": $options.rightBottom,
          "uni-fab--leftTop": $options.leftTop,
          "uni-fab--rightTop": $options.rightTop
        }, "uni-fab"])
      }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass([{
            "uni-fab__content--left": $props.horizontal === "left",
            "uni-fab__content--right": $props.horizontal === "right",
            "uni-fab__content--flexDirection": $props.direction === "vertical",
            "uni-fab__content--flexDirectionStart": $options.flexDirectionStart,
            "uni-fab__content--flexDirectionEnd": $options.flexDirectionEnd,
            "uni-fab__content--other-platform": !$data.isAndroidNvue
          }, "uni-fab__content"]),
          style: vue.normalizeStyle({ width: $options.boxWidth, height: $options.boxHeight, backgroundColor: $data.styles.backgroundColor }),
          elevation: "5"
        }, [
          $options.flexDirectionStart || $options.horizontalLeft ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-fab__item uni-fab__item--first"
          })) : vue.createCommentVNode("v-if", true),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.content, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: vue.normalizeClass([{ "uni-fab__item--active": $data.isShow }, "uni-fab__item"]),
              onClick: ($event) => $options._onItemClick(index, item)
            }, [
              vue.createElementVNode("image", {
                src: item.active ? item.selectedIconPath : item.iconPath,
                class: "uni-fab__item-image",
                mode: "aspectFit"
              }, null, 8, ["src"]),
              vue.createElementVNode("text", {
                class: "uni-fab__item-text",
                style: vue.normalizeStyle({ color: item.active ? $data.styles.selectedColor : $data.styles.color })
              }, vue.toDisplayString(item.text), 5)
            ], 10, ["onClick"]);
          }), 128)),
          $options.flexDirectionEnd || $options.horizontalRight ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-fab__item uni-fab__item--first"
          })) : vue.createCommentVNode("v-if", true)
        ], 6)
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{
          "uni-fab__circle--leftBottom": $options.leftBottom,
          "uni-fab__circle--rightBottom": $options.rightBottom,
          "uni-fab__circle--leftTop": $options.leftTop,
          "uni-fab__circle--rightTop": $options.rightTop,
          "uni-fab__content--other-platform": !$data.isAndroidNvue
        }, "uni-fab__circle uni-fab__plus"]),
        style: vue.normalizeStyle({ "background-color": $data.styles.buttonColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      }, [
        vue.createVNode(_component_uni_icons, {
          class: vue.normalizeClass(["fab-circle-icon", { "uni-fab__plus--active": $data.isShow && $props.content.length > 0 }]),
          type: "plusempty",
          color: $data.styles.iconColor,
          size: "32"
        }, null, 8, ["color", "class"]),
        vue.createCommentVNode(` <view class="fab-circle-v"  :class="{'uni-fab__plus--active': isShow && content.length > 0}"></view>\r
			<view class="fab-circle-h" :class="{'uni-fab__plus--active': isShow  && content.length > 0}"></view> `)
      ], 6)
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-7d5a6316"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-fab/components/uni-fab/uni-fab.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        wtitle: "Hello",
        show_sunny_doll: false,
        show_float_action_button: true,
        show_sunny_doll_grid: true,
        home_start_text: "\u90A3\u5929\u7684\u5FC3\u60C5\u662F\u600E\u4E48\u6837\u7684\u5462",
        sunny_doll_imgs: [
          "../../static/sunny_doll_0.png",
          "../../static/sunny_doll_1.png",
          "../../static/sunny_doll_2.png",
          "../../static/sunny_doll_3.png",
          "../../static/sunny_doll_4.png",
          "../../static/sunny_doll_5.png",
          "../../static/sunny_doll_6.png",
          "../../static/sunny_doll_7.png"
        ],
        fab_pattern: {
          color: "#7A7E83",
          backgroundColor: "#fff",
          selectedColor: "#007AFF",
          buttonColor: "#ffffff",
          iconColor: "#black"
        }
      };
    },
    onLoad() {
    },
    methods: {
      onStartRecord() {
        uni.navigateTo({
          url: "index-note"
        });
      },
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_2);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_3$2);
    const _component_uni_fab = resolveEasycom(vue.resolveDynamicComponent("uni-fab"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content animate__animated animate__fadeIn" }, [
      vue.createVNode(_component_relieve_navigationbar, {
        leftIcon: "../../static/back.png",
        title: "\u91CA\u6000",
        onClickLeft: $options.back
      }, null, 8, ["onClickLeft"]),
      vue.createElementVNode("view", { class: "home" }, [
        vue.createElementVNode("image", {
          class: "home_sun",
          src: "/static/home_sun.png"
        }),
        vue.createElementVNode("text", { class: "home_start_text" }, vue.toDisplayString($data.home_start_text), 1),
        vue.withDirectives(vue.createElementVNode("image", {
          class: "home_sunny_doll",
          src: "/static/home_sunny_doll.png"
        }, null, 512), [
          [vue.vShow, $data.show_sunny_doll]
        ]),
        vue.withDirectives(vue.createVNode(_component_uni_grid, {
          column: 3,
          showBorder: false,
          borderColor: "white"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sunny_doll_imgs, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_uni_grid_item, { index }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "grid-item-box-row" }, [
                    vue.createElementVNode("image", {
                      class: "grid-item-image",
                      src: item
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 2
              }, 1032, ["index"]);
            }), 256))
          ]),
          _: 1
        }, 512), [
          [vue.vShow, $data.show_sunny_doll_grid]
        ]),
        vue.createVNode(_component_uni_fab, {
          horizontal: "right",
          vertical: "bottom",
          pattern: $data.fab_pattern,
          onFabClick: $options.onStartRecord
        }, null, 8, ["pattern", "onFabClick"])
      ])
    ]);
  }
  var PagesIndexIndexNext = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-3d4e5764"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/index-next.vue"]]);
  const _sfc_main$c = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-f9a87a8e"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$b = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  size: "20"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_uni_icons, {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  size: "22"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-6bda1a90"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {
      onStartRecord() {
        uni.navigateTo({
          url: "index"
        });
      },
      back() {
        uni.redirectTo({
          url: "index-next"
        });
      },
      submit() {
        uni.showModal({
          title: "^\u2006_\u2006^",
          content: "\u63D0\u4EA4\u6210\u529F\uFF01",
          showCancel: false,
          cancelText: "",
          confirmText: "OK",
          success: (res) => {
            uni.navigateTo({
              url: "index"
            });
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0);
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content animate__animated animate__fadeIn" }, [
      vue.createVNode(_component_uni_nav_bar, {
        onClickLeft: _cache[0] || (_cache[0] = ($event) => $options.onStartRecord())
      }),
      vue.createVNode(_component_relieve_navigationbar, {
        leftIcon: "../../static/back.png",
        onClickLeft: _cache[1] || (_cache[1] = ($event) => $options.back()),
        onClickRight: $options.submit,
        rightIcon: "../../static/navigationbar_address.png",
        title: "\u5468\u4E09"
      }, null, 8, ["onClickRight"]),
      vue.createElementVNode("view", { class: "home" }, [
        vue.createElementVNode("textarea", { placeholder: "\u8BF4\u8BF4\u4ECA\u5929\u53D1\u751F\u7684\u4E8B\u60C5\u5427" })
      ])
    ]);
  }
  var PagesIndexIndexNote = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-46a5e4e3"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/index-note.vue"]]);
  const _sfc_main$9 = {
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" <relieve-navigationbar-my></relieve-navigationbar-my> "),
      vue.createVNode(_component_relieve_navigationbar, {
        onClickLeft: $options.back,
        leftIcon: "../../static/back.png",
        title: "\u6211\u7684"
      }, null, 8, ["onClickLeft"]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("image", {
          class: "smile",
          src: "/static/smile1.png"
        }),
        vue.createElementVNode("text", { class: "text_name" }, "DullFan"),
        vue.createElementVNode("text", { class: "text_input" }, "\u5E0C\u671B\u660E\u5929\u8FC7\u7684\u66F4\u597D")
      ]),
      vue.createElementVNode("text", { class: "tab" }, "\u4F5C\u54C1"),
      vue.createElementVNode("view", { class: "underline" }),
      vue.createElementVNode("view", { class: "view_card" }, [
        vue.createElementVNode("image", {
          src: "/static/doll.png",
          class: "image_setting"
        }),
        vue.createElementVNode("image", {
          src: "/static/hear_image.png",
          class: "image_setting1"
        }),
        vue.createElementVNode("text", { style: { "position": "absolute", "margin-top": "77%", "margin-left": "28%", "float": "right" } }, "like you"),
        vue.createElementVNode("image", {
          src: "/static/red_love.png",
          class: "image_setting2"
        })
      ])
    ]);
  }
  var PagesIndexPerson = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-90c161aa"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/person.vue"]]);
  const _sfc_main$8 = {
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_relieve_navigationbar, {
        leftIcon: "../../static/back.png",
        onClickLeft: $options.back,
        title: "\u6211\u7684"
      }, null, 8, ["onClickLeft"]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("image", {
          class: "smile",
          src: "/static/smile1.png"
        }),
        vue.createElementVNode("text", { class: "text_name" }, "DullFan"),
        vue.createElementVNode("text", { class: "text_input" }, "\u5E0C\u671B\u660E\u5929\u8FC7\u7684\u66F4\u597D")
      ]),
      vue.createElementVNode("view", { class: "view_card" }, [
        vue.createElementVNode("text", { class: "text_password" }, "\u5BC6\u7801"),
        vue.createElementVNode("image", {
          src: "/static/Switch.png",
          class: "image_setting"
        }),
        vue.createElementVNode("view", { class: "underline" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "50px" }
        }, "\u901A\u77E5"),
        vue.createElementVNode("image", {
          src: "/static/Switch.png",
          class: "image_setting",
          style: { "top": "50px" }
        })
      ]),
      vue.createElementVNode("view", {
        class: "view_card1",
        style: { "margin-top": "130px" }
      }, [
        vue.createElementVNode("text", { class: "text_password" }, "\u6211\u7684\u6536\u85CF"),
        vue.createElementVNode("image", {
          src: "/static/file.png",
          class: "image_setting1"
        }),
        vue.createElementVNode("view", { class: "underline" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "52px" }
        }, "\u6211\u7684\u559C\u6B22"),
        vue.createElementVNode("image", {
          src: "/static/love.png",
          class: "image_setting1",
          style: { "top": "50px" }
        }),
        vue.createElementVNode("view", { class: "underline1" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "102px" }
        }, "\u56FE\u8868\u89C6\u56FE"),
        vue.createElementVNode("image", {
          src: "/static/view.png",
          class: "image_setting1",
          style: { "top": "100px" }
        })
      ]),
      vue.createElementVNode("view", {
        class: "view_card1",
        style: { "margin-top": "310px" }
      }, [
        vue.createElementVNode("text", { class: "text_password" }, "\u504F\u597D\u8BBE\u7F6E"),
        vue.createElementVNode("image", {
          src: "/static/set_up.png",
          class: "image_setting1"
        }),
        vue.createElementVNode("view", { class: "underline" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "52px" }
        }, "\u6837\u5F0F\u5E93"),
        vue.createElementVNode("image", {
          src: "/static/ghost.png",
          class: "image_setting1",
          style: { "top": "50px" }
        }),
        vue.createElementVNode("view", { class: "underline1" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "102px" }
        }, "\u5BFC\u51FA\u6570\u636E"),
        vue.createElementVNode("image", {
          src: "/static/could.png",
          class: "image_setting1",
          style: { "top": "100px" }
        }),
        vue.createElementVNode("image")
      ]),
      vue.createElementVNode("view", {
        class: "view_card",
        style: { "top": "720px" }
      }, [
        vue.createElementVNode("text", { class: "text_password" }, "\u9F13\u52B1\u548C\u5EFA\u8BAE"),
        vue.createElementVNode("image", {
          src: "/static/good.png",
          class: "image_setting1"
        }),
        vue.createElementVNode("view", { class: "underline" }),
        vue.createElementVNode("text", {
          class: "text_password",
          style: { "top": "50px" }
        }, "\u66F4\u597D\u7684\u4F7F\u7528"),
        vue.createElementVNode("image", {
          src: "/static/doubt.png",
          class: "image_setting1",
          style: { "top": "50px" }
        })
      ]),
      vue.createElementVNode("view", { class: "view_card_back" }, [
        vue.createElementVNode("text", { style: { "font-size": "20px" } }, "\u9000\u51FA")
      ])
    ]);
  }
  var PagesIndexSetting = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-50ffdcea"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/setting.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "home" }, [
        vue.createVNode(_component_relieve_navigationbar, {
          leftIcon: "../../static/back.png",
          title: "\u72EC\u4EAB",
          rightIcon: ""
        })
      ]),
      vue.createElementVNode("view", {
        class: "switch",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.sentence && _ctx.sentence(...args))
      }, [
        vue.createElementVNode("text", { class: "text_input" }, "\u53E5"),
        vue.createElementVNode("image", {
          src: "/static/conversion.png",
          class: "image_setting2"
        })
      ]),
      vue.createElementVNode("view", { class: "center music card" }, [
        vue.createElementVNode("text", null, "\xA0"),
        vue.createElementVNode("text", null, "\xA0"),
        vue.createElementVNode("text", { style: { "top": "15px" } }, "\u4E00\u4E2A\u4EBA\u5C31\u662F\u4E00\u7247\u8352\u539F\uFF0C"),
        vue.createElementVNode("text", null, "\u5076\u5C14\u6709\u623F\u5BA2\uFF0C\u6709\u96F7\u58F0\uFF0C\u6709\u6625\u6696\u82B1\u5F00"),
        vue.createElementVNode("text", null, "\xA0"),
        vue.createElementVNode("text", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u300A\u6447\u6447\u6643\u6643\u7684\u4EBA\u95F4\u300B"),
        vue.createElementVNode("text", null, "\xA0"),
        vue.createElementVNode("text", { style: { "font-size": "15px", "color": "#A0A0A0" } }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u2014\u2014\u4F59\u79C0\u534E")
      ])
    ], 64);
  }
  var PagesIndexSentence = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/sentence.vue"]]);
  const _sfc_main$6 = {
    methods: {
      sentence() {
        uni.navigateTo({
          url: "sentence"
        });
      },
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_relieve_navigationbar, {
          onClickLeft: $options.back,
          leftIcon: "../../static/back.png",
          title: "\u72EC\u4EAB"
        }, null, 8, ["onClickLeft"])
      ]),
      vue.createElementVNode("view", { class: "home" }, [
        vue.createCommentVNode(' <view class="switch" @click="sentence">\r\n			<text class="text_input">\u97F3</text>\r\n			<image src="../../static/conversion.png" class="image_setting2"></image>\r\n		</view> '),
        vue.createElementVNode("image", {
          src: "/static/music.png",
          class: "center"
        }),
        vue.createElementVNode("view", {
          class: "center",
          style: { "margin-top": "2rem", "align-items": "center", "top": "500px", "height": "80px" }
        }, [
          vue.createElementVNode("text", {
            class: "text_center",
            style: { "font-size": "10px", "color": "#A0A0A0" }
          }, "00:12/02:55"),
          vue.createElementVNode("text", {
            class: "text_center",
            style: { "font-size": "20px", "top": "20px" }
          }, "Death bed"),
          vue.createElementVNode("text", {
            class: "text_center",
            style: { "font-size": "10px", "top": "50px", "color": "#A0A0A0" }
          }, "powfu ft (Santamonika)")
        ]),
        vue.createElementVNode("view", { class: "center1" }, [
          vue.createElementVNode("view", { class: "radio" }, [
            vue.createElementVNode("image", {
              src: "/static/share2.png",
              class: "image_setting1"
            })
          ]),
          vue.createElementVNode("view", { class: "radio" }, [
            vue.createElementVNode("image", {
              src: "/static/Vector.png",
              class: "image_setting1"
            })
          ]),
          vue.createElementVNode("view", { class: "radio" }, [
            vue.createElementVNode("image", {
              src: "/static/black_love.png",
              class: "image_setting1"
            })
          ])
        ])
      ])
    ], 64);
  }
  var PagesIndexMusic = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/music.vue"]]);
  const _sfc_main$5 = {
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_relieve_navigationbar, {
        onClickLeft: $options.back,
        leftIcon: "../../static/back.png",
        title: "\u6211\u7684"
      }, null, 8, ["onClickLeft"]),
      vue.createElementVNode("view", {
        class: "view_card",
        style: { "margin-left": "5%", "width": "90%", "height": "120px", "margin-top": "120px" }
      }, [
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll7.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u5F00\u5FC3")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll3.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u4F24\u5FC3")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll1.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u5FE7\u8651")
        ])
      ]),
      vue.createElementVNode("view", {
        class: "view_card",
        style: { "margin-left": "5%", "width": "90%", "height": "120px", "margin-top": "20px" }
      }, [
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll2.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u5BB3\u7F9E")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll9.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u751F\u6C14")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll8.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u53D7\u6C14")
        ])
      ]),
      vue.createElementVNode("view", {
        class: "view_card",
        style: { "margin-left": "5%", "width": "90%", "height": "120px", "margin-top": "20px" }
      }, [
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll5.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u6EE1\u8DB3")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: "view"
        }, [
          vue.createElementVNode("image", {
            src: "/static/doll6.png",
            style: { "width": "60%", "height": "60%" }
          }),
          vue.createElementVNode("text", null, " \u68D2\uFF01")
        ]),
        vue.createElementVNode("view", { style: { "width": "10%", "height": "100%" } }),
        vue.createElementVNode("view", {
          style: { "width": "100%", "height": "100%" },
          class: ""
        })
      ]),
      vue.createCommentVNode(' 	<view class="view_card">\r\n			<image src="../../static/doll.png" class="image_setting"></image>\r\n			<text style="position: absolute;\r\n		margin-top: 77%;\r\n		margin-left: 28%;\r\n		float: right;">like you</text>\r\n		</view> ')
    ], 64);
  }
  var PagesIndexDollManage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/doll-manage.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        sunny_doll_imgs: [
          "../../static/doll1.png",
          "../../static/doll2.png",
          "../../static/doll3.png",
          "../../static/doll4.png",
          "../../static/doll5.png",
          "../../static/doll6.png",
          "../../static/doll7.png",
          "../../static/doll8.png",
          "../../static/doll9.png"
        ]
      };
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      },
      search() {
        uni.navigateTo({
          url: "search"
        });
      },
      onClick1() {
      },
      onClick2() {
        uni.navigateTo({
          url: "person"
        });
      },
      onClick3() {
        uni.navigateTo({
          url: "world_details",
          success: (res) => {
            formatAppLog("log", "at pages/index/world.vue:82", "success");
          },
          fail: (e) => {
            formatAppLog("log", "at pages/index/world.vue:85", e);
          },
          complete: (e) => {
            formatAppLog("log", "at pages/index/world.vue:88", e);
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_2);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_3$2);
    const _component_relieve_floatactionbutton = resolveEasycom(vue.resolveDynamicComponent("relieve-floatactionbutton"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_relieve_navigationbar, {
        onClickLeft: $options.back,
        onClickRight: $options.search,
        leftIcon: "../../static/back.png",
        rightIcon: "../../static/select.png",
        title: "\u6211\u7684"
      }, null, 8, ["onClickLeft", "onClickRight"]),
      vue.createVNode(_component_uni_grid, {
        column: "2",
        showBorder: false,
        borderColor: "white"
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sunny_doll_imgs, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_uni_grid_item, {
              index,
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick3())
            }, {
              default: vue.withCtx(() => [
                vue.createCommentVNode(' <view class="grid-item-box-row" @click="onClick3"> '),
                vue.createElementVNode("view", { class: "grid-item-box-row" }, [
                  vue.createElementVNode("image", {
                    class: "grid-item-image",
                    src: item
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "grid-item-box_layout" }, [
                    vue.createElementVNode("image", {
                      class: "grid-item-image2",
                      src: "/static/smile1.png"
                    }),
                    vue.createElementVNode("text", { class: "grid-item-box-text" }, "\u5E78\u8FD0\u7528\u623701"),
                    vue.createElementVNode("image", {
                      class: "grid-item-image2",
                      src: "/static/red_love.png"
                    })
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["index"]);
          }), 256))
        ]),
        _: 1
      }),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_relieve_floatactionbutton, {
          msg: "#",
          textStyle: "font-size:30px",
          style: { "position": "fixed", "right": "5.5%", "bottom": "5%" },
          onClick: $options.onClick1
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_relieve_floatactionbutton, {
          msg: "\u{1F464}",
          textStyle: "font-size:25px",
          style: { "position": "fixed", "right": "5.5%", "bottom": "15%" },
          onClick: $options.onClick2
        }, null, 8, ["onClick"])
      ])
    ]);
  }
  var PagesIndexWorld = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/world.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {
      onClick1() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createVNode(_component_relieve_navigationbar, {
        leftIcon: "../../static/back.png",
        title: "\u5A03\u5A03\u8BE6\u60C5",
        onClickLeft: _cache[0] || (_cache[0] = ($event) => $options.onClick1())
      }),
      vue.createElementVNode("view", { class: "grid-item-box-row" }, [
        vue.createElementVNode("view", { class: "grid-item-box_layout" }, [
          vue.createElementVNode("image", {
            class: "grid-item-image2",
            src: "/static/smile1.png"
          }),
          vue.createElementVNode("view", { class: "column-layout" }, [
            vue.createElementVNode("text", { class: "text01" }, "\u5E78\u8FD0\u7528\u623701"),
            vue.createElementVNode("text", { class: "text02" }, "36\u5206\u949F\u524D")
          ])
        ]),
        vue.createElementVNode("image", { src: "/static/doll2.png" }),
        vue.createElementVNode("text", { class: "text03" }, "\u6BCF\u6B21\u770B\u5230\u81EA\u5DF1\u521B\u9020\u7684\u6674\u5929\u5A03\u5A03\u90A3\u4E48\u591A\u4EBA\u559C\u6B22,\u6211\u7684\u5FC3\u60C5\u4EE5\u4E0B\u5B50\u5C31\u597D\u4E86"),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "bottom-layout" }, [
            vue.createElementVNode("view", { class: "bottom-layout2" }, [
              vue.createElementVNode("image", {
                src: "/static/download.png",
                class: "grid-item-image3"
              })
            ]),
            vue.createElementVNode("view", { class: "bottom-layout2" }, [
              vue.createElementVNode("image", {
                src: "/static/share.png",
                class: "grid-item-image3"
              })
            ]),
            vue.createElementVNode("view", { class: "bottom-layout2" }, [
              vue.createElementVNode("image", {
                src: "/static/red_love.png",
                class: "grid-item-image3"
              })
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesIndexWorld_details = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-6fbac5a2"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/world_details.vue"]]);
  const isArray = Array.isArray;
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  var zhHans = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  var zhHant = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$2 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ], true)
        ]),
        $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          "confirm-type": "search",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
          [vue.vModelText, $data.searchVal]
        ]) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, vue.toDisplayString($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, vue.toDisplayString($options.cancelTextI18n), 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-180dbe05"], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        sunny_doll_imgs: [
          "../../static/doll1.png",
          "../../static/doll2.png",
          "../../static/doll3.png",
          "../../static/doll4.png"
        ]
      };
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_relieve_navigationbar = resolveEasycom(vue.resolveDynamicComponent("relieve-navigationbar"), __easycom_0$2);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1);
    const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_2);
    const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_relieve_navigationbar, {
        onClickLeft: $options.back,
        leftIcon: "../../static/back.png",
        title: "\u6211\u7684"
      }, null, 8, ["onClickLeft"]),
      vue.createElementVNode("view", { class: "grid-item-box-row" }, [
        vue.createCommentVNode(" \u57FA\u672C\u7528\u6CD5 "),
        vue.createVNode(_component_uni_search_bar, { placeholder: "\u641C\u7D22\u4F60\u60F3\u8981\u7684\u8868\u60C5\u5427" }),
        vue.createElementVNode("view", { class: "layoutwwww" }, [
          vue.createElementVNode("text", { class: "top-text" }, "\u70ED\u95E8\u63A8\u8350")
        ]),
        vue.createVNode(_component_uni_grid, {
          column: "3",
          showBorder: false,
          borderColor: "white"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.sunny_doll_imgs, (item, index) => {
              return vue.openBlock(), vue.createBlock(_component_uni_grid_item, { index }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "grid-item-box-row2" }, [
                    vue.createElementVNode("image", {
                      class: "grid-item-image",
                      src: item
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "grid-item-box_layout" })
                  ])
                ]),
                _: 2
              }, 1032, ["index"]);
            }), 256))
          ]),
          _: 1
        })
      ])
    ]);
  }
  var PagesIndexSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/pages/index/search.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/index-next", PagesIndexIndexNext);
  __definePage("pages/index/index-note", PagesIndexIndexNote);
  __definePage("pages/index/person", PagesIndexPerson);
  __definePage("pages/index/setting", PagesIndexSetting);
  __definePage("pages/index/sentence", PagesIndexSentence);
  __definePage("pages/index/music", PagesIndexMusic);
  __definePage("pages/index/doll-manage", PagesIndexDollManage);
  __definePage("pages/index/world", PagesIndexWorld);
  __definePage("pages/index/world_details", PagesIndexWorld_details);
  __definePage("pages/index/search", PagesIndexSearch);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/xiaolu/Desktop/Projects/uni-app/Relieve/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
