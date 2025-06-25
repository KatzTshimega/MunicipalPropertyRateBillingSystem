using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class InquiriesController : Controller
    {
        public IActionResult LodgeEnquiry()
        {
            return View();
        }
        public IActionResult ViewDisputers()
        {
            return View();
        }
        public IActionResult ViewCompliments()
        {
            return View();
        }
        public IActionResult ViewComplaints()
        {
            return View();
        }
        public IActionResult ViewQueries()
        {
            return View();
        }
    }
}
