import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Factura } from './entities/factura.entity';
import { FacturasController } from './facturas.controller';
import { FacturasRepository } from './facturas.repository';
import { FacturasService } from './facturas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factura, Usuario])],
  controllers: [FacturasController],
  providers: [FacturasService, FacturasRepository],
})
export class FacturasModule {}
