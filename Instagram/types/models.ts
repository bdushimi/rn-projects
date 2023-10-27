export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

export interface IUser {
  id: string;
  username: string;
  name?: string;
  image?: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export type IEditableUserField = "name" | "username" | "website" | "bio";
export type IEditableUser = Pick<IUser, IEditableUserField>;

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}
