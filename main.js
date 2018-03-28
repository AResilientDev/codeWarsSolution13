function humanReadable(seconds) {
  // TODO
  //The maximum time never exceeds 359999
  //thus if it exceeds 360000 the function will return null
  if ( seconds < 0 || seconds > 360000 ) {
    return null;
  }
  //defines an hour as the # of seconds divided by the amount of seconds in an hour rounded down
  // seconds is now equal to the difference of itself minus hours times 3600
  //if hours is less than 10 the # hours will be proceeded with a zero
  var hours = Math.floor( seconds / 3600 );
  seconds -= hours * 3600;
  if ( hours < 10 ) {
    hours = '0' + hours;
  }

  //defines minutes as secondes divided by the amount of seconds in a minute rounded down
  //seconds becomes equal to the difference of itself minus minutes times 60
  //if minutes is less than 10 # of minutes will be porceeded by a zero
  //if seconds is less than 10 # of seconds will be porceeded by a zero
  //return format hours : minutes : seconds
  var minutes = Math.floor( seconds / 60 );
  seconds -= minutes * 60;
  if ( minutes < 10 ) {
    minutes = '0' + minutes;
  }
  if ( seconds < 10 ) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
}
