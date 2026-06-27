* /auth は外部公開しない

```conf
    location = /auth {
        internal;
    }
```
