
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
public interface IEnrollmentService
{
    Task<Enrollment?> GetByUserIdAndCourseIdAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default);
    Task<IEnumerable<Enrollment>> GetEnrollmentsByUserIdAsync(Guid userId, CancellationToken cancellationToken = default);
    Task<IEnumerable<Enrollment>> GetEnrollmentsByCourseIdAsync(Guid courseId, CancellationToken cancellationToken = default);
    Task<IEnumerable<EnrolledStudentDto>> GetStudentsEnrolledInCourseAsync(Guid courseId, CancellationToken cancellationToken = default);
    Task<Enrollment> EnrollUserAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default);
    Task<bool> UnenrollUserAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default);
}