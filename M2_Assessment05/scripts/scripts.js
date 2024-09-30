/* holidays --
JAN - 1(New Years Day ), 6(Three Kings' Day), 15(Martin Luther King Jr. Day)
FEB - 2(Groundhog Day), 14(Valentine's Day), 19(Presidents' Day)
MAR - 4(Casimir Pulaski Day), 17(St. Patrick's Day), 31(Easter)
APR - 13(Thomas Jefferson's Birthday), 15(Tax Day)
MAY - 5(Cinco de Mayo), 12(Mother's Day), 27(Memorial Day)
JUN- 16(Father's Day), 19(Juneteenth), 
JUL - 4(Independence Day), 7(Muharram)
AUG - 4(Barack Obama Day), 19(National Aviation Day), 26(Woman's Equality Day)
SEP - 2(Labor Day), 11(Patriot Day), 22(Fall Equinox)
OCT - 9(Leif Erikson Day), 14(Columbus Day), 14(Indigenous People's Day), 31(Halloween)
NOV - 5(Election Day), 11(Veteran's Day), 28(Thanksgiving)
DEC - 7(Peal Harbor Remembrance Day), 21(Winter Solstice), 25(Christmas), 31(New Years Eve)
*/

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let text = '';
let holiday = '';
for (i = 0; i < months.length; i++) {
     x = months[i] + '<br>';
     switch (months[i]) {
          case "January":
               holiday = `1st &emsp; New Year's Day <br>
                         6th  &emsp; Three Kings Day <br>
                         15th &emsp; Martin Luther King Jr. Day <br>`;
               break;
          case "February":
               holiday = `2nd &emsp; Groundhog Day <br>
                         14th  &emsp; Valentine's Day <br>
                         19th &emsp; Presidents' Day<br>`;
               break;
          case "March":
               holiday = `4th &emsp; Casimir Pulaski Day <br>
                         17th  &emsp; St. Patrick's Day <br>
                         31st &emsp; Easter <br>`;
               break;
          case "April":
               holiday = `1st &emsp; April Fool's Day <br>
                         15th  &emsp; Tax Day <br>`;
               break;
          case "May":
               holiday = `5th &emsp; Cinco de Mayo <br>
                         12th  &emsp; Mother's Day <br>
                         27th &emsp; Memorial Day <br>`;
               break;
          case "June":
               holiday = `16th &emsp; Father's Day <br>
                         19th  &emsp; Juneteenth <br>`;
               break;
          case "July":
               holiday = `4th &emsp; Independence Day <br>
                         7th  &emsp; Muharram <br>`;
               break;
          case "August":
               holiday = `4th &emsp; Barack Obama Day (Illinois) <br>
                         19th  &emsp; National Aviation Day <br>
                         26th &emsp; Women's Equality Day <br>`;
               break;
          case "September":
               holiday = `2th &emsp; Labor Day <br>
                         11th  &emsp; Patriot's Day <br>`;
               break;
          case "October":
               holiday = `9th &emsp; Leif Erikson Day <br>
                         14th  &emsp; Indigenous People's Day <br>
                         31st &emsp; Halloween <br>`;
               break;
          case "November":
               holiday = `5th &emsp; Election Day <br>
                         11th  &emsp; St. Veteran's Day <br>
                         28th &emsp; Thanksgiving <br>`;
               break;
          case "December":
               holiday = `7th &emsp; Pearl Harbor Remembrance Day <br>
                         24th  &emsp; Christmas Eve <br>
                         25th &emsp; Christmas<br>
                         31st &emsp; New Year's Eve <br>`;
               break;
          default:
               holiday = "error";

     }
     text += '<h2>' + x + "</h2>" + holiday + '<br>'; // if it is just text = x each element is going to get rewritten until the last element "december" will be the only left.
}

document.getElementById("show").innerHTML = text;

