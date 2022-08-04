export default function Browser() {
  return (
    <div className="relative w-[12rem] rounded-md bg-slate-900 ">
      <div className="absolute top-0 left-0 h-8 w-full rounded-t-md bg-slate-800">
        <div className="flex h-full space-x-2 p-2">
          <div className="h-4 w-4 rounded-full bg-red-400"></div>
          <div className="h-4 w-4 rounded-full bg-primary-400"></div>
          <div className="h-4 w-4 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div className="h-40 w-full rounded-md bg-slate-600">
        <div className="space-y-2 p-4 pt-6">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                style={{
                  // between 20 and 90
                  width: `${Math.floor(Math.random() * 70 + 20)}%`,
                }}
                className="h-2 rounded-full bg-slate-900"
              ></div>
            ))}
        </div>
      </div>
    </div>
  )
}
