using LearnSpace.Data.Interfaces;

public interface IQuizRepository : IGenericRepository<Quiz>
{
    Task<IEnumerable<Quiz>> GetQuizzesByCourseAsync(Guid courseId, CancellationToken cancellationToken = default);
}