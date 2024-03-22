# Variables
IMAGE_NAME := my-express-app
PORT := 3000

# Docker commands
build:
    docker build -t $(IMAGE_NAME) .

run:
    docker run -p $(PORT):$(PORT) $(IMAGE_NAME)

stop:
    docker stop $$(docker ps -q --filter ancestor=$(IMAGE_NAME))

clean:
    docker rm $$(docker ps -a -q --filter ancestor=$(IMAGE_NAME))
    docker rmi $(IMAGE_NAME)

.PHONY: build run stop clean

