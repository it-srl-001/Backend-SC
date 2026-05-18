import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { FacturasService } from './facturas.service';

@Controller('facturas')
export class FacturasController {
  constructor(private readonly service: FacturasService) {}

  @Post()
  async crear(@Body() datos: CreateFacturaDto) {
    return this.service.crear(datos);
  }

  @Get()
  async listar() {
    return this.service.findAll();
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string, @Query('adminId') adminId: string) {
    return this.service.eliminar(+id, +adminId || 0);
  }
}
