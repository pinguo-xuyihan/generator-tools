rm -rf ./build
rm -rf ./<%= appname %> 
rm -rf ../../public/<%= appname %> 

export NODE_PATH='/home/worker/node/lib/node_modules'
cnpm install
webpack --config webpack.pro.config.js
mkdir <%= appname %> 
mkdir ./build/app
cp -r ./app/common ./build/app
cp -r ./app/resource ./build/app
cp -r ./build/*  ./<%= appname %> 
cp -r ./<%= appname %>   ../../public

rm -rf ./build
rm -rf ./<%= appname %> 
rm -rf ./node_modules