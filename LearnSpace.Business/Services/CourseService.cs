using AutoMapper;


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
using LearnSpace.Business.Config;
using LearnSpace.Data.Domain.Entities;
using LearnSpace.Data.Interfaces;
namespace LearnSpace.Business.Services;
public class CourseService : ICourseService
{
    private readonly ICourseRepository _courseRepo;
    private readonly IMapper _mapper;
    public CourseService(ICourseRepository courseRepo, IMapper mapper)
    {
        _courseRepo = courseRepo;
        _mapper = mapper;
    }

    public async Task<Course> CreateAsync(CreateCourseDto createCourseDto, CancellationToken cancellationToken)
    {
        var course = new Course();
        course.Create(
            createCourseDto.Title,
            createCourseDto.Description,
            createCourseDto.DurationInHours,
            createCourseDto.InstructorId
        );
        await _courseRepo.AddAsync(course, cancellationToken);
        return course;
    }

    public async Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken)
    {
        var course = await _courseRepo.GetByIdAsync(id, cancellationToken);
        if (course == null)
        {
            return false;
        }

        await _courseRepo.DeleteAsync(course, cancellationToken);
        return true;
    }

    public async Task<IEnumerable<Course>> GetAllAsync(CancellationToken cancellationToken)
    {
        return await _courseRepo.GetAllAsync(cancellationToken);
    }

    public async Task<Course?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return await _courseRepo.GetByIdAsync(id, cancellationToken);
    }

    public Task<Course?> PublishAsync(Guid id, PublishCourseDto publishCourseDto, CancellationToken cancellationToken)
    {
        return _courseRepo.PublishAsync(id, publishCourseDto.Publish, cancellationToken);
    }

    public async Task<Course?> UpdateAsync(Guid id, UpdateCourseDto updateCourseDto, CancellationToken cancellationToken)
    {
        var existingCourse = await _courseRepo.GetByIdAsync(id, cancellationToken);
        if (existingCourse == null)
        {
            return null;
        }

        existingCourse.UpdateDetails(updateCourseDto.Title, updateCourseDto.Description, updateCourseDto.DurationInHours);

        await _courseRepo.UpdateAsync(existingCourse, cancellationToken);
        return existingCourse;
    }

    public async Task<IEnumerable<Course>> GetCoursesByInstructorIdAsync(Guid instructorId, CancellationToken cancellationToken)
    {
        return await _courseRepo.GetCoursesByInstructorIdAsync(instructorId, cancellationToken);
    }
}