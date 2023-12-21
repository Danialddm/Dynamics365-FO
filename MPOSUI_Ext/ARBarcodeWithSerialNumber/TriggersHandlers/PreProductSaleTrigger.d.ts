import * as Triggers from "PosApi/Extend/Triggers/ProductTriggers";
import { ClientEntities } from "PosApi/Entities";
export default class PreProductSaleTrigger extends Triggers.PreProductSaleTrigger {
    execute(options: Triggers.IPreProductSaleTriggerOptions): Promise<ClientEntities.ICancelable>;
}
