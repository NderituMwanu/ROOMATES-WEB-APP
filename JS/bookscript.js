function Roomate(name,gender,hostel,religion,personality){
    this.name = name
    this.gender = gender
    this.hostel = hostel
    this.religion = religion
    this.personality = personality

    
}



// males living in madaraka hostel
var mike =  new Roomate ("Mike Muthui","male","madaraka","christian","extroverted")
var john =  new Roomate  ("John Omondi","male","madaraka","christian","introverted")
var abdul = new Roomate  ("Abdul Karim","male","madaraka","muslim","extroverted")
var hassan=  new Roomate ("Hassan Abdul","male","madaraka","muslim","introverted")
var akshay = new Roomate ("Akshay Kumar","male","madaraka","hindu","extroverted")
var salim = new Roomate ("Salim Khan","male","madaraka","hindu ","introverted")
var reuben = new Roomate ("Reuben Kamau","male","madaraka","others","extroverted")
var ben = new Roomate ("Benson Kalume","male","madaraka","others","introverted")

// ladies living in madaraka hostel
var Joan = new Roomate ("Joan Kago","female","madaraka","christian","extroverted")
var ann = new Roomate ("Ann Maro","female","madaraka","christian","introverted")
var cat = new Roomate ("Catherine Kabuku","madaraka","ngara","others","extroverted")
var jane = new Roomate ("Jane Njeri","female","madaraka","others","extroverted")
var priya = new Roomate  ("Priyanka Copra","female","madaraka","hindu","extroverted")
var devika = new Roomate("Devika Kappor","female","madaraka","hindu","introverted")
var halima = new Roomate  ("Halima Mchesi","female","madaraka","muslim","introverted")
var mwana = new Roomate  ("Mwanaharusi Mtondoo","female","madaraka","muslim","extroverted")


// ladies in topol1
var vero = new Roomate ("Veonicah Waadhi","female","topoli","christian","extroverted")
var liz = new Roomate ("Elizabeth Cheptoo","female","topoli","christian","introverted")
var pila = new Roomate ("Pilla Ribo","highway","topoli","others","extroverted")
var ruth = new Roomate ("Ruth Bet","female","topoli","others","extroverted")
var riya = new Roomate  ("Riya Dissit","female","topoli","hindu","extroverted")
var anika = new Roomate("Anika Singh","female","topoli","hindu","introverted")
var adara = new Roomate  ("Adara liya","female","topoli","muslim","introverted")
var abida = new Roomate  ("Abida bila","female","topoli`","muslim","extroverted")

// ladies in metropolitant
var abi = new Roomate ("Abigail Wendo","female","metropolitan","christian","extroverted")
var barb = new Roomate ("Barbara Akinyi","female","metropolitan","christian","introverted")
var daisy = new Roomate ("Daisy wino","highway","metropolitan","others","extroverted")
var ruth = new Roomate ("Ruth Bet","female","metropolitan","others","introverted")
var chaaya = new Roomate  ("Chaaya  Bhavani","female","metropolitan","hindu","extroverted")
var binita = new Roomate("Binita Akara","female","metropolitan","hindu","introverted")
var akan = new Roomate  ("Akan Ani","female","metropolitan","muslim","introverted")
var asma = new Roomate  ("Asma Iya","female","metropolitan","muslim","extroverted")


// men in highway
var oliver =  new Roomate ("Oliver Penge","male","highway","christian","extroverted")
var george =  new Roomate  ("George Okech","male","highway","christian","introverted")
var adal = new Roomate  ("Adal Afren","male","highway","muslim","extroverted")
var asad=  new Roomate ("Asad Malik","male","highway","muslim","introverted")
var arush = new Roomate ("Arush Palint","male","highway","hindu","extroverted")
var aditya = new Roomate ("Aditya Piya","male","highway","hindu ","introverted")
var harry = new Roomate ("Harry Skim","male","highway","others","extroverted")
var noah = new Roomate ("Noah Aseko","male","highway","others","introverted")

