System.register(["PosApi/Extend/RequestHandlers/ProductsRequestHandlers", "PosApi/Consume/Products", "./GetScanResultClientRequestHandlerExt"], function (exports_1, context_1) {
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
    var ProductsRequestHandlers_1, Products_1, GetScanResultClientRequestHandlerExt_1, GetSerialNumberClientRequestHandlerExt;
    return {
        setters: [
            function (ProductsRequestHandlers_1_1) {
                ProductsRequestHandlers_1 = ProductsRequestHandlers_1_1;
            },
            function (Products_1_1) {
                Products_1 = Products_1_1;
            },
            function (GetScanResultClientRequestHandlerExt_1_1) {
                GetScanResultClientRequestHandlerExt_1 = GetScanResultClientRequestHandlerExt_1_1;
            }
        ],
        execute: function () {
            GetSerialNumberClientRequestHandlerExt = (function (_super) {
                __extends(GetSerialNumberClientRequestHandlerExt, _super);
                function GetSerialNumberClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GetSerialNumberClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    var barcodeCheck = GetScanResultClientRequestHandlerExt_1.barcodeID;
                    if (barcodeCheck !== undefined) {
                        var response = new Products_1.GetSerialNumberClientResponse(GetScanResultClientRequestHandlerExt_1.barcodeID);
                        return Promise.resolve({
                            canceled: false,
                            data: response
                        });
                    }
                    else {
                        return this.defaultExecuteAsync(request);
                    }
                };
                return GetSerialNumberClientRequestHandlerExt;
            }(ProductsRequestHandlers_1.GetSerialNumberClientRequestHandler));
            exports_1("default", GetSerialNumberClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=K:/RetailSDK/POS/Extensions/ARBarcodeWithSerialNumber/Handlers/GetSerialNumberClientRequestHandlerExt.js.map