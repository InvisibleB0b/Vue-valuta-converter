import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"



const endpoint: string = "https://convertertechexam.azurewebsites.net/converter";





new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        ammountToConvert: 0,
        convertType: "",
        convertetAmount: 0
    },
    methods: {


        async Convert() {

            try {

                let response = await axios.get(endpoint + `/${this.convertType}/${this.ammountToConvert}`);

                console.log(response);

                this.convertetAmount = response.data;

            } catch (error) {
                console.log(error);
            }

        }


    }
})