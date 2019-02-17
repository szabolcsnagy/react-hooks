import React from 'react'

export const Debug = (props) => (
  <div style={{
    margin: '3rem 0',
    borderRadius: 4,
    background: '#f6f8fa',
    boxShadow: '0 0 1px #eee inset'
  }}>
    <div className="debug">
    Form State
      <pre style={{
        fontSize: '0.65rem',
        padding: '0.25rem 0.5rem',
        overflowX: 'scroll'
      }}>
       {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  </div>
)
  
