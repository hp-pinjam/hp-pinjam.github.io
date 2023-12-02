import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

function PostLogIn(){
    let target_url = "https://asia-southeast2-hppinjam.cloudfunctions.net/Login";
    let tokenkey = "token";
    let tokenvalue = "bda91243ee1ba5363f95a7fd11e6c61df3b7f121669c57e6e1e4a8965674d787eab8142c84a2d9a7f01b812e606f042c9b7ad23a38b23ada8f72fc5cc70f0cc7"; 
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}
function responseData(result) {
    
    alert(result.message)
    if (result.status === true) {
        setCookieWithExpireHour("token", result.token, 2);
        // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
        window.location.href = "dashboard.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
    } else {
        
        window.location.href = "login.html";
    }
}

document.getElementById("buttonlogin").addEventListener("click",PostLogIn)