export const environment = {
  production: true,
  cognito: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_QYfu3S0Jb',
    // IMPORTANTE: reemplaza este valor con el App Client ID de Cognito
    clientId: 'REEMPLAZAR_CON_APP_CLIENT_ID',
    domain: 'https://us-east-1qyfu3s0jb.auth.us-east-1.amazoncognito.com',
    redirectUri: 'https://TU_DOMINIO_PRODUCCION/auth/callback',
    logoutUri: 'https://TU_DOMINIO_PRODUCCION/login',
    scopes: ['openid', 'email', 'profile'],
  },
};
