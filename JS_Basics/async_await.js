// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function (raw){
//         return raw.json();
//     })
//     .then(function (data){
//         console.log(data);
//     })
// };

// abcd();



async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
                                   // ek await se ek then hata do bss
    let ans = await raw.json();    // yaha pe await dusre then ke liye hai
                                   // nhi use karenge to promise return karega agar await use karenge to ans aane pe return karega 
    console.log(ans);
};

abcd();
