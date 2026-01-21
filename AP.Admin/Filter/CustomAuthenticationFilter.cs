using System;  
using System.Web.Mvc;  
using System.Web.Mvc.Filters;  
using System.Web.Routing;  
  
namespace AP.Admin.Models
{  
    public class kuldipFilter:AuthorizeAttribute  
    {  
        public void OnAuthentication(AuthenticationContext filterContext)  
        {  
            if (string.IsNullOrEmpty(Convert.ToString(filterContext.HttpContext.Request.Cookies["Username"].Values)))  
            {  
                filterContext.Result = new HttpUnauthorizedResult();  

            }  
        }  
        public void OnAuthenticationChallenge(AuthenticationChallengeContext filterContext)  
        {  
            if (filterContext.Result == null || filterContext.Result is HttpUnauthorizedResult)  
            {  
                //Redirecting the user to the Login View of Account Controller  
                filterContext.Result = new RedirectToRouteResult(  
                new RouteValueDictionary  
                {  
                     { "controller", "Login" },  
                     { "action", "Index" }  
                });  
            }  
        }  
    }  
}  