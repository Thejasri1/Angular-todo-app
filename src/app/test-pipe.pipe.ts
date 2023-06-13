import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  pure:true
})
export class TestPipePipe implements PipeTransform {

  transform(wish: unknown, ...args: unknown[]): unknown {
    console.log("wish",wish)
    console.log("params",args)
    return "hello";
  }

}
