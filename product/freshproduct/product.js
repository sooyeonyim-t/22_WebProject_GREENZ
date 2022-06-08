function allPrice(){
  var num=document.getElementById("number").value;
  var one=document.getElementById("product1").innerHTML;
  var price=(parseInt(num))*(parseInt(one));

  document.getElementById("private").innerHTML=price;
}

function Buying(){
  var name=document.getElementById("product").innerHTML;
  var sum=document.getElementById("private").innerHTML;
  var num=document.getElementById("number").value;

  alert('구매상품 : '+name+'\n'+'개수 : '+num+'\n'+'합계 : '+sum+'\n');
}

function Carting(){
  var name=document.getElementById("product").innerHTML;
  var sum=document.getElementById("private").innerHTML;
  var num=document.getElementById("number").value;

  alert('구매상품 : '+name+'\n'+'개수 : '+num+'\n'+'합계 : '+sum+'\n');

}
