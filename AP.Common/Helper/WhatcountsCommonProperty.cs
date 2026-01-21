using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    public class WhatcountsCommonProperty
    {
        public class WhatCountPayloadVariable
        {
            #region " Template Name "
            public string customer_email_address = "Account_Linked";
            public string client_name = "Account_Unlinked";
            public string customer_portal_url = "Activate_Email";
            public string account_number = "Activate_User";
            public string csr_portal_url = "Autopay_Change";
            public string customer_support_name = "Autopay_Over_Max";
            public string customer_support_phone = "Balance_Update";
            public string customer_support_email = "Bill_Ready";
            public string customer_fname = "CC_Expired";
            public string customer_lname = "CC_Expiring";
            public string cc_last_four = "Email_Change";
            public string cc_type = "Forgot_Password";
            public string temp_password = "Forgot_Username";
            public string username = "Legal_Updates";
            public string month = "Notification_Change";
            public string year = "Paid_in_Full";
            public string day = "Paperless_Change";
            public string payment_amount = "Payment_Declined";
            public string payment_due_amount = "Payment_Due";
            public string last_payment_date = "Payment_Made";
            public string next_payment_date = "Pay_Method_Added";
            public string payment_status = "Pay_Method_Changed";
            public string confirmation_number = "Pay_Method_Deleted";
            public string biller_code = "Payment_Reminder";
            public string client_code = "Payment_Returned";
            public string merchant_code = "System_Maintenance";
            public string stored_profile_id = "stored_profile_id";
            public string transaction_acct_id = "transaction_acct_id";
            public string transaction_name = "transaction_name";
            public string transaction_state = "transaction_state";
            public string gateway_name = "gateway_name";
            public string invoice_number = "invoice_number";
            public string payment_type = "payment_type";
            public string date = "date";


            #endregion

            #region " Notification Name "
            public class NotificationName
            {
                public string AccountLinkedtoyourAccount = "Account Linked to your Account";//1
                public string ActivateNewEmailAddress = "Activate New Email Address";//2
                public string ActivateUser = "Activate User";//3
                public string AutopayoverMax = "Autopay over Max";//4
                public string BalanceUpdated = "Balance Updated";//5
                public string BillReady = "Bill Ready";//6
                public string ChangetoAutopaySetting = "Change to Autopay Setting";//7
                public string ChangetoNotificationSetting = "Change to Notification Setting";//8
                public string CreditCardExpiredNotice = "Credit Card Expired Notice";//9
                public string CreditCardExpiringNotice = "Credit Card Expiring Notice";//10
                public string ForgotPassword = "Forgot Password";//11
                public string ChangetoPaperlessSetting = "Change to Paperless Setting";//12
                public string ForgotUsername = "Forgot Username";//13
                public string LastMinuteReminder = "Last Minute Reminder";//14
                public string LegalTermsUpdated = "Legal Terms Updated";//15
                public string LinkedAccountRemoved = "Linked Account Removed";//16
                public string NotificationofEmailAddressChange = "Notification of Email Address Change";//17
                public string PaidinFull = "Paid in Full";//18
                public string PastDue1stNotice = "Past Due 1st Notice";//19
                public string PastDue2ndNotice = "Past Due 2nd Notice";//20
                public string PaymentCancelled = "Payment Cancelled";//21
                public string PaymentDeclined = "Payment Declined";//22
                public string PaymentDueNow = "Payment Due Now";//23
                public string PaymentMade = "Payment Made";//24
                public string PaymentMethodAdded = "Payment Method Added";//25
                public string PaymentMethodChanged = "Payment Method Changed";//26
                public string PaymentMethodDeleted = "Payment Method Deleted";//27
                public string PaymentReminder = "Payment Reminder";//28
                public string PaymentReturned = "Payment Returned";//29
                public string SignUp = "SignUp";//30
                public string SystemMaintenance = "System Maintenance";//31
                //public string Welcome = "Welcome";
                public string RecurringAutopayDeclined = "Recurring Autopay Declined";//32
                public string AutopayPaymentMethodChange = "Autopay Payment Method Change";//33
                public string Receipt = "Receipt";//34/33
                public string RefundReceipt = "Refund Receipt";//35/34
                public string SupportTicket = "Support Ticket";//36/35
                public string RecurringAutopayActivate = "Recurring Autopay Activate";//37//36
                public string AutopaySettingDisabled = "Autopay Setting disabled";//38//37
                public string ResetPassword = "ResetPassword";//39//38
                public string Paymentschedule = "Payment schedule";//40//39
                public string SupportTicketUpdate = "Support Ticket Update";//41//40
                public List<string> GetNotificationList()
                {
                    List<string> lstResult = new List<string>();
                    lstResult.Add(AccountLinkedtoyourAccount);//1
                    lstResult.Add(ActivateNewEmailAddress);//2
                    lstResult.Add(ActivateUser);//3
                    lstResult.Add(AutopayoverMax);//4
                    lstResult.Add(BalanceUpdated);//5
                    lstResult.Add(BillReady);//6
                    lstResult.Add(ChangetoAutopaySetting);//7
                    lstResult.Add(ChangetoNotificationSetting);//8                  
                    lstResult.Add(CreditCardExpiredNotice);//9
                    lstResult.Add(CreditCardExpiringNotice);//10                   
                    lstResult.Add(ForgotPassword);//11
                    lstResult.Add(ChangetoPaperlessSetting);//12
                    lstResult.Add(ForgotUsername);//13
                    lstResult.Add(LastMinuteReminder);//14
                    lstResult.Add(LegalTermsUpdated);//15
                    lstResult.Add(LinkedAccountRemoved);//16
                    lstResult.Add(NotificationofEmailAddressChange);//17
                    lstResult.Add(PaidinFull);//18
                    lstResult.Add(PastDue1stNotice);//19
                    lstResult.Add(PastDue2ndNotice);//20
                    lstResult.Add(PaymentCancelled);//21
                    lstResult.Add(PaymentDeclined);//22
                    lstResult.Add(PaymentDueNow);//23
                    lstResult.Add(PaymentMade);//24
                    lstResult.Add(PaymentMethodAdded);//25
                    lstResult.Add(PaymentMethodChanged);//26
                    lstResult.Add(PaymentMethodDeleted);//27
                    lstResult.Add(PaymentReminder);//28
                    lstResult.Add(PaymentReturned);//29
                    lstResult.Add(SignUp);//30
                    lstResult.Add(SystemMaintenance);//31
                    lstResult.Add(RecurringAutopayDeclined);//32
                    lstResult.Add(AutopayPaymentMethodChange);//33
                    lstResult.Add(Receipt);//34
                    lstResult.Add(RefundReceipt);//35
                    lstResult.Add(SupportTicket);//36
                    lstResult.Add(RecurringAutopayActivate);//37
                    lstResult.Add(AutopaySettingDisabled);//38
                    lstResult.Add(ResetPassword);//39
                    lstResult.Add(Paymentschedule);//40                    
                    lstResult.Add(SupportTicketUpdate);//41                

                    return lstResult;

                }


            }



           


            #endregion
        }
    }

}
