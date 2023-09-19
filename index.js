document.addEventListener(`DOMContentLoaded`, function () {
  const form = document.querySelector(`#form-reg`);
  const tableDate = document.querySelector(`#table-date`);

  form.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const name = form.elements.name.value;
    const surName = form.elements.surname.value;
    const dateOfBirthd = form.elements.dateOfBirth.value;
    const gender = form.elements.gender.value;
    const city = form.elements.city.value;
    const address = form.elements.address.value;
    const lang = [];
    form.querySelectorAll('input[name="lang"]:checked').forEach(input => {
      lang.push(input.value);
    });

    const table = document.createElement(`table`);
    table.innerHTML = `
       <caption>
      Your data
      </caption>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Date of birth</th>
        <th>Gender</th>
        <th>City</th>
        <th>Addres</th>
        <th>Lang</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${surName}</td>
        <td>${dateOfBirthd}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${lang.join(", ")}</td>
      </tr>
    `;
    tableDate.innerHTML = "";
    tableDate.appendChild(table);

    form.style.display = 'none';

    tableDate.style.display = 'block';
  });
});
