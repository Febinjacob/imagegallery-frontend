import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  
})
export class FilterPipe implements PipeTransform {

  transform(allImages:any[],searchTerm:string,propsName:any,additionalId: string): any[] {
    const result:any[] = [];
    if (!allImages||searchTerm==''||propsName=='') {
      return allImages;
      
    }
    if (additionalId !== '') {
      // If an additionalId is provided, only show content where 'id' matches the additionalId.
      allImages = allImages.filter((item: any) => item['id'] === additionalId);
    }
    allImages.forEach((item:any)=>{
      if (item[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {
       result.push(item) 
      }
    })
    return result;
  }


}
