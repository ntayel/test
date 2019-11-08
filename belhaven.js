$(document).ready(function () {
    if ($('a[aria-label="My Account"]').length > 0 && $(".elcn-application-link").length > 0) {
        var accountName = $('a[aria-label="My Account"]').text();
        var campusTXT = $(".elcn-application-link").text();
        var name=GetCampusName(campusTXT);

        ReplaceURL(name)
    }  

    function GetCampusName(campusTXT){
        var campus="";   
        if(campusTXT.toLowerCase().indexOf("hartfield") >= 0) campus="Hartfield";
        if(campusTXT.toLowerCase().indexOf("chattanooga") >= 0) campus="Chattanooga";
        if(campusTXT.toLowerCase().indexOf("dalton") >= 0) campus="Dalton";
        if(campusTXT.toLowerCase().indexOf("educateu") >= 0) campus="EducateU";
        if(campusTXT.toLowerCase().indexOf("scholars") >= 0) campus="HighScholars";
        if(campusTXT.toLowerCase().indexOf("academy") >= 0) campus="JacksonAcademy";
        if(campusTXT.toLowerCase().indexOf("adultand") >= 0) campus="Jackson-AdultandGraduate";
        if(campusTXT.toLowerCase().indexOf("traditional") >= 0) campus="Jackson-TraditionalUndergraduate";
        if(campusTXT.toLowerCase().indexOf("alliance") >= 0) campus="12TeacherAlliance(KTA)";
        if(campusTXT.toLowerCase().indexOf("madison") >= 0) campus="MadisonCampus";
        if(campusTXT.toLowerCase().indexOf("online") >= 0) campus="OnlineCampus";
        if(campusTXT.toLowerCase().indexOf("srusa") >= 0) campus="SRUSA"; 
        if(campusTXT.toLowerCase().indexOf("potter") >= 0) campus="ThePottersSchoolOnline";
        if(campusTXT.toLowerCase().indexOf("wozu") >= 0) campus="WozU";
        return campus;
       }

       function ReplaceURL(campusName){
        var currentURL=window.location.href ;
        location.replace(currentURL.substring(0,currentURL.length-1)+"?Application=ThankYou"+campusName);
    }

});
