System.register(["PosApi/Extend/Views/PickingAndReceivingDetailsView", "./messagedialog"], function (exports_1, context_1) {
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
    var PickingAndReceivingDetailsView, messagedialog_1, PreUpdateInventoryDocumentTrigger;
    return {
        setters: [
            function (PickingAndReceivingDetailsView_1) {
                PickingAndReceivingDetailsView = PickingAndReceivingDetailsView_1;
            },
            function (messagedialog_1_1) {
                messagedialog_1 = messagedialog_1_1;
            }
        ],
        execute: function () {
            PreUpdateInventoryDocumentTrigger = (function (_super) {
                __extends(PreUpdateInventoryDocumentTrigger, _super);
                function PreUpdateInventoryDocumentTrigger(context) {
                    return _super.call(this, context) || this;
                }
                PreUpdateInventoryDocumentTrigger.prototype.init = function (state) {
                    var _this = this;
                    this.isVisible = true;
                    this._journal = state.journal;
                    this.journalLinesChangedHandler = function (data) {
                        if (_this._selectedJournalLine.quantityReceivedNow > _this._selectedJournalLine.quantityOrdered) {
                            messagedialog_1.default.show(_this.context, "You are trying to receive the over delivery...");
                        }
                        _this._journalLines = data.journalLines;
                    };
                    this.journalSavedHandler = function (data) {
                        _this._journal = data.journal;
                    };
                    this.journalLineSelectedHandler = function (data) {
                        _this.canExecute = true;
                        _this._selectedJournalLine = data.journalLine;
                    };
                    this.journalLineSelectionClearedHandler = function () {
                        _this.canExecute = false;
                        _this._selectedJournalLine = null;
                    };
                    this.receiptSelectionHandler = function (data) {
                        _this.isVisible = false;
                        _this._receipt = data.receipt;
                    };
                    this.receiptSelectionClearedHandler = function () {
                        _this.isVisible = true;
                    };
                };
                PreUpdateInventoryDocumentTrigger.prototype.execute = function () {
                    var message = this._journal.lines + " : " + this._selectedJournalLine.productNumber + " : " + this._selectedJournalLine.quantityOrdered;
                    messagedialog_1.default.show(this.context, message);
                };
                return PreUpdateInventoryDocumentTrigger;
            }(PickingAndReceivingDetailsView.PickingAndReceivingDetailsExtensionCommandBase));
            exports_1("default", PreUpdateInventoryDocumentTrigger);
        }
    };
});
//# sourceMappingURL=k:/myRetailSDK/RetailSDKUpdate2023-08-05/Pos/Extensions/ARAddFOCItemsintoPOMessage/ViewExtensions/PickingAndReceivingDetailsCmd.js.map