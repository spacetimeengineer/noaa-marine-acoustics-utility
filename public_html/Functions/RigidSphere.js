/* 
 * Software Name:
 * Fuild Sphere Solution Grapher
 * Description:
 * Sound Scattering from a Fluid Sphere by Victor C. Anderson; The fluid sphere solution was used to build these funtions.
 * 
 * Acoustician:  Mike Jech
 * Software Engineer: Michael.C Ryan
 * 
 * Rules:
 * 1)Write a comment for every single line. Do this for the sake of future developers and maintainability.
 * 2)Attempt to write out variable name in in a way which references them descriptivly if possible.
 * 3)Equipt every function with a Description:, Example:, and Status: above its declaration. With this, attempt to standardize messages as much as possible.
 * 4)Keep gui functions separate from computation functions.
 * 5)Attempt to keep functions organized if possible.
 */

/*
 * Program Begin
 */

//Initialize graph options.
var acousticScatteringForARigidSphereOptions;
//Initialize graph object.
var acousticScatteringForARigidSphereChart;
//Initialize data array object.
var acousticScatteringForARigidSphereData = new Array();
//    
var radius;
//
var waveAmplitude;
//
var angularVelocity;
// 
var angularFrequency;

//Initialize the values needed for gui setup.
init();

/*
 * Program End
 */

/*
 * Description:
 * Starts up the web tool and initializes its global objects.
 * Example:
 * Not applicable. This is the main function.
 * Status:
 * Function is not stable.
 * Could use some improvements.
 */
