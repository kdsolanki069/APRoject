using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AP.Common.Helper
{
    public class RandomString
    {
        private int Length { get; set; }
        private string AllowedChars { get; set; }

        public RandomString(int length = 20, string allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
        {
            Length = length;
            AllowedChars = allowedChars;
        }

        public string GetRandomString()
        {
            if (Length < 0) throw new ArgumentOutOfRangeException("length", "length cannot be less than zero.");
            if (string.IsNullOrEmpty(AllowedChars)) throw new ArgumentException("allowedChars may not be empty.");

            const int byteSize = 0x100;
            var allowedCharSet = new HashSet<char>(AllowedChars).ToArray();
            if (byteSize < allowedCharSet.Length) throw new ArgumentException(String.Format("allowedChars may contain no more than {0} characters.", byteSize));

            // Guid.NewGuid and System.Random are not particularly random. By using a
            // cryptographically-secure random number generator, the caller is always
            // protected, regardless of use.
            using (var rng = new System.Security.Cryptography.RNGCryptoServiceProvider())
            {
                var result = new StringBuilder();
                var buf = new byte[128];
                while (result.Length < Length)
                {
                    rng.GetBytes(buf);
                    for (var i = 0; i < buf.Length && result.Length < Length; ++i)
                    {
                        // Divide the byte into allowedCharSet-sized groups. If the
                        // random value falls into the last group and the last group is
                        // too small to choose from the entire allowedCharSet, ignore
                        // the value in order to avoid biasing the result.
                        var outOfRangeStart = byteSize - (byteSize % allowedCharSet.Length);
                        if (outOfRangeStart <= buf[i]) continue;
                        result.Append(allowedCharSet[buf[i] % allowedCharSet.Length]);
                    }
                }
                return result.ToString();
            }
        }

        public string TemplateId(string str)
        {
          
                string OfferXML = str;
                string[] Offers = OfferXML.Split(new string[] { "?>" }, StringSplitOptions.None);

                // To convert an XML node contained in string xml into a JSON string   
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(Offers[0]);
                string OfferJson = JsonConvert.SerializeXmlNode(doc);

                //convert json string to json object
                var dict = (JObject)JsonConvert.DeserializeObject(OfferJson);

                var TemplateID = dict["Data"]["template_id"];
                str = Convert.ToString(TemplateID);
          
            return str;
        }
        public string ListId(string str)
        {
               string OfferXML = str;
                string[] Offers = OfferXML.Split(new string[] { "?>" }, StringSplitOptions.None);

                // To convert an XML node contained in string xml into a JSON string   
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(Offers[0]);
                string OfferJson = JsonConvert.SerializeXmlNode(doc);

                //convert json string to json object
                var dict = (JObject)JsonConvert.DeserializeObject(OfferJson);

                var ListID = dict["Data"]["list_id"];
                str = Convert.ToString(ListID);         
          
            return str;
        }

        public string RandomStringPassword()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[8];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            return new String(stringChars);           
        }

        public string RandomStringPassword(int lenth)
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[lenth];
            var random = new Random();
            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            string NewPassword = new String(stringChars);

            return NewPassword;
        }



    }
}
