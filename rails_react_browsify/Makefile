all: new kill redux

redux: redux1 redux2 redux3 redux4

new:
	@echo 新規プロジェクト作成
	rails new test1
	mv test1/* .
	rm -rf test1

kill:
	ps > tmp.rb
	sudo ruby -ne "m = \$$_.match(/([0-9]+)\\s[^\\s]+\\s+[0-9:]+\\s(ruby)/); if m; system \"kill -9 #{m[1]}\"; end" tmp.rb

killmake:
	ps > tmp.rb
	sudo ruby -ne "m = \$$_.match(/([0-9]+)\\s[^\\s]+\\s+[0-9:]+\\s(ruby|make)/); if m; system \"kill -9 #{m[1]}\"; end" tmp.rb

redux1:
	npm init
	echo "gem 'browserify-rails'" >> Gemfile
	echo "gem 'react-rails'" >> Gemfile
	rails g react:install

redux2:
	mkdir app/assets/javascripts/components/actions
	mkdir app/assets/javascripts/components/components
	mkdir app/assets/javascripts/components/containers
	mkdir app/assets/javascripts/components/reducers
	mkdir app/assets/javascripts/components/store

	echo "    # Browserify transform for Babel" > tmp.rb
	echo "    config.browserify_rails.commandline_options = '-t babelify'" >> tmp.rb

	ruby -pne "\$$_.sub!(/(config.load_defaults [0-9.]+)/m, \"\\\\1\\n\"+File.read('tmp.rb'))" -i config/application.rb

redux3:
	sudo npm install --save-dev browserify browserify-incremental babelify babel-preset-es2015 babel-preset-react
	sudo npm install --save react react-redux redux redux-thunk

	echo "{" > .babelrc
	echo '  "presets": ["es2015", "react"]' >> .babelrc
	echo "}" >> .babelrc

redux4:
	ruby Makefile_redux.rb

run:
	vivaldi http://localhost:3000/users/show &
	rails s

clean:
	rm -rf *
	git checkout Makefile* README.md

