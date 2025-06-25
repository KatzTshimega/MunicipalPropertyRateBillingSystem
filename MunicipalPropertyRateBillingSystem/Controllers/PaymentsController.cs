using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class PaymentsController : Controller
    {
        public IActionResult AccountPayment()
        {
            return View();
        }
        public IActionResult AccountReconciliation()
        {
            return View();
        }
        public IActionResult CreditNoteApproval()
        {
            return View();
        }
        public IActionResult DebitNoteApproval()
        {
            return View();
        }

    }
}
