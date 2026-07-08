using LearnSpace.Data.Interfaces;


using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;
public interface IQuestionRepository : IGenericRepository<Question>
{
    Task<Question> AddQuestionToQuizAsync(Question question, CancellationToken cancellationToken = default);
}