import type {App,Plugin} from 'vue'
type SFCWithInstall<T>=T&Plugin

export const testfun = (a:number,b:number):number=>{
    return a + b
}

export const withInstall=<T>(comp:T)=>{
    (comp as SFCWithInstall<T>).install=(app:App)=>{
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}