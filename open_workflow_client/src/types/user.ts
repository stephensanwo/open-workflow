export interface UserSignUpProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  confirm_password: string;
}

export interface UserSignInProps {
  email: string;
  password: string;
}
