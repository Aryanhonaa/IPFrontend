import { create } from 'zustand'
import axios from 'axios';

const useZustand = create((set) => ({
    idleColor: 'gray', // Default color for idle state

    
    ip: '',
    loading: false,
    err:'',
    data:null,
    setData:(data)=>set({data}),
    setIp: (ip) => set({ ip }),
    sendIP:async (ip)=>{
        try{
            set({loading:true})
            console.log("IP",ip);
            const res=await  axios.post(`http://localhost:5000/api/reputation/check/${ip}`)
            if(!res){
                set({loading:false})
                set({err:"Data Not Found"})
            }else{
                set({loading:false})
                set({data:res.data})
            }
            
        }catch(err){
            set({loading:false,err:err.message})
        }  
    }
}))



export default useZustand;