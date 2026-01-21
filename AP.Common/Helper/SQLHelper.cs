using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System;

namespace AP.Common.Helper
{
    public static class SQLHelper
    {
        public static int ExecuteScalarWithSQLStoredProcedure(string connectionString, string storedProcedureName)
        {
            int response = -1;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                    {

                        SqlParameter sqlParameter = new SqlParameter();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 600;
                        connection.Open();

                        response = Convert.ToInt32(command.ExecuteScalar());
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return response;
        }

        public static int ExecuteScalarWithSQLStoredProcedure(string connectionString, string storedProcedureName, IList<SqlParameter> sqlParameters)
        {
            int response = -1;

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                    {

                        SqlParameter sqlParameter = new SqlParameter();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 600;
                        foreach (SqlParameter parameter in sqlParameters)
                        {
                            command.Parameters.Add(parameter);
                        }
                        connection.Open();

                        response = Convert.ToInt32(command.ExecuteScalar());
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return response;
        }

        public static DataTable GetDataSetFromSQLQuery(string connectionString, string storedProcedureName)
        {
            DataTable dt = new DataTable();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                    {

                        command.CommandType = CommandType.Text;
                        command.CommandTimeout = 600;
                        connection.Open();

                        SqlDataAdapter da = new SqlDataAdapter();
                        da.SelectCommand = command;
                        da.Fill(dt);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dt;
        }
        public static DataTable GetDataSetFromSQLStoredProcedure(string connectionString, string storedProcedureName)
        {
            DataTable dt = new DataTable();
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                    {

                        SqlParameter sqlParameter = new SqlParameter();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 600;
                        connection.Open();

                        SqlDataAdapter da = new SqlDataAdapter();
                        da.SelectCommand = command;
                        da.Fill(dt);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dt;
        }

        public static DataTable GetDataSetFromSQLStoredProcedure(string connectionString, string storedProcedureName, IList<SqlParameter> sqlParameters)
        {
            DataTable dt = new DataTable();

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
                    {

                        SqlParameter sqlParameter = new SqlParameter();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 600;
                        foreach (SqlParameter parameter in sqlParameters)
                        {
                            command.Parameters.Add(parameter);
                        }
                        connection.Open();

                        SqlDataAdapter da = new SqlDataAdapter();
                        da.SelectCommand = command;
                        da.Fill(dt);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dt;
        }
    }
}