function init()
{
    //Initialize graph options.
    acousticScatteringForARigidSphereOptions = {title: "", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Frequency (kHz)'}, vAxis:{title: ''}};
    //Initialize graph object.
    acousticScatteringForARigidSphereChart;
    //Initialize data array object.
    acousticScatteringForARigidSphereData = new Array();
    //    
    radius=1;
    //
    waveAmplitude=1;
    //
    angularVelocity=1;
    //
    angularFrequency=1;
    //Loads the line chart library....I think.
    google.load("visualization", "1", {packages:["corechart"]});
    //Callback functions?  not really sure what they are but they are required in order to plot.
    google.setOnLoadCallback(plotAcousticScatteringForARigidSphereChart);
}

/*
 * Description:
 * Generates the factorial of argument.
 * Example:
 * Not applicable. This is a graphing function.
 * Status:
 * Function is stable.
 * Could use some improvements.
 */
function plotAcousticScatteringForARigidSphereChart()
{
        //Lables curves and axes.
        acousticScatteringForARigidSphereData = google.visualization.arrayToDataTable([["","Target Strength (dB)"],[0,0]]);
	//Manipulate chart by HTML element.
        acousticScatteringForARigidSphereGraph = new google.visualization.LineChart(document.getElementById('acousticScatteringForARigidSphereChart'));
        //Draws data with preset options.
        acousticScatteringForARigidSphereGraph.draw(acousticScatteringForARigidSphereData, acousticScatteringForARigidSphereOptions);
}

/*
 * Description:
 * Generates the factorial of argument.
 * Example:
 * getFactorial(15); 
 * returns 1307674368000
 * Status:
 * Function is stable.
 */
function getFactorial(n)
{
        //
        var factorial=1;
        //
        for (var i = n; i>1; i--)
        {
                //
                factorial=i*factorial;  
        }
        //
        return factorial;
}

/*
 * Description:
 * Generates gamma function value... unfortuneatly with a integer argument only.
 * Example:
 * getGamma(9); 
 * returns 40320
 * Status:
 * Function is stable.
 * Could use the improvement of taking in any integer or non integer complex number.
 */
function getGamma(n)
{       
        //
        return getFactorial(n-1);
}

/*
 * Description:
 * Generates a Hankels expansion value, a(n+1/2,k) from a specified order and argument.
 * Example:
 * getHankelsExpansion(3,5); 
 * returns 10.5
 * Function is stable.
 * Could be checked once more just in case.
 */
function getHankelsExpansion(n,k)
{
        //
        return getFactorial(n+k)/(Math.pow(2,k)*getFactorial(k)*getFactorial(n-k));
}

/*
 * Description:
 * Generates the sphereical bessel function j(n,z) value from a specified order and fractional argument.
 * Example:
 * getSphericalBesselFunctionJ(3,5); 
 * returns 0.22982061816429603
 * Status:
 * Function is stable.
 * Could be checked once more just in case.
 */
function getSphericalBesselFunctionJ(order, z)
{
        //
        var J;
        //
        var sum1 = 0;
        //
        for (var k=0; k<=order/2; k++)
        {   
            //
            sum1 = sum1 + Math.pow(-1,k)*getHankelsExpansion(order,2*k)/(Math.pow(z,2*k+1));
        }
        //
        sum1 = sum1*Math.sin(z-Math.PI*order*0.5);
        //
        var sum2 = 0;
        //
        for (var k=0; k<=((order-1)/2); k++)
        {
            //
            sum2 = sum2 + Math.pow(-1,k)*getHankelsExpansion(order,2*k+1)/(Math.pow(z,2*k+2));
        }
        //
        sum2 = sum2*Math.cos(z-Math.PI*order*0.5);
        //
        J = sum1+sum2;
        //    
        return J;
}

/*
 * Description:
 * Generates the sphereical bessel function y(n,z) value from a specified order and fractional argument.
 * Example:
 * getSphericalBesselFunctionY(3,5); 
 * returns -0.015442909912994178
 * Status:
 * Function is stable.
 * Could be checked once more just in case.
 */
function getSphericalBesselFunctionY(order, z)
{
        //
        var Y;
        //
        var sum1 = 0;
        //
        for (var k=0; k<=order/2; k++)
        {
            sum1 = sum1 + Math.pow(-1,k)*getHankelsExpansion(order,2*k)/(Math.pow(z,2*k+1));
        }
        //
        sum1 = sum1*-1*Math.cos(z-Math.PI*order/2);
        //
        var sum2 = 0;
        //
        for (var k=0; k<=((order-1)/2); k++)
        {
            //   
            sum2 = sum2 + Math.pow(-1,k)*getHankelsExpansion(order,2*k+1)/(Math.pow(z,2*k+2));
        }
        //
        sum2 = sum2*Math.sin(z-Math.PI*order/2);
        //
        Y = sum1+sum2;
        //
        return Y;
}

/*
 * Description:
 * Generates the scientific document specified value a(m,kr) as a(order,z).
 * Example:
 * getAlpha(2,2);
 * returns 0.6886292569713578
 * Status:
 * Function is stable.
 * Could be checked once more just in case.
 */
function getCoefficientAlpha(order, z)
{
        //
        return order*getSphericalBesselFunctionJ(order-1, z)-(order+1)*getSphericalBesselFunctionJ(order+1, z);
}

/*
 * Description:
 * Generates the scientific document specified value b(m,kr) as b(order,z).
 * Example:
 * getBeta(2,2);
 * returns 3.751875663777129
 * Status:
 * Function is stable.
 * Could be checked once more just in case.
 */
function getCoefficientBeta(order, z)
{
       //  
       return order*getSphericalBesselFunctionY(order-1, z)-(order+1)*getSphericalBesselFunctionY(order+1, z); 
}

/*
 * Description:
 * Generates the scientific document specified value CSubM.
 * Example:
 * getCoefficientC(m);
 * returns ...
 * Status:
 * Funtion is not stable.
 */
function getCSubM(m, angularFrequency, waterWaveVelocity, sphereWaveVelocity)
{
        //
        var g = 0.5;//document.getElementById('sphereDensity').value/document.getElementById('waterDensity').value;
        //
        var h = 0.5;//document.getElementById('sphereWaveVelocity').value/document.getElementById('waterWaveVelocity').value;
        //var angularFrequency = 1;
        //var k = angularFrequency/parseFloat(document.getElementById('sphereWaveVelocity').value);
        //var kPrime = angularFrequency/parseFloat(document.getElementById('waterWaveVelocity').value);
        //
        var k = angularFrequency/sphereWaveVelocity;
        //
        var kPrime = angularFrequency/waterWaveVelocity;        
        //
        var a = 0.0225;//document.getElementById('sphereRadius').value;
        //
        var C=((getCoefficientAlpha(m,kPrime*a)/getCoefficientAlpha(m,k*a))*(getSphericalBesselFunctionY(m,k*a)/getSphericalBesselFunctionJ(m,kPrime*a))-(getCoefficientBeta(m,k*a)/getCoefficientAlpha(m,k*a))*g*h)/((getCoefficientAlpha(m,kPrime*a)/getCoefficientAlpha(m,k*a))*(getSphericalBesselFunctionJ(m,k*a)/getSphericalBesselFunctionJ(m,kPrime*a))-g*h);
        //
        return C;
}

/*
 * Description:
 * Generates the scientific document specified value A(m). This return value is complex. 
 * Example:
 * getCoefficientA(m);
 * returns 
 * Status:
 * Function is not stable.
 */
function getCoefficientA(m)
{
        //
        var A;
        //A = getComplexProduct(getExponentiatedComplexNumber(getComplexNumber(0,-1),m),getComplexDivision(getComplexNumber(2*m+1,0),getComplexNumber(1,getCoefficientC(m,,))));
        A = getComplexProduct(getComplexNumber(-1*waveAmplitude,0),A);
        //
        return A;
}

/*
 * Description:
 * Generates a Legendre function value, P(m,u) as P(order,z) from a specified order and argument.
 * Example:
 * getLegendreFunctionP(4,3); 
 * returns 321
 * Status:
 * Function is stable.  
 * Should test once more just in case.
 */
function getLegendreFunctionP(order,z)
{
        //
        var P;
        //
        var sum= 0;
        //
        for (var k=0; k<=order/2; k++)
        {
            //
            sum = sum + (Math.pow(-1,k)*getFactorial(2*order-2*k)*Math.pow(z,order-2*k))/(getFactorial(k)*getFactorial(order-k)*getFactorial(order-2*k));
        }
        //
        P = Math.pow(2,-order)*sum;
        //
        return P;       
}

/*
 * Description:
 * Formats an array which is designed to simulate a complex number which may be manipulated by the complex number functions in this file.
 * Example:
 * getComplexNumber(3,8);
 * returns [3,8]
 * Status:
 * Function is stable.
 */
function getComplexNumber(real, complex)
{
        //
        return [real, complex];
}

/*
 * Description:
 * Returns the product of two complex numbers.
 * Example:
 * getComplexProduct(getComplexNumber(-56.1,23.8),getComplexNumber(15.8,78.4));
 * returns [-2752.3,-4022.2000000000007]
 * Status:
 * Function is stable.
 */
function getComplexProduct(a,b)
{
        //
        return [a[0]*b[0]-a[1]*b[1], a[0]*b[1]+a[1]*b[0]];
}

/*
 * Description:
 * Returns the complex value of a complex number which has been raised to a given power.
 * Example:
 * getExponentiatedComplexNumber(getComplexNumber(5,-4),3);
 * returns [-115,-236]
 * Status:
 * Function is stable.
 */
function getExponentiatedComplexNumber(complexNumber, power)
{
        //
        var exponentiatedComplexNumber=complexNumber;
        //
        for (var i=0;i<power-1;i++)
        {
                //
                exponentiatedComplexNumber = getComplexProduct(exponentiatedComplexNumber,complexNumber);
        }
        //
        return exponentiatedComplexNumber;
}

/*
 * Description:
 * Returns the complex sum of two complex numbers.
 * Example:
 * getComplexSum(getComplexNumber(-2,3),getComplexNumber(19,4));
 * returns [17,7]
 * Status:
 * Function is stable.
 */
function getComplexSum(a,b)
{
        //
        return [a[0]+b[0],a[1]+b[1]];
}

/*
 * Description:
 * Returns the division of one complex number by another.
 * Example:
 * getComplexDivision([34,-5], [-76,345]);
 * returns [-0.034526966931354715,-0.09094478409628128]
 * Status:
 * Function is stable.
 */
function getComplexDivision(numerator, denominator)
{
        //
        var denominatorConjugate = getComplexNumber(denominator[0],-1*denominator[1]);
        //
        numerator = getComplexProduct(numerator,denominatorConjugate);
        //
        denominator = getComplexProduct(denominator,denominatorConjugate);
        //
        return [numerator[0]/denominator[0],numerator[1]/denominator[0]];
        
}

/*
 * Description:
 * Returns the speed of sound in water.
 * Example:
 * getSeaWaterSpeedOfSound(15, 10, 45);
 * returns 1478.6694570612522
 * Status:
 * Function is stable.
 */
function getSeaWaterSpeedOfSound(degreesCelsius, salinityPartsPerThousand, depthMeters)
{
        //
        var T = degreesCelsius;
        //
        var S = salinityPartsPerThousand;
        //
        var z = depthMeters;
        //
        var a1 = 1448.96;
        //
        var a2 = 4.591;
        //
        var a3 = -5.304*Math.pow(10,-2);
        //
        var a4 = 2.374*Math.pow(10,-4);
        //
        var a5 = 1.304;
        //
        var a6 = 1.63*Math.pow(10,-2);
        //
        var a7 = 1.675*Math.pow(10,-7);
        //
        var a8 = -1.025*Math.pow(10,-2);
        //
        var a9 = -7.139*Math.pow(10,-13);
        //
        var c = a1+a2*T+a3*Math.pow(T,2)+a4*Math.pow(T,3)+a5*(S-35)+a6*z+a7*a3*Math.pow(z,2)+a8*T*(S-35)+a9*T*a3*Math.pow(z,3);
        //
        return c;
}

/*
 * Description:
 * Returns the density of sea water.
 * Example:
 * getSeaWaterDensity(degreesCelsius, salinityPartsPerThousand, depthMeters);
 * returns 
 * Status:
 * Function is not stable.
 * Needs density as an input.
 */
function getSeaWaterDensity(degreesCelsius, salinityPartsPerThousand, depthMeters)
{
        //
        var rho;
        //
        var T = degreesCelsius;
        //
        var S = salinityPartsPerThousand;
        //
        var P = 1/10;
        //
        var h3 = -5.77905E-7;
        //
        var h2 = +1.16092E-4;
        //
        var h1 = +1.43713E-3;
        //
        var h0 = +3.239908;   
        //
        var AW  = h0+(h1+(h2+h3*T)*T)*T;
        //
        var k2 =  5.2787E-8;
        //    
        var k1 = -6.12293E-6;
        //
        var k0 =  +8.50935E-5;   
        //
        var BW  = k0+(k1+k2*T)*T;
        //
        var e4 = -5.155288E-5;
        //
        var e3 = +1.360477E-2;
        //
        var e2 = -2.327105;
        //
        var e1 = +148.4206;
        //
        var e0 = 19652.21;    
        //
        var KW  = e0+(e1+(e2+(e3+e4*T)*T)*T)*T;
        //
        var j0 = 1.91075E-4;
        //
        var i2 = -1.6078E-6;
        //
        var i1 = -1.0981E-5;
        //
        var i0 =  2.2838E-3;
        //
        var SR = Math.sqrt(S);
        //
        var A = AW+(i0+(i1+i2*T)*T+j0*SR)*S; 
        //
        var m2 =  9.1697E-10;
        //
        var m1 = +2.0816E-8;
        //    
        var m0 = -9.9348E-7;
        //    
        var B = BW+(m0+(m1+m2*T)*T)*S;
        //
        var f3 =  -6.1670E-5;
        //
        var f2 =  +1.09987E-2;
        //
        var f1 =  -0.603459;
        //
        var f0 = +54.6746;
        //
        var g2 = -5.3009E-4;
        //
        var g1 = +1.6483E-2;
        //
        var g0 = +7.944E-2;
        //
        var K0 = KW+(f0+(f1+(f2+f3*T)*T)*T+(g0+(g1+g2*T)*T)*SR)*S;      
        //
        var K = K0+(A+B*P)*P;
        //
        var a0 = 999.842594;
        //
        var a1 = 6.793952e-2;
        //
        var a2 = -9.095290e-3;
        //
        var a3 = 1.001685e-4;
        //
        var a4 = -1.120083e-6;
        //
        var a5 = 6.536332e-9;
        //
        var b0 = 8.24493e-1;
        //
        var b1 = -4.0899e-3;
        //
        var b2 = 7.6438e-5;
        //
        var b3 = -8.2467e-7;
        //
        var b4 = 5.3875e-9;
        //
        var c0 = -5.72466e-3;
        //
        var c1 = +1.0227e-4;
        //
        var c2 = -1.6546e-6;
        //
        var d0 = 4.8314e-4;
        //
        rho = a0+(a1+(a2+(a3+(a4+a5*T)*T)*T)*T)*T;
        //
        rho = rho+(b0+(b1+(b2+(b3+b4*T)*T)*T)*T)*S+(c0+(c1+c2*T)*T)*S*Math.sqrt(S)+d0*Math.pow(S,2); 
        //
        rho = rho/(1-P/K);
        //
        return rho;
}

/*
 * Description:
 * Returns the division of one complex number by another.
 * Example:
 * getComplexDivision(numerator, denominator);
 * returns 
 * Status:
 * Function is not stable.
 */
function getFarFieldWaveEquationSolution(angularFrequency, waterWaveVelocity, sphereWaveVelocity)
{      
       //
       var k = angularFrequency/sphereWaveVelocity;
       //
       var a = 0.0225;//document.getElementById('sphereRadius').value;
       //
       var R = 2/(k*a);
       //
       var summation = [0,0];
       //
       var largeNumber=20;
       //
       for (var m = 0; m<largeNumber; m++)
       {
            //
            var numerator = getComplexNumber(Math.pow(-1,m)*(2*m+1),0);
            //
            var denominator = getComplexNumber(1,getCoefficientBeta(m,k*a)/getCoefficientAlpha(m,k*a));
            //
            summation = getComplexSum(summation,getComplexDivision(numerator,denominator));
       }
       //
       R=R*Math.pow(Math.pow(summation[0],2)+Math.pow(summation[1],2),0.5);
       //
       return R;
}

/*
 * Description:
 * Returns the division of one complex number by another.
 * Example:
 * getRigidSphereSolution(lowerBound, upperBound, increment, waterWaveVelocity, sphereWaveVelocity);
 * returns 
 * Status:
 * Function is not stable.
 */
function getRigidSphereSolution(lowerBound, upperBound, increment, waterWaveVelocity, sphereWaveVelocity)
{
    //
    acousticScatteringForARigidSphereData=[];
    //
    acousticScatteringForARigidSphereData.push(["Frequency(kHz)","Target Strength (dB)"]);
    //
    for (var angularFrequency=lowerBound; angularFrequency<upperBound; angularFrequency+=increment)
    {
        //
        acousticScatteringForARigidSphereData.push([parseFloat(angularFrequency),parseFloat(getFarFieldWaveEquationSolution(angularFrequency, waterWaveVelocity, sphereWaveVelocity))]);
    }
    //
    return acousticScatteringForARigidSphereData;
}

/*
 * Description: 
 * Plots the solutions to the chart.
 * Example:
 * Not Applicable: this is a graphing function.
 * Status:
 * Function is stable.
 */
function plotSolutionOnClick()
{
    //
    var lowerBound = parseFloat(document.getElementById('lowerBoundInput').value);
    //
    var upperBound = parseFloat(document.getElementById('upperBoundInput').value);
    //
    var increment = parseFloat(document.getElementById('incrementInput').value);
    //
    var waterWaveVelocity = (document.getElementById('waterWaveVelocity').value); 
    //
    var sphereWaveVelocity = (document.getElementById('sphereWaveVelocity').value);
    //
    acousticScatteringForARigidSphereGraph.draw(google.visualization.arrayToDataTable(getRigidSphereSolution(lowerBound, upperBound, increment, waterWaveVelocity, sphereWaveVelocity)), acousticScatteringForARigidSphereOptions);
}

/*
 * Description: 
 * Calcuates the acoustic properties of the seawater and plots the values in the input fields below the button.
 * Example:
 * Not applicable: This is a graphing function.
 * Status:
 * Function is stable.
 */
function calculateSeaWaterPropertiesOnClick()
{
    //
    if (document.getElementById('temperature').value === "" || document.getElementById('salinity').value === "" || document.getElementById('depth').value === "")
    {
        //Nothing happens if there are missing inputs.
    }
    //
    else
    {
        //
        document.getElementById('waterDensity').value = getSeaWaterDensity(document.getElementById('temperature').value, document.getElementById('salinity').value, document.getElementById('depth').value);
        //
        document.getElementById('waterWaveVelocity').value = getSeaWaterSpeedOfSound(document.getElementById('temperature').value, document.getElementById('salinity').value, document.getElementById('depth').value);
    }
}

/*
 * Description: 
 * Calcuates the acoustic properties of the sphere and plots the values in the input fields below the button.
 * Example:
 * Not Applicable: This is a gui function.
 * Status:
 * Function is stable. 
 * Could use a few improvements.
 */
function calculateSpherePropertiesOnClick()
{
    //
    if(document.getElementById('sphereCompositionSelector').value==="tungstenCarbite")
    {
        //
        document.getElementById('sphereDensity').value = 14900;
        //
        document.getElementById('sphereWaveVelocity').value = 6853;
        //
        document.getElementById('sphereRadius').value = 38.1;
    }
    //
    else if(document.getElementById('sphereCompositionSelector').value==="copper")
    {
        //
        document.getElementById('sphereDensity').value = 8947;
        //
        document.getElementById('sphereWaveVelocity').value = 4760;
        //
        document.getElementById('sphereRadius').value = 38.1;
    }
    //
    else if(document.getElementById('sphereCompositionSelector').value==="aluminium")
    {
        //
        document.getElementById('sphereDensity').value = 2700;
        //
        document.getElementById('sphereWaveVelocity').value = 6260;
        //
        document.getElementById('sphereRadius').value = 38.1;
    }
    //
    else if(document.getElementById('sphereCompositionSelector').value==="stainlessSteel")
    {
        //
        document.getElementById('sphereDensity').value = 7800;
        //
        document.getElementById('sphereWaveVelocity').value = 5610;
        //
        document.getElementById('sphereRadius').value = 38.1;
    }
    //
    else if(document.getElementById('sphereCompositionSelector').value==="userInput")
    {
        //
        document.getElementById('sphereDensity').value = "";
        //
        document.getElementById('sphereWaveVelocity').value = "";
        //
        document.getElementById('sphereRadius').value = ""; 
    }
    //
    else if(document.getElementById('sphereCompositionSelector').value==="chooseMaterial")
    {
        //Nothing happens because nothing is chosen.
    }
}

/*
 * Description: 
 * Upon selection the browser will navigate the user to the selected acoustics tool.
 * Example:
 * Not Applicable: This is a gui function.
 * Status:
 * Function is stable. 
 * Could use a few improvements.
 */
function selectAcousticsToolOnClick()
{
    //
    if(document.getElementById('toolSelector').value==="fluidSphereScattering")
    {
        //
        window.location = "FluidSphere.html";
    }
    //
    else if(document.getElementById('toolSelector').value==="fishBodyScattering")
    {
        //
        window.location = "FishBodyReader.html";
    }
        //
    else if(document.getElementById('toolSelector').value==="rigidSphereScattering")
    {
        //
        window.location = "RigidSphere.html";
    }
    //
    else 
    {

    }
}

