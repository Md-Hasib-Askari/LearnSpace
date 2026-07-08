using Microsoft.Extensions.Logging;


using LearnSpace.Business.Interfaces;
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
using LearnSpace.Business.Config;
using LearnSpace.Data.Domain.Entities;
using LearnSpace.Data.Interfaces;
namespace LearnSpace.Business.Services;
public class EnrollmentService : IEnrollmentService
{
    private readonly IEnrollmentRepository _enrollmentRepo;
    private readonly ILogger<EnrollmentService> _logger;
    public EnrollmentService(IEnrollmentRepository enrollmentRepository, ILogger<EnrollmentService> logger)
    {
        _enrollmentRepo = enrollmentRepository;
        _logger = logger;
    }

    public async Task<Enrollment> EnrollUserAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default)
    {
        var existingEnrollment = await _enrollmentRepo.GetByUserIdAndCourseIdAsync(userId, courseId, cancellationToken);
        if (existingEnrollment != null)
        {
            return existingEnrollment;
        }

        var enrollment = new Enrollment();
        enrollment.CreateEnrollment(userId, courseId);

        await _enrollmentRepo.AddAsync(enrollment, cancellationToken);
        return enrollment;
    }

    public async Task<Enrollment?> GetByUserIdAndCourseIdAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default)
    {
        return await _enrollmentRepo.GetByUserIdAndCourseIdAsync(userId, courseId, cancellationToken);
    }

    public async Task<IEnumerable<Enrollment>> GetEnrollmentsByCourseIdAsync(Guid courseId, CancellationToken cancellationToken = default)
    {
        return await _enrollmentRepo.GetEnrollmentsByCourseIdAsync(courseId, cancellationToken);
    }

    public async Task<IEnumerable<Enrollment>> GetEnrollmentsByUserIdAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        return await _enrollmentRepo.GetEnrollmentsByUserIdAsync(userId, cancellationToken);
    }

    public async Task<IEnumerable<EnrolledStudentDto>> GetStudentsEnrolledInCourseAsync(Guid courseId, CancellationToken cancellationToken = default)
    {
        var students = await _enrollmentRepo.GetStudentsEnrolledInCourseAsync(courseId, cancellationToken);
        _logger.LogInformation("Found {EnrollmentCount} enrollments for course {CourseId}", students.Count(), courseId);
        return students.Select(s => new EnrolledStudentDto
        {
            UserId = s.Id,
            FullName = $"{s.FirstName} {s.LastName}",
            Email = s.Email
        });
    }

    public async Task<bool> UnenrollUserAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default)
    {
        var enrollment = await _enrollmentRepo.GetByUserIdAndCourseIdAsync(userId, courseId, cancellationToken);
        if (enrollment == null)
        {
            return false;
        }

        await _enrollmentRepo.DeleteAsync(enrollment, cancellationToken);
        return true;
    }
}