using System;    
using System.Linq;  
using System.Web;  
using System.Web.Mvc;  
using System.Web.Routing;  

  
namespace AP.Admin.Models
{  
    public class CustomAuthorizeAttribute : AuthorizeAttribute  
    {  
        private readonly string[] allowedroles;  
        public CustomAuthorizeAttribute(params string[] roles)  
        {  
            this.allowedroles = roles;  
        }  
        protected override bool AuthorizeCore(HttpContextBase httpContext)  
        {  

        //    foreach (string str in httpContext.Request.Cookies["test"].Values)  
        //{  
        //     httpContext.Request.Cookies["test"].Values;  
        //}   
        //    bool authorize = false;  
        //    var userId = Convert.ToString(httpContext.Session["UserId"]);  
        //    if (!string.IsNullOrEmpty(userId))  
        //        using (var context = new SqlDbContext())  
        //        {  
        //            var userRole = (from u in context.Users  
        //                            join r in context.Roles on u.RoleId equals r.Id  
        //                            where u.UserId == userId  
        //                            select new  
        //                            {  
        //                                r.Name  
        //                            }).FirstOrDefault();  
        //            foreach (var role in allowedroles)  
        //            {  
        //                if (role == userRole.Name) return true;  
        //            }  
        //        }  
  
             bool authorize = false; 
            return authorize;  
        }  
  
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)  
        {  
            filterContext.Result = new RedirectToRouteResult(  
               new RouteValueDictionary  
               {  
                     { "controller", "Login" },  
                     { "action", "Index" }  
               });  
        }  
    }  
}  