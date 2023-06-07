using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Domain.Interfaces.ICategory;
using Domain.Interfaces.IServices;

namespace WebApi.Controllers
{
    /// <summary>
    /// The category controller.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        /// <summary>
        /// The i category.
        /// </summary>
        private readonly ICategory _iCategory;
        /// <summary>
        /// The i category service.
        /// </summary>
        private readonly ICategoryService _iCategoryService;

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoryController"/> class.
        /// </summary>
        /// <param name="iCategory">The i category.</param>
        /// <param name="iCategoryService">The i category service.</param>
        public CategoryController(ICategory iCategory, ICategoryService iCategoryService)
        {
            _iCategory = iCategory;
            _iCategoryService = iCategoryService;
        }

        /// <summary>
        /// Gets the all categories user.
        /// </summary>
        /// <param name="userEmail">The user email.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetAllCategoriesUser")]
        [Produces("application/json")]
        public async Task<object> GetAllCategoriesUser(string userEmail)
        {
            return await _iCategory.GetAllCategoriesUserAsync(userEmail);
        }

        /// <summary>
        /// Add category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPost("/api/AddCategory")]
        [Produces("application/json")]
        public async Task<object> AddCategory(Category category)
        {
            await _iCategoryService.AddCategory(category);
            return category;
        }

        /// <summary>
        /// Updates the category.
        /// </summary>
        /// <param name="category">The category.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpPut("/api/UpdateCategory")]
        [Produces("application/json")]
        public async Task<object> UpdateCategory(Category category)
        {
            await _iCategoryService.UpdateCategory(category);
            return category;
        }

        /// <summary>
        /// Gets the category by id.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/GetCategoryById")]
        [Produces("application/json")]
        public async Task<object> GetCategoryById(int id)
        {
            return await _iCategory.GetEntityById(id);
        }

        /// <summary>
        /// Deletes the category.
        /// </summary>
        /// <param name="id">The id.</param>
        /// <returns><![CDATA[Task<object>]]></returns>
        [HttpGet("/api/DeleteCategory")]
        [Produces("application/json")]
        public async Task<object> DeleteCategory(int id)
        {
            try
            {
                var category = await _iCategory.GetEntityById(id);
                await _iCategory.Delete(category);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
    }
}
