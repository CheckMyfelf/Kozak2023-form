let x;
let count, result;
count = result = 0;
alert('ТОП-10 цікавих фактів про козаків та козацтво');

x = prompt('Скільки існувало січей у період існування Запорозького козацтва?');
if (x == 8) {
    count++;
    console.log(count);
} if (x == null) {
    result = null;
}

if ( result != null) {
    x = prompt('Хоча осередок козацтва знаходиться в Україні, серед козаків були не лише українці. Скільки пердставників національностей можливо було зустріти на Січі?');
    if (x >= 20) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('“Чайки”, за свідченнями істориків, були 20 метрів завдовжки і 4 метри завширшки. Вони вміщували 50-70 озброєних козаків. Яка кількість грамат була встановлено на борту?');
    if (x == 5) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}


if ( result != null) {
    x = prompt('В якому році вперше термін «козак» зустрічаємо у Початковій монгольській хроніці?');
    if (x == 1240) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}


if ( result != null) {
    x = prompt('В якому році було прийнято першу конституцію Пилипа Орлика?');
    if (x == 1710) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('В якій статті запосано: "Якщо хтось із козаків чи навіть звичайних селян вчинить злочин проти гетьмана, то останній не має права карати винуватця. Справу передадуть до суду"?');
    if (x == 7) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('За свідченнями істориків, скільки рушниць було з собою у кожного лицаря (козака)?');
    if (x == 2) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('В якому році було зруйнувано Запорозьку Січ?');
    if (x == 1775) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('Узявши участь у битвах, Сірко майже завжди виходив із них переможцем, що й уславило його серед нащадків навіки. Скілиїх було?');
    if (x == 55) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}

if ( result != null) {
    x = prompt('Військо Запорозьке мало два поділи – військовий і територіальний. На скільки куренів завжди поділялося військо?');
    if (x == 38) {
        count++;
        console.log(count);
    } if (x == null) {
        result = null;
    }    
}


if ( result != null) {
    result = count / 10 * 100;
    document.write(`У Вас ${result}% правильних відповідей. Ви набрали ${count} балів.`);
} else {
    document.write(`Ви відмовились від тестування!`);
}
    
