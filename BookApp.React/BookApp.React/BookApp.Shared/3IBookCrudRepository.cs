using System.Threading.Tasks;
using System.Collections.Generic;

namespace BookApp.Shared
{
    public interface ICrudRepositoryBase<T, TIdentifier>
    {
        Task<T> AddAsync(T model);//입력
        Task<List<T>> GetAllAsync();//전체 출력
        Task<T> GetByIdAsync(TIdentifier id);//상세
        Task<bool> UpdateAsync(T model);//수정
        Task<bool> DeleteAsync(TIdentifier id);//삭제
    }
    /// <summary>
    /// [3] Generic Repo interface => ICrudRepoBase.cs
    /// </summary>
    public interface IBookCrudRepository<T> : ICrudRepositoryBase<T,int>
    {
        //Empty
    }
}
