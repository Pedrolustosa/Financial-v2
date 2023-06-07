using Domain.Interfaces.Generics;
using Microsoft.Win32.SafeHandles;
using Infrastructure.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Infrastructure.Repository.Generics
{
    /// <summary>
    /// The generic repository.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class GenericRepository<T> : IGeneric<T>, IDisposable where T : class
    {
        /// <summary>
        /// The context base.
        /// </summary>
        private readonly DbContextOptions<ContextBase> _ContextBase;

        /// <summary>
        /// Initializes a new instance of the <see cref="GenericRepository"/> class.
        /// </summary>
        public GenericRepository() 
        {
            _ContextBase = new DbContextOptions<ContextBase>();
        }

        /// <summary>
        /// Add the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        public async Task Add(T entity)
        {
            using var data = new ContextBase(_ContextBase);
            await data.Set<T>().AddAsync(entity);
            await data.SaveChangesAsync();
        }

        /// <summary>
        /// Deletes the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        public async Task Delete(T entity)
        {
            using var data = new ContextBase(_ContextBase);
            data.Set<T>().Remove(entity);
            await data.SaveChangesAsync();
        }

        /// <summary>
        /// Gets the entity by id.
        /// </summary>
        /// <param name="Id">The id.</param>
        /// <returns><![CDATA[Task<T>]]></returns>
        public async Task<T> GetEntityById(int Id)
        {
            using var data = new ContextBase(_ContextBase);
            return await data.Set<T>().FindAsync(Id);
        }

        /// <summary>
        /// List the list of ts.
        /// </summary>
        /// <returns><![CDATA[Task<List<T>>]]></returns>
        public async Task<List<T>> List()
        {
            using var data = new ContextBase(_ContextBase);
            return await data.Set<T>().ToListAsync();
        }

        /// <summary>
        /// Updates the <see cref="Task"/>.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns>A Task.</returns>
        public async Task Update(T entity)
        {
            using var data = new ContextBase(_ContextBase);
            data.Set<T>().Update(entity);
            await data.SaveChangesAsync();
        }

        #region Disposed https://docs.microsoft.com/pt-br/dotnet/standard/garbage-collection/implementing-dispose
        // Flag: Has Dispose already been called?
        /// <summary>
        /// The disposed.
        /// </summary>
        bool disposed = false;

        // Instantiate a SafeHandle instance.
        /// <summary>
        /// The handle.
        /// </summary>
        readonly SafeHandle handle = new SafeFileHandle(IntPtr.Zero, true);

        // Public implementation of Dispose pattern callable by consumers.
        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern.
        /// <summary>
        /// 
        /// </summary>
        /// <param name="disposing">If true, disposing.</param>
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
                return;

            // Free any other managed objects here.
            if (disposing)
                handle.Dispose();
                
            disposed = true;
        }
        #endregion
    }
}