function selectEmail(ele){
    var $ele = $(ele);
    var $email2 = $('input[name=email2]');

    if($ele.val() == "1"){
        $email2.attr('readonly', false);
        $email2.val('');
    } else {
        $email2.attr('readonly', true);
        $email2.val($ele.val());
    }
}

function order(){

// 체크박스 내용 읽어서 결제 수단 알람으로 띄우기
}
