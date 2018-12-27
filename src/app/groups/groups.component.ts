import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import * as firebase from 'firebase';
import {Group} from '../model/Group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  newGroupName: string;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.getGroupsFromDatabase(firebase.auth().currentUser.uid);
  }

  getGroupsFromDatabase(userId: string): void {
    const groupsService = new GroupsService();
    const groups = [];
    groupsService.getGroupsByUser(userId).then(function (data) {
      data.forEach(function(childSnapshot) {
        groupsService.getGroupById(childSnapshot.key).then(function(group) {
          groups.push(new Group(group.key, group.val().groupName));
        });
      });
    });
    this.groups = groups;
  }

  createNewGroup(newGroupName: string): void {
    if (newGroupName) {
      this.groupsService.createGroup(newGroupName);
      this.getGroupsFromDatabase(firebase.auth().currentUser.uid);
    } else {
      console.log('El nombre del grupo no puede estar vacío');
    }
  }
}
