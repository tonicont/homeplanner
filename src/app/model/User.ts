export class User {
  displayName: string;
  email: string;
  profile_picture: string;

  constructor(displayName: string, email: string, profile_picture: string) {
    this.displayName = displayName;
    this.email = email;
    this.profile_picture = profile_picture;
  }
}
