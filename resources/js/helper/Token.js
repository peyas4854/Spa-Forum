import AppStorage from "./AppStorage";
class Token{
    afterLogin(data){
        const user = data.user;
        const token = data.access_token;
        if ( this.isValid(token)){

            AppStorage.store(user,token);
            window.location = '/forum'
        }
    }
    isValid(token){
        const payload = this.payload(token);
        if(payload){
            return payload.iss  ==  "http://127.0.0.1:8000/api/auth/login" || " http://127.0.0.1:8000/api/auth/signup" ? true :
                false

        }
        return false;

    }

	payload(token){

		const payload = token.split('.')[1]
		return this.decode(payload);

	}
	decode(payload){
		return JSON.parse(atob(payload));

	}




}
export default Token = new Token();
