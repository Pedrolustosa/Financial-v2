using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    /// <summary>
    /// The financial system.
    /// </summary>
    [Table("FinancialSystem")]
    public class FinancialSystem : Base
    {
        /// <summary>
        /// Gets or Sets the month.
        /// </summary>
        public int Month { get; set; }
        /// <summary>
        /// Gets or Sets the year.
        /// </summary>
        public int Year { get; set; }
        /// <summary>
        /// Gets or Sets the closing day.
        /// </summary>
        public int ClosingDay { get; set; }
        /// <summary>
        /// Gets or Sets a value indicating whether generate copy dispense.
        /// </summary>
        public bool GenerateCopyDispense { get; set; }
        /// <summary>
        /// Gets or Sets the month copy.
        /// </summary>
        public int MonthCopy { get; set; }
        /// <summary>
        /// Gets or Sets the year copy.
        /// </summary>
        public int YearCopy { get; set; }
    }
}