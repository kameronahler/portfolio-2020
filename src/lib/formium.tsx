import { createClient, FormiumClient } from '@formium/client'

export const formium: FormiumClient = createClient(
  process.env.FORMIUM_PROJECT_ID,
  {
    apiToken: process.env.FORMIUM_API_TOKEN,
  }
)
