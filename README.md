# Physical Formular Calculator(Power, Energie, Movements)

This module allows you to calculate every variable of given formulars. You simply chose the function for the missing value and type in the inputvalues in SI-units. Every function shows which parameters are necessary to compute the outcome. Also every variable of the underlaying formular is short-included in the name. 


## Usage via Commandline
```
deno run --allow-net https://deno.land/x/physics_formulars/test.ts
```

## Steady Motion Formulars - Usage Example
```
import {SteadyMovementFormulars as smf} from "./src/steadymovements.ts"

var time=10
var velocity=10
var distance=100

console.log("Steady Motion")
console.log(" ")
console.log("Acceleration")
console.log(smf.getDistanceDVT_SM(velocity, time))
console.log("Time")
console.log(smf.getTimeDVT_SM(distance, velocity))
console.log("Velocity")
console.log(smf.getVelocityDVT_SM(distance, time))
```


## Accelerated Motion Formulars - Usage Example
```
import {AcceleratedMovementFormulars as amf} from "./src/acceleratedmovements.ts"

var distance= 1000          //in meter
var acceleration= 20        //in m/s^2
var time= 10                //in s

console.log("Accelerated Motion")
console.log(" ")
console.log("Acceleration:")
console.log(amf.getAccelerationDAT_AM(distance, time))
console.log("Distance:")
console.log(amf.getDistanceDAT_AM(acceleration, time))
console.log("Time:")
console.log(amf.getTimeDAT_AM(distance,acceleration))
```


## Power Formulars - Usage Example
```
import {PowerFormulars as pm} from "./src/forceformulars.ts"

var power=20                //in newton
var mass=10                 //in kilogramm
var acceleration=2          //in newton/kilogramm

console.log("General Power Formular")
console.log(" ")
console.log("Acceleration:")
console.log(pm.getAccelerationPMA_FF(power, mass))
console.log("Mass:")
console.log(pm.getMassPMA_FF(power, acceleration))
console.log("Power")
console.log(pm.getPowerPMA_FF(mass, acceleration))
```


## Energy Formulars - Usage Example
```
import {EnergyFormulars as ef} from "./src/energyformulars.ts"

var energy= 300             //in joule
var height= 14              //in meter
var mass= 12                //in kilogramm

console.log("Potential Energy")
console.log(" ")
console.log("Energy:")
console.log(ef.getEnergyEMH_PotentialEnergy(mass, height))
console.log("Height")
console.log(ef.getHeightEMH_PotentialEnergy(mass, energy))
console.log("Mass")
console.log(ef.getMassEMH_PotentialEnergy(height, energy))
```