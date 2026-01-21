using AP.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AP.Admin.Models
{
    public class SessionHelper
    {
        public static string token
        {
            get { return Convert.ToString(HttpContext.Current.Session["token"]); }
            set { HttpContext.Current.Session["token"] = value; }
        }
     
        public static Int32 ClientID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["ClientID"]); }
            set { HttpContext.Current.Session["ClientID"] = value; }
        }
        public static Int32 RoleID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["RoleID"]); }
            set { HttpContext.Current.Session["RoleID"] = value; }
        }
        public static string Username
        {
            get { return Convert.ToString(HttpContext.Current.Session["Username"]); }
            set { HttpContext.Current.Session["Username"] = value; }
        }
        public static Int32 UserID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["UserID"]); }
            set { HttpContext.Current.Session["UserID"] = value; }
        }
        public static Int32 CustomerID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["CustomerID"]); }
            set { HttpContext.Current.Session["CustomerID"] = value; }
        }
        public static Int32 isPaymentPlan
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["isPaymentPlan"]); }
            set { HttpContext.Current.Session["isPaymentPlan"] = value; }
        }
        public static Int32 enabledpaymentPlan
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["enabledpaymentPlan"]); }
            set { HttpContext.Current.Session["enabledpaymentPlan"] = value; }
        }
        public static Int32 enabledDiscount
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["enabledDiscount"]); }
            set { HttpContext.Current.Session["enabledDiscount"] = value; }
        }
        public static Int32 ShadowClientID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["ShadowClientID"]); }
            set { HttpContext.Current.Session["ShadowClientID"] = value; }
        }
        public static string ShadowClientName
        {
            get { return Convert.ToString(HttpContext.Current.Session["ShadowClientName"]); }
            set { HttpContext.Current.Session["ShadowClientName"] = value; }
        }
        public static Int32 ShadowCustomerID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["ShadowCustomerID"]); }
            set { HttpContext.Current.Session["ShadowCustomerID"] = value; }
        }
        public static Int32 ShadowRoleID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["ShadowRoleID"]); }
            set { HttpContext.Current.Session["ShadowRoleID"] = value; }
        }
        public static Int32 ShadowUserID
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["ShadowUserID"]); }
            set { HttpContext.Current.Session["ShadowUserID"] = value; }
        }
        public static Int32 CustomPaymentAllow
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["CustomPaymentAllow"]); }
            set { HttpContext.Current.Session["CustomPaymentAllow"] = value; }
        }
        public static Int32 AllowPaymentBy
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["AllowPaymentBy"]); }
            set { HttpContext.Current.Session["AllowPaymentBy"] = value; }
        }
        public static string LatestInvoiceNumber
        {
            get { return Convert.ToString(HttpContext.Current.Session["LatestInvoiceNumber"]); }
            set { HttpContext.Current.Session["LatestInvoiceNumber"] = value; }
        }
        public static Int32 AllowConvenienceFee
        {
            get { return Convert.ToInt32(HttpContext.Current.Session["AllowConvenienceFee"]); }
            set { HttpContext.Current.Session["AllowConvenienceFee"] = value; }
        }
        public static string State
        {
            get { return Convert.ToString(HttpContext.Current.Session["State"]); }
            set { HttpContext.Current.Session["State"] = value; }
        }
        public static string UserRolePermission
        {
            get { return Convert.ToString(HttpContext.Current.Session["UserRolePermission"]); }
            set { HttpContext.Current.Session["UserRolePermission"] = value; }
        }
        public static string Datafeedtype
        {
            get { return Convert.ToString(HttpContext.Current.Session["Datafeedtype"]); }
            set { HttpContext.Current.Session["Datafeedtype"] = value; }
        }
        public static string MinimumPaymentAmount
        {
            get { return Convert.ToString(HttpContext.Current.Session["MinimumPaymentAmount"]); }
            set { HttpContext.Current.Session["MinimumPaymentAmount"] = value; }
        }
        public static string AccountNumber
        {
            get { return Convert.ToString(HttpContext.Current.Session["AccountNumber"]); }
            set { HttpContext.Current.Session["AccountNumber"] = value; }
        }
        public static string Email
        {
            get { return Convert.ToString(HttpContext.Current.Session["Email"]); }
            set { HttpContext.Current.Session["Email"] = value; }
        }
        public static string Code
        {
            get { return Convert.ToString(HttpContext.Current.Session["Code"]); }
            set { HttpContext.Current.Session["Code"] = value; }
        }



    }
}