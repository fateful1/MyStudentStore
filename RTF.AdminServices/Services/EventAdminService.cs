using AutoMapper;
using RTF.AdminServices.DtoModels;
using RTF.AdminServices.Interfaces;
using RTF.Core.Models;
using RTF.Core.Repositories;

namespace RTF.AdminServices.Services;

public class EventAdminService : IEventAdminService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public EventAdminService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task CreateEventAsync(EventAdminDto eventAdminDto, CancellationToken cancellationToken)
    {
        var @event = _mapper.Map<Event>(eventAdminDto);
        var repo = _unitOfWork.GetRepository<Event>();
        await repo.AddAsync(@event);
        await _unitOfWork.SaveChangesAsync(cancellationToken);
    }
}