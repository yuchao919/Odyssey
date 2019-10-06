using System;
using System.Collections.Generic;
using System.Text;

namespace DapperSample.Models
{
    public class students
    {
        public long ID { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public int? Age { get; set; }
        public bool IsPassed { get; set; }

        public scores Score { get; set; }
    }
}
