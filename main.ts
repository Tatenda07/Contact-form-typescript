let personData: any= []

let jsDOM: any = {
    data: {
        fname: <HTMLInputElement>document.getElementById('firstName'),
        lname: <HTMLInputElement>document.getElementById('lastName'),
        email: <HTMLInputElement>document.getElementById('email'),
        phone: <HTMLInputElement>document.getElementById('phoneNumber'),
        city: <HTMLInputElement>document.getElementById('city'),
        message: <HTMLInputElement>document.getElementById('mailMessage')
    },
    btn: {
        addBtn: <HTMLButtonElement>document.getElementById('addPerson'),
        showData: <HTMLButtonElement>document.getElementById('showData')
    },
    personData: document.getElementById('personData')

}

let jsFunc: any = {
    showData(): any{
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");

        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        node.appendChild(nodeHeader);

        let fullname, email, phone, city, message;
        
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email=x.email, phone=x.phone, city=x.city, message=x.message;

            let personData = document.createElement('p');
            //fullname
            let personDataText = document.createTextNode(`Name: ${fullname}`);
            personData.appendChild(personDataText);
            let br = document.createElement('br');
            personData.appendChild(br);
            //email
            personDataText = document.createTextNode(`Email: ${email}`);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //phone number
            personDataText = document.createTextNode(`Phone: ${phone}`);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //city
            personDataText = document.createTextNode(`City: ${city}`);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //message
            personDataText = document.createTextNode(`Message: ${message}`);
            personData.appendChild(personDataText);

            node.appendChild(personData);
        })
        parentDiv.appendChild(node);
    },
    clearFields(): any {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
        jsDOM.data.message.value = "";
        
    },
    addData(): any{
       //if statement to avoid empty or null values
       if(jsDOM.data.fname.value == "" || jsDOM.data.lname.value == "" || jsDOM.data.email.value == ""|| jsDOM.data.phone.value == ""|| jsDOM.data.phone.city == ""){
        alert("Please fill out all fields");
        return false;
        }else{
            personData.push({firstname: <HTMLInputElement>jsDOM.data.fname.value, lastname: <HTMLInputElement>jsDOM.data.lname.value, email: <HTMLInputElement>jsDOM.data.email.value, phone: <HTMLInputElement>jsDOM.data.phone.value, city: <HTMLInputElement>jsDOM.data.city.value, message: <HTMLInputElement>jsDOM.data.message.value});
            console.log(personData);
            jsFunc.clearFields();
            alert("Data successfully entered"); //alert user the the data has been successfully entered
        }
    }
}

jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);