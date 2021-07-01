export const messages = {
  validation: {
    domain: {
      example: '.apps.hypi.app',
      notValid: 'Please provide a valid domain eg: (mydomain.com)',
      // eslint-disable-next-line no-template-curly-in-string
      invalidDomain: 'Invalid domain, {domain} cannot be used in a user provided domain',

    },
    appName: {
      regex: '[a-z0-9-]{1,100}',
      notValid: 'Please provide a valid name',
    },
    appLabel: {
      regex: '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$',
      notValid: 'Please provide a valid label',
    },
    website: {
      regex: '^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
      notValid: 'Please provide a valid website',
    },
    email: {
      // eslint-disable-next-line no-useless-escape
      regex: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      notValid: 'Not valid email',
    },
  },
  initCommand: {
    intro: 'This command will walk you through creating app.yaml and instance.yaml files.',
    proceed: '.hypi folder already exists, do you want to proceed and override its contents',
    failedDeleteHypi: 'Failed to delete .hypi directory',
    haveInstance: {
      message: 'Do you have a Hypi instance created at https://hypi.app that you’d like to use?',
    },
    hypiDomain: {
      message: 'Please enter a valid domain',
    },
    appName: {
      message: 'App name? ',
    },
    appLabel: {
      message: 'App label? ',
    },
    website: {
      message: 'Website? ',
    },
    domain: {
      message: 'Domain(Optional)?',
    },
    initDone: 'Init done successfully, Now write your schema then run the hypi sync command to generate your app\'s API',
  },
  loginCommand: {
    loginDomainMessage: 'Enter domain and token',
    loginEmailMessage: 'Enter your email and password',
    email: {
      message: 'Email? ',
    },
    password: {
      message: 'Password? ',
    },
    domain: {
      message: 'Domain? ',
    },
    token: {
      message: 'Token? ',
    },
    loggedIn: 'Logged in successfully',
  },
  syncCommand: {
    selectPlatform: 'Please enter platform',
    pleasLogin: 'Please login first',
    appCreated: 'App created with id : ',
    instanceCreated: 'Instance created with id : ',

  },
  configCommand: {
    enterApiDomain: 'Please enter api domain',
    doneMessage: 'Done, Please make sure to login again, hypi login and do int and sync your schema',
  },
  ExpiryHook: {
    expiredMessage: 'Your token expired, please make sure to login again',
  },
}
