System.register(["PosApi/Extend/RequestHandlers/ScanResultsRequestHandlers", "PosApi/Consume/ScanResults"], function (exports_1, context_1) {
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
    function setBarcode(value) {
        exports_1("barcodeID", barcodeID = value);
    }
    exports_1("setBarcode", setBarcode);
    var ScanResultsRequestHandlers_1, ScanResults_1, barcodeID, GetScanResultClientRequestHandlerExt;
    return {
        setters: [
            function (ScanResultsRequestHandlers_1_1) {
                ScanResultsRequestHandlers_1 = ScanResultsRequestHandlers_1_1;
            },
            function (ScanResults_1_1) {
                ScanResults_1 = ScanResults_1_1;
            }
        ],
        execute: function () {
            GetScanResultClientRequestHandlerExt = (function (_super) {
                __extends(GetScanResultClientRequestHandlerExt, _super);
                function GetScanResultClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GetScanResultClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    var newBarCode = request.scanText;
                    exports_1("barcodeID", barcodeID = newBarCode);
                    var newRequest = new ScanResults_1.GetScanResultClientRequest(newBarCode);
                    return this.defaultExecuteAsync(newRequest);
                };
                return GetScanResultClientRequestHandlerExt;
            }(ScanResultsRequestHandlers_1.GetScanResultClientRequestHandler));
            exports_1("default", GetScanResultClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=K:/RetailSDK/POS/Extensions/ARBarcodeWithSerialNumber/Handlers/GetScanResultClientRequestHandlerExt.js.map