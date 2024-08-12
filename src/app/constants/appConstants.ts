import { environment } from "src/environments/environment";

const baseUrl = `${environment.apiUrl}`;
export class AppConstants {

    public static GET_IMAGE_PATH(image: string) {
        return `${baseUrl}` + "/upload/" + image;
    }

    public static POST_DO_LOGIN() {
        return `${baseUrl}` + "user/login";
    }
    public static DO_CHECK_OTP() {
        return `${baseUrl}` + "user/login/otp";
    }

    public static POST_CREAE_LEAD() {
        return `${baseUrl}` + "lead/add";
    }

    public static GET_ALL_LEADS() {
        return `${baseUrl}` + "lead/all";
    }
    public static GET_LEADS_BY_ID(id:any) {
        return `${baseUrl}` + "lead/" + id;
    }
    public static POST_CREAE_PROPERTY() {
        return `${baseUrl}` + "property/add";
    }

    public static GET_ALL_PROPERTIES() {
        return `${baseUrl}` + "property/all";
    }
    

    
    

   

}