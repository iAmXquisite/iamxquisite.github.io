$(document).ready(function()
{
	$( document ).tooltip(); // Activate JQuery UI tooltips
	
	// Set nav link to active based on url
	var nav = document.getElementById('navigation'),
		navA = nav.getElementsByTagName('a'), // Array of nav a items
		currentURL = window.location.pathname.split('/');
	for(var i = 0; i < navA.length; i++)
	{
		var currentA = navA[i].href.split('/');
		// Match current nav a url to current url file
		if(currentA[currentA.length-1] == currentURL[currentURL.length-1])
		{
		  navA[i].className = "active"; // Set to active
		}
	}

	function preOrderList()
	{
		$.ajax(
		{
			type: "GET",
			dataType: "json",
			url: "./preOrders.json",
			cache: false,
			success: function(result)
			{
				//$("#preOrderList tr td").remove();
				$.each(result, function(index, element)
				{
					$('table#preOrderList').append("<tr><td>" + element["firstName"] +  " " + element["lastName"] + "</td><td>" + element["email"] + "</td><td>" + element["mobile"] + "</td></tr>");
				})
			},
			error: function()
			{
				// Chrome local file fix or add --allow-file-access-from-files to shortcut
				$('table#preOrderList').append("<tr><td>Jiovanni Castillo</td><td>jio@activevr.com</td><td>(310) 123-4567</td></tr><tr><td>Chris Ortiz</td><td>chris@activevr.com</td><td>(310) 123-4567</td></tr><tr><td>Cesar ?</td><td>cesar@activevr.com</td><td>(310) 123-4567</td></tr>");
	
			}
		});
	}
	preOrderList();
	
	// Would allow constant update to clients
	//var timer, delay = 3000;
	//timer = setInterval(preOrderList, delay);
	
});

function addPreOrder()
{
	// Add user input to our table
	$('table#preOrderList').append("<tr><td>" + preOrder.firstName.value +  " " + preOrder.lastName.value + "</td><td>" + preOrder.email.value + "</td><td>" + preOrder.phoneNum.value + "</td></tr>");
	
	/*
		Code to communicate with file handler would go here
	*/
	
	// Clear form content
	preOrder.firstName.value = "";
	preOrder.lastName.value = "";
	preOrder.email.value = "";
	preOrder.phoneNum.value = "";
}