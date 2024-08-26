    const convertBtn = document.getElementById("convert-btn");
    const numberInput = document.getElementById("number");
    const result = document.getElementById("output");

    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    function convertToRoman(num) {
        let result = '';
        for (let i = 0; i < arabicNumerals.length; i++) {
            while (num >= arabicNumerals[i]) {
                result += romanNumerals[i];
                num -= arabicNumerals[i];
            }
        }
        return result;
    }

    convertBtn.addEventListener("click", () => {
        const input = numberInput.value.trim();
        if (!isNaN(input) && input !== "") {
            const arabicNumber = parseInt(input);
            result.textContent = convertToRoman(arabicNumber);
        } else if (/^[IVXLCDM]+$/i.test(input)) {
            result.textContent = convertToArabic(input.toUpperCase());
        } else {
            result.textContent = "Invalid input";
        }
    }); 

