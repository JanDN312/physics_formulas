export class EnergyFormulars{
    //energy=mass*gravityacceleration*height SI(kg,m,s) EMH = Energy,Mass,Height
    public static getEnergyEMH_PotentialEnergy(mass:number, height:number){
        return mass*9.89665*height}
    public static getMassEMH_PotentialEnergy(height:number, energy:number){
        return energy/(height*9.80665)}
    public static getHeightEMH_PotentialEnergy(mass:number, energy:number){
        return energy/(mass*9.80665)}

    //energy=0.5*mass*velocity^2 SI(kg,m,s) EMV = Energy,Mass,Velocity
    public static getEnergyEMV_KineticEnergy(mass:number, velocity:number){
        return 0.5*mass*(velocity**2)}
    public static getMassEMV_KineticEnergy(energy:number, velocity:number){
        return energy*2/(velocity**2)}
    public static getVelocityEMV_KineticEnergy(mass:number, energy:number){
        return (2*energy/mass)**0.5
    }
    }
