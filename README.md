# GlobalSharedPassValue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## angular全局属性共享
1.复制app文件夹下的services文件夹以及内容
## 2 传值
## 2.1 引入共享文件
    import { AlleventService } from '../../../services/allevent.service';
## 2.2  在需要传值的ts文件中，依赖注入AlleventService
    constructor(private ev:AlleventService) { }
## 2.3  emit 传值
    this.ev.eventbus.emit({
        type: "唯一的键值",
        value: "hello world"
    })
## 3 接受值
## 3.1 重复2.1 2.2
## 3.2 订阅
    this.subObj = this.ev.eventbus.subscribe((msg)=>{
        console.log(msg.type);
    });
## 3.3 取消订阅
    ngOnDestroy(){
        if(this.subObj)
        this.subObj.unsubscribe();
    }
