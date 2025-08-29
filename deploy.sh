#!/bin/bash
npm install
# React 앱 빌드
npm run build  # npm run build
# 빌드된 앱을 로컬 서버에서 서빙
serve -s build -l 3000  # serve로 빌드된 앱을 실행