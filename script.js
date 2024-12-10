"use strict";

// Создается объект `person` с двумя свойствами и двумя аксессорами (getter и setter).
const person = {
    name: "Alex", // Свойство `name` со значением "Alex".
    age: 25, // Свойство `age` со значением 25.

    // Getter для получения значения свойства `age`.
    get userAge() {
        return this.age; // Возвращает значение `age`.
    },

    // Setter для изменения значения свойства `age`.
    set userAge(num) {
        this.age = num; // Устанавливает новое значение для `age`.
    }
};

// Устанавливается новое значение для `userAge` через setter.
console.log(person.userAge = 30);
// В консоли выведется 30. Это результат выражения присваивания, так как setter возвращает значение присваивания.

console.log(person.userAge);
// В консоли выведется 30, так как значение `age` было изменено на 30 через setter.
