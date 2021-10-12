
function randImg(params) {

  let img = document.getElementById("getimg");
  let name = document.getElementById("nameid").value;

  let lettersValidation = /^[A-Z a-z]+$/;


  if (name == "" || name == " ") {
    img.src = "https://joeschmoe.io/api/v1/$%7Bname%7D ";
    document.getElementById("txt").innerText = `Name Cannot Be Empty`;
    
    setTimeout(() => {
      document.getElementById("txt").innerText = `ENTER YOUR NAME`;
      document.getElementById("nameid").focus();
    }, 1500);

    
  } 
  else if(!(isNaN(name))){
    document.getElementById("txt").innerText = `Enter a valid Name`;
    document.getElementById("nameid").value = '';
    setTimeout(() => {
      document.getElementById("txt").innerText = `ENTER YOUR NAME`;
      document.getElementById("nameid").focus();
    }, 1500);
  }
  else if(name.match(lettersValidation)){
    img.src = `https://joeschmoe.io/api/v1/male/${name}`;
    document.getElementById("txt").innerText = `Hi, ${name}`; 
        setTimeout(() => {
      document.getElementById("nameid").value = '';
      document.getElementById("nameid").focus();
    }, 1500); 
  }
  else{
    document.getElementById("txt").innerText = `Enter a valid input`;
    document.getElementById("nameid").value = '';
    setTimeout(() => {  
      document.getElementById("txt").innerText = `ENTER YOUR NAME`;
      document.getElementById("nameid").focus();
    }, 1500);

    
  }
 
}


