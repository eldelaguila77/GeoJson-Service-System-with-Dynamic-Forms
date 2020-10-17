(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n    <img src=\"assets/img/logo-map.png\" width=\"30\" height=\"30\" alt=\"\">\r\n    Sistema de servicios de GeoJSON para la captura de datos\r\n  </a>\r\n  <!--<button type=\"button\" class=\"btn btn-info\" \r\n        (click)=\"openModal(template)\">Create template modal</button>-->\r\n  <div [hidden]=\"!user\" class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div [hidden]=\"!user\" class=\"navbar-nav\">\r\n      <a class=\"nav-link active\" [routerLink]=\"['/home']\">| Inicio <span class=\"sr-only\">(current)</span></a>\r\n      <a class=\"nav-link\" [routerLink]=\"['/form-creator']\" tabindex=\"-1\">| Crear plantilla</a>\r\n    </div>\r\n  </div>\r\n  <button [hidden]=\"!user\" type=\"button\" class=\"btn btn-danger\" \r\n        (click)=\"logout()\">Cerrar sesión</button>\r\n</nav>\r\n\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" \r\n                aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        This is a modal.\r\n    </div>\r\n</ng-template>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-creator/form-creator.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-creator/form-creator.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\"></div>\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"nametemplate\">Nombre plantilla</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nametemplate\" aria-describedby=\"spanNameTemplate\" name=\"nameTemplate\" [(ngModel)]=\"nameTemplate\">\r\n            <small [hidden]=\"nameTemplate\" id=\"spanNameTemplate\" class=\"form-text text-muted\">Falta nombre de plantilla</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr/>\r\n      <h3>Agregar un nuevo campo</h3>\r\n      <hr/>\r\n      <div [hidden]=\"!alertFlag\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <strong>Plantilla creada.</strong>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form #formCreatorForm=\"ngForm\" (ngSubmit)=\"addField(); defaultOptSelected = null;\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fieldType\">Tipo de campo</label>\r\n          <select class=\"form-control\" id=\"fieldType\" [(ngModel)]=\"formCreator.fieldType\" name=\"fieldType\" required\r\n            ngControl=\"fieldType\">\r\n            <option *ngFor=\"let type of typeArray\" [value]=\"type\">{{type}}</option>\r\n          </select>\r\n          <div class=\"row\" style=\"padding-top: 10px;\">\r\n            <div class=\"col-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <button type=\"button\" class=\"button lg-button\"\r\n                    *ngIf=\"formCreator.fieldType === 'Select' || formCreator.fieldType === 'Radio' || formCreator.fieldType === 'Checkbox'\"\r\n                    type=\"button\" class=\"btn btn-info\" (click)=\"openModal(template)\">Agregar Opciones</button>\r\n                </div>\r\n                <div class=\"col\" *ngIf=\"optionsDropdown.length > 0; else tableCheck\">\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">#</th>\r\n                        <th scope=\"col\">Opción</th>\r\n                        <th scope=\"col\">Valor</th>\r\n                        <th scope=\"col-6\">Opción por defecto</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of optionsDropdown; let i = index\">\r\n                        <th scope=\"row\" style=\"height: 15px;\">{{i+1}}</th>\r\n                        <td>{{item.label}}</td>\r\n                        <td>{{item.value}}</td>\r\n                        <td>\r\n                          <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                              <input *ngIf=\"item.default === 'true'\" type=\"checkbox\" disabled=\"true\" checked>\r\n                              <input *ngIf=\"item.default === 'false' || item.default === undefined\" type=\"checkbox\"\r\n                                disabled=\"true\">\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          <button type=\"button\" class=\"btn btn-danger\" (click)=\"delRow(item)\">\r\n                            <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\"\r\n                              xmlns=\"http://www.w3.org/2000/svg\">\r\n                              <path\r\n                                d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\r\n                              <path fill-rule=\"evenodd\"\r\n                                d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\r\n                            </svg>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n\r\n                <ng-template #tableCheck>\r\n                  <div class=\"col\" *ngIf=\"optsCheckbox.length > 0\">\r\n                    <table class=\"table table-striped\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">#</th>\r\n                          <th scope=\"col\">Tipo</th>\r\n                          <th scope=\"col\">Opción</th>\r\n                          <th scope=\"col\">Valor</th>\r\n                          <th scope=\"col-6\">Preselección</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of optsCheckbox; let i = index\">\r\n                          <th scope=\"row\" style=\"height: 15px;\">{{i+1}}</th>\r\n                          <td>{{item.typeOpt}}</td>\r\n                          <td>{{item.label}}</td>\r\n                          <td>{{item.val}}</td>\r\n                          <td>\r\n                            <span *ngIf=\"item.typeOpt === 'BASICO' || item.typeOpt === 'BOOLEAN'\">N/A</span>\r\n                            <span *ngIf=\"item.typeOpt === 'PRESELECCION'\">\r\n                              <span *ngIf=\"item.preselected === 'true'\">Si</span>\r\n                              <span *ngIf=\"item.preselected === 'false'\">No</span>\r\n                            </span>\r\n                          </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"delRow(item)\">\r\n                              <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path\r\n                                  d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\r\n                                <path fill-rule=\"evenodd\"\r\n                                  d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\r\n                              </svg>\r\n                            </button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"formCreator.fieldType !== 'Radio' && formCreator.fieldType !== 'Checkbox'\">\r\n          <label for=\"fieldLabel\">Nombre de etiqueta</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldLabel\" [(ngModel)]=\"formCreator.fieldLabel\" name=\"fieldLabel\"\r\n            required ngControl=\"fieldLabel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"fieldName\">Nombre del campo</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldName\" [(ngModel)]=\"formCreator.fieldName\" name=\"fieldName\"\r\n            required ngControl=\"fieldName\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"formCreator.fieldType !== 'Radio' && formCreator.fieldType !== 'Checkbox'\">\r\n          <label for=\"fieldPlaceholder\">Placeholder</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldPlaceholder\" [(ngModel)]=\"formCreator.fieldPlaceholder\"\r\n            name=\"fieldPlaceholder\" required ngControl=\"fieldPlaceholder\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"formCreator.fieldType !== 'Select' && formCreator.fieldType !== 'Radio' && formCreator.fieldType !== 'Checkbox'\r\n        && formCreator.fieldType !== 'File'\">\r\n          <label for=\"fieldDefaultValue\">Valor por defecto</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldDefaultValue\" [(ngModel)]=\"formCreator.fieldDefaultValue\"\r\n            name=\"fieldDefaultValue\" ngControl=\"fieldDefaultValue\">\r\n        </div>\r\n        <fieldset class=\"form-group\" *ngIf=\"formCreator.fieldType !== 'Radio'  && formCreator.fieldType !== 'Checkbox'\">\r\n          <div class=\"row\">\r\n            <legend class=\"col-form-label col-sm pt-0\">¿Requerido?</legend>\r\n            <br />\r\n            <div class=\"col-sm\">\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"requiredTrue\" value=\"true\"\r\n                  [(ngModel)]=\"formCreator.fieldRequired\" name=\"fieldRequired\" required ngControl=\"fieldRequired\">\r\n                <label class=\"form-check-label\" for=\"requiredTrue\">\r\n                  Sí\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"requiredFalse\" value=\"false\"\r\n                  [(ngModel)]=\"formCreator.fieldRequired\" name=\"fieldRequired\" required ngControl=\"fieldRequired\">\r\n                <label class=\"form-check-label\" for=\"requiredFalse\">\r\n                  No\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        <button type=\"submit\" [disabled]=\"!formCreatorForm.valid\" class=\"btn btn-primary btn-lg\">Agregar campo</button>\r\n      </form>\r\n      \r\n    </div>\r\n    <div class=\"col-sm\"></div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row\" [hidden]=\"!form?.length\">\r\n    <div class=\"col-sm col-md col-lg-3\"></div>\r\n    <div class=\"col-sm col-md col-lg-6\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Nombre</th>\r\n            <th scope=\"col\">Tipo</th>\r\n            <th scope=\"col\">Remover</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of form; let i = index\">\r\n            <th scope=\"row\">{{i+1}}</th>\r\n            <td>{{item.fieldName}}</td>\r\n            <td>{{item.fieldType}}</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-danger\">\r\n                <svg width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" class=\"bi bi-trash\" fill=\"currentColor\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path\r\n                    d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\" />\r\n                  <path fill-rule=\"evenodd\"\r\n                    d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\" />\r\n                </svg>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-sm col-md col-lg-3\"></div>\r\n  </div>\r\n  <div class=\"row\" [hidden]=\"!form?.length\" style=\"margin-bottom: 15%;\">\r\n    <div class=\"col-sm col-md col-lg-4\">\r\n      <button type=\"button\" class=\"btn btn-info btn-lg\" [disabled]=\"!nameTemplate\" (click)=\"downloadTemplate()\">Descargar plantilla</button>\r\n    </div>\r\n    <div class=\"col-sm col-md col-lg-4\">\r\n      <button type=\"button\" class=\"btn btn-info btn-lg\" [disabled]=\"!nameTemplate\" (click)=\"sendToFirebase()\">Enviar a firebase</button>\r\n    </div>\r\n    <div class=\"col-sm col-md col-lg-4\">\r\n      <button type=\"button\" class=\"btn btn-info btn-lg\" [disabled]=\"!nameTemplate\" (click)=\"sendToFirebase(); downloadTemplate() \">Enviar y descargar</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Agregar Opción</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"formCreator.fieldType === 'Select' || formCreator.fieldType === 'Radio'; else checkbox\">\r\n    <div class=\"modal-body\">\r\n      <form [formGroup]=\"formDropdown\">\r\n        <div class=\"form-group\">\r\n          <label for=\"fieldLabel\">Opción</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldLabel\" formControlName=\"option\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"fieldLabel\">Valor</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"fieldLabel\" formControlName=\"val\">\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"defaultOptSelected === null || defaultOptSelected === 'false'; else message\">\r\n          <div class=\"col-12\">\r\n            <legend class=\"col-form-label\">¿Convertir a valor seleccionado por defecto?</legend>\r\n            <div class=\"row\" style=\"padding-left: 16px;\">\r\n              <div class=\"form-check\" style=\"padding-right: 10px;\">\r\n                <input [disabled]=\"defaultOptSelected === 'true'\" class=\"form-check-input\" type=\"radio\"\r\n                  name=\"defaultOpt\" value=\"{{true}}\" formControlName=\"defaultOpt\">\r\n                <label class=\"form-check-label\" for=\"requiredTrue\">Sí</label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input [disabled]=\"defaultOptSelected === 'true'\" class=\"form-check-input\" type=\"radio\"\r\n                  name=\"defaultOpt\" value=\"{{false}}\" formControlName=\"defaultOpt\">\r\n                <label class=\"form-check-label\" for=\"requiredFalse\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #message>\r\n          <p>Ya existe una opción seleccionada como valor por defecto</p>\r\n        </ng-template>\r\n      </form>\r\n      <div *ngIf=\"alert\" class=\"alert alert-danger\" role=\"alert\">\r\n        El nombre o valor de la opcion ya existe, verifique!\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #checkbox>\r\n    <div class=\"modal-body\" [formGroup]=\"formCheck\">\r\n      <div class=\"form-group\">\r\n        <label>Tipo de campo</label>\r\n        <select class=\"form-control\" id=\"fieldType\" formControlName=\"type\" (change)=\"changeOpt()\">\r\n          <option *ngFor=\"let type of optsCheckDrop\" [value]=\"type.value\">{{type.label}}</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"fieldLabel\">Opción</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"opt\">\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"formCheck.controls.type.value !== 'BOOLEAN'\">\r\n        <label for=\"fieldLabel\">Valor</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"value\">\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"formCheck.controls.type.value === 'PRESELECCION'\">\r\n        <div class=\"col-12\">\r\n          <legend class=\"col-form-label\">¿Convertir a valor preseleccionado?</legend>\r\n          <div class=\"row\" style=\"padding-left: 16px;\">\r\n            <div class=\"form-check\" style=\"padding-right: 10px;\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"preselectedValue\" value=\"{{true}}\"\r\n                formControlName=\"preselectedValue\">\r\n              <label class=\"form-check-label\" for=\"requiredTrue\">Sí</label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"preselectedValue\" value=\"{{false}}\"\r\n                formControlName=\"preselectedValue\">\r\n              <label class=\"form-check-label\" for=\"requiredFalse\">No</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-template>\r\n\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"addOption()\"\r\n      [disabled]=\"!formDropdown.valid && !formCheck.valid\">Agregar</button>\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <h3>Cargar plantilla</h3>\n\n    <div class=\"row\" id=\"rowUploadFile\">\n        <div class=\"card\" style=\"width: 80%; margin: 2em auto;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Suba su formato</h5>\n            <p class=\"card-text\">Al subir su plantilla de formulario se le cargará y podrá rellenarlo.</p>\n            <form>\n              <div class=\"form-group\">\n                <label for=\"fileJsonInput\">Subir formulario</label>\n                <input type=\"file\" class=\"form-control-file\" id=\"fileJsonInput\">\n              </div>\n            </form>\n            <button class=\"btn btn-primary\" (click)=\"fileJsonInput()\">Ingresar</button>\n          </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <h3 style=\"text-align: center;\">Tomar una plantilla de Firebase</h3>\n    <div class=\"row\">\n        <div *ngFor=\"let template of templates\" class=\"col-sm col-sm-4 col-md-4 col-lg-4\" style=\"margin-bottom: 1em;\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                {{template.nameTemplate}}\n                </div>\n                <div class=\"card-body\">\n                    <p class=\"card-text\">Creada el: {{template.created_at?.seconds * 1000 | date: 'dd-MM-yyyy'}}</p>\n                    <button class=\"btn btn-primary\" (click)=\"openTemplateFb(template.formToSend, template.nameTemplate)\">Ingresar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/load-form/load-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/load-form/load-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\" [hidden]=\"!flag\">\r\n    <div class=\"spinner-grow text-danger\" role=\"status\" [hidden]=\"!flag\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n    <div class=\"spinner-grow text-warning\" role=\"status\" [hidden]=\"!flag\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n    <div class=\"spinner-grow text-info\" role=\"status\" [hidden]=\"!flag\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div [hidden]=\"!alertFlag\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Plantilla creada.</strong>\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 2em;\" [hidden]=\"flag\">\r\n    <div class=\"col-sm col-sm-2 col-md-2 col-lg-2\"></div>\r\n    <div class=\"col-sm col-sm-8 col-md-8 col-lg-8\">\r\n      <h3 style=\"text-align: center;\">Formulario {{title}}</h3>\r\n      <form #formForm=\"ngForm\" (ngSubmit)=\"sendForm(formForm)\">\r\n\r\n        <div *ngFor=\"let field of formLoaded; let i = index\">\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType == 'Select'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <select class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\"\r\n            ngControl=\"form[i].carga[field.fieldName]\">\r\n            <option *ngFor=\"let type of field.optionsDrop\" [value]=\"type.value\">{{type.label}}</option>\r\n          </select>\r\n          </div>\r\n\r\n          <fieldset class=\"form-group\" *ngIf=\"field.fieldType === 'Radio'\">\r\n            <div class=\"row\">\r\n              <legend class=\"col-form-label col-sm pt-0\">{{field.fieldName}}</legend>\r\n              <br />\r\n              <div class=\"form-group\" *ngFor=\"let rad of field.optionsRadio\">\r\n                <label [for]=\"field.fieldName\">{{rad.label}}</label>\r\n                <input type=\"radio\" class=\"form-control\" [id]=\"rad.name\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [value]=\"rad.value\"\r\n                [name]=\"field.fieldName\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"form-group\" *ngIf=\"field.fieldType === 'Checkbox'\">\r\n            <div class=\"row\">\r\n              <legend class=\"col-form-label col-sm pt-0\">{{field.fieldName}}</legend>\r\n              <br />\r\n              <div class=\"form-group\" *ngFor=\"let c of field.optionsCheck\">\r\n                <label [for]=\"field.fieldName\">{{c.label}}</label>\r\n                <input type=\"checkbox\" class=\"form-control\" [id]=\"c.val\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"field.fieldName\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'File'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input type=\"file\" class=\"form-control\" [id]=\"field.fieldName\"\r\n            [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Text'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input [type]=\"'text'\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Email'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input [type]=\"'email'\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Tel'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input [type]=\"'tel'\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Number'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input [type]=\"'number'\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Password'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <input [type]=\"'password'\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"field.fieldType === 'Textarea'\">\r\n            <label [for]=\"field.fieldName\">{{field.fieldLabel}}</label>\r\n            <textarea rows=\"3\" class=\"form-control\" [id]=\"field.fieldName\" [(ngModel)]=\"form[i].carga[field.fieldName]\" [ngModelOptions]=\"{standalone: true}\" [name]=\"form[i].carga[field.fieldName]\" [required]=\"field.fieldRequired\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"card\" *ngIf=\"field.fieldType === 'GeoPolygon'\" style=\"margin-bottom: 2em;\">\r\n            <div class=\"card-header\">\r\n              {{field.fieldLabel}}\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"form-group\">\r\n                <label>Ingrese dirección</label>\r\n                <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Buscar lugar\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\r\n              </div>\r\n              <div *ngFor=\"let p of pruebaItems; let j = index\">\r\n                <div *ngIf=\"p.title == field.fieldLabel\">\r\n                  <agm-map [latitude]=\"field.geoJson?.latitude\" [longitude]=\"field.geoJson?.longitude\" [zoom]=\"field.geoJson?.zoom\" (mapReady)=\"onMapReady($event, j)\">\r\n                    <agm-marker [latitude]=\"field.geoJson?.latitude\" [longitude]=\"field.geoJson?.longitude\" [markerDraggable]=\"true\"\r\n                      (dragEnd)=\"dragPin($event, j)\"></agm-marker>\r\n                  </agm-map>\r\n                  <p class=\"card-text\">Dirección: {{pruebaItems[j]?.address}}</p>\r\n                  <p class=\"card-text\">Latitude: {{pruebaItems[j]?.latitude}}  Longitude: {{pruebaItems[j]?.longitude}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <button type=\"submit\" [disabled]=\"!formForm.valid\" class=\"btn btn-primary btn-lg btn-block\">Procesar</button>\r\n          </div>\r\n        </div>\r\n        <hr/>\r\n        <div class=\"row\" [hidden]=\"!payload.created_at\" style=\"margin-bottom: 15%;\">\r\n          <div class=\"col-sm col-md col-lg-4\" style=\"margin-bottom: 3%;\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"downloadForm()\">Descargar</button>\r\n          </div>\r\n          <div class=\"col-sm col-md col-lg-4\" style=\"margin-bottom: 3%;\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"sendToFB()\">Enviar a firebase</button>\r\n          </div>\r\n          <div class=\"col-sm col-md col-lg-4\" style=\"margin-bottom: 3%;\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"sendAndDownload(); \">Enviar y descargar</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </form>\r\n    </div>\r\n    <div class=\"col-sm col-sm-2 col-md-2 col-lg-2\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"user_card\">\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"brand_logo_container\">\n          <img src=\"assets/img/logo-map.png\" class=\"brand_logo\" alt=\"Logo\">\n        </div>\n      </div>\n      <div class=\"d-flex justify-content-center form_container\">\n        <form [formGroup]=\"loginForm\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n            </div>\n            <input type=\"email\" id=\"email\" placeholder=\"email\" formControlName=\"email\" class=\"form-control input_user\" placeholder=\"Correo electrónico\">\n            <br/>\n          </div>\n          \n          <span style=\"color:darkslateblue; font-weight: bold;\"\n          *ngIf=\"loginForm.controls['email'].touched && loginForm.controls['email'].errors?.required\">\n            Correo electrónico requerido\n          </span>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n            </div>\n            <input id=\"password\" type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\" class=\"form-control input_pass\">\n          </div>\n          <span style=\"color:darkslateblue;\" *ngIf=\"loginForm.controls['password'].touched && loginForm.controls['password'].errors?.required\">\n            Contraseña requerida\n          </span>\n          <div class=\"d-flex justify-content-center mt-3 login_container\">\n            <button type=\"button\" name=\"button\" class=\"btn login_btn\" (click)=\"signIn()\">Iniciar sesión</button>\n          </div>\n          <div class=\"d-flex justify-content-center mt-3 login_container\">\n            <button type=\"button\" name=\"button\" class=\"btn register_btn\" (click)=\"createUser()\">Registrarme</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _form_creator_form_creator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-creator/form-creator.component */ "./src/app/form-creator/form-creator.component.ts");
/* harmony import */ var _load_form_load_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-form/load-form.component */ "./src/app/load-form/load-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'form-creator', component: _form_creator_form_creator_component__WEBPACK_IMPORTED_MODULE_4__["FormCreatorComponent"] },
    { path: 'load-form', component: _load_form_load_form_component__WEBPACK_IMPORTED_MODULE_5__["LoadFormComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }
];
var routerOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, routerOptions),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, afAuth, router, ngZone) {
        this.modalService = modalService;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.title = 'pin-map';
    } // {2}
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.user = null;
                _this.ngZone.run(function () {
                    _this.router.navigate(['']);
                });
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.signOut();
    };
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _form_creator_form_creator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-creator/form-creator.component */ "./src/app/form-creator/form-creator.component.ts");
/* harmony import */ var _load_form_load_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./load-form/load-form.component */ "./src/app/load-form/load-form.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");









 // <== add the imports!









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_creator_form_creator_component__WEBPACK_IMPORTED_MODULE_11__["FormCreatorComponent"],
                _load_form_load_form_component__WEBPACK_IMPORTED_MODULE_12__["LoadFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBSFuScy4OqVOvWKhVfeIC_EBwQRZnrSjw',
                    libraries: ['places', 'drawing']
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-creator/form-creator.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-creator/form-creator.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tY3JlYXRvci9mb3JtLWNyZWF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/form-creator/form-creator.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-creator/form-creator.component.ts ***!
  \********************************************************/
/*! exports provided: FormCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreatorComponent", function() { return FormCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_formGenerator_form_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/formGenerator/form-generator.service */ "./src/app/services/formGenerator/form-generator.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








var FormCreatorComponent = /** @class */ (function () {
    function FormCreatorComponent(formGeneratorService, bsModalService, firestoreService, afAuth, router) {
        this.formGeneratorService = formGeneratorService;
        this.bsModalService = bsModalService;
        this.firestoreService = firestoreService;
        this.afAuth = afAuth;
        this.router = router;
        this.optionsDropdown = [];
        this.optionsRadio = [];
        this.defaultOptSelected = null;
        this.optsCheckbox = [];
        this.formCreator = {};
        this.form = [];
        this.alert = false;
        this.nameTemplate = '';
        this.alertFlag = false;
    }
    FormCreatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            if (user) {
                console.log('user1: ', user);
                _this.typeArray = _this.formGeneratorService.getFieldsType();
                _this.requiredArray = [true, false];
                // this.loadForm()
                _this.user = user;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    FormCreatorComponent.prototype.addField = function () {
        if (this.formCreator.fieldType === 'Select') {
            this.formCreator.optionsDrop = this.optionsDropdown;
            this.optionsDropdown = [];
        }
        else if (this.formCreator.fieldType === 'Radio') {
            this.formCreator.optionsRadio = this.optionsRadio;
            this.optionsRadio = [];
            this.optionsDropdown = [];
        }
        else if (this.formCreator.fieldType === 'Checkbox') {
            this.formCreator.optionsCheck = this.optsCheckbox;
            this.optsCheckbox = [];
        }
        this.form.push(this.formCreator);
        // this.loadForm()
        this.formCreator = {};
    };
    // loadForm() {
    //   console.log('formulario: ', this.form)
    // }
    FormCreatorComponent.prototype.sendToFirebase = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, send;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = { form: this.form, nameTemplate: this.nameTemplate, created_at: new Date(), created_by: this.user.uid };
                        return [4 /*yield*/, this.firestoreService.create('templates', payload)];
                    case 1:
                        send = _a.sent();
                        console.log('formulario enviado', send);
                        this.form = [];
                        this.nameTemplate = '';
                        this.alertFlag = true;
                        setTimeout(function () {
                            _this.alertFlag = false;
                        }, 3000);
                        return [2 /*return*/];
                }
            });
        });
    };
    FormCreatorComponent.prototype.downloadTemplate = function () {
        var _this = this;
        var payload = { form: this.form, nameTemplate: this.nameTemplate, created_at: new Date(), created_by: this.user.uid };
        var dlAnchorElem = document.createElement('a');
        document.body.appendChild(dlAnchorElem);
        var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(payload));
        dlAnchorElem.setAttribute('href', dataStr);
        dlAnchorElem.setAttribute('download', this.nameTemplate + '.json');
        dlAnchorElem.click();
        this.form = [];
        this.nameTemplate = '';
        this.alertFlag = true;
        setTimeout(function () {
            _this.alertFlag = false;
        }, 3000);
    };
    FormCreatorComponent.prototype.sendAndDownload = function () {
        this.sendToFirebase();
        this.downloadTemplate();
    };
    FormCreatorComponent.prototype.openModal = function (template) {
        this.createForm();
        this.modalRef = this.bsModalService.show(template);
    };
    FormCreatorComponent.prototype.createForm = function () {
        var _this = this;
        this.checkSubscription$ = this.formGeneratorService.getFieldsCheck().subscribe(function (entry) {
            _this.optsCheckDrop = entry;
        });
        this.formDropdown = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            option: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            val: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            defaultOpt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: false })
        });
        this.formCheck = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            opt: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            preselectedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disabled: false })
        });
    };
    FormCreatorComponent.prototype.addOption = function () {
        var _this = this;
        var _a = this.formDropdown.value, option = _a.option, val = _a.val, defaultOpt = _a.defaultOpt;
        var fieldType = this.formCreator.fieldType;
        if (defaultOpt === 'true') {
            this.defaultOptSelected = defaultOpt;
        }
        if (fieldType === 'Select') {
            this.valOptionExists(this.optionsDropdown, option, val);
            if (!this.alert) {
                var obj = {
                    label: option,
                    value: val,
                    default: defaultOpt ? defaultOpt : 'false'
                };
                this.optionsDropdown.push(obj);
                this.formDropdown.reset();
            }
        }
        else if (fieldType === 'Radio') {
            this.valOptionExists(this.optionsRadio, option, val);
            if (!this.alert) {
                var obj = {
                    label: option,
                    value: val,
                    default: defaultOpt ? defaultOpt : 'false',
                    name: val
                };
                this.optionsRadio.push(obj);
                this.optionsDropdown = this.optionsRadio;
                this.formDropdown.reset();
            }
        }
        else if (fieldType === 'Checkbox') {
            var _b = this.formCheck.value, type = _b.type, opt_1 = _b.opt, value = _b.value, preselectedValue = _b.preselectedValue;
            this.optsCheckbox.forEach(function (item) {
                if (item.label === opt_1 || item.val === val) {
                    _this.alert = true;
                }
                else {
                    _this.alert = false;
                }
            });
            if (!this.alert) {
                var obj = {
                    typeOpt: type,
                    label: opt_1,
                    val: value,
                    preselected: preselectedValue ? preselectedValue : 'false',
                };
                this.optsCheckbox.push(obj);
                this.formCheck.reset();
                this.formCheck.controls.opt.disable();
                this.formCheck.controls.value.disable();
            }
        }
    };
    FormCreatorComponent.prototype.valOptionExists = function (arr, opt, val) {
        var _this = this;
        arr.forEach(function (item) {
            if (item.label === opt || item.value === val) {
                _this.alert = true;
            }
        });
    };
    FormCreatorComponent.prototype.delRow = function (event) {
        var _this = this;
        this.optionsDropdown.forEach(function (item, index) {
            if (event.value === item.value) {
                _this.optionsDropdown.splice(index, 1);
            }
        });
    };
    FormCreatorComponent.prototype.ngOnDestroy = function () {
        if (this.checkSubscription$) {
            this.checkSubscription$.unsubscribe();
        }
    };
    FormCreatorComponent.prototype.changeOpt = function (event) {
        var type = this.formCheck.value.type;
        this.formCheck.enable();
        if (type === 'BOOLEAN') {
            this.formCheck.controls.value.clearValidators();
            this.formCheck.controls.value.updateValueAndValidity();
        }
    };
    FormCreatorComponent.ctorParameters = function () { return [
        { type: _services_formGenerator_form_generator_service__WEBPACK_IMPORTED_MODULE_2__["FormGeneratorService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    FormCreatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-creator',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-creator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-creator/form-creator.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-creator.component.css */ "./src/app/form-creator/form-creator.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_formGenerator_form_generator_service__WEBPACK_IMPORTED_MODULE_2__["FormGeneratorService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], FormCreatorComponent);
    return FormCreatorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(afAuth, router, firestoreService) {
        this.afAuth = afAuth;
        this.router = router;
        this.firestoreService = firestoreService;
        this.templates = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).toPromise()
                    .then(function (user) {
                    if (user) {
                        console.log('user1: ', user);
                        _this.user = user;
                        _this.getTemplates();
                    }
                    else {
                        _this.router.navigate(['/login']);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.getTemplates = function () {
        var _this = this;
        this.firestoreService.getTemplates(this.user.uid)
            .then(function (templates) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _i, _a, template, formStringify, payload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                if (templates && templates.docs && templates.docs[0]) {
                    for (_i = 0, _a = templates.docs; _i < _a.length; _i++) {
                        template = _a[_i];
                        formStringify = JSON.stringify(template.data().form);
                        payload = template.data();
                        payload.formToSend = formStringify;
                        console.log('payload: ', payload);
                        this.templates.push(payload);
                    }
                }
                return [2 /*return*/];
            });
        }); });
    };
    HomeComponent.prototype.openTemplateFb = function (form, name) {
        console.log('on opentemplate: ', form);
        console.log('on opentemplate name: ', name);
        this.router.navigate(['load-form', { template: form, name: name }]);
    };
    HomeComponent.prototype.fileJsonInput = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var input, file, fr;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (typeof FileReader !== 'function') {
                    alert("The file API isn't supported on this browser yet.");
                    return [2 /*return*/];
                }
                input = document.getElementById('fileJsonInput');
                if (!input) {
                    alert("Um, couldn't find the fileinput element.");
                }
                else if (!input.files) {
                    alert("This browser doesn't seem to support the `files` property of file inputs.");
                }
                else if (!input.files[0]) {
                    alert("Please select a file before clicking 'Load'");
                }
                else {
                    file = input.files[0];
                    fr = new FileReader();
                    // fr.onload = receivedText;
                    fr.onload = function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var preText;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            preText = JSON.parse(e.target.result);
                            this.router.navigate(['load-form', { template: JSON.stringify(preText.form), name: preText.nameTemplate }]);
                            return [2 /*return*/];
                        });
                    }); };
                    fr.readAsText(file);
                }
                console.log('file', file, fr);
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/load-form/load-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/load-form/load-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    width: 100%;\r\n    height: 350px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZC1mb3JtL2xvYWQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2FkLWZvcm0vbG9hZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/load-form/load-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/load-form/load-form.component.ts ***!
  \**************************************************/
