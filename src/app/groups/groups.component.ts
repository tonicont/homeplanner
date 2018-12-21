import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups = [];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.getGroupsFromDatabase(firebase.auth().currentUser.uid);
  }

  getGroupsFromDatabase(userId: string): void {
    const groups = [];
    this.groupsService.getGroupsByUser(userId).then(function (data) {
      data.forEach(function(childSnapshot) {
        groups.push(childSnapshot.key);
      });
    });
    this.groups = groups;
  }

  createNewGroup(): void {
    this.groupsService.createGroup('Grupo de testing');
  }

}
