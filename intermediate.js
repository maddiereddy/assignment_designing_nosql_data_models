// You're building a restaurant table reserving app that allows users to reserve tables 
// for specified numbers of people. The app will need to show only tables that are 
// available and the times they are available. The app will need to store reservations 
// under a given name with a phone number and number of guests.

{
	avail_tables: [{
		table_num: Number,
		timeslots: [] 
	}],
	reservation: [{
		name: String,
		phone_number: String format(xxx-xxx-xxxx),
		num_guests: Number
	}]

}



// You're building a backend for a university that requires students to be able to login. 
// Once logged in, the students can view the exam grades for their classes. 
// They should be able to view results by semester. 
// Each semester should only show the classes in which that student is enrolled that semester.

{
	login: {
		username: String,
		password: String
	},
	semester: [
		fall: {
			grades: [
				{subject: grade}, ...
			]
		},
		spring: {
			grades: [
				{subject: grade}, ...
			}]
		},
		summer: {
			grades: [
				{subject: grade}, ...
			}]
		},
	]
}

