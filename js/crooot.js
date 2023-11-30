import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://us-central1-pyoyek3.cloudfunctions.net/Login";
    let tokenkey = "token";
    let tokenvalue = "40e27523381e236813ece16a5e420192592d2ed80cd74eafe115afbaebe874d2"; 
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}
function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    
    if (result.message === "Selamat Datang") {
        // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
        window.location.href = "halaman.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
    } else if (result.message === "Password Salah") {
        // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
        window.location.href = "404.html";
    } else {
        // Penanganan lainnya (pesan kesalahan lainnya)
        window.location.href = "index.html";
    }
}