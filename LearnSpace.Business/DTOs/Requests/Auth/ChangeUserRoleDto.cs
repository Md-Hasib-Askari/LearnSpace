using System.ComponentModel.DataAnnotations;
using LearnSpace.Data.Domain.Enums;


namespace LearnSpace.Business.DTOs.Requests.Auth;
public sealed class ChangeUserRoleDto
{
    [Required]
    public Guid UserId { get; set; }

    [Required]
    public required string NewRole { get; set; }
}