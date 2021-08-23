let sumKrat = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        sumKrat += i;
    } else if (i % 5 == 0) {
        sumKrat += i;
    }
}

alert(sumKrat);