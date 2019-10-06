using Abp.Web.Mvc.Views;

namespace AbpDemo.Web.Views
{
    public abstract class AbpDemoWebViewPageBase : AbpDemoWebViewPageBase<dynamic>
    {

    }

    public abstract class AbpDemoWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected AbpDemoWebViewPageBase()
        {
            LocalizationSourceName = AbpDemoConsts.LocalizationSourceName;
        }
    }
}