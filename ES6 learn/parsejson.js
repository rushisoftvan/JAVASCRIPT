let data = `{
    "name":"sachin",
    "age":67,
    "is_student": false,
    "address":{
                 "city":"ahmedabad",
                 "state":"gujrat",
                 "pincode":382415
               },
    "p_lang": ["java","C++","java","python"]

 }`;

    let result =  JSON.parse(data);
    console.log(result);
    console.log(result['name']);
   console.log(result['is_student']);


    let user =
     {
        name:"sachin",
        mobile:7865456778,
        has_android : false
     }

     console.log(JSON.stringify(user)); //{"name":"sachin","mobile":7865456778,"has_android":false}
