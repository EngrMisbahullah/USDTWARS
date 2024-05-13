"use client"


export function CheckboxDemo(props:{
  des:string
}) {
  return (
    <div className="flex items-center space-x-1">
      <label
        htmlFor="terms"
        // className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
     <div className="text-center text-slate-300 text-base font-normal ">{props.des}</div>
      </label>
    </div>
  )
}
