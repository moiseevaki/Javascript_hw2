//Создать программу, которая будет выполнять следующие действия:

//Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
//Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
//Введенное имя, циклом сравнивать с именами в массиве
//Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке
//Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя

var login = (function() {
    var names = [],
        user;

    var init = function() {
        var i = 0;

        for (i; i < 5; i++) {
            names.push( prompt('Введите имя') );
        }

    };

    var welcome = function() {
        user = prompt('Введите имя пользователя');
    };

    var check = function() {
        if(names.indexOf(user) > -1) {
            console.log(user +  ', вы успешно вошли');
        } else {
            console.log('Ошибка');
        }
    };

    return {
        init: init,
        welcome: welcome,
        check: check
    }

})();

login.init();
login.welcome();
login.check();