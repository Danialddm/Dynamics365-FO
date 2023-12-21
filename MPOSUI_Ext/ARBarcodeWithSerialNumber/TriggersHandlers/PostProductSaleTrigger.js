System.register(["PosApi/Extend/Triggers/ProductTriggers", "../Handlers/GetScanResultClientRequestHandlerExt"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Triggers, GetScanResultClientRequestHandlerExt_1, PostProductSaleTrigger;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (GetScanResultClientRequestHandlerExt_1_1) {
                GetScanResultClientRequestHandlerExt_1 = GetScanResultClientRequestHandlerExt_1_1;
            }
        ],
        execute: function () {
            PostProductSaleTrigger = (function (_super) {
                __extends(PostProductSaleTrigger, _super);
                function PostProductSaleTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PostProductSaleTrigger.prototype.execute = function (options) {
                    console.log("Executing PostProductSaleTrigger with options " + JSON.stringify(options) + ".");
                    GetScanResultClientRequestHandlerExt_1.setBarcode(undefined);
                    return Promise.resolve();
                };
                return PostProductSaleTrigger;
            }(Triggers.PostProductSaleTrigger));
            exports_1("default", PostProductSaleTrigger);
        }
    };
});
//# sourceMappingURL=K:/RetailSDK/POS/Extensions/ARBarcodeWithSerialNumber/TriggersHandlers/PostProductSaleTrigger.js.map