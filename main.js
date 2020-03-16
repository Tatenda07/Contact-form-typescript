var personData = [];
var jsDOM = {
    data: {
        fname: document.getElementById('firstName'),
        lname: document.getElementById('lastName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phoneNumber'),
        city: document.getElementById('city'),
        message: document.getElementById('mailMessage')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
};
var jsFunc = {
    showData: function () {
        var parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        var node = document.createElement("div");
        var nodeHeader = document.createElement("h3");
        var nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        node.appendChild(nodeHeader);
        var fullname, email, phone, city, message;
        personData.forEach(function (x) {
            fullname = x.firstname + " " + x.lastname, email = x.email, phone = x.phone, city = x.city, message = x.message;
            var personData = document.createElement('p');
            //fullname
            var personDataText = document.createTextNode("Name: " + fullname);
            personData.appendChild(personDataText);
            var br = document.createElement('br');
            personData.appendChild(br);
            //email
            personDataText = document.createTextNode("Email: " + email);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //phone number
            personDataText = document.createTextNode("Phone: " + phone);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //city
            personDataText = document.createTextNode("City: " + city);
            personData.appendChild(personDataText);
            br = document.createElement('br');
            personData.appendChild(br);
            //message
            personDataText = document.createTextNode("Message: " + message);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        });
        parentDiv.appendChild(node);
    },
    clearFields: function () {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
        jsDOM.data.message.value = "";
    },
    addData: function () {
        //if statement to avoid empty or null values
        if (jsDOM.data.fname.value == "" || jsDOM.data.lname.value == "" || jsDOM.data.email.value == "" || jsDOM.data.phone.value == "" || jsDOM.data.phone.city == "") {
            alert("Please fill out all fields");
            return false;
        }
        else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value, message: jsDOM.data.message.value });
            console.log(personData);
            jsFunc.clearFields();
            alert("Data successfully entered"); //alert user the the data has been successfully entered
        }
    }
};
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);
