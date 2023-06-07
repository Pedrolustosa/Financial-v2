using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    /// <summary>
    /// The category.
    /// </summary>
    [Table("Category")]
    public class Category : Base
    {
        /// <summary>
        /// Gets or Sets the system id.
        /// </summary>
        [ForeignKey("FinancialSystem")]
        [Column(Order = 1)]
        public int SystemId { get; set; }
    }
}