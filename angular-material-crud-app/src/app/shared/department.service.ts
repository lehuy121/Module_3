import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as lodash from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentList: AngularFireList<any>;
  arrayDepartment = [];

  constructor(private firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list('department');
    this.departmentList.snapshotChanges().subscribe(list => {
      this.arrayDepartment = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  getDepartmentName($key) {
    if ($key === '0') {
      return '';
    } else {
      return lodash.find(this.arrayDepartment, (obj) => {
        return obj.$key === $key;
      }).name;
    }
  }
}
