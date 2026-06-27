# /auth は外部公開しない
```
location = /auth {
    internal;
}
```

# Laravel 10
```
location ~ \.php$ {
}
```
# Laravel 12
* local
```
location ~ \.php(/|$) {
}
```
* AWS
```
location ~ ^/index\.php(/|$) {
}
```

# GeoServer(JWT authentication not required)
```
location ~ ^/geoserver/(web|j_spring_security_) {
}
```

