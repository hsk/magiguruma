view_users_show = "app/views/users/show.html.erb"

all: new users_controller users_show

new:
	rails new test1
	mv test1/* .
	rm -rf test1

users_controller:
	rails g controller users index show

users_show:
	echo '<h1><%= @user[:name] %></h1>' > $(view_users_show)
	echo '<p><%= @user[:username] %></p>' >> $(view_users_show)
	echo '<ul>' >> $(view_users_show)
	echo '  <li>Location : <%= @user[:location] %></li>' >> $(view_users_show)
	echo '  <li>About    : <%= @user[:about] %></li>' >> $(view_users_show)
	echo '</ul>' >> $(view_users_show)
clean:
	rm -rf *
	git checkout Makefile

