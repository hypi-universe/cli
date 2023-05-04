import {messages} from './messages'

export const domainValidator = async (input: string) => {
  const invalidDomains = ['hypi.io', 'hypi.app', 'hypi.dev', 'hypi.com']
  const splittedByDot = input.split('.')
  return true
  // handle case anydomain
  if (splittedByDot.length < 2) {
    return messages.validation.domain.notValid
  }
  // handle case hypi.io
  if (invalidDomains.includes(input)) {
    return messages.validation.domain.invalidDomain.replace('{domain}', input)
  }
  // if part of string have any of invalid domains and dont end with apps.hypi.app and length < 4
  // hypi.io.app
  let haveInvalid = false
  invalidDomains.forEach(domain => {
    if (input.includes(domain)) {
      haveInvalid = true
    }
  })

  if (haveInvalid && !input.toLowerCase().endsWith(messages.validation.domain.example)) {
    return messages.validation.domain.invalidDomain.replace('{domain}', input)
  }

  return true
}

export const AppNameValidator = async (input: string) => {
  if (input.match(messages.validation.appName.regex)) {
    return true
  }
  return messages.validation.appName.notValid
}
export const AppLabelValidator = async (input: string) => {
  if (input.match(messages.validation.appLabel.regex)) {
    return true
  }
  return messages.validation.appLabel.notValid
}

export const WebsiteValidator = async (input: string) => {
  if (input.trim().match(messages.validation.website.regex)) {
    return true
  }
  return messages.validation.website.notValid
}

export const DomainValidatorAllowEmpty = async (input: string) => {
  if (input.trim().match(messages.validation.website.regex) || input.trim().length === 0) {
    return true
  }
  return messages.validation.website.notValid
}

export const EmailValidator = async (input: string) => {
  if (input.match(messages.validation.email.regex)) {
    return true
  }
  return messages.validation.email.notValid
}
