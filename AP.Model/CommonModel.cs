using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
   public class CommonModel
    {
        public string Flag { get; set; }
        public int Changeby { get; set; }
        
    }

    public class ResponseModel
    {
        public string Status  { get; set; }
        public string Message { get; set; }
    }
}
