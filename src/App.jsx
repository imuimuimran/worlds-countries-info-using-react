import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <>
      
      <h2>World's Countries Information using React</h2>
      <Suspense fallback={<p>Worls's Countries Info is Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
