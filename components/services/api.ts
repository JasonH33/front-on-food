import axios from "axios"

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Authorization: "Bearer [amFzb24uYS5hLmxvdXJlbmNvQG91dGxvb2suY29t]",
  },
})