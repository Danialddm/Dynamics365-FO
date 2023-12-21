//ddm
import { GetSerialNumberClientRequestHandler } from "PosApi/Extend/RequestHandlers/ProductsRequestHandlers";
import { GetSerialNumberClientRequest, GetSerialNumberClientResponse } from "PosApi/Consume/Products";
import { ClientEntities, ProxyEntities } from "PosApi/Entities";
import { GetScanResultClientRequest, GetScanResultClientResponse } from "PosApi/Consume/ScanResults";
import { barcodeID, setBarcode } from "./GetScanResultClientRequestHandlerExt";
import BarcodeScannerGetBarcodesRequestHandler from "./GetSerialNumberClientRequestHandlerExt"
import { ObjectExtensions, StringExtensions } from "PosApi/TypeExtensions";


/**
 * Override request handler class for getting serial number request.
 */
export default class GetSerialNumberClientRequestHandlerExt extends GetSerialNumberClientRequestHandler
{

    /**
     * Executes the request handler asynchronously.
     * @param {GetSerialNumberClientRequest<GetSerialNumberClientResponse>} request The request containing the response.
     * @return {Promise<ICancelableDataResult<GetSerialNumberClientResponse>>} The cancelable promise containing the response.
     */
    public executeAsync(request: GetSerialNumberClientRequest<GetSerialNumberClientResponse>):
        Promise<ClientEntities.ICancelableDataResult<GetSerialNumberClientResponse>>
    {
        let barcodeCheck: string = barcodeID;
        if (barcodeCheck !== undefined) {


            let response: GetSerialNumberClientResponse = new GetSerialNumberClientResponse(barcodeID);
            return Promise.resolve(<ClientEntities.ICancelableDataResult<GetSerialNumberClientResponse>>{
                canceled: false,
                data: response
            });
        }
        else {


            return this.defaultExecuteAsync(request);
        }
    }
}

