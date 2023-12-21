import { IExtensionCommandContext } from "PosApi/Extend/Views/AppBarCommands";
import * as PickingAndReceivingDetailsView from "PosApi/Extend/Views/PickingAndReceivingDetailsView";
export default class PreUpdateInventoryDocumentTrigger extends PickingAndReceivingDetailsView.PickingAndReceivingDetailsExtensionCommandBase {
    private _selectedJournalLine;
    private _journalLines;
    private _journal;
    private _receipt;
    constructor(context: IExtensionCommandContext<PickingAndReceivingDetailsView.IPickingAndReceivingDetailsToExtensionCommandMessageTypeMap>);
    protected init(state: PickingAndReceivingDetailsView.IPickingAndReceivingDetailsExtensionCommandState): void;
    protected execute(): void;
}
