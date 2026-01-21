using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
  public  class EncryptionDecryption
    {
        static byte[] bytes = ASCIIEncoding.ASCII.GetBytes("ZeroCool");
        /// <summary>
        /// Generate Salt for Encryption
        /// </summary>
        /// <returns>String Object as Salt</returns>

        public static string getSalt()
        {
            var random = new RNGCryptoServiceProvider();
            int max_length = 32;
            byte[] salt = new byte[max_length];
            random.GetNonZeroBytes(salt);
            return Convert.ToBase64String(salt);
        }
        /// <summary>
        /// One Way Encryption of Password
        /// </summary>
        /// <param name="pasword">Password String</param>
        /// <returns>Encrypted Password</returns>
        
        public static string HashPassword(string pasword)
        {
            string passwordSalt = pasword;
            byte[] arrbyte = new byte[passwordSalt.Length];
            SHA256 hash = new SHA256CryptoServiceProvider();
            arrbyte = hash.ComputeHash(Encoding.UTF8.GetBytes(passwordSalt));
            return Convert.ToBase64String(arrbyte);
        }

        public static string EncryptPassword(string Password)
        {
            if (String.IsNullOrEmpty(Password))
            {
                throw new ArgumentNullException("The string which needs to be encrypted can not be null.");
            }
            Password = Password.ToUpper();
            DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
            MemoryStream memoryStream = new MemoryStream();
            CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateEncryptor(bytes, bytes), CryptoStreamMode.Write);
            StreamWriter writer = new StreamWriter(cryptoStream);
            writer.Write(Password);
            writer.Flush();
            cryptoStream.FlushFinalBlock();
            writer.Flush();
            return Convert.ToBase64String(memoryStream.GetBuffer(), 0, (int)memoryStream.Length);
        }

        public static string DecryptPassword(string Password)
        {
            if (String.IsNullOrEmpty(Password))
            {
                throw new ArgumentNullException("The string which needs to be decrypted can not be null.");
            }
            DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
            MemoryStream memoryStream = new MemoryStream(Convert.FromBase64String(Password));
            CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateDecryptor(bytes, bytes), CryptoStreamMode.Read);
            StreamReader reader = new StreamReader(cryptoStream);
            return reader.ReadToEnd().ToUpper();
        }




        public static string EncryptString(string Password)
        {
            if (String.IsNullOrEmpty(Password))
            {
                throw new ArgumentNullException("The string which needs to be encrypted can not be null.");
            }
            Password = Password.ToUpper();
            DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
            MemoryStream memoryStream = new MemoryStream();
            CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateEncryptor(bytes, bytes), CryptoStreamMode.Write);
            StreamWriter writer = new StreamWriter(cryptoStream);
            writer.Write(Password);
            writer.Flush();
            cryptoStream.FlushFinalBlock();
            writer.Flush();
            return Convert.ToBase64String(memoryStream.GetBuffer(), 0, (int)memoryStream.Length);
        }

        public static string DecryptString(string Password)
        {
            if (String.IsNullOrEmpty(Password))
            {
                throw new ArgumentNullException("The string which needs to be decrypted can not be null.");
            }
            DESCryptoServiceProvider cryptoProvider = new DESCryptoServiceProvider();
            MemoryStream memoryStream = new MemoryStream(Convert.FromBase64String(Password));
            CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateDecryptor(bytes, bytes), CryptoStreamMode.Read);
            StreamReader reader = new StreamReader(cryptoStream);
            return reader.ReadToEnd().ToUpper();
        }



        /// <summary>
        /// DecryptPasswordTripleDES - Function to decrypt TripleDES encrypted password as per OSG SSO requirements
        /// </summary>
        /// <param name="pasword">Password string</param>
        /// <param name="keyPhrase">Secret keyphrase provided to client</param>
        public static string DecryptPasswordTripleDES(string password, string keyPhrase)
        {
            Byte[] IV = Encoding.UTF8.GetBytes(keyPhrase.ToCharArray(), 0, 8);
            Byte[] key = Encoding.UTF8.GetBytes(keyPhrase);

            if (String.IsNullOrEmpty(password))
            {
                throw new ArgumentNullException("The string which needs to be decrypted can not be null.");
            }
            TripleDESCryptoServiceProvider cryptoProvider = new TripleDESCryptoServiceProvider();
            MemoryStream memoryStream = new MemoryStream(Convert.FromBase64String(password));
            CryptoStream cryptoStream = new CryptoStream(memoryStream, cryptoProvider.CreateDecryptor(key, IV), CryptoStreamMode.Read);
            StreamReader reader = new StreamReader(cryptoStream);
            return reader.ReadToEnd().ToUpper();
        }
    }
}
