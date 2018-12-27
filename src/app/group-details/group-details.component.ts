import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { UsersService } from '../users.service';
import {ActivatedRoute} from '@angular/router';
import { User } from '../model/User';



@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  groupName: string;
  users:  User[];
  usersId: string[];

  constructor(
    private groupsService: GroupsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getGroup(id, function() {
      GroupDetailsComponent.prototype.getUsers(GroupDetailsComponent.prototype.usersId);
    });
  }

  getGroup(groupId: string, callback: () => void): void {
    const usersArray = [];
    this.groupsService.getGroupById(groupId).then(function (data) {
      GroupDetailsComponent.prototype.groupName = data.val().groupName;
      const users = Object.keys(data.val().members).map(function(key) {
        return [String(key), data.val().members[key]];
      });
      users.forEach(function (item) {
        usersArray.push(item[0]);
      });
      GroupDetailsComponent.prototype.usersId = usersArray;
      callback();
    });
  }

  getUsers(usersIds: string[]): void {
    const usersArray = [];
    usersIds.forEach(function(item) {
      const  usersService = new UsersService();
      usersService.getUserById(item).then(function (data) {
        usersArray.push(new User(data.val().displayName, data.val().email, data.val().profile_picture));
      });
    });
    this.users = usersArray;
  }
}
