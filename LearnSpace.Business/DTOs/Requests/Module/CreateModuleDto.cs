
namespace LearnSpace.Business.DTOs.Requests.Module;
public class CreateModuleDto
{
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int OrderIndex { get; set; }
}