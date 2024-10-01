export const Inputfield=({label, type ,value, placeholder, onChange}:{
    label: string,
    type: string,
    placeholder: string,
    value: string,
    onChange:(value: string)=>void
})=>{
    return <div>
        <div className="mt-4  rounded-md">{label}</div>
        <input className="w-full text-gray-400 border border-gray-300 px-2 py-2 rounded my-2" value={value} type={type} placeholder={placeholder} onChange={(e)=>{
            onChange(e.target.value)
        }}></input>
        
    </div>
}