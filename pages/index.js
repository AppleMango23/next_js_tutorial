
// This is the Link API
import Link from 'next/link'

const Index = () => (
  
  <div>
    <h1 style={{color:"blue"}}>
    hey there how are you?
    </h1>
    <Link href="/about">
      <a style={{ fontSize: 20 }}>About Page</a>
    </Link>

    {/* <Link href="/about" style={{ fontSize: 20 }}>
  <a>About Page</a>
    </Link> */}

    <p>tataHello Next.js</p>
  </div>
)

export default Index