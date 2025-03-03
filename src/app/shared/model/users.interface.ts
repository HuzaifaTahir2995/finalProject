export interface Users {
  id: string;
  username: string;
  password: string;
  email: string;
  mobile: number;
  firstName: string;
  middleName: string;
  lastName: string;
  birthdate: Date;
  interests: string[];
  role: string;
  editMode?: boolean;
  active: boolean;
}
