using LearnSpace.Data.Interfaces;


using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;
public interface IQuizAttemptRepository : IGenericRepository<QuizAttempt>
{
    Task<QuizAttempt> StartQuizAttemptAsync(QuizAttempt attempt);
    Task<QuizAttempt> SubmitQuizAttemptAsync(QuizAttempt attempt);
    Task<IEnumerable<QuizAttempt>> GetQuizAttemptsByUserAsync(Guid userId);

}