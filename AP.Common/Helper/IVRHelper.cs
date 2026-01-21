using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
//using System.Web.Http;

namespace Colsys.IVRAPI.Helper
{
    public class IVRHelper
    {
//        #region Methods
//        /// <summary>
//        ///Generate Token
//        /// </summary>
//        /// <returns></returns>
//        public static string GenerateToken(string username, string password, string ip, string userAgent, long ticks)
//        {
//            string hash = string.Join(":", new string[] { username, ip, userAgent, ticks.ToString() });
//            string hashLeft = "";
//            string hashRight = "";
//            string _alg = ConfigurationManager.AppSettings["_alg"];
//            using (HMAC hmac = HMACSHA256.Create(_alg))
//            {
//                hmac.Key = Encoding.UTF8.GetBytes(GetHashedPassword(password));
//                hmac.ComputeHash(Encoding.UTF8.GetBytes(hash));
//                hashLeft = Convert.ToBase64String(hmac.Hash);
//                hashRight = string.Join(":", new string[] { username, ticks.ToString() });
//            }
//            return Convert.ToBase64String(Encoding.UTF8.GetBytes(string.Join(":", hashLeft, hashRight)));
//        }

//        /// <summary>
//        ///Get hash code
//        /// </summary>
//        /// <returns></returns>
//        public static string GetHashedPassword(string password)
//        {
//            string _alg = ConfigurationManager.AppSettings["_alg"];
//            string _salt = ConfigurationManager.AppSettings["_salt"];
//            string key = string.Join(":", new string[] { password, _salt });
//            using (HMAC hmac = HMACSHA256.Create(_alg))
//            {
//                // Hash the key.
//                hmac.Key = Encoding.UTF8.GetBytes(_salt);
//                hmac.ComputeHash(Encoding.UTF8.GetBytes(key));
//                return Convert.ToBase64String(hmac.Hash);
//            }
//        }


//        public static bool IsCardNumberValid(string cardNumber)
//        {
//            int i, checkSum = 0;

//            // Compute checksum of every other digit starting from right-most digit
//            for (i = cardNumber.Length - 1; i >= 0; i -= 2)
//                checkSum += (cardNumber[i] - '0');

//            // Now take digits not included in first checksum, multiple by two,
//            // and compute checksum of resulting digits
//            for (i = cardNumber.Length - 2; i >= 0; i -= 2)
//            {
//                int val = ((cardNumber[i] - '0') * 2);
//                while (val > 0)
//                {
//                    checkSum += (val % 10);
//                    val /= 10;
//                }
//            }

//            // Number is valid if sum of both checksums MOD 10 equals 0
//            return ((checkSum % 10) == 0);
//        }
//        public enum CardType
//        {
//            Unknown = 0,
//            VISA = 1,
//            MasterCard = 2,
//            Amex = 3,
//            Discover = 4,
//            JCB = 5,
//            DinersClub = 6,
//        }

//        // Class to hold credit card type information
//        private class CardTypeInfo
//        {
//            public CardTypeInfo(string regEx, int length, CardType type)
//            {
//                RegEx = regEx;
//                Length = length;
//                Type = type;
//            }

//            public string RegEx { get; set; }
//            public int Length { get; set; }
//            public CardType Type { get; set; }
//        }

//        // Array of CardTypeInfo objects.
//        // Used by GetCardType() to identify credit card types.
//        private static CardTypeInfo[] _cardTypeInfo =
//        {
//  new CardTypeInfo("^(51|52|53|54|55)", 16, CardType.MasterCard),
//  new CardTypeInfo("^(4)", 16, CardType.VISA),
//  new CardTypeInfo("^(34|37)", 15, CardType.Amex),
//  //to be used in future
//  //new CardTypeInfo("^(6011)", 16, CardType.Discover),
//  //new CardTypeInfo("^(300|301|302|303|304|305|36|38)",14, CardType.DinersClub),
//  //new CardTypeInfo("^(3)", 16, CardType.JCB),
//  //new CardTypeInfo("^(2131|1800)", 15, CardType.JCB),
//};

//        /// <summary>
//        /// get card type name from card numbner
//        /// </summary>
//        /// <param name="cardNumber"></param>
//        /// <returns></returns>
//        public static CardType GetCardType(string cardNumber)
//        {
//            foreach (CardTypeInfo info in _cardTypeInfo)
//            {
//                if (cardNumber.Length == info.Length && Regex.IsMatch(cardNumber, info.RegEx))
//                    return info.Type;
//            }

//            return CardType.Unknown;
//        }
//        #endregion
    }
}