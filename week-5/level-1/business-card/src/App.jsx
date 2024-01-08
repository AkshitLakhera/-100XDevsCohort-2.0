import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div>
      <Card
        name="John Doe"
        description="Web Developer"
        interests=" App dev, Web dev, Game dev & Webgl"
        linkedin="https://www.linkedin.com/in/johndoe/"
        twitter="https://twitter.com/johndoe"
      />
    </div>
  )
}

export default App
