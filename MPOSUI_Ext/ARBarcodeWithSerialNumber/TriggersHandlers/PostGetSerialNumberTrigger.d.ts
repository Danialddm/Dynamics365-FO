import * as Triggers from "PosApi/Extend/Triggers/ProductTriggers";
export default class PostGetSerialNumberTrigger extends Triggers.PostGetSerialNumberTrigger {
    execute(options: Triggers.IPostGetSerialNumberTriggerOptions): Promise<void>;
    getSerialCompare(options: Triggers.IPostGetSerialNumberTriggerOptions): boolean;
}
