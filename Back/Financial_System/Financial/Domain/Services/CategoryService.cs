using Entities.Entities;
using Domain.Interfaces.IServices;
using Domain.Interfaces.ICategory;

namespace Domain.Services
{
    /// <summary>
    /// The category service.
    /// </summary>
    public class CategoryService : ICategoryService
    {
        /// <summary>
        /// The interface category.
        /// </summary>
        private readonly ICategory _iCategory;

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryService"/> class.
        /// </summary>
        /// <param name="iCategory">The i category.</param>
        public CategoryService(ICategory iCategory)
        {
            _iCategory = iCategory;
        }

        /// <summary>
        /// Add category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns>A Task.</returns>
        public async Task AddCategory(Category category)
        {
            var validate = category.ValidatePropiertyString(category.Name, "Name");
            if(validate)
                await _iCategory.Add(category);
        }

        /// <summary>
        /// Updates the category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns>A Task.</returns>
        public async Task UpdateCategory(Category category)
        {
            var validate = category.ValidatePropiertyString(category.Name, "Name");
            if (validate)
                await _iCategory.Update(category);
        }
    }
}