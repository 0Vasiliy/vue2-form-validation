<template>
    <form class="v-form-validate row g-3">
        <div class="v-form-group">
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Эл. адрес</label>
            <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Адрес</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Проспект Ленина">
        </div>
        <div class="col-12">
            <label for="inputAddress2" class="form-label">Адрес 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Квартира">
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Город</label>
            <input type="text" class="form-control" id="inputCity" placeholder="Санкт-Петербург">
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">Область</label>
            <select id="inputState" class="form-select">
            <option selected>Выберите...</option>
            <option>...</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Индекс</label>
            <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Проверить меня
            </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Войти в систему</button>
        </div>
        </div>       
    </form>   
</template>
<script>

export default {
    name: 'vFormValidate'
}

</script>
<style scoped>
    .v-form-validate{
        max-width: 1620px;
        margin: 0 auto;
        border: 2px solid teal;
    }
    .v-form-group{
        padding: 50px;
    }
</style>