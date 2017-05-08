all: new users_controller

new:
	rails new test1
	mv test1/* .
	rm -rf test1

users_controller:
	rails g controller users index show

clean:
	rm -rf *
	git checkout Makefile

