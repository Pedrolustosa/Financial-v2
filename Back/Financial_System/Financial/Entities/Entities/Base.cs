using Entities.Notifications;
using System.ComponentModel.DataAnnotations;

namespace Entities.Entities
{
    /// <summary>
    /// The base.
    /// </summary>
    public class Base : Notify
    {
        /// <summary>
        /// Gets or Sets the id.
        /// </summary>
        [Display(Name = "Code")]
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets the name.
        /// </summary>
        [Display(Name = "Name")]
        public string? Name { get; set; }
    }
}