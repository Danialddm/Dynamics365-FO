import { GetScanResultClientRequestHandler } from "PosApi/Extend/RequestHandlers/ScanResultsRequestHandlers";
import { ClientEntities } from "PosApi/Entities";
import { GetScanResultClientRequest, GetScanResultClientResponse } from "PosApi/Consume/ScanResults";
declare let barcodeID: any;
declare function setBarcode(value: any): void;
export { barcodeID, setBarcode };
export default class GetScanResultClientRequestHandlerExt extends GetScanResultClientRequestHandler {
    executeAsync(request: GetScanResultClientRequest<GetScanResultClientResponse>): Promise<ClientEntities.ICancelableDataResult<GetScanResultClientResponse>>;
}
