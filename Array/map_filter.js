// map method and filter of array

  var users = [{name:"rushikesh",hasMobile:true},{name:"sachin",hasMobile:false}];
  console.log(users);

   var result =  users.filter(user => user.hasMobile==true);
  console.log(result);

 // filter method 

     var companies = [{name:"one",start : 1990, end : 2015},{name:"two",start : 2012,end : 2015}]

     var newCompanies =  companies.filter(company=> company.end-company.start>10);
         console.log(newCompanies);
