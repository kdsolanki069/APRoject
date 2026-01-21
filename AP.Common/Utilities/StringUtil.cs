using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Utilities
{
    public class StringUtil
    {
        public static string GetSubdomain(Uri uri)
        {
            string host = uri.Host;

            string[] hostTokens = host.Split(new char[1] { '.' });

            StringBuilder subDomain = new StringBuilder();

            //Collection system supports only root subdomain
            if (hostTokens.Length > 2)
                subDomain.Append(hostTokens[0]);

            /*
            for (int i = 0; i < hostTokens.Length - 2; i++)
            {
                if(i != 0)
                    subDomain.Append(".");
                subDomain.Append(hostTokens[i]);
            }*/


            return subDomain.ToString();
        }

        public static string[] SplitByComma(string source)
        {
            var perms = source.Split(new char[1] { ',' });
            for (int i = 0; i < perms.Length; i++)
            {
                perms[i] = perms[i].Trim();
            }
            return perms;
        }

        public static string GetChainByLinkCount(string chain, int maxlink)
        {
            if (String.IsNullOrWhiteSpace(chain))
                return "";
            StringBuilder buf = new StringBuilder();
            string[] slist = SplitByDelim(chain, '-');
            for(int i = 0; i < maxlink && slist.Length > i; i++)
            {
                if (i != 0)
                    buf.Append("-");
                buf.Append(slist[i]);
            }

            return buf.ToString();
        }

        public static string[] SplitByDelim(string source, char delim)
        {
            var perms = source.Split(new char[1] { delim });
            for (int i = 0; i < perms.Length; i++)
            {
                perms[i] = perms[i].Trim();
            }
            return perms;

        }

        public static string ConvertArrayToString(string[] source)
        {
            StringBuilder buf = new StringBuilder(20);
            bool first = true;
            foreach (string s in source)
            {
                if (!first)
                    buf.Append(",");
                buf.Append(s);
                first = false;
            }
            return buf.ToString();
        }

        public static int[] SplitByCommaInt32(string source)
        {
            string[] values = source.Split(new char[1] { ',' });
            List<int> lstIntValues = new List<int>();
            foreach (string v in values)
            {
                lstIntValues.Add(Convert.ToInt32(v));
            }

            return lstIntValues.ToArray();
        }

    }
}
