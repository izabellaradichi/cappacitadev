<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Método GET</title>
</head>
<body>
    <h1>Dados recebidos pelo servidor</h1>
    <h2>Nome: <?php echo $_GET['nome'] ?></h2>
    <h2>Sobrenome: <?php echo $_GET['sobrenome'] ?></h2>
    <h2>E-mail: <?php echo $_GET['email'] ?></h2>
    <h2>Preferência de contato: <?php echo $_GET['preferencia_contato'] ?></h2>
    <h2>Desenvolvedor: <?php echo $_GET['dev'] ?></h2>
    <h2>Área de texto: <?php echo $_GET['textarea'] ?></h2> 
</body>
</html>