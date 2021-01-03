// packages
import React, { useState } from 'react'

export default function Options() {
  // state
  const [checks, setChecks] = useState(() => {
    return {
      option_1: false,
      option_2: false,
      option_3: false,
    }
  })

  const handleCheckChange = e => {
    let newState = { ...checks }
    const el = e.currentTarget

    newState[el.id] = el.checked
    setChecks(newState)
  }

  const handleContent = () => {
    if (checks.option_1 && checks.option_2 && checks.option_3) {
      return '1 2 3'
    } else if (checks.option_1 && checks.option_2) {
      return '1 2 x'
    } else if (checks.option_1 && checks.option_3) {
      return '1 x 3'
    } else if (checks.option_2 && checks.option_3) {
      return 'x 2 3'
    } else if (checks.option_1) {
      return '1 x x'
    } else if (checks.option_2) {
      return 'x 2 x'
    } else if (checks.option_3) {
      return 'x x 3'
    } else {
      return 'x x x'
    }
  }

  const content = handleContent()

  return (
    <section>
      <header>
        <h2>Options</h2>
      </header>
      <section>
        <header>
          <h3>Controls</h3>
        </header>
        <div>
          <div>
            <label htmlFor='option_1'>Option 1</label>
            <input
              id='option_1'
              name='options'
              onChange={handleCheckChange}
              type='checkbox'
            />
          </div>
          <div>
            <label htmlFor='option_2'>Option 2</label>
            <input
              id='option_2'
              name='options'
              onChange={handleCheckChange}
              type='checkbox'
            />
          </div>
          <div>
            <label htmlFor='option_3'>Option 3</label>
            <input
              id='option_3'
              name='options'
              onChange={handleCheckChange}
              type='checkbox'
            />
          </div>
        </div>
      </section>
      <section>
        <header>
          <h3>Content</h3>
        </header>
        <div>
          {content} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos sequi culpa non similique aut. Nihil officia eveniet omnis
          doloremque dicta illo culpa rerum sint, quidem minima obcaecati magnam
          reprehenderit maiores.
        </div>
      </section>
    </section>
  )
}
