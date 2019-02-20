import React from 'react'

export const Loading = (props) => (
  <div className="loading">
  <svg xmlns="http://www.w3.org/2000/svg" width="35.7" height="37.2" viewBox="-287 378.9 35.7 37.2">
    <path d="M-266.1 380.1c-.8-.8-1.9-1.3-3-1.3s-2.2.4-3 1.3c-.8.8-1.3 1.9-1.3 3 0 1.2.4 2.2 1.3 3 .8.8 1.9 1.3 3 1.3s2.2-.4 3-1.3c.8-.8 1.3-1.9 1.3-3-.1-1.1-.5-2.1-1.3-3zm-2 4.1c-.3.3-.6.4-1 .4s-.7-.1-1-.4c-.3-.3-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1-.4s.7.1 1 .4c.3.3.4.6.4 1 0 .3-.2.7-.4 1z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0s" repeatCount="indefinite"/>
    </path>
    <path  d="M-255 384c-1-1-2.1-1.4-3.6-1.4-1.4 0-2.6.5-3.5 1.5-1 1-1.5 2.2-1.5 3.5 0 1.4.5 2.6 1.5 3.5 1 1 2.2 1.5 3.5 1.5 1.4 0 2.6-.5 3.5-1.5 1-1 1.5-2.2 1.5-3.5 0-1.5-.4-2.6-1.4-3.6zm-2.1 5.1c-.4.4-.9.6-1.5.6s-1.1-.2-1.5-.6c-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5c.4-.4.9-.6 1.5-.6s1.1.2 1.5.6c.4.4.6.9.6 1.5.1.5-.1 1-.6 1.5z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.1s" repeatCount="indefinite"/>
    </path>
    <path  d="M-252.1 396.1c-.6-.6-1.2-.8-2-.8s-1.5.3-2 .8c-.6.6-.8 1.2-.8 2s.3 1.5.8 2c.6.6 1.2.8 2 .8s1.5-.3 2-.8c.6-.6.8-1.2.8-2s-.3-1.4-.8-2z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
    </path>
    <path d="M-256.5 406.7c-.6-.6-1.2-.9-2-.9s-1.4.3-2 .9c-.6.6-.9 1.2-.9 2s.3 1.5.9 2c.6.6 1.2.8 2 .8s1.5-.3 2-.8c.6-.6.8-1.2.8-2 0-.7-.3-1.4-.8-2z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.3s" repeatCount="indefinite"/>
    </path>
    <path  d="M-269.2 410.3c-.8 0-1.5.3-2 .8-.6.6-.8 1.2-.8 2s.3 1.5.8 2c.6.6 1.2.8 2 .8s1.5-.3 2-.8c.6-.6.8-1.2.8-2s-.3-1.5-.8-2-1.2-.8-2-.8z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.4s" repeatCount="indefinite"/>
    </path>
    <path  d="M-277.8 406.7c-.6-.6-1.2-.9-2-.9s-1.5.3-2 .9c-.6.6-.8 1.2-.8 2s.3 1.5.8 2c.6.6 1.2.8 2 .8s1.4-.3 2-.8c.6-.6.9-1.2.9-2 0-.7-.3-1.4-.9-2z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.5s" repeatCount="indefinite"/>
    </path>
    <path d="M-284.2 395.3c-.8 0-1.5.3-2 .8-.6.6-.8 1.2-.8 2s.3 1.5.8 2c.6.6 1.2.8 2 .8s1.5-.3 2-.8c.6-.6.8-1.2.8-2s-.3-1.5-.8-2-1.2-.8-2-.8z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.6s" repeatCount="indefinite"/>
    </path>
    <path  d="M-279.8 388.3c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5s.1-.3.2-.5c.1-.1.3-.2.5-.2s.4.1.5.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.5.2zm0-4.3c-1 0-1.8.4-2.5 1.1-.7.7-1.1 1.5-1.1 2.5s.4 1.8 1.1 2.5c.7.7 1.5 1.1 2.5 1.1s1.8-.4 2.5-1.1c.7-.7 1.1-1.5 1.1-2.5s-.4-1.8-1.1-2.5c-.6-.8-1.5-1.1-2.5-1.1z">
      <animate attributeName="opacity" from="1" to="0" dur="0.8s" begin="0.7s" repeatCount="indefinite"/>
    </path>
  </svg>
    <span className="loading-status">{props.statusText ? props.statusText: 'Loading...'}</span>
  </div>

)