const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const items = document.querySelectorAll(".price");
    let totalamount = 0;
    items.forEach((item )=> {
        totalamount += Number(item.textContent);

		const tr=document.createElement("tr")
		const td=document.createElement("td")
		td.textContent=totalamount
		tr.appendChild("td")
		document.querySelector("table").appendChild(tr);
		
		
    });
  



getSumBtn.addEventListener("click", getSum);

