async function postData(){
    name = document.getElementById('name').value;
    age = document.getElementById('age').value;
    gender = document.getElementById('gender').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    try{
        const response = await fetch('https://sheetdb.io/api/v1/xgc2gzewi0yxo',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                data: {
                    name: name,
                    age: age,
                    gender: gender,
                    email: email,
                    password: password
                }
            })

        });
        const data = await response.json();
        console.log("POST response", response);
    }catch(error){
        console.log('ERROR: ',error);
    }
}

