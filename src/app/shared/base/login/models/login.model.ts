export interface PostLoginModel{
  email:string;
  password:string;
}

export interface PostResponseLoginModel{
  token?:string;
  expiracion?:string;
  rol?: [ RolModel ];
}

export interface RolModel{
  issuer?:string;
  originalIssuer?:string;
  properties?:any,
  subject?:any,
  type?:string;
  value?:string;
  valueType?:string;
}
