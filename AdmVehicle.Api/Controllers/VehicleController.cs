using Microsoft.AspNetCore.Mvc;
using RestSharp.Authenticators;
using RestSharp;
using System.Threading;
using AdmVehicle.Api.ViewModel;
using Newtonsoft.Json;
using AdmVehicle.Api.Data;
using AutoMapper;
using Microsoft.Extensions.Logging;
using AdmVehicle.Api.Data.Models;

namespace AdmVehicle.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : ControllerBase
    {

        private readonly ILogger<VehicleController> _logger;
        private readonly IMapper _mapper;
        private readonly AdmVeiculoContext _context;

        public VehicleController(ILogger<VehicleController> logger, AdmVeiculoContext context, IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("VehicleDetailsInFipeTableAsync")]
        public async Task<IActionResult> VehicleDetailsInFipeTableAsync(string codeFipe, int yearVehicle = 0)
        {
            var options = new RestClientOptions("https://brasilapi.com.br/");
            var client = new RestClient(options);
            var request = new RestRequest($"api/fipe/preco/v1/{codeFipe}");
            var response = await client.GetAsync(request);
            var veiculos = JsonConvert.DeserializeObject<List<VeiculoDTO>>(response.Content);

            if (yearVehicle != 0)
                veiculos = veiculos.Where(x => x.AnoModelo == yearVehicle).ToList();

            return Ok(veiculos);
        }
        [HttpPost(Name = "PostAsync")]
        public async Task<IActionResult> PostAsync([FromBody] VeiculoDTO veiculo)
        {
            var veic = _mapper.Map<Veiculo>(veiculo);
            _context.Veiculos.Add(veic);
            await _context.SaveChangesAsync();
            return Ok("Veiculo atualizado com sucesso!");
        }
    }
}