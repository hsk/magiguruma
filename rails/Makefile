all: new users_controller users_show run

new:
	rails new test1
	mv test1/* .
	rm -rf test1

users_controller:
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


users_show2:
	ruby -pne "\$$_.sub!(/get 'users\\/show'/, \"get 'users/show/:username' => 'users#show'\")" -i config/routes.rb 

next1:
	

	ruby -pen "$$_.sub!(/get 'users\\/show'/, \"get 'users/show/:username' => 'users#show'\")" -i config/routers.rb

	```
	open http://localhost:3000/users/show/foo
	```

	```
	rake db:create
	```

	```
	rails g model user name:string username:string location:string about:text
	```

	app/models/user.rb

	db/migrate/20130630062417_create_users.rb

	```
	rake db:migrate
	```

	db/seeds.rb

	```
	User.delete_all()
	@user = User.new
	@user.name = 'Ryo Suzuki'
	@user.username = 'foo'
	@user.location = 'Kanagawa, Japan'
	@user.about = 'Hello, I am Ryo. I am from database!'
	@user.save

	@user = User.new
	@user.name = 'Shohei Aoki'
	@user.username = 'bar'
	@user.location = 'Tottori, Japan'
	@user.about = 'Nice to meet you. I am from database!'
	@user.save
	```

	```
	rake db:seed
	```

	```
	def show
	@user = User.find_by(:username=>params[:username])
	end
	```

next:

	```
	rails g controller tweets index show new
	rails g model tweet title:string content:text
	```

	```
	rake db:migrate
	```

	http://0.0.0.0:3000/tweets/new

	```
	<%= form_for Tweet.new do |f| %>
	<%= f.label :title %>
	<%= f.text_field :title %>
	<%= f.label :content %>
	<%= f.text_area :content %>
	<%= f.submit %>
	<% end %>
	```

	```
	post "tweets" => "tweets#create"
	```

	added app/controllers/tweets\_controller.rb

	```
	def create
	@tweet = Tweet.new
	@tweet.title = params[:tweet][:title]
	@tweet.content = params[:tweet][:content]
	@tweet.save
	redirect_to '/tweets/index'
	end
	```

	```
	def index
	@tweets = Tweet.all
	end
	```

	app/views/tweets/index.html.erb

	```
	<% @tweets.each do |tweet| %>
	<h1><%= tweet.title %></h1>
	<p><%= tweet.content %></p>
	<% end %>

	```

	```
	http://0.0.0.0:3000/tweets/index

	```

run:
	vivaldi http://localhost:3000/users/show &
	rails s

clean:
	rm -rf *
	git checkout Makefile

