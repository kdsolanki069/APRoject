using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Constants
{
    public static class TransactionServiceResponseCodes
    {
        public static int RC_PassFromStage = -1;
        //general error
        public static int EC_APPROVED = 0;
        public static int EC_DECLINED = 1;
        public static int EC_TimeOut = 2;

        //General
        public static int EC_INTERNAL_SERVER_ERROR = 500;

        public static int EC_DataBase_ERROR = 600;

        //Missing or invalid data error codes
        public static int EC_INVALID_PROPERTYFILE = 1001;
        public static int EC_UNAUTHORIZED_MERCHANT = 1002;
        public static int EC_UNAUTHORIZED_GATEWAY = 1003;
        public static int EC_MISSING_INFORMATION = 1004;
        public static int EC_INVALID_MerchantPin = 1005;
        public static int EC_INVALID_TRANSACTION_TYPE = 1006;
        public static int EC_NORESPONSE = 1007;

        //Internal server error
        public static int EC_INTERNAL_SERVER_ERROR_CCSALE = 2001;
        public static int EC_INTERNAL_SERVER_ERROR_CCVerify = 2002;
        public static int EC_INTERNAL_SERVER_ERROR_CCRefund = 2003;
        public static int EC_INTERNAL_SERVER_ERROR_CCVoid = 2004;
        public static int EC_INTERNAL_SERVER_ERROR_ACHSALE = 2005;
        public static int EC_INTERNAL_SERVER_ERROR_ACHVoid = 2006;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileAdd = 2007;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileSale = 2008;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileUpdate = 2009;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileDelete = 2010;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileRetrive = 2011;
        public static int EC_INTERNAL_SERVER_ERROR_ProfileCredit = 2012;
        public static int EC_INTERNAL_SERVER_ERROR_ACHRefund = 2013;
        //
        public static int EC_INVALID_TRANSACTION = 1025;
        public static int EC_INVALID_TRANSACTION_RETURN = 1026;
        public static int EC_INVALID_TRANSACTION_AMOUNT = 1027;
        
    }
}
