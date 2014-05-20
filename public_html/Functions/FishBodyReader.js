/*
 * Software Name:
 * Kirchoff Ray Mode Solution Grapher
 * Description: * 
 * This software is designed to plot solutions to the Kirchoff ray mode solutions. 
 * 
 * Acoustician:  Mike Jech
 * Software Engineer: Michael.C Ryan
 * 
 * Rules:
 * 1)Write a comment for every single line. Do this for the sake of future developers and maintainability.
 * 2)Attempt to write out variable name in in a way which references them if possible.
 * 3)Equipt every function with a Description:, Example:, and Status: above its declaration. With this, attempt to standardize messages as much as possible.
 * 4)Keep gui functions separate from computation functions.
 * 5)Attempt to keep functions organized if possible.
 * 
 */

/*
 * Program Begin
 */

/*
 * Description:
 * Parsing arrays.
 */ 

//
var A = new Array();
//
var B = new Array();
	    
/*
 * Description:
 * Fish body dimension arrays.
 */ 

//
var xfb = new Array();
//
var zufb = new Array();
//
var zlfb = new Array(); 
//
var wfb = new Array();
		
/*
 * Description:
 * Swim bladder dimension arrays.
 */ 

//
var xsb = new Array();
//
var zusb = new Array();
//
var zlsb = new Array();
//
var wsb = new Array();
		
/*
 * Description:
 * Parsing control variables.
 */ 

//
var seperator = new Array();
//
var jfb;
//
var jsb1;
//
var jsb2;
		
/*
 * Description:
 * Fish body scattering meta data.
 */ 

//
var uf = new Array();
//
var vmf = new Array();
//
var vuf = new Array();
//
var vlf = new Array();
//
var maf = new Array();
//
var duf = new Array();
//
var blf = new Array();

/*
 * Description:
 * Swim bladder scattering meta data.
 */ 

//
var dxs = new Array();
//
var dv = new Array();
//
var u = new Array();
//
var vm = new Array();
//
var vu = new Array();
//
var ma = new Array();
//
var du = new Array();
		
/*
 * Description:
 * Graphical data.
 */ 

//
var lateral_data = new Array();
//
var dorsal_data = new Array();
//
var scattering_data = new Array();
		
/*
 * Description:
 * Fish body scattering graph-able meta data.
 */ 


var uf_data = new Array();
//
var vmf_data = new Array();
//
var vuf_data = new Array();
//
var vlf_data = new Array();
//
var maf_data = new Array();
//
var duf_data = new Array();
//
var blf_data = new Array();
		
/*
 * Description:
 * Swim bladder scattering graph-able meta data.
 */  

//
var dxs_data = new Array();
//
var dv_data = new Array();
//
var u_data = new Array();
//
var vm_data = new Array();
//
var vu_data = new Array();
//
var ma_data = new Array();
//
var du_data = new Array();

/*
 * Description:
 * Graph widgets.
 */  

//
var lateral_graph; 
//
var dorsal_graph; 
//
var scattering_graph; 
		
/*
 * Description:
 * Fish body meta data graph objects.
 */     

//
var uf_graph;
//
var vmf_graph;
//
var vuf_graph;
//
var vlf_graph;
//
var maf_graph;
//
var duf_graph;
//
var blf_graph;
		
/*
 * Description:
 * Swim bladder meta data graph objects.
 */

//
var dxs_graph;
//
var dv_graph;
//
var u_graph;
//
var vm_graph;
//
var vu_graph;
//
var ma_graph;
//
var du_graph;
		
/*
 * Description:
 * Option parameters for each graph.
 */		

//
var lateral_options = {title: "Lateral View", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Fish Length ~ cm'}, vAxis:{title: 'Lateral Profile ~ cm'}};
//
var dorsal_options = {title: "Dorsal View", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Fish Length ~ cm'}, vAxis:{title: 'Dorsal Profile ~ cm'}};
//
var scattering_options = {title: "Fish Body & Swim Bladder Scattering", animation:{duration: 3000, easing: 'out'}, hAxis:{title: '( Fish Length ) / ( Scattering Wavelength ) ~ dimensionless'}, vAxis:{title: 'Amplitude ~ dimensionless'}};
		
/*
 * Description:
 * Option parameters for each fish body meta data graph.
 */

//
var uf_options  = {title: "Meta Data ~ uf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'uf ( Index ) ~ dimensionless'}};
//
var vmf_options = {title: "Meta Data ~ vmf ", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'vmf ( Index ) ~ dimensionless'}};
//
var vuf_options = {title: "Meta Data ~ vuf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'vuf ( Index ) ~ dimensionless'}};
//
var vlf_options = {title: "Meta Data ~ vlf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'vlf ( Index ) ~ dimensionless'}};
//
var maf_options = {title: "Meta Data ~ maf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'maf ( Index ) ~ dimensionless'}};
//
var duf_options = {title: "Meta Data ~ duf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'duf ( Index ) ~ dimensionless'}};
//
var blf_options = {title: "Meta Data ~ blf", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'blf ( Index ) ~ dimensionless'}};

/*
 * Description:
 * Option parameters for each swim bladder meta data graph.
 */

//
var dxs_options  = {title: "Meta Data ~ dxs", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'dxs ( Index ) ~ dimensionless'}};
//
var dv_options = {title: "Meta Data ~ dv", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'dv ( Index ) ~ dimensionless'}};
//
var u_options = {title: "Meta Data ~ u", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'u ( Index ) ~ dimensionless'}};
//
var vm_options = {title: "Meta Data ~ vm", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'vm ( Index ) ~ dimensionless'}};
//
var vu_options = {title: "Meta Data ~ vu", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'vu ( Index ) ~ dimensionless'}};
//
var ma_options = {title: "Meta Data ~ ma", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'ma ( Index ) ~ dimensionless'}};
//
var du_options = {title: "Meta Data ~ du", animation:{duration: 3000, easing: 'out'}, hAxis:{title: 'Index ~ dimensionless'}, vAxis:{title: 'du ( Index ) ~ dimensionless'}};

/*
 * Description:
 * User input parameters.
 */

//
var digital_fish_length;
//
var scaled_fish_length;
//
var angle;
//
var minimum_order;
//
var maximum_order;
//
var minimum_khz_frequency;
//
var minimum_hz_frequency;
//
var maximum_khz_frequency;
//
var maximum_hz_frequency;
//
var khz_frequency_increment;
//
var hz_frequency_increment;
//
var frequency_array = new Array();
//
var frequency_array_size;
//
var frequency;
//
var kwater;
//
var cwater;
//
var rhow;
//
var csb;
//
var rhosb;
//
var cfb;
//
var rhofb;

