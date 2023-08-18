using AdmVehicle.Api.Data.Models;
using AdmVehicle.Api.ViewModel;
using AutoMapper;
using Microsoft.Extensions.Logging;

namespace AdmVehicle.Api.Mapping
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<Veiculo, VeiculoDTO>().ReverseMap();
        }
    }
}
