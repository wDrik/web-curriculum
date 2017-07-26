<?php

    $filter_rules = [
        'name' => FILTER_SANITIZE_STRING,
        'email' => FILTER_VALIDATE_EMAIL,
        'company' => FILTER_SANITIZE_STRING,
        'message' => FILTER_SANITIZE_STRING
    ];

    $validation = [
        'name' =>[
            'is_null'   => 'Preencha o campo <b>nome</b>!',
            'is_false'  => 'O Campo <b>nome</b> não é valido!'
        ],
        'email' =>[
            'is_null'   => 'Preencha o campo <b>e-mail</b>!',
            'is_false'  => 'O Campo <b>e-mail</b> não é valido!',
        ],
        'message' =>[
            'is_null'   => 'Preencha o campo <b>mensagem</b>!',
            'is_false'  => 'O Campo <b>mensagem</b> não é valido!'
        ]
    ];

    $data = filter_input_array(INPUT_POST, $filter_rules);

    foreach ($data as $field=>$value){
        if(empty($validation[$field])){
            continue;
        }
        if($value == null or $value == ''){
            echo json_encode(["status"=>false,"msg"=> $validation[$field]['is_null'] ]);exit;
        }elseif($value === false){
            echo json_encode(["status"=>false,"msg"=> $validation[$field]['is_false'] ]);exit;
        }
    }


    $subject = 'Assunto vem aqui';

    // message
    $message = '
    <html>
    <head>
      <title>Titulo vem aqui</title>
    </head>
    <body>
      <h3>Olá eu sou '. $name .' da '. $company .'</h3>
      <p>'.$message.'</p>
    </body>
    </html>
    ';

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
//    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf8' . "\r\n";

    // Additional headers
    $headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
    $headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
    $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
    $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

    // Mail it
    if(mail('w.drik@outlook.com', $subject, $message, $headers)){
        echo json_encode(["status"=>true, "msg"=>"Email enviado com <strong>sucesso</strong>!"]);exit;
    }else {
        echo json_encode(["status"=>false, "msg"=>"Desculpe ocorreu um <strong>erro</strong>!"]);exit;
    }
