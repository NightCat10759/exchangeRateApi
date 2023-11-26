# How to run this APP

- clone this project

```
git clone git@github.com:NightCat10759/exchangeRateApi.git
```

- check npm 、node version

```
npm version: 9.8.1
node version: v18.18.2
```

- install package and run the server

```
npm i 
npm run dev
```

## Api List , PORT 3000

### 1. GET /getExchangeRate?source=USD&target=JPY&amount=$1,525

> #### Query params [KEY] : [type] e.g: (format)

```
source: String , e.g: USD 、 JPY 、TWD
target: String , e.g: USD 、 JPY 、TWD
amount: String , e.g: $1.529
```

> #### return body

```
{
    "msg": "success",
    "amount": "170,496.52"
}
```



### 2. GET /getHi?name=mike

> #### Query params [KEY] : [type]

```
name: String
```

> #### return body

```
hi mike
```


## Test


- run unit test

```
npm tun test
```
