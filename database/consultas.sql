
use AgroAppF;


select * from trabajador;
select * from insumos;
select descripcion from tipo_cultivos;

#consulta que me sirve para ordenar los salarios
select * from trabajador where t_salario_jormal between 20000 and 22000;

#lista los trabajadores en orden del jormal

select * from trabajador order by t_salario_jormal


