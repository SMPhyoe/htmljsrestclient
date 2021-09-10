fetch("https://jsonplaceholder.typicode.com/users").then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<th>" + itemData.id + "</th>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.username + "</td>";
            temp += "<td>" + itemData.email + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)