let jsonvalue =
{
    name:"nandhini",
    age:29
}
let value =JSON.stringify(jsonvalue);
console.log(value);
for(let i in JSON.stringify(jsonvalue))
{
    console.log(jsonvalue[i]);
}



let jsonvalue1 =
{
    name:"nandhini",
    age:29
}
let value1 =JSON.stringify(jsonvalue1);
console.log(value1);
for(let key in jsonvalue1)
{
    console.log(`${key}: ${jsonvalue1[key]}`);
}



//create your own resume data in json format
x`xxxxx`
let resume={
    name:"Nandhini",
    age:29,
    email_id:"nandhiniponvelnt@gmail.com",
    phone_number:8778079228,

    education:{
        school:"DVC",
        college:"Tagore Engineering College"
    },
    work_experience:{
        2015_2017:"Merit Software services pvt ltd",
        2020_2022:"TSCB",
        2022_2023:"Virstusa"
    },
   skillset:['sql','plsql']

}
console.log(resume);
