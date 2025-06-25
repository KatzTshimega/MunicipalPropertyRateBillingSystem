using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class ReadingsController : Controller
    {
        public IActionResult CaptureReadings()
        {
            return View();
        }


        public IActionResult Verifications()
        {
            return View();
        }
    }
}
