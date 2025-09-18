document.getElementById('main_form').addEventListener('submit', checkForm)

function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById('main_form');

    let name = el.name.value;
    let password = el.password.value;
    let repassword = el.repassword.value;
    let state=el.state.value;
    let fail ="";

    if (name== "" || password=="" || repassword=="" || state==""){
        fail = 'Заполните все поля!!!';
    }else if(name.length<=1 || name.length>10){
        fail = 'Введите корректное имя!';
    }else if(password != repassword) {
        fail = 'Пароли должны совпадать!';
    }else if(password.split('$').length>1){
        fail = "Некоррректный пароль!";
    }
    if (fail != ""){
        document.getElementById('error').innerHTML = fail;
        return false;
    }else{
        alert("Все данные корректно заполнены!");
        return false;
    }
}