
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
public interface IModuleService
{
    Task<ModuleDto> CreateModuleAsync(Guid courseId, CreateModuleDto createModuleDto, CancellationToken cancellationToken);
    Task<ModuleDto> GetModuleByIdAsync(Guid moduleId, CancellationToken cancellationToken);
    Task<IEnumerable<ModuleDto>> GetModulesByCourseIdAsync(Guid courseId, CancellationToken cancellationToken);
    Task<ModuleDto> UpdateModuleAsync(Guid moduleId, UpdateModuleDto updateModuleDto, CancellationToken cancellationToken);
    Task DeleteModuleAsync(Guid moduleId, CancellationToken cancellationToken);
}