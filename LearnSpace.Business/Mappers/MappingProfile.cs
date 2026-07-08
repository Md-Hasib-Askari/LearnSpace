using AutoMapper;


using LearnSpace.Data.Domain.Entities;
using LearnSpace.Business.DTOs.Requests.Course;
using LearnSpace.Business.DTOs.Requests.Module;
using LearnSpace.Business.DTOs.Requests.Lesson;
using LearnSpace.Business.DTOs.Requests.Quiz;
using LearnSpace.Business.DTOs.Responses.Course;
using LearnSpace.Business.DTOs.Responses.Module;
using LearnSpace.Business.DTOs.Responses.Lesson;
using LearnSpace.Business.DTOs.Responses.Quiz;
using LearnSpace.Business.DTOs.Responses.Auth;
namespace LearnSpace.Business.Mappers;
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Lesson, LessonDto>().ReverseMap();
        CreateMap<CreateLessonDto, Lesson>();
        CreateMap<UpdateLessonDto, Lesson>();

        CreateMap<Module, ModuleDto>().ReverseMap();
        CreateMap<CreateModuleDto, Module>();
        CreateMap<UpdateModuleDto, Module>();

        CreateMap<Course, CourseDto>().ReverseMap();
        CreateMap<CreateCourseDto, Course>();
        CreateMap<UpdateCourseDto, Course>();
    }
}