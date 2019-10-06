using System.Linq;
using Microsoft.AspNetCore.Mvc;

using DependencyInjectionSample.Interfaces;
using DependencyInjectionSample.Models;

namespace DependencyInjectionSample.Controllers
{
    public class CharacterController : Controller
    {
        private readonly ICharacterRepository _characterRepository;

        public CharacterController(ICharacterRepository characterRepository)
        {
            _characterRepository = characterRepository;
        }

        public IActionResult Index()
        {
            PopulateCharactersIfNoneExist();
            var characters = _characterRepository.ListAll();

            return View(characters);
        }

        private void PopulateCharactersIfNoneExist()
        {
            //if (!_characterRepository.ListAll().Any())
            if (!_characterRepository.DbContext.Characters.Any())
            {
                _characterRepository.Add(new Character("Darth Maul"));
                _characterRepository.Add(new Character("Darth Vader"));
                _characterRepository.Add(new Character("Yoda"));
                _characterRepository.Add(new Character("Mace Windu"));
            }
        }
    }
}