//ddm
import * as Triggers from "PosApi/Extend/Triggers/ProductTriggers";
import { ClientEntities } from "PosApi/Entities";
import { StringExtensions } from "PosApi/TypeExtensions";
import { setBarcode } from "../Handlers/GetScanResultClientRequestHandlerExt";


export default class PostGetSerialNumberTrigger extends Triggers.PostGetSerialNumberTrigger {
    /**
     * Executes the trigger functionality.
     * @param {Triggers.IPostGetSerialNumberTriggerOptions} options The options provided to the trigger.
     * @return {Promise<void>} The promise as resolved or rejected
     */
    public execute(options: Triggers.IPostGetSerialNumberTriggerOptions): Promise<void>
    {
        this.context.logger.logInformational("Executing PostSerialInputTrigger with options " + JSON.stringify(options) + ".");

        if (StringExtensions.isNullOrWhitespace(options.serialNumber))
        {
            /* This condition is necessary if you want to continue allowing
               the feature of adding the serial number later */
            return Promise.resolve();
        }
        else if (this.getSerialCompare(options))
        {
            setBarcode(undefined);
            /* Does not add the item to the cart and shows an error message on the dialog */
            let error: ClientEntities.ExtensionError = new ClientEntities.ExtensionError
                ("The serial number entered has been rejected. Please enter a unique value again or Add Later.");
            return Promise.reject(error);
        } else
        {
            /* Adds the item to the cart and dismisses the dialog */
            return Promise.resolve();
        }
    }
    public getSerialCompare(options: Triggers.IPostGetSerialNumberTriggerOptions): boolean
    {
        let result: boolean = false;
        options.cart.CartLines.forEach(function (cartLine) {
            let currentSerial: string = cartLine.SerialNumber;
            if (options.serialNumber === currentSerial) {
                result = true;
            }
        });
        return result;
    }
}

