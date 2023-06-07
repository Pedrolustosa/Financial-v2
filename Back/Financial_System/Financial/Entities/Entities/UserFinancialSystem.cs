using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    /// <summary>
    /// The user financial system.
    /// </summary>
    [Table("UserFinancialSystem")]
    public class UserFinancialSystem
    {
        /// <summary>
        /// Gets or Sets the id.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Gets or Sets the user email.
        /// </summary>
        public string? UserEmail { get; set; }
        /// <summary>
        /// Gets or Sets a value indicating whether administrator.
        /// </summary>
        public bool Administrator { get; set; }
        /// <summary>
        /// Gets or Sets a value indicating whether current system.
        /// </summary>
        public bool CurrentSystem { get; set; }

        /// <summary>
        /// Gets or Sets the system id.
        /// </summary>
        [ForeignKey("FinancialSystem")]
        [Column(Order = 1)]
        public int SystemId { get; set; }
        /// <summary>
        /// Gets or Sets the financial system.
        /// </summary>
        public virtual FinancialSystem? FinancialSystem { get; set; }
    }
}