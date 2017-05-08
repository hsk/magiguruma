all: install build run

build:
	browserify ./src/app.jsx -t babelify --outfile ./dist/app.js
run: build
	vivaldi dist/index.html &

install:
	sudo npm install

clean:
	sudo rm -rf node_modules dist/app.js
