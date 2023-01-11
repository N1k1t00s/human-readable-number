module.exports = function toReadable(number) {
    let str = "";
    str = number.toString();
    let first = str[0], second = str[1], third = str[2];
    const single_digit_number = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const two_digit_number_to_twenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const two_digit_number_to_hundred = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = "hundred";

    if (number === 0) str = "zero";

    else if (number.toString().length === 1) {
        first = str[0];
        str = single_digit_number[first - 1];
    }

    else if (number.toString().length === 2) {
        first = str[0];
        second = str[1];
        if(number >= 10 && number <=19) str = two_digit_number_to_twenty[second];
        else if(number % 10 === 0) str = two_digit_number_to_hundred[first - 2];
        else str = two_digit_number_to_hundred[first - 2] + " " + single_digit_number[second-1];
    }

    else if (number.toString().length === 3) {
        first = str[0];
        second = str[1];
        third = str[2];
        if (number % 100 === 0) str = single_digit_number[first-1] + " " + hundred;
        else if (number >= first + "01" && number <= first + "09") str = single_digit_number[first -1] + " " + hundred + " " + single_digit_number[third-1];
        else if (number >= first + "10" && number <= first + "19") str = single_digit_number[first -1] + " " + hundred + " " + two_digit_number_to_twenty[third];
        else if (number >= first + second + '0' && number <= first + second + '0') str = single_digit_number[first -1] + " " + hundred + " " + two_digit_number_to_hundred[second - 2];
        else str = single_digit_number[first -1] + " " + hundred + " " + two_digit_number_to_hundred[second - 2] + " " + single_digit_number[third - 1];
    }

    else {
        str = "ERROR";
    }

    return str;
}
