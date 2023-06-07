using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Notifications
{
    /// <summary>
    /// The notify.
    /// </summary>
    public class Notify
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Notify"/> class.
        /// </summary>
        public Notify() 
        {
            Notifications = new List<Notify>();
        }

        /// <summary>
        /// Gets or Sets the name propierty.
        /// </summary>
        [NotMapped]
        public string? NamePropierty { get; set; }

        /// <summary>
        /// Gets or Sets the message.
        /// </summary>
        [NotMapped]
        public string? Message { get; set; }

        /// <summary>
        /// Gets or Sets the notifications.
        /// </summary>
        [NotMapped]
        public List<Notify> Notifications { get; set; }

        /// <summary>
        /// Validates the propierty string.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <param name="namePropierty">The name propierty.</param>
        /// <returns>A bool.</returns>
        public bool ValidatePropiertyString(string value, string namePropierty)
        {
            if (string.IsNullOrWhiteSpace(value) || string.IsNullOrWhiteSpace(namePropierty))
            {
                Notifications.Add(new Notify
                {
                    Message = value,
                    NamePropierty = namePropierty,
                });
                return false;
            }
            return true;
        }
    }
}