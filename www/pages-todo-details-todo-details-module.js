(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-details-todo-details-module"],{

/***/ "./src/app/pages/todo-details/todo-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.module.ts ***!
  \***********************************************************/
/*! exports provided: TodoDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsPageModule", function() { return TodoDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-details.page */ "./src/app/pages/todo-details/todo-details.page.ts");







var routes = [
    {
        path: '',
        component: _todo_details_page__WEBPACK_IMPORTED_MODULE_6__["TodoDetailsPage"]
    }
];
var TodoDetailsPageModule = /** @class */ (function () {
    function TodoDetailsPageModule() {
    }
    TodoDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_todo_details_page__WEBPACK_IMPORTED_MODULE_6__["TodoDetailsPage"]]
        })
    ], TodoDetailsPageModule);
    return TodoDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <div class=\"bgImageTb\" [ngStyle]=\"{'background': 'url(https://firebasestorage.googleapis.com/v0/b/todo-firebase-d0284.appspot.com/o/'+todo.imageName+'.jpg?alt=media)'}\" >\n      <!-- <ion-img [src]=\"'https://firebasestorage.googleapis.com/v0/b/todo-firebase-d0284.appspot.com/o/' + todo.imageName + '.jpg?alt=media'\"  ></ion-img>-->\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n       </ion-buttons>\n      \n      \n    <div class=\"goodDay\">\n        <ion-item class =\"bgGone\" lines=\"none\">\n          <ion-input required type=\"text\" placeholder=\"Taak hier\" [(ngModel)]=\"todo.task\"></ion-input>\n        </ion-item>\n      </div>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-list lines=\"full\">\n\n    <ion-item>\n      <ion-input required type=\"number\" placeholder=\"Prioriteit\" [(ngModel)]=\"todo.priority\" value=\"{{this.pripri}}\">\n      </ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-row>\n\n  </ion-row>\n  \n  <ion-row>\n    <ion-col>\n  <ion-fab-button round (click)=\"getPicture()\"><ion-icon name=\"camera\"></ion-icon></ion-fab-button>\n</ion-col>\n<ion-col>\n\n  <ion-fab-button float-right (click)=\"saveTodo()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n</ion-col>\n\n</ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F8F8FF; }\n\nion-item {\n  background: #F8F8FF; }\n\nion-buttons {\n  position: fixed; }\n\nion-toolbar {\n  text-align: left !important;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.19), 0 2px 2px rgba(0, 0, 0, 0.23); }\n\n.bgImageTb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: -5px; }\n\n.bgImageTb:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom, #5C6BC0, rgba(140, 141, 185, 0.331));\n    opacity: 1; }\n\n.goodDay ion-item ion-input {\n  margin-top: 150px;\n  font-size: 200%;\n  text-align: center;\n  color: #F8F8FF;\n  font-family: 'Dosis-Bold' !important;\n  border: 0px;\n  background: rgba(248, 248, 255, 0) !important;\n  z-index: 20; }\n\nion-icon {\n  color: #F8F8FF;\n  font-size: 600%; }\n\n.homeIcon {\n  font-size: 200%;\n  margin-top: 0px; }\n\nion-fab-button {\n  height: 70px;\n  width: 70Px; }\n\nion-img.img {\n  width: 100% !important;\n  z-index: 0 !important;\n  margin: -5px -5px -5px -5px; }\n\nion-img {\n  z-index: 0 !important;\n  position: fixed;\n  margin: -5px; }\n\nion-back-button {\n  font-size: 150%; }\n\n.rightBut {\n  align-content: right; }\n\nion-item {\n  --ion-background-color:rgba(255, 0, 0, 0);\n  --background: rgba(248, 248, 255, 0);\n  z-index: 20; }\n\n.bgGone {\n  background: rgba(248, 248, 255, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naXJiYXVkYmFydGhlbHMvQXBwcy90b2RvQXBwL3NyYy9hcHAvcGFnZXMvdG9kby1kZXRhaWxzL3RvZG8tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxxQkFBYSxFQUFBOztBQUlqQjtFQUNJLG1CQUFrQixFQUFBOztBQUl0QjtFQUNJLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSwyQkFBMkI7RUFFM0Isd0VBQWtFLEVBQUE7O0FBR3RFO0VBQ0ksNEJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBSGhCO0lBTVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsaUZBQWdGO0lBQ2hGLFVBQVUsRUFBQTs7QUFLbEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsV0FBVyxFQUFBOztBQUtmO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUloQjtFQUNJLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx5Q0FBdUI7RUFDdkIsb0NBQWE7RUFDYixXQUFXLEVBQUE7O0FBS2Y7RUFDSSxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvZG8tZGV0YWlscy90b2RvLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNGOEY4RkY7XG5cbn1cblxuaW9uLWl0ZW17XG4gICAgYmFja2dyb3VuZDojRjhGOEZGO1xuXG59XG5cbmlvbi1idXR0b25ze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuXG5pb24tdG9vbGJhcntcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG5cbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjE5KSwgMCAycHggMnB4IHJnYmEoMCwwLDAsMC4yMyk7XG59XG5cbi5iZ0ltYWdlVGJ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgbWFyZ2luOiAtNXB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gLCM1QzZCQzAscmdiYSgxNDAsIDE0MSwgMTg1LCAwLjMzMSkpO1xuICAgICAgICBvcGFjaXR5OiAxOyBcbiAgICAgIH1cblxufVxuXG4uZ29vZERheSBpb24taXRlbSBpb24taW5wdXR7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0Y4RjhGRjtcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzLUJvbGQnICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjU1LCAwKSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDIwO1xufVxuXG5cblxuaW9uLWljb257XG4gICAgY29sb3I6ICNGOEY4RkY7XG4gICAgZm9udC1zaXplOiA2MDAlO1xufVxuXG4uaG9tZUljb257XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuaW9uLWZhYi1idXR0b257XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MFB4O1xufVxuXG5pb24taW1nLmltZ3tcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IC01cHggLTVweCAtNXB4IC01cHg7XG5cbn1cblxuaW9uLWltZ3tcbiAgICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbjogLTVweDtcblxuXG59XG5pb24tYmFjay1idXR0b257XG4gICAgZm9udC1zaXplOiAxNTAlO1xufVxuXG5cbi5yaWdodEJ1dHtcbiAgICBhbGlnbi1jb250ZW50OiByaWdodDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDAsIDAsIDApO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjU1LCAwKTtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBcblxufVxuXG4uYmdHb25le1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDgsIDI1NSwgMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/todo-details/todo-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/todo-details/todo-details.page.ts ***!
  \*********************************************************/
