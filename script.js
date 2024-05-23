function mincost(arr)
{ 
//write your code here
// return the min cost
	if(!arr || arr.length<=1) return 0;
	let cost=0;
	

	while(arr.length>1){
		  arr.sort((a,b)=>b-a)
		let curr=0
		curr+=arr.pop();
		curr+=arr.pop();
		cost+=curr;

		arr.push(curr)
	}

	return cost;
}

alert(mincost([4, 3, 2, 6]))

module.exports=mincost;
