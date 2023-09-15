// fetch api
   
function getData()
{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>
    {
       let output = `<h2>Users</h2>`
        output+=`<table class="table">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
        </tr>
      </thead>`;
                  
                              
      data.forEach((user)=>
      {
          output+=`<tr scope="row"">
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.username}</td>
                   <td>${user.email}</td>
                    </tr>
                    </table>`;

        
                  
               
      }

      );
      document.querySelector("#tableDate").innerHTML=output;

    })

}