/*
 * Description:
 * Other variables for scattering computations.
 */

//
var snth;
//
var csth;
//
var totlng;
//
var scale_factor;
//
var maxsrs;
//
var missdata;
//
var trnska;
//
var fishbody_real_array = new Array();
//
var fishbody_imaginary_array = new Array();
//
var fishbody_scattering_amplitude = new Array();
//
var fishbody_real_element;
//
var fishbody_imaginary_element;
//
var swimbladder_real_array = new Array();
//
var swimbladder_imaginary_array = new Array();
//
var swimbladder_scattering_amplitude = new Array();
//
var swimbladder_real_element;
//
var swimbladder_imaginary_element;
//
var npts;
//
var g;
//
var h;
//
var refl;
//
var twb;
//
var dpsi;
//
var gfac;
//
var coef;
//
var sbv;
//
var sbLm;
//
var nsb;
//
var eas;
//
var frqtrns;

/*
 * Description:
 * Variable which will write to a file for saving.
 */

//
var csvFile;

//
init();

/*
 * Program End
 */

/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function init()
{
    //Loads the line chart library....I think.
    google.load("visualization", "1", {packages:["corechart"]});
    //Callback functions?  not really sure what they are but they are required in order to plot.
    google.setOnLoadCallback(plot_lateral_view);
    //
    google.setOnLoadCallback(plot_dorsal_view);
    //
    google.setOnLoadCallback(plot_scattering_view);
    //Fish body meta data views.
    google.setOnLoadCallback(plot_uf_view);
    //
    google.setOnLoadCallback(plot_vmf_view);
    //
    google.setOnLoadCallback(plot_vuf_view);
    //
    google.setOnLoadCallback(plot_vlf_view);
    //
    google.setOnLoadCallback(plot_maf_view);
    //
    google.setOnLoadCallback(plot_duf_view);
    //
    google.setOnLoadCallback(plot_blf_view);
    //Swim bladder meta data views.
    google.setOnLoadCallback(plot_dxs_view);
    //
    google.setOnLoadCallback(plot_dv_view);
    //
    google.setOnLoadCallback(plot_u_view);
    //
    google.setOnLoadCallback(plot_vm_view);
    //
    google.setOnLoadCallback(plot_vu_view);
    //
    google.setOnLoadCallback(plot_ma_view);
    //
    google.setOnLoadCallback(plot_du_view);
}

