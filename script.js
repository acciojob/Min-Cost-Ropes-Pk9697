function mincost(arr)
{ 
//write your code here
// return the min cost
	if(!arr || arr.length<=1) return 0;
  arr.sort((a,b)=>a-b)

	let cost=0;
	let prefix=arr[0];
	for(let i=1;i<arr.length;++i){
		cost+=prefix+arr[i];
		prefix+=arr[i];
	}

	return cost
}

// alert(mincost([1, 2, 3, 4, 5]))

module.exports=mincost;
