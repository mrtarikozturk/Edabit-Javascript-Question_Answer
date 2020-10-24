const num = prompt('Bir sayi giriniz: ')
let sum = 0;
for (let i = 1; i < num; i++) {
    if (num % i == 0) sum += i;
}

if (sum == num) alert(`${num} is a perfect number`);
else alert(`${num} is not a perfect number`);