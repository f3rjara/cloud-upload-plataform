export const environment = {
  production: false,
  cognito: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_QYfu3S0Jb',
    // IMPORTANTE: reemplaza este valor con el App Client ID de Cognito
    // AWS Console → Cognito → User pools → photos-cloud-user-pool-a7ishi → App clients
    clientId: '6sf67jcs3nn130ri45vmmebm4c',
    domain: 'https://us-east-1qyfu3s0jb.auth.us-east-1.amazoncognito.com',
    redirectUri: 'http://localhost:4200/auth/callback',
    logoutUri: 'http://localhost:4200/login',
    scopes: ['openid', 'email', 'profile'],
  },
};
