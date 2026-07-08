using LearnSpace.Data.Interfaces;


using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;
public interface ILessonRepository : IGenericRepository<Lesson>
{
    Task<IEnumerable<Lesson>> GetLessonsByModuleIdAsync(Guid moduleId, CancellationToken cancellationToken = default);
}