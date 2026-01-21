using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    public class DateConvert
    {
        public string GetMySQLDateTime(string datetime)
        {
            DateTime dateValue = DateTime.Parse(datetime);
            //string formatForMySql = dateValue.ToString("yyyy-MM-dd HH:mm");
            string formatForMySql = dateValue.ToString("MM/dd/yyyy HH:mm");

            return formatForMySql;
        }
    }
}
