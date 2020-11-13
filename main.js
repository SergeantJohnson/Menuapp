
var food=["dish1","dish2","dish3","dish4"];
function get_menu_list() {
    
    food.push(document.getElementById("foodz").value);
    food.sort();
    document.getElementById("menu_list").innerHTML=food;
    
}