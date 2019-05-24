using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace MyAbpMultiPageApp.EntityFramework.Repositories
{
    public abstract class MyAbpMultiPageAppRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<MyAbpMultiPageAppDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected MyAbpMultiPageAppRepositoryBase(IDbContextProvider<MyAbpMultiPageAppDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class MyAbpMultiPageAppRepositoryBase<TEntity> : MyAbpMultiPageAppRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected MyAbpMultiPageAppRepositoryBase(IDbContextProvider<MyAbpMultiPageAppDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
