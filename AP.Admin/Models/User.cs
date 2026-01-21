using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YogSatra.Web.Models
{
    public class User
    {
        public int UserId { get; set; }
        public Nullable<int> CustomerId { get; set; }
        public int ClientId { get; set; }
        public Nullable<int> RoleId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Hint1 { get; set; }
        public string Hint2 { get; set; }
        public string Hint3 { get; set; }
        public string Locked { get; set; }
        public string Active { get; set; }
        public string ProfilePic { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string InvoiceType { get; set; }
        public int CustomPaymentAllow { get; set; }
        public int AllowPaymentBy { get; set; }
        public int AllowConvenienceFee { get; set; }
        public string State { get; set; }
        public string MinimumPaymentAmount { get; set; }
        public string PaymentTo { get; set; }
        public string PaymentFrom { get; set; }
        public string Name { get; set; }
    }
}