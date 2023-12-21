import { IExtensionContext } from "PosApi/Framework/ExtensionContext";
export default class MessageDialog {
    static show(context: IExtensionContext, message: string): Promise<string>;
}
