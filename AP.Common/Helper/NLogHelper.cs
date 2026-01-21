using NLog;
using NLog.Config;
using NLog.Targets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using Common.Logging;

namespace AP.Common.Helper
{
    public enum LOG_LEVEL { FATAL = 0, ERROR = 1, WARNING = 2, TRACE = 3, DEBUG = 4, INFO = 5 }
    public class NLogHelper
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        // Log Exceptions
        public static void Log(Exception ex)
        {
            LogErrorMessage(ex.Message);
        }

        public static void Log(LOG_LEVEL level, string message) {

            switch (level)
            {
                case LOG_LEVEL.FATAL:
                    LogFatalErrorMessage(message);
                    break;
                case LOG_LEVEL.ERROR:
                    LogErrorMessage(message);
                    break;
                case LOG_LEVEL.WARNING:
                    LogWarningMessage(message);
                    break;
                case LOG_LEVEL.TRACE:
                    LogTraceMessage(message);
                    break;
                case LOG_LEVEL.DEBUG:
                    LogDebugMessage(message);
                    break;
                case LOG_LEVEL.INFO:
                    LogInfoMessage(message);
                    break;
                default:
                    LogFatalErrorMessage(message);
                    break;
            }

        }

        private static void LogTraceMessage(string ex)
        {
            logger.Trace(ex);
        }

        private static void LogDebugMessage(string ex)
        {
            logger.Debug(ex);
        }

        private static void LogInfoMessage(string ex)
        {
            logger.Info(ex);
        }

        private static void LogWarningMessage(string ex)
        {
            logger.Warn(ex);
        }

        public static void LogErrorMessage(string ex)
        {
            NLog.LogManager.GetCurrentClassLogger().Error(ex);
        }

        private static void LogFatalErrorMessage(string ex)
        {
            logger.Fatal(ex);
        }

    }
}
