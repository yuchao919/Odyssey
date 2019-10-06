using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EFCoreSample.Models
{
    [Table("scores")]
    public class scores
    {
        public long ID { get; set; }
        public string Subject { get; set; }

        public int Score { get; set; }

        public students Student { get; set; }
    }
}
