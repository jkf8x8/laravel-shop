(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'baseform',
  data: function data() {
    return {
      options: [{
        value: 'guangdong',
        label: '广东省',
        children: [{
          value: 'guangzhou',
          label: '广州市',
          children: [{
            value: 'tianhe',
            label: '天河区'
          }, {
            value: 'haizhu',
            label: '海珠区'
          }]
        }, {
          value: 'dongguan',
          label: '东莞市',
          children: [{
            value: 'changan',
            label: '长安镇'
          }, {
            value: 'humen',
            label: '虎门镇'
          }]
        }]
      }, {
        value: 'hunan',
        label: '湖南省',
        children: [{
          value: 'changsha',
          label: '长沙市',
          children: [{
            value: 'yuelu',
            label: '岳麓区'
          }]
        }]
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: ['步步高'],
        resource: '小天才',
        desc: '',
        options: []
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$message.success('提交成功！');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "crumbs" },
      [
        _c(
          "el-breadcrumb",
          { attrs: { separator: "/" } },
          [
            _c("el-breadcrumb-item", [
              _c("i", { staticClass: "el-icon-lx-calendar" }),
              _vm._v(" 表单")
            ]),
            _vm._v(" "),
            _c("el-breadcrumb-item", [_vm._v("基本表单")])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "form-box" },
        [
          _c(
            "el-form",
            { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "表单名称" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "选择器" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.form.region,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "region", $$v)
                        },
                        expression: "form.region"
                      }
                    },
                    [
                      _c("el-option", {
                        key: "bbk",
                        attrs: { label: "步步高", value: "bbk" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "xtc",
                        attrs: { label: "小天才", value: "xtc" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "imoo",
                        attrs: { label: "imoo", value: "imoo" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "日期时间" } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { type: "date", placeholder: "选择日期" },
                        model: {
                          value: _vm.form.date1,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date1", $$v)
                          },
                          expression: "form.date1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                    _vm._v("-")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-time-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { placeholder: "选择时间" },
                        model: {
                          value: _vm.form.date2,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date2", $$v)
                          },
                          expression: "form.date2"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "城市级联" } },
                [
                  _c("el-cascader", {
                    attrs: { options: _vm.options },
                    model: {
                      value: _vm.form.options,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "options", $$v)
                      },
                      expression: "form.options"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "选择开关" } },
                [
                  _c("el-switch", {
                    model: {
                      value: _vm.form.delivery,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "delivery", $$v)
                      },
                      expression: "form.delivery"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "多选框" } },
                [
                  _c(
                    "el-checkbox-group",
                    {
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    },
                    [
                      _c("el-checkbox", {
                        attrs: { label: "步步高", name: "type" }
                      }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "小天才", name: "type" }
                      }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "imoo", name: "type" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "单选框" } },
                [
                  _c(
                    "el-radio-group",
                    {
                      model: {
                        value: _vm.form.resource,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "resource", $$v)
                        },
                        expression: "form.resource"
                      }
                    },
                    [
                      _c("el-radio", { attrs: { label: "步步高" } }),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "小天才" } }),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "imoo" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "文本框" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: "5" },
                    model: {
                      value: _vm.form.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "desc", $$v)
                      },
                      expression: "form.desc"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                    [_vm._v("表单提交")]
                  ),
                  _vm._v(" "),
                  _c("el-button", [_vm._v("取消")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/page/BaseForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/page/BaseForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseForm.vue?vue&type=template&id=ce4a17cc& */ "./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc&");
/* harmony import */ var _BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseForm.vue?vue&type=script&lang=js& */ "./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/BaseForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/BaseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseForm.vue?vue&type=template&id=ce4a17cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/BaseForm.vue?vue&type=template&id=ce4a17cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseForm_vue_vue_type_template_id_ce4a17cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);