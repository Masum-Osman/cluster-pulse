docker build -t cluster-pulse .

docker run -p 8080:8080 cluster-pulse

docker tag cluster-pulse masumosman/cluster-pulse:latest

docker push masumosman/cluster-pulse