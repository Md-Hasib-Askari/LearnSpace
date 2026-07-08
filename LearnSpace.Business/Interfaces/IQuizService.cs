using LearnSpace.Business.Interfaces;


using LearnSpace.Data.Domain.Entities;
using LearnSpace.Business.DTOs.Requests.Auth;
using LearnSpace.Business.DTOs.Requests.Course;
using LearnSpace.Business.DTOs.Requests.Lesson;
using LearnSpace.Business.DTOs.Requests.Module;
using LearnSpace.Business.DTOs.Requests.Quiz;
using LearnSpace.Business.DTOs.Requests.User;
using LearnSpace.Business.DTOs.Responses.Course;
using LearnSpace.Business.DTOs.Responses.Lesson;
using LearnSpace.Business.DTOs.Responses.Module;
using LearnSpace.Business.DTOs.Responses.Quiz;
using LearnSpace.Business.DTOs.Responses.Enrollment;
using LearnSpace.Business.DTOs.Responses.User;
using LearnSpace.Business.DTOs.Responses.Auth;
namespace LearnSpace.Business.Interfaces;
public interface IQuizService
{
    // Quiz Management
    Task<QuizDto> CreateQuizAsync(CreateQuizDto createQuizDto);
    Task<QuizDto> UpdateQuizAsync(UpdateQuizDto updateQuizDto);
    Task<QuizDto> GetQuizByIdAsync(Guid quizId);
    Task<IEnumerable<QuizDto>> GetQuizzesByCourseAsync(Guid courseId);
    Task DeleteQuizAsync(Guid quizId);

    // Question Management
    Task<QuestionDto> AddQuestionToQuizAsync(AddQuestionToQuizDto addQuestionToQuizDto);
    Task<QuestionDto> UpdateQuestionAsync(UpdateQuestionDto updateQuestionDto);
    Task DeleteQuestionAsync(Guid questionId);

    // Question Option Management
    Task<QuestionOptionDto> AddOptionToQuestionAsync(AddOptionDto addOptionDto);
    Task<QuestionOptionDto> UpdateOptionAsync(UpdateOptionDto updateOptionDto);
    Task DeleteOptionAsync(Guid optionId);

    // Quiz Attempt Management
    Task<QuizAttemptResponse> StartQuizAttemptAsync(StartQuizAttemptDto startQuizAttemptDto);
    Task<QuizAttemptResponse> SubmitQuizAttemptAsync(SubmitQuizRequest submitQuizRequest);
    Task<QuizAttemptResponse> GetQuizAttemptByIdAsync(Guid attemptId);
    Task<IEnumerable<QuizAttemptResponse>> GetQuizAttemptsByUserAsync(Guid userId);
}