function formatGrade(num) {
    if (num < 3) {
        console.log(`Fail (2)`);
    }
    
    else if (3 <= num && num < 3.50) {
        console.log(`Poor (${num.toFixed(2)})`);
    }

    else if (3.5 <= num && num < 4.50) {
        console.log(`Good (${num.toFixed(2)})`);
    }
    
    else if (4.5 <= num && num < 5.50) {
        console.log(`Very good (${num.toFixed(2)})`);
    }
    
    else if (5.5 <= num) {
        console.log(`Excellent (${num.toFixed(2)})`);
    }
}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)