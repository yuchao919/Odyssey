using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace EF6CodeFirst
{
    public class Grade
    {
        public int GradeId { get; set; }
        public string GradeName { get; set; }
        public string Section { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}