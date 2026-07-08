using LearnSpace.Data.Domain.Enums;

using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.Data.Interfaces;

public interface IUserRepository : IGenericRepository<User>
{
    Task<User?> GetByEmailAsync(string email, CancellationToken cancellationToken = default);
    Task UpdateUserRoleAsync(Guid userId, RoleEnum newRole, CancellationToken cancellationToken = default);
}