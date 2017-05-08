all: new users_controller

new:
	rails new test1
	mv test1/* .
	rm test1

users_controller:
	rails g controller users index show

clean:
	rm -f *
	git checkout Makefile

