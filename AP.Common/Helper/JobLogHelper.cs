using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    public class JobLogHelper
    {
        /// <summary>
        /// Jobs
        /// </summary>
        public class JobsViewModel
        {
            public int JobId { set; get; }
            public string JobTitle { set; get; }
            public string QueueMessage { set; get; }
            public DateTime JobStartDateTime { set; get; }
            public int NumOfRecords { set; get; }
            public string JobStatus { set; get; }
            public string Flag { set; get; }
            public string clientCode { set; get; }
        }

        /// <summary>
        /// JobDetails
        /// </summary>
        public class JobLogDetailsViewModel
        {
            public int JobLogId { set; get; }
            public int JobId { set; get; }
            public string JobLogKey { set; get; }
            public string JobLogMessage { set; get; }
            public string Flag { set; get; }
        }

    }
}
