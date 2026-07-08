
using LearnSpace.Business.DTOs.Common;
namespace LearnSpace.Business.DTOs.Responses.Auth;
public class RegisterResponse : BaseResponse
{
    public Guid UserId { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
}