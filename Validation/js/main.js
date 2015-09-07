/**
 * Created by Mark Lottes for N221 on 4/13/2015.
 */

// get references
var formReference = document.querySelector("#myForm");
var txtFirstName = document.querySelector("#firstName");
var txtLastName = document.querySelector("#lastName");
var txtAddress = document.querySelector("#address");
var txtCity = document.querySelector("#city");
var txtState = document.querySelector("#state");
var txtZip = document.querySelector("#zip");
var txtPhone = document.querySelector("#phone");
var txtEmail = document.querySelector("#email");
var errorDivs = document.getElementsByClassName("error");


//listen for form submission
formReference.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){

    var isValid = true;

    //clear out error divs
    for(var i = 0; i < errorDivs.length; i++){
        errorDivs[i].innerHTML = "";
    }

    //checking for validity
    //of course there should be *something* in the textfield
    //ALSO
    //it should not be simply a number.
    //to  check for a number use...isNaN (returns 'false' if the argument is numerical)

        if (txtFirstName.value == "" || !isNaN(txtFirstName.value)) {
            //something is wrong
            isValid = false;
            txtFirstName.nextElementSibling.innerHTML = "Please enter a valid first name.";
        }

        if (txtLastName.value == "" || !isNaN(txtLastName.value)) {
            //something is wrong
            isValid = false;
            txtLastName.nextElementSibling.innerHTML = "Please enter a valid last name.";
        }

        if (txtAddress.value == "" || !isNaN(txtAddress.value)) {
            //something is wrong
            isValid = false;
            txtAddress.nextElementSibling.innerHTML = "Please enter a valid address name.";
        }

        if (txtCity.value == "" || !isNaN(txtCity.value)) {
            //something is wrong
            isValid = false;
            txtCity.nextElementSibling.innerHTML = "Please enter a valid city name.";
        }

        if (txtState.value == "" || !isNaN(txtState.value)) {
            //something is wrong
            isValid = false;
            txtState.nextElementSibling.innerHTML = "Please enter a valid state name.";
        }

        //check zip
        //ANY .value is just a string
        if (txtZip.value == "" || isNaN(txtZip.value) || txtZip.value.length != 5) {
            isValid = false;
            txtZip.nextElementSibling.innerHTML = "Please enter a valid Zip code.";
        }

        //Phone

        //need to strip out 'bad' characters perhaps via repeated use of string.replace
        //bad characters are - ( ) . " "
        //should get to something that is JUST a numerical string with 10 digits
        //then you can check
        var stripped = txtPhone.value.replace(/[\(\)\.\-\ ]/g, '');
        if (stripped.value == "" || isNaN(stripped.value) || stripped.value.length != 10) {
            isValid = false;
            txtPhone.nextElementSibling.innerHTML = "Please enter a valid 10 digit phone number with numerical digits only.";
        }

        //EMAIL
        //gotta be there, gotta be a string
        //has to have an @ sign and a . at some point after the @ sign.
        //use this via string.indexOf
        //google "javascript index of"
        var atPosition = txtEmail.indexOf("@");
        var dotPosition = txtEmail.indexOf(".");

        if (txtEmail.value == "" || atPosition < 1 || (dotPosition - atPosition < 2)) {
            isValid = false;
            txtEmail.nextElementSibling.innerHTML = "Please enter a valid Email address.";
        }


    //stop the event from doing whatever it does normally
    if(!isValid) {
        event.preventDefault();
    }
}

