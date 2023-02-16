import MyButton from "@/components/MyBytton";


export default function Home() {

  // 判断环境
  if (typeof window == 'object') {
      console.log(process.env.NEXT_PUBLIC_PUPORT);
  } else {
    console.log(process.env.HOST);
    console.log(process.env.NEXT_PUBLIC_PUPORT);
  }

  return (
    <div>
      <h2>Home</h2>
      <MyButton />
    </div>
  )
}