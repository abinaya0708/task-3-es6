//1 2 3

//  function A(u){
//     console.log("1")
//     u(C);
// }

// function B(v){
//     setTimeout(()=>{
//         console.log("2")
//         v()
//     },3000)
// }

// function C(){
//     console.log("3")
// }
// A(B);

//-----------------------------------------------------------------------------------------------------------------

//3,2,1

// function a(){
//     console.log("1")
// }

// function b(y){
//     setTimeout(()=>{
//         console.log("2");
//         y()
//     },2000)
// }

// function c(x){
//     console.log("3");
//     x(a);
// }

// c(b);

//-------------------------------------------------------------------------------------

//armstrong

//Find length

// function checkLen(num){
//     let count = 0
//         while(num!=0){
//             let rem = num%10;
//             num=(num-rem)/10
//             count++
//         }
//         return count;
//     }
    
    //Find Armstrong
    // function Armstrong(A,num){
    //     let length = A(num)
    //     let n = num
    //     let sum = 0
    //     while(n!=0){
    //         let rem = n%10;
    //         n=(n-rem)/10
    // sum+=rem**length
    //     }
        // console.log(sum)
    //     return sum
    // }
    
    // function check(num,C){
    //     let y =C(checkLen,num)
    
    //     if(y ===num){
    //         console.log("Armstrong")
    //     }else{
    //         console.log("not armstrong");
    //     }
    // }
    
    // check(153,Armstrong)


    //-------------------------------------------------------------------------------------------


    //1.................................................................

    // //multiply array elements by 5


    // let numb=[7,3,2,6];

    // function pro(array){
    //     for (i=0;i<array.length;i++){
    //         let c= array[i];

    //         return c;
        
    //     }
    // }
        
    // function ans(x,y){
    //     let z=x(y);
    //     console.log(z*10)
    // }

    // ans(pro,numb)

    //1......................................................................

    //find odd or even number

    function condition(n){
        let a=n%2==0;
        return a;
    }


    function res(a,b){
        let e=a(b);
        if(e){
            console.log("this is even number")
        }
        else{
            console.log("odd number");
        }
    }

    res(condition,71)

//2.......................................................................

//given letter is in an word or not

    function array(a){
        let c=a.includes("t");

        return c

    }
    function answer(s,t){
        let r=s(t)
        if(r==true){
            console.log("yes");
        }
        else{
            console.log("no");
        }
    }

    answer(array,"apple")


//3...................................................................

//palindrome or not-----------------------------------------------------------------------

function palin(x){
    let v=0, rem;
    temp=x;
    while(x>0){
        rem=x%10;
        v=v*10+rem;
        x=parseInt(x/10);

    }
        return v
    }
function con(x,y){
    let z = x(y)
if(z==y){
    console.log("palindrome");
}
else{
    console.log("not palindrome")
}
}

con(palin,12321);


//4................................................................................

function perfect(n){
    console.log("the number is",n)
    let sum=0;
    let x=n;

    for (i=1;i<n;i++){
        if(n%1==0){
            sum=sum+i
        }
    }
    console.log(sum);
    return sum


}
function check(n,a){
    let p=a(n);
    if(p==n){
        console.log("perfect")
    }
    else{
        console.log("not perfect")
    }
}
check(28,perfect)
    



