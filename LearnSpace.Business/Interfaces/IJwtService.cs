using LearnSpace.Data.Domain.Enums;
using Microsoft.IdentityModel.Tokens;

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

public interface IJwtService
{
    string GenerateToken(Guid userId, string email, RoleEnum role);
    // string GenerateRefreshToken();
    SecurityToken? ValidateToken(string token);
    Guid? GetUserIdFromToken(string token);
}
