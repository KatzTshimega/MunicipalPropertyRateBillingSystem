using Microsoft.AspNetCore.Mvc;

namespace MunicipalPropertyRateBillingSystem.Controllers
{
    public class AccountController : Controller
    {

        public IActionResult Login()
        {
            return View();
        }

        // POST: /Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogIn()
        {
          
                 //return View();
               return RedirectToAction("Dashboard", "Applicant");
        }


        public IActionResult CreateNewAccount()
        {
            return View();
        }

        public IActionResult AccountManager()
        {
            return View();
        }

    }
}
