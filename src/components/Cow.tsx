import { useContext } from 'react'
import { MessageContext } from '../contexts/MessageContext'

export function Cow() {
  const { message } = useContext(MessageContext)
  const emptyMessage = message.trim() === ''

  function maxRepeatMessageWall() {
    if (message.length <= 22) {
      return message.length + 1
    } else {
      return 29
    }
  }

  return (
    <>
    {
      !emptyMessage ? (
        <div className="py-4 px-8 max-w-xs text-justify">
          <span className="font-mono leading-5 break-words">
            {'_'.repeat(maxRepeatMessageWall())} <br />
            {message}<br />
            {'-'.repeat(maxRepeatMessageWall())} <br />
            &nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;^__^ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;(oo)\________ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;| <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
          </span>
        </div>
      ) : null
    }
      
    </>
  )
}