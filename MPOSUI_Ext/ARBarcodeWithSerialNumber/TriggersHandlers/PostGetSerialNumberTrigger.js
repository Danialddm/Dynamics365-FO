System.register(["PosApi/Extend/Triggers/ProductTriggers", "PosApi/Entities", "PosApi/TypeExtensions", "../Handlers/GetScanResultClientRequestHandlerExt"], function (exports_1, context_1) {
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
    var Triggers, Entities_1, TypeExtensions_1, GetScanResultClientRequestHandlerExt_1, PostGetSerialNumberTrigger;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (GetScanResultClientRequestHandlerExt_1_1) {
                GetScanResultClientRequestHandlerExt_1 = GetScanResultClientRequestHandlerExt_1_1;
            }
        ],
        execute: function () {
            PostGetSerialNumberTrigger = (function (_super) {
                __extends(PostGetSerialNumberTrigger, _super);
                function PostGetSerialNumberTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PostGetSerialNumberTrigger.prototype.execute = function (options) {
                    this.context.logger.logInformational("Executing PostSerialInputTrigger with options " + JSON.stringify(options) + ".");
                    if (TypeExtensions_1.StringExtensions.isNullOrWhitespace(options.serialNumber)) {
                        return Promise.resolve();
                    }
                    else if (this.getSerialCompare(options)) {
                        GetScanResultClientRequestHandlerExt_1.setBarcode(undefined);
                        var error = new Entities_1.ClientEntities.ExtensionError("The serial number entered has been rejected. Please enter a unique value again or Add Later.");
                        return Promise.reject(error);
                    }
                    else {
                        return Promise.resolve();
                    }
                };
                PostGetSerialNumberTrigger.prototype.getSerialCompare = function (options) {
                    var result = false;
                    options.cart.CartLines.forEach(function (cartLine) {
                        var currentSerial = cartLine.SerialNumber;
                        if (options.serialNumber === currentSerial) {
                            result = true;
                        }
                    });
                    return result;
                };
                return PostGetSerialNumberTrigger;
            }(Triggers.PostGetSerialNumberTrigger));
            exports_1("default", PostGetSerialNumberTrigger);
        }
    };
});
//# sourceMappingURL=K:/RetailSDK/POS/Extensions/ARBarcodeWithSerialNumber/TriggersHandlers/PostGetSerialNumberTrigger.js.map