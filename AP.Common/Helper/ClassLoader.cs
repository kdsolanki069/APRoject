using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AP.Common.Helper
{
    public class ClassLoader
    {
        public static void Load(object target, List<string> fields, bool supressErrors)
        {
            Type targetType = target.GetType();
            PropertyInfo[] properties = targetType.GetProperties();
            foreach (PropertyInfo property in properties)
            {
                // Make sure the property is writeable (has a Set operation)
                if (property.CanWrite)
                {
                    // find CSVPosition attributes assigned to the current property
                    object[] attributes = property.GetCustomAttributes(typeof(CSVPositionAttribute), false);

                    // if Length is greater than 0 we have
                    // at least one CSVPositionAttribute
                    if (attributes.Length > 0)
                    {
                        // We will only process the first CSVPositionAttribute
                        CSVPositionAttribute positionAttr = (CSVPositionAttribute)attributes[0];

                        //Retrieve the postion value from the CSVPositionAttribute

                       // int position = positionAttr.Position;
                        int index = positionAttr.Position; //fieldHeaders.IndexOf(position);

                        try
                        {
                            // get the CSV data to be manipulate
                            // and written to object
                            object data = fields[index];

                            // set the value on our target object with the data
                            property.SetValue(target,
                              Convert.ChangeType(data, property.PropertyType), null);
                        }
                        catch
                        {
                            // simple error handling
                            if (!supressErrors)
                                throw;
                        }
                    }
                }
            }
        }

        public static X LoadNew<X>(List<string> fieldHeaders, List<string> fields, bool supressErrors)
        {
            // Create a new object of type X        
            X tempObj = (X)Activator.CreateInstance(typeof(X));

            // Load that object with CSV data
            Load(tempObj, fields, supressErrors);

            // return the new instanace of the object
            return tempObj;
        }
    }
}
