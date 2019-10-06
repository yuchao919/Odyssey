using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace AbpDemo.EntityFramework.Repositories
{
    public abstract class AbpDemoRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<AbpDemoDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected AbpDemoRepositoryBase(IDbContextProvider<AbpDemoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class AbpDemoRepositoryBase<TEntity> : AbpDemoRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected AbpDemoRepositoryBase(IDbContextProvider<AbpDemoDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
