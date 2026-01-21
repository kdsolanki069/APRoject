using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Filters
{
    public class RequireHttpsAttribute 
    {
        public int Port { get; set; }

        public RequireHttpsAttribute()
        {
            Port = 443;
        }

        //public override void OnAuthorization(HttpActionContext actionContext)
        //{
        //    var request = actionContext.Request;

        //    if (request.RequestUri.Scheme != Uri.UriSchemeHttps)
        //    {
        //        var response = new HttpResponseMessage();

        //        if (request.Method == HttpMethod.Get || request.Method == HttpMethod.Head)
        //        {
        //            var uri = new UriBuilder(request.RequestUri);
        //            uri.Scheme = Uri.UriSchemeHttps;
        //            uri.Port = this.Port;

        //            response.StatusCode = HttpStatusCode.Found;
        //            response.Headers.Location = uri.Uri;
        //        }
        //        else
        //        {
        //            response.StatusCode = HttpStatusCode.Forbidden;
        //            response.ReasonPhrase = "HTTPS Required";
        //            response.Content = new StringContent("{ \"Collections Server Message\" : \"This request required all communication over https protocol.\" }", Encoding.UTF8, "application/json");

        //        }

        //        actionContext.Response = response;
        //    }
        //    else
        //    {
        //        base.OnAuthorization(actionContext);
        //    }
        //}
    }
}
