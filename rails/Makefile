view_users_show = "app/views/users/show.html.erb"

all: new users_controller users_show users_show2

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
users_show2:
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
clean:
	rm -rf *
	git checkout Makefile

