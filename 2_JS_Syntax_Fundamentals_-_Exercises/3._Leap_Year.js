function isLeap(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        output = 'yes'
    }
    else if(year % 100 == 0 && year % 400 == 0) {
        output = 'yes'
    }
    else {
        output = 'no'
    }
    console.log(output)
}

isLeap(1984);
isLeap(2003);
isLeap(4);
isLeap(1900);
isLeap(2000);