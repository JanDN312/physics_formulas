export class AcceleratedMovementFormulars{
    //distance=0,5*acceleration*time^2 SI(m,s) DAT_AM Distance,Acceleration,Time _ Accelerated Motion
    public static getDistanceDAT_AM(acceleration:number, time:number){
        return 0.5*acceleration*(time**2)}
    public static getAccelerationDAT_AM(distance:number,time:number){
        return 2*distance/(time**2)}
    public static getTimeDAT_AM(distance:number, acceleration:number){
        return 2*distance/acceleration}

    //distance=(velocity^2)/(2*acceleration) SI(m,s) DVA_AM Distance,Velocity,Acceleration _ Accelerated Motion
    public static getDistanceDVA_AM(velocity:number, acceleration:number){
        return (velocity**2)/(2*acceleration)}
    public static getVelocityDVA_AM(distance:number, acceleration:number){
        return (2*distance*acceleration)**(0.5)}
    public static getAccelerationDVA_AM(distance:number, velocity:number){
        return(velocity**2)/(2*distance)}
    
    //distance=0,5*gravityacceleration* time^2 SI(m,s) DT_AM Distance,Time _ Accelerated Motion
    public static  getFallDistanceDT_AM(time:number){
        return 0.5*9.80665*(time**2)}
    public static  getFallTimeDT_AM(distance:number){
        return (2*distance/9.80665)**0.5}

    //distance=(velocity^2)/(2*gravityacceleration) SI(m,s) DV_AM Distance,Velocity _ Accelerated Motion
    public static getFallDistanceDV_AM(velocity:number){
        return (velocity**2)/(2*9.80665)}
    public static getFallVelocityDV_AM(distance:number){
        return (2*distance*9.80665)**0.5}

    //velocity=acceleration*time SI(m,s) VAT_SM Velocity,Acceleration,Time _ Accelerated Motion
    public static getAccelerationVAT_AM(velocity:number, time:number) {
        return velocity/time}
    public static getVelocityVAT_AM(acceleration:number, time:number){
        return acceleration*time}
    public static getTimeVAT_AM(velocity:number, acceleration:number){
        return velocity/acceleration}
}