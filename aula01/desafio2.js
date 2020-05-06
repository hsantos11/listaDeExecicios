// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function z (a,s){ return a+s;}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

 var h = z(2,5)+5;
// Qual o valor atualizado dessa variável?
12

// Declare uma nova variável, sem valor.
var q;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function c (){ q= 10;
return " O valor da variável agora é" + q;
}

// Invoque a função criada acima.

c()

// Qual o retorno da função? (Use comentários de bloco).
?
10
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function nova(z,x,c){
    if(z===undefined || x===undefined || c===undefined)
    { return"preencha todos os valores corretamente";} 
  }
  else{return (z*x*c) +2;}

// Invoque a função criada acima, passando só dois números como argumento.
nova(10,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//"preencha todos os valores corretamente"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
nova(10,2,7)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//undefined
412
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

 function herb (q,w,e){ 
if( q !== undefined && w === undefined && e === undefined)
{return q; } 

else if (q !== undefined && w !== undefined && e === undefined)
{return q + w; }

else if (q !== undefined  && w !== undefined && e !== undefined)
{return (q + w ) /e;} 

else if ( q === undefined && w === undefined && e === undefined)
 {return false;}

 else {return null;}}

 // Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
herb () // false
herb(1) //1 
herb(1,2) // 3
herb( 1,2,3) // 1
