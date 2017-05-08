all: new kill users tweet

users: users1 users2 users3 users4
tweet: tweet1 tweet2 tweet3

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

users1:
	@echo コントローラとビューの作成
	rails g controller users index show

users2:

	@echo users/show ビュー作成
	echo '<h1><%= @user[:name] %></h1>' > tmp.rb
	echo '<p><%= @user[:username] %></p>' >> tmp.rb
	echo '<ul>' >> tmp.rb
	echo '  <li>Location : <%= @user[:location] %></li>' >> tmp.rb
	echo '  <li>About    : <%= @user[:about] %></li>' >> tmp.rb
	echo '</ul>' >> tmp.rb
	mv tmp.rb app/views/users/show.html.erb

	@echo users/show コントローラ作成
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


users3:

	@echo ルータ設定
	ruby -pne "\$$_.sub!(/get 'users\\/show'/, \"get 'users/show/:username' => 'users#show'\")" -i config/routes.rb 

	@echo 表示
	vivaldi http://localhost:3000/users/show/foo &

users4:

	@echo db 作成
	rake db:create

	@echo モデル作成
	rails g model user name:string username:string location:string about:text
	cat app/models/user.rb
	cat db/migrate/*_create_users.rb

	@echo db マイグレーション
	rake db:migrate

	@echo db シード作成
	echo "User.delete_all()" > tmp.rb
	echo "@user = User.new" >> tmp.rb
	echo "@user.name = 'Ryo Suzuki'" >> tmp.rb
	echo "@user.username = 'foo'" >> tmp.rb
	echo "@user.location = 'Kanagawa, Japan'" >> tmp.rb
	echo "@user.about = 'Hello, I am Ryo. I am from database!'" >> tmp.rb
	echo "@user.save" >> tmp.rb
	echo "" >> tmp.rb
	echo "@user = User.new" >> tmp.rb
	echo "@user.name = 'Shohei Aoki'" >> tmp.rb
	echo "@user.username = 'bar'" >> tmp.rb
	echo "@user.location = 'Tottori, Japan'" >> tmp.rb
	echo "@user.about = 'Nice to meet you. I am from database!'" >> tmp.rb
	echo "@user.save" >> tmp.rb
	mv tmp.rb db/seeds.rb
	cat db/seeds.rb

	@echo rake seed実行
	rake db:seed

	@echo user/show コントローラ修正
	echo '' > tmp.rb
	echo "  def show" >> tmp.rb
	echo "    @user = User.find_by(:username=>params[:username])" >> tmp.rb
	echo "  end" >> tmp.rb
	ruby -e 'puts File.read("app/controllers/users_controller.rb").sub(/\s+def show.+?end\s+/m,"\n"+File.read("tmp.rb")+"\n")' > tmp2.rb
	mv tmp2.rb app/controllers/users_controller.rb
	cat app/controllers/users_controller.rb

tweet1:

	@echo tweets コントローラ作成
	rails g controller tweets index show new

	@echo tweets モデル作成
	rails g model tweet title:string content:text

	@echo マイグレーション
	rake db:migrate

	@echo 表示
	vivaldi http://0.0.0.0:3000/tweets/new &

tweet2:

	@echo tweets/new ビュー作成
	echo '' > tmp.rb
	echo "<%= form_for Tweet.new do |f| %>" >> tmp.rb
	echo "  <%=f.label :title %>" >> tmp.rb
	echo "  <%=f.text_field :title %>" >> tmp.rb
	echo "  <%=f.label :content %>" >> tmp.rb
	echo "  <%=f.text_area :content %>" >> tmp.rb
	echo "  <%=f.submit %>" >> tmp.rb
	echo "<% end %>" >> tmp.rb
	mv tmp.rb app/views/tweets/new.html.erb

	@echo tweet/new ルータ設定
	ruby -pne "\$$_.sub!(/(get 'tweets\\/new')/, \"\\\\1\\n  post 'tweets' => 'tweets#create'\")" -i config/routes.rb


	@echo tweet/create コントローラ修正
	echo "def create" > tmp.rb
	echo "    @tweet = Tweet.new" >> tmp.rb
	echo "    @tweet.title = params[:tweet][:title]" >> tmp.rb
	echo "    @tweet.content = params[:tweet][:content]" >> tmp.rb
	echo "    @tweet.save" >> tmp.rb
	echo "    redirect_to '/tweets/index'" >> tmp.rb
	echo "  end" >> tmp.rb
	ruby -pne "\$$_.sub!(/(def show)/m, File.read('tmp.rb')+\"\n  \\\\1\\n  \")" -i app/controllers/tweets_controller.rb

tweet3:

	@echo tweet/index コントローラ修正
	ruby -pne "\$$_.sub!(/(def index)/m, \"\\\\1\\n    @tweets = Tweet.all\")" -i app/controllers/tweets_controller.rb

	@echo tweet/index ビュー作成
	echo "<% @tweets.each do |tweet| %>" > tmp.rb
	echo "<h1><%= tweet.title %></h1>" >> tmp.rb
	echo "<p><%= tweet.content %></p>" >> tmp.rb
	echo "<% end %>" >> tmp.rb
	mv tmp.rb app/views/tweets/index.html.erb

run:
	vivaldi http://localhost:3000/users/show &
	rails s

clean:
	rm -rf *
	git checkout Makefile README.md

