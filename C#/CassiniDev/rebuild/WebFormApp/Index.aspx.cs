using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFormApp
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            PrintModuls();
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            lblOutput.Text = txtInput.Text;
        }

        protected void btnClear_Click(object sender, EventArgs e)
        {
            txtInput.Text = null;
            lblOutput.Text = null;
        }


        private void PrintModuls()
        {
            HttpApplication app = HttpContext.Current.ApplicationInstance;
            Response.Write("<br />/***************************************************/<br />");
            Response.Write(string.Join("<br />", app.Modules.AllKeys));
            Response.Write("<br />/***************************************************/<br />");
        }
    }
}