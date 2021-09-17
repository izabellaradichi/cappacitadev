<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Método POST</title>
</head>
<body>
    <h1>Dados recebidos pelo servidor</h1>
    <h2>Nome: <?php echo $_POST['nome'] ?></h2>
    <h2>Sobrenome: <?php echo $_POST['sobrenome'] ?></h2>
    <h2>E-mail: <?php echo $_POST['email'] ?></h2>
    <h2>Preferência de contato: <?php echo $_POST['preferencia_contato'] ?></h2>
    <h2>Desenvolvedor: <?php echo $_POST['dev'] ?></h2>
    <h2>Área de texto: <?php echo $_POST['textarea'] ?></h2> 
</body>
</html>