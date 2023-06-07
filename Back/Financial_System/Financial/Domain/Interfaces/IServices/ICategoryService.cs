using Entities.Entities;

namespace Domain.Interfaces.IServices
{
    /// <summary>
    /// The category service interface.
    /// </summary>
    public interface ICategoryService 
    {
        /// <summary>
        /// Add category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns>A Task.</returns>
        Task AddCategory(Category category);

        /// <summary>
        /// Updates the category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns>A Task.</returns>
        Task UpdateCategory(Category category);
    }
}