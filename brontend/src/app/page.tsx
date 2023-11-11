import MyButton from '@/components/my-button/MyButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        Welcome, Alex!
      </div>
      <div>
        Something (maybe some description of the project or something else, I need copywriters)
      </div>
      <MyButton size='large'>
        Let's start
      </MyButton>
    </main>
  )
}
