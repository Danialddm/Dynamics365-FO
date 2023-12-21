//ddm
import { GetScanResultClientRequestHandler } from "PosApi/Extend/RequestHandlers/ScanResultsRequestHandlers";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import { GetScanResultClientRequest, GetScanResultClientResponse } from "PosApi/Consume/ScanResults";
import { GetSerialNumberClientRequest, GetSerialNumberClientResponse } from "PosApi/Consume/Products";
let barcodeID;
function setBarcode(value) {
    barcodeID = value;
}

export { barcodeID, setBarcode };

/**
 * Override request handler class for getting scan result request.
 */
export default class GetScanResultClientRequestHandlerExt extends GetScanResultClientRequestHandler {

    /**
     * Executes the request handler asynchronously.
     * @param {GetScanResultClientRequest<GetScanResultClientResponse>} The request containing the response.
     * @return {Promise<ICancelableDataResult<GetScanResultClientResponse>>} The cancelable promise containing the response.
     */
    public executeAsync(request: GetScanResultClientRequest<GetScanResultClientResponse>):
        Promise<ClientEntities.ICancelableDataResult<GetScanResultClientResponse>>
    {
        let newBarCode: string = request.scanText;
        barcodeID = newBarCode;
        let newRequest: GetScanResultClientRequest<GetScanResultClientResponse> =
            new GetScanResultClientRequest<GetScanResultClientResponse>(newBarCode);
        return this.defaultExecuteAsync(newRequest);
    }
}
