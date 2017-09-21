var obj ={num:"10"}
undefined
function add (a,b,c);
VM363:1 Uncaught SyntaxError: Unexpected token ;
function add (a,b,c)
{
    return this.num+ a+ b+ c;
}
undefined
var anil = add.bind(obj);
undefined
anil(1,2,3);
"10123"
anil (1,2,3);
"10123"
function add (a,b,c)
{
    return this.num + a + b + c;
}
undefined
var anil = add.bind(obj);
undefined
anil (1,2,3);
"10123"
function add (a,b,c)
{
    return this.num+ a+ b+ c;
}
undefined
var anil = add.bind(obj);
undefined
anil (1,2,3);
"10123"

///// windows prompt
window.prompt("who are you")
"anil"