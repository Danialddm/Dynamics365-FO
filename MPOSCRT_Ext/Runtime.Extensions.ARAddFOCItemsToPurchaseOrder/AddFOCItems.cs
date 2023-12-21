using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.RealtimeServices.Messages;
using System;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Dynamics.Commerce.Runtime.Data;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using System.Windows.Forms;

namespace ARADA
{
    namespace Runtime.Extensions.ARAddFOCItemsToPurchaseOrder
    {
        public class ARAddFOCItemsToPurchaseOrder : IRequestTriggerAsync
        {
            public IEnumerable<Type> SupportedRequestTypes
            {
                get
                {
                    return new[] { typeof(SavePurchaseOrderRealtimeRequest) };
                }
            }
            public async Task OnExecuted(Request request, Response response)
            {
                await Task.CompletedTask;
            }
            public async Task OnExecuting(Request request)
            {
                try
                {
                    string all = string.Empty;
                    if (request == null)
                    {
                        throw new ArgumentNullException("request");
                    }
                    var po = ((Microsoft.Dynamics.Commerce.Runtime.RealtimeServices.Messages.SavePurchaseOrderRealtimeRequest)(request)).PurchaseOrder.OrderLines;
                    var poID = ((Microsoft.Dynamics.Commerce.Runtime.RealtimeServices.Messages.SavePurchaseOrderRealtimeRequest)(request)).PurchaseOrder.OrderId;
                    foreach (var item in po)
                    {
                        if (item.PurchaseReceivedNow != 0 && item.PurchaseReceivedNow > item.QuantityOrdered && item.PurchaseReceived == 0)
                        {
                            all += item.PurchaseReceivedNow.ToString() + "," +
                             item.RecordId.ToString() + "," +
                             item.QuantityOrdered + "," +
                             item.PurchaseReceived + ",";
                        }
                    }
                    if (all.Length > 0)
                    {
                        InvokeExtensionMethodRealtimeRequest extensionRequest = new InvokeExtensionMethodRealtimeRequest("addFOCitems", poID, all);
                        InvokeExtensionMethodRealtimeResponse response = await request.RequestContext.ExecuteAsync<InvokeExtensionMethodRealtimeResponse>(extensionRequest).ConfigureAwait(false);
                        ReadOnlyCollection<object> results = response.Result;
                        Boolean resValue = (bool)results[1];
                        if (!resValue)
                        {
                            throw new DataValidationException(DataValidationErrors.Microsoft_Dynamics_Commerce_Runtime_NotAllLinesSaved, "Error in PO realtime request. Some records could not be updated in the AX HQ(purchline table).");
                        }
                    }
                    await Task.CompletedTask;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }
    }
}
