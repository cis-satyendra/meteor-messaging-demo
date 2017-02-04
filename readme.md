Basic Crud application with Test cases ::

Functionality :: Simple Application for posting and deleting messages. Where user can create his account and create his messages.

To run this application you just need to install meteor through terminal :: 

	curl https://install.meteor.com/ | sh

once you meteor install then clone this repository.

then navigate to "meteor-messaging-demo" directory and install all Npm packages using following command

	meteor npm install

This is the final step for running this application :: 
	meteor

By default this application will run on 3000 port (On your local machine :: http://localhost:3000)

--- To run test cases ---

Package used for Test Cases :: practicalmeteor:mocha

For running test cases please use this command :: 
		meteor test --driver-package=practicalmeteor:mocha --port 4000

this will execute all written test cases in this application.
(On your local machine :: http://localhost:4000)