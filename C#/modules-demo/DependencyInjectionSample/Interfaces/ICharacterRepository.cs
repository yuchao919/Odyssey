using System.Collections.Generic;

using DependencyInjectionSample.Models;
using Microsoft.EntityFrameworkCore;

namespace DependencyInjectionSample.Interfaces
{
    public interface ICharacterRepository
    {
        ApplicationDbContext DbContext { get; }
        IEnumerable<Character> ListAll();
        void Add(Character character);
    }
}