// men in ngaramen
var aron =  new Roomate ("Aaron Mwadthi","male","ngara men","christian","extroverted")
var abel =  new Roomate  ("Abel Kirui ","male","ngara men","christian","introverted")
var  ayan = new Roomate  ("Ayan Masudi","male","ngara men","muslim","extroverted")
var aqib=  new Roomate ("Aqib Hassan ","male","ngara men","muslim","introverted")
var vihan = new Roomate ("Vihaan Panaam","male","ngara men","hindu","extroverted")
var sai = new Roomate ("Sai Singh","male","ngara men","hindu ","introverted")
var jacob = new Roomate ("Jacob Mutua","male","ngara men","others","extroverted")
var tom = new Roomate ("Thomas Akai","male","ngara men","others","introverted")

// males in qwetu
var oscar =  new Roomate ("Oscar Rio","male","qwetu","christian","extroverted")
var william =  new Roomate  ("William Keith ","male","qwetu","christian","introverted")
var abdi = new Roomate  ("Abdi Abdalla","male","qwetu","muslim","extroverted")
var hazil=  new Roomate ("Hazil kareem ","male","qwetu","muslim","introverted")
var dinesh = new Roomate ("Dinesh Dhir","male","qwetu","hindu","extroverted")
var harsh = new Roomate ("Harsh Kim","male","qwetu","hindu ","introverted")
var james = new Roomate ("James Awodth","male","qwetu","others","extroverted")
var leo = new Roomate ("Leo Arap Samoei","male","qwetu","others","introverted")

// ladies in qwetu
var maggy = new Roomate ("Margaret Achieng","female","qwetu","christian","extroverted")
var neema = new Roomate ("Neema Njoshoa","female","qwetu","christian","introverted")
var grace = new Roomate ("Grace Wanjiku","highway","qwetu","others","extroverted")
var claire = new Roomate ("Claire Kamanda","female","qwetu","others","extroverted")
var anya= new Roomate  ("Anya Tripoli","female","qwetu","hindu","extroverted")
var amara = new Roomate("Amara Malia","female","qwetu","hindu","introverted")
var nima = new Roomate  ("Adara Nisha","female","qwetu","muslim","introverted")
var rabab = new Roomate  ("Rabab Raida","female","qwetu","muslim","extroverted")






Roomate.prototype.getName = function(){
    return this.name
}
Roomate.prototype.getGender = function(){
    return this.gender
}
Roomate.prototype.getHostel = function(){
    return this.hostel
}
Roomate.prototype.getReligion = function(){
    return this.religion
}

