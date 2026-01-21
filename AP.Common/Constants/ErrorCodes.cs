using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Constants
{
    public static class ErrorCodes
    {
        public static string MISSING_PASSWORD = "Password is missing";
        public const int EC_DECLINED = 1;

        public static string GetErrorString(int ErrorCode)
        {
            return "Missing Error Description";
        }
    }
}

//int ResponseCode;
//String ResponseMessage; // Short Message
//String ResponseDetails; // Message Detail
//String Origin; //Services
//Datetime Timestamp;

//ColssysException 


//{
//    "accessBillDetails" : 
//            {
//                 "CustomerID" : "-1",
//                 "ClientID": "-1",
//                 "AccountNumber" : "sdf",
//                 "LastName" : "2342"
//            },
//    "status" :  1,
//    "message" : "Success"
//}
