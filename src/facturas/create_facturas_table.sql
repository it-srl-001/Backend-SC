CREATE TABLE IF NOT EXISTS facturas (
  id SERIAL PRIMARY KEY,
  orden_compra_id INTEGER NULL REFERENCES ordenes_compra(id),
  proveedor VARCHAR NOT NULL,
  descripcion TEXT NULL,
  solicitado_por VARCHAR NULL,
  fecha DATE NOT NULL,
  numero_factura VARCHAR NOT NULL,
  condicion_pago VARCHAR NOT NULL,
  monto_total NUMERIC(14, 2) NOT NULL,
  moneda VARCHAR NOT NULL DEFAULT 'PESOS',
  tipo_iva VARCHAR NOT NULL DEFAULT 'FINAL',
  fecha_registro TIMESTAMP NOT NULL DEFAULT now()
);
