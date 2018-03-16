# ng-menu-aim
An menu component for Angular.

<img width="240" src="https://user-images.githubusercontent.com/1193966/37502646-ec0739ca-290e-11e8-9677-bb5c78605d68.png"/>

## Usage

In order to use the ng-menu-aim you have to include/import it into your application:

### Installation

Install the module into your application and save it as a dev dependency in your `package.json` file

```
npm i ng-menu-aim --save
```

```js
import {MenuComponent} from 'ng-menu-aim';
```
Include it in your components declarations list in your @NgModule(...):

```js
@NgModule({
  //...
  declarations: [MenuComponent],
  //...
})
```

Use it in your template:

```html
<app-menu [data]="data"></app-menu>
```


### The example for `data` 

```json
{
    "status": 2,
    "code": "000000",
    "msg": "请求处理成功",
    "data": [{
        "name": "用户管理",
        "resourceId": 1986,
        "sort": 1,
        "url": "",
        "icon": "",
        "child": [{
            "name": "机构用户管理",
            "resourceId": 1983,
            "sort": 1,
            "url": "/user/organization",
            "icon": "",
            "child": [],
            "right": true
        }, {
            "name": "实名认证记录查询",
            "resourceId": 2022,
            "sort": 2,
            "url": "/user/realName",
            "icon": "",
            "child": [],
            "right": true
        }],
        "right": true
    }]
}
```
