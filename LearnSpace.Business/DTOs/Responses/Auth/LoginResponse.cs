using System.ComponentModel.DataAnnotations;


using LearnSpace.Business.DTOs.Common;
namespace LearnSpace.Business.DTOs.Responses.Auth;
public sealed class LoginResponse : BaseResponse
{
    public string? Token { get; set; }
}