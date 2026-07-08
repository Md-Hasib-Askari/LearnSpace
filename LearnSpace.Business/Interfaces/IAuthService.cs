using LearnSpace.Data.Domain.Enums;

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

public interface IAuthService
{
    Task<bool> UserExistsAsync(string email, CancellationToken cancellationToken = default);
    Task<User> RegisterAsync(RegisterDto registerDto, CancellationToken cancellationToken = default);
    Task<string?> LoginAsync(LoginDto loginDto, CancellationToken cancellationToken = default);
    bool VerifyUserAsync(string token, CancellationToken cancellationToken = default);
    Task<RoleEnum> GetUserRolesAsync(Guid userId, CancellationToken cancellationToken = default);
    Task SendForgotPasswordTokenAsync(ForgotPasswordDto forgotPasswordDto, CancellationToken cancellationToken = default);
    Task ResetPasswordAsync(ResetPasswordDto resetPasswordDto, CancellationToken cancellationToken = default);
    Task ChangeUserRoleAsync(ChangeUserRoleDto changeUserRoleDto, CancellationToken cancellationToken = default);
}
