import { GetSerialNumberClientRequestHandler } from "PosApi/Extend/RequestHandlers/ProductsRequestHandlers";
import { GetSerialNumberClientRequest, GetSerialNumberClientResponse } from "PosApi/Consume/Products";
import { ClientEntities } from "PosApi/Entities";
export default class GetSerialNumberClientRequestHandlerExt extends GetSerialNumberClientRequestHandler {
    executeAsync(request: GetSerialNumberClientRequest<GetSerialNumberClientResponse>): Promise<ClientEntities.ICancelableDataResult<GetSerialNumberClientResponse>>;
}
