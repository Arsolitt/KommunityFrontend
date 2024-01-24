################ Docker commands ################
include .env
# создание образа с нуля
build:
	docker-compose build --no-cache

# ребилд без глобальных изменений
rebuild:
	docker-compose build

# создать контейнер
up:
	docker-compose up -d

# выключить контейнер
down:
	docker-compose down

# зайти в терминал контейнера
shell:
	docker exec -it ${PROJECT_NAME}_landing zsh || winpty docker exec -it ${PROJECT_NAME}_landing zsh

# сборка статики для прода
prod:
	docker exec -it ${PROJECT_NAME}_landing npm run build || winpty docker exec -it ${PROJECT_NAME}_landing npm run build