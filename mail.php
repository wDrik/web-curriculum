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

    // Recipients
    $to  = 'w.drik@outlook.com';

    $subject = 'new test kkkk';

    // message
    $message = '
    <html>
    <head>
      <title>Birthday Reminders for August</title>
    </head>
    <body>
      <p>Here are the birthdays upcoming in August!</p>
      <table>
        <tr>
          <th>Person</th><th>Day</th><th>Month</th><th>Year</th>
        </tr>
        <tr>
          <td>Joe</td><td>3rd</td><td>August</td><td>1970</td>
        </tr>
        <tr>
          <td>Sally</td><td>17th</td><td>August</td><td>1973</td>
        </tr>
      </table>
    </body>
    </html>
    ';

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Additional headers
    $headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
    $headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
    $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
    $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

    // Mail it
    if(mail($to, $subject, $message, $headers)){
        echo json_encode(["status"=>true, "msg"=>"Email enviado com <strong>sucesso</strong>!"]);exit;
    }else {
        echo json_encode(["status"=>false, "msg"=>"Desculpe ocorreu um <strong>erro</strong>!"]);exit;
    }
