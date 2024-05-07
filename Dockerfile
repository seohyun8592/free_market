# # 기본 이미지 설정
# FROM node:18.16.0-alpine

# # 작업 디렉토리 설정
# WORKDIR /app

# # 의존성 파일 복사
# COPY package.json package-lock.json ./

# # 의존성 설치
# RUN npm i

# # 소스 코드 복사
# COPY . .

# # 빌드
# RUN npm run build


# 베이스 이미지 지정. 빌드 시 메모리에 적재
FROM node:18.16.0

# Dependencies
WORKDIR .
COPY . 

# NPM Clean Install 위한 체크
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Builder
COPY . 
RUN npm run build

# 4. dev image
EXPOSE 32100
CMD ["npm", "run", "start"]