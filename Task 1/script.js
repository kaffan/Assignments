// Mobile number section code design

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
//Email and Mobile elemnts

const tel = document.querySelector("#phone");
const email = document.querySelector("#Email");

// Once values starts getting added
tel.addEventListener("change",removeRequiredField);
email.addEventListener("change",removeRequiredField);

// Remove Required Feld

function removeRequiredField(e){
    if(e.target===tel){
        e.target.parentNode.nextSibling.innerHTML = "";
    }
    else{
        e.target.nextSibling.innerHTML = "";
    }
}

// modifying Mobile input's css properties
const MobCss = document.querySelector("#phone")
MobCss.parentNode.classList.add('mobileC');
MobCss.style.border = "0";
MobCss.style.width = "85%"


function printRequired(element){
    // console.log(element.parentNode.children);
    element.nextSibling.innerHTML = `<span style="color:red;">Required Field</span>`
}

const verifyEmail = () =>{
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(email.value) || email.value.lemgth<7){
        alert("you have entered an invalid Email Address");
    }
}

const verifyTel = () =>{
    if(!tel.value.length<10 || !tel.value.length>10 || !tel.value.reduce((acc,ele)=>acc && isNaN(ele), true)){
        alert("You have entered an invalid mobile number");
    }
}
function submitHandler(e){
    e.preventDefault()
    console.log(tel);
    if(!tel.value || !email.value){
        if(!tel.value && !email.value){
            printRequired(tel.parentNode);
            printRequired(email);
        }
        else if(!tel.value){
            printRequired(tel.parentNode)
        }
        else if(!email.value){
            printRequired(email);
        }
    }
    else{
        verifyEmail();
        verifyTel();
    }
}


//  TASK 2

// Fetching data from JSON sample data
// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((res)=>res.json())
// .then((res)=>{
//     console.log(res);
//     EvenOrOdd(res);
//     AddressKeysValues(res);
//     EndWithBiz(res);
//     cityPrint(res);
// });

// // Printing Name, username and Email if Id is Even or printing "odd"

// const EvenOrOdd = (obj) =>{
//     obj.map((ele)=>(ele.id%2===0) ? console.log(`Name - `+ele.name+`\nEmail Address - `+ele.email+`\nUsername - `+ele.username) : console.log("It's Odd"));
// }

// // Printing Address keys and Values

// const AddressKeysValues = (obj) =>{
//     obj.map((ele)=>{
//         const keys = Object.keys(ele.address);
//         const values = Object.values(ele.address);
//         for(let i=0;i<keys.length;i++){
//             console.log(keys[i]+" - "+values[i]);
//         }
//     })
// }

// const EndWithBiz = (obj) =>{
//     obj.map((ele)=>{
//         const email = ele.email;
//         const result = (email.substr(-4)===".biz") ? true : false;
//         console.log(result);
//     })
// }

// const cityPrint = (obj) =>{
//     obj.map((ele)=>{
//         if(ele.address.city==="Aliyaview" || ele.address.city==="Howemouth" || ele.address.city==="Gwenborough"){
//         console.log("The Zipcode and Geo of cityname "+ele.address.city+" is: "+ele.address.zipcode+" and "+ele.address.geo.lat+" "+ele.address.geo.lng)    
//         }
//     })
// }

