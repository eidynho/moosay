import { useContext } from 'react'
import { AnimalContext } from '../contexts/AnimalContext'
import { MessageContext } from '../contexts/MessageContext'
import { cow, bat, bear, tux } from './AnimalsASCII'

export function AnimalMessage() {
  const { animal } = useContext(AnimalContext)
  const { message } = useContext(MessageContext)
  const emptyMessage = message.trim() === ''

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

    if (animal === 'bat') {
      return bat
    }

    if (animal === 'bear') {
      return bear
    }

    if (animal === 'tux') {
      return tux
    }
  }

  return (
    <>
      {
        !emptyMessage ? (
          <div className="py-4 px-8 max-w-xs text-justify">
            <span className="font-mono leading-none break-words">
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