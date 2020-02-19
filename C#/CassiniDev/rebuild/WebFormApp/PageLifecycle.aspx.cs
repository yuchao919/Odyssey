using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFormApp
{
    public partial class PageLifecycle : System.Web.UI.Page
    {
        // 该页面生命周期来自于 基类Page及其基类Control的事件

        #region Page Lifecycle

        // 1.PreInit:当页面初始化开始时发生
        // 2.Init:当服务器空间初始化时发生
        // 3.InitComplete:当页初始化完成时发生
        // 4.PreLoad:当页load事件前发生
        // 5.Load:当服务器控件加载到Page对象中时发生(加载页面时)
        // 6.LoadComplete:当页面生命周期的加载阶段结束时发生
        // 7.PreRender:当页加载控件之后,呈现之前发生,使用该事件对页或其控件的内容进行最后更改(预呈现)
        // 8.PreRenderComplete:呈现内容前发生.(预呈现完成)
        // 9.SaveStateComplete:在页已完成对页和页上控件的所有视图状态和控件状态信息的保存后发生.
        // Hello World

        protected int i = 1;

        protected void Page_PreInit(object sender, EventArgs e)
        {
            Response.Write(i + ".PreInit:当页面初始化开始时发生");
            i++;
            Response.Write("<br>");
        }

        protected void Page_Init(object sender, EventArgs e)
        {
            Response.Write(i + ".Init:当服务器空间初始化时发生");
            i++;
            Response.Write("<br>");
        }

        protected void Page_InitComplete(object sender, EventArgs e)
        {
            Response.Write(i + ".InitComplete:当页初始化完成时发生");
            i++;
            Response.Write("<br>");
        }

        protected void Page_PreLoad(object sender, EventArgs e)
        {
            Response.Write(i + ".PreLoad:当页load事件前发生");
            i++;
            Response.Write("<br>");
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write(i + ".Load:当服务器控件加载到Page对象中时发生(加载页面时)");
            i++;
            Response.Write("<br>");

            //在Load和LoadComplete之间会执行控件事件.  
            //如 Button 控件的 Click 事件或 TextBox 控件的 TextChanged 事件。  
        }

        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            Response.Write(i + ".LoadComplete:当页面生命周期的加载阶段结束时发生");
            i++;
            Response.Write("<br>");
        }

        protected void Page_PreRender(object sender, EventArgs e)
        {
            Response.Write(i + ".PreRender:当页加载控件之后,呈现之前发生,使用该事件对页或其控件的内容进行最后更改(预呈现)");
            i++;
            Response.Write("<br>");
        }

        protected void Page_PreRenderComplete(object sender, EventArgs e)
        {
            Response.Write(i + ".PreRenderComplete:呈现内容前发生.(预呈现完成)");
            i++;
            Response.Write("<br>");
        }

        protected void Page_SaveStateComplete(object sender, EventArgs e)
        {
            /*网页上控件的状态信息是在 PreRenderComplete 事件后保存的。
           在SaveStateComplete事件之前用Trace查看页时其实在该事件前还有
           一个SaveState事件,只是这里无法演示.

           注意:SaveStateComplete 事件在将页和页上控件的视图状态和控件状态保存到持久性介质之后引发。
           这是在页被呈现到请求浏览器之前引发的最后一个事件。*/

            Response.Write(i + ".SaveStateComplete:在页已完成对页和页上控件的所有视图状态和控件状态信息的保存后发生.");
            i++;
            Response.Write("<br>");

            /*最后一部操作
            呈现:Render:
            它不是事件；在处理的这个阶段，Page 对象会在每个控件上调用此方法Render()。
            所有 ASP.NET Web 服务器控件都有一个用于写出发送给浏览器的控件标记的 Render 方法。*/


            /*当你关闭页面的时候就会引发UnLoad(当服务器控件从内存中卸载时发生)
             和Disposed两事件(当从内存释放服务器控件时发生，这是服务器控件生存期的最后阶段)

            首先加载UnLoad事件:卸载页面：完全呈现页、将页发送至客户端并准备丢弃时，
            将调用卸载。此时，将卸载页属性（如Response和Request）并执行清理.

            最后加载Disposed事件,释放资源,生命周期结束.... 
            */
        }

        protected void Page_Unload(object sender, EventArgs e)
        {
            // Response已失效
            //Response.Write(i + ".Unload:Occurs when the server control is unloaded from memory.");
            //i++;
            //Response.Write("<br>");
        }

        protected void Page_DataBinding(object sender, EventArgs e)
        {
            ;
        }



        #endregion
    }
}