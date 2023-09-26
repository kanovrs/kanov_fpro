document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("#multTable");
    
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");
        
        for (let j = 1; j <= 10; j++) {
            let cell = document.createElement("td");
            let result = i * j;
            cell.textContent = result;
            row.appendChild(cell);
        }
        
        tableBody.appendChild(row);
    }
});
