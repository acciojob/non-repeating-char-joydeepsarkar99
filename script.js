function firstNonRepeatedChar(str) {
	for(let i=0;i<str.length;i++){
		if(i-1>=0 && i+1 < str.length && str[i] != str[i-1] && str[i] != str[i+1]){
			return str[i]
		}
	}
	return null
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
