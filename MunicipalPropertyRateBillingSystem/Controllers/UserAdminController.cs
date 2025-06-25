using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class UserAdminController : Controller
    {
        public IActionResult NewEmployee()
        {
            return View();
        }
        public IActionResult AddPosition()
        {
            return View();
        }
        public IActionResult SystemRights()
        {
            return View();
        }
        public IActionResult Departments()
        {
            return View();
        }

    }
}
