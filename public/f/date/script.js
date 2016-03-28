angular.module('appFilters', [])

.filter('DateFormat', function myDateFormat(){
  return function(text,format){
		//ToDo: This part ignore timezone. To be improved in case timezone to be included
		var dt = moment.utc(text).format(format);
		return dt.toString();
  }
})

.filter('DateRange', function myDateFormat(){
  return function(d1,d2,format){
		//console.log("date range filter working");
		//ToDo: This part ignore timezone. To be improved in case timezone to be included
		var dt1 = moment.utc(d1);
		var dt2 = moment.utc(d2);

		var duration = moment.duration(dt2.diff(dt1));
		var days = duration.asDays();
			console.log(dt1, dt2, days);

		if(days > 1){
			return dt1.toString() + ", 1 day";
		}
		else {

			return parse("%s - %s, %s days", dt1.toString(), dt2.toString(), days );
		}
  }
})
