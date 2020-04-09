function compose(... funcs) {
	return function(data){
		let index;
		for(index=funcs.length-1;index>=0;index--){
		data=funcs[index](data);
		}
		return data;
	}
}