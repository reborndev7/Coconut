import { useParams } from "react-router"

export default function User() {
  const { userid } = useParams()
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <h3 className="w-full text-3xl font-bold text-center">User: {userid} </h3>
        </div>
      </div>
    </div>
  )
}
