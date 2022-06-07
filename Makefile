build: #
	npx nx build selectel-mobile
sync: #
	npx nx run selectel-mobile:sync

run_proxy: ## Запуск  Reverse Proxy для достпу к API
	npx nx serve selectel-reverse-proxy-api

run_web: ## run_web - запуск разработки
	npx nx run selectel-mobile:serve --port=4201 --hmr --open

open_android: ## open_android
	nx run selectel-mobile:open:android
