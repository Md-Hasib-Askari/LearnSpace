using LearnSpace.Data.Interfaces;


using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;
public interface IEnrollmentRepository : IGenericRepository<Enrollment>
{
    Task<Enrollment?> GetByUserIdAndCourseIdAsync(Guid userId, Guid courseId, CancellationToken cancellationToken = default);
    Task<IEnumerable<Enrollment>> GetEnrollmentsByUserIdAsync(Guid userId, CancellationToken cancellationToken = default);
    Task<IEnumerable<Enrollment>> GetEnrollmentsByCourseIdAsync(Guid courseId, CancellationToken cancellationToken = default);
    Task<IEnumerable<User>> GetStudentsEnrolledInCourseAsync(Guid courseId, CancellationToken cancellationToken = default);
}