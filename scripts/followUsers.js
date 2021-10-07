const axios = require('axios');
const fs = require('fs');
const mongoose = require('mongoose')

const userList = fs.readFileSync('./userids.txt','utf-8').split(',');
userList.pop();

const loginURL = "http://localhost:5000/api/user/login";
const loginBody = {first:"user1",password:"user1"}
const tokenPromise = axios.post(loginURL,loginBody)
    .then((res)=>{
        return res.data;
    })

const followURL = "http://localhost:5000/api/user/follow/"
tokenPromise.then((token)=>{
    for(let i=1;i<userList.length;i++){
        console.log(userList[i]);
        const finalURL = followURL+userList[i];
        console.log(finalURL)
        axios({
            method:'put',
            url:finalURL,
            data:{},
            headers:{
                authorization:"Bearer "+token
            }
        })
            .then((res)=>{
                console.log(res.data.user.following)
            })
            .catch(err=>console.log('err'))
    }   
})
