import { getInput } from '@actions/core'

export const GITHUB_TOKEN = getInput('github_token')
export const POLARIS_URL = getInput('polaris_url')
export const POLARIS_ACCESS_TOKEN = getInput('polaris_access_token')
export const POLARIS_COMMAND = getInput('polaris_command')
export const DEBUG = getInput('debug')
export const DIAGNOSTIC = getInput('diagnostic')
export const POLARIS_PROXY_URL = getInput('polaris_proxy_url')
export const POLARIS_PROXY_USERNAME = getInput('polaris_proxy_username')
export const POLARIS_PROXY_PASSWORD = getInput('polaris_proxy_password')
export const GENERATE_SARIF = getInput('generate_sarif')
export const SECURITY_GATE_FILTERS = getInput('security_gate_filters')
export const FAIL_ON_ERROR = getInput('fail_on_error')
export const SKIP_RUN = getInput('skip_run')
export const REPORT_URL = getInput('report_url')
