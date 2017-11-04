// You're building an application that requires user login. 
// Once logged in the user has a bunch of profile information and preference settings available to them. 
// They will need to be able to set their birthday, gender, phone number and location (city, state, country). 
// They should be able to provide text to tell about themselves. 
// They also should be able to enable and disable the visibility of 
// their birthday, gender, phone number, and location.

{
	_id: Number,
	username: String,
	password: String,
	profile: {
		birthday: Date, 
		gender: String,
		phone_number: String (format(xxx-xxx-xxxx)),
		location: {
			city: String,
			state: String,
			country: String
		},
		about_me: String
	},
	visibility: Boolean
}