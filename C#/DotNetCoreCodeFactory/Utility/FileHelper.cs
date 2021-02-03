using System;
using System.Collections.Generic;
using System.IO;
using System.Security.AccessControl;

namespace DotNetCoreCodeFactory.Utility
{
    /// <summary>
    /// 文件帮助类
    /// </summary>
    public static class FileHelper
    {
        /// <summary>
        /// 递归获取文件夹目录下文件
        /// </summary>
        /// <param name="pathName">需要递归遍历的文件夹</param>
        /// <param name="fileRule">遍历规则『委托』</param>
        public static void LoopFolder(string pathName, Action<FileInfo> fileRule)
        {
            if (string.IsNullOrEmpty(pathName))
                throw new ArgumentNullException(pathName);

            Queue<string> _pathQueue = new Queue<string>();
            _pathQueue.Enqueue(pathName);
            while (_pathQueue.Count > 0)
            {
                string _path = _pathQueue.Dequeue();
                DirectorySecurity _pathSecurity = new DirectorySecurity(_path, AccessControlSections.Access);
                if (!_pathSecurity.AreAccessRulesProtected)//文件夹权限是否可访问
                {
                    DirectoryInfo _directoryInfo = new DirectoryInfo(_path);
                    foreach (DirectoryInfo diChild in _directoryInfo.GetDirectories())
                    {
                        _pathQueue.Enqueue(diChild.FullName);
                    }
                    foreach (FileInfo file in _directoryInfo.GetFiles())
                    {
                        fileRule(file);
                    }
                }
            }
        }
    }
}
