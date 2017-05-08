# 全メイク
all: npm src build

# グローバルインストール
all_global: npm_global src build

# npmのグローバルインストール
npm_global:

	# グローバルにインストール
	sudo npm install webpack -g


# ローカル npm の初期化とインストール
npm:

	# ローカルインストール
	npm init
	sudo npm install webpack --save-dev

# ソース
src:

	# print モジュール作成
	echo 'module.exports = function(msg) {' > print.js
	echo '  document.write("[print] " + msg);' >> print.js
	echo '};' >> print.js

	# main.js 作成
	echo 'var print = require("./print")' > main.js
	echo 'print("Hello webpack")' >> main.js

	# index.html作成
	echo '<html>' > index.html
	echo '  <head>' >> index.html
	echo '    <meta charset="utf-8">' >> index.html
	echo '  </head>' >> index.html
	echo '  <body>' >> index.html
	echo '    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>' >> index.html
	echo '  </body>' >> index.html

	# webpack.config.js の作成
	echo 'module.exports ={' > webpack.config.js
	echo "  entry: './main.js'," >> webpack.config.js
	echo "  output: {" >> webpack.config.js
	echo "    path: __dirname," >> webpack.config.js
	echo "    filename: 'bundle.js'" >> webpack.config.js
	echo "  }" >> webpack.config.js
	echo "};" >> webpack.config.js

# ビルド
build:

	# webpack.config.js の設定でビルド
	webpack

	# 表示する
	vivaldi index.html

# ソースの削除
cleansrc:
	rm -rf *.js *.html

# 全体の削除
cleanall: cleansrc
	sudo rm -rf *.json node_modules
