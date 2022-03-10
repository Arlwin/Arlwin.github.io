#!/bin/sh

cd portfolio-vue
npm run build

cd ..
cp -r portfolio-vue/dist/* .