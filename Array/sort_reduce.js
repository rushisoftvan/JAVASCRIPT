// sort and reduce


    var companies = [{name:"one",start : 1990, end : 2015},{name:"two",start : 2012,end : 2015}]

     var result =  companies.sort((firstcompany,secondcompany) => secondcompany.start - firstcompany.start); 
    console.log(result); //output [ { name: 'two', start: 2012, end: 2015 },  { name: 'one', start: 1990, end: 2015 } ]

//      
 
