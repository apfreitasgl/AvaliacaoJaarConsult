using Microsoft.AspNetCore.Mvc;
using RestSharp.Authenticators;
using RestSharp;
using System.Threading;
using AdmVehicle.Api.ViewModel;
using Newtonsoft.Json;

namespace AdmVehicle.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : ControllerBase
    {

        private readonly ILogger<VehicleController> _logger;

        public VehicleController(ILogger<VehicleController> logger)
        {
            _logger = logger;
        }

        [HttpPost(Name = "PostVehicle")]
        public async Task<IActionResult> VehicleDetailsInFipeTableAsync(string codeFipe, int yearVehicle = 0)
        {
            var options = new RestClientOptions("https://brasilapi.com.br/");
            var client = new RestClient(options);
            var request = new RestRequest($"api/fipe/preco/v1/{codeFipe}");
            var response = await client.GetAsync(request);
            var veiculos = JsonConvert.DeserializeObject<List<Vehicle>>(response.Content);

            if (yearVehicle != 0)
                veiculos = veiculos.Where(x => x.AnoModelo == yearVehicle).ToList();

            return Ok(veiculos);
        }
    }
}