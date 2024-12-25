import * as React from "react"
import WebsiteLayout from "../components/WebsiteLayout"

const IndexPage = () => {
  return (
    <WebsiteLayout>
    <main>
   <h1>Index Page</h1>
    </main>
    </WebsiteLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

