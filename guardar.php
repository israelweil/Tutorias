<?php
 header("Content-Type: text-html;charset=utf-8");
 //configuracion para acceder a la base de datos
 function conn(){
   $hostname='127.0.0.1';
   $usuariodb='root';
   $passworddb='';
   $dbname='prueba';
   //Generar la conexion con el servidor
   $conectar = mysqli_connect($hostname,$usuariodb,$passworddb,$dbname);
   return $conectar;
 }
 //recuperar las variables
   $nombre=$_POST['nombre'];
   $numeroC=$_POST['numeroC'];
   $semestre=$_POST['semestre'];
   $especialidad=$_POST['especialidad'];
   $correo=$_POST['correo'];
   $mensaje=$_POST['mensaje'];

   $conectar=conn();
   //hacemos las sentencias de sql
   $sql="INSERT INTO datos VALUES ('$nombre','$numeroC','$semestre','$especialidad')";
   //ejecutamos la sentencia sql
   $ejecutar=mysqli_query($conectar,$sql);
   //verificamos la ejecucion
   if (!$ejecutar) {
        echo "Hubo Algun Error";
   }else {
     echo "<h1>Datos Guardados Correctamente</h1><br><a href='index.html'><h2>Insertar otro registro</h2></a>";
   }

 ?>
