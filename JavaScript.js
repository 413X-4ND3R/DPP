document.addEventListener("DOMContentLoaded", function () {
    

  const Information1 = document.getElementById('Switch1Menu');
  let Information1OppenEllerStangd = true

  Information1.classList.add('OpenLage')

  Information1.addEventListener("click", function () {
        if(Information1OppenEllerStangd == false){
            Information1.classList.add('StangLage');
            Information1.classList.remove('OpenLage')
            Information1OppenEllerStangd = true;
        }
        else if(Information1OppenEllerStangd == true){
            Information1.classList.remove('StangLage')
            Information1.classList.add('OpenLage')
            Information1OppenEllerStangd = false;
        }
  });


});
