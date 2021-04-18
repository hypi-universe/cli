
import * as inquirer from 'inquirer'
import {messages} from '../helpers/messages'
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

  // hypi-domain: latest.store.hypi.01f2gzbjka0xq88nzmbabmwzwn.hypi.app
  // token : eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmxvZ2luIjp0cnVlLCJoeXBpLnVzZXJuYW1lIjoiZW1hbi5jc2UyMDA4QGdtYWlsLmNvbSIsImh5cGkuZW1haWwiOiJlbWFuLmNzZTIwMDhAZ21haWwuY29tIiwiYXVkIjoiMDFGMkdaQkpLSDZSM1RDNkVKRFJFNU5IRzQiLCJpYXQiOjE2MTgyMzA4MzYsImV4cCI6MTYyMDgyMjgzNiwic3ViIjoiMDFGMkdaQkpLQUgxSkNDQlZaUzI0TVQ3VlIiLCJuYmYiOjE2MTgyMzA4MzZ9.I3b_yGBp65EfCaBf7ftWHb_lgfrmBA5ADLSI9fd9aTgkGIym_Y9Gfj_qcQA4mkZMRqnKhVIxLujSOrfewMTQjxkOkNk5AygbvSRg2S0wyKOMJ4Uzd035JdgfSf_TPY8vUPqP8JoyoAkGW9kxMdRoNS7GIeeo1Pz-nLUNUtzgt7HLlDPzquPYX4k-Aj45QwMX_-Ps6G3Gd3qmMZ_15Vwnu-OGFvoaGEiB8-ijozMz-DNhcDcYOwRKGwTjDgeL6NlPOB4V9KPW4DAjaH92ztxtduzQLbvMbYj4pzE4GtvV8wxDXmBzVSM7wmBI0QzpPmf7dmPeFT_N1HSANSvSYpxCtA
  async login() {
    /** login to hypi */
    if (this.LoginMethod === Loginmethods.ByEmailAndPassword) {
      const data = await hypiLogin(this.email, this.password)
      if (data.error) return {error: data.error, data: null}
      return {error: null, data: data}
    }
    if (this.LoginMethod === Loginmethods.ByDomainAndToken) {
      let payload: any
      try {
        payload = Utils.parseJwt(this.token)
        return {
          error: null, data: {
            domain: this.domain,
            sessionToken: this.token,
            sessionExpires: payload.exp,
          },
        }
      } catch (error) {
        return {error: error.message}
      }
    }
    return {error: null, data: null}
  }
}
