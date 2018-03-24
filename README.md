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
[{
    "name": "用户管理",
    "url": "",
    "child": [{
        "name": "机构用户管理",
        "url": "/user/organization",
    }, {
        "name": "实名认证记录查询",
        "url": "/user/realName"
    }]
}]
```
