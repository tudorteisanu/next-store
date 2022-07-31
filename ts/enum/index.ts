export enum PageRoutes {
  Login = "/auth/login",
  Register = "/auth/register",
  ForgotPassword = "/auth/forgot-password",
  ResetPassword = "/auth/reset-password",
  InvalidResetPassword = "/auth/invalid-reset-token",
  SuccessfulChangesPassword = "/auth/success-password-change",
  About = "/about-us",
  GoodsCreate = "/goods/create",
  Goods = "/goods",
  Home = "/",
  Error = "/error/:code",
  Categories = "/categories",
  Users = "/users",
  UsersCreate = "/users/create",
  CategoriesCreate = "/categories/create",
}

export enum ApiRoutes {
  Login = "/auth/login",
  Register = "/auth/register",
  ForgotPassword = "/auth/forgot-password",
  ResetPassword = "/auth/reset-password",
  CheckResetPassword = "/auth/check-reset-token",
  Goods = "/goods",
  Categories = "/categories",
  Upload = "/upload",
  Users = "/users",
}

export enum PageLayout {
  Default = "default",
  Auth = "auth",
}
