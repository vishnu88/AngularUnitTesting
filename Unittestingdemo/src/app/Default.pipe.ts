import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Default"
})
export class DefaultPipe implements PipeTransform {
  transform(
    value: string,
    fallback: string,
    forceHttp: boolean,
    args?: any
  ): any {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    if (forceHttp) {
      if (image.indexOf("https") == -1) {
        image.replace("http", "https");
      }
    }
    return image;
  }
}
