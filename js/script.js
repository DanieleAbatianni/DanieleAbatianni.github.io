// function textFind(keyword) {
//     if(keyword) {
//       var content = $("p").text();
//       console.log(content)
//       var searchText = new RegExp(keyword, "ig");
//       var matches = content.match(searchText);       
      
//       if(matches) {
//         $("p").html(content.replace(searchText, function(match){
//           return "<mark>"+match+"</mark>";
//         }));
//       }else {
//         $('.highlight').removeClass('highlight');
//       }
//     }else{
//       $('.highlight').removeClass('highlight');
//     }
// }

// $(document).ready(function(){
//     $('#keyword').on('keyup', function(){
//         textFind($(this).val());
//     })
// });