function mine(){
   

   
       
        var mail = "myroomate@gmail.com";
         
         var genders = document.getElementById("selectorgender").value ;
         var hostels = document.getElementById("selectorhostel").value ;
         var religions = document.getElementById("selectorreligion").value ;
         var personality = document.getElementById("selectorpersonality").value
  

    // male makadara hostel conditions
     
      
     
     if (genders === "male" && hostels === "madaraka" && religions === "christian" &&  personality ==="extroverted"){
         $("#show").html(" <li> Reccomended Roomate;" + mike.getName() + "<br>" +"Contact At; " + mail +"</li>")
         $("#show").css('background-color','green')
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "christian" &&  personality === "introverted"){
        $("#show").html(" <li> you can stay with " + john.getName() +  "<br>" +"Contact At; " + mail +  "</li>")
        $("#show").css('background-color','green')
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "muslim" &&  personality === "extroverted"){
        $("#show").html(" <li> you can stay with " + abdul.getName() +  "<br>" +"Contact At; " + mail + "</li>")
        $("#show").css('background-color','green')
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "muslim" &&  personality === "introverted"){
        $("#show").html(" <li> you can stay with " + hassan.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "hindu" &&  personality === "extroverted"){
        $("#show").html(" <li> you can stay with " +akshay.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
    }
    
    else if( genders === "male" && hostels === "madaraka" && religions === "hindu" &&  personality === "intoverted"){
        $("#show").html(" <li> you can stay with " +salim.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "others" &&  personality === "extroverted"){
        $("#show").html(" <li> you can stay with " +reuben.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
       
    }
    else if( genders === "male" && hostels === "madaraka" && religions === "others" &&  personality === "introverted"){
        $("#show").html(" <li> you can stay with " +ben.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
        
    }


    // female makadara conditions

else if( genders === "female" && hostels === "madaraka" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +Joan.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "madaraka" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +ann.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "madaraka" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +halima.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "madaraka" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +mwana.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "madaraka" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +priya.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "female" && hostels === "madaraka" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " +devika.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "female" && hostels === "madaraka" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +jane.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "female" && hostels === "madaraka" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +cat.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
   
//   female topoli conditions 
   
else if( genders === "female" && hostels === "topoli" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + vero.getName() +  "<br>" +"Contact At; " + mail +"</li>")
        $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "topoli" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +liz.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "topoli" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +abida.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    }
else if( genders === "female" && hostels === "topoli" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +adara.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "topoli" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +riya.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "female" && hostels === "topoli" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " +anika.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "female" && hostels === "topoli" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +adara.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "female" && hostels === "topoli" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +abida.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
   
// female metropolitant
 
else if( genders === "female" && hostels === "metropolitan" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +abi.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +barb.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
   
}
else if( genders === "female" && hostels === "metropolitan" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +asma.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +akan.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +chaaya.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " +binita.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +daisy.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "metropolitan" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +ruth.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if (genders === "female" && hostels === "highway" ){
    $("#show").html(" <li> please pick another hostel,highway is a male hostel </li>")
    $("#show").css('background-color','green')
    
}
else if (genders === "female" && hostels === "ngaram" ){
    $("#show").html(" <li> please pick another hostel,Ngara Men is a male hostel </li>")
    $("#show").css('background-color','green')
    
}
   
   
//   males in highway 
   
if (genders == "male" && hostels == "highway" && religions == "christian" &&  personality == "extroverted"){
    $("#show").html(" <li> you can stay with " +oliver.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "male" && hostels === "highway" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +george.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "highway" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +adal.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "highway" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +asad.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "highway" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +arush.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "highway" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").append(" <li> you can stay with " +aditya.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "male" && hostels === "highway" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +harry.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
   
}
else if( genders === "male" && hostels === "highway" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +noah.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if (genders === "male" && hostels === "metropolitan" ){
    $("#show").html(" <li>please pick another hostel,Metropolitan is a female hostel </li>")
    $("#show").css('background-color','green')
}
else if (genders === "male" && hostels === "tropoli" ){
    $("#show").html(" <li>please pick another hostel,Tripoli is a female hostel </li>")
    $("#show").css('background-color','green')
}

//    men in ngaramen
   
else if( genders === "male" && hostels === "ngaram" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +aron.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "ngaram" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +abel.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "ngaram" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + ayan.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "ngaram" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +aqib.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "ngaram" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + vihan.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "male" && hostels === "ngaram" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " + sai.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}

else if( genders === "male" && hostels === "ngaram" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + jacob.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "male" && hostels === "ngaram" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " + tom.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}  
   
   
// men in qwetu  
   
else if( genders === "male" && hostels === "qwetu" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + oscar.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +william.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + abdi.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " + hazil.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + dinesh.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " + harsh.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + james.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "male" && hostels === "qwetu" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " + leo.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
} 
   
// ladies in qwetu hostel
   
else if( genders === "female" && hostels === "qwetu" && religions === "christian" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + maggy.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "female" && hostels === "qwetu" && religions === "christian" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " + neema.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "qwetu" && religions === "muslim" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + rabab.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "qwetu" && religions === "muslim" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " +nima.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "qwetu" && religions === "hindu" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " + anya.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
}
else if( genders === "female" && hostels === "qwetu" && religions === "hindu" &&  personality === "intoverted"){
    $("#show").html(" <li> you can stay with " + amara.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    ls
}
else if( genders === "female" && hostels === "qwetu" && religions === "others" &&  personality === "extroverted"){
    $("#show").html(" <li> you can stay with " +noah.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
    
}
else if( genders === "female" && hostels === "qwetu" && religions === "others" &&  personality === "introverted"){
    $("#show").html(" <li> you can stay with " + grace.getName() +  "<br>" +"Contact At; " + mail +"</li>")
    $("#show").css('background-color','green')
   
}
else{
    $("#show").html(" No match found since "+ hostels +" is not a " + genders + " hostel");
    $("#show").css('background-color','red');
}
event.preventDefault();
}






