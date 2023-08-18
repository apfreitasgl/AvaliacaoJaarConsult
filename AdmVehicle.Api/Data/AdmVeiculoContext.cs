using System;
using System.Collections.Generic;
using AdmVehicle.Api.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace AdmVehicle.Api.Data;

public partial class AdmVeiculoContext : DbContext
{
    public AdmVeiculoContext()
    {
    }

    public AdmVeiculoContext(DbContextOptions<AdmVeiculoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Veiculo> Veiculos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Veiculo>(entity =>
        {
            entity.ToTable("Veiculo");

            entity.Property(e => e.AnoModelo).HasMaxLength(4);
            entity.Property(e => e.CodigoFipe).HasMaxLength(10);
            entity.Property(e => e.Combustivel).HasMaxLength(50);
            entity.Property(e => e.DataConsulta).HasMaxLength(45);
            entity.Property(e => e.Marca).HasMaxLength(20);
            entity.Property(e => e.MesReferencia).HasMaxLength(50);
            entity.Property(e => e.Modelo).HasMaxLength(50);
            entity.Property(e => e.Placa).HasMaxLength(10);
            entity.Property(e => e.SiglaCombustivel)
                .HasMaxLength(4)
                .IsFixedLength();
            entity.Property(e => e.TipoVeiculo).HasMaxLength(50);
            entity.Property(e => e.Valor).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
