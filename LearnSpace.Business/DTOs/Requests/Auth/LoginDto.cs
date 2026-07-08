using System.ComponentModel.DataAnnotations;


namespace LearnSpace.Business.DTOs.Requests.Auth;
public sealed class LoginDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = null!;

    [Required]
    public string Password { get; set; } = null!;
}