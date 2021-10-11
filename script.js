let msgPart1Array = ['The comedian said ', 'The smart ass in the class said ', 'My dad said '];
let msgPart2Array = ['"What do Alexander the Great and Winnie the Pooh have in common? Same middle name." ', 
'"What is the opposite of a croissant? A happy uncle." ', 
'"Which branch of the military accepts toddlers? The infantry." ',
'"Though I enjoy the sport, I could never date a tennis player. Love means nothing to them." ',
'"Got a PS5 for my little brother. Best trade I\'ve ever done!" ',
'"When you die, what part of the body dies last? The pupils…they dilate." ',
'"You know there\'s no official training for trash collectors? They just pick things up as they go along." ',
'"Did you hear how the zombie bodybuilder hurt his back? He was dead-lifting." ',
'"Though I enjoy the sport, I could never date a tennis player. Love means nothing to them." ', 
'"I was kidnapped by mimes once. They did unspeakable things to me." '];
let msgPart3Array = ['to my daugter.','to my brother.','to my friend.'];

console.log(msgPart1Array[Math.floor(Math.random()*3)] + 
	msgPart2Array[Math.floor(Math.random()*10)] + 
	msgPart3Array[Math.floor(Math.random()*3)])

// Make comment to test doing a pull request on GitHub before pushing local changes to main branch.