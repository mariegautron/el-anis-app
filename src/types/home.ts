import { Page } from "./utils"

export type Home = Page & {
    data: {
        hello : string
        heading: string
        labelbutton: string
    }
}