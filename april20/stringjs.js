
let number

function printOddnumber()
{
    for(number=1; number<=25; number++)
    {
        if(number%2 !==0)
        {
        console.log(number);
        }
    }
}
printOddnumber()



function helloplan(str)
{
    let newstr='';
    for (let i=str.length-1; i>=0; i--)
    {
       newstr +=str[i];
    }
    if (str==newstr)
    {
        console.log("word is palandrom0");
    } else
    {
        console.log("word is not palandrome");
    }
}helloplan("madam");
helloplan("Maram");


function hellobigstr(str)
{
let newstr=str.split(' ')
console.log(newstr);
let newnewstr=newstr.at(-1);
console.log(newnewstr.length);
}
hellobigstr('I am good boy')

