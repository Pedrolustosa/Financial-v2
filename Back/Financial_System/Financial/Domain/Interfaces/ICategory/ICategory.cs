using Entities.Entities;
using Domain.Interfaces.Generics;

namespace Domain.Interfaces.ICategory
{
    /// <summary>
    /// The category interface.
    /// </summary>
    public interface ICategory : IGeneric<Category> 
    {
        /// <summary>
        /// Gets the all categories user asynchronously.
        /// </summary>
        /// <param name="emailUser">The email user.</param>
        /// <returns><![CDATA[Task<IList<Category>>]]></returns>
        Task<IList<Category>> GetAllCategoriesUserAsync(string emailUser);
    }
}