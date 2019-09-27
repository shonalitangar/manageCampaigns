import React from 'react'

const CampaignList = (props) => {
	let val = []; 
	let calculateTime = function(date, selected) {
		var prev = new Date(date);
		var todayDate = new Date();	
		var timeDiff, DaysDiff;
		if (selected === "past") {
			timeDiff = todayDate.getTime() - prev.getTime();
			DaysDiff = timeDiff / (1000 * 3600 * 24);
			return Number.parseInt(DaysDiff) + " days ago";
		} else if (selected === "upcoming") {
			timeDiff = prev.getTime() - todayDate.getTime();
			DaysDiff = timeDiff / (1000 * 3600 * 24);
			return Number.parseInt(DaysDiff) + " days ahead";
		} else {
			return null;
		}
		
	}
	let scheduleAgain = function(event) {
		debugger;
		let selected = event.target.value;
		event.currentTarget.previousSibling.previousSibling.previousSibling.children[0].innerText = selected;
		event.currentTarget.previousSibling.previousSibling.previousSibling.children[1].innerText = calculateTime(selected, props.selected);
		console.log(selected);
	}

    val = props.campaigns.data.map(data => {
        return  <tr>
			      <td data-label="date">
			      	<div id="dateDiv"> {data.date}</div>
			      	<div>
			      		{calculateTime(data.date, props.selected)}
			      	</div>
			      </td>
			      <td data-label="name">
			      	<i class="fa fa-whatsapp" aria-hidden="true"></i> {data.campaign}
			      </td>
			      <td data-label="price"><div><i class="fa fa-usd" aria-hidden="true">
			      	</i></div> <div>{data.view}</div>
			      </td>
			      <td data-label="action" onChange={scheduleAgain}>
			      	  	<div>
				      		<i class="fa fa-calendar" aria-hidden="true"></i>
				      	</div>
				      	<div>
				      		{data.action}
				      	</div> 	
			      	<input type="date"/>
			      </td>
			    </tr> 
    });
    return <table class="ui celled table">
			  <thead>
			    <tr><th>DATE</th>
			    <th>CAMPAIGN</th>
			    <th>VIEW</th>
			    <th>ACTIONS</th>
			  </tr></thead>
			  	<tbody>{val}</tbody>
			 </table> 	
}

export default CampaignList