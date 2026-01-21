using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    [AttributeUsage(AttributeTargets.Property)]
    public class CSVPositionAttribute : System.Attribute
    {
        public int Position;
        public string DataTransform = string.Empty;

        public CSVPositionAttribute(int position,
                            string dataTransform)
        {
            Position = position;
            DataTransform = dataTransform;
        }

        public CSVPositionAttribute(int position)
        {
            Position = position;
        }

        public CSVPositionAttribute()
        {
        }
    }
}
