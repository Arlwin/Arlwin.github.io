#!/bin/sh

PROJECT=$1

# cd portfolio-vue
cd $PROJECT
npm run build

cd ..
# cp -r portfolio-vue/dist/* .
cp -r $PROJECT/dist/* .