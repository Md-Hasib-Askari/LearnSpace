
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
public interface ILessonService
{
    Task<LessonDto> CreateLessonAsync(CreateLessonDto createLessonDto, CancellationToken cancellationToken);
    Task<LessonDto> GetLessonByIdAsync(Guid lessonId, CancellationToken cancellationToken);
    Task<IEnumerable<LessonDto>> GetLessonsByModuleIdAsync(Guid moduleId, CancellationToken cancellationToken);
    Task<LessonDto> UpdateLessonAsync(Guid lessonId, UpdateLessonDto updateLessonDto, CancellationToken cancellationToken);
    Task DeleteLessonAsync(Guid lessonId, CancellationToken cancellationToken);
    Task MarkLessonAsCompleteAsync(Guid lessonId, CancellationToken cancellationToken);
}