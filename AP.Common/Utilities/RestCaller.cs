using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Net;
using Newtonsoft.Json;
using System.Configuration;

namespace AP.Common.Utilities
{
    //public class RestCaller<T>
    //{
    //    private static readonly string API_URL = "apiURL";

    //    public delegate IPEndPoint BindIPEndPoint(ServicePoint servicePoint, IPEndPoint remoteEndPoint, int retryCount);

    //    public static void SetupRESTChannel(HttpClient client)
    //    {
    //        client.BaseAddress = new Uri(ConfigurationManager.AppSettings[API_URL]);
    //        client.DefaultRequestHeaders.Accept.Clear();
    //        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    //    }

    //    public static IPEndPoint BindIPEndPointCallback(ServicePoint servicePoint, IPEndPoint remoteEndPoint, int retryCount)
    //    {
    //        return new IPEndPoint(IPAddress.Any, 5000);
    //    }

    //    public static HttpClient GetThreadHttpClient(string token)
    //    {
    //        HttpClient client = Thread.GetData(Thread.GetNamedDataSlot("__HttpClientObject")) as HttpClient;
    //        IEnumerable<string> values;
    //        string session = string.Empty;
            
    //        if (client == null)
    //        {
    //            client = new HttpClient();
    //            SetupRESTChannel(client);
    //            Thread.SetData(Thread.GetNamedDataSlot("__HttpClientObject"), client);
    //        }

    //        //Added by Parth to Check if Header Already Exists or not.
    //        if (client.DefaultRequestHeaders.TryGetValues("Authorization", out values))
    //        {
    //            session = values.FirstOrDefault();
    //        }

    //        if (token != null && session == string.Empty)
    //        {
    //            client.DefaultRequestHeaders.Add("Authorization", "bearer " + token);
    //        }

    //        return client;
    //    }


    //    public T ExecuteGETA(string token, string query)
    //    {
    //        var client = GetThreadHttpClient(token);

    //        T output = default(T);

    //        using (Task<HttpResponseMessage> taskRes = client.GetAsync(query))
    //        {
    //            taskRes.Wait();
    //            var response = taskRes.Result;

    //            if (response.IsSuccessStatusCode)
    //            {
    //                using (Task<T> tskJson = response.Content.ReadAsAsync<T>())
    //                {
    //                    tskJson.Wait();
    //                    output = tskJson.Result;
    //                }
    //            }
    //            else
    //            {
    //                throw new Exception(response.ReasonPhrase);
    //            }
    //        }

    //        return output;
    //    }


    //    public async Task<T> ExecuteGET(string token, string query)
    //    {
    //        var client = GetThreadHttpClient(token);
    //        T output = default(T);

    //        HttpResponseMessage response = await client.GetAsync(query).ConfigureAwait(continueOnCapturedContext: false);

    //        if (response.IsSuccessStatusCode)
    //        {
    //            Task<T> tskJson = response.Content.ReadAsAsync<T>();
    //            output = tskJson.Result;
    //        }

    //        return output;
    //    }

    //    public T ExecutePOSTA(string token, string query, object o)
    //    {
    //        var client = GetThreadHttpClient(token);
    //        T output = default(T);

    //        using (Task<HttpResponseMessage> taskResponse = client.PostAsJsonAsync(query, o))
    //        {
    //            taskResponse.Wait();

    //            var response = taskResponse.Result;

    //            if (response.IsSuccessStatusCode)
    //            {
    //                using (Task<T> tskJson = response.Content.ReadAsAsync<T>())
    //                {
    //                    tskJson.Wait();
    //                    output = tskJson.Result;
    //                    return output;
    //                }
    //            }
    //            else
    //            {
    //                throw new Exception(response.ReasonPhrase);
    //            }

    //        }
    //    }


    //    public async Task<T> ExecutePOST(string token, string query, object o)
    //    {
    //        var client = GetThreadHttpClient(token);
    //        T output = default(T);

    //        var response = await client.PostAsJsonAsync(query, o).ConfigureAwait(continueOnCapturedContext: false);

    //        if (response.IsSuccessStatusCode)
    //        {
    //            Task<T> tskJSon = response.Content.ReadAsAsync<T>();
    //            output = tskJSon.Result;
    //        }

    //        return output;
    //    }
    //}
}
