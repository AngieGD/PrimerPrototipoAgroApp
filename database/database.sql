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