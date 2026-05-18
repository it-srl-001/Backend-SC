import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';

@Injectable()
export class FacturasRepository extends Repository<Factura> {
  constructor(private dataSource: DataSource) {
    super(Factura, dataSource.createEntityManager());
  }
}
