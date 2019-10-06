using System.ComponentModel.DataAnnotations;

namespace AbpDemo.Vuejs.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}