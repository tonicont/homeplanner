import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor() { }

  getGroupsByUser(userId: string): any {
      const database = firebase.database();
      return database.ref('users/' + userId + '/groups').once('value');
  }

  getGroupById(groupId: string): any {
    const database = firebase.database();
    return database.ref('groups/' + groupId).once('value');
  }

  createGroup(groupName: string): void {
    const database = firebase.database();
    const userId = firebase.auth().currentUser.uid;
    const newGroupKey = database.ref().child('groups').push().key;
    const users = {};
    users[userId] = true;
    const newGroup = {
      groupName: groupName,
      members: users
    };
    const updates = {};
    updates['/groups/' + newGroupKey] = newGroup;
    updates['/users/' + userId + /groups/ + newGroupKey] = true;
    database.ref().update(updates);
  }
}
