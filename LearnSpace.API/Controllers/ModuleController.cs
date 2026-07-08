
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


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
using LearnSpace.Business.Utils;
using LearnSpace.Data.Domain.Entities;
namespace LearnSpace.API.Controllers;
[ApiController]
[Authorize(Roles = "Admin,Staff,Instructor")]
public class ModuleController : ControllerBase
{
    private readonly IModuleService _moduleService;

    public ModuleController(IModuleService moduleService)
    {
        _moduleService = moduleService;
    }

    [HttpGet("courses/{courseId:guid}/modules")]
    [AllowAnonymous]
    public async Task<IActionResult> GetModulesByCourseId(Guid courseId, CancellationToken cancellationToken)
    {
        var modules = await _moduleService.GetModulesByCourseIdAsync(courseId, cancellationToken);
        return Ok(modules);
    }

    [HttpPost("courses/{courseId:guid}/modules")]
    public async Task<IActionResult> CreateModule(Guid courseId, [FromBody] CreateModuleDto createModuleDto, CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        var createdModule = await _moduleService.CreateModuleAsync(courseId, createModuleDto, cancellationToken);
        return CreatedAtAction(nameof(GetModulesByCourseId), new { courseId }, createdModule);
    }

    [HttpPut("modules/{id:guid}")]
    public async Task<IActionResult> UpdateModule(Guid id, [FromBody] UpdateModuleDto updateModuleDto, CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var updatedModule = await _moduleService.UpdateModuleAsync(id, updateModuleDto, cancellationToken);
        if (updatedModule == null)
        {
            return NotFound();
        }

        return Ok(updatedModule);
    }

    [HttpDelete("modules/{id:guid}")]
    public async Task<IActionResult> DeleteModule(Guid id, CancellationToken cancellationToken)
    {
        await _moduleService.DeleteModuleAsync(id, cancellationToken);
        return NoContent();
    }
}