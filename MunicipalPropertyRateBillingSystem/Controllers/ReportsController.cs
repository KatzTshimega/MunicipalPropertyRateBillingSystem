using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class ReportsController : Controller
    {
        public IActionResult UnbilledAccounts()
        {
            return View();
        }
        public IActionResult BilledAccounts()
        {
            return View();
        }
        public IActionResult PaidAccounts()
        {
            return View();
        }
        public IActionResult UnpaidAccounts()
        {
            return View();
        }
        public IActionResult CustomerReport()
        {
            return View();
        }
        public IActionResult PropertyReport()
        {
            return View();
        }
        public IActionResult ChangeReport()
        {
            return View();
        }
        public IActionResult OversightReport()
        {
            return View();
        }
    }
}