/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function onDownload() 
{
    //
    document.location = 'data:Application/octet-stream,' +encodeURIComponent(writeCSVFile());
}
      
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function writeCSVFile()
{
    //
    var csvFile;
    //
    for (var i=0; i<lateral_data.length; i++)
    {
        //
        csvFile=csvFile+lateral_data[i]+"\r\n";
    }
    //              
    csvFile=csvFile+"\r\n";
    //                    
    for (var i=0; i<dorsal_data.length; i++)
    {
        //
        csvFile=csvFile+dorsal_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //                  
    for (var i=0; i<scattering_data.length; i++)
    {
        //
        csvFile=csvFile+scattering_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<uf_data.length; i++)
    {
        //
        csvFile=csvFile+uf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<vmf_data.length; i++)
    {
        //
        csvFile=csvFile+vmf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<vuf_data.length; i++)
    {
        //
        csvFile=csvFile+vuf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<vlf_data.length; i++)
    {
        //
        csvFile=csvFile+vlf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<maf_data.length; i++)
    {
        //
        csvFile=csvFile+maf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<duf_data.length; i++)
    {
        //
        csvFile=csvFile+duf[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<blf_data.length; i++)
    {
        //
        csvFile=csvFile+blf_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<dxs_data.length; i++)
    {
        //
        csvFile=csvFile+dxs_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<dv_data.length; i++)
    {
        //
        csvFile=csvFile+dv_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<u_data.length; i++)
    {
        //
        csvFile=csvFile+u_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<vm_data.length; i++)
    {
        //
        csvFile=csvFile+vm_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<vu_data.length; i++)
    {
        //
        csvFile=csvFile+vu_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<ma_data.length; i++)
    {
        //
        csvFile=csvFile+ma_data[i]+"\r\n";
    }
    //
    csvFile=csvFile+"\r\n";
    //
    for (var i=0; i<du_data.length; i++)
    {
        //
        csvFile=csvFile+du_data[i]+"\r\n";
    }
    //
    return csvFile;
}

/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function parse_file(contents)
{
    //text field inputs
    digital_fish_length=document.getElementById("digital_fish_length").value;
    //
    scaled_fish_length=document.getElementById("scaled_fish_length").value;
    //
    angle=document.getElementById("angle").value*2.0*Math.PI/360;
    //
    minimum_order=document.getElementById("minimum_order").value;
    //	
    maximum_order=document.getElementById("maximum_order").value;
    //
    minimum_khz_frequency=document.getElementById("minimum_frequency").value;
    //	
    maximum_khz_frequency=document.getElementById("maximum_frequency").value;
    //
    khz_frequency_increment=document.getElementById("frequency_increment_size").value;
    //
    cwater=document.getElementById("cwater").value;
    //
    rhow=document.getElementById("rhow").value;
    //
    csb=document.getElementById("csb").value;
    //
    rhosb=document.getElementById("rhosb").value;
    //
    cfb=document.getElementById("cfb").value;
    //
    rhofb=document.getElementById("rhofb").value;
    //
    totlng=parseFloat(scaled_fish_length/1000);
    //
    scale_factor=parseFloat(scaled_fish_length/digital_fish_length);
    //
    snth=Math.sin(angle);
    //
    csth=Math.cos(angle);
		  
    //Clears data from information parsing arrays.
    A=[];
    //    
    B=[];
    //
    seperator=[];
    //
    lateral_data=[];
    //
    dorsal_data=[];
			
    //Clears data from fish dimension arrays.
    xfb = [];
    //
    zufb = [];
    //
    zlfb = []; 
    //
    wfb = [];
    //
    xsb = [];
    //
    zusb = [];
    //
    zlsb = [];
    //
    wsb = [];

    //Clears data from the fish body scattering meta data GRAPHING arrays.
    uf_data=[];
    //
    vmf_data=[];
    //
    vuf_data=[];
    //
    vlf_data=[];
    //
    maf_data=[];
    //
    duf_data=[];
    //
    blf_data=[];

    //Clears data from the swim bladder meta data GRAPHING arrays.
    dxs_data = [];
    //
    dv_data = [];
    //
    u_data = [];
    //
    vm_data = [];
    //
    vu_data = [];
    //
    ma_data = [];
    //
    du_data = [];
		
    //Clears data from the fish body scattering meta data STORAGE arrays.
    uf = [];
    //
    vmf = [];
    //
    vuf = [];
    //
    vlf = [];
    //
    maf = [];
    //
    duf = [];
    //
    blf = [];
		
    //Clears data from the swim bladder scattering meta data STORAGE arrays.
    dxs = [];
    //
    dv = [];
    //
    u = [];
    //
    vm = [];
    //
    vu = [];
    //
    ma = [];
    //
    du = [];
		
    //Clears data from the frequency and amplitude data arrays.
    fishbody_real_array = [];
    //
    fishbody_imaginary_array = [];
    //
    fishbody_scattering_amplitude = [];
    //
    swimbladder_real_array = [];
    //
    swimbladder_imaginary_array = [];
    //
    swimbladder_scattering_amplitude = [];
    //
    scattering_data = [];
    //
    frequency_array=[];
    //"Six" is chosen because the relevant data in the DAT file only becomes available from the sixth element in "A".
    //This is the weakest link in this software due to its lack of sophistication and should be fixed as soon as possible.
    var index_offset = 6;		
    //Appends each line of the DAT file as a separate element in "A".
    for (var n=0;n<contents.split("\n").length;n++)
    {
        //
        A.push(contents.split("\n")[n]);
    }		
    //last element of A array
    var last_element=A[A.length-1];
    //beginning at the seventh row of the DAT file or equivalently the 6th element of 
    //"A" (which represents relevant numeric data),  the loop turns each element of "A" into sub-arrays which are split by spaces.
    for (var n=index_offset;n<A.length;n++) 
    {	
        //A local array which is a mechanism for storing four-column row or one of numbers
        var local_value_array = new Array();
	//Each element of "A" is split into an array.
        for (var m=0;m<A[n].split(" ").length ;m++)
        {    
            //If the current row is made up of four numeric values then store it into the "local_value_array".
            if (A[n].split(" ")[m]!=="" && isFinite(A[n].split(" ")[m])===true && A[n].split(" ")[m]!==" " && A[n].split(" ")[m]!=="\n" && A[n].split(" ")[m]!=="\r" && A[n].split(" ")[m]!=="\t")
            {	
                //
                local_value_array.push(A[n].split(" ")[m]);
            }	
        }
	//Appends DAT file rows which have exactly four values which are also numeric (These values are what is actually graphed).
        if (local_value_array.length===4 || local_value_array.length===6 || local_value_array.length===1 )
        {
            //
            B.push(local_value_array);
        }
    }	
    //takes out elements of B which are not true separators.
    for (var n=0;n<B.length;n++)
    {
        //
        if (B[n].length===1 && isFinite(B[n][0])===true && B[n][0]!=="\n" && B[n][0]!=="\r" && B[n][0]!=="\t" && B[n][0]!==" ")
        {
            //
            if (B[n+1].length===1)
            {
                //
                B.splice(n,1);
                //
                n=n-1;
            }
        }
    }
    //appends separators
    for (var n=0;n<B.length;n++)
    {
        //
        if (B[n].length===1 && isFinite(B[n][0])===true && B[n][0]!=="\n" && B[n][0]!=="\r" && B[n][0]!=="\t" && B[n][0]!==" ")
        {
            //
            if (B[n+1].length===4 || B[n+1].length===6)
            {
                //
                seperator.push(n);
            }
        }
    }
    //Appends last separator which does not appear in the DAT file.
    seperator.push(B.length); 
    //If we are working with a legacy DAT file which only has four elements of numeric data
    if (B[1].length===4)
    {
	//Appends first lines of graphing array (These are different from the rest of data because they represent labels)
	lateral_data.push(["Length", "Top Fish Body Profile", "Bottom Fish Body Profile","Top Swim Bladder #1 Profile","Bottom Swim Bladder #1 Profile","Top Swim Bladder #2 Profile","Bottom Swim Bladder #2 Profile"]);
	//
        dorsal_data.push(["Length", "Right Fish Body Profile", "Left Fish Body Profile","Right Swim Bladder #1 Profile","Left Swim Bladder #1 Profile","Right Swim Bladder #2 Profile","Left Swim Bladder #2 Profile"]);
        //Collects data between first and second separators.
	for (var n=seperator[0]+1;n<seperator[1];n++)
	{
            //
            lateral_data.push([parseFloat(B[n][0]),parseFloat(B[n][1]),parseFloat(B[n][2]),null,null,null,null]);
            //
            dorsal_data.push([parseFloat(B[n][0]),parseFloat(B[n][3]*0.5),parseFloat(B[n][3]*-0.5),null,null,null,null]);
	}	
        //For first swim-bladder.
	if (seperator.length>=3)
	{
            //Collects data between second and third separators.
            for (var n=seperator[1]+1;n<seperator[2];n++)
            {
                //
		lateral_data.push([parseFloat(B[n][0]),null,null,parseFloat(B[n][1]),parseFloat(B[n][2]),null,null]);
		//
                dorsal_data.push([parseFloat(B[n][0]),null,null,parseFloat(B[n][3]*0.5),parseFloat(B[n][3]*-0.5),null,null]);
            }
	}
        //
        else
	{
            //Removes all unused columns.
            for (var n=0;n<lateral_data.length;n++)
            {
                //
                lateral_data[n].splice(3,2);
                //
                dorsal_data[n].splice(3,2);
            }
	}
	//For second swim-bladder.
	if (seperator.length>=4)
	{
            //Collects data between second and third separators.
            for (var n=seperator[2]+1;n<seperator[3];n++)
            {
                //
		lateral_data.push([parseFloat(B[n][0]),null,null,null,null,parseFloat(B[n][1]),parseFloat(B[n][2])]);
		//
                dorsal_data.push([parseFloat(B[n][0]),null,null,null,null,parseFloat(B[n][3]*0.5),parseFloat(B[n][3]*-0.5)]);
            }
	}
        //
	else 
	{
            //Removes all unused columns.
            for (var n=0;n<lateral_data.length;n++)
            {
                //
		lateral_data[n].splice(-1,1);
		//
                lateral_data[n].splice(-1,1);
		//
                dorsal_data[n].splice(-1,1);
		//
                dorsal_data[n].splice(-1,1);
            }	
	}
    }
    //If we are working with the newer format where each numeric row has six elements.
    else if (B[1].length===6)
    {
	//Appends first lines of graphing array (These are different from the rest of data because they represent labels)
	lateral_data.push(["Length", "Top Fish Body Profile", "Bottom Fish Body Profile","Top Swim Bladder #1 Profile","Bottom Swim Bladder #1 Profile","Top Swim Bladder #2 Profile","Bottom Swim Bladder #2 Profile"]);
	//
        dorsal_data.push(["Length", "Right Fish Body Profile", "Left Fish Body Profile","Right Swim Bladder #1 Profile","Left Swim Bladder #1 Profile","Right Swim Bladder #2 Profile","Left Swim Bladder #2 Profile"]);
	//
        for (var n=seperator[0]+1;n<seperator[1];n++)//check b for element count instead
	{
            //
            lateral_data.push([parseFloat(B[n][0]),parseFloat(B[n][1]),parseFloat(B[n][2]),null,null,null,null]);
            //
            dorsal_data.push([parseFloat(B[n][0]),parseFloat(B[n][4]),parseFloat(B[n][5]),null,null,null,null]);
	}
        //For first swim-bladder.
	if (seperator.length>=3)
	{
            //Collects data between second and third separators.
            for (var n=seperator[1]+1;n<seperator[2];n++)
            {
                //
		lateral_data.push([parseFloat(B[n][0]),null,null,parseFloat(B[n][1]),parseFloat(B[n][2]),null,null]);
                //
                dorsal_data.push([parseFloat(B[n][0]),null,null,parseFloat(B[n][3]*0.5),parseFloat(B[n][3]*-0.5),null,null]);
            }
        }
        //
	else 
	{
            //remove all unused columns
            for (var n=0;n<lateral_data.length;n++)
            {
                //
		lateral_data[n].splice(3,2);
		//
                dorsal_data[n].splice(3,2);
            }
        }
	//For second swim-bladder.
        if (seperator.length>=4)
	{
            //Collects data between second and third separators.
            for (var n=seperator[2]+1;n<seperator[3];n++)
            {
                //
                lateral_data.push([parseFloat(B[n][0]),null,null,null,null,parseFloat(B[n][1]),parseFloat(B[n][2])]);
                //
                dorsal_data.push([parseFloat(B[n][0]),null,null,null,null,parseFloat(B[n][3]*0.5),parseFloat(B[n][3]*-0.5)]);
            }
        }
        //
        else
        {
            //remove all unused columns
            for (var n=0;n<lateral_data.length;n++)
            {
                //
		lateral_data[n].splice(-1,1);
		//
                lateral_data[n].splice(-1,1);
		//
                dorsal_data[n].splice(-1,1);
		//
                dorsal_data[n].splice(-1,1);
            }
	}
    }
    //
    else
    {
	//pass, no file is graphed, however this should never happen.
    }
			
    //Marks the values in B of the index of the separator numbers			
    switch (seperator.length)
    {
        //
	case 0:
	{
            //
            break;
	}
        //
	case 1:
        {
            //
            break;
        }
			
	//In the case that there are no swim bladders present, store information accordingly.
	case 2:
	{
            //
            jfb=parseFloat(B[seperator[0]]);
            //
            for (var n=seperator[0]+1;n<seperator[1];n++)
            {
                //
                xfb.push(parseFloat(B[n][0]));
                //
                zufb.push(parseFloat(B[n][1]));
                //
                zlfb.push(parseFloat(B[n][2]));
                //
                wfb.push(parseFloat(B[n][3]));
            }
            //
            break;
        }
	//In the case that there is one swim bladders, store information accordingly.
	case 3:
	{
            //
            jfb=parseFloat(B[seperator[0]]);
            //
            jsb1=parseFloat(B[seperator[1]]);
            //
            for (var n=seperator[0]+1;n<seperator[1];n++)
            {
                //
		xfb.push(parseFloat(B[n][0]));
		//
                zufb.push(parseFloat(B[n][1]));
		//
                zlfb.push(parseFloat(B[n][2]));
		//
                wfb.push(parseFloat(B[n][3]));
            }
            //
            for (var n=seperator[1]+1;n<seperator[2];n++)
            {
                //
                xsb.push(parseFloat(B[n][0]));
                //
                zusb.push(parseFloat(B[n][1]));
                //
                zlsb.push(parseFloat(B[n][2]));
                //
                wsb.push(parseFloat(B[n][3]));
            }
            //
            break;
        }
	//In the case that there are two swim bladders, store information accordingly.
	case 4:
        {
            //
            jfb=parseFloat(B[seperator[0]]);
            //
            jsb1=parseFloat(B[seperator[1]]);
            //
            jsb2=parseFloat(B[seperator[2]]);
            //
            for (var n=seperator[0]+1;n<seperator[1];n++)
            {
                //
		xfb.push(parseFloat(B[n][0]));
		//
                zufb.push(parseFloat(B[n][1]));
		//
                zlfb.push(parseFloat(B[n][2]));
		//
                wfb.push(parseFloat(B[n][3]));
            }
            //
            for (var n=seperator[1]+1;n<seperator[2];n++)
            {
                //
		xsb.push(parseFloat(B[n][0]));
		//
                zusb.push(parseFloat(B[n][1]));
		//
                zlsb.push(parseFloat(B[n][2]));
		//
                wsb.push(parseFloat(B[n][3]));
            }
            //
            for (var n=seperator[2]+1;n<seperator[3];n++)
            {
                //
		xsb.push(parseFloat(B[n][0]));
		//
                zusb.push(parseFloat(B[n][1]));
		//
                zlsb.push(parseFloat(B[n][2]));
		//
                wsb.push(parseFloat(B[n][3]));
            }
            break;
        }
    }
    //Calculates the meta data which is associated with the Fish body scattering.
    for (var n=0;n<zufb.length;n++)
    {
        //
	var z0=scale_factor*(zufb[n]-zlfb[n])/2000;
	//
        var z1=scale_factor*(zufb[n+1]-zlfb[n+1])/2000;
	//
        var y0=scale_factor*wfb[n]/2000;
	//
        var y1=scale_factor*wfb[n+1]/2000;
	//
        var dx=scale_factor*(xfb[n+1]-xfb[n])/1000;
        //
        var xm=scale_factor*(xfb[n]/1000+dx/2);
	//
        var duz=scale_factor*(zufb[n+1]-zufb[n])/1000;
	//
        var zm=scale_factor*(zufb[n]+zlfb[n]+zufb[n+1]+zlfb[n+1])/4000;
	//
        var zus=scale_factor*(zufb[n]+zufb[n+1])/2000;
	//
        var zls=scale_factor*(zlfb[n]+zlfb[n+1])/2000;
	//
        var dlz=scale_factor*(zlfb[n+1]-zlfb[n])/1000;
	//
        uf.push(xm*snth-zm*csth);
	//
        vmf.push(xm*csth+zm*snth);
	//
        vuf.push(xm*csth+zus*snth);
	//
        vlf.push(xm*csth+zls*snth);
	//
        maf.push((y0+y1)/2);
	//
        duf.push(dx*snth);
	//So that there is no division by zero.
	if (duf[n]!==0)
	{
            //
            blf.push((dx*csth+dlz*snth)/(duf[n]));
	}
        //
	else
	{
            //
            blf.push(0);
	}
    }
    //Re-adjusts the graph legend for the meta data arrays.
    uf_data.push(["Index","uf"]);
    //
    vmf_data.push(["Index","vmf"]);
    //
    vuf_data.push(["Index","vuf"]);
    //
    vlf_data.push(["Index","vlf"]);
    //
    maf_data.push(["Index","maf"]);
    //
    duf_data.push(["Index","duf"]);
    //
    blf_data.push(["Index","blf"]);
    //Appends meta data to the graphs
    for (var n=0;n<zufb.length;n++)//check b for element count instead
    {
        //
	uf_data.push([n,uf[n]]);
	//
        vmf_data.push([n,vmf[n]]);
        //
        vuf_data.push([n,vuf[n]]);
        //
        vlf_data.push([n,vlf[n]]);
	//
        maf_data.push([n,maf[n]]);
	//
        duf_data.push([n,duf[n]]);
	//
        blf_data.push([n,blf[n]]);
    }	
			
    //Relevant values needed for the fish body scattering calculations.
    npts = 0;
    //
    g = rhofb/rhow;
    //
    h = cfb/cwater;
    //
    refl = (g*h-1)/(g*h+1);
    //
    twb = 1-(Math.pow(refl,2));
    //
    dpsi = 2*(1-h);
    //
    gfac = 0.98;
    //
    coef = gfac*refl/(2*Math.sqrt(Math.PI));
    //Defines the range of the frequency spectrum and its incremental value.
    hz_frequency_increment = 1000*khz_frequency_increment;
    //
    minimum_hz_frequency = 1000*minimum_khz_frequency;
    //
    maximum_hz_frequency = 1000*maximum_khz_frequency;
    //
    frequency_array_size = (maximum_hz_frequency-minimum_hz_frequency)/hz_frequency_increment;
    //Builds frequency array.
    for (var n=0;n<frequency_array_size+1;n++)
    {
        //
	frequency_array.push(n*hz_frequency_increment+minimum_hz_frequency);
    }
    //Calculates the fish body scattering amplitudes.
    for (var n=0;n<frequency_array.length;n++)
    {
        //
	frequency = frequency_array[n];
	//
        kwater = 2*Math.PI*frequency/cwater;
        //
	fishbody_real_element = 0;
	//
        fishbody_imaginary_element = 0;
	//
        for (var m=0;m<jfb;m++)
	{
            //
            var sncu = 1;
            //
            var sncl = 1;
            //
            var x = Math.abs(kwater*vuf[m]);
            //
            var ka = Math.abs(kwater*maf[m]);
            //
            var ampx = coef*Math.sqrt(ka);
            //
            var psip = -1*Math.PI*x/(2*(x+0.4));
            //
            var ang1 = 2*kwater*vuf[m];
            //
            var ang2 = -1*2*kwater*vuf[m]+2*(kwater/h)*(vuf[m]-vlf[m])+psip;
            //
            var kbu = kwater*(vuf[m+1]-vuf[m]);
            //
            var kbl = (kwater/h)*(vlf[m+1]-vlf[m]);
            //
            if (Math.abs(kbu)>0.1)
            {
                //
                sncu = Math.sin(kbu)/kbu;
            }
            //
            if (Math.abs(kbl)>0.1)
            {
                //
		sncl = Math.sin(kbl)/kbl;
            }
            //
            var real_value = -1*ampx*(Math.sin(ang1)*sncu+twb*Math.sin(ang2)*sncl)*duf[m];	
            //
            var imaginary_value = -1*ampx*(Math.cos(ang1)*sncu-twb*Math.cos(ang2)*sncl)*duf[m];
            //
            fishbody_real_element=(fishbody_real_element+real_value/totlng);
            //
            fishbody_imaginary_element=(fishbody_imaginary_element+imaginary_value/totlng);	
	}	
	//
        fishbody_real_array.push(fishbody_real_element);  
	//	
        fishbody_imaginary_array.push(fishbody_imaginary_element);    
	//
        fishbody_scattering_amplitude.push(Math.sqrt(Math.pow(fishbody_real_element,2)+Math.pow(fishbody_imaginary_element,2)));
    }
    //Calculates the swim bladder scattering amplitudes.
    g = rhosb/rhow;
    //
    h = csb/cwater;
    //
    refl = (g*h-1)/(g*h+1);
    //
    sbv=0;
    //
    sbL=xsb[xsb.length-1]-xsb[0];
    //
    sbLm=sbL/1000;
    //
    coef = refl/(2*Math.sqrt(Math.PI));
    //
    for (var n=0;n<zusb.length-1;n++)
    {
        //
	var z0=scale_factor*(zusb[n]-zlsb[n])/2000;
	//
        var z1=scale_factor*(zusb[n+1]-zlsb[n+1])/2000;
	//
        var y0=scale_factor*wsb[n]/2000;
	//
        var y1=scale_factor*wsb[n+1]/2000;
	//
        var dx=scale_factor*(xsb[n+1]-xsb[n])/1000;
	//
        dxs.push(dx);
	//
        var xm=scale_factor*(xsb[n]/1000+dx/2);
	//
        var duz=scale_factor*(zusb[n+1]-zusb[n])/1000;
	//
        var zm=scale_factor*(zusb[n]+zlsb[n]+zusb[n+1]+zlsb[n+1])/4000;
	//
        var zus=scale_factor*(zusb[n]+zusb[n+1])/2000;
	//
        var yb=(y1-y0)/dx;
        //
        var zb=(z1-z0)/dx;
        //
        dv.push(Math.PI*Math.abs(z0*y0*dx+(zb*y0+yb*z0)*dx*dx/2+zb*yb*dx*dx*dx/3));
	//
        sbv=sbv+dv[n];
	//
        u.push(xm*snth-zm*csth);
	//
        vm.push(xm*csth+zm*snth);
	//
        vu.push(xm*csth+zus*snth);
	//
        ma.push((y0+y1)/2);
	//
        du.push(dx*snth);	
    }
    //
    dxs_data.push(["Index","dxs"]);
    //
    dv_data.push(["Index","dv"]);
    //
    u_data.push(["Index","u"]);
    //
    vm_data.push(["Index","vm"]);
    //
    vu_data.push(["Index","vu"]);
    //
    ma_data.push(["Index","ma"]);
    //
    du_data.push(["Index","du"]);
    //
    for (var n=0;n<dxs.length;n++)
    {	
        //
	dxs_data.push([n,dxs[n]]);
	//
        dv_data.push([n,dv[n]]);
	//
        u_data.push([n,u[n]]);
	//
        vm_data.push([n,vm[n]]);
	//
        vu_data.push([n,vu[n]]);
	//
        ma_data.push([n,ma[n]]);
	//
        du_data.push([n,du[n]]);
    }
    //Relevant values needed for the swim bladder scattering calculations.
    eas=Math.sqrt(sbv/(Math.PI*scale_factor*sbLm));
    //
    trnska=0.2;
    //
    maxsrs=0;
    //
    missdata=-9999;
    //
    frqtrns=parseFloat(trnska*cwater/(2*Math.PI*eas));
    //
    kamin=2*Math.PI*minimum_hz_frequency*eas/cwater;
    //
    kamax=2*Math.PI*maximum_hz_frequency*eas/cwater;
    //
    swimbladder_real_element = 0;
    //
    swimbladder_imaginary_element = 0;	
    //
    if (frqtrns > 1000)
    {
        //
        frqtrns=frqtrns-(frqtrns%1000);
    }
    //
    if (frqtrns > maximum_hz_frequency)
    {
        //
	frqtrns=maximum_hz_frequency;
    }
    //
    for (var n=0;n<frequency_array.length;n++)
    {
        //
	var frequency=parseFloat(frequency_array[n]);
	//
        var kwater = parseFloat(2*Math.PI*frequency/cwater);
	//
        var kcyl=parseFloat(2*Math.PI*frequency/csb);
	//
        var radius=parseFloat(eas);
	//
        var x=kwater*radius;
	//
        var x1=kcyl*radius;
	//
        swimbladder_real_element = 0;
	//
        swimbladder_imaginary_element = 0;
	//The Bessel function portion of the frequency range.
	if (frequency < frqtrns)
        {
            var djw=parseFloat(-1*BesselJ1(x));
            //
            var djcyl=parseFloat(-1*BesselJ1(x1));
            //
            var dyw=parseFloat(-1*BesselY1(x));
            //
            var numtr=parseFloat((djcyl*BesselY0(x))-(g*h*dyw*BesselJ0(x1)));
            //
            var denmtr=parseFloat((djcyl*BesselJ0(x))-(g*h*djw*BesselJ0(x)));
            //
            var csct=parseFloat(numtr/denmtr);
            //
            var neum=parseFloat(1.0);
            //
            var real_value=parseFloat(neum*csct/((1+(Math.pow(csct,2)))*totlng*Math.PI));
            //
            var imaginary_value=parseFloat(neum/((1+(Math.pow(csct,2)))*totlng*Math.PI));
            //
            for (var m=0;m<zusb.length-1;m++)
            {
                //
		var mkz=parseFloat(kwater*vm[m]);
		//
                var csmk=parseFloat(Math.cos(2*mkz));
		//
                var snmk=parseFloat(Math.sin(2*mkz));
		//
                swimbladder_real_element=swimbladder_real_element+((real_value*csmk+imaginary_value*snmk)*dxs[m]);
		//
                swimbladder_imaginary_element=swimbladder_imaginary_element+((imaginary_value*csmk-real_value*snmk)*dxs[m]);
            }
            //
            swimbladder_real_array.push(swimbladder_real_element);  
            //
            swimbladder_imaginary_array.push(swimbladder_imaginary_element);    
            //
            swimbladder_scattering_amplitude.push(Math.sqrt(Math.pow(swimbladder_real_element,2)+Math.pow(swimbladder_imaginary_element,2)));
	}
	//The Kirchoff function portion of the frequency range.
	if (frequency > frqtrns)
	{
            //
            swimbladder_real_element = 0;
            //
            swimbladder_imaginary_element = 0;
            //
            for (var m=0;m<zusb.length-1;m++)
            {
		var sncu=1;
		//
                var kawtr=parseFloat(kwater*ma[m]);
		//
                var kbu=parseFloat(kwater*(vu[m+1]-vu[m]));
		//
                if (Math.abs(kbu)>0.1)
		{
                    //
                    sncu = parseFloat(Math.sin(kbu)/kbu);
		}
		//
                var asb=parseFloat(kawtr/(kawtr+0.083));
		//
                var psip=parseFloat(kawtr/(40+kawtr)-1.05);
		//
                var real_value=parseFloat((sncu*asb*Math.sqrt(kawtr+1)*dxs[m]*coef/totlng)*Math.cos(kwater*2*vu[m]+psip+Math.PI/2));
		//
                var imaginary_value=parseFloat(-1*(sncu*asb*Math.sqrt(kawtr+1)*dxs[m]*coef/totlng)*Math.sin(kwater*2*vu[m]+psip+Math.PI/2));
		//
                swimbladder_real_element=swimbladder_real_element+real_value;
		//
                swimbladder_imaginary_element=swimbladder_imaginary_element+imaginary_value;	
            }
            //
            swimbladder_real_array.push(swimbladder_real_element);  
            //
            swimbladder_imaginary_array.push(swimbladder_imaginary_element);    
            //
            swimbladder_scattering_amplitude.push(Math.sqrt(Math.pow(swimbladder_real_element,2)+Math.pow(swimbladder_imaginary_element,2)));
	}
    }	
    //Appends the first element of the scattering GRAPHING array (which requires strings and labels).
    scattering_data.push(["(Fish Length) / (Scattering Wavelength)","Fish Body Scattering Amplitude", "Swim Bladder Scattering Amplitude", "Total Scattering Amplitude"]);
    //
    for (var n=0;n<frequency_array.length;n++)
    {	
        //
	scattering_data.push([scaled_fish_length*frequency_array[n]/cwater, fishbody_scattering_amplitude[n], swimbladder_scattering_amplitude[n], Math.sqrt(Math.pow((fishbody_real_array[n]+swimbladder_real_array[n]),2)+Math.pow((fishbody_imaginary_array[n]+swimbladder_imaginary_array[n]),2))]);
    }
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_lateral_view()
{
    //
    lateral_data = google.visualization.arrayToDataTable([["Length", "Top Fish Body Profile", "Bottom Fish Body Profile","Top Swim Bladder #1 Profile","Bottom Swim Bladder #1 Profile","Top Swim Bladder #2 Profile","Bottom Swim Bladder #2 Profile"],[0,0,0,0,0,0,0]]);
    //
    lateral_graph = new google.visualization.LineChart(document.getElementById('lateral_chart'));
    //  
    lateral_graph.draw(lateral_data, lateral_options);
}

/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_dorsal_view() 
{
    //
    dorsal_data = google.visualization.arrayToDataTable([["Length", "Right Fish Body Profile", "Left Fish Body Profile","Right Swim Bladder #1 Profile","Left Swim Bladder #1 Profile","Right Swim Bladder #2 Profile","Left Swim Bladder #2 Profile"],[0,0,0,0,0,0,0]]);
    //
    dorsal_graph = new google.visualization.LineChart(document.getElementById('dorsal_chart'));
    //  
    dorsal_graph.draw(dorsal_data, dorsal_options);
}  
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_scattering_view() 
{
    //
    scattering_data = google.visualization.arrayToDataTable([["Length","Fish Body Scattering Amplitude", "Swim Bladder Scattering Amplitude", "Total Scatternig Amplitude"],[0,0,0,0]]);
    //    
    scattering_graph = new google.visualization.LineChart(document.getElementById('scattering_chart'));
    //    
    scattering_graph.draw(scattering_data, scattering_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_uf_view() 
{
    //
    uf_data = google.visualization.arrayToDataTable([["Index", "uf"],[0,0]]);
    //
    uf_graph = new google.visualization.LineChart(document.getElementById('uf_chart'));
    //
    uf_graph.draw(uf_data, uf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_vmf_view() 
{
    //
    vmf_data = google.visualization.arrayToDataTable([["Index", "vmf"],[0,0]]);
    //
    vmf_graph = new google.visualization.LineChart(document.getElementById('vmf_chart'));
    //    
    vmf_graph.draw(vmf_data, vmf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_vuf_view() 
{
    //
    vuf_data = google.visualization.arrayToDataTable([["Index", "vuf"],[0,0]]);
    //
    vuf_graph = new google.visualization.LineChart(document.getElementById('vuf_chart'));
    //  
    vuf_graph.draw(vuf_data, vuf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_vlf_view() 
{
    //
    vlf_data = google.visualization.arrayToDataTable([["Index", "vlf"],[0,0]]);
    //
    vlf_graph = new google.visualization.LineChart(document.getElementById('vlf_chart'));
    //    
    vlf_graph.draw(vlf_data, vlf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_maf_view() 
{
    //
    maf_data = google.visualization.arrayToDataTable([["Index", "maf"],[0,0]]);
    //
    maf_graph = new google.visualization.LineChart(document.getElementById('maf_chart'));
    //
    maf_graph.draw(maf_data, maf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_duf_view() 
{
    //
    duf_data = google.visualization.arrayToDataTable([["Index", "duf"],[0,0]]);
    //
    duf_graph = new google.visualization.LineChart(document.getElementById('duf_chart'));
    //    
    duf_graph.draw(duf_data, duf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_blf_view() 
{
    //
    blf_data = google.visualization.arrayToDataTable([["Index", "blf"],[0,0]]);
    //
    blf_graph = new google.visualization.LineChart(document.getElementById('blf_chart'));
    //
    blf_graph.draw(blf_data, blf_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_dxs_view() 
{
    //
    dxs_data = google.visualization.arrayToDataTable([["Index", "dxs"],[0,0]]);
    //
    dxs_graph = new google.visualization.LineChart(document.getElementById('dxs_chart'));
    //
    dxs_graph.draw(dxs_data, dxs_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_dv_view() 
{
    //
    dv_data = google.visualization.arrayToDataTable([["Index", "dv"],[0,0]]);
    //    
    dv_graph = new google.visualization.LineChart(document.getElementById('dv_chart'));
    //    
    dv_graph.draw(dv_data, dv_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_u_view() 
{
    //
    u_data = google.visualization.arrayToDataTable([["Index", "u"],[0,0]]);
    //
    u_graph = new google.visualization.LineChart(document.getElementById('u_chart'));
    //  
    u_graph.draw(u_data, u_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_vm_view() 
{
    //
    vm_data = google.visualization.arrayToDataTable([["Index", "vm"],[0,0]]);
    //	
    vm_graph = new google.visualization.LineChart(document.getElementById('vm_chart'));
    // 
    vm_graph.draw(vm_data, vm_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_vu_view() 
{
    //
    vu_data = google.visualization.arrayToDataTable([["Index", "vu"],[0,0]]);
    //
    vu_graph = new google.visualization.LineChart(document.getElementById('vu_chart'));
    //
    vu_graph.draw(vu_data, vu_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_ma_view() 
{
    //
    ma_data = google.visualization.arrayToDataTable([["Index", "ma"],[0,0]]);
    //	
    ma_graph = new google.visualization.LineChart(document.getElementById('ma_chart'));
    // 
    ma_graph.draw(ma_data, ma_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function plot_du_view() 
{
    //
    du_data = google.visualization.arrayToDataTable([["Index", "du"],[0,0]]);
    //  
    du_graph = new google.visualization.LineChart(document.getElementById('du_chart'));
    //  
    du_graph.draw(du_data, du_options);
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function readSingleFile(evt) 
{
    //
    var file = evt.target.files[0]; 
    //
    if (file) 
    {	
        //
      	var r = new FileReader();
        //
        r.onload = function(e) 
	{ 
            //
            var contents = e.target.result;
            //
            parse_file(contents);
					
            //Draws up the dorsal & lateral profile views.
	    lateral_graph.draw(google.visualization.arrayToDataTable(lateral_data), lateral_options);
	    //
            dorsal_graph.draw(google.visualization.arrayToDataTable(dorsal_data), dorsal_options);
					
	    //Draws up the scattering amplitudes VS fish length over wavelength view.
	    scattering_graph.draw(google.visualization.arrayToDataTable(scattering_data), scattering_options);
					
            //Draws up the fish body meta data view. 
            uf_graph.draw(google.visualization.arrayToDataTable(uf_data), uf_options);
            //
            vmf_graph.draw(google.visualization.arrayToDataTable(vmf_data), vmf_options);
            //
            vuf_graph.draw(google.visualization.arrayToDataTable(vuf_data), vuf_options);
            //
            vlf_graph.draw(google.visualization.arrayToDataTable(vlf_data), vlf_options);
            //
            maf_graph.draw(google.visualization.arrayToDataTable(maf_data), maf_options);
            //
            duf_graph.draw(google.visualization.arrayToDataTable(duf_data), duf_options);
            //
            blf_graph.draw(google.visualization.arrayToDataTable(blf_data), blf_options);
					
	    //Draws up swim bladder meta data view.
            dxs_graph.draw(google.visualization.arrayToDataTable(dxs_data), dxs_options);
	    //
            dv_graph.draw(google.visualization.arrayToDataTable(dv_data), dv_options);
	    //
            u_graph.draw(google.visualization.arrayToDataTable(u_data), u_options);
	    //
            vm_graph.draw(google.visualization.arrayToDataTable(vm_data), vm_options);
	    //
            vu_graph.draw(google.visualization.arrayToDataTable(vu_data), vu_options);
	    //
            ma_graph.draw(google.visualization.arrayToDataTable(ma_data), ma_options);
            //
            du_graph.draw(google.visualization.arrayToDataTable(du_data), du_options);
        };
        //
	r.readAsText(file);
    } 
			
    //Send an an alert if unsuccessful.
    else 
    { 
        //
        alert("The file you requested is not compadible with this graphing software");
    }
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function BesselJ0(x) 
{
    var ax,z,xx,y,ans,ans1,ans2;
    ax = Math.abs(x);
    if (ax < 8.0) 
    {
	y = x * x;
	ans1 = 57568490574.0 + y * (-13362590354.0 + y * (651619640.7 + y * (-11214424.18 + y * (77392.33017 + y * (-184.9052456)))));
	ans2 = 57568490411.0 + y * (1029532985.0 + y * (9494680.718 + y * (59272.64853 + y * (267.8532712 + y * 1.0))));
	ans = ans1 / ans2;
    } 
    else 
    {
        z = 8.0 / ax;
	y = z * z;
	xx = ax - 0.785398164;
	ans1 = 1.0 + y * (-0.1098628627e-2 + y * (0.2734510407e-4 + y * (-0.2073370639e-5 + y * 0.2093887211e-6)));
	ans2 = -0.1562499995e-1 + y * (0.1430488765e-3 + y * (-0.6911147651e-5 + y * (0.7621095161e-6 - y * 0.934935152e-7)));
	ans = Math.sqrt(0.636619772 / ax) * (Math.cos(xx) * ans1 - z * Math.sin(xx) * ans2);
    }
    return ans;
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function BesselJ1(x) 
{
    var ax,z,xx,y,ans,ans1,ans2;
    ax = Math.abs(x);
    if (ax < 8.0) 
    {
	y=Math.pow(y,2);
	ans1 = x*(72362614232.0+y*(-7895059235.0+y*(242396853.1+y*(-2972611.439+y*(15704.48260+y*(-30.16036606))))));
	ans2 = 144725228442.0+y*(2300535178.0+y*(18583304.74+y*(99447.43394+y*(376.9991397+y*1.0))));
	ans = ans1/ans2;
    } 
    else 
    {
	z=8.0/ax;
	y=Math.pow(z,2);
	xx=ax-2.356194491;
	ans1=1.0+y*(0.183105e-2+y*(-0.3516396496e-4+y*(0.2457520174e-5+y*(-0.240337019e-6))));
	ans2=0.04687499995+y*(-0.2002690873e-3+y*(0.8449199096e-5+y*(-0.88228987e-6+y*0.105787412e-6)));
	ans=Math.sqrt(0.636619772/ax)*(Math.cos(xx)*ans1-z*Math.sin(xx)*ans2);
	if (x < 0.0) ans = -ans;
    }
    return ans;	
}
		
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function BesselY0(x) 
{
    var z, xx, y, ans, ans1, ans2;
    if (x < 8.0)  
    {
	y=Math.pow(x,2);
	ans1 = -2957821389.0+y*(7062834065.0+y*(-512359803.6+y*(10879881.29+y*(-86327.92757+y*228.4622733))));
	ans2 = 40076544269.0+y*(745249964.8+y*(7189466.438+y*(47447.26470+y*(226.1030244+y*1.0))));
	ans = (ans1/ans2)+0.636619772*BesselJ0(x)*Math.log(x);
    } 
    else 
    {
	z=8.0/x;
	y=Math.pow(z,2);
	xx=x-0.785398164;
	ans1 = 1.0+y*(-0.1098628627e-2+y*(0.2734510407e-4+y*(-0.2073370639e-5+y*0.2093887211e-6)));
	ans2 = -0.1562499995e-1+y*(0.1430488765e-3+y*(-0.6911147651e-5+y*(0.7621095161e-6+y*(-0.934945152e-7))));
	ans = Math.sqrt(0.636619772/x)*(Math.sin(xx)+ans1+z*Math.cos(xx)*ans2);
    }
    return ans;
}
	
/*
 * Description:
 * 
 * Example:
 * 
 * Status:
 * Function is not stable.
 */
function BesselY1(x) 
{
    var z, xx, y, ans, ans1, ans2;
    if (x < 8.0) 
    { 
	y=x*x;
        ans1 = x*(-0.4900604943e13+y*(0.1275274390e13+y*(-0.5153438139e11+y*(0.7349264551e9+y*(-0.4237922726e7+y*0.8511937935e4)))));
	ans2 = 0.2499580570e14+y*(0.4244419664e12+y*(0.3733650367e10+y*(0.2245904002e8+y*(0.1020426050e6+y*(0.3549632885e3+y)))));
	ans = (ans1/ans2)+0.636619772*(BesselJ1(x)*Math.log(x)-1.0/x);
    } 
    else
    {
        z=8.0/x;
	y=z*z;
	xx=x-2.356194491;
	ans1=1.0+y*(0.183105e-2+y*(-0.3516396496e-4+y*(0.2457520174e-5+y*(-0.240337019e-6))));
	ans2=0.04687499995+y*(-0.202690873e-3+y*(0.8449199096e-5+y*(-0.88228987e-6+y*0.10578e-6)));
	ans=Math.sqrt(0.636619772/x)*(Math.sin(xx)*ans1+z*Math.cos(xx)*ans2);
    }
    return ans;
}
		

