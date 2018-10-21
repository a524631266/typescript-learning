1.初始化 typescript 编译配置 会自动生成 tsconfig.json
```
    $ tsc --init
```
2.添加package.json
```
    $ npm init -y
```
3.安装有ts的包 比如 jquery ts
```
    $ npm install jquery @types/jquery -S  
    // 同时安装 jquery以及其ts文件 否则无法使用在ts中import jquery
```
