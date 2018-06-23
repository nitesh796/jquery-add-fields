
var count = 1;
function addAnother(){

  var addAnother = "<p id="+ count +">" +
                      "<input type='text' disabled>&nbsp;" +
                      "<label for='file'>Browse</label>&nbsp;" +
                      "<input type='file' id='file' onchange='fileName(this)'>" +
                      "<select>" +
                        "<option value=''>Select</option>" +
                        "<option value='primary'>Primary</option>" +
                        "<option value='secondary' selected>Secondary</option>" +
                      "</select>" +
                      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:void(0);' onclick='$(this).parent().remove();'>Remove</a>" +
                   "</p>";

  count++;
   $("#addAnother").append(addAnother);
}
