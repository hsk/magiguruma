# 全メイク
all: npm build

# ローカル npm の初期化とインストール
npm:

	# ローカルインストール
	npm init -y
	sudo npm install webpack --save-dev
	sudo npm install --save react react-dom redux react-redux
	sudo npm install --save-dev webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react babel-plugin-transform-react-jsx

# ビルド
build:

	# webpack.config.js の設定でビルド
	webpack

	# 表示する
	vivaldi dist/index.html

# ソースの削除
clean_dist:
	rm -rf dist/*.js

# 全体の削除
clean: clean_dist
	sudo rm -rf package.json node_modules
