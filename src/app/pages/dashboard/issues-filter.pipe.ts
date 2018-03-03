import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issuesFilter'
})
export class IssuesFilterPipe implements PipeTransform {

  transform(issues: any, key: string, value: any): any {
    return issues.filter(issue => {
      issue[key]['id'] ? issue[key]['id'] == value : issue[key] == value
    });
  }

}
