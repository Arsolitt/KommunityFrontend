################ Docker commands ################

# создание образа с нуля
build:
	docker-compose build --no-cache
# ребилд без глобальных изменений
rebuild:
	docker-compose build
# создать контейнер
up:
	docker-compose up -d; docker exec -it landing zsh #|| winpty docker exec -it landing zsh
# выключить контейнер
down:
	docker-compose down
# зайти в терминал контейнера
shell:
	docker exec -it landing zsh #|| winpty docker exec -it landing zsh
# сборка статики для прода
prod:
	docker exec -it landing npm run build #|| winpty docker exec -it landing npm run build