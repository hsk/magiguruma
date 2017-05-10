all: node_modules start

node_modules:
	sudo npm install -g create-react-app
	create-react-app my-app
	mv my-app/node_modules .
	mv my-app/package.json .
	rm -rf my-app
	npm install --save redux react-redux

start:
	npm start

clean:
	rm -rf node_modules my-app package.json README.md yarn.lock
