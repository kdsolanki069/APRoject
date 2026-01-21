using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Renci.SshNet;
using System.IO;
using System.IO.Compression;
using Ionic.Zip;

namespace AP.Common.Helper
{
    public class CommonHelper
    {
        /// <summary>
        /// Method properly disposes of a target object, used for garbage collection.
        /// </summary>
        /// <param name="object">The object to dispose of.</param>
        public static void DisposeOf(object @object)
        {
            if ((@object != null))
            {
                if (@object is IDisposable)
                {
                    ((IDisposable)@object).Dispose();
                }

                @object = null;
            }
        }

        public static string RemoveMasking(string Maskstring)
        {
            if ((Maskstring != null))
            {
                Maskstring = Maskstring.Replace("(", "");
                Maskstring = Maskstring.Replace(")", "");
                Maskstring = Maskstring.Replace(" ", "");
                Maskstring = Maskstring.Replace("-", "");

                return Maskstring;
            }
            return Maskstring;
        }
        /// <summary>
        /// common function to upload file to sftp server 
        /// </summary>
        /// <param name="host"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="SourcefileList"></param>
        /// <param name="destinationpath"></param>
        /// <param name="port"></param>
        public static void UploadSFTPFile(string host, string username, string password, List<string> SourcefileList, string destinationpath, int port)
        {
            try
            {
                using (SftpClient client = new SftpClient(host, port, username, password))
                {
                    client.Connect();
                    client.ChangeDirectory(destinationpath);
                    foreach (var item in SourcefileList)
                    {
                        using (FileStream fs = new FileStream(item, FileMode.Open))
                        {
                            client.BufferSize = 4 * 1024;
                            client.UploadFile(fs, Path.GetFileName(item));
                        }
                    }

                }
            }
            catch (Exception e)
            {

                throw;
            }

        }

        /// <summary>
        /// Upload singal SFTP File
        /// </summary>
        /// <param name="host"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="destinationpath"></param>
        /// <param name="port"></param>
        /// <param name="sourcefile"></param>
        public static void UploadsingalSFTPFile(string host, string username, string password, string destinationpath, int port, string sourcefile)
        {

            using (SftpClient client = new SftpClient(host, port, username, password))
            {
                client.Connect();
                if (!client.Exists(destinationpath))
                {
                    client.CreateDirectory(destinationpath);
                }

                client.ChangeDirectory(destinationpath);
                using (FileStream fs = new FileStream(sourcefile, FileMode.Open))
                {
                    client.BufferSize = 4 * 1024;
                    client.UploadFile(fs, Path.GetFileName(sourcefile));
                }
            }

        }
        /// <summary>
        /// to compress any any file except ZIP file to zipfile format
        /// </summary>
        /// <param name="directorySelected"></param>
        public static void CompressToZipFile(List<string> files, string zipfilename,string destinationpath)
        {

            using (ZipFile zip = new ZipFile())
            {
                zip.AddFiles(files,false,"");
                zip.Save(Path.Combine(destinationpath,zipfilename) + ".zip");
            }
            //foreach (FileInfo fileToCompress in directorySelected.GetFiles())
            //{
            //    using (FileStream originalFileStream = fileToCompress.OpenRead())
            //    {
            //        using (FileStream compressedFileStream = File.Create(fileToCompress.FullName + ".zip"))
            //        {
            //            using (GZipStream compressionStream = new GZipStream(compressedFileStream,
            //               CompressionMode.Compress))
            //            {
            //                originalFileStream.CopyTo(compressionStream);
            //            }
            //        }
            //    }
            //}
        }

    }

}
