using System;
using System.Diagnostics;

namespace WebFormApp
{
    public class Global : System.Web.HttpApplication
    {
        #region Event List

        // CassiniDev
        //0  :Application_BeginRequest
        //1  :Application_AuthenticateRequest
        //2  :Application_AuthorizeRequest
        //3  :Application_PostAuthorizeRequest
        //4  :Application_ResolveRequestCache
        //5  :Application_PostResolveRequestCache
        //6  :Application_PostMapRequestHandler
        //7  :Session_Start
        //8  :Application_AcquireRequestState
        //9  :Application_PostAcquireRequestState
        //10 :Application_PreRequestHandlerExecute
        //11 :Application_PostRequestHandlerExecute
        //12 :Application_ReleaseRequestState
        //13 :Application_PostReleaseRequestState
        //14 :Application_UpdateRequestCache
        //15 :Application_PostUpdateRequestCache
        //16 :Application_EndRequest
        //17 :Application_PreSendRequestHeaders
        //18 :Application_PreSendRequestContent

        // IIS:
        // 0  :Application_BeginRequest
        // 1  :Application_AuthenticateRequest
        // 2  :Application_AuthorizeRequest
        // 3  :Application_PostAuthorizeRequest
        // 4  :Application_ResolveRequestCache
        // 5  :Application_PostResolveRequestCache
        // 6  :Application_MapRequestHandler
        // 7  :Application_PostMapRequestHandler
        // 8  :Session_Start
        // 9  :Application_AcquireRequestState
        // 10 :Application_PostAcquireRequestState
        // 11 :Application_PreRequestHandlerExecute
        // 12 :Application_PostRequestHandlerExecute
        // 13 :Application_ReleaseRequestState
        // 14 :Application_PostReleaseRequestState
        // 15 :Application_UpdateRequestCache
        // 16 :Application_PostUpdateRequestCache
        // 17 :Application_LogRequest
        // 18 :Application_PostLogRequest
        // 19 :Application_EndRequest
        // 20 :Application_PreSendRequestHeaders
        // 21 :Application_PreSendRequestContent

        protected void Application_Start(object sender, EventArgs e)
        {
            Debug.Write($"Application_Start\n");
            //ScriptManager.ScriptResourceMapping.AddDefinition("jquery", new ScriptResourceDefinition
            //{
            //    Path = "~/scripts/jquery-1.12.4.min.js",
            //    DebugPath = "~/scripts/jquery-1.12.4.js",
            //    CdnPath = "http://ajax.microsoft.com/ajax/jQuery/jquery-1.12.4.min.js",
            //    CdnDebugPath = "http://ajax.microsoft.com/ajax/jQuery/jquery-1.12.4.js"
            //});
        }

        protected int i;

        //protected void Application_Init(object sender, EventArgs e)
        //{
        //    Debug.Write($"Application_Init\n");
        //}

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            i = 0;
            Debug.Write($"{ i++ } :Application_BeginRequest\n");
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_AuthenticateRequest\n");
        }

        protected void Application_AuthorizeRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_AuthorizeRequest\n");
        }

        protected void Application_PostAuthorizeRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostAuthorizeRequest\n");
        }

        protected void Application_ResolveRequestCache(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_ResolveRequestCache\n");
        }

        protected void Application_PostResolveRequestCache(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostResolveRequestCache\n");
        }

        protected void Application_MapRequestHandler(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_MapRequestHandler\n");
        }

        protected void Application_PostMapRequestHandler(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostMapRequestHandler\n");
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Session_Start\n");
        }

        protected void Application_AcquireRequestState(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_AcquireRequestState\n");
        }

        protected void Application_PostAcquireRequestState(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostAcquireRequestState\n");
        }

        protected void Application_PreRequestHandlerExecute(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PreRequestHandlerExecute\n");
        }

        protected void Application_PostRequestHandlerExecute(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostRequestHandlerExecute\n");
        }

        protected void Application_ReleaseRequestState(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_ReleaseRequestState\n");
        }

        protected void Application_PostReleaseRequestState(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostReleaseRequestState\n");
        }

        protected void Application_UpdateRequestCache(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_UpdateRequestCache\n");
        }

        protected void Application_PostUpdateRequestCache(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostUpdateRequestCache\n");
        }

        protected void Application_LogRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_LogRequest\n");
        }

        protected void Application_PostLogRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PostLogRequest\n");
        }

        protected void Application_EndRequest(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_EndRequest\n");
        }

        protected void Application_PreSendRequestHeaders(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PreSendRequestHeaders\n");
        }

        protected void Application_PreSendRequestContent(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_PreSendRequestContent\n");
        }

        protected void Session_End(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Session_End\n");
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_Error\n");
        }

        protected void Application_Disposed(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_Disposed\n");
        }

        protected void Application_End(object sender, EventArgs e)
        {
            Debug.Write($"{ i++ } :Application_End\n");
        }

        #endregion
    }
}