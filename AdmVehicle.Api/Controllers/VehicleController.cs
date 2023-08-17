using Microsoft.AspNetCore.Mvc;
using RestSharp.Authenticators;
using RestSharp;
using System.Threading;
using AdmVehicle.Api.ViewModel;
using Newtonsoft.Json;

namespace AdmVehicle.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VehicleController : ControllerBase
    {

        private readonly ILogger<VehicleController> _logger;

        public VehicleController(ILogger<VehicleController> logger)
        {
            _logger = logger;
        }

        [HttpPost(Name = "PostVehicle")]
        public async Task<IActionResult> VehicleDetailsInFipeTable(string codeFipe, int yearVehicle)
        {
            var options = new RestClientOptions("https://brasilapi.com.br/")
            {
                //Authenticator = new HttpBasicAuthenticator("username", "password")
            };
            var client = new RestClient(options);
            var request = new RestRequest($"api/fipe/preco/v1/{codeFipe}");
            var response = await client.GetAsync(request);
            var veiculos = JsonConvert.DeserializeObject<List<Vehicle>>(response.Content).Where(x => x.AnoModelo == yearVehicle); 

            return Ok(veiculos);
        }
    }
}