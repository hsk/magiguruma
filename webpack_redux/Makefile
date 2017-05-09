# 全メイク
all: npm src build

# ローカル npm の初期化とインストール
npm:

	# ローカルインストール
	npm init -y
	sudo npm install webpack --save-dev
	sudo npm install --save react react-dom redux react-redux
	sudo npm install --save-dev webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react

# ソース
src:

	echo '{' > .babelrc
	echo '  "presets": ["es2015", "react"]' >> .babelrc
	echo '}' >> .babelrc

	# print モジュール作成
	echo 'module.exports = function(msg) {' > print.js
	echo '  document.write("[print] " + msg);' >> print.js
	echo '};' >> print.js
	cp print.js print2.js

	# index.js 作成
	echo 'var print = require("./print")' > index.js
	echo 'print("Hello webpack")' >> index.js

	mkdir -p dist

	# index.html作成
	echo '<html>' > index.html
	echo '  <head>' >> index.html
	echo '    <meta charset="utf-8">' >> index.html
	echo '  </head>' >> index.html
	echo '  <body>' >> index.html
	echo '    <script type="text/javascript" src="index.js" charset="utf-8"></script>' >> index.html
	echo '  </body>' >> index.html
	echo '</html>' >> index.html
	mv index.html dist/.
	cp dist/index.html dist/index2.html
	ruby -pne "\$$_.sub!(/index\.js/,'index2.js')" -i dist/index2.html

	# webpack.config.js の作成
	echo 'module.exports ={' > webpack.config.js
	echo "  entry: {index:'./index.js',index2:'./index2.js'}," >> webpack.config.js
	echo "  output: {" >> webpack.config.js
	echo "    path: __dirname," >> webpack.config.js
	echo "    filename: 'dist/[name].js'" >> webpack.config.js
	echo "  }," >> webpack.config.js
	echo "  module: {" >> webpack.config.js
	echo "    loaders: [" >> webpack.config.js
	echo "      { test: /\.js$$/, exclude: /node_modules/, loader: 'babel-loader' }" >> webpack.config.js
	echo "    ]" >> webpack.config.js
	echo "  }" >> webpack.config.js
	echo "};" >> webpack.config.js


# ビルド
build:

	# webpack.config.js の設定でビルド
	webpack

	# 表示する
	vivaldi dist/index.html

# ソースの削除
cleansrc:
	rm -rf *.js *.html dist

# 全体の削除
clean: cleansrc
	sudo rm -rf *.json node_modules
