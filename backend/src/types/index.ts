interface UserData {
  _id: string;
  name: string;
  email: string;
  password: string;
  role?: string
}

interface Error {
  statusCode?: number;
  message: string;
}