using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdmVehicle.Api.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Veiculo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Marca = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Modelo = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AnoModelo = table.Column<int>(type: "int", maxLength: 4, nullable: false),
                    Combustivel = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CodigoFipe = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    MesReferencia = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    TipoVeiculo = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    SiglaCombustivel = table.Column<string>(type: "nchar(4)", fixedLength: true, maxLength: 4, nullable: false),
                    DataConsulta = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Placa = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Veiculo", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Veiculo");
        }
    }
}
