function OnButtonClick(){

  var isCollect = 1;

//  alert("Hello world!!");
  if(loginId.value == ""){
    //alert("ID NG");
    isCollect = 0;
    document.getElementById("loginId").className="form-control is-invalid";
  }
  else{
    document.getElementById("loginId").className="form-control";
  }
  if(InputPassword.value == ""){
    //alert("Pass NG");
    isCollect = 0;
    document.getElementById("InputPassword").className="form-control is-invalid";
  }
  else{
    document.getElementById("InputPassword").className="form-control";
  }
//  alert("good bye world!!");
}
