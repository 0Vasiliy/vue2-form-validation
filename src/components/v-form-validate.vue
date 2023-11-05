<template>
    <form class="v-form-validate row g-3" @submit.prevent="handlerSubmit">
        <div class="v-form-group">
            <!-- login -->
            <div class="v-form-input  col-md-8">
                <label for="login" class="form-label">Логин</label>
                <input 
                type="input" 
                class="form-control" 
                id="login" 
                placeholder="login"
                v-model.trim="form.login"
                :class="$v.form.login.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
                Обязательное поле
                </p>
                <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
                Здесь должно быть больше 5-и символов
                </p>
            </div>
            <!-- email -->
            <div class="v-form-input  col-md-8">
            <label for="inputEmail4" class="form-label">Эл. адрес</label>
            <input 
            type="email" 
            class="form-control" 
            id="inputEmail4" 
            placeholder="email@mail.ru"
            v-model.trim="form.email"
            :class="$v.form.email.$error ? 'is-invalid' : ''"
            >
            <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
            Email неккоректный
            </p>
            </div>
            <!-- password -->
            <div class="v-form-input col-md-8">
                <label for="inputPassword4" class="form-label">Пароль</label>
                <input 
                type="password" 
                class="form-control" 
                id="inputPassword4" 
                placeholder="************"
                v-model.trim="form.password"
                :class="$v.form.password.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">
                Обязательное поле
                </p>
            </div>
            <!-- select1 -->
            <div class="v-form-input col-md-8 col-sm-5 col-6">
                <label for="inputState" class="form-label">Город</label>
                <select id="inputState" 
                class="form-select" 
                v-model="form.city"
                >
                <option
                 selected
                 v-for="(city,index) in cityes"
                 :value="city.value"
                 :key="index"
                 >
                 {{ city.label }}</option>                
                </select>
            </div>
            <!-- select2 -->
            <div class="v-form-input col-md-8 col-sm-5 col-6">
                <label for="inputState" class="form-label">Адрес</label>
                <select
                class="form-select" 
                id="inputState2" 
                multiple
                v-model="form.faforitAdres"
                >
                <option class="col-md-8"
                v-for="(adres,index) in adreses"
                 :value="adres.value"
                 :key="index"
                 >
                 {{ adres.label }}
                
            </option>
                </select> 
                            
                
            </div>
            <!-- ФИО -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress2" class="form-label">ФИО</label>
                <input 
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="ФИО"
                v-model.trim="form.fio"
                :class="$v.form.fio.$error ? 'is-invalid' : ''"
                >
                <p v-if="$v.form.fio.$dirty && !$v.form.fio.required" class="invalid-feedback">
                Введите ФИО
                </p>
            </div> 
            <!-- phone -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Телефон</label>
                <input
                type="text"
                class="form-control" 
                id="inputAddress3" 
                placeholder="+7-(000)-000-00-00"
                v-model.trim="form.phone"
                :class="$v.form.phone.$error ? 'is-invalid' : ''"
                v-mask="'#-###-###-##-##'"
                maxlength="15"
                minlength="15"             
                >
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="invalid-feedback">
                Введите номер телефона
                </p>
            </div>  
            <!-- Индекс -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress4" class="form-label">Индекс</label>
                <input 
                type="text" 
                class="form-control" 
                id="inputAddress4" 
                placeholder="192158"
                v-model="form.indexPochta"
                :class="$v.form.indexPochta.$error ? 'is-invalid' : ''"
                v-mask="'######'"
                >
                <p v-if="$v.form.indexPochta.$dirty && !$v.form.indexPochta.required" class="invalid-feedback">
                Введите номер телефона
                </p>
            </div>
            <!-- checkbocks -->
            <div class="v-form-input col-md-8">
                <div class="form-check">
                <input 
                class="form-check-input" 
                type="checkbox" 
                id="gridCheck"
                v-model="form.checkbocks"
                >
                <label class="form-check-label" for="gridCheck">
                    Проверить меня
                </label>
                </div>
            </div>
            <!-- button -->
            <div class="v-form-input col-md-8">
                <button type="submit"  class="v-form-btn btn btn-primary">Войти в систему</button>
            </div>
        </div>       
    </form>   
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, email, numeric} from 'vuelidate/lib/validators'
export default {
    name: 'vFormValidate',
    mixins: [validationMixin],    
    data(){
        return{
            form:{
                login: '',
                fio: '',
                phone: '',
                email: '',
                password: '',
                indexPochta: '',
                checkbocks: false,
                city: 'Moskva',
                faforitAdres: ['Mockovskii pr']
            },          
            cityes: [
                {
                    label: 'Москва',
                    value: 'Moskva',
                },
                {
                    label: 'Тула',
                    value: 'Tula'
                },
                {
                    label: 'Орёл',
                    value: 'Orel'
                }               
            ],
            adreses:[
            {
                    label: 'Московский пр',
                    value: 'Mockovskii pr',
                },
                {
                    label: 'Ленинский пр',
                    value: 'Leninskii pr'
                },
                {
                    label: 'Центральная ул',
                    value: 'Centralnay ul'
                } 
            ],
       
        }
    },
    validations: {
      form: {
        login: { required, minLength: minLength(5)},
        email: { required, email },
        password: { required },
        fio: {required},
        phone: {required, numeric},
        indexPochta:{required, numeric}
      }
    },
    methods:{
        handlerSubmit(){
            this.$v.form.$touch()
        if (!this.$v.form.$error) {
          console.log('Валидация прошла успешно')
        }
    }
   
}
}
</script>
<style scoped>
    .v-form-validate{
        max-width: 600px;
        margin: 0 auto;
        border: 4px solid #2f4f4f;
    }
    .v-form-group{
        padding: 50px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
    .v-form-input{
        margin-top: 20px;
    }
    .v-form-btn{
        margin-left: 0;
    }
    .v-form-btn{
        background-color: #778899;
        color: white;
        border: none;
    }
    .v-form-btn:hover{
        transition: all ease-in .3s;
        background-color: #2f4f4f;
    }
    label{
        display: flex;
        color: #2f4f4f;
    }
    input{
        border: 3px solid teal;;
    }
    select{
        border: 3px solid teal;;
    }
    option{
        color: #2f4f4f;
    }
</style>