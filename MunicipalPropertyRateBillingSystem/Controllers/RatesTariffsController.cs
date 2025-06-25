using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class RatesTariffsController : Controller
    {
        public IActionResult PropertyRates()
        {
            return View();
        }
        public IActionResult Tariffs()
        {
            return View();
        }
    }
}
