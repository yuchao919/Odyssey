using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace AbpDemo.Vuejs.Localization
{
    public static class VuejsLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(VuejsConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(VuejsLocalizationConfigurer).GetAssembly(),
                        "AbpDemo.Vuejs.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
