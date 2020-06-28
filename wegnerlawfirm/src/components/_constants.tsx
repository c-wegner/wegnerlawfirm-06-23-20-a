export const screenSize={
    sm:'576px',
    md:'768px',
    lg:'992px',
    xl:'1200px',
    getStringFromScreenSize:function(sz:string):number{
        return parseInt(sz.substring(0, sz.length - 2))
    }
}