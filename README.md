开发
```bash
npm run dev
```

部署
```bash
npm start
```

### docker部署
应用部署于daocloud
```bash
docker login daocloud.io

docker build -t daocloud.io/zhengweikeng/blog-web .

# 可以检查一下
docker run -it daocloud.io/zhengweikeng/blog-web /bin/bash

# push 到 daocloud
docker push daocloud.io/zhengweikeng/blog-web
```

[http://seedzz.cn/#!/](http://seedzz.cn/#!/)