/*! exports provided: TodoDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsPage", function() { return TodoDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _image_provider_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../image-provider-service.service */ "./src/app/image-provider-service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var TodoDetailsPage = /** @class */ (function () {
    function TodoDetailsPage(imageSrv, camera, route, storage, nav, todoService, loadingController) {
        this.imageSrv = imageSrv;
        this.camera = camera;
        this.route = route;
        this.storage = storage;
        this.nav = nav;
        this.todoService = todoService;
        this.loadingController = loadingController;
        this.todo = {
            task: '',
            createdAt: new Date().getTime(),
            Prioriteit: '',
            imageName: '',
        };
        this.todoId = null;
        this.cameraOptions = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    TodoDetailsPage.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOptions)
            .then(function (data) {
            var base64Image = 'data:image/jpeg;base64,' + data;
            return _this.imageSrv.uploadImage(base64Image)
                .then(function (name) {
                _this.todo.imageName = name;
                console.log(name);
            });
            //this.router.navigateByUrl('/bedankt'); 
        });
    };
    TodoDetailsPage.prototype.ngOnInit = function () {
        this.todoId = this.route.snapshot.params['id'];
        if (this.todoId) {
            this.loadTodo();
        }
        this.getPri();
    };
    TodoDetailsPage.prototype.getPri = function () {
        var _this = this;
        this.storage.get('prioriteit').then(function (val) {
            console.log('Uw prioriteit is: ', val);
            _this.pripri = val;
        });
    };
    TodoDetailsPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'ToDo Laden..'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.todoService.getTodo(this.todoId).subscribe(function (res) {
                            loading.dismiss();
                            _this.todo = res;
                            console.log(_this.todo.imageName);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoDetailsPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'ToDo Opslaan..'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.todoId) {
                            this.todo.imageName = this.todoService.getImage();
                            this.todoService.updateTodo(this.todo, this.todoId).then(function () {
                                loading.dismiss();
                                _this.nav.navigateBack('home');
                            });
                        }
                        else {
                            this.todo.imageName = this.todoService.getImage();
                            this.todoService.addTodo(this.todo).then(function () {
                                loading.dismiss();
                                _this.nav.navigateBack('home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-details',
            template: __webpack_require__(/*! ./todo-details.page.html */ "./src/app/pages/todo-details/todo-details.page.html"),
            styles: [__webpack_require__(/*! ./todo-details.page.scss */ "./src/app/pages/todo-details/todo-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_image_provider_service_service__WEBPACK_IMPORTED_MODULE_6__["ImageProviderService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], TodoDetailsPage);
    return TodoDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-todo-details-todo-details-module.js.map