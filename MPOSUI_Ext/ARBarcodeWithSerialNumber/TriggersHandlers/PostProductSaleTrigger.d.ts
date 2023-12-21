import * as Triggers from "PosApi/Extend/Triggers/ProductTriggers";
export default class PostProductSaleTrigger extends Triggers.PostProductSaleTrigger {
    execute(options: Triggers.IPostProductSaleTriggerOptions): Promise<void>;
}
