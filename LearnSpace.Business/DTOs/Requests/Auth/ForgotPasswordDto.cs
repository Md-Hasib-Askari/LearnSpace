using System.ComponentModel.DataAnnotations;


namespace LearnSpace.Business.DTOs.Requests.Auth;
public sealed class ForgotPasswordDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
}