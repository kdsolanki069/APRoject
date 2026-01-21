using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    public class OrgHelper
    {
        public static long CreateUniqueOrgId()
        {
            int length = 15;
            var random = new Random();
            string s = string.Empty;

            for (int i = 0; i < length; i++)
            {
                s = String.Concat(s, random.Next(10).ToString());
            }

            return long.Parse(s);
        }
    }
}
