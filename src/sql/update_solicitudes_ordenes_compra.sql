ALTER TABLE solicitudes_compra
  ADD COLUMN IF NOT EXISTS imagen_referencia TEXT NULL;

ALTER TABLE ordenes_compra
  ADD COLUMN IF NOT EXISTS creado_por_nombre VARCHAR NULL,
  ADD COLUMN IF NOT EXISTS creado_por_email VARCHAR NULL,
  ADD COLUMN IF NOT EXISTS oculto_para_admins BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS ocultado_por_email VARCHAR NULL;
