function selectEmail1(ele){
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

function selectEmail2(ele){
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

function selectEmail3(ele){
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

function selectEmail4(ele){
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

  var checkbox=document.getElementsByName("boxes");
  var msg="결제 정보";

  for(var i=0;i<checkbox.length;i++)
  {
    if(checkbox[i].checked)
    {
      if(i==0)
      {
        var s= document.getElementById("sel2");
        var v= document.getElementById("sel3");
        var x= document.getElementById("cardnum1").value;
        var cont=s.options[s.selectedIndex].value;
        var cons=v.options[v.selectedIndex].value;
        var st="신용카드"
        alert(msg+'\n'+'결제수단: '+st+'\n'+cont+'/'+cons+'/'+x);
      }
      else if(i==1)
      {
        var s= document.getElementById("sel4");
        var cont=s.options[s.selectedIndex].value;
        var st="무통장입금"
        alert(msg+'\n'+'결제수단: '+st+'\n'+cont);

      }
      else if(i==2)
      {
        var s= document.getElementById("sel5");
        var cont=s.options[s.selectedIndex].value;
        var st="계좌이체"
        alert(msg+'\n'+'결제수단: '+st+'\n'+cont);
      }
      else if(i==3)
      {
        var s= document.getElementById("sel6");
        var cont=s.options[s.selectedIndex].value;
        var x= document.getElementById("phone").value;
        var st="휴대폰 결제"
        alert(msg+'\n'+'결제수단: '+st+'\n'+cont+'/'+x);
      }
      }

  }

}
