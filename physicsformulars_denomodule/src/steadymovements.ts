export class SteadyMovementFormulars{
    //distance=velocity*time SI(m,s)  DVT_SM Distanve,Velocity,Time _ Steady Motion
    public static getDistanceDVT_SM(velocity:number,time:number){
        return velocity*time}
    public static getVelocityDVT_SM(distance:number,time:number){
        return distance/time}
    public static getTimeDVT_SM(distance:number,velocity:number){
        return distance/velocity}
}