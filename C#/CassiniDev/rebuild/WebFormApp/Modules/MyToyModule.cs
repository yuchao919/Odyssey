using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebFormApp.Modules
{
    /// <summary>
    /// 
    /// </summary>
    public class MyToyModule : IHttpModule
    {
        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public void Init(HttpApplication context)
        {
            context.BeginRequest += Context_BeginRequest;
            context.PostAuthorizeRequest += Context_PostAuthorizeRequest;
        }

        private void Context_PostAuthorizeRequest(object sender, EventArgs e)
        {
            HttpApplication app = (HttpApplication)sender;
            if (app.Request.Path.IndexOf("hello") > 0)
            {
                app.Context.RewritePath("Index.aspx");
            }
        }

        private void Context_BeginRequest(object sender, EventArgs e)
        {
            ;
        }
    }
}