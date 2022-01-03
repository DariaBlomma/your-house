//filter table
function filter() {
	let onstaff = document.forms["filterForm"].elements["onstaff"].value;
	let workExpStart = document.getElementById('workExpStart').value;
	
	let workExpEnd = document.getElementById('workExpEnd').value;

	let ageStart = document.getElementById('ageStart').value;
	
	let ageEnd = document.getElementById('ageEnd').value;
	
	
	let table = document.getElementById ('tbl');
	
	for (let i = 0; i < 11; i++) {
	
		let job = table.rows[i].cells[1].innerHTML;
		console.log(job);
		
		let age = table.rows[i].cells[2].innerHTML;
		let workExpString = table.rows[i].cells[3].innerHTML;
		let workExp = parseInt(workExpString);
		
		let condition_one = (onstaff !== job);
		let condition_two = (!(age > ageStart && age < ageEnd));
		let condition_three = (!(workExp > workExpStart && workExp < workExpEnd));
		if ( condition_one || condition_two || condition_three) {
		console.log('ok');
		let c = table.rows[i].cells[2].parentNode.rowIndex;
		console.log(c);
		let d = table.rows[c];
		console.log(d);
		d.classList.add("hidden");
			
		}
	}
}