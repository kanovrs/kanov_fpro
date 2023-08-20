let yearOfBirth = prompt("Вкажіть Ваш рік народження");
let yearsOld, countryOrCity, champion;

if (!yearOfBirth) {
    yearsOld = "Шкода, що Ви не захотіли ввести Ваш рік народження!";
    alert(yearsOld);
}
else {
    yearsOld = `Ваш вік ${2023 - yearOfBirth} років`;
}

let city = prompt("Вкажіть місто в якому ви проживаєте");

if(!city) {
    countryOrCity = "Шкода, що Ви не захотіли ввести свое мiсто!";
    alert(countryOrCity);
} else if(city) {
    switch (city) {
        case "Київ":
            countryOrCity = "Ти живеш у столиці України!";
            break;
        case "Варшава":
            countryOrCity = "Ти живеш у столиці Польщі!";
            break;
        case "Лондон":
            countryOrCity = "Ти живеш у столиці Великобританії !";
            break;
        default:
            countryOrCity = `Ти живеш у місті ${city}`;
            break;
    }
} else {
    countryOrCity = "Шкода, що Ви не захотіли ввести свое мiсто!"
}

let favoriteSport = prompt("Вкажіть Ваш улюбленный вид спорту");

if(!favoriteSport){
    champion = "Шкода, що Ви не захотіли ввести свой спорт!";
} else {
    switch (favoriteSport) {
        case "Бокс":
            champion = "Круто! Хочеш стати як Майк Тайсон?";
            break;
        case "Футбол":
            champion = "Круто! Хочеш стати як Лионель Месси?";
            break;
        case "ММА":
            champion = "Круто! Хочеш стати як Мак Греггор";
            break;
        default:
            break;
    }
}

alert (`${yearsOld} 
${countryOrCity}
${champion}`)




