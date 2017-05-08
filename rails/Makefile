all: new users_controller users_show run

new:
	rails new test1
	mv test1/* .
	rm -rf test1

users_controller:
	sleep 5
	rails g controller users index show

users_show:
	echo '<h1><%= @user[:name] %></h1>' > tmp.rb
	echo '<p><%= @user[:username] %></p>' >> tmp.rb
	echo '<ul>' >> tmp.rb
	echo '  <li>Location : <%= @user[:location] %></li>' >> tmp.rb
	echo '  <li>About    : <%= @user[:about] %></li>' >> tmp.rb
	echo '</ul>' >> tmp.rb
	mv tmp.rb app/views/users/show.html.erb

	echo '' > tmp.rb
	echo "  def show" >> tmp.rb
	echo "    @user = Hash.new" >> tmp.rb
	echo "    @user[:name] = 'Shohei Aoki'" >> tmp.rb
	echo "    @user[:username] = 'moyahima'" >> tmp.rb
	echo "    @user[:location] = 'Tottori, Japan'" >> tmp.rb
	echo "    @user[:about] = 'Nice to meet you.'" >> tmp.rb
	echo "  end" >> tmp.rb
	ruby -e 'puts File.read("app/controllers/users_controller.rb").sub(/\s+def show.+?end\s+/m,"\n"+File.read("tmp.rb")+"\n")' > tmp2.rb
	mv tmp2.rb app/controllers/users_controller.rb
	cat app/controllers/users_controller.rb

run:
	vivaldi http://localhost:3000/users/show
	rails s

clean:
	rm -rf *
	git checkout Makefile

