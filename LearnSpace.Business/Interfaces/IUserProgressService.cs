
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
public interface IUserProgressService
{
    Task<UserProgress?> GetByUserAndLessonAsync(Guid userId, Guid lessonId);
    Task<IEnumerable<UserProgress>> GetByUserIdAsync(Guid userId);
    Task<IEnumerable<UserProgress>> GetByCourseIdAsync(Guid courseId, Guid userId);
    Task<IEnumerable<UserProgress>> GetCompletedLessonsByUserIdAsync(Guid userId);
    Task<int> GetCompletedLessonCountByUserIdAsync(Guid userId);
    Task<bool> HasUserCompletedLessonAsync(Guid userId, Guid lessonId);
    Task UpdateUserProgressAsync(Guid userId, Guid lessonId, bool isCompleted);

}