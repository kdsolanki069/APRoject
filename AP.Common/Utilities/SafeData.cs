using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlTypes;


namespace AP.Common.Utilities
{
    public class SafeData
    {
        public static int SafeInt(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (int)Convert.ToInt32(row[colName]);
            }
        }

        public static long SafeLong(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (long)Convert.ToInt64(row[colName]);
            }
        }

        public static bool SafeBool(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return false;
            }
            else
            {
                return (bool)Convert.ToBoolean(row[colName]);
            }
        }

        public static DateTime SafeDateTime(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return DateTime.MinValue;
            }
            else
            {
                return (DateTime)Convert.ToDateTime(row[colName]);
            }
        }

        public static TimeSpan SafeTime(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return TimeSpan.MinValue;
            }
            else
            {
                string strVal = SafeData.SafeString(row[colName]);

                TimeSpan tValue;
                if (TimeSpan.TryParse(strVal, out tValue))
                    return tValue;

                return TimeSpan.MinValue;
            }
        }

        public static byte SafeByte(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (byte)Convert.ToByte(row[colName]);
            }
        }

        public static decimal SafeDecimal(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (decimal)Convert.ToDecimal(row[colName]); ;
            }
        }

        public static float SafeFloat(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return Convert.ToSingle(row[colName]);
            }
        }

        public static double SafeDouble(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return Convert.ToDouble(row[colName]);
            }
        }


        public static string SafeString(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }
            else
            {
                return Convert.ToString(row[colName]);
            }
        }

        public static Guid SafeGuid(DataRow row, string colName)
        {
            return (Guid)row[colName];
        }

        #region Nullable safe objects
        public static Nullable<int> SafeNullableInt(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return (int)Convert.ToInt32(row[colName]);
        }

        public static Nullable<long> SafeNullableLong(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return (long)Convert.ToInt64(row[colName]);
        }

        public static Nullable<bool> SafeNullableBool(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return (bool)Convert.ToBoolean(row[colName]);
        }

        public static Nullable<DateTime> SafeNullableDateTime(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return (DateTime)Convert.ToDateTime(row[colName]);
        }

        public static Nullable<TimeSpan> SafeNullableTime(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            string strVal = SafeData.SafeString(row[colName]);

            TimeSpan tValue;
            if (TimeSpan.TryParse(strVal, out tValue))
                return tValue;

            return null;
        }

        public static Nullable<byte> SafeNullableByte(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }
            return (byte)Convert.ToByte(row[colName]);
        }

        public static Nullable<decimal> SafeNullableDecimal(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }
            return (decimal)Convert.ToDecimal(row[colName]); ;
        }

        public static Nullable<float> SafeNullableFloat(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }
            return Convert.ToSingle(row[colName]);
        }

        public static Nullable<double> SafeNullableDouble(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return Convert.ToDouble(row[colName]);
        }

        public static Nullable<Guid> SafeNullableGuid(DataRow row, string colName)
        {
            if (row[colName] == DBNull.Value)
            {
                return null;
            }

            return (Guid) row[colName];
        }


        #endregion

        #region regular object

        public static int SafeInt(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (int)Convert.ToInt32(obj);
            }
        }

        public static long SafeLong(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return (long)Convert.ToInt64(obj);
            }
        }

        public static bool SafeBool(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return false;
            }
            else
            {
                return (bool)obj;
            }
        }

        public static DateTime SafeDateTime(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return DateTime.MaxValue;
            }
            else
            {
                return (DateTime)obj;
            }
        }

        public static SqlDateTime SafeSqlDateTime(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return SqlDateTime.MinValue;
            }
            else
            {
                if (obj is DateTime)
                {
                    return new SqlDateTime((DateTime)obj);
                }
                else if (obj is SqlDateTime)
                {
                    return (SqlDateTime)obj;
                }
                return SqlDateTime.Null;
            }
        }

        public static byte SafeByte(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return Convert.ToByte(obj);
            }
        }

        public static decimal SafeDecimal(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return Convert.ToDecimal(obj);
            }
        }

        public static float SafeFloat(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0;
            }
            else
            {
                return Convert.ToSingle(obj);
            }
        }


        public static double SafeDouble(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return 0.0;
            }
            else
            {
                return Convert.ToDouble(obj);
            }
        }


        public static string SafeString(object obj)
        {
            if (obj == null || obj == DBNull.Value)
            {
                return "";
            }
            else
            {
                return Convert.ToString(obj);
            }
        }

        public static Guid SafeGuid(object obj)
        {
            return (Guid)obj;
        }

        #endregion

        public static string GetFormattedFlightDateString(DateTime startDate, DateTime endDate)
        {
            string fmtStr = null;
            if (!startDate.Equals(null) && !endDate.Equals(null))
            {
                fmtStr = startDate.ToShortDateString() + " - " + endDate.ToShortDateString();
            }
            return fmtStr;
        }

    }
}
