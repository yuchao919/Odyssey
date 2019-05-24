using Abp.Web.Mvc.Views;

namespace MyAbpMultiPageApp.Web.Views
{
    public abstract class MyAbpMultiPageAppWebViewPageBase : MyAbpMultiPageAppWebViewPageBase<dynamic>
    {

    }

    public abstract class MyAbpMultiPageAppWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected MyAbpMultiPageAppWebViewPageBase()
        {
            LocalizationSourceName = MyAbpMultiPageAppConsts.LocalizationSourceName;
        }
    }
}