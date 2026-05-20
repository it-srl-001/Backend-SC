import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { OrdenesCompraService } from './ordenes-compra.service';
import { CreateOrdenDto } from './dto/create-orden.dto';

@Controller('ordenes-compra')
export class OrdenesCompraController {
  constructor(private readonly service: OrdenesCompraService) {}

  @Post()
  async crear(@Body() datos: CreateOrdenDto) {
    return this.service.crear(datos);
  }

  @Get()
  async obtenerTodas(@Query('adminId') adminId: string) {
    return this.service.findAll(+adminId || 0);
  }

  @Patch(':id/ocultar')
  async ocultar(@Param('id') id: string, @Query('adminId') adminId: string) {
    return this.service.ocultarParaAdmins(+id, +adminId || 0);
  }
}
