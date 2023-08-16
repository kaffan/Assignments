const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then((res)=>res.json())
.then((res)=>{
    console.log(res);
    EvenOrOdd(res);
    AddressKeysValues(res);
    EndWithBiz(res);
    cityPrint(res);
});

// Printing Name, username and Email if Id is Even or printing "odd"

const EvenOrOdd = (obj) =>{
    obj.map((ele)=>(ele.id%2===0) ? `Name - `+ele.name+`\nEmail Address - `+ele.email+`\nUsername - `+ele.username : "It's Odd");
}

// Printing Address keys and Values

const AddressKeysValues = (obj) =>{
    obj.map((ele)=>{
        const keys = Object.keys(ele.address);
        const values = Object.values(ele.address);
        for(let i=0;i<keys.length;i++){
            console.log(keys[i]+" - "+values[i]);
        }
    })
}

const EndWithBiz = (obj) =>{
    obj.map((ele)=>{
        const email = ele.email;
        const result = (email.substr(-4)===".biz") ? true : false;
        console.log(result);
    })
}

const cityPrint = (obj) =>{
    obj.map((ele)=>{
        if(ele.address.city==="Aliyaview" || ele.address.city==="Howemouth" || ele.address.city==="Gwenborough"){
        console.log("The Zipcode and Geo of cityname "+ele.address.city+" is: "+ele.address.zipcode+" and "+ele.address.geo.lat+" "+ele.address.geo.lng)    
        }
    })
}