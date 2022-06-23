
import * as inquirer from 'inquirer'
import { messages } from '../helpers/messages'
import * as validators from '../helpers/input-validators'
import hypiLogin from '../api/login'
import Utils from '../helpers/utils'

enum Loginmethods {
  ByEmailAndPassword = 'EMAILANDPASSWORD',
  ByDomainAndToken = 'DOMAINANDTOKEN'
}

export default class LoginService {
  private LoginMethod: string

  private email: string

  private password: string

  private domain: string

  private token: string

  constructor() {
    this.LoginMethod = ''

    this.email = ''
    this.password = ''

    this.domain = ''
    this.token = ''
  }

  getToken() {
    return this.token
  }

  async promptLoginByDomain() {
    this.LoginMethod = Loginmethods.ByDomainAndToken

    const loginWithDomainResponse: any = await inquirer.prompt([
      {
        name: 'domain',
        message: messages.loginCommand.domain.message,
        type: 'input',
        validate: validators.domainValidator,
      },
      {
        name: 'token',
        message: messages.loginCommand.token.message,
        type: 'input',
        // validate: validators.AppLabelValidator
      },
    ])
    this.domain = loginWithDomainResponse.domain
    this.token = loginWithDomainResponse.token
  }

  async promptLoginByEmail() {
    this.LoginMethod = Loginmethods.ByEmailAndPassword

    const loginWithEmailResponse: any = await inquirer.prompt([
      {
        name: 'email',
        message: messages.loginCommand.email.message,
        type: 'input',
        validate: validators.EmailValidator,
      },
      {
        name: 'password',
        message: messages.loginCommand.password.message,
        type: 'password',
        // validate: validators.AppLabelValidator
      },
    ])
    this.email = loginWithEmailResponse.email
    this.password = loginWithEmailResponse.password
  }

  async login() {
    /** login to hypi */
    if (this.LoginMethod === Loginmethods.ByEmailAndPassword) {
      const data = await hypiLogin(this.email, this.password)
      if (data.error) return { error: data.error, data: null }
      return { error: null, data: data }
    }
    if (this.LoginMethod === Loginmethods.ByDomainAndToken) {
      let payload: any
      try {
        payload = Utils.parseJwt(this.token)
        return {
          error: null,
          data: {
            domain: this.domain,
            sessionToken: this.token,
            sessionExpires: payload.exp,
          },
        }
      } catch (error: any) {
        return { error: error.message }
      }
    }
    return { error: null, data: null }
  }
}
