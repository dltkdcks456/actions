#!/bin/bash
npm install
npm run build  # npm run build
echo "Current working directory: $(pwd)"
npx serve -s build -l 3000 &  # serve로 빌드된 앱을 실행