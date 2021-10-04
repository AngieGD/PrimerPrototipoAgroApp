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

