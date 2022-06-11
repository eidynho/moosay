
type ButtonType = {
  content: string
}

export function ButtonComponent({ content }: ButtonType) {

  return (
    <button className="w-2/5 py-4 mx-8 text-zinc-900 bg-yellow-500 hover:bg-yellow-300 rounded-lg transition-colors">{content}</button>
  )
}