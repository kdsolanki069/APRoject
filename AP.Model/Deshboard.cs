using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Model
{
    public class Deshboard
    {
        public int QuatationCount { get; set; }
        public int PerfomaCount { get; set; }
        public int ChallanCount { get; set; }
        public int POrderCount { get; set; }
        public int SOrderCount { get; set; }
    }

     public class DeshboardDetail : ResponseModel
    {
        public Deshboard DeshboardData { get; set; }
    }
}
