
function getFormData(){

    var input = document.forms['myForms']['firstName'].value
    var inputAge = document.forms['myForms']['age'].value
    var inputHob1 = document.forms['myForms']['drawing'].checked
    var inputHob2 = document.forms['myForms']['playing'].checked
    var inputMale = document.getElementById('male').checked
    var inputFemale = document.getElementById('female').checked
    console.log(inputMale,inputFemale);
    // console.log(inputHob1,inputHob2);
    // var input = document.getElementById('firstName').value
    // var inputAge = document.getElementById('age').value


    if (input.length < 3) {
        document.getElementById('spanmsg1').innerText = "Less than 3 letters"
        var inpStyle = document.getElementById('spanmsg1')
        inpStyle.style.color = "red"
    } 

    if (inputAge > 150 || inputAge < 1) {
        document.getElementById('spanmsg2').innerText = "Not a valid age"
        var inpStyle = document.getElementById('spanmsg2')
        inpStyle.style.color = "red"
    }
    if(!(inputHob1 || inputHob2)){
       
        document.getElementById('spanmsg3').innerText = "Not checked"
        var inpStyle = document.getElementById('spanmsg3')
        inpStyle.style.color = "red"
    }
    if(!(inputFemale || inputMale)){
       
        document.getElementById('spanmsg4').innerText = "Not checked gender"
        var inpStyle = document.getElementById('spanmsg4')
        inpStyle.style.color = "red"
    }

}