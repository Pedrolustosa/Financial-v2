namespace Domain.Interfaces.Generics
{
    /// <summary>
    /// The generic interface.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IGeneric<T> where T : class
    {
        /// <summary>
        /// Add the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        Task Add(T entity);
        /// <summary>
        /// Updates the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        Task Update(T entity);
        /// <summary>
        /// Deletes the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        Task Delete(T entity);
        /// <summary>
        /// Gets the entity by id.
        /// </summary>
        /// <param name="Id">The id.</param>
        /// <returns><![CDATA[Task<T>]]></returns>
        Task<T> GetEntityById(int Id);
        /// <summary>
        /// List the list of ts.
        /// </summary>
        /// <returns><![CDATA[Task<List<T>>]]></returns>
        Task<List<T>> List();
    }
}