var oddEven = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
};


var primeNumber = (num) => {

    if (num <= 1) {
        console.log(`${num} is not a prime number` );
        return;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} is not a prime number`);
            return;
        }
    }

    console.log(`${num} is a prime number`);
}


var fibnacci = (num) =>{

    let a = 0;
    let b = 1;   

    for (let i = 0; i <= num; i++) {
        
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}

var swapTwoNumbers = (num1, num2) =>{

    console.log(`before swapping num1 = ${num1}`);
    console.log(`before swapping num2 = ${num2}`);
    
    
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log(`after swapping num1 = ${num1}`);
    console.log(`after swapping num2 = ${num2}`);
}

var factorial = (num) =>{

    var fact = 1;

    for (let i = 1; i <=num; i++) {
        fact *= i;
    }

    console.log(`factorial of ${num} : ${fact}`);
}

var reverseNumber = (num) =>{

    let result = 0;

    while (num > 0) {
        var digit = num%10;
        result = result*10 + digit;
        num = Math.floor(num/10);
    }
    console.log(`After reverse ${num} : ${result}`);
    
}

var armstrong = (num) =>{
    const original = num;
    let digits = num.toString().length;
    let sum = 0;

    while (num > 0) {
        var digit = num%10;
        sum += Math.pow(digit,digits);
        num = Math.floor(num/10);
    }

    if (sum === original) {
        console.log(` ${original} is a armstrong number`);
    } else {
        console.log(` ${original} is not a armstrong number`);
    }
}

var palindrome = (num) =>{
    const original = num;
    
    let sum = 0;

    while (num > 0) {
        var digit = num%10;
        sum = sum *10 + digit;
        num = Math.floor(num/10);
    }


    if (sum === original) {
        console.log(` ${original} is a palindrome number`);
    } else {
        console.log(` ${original} is not a palindrome number`);
    }
}


var calcuSum = (num) =>{

    var original = num;
    var sum = 0;

    while (num > 0) {
        var digit = num%10;
        sum += digit;
        num = Math.floor(num/10);
    }
    console.log(`sum of digits ${original} : ${sum}`);
}


var leapYearCheck = (num) =>{

    if ((num%4 === 0  && num %100 !== 0) || (num%400===0)) {
        console.log(`year ${num} : leapYear`);
        return
    }

    console.log(`year ${num} : not a  leapYear`);
    
}


var reverseString = (str) => {
    
    console.log(`string before reverseing : ${str}`);
    

    var nstr = " ";

    for (const c of str) {
        nstr = c + nstr;
    }

    console.log(`string after reverseing : ${nstr}`);
    
}

var reverseEachWordOfAString = (str) => {
    
    console.log(`string before reverseing Each Word: ${str}`);

    var nstr = "";

    for (const word of str.split(` `)) {
        var words = ' ';
        for (const c of word) {
            words = c + words;
        }
        nstr = nstr + words;
        words = ' ';
    }

    console.log(`string after reverseing Each word: ${nstr}`);
    
}


var findDuplicateCharacterInGiveString = (str) => {
    
    console.log(`string : ${str}`);

    const dupe = new Map();

    for (const c of str) {
        if (dupe.has(c)) {
            dupe.set(c,dupe.get(c)+1);
        } else {
            dupe.set(c,1);
        }
    }


    for (let [c,count] of dupe.entries()) {
        if (count>1) {
            console.log(`${c} : ${count}`);
        }
    }
}


var occuranceOfEachWord = (str) => {
    
    console.log(`string : ${str}`);

    const occur = new Map();

    for (const word of str.split(' ')) {
        if (occur.has(word)) {
            occur.set(word,occur.get(word)+1);
        } else {
            occur.set(word,1);
        }
    }

    for (let [word,count] of occur.entries()) {
        console.log(`${word} : ${count}`);
        
    }
}


var countNumberOfWords = (str) => {
    
    console.log(`string : ${str}`);

    const occur = new Map();

    for (const word of str.split(' ')) {
        if (occur.has(word)) {
            occur.set(word,occur.get(word)+1);
        } else {
            occur.set(word,1);
        }
    }

    for (let [word,count] of occur.entries()) {
        console.log(`${word} : ${count}`);
        
    }
}


var permutation = (str,prefix = "") => {

    if (str.length ==0) {
        console.log(prefix);
        return;
    }
    
    for (let i = 0; i < str.length; i++) {
        
        var rem = str.substring(0,i) + str.substring(i+1);
        permutation(rem , prefix + str.charAt(i));
        
    }

}

var countNumberOfWordsPresent = (str) => {

    console.log(`string : ${str}`);
    
    var count = str.split(" ").length;

    console.log(count);
}

var palindromeString = (str) => {

    console.log(`string : ${str}`);
    let first = 0;
    let last = str.length-1;

    while (first < last) {
        if (str.charAt(first) != str.charAt(last)) {
            console.log(`not a plaindrome`);
            return;
        }
        first++;
        last--;
    }

    console.log(`palindrome`);
}

var anograms = (str1,str2) => {

    console.log(`string1 : ${str1}`);
    console.log(`string2 : ${str2}`);

    if (str1.length !== str2.length) {
        console.log("not anograms");
        return;
    }

    const arr = new Array(256).fill(0);

    for (let i = 0; i < str1.length; i++) {
        arr[str1.charCodeAt(i)]++;
        arr[str2.charCodeAt(i)]--;
    }

    for (const n of arr) {
        if (n != 0) {
            console.log("not anograms");
            return;
        }
    }
    console.log("anograms");
    
}

var vovwelsAndConsonant = (str) => {

    console.log(`string : ${str}`);
    let vovwel =  0;
    let consonant = 0;

    for (const c of str) {
        if (c === `a`||c === `e`||c === `i`||c === `o`||c === `u`) {
            vovwel++;
        } else {
            consonant++;
        }
    }
    console.log(`vovwel : ${vovwel}`);
    console.log(`consonant : ${consonant}`);
}


var uniqueChar = (str) => {

    console.log(`string : ${str}`);
    
    const unique = new Array(126);

    for (const c of str) {
        if (!unique[c]) {
            console.log(c);
            unique[c]= true;
        }
    }
}

var printEvenIndex = (str) => {

    console.log(`string : ${str}`);
    
    for (let i = 0; i < str.length; i++) {
        if (i%2===0) {
            console.log(str.charAt(i));
        }
    }
}

var removeSpace = (str) => {

    console.log(`string before removing space : ${str}`);
    
    var nstr = "";

    for (const c of str.split(' ')) {
        nstr +=c;
    }

    console.log(`string after removing space : ${nstr}`);
    
}

var eachLetterTwice = (str) => {

    console.log(`string : ${str}`);
    
    var nstr = "";

    for (const c of str) {
        nstr +=c + c;
    }

    console.log(`string after duplication each word : ${nstr}`);
    
}

var swapTwoString = (str1,str2) => {

    console.log(`str1 : ${str1}`);
    console.log(`str2 : ${str2}`);


    str1 = str1 + str2;
    str2 = str1.substring(0,str1.length-str2.length);
    str1 = str1.substring(str2.length);

    console.log(`str1 : ${str1}`);
    console.log(`str2 : ${str2}`);  
}

var countChar = (str) => {

    console.log(`str : ${str}`);
    
    var nstr = '';
    var count = 1;

    for (let i = 0; i < str.length; i++) {
        if (i+1<str.length && str.charAt(i)==str.charAt(i+1)) {
            count++;
        } else {
            nstr += str.charAt(i)+ count;
            count = 1;
        }
    }
    console.log(`str : ${nstr}`);
    
}


var upperLowerCase = (str) => {

    console.log(`str : ${str}`);
    
    var lower = '';
    var upper = '';

    for (const c of str) {
        if (c>='a' && c<='z') {
            lower += c;
        } else if(c>='A' && c<='Z'){
            upper += c;
        }
    }
    console.log(`lower : ${lower}`);
    console.log(`upper : ${upper}`);
    
}


var digitLetter = (str) => {

    console.log(`str : ${str}`);
    
    var digit = '';
    var letter = '';

    for (const c of str) {
        if (c>='0' && c<='9') {
            digit += c;
        } else{
            letter += c;
        }
    }
    console.log(`digit : ${digit}`);
    console.log(`letter : ${letter}`);
}

var digitLetterInSameLine = (str) => {

    console.log(`str : ${str}`);
    
    var digit = '';
    var letter = '';

    for (const c of str) {
        if (c>='0' && c<='9') {
            digit += c;
        } else{
            letter += c;
        }
    }
    console.log(`digit : ${digit}${letter}`);
}

var format = (str) => {

    console.log(`str : ${str}`);
    
    var number = parseInt(str,10);

    let formated = number.toString().padStart(11,'0');
    
    console.log(`formated Output : ${formated}`);
}

var longestWithoutRepleatingCharacter = (str) => {

    console.log(`str : ${str}`);
    
    var start = 0;
    var end = 0;
    var maxLength = 0;

    const set = new Set();
    
    while (end<str.length) {
        
        if (!set.has(str.charAt(end))) {
            set.add(str.charAt(end));
            maxLength = Math.max(maxLength, end - start +1);
            end++;
        } else {
            set.delete(str.charAt(start));
            start++;
        }
    }

    console.log(`Max length of substring without repeating characters: ${maxLength}`);
}









oddEven(5);
oddEven(4);
oddEven(7);

primeNumber(5);
primeNumber(6);
primeNumber(7); 

fibnacci(5);
fibnacci(6);
fibnacci(7);

swapTwoNumbers(4,5);
swapTwoNumbers(6,7);
swapTwoNumbers(8,9);

factorial(4);
factorial(5);
factorial(6);

reverseNumber(45);
reverseNumber(564);
reverseNumber(6634);

armstrong(5);
armstrong(153);
armstrong(156);


palindrome(100);
palindrome(500);
palindrome(121);
palindrome(593);


calcuSum(34124);
calcuSum(252);
calcuSum(35);


leapYearCheck(2020);
leapYearCheck(2025);
leapYearCheck(2001);

reverseString(`Prayag`);
reverseString(`teri kat jayegi Badha tu Jaap Le radha`);
reverseString(`ni ab kuch hosh nhi h`);


reverseEachWordOfAString(`umapati mahadev ji ki hai`);
reverseEachWordOfAString('pawansut hanuman ji ki jai ');
reverseEachWordOfAString(`siyavar ram chandra ji ki jai`);

findDuplicateCharacterInGiveString(`umapati mahadev ji ki hai`);
findDuplicateCharacterInGiveString('pawansut hanuman ji ki jai ');
findDuplicateCharacterInGiveString(`siyavar ram chandra ji ki jai`);

occuranceOfEachWord(`umapati mahadev ji ki hai`);
occuranceOfEachWord('pawansut hanuman ji ki jai ');
occuranceOfEachWord(`siyavar ram chandra ji ki jai`);

permutation(`ABC`);
permutation(`DEF`);
permutation(`GHI`);

countNumberOfWordsPresent(`siyavar ram chandra ji ki jai`);
countNumberOfWordsPresent('pawansut hanuman ji ki jai ');
countNumberOfWordsPresent(`umapati mahadev ji ki hai`);

palindromeString(`siyavar ram chandra ji ki jai`);
palindromeString('pawansut hanuman ji ki jai ');
palindromeString(`ABBA`);

anograms("abc","cab");
anograms(`ram`,`sita`);
anograms(`apple`,`pplea`);

vovwelsAndConsonant(`siyavar ram chandra ji ki jai`);
vovwelsAndConsonant('pawansut hanuman ji ki jai ');
vovwelsAndConsonant(`umapati mahadev ji ki hai`);

uniqueChar(`siyavar ram chandra ji ki jai`);
uniqueChar('pawansut hanuman ji ki jai ');
uniqueChar(`umapati mahadev ji ki hai`);


printEvenIndex(`siyavar ram chandra ji ki jai`);
printEvenIndex('pawansut hanuman ji ki jai ');
printEvenIndex(`umapati mahadev ji ki hai`);

removeSpace(`siyavar ram chandra ji ki jai`);
removeSpace('pawansut hanuman ji ki jai ');
removeSpace(`umapati mahadev ji ki hai`);

eachLetterTwice(`siyavar ram chandra ji ki jai`);
eachLetterTwice('pawansut hanuman ji ki jai ');
eachLetterTwice(`umapati mahadev ji ki hai`);

swapTwoString("abc","cab");
swapTwoString(`ram`,`sita`);
swapTwoString(`apple`,`pplea`);

countChar(`raammmmJaaaiiiiiiJaaaiiiRaaammm`);
countChar(`raaaddhheeeeeRaddhheeee`);
countChar(`ttuuuuJJJJaaaappllleeeerrrraaaadddhhhhaaa`);

upperLowerCase("SiyYAvArrRaMMcchandRAJIkiJAi");
upperLowerCase("PawNSUThanuMANJikiJaI");
upperLowerCase("uMMAAPPATIIIMMAAHHAADEVJJJIIIKKIIJAii");

digitLetter(`si3y6ava73r7 r83a8m c83hand8ra 9ji7 3k2i ja25i`);
digitLetter('pa8wans28ut h2anu553man38 j7i ki7 j625ai ');
digitLetter(`um2ap2a5t6i2 6m26a5h25a2d5e26v j27i7 k7i2 7h27ai`);

digitLetterInSameLine(`si3y6ava73r7 r83a8m c83hand8ra 9ji7 3k2i ja25i`);
digitLetterInSameLine('pa8wans28ut h2anu553man38 j7i ki7 j625ai ');
digitLetterInSameLine(`um2ap2a5t6i2 6m26a5h25a2d5e26v j27i7 k7i2 7h27ai`);


format('1234');
format('452');
format('31');

longestWithoutRepleatingCharacter("abcabcbb");
longestWithoutRepleatingCharacter("pwwkew");  


