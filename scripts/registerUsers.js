const axios = require('axios');
const url = "http://localhost:5000/api/user"
const fs = require('fs')

fs.writeFile('userids.txt','',(err)=>{
    if(err){
        console.log(err);
        return;
    }
})

for (let i = 1; i <= 10; i++) {
    const body = {
        username: "user" + i,
        email: "user" + i + "@xmail.com",
        password: "user" + i
    }
    axios.post(url, body)
        .then(function (response) {
            fs.appendFile('userids.txt', response.data + ',', err => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

