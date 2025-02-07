import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  // projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  // apiVersion,
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // token: process.env.SANITY_API_TOKEN,

  projectId:"j7dstq5e",
  dataset:"production",
  useCdn: false,
  apiVersion: '2025-01-13',
  token:"skP0Kvt4DfBEWEfEWsS8WoRGv6i7n14jrfIOitcAcJOI2Amu2sYBltZEV9btnREIRpti7Gz3fGaCxARSknTHseXSjHUjNzLA9EyooFSkdIbdUYO4ZTEpprgsoibMRqMC353JuTfig0Jnw7tSh3udY49BsqmepXuLNlh1ycaRQiRbfkcD8PbY"
})