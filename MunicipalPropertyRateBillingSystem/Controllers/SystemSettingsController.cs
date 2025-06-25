using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class SystemSettingsController : Controller
    {
        public IActionResult PropertyOwnerType()
        {
            return View();
        }

        public IActionResult PropertyCategory()
        {
            return View();
        }

        public IActionResult PropertyUse()
        {
            return View();
        }

        public IActionResult ServiceChargeType()
        {
            return View();
        }

        public IActionResult AccountType()
        {
            return View();
        }

        public IActionResult AccountSubType()
        {
            return View();
        }

        public IActionResult AccountStatuses()
        {
            return View();
        }

        public IActionResult MunicipalityDetails()
        {
            return View();
        }
    }
}
