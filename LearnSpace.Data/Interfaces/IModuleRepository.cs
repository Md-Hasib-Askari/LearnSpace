using LearnSpace.Data.Interfaces;


using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;
public interface IModuleRepository : IGenericRepository<Module>
{
    Task<IEnumerable<Module>> GetModulesByCourseIdAsync(Guid courseId, CancellationToken cancellationToken = default);
}