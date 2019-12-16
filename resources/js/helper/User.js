
import Token from './Token'
import AppStorage from './AppStorage'
class User{
    login(data){
        axios.post('/api/auth/login', data)
            .then(function (response) {
                Token.afterLogin(response.data);
            })
            .catch(function (error) {
                //console.log(error.response.data);
            });

    }
    hasToken(){
        const availabletoken = AppStorage.getToken();
        if(availabletoken){
            return Token.isValid(availabletoken) ? true : false;

        }
        return false;

       // console.log("availabletoken",availabletoken);
    }
    loggedIn(){
        return this.hasToken();
    }
    logout(){
         AppStorage.clear();
         window.location ='/forum'

    }
    userName(){
        if(this.loggedIn()){
            return AppStorage.getUser();
        }
    }
    id(){
        if(this.loggedIn()){
            const token = AppStorage.getToken();
            const payload = Token.payload(token);
            return payload.sub;
        }
    }

    // admin(){
            
    //          return this.id() == 11;
    // }





}
export default User = new User();