/*! exports provided: LoadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFormComponent", function() { return LoadFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _services_geoService_geo_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/geoService/geo-service.service */ "./src/app/services/geoService/geo-service.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var LoadFormComponent = /** @class */ (function () {
    // public searchElementRef: ElementRef;
    function LoadFormComponent(mapsAPILoader, ngZone, geoService, afAuth, actRoute, router, firestoreService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.geoService = geoService;
        this.afAuth = afAuth;
        this.actRoute = actRoute;
        this.router = router;
        this.firestoreService = firestoreService;
        this.formLoaded = [];
        this.form = [];
        this.flag = false;
        this.pruebaItems = [];
        this.totalPositions = 0;
        this.payload = [];
        console.log('nuevo template: ', this.actRoute.snapshot.paramMap.get('template'));
        var template = this.actRoute.snapshot.paramMap.get('template');
        this.title = this.actRoute.snapshot.paramMap.get('name');
        this.loadForm(template);
        this.alertFlag = false;
    }
    LoadFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            if (user) {
                console.log('user1: ', user);
                _this.user = user;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    LoadFormComponent.prototype.ngAfterViewInit = function () {
    };
    LoadFormComponent.prototype.returnCurrentLocation = function (title) {
        var _this = this;
        return this.geoService.setCurrentLocation()
            .then(function (geoCoords) {
            console.log('geocords init: ', geoCoords);
            var object = { title: title, latitude: geoCoords.lat, longitude: geoCoords.lng, zoom: geoCoords.zoom, address: geoCoords.address };
            _this.geocordsGlobal = object;
            _this.pruebaItems.push(object);
            return geoCoords;
        });
    };
    LoadFormComponent.prototype.initGeoServiceCatchCoords = function (index) {
        var _this = this;
        this.geoService.setCurrentLocation()
            .then(function (geoCoords) {
            if (geoCoords && geoCoords.lat) {
                _this.pruebaItems[index].latitude = geoCoords.lat;
                _this.pruebaItems[index].longitude = geoCoords.lng;
                _this.pruebaItems[index].zoom = geoCoords === null || geoCoords === void 0 ? void 0 : geoCoords.zoom;
                _this.pruebaItems[index].address = geoCoords.address;
            }
            return geoCoords;
        }).then(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.geoService.initPlace().then(function () {
                    var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef['_results'][index].nativeElement);
                    autocomplete.addListener("place_changed", function () {
                        _this.ngZone.run(function () {
                            var place = autocomplete.getPlace();
                            _this.pruebaItems[index].latitude = place.geometry.location.lat();
                            _this.pruebaItems[index].longitude = place.geometry.location.lng();
                            _this.pruebaItems[index].zoom = 12;
                            _this.geoService.getAddressPromise(_this.pruebaItems[index].latitude, _this.pruebaItems[index].longitude).then(function (address) {
                                _this.address = address['formatted_address'];
                                _this.pruebaItems[index].address = address['formatted_address'];
                                console.log('address on search: ', address['formatted_address']);
                            });
                            console.log('pruebaitem busqueda: ', _this.pruebaItems);
                        });
                    });
                });
                return [2 /*return*/];
            });
        }); });
    };
    LoadFormComponent.prototype.ngOnChanges = function (changes) {
        console.log('changes: ', changes);
    };
    LoadFormComponent.prototype.dragPin = function ($event, index) {
        var _this = this;
        console.log('form on dragpin: ', this.form);
        console.log('formloaded on dragpin: ', this.formLoaded);
        console.log('pruebaitems on dragpin: ', this.pruebaItems);
        console.log('dragpin: ', $event);
        console.log('index dragping: ', index);
        this.geoService.markerDragEnd($event).then(function (data) {
            var _a, _b;
            console.log('dragpin endmarker: ', data);
            _this.pruebaItems[index].latitude = data.lat;
            _this.pruebaItems[index].longitude = data.lng;
            _this.pruebaItems[index].zoom = data.zoom;
            _this.pruebaItems[index].address = data.address;
            _this.pruebaItems[index].geoPolygon = {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [{ lng: data.lng, lat: data.lat }]
                },
                properties: {
                    name: (_a = _this.pruebaItems[index]) === null || _a === void 0 ? void 0 : _a.title,
                    address: (_b = _this.pruebaItems[index]) === null || _b === void 0 ? void 0 : _b.address
                }
            };
        });
    };
    LoadFormComponent.prototype.onMapReady = function (map, j) {
        var _this = this;
        var drawingManager = this.geoService.initDrawingManager(map);
        google.maps.event.addListener(drawingManager, 'overlaycomplete', function (event) {
            var _a, _b;
            console.log('poligono', event);
            // Polygon drawn
            if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                //this is the coordinate, you can assign it to a variable or pass into another function.
                //alert(event.overlay.getPath().getArray());
                var coords = [];
                console.log('coords: ', event.overlay.getPath().getArray()[0].lat());
                for (var _i = 0, _c = event.overlay.getPath().getArray(); _i < _c.length; _i++) {
                    var c = _c[_i];
                    console.log('coord lat: ', c.lat());
                    console.log('coord lng: ', c.lng());
                    coords.push({ lng: c.lng(), lat: c.lat() });
                }
                _this.pruebaItems[j].geoPolygon = {
                    type: 'Feature',
                    geometry: {
                        type: event === null || event === void 0 ? void 0 : event.type,
                        coordinates: coords
                    },
                    properties: {
                        name: (_a = _this.pruebaItems[j]) === null || _a === void 0 ? void 0 : _a.title,
                        address: (_b = _this.pruebaItems[j]) === null || _b === void 0 ? void 0 : _b.address
                    }
                };
                console.log('pruebasitems onmapready: ', _this.pruebaItems);
            }
        });
    };
    LoadFormComponent.prototype.getGeoPolynos = function () {
        this.searchElementRef.toArray();
        console.log('index: ', this.pruebaItems);
        for (var j = 0; j < this.pruebaItems.length; j++) {
            this.initGeoServiceCatchCoords(j);
        }
    };
    LoadFormComponent.prototype.loadForm = function (form) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var flagGeo, _i, _b, field;
            var _c;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.flag = true;
                        flagGeo = true;
                        _i = 0, _b = JSON.parse(form);
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        field = _b[_i];
                        console.log('field', field);
                        this.form.push({ carga: (_c = {}, _c[field.fieldName] = field.fieldDefaultValue ? field.fieldDefaultValue : field.fieldName, _c) });
                        if (!(field.fieldType == 'GeoPolygon')) return [3 /*break*/, 3];
                        flagGeo = true;
                        return [4 /*yield*/, this.returnCurrentLocation(field.fieldLabel)];
                    case 2:
                        _d.sent();
                        this.formLoaded.push(Object.assign(field, { geoJson: this.geocordsGlobal }));
                        return [3 /*break*/, 4];
                    case 3:
                        this.formLoaded.push(field);
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        if (flagGeo) {
                            this.getGeoPolynos();
                            console.log('formLoaded: ', this.formLoaded);
                            console.log('form: ', this.form);
                            console.log('pruebaitems after form: ', this.pruebaItems);
                            this.totalPositions = (_a = this.pruebaItems) === null || _a === void 0 ? void 0 : _a.length;
                        }
                        this.flag = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadFormComponent.prototype.sendForm = function (form) {
        var _this = this;
        var _a;
        this.formTrue = form;
        console.log('payload before: ', this.payload);
        for (var _i = 0, _b = this.formLoaded; _i < _b.length; _i++) {
            var item = _b[_i];
            if (item.fieldType !== 'GeoPolygon') {
                for (var i = 0; i < this.form.length; i++) {
                    var objKey = Object.keys(this.form[i].carga);
                    console.log('preval: ', this.form[i]);
                    this.payload[objKey.toString().toLowerCase()] = Object.values(this.form[i].carga)[0];
                }
            }
        }
        this.pruebaItems.forEach(function (obj, index) {
            _this.payload[obj.title.toString().toLowerCase()] = { geoJSON: obj };
        });
        this.payload['created_at'] = new Date();
        this.payload['created_by'] = this.user.uid;
        console.log('payload: ', this.payload);
        console.log('payload length: ', (_a = this.payload) === null || _a === void 0 ? void 0 : _a.length);
    };
    LoadFormComponent.prototype.sendToFB = function () {
        var _this = this;
        var send = this.firestoreService.create('answers', { answer: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.payload)], formName: this.title });
        console.log('formulario enviado', send);
        this.alertFlag = true;
        setTimeout(function () {
            _this.alertFlag = false;
        }, 3000);
        //this.formTrue.reset()
        this.clearForm();
    };
    LoadFormComponent.prototype.downloadForm = function () {
        var _this = this;
        var data = { answer: JSON.stringify(Object.assign({}, this.payload)), formName: this.title };
        var dlAnchorElem = document.createElement('a');
        document.body.appendChild(dlAnchorElem);
        var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        dlAnchorElem.setAttribute('href', dataStr);
        dlAnchorElem.setAttribute('download', 'response_' + this.title + '.json');
        dlAnchorElem.click();
        this.alertFlag = true;
        setTimeout(function () {
            _this.alertFlag = false;
        }, 3000);
        //this.formTrue.reset()
        this.clearForm();
    };
    LoadFormComponent.prototype.clearForm = function () {
        for (var _i = 0, _a = this.formLoaded; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fieldType !== 'GeoPolygon') {
                for (var i = 0; i < this.form.length; i++) {
                    console.log('limpiando: ', this.form[i]);
                    this.form[i].carga[item.fieldName] = null;
                }
            }
        }
    };
    LoadFormComponent.prototype.sendAndDownload = function () {
        this.sendToFB();
        this.downloadForm();
    };
    LoadFormComponent.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_geoService_geo_service_service__WEBPACK_IMPORTED_MODULE_3__["GeoServiceService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
    ]; };
    LoadFormComponent.propDecorators = {
        searchElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['search',] }]
    };
    LoadFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./load-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/load-form/load-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./load-form.component.css */ "./src/app/load-form/load-form.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_geoService_geo_service_service__WEBPACK_IMPORTED_MODULE_3__["GeoServiceService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
    ], LoadFormComponent);
    return LoadFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    background: #60a3bc !important;\r\n}\r\n.user_card {\r\n    height: auto;\r\n    width: 70%;\r\n    margin: 25% auto;\r\n    background: #17a2b8 ;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    border-radius: 5px;\r\n\r\n}\r\n.brand_logo_container {\r\n    position: absolute;\r\n    height: 170px;\r\n    width: 170px;\r\n    top: -75px;\r\n    border-radius: 50%;\r\n    background: #60a3bc;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.brand_logo {\r\n    height: 150px;\r\n    width: 150px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n.form_container {\r\n    margin-top: 100px;\r\n}\r\n.login_btn {\r\n    width: 100%;\r\n    background:  #28a745!important;\r\n    color: white !important;\r\n}\r\n.register_btn {\r\n    width: 100%;\r\n    background: #c0392b !important;\r\n    color: white !important;\r\n}\r\n.login_btn:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.login_container {\r\n    padding: 0 2rem;\r\n}\r\n.input-group-text {\r\n    background: black !important;\r\n    color: white !important;\r\n    border: 0 !important;\r\n    border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n.input_user,\r\n.input_pass:focus {\r\n    box-shadow: none !important;\r\n    outline: 0px !important;\r\n}\r\n.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n    background-color: #c0392b !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0RUFBNEU7SUFDNUUsb0ZBQW9GO0lBQ3BGLGlGQUFpRjtJQUNqRixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDtcclxufVxyXG4udXNlcl9jYXJkIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDI1JSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzE3YTJiOCA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcbi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgdG9wOiAtNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICM2MGEzYmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5icmFuZF9sb2dvIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZm9ybV9jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLmxvZ2luX2J0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICAjMjhhNzQ1IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVnaXN0ZXJfYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luX2J0bjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfdXNlcixcclxuLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, fb, ngZone) {
        this.afAuth = afAuth;
        this.router = router;
        this.fb = fb;
        this.ngZone = ngZone;
        this.errorMessage = '';
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            if (user) {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/home']);
                });
            }
        });
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(function () {
            _this.router.navigate(['/home']);
        }).catch(function (response) {
            _this.errorMessage = response.message;
        });
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(function () {
            _this.router.navigate(['/home']);
        }).catch(function (response) {
            _this.errorMessage = response.message;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/firestore/firestore.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore) {
        this.firestore = firestore;
    }
    //Crear
    FirestoreService.prototype.create = function (collection, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('data on service', data);
                        return [4 /*yield*/, this.firestore.collection("" + collection).add(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //Obtiene un registro
    FirestoreService.prototype.getCat = function (documentId) {
        return this.firestore.collection('cats').doc(documentId).snapshotChanges();
    };
    //Obtiene todos los registros
    FirestoreService.prototype.getTemplates = function (userId) {
        return this.firestore.collection('templates', (function (ref) { return ref.where('created_by', '==', userId); })).get().toPromise();
    };
    //Actualiza un registro
    FirestoreService.prototype.updateCat = function (documentId, data) {
        return this.firestore.collection('cats').doc(documentId).set(data);
    };
    FirestoreService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    FirestoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/services/formGenerator/form-generator.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/formGenerator/form-generator.service.ts ***!
  \******************************************************************/
/*! exports provided: FormGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGeneratorService", function() { return FormGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var FormGeneratorService = /** @class */ (function () {
    function FormGeneratorService() {
    }
    FormGeneratorService.prototype.getFieldsType = function () {
        return [
            'Select',
            'Radio',
            'Checkbox',
            //'File',
            'Text',
            'Email',
            'Tel',
            'Number',
            'Password',
            'Textarea',
            'GeoPolygon'
        ];
    };
    FormGeneratorService.prototype.getFieldsCheck = function () {
        var obj = [
            { label: 'Basico', value: 'BASICO' },
            { label: 'Preselección', value: 'PRESELECCION' },
            { label: 'Boolean (True - False)', value: 'BOOLEAN' }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(obj);
    };
    FormGeneratorService.ctorParameters = function () { return []; };
    FormGeneratorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FormGeneratorService);
    return FormGeneratorService;
}());



/***/ }),

/***/ "./src/app/services/geoService/geo-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/geoService/geo-service.service.ts ***!
  \************************************************************/
/*! exports provided: GeoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoServiceService", function() { return GeoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");



var GeoServiceService = /** @class */ (function () {
    function GeoServiceService(mapsAPILoader, ngZone) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.getPosition = function () {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        };
        this.getAddressPromise = function (latitude, longitude) { return new Promise(function (resolve, reject) {
            _this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        _this.geoCoords.zoom = 12;
                        _this.geoCoords.address = results[0].formatted_address;
                        resolve(results[0]);
                    }
                    else {
                        window.alert('No results found');
                        reject(new Error('No results found'));
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                    reject(new Error('Geocoder failed due to: ' + status));
                }
            });
        }); };
        this.geoCoords = {};
    }
    GeoServiceService.prototype.initPlace = function () {
        //load Places Autocomplete
        return this.mapsAPILoader.load();
    };
    // Get Current Location Coordinates
    GeoServiceService.prototype.setCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if ('geolocation' in navigator) {
                    this.getPosition().then(function (position) {
                        _this.geoCoords.lat = position.coords.latitude;
                        _this.geoCoords.lng = position.coords.longitude;
                        _this.geoCoords.zoom = 8;
                        return _this.geoCoords;
                    })
                        .then(function (coords) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            return [2 /*return*/, this.mapsAPILoader.load().then(function () {
                                    return new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.geoCoder = new google.maps.Geocoder;
                                            resolve(this.geoCoder);
                                            return [2 /*return*/];
                                        });
                                    }); });
                                })];
                        });
                    }); })
                        .then(function (coords) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getAddressPromise(this.geoCoords.lat, this.geoCoords.lng)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })
                        .then(function (coords) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            resolve(this.geoCoords);
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    GeoServiceService.prototype.markerDragEnd = function ($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.geoCoords.lat = $event.latLng.lat();
                        this.geoCoords.lng = $event.latLng.lng();
                        return [4 /*yield*/, this.getAddressPromise(this.geoCoords.lat, this.geoCoords.lng)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.geoCoords];
                }
            });
        });
    };
    GeoServiceService.prototype.initDrawingManager = function (map) {
        var options = {
            drawingControl: true,
            drawingControlOptions: {
                drawingModes: [
                    google.maps.drawing.OverlayType.MARKER,
                    google.maps.drawing.OverlayType.CIRCLE,
                    google.maps.drawing.OverlayType.POLYGON,
                    google.maps.drawing.OverlayType.POLYLINE,
                    google.maps.drawing.OverlayType.RECTANGLE
                ]
            },
            polygonOptions: {
                draggable: true,
                editable: true
            },
        };
        var drawingManager = new google.maps.drawing.DrawingManager(options);
        drawingManager.setMap(map);
        return drawingManager;
    };
    GeoServiceService.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    GeoServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], GeoServiceService);
    return GeoServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBVAYgbpGNqzx8Rz5nKOAllT47CrjhU3QA",
        authDomain: "pin-map-firebase.firebaseapp.com",
        databaseURL: "https://pin-map-firebase.firebaseio.com",
        projectId: "pin-map-firebase",
        storageBucket: "pin-map-firebase.appspot.com",
        messagingSenderId: "480232427801",
        appId: "1:480232427801:web:f2bc007fda379584c63588",
        measurementId: "G-8X1RYD9544"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eduar\Documents\desarrollo\GeoJson-Service-System-with-Dynamic-Forms\pin-map\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.053b755e612de40fdee0.js.map