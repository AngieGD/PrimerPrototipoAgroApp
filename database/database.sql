DROP database if exists AgroAppP;
CREATE database IF NOT EXISTS AgroAppP;
use AgroAppP;

-- -----------------------------------------------------
-- Table `AgroAppF`.`trabajador`
-- -----------------------------------------------------
#Tabla maestra
CREATE TABLE IF NOT EXISTS trabajador (
  trabajadorId VARCHAR(50) NOT NULL,
  t_salario_jormal INT NOT NULL,
  t_nombre VARCHAR(150) NOT NULL,
  PRIMARY KEY (trabajadorId))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AgroAppF`.`insumos`
-- -----------------------------------------------------
#tabla maestra
CREATE TABLE IF NOT EXISTS insumos (
   insu_id INT NOT NULL AUTO_INCREMENT,
   in_nombre VARCHAR(100) NOT NULL,
   in_cantidadv INT NOT NULL,
  PRIMARY KEY (`insu_id`)
  )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AgroAppF`.`herramientas`
-- -----------------------------------------------------
#maestra
CREATE TABLE IF NOT EXISTS herramientas (
  idherramientas INT NOT NULL AUTO_INCREMENT,
  he_nombre VARCHAR(60) NOT NULL,
  he_cantidad INT NOT NULL,
  PRIMARY KEY (`idherramientas`)
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`terrenos`
-- -----------------------------------------------------
#maestra
CREATE TABLE IF NOT EXISTS terrenos (
  idterrenos INT NOT NULL AUTO_INCREMENT,
  te_nombre VARCHAR(60) NOT NULL,
  te_ubicacion VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idterrenos`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AgroAppF`.`clientes`
-- -----------------------------------------------------
#maestra
CREATE TABLE IF NOT EXISTS clientes (
  idcliente VARCHAR(25) NOT NULL,
  nombre VARCHAR(70) NOT NULL,
  apellido VARCHAR(70) NOT NULL,
  PRIMARY KEY (`idcliente`)
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`tipos_matenimiento`
-- -----------------------------------------------------
#tabla maestra
CREATE TABLE IF NOT EXISTS tipos_matenimiento (
  idtipos_matenimiento INT NOT NULL AUTO_INCREMENT,
  tm_nombre VARCHAR(60) NOT NULL,
  num_jornals INT NOT NULL,
  descripcion VARCHAR(45),
  fk_insumos INT,
  fk_herramientas INT NOT NULL,
  PRIMARY KEY (idtipos_matenimiento),
  CONSTRAINT fk_tipos_matenimiento_insumos1
    FOREIGN KEY (fk_insumos)
    REFERENCES insumos (insu_id),

  CONSTRAINT fk_tipos_matenimiento_herramientas1
    FOREIGN KEY (fk_herramientas)
    REFERENCES herramientas (idherramientas)
	)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `AgroAppF`.`subterreno`
-- -----------------------------------------------------
#maestra
CREATE TABLE IF NOT EXISTS subterreno (
  idsubterreno INT NOT NULL AUTO_INCREMENT,
  sub_area INT NOT NULL,
  sub_estado VARCHAR(10) CHECK (sub_estado = 'Ocupado' OR 
  sub_estado = 'Disponible') NOT NULL,
  -- sub_etapa VARCHAR(45) NOT NULL,
  fk_terrenos_idterrenos INT NOT NULL,
  PRIMARY KEY (idsubterreno),
  
  
  CONSTRAINT fk_subterreno_terrenos1
    FOREIGN KEY (fk_terrenos_idterrenos)
    REFERENCES terrenos(idterrenos)
    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`mantenimentos`
-- -----------------------------------------------------
#Transacción
CREATE TABLE IF NOT EXISTS mantenimentos (
  idmantenimentos INT NOT NULL AUTO_INCREMENT,
  ma_fecha DATE NOT NULL,
  ma_descripcion VARCHAR(150) NULL,
  ma_estado VARCHAR(45) CHECK (ma_estado = 'Asignado' OR 
  ma_estado = 'Pendiente' OR ma_estado = 'Terminado') NOT NULL,
  fk_tipos_matenimiento INT NOT NULL,
  fk_trabajador_manteni VARCHAR(50),
  PRIMARY KEY (idmantenimentos),
  CONSTRAINT fk_mantenimentos_tipos_matenimiento1
    FOREIGN KEY (fk_tipos_matenimiento)
    REFERENCES tipos_matenimiento (idtipos_matenimiento),
  CONSTRAINT fk_mantenimentos_trabajador1
    FOREIGN KEY (fk_trabajador_manteni)
    REFERENCES trabajador(trabajadorId))
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `AgroAppF`.`mantenimentos_has_subterreno`
-- -----------------------------------------------------
#
CREATE TABLE IF NOT EXISTS mantenimentos_has_subterreno (
  iD_mantenimentos_subterrenocol INT NOT NULL AUTO_INCREMENT,
  fk_mantenimentos INT NOT NULL,
  fk_subterreno INT NOT NULL,
  ms_costo INT,
  fecha_final_man_sub DATE NULL,
  PRIMARY KEY (iD_mantenimentos_subterrenocol),
  CONSTRAINT fk_mantenimentos_has_subterreno_mantenimentos1
    FOREIGN KEY (fk_mantenimentos)
    REFERENCES mantenimentos (idmantenimentos),
  CONSTRAINT fk_mantenimentos_has_subterreno_subterreno1
    FOREIGN KEY (fk_subterreno)
    REFERENCES subterreno(idsubterreno))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS facturas (
  idfacturas INT NOT NULL AUTO_INCREMENT,
  f_fecha_compra DATE NOT NULL,
  f_precio_total INT NOT NULL,
  fk_clientes_factura VARCHAR(25) NOT NULL,
  PRIMARY KEY (idfacturas),
  CONSTRAINT fk_facturas_clientes1
    FOREIGN KEY (fk_clientes_factura)
    REFERENCES clientes (idcliente))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`tipo_cultivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS tipo_cultivos (
  idtipo_cultivos INT NOT NULL AUTO_INCREMENT,
  tc_nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(60),
  PRIMARY KEY (idtipo_cultivos))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`subterreno_has_tipo_cultivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS subterreno_has_tipo_cultivos (
  fk_subterreno INT NOT NULL ,
  fk_tipo_cultivos INT NOT NULL,
  id_subterreno_has_tipo_cultivoscol INT NOT NULL AUTO_INCREMENT,
  fecha DATE NOT NULL,
  PRIMARY KEY (id_subterreno_has_tipo_cultivoscol),
  CONSTRAINT fk_subterreno_has_tipo_cultivos_subterreno1
    FOREIGN KEY (fk_subterreno)
    REFERENCES subterreno (idsubterreno),
  CONSTRAINT fk_subterreno_has_tipo_cultivos_tipo_cultivos1
    FOREIGN KEY (fk_tipo_cultivos)
    REFERENCES tipo_cultivos (idtipo_cultivos))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AgroAppF`.`cargas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS cargas (
  idcargas INT NOT NULL AUTO_INCREMENT,
  fk_tipo_cultivos_cargas INT NOT NULL,
  PRIMARY KEY (idcargas),
  CONSTRAINT fk_cargas_tipo_cultivos1
    FOREIGN KEY (fk_tipo_cultivos_cargas)
    REFERENCES tipo_cultivos (idtipo_cultivos))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `AgroAppF`.`facturas_has_cargas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS facturas_has_cargas (
  iD_facturas_has_cargascol INT NOT NULL AUTO_INCREMENT,
  fk_facturas INT NOT NULL,
  fk_cargas INT NOT NULL,
  fc_cantidad INT NOT NULL,
  PRIMARY KEY (iD_facturas_has_cargascol),
  CONSTRAINT fk_facturas_has_cargas_facturas1
    FOREIGN KEY (fk_facturas)
    REFERENCES facturas (idfacturas)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_facturas_has_cargas_cargas1
    FOREIGN KEY (fk_cargas)
    REFERENCES cargas (idcargas)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;





