




if( localStorage.getItem("teams") == null )
{
    localStorage.setItem("teams" , "[]");
}
function addTeam()
{
   var newTeam =  document.getElementById("inp").value;
   let teams = localStorage.getItem("teams");
   teams = JSON.parse(teams)
   if(teams.includes(newTeam))
   {
    alert("team already present")
    return;
   }
   teams.push(newTeam);
   localStorage.setItem("teams" , JSON.stringify(teams));
   window.location.reload();
}
function displayAllTeams()
{
   let ol = document.getElementById("teams");
   let teams = localStorage.getItem("teams");
   teams = JSON.parse(teams);

   for (let i = 0; i < teams.length; i++) 
   {
        let newLI = document.createElement("li");
        newLI.innerText = teams[i];
        ol.append(newLI); 
   }   
}
displayAllTeams()