using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCoreSample.Models
{
    public class students
    {
        public long ID { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int? Age { get; set; }
        public bool? IsPassed { get; set; }


        public ICollection<scores> Scores { get; set; }
    }
}
