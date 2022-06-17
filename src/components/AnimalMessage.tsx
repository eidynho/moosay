import { useContext } from 'react'
import { AnimalContext } from '../contexts/AnimalContext'
import { MessageContext } from '../contexts/MessageContext'

export function AnimalMessage() {
  const { animal } = useContext(AnimalContext)
  const { message } = useContext(MessageContext)
  const emptyMessage = message.trim() === ''

  const cow = (
    <span>
      &nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;^__^ <br />&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;(oo)\________ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;| <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
    </span>
  )

  const linux = (
    <span>
      &nbsp;&nbsp;&nbsp;\<br />&nbsp;&nbsp;&nbsp;&nbsp;\<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.--.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|o_o |<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|:_/ |<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;\&nbsp;\<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;)<br />&nbsp;&nbsp;&nbsp;&nbsp;/'\_&nbsp;&nbsp;&nbsp;_/`\<br />&nbsp;&nbsp;&nbsp;&nbsp;\___)=(___/
    </span>
  )

  function maxRepeatMessageWall() {
    if (message.length <= 22) {
      return message.length + 1
    } else {
      return 25
    }
  }

  function animalInScreen() {
    if (animal === 'cow') {
      return cow
    }

    if (animal === 'linux') {
      return linux
    }
  }

  return (
    <>
      {
        !emptyMessage ? (
          <div className="py-4 px-8 max-w-xs text-justify">
            <span className="font-mono leading-5 break-words">
              <>
                {'_'.repeat(maxRepeatMessageWall())} <br />
                {message}<br />
                {'-'.repeat(maxRepeatMessageWall())} <br />
                {animalInScreen()}
              </>
            </span>
          </div>
        ) : null
      }
    </>
  )
}