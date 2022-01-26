export class PowerFormulars{
    //Power=mass*acceleration SI(Newton,m,s)---- general formular ---Power,Mass,Acceleration_ForceFormulars
    public static getPowerPMA_FF(mass:number, acceleration:number){
        return mass*acceleration}
    public static getMassPMA_FF(power:number, acceleration:number){
        return power/acceleration}
    public static getAccelerationPMA_FF(power:number, mass:number){
        return power/mass}
}