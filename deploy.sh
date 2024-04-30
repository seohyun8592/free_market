// ./script/deploy.sh
pid=$(sudo lsof -ti:3400)
if [ -n "$pid" ]; then 
sudo kill -9 $pid
echo "kill ${pid} process" 
npm start
else
npm start
fi