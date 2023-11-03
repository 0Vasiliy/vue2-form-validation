<template>
    <form class="v-form-validate row g-3">
        <div class="v-form-group">
            <!-- email -->
            <div class="v-form-input  col-md-8">
            <label for="inputEmail4" class="form-label">Эл. адрес</label>
            <input 
            type="email" 
            class="form-control" 
            id="inputEmail4" 
            placeholder="email@mail.ru"
            v-model.trim="form.email"
            >
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
                >
            </div>
            <!-- select1 -->
            <div class="v-form-input col-md-8">
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
            <div class="v-form-input col-md-8">
                <label for="inputState" class="form-label">Адрес</label>
                <select
                class="form-select" 
                id="inputState2" 
                multiple
                v-model="form.faforitAdres"
                >
                <option
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
                v-model.trim="$v.form.fio.$model"
                   >
            </div> 
            <!-- phone -->
            <div class="v-form-input col-md-8">
                <label for="inputAddress3" class="form-label">Телефон</label>
                <input
                type="text"
                class="form-control" 
                id="inputAddress3" 
                placeholder="Телефон"
                v-model.trim="form.phone"
                >
            </div>  
            <!-- Индекс -->
            <div class="v-form-input col-md-8">
                <label for="inputZip" class="form-label">Индекс</label>
                <input 
                type="text" c
                lass="form-control" 
                id="inputZip" 
                placeholder="192158"
                v-model="form.indexPochta"
                >
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
                <button type="submit" class="v-form-btn btn btn-primary">Войти в систему</button>
            </div>
        </div>       
    </form>   
</template>
<script>



export default {
    name: 'vFormValidate',
    validations () {
    return {
      form:{
        fio:{
            simpleValidator(value){
                console.log(value)
                return value.length >10
            }
        }
      }
      }
    },
    data(){
        return{
            form:{
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
            ]
        }
    },
    methods:{
        
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