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
		td.append("tr")
		tr.append("table")
		
		
    });
  
};
const tr=document.createElement("tr")
		tr.appendChild(totalamount)


getSumBtn.addEventListener("click", getSum);

