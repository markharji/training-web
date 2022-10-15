function changeLoremTextColor() {
  console.log("Change Lorem Text Color");

  const loremText = document.getElementById("loremText");
  const buttonLorem = document.getElementById("firstDiv");

  if (loremText.style.color === "blue") {
    loremText.style.color = "black";
    buttonLorem.innerHTML = "Change Lorem Color ";
  } else {
    loremText.style.color = "blue";
    buttonLorem.innerHTML = "UnChange Lorem Color ";
  }
}

function tableRowTemplate(firstName, lastName, age) {
  return `   <tr class="user-table-row">
<td class="user-table-cell">${firstName}</td>
<td class="user-table-cell">${lastName}</td>
<td class="user-table-cell">${age}</td>
</tr>`;
}

function addUserInTable() {
  console.log("adding user");
  const age = document.getElementById("age").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  alert(firstName + " " + lastName);

  const tableBody = document.getElementById("tableBody");
  const innerHTMLBody = tableBody.innerHTML;
  const templateUser = tableRowTemplate(firstName, lastName, age);
  const finalTemplate = innerHTMLBody + templateUser;

  tableBody.innerHTML = finalTemplate;
}
