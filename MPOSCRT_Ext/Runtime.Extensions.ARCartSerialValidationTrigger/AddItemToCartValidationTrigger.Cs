using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Microsoft.Dynamics.Commerce.Runtime.Data;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;


namespace ARADA
{
    namespace Commerce.Runtime.Extensions.ARAddItemToCartSerialValidationTrigger
    {
        public class AddItemToCartValidationTrigger : IRequestTriggerAsync
        {
            // <summary>
            /// Gets the supported requests for this trigger.
            /// </summary>
            public IEnumerable<Type> SupportedRequestTypes
            {
                get
                {
                    return new[] { typeof(SaveCartVersionedDataRequest) };
                }
            }

            /// <summary>
            /// Post trigger code.
            /// </summary>
            /// <param name="request">The request.</param>
            /// <param name="response">The response.</param>
            public async Task OnExecuted(Request request, Response response)
            {
                //Custom logic

                // The only stub to handle async signature 
                await Task.CompletedTask;
            }

            /// <summary>
            /// Pre trigger code
            /// </summary>
            /// <param name="request">The request.</param>
            public async Task OnExecuting(Request request)
            {
                List<string> serialNo = new List<string>();
                string lastSerial = string.Empty;
                int count = ((Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages.SaveCartVersionedDataRequest)(request)).SalesTransaction.ActiveSalesLines.Count;
                Boolean _isSuspended = ((Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages.SaveCartVersionedDataRequest)(request)).SalesTransaction.IsSuspended;
                // get serial number
                if (count != 0 && !_isSuspended)
                {
                    foreach (var item in ((Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages.SaveCartVersionedDataRequest)(request)).SalesTransaction.ActiveSalesLines)
                    {
                        if (!item.IsVoided)//&& ((Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages.SaveCartVersionedDataRequest)(request)).SalesTransaction.ExtensibleSalesTransactionType == ExtensibleSalesTransactionType.Sales)
                        {
                            serialNo.Add(item.SerialNumber);
                        }
                    }
                    lastSerial = serialNo[count - 1];
                    if (count > 1)
                    {
                        for (int i = 0; i < count - 1; i++)
                        {
                            if (serialNo[i] == lastSerial)
                            {
                                throw new DataValidationException(DataValidationErrors.Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberDuplicated, "find dplicate in the bill");
                            }
                        }
                    }
                    var query = new SqlPagedQuery(QueryResultSettings.SingleRecord)
                    {
                        DatabaseSchema = "ax",
                        Select = new ColumnSet(new string[] { "INVENTSERIALID", "TRANSACTIONID" }),
                        From = "RETAILTRANSACTIONSALESTRANS",
                        Where = "INVENTSERIALID = @serialNum AND DATAAREAID = @dataAreaId"
                    };

                    query.Parameters["@serialNum"] = lastSerial;
                    query.Parameters["@dataAreaId"] = request.RequestContext.GetChannelConfiguration().InventLocationDataAreaId;
                    using (var databaseContext = new DatabaseContext(request.RequestContext))
                    {
                        var extensionsResponse = await databaseContext.ReadEntityAsync<ExtensionsEntity>(query).ConfigureAwait(false);
                        ExtensionsEntity extensions = extensionsResponse.FirstOrDefault();
                        var inventSerialNo = extensions != null ? extensions.GetProperty("INVENTSERIALID") : "";
                        var transactionID = extensions != null ? extensions.GetProperty("TRANSACTIONID") : "";
                        if (inventSerialNo.ToString() == lastSerial)
                        {
                            var queryID = new SqlPagedQuery(QueryResultSettings.SingleRecord)
                            {
                                DatabaseSchema = "ax",
                                Select = new ColumnSet(new string[] { "TRANSACTIONID" }),
                                From = "RETAILTRANSACTIONTABLE",
                                Where = "TRANSACTIONID = @transactionId AND DATAAREAID = @dataAreaId AND ENTRYSTATUS = @state AND TYPE = @type"
                            };
                            queryID.Parameters["@transactionId"] = transactionID;
                            queryID.Parameters["@state"] = 0;
                            queryID.Parameters["@type"] = 2;
                            queryID.Parameters["@dataAreaId"] = request.RequestContext.GetChannelConfiguration().InventLocationDataAreaId;
                            var extensionsResponseID = await databaseContext.ReadEntityAsync<ExtensionsEntity>(queryID).ConfigureAwait(false);
                            ExtensionsEntity extensionsID = extensionsResponseID.FirstOrDefault();
                            var transID = extensionsID != null ? extensionsID.GetProperty("TRANSACTIONID") : "";
                            if (transID.ToString() != String.Empty)
                            {
                                throw new DataValidationException(DataValidationErrors.Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberDuplicated, "find dublicate in the DB");
                            }
                        }
                    }
                }//end of if count
                 //end of custom logic
                await Task.CompletedTask;
            }
        }
    }
}
