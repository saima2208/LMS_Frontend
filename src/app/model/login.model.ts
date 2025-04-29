export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    userId: number;
    name: string;
    email: string;
    role: 'Admin' | 'Teacher' | 'Student';
  };
}
