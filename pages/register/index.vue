<template>
    <div>
        <h1 class="text-center mb-5">Register form</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs m-auto">
            <div class="mb-4">
                <label-component :classes="classesLabel" :fors="email.fors" :text="email.text"></label-component>
                <input-component :type="email.type" :placeholder="email.placeholder" :classes="classesInput" @onChanged="getEmail" />
            </div>
            <div class="mb-4">
                <label-component :classes="classesLabel" :fors="password.fors" :text="password.text"></label-component>
                <input-component :type="password.type" :placeholder="password.placeholder" :classes="classesInput" @onChanged="getPassword" />
            </div>
            <div class="mb-4">
                <label-component :classes="classesLabel" :fors="registrationPassword.fors" :text="registrationPassword.text"></label-component>
                <input-component :type="registrationPassword.type" :placeholder="registrationPassword.placeholder" :classes="classesInput" @onChanged="getRegistrationPassword" />
            </div>
            <button-component :type="button.type" :classes="classesButton" :text="button.text" @submitChanged="registerSubmit"></button-component>
        </form>
    </div>
</template>

<script>
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Buttons';
import guest from '../../middleware/guest';
export default {
    middleware: guest,
    components:{
        'input-component': Input,
        'label-component': Label,
        'button-component': Button
    },
    data(){
        return{
            classesLabel: 'block text-gray-700 text-sm font-bold mb-2',
            classesInput : 'w-full border-2 border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 p-3 rounded h-10',
            classesButton: 'bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
            button:{
                type: 'button',
                text: 'Submit'
            },
            email:{
                fors: 'email',
                text: 'Email',
                type: 'text',
                placeholder: 'Enter email please',
            },
            password:{
                fors: 'password',
                text: 'Password',
                type: 'password',
                placeholder: 'Enter password please',
            },
            registrationPassword:{
                fors: 'registrationPassword',
                text: 'Registration password',
                type: 'password',
                placeholder: 'Enter registration password please',
            },
            formData:{
                email: '',
                password: '',
                registrationPassword: ''
            },
        }
    },
    methods:{
        getEmail(event){
            this.formData.email = event;
        },
        getPassword(event){
            this.formData.password = event;
        },
        getRegistrationPassword(event){
            this.formData.registrationPassword = event;
        },
        async registerSubmit() {
            if (this.formData.password === this.formData.registrationPassword) {
                try{
                    await this.$store.dispatch("auth/register", 
                        { 
                            email : this.formData.email,
                            password: this.formData.password
                        });
                }catch(errors){
                    console.log(errors)
                }
            };
        }
    }
}
</script>