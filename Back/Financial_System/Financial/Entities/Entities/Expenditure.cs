using Entities.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Entities
{
    /// <summary>
    /// The expenditure.
    /// </summary>
    [Table("Dispense")]
    public class Expenditure : Base
    {
        /// <summary>
        /// Gets or Sets the value.
        /// </summary>
        public decimal Value { get; set; }

        /// <summary>
        /// Gets or Sets the month.
        /// </summary>
        public int Month { get; set; }

        /// <summary>
        /// Gets or Sets the year.
        /// </summary>
        public int Year { get; set; }

        /// <summary>
        /// Gets or Sets the type dipense.
        /// </summary>
        public EnumTypeExpenditure TypeDipense { get; set; }

        /// <summary>
        /// Gets or Sets the registration date.
        /// </summary>
        public DateTime RegistrationDate { get; set; }

        /// <summary>
        /// Gets or Sets the date change.
        /// </summary>
        public DateTime DateChange { get; set; }

        /// <summary>
        /// Gets or Sets the payment date.
        /// </summary>
        public DateTime PaymentDate { get; set; }

        /// <summary>
        /// Gets or Sets the expired date.
        /// </summary>
        public DateTime ExpiredDate { get; set; }

        /// <summary>
        /// Gets or Sets a value indicating whether paid.
        /// </summary>
        public bool Paid { get; set; }

        /// <summary>
        /// Gets or Sets a value indicating whether delayed expense.
        /// </summary>
        public bool DelayedExpense { get; set; }

        /// <summary>
        /// Gets or Sets the category id.
        /// </summary>
        [ForeignKey("Category")]
        [Column(Order = 1)]
        public int CategoryId { get; set; }
    }
}