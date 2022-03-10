#!/bin/sh

cd portfolio-vue
npm run build

cd ..
cp portfolio-vue/dist/* .