using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
   public class EnumMessages
    {
        /// <summary>
        /// API Services Used in Transaction Service API Calls
        /// Each API call has predefined Service Value
        /// </summary>
        public enum APIServices
        {
            Sale = 2,
            Authentication = 30,
            Refund = 4,
            Void = 5,
            ProfileAdd = 7,
            ProfileSale = 8,
            ProfileUpdate = 9,
            ProfileDelete = 10,
            ProfileRetrive = 12,
            ProfileCredit = 13
        }

        public enum EnumTransactionState
        {
            Pending_Sale = 1,
            Pending_Authorize = 2,
            Authorized = 3,
            Declined = 4,
            Voided = 5,
            Settled = 6,
            Pending_Settlement = 7,
            Pending_Return = 8,
            Pending_Void = 9,
            Verified = 10,
            Accepted = 11,
            Pending_ACH_Clearance = 12,
            Pending_ACH_Settlement = 13,
            ACH_Funded = 14,
            ACH_Settled = 15,
            Pending_ACH_Research = 16,
            Pending_Authentication = 17,
            Authenticated = 18,
            Settlement_Declined = 19,
            Refunded = 20,
            Profile_ADD = 21,
            Profile_Sale = 22,
            Profile_Update = 23,
            Profile_Delete = 24,
            Profile_Retrive = 25,
            Profile_Credit = 26,
            TORs = 27
        }

        public enum EnumTransactionType
        {
            Credit_Card_Sale = 1,
            Credit_Card_Void = 2,
            Credit_Card_Authenticate = 3,
            Credit_Card_Return = 4,
            ACH_Sale = 5,
            Profile_ADD = 6,
            Profile_Sale = 7,
            Profile_Update = 8,
            Profile_Delete=9,
            Profile_Retrive = 10,
            Profile_Credit = 11,
            ACH_Void = 12,
            ACH_Refund = 13,
            ACH_Return = 14,
            ACH_Settlement = 15
        }
        public enum WhatCountsResponseCodes
        {
            Success = 0,
            Failure =1 ,
            User_manager_initialized = 2,
            User_not_found = 3,
            Invalid_version = 4,
            Invalid_key = 5,
            Invalid_data = 6,
            URL_not_found = 7,
            Invalid_realm = 8,
            Invalid_envelope = 9,
            Unknown_command  = 10,
            Session_manager_initialization = 11,
            Session_manager_not_found = 12,
            Invalid_IP = 13,
            Named_entity_exists = 14,
            Requested_object_not_found = 15,
            API_method_not_implemented = 16,
            API_method_not_allowed_for_current_user = 17,
            Subscriber_is_opted_out = 18,
            Invalid_folder_ID_for_realm = 19,
            Invalid_folder_type_for_realm = 20

        }

        public enum AuditLogEvents
        {
            User_Logged_In = 1,
            User_Logged_Out = 2,
            Payment_Made = 3,
            Payment_Rejected = 4,
            Customer_Profile_Changed=5,
            Client_Profile_Changed=6,
            Change_Allow_Payment_By=7,
            Change_Allow_Custom_Payment=8,
            Change_Collection_Type=9,
            Change_Allow_Payment_Plan=10,
            Change_Payment_Plan_Distributaion=11,
            Change_Invoice_Type=12,
            Change_Convenience_Fees_Applicability=13,
            Change_Payment_Gateway=14,
            Change_Batch_Schedule=15,
            Change_ACH_Fees=16,
            Change_Credit_Card_Fees=17,
            Change_DataFeed_Type=18,
            Reset_Password=19,
            Accept_Terms_And_Condition = 30
        }

        public class JobNames
        {
        public string CCBatchJob = "BatchJobCC";
        public string FileImportJob= "FileImportJob";
        public string FileExportJob = "FileExportJob";
        public string ACHBatchJob= "BatchJobACH";
        public string ACHReturnBatchJob = "BatchJobReturn";
        public string CustomerDataImportJob = "CustomerDataImport";
        public string eSuppressionExportJob = "SUPPRESSION";
        public string PaymentExportJob = "PAYMENT";
        public string OSGMonthlyExportJob = "OSGACCOUNTING";
        }

    }
}
