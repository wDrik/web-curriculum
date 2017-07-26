<?php

    header("Content-type: text/html; charset=utf-8");

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
            'is_false'  => 'O Campo <b>e-mail</b> não é valido!'
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

    $email_sender = 'w.drikss@gmail.com';
    $subject = 'Proposta de emprego';

    // message
    $message = '
    <html>
        <head>
          <title>Proposta de emprego</title>
        </head>
        <body>
          <h3>Olá eu sou '. $data['name'] .' da '. $data['company'] .'</h3>
          <p>'.$data['message'].'</p>
        </body>
    </html>
    ';

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.1' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

    // Additional headers
    $headers .= 'From: '. $email_sender ."\r\n";
    $headers .= 'Return-Path: '. $email_sender ."\r\n";
    $headers .= 'Reply-To: '. $data['email'] ."\r\n";

    // Mail it
    if(mail('w.drik@outlook.com', $subject, $message, $headers, "-f$email_sender")){
        echo json_encode(["status"=>true, "msg"=>"Mensagem enviada com <b>sucesso</b>! Favor aguardar retorno."]);exit;
    }else {
        echo json_encode(["status"=>false, "msg"=>"Desculpe ocorreu um <b>erro</b>!"]);exit;
    }
