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
public class LessonService : ILessonService
{
    private readonly ILessonRepository _lessonRepo;
    private readonly IMapper _mapper;

    public LessonService(ILessonRepository lessonRepo, IMapper mapper)
    {
        _lessonRepo = lessonRepo;
        _mapper = mapper;
    }

    public async Task<LessonDto> CreateLessonAsync(CreateLessonDto createLessonDto, CancellationToken cancellationToken)
    {
        var lesson = new Lesson();
        lesson.Create(
            createLessonDto.Title,
            createLessonDto.ContentType,
            createLessonDto.ContentUrl,
            createLessonDto.OrderIndex,
            createLessonDto.ModuleId
        );
        await _lessonRepo.AddAsync(lesson, cancellationToken);
        return _mapper.Map<LessonDto>(lesson);
    }

    public async Task<LessonDto> GetLessonByIdAsync(Guid lessonId, CancellationToken cancellationToken)
    {
        var lesson = await _lessonRepo.GetByIdAsync(lessonId, cancellationToken);
        return _mapper.Map<LessonDto>(lesson);
    }

    public async Task<IEnumerable<LessonDto>> GetLessonsByModuleIdAsync(Guid moduleId, CancellationToken cancellationToken)
    {
        var lessons = await _lessonRepo.GetLessonsByModuleIdAsync(moduleId, cancellationToken);
        return _mapper.Map<IEnumerable<LessonDto>>(lessons);
    }

    public async Task<LessonDto> UpdateLessonAsync(Guid lessonId, UpdateLessonDto updateLessonDto, CancellationToken cancellationToken)
    {
        var lesson = await _lessonRepo.GetByIdAsync(lessonId, cancellationToken);
        if (lesson == null)
        {
            throw new KeyNotFoundException("Lesson not found");
        }
        _mapper.Map(updateLessonDto, lesson);
        await _lessonRepo.UpdateAsync(lesson, cancellationToken);
        return _mapper.Map<LessonDto>(lesson);
    }

    public async Task DeleteLessonAsync(Guid lessonId, CancellationToken cancellationToken)
    {
        var lesson = await _lessonRepo.GetByIdAsync(lessonId, cancellationToken);
        if (lesson == null)
        {
            throw new KeyNotFoundException("Lesson not found");
        }
        await _lessonRepo.DeleteAsync(lesson, cancellationToken);
    }

    public async Task MarkLessonAsCompleteAsync(Guid lessonId, CancellationToken cancellationToken)
    {
        var lesson = await _lessonRepo.GetByIdAsync(lessonId, cancellationToken);
        if (lesson == null)
        {
            throw new KeyNotFoundException("Lesson not found");
        }
        lesson.MarkAsComplete();
        await _lessonRepo.UpdateAsync(lesson, cancellationToken);
    }
}