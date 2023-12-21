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
    namespace Commerce.Runtime.Extensions.ARPrepaymentSuspendTransactions
    {
        public class PrepaymentSuspendTransactions : IRequestTriggerAsync
        {
            public IEnumerable<Type> SupportedRequestTypes
            {
                get
                {
                    return new[] { typeof(SuspendCartRequest) };
                }
            }
            public async Task OnExecuted(Request request, Response response)
            {
                //Custom logic

                // The only stub to handle async signature 
                await Task.CompletedTask;
            }
            public async Task OnExecuting(Request request)
            {
                await Task.CompletedTask;
                throw new DataValidationException(DataValidationErrors.Microsoft_Dynamics_Commerce_Runtime_StreetLengthExceeded, "yes daniii");

            }
        }
    }
}
