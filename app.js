    function Addrecord() {
        const table = document.getElementById("mytable").getElementsByTagName('tbody')[0];
        const fullName = document.getElementById("FULLNAME").value;
        const email = document.getElementById("EMAIL").value;
        const donationAmount = document.getElementById("MONEY").value;

        const row = table.insertRow(-1);
        row.insertCell(0).textContent = fullName;
        row.insertCell(1).textContent = email;
        row.insertCell(2).textContent = "$" + donationAmount;

        document.getElementById("FULLNAME").value = "";
        document.getElementById("EMAIL").value = "";
        document.getElementById("MONEY").value = "";
        document.getElementById();
    